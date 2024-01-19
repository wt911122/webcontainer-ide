// import Previewer from './previewer/previewer';
import { makeElement, transformAttr } from './core/utils';
import Surface from './core/surface';
import MessageCenter from './core/message-center';

const SIMULATOR_PADDING = 30;
// let id = 0;

function oneTripToPreview(postMessage, data) {
    let uuid = `oneTripToPreview-${oneTripToPreview.uuid++}`;
    let resolve;
    const promise = new Promise(r => {
        resolve = r;
    })
    const f = (event) => {
        const data = event.data;
        if(data.uuid === uuid) {
            resolve(data.response);
            window.removeEventListener('message', f)
        }
    }
    window.addEventListener('message', f)
    postMessage({
        uuid,
        ...data
    })
    return promise;
}
oneTripToPreview.uuid = 0;

function onceAtOneTime(fn) {
    if(!onceAtOneTime.execute) {
        onceAtOneTime.execute = true;
        fn()
        onceAtOneTime.execute = false;
    }
}
onceAtOneTime.execute = false;

class IDE extends EventTarget {
    initialZoom = 1;
    padding = 20;
    maxZoom = 2;
    minZoom = 0.5;
    deviceWidth = 0;
    deviceHeight = 'auto';
    position = { x: 0, y: 0 };
    scale = 1;

    surface = null;

    _registedMethods = new Map();

    postIframeMessage = null;

    constructor(configs){
        super();
        this.simulator = configs.simulator;
        // this.previewer = new Previewer();
        // this.previewer.setProject(configs.project)
        this.surface = configs.surface;
        this.getSourceByNodePath = configs.getSourceByNodePath;
        this.preRegistMethods();
    }

    $mount(dom) {
        const viewport = createViewport();
        const viewcontent = createViewContent();
        const groundAnchor = createGroundAnchor();
        const iframe = createIframe();
        viewport.appendChild(viewcontent);
        viewport.appendChild(groundAnchor);
        viewcontent.appendChild(iframe);

        this.domCache = {
            viewport,
            viewcontent,
            groundAnchor,
            iframe,
        }

        let ready = false;
        // iframe.onload = () => {
        //     console.log('onload!')
        //     window.addEventListener('message', (event) => {
        //         const data = event.data;
        //         if(!ready && data.type === 'Event' && data.name === 'proxyReady') {
        //             const source = event.source;
        //             const origin = event.origin;
        //             this._init();
        //             this.postIframeMessage = (data) => {
        //                 source.postMessage(data, origin)
        //             }
        //             this.dispatchEvent(new CustomEvent('ready', {
        //                 detail: {
        //                     target: this.iframe,
        //                 }
        //             })); 
        //             ready = true;   
        //         }
        //     })
        // }
        dom.appendChild(viewport);
        iframe.addEventListener('load', () => {
            console.log('onload!')
            MessageCenter.registIDE(this, iframe);
           /* window.addEventListener('message', (event) => {
                const data = event.data;
                if(!ready && data.type === 'Event' && data.name === 'proxyReady') {
                    const source = event.source;
                    const origin = event.origin;
                    this._init();
                    this.postIframeMessage = (data) => {
                        source.postMessage(data, origin)
                    }
                    this.dispatchEvent(new CustomEvent('ready', {
                        detail: {
                            target: this.iframe,
                        }
                    })); 
                    ready = true;   
                }
            })*/
        })
        viewcontent.style.height = `${viewport.getBoundingClientRect().height}px`
        this.simulator.load(iframe)
        // this.previewer.load();
    }

