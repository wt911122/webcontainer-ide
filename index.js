import IDE from './ide/ide';
import { files } from './template.js';
import jsonData from './data/react.ast.json';
// import jsonData from './data/vue.ast.json';
import { makeView, getNodeByNodePath, ViewElement } from './model/index';
import { UIAdapter } from './model';
import { prepareDropStrategy, LOC } from './model/prepare-drop-strategy'
import { CONTAINER_DIRECTION } from './model/view-model';
import { BoxToRectangle } from './model/utils';


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
    ide.doDrag(domElement, 
        async (payload, active_dragover) => {
            console.log(payload.elementInfo?.target)
            if(!payload.notAllowed && payload.inFrame) {
                const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
                let nodePaths;
                let direction = CONTAINER_DIRECTION.AUTO;
                console.log(payload);
                if(payload.elementInfo?.isEmptySlot) {
                    const elementInfo = payload.elementInfo;
                    const rect = BoxToRectangle(elementInfo.rects[0]);
                    ide.surface.highlightSeg(false);
                    ide.surface.highlightEmptySlot(true, rect);
                    ide.highlightNodeByNodePath(elementInfo.target);
                    target.nodePath = elementInfo.target;
                    target.isEmptySlot = true;
                    ide.setCursorInFrame('copy');
                    active_dragover();
                   
                    return;
                }
                
                let containerNodePath
                if(payload.elementInfo?.target) {
                    const node = getNodeByNodePath(View, payload.elementInfo.target);
                    console.log(node);
                    if(node) {
                        let containerNode = node;
                        if(!containerNode.elementMeta.isContainer) {
                            containerNode = containerNode.parentNode;
                        }
                        if(containerNode?.elementMeta?.direction) {
                            direction = containerNode.elementMeta.direction;
                        }
                        nodePaths = containerNode.getChildren().filter(n => n !== MovingNode ).map(c => c.nodePath);
                        containerNodePath = containerNode.nodePath;
                    }
                } else {
                    nodePaths = View.getChildren().map(c => c.nodePath);
                }
                if(nodePaths.length > 0) {
                    console.log(nodePaths);
                    const { nearestSeg, nodepath, loc } = await prepareDropStrategy(
                        ide,
                        point,
                        nodePaths,
                        direction,
                    );
                    
                    ide.surface.highlightSeg(true, nearestSeg);
                    ide.surface.highlightEmptySlot(false)
                    if(containerNodePath){
                        ide.highlightNodeByNodePath(containerNodePath);
                    } else {
                        ide.closeHighlight();
                    }
                    target.isEmptySlot = false;
                    target.nodePath = nodepath;
                    target.loc = loc
                    ide.setCursorInFrame('copy');
                    active_dragover();
                    return;
                }
                ide.setCursorInFrame('grabbing');
            } 
            target.nodePath = '';
            target.loc = ''
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
            active_dragover();
        }, () => {
            if(target.nodePath) {
                const node = getNodeByNodePath(View, target.nodePath);
                if(node) {
                    if(target.isEmptySlot) {
                        node.addChild(MovingNode);
                    } else {
                        node.parentNode[target.loc === LOC.PRE ? 'insertNodeBefore': 'insertNodeAfter'](node, MovingNode)
                        console.log(View)       
                    }
                    
                    writeFile();
                }
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
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
