export class Element {
    tag = '';
    isContainer = false;
}

export const CONTAINER_DIRECTION = {
    ROW: 'row',
    COLUMN: 'column',
    FREE: 'free',
    AUTO: 'auto',
}

export class Container extends Element {
    isContainer = true
    direction = CONTAINER_DIRECTION.ROW;
}