    init(postIframeMessage) {
        this.postIframeMessage = postIframeMessage;
        const _frameResized = (payload) => {
            console.log('resized!', this.simulator)
            this.domCache.viewcontent.style.height = `${payload.scrollHeight}px`;
        }

        const wheelStriker = () => {
            let strikerStack = [];
            return (type, e) => {
                if(type === 'wheel' && strikerStack.length === 3 && strikerStack.every(s => s === 'wheel')) {
                    console.log('onWheel')
                    this.onWheelInFrame(e);
                }
                strikerStack.unshift(type);
                if(strikerStack.length > 3) {
                    strikerStack.length = 3;
                }
            }
        }
        const _wheelHandlerInIframe = wheelStriker().bind(this);
        
        this.onMessage = (event) => {
            const data = event.data;
            if(data.type === 'Event') {
                switch(data.name) {
                    case 'wheel':
                    case 'scroll':
                        _wheelHandlerInIframe(data.name, data.payload.eventMeta);
                        break;
                    case 'dragstart':
                        this.dispatchEvent(new CustomEvent('frame:dragstart', {
                            detail: data.payload,
                        }))
                        break;
                    case 'refreshBoundings': 
                        this.refreshBoundings(data.payload);
                        break;
                    case 'mousemove': 
                        this.highlightNode(data.payload.elementInfo);
                        break;
                    case 'dragover':
                        this.dispatchEvent(new CustomEvent('frame:dragover', {
                            detail: data.payload
                        }))
                        break;
                    case 'dragend':
                        this.dispatchEvent(new CustomEvent('frame:dragend', {
                            detail: data.payload
                        }))
                        break;
                    case 'hesitateWhenDragging':
                        this.dispatchEvent(new CustomEvent('frame:hesitateWhenDragging', {
                            detail: data.payload
                        }))
                        break;
                    case 'click':
                        this._focusOnNode(data.payload);
                        break;
                    case 'dblclick':
                        this.dispatchEvent(new CustomEvent('frame:dblclick', {
                            detail: data.payload
                        }))
                        break;
                    case 'contentchange':
                        this.dispatchEvent(new CustomEvent('frame:contentChange', {
                            detail: data.payload
                        }))
                        break;
                    case 'resizeObserver':
                        _frameResized(data.payload);
                        break;
                }
            }
            if(data.type === 'Method') {
                const method = this._registedMethods.get(data.name);
                if(method) {
                    const uuid = data.uuid;
                    method((response) => {
                        postIframeMessage({
                            type: 'Response',
                            result: 'success',
                            uuid,
                            response,
                        }, event.origin)
                    }, err => {
                        postIframeMessage({
                            type: 'Response',
                            result: 'failed',
                            uuid,
                            err
                        }, event.origin)
                    }, data.payload);
                }
                
            }
        }

        const viewport = this.domCache.viewport;
        viewport.addEventListener('mousemove', (e) => {
            if(e.target === viewport) {
                this.surface.closeHighlightElem()
            }
        })
        viewport.addEventListener('click', (e) => {
            if(e.target === viewport) {
                this.surface.closeAll();
                this.surface.setFocus();
            }
        })
        viewport.addEventListener("wheel", this.onWheelInViewport.bind(this), { passive: false });
        this.surface.apply(this, this.domCache.groundAnchor);

        this.dispatchEvent(new CustomEvent('ready', {
            detail: {
                target: this.iframe,
            }
        }));
    }

