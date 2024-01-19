import CodeSandBoxSimulator from './simulator/codesandbox';
import Project from './simulator/codesandbox/project';
import { files as reactFiles } from './react-template';
import reactJSONData from './data/react.ast.json';
// import antdModel from './model/ui-model/antd';
import { BindAttribute, ViewElement } from './model/lang-model';

import { files as vueFiles } from './vue-template';
import vueJSONData from './data/vue.ast.json';
import cloudModel from './model/ui-model/cloud';

import componentFile from './extend-component/cloud-ui/login/dist/component?raw' 
import elementFile from './extend-component/cloud-ui/login/dist/element?raw' 

// import chartcomponentFile from './extend-component/antd/chart/dist/component?raw' 
// import chartElementFile from './extend-component/antd/chart/dist/element?raw' 

// import hocAntdCode from './hoc-lib/antd/dist/component?raw'
// const usage = require('./hoc-lib/antd/dist/usage.json');

import { View } from './model/lang-model';
import { 
    resolveDataSource,
    genTableElementFromDataSource,
    genTableFromDataSource
} from './model/global-utils';
import ReactModel from './model/ui-model/react-standard';
import { launch } from './designer';

// const chartModule = {
//     name: "ReactChart",
//     version: "1.0.0",
//     type: "component",
//     component: chartcomponentFile,
//     element: chartElementFile,
// }

async function launchReactAntd() {
    const ViewModel = new View(reactJSONData);
    const name = 'hoc-antd';
    const r1 = await fetch('/webcontainer-ide/ant-hoc/index.js');
    const code = await r1.text();
    const r2 = await fetch('/webcontainer-ide/ant-hoc/usage.json');
    const usageJSON = await r2.json();
    const r3 = await fetch('/webcontainer-ide/ant-hoc/style.css');
    const style = await r3.text();
    const project = new Project(reactFiles.files);
    project.mutateFile(`/node_modules/@internals/${name}/package.json`, JSON.stringify({
        name,
        main: "./index.js",
    }), { hidden: true });
    project.mutateFile(`/node_modules/@internals/${name}/index.js`, code, { hidden: true });
    project.mutateFile(`/node_modules/@internals/${name}/style.css`, style, { hidden: true });

    console.log(project.read());
    project.mutateFile('/src/index.js', project.readFile('/src/index.js') + `import '@internals/${name}/style.css';`, { hidden: true });
    
    const { dragDropBehavior: antdDragdropBehavior, ideModel, refresh } = await launch({
        domRoot: document.querySelector('#react-app'),
        template: reactFiles,
        project,
        ViewModel: ViewModel,
        UIModel: ReactModel,
        UIUsage: usageJSON,
        Simulator: CodeSandBoxSimulator,
        // modules: [chartModule],
        updateElement(currentNode, type, value) {
            if(type === 'content') {
                currentNode.innerText = value;
            }
        }
    })

    const toJSONBtn = document.getElementById('toJSON');
    const jsonContent = document.getElementById('jsoncontent');
    toJSONBtn.addEventListener('click', () => {
        jsonContent.innerText = JSON.stringify(ViewModel.toJSON());
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
        const element = ideModel.makeUIElement(MovingNode);
        antdDragdropBehavior(Button, 
            element, 
            (dropNodeFunc) => {
                dropNodeFunc([element])
                refresh();
            });
    })

    const Flex = document.getElementById('react-Flex');
    Flex.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const MovingNode = new ViewElement({
            "concept": "ViewElement",
            "tag": "Flex",
        });
        const element = ideModel.makeUIElement(MovingNode);
        antdDragdropBehavior(Flex, 
            element, 
            (dropNodeFunc) => {
                dropNodeFunc([element])
                refresh();
            })
        // antdDragdropBehavior(Flex, [ideModel.makeUIElement(MovingNode)]);
    });

    const Table = document.getElementById('react-table');
    Table.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const MovingNode = new ViewElement({
            "concept": "ViewElement",
            "tag": "Table",
        });
        const element = ideModel.makeUIElement(MovingNode);
        antdDragdropBehavior(Flex, 
            element, 
            (dropNodeFunc) => {
                dropNodeFunc([element]);
                refresh();
            })
        // antdDragdropBehavior(Table, [ideModel.makeUIElement(MovingNode)]);
    })

    const DataSourceButton = document.getElementById('react-Datasource');
    DataSourceButton.addEventListener('mousedown', e => {
        e.preventDefault();
        e.stopPropagation();
        antdDragdropBehavior(Flex, 
            {
                concept: 'DataSource',
            }, 
            (dropNodeFunc, currentContainer) => {
                if(currentContainer.tag === 'Table') {
                    currentContainer.source.setBindAttribute('dataSource', new BindAttribute({
                        name: 'dataSource',
                        value: true,
                    }));
                    dropNodeFunc(genTableFromDataSource().map(element => ideModel.makeUIElement(element)))
                } else {
                    dropNodeFunc([ideModel.makeUIElement(genTableElementFromDataSource())])
                }
                refresh();
            })
    });

    
}
launchReactAntd();


const lcapLoginModule = {
    name: "lcap-login",
    version: "1.0.0",
    type: "component",
    component: componentFile,
    element: elementFile,
}

async function launchVueCloudUI() {
    const { dragDropBehavior: cloudDragdropBehavior, ideModel } = await launch({
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
                debugger
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

        cloudDragdropBehavior(Button, [ideModel.makeUIElement(MovingNode)]);
    })

    const Flex = document.getElementById('vue-linear-layout');
    Flex.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const MovingNode = new ViewElement({
            "concept": "ViewElement",
            "tag": "u-linear-layout",
        });
        cloudDragdropBehavior(Flex, [ideModel.makeUIElement(MovingNode)]);
    })
}
// launchVueCloudUI();