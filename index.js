import CodeSandBoxSimulator from './simulator/codesandbox';
import { files as reactFiles } from './react-template';
import reactJSONData from './data/react.ast.json';
import antdModel from './model/ui-model/antd';
import { ViewElement } from './model/lang-model';

import { files as vueFiles } from './vue-template';
import vueJSONData from './data/vue.ast.json';
import cloudModel from './model/ui-model/cloud';

import componentFile from './extend-component/cloud-ui/login/dist/component?raw' 
import elementFile from './extend-component/cloud-ui/login/dist/element?raw' 

import chartcomponentFile from './extend-component/antd/chart/dist/component?raw' 
import chartElementFile from './extend-component/antd/chart/dist/element?raw' 


import { launch } from './designer';

const chartModule = {
    name: "ReactChart",
    version: "1.0.0",
    type: "component",
    component: chartcomponentFile,
    element: chartElementFile,
}

function launchReactAntd() {
    const { dragDropBehavior: antdDragdropBehavior } = launch({
        domRoot: document.querySelector('#react-app'),
        template: reactFiles,
        filePath: '/src/App.jsx',
        data: reactJSONData,
        UIModel: antdModel,
        Simulator: CodeSandBoxSimulator,
        modules: [chartModule],
        updateElement(currentNode, type, value) {
            if(type === 'content') {
                currentNode.innerText = value;
            }
        }
    })


    const Button = document.getElementById('react-button');
    let id = 0;
    Button.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const MovingNode = new ViewElement({
            "concept": "ViewElement",
            "tag": "Button",
            "innerText": "buttonX" + (id++)
        });

        antdDragdropBehavior(Button, [antdModel.makeUIElement(MovingNode)]);
    })

    const Flex = document.getElementById('react-Flex');
    Flex.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const MovingNode = new ViewElement({
            "concept": "ViewElement",
            "tag": "Flex",
        });
        antdDragdropBehavior(Flex, [antdModel.makeUIElement(MovingNode)]);
    })
}
launchReactAntd();


const lcapLoginModule = {
    name: "lcap-login",
    version: "1.0.0",
    type: "component",
    component: componentFile,
    element: elementFile,
}

function launchVueCloudUI() {
    const { dragDropBehavior: cloudDragdropBehavior } = launch({
        domRoot: document.querySelector('#vue-app'),
        template: vueFiles,
        filePath: '/src/App.vue',
        data: vueJSONData,
        UIModel: cloudModel,
        Simulator: CodeSandBoxSimulator,
        modules: [
            lcapLoginModule
        ],
        updateElement(currentNode, type, value) {
            if(type === 'content') {
                const bindAttr = currentNode.source.bindAttrs.find(b => b.name === 'text');
                bindAttr.value = value;
            }
        }
    })


    const Button = document.getElementById('vue-button');
    let id = 0;
    Button.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const MovingNode = new ViewElement({
            "concept": "ViewElement",
            "tag": "u-button",
            "bindAttrs": [
                {
                    "concept": "BindAttribute",
                    "name": "text",
                    "value":  "buttonX" + (id++)
                }
            ]
        });

        cloudDragdropBehavior(Button, [antdModel.makeUIElement(MovingNode)]);
    })

    const Flex = document.getElementById('vue-linear-layout');
    Flex.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const MovingNode = new ViewElement({
            "concept": "ViewElement",
            "tag": "u-linear-layout",
        });
        cloudDragdropBehavior(Flex, [antdModel.makeUIElement(MovingNode)]);
    })
}
launchVueCloudUI();