import {
    distToSegmentVecSquared,
    BoxToSegmentsHorizontal,
    BoxToSegmentsVertical,
    BoxToSegmentsAuto,
    shiftVerticalSegBy,
    shiftHorizontalSegBy,
    shiftAutoSegBy,
    BoxToRectangle
} from './utils';

import { CONTAINER_DIRECTION } from './view-model';
import { getNodeByNodePath, CSSInlineStyleToObject, CSSToStaticStyle } from './index';

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

const EmptySlotStrategy = (View) => ({
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
        const node = getNodeByNodePath(View, context.nodePath);
        if(node) {
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

const ViewRootDropStrategy = (View) => {
    return {
        async dragover(ide, context, payload) {
            const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
            const nodePaths = View.getChildren().map(c => c.nodePath);
            if(nodePaths.length > 0) {
                await normalPreDrop(ide, null, context, point, nodePaths, CONTAINER_DIRECTION.AUTO)
            }
        },
        drop(ide, context, MovingNodes, callback) {
            const node = getNodeByNodePath(View, context.nodePath);
            if(node) {
                normalInsertNodes(node, context.loc, MovingNodes);
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
            callback();
        }
    }
    
}

const ContainerDropStrategy = (View, Container, MovingNodes) => {
    return {
        async dragover(ide, context, payload) {
            const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
            const nodePaths = Container.getChildren().filter(n => !MovingNodes.includes(n)).map(c => c.nodePath);
            const direction = Container.elementMeta?.direction || CONTAINER_DIRECTION.AUTO;
            if(nodePaths.length > 0) {
                await normalPreDrop(ide, Container, context, point, nodePaths, direction)
            }
        },
        drop(ide, context, MovingNodes, callback) {
            const node = getNodeByNodePath(View, context.nodePath);
            if(node) {
                normalInsertNodes(node, context.loc, MovingNodes)
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
            callback();
        }
    }
}

const AbsoluteDropStrategy = (View, Container, MovingNodes) => {
    return {
        async dragover(ide, context, payload) {
            // const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
            const offset = [payload.eventMeta.offsetX, payload.eventMeta.offsetY];
            // console.log(point, point2);
            context.nodePath = Container.nodePath;
            context.offset = offset
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.highlightNodeByNodePath(Container.nodePath);
        },
        drop(ide, context, MovingNodes, callback) {
            const containerNode = getNodeByNodePath(View, context.nodePath);
            if(containerNode) {
                MovingNodes.forEach(node => {
                    const style = Object.assign({
                        ...CSSInlineStyleToObject(node.staticStyle),
                        left: `${context.offset[0] - context.nodeOffset[0]}px`,
                        top: `${context.offset[1] - context.nodeOffset[1]}px`
                    });
                    containerNode.addChild(node);
                    node.staticStyle = CSSToStaticStyle(style);
                    ide.surface.highlightSeg(false);
                    ide.surface.highlightEmptySlot(false);
                    ide.closeHighlight();
                })
                callback();
            }
        }
    }
}


export function chooseStrategy(payload, View, MovingNodes) {
    if(payload.notAllowed){
        return NotAllowedStrategy;
    }
    if(payload.inFrame) {
        const elementInfo = payload.elementInfo;
        if(elementInfo?.isEmptySlot) {
            return EmptySlotStrategy(View);
        }
        if(elementInfo?.target) {
            const node = getNodeByNodePath(View, elementInfo.target);
            if(node) {
                const containerNode = node.elementMeta.isContainer ? node : node.parentNode;
                if(!containerNode.elementMeta) {
                    return ViewRootDropStrategy(View);
                }
                if(containerNode?.elementMeta?.isAbsolute) {
                    return AbsoluteDropStrategy(View, containerNode, MovingNodes);
                }      
                return ContainerDropStrategy(View, containerNode, MovingNodes);
            }
        } else {
            return ViewRootDropStrategy(View);
        }


    }
}

function AbsoluteDragStartStrategy(context, elementInfo, eventMeta) {
    const rect = elementInfo.rects[0];
    context.nodeOffset = [eventMeta.clientX - rect.x, eventMeta.clientY - rect.y];
}

export function dragStartStrategy(context, View, elementInfo, eventMeta) {
    if(elementInfo?.target) {
        const node = getNodeByNodePath(View, elementInfo.target);
        if(node) {
            const containerNode = node.parentNode;
            if(containerNode?.elementMeta?.isAbsolute) {
                AbsoluteDragStartStrategy(context, elementInfo, eventMeta)
            }
        }
    }
}