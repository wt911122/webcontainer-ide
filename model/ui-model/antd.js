import { Element, Container, CONTAINER_DIRECTION } from './base';
import { CSSInlineStyleToObjectString } from '../utils';

class AntdElement extends Element {
    renderIDE(refComps) {
        refComps.add(this.tag);
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

class AntdContainer extends Container {
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

    renderIDE(refComps) {
        refComps.add(this.tag);
        let compCode = `
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${bindAttributeToIDE(this.source.bindAttrs)}
        ${staticStyleToIDE(this.source.staticStyle)}>`;
        if(this.elements.length > 0) {
            this.elements.forEach(el => {
                compCode += el.renderIDE(refComps);
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
    renderIDE() {
        const refComps = new Set();
        let comps = '';
        this.elements.forEach(el => {
            comps += el.renderIDE(refComps);
        });

        let refCompCodes = '';
        if(refComps.size > 0) {
            refCompCodes = 'import { '
            refCompCodes += Array.from(refComps).join(',');
            refCompCodes += '} from "antd";'
        }
        const file = `
import React from 'react';
import EmptySlot from './Empty.jsx'
${refCompCodes}
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

    renderIDE(refComps) {
        let compCode = `
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        className="absoluteLayout" 
        ${bindAttributeToIDE(this.source.bindAttrs)}
        ${staticStyleToIDE(this.source.staticStyle)}>`;
        if(this.elements.length > 0) {
            this.elements.forEach(el => {
                compCode += el.renderIDE(refComps);
            });
        }
        compCode += `</div>\n`;
        return compCode;
    }
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


const ViewElementClass = [
    AbsoluteContainer,
    FlexContainer,
    EditableElemet,
    AntdElement
]

export function makeUIElement(source) {
    const Ctor = ViewElementClass.find(c => c.accept(source));
    return new Ctor(source);
}

export function makeRootUIElement(source) {
    return new Root(source);
}

function mapFunc(parent) {
    return (source) => {
        const element = makeUIElement(source);
        element.parentNode = parent;
        return element;
    }
}
