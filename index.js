import IDE from './ide/ide';
import { files } from './template.js';
import jsonData from './data/react.ast.json';
// import jsonData from './data/vue.ast.json';
import { makeView, getNodeByNodePath, ViewElement } from './model/index';
import { UIAdapter } from './model';
import { chooseStrategy, dragStartStrategy } from './model/prepare-drop-strategy';
// import WebContainerSimulator from './simulator/webcontainer/index';
import CodeSandBoxSimulator from './simulator/codesandbox';
console.log(files);
const View = makeView(jsonData)
// files.src.directory['App.jsx'] = {
//     file: {
//         contents: View.toReactFCFile()
//     }
// }
files.files['/src/App.jsx'] = {
    code: View.toReactFCFile()
}

console.log(files)
// const simulator = new WebContainerSimulator(files);
const simulator = new CodeSandBoxSimulator(files);
const ide = new IDE({
    simulator,
    getSourceByNodePath(nodepath) {
        return getNodeByNodePath(View, nodepath);
    }
});

ide.registMethod('getSubNodePath', {
    isAsync: false,
    body(nodepath) {
        const node = getNodeByNodePath(View, nodepath);
        return node.children.map(e => e.nodePath);
    }
});
ide.registMethod('getSiblingNodePath', {
    isAsync: false,
    body(nodepath) {
        const node = getNodeByNodePath(View, nodepath);
        const { prev, after } = node.getSiblings();

        return {
            prev: prev && prev.nodePath,
            after: after && after.nodePath,
        }
    }
});
ide.registMethod('getParentNodePath', {
    isAsync: false,
    body(nodepath) {
        const node = getNodeByNodePath(View, nodepath);
        return node.parentNode.nodePath;
    }
});


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
    const content = View.toReactFCFile();
    console.log(content);
    simulator.updateProject('src/App.jsx', content);
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
    ide.doDrag(domElement, movingNodePaths,
        async () => {
            if(event) {
                const { elementInfo, eventMeta } = event.detail;
                const _s = dragStartStrategy(View, elementInfo, eventMeta);
                if(_s) {
                    await _s(ide, target, MovingNodes);
                }
            }
        },
        async (payload, active_dragover) => {
            currentstrategy = chooseStrategy(payload, View, MovingNodes);
            await currentstrategy.dragover(ide, target, payload)
            active_dragover();
        }, 
        async () => {
            await currentstrategy.drop(ide, target, MovingNodes, () => {
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
    MovingNode.elementMeta = UIAdapter(MovingNode);
    dragDropBehavior(Button, [MovingNode]);
})

const Flex = document.getElementById('Flex');
Flex.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const MovingNode = new ViewElement({
        "concept": "ViewElement",
        "tag": "Flex",
    });
    MovingNode.elementMeta = UIAdapter(MovingNode);
    dragDropBehavior(Flex, [MovingNode]);
})


ide.addEventListener('frame:dragstart', (e) => {
    const nodepath = e.detail.elementInfo.target;
    
    const MovingNode = getNodeByNodePath(View, nodepath);
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
    const currentNode = getNodeByNodePath(View, nodepath);
    if(currentNode.elementMeta.supportEditContent){
        ide.doEditContent(nodepath);
    }
});

ide.addEventListener('frame:contentChange', (e) => {
    const nodepath = e.detail.elementInfo.target;
    const currentNode = getNodeByNodePath(View, nodepath);
    if(currentNode.elementMeta.supportEditContent){
        const content = e.detail.innerText;
        currentNode.innerText = content;
        writeFile();
    }
})
