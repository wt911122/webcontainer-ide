// import { makeElement } from './utils';
import { createApp, reactive, h, toRaw, provide } from 'vue'
import SurfaceElem from './surface.vue';
import { calcPolygonPath } from './polygon';

class Surface {
    targets = reactive([]);

    highlight_elem = reactive({
        type: undefined,
        active: false,
        rects: [],
        polygonPath: [],
        viewbox: [],
        noTitle: false,
        source: null,
    })

    highlight_seg = reactive({
        active: false,
        segments: [],
    })

    highlight_empty_slot = reactive({
        active: false,
        rect: [],
    })

    apply(ide, dom) {
        this.ide = ide;
        this.render = new SurfaceRenderer(this, dom);
        this.render.init();
        ide.addEventListener('zoompan', (e) => {
            if(e.detail.zoom) {
                if(this.highlight_elem.active) {
                    Object.assign(this.highlight_elem, {
                        ...this.resolveRects(this.highlight_elem.rects)
                    });
                }
                this.targets.forEach(t => {
                    Object.assign(t, {
                        ...this.resolveRects(t.rects)
                    });
                })
            }
        })
    }

    refresh(infos) {
        const targets = [...this.targets, this.highlight_elem];
        infos.forEach(info => {
            const exist = targets.find(p => _isSameTarget(p.source, info.source));
            if(exist) {
                Object.assign(exist, this.resolveRects(info.rects))
            } 
        });
    }
    
    hasTarget(source) {
        return this.targets.find(p => _isSameTarget(p.source, source));
    }
    
    _targetExist(config) {
        const exist = this.targets.find(p => _isSameTarget(p.source, config.source));
        if(exist) {
            return true;
        } 
        return false;
    }

    highlightElem(config) {
        if(this._targetExist(config)) {
            this.closeHighlightElem();
            return;
        } 
        if(!_isSameTarget(this.highlight_elem.source, config.source)) {
            Object.assign(this.highlight_elem, {
                noTitle: false,
                ...config,
                ...this.resolveRects(config.rects),
                active: true,
            });
        }   
    }

    getFocusNodes() {
        return this.targets.map(t => toRaw(t.source));
    }
    
    setFocus(config){
        if(!config) {
            const l = this.targets.length;
            this.targets.splice(0, l)
            return
        }
        if(this._targetExist(config)) {
            return;
        }
        this.closeHighlightElem();
        const l = this.targets.length;
        this.targets.splice(0, l, {
            ...config,
            ...this.resolveRects(config.rects),
            active: true,
        });
    }

    addFocus(config) {
        if(this._targetExist(config)) {
            return;
        }
        this.targets.push({
            ...config,
            ...this.resolveRects(config.rects),
            active: true,
        })
    }

    closeHighlightElem() {
        if(this.highlight_elem.active) {
            Object.assign(this.highlight_elem, {
                active: false,
                source: null,
            })
        }
    }

    resolveRects(rects) {
        const ide = this.ide;
        const scale = ide.scale;
        if(rects.length === 1) {
            const { x, y, width, height } = rects[0]
            const polygonPath = [
                0, 0,
                width * scale, 0,
                width * scale, height * scale, 
                0, height * scale,
            ];
            return {
                position: [x * scale, y * scale],
                polygonPath,
                viewbox: bounding_box(polygonPath),
            }
        } else {
            const anchor = [rects[0].x, rects[0].y]
            return transformPolygon(anchor, scale, calcPolygonPath(rects));
        }
    }

    highlightSeg(val, seg) {
        this.highlight_seg.active = val;
        if(val) {
            const ide = this.ide;
            const scale = ide.scale;
            this.highlight_seg.segments[0] = seg[0]*scale;
            this.highlight_seg.segments[1] = seg[1]*scale;
            this.highlight_seg.segments[2] = seg[2]*scale;
            this.highlight_seg.segments[3] = seg[3]*scale;
        } 
    }

    highlightEmptySlot(val, rect) {
        this.highlight_empty_slot.active = val;
        if(val) {
            const ide = this.ide;
            const scale = ide.scale;
            this.highlight_empty_slot.rect[0] = rect[0]*scale;
            this.highlight_empty_slot.rect[1] = rect[1]*scale;
            this.highlight_empty_slot.rect[2] = rect[2]*scale;
            this.highlight_empty_slot.rect[3] = rect[3]*scale;
        }
    }

    async setHoverNode(nodePath) {
        const info = await this.ide.getElementInfoByNodePath(nodePath);
        this.highlightElem({
            ...info,
            noTitle: true,
        })
    }
    async setFocusNode(source) {
        const elementInfo = await this.ide.getElementInfoByNodePath(source.nodePath);
        this.closeHighlightElem();
        this.setFocus({
            source,
            rects: elementInfo.rects
        })
    }

    closeAll() {
        this.closeHighlightElem();
        this.highlightSeg(false);
        this.highlightEmptySlot(false)
    }

    // resolveBoundingBox(rects) {
    //     const ide = this.ide;
    //     const { x, y, width, height} = rects;
    //     const scale = ide.scale;
    //     return ;
    // }
}

class SurfaceRenderer {
    constructor(surface, dom){
        this.surface = surface;
        this.dom = dom;
    }

    init() {
        const app = createApp(this.renderFn());
        app.mount(this.dom);
    }
    
    renderFn() {
        const surface = this.surface;
        // const ide = surface.ide;
        return {
            inheritAttrs: false,
            setup() {
                provide('getSurface', () => surface)
                provide('setHighlightNode', (nodePath) => { surface.setHoverNode(nodePath)});
                provide('closeHighlightElem', () => { surface.closeHighlightElem()});
                provide('setFocusNode', (source) => { surface.setFocusNode(toRaw(source))})
                return () => h(SurfaceElem);
            }
        }
    }
    
}




export default Surface;



function _isSameTarget(a, b) {
    return toRaw(a) === toRaw(b)
}

function transformPolygon(anchor, scale, polygon) {
    const l = polygon.length;
    let i = 0;
    while(i<l) {
        polygon[i] = (polygon[i]-anchor[0])*scale
        polygon[i+1] = (polygon[i+1]-anchor[1])*scale
        i+=2
    }
    return {
        position: [anchor[0] * scale, anchor[1] * scale],
        polygonPath: polygon,
        viewbox: bounding_box(polygon),
    }
}

export function bounding_box(points) {
    if(points.length === 0) {
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
        }
    }
    let min_x = Infinity; 
    let min_y = Infinity; 
    let max_x = -Infinity; 
    let max_y = -Infinity; 
    let i = 0;
    while(i < points.length) {
        const px = points[i];
        const py = points[i+1];
        if(px < min_x){
            min_x = px
        }

        if (px > max_x) {
            max_x = px
        } 

        if (py < min_y) {
            min_y = py
        }

        if (py > max_y) {
            max_y = py
        }
        i+=2;
    }
  
    return {
        // points: [(min_x,min_y),(max_x,min_y),(max_x,max_y),(min_x,max_y)],
        width: Math.max(max_x - min_x, 10),
        height: Math.max(max_y - min_y, 10),
        x: min_x,
        y: min_y,
    }
}