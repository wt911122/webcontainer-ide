let key = 1;
export class Element {
    componentKey = 0;
    tag = '';
    parentNode = null;
    elements = [];
    draggable = true;
    deletable = true;
    slotTarget = undefined;
    
    get staticStyle() {
        return this.source.staticStyle;
    }

    set staticStyle(val) {
        this.source.staticStyle = val;
    }
    
    get nodePath() {
        if(!this.parentNode) {
            return 'rootview';
        }
        const parentNode = this.parentNode;
        const list = parentNode.elements;

        const idx = list.findIndex(elem => elem === this);
        if(idx === -1) {
            return null;
        }

        return `${parentNode.nodePath}.${idx}`;
    }

    get isModal() {
        return (this._schema?.idetype === 'modal');
    }

    get isContainer() {
        if(this.elementSutando) {
            return !this.elementSutando.condition.call(this);
        }
        return (this._schema?.idetype === 'container');
    }

    get direction() {
        return this._schema?.containerDirection?.call(this) || 'auto';
    }

    get modalSutando() {
        return this._schema?.modalSutando;
    }

    get lib() {
        return this._schema?.lib;
    }

    get supportEditContent() {
        return !!this._schema?.editable;
    }

    get noDefaultSlot() {
        return this._schema?.noDefaultSlot;
    }

    get slotsDefination() {
        return this._schema?.slots || [];
    }

    get dataSource() {
        return this._schema?.dataSource;
    }

    get elementSutando() {
        return this._schema?.elementSutando;
    } 

    // get useStandInCustomSlot() {
    //     if(this.customSlot && this.customSlot.standIn) {
    //         return this.customSlot.condition.call(this);
    //     }
    // }

    constructor(source, schema) {
        this.source = source;
        this.tag = source.tag;
        this.componentKey = key++;
        this._schema = schema;
    }

    dropToAccept(element) {
        return this._schema.parentAccept.call(this, element);
    }
    
    dropable(element) {
        return this._schema.childAccept.call(this, element);
    }

    getAttribute(attr){
        return this.source.bindAttrs.find(a => a.name === attr);
    }

    setAttribute(bindAttr) {
        this.source.addBindAttribute(bindAttr)
    }

    getElement(finder) {
        return this.elements.find(finder);
    }

    elementsLength() {
        return this.elements.length;
    }

    getSelector() {
        if(this._schema?.selector) {
            const { expression } = this._schema.selector;
            const targetElement = expression.call(this);
            return targetElement
        }
    }
    getSelectorHoistTag() {
        if(this._schema.selector) {
            return this._schema.selector.cssSelector;
        }
    }

    updateComponentKey() {
        this.componentKey = key++;
    }

    insertNodeBefore(node, newNode) {
        const source = newNode.source;
        source.delete();
       
        const idx = this.source.getViewElementIdx(node.source);
        if(idx !== -1){
            this.source.insertViewElementAt(source, idx);
        }
    }
    insertNodeAfter(node, newNode) {
        const source = newNode.source;
        source.delete();
        
        const idx = this.source.getViewElementIdx(node.source);
        if(idx!==-1){
            this.source.insertViewElementAt(source, idx+1);
        }
    }

    addChild(newNode) {
        const source = newNode.source;
        source.delete();
        this.source.addViewElement(source);
    }

    updateInnerText(value) {
        this.source.setBindAttributeValue(this._schema.editable, value);
    }

    delete() {
        return this.source.delete();
    }

    renderIDE() {
        throw 'renderIDE need implementation!'
    }
}