import { Element, Container, CONTAINER_DIRECTION } from './base';
import { CSSInlineStyleToObjectString } from '../utils';

let globalIdeModel;

class TranslateContext {
    refComps = new Set();
    preCode = '';
    constructor(obj) {
        Object.assign(this, obj);
    }
    genContext() {
        return new TranslateContext({
            refComps: this.refComps,
            preCode: '',
        })
    }

    useNewContext(callback) {
        const newContext = this.genContext();
        callback(newContext);
        this.preCode = newContext.preCode + this.preCode;
    }
}

export class AntdElement extends Element {
    renderIDE(context) {
        context.refComps.add(this.tag);
        let compCode = `
    <${this.tag} 
        key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${bindAttributeToIDE(this.source.bindAttrs)}
        ${staticStyleToIDE(this.source.staticStyle)}>`;

        if(this.innerText) {
            compCode += this.innerText;
        }
        compCode += `</${this.tag}>\n`;
        return compCode;
    } 
}

export class AntdContainer extends Container {
    createSubElements(source) {
        let children;
        if(source.concept === 'View') {
            children = source.elements;
        }
        if(source.concept === 'ViewElement') {
            children = source.children;
        }
        if(children) {
            this.elements = children.map(mapFunc(this));
        }
    }

    renderIDE(context) {
        context.refComps.add(this.tag);
        let compCode = `
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${bindAttributeToIDE(this.source.bindAttrs)}
        ${staticStyleToIDE(this.source.staticStyle)}>`;
        if(this.elements.length > 0) {
            this.elements.forEach(el => {
                compCode += el.renderIDE(context);
            });
        } else {
            compCode += `<EmptySlot />`
        }
        compCode += `</${this.tag}>\n`;
        return compCode;
    }
}
 

const EDITABLE_ELEMENT = ['Button'];
class EditableElemet extends AntdElement {
    supportEditContent = true;
    static accept(source) {
        return EDITABLE_ELEMENT.includes(source.tag);
    }
}


export class Root extends AntdContainer {
    isRoot = true;
    renderIDE(dependencies) {
        const context = new TranslateContext();

        let comps = '';
        this.elements.forEach(el => {
            comps += el.renderIDE(context);
        });


        let depDeclare = [];
        let internalComponentID = 1;
        dependencies.forEach(dep => {
            depDeclare.push({
                importKey: `internalComp${internalComponentID++}`,
                url: `@internals/${dep.name}`,
                tag: dep.name
            })
        })

        let refCompCodes = '';
        if(context.refComps.size > 0) {
            
            refCompCodes = 'import { '
            refCompCodes += Array.from(context.refComps).join(',');
            refCompCodes += '} from "antd";'
        }

        
        const internalComps = depDeclare.map(dec => `import ${dec.tag} from "${dec.url}";`).join('\n')
        const file = `
import React from 'react';
import EmptySlot from './Empty.jsx';
import HoistNodePath from './HoistNodePath.jsx'
${internalComps}
${refCompCodes}
${context.preCode}
function View() {
    return (
        <>
            ${comps}
        </>
    )
}
export default View;
`
        return file;
    }
    
}

class FlexContainer extends AntdContainer {
    static accept(source) {
        return source.tag === 'Flex'
    }

    constructor(source) {
        super(source);
        this.direction = CONTAINER_DIRECTION.ROW;
        if(source.bindAttrs.find(attr => attr.name === 'vertical' && attr.value === 'true')) {
            this.direction = CONTAINER_DIRECTION.COLUMN;
        }
    } 
}

class AbsoluteContainer extends AntdContainer {
    isAbsolute = true;

    static accept(source) {
        return source.tag === 'AbsoluteLayout'
    }

    renderIDE(context) {
        let compCode = `
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        className="absoluteLayout" 
        ${bindAttributeToIDE(this.source.bindAttrs)}
        ${staticStyleToIDE(this.source.staticStyle)}>`;
        if(this.elements.length > 0) {
            this.elements.forEach(el => {
                compCode += el.renderIDE(context);
            });
        }
        compCode += `</div>\n`;
        return compCode;
    }
}

class TableContainer extends AntdContainer {
    direction = CONTAINER_DIRECTION.ROW;
    static accept(source) {
        return source.tag === 'Table';
    }
    dropable(element) {
        return element.tag === 'TableColumn'
    }

