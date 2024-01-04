let uuid = 0;
class BaseNode {
    concept = '';
    constructor(source) {
        this.id = uuid++;
        Object.assign(this, source)
        this.concept = source.concept;    
        this.tag = source.tag;
    }
}

export class View extends BaseNode {
    elements = [];
    constructor(source) {
        super(source);
        if(source.elements) {
            this.elements = source.elements.map(s => {
                const el = new ViewElement(s);
                el.parentNode = this;
                el.parentKey = 'elements';
                return el;
            })
        }
    }

    addViewElement(viewElement) {
        viewElement.delete();
        this.elements.push(viewElement);
        viewElement.parentNode = this;
    }

    insertViewElementAt(viewElement, idx) {
        viewElement.delete();
        this.elements.splice(idx, 0, viewElement);
        viewElement.parentNode = this;
    }

    removeViewElement(viewElement) {
        const idx = this.elements.findIndex(n => n === viewElement);
        if(idx!==-1){
            this.elements.splice(idx, 1);
            viewElement.parentNode = undefined;
        }
    }

    getViewElementIdx(viewElement) {
        return this.elements.findIndex(n => n === viewElement);
    }

}

export class ViewElement extends BaseNode {
    tag = undefined;
    staticStyle = undefined;
    staticClass = undefined;
    innerText = undefined;
    bindAttrs = [];
    children = [];

    constructor(source) {
        super(source);
        this.tag = source.tag;
        this.staticStyle = source.staticStyle;
        this.staticClass = source.staticClass;
        this.innerText = source.innerText;
        if(source.children) {
            this.children = source.children.map(s => {
                const el = new ViewElement(s);
                el.parentNode = this;
                el.parentKey = 'children';
                return el;
            })
        }
        if(source.bindAttrs) {
            this.bindAttrs = source.bindAttrs.map(s => {
                const node = new BindAttribute(s);
                node.parentNode = this;
                node.parentKey = 'bindAttrs';
                return node;
            })
        }
    }

    addViewElement(viewElement) {
        viewElement.delete();
        this.children.push(viewElement);
        viewElement.parentNode = this;
    }

    insertViewElementAt(viewElement, idx) {
        viewElement.delete();
        this.children.splice(idx, 0, viewElement);
        viewElement.parentNode = this;
    }

    removeViewElement(viewElement) {
        const idx = this.children.findIndex(n => n === viewElement);
        if(idx!==-1){
            this.children.splice(idx, 1);
            viewElement.parentNode = undefined;
        }
    }
    delete() {
        if(this.parentNode) {
            this.parentNode.removeViewElement(this);
        }
    }
    getViewElementIdx(viewElement) {
        return this.children.findIndex(n => n === viewElement);
    }
}


function parseIndentifier(exp) {
    return exp.name
}
function parseMemberExp(exp) {
    return `${parseExp(exp.object)}.${parseExp(exp.property)}`
}
function parseExp(exp) {
    if(exp.object) {
        return parseMemberExp(exp);
    }
    return parseIndentifier(exp);
}

class BindAttribute extends BaseNode {
    name = '';
    value = '';

    constructor(source) {
        super(source);
        this.name = source.name;
        this.value = source.value;
        if(source.expression) {
            this.value = parseExp(source.expression);
        }
    }
}


export class Module extends BaseNode {
    name = '';
    version = '';
    constructor(source) {
        super(source);
        this.name = source.name;
        this.version = source.version;
    }
}