// import CodeSandBoxSimulator from './simulator/codesandbox';
import IDE from './ide/ide';
import { chooseStrategy, dragStartStrategy } from './model/prepare-drop-strategy';

import { IDEModel } from './model/ide-model';
import { View, ViewElement } from './model/lang-model';
import { getNodeByNodePath as getUINodeByNodePath } from './model/ui-model/base';

export function launch({
    domRoot, 
    template, 
    filePath,
    data, 
    UIModel,
    Simulator,
    updateElement,
}) {
    const { makeRootUIElement, makeUIElement } = UIModel;
    const ViewModel = new View(data);
    const ideModel = new IDEModel(ViewModel);
    ideModel.useUI({
        makeUIElement,
        makeRootUIElement,
    });
    ideModel.refresh();

    function getNodeByNodePath(nodepath) {
        return getUINodeByNodePath(ideModel.getRoot(), nodepath)
    }
    window.getNodeByNodePath = getNodeByNodePath;

    const simulator = new Simulator(template, filePath);
    const content = ideModel.genCode();
    console.log(content);
    simulator.mutateContentInTemplateBeforeLoad(content);
  

    function writeFile() {
        const content = ideModel.genCode();
        console.log(content);
        simulator.updateProject(content);
    }

    const ide = new IDE({
        simulator,
        getSourceByNodePath(nodepath) {
            return getNodeByNodePath(nodepath);
        }
    });

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

    ide.addEventListener('ready', () => {
        ide.startObserveRootElem('body');
    })
    
    ide.$mount(domRoot);
    
    ide.addEventListener('frame:dragstart', (e) => {
        const nodepath = e.detail.elementInfo.target;
        
        const MovingNode = getNodeByNodePath(nodepath);
        const isOnFocus = ide.surface.hasTarget(MovingNode);
        let MovingNodes = [MovingNode];
        if(isOnFocus) {
            MovingNodes = ide.surface.getFocusNodes();
        }
        MovingNodes = MovingNodes.filter(node => node.draggable)
        // resolve Drag element
        const DragNode = document.createElement('div');
        DragNode.innerText = MovingNode.tag;
    
        dragDropBehavior(DragNode, MovingNodes, e);
    });

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
            updateElement(currentNode, 'content', content);
            writeFile();
        }
    })
    
    
    return {
        dragDropBehavior
    }
}