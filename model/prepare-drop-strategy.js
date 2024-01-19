import {
    distToSegmentVecSquared,
    BoxToSegmentsHorizontal,
    BoxToSegmentsVertical,
    BoxToSegmentsAuto,
    shiftVerticalSegBy,
    shiftHorizontalSegBy,
    shiftAutoSegBy,
    BoxToRectangle,
    CSSInlineStyleToObject,
    CSSToStaticStyle,
    CONTAINER_DIRECTION,
} from './utils';

import { 
    resolveDataSource,
    genTableFromDataSource
} from './global-utils';

let getNodeByNodePath;
export function setGetNodeByNodePathFunc(func) {
    getNodeByNodePath = func;
}

function _dropToAccept(n, target) {
    return n.dropToAccept ? n.dropToAccept(target) : true;
}

const SEGMENT_STATEGY = {
    [CONTAINER_DIRECTION.ROW]: {
        getSegs: BoxToSegmentsVertical,
        shiftHighlighter: shiftVerticalSegBy,
    },
    [CONTAINER_DIRECTION.COLUMN]: {
        getSegs: BoxToSegmentsHorizontal,
        shiftHighlighter: shiftHorizontalSegBy,
    },
    [CONTAINER_DIRECTION.AUTO]: {
        getSegs: BoxToSegmentsAuto,
        shiftHighlighter: shiftAutoSegBy,
    }
}

export const LOC = {
    PRE: 'pre',
    AFTER: 'after',
}

function batchAddChild(node, newNodes) {
    newNodes.forEach(n => {
        node.addChild(n);
    })
}


function batchInsertNodeBefore(node, newNodes) {
    let lastn = node;
    const parentNode = node.parentNode;
    const t = newNodes.slice();
    while(t.length) {
        const n = t.pop();
        parentNode.insertNodeBefore(lastn, n);
        lastn = n;
    }
}
function batchInsertNodeAfter(node, newNodes) {
    let lastn = node;
    const parentNode = node.parentNode;
    const t = newNodes.slice();
    while(t.length) {
        const n = t.shift();
        parentNode.insertNodeAfter(lastn, n);
        lastn = n;
    }
}

function removeKeys(obj, keys) {
    const r = {};
    keys.forEach(k => {
        if(k in obj){
            delete obj[k];
        }
    })
    return r;
} 

function removePositionStyleFromNodeInsideAbsoluteLayout(node) {
    if(node.parentNode?.isAbsolute) {
        const style = CSSInlineStyleToObject(node.staticStyle)
        removeKeys(style, ['left', 'right', 'top', 'bottom']);
        node.staticStyle = CSSToStaticStyle(style);
    }
}

function beforeDrop(MovingNodes) {
    MovingNodes.forEach(node => {
        removePositionStyleFromNodeInsideAbsoluteLayout(node);
    })
}

async function _prepareDrop(ide, Container, point, nodePaths, direction, MovingNodes) {
    const innerDropable = !Container ||  MovingNodes.find(n => Container.dropable(n) && _dropToAccept(n, Container));
    const info = await ide.getElementsInfoByNodePath(nodePaths);
    let { getSegs, shiftHighlighter } = SEGMENT_STATEGY[direction];
    let minDist = Infinity
    let nearestSeg;
    let nodepath;
    let loc;
    
    if(innerDropable) {
        nodePaths.forEach(p => {
            const rects = info[p].rects;
            rects.forEach(box => {
                const segs = getSegs(box, info[p]);
                segs.forEach((seg, idx) => {
                    const d = distToSegmentVecSquared(point, seg);
                    if(d < minDist){
                        minDist = d;
                        nearestSeg = seg;
                        nodepath = p
                        loc = idx === 0 ? LOC.PRE : LOC.AFTER;
                    }
                })
            });
        });
    }

    if(Container && !Container.isModal) {
        const ContainerPath = Container.nodePath;
        const cParent = Container.parentNode;
        const result = MovingNodes.find(n => cParent.dropable(n) && _dropToAccept(n, cParent));
        if(result) {
            const cParentDirection = cParent.direction || CONTAINER_DIRECTION.AUTO;
            const { getSegs, shiftHighlighter: containerShiftHighlighter } = SEGMENT_STATEGY[cParentDirection];
            const containerInfo = await ide.getElementInfoByNodePath(ContainerPath)
            const containerRect = containerInfo.rects[0];
            const segs = getSegs(containerRect, containerInfo);
            segs.forEach((seg, idx) => {
                const d = distToSegmentVecSquared(point, seg);
                if(d < minDist){
                    minDist = d;
                    nearestSeg = seg;
                    nodepath = ContainerPath
                    loc = idx === 0 ? LOC.PRE : LOC.AFTER;
                    shiftHighlighter = containerShiftHighlighter;
                }
            })
        }
    }
    if(!nearestSeg) {
        throw 'can not drop!'
    }

    shiftHighlighter(nearestSeg, loc === LOC.PRE ? 1.5: -1.5);

    return {
        nearestSeg,
        nodepath,
        loc
    };
}

