class ZoomPanBox extends HTMLElement {
	#zoom = 1.0;
	#lastPointer;
	#lastScroll;
	#modifierKey;
    #minZoom = 0.1;
	#maxZoom = Infinity;
    #contentMarginLeft = 0;
    #contentMarginRight = 0;
    #contentMarginTop = 0;
    #contentMarginBottom = 0;

	static observedAttributes = ["zoom", "min-zoom", "max-zoom"];

	constructor() {
		super();
		this.bind(this);
        this._currentHitPoint = [0, 0]
	}
	bind(element) {
		element.attachEvents = element.attachEvents.bind(element);
		element.render = element.render.bind(element);
		element.cacheDom = element.cacheDom.bind(element);
		element.onWheel = element.onWheel.bind(element);
		// element.onPointerDown = element.onPointerDown.bind(element);
		// element.onPointerMove = element.onPointerMove.bind(element);
		// element.onPointerUp = element.onPointerUp.bind(element);
	}
	render() {
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
            <style>
				#viewport { 
                    height: 100%; 
                    width: 100%; 
                    overflow: auto; 
                    cursor: grab; 
                }
                #viewcontent {
                    display: flex;
                    width: max-content;
                }
            </style>
			<div id="viewport" style="zoom: ${this.#zoom};">
                <div id="viewcontent" style="padding: ${this.#contentMarginTop}px ${this.#contentMarginRight}px ${this.#contentMarginBottom}px ${this.#contentMarginLeft}px;">
                    <slot></slot>
                </div>
			</div>
        `;
	}
	connectedCallback() {
        this.attachAttribute();
		this.render();
		this.cacheDom();
		this.attachEvents();
	}
    attachAttribute() {
        this.#contentMarginTop = parseFloat(this.getAttribute("content-margin-top")) || this.#contentMarginTop;
        this.#contentMarginRight = parseFloat(this.getAttribute("content-margin-right")) || this.#contentMarginRight;
        this.#contentMarginBottom = parseFloat(this.getAttribute("content-margin-bottom")) || this.#contentMarginBottom;
        this.#contentMarginLeft = parseFloat(this.getAttribute("content-margin-left")) || this.#contentMarginLeft;
    }
	cacheDom() {
		this.dom = {
			viewport: this.shadowRoot.querySelector("#viewport")
		};
        window.viewport = this.dom.viewport
	}
    resolveCurrentOffset(clientX, clientY) {
        const rect = this.getBoundingClientRect()
        this._currentHitPoint[0] = clientX - rect.x;
        this._currentHitPoint[1] = clientY - rect.y;
    }
	attachEvents() {
		this.dom.viewport.addEventListener("wheel", this.onWheel);
        this.dom.viewport.addEventListener("mousemove", (e) => {
            this.resolveCurrentOffset(e.clientX, e.clientY);
            console.log(this._currentHitPoint, e.offsetX, e.offsetY, e.clientX, e.clientY)
        });
	}
	onWheel(e){
        if(e.ctrlKey) {
            e.preventDefault();
            this.resolveCurrentOffset(e.clientX, e.clientY);
            this.zoomAtPoint(this._currentHitPoint, -e.deltaY / 1000);
            this.dispatchEvent(new CustomEvent({
                detail: {
                    zoom: this.#zoom,
                }
            }))
		    // this.zoom += e.deltaY / 1000;
        }
	}
	// onPointerDown(e) {
	// 	if(!this.#isModifierDown(e)) return;
	// 	e.preventDefault();
	// 	this.dom.viewport.classList.add("manipulating");
	// 	this.#lastPointer = [
	// 		e.offsetX,
	// 		e.offsetY
	// 	];
	// 	this.#lastScroll = [
	// 		this.dom.viewport.scrollLeft,
	// 		this.dom.viewport.scrollTop
	// 	];;

	// 	this.dom.viewport.setPointerCapture(e.pointerId);
	// 	this.dom.viewport.addEventListener("pointermove", this.onPointerMove);
	// 	this.dom.viewport.addEventListener("pointerup", this.onPointerUp);
	// }
	// onPointerMove(e) {
	// 	const currentPointer = [
	// 		e.offsetX,
	// 		e.offsetY
	// 	];
	// 	const delta = [
	// 		currentPointer[0] + this.#lastScroll[0] - this.#lastPointer[0],
	// 		currentPointer[1] + this.#lastScroll[1] - this.#lastPointer[1]
	// 	];

	// 	this.dom.viewport.scroll(this.#lastScroll[0] / this.#zoom - delta[0] / this.#zoom, this.#lastScroll[1] / this.#zoom - delta[1] / this.#zoom, { behavior: "instant" });
	// }
	// onPointerUp(e) {
	// 	this.dom.viewport.classList.remove("manipulating");
	// 	this.dom.viewport.removeEventListener("pointermove", this.onPointerMove);
	// 	this.dom.viewport.removeEventListener("pointerup", this.onPointerUp);
	// 	this.dom.viewport.releasePointerCapture(e.pointerId);
	// }
	// #isModifierDown(e){
	// 	if(!this.#modifierKey) return true;
	// 	if(this.#modifierKey === "ctrl" && e.ctrlKey) return true;
	// 	if(this.#modifierKey === "alt" && e.altKey) return true;
	// 	if(this.#modifierKey === "shift" && e.shiftKey) return true;
	// 	return false;
	// }
	attributeChangedCallback(name, oldValue, newValue) {
        console.log(name)
        if(name === 'zoom'){
            const rect = this.getBoundingClientRect();
            this.zoomAtPoint([rect.width/2, rect.height/2], parseFloat(newValue))
        } else {
            this[name] = newValue;
        }
	}
    zoomAtPoint(point, val) {
        if(this._zooming) return;
        this._zooming = true;
        requestAnimationFrame(() => {
            const [x, y] = point;
            const oldzoom = this.#zoom;
            const viewport = this.dom.viewport;
            // const marginleft = this.#contentMarginLeft; 
            // const margintop = this.#contentMarginTop;
            const newzoom = Math.min(Math.max(parseFloat(oldzoom + val), this.#minZoom), this.#maxZoom);
            
            const { scrollLeft, scrollTop } = viewport;
            viewport.style.zoom = newzoom;
    
            const px = scrollLeft + x/oldzoom
            const sx = px - x/newzoom;
            const py = scrollTop + y/oldzoom 
            const sy = py - y/newzoom;
    
            viewport.scrollTo(sx, sy);
            this.#zoom = newzoom;
            this._zooming = false;
        })
    }
	
	get zoom(){
		return this.#zoom;
	}
  	set ["min-zoom"](val){
		this.#minZoom = parseFloat(val);
	}
	get ["min-zoom"](){
		return this.#minZoom;
	}
	set ["max-zoom"](val){
		this.#maxZoom = parseFloat(val);
	}
	get ["max-zoom"](){
		return this.#maxZoom;
	}

    set ["content-margin-top"](val){
		this.#contentMarginTop = parseFloat(val);
	}
	get ["content-margin-top"](){
		return this.#contentMarginTop;
	}
    set ["content-margin-left"](val){
		this.#contentMarginLeft = parseFloat(val);
	}
	get ["content-margin-left"](){
		return this.#contentMarginLeft;
	}
    set ["content-margin-right"](val){
		this.#contentMarginRight = parseFloat(val);
	}
	get ["content-margin-right"](){
		return this.#contentMarginRight;
	}
    set ["content-margin-bottom"](val){
		this.#contentMarginBottom = parseFloat(val);
	}
	get ["content-margin-bottom"](){
		return this.#contentMarginBottom;
	}
}

customElements.define("zoom-pan-box", ZoomPanBox);