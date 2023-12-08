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
import { getNodeByNodePath } from './index';

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

async function _prepareDrop(ide, point, nodePaths, direction) {
    const info = await ide.getElementsInfoByNodePath(nodePaths);
    const { getSegs, shiftHighlighter } = SEGMENT_STATEGY[direction];
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
        })
    });

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
    drop(ide, context, MovingNode, callback) {
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
    drop(ide, context, MovingNode, callback) {
        const node = getNodeByNodePath(View, context.nodePath);
        if(node) {
            node.addChild(MovingNode);
        }
        ide.surface.highlightSeg(false);
        ide.surface.highlightEmptySlot(false)
        ide.closeHighlight();
        callback();
    }
})

async function normalPreDrop(ide, context, point, nodePaths, direction) {
    const { nearestSeg, nodepath, loc } = await _prepareDrop(
        ide,
        point,
        nodePaths,
        direction,
    );
    
    ide.surface.highlightSeg(true, nearestSeg);
    ide.surface.highlightEmptySlot(false)
    ide.closeHighlight();
    context.nodePath = nodepath;
    context.loc = loc
    ide.setCursorInFrame('copy');
}

const ViewRootDropStrategy = (View) => {
    return {
        async dragover(ide, context, payload) {
            const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
            const nodePaths = View.getChildren().map(c => c.nodePath);
            if(nodePaths.length > 0) {
                await normalPreDrop(ide, context, point, nodePaths, CONTAINER_DIRECTION.AUTO)
            }
        },
        drop(ide, context, MovingNode, callback) {
            const node = getNodeByNodePath(View, context.nodePath);
            if(node) {
                node.parentNode[context.loc === LOC.PRE ? 'insertNodeBefore': 'insertNodeAfter'](node, MovingNode)
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
            callback();
        }
    }
    
}

const ContainerDropStrategy = (View, Container, MovingNode) => {
    return {
        async dragover(ide, context, payload) {
            const point = [payload.eventMeta.clientX, payload.eventMeta.clientY];
            const nodePaths = Container.getChildren().filter(n => n !== MovingNode).map(c => c.nodePath);
            const direction = Container.elementMeta?.direction || CONTAINER_DIRECTION.AUTO;
            if(nodePaths.length > 0) {
                await normalPreDrop(ide, context, point, nodePaths, direction)
            }
        },
        drop(ide, context, MovingNode, callback) {
            const node = getNodeByNodePath(View, context.nodePath);
            if(node) {
                node.parentNode[context.loc === LOC.PRE ? 'insertNodeBefore': 'insertNodeAfter'](node, MovingNode)
            }
            ide.surface.highlightSeg(false);
            ide.surface.highlightEmptySlot(false)
            ide.closeHighlight();
            callback();
        }
    }
}

const AbsoluteDropStrategy = (View, Container, MovingNode) => {
    return {
        async dragover(ide, context, payload) {

        }
    }
}


export function chooseStrategy(payload, View, MovingNode) {
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
                    return AbsoluteDropStrategy(View, View, containerNode, MovingNode);
                }      
                return ContainerDropStrategy(View, containerNode, MovingNode);
            }
        } else {
            return ViewRootDropStrategy(View);
        }


    }
}