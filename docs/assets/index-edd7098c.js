var Jr=Object.defineProperty;var Zr=(e,t,n)=>t in e?Jr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>(Zr(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();class Gr extends EventTarget{constructor(t,n){super(),this.project=t,this.filePath=n}async load(t){this.iframe=t,await this.launch()}async launch(){this.dispatchEvent(new CustomEvent("simulator:ready"))}mutateContentInTemplateBeforeLoad(t){}async updateProject(){}}const Qr="modulepreload",ei=function(e){return"/webcontainer-ide/"+e},Bs={},An=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=ei(r),r in Bs)return;Bs[r]=!0;const i=r.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let d=o.length-1;d>=0;d--){const h=o[d];if(h.href===r&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Qr,i||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),i)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};var ti=/(%?)(%([sdjo]))/g;function ni(e,t){switch(t){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;const n=JSON.stringify(e);return n==="{}"||n==="[]"||/^\[object .+?\]$/.test(n)?e:n}}}function Un(e,...t){if(t.length===0)return e;let n=0,s=e.replace(ti,(o,r,i,l)=>{const a=t[n],c=ni(a,l);return r?o:(n++,c)});return n<t.length&&(s+=` ${t.slice(n).join(" ")}`),s=s.replace(/%{2,2}/g,"%"),s}var si=2;function oi(e){if(!e.stack)return;const t=e.stack.split(`
`);t.splice(1,si),e.stack=t.join(`
`)}var ri=class extends Error{constructor(e,...t){super(e),this.message=e,this.name="Invariant Violation",this.message=Un(e,...t),oi(this)}},Do=(e,t,...n)=>{if(!e)throw new ri(t,...n)};Do.as=(e,t,n,...s)=>{if(!t)throw e.prototype.name!=null?new e(Un(n,s)):e(Un(n,s))};var Hn=function(e,t){return Hn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])},Hn(e,t)};function wu(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Hn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var mt=function(){return mt=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mt.apply(this,arguments)};function ii(e,t,n,s){function o(r){return r instanceof n?r:new n(function(i){i(r)})}return new(n||(n=Promise))(function(r,i){function l(d){try{c(s.next(d))}catch(h){i(h)}}function a(d){try{c(s.throw(d))}catch(h){i(h)}}function c(d){d.done?r(d.value):o(d.value).then(l,a)}c((s=s.apply(e,t||[])).next())})}function li(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,o,r,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(c){return function(d){return a([c,d])}}function a(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,o&&(r=c[0]&2?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(d){c=[6,d],o=0}finally{s=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function xu(e,t,n){if(n||arguments.length===2)for(var s=0,o=t.length,r;s<o;s++)(r||!(s in t))&&(r||(r=Array.prototype.slice.call(t,0,s)),r[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))}var ai=function(e){return"[sandpack-client]: ".concat(e)};function Sn(e,t){return t===void 0&&(t="Value is nullish"),Do(e!=null,ai(t)),e}var ci='"dependencies" was not specified - provide either a package.json or a "dependencies" value',js='"entry" was not specified - provide either a package.json with the "main" field or an "entry" value';function ui(e,t,n){return e===void 0&&(e={}),t===void 0&&(t={}),n===void 0&&(n="/index.js"),JSON.stringify({name:"sandpack-project",main:n,dependencies:e,devDependencies:t},null,2)}function Tu(e,t,n,s){var o,r,i=mi(e),l=i["/package.json"];if(!l)return Sn(t,ci),Sn(s,js),i["/package.json"]={code:ui(t,n,s)},i;if(l){var a=JSON.parse(l.code);Sn(!(!t&&!a.dependencies),js),t&&(a.dependencies=mt(mt({},(o=a.dependencies)!==null&&o!==void 0?o:{}),t??{})),n&&(a.devDependencies=mt(mt({},(r=a.devDependencies)!==null&&r!==void 0?r:{}),n??{})),s&&(a.main=s),i["/package.json"]={code:JSON.stringify(a,null,2)}}return i}function Iu(e){var t;if(e.title==="SyntaxError"){var n=e.title,s=e.path,o=e.message,r=e.line,i=e.column;return{title:n,path:s,message:o,line:r,column:i}}var l=fi((t=e.payload)===null||t===void 0?void 0:t.frames);if(!l)return{message:e.message};var a=hi(l),c=di(l),d=pi(l._originalFileName,e.message,c,a);return{message:d,title:e.title,path:l._originalFileName,line:l._originalLineNumber,column:l._originalColumnNumber}}function fi(e){if(e)return e.find(function(t){return!!t._originalFileName})}function di(e){return e?" (".concat(e._originalLineNumber,":").concat(e._originalColumnNumber,")"):""}function hi(e){var t=e._originalScriptCode[e._originalScriptCode.length-1],n=t.lineNumber.toString().length,s=2,o=3,r=s+n+o+e._originalColumnNumber;return e._originalScriptCode.reduce(function(i,l){var a=l.highlight?">":" ",c=l.lineNumber.toString().length===n?"".concat(l.lineNumber):" ".concat(l.lineNumber),d=l.highlight?`
`+" ".repeat(r)+"^":"";return i+`
`+a+" "+c+" | "+l.content+d},"")}function pi(e,t,n,s){return"".concat(e,": ").concat(t).concat(n,`
`).concat(s)}var mi=function(e){return typeof e=="string"?e.startsWith("/")?e:"/".concat(e):Array.isArray(e)?e.map(function(t){return t.startsWith("/")?t:"/".concat(t)}):typeof e=="object"&&e!==null?Object.entries(e).reduce(function(t,n){var s=n[0],o=n[1],r=s.startsWith("/")?s:"/".concat(s);return t[r]=o,t},{}):null},Us;(function(e){e[e.None=0]="None",e[e.Error=10]="Error",e[e.Warning=20]="Warning",e[e.Info=30]="Info",e[e.Debug=40]="Debug"})(Us||(Us={}));function gi(e,t,n){var s;return n===void 0&&(n={}),ii(this,void 0,void 0,function(){var o,r,i;return li(this,function(l){switch(l.label){case 0:switch(o=(s=t.template)!==null&&s!==void 0?s:"parcel",i=o,i){case"node":return[3,1];case"static":return[3,3]}return[3,5];case 1:return[4,An(()=>import("./index-6c3d140e.js"),["assets/index-6c3d140e.js","assets/base-80a1f760-a7ab5117.js","assets/consoleHook-cdbe54ab-a8f5224f.js"]).then(function(a){return a.SandpackNode})];case 2:return r=l.sent(),[3,7];case 3:return[4,An(()=>import("./index-ec7d9378-9956953a.js"),["assets/index-ec7d9378-9956953a.js","assets/consoleHook-cdbe54ab-a8f5224f.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackStatic})];case 4:return r=l.sent(),[3,7];case 5:return[4,An(()=>import("./index-90901456.js"),["assets/index-90901456.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackRuntime})];case 6:r=l.sent(),l.label=7;case 7:return[2,new r(e,t,n)]}})})}class Ro extends Gr{constructor(){super(...arguments);R(this,"options",{showOpenInCodeSandbox:!1,showErrorScreen:!1,showLoadingScreen:!0})}async launch(){const n=await gi(this.iframe,this.project,this.options);this.client=n,console.log(n)}mutateContentInTemplateBeforeLoad(n){this.project.files[this.filePath]={code:n}}async updateProject(n){this.project.files[this.filePath]={code:n},this.client.updateSandbox(this.project)}}const yi={files:{"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`},"/package.json":{code:`{
    "name": "rspack-demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "dev": "rspack serve -c ./rspack.config.js",
      "build": "rspack build -c ./rspack.config.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "react": "18.2.0",
      "react-dom": "18.2.0",
      "react-refresh": "0.14.0",
      "antd": "latest"
    },
    "devDependencies": {
      "@rspack/cli": "^0.0.22"
    }
  }
  `},"/rspack.config.js":{code:`module.exports = {
    mode: "development",
    entry: {
      main: {
        import: ["./src/index.js"],
      },
    },
    output: {
      publicPath: "/",
    },
    devServer: {
      hot: true,
      allowedHosts: [".csb.app"],
    },
    module: {
      // rules: [{ test: /.less$/, use: [{ loader: "less-loader" }], type: "css" }],
      parser: {
        asset: {
          dataUrlCondition: {
            maxSize: 1,
          },
        },
      },
    },
    builtins: {
      html: [
        {
          template: "./index.html",
        },
      ],
      progress: {},
      react: {
        development: true,
        refresh: true,
      },
    },
  };
  `},"/src/App.css":{code:`.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  `},"/src/App.jsx":{code:`import './App.css';
import React from 'react';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p
          className="hello"
        >
          A Rspack Demo with React 
        </p>
        <Button type="primary">Primary Button</Button>
        <a
          className="App-link"
          href="https://www.rspack.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More detail about Rspack
        </a>
      </header>
    </div>
  );
}

export default App;
`},"/src/Empty.jsx":{code:`import './empty.css';

export default function () {
    return (
        <div className="empty-slot" emptyslot="true"></div>
    )
}`},"/src/Main.jsx":{code:`import App from "./App.jsx";
import React from 'react';

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default Main;`},"/src/absolute.css":{code:`.absoluteLayout {
    position: relative;
    width: 100%;
    height: 300px;
    min-height: 100px;
}

.absoluteLayout > * {
    position: absolute !important;
    text-decoration: inherit;
}`},"/src/empty.css":{code:`.empty-slot{
    background: #f7f8fa;
    border: 1px dashed #c3c3c3;
    text-align: center;
    color: #999;
    min-height: 30px;
    min-width: 90px;
    width: 100%;
}
.empty-slot::after {   
    content: "+";
    font-size: 20px;
    display: inline-block;
}`},"/src/index.css":{code:`body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  `},"/src/index.js":{code:`import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main.jsx";
import './proxy.js'
import './ide.css'
import './absolute.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Main));
`},"/src/proxy.js":{code:`(function () {
    
const status = {
    isDragging: false,
    mouseCurrentLocation: [],
    mouseDownPosition: [],
    mouseMovingPosition: [],
    disableMousemoveProxy: false,
    draggingElems: [],
    draggingMoveElems: [],
    isEditing: false,
    edittingTarget: null,
}

const defaultPayload = {
    eventMeta: undefined,
    rects: undefined,
    target: undefined,
    elemStyle: {
        inline: false,
    },
    elementInfo: undefined,
    isEmptySlot: undefined,
    notAllowed: false,
}

function postMessageToIDE(data) {
    window.parent.postMessage(data, '*')
}

function oneTripToIDE(data) {
    let uuid = \`oneTripToIDE-\${oneTripToIDE.uuid++}\`;
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
    window.parent.postMessage({
        uuid,
        ...data
    }, '*')
    return promise;
}
oneTripToIDE.uuid = 0;

const CAPTURE_EVENT = { capture: true }

function pickKeys(obj, keys) {
    const r = {};
    keys.forEach(k => {
        if(k in obj){
            r[k] = obj[k];
        }
    })
    return r;
}

function pointWithinTarget(p, target) {
    const domtree = document.elementsFromPoint(p[0], p[1]);
    const element = domtree.find(elem => elem === target);
    return !!element;
}

function lockTarget(e) {
    status.mouseCurrentLocation[0] = e.clientX;
    status.mouseCurrentLocation[1] = e.clientY;
    const domtree = document.elementsFromPoint(e.clientX, e.clientY);
    const emptyslot = domtree?.[0]?.hasAttribute('emptyslot');
    if(emptyslot) {
        return domtree[0];
    }
    const element = domtree.find(elem => elem.hasAttribute('nodepath'));
    
    if(element) {
        return element
    }
    return null;
}


function findParentWithNodePath(elem) {
    let p = elem.parentNode;
    while(p !== document.body) {
        if(p.hasAttribute('nodepath')) {
            return p;
        }
        p = p.parentNode;
    }
    return null;
}

function iterateUpWithNodePath(elem, callback) {
    let skipFirstParent = elem.hasAttribute('emptyslot') || elem.getAttribute('ide-iscontainer') === 'false';
    let p = elem.parentNode;
    let flag = false;;
    let lastP = elem;
    while(p !== document.body) {
        if(p.hasAttribute('nodepath')) {
            if(skipFirstParent) {
                skipFirstParent = false;
                lastP = p;
                p = p.parentNode;
                continue;
            }
            if(callback(p, lastP)){
                flag = true;
            }
        }
        lastP = p;
        p = p.parentNode;
    }
    return flag;
}

function resolveEvent(e) {
    return pickKeys(e, [
        'ctrlKey',
        'shiftKey',
        'clientX',
        'clientY',
        'offsetX',
        'offsetY',
        'deltaX',
        'deltaY',
    ])
}


window.addEventListener('wheel', (e) => {
    // if(e.ctrlKey) { 
        e.preventDefault();
    // } 
    postMessageToIDE({
        type: 'Event',
        name: 'wheel',
        payload: {
            eventMeta: resolveEvent(e),
        }
    })
}, { passive: false });

window.addEventListener('scroll', (e) => {
    if(e.ctrlKey) { 
        e.preventDefault();
    } 
    postMessageToIDE({
        type: 'Event',
        name: 'scroll',
        payload: {
            eventMeta: resolveEvent(e),
        }
    })
}, CAPTURE_EVENT);

function isElementInline(element) {
    const computedStyle = getComputedStyle(element);
    return computedStyle.display === 'inline' || computedStyle.display === 'inline-block';
}

function prepareElementTransferInfomation(element) {
    const payload = {
        target: null,
    };
    if(element) {
        if(element.hasAttribute('emptyslot')) {
            const elem = findParentWithNodePath(element);
            const target = elem.getAttribute('nodepath');
            payload.rects = Array.from(element.getClientRects());
            payload.target = target;
            payload.isEmptySlot = true;
        } 
        if(element.hasAttribute('nodepath')) {
            // const box = element.getBoundingClientRect();
            payload.target = element.getAttribute('nodepath');
            // payload.boundingbox = box;
            payload.elemStyle = {
                inline: isElementInline(element),
            }
            const rects = element.getClientRects();
            payload.rects = Array.from(rects);
        }
    }
    return payload;
}

window.addEventListener('mousedown', (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    const point = [e.clientX, e.clientY];
    if(status.isEditing) {
        if(pointWithinTarget(point, status.edittingTarget)) {
            // status.disableMousemoveProxy = true;
            return;
        } else {
            document.activeElement.blur();
            return;
        }
    }
    e.preventDefault();
    e.stopPropagation();
    status.mouseDownPosition = point
    const element = lockTarget(e);
    if(element) {
        let p = [e.clientX, e.clientY]
        let _d = 0;
        const f = (e) => {
            const x = Math.abs(e.clientX - p[0]);
            const y = Math.abs(e.clientY - p[1]);
            p[0] = e.clientX;
            p[1] = e.clientY;
            _d += x + y;
            if(_d > 20) {
                postMessageToIDE({
                    type: 'Event',
                    name: 'dragstart',
                    payload: {
                        eventMeta: resolveEvent(e),
                        elementInfo: prepareElementTransferInfomation(element),
                    }
                });
                window.removeEventListener('mousemove', f, CAPTURE_EVENT);    
            }
        }
        window.addEventListener('mouseup', () => {
            window.removeEventListener('mousemove', f, CAPTURE_EVENT);    
        }, {
            ...CAPTURE_EVENT,
            once: true,
        })
        window.addEventListener('mousemove', f, CAPTURE_EVENT);
    }
}, CAPTURE_EVENT);

function debounce(callback, timeout) {
    let _timer
    return function(continued, ...argus) {
        if(_timer) {
            clearTimeout(_timer);
        } 
        if(continued) {
            _timer = setTimeout(() => {
                callback(...argus);
            }, timeout);
        }
    }
}

function expandContainerGap(elem, lastElem) {
    const rectGap = 5;
    if(elem.getAttribute('ide-iscontainer') === 'true'){
        const b1 = elem.getBoundingClientRect();
        const b2 = lastElem.getBoundingClientRect();
        if (
            Math.abs(b1.left - b2.left) < rectGap
            || Math.abs(b1.right - b2.right) < rectGap
            || Math.abs(b1.top - b2.top) < rectGap
            || Math.abs(b1.bottom - b2.bottom) < rectGap
        ) {
            elem.setAttribute('dropgap', true);
            return true
        }  
    }

    return false;
}

function releaseContainerGap() {
    const elems = document.querySelectorAll(\`[dropgap]\`);
    Array.from(elems).forEach(el => {
        
        el.removeAttribute('dropgap')
    })
    hesitateWhenDragging(false);
}

function checkElemIsDragging(element) {
    return status.draggingElems.find(el => el.contains(element));
}

function startDraggingElem(nodePaths) {
    const elems = [];
    nodePaths.forEach(path => {
        const elem = document.querySelector(\`[nodepath="\${path}"]\`);
        if(elem) {
            elem.setAttribute('ide-dragging', true)
            elems.push(elem);
        }
    })
    status.draggingElems = elems;
    status.isDragging = true;
}

function makeDraggingElemMove(nodePaths) {
    const elems = [];
    nodePaths.forEach(path => {
        const elem = document.querySelector(\`[nodepath="\${path}"]\`);
        if(elem) {
            elem.setAttribute('ide-dragging-move', true)
            elems.push({
                offset: [0,0],
                elem,
            });
        }
    });
    status.mouseMovingPosition[0] = status.mouseCurrentLocation[0];
    status.mouseMovingPosition[1] = status.mouseCurrentLocation[1];
    status.draggingMoveElems = elems;
}

function releaseDraggingElem() {
    status.isDragging = false;
    status.draggingElems.forEach(elem => {
        elem.removeAttribute('ide-dragging')
        elem.removeAttribute('ide-dragging-move')
    })
    status.draggingMoveElems.forEach(({ elem }) => {
        // elem.style.removeProperty('transform');
    })
    status.draggingElems = [];
    status.draggingMoveElems = [];
    releaseContainerGap();
}

function handlerMovingElemWhenDragging() {
    const deltaX = status.mouseCurrentLocation[0] - status.mouseMovingPosition[0];
    const deltaY = status.mouseCurrentLocation[1] - status.mouseMovingPosition[1];
    status.draggingMoveElems.forEach(({ elem, offset}) => {
        offset[0] += deltaX;
        offset[1] += deltaY;
        elem.style.setProperty('transform', \`translate(\${offset[0]}px, \${offset[1]}px)\`);
    })
    console.log('handlerMovingElemWhenDragging')

    status.mouseMovingPosition[0] = status.mouseCurrentLocation[0];
    status.mouseMovingPosition[1] = status.mouseCurrentLocation[1];
}

const hesitateWhenDragging = debounce(function(element) {
    if(element) {
        const findSome = iterateUpWithNodePath(element, expandContainerGap)
        if(findSome){
            postMessageToIDE({
                type: 'Event',
                name: 'hesitateWhenDragging',
                payload: {
                    elementInfo: prepareElementTransferInfomation(element),
                }
            });
        }
    }
}, 1000)

window.addEventListener('mousemove', (e) => {
    if(status.isEditing){
        return;
    }
    e.stopPropagation();
    const element = lockTarget(e);
    
    if(status.isDragging) {
        if(checkElemIsDragging(element)) {
            postMessageToIDE({
                type: 'Event',
                name: 'dragover',
                payload: {
                    eventMeta: resolveEvent(e),
                    notAllowed: true,
                }
            });
            document.body.setAttribute('ide-cursor', 'not-allowed');
            return;
        }
        hesitateWhenDragging(true, element);
        handlerMovingElemWhenDragging();
        postMessageToIDE({
            type: 'Event',
            name: 'dragover',
            payload: {
                eventMeta: resolveEvent(e),
                elementInfo: prepareElementTransferInfomation(element),
            }
        });
    } else {
        postMessageToIDE({
            type: 'Event',
            name: 'mousemove',
            payload: {
                eventMeta: resolveEvent(e),
                elementInfo: prepareElementTransferInfomation(element),
            }
        });
    }
    
    
}, CAPTURE_EVENT);

window.addEventListener('mouseup', (e) => {
    if(status.isDragging) {
        e.preventDefault();
        e.stopPropagation();
        status.isDragging = false;
        const element = lockTarget(e);
        postMessageToIDE({
            type: 'Event',
            name: 'dragend',
            payload: {
                eventMeta: resolveEvent(e),
                elementInfo: prepareElementTransferInfomation(element),
            }
        });
        hesitateWhenDragging(false);
    }
}, CAPTURE_EVENT);


window.addEventListener('click', (e) => {
    if(status.mouseDownPosition[0] !== e.clientX || status.mouseDownPosition[1] !== e.clientY){
        return;
    }
    const element = lockTarget(e);
    
    postMessageToIDE({
        type: 'Event',
        name: 'click',
        payload: {
            eventMeta: resolveEvent(e),
            elementInfo: prepareElementTransferInfomation(element),
        }
    });
    // collectSubElements(element);
}, CAPTURE_EVENT)

window.addEventListener('dblclick', (e) => {
    if(status.mouseDownPosition[0] !== e.clientX || status.mouseDownPosition[1] !== e.clientY){
        return;
    }
    e.preventDefault();
    e.stopPropagation();
    const element = lockTarget(e);
    
    postMessageToIDE({
        type: 'Event',
        name: 'dblclick',
        payload: {
            eventMeta: resolveEvent(e),
            elementInfo: prepareElementTransferInfomation(element),
        }
    });
    // collectSubElements(element);
}, CAPTURE_EVENT)

// window.addEventListener('dragover', e => {
//     const element = lockTarget(e);
//     console.log(element)
// })

// window.addEventListener('dragover', e => {
//     e.preventDefault();
//     const element = lockTarget(e);
//     if(element) {
//         collectSubElements(element);
//     }

// }, { capture: true });

/*
async function collectSiblingElements(element) {
    const response = await oneTripToIDE({
        type: 'Method',
        name: 'getSiblingNodePath',
        payload: element.getAttribute('nodepath'),
    })
    console.log(response);
    return response.map(r => document.querySelector(\`[nodepath="\${r}"]\`))
}

async function collectParentElements(element) {
    const response = await oneTripToIDE({
        type: 'Method',
        name: 'getParentNodePath',
        payload: element.getAttribute('nodepath'),
    })
    console.log(response);
    return response.map(r => document.querySelector(\`[nodepath="\${r}"]\`))
}*/ 

window.addEventListener('message', (event) => {
    const data = event.data;
    if(data.type === 'Event') {
        switch(data.name) {
            case 'startDragging':
                startDraggingElem(data.payload.nodePaths);
                break;
            case 'makeDraggingElemMove':
                makeDraggingElemMove(data.payload.nodePaths);
                break;
            case 'stopDragging':
                releaseDraggingElem();
                break;
        }
    }

    if(data.type === 'Method') {
      if(methods[data.name]) {
        const uuid = data.uuid;
        try {
            const response = methods[data.name](data.payload);
            event.source.postMessage({
                type: 'Response',
                result: 'success',
                uuid,
                response,
            }, event.origin)
        } catch(err) {
            event.source.postMessage({
                type: 'Response',
                result: 'failed',
                uuid,
                err,
            }, event.origin)
        }
        
      }
  }
})
const elementsResizeObserver = new ResizeObserver(entries => {
    const elementInfos = [];
    for (const entry of entries) {
        // console.log(entry.target);
        const elem = entry.target;
        const nodePath = elem.getAttribute('nodepath');
        if(nodePath) {
            elementInfos.push(prepareElementTransferInfomation(elem));
        }
    }
    if(elementInfos.length > 0){
        postMessageToIDE({
            type: 'Event',
            name: 'refreshBoundings',
            payload: {
                elementInfos
            }
        })
    }
    
})

const observer = new ResizeObserver(() => {
    console.log(document.body.scrollHeight)
    postMessageToIDE({
        type: 'Event',
        name: 'resizeObserver',
        payload: {
            scrollHeight: document.body.scrollHeight
        }
    })
});

const methods = {
    getElementInfoByNodePath(payload) {
        const elem = document.querySelector(\`[nodepath="\${payload.nodePath}"]\`);
        return prepareElementTransferInfomation(elem)
    },
    getElementsInfoByNodePath(payload) {
        const result = {};
        payload.nodePaths.forEach((path) => {
            const elem = document.querySelector(\`[nodepath="\${path}"]\`);
            result[path] = prepareElementTransferInfomation(elem)
        });
        return result;
    },
    setCursor(payload) {
        document.body.setAttribute('ide-cursor', payload.cursor);
    },
    setElementsTemporaryStyle(payload) {
        payload.temporaryStyles.forEach(meta => {
            const elem = document.querySelector(\`[nodepath="\${meta.nodePath}"]\`);
            elem.style = meta.style;
            console.log(meta.style)
        })
    },
    setElementsTemporaryAttribute(payload) {
        payload.temporaryAttributes.forEach(meta => {
            const elem = document.querySelector(\`[nodepath="\${meta.nodePath}"]\`);
            meta.attributes.forEach(attr => {
                elem.setAttribute(attr[0], attr[1]);
            })
        })
    },
    startObserveRootNodeSize(payload) { 
        const elem = document.querySelector(payload.selector);
        if(elem) {
            console.log(elem)
            observer.observe(elem);
        }
    },
    editContent(payload) {
        const elem = document.querySelector(\`[nodepath="\${payload.nodePath}"]\`);
        if(elem) {
            elem.addEventListener('blur', (e) => {
                postMessageToIDE({
                    type: 'Event',
                    name: 'contentchange',
                    payload: {
                        elementInfo: prepareElementTransferInfomation(elem),
                        innerText: elem.innerText,
                    }
                })
                elementsResizeObserver.unobserve(elem);
                status.isEditing = false;
                status.edittingTarget = null;
                elem.setAttribute('contentEditable', false);
            }, { once: true });
            elementsResizeObserver.observe(elem);
            elem.setAttribute('contentEditable', true);
            setTimeout(() => {
                selectElementContents(elem); 
            });
            status.isEditing = true;
            status.edittingTarget = elem;
        }
    }
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
console.log('post proxy ready')
postMessageToIDE({
    type: 'Event',
    name: 'proxyReady',
    payload: {}
})

})();`},"/src/ide.css":{code:`[ide-dragging='true'] {
    opacity: 0.5!important;
}

[ide-dragging-move='true'] {
    pointer-events: none;
    transition: none!important;
}
[nodepath]{ 
    transition: none!important;
}

[dropgap='true'] {
    padding: 10px;
    border: 1px dashed #4a88e8;
    transition: padding 0.2s;
    box-sizing: border-box; /** 避免宽度撑开，超出 */
}
/* 子页面容器禁用 dropgap，bugid 2693320101095168 */
[dropgap='true'][vusion-node-tag*="-router-view"] {
    border: none;
    padding: 0;
}

body[ide-cursor="copy"] {
    cursor: copy!important;
}
body[ide-cursor="auto"] {
    cursor: auto;
}
body[ide-cursor="grabbing"] {
    cursor: grabbing!important;
}
body[ide-cursor="not-allowed"] {
    cursor: not-allowed!important;
}
`}},environment:"vanilla"},vi="View",Ei=[{concept:"ViewElement",tag:"Flex",bindAttrs:[{concept:"BindAttribute",name:"gap",value:"middle"}],children:[{concept:"ViewElement",tag:"Button",innerText:"button1"},{concept:"ViewElement",tag:"Button",innerText:"button2",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}]},{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"link"}]}]},{concept:"ViewElement",tag:"AbsoluteLayout",children:[{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}],staticStyle:"left: 20px; top: 20px;"}]}],bi={concept:vi,elements:Ei};let Hs=1,rs=class{constructor(t){R(this,"componentKey",0);R(this,"parentNode",null);R(this,"tag","");R(this,"isContainer",!1);R(this,"supportEditContent",!1);this.source=t,this.tag=t.tag,this.componentKey=Hs++}static accept(){return!0}get staticStyle(){return this.source.staticStyle}set staticStyle(t){this.source.staticStyle=t}get innerText(){return this.source.innerText}set innerText(t){this.source.innerText=t}get nodePath(){if(!this.parentNode)return"rootview";const t=this.parentNode,s=t.elements.findIndex(o=>o===this);return s===-1?null:`${t.nodePath}.${s}`}updateComponentKey(){this.componentKey=Hs++}getSiblings(){}renderIDE(t){throw"renderIDE need implementation!"}};const Ie={ROW:"row",COLUMN:"column",FREE:"free",AUTO:"auto"};class $o extends rs{constructor(n){super(n);R(this,"isRoot",!1);R(this,"isContainer",!0);R(this,"direction",Ie.AUTO);R(this,"elements",[]);this.createSubElements(n)}createSubElements(n){throw"createSubElements need implementation!"}insertNodeBefore(n,s){const o=s.source;o.delete();const r=this.source.getViewElementIdx(n.source);r!==-1&&this.source.insertViewElementAt(o,r)}insertNodeAfter(n,s){const o=s.source;o.delete();const r=this.source.getViewElementIdx(n.source);r!==-1&&this.source.insertViewElementAt(o,r+1)}addChild(n){const s=n.source;s.delete(),this.source.addViewElement(s)}renderIDE(n){throw"renderIDE need implementation!"}}function Xe(e,t){const n=t.split(".");n.shift();let s=e.elements[n.shift()];for(;n.length;){const o=n.shift();s=s.elements[o]}return s}function Vs(e){return e*e}function Mn(e,t){return Vs(e[0]-t[0])+Vs(e[1]-t[1])}function Ws(e,t){const n=t.slice(0,2),s=t.slice(2,4),o=Mn(n,s);if(o===0)return Mn(e,n);let r=((e[0]-n[0])*(s[0]-n[0])+(e[1]-n[1])*(s[1]-n[1]))/o;return r=Math.max(0,Math.min(1,r)),Mn(e,[n[0]+r*(s[0]-n[0]),n[1]+r*(s[1]-n[1])])}function Oo(e){return[[e.left,e.top,e.right,e.top],[e.left,e.bottom,e.right,e.bottom]]}function ko(e){return[[e.left,e.top,e.left,e.bottom],[e.right,e.top,e.right,e.bottom]]}function Lo(e,t){return e[0]+=t,e[2]+=t,e}function Fo(e,t){return e[1]+=t,e[3]+=t,e}function _i(e,t){return e[0]===e[2]?Lo(e,t):Fo(e,t)}function wi(e,t){var n;return(n=t.elemStyle)!=null&&n.inline?ko(e):Oo(e)}function xi(e){return[e.x,e.y,e.width,e.height]}function on(e=""){return e.split(";").map(n=>n.split(":")).reduce((n,s)=>{if(s.length===2){let[o,r]=s;o=o.trim().replace(/-./g,i=>i.toUpperCase()[1]),n[o]=r.trim()}return n},{})}function Vn(e={}){let t="";for(const[n,s]of Object.entries(e))t+=`${n}:${s};`;return t}function Ti(e){const t=on(e);try{return JSON.stringify(t)}catch{return""}}class Bo extends rs{renderIDE(t){t.add(this.tag);let n=`
    <${this.tag} 
        key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${ls(this.source.bindAttrs)}
        ${as(this.source.staticStyle)}>`;return this.innerText&&(n+=this.innerText),n+=`</${this.tag}>
`,n}}class is extends $o{createSubElements(t){let n;t.concept==="View"&&(n=t.elements),t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(Di(this)))}renderIDE(t){t.add(this.tag);let n=`
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${ls(this.source.bindAttrs)}
        ${as(this.source.staticStyle)}>`;return this.elements.length>0?this.elements.forEach(s=>{n+=s.renderIDE(t)}):n+="<EmptySlot />",n+=`</${this.tag}>
`,n}}const Ii=["Button"];let Ci=class extends Bo{constructor(){super(...arguments);R(this,"supportEditContent",!0)}static accept(n){return Ii.includes(n.tag)}},Pi=class extends is{constructor(){super(...arguments);R(this,"isRoot",!0)}renderIDE(){const n=new Set;let s="";this.elements.forEach(i=>{s+=i.renderIDE(n)});let o="";return n.size>0&&(o="import { ",o+=Array.from(n).join(","),o+='} from "antd";'),`
import React from 'react';
import EmptySlot from './Empty.jsx'
${o}
function View() {
    return (
        <>
            ${s}
        </>
    )
}
export default View;
`}};class Ai extends is{static accept(t){return t.tag==="Flex"}constructor(t){super(t),this.direction=Ie.ROW,t.bindAttrs.find(n=>n.name==="vertical"&&n.value==="true")&&(this.direction=Ie.COLUMN)}}let Si=class extends is{constructor(){super(...arguments);R(this,"isAbsolute",!0)}static accept(n){return n.tag==="AbsoluteLayout"}renderIDE(n){let s=`
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        className="absoluteLayout" 
        ${ls(this.source.bindAttrs)}
        ${as(this.source.staticStyle)}>`;return this.elements.length>0&&this.elements.forEach(o=>{s+=o.renderIDE(n)}),s+=`</div>
`,s}};function ls(e){return e&&e.length>0?e.map(t=>`${t.name}="${t.value}"`).join(" "):""}function as(e){if(e&&e.trim()){const t=Ti(e.trim());if(t)return` style={${t}} `}return""}const Mi=[Si,Ai,Ci,Bo];function jo(e){const t=Mi.find(n=>n.accept(e));return new t(e)}function Ni(e){return new Pi(e)}function Di(e){return t=>{const n=jo(t);return n.parentNode=e,n}}const Rt={makeUIElement:jo,makeRootUIElement:Ni};class cs{constructor(t){R(this,"concept","");this.concept=t.concept,this.tag=t.tag}}class Ri extends cs{constructor(n){super(n);R(this,"elements",[]);n.elements&&(this.elements=n.elements.map(s=>{const o=new ct(s);return o.parentNode=this,o.parentKey="elements",o}))}addViewElement(n){n.delete(),this.elements.push(n),n.parentNode=this}insertViewElementAt(n,s){n.delete(),this.elements.splice(s,0,n),n.parentNode=this}removeViewElement(n){const s=this.elements.findIndex(o=>o===n);s!==-1&&(this.elements.splice(s,1),n.parentNode=void 0)}getViewElementIdx(n){return this.elements.findIndex(s=>s===n)}}class ct extends cs{constructor(n){super(n);R(this,"tag");R(this,"staticStyle");R(this,"staticClass");R(this,"innerText");R(this,"bindAttrs",[]);R(this,"children",[]);this.tag=n.tag,this.staticStyle=n.staticStyle,this.staticClass=n.staticClass,this.innerText=n.innerText,n.children&&(this.children=n.children.map(s=>{const o=new ct(s);return o.parentNode=this,o.parentKey="children",o})),n.bindAttrs&&(this.bindAttrs=n.bindAttrs.map(s=>{const o=new $i(s);return o.parentNode=this,o.parentKey="bindAttrs",o}))}addViewElement(n){n.delete(),this.children.push(n),n.parentNode=this}insertViewElementAt(n,s){n.delete(),this.children.splice(s,0,n),n.parentNode=this}removeViewElement(n){const s=this.children.findIndex(o=>o===n);s!==-1&&(this.children.splice(s,1),n.parentNode=void 0)}delete(){this.parentNode&&this.parentNode.removeViewElement(this)}getViewElementIdx(n){return this.children.findIndex(s=>s===n)}}class $i extends cs{constructor(n){super(n);R(this,"name","");R(this,"value","");this.name=n.name,this.value=n.value}}const Oi={files:{"/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`},"/package.json":{code:`{
    "name": "example-vue2",
    "version": "1.0.0",
    "description": "",
    "private": true,
    "main": "index.js",
    "scripts": {
      "dev": "rspack serve",
      "build": "rspack build"
    },
    "dependencies": {
      "vue": "^2.6.10",
      "cloud-ui.vusion": "^0.18.9"
    },
    "devDependencies": {
      "@babel/core": "7.21.0",
      "@rspack/cli": "workspace:*",
      "babel-loader": "9.1.2",
      "css-loader": "^6.7.4",
      "vue-loader": "^15.11.0",
      "vue-style-loader": "^4.1.3",
      "@rspack/core": "workspace:*"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
  `},"/rspack.config.js":{code:`const rspack = require("@rspack/core");
const { VueLoaderPlugin } = require("vue-loader");

const config = {
  context: __dirname,
  entry: {
    main: "./src/main.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: false,
  plugins: [
    new VueLoaderPlugin(),
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
       
      {
        test: /\\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              experimentalInlineMatchResource: true,
            },
          },
        ],
      },
      {
        test: /\\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\\.svg$/,
        type: "asset/resource",
      },
    ],
  },
};
module.exports = config;
`},"/src/App.vue":{code:`<template>
    <div>xxxdddx</div>
