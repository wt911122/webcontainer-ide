
function expressionResolver(expression, defaultValue) {
    return function(...argus) {
        try{
            const func = eval(`(target) => ${expression}`);

            return func.call(this, ...argus);
        } catch(err) {
            console.error('expression: ', expression, 'resolve failed!')
            return defaultValue;
        }
    }  
}

// containerDirection: string | { expression: expr }
function ContainerDirection(context) {
    const source = context.schema;
    const result = context.result;
    const direction = source.containerDirection;
    let func = () => 'auto';
    if(typeof direction === 'string') {
        func = () => direction
    } 
    if(typeof direction === 'object' && direction.expression) {
        func = expressionResolver(direction.expression, 'row')
    }
    result.containerDirection = func;
}

const noopTrue = () => true;
function ElementSutando(context) {
    const source = context.schema;
    const result = context.result;
    const elementSutando = source.elementSutando;
    if(elementSutando) {
        result.elementSutando = {
            condition: elementSutando.condition ? expressionResolver(elementSutando.condition, true) : noopTrue,
            component: elementSutando.component || 'EmptySlot',
        }
    }
}

function DataSource(context) {
    const source = context.schema;
    const result = context.result;
    const dataSource = source?.dataSource;
    if(dataSource) {
        result.dataSource = {
            display: 3
        }
        if(typeof dataSource.display === 'number') {
            result.dataSource.display = dataSource.display;
        }
        result.dataSource.loopElem = dataSource.loopElem;
        const emptySlot = dataSource.emptySlot;
        if(emptySlot) {
            const accept = emptySlot.accept;
            let func = () => true;
            if(typeof accept === 'string') {
                func = () => accept
            } 
            if(typeof accept === 'object' && accept.expression) {
                func = expressionResolver(accept.expression, false)
            }
            result.dataSource.emptySlot = {
                condition: emptySlot.condition ? expressionResolver(emptySlot.condition, true) : noopTrue,
                component: emptySlot.component || 'EmptySlot',
                accept: func
            }
        }
    }
}

function Slots(context) {
    const source = context.schema;
    const result = context.result;
    if(source.slots &&  source.slots.length > 0){
        result.slots = source.slots.map(slot => ({
            name: slot.name,
            title: slot.title,
            description: slot.description,
            customSlot: slot.customSlot,
        }));
    }
}

const PRIMARY = ['string', 'boolean', 'number']
function isPrimary(variable) {
    return PRIMARY.includes(typeof variable);
}

// ChildAccept: string | boolean | number | { expression: expr } 
function ChildAccept(context) {
    const source = context.schema;
    const result = context.result;
    const childAccept = source.childAccept;
    let func = () => true
    if(isPrimary(childAccept)) {
        func = () => childAccept
    } 
    if(typeof childAccept === 'object' && childAccept.expression) {
        func = expressionResolver(childAccept.expression, false)
    }

    result.childAccept = func;
}
// ParentAccept: string | boolean | number | { expression: expr } 
function ParentAccept(context) {
    const source = context.schema;
    const result = context.result;
    const parentAccept = source.parentAccept;
    let func = () => true
    if(isPrimary(parentAccept)) {
        func = () => parentAccept
    } 
    if(typeof parentAccept === 'object' && parentAccept.expression) {
        func = expressionResolver(parentAccept.expression, false)
    }

    result.parentAccept = func;
}

// Selector:  { expression: expr, cssSelector: string } 
function Selector(context) {
    const source = context.schema;
    const result = context.result;
    const selector = source.selector;
    if(typeof selector === 'object' && selector.expression && selector.cssSelector) {
        result.selector = {
            expression: expressionResolver(selector.expression, false),
            cssSelector: selector.cssSelector,
        }
    }
}

function BaseInfo(context) {
    Object.assign(context.result, {
        name: context.schema.name,
        idetype: context.schema.idetype,
        lib: context.schema.lib,
    })
}

function Editable(context) {
    if(typeof context.schema.editable === 'string') {
        Object.assign(context.result, {
            editable: context.schema.editable,
        })
    }
}

function ModalSutando(context) {
    context.result.modalSutando = context.schema.modalSutando;
}


class ResolverChain { 
    _chain = [];
    _condition = undefined;
    constructor(condition) {
        this._condition = condition;
    }
    add(target) {
        if(target instanceof ResolverChain) {

        }
        this._chain.push(target);
    }
    run(context) {
        this._chain.forEach(target => {
            if(target instanceof ResolverChain) {
                if(target._condition && target._condition(context)) {
                    target.run(context);
                }
            } else {
                target(context);
            }
        })
    }
}

const chain = new ResolverChain();
chain.add(BaseInfo);
const elementChain = new ResolverChain((context) => {
    return !context.result.idetype || context.result.idetype === 'element'
})
const containerChain = new ResolverChain((context) => {
    return context.result.idetype === 'container'
})
const modalChain = new ResolverChain((context) => {
    return context.result.idetype === 'modal'
})
chain.add(elementChain);
chain.add(containerChain);
chain.add(modalChain);

elementChain.add(Editable);
elementChain.add(ParentAccept);
elementChain.add(ElementSutando);

containerChain.add(ContainerDirection);
containerChain.add(ElementSutando);
containerChain.add(DataSource);
containerChain.add(ChildAccept);
containerChain.add(ParentAccept);
containerChain.add(Selector);
containerChain.add(Slots);

modalChain.add(ChildAccept);
modalChain.add(ParentAccept);
modalChain.add(Selector);
modalChain.add(Slots);
modalChain.add(ModalSutando);


function _resolver(schema) {
    const context = {
        schema,
        result: {},
   }
   chain.run(context);
   return context.result;
} 

export function resolverUsage(usage) {
    return usage.reduce((accu, brief) => {
        const schema = _resolver(brief.jsonSchema);
        accu[schema.name] = schema;
        return accu;
    }, {})
}
