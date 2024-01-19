import { Element } from './standard-base';
import { CSSInlineStyleToObjectString } from '../utils';

class TranslateContext {
    refComps = new Map();
    refs = new Map();
    refID = 0;
    classRefs = new Map();
    classID = 0;

    moduleCSSObjectName = '_styles';
    addDependence(component, lib) {
        const comps = this.refComps;
        let s = comps.get(lib);
        if(!s) {
            s = new Set();
            comps.set(lib, s);
        }
        s.add(component)
    }

    addClass(nodepath) {
        let ref = `ide-style${this.classID++}`;
        const classDef = {
            ref,
            style: '',
        };
        this.classRefs.set(nodepath, classDef);
        return classDef;
    }
    genModuleCSSFile() {
        let code = '';
        this.classRefs.forEach((value) => {
            code += `${value.style}\n`;
        });
        return code;
    }

    addRef(nodepath) {
        let refVar = `ref${this.refID++}`;
        this.refs.set(nodepath, refVar);
        return refVar;
    }
    genRefs() {
        let declareCode = '';
        let properyCode = 'const refs = {\n';
        this.refs.forEach((value, key) => {
            declareCode += `const ${value} = useRef(null);\n`;
            properyCode += `['${key}']: ${value},\n`;
        });
        properyCode += `}
window._ideCallComponentMethod = function(nodepath, method, ...args) {
    refs[nodepath].current[method](...args);
}
        `

        return declareCode + properyCode;
    }
    genCode() {
        let code = '';
        this.refComps.forEach((value, key) => {
            code += `import { ${Array.from(value).join(',')} } from "${key}";\n`;
        });
        return code;
    }
}

export class ReactRoot extends Element {
    isRoot = true;
    renderIDE() {
        const context = new TranslateContext();

        let comps = '';
        this.elements.forEach(el => {
            comps += el.renderIDE(context);
        });
        

        const script = `
import React, { useRef } from 'react';
import EmptySlot from './Empty.jsx';
import HoistNodePath from './HoistNodePath.jsx';
import './style.css';
${context.genCode()}


function View() {
    ${context.genRefs()}
    return (
        <>
            ${comps}
        </>
    )
}
export default View;
`
        const moduleCSSFile = context.genModuleCSSFile();
        console.log(script, moduleCSSFile);
        return (project) => {
            project.mutateFile('/src/App.jsx', script);
            project.mutateFile('/src/style.css', moduleCSSFile);
        }
    }
    dropable() {
        return true;
    }
    get direction() {
        return 'auto';
    }
    get isContainer() {
        return true;
    }


}

