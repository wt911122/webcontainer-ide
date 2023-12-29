var ni=Object.defineProperty;var si=(e,t,n)=>t in e?ni(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var M=(e,t,n)=>(si(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();class oi extends EventTarget{constructor(t,n){super(),this.project=t,this.filePath=n}async load(t){this.iframe=t,await this.launch()}async launch(){this.dispatchEvent(new CustomEvent("simulator:ready"))}mutateContentInTemplateBeforeLoad(t){}async updateProject(){}}const ri="modulepreload",ii=function(e){return"/webcontainer-ide/"+e},Hs={},Rn=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=ii(r),r in Hs)return;Hs[r]=!0;const i=r.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const p=o[f];if(p.href===r&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":ri,i||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),i)return new Promise((f,p)=>{c.addEventListener("load",f),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};var li=/(%?)(%([sdjo]))/g;function ai(e,t){switch(t){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;const n=JSON.stringify(e);return n==="{}"||n==="[]"||/^\[object .+?\]$/.test(n)?e:n}}}function Yn(e,...t){if(t.length===0)return e;let n=0,s=e.replace(li,(o,r,i,l)=>{const a=t[n],c=ai(a,l);return r?o:(n++,c)});return n<t.length&&(s+=` ${t.slice(n).join(" ")}`),s=s.replace(/%{2,2}/g,"%"),s}var ci=2;function ui(e){if(!e.stack)return;const t=e.stack.split(`
`);t.splice(1,ci),e.stack=t.join(`
`)}var di=class extends Error{constructor(e,...t){super(e),this.message=e,this.name="Invariant Violation",this.message=Yn(e,...t),ui(this)}},ko=(e,t,...n)=>{if(!e)throw new di(t,...n)};ko.as=(e,t,n,...s)=>{if(!t)throw e.prototype.name!=null?new e(Yn(n,s)):e(Yn(n,s))};var Xn=function(e,t){return Xn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])},Xn(e,t)};function Vu(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Xn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var ht=function(){return ht=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ht.apply(this,arguments)};function fi(e,t,n,s){function o(r){return r instanceof n?r:new n(function(i){i(r)})}return new(n||(n=Promise))(function(r,i){function l(f){try{c(s.next(f))}catch(p){i(p)}}function a(f){try{c(s.throw(f))}catch(p){i(p)}}function c(f){f.done?r(f.value):o(f.value).then(l,a)}c((s=s.apply(e,t||[])).next())})}function pi(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,o,r,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(c){return function(f){return a([c,f])}}function a(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,o&&(r=c[0]&2?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(f){c=[6,f],o=0}finally{s=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Uu(e,t,n){if(n||arguments.length===2)for(var s=0,o=t.length,r;s<o;s++)(r||!(s in t))&&(r||(r=Array.prototype.slice.call(t,0,s)),r[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))}var mi=function(e){return"[sandpack-client]: ".concat(e)};function On(e,t){return t===void 0&&(t="Value is nullish"),ko(e!=null,mi(t)),e}var hi='"dependencies" was not specified - provide either a package.json or a "dependencies" value',Ws='"entry" was not specified - provide either a package.json with the "main" field or an "entry" value';function gi(e,t,n){return e===void 0&&(e={}),t===void 0&&(t={}),n===void 0&&(n="/index.js"),JSON.stringify({name:"sandpack-project",main:n,dependencies:e,devDependencies:t},null,2)}function Hu(e,t,n,s){var o,r,i=wi(e),l=i["/package.json"];if(!l)return On(t,hi),On(s,Ws),i["/package.json"]={code:gi(t,n,s)},i;if(l){var a=JSON.parse(l.code);On(!(!t&&!a.dependencies),Ws),t&&(a.dependencies=ht(ht({},(o=a.dependencies)!==null&&o!==void 0?o:{}),t??{})),n&&(a.devDependencies=ht(ht({},(r=a.devDependencies)!==null&&r!==void 0?r:{}),n??{})),s&&(a.main=s),i["/package.json"]={code:JSON.stringify(a,null,2)}}return i}function Wu(e){var t;if(e.title==="SyntaxError"){var n=e.title,s=e.path,o=e.message,r=e.line,i=e.column;return{title:n,path:s,message:o,line:r,column:i}}var l=yi((t=e.payload)===null||t===void 0?void 0:t.frames);if(!l)return{message:e.message};var a=Ei(l),c=bi(l),f=vi(l._originalFileName,e.message,c,a);return{message:f,title:e.title,path:l._originalFileName,line:l._originalLineNumber,column:l._originalColumnNumber}}function yi(e){if(e)return e.find(function(t){return!!t._originalFileName})}function bi(e){return e?" (".concat(e._originalLineNumber,":").concat(e._originalColumnNumber,")"):""}function Ei(e){var t=e._originalScriptCode[e._originalScriptCode.length-1],n=t.lineNumber.toString().length,s=2,o=3,r=s+n+o+e._originalColumnNumber;return e._originalScriptCode.reduce(function(i,l){var a=l.highlight?">":" ",c=l.lineNumber.toString().length===n?"".concat(l.lineNumber):" ".concat(l.lineNumber),f=l.highlight?`
`+" ".repeat(r)+"^":"";return i+`
`+a+" "+c+" | "+l.content+f},"")}function vi(e,t,n,s){return"".concat(e,": ").concat(t).concat(n,`
`).concat(s)}var wi=function(e){return typeof e=="string"?e.startsWith("/")?e:"/".concat(e):Array.isArray(e)?e.map(function(t){return t.startsWith("/")?t:"/".concat(t)}):typeof e=="object"&&e!==null?Object.entries(e).reduce(function(t,n){var s=n[0],o=n[1],r=s.startsWith("/")?s:"/".concat(s);return t[r]=o,t},{}):null},Ks;(function(e){e[e.None=0]="None",e[e.Error=10]="Error",e[e.Warning=20]="Warning",e[e.Info=30]="Info",e[e.Debug=40]="Debug"})(Ks||(Ks={}));function _i(e,t,n){var s;return n===void 0&&(n={}),fi(this,void 0,void 0,function(){var o,r,i;return pi(this,function(l){switch(l.label){case 0:switch(o=(s=t.template)!==null&&s!==void 0?s:"parcel",i=o,i){case"node":return[3,1];case"static":return[3,3]}return[3,5];case 1:return[4,Rn(()=>import("./index-1fafde2c.js"),["assets/index-1fafde2c.js","assets/base-80a1f760-a7ab5117.js","assets/consoleHook-cdbe54ab-9ff0c2ee.js"]).then(function(a){return a.SandpackNode})];case 2:return r=l.sent(),[3,7];case 3:return[4,Rn(()=>import("./index-ec7d9378-ac496411.js"),["assets/index-ec7d9378-ac496411.js","assets/consoleHook-cdbe54ab-9ff0c2ee.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackStatic})];case 4:return r=l.sent(),[3,7];case 5:return[4,Rn(()=>import("./index-0bb7ca09.js"),["assets/index-0bb7ca09.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackRuntime})];case 6:r=l.sent(),l.label=7;case 7:return[2,new r(e,t,n)]}})})}class Lo extends oi{constructor(){super(...arguments);M(this,"options",{showOpenInCodeSandbox:!1,showErrorScreen:!1,showLoadingScreen:!0})}async launch(){const n=await _i(this.iframe,this.project,this.options);this.client=n,console.log(n)}mutateContentInTemplateBeforeLoad(n){this.project.files[this.filePath]={code:n}}async updateProject(n){this.project.files[this.filePath]={code:n},this.client.updateSandbox(this.project)}}const xi={files:{"/index.html":{code:`<!DOCTYPE html>
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
}`},"/src/HoistNodePath.jsx":{code:`import { useEffect, useRef } from 'react';

export default function ({ topSelector, nodePath }) {
    const ref = useRef(null);
    useEffect(() => {
        let el = ref.current.parentNode;
        do {
            if(el.matches(topSelector)) {
                break;
            }
            el = el.parentNode;
        } while(el);
        el.setAttribute('nodepath', nodePath);
    })
    return (
        <div ref={ref}></div>
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
function lockTargetWithNodePath(e) {
    status.mouseCurrentLocation[0] = e.clientX;
    status.mouseCurrentLocation[1] = e.clientY;
    const domtree = document.elementsFromPoint(e.clientX, e.clientY);
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
            let elem = element;
            if(!elem.hasAttribute('nodepath')) {
                elem = findParentWithNodePath(element);
            }
            const target = elem.getAttribute('nodepath');
            payload.rects = Array.from(elem.getClientRects());
            payload.target = target;
            payload.isEmptySlot = true;
        } else if(element.hasAttribute('nodepath')) {
            // const box = element.getBoundingClientRect();
            payload.target = element.getAttribute('nodepath');
            // const elems = Array.from(document.querySelectorAll(\`[nodepath="\${payload.target}"]\`));
            // payload.boundingbox = box;
            payload.elemStyle = {
                inline: isElementInline(element),
            }
            
            // const rects = elems.map(el => Array.from(el.getClientRects())).flat()
            const rects = Array.from(element.getClientRects());
            payload.rects = rects;
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
    const element = lockTargetWithNodePath(e);
    if(element) {
        if(element.getAttribute('ide-draggable') === 'false') {
            return;
        }
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
`}},environment:"vanilla"},Ti="View",Ai=[{concept:"ViewElement",tag:"Flex",bindAttrs:[{concept:"BindAttribute",name:"gap",value:"middle"}],children:[{concept:"ViewElement",tag:"Button",innerText:"button1"},{concept:"ViewElement",tag:"Button",innerText:"button2",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}]},{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"link"}]}]},{concept:"ViewElement",tag:"AbsoluteLayout",children:[{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}],staticStyle:"left: 20px; top: 20px;"}]},{concept:"ViewElement",tag:"Table",children:[{concept:"ViewElement",tag:"TableColumn",bindAttrs:[{concept:"BindAttribute",name:"dataIndex",value:"name"},{concept:"BindAttribute",name:"key",value:"name"}],children:[{concept:"ViewElement",tag:"OpenTemplate",slotTarget:"title",children:[{concept:"ViewElement",tag:"span",innerText:"Name"}]},{concept:"ViewElement",tag:"OpenTemplate",slotTarget:"cell",children:[{concept:"ViewElement",tag:"a",innerText:"name"}]}]},{concept:"ViewElement",tag:"TableColumn",bindAttrs:[{concept:"BindAttribute",name:"dataIndex",value:"age"},{concept:"BindAttribute",name:"key",value:"age"}],children:[{concept:"ViewElement",tag:"OpenTemplate",slotTarget:"title",children:[{concept:"ViewElement",tag:"span",innerText:"Age"}]},{concept:"ViewElement",tag:"OpenTemplate",slotTarget:"cell",children:[{concept:"ViewElement",tag:"span",innerText:"age"}]}]},{concept:"ViewElement",tag:"TableColumn",bindAttrs:[{concept:"BindAttribute",name:"key",value:"action"}],children:[{concept:"ViewElement",tag:"OpenTemplate",slotTarget:"title",children:[{concept:"ViewElement",tag:"span",innerText:"Action"}]},{concept:"ViewElement",tag:"OpenTemplate",slotTarget:"cell",children:[{concept:"ViewElement",tag:"a",innerText:"Invite name"},{concept:"ViewElement",tag:"a",innerText:"Delete"}]}]}]}],Ci={concept:Ti,elements:Ai};let zs=1,fs=class{constructor(t){M(this,"componentKey",0);M(this,"parentNode",null);M(this,"tag","");M(this,"isContainer",!1);M(this,"supportEditContent",!1);M(this,"draggable",!0);this.source=t,this.tag=t.tag,this.componentKey=zs++}static accept(){return!0}get staticStyle(){return this.source.staticStyle}set staticStyle(t){this.source.staticStyle=t}get innerText(){return this.source.innerText}set innerText(t){this.source.innerText=t}get nodePath(){if(!this.parentNode)return"rootview";const t=this.parentNode,s=t.elements.findIndex(o=>o===this);return s===-1?null:`${t.nodePath}.${s}`}updateComponentKey(){this.componentKey=zs++}getSiblings(){}renderIDE(t){throw"renderIDE need implementation!"}dropToAccept(t){return!0}};const ye={ROW:"row",COLUMN:"column",FREE:"free",AUTO:"auto"};class Bo extends fs{constructor(n){super(n);M(this,"isRoot",!1);M(this,"isContainer",!0);M(this,"direction",ye.AUTO);M(this,"elements",[]);this.createSubElements(n)}dropable(n){return!0}createSubElements(n){throw"createSubElements need implementation!"}insertNodeBefore(n,s){const o=s.source;o.delete();const r=this.source.getViewElementIdx(n.source);r!==-1&&this.source.insertViewElementAt(o,r)}insertNodeAfter(n,s){const o=s.source;o.delete();const r=this.source.getViewElementIdx(n.source);r!==-1&&this.source.insertViewElementAt(o,r+1)}addChild(n){const s=n.source;s.delete(),this.source.addViewElement(s)}renderIDE(n){throw"renderIDE need implementation!"}}function qe(e,t){const n=t.split(".");n.shift();let s=e.elements[n.shift()];for(;n.length;){const o=n.shift();s=s.elements[o]}return s}function Ys(e){return e*e}function kn(e,t){return Ys(e[0]-t[0])+Ys(e[1]-t[1])}function Xs(e,t){const n=t.slice(0,2),s=t.slice(2,4),o=kn(n,s);if(o===0)return kn(e,n);let r=((e[0]-n[0])*(s[0]-n[0])+(e[1]-n[1])*(s[1]-n[1]))/o;return r=Math.max(0,Math.min(1,r)),kn(e,[n[0]+r*(s[0]-n[0]),n[1]+r*(s[1]-n[1])])}function Fo(e){return[[e.left,e.top,e.right,e.top],[e.left,e.bottom,e.right,e.bottom]]}function jo(e){return[[e.left,e.top,e.left,e.bottom],[e.right,e.top,e.right,e.bottom]]}function Vo(e,t){return e[0]+=t,e[2]+=t,e}function Uo(e,t){return e[1]+=t,e[3]+=t,e}function Ii(e,t){return e[0]===e[2]?Vo(e,t):Uo(e,t)}function Pi(e,t){var n;return(n=t.elemStyle)!=null&&n.inline?jo(e):Fo(e)}function Si(e){return[e.x,e.y,e.width,e.height]}function cn(e=""){return e.split(";").map(n=>n.split(":")).reduce((n,s)=>{if(s.length===2){let[o,r]=s;o=o.trim().replace(/-./g,i=>i.toUpperCase()[1]),n[o]=r.trim()}return n},{})}function qn(e={}){let t="";for(const[n,s]of Object.entries(e))t+=`${n}:${s};`;return t}function Mi(e){const t=cn(e);try{return JSON.stringify(t)}catch{return""}}class ps{constructor(t){M(this,"refComps",new Set);M(this,"preCode","");Object.assign(this,t)}genContext(){return new ps({refComps:this.refComps,preCode:""})}useNewContext(t){const n=this.genContext();t(n),this.preCode=n.preCode+this.preCode}}class Ho extends fs{renderIDE(t){t.refComps.add(this.tag);let n=`
    <${this.tag} 
        key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${ms(this.source.bindAttrs)}
        ${gn(this.source.staticStyle)}>`;return this.innerText&&(n+=this.innerText),n+=`</${this.tag}>
`,n}}class Tt extends Bo{createSubElements(t){let n;t.concept==="View"&&(n=t.elements),t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(yn(this)))}renderIDE(t){t.refComps.add(this.tag);let n=`
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${ms(this.source.bindAttrs)}
        ${gn(this.source.staticStyle)}>`;return this.elements.length>0?this.elements.forEach(s=>{n+=s.renderIDE(t)}):n+="<EmptySlot />",n+=`</${this.tag}>
`,n}}const Ni=["Button"];let Di=class extends Ho{constructor(){super(...arguments);M(this,"supportEditContent",!0)}static accept(n){return Ni.includes(n.tag)}},$i=class extends Tt{constructor(){super(...arguments);M(this,"isRoot",!0)}renderIDE(){const n=new ps;let s="";this.elements.forEach(i=>{s+=i.renderIDE(n)});let o="";return n.refComps.size>0&&(o="import { ",o+=Array.from(n.refComps).join(","),o+='} from "antd";'),`
import React from 'react';
import EmptySlot from './Empty.jsx';
import HoistNodePath from './HoistNodePath.jsx'
${o}
${n.preCode}
function View() {
    return (
        <>
            ${s}
        </>
    )
}
export default View;
`}};class Ri extends Tt{static accept(t){return t.tag==="Flex"}constructor(t){super(t),this.direction=ye.ROW,t.bindAttrs.find(n=>n.name==="vertical"&&n.value==="true")&&(this.direction=ye.COLUMN)}}let Oi=class extends Tt{constructor(){super(...arguments);M(this,"isAbsolute",!0)}static accept(n){return n.tag==="AbsoluteLayout"}renderIDE(n){let s=`
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        className="absoluteLayout" 
        ${ms(this.source.bindAttrs)}
        ${gn(this.source.staticStyle)}>`;return this.elements.length>0&&this.elements.forEach(o=>{s+=o.renderIDE(n)}),s+=`</div>
`,s}},ki=class extends Tt{constructor(){super(...arguments);M(this,"direction",ye.ROW)}static accept(n){return n.tag==="Table"}dropable(n){return n.tag==="TableColumn"}createSubElements(n){let s;n.concept==="ViewElement"&&(s=n.children),s&&(this.elements=s.map(yn(this)))}renderIDE(n){n.refComps.add("Table");const s=`table_${this.componentKey}_columns`;return n.preCode+=`
        
const ${s} = [`,n.useNewContext(r=>{this.elements.forEach(i=>{n.preCode+=i.renderIDE(r)})}),n.preCode+=`];
`,`
    <div nodepath="${this.nodePath}" 
        ide-iscontainer="true"  
        key="${this.componentKey}"
        ${gn(this.source.staticStyle)}>
        <Table 
            columns={${s}}
            dataSource={[{}, {}, {}]}></Table>
    </div>
`}},Li=class extends Tt{static accept(t){return t.tag==="TableColumn"}dropToAccept(t){return t.tag==="Table"}dropable(t){return!1}createSubElements(t){let n;t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(yn(this)))}renderIDE(t){const n=this.elements.find(r=>r.source.slotTarget==="title"),s=this.elements.find(r=>r.source.slotTarget==="cell");let o=`
        {
            ${Fi(this.source.bindAttrs)},
        `;if(n){const r=`table_column_${this.componentKey}_title`;t.preCode+=`
            
const ${r} = () => (
                <>
                <HoistNodePath nodePath="${this.nodePath}" topSelector="th" />`,t.useNewContext(i=>{t.preCode+=n.renderIDE(i)}),t.preCode+=`</>);
`,o+=`title: ${r},`}return o+=`
                render: () => (
                    ${s.renderIDE(t)}
                ),
            },`,o}};class Bi extends Tt{constructor(){super(...arguments);M(this,"draggable",!1)}static accept(n){return n.tag==="OpenTemplate"}createSubElements(n){let s;n.concept==="ViewElement"&&(s=n.children),s&&(this.elements=s.map(yn(this)))}renderIDE(n){let s="";return this.elements.length>0?this.elements.forEach(r=>{s+=r.renderIDE(n)}):s+="<EmptySlot />",`
        <div nodepath="${this.nodePath}" ide-draggable="false">
            ${s}
        </div>`}}function Fi(e){return e&&e.length>0?e.map(t=>`${t.name}: "${t.value}"`).join(`,
`):""}function ms(e){return e&&e.length>0?e.map(t=>`${t.name}="${t.value}"`).join(" "):""}function gn(e){if(e&&e.trim()){const t=Mi(e.trim());if(t)return` style={${t}} `}return""}const ji=[Oi,Ri,ki,Li,Bi,Di,Ho];function Wo(e){const t=ji.find(n=>n.accept(e));return new t(e)}function Vi(e){return new $i(e)}function yn(e){return t=>{const n=Wo(t);return n.parentNode=e,n}}const kt={makeUIElement:Wo,makeRootUIElement:Vi};class hs{constructor(t){M(this,"concept","");Object.assign(this,t),this.concept=t.concept,this.tag=t.tag}}class Ui extends hs{constructor(n){super(n);M(this,"elements",[]);n.elements&&(this.elements=n.elements.map(s=>{const o=new ct(s);return o.parentNode=this,o.parentKey="elements",o}))}addViewElement(n){n.delete(),this.elements.push(n),n.parentNode=this}insertViewElementAt(n,s){n.delete(),this.elements.splice(s,0,n),n.parentNode=this}removeViewElement(n){const s=this.elements.findIndex(o=>o===n);s!==-1&&(this.elements.splice(s,1),n.parentNode=void 0)}getViewElementIdx(n){return this.elements.findIndex(s=>s===n)}}class ct extends hs{constructor(n){super(n);M(this,"tag");M(this,"staticStyle");M(this,"staticClass");M(this,"innerText");M(this,"bindAttrs",[]);M(this,"children",[]);this.tag=n.tag,this.staticStyle=n.staticStyle,this.staticClass=n.staticClass,this.innerText=n.innerText,n.children&&(this.children=n.children.map(s=>{const o=new ct(s);return o.parentNode=this,o.parentKey="children",o})),n.bindAttrs&&(this.bindAttrs=n.bindAttrs.map(s=>{const o=new Ki(s);return o.parentNode=this,o.parentKey="bindAttrs",o}))}addViewElement(n){n.delete(),this.children.push(n),n.parentNode=this}insertViewElementAt(n,s){n.delete(),this.children.splice(s,0,n),n.parentNode=this}removeViewElement(n){const s=this.children.findIndex(o=>o===n);s!==-1&&(this.children.splice(s,1),n.parentNode=void 0)}delete(){this.parentNode&&this.parentNode.removeViewElement(this)}getViewElementIdx(n){return this.children.findIndex(s=>s===n)}}function Hi(e){return e.name}function Wi(e){return`${Jn(e.object)}.${Jn(e.property)}`}function Jn(e){return e.object?Wi(e):Hi(e)}class Ki extends hs{constructor(n){super(n);M(this,"name","");M(this,"value","");this.name=n.name,this.value=n.value,n.expression&&(this.value=Jn(n.expression))}}const zi={files:{"/index.html":{code:`<!DOCTYPE html>
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
<\/script>`},"/src/HoistNodePath.vue":{code:`<template>
    <div></div>
</template>
<script>
export default {
    props: {
        nodePath: String,
        topSelector: String,
    },
    mounted() {
        let el = this.$el.parentNode;
        do {
            if(el.matches(this.topSelector)) {
                break;
            }
            el = el.parentNode;
        } while(el);
        el.setAttribute('nodepath', this.nodePath);
    }
}
<\/script>`},"/src/absolute.css":{code:`.absoluteLayout {
    position: relative;
    width: 100%;
    height: 300px;
    min-height: 100px;
}

.absoluteLayout > * {
    position: absolute !important;
    text-decoration: inherit;
}`},"/src/cloud-ide.css":{code:`.designer-table table > tbody > tr:nth-child(n+2){
    position: relative;
    pointer-events: none;
}
.designer-table table > tbody > tr:nth-child(n+2)::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(255,255,255,0.8);
    z-index: 999;
}
`},"/src/empty.css":{code:`.empty-slot{
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
import './cloud-ide.css'

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
function lockTargetWithNodePath(e) {
    status.mouseCurrentLocation[0] = e.clientX;
    status.mouseCurrentLocation[1] = e.clientY;
    const domtree = document.elementsFromPoint(e.clientX, e.clientY);
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
            let elem = element;
            if(!elem.hasAttribute('nodepath')) {
                elem = findParentWithNodePath(element);
            }
            const target = elem.getAttribute('nodepath');
            payload.rects = Array.from(elem.getClientRects());
            payload.target = target;
            payload.isEmptySlot = true;
        } else if(element.hasAttribute('nodepath')) {
            // const box = element.getBoundingClientRect();
            payload.target = element.getAttribute('nodepath');
            // const elems = Array.from(document.querySelectorAll(\`[nodepath="\${payload.target}"]\`));
            // payload.boundingbox = box;
            payload.elemStyle = {
                inline: isElementInline(element),
            }
            
            // const rects = elems.map(el => Array.from(el.getClientRects())).flat()
            const rects = Array.from(element.getClientRects());
            payload.rects = rects;
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
    const element = lockTargetWithNodePath(e);
    if(element) {
        if(element.getAttribute('ide-draggable') === 'false') {
            return;
        }
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
`}},environment:"vanilla"},Yi="View",Xi=[{concept:"ViewElement",tag:"u-linear-layout",children:[{concept:"ViewElement",tag:"u-button",bindAttrs:[{concept:"BindAttribute",name:"text",value:"Button1"}]}]},{concept:"ViewElement",tag:"AbsoluteLayout",children:[{concept:"ViewElement",tag:"u-button",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"},{concept:"BindAttribute",name:"text",value:"Button2"}],staticStyle:"left: 20px; top: 20px;"}]},{concept:"ViewElement",type:0,tag:"u-table-view",name:"tableView",bindAttrs:[{concept:"BindAttribute",name:"data-source",type:"dynamic",value:"",expression:{concept:"Identifier",name:"load",label:"",folded:!1},rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"value-field",type:"string",value:"lCAPUserRoleMapping.id",rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"show-total",type:"static",value:"true",rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"pageable",type:"string",value:"",rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"remote-paging",type:"static",value:"true",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-table-view-column",name:"uTableViewColumn1",bindAttrs:[{concept:"BindAttribute",name:"type",type:"string",value:"index",rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"width",type:"string",value:"60",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",tag:"template",name:"template6",slotTarget:"title",slotScope:"",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",tag:"u-text",name:"text1",bindAttrs:[{concept:"BindAttribute",name:"text",type:"string",value:"序号",rules:[],playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]},{concept:"ViewElement",type:0,tag:"u-table-view-column",name:"uTableViewColumn2",bindAttrs:[{concept:"BindAttribute",name:"type",type:"string",value:"expander",rules:[],playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"template",name:"template4",slotTarget:"cell",slotScope:"current",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-linear-layout",name:"uLinearLayout4",bindAttrs:[{concept:"BindAttribute",name:"gap",type:"string",value:"small",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-text",name:"uText2",bindAttrs:[{concept:"BindAttribute",name:"text",type:"dynamic",value:"",expression:{concept:"MemberExpression",object:{concept:"MemberExpression",object:{concept:"MemberExpression",object:{concept:"Identifier",name:"current",label:"",folded:!1},property:{concept:"Identifier",name:"item",label:"",folded:!1},label:"",folded:!1,name:""},property:{concept:"Identifier",name:"lCAPUserRoleMapping",label:"",folded:!1},label:"",folded:!1,name:""},property:{concept:"Identifier",name:"userName",label:"",folded:!1},label:"",folded:!1,name:""},rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]},{concept:"ViewElement",tag:"template",name:"template7",slotTarget:"title",slotScope:"",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",tag:"u-text",name:"text2",bindAttrs:[{concept:"BindAttribute",name:"text",type:"string",value:"用户名",rules:[],playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]},{concept:"ViewElement",type:0,tag:"u-table-view-column",name:"uTableViewColumn3",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"template",name:"template5",slotTarget:"cell",slotScope:"current",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-linear-layout",name:"uLinearLayout5",bindAttrs:[{concept:"BindAttribute",name:"gap",type:"string",value:"small",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-link",name:"uLink1",bindAttrs:[{concept:"BindAttribute",name:"text",type:"string",value:"移除 ",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[{concept:"BindEvent",name:"click",logics:[{concept:"Logic",name:"remove",typeParams:null,params:[],returns:[],variables:[],body:[{concept:"Start",label:"开始",folded:!1,name:""},{uuid:"f639b13331354c5b82c034355e590564",concept:"CallLogic",label:"调用逻辑",calleeNamespace:"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics",calleeName:"delete",typeArguments:null,arguments:[{concept:"Argument",keyword:"id",expression:{concept:"MemberExpression",object:{concept:"MemberExpression",object:{concept:"MemberExpression",object:{concept:"Identifier",name:"current",label:"",folded:!1},property:{concept:"Identifier",name:"item",label:"",folded:!1},label:"",folded:!1,name:""},property:{concept:"Identifier",name:"lCAPUserRoleMapping",label:"",folded:!1},label:"",folded:!1,name:""},property:{concept:"Identifier",name:"id",label:"",folded:!1},label:"",folded:!1,name:""},folded:!1,name:""}],folded:!1,name:""},{uuid:"7998aba64d1d49abb58f392dba7cdb20",concept:"CallLogic",label:"调用逻辑",calleeNamespace:"elements.tableView.logics",calleeName:"reload",typeArguments:null,arguments:[],folded:!1,name:""},{uuid:"7d210e3bc12a4bc28dcd80ab2a02e312",concept:"CallLogic",label:"弹出消息",calleeNamespace:"nasl.ui",calleeName:"showMessage",shortcut:!0,typeArguments:null,arguments:[{concept:"Argument",keyword:"text",expression:{concept:"StringLiteral",value:"移除成功！",label:"",folded:!1,name:""},folded:!1,name:""}],folded:!1,name:""},{concept:"End",label:"结束",folded:!1,name:""}],playground:[]}],arguments:[]}],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]},{concept:"ViewElement",tag:"template",name:"template8",slotTarget:"title",slotScope:"",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",tag:"u-text",name:"text3",bindAttrs:[{concept:"BindAttribute",name:"text",type:"string",value:"操作",rules:[],playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]}]}],qi={concept:Yi,elements:Xi};class Ko extends fs{renderIDE(){let t=`
    <${this.tag} 
        key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${Ct(this.source.bindAttrs)}
        ${Xt(this.source.staticStyle)}>`;return t+=`</${this.tag}>
`,t}}class At extends Bo{createSubElements(t){let n;t.concept==="View"&&(n=t.elements),t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(gs(this)))}renderIDE(){let t=`
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${Ct(this.source.bindAttrs)}
        ${Xt(this.source.staticStyle)}>`;return this.elements.length>0?this.elements.forEach(n=>{t+=n.renderIDE()}):t+="<EmptySlot />",t+=`</${this.tag}>
`,t}}const Ji=["u-button"];class Zi extends Ko{constructor(){super(...arguments);M(this,"supportEditContent",!0)}static accept(n){return Ji.includes(n.tag)}}class Gi extends At{constructor(){super(...arguments);M(this,"isRoot",!0)}renderIDE(){let n="";return this.elements.forEach(o=>{n+=o.renderIDE()}),`
        <template>
            <div id="root">
            ${n}
            </div>
        </template>
        <script>
        import EmptySlot from './Empty.vue'
        import HoistNodePath from './HoistNodePath.vue'
        export default {
            components: {
                EmptySlot,
                HoistNodePath
            }
        }
        <\/script>
                `}}class Qi extends At{static accept(t){return t.tag==="u-linear-layout"}constructor(t){super(t),this.direction=ye.ROW,t.bindAttrs.find(n=>n.name==="direction"&&n.value==="vertical")&&(this.direction=ye.COLUMN)}}class el extends At{constructor(){super(...arguments);M(this,"isAbsolute",!0)}static accept(n){return n.tag==="AbsoluteLayout"}renderIDE(){let n=`
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        class="absoluteLayout" 
        ${Ct(this.source.bindAttrs)}
        ${Xt(this.source.staticStyle)}>`;return this.elements.length>0&&this.elements.forEach(s=>{n+=s.renderIDE()}),n+=`</div>
`,n}}class tl extends At{constructor(){super(...arguments);M(this,"direction",ye.ROW)}static accept(n){return n.tag==="u-table-view"}dropable(n){return n.tag==="u-table-view-column"}createSubElements(n){let s;n.concept==="ViewElement"&&(s=n.children),s&&(this.elements=s.map(gs(this)))}renderIDE(){let n=`
    <u-table-view class="designer-table" key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        :data-source="[{}, {}, {}]"
        ${Ct(this.source.bindAttrs,["data-source","value-field"])}
        ${Xt(this.source.staticStyle)}>`;return this.elements.length>0&&this.elements.forEach(s=>{n+=s.renderIDE()}),n+=`</u-table-view>
`,n}}class nl extends At{static accept(t){return t.tag==="u-table-view-column"}dropToAccept(t){return t.tag==="u-table-view"}dropable(t){return!1}createSubElements(t){let n;t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(s=>{const o=new sl(s);return o.parentNode=this,o}))}renderIDE(){let t=`
    <u-table-view-column key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${Ct(this.source.bindAttrs)}
        ${Xt(this.source.staticStyle)}>`;return this.elements.forEach(n=>{t+=n.renderIDE()}),t+=`</u-table-view-column>
`,t}}class sl extends At{constructor(){super(...arguments);M(this,"draggable",!1)}createSubElements(n){let s;n.concept==="ViewElement"&&(s=n.children),s&&(this.elements=s.map(gs(this)))}renderIDE(){console.log(this.source);let s=["title"].includes(this.source.slotTarget)?`<HoistNodePath nodePath="${this.parentNode.nodePath}" topSelector="${this.source.slotTarget==="title"?"th":"td"}"></HoistNodePath>`:"",o=`
    <template #${this.source.slotTarget}="${this.source.slotScope}"
        ${Ct(this.source.bindAttrs)}>
        <div nodepath="${this.nodePath}" ide-draggable="false">
        ${s}
        `;return this.elements.length===0?o+="<EmptySlot/>":this.elements.forEach(r=>{o+=r.renderIDE()}),o+=`</div></template>
`,o}}function Ct(e,t=[]){return e&&e.length>0?e.filter(n=>!t.includes(n.name)).map(n=>`${n.name}="${n.value}"`).join(" "):""}function Xt(e){return e&&e.trim()?` style="${e.trim()}" `:""}const ol=[el,Qi,tl,nl,Zi,Ko];function zo(e){const t=ol.find(n=>n.accept(e));return new t(e)}function rl(e){return new Gi(e)}function gs(e){return t=>{const n=zo(t);return n.parentNode=e,n}}const il={makeUIElement:zo,makeRootUIElement:rl},ll=("transform"in document.documentElement.style?"transform":void 0)||("-webkit-transform"in document.documentElement.style?"-webkit-transform":void 0)||("-moz-transform"in document.documentElement.style?"-moz-transform":void 0)||("-ms-transform"in document.documentElement.style?"-ms-transform":void 0)||("-o-transform"in document.documentElement.style?"-o-transform":void 0),bn=function(e={}){let t,n;const s=e.tag,o=document.createElement(s);if(s==="style")return o.type="text/css",o.styleSheet?o.styleSheet.cssText=e.cssText:o.appendChild(document.createTextNode(e.cssText)),o;if(e.attributes)for(t in e.attributes)n=e.attributes[t],o.setAttribute(t,n);if(e.style)for(t in e.style)n=e.style[t],o.style[t]=n;if(e.data)for(t in e.data)n=e.data[t],o.dataset[t]=n;return e.className&&e.className.forEach(r=>{console.log(r),o.classList.add(r)}),e.textContent!==void 0&&(o.textContent=e.textContent),e.childNodes&&[].concat(e.childNodes).forEach(r=>{o.appendChild(r)}),o};function ys(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const q={},gt=[],Ce=()=>{},al=()=>!1,cl=/^on[^a-z]/,En=e=>cl.test(e),bs=e=>e.startsWith("onUpdate:"),oe=Object.assign,Es=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ul=Object.prototype.hasOwnProperty,V=(e,t)=>ul.call(e,t),$=Array.isArray,yt=e=>wn(e)==="[object Map]",Yo=e=>wn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",vn=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Xo=e=>(J(e)||L(e))&&L(e.then)&&L(e.catch),qo=Object.prototype.toString,wn=e=>qo.call(e),dl=e=>wn(e).slice(8,-1),Jo=e=>wn(e)==="[object Object]",vs=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ln=ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_n=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fl=/-(\w)/g,vt=_n(e=>e.replace(fl,(t,n)=>n?n.toUpperCase():"")),pl=/\B([A-Z])/g,It=_n(e=>e.replace(pl,"-$1").toLowerCase()),Zo=_n(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ln=_n(e=>e?`on${Zo(e)}`:""),wt=(e,t)=>!Object.is(e,t),Bn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},un=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ml=e=>{const t=parseFloat(e);return isNaN(t)?e:t},hl=e=>{const t=ee(e)?Number(e):NaN;return isNaN(t)?e:t};let qs;const Zn=()=>qs||(qs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function De(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=ee(s)?El(s):De(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(ee(e)||J(e))return e}const gl=/;(?![^(]*\))/g,yl=/:([^]+)/,bl=/\/\*[^]*?\*\//g;function El(e){const t={};return e.replace(bl,"").split(gl).forEach(n=>{if(n){const s=n.split(yl);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function $e(e){let t="";if(ee(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const s=$e(e[n]);s&&(t+=s+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const vl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wl=ys(vl);function Go(e){return!!e||e===""}const _l=e=>ee(e)?e:e==null?"":$(e)||J(e)&&(e.toString===qo||!L(e.toString))?JSON.stringify(e,Qo,2):String(e),Qo=(e,t)=>t&&t.__v_isRef?Qo(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:Yo(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!$(t)&&!Jo(t)?String(t):t;let xe;class xl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Tl(e,t=xe){t&&t.active&&t.effects.push(e)}function Al(){return xe}const ws=e=>{const t=new Set(e);return t.w=0,t.n=0,t},er=e=>(e.w&Ye)>0,tr=e=>(e.n&Ye)>0,Cl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ye},Il=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];er(o)&&!tr(o)?o.delete(e):t[n++]=o,o.w&=~Ye,o.n&=~Ye}t.length=n}},Gn=new WeakMap;let Rt=0,Ye=1;const Qn=30;let Te;const lt=Symbol(""),es=Symbol("");class _s{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Tl(this,s)}run(){if(!this.active)return this.fn();let t=Te,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,Ke=!0,Ye=1<<++Rt,Rt<=Qn?Cl(this):Js(this),this.fn()}finally{Rt<=Qn&&Il(this),Ye=1<<--Rt,Te=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(Js(this),this.onStop&&this.onStop(),this.active=!1)}}function Js(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const nr=[];function Pt(){nr.push(Ke),Ke=!1}function St(){const e=nr.pop();Ke=e===void 0?!0:e}function me(e,t,n){if(Ke&&Te){let s=Gn.get(e);s||Gn.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=ws()),sr(o)}}function sr(e,t){let n=!1;Rt<=Qn?tr(e)||(e.n|=Ye,n=!er(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Le(e,t,n,s,o,r){const i=Gn.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&$(e)){const a=Number(s);i.forEach((c,f)=>{(f==="length"||!vn(f)&&f>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":$(e)?vs(n)&&l.push(i.get("length")):(l.push(i.get(lt)),yt(e)&&l.push(i.get(es)));break;case"delete":$(e)||(l.push(i.get(lt)),yt(e)&&l.push(i.get(es)));break;case"set":yt(e)&&l.push(i.get(lt));break}if(l.length===1)l[0]&&ts(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);ts(ws(a))}}function ts(e,t){const n=$(e)?e:[...e];for(const s of n)s.computed&&Zs(s);for(const s of n)s.computed||Zs(s)}function Zs(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Pl=ys("__proto__,__v_isRef,__isVue"),or=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vn)),Gs=Sl();function Sl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=U(this);for(let r=0,i=this.length;r<i;r++)me(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(U)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pt();const s=U(this)[t].apply(this,n);return St(),s}}),e}function Ml(e){const t=U(this);return me(t,"has",e),t.hasOwnProperty(e)}class rr{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,s){const o=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&s===(o?r?Hl:cr:r?ar:lr).get(t))return t;const i=$(t);if(!o){if(i&&V(Gs,n))return Reflect.get(Gs,n,s);if(n==="hasOwnProperty")return Ml}const l=Reflect.get(t,n,s);return(vn(n)?or.has(n):Pl(n))||(o||me(t,"get",n),r)?l:de(l)?i&&vs(n)?l:l.value:J(l)?o?ur(l):rt(l):l}}class ir extends rr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(Ut(r)&&de(r)&&!de(s))return!1;if(!this._shallow&&(!ns(s)&&!Ut(s)&&(r=U(r),s=U(s)),!$(t)&&de(r)&&!de(s)))return r.value=s,!0;const i=$(t)&&vs(n)?Number(n)<t.length:V(t,n),l=Reflect.set(t,n,s,o);return t===U(o)&&(i?wt(s,r)&&Le(t,"set",n,s):Le(t,"add",n,s)),l}deleteProperty(t,n){const s=V(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Le(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!vn(n)||!or.has(n))&&me(t,"has",n),s}ownKeys(t){return me(t,"iterate",$(t)?"length":lt),Reflect.ownKeys(t)}}class Nl extends rr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Dl=new ir,$l=new Nl,Rl=new ir(!0),xs=e=>e,xn=e=>Reflect.getPrototypeOf(e);function Gt(e,t,n=!1,s=!1){e=e.__v_raw;const o=U(e),r=U(t);n||(wt(t,r)&&me(o,"get",t),me(o,"get",r));const{has:i}=xn(o),l=s?xs:n?Is:Cs;if(i.call(o,t))return l(e.get(t));if(i.call(o,r))return l(e.get(r));e!==o&&e.get(t)}function Qt(e,t=!1){const n=this.__v_raw,s=U(n),o=U(e);return t||(wt(e,o)&&me(s,"has",e),me(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function en(e,t=!1){return e=e.__v_raw,!t&&me(U(e),"iterate",lt),Reflect.get(e,"size",e)}function Qs(e){e=U(e);const t=U(this);return xn(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function eo(e,t){t=U(t);const n=U(this),{has:s,get:o}=xn(n);let r=s.call(n,e);r||(e=U(e),r=s.call(n,e));const i=o.call(n,e);return n.set(e,t),r?wt(t,i)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function to(e){const t=U(this),{has:n,get:s}=xn(t);let o=n.call(t,e);o||(e=U(e),o=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return o&&Le(t,"delete",e,void 0),r}function no(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function tn(e,t){return function(s,o){const r=this,i=r.__v_raw,l=U(i),a=t?xs:e?Is:Cs;return!e&&me(l,"iterate",lt),i.forEach((c,f)=>s.call(o,a(c),a(f),r))}}function nn(e,t,n){return function(...s){const o=this.__v_raw,r=U(o),i=yt(r),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=o[e](...s),f=n?xs:t?Is:Cs;return!t&&me(r,"iterate",a?es:lt),{next(){const{value:p,done:h}=c.next();return h?{value:p,done:h}:{value:l?[f(p[0]),f(p[1])]:f(p),done:h}},[Symbol.iterator](){return this}}}}function je(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ol(){const e={get(r){return Gt(this,r)},get size(){return en(this)},has:Qt,add:Qs,set:eo,delete:to,clear:no,forEach:tn(!1,!1)},t={get(r){return Gt(this,r,!1,!0)},get size(){return en(this)},has:Qt,add:Qs,set:eo,delete:to,clear:no,forEach:tn(!1,!0)},n={get(r){return Gt(this,r,!0)},get size(){return en(this,!0)},has(r){return Qt.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:tn(!0,!1)},s={get(r){return Gt(this,r,!0,!0)},get size(){return en(this,!0)},has(r){return Qt.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:tn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=nn(r,!1,!1),n[r]=nn(r,!0,!1),t[r]=nn(r,!1,!0),s[r]=nn(r,!0,!0)}),[e,n,t,s]}const[kl,Ll,Bl,Fl]=Ol();function Ts(e,t){const n=t?e?Fl:Bl:e?Ll:kl;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(V(n,o)&&o in s?n:s,o,r)}const jl={get:Ts(!1,!1)},Vl={get:Ts(!1,!0)},Ul={get:Ts(!0,!1)},lr=new WeakMap,ar=new WeakMap,cr=new WeakMap,Hl=new WeakMap;function Wl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kl(e){return e.__v_skip||!Object.isExtensible(e)?0:Wl(dl(e))}function rt(e){return Ut(e)?e:As(e,!1,Dl,jl,lr)}function zl(e){return As(e,!1,Rl,Vl,ar)}function ur(e){return As(e,!0,$l,Ul,cr)}function As(e,t,n,s,o){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const i=Kl(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return o.set(e,l),l}function bt(e){return Ut(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function ns(e){return!!(e&&e.__v_isShallow)}function dr(e){return bt(e)||Ut(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function fr(e){return un(e,"__v_skip",!0),e}const Cs=e=>J(e)?rt(e):e,Is=e=>J(e)?ur(e):e;function Yl(e){Ke&&Te&&(e=U(e),sr(e.dep||(e.dep=ws())))}function Xl(e,t){e=U(e);const n=e.dep;n&&ts(n)}function de(e){return!!(e&&e.__v_isRef===!0)}function Oe(e){return de(e)?e.value:e}const ql={get:(e,t,n)=>Oe(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return de(o)&&!de(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function pr(e){return bt(e)?e:new Proxy(e,ql)}class Jl{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _s(t,()=>{this._dirty||(this._dirty=!0,Xl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=U(this);return Yl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Zl(e,t,n=!1){let s,o;const r=L(e);return r?(s=e,o=Ce):(s=e.get,o=e.set),new Jl(s,o,r||!o,n)}function ze(e,t,n,s){let o;try{o=s?e(...s):e()}catch(r){Tn(r,t,n)}return o}function ve(e,t,n,s){if(L(e)){const r=ze(e,t,n,s);return r&&Xo(r)&&r.catch(i=>{Tn(i,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(ve(e[r],t,n,s));return o}function Tn(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,i,l)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){ze(a,null,10,[e,i,l]);return}}Gl(e,n,o,s)}function Gl(e,t,n,s=!0){console.error(e)}let Ht=!1,ss=!1;const ae=[];let Ne=0;const Et=[];let ke=null,nt=0;const mr=Promise.resolve();let Ps=null;function Ql(e){const t=Ps||mr;return e?t.then(this?e.bind(this):e):t}function ea(e){let t=Ne+1,n=ae.length;for(;t<n;){const s=t+n>>>1,o=ae[s],r=Wt(o);r<e||r===e&&o.pre?t=s+1:n=s}return t}function Ss(e){(!ae.length||!ae.includes(e,Ht&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ae.push(e):ae.splice(ea(e.id),0,e),hr())}function hr(){!Ht&&!ss&&(ss=!0,Ps=mr.then(yr))}function ta(e){const t=ae.indexOf(e);t>Ne&&ae.splice(t,1)}function na(e){$(e)?Et.push(...e):(!ke||!ke.includes(e,e.allowRecurse?nt+1:nt))&&Et.push(e),hr()}function so(e,t=Ht?Ne+1:0){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function gr(e){if(Et.length){const t=[...new Set(Et)];if(Et.length=0,ke){ke.push(...t);return}for(ke=t,ke.sort((n,s)=>Wt(n)-Wt(s)),nt=0;nt<ke.length;nt++)ke[nt]();ke=null,nt=0}}const Wt=e=>e.id==null?1/0:e.id,sa=(e,t)=>{const n=Wt(e)-Wt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yr(e){ss=!1,Ht=!0,ae.sort(sa);const t=Ce;try{for(Ne=0;Ne<ae.length;Ne++){const n=ae[Ne];n&&n.active!==!1&&ze(n,null,14)}}finally{Ne=0,ae.length=0,gr(),Ht=!1,Ps=null,(ae.length||Et.length)&&yr()}}function oa(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||q;let o=n;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in s){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:p,trim:h}=s[f]||q;h&&(o=n.map(x=>ee(x)?x.trim():x)),p&&(o=n.map(ml))}let l,a=s[l=Ln(t)]||s[l=Ln(vt(t))];!a&&r&&(a=s[l=Ln(It(t))]),a&&ve(a,e,6,o);const c=s[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ve(c,e,6,o)}}function br(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},l=!1;if(!L(e)){const a=c=>{const f=br(c,t,!0);f&&(l=!0,oe(i,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(J(e)&&s.set(e,null),null):($(r)?r.forEach(a=>i[a]=null):oe(i,r),J(e)&&s.set(e,i),i)}function An(e,t){return!e||!En(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,It(t))||V(e,t))}let ce=null,Er=null;function dn(e){const t=ce;return ce=e,Er=e&&e.type.__scopeId||null,t}function _t(e,t=ce,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&ho(-1);const r=dn(t);let i;try{i=e(...o)}finally{dn(r),s._d&&ho(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Fn(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:r,propsOptions:[i],slots:l,attrs:a,emit:c,render:f,renderCache:p,data:h,setupState:x,ctx:N,inheritAttrs:_}=e;let j,R;const k=dn(e);try{if(n.shapeFlag&4){const C=o||s,H=C;j=Me(f.call(H,C,p,r,x,h,N)),R=a}else{const C=t;j=Me(C.length>1?C(r,{attrs:a,slots:l,emit:c}):C(r,null)),R=t.props?a:ra(a)}}catch(C){jt.length=0,Tn(C,e,1),j=se(we)}let B=j;if(R&&_!==!1){const C=Object.keys(R),{shapeFlag:H}=B;C.length&&H&7&&(i&&C.some(bs)&&(R=ia(R,i)),B=Xe(B,R))}return n.dirs&&(B=Xe(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),j=B,dn(k),j}const ra=e=>{let t;for(const n in e)(n==="class"||n==="style"||En(n))&&((t||(t={}))[n]=e[n]);return t},ia=(e,t)=>{const n={};for(const s in e)(!bs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function la(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:l,patchFlag:a}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?oo(s,i,c):!!i;if(a&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const h=f[p];if(i[h]!==s[h]&&!An(c,h))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?oo(s,i,c):!0:!!i;return!1}function oo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!An(n,r))return!0}return!1}function aa({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ca=Symbol.for("v-ndc"),ua=e=>e.__isSuspense;function da(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):na(e)}const sn={};function jn(e,t,n){return vr(e,t,n)}function vr(e,t,{immediate:n,deep:s,flush:o,onTrack:r,onTrigger:i}=q){var l;const a=Al()===((l=ie)==null?void 0:l.scope)?ie:null;let c,f=!1,p=!1;if(de(e)?(c=()=>e.value,f=ns(e)):bt(e)?(c=()=>e,s=!0):$(e)?(p=!0,f=e.some(C=>bt(C)||ns(C)),c=()=>e.map(C=>{if(de(C))return C.value;if(bt(C))return it(C);if(L(C))return ze(C,a,2)})):L(e)?t?c=()=>ze(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),ve(e,a,3,[x])}:c=Ce,t&&s){const C=c;c=()=>it(C())}let h,x=C=>{h=k.onStop=()=>{ze(C,a,4),h=k.onStop=void 0}},N;if(zt)if(x=Ce,t?n&&ve(t,a,3,[c(),p?[]:void 0,x]):c(),o==="sync"){const C=lc();N=C.__watcherHandles||(C.__watcherHandles=[])}else return Ce;let _=p?new Array(e.length).fill(sn):sn;const j=()=>{if(k.active)if(t){const C=k.run();(s||f||(p?C.some((H,re)=>wt(H,_[re])):wt(C,_)))&&(h&&h(),ve(t,a,3,[C,_===sn?void 0:p&&_[0]===sn?[]:_,x]),_=C)}else k.run()};j.allowRecurse=!!t;let R;o==="sync"?R=j:o==="post"?R=()=>fe(j,a&&a.suspense):(j.pre=!0,a&&(j.id=a.uid),R=()=>Ss(j));const k=new _s(c,R);t?n?j():_=k.run():o==="post"?fe(k.run.bind(k),a&&a.suspense):k.run();const B=()=>{k.stop(),a&&a.scope&&Es(a.scope.effects,k)};return N&&N.push(B),B}function fa(e,t,n){const s=this.proxy,o=ee(e)?e.includes(".")?wr(s,e):()=>s[e]:e.bind(s,s);let r;L(t)?r=t:(r=t.handler,n=t);const i=ie;xt(this);const l=vr(o,r.bind(s),n);return i?xt(i):at(),l}function wr(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function it(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))it(e.value,t);else if($(e))for(let n=0;n<e.length;n++)it(e[n],t);else if(Yo(e)||yt(e))e.forEach(n=>{it(n,t)});else if(Jo(e))for(const n in e)it(e[n],t);return e}function Ms(e,t){const n=ce;if(n===null)return e;const s=Mn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,l,a,c=q]=t[r];i&&(L(i)&&(i={mounted:i,updated:i}),i.deep&&it(l),o.push({dir:i,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ge(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];r&&(l.oldValue=r[i].value);let a=l.dir[s];a&&(Pt(),ve(a,n,8,[e.el,l,e,t]),St())}}const He=Symbol("_leaveCb"),on=Symbol("_enterCb");function pa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cr(()=>{e.isMounted=!0}),Ir(()=>{e.isUnmounting=!0}),e}const be=[Function,Array],_r={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:be,onEnter:be,onAfterEnter:be,onEnterCancelled:be,onBeforeLeave:be,onLeave:be,onAfterLeave:be,onLeaveCancelled:be,onBeforeAppear:be,onAppear:be,onAfterAppear:be,onAppearCancelled:be},ma={name:"BaseTransition",props:_r,setup(e,{slots:t}){const n=ec(),s=pa();let o;return()=>{const r=t.default&&Tr(t.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const _ of r)if(_.type!==we){i=_;break}}const l=U(e),{mode:a}=l;if(s.isLeaving)return Vn(i);const c=ro(i);if(!c)return Vn(i);const f=os(c,l,s,n);rs(c,f);const p=n.subTree,h=p&&ro(p);let x=!1;const{getTransitionKey:N}=c.type;if(N){const _=N();o===void 0?o=_:_!==o&&(o=_,x=!0)}if(h&&h.type!==we&&(!st(c,h)||x)){const _=os(h,l,s,n);if(rs(h,_),a==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Vn(i);a==="in-out"&&c.type!==we&&(_.delayLeave=(j,R,k)=>{const B=xr(s,h);B[String(h.key)]=h,j[He]=()=>{R(),j[He]=void 0,delete f.delayedLeave},f.delayedLeave=k})}return i}}},ha=ma;function xr(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function os(e,t,n,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:p,onLeave:h,onAfterLeave:x,onLeaveCancelled:N,onBeforeAppear:_,onAppear:j,onAfterAppear:R,onAppearCancelled:k}=t,B=String(e.key),C=xr(n,e),H=(D,W)=>{D&&ve(D,s,9,W)},re=(D,W)=>{const K=W[1];H(D,W),$(D)?D.every(le=>le.length<=1)&&K():D.length<=1&&K()},te={mode:r,persisted:i,beforeEnter(D){let W=l;if(!n.isMounted)if(o)W=_||l;else return;D[He]&&D[He](!0);const K=C[B];K&&st(e,K)&&K.el[He]&&K.el[He](),H(W,[D])},enter(D){let W=a,K=c,le=f;if(!n.isMounted)if(o)W=j||a,K=R||c,le=k||f;else return;let I=!1;const Z=D[on]=he=>{I||(I=!0,he?H(le,[D]):H(K,[D]),te.delayedLeave&&te.delayedLeave(),D[on]=void 0)};W?re(W,[D,Z]):Z()},leave(D,W){const K=String(e.key);if(D[on]&&D[on](!0),n.isUnmounting)return W();H(p,[D]);let le=!1;const I=D[He]=Z=>{le||(le=!0,W(),Z?H(N,[D]):H(x,[D]),D[He]=void 0,C[K]===e&&delete C[K])};C[K]=e,h?re(h,[D,I]):I()},clone(D){return os(D,t,n,s)}};return te}function Vn(e){if(Cn(e))return e=Xe(e),e.children=null,e}function ro(e){return Cn(e)?e.children?e.children[0]:void 0:e}function rs(e,t){e.shapeFlag&6&&e.component?rs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Tr(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===pe?(i.patchFlag&128&&o++,s=s.concat(Tr(i.children,t,l))):(t||i.type!==we)&&s.push(l!=null?Xe(i,{key:l}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const Lt=e=>!!e.type.__asyncLoader,Cn=e=>e.type.__isKeepAlive;function ga(e,t){Ar(e,"a",t)}function ya(e,t){Ar(e,"da",t)}function Ar(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(In(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Cn(o.parent.vnode)&&ba(s,t,n,o),o=o.parent}}function ba(e,t,n,s){const o=In(t,e,s,!0);Pr(()=>{Es(s[t],o)},n)}function In(e,t,n=ie,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Pt(),xt(n);const l=ve(t,n,e,i);return at(),St(),l});return s?o.unshift(r):o.push(r),r}}const Fe=e=>(t,n=ie)=>(!zt||e==="sp")&&In(e,(...s)=>t(...s),n),Ea=Fe("bm"),Cr=Fe("m"),va=Fe("bu"),wa=Fe("u"),Ir=Fe("bum"),Pr=Fe("um"),_a=Fe("sp"),xa=Fe("rtg"),Ta=Fe("rtc");function Aa(e,t=ie){In("ec",e,t)}function Ca(e,t,n,s){let o;const r=n&&n[s];if($(e)||ee(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,r&&r[i])}else if(J(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>t(i,l,void 0,r&&r[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];o[l]=t(e[c],c,l,r&&r[l])}}else o=[];return n&&(n[s]=o),o}function Ia(e,t,n={},s,o){if(ce.isCE||ce.parent&&Lt(ce.parent)&&ce.parent.isCE)return t!=="default"&&(n.name=t),se("slot",n,s&&s());let r=e[t];r&&r._c&&(r._d=!1),Ee();const i=r&&Sr(r(n)),l=ut(pe,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Sr(e){return e.some(t=>mn(t)?!(t.type===we||t.type===pe&&!Sr(t.children)):!0)?e:null}const is=e=>e?Ur(e)?Mn(e)||e.proxy:is(e.parent):null,Bt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>is(e.parent),$root:e=>is(e.root),$emit:e=>e.emit,$options:e=>Ns(e),$forceUpdate:e=>e.f||(e.f=()=>Ss(e.update)),$nextTick:e=>e.n||(e.n=Ql.bind(e.proxy)),$watch:e=>fa.bind(e)}),Un=(e,t)=>e!==q&&!e.__isScriptSetup&&V(e,t),Pa={get({_:e},t){const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const x=i[t];if(x!==void 0)switch(x){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Un(s,t))return i[t]=1,s[t];if(o!==q&&V(o,t))return i[t]=2,o[t];if((c=e.propsOptions[0])&&V(c,t))return i[t]=3,r[t];if(n!==q&&V(n,t))return i[t]=4,n[t];ls&&(i[t]=0)}}const f=Bt[t];let p,h;if(f)return t==="$attrs"&&me(e,"get",t),f(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==q&&V(n,t))return i[t]=4,n[t];if(h=a.config.globalProperties,V(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Un(o,t)?(o[t]=n,!0):s!==q&&V(s,t)?(s[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let l;return!!n[i]||e!==q&&V(e,i)||Un(t,i)||(l=r[0])&&V(l,i)||V(s,i)||V(Bt,i)||V(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function io(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ls=!0;function Sa(e){const t=Ns(e),n=e.proxy,s=e.ctx;ls=!1,t.beforeCreate&&lo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:l,provide:a,inject:c,created:f,beforeMount:p,mounted:h,beforeUpdate:x,updated:N,activated:_,deactivated:j,beforeDestroy:R,beforeUnmount:k,destroyed:B,unmounted:C,render:H,renderTracked:re,renderTriggered:te,errorCaptured:D,serverPrefetch:W,expose:K,inheritAttrs:le,components:I,directives:Z,filters:he}=t;if(c&&Ma(c,s,null),i)for(const G in i){const Y=i[G];L(Y)&&(s[G]=Y.bind(n))}if(o){const G=o.call(n,n);J(G)&&(e.data=rt(G))}if(ls=!0,r)for(const G in r){const Y=r[G],Je=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Ce,Jt=!L(Y)&&L(Y.set)?Y.set.bind(n):Ce,Ze=Wr({get:Je,set:Jt});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Ie=>Ze.value=Ie})}if(l)for(const G in l)Mr(l[G],s,n,G);if(a){const G=L(a)?a.call(n):a;Reflect.ownKeys(G).forEach(Y=>{Dr(Y,G[Y])})}f&&lo(f,e,"c");function ne(G,Y){$(Y)?Y.forEach(Je=>G(Je.bind(n))):Y&&G(Y.bind(n))}if(ne(Ea,p),ne(Cr,h),ne(va,x),ne(wa,N),ne(ga,_),ne(ya,j),ne(Aa,D),ne(Ta,re),ne(xa,te),ne(Ir,k),ne(Pr,C),ne(_a,W),$(K))if(K.length){const G=e.exposed||(e.exposed={});K.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:Je=>n[Y]=Je})})}else e.exposed||(e.exposed={});H&&e.render===Ce&&(e.render=H),le!=null&&(e.inheritAttrs=le),I&&(e.components=I),Z&&(e.directives=Z)}function Ma(e,t,n=Ce){$(e)&&(e=as(e));for(const s in e){const o=e[s];let r;J(o)?"default"in o?r=Ft(o.from||s,o.default,!0):r=Ft(o.from||s):r=Ft(o),de(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function lo(e,t,n){ve($(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mr(e,t,n,s){const o=s.includes(".")?wr(n,s):()=>n[s];if(ee(e)){const r=t[e];L(r)&&jn(o,r)}else if(L(e))jn(o,e.bind(n));else if(J(e))if($(e))e.forEach(r=>Mr(r,t,n,s));else{const r=L(e.handler)?e.handler.bind(n):t[e.handler];L(r)&&jn(o,r,e)}}function Ns(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let a;return l?a=l:!o.length&&!n&&!s?a=t:(a={},o.length&&o.forEach(c=>fn(a,c,i,!0)),fn(a,t,i)),J(t)&&r.set(t,a),a}function fn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&fn(e,r,n,!0),o&&o.forEach(i=>fn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Na[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Na={data:ao,props:co,emits:co,methods:Ot,computed:Ot,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:Ot,directives:Ot,watch:$a,provide:ao,inject:Da};function ao(e,t){return t?e?function(){return oe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Da(e,t){return Ot(as(e),as(t))}function as(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?oe(Object.create(null),e,t):t}function co(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:oe(Object.create(null),io(e),io(t??{})):t}function $a(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const s in t)n[s]=ue(e[s],t[s]);return n}function Nr(){return{app:null,config:{isNativeTag:al,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ra=0;function Oa(e,t){return function(s,o=null){L(s)||(s=oe({},s)),o!=null&&!J(o)&&(o=null);const r=Nr(),i=new WeakSet;let l=!1;const a=r.app={_uid:Ra++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:ac,get config(){return r.config},set config(c){},use(c,...f){return i.has(c)||(c&&L(c.install)?(i.add(c),c.install(a,...f)):L(c)&&(i.add(c),c(a,...f))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,f){return f?(r.components[c]=f,a):r.components[c]},directive(c,f){return f?(r.directives[c]=f,a):r.directives[c]},mount(c,f,p){if(!l){const h=se(s,o);return h.appContext=r,f&&t?t(h,c):e(h,c,p),l=!0,a._container=c,c.__vue_app__=a,Mn(h.component)||h.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,f){return r.provides[c]=f,a},runWithContext(c){pn=a;try{return c()}finally{pn=null}}};return a}}let pn=null;function Dr(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function Ft(e,t,n=!1){const s=ie||ce;if(s||pn){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:pn._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&L(t)?t.call(s&&s.proxy):t}}function ka(e,t,n,s=!1){const o={},r={};un(r,Sn,1),e.propsDefaults=Object.create(null),$r(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:zl(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function La(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,l=U(o),[a]=e.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let h=f[p];if(An(e.emitsOptions,h))continue;const x=t[h];if(a)if(V(r,h))x!==r[h]&&(r[h]=x,c=!0);else{const N=vt(h);o[N]=cs(a,l,N,x,e,!1)}else x!==r[h]&&(r[h]=x,c=!0)}}}else{$r(e,t,o,r)&&(c=!0);let f;for(const p in l)(!t||!V(t,p)&&((f=It(p))===p||!V(t,f)))&&(a?n&&(n[p]!==void 0||n[f]!==void 0)&&(o[p]=cs(a,l,p,void 0,e,!0)):delete o[p]);if(r!==l)for(const p in r)(!t||!V(t,p))&&(delete r[p],c=!0)}c&&Le(e,"set","$attrs")}function $r(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(ln(a))continue;const c=t[a];let f;o&&V(o,f=vt(a))?!r||!r.includes(f)?n[f]=c:(l||(l={}))[f]=c:An(e.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,i=!0)}if(r){const a=U(n),c=l||q;for(let f=0;f<r.length;f++){const p=r[f];n[p]=cs(o,a,p,c[p],e,!V(c,p))}}return i}function cs(e,t,n,s,o,r){const i=e[n];if(i!=null){const l=V(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&L(a)){const{propsDefaults:c}=o;n in c?s=c[n]:(xt(o),s=c[n]=a.call(null,t),at())}else s=a}i[0]&&(r&&!l?s=!1:i[1]&&(s===""||s===It(n))&&(s=!0))}return s}function Rr(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},l=[];let a=!1;if(!L(e)){const f=p=>{a=!0;const[h,x]=Rr(p,t,!0);oe(i,h),x&&l.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!a)return J(e)&&s.set(e,gt),gt;if($(r))for(let f=0;f<r.length;f++){const p=vt(r[f]);uo(p)&&(i[p]=q)}else if(r)for(const f in r){const p=vt(f);if(uo(p)){const h=r[f],x=i[p]=$(h)||L(h)?{type:h}:oe({},h);if(x){const N=mo(Boolean,x.type),_=mo(String,x.type);x[0]=N>-1,x[1]=_<0||N<_,(N>-1||V(x,"default"))&&l.push(p)}}}const c=[i,l];return J(e)&&s.set(e,c),c}function uo(e){return e[0]!=="$"}function fo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function po(e,t){return fo(e)===fo(t)}function mo(e,t){return $(t)?t.findIndex(n=>po(n,e)):L(t)&&po(t,e)?0:-1}const Or=e=>e[0]==="_"||e==="$stable",Ds=e=>$(e)?e.map(Me):[Me(e)],Ba=(e,t,n)=>{if(t._n)return t;const s=_t((...o)=>Ds(t(...o)),n);return s._c=!1,s},kr=(e,t,n)=>{const s=e._ctx;for(const o in e){if(Or(o))continue;const r=e[o];if(L(r))t[o]=Ba(o,r,s);else if(r!=null){const i=Ds(r);t[o]=()=>i}}},Lr=(e,t)=>{const n=Ds(t);e.slots.default=()=>n},Fa=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),un(t,"_",n)):kr(t,e.slots={})}else e.slots={},t&&Lr(e,t);un(e.slots,Sn,1)},ja=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=q;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(oe(o,t),!n&&l===1&&delete o._):(r=!t.$stable,kr(t,o)),i=t}else t&&(Lr(e,t),i={default:1});if(r)for(const l in o)!Or(l)&&i[l]==null&&delete o[l]};function us(e,t,n,s,o=!1){if($(e)){e.forEach((h,x)=>us(h,t&&($(t)?t[x]:t),n,s,o));return}if(Lt(s)&&!o)return;const r=s.shapeFlag&4?Mn(s.component)||s.component.proxy:s.el,i=o?null:r,{i:l,r:a}=e,c=t&&t.r,f=l.refs===q?l.refs={}:l.refs,p=l.setupState;if(c!=null&&c!==a&&(ee(c)?(f[c]=null,V(p,c)&&(p[c]=null)):de(c)&&(c.value=null)),L(a))ze(a,l,12,[i,f]);else{const h=ee(a),x=de(a);if(h||x){const N=()=>{if(e.f){const _=h?V(p,a)?p[a]:f[a]:a.value;o?$(_)&&Es(_,r):$(_)?_.includes(r)||_.push(r):h?(f[a]=[r],V(p,a)&&(p[a]=f[a])):(a.value=[r],e.k&&(f[e.k]=a.value))}else h?(f[a]=i,V(p,a)&&(p[a]=i)):x&&(a.value=i,e.k&&(f[e.k]=i))};i?(N.id=-1,fe(N,n)):N()}}}const fe=da;function Va(e){return Ua(e)}function Ua(e,t){const n=Zn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:l,createComment:a,setText:c,setElementText:f,parentNode:p,nextSibling:h,setScopeId:x=Ce,insertStaticContent:N}=e,_=(u,d,m,g=null,y=null,v=null,T=!1,E=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!st(u,d)&&(g=Zt(u),Ie(u,y,v,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:P,shapeFlag:A}=d;switch(b){case Pn:j(u,d,m,g);break;case we:R(u,d,m,g);break;case Hn:u==null&&k(d,m,g,T);break;case pe:I(u,d,m,g,y,v,T,E,w);break;default:A&1?H(u,d,m,g,y,v,T,E,w):A&6?Z(u,d,m,g,y,v,T,E,w):(A&64||A&128)&&b.process(u,d,m,g,y,v,T,E,w,dt)}P!=null&&y&&us(P,u&&u.ref,v,d||u,!d)},j=(u,d,m,g)=>{if(u==null)s(d.el=l(d.children),m,g);else{const y=d.el=u.el;d.children!==u.children&&c(y,d.children)}},R=(u,d,m,g)=>{u==null?s(d.el=a(d.children||""),m,g):d.el=u.el},k=(u,d,m,g)=>{[u.el,u.anchor]=N(u.children,d,m,g,u.el,u.anchor)},B=({el:u,anchor:d},m,g)=>{let y;for(;u&&u!==d;)y=h(u),s(u,m,g),u=y;s(d,m,g)},C=({el:u,anchor:d})=>{let m;for(;u&&u!==d;)m=h(u),o(u),u=m;o(d)},H=(u,d,m,g,y,v,T,E,w)=>{T=T||d.type==="svg",u==null?re(d,m,g,y,v,T,E,w):W(u,d,y,v,T,E,w)},re=(u,d,m,g,y,v,T,E)=>{let w,b;const{type:P,props:A,shapeFlag:S,transition:O,dirs:F}=u;if(w=u.el=i(u.type,v,A&&A.is,A),S&8?f(w,u.children):S&16&&D(u.children,w,null,g,y,v&&P!=="foreignObject",T,E),F&&Ge(u,null,g,"created"),te(w,u,u.scopeId,T,g),A){for(const z in A)z!=="value"&&!ln(z)&&r(w,z,null,A[z],v,u.children,g,y,Re);"value"in A&&r(w,"value",null,A.value),(b=A.onVnodeBeforeMount)&&Se(b,g,u)}F&&Ge(u,null,g,"beforeMount");const X=Ha(y,O);X&&O.beforeEnter(w),s(w,d,m),((b=A&&A.onVnodeMounted)||X||F)&&fe(()=>{b&&Se(b,g,u),X&&O.enter(w),F&&Ge(u,null,g,"mounted")},y)},te=(u,d,m,g,y)=>{if(m&&x(u,m),g)for(let v=0;v<g.length;v++)x(u,g[v]);if(y){let v=y.subTree;if(d===v){const T=y.vnode;te(u,T,T.scopeId,T.slotScopeIds,y.parent)}}},D=(u,d,m,g,y,v,T,E,w=0)=>{for(let b=w;b<u.length;b++){const P=u[b]=E?We(u[b]):Me(u[b]);_(null,P,d,m,g,y,v,T,E)}},W=(u,d,m,g,y,v,T)=>{const E=d.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:P}=d;w|=u.patchFlag&16;const A=u.props||q,S=d.props||q;let O;m&&Qe(m,!1),(O=S.onVnodeBeforeUpdate)&&Se(O,m,d,u),P&&Ge(d,u,m,"beforeUpdate"),m&&Qe(m,!0);const F=y&&d.type!=="foreignObject";if(b?K(u.dynamicChildren,b,E,m,g,F,v):T||Y(u,d,E,null,m,g,F,v,!1),w>0){if(w&16)le(E,d,A,S,m,g,y);else if(w&2&&A.class!==S.class&&r(E,"class",null,S.class,y),w&4&&r(E,"style",A.style,S.style,y),w&8){const X=d.dynamicProps;for(let z=0;z<X.length;z++){const Q=X[z],_e=A[Q],ft=S[Q];(ft!==_e||Q==="value")&&r(E,Q,_e,ft,y,u.children,m,g,Re)}}w&1&&u.children!==d.children&&f(E,d.children)}else!T&&b==null&&le(E,d,A,S,m,g,y);((O=S.onVnodeUpdated)||P)&&fe(()=>{O&&Se(O,m,d,u),P&&Ge(d,u,m,"updated")},g)},K=(u,d,m,g,y,v,T)=>{for(let E=0;E<d.length;E++){const w=u[E],b=d[E],P=w.el&&(w.type===pe||!st(w,b)||w.shapeFlag&70)?p(w.el):m;_(w,b,P,null,g,y,v,T,!0)}},le=(u,d,m,g,y,v,T)=>{if(m!==g){if(m!==q)for(const E in m)!ln(E)&&!(E in g)&&r(u,E,m[E],null,T,d.children,y,v,Re);for(const E in g){if(ln(E))continue;const w=g[E],b=m[E];w!==b&&E!=="value"&&r(u,E,b,w,T,d.children,y,v,Re)}"value"in g&&r(u,"value",m.value,g.value)}},I=(u,d,m,g,y,v,T,E,w)=>{const b=d.el=u?u.el:l(""),P=d.anchor=u?u.anchor:l("");let{patchFlag:A,dynamicChildren:S,slotScopeIds:O}=d;O&&(E=E?E.concat(O):O),u==null?(s(b,m,g),s(P,m,g),D(d.children,m,P,y,v,T,E,w)):A>0&&A&64&&S&&u.dynamicChildren?(K(u.dynamicChildren,S,m,y,v,T,E),(d.key!=null||y&&d===y.subTree)&&Br(u,d,!0)):Y(u,d,m,P,y,v,T,E,w)},Z=(u,d,m,g,y,v,T,E,w)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?y.ctx.activate(d,m,g,T,w):he(d,m,g,y,v,T,w):Mt(u,d,w)},he=(u,d,m,g,y,v,T)=>{const E=u.component=Qa(u,g,y);if(Cn(u)&&(E.ctx.renderer=dt),tc(E),E.asyncDep){if(y&&y.registerDep(E,ne),!u.el){const w=E.subTree=se(we);R(null,w,d,m)}return}ne(E,u,d,m,y,v,T)},Mt=(u,d,m)=>{const g=d.component=u.component;if(la(u,d,m))if(g.asyncDep&&!g.asyncResolved){G(g,d,m);return}else g.next=d,ta(g.update),g.update();else d.el=u.el,g.vnode=d},ne=(u,d,m,g,y,v,T)=>{const E=()=>{if(u.isMounted){let{next:P,bu:A,u:S,parent:O,vnode:F}=u,X=P,z;Qe(u,!1),P?(P.el=F.el,G(u,P,T)):P=F,A&&Bn(A),(z=P.props&&P.props.onVnodeBeforeUpdate)&&Se(z,O,P,F),Qe(u,!0);const Q=Fn(u),_e=u.subTree;u.subTree=Q,_(_e,Q,p(_e.el),Zt(_e),u,y,v),P.el=Q.el,X===null&&aa(u,Q.el),S&&fe(S,y),(z=P.props&&P.props.onVnodeUpdated)&&fe(()=>Se(z,O,P,F),y)}else{let P;const{el:A,props:S}=d,{bm:O,m:F,parent:X}=u,z=Lt(d);if(Qe(u,!1),O&&Bn(O),!z&&(P=S&&S.onVnodeBeforeMount)&&Se(P,X,d),Qe(u,!0),A&&$n){const Q=()=>{u.subTree=Fn(u),$n(A,u.subTree,u,y,null)};z?d.type.__asyncLoader().then(()=>!u.isUnmounted&&Q()):Q()}else{const Q=u.subTree=Fn(u);_(null,Q,m,g,u,y,v),d.el=Q.el}if(F&&fe(F,y),!z&&(P=S&&S.onVnodeMounted)){const Q=d;fe(()=>Se(P,X,Q),y)}(d.shapeFlag&256||X&&Lt(X.vnode)&&X.vnode.shapeFlag&256)&&u.a&&fe(u.a,y),u.isMounted=!0,d=m=g=null}},w=u.effect=new _s(E,()=>Ss(b),u.scope),b=u.update=()=>w.run();b.id=u.uid,Qe(u,!0),b()},G=(u,d,m)=>{d.component=u;const g=u.vnode.props;u.vnode=d,u.next=null,La(u,d.props,g,m),ja(u,d.children,m),Pt(),so(),St()},Y=(u,d,m,g,y,v,T,E,w=!1)=>{const b=u&&u.children,P=u?u.shapeFlag:0,A=d.children,{patchFlag:S,shapeFlag:O}=d;if(S>0){if(S&128){Jt(b,A,m,g,y,v,T,E,w);return}else if(S&256){Je(b,A,m,g,y,v,T,E,w);return}}O&8?(P&16&&Re(b,y,v),A!==b&&f(m,A)):P&16?O&16?Jt(b,A,m,g,y,v,T,E,w):Re(b,y,v,!0):(P&8&&f(m,""),O&16&&D(A,m,g,y,v,T,E,w))},Je=(u,d,m,g,y,v,T,E,w)=>{u=u||gt,d=d||gt;const b=u.length,P=d.length,A=Math.min(b,P);let S;for(S=0;S<A;S++){const O=d[S]=w?We(d[S]):Me(d[S]);_(u[S],O,m,null,y,v,T,E,w)}b>P?Re(u,y,v,!0,!1,A):D(d,m,g,y,v,T,E,w,A)},Jt=(u,d,m,g,y,v,T,E,w)=>{let b=0;const P=d.length;let A=u.length-1,S=P-1;for(;b<=A&&b<=S;){const O=u[b],F=d[b]=w?We(d[b]):Me(d[b]);if(st(O,F))_(O,F,m,null,y,v,T,E,w);else break;b++}for(;b<=A&&b<=S;){const O=u[A],F=d[S]=w?We(d[S]):Me(d[S]);if(st(O,F))_(O,F,m,null,y,v,T,E,w);else break;A--,S--}if(b>A){if(b<=S){const O=S+1,F=O<P?d[O].el:g;for(;b<=S;)_(null,d[b]=w?We(d[b]):Me(d[b]),m,F,y,v,T,E,w),b++}}else if(b>S)for(;b<=A;)Ie(u[b],y,v,!0),b++;else{const O=b,F=b,X=new Map;for(b=F;b<=S;b++){const ge=d[b]=w?We(d[b]):Me(d[b]);ge.key!=null&&X.set(ge.key,b)}let z,Q=0;const _e=S-F+1;let ft=!1,js=0;const Nt=new Array(_e);for(b=0;b<_e;b++)Nt[b]=0;for(b=O;b<=A;b++){const ge=u[b];if(Q>=_e){Ie(ge,y,v,!0);continue}let Pe;if(ge.key!=null)Pe=X.get(ge.key);else for(z=F;z<=S;z++)if(Nt[z-F]===0&&st(ge,d[z])){Pe=z;break}Pe===void 0?Ie(ge,y,v,!0):(Nt[Pe-F]=b+1,Pe>=js?js=Pe:ft=!0,_(ge,d[Pe],m,null,y,v,T,E,w),Q++)}const Vs=ft?Wa(Nt):gt;for(z=Vs.length-1,b=_e-1;b>=0;b--){const ge=F+b,Pe=d[ge],Us=ge+1<P?d[ge+1].el:g;Nt[b]===0?_(null,Pe,m,Us,y,v,T,E,w):ft&&(z<0||b!==Vs[z]?Ze(Pe,m,Us,2):z--)}}},Ze=(u,d,m,g,y=null)=>{const{el:v,type:T,transition:E,children:w,shapeFlag:b}=u;if(b&6){Ze(u.component.subTree,d,m,g);return}if(b&128){u.suspense.move(d,m,g);return}if(b&64){T.move(u,d,m,dt);return}if(T===pe){s(v,d,m);for(let A=0;A<w.length;A++)Ze(w[A],d,m,g);s(u.anchor,d,m);return}if(T===Hn){B(u,d,m);return}if(g!==2&&b&1&&E)if(g===0)E.beforeEnter(v),s(v,d,m),fe(()=>E.enter(v),y);else{const{leave:A,delayLeave:S,afterLeave:O}=E,F=()=>s(v,d,m),X=()=>{A(v,()=>{F(),O&&O()})};S?S(v,F,X):X()}else s(v,d,m)},Ie=(u,d,m,g=!1,y=!1)=>{const{type:v,props:T,ref:E,children:w,dynamicChildren:b,shapeFlag:P,patchFlag:A,dirs:S}=u;if(E!=null&&us(E,null,m,u,!0),P&256){d.ctx.deactivate(u);return}const O=P&1&&S,F=!Lt(u);let X;if(F&&(X=T&&T.onVnodeBeforeUnmount)&&Se(X,d,u),P&6)ti(u.component,m,g);else{if(P&128){u.suspense.unmount(m,g);return}O&&Ge(u,null,d,"beforeUnmount"),P&64?u.type.remove(u,d,m,y,dt,g):b&&(v!==pe||A>0&&A&64)?Re(b,d,m,!1,!0):(v===pe&&A&384||!y&&P&16)&&Re(w,d,m),g&&Bs(u)}(F&&(X=T&&T.onVnodeUnmounted)||O)&&fe(()=>{X&&Se(X,d,u),O&&Ge(u,null,d,"unmounted")},m)},Bs=u=>{const{type:d,el:m,anchor:g,transition:y}=u;if(d===pe){ei(m,g);return}if(d===Hn){C(u);return}const v=()=>{o(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:E}=y,w=()=>T(m,v);E?E(u.el,v,w):w()}else v()},ei=(u,d)=>{let m;for(;u!==d;)m=h(u),o(u),u=m;o(d)},ti=(u,d,m)=>{const{bum:g,scope:y,update:v,subTree:T,um:E}=u;g&&Bn(g),y.stop(),v&&(v.active=!1,Ie(T,u,d,m)),E&&fe(E,d),fe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Re=(u,d,m,g=!1,y=!1,v=0)=>{for(let T=v;T<u.length;T++)Ie(u[T],d,m,g,y)},Zt=u=>u.shapeFlag&6?Zt(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),Fs=(u,d,m)=>{u==null?d._vnode&&Ie(d._vnode,null,null,!0):_(d._vnode||null,u,d,null,null,null,m),so(),gr(),d._vnode=u},dt={p:_,um:Ie,m:Ze,r:Bs,mt:he,mc:D,pc:Y,pbc:K,n:Zt,o:e};let Dn,$n;return t&&([Dn,$n]=t(dt)),{render:Fs,hydrate:Dn,createApp:Oa(Fs,Dn)}}function Qe({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ha(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Br(e,t,n=!1){const s=e.children,o=t.children;if($(s)&&$(o))for(let r=0;r<s.length;r++){const i=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=We(o[r]),l.el=i.el),n||Br(i,l)),l.type===Pn&&(l.el=i.el)}}function Wa(e){const t=e.slice(),n=[0];let s,o,r,i,l;const a=e.length;for(s=0;s<a;s++){const c=e[s];if(c!==0){if(o=n[n.length-1],e[o]<c){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)l=r+i>>1,e[n[l]]<c?r=l+1:i=l;c<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}const Ka=e=>e.__isTeleport,pe=Symbol.for("v-fgt"),Pn=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),Hn=Symbol.for("v-stc"),jt=[];let Ae=null;function Ee(e=!1){jt.push(Ae=e?null:[])}function za(){jt.pop(),Ae=jt[jt.length-1]||null}let Kt=1;function ho(e){Kt+=e}function Fr(e){return e.dynamicChildren=Kt>0?Ae||gt:null,za(),Kt>0&&Ae&&Ae.push(e),e}function Vt(e,t,n,s,o,r){return Fr(Be(e,t,n,s,o,r,!0))}function ut(e,t,n,s,o){return Fr(se(e,t,n,s,o,!0))}function mn(e){return e?e.__v_isVNode===!0:!1}function st(e,t){return e.type===t.type&&e.key===t.key}const Sn="__vInternal",jr=({key:e})=>e??null,an=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||de(e)||L(e)?{i:ce,r:e,k:t,f:!!n}:e:null);function Be(e,t=null,n=null,s=0,o=null,r=e===pe?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jr(t),ref:t&&an(t),scopeId:Er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ce};return l?($s(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=ee(n)?8:16),Kt>0&&!i&&Ae&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ae.push(a),a}const se=Ya;function Ya(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===ca)&&(e=we),mn(e)){const l=Xe(e,t,!0);return n&&$s(l,n),Kt>0&&!r&&Ae&&(l.shapeFlag&6?Ae[Ae.indexOf(e)]=l:Ae.push(l)),l.patchFlag|=-2,l}if(rc(e)&&(e=e.__vccOpts),t){t=Xa(t);let{class:l,style:a}=t;l&&!ee(l)&&(t.class=$e(l)),J(a)&&(dr(a)&&!$(a)&&(a=oe({},a)),t.style=De(a))}const i=ee(e)?1:ua(e)?128:Ka(e)?64:J(e)?4:L(e)?2:0;return Be(e,t,n,s,o,i,r,!0)}function Xa(e){return e?dr(e)||Sn in e?oe({},e):e:null}function Xe(e,t,n=!1){const{props:s,ref:o,patchFlag:r,children:i}=e,l=t?Ja(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&jr(l),ref:t&&t.ref?n&&o?$(o)?o.concat(an(t)):[o,an(t)]:an(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function qa(e=" ",t=0){return se(Pn,null,e,t)}function Vr(e="",t=!1){return t?(Ee(),ut(we,null,e)):se(we,null,e)}function Me(e){return e==null||typeof e=="boolean"?se(we):$(e)?se(pe,null,e.slice()):typeof e=="object"?We(e):se(Pn,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function $s(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),$s(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Sn in t)?t._ctx=ce:o===3&&ce&&(ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ce},n=32):(t=String(t),s&64?(n=16,t=[qa(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ja(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=$e([t.class,s.class]));else if(o==="style")t.style=De([t.style,s.style]);else if(En(o)){const r=t[o],i=s[o];i&&r!==i&&!($(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function Se(e,t,n,s=null){ve(e,t,7,[n,s])}const Za=Nr();let Ga=0;function Qa(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Za,r={uid:Ga++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rr(s,o),emitsOptions:br(s,o),emit:null,emitted:null,propsDefaults:q,inheritAttrs:s.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=oa.bind(null,r),e.ce&&e.ce(r),r}let ie=null;const ec=()=>ie||ce;let Rs,pt,go="__VUE_INSTANCE_SETTERS__";(pt=Zn()[go])||(pt=Zn()[go]=[]),pt.push(e=>ie=e),Rs=e=>{pt.length>1?pt.forEach(t=>t(e)):pt[0](e)};const xt=e=>{Rs(e),e.scope.on()},at=()=>{ie&&ie.scope.off(),Rs(null)};function Ur(e){return e.vnode.shapeFlag&4}let zt=!1;function tc(e,t=!1){zt=t;const{props:n,children:s}=e.vnode,o=Ur(e);ka(e,n,o,t),Fa(e,s);const r=o?nc(e,t):void 0;return zt=!1,r}function nc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=fr(new Proxy(e.ctx,Pa));const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?oc(e):null;xt(e),Pt();const r=ze(s,e,0,[e.props,o]);if(St(),at(),Xo(r)){if(r.then(at,at),t)return r.then(i=>{yo(e,i,t)}).catch(i=>{Tn(i,e,0)});e.asyncDep=r}else yo(e,r,t)}else Hr(e,t)}function yo(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=pr(t)),Hr(e,n)}let bo;function Hr(e,t,n){const s=e.type;if(!e.render){if(!t&&bo&&!s.render){const o=s.template||Ns(e).template;if(o){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,c=oe(oe({isCustomElement:r,delimiters:l},i),a);s.render=bo(o,c)}}e.render=s.render||Ce}{xt(e),Pt();try{Sa(e)}finally{St(),at()}}}function sc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function oc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return sc(e)},slots:e.slots,emit:e.emit,expose:t}}function Mn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(pr(fr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bt)return Bt[n](e)},has(t,n){return n in t||n in Bt}}))}function rc(e){return L(e)&&"__vccOpts"in e}const Wr=(e,t)=>Zl(e,t,zt);function Kr(e,t,n){const s=arguments.length;return s===2?J(t)&&!$(t)?mn(t)?se(e,null,[t]):se(e,t):se(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&mn(n)&&(n=[n]),se(e,t,n))}const ic=Symbol.for("v-scx"),lc=()=>Ft(ic),ac="3.3.9",cc="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,Eo=ot&&ot.createElement("template"),uc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?ot.createElementNS(cc,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Eo.innerHTML=s?`<svg>${e}</svg>`:e;const l=Eo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ve="transition",Dt="animation",Yt=Symbol("_vtc"),qt=(e,{slots:t})=>Kr(ha,dc(e),t);qt.displayName="Transition";const zr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};qt.props=oe({},_r,zr);const et=(e,t=[])=>{$(e)?e.forEach(n=>n(...t)):e&&e(...t)},vo=e=>e?$(e)?e.some(t=>t.length>1):e.length>1:!1;function dc(e){const t={};for(const I in e)I in zr||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=i,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,N=fc(o),_=N&&N[0],j=N&&N[1],{onBeforeEnter:R,onEnter:k,onEnterCancelled:B,onLeave:C,onLeaveCancelled:H,onBeforeAppear:re=R,onAppear:te=k,onAppearCancelled:D=B}=t,W=(I,Z,he)=>{tt(I,Z?f:l),tt(I,Z?c:i),he&&he()},K=(I,Z)=>{I._isLeaving=!1,tt(I,p),tt(I,x),tt(I,h),Z&&Z()},le=I=>(Z,he)=>{const Mt=I?te:k,ne=()=>W(Z,I,he);et(Mt,[Z,ne]),wo(()=>{tt(Z,I?a:r),Ue(Z,I?f:l),vo(Mt)||_o(Z,s,_,ne)})};return oe(t,{onBeforeEnter(I){et(R,[I]),Ue(I,r),Ue(I,i)},onBeforeAppear(I){et(re,[I]),Ue(I,a),Ue(I,c)},onEnter:le(!1),onAppear:le(!0),onLeave(I,Z){I._isLeaving=!0;const he=()=>K(I,Z);Ue(I,p),hc(),Ue(I,h),wo(()=>{I._isLeaving&&(tt(I,p),Ue(I,x),vo(C)||_o(I,s,j,he))}),et(C,[I,he])},onEnterCancelled(I){W(I,!1),et(B,[I])},onAppearCancelled(I){W(I,!0),et(D,[I])},onLeaveCancelled(I){K(I),et(H,[I])}})}function fc(e){if(e==null)return null;if(J(e))return[Wn(e.enter),Wn(e.leave)];{const t=Wn(e);return[t,t]}}function Wn(e){return hl(e)}function Ue(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Yt]||(e[Yt]=new Set)).add(t)}function tt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Yt];n&&(n.delete(t),n.size||(e[Yt]=void 0))}function wo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let pc=0;function _o(e,t,n,s){const o=e._endId=++pc,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:i,timeout:l,propCount:a}=mc(e,t);if(!i)return s();const c=i+"end";let f=0;const p=()=>{e.removeEventListener(c,h),r()},h=x=>{x.target===e&&++f>=a&&p()};setTimeout(()=>{f<a&&p()},l+1),e.addEventListener(c,h)}function mc(e,t){const n=window.getComputedStyle(e),s=N=>(n[N]||"").split(", "),o=s(`${Ve}Delay`),r=s(`${Ve}Duration`),i=xo(o,r),l=s(`${Dt}Delay`),a=s(`${Dt}Duration`),c=xo(l,a);let f=null,p=0,h=0;t===Ve?i>0&&(f=Ve,p=i,h=r.length):t===Dt?c>0&&(f=Dt,p=c,h=a.length):(p=Math.max(i,c),f=p>0?i>c?Ve:Dt:null,h=f?f===Ve?r.length:a.length:0);const x=f===Ve&&/\b(transform|all)(,|$)/.test(s(`${Ve}Property`).toString());return{type:f,timeout:p,propCount:h,hasTransform:x}}function xo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>To(n)+To(e[s])))}function To(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function hc(){return document.body.offsetHeight}function gc(e,t,n){const s=e[Yt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Os=Symbol("_vod"),ks={beforeMount(e,{value:t},{transition:n}){e[Os]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):$t(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),$t(e,!0),s.enter(e)):s.leave(e,()=>{$t(e,!1)}):$t(e,t))},beforeUnmount(e,{value:t}){$t(e,t)}};function $t(e,t){e.style.display=t?e[Os]:"none"}function yc(e,t,n){const s=e.style,o=ee(n);if(n&&!o){if(t&&!ee(t))for(const r in t)n[r]==null&&ds(s,r,"");for(const r in n)ds(s,r,n[r])}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),Os in e&&(s.display=r)}}const Ao=/\s*!important$/;function ds(e,t,n){if($(n))n.forEach(s=>ds(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=bc(e,t);Ao.test(n)?e.setProperty(It(s),n.replace(Ao,""),"important"):e[s]=n}}const Co=["Webkit","Moz","ms"],Kn={};function bc(e,t){const n=Kn[t];if(n)return n;let s=vt(t);if(s!=="filter"&&s in e)return Kn[t]=s;s=Zo(s);for(let o=0;o<Co.length;o++){const r=Co[o]+s;if(r in e)return Kn[t]=r}return t}const Io="http://www.w3.org/1999/xlink";function Ec(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Io,t.slice(6,t.length)):e.setAttributeNS(Io,t,n);else{const r=wl(t);n==null||r&&!Go(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function vc(e,t,n,s,o,r,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,o,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const c=l==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Go(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function wc(e,t,n,s){e.addEventListener(t,n,s)}function _c(e,t,n,s){e.removeEventListener(t,n,s)}const Po=Symbol("_vei");function xc(e,t,n,s,o=null){const r=e[Po]||(e[Po]={}),i=r[t];if(s&&i)i.value=s;else{const[l,a]=Tc(t);if(s){const c=r[t]=Ic(s,o);wc(e,l,c,a)}else i&&(_c(e,l,i,a),r[t]=void 0)}}const So=/(?:Once|Passive|Capture)$/;function Tc(e){let t;if(So.test(e)){t={};let s;for(;s=e.match(So);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let zn=0;const Ac=Promise.resolve(),Cc=()=>zn||(Ac.then(()=>zn=0),zn=Date.now());function Ic(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ve(Pc(s,n.value),t,5,[s])};return n.value=e,n.attached=Cc(),n}function Pc(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Mo=/^on[a-z]/,Sc=(e,t,n,s,o=!1,r,i,l,a)=>{t==="class"?gc(e,s,o):t==="style"?yc(e,n,s):En(t)?bs(t)||xc(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mc(e,t,s,o))?vc(e,t,s,r,i,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ec(e,t,s,o))};function Mc(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Mo.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Mo.test(t)&&ee(n)?!1:t in e}const Nc=oe({patchProp:Sc},uc);let No;function Dc(){return No||(No=Va(Nc))}const $c=(...e)=>{const t=Dc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Rc(s);if(!o)return;const r=t._component;!L(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Rc(e){return ee(e)?document.querySelector(e):e}const Oc="_root_3unp2_2",kc={root:Oc},Nn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Lc={props:{active:Boolean,x:Number,y:Number},computed:{transform(){return this.scale!==void 0?`transform: translate(${this.x}px, ${this.y}px)`:`transform: translate(${this.x}px, ${this.y}px)`}}};function Bc(e,t,n,s,o,r){return Ee(),ut(qt,{name:"fade"},{default:_t(()=>[Ms(Be("div",{class:$e(e.$style.root),style:De(r.transform)},[Ia(e.$slots,"default")],6),[[ks,n.active]])]),_:3})}const Fc={$style:kc},Do=Nn(Lc,[["render",Bc],["__cssModules",Fc]]),jc="_root_l4seg_2",Vc="_rootTitle_l4seg_13",Uc={root:jc,rootTitle:Vc},Hc={inject:["setFocus","getSurface"],props:{meta:Object,isFocus:Boolean},computed:{polygonPath(){const e=this.meta.polygonPath;let t=0,n=e.length,s="M ";for(;t<n;)s+=`${e[t]} ${e[t+1]}`,t+=2,s+=t===n?" Z":" L ";return s},viewBox(){const e=this.meta.viewbox;return`${e.x-3} ${e.y-3} ${e.width+6} ${e.height+6}`},width(){return this.meta.viewbox.width+6},height(){return this.meta.viewbox.height+6},title(){var e,t;return((t=(e=this.meta)==null?void 0:e.source)==null?void 0:t.tag)||""},transform(){const e=this.meta.viewbox;return`transform: translate(${e.x-3}px, ${e.y-3}px)`}},methods:{}},Wc=["focus"],Kc=["width","height","viewBox"],zc=["d"];function Yc(e,t,n,s,o,r){return Ee(),Vt("div",{class:$e(e.$style.root),focus:n.isFocus},[n.meta.active?(Ee(),Vt(pe,{key:0},[Be("div",{class:$e(e.$style.rootTitle)},_l(r.title),3),(Ee(),Vt("svg",{style:De(r.transform),width:r.width,height:r.height,viewBox:r.viewBox,xmlns:"http://www.w3.org/2000/svg"},[Be("path",{fill:"none","stroke-width":"3",stroke:"blue",d:r.polygonPath},null,8,zc)],12,Kc))],64)):Vr("",!0)],10,Wc)}const Xc={$style:Uc},$o=Nn(Hc,[["render",Yc],["__cssModules",Xc]]),qc="_root_s5oev_2",Jc="_seg_s5oev_13",Zc={root:qc,seg:Jc},Gc={props:{segments:Object},data(){return{useTransition:!1}},computed:{active(){return this.segments.active},transform(){if(this.active){const e=this.segments.segments,t=e[0]===e[2],n=this.useTransition?"transition: all .3s;":"";return t?`${n}transform: translate(${e[0]}px, ${e[1]}px)`:`${n}transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(0px, 0px)"},transformSeg(){if(this.active){const e=this.segments.segments;return e[0]===e[2]?`transform: scale(3, ${e[3]-e[1]})`:`transform: scale(${e[2]-e[0]}, 3)`}return"transform: scale(0, 0);"}},watch:{active(e){console.log(e),this.$nextTick(()=>{this.useTransition=e})}}};function Qc(e,t,n,s,o,r){return Ee(),ut(qt,{name:"fade"},{default:_t(()=>[Ms(Be("div",{class:$e(e.$style.root),style:De(r.transform)},[Be("div",{class:$e(e.$style.seg),style:De(r.transformSeg)},null,6)],6),[[ks,r.active]])]),_:1})}const eu={$style:Zc},tu=Nn(Gc,[["render",Qc],["__cssModules",eu]]),nu="_root_14orw_2",su="_rect_14orw_13",ou={root:nu,rect:su},ru={props:{meta:Object},computed:{active(){return this.meta.active},position(){if(this.active){const e=this.meta.rect;return`transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(-999px, 0px)"},dimension(){if(this.active){const e=this.meta.rect;return`transform: scale(${e[2]}, ${e[3]})`}return"transform: scale(0, 0)"}}};function iu(e,t,n,s,o,r){return Ee(),ut(qt,{name:"fade"},{default:_t(()=>[Ms(Be("div",{class:$e(e.$style.root),style:De(r.position)},[Be("div",{class:$e(e.$style.rect),style:De(r.dimension)},null,6)],6),[[ks,r.active]])]),_:1})}const lu={$style:ou},au=Nn(ru,[["render",iu],["__cssModules",lu]]),cu={__name:"surface",setup(e){const n=Ft("getSurface")(),{highlight_elem:s,targets:o,highlight_seg:r,highlight_empty_slot:i}=n,l=Wr(()=>({position:"relative",left:0}));return(a,c)=>(Ee(),Vt("div",{style:De(l.value)},[(Ee(!0),Vt(pe,null,Ca(Oe(o),f=>(Ee(),ut(Do,{x:f.position[0],y:f.position[1],active:!0},{default:_t(()=>[se($o,{meta:f,isFocus:!0},null,8,["meta"])]),_:2},1032,["x","y"]))),256)),se(au,{meta:Oe(i)},null,8,["meta"]),Oe(s).active?(Ee(),ut(Do,{key:0,x:Oe(s).position[0],y:Oe(s).position[1],active:Oe(s).active},{default:_t(()=>[se($o,{meta:Oe(s),isFocus:!1},null,8,["meta"])]),_:1},8,["x","y","active"])):Vr("",!0),se(tu,{segments:Oe(r)},null,8,["segments"])],4))}};function uu(e,t){let n=1/0;return Yr(e,t).forEach(s=>{n=Math.min(n,s.left)}),n}function du(e,t){let n=-1/0;return Yr(e,t).forEach(s=>{n=Math.max(n,s.right)}),n}function Yr(e,t){const n=fu(e,t);return n.length>0?n:pu(e,t)}function fu(e,t){return t.filter(n=>n.top<=e&&n.bottom>e)}function pu(e,t){return t.filter(n=>n.top<=e&&n.bottom==e)}function mu(e){const t=[],n=hu(e);n.sort((r,i)=>r-i);let s=0,o=0;return n.forEach((r,i)=>{let l=uu(r,e),a=du(r,e);i===0?(t.push(l,r),t.push(a,r)):(l!==s&&t.unshift(s,r),t.unshift(l,r),a!==o&&t.push(o,r),t.push(a,r)),s=l,o=a}),t}function hu(e){const t=new Set;return e.forEach(n=>{t.add(n.bottom),t.add(n.top)}),Array.from(t)}class gu{constructor(){M(this,"targets",rt([]));M(this,"highlight_elem",rt({type:void 0,active:!1,rects:[],polygonPath:[],viewbox:[],source:null}));M(this,"highlight_seg",rt({active:!1,segments:[]}));M(this,"highlight_empty_slot",rt({active:!1,rect:[]}))}apply(t,n){this.ide=t,this.render=new yu(this,n),this.render.init(),t.addEventListener("zoompan",s=>{s.detail.zoom&&(this.highlight_elem.active&&Object.assign(this.highlight_elem,{...this.resolveRects(this.highlight_elem.rects)}),this.targets.forEach(o=>{Object.assign(o,{...this.resolveRects(o.rects)})}))})}refresh(t){const n=[...this.targets,this.highlight_elem];t.forEach(s=>{const o=n.find(r=>rn(r.source,s.source));o&&Object.assign(o,this.resolveRects(s.rects))})}hasTarget(t){return this.targets.find(n=>rn(n.source,t))}_targetExist(t){return!!this.targets.find(s=>rn(s.source,t.source))}highlightElem(t){if(this._targetExist(t)){this.closeHighlightElem();return}rn(this.highlight_elem.source,t.source)||Object.assign(this.highlight_elem,{...t,...this.resolveRects(t.rects),active:!0})}getFocusNodes(){return this.targets.map(t=>U(t.source))}setFocus(t){if(!t){const s=this.targets.length;this.targets.splice(0,s);return}if(this._targetExist(t))return;this.closeHighlightElem();const n=this.targets.length;this.targets.splice(0,n,{...t,...this.resolveRects(t.rects),active:!0})}addFocus(t){this._targetExist(t)||this.targets.push({...t,...this.resolveRects(t.rects),active:!0})}closeHighlightElem(){this.highlight_elem.active&&Object.assign(this.highlight_elem,{active:!1,source:null})}resolveRects(t){const s=this.ide.scale;if(t.length===1){const{x:o,y:r,width:i,height:l}=t[0],a=[0,0,i*s,0,i*s,l*s,0,l*s];return{position:[o*s,r*s],polygonPath:a,viewbox:Xr(a)}}else{const o=[t[0].x,t[0].y];return bu(o,s,mu(t))}}highlightSeg(t,n){if(this.highlight_seg.active=t,t){const o=this.ide.scale;this.highlight_seg.segments[0]=n[0]*o,this.highlight_seg.segments[1]=n[1]*o,this.highlight_seg.segments[2]=n[2]*o,this.highlight_seg.segments[3]=n[3]*o}}highlightEmptySlot(t,n){if(this.highlight_empty_slot.active=t,t){const o=this.ide.scale;this.highlight_empty_slot.rect[0]=n[0]*o,this.highlight_empty_slot.rect[1]=n[1]*o,this.highlight_empty_slot.rect[2]=n[2]*o,this.highlight_empty_slot.rect[3]=n[3]*o}}closeAll(){this.closeHighlightElem(),this.highlightSeg(!1),this.highlightEmptySlot(!1)}}class yu{constructor(t,n){this.surface=t,this.dom=n}init(){$c(this.renderFn()).mount(this.dom)}renderFn(){const t=this.surface;return{inheritAttrs:!1,setup(){return Dr("getSurface",()=>t),()=>Kr(cu)}}}}function rn(e,t){return U(e)===U(t)}function bu(e,t,n){const s=n.length;let o=0;for(;o<s;)n[o]=(n[o]-e[0])*t,n[o+1]=(n[o+1]-e[1])*t,o+=2;return{position:[e[0]*t,e[1]*t],polygonPath:n,viewbox:Xr(n)}}function Xr(e){if(e.length===0)return{width:0,height:0,x:0,y:0};let t=1/0,n=1/0,s=-1/0,o=-1/0,r=0;for(;r<e.length;){const i=e[r],l=e[r+1];i<t&&(t=i),i>s&&(s=i),l<n&&(n=l),l>o&&(o=l),r+=2}return{width:Math.max(s-t,10),height:Math.max(o-n,10),x:t,y:n}}class Eu{constructor(){M(this,"proxies",new WeakMap)}registOrigin(t){const{origin:n,source:s}=t;if(!this.proxies.has(s.window))this.proxies.set(s.window,{postIframeMessage(o){s.postMessage(o,n)}});else{const o=this.proxies.get(s.window);Object.assign(o,{postIframeMessage(r){s.postMessage(r,n)}})}this._run(s.window)}registIDE(t,n){if(!this.proxies.has(n.contentWindow))this.proxies.set(n.contentWindow,{ide:t});else{const s=this.proxies.get(n.contentWindow);Object.assign(s,{ide:t})}this._run(n.contentWindow)}_run(t){const n=this.proxies.get(t);n.ide&&n.postIframeMessage&&(n.ide.init(n.postIframeMessage),n.ready=!0)}listen(){window.addEventListener("message",t=>{const n=t.data;n.type==="Event"&&n.name==="proxyReady"?this.registOrigin(t):this.distribute(t)})}distribute(t){const n=t.source;if(this.proxies.has(n.window)){const s=this.proxies.get(n.window);s.ready&&s.ide.onMessage(t)}}}const qr=new Eu;qr.listen();function hn(e,t){let n=`oneTripToPreview-${hn.uuid++}`,s;const o=new Promise(i=>{s=i}),r=i=>{const l=i.data;l.uuid===n&&(s(l.response),window.removeEventListener("message",r))};return window.addEventListener("message",r),e({uuid:n,...t}),o}hn.uuid=0;class vu extends EventTarget{constructor(n){super();M(this,"initialZoom",1);M(this,"padding",20);M(this,"maxZoom",2);M(this,"minZoom",.5);M(this,"deviceWidth",0);M(this,"deviceHeight","auto");M(this,"position",{x:0,y:0});M(this,"scale",1);M(this,"_registedMethods",new Map);M(this,"postIframeMessage",null);this.simulator=n.simulator,this.surface=new gu,this.getSourceByNodePath=n.getSourceByNodePath,this.preRegistMethods()}$mount(n){const s=wu(),o=_u(),r=xu(),i=Tu();s.appendChild(o),s.appendChild(r),o.appendChild(i),this.domCache={viewport:s,viewcontent:o,groundAnchor:r,iframe:i},n.appendChild(s),i.addEventListener("load",()=>{console.log("onload!"),qr.registIDE(this,i)}),o.style.height=`${s.getBoundingClientRect().height}px`,this.simulator.load(i)}init(n){this.postIframeMessage=n;const s=l=>{console.log("resized!",this.simulator),this.domCache.viewcontent.style.height=`${l.scrollHeight}px`},r=(()=>{let l=[];return(a,c)=>{a==="wheel"&&l.length===3&&l.every(f=>f==="wheel")&&(console.log("onWheel"),this.onWheelInFrame(c)),l.unshift(a),l.length>3&&(l.length=3)}})().bind(this);this.onMessage=l=>{const a=l.data;if(a.type==="Event")switch(a.name){case"wheel":case"scroll":r(a.name,a.payload.eventMeta);break;case"dragstart":this.dispatchEvent(new CustomEvent("frame:dragstart",{detail:a.payload}));break;case"refreshBoundings":this.refreshBoundings(a.payload);break;case"mousemove":this.highlightNode(a.payload.elementInfo);break;case"dragover":this.dispatchEvent(new CustomEvent("frame:dragover",{detail:a.payload}));break;case"dragend":this.dispatchEvent(new CustomEvent("frame:dragend",{detail:a.payload}));break;case"hesitateWhenDragging":this.dispatchEvent(new CustomEvent("frame:hesitateWhenDragging",{detail:a.payload}));break;case"click":this._focusOnNode(a.payload);break;case"dblclick":this.dispatchEvent(new CustomEvent("frame:requestEditContent",{detail:a.payload}));break;case"contentchange":this.dispatchEvent(new CustomEvent("frame:contentChange",{detail:a.payload}));break;case"resizeObserver":s(a.payload);break}if(a.type==="Method"){const c=this._registedMethods.get(a.name);if(c){const f=a.uuid;c(p=>{n({type:"Response",result:"success",uuid:f,response:p},l.origin)},p=>{n({type:"Response",result:"failed",uuid:f,err:p},l.origin)},a.payload)}}};const i=this.domCache.viewport;i.addEventListener("mousemove",l=>{l.target===i&&this.surface.closeHighlightElem()}),i.addEventListener("click",l=>{l.target===i&&(this.surface.closeAll(),this.surface.setFocus())}),i.addEventListener("wheel",this.onWheelInViewport.bind(this),{passive:!1}),this.surface.apply(this,this.domCache.groundAnchor),this.dispatchEvent(new CustomEvent("ready",{detail:{target:this.iframe}}))}preRegistMethods(){}refreshBoundings(n){const s=n.elementInfos;s.forEach(o=>{o.source=this.getSourceByNodePath(o.target)}),this.surface.refresh(s)}highlightNode(n){const{target:s,rects:o}=n;if(s){const r=this.getSourceByNodePath(s);this.surface.highlightElem({source:r,rects:o})}else this.surface.closeHighlightElem()}closeHighlight(){this.surface.closeHighlightElem()}async highlightNodeByNodePath(n){const s=await this.getElementInfoByNodePath(n);this.highlightNode(s)}clearFocus(){this.surface.setFocus()}_focusOnNode(n){const{target:s,rects:o}=n.elementInfo,{shiftKey:r}=n.eventMeta;if(s){this.surface.closeHighlightElem();const i=this.getSourceByNodePath(s);r?this.surface.addFocus({source:i,rects:o}):this.surface.setFocus({source:i,rects:o})}else this.surface.setFocus()}_calculateToViewport(n,s){const o=this.scale,r=this.position;s[0]=n[0]*o+r.x,s[1]=n[1]*o+r.y}syncGroundAnchor(){const n=[0,0];this._calculateToViewport(n,n),this.domCache.groundAnchor.style.transform=`translate(${n[0]}px, ${n[1]}px)`}resolveEventOffsetToViewport(n){const{clientX:s,clientY:o}=n,r=[s,o];return this._calculateToViewport(r,r),r}onWheelInViewport(n){n.preventDefault();const[s,o]=this.resolveEventOffset(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,o)}onWheelInFrame(n){const[s,o]=this.resolveEventOffsetToViewport(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,o)}_onWheel(n,s,o,r,i){n?(o=-o,this.zoomHandler(r,i,o)):this.panHandler(-s,-o)}resolveEventOffset(n){const{clientX:s,clientY:o}=n,{x:r,y:i}=this.domCache.viewport.getBoundingClientRect();return[s-r,o-i]}zoomHandler(n,s,o){if(this._zooming)return;this._zooming=!0;const r=this.scale;let i=r;const l=o>0?1.05:1/1.05;i*=l,i=Math.min(this.maxZoom,Math.max(this.minZoom,i));const{x:a,y:c}=this.position,f=i/r,p=n-(n-a)*f,h=s-(s-c)*f;this.scale=i,Object.assign(this.position,{x:p,y:h}),this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!0}})),this._zooming=!1}panHandler(n,s){this._panning||(this._panning=!0,this.position.x+=n,this.position.y+=s,this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!1}})),this._panning=!1)}_resetTransform(){const{x:n,y:s}=this.position,o=this.scale,r=`matrix(${o}, 0, 0, ${o}, ${n}, ${s})`;this.domCache.viewcontent.style[ll]=r,this.syncGroundAnchor()}_resolveEventOffsetInFrame(n){const{clientX:s,clientY:o}=n,{x:r,y:i}=this.position,l=this.scale,a=this.domCache.viewport.getBoundingClientRect();return[s*l+r+a.x,o*l+i+a.y]}async doDrag(n,s,o,r,i){this.postIframeMessage({type:"Event",name:"startDragging",payload:{nodePaths:s}});const l=document.importNode(n);l.style.position="fixed",l.style["pointer-events"]="none",document.body.appendChild(l),o&&await o();const a=x=>{if(r.execute)return;r.execute=!0;const[N,_]=this._resolveEventOffsetInFrame(x.detail.eventMeta);l.style.left=`${N}px`,l.style.top=`${_}px`,r({elementInfo:x.detail.elementInfo,eventMeta:x.detail.eventMeta,inFrame:!0,notAllowed:x.detail.notAllowed},c)};function c(){r.execute=!1}const f=x=>{if(r.execute)return;r.execute=!0;const{clientX:N,clientY:_}=x;l.style.left=`${N}px`,l.style.top=`${_}px`,r({elementInfo:null,eventMeta:x,inFrame:!1,notAllowed:!0},c)},p=async x=>{l.remove(),this.removeEventListener("frame:dragend",p),this.removeEventListener("frame:dragover",a),this.removeEventListener("frame:hesitateWhenDragging",h),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",p),i&&await i(),this.postIframeMessage({type:"Event",name:"stopDragging"})},h=x=>{this.surface.closeAll()};this.addEventListener("frame:dragend",p),this.addEventListener("frame:dragover",a),this.addEventListener("frame:hesitateWhenDragging",h),document.addEventListener("mousemove",f),document.addEventListener("mouseup",p)}doEditContent(n){this.postIframeMessage({type:"Method",name:"editContent",payload:{nodePath:n}})}setCursorInFrame(n){this.postIframeMessage({type:"Method",name:"setCursor",payload:{cursor:n}})}async getElementInfoByNodePath(n){return await hn(this.postIframeMessage,{type:"Method",name:"getElementInfoByNodePath",payload:{nodePath:n}})}async getElementsInfoByNodePath(n){return await hn(this.postIframeMessage,{type:"Method",name:"getElementsInfoByNodePath",payload:{nodePaths:n}})}startObserveRootElem(n){this.postIframeMessage({type:"Method",name:"startObserveRootNodeSize",payload:{selector:n}})}setElementsTemporaryStyle(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryStyle",payload:n})}setElementsTemporaryAttribute(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryAttribute",payload:n})}makeDraggingElemMove(n){this.postIframeMessage({type:"Event",name:"makeDraggingElemMove",payload:n})}registMethod(n,s){const{isAsync:o,body:r}=s,i=o?async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const f=await r.call(this,...c);l(f)}catch(f){a(f)}finally{i.execute=!1}}}:async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const f=r.call(this,...c);l(f)}catch(f){a(f)}finally{i.execute=!1}}};this._registedMethods.set(n,i)}}function wu(){return bn({tag:"div",style:{position:"relative",left:0,top:0,width:"100%",height:"100%","user-select":"none",overflow:"hidden",background:"rgba(0,0,0,0.1)"}})}function _u(){return bn({tag:"div",style:{position:"absolute",top:0,left:0,transformOrigin:"top left",width:"100%",overflow:"hidden",background:"#fff",userSelect:"none"}})}function xu(){return bn({tag:"div",style:{position:"absolute",left:0,top:0,width:0,height:0}})}function Tu(){return bn({tag:"iframe",style:{width:"100%",height:"100%",border:"none"},attributes:{scrolling:"no"}})}const Ro={[ye.ROW]:{getSegs:jo,shiftHighlighter:Vo},[ye.COLUMN]:{getSegs:Fo,shiftHighlighter:Uo},[ye.AUTO]:{getSegs:Pi,shiftHighlighter:Ii}},mt={PRE:"pre",AFTER:"after"};function Au(e,t){t.forEach(n=>{e.addChild(n)})}function Cu(e,t){let n=e;const s=e.parentNode,o=t.slice();for(;o.length;){const r=o.pop();s.insertNodeBefore(n,r),n=r}}function Iu(e,t){let n=e;const s=e.parentNode,o=t.slice();for(;o.length;){const r=o.shift();s.insertNodeAfter(n,r),n=r}}function Pu(e,t){const n={};return t.forEach(s=>{s in e&&delete e[s]}),n}function Jr(e){var t;if((t=e.parentNode)!=null&&t.isAbsolute){const n=cn(e.staticStyle);Pu(n,["left","right","top","bottom"]),e.staticStyle=qn(n)}}function Ls(e){e.forEach(t=>{Jr(t)})}async function Su(e,t,n,s,o,r){const i=!t||r.find(N=>t.dropable(N)&&N.dropToAccept(t)),l=await e.getElementsInfoByNodePath(s);let{getSegs:a,shiftHighlighter:c}=Ro[o],f=1/0,p,h,x;if(i&&s.forEach(N=>{l[N].rects.forEach(j=>{a(j,l[N]).forEach((k,B)=>{const C=Xs(n,k);C<f&&(f=C,p=k,h=N,x=B===0?mt.PRE:mt.AFTER)})})}),t){const N=t.nodePath,_=t.parentNode;if(r.find(R=>_.dropable(R)&&R.dropToAccept(_))){const R=_.direction||ye.AUTO,{getSegs:k,shiftHighlighter:B}=Ro[R],C=await e.getElementInfoByNodePath(N),H=C.rects[0];k(H,C).forEach((te,D)=>{const W=Xs(n,te);W<f&&(f=W,p=te,h=N,x=D===0?mt.PRE:mt.AFTER,c=B)})}}if(!p)throw"can not drop!";return c(p,x===mt.PRE?1.5:-1.5),{nearestSeg:p,nodepath:h,loc:x}}const Mu={dragover(e,t,n){t.nodePath="",t.loc="",e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()},drop(e,t,n,s){e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()}},Nu=e=>({dragover(t,n,s){const o=s.elementInfo,r=Si(o.rects[0]);t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!0,r),t.highlightNodeByNodePath(o.target),n.nodePath=o.target,t.setCursorInFrame("copy")},drop(t,n,s,o){const r=qe(e,n.nodePath);r&&(Ls(s),Au(r,s)),t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!1),t.closeHighlight(),o()}});async function Zr(e,t,n,s,o,r,i){try{const{nearestSeg:l,nodepath:a,loc:c}=await Su(e,t,s,o,r,i);e.surface.highlightSeg(!0,l),e.surface.highlightEmptySlot(!1),t?e.highlightNodeByNodePath(t.nodePath):e.closeHighlight(),n.nodePath=a,n.loc=c,e.setCursorInFrame("copy")}catch{e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),t?e.highlightNodeByNodePath(t.nodePath):e.closeHighlight(),n.nodePath="",n.loc="",e.setCursorInFrame("not-allowed")}}function Gr(e,t,n){t===mt.PRE?Cu(e,n):Iu(e,n)}const Oo=(e,t,n)=>({async dragover(s,o,r){const i=[r.eventMeta.clientX,r.eventMeta.clientY],l=e.elements.map(a=>a.nodePath);l.length>0&&await Zr(s,null,o,i,l,ye.AUTO,n)},drop(s,o,r,i){const l=qe(e,o.nodePath);l&&(Ls(r),Gr(l,o.loc,r)),s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight(),i()}}),Du=(e,t,n)=>({async dragover(s,o,r){const i=[r.eventMeta.clientX,r.eventMeta.clientY],l=t.elements.filter(c=>!n.includes(c)).map(c=>c.nodePath),a=(t==null?void 0:t.direction)||ye.AUTO;l.length>0&&await Zr(s,t,o,i,l,a,n)},drop(s,o,r,i){const l=qe(e,o.nodePath);l&&(Ls(r),Gr(l,o.loc,r)),s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight(),i()}}),$u=(e,t,n)=>({async dragover(s,o,r){n.find(l=>t.dropable(l)&&l.dropToAccept(t))?(o.nodePath=t.nodePath,o.toCoord=[r.eventMeta.clientX,r.eventMeta.clientY],s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.setCursorInFrame("copy")):(o.nodePath="",o.loc="",s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.setCursorInFrame("not-allowed")),s.highlightNodeByNodePath(t.nodePath)},async drop(s,o,r,i){const l=qe(e,o.nodePath);if(l){const a=o.movingNodeInfos,f=(await s.getElementInfoByNodePath(o.nodePath)).rects[0];r.forEach(p=>{if(p.parentNode===l){const h=o.toCoord[0]-o.fromCoord[0],x=o.toCoord[1]-o.fromCoord[1],N=a[p.nodePath];if(N){const _=N.rects[0],j=Object.assign({...cn(p.staticStyle),left:`${_.x-f.x+h}px`,top:`${_.y-f.y+x}px`});p.staticStyle=qn(j),p.updateComponentKey()}}else{Jr(p);const h=Object.assign({...cn(p.staticStyle),left:`${o.toCoord[0]-f.x}px`,top:`${o.toCoord[1]-f.y}px`});l.addChild(p),p.staticStyle=qn(h)}s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight()}),i()}}});function Ru(e,t,n){if(e.notAllowed)return Mu;if(e.inFrame){const s=e.elementInfo;if(s!=null&&s.isEmptySlot)return Nu(t);if(s!=null&&s.target){const o=qe(t,s.target);if(o){const r=o.isContainer?o:o.parentNode;return r.isRoot?Oo(t,r,n):r!=null&&r.isAbsolute?$u(t,r,n):Du(t,r,n)}}else return Oo(t)}}function Ou(e,t,n){return async(s,o,r)=>{const i=r.map(p=>p.nodePath);o.fromCoord=[n.clientX,n.clientY],o.fromNodePath=t.target,o.fromAbsolute=!0;const l=await s.getElementsInfoByNodePath(i);o.movingNodeInfos=l;const c=qe(e,t.target).parentNode,f={nodePaths:[]};r.forEach(p=>{if(p.parentNode===c){const h=p.nodePath;f.nodePaths.push(h)}}),f.nodePaths.length>0&&s.makeDraggingElemMove(f)}}function ku(e,t,n){if(t!=null&&t.target){const s=qe(e,t.target);if(s){const o=s.parentNode;if(o!=null&&o.isAbsolute)return Ou(e,t,n)}}return null}class Lu{constructor(t){M(this,"_UILibModel",null);M(this,"source",null);M(this,"_makeRootUIElement",null);M(this,"_makeUIElement",null);this.source=t}useUI({makeRootUIElement:t,makeUIElement:n}){this._makeRootUIElement=t,this._makeUIElement=n}refresh(){this._UILibModel=this._makeRootUIElement(this.source)}genCode(){return this._UILibModel.renderIDE()}getRoot(){return this._UILibModel}genUIModel(t){return this._makeUIElement(t)}}function Qr({domRoot:e,template:t,filePath:n,data:s,UIModel:o,Simulator:r,updateElement:i}){const{makeRootUIElement:l,makeUIElement:a}=o,c=new Ui(s),f=new Lu(c);f.useUI({makeUIElement:a,makeRootUIElement:l}),f.refresh();function p(R){return qe(f.getRoot(),R)}window.getNodeByNodePath=p;const h=new r(t,n),x=f.genCode();console.log(x),h.mutateContentInTemplateBeforeLoad(x);function N(){const R=f.genCode();console.log(R),h.updateProject(R)}const _=new vu({simulator:h,getSourceByNodePath(R){return p(R)}});function j(R,k,B){_.clearFocus();const C={nodePath:"",loc:"",isEmptySlot:!1,fromAbsolute:!1,movingNodeInfos:[],fromCoord:[0,0],toCoord:[0,0],fromNodePath:null};let H=null;const re=k.map(D=>D.nodePath),te=f.getRoot();_.doDrag(R,re,async()=>{if(B){const{elementInfo:D,eventMeta:W}=B.detail,K=ku(te,D,W);K&&await K(_,C,k)}},async(D,W)=>{H=Ru(D,te,k),await H.dragover(_,C,D),W()},async()=>{await H.drop(_,C,k,()=>{f.refresh(),N()}),_.setCursorInFrame("auto")})}return _.addEventListener("ready",()=>{_.startObserveRootElem("body")}),_.$mount(e),_.addEventListener("frame:dragstart",R=>{const k=R.detail.elementInfo.target,B=p(k),C=_.surface.hasTarget(B);let H=[B];C&&(H=_.surface.getFocusNodes()),H=H.filter(te=>te.draggable);const re=document.createElement("div");re.innerText=B.tag,j(re,H,R)}),_.addEventListener("frame:requestEditContent",R=>{const k=R.detail.elementInfo.target;p(k).supportEditContent&&_.doEditContent(k)}),_.addEventListener("frame:contentChange",R=>{const k=R.detail.elementInfo.target,B=p(k);if(B.supportEditContent){const C=R.detail.innerText;i(B,"content",C),N()}}),{dragDropBehavior:j}}function Bu(){const{dragDropBehavior:e}=Qr({domRoot:document.querySelector("#react-app"),template:xi,filePath:"/src/App.jsx",data:Ci,UIModel:kt,Simulator:Lo,updateElement(o,r,i){r==="content"&&(o.innerText=i)}}),t=document.getElementById("react-button");let n=0;t.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"Button",innerText:"buttonX"+n++});e(t,[kt.makeUIElement(r)])});const s=document.getElementById("react-Flex");s.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"Flex"});e(s,[kt.makeUIElement(r)])})}Bu();function Fu(){const{dragDropBehavior:e}=Qr({domRoot:document.querySelector("#vue-app"),template:zi,filePath:"/src/App.vue",data:qi,UIModel:il,Simulator:Lo,updateElement(o,r,i){if(r==="content"){const l=o.source.bindAttrs.find(a=>a.name==="text");l.value=i}}}),t=document.getElementById("vue-button");let n=0;t.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"u-button",bindAttrs:[{concept:"BindAttribute",name:"text",value:"buttonX"+n++}]});e(t,[kt.makeUIElement(r)])});const s=document.getElementById("vue-linear-layout");s.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"u-linear-layout"});e(s,[kt.makeUIElement(r)])})}Fu();export{Ks as S,Vu as _,fi as a,pi as b,ht as c,mi as d,gi as e,Hu as f,Uu as g,Wu as h,ko as i,On as n};