    /*_init() {


        const _frameResized = (payload) => {
            console.log('resized!', this.simulator)
            this.domCache.viewcontent.style.height = `${payload.scrollHeight}px`;
        }

        const wheelStriker = () => {
            let strikerStack = [];
            return (type, e) => {
                if(type === 'wheel' && strikerStack.length === 3 && strikerStack.every(s => s === 'wheel')) {
                    console.log('onWheel')
                    this.onWheelInFrame(e);
                }
                strikerStack.unshift(type);
                if(strikerStack.length > 3) {
                    strikerStack.length = 3;
                }
            }
        }
        const _wheelHandlerInIframe = wheelStriker().bind(this);

        const getElement = async (payload) => {
            if(getElement.execute) {
                return;
            }
            getElement.execute = true;
            const { target, rects } = payload;
            if(target) {
                const source = this.getSourceByNodePath(target);
                if(source) {
                    const parentNode = source.parentNode;
                    const nodeInfo = await this.getElementInfoByNodePath(parentNode.nodePath);
                    console.log(nodeInfo);
                }
            }
            getElement.execute = false;
        }

        window.addEventListener('message', (event) => {
            const data = event.data;
            if(data.type === 'Event') {
                switch(data.name) {
                    case 'wheel':
                    case 'scroll':
                        _wheelHandlerInIframe(data.name, data.payload.eventMeta);
                        break;
                    case 'dragstart':
                        this.dispatchEvent(new CustomEvent('frame:dragstart', {
                            detail: data.payload,
                        }))
                        break;
                    case 'refreshBoundings': 
                        this.refreshBoundings(data.payload);
                        break;
                    case 'mousemove': 
                        this.highlightNode(data.payload.elementInfo);
                        break;
                    case 'dragover':
                        this.dispatchEvent(new CustomEvent('frame:dragover', {
                            detail: data.payload
                        }))
                        break;
                    case 'dragend':
                        this.dispatchEvent(new CustomEvent('frame:dragend', {
                            detail: data.payload
                        }))
                        break;
                    case 'hesitateWhenDragging':
                        this.dispatchEvent(new CustomEvent('frame:hesitateWhenDragging', {
                            detail: data.payload
                        }))
                        break;
                    case 'click':
                        this._focusOnNode(data.payload);
                        break;
                    case 'dblclick':
                        this.dispatchEvent(new CustomEvent('frame:requestEditContent', {
                            detail: data.payload
                        }))
                        break;
                    case 'contentchange':
                        this.dispatchEvent(new CustomEvent('frame:contentChange', {
                            detail: data.payload
                        }))
                        break;
                    case 'resizeObserver':
                        _frameResized(data.payload);
                        break;
                }
            }
            if(data.type === 'Method') {
                const method = this._registedMethods.get(data.name);
                if(method) {
                    const uuid = data.uuid;
                    method((response) => {
                        event.source.postMessage({
                            type: 'Response',
                            result: 'success',
                            uuid,
                            response,
                        }, event.origin)
                    }, err => {
                        event.source.postMessage({
                            type: 'Response',
                            result: 'failed',
                            uuid,
                            err
                        }, event.origin)
                    }, data.payload);
                }
                
            }
            
        });
        const viewport = this.domCache.viewport;
        viewport.addEventListener('mousemove', (e) => {
            if(e.target === viewport) {
                this.surface.closeHighlightElem()
            }
        })
        viewport.addEventListener("wheel", this.onWheelInViewport.bind(this), { passive: false });
        this.surface.apply(this, this.domCache.groundAnchor);
    }*/

    preRegistMethods() {

    }

    refreshBoundings(payload) {
        const elementInfos = payload.elementInfos;
        elementInfos.forEach(elementInfo => {
            elementInfo.source = this.getSourceByNodePath(elementInfo.target);
        });

        this.surface.refresh(elementInfos);
    }

    highlightNode(elementInfo) {
        const { target, rects } = elementInfo;
        if(target) {
            const source = this.getSourceByNodePath(target);
            this.surface.highlightElem({
                source,
                rects,
            })
        } else {
            this.surface.closeHighlightElem()
        }
    }

    closeHighlight() {
        this.surface.closeHighlightElem();
    }

    async highlightNodeByNodePath(nodePath, selector) {
        const payload = await this.getElementInfoByNodePath(nodePath, selector);
        this.highlightNode(payload);
    }
    clearFocus() {
        this.surface.setFocus();
    }

    _focusOnNode(payload) {
        const { target, rects } = payload.elementInfo;
        const { shiftKey } = payload.eventMeta;
        if(target) {
            this.surface.closeHighlightElem()
            const source = this.getSourceByNodePath(target);
            if(shiftKey) {
                this.surface.addFocus({
                    source,
                    rects,
                })
            } else {
                this.surface.setFocus({
                    source,
                    rects,
                })
            }
           
        } else {
            this.surface.setFocus();
        }
    }

    _calculateToViewport(p, targetPoint) {
        const scale = this.scale;
        const position = this.position;
        targetPoint[0] = p[0] * scale + position.x;
        targetPoint[1] = p[1] * scale + position.y;
    }

    syncGroundAnchor() {
        const p = [0, 0];
        this._calculateToViewport(p, p);
        this.domCache.groundAnchor.style.transform = `translate(${p[0]}px, ${p[1]}px)`
    }

    resolveEventOffsetToViewport(e) {
        
        const { clientX, clientY } = e;
        const p = [clientX, clientY];
        this._calculateToViewport(p, p)
        return p
    }

    onWheelInViewport(e) {
        e.preventDefault();
        const [x, y] = this.resolveEventOffset(e);
        this._onWheel(e.ctrlKey, e.deltaX, e.deltaY, x, y)
    }

    onWheelInFrame(e) {
        const [x, y] = this.resolveEventOffsetToViewport(e);
        this._onWheel(e.ctrlKey, e.deltaX, e.deltaY, x, y)
    }