    createSubElements(source) {
        let children;
        if(source.concept === 'ViewElement') {
            children = source.children;
        }
        if(children) {
            this.elements = children.map(mapFunc(this));
        }
    }

    renderIDE(context) {
        context.refComps.add('Table');
        const columnRefKey = `table_${this.componentKey}_columns`;
        // const dataRefKey = `table_${this.componentKey}_data`;
       
        context.preCode += `
        \nconst ${columnRefKey} = [`;
        context.useNewContext((newContext) => {
            this.elements.forEach(el => {
                context.preCode += el.renderIDE(newContext);
            });
        });
        context.preCode += `];\n`;
       

        let compCode = `
    <div nodepath="${this.nodePath}" 
        ide-iscontainer="true"  
        key="${this.componentKey}"
        ${staticStyleToIDE(this.source.staticStyle)}>
        <Table 
            columns={${columnRefKey}}
            dataSource={[{}, {}, {}]}></Table>
    </div>\n`;
        return compCode;
    }
}

class TableColumn extends AntdContainer {
    
    static accept(source) {
        return source.tag === 'TableColumn';
    }

    dropToAccept(element) {
        return element.tag === 'Table'
    }
    
    dropable(element) {
        return false;
    }

    createSubElements(source) {
        let children;
        if(source.concept === 'ViewElement') {
            children = source.children;
        }
        if(children) {
            this.elements = children.map(mapFunc(this));
        }
    }
    renderIDE(context) {
        const title = this.elements.find(tmpl => tmpl.source.slotTarget === 'title');
        const cell = this.elements.find(tmpl => tmpl.source.slotTarget === 'cell');
        let compCode = `
        {
            ${bindAttributeToKV(this.source.bindAttrs)},
        `;
        if(title) {
            const columnRefKey = `table_column_${this.componentKey}_title`;
            context.preCode += `
            \nconst ${columnRefKey} = () => (
                <>
                <HoistNodePath nodePath="${this.nodePath}" topSelector="th" />`;
            context.useNewContext((newContext) => {
                context.preCode += title.renderIDE(newContext);
            });
            context.preCode += `</>);\n`;
            compCode += `title: ${columnRefKey},`
        }
        compCode += `
                render: () => (
                    ${cell.renderIDE(context)}
                ),
            },`

        return compCode;
    }
}

class OpenTemplate extends AntdContainer {
    draggable = false;
    static accept(source) {
        return source.tag === 'OpenTemplate';
    }
    createSubElements(source) {
        let children;
        if(source.concept === 'ViewElement') {
            children = source.children;
        }
        if(children) {
            this.elements = children.map(mapFunc(this));
        }
    }
    renderIDE(context) {
        let comps = '';
        if(this.elements.length > 0) {
            this.elements.forEach(el => {
                comps += el.renderIDE(context);
            });
        } else {
            comps += `<EmptySlot />`
        }
        let compCode = `
        <div nodepath="${this.nodePath}" ide-draggable="false">
            ${comps}
        </div>`

        return compCode;
    }
}

function bindAttributeToKV(bindAttrs) {
    if(bindAttrs && bindAttrs.length > 0) {
        return bindAttrs.map(attr => `${attr.name}: "${attr.value}"`).join(',\n')
    } 
    return '';
}

function bindAttributeToIDE(bindAttrs) {
    if(bindAttrs && bindAttrs.length > 0) {
        return bindAttrs.map(attr => `${attr.name}="${attr.value}"`).join(' ')
    } 
    return '';
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

export function ideCommonAttributes(c) {
    return `key="${c.componentKey}" nodepath="${c.nodePath}" 
    ${bindAttributeToIDE(c.source.bindAttrs)}
    ${staticStyleToIDE(c.source.staticStyle)}`
}


const ViewElementClass = [
    AbsoluteContainer,
    FlexContainer,
    TableContainer,
    TableColumn,
    OpenTemplate,
    EditableElemet,
    AntdElement
]

function makeRootUIElement(source, ideModel) {
    globalIdeModel = ideModel;
    return new Root(source);
}

function mapFunc(parent) {
    return globalIdeModel.mapElements(parent);
}

export default {
    viewCtors: ViewElementClass,
    makeRootUIElement
}
