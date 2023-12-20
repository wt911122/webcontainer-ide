import IDE from './ide/ide';
import { files } from './template.js';
import jsonData from './data/react.ast.json';
// import jsonData from './data/vue.ast.json';
// import { makeView, getNodeByNodePath, ViewElement } from './model/index';
// import { UIAdapter } from './model';
import { chooseStrategy, dragStartStrategy } from './model/prepare-drop-strategy';
// import WebContainerSimulator from './simulator/webcontainer/index';
import CodeSandBoxSimulator from './simulator/codesandbox';
console.log(files);
// const View = makeView(jsonData)

import { IDEModel } from './model/ide-model';
import { View, ViewElement } from './model/lang-model';
const ViewModel = new View(jsonData);
import { getNodeByNodePath as getUINodeByNodePath } from './model/ui-model/base';
import { makeUIElement, makeRootUIElement } from './model/ui-model/antd';

const ideModel = new IDEModel(ViewModel);
ideModel.useUI({
    makeUIElement,
    makeRootUIElement,
});
ideModel.refresh();
console.log(ideModel)
// refreshUIModel();

// files.src.directory['App.jsx'] = {
//     file: {
//         contents: View.toReactFCFile()
//     }
// }
// files.files['/src/App.jsx'] = {
//     code: View.toReactFCFile()
// }

files.files['/src/App.jsx'] = {
    code: ideModel.genCode()
}

console.log(files)
function getNodeByNodePath(nodepath) {
    return getUINodeByNodePath(ideModel.getRoot(), nodepath)
}
// const simulator = new WebContainerSimulator(files);
const simulator = new CodeSandBoxSimulator(files, '/src/App.jsx');
const ide = new IDE({
    simulator,
    getSourceByNodePath(nodepath) {
        return getNodeByNodePath(nodepath);
    }
});

// ide.registMethod('getSubNodePath', {
//     isAsync: false,
//     body(nodepath) {
//         const node = getNodeByNodePath(nodepath);
//         return node.children.map(e => e.nodePath);
//     }
// });
// ide.registMethod('getSiblingNodePath', {
//     isAsync: false,
//     body(nodepath) {
//         const node = getNodeByNodePath(View, nodepath);
//         const { prev, after } = node.getSiblings();

//         return {
//             prev: prev && prev.nodePath,
//             after: after && after.nodePath,
//         }
//     }
// });
// ide.registMethod('getParentNodePath', {
//     isAsync: false,
//     body(nodepath) {
//         const node = getNodeByNodePath(View, nodepath);
//         return node.parentNode.nodePath;
//     }
// });


ide.addEventListener('ready', () => {
    ide.startObserveRootElem('#root');
})

// ide.registMethod('doPreDrop', {
//     isAsync: false,
//     body(nodepath) {
//         const node = getNodeByNodePath(View, nodepath);
//         // return node.parentNode.nodePath;
        

//     }
// })

ide.$mount(document.querySelector('#app'));

function writeFile() {
    
    // const content = View.toReactFCFile();
    const content = ideModel.genCode();
    console.log(content);
    simulator.updateProject(content);
    // ide.previewer.writeFile('src/App.jsx',  content)
}



function dragDropBehavior(domElement, MovingNodes, event) {
    ide.clearFocus();
    const target = {
        nodePath: '',
        loc: '',
        isEmptySlot: false,
        
        // for absolute Layout
        fromAbsolute: false,
        movingNodeInfos: [],
        fromCoord: [0, 0],
        toCoord: [0, 0],
        fromNodePath: null,
    };
    let currentstrategy = null; 
    
    const movingNodePaths = MovingNodes.map(n => n.nodePath)
    const ViewRoot = ideModel.getRoot();
    ide.doDrag(domElement, movingNodePaths,
        async () => {
            if(event) {
                const { elementInfo, eventMeta } = event.detail;
                const _s = dragStartStrategy(ViewRoot, elementInfo, eventMeta);
                if(_s) {
                    await _s(ide, target, MovingNodes);
                }
            }
        },
        async (payload, active_dragover) => {
            currentstrategy = chooseStrategy(payload, ViewRoot, MovingNodes);
            await currentstrategy.dragover(ide, target, payload)
            active_dragover();
        }, 
        async () => {
            await currentstrategy.drop(ide, target, MovingNodes, () => {
                ideModel.refresh();
                writeFile()
            });
            ide.setCursorInFrame('auto');
        });
}

const Button = document.getElementById('button');
let id = 0;
Button.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const MovingNode = new ViewElement({
        "concept": "ViewElement",
        "tag": "Button",
        "innerText": "buttonX" + (id++)
    });

    dragDropBehavior(Button, [makeUIElement(MovingNode)]);
})

const Flex = document.getElementById('Flex');
Flex.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const MovingNode = new ViewElement({
        "concept": "ViewElement",
        "tag": "Flex",
    });
    dragDropBehavior(Flex, [makeUIElement(MovingNode)]);
})


ide.addEventListener('frame:dragstart', (e) => {
    const nodepath = e.detail.elementInfo.target;
    
    const MovingNode = getNodeByNodePath(nodepath);
    const isOnFocus = ide.surface.hasTarget(MovingNode);
    let MovingNodes = [MovingNode];
    if(isOnFocus) {
        MovingNodes = ide.surface.getFocusNodes();
    }
    // resolve Drag element
    const DragNode = document.createElement('div');
    DragNode.innerText = MovingNode.tag;

    dragDropBehavior(DragNode, MovingNodes, e);
})

ide.addEventListener('frame:requestEditContent', (e) => {
    const nodepath = e.detail.elementInfo.target;
    const currentNode = getNodeByNodePath(nodepath);
    if(currentNode.supportEditContent){
        ide.doEditContent(nodepath);
    }
});

ide.addEventListener('frame:contentChange', (e) => {
    const nodepath = e.detail.elementInfo.target;
    const currentNode = getNodeByNodePath(nodepath);
    if(currentNode.supportEditContent){
        const content = e.detail.innerText;
        currentNode.innerText = content;
        writeFile();
    }
})
