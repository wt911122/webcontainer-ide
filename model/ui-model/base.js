let key = 1;
export class Element {
    static accept() {
        return true;
    }
    componentKey = 0;
    parentNode = null;
    tag = '';
    isContainer = false;
    supportEditContent = false; // 是否可以编辑
    draggable = true;           // 是否可拖拽


    get staticStyle() {
        return this.source.staticStyle;
    }

    set staticStyle(val) {
        this.source.staticStyle = val;
    }

    get innerText() {
        return this.source.innerText;
    }

    set innerText(val) {
        this.source.innerText = val
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



    constructor(source) {
        this.source = source;
        this.tag = source.tag;
        this.componentKey = key++;
    }
    updateComponentKey() {
        this.componentKey = key++;
    }

    getSiblings() { }

    renderIDE(refComps) {
        throw 'renderIDE need implementation!'
    }  
    
    dropToAccept(element) {
        return true;
    }
    
}

export const CONTAINER_DIRECTION = {
    ROW: 'row',
    COLUMN: 'column',
    FREE: 'free',
    AUTO: 'auto',
}

export class Container extends Element {
    isRoot = false;
    isContainer = true;
    direction = CONTAINER_DIRECTION.AUTO;
    elements = [];
    // dropable = true;

    dropable(element) {
        return true;
    }

    constructor(source) {
        super(source);
        this.createSubElements(source);
    }

    createSubElements(source) {
        throw 'createSubElements need implementation!'
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

    renderIDE(refComps) {
        throw 'renderIDE need implementation!'
    }
}


export function getNodeByNodePath(rootNode, nodePath) {
    const path = nodePath.split('.');
    path.shift();
    let element = rootNode.elements[path.shift()];
    while(path.length) {
        const index = path.shift();
        element = element.elements[index];
    }
    return element;
}