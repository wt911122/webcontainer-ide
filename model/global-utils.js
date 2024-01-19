import { ViewElement } from './lang-model';

export function resolveDataSource() {
    return true
}

const demoTable = [
    {
        "concept": "ViewElement",
        "tag": "Column",
        "bindAttrs": [
            {
                "concept": "BindAttribute",
                "name": "dataIndex",
                "value": "name"
            },
            {
                "concept": "BindAttribute",
                "name": "key",
                "value": "name"
            }
        ],
        "children": [
            {
                "concept": "ViewElement",
                "tag": "template",
                "slotTarget": "title",
                "children": [
                    {
                        "concept": "ViewElement",
                        "tag": "Text",
                        "innerText": "Name"
                    }
                ]
            },
            {
                "concept": "ViewElement",
                "tag": "template",
                "slotTarget": "render",
                "children": [
                    {
                        "concept": "ViewElement",
                        "tag": "Link",
                        "innerText": "name"
                    }
                ]
            }
        ]
    },
    {
        "concept": "ViewElement",
        "tag": "Column",
        "bindAttrs": [
            {
                "concept": "BindAttribute",
                "name": "dataIndex",
                "value": "age"
            },
            {
                "concept": "BindAttribute",
                "name": "key",
                "value": "age"
            }
        ],
        "children": [
            {
                "concept": "ViewElement",
                "tag": "template",
                "slotTarget": "title",
                "children": [
                    {
                        "concept": "ViewElement",
                        "tag": "Text",
                        "innerText": "Age"
                    }
                ]
            },
            {
                "concept": "ViewElement",
                "tag": "template",
                "slotTarget": "render",
                "children": [
                    {
                        "concept": "ViewElement",
                        "tag": "Text",
                        "innerText": "age"
                    }
                ]
            }
        ]
    },
    {
        "concept": "ViewElement",
        "tag": "Column",
        "bindAttrs": [
            {
                "concept": "BindAttribute",
                "name": "key",
                "value": "action"
            }
        ],
        "children": [
            {
                "concept": "ViewElement",
                "tag": "template",
                "slotTarget": "title",
                "children": [
                    {
                        "concept": "ViewElement",
                        "tag": "Text",
                        "innerText": "Action"
                    }
                ]
            },
            {
                "concept": "ViewElement",
                "tag": "template",
                "slotTarget": "render",
                "children": [
                    {
                        "concept": "ViewElement",
                        "tag": "Link",
                        "innerText": "Invite name"
                    },
                    {
                        "concept": "ViewElement",
                        "tag": "Link",
                        "innerText": "Delete"
                    }
                ]
            }
        ]
    }
]


const demoTableElemenet = {
    "concept": "ViewElement",
    "tag": "Table",
    "bindAttrs": [
        {
            "concept": "BindAttribute",
            "name": "dataSource",
            "value": true
        }
    ],
    "children": demoTable
}


export function genTableElementFromDataSource(dataSource) {
    const element = new ViewElement(demoTableElemenet);
    // element.setBindAttribute(dataSource);
    return element;
}
export function genTableFromDataSource(node, dataSource) {
    return demoTable.map(d => new ViewElement(d));
}