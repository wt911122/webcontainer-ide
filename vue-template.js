export const files = {
	"files": {
		"/index.html": {
			"code": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Document</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n  </body>\n</html>\n"
		},
		"/package.json": {
			"code": "{\n    \"name\": \"example-vue2\",\n    \"version\": \"1.0.0\",\n    \"description\": \"\",\n    \"private\": true,\n    \"main\": \"index.js\",\n    \"scripts\": {\n      \"dev\": \"rspack serve\",\n      \"build\": \"rspack build\"\n    },\n    \"dependencies\": {\n      \"vue\": \"^2.6.10\",\n      \"cloud-ui.vusion\": \"^0.18.9\"\n    },\n    \"devDependencies\": {\n      \"@babel/core\": \"7.21.0\",\n      \"@rspack/cli\": \"workspace:*\",\n      \"babel-loader\": \"9.1.2\",\n      \"css-loader\": \"^6.7.4\",\n      \"vue-loader\": \"^15.11.0\",\n      \"vue-style-loader\": \"^4.1.3\",\n      \"@rspack/core\": \"workspace:*\"\n    },\n    \"keywords\": [],\n    \"author\": \"\",\n    \"license\": \"ISC\"\n}\n  "
		},
		"/rspack.config.js": {
			"code": "const rspack = require(\"@rspack/core\");\nconst { VueLoaderPlugin } = require(\"vue-loader\");\n\nconst config = {\n  context: __dirname,\n  entry: {\n    main: \"./src/main.js\",\n  },\n  devServer: {\n    historyApiFallback: true,\n  },\n  devtool: false,\n  plugins: [\n    new VueLoaderPlugin(),\n    new rspack.HtmlRspackPlugin({\n      template: \"./index.html\",\n    }),\n  ],\n  module: {\n    rules: [\n       \n      {\n        test: /\\.vue$/,\n        use: [\n          {\n            loader: \"vue-loader\",\n            options: {\n              experimentalInlineMatchResource: true,\n            },\n          },\n        ],\n      },\n      {\n        test: /\\.js$/,\n        use: [\n          {\n            loader: \"babel-loader\",\n          },\n        ],\n      },\n      {\n        test: /\\.svg$/,\n        type: \"asset/resource\",\n      },\n    ],\n  },\n};\nmodule.exports = config;\n"
		},
		"/src/App.vue": {
			"code": "<template>\n    <div>xxxdddx</div>\n</template>\n  "
		},
		"/src/Empty.vue": {
			"code": "<template>\n    <div class=\"empty-slot\" emptyslot=\"true\"></div>\n</template>\n<script>\nimport './empty.css';\n</script>"
		},
		"/src/absolute.css": {
			"code": ".absoluteLayout {\n    position: relative;\n    width: 100%;\n    height: 300px;\n    min-height: 100px;\n}\n\n.absoluteLayout > * {\n    position: absolute !important;\n    text-decoration: inherit;\n}"
		},
		"/src/empty.css": {
			"code": ".empty-slot{\n    background: #f7f8fa;\n    border: 1px dashed #c3c3c3;\n    text-align: center;\n    color: #999;\n    min-height: 30px;\n    min-width: 90px;\n    width: 100%;\n}\n.empty-slot::after {   \n    content: \"+\";\n    font-size: 20px;\n    display: inline-block;\n}"
		},
		"/src/main.js": {
			"code": "import Vue from \"vue\";\nimport * as CloudUI from \"cloud-ui.vusion/dist\";\nimport \"cloud-ui.vusion/dist/index.css\";\n\nimport './proxy.js'\nimport './ide.css'\nimport './absolute.css'\n\nVue.use(CloudUI);\nVue.config.productionTip = false;\n\nimport App from \"./App.vue\";\n\nnew Vue({\n  render: h => h(App)\n}).$mount(\"#root\");\n"
		},
		"/src/proxy.js": {
			"code": "(function () {\n    \nconst status = {\n    isDragging: false,\n    mouseCurrentLocation: [],\n    mouseDownPosition: [],\n    mouseMovingPosition: [],\n    disableMousemoveProxy: false,\n    draggingElems: [],\n    draggingMoveElems: [],\n    isEditing: false,\n    edittingTarget: null,\n}\n\nconst defaultPayload = {\n    eventMeta: undefined,\n    rects: undefined,\n    target: undefined,\n    elemStyle: {\n        inline: false,\n    },\n    elementInfo: undefined,\n    isEmptySlot: undefined,\n    notAllowed: false,\n}\n\nfunction postMessageToIDE(data) {\n    window.parent.postMessage(data, '*')\n}\n\nfunction oneTripToIDE(data) {\n    let uuid = `oneTripToIDE-${oneTripToIDE.uuid++}`;\n    let resolve;\n    const promise = new Promise(r => {\n        resolve = r;\n    })\n    const f = (event) => {\n        const data = event.data;\n        if(data.uuid === uuid) {\n            resolve(data.response);\n            window.removeEventListener('message', f)\n        }\n    }\n    window.addEventListener('message', f)\n    window.parent.postMessage({\n        uuid,\n        ...data\n    }, '*')\n    return promise;\n}\noneTripToIDE.uuid = 0;\n\nconst CAPTURE_EVENT = { capture: true }\n\nfunction pickKeys(obj, keys) {\n    const r = {};\n    keys.forEach(k => {\n        if(k in obj){\n            r[k] = obj[k];\n        }\n    })\n    return r;\n}\n\nfunction pointWithinTarget(p, target) {\n    const domtree = document.elementsFromPoint(p[0], p[1]);\n    const element = domtree.find(elem => elem === target);\n    return !!element;\n}\n\nfunction lockTarget(e) {\n    status.mouseCurrentLocation[0] = e.clientX;\n    status.mouseCurrentLocation[1] = e.clientY;\n    const domtree = document.elementsFromPoint(e.clientX, e.clientY);\n    const emptyslot = domtree?.[0]?.hasAttribute('emptyslot');\n    if(emptyslot) {\n        return domtree[0];\n    }\n    const element = domtree.find(elem => elem.hasAttribute('nodepath'));\n    \n    if(element) {\n        return element\n    }\n    return null;\n}\n\n\nfunction findParentWithNodePath(elem) {\n    let p = elem.parentNode;\n    while(p !== document.body) {\n        if(p.hasAttribute('nodepath')) {\n            return p;\n        }\n        p = p.parentNode;\n    }\n    return null;\n}\n\nfunction iterateUpWithNodePath(elem, callback) {\n    let skipFirstParent = elem.hasAttribute('emptyslot') || elem.getAttribute('ide-iscontainer') === 'false';\n    let p = elem.parentNode;\n    let flag = false;;\n    let lastP = elem;\n    while(p !== document.body) {\n        if(p.hasAttribute('nodepath')) {\n            if(skipFirstParent) {\n                skipFirstParent = false;\n                lastP = p;\n                p = p.parentNode;\n                continue;\n            }\n            if(callback(p, lastP)){\n                flag = true;\n            }\n        }\n        lastP = p;\n        p = p.parentNode;\n    }\n    return flag;\n}\n\nfunction resolveEvent(e) {\n    return pickKeys(e, [\n        'ctrlKey',\n        'shiftKey',\n        'clientX',\n        'clientY',\n        'offsetX',\n        'offsetY',\n        'deltaX',\n        'deltaY',\n    ])\n}\n\n\nwindow.addEventListener('wheel', (e) => {\n    // if(e.ctrlKey) { \n        e.preventDefault();\n    // } \n    postMessageToIDE({\n        type: 'Event',\n        name: 'wheel',\n        payload: {\n            eventMeta: resolveEvent(e),\n        }\n    })\n}, { passive: false });\n\nwindow.addEventListener('scroll', (e) => {\n    if(e.ctrlKey) { \n        e.preventDefault();\n    } \n    postMessageToIDE({\n        type: 'Event',\n        name: 'scroll',\n        payload: {\n            eventMeta: resolveEvent(e),\n        }\n    })\n}, CAPTURE_EVENT);\n\nfunction isElementInline(element) {\n    const computedStyle = getComputedStyle(element);\n    return computedStyle.display === 'inline' || computedStyle.display === 'inline-block';\n}\n\nfunction prepareElementTransferInfomation(element) {\n    const payload = {\n        target: null,\n    };\n    if(element) {\n        if(element.hasAttribute('emptyslot')) {\n            const elem = findParentWithNodePath(element);\n            const target = elem.getAttribute('nodepath');\n            payload.rects = Array.from(element.getClientRects());\n            payload.target = target;\n            payload.isEmptySlot = true;\n        } \n        if(element.hasAttribute('nodepath')) {\n            // const box = element.getBoundingClientRect();\n            payload.target = element.getAttribute('nodepath');\n            // payload.boundingbox = box;\n            payload.elemStyle = {\n                inline: isElementInline(element),\n            }\n            const rects = element.getClientRects();\n            payload.rects = Array.from(rects);\n        }\n    }\n    return payload;\n}\n\nwindow.addEventListener('mousedown', (e) => {\n    // e.preventDefault();\n    // e.stopPropagation();\n    const point = [e.clientX, e.clientY];\n    if(status.isEditing) {\n        if(pointWithinTarget(point, status.edittingTarget)) {\n            // status.disableMousemoveProxy = true;\n            return;\n        } else {\n            document.activeElement.blur();\n            return;\n        }\n    }\n    e.preventDefault();\n    e.stopPropagation();\n    status.mouseDownPosition = point\n    const element = lockTarget(e);\n    if(element) {\n        let p = [e.clientX, e.clientY]\n        let _d = 0;\n        const f = (e) => {\n            const x = Math.abs(e.clientX - p[0]);\n            const y = Math.abs(e.clientY - p[1]);\n            p[0] = e.clientX;\n            p[1] = e.clientY;\n            _d += x + y;\n            if(_d > 20) {\n                postMessageToIDE({\n                    type: 'Event',\n                    name: 'dragstart',\n                    payload: {\n                        eventMeta: resolveEvent(e),\n                        elementInfo: prepareElementTransferInfomation(element),\n                    }\n                });\n                window.removeEventListener('mousemove', f, CAPTURE_EVENT);    \n            }\n        }\n        window.addEventListener('mouseup', () => {\n            window.removeEventListener('mousemove', f, CAPTURE_EVENT);    \n        }, {\n            ...CAPTURE_EVENT,\n            once: true,\n        })\n        window.addEventListener('mousemove', f, CAPTURE_EVENT);\n    }\n}, CAPTURE_EVENT);\n\nfunction debounce(callback, timeout) {\n    let _timer\n    return function(continued, ...argus) {\n        if(_timer) {\n            clearTimeout(_timer);\n        } \n        if(continued) {\n            _timer = setTimeout(() => {\n                callback(...argus);\n            }, timeout);\n        }\n    }\n}\n\nfunction expandContainerGap(elem, lastElem) {\n    const rectGap = 5;\n    if(elem.getAttribute('ide-iscontainer') === 'true'){\n        const b1 = elem.getBoundingClientRect();\n        const b2 = lastElem.getBoundingClientRect();\n        if (\n            Math.abs(b1.left - b2.left) < rectGap\n            || Math.abs(b1.right - b2.right) < rectGap\n            || Math.abs(b1.top - b2.top) < rectGap\n            || Math.abs(b1.bottom - b2.bottom) < rectGap\n        ) {\n            elem.setAttribute('dropgap', true);\n            return true\n        }  \n    }\n\n    return false;\n}\n\nfunction releaseContainerGap() {\n    const elems = document.querySelectorAll(`[dropgap]`);\n    Array.from(elems).forEach(el => {\n        \n        el.removeAttribute('dropgap')\n    })\n    hesitateWhenDragging(false);\n}\n\nfunction checkElemIsDragging(element) {\n    return status.draggingElems.find(el => el.contains(element));\n}\n\nfunction startDraggingElem(nodePaths) {\n    const elems = [];\n    nodePaths.forEach(path => {\n        const elem = document.querySelector(`[nodepath=\"${path}\"]`);\n        if(elem) {\n            elem.setAttribute('ide-dragging', true)\n            elems.push(elem);\n        }\n    })\n    status.draggingElems = elems;\n    status.isDragging = true;\n}\n\nfunction makeDraggingElemMove(nodePaths) {\n    const elems = [];\n    nodePaths.forEach(path => {\n        const elem = document.querySelector(`[nodepath=\"${path}\"]`);\n        if(elem) {\n            elem.setAttribute('ide-dragging-move', true)\n            elems.push({\n                offset: [0,0],\n                elem,\n            });\n        }\n    });\n    status.mouseMovingPosition[0] = status.mouseCurrentLocation[0];\n    status.mouseMovingPosition[1] = status.mouseCurrentLocation[1];\n    status.draggingMoveElems = elems;\n}\n\nfunction releaseDraggingElem() {\n    status.isDragging = false;\n    status.draggingElems.forEach(elem => {\n        elem.removeAttribute('ide-dragging')\n        elem.removeAttribute('ide-dragging-move')\n    })\n    status.draggingMoveElems.forEach(({ elem }) => {\n        // elem.style.removeProperty('transform');\n    })\n    status.draggingElems = [];\n    status.draggingMoveElems = [];\n    releaseContainerGap();\n}\n\nfunction handlerMovingElemWhenDragging() {\n    const deltaX = status.mouseCurrentLocation[0] - status.mouseMovingPosition[0];\n    const deltaY = status.mouseCurrentLocation[1] - status.mouseMovingPosition[1];\n    status.draggingMoveElems.forEach(({ elem, offset}) => {\n        offset[0] += deltaX;\n        offset[1] += deltaY;\n        elem.style.setProperty('transform', `translate(${offset[0]}px, ${offset[1]}px)`);\n    })\n    console.log('handlerMovingElemWhenDragging')\n\n    status.mouseMovingPosition[0] = status.mouseCurrentLocation[0];\n    status.mouseMovingPosition[1] = status.mouseCurrentLocation[1];\n}\n\nconst hesitateWhenDragging = debounce(function(element) {\n    if(element) {\n        const findSome = iterateUpWithNodePath(element, expandContainerGap)\n        if(findSome){\n            postMessageToIDE({\n                type: 'Event',\n                name: 'hesitateWhenDragging',\n                payload: {\n                    elementInfo: prepareElementTransferInfomation(element),\n                }\n            });\n        }\n    }\n}, 1000)\n\nwindow.addEventListener('mousemove', (e) => {\n    if(status.isEditing){\n        return;\n    }\n    e.stopPropagation();\n    const element = lockTarget(e);\n    \n    if(status.isDragging) {\n        if(checkElemIsDragging(element)) {\n            postMessageToIDE({\n                type: 'Event',\n                name: 'dragover',\n                payload: {\n                    eventMeta: resolveEvent(e),\n                    notAllowed: true,\n                }\n            });\n            document.body.setAttribute('ide-cursor', 'not-allowed');\n            return;\n        }\n        hesitateWhenDragging(true, element);\n        handlerMovingElemWhenDragging();\n        postMessageToIDE({\n            type: 'Event',\n            name: 'dragover',\n            payload: {\n                eventMeta: resolveEvent(e),\n                elementInfo: prepareElementTransferInfomation(element),\n            }\n        });\n    } else {\n        postMessageToIDE({\n            type: 'Event',\n            name: 'mousemove',\n            payload: {\n                eventMeta: resolveEvent(e),\n                elementInfo: prepareElementTransferInfomation(element),\n            }\n        });\n    }\n    \n    \n}, CAPTURE_EVENT);\n\nwindow.addEventListener('mouseup', (e) => {\n    if(status.isDragging) {\n        e.preventDefault();\n        e.stopPropagation();\n        status.isDragging = false;\n        const element = lockTarget(e);\n        postMessageToIDE({\n            type: 'Event',\n            name: 'dragend',\n            payload: {\n                eventMeta: resolveEvent(e),\n                elementInfo: prepareElementTransferInfomation(element),\n            }\n        });\n        hesitateWhenDragging(false);\n    }\n}, CAPTURE_EVENT);\n\n\nwindow.addEventListener('click', (e) => {\n    if(status.mouseDownPosition[0] !== e.clientX || status.mouseDownPosition[1] !== e.clientY){\n        return;\n    }\n    const element = lockTarget(e);\n    \n    postMessageToIDE({\n        type: 'Event',\n        name: 'click',\n        payload: {\n            eventMeta: resolveEvent(e),\n            elementInfo: prepareElementTransferInfomation(element),\n        }\n    });\n    // collectSubElements(element);\n}, CAPTURE_EVENT)\n\nwindow.addEventListener('dblclick', (e) => {\n    if(status.mouseDownPosition[0] !== e.clientX || status.mouseDownPosition[1] !== e.clientY){\n        return;\n    }\n    e.preventDefault();\n    e.stopPropagation();\n    const element = lockTarget(e);\n    \n    postMessageToIDE({\n        type: 'Event',\n        name: 'dblclick',\n        payload: {\n            eventMeta: resolveEvent(e),\n            elementInfo: prepareElementTransferInfomation(element),\n        }\n    });\n    // collectSubElements(element);\n}, CAPTURE_EVENT)\n\n// window.addEventListener('dragover', e => {\n//     const element = lockTarget(e);\n//     console.log(element)\n// })\n\n// window.addEventListener('dragover', e => {\n//     e.preventDefault();\n//     const element = lockTarget(e);\n//     if(element) {\n//         collectSubElements(element);\n//     }\n\n// }, { capture: true });\n\n/*\nasync function collectSiblingElements(element) {\n    const response = await oneTripToIDE({\n        type: 'Method',\n        name: 'getSiblingNodePath',\n        payload: element.getAttribute('nodepath'),\n    })\n    console.log(response);\n    return response.map(r => document.querySelector(`[nodepath=\"${r}\"]`))\n}\n\nasync function collectParentElements(element) {\n    const response = await oneTripToIDE({\n        type: 'Method',\n        name: 'getParentNodePath',\n        payload: element.getAttribute('nodepath'),\n    })\n    console.log(response);\n    return response.map(r => document.querySelector(`[nodepath=\"${r}\"]`))\n}*/ \n\nwindow.addEventListener('message', (event) => {\n    const data = event.data;\n    if(data.type === 'Event') {\n        switch(data.name) {\n            case 'startDragging':\n                startDraggingElem(data.payload.nodePaths);\n                break;\n            case 'makeDraggingElemMove':\n                makeDraggingElemMove(data.payload.nodePaths);\n                break;\n            case 'stopDragging':\n                releaseDraggingElem();\n                break;\n        }\n    }\n\n    if(data.type === 'Method') {\n      if(methods[data.name]) {\n        const uuid = data.uuid;\n        try {\n            const response = methods[data.name](data.payload);\n            event.source.postMessage({\n                type: 'Response',\n                result: 'success',\n                uuid,\n                response,\n            }, event.origin)\n        } catch(err) {\n            event.source.postMessage({\n                type: 'Response',\n                result: 'failed',\n                uuid,\n                err,\n            }, event.origin)\n        }\n        \n      }\n  }\n})\nconst elementsResizeObserver = new ResizeObserver(entries => {\n    const elementInfos = [];\n    for (const entry of entries) {\n        // console.log(entry.target);\n        const elem = entry.target;\n        const nodePath = elem.getAttribute('nodepath');\n        if(nodePath) {\n            elementInfos.push(prepareElementTransferInfomation(elem));\n        }\n    }\n    if(elementInfos.length > 0){\n        postMessageToIDE({\n            type: 'Event',\n            name: 'refreshBoundings',\n            payload: {\n                elementInfos\n            }\n        })\n    }\n    \n})\n\nconst observer = new ResizeObserver(() => {\n    console.log(document.body.scrollHeight)\n    postMessageToIDE({\n        type: 'Event',\n        name: 'resizeObserver',\n        payload: {\n            scrollHeight: document.body.scrollHeight\n        }\n    })\n});\n\nconst methods = {\n    getElementInfoByNodePath(payload) {\n        const elem = document.querySelector(`[nodepath=\"${payload.nodePath}\"]`);\n        return prepareElementTransferInfomation(elem)\n    },\n    getElementsInfoByNodePath(payload) {\n        const result = {};\n        payload.nodePaths.forEach((path) => {\n            const elem = document.querySelector(`[nodepath=\"${path}\"]`);\n            result[path] = prepareElementTransferInfomation(elem)\n        });\n        return result;\n    },\n    setCursor(payload) {\n        document.body.setAttribute('ide-cursor', payload.cursor);\n    },\n    setElementsTemporaryStyle(payload) {\n        payload.temporaryStyles.forEach(meta => {\n            const elem = document.querySelector(`[nodepath=\"${meta.nodePath}\"]`);\n            elem.style = meta.style;\n            console.log(meta.style)\n        })\n    },\n    setElementsTemporaryAttribute(payload) {\n        payload.temporaryAttributes.forEach(meta => {\n            const elem = document.querySelector(`[nodepath=\"${meta.nodePath}\"]`);\n            meta.attributes.forEach(attr => {\n                elem.setAttribute(attr[0], attr[1]);\n            })\n        })\n    },\n    startObserveRootNodeSize(payload) { \n        const elem = document.querySelector(payload.selector);\n        if(elem) {\n            console.log(elem)\n            observer.observe(elem);\n        }\n    },\n    editContent(payload) {\n        const elem = document.querySelector(`[nodepath=\"${payload.nodePath}\"]`);\n        if(elem) {\n            elem.addEventListener('blur', (e) => {\n                postMessageToIDE({\n                    type: 'Event',\n                    name: 'contentchange',\n                    payload: {\n                        elementInfo: prepareElementTransferInfomation(elem),\n                        innerText: elem.innerText,\n                    }\n                })\n                elementsResizeObserver.unobserve(elem);\n                status.isEditing = false;\n                status.edittingTarget = null;\n                elem.setAttribute('contentEditable', false);\n            }, { once: true });\n            elementsResizeObserver.observe(elem);\n            elem.setAttribute('contentEditable', true);\n            setTimeout(() => {\n                selectElementContents(elem); \n            });\n            status.isEditing = true;\n            status.edittingTarget = elem;\n        }\n    }\n}\n\nfunction selectElementContents(el) {\n    var range = document.createRange();\n    range.selectNodeContents(el);\n    var sel = window.getSelection();\n    sel.removeAllRanges();\n    sel.addRange(range);\n}\nconsole.log('post proxy ready')\npostMessageToIDE({\n    type: 'Event',\n    name: 'proxyReady',\n    payload: {}\n})\n\n})();"
		},
		"/src/ide.css": {
			"code": "[ide-dragging='true'] {\n    opacity: 0.5!important;\n}\n\n[ide-dragging-move='true'] {\n    pointer-events: none;\n    transition: none!important;\n}\n[nodepath]{ \n    transition: none!important;\n}\n\n[dropgap='true'] {\n    padding: 10px;\n    border: 1px dashed #4a88e8;\n    transition: padding 0.2s;\n    box-sizing: border-box; /** 避免宽度撑开，超出 */\n}\n/* 子页面容器禁用 dropgap，bugid 2693320101095168 */\n[dropgap='true'][vusion-node-tag*=\"-router-view\"] {\n    border: none;\n    padding: 0;\n}\n\nbody[ide-cursor=\"copy\"] {\n    cursor: copy!important;\n}\nbody[ide-cursor=\"auto\"] {\n    cursor: auto;\n}\nbody[ide-cursor=\"grabbing\"] {\n    cursor: grabbing!important;\n}\nbody[ide-cursor=\"not-allowed\"] {\n    cursor: not-allowed!important;\n}\n"
		}
	},
	"environment": "vanilla"
}