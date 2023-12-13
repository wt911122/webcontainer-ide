class BaseNode {
    parentNode = null;
    getSiblings() { }
    getChildren() { }
    getChildIndex(node) { }
    insertNodeBefore(node, newNode) {}
    insertNodeAfter(node, newNode) {}
    clone() {}
    deleteChild(node) {}
    delete() {}
    addChild(newNode) {}
}
export class View extends BaseNode {
    elements = [];
    constructor(source) {
        super();
        const mapFunc = makeViewElement(this)
        if(source.elements) {
            this.elements = source.elements.map(mapFunc)
        }
    }
    get nodePath() {
        return 'rootview';
    }

    getChildren() {
        return this.elements;
    }

    getChildIndex(node) {
        return this.elements.findIndex(n => n === node);
    }
    insertNodeBefore(node, newNode) {
        if(newNode.parentNode) {
            newNode.delete();
        }
        const idx = this.getChildIndex(node);
        if(idx!==-1){
            this.elements.splice(idx, 0, newNode)
            newNode.parentNode = this;
        }
    }
    insertNodeAfter(node, newNode) {
        if(newNode.parentNode) {
            newNode.delete();
        }
        const idx = this.getChildIndex(node);
        if(idx!==-1){
            this.elements.splice(idx+1, 0, newNode)
            newNode.parentNode = this;
        }
    }
    addChild(newNode) {
        if(newNode.parentNode) {
            newNode.delete();
        }
        this.elements.push(newNode)
        newNode.parentNode = this;
    }
    deleteChild(node) {
        const idx = this.getChildIndex(node);
        if(idx!==-1){
            this.elements.splice(idx, 1)
        }
    }

