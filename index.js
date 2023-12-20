import CodeSandBoxSimulator from './simulator/codesandbox';
import { files as reactFiles } from './react-template';
import reactJSONData from './data/react.ast.json';
import antdModel from './model/ui-model/antd';
import { ViewElement } from './model/lang-model';

import { files as vueFiles } from './vue-template';
import vueJSONData from './data/vue.ast.json';
import cloudModel from './model/ui-model/cloud';

import { launch } from './designer';
function launchReactAntd() {
    const { dragDropBehavior: antdDragdropBehavior } = launch({
        domRoot: document.querySelector('#react-app'),
        template: reactFiles,
        filePath: '/src/App.jsx',
        data: reactJSONData,
        UIModel: antdModel,
        Simulator: CodeSandBoxSimulator,
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



function launchVueCloudUI() {
    const { dragDropBehavior: cloudDragdropBehavior } = launch({
        domRoot: document.querySelector('#vue-app'),
        template: vueFiles,
        filePath: '/src/App.vue',
        data: vueJSONData,
        UIModel: cloudModel,
        Simulator: CodeSandBoxSimulator,
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