const NotAllowedStrategy = {
    dragover(ide, context, payload) {
        context.nodePath = '';
        context.loc = ''
        ide.surface.highlightSeg(false);
        ide.surface.highlightEmptySlot(false)
        ide.closeHighlight();
    },
    drop(ide, context, MovingNodes, callback) {
        ide.surface.highlightSeg(false);
        ide.surface.highlightEmptySlot(false)
        ide.closeHighlight();
    }
}

const EmptySlotStrategy = (ViewRoot, MovingNodes) => ({
    dragover(ide, context, payload) {
        const elementInfo = payload.elementInfo;
        const Container = getNodeByNodePath(elementInfo.target);
        const dropable =  MovingNodes.find(n => Container.dropable(n) && _dropToAccept(n, Container));
        if(!dropable) {
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false);
            ide.highlightNodeByNodePath(elementInfo.target);
            ide.setCursorInFrame('not-allowed');
        } else {
            const rect = BoxToRectangle(elementInfo.rects[0]);
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(true, rect);
            ide.highlightNodeByNodePath(elementInfo.target);
            context.nodePath = elementInfo.target;
            ide.setCursorInFrame('copy');
        }
      
    },
    drop(ide, context, MovingNodes, callback) {
        const node = getNodeByNodePath(context.nodePath);
        if(node) {
            if(context.outside) {
                callback((afterNodes = []) => {
                    batchAddChild(node, afterNodes);
                }, node);
            } else {
                beforeDrop(MovingNodes);
                batchAddChild(node, MovingNodes);
                callback();
            }
            // if(MovingNodes.find(node => node.concept === 'DataSource')) {
            //     const datasource = MovingNodes.find(node => node.concept === 'DataSource');
            //     node.setAttribute({
            //         name: 'dataSource',
            //         value: resolveDataSource(datasource)   
            //     });
            //     genTableFromDataSource(node.source, datasource);
                
            // } else {
            //     beforeDrop(MovingNodes);
            //     batchAddChild(node, MovingNodes);
            // }
        }
        ide.surface.highlightSeg(false);
        ide.surface.highlightEmptySlot(false)
        ide.closeHighlight();
       
    }
})

function highlightContainer(ide, Container) {
    if(Container) {
        if(Container.isModal) {
            ide.highlightNodeByNodePath(Container.nodePath, '[mainmodal="true"]');
        } else {
            ide.highlightNodeByNodePath(Container.nodePath);
        }
    } else {
        ide.closeHighlight();
    }
}
async function normalPreDrop(ide, Container, context, point, nodePaths, direction, MovingNodes) {
    try {
        const { nearestSeg, nodepath, loc } = await _prepareDrop(
            ide,
            Container,
            point,
            nodePaths,
            direction,
            MovingNodes
        );
        console.log(nodepath);
        
        ide.surface.highlightSeg(true, nearestSeg);
        ide.surface.highlightEmptySlot(false)
        highlightContainer(ide, Container);
        context.nodePath = nodepath;
        context.loc = loc
        ide.setCursorInFrame('copy');
    } catch(err) {
        ide.surface.highlightSeg(false);
        ide.surface.highlightEmptySlot(false)
        highlightContainer(ide, Container);
        context.nodePath = '';
        context.loc = ''
        ide.setCursorInFrame('not-allowed');
        
    }
}

function normalInsertNodes(node, loc, newNodes) {
    if(loc === LOC.PRE) {
        batchInsertNodeBefore(node, newNodes);
    } else {
        batchInsertNodeAfter(node, newNodes);
    }
}