    _onWheel(ctrlKey, deltaX, deltaY, x, y) {
        if(ctrlKey) {
            deltaY = -deltaY;
            this.zoomHandler(x, y, deltaY);
        } else {
            this.panHandler(-deltaX, -deltaY);
        }
    }
    
    resolveEventOffset(event) {
        const { clientX, clientY } = event
        const { x, y } = this.domCache.viewport.getBoundingClientRect()
        return [clientX - x, clientY - y];
    }

    zoomHandler(offsetX, offsetY, deltaY) {
        if(this._zooming) return;
        this._zooming = true;
        const oldscale = this.scale;
        let newScale = oldscale;
        const amount = deltaY > 0 ? 1.05 : 1 / 1.05;
        newScale *= amount;
        newScale = Math.min(this.maxZoom, Math.max(this.minZoom, newScale))
        const { x, y } = this.position;
        const r = newScale / oldscale;
        const px = offsetX - (offsetX - x) * r
        const py = offsetY - (offsetY - y) * r
        this.scale = newScale;
        Object.assign(this.position, {
            x: px,
            y: py
        })
        this._resetTransform();
        this.dispatchEvent(new CustomEvent('zoompan', {
            detail: {
                zoom: true,
            }
        }))
        this._zooming = false;
    }

    panHandler(deltaX, deltaY) {
        if(this._panning) return;
        this._panning = true;
        this.position.x += deltaX;
        this.position.y += deltaY; 
        this._resetTransform();
        this.dispatchEvent(new CustomEvent('zoompan', {
            detail: {
                zoom: false,
            }
        }))
        this._panning = false;
    }

    _resetTransform() {
        const { x, y } = this.position;
        const scale = this.scale;
        const transformCss = `matrix(${scale}, 0, 0, ${scale}, ${x}, ${y})` //`translate(${x}px, ${y}px) scale(${scale},${scale})`// ;
        this.domCache.viewcontent.style[transformAttr] = transformCss;
        this.syncGroundAnchor();   
    }

    _resolveEventOffsetInFrame(event) {
        const { clientX, clientY } = event
        const { x, y } = this.position;
        const scale = this.scale;
        const viewport = this.domCache.viewport.getBoundingClientRect()
        return [
            clientX * scale + x + viewport.x, 
            clientY * scale + y + viewport.y
        ];
    }

    
    async doDrag(target, movingNodePaths, onDragStart, onDragover, onDragend) {
        this.postIframeMessage({
            type: 'Event',
            name: 'startDragging',
            payload: {
                nodePaths: movingNodePaths
            }
        });
        const dragbutton = document.importNode(target, true)
        dragbutton.style.position = 'fixed';
        dragbutton.style['pointer-events'] = 'none';
        document.body.appendChild(dragbutton);
        
        if(onDragStart) {
            await onDragStart();
        }
        

        const dragover = (e) => {
            if(onDragover.execute) return;
            onDragover.execute = true;
            const [x, y] = this._resolveEventOffsetInFrame(e.detail.eventMeta)
            dragbutton.style.left = `${x}px`;
            dragbutton.style.top = `${y}px`;
            onDragover({
                elementInfo: e.detail.elementInfo,
                eventMeta: e.detail.eventMeta,
                inFrame: true,
                notAllowed: e.detail.notAllowed,
            }, active_dragover)
        }
        function active_dragover() {
            onDragover.execute = false;
        }
        
        const f = (e) => {
            if(onDragover.execute) return;
            onDragover.execute = true;
            const { clientX, clientY } = e;
            dragbutton.style.left = `${clientX}px`;
            dragbutton.style.top = `${clientY}px`;
            onDragover({
                elementInfo: null,
                eventMeta: e,
                inFrame: false,
                notAllowed: true,
            }, active_dragover)
        }
        const end = async (e) => {
            dragbutton.remove();
            this.removeEventListener('frame:dragend', end);
            this.removeEventListener('frame:dragover', dragover);
            this.removeEventListener('frame:hesitateWhenDragging', whenHesitate)
            document.removeEventListener('mousemove', f);
            document.removeEventListener('mouseup', end);
            if(onDragend) {
                await onDragend();
            }
            this.postIframeMessage({
                type: 'Event',
                name: 'stopDragging'
            })
        }

        const whenHesitate = (e) => {
           this.surface.closeAll();
        }

        this.addEventListener('frame:dragend', end);
        this.addEventListener('frame:dragover', dragover);
        this.addEventListener('frame:hesitateWhenDragging', whenHesitate)
        document.addEventListener('mousemove', f);
        document.addEventListener('mouseup', end)
        
    }

