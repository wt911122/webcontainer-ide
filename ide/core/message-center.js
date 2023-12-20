class MessageCenter {
    proxies = new WeakMap();

    registOrigin(event) {
        const { origin, source } = event;
        if(!this.proxies.has(source.window)) {
            this.proxies.set(source.window, {
                postIframeMessage(data) {
                    source.postMessage(data, origin)
                },
            });
        } else {
            const obj = this.proxies.get(source.window);
            Object.assign(obj, {
                postIframeMessage(data) {
                    source.postMessage(data, origin)
                },
            })
        }
        this._run(source.window);
    }
    registIDE(ide, iframe) {
        if(!this.proxies.has(iframe.contentWindow)) {
            this.proxies.set(iframe.contentWindow, {
                ide,
            });
        } else {
            const obj = this.proxies.get(iframe.contentWindow);
            Object.assign(obj, {
                ide
            })
        }
        this._run(iframe.contentWindow);
    }

    _run(key) {
        const obj = this.proxies.get(key);
        if(obj.ide && obj.postIframeMessage) {
            obj.ide.init(obj.postIframeMessage);
            obj.ready = true;
        }
    }

    listen() {
        window.addEventListener('message', (event) => {
            const data = event.data;
            if(data.type === 'Event' && data.name === 'proxyReady') { 
                this.registOrigin(event);
            } else {
                this.distribute(event);
            }
        })
    }
    

    distribute(event) {
        const source = event.source;
        if(this.proxies.has(source.window)) {
            const obj = this.proxies.get(source.window);
            if(obj.ready) {
                obj.ide.onMessage(event);
            }
        }
    }
} 
const _m = new MessageCenter();
_m.listen();
export default _m;