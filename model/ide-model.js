export class IDEModel {
    _UILibModel = null;
    source = null;
    _makeRootUIElement = null;

    _ctors = [];
    _dependencies = [];
    

    constructor(source) {
        this.source = source;
    }

    useUI({ viewCtors, makeRootUIElement }) {
        this._ctors = [].concat(viewCtors);
        this._makeRootUIElement = makeRootUIElement;
    }

    mapElements(parent) {
        return (source) => {
            const element = this.makeUIElement(source);
            if(element) {
                element.parentNode = parent;
            }
            return element;
        }
    }
    makeUIElement(source) {
        const Ctor = this._ctors.find(ctor => ctor.accept(source));
        if(Ctor) {
            return new Ctor(source);
        }
        return null;
    }

    async registComponent(Module) {
        if(Module.type === 'component') {
            const _t = new function(){
                eval(Module.element);
            };
            const Ctor = _t.internal.element.default;
            this._ctors.unshift(Ctor);
            this._dependencies.push({
                name: Module.name,
                version: Module.version,
            })
        }
    } 

    refresh() {
        this._UILibModel = this._makeRootUIElement(this.source, this);
    }
    genCode() {
        return this._UILibModel.renderIDE(this._dependencies);
    }
    getRoot() {
        return this._UILibModel;
    }
    genUIModel(source) {
        return this.makeUIElement(source);
    }
}