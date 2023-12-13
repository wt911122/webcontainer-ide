export class Element {
    tag = '';
    isContainer = false;
    supportEditContent = false;
    constructor(configs) {
        Object.assign(this, configs);
    }
}

export const CONTAINER_DIRECTION = {
    ROW: 'row',
    COLUMN: 'column',
    FREE: 'free',
    AUTO: 'auto',
}

export class Container extends Element {
    isContainer = true;
    isAbsolute = false;
    direction = CONTAINER_DIRECTION.ROW;
    constructor(configs) {
        super(configs);
        Object.assign(this, configs);
    }
}
