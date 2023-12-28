function minXLeftCoord(y, rectangles) {
    let x = Infinity;
    rectanglesAtY(y, rectangles).forEach(rect => {
        x = Math.min(x, rect.left)
    })
    return x;
}

function maxXRightCoord(y, rectangles) {
    let x = -Infinity;
    rectanglesAtY(y, rectangles).forEach(rect => {
        x = Math.max(x, rect.right)
    })
    return x;
}

function rectanglesAtY(y, rectangles) {
    const lines = rectsAtYExcBottomLines(y, rectangles);

    if(lines.length > 0) {
        return lines;
    } else {
        // there are only rectangle bottom lines so we need to consider them.
        return rectsAtYIncBottomLines(y, rectangles);
    }
}

function rectsAtYExcBottomLines(y, rectangles) {
    return rectangles.filter(rect => rect.top <= y && rect.bottom > y);
}

function rectsAtYIncBottomLines(y, rectangles) {
    return rectangles.filter(rect => rect.top <=y && rect.bottom == y);
}


export function calcPolygonPath(rectangles) {
    const ret = [];
    const yCoords = getAllYCoords(rectangles);
    yCoords.sort((a, b) => a - b);

    let previousLeftCoord = 0;
    let previousRightCoord = 0;
    yCoords.forEach((yCoord, idx) => {
        let minimumXLeftCoord = minXLeftCoord(yCoord, rectangles);
        let maximumXRightCoord = maxXRightCoord(yCoord, rectangles);
        if(idx === 0) {
            ret.push(minimumXLeftCoord, yCoord);
            ret.push(maximumXRightCoord, yCoord);
        } else {
            if(minimumXLeftCoord !== previousLeftCoord) {
                ret.unshift(previousLeftCoord, yCoord);
                ret.unshift(minimumXLeftCoord, yCoord);
            } else {
                ret.unshift(minimumXLeftCoord, yCoord);
            }

            if(maximumXRightCoord !== previousRightCoord) {
                ret.push(previousRightCoord, yCoord);
                ret.push(maximumXRightCoord, yCoord);
            } else {
                ret.push(maximumXRightCoord, yCoord);
            }
        }
        previousLeftCoord = minimumXLeftCoord;
        previousRightCoord = maximumXRightCoord;
    })
    return ret;

}

function getAllYCoords(rectangles) {
    const allCoords = new Set();
    rectangles.forEach(rectangle => {
        allCoords.add(rectangle.bottom); 
        allCoords.add(rectangle.top); 
    });
    return Array.from(allCoords);
}
