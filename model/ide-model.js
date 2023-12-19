export class IDEModel {
    _UILibModel = null;
    source = null;
    _makeRootUIElement = null;
    _makeUIElement = null;

    constructor(source) {
        this.source = source;
    }

    useUI({ makeRootUIElement, makeUIElement }) {
        this._makeRootUIElement = makeRootUIElement;
        this._makeUIElement = makeUIElement;
    }

    refresh() {
        this._UILibModel = this._makeRootUIElement(this.source);
    }
    genCode() {
        return this._UILibModel.renderIDE();
    }
    getRoot() {
        return this._UILibModel;
    }
    genUIModel(source) {
        return this._makeUIElement(source);
    }
}