</template>
  `},"/src/Empty.vue":{code:`<template>
    <div class="empty-slot" emptyslot="true"></div>
</template>
<script>
import './empty.css';
<\/script>`},"/src/absolute.css":{code:`.absoluteLayout {
    position: relative;
    width: 100%;
    height: 300px;
    min-height: 100px;
}

.absoluteLayout > * {
    position: absolute !important;
    text-decoration: inherit;
}`},"/src/empty.css":{code:`.empty-slot{
    background: #f7f8fa;
    border: 1px dashed #c3c3c3;
    text-align: center;
    color: #999;
    min-height: 30px;
    min-width: 90px;
    width: 100%;
}
.empty-slot::after {   
    content: "+";
    font-size: 20px;
    display: inline-block;
}`},"/src/main.js":{code:`import Vue from "vue";
import * as CloudUI from "cloud-ui.vusion/dist";
import "cloud-ui.vusion/dist/index.css";

import './proxy.js'
import './ide.css'
import './absolute.css'

Vue.use(CloudUI);
Vue.config.productionTip = false;

import App from "./App.vue";

new Vue({
  render: h => h(App)
}).$mount("#root");
`},"/src/proxy.js":{code:`(function () {
    
const status = {
    isDragging: false,
    mouseCurrentLocation: [],
    mouseDownPosition: [],
    mouseMovingPosition: [],
    disableMousemoveProxy: false,
    draggingElems: [],
    draggingMoveElems: [],
    isEditing: false,
    edittingTarget: null,
}

const defaultPayload = {
    eventMeta: undefined,
    rects: undefined,
    target: undefined,
    elemStyle: {
        inline: false,
    },
    elementInfo: undefined,
    isEmptySlot: undefined,
    notAllowed: false,
}

function postMessageToIDE(data) {
    window.parent.postMessage(data, '*')
}

function oneTripToIDE(data) {
    let uuid = \`oneTripToIDE-\${oneTripToIDE.uuid++}\`;
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
    window.parent.postMessage({
        uuid,
        ...data
    }, '*')
    return promise;
}
oneTripToIDE.uuid = 0;

const CAPTURE_EVENT = { capture: true }

function pickKeys(obj, keys) {
    const r = {};
    keys.forEach(k => {
        if(k in obj){
            r[k] = obj[k];
        }
    })
    return r;
}

function pointWithinTarget(p, target) {
    const domtree = document.elementsFromPoint(p[0], p[1]);
    const element = domtree.find(elem => elem === target);
    return !!element;
}

function lockTarget(e) {
    status.mouseCurrentLocation[0] = e.clientX;
    status.mouseCurrentLocation[1] = e.clientY;
    const domtree = document.elementsFromPoint(e.clientX, e.clientY);
    const emptyslot = domtree?.[0]?.hasAttribute('emptyslot');
    if(emptyslot) {
        return domtree[0];
    }
    const element = domtree.find(elem => elem.hasAttribute('nodepath'));
    
    if(element) {
        return element
    }
    return null;
}


function findParentWithNodePath(elem) {
    let p = elem.parentNode;
    while(p !== document.body) {
        if(p.hasAttribute('nodepath')) {
            return p;
        }
        p = p.parentNode;
    }
    return null;
}

function iterateUpWithNodePath(elem, callback) {
    let skipFirstParent = elem.hasAttribute('emptyslot') || elem.getAttribute('ide-iscontainer') === 'false';
    let p = elem.parentNode;
    let flag = false;;
    let lastP = elem;
    while(p !== document.body) {
        if(p.hasAttribute('nodepath')) {
            if(skipFirstParent) {
                skipFirstParent = false;
                lastP = p;
                p = p.parentNode;
                continue;
            }
            if(callback(p, lastP)){
                flag = true;
            }
        }
        lastP = p;
        p = p.parentNode;
    }
    return flag;
}

function resolveEvent(e) {
    return pickKeys(e, [
        'ctrlKey',
        'shiftKey',
        'clientX',
        'clientY',
        'offsetX',
        'offsetY',
        'deltaX',
        'deltaY',
    ])
}


window.addEventListener('wheel', (e) => {
    // if(e.ctrlKey) { 
        e.preventDefault();
    // } 
    postMessageToIDE({
        type: 'Event',
        name: 'wheel',
        payload: {
            eventMeta: resolveEvent(e),
        }
    })
}, { passive: false });

window.addEventListener('scroll', (e) => {
    if(e.ctrlKey) { 
        e.preventDefault();
    } 
    postMessageToIDE({
        type: 'Event',
        name: 'scroll',
        payload: {
            eventMeta: resolveEvent(e),
        }
    })
}, CAPTURE_EVENT);

function isElementInline(element) {
    const computedStyle = getComputedStyle(element);
    return computedStyle.display === 'inline' || computedStyle.display === 'inline-block';
}

function prepareElementTransferInfomation(element) {
    const payload = {
        target: null,
    };
    if(element) {
        if(element.hasAttribute('emptyslot')) {
            const elem = findParentWithNodePath(element);
            const target = elem.getAttribute('nodepath');
            payload.rects = Array.from(element.getClientRects());
            payload.target = target;
            payload.isEmptySlot = true;
        } 
        if(element.hasAttribute('nodepath')) {
            // const box = element.getBoundingClientRect();
            payload.target = element.getAttribute('nodepath');
            // payload.boundingbox = box;
            payload.elemStyle = {
                inline: isElementInline(element),
            }
            const rects = element.getClientRects();
            payload.rects = Array.from(rects);
        }
    }
    return payload;
}

window.addEventListener('mousedown', (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    const point = [e.clientX, e.clientY];
    if(status.isEditing) {
        if(pointWithinTarget(point, status.edittingTarget)) {
            // status.disableMousemoveProxy = true;
            return;
        } else {
            document.activeElement.blur();
            return;
        }
    }
    e.preventDefault();
    e.stopPropagation();
    status.mouseDownPosition = point
    const element = lockTarget(e);
    if(element) {
        let p = [e.clientX, e.clientY]
        let _d = 0;
        const f = (e) => {
            const x = Math.abs(e.clientX - p[0]);
            const y = Math.abs(e.clientY - p[1]);
            p[0] = e.clientX;
            p[1] = e.clientY;
            _d += x + y;
            if(_d > 20) {
                postMessageToIDE({
                    type: 'Event',
                    name: 'dragstart',
                    payload: {
                        eventMeta: resolveEvent(e),
                        elementInfo: prepareElementTransferInfomation(element),
                    }
                });
                window.removeEventListener('mousemove', f, CAPTURE_EVENT);    
            }
        }
        window.addEventListener('mouseup', () => {
            window.removeEventListener('mousemove', f, CAPTURE_EVENT);    
        }, {
            ...CAPTURE_EVENT,
            once: true,
        })
        window.addEventListener('mousemove', f, CAPTURE_EVENT);
    }
}, CAPTURE_EVENT);

function debounce(callback, timeout) {
    let _timer
    return function(continued, ...argus) {
        if(_timer) {
            clearTimeout(_timer);
        } 
        if(continued) {
            _timer = setTimeout(() => {
                callback(...argus);
            }, timeout);
        }
    }
}

function expandContainerGap(elem, lastElem) {
    const rectGap = 5;
    if(elem.getAttribute('ide-iscontainer') === 'true'){
        const b1 = elem.getBoundingClientRect();
        const b2 = lastElem.getBoundingClientRect();
        if (
            Math.abs(b1.left - b2.left) < rectGap
            || Math.abs(b1.right - b2.right) < rectGap
            || Math.abs(b1.top - b2.top) < rectGap
            || Math.abs(b1.bottom - b2.bottom) < rectGap
        ) {
            elem.setAttribute('dropgap', true);
            return true
        }  
    }

    return false;
}

function releaseContainerGap() {
    const elems = document.querySelectorAll(\`[dropgap]\`);
    Array.from(elems).forEach(el => {
        
        el.removeAttribute('dropgap')
    })
    hesitateWhenDragging(false);
}

function checkElemIsDragging(element) {
    return status.draggingElems.find(el => el.contains(element));
}

function startDraggingElem(nodePaths) {
    const elems = [];
    nodePaths.forEach(path => {
        const elem = document.querySelector(\`[nodepath="\${path}"]\`);
        if(elem) {
            elem.setAttribute('ide-dragging', true)
            elems.push(elem);
        }
    })
    status.draggingElems = elems;
    status.isDragging = true;
}

function makeDraggingElemMove(nodePaths) {
    const elems = [];
    nodePaths.forEach(path => {
        const elem = document.querySelector(\`[nodepath="\${path}"]\`);
        if(elem) {
            elem.setAttribute('ide-dragging-move', true)
            elems.push({
                offset: [0,0],
                elem,
            });
        }
    });
    status.mouseMovingPosition[0] = status.mouseCurrentLocation[0];
    status.mouseMovingPosition[1] = status.mouseCurrentLocation[1];
    status.draggingMoveElems = elems;
}

function releaseDraggingElem() {
    status.isDragging = false;
    status.draggingElems.forEach(elem => {
        elem.removeAttribute('ide-dragging')
        elem.removeAttribute('ide-dragging-move')
    })
    status.draggingMoveElems.forEach(({ elem }) => {
        // elem.style.removeProperty('transform');
    })
    status.draggingElems = [];
    status.draggingMoveElems = [];
    releaseContainerGap();
}

function handlerMovingElemWhenDragging() {
    const deltaX = status.mouseCurrentLocation[0] - status.mouseMovingPosition[0];
    const deltaY = status.mouseCurrentLocation[1] - status.mouseMovingPosition[1];
    status.draggingMoveElems.forEach(({ elem, offset}) => {
        offset[0] += deltaX;
        offset[1] += deltaY;
        elem.style.setProperty('transform', \`translate(\${offset[0]}px, \${offset[1]}px)\`);
    })
    console.log('handlerMovingElemWhenDragging')

    status.mouseMovingPosition[0] = status.mouseCurrentLocation[0];
    status.mouseMovingPosition[1] = status.mouseCurrentLocation[1];
}

const hesitateWhenDragging = debounce(function(element) {
    if(element) {
        const findSome = iterateUpWithNodePath(element, expandContainerGap)
        if(findSome){
            postMessageToIDE({
                type: 'Event',
                name: 'hesitateWhenDragging',
                payload: {
                    elementInfo: prepareElementTransferInfomation(element),
                }
            });
        }
    }
}, 1000)

window.addEventListener('mousemove', (e) => {
    if(status.isEditing){
        return;
    }
    e.stopPropagation();
    const element = lockTarget(e);
    
    if(status.isDragging) {
        if(checkElemIsDragging(element)) {
            postMessageToIDE({
                type: 'Event',
                name: 'dragover',
                payload: {
                    eventMeta: resolveEvent(e),
                    notAllowed: true,
                }
            });
            document.body.setAttribute('ide-cursor', 'not-allowed');
            return;
        }
        hesitateWhenDragging(true, element);
        handlerMovingElemWhenDragging();
        postMessageToIDE({
            type: 'Event',
            name: 'dragover',
            payload: {
                eventMeta: resolveEvent(e),
                elementInfo: prepareElementTransferInfomation(element),
            }
        });
    } else {
        postMessageToIDE({
            type: 'Event',
            name: 'mousemove',
            payload: {
                eventMeta: resolveEvent(e),
                elementInfo: prepareElementTransferInfomation(element),
            }
        });
    }
    
    
}, CAPTURE_EVENT);

window.addEventListener('mouseup', (e) => {
    if(status.isDragging) {
        e.preventDefault();
        e.stopPropagation();
        status.isDragging = false;
        const element = lockTarget(e);
        postMessageToIDE({
            type: 'Event',
            name: 'dragend',
            payload: {
                eventMeta: resolveEvent(e),
                elementInfo: prepareElementTransferInfomation(element),
            }
        });
        hesitateWhenDragging(false);
    }
}, CAPTURE_EVENT);


window.addEventListener('click', (e) => {
    if(status.mouseDownPosition[0] !== e.clientX || status.mouseDownPosition[1] !== e.clientY){
        return;
    }
    const element = lockTarget(e);
    
    postMessageToIDE({
        type: 'Event',
        name: 'click',
        payload: {
            eventMeta: resolveEvent(e),
            elementInfo: prepareElementTransferInfomation(element),
        }
    });
    // collectSubElements(element);
}, CAPTURE_EVENT)

window.addEventListener('dblclick', (e) => {
    if(status.mouseDownPosition[0] !== e.clientX || status.mouseDownPosition[1] !== e.clientY){
        return;
    }
    e.preventDefault();
    e.stopPropagation();
    const element = lockTarget(e);
    
    postMessageToIDE({
        type: 'Event',
        name: 'dblclick',
        payload: {
            eventMeta: resolveEvent(e),
            elementInfo: prepareElementTransferInfomation(element),
        }
    });
    // collectSubElements(element);
}, CAPTURE_EVENT)

// window.addEventListener('dragover', e => {
//     const element = lockTarget(e);
//     console.log(element)
// })

// window.addEventListener('dragover', e => {
//     e.preventDefault();
//     const element = lockTarget(e);
//     if(element) {
//         collectSubElements(element);
//     }

// }, { capture: true });

/*
async function collectSiblingElements(element) {
    const response = await oneTripToIDE({
        type: 'Method',
        name: 'getSiblingNodePath',
        payload: element.getAttribute('nodepath'),
    })
    console.log(response);
    return response.map(r => document.querySelector(\`[nodepath="\${r}"]\`))
}

async function collectParentElements(element) {
    const response = await oneTripToIDE({
        type: 'Method',
        name: 'getParentNodePath',
        payload: element.getAttribute('nodepath'),
    })
    console.log(response);
    return response.map(r => document.querySelector(\`[nodepath="\${r}"]\`))
}*/ 

window.addEventListener('message', (event) => {
    const data = event.data;
    if(data.type === 'Event') {
        switch(data.name) {
            case 'startDragging':
                startDraggingElem(data.payload.nodePaths);
                break;
            case 'makeDraggingElemMove':
                makeDraggingElemMove(data.payload.nodePaths);
                break;
            case 'stopDragging':
                releaseDraggingElem();
                break;
        }
    }

    if(data.type === 'Method') {
      if(methods[data.name]) {
        const uuid = data.uuid;
        try {
            const response = methods[data.name](data.payload);
            event.source.postMessage({
                type: 'Response',
                result: 'success',
                uuid,
                response,
            }, event.origin)
        } catch(err) {
            event.source.postMessage({
                type: 'Response',
                result: 'failed',
                uuid,
                err,
            }, event.origin)
        }
        
      }
  }
})
const elementsResizeObserver = new ResizeObserver(entries => {
    const elementInfos = [];
    for (const entry of entries) {
        // console.log(entry.target);
        const elem = entry.target;
        const nodePath = elem.getAttribute('nodepath');
        if(nodePath) {
            elementInfos.push(prepareElementTransferInfomation(elem));
        }
    }
    if(elementInfos.length > 0){
        postMessageToIDE({
            type: 'Event',
            name: 'refreshBoundings',
            payload: {
                elementInfos
            }
        })
    }
    
})

const observer = new ResizeObserver(() => {
    console.log(document.body.scrollHeight)
    postMessageToIDE({
        type: 'Event',
        name: 'resizeObserver',
        payload: {
            scrollHeight: document.body.scrollHeight
        }
    })
});

const methods = {
    getElementInfoByNodePath(payload) {
        const elem = document.querySelector(\`[nodepath="\${payload.nodePath}"]\`);
        return prepareElementTransferInfomation(elem)
    },
    getElementsInfoByNodePath(payload) {
        const result = {};
        payload.nodePaths.forEach((path) => {
            const elem = document.querySelector(\`[nodepath="\${path}"]\`);
            result[path] = prepareElementTransferInfomation(elem)
        });
        return result;
    },
    setCursor(payload) {
        document.body.setAttribute('ide-cursor', payload.cursor);
    },
    setElementsTemporaryStyle(payload) {
        payload.temporaryStyles.forEach(meta => {
            const elem = document.querySelector(\`[nodepath="\${meta.nodePath}"]\`);
            elem.style = meta.style;
            console.log(meta.style)
        })
    },
    setElementsTemporaryAttribute(payload) {
        payload.temporaryAttributes.forEach(meta => {
            const elem = document.querySelector(\`[nodepath="\${meta.nodePath}"]\`);
            meta.attributes.forEach(attr => {
                elem.setAttribute(attr[0], attr[1]);
            })
        })
    },
    startObserveRootNodeSize(payload) { 
        const elem = document.querySelector(payload.selector);
        if(elem) {
            console.log(elem)
            observer.observe(elem);
        }
    },
    editContent(payload) {
        const elem = document.querySelector(\`[nodepath="\${payload.nodePath}"]\`);
        if(elem) {
            elem.addEventListener('blur', (e) => {
                postMessageToIDE({
                    type: 'Event',
                    name: 'contentchange',
                    payload: {
                        elementInfo: prepareElementTransferInfomation(elem),
                        innerText: elem.innerText,
                    }
                })
                elementsResizeObserver.unobserve(elem);
                status.isEditing = false;
                status.edittingTarget = null;
                elem.setAttribute('contentEditable', false);
            }, { once: true });
            elementsResizeObserver.observe(elem);
            elem.setAttribute('contentEditable', true);
            setTimeout(() => {
                selectElementContents(elem); 
            });
            status.isEditing = true;
            status.edittingTarget = elem;
        }
    }
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
console.log('post proxy ready')
postMessageToIDE({
    type: 'Event',
    name: 'proxyReady',
    payload: {}
})

})();`},"/src/ide.css":{code:`[ide-dragging='true'] {
    opacity: 0.5!important;
}

[ide-dragging-move='true'] {
    pointer-events: none;
    transition: none!important;
}
[nodepath]{ 
    transition: none!important;
}

[dropgap='true'] {
    padding: 10px;
    border: 1px dashed #4a88e8;
    transition: padding 0.2s;
    box-sizing: border-box; /** 避免宽度撑开，超出 */
}
/* 子页面容器禁用 dropgap，bugid 2693320101095168 */
[dropgap='true'][vusion-node-tag*="-router-view"] {
    border: none;
    padding: 0;
}

body[ide-cursor="copy"] {
    cursor: copy!important;
}
body[ide-cursor="auto"] {
    cursor: auto;
}
body[ide-cursor="grabbing"] {
    cursor: grabbing!important;
}
body[ide-cursor="not-allowed"] {
    cursor: not-allowed!important;
}
`}},environment:"vanilla"},ki="View",Li=[{concept:"ViewElement",tag:"u-linear-layout",children:[{concept:"ViewElement",tag:"u-button",bindAttrs:[{concept:"BindAttribute",name:"text",value:"Button1"}]}]},{concept:"ViewElement",tag:"AbsoluteLayout",children:[{concept:"ViewElement",tag:"u-button",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"},{concept:"BindAttribute",name:"text",value:"Button2"}],staticStyle:"left: 20px; top: 20px;"}]}],Fi={concept:ki,elements:Li};class Uo extends rs{renderIDE(){let t=`
    <${this.tag} 
        key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${fs(this.source.bindAttrs)}
        ${ds(this.source.staticStyle)}>`;return t+=`</${this.tag}>
`,t}}class us extends $o{createSubElements(t){let n;t.concept==="View"&&(n=t.elements),t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(zi(this)))}renderIDE(){let t=`
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${fs(this.source.bindAttrs)}
        ${ds(this.source.staticStyle)}>`;return this.elements.length>0?this.elements.forEach(n=>{t+=n.renderIDE()}):t+="<EmptySlot />",t+=`</${this.tag}>
`,t}}const Bi=["u-button"];class ji extends Uo{constructor(){super(...arguments);R(this,"supportEditContent",!0)}static accept(n){return Bi.includes(n.tag)}}class Ui extends us{constructor(){super(...arguments);R(this,"isRoot",!0)}renderIDE(){let n="";return this.elements.forEach(o=>{n+=o.renderIDE()}),`
        <template>
            <div id="root">
            ${n}
            </div>
        </template>
        <script>
        import EmptySlot from './Empty.vue'
        export default {
            components: {
                EmptySlot
            }
        }
        <\/script>
                `}}class Hi extends us{static accept(t){return t.tag==="u-linear-layout"}constructor(t){super(t),this.direction=Ie.ROW,t.bindAttrs.find(n=>n.name==="direction"&&n.value==="vertical")&&(this.direction=Ie.COLUMN)}}class Vi extends us{constructor(){super(...arguments);R(this,"isAbsolute",!0)}static accept(n){return n.tag==="AbsoluteLayout"}renderIDE(){let n=`
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        class="absoluteLayout" 
        ${fs(this.source.bindAttrs)}
        ${ds(this.source.staticStyle)}>`;return this.elements.length>0&&this.elements.forEach(s=>{n+=s.renderIDE()}),n+=`</div>
`,n}}function fs(e){return e&&e.length>0?e.map(t=>`${t.name}="${t.value}"`).join(" "):""}function ds(e){return e&&e.trim()?` style="${e.trim()}" `:""}const Wi=[Vi,Hi,ji,Uo];function Ho(e){const t=Wi.find(n=>n.accept(e));return new t(e)}function Ki(e){return new Ui(e)}function zi(e){return t=>{const n=Ho(t);return n.parentNode=e,n}}const qi={makeUIElement:Ho,makeRootUIElement:Ki},Yi=("transform"in document.documentElement.style?"transform":void 0)||("-webkit-transform"in document.documentElement.style?"-webkit-transform":void 0)||("-moz-transform"in document.documentElement.style?"-moz-transform":void 0)||("-ms-transform"in document.documentElement.style?"-ms-transform":void 0)||("-o-transform"in document.documentElement.style?"-o-transform":void 0),dn=function(e={}){let t,n;const s=e.tag,o=document.createElement(s);if(s==="style")return o.type="text/css",o.styleSheet?o.styleSheet.cssText=e.cssText:o.appendChild(document.createTextNode(e.cssText)),o;if(e.attributes)for(t in e.attributes)n=e.attributes[t],o.setAttribute(t,n);if(e.style)for(t in e.style)n=e.style[t],o.style[t]=n;if(e.data)for(t in e.data)n=e.data[t],o.dataset[t]=n;return e.className&&e.className.forEach(r=>{console.log(r),o.classList.add(r)}),e.textContent!==void 0&&(o.textContent=e.textContent),e.childNodes&&[].concat(e.childNodes).forEach(r=>{o.appendChild(r)}),o};function hs(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const X={},gt=[],Ce=()=>{},Xi=()=>!1,Ji=/^on[^a-z]/,hn=e=>Ji.test(e),ps=e=>e.startsWith("onUpdate:"),oe=Object.assign,ms=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Zi=Object.prototype.hasOwnProperty,U=(e,t)=>Zi.call(e,t),N=Array.isArray,yt=e=>mn(e)==="[object Map]",Vo=e=>mn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",pn=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Wo=e=>(J(e)||L(e))&&L(e.then)&&L(e.catch),Ko=Object.prototype.toString,mn=e=>Ko.call(e),Gi=e=>mn(e).slice(8,-1),zo=e=>mn(e)==="[object Object]",gs=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,nn=hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qi=/-(\w)/g,bt=gn(e=>e.replace(Qi,(t,n)=>n?n.toUpperCase():"")),el=/\B([A-Z])/g,Tt=gn(e=>e.replace(el,"-$1").toLowerCase()),qo=gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Nn=gn(e=>e?`on${qo(e)}`:""),_t=(e,t)=>!Object.is(e,t),Dn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},tl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},nl=e=>{const t=ee(e)?Number(e):NaN;return isNaN(t)?e:t};let Ks;const Wn=()=>Ks||(Ks=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Le(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=ee(s)?il(s):Le(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(ee(e)||J(e))return e}const sl=/;(?![^(]*\))/g,ol=/:([^]+)/,rl=/\/\*[^]*?\*\//g;function il(e){const t={};return e.replace(rl,"").split(sl).forEach(n=>{if(n){const s=n.split(ol);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function De(e){let t="";if(ee(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const s=De(e[n]);s&&(t+=s+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ll="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",al=hs(ll);function Yo(e){return!!e||e===""}const cl=e=>ee(e)?e:e==null?"":N(e)||J(e)&&(e.toString===Ko||!L(e.toString))?JSON.stringify(e,Xo,2):String(e),Xo=(e,t)=>t&&t.__v_isRef?Xo(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:Vo(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!N(t)&&!zo(t)?String(t):t;let we;class ul{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function fl(e,t=we){t&&t.active&&t.effects.push(e)}function dl(){return we}const ys=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Jo=e=>(e.w&qe)>0,Zo=e=>(e.n&qe)>0,hl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},pl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];Jo(o)&&!Zo(o)?o.delete(e):t[n++]=o,o.w&=~qe,o.n&=~qe}t.length=n}},Kn=new WeakMap;let Nt=0,qe=1;const zn=30;let xe;const lt=Symbol(""),qn=Symbol("");class vs{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fl(this,s)}run(){if(!this.active)return this.fn();let t=xe,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Ke=!0,qe=1<<++Nt,Nt<=zn?hl(this):zs(this),this.fn()}finally{Nt<=zn&&pl(this),qe=1<<--Nt,xe=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(zs(this),this.onStop&&this.onStop(),this.active=!1)}}function zs(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const Go=[];function It(){Go.push(Ke),Ke=!1}function Ct(){const e=Go.pop();Ke=e===void 0?!0:e}function pe(e,t,n){if(Ke&&xe){let s=Kn.get(e);s||Kn.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=ys()),Qo(o)}}function Qo(e,t){let n=!1;Nt<=zn?Zo(e)||(e.n|=qe,n=!Jo(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function ke(e,t,n,s,o,r){const i=Kn.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&N(e)){const a=Number(s);i.forEach((c,d)=>{(d==="length"||!pn(d)&&d>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":N(e)?gs(n)&&l.push(i.get("length")):(l.push(i.get(lt)),yt(e)&&l.push(i.get(qn)));break;case"delete":N(e)||(l.push(i.get(lt)),yt(e)&&l.push(i.get(qn)));break;case"set":yt(e)&&l.push(i.get(lt));break}if(l.length===1)l[0]&&Yn(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Yn(ys(a))}}function Yn(e,t){const n=N(e)?e:[...e];for(const s of n)s.computed&&qs(s);for(const s of n)s.computed||qs(s)}function qs(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ml=hs("__proto__,__v_isRef,__isVue"),er=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pn)),Ys=gl();function gl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=H(this);for(let r=0,i=this.length;r<i;r++)pe(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(H)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){It();const s=H(this)[t].apply(this,n);return Ct(),s}}),e}function yl(e){const t=H(this);return pe(t,"has",e),t.hasOwnProperty(e)}class tr{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,s){const o=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&s===(o?r?Ml:rr:r?or:sr).get(t))return t;const i=N(t);if(!o){if(i&&U(Ys,n))return Reflect.get(Ys,n,s);if(n==="hasOwnProperty")return yl}const l=Reflect.get(t,n,s);return(pn(n)?er.has(n):ml(n))||(o||pe(t,"get",n),r)?l:fe(l)?i&&gs(n)?l:l.value:J(l)?o?ir(l):rt(l):l}}class nr extends tr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(Bt(r)&&fe(r)&&!fe(s))return!1;if(!this._shallow&&(!Xn(s)&&!Bt(s)&&(r=H(r),s=H(s)),!N(t)&&fe(r)&&!fe(s)))return r.value=s,!0;const i=N(t)&&gs(n)?Number(n)<t.length:U(t,n),l=Reflect.set(t,n,s,o);return t===H(o)&&(i?_t(s,r)&&ke(t,"set",n,s):ke(t,"add",n,s)),l}deleteProperty(t,n){const s=U(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&ke(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!pn(n)||!er.has(n))&&pe(t,"has",n),s}ownKeys(t){return pe(t,"iterate",N(t)?"length":lt),Reflect.ownKeys(t)}}class vl extends tr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const El=new nr,bl=new vl,_l=new nr(!0),Es=e=>e,yn=e=>Reflect.getPrototypeOf(e);function Yt(e,t,n=!1,s=!1){e=e.__v_raw;const o=H(e),r=H(t);n||(_t(t,r)&&pe(o,"get",t),pe(o,"get",r));const{has:i}=yn(o),l=s?Es:n?xs:ws;if(i.call(o,t))return l(e.get(t));if(i.call(o,r))return l(e.get(r));e!==o&&e.get(t)}function Xt(e,t=!1){const n=this.__v_raw,s=H(n),o=H(e);return t||(_t(e,o)&&pe(s,"has",e),pe(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Jt(e,t=!1){return e=e.__v_raw,!t&&pe(H(e),"iterate",lt),Reflect.get(e,"size",e)}function Xs(e){e=H(e);const t=H(this);return yn(t).has.call(t,e)||(t.add(e),ke(t,"add",e,e)),this}function Js(e,t){t=H(t);const n=H(this),{has:s,get:o}=yn(n);let r=s.call(n,e);r||(e=H(e),r=s.call(n,e));const i=o.call(n,e);return n.set(e,t),r?_t(t,i)&&ke(n,"set",e,t):ke(n,"add",e,t),this}function Zs(e){const t=H(this),{has:n,get:s}=yn(t);let o=n.call(t,e);o||(e=H(e),o=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return o&&ke(t,"delete",e,void 0),r}function Gs(){const e=H(this),t=e.size!==0,n=e.clear();return t&&ke(e,"clear",void 0,void 0),n}function Zt(e,t){return function(s,o){const r=this,i=r.__v_raw,l=H(i),a=t?Es:e?xs:ws;return!e&&pe(l,"iterate",lt),i.forEach((c,d)=>s.call(o,a(c),a(d),r))}}function Gt(e,t,n){return function(...s){const o=this.__v_raw,r=H(o),i=yt(r),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=o[e](...s),d=n?Es:t?xs:ws;return!t&&pe(r,"iterate",a?qn:lt),{next(){const{value:h,done:g}=c.next();return g?{value:h,done:g}:{value:l?[d(h[0]),d(h[1])]:d(h),done:g}},[Symbol.iterator](){return this}}}}function je(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wl(){const e={get(r){return Yt(this,r)},get size(){return Jt(this)},has:Xt,add:Xs,set:Js,delete:Zs,clear:Gs,forEach:Zt(!1,!1)},t={get(r){return Yt(this,r,!1,!0)},get size(){return Jt(this)},has:Xt,add:Xs,set:Js,delete:Zs,clear:Gs,forEach:Zt(!1,!0)},n={get(r){return Yt(this,r,!0)},get size(){return Jt(this,!0)},has(r){return Xt.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:Zt(!0,!1)},s={get(r){return Yt(this,r,!0,!0)},get size(){return Jt(this,!0)},has(r){return Xt.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:Zt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Gt(r,!1,!1),n[r]=Gt(r,!0,!1),t[r]=Gt(r,!1,!0),s[r]=Gt(r,!0,!0)}),[e,n,t,s]}const[xl,Tl,Il,Cl]=wl();function bs(e,t){const n=t?e?Cl:Il:e?Tl:xl;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(U(n,o)&&o in s?n:s,o,r)}const Pl={get:bs(!1,!1)},Al={get:bs(!1,!0)},Sl={get:bs(!0,!1)},sr=new WeakMap,or=new WeakMap,rr=new WeakMap,Ml=new WeakMap;function Nl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dl(e){return e.__v_skip||!Object.isExtensible(e)?0:Nl(Gi(e))}function rt(e){return Bt(e)?e:_s(e,!1,El,Pl,sr)}function Rl(e){return _s(e,!1,_l,Al,or)}function ir(e){return _s(e,!0,bl,Sl,rr)}function _s(e,t,n,s,o){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const i=Dl(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return o.set(e,l),l}function vt(e){return Bt(e)?vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function Xn(e){return!!(e&&e.__v_isShallow)}function lr(e){return vt(e)||Bt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function ar(e){return rn(e,"__v_skip",!0),e}const ws=e=>J(e)?rt(e):e,xs=e=>J(e)?ir(e):e;function $l(e){Ke&&xe&&(e=H(e),Qo(e.dep||(e.dep=ys())))}function Ol(e,t){e=H(e);const n=e.dep;n&&Yn(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function $e(e){return fe(e)?e.value:e}const kl={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return fe(o)&&!fe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function cr(e){return vt(e)?e:new Proxy(e,kl)}class Ll{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new vs(t,()=>{this._dirty||(this._dirty=!0,Ol(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=H(this);return $l(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Fl(e,t,n=!1){let s,o;const r=L(e);return r?(s=e,o=Ce):(s=e.get,o=e.set),new Ll(s,o,r||!o,n)}function ze(e,t,n,s){let o;try{o=s?e(...s):e()}catch(r){vn(r,t,n)}return o}function Ee(e,t,n,s){if(L(e)){const r=ze(e,t,n,s);return r&&Wo(r)&&r.catch(i=>{vn(i,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(Ee(e[r],t,n,s));return o}function vn(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,i,l)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){ze(a,null,10,[e,i,l]);return}}Bl(e,n,o,s)}function Bl(e,t,n,s=!0){console.error(e)}let jt=!1,Jn=!1;const ae=[];let Ne=0;const Et=[];let Oe=null,nt=0;const ur=Promise.resolve();let Ts=null;function jl(e){const t=Ts||ur;return e?t.then(this?e.bind(this):e):t}function Ul(e){let t=Ne+1,n=ae.length;for(;t<n;){const s=t+n>>>1,o=ae[s],r=Ut(o);r<e||r===e&&o.pre?t=s+1:n=s}return t}function Is(e){(!ae.length||!ae.includes(e,jt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ae.push(e):ae.splice(Ul(e.id),0,e),fr())}function fr(){!jt&&!Jn&&(Jn=!0,Ts=ur.then(hr))}function Hl(e){const t=ae.indexOf(e);t>Ne&&ae.splice(t,1)}function Vl(e){N(e)?Et.push(...e):(!Oe||!Oe.includes(e,e.allowRecurse?nt+1:nt))&&Et.push(e),fr()}function Qs(e,t=jt?Ne+1:0){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function dr(e){if(Et.length){const t=[...new Set(Et)];if(Et.length=0,Oe){Oe.push(...t);return}for(Oe=t,Oe.sort((n,s)=>Ut(n)-Ut(s)),nt=0;nt<Oe.length;nt++)Oe[nt]();Oe=null,nt=0}}const Ut=e=>e.id==null?1/0:e.id,Wl=(e,t)=>{const n=Ut(e)-Ut(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function hr(e){Jn=!1,jt=!0,ae.sort(Wl);const t=Ce;try{for(Ne=0;Ne<ae.length;Ne++){const n=ae[Ne];n&&n.active!==!1&&ze(n,null,14)}}finally{Ne=0,ae.length=0,dr(),jt=!1,Ts=null,(ae.length||Et.length)&&hr()}}function Kl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||X;let o=n;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in s){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:g}=s[d]||X;g&&(o=n.map(w=>ee(w)?w.trim():w)),h&&(o=n.map(tl))}let l,a=s[l=Nn(t)]||s[l=Nn(bt(t))];!a&&r&&(a=s[l=Nn(Tt(t))]),a&&Ee(a,e,6,o);const c=s[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ee(c,e,6,o)}}function pr(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},l=!1;if(!L(e)){const a=c=>{const d=pr(c,t,!0);d&&(l=!0,oe(i,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(J(e)&&s.set(e,null),null):(N(r)?r.forEach(a=>i[a]=null):oe(i,r),J(e)&&s.set(e,i),i)}function En(e,t){return!e||!hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Tt(t))||U(e,t))}let ce=null,mr=null;function ln(e){const t=ce;return ce=e,mr=e&&e.type.__scopeId||null,t}function wt(e,t=ce,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&uo(-1);const r=ln(t);let i;try{i=e(...o)}finally{ln(r),s._d&&uo(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Rn(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:r,propsOptions:[i],slots:l,attrs:a,emit:c,render:d,renderCache:h,data:g,setupState:w,ctx:C,inheritAttrs:T}=e;let D,k;const F=ln(e);try{if(n.shapeFlag&4){const P=o||s,W=P;D=Me(d.call(W,P,h,r,w,g,C)),k=a}else{const P=t;D=Me(P.length>1?P(r,{attrs:a,slots:l,emit:c}):P(r,null)),k=t.props?a:zl(a)}}catch(P){Lt.length=0,vn(P,e,1),D=se(be)}let j=D;if(k&&T!==!1){const P=Object.keys(k),{shapeFlag:W}=j;P.length&&W&7&&(i&&P.some(ps)&&(k=ql(k,i)),j=Ye(j,k))}return n.dirs&&(j=Ye(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),D=j,ln(F),D}const zl=e=>{let t;for(const n in e)(n==="class"||n==="style"||hn(n))&&((t||(t={}))[n]=e[n]);return t},ql=(e,t)=>{const n={};for(const s in e)(!ps(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Yl(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:l,patchFlag:a}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?eo(s,i,c):!!i;if(a&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const g=d[h];if(i[g]!==s[g]&&!En(c,g))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?eo(s,i,c):!0:!!i;return!1}function eo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!En(n,r))return!0}return!1}function Xl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Jl=Symbol.for("v-ndc"),Zl=e=>e.__isSuspense;function Gl(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):Vl(e)}const Qt={};function $n(e,t,n){return gr(e,t,n)}function gr(e,t,{immediate:n,deep:s,flush:o,onTrack:r,onTrigger:i}=X){var l;const a=dl()===((l=ie)==null?void 0:l.scope)?ie:null;let c,d=!1,h=!1;if(fe(e)?(c=()=>e.value,d=Xn(e)):vt(e)?(c=()=>e,s=!0):N(e)?(h=!0,d=e.some(P=>vt(P)||Xn(P)),c=()=>e.map(P=>{if(fe(P))return P.value;if(vt(P))return it(P);if(L(P))return ze(P,a,2)})):L(e)?t?c=()=>ze(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return g&&g(),Ee(e,a,3,[w])}:c=Ce,t&&s){const P=c;c=()=>it(P())}let g,w=P=>{g=F.onStop=()=>{ze(P,a,4),g=F.onStop=void 0}},C;if(Vt)if(w=Ce,t?n&&Ee(t,a,3,[c(),h?[]:void 0,w]):c(),o==="sync"){const P=Ya();C=P.__watcherHandles||(P.__watcherHandles=[])}else return Ce;let T=h?new Array(e.length).fill(Qt):Qt;const D=()=>{if(F.active)if(t){const P=F.run();(s||d||(h?P.some((W,re)=>_t(W,T[re])):_t(P,T)))&&(g&&g(),Ee(t,a,3,[P,T===Qt?void 0:h&&T[0]===Qt?[]:T,w]),T=P)}else F.run()};D.allowRecurse=!!t;let k;o==="sync"?k=D:o==="post"?k=()=>de(D,a&&a.suspense):(D.pre=!0,a&&(D.id=a.uid),k=()=>Is(D));const F=new vs(c,k);t?n?D():T=F.run():o==="post"?de(F.run.bind(F),a&&a.suspense):F.run();const j=()=>{F.stop(),a&&a.scope&&ms(a.scope.effects,F)};return C&&C.push(j),j}function Ql(e,t,n){const s=this.proxy,o=ee(e)?e.includes(".")?yr(s,e):()=>s[e]:e.bind(s,s);let r;L(t)?r=t:(r=t.handler,n=t);const i=ie;xt(this);const l=gr(o,r.bind(s),n);return i?xt(i):at(),l}function yr(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function it(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))it(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)it(e[n],t);else if(Vo(e)||yt(e))e.forEach(n=>{it(n,t)});else if(zo(e))for(const n in e)it(e[n],t);return e}function Cs(e,t){const n=ce;if(n===null)return e;const s=Tn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,l,a,c=X]=t[r];i&&(L(i)&&(i={mounted:i,updated:i}),i.deep&&it(l),o.push({dir:i,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ge(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];r&&(l.oldValue=r[i].value);let a=l.dir[s];a&&(It(),Ee(a,n,8,[e.el,l,e,t]),Ct())}}const Ve=Symbol("_leaveCb"),en=Symbol("_enterCb");function ea(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wr(()=>{e.isMounted=!0}),xr(()=>{e.isUnmounting=!0}),e}const ye=[Function,Array],vr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},ta={name:"BaseTransition",props:vr,setup(e,{slots:t}){const n=Ua(),s=ea();let o;return()=>{const r=t.default&&br(t.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const T of r)if(T.type!==be){i=T;break}}const l=H(e),{mode:a}=l;if(s.isLeaving)return On(i);const c=to(i);if(!c)return On(i);const d=Zn(c,l,s,n);Gn(c,d);const h=n.subTree,g=h&&to(h);let w=!1;const{getTransitionKey:C}=c.type;if(C){const T=C();o===void 0?o=T:T!==o&&(o=T,w=!0)}if(g&&g.type!==be&&(!st(c,g)||w)){const T=Zn(g,l,s,n);if(Gn(g,T),a==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},On(i);a==="in-out"&&c.type!==be&&(T.delayLeave=(D,k,F)=>{const j=Er(s,g);j[String(g.key)]=g,D[Ve]=()=>{k(),D[Ve]=void 0,delete d.delayedLeave},d.delayedLeave=F})}return i}}},na=ta;function Er(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Zn(e,t,n,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:g,onAfterLeave:w,onLeaveCancelled:C,onBeforeAppear:T,onAppear:D,onAfterAppear:k,onAppearCancelled:F}=t,j=String(e.key),P=Er(n,e),W=($,q)=>{$&&Ee($,s,9,q)},re=($,q)=>{const Y=q[1];W($,q),N($)?$.every(le=>le.length<=1)&&Y():$.length<=1&&Y()},te={mode:r,persisted:i,beforeEnter($){let q=l;if(!n.isMounted)if(o)q=T||l;else return;$[Ve]&&$[Ve](!0);const Y=P[j];Y&&st(e,Y)&&Y.el[Ve]&&Y.el[Ve](),W(q,[$])},enter($){let q=a,Y=c,le=d;if(!n.isMounted)if(o)q=D||a,Y=k||c,le=F||d;else return;let A=!1;const Z=$[en]=me=>{A||(A=!0,me?W(le,[$]):W(Y,[$]),te.delayedLeave&&te.delayedLeave(),$[en]=void 0)};q?re(q,[$,Z]):Z()},leave($,q){const Y=String(e.key);if($[en]&&$[en](!0),n.isUnmounting)return q();W(h,[$]);let le=!1;const A=$[Ve]=Z=>{le||(le=!0,q(),Z?W(C,[$]):W(w,[$]),$[Ve]=void 0,P[Y]===e&&delete P[Y])};P[Y]=e,g?re(g,[$,A]):A()},clone($){return Zn($,t,n,s)}};return te}function On(e){if(bn(e))return e=Ye(e),e.children=null,e}function to(e){return bn(e)?e.children?e.children[0]:void 0:e}function Gn(e,t){e.shapeFlag&6&&e.component?Gn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function br(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===he?(i.patchFlag&128&&o++,s=s.concat(br(i.children,t,l))):(t||i.type!==be)&&s.push(l!=null?Ye(i,{key:l}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const $t=e=>!!e.type.__asyncLoader,bn=e=>e.type.__isKeepAlive;function sa(e,t){_r(e,"a",t)}function oa(e,t){_r(e,"da",t)}function _r(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(_n(t,s,n),n){let o=n.parent;for(;o&&o.parent;)bn(o.parent.vnode)&&ra(s,t,n,o),o=o.parent}}function ra(e,t,n,s){const o=_n(t,e,s,!0);Tr(()=>{ms(s[t],o)},n)}function _n(e,t,n=ie,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;It(),xt(n);const l=Ee(t,n,e,i);return at(),Ct(),l});return s?o.unshift(r):o.push(r),r}}const Be=e=>(t,n=ie)=>(!Vt||e==="sp")&&_n(e,(...s)=>t(...s),n),ia=Be("bm"),wr=Be("m"),la=Be("bu"),aa=Be("u"),xr=Be("bum"),Tr=Be("um"),ca=Be("sp"),ua=Be("rtg"),fa=Be("rtc");function da(e,t=ie){_n("ec",e,t)}function ha(e,t,n,s){let o;const r=n&&n[s];if(N(e)||ee(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,r&&r[i])}else if(J(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>t(i,l,void 0,r&&r[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];o[l]=t(e[c],c,l,r&&r[l])}}else o=[];return n&&(n[s]=o),o}function pa(e,t,n={},s,o){if(ce.isCE||ce.parent&&$t(ce.parent)&&ce.parent.isCE)return t!=="default"&&(n.name=t),se("slot",n,s&&s());let r=e[t];r&&r._c&&(r._d=!1),ve();const i=r&&Ir(r(n)),l=ut(he,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Ir(e){return e.some(t=>un(t)?!(t.type===be||t.type===he&&!Ir(t.children)):!0)?e:null}const Qn=e=>e?Fr(e)?Tn(e)||e.proxy:Qn(e.parent):null,Ot=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qn(e.parent),$root:e=>Qn(e.root),$emit:e=>e.emit,$options:e=>Ps(e),$forceUpdate:e=>e.f||(e.f=()=>Is(e.update)),$nextTick:e=>e.n||(e.n=jl.bind(e.proxy)),$watch:e=>Ql.bind(e)}),kn=(e,t)=>e!==X&&!e.__isScriptSetup&&U(e,t),ma={get({_:e},t){const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const w=i[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(kn(s,t))return i[t]=1,s[t];if(o!==X&&U(o,t))return i[t]=2,o[t];if((c=e.propsOptions[0])&&U(c,t))return i[t]=3,r[t];if(n!==X&&U(n,t))return i[t]=4,n[t];es&&(i[t]=0)}}const d=Ot[t];let h,g;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==X&&U(n,t))return i[t]=4,n[t];if(g=a.config.globalProperties,U(g,t))return g[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return kn(o,t)?(o[t]=n,!0):s!==X&&U(s,t)?(s[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let l;return!!n[i]||e!==X&&U(e,i)||kn(t,i)||(l=r[0])&&U(l,i)||U(s,i)||U(Ot,i)||U(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function no(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let es=!0;function ga(e){const t=Ps(e),n=e.proxy,s=e.ctx;es=!1,t.beforeCreate&&so(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:l,provide:a,inject:c,created:d,beforeMount:h,mounted:g,beforeUpdate:w,updated:C,activated:T,deactivated:D,beforeDestroy:k,beforeUnmount:F,destroyed:j,unmounted:P,render:W,renderTracked:re,renderTriggered:te,errorCaptured:$,serverPrefetch:q,expose:Y,inheritAttrs:le,components:A,directives:Z,filters:me}=t;if(c&&ya(c,s,null),i)for(const G in i){const K=i[G];L(K)&&(s[G]=K.bind(n))}if(o){const G=o.call(n,n);J(G)&&(e.data=rt(G))}if(es=!0,r)for(const G in r){const K=r[G],Je=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Ce,zt=!L(K)&&L(K.set)?K.set.bind(n):Ce,Ze=jr({get:Je,set:zt});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Pe=>Ze.value=Pe})}if(l)for(const G in l)Cr(l[G],s,n,G);if(a){const G=L(a)?a.call(n):a;Reflect.ownKeys(G).forEach(K=>{Ar(K,G[K])})}d&&so(d,e,"c");function ne(G,K){N(K)?K.forEach(Je=>G(Je.bind(n))):K&&G(K.bind(n))}if(ne(ia,h),ne(wr,g),ne(la,w),ne(aa,C),ne(sa,T),ne(oa,D),ne(da,$),ne(fa,re),ne(ua,te),ne(xr,F),ne(Tr,P),ne(ca,q),N(Y))if(Y.length){const G=e.exposed||(e.exposed={});Y.forEach(K=>{Object.defineProperty(G,K,{get:()=>n[K],set:Je=>n[K]=Je})})}else e.exposed||(e.exposed={});W&&e.render===Ce&&(e.render=W),le!=null&&(e.inheritAttrs=le),A&&(e.components=A),Z&&(e.directives=Z)}function ya(e,t,n=Ce){N(e)&&(e=ts(e));for(const s in e){const o=e[s];let r;J(o)?"default"in o?r=kt(o.from||s,o.default,!0):r=kt(o.from||s):r=kt(o),fe(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function so(e,t,n){Ee(N(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cr(e,t,n,s){const o=s.includes(".")?yr(n,s):()=>n[s];if(ee(e)){const r=t[e];L(r)&&$n(o,r)}else if(L(e))$n(o,e.bind(n));else if(J(e))if(N(e))e.forEach(r=>Cr(r,t,n,s));else{const r=L(e.handler)?e.handler.bind(n):t[e.handler];L(r)&&$n(o,r,e)}}function Ps(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let a;return l?a=l:!o.length&&!n&&!s?a=t:(a={},o.length&&o.forEach(c=>an(a,c,i,!0)),an(a,t,i)),J(t)&&r.set(t,a),a}function an(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&an(e,r,n,!0),o&&o.forEach(i=>an(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=va[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const va={data:oo,props:ro,emits:ro,methods:Dt,computed:Dt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:Dt,directives:Dt,watch:ba,provide:oo,inject:Ea};function oo(e,t){return t?e?function(){return oe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Ea(e,t){return Dt(ts(e),ts(t))}function ts(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?oe(Object.create(null),e,t):t}function ro(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:oe(Object.create(null),no(e),no(t??{})):t}function ba(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const s in t)n[s]=ue(e[s],t[s]);return n}function Pr(){return{app:null,config:{isNativeTag:Xi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _a=0;function wa(e,t){return function(s,o=null){L(s)||(s=oe({},s)),o!=null&&!J(o)&&(o=null);const r=Pr(),i=new WeakSet;let l=!1;const a=r.app={_uid:_a++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Xa,get config(){return r.config},set config(c){},use(c,...d){return i.has(c)||(c&&L(c.install)?(i.add(c),c.install(a,...d)):L(c)&&(i.add(c),c(a,...d))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,d){return d?(r.components[c]=d,a):r.components[c]},directive(c,d){return d?(r.directives[c]=d,a):r.directives[c]},mount(c,d,h){if(!l){const g=se(s,o);return g.appContext=r,d&&t?t(g,c):e(g,c,h),l=!0,a._container=c,c.__vue_app__=a,Tn(g.component)||g.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return r.provides[c]=d,a},runWithContext(c){cn=a;try{return c()}finally{cn=null}}};return a}}let cn=null;function Ar(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function kt(e,t,n=!1){const s=ie||ce;if(s||cn){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:cn._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&L(t)?t.call(s&&s.proxy):t}}function xa(e,t,n,s=!1){const o={},r={};rn(r,xn,1),e.propsDefaults=Object.create(null),Sr(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Rl(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Ta(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,l=H(o),[a]=e.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let g=d[h];if(En(e.emitsOptions,g))continue;const w=t[g];if(a)if(U(r,g))w!==r[g]&&(r[g]=w,c=!0);else{const C=bt(g);o[C]=ns(a,l,C,w,e,!1)}else w!==r[g]&&(r[g]=w,c=!0)}}}else{Sr(e,t,o,r)&&(c=!0);let d;for(const h in l)(!t||!U(t,h)&&((d=Tt(h))===h||!U(t,d)))&&(a?n&&(n[h]!==void 0||n[d]!==void 0)&&(o[h]=ns(a,l,h,void 0,e,!0)):delete o[h]);if(r!==l)for(const h in r)(!t||!U(t,h))&&(delete r[h],c=!0)}c&&ke(e,"set","$attrs")}function Sr(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(nn(a))continue;const c=t[a];let d;o&&U(o,d=bt(a))?!r||!r.includes(d)?n[d]=c:(l||(l={}))[d]=c:En(e.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,i=!0)}if(r){const a=H(n),c=l||X;for(let d=0;d<r.length;d++){const h=r[d];n[h]=ns(o,a,h,c[h],e,!U(c,h))}}return i}function ns(e,t,n,s,o,r){const i=e[n];if(i!=null){const l=U(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&L(a)){const{propsDefaults:c}=o;n in c?s=c[n]:(xt(o),s=c[n]=a.call(null,t),at())}else s=a}i[0]&&(r&&!l?s=!1:i[1]&&(s===""||s===Tt(n))&&(s=!0))}return s}function Mr(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},l=[];let a=!1;if(!L(e)){const d=h=>{a=!0;const[g,w]=Mr(h,t,!0);oe(i,g),w&&l.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!a)return J(e)&&s.set(e,gt),gt;if(N(r))for(let d=0;d<r.length;d++){const h=bt(r[d]);io(h)&&(i[h]=X)}else if(r)for(const d in r){const h=bt(d);if(io(h)){const g=r[d],w=i[h]=N(g)||L(g)?{type:g}:oe({},g);if(w){const C=co(Boolean,w.type),T=co(String,w.type);w[0]=C>-1,w[1]=T<0||C<T,(C>-1||U(w,"default"))&&l.push(h)}}}const c=[i,l];return J(e)&&s.set(e,c),c}function io(e){return e[0]!=="$"}function lo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ao(e,t){return lo(e)===lo(t)}function co(e,t){return N(t)?t.findIndex(n=>ao(n,e)):L(t)&&ao(t,e)?0:-1}const Nr=e=>e[0]==="_"||e==="$stable",As=e=>N(e)?e.map(Me):[Me(e)],Ia=(e,t,n)=>{if(t._n)return t;const s=wt((...o)=>As(t(...o)),n);return s._c=!1,s},Dr=(e,t,n)=>{const s=e._ctx;for(const o in e){if(Nr(o))continue;const r=e[o];if(L(r))t[o]=Ia(o,r,s);else if(r!=null){const i=As(r);t[o]=()=>i}}},Rr=(e,t)=>{const n=As(t);e.slots.default=()=>n},Ca=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),rn(t,"_",n)):Dr(t,e.slots={})}else e.slots={},t&&Rr(e,t);rn(e.slots,xn,1)},Pa=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=X;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(oe(o,t),!n&&l===1&&delete o._):(r=!t.$stable,Dr(t,o)),i=t}else t&&(Rr(e,t),i={default:1});if(r)for(const l in o)!Nr(l)&&i[l]==null&&delete o[l]};function ss(e,t,n,s,o=!1){if(N(e)){e.forEach((g,w)=>ss(g,t&&(N(t)?t[w]:t),n,s,o));return}if($t(s)&&!o)return;const r=s.shapeFlag&4?Tn(s.component)||s.component.proxy:s.el,i=o?null:r,{i:l,r:a}=e,c=t&&t.r,d=l.refs===X?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ee(c)?(d[c]=null,U(h,c)&&(h[c]=null)):fe(c)&&(c.value=null)),L(a))ze(a,l,12,[i,d]);else{const g=ee(a),w=fe(a);if(g||w){const C=()=>{if(e.f){const T=g?U(h,a)?h[a]:d[a]:a.value;o?N(T)&&ms(T,r):N(T)?T.includes(r)||T.push(r):g?(d[a]=[r],U(h,a)&&(h[a]=d[a])):(a.value=[r],e.k&&(d[e.k]=a.value))}else g?(d[a]=i,U(h,a)&&(h[a]=i)):w&&(a.value=i,e.k&&(d[e.k]=i))};i?(C.id=-1,de(C,n)):C()}}}const de=Gl;function Aa(e){return Sa(e)}function Sa(e,t){const n=Wn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:l,createComment:a,setText:c,setElementText:d,parentNode:h,nextSibling:g,setScopeId:w=Ce,insertStaticContent:C}=e,T=(u,f,p,m=null,y=null,b=null,x=!1,E=null,_=!!f.dynamicChildren)=>{if(u===f)return;u&&!st(u,f)&&(m=qt(u),Pe(u,y,b,!0),u=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:v,ref:S,shapeFlag:I}=f;switch(v){case wn:D(u,f,p,m);break;case be:k(u,f,p,m);break;case Ln:u==null&&F(f,p,m,x);break;case he:A(u,f,p,m,y,b,x,E,_);break;default:I&1?W(u,f,p,m,y,b,x,E,_):I&6?Z(u,f,p,m,y,b,x,E,_):(I&64||I&128)&&v.process(u,f,p,m,y,b,x,E,_,ft)}S!=null&&y&&ss(S,u&&u.ref,b,f||u,!f)},D=(u,f,p,m)=>{if(u==null)s(f.el=l(f.children),p,m);else{const y=f.el=u.el;f.children!==u.children&&c(y,f.children)}},k=(u,f,p,m)=>{u==null?s(f.el=a(f.children||""),p,m):f.el=u.el},F=(u,f,p,m)=>{[u.el,u.anchor]=C(u.children,f,p,m,u.el,u.anchor)},j=({el:u,anchor:f},p,m)=>{let y;for(;u&&u!==f;)y=g(u),s(u,p,m),u=y;s(f,p,m)},P=({el:u,anchor:f})=>{let p;for(;u&&u!==f;)p=g(u),o(u),u=p;o(f)},W=(u,f,p,m,y,b,x,E,_)=>{x=x||f.type==="svg",u==null?re(f,p,m,y,b,x,E,_):q(u,f,y,b,x,E,_)},re=(u,f,p,m,y,b,x,E)=>{let _,v;const{type:S,props:I,shapeFlag:M,transition:O,dirs:B}=u;if(_=u.el=i(u.type,b,I&&I.is,I),M&8?d(_,u.children):M&16&&$(u.children,_,null,m,y,b&&S!=="foreignObject",x,E),B&&Ge(u,null,m,"created"),te(_,u,u.scopeId,x,m),I){for(const V in I)V!=="value"&&!nn(V)&&r(_,V,null,I[V],b,u.children,m,y,Re);"value"in I&&r(_,"value",null,I.value),(v=I.onVnodeBeforeMount)&&Se(v,m,u)}B&&Ge(u,null,m,"beforeMount");const z=Ma(y,O);z&&O.beforeEnter(_),s(_,f,p),((v=I&&I.onVnodeMounted)||z||B)&&de(()=>{v&&Se(v,m,u),z&&O.enter(_),B&&Ge(u,null,m,"mounted")},y)},te=(u,f,p,m,y)=>{if(p&&w(u,p),m)for(let b=0;b<m.length;b++)w(u,m[b]);if(y){let b=y.subTree;if(f===b){const x=y.vnode;te(u,x,x.scopeId,x.slotScopeIds,y.parent)}}},$=(u,f,p,m,y,b,x,E,_=0)=>{for(let v=_;v<u.length;v++){const S=u[v]=E?We(u[v]):Me(u[v]);T(null,S,f,p,m,y,b,x,E)}},q=(u,f,p,m,y,b,x)=>{const E=f.el=u.el;let{patchFlag:_,dynamicChildren:v,dirs:S}=f;_|=u.patchFlag&16;const I=u.props||X,M=f.props||X;let O;p&&Qe(p,!1),(O=M.onVnodeBeforeUpdate)&&Se(O,p,f,u),S&&Ge(f,u,p,"beforeUpdate"),p&&Qe(p,!0);const B=y&&f.type!=="foreignObject";if(v?Y(u.dynamicChildren,v,E,p,m,B,b):x||K(u,f,E,null,p,m,B,b,!1),_>0){if(_&16)le(E,f,I,M,p,m,y);else if(_&2&&I.class!==M.class&&r(E,"class",null,M.class,y),_&4&&r(E,"style",I.style,M.style,y),_&8){const z=f.dynamicProps;for(let V=0;V<z.length;V++){const Q=z[V],_e=I[Q],dt=M[Q];(dt!==_e||Q==="value")&&r(E,Q,_e,dt,y,u.children,p,m,Re)}}_&1&&u.children!==f.children&&d(E,f.children)}else!x&&v==null&&le(E,f,I,M,p,m,y);((O=M.onVnodeUpdated)||S)&&de(()=>{O&&Se(O,p,f,u),S&&Ge(f,u,p,"updated")},m)},Y=(u,f,p,m,y,b,x)=>{for(let E=0;E<f.length;E++){const _=u[E],v=f[E],S=_.el&&(_.type===he||!st(_,v)||_.shapeFlag&70)?h(_.el):p;T(_,v,S,null,m,y,b,x,!0)}},le=(u,f,p,m,y,b,x)=>{if(p!==m){if(p!==X)for(const E in p)!nn(E)&&!(E in m)&&r(u,E,p[E],null,x,f.children,y,b,Re);for(const E in m){if(nn(E))continue;const _=m[E],v=p[E];_!==v&&E!=="value"&&r(u,E,v,_,x,f.children,y,b,Re)}"value"in m&&r(u,"value",p.value,m.value)}},A=(u,f,p,m,y,b,x,E,_)=>{const v=f.el=u?u.el:l(""),S=f.anchor=u?u.anchor:l("");let{patchFlag:I,dynamicChildren:M,slotScopeIds:O}=f;O&&(E=E?E.concat(O):O),u==null?(s(v,p,m),s(S,p,m),$(f.children,p,S,y,b,x,E,_)):I>0&&I&64&&M&&u.dynamicChildren?(Y(u.dynamicChildren,M,p,y,b,x,E),(f.key!=null||y&&f===y.subTree)&&$r(u,f,!0)):K(u,f,p,S,y,b,x,E,_)},Z=(u,f,p,m,y,b,x,E,_)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?y.ctx.activate(f,p,m,x,_):me(f,p,m,y,b,x,_):Pt(u,f,_)},me=(u,f,p,m,y,b,x)=>{const E=u.component=ja(u,m,y);if(bn(u)&&(E.ctx.renderer=ft),Ha(E),E.asyncDep){if(y&&y.registerDep(E,ne),!u.el){const _=E.subTree=se(be);k(null,_,f,p)}return}ne(E,u,f,p,y,b,x)},Pt=(u,f,p)=>{const m=f.component=u.component;if(Yl(u,f,p))if(m.asyncDep&&!m.asyncResolved){G(m,f,p);return}else m.next=f,Hl(m.update),m.update();else f.el=u.el,m.vnode=f},ne=(u,f,p,m,y,b,x)=>{const E=()=>{if(u.isMounted){let{next:S,bu:I,u:M,parent:O,vnode:B}=u,z=S,V;Qe(u,!1),S?(S.el=B.el,G(u,S,x)):S=B,I&&Dn(I),(V=S.props&&S.props.onVnodeBeforeUpdate)&&Se(V,O,S,B),Qe(u,!0);const Q=Rn(u),_e=u.subTree;u.subTree=Q,T(_e,Q,h(_e.el),qt(_e),u,y,b),S.el=Q.el,z===null&&Xl(u,Q.el),M&&de(M,y),(V=S.props&&S.props.onVnodeUpdated)&&de(()=>Se(V,O,S,B),y)}else{let S;const{el:I,props:M}=f,{bm:O,m:B,parent:z}=u,V=$t(f);if(Qe(u,!1),O&&Dn(O),!V&&(S=M&&M.onVnodeBeforeMount)&&Se(S,z,f),Qe(u,!0),I&&Pn){const Q=()=>{u.subTree=Rn(u),Pn(I,u.subTree,u,y,null)};V?f.type.__asyncLoader().then(()=>!u.isUnmounted&&Q()):Q()}else{const Q=u.subTree=Rn(u);T(null,Q,p,m,u,y,b),f.el=Q.el}if(B&&de(B,y),!V&&(S=M&&M.onVnodeMounted)){const Q=f;de(()=>Se(S,z,Q),y)}(f.shapeFlag&256||z&&$t(z.vnode)&&z.vnode.shapeFlag&256)&&u.a&&de(u.a,y),u.isMounted=!0,f=p=m=null}},_=u.effect=new vs(E,()=>Is(v),u.scope),v=u.update=()=>_.run();v.id=u.uid,Qe(u,!0),v()},G=(u,f,p)=>{f.component=u;const m=u.vnode.props;u.vnode=f,u.next=null,Ta(u,f.props,m,p),Pa(u,f.children,p),It(),Qs(),Ct()},K=(u,f,p,m,y,b,x,E,_=!1)=>{const v=u&&u.children,S=u?u.shapeFlag:0,I=f.children,{patchFlag:M,shapeFlag:O}=f;if(M>0){if(M&128){zt(v,I,p,m,y,b,x,E,_);return}else if(M&256){Je(v,I,p,m,y,b,x,E,_);return}}O&8?(S&16&&Re(v,y,b),I!==v&&d(p,I)):S&16?O&16?zt(v,I,p,m,y,b,x,E,_):Re(v,y,b,!0):(S&8&&d(p,""),O&16&&$(I,p,m,y,b,x,E,_))},Je=(u,f,p,m,y,b,x,E,_)=>{u=u||gt,f=f||gt;const v=u.length,S=f.length,I=Math.min(v,S);let M;for(M=0;M<I;M++){const O=f[M]=_?We(f[M]):Me(f[M]);T(u[M],O,p,null,y,b,x,E,_)}v>S?Re(u,y,b,!0,!1,I):$(f,p,m,y,b,x,E,_,I)},zt=(u,f,p,m,y,b,x,E,_)=>{let v=0;const S=f.length;let I=u.length-1,M=S-1;for(;v<=I&&v<=M;){const O=u[v],B=f[v]=_?We(f[v]):Me(f[v]);if(st(O,B))T(O,B,p,null,y,b,x,E,_);else break;v++}for(;v<=I&&v<=M;){const O=u[I],B=f[M]=_?We(f[M]):Me(f[M]);if(st(O,B))T(O,B,p,null,y,b,x,E,_);else break;I--,M--}if(v>I){if(v<=M){const O=M+1,B=O<S?f[O].el:m;for(;v<=M;)T(null,f[v]=_?We(f[v]):Me(f[v]),p,B,y,b,x,E,_),v++}}else if(v>M)for(;v<=I;)Pe(u[v],y,b,!0),v++;else{const O=v,B=v,z=new Map;for(v=B;v<=M;v++){const ge=f[v]=_?We(f[v]):Me(f[v]);ge.key!=null&&z.set(ge.key,v)}let V,Q=0;const _e=M-B+1;let dt=!1,ks=0;const At=new Array(_e);for(v=0;v<_e;v++)At[v]=0;for(v=O;v<=I;v++){const ge=u[v];if(Q>=_e){Pe(ge,y,b,!0);continue}let Ae;if(ge.key!=null)Ae=z.get(ge.key);else for(V=B;V<=M;V++)if(At[V-B]===0&&st(ge,f[V])){Ae=V;break}Ae===void 0?Pe(ge,y,b,!0):(At[Ae-B]=v+1,Ae>=ks?ks=Ae:dt=!0,T(ge,f[Ae],p,null,y,b,x,E,_),Q++)}const Ls=dt?Na(At):gt;for(V=Ls.length-1,v=_e-1;v>=0;v--){const ge=B+v,Ae=f[ge],Fs=ge+1<S?f[ge+1].el:m;At[v]===0?T(null,Ae,p,Fs,y,b,x,E,_):dt&&(V<0||v!==Ls[V]?Ze(Ae,p,Fs,2):V--)}}},Ze=(u,f,p,m,y=null)=>{const{el:b,type:x,transition:E,children:_,shapeFlag:v}=u;if(v&6){Ze(u.component.subTree,f,p,m);return}if(v&128){u.suspense.move(f,p,m);return}if(v&64){x.move(u,f,p,ft);return}if(x===he){s(b,f,p);for(let I=0;I<_.length;I++)Ze(_[I],f,p,m);s(u.anchor,f,p);return}if(x===Ln){j(u,f,p);return}if(m!==2&&v&1&&E)if(m===0)E.beforeEnter(b),s(b,f,p),de(()=>E.enter(b),y);else{const{leave:I,delayLeave:M,afterLeave:O}=E,B=()=>s(b,f,p),z=()=>{I(b,()=>{B(),O&&O()})};M?M(b,B,z):z()}else s(b,f,p)},Pe=(u,f,p,m=!1,y=!1)=>{const{type:b,props:x,ref:E,children:_,dynamicChildren:v,shapeFlag:S,patchFlag:I,dirs:M}=u;if(E!=null&&ss(E,null,p,u,!0),S&256){f.ctx.deactivate(u);return}const O=S&1&&M,B=!$t(u);let z;if(B&&(z=x&&x.onVnodeBeforeUnmount)&&Se(z,f,u),S&6)Xr(u.component,p,m);else{if(S&128){u.suspense.unmount(p,m);return}O&&Ge(u,null,f,"beforeUnmount"),S&64?u.type.remove(u,f,p,y,ft,m):v&&(b!==he||I>0&&I&64)?Re(v,f,p,!1,!0):(b===he&&I&384||!y&&S&16)&&Re(_,f,p),m&&$s(u)}(B&&(z=x&&x.onVnodeUnmounted)||O)&&de(()=>{z&&Se(z,f,u),O&&Ge(u,null,f,"unmounted")},p)},$s=u=>{const{type:f,el:p,anchor:m,transition:y}=u;if(f===he){Yr(p,m);return}if(f===Ln){P(u);return}const b=()=>{o(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:x,delayLeave:E}=y,_=()=>x(p,b);E?E(u.el,b,_):_()}else b()},Yr=(u,f)=>{let p;for(;u!==f;)p=g(u),o(u),u=p;o(f)},Xr=(u,f,p)=>{const{bum:m,scope:y,update:b,subTree:x,um:E}=u;m&&Dn(m),y.stop(),b&&(b.active=!1,Pe(x,u,f,p)),E&&de(E,f),de(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Re=(u,f,p,m=!1,y=!1,b=0)=>{for(let x=b;x<u.length;x++)Pe(u[x],f,p,m,y)},qt=u=>u.shapeFlag&6?qt(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el),Os=(u,f,p)=>{u==null?f._vnode&&Pe(f._vnode,null,null,!0):T(f._vnode||null,u,f,null,null,null,p),Qs(),dr(),f._vnode=u},ft={p:T,um:Pe,m:Ze,r:$s,mt:me,mc:$,pc:K,pbc:Y,n:qt,o:e};let Cn,Pn;return t&&([Cn,Pn]=t(ft)),{render:Os,hydrate:Cn,createApp:wa(Os,Cn)}}function Qe({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ma(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $r(e,t,n=!1){const s=e.children,o=t.children;if(N(s)&&N(o))for(let r=0;r<s.length;r++){const i=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=We(o[r]),l.el=i.el),n||$r(i,l)),l.type===wn&&(l.el=i.el)}}function Na(e){const t=e.slice(),n=[0];let s,o,r,i,l;const a=e.length;for(s=0;s<a;s++){const c=e[s];if(c!==0){if(o=n[n.length-1],e[o]<c){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)l=r+i>>1,e[n[l]]<c?r=l+1:i=l;c<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}const Da=e=>e.__isTeleport,he=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),be=Symbol.for("v-cmt"),Ln=Symbol.for("v-stc"),Lt=[];let Te=null;function ve(e=!1){Lt.push(Te=e?null:[])}function Ra(){Lt.pop(),Te=Lt[Lt.length-1]||null}let Ht=1;function uo(e){Ht+=e}function Or(e){return e.dynamicChildren=Ht>0?Te||gt:null,Ra(),Ht>0&&Te&&Te.push(e),e}function Ft(e,t,n,s,o,r){return Or(Fe(e,t,n,s,o,r,!0))}function ut(e,t,n,s,o){return Or(se(e,t,n,s,o,!0))}function un(e){return e?e.__v_isVNode===!0:!1}function st(e,t){return e.type===t.type&&e.key===t.key}const xn="__vInternal",kr=({key:e})=>e??null,sn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||fe(e)||L(e)?{i:ce,r:e,k:t,f:!!n}:e:null);function Fe(e,t=null,n=null,s=0,o=null,r=e===he?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&kr(t),ref:t&&sn(t),scopeId:mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ce};return l?(Ss(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=ee(n)?8:16),Ht>0&&!i&&Te&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Te.push(a),a}const se=$a;function $a(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===Jl)&&(e=be),un(e)){const l=Ye(e,t,!0);return n&&Ss(l,n),Ht>0&&!r&&Te&&(l.shapeFlag&6?Te[Te.indexOf(e)]=l:Te.push(l)),l.patchFlag|=-2,l}if(za(e)&&(e=e.__vccOpts),t){t=Oa(t);let{class:l,style:a}=t;l&&!ee(l)&&(t.class=De(l)),J(a)&&(lr(a)&&!N(a)&&(a=oe({},a)),t.style=Le(a))}const i=ee(e)?1:Zl(e)?128:Da(e)?64:J(e)?4:L(e)?2:0;return Fe(e,t,n,s,o,i,r,!0)}function Oa(e){return e?lr(e)||xn in e?oe({},e):e:null}function Ye(e,t,n=!1){const{props:s,ref:o,patchFlag:r,children:i}=e,l=t?La(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&kr(l),ref:t&&t.ref?n&&o?N(o)?o.concat(sn(t)):[o,sn(t)]:sn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ye(e.ssContent),ssFallback:e.ssFallback&&Ye(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ka(e=" ",t=0){return se(wn,null,e,t)}function Lr(e="",t=!1){return t?(ve(),ut(be,null,e)):se(be,null,e)}function Me(e){return e==null||typeof e=="boolean"?se(be):N(e)?se(he,null,e.slice()):typeof e=="object"?We(e):se(wn,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ye(e)}function Ss(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Ss(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(xn in t)?t._ctx=ce:o===3&&ce&&(ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ce},n=32):(t=String(t),s&64?(n=16,t=[ka(t)]):n=8);e.children=t,e.shapeFlag|=n}function La(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=De([t.class,s.class]));else if(o==="style")t.style=Le([t.style,s.style]);else if(hn(o)){const r=t[o],i=s[o];i&&r!==i&&!(N(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function Se(e,t,n,s=null){Ee(e,t,7,[n,s])}const Fa=Pr();let Ba=0;function ja(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Fa,r={uid:Ba++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ul(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mr(s,o),emitsOptions:pr(s,o),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Kl.bind(null,r),e.ce&&e.ce(r),r}let ie=null;const Ua=()=>ie||ce;let Ms,ht,fo="__VUE_INSTANCE_SETTERS__";(ht=Wn()[fo])||(ht=Wn()[fo]=[]),ht.push(e=>ie=e),Ms=e=>{ht.length>1?ht.forEach(t=>t(e)):ht[0](e)};const xt=e=>{Ms(e),e.scope.on()},at=()=>{ie&&ie.scope.off(),Ms(null)};function Fr(e){return e.vnode.shapeFlag&4}let Vt=!1;function Ha(e,t=!1){Vt=t;const{props:n,children:s}=e.vnode,o=Fr(e);xa(e,n,o,t),Ca(e,s);const r=o?Va(e,t):void 0;return Vt=!1,r}function Va(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ar(new Proxy(e.ctx,ma));const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?Ka(e):null;xt(e),It();const r=ze(s,e,0,[e.props,o]);if(Ct(),at(),Wo(r)){if(r.then(at,at),t)return r.then(i=>{ho(e,i,t)}).catch(i=>{vn(i,e,0)});e.asyncDep=r}else ho(e,r,t)}else Br(e,t)}function ho(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=cr(t)),Br(e,n)}let po;function Br(e,t,n){const s=e.type;if(!e.render){if(!t&&po&&!s.render){const o=s.template||Ps(e).template;if(o){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,c=oe(oe({isCustomElement:r,delimiters:l},i),a);s.render=po(o,c)}}e.render=s.render||Ce}{xt(e),It();try{ga(e)}finally{Ct(),at()}}}function Wa(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function Ka(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Wa(e)},slots:e.slots,emit:e.emit,expose:t}}function Tn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(cr(ar(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ot)return Ot[n](e)},has(t,n){return n in t||n in Ot}}))}function za(e){return L(e)&&"__vccOpts"in e}const jr=(e,t)=>Fl(e,t,Vt);function Ur(e,t,n){const s=arguments.length;return s===2?J(t)&&!N(t)?un(t)?se(e,null,[t]):se(e,t):se(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&un(n)&&(n=[n]),se(e,t,n))}const qa=Symbol.for("v-scx"),Ya=()=>kt(qa),Xa="3.3.9",Ja="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,mo=ot&&ot.createElement("template"),Za={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?ot.createElementNS(Ja,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{mo.innerHTML=s?`<svg>${e}</svg>`:e;const l=mo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ue="transition",St="animation",Wt=Symbol("_vtc"),Kt=(e,{slots:t})=>Ur(na,Ga(e),t);Kt.displayName="Transition";const Hr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Kt.props=oe({},vr,Hr);const et=(e,t=[])=>{N(e)?e.forEach(n=>n(...t)):e&&e(...t)},go=e=>e?N(e)?e.some(t=>t.length>1):e.length>1:!1;function Ga(e){const t={};for(const A in e)A in Hr||(t[A]=e[A]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=i,appearToClass:d=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,C=Qa(o),T=C&&C[0],D=C&&C[1],{onBeforeEnter:k,onEnter:F,onEnterCancelled:j,onLeave:P,onLeaveCancelled:W,onBeforeAppear:re=k,onAppear:te=F,onAppearCancelled:$=j}=t,q=(A,Z,me)=>{tt(A,Z?d:l),tt(A,Z?c:i),me&&me()},Y=(A,Z)=>{A._isLeaving=!1,tt(A,h),tt(A,w),tt(A,g),Z&&Z()},le=A=>(Z,me)=>{const Pt=A?te:F,ne=()=>q(Z,A,me);et(Pt,[Z,ne]),yo(()=>{tt(Z,A?a:r),He(Z,A?d:l),go(Pt)||vo(Z,s,T,ne)})};return oe(t,{onBeforeEnter(A){et(k,[A]),He(A,r),He(A,i)},onBeforeAppear(A){et(re,[A]),He(A,a),He(A,c)},onEnter:le(!1),onAppear:le(!0),onLeave(A,Z){A._isLeaving=!0;const me=()=>Y(A,Z);He(A,h),nc(),He(A,g),yo(()=>{A._isLeaving&&(tt(A,h),He(A,w),go(P)||vo(A,s,D,me))}),et(P,[A,me])},onEnterCancelled(A){q(A,!1),et(j,[A])},onAppearCancelled(A){q(A,!0),et($,[A])},onLeaveCancelled(A){Y(A),et(W,[A])}})}function Qa(e){if(e==null)return null;if(J(e))return[Fn(e.enter),Fn(e.leave)];{const t=Fn(e);return[t,t]}}function Fn(e){return nl(e)}function He(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Wt]||(e[Wt]=new Set)).add(t)}function tt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Wt];n&&(n.delete(t),n.size||(e[Wt]=void 0))}function yo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ec=0;function vo(e,t,n,s){const o=e._endId=++ec,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:i,timeout:l,propCount:a}=tc(e,t);if(!i)return s();const c=i+"end";let d=0;const h=()=>{e.removeEventListener(c,g),r()},g=w=>{w.target===e&&++d>=a&&h()};setTimeout(()=>{d<a&&h()},l+1),e.addEventListener(c,g)}function tc(e,t){const n=window.getComputedStyle(e),s=C=>(n[C]||"").split(", "),o=s(`${Ue}Delay`),r=s(`${Ue}Duration`),i=Eo(o,r),l=s(`${St}Delay`),a=s(`${St}Duration`),c=Eo(l,a);let d=null,h=0,g=0;t===Ue?i>0&&(d=Ue,h=i,g=r.length):t===St?c>0&&(d=St,h=c,g=a.length):(h=Math.max(i,c),d=h>0?i>c?Ue:St:null,g=d?d===Ue?r.length:a.length:0);const w=d===Ue&&/\b(transform|all)(,|$)/.test(s(`${Ue}Property`).toString());return{type:d,timeout:h,propCount:g,hasTransform:w}}function Eo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>bo(n)+bo(e[s])))}function bo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function nc(){return document.body.offsetHeight}function sc(e,t,n){const s=e[Wt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ns=Symbol("_vod"),Ds={beforeMount(e,{value:t},{transition:n}){e[Ns]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Mt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Mt(e,!0),s.enter(e)):s.leave(e,()=>{Mt(e,!1)}):Mt(e,t))},beforeUnmount(e,{value:t}){Mt(e,t)}};function Mt(e,t){e.style.display=t?e[Ns]:"none"}function oc(e,t,n){const s=e.style,o=ee(n);if(n&&!o){if(t&&!ee(t))for(const r in t)n[r]==null&&os(s,r,"");for(const r in n)os(s,r,n[r])}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),Ns in e&&(s.display=r)}}const _o=/\s*!important$/;function os(e,t,n){if(N(n))n.forEach(s=>os(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=rc(e,t);_o.test(n)?e.setProperty(Tt(s),n.replace(_o,""),"important"):e[s]=n}}const wo=["Webkit","Moz","ms"],Bn={};function rc(e,t){const n=Bn[t];if(n)return n;let s=bt(t);if(s!=="filter"&&s in e)return Bn[t]=s;s=qo(s);for(let o=0;o<wo.length;o++){const r=wo[o]+s;if(r in e)return Bn[t]=r}return t}const xo="http://www.w3.org/1999/xlink";function ic(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(xo,t.slice(6,t.length)):e.setAttributeNS(xo,t,n);else{const r=al(t);n==null||r&&!Yo(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function lc(e,t,n,s,o,r,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,o,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const c=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Yo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function ac(e,t,n,s){e.addEventListener(t,n,s)}function cc(e,t,n,s){e.removeEventListener(t,n,s)}const To=Symbol("_vei");function uc(e,t,n,s,o=null){const r=e[To]||(e[To]={}),i=r[t];if(s&&i)i.value=s;else{const[l,a]=fc(t);if(s){const c=r[t]=pc(s,o);ac(e,l,c,a)}else i&&(cc(e,l,i,a),r[t]=void 0)}}const Io=/(?:Once|Passive|Capture)$/;function fc(e){let t;if(Io.test(e)){t={};let s;for(;s=e.match(Io);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let jn=0;const dc=Promise.resolve(),hc=()=>jn||(dc.then(()=>jn=0),jn=Date.now());function pc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ee(mc(s,n.value),t,5,[s])};return n.value=e,n.attached=hc(),n}function mc(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Co=/^on[a-z]/,gc=(e,t,n,s,o=!1,r,i,l,a)=>{t==="class"?sc(e,s,o):t==="style"?oc(e,n,s):hn(t)?ps(t)||uc(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yc(e,t,s,o))?lc(e,t,s,r,i,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ic(e,t,s,o))};function yc(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Co.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Co.test(t)&&ee(n)?!1:t in e}const vc=oe({patchProp:gc},Za);let Po;function Ec(){return Po||(Po=Aa(vc))}const bc=(...e)=>{const t=Ec().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=_c(s);if(!o)return;const r=t._component;!L(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function _c(e){return ee(e)?document.querySelector(e):e}const wc="_root_3unp2_2",xc={root:wc},In=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Tc={props:{active:Boolean,x:Number,y:Number},computed:{transform(){return this.scale!==void 0?`transform: translate(${this.x}px, ${this.y}px)`:`transform: translate(${this.x}px, ${this.y}px)`}}};function Ic(e,t,n,s,o,r){return ve(),ut(Kt,{name:"fade"},{default:wt(()=>[Cs(Fe("div",{class:De(e.$style.root),style:Le(r.transform)},[pa(e.$slots,"default")],6),[[Ds,n.active]])]),_:3})}const Cc={$style:xc},Ao=In(Tc,[["render",Ic],["__cssModules",Cc]]),Pc="_root_1rzf8_2",Ac="_rootTitle_1rzf8_13",Sc={root:Pc,rootTitle:Ac},Mc={inject:["setFocus","getSurface"],props:{meta:Object,isFocus:Boolean},computed:{polygonPath(){const e=this.meta.polygonPath;let t=0,n=e.length,s="M ";for(;t<n;)s+=`${e[t]} ${e[t+1]}`,t+=2,s+=t===n?" Z":" L ";return s},viewBox(){const e=this.meta.viewbox;return`${e.x} ${e.y} ${e.width} ${e.height}`},width(){return this.meta.viewbox.width},height(){return this.meta.viewbox.height},title(){var e,t;return((t=(e=this.meta)==null?void 0:e.source)==null?void 0:t.tag)||""}},methods:{}},Nc=["focus"],Dc=["width","height"],Rc=["d"];function $c(e,t,n,s,o,r){return ve(),Ft("div",{class:De(e.$style.root),focus:n.isFocus},[n.meta.active?(ve(),Ft(he,{key:0},[Fe("div",{class:De(e.$style.rootTitle)},cl(r.title),3),(ve(),Ft("svg",{width:r.width,height:r.height,xmlns:"http://www.w3.org/2000/svg"},[Fe("path",{fill:"none","stroke-width":"3",stroke:"blue",d:r.polygonPath},null,8,Rc)],8,Dc))],64)):Lr("",!0)],10,Nc)}const Oc={$style:Sc},So=In(Mc,[["render",$c],["__cssModules",Oc]]),kc="_root_s5oev_2",Lc="_seg_s5oev_13",Fc={root:kc,seg:Lc},Bc={props:{segments:Object},data(){return{useTransition:!1}},computed:{active(){return this.segments.active},transform(){if(this.active){const e=this.segments.segments,t=e[0]===e[2],n=this.useTransition?"transition: all .3s;":"";return t?`${n}transform: translate(${e[0]}px, ${e[1]}px)`:`${n}transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(0px, 0px)"},transformSeg(){if(this.active){const e=this.segments.segments;return e[0]===e[2]?`transform: scale(3, ${e[3]-e[1]})`:`transform: scale(${e[2]-e[0]}, 3)`}return"transform: scale(0, 0);"}},watch:{active(e){console.log(e),this.$nextTick(()=>{this.useTransition=e})}}};function jc(e,t,n,s,o,r){return ve(),ut(Kt,{name:"fade"},{default:wt(()=>[Cs(Fe("div",{class:De(e.$style.root),style:Le(r.transform)},[Fe("div",{class:De(e.$style.seg),style:Le(r.transformSeg)},null,6)],6),[[Ds,r.active]])]),_:1})}const Uc={$style:Fc},Hc=In(Bc,[["render",jc],["__cssModules",Uc]]),Vc="_root_14orw_2",Wc="_rect_14orw_13",Kc={root:Vc,rect:Wc},zc={props:{meta:Object},computed:{active(){return this.meta.active},position(){if(this.active){const e=this.meta.rect;return`transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(-999px, 0px)"},dimension(){if(this.active){const e=this.meta.rect;return`transform: scale(${e[2]}, ${e[3]})`}return"transform: scale(0, 0)"}}};function qc(e,t,n,s,o,r){return ve(),ut(Kt,{name:"fade"},{default:wt(()=>[Cs(Fe("div",{class:De(e.$style.root),style:Le(r.position)},[Fe("div",{class:De(e.$style.rect),style:Le(r.dimension)},null,6)],6),[[Ds,r.active]])]),_:1})}const Yc={$style:Kc},Xc=In(zc,[["render",qc],["__cssModules",Yc]]),Jc={__name:"surface",setup(e){const n=kt("getSurface")(),{highlight_elem:s,targets:o,highlight_seg:r,highlight_empty_slot:i}=n,l=jr(()=>({position:"relative",left:0}));return(a,c)=>(ve(),Ft("div",{style:Le(l.value)},[(ve(!0),Ft(he,null,ha($e(o),d=>(ve(),ut(Ao,{x:d.position[0],y:d.position[1],active:!0},{default:wt(()=>[se(So,{meta:d,isFocus:!0},null,8,["meta"])]),_:2},1032,["x","y"]))),256)),se(Hc,{segments:$e(r)},null,8,["segments"]),se(Xc,{meta:$e(i)},null,8,["meta"]),$e(s).active?(ve(),ut(Ao,{key:0,x:$e(s).position[0],y:$e(s).position[1],active:$e(s).active},{default:wt(()=>[se(So,{meta:$e(s),isFocus:!1},null,8,["meta"])]),_:1},8,["x","y","active"])):Lr("",!0)],4))}};class Zc{constructor(){R(this,"targets",rt([]));R(this,"highlight_elem",rt({type:void 0,active:!1,rects:[],polygonPath:[],viewbox:[],source:null}));R(this,"highlight_seg",rt({active:!1,segments:[]}));R(this,"highlight_empty_slot",rt({active:!1,rect:[]}))}apply(t,n){this.ide=t,this.render=new Gc(this,n),this.render.init(),t.addEventListener("zoompan",s=>{s.detail.zoom&&(this.highlight_elem.active&&Object.assign(this.highlight_elem,{...this.resolveRects(this.highlight_elem.rects)}),this.targets.forEach(o=>{Object.assign(o,{...this.resolveRects(o.rects)})}))})}refresh(t){const n=[...this.targets,this.highlight_elem];t.forEach(s=>{const o=n.find(r=>tn(r.source,s.source));o&&Object.assign(o,this.resolveRects(s.rects))})}hasTarget(t){return this.targets.find(n=>tn(n.source,t))}_targetExist(t){return!!this.targets.find(s=>tn(s.source,t.source))}highlightElem(t){if(this._targetExist(t)){this.closeHighlightElem();return}tn(this.highlight_elem.source,t.source)||Object.assign(this.highlight_elem,{...t,...this.resolveRects(t.rects),active:!0})}getFocusNodes(){return this.targets.map(t=>H(t.source))}setFocus(t){if(!t){const s=this.targets.length;this.targets.splice(0,s);return}if(this._targetExist(t))return;this.closeHighlightElem();const n=this.targets.length;this.targets.splice(0,n,{...t,...this.resolveRects(t.rects),active:!0})}addFocus(t){this._targetExist(t)||this.targets.push({...t,...this.resolveRects(t.rects),active:!0})}closeHighlightElem(){this.highlight_elem.active&&Object.assign(this.highlight_elem,{active:!1,source:null})}resolveRects(t){const s=this.ide.scale;if(t.length===1){const{x:o,y:r,width:i,height:l}=t[0],a=[0,0,i*s,0,i*s,l*s,0,l*s];return{position:[o*s,r*s],polygonPath:a,viewbox:Qc(a)}}}highlightSeg(t,n){if(this.highlight_seg.active=t,t){const o=this.ide.scale;this.highlight_seg.segments[0]=n[0]*o,this.highlight_seg.segments[1]=n[1]*o,this.highlight_seg.segments[2]=n[2]*o,this.highlight_seg.segments[3]=n[3]*o}}highlightEmptySlot(t,n){if(this.highlight_empty_slot.active=t,t){const o=this.ide.scale;this.highlight_empty_slot.rect[0]=n[0]*o,this.highlight_empty_slot.rect[1]=n[1]*o,this.highlight_empty_slot.rect[2]=n[2]*o,this.highlight_empty_slot.rect[3]=n[3]*o}}closeAll(){this.closeHighlightElem(),this.highlightSeg(!1),this.highlightEmptySlot(!1)}}class Gc{constructor(t,n){this.surface=t,this.dom=n}init(){bc(this.renderFn()).mount(this.dom)}renderFn(){const t=this.surface;return{inheritAttrs:!1,setup(){return Ar("getSurface",()=>t),()=>Ur(Jc)}}}}function tn(e,t){return H(e)===H(t)}function Qc(e){if(e.length===0)return{width:0,height:0,x:0,y:0};let t=1/0,n=1/0,s=-1/0,o=-1/0,r=0;for(;r<e.length;){const i=e[r],l=e[r+1];i<t&&(t=i),i>s&&(s=i),l<n&&(n=l),l>o&&(o=l),r+=2}return{width:Math.max(s-t,10),height:Math.max(o-n,10),x:t,y:n}}class eu{constructor(){R(this,"proxies",new WeakMap)}registOrigin(t){const{origin:n,source:s}=t;if(!this.proxies.has(s.window))this.proxies.set(s.window,{postIframeMessage(o){s.postMessage(o,n)}});else{const o=this.proxies.get(s.window);Object.assign(o,{postIframeMessage(r){s.postMessage(r,n)}})}this._run(s.window)}registIDE(t,n){if(!this.proxies.has(n.contentWindow))this.proxies.set(n.contentWindow,{ide:t});else{const s=this.proxies.get(n.contentWindow);Object.assign(s,{ide:t})}this._run(n.contentWindow)}_run(t){const n=this.proxies.get(t);n.ide&&n.postIframeMessage&&(n.ide.init(n.postIframeMessage),n.ready=!0)}listen(){window.addEventListener("message",t=>{const n=t.data;n.type==="Event"&&n.name==="proxyReady"?this.registOrigin(t):this.distribute(t)})}distribute(t){const n=t.source;if(this.proxies.has(n.window)){const s=this.proxies.get(n.window);s.ready&&s.ide.onMessage(t)}}}const Vr=new eu;Vr.listen();function fn(e,t){let n=`oneTripToPreview-${fn.uuid++}`,s;const o=new Promise(i=>{s=i}),r=i=>{const l=i.data;l.uuid===n&&(s(l.response),window.removeEventListener("message",r))};return window.addEventListener("message",r),e({uuid:n,...t}),o}fn.uuid=0;class tu extends EventTarget{constructor(n){super();R(this,"initialZoom",1);R(this,"padding",20);R(this,"maxZoom",2);R(this,"minZoom",.5);R(this,"deviceWidth",0);R(this,"deviceHeight","auto");R(this,"position",{x:0,y:0});R(this,"scale",1);R(this,"_registedMethods",new Map);R(this,"postIframeMessage",null);this.simulator=n.simulator,this.surface=new Zc,this.getSourceByNodePath=n.getSourceByNodePath,this.preRegistMethods()}$mount(n){const s=nu(),o=su(),r=ou(),i=ru();s.appendChild(o),s.appendChild(r),o.appendChild(i),this.domCache={viewport:s,viewcontent:o,groundAnchor:r,iframe:i},n.appendChild(s),i.addEventListener("load",()=>{console.log("onload!"),Vr.registIDE(this,i)}),o.style.height=`${s.getBoundingClientRect().height}px`,this.simulator.load(i)}init(n){this.postIframeMessage=n;const s=l=>{console.log("resized!",this.simulator),this.domCache.viewcontent.style.height=`${l.scrollHeight}px`},r=(()=>{let l=[];return(a,c)=>{a==="wheel"&&l.length===3&&l.every(d=>d==="wheel")&&(console.log("onWheel"),this.onWheelInFrame(c)),l.unshift(a),l.length>3&&(l.length=3)}})().bind(this);this.onMessage=l=>{const a=l.data;if(a.type==="Event")switch(a.name){case"wheel":case"scroll":r(a.name,a.payload.eventMeta);break;case"dragstart":this.dispatchEvent(new CustomEvent("frame:dragstart",{detail:a.payload}));break;case"refreshBoundings":this.refreshBoundings(a.payload);break;case"mousemove":this.highlightNode(a.payload.elementInfo);break;case"dragover":this.dispatchEvent(new CustomEvent("frame:dragover",{detail:a.payload}));break;case"dragend":this.dispatchEvent(new CustomEvent("frame:dragend",{detail:a.payload}));break;case"hesitateWhenDragging":this.dispatchEvent(new CustomEvent("frame:hesitateWhenDragging",{detail:a.payload}));break;case"click":this._focusOnNode(a.payload);break;case"dblclick":this.dispatchEvent(new CustomEvent("frame:requestEditContent",{detail:a.payload}));break;case"contentchange":this.dispatchEvent(new CustomEvent("frame:contentChange",{detail:a.payload}));break;case"resizeObserver":s(a.payload);break}if(a.type==="Method"){const c=this._registedMethods.get(a.name);if(c){const d=a.uuid;c(h=>{n({type:"Response",result:"success",uuid:d,response:h},l.origin)},h=>{n({type:"Response",result:"failed",uuid:d,err:h},l.origin)},a.payload)}}};const i=this.domCache.viewport;i.addEventListener("mousemove",l=>{l.target===i&&this.surface.closeHighlightElem()}),i.addEventListener("click",l=>{l.target===i&&(this.surface.closeAll(),this.surface.setFocus())}),i.addEventListener("wheel",this.onWheelInViewport.bind(this),{passive:!1}),this.surface.apply(this,this.domCache.groundAnchor),this.dispatchEvent(new CustomEvent("ready",{detail:{target:this.iframe}}))}preRegistMethods(){}refreshBoundings(n){const s=n.elementInfos;s.forEach(o=>{o.source=this.getSourceByNodePath(o.target)}),this.surface.refresh(s)}highlightNode(n){const{target:s,rects:o}=n;if(s){const r=this.getSourceByNodePath(s);this.surface.highlightElem({source:r,rects:o})}else this.surface.closeHighlightElem()}closeHighlight(){this.surface.closeHighlightElem()}async highlightNodeByNodePath(n){const s=await this.getElementInfoByNodePath(n);this.highlightNode(s)}clearFocus(){this.surface.setFocus()}_focusOnNode(n){const{target:s,rects:o}=n.elementInfo,{shiftKey:r}=n.eventMeta;if(s){this.surface.closeHighlightElem();const i=this.getSourceByNodePath(s);r?this.surface.addFocus({source:i,rects:o}):this.surface.setFocus({source:i,rects:o})}else this.surface.setFocus()}_calculateToViewport(n,s){const o=this.scale,r=this.position;s[0]=n[0]*o+r.x,s[1]=n[1]*o+r.y}syncGroundAnchor(){const n=[0,0];this._calculateToViewport(n,n),this.domCache.groundAnchor.style.transform=`translate(${n[0]}px, ${n[1]}px)`}resolveEventOffsetToViewport(n){const{clientX:s,clientY:o}=n,r=[s,o];return this._calculateToViewport(r,r),r}onWheelInViewport(n){n.preventDefault();const[s,o]=this.resolveEventOffset(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,o)}onWheelInFrame(n){const[s,o]=this.resolveEventOffsetToViewport(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,o)}_onWheel(n,s,o,r,i){n?(o=-o,this.zoomHandler(r,i,o)):this.panHandler(-s,-o)}resolveEventOffset(n){const{clientX:s,clientY:o}=n,{x:r,y:i}=this.domCache.viewport.getBoundingClientRect();return[s-r,o-i]}zoomHandler(n,s,o){if(this._zooming)return;this._zooming=!0;const r=this.scale;let i=r;const l=o>0?1.05:1/1.05;i*=l,i=Math.min(this.maxZoom,Math.max(this.minZoom,i));const{x:a,y:c}=this.position,d=i/r,h=n-(n-a)*d,g=s-(s-c)*d;this.scale=i,Object.assign(this.position,{x:h,y:g}),this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!0}})),this._zooming=!1}panHandler(n,s){this._panning||(this._panning=!0,this.position.x+=n,this.position.y+=s,this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!1}})),this._panning=!1)}_resetTransform(){const{x:n,y:s}=this.position,o=this.scale,r=`matrix(${o}, 0, 0, ${o}, ${n}, ${s})`;this.domCache.viewcontent.style[Yi]=r,this.syncGroundAnchor()}_resolveEventOffsetInFrame(n){const{clientX:s,clientY:o}=n,{x:r,y:i}=this.position,l=this.scale,a=this.domCache.viewport.getBoundingClientRect();return[s*l+r+a.x,o*l+i+a.y]}async doDrag(n,s,o,r,i){this.postIframeMessage({type:"Event",name:"startDragging",payload:{nodePaths:s}});const l=document.importNode(n);l.style.position="fixed",l.style["pointer-events"]="none",document.body.appendChild(l),o&&await o();const a=w=>{if(r.execute)return;r.execute=!0;const[C,T]=this._resolveEventOffsetInFrame(w.detail.eventMeta);l.style.left=`${C}px`,l.style.top=`${T}px`,r({elementInfo:w.detail.elementInfo,eventMeta:w.detail.eventMeta,inFrame:!0,notAllowed:w.detail.notAllowed},c)};function c(){r.execute=!1}const d=w=>{if(r.execute)return;r.execute=!0;const{clientX:C,clientY:T}=w;l.style.left=`${C}px`,l.style.top=`${T}px`,r({elementInfo:null,eventMeta:w,inFrame:!1,notAllowed:!0},c)},h=async w=>{l.remove(),this.removeEventListener("frame:dragend",h),this.removeEventListener("frame:dragover",a),this.removeEventListener("frame:hesitateWhenDragging",g),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",h),i&&await i(),this.postIframeMessage({type:"Event",name:"stopDragging"})},g=w=>{this.surface.closeAll()};this.addEventListener("frame:dragend",h),this.addEventListener("frame:dragover",a),this.addEventListener("frame:hesitateWhenDragging",g),document.addEventListener("mousemove",d),document.addEventListener("mouseup",h)}doEditContent(n){this.postIframeMessage({type:"Method",name:"editContent",payload:{nodePath:n}})}setCursorInFrame(n){this.postIframeMessage({type:"Method",name:"setCursor",payload:{cursor:n}})}async getElementInfoByNodePath(n){return await fn(this.postIframeMessage,{type:"Method",name:"getElementInfoByNodePath",payload:{nodePath:n}})}async getElementsInfoByNodePath(n){return await fn(this.postIframeMessage,{type:"Method",name:"getElementsInfoByNodePath",payload:{nodePaths:n}})}startObserveRootElem(n){this.postIframeMessage({type:"Method",name:"startObserveRootNodeSize",payload:{selector:n}})}setElementsTemporaryStyle(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryStyle",payload:n})}setElementsTemporaryAttribute(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryAttribute",payload:n})}makeDraggingElemMove(n){this.postIframeMessage({type:"Event",name:"makeDraggingElemMove",payload:n})}registMethod(n,s){const{isAsync:o,body:r}=s,i=o?async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const d=await r.call(this,...c);l(d)}catch(d){a(d)}finally{i.execute=!1}}}:async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const d=r.call(this,...c);l(d)}catch(d){a(d)}finally{i.execute=!1}}};this._registedMethods.set(n,i)}}function nu(){return dn({tag:"div",style:{position:"relative",left:0,top:0,width:"100%",height:"100%","user-select":"none",overflow:"hidden",background:"rgba(0,0,0,0.1)"}})}function su(){return dn({tag:"div",style:{position:"absolute",top:0,left:0,transformOrigin:"top left",width:"100%",overflow:"hidden",background:"#fff",userSelect:"none"}})}function ou(){return dn({tag:"div",style:{position:"absolute",left:0,top:0,width:0,height:0}})}function ru(){return dn({tag:"iframe",style:{width:"100%",height:"100%",border:"none"},attributes:{scrolling:"no"}})}const Mo={[Ie.ROW]:{getSegs:ko,shiftHighlighter:Lo},[Ie.COLUMN]:{getSegs:Oo,shiftHighlighter:Fo},[Ie.AUTO]:{getSegs:wi,shiftHighlighter:_i}},pt={PRE:"pre",AFTER:"after"};function iu(e,t){t.forEach(n=>{e.addChild(n)})}function lu(e,t){let n=e;const s=e.parentNode,o=t.slice();for(;o.length;){const r=o.pop();s.insertNodeBefore(n,r),n=r}}function au(e,t){let n=e;const s=e.parentNode,o=t.slice();for(;o.length;){const r=o.shift();s.insertNodeAfter(n,r),n=r}}function cu(e,t){const n={};return t.forEach(s=>{s in e&&delete e[s]}),n}function Wr(e){var t;if((t=e.parentNode)!=null&&t.isAbsolute){const n=on(e.staticStyle);cu(n,["left","right","top","bottom"]),e.staticStyle=Vn(n)}}function Rs(e){e.forEach(t=>{Wr(t)})}async function uu(e,t,n,s,o){var g;const r=await e.getElementsInfoByNodePath(s);let{getSegs:i,shiftHighlighter:l}=Mo[o],a=1/0,c,d,h;if(s.forEach(w=>{r[w].rects.forEach(T=>{i(T,r[w]).forEach((k,F)=>{const j=Ws(n,k);j<a&&(a=j,c=k,d=w,h=F===0?pt.PRE:pt.AFTER)})})}),t){const w=t.nodePath,C=((g=t.parentNode.elementInfo)==null?void 0:g.direction)||Ie.AUTO,{getSegs:T,shiftHighlighter:D}=Mo[C],k=await e.getElementInfoByNodePath(w),F=k.rects[0];T(F,k).forEach((P,W)=>{const re=Ws(n,P);re<a&&(a=re,c=P,d=w,h=W===0?pt.PRE:pt.AFTER,l=D)})}return l(c,h===pt.PRE?1.5:-1.5),{nearestSeg:c,nodepath:d,loc:h}}const fu={dragover(e,t,n){t.nodePath="",t.loc="",e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()},drop(e,t,n,s){e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()}},du=e=>({dragover(t,n,s){const o=s.elementInfo,r=xi(o.rects[0]);t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!0,r),t.highlightNodeByNodePath(o.target),n.nodePath=o.target,t.setCursorInFrame("copy")},drop(t,n,s,o){const r=Xe(e,n.nodePath);r&&(Rs(s),iu(r,s)),t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!1),t.closeHighlight(),o()}});async function Kr(e,t,n,s,o,r){const{nearestSeg:i,nodepath:l,loc:a}=await uu(e,t,s,o,r);e.surface.highlightSeg(!0,i),e.surface.highlightEmptySlot(!1),t?e.highlightNodeByNodePath(t.nodePath):e.closeHighlight(),n.nodePath=l,n.loc=a,e.setCursorInFrame("copy")}function zr(e,t,n){t===pt.PRE?lu(e,n):au(e,n)}const No=e=>({async dragover(t,n,s){const o=[s.eventMeta.clientX,s.eventMeta.clientY],r=e.elements.map(i=>i.nodePath);r.length>0&&await Kr(t,null,n,o,r,Ie.AUTO)},drop(t,n,s,o){const r=Xe(e,n.nodePath);r&&(Rs(s),zr(r,n.loc,s)),t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!1),t.closeHighlight(),o()}}),hu=(e,t,n)=>({async dragover(s,o,r){const i=[r.eventMeta.clientX,r.eventMeta.clientY],l=t.elements.filter(c=>!n.includes(c)).map(c=>c.nodePath),a=(t==null?void 0:t.direction)||Ie.AUTO;l.length>0&&await Kr(s,t,o,i,l,a)},drop(s,o,r,i){const l=Xe(e,o.nodePath);l&&(Rs(r),zr(l,o.loc,r)),s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight(),i()}}),pu=(e,t,n)=>({async dragover(s,o,r){o.nodePath=t.nodePath,o.toCoord=[r.eventMeta.clientX,r.eventMeta.clientY],s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.highlightNodeByNodePath(t.nodePath)},async drop(s,o,r,i){const l=Xe(e,o.nodePath);if(l){const a=o.movingNodeInfos,d=(await s.getElementInfoByNodePath(o.nodePath)).rects[0];r.forEach(h=>{if(h.parentNode===l){const g=o.toCoord[0]-o.fromCoord[0],w=o.toCoord[1]-o.fromCoord[1],C=a[h.nodePath];if(C){const T=C.rects[0],D=Object.assign({...on(h.staticStyle),left:`${T.x-d.x+g}px`,top:`${T.y-d.y+w}px`});h.staticStyle=Vn(D),h.updateComponentKey()}}else{Wr(h);const g=Object.assign({...on(h.staticStyle),left:`${o.toCoord[0]-d.x}px`,top:`${o.toCoord[1]-d.y}px`});l.addChild(h),h.staticStyle=Vn(g)}s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight()}),i()}}});function mu(e,t,n){if(e.notAllowed)return fu;if(e.inFrame){const s=e.elementInfo;if(s!=null&&s.isEmptySlot)return du(t);if(s!=null&&s.target){const o=Xe(t,s.target);if(o){const r=o.isContainer?o:o.parentNode;return r.isRoot?No(t):r!=null&&r.isAbsolute?pu(t,r):hu(t,r,n)}}else return No(t)}}function gu(e,t,n){return async(s,o,r)=>{const i=r.map(h=>h.nodePath);o.fromCoord=[n.clientX,n.clientY],o.fromNodePath=t.target,o.fromAbsolute=!0;const l=await s.getElementsInfoByNodePath(i);o.movingNodeInfos=l;const c=Xe(e,t.target).parentNode,d={nodePaths:[]};r.forEach(h=>{if(h.parentNode===c){const g=h.nodePath;d.nodePaths.push(g)}}),d.nodePaths.length>0&&s.makeDraggingElemMove(d)}}function yu(e,t,n){if(t!=null&&t.target){const s=Xe(e,t.target);if(s){const o=s.parentNode;if(o!=null&&o.isAbsolute)return gu(e,t,n)}}return null}class vu{constructor(t){R(this,"_UILibModel",null);R(this,"source",null);R(this,"_makeRootUIElement",null);R(this,"_makeUIElement",null);this.source=t}useUI({makeRootUIElement:t,makeUIElement:n}){this._makeRootUIElement=t,this._makeUIElement=n}refresh(){this._UILibModel=this._makeRootUIElement(this.source)}genCode(){return this._UILibModel.renderIDE()}getRoot(){return this._UILibModel}genUIModel(t){return this._makeUIElement(t)}}function qr({domRoot:e,template:t,filePath:n,data:s,UIModel:o,Simulator:r,updateElement:i}){const{makeRootUIElement:l,makeUIElement:a}=o,c=new Ri(s),d=new vu(c);d.useUI({makeUIElement:a,makeRootUIElement:l}),d.refresh();function h(D){return Xe(d.getRoot(),D)}const g=new r(t,n);g.mutateContentInTemplateBeforeLoad(d.genCode());function w(){const D=d.genCode();console.log(D),g.updateProject(D)}const C=new tu({simulator:g,getSourceByNodePath(D){return h(D)}});function T(D,k,F){C.clearFocus();const j={nodePath:"",loc:"",isEmptySlot:!1,fromAbsolute:!1,movingNodeInfos:[],fromCoord:[0,0],toCoord:[0,0],fromNodePath:null};let P=null;const W=k.map(te=>te.nodePath),re=d.getRoot();C.doDrag(D,W,async()=>{if(F){const{elementInfo:te,eventMeta:$}=F.detail,q=yu(re,te,$);q&&await q(C,j,k)}},async(te,$)=>{P=mu(te,re,k),await P.dragover(C,j,te),$()},async()=>{await P.drop(C,j,k,()=>{d.refresh(),w()}),C.setCursorInFrame("auto")})}return C.addEventListener("ready",()=>{C.startObserveRootElem("body")}),C.$mount(e),C.addEventListener("frame:dragstart",D=>{const k=D.detail.elementInfo.target,F=h(k),j=C.surface.hasTarget(F);let P=[F];j&&(P=C.surface.getFocusNodes());const W=document.createElement("div");W.innerText=F.tag,T(W,P,D)}),C.addEventListener("frame:requestEditContent",D=>{const k=D.detail.elementInfo.target;h(k).supportEditContent&&C.doEditContent(k)}),C.addEventListener("frame:contentChange",D=>{const k=D.detail.elementInfo.target,F=h(k);if(F.supportEditContent){const j=D.detail.innerText;i(F,"content",j),w()}}),{dragDropBehavior:T}}function Eu(){const{dragDropBehavior:e}=qr({domRoot:document.querySelector("#react-app"),template:yi,filePath:"/src/App.jsx",data:bi,UIModel:Rt,Simulator:Ro,updateElement(o,r,i){r==="content"&&(o.innerText=i)}}),t=document.getElementById("react-button");let n=0;t.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"Button",innerText:"buttonX"+n++});e(t,[Rt.makeUIElement(r)])});const s=document.getElementById("react-Flex");s.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"Flex"});e(s,[Rt.makeUIElement(r)])})}Eu();function bu(){const{dragDropBehavior:e}=qr({domRoot:document.querySelector("#vue-app"),template:Oi,filePath:"/src/App.vue",data:Fi,UIModel:qi,Simulator:Ro,updateElement(o,r,i){if(r==="content"){const l=o.source.bindAttrs.find(a=>a.name==="text");l.value=i}}}),t=document.getElementById("vue-button");let n=0;t.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"u-button",bindAttrs:[{concept:"BindAttribute",name:"text",value:"buttonX"+n++}]});e(t,[Rt.makeUIElement(r)])});const s=document.getElementById("vue-linear-layout");s.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"u-linear-layout"});e(s,[Rt.makeUIElement(r)])})}bu();export{Us as S,wu as _,ii as a,li as b,mt as c,ai as d,ui as e,Tu as f,xu as g,Iu as h,Do as i,Sn as n};
