

function sqr(x) {
    return x * x;
}
export function dist2(v, w) {
    return sqr(v[0] - w[0]) + sqr(v[1] - w[1]);
}

// p - point
// v - start point of segment
// w - end point of segment
export function distToSegmentSquared(p, v, w) {
    const l2 = dist2(v, w);
    if (l2 === 0) return dist2(p, v);
    let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
    t = Math.max(0, Math.min(1, t));
    return dist2(p, [ v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1]) ]);
}

export function distToSegmentVecSquared(p, vec) {
    const v = vec.slice(0, 2);
    const w = vec.slice(2, 4);
    const l2 = dist2(v, w);
    if (l2 === 0) return dist2(p, v);
    let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
    t = Math.max(0, Math.min(1, t));
    return dist2(p, [ v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1]) ]);
}

export function BoxToSegmentsHorizontal(box) {
    return [
        [box.left, box.top, box.right, box.top],
        [box.left, box.bottom, box.right, box.bottom],
    ]
}

export function BoxToSegmentsVertical(box) {
    return [
        [box.left, box.top, box.left, box.bottom],
        [box.right, box.top, box.right, box.bottom],
    ]
}

export function shiftVerticalSegBy(seg, shift) {
    seg[0] += shift;
    seg[2] += shift;
    return seg;
}

export function shiftHorizontalSegBy(seg, shift) {
    seg[1] += shift;
    seg[3] += shift;
    return seg;
}

export function shiftAutoSegBy(seg, shift) {
    if(seg[0] === seg[2]){
        return shiftVerticalSegBy(seg, shift);
    }
    return shiftHorizontalSegBy(seg, shift);
}

export function BoxToSegmentsAuto(box, elementInfo) {
    if(elementInfo.elemStyle?.inline) {
        return BoxToSegmentsVertical(box);
    }
    return BoxToSegmentsHorizontal(box);
}

export function BoxToRectangle(box) {
    return [box.x, box.y, box.width, box.height]
} 