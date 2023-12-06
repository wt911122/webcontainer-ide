let transformAttr = 'transform' in document.documentElement.style ? 'transform' : undefined;
transformAttr =
	transformAttr || ('-webkit-transform' in document.documentElement.style ? '-webkit-transform' : 'undefined');
    transformAttr = transformAttr || ('-moz-transform' in document.documentElement.style ? '-moz-transform' : 'undefined');
    transformAttr = transformAttr || ('-ms-transform' in document.documentElement.style ? '-ms-transform' : 'undefined');
    transformAttr = transformAttr || ('-o-transform' in document.documentElement.style ? '-o-transform' : 'undefined');

const px = (val) => `${val}px`;

class ZoomPanBox extends HTMLElement {
	initialZoom = 1;
    padding = 20;
    maxZoom = 2;
    minZoom = 0.5;
    deviceWidth = 0;
    deviceHeight = 'auto';

    static observedAttributes = ["zoom", "device-width", "device-height"];

    constructor() {
        super();
        this.position = { x: 0, y: 0 };
        this.scale = 1;
    }

    connectedCallback() {
		this.render();
		this.cacheDom();
        this.setDevice();
		this.attachEvents();
       
	}

    render() {
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
            <style>
				#viewport { 
                    position: relative;
                    width: 100%;
                    height: 100%;
                    left:0;
                    top:0;
                    user-select: none;
                    overflow:hidden;
                    background: rgba(0,0,0,0.1);
                }
                #viewcontent {
                    position: absolute;
                    top:0;
                    left: 0;
                    transform-origin: top left;
                    width: 100%;
                    overflow: hidden;
                    background: #fff;
                    user-select: none;
                }
            </style>
			<div id="viewport">
                <div id="viewcontent">
                    <slot></slot>
                </div>
			</div>
        `;
	}

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name)
        if(name === 'zoom'){
            // const rect = this.getBoundingClientRect();
            // this.zoomAtPoint([rect.width/2, rect.height/2], parseFloat(newValue))
        } else {
            this[name] = newValue;
        }
	}

    cacheDom() {
        this.dom = {
			viewport: this.shadowRoot.querySelector("#viewport"),
            viewcontent: this.shadowRoot.querySelector('#viewcontent')
		};
    }

    setDevice() {
        this.dom.viewcontent.style.width = px(this.deviceWidth);
        if(this.deviceHeight !== 'auto') {
            this.dom.viewcontent.style.height = px(this.deviceHeight);
        } else {

        }
    }

    attachEvents() {
        this.dom.viewport.addEventListener("wheel", this.onWheel.bind(this), { capture: true });
    }

    onWheel(e){
        let { deltaX, deltaY } = e
        const { offsetX, offsetY } = this.resolveEventOffset(e);
        if(e.ctrlKey) {
            e.preventDefault();
            deltaY = -deltaY;
            this.zoomHandler(offsetX, offsetY, deltaX, deltaY, e);
		    // this.zoom += e.deltaY / 1000;
        } else {
            this.panHandler(-deltaX, -deltaY, e);
        }
	}

    resolveEventOffset(event) {
        const { clientX, clientY } = event
        const { x, y } = this.getBoundingClientRect()
        const offsetX = clientX - x;
        const offsetY = clientY - y;
        return { offsetX, offsetY };
    }
    zoomHandler(offsetX, offsetY, deltaX, deltaY, event) {
        if(this._zooming) return;
        this._zooming = true;
        const oldscale = this.scale;
        let minZoom = this.minZoom

        let newScale = this.scale;
        const amount = deltaY > 0 ? 1.1 : 1 / 1.1;
        newScale *= amount;
        newScale = Math.min(this.maxZoom, Math.max(minZoom, newScale))
        const { x, y } = this.position;
        const r = newScale / oldscale;
        const px = offsetX - (offsetX - x) * r
        const py = offsetY - (offsetY - y) * r
        this.position.x = px;
        this.position.y = py;  
        this.scale = newScale;
        this._resetTransform();
        this._zooming = false;
    }
    panHandler(deltaX, deltaY) {
        if(this._panning) return;
        this._panning = true;
        this.position.x += deltaX;
        this.position.y += deltaY; 
        this._resetTransform();
        this._panning = false;
    }

    _resetTransform() {
        const { x, y } = this.position;
        const scale = this.scale;
        const transformCss = `matrix(${scale}, 0, 0, ${scale}, ${x}, ${y})` //`translate(${x}px, ${y}px) scale(${scale},${scale})`// ;
        this.dom.viewcontent.style[transformAttr] = transformCss
    }

    set ["device-width"](val){
		this.deviceWidth = parseFloat(val);
	}
	set ["device-height"](val){
		this.deviceHeight = parseFloat(val);
	}




}

customElements.define("zoom-pan-box", ZoomPanBox);