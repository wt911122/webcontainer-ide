import {
    distToSegmentVecSquared,
    BoxToSegmentsHorizontal,
    BoxToSegmentsVertical,
    BoxToSegmentsAuto,
    shiftVerticalSegBy,
    shiftHorizontalSegBy,
    shiftAutoSegBy,
    // BoxToRectangle
} from './utils';

import { CONTAINER_DIRECTION } from './view-model';

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

export async function prepareDropStrategy(ide, point, nodePaths, direction) {
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

// export async function prepareDropToEmptySlotStrategy(elementInfo) {
//     const rect = elementInfo.rects[0];
//     return {
//         rect: BoxToRectangle(rect),
//         nodepath,
        
//     }
// }

// export async function prepareDrop(ide, { direction, point, nodePaths } = {}) {
//     const {
//         nearestSeg,
//         nodepath,
//         loc
//     } = await prepareDropStrategy(ide, point, nodePaths, direction)
//     ide.surface.highlightSeg(true, nearestSeg);
//     return { nodepath, loc }
// }