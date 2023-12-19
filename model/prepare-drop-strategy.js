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
    CSSToStaticStyle
} from './utils';

import { CONTAINER_DIRECTION, getNodeByNodePath } from './ui-model/base';
// import { getNodeByNodePath, CSSInlineStyleToObject, CSSToStaticStyle } from './index';


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

async function _prepareDrop(ide, Container, point, nodePaths, direction) {
    const info = await ide.getElementsInfoByNodePath(nodePaths);
    let { getSegs, shiftHighlighter } = SEGMENT_STATEGY[direction];
    let minDist = Infinity
    let nearestSeg;
    let nodepath;
    let loc;

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

    if(Container) {
        const ContainerPath = Container.nodePath;
        const cParentDirection = Container.parentNode.elementInfo?.direction || CONTAINER_DIRECTION.AUTO;
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

const EmptySlotStrategy = (ViewRoot) => ({
    dragover(ide, context, payload) {
        const elementInfo = payload.elementInfo;
        const rect = BoxToRectangle(elementInfo.rects[0]);
        ide.surface.highlightSeg(false);
        ide.surface.highlightEmptySlot(true, rect);
        ide.highlightNodeByNodePath(elementInfo.target);
        context.nodePath = elementInfo.target;
        ide.setCursorInFrame('copy');
    },
    drop(ide, context, MovingNodes, callback) {
        const node = getNodeByNodePath(ViewRoot, context.nodePath);
        if(node) {
            beforeDrop(MovingNodes);
            batchAddChild(node, MovingNodes);
        }
        ide.surface.highlightSeg(false);
        ide.surface.highlightEmptySlot(false)
        ide.closeHighlight();
        callback();
    }
})

async function normalPreDrop(ide, Container, context, point, nodePaths, direction) {
    const { nearestSeg, nodepath, loc } = await _prepareDrop(
        ide,
        Container,
        point,
        nodePaths,
        direction,
    );
    
    ide.surface.highlightSeg(true, nearestSeg);
    ide.surface.highlightEmptySlot(false)
    if(Container) {
        ide.highlightNodeByNodePath(Container.nodePath);
    } else {
        ide.closeHighlight();
    }
    context.nodePath = nodepath;
    context.loc = loc
    ide.setCursorInFrame('copy');
}

function normalInsertNodes(node, loc, newNodes) {
    if(loc === LOC.PRE) {
        batchInsertNodeBefore(node, newNodes);
    } else {
        batchInsertNodeAfter(node, newNodes);
    }
}

const ViewRootDropStrategy = (ViewRoot) => {
    return {
        async dragover(ide, context, payload) {
            const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
            const nodePaths = ViewRoot.elements.map(c => c.nodePath);
            if(nodePaths.length > 0) {
                await normalPreDrop(ide, null, context, point, nodePaths, CONTAINER_DIRECTION.AUTO)
            }
        },
        drop(ide, context, MovingNodes, callback) {
            const node = getNodeByNodePath(ViewRoot, context.nodePath);
            if(node) {
                beforeDrop(MovingNodes);
                normalInsertNodes(node, context.loc, MovingNodes);
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
            callback();
        }
    }
    
}

const ContainerDropStrategy = (ViewRoot, Container, MovingNodes) => {
    return {
        async dragover(ide, context, payload) {
            const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
            const nodePaths = Container.elements.filter(n => !MovingNodes.includes(n)).map(c => c.nodePath);
            const direction = Container?.direction || CONTAINER_DIRECTION.AUTO;
            if(nodePaths.length > 0) {
                await normalPreDrop(ide, Container, context, point, nodePaths, direction)
            }
        },
        drop(ide, context, MovingNodes, callback) {
            const node = getNodeByNodePath(ViewRoot, context.nodePath);
            if(node) {
                beforeDrop(MovingNodes);
                normalInsertNodes(node, context.loc, MovingNodes)
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
            callback();
        }
    }
}

const AbsoluteDropStrategy = (ViewRoot, Container, MovingNodes) => {
    return {
        async dragover(ide, context, payload) {
            context.nodePath = Container.nodePath;
            context.toCoord = [payload.eventMeta.clientX, payload.eventMeta.clientY]
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
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
            const containerNode = getNodeByNodePath(ViewRoot, context.nodePath);
            if(containerNode) {
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
                    ide.surface.highlightSeg(false);
                    ide.surface.highlightEmptySlot(false);
                    ide.closeHighlight();
                })
                callback();
            }
        }
    }
}


export function chooseStrategy(payload, ViewRoot, MovingNodes) {
    if(payload.notAllowed){
        return NotAllowedStrategy;
    }
    if(payload.inFrame) {
        const elementInfo = payload.elementInfo;
        if(elementInfo?.isEmptySlot) {
            return EmptySlotStrategy(ViewRoot);
        }
        if(elementInfo?.target) {
            const node = getNodeByNodePath(ViewRoot, elementInfo.target);
            if(node) {
                const containerNode = node.isContainer ? node : node.parentNode;
                if(containerNode.isRoot) {
                    return ViewRootDropStrategy(ViewRoot);
                }
                if(containerNode?.isAbsolute) {
                    return AbsoluteDropStrategy(ViewRoot, containerNode, MovingNodes);
                }      
                return ContainerDropStrategy(ViewRoot, containerNode, MovingNodes);
            }
        } else {
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

        const dragNode = getNodeByNodePath(ViewRoot, elementInfo.target);
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
        const node = getNodeByNodePath(ViewRoot, elementInfo.target);
        if(node) {
            const containerNode = node.parentNode;
            if(containerNode?.isAbsolute) {
                return AbsoluteDragStartStrategy(ViewRoot, elementInfo, eventMeta)
            }
        }
    }
    return null;
}