    toReactFCFile() {
        const refComps = new Set();
        let comps = '';
        this.elements.forEach(el => {
            comps += el.toReactFCComponent(refComps);
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

    toVueTmplFile() {
        let comps = '';
        this.elements.forEach(el => {
            comps += el.toVueTmplComponent();
        });

        const file = `
<template>
    ${comps}
</template>
        `
        return file;
    }
}

export function CSSInlineStyleToObject(styles) {
    const styleObj = styles.split(';').map(cur => cur.split(':')).reduce((acc, val) => {
        if(val.length === 2) {
            let [key, value] = val;
            key = key.trim().replace(/-./g, css => css.toUpperCase()[1])
            acc[key] = value.trim();
        }
        return acc;
    }, {});
    return styleObj;
}

export function CSSToStaticStyle (styles) {
    let str = '';
    for (const [key, val] of Object.entries(styles)) {
        str += `${key}:${val};`
    }
    return str;
}

function CSSInlineStyleToObjectString (styles) {
    const styleObj = CSSInlineStyleToObject(styles);
    try {
        return JSON.stringify(styleObj);
    } catch (err) {
        return '';
    }
}
     

export class ViewElement extends BaseNode{
    static accept() {
        return true;
    }
    tag = ''
    innerText = ''
    children = []
    bindAttrs = [];
    staticStyle = '';

    get nodePath() {
        if(!this.parentNode) {
            return undefined;
        }
        const parentNode = this.parentNode;
        let list;
        if(parentNode instanceof ViewElement) {
            list = parentNode.children;
        }

        if(parentNode instanceof View) {
            list = parentNode.elements;
        }

        const idx = list.findIndex(elem => elem === this);
        if(idx === -1) {
            return null;
        }

        return `${parentNode.nodePath}.${idx}`;
    }

    getChildren() {
        return this.children;
    }
    getChildIndex(node) {
        return this.children.findIndex(n => n === node);
    }
    insertNodeBefore(node, newNode) {
        if(newNode.parentNode) {
            newNode.delete();
        }
        const idx = this.getChildIndex(node);
        if(idx!==-1){
            this.children.splice(idx, 0, newNode)
            newNode.parentNode = this;
        }
    }
    insertNodeAfter(node, newNode) {
        if(newNode.parentNode) {
            newNode.delete();
        }
        const idx = this.getChildIndex(node);
        if(idx!==-1){
            this.children.splice(idx+1, 0, newNode)
            newNode.parentNode = this;
        }
    }
    addChild(newNode) {
        if(newNode.parentNode) {
            newNode.delete();
        }
        this.children.push(newNode)
        newNode.parentNode = this;
    }

    constructor(source) {
        super();
        this.tag = source.tag;
        this.innerText = source.innerText;
        this.staticStyle = source.staticStyle || '';
        if(source.children) {
            const mapFunc = makeViewElement(this);
            this.children = source.children.map(mapFunc)
        }
        if(source.bindAttrs) {
            const mapAttr = makeBindAttribute(this);
            this.bindAttrs = source.bindAttrs.map(mapAttr)
        }
    }

    toReactFCComponent(refComps) {
        refComps.add(this.tag);
        let compCode = `<${this.tag} nodepath="${this.nodePath}" ide-iscontainer="${this.elementMeta.isContainer}" ${this.bindAttrs.map(a => a.toReactFCComponent()).join(' ')}`;
        if(this.staticStyle.trim()) {
            const style = CSSInlineStyleToObjectString(this.staticStyle.trim());
            if(style) {
                compCode += ` style={${style}} `;
            }
            
        }
        compCode += '>'
        if(this.children) {
            if(this.children.length === 0 && this.elementMeta.isContainer) {
                compCode += `<EmptySlot />`
            }
            this.children.forEach(el => {
                compCode += el.toReactFCComponent(refComps);
            });
            
        }
        if(this.innerText) {
            compCode += this.innerText;
        }
        compCode += `</${this.tag}>\n`;
        return compCode;
    }

    toVueTmplComponent() {
        let compCode = `<${this.tag} nodepath="${this.nodePath}" ide-iscontainer="${this.elementMeta.isContainer}" ${this.bindAttrs.map(a => a.toReactFCComponent()).join(' ')}>`;
        if(this.children) {
            this.children.forEach(el => {
                compCode += el.toVueTmplComponent();
            })
        }
        if(this.innerText) {
            compCode += this.innerText;
        }
        compCode += `</${this.tag}>\n`;
        return compCode;
    }

    getSiblings() {
        const parentNode = this.parentNode;
        let list;
        if(parentNode instanceof ViewElement) {
            list = parentNode.children;
        }

        if(parentNode instanceof View) {
            list = parentNode.elements;
        }
        const idx = list.findIndex(n => n === this);
        return {
            prev: list[idx-1],
            after: list[idx+1],
        }
    }
    deleteChild(node) {
        const idx = this.getChildIndex(node);
        if(idx!==-1){
            this.children.splice(idx, 1)
        }
    }
    delete() {
       this.parentNode.deleteChild(this);
    }
    // clone() {
    //     return new ViewElement(this)
    // }
}


export class AbsoluteElement extends ViewElement {
    static accept(source) {
        return source.tag === 'AbsoluteLayout'
    }

    toReactFCComponent(refComps) {
        let compCode = `<div nodepath="${this.nodePath}" className="absoluteLayout" ${this.bindAttrs.map(a => a.toReactFCComponent()).join(' ')}>`;
        if(this.children) {
            this.children.forEach(el => {
                compCode += el.toReactFCComponent(refComps);
            });
        }
        compCode += `</div>\n`;
        return compCode;
    }
}

export class BindAttribute extends BaseNode {
    name = '';
    value = '';

    constructor(source) {
        super();
        this.name = source.name;
        this.value = source.value;
    }

    toReactFCComponent() {
        return `${this.name}="${this.value}"`
    }

    toVueTmplComponent() {
        return `${this.name}="${this.value}"`
    }
}

import { Element, Container } from './view-model';

export function UIAdapter(model) {
    switch(model.tag) {
        case 'Button':
            return new Element({
                supportEditContent: true,
            });
        case 'AbsoluteLayout':
            return new Container({
                isAbsolute: true,
            });
        case 'Flex':
            return new Container();
        default: 
            return new Element();
    }
}

export function makeView(rootView) { 
    return new View(rootView);
}

// order matters
const ViewElementClass = [
    AbsoluteElement,
    ViewElement
]

function makeViewElement(parent) {
    return (source) => {
        const Ctor = ViewElementClass.find(c => c.accept(source));
        const element = new Ctor(source);
        element.elementMeta = UIAdapter(element);
        element.parentNode = parent;
        return element;
    }
}

function makeBindAttribute(parent) {
    return (source) => {
        const element = new BindAttribute(source);
        element.parentNode = parent;
        return element;
    }
}

export function getNodeByNodePath(rootNode, nodePath) {
    const path = nodePath.split('.');
    path.shift();
    let element = rootNode.elements[path.shift()];
    while(path.length) {
        const index = path.shift();
        element = element.children[index];
    }
    return element;
}