export class ReactElement extends Element {
    _renderHoist(selector, elem) {
        let _hoist = '';
        if(selector === elem) {
            _hoist = `<HoistNodePath nodePath="${this.nodePath}" topSelector="${this.getSelectorHoistTag()}" />`;
        }
        return _hoist;
    }
    renderIDE(context) {
        if(this.lib) {
            context.addDependence(this.tag, this.lib);
        }
        const ref = context.addRef(this.nodePath)
        const staticStyle = staticStyleToIDE(this.staticStyle);
        const attrs = [];
        attrs.push(['key', stringAttrWrapper(this.componentKey)]);
        attrs.push(['nodepath', stringAttrWrapper(this.nodePath)]);
        attrs.push(['ref', `{${ref}}`]);
        
        if(this.elementSutando) {
            const elementSutando = this.elementSutando;
            if(elementSutando.condition.call(this)) {
                const tag =  elementSutando.component;  
                context.addDependence(tag, this.lib);
                return `<${tag} ${attrs.map(attr => `${attr[0]}=${attr[1]}`).join(' ')} ${staticStyle} />`;
            }
        }
        if(this.isContainer) {
            attrs.push(['ide-iscontainer', stringAttrWrapper('true')])
        }

        const bindAttrs = this.source.bindAttrs || [];
        bindAttrs.forEach(bind => {
            attrs.push([bind.name, stringAttrWrapper(bind.value)])
        });
        
        const selector = this.getSelector();
        if(this.slotsDefination.length > 0) {
            // slot
            this.slotsDefination.forEach(def => {
                const name = def.name;
                const elem = this.elements.find(tmpl => tmpl.source.slotTarget === name);
                if(elem) {
                    const _hoist = this._renderHoist(selector, elem);
                    attrs.push([name, `{() => (<>
${_hoist}${elem.renderIDE(context)}
</>)}`])
                }
            });
            return `<${this.tag} ${attrs.map(attr => `${attr[0]}=${attr[1]}`).join(' ')} ${staticStyle} />`;
        }

        // child
        let compCode = `<${this.tag} ${attrs.map(attr => `${attr[0]}=${attr[1]}`).join(' ')} ${staticStyle}>`;
        if(this.isContainer) {
            if(this.elements.length > 0){
                this.elements.forEach(el => {
                    if(selector === el) {
                        const _hoist = this._renderHoist(selector, el);
                        compCode += _hoist;
                    }
                    compCode +=  el.renderIDE(context);
                });
            } else {
                // let slotTag = 'EmptySlot';
                // if(this.customSlot) {
                //     context.addDependence(this.customSlot, this.lib);
                //     slotTag = this.customSlot;
                // }
                compCode += `<EmptySlot />`
            }
            
        }
        // if(!this.isContainer && this.innerText) {
        //     compCode += this.innerText;
        // }
        compCode += `</${this.tag}>\n`;
        return compCode;
    }
}

class ReactDataSourceElement extends Element {
    renderIDE(context) {
        if(this.lib) {
            context.addDependence(this.tag, this.lib);
        }
        const ref = context.addRef(this.nodePath)
        const staticStyle = staticStyleToIDE(this.staticStyle);
        const attrs = [];
        attrs.push(['key', stringAttrWrapper(this.componentKey)]);
        attrs.push(['nodepath', stringAttrWrapper(this.nodePath)]);
        attrs.push(['ref', `{${ref}}`]);
        if(this.isContainer) {
            attrs.push(['ide-iscontainer', stringAttrWrapper('true')])
        }
        const dataSourceSchema = this.dataSource;
        if(dataSourceSchema.emptySlot) {
            const dataSourceEmptySlotSchema = dataSourceSchema.emptySlot;
            if(dataSourceEmptySlotSchema.condition.call(this)) {
                const tag =  dataSourceEmptySlotSchema.component;  
                context.addDependence(tag, this.lib);
                return `<${tag} ${attrs.map(attr => `${attr[0]}=${attr[1]}`).join(' ')} ${staticStyle} />`;
            }
        }
        const bindAttrs = this.source.bindAttrs || [];
        bindAttrs.forEach(bind => {
            if(bind.name !== 'dataSource') {
                attrs.push([bind.name, stringAttrWrapper(bind.value)])
            } else {
                const _s = `{[${new Array(dataSourceSchema.display).fill('{}').join(',')}]}`
                attrs.push(['dataSource', _s])
            }
        });
        const loopElem = dataSourceSchema.loopElem;
        if(loopElem) {
            const classDef = context.addClass(this.nodePath);
            const classRef = classDef.ref;
            classDef.style = genDatasourceShadow(`.${classRef} ${loopElem.trim()}`)
            attrs.push(['className', `"${classRef}"`])
        }
        
        let compCode = `<${this.tag} ${attrs.map(attr => `${attr[0]}=${attr[1]}`).join(' ')} ${staticStyle}>`;
        this.elements.forEach(el => {
            compCode +=  el.renderIDE(context);
        });
        compCode += `</${this.tag}>\n`;
        return compCode;
    }

    dropable(element) {
        const dataSourceSchema = this.dataSource;
        if(dataSourceSchema.emptySlot) {
            return dataSourceSchema.emptySlot.accept.call(this, element);
        }
        return this._schema.childAccept.call(this, element);
    }
}