    doEditContent(nodePath) {
        this.postIframeMessage({
            type: 'Method',
            name: 'editContent',
            payload: {
                nodePath,
            }
        })
    }

    setCursorInFrame(cursor) {
        this.postIframeMessage({
            type: 'Method',
            name: 'setCursor',
            payload: {
                cursor,
            }
        })
    }

    doCallComponentMethod(payload) {
        const { nodePath, method, argus = [] } = payload
        this.postIframeMessage({
            type: 'Method',
            name: 'callComponentMethod',
            payload: {
                nodePath,
                method,
                argus
            }
        })
    }
    doSetRestrictArea(selector) {
        this.postIframeMessage({
            type: 'Method',
            name: 'setRestrictArea',
            payload: {
                selector,
            }
        })
    }
    

    // _postMessageToIframe(data) {
    //     this.domCache.iframe.contentWindow.postMessage({
    //         ...data,
    //         requestId: id++,
    //     }, '*');
    //     window.addEventListener('message', )
    // }

    async getElementInfoByNodePath(nodePath, selector) {
        const info = await oneTripToPreview(this.postIframeMessage, {
            type: 'Method',
            name: 'getElementInfoByNodePath',
            payload: {
                nodePath,
                selector,
            }
        });
        // console.log(info)
        return info;
    }

    async getElementsInfoByNodePath(nodePaths) {
        const info = await oneTripToPreview(this.postIframeMessage, {
            type: 'Method',
            name: 'getElementsInfoByNodePath',
            payload: {
                nodePaths,
            }
        });
        return info;
    }

    startObserveRootElem(selector) {
        this.postIframeMessage({
            type: 'Method',
            name: 'startObserveRootNodeSize',
            payload: {
                selector: selector
            }
        })
    }

    setElementsTemporaryStyle(payload) {
        this.postIframeMessage({
            type: 'Method',
            name: 'setElementsTemporaryStyle',
            payload
        })
    }

    setElementsTemporaryAttribute(payload) {
        this.postIframeMessage({
            type: 'Method',
            name: 'setElementsTemporaryAttribute',
            payload
        })
    }

    makeDraggingElemMove(payload) {
        this.postIframeMessage({
            type: 'Event',
            name: 'makeDraggingElemMove',
            payload
        })
    }

    registMethod(name, method) {
        const { isAsync, body } = method
        const _method = isAsync 
            ? async (resolve, reject, ...argus) => {
                if(method.execute) {
                    return;
                }
                _method.execute = true;
                try{
                    const result = await body.call(this, ...argus); 
                    resolve(result);
                } catch(err) {
                    reject(err);
                } finally {
                    _method.execute = false;
                }
            }
            : async (resolve, reject, ...argus) => {
                if(method.execute) {
                    return;
                }
                _method.execute = true;
                try{
                    const result =  body.call(this, ...argus);
                    resolve(result);
                } catch(err) {
                    reject(err);
                } finally {
                    _method.execute = false;
                }
            }
        this._registedMethods.set(name, _method);
    }

}

export default IDE;

function createViewport() {
    return makeElement({
        tag: 'div',
        style: {
            position: 'relative',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            'user-select': 'none',
            overflow: 'hidden',
            background: 'rgba(0,0,0,0.1)',
        }
    });
}

function createViewContent() {
    return makeElement({
        tag: 'div',
        style: {
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: 'top left',
            width: '100%',
            overflow: 'hidden',
            background: '#fff',
            userSelect: 'none',
        }
    });
}

function createGroundAnchor() {
    return makeElement({
        tag: 'div',
        style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: 0,
            height: 0,
        }
    });
}

// function createSimulator() {
//     return makeElement({
//         tag: 'div',
//         style: {
//             width: '100%',
//             height: '100%',
//         }
//     });
// }

function createIframe() {
    return makeElement({
        tag: 'iframe',
        style: {
            width: '100%',
            height: '100%',
            border: 'none',
        },
        attributes: {
            scrolling: 'no',
        }
    })
}
