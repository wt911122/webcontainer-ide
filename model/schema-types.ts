interface schema {
    name: string;
    lib: string;
    idetype: "element" | "container" | "modal" | undefined;
}

type Accept = boolean | {
    expression: string
} | undefined;

type Selector = {
    expression: string;
    cssSelector: string;
}
type Slot = {
    name: string;
}
type ContainerDirection = 'row' | 'column' | 'auto' | {
    expression: string
}
;

type EmptySlot = {
    condition: string,
    component: string,
    accept: Accept,
}

type DataSource = {
    display: number,
    loopElem: string,
    emptySlot: EmptySlot,
}

type elementSutando = {
    condition: string,
    component: string
}

interface ElementSchema extends schema{
    idetype: 'element' | undefined,
    editable: string,
    parentAccept: Accept,
}


interface ContainerSchema extends schema{
    idetype: 'container',
    containerDirection: ContainerDirection | 'auto',
    DataSource: DataSource | undefined,
    parentAccept: Accept,
    childAccept: Accept,
    Selector: Selector | undefined
    Slots: Array<Slot>
    elementSutando: elementSutando
}


interface ModalSchema extends schema{
    idetype: 'modal',
    DataSource: DataSource | undefined,
    parentAccept: Accept,
    childAccept: Accept,
    Selector: Selector | undefined
    Slots: Array<Slot>
    modalSutando: string,
    elementSutando: elementSutando
}