// import CodeSandBoxSimulator from './simulator/codesandbox';
import IDE from './ide/ide';
import Surface from './ide/core/surface'
import { chooseStrategy, dragStartStrategy, setGetNodeByNodePathFunc } from './model/prepare-drop-strategy';

import { IdeModelManager } from './model/ide-model-manager';
import { resolverUsage } from './model/schema-resolver';
// import { IDEModel } from './model/ide-model';
export async function launch({
    domRoot, 
    template, 
    project,
    ViewModel, 
    UIUsage,
    UIModel,
    Simulator,
    modules = [],
    updateElement,
}) {
    // const { makeRootUIElement, viewCtors } = UIModel;
    // const ideModel = new IDEModel(ViewModel);
    const _ideModel = new IdeModelManager();
    _ideModel.attachModel(UIModel);
    const schema = resolverUsage(UIUsage);
    _ideModel.attachSchema(schema);
    _ideModel.genModel(ViewModel)
    // ide.genModel(ViewModel);
    // ideModel.useUI({
    //     viewCtors,
    //     makeRootUIElement,
    // });
    // for(let m of modules) {
    //     await ideModel.registComponent(m)
    // }
    
    // ideModel.refresh();

    function getNodeByNodePath(nodepath) {
        return _ideModel.getNodeByNodePath(nodepath)
    }
    window.getNodeByNodePath = getNodeByNodePath;
    window.ideModel = _ideModel;
    _ideModel.genCode(project);
    const simulator = new Simulator(project);
    // console.log(content);
    // simulator.mutateContentInTemplate(content);
    // for(let m of modules) {
    //     await simulator.mutateInternalDep(m)
    // }

    function writeFile() {
        _ideModel.genCode(project);
        simulator.update();
    }
    function _refresh() {
        _ideModel.genModel(ViewModel);
        writeFile()
    }
    const surface = new Surface(_refresh);
    const ide = new IDE({
        simulator,
        surface,
        getSourceByNodePath(nodepath) {
            return getNodeByNodePath(nodepath);
        }
    });

    function dragDropBehavior(domElement, MovingNodes, event, outside = false, onDropOutside) {
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
            outside,
        };
        let currentstrategy = null; 
        
        const movingNodePaths = MovingNodes.map(n => n.nodePath)
        const ViewRoot = _ideModel.getRoot();
        setGetNodeByNodePathFunc(getNodeByNodePath)
        ide.doDrag(domElement, movingNodePaths,
            async () => {
                if(event) {
                    const { elementInfo, eventMeta } = event.detail;
                    const _s = dragStartStrategy(ViewRoot, elementInfo, eventMeta, getNodeByNodePath);
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
                await currentstrategy.drop(ide, target, MovingNodes, (insertNodeCallback, containerNode) => {
                    if(outside) {
                        onDropOutside(insertNodeCallback, containerNode)
                    } else {
                        _refresh()
                    }
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

    ide.addEventListener('frame:dblclick', (e) => {
        const nodepath = e.detail.elementInfo.target;
        const currentNode = getNodeByNodePath(nodepath);
        if(currentNode.supportEditContent){
            ide.doEditContent(nodepath);
        }
        if(currentNode.source.tag === 'Modal') {
            ide.doCallComponentMethod({
                nodePath: nodepath,
                method: 'open'
            });
            ide.doSetRestrictArea(`[nodepath="${nodepath}"][mainmodal]`)
            currentNode.source._cacheStatus = {
                open: true,
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
            ide.clearFocus();
        }
    });

    ide.addEventListener('frame:contentChange', (e) => {
        const nodepath = e.detail.elementInfo.target;
        const currentNode = getNodeByNodePath(nodepath);
        if(currentNode.supportEditContent){
            const content = e.detail.innerText;
            currentNode.updateInnerText(content)
            // updateElement(currentNode, 'content', content);
            writeFile();
        }
    })
    
    
    return {
        dragDropBehavior: (domElement, node, onDrop) => {
            dragDropBehavior(domElement, [node], undefined, true, onDrop);
        },
        ideModel: _ideModel,
        refresh: _refresh,
    }
}