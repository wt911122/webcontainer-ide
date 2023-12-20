import { Element, Container, CONTAINER_DIRECTION } from './base';

class CloudElement extends Element {
    renderIDE() {
        let compCode = `
    <${this.tag} 
        key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${bindAttributeToIDE(this.source.bindAttrs)}
        ${staticStyleToIDE(this.source.staticStyle)}>`;

        compCode += `</${this.tag}>\n`;
        return compCode;
    } 
}

class CloudContainer extends Container {
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

    renderIDE() {
        let compCode = `
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${bindAttributeToIDE(this.source.bindAttrs)}
        ${staticStyleToIDE(this.source.staticStyle)}>`;
        if(this.elements.length > 0) {
            this.elements.forEach(el => {
                compCode += el.renderIDE();
            });
        } else {
            compCode += `<EmptySlot />`
        }
        compCode += `</${this.tag}>\n`;
        return compCode;
    }
}
 

const EDITABLE_ELEMENT = ['u-button'];
class EditableElemet extends CloudElement {
    supportEditContent = true;
    static accept(source) {
        return EDITABLE_ELEMENT.includes(source.tag);
    }
}


export class Root extends CloudContainer {
    isRoot = true;
    renderIDE() {
        let comps = '';
        this.elements.forEach(el => {
            comps += el.renderIDE();
        });
        const file = `
        <template>
            <div id="root">
            ${comps}
            </div>
        </template>
        <script>
        import EmptySlot from './Empty.vue'
        export default {
            components: {
                EmptySlot
            }
        }
        </script>
                `
        return file;
    }
    
}

class LinearLayoutContainer extends CloudContainer {
    static accept(source) {
        return source.tag === 'u-linear-layout'
    }

    constructor(source) {
        super(source);
        this.direction = CONTAINER_DIRECTION.ROW;
        if(source.bindAttrs.find(attr => attr.name === 'direction' && attr.value === 'vertical')) {
            this.direction = CONTAINER_DIRECTION.COLUMN;
        }
    } 
}

class AbsoluteContainer extends CloudContainer {
    isAbsolute = true;

    static accept(source) {
        return source.tag === 'AbsoluteLayout'
    }

    renderIDE() {
        let compCode = `
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        class="absoluteLayout" 
        ${bindAttributeToIDE(this.source.bindAttrs)}
        ${staticStyleToIDE(this.source.staticStyle)}>`;
        if(this.elements.length > 0) {
            this.elements.forEach(el => {
                compCode += el.renderIDE();
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
        return ` style="${staticStyle.trim()}" `;
    }
    return '';
}


const ViewElementClass = [
    AbsoluteContainer,
    LinearLayoutContainer,
    EditableElemet,
    CloudElement
]

function makeUIElement(source) {
    const Ctor = ViewElementClass.find(c => c.accept(source));
    return new Ctor(source);
}

function makeRootUIElement(source) {
    return new Root(source);
}

function mapFunc(parent) {
    return (source) => {
        const element = makeUIElement(source);
        element.parentNode = parent;
        return element;
    }
}

export default {
    makeUIElement,
    makeRootUIElement
}
