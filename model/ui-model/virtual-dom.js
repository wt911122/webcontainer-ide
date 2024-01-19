class DocumentElem {
    tag = '';
    attributes = []
    
    styles = [];
    children = [];
    slots = [];

    constructor({
        tag,
        styles,
        attributes,
    }) {
        this.tag = tag;
        this.attributes = attributes;
        this.styles = styles;
        this.slots = this.slots;
    }

    render() {
        return 
    }

    querySelector() {

    }
}