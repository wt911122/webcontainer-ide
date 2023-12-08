import IDE from './ide/ide';
import { files } from './template.js';
import jsonData from './data/react.ast.json';
// import jsonData from './data/vue.ast.json';
import { makeView, getNodeByNodePath, ViewElement } from './model/index';
import { UIAdapter } from './model';
import { chooseStrategy } from './model/prepare-drop-strategy';

const View = makeView(jsonData)
files.src.directory['App.jsx'] = {
    file: {
        contents: View.toReactFCFile()
    }
}
// files.src.directory['App.vue'] = {
//     file: {
//         contents: View.toVueTmplFile()
//     }
// }

console.log(files)
const ide = new IDE({
    project: files,
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
    ide.previewer.writeFile('src/App.jsx',  View.toReactFCFile())
}



function dragDropBehavior(domElement, MovingNode) {
    ide.clearFocus();
    const target = {
        nodePath: '',
        loc: '',
        isEmptySlot: false,
    };
    let currentstrategy = null; 

    ide.doDrag(domElement, 
        async (payload, active_dragover) => {
            currentstrategy = chooseStrategy(payload, View, MovingNode);
            await currentstrategy.dragover(ide, target, payload)
            active_dragover();
        }, () => {
            currentstrategy.drop(ide, target, MovingNode, () => {
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
    dragDropBehavior(Button, MovingNode);
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
    dragDropBehavior(Flex, MovingNode);
})


ide.addEventListener('frame:dragstart', (e) => {
    const nodepath = e.detail.elementInfo.target;
    const MovingNode = getNodeByNodePath(View, nodepath);
    const DragNode = document.createElement('div');
    DragNode.innerText = MovingNode.tag;
    dragDropBehavior(DragNode, MovingNode);
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
