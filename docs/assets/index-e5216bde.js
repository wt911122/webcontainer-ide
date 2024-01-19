var Te=Object.defineProperty;var we=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(we(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();class Simulator extends EventTarget{constructor(t){super(),this.project=t}async load(t){this.iframe=t,await this.launch()}async launch(){this.dispatchEvent(new CustomEvent("simulator:ready"))}mutateContentInTemplateBeforeLoad(t){}async updateProject(){}async updatePackageJSON(){}}const scriptRel="modulepreload",assetsURL=function(e){return"/webcontainer-ide/"+e},seen={},__vitePreload=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=assetsURL(o),o in seen)return;seen[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const m=s[d];if(m.href===o&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":scriptRel,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((d,m)=>{c.addEventListener("load",d),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var POSITIONALS_EXP=/(%?)(%([sdjo]))/g;function serializePositional(e,t){switch(t){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;const n=JSON.stringify(e);return n==="{}"||n==="[]"||/^\[object .+?\]$/.test(n)?e:n}}}function format(e,...t){if(t.length===0)return e;let n=0,r=e.replace(POSITIONALS_EXP,(s,o,i,a)=>{const l=t[n],c=serializePositional(l,a);return o?s:(n++,c)});return n<t.length&&(r+=` ${t.slice(n).join(" ")}`),r=r.replace(/%{2,2}/g,"%"),r}var STACK_FRAMES_TO_IGNORE=2;function cleanErrorStack(e){if(!e.stack)return;const t=e.stack.split(`
`);t.splice(1,STACK_FRAMES_TO_IGNORE),e.stack=t.join(`
`)}var InvariantError=class extends Error{constructor(e,...t){super(e),this.message=e,this.name="Invariant Violation",this.message=format(e,...t),cleanErrorStack(this)}},invariant=(e,t,...n)=>{if(!e)throw new InvariantError(t,...n)};invariant.as=(e,t,n,...r)=>{if(!t)throw e.prototype.name!=null?new e(format(n,r)):e(format(n,r))};var extendStatics=function(e,t){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])},extendStatics(e,t)};function __extends(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");extendStatics(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var __assign=function(){return __assign=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},__assign.apply(this,arguments)};function __awaiter(e,t,n,r){function s(o){return o instanceof n?o:new n(function(i){i(o)})}return new(n||(n=Promise))(function(o,i){function a(d){try{c(r.next(d))}catch(m){i(m)}}function l(d){try{c(r.throw(d))}catch(m){i(m)}}function c(d){d.done?o(d.value):s(d.value).then(a,l)}c((r=r.apply(e,t||[])).next())})}function __generator(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,s,o,i;return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(c){return function(d){return l([c,d])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(o=c[0]&2?s.return:c[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,c[1])).done)return o;switch(s=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,s=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(d){c=[6,d],s=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function __spreadArray(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,o;r<s;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var createError=function(e){return"[sandpack-client]: ".concat(e)};function nullthrows(e,t){return t===void 0&&(t="Value is nullish"),invariant(e!=null,createError(t)),e}var DEPENDENCY_ERROR_MESSAGE='"dependencies" was not specified - provide either a package.json or a "dependencies" value',ENTRY_ERROR_MESSAGE='"entry" was not specified - provide either a package.json with the "main" field or an "entry" value';function createPackageJSON(e,t,n){return e===void 0&&(e={}),t===void 0&&(t={}),n===void 0&&(n="/index.js"),JSON.stringify({name:"sandpack-project",main:n,dependencies:e,devDependencies:t},null,2)}function addPackageJSONIfNeeded(e,t,n,r){var s,o,i=normalizePath(e),a=i["/package.json"];if(!a)return nullthrows(t,DEPENDENCY_ERROR_MESSAGE),nullthrows(r,ENTRY_ERROR_MESSAGE),i["/package.json"]={code:createPackageJSON(t,n,r)},i;if(a){var l=JSON.parse(a.code);nullthrows(!(!t&&!l.dependencies),ENTRY_ERROR_MESSAGE),t&&(l.dependencies=__assign(__assign({},(s=l.dependencies)!==null&&s!==void 0?s:{}),t??{})),n&&(l.devDependencies=__assign(__assign({},(o=l.devDependencies)!==null&&o!==void 0?o:{}),n??{})),r&&(l.main=r),i["/package.json"]={code:JSON.stringify(l,null,2)}}return i}function extractErrorDetails(e){var t;if(e.title==="SyntaxError"){var n=e.title,r=e.path,s=e.message,o=e.line,i=e.column;return{title:n,path:r,message:s,line:o,column:i}}var a=getRelevantStackFrame((t=e.payload)===null||t===void 0?void 0:t.frames);if(!a)return{message:e.message};var l=getErrorInOriginalCode(a),c=getErrorLocation(a),d=formatErrorMessage(a._originalFileName,e.message,c,l);return{message:d,title:e.title,path:a._originalFileName,line:a._originalLineNumber,column:a._originalColumnNumber}}function getRelevantStackFrame(e){if(e)return e.find(function(t){return!!t._originalFileName})}function getErrorLocation(e){return e?" (".concat(e._originalLineNumber,":").concat(e._originalColumnNumber,")"):""}function getErrorInOriginalCode(e){var t=e._originalScriptCode[e._originalScriptCode.length-1],n=t.lineNumber.toString().length,r=2,s=3,o=r+n+s+e._originalColumnNumber;return e._originalScriptCode.reduce(function(i,a){var l=a.highlight?">":" ",c=a.lineNumber.toString().length===n?"".concat(a.lineNumber):" ".concat(a.lineNumber),d=a.highlight?`
`+" ".repeat(o)+"^":"";return i+`
`+l+" "+c+" | "+a.content+d},"")}function formatErrorMessage(e,t,n,r){return"".concat(e,": ").concat(t).concat(n,`
`).concat(r)}var normalizePath=function(e){return typeof e=="string"?e.startsWith("/")?e:"/".concat(e):Array.isArray(e)?e.map(function(t){return t.startsWith("/")?t:"/".concat(t)}):typeof e=="object"&&e!==null?Object.entries(e).reduce(function(t,n){var r=n[0],s=n[1],o=r.startsWith("/")?r:"/".concat(r);return t[o]=s,t},{}):null},SandpackLogLevel;(function(e){e[e.None=0]="None",e[e.Error=10]="Error",e[e.Warning=20]="Warning",e[e.Info=30]="Info",e[e.Debug=40]="Debug"})(SandpackLogLevel||(SandpackLogLevel={}));function loadSandpackClient(e,t,n){var r;return n===void 0&&(n={}),__awaiter(this,void 0,void 0,function(){var s,o,i;return __generator(this,function(a){switch(a.label){case 0:switch(s=(r=t.template)!==null&&r!==void 0?r:"parcel",i=s,i){case"node":return[3,1];case"static":return[3,3]}return[3,5];case 1:return[4,__vitePreload(()=>import("./index-cdc5053f.js"),["assets/index-cdc5053f.js","assets/base-80a1f760-a7ab5117.js","assets/consoleHook-cdbe54ab-273e5f01.js"]).then(function(l){return l.SandpackNode})];case 2:return o=a.sent(),[3,7];case 3:return[4,__vitePreload(()=>import("./index-ec7d9378-990cd183.js"),["assets/index-ec7d9378-990cd183.js","assets/consoleHook-cdbe54ab-273e5f01.js","assets/base-80a1f760-a7ab5117.js"]).then(function(l){return l.SandpackStatic})];case 4:return o=a.sent(),[3,7];case 5:return[4,__vitePreload(()=>import("./index-57b9f32a.js"),["assets/index-57b9f32a.js","assets/base-80a1f760-a7ab5117.js"]).then(function(l){return l.SandpackRuntime})];case 6:o=a.sent(),a.label=7;case 7:return[2,new o(e,t,n)]}})})}class CodeSandBoxSimulator extends Simulator{constructor(){super(...arguments);B(this,"options",{showOpenInCodeSandbox:!1,showErrorScreen:!1,showLoadingScreen:!0})}async launch(){const n=await loadSandpackClient(this.iframe,this.project.read(),this.options);this.client=n,console.log(n)}update(){this.client.updateSandbox(this.project.read())}}class Project{constructor(t){this.files=t}mutateFile(t,n,r={}){this.files[t]={...r,code:n}}read(){return{files:this.files}}readFile(t){return this.files[t].code}}const files={files:{"/index.html":{code:`<!DOCTYPE html>
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

export default function (props) {
    const { topSelector, nodePath } = props;
    const ref = useRef(null);
    useEffect(() => {
        let el = ref.current.parentNode;
        console.log(topSelector)
        do {
            if(el.matches(topSelector)) {
                break;
            }
            el = el.parentNode;
        } while(el);
       
        el.setAttribute('nodepath', nodePath);
        Object.keys(props).forEach(key => {
            if(key !== 'topSelector' && key!== 'nodePath') {
                el.setAttribute(key, props[key]);
            }
        });
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

    restrictArea: null,
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
function doesElementContainElement(a,b) {
    const el1Rect = a.getBoundingClientRect();
    const el2Rect = b.getBoundingClientRect();
    return (el1Rect.left <= el2Rect.left) && (el1Rect.right >= el2Rect.right) && (el1Rect.top <= el2Rect.top) && (el1Rect.bottom >= el2Rect.bottom);
}
function doesAreaContainPoint(area, x, y) {
    return area.left < x && area.right > x && area.top < y && area.bottom > y
}
function lockTarget(e) {
    status.mouseCurrentLocation[0] = e.clientX;
    status.mouseCurrentLocation[1] = e.clientY;
    if(status.restrictArea) {
        const area = status.restrictArea();
        if(!area || !doesAreaContainPoint(area, e.clientX, e.clientY)){
            console.log('out of Restrict!')
            return 'restrict';
        }
    }
    
    const domtree = document.elementsFromPoint(e.clientX, e.clientY);
    const emptyslot = domtree?.[0]?.hasAttribute('emptyslot');
    if(emptyslot) {
        return domtree[0];
    }
    let element;
    let lastElem;
    let i = 0;
    const l = domtree.length;
    while(i < l) {
        element = domtree[i];
        lastElem = domtree[i-1];
        if(lastElem && !doesElementContainElement(element, lastElem)) {
            element = null;
            break;
        }
        if(element.hasAttribute('nodepath')) {
            break;
        }
        i++;
    }
    
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
    if(element === 'restrict') {
        payload.outOfRestrict = true;
        return payload;
    }
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
    console.log('trigger click!')
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
    console.log('trigger dblclick!')
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
        const additionalSelector = payload.selector || '';
        const elem = document.querySelector(\`[nodepath="\${payload.nodePath}"]\${additionalSelector}\`);
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
    },
    callComponentMethod(payload) {
        const { nodePath, method, argus = [] } = payload
        window._ideCallComponentMethod(nodePath, method, ...argus)
    },
    setRestrictArea(payload) {
        if(payload.selector) {
            
            status.restrictArea = () => {
                const elem = document.querySelector(payload.selector);
                if(elem) {
                    return elem.getBoundingClientRect();
                }
                return null;
            };
        } else {
            status.restrictArea = null; 
        }
    },
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
`}},environment:"vanilla"},concept="View",elements=[{concept:"ViewElement",tag:"Breadcrumb",bindAttrs:[{concept:"BindAttribute",name:"auto",value:!0}]},{concept:"ViewElement",tag:"Flex",bindAttrs:[{concept:"BindAttribute",name:"gap",value:"middle"}],children:[{concept:"ViewElement",tag:"Button",innerText:"button1"},{concept:"ViewElement",tag:"Button",innerText:"button2",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}]},{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"link"}]}]},{concept:"ViewElement",tag:"Table",children:[]},{concept:"ViewElement",tag:"Modal",children:[{concept:"ViewElement",tag:"template",slotTarget:"title",children:[{concept:"ViewElement",tag:"Text",innerText:"Model"}]},{concept:"ViewElement",tag:"template",slotTarget:"body",children:[{concept:"ViewElement",tag:"Flex",bindAttrs:[{concept:"BindAttribute",name:"gap",value:"middle"},{concept:"BindAttribute",name:"vertical",value:"true"}],children:[{concept:"ViewElement",tag:"Button",innerText:"button1"},{concept:"ViewElement",tag:"Button",innerText:"button2",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}]}]}]},{concept:"ViewElement",tag:"template",slotTarget:"footer",children:[{concept:"ViewElement",tag:"Text",innerText:"Model Foot"}]}]}],reactJSONData={concept,elements};let uuid=0;class BaseNode{constructor(t){B(this,"concept","");this.id=uuid++,Object.assign(this,t),this.concept=t.concept,this.tag=t.tag}}class View extends BaseNode{constructor(n){super(n);B(this,"elements",[]);n.elements&&(this.elements=n.elements.map(r=>{const s=new ViewElement(r);return s.parentNode=this,s.parentKey="elements",s}))}addViewElement(n){n.delete(),this.elements.push(n),n.parentNode=this}insertViewElementAt(n,r){n.delete(),this.elements.splice(r,0,n),n.parentNode=this}removeViewElement(n){const r=this.elements.findIndex(s=>s===n);r!==-1&&(this.elements.splice(r,1),n.parentNode=void 0)}getViewElementIdx(n){return this.elements.findIndex(r=>r===n)}toJSON(){return{concept:"View",elements:this.elements.map(n=>n.toJSON())}}}class ViewElement extends BaseNode{constructor(n){super(n);B(this,"tag");B(this,"staticStyle");B(this,"staticClass");B(this,"innerText");B(this,"bindAttrs",[]);B(this,"children",[]);this.tag=n.tag,this.staticStyle=n.staticStyle,this.staticClass=n.staticClass,this.innerText=n.innerText,n.children&&(this.children=n.children.map(r=>{const s=new ViewElement(r);return s.parentNode=this,s.parentKey="children",s})),n.bindAttrs&&(this.bindAttrs=n.bindAttrs.map(r=>{const s=new BindAttribute(r);return s.parentNode=this,s.parentKey="bindAttrs",s}))}addViewElement(n){n.delete(),this.children.push(n),n.parentNode=this}insertViewElementAt(n,r){n.delete(),this.children.splice(r,0,n),n.parentNode=this}addBindAttribute(n){this.bindAttrs.push(new BindAttribute(n))}setBindAttribute(n,r){const s=this.bindAttrs.findIndex(o=>o.name===n);s!==-1?this.bindAttrs.splice(s,1,r):this.bindAttrs.push(r)}removeViewElement(n){const r=this.children.findIndex(s=>s===n);r!==-1&&(this.children.splice(r,1),n.parentNode=void 0)}delete(){this.parentNode&&this.parentNode.removeViewElement(this)}getViewElementIdx(n){return this.children.findIndex(r=>r===n)}toJSON(){return{concept:"ViewElement",tag:this.tag,bindAttrs:this.bindAttrs.map(n=>n.toJSON()),children:this.children.map(n=>n.toJSON())}}}function parseIndentifier(e){return e.name}function parseMemberExp(e){return`${parseExp(e.object)}.${parseExp(e.property)}`}function parseExp(e){return e.object?parseMemberExp(e):parseIndentifier(e)}class BindAttribute extends BaseNode{constructor(n){super(n);B(this,"name","");B(this,"value","");this.name=n.name,this.value=n.value,n.expression&&(this.value=parseExp(n.expression))}toJSON(){return{concept:"BindAttribute",name:this.name,value:this.value,expression:this.expression}}}const demoTable=[{concept:"ViewElement",tag:"Column",bindAttrs:[{concept:"BindAttribute",name:"dataIndex",value:"name"},{concept:"BindAttribute",name:"key",value:"name"}],children:[{concept:"ViewElement",tag:"template",slotTarget:"title",children:[{concept:"ViewElement",tag:"Text",innerText:"Name"}]},{concept:"ViewElement",tag:"template",slotTarget:"render",children:[{concept:"ViewElement",tag:"Link",innerText:"name"}]}]},{concept:"ViewElement",tag:"Column",bindAttrs:[{concept:"BindAttribute",name:"dataIndex",value:"age"},{concept:"BindAttribute",name:"key",value:"age"}],children:[{concept:"ViewElement",tag:"template",slotTarget:"title",children:[{concept:"ViewElement",tag:"Text",innerText:"Age"}]},{concept:"ViewElement",tag:"template",slotTarget:"render",children:[{concept:"ViewElement",tag:"Text",innerText:"age"}]}]},{concept:"ViewElement",tag:"Column",bindAttrs:[{concept:"BindAttribute",name:"key",value:"action"}],children:[{concept:"ViewElement",tag:"template",slotTarget:"title",children:[{concept:"ViewElement",tag:"Text",innerText:"Action"}]},{concept:"ViewElement",tag:"template",slotTarget:"render",children:[{concept:"ViewElement",tag:"Link",innerText:"Invite name"},{concept:"ViewElement",tag:"Link",innerText:"Delete"}]}]}],demoTableElemenet={concept:"ViewElement",tag:"Table",bindAttrs:[{concept:"BindAttribute",name:"dataSource",value:!0}],children:demoTable};function genTableElementFromDataSource(e){return new ViewElement(demoTableElemenet)}function genTableFromDataSource(e,t){return demoTable.map(n=>new ViewElement(n))}let key=1,Element$1=class{constructor(t,n){B(this,"componentKey",0);B(this,"tag","");B(this,"parentNode",null);B(this,"elements",[]);B(this,"draggable",!0);B(this,"deletable",!0);this.source=t,this.tag=t.tag,this.componentKey=key++,this._schema=n}get staticStyle(){return this.source.staticStyle}set staticStyle(t){this.source.staticStyle=t}get innerText(){return this.source.innerText}get nodePath(){if(!this.parentNode)return"rootview";const t=this.parentNode,r=t.elements.findIndex(s=>s===this);return r===-1?null:`${t.nodePath}.${r}`}get isModal(){var t;return((t=this._schema)==null?void 0:t.idetype)==="modal"}get isContainer(){var t;return((t=this._schema)==null?void 0:t.idetype)==="container"}get direction(){var t,n;return((n=(t=this._schema)==null?void 0:t.containerDirection)==null?void 0:n.call(this))||"auto"}get modalSutando(){var t;return(t=this._schema)==null?void 0:t.modalSutando}get lib(){var t;return(t=this._schema)==null?void 0:t.lib}get supportEditContent(){var t;return!!((t=this._schema)!=null&&t.editable)}get noDefaultSlot(){var t;return(t=this._schema)==null?void 0:t.noDefaultSlot}get slotsDefination(){var t;return((t=this._schema)==null?void 0:t.slots)||[]}get dataSource(){var t;return(t=this._schema)==null?void 0:t.dataSource}get elementSutando(){var t;return(t=this._schema)==null?void 0:t.elementSutando}dropToAccept(t){return this._schema.parentAccept.call(this,t)}dropable(t){return this._schema.childAccept.call(this,t)}getAttribute(t){return this.source.bindAttrs.find(n=>n.name===t)}setAttribute(t){this.source.addBindAttribute(t)}getElement(t){return this.elements.find(t)}elementsLength(){return this.elements.length}getSelector(){var t;if((t=this._schema)!=null&&t.selector){const{expression:n}=this._schema.selector;return n.call(this)}}getSelectorHoistTag(){if(this._schema.selector)return this._schema.selector.cssSelector}updateComponentKey(){this.componentKey=key++}insertNodeBefore(t,n){const r=n.source;r.delete();const s=this.source.getViewElementIdx(t.source);s!==-1&&this.source.insertViewElementAt(r,s)}insertNodeAfter(t,n){const r=n.source;r.delete();const s=this.source.getViewElementIdx(t.source);s!==-1&&this.source.insertViewElementAt(r,s+1)}addChild(t){const n=t.source;n.delete(),this.source.addViewElement(n)}delete(){return this.source.delete()}renderIDE(){throw"renderIDE need implementation!"}};function sqr(e){return e*e}function dist2(e,t){return sqr(e[0]-t[0])+sqr(e[1]-t[1])}function distToSegmentVecSquared(e,t){const n=t.slice(0,2),r=t.slice(2,4),s=dist2(n,r);if(s===0)return dist2(e,n);let o=((e[0]-n[0])*(r[0]-n[0])+(e[1]-n[1])*(r[1]-n[1]))/s;return o=Math.max(0,Math.min(1,o)),dist2(e,[n[0]+o*(r[0]-n[0]),n[1]+o*(r[1]-n[1])])}function BoxToSegmentsHorizontal(e){return[[e.left,e.top,e.right,e.top],[e.left,e.bottom,e.right,e.bottom]]}function BoxToSegmentsVertical(e){return[[e.left,e.top,e.left,e.bottom],[e.right,e.top,e.right,e.bottom]]}function shiftVerticalSegBy(e,t){return e[0]+=t,e[2]+=t,e}function shiftHorizontalSegBy(e,t){return e[1]+=t,e[3]+=t,e}function shiftAutoSegBy(e,t){return e[0]===e[2]?shiftVerticalSegBy(e,t):shiftHorizontalSegBy(e,t)}function BoxToSegmentsAuto(e,t){var n;return(n=t.elemStyle)!=null&&n.inline?BoxToSegmentsVertical(e):BoxToSegmentsHorizontal(e)}function BoxToRectangle(e){return[e.x,e.y,e.width,e.height]}function CSSInlineStyleToObject(e=""){return e.split(";").map(n=>n.split(":")).reduce((n,r)=>{if(r.length===2){let[s,o]=r;s=s.trim().replace(/-./g,i=>i.toUpperCase()[1]),n[s]=o.trim()}return n},{})}function CSSToStaticStyle(e={}){let t="";for(const[n,r]of Object.entries(e))t+=`${n}:${r};`;return t}function CSSInlineStyleToObjectString(e){const t=CSSInlineStyleToObject(e);try{return JSON.stringify(t)}catch{return""}}const CONTAINER_DIRECTION={ROW:"row",COLUMN:"column",FREE:"free",AUTO:"auto"};class TranslateContext{constructor(){B(this,"refComps",new Map);B(this,"refs",new Map);B(this,"refID",0);B(this,"classRefs",new Map);B(this,"classID",0);B(this,"moduleCSSObjectName","_styles")}addDependence(t,n){const r=this.refComps;let s=r.get(n);s||(s=new Set,r.set(n,s)),s.add(t)}addClass(t){const r={ref:`ide-style${this.classID++}`,style:""};return this.classRefs.set(t,r),r}genModuleCSSFile(){let t="";return this.classRefs.forEach(n=>{t+=`${n.style}
`}),t}addRef(t){let n=`ref${this.refID++}`;return this.refs.set(t,n),n}genRefs(){let t="",n=`const refs = {
`;return this.refs.forEach((r,s)=>{t+=`const ${r} = useRef(null);
`,n+=`['${s}']: ${r},
`}),n+=`}
window._ideCallComponentMethod = function(nodepath, method, ...args) {
    refs[nodepath].current[method](...args);
}
        `,t+n}genCode(){let t="";return this.refComps.forEach((n,r)=>{t+=`import { ${Array.from(n).join(",")} } from "${r}";
`}),t}}class ReactRoot extends Element$1{constructor(){super(...arguments);B(this,"isRoot",!0)}renderIDE(){const n=new TranslateContext;let r="";this.elements.forEach(i=>{r+=i.renderIDE(n)});const s=`
import React, { useRef } from 'react';
import EmptySlot from './Empty.jsx';
import HoistNodePath from './HoistNodePath.jsx';
import './style.css';
${n.genCode()}


function View() {
    ${n.genRefs()}
    return (
        <>
            ${r}
        </>
    )
}
export default View;
`,o=n.genModuleCSSFile();return console.log(s,o),i=>{i.mutateFile("/src/App.jsx",s),i.mutateFile("/src/style.css",o)}}dropable(){return!0}get direction(){return"auto"}get isContainer(){return!0}}class ReactElement extends Element$1{_renderHoist(t,n){let r="";return t===n&&(r=`<HoistNodePath nodePath="${this.nodePath}" topSelector="${this.getSelectorHoistTag()}" />`),r}renderIDE(t){this.lib&&t.addDependence(this.tag,this.lib);const n=t.addRef(this.nodePath),r=staticStyleToIDE(this.staticStyle),s=[];if(s.push(["key",stringAttrWrapper(this.componentKey)]),s.push(["nodepath",stringAttrWrapper(this.nodePath)]),s.push(["ref",`{${n}}`]),this.isContainer&&s.push(["ide-iscontainer",stringAttrWrapper("true")]),this.elementSutando){const l=this.elementSutando;if(l.condition.call(this)){const c=l.component;return t.addDependence(c,this.lib),`<${c} ${s.map(d=>`${d[0]}=${d[1]}`).join(" ")} ${r} />`}}(this.source.bindAttrs||[]).forEach(l=>{s.push([l.name,stringAttrWrapper(l.value)])});const i=this.getSelector();if(this.slotsDefination.length>0)return this.slotsDefination.forEach(l=>{const c=l.name,d=this.elements.find(m=>m.source.slotTarget===c);if(d){const m=this._renderHoist(i,d);s.push([c,`{() => (<>
${m}${d.renderIDE(t)}
</>)}`])}}),`<${this.tag} ${s.map(l=>`${l[0]}=${l[1]}`).join(" ")} ${r} />`;let a=`<${this.tag} ${s.map(l=>`${l[0]}=${l[1]}`).join(" ")} ${r}>`;return this.isContainer&&(this.elements.length>0?this.elements.forEach(l=>{if(i===l){const c=this._renderHoist(i,l);a+=c}a+=l.renderIDE(t)}):a+="<EmptySlot />"),!this.isContainer&&this.innerText&&(a+=this.innerText),a+=`</${this.tag}>
`,a}}class ReactDataSourceElement extends Element$1{renderIDE(t){this.lib&&t.addDependence(this.tag,this.lib);const n=t.addRef(this.nodePath),r=staticStyleToIDE(this.staticStyle),s=[];s.push(["key",stringAttrWrapper(this.componentKey)]),s.push(["nodepath",stringAttrWrapper(this.nodePath)]),s.push(["ref",`{${n}}`]),this.isContainer&&s.push(["ide-iscontainer",stringAttrWrapper("true")]);const o=this.dataSource;if(o.emptySlot){const c=o.emptySlot;if(c.condition.call(this)){const d=c.component;return t.addDependence(d,this.lib),`<${d} ${s.map(m=>`${m[0]}=${m[1]}`).join(" ")} ${r} />`}}(this.source.bindAttrs||[]).forEach(c=>{if(c.name!=="dataSource")s.push([c.name,stringAttrWrapper(c.value)]);else{const d=`{[${new Array(o.display).fill("{}").join(",")}]}`;s.push(["dataSource",d])}});const a=o.loopElem;if(a){const c=t.addClass(this.nodePath),d=c.ref;c.style=genDatasourceShadow(`.${d} ${a.trim()}`),s.push(["className",`"${d}"`])}let l=`<${this.tag} ${s.map(c=>`${c[0]}=${c[1]}`).join(" ")} ${r}>`;return this.elements.forEach(c=>{l+=c.renderIDE(t)}),l+=`</${this.tag}>
`,l}dropable(t){const n=this.dataSource;return n.emptySlot?n.emptySlot.accept.call(this,t):this._schema.childAccept.call(this,t)}}class ReactSlotTemplate extends Element$1{constructor(n,r){super(n,r);B(this,"deletable",!1);B(this,"draggable",!1);B(this,"slotTarget","");this.slotTarget=n.slotTarget}dropable(){return!0}renderIDE(n){let r="";if(this.elements.length>0)this.elements.forEach(o=>{r+=o.renderIDE(n)});else{let o="EmptySlot";this.customSlot&&(n.addDependence(this.customSlot,this.parentNode.lib),o=this.customSlot),r+=`<${o} />`}return`
        <div nodepath="${this.nodePath}" ide-draggable="false">
            ${r}
        </div>`}}class ReactModalLike extends Element$1{_renderHoist(t,n){let r="";return t===n&&(r=`<HoistNodePath nodePath="${this.nodePath}" topSelector="${this.getSelectorHoistTag()}" mainmodal="true" />`),r}renderIDE(t){var d,m;this.lib&&t.addDependence(this.tag,this.lib);const n=t.addRef(this.nodePath),r=staticStyleToIDE(this.staticStyle),s=[];s.push(["key",stringAttrWrapper(this.componentKey)]),s.push(["nodepath",stringAttrWrapper(this.nodePath)]);let o="";if(this.modalSutando){const y=this.modalSutando;t.addDependence(y,this.lib),o=`<${y} ${s.map(S=>`${S[0]}=${S[1]}`).join(" ")} ${r}/>
`}const i=[];i.push(["nodepath",stringAttrWrapper(this.nodePath)]),i.push(["ref",`{${n}}`]),(this.source.bindAttrs||[]).forEach(y=>{i.push([y.name,stringAttrWrapper(y.value)])}),(d=this.source)!=null&&d._cacheStatus&&i.push(["open",`{${(m=this.source)==null?void 0:m._cacheStatus.open}}`]);const l=this.getSelector();this.slotsDefination.forEach(y=>{const S=y.name,x=this.elements.find(I=>I.source.slotTarget===S);if(x){const I=this._renderHoist(l,x);i.push([S,`{() => (<>
${I}${x.renderIDE(t)}
</>)}`])}});let c=`<${this.tag} ${i.map(y=>`${y[0]}=${y[1]}`).join(" ")} />`;return o+c}}function createRoot(e){return new ReactRoot(e)}function createElement(e,t){return e.slotTarget?new ReactSlotTemplate(e,t):t.idetype==="modal"?new ReactModalLike(e,t):t.dataSource?new ReactDataSourceElement(e,t):new ReactElement(e,t)}function staticStyleToIDE(e){if(e&&e.trim()){const t=CSSInlineStyleToObjectString(e.trim());if(t)return` style={${t}} `}return""}function stringAttrWrapper(e){return`"${e}"`}function genDatasourceShadow(e){return`${e}:nth-child(n+2){
        position: relative;
        pointer-events: none;             
    }
    ${e}:nth-child(n+2)::after {
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(255,255,255,0.8);
        z-index: 999;
    }`}const ReactModel={createRoot,createElement},transformAttr=("transform"in document.documentElement.style?"transform":void 0)||("-webkit-transform"in document.documentElement.style?"-webkit-transform":void 0)||("-moz-transform"in document.documentElement.style?"-moz-transform":void 0)||("-ms-transform"in document.documentElement.style?"-ms-transform":void 0)||("-o-transform"in document.documentElement.style?"-o-transform":void 0),makeElement=function(e={}){let t,n;const r=e.tag,s=document.createElement(r);if(r==="style")return s.type="text/css",s.styleSheet?s.styleSheet.cssText=e.cssText:s.appendChild(document.createTextNode(e.cssText)),s;if(e.attributes)for(t in e.attributes)n=e.attributes[t],s.setAttribute(t,n);if(e.style)for(t in e.style)n=e.style[t],s.style[t]=n;if(e.data)for(t in e.data)n=e.data[t],s.dataset[t]=n;return e.className&&e.className.forEach(o=>{console.log(o),s.classList.add(o)}),e.textContent!==void 0&&(s.textContent=e.textContent),e.childNodes&&[].concat(e.childNodes).forEach(o=>{s.appendChild(o)}),s};function makeMap(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,onRE=/^on[^a-z]/,isOn=e=>onRE.test(e),isModelListener=e=>e.startsWith("onUpdate:"),extend=Object.assign,remove=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hasOwnProperty$1=Object.prototype.hasOwnProperty,hasOwn=(e,t)=>hasOwnProperty$1.call(e,t),isArray=Array.isArray,isMap=e=>toTypeString(e)==="[object Map]",isSet=e=>toTypeString(e)==="[object Set]",isFunction=e=>typeof e=="function",isString=e=>typeof e=="string",isSymbol=e=>typeof e=="symbol",isObject=e=>e!==null&&typeof e=="object",isPromise=e=>(isObject(e)||isFunction(e))&&isFunction(e.then)&&isFunction(e.catch),objectToString=Object.prototype.toString,toTypeString=e=>objectToString.call(e),toRawType=e=>toTypeString(e).slice(8,-1),isPlainObject=e=>toTypeString(e)==="[object Object]",isIntegerKey=e=>isString(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},camelizeRE=/-(\w)/g,camelize=cacheStringFunction(e=>e.replace(camelizeRE,(t,n)=>n?n.toUpperCase():"")),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(e=>e.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(e=>e.charAt(0).toUpperCase()+e.slice(1)),toHandlerKey=cacheStringFunction(e=>e?`on${capitalize(e)}`:""),hasChanged=(e,t)=>!Object.is(e,t),invokeArrayFns=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},def=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},looseToNumber=e=>{const t=parseFloat(e);return isNaN(t)?e:t},toNumber=e=>{const t=isString(e)?Number(e):NaN;return isNaN(t)?e:t};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function normalizeStyle(e){if(isArray(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=isString(r)?parseStringStyle(r):normalizeStyle(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(isString(e)||isObject(e))return e}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:([^]+)/,styleCommentRE=/\/\*[^]*?\*\//g;function parseStringStyle(e){const t={};return e.replace(styleCommentRE,"").split(listDelimiterRE).forEach(n=>{if(n){const r=n.split(propertyDelimiterRE);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function normalizeClass(e){let t="";if(isString(e))t=e;else if(isArray(e))for(let n=0;n<e.length;n++){const r=normalizeClass(e[n]);r&&(t+=r+" ")}else if(isObject(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(e){return!!e||e===""}const toDisplayString=e=>isString(e)?e:e==null?"":isArray(e)||isObject(e)&&(e.toString===objectToString||!isFunction(e.toString))?JSON.stringify(e,replacer,2):String(e),replacer=(e,t)=>t&&t.__v_isRef?replacer(e,t.value):isMap(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:isSet(t)?{[`Set(${t.size})`]:[...t.values()]}:isObject(t)&&!isArray(t)&&!isPlainObject(t)?String(t):t;let activeEffectScope;class EffectScope{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=activeEffectScope,!t&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=activeEffectScope;try{return activeEffectScope=this,t()}finally{activeEffectScope=n}}}on(){activeEffectScope=this}off(){activeEffectScope=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function recordEffectScope(e,t=activeEffectScope){t&&t.active&&t.effects.push(e)}function getCurrentScope(){return activeEffectScope}const createDep=e=>{const t=new Set(e);return t.w=0,t.n=0,t},wasTracked=e=>(e.w&trackOpBit)>0,newTracked=e=>(e.n&trackOpBit)>0,initDepMarkers=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=trackOpBit},finalizeDepMarkers=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];wasTracked(s)&&!newTracked(s)?s.delete(e):t[n++]=s,s.w&=~trackOpBit,s.n&=~trackOpBit}t.length=n}},targetMap=new WeakMap;let effectTrackDepth=0,trackOpBit=1;const maxMarkerBits=30;let activeEffect;const ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol("");class ReactiveEffect{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,recordEffectScope(this,r)}run(){if(!this.active)return this.fn();let t=activeEffect,n=shouldTrack;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=activeEffect,activeEffect=this,shouldTrack=!0,trackOpBit=1<<++effectTrackDepth,effectTrackDepth<=maxMarkerBits?initDepMarkers(this):cleanupEffect(this),this.fn()}finally{effectTrackDepth<=maxMarkerBits&&finalizeDepMarkers(this),trackOpBit=1<<--effectTrackDepth,activeEffect=this.parent,shouldTrack=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){activeEffect===this?this.deferStop=!0:this.active&&(cleanupEffect(this),this.onStop&&this.onStop(),this.active=!1)}}function cleanupEffect(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const e=trackStack.pop();shouldTrack=e===void 0?!0:e}function track(e,t,n){if(shouldTrack&&activeEffect){let r=targetMap.get(e);r||targetMap.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=createDep()),trackEffects(s)}}function trackEffects(e,t){let n=!1;effectTrackDepth<=maxMarkerBits?newTracked(e)||(e.n|=trackOpBit,n=!wasTracked(e)):n=!e.has(activeEffect),n&&(e.add(activeEffect),activeEffect.deps.push(e))}function trigger(e,t,n,r,s,o){const i=targetMap.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&isArray(e)){const l=Number(r);i.forEach((c,d)=>{(d==="length"||!isSymbol(d)&&d>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":isArray(e)?isIntegerKey(n)&&a.push(i.get("length")):(a.push(i.get(ITERATE_KEY)),isMap(e)&&a.push(i.get(MAP_KEY_ITERATE_KEY)));break;case"delete":isArray(e)||(a.push(i.get(ITERATE_KEY)),isMap(e)&&a.push(i.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(e)&&a.push(i.get(ITERATE_KEY));break}if(a.length===1)a[0]&&triggerEffects(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);triggerEffects(createDep(l))}}function triggerEffects(e,t){const n=isArray(e)?e:[...e];for(const r of n)r.computed&&triggerEffect(r);for(const r of n)r.computed||triggerEffect(r)}function triggerEffect(e,t){(e!==activeEffect||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(isSymbol)),arrayInstrumentations=createArrayInstrumentations();function createArrayInstrumentations(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=toRaw(this);for(let o=0,i=this.length;o<i;o++)track(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(toRaw)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){pauseTracking();const r=toRaw(this)[t].apply(this,n);return resetTracking(),r}}),e}function hasOwnProperty(e){const t=toRaw(this);return track(t,"has",e),t.hasOwnProperty(e)}class BaseReactiveHandler{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,o=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw"&&r===(s?o?shallowReadonlyMap:readonlyMap:o?shallowReactiveMap:reactiveMap).get(t))return t;const i=isArray(t);if(!s){if(i&&hasOwn(arrayInstrumentations,n))return Reflect.get(arrayInstrumentations,n,r);if(n==="hasOwnProperty")return hasOwnProperty}const a=Reflect.get(t,n,r);return(isSymbol(n)?builtInSymbols.has(n):isNonTrackableKeys(n))||(s||track(t,"get",n),o)?a:isRef(a)?i&&isIntegerKey(n)?a:a.value:isObject(a)?s?readonly(a):reactive(a):a}}class MutableReactiveHandler extends BaseReactiveHandler{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];if(isReadonly(o)&&isRef(o)&&!isRef(r))return!1;if(!this._shallow&&(!isShallow(r)&&!isReadonly(r)&&(o=toRaw(o),r=toRaw(r)),!isArray(t)&&isRef(o)&&!isRef(r)))return o.value=r,!0;const i=isArray(t)&&isIntegerKey(n)?Number(n)<t.length:hasOwn(t,n),a=Reflect.set(t,n,r,s);return t===toRaw(s)&&(i?hasChanged(r,o)&&trigger(t,"set",n,r):trigger(t,"add",n,r)),a}deleteProperty(t,n){const r=hasOwn(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&trigger(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!isSymbol(n)||!builtInSymbols.has(n))&&track(t,"has",n),r}ownKeys(t){return track(t,"iterate",isArray(t)?"length":ITERATE_KEY),Reflect.ownKeys(t)}}class ReadonlyReactiveHandler extends BaseReactiveHandler{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const mutableHandlers=new MutableReactiveHandler,readonlyHandlers=new ReadonlyReactiveHandler,shallowReactiveHandlers=new MutableReactiveHandler(!0),toShallow=e=>e,getProto=e=>Reflect.getPrototypeOf(e);function get(e,t,n=!1,r=!1){e=e.__v_raw;const s=toRaw(e),o=toRaw(t);n||(hasChanged(t,o)&&track(s,"get",t),track(s,"get",o));const{has:i}=getProto(s),a=r?toShallow:n?toReadonly:toReactive;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function has(e,t=!1){const n=this.__v_raw,r=toRaw(n),s=toRaw(e);return t||(hasChanged(e,s)&&track(r,"has",e),track(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function size(e,t=!1){return e=e.__v_raw,!t&&track(toRaw(e),"iterate",ITERATE_KEY),Reflect.get(e,"size",e)}function add(e){e=toRaw(e);const t=toRaw(this);return getProto(t).has.call(t,e)||(t.add(e),trigger(t,"add",e,e)),this}function set(e,t){t=toRaw(t);const n=toRaw(this),{has:r,get:s}=getProto(n);let o=r.call(n,e);o||(e=toRaw(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?hasChanged(t,i)&&trigger(n,"set",e,t):trigger(n,"add",e,t),this}function deleteEntry(e){const t=toRaw(this),{has:n,get:r}=getProto(t);let s=n.call(t,e);s||(e=toRaw(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&trigger(t,"delete",e,void 0),o}function clear(){const e=toRaw(this),t=e.size!==0,n=e.clear();return t&&trigger(e,"clear",void 0,void 0),n}function createForEach(e,t){return function(r,s){const o=this,i=o.__v_raw,a=toRaw(i),l=t?toShallow:e?toReadonly:toReactive;return!e&&track(a,"iterate",ITERATE_KEY),i.forEach((c,d)=>r.call(s,l(c),l(d),o))}}function createIterableMethod(e,t,n){return function(...r){const s=this.__v_raw,o=toRaw(s),i=isMap(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=s[e](...r),d=n?toShallow:t?toReadonly:toReactive;return!t&&track(o,"iterate",l?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:m,done:y}=c.next();return y?{value:m,done:y}:{value:a?[d(m[0]),d(m[1])]:d(m),done:y}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function createInstrumentations(){const e={get(o){return get(this,o)},get size(){return size(this)},has,add,set,delete:deleteEntry,clear,forEach:createForEach(!1,!1)},t={get(o){return get(this,o,!1,!0)},get size(){return size(this)},has,add,set,delete:deleteEntry,clear,forEach:createForEach(!1,!0)},n={get(o){return get(this,o,!0)},get size(){return size(this,!0)},has(o){return has.call(this,o,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!1)},r={get(o){return get(this,o,!0,!0)},get size(){return size(this,!0)},has(o){return has.call(this,o,!0)},add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear"),forEach:createForEach(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=createIterableMethod(o,!1,!1),n[o]=createIterableMethod(o,!0,!1),t[o]=createIterableMethod(o,!1,!0),r[o]=createIterableMethod(o,!0,!0)}),[e,n,t,r]}const[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations]=createInstrumentations();function createInstrumentationGetter(e,t){const n=t?e?shallowReadonlyInstrumentations:shallowInstrumentations:e?readonlyInstrumentations:mutableInstrumentations;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(hasOwn(n,s)&&s in r?n:r,s,o)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(e){return e.__v_skip||!Object.isExtensible(e)?0:targetTypeMap(toRawType(e))}function reactive(e){return isReadonly(e)?e:createReactiveObject(e,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(e){return createReactiveObject(e,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(e){return createReactiveObject(e,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function createReactiveObject(e,t,n,r,s){if(!isObject(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=getTargetType(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function isReactive(e){return isReadonly(e)?isReactive(e.__v_raw):!!(e&&e.__v_isReactive)}function isReadonly(e){return!!(e&&e.__v_isReadonly)}function isShallow(e){return!!(e&&e.__v_isShallow)}function isProxy(e){return isReactive(e)||isReadonly(e)}function toRaw(e){const t=e&&e.__v_raw;return t?toRaw(t):e}function markRaw(e){return def(e,"__v_skip",!0),e}const toReactive=e=>isObject(e)?reactive(e):e,toReadonly=e=>isObject(e)?readonly(e):e;function trackRefValue(e){shouldTrack&&activeEffect&&(e=toRaw(e),trackEffects(e.dep||(e.dep=createDep())))}function triggerRefValue(e,t){e=toRaw(e);const n=e.dep;n&&triggerEffects(n)}function isRef(e){return!!(e&&e.__v_isRef===!0)}function unref(e){return isRef(e)?e.value:e}const shallowUnwrapHandlers={get:(e,t,n)=>unref(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return isRef(s)&&!isRef(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function proxyRefs(e){return isReactive(e)?e:new Proxy(e,shallowUnwrapHandlers)}class ComputedRefImpl{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ReactiveEffect(t,()=>{this._dirty||(this._dirty=!0,triggerRefValue(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=toRaw(this);return trackRefValue(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function computed$1(e,t,n=!1){let r,s;const o=isFunction(e);return o?(r=e,s=NOOP):(r=e.get,s=e.set),new ComputedRefImpl(r,s,o||!s,n)}function warn(e,...t){}function callWithErrorHandling(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){handleError(o,t,n)}return s}function callWithAsyncErrorHandling(e,t,n,r){if(isFunction(e)){const o=callWithErrorHandling(e,t,n,r);return o&&isPromise(o)&&o.catch(i=>{handleError(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(callWithAsyncErrorHandling(e[o],t,n,r));return s}function handleError(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,i,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){callWithErrorHandling(l,null,10,[e,i,a]);return}}logError(e,n,s,r)}function logError(e,t,n,r=!0){console.error(e)}let isFlushing=!1,isFlushPending=!1;const queue=[];let flushIndex=0;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;function nextTick(e){const t=currentFlushPromise||resolvedPromise;return e?t.then(this?e.bind(this):e):t}function findInsertionIndex(e){let t=flushIndex+1,n=queue.length;for(;t<n;){const r=t+n>>>1,s=queue[r],o=getId(s);o<e||o===e&&s.pre?t=r+1:n=r}return t}function queueJob(e){(!queue.length||!queue.includes(e,isFlushing&&e.allowRecurse?flushIndex+1:flushIndex))&&(e.id==null?queue.push(e):queue.splice(findInsertionIndex(e.id),0,e),queueFlush())}function queueFlush(){!isFlushing&&!isFlushPending&&(isFlushPending=!0,currentFlushPromise=resolvedPromise.then(flushJobs))}function invalidateJob(e){const t=queue.indexOf(e);t>flushIndex&&queue.splice(t,1)}function queuePostFlushCb(e){isArray(e)?pendingPostFlushCbs.push(...e):(!activePostFlushCbs||!activePostFlushCbs.includes(e,e.allowRecurse?postFlushIndex+1:postFlushIndex))&&pendingPostFlushCbs.push(e),queueFlush()}function flushPreFlushCbs(e,t=isFlushing?flushIndex+1:0){for(;t<queue.length;t++){const n=queue[t];n&&n.pre&&(queue.splice(t,1),t--,n())}}function flushPostFlushCbs(e){if(pendingPostFlushCbs.length){const t=[...new Set(pendingPostFlushCbs)];if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...t);return}for(activePostFlushCbs=t,activePostFlushCbs.sort((n,r)=>getId(n)-getId(r)),postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++)activePostFlushCbs[postFlushIndex]();activePostFlushCbs=null,postFlushIndex=0}}const getId=e=>e.id==null?1/0:e.id,comparator=(e,t)=>{const n=getId(e)-getId(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function flushJobs(e){isFlushPending=!1,isFlushing=!0,queue.sort(comparator);const t=NOOP;try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const n=queue[flushIndex];n&&n.active!==!1&&callWithErrorHandling(n,null,14)}}finally{flushIndex=0,queue.length=0,flushPostFlushCbs(),isFlushing=!1,currentFlushPromise=null,(queue.length||pendingPostFlushCbs.length)&&flushJobs()}}function emit(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||EMPTY_OBJ;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:y}=r[d]||EMPTY_OBJ;y&&(s=n.map(S=>isString(S)?S.trim():S)),m&&(s=n.map(looseToNumber))}let a,l=r[a=toHandlerKey(t)]||r[a=toHandlerKey(camelize(t))];!l&&o&&(l=r[a=toHandlerKey(hyphenate(t))]),l&&callWithAsyncErrorHandling(l,e,6,s);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,callWithAsyncErrorHandling(c,e,6,s)}}function normalizeEmitsOptions(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!isFunction(e)){const l=c=>{const d=normalizeEmitsOptions(c,t,!0);d&&(a=!0,extend(i,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(isObject(e)&&r.set(e,null),null):(isArray(o)?o.forEach(l=>i[l]=null):extend(i,o),isObject(e)&&r.set(e,i),i)}function isEmitListener(e,t){return!e||!isOn(t)?!1:(t=t.slice(2).replace(/Once$/,""),hasOwn(e,t[0].toLowerCase()+t.slice(1))||hasOwn(e,hyphenate(t))||hasOwn(e,t))}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(e){const t=currentRenderingInstance;return currentRenderingInstance=e,currentScopeId=e&&e.type.__scopeId||null,t}function withCtx(e,t=currentRenderingInstance,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&setBlockTracking(-1);const o=setCurrentRenderingInstance(t);let i;try{i=e(...s)}finally{setCurrentRenderingInstance(o),r._d&&setBlockTracking(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function markAttrsAccessed(){}function renderComponentRoot(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:l,emit:c,render:d,renderCache:m,data:y,setupState:S,ctx:x,inheritAttrs:I}=e;let N,j;const D=setCurrentRenderingInstance(e);try{if(n.shapeFlag&4){const w=s||r,$=w;N=normalizeVNode(d.call($,w,m,o,S,y,x)),j=l}else{const w=t;N=normalizeVNode(w.length>1?w(o,{attrs:l,slots:a,emit:c}):w(o,null)),j=t.props?l:getFunctionalFallthrough(l)}}catch(w){blockStack.length=0,handleError(w,e,1),N=createVNode(Comment)}let O=N;if(j&&I!==!1){const w=Object.keys(j),{shapeFlag:$}=O;w.length&&$&7&&(i&&w.some(isModelListener)&&(j=filterModelListeners(j,i)),O=cloneVNode(O,j))}return n.dirs&&(O=cloneVNode(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),N=O,setCurrentRenderingInstance(D),N}const getFunctionalFallthrough=e=>{let t;for(const n in e)(n==="class"||n==="style"||isOn(n))&&((t||(t={}))[n]=e[n]);return t},filterModelListeners=(e,t)=>{const n={};for(const r in e)(!isModelListener(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function shouldUpdateComponent(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?hasPropsChanged(r,i,c):!!i;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const y=d[m];if(i[y]!==r[y]&&!isEmitListener(c,y))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?hasPropsChanged(r,i,c):!0:!!i;return!1}function hasPropsChanged(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!isEmitListener(n,o))return!0}return!1}function updateHOCHostEl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const NULL_DYNAMIC_COMPONENT=Symbol.for("v-ndc"),isSuspense=e=>e.__isSuspense;function queueEffectWithSuspense(e,t){t&&t.pendingBranch?isArray(e)?t.effects.push(...e):t.effects.push(e):queuePostFlushCb(e)}const INITIAL_WATCHER_VALUE={};function watch(e,t,n){return doWatch(e,t,n)}function doWatch(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=EMPTY_OBJ){var a;const l=getCurrentScope()===((a=currentInstance)==null?void 0:a.scope)?currentInstance:null;let c,d=!1,m=!1;if(isRef(e)?(c=()=>e.value,d=isShallow(e)):isReactive(e)?(c=()=>e,r=!0):isArray(e)?(m=!0,d=e.some(w=>isReactive(w)||isShallow(w)),c=()=>e.map(w=>{if(isRef(w))return w.value;if(isReactive(w))return traverse(w);if(isFunction(w))return callWithErrorHandling(w,l,2)})):isFunction(e)?t?c=()=>callWithErrorHandling(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return y&&y(),callWithAsyncErrorHandling(e,l,3,[S])}:c=NOOP,t&&r){const w=c;c=()=>traverse(w())}let y,S=w=>{y=D.onStop=()=>{callWithErrorHandling(w,l,4),y=D.onStop=void 0}},x;if(isInSSRComponentSetup)if(S=NOOP,t?n&&callWithAsyncErrorHandling(t,l,3,[c(),m?[]:void 0,S]):c(),s==="sync"){const w=useSSRContext();x=w.__watcherHandles||(w.__watcherHandles=[])}else return NOOP;let I=m?new Array(e.length).fill(INITIAL_WATCHER_VALUE):INITIAL_WATCHER_VALUE;const N=()=>{if(D.active)if(t){const w=D.run();(r||d||(m?w.some(($,K)=>hasChanged($,I[K])):hasChanged(w,I)))&&(y&&y(),callWithAsyncErrorHandling(t,l,3,[w,I===INITIAL_WATCHER_VALUE?void 0:m&&I[0]===INITIAL_WATCHER_VALUE?[]:I,S]),I=w)}else D.run()};N.allowRecurse=!!t;let j;s==="sync"?j=N:s==="post"?j=()=>queuePostRenderEffect(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),j=()=>queueJob(N));const D=new ReactiveEffect(c,j);t?n?N():I=D.run():s==="post"?queuePostRenderEffect(D.run.bind(D),l&&l.suspense):D.run();const O=()=>{D.stop(),l&&l.scope&&remove(l.scope.effects,D)};return x&&x.push(O),O}function instanceWatch(e,t,n){const r=this.proxy,s=isString(e)?e.includes(".")?createPathGetter(r,e):()=>r[e]:e.bind(r,r);let o;isFunction(t)?o=t:(o=t.handler,n=t);const i=currentInstance;setCurrentInstance(this);const a=doWatch(s,o.bind(r),n);return i?setCurrentInstance(i):unsetCurrentInstance(),a}function createPathGetter(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function traverse(e,t){if(!isObject(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),isRef(e))traverse(e.value,t);else if(isArray(e))for(let n=0;n<e.length;n++)traverse(e[n],t);else if(isSet(e)||isMap(e))e.forEach(n=>{traverse(n,t)});else if(isPlainObject(e))for(const n in e)traverse(e[n],t);return e}function withDirectives(e,t){const n=currentRenderingInstance;if(n===null)return e;const r=getExposeProxy(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,l,c=EMPTY_OBJ]=t[o];i&&(isFunction(i)&&(i={mounted:i,updated:i}),i.deep&&traverse(a),s.push({dir:i,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function invokeDirectiveHook(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(pauseTracking(),callWithAsyncErrorHandling(l,n,8,[e.el,a,e,t]),resetTracking())}}const leaveCbKey=Symbol("_leaveCb"),enterCbKey=Symbol("_enterCb");function useTransitionState(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return onMounted(()=>{e.isMounted=!0}),onBeforeUnmount(()=>{e.isUnmounting=!0}),e}const TransitionHookValidator=[Function,Array],BaseTransitionPropsValidators={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},BaseTransitionImpl={name:"BaseTransition",props:BaseTransitionPropsValidators,setup(e,{slots:t}){const n=getCurrentInstance(),r=useTransitionState();let s;return()=>{const o=t.default&&getTransitionRawChildren(t.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(const I of o)if(I.type!==Comment){i=I;break}}const a=toRaw(e),{mode:l}=a;if(r.isLeaving)return emptyPlaceholder(i);const c=getKeepAliveChild(i);if(!c)return emptyPlaceholder(i);const d=resolveTransitionHooks(c,a,r,n);setTransitionHooks(c,d);const m=n.subTree,y=m&&getKeepAliveChild(m);let S=!1;const{getTransitionKey:x}=c.type;if(x){const I=x();s===void 0?s=I:I!==s&&(s=I,S=!0)}if(y&&y.type!==Comment&&(!isSameVNodeType(c,y)||S)){const I=resolveTransitionHooks(y,a,r,n);if(setTransitionHooks(y,I),l==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},emptyPlaceholder(i);l==="in-out"&&c.type!==Comment&&(I.delayLeave=(N,j,D)=>{const O=getLeavingNodesForType(r,y);O[String(y.key)]=y,N[leaveCbKey]=()=>{j(),N[leaveCbKey]=void 0,delete d.delayedLeave},d.delayedLeave=D})}return i}}},BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function resolveTransitionHooks(e,t,n,r){const{appear:s,mode:o,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:y,onAfterLeave:S,onLeaveCancelled:x,onBeforeAppear:I,onAppear:N,onAfterAppear:j,onAppearCancelled:D}=t,O=String(e.key),w=getLeavingNodesForType(n,e),$=(F,W)=>{F&&callWithAsyncErrorHandling(F,r,9,W)},K=(F,W)=>{const L=W[1];$(F,W),isArray(F)?F.every(J=>J.length<=1)&&L():F.length<=1&&L()},G={mode:o,persisted:i,beforeEnter(F){let W=a;if(!n.isMounted)if(s)W=I||a;else return;F[leaveCbKey]&&F[leaveCbKey](!0);const L=w[O];L&&isSameVNodeType(e,L)&&L.el[leaveCbKey]&&L.el[leaveCbKey](),$(W,[F])},enter(F){let W=l,L=c,J=d;if(!n.isMounted)if(s)W=N||l,L=j||c,J=D||d;else return;let P=!1;const U=F[enterCbKey]=ee=>{P||(P=!0,ee?$(J,[F]):$(L,[F]),G.delayedLeave&&G.delayedLeave(),F[enterCbKey]=void 0)};W?K(W,[F,U]):U()},leave(F,W){const L=String(e.key);if(F[enterCbKey]&&F[enterCbKey](!0),n.isUnmounting)return W();$(m,[F]);let J=!1;const P=F[leaveCbKey]=U=>{J||(J=!0,W(),U?$(x,[F]):$(S,[F]),F[leaveCbKey]=void 0,w[L]===e&&delete w[L])};w[L]=e,y?K(y,[F,P]):P()},clone(F){return resolveTransitionHooks(F,t,n,r)}};return G}function emptyPlaceholder(e){if(isKeepAlive(e))return e=cloneVNode(e),e.children=null,e}function getKeepAliveChild(e){return isKeepAlive(e)?e.children?e.children[0]:void 0:e}function setTransitionHooks(e,t){e.shapeFlag&6&&e.component?setTransitionHooks(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function getTransitionRawChildren(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===Fragment?(i.patchFlag&128&&s++,r=r.concat(getTransitionRawChildren(i.children,t,a))):(t||i.type!==Comment)&&r.push(a!=null?cloneVNode(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}const isAsyncWrapper=e=>!!e.type.__asyncLoader,isKeepAlive=e=>e.type.__isKeepAlive;function onActivated(e,t){registerKeepAliveHook(e,"a",t)}function onDeactivated(e,t){registerKeepAliveHook(e,"da",t)}function registerKeepAliveHook(e,t,n=currentInstance){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(injectHook(t,r,n),n){let s=n.parent;for(;s&&s.parent;)isKeepAlive(s.parent.vnode)&&injectToKeepAliveRoot(r,t,n,s),s=s.parent}}function injectToKeepAliveRoot(e,t,n,r){const s=injectHook(t,e,r,!0);onUnmounted(()=>{remove(r[t],s)},n)}function injectHook(e,t,n=currentInstance,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;pauseTracking(),setCurrentInstance(n);const a=callWithAsyncErrorHandling(t,n,e,i);return unsetCurrentInstance(),resetTracking(),a});return r?s.unshift(o):s.push(o),o}}const createHook=e=>(t,n=currentInstance)=>(!isInSSRComponentSetup||e==="sp")&&injectHook(e,(...r)=>t(...r),n),onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(e,t=currentInstance){injectHook("ec",e,t)}function renderList(e,t,n,r){let s;const o=n&&n[r];if(isArray(e)||isString(e)){s=new Array(e.length);for(let i=0,a=e.length;i<a;i++)s[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,o&&o[i])}else if(isObject(e))if(e[Symbol.iterator])s=Array.from(e,(i,a)=>t(i,a,void 0,o&&o[a]));else{const i=Object.keys(e);s=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const c=i[a];s[a]=t(e[c],c,a,o&&o[a])}}else s=[];return n&&(n[r]=s),s}function renderSlot(e,t,n={},r,s){if(currentRenderingInstance.isCE||currentRenderingInstance.parent&&isAsyncWrapper(currentRenderingInstance.parent)&&currentRenderingInstance.parent.isCE)return t!=="default"&&(n.name=t),createVNode("slot",n,r&&r());let o=e[t];o&&o._c&&(o._d=!1),openBlock();const i=o&&ensureValidVNode(o(n)),a=createBlock(Fragment,{key:n.key||i&&i.key||`_${t}`},i||(r?r():[]),i&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function ensureValidVNode(e){return e.some(t=>isVNode(t)?!(t.type===Comment||t.type===Fragment&&!ensureValidVNode(t.children)):!0)?e:null}const getPublicInstance=e=>e?isStatefulComponent(e)?getExposeProxy(e)||e.proxy:getPublicInstance(e.parent):null,publicPropertiesMap=extend(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>getPublicInstance(e.parent),$root:e=>getPublicInstance(e.root),$emit:e=>e.emit,$options:e=>resolveMergedOptions(e),$forceUpdate:e=>e.f||(e.f=()=>queueJob(e.update)),$nextTick:e=>e.n||(e.n=nextTick.bind(e.proxy)),$watch:e=>instanceWatch.bind(e)}),hasSetupBinding=(e,t)=>e!==EMPTY_OBJ&&!e.__isScriptSetup&&hasOwn(e,t),PublicInstanceProxyHandlers={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const S=i[t];if(S!==void 0)switch(S){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(hasSetupBinding(r,t))return i[t]=1,r[t];if(s!==EMPTY_OBJ&&hasOwn(s,t))return i[t]=2,s[t];if((c=e.propsOptions[0])&&hasOwn(c,t))return i[t]=3,o[t];if(n!==EMPTY_OBJ&&hasOwn(n,t))return i[t]=4,n[t];shouldCacheAccess&&(i[t]=0)}}const d=publicPropertiesMap[t];let m,y;if(d)return t==="$attrs"&&track(e,"get",t),d(e);if((m=a.__cssModules)&&(m=m[t]))return m;if(n!==EMPTY_OBJ&&hasOwn(n,t))return i[t]=4,n[t];if(y=l.config.globalProperties,hasOwn(y,t))return y[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return hasSetupBinding(s,t)?(s[t]=n,!0):r!==EMPTY_OBJ&&hasOwn(r,t)?(r[t]=n,!0):hasOwn(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==EMPTY_OBJ&&hasOwn(e,i)||hasSetupBinding(t,i)||(a=o[0])&&hasOwn(a,i)||hasOwn(r,i)||hasOwn(publicPropertiesMap,i)||hasOwn(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:hasOwn(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function normalizePropsOrEmits(e){return isArray(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let shouldCacheAccess=!0;function applyOptions(e){const t=resolveMergedOptions(e),n=e.proxy,r=e.ctx;shouldCacheAccess=!1,t.beforeCreate&&callHook$1(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:c,created:d,beforeMount:m,mounted:y,beforeUpdate:S,updated:x,activated:I,deactivated:N,beforeDestroy:j,beforeUnmount:D,destroyed:O,unmounted:w,render:$,renderTracked:K,renderTriggered:G,errorCaptured:F,serverPrefetch:W,expose:L,inheritAttrs:J,components:P,directives:U,filters:ee}=t;if(c&&resolveInjections(c,r,null),i)for(const X in i){const Y=i[X];isFunction(Y)&&(r[X]=Y.bind(n))}if(s){const X=s.call(n,n);isObject(X)&&(e.data=reactive(X))}if(shouldCacheAccess=!0,o)for(const X in o){const Y=o[X],ie=isFunction(Y)?Y.bind(n,n):isFunction(Y.get)?Y.get.bind(n,n):NOOP,fe=!isFunction(Y)&&isFunction(Y.set)?Y.set.bind(n):NOOP,ae=computed({get:ie,set:fe});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>ae.value,set:re=>ae.value=re})}if(a)for(const X in a)createWatcher(a[X],r,n,X);if(l){const X=isFunction(l)?l.call(n):l;Reflect.ownKeys(X).forEach(Y=>{provide(Y,X[Y])})}d&&callHook$1(d,e,"c");function Q(X,Y){isArray(Y)?Y.forEach(ie=>X(ie.bind(n))):Y&&X(Y.bind(n))}if(Q(onBeforeMount,m),Q(onMounted,y),Q(onBeforeUpdate,S),Q(onUpdated,x),Q(onActivated,I),Q(onDeactivated,N),Q(onErrorCaptured,F),Q(onRenderTracked,K),Q(onRenderTriggered,G),Q(onBeforeUnmount,D),Q(onUnmounted,w),Q(onServerPrefetch,W),isArray(L))if(L.length){const X=e.exposed||(e.exposed={});L.forEach(Y=>{Object.defineProperty(X,Y,{get:()=>n[Y],set:ie=>n[Y]=ie})})}else e.exposed||(e.exposed={});$&&e.render===NOOP&&(e.render=$),J!=null&&(e.inheritAttrs=J),P&&(e.components=P),U&&(e.directives=U)}function resolveInjections(e,t,n=NOOP){isArray(e)&&(e=normalizeInject(e));for(const r in e){const s=e[r];let o;isObject(s)?"default"in s?o=inject(s.from||r,s.default,!0):o=inject(s.from||r):o=inject(s),isRef(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function callHook$1(e,t,n){callWithAsyncErrorHandling(isArray(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function createWatcher(e,t,n,r){const s=r.includes(".")?createPathGetter(n,r):()=>n[r];if(isString(e)){const o=t[e];isFunction(o)&&watch(s,o)}else if(isFunction(e))watch(s,e.bind(n));else if(isObject(e))if(isArray(e))e.forEach(o=>createWatcher(o,t,n,r));else{const o=isFunction(e.handler)?e.handler.bind(n):t[e.handler];isFunction(o)&&watch(s,o,e)}}function resolveMergedOptions(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>mergeOptions(l,c,i,!0)),mergeOptions(l,t,i)),isObject(t)&&o.set(t,l),l}function mergeOptions(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&mergeOptions(e,o,n,!0),s&&s.forEach(i=>mergeOptions(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=internalOptionMergeStrats[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const internalOptionMergeStrats={data:mergeDataFn,props:mergeEmitsOrPropsOptions,emits:mergeEmitsOrPropsOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(e,t){return t?e?function(){return extend(isFunction(e)?e.call(this,this):e,isFunction(t)?t.call(this,this):t)}:t:e}function mergeInject(e,t){return mergeObjectOptions(normalizeInject(e),normalizeInject(t))}function normalizeInject(e){if(isArray(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mergeAsArray(e,t){return e?[...new Set([].concat(e,t))]:t}function mergeObjectOptions(e,t){return e?extend(Object.create(null),e,t):t}function mergeEmitsOrPropsOptions(e,t){return e?isArray(e)&&isArray(t)?[...new Set([...e,...t])]:extend(Object.create(null),normalizePropsOrEmits(e),normalizePropsOrEmits(t??{})):t}function mergeWatchOptions(e,t){if(!e)return t;if(!t)return e;const n=extend(Object.create(null),e);for(const r in t)n[r]=mergeAsArray(e[r],t[r]);return n}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid$1=0;function createAppAPI(e,t){return function(r,s=null){isFunction(r)||(r=extend({},r)),s!=null&&!isObject(s)&&(s=null);const o=createAppContext(),i=new WeakSet;let a=!1;const l=o.app={_uid:uid$1++,_component:r,_props:s,_container:null,_context:o,_instance:null,version,get config(){return o.config},set config(c){},use(c,...d){return i.has(c)||(c&&isFunction(c.install)?(i.add(c),c.install(l,...d)):isFunction(c)&&(i.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,m){if(!a){const y=createVNode(r,s);return y.appContext=o,d&&t?t(y,c):e(y,c,m),a=!0,l._container=c,c.__vue_app__=l,getExposeProxy(y.component)||y.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l},runWithContext(c){currentApp=l;try{return c()}finally{currentApp=null}}};return l}}let currentApp=null;function provide(e,t){if(currentInstance){let n=currentInstance.provides;const r=currentInstance.parent&&currentInstance.parent.provides;r===n&&(n=currentInstance.provides=Object.create(r)),n[e]=t}}function inject(e,t,n=!1){const r=currentInstance||currentRenderingInstance;if(r||currentApp){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:currentApp._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&isFunction(t)?t.call(r&&r.proxy):t}}function initProps(e,t,n,r=!1){const s={},o={};def(o,InternalObjectKey,1),e.propsDefaults=Object.create(null),setFullProps(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:shallowReactive(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function updateProps(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=toRaw(s),[l]=e.propsOptions;let c=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let y=d[m];if(isEmitListener(e.emitsOptions,y))continue;const S=t[y];if(l)if(hasOwn(o,y))S!==o[y]&&(o[y]=S,c=!0);else{const x=camelize(y);s[x]=resolvePropValue(l,a,x,S,e,!1)}else S!==o[y]&&(o[y]=S,c=!0)}}}else{setFullProps(e,t,s,o)&&(c=!0);let d;for(const m in a)(!t||!hasOwn(t,m)&&((d=hyphenate(m))===m||!hasOwn(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=resolvePropValue(l,a,m,void 0,e,!0)):delete s[m]);if(o!==a)for(const m in o)(!t||!hasOwn(t,m))&&(delete o[m],c=!0)}c&&trigger(e,"set","$attrs")}function setFullProps(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(isReservedProp(l))continue;const c=t[l];let d;s&&hasOwn(s,d=camelize(l))?!o||!o.includes(d)?n[d]=c:(a||(a={}))[d]=c:isEmitListener(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,i=!0)}if(o){const l=toRaw(n),c=a||EMPTY_OBJ;for(let d=0;d<o.length;d++){const m=o[d];n[m]=resolvePropValue(s,l,m,c[m],e,!hasOwn(c,m))}}return i}function resolvePropValue(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=hasOwn(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&isFunction(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(setCurrentInstance(s),r=c[n]=l.call(null,t),unsetCurrentInstance())}else r=l}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===hyphenate(n))&&(r=!0))}return r}function normalizePropsOptions(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!isFunction(e)){const d=m=>{l=!0;const[y,S]=normalizePropsOptions(m,t,!0);extend(i,y),S&&a.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!l)return isObject(e)&&r.set(e,EMPTY_ARR),EMPTY_ARR;if(isArray(o))for(let d=0;d<o.length;d++){const m=camelize(o[d]);validatePropName(m)&&(i[m]=EMPTY_OBJ)}else if(o)for(const d in o){const m=camelize(d);if(validatePropName(m)){const y=o[d],S=i[m]=isArray(y)||isFunction(y)?{type:y}:extend({},y);if(S){const x=getTypeIndex(Boolean,S.type),I=getTypeIndex(String,S.type);S[0]=x>-1,S[1]=I<0||x<I,(x>-1||hasOwn(S,"default"))&&a.push(m)}}}const c=[i,a];return isObject(e)&&r.set(e,c),c}function validatePropName(e){return e[0]!=="$"}function getType(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function isSameType(e,t){return getType(e)===getType(t)}function getTypeIndex(e,t){return isArray(t)?t.findIndex(n=>isSameType(n,e)):isFunction(t)&&isSameType(t,e)?0:-1}const isInternalKey=e=>e[0]==="_"||e==="$stable",normalizeSlotValue=e=>isArray(e)?e.map(normalizeVNode):[normalizeVNode(e)],normalizeSlot=(e,t,n)=>{if(t._n)return t;const r=withCtx((...s)=>normalizeSlotValue(t(...s)),n);return r._c=!1,r},normalizeObjectSlots=(e,t,n)=>{const r=e._ctx;for(const s in e){if(isInternalKey(s))continue;const o=e[s];if(isFunction(o))t[s]=normalizeSlot(s,o,r);else if(o!=null){const i=normalizeSlotValue(o);t[s]=()=>i}}},normalizeVNodeSlots=(e,t)=>{const n=normalizeSlotValue(t);e.slots.default=()=>n},initSlots=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=toRaw(t),def(t,"_",n)):normalizeObjectSlots(t,e.slots={})}else e.slots={},t&&normalizeVNodeSlots(e,t);def(e.slots,InternalObjectKey,1)},updateSlots=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=EMPTY_OBJ;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(extend(s,t),!n&&a===1&&delete s._):(o=!t.$stable,normalizeObjectSlots(t,s)),i=t}else t&&(normalizeVNodeSlots(e,t),i={default:1});if(o)for(const a in s)!isInternalKey(a)&&i[a]==null&&delete s[a]};function setRef(e,t,n,r,s=!1){if(isArray(e)){e.forEach((y,S)=>setRef(y,t&&(isArray(t)?t[S]:t),n,r,s));return}if(isAsyncWrapper(r)&&!s)return;const o=r.shapeFlag&4?getExposeProxy(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:l}=e,c=t&&t.r,d=a.refs===EMPTY_OBJ?a.refs={}:a.refs,m=a.setupState;if(c!=null&&c!==l&&(isString(c)?(d[c]=null,hasOwn(m,c)&&(m[c]=null)):isRef(c)&&(c.value=null)),isFunction(l))callWithErrorHandling(l,a,12,[i,d]);else{const y=isString(l),S=isRef(l);if(y||S){const x=()=>{if(e.f){const I=y?hasOwn(m,l)?m[l]:d[l]:l.value;s?isArray(I)&&remove(I,o):isArray(I)?I.includes(o)||I.push(o):y?(d[l]=[o],hasOwn(m,l)&&(m[l]=d[l])):(l.value=[o],e.k&&(d[e.k]=l.value))}else y?(d[l]=i,hasOwn(m,l)&&(m[l]=i)):S&&(l.value=i,e.k&&(d[e.k]=i))};i?(x.id=-1,queuePostRenderEffect(x,n)):x()}}}const queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(e){return baseCreateRenderer(e)}function baseCreateRenderer(e,t){const n=getGlobalThis();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:y,setScopeId:S=NOOP,insertStaticContent:x}=e,I=(u,f,g,E=null,v=null,T=null,A=!1,_=null,C=!!f.dynamicChildren)=>{if(u===f)return;u&&!isSameVNodeType(u,f)&&(E=he(u),re(u,v,T,!0),u=null),f.patchFlag===-2&&(C=!1,f.dynamicChildren=null);const{type:b,ref:M,shapeFlag:R}=f;switch(b){case Text:N(u,f,g,E);break;case Comment:j(u,f,g,E);break;case Static:u==null&&D(f,g,E,A);break;case Fragment:P(u,f,g,E,v,T,A,_,C);break;default:R&1?$(u,f,g,E,v,T,A,_,C):R&6?U(u,f,g,E,v,T,A,_,C):(R&64||R&128)&&b.process(u,f,g,E,v,T,A,_,C,le)}M!=null&&v&&setRef(M,u&&u.ref,T,f||u,!f)},N=(u,f,g,E)=>{if(u==null)r(f.el=a(f.children),g,E);else{const v=f.el=u.el;f.children!==u.children&&c(v,f.children)}},j=(u,f,g,E)=>{u==null?r(f.el=l(f.children||""),g,E):f.el=u.el},D=(u,f,g,E)=>{[u.el,u.anchor]=x(u.children,f,g,E,u.el,u.anchor)},O=({el:u,anchor:f},g,E)=>{let v;for(;u&&u!==f;)v=y(u),r(u,g,E),u=v;r(f,g,E)},w=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=y(u),s(u),u=g;s(f)},$=(u,f,g,E,v,T,A,_,C)=>{A=A||f.type==="svg",u==null?K(f,g,E,v,T,A,_,C):W(u,f,v,T,A,_,C)},K=(u,f,g,E,v,T,A,_)=>{let C,b;const{type:M,props:R,shapeFlag:k,transition:V,dirs:H}=u;if(C=u.el=i(u.type,T,R&&R.is,R),k&8?d(C,u.children):k&16&&F(u.children,C,null,E,v,T&&M!=="foreignObject",A,_),H&&invokeDirectiveHook(u,null,E,"created"),G(C,u,u.scopeId,A,E),R){for(const z in R)z!=="value"&&!isReservedProp(z)&&o(C,z,null,R[z],T,u.children,E,v,oe);"value"in R&&o(C,"value",null,R.value),(b=R.onVnodeBeforeMount)&&invokeVNodeHook(b,E,u)}H&&invokeDirectiveHook(u,null,E,"beforeMount");const q=needTransition(v,V);q&&V.beforeEnter(C),r(C,f,g),((b=R&&R.onVnodeMounted)||q||H)&&queuePostRenderEffect(()=>{b&&invokeVNodeHook(b,E,u),q&&V.enter(C),H&&invokeDirectiveHook(u,null,E,"mounted")},v)},G=(u,f,g,E,v)=>{if(g&&S(u,g),E)for(let T=0;T<E.length;T++)S(u,E[T]);if(v){let T=v.subTree;if(f===T){const A=v.vnode;G(u,A,A.scopeId,A.slotScopeIds,v.parent)}}},F=(u,f,g,E,v,T,A,_,C=0)=>{for(let b=C;b<u.length;b++){const M=u[b]=_?cloneIfMounted(u[b]):normalizeVNode(u[b]);I(null,M,f,g,E,v,T,A,_)}},W=(u,f,g,E,v,T,A)=>{const _=f.el=u.el;let{patchFlag:C,dynamicChildren:b,dirs:M}=f;C|=u.patchFlag&16;const R=u.props||EMPTY_OBJ,k=f.props||EMPTY_OBJ;let V;g&&toggleRecurse(g,!1),(V=k.onVnodeBeforeUpdate)&&invokeVNodeHook(V,g,f,u),M&&invokeDirectiveHook(f,u,g,"beforeUpdate"),g&&toggleRecurse(g,!0);const H=v&&f.type!=="foreignObject";if(b?L(u.dynamicChildren,b,_,g,E,H,T):A||Y(u,f,_,null,g,E,H,T,!1),C>0){if(C&16)J(_,f,R,k,g,E,v);else if(C&2&&R.class!==k.class&&o(_,"class",null,k.class,v),C&4&&o(_,"style",R.style,k.style,v),C&8){const q=f.dynamicProps;for(let z=0;z<q.length;z++){const Z=q[z],ne=R[Z],ce=k[Z];(ce!==ne||Z==="value")&&o(_,Z,ne,ce,v,u.children,g,E,oe)}}C&1&&u.children!==f.children&&d(_,f.children)}else!A&&b==null&&J(_,f,R,k,g,E,v);((V=k.onVnodeUpdated)||M)&&queuePostRenderEffect(()=>{V&&invokeVNodeHook(V,g,f,u),M&&invokeDirectiveHook(f,u,g,"updated")},E)},L=(u,f,g,E,v,T,A)=>{for(let _=0;_<f.length;_++){const C=u[_],b=f[_],M=C.el&&(C.type===Fragment||!isSameVNodeType(C,b)||C.shapeFlag&70)?m(C.el):g;I(C,b,M,null,E,v,T,A,!0)}},J=(u,f,g,E,v,T,A)=>{if(g!==E){if(g!==EMPTY_OBJ)for(const _ in g)!isReservedProp(_)&&!(_ in E)&&o(u,_,g[_],null,A,f.children,v,T,oe);for(const _ in E){if(isReservedProp(_))continue;const C=E[_],b=g[_];C!==b&&_!=="value"&&o(u,_,b,C,A,f.children,v,T,oe)}"value"in E&&o(u,"value",g.value,E.value)}},P=(u,f,g,E,v,T,A,_,C)=>{const b=f.el=u?u.el:a(""),M=f.anchor=u?u.anchor:a("");let{patchFlag:R,dynamicChildren:k,slotScopeIds:V}=f;V&&(_=_?_.concat(V):V),u==null?(r(b,g,E),r(M,g,E),F(f.children,g,M,v,T,A,_,C)):R>0&&R&64&&k&&u.dynamicChildren?(L(u.dynamicChildren,k,g,v,T,A,_),(f.key!=null||v&&f===v.subTree)&&traverseStaticChildren(u,f,!0)):Y(u,f,g,M,v,T,A,_,C)},U=(u,f,g,E,v,T,A,_,C)=>{f.slotScopeIds=_,u==null?f.shapeFlag&512?v.ctx.activate(f,g,E,A,C):ee(f,g,E,v,T,A,C):ue(u,f,C)},ee=(u,f,g,E,v,T,A)=>{const _=u.component=createComponentInstance(u,E,v);if(isKeepAlive(u)&&(_.ctx.renderer=le),setupComponent(_),_.asyncDep){if(v&&v.registerDep(_,Q),!u.el){const C=_.subTree=createVNode(Comment);j(null,C,f,g)}return}Q(_,u,f,g,v,T,A)},ue=(u,f,g)=>{const E=f.component=u.component;if(shouldUpdateComponent(u,f,g))if(E.asyncDep&&!E.asyncResolved){X(E,f,g);return}else E.next=f,invalidateJob(E.update),E.update();else f.el=u.el,E.vnode=f},Q=(u,f,g,E,v,T,A)=>{const _=()=>{if(u.isMounted){let{next:M,bu:R,u:k,parent:V,vnode:H}=u,q=M,z;toggleRecurse(u,!1),M?(M.el=H.el,X(u,M,A)):M=H,R&&invokeArrayFns(R),(z=M.props&&M.props.onVnodeBeforeUpdate)&&invokeVNodeHook(z,V,M,H),toggleRecurse(u,!0);const Z=renderComponentRoot(u),ne=u.subTree;u.subTree=Z,I(ne,Z,m(ne.el),he(ne),u,v,T),M.el=Z.el,q===null&&updateHOCHostEl(u,Z.el),k&&queuePostRenderEffect(k,v),(z=M.props&&M.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(z,V,M,H),v)}else{let M;const{el:R,props:k}=f,{bm:V,m:H,parent:q}=u,z=isAsyncWrapper(f);if(toggleRecurse(u,!1),V&&invokeArrayFns(V),!z&&(M=k&&k.onVnodeBeforeMount)&&invokeVNodeHook(M,q,f),toggleRecurse(u,!0),R&&me){const Z=()=>{u.subTree=renderComponentRoot(u),me(R,u.subTree,u,v,null)};z?f.type.__asyncLoader().then(()=>!u.isUnmounted&&Z()):Z()}else{const Z=u.subTree=renderComponentRoot(u);I(null,Z,g,E,u,v,T),f.el=Z.el}if(H&&queuePostRenderEffect(H,v),!z&&(M=k&&k.onVnodeMounted)){const Z=f;queuePostRenderEffect(()=>invokeVNodeHook(M,q,Z),v)}(f.shapeFlag&256||q&&isAsyncWrapper(q.vnode)&&q.vnode.shapeFlag&256)&&u.a&&queuePostRenderEffect(u.a,v),u.isMounted=!0,f=g=E=null}},C=u.effect=new ReactiveEffect(_,()=>queueJob(b),u.scope),b=u.update=()=>C.run();b.id=u.uid,toggleRecurse(u,!0),b()},X=(u,f,g)=>{f.component=u;const E=u.vnode.props;u.vnode=f,u.next=null,updateProps(u,f.props,E,g),updateSlots(u,f.children,g),pauseTracking(),flushPreFlushCbs(),resetTracking()},Y=(u,f,g,E,v,T,A,_,C=!1)=>{const b=u&&u.children,M=u?u.shapeFlag:0,R=f.children,{patchFlag:k,shapeFlag:V}=f;if(k>0){if(k&128){fe(b,R,g,E,v,T,A,_,C);return}else if(k&256){ie(b,R,g,E,v,T,A,_,C);return}}V&8?(M&16&&oe(b,v,T),R!==b&&d(g,R)):M&16?V&16?fe(b,R,g,E,v,T,A,_,C):oe(b,v,T,!0):(M&8&&d(g,""),V&16&&F(R,g,E,v,T,A,_,C))},ie=(u,f,g,E,v,T,A,_,C)=>{u=u||EMPTY_ARR,f=f||EMPTY_ARR;const b=u.length,M=f.length,R=Math.min(b,M);let k;for(k=0;k<R;k++){const V=f[k]=C?cloneIfMounted(f[k]):normalizeVNode(f[k]);I(u[k],V,g,null,v,T,A,_,C)}b>M?oe(u,v,T,!0,!1,R):F(f,g,E,v,T,A,_,C,R)},fe=(u,f,g,E,v,T,A,_,C)=>{let b=0;const M=f.length;let R=u.length-1,k=M-1;for(;b<=R&&b<=k;){const V=u[b],H=f[b]=C?cloneIfMounted(f[b]):normalizeVNode(f[b]);if(isSameVNodeType(V,H))I(V,H,g,null,v,T,A,_,C);else break;b++}for(;b<=R&&b<=k;){const V=u[R],H=f[k]=C?cloneIfMounted(f[k]):normalizeVNode(f[k]);if(isSameVNodeType(V,H))I(V,H,g,null,v,T,A,_,C);else break;R--,k--}if(b>R){if(b<=k){const V=k+1,H=V<M?f[V].el:E;for(;b<=k;)I(null,f[b]=C?cloneIfMounted(f[b]):normalizeVNode(f[b]),g,H,v,T,A,_,C),b++}}else if(b>k)for(;b<=R;)re(u[b],v,T,!0),b++;else{const V=b,H=b,q=new Map;for(b=H;b<=k;b++){const te=f[b]=C?cloneIfMounted(f[b]):normalizeVNode(f[b]);te.key!=null&&q.set(te.key,b)}let z,Z=0;const ne=k-H+1;let ce=!1,Ee=0;const de=new Array(ne);for(b=0;b<ne;b++)de[b]=0;for(b=V;b<=R;b++){const te=u[b];if(Z>=ne){re(te,v,T,!0);continue}let se;if(te.key!=null)se=q.get(te.key);else for(z=H;z<=k;z++)if(de[z-H]===0&&isSameVNodeType(te,f[z])){se=z;break}se===void 0?re(te,v,T,!0):(de[se-H]=b+1,se>=Ee?Ee=se:ce=!0,I(te,f[se],g,null,v,T,A,_,C),Z++)}const ve=ce?getSequence(de):EMPTY_ARR;for(z=ve.length-1,b=ne-1;b>=0;b--){const te=H+b,se=f[te],be=te+1<M?f[te+1].el:E;de[b]===0?I(null,se,g,be,v,T,A,_,C):ce&&(z<0||b!==ve[z]?ae(se,g,be,2):z--)}}},ae=(u,f,g,E,v=null)=>{const{el:T,type:A,transition:_,children:C,shapeFlag:b}=u;if(b&6){ae(u.component.subTree,f,g,E);return}if(b&128){u.suspense.move(f,g,E);return}if(b&64){A.move(u,f,g,le);return}if(A===Fragment){r(T,f,g);for(let R=0;R<C.length;R++)ae(C[R],f,g,E);r(u.anchor,f,g);return}if(A===Static){O(u,f,g);return}if(E!==2&&b&1&&_)if(E===0)_.beforeEnter(T),r(T,f,g),queuePostRenderEffect(()=>_.enter(T),v);else{const{leave:R,delayLeave:k,afterLeave:V}=_,H=()=>r(T,f,g),q=()=>{R(T,()=>{H(),V&&V()})};k?k(T,H,q):q()}else r(T,f,g)},re=(u,f,g,E=!1,v=!1)=>{const{type:T,props:A,ref:_,children:C,dynamicChildren:b,shapeFlag:M,patchFlag:R,dirs:k}=u;if(_!=null&&setRef(_,null,g,u,!0),M&256){f.ctx.deactivate(u);return}const V=M&1&&k,H=!isAsyncWrapper(u);let q;if(H&&(q=A&&A.onVnodeBeforeUnmount)&&invokeVNodeHook(q,f,u),M&6)Se(u.component,g,E);else{if(M&128){u.suspense.unmount(g,E);return}V&&invokeDirectiveHook(u,null,f,"beforeUnmount"),M&64?u.type.remove(u,f,g,v,le,E):b&&(T!==Fragment||R>0&&R&64)?oe(b,f,g,!1,!0):(T===Fragment&&R&384||!v&&M&16)&&oe(C,f,g),E&&ge(u)}(H&&(q=A&&A.onVnodeUnmounted)||V)&&queuePostRenderEffect(()=>{q&&invokeVNodeHook(q,f,u),V&&invokeDirectiveHook(u,null,f,"unmounted")},g)},ge=u=>{const{type:f,el:g,anchor:E,transition:v}=u;if(f===Fragment){_e(g,E);return}if(f===Static){w(u);return}const T=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:_}=v,C=()=>A(g,T);_?_(u.el,T,C):C()}else T()},_e=(u,f)=>{let g;for(;u!==f;)g=y(u),s(u),u=g;s(f)},Se=(u,f,g)=>{const{bum:E,scope:v,update:T,subTree:A,um:_}=u;E&&invokeArrayFns(E),v.stop(),T&&(T.active=!1,re(A,u,f,g)),_&&queuePostRenderEffect(_,f),queuePostRenderEffect(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},oe=(u,f,g,E=!1,v=!1,T=0)=>{for(let A=T;A<u.length;A++)re(u[A],f,g,E,v)},he=u=>u.shapeFlag&6?he(u.component.subTree):u.shapeFlag&128?u.suspense.next():y(u.anchor||u.el),ye=(u,f,g)=>{u==null?f._vnode&&re(f._vnode,null,null,!0):I(f._vnode||null,u,f,null,null,null,g),flushPreFlushCbs(),flushPostFlushCbs(),f._vnode=u},le={p:I,um:re,m:ae,r:ge,mt:ee,mc:F,pc:Y,pbc:L,n:he,o:e};let pe,me;return t&&([pe,me]=t(le)),{render:ye,hydrate:pe,createApp:createAppAPI(ye,pe)}}function toggleRecurse({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function needTransition(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function traverseStaticChildren(e,t,n=!1){const r=e.children,s=t.children;if(isArray(r)&&isArray(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=cloneIfMounted(s[o]),a.el=i.el),n||traverseStaticChildren(i,a)),a.type===Text&&(a.el=i.el)}}function getSequence(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<c?o=a+1:i=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const isTeleport=e=>e.__isTeleport,Fragment=Symbol.for("v-fgt"),Text=Symbol.for("v-txt"),Comment=Symbol.for("v-cmt"),Static=Symbol.for("v-stc"),blockStack=[];let currentBlock=null;function openBlock(e=!1){blockStack.push(currentBlock=e?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(e){isBlockTreeEnabled+=e}function setupBlock(e){return e.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(e),e}function createElementBlock(e,t,n,r,s,o){return setupBlock(createBaseVNode(e,t,n,r,s,o,!0))}function createBlock(e,t,n,r,s){return setupBlock(createVNode(e,t,n,r,s,!0))}function isVNode(e){return e?e.__v_isVNode===!0:!1}function isSameVNodeType(e,t){return e.type===t.type&&e.key===t.key}const InternalObjectKey="__vInternal",normalizeKey=({key:e})=>e??null,normalizeRef=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?isString(e)||isRef(e)||isFunction(e)?{i:currentRenderingInstance,r:e,k:t,f:!!n}:e:null);function createBaseVNode(e,t=null,n=null,r=0,s=null,o=e===Fragment?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&normalizeKey(t),ref:t&&normalizeRef(t),scopeId:currentScopeId,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:currentRenderingInstance};return a?(normalizeChildren(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=isString(n)?8:16),isBlockTreeEnabled>0&&!i&&currentBlock&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&currentBlock.push(l),l}const createVNode=_createVNode;function _createVNode(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===NULL_DYNAMIC_COMPONENT)&&(e=Comment),isVNode(e)){const a=cloneVNode(e,t,!0);return n&&normalizeChildren(a,n),isBlockTreeEnabled>0&&!o&&currentBlock&&(a.shapeFlag&6?currentBlock[currentBlock.indexOf(e)]=a:currentBlock.push(a)),a.patchFlag|=-2,a}if(isClassComponent(e)&&(e=e.__vccOpts),t){t=guardReactiveProps(t);let{class:a,style:l}=t;a&&!isString(a)&&(t.class=normalizeClass(a)),isObject(l)&&(isProxy(l)&&!isArray(l)&&(l=extend({},l)),t.style=normalizeStyle(l))}const i=isString(e)?1:isSuspense(e)?128:isTeleport(e)?64:isObject(e)?4:isFunction(e)?2:0;return createBaseVNode(e,t,n,r,s,i,o,!0)}function guardReactiveProps(e){return e?isProxy(e)||InternalObjectKey in e?extend({},e):e:null}function cloneVNode(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?mergeProps(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&normalizeKey(a),ref:t&&t.ref?n&&s?isArray(s)?s.concat(normalizeRef(t)):[s,normalizeRef(t)]:normalizeRef(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fragment?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&cloneVNode(e.ssContent),ssFallback:e.ssFallback&&cloneVNode(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function createTextVNode(e=" ",t=0){return createVNode(Text,null,e,t)}function createCommentVNode(e="",t=!1){return t?(openBlock(),createBlock(Comment,null,e)):createVNode(Comment,null,e)}function normalizeVNode(e){return e==null||typeof e=="boolean"?createVNode(Comment):isArray(e)?createVNode(Fragment,null,e.slice()):typeof e=="object"?cloneIfMounted(e):createVNode(Text,null,String(e))}function cloneIfMounted(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:cloneVNode(e)}function normalizeChildren(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(isArray(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),normalizeChildren(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(InternalObjectKey in t)?t._ctx=currentRenderingInstance:s===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else isFunction(t)?(t={default:t,_ctx:currentRenderingInstance},n=32):(t=String(t),r&64?(n=16,t=[createTextVNode(t)]):n=8);e.children=t,e.shapeFlag|=n}function mergeProps(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=normalizeClass([t.class,r.class]));else if(s==="style")t.style=normalizeStyle([t.style,r.style]);else if(isOn(s)){const o=t[s],i=r[s];i&&o!==i&&!(isArray(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function invokeVNodeHook(e,t,n,r=null){callWithAsyncErrorHandling(e,t,7,[n,r])}const emptyAppContext=createAppContext();let uid=0;function createComponentInstance(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||emptyAppContext,o={uid:uid++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(r,s),emitsOptions:normalizeEmitsOptions(r,s),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:r.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=emit.bind(null,o),e.ce&&e.ce(o),o}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance;let internalSetCurrentInstance,globalCurrentInstanceSetters,settersKey="__VUE_INSTANCE_SETTERS__";(globalCurrentInstanceSetters=getGlobalThis()[settersKey])||(globalCurrentInstanceSetters=getGlobalThis()[settersKey]=[]),globalCurrentInstanceSetters.push(e=>currentInstance=e),internalSetCurrentInstance=e=>{globalCurrentInstanceSetters.length>1?globalCurrentInstanceSetters.forEach(t=>t(e)):globalCurrentInstanceSetters[0](e)};const setCurrentInstance=e=>{internalSetCurrentInstance(e),e.scope.on()},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),internalSetCurrentInstance(null)};function isStatefulComponent(e){return e.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(e,t=!1){isInSSRComponentSetup=t;const{props:n,children:r}=e.vnode,s=isStatefulComponent(e);initProps(e,n,s,t),initSlots(e,r);const o=s?setupStatefulComponent(e,t):void 0;return isInSSRComponentSetup=!1,o}function setupStatefulComponent(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=markRaw(new Proxy(e.ctx,PublicInstanceProxyHandlers));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?createSetupContext(e):null;setCurrentInstance(e),pauseTracking();const o=callWithErrorHandling(r,e,0,[e.props,s]);if(resetTracking(),unsetCurrentInstance(),isPromise(o)){if(o.then(unsetCurrentInstance,unsetCurrentInstance),t)return o.then(i=>{handleSetupResult(e,i,t)}).catch(i=>{handleError(i,e,0)});e.asyncDep=o}else handleSetupResult(e,o,t)}else finishComponentSetup(e,t)}function handleSetupResult(e,t,n){isFunction(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:isObject(t)&&(e.setupState=proxyRefs(t)),finishComponentSetup(e,n)}let compile;function finishComponentSetup(e,t,n){const r=e.type;if(!e.render){if(!t&&compile&&!r.render){const s=r.template||resolveMergedOptions(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=extend(extend({isCustomElement:o,delimiters:a},i),l);r.render=compile(s,c)}}e.render=r.render||NOOP}{setCurrentInstance(e),pauseTracking();try{applyOptions(e)}finally{resetTracking(),unsetCurrentInstance()}}}function getAttrsProxy(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return track(e,"get","$attrs"),t[n]}}))}function createSetupContext(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return getAttrsProxy(e)},slots:e.slots,emit:e.emit,expose:t}}function getExposeProxy(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(proxyRefs(markRaw(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in publicPropertiesMap)return publicPropertiesMap[n](e)},has(t,n){return n in t||n in publicPropertiesMap}}))}function isClassComponent(e){return isFunction(e)&&"__vccOpts"in e}const computed=(e,t)=>computed$1(e,t,isInSSRComponentSetup);function h(e,t,n){const r=arguments.length;return r===2?isObject(t)&&!isArray(t)?isVNode(t)?createVNode(e,null,[t]):createVNode(e,t):createVNode(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&isVNode(n)&&(n=[n]),createVNode(e,t,n))}const ssrContextKey=Symbol.for("v-scx"),useSSRContext=()=>inject(ssrContextKey),version="3.3.9",svgNS="http://www.w3.org/2000/svg",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?doc.createElementNS(svgNS,e):doc.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>doc.createTextNode(e),createComment:e=>doc.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>doc.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{templateContainer.innerHTML=r?`<svg>${e}</svg>`:e;const a=templateContainer.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},TRANSITION="transition",ANIMATION="animation",vtcKey=Symbol("_vtc"),Transition=(e,{slots:t})=>h(BaseTransition,resolveTransitionProps(e),t);Transition.displayName="Transition";const DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Transition.props=extend({},BaseTransitionPropsValidators,DOMTransitionPropsValidators);const callHook=(e,t=[])=>{isArray(e)?e.forEach(n=>n(...t)):e&&e(...t)},hasExplicitCallback=e=>e?isArray(e)?e.some(t=>t.length>1):e.length>1:!1;function resolveTransitionProps(e){const t={};for(const P in e)P in DOMTransitionPropsValidators||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=i,appearToClass:d=a,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:S=`${n}-leave-to`}=e,x=normalizeDuration(s),I=x&&x[0],N=x&&x[1],{onBeforeEnter:j,onEnter:D,onEnterCancelled:O,onLeave:w,onLeaveCancelled:$,onBeforeAppear:K=j,onAppear:G=D,onAppearCancelled:F=O}=t,W=(P,U,ee)=>{removeTransitionClass(P,U?d:a),removeTransitionClass(P,U?c:i),ee&&ee()},L=(P,U)=>{P._isLeaving=!1,removeTransitionClass(P,m),removeTransitionClass(P,S),removeTransitionClass(P,y),U&&U()},J=P=>(U,ee)=>{const ue=P?G:D,Q=()=>W(U,P,ee);callHook(ue,[U,Q]),nextFrame(()=>{removeTransitionClass(U,P?l:o),addTransitionClass(U,P?d:a),hasExplicitCallback(ue)||whenTransitionEnds(U,r,I,Q)})};return extend(t,{onBeforeEnter(P){callHook(j,[P]),addTransitionClass(P,o),addTransitionClass(P,i)},onBeforeAppear(P){callHook(K,[P]),addTransitionClass(P,l),addTransitionClass(P,c)},onEnter:J(!1),onAppear:J(!0),onLeave(P,U){P._isLeaving=!0;const ee=()=>L(P,U);addTransitionClass(P,m),forceReflow(),addTransitionClass(P,y),nextFrame(()=>{P._isLeaving&&(removeTransitionClass(P,m),addTransitionClass(P,S),hasExplicitCallback(w)||whenTransitionEnds(P,r,N,ee))}),callHook(w,[P,ee])},onEnterCancelled(P){W(P,!1),callHook(O,[P])},onAppearCancelled(P){W(P,!0),callHook(F,[P])},onLeaveCancelled(P){L(P),callHook($,[P])}})}function normalizeDuration(e){if(e==null)return null;if(isObject(e))return[NumberOf(e.enter),NumberOf(e.leave)];{const t=NumberOf(e);return[t,t]}}function NumberOf(e){return toNumber(e)}function addTransitionClass(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[vtcKey]||(e[vtcKey]=new Set)).add(t)}function removeTransitionClass(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[vtcKey];n&&(n.delete(t),n.size||(e[vtcKey]=void 0))}function nextFrame(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let endId=0;function whenTransitionEnds(e,t,n,r){const s=e._endId=++endId,o=()=>{s===e._endId&&r()};if(n)return setTimeout(o,n);const{type:i,timeout:a,propCount:l}=getTransitionInfo(e,t);if(!i)return r();const c=i+"end";let d=0;const m=()=>{e.removeEventListener(c,y),o()},y=S=>{S.target===e&&++d>=l&&m()};setTimeout(()=>{d<l&&m()},a+1),e.addEventListener(c,y)}function getTransitionInfo(e,t){const n=window.getComputedStyle(e),r=x=>(n[x]||"").split(", "),s=r(`${TRANSITION}Delay`),o=r(`${TRANSITION}Duration`),i=getTimeout(s,o),a=r(`${ANIMATION}Delay`),l=r(`${ANIMATION}Duration`),c=getTimeout(a,l);let d=null,m=0,y=0;t===TRANSITION?i>0&&(d=TRANSITION,m=i,y=o.length):t===ANIMATION?c>0&&(d=ANIMATION,m=c,y=l.length):(m=Math.max(i,c),d=m>0?i>c?TRANSITION:ANIMATION:null,y=d?d===TRANSITION?o.length:l.length:0);const S=d===TRANSITION&&/\b(transform|all)(,|$)/.test(r(`${TRANSITION}Property`).toString());return{type:d,timeout:m,propCount:y,hasTransform:S}}function getTimeout(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>toMs(n)+toMs(e[r])))}function toMs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function forceReflow(){return document.body.offsetHeight}function patchClass(e,t,n){const r=e[vtcKey];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const vShowOldKey=Symbol("_vod"),vShow={beforeMount(e,{value:t},{transition:n}){e[vShowOldKey]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):setDisplay(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),setDisplay(e,!0),r.enter(e)):r.leave(e,()=>{setDisplay(e,!1)}):setDisplay(e,t))},beforeUnmount(e,{value:t}){setDisplay(e,t)}};function setDisplay(e,t){e.style.display=t?e[vShowOldKey]:"none"}function patchStyle(e,t,n){const r=e.style,s=isString(n);if(n&&!s){if(t&&!isString(t))for(const o in t)n[o]==null&&setStyle(r,o,"");for(const o in n)setStyle(r,o,n[o])}else{const o=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),vShowOldKey in e&&(r.display=o)}}const importantRE=/\s*!important$/;function setStyle(e,t,n){if(isArray(n))n.forEach(r=>setStyle(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=autoPrefix(e,t);importantRE.test(n)?e.setProperty(hyphenate(r),n.replace(importantRE,""),"important"):e[r]=n}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(e,t){const n=prefixCache[t];if(n)return n;let r=camelize(t);if(r!=="filter"&&r in e)return prefixCache[t]=r;r=capitalize(r);for(let s=0;s<prefixes.length;s++){const o=prefixes[s]+r;if(o in e)return prefixCache[t]=o}return t}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(xlinkNS,t.slice(6,t.length)):e.setAttributeNS(xlinkNS,t,n);else{const o=isSpecialBooleanAttr(t);n==null||o&&!includeBooleanAttr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function patchDOMProp(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=includeBooleanAttr(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function addEventListener(e,t,n,r){e.addEventListener(t,n,r)}function removeEventListener(e,t,n,r){e.removeEventListener(t,n,r)}const veiKey=Symbol("_vei");function patchEvent(e,t,n,r,s=null){const o=e[veiKey]||(e[veiKey]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=parseName(t);if(r){const c=o[t]=createInvoker(r,s);addEventListener(e,a,c,l)}else i&&(removeEventListener(e,a,i,l),o[t]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(e){let t;if(optionsModifierRE.test(e)){t={};let r;for(;r=e.match(optionsModifierRE);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hyphenate(e.slice(2)),t]}let cachedNow=0;const p=Promise.resolve(),getNow=()=>cachedNow||(p.then(()=>cachedNow=0),cachedNow=Date.now());function createInvoker(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;callWithAsyncErrorHandling(patchStopImmediatePropagation(r,n.value),t,5,[r])};return n.value=e,n.attached=getNow(),n}function patchStopImmediatePropagation(e,t){if(isArray(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const nativeOnRE=/^on[a-z]/,patchProp=(e,t,n,r,s=!1,o,i,a,l)=>{t==="class"?patchClass(e,r,s):t==="style"?patchStyle(e,n,r):isOn(t)?isModelListener(t)||patchEvent(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):shouldSetAsProp(e,t,r,s))?patchDOMProp(e,t,r,o,i,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),patchAttr(e,t,r,s))};function shouldSetAsProp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&nativeOnRE.test(t)&&isFunction(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||nativeOnRE.test(t)&&isString(n)?!1:t in e}const rendererOptions=extend({patchProp},nodeOps);let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}const createApp=(...e)=>{const t=ensureRenderer().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=normalizeContainer(r);if(!s)return;const o=t._component;!isFunction(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function normalizeContainer(e){return isString(e)?document.querySelector(e):e}const root$3="_root_3unp2_2",style0$3={root:root$3},_export_sfc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},_sfc_main$4={props:{active:Boolean,x:Number,y:Number},computed:{transform(){return this.scale!==void 0?`transform: translate(${this.x}px, ${this.y}px)`:`transform: translate(${this.x}px, ${this.y}px)`}}};function _sfc_render$3(e,t,n,r,s,o){return openBlock(),createBlock(Transition,{name:"fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{class:normalizeClass(e.$style.root),style:normalizeStyle(o.transform)},[renderSlot(e.$slots,"default")],6),[[vShow,n.active]])]),_:3})}const cssModules$3={$style:style0$3},Wrapper=_export_sfc(_sfc_main$4,[["render",_sfc_render$3],["__cssModules",cssModules$3]]),root$2="_root_lvx40_2",rootMenu="_rootMenu_lvx40_13",rootTitle="_rootTitle_lvx40_22",parents="_parents_lvx40_33",subMenuItem="_subMenuItem_lvx40_36",parentTitleWrapper="_parentTitleWrapper_lvx40_53",parentTitle="_parentTitle_lvx40_53",style0$2={root:root$2,rootMenu,rootTitle,parents,subMenuItem,parentTitleWrapper,parentTitle},_sfc_main$3={inject:["setFocusNode","getSurface","setHighlightNode","closeHighlightElem"],props:{meta:Object,isFocus:Boolean},computed:{strokeDash(){return this.isFocus?"none":"4, 1"},isModal(){var e;return this.ideModel.isModal&&((e=this.ideModel.source._cacheStatus)==null?void 0:e.open)},ideModel(){return this.meta.source},parentList(){let e=this.meta.source,t=[];for(;e.parentNode&&!e.parentNode.isRoot;){const n=e.parentNode;t.push({source:n,title:n.tag,key:n.componentKey}),e=n}return console.log(t),t.reverse()},polygonPath(){const e=this.meta.polygonPath;let t=0,n=e.length,r="M ";for(;t<n;)r+=`${e[t]} ${e[t+1]}`,t+=2,r+=t===n?" Z":" L ";return r},viewBox(){const e=this.meta.viewbox;return`${e.x-3} ${e.y-3} ${e.width+6} ${e.height+6}`},width(){return this.meta.viewbox.width+6},height(){return this.meta.viewbox.height+6},title(){var e,t;return((t=(e=this.meta)==null?void 0:e.source)==null?void 0:t.tag)||""},transform(){const e=this.meta.viewbox;return`transform: translate(${e.x-3}px, ${e.y-3}px)`}},methods:{hoverParent(e){if(!this.isFocus)return;const t=e.target;t&&t.getAttribute("nodePath")?(this.setHighlightNode(t.getAttribute("nodePath")),console.log(t.getAttribute("nodePath"))):(console.log("not"),this.closeHighlightElem())},changeFocus(e){this.setFocusNode(e)},deleteElement(){this.ideModel.delete();const e=this.getSurface();e.refreshIDE();const t=e.ide;t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!1),t.closeHighlight(),t.clearFocus()},closeModal(){const e=this.getSurface().ide,t=this.ideModel.nodePath;e.doCallComponentMethod({nodePath:t,method:"close"}),e.doSetRestrictArea(),this.ideModel.source._cacheStatus={open:!1},e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight(),e.clearFocus()}}},_hoisted_1=["focus"],_hoisted_2=["nodePath","onClick"],_hoisted_3=["width","height","viewBox"],_hoisted_4=["stroke-dasharray","d"];function _sfc_render$2(e,t,n,r,s,o){return openBlock(),createElementBlock("div",{class:normalizeClass(e.$style.root),focus:n.isFocus},[n.meta.active?(openBlock(),createElementBlock(Fragment,{key:0},[n.meta.noTitle?createCommentVNode("",!0):(openBlock(),createElementBlock("div",{key:0,class:normalizeClass(e.$style.rootMenu)},[createBaseVNode("div",{class:normalizeClass(e.$style.rootTitle),onMouseover:t[0]||(t[0]=(...i)=>o.hoverParent&&o.hoverParent(...i))},[createTextVNode(toDisplayString(o.title)+" ",1),n.isFocus?(openBlock(),createElementBlock("div",{key:0,class:normalizeClass(e.$style.parents)},[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.parentList,i=>(openBlock(),createElementBlock("div",{key:"item.key",class:normalizeClass(e.$style.parentTitleWrapper)},[createBaseVNode("div",{class:normalizeClass(e.$style.parentTitle),nodePath:i.source.nodePath,onClick:a=>o.changeFocus(i.source)},toDisplayString(i.title),11,_hoisted_2)],2))),128))],2)):createCommentVNode("",!0)],34),o.ideModel.deletable&&!o.isModal?(openBlock(),createElementBlock("div",{key:0,class:normalizeClass(e.$style.subMenuContainer)},[createBaseVNode("div",{class:normalizeClass(e.$style.subMenuItem),onClick:t[1]||(t[1]=(...i)=>o.deleteElement&&o.deleteElement(...i))},"删除",2)],2)):createCommentVNode("",!0),o.isModal?(openBlock(),createElementBlock("div",{key:1,class:normalizeClass(e.$style.subMenuContainer)},[createBaseVNode("div",{class:normalizeClass(e.$style.subMenuItem),onClick:t[2]||(t[2]=(...i)=>o.closeModal&&o.closeModal(...i))},"关闭",2)],2)):createCommentVNode("",!0)],2)),(openBlock(),createElementBlock("svg",{style:normalizeStyle(o.transform),width:o.width,height:o.height,viewBox:o.viewBox,xmlns:"http://www.w3.org/2000/svg"},[createBaseVNode("path",{fill:"none","stroke-width":"3","stroke-dasharray":o.strokeDash,stroke:"blue",d:o.polygonPath},null,8,_hoisted_4)],12,_hoisted_3))],64)):createCommentVNode("",!0)],10,_hoisted_1)}const cssModules$2={$style:style0$2},Selector$1=_export_sfc(_sfc_main$3,[["render",_sfc_render$2],["__cssModules",cssModules$2]]),root$1="_root_s5oev_2",seg="_seg_s5oev_13",style0$1={root:root$1,seg},_sfc_main$2={props:{segments:Object},data(){return{useTransition:!1}},computed:{active(){return this.segments.active},transform(){if(this.active){const e=this.segments.segments,t=e[0]===e[2],n=this.useTransition?"transition: all .3s;":"";return t?`${n}transform: translate(${e[0]}px, ${e[1]}px)`:`${n}transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(0px, 0px)"},transformSeg(){if(this.active){const e=this.segments.segments;return e[0]===e[2]?`transform: scale(3, ${e[3]-e[1]})`:`transform: scale(${e[2]-e[0]}, 3)`}return"transform: scale(0, 0);"}},watch:{active(e){console.log(e),this.$nextTick(()=>{this.useTransition=e})}}};function _sfc_render$1(e,t,n,r,s,o){return openBlock(),createBlock(Transition,{name:"fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{class:normalizeClass(e.$style.root),style:normalizeStyle(o.transform)},[createBaseVNode("div",{class:normalizeClass(e.$style.seg),style:normalizeStyle(o.transformSeg)},null,6)],6),[[vShow,o.active]])]),_:1})}const cssModules$1={$style:style0$1},HighlightSeg=_export_sfc(_sfc_main$2,[["render",_sfc_render$1],["__cssModules",cssModules$1]]),root="_root_14orw_2",rect="_rect_14orw_13",style0={root,rect},_sfc_main$1={props:{meta:Object},computed:{active(){return this.meta.active},position(){if(this.active){const e=this.meta.rect;return`transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(-999px, 0px)"},dimension(){if(this.active){const e=this.meta.rect;return`transform: scale(${e[2]}, ${e[3]})`}return"transform: scale(0, 0)"}}};function _sfc_render(e,t,n,r,s,o){return openBlock(),createBlock(Transition,{name:"fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{class:normalizeClass(e.$style.root),style:normalizeStyle(o.position)},[createBaseVNode("div",{class:normalizeClass(e.$style.rect),style:normalizeStyle(o.dimension)},null,6)],6),[[vShow,o.active]])]),_:1})}const cssModules={$style:style0},HighlightEmptySlot=_export_sfc(_sfc_main$1,[["render",_sfc_render],["__cssModules",cssModules]]),_sfc_main={__name:"surface",setup(e){const n=inject("getSurface")(),{highlight_elem:r,targets:s,highlight_seg:o,highlight_empty_slot:i}=n,a=computed(()=>({position:"relative",left:0}));return(l,c)=>{var d,m,y,S;return openBlock(),createElementBlock("div",{style:normalizeStyle(a.value)},[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(s),x=>(openBlock(),createBlock(Wrapper,{x:x.position[0],y:x.position[1],active:!0},{default:withCtx(()=>[createVNode(Selector$1,{meta:x,isFocus:!0},null,8,["meta"])]),_:2},1032,["x","y"]))),256)),createVNode(HighlightEmptySlot,{meta:unref(i)},null,8,["meta"]),createVNode(Wrapper,{x:(m=(d=unref(r))==null?void 0:d.position)==null?void 0:m[0],y:(S=(y=unref(r))==null?void 0:y.position)==null?void 0:S[1],active:unref(r).active},{default:withCtx(()=>[createVNode(Selector$1,{meta:unref(r),isFocus:!1},null,8,["meta"])]),_:1},8,["x","y","active"]),createVNode(HighlightSeg,{segments:unref(o)},null,8,["segments"])],4)}}};function minXLeftCoord(e,t){let n=1/0;return rectanglesAtY(e,t).forEach(r=>{n=Math.min(n,r.left)}),n}function maxXRightCoord(e,t){let n=-1/0;return rectanglesAtY(e,t).forEach(r=>{n=Math.max(n,r.right)}),n}function rectanglesAtY(e,t){const n=rectsAtYExcBottomLines(e,t);return n.length>0?n:rectsAtYIncBottomLines(e,t)}function rectsAtYExcBottomLines(e,t){return t.filter(n=>n.top<=e&&n.bottom>e)}function rectsAtYIncBottomLines(e,t){return t.filter(n=>n.top<=e&&n.bottom==e)}function calcPolygonPath(e){const t=[],n=getAllYCoords(e);n.sort((o,i)=>o-i);let r=0,s=0;return n.forEach((o,i)=>{let a=minXLeftCoord(o,e),l=maxXRightCoord(o,e);i===0?(t.push(a,o),t.push(l,o)):(a!==r&&t.unshift(r,o),t.unshift(a,o),l!==s&&t.push(s,o),t.push(l,o)),r=a,s=l}),t}function getAllYCoords(e){const t=new Set;return e.forEach(n=>{t.add(n.bottom),t.add(n.top)}),Array.from(t)}class Surface extends EventTarget{constructor(n){super();B(this,"targets",reactive([]));B(this,"highlight_elem",reactive({type:void 0,active:!1,rects:[],polygonPath:[],viewbox:[],noTitle:!1,source:null}));B(this,"highlight_seg",reactive({active:!1,segments:[]}));B(this,"highlight_empty_slot",reactive({active:!1,rect:[]}));this.refreshIDE=n}apply(n,r){this.ide=n,this.render=new SurfaceRenderer(this,r),this.render.init(),n.addEventListener("zoompan",s=>{s.detail.zoom&&(this.highlight_elem.active&&Object.assign(this.highlight_elem,{...this.resolveRects(this.highlight_elem.rects)}),this.targets.forEach(o=>{Object.assign(o,{...this.resolveRects(o.rects)})}))})}refresh(n){const r=[...this.targets,this.highlight_elem];n.forEach(s=>{const o=r.find(i=>_isSameTarget(i.source,s.source));o&&Object.assign(o,this.resolveRects(s.rects))})}hasTarget(n){return this.targets.find(r=>_isSameTarget(r.source,n))}_targetExist(n){return!!this.targets.find(s=>_isSameTarget(s.source,n.source))}highlightElem(n){if(this._targetExist(n)){this.closeHighlightElem();return}_isSameTarget(this.highlight_elem.source,n.source)||Object.assign(this.highlight_elem,{noTitle:!1,...n,...this.resolveRects(n.rects),active:!0})}getFocusNodes(){return this.targets.map(n=>toRaw(n.source))}setFocus(n){if(!n){const s=this.targets.length;this.targets.splice(0,s);return}if(this._targetExist(n))return;this.closeHighlightElem();const r=this.targets.length;this.targets.splice(0,r,{...n,...this.resolveRects(n.rects),active:!0})}addFocus(n){this._targetExist(n)||this.targets.push({...n,...this.resolveRects(n.rects),active:!0})}closeHighlightElem(){this.highlight_elem.active&&Object.assign(this.highlight_elem,{active:!1,source:null})}resolveRects(n){const s=this.ide.scale;if(n.length===1){const{x:o,y:i,width:a,height:l}=n[0],c=[0,0,a*s,0,a*s,l*s,0,l*s];return{position:[o*s,i*s],polygonPath:c,viewbox:bounding_box(c)}}else{const o=[n[0].x,n[0].y];return transformPolygon(o,s,calcPolygonPath(n))}}highlightSeg(n,r){if(this.highlight_seg.active=n,n){const o=this.ide.scale;this.highlight_seg.segments[0]=r[0]*o,this.highlight_seg.segments[1]=r[1]*o,this.highlight_seg.segments[2]=r[2]*o,this.highlight_seg.segments[3]=r[3]*o}}highlightEmptySlot(n,r){if(this.highlight_empty_slot.active=n,n){const o=this.ide.scale;this.highlight_empty_slot.rect[0]=r[0]*o,this.highlight_empty_slot.rect[1]=r[1]*o,this.highlight_empty_slot.rect[2]=r[2]*o,this.highlight_empty_slot.rect[3]=r[3]*o}}async setHoverNode(n){const r=await this.ide.getElementInfoByNodePath(n);this.highlightElem({...r,noTitle:!0})}async setFocusNode(n){const r=await this.ide.getElementInfoByNodePath(n.nodePath);this.closeHighlightElem(),this.setFocus({source:n,rects:r.rects})}closeAll(){this.closeHighlightElem(),this.highlightSeg(!1),this.highlightEmptySlot(!1)}}class SurfaceRenderer{constructor(t,n){this.surface=t,this.dom=n}init(){createApp(this.renderFn()).mount(this.dom)}renderFn(){const t=this.surface;return{inheritAttrs:!1,setup(){return provide("getSurface",()=>t),provide("setHighlightNode",n=>{t.setHoverNode(n)}),provide("closeHighlightElem",()=>{t.closeHighlightElem()}),provide("setFocusNode",n=>{t.setFocusNode(toRaw(n))}),provide("dispatchEvent",()=>{t.dispatchEvent()}),()=>h(_sfc_main)}}}}function _isSameTarget(e,t){return toRaw(e)===toRaw(t)}function transformPolygon(e,t,n){const r=n.length;let s=0;for(;s<r;)n[s]=(n[s]-e[0])*t,n[s+1]=(n[s+1]-e[1])*t,s+=2;return{position:[e[0]*t,e[1]*t],polygonPath:n,viewbox:bounding_box(n)}}function bounding_box(e){if(e.length===0)return{width:0,height:0,x:0,y:0};let t=1/0,n=1/0,r=-1/0,s=-1/0,o=0;for(;o<e.length;){const i=e[o],a=e[o+1];i<t&&(t=i),i>r&&(r=i),a<n&&(n=a),a>s&&(s=a),o+=2}return{width:Math.max(r-t,10),height:Math.max(s-n,10),x:t,y:n}}class MessageCenter{constructor(){B(this,"proxies",new WeakMap)}registOrigin(t){const{origin:n,source:r}=t;if(!this.proxies.has(r.window))this.proxies.set(r.window,{postIframeMessage(s){r.postMessage(s,n)}});else{const s=this.proxies.get(r.window);Object.assign(s,{postIframeMessage(o){r.postMessage(o,n)}})}this._run(r.window)}registIDE(t,n){if(!this.proxies.has(n.contentWindow))this.proxies.set(n.contentWindow,{ide:t});else{const r=this.proxies.get(n.contentWindow);Object.assign(r,{ide:t})}this._run(n.contentWindow)}_run(t){const n=this.proxies.get(t);n.ide&&n.postIframeMessage&&(n.ide.init(n.postIframeMessage),n.ready=!0)}listen(){window.addEventListener("message",t=>{const n=t.data;n.type==="Event"&&n.name==="proxyReady"?this.registOrigin(t):this.distribute(t)})}distribute(t){const n=t.source;if(this.proxies.has(n.window)){const r=this.proxies.get(n.window);r.ready&&r.ide.onMessage(t)}}}const _m=new MessageCenter;_m.listen();function oneTripToPreview(e,t){let n=`oneTripToPreview-${oneTripToPreview.uuid++}`,r;const s=new Promise(i=>{r=i}),o=i=>{const a=i.data;a.uuid===n&&(r(a.response),window.removeEventListener("message",o))};return window.addEventListener("message",o),e({uuid:n,...t}),s}oneTripToPreview.uuid=0;class IDE extends EventTarget{constructor(n){super();B(this,"initialZoom",1);B(this,"padding",20);B(this,"maxZoom",2);B(this,"minZoom",.5);B(this,"deviceWidth",0);B(this,"deviceHeight","auto");B(this,"position",{x:0,y:0});B(this,"scale",1);B(this,"surface",null);B(this,"_registedMethods",new Map);B(this,"postIframeMessage",null);this.simulator=n.simulator,this.surface=n.surface,this.getSourceByNodePath=n.getSourceByNodePath,this.preRegistMethods()}$mount(n){const r=createViewport(),s=createViewContent(),o=createGroundAnchor(),i=createIframe();r.appendChild(s),r.appendChild(o),s.appendChild(i),this.domCache={viewport:r,viewcontent:s,groundAnchor:o,iframe:i},n.appendChild(r),i.addEventListener("load",()=>{console.log("onload!"),_m.registIDE(this,i)}),s.style.height=`${r.getBoundingClientRect().height}px`,this.simulator.load(i)}init(n){this.postIframeMessage=n;const r=a=>{console.log("resized!",this.simulator),this.domCache.viewcontent.style.height=`${a.scrollHeight}px`},o=(()=>{let a=[];return(l,c)=>{l==="wheel"&&a.length===3&&a.every(d=>d==="wheel")&&(console.log("onWheel"),this.onWheelInFrame(c)),a.unshift(l),a.length>3&&(a.length=3)}})().bind(this);this.onMessage=a=>{const l=a.data;if(l.type==="Event")switch(l.name){case"wheel":case"scroll":o(l.name,l.payload.eventMeta);break;case"dragstart":this.dispatchEvent(new CustomEvent("frame:dragstart",{detail:l.payload}));break;case"refreshBoundings":this.refreshBoundings(l.payload);break;case"mousemove":this.highlightNode(l.payload.elementInfo);break;case"dragover":this.dispatchEvent(new CustomEvent("frame:dragover",{detail:l.payload}));break;case"dragend":this.dispatchEvent(new CustomEvent("frame:dragend",{detail:l.payload}));break;case"hesitateWhenDragging":this.dispatchEvent(new CustomEvent("frame:hesitateWhenDragging",{detail:l.payload}));break;case"click":this._focusOnNode(l.payload);break;case"dblclick":this.dispatchEvent(new CustomEvent("frame:dblclick",{detail:l.payload}));break;case"contentchange":this.dispatchEvent(new CustomEvent("frame:contentChange",{detail:l.payload}));break;case"resizeObserver":r(l.payload);break}if(l.type==="Method"){const c=this._registedMethods.get(l.name);if(c){const d=l.uuid;c(m=>{n({type:"Response",result:"success",uuid:d,response:m},a.origin)},m=>{n({type:"Response",result:"failed",uuid:d,err:m},a.origin)},l.payload)}}};const i=this.domCache.viewport;i.addEventListener("mousemove",a=>{a.target===i&&this.surface.closeHighlightElem()}),i.addEventListener("click",a=>{a.target===i&&(this.surface.closeAll(),this.surface.setFocus())}),i.addEventListener("wheel",this.onWheelInViewport.bind(this),{passive:!1}),this.surface.apply(this,this.domCache.groundAnchor),this.dispatchEvent(new CustomEvent("ready",{detail:{target:this.iframe}}))}preRegistMethods(){}refreshBoundings(n){const r=n.elementInfos;r.forEach(s=>{s.source=this.getSourceByNodePath(s.target)}),this.surface.refresh(r)}highlightNode(n){const{target:r,rects:s}=n;if(r){const o=this.getSourceByNodePath(r);this.surface.highlightElem({source:o,rects:s})}else this.surface.closeHighlightElem()}closeHighlight(){this.surface.closeHighlightElem()}async highlightNodeByNodePath(n,r){const s=await this.getElementInfoByNodePath(n,r);this.highlightNode(s)}clearFocus(){this.surface.setFocus()}_focusOnNode(n){const{target:r,rects:s}=n.elementInfo,{shiftKey:o}=n.eventMeta;if(r){this.surface.closeHighlightElem();const i=this.getSourceByNodePath(r);o?this.surface.addFocus({source:i,rects:s}):this.surface.setFocus({source:i,rects:s})}else this.surface.setFocus()}_calculateToViewport(n,r){const s=this.scale,o=this.position;r[0]=n[0]*s+o.x,r[1]=n[1]*s+o.y}syncGroundAnchor(){const n=[0,0];this._calculateToViewport(n,n),this.domCache.groundAnchor.style.transform=`translate(${n[0]}px, ${n[1]}px)`}resolveEventOffsetToViewport(n){const{clientX:r,clientY:s}=n,o=[r,s];return this._calculateToViewport(o,o),o}onWheelInViewport(n){n.preventDefault();const[r,s]=this.resolveEventOffset(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,r,s)}onWheelInFrame(n){const[r,s]=this.resolveEventOffsetToViewport(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,r,s)}_onWheel(n,r,s,o,i){n?(s=-s,this.zoomHandler(o,i,s)):this.panHandler(-r,-s)}resolveEventOffset(n){const{clientX:r,clientY:s}=n,{x:o,y:i}=this.domCache.viewport.getBoundingClientRect();return[r-o,s-i]}zoomHandler(n,r,s){if(this._zooming)return;this._zooming=!0;const o=this.scale;let i=o;const a=s>0?1.05:1/1.05;i*=a,i=Math.min(this.maxZoom,Math.max(this.minZoom,i));const{x:l,y:c}=this.position,d=i/o,m=n-(n-l)*d,y=r-(r-c)*d;this.scale=i,Object.assign(this.position,{x:m,y}),this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!0}})),this._zooming=!1}panHandler(n,r){this._panning||(this._panning=!0,this.position.x+=n,this.position.y+=r,this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!1}})),this._panning=!1)}_resetTransform(){const{x:n,y:r}=this.position,s=this.scale,o=`matrix(${s}, 0, 0, ${s}, ${n}, ${r})`;this.domCache.viewcontent.style[transformAttr]=o,this.syncGroundAnchor()}_resolveEventOffsetInFrame(n){const{clientX:r,clientY:s}=n,{x:o,y:i}=this.position,a=this.scale,l=this.domCache.viewport.getBoundingClientRect();return[r*a+o+l.x,s*a+i+l.y]}async doDrag(n,r,s,o,i){this.postIframeMessage({type:"Event",name:"startDragging",payload:{nodePaths:r}});const a=document.importNode(n,!0);a.style.position="fixed",a.style["pointer-events"]="none",document.body.appendChild(a),s&&await s();const l=S=>{if(o.execute)return;o.execute=!0;const[x,I]=this._resolveEventOffsetInFrame(S.detail.eventMeta);a.style.left=`${x}px`,a.style.top=`${I}px`,o({elementInfo:S.detail.elementInfo,eventMeta:S.detail.eventMeta,inFrame:!0,notAllowed:S.detail.notAllowed},c)};function c(){o.execute=!1}const d=S=>{if(o.execute)return;o.execute=!0;const{clientX:x,clientY:I}=S;a.style.left=`${x}px`,a.style.top=`${I}px`,o({elementInfo:null,eventMeta:S,inFrame:!1,notAllowed:!0},c)},m=async S=>{a.remove(),this.removeEventListener("frame:dragend",m),this.removeEventListener("frame:dragover",l),this.removeEventListener("frame:hesitateWhenDragging",y),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",m),i&&await i(),this.postIframeMessage({type:"Event",name:"stopDragging"})},y=S=>{this.surface.closeAll()};this.addEventListener("frame:dragend",m),this.addEventListener("frame:dragover",l),this.addEventListener("frame:hesitateWhenDragging",y),document.addEventListener("mousemove",d),document.addEventListener("mouseup",m)}doEditContent(n){this.postIframeMessage({type:"Method",name:"editContent",payload:{nodePath:n}})}setCursorInFrame(n){this.postIframeMessage({type:"Method",name:"setCursor",payload:{cursor:n}})}doCallComponentMethod(n){const{nodePath:r,method:s,argus:o=[]}=n;this.postIframeMessage({type:"Method",name:"callComponentMethod",payload:{nodePath:r,method:s,argus:o}})}doSetRestrictArea(n){this.postIframeMessage({type:"Method",name:"setRestrictArea",payload:{selector:n}})}async getElementInfoByNodePath(n,r){return await oneTripToPreview(this.postIframeMessage,{type:"Method",name:"getElementInfoByNodePath",payload:{nodePath:n,selector:r}})}async getElementsInfoByNodePath(n){return await oneTripToPreview(this.postIframeMessage,{type:"Method",name:"getElementsInfoByNodePath",payload:{nodePaths:n}})}startObserveRootElem(n){this.postIframeMessage({type:"Method",name:"startObserveRootNodeSize",payload:{selector:n}})}setElementsTemporaryStyle(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryStyle",payload:n})}setElementsTemporaryAttribute(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryAttribute",payload:n})}makeDraggingElemMove(n){this.postIframeMessage({type:"Event",name:"makeDraggingElemMove",payload:n})}registMethod(n,r){const{isAsync:s,body:o}=r,i=s?async(a,l,...c)=>{if(!r.execute){i.execute=!0;try{const d=await o.call(this,...c);a(d)}catch(d){l(d)}finally{i.execute=!1}}}:async(a,l,...c)=>{if(!r.execute){i.execute=!0;try{const d=o.call(this,...c);a(d)}catch(d){l(d)}finally{i.execute=!1}}};this._registedMethods.set(n,i)}}function createViewport(){return makeElement({tag:"div",style:{position:"relative",left:0,top:0,width:"100%",height:"100%","user-select":"none",overflow:"hidden",background:"rgba(0,0,0,0.1)"}})}function createViewContent(){return makeElement({tag:"div",style:{position:"absolute",top:0,left:0,transformOrigin:"top left",width:"100%",overflow:"hidden",background:"#fff",userSelect:"none"}})}function createGroundAnchor(){return makeElement({tag:"div",style:{position:"absolute",left:0,top:0,width:0,height:0}})}function createIframe(){return makeElement({tag:"iframe",style:{width:"100%",height:"100%",border:"none"},attributes:{scrolling:"no"}})}let getNodeByNodePath;function setGetNodeByNodePathFunc(e){getNodeByNodePath=e}function _dropToAccept(e,t){return e.dropToAccept?e.dropToAccept(t):!0}const SEGMENT_STATEGY={[CONTAINER_DIRECTION.ROW]:{getSegs:BoxToSegmentsVertical,shiftHighlighter:shiftVerticalSegBy},[CONTAINER_DIRECTION.COLUMN]:{getSegs:BoxToSegmentsHorizontal,shiftHighlighter:shiftHorizontalSegBy},[CONTAINER_DIRECTION.AUTO]:{getSegs:BoxToSegmentsAuto,shiftHighlighter:shiftAutoSegBy}},LOC={PRE:"pre",AFTER:"after"};function batchAddChild(e,t){t.forEach(n=>{e.addChild(n)})}function batchInsertNodeBefore(e,t){let n=e;const r=e.parentNode,s=t.slice();for(;s.length;){const o=s.pop();r.insertNodeBefore(n,o),n=o}}function batchInsertNodeAfter(e,t){let n=e;const r=e.parentNode,s=t.slice();for(;s.length;){const o=s.shift();r.insertNodeAfter(n,o),n=o}}function removeKeys(e,t){const n={};return t.forEach(r=>{r in e&&delete e[r]}),n}function removePositionStyleFromNodeInsideAbsoluteLayout(e){var t;if((t=e.parentNode)!=null&&t.isAbsolute){const n=CSSInlineStyleToObject(e.staticStyle);removeKeys(n,["left","right","top","bottom"]),e.staticStyle=CSSToStaticStyle(n)}}function beforeDrop(e){e.forEach(t=>{removePositionStyleFromNodeInsideAbsoluteLayout(t)})}async function _prepareDrop(e,t,n,r,s,o){const i=!t||o.find(x=>t.dropable(x)&&_dropToAccept(x,t)),a=await e.getElementsInfoByNodePath(r);let{getSegs:l,shiftHighlighter:c}=SEGMENT_STATEGY[s],d=1/0,m,y,S;if(i&&r.forEach(x=>{a[x].rects.forEach(N=>{l(N,a[x]).forEach((D,O)=>{const w=distToSegmentVecSquared(n,D);w<d&&(d=w,m=D,y=x,S=O===0?LOC.PRE:LOC.AFTER)})})}),t&&!t.isModal){const x=t.nodePath,I=t.parentNode;if(o.find(j=>I.dropable(j)&&_dropToAccept(j,I))){const j=I.direction||CONTAINER_DIRECTION.AUTO,{getSegs:D,shiftHighlighter:O}=SEGMENT_STATEGY[j],w=await e.getElementInfoByNodePath(x),$=w.rects[0];D($,w).forEach((G,F)=>{const W=distToSegmentVecSquared(n,G);W<d&&(d=W,m=G,y=x,S=F===0?LOC.PRE:LOC.AFTER,c=O)})}}if(!m)throw"can not drop!";return c(m,S===LOC.PRE?1.5:-1.5),{nearestSeg:m,nodepath:y,loc:S}}const NotAllowedStrategy={dragover(e,t,n){t.nodePath="",t.loc="",e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()},drop(e,t,n,r){e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()}},EmptySlotStrategy=(e,t)=>({dragover(n,r,s){const o=s.elementInfo,i=getNodeByNodePath(o.target);if(!t.find(l=>i.dropable(l)&&_dropToAccept(l,i)))n.surface.highlightSeg(!1),n.surface.highlightEmptySlot(!1),n.highlightNodeByNodePath(o.target),n.setCursorInFrame("not-allowed");else{const l=BoxToRectangle(o.rects[0]);n.surface.highlightSeg(!1),n.surface.highlightEmptySlot(!0,l),n.highlightNodeByNodePath(o.target),r.nodePath=o.target,n.setCursorInFrame("copy")}},drop(n,r,s,o){const i=getNodeByNodePath(r.nodePath);i&&(r.outside?o((a=[])=>{batchAddChild(i,a)},i):(beforeDrop(s),batchAddChild(i,s),o())),n.surface.highlightSeg(!1),n.surface.highlightEmptySlot(!1),n.closeHighlight()}});function highlightContainer(e,t){t?t.isModal?e.highlightNodeByNodePath(t.nodePath,'[mainmodal="true"]'):e.highlightNodeByNodePath(t.nodePath):e.closeHighlight()}async function normalPreDrop(e,t,n,r,s,o,i){try{const{nearestSeg:a,nodepath:l,loc:c}=await _prepareDrop(e,t,r,s,o,i);console.log(l),e.surface.highlightSeg(!0,a),e.surface.highlightEmptySlot(!1),highlightContainer(e,t),n.nodePath=l,n.loc=c,e.setCursorInFrame("copy")}catch{e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),highlightContainer(e,t),n.nodePath="",n.loc="",e.setCursorInFrame("not-allowed")}}function normalInsertNodes(e,t,n){t===LOC.PRE?batchInsertNodeBefore(e,n):batchInsertNodeAfter(e,n)}const ViewRootDropStrategy=(e,t,n)=>({async dragover(r,s,o){const i=[o.eventMeta.clientX,o.eventMeta.clientY],a=e.elements.map(l=>l.nodePath);a.length>0&&await normalPreDrop(r,null,s,i,a,CONTAINER_DIRECTION.AUTO,n)},drop(r,s,o,i){const a=getNodeByNodePath(s.nodePath);a&&(s.outside?i((l=[])=>{normalInsertNodes(a,s.loc,l)},e):(beforeDrop(o),normalInsertNodes(a,s.loc,o),i())),r.surface.highlightSeg(!1),r.surface.highlightEmptySlot(!1),r.closeHighlight()}}),ContainerDropStrategy=(e,t,n)=>({async dragover(r,s,o){const i=[o.eventMeta.clientX,o.eventMeta.clientY],a=t.elements.filter(c=>!n.includes(c)).map(c=>c.nodePath),l=(t==null?void 0:t.direction)||CONTAINER_DIRECTION.AUTO;a.length>0&&await normalPreDrop(r,t,s,i,a,l,n)},drop(r,s,o,i){const a=getNodeByNodePath(s.nodePath);a&&(s.outside?i((l=[])=>{normalInsertNodes(a,s.loc,l)},a):(beforeDrop(o),normalInsertNodes(a,s.loc,o),i())),r.surface.highlightSeg(!1),r.surface.highlightEmptySlot(!1),r.closeHighlight()}}),AbsoluteDropStrategy=(e,t,n)=>({async dragover(r,s,o){n.find(a=>t.dropable(a)&&_dropToAccept(a,t))?(s.nodePath=t.nodePath,s.toCoord=[o.eventMeta.clientX,o.eventMeta.clientY],r.surface.highlightSeg(!1),r.surface.highlightEmptySlot(!1),r.setCursorInFrame("copy")):(s.nodePath="",s.loc="",r.surface.highlightSeg(!1),r.surface.highlightEmptySlot(!1),r.setCursorInFrame("not-allowed")),r.highlightNodeByNodePath(t.nodePath)},async drop(r,s,o,i){const a=getNodeByNodePath(s.nodePath);if(a){if(s.outside)i((l=[])=>{if(l[0]){const c=Object.assign({...CSSInlineStyleToObject(d.staticStyle),left:`${s.toCoord[0]-containerbox.x}px`,top:`${s.toCoord[1]-containerbox.y}px`}),d=l[0];d.staticStyle=CSSToStaticStyle(c),a.addChild(d)}},a);else{const l=s.movingNodeInfos,d=(await r.getElementInfoByNodePath(s.nodePath)).rects[0];o.forEach(m=>{if(m.parentNode===a){const y=s.toCoord[0]-s.fromCoord[0],S=s.toCoord[1]-s.fromCoord[1],x=l[m.nodePath];if(x){const I=x.rects[0],N=Object.assign({...CSSInlineStyleToObject(m.staticStyle),left:`${I.x-d.x+y}px`,top:`${I.y-d.y+S}px`});m.staticStyle=CSSToStaticStyle(N),m.updateComponentKey()}}else{removePositionStyleFromNodeInsideAbsoluteLayout(m);const y=Object.assign({...CSSInlineStyleToObject(m.staticStyle),left:`${s.toCoord[0]-d.x}px`,top:`${s.toCoord[1]-d.y}px`});a.addChild(m),m.staticStyle=CSSToStaticStyle(y)}}),i()}r.surface.highlightSeg(!1),r.surface.highlightEmptySlot(!1),r.closeHighlight()}}});function resolveContainerNode(e){var t;return e.isModal&&((t=e.source._cacheStatus)!=null&&t.open)||e.isContainer?e:e.parentNode}function chooseStrategy(e,t,n){var r;if(console.log(e),e.notAllowed)return NotAllowedStrategy;if(e.inFrame){const s=e.elementInfo;if(s!=null&&s.isEmptySlot)return EmptySlotStrategy(t,n);if(s!=null&&s.target){const o=getNodeByNodePath(s.target);if(o){const i=resolveContainerNode(o);return i.isRoot?ViewRootDropStrategy(t,i,n):i!=null&&i.isAbsolute?AbsoluteDropStrategy(t,i,n):ContainerDropStrategy(t,i,n)}}else return(r=e.elementInfo)!=null&&r.outOfRestrict?NotAllowedStrategy:ViewRootDropStrategy(t)}}function AbsoluteDragStartStrategy(e,t,n){return async(r,s,o)=>{const i=o.map(m=>m.nodePath);s.fromCoord=[n.clientX,n.clientY],s.fromNodePath=t.target,s.fromAbsolute=!0;const a=await r.getElementsInfoByNodePath(i);s.movingNodeInfos=a;const c=getNodeByNodePath(t.target).parentNode,d={nodePaths:[]};o.forEach(m=>{if(m.parentNode===c){const y=m.nodePath;d.nodePaths.push(y)}}),d.nodePaths.length>0&&r.makeDraggingElemMove(d)}}function dragStartStrategy(e,t,n){if(t!=null&&t.target){const r=getNodeByNodePath(t.target);if(r){const s=r.parentNode;if(s!=null&&s.isAbsolute)return AbsoluteDragStartStrategy(e,t,n)}}return null}class IdeModelManager{constructor(){B(this,"_root",null);B(this,"_rootCtor",null);B(this,"_elementCtor",null);B(this,"_schema",new Map)}attachSchema(t){for(let n in t)this._schema.get(n)||this._schema.set(n,t[n])}attachModel({createRoot:t,createElement:n}){this._createRoot=t,this._createElement=n}makeUIElement(t){const n=this._schema.get(t.tag);return this._createElement(t,n)}getRoot(){return this._root}genCode(t){return this._root.renderIDE()(t)}_iteratorCreate(t,n){const r=this._schema.get(t.tag),s=this._createElement(t,r);s.parentNode=n;const o=t.children;return o&&o.forEach(i=>{if(i.slotTarget){const a=r.slots.find(l=>l.name===l.slotTarget);s.elements.push(this._iteratorCreateTemplate(i,s,a))}else s.elements.push(this._iteratorCreate(i,s))}),s}_iteratorCreateTemplate(t,n,r){const s=this._createElement(t,r);s.parentNode=n;const o=t.children;return o&&o.forEach(i=>{s.elements.push(this._iteratorCreate(i,s))}),s}genModel(t){const n=this._createRoot(t);t.elements.forEach(r=>{const s=this._iteratorCreate(r,n);n.elements.push(s)}),this._root=n}getNodeByNodePath(t){const n=t.split(".");n.shift();let r=this._root.elements[n.shift()];for(;n.length;){const s=n.shift();r=r.elements[s]}return r}}function expressionResolver(expression,defaultValue){return function(...argus){try{const func=eval(`(target) => ${expression}`);return func.call(this,...argus)}catch(e){return console.error("expression: ",expression,"resolve failed!"),defaultValue}}}function ContainerDirection(e){const t=e.schema,n=e.result,r=t.containerDirection;let s=()=>"auto";typeof r=="string"&&(s=()=>r),typeof r=="object"&&r.expression&&(s=expressionResolver(r.expression,"row")),n.containerDirection=s}const noopTrue=()=>!0;function ElementSutando(e){const t=e.schema,n=e.result,r=t.elementSutando;r&&(n.elementSutando={condition:r.condition?expressionResolver(r.condition,!0):noopTrue,component:r.component||"EmptySlot"})}function DataSource(e){const t=e.schema,n=e.result,r=t==null?void 0:t.dataSource;if(r){n.dataSource={display:3},typeof r.display=="number"&&(n.dataSource.display=r.display),n.dataSource.loopElem=r.loopElem;const s=r.emptySlot;if(s){const o=s.accept;let i=()=>!0;typeof o=="string"&&(i=()=>o),typeof o=="object"&&o.expression&&(i=expressionResolver(o.expression,!1)),n.dataSource.emptySlot={condition:s.condition?expressionResolver(s.condition,!0):noopTrue,component:s.component||"EmptySlot",accept:i}}}}function Slots(e){const t=e.schema,n=e.result;t.slots&&t.slots.length>0&&(n.slots=t.slots.map(r=>({name:r.name,title:r.title,description:r.description,customSlot:r.customSlot})))}const PRIMARY=["string","boolean","number"];function isPrimary(e){return PRIMARY.includes(typeof e)}function ChildAccept(e){const t=e.schema,n=e.result,r=t.childAccept;let s=()=>!0;isPrimary(r)&&(s=()=>r),typeof r=="object"&&r.expression&&(s=expressionResolver(r.expression,!1)),n.childAccept=s}function ParentAccept(e){const t=e.schema,n=e.result,r=t.parentAccept;let s=()=>!0;isPrimary(r)&&(s=()=>r),typeof r=="object"&&r.expression&&(s=expressionResolver(r.expression,!1)),n.parentAccept=s}function Selector(e){const t=e.schema,n=e.result,r=t.selector;typeof r=="object"&&r.expression&&r.cssSelector&&(n.selector={expression:expressionResolver(r.expression,!1),cssSelector:r.cssSelector})}function BaseInfo(e){Object.assign(e.result,{name:e.schema.name,idetype:e.schema.idetype,lib:e.schema.lib})}function Editable(e){Object.assign(e.result,{editable:e.schema.editable})}function ModalSutando(e){e.result.modalSutando=e.schema.modalSutando}class ResolverChain{constructor(t){B(this,"_chain",[]);B(this,"_condition");this._condition=t}add(t){this._chain.push(t)}run(t){this._chain.forEach(n=>{n instanceof ResolverChain?n._condition&&n._condition(t)&&n.run(t):n(t)})}}const chain=new ResolverChain;chain.add(BaseInfo);const elementChain=new ResolverChain(e=>!e.result.idetype||e.result.idetype==="element"),containerChain=new ResolverChain(e=>e.result.idetype==="container"),modalChain=new ResolverChain(e=>e.result.idetype==="modal");chain.add(elementChain);chain.add(containerChain);chain.add(modalChain);elementChain.add(Editable);elementChain.add(ParentAccept);elementChain.add(ElementSutando);containerChain.add(ContainerDirection);containerChain.add(ElementSutando);containerChain.add(DataSource);containerChain.add(ChildAccept);containerChain.add(ParentAccept);containerChain.add(Selector);containerChain.add(Slots);modalChain.add(ChildAccept);modalChain.add(ParentAccept);modalChain.add(Selector);modalChain.add(Slots);modalChain.add(ModalSutando);function _resolver(e){const t={schema:e,result:{}};return chain.run(t),t.result}function resolverUsage(e){return e.reduce((t,n)=>{const r=_resolver(n.jsonSchema);return t[r.name]=r,t},{})}async function launch({domRoot:e,template:t,project:n,ViewModel:r,UIUsage:s,UIModel:o,Simulator:i,modules:a=[],updateElement:l}){const c=new IdeModelManager;c.attachModel(o);const d=resolverUsage(s);c.attachSchema(d),c.genModel(r);function m(D){return c.getNodeByNodePath(D)}window.getNodeByNodePath=m,window.ideModel=c,c.genCode(n);const y=new i(n);function S(){c.genCode(n),y.update()}function x(){c.genModel(r),S()}const I=new Surface(x),N=new IDE({simulator:y,surface:I,getSourceByNodePath(D){return m(D)}});function j(D,O,w,$=!1,K){N.clearFocus();const G={nodePath:"",loc:"",isEmptySlot:!1,fromAbsolute:!1,movingNodeInfos:[],fromCoord:[0,0],toCoord:[0,0],fromNodePath:null,outside:$};let F=null;const W=O.map(J=>J.nodePath),L=c.getRoot();setGetNodeByNodePathFunc(m),N.doDrag(D,W,async()=>{if(w){const{elementInfo:J,eventMeta:P}=w.detail,U=dragStartStrategy(L,J,P);U&&await U(N,G,O)}},async(J,P)=>{F=chooseStrategy(J,L,O),await F.dragover(N,G,J),P()},async()=>{await F.drop(N,G,O,(J,P)=>{$?K(J,P):x()}),N.setCursorInFrame("auto")})}return N.addEventListener("ready",()=>{N.startObserveRootElem("body")}),N.$mount(e),N.addEventListener("frame:dragstart",D=>{const O=D.detail.elementInfo.target,w=m(O),$=N.surface.hasTarget(w);let K=[w];$&&(K=N.surface.getFocusNodes()),K=K.filter(F=>F.draggable);const G=document.createElement("div");G.innerText=w.tag,j(G,K,D)}),N.addEventListener("frame:dblclick",D=>{const O=D.detail.elementInfo.target,w=m(O);w.supportEditContent&&N.doEditContent(O),w.source.tag==="Modal"&&(N.doCallComponentMethod({nodePath:O,method:"open"}),N.doSetRestrictArea(`[nodepath="${O}"][mainmodal]`),w.source._cacheStatus={open:!0},N.surface.highlightSeg(!1),N.surface.highlightEmptySlot(!1),N.closeHighlight(),N.clearFocus())}),N.addEventListener("frame:contentChange",D=>{const O=D.detail.elementInfo.target,w=m(O);if(w.supportEditContent){const $=D.detail.innerText;l(w,"content",$),S()}}),{dragDropBehavior:(D,O,w)=>{j(D,[O],void 0,!0,w)},ideModel:c,refresh:x}}async function launchReactAntd(){const e=new View(reactJSONData),t="hoc-antd",r=await(await fetch("/webcontainer-ide/ant-hoc/index.js")).text(),o=await(await fetch("/webcontainer-ide/ant-hoc/usage.json")).json(),a=await(await fetch("/webcontainer-ide/ant-hoc/style.css")).text(),l=new Project(files.files);l.mutateFile(`/node_modules/@internals/${t}/package.json`,JSON.stringify({name:t,main:"./index.js"}),{hidden:!0}),l.mutateFile(`/node_modules/@internals/${t}/index.js`,r,{hidden:!0}),l.mutateFile(`/node_modules/@internals/${t}/style.css`,a,{hidden:!0}),console.log(l.read()),l.mutateFile("/src/index.js",l.readFile("/src/index.js")+`import '@internals/${t}/style.css';`,{hidden:!0});const{dragDropBehavior:c,ideModel:d,refresh:m}=await launch({domRoot:document.querySelector("#react-app"),template:files,project:l,ViewModel:e,UIModel:ReactModel,UIUsage:o,Simulator:CodeSandBoxSimulator,updateElement(O,w,$){w==="content"&&(O.innerText=$)}}),y=document.getElementById("toJSON"),S=document.getElementById("jsoncontent");y.addEventListener("click",()=>{S.innerText=JSON.stringify(e.toJSON())});const x=document.getElementById("react-button");let I=0;x.addEventListener("mousedown",O=>{O.preventDefault(),O.stopPropagation();const w=new ViewElement({concept:"ViewElement",tag:"Button",innerText:"buttonX"+I++}),$=d.makeUIElement(w);c(x,$,K=>{K([$]),m()})});const N=document.getElementById("react-Flex");N.addEventListener("mousedown",O=>{O.preventDefault(),O.stopPropagation();const w=new ViewElement({concept:"ViewElement",tag:"Flex"}),$=d.makeUIElement(w);c(N,$,K=>{K([$]),m()})}),document.getElementById("react-table").addEventListener("mousedown",O=>{O.preventDefault(),O.stopPropagation();const w=new ViewElement({concept:"ViewElement",tag:"Table"}),$=d.makeUIElement(w);c(N,$,K=>{K([$]),m()})}),document.getElementById("react-Datasource").addEventListener("mousedown",O=>{O.preventDefault(),O.stopPropagation(),c(N,{concept:"DataSource"},(w,$)=>{$.tag==="Table"?($.source.setBindAttribute("dataSource",new BindAttribute({name:"dataSource",value:!0})),w(genTableFromDataSource().map(K=>d.makeUIElement(K)))):w([d.makeUIElement(genTableElementFromDataSource())]),m()})})}launchReactAntd();export{SandpackLogLevel as S,__extends as _,__awaiter as a,__generator as b,__assign as c,createError as d,createPackageJSON as e,addPackageJSONIfNeeded as f,__spreadArray as g,extractErrorDetails as h,invariant as i,nullthrows as n};