const ViewRootDropStrategy = (ViewRoot, Container, MovingNodes) => {
    return {
        async dragover(ide, context, payload) {
            const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
            const nodePaths = ViewRoot.elements.map(c => c.nodePath);
            if(nodePaths.length > 0) {
                await normalPreDrop(ide, null, context, point, nodePaths, CONTAINER_DIRECTION.AUTO, MovingNodes)
            }
        },
        drop(ide, context, MovingNodes, callback) {
            const node = getNodeByNodePath(context.nodePath);
            if(node) {
                if(context.outside) {
                    callback((afterNodes = []) => {
                        normalInsertNodes(node, context.loc, afterNodes);
                    }, ViewRoot)
                } else {
                    beforeDrop(MovingNodes);
                    normalInsertNodes(node, context.loc, MovingNodes);
                    callback();
                }
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
        }
    }
    
}

const ContainerDropStrategy = (ViewRoot, Container, MovingNodes) => {
    return {
        async dragover(ide, context, payload) {
            const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
            const nodePaths = Container.elements.filter(n => !MovingNodes.includes(n)).map(c => c.nodePath);
            // console.log(nodePaths);
            const direction = Container?.direction || CONTAINER_DIRECTION.AUTO;
            // console.log(Container);
            if(nodePaths.length > 0) {
                await normalPreDrop(ide, Container, context, point, nodePaths, direction, MovingNodes)
            }
        },
        drop(ide, context, MovingNodes, callback) {
            const node = getNodeByNodePath(context.nodePath);
            if(node) {
                if(context.outside) {
                    callback((afterNodes = []) => {
                        normalInsertNodes(node, context.loc, afterNodes);
                    }, node)
                } else {
                    beforeDrop(MovingNodes);
                    normalInsertNodes(node, context.loc, MovingNodes);
                    callback();
                }
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
           
        }
    }
}

const AbsoluteDropStrategy = (ViewRoot, Container, MovingNodes) => {
    return {
        async dragover(ide, context, payload) {
            const innerDropable = MovingNodes.find(n => Container.dropable(n) && _dropToAccept(n, Container));
            if(innerDropable) {
                context.nodePath = Container.nodePath;
                context.toCoord = [payload.eventMeta.clientX, payload.eventMeta.clientY]
                ide.surface.highlightSeg(false);
                ide.surface.highlightEmptySlot(false)  
                ide.setCursorInFrame('copy');
            } else {
                context.nodePath = '';
                context.loc = ''
                ide.surface.highlightSeg(false);
                ide.surface.highlightEmptySlot(false)
                ide.setCursorInFrame('not-allowed');
            }
            ide.highlightNodeByNodePath(Container.nodePath);
           /* if(context.fromNodePath) {
                const dragNode = getNodeByNodePath(ViewRoot, context.fromNodePath);
                if(dragNode.parentNode === Container) {
                    const payload = {
                        temporaryStyles: [],
                    }
                    const deltaX = context.toCoord[0] - context.fromCoord[0];
                    const deltaY = context.toCoord[1] - context.fromCoord[1];
                    const movingNodeInfos = context.movingNodeInfos;
                    const containerInfo = await ide.getElementInfoByNodePath(context.nodePath)
                    const containerbox = containerInfo.rects[0];
                    MovingNodes.forEach(node => {
                        if(node.parentNode === Container) {
                            const nodePath = node.nodePath;
                            const info = movingNodeInfos[nodePath];
                            const box = info.rects[0];
                            const style = CSSInlineStyleToObject(node.staticStyle)
                            removeKeys(style, ['left', 'right', 'top', 'bottom']);
                            payload.temporaryStyles.push({
                                nodePath,
                                style: CSSToStaticStyle(Object.assign(style, {
                                    left: `${box.x - containerbox.x + deltaX}px`,
                                    top: `${box.y - containerbox.y + deltaY}px`
                                }))
                            })
                        }
                    });
                    if(payload.temporaryStyles.length > 0) {
                        ide.setElementsTemporaryStyle(payload)
                    }
                }
            }*/
        },
        async drop(ide, context, MovingNodes, callback) {
            const containerNode = getNodeByNodePath(context.nodePath);
            if(containerNode) {
                if(context.outside) {
                    callback((afterNodes = []) => {
                        if(afterNodes[0]) {
                            const style = Object.assign({
                                ...CSSInlineStyleToObject(node.staticStyle),
                                left: `${context.toCoord[0] - containerbox.x}px`,
                                top: `${context.toCoord[1] - containerbox.y}px`
                            });
                            const node = afterNodes[0];
                            node.staticStyle = CSSToStaticStyle(style);
                            containerNode.addChild(node);       
                        }
                    }, containerNode)
                } else {
                    const movingNodeInfos = context.movingNodeInfos;
                    const containerInfo = await ide.getElementInfoByNodePath(context.nodePath)
                    const containerbox = containerInfo.rects[0];
                    MovingNodes.forEach(node => {
                        if(node.parentNode === containerNode) {
                            const deltaX = context.toCoord[0] - context.fromCoord[0];
                            const deltaY = context.toCoord[1] - context.fromCoord[1];
                            const info = movingNodeInfos[node.nodePath];
                            if(info) {
                                const box = info.rects[0];
                                
                                const style = Object.assign({
                                    ...CSSInlineStyleToObject(node.staticStyle),
                                    left: `${box.x - containerbox.x + deltaX}px`,
                                    top: `${box.y - containerbox.y + deltaY}px`
                                });
                                node.staticStyle = CSSToStaticStyle(style);
                                node.updateComponentKey();
                            }
                            
                        } else {
                            removePositionStyleFromNodeInsideAbsoluteLayout(node);
                            const style = Object.assign({
                                ...CSSInlineStyleToObject(node.staticStyle),
                                left: `${context.toCoord[0] - containerbox.x}px`,
                                top: `${context.toCoord[1] - containerbox.y}px`
                            });
                            containerNode.addChild(node);
                            node.staticStyle = CSSToStaticStyle(style);
                        }
                    });
                    callback();
                }
                ide.surface.highlightSeg(false);
                ide.surface.highlightEmptySlot(false);
                ide.closeHighlight();
                
            }
        }
    }
}

function resolveContainerNode(node) {
    if(node.isModal && node.source._cacheStatus?.open) {
        return node
    }
    if(node.isContainer) {
        return node
    }
    return node.parentNode;
}

export function chooseStrategy(payload, ViewRoot, MovingNodes) {
    console.log(payload);
    if(payload.notAllowed){
        return NotAllowedStrategy;
    }
    if(payload.inFrame) {
        const elementInfo = payload.elementInfo;
        if(elementInfo?.isEmptySlot) {
            return EmptySlotStrategy(ViewRoot, MovingNodes);
        }
        if(elementInfo?.target) {
            const node = getNodeByNodePath(elementInfo.target);
            if(node) {

                const containerNode = resolveContainerNode(node)//(node.isContainer || node.isModal) ? node : node.parentNode;
                if(containerNode.isRoot) {
                    return ViewRootDropStrategy(ViewRoot, containerNode, MovingNodes);
                }
                if(containerNode?.isAbsolute) {
                    return AbsoluteDropStrategy(ViewRoot, containerNode, MovingNodes);
                }     
                return ContainerDropStrategy(ViewRoot, containerNode, MovingNodes);
            }
        } else {
            if(payload.elementInfo?.outOfRestrict){
                return NotAllowedStrategy;
            }
            return ViewRootDropStrategy(ViewRoot);
        }


    }
}

function AbsoluteDragStartStrategy(ViewRoot, elementInfo, eventMeta) {
    return async (ide, context, MovingNodes) => {
        const movingNodePaths = MovingNodes.map(n => n.nodePath)
        context.fromCoord = [eventMeta.clientX, eventMeta.clientY];
        context.fromNodePath = elementInfo.target;
        context.fromAbsolute = true;
        const infos = await ide.getElementsInfoByNodePath(movingNodePaths);
        context.movingNodeInfos = infos;

        const dragNode = getNodeByNodePath(elementInfo.target);
        const Container = dragNode.parentNode;
        const payload = {
            nodePaths: [],
        }
        MovingNodes.forEach(node => {
            if(node.parentNode === Container) {
                const nodePath = node.nodePath;
                payload.nodePaths.push(nodePath)
            }
        });
        
        if(payload.nodePaths.length > 0) {
            ide.makeDraggingElemMove(payload)
        }
    }
    
}

export function dragStartStrategy(ViewRoot, elementInfo, eventMeta) {
    if(elementInfo?.target) {
        const node = getNodeByNodePath(elementInfo.target);
        if(node) {
            const containerNode = node.parentNode;
            if(containerNode?.isAbsolute) {
                return AbsoluteDragStartStrategy(ViewRoot, elementInfo, eventMeta)
            }
        }
    }
    return null;
}