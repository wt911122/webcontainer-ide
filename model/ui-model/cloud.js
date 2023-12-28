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
        import HoistNodePath from './HoistNodePath.vue'
        export default {
            components: {
                EmptySlot,
                HoistNodePath
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

class TableContainer extends CloudContainer {
    direction = CONTAINER_DIRECTION.ROW;
    static accept(source) {
        return source.tag === 'u-table-view'
    }

    dropable(element) {
        return element.tag === 'u-table-view-column'
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

    renderIDE() {
        let compCode = `
    <u-table-view class="designer-table" key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        :data-source="[{}, {}, {}]"
        ${bindAttributeToIDE(this.source.bindAttrs, ['data-source', 'value-field'])}
        ${staticStyleToIDE(this.source.staticStyle)}>`;
        if(this.elements.length > 0) {
            this.elements.forEach(el => {
                compCode += el.renderIDE();
            });
        }
        compCode += `</u-table-view>\n`;
        return compCode;
    }
}

function groupBy(arr, key) {
    const map = {};
    arr.forEach(elem => {
        const k = elem[key];
        if(!map[k]){
            map[k] = [];
        }
        map[k].push(elem);
    })
    return map;
}
class TableColumn extends CloudContainer { 
    static accept(source) {
        return source.tag === 'u-table-view-column'
    }

    dropToAccept(element) {
        return element.tag === 'u-table-view'
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
            // const slots = groupBy(children, 'slotTarget');
            // Object.keys(slots).forEach(slot => {
            //     slots[slot].forEach(template => {

            //     })
            // })
            this.elements = children.map(c => {
                const element = new TableColumnSlotTemplate(c);
                element.parentNode = this;
                return element;
            });
            // this.elements = children.map(mapFunc(this));

        }
    }

    renderIDE() {
        let compCode = `
    <u-table-view-column key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${bindAttributeToIDE(this.source.bindAttrs)}
        ${staticStyleToIDE(this.source.staticStyle)}>`;
        this.elements.forEach(el => {
            compCode += el.renderIDE();
        });
        compCode += `</u-table-view-column>\n`;
        return compCode;
    }
}



class TableColumnSlotTemplate extends CloudContainer {
    draggable = false;
    createSubElements(source) {
        let children;
        if(source.concept === 'ViewElement') {
            children = source.children;
        }
        if(children) {
            this.elements = children.map(mapFunc(this));
        }
    }

    renderIDE() {
        console.log(this.source)
        const useHoist = ['title'].includes(this.source.slotTarget);
        let hositCode = useHoist ? `<HoistNodePath nodePath="${this.parentNode.nodePath}" topSelector="${this.source.slotTarget === 'title'?'th':'td'}"></HoistNodePath>` : '';
        let compCode = `
    <template #${this.source.slotTarget}="${this.source.slotScope}"
        ${bindAttributeToIDE(this.source.bindAttrs)}>
        <div nodepath="${this.nodePath}" ide-draggable="false">
        ${hositCode}
        `
        if(this.elements.length === 0 ) {
            compCode += `<EmptySlot/>`
        } else {
            this.elements.forEach(el => {
                compCode += el.renderIDE();
            });
        }
        
        compCode += `</div></template>\n`;
        return compCode;
    }
}

class SlotTemplate extends CloudContainer {
    createSubElements(source) {
        let children;
        if(source.concept === 'ViewElement') {
            children = source.children;
        }
        if(children) {
            this.elements = children.map(mapFunc(this));
        }
    }

    renderIDE() {
        let compCode = `
    <template key="${this.componentKey}" 
        #${this.source.slotTarget}="${this.source.slotScope}"
        ${bindAttributeToIDE(this.source.bindAttrs)}>`;
        this.elements.forEach(el => {
            compCode += el.renderIDE();
        });
        compCode += `</template>\n`;
        return compCode;
    }
}


function bindAttributeToIDE(bindAttrs, ignoreAttrs = []) {
    if(bindAttrs && bindAttrs.length > 0) {
        return bindAttrs.filter(attr => !ignoreAttrs.includes(attr.name)).map(attr => `${attr.name}="${attr.value}"`).join(' ')
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
    TableContainer,
    TableColumn,
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
