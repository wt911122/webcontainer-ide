export class IdeModelManager {
    _root           = null;
    _rootCtor       = null;
    _elementCtor    = null;
    _schema =   new Map();

    attachSchema(schema) {
        for(let comp in schema) {
            if(!this._schema.get(comp)){
                this._schema.set(comp, schema[comp]);
            }
        }
    }

    attachModel({ createRoot, createElement }){
        this._createRoot = createRoot;
        this._createElement = createElement
    }

    makeUIElement(source) {
        const schema = this._schema.get(source.tag)
        return this._createElement(source, schema);
    }

    getRoot() {
        return this._root;
    }

    genCode(project) {
        return this._root.renderIDE()(project);
    }

    _iteratorCreate(source, parentModel) {
        const schema = this._schema.get(source.tag)
        const Element = this._createElement(source, schema);
        Element.parentNode = parentModel;
        const children = source.children;
        if(children) {
            children.forEach(s => {
                if(s.slotTarget) {
                    // nasl slotTarget
                    const slotSchema = schema.slots.find(s => s.name === s.slotTarget)
                    Element.elements.push(this._iteratorCreateTemplate(s, Element, slotSchema));
                } else {
                    Element.elements.push(this._iteratorCreate(s, Element));
                }
            });
        }
        return Element;
    }

    _iteratorCreateTemplate(source, parentModel, slotSchema) {
        const Element = this._createElement(source, slotSchema);
        Element.parentNode = parentModel;
        const children = source.children;
        if(children) {
            children.forEach(s => {
                Element.elements.push(this._iteratorCreate(s, Element));
            });
        }
        return Element;
    }

    genModel(source) {
        const Root = this._createRoot(source);
        source.elements.forEach(s => {
            const element = this._iteratorCreate(s, Root);
            Root.elements.push(element);
        });
        this._root = Root;
    }
    
    getNodeByNodePath(nodePath) {
        const path = nodePath.split('.');
        path.shift();
        let element = this._root.elements[path.shift()];
        while(path.length) {
            const index = path.shift();
            element = element.elements[index];
        }
        return element;
    }
}