class ReactSlotTemplate extends Element {
    deletable = false;
    draggable = false;
    slotTarget = '';
    constructor(source, schema) {
        super(source, schema)
        this.slotTarget = source.slotTarget
    }
    dropable() {
        return true;
    }
    renderIDE(context) {
        let comps = '';
        if(this.elements.length > 0) {
            this.elements.forEach(el => {
                comps += el.renderIDE(context);
            });
        } else {
            let slotTag = 'EmptySlot';
            if(this.customSlot) {
                context.addDependence(this.customSlot,  this.parentNode.lib);
                slotTag = this.customSlot;
            }
            comps += `<${slotTag} />`
        }
        let compCode = `
        <div nodepath="${this.nodePath}" ide-draggable="false">
            ${comps}
        </div>`

        return compCode;
    }
}

class ReactModalLike extends Element {
    _renderHoist(selector, elem) {
        let _hoist = '';
        if(selector === elem) {
            _hoist = `<HoistNodePath nodePath="${this.nodePath}" topSelector="${this.getSelectorHoistTag()}" mainmodal="true" />`;
        }
        return _hoist;
    }

    renderIDE(context) {
        if(this.lib) {
            context.addDependence(this.tag, this.lib);
        }
        const ref = context.addRef(this.nodePath);
        const staticStyle = staticStyleToIDE(this.staticStyle);
        const attrs = [];
        attrs.push(['key', stringAttrWrapper(this.componentKey)]);
        attrs.push(['nodepath', stringAttrWrapper(this.nodePath)]);
        let sutandoCode = '';
        if(this.modalSutando) {
            const modalSutando = this.modalSutando;
            context.addDependence(modalSutando, this.lib);
            sutandoCode = `<${modalSutando} ${attrs.map(attr => `${attr[0]}=${attr[1]}`).join(' ')} ${staticStyle}/>\n`;
        }
       
          
        const modalAttr = [];
        modalAttr.push(['nodepath', stringAttrWrapper(this.nodePath)]);
        modalAttr.push(['ref', `{${ref}}`]);
        const bindAttrs = this.source.bindAttrs || [];
        bindAttrs.forEach(bind => {
            modalAttr.push([bind.name, stringAttrWrapper(bind.value)])
        });
        // modal special props
        if(this.source?._cacheStatus) {
            modalAttr.push(['open', `{${this.source?._cacheStatus.open}}`])
        }
        const selector = this.getSelector();
        this.slotsDefination.forEach(def => {
            const name = def.name;
            const elem = this.elements.find(tmpl => tmpl.source.slotTarget === name);
            if(elem) {
                const _hoist = this._renderHoist(selector, elem);
                modalAttr.push([name, `{() => (<>
${_hoist}${elem.renderIDE(context)}
</>)}`])
            }
        });
        
        let compCode = `<${this.tag} ${modalAttr.map(attr => `${attr[0]}=${attr[1]}`).join(' ')} />`;

        return sutandoCode + compCode;
    }
}


export function createRoot(source) {
    return new ReactRoot(source);
}

export function createElement(source, schema) {
    if(source.slotTarget) {
        return new ReactSlotTemplate(source, schema);
    }
    if(schema.idetype === 'modal') {
        return new ReactModalLike(source, schema);
    }
    if(schema.dataSource) {
        return new ReactDataSourceElement(source, schema);
    }
    return new ReactElement(source, schema);
}

function staticStyleToIDE(staticStyle) {
    if(staticStyle && staticStyle.trim()) {
        const style = CSSInlineStyleToObjectString(staticStyle.trim());
        if(style) {
            return ` style={${style}} `;
        }
    }
    return '';
}

function stringAttrWrapper(str) {
    return `"${str}"`;
}

function genDatasourceShadow(_selector) {
    return `${_selector}:nth-child(n+2){
        position: relative;
        pointer-events: none;             
    }
    ${_selector}:nth-child(n+2)::after {
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(255,255,255,0.8);
        z-index: 999;
    }`
}

export default {
    createRoot,
    createElement
}