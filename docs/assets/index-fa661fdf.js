var ei=Object.defineProperty;var ti=(e,t,n)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var N=(e,t,n)=>(ti(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();class ni extends EventTarget{constructor(t,n){super(),this.project=t,this.filePath=n}async load(t){this.iframe=t,await this.launch()}async launch(){this.dispatchEvent(new CustomEvent("simulator:ready"))}mutateContentInTemplateBeforeLoad(t){}async updateProject(){}}const si="modulepreload",oi=function(e){return"/webcontainer-ide/"+e},Us={},Nn=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=oi(r),r in Us)return;Us[r]=!0;const i=r.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const m=o[f];if(m.href===r&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":si,i||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),i)return new Promise((f,m)=>{c.addEventListener("load",f),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};var ri=/(%?)(%([sdjo]))/g;function ii(e,t){switch(t){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;const n=JSON.stringify(e);return n==="{}"||n==="[]"||/^\[object .+?\]$/.test(n)?e:n}}}function Wn(e,...t){if(t.length===0)return e;let n=0,s=e.replace(ri,(o,r,i,l)=>{const a=t[n],c=ii(a,l);return r?o:(n++,c)});return n<t.length&&(s+=` ${t.slice(n).join(" ")}`),s=s.replace(/%{2,2}/g,"%"),s}var li=2;function ai(e){if(!e.stack)return;const t=e.stack.split(`
`);t.splice(1,li),e.stack=t.join(`
`)}var ci=class extends Error{constructor(e,...t){super(e),this.message=e,this.name="Invariant Violation",this.message=Wn(e,...t),ai(this)}},$o=(e,t,...n)=>{if(!e)throw new ci(t,...n)};$o.as=(e,t,n,...s)=>{if(!t)throw e.prototype.name!=null?new e(Wn(n,s)):e(Wn(n,s))};var Kn=function(e,t){return Kn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])},Kn(e,t)};function ku(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Kn(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var ht=function(){return ht=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ht.apply(this,arguments)};function ui(e,t,n,s){function o(r){return r instanceof n?r:new n(function(i){i(r)})}return new(n||(n=Promise))(function(r,i){function l(f){try{c(s.next(f))}catch(m){i(m)}}function a(f){try{c(s.throw(f))}catch(m){i(m)}}function c(f){f.done?r(f.value):o(f.value).then(l,a)}c((s=s.apply(e,t||[])).next())})}function di(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,o,r,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(c){return function(f){return a([c,f])}}function a(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,o&&(r=c[0]&2?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(f){c=[6,f],o=0}finally{s=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Lu(e,t,n){if(n||arguments.length===2)for(var s=0,o=t.length,r;s<o;s++)(r||!(s in t))&&(r||(r=Array.prototype.slice.call(t,0,s)),r[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))}var fi=function(e){return"[sandpack-client]: ".concat(e)};function Dn(e,t){return t===void 0&&(t="Value is nullish"),$o(e!=null,fi(t)),e}var mi='"dependencies" was not specified - provide either a package.json or a "dependencies" value',Vs='"entry" was not specified - provide either a package.json with the "main" field or an "entry" value';function pi(e,t,n){return e===void 0&&(e={}),t===void 0&&(t={}),n===void 0&&(n="/index.js"),JSON.stringify({name:"sandpack-project",main:n,dependencies:e,devDependencies:t},null,2)}function Bu(e,t,n,s){var o,r,i=vi(e),l=i["/package.json"];if(!l)return Dn(t,mi),Dn(s,Vs),i["/package.json"]={code:pi(t,n,s)},i;if(l){var a=JSON.parse(l.code);Dn(!(!t&&!a.dependencies),Vs),t&&(a.dependencies=ht(ht({},(o=a.dependencies)!==null&&o!==void 0?o:{}),t??{})),n&&(a.devDependencies=ht(ht({},(r=a.devDependencies)!==null&&r!==void 0?r:{}),n??{})),s&&(a.main=s),i["/package.json"]={code:JSON.stringify(a,null,2)}}return i}function Fu(e){var t;if(e.title==="SyntaxError"){var n=e.title,s=e.path,o=e.message,r=e.line,i=e.column;return{title:n,path:s,message:o,line:r,column:i}}var l=hi((t=e.payload)===null||t===void 0?void 0:t.frames);if(!l)return{message:e.message};var a=yi(l),c=gi(l),f=bi(l._originalFileName,e.message,c,a);return{message:f,title:e.title,path:l._originalFileName,line:l._originalLineNumber,column:l._originalColumnNumber}}function hi(e){if(e)return e.find(function(t){return!!t._originalFileName})}function gi(e){return e?" (".concat(e._originalLineNumber,":").concat(e._originalColumnNumber,")"):""}function yi(e){var t=e._originalScriptCode[e._originalScriptCode.length-1],n=t.lineNumber.toString().length,s=2,o=3,r=s+n+o+e._originalColumnNumber;return e._originalScriptCode.reduce(function(i,l){var a=l.highlight?">":" ",c=l.lineNumber.toString().length===n?"".concat(l.lineNumber):" ".concat(l.lineNumber),f=l.highlight?`
`+" ".repeat(r)+"^":"";return i+`
`+a+" "+c+" | "+l.content+f},"")}function bi(e,t,n,s){return"".concat(e,": ").concat(t).concat(n,`
`).concat(s)}var vi=function(e){return typeof e=="string"?e.startsWith("/")?e:"/".concat(e):Array.isArray(e)?e.map(function(t){return t.startsWith("/")?t:"/".concat(t)}):typeof e=="object"&&e!==null?Object.entries(e).reduce(function(t,n){var s=n[0],o=n[1],r=s.startsWith("/")?s:"/".concat(s);return t[r]=o,t},{}):null},Hs;(function(e){e[e.None=0]="None",e[e.Error=10]="Error",e[e.Warning=20]="Warning",e[e.Info=30]="Info",e[e.Debug=40]="Debug"})(Hs||(Hs={}));function Ei(e,t,n){var s;return n===void 0&&(n={}),ui(this,void 0,void 0,function(){var o,r,i;return di(this,function(l){switch(l.label){case 0:switch(o=(s=t.template)!==null&&s!==void 0?s:"parcel",i=o,i){case"node":return[3,1];case"static":return[3,3]}return[3,5];case 1:return[4,Nn(()=>import("./index-eb3502f0.js"),["assets/index-eb3502f0.js","assets/base-80a1f760-a7ab5117.js","assets/consoleHook-cdbe54ab-6ecbdcbc.js"]).then(function(a){return a.SandpackNode})];case 2:return r=l.sent(),[3,7];case 3:return[4,Nn(()=>import("./index-ec7d9378-45469be7.js"),["assets/index-ec7d9378-45469be7.js","assets/consoleHook-cdbe54ab-6ecbdcbc.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackStatic})];case 4:return r=l.sent(),[3,7];case 5:return[4,Nn(()=>import("./index-e23b69b1.js"),["assets/index-e23b69b1.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackRuntime})];case 6:r=l.sent(),l.label=7;case 7:return[2,new r(e,t,n)]}})})}class Oo extends ni{constructor(){super(...arguments);N(this,"options",{showOpenInCodeSandbox:!1,showErrorScreen:!1,showLoadingScreen:!0})}async launch(){const n=await Ei(this.iframe,this.project,this.options);this.client=n,console.log(n)}mutateContentInTemplateBeforeLoad(n){this.project.files[this.filePath]={code:n}}async updateProject(n){this.project.files[this.filePath]={code:n},this.client.updateSandbox(this.project)}}const wi={files:{"/index.html":{code:`<!DOCTYPE html>
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
`}},environment:"vanilla"},_i="View",xi=[{concept:"ViewElement",tag:"Flex",bindAttrs:[{concept:"BindAttribute",name:"gap",value:"middle"}],children:[{concept:"ViewElement",tag:"Button",innerText:"button1"},{concept:"ViewElement",tag:"Button",innerText:"button2",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}]},{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"link"}]}]},{concept:"ViewElement",tag:"AbsoluteLayout",children:[{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}],staticStyle:"left: 20px; top: 20px;"}]}],Ti={concept:_i,elements:xi};let Ws=1,cs=class{constructor(t){N(this,"componentKey",0);N(this,"parentNode",null);N(this,"tag","");N(this,"isContainer",!1);N(this,"supportEditContent",!1);N(this,"draggable",!0);this.source=t,this.tag=t.tag,this.componentKey=Ws++}static accept(){return!0}get staticStyle(){return this.source.staticStyle}set staticStyle(t){this.source.staticStyle=t}get innerText(){return this.source.innerText}set innerText(t){this.source.innerText=t}get nodePath(){if(!this.parentNode)return"rootview";const t=this.parentNode,s=t.elements.findIndex(o=>o===this);return s===-1?null:`${t.nodePath}.${s}`}updateComponentKey(){this.componentKey=Ws++}getSiblings(){}renderIDE(t){throw"renderIDE need implementation!"}dropToAccept(t){return!0}};const ve={ROW:"row",COLUMN:"column",FREE:"free",AUTO:"auto"};class ko extends cs{constructor(n){super(n);N(this,"isRoot",!1);N(this,"isContainer",!0);N(this,"direction",ve.AUTO);N(this,"elements",[]);this.createSubElements(n)}dropable(n){return!0}createSubElements(n){throw"createSubElements need implementation!"}insertNodeBefore(n,s){const o=s.source;o.delete();const r=this.source.getViewElementIdx(n.source);r!==-1&&this.source.insertViewElementAt(o,r)}insertNodeAfter(n,s){const o=s.source;o.delete();const r=this.source.getViewElementIdx(n.source);r!==-1&&this.source.insertViewElementAt(o,r+1)}addChild(n){const s=n.source;s.delete(),this.source.addViewElement(s)}renderIDE(n){throw"renderIDE need implementation!"}}function qe(e,t){const n=t.split(".");n.shift();let s=e.elements[n.shift()];for(;n.length;){const o=n.shift();s=s.elements[o]}return s}function Ks(e){return e*e}function Rn(e,t){return Ks(e[0]-t[0])+Ks(e[1]-t[1])}function zs(e,t){const n=t.slice(0,2),s=t.slice(2,4),o=Rn(n,s);if(o===0)return Rn(e,n);let r=((e[0]-n[0])*(s[0]-n[0])+(e[1]-n[1])*(s[1]-n[1]))/o;return r=Math.max(0,Math.min(1,r)),Rn(e,[n[0]+r*(s[0]-n[0]),n[1]+r*(s[1]-n[1])])}function Lo(e){return[[e.left,e.top,e.right,e.top],[e.left,e.bottom,e.right,e.bottom]]}function Bo(e){return[[e.left,e.top,e.left,e.bottom],[e.right,e.top,e.right,e.bottom]]}function Fo(e,t){return e[0]+=t,e[2]+=t,e}function jo(e,t){return e[1]+=t,e[3]+=t,e}function Ai(e,t){return e[0]===e[2]?Fo(e,t):jo(e,t)}function Ii(e,t){var n;return(n=t.elemStyle)!=null&&n.inline?Bo(e):Lo(e)}function Pi(e){return[e.x,e.y,e.width,e.height]}function an(e=""){return e.split(";").map(n=>n.split(":")).reduce((n,s)=>{if(s.length===2){let[o,r]=s;o=o.trim().replace(/-./g,i=>i.toUpperCase()[1]),n[o]=r.trim()}return n},{})}function zn(e={}){let t="";for(const[n,s]of Object.entries(e))t+=`${n}:${s};`;return t}function Ci(e){const t=an(e);try{return JSON.stringify(t)}catch{return""}}class Uo extends cs{renderIDE(t){t.add(this.tag);let n=`
    <${this.tag} 
        key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${ds(this.source.bindAttrs)}
        ${fs(this.source.staticStyle)}>`;return this.innerText&&(n+=this.innerText),n+=`</${this.tag}>
`,n}}class us extends ko{createSubElements(t){let n;t.concept==="View"&&(n=t.elements),t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(ki(this)))}renderIDE(t){t.add(this.tag);let n=`
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${ds(this.source.bindAttrs)}
        ${fs(this.source.staticStyle)}>`;return this.elements.length>0?this.elements.forEach(s=>{n+=s.renderIDE(t)}):n+="<EmptySlot />",n+=`</${this.tag}>
`,n}}const Si=["Button"];let Mi=class extends Uo{constructor(){super(...arguments);N(this,"supportEditContent",!0)}static accept(n){return Si.includes(n.tag)}},Ni=class extends us{constructor(){super(...arguments);N(this,"isRoot",!0)}renderIDE(){const n=new Set;let s="";this.elements.forEach(i=>{s+=i.renderIDE(n)});let o="";return n.size>0&&(o="import { ",o+=Array.from(n).join(","),o+='} from "antd";'),`
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
`}};class Di extends us{static accept(t){return t.tag==="Flex"}constructor(t){super(t),this.direction=ve.ROW,t.bindAttrs.find(n=>n.name==="vertical"&&n.value==="true")&&(this.direction=ve.COLUMN)}}let Ri=class extends us{constructor(){super(...arguments);N(this,"isAbsolute",!0)}static accept(n){return n.tag==="AbsoluteLayout"}renderIDE(n){let s=`
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        className="absoluteLayout" 
        ${ds(this.source.bindAttrs)}
        ${fs(this.source.staticStyle)}>`;return this.elements.length>0&&this.elements.forEach(o=>{s+=o.renderIDE(n)}),s+=`</div>
`,s}};function ds(e){return e&&e.length>0?e.map(t=>`${t.name}="${t.value}"`).join(" "):""}function fs(e){if(e&&e.trim()){const t=Ci(e.trim());if(t)return` style={${t}} `}return""}const $i=[Ri,Di,Mi,Uo];function Vo(e){const t=$i.find(n=>n.accept(e));return new t(e)}function Oi(e){return new Ni(e)}function ki(e){return t=>{const n=Vo(t);return n.parentNode=e,n}}const Ot={makeUIElement:Vo,makeRootUIElement:Oi};class ms{constructor(t){N(this,"concept","");Object.assign(this,t),this.concept=t.concept,this.tag=t.tag}}class Li extends ms{constructor(n){super(n);N(this,"elements",[]);n.elements&&(this.elements=n.elements.map(s=>{const o=new ct(s);return o.parentNode=this,o.parentKey="elements",o}))}addViewElement(n){n.delete(),this.elements.push(n),n.parentNode=this}insertViewElementAt(n,s){n.delete(),this.elements.splice(s,0,n),n.parentNode=this}removeViewElement(n){const s=this.elements.findIndex(o=>o===n);s!==-1&&(this.elements.splice(s,1),n.parentNode=void 0)}getViewElementIdx(n){return this.elements.findIndex(s=>s===n)}}class ct extends ms{constructor(n){super(n);N(this,"tag");N(this,"staticStyle");N(this,"staticClass");N(this,"innerText");N(this,"bindAttrs",[]);N(this,"children",[]);this.tag=n.tag,this.staticStyle=n.staticStyle,this.staticClass=n.staticClass,this.innerText=n.innerText,n.children&&(this.children=n.children.map(s=>{const o=new ct(s);return o.parentNode=this,o.parentKey="children",o})),n.bindAttrs&&(this.bindAttrs=n.bindAttrs.map(s=>{const o=new ji(s);return o.parentNode=this,o.parentKey="bindAttrs",o}))}addViewElement(n){n.delete(),this.children.push(n),n.parentNode=this}insertViewElementAt(n,s){n.delete(),this.children.splice(s,0,n),n.parentNode=this}removeViewElement(n){const s=this.children.findIndex(o=>o===n);s!==-1&&(this.children.splice(s,1),n.parentNode=void 0)}delete(){this.parentNode&&this.parentNode.removeViewElement(this)}getViewElementIdx(n){return this.children.findIndex(s=>s===n)}}function Bi(e){return e.name}function Fi(e){return`${Yn(e.object)}.${Yn(e.property)}`}function Yn(e){return e.object?Fi(e):Bi(e)}class ji extends ms{constructor(n){super(n);N(this,"name","");N(this,"value","");this.name=n.name,this.value=n.value,n.expression&&(this.value=Yn(n.expression))}}const Ui={files:{"/index.html":{code:`<!DOCTYPE html>
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
`}},environment:"vanilla"},Vi="View",Hi=[{concept:"ViewElement",tag:"u-linear-layout",children:[{concept:"ViewElement",tag:"u-button",bindAttrs:[{concept:"BindAttribute",name:"text",value:"Button1"}]}]},{concept:"ViewElement",tag:"AbsoluteLayout",children:[{concept:"ViewElement",tag:"u-button",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"},{concept:"BindAttribute",name:"text",value:"Button2"}],staticStyle:"left: 20px; top: 20px;"}]},{concept:"ViewElement",type:0,tag:"u-table-view",name:"tableView",bindAttrs:[{concept:"BindAttribute",name:"data-source",type:"dynamic",value:"",expression:{concept:"Identifier",name:"load",label:"",folded:!1},rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"value-field",type:"string",value:"lCAPUserRoleMapping.id",rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"show-total",type:"static",value:"true",rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"pageable",type:"string",value:"",rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"remote-paging",type:"static",value:"true",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-table-view-column",name:"uTableViewColumn1",bindAttrs:[{concept:"BindAttribute",name:"type",type:"string",value:"index",rules:[],model:!1,sync:!1,playground:[]},{concept:"BindAttribute",name:"width",type:"string",value:"60",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",tag:"template",name:"template6",slotTarget:"title",slotScope:"",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",tag:"u-text",name:"text1",bindAttrs:[{concept:"BindAttribute",name:"text",type:"string",value:"序号",rules:[],playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]},{concept:"ViewElement",type:0,tag:"u-table-view-column",name:"uTableViewColumn2",bindAttrs:[{concept:"BindAttribute",name:"type",type:"string",value:"expander",rules:[],playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"template",name:"template4",slotTarget:"cell",slotScope:"current",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-linear-layout",name:"uLinearLayout4",bindAttrs:[{concept:"BindAttribute",name:"gap",type:"string",value:"small",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-text",name:"uText2",bindAttrs:[{concept:"BindAttribute",name:"text",type:"dynamic",value:"",expression:{concept:"MemberExpression",object:{concept:"MemberExpression",object:{concept:"MemberExpression",object:{concept:"Identifier",name:"current",label:"",folded:!1},property:{concept:"Identifier",name:"item",label:"",folded:!1},label:"",folded:!1,name:""},property:{concept:"Identifier",name:"lCAPUserRoleMapping",label:"",folded:!1},label:"",folded:!1,name:""},property:{concept:"Identifier",name:"userName",label:"",folded:!1},label:"",folded:!1,name:""},rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]},{concept:"ViewElement",tag:"template",name:"template7",slotTarget:"title",slotScope:"",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",tag:"u-text",name:"text2",bindAttrs:[{concept:"BindAttribute",name:"text",type:"string",value:"用户名",rules:[],playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]},{concept:"ViewElement",type:0,tag:"u-table-view-column",name:"uTableViewColumn3",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"template",name:"template5",slotTarget:"cell",slotScope:"current",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-linear-layout",name:"uLinearLayout5",bindAttrs:[{concept:"BindAttribute",name:"gap",type:"string",value:"small",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",type:0,tag:"u-link",name:"uLink1",bindAttrs:[{concept:"BindAttribute",name:"text",type:"string",value:"移除 ",rules:[],model:!1,sync:!1,playground:[]}],bindEvents:[{concept:"BindEvent",name:"click",logics:[{concept:"Logic",name:"remove",typeParams:null,params:[],returns:[],variables:[],body:[{concept:"Start",label:"开始",folded:!1,name:""},{uuid:"f639b13331354c5b82c034355e590564",concept:"CallLogic",label:"调用逻辑",calleeNamespace:"app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics",calleeName:"delete",typeArguments:null,arguments:[{concept:"Argument",keyword:"id",expression:{concept:"MemberExpression",object:{concept:"MemberExpression",object:{concept:"MemberExpression",object:{concept:"Identifier",name:"current",label:"",folded:!1},property:{concept:"Identifier",name:"item",label:"",folded:!1},label:"",folded:!1,name:""},property:{concept:"Identifier",name:"lCAPUserRoleMapping",label:"",folded:!1},label:"",folded:!1,name:""},property:{concept:"Identifier",name:"id",label:"",folded:!1},label:"",folded:!1,name:""},folded:!1,name:""}],folded:!1,name:""},{uuid:"7998aba64d1d49abb58f392dba7cdb20",concept:"CallLogic",label:"调用逻辑",calleeNamespace:"elements.tableView.logics",calleeName:"reload",typeArguments:null,arguments:[],folded:!1,name:""},{uuid:"7d210e3bc12a4bc28dcd80ab2a02e312",concept:"CallLogic",label:"弹出消息",calleeNamespace:"nasl.ui",calleeName:"showMessage",shortcut:!0,typeArguments:null,arguments:[{concept:"Argument",keyword:"text",expression:{concept:"StringLiteral",value:"移除成功！",label:"",folded:!1,name:""},folded:!1,name:""}],folded:!1,name:""},{concept:"End",label:"结束",folded:!1,name:""}],playground:[]}],arguments:[]}],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]},{concept:"ViewElement",tag:"template",name:"template8",slotTarget:"title",slotScope:"",bindAttrs:[],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[{concept:"ViewElement",tag:"u-text",name:"text3",bindAttrs:[{concept:"BindAttribute",name:"text",type:"string",value:"操作",rules:[],playground:[]}],bindEvents:[],bindDirectives:[],bindRoles:[],bindStyles:[],children:[]}]}]}]}],Wi={concept:Vi,elements:Hi};class Ho extends cs{renderIDE(){let t=`
    <${this.tag} 
        key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${At(this.source.bindAttrs)}
        ${Yt(this.source.staticStyle)}>`;return t+=`</${this.tag}>
`,t}}class Tt extends ko{createSubElements(t){let n;t.concept==="View"&&(n=t.elements),t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(ps(this)))}renderIDE(){let t=`
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${At(this.source.bindAttrs)}
        ${Yt(this.source.staticStyle)}>`;return this.elements.length>0?this.elements.forEach(n=>{t+=n.renderIDE()}):t+="<EmptySlot />",t+=`</${this.tag}>
`,t}}const Ki=["u-button"];class zi extends Ho{constructor(){super(...arguments);N(this,"supportEditContent",!0)}static accept(n){return Ki.includes(n.tag)}}class Yi extends Tt{constructor(){super(...arguments);N(this,"isRoot",!0)}renderIDE(){let n="";return this.elements.forEach(o=>{n+=o.renderIDE()}),`
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
                `}}class Xi extends Tt{static accept(t){return t.tag==="u-linear-layout"}constructor(t){super(t),this.direction=ve.ROW,t.bindAttrs.find(n=>n.name==="direction"&&n.value==="vertical")&&(this.direction=ve.COLUMN)}}class qi extends Tt{constructor(){super(...arguments);N(this,"isAbsolute",!0)}static accept(n){return n.tag==="AbsoluteLayout"}renderIDE(){let n=`
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        class="absoluteLayout" 
        ${At(this.source.bindAttrs)}
        ${Yt(this.source.staticStyle)}>`;return this.elements.length>0&&this.elements.forEach(s=>{n+=s.renderIDE()}),n+=`</div>
`,n}}class Ji extends Tt{constructor(){super(...arguments);N(this,"direction",ve.ROW)}static accept(n){return n.tag==="u-table-view"}dropable(n){return n.tag==="u-table-view-column"}createSubElements(n){let s;n.concept==="ViewElement"&&(s=n.children),s&&(this.elements=s.map(ps(this)))}renderIDE(){let n=`
    <u-table-view class="designer-table" key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        :data-source="[{}, {}, {}]"
        ${At(this.source.bindAttrs,["data-source","value-field"])}
        ${Yt(this.source.staticStyle)}>`;return this.elements.length>0&&this.elements.forEach(s=>{n+=s.renderIDE()}),n+=`</u-table-view>
`,n}}class Zi extends Tt{static accept(t){return t.tag==="u-table-view-column"}dropToAccept(t){return t.tag==="u-table-view"}dropable(t){return!1}createSubElements(t){let n;t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(s=>{const o=new Gi(s);return o.parentNode=this,o}))}renderIDE(){let t=`
    <u-table-view-column key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${At(this.source.bindAttrs)}
        ${Yt(this.source.staticStyle)}>`;return this.elements.forEach(n=>{t+=n.renderIDE()}),t+=`</u-table-view-column>
`,t}}class Gi extends Tt{constructor(){super(...arguments);N(this,"draggable",!1)}createSubElements(n){let s;n.concept==="ViewElement"&&(s=n.children),s&&(this.elements=s.map(ps(this)))}renderIDE(){console.log(this.source);let s=["title"].includes(this.source.slotTarget)?`<HoistNodePath nodePath="${this.parentNode.nodePath}" topSelector="${this.source.slotTarget==="title"?"th":"td"}"></HoistNodePath>`:"",o=`
    <template #${this.source.slotTarget}="${this.source.slotScope}"
        ${At(this.source.bindAttrs)}>
        <div nodepath="${this.nodePath}" ide-draggable="false">
        ${s}
        `;return this.elements.length===0?o+="<EmptySlot/>":this.elements.forEach(r=>{o+=r.renderIDE()}),o+=`</div></template>
`,o}}function At(e,t=[]){return e&&e.length>0?e.filter(n=>!t.includes(n.name)).map(n=>`${n.name}="${n.value}"`).join(" "):""}function Yt(e){return e&&e.trim()?` style="${e.trim()}" `:""}const Qi=[qi,Xi,Ji,Zi,zi,Ho];function Wo(e){const t=Qi.find(n=>n.accept(e));return new t(e)}function el(e){return new Yi(e)}function ps(e){return t=>{const n=Wo(t);return n.parentNode=e,n}}const tl={makeUIElement:Wo,makeRootUIElement:el},nl=("transform"in document.documentElement.style?"transform":void 0)||("-webkit-transform"in document.documentElement.style?"-webkit-transform":void 0)||("-moz-transform"in document.documentElement.style?"-moz-transform":void 0)||("-ms-transform"in document.documentElement.style?"-ms-transform":void 0)||("-o-transform"in document.documentElement.style?"-o-transform":void 0),hn=function(e={}){let t,n;const s=e.tag,o=document.createElement(s);if(s==="style")return o.type="text/css",o.styleSheet?o.styleSheet.cssText=e.cssText:o.appendChild(document.createTextNode(e.cssText)),o;if(e.attributes)for(t in e.attributes)n=e.attributes[t],o.setAttribute(t,n);if(e.style)for(t in e.style)n=e.style[t],o.style[t]=n;if(e.data)for(t in e.data)n=e.data[t],o.dataset[t]=n;return e.className&&e.className.forEach(r=>{console.log(r),o.classList.add(r)}),e.textContent!==void 0&&(o.textContent=e.textContent),e.childNodes&&[].concat(e.childNodes).forEach(r=>{o.appendChild(r)}),o};function hs(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const q={},gt=[],Ie=()=>{},sl=()=>!1,ol=/^on[^a-z]/,gn=e=>ol.test(e),gs=e=>e.startsWith("onUpdate:"),oe=Object.assign,ys=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rl=Object.prototype.hasOwnProperty,U=(e,t)=>rl.call(e,t),R=Array.isArray,yt=e=>bn(e)==="[object Map]",Ko=e=>bn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",yn=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",zo=e=>(J(e)||L(e))&&L(e.then)&&L(e.catch),Yo=Object.prototype.toString,bn=e=>Yo.call(e),il=e=>bn(e).slice(8,-1),Xo=e=>bn(e)==="[object Object]",bs=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rn=hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ll=/-(\w)/g,Et=vn(e=>e.replace(ll,(t,n)=>n?n.toUpperCase():"")),al=/\B([A-Z])/g,It=vn(e=>e.replace(al,"-$1").toLowerCase()),qo=vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),$n=vn(e=>e?`on${qo(e)}`:""),wt=(e,t)=>!Object.is(e,t),On=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},cl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ul=e=>{const t=ee(e)?Number(e):NaN;return isNaN(t)?e:t};let Ys;const Xn=()=>Ys||(Ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function De(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=ee(s)?pl(s):De(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(ee(e)||J(e))return e}const dl=/;(?![^(]*\))/g,fl=/:([^]+)/,ml=/\/\*[^]*?\*\//g;function pl(e){const t={};return e.replace(ml,"").split(dl).forEach(n=>{if(n){const s=n.split(fl);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Re(e){let t="";if(ee(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const s=Re(e[n]);s&&(t+=s+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gl=hs(hl);function Jo(e){return!!e||e===""}const yl=e=>ee(e)?e:e==null?"":R(e)||J(e)&&(e.toString===Yo||!L(e.toString))?JSON.stringify(e,Zo,2):String(e),Zo=(e,t)=>t&&t.__v_isRef?Zo(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:Ko(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!R(t)&&!Xo(t)?String(t):t;let xe;class bl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function vl(e,t=xe){t&&t.active&&t.effects.push(e)}function El(){return xe}const vs=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Go=e=>(e.w&Ye)>0,Qo=e=>(e.n&Ye)>0,wl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ye},_l=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];Go(o)&&!Qo(o)?o.delete(e):t[n++]=o,o.w&=~Ye,o.n&=~Ye}t.length=n}},qn=new WeakMap;let Rt=0,Ye=1;const Jn=30;let Te;const lt=Symbol(""),Zn=Symbol("");class Es{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vl(this,s)}run(){if(!this.active)return this.fn();let t=Te,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,Ke=!0,Ye=1<<++Rt,Rt<=Jn?wl(this):Xs(this),this.fn()}finally{Rt<=Jn&&_l(this),Ye=1<<--Rt,Te=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(Xs(this),this.onStop&&this.onStop(),this.active=!1)}}function Xs(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const er=[];function Pt(){er.push(Ke),Ke=!1}function Ct(){const e=er.pop();Ke=e===void 0?!0:e}function pe(e,t,n){if(Ke&&Te){let s=qn.get(e);s||qn.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=vs()),tr(o)}}function tr(e,t){let n=!1;Rt<=Jn?Qo(e)||(e.n|=Ye,n=!Go(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Le(e,t,n,s,o,r){const i=qn.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&R(e)){const a=Number(s);i.forEach((c,f)=>{(f==="length"||!yn(f)&&f>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":R(e)?bs(n)&&l.push(i.get("length")):(l.push(i.get(lt)),yt(e)&&l.push(i.get(Zn)));break;case"delete":R(e)||(l.push(i.get(lt)),yt(e)&&l.push(i.get(Zn)));break;case"set":yt(e)&&l.push(i.get(lt));break}if(l.length===1)l[0]&&Gn(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Gn(vs(a))}}function Gn(e,t){const n=R(e)?e:[...e];for(const s of n)s.computed&&qs(s);for(const s of n)s.computed||qs(s)}function qs(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const xl=hs("__proto__,__v_isRef,__isVue"),nr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yn)),Js=Tl();function Tl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=V(this);for(let r=0,i=this.length;r<i;r++)pe(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(V)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pt();const s=V(this)[t].apply(this,n);return Ct(),s}}),e}function Al(e){const t=V(this);return pe(t,"has",e),t.hasOwnProperty(e)}class sr{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,s){const o=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&s===(o?r?Bl:lr:r?ir:rr).get(t))return t;const i=R(t);if(!o){if(i&&U(Js,n))return Reflect.get(Js,n,s);if(n==="hasOwnProperty")return Al}const l=Reflect.get(t,n,s);return(yn(n)?nr.has(n):xl(n))||(o||pe(t,"get",n),r)?l:de(l)?i&&bs(n)?l:l.value:J(l)?o?ar(l):rt(l):l}}class or extends sr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(Ut(r)&&de(r)&&!de(s))return!1;if(!this._shallow&&(!Qn(s)&&!Ut(s)&&(r=V(r),s=V(s)),!R(t)&&de(r)&&!de(s)))return r.value=s,!0;const i=R(t)&&bs(n)?Number(n)<t.length:U(t,n),l=Reflect.set(t,n,s,o);return t===V(o)&&(i?wt(s,r)&&Le(t,"set",n,s):Le(t,"add",n,s)),l}deleteProperty(t,n){const s=U(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Le(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!yn(n)||!nr.has(n))&&pe(t,"has",n),s}ownKeys(t){return pe(t,"iterate",R(t)?"length":lt),Reflect.ownKeys(t)}}class Il extends sr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Pl=new or,Cl=new Il,Sl=new or(!0),ws=e=>e,En=e=>Reflect.getPrototypeOf(e);function Zt(e,t,n=!1,s=!1){e=e.__v_raw;const o=V(e),r=V(t);n||(wt(t,r)&&pe(o,"get",t),pe(o,"get",r));const{has:i}=En(o),l=s?ws:n?As:Ts;if(i.call(o,t))return l(e.get(t));if(i.call(o,r))return l(e.get(r));e!==o&&e.get(t)}function Gt(e,t=!1){const n=this.__v_raw,s=V(n),o=V(e);return t||(wt(e,o)&&pe(s,"has",e),pe(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Qt(e,t=!1){return e=e.__v_raw,!t&&pe(V(e),"iterate",lt),Reflect.get(e,"size",e)}function Zs(e){e=V(e);const t=V(this);return En(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function Gs(e,t){t=V(t);const n=V(this),{has:s,get:o}=En(n);let r=s.call(n,e);r||(e=V(e),r=s.call(n,e));const i=o.call(n,e);return n.set(e,t),r?wt(t,i)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function Qs(e){const t=V(this),{has:n,get:s}=En(t);let o=n.call(t,e);o||(e=V(e),o=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return o&&Le(t,"delete",e,void 0),r}function eo(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function en(e,t){return function(s,o){const r=this,i=r.__v_raw,l=V(i),a=t?ws:e?As:Ts;return!e&&pe(l,"iterate",lt),i.forEach((c,f)=>s.call(o,a(c),a(f),r))}}function tn(e,t,n){return function(...s){const o=this.__v_raw,r=V(o),i=yt(r),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=o[e](...s),f=n?ws:t?As:Ts;return!t&&pe(r,"iterate",a?Zn:lt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:l?[f(m[0]),f(m[1])]:f(m),done:h}},[Symbol.iterator](){return this}}}}function je(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ml(){const e={get(r){return Zt(this,r)},get size(){return Qt(this)},has:Gt,add:Zs,set:Gs,delete:Qs,clear:eo,forEach:en(!1,!1)},t={get(r){return Zt(this,r,!1,!0)},get size(){return Qt(this)},has:Gt,add:Zs,set:Gs,delete:Qs,clear:eo,forEach:en(!1,!0)},n={get(r){return Zt(this,r,!0)},get size(){return Qt(this,!0)},has(r){return Gt.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:en(!0,!1)},s={get(r){return Zt(this,r,!0,!0)},get size(){return Qt(this,!0)},has(r){return Gt.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:en(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=tn(r,!1,!1),n[r]=tn(r,!0,!1),t[r]=tn(r,!1,!0),s[r]=tn(r,!0,!0)}),[e,n,t,s]}const[Nl,Dl,Rl,$l]=Ml();function _s(e,t){const n=t?e?$l:Rl:e?Dl:Nl;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(U(n,o)&&o in s?n:s,o,r)}const Ol={get:_s(!1,!1)},kl={get:_s(!1,!0)},Ll={get:_s(!0,!1)},rr=new WeakMap,ir=new WeakMap,lr=new WeakMap,Bl=new WeakMap;function Fl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jl(e){return e.__v_skip||!Object.isExtensible(e)?0:Fl(il(e))}function rt(e){return Ut(e)?e:xs(e,!1,Pl,Ol,rr)}function Ul(e){return xs(e,!1,Sl,kl,ir)}function ar(e){return xs(e,!0,Cl,Ll,lr)}function xs(e,t,n,s,o){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const i=jl(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return o.set(e,l),l}function bt(e){return Ut(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function Qn(e){return!!(e&&e.__v_isShallow)}function cr(e){return bt(e)||Ut(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function ur(e){return cn(e,"__v_skip",!0),e}const Ts=e=>J(e)?rt(e):e,As=e=>J(e)?ar(e):e;function Vl(e){Ke&&Te&&(e=V(e),tr(e.dep||(e.dep=vs())))}function Hl(e,t){e=V(e);const n=e.dep;n&&Gn(n)}function de(e){return!!(e&&e.__v_isRef===!0)}function Oe(e){return de(e)?e.value:e}const Wl={get:(e,t,n)=>Oe(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return de(o)&&!de(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function dr(e){return bt(e)?e:new Proxy(e,Wl)}class Kl{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Es(t,()=>{this._dirty||(this._dirty=!0,Hl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=V(this);return Vl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function zl(e,t,n=!1){let s,o;const r=L(e);return r?(s=e,o=Ie):(s=e.get,o=e.set),new Kl(s,o,r||!o,n)}function ze(e,t,n,s){let o;try{o=s?e(...s):e()}catch(r){wn(r,t,n)}return o}function Ee(e,t,n,s){if(L(e)){const r=ze(e,t,n,s);return r&&zo(r)&&r.catch(i=>{wn(i,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(Ee(e[r],t,n,s));return o}function wn(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,i,l)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){ze(a,null,10,[e,i,l]);return}}Yl(e,n,o,s)}function Yl(e,t,n,s=!0){console.error(e)}let Vt=!1,es=!1;const ae=[];let Ne=0;const vt=[];let ke=null,nt=0;const fr=Promise.resolve();let Is=null;function Xl(e){const t=Is||fr;return e?t.then(this?e.bind(this):e):t}function ql(e){let t=Ne+1,n=ae.length;for(;t<n;){const s=t+n>>>1,o=ae[s],r=Ht(o);r<e||r===e&&o.pre?t=s+1:n=s}return t}function Ps(e){(!ae.length||!ae.includes(e,Vt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ae.push(e):ae.splice(ql(e.id),0,e),mr())}function mr(){!Vt&&!es&&(es=!0,Is=fr.then(hr))}function Jl(e){const t=ae.indexOf(e);t>Ne&&ae.splice(t,1)}function Zl(e){R(e)?vt.push(...e):(!ke||!ke.includes(e,e.allowRecurse?nt+1:nt))&&vt.push(e),mr()}function to(e,t=Vt?Ne+1:0){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function pr(e){if(vt.length){const t=[...new Set(vt)];if(vt.length=0,ke){ke.push(...t);return}for(ke=t,ke.sort((n,s)=>Ht(n)-Ht(s)),nt=0;nt<ke.length;nt++)ke[nt]();ke=null,nt=0}}const Ht=e=>e.id==null?1/0:e.id,Gl=(e,t)=>{const n=Ht(e)-Ht(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function hr(e){es=!1,Vt=!0,ae.sort(Gl);const t=Ie;try{for(Ne=0;Ne<ae.length;Ne++){const n=ae[Ne];n&&n.active!==!1&&ze(n,null,14)}}finally{Ne=0,ae.length=0,pr(),Vt=!1,Is=null,(ae.length||vt.length)&&hr()}}function Ql(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||q;let o=n;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in s){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:m,trim:h}=s[f]||q;h&&(o=n.map(x=>ee(x)?x.trim():x)),m&&(o=n.map(cl))}let l,a=s[l=$n(t)]||s[l=$n(Et(t))];!a&&r&&(a=s[l=$n(It(t))]),a&&Ee(a,e,6,o);const c=s[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ee(c,e,6,o)}}function gr(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},l=!1;if(!L(e)){const a=c=>{const f=gr(c,t,!0);f&&(l=!0,oe(i,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(J(e)&&s.set(e,null),null):(R(r)?r.forEach(a=>i[a]=null):oe(i,r),J(e)&&s.set(e,i),i)}function _n(e,t){return!e||!gn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,It(t))||U(e,t))}let ce=null,yr=null;function un(e){const t=ce;return ce=e,yr=e&&e.type.__scopeId||null,t}function _t(e,t=ce,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&mo(-1);const r=un(t);let i;try{i=e(...o)}finally{un(r),s._d&&mo(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function kn(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:r,propsOptions:[i],slots:l,attrs:a,emit:c,render:f,renderCache:m,data:h,setupState:x,ctx:M,inheritAttrs:_}=e;let j,$;const k=un(e);try{if(n.shapeFlag&4){const I=o||s,H=I;j=Me(f.call(H,I,m,r,x,h,M)),$=a}else{const I=t;j=Me(I.length>1?I(r,{attrs:a,slots:l,emit:c}):I(r,null)),$=t.props?a:ea(a)}}catch(I){Ft.length=0,wn(I,e,1),j=se(we)}let B=j;if($&&_!==!1){const I=Object.keys($),{shapeFlag:H}=B;I.length&&H&7&&(i&&I.some(gs)&&($=ta($,i)),B=Xe(B,$))}return n.dirs&&(B=Xe(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),j=B,un(k),j}const ea=e=>{let t;for(const n in e)(n==="class"||n==="style"||gn(n))&&((t||(t={}))[n]=e[n]);return t},ta=(e,t)=>{const n={};for(const s in e)(!gs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function na(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:l,patchFlag:a}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?no(s,i,c):!!i;if(a&8){const f=t.dynamicProps;for(let m=0;m<f.length;m++){const h=f[m];if(i[h]!==s[h]&&!_n(c,h))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?no(s,i,c):!0:!!i;return!1}function no(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!_n(n,r))return!0}return!1}function sa({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const oa=Symbol.for("v-ndc"),ra=e=>e.__isSuspense;function ia(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Zl(e)}const nn={};function Ln(e,t,n){return br(e,t,n)}function br(e,t,{immediate:n,deep:s,flush:o,onTrack:r,onTrigger:i}=q){var l;const a=El()===((l=ie)==null?void 0:l.scope)?ie:null;let c,f=!1,m=!1;if(de(e)?(c=()=>e.value,f=Qn(e)):bt(e)?(c=()=>e,s=!0):R(e)?(m=!0,f=e.some(I=>bt(I)||Qn(I)),c=()=>e.map(I=>{if(de(I))return I.value;if(bt(I))return it(I);if(L(I))return ze(I,a,2)})):L(e)?t?c=()=>ze(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ee(e,a,3,[x])}:c=Ie,t&&s){const I=c;c=()=>it(I())}let h,x=I=>{h=k.onStop=()=>{ze(I,a,4),h=k.onStop=void 0}},M;if(Kt)if(x=Ie,t?n&&Ee(t,a,3,[c(),m?[]:void 0,x]):c(),o==="sync"){const I=nc();M=I.__watcherHandles||(I.__watcherHandles=[])}else return Ie;let _=m?new Array(e.length).fill(nn):nn;const j=()=>{if(k.active)if(t){const I=k.run();(s||f||(m?I.some((H,re)=>wt(H,_[re])):wt(I,_)))&&(h&&h(),Ee(t,a,3,[I,_===nn?void 0:m&&_[0]===nn?[]:_,x]),_=I)}else k.run()};j.allowRecurse=!!t;let $;o==="sync"?$=j:o==="post"?$=()=>fe(j,a&&a.suspense):(j.pre=!0,a&&(j.id=a.uid),$=()=>Ps(j));const k=new Es(c,$);t?n?j():_=k.run():o==="post"?fe(k.run.bind(k),a&&a.suspense):k.run();const B=()=>{k.stop(),a&&a.scope&&ys(a.scope.effects,k)};return M&&M.push(B),B}function la(e,t,n){const s=this.proxy,o=ee(e)?e.includes(".")?vr(s,e):()=>s[e]:e.bind(s,s);let r;L(t)?r=t:(r=t.handler,n=t);const i=ie;xt(this);const l=br(o,r.bind(s),n);return i?xt(i):at(),l}function vr(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function it(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))it(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)it(e[n],t);else if(Ko(e)||yt(e))e.forEach(n=>{it(n,t)});else if(Xo(e))for(const n in e)it(e[n],t);return e}function Cs(e,t){const n=ce;if(n===null)return e;const s=Pn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,l,a,c=q]=t[r];i&&(L(i)&&(i={mounted:i,updated:i}),i.deep&&it(l),o.push({dir:i,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ge(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];r&&(l.oldValue=r[i].value);let a=l.dir[s];a&&(Pt(),Ee(a,n,8,[e.el,l,e,t]),Ct())}}const He=Symbol("_leaveCb"),sn=Symbol("_enterCb");function aa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tr(()=>{e.isMounted=!0}),Ar(()=>{e.isUnmounting=!0}),e}const ye=[Function,Array],Er={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},ca={name:"BaseTransition",props:Er,setup(e,{slots:t}){const n=qa(),s=aa();let o;return()=>{const r=t.default&&_r(t.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const _ of r)if(_.type!==we){i=_;break}}const l=V(e),{mode:a}=l;if(s.isLeaving)return Bn(i);const c=so(i);if(!c)return Bn(i);const f=ts(c,l,s,n);ns(c,f);const m=n.subTree,h=m&&so(m);let x=!1;const{getTransitionKey:M}=c.type;if(M){const _=M();o===void 0?o=_:_!==o&&(o=_,x=!0)}if(h&&h.type!==we&&(!st(c,h)||x)){const _=ts(h,l,s,n);if(ns(h,_),a==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Bn(i);a==="in-out"&&c.type!==we&&(_.delayLeave=(j,$,k)=>{const B=wr(s,h);B[String(h.key)]=h,j[He]=()=>{$(),j[He]=void 0,delete f.delayedLeave},f.delayedLeave=k})}return i}}},ua=ca;function wr(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ts(e,t,n,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:m,onLeave:h,onAfterLeave:x,onLeaveCancelled:M,onBeforeAppear:_,onAppear:j,onAfterAppear:$,onAppearCancelled:k}=t,B=String(e.key),I=wr(n,e),H=(D,W)=>{D&&Ee(D,s,9,W)},re=(D,W)=>{const K=W[1];H(D,W),R(D)?D.every(le=>le.length<=1)&&K():D.length<=1&&K()},te={mode:r,persisted:i,beforeEnter(D){let W=l;if(!n.isMounted)if(o)W=_||l;else return;D[He]&&D[He](!0);const K=I[B];K&&st(e,K)&&K.el[He]&&K.el[He](),H(W,[D])},enter(D){let W=a,K=c,le=f;if(!n.isMounted)if(o)W=j||a,K=$||c,le=k||f;else return;let P=!1;const Z=D[sn]=he=>{P||(P=!0,he?H(le,[D]):H(K,[D]),te.delayedLeave&&te.delayedLeave(),D[sn]=void 0)};W?re(W,[D,Z]):Z()},leave(D,W){const K=String(e.key);if(D[sn]&&D[sn](!0),n.isUnmounting)return W();H(m,[D]);let le=!1;const P=D[He]=Z=>{le||(le=!0,W(),Z?H(M,[D]):H(x,[D]),D[He]=void 0,I[K]===e&&delete I[K])};I[K]=e,h?re(h,[D,P]):P()},clone(D){return ts(D,t,n,s)}};return te}function Bn(e){if(xn(e))return e=Xe(e),e.children=null,e}function so(e){return xn(e)?e.children?e.children[0]:void 0:e}function ns(e,t){e.shapeFlag&6&&e.component?ns(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _r(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===me?(i.patchFlag&128&&o++,s=s.concat(_r(i.children,t,l))):(t||i.type!==we)&&s.push(l!=null?Xe(i,{key:l}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const kt=e=>!!e.type.__asyncLoader,xn=e=>e.type.__isKeepAlive;function da(e,t){xr(e,"a",t)}function fa(e,t){xr(e,"da",t)}function xr(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Tn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)xn(o.parent.vnode)&&ma(s,t,n,o),o=o.parent}}function ma(e,t,n,s){const o=Tn(t,e,s,!0);Ir(()=>{ys(s[t],o)},n)}function Tn(e,t,n=ie,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Pt(),xt(n);const l=Ee(t,n,e,i);return at(),Ct(),l});return s?o.unshift(r):o.push(r),r}}const Fe=e=>(t,n=ie)=>(!Kt||e==="sp")&&Tn(e,(...s)=>t(...s),n),pa=Fe("bm"),Tr=Fe("m"),ha=Fe("bu"),ga=Fe("u"),Ar=Fe("bum"),Ir=Fe("um"),ya=Fe("sp"),ba=Fe("rtg"),va=Fe("rtc");function Ea(e,t=ie){Tn("ec",e,t)}function wa(e,t,n,s){let o;const r=n&&n[s];if(R(e)||ee(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,r&&r[i])}else if(J(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>t(i,l,void 0,r&&r[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];o[l]=t(e[c],c,l,r&&r[l])}}else o=[];return n&&(n[s]=o),o}function _a(e,t,n={},s,o){if(ce.isCE||ce.parent&&kt(ce.parent)&&ce.parent.isCE)return t!=="default"&&(n.name=t),se("slot",n,s&&s());let r=e[t];r&&r._c&&(r._d=!1),be();const i=r&&Pr(r(n)),l=ut(me,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Pr(e){return e.some(t=>mn(t)?!(t.type===we||t.type===me&&!Pr(t.children)):!0)?e:null}const ss=e=>e?jr(e)?Pn(e)||e.proxy:ss(e.parent):null,Lt=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ss(e.parent),$root:e=>ss(e.root),$emit:e=>e.emit,$options:e=>Ss(e),$forceUpdate:e=>e.f||(e.f=()=>Ps(e.update)),$nextTick:e=>e.n||(e.n=Xl.bind(e.proxy)),$watch:e=>la.bind(e)}),Fn=(e,t)=>e!==q&&!e.__isScriptSetup&&U(e,t),xa={get({_:e},t){const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const x=i[t];if(x!==void 0)switch(x){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Fn(s,t))return i[t]=1,s[t];if(o!==q&&U(o,t))return i[t]=2,o[t];if((c=e.propsOptions[0])&&U(c,t))return i[t]=3,r[t];if(n!==q&&U(n,t))return i[t]=4,n[t];os&&(i[t]=0)}}const f=Lt[t];let m,h;if(f)return t==="$attrs"&&pe(e,"get",t),f(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==q&&U(n,t))return i[t]=4,n[t];if(h=a.config.globalProperties,U(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Fn(o,t)?(o[t]=n,!0):s!==q&&U(s,t)?(s[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let l;return!!n[i]||e!==q&&U(e,i)||Fn(t,i)||(l=r[0])&&U(l,i)||U(s,i)||U(Lt,i)||U(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function oo(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let os=!0;function Ta(e){const t=Ss(e),n=e.proxy,s=e.ctx;os=!1,t.beforeCreate&&ro(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:l,provide:a,inject:c,created:f,beforeMount:m,mounted:h,beforeUpdate:x,updated:M,activated:_,deactivated:j,beforeDestroy:$,beforeUnmount:k,destroyed:B,unmounted:I,render:H,renderTracked:re,renderTriggered:te,errorCaptured:D,serverPrefetch:W,expose:K,inheritAttrs:le,components:P,directives:Z,filters:he}=t;if(c&&Aa(c,s,null),i)for(const G in i){const Y=i[G];L(Y)&&(s[G]=Y.bind(n))}if(o){const G=o.call(n,n);J(G)&&(e.data=rt(G))}if(os=!0,r)for(const G in r){const Y=r[G],Je=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Ie,qt=!L(Y)&&L(Y.set)?Y.set.bind(n):Ie,Ze=Vr({get:Je,set:qt});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Pe=>Ze.value=Pe})}if(l)for(const G in l)Cr(l[G],s,n,G);if(a){const G=L(a)?a.call(n):a;Reflect.ownKeys(G).forEach(Y=>{Mr(Y,G[Y])})}f&&ro(f,e,"c");function ne(G,Y){R(Y)?Y.forEach(Je=>G(Je.bind(n))):Y&&G(Y.bind(n))}if(ne(pa,m),ne(Tr,h),ne(ha,x),ne(ga,M),ne(da,_),ne(fa,j),ne(Ea,D),ne(va,re),ne(ba,te),ne(Ar,k),ne(Ir,I),ne(ya,W),R(K))if(K.length){const G=e.exposed||(e.exposed={});K.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:Je=>n[Y]=Je})})}else e.exposed||(e.exposed={});H&&e.render===Ie&&(e.render=H),le!=null&&(e.inheritAttrs=le),P&&(e.components=P),Z&&(e.directives=Z)}function Aa(e,t,n=Ie){R(e)&&(e=rs(e));for(const s in e){const o=e[s];let r;J(o)?"default"in o?r=Bt(o.from||s,o.default,!0):r=Bt(o.from||s):r=Bt(o),de(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function ro(e,t,n){Ee(R(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cr(e,t,n,s){const o=s.includes(".")?vr(n,s):()=>n[s];if(ee(e)){const r=t[e];L(r)&&Ln(o,r)}else if(L(e))Ln(o,e.bind(n));else if(J(e))if(R(e))e.forEach(r=>Cr(r,t,n,s));else{const r=L(e.handler)?e.handler.bind(n):t[e.handler];L(r)&&Ln(o,r,e)}}function Ss(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let a;return l?a=l:!o.length&&!n&&!s?a=t:(a={},o.length&&o.forEach(c=>dn(a,c,i,!0)),dn(a,t,i)),J(t)&&r.set(t,a),a}function dn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&dn(e,r,n,!0),o&&o.forEach(i=>dn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Ia[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Ia={data:io,props:lo,emits:lo,methods:$t,computed:$t,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:$t,directives:$t,watch:Ca,provide:io,inject:Pa};function io(e,t){return t?e?function(){return oe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Pa(e,t){return $t(rs(e),rs(t))}function rs(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function $t(e,t){return e?oe(Object.create(null),e,t):t}function lo(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:oe(Object.create(null),oo(e),oo(t??{})):t}function Ca(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const s in t)n[s]=ue(e[s],t[s]);return n}function Sr(){return{app:null,config:{isNativeTag:sl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sa=0;function Ma(e,t){return function(s,o=null){L(s)||(s=oe({},s)),o!=null&&!J(o)&&(o=null);const r=Sr(),i=new WeakSet;let l=!1;const a=r.app={_uid:Sa++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:sc,get config(){return r.config},set config(c){},use(c,...f){return i.has(c)||(c&&L(c.install)?(i.add(c),c.install(a,...f)):L(c)&&(i.add(c),c(a,...f))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,f){return f?(r.components[c]=f,a):r.components[c]},directive(c,f){return f?(r.directives[c]=f,a):r.directives[c]},mount(c,f,m){if(!l){const h=se(s,o);return h.appContext=r,f&&t?t(h,c):e(h,c,m),l=!0,a._container=c,c.__vue_app__=a,Pn(h.component)||h.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,f){return r.provides[c]=f,a},runWithContext(c){fn=a;try{return c()}finally{fn=null}}};return a}}let fn=null;function Mr(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function Bt(e,t,n=!1){const s=ie||ce;if(s||fn){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:fn._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&L(t)?t.call(s&&s.proxy):t}}function Na(e,t,n,s=!1){const o={},r={};cn(r,In,1),e.propsDefaults=Object.create(null),Nr(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Ul(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Da(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,l=V(o),[a]=e.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let m=0;m<f.length;m++){let h=f[m];if(_n(e.emitsOptions,h))continue;const x=t[h];if(a)if(U(r,h))x!==r[h]&&(r[h]=x,c=!0);else{const M=Et(h);o[M]=is(a,l,M,x,e,!1)}else x!==r[h]&&(r[h]=x,c=!0)}}}else{Nr(e,t,o,r)&&(c=!0);let f;for(const m in l)(!t||!U(t,m)&&((f=It(m))===m||!U(t,f)))&&(a?n&&(n[m]!==void 0||n[f]!==void 0)&&(o[m]=is(a,l,m,void 0,e,!0)):delete o[m]);if(r!==l)for(const m in r)(!t||!U(t,m))&&(delete r[m],c=!0)}c&&Le(e,"set","$attrs")}function Nr(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(rn(a))continue;const c=t[a];let f;o&&U(o,f=Et(a))?!r||!r.includes(f)?n[f]=c:(l||(l={}))[f]=c:_n(e.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,i=!0)}if(r){const a=V(n),c=l||q;for(let f=0;f<r.length;f++){const m=r[f];n[m]=is(o,a,m,c[m],e,!U(c,m))}}return i}function is(e,t,n,s,o,r){const i=e[n];if(i!=null){const l=U(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&L(a)){const{propsDefaults:c}=o;n in c?s=c[n]:(xt(o),s=c[n]=a.call(null,t),at())}else s=a}i[0]&&(r&&!l?s=!1:i[1]&&(s===""||s===It(n))&&(s=!0))}return s}function Dr(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},l=[];let a=!1;if(!L(e)){const f=m=>{a=!0;const[h,x]=Dr(m,t,!0);oe(i,h),x&&l.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!a)return J(e)&&s.set(e,gt),gt;if(R(r))for(let f=0;f<r.length;f++){const m=Et(r[f]);ao(m)&&(i[m]=q)}else if(r)for(const f in r){const m=Et(f);if(ao(m)){const h=r[f],x=i[m]=R(h)||L(h)?{type:h}:oe({},h);if(x){const M=fo(Boolean,x.type),_=fo(String,x.type);x[0]=M>-1,x[1]=_<0||M<_,(M>-1||U(x,"default"))&&l.push(m)}}}const c=[i,l];return J(e)&&s.set(e,c),c}function ao(e){return e[0]!=="$"}function co(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function uo(e,t){return co(e)===co(t)}function fo(e,t){return R(t)?t.findIndex(n=>uo(n,e)):L(t)&&uo(t,e)?0:-1}const Rr=e=>e[0]==="_"||e==="$stable",Ms=e=>R(e)?e.map(Me):[Me(e)],Ra=(e,t,n)=>{if(t._n)return t;const s=_t((...o)=>Ms(t(...o)),n);return s._c=!1,s},$r=(e,t,n)=>{const s=e._ctx;for(const o in e){if(Rr(o))continue;const r=e[o];if(L(r))t[o]=Ra(o,r,s);else if(r!=null){const i=Ms(r);t[o]=()=>i}}},Or=(e,t)=>{const n=Ms(t);e.slots.default=()=>n},$a=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),cn(t,"_",n)):$r(t,e.slots={})}else e.slots={},t&&Or(e,t);cn(e.slots,In,1)},Oa=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=q;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(oe(o,t),!n&&l===1&&delete o._):(r=!t.$stable,$r(t,o)),i=t}else t&&(Or(e,t),i={default:1});if(r)for(const l in o)!Rr(l)&&i[l]==null&&delete o[l]};function ls(e,t,n,s,o=!1){if(R(e)){e.forEach((h,x)=>ls(h,t&&(R(t)?t[x]:t),n,s,o));return}if(kt(s)&&!o)return;const r=s.shapeFlag&4?Pn(s.component)||s.component.proxy:s.el,i=o?null:r,{i:l,r:a}=e,c=t&&t.r,f=l.refs===q?l.refs={}:l.refs,m=l.setupState;if(c!=null&&c!==a&&(ee(c)?(f[c]=null,U(m,c)&&(m[c]=null)):de(c)&&(c.value=null)),L(a))ze(a,l,12,[i,f]);else{const h=ee(a),x=de(a);if(h||x){const M=()=>{if(e.f){const _=h?U(m,a)?m[a]:f[a]:a.value;o?R(_)&&ys(_,r):R(_)?_.includes(r)||_.push(r):h?(f[a]=[r],U(m,a)&&(m[a]=f[a])):(a.value=[r],e.k&&(f[e.k]=a.value))}else h?(f[a]=i,U(m,a)&&(m[a]=i)):x&&(a.value=i,e.k&&(f[e.k]=i))};i?(M.id=-1,fe(M,n)):M()}}}const fe=ia;function ka(e){return La(e)}function La(e,t){const n=Xn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:l,createComment:a,setText:c,setElementText:f,parentNode:m,nextSibling:h,setScopeId:x=Ie,insertStaticContent:M}=e,_=(u,d,p,g=null,y=null,E=null,T=!1,v=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!st(u,d)&&(g=Jt(u),Pe(u,y,E,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:C,shapeFlag:A}=d;switch(b){case An:j(u,d,p,g);break;case we:$(u,d,p,g);break;case jn:u==null&&k(d,p,g,T);break;case me:P(u,d,p,g,y,E,T,v,w);break;default:A&1?H(u,d,p,g,y,E,T,v,w):A&6?Z(u,d,p,g,y,E,T,v,w):(A&64||A&128)&&b.process(u,d,p,g,y,E,T,v,w,dt)}C!=null&&y&&ls(C,u&&u.ref,E,d||u,!d)},j=(u,d,p,g)=>{if(u==null)s(d.el=l(d.children),p,g);else{const y=d.el=u.el;d.children!==u.children&&c(y,d.children)}},$=(u,d,p,g)=>{u==null?s(d.el=a(d.children||""),p,g):d.el=u.el},k=(u,d,p,g)=>{[u.el,u.anchor]=M(u.children,d,p,g,u.el,u.anchor)},B=({el:u,anchor:d},p,g)=>{let y;for(;u&&u!==d;)y=h(u),s(u,p,g),u=y;s(d,p,g)},I=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),o(u),u=p;o(d)},H=(u,d,p,g,y,E,T,v,w)=>{T=T||d.type==="svg",u==null?re(d,p,g,y,E,T,v,w):W(u,d,y,E,T,v,w)},re=(u,d,p,g,y,E,T,v)=>{let w,b;const{type:C,props:A,shapeFlag:S,transition:O,dirs:F}=u;if(w=u.el=i(u.type,E,A&&A.is,A),S&8?f(w,u.children):S&16&&D(u.children,w,null,g,y,E&&C!=="foreignObject",T,v),F&&Ge(u,null,g,"created"),te(w,u,u.scopeId,T,g),A){for(const z in A)z!=="value"&&!rn(z)&&r(w,z,null,A[z],E,u.children,g,y,$e);"value"in A&&r(w,"value",null,A.value),(b=A.onVnodeBeforeMount)&&Se(b,g,u)}F&&Ge(u,null,g,"beforeMount");const X=Ba(y,O);X&&O.beforeEnter(w),s(w,d,p),((b=A&&A.onVnodeMounted)||X||F)&&fe(()=>{b&&Se(b,g,u),X&&O.enter(w),F&&Ge(u,null,g,"mounted")},y)},te=(u,d,p,g,y)=>{if(p&&x(u,p),g)for(let E=0;E<g.length;E++)x(u,g[E]);if(y){let E=y.subTree;if(d===E){const T=y.vnode;te(u,T,T.scopeId,T.slotScopeIds,y.parent)}}},D=(u,d,p,g,y,E,T,v,w=0)=>{for(let b=w;b<u.length;b++){const C=u[b]=v?We(u[b]):Me(u[b]);_(null,C,d,p,g,y,E,T,v)}},W=(u,d,p,g,y,E,T)=>{const v=d.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:C}=d;w|=u.patchFlag&16;const A=u.props||q,S=d.props||q;let O;p&&Qe(p,!1),(O=S.onVnodeBeforeUpdate)&&Se(O,p,d,u),C&&Ge(d,u,p,"beforeUpdate"),p&&Qe(p,!0);const F=y&&d.type!=="foreignObject";if(b?K(u.dynamicChildren,b,v,p,g,F,E):T||Y(u,d,v,null,p,g,F,E,!1),w>0){if(w&16)le(v,d,A,S,p,g,y);else if(w&2&&A.class!==S.class&&r(v,"class",null,S.class,y),w&4&&r(v,"style",A.style,S.style,y),w&8){const X=d.dynamicProps;for(let z=0;z<X.length;z++){const Q=X[z],_e=A[Q],ft=S[Q];(ft!==_e||Q==="value")&&r(v,Q,_e,ft,y,u.children,p,g,$e)}}w&1&&u.children!==d.children&&f(v,d.children)}else!T&&b==null&&le(v,d,A,S,p,g,y);((O=S.onVnodeUpdated)||C)&&fe(()=>{O&&Se(O,p,d,u),C&&Ge(d,u,p,"updated")},g)},K=(u,d,p,g,y,E,T)=>{for(let v=0;v<d.length;v++){const w=u[v],b=d[v],C=w.el&&(w.type===me||!st(w,b)||w.shapeFlag&70)?m(w.el):p;_(w,b,C,null,g,y,E,T,!0)}},le=(u,d,p,g,y,E,T)=>{if(p!==g){if(p!==q)for(const v in p)!rn(v)&&!(v in g)&&r(u,v,p[v],null,T,d.children,y,E,$e);for(const v in g){if(rn(v))continue;const w=g[v],b=p[v];w!==b&&v!=="value"&&r(u,v,b,w,T,d.children,y,E,$e)}"value"in g&&r(u,"value",p.value,g.value)}},P=(u,d,p,g,y,E,T,v,w)=>{const b=d.el=u?u.el:l(""),C=d.anchor=u?u.anchor:l("");let{patchFlag:A,dynamicChildren:S,slotScopeIds:O}=d;O&&(v=v?v.concat(O):O),u==null?(s(b,p,g),s(C,p,g),D(d.children,p,C,y,E,T,v,w)):A>0&&A&64&&S&&u.dynamicChildren?(K(u.dynamicChildren,S,p,y,E,T,v),(d.key!=null||y&&d===y.subTree)&&kr(u,d,!0)):Y(u,d,p,C,y,E,T,v,w)},Z=(u,d,p,g,y,E,T,v,w)=>{d.slotScopeIds=v,u==null?d.shapeFlag&512?y.ctx.activate(d,p,g,T,w):he(d,p,g,y,E,T,w):St(u,d,w)},he=(u,d,p,g,y,E,T)=>{const v=u.component=Xa(u,g,y);if(xn(u)&&(v.ctx.renderer=dt),Ja(v),v.asyncDep){if(y&&y.registerDep(v,ne),!u.el){const w=v.subTree=se(we);$(null,w,d,p)}return}ne(v,u,d,p,y,E,T)},St=(u,d,p)=>{const g=d.component=u.component;if(na(u,d,p))if(g.asyncDep&&!g.asyncResolved){G(g,d,p);return}else g.next=d,Jl(g.update),g.update();else d.el=u.el,g.vnode=d},ne=(u,d,p,g,y,E,T)=>{const v=()=>{if(u.isMounted){let{next:C,bu:A,u:S,parent:O,vnode:F}=u,X=C,z;Qe(u,!1),C?(C.el=F.el,G(u,C,T)):C=F,A&&On(A),(z=C.props&&C.props.onVnodeBeforeUpdate)&&Se(z,O,C,F),Qe(u,!0);const Q=kn(u),_e=u.subTree;u.subTree=Q,_(_e,Q,m(_e.el),Jt(_e),u,y,E),C.el=Q.el,X===null&&sa(u,Q.el),S&&fe(S,y),(z=C.props&&C.props.onVnodeUpdated)&&fe(()=>Se(z,O,C,F),y)}else{let C;const{el:A,props:S}=d,{bm:O,m:F,parent:X}=u,z=kt(d);if(Qe(u,!1),O&&On(O),!z&&(C=S&&S.onVnodeBeforeMount)&&Se(C,X,d),Qe(u,!0),A&&Mn){const Q=()=>{u.subTree=kn(u),Mn(A,u.subTree,u,y,null)};z?d.type.__asyncLoader().then(()=>!u.isUnmounted&&Q()):Q()}else{const Q=u.subTree=kn(u);_(null,Q,p,g,u,y,E),d.el=Q.el}if(F&&fe(F,y),!z&&(C=S&&S.onVnodeMounted)){const Q=d;fe(()=>Se(C,X,Q),y)}(d.shapeFlag&256||X&&kt(X.vnode)&&X.vnode.shapeFlag&256)&&u.a&&fe(u.a,y),u.isMounted=!0,d=p=g=null}},w=u.effect=new Es(v,()=>Ps(b),u.scope),b=u.update=()=>w.run();b.id=u.uid,Qe(u,!0),b()},G=(u,d,p)=>{d.component=u;const g=u.vnode.props;u.vnode=d,u.next=null,Da(u,d.props,g,p),Oa(u,d.children,p),Pt(),to(),Ct()},Y=(u,d,p,g,y,E,T,v,w=!1)=>{const b=u&&u.children,C=u?u.shapeFlag:0,A=d.children,{patchFlag:S,shapeFlag:O}=d;if(S>0){if(S&128){qt(b,A,p,g,y,E,T,v,w);return}else if(S&256){Je(b,A,p,g,y,E,T,v,w);return}}O&8?(C&16&&$e(b,y,E),A!==b&&f(p,A)):C&16?O&16?qt(b,A,p,g,y,E,T,v,w):$e(b,y,E,!0):(C&8&&f(p,""),O&16&&D(A,p,g,y,E,T,v,w))},Je=(u,d,p,g,y,E,T,v,w)=>{u=u||gt,d=d||gt;const b=u.length,C=d.length,A=Math.min(b,C);let S;for(S=0;S<A;S++){const O=d[S]=w?We(d[S]):Me(d[S]);_(u[S],O,p,null,y,E,T,v,w)}b>C?$e(u,y,E,!0,!1,A):D(d,p,g,y,E,T,v,w,A)},qt=(u,d,p,g,y,E,T,v,w)=>{let b=0;const C=d.length;let A=u.length-1,S=C-1;for(;b<=A&&b<=S;){const O=u[b],F=d[b]=w?We(d[b]):Me(d[b]);if(st(O,F))_(O,F,p,null,y,E,T,v,w);else break;b++}for(;b<=A&&b<=S;){const O=u[A],F=d[S]=w?We(d[S]):Me(d[S]);if(st(O,F))_(O,F,p,null,y,E,T,v,w);else break;A--,S--}if(b>A){if(b<=S){const O=S+1,F=O<C?d[O].el:g;for(;b<=S;)_(null,d[b]=w?We(d[b]):Me(d[b]),p,F,y,E,T,v,w),b++}}else if(b>S)for(;b<=A;)Pe(u[b],y,E,!0),b++;else{const O=b,F=b,X=new Map;for(b=F;b<=S;b++){const ge=d[b]=w?We(d[b]):Me(d[b]);ge.key!=null&&X.set(ge.key,b)}let z,Q=0;const _e=S-F+1;let ft=!1,Bs=0;const Mt=new Array(_e);for(b=0;b<_e;b++)Mt[b]=0;for(b=O;b<=A;b++){const ge=u[b];if(Q>=_e){Pe(ge,y,E,!0);continue}let Ce;if(ge.key!=null)Ce=X.get(ge.key);else for(z=F;z<=S;z++)if(Mt[z-F]===0&&st(ge,d[z])){Ce=z;break}Ce===void 0?Pe(ge,y,E,!0):(Mt[Ce-F]=b+1,Ce>=Bs?Bs=Ce:ft=!0,_(ge,d[Ce],p,null,y,E,T,v,w),Q++)}const Fs=ft?Fa(Mt):gt;for(z=Fs.length-1,b=_e-1;b>=0;b--){const ge=F+b,Ce=d[ge],js=ge+1<C?d[ge+1].el:g;Mt[b]===0?_(null,Ce,p,js,y,E,T,v,w):ft&&(z<0||b!==Fs[z]?Ze(Ce,p,js,2):z--)}}},Ze=(u,d,p,g,y=null)=>{const{el:E,type:T,transition:v,children:w,shapeFlag:b}=u;if(b&6){Ze(u.component.subTree,d,p,g);return}if(b&128){u.suspense.move(d,p,g);return}if(b&64){T.move(u,d,p,dt);return}if(T===me){s(E,d,p);for(let A=0;A<w.length;A++)Ze(w[A],d,p,g);s(u.anchor,d,p);return}if(T===jn){B(u,d,p);return}if(g!==2&&b&1&&v)if(g===0)v.beforeEnter(E),s(E,d,p),fe(()=>v.enter(E),y);else{const{leave:A,delayLeave:S,afterLeave:O}=v,F=()=>s(E,d,p),X=()=>{A(E,()=>{F(),O&&O()})};S?S(E,F,X):X()}else s(E,d,p)},Pe=(u,d,p,g=!1,y=!1)=>{const{type:E,props:T,ref:v,children:w,dynamicChildren:b,shapeFlag:C,patchFlag:A,dirs:S}=u;if(v!=null&&ls(v,null,p,u,!0),C&256){d.ctx.deactivate(u);return}const O=C&1&&S,F=!kt(u);let X;if(F&&(X=T&&T.onVnodeBeforeUnmount)&&Se(X,d,u),C&6)Qr(u.component,p,g);else{if(C&128){u.suspense.unmount(p,g);return}O&&Ge(u,null,d,"beforeUnmount"),C&64?u.type.remove(u,d,p,y,dt,g):b&&(E!==me||A>0&&A&64)?$e(b,d,p,!1,!0):(E===me&&A&384||!y&&C&16)&&$e(w,d,p),g&&ks(u)}(F&&(X=T&&T.onVnodeUnmounted)||O)&&fe(()=>{X&&Se(X,d,u),O&&Ge(u,null,d,"unmounted")},p)},ks=u=>{const{type:d,el:p,anchor:g,transition:y}=u;if(d===me){Gr(p,g);return}if(d===jn){I(u);return}const E=()=>{o(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:v}=y,w=()=>T(p,E);v?v(u.el,E,w):w()}else E()},Gr=(u,d)=>{let p;for(;u!==d;)p=h(u),o(u),u=p;o(d)},Qr=(u,d,p)=>{const{bum:g,scope:y,update:E,subTree:T,um:v}=u;g&&On(g),y.stop(),E&&(E.active=!1,Pe(T,u,d,p)),v&&fe(v,d),fe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},$e=(u,d,p,g=!1,y=!1,E=0)=>{for(let T=E;T<u.length;T++)Pe(u[T],d,p,g,y)},Jt=u=>u.shapeFlag&6?Jt(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),Ls=(u,d,p)=>{u==null?d._vnode&&Pe(d._vnode,null,null,!0):_(d._vnode||null,u,d,null,null,null,p),to(),pr(),d._vnode=u},dt={p:_,um:Pe,m:Ze,r:ks,mt:he,mc:D,pc:Y,pbc:K,n:Jt,o:e};let Sn,Mn;return t&&([Sn,Mn]=t(dt)),{render:Ls,hydrate:Sn,createApp:Ma(Ls,Sn)}}function Qe({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ba(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function kr(e,t,n=!1){const s=e.children,o=t.children;if(R(s)&&R(o))for(let r=0;r<s.length;r++){const i=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=We(o[r]),l.el=i.el),n||kr(i,l)),l.type===An&&(l.el=i.el)}}function Fa(e){const t=e.slice(),n=[0];let s,o,r,i,l;const a=e.length;for(s=0;s<a;s++){const c=e[s];if(c!==0){if(o=n[n.length-1],e[o]<c){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)l=r+i>>1,e[n[l]]<c?r=l+1:i=l;c<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}const ja=e=>e.__isTeleport,me=Symbol.for("v-fgt"),An=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),jn=Symbol.for("v-stc"),Ft=[];let Ae=null;function be(e=!1){Ft.push(Ae=e?null:[])}function Ua(){Ft.pop(),Ae=Ft[Ft.length-1]||null}let Wt=1;function mo(e){Wt+=e}function Lr(e){return e.dynamicChildren=Wt>0?Ae||gt:null,Ua(),Wt>0&&Ae&&Ae.push(e),e}function jt(e,t,n,s,o,r){return Lr(Be(e,t,n,s,o,r,!0))}function ut(e,t,n,s,o){return Lr(se(e,t,n,s,o,!0))}function mn(e){return e?e.__v_isVNode===!0:!1}function st(e,t){return e.type===t.type&&e.key===t.key}const In="__vInternal",Br=({key:e})=>e??null,ln=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||de(e)||L(e)?{i:ce,r:e,k:t,f:!!n}:e:null);function Be(e,t=null,n=null,s=0,o=null,r=e===me?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Br(t),ref:t&&ln(t),scopeId:yr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ce};return l?(Ns(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=ee(n)?8:16),Wt>0&&!i&&Ae&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ae.push(a),a}const se=Va;function Va(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===oa)&&(e=we),mn(e)){const l=Xe(e,t,!0);return n&&Ns(l,n),Wt>0&&!r&&Ae&&(l.shapeFlag&6?Ae[Ae.indexOf(e)]=l:Ae.push(l)),l.patchFlag|=-2,l}if(ec(e)&&(e=e.__vccOpts),t){t=Ha(t);let{class:l,style:a}=t;l&&!ee(l)&&(t.class=Re(l)),J(a)&&(cr(a)&&!R(a)&&(a=oe({},a)),t.style=De(a))}const i=ee(e)?1:ra(e)?128:ja(e)?64:J(e)?4:L(e)?2:0;return Be(e,t,n,s,o,i,r,!0)}function Ha(e){return e?cr(e)||In in e?oe({},e):e:null}function Xe(e,t,n=!1){const{props:s,ref:o,patchFlag:r,children:i}=e,l=t?Ka(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Br(l),ref:t&&t.ref?n&&o?R(o)?o.concat(ln(t)):[o,ln(t)]:ln(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Wa(e=" ",t=0){return se(An,null,e,t)}function Fr(e="",t=!1){return t?(be(),ut(we,null,e)):se(we,null,e)}function Me(e){return e==null||typeof e=="boolean"?se(we):R(e)?se(me,null,e.slice()):typeof e=="object"?We(e):se(An,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function Ns(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Ns(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(In in t)?t._ctx=ce:o===3&&ce&&(ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ce},n=32):(t=String(t),s&64?(n=16,t=[Wa(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ka(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Re([t.class,s.class]));else if(o==="style")t.style=De([t.style,s.style]);else if(gn(o)){const r=t[o],i=s[o];i&&r!==i&&!(R(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function Se(e,t,n,s=null){Ee(e,t,7,[n,s])}const za=Sr();let Ya=0;function Xa(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||za,r={uid:Ya++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dr(s,o),emitsOptions:gr(s,o),emit:null,emitted:null,propsDefaults:q,inheritAttrs:s.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Ql.bind(null,r),e.ce&&e.ce(r),r}let ie=null;const qa=()=>ie||ce;let Ds,mt,po="__VUE_INSTANCE_SETTERS__";(mt=Xn()[po])||(mt=Xn()[po]=[]),mt.push(e=>ie=e),Ds=e=>{mt.length>1?mt.forEach(t=>t(e)):mt[0](e)};const xt=e=>{Ds(e),e.scope.on()},at=()=>{ie&&ie.scope.off(),Ds(null)};function jr(e){return e.vnode.shapeFlag&4}let Kt=!1;function Ja(e,t=!1){Kt=t;const{props:n,children:s}=e.vnode,o=jr(e);Na(e,n,o,t),$a(e,s);const r=o?Za(e,t):void 0;return Kt=!1,r}function Za(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ur(new Proxy(e.ctx,xa));const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?Qa(e):null;xt(e),Pt();const r=ze(s,e,0,[e.props,o]);if(Ct(),at(),zo(r)){if(r.then(at,at),t)return r.then(i=>{ho(e,i,t)}).catch(i=>{wn(i,e,0)});e.asyncDep=r}else ho(e,r,t)}else Ur(e,t)}function ho(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=dr(t)),Ur(e,n)}let go;function Ur(e,t,n){const s=e.type;if(!e.render){if(!t&&go&&!s.render){const o=s.template||Ss(e).template;if(o){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,c=oe(oe({isCustomElement:r,delimiters:l},i),a);s.render=go(o,c)}}e.render=s.render||Ie}{xt(e),Pt();try{Ta(e)}finally{Ct(),at()}}}function Ga(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function Qa(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Ga(e)},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(dr(ur(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lt)return Lt[n](e)},has(t,n){return n in t||n in Lt}}))}function ec(e){return L(e)&&"__vccOpts"in e}const Vr=(e,t)=>zl(e,t,Kt);function Hr(e,t,n){const s=arguments.length;return s===2?J(t)&&!R(t)?mn(t)?se(e,null,[t]):se(e,t):se(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&mn(n)&&(n=[n]),se(e,t,n))}const tc=Symbol.for("v-scx"),nc=()=>Bt(tc),sc="3.3.9",oc="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,yo=ot&&ot.createElement("template"),rc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?ot.createElementNS(oc,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{yo.innerHTML=s?`<svg>${e}</svg>`:e;const l=yo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ue="transition",Nt="animation",zt=Symbol("_vtc"),Xt=(e,{slots:t})=>Hr(ua,ic(e),t);Xt.displayName="Transition";const Wr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xt.props=oe({},Er,Wr);const et=(e,t=[])=>{R(e)?e.forEach(n=>n(...t)):e&&e(...t)},bo=e=>e?R(e)?e.some(t=>t.length>1):e.length>1:!1;function ic(e){const t={};for(const P in e)P in Wr||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=i,appearToClass:f=l,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,M=lc(o),_=M&&M[0],j=M&&M[1],{onBeforeEnter:$,onEnter:k,onEnterCancelled:B,onLeave:I,onLeaveCancelled:H,onBeforeAppear:re=$,onAppear:te=k,onAppearCancelled:D=B}=t,W=(P,Z,he)=>{tt(P,Z?f:l),tt(P,Z?c:i),he&&he()},K=(P,Z)=>{P._isLeaving=!1,tt(P,m),tt(P,x),tt(P,h),Z&&Z()},le=P=>(Z,he)=>{const St=P?te:k,ne=()=>W(Z,P,he);et(St,[Z,ne]),vo(()=>{tt(Z,P?a:r),Ve(Z,P?f:l),bo(St)||Eo(Z,s,_,ne)})};return oe(t,{onBeforeEnter(P){et($,[P]),Ve(P,r),Ve(P,i)},onBeforeAppear(P){et(re,[P]),Ve(P,a),Ve(P,c)},onEnter:le(!1),onAppear:le(!0),onLeave(P,Z){P._isLeaving=!0;const he=()=>K(P,Z);Ve(P,m),uc(),Ve(P,h),vo(()=>{P._isLeaving&&(tt(P,m),Ve(P,x),bo(I)||Eo(P,s,j,he))}),et(I,[P,he])},onEnterCancelled(P){W(P,!1),et(B,[P])},onAppearCancelled(P){W(P,!0),et(D,[P])},onLeaveCancelled(P){K(P),et(H,[P])}})}function lc(e){if(e==null)return null;if(J(e))return[Un(e.enter),Un(e.leave)];{const t=Un(e);return[t,t]}}function Un(e){return ul(e)}function Ve(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[zt]||(e[zt]=new Set)).add(t)}function tt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[zt];n&&(n.delete(t),n.size||(e[zt]=void 0))}function vo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ac=0;function Eo(e,t,n,s){const o=e._endId=++ac,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:i,timeout:l,propCount:a}=cc(e,t);if(!i)return s();const c=i+"end";let f=0;const m=()=>{e.removeEventListener(c,h),r()},h=x=>{x.target===e&&++f>=a&&m()};setTimeout(()=>{f<a&&m()},l+1),e.addEventListener(c,h)}function cc(e,t){const n=window.getComputedStyle(e),s=M=>(n[M]||"").split(", "),o=s(`${Ue}Delay`),r=s(`${Ue}Duration`),i=wo(o,r),l=s(`${Nt}Delay`),a=s(`${Nt}Duration`),c=wo(l,a);let f=null,m=0,h=0;t===Ue?i>0&&(f=Ue,m=i,h=r.length):t===Nt?c>0&&(f=Nt,m=c,h=a.length):(m=Math.max(i,c),f=m>0?i>c?Ue:Nt:null,h=f?f===Ue?r.length:a.length:0);const x=f===Ue&&/\b(transform|all)(,|$)/.test(s(`${Ue}Property`).toString());return{type:f,timeout:m,propCount:h,hasTransform:x}}function wo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>_o(n)+_o(e[s])))}function _o(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function uc(){return document.body.offsetHeight}function dc(e,t,n){const s=e[zt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Rs=Symbol("_vod"),$s={beforeMount(e,{value:t},{transition:n}){e[Rs]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Dt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Dt(e,!0),s.enter(e)):s.leave(e,()=>{Dt(e,!1)}):Dt(e,t))},beforeUnmount(e,{value:t}){Dt(e,t)}};function Dt(e,t){e.style.display=t?e[Rs]:"none"}function fc(e,t,n){const s=e.style,o=ee(n);if(n&&!o){if(t&&!ee(t))for(const r in t)n[r]==null&&as(s,r,"");for(const r in n)as(s,r,n[r])}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),Rs in e&&(s.display=r)}}const xo=/\s*!important$/;function as(e,t,n){if(R(n))n.forEach(s=>as(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=mc(e,t);xo.test(n)?e.setProperty(It(s),n.replace(xo,""),"important"):e[s]=n}}const To=["Webkit","Moz","ms"],Vn={};function mc(e,t){const n=Vn[t];if(n)return n;let s=Et(t);if(s!=="filter"&&s in e)return Vn[t]=s;s=qo(s);for(let o=0;o<To.length;o++){const r=To[o]+s;if(r in e)return Vn[t]=r}return t}const Ao="http://www.w3.org/1999/xlink";function pc(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ao,t.slice(6,t.length)):e.setAttributeNS(Ao,t,n);else{const r=gl(t);n==null||r&&!Jo(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function hc(e,t,n,s,o,r,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,o,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const c=l==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Jo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function gc(e,t,n,s){e.addEventListener(t,n,s)}function yc(e,t,n,s){e.removeEventListener(t,n,s)}const Io=Symbol("_vei");function bc(e,t,n,s,o=null){const r=e[Io]||(e[Io]={}),i=r[t];if(s&&i)i.value=s;else{const[l,a]=vc(t);if(s){const c=r[t]=_c(s,o);gc(e,l,c,a)}else i&&(yc(e,l,i,a),r[t]=void 0)}}const Po=/(?:Once|Passive|Capture)$/;function vc(e){let t;if(Po.test(e)){t={};let s;for(;s=e.match(Po);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let Hn=0;const Ec=Promise.resolve(),wc=()=>Hn||(Ec.then(()=>Hn=0),Hn=Date.now());function _c(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ee(xc(s,n.value),t,5,[s])};return n.value=e,n.attached=wc(),n}function xc(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Co=/^on[a-z]/,Tc=(e,t,n,s,o=!1,r,i,l,a)=>{t==="class"?dc(e,s,o):t==="style"?fc(e,n,s):gn(t)?gs(t)||bc(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ac(e,t,s,o))?hc(e,t,s,r,i,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),pc(e,t,s,o))};function Ac(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Co.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Co.test(t)&&ee(n)?!1:t in e}const Ic=oe({patchProp:Tc},rc);let So;function Pc(){return So||(So=ka(Ic))}const Cc=(...e)=>{const t=Pc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Sc(s);if(!o)return;const r=t._component;!L(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Sc(e){return ee(e)?document.querySelector(e):e}const Mc="_root_3unp2_2",Nc={root:Mc},Cn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Dc={props:{active:Boolean,x:Number,y:Number},computed:{transform(){return this.scale!==void 0?`transform: translate(${this.x}px, ${this.y}px)`:`transform: translate(${this.x}px, ${this.y}px)`}}};function Rc(e,t,n,s,o,r){return be(),ut(Xt,{name:"fade"},{default:_t(()=>[Cs(Be("div",{class:Re(e.$style.root),style:De(r.transform)},[_a(e.$slots,"default")],6),[[$s,n.active]])]),_:3})}const $c={$style:Nc},Mo=Cn(Dc,[["render",Rc],["__cssModules",$c]]),Oc="_root_1rzf8_2",kc="_rootTitle_1rzf8_13",Lc={root:Oc,rootTitle:kc},Bc={inject:["setFocus","getSurface"],props:{meta:Object,isFocus:Boolean},computed:{polygonPath(){const e=this.meta.polygonPath;let t=0,n=e.length,s="M ";for(;t<n;)s+=`${e[t]} ${e[t+1]}`,t+=2,s+=t===n?" Z":" L ";return s},viewBox(){const e=this.meta.viewbox;return`${e.x-3} ${e.y-3} ${e.width+6} ${e.height+6}`},width(){return this.meta.viewbox.width+6},height(){return this.meta.viewbox.height+6},title(){var e,t;return((t=(e=this.meta)==null?void 0:e.source)==null?void 0:t.tag)||""},transform(){const e=this.meta.viewbox;return`transform: translate(${e.x-3}px, ${e.y-3}px)`}},methods:{}},Fc=["focus"],jc=["width","height","viewBox"],Uc=["d"];function Vc(e,t,n,s,o,r){return be(),jt("div",{class:Re(e.$style.root),focus:n.isFocus},[n.meta.active?(be(),jt(me,{key:0},[Be("div",{class:Re(e.$style.rootTitle)},yl(r.title),3),(be(),jt("svg",{style:De(r.transform),width:r.width,height:r.height,viewBox:r.viewBox,xmlns:"http://www.w3.org/2000/svg"},[Be("path",{fill:"none","stroke-width":"3",stroke:"blue",d:r.polygonPath},null,8,Uc)],12,jc))],64)):Fr("",!0)],10,Fc)}const Hc={$style:Lc},No=Cn(Bc,[["render",Vc],["__cssModules",Hc]]),Wc="_root_s5oev_2",Kc="_seg_s5oev_13",zc={root:Wc,seg:Kc},Yc={props:{segments:Object},data(){return{useTransition:!1}},computed:{active(){return this.segments.active},transform(){if(this.active){const e=this.segments.segments,t=e[0]===e[2],n=this.useTransition?"transition: all .3s;":"";return t?`${n}transform: translate(${e[0]}px, ${e[1]}px)`:`${n}transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(0px, 0px)"},transformSeg(){if(this.active){const e=this.segments.segments;return e[0]===e[2]?`transform: scale(3, ${e[3]-e[1]})`:`transform: scale(${e[2]-e[0]}, 3)`}return"transform: scale(0, 0);"}},watch:{active(e){console.log(e),this.$nextTick(()=>{this.useTransition=e})}}};function Xc(e,t,n,s,o,r){return be(),ut(Xt,{name:"fade"},{default:_t(()=>[Cs(Be("div",{class:Re(e.$style.root),style:De(r.transform)},[Be("div",{class:Re(e.$style.seg),style:De(r.transformSeg)},null,6)],6),[[$s,r.active]])]),_:1})}const qc={$style:zc},Jc=Cn(Yc,[["render",Xc],["__cssModules",qc]]),Zc="_root_14orw_2",Gc="_rect_14orw_13",Qc={root:Zc,rect:Gc},eu={props:{meta:Object},computed:{active(){return this.meta.active},position(){if(this.active){const e=this.meta.rect;return`transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(-999px, 0px)"},dimension(){if(this.active){const e=this.meta.rect;return`transform: scale(${e[2]}, ${e[3]})`}return"transform: scale(0, 0)"}}};function tu(e,t,n,s,o,r){return be(),ut(Xt,{name:"fade"},{default:_t(()=>[Cs(Be("div",{class:Re(e.$style.root),style:De(r.position)},[Be("div",{class:Re(e.$style.rect),style:De(r.dimension)},null,6)],6),[[$s,r.active]])]),_:1})}const nu={$style:Qc},su=Cn(eu,[["render",tu],["__cssModules",nu]]),ou={__name:"surface",setup(e){const n=Bt("getSurface")(),{highlight_elem:s,targets:o,highlight_seg:r,highlight_empty_slot:i}=n,l=Vr(()=>({position:"relative",left:0}));return(a,c)=>(be(),jt("div",{style:De(l.value)},[(be(!0),jt(me,null,wa(Oe(o),f=>(be(),ut(Mo,{x:f.position[0],y:f.position[1],active:!0},{default:_t(()=>[se(No,{meta:f,isFocus:!0},null,8,["meta"])]),_:2},1032,["x","y"]))),256)),se(Jc,{segments:Oe(r)},null,8,["segments"]),se(su,{meta:Oe(i)},null,8,["meta"]),Oe(s).active?(be(),ut(Mo,{key:0,x:Oe(s).position[0],y:Oe(s).position[1],active:Oe(s).active},{default:_t(()=>[se(No,{meta:Oe(s),isFocus:!1},null,8,["meta"])]),_:1},8,["x","y","active"])):Fr("",!0)],4))}};function ru(e,t){let n=1/0;return Kr(e,t).forEach(s=>{n=Math.min(n,s.left)}),n}function iu(e,t){let n=-1/0;return Kr(e,t).forEach(s=>{n=Math.max(n,s.right)}),n}function Kr(e,t){const n=lu(e,t);return n.length>0?n:au(e,t)}function lu(e,t){return t.filter(n=>n.top<=e&&n.bottom>e)}function au(e,t){return t.filter(n=>n.top<=e&&n.bottom==e)}function cu(e){const t=[],n=uu(e);n.sort((r,i)=>r-i);let s=0,o=0;return n.forEach((r,i)=>{let l=ru(r,e),a=iu(r,e);i===0?(t.push(l,r),t.push(a,r)):(l!==s&&t.unshift(s,r),t.unshift(l,r),a!==o&&t.push(o,r),t.push(a,r)),s=l,o=a}),t}function uu(e){const t=new Set;return e.forEach(n=>{t.add(n.bottom),t.add(n.top)}),Array.from(t)}class du{constructor(){N(this,"targets",rt([]));N(this,"highlight_elem",rt({type:void 0,active:!1,rects:[],polygonPath:[],viewbox:[],source:null}));N(this,"highlight_seg",rt({active:!1,segments:[]}));N(this,"highlight_empty_slot",rt({active:!1,rect:[]}))}apply(t,n){this.ide=t,this.render=new fu(this,n),this.render.init(),t.addEventListener("zoompan",s=>{s.detail.zoom&&(this.highlight_elem.active&&Object.assign(this.highlight_elem,{...this.resolveRects(this.highlight_elem.rects)}),this.targets.forEach(o=>{Object.assign(o,{...this.resolveRects(o.rects)})}))})}refresh(t){const n=[...this.targets,this.highlight_elem];t.forEach(s=>{const o=n.find(r=>on(r.source,s.source));o&&Object.assign(o,this.resolveRects(s.rects))})}hasTarget(t){return this.targets.find(n=>on(n.source,t))}_targetExist(t){return!!this.targets.find(s=>on(s.source,t.source))}highlightElem(t){if(this._targetExist(t)){this.closeHighlightElem();return}on(this.highlight_elem.source,t.source)||Object.assign(this.highlight_elem,{...t,...this.resolveRects(t.rects),active:!0})}getFocusNodes(){return this.targets.map(t=>V(t.source))}setFocus(t){if(!t){const s=this.targets.length;this.targets.splice(0,s);return}if(this._targetExist(t))return;this.closeHighlightElem();const n=this.targets.length;this.targets.splice(0,n,{...t,...this.resolveRects(t.rects),active:!0})}addFocus(t){this._targetExist(t)||this.targets.push({...t,...this.resolveRects(t.rects),active:!0})}closeHighlightElem(){this.highlight_elem.active&&Object.assign(this.highlight_elem,{active:!1,source:null})}resolveRects(t){const s=this.ide.scale;if(t.length===1){const{x:o,y:r,width:i,height:l}=t[0],a=[0,0,i*s,0,i*s,l*s,0,l*s];return{position:[o*s,r*s],polygonPath:a,viewbox:zr(a)}}else{const o=[t[0].x,t[0].y];return mu(o,s,cu(t))}}highlightSeg(t,n){if(this.highlight_seg.active=t,t){const o=this.ide.scale;this.highlight_seg.segments[0]=n[0]*o,this.highlight_seg.segments[1]=n[1]*o,this.highlight_seg.segments[2]=n[2]*o,this.highlight_seg.segments[3]=n[3]*o}}highlightEmptySlot(t,n){if(this.highlight_empty_slot.active=t,t){const o=this.ide.scale;this.highlight_empty_slot.rect[0]=n[0]*o,this.highlight_empty_slot.rect[1]=n[1]*o,this.highlight_empty_slot.rect[2]=n[2]*o,this.highlight_empty_slot.rect[3]=n[3]*o}}closeAll(){this.closeHighlightElem(),this.highlightSeg(!1),this.highlightEmptySlot(!1)}}class fu{constructor(t,n){this.surface=t,this.dom=n}init(){Cc(this.renderFn()).mount(this.dom)}renderFn(){const t=this.surface;return{inheritAttrs:!1,setup(){return Mr("getSurface",()=>t),()=>Hr(ou)}}}}function on(e,t){return V(e)===V(t)}function mu(e,t,n){const s=n.length;let o=0;for(;o<s;)n[o]=(n[o]-e[0])*t,n[o+1]=(n[o+1]-e[1])*t,o+=2;return{position:[e[0]*t,e[1]*t],polygonPath:n,viewbox:zr(n)}}function zr(e){if(e.length===0)return{width:0,height:0,x:0,y:0};let t=1/0,n=1/0,s=-1/0,o=-1/0,r=0;for(;r<e.length;){const i=e[r],l=e[r+1];i<t&&(t=i),i>s&&(s=i),l<n&&(n=l),l>o&&(o=l),r+=2}return{width:Math.max(s-t,10),height:Math.max(o-n,10),x:t,y:n}}class pu{constructor(){N(this,"proxies",new WeakMap)}registOrigin(t){const{origin:n,source:s}=t;if(!this.proxies.has(s.window))this.proxies.set(s.window,{postIframeMessage(o){s.postMessage(o,n)}});else{const o=this.proxies.get(s.window);Object.assign(o,{postIframeMessage(r){s.postMessage(r,n)}})}this._run(s.window)}registIDE(t,n){if(!this.proxies.has(n.contentWindow))this.proxies.set(n.contentWindow,{ide:t});else{const s=this.proxies.get(n.contentWindow);Object.assign(s,{ide:t})}this._run(n.contentWindow)}_run(t){const n=this.proxies.get(t);n.ide&&n.postIframeMessage&&(n.ide.init(n.postIframeMessage),n.ready=!0)}listen(){window.addEventListener("message",t=>{const n=t.data;n.type==="Event"&&n.name==="proxyReady"?this.registOrigin(t):this.distribute(t)})}distribute(t){const n=t.source;if(this.proxies.has(n.window)){const s=this.proxies.get(n.window);s.ready&&s.ide.onMessage(t)}}}const Yr=new pu;Yr.listen();function pn(e,t){let n=`oneTripToPreview-${pn.uuid++}`,s;const o=new Promise(i=>{s=i}),r=i=>{const l=i.data;l.uuid===n&&(s(l.response),window.removeEventListener("message",r))};return window.addEventListener("message",r),e({uuid:n,...t}),o}pn.uuid=0;class hu extends EventTarget{constructor(n){super();N(this,"initialZoom",1);N(this,"padding",20);N(this,"maxZoom",2);N(this,"minZoom",.5);N(this,"deviceWidth",0);N(this,"deviceHeight","auto");N(this,"position",{x:0,y:0});N(this,"scale",1);N(this,"_registedMethods",new Map);N(this,"postIframeMessage",null);this.simulator=n.simulator,this.surface=new du,this.getSourceByNodePath=n.getSourceByNodePath,this.preRegistMethods()}$mount(n){const s=gu(),o=yu(),r=bu(),i=vu();s.appendChild(o),s.appendChild(r),o.appendChild(i),this.domCache={viewport:s,viewcontent:o,groundAnchor:r,iframe:i},n.appendChild(s),i.addEventListener("load",()=>{console.log("onload!"),Yr.registIDE(this,i)}),o.style.height=`${s.getBoundingClientRect().height}px`,this.simulator.load(i)}init(n){this.postIframeMessage=n;const s=l=>{console.log("resized!",this.simulator),this.domCache.viewcontent.style.height=`${l.scrollHeight}px`},r=(()=>{let l=[];return(a,c)=>{a==="wheel"&&l.length===3&&l.every(f=>f==="wheel")&&(console.log("onWheel"),this.onWheelInFrame(c)),l.unshift(a),l.length>3&&(l.length=3)}})().bind(this);this.onMessage=l=>{const a=l.data;if(a.type==="Event")switch(a.name){case"wheel":case"scroll":r(a.name,a.payload.eventMeta);break;case"dragstart":this.dispatchEvent(new CustomEvent("frame:dragstart",{detail:a.payload}));break;case"refreshBoundings":this.refreshBoundings(a.payload);break;case"mousemove":this.highlightNode(a.payload.elementInfo);break;case"dragover":this.dispatchEvent(new CustomEvent("frame:dragover",{detail:a.payload}));break;case"dragend":this.dispatchEvent(new CustomEvent("frame:dragend",{detail:a.payload}));break;case"hesitateWhenDragging":this.dispatchEvent(new CustomEvent("frame:hesitateWhenDragging",{detail:a.payload}));break;case"click":this._focusOnNode(a.payload);break;case"dblclick":this.dispatchEvent(new CustomEvent("frame:requestEditContent",{detail:a.payload}));break;case"contentchange":this.dispatchEvent(new CustomEvent("frame:contentChange",{detail:a.payload}));break;case"resizeObserver":s(a.payload);break}if(a.type==="Method"){const c=this._registedMethods.get(a.name);if(c){const f=a.uuid;c(m=>{n({type:"Response",result:"success",uuid:f,response:m},l.origin)},m=>{n({type:"Response",result:"failed",uuid:f,err:m},l.origin)},a.payload)}}};const i=this.domCache.viewport;i.addEventListener("mousemove",l=>{l.target===i&&this.surface.closeHighlightElem()}),i.addEventListener("click",l=>{l.target===i&&(this.surface.closeAll(),this.surface.setFocus())}),i.addEventListener("wheel",this.onWheelInViewport.bind(this),{passive:!1}),this.surface.apply(this,this.domCache.groundAnchor),this.dispatchEvent(new CustomEvent("ready",{detail:{target:this.iframe}}))}preRegistMethods(){}refreshBoundings(n){const s=n.elementInfos;s.forEach(o=>{o.source=this.getSourceByNodePath(o.target)}),this.surface.refresh(s)}highlightNode(n){const{target:s,rects:o}=n;if(s){const r=this.getSourceByNodePath(s);this.surface.highlightElem({source:r,rects:o})}else this.surface.closeHighlightElem()}closeHighlight(){this.surface.closeHighlightElem()}async highlightNodeByNodePath(n){const s=await this.getElementInfoByNodePath(n);this.highlightNode(s)}clearFocus(){this.surface.setFocus()}_focusOnNode(n){const{target:s,rects:o}=n.elementInfo,{shiftKey:r}=n.eventMeta;if(s){this.surface.closeHighlightElem();const i=this.getSourceByNodePath(s);r?this.surface.addFocus({source:i,rects:o}):this.surface.setFocus({source:i,rects:o})}else this.surface.setFocus()}_calculateToViewport(n,s){const o=this.scale,r=this.position;s[0]=n[0]*o+r.x,s[1]=n[1]*o+r.y}syncGroundAnchor(){const n=[0,0];this._calculateToViewport(n,n),this.domCache.groundAnchor.style.transform=`translate(${n[0]}px, ${n[1]}px)`}resolveEventOffsetToViewport(n){const{clientX:s,clientY:o}=n,r=[s,o];return this._calculateToViewport(r,r),r}onWheelInViewport(n){n.preventDefault();const[s,o]=this.resolveEventOffset(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,o)}onWheelInFrame(n){const[s,o]=this.resolveEventOffsetToViewport(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,o)}_onWheel(n,s,o,r,i){n?(o=-o,this.zoomHandler(r,i,o)):this.panHandler(-s,-o)}resolveEventOffset(n){const{clientX:s,clientY:o}=n,{x:r,y:i}=this.domCache.viewport.getBoundingClientRect();return[s-r,o-i]}zoomHandler(n,s,o){if(this._zooming)return;this._zooming=!0;const r=this.scale;let i=r;const l=o>0?1.05:1/1.05;i*=l,i=Math.min(this.maxZoom,Math.max(this.minZoom,i));const{x:a,y:c}=this.position,f=i/r,m=n-(n-a)*f,h=s-(s-c)*f;this.scale=i,Object.assign(this.position,{x:m,y:h}),this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!0}})),this._zooming=!1}panHandler(n,s){this._panning||(this._panning=!0,this.position.x+=n,this.position.y+=s,this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!1}})),this._panning=!1)}_resetTransform(){const{x:n,y:s}=this.position,o=this.scale,r=`matrix(${o}, 0, 0, ${o}, ${n}, ${s})`;this.domCache.viewcontent.style[nl]=r,this.syncGroundAnchor()}_resolveEventOffsetInFrame(n){const{clientX:s,clientY:o}=n,{x:r,y:i}=this.position,l=this.scale,a=this.domCache.viewport.getBoundingClientRect();return[s*l+r+a.x,o*l+i+a.y]}async doDrag(n,s,o,r,i){this.postIframeMessage({type:"Event",name:"startDragging",payload:{nodePaths:s}});const l=document.importNode(n);l.style.position="fixed",l.style["pointer-events"]="none",document.body.appendChild(l),o&&await o();const a=x=>{if(r.execute)return;r.execute=!0;const[M,_]=this._resolveEventOffsetInFrame(x.detail.eventMeta);l.style.left=`${M}px`,l.style.top=`${_}px`,r({elementInfo:x.detail.elementInfo,eventMeta:x.detail.eventMeta,inFrame:!0,notAllowed:x.detail.notAllowed},c)};function c(){r.execute=!1}const f=x=>{if(r.execute)return;r.execute=!0;const{clientX:M,clientY:_}=x;l.style.left=`${M}px`,l.style.top=`${_}px`,r({elementInfo:null,eventMeta:x,inFrame:!1,notAllowed:!0},c)},m=async x=>{l.remove(),this.removeEventListener("frame:dragend",m),this.removeEventListener("frame:dragover",a),this.removeEventListener("frame:hesitateWhenDragging",h),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",m),i&&await i(),this.postIframeMessage({type:"Event",name:"stopDragging"})},h=x=>{this.surface.closeAll()};this.addEventListener("frame:dragend",m),this.addEventListener("frame:dragover",a),this.addEventListener("frame:hesitateWhenDragging",h),document.addEventListener("mousemove",f),document.addEventListener("mouseup",m)}doEditContent(n){this.postIframeMessage({type:"Method",name:"editContent",payload:{nodePath:n}})}setCursorInFrame(n){this.postIframeMessage({type:"Method",name:"setCursor",payload:{cursor:n}})}async getElementInfoByNodePath(n){return await pn(this.postIframeMessage,{type:"Method",name:"getElementInfoByNodePath",payload:{nodePath:n}})}async getElementsInfoByNodePath(n){return await pn(this.postIframeMessage,{type:"Method",name:"getElementsInfoByNodePath",payload:{nodePaths:n}})}startObserveRootElem(n){this.postIframeMessage({type:"Method",name:"startObserveRootNodeSize",payload:{selector:n}})}setElementsTemporaryStyle(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryStyle",payload:n})}setElementsTemporaryAttribute(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryAttribute",payload:n})}makeDraggingElemMove(n){this.postIframeMessage({type:"Event",name:"makeDraggingElemMove",payload:n})}registMethod(n,s){const{isAsync:o,body:r}=s,i=o?async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const f=await r.call(this,...c);l(f)}catch(f){a(f)}finally{i.execute=!1}}}:async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const f=r.call(this,...c);l(f)}catch(f){a(f)}finally{i.execute=!1}}};this._registedMethods.set(n,i)}}function gu(){return hn({tag:"div",style:{position:"relative",left:0,top:0,width:"100%",height:"100%","user-select":"none",overflow:"hidden",background:"rgba(0,0,0,0.1)"}})}function yu(){return hn({tag:"div",style:{position:"absolute",top:0,left:0,transformOrigin:"top left",width:"100%",overflow:"hidden",background:"#fff",userSelect:"none"}})}function bu(){return hn({tag:"div",style:{position:"absolute",left:0,top:0,width:0,height:0}})}function vu(){return hn({tag:"iframe",style:{width:"100%",height:"100%",border:"none"},attributes:{scrolling:"no"}})}const Do={[ve.ROW]:{getSegs:Bo,shiftHighlighter:Fo},[ve.COLUMN]:{getSegs:Lo,shiftHighlighter:jo},[ve.AUTO]:{getSegs:Ii,shiftHighlighter:Ai}},pt={PRE:"pre",AFTER:"after"};function Eu(e,t){t.forEach(n=>{e.addChild(n)})}function wu(e,t){let n=e;const s=e.parentNode,o=t.slice();for(;o.length;){const r=o.pop();s.insertNodeBefore(n,r),n=r}}function _u(e,t){let n=e;const s=e.parentNode,o=t.slice();for(;o.length;){const r=o.shift();s.insertNodeAfter(n,r),n=r}}function xu(e,t){const n={};return t.forEach(s=>{s in e&&delete e[s]}),n}function Xr(e){var t;if((t=e.parentNode)!=null&&t.isAbsolute){const n=an(e.staticStyle);xu(n,["left","right","top","bottom"]),e.staticStyle=zn(n)}}function Os(e){e.forEach(t=>{Xr(t)})}async function Tu(e,t,n,s,o,r){const i=!t||r.find(M=>t.dropable(M)&&M.dropToAccept(t)),l=await e.getElementsInfoByNodePath(s);let{getSegs:a,shiftHighlighter:c}=Do[o],f=1/0,m,h,x;if(i&&s.forEach(M=>{l[M].rects.forEach(j=>{a(j,l[M]).forEach((k,B)=>{const I=zs(n,k);I<f&&(f=I,m=k,h=M,x=B===0?pt.PRE:pt.AFTER)})})}),t){const M=t.nodePath,_=t.parentNode;if(r.find($=>_.dropable($)&&$.dropToAccept(_))){const $=_.direction||ve.AUTO,{getSegs:k,shiftHighlighter:B}=Do[$],I=await e.getElementInfoByNodePath(M),H=I.rects[0];k(H,I).forEach((te,D)=>{const W=zs(n,te);W<f&&(f=W,m=te,h=M,x=D===0?pt.PRE:pt.AFTER,c=B)})}}if(!m)throw"can not drop!";return c(m,x===pt.PRE?1.5:-1.5),{nearestSeg:m,nodepath:h,loc:x}}const Au={dragover(e,t,n){t.nodePath="",t.loc="",e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()},drop(e,t,n,s){e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()}},Iu=e=>({dragover(t,n,s){const o=s.elementInfo,r=Pi(o.rects[0]);t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!0,r),t.highlightNodeByNodePath(o.target),n.nodePath=o.target,t.setCursorInFrame("copy")},drop(t,n,s,o){const r=qe(e,n.nodePath);r&&(Os(s),Eu(r,s)),t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!1),t.closeHighlight(),o()}});async function qr(e,t,n,s,o,r,i){try{const{nearestSeg:l,nodepath:a,loc:c}=await Tu(e,t,s,o,r,i);e.surface.highlightSeg(!0,l),e.surface.highlightEmptySlot(!1),t?e.highlightNodeByNodePath(t.nodePath):e.closeHighlight(),n.nodePath=a,n.loc=c,e.setCursorInFrame("copy")}catch{e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),t?e.highlightNodeByNodePath(t.nodePath):e.closeHighlight(),n.nodePath="",n.loc="",e.setCursorInFrame("not-allowed")}}function Jr(e,t,n){t===pt.PRE?wu(e,n):_u(e,n)}const Ro=(e,t,n)=>({async dragover(s,o,r){const i=[r.eventMeta.clientX,r.eventMeta.clientY],l=e.elements.map(a=>a.nodePath);l.length>0&&await qr(s,null,o,i,l,ve.AUTO,n)},drop(s,o,r,i){const l=qe(e,o.nodePath);l&&(Os(r),Jr(l,o.loc,r)),s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight(),i()}}),Pu=(e,t,n)=>({async dragover(s,o,r){const i=[r.eventMeta.clientX,r.eventMeta.clientY],l=t.elements.filter(c=>!n.includes(c)).map(c=>c.nodePath),a=(t==null?void 0:t.direction)||ve.AUTO;l.length>0&&await qr(s,t,o,i,l,a,n)},drop(s,o,r,i){const l=qe(e,o.nodePath);l&&(Os(r),Jr(l,o.loc,r)),s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight(),i()}}),Cu=(e,t,n)=>({async dragover(s,o,r){n.find(l=>t.dropable(l)&&l.dropToAccept(t))?(o.nodePath=t.nodePath,o.toCoord=[r.eventMeta.clientX,r.eventMeta.clientY],s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.setCursorInFrame("copy")):(o.nodePath="",o.loc="",s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.setCursorInFrame("not-allowed")),s.highlightNodeByNodePath(t.nodePath)},async drop(s,o,r,i){const l=qe(e,o.nodePath);if(l){const a=o.movingNodeInfos,f=(await s.getElementInfoByNodePath(o.nodePath)).rects[0];r.forEach(m=>{if(m.parentNode===l){const h=o.toCoord[0]-o.fromCoord[0],x=o.toCoord[1]-o.fromCoord[1],M=a[m.nodePath];if(M){const _=M.rects[0],j=Object.assign({...an(m.staticStyle),left:`${_.x-f.x+h}px`,top:`${_.y-f.y+x}px`});m.staticStyle=zn(j),m.updateComponentKey()}}else{Xr(m);const h=Object.assign({...an(m.staticStyle),left:`${o.toCoord[0]-f.x}px`,top:`${o.toCoord[1]-f.y}px`});l.addChild(m),m.staticStyle=zn(h)}s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight()}),i()}}});function Su(e,t,n){if(e.notAllowed)return Au;if(e.inFrame){const s=e.elementInfo;if(s!=null&&s.isEmptySlot)return Iu(t);if(s!=null&&s.target){const o=qe(t,s.target);if(o){const r=o.isContainer?o:o.parentNode;return r.isRoot?Ro(t,r,n):r!=null&&r.isAbsolute?Cu(t,r,n):Pu(t,r,n)}}else return Ro(t)}}function Mu(e,t,n){return async(s,o,r)=>{const i=r.map(m=>m.nodePath);o.fromCoord=[n.clientX,n.clientY],o.fromNodePath=t.target,o.fromAbsolute=!0;const l=await s.getElementsInfoByNodePath(i);o.movingNodeInfos=l;const c=qe(e,t.target).parentNode,f={nodePaths:[]};r.forEach(m=>{if(m.parentNode===c){const h=m.nodePath;f.nodePaths.push(h)}}),f.nodePaths.length>0&&s.makeDraggingElemMove(f)}}function Nu(e,t,n){if(t!=null&&t.target){const s=qe(e,t.target);if(s){const o=s.parentNode;if(o!=null&&o.isAbsolute)return Mu(e,t,n)}}return null}class Du{constructor(t){N(this,"_UILibModel",null);N(this,"source",null);N(this,"_makeRootUIElement",null);N(this,"_makeUIElement",null);this.source=t}useUI({makeRootUIElement:t,makeUIElement:n}){this._makeRootUIElement=t,this._makeUIElement=n}refresh(){this._UILibModel=this._makeRootUIElement(this.source)}genCode(){return this._UILibModel.renderIDE()}getRoot(){return this._UILibModel}genUIModel(t){return this._makeUIElement(t)}}function Zr({domRoot:e,template:t,filePath:n,data:s,UIModel:o,Simulator:r,updateElement:i}){const{makeRootUIElement:l,makeUIElement:a}=o,c=new Li(s),f=new Du(c);f.useUI({makeUIElement:a,makeRootUIElement:l}),f.refresh();function m($){return qe(f.getRoot(),$)}window.getNodeByNodePath=m;const h=new r(t,n),x=f.genCode();console.log(x),h.mutateContentInTemplateBeforeLoad(x);function M(){const $=f.genCode();console.log($),h.updateProject($)}const _=new hu({simulator:h,getSourceByNodePath($){return m($)}});function j($,k,B){_.clearFocus();const I={nodePath:"",loc:"",isEmptySlot:!1,fromAbsolute:!1,movingNodeInfos:[],fromCoord:[0,0],toCoord:[0,0],fromNodePath:null};let H=null;const re=k.map(D=>D.nodePath),te=f.getRoot();_.doDrag($,re,async()=>{if(B){const{elementInfo:D,eventMeta:W}=B.detail,K=Nu(te,D,W);K&&await K(_,I,k)}},async(D,W)=>{H=Su(D,te,k),await H.dragover(_,I,D),W()},async()=>{await H.drop(_,I,k,()=>{f.refresh(),M()}),_.setCursorInFrame("auto")})}return _.addEventListener("ready",()=>{_.startObserveRootElem("body")}),_.$mount(e),_.addEventListener("frame:dragstart",$=>{const k=$.detail.elementInfo.target,B=m(k),I=_.surface.hasTarget(B);let H=[B];I&&(H=_.surface.getFocusNodes()),H=H.filter(te=>te.draggable);const re=document.createElement("div");re.innerText=B.tag,j(re,H,$)}),_.addEventListener("frame:requestEditContent",$=>{const k=$.detail.elementInfo.target;m(k).supportEditContent&&_.doEditContent(k)}),_.addEventListener("frame:contentChange",$=>{const k=$.detail.elementInfo.target,B=m(k);if(B.supportEditContent){const I=$.detail.innerText;i(B,"content",I),M()}}),{dragDropBehavior:j}}function Ru(){const{dragDropBehavior:e}=Zr({domRoot:document.querySelector("#react-app"),template:wi,filePath:"/src/App.jsx",data:Ti,UIModel:Ot,Simulator:Oo,updateElement(o,r,i){r==="content"&&(o.innerText=i)}}),t=document.getElementById("react-button");let n=0;t.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"Button",innerText:"buttonX"+n++});e(t,[Ot.makeUIElement(r)])});const s=document.getElementById("react-Flex");s.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"Flex"});e(s,[Ot.makeUIElement(r)])})}Ru();function $u(){const{dragDropBehavior:e}=Zr({domRoot:document.querySelector("#vue-app"),template:Ui,filePath:"/src/App.vue",data:Wi,UIModel:tl,Simulator:Oo,updateElement(o,r,i){if(r==="content"){const l=o.source.bindAttrs.find(a=>a.name==="text");l.value=i}}}),t=document.getElementById("vue-button");let n=0;t.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"u-button",bindAttrs:[{concept:"BindAttribute",name:"text",value:"buttonX"+n++}]});e(t,[Ot.makeUIElement(r)])});const s=document.getElementById("vue-linear-layout");s.addEventListener("mousedown",o=>{o.preventDefault(),o.stopPropagation();const r=new ct({concept:"ViewElement",tag:"u-linear-layout"});e(s,[Ot.makeUIElement(r)])})}$u();export{Hs as S,ku as _,ui as a,di as b,ht as c,fi as d,pi as e,Bu as f,Lu as g,Fu as h,$o as i,Dn as n};
