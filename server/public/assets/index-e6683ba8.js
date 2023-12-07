var Xi=Object.defineProperty;var Ji=(e,t,n)=>t in e?Xi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>(Ji(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Fr(e){const t={d:{}};for(const n of Object.keys(e)){const s=e[n];if("file"in s){const i=s.file.contents,o=typeof i=="string"?i:Zi(i),l=typeof i=="string"?{}:{b:!0};t.d[n]={f:{c:o,...l}};continue}const r=Fr(s.directory);t.d[n]=r}return t}function Zi(e){let t="";for(const n of e)t+=String.fromCharCode(n);return t}var Qi=Object.defineProperty,Gi=(e,t)=>{for(var n in t)Qi(e,n,{get:t[n],enumerable:!0})},De={};Gi(De,{createEndpoint:()=>Rr,expose:()=>ds,proxy:()=>kr,proxyMarker:()=>us,releaseProxy:()=>Or,transfer:()=>jr,transferHandlers:()=>fs,windowEndpoint:()=>ro,wrap:()=>Dr});var us=Symbol("Comlink.proxy"),Rr=Symbol("Comlink.endpoint"),Or=Symbol("Comlink.releaseProxy"),zn=Symbol("Comlink.thrown"),$r=e=>typeof e=="object"&&e!==null||typeof e=="function",eo={canHandle:e=>$r(e)&&e[us],serialize(e){const{port1:t,port2:n}=new MessageChannel;return ds(e,t),[n,[n]]},deserialize(e){return e.start(),Dr(e)}},to={canHandle:e=>$r(e)&&zn in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},fs=new Map([["proxy",eo],["throw",to]]);function ds(e,t=self){t.addEventListener("message",function n(s){if(!s||!s.data)return;const{id:r,type:i,path:o}=Object.assign({path:[]},s.data),l=(s.data.argumentList||[]).map(st);let a;try{const u=o.slice(0,-1).reduce((p,m)=>p[m],e),d=o.reduce((p,m)=>p[m],e);switch(i){case 0:a=d;break;case 1:u[o.slice(-1)[0]]=st(s.data.value),a=!0;break;case 2:a=d.apply(u,l);break;case 3:{const p=new d(...l);a=kr(p)}break;case 4:{const{port1:p,port2:m}=new MessageChannel;ds(e,m),a=jr(p,[p])}break;case 5:a=void 0;break}}catch(u){a={value:u,[zn]:0}}Promise.resolve(a).catch(u=>({value:u,[zn]:0})).then(u=>{const[d,p]=hs(u);t.postMessage(Object.assign(Object.assign({},d),{id:r}),p),i===5&&(t.removeEventListener("message",n),Lr(t))})}),t.start&&t.start()}function no(e){return e.constructor.name==="MessagePort"}function Lr(e){no(e)&&e.close()}function Dr(e,t){return qn(e,[],t)}function Zt(e){if(e)throw new Error("Proxy has been released and is not useable")}function qn(e,t=[],n=function(){}){let s=!1;const r=new Proxy(n,{get(i,o){if(Zt(s),o===Or)return()=>gt(e,{type:5,path:t.map(l=>l.toString())}).then(()=>{Lr(e),s=!0});if(o==="then"){if(t.length===0)return{then:()=>r};const l=gt(e,{type:0,path:t.map(a=>a.toString())}).then(st);return l.then.bind(l)}return qn(e,[...t,o])},set(i,o,l){Zt(s);const[a,u]=hs(l);return gt(e,{type:1,path:[...t,o].map(d=>d.toString()),value:a},u).then(st)},apply(i,o,l){Zt(s);const a=t[t.length-1];if(a===Rr)return gt(e,{type:4}).then(st);if(a==="bind")return qn(e,t.slice(0,-1));const[u,d]=Vs(l);return gt(e,{type:2,path:t.map(p=>p.toString()),argumentList:u},d).then(st)},construct(i,o){Zt(s);const[l,a]=Vs(o);return gt(e,{type:3,path:t.map(u=>u.toString()),argumentList:l},a).then(st)}});return r}function so(e){return Array.prototype.concat.apply([],e)}function Vs(e){const t=e.map(hs);return[t.map(n=>n[0]),so(t.map(n=>n[1]))]}var Br=new WeakMap;function jr(e,t){return Br.set(e,t),e}function kr(e){return Object.assign(e,{[us]:!0})}function ro(e,t=self,n="*"){return{postMessage:(s,r)=>e.postMessage(s,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function hs(e){for(const[t,n]of fs)if(n.canHandle(e)){const[s,r]=n.serialize(e);return[{type:3,name:t,value:s},r]}return[{type:0,value:e},Br.get(e)||[]]}function st(e){switch(e.type){case 3:return fs.get(e.name).deserialize(e.value);case 0:return e.value}}function gt(e,t,n){return new Promise(s=>{const r=io();e.addEventListener("message",function i(o){!o.data||!o.data.id||o.data.id!==r||(e.removeEventListener("message",i),s(o.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:r},t),n)})}function io(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const oo="https://stackblitz.com/headless";let Qt=null,Gt=null,On={};const lo=new TextDecoder,ao=new TextEncoder,lt=class lt{constructor(t,n,s){R(this,"_instance");R(this,"_runtimeInfo");R(this,"fs");R(this,"_tornDown",!1);this._instance=t,this._runtimeInfo=s,this.fs=new po(n)}async spawn(t,n,s){let r=[];Array.isArray(n)?r=n:s=n;let i,o=new ReadableStream;if((s==null?void 0:s.output)!==!1){const u=Eo();i=u.push,o=u.stream}const l=yo(go(i)),a=await this._instance.run({command:t,args:r,env:s==null?void 0:s.env,terminal:s==null?void 0:s.terminal},void 0,void 0,l);return new ho(a,o)}on(t,n){let s=!1,r=()=>{};const i=(...o)=>{s||n(...o)};return this._instance.on(t,De.proxy(i)).then(o=>{r=o,s&&r()}),()=>{s=!0,r()}}mount(t,n){const s=ao.encode(JSON.stringify(Fr(t)));return this._instance.loadFiles(De.transfer(s,[s.buffer]),{mountPoints:n==null?void 0:n.mountPoint})}get path(){return this._runtimeInfo.path}get workdir(){return this._runtimeInfo.cwd}teardown(){if(this._tornDown)throw new Error("WebContainer already torn down");this._tornDown=!0,this.fs._teardown(),this._instance.teardown(),this._instance[De.releaseProxy](),lt._instance===this&&(lt._instance=null)}static async boot(t={}){const{workdirName:n}=t;if(window.crossOriginIsolated&&t.coep==="none"&&console.warn(`A Cross-Origin-Embedder-Policy header is required in cross origin isolated environments.
Set the 'coep' option to 'require-corp'.`),n!=null&&n.includes("/")||n===".."||n===".")throw new Error("workdirName should be a valid folder name");for(;Qt;)await Qt;if(lt._instance)throw new Error("Only a single WebContainer instance can be booted");const s=mo(t);Qt=s.catch(()=>{});try{const r=await s;return lt._instance=r,r}finally{Qt=null}}};R(lt,"_instance",null);let fn=lt;const co=1,uo=2;class fo{constructor(t,n){R(this,"name");R(this,"_type");this.name=t,this._type=n}isFile(){return this._type===co}isDirectory(){return this._type===uo}}class ho{constructor(t,n){R(this,"output");R(this,"input");R(this,"exit");R(this,"_process");this.output=n,this._process=t,this.input=new WritableStream({write:s=>{var r;(r=this._getProcess())==null||r.write(s).catch(()=>{})}}),this.exit=this._onExit()}kill(){var t;(t=this._getProcess())==null||t.kill()}resize(t){var n;(n=this._getProcess())==null||n.resize(t)}async _onExit(){var t;try{return await this._process.onExit}finally{(t=this._process)==null||t[De.releaseProxy](),this._process=null}}_getProcess(){return this._process==null&&console.warn("This process already exited"),this._process}}class po{constructor(t){R(this,"_fs");this._fs=t}rm(...t){return this._fs.rm(...t)}async readFile(t,n){return await this._fs.readFile(t,n)}async rename(t,n){return await this._fs.rename(t,n)}async writeFile(t,n,s){if(n instanceof Uint8Array){const r=n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength);n=De.transfer(new Uint8Array(r),[r])}await this._fs.writeFile(t,n,s)}async readdir(t,n){const s=await this._fs.readdir(t,n);return _o(s)||bo(s)?s:s.map(i=>new fo(i.name,i["Symbol(type)"]))}async mkdir(t,n){return await this._fs.mkdir(t,n)}_teardown(){this._fs[De.releaseProxy]()}}async function mo(e){const{serverPromise:t}=vo(e),s=await(await t).build({host:window.location.host,version:"1.1.7",workdirName:e.workdirName}),r=await s.fs(),i=await s.runtimeInfo();return new fn(s,r,i)}function go(e){if(e!=null)return t=>{t instanceof Uint8Array?e(lo.decode(t)):t==null&&e(null)}}function yo(e){if(e!=null)return De.proxy(e)}function vo(e){if(Gt!=null)return e.coep!==On.coep&&(console.warn(`Attempting to boot WebContainer with 'coep: ${e.coep}'`),console.warn(`First boot had 'coep: ${On.coep}', new settings will not take effect!`)),{serverPromise:Gt};const t=document.createElement("iframe");t.style.display="none",t.setAttribute("allow","cross-origin-isolated");const n=wo();n.searchParams.set("version","1.1.7"),e.coep&&n.searchParams.set("coep",e.coep),t.src=n.toString();const{origin:s}=n;return On={...e},Gt=new Promise(r=>{const i=o=>{if(o.origin!==s)return;const{data:l}=o;if(l.type==="init"){r(De.wrap(o.ports[0]));return}if(l.type==="warning"){console[l.level].call(console,l.message);return}};window.addEventListener("message",i)}),document.body.insertBefore(t,null),{serverPromise:Gt}}function _o(e){return typeof e[0]=="string"}function bo(e){return e[0]instanceof Uint8Array}function wo(){return new URL(window.WEBCONTAINER_API_IFRAME_URL??oo)}function Eo(){let e=null;return{stream:new ReadableStream({start(s){e=s}}),push:s=>{s!=null?e==null||e.enqueue(s):(e==null||e.close(),e=null)}}}class xo extends EventTarget{constructor(){super(...arguments);R(this,"webcontainer",null)}setIframe(n){this.iframe=n}setProject(n){this.project=n}async load(){const n=await fn.boot({coep:"credentialless"});this.webcontainer=n,await n.mount(this.project);const s=await n.fs.readFile("package.json","utf-8");if(console.log(s),await this.installDependencies()!==0)throw new Error("Installation failed");console.log("start Dev Server"),this.startDevServer()}async installDependencies(){const n=await this.webcontainer.spawn("npm",["install"]);return n.output.pipeTo(new WritableStream({write(s){console.log(s)}})),n.exit}async startDevServer(){const n=this.webcontainer;(await n.spawn("npm",["run","dev"])).output.pipeTo(new WritableStream({write(i){console.log(i)}}));const r=this.iframe;n.on("server-ready",(i,o)=>{console.log(o),r.addEventListener("load",()=>{},{once:!0}),r.src=o})}async writeFile(n,s){await this.webcontainer.fs.writeFile(n,s)}}const Co=("transform"in document.documentElement.style?"transform":void 0)||("-webkit-transform"in document.documentElement.style?"-webkit-transform":void 0)||("-moz-transform"in document.documentElement.style?"-moz-transform":void 0)||("-ms-transform"in document.documentElement.style?"-ms-transform":void 0)||("-o-transform"in document.documentElement.style?"-o-transform":void 0),vn=function(e={}){let t,n;const s=e.tag,r=document.createElement(s);if(s==="style")return r.type="text/css",r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText)),r;if(e.attributes)for(t in e.attributes)n=e.attributes[t],r.setAttribute(t,n);if(e.style)for(t in e.style)n=e.style[t],r.style[t]=n;if(e.data)for(t in e.data)n=e.data[t],r.dataset[t]=n;return e.className&&e.className.forEach(i=>{console.log(i),r.classList.add(i)}),e.textContent!==void 0&&(r.textContent=e.textContent),e.childNodes&&[].concat(e.childNodes).forEach(i=>{r.appendChild(i)}),r};function ps(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const z={},vt=[],Ie=()=>{},To=()=>!1,Po=/^on[^a-z]/,_n=e=>Po.test(e),ms=e=>e.startsWith("onUpdate:"),re=Object.assign,gs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Io=Object.prototype.hasOwnProperty,D=(e,t)=>Io.call(e,t),M=Array.isArray,_t=e=>wn(e)==="[object Map]",Hr=e=>wn(e)==="[object Set]",O=e=>typeof e=="function",te=e=>typeof e=="string",bn=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",Ur=e=>(q(e)||O(e))&&O(e.then)&&O(e.catch),Vr=Object.prototype.toString,wn=e=>Vr.call(e),Ao=e=>wn(e).slice(8,-1),Wr=e=>wn(e)==="[object Object]",ys=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,an=ps(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),En=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Mo=/-(\w)/g,Et=En(e=>e.replace(Mo,(t,n)=>n?n.toUpperCase():"")),So=/\B([A-Z])/g,It=En(e=>e.replace(So,"-$1").toLowerCase()),Kr=En(e=>e.charAt(0).toUpperCase()+e.slice(1)),$n=En(e=>e?`on${Kr(e)}`:""),xt=(e,t)=>!Object.is(e,t),Ln=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},No=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Fo=e=>{const t=te(e)?Number(e):NaN;return isNaN(t)?e:t};let Ws;const Yn=()=>Ws||(Ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function je(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=te(s)?Lo(s):je(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(te(e)||q(e))return e}const Ro=/;(?![^(]*\))/g,Oo=/:([^]+)/,$o=/\/\*[^]*?\*\//g;function Lo(e){const t={};return e.replace($o,"").split(Ro).forEach(n=>{if(n){const s=n.split(Oo);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Re(e){let t="";if(te(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const s=Re(e[n]);s&&(t+=s+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Do="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bo=ps(Do);function zr(e){return!!e||e===""}const jo=e=>te(e)?e:e==null?"":M(e)||q(e)&&(e.toString===Vr||!O(e.toString))?JSON.stringify(e,qr,2):String(e),qr=(e,t)=>t&&t.__v_isRef?qr(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Hr(t)?{[`Set(${t.size})`]:[...t.values()]}:q(t)&&!M(t)&&!Wr(t)?String(t):t;let xe;class ko{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ho(e,t=xe){t&&t.active&&t.effects.push(e)}function Uo(){return xe}const vs=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yr=e=>(e.w&Xe)>0,Xr=e=>(e.n&Xe)>0,Vo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Xe},Wo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Yr(r)&&!Xr(r)?r.delete(e):t[n++]=r,r.w&=~Xe,r.n&=~Xe}t.length=n}},Xn=new WeakMap;let Ot=0,Xe=1;const Jn=30;let Ce;const ut=Symbol(""),Zn=Symbol("");class _s{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ho(this,s)}run(){if(!this.active)return this.fn();let t=Ce,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ce,Ce=this,qe=!0,Xe=1<<++Ot,Ot<=Jn?Vo(this):Ks(this),this.fn()}finally{Ot<=Jn&&Wo(this),Xe=1<<--Ot,Ce=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ce===this?this.deferStop=!0:this.active&&(Ks(this),this.onStop&&this.onStop(),this.active=!1)}}function Ks(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Jr=[];function At(){Jr.push(qe),qe=!1}function Mt(){const e=Jr.pop();qe=e===void 0?!0:e}function he(e,t,n){if(qe&&Ce){let s=Xn.get(e);s||Xn.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=vs()),Zr(r)}}function Zr(e,t){let n=!1;Ot<=Jn?Xr(e)||(e.n|=Xe,n=!Yr(e)):n=!e.has(Ce),n&&(e.add(Ce),Ce.deps.push(e))}function Be(e,t,n,s,r,i){const o=Xn.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&M(e)){const a=Number(s);o.forEach((u,d)=>{(d==="length"||!bn(d)&&d>=a)&&l.push(u)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":M(e)?ys(n)&&l.push(o.get("length")):(l.push(o.get(ut)),_t(e)&&l.push(o.get(Zn)));break;case"delete":M(e)||(l.push(o.get(ut)),_t(e)&&l.push(o.get(Zn)));break;case"set":_t(e)&&l.push(o.get(ut));break}if(l.length===1)l[0]&&Qn(l[0]);else{const a=[];for(const u of l)u&&a.push(...u);Qn(vs(a))}}function Qn(e,t){const n=M(e)?e:[...e];for(const s of n)s.computed&&zs(s);for(const s of n)s.computed||zs(s)}function zs(e,t){(e!==Ce||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ko=ps("__proto__,__v_isRef,__isVue"),Qr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bn)),qs=zo();function zo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=B(this);for(let i=0,o=this.length;i<o;i++)he(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(B)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){At();const s=B(this)[t].apply(this,n);return Mt(),s}}),e}function qo(e){const t=B(this);return he(t,"has",e),t.hasOwnProperty(e)}class Gr{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&s===(r?i?ol:si:i?ni:ti).get(t))return t;const o=M(t);if(!r){if(o&&D(qs,n))return Reflect.get(qs,n,s);if(n==="hasOwnProperty")return qo}const l=Reflect.get(t,n,s);return(bn(n)?Qr.has(n):Ko(n))||(r||he(t,"get",n),i)?l:ue(l)?o&&ys(n)?l:l.value:q(l)?r?ri(l):at(l):l}}class ei extends Gr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(Ut(i)&&ue(i)&&!ue(s))return!1;if(!this._shallow&&(!Gn(s)&&!Ut(s)&&(i=B(i),s=B(s)),!M(t)&&ue(i)&&!ue(s)))return i.value=s,!0;const o=M(t)&&ys(n)?Number(n)<t.length:D(t,n),l=Reflect.set(t,n,s,r);return t===B(r)&&(o?xt(s,i)&&Be(t,"set",n,s):Be(t,"add",n,s)),l}deleteProperty(t,n){const s=D(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Be(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!bn(n)||!Qr.has(n))&&he(t,"has",n),s}ownKeys(t){return he(t,"iterate",M(t)?"length":ut),Reflect.ownKeys(t)}}class Yo extends Gr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Xo=new ei,Jo=new Yo,Zo=new ei(!0),bs=e=>e,xn=e=>Reflect.getPrototypeOf(e);function en(e,t,n=!1,s=!1){e=e.__v_raw;const r=B(e),i=B(t);n||(xt(t,i)&&he(r,"get",t),he(r,"get",i));const{has:o}=xn(r),l=s?bs:n?Cs:xs;if(o.call(r,t))return l(e.get(t));if(o.call(r,i))return l(e.get(i));e!==r&&e.get(t)}function tn(e,t=!1){const n=this.__v_raw,s=B(n),r=B(e);return t||(xt(e,r)&&he(s,"has",e),he(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function nn(e,t=!1){return e=e.__v_raw,!t&&he(B(e),"iterate",ut),Reflect.get(e,"size",e)}function Ys(e){e=B(e);const t=B(this);return xn(t).has.call(t,e)||(t.add(e),Be(t,"add",e,e)),this}function Xs(e,t){t=B(t);const n=B(this),{has:s,get:r}=xn(n);let i=s.call(n,e);i||(e=B(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?xt(t,o)&&Be(n,"set",e,t):Be(n,"add",e,t),this}function Js(e){const t=B(this),{has:n,get:s}=xn(t);let r=n.call(t,e);r||(e=B(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&Be(t,"delete",e,void 0),i}function Zs(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Be(e,"clear",void 0,void 0),n}function sn(e,t){return function(s,r){const i=this,o=i.__v_raw,l=B(o),a=t?bs:e?Cs:xs;return!e&&he(l,"iterate",ut),o.forEach((u,d)=>s.call(r,a(u),a(d),i))}}function rn(e,t,n){return function(...s){const r=this.__v_raw,i=B(r),o=_t(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,u=r[e](...s),d=n?bs:t?Cs:xs;return!t&&he(i,"iterate",a?Zn:ut),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Qo(){const e={get(i){return en(this,i)},get size(){return nn(this)},has:tn,add:Ys,set:Xs,delete:Js,clear:Zs,forEach:sn(!1,!1)},t={get(i){return en(this,i,!1,!0)},get size(){return nn(this)},has:tn,add:Ys,set:Xs,delete:Js,clear:Zs,forEach:sn(!1,!0)},n={get(i){return en(this,i,!0)},get size(){return nn(this,!0)},has(i){return tn.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:sn(!0,!1)},s={get(i){return en(this,i,!0,!0)},get size(){return nn(this,!0)},has(i){return tn.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=rn(i,!1,!1),n[i]=rn(i,!0,!1),t[i]=rn(i,!1,!0),s[i]=rn(i,!0,!0)}),[e,n,t,s]}const[Go,el,tl,nl]=Qo();function ws(e,t){const n=t?e?nl:tl:e?el:Go;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(D(n,r)&&r in s?n:s,r,i)}const sl={get:ws(!1,!1)},rl={get:ws(!1,!0)},il={get:ws(!0,!1)},ti=new WeakMap,ni=new WeakMap,si=new WeakMap,ol=new WeakMap;function ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function al(e){return e.__v_skip||!Object.isExtensible(e)?0:ll(Ao(e))}function at(e){return Ut(e)?e:Es(e,!1,Xo,sl,ti)}function cl(e){return Es(e,!1,Zo,rl,ni)}function ri(e){return Es(e,!0,Jo,il,si)}function Es(e,t,n,s,r){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=al(e);if(o===0)return e;const l=new Proxy(e,o===2?s:n);return r.set(e,l),l}function bt(e){return Ut(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function Gn(e){return!!(e&&e.__v_isShallow)}function ii(e){return bt(e)||Ut(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function oi(e){return dn(e,"__v_skip",!0),e}const xs=e=>q(e)?at(e):e,Cs=e=>q(e)?ri(e):e;function ul(e){qe&&Ce&&(e=B(e),Zr(e.dep||(e.dep=vs())))}function fl(e,t){e=B(e);const n=e.dep;n&&Qn(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function $e(e){return ue(e)?e.value:e}const dl={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ue(r)&&!ue(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function li(e){return bt(e)?e:new Proxy(e,dl)}class hl{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _s(t,()=>{this._dirty||(this._dirty=!0,fl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=B(this);return ul(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function pl(e,t,n=!1){let s,r;const i=O(e);return i?(s=e,r=Ie):(s=e.get,r=e.set),new hl(s,r,i||!r,n)}function Ye(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){Cn(i,t,n)}return r}function ve(e,t,n,s){if(O(e)){const i=Ye(e,t,n,s);return i&&Ur(i)&&i.catch(o=>{Cn(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(ve(e[i],t,n,s));return r}function Cn(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,l=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,l)===!1)return}i=i.parent}const a=t.appContext.config.errorHandler;if(a){Ye(a,null,10,[e,o,l]);return}}ml(e,n,r,s)}function ml(e,t,n,s=!0){console.error(e)}let Vt=!1,es=!1;const le=[];let Fe=0;const wt=[];let Le=null,rt=0;const ai=Promise.resolve();let Ts=null;function gl(e){const t=Ts||ai;return e?t.then(this?e.bind(this):e):t}function yl(e){let t=Fe+1,n=le.length;for(;t<n;){const s=t+n>>>1,r=le[s],i=Wt(r);i<e||i===e&&r.pre?t=s+1:n=s}return t}function Ps(e){(!le.length||!le.includes(e,Vt&&e.allowRecurse?Fe+1:Fe))&&(e.id==null?le.push(e):le.splice(yl(e.id),0,e),ci())}function ci(){!Vt&&!es&&(es=!0,Ts=ai.then(fi))}function vl(e){const t=le.indexOf(e);t>Fe&&le.splice(t,1)}function _l(e){M(e)?wt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?rt+1:rt))&&wt.push(e),ci()}function Qs(e,t=Vt?Fe+1:0){for(;t<le.length;t++){const n=le[t];n&&n.pre&&(le.splice(t,1),t--,n())}}function ui(e){if(wt.length){const t=[...new Set(wt)];if(wt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,s)=>Wt(n)-Wt(s)),rt=0;rt<Le.length;rt++)Le[rt]();Le=null,rt=0}}const Wt=e=>e.id==null?1/0:e.id,bl=(e,t)=>{const n=Wt(e)-Wt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function fi(e){es=!1,Vt=!0,le.sort(bl);const t=Ie;try{for(Fe=0;Fe<le.length;Fe++){const n=le[Fe];n&&n.active!==!1&&Ye(n,null,14)}}finally{Fe=0,le.length=0,ui(),Vt=!1,Ts=null,(le.length||wt.length)&&fi()}}function wl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||z;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:m}=s[d]||z;m&&(r=n.map(x=>te(x)?x.trim():x)),p&&(r=n.map(No))}let l,a=s[l=$n(t)]||s[l=$n(Et(t))];!a&&i&&(a=s[l=$n(It(t))]),a&&ve(a,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ve(u,e,6,r)}}function di(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!O(e)){const a=u=>{const d=di(u,t,!0);d&&(l=!0,re(o,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(q(e)&&s.set(e,null),null):(M(i)?i.forEach(a=>o[a]=null):re(o,i),q(e)&&s.set(e,o),o)}function Tn(e,t){return!e||!_n(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,It(t))||D(e,t))}let ae=null,hi=null;function hn(e){const t=ae;return ae=e,hi=e&&e.type.__scopeId||null,t}function Ct(e,t=ae,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&cr(-1);const i=hn(t);let o;try{o=e(...r)}finally{hn(i),s._d&&cr(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Dn(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:l,attrs:a,emit:u,render:d,renderCache:p,data:m,setupState:x,ctx:S,inheritAttrs:T}=e;let H,U;const Y=hn(e);try{if(n.shapeFlag&4){const N=r||s,G=N;H=Ne(d.call(G,N,p,i,x,m,S)),U=a}else{const N=t;H=Ne(N.length>1?N(i,{attrs:a,slots:l,emit:u}):N(i,null)),U=t.props?a:El(a)}}catch(N){jt.length=0,Cn(N,e,1),H=se(_e)}let X=H;if(U&&T!==!1){const N=Object.keys(U),{shapeFlag:G}=X;N.length&&G&7&&(o&&N.some(ms)&&(U=xl(U,o)),X=Je(X,U))}return n.dirs&&(X=Je(X),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&(X.transition=n.transition),H=X,hn(Y),H}const El=e=>{let t;for(const n in e)(n==="class"||n==="style"||_n(n))&&((t||(t={}))[n]=e[n]);return t},xl=(e,t)=>{const n={};for(const s in e)(!ms(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Cl(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Gs(s,o,u):!!o;if(a&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==s[m]&&!Tn(u,m))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Gs(s,o,u):!0:!!o;return!1}function Gs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!Tn(n,i))return!0}return!1}function Tl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Pl=Symbol.for("v-ndc"),Il=e=>e.__isSuspense;function Al(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):_l(e)}const on={};function Bn(e,t,n){return pi(e,t,n)}function pi(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=z){var l;const a=Uo()===((l=ie)==null?void 0:l.scope)?ie:null;let u,d=!1,p=!1;if(ue(e)?(u=()=>e.value,d=Gn(e)):bt(e)?(u=()=>e,s=!0):M(e)?(p=!0,d=e.some(N=>bt(N)||Gn(N)),u=()=>e.map(N=>{if(ue(N))return N.value;if(bt(N))return ct(N);if(O(N))return Ye(N,a,2)})):O(e)?t?u=()=>Ye(e,a,2):u=()=>{if(!(a&&a.isUnmounted))return m&&m(),ve(e,a,3,[x])}:u=Ie,t&&s){const N=u;u=()=>ct(N())}let m,x=N=>{m=Y.onStop=()=>{Ye(N,a,4),m=Y.onStop=void 0}},S;if(zt)if(x=Ie,t?n&&ve(t,a,3,[u(),p?[]:void 0,x]):u(),r==="sync"){const N=Ca();S=N.__watcherHandles||(N.__watcherHandles=[])}else return Ie;let T=p?new Array(e.length).fill(on):on;const H=()=>{if(Y.active)if(t){const N=Y.run();(s||d||(p?N.some((G,be)=>xt(G,T[be])):xt(N,T)))&&(m&&m(),ve(t,a,3,[N,T===on?void 0:p&&T[0]===on?[]:T,x]),T=N)}else Y.run()};H.allowRecurse=!!t;let U;r==="sync"?U=H:r==="post"?U=()=>fe(H,a&&a.suspense):(H.pre=!0,a&&(H.id=a.uid),U=()=>Ps(H));const Y=new _s(u,U);t?n?H():T=Y.run():r==="post"?fe(Y.run.bind(Y),a&&a.suspense):Y.run();const X=()=>{Y.stop(),a&&a.scope&&gs(a.scope.effects,Y)};return S&&S.push(X),X}function Ml(e,t,n){const s=this.proxy,r=te(e)?e.includes(".")?mi(s,e):()=>s[e]:e.bind(s,s);let i;O(t)?i=t:(i=t.handler,n=t);const o=ie;Tt(this);const l=pi(r,i.bind(s),n);return o?Tt(o):ft(),l}function mi(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ct(e,t){if(!q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))ct(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)ct(e[n],t);else if(Hr(e)||_t(e))e.forEach(n=>{ct(n,t)});else if(Wr(e))for(const n in e)ct(e[n],t);return e}function Is(e,t){const n=ae;if(n===null)return e;const s=Sn(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,l,a,u=z]=t[i];o&&(O(o)&&(o={mounted:o,updated:o}),o.deep&&ct(l),r.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:u}))}return e}function Ge(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let a=l.dir[s];a&&(At(),ve(a,n,8,[e.el,l,e,t]),Mt())}}const Ke=Symbol("_leaveCb"),ln=Symbol("_enterCb");function Sl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bi(()=>{e.isMounted=!0}),wi(()=>{e.isUnmounting=!0}),e}const ge=[Function,Array],gi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ge,onEnter:ge,onAfterEnter:ge,onEnterCancelled:ge,onBeforeLeave:ge,onLeave:ge,onAfterLeave:ge,onLeaveCancelled:ge,onBeforeAppear:ge,onAppear:ge,onAfterAppear:ge,onAppearCancelled:ge},Nl={name:"BaseTransition",props:gi,setup(e,{slots:t}){const n=ya(),s=Sl();let r;return()=>{const i=t.default&&vi(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==_e){o=T;break}}const l=B(e),{mode:a}=l;if(s.isLeaving)return jn(o);const u=er(o);if(!u)return jn(o);const d=ts(u,l,s,n);ns(u,d);const p=n.subTree,m=p&&er(p);let x=!1;const{getTransitionKey:S}=u.type;if(S){const T=S();r===void 0?r=T:T!==r&&(r=T,x=!0)}if(m&&m.type!==_e&&(!it(u,m)||x)){const T=ts(m,l,s,n);if(ns(m,T),a==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},jn(o);a==="in-out"&&u.type!==_e&&(T.delayLeave=(H,U,Y)=>{const X=yi(s,m);X[String(m.key)]=m,H[Ke]=()=>{U(),H[Ke]=void 0,delete d.delayedLeave},d.delayedLeave=Y})}return o}}},Fl=Nl;function yi(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ts(e,t,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:x,onLeaveCancelled:S,onBeforeAppear:T,onAppear:H,onAfterAppear:U,onAppearCancelled:Y}=t,X=String(e.key),N=yi(n,e),G=($,Z)=>{$&&ve($,s,9,Z)},be=($,Z)=>{const K=Z[1];G($,Z),M($)?$.every(oe=>oe.length<=1)&&K():$.length<=1&&K()},we={mode:i,persisted:o,beforeEnter($){let Z=l;if(!n.isMounted)if(r)Z=T||l;else return;$[Ke]&&$[Ke](!0);const K=N[X];K&&it(e,K)&&K.el[Ke]&&K.el[Ke](),G(Z,[$])},enter($){let Z=a,K=u,oe=d;if(!n.isMounted)if(r)Z=H||a,K=U||u,oe=Y||d;else return;let P=!1;const J=$[ln]=pe=>{P||(P=!0,pe?G(oe,[$]):G(K,[$]),we.delayedLeave&&we.delayedLeave(),$[ln]=void 0)};Z?be(Z,[$,J]):J()},leave($,Z){const K=String(e.key);if($[ln]&&$[ln](!0),n.isUnmounting)return Z();G(p,[$]);let oe=!1;const P=$[Ke]=J=>{oe||(oe=!0,Z(),J?G(S,[$]):G(x,[$]),$[Ke]=void 0,N[K]===e&&delete N[K])};N[K]=e,m?be(m,[$,P]):P()},clone($){return ts($,t,n,s)}};return we}function jn(e){if(Pn(e))return e=Je(e),e.children=null,e}function er(e){return Pn(e)?e.children?e.children[0]:void 0:e}function ns(e,t){e.shapeFlag&6&&e.component?ns(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function vi(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===de?(o.patchFlag&128&&r++,s=s.concat(vi(o.children,t,l))):(t||o.type!==_e)&&s.push(l!=null?Je(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const Lt=e=>!!e.type.__asyncLoader,Pn=e=>e.type.__isKeepAlive;function Rl(e,t){_i(e,"a",t)}function Ol(e,t){_i(e,"da",t)}function _i(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(In(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Pn(r.parent.vnode)&&$l(s,t,n,r),r=r.parent}}function $l(e,t,n,s){const r=In(t,e,s,!0);Ei(()=>{gs(s[t],r)},n)}function In(e,t,n=ie,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;At(),Tt(n);const l=ve(t,n,e,o);return ft(),Mt(),l});return s?r.unshift(i):r.push(i),i}}const He=e=>(t,n=ie)=>(!zt||e==="sp")&&In(e,(...s)=>t(...s),n),Ll=He("bm"),bi=He("m"),Dl=He("bu"),Bl=He("u"),wi=He("bum"),Ei=He("um"),jl=He("sp"),kl=He("rtg"),Hl=He("rtc");function Ul(e,t=ie){In("ec",e,t)}function Vl(e,t,n,s){let r;const i=n&&n[s];if(M(e)||te(e)){r=new Array(e.length);for(let o=0,l=e.length;o<l;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(q(e))if(e[Symbol.iterator])r=Array.from(e,(o,l)=>t(o,l,void 0,i&&i[l]));else{const o=Object.keys(e);r=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const u=o[l];r[l]=t(e[u],u,l,i&&i[l])}}else r=[];return n&&(n[s]=r),r}function Wl(e,t,n={},s,r){if(ae.isCE||ae.parent&&Lt(ae.parent)&&ae.parent.isCE)return t!=="default"&&(n.name=t),se("slot",n,s&&s());let i=e[t];i&&i._c&&(i._d=!1),ye();const o=i&&xi(i(n)),l=dt(de,{key:n.key||o&&o.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function xi(e){return e.some(t=>gn(t)?!(t.type===_e||t.type===de&&!xi(t.children)):!0)?e:null}const ss=e=>e?Li(e)?Sn(e)||e.proxy:ss(e.parent):null,Dt=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ss(e.parent),$root:e=>ss(e.root),$emit:e=>e.emit,$options:e=>As(e),$forceUpdate:e=>e.f||(e.f=()=>Ps(e.update)),$nextTick:e=>e.n||(e.n=gl.bind(e.proxy)),$watch:e=>Ml.bind(e)}),kn=(e,t)=>e!==z&&!e.__isScriptSetup&&D(e,t),Kl={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:a}=e;let u;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(kn(s,t))return o[t]=1,s[t];if(r!==z&&D(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==z&&D(n,t))return o[t]=4,n[t];rs&&(o[t]=0)}}const d=Dt[t];let p,m;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==z&&D(n,t))return o[t]=4,n[t];if(m=a.config.globalProperties,D(m,t))return m[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return kn(r,t)?(r[t]=n,!0):s!==z&&D(s,t)?(s[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||e!==z&&D(e,o)||kn(t,o)||(l=i[0])&&D(l,o)||D(s,o)||D(Dt,o)||D(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function tr(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let rs=!0;function zl(e){const t=As(e),n=e.proxy,s=e.ctx;rs=!1,t.beforeCreate&&nr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:a,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:x,updated:S,activated:T,deactivated:H,beforeDestroy:U,beforeUnmount:Y,destroyed:X,unmounted:N,render:G,renderTracked:be,renderTriggered:we,errorCaptured:$,serverPrefetch:Z,expose:K,inheritAttrs:oe,components:P,directives:J,filters:pe}=t;if(u&&ql(u,s,null),o)for(const Q in o){const V=o[Q];O(V)&&(s[Q]=V.bind(n))}if(r){const Q=r.call(n,n);q(Q)&&(e.data=at(Q))}if(rs=!0,i)for(const Q in i){const V=i[Q],Ze=O(V)?V.bind(n,n):O(V.get)?V.get.bind(n,n):Ie,Xt=!O(V)&&O(V.set)?V.set.bind(n):Ie,Qe=Bi({get:Ze,set:Xt});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Ae=>Qe.value=Ae})}if(l)for(const Q in l)Ci(l[Q],s,n,Q);if(a){const Q=O(a)?a.call(n):a;Reflect.ownKeys(Q).forEach(V=>{Pi(V,Q[V])})}d&&nr(d,e,"c");function ne(Q,V){M(V)?V.forEach(Ze=>Q(Ze.bind(n))):V&&Q(V.bind(n))}if(ne(Ll,p),ne(bi,m),ne(Dl,x),ne(Bl,S),ne(Rl,T),ne(Ol,H),ne(Ul,$),ne(Hl,be),ne(kl,we),ne(wi,Y),ne(Ei,N),ne(jl,Z),M(K))if(K.length){const Q=e.exposed||(e.exposed={});K.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:Ze=>n[V]=Ze})})}else e.exposed||(e.exposed={});G&&e.render===Ie&&(e.render=G),oe!=null&&(e.inheritAttrs=oe),P&&(e.components=P),J&&(e.directives=J)}function ql(e,t,n=Ie){M(e)&&(e=is(e));for(const s in e){const r=e[s];let i;q(r)?"default"in r?i=Bt(r.from||s,r.default,!0):i=Bt(r.from||s):i=Bt(r),ue(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function nr(e,t,n){ve(M(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ci(e,t,n,s){const r=s.includes(".")?mi(n,s):()=>n[s];if(te(e)){const i=t[e];O(i)&&Bn(r,i)}else if(O(e))Bn(r,e.bind(n));else if(q(e))if(M(e))e.forEach(i=>Ci(i,t,n,s));else{const i=O(e.handler)?e.handler.bind(n):t[e.handler];O(i)&&Bn(r,i,e)}}function As(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(u=>pn(a,u,o,!0)),pn(a,t,o)),q(t)&&i.set(t,a),a}function pn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&pn(e,i,n,!0),r&&r.forEach(o=>pn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Yl[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Yl={data:sr,props:rr,emits:rr,methods:$t,computed:$t,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:$t,directives:$t,watch:Jl,provide:sr,inject:Xl};function sr(e,t){return t?e?function(){return re(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Xl(e,t){return $t(is(e),is(t))}function is(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function $t(e,t){return e?re(Object.create(null),e,t):t}function rr(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:re(Object.create(null),tr(e),tr(t??{})):t}function Jl(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const s in t)n[s]=ce(e[s],t[s]);return n}function Ti(){return{app:null,config:{isNativeTag:To,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zl=0;function Ql(e,t){return function(s,r=null){O(s)||(s=re({},s)),r!=null&&!q(r)&&(r=null);const i=Ti(),o=new WeakSet;let l=!1;const a=i.app={_uid:Zl++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ta,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&O(u.install)?(o.add(u),u.install(a,...d)):O(u)&&(o.add(u),u(a,...d))),a},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),a},component(u,d){return d?(i.components[u]=d,a):i.components[u]},directive(u,d){return d?(i.directives[u]=d,a):i.directives[u]},mount(u,d,p){if(!l){const m=se(s,r);return m.appContext=i,d&&t?t(m,u):e(m,u,p),l=!0,a._container=u,u.__vue_app__=a,Sn(m.component)||m.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(u,d){return i.provides[u]=d,a},runWithContext(u){mn=a;try{return u()}finally{mn=null}}};return a}}let mn=null;function Pi(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function Bt(e,t,n=!1){const s=ie||ae;if(s||mn){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:mn._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&O(t)?t.call(s&&s.proxy):t}}function Gl(e,t,n,s=!1){const r={},i={};dn(i,Mn,1),e.propsDefaults=Object.create(null),Ii(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:cl(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function ea(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=B(r),[a]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Tn(e.emitsOptions,m))continue;const x=t[m];if(a)if(D(i,m))x!==i[m]&&(i[m]=x,u=!0);else{const S=Et(m);r[S]=os(a,l,S,x,e,!1)}else x!==i[m]&&(i[m]=x,u=!0)}}}else{Ii(e,t,r,i)&&(u=!0);let d;for(const p in l)(!t||!D(t,p)&&((d=It(p))===p||!D(t,d)))&&(a?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=os(a,l,p,void 0,e,!0)):delete r[p]);if(i!==l)for(const p in i)(!t||!D(t,p))&&(delete i[p],u=!0)}u&&Be(e,"set","$attrs")}function Ii(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(an(a))continue;const u=t[a];let d;r&&D(r,d=Et(a))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Tn(e.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,o=!0)}if(i){const a=B(n),u=l||z;for(let d=0;d<i.length;d++){const p=i[d];n[p]=os(r,a,p,u[p],e,!D(u,p))}}return o}function os(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=D(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&O(a)){const{propsDefaults:u}=r;n in u?s=u[n]:(Tt(r),s=u[n]=a.call(null,t),ft())}else s=a}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===It(n))&&(s=!0))}return s}function Ai(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let a=!1;if(!O(e)){const d=p=>{a=!0;const[m,x]=Ai(p,t,!0);re(o,m),x&&l.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!a)return q(e)&&s.set(e,vt),vt;if(M(i))for(let d=0;d<i.length;d++){const p=Et(i[d]);ir(p)&&(o[p]=z)}else if(i)for(const d in i){const p=Et(d);if(ir(p)){const m=i[d],x=o[p]=M(m)||O(m)?{type:m}:re({},m);if(x){const S=ar(Boolean,x.type),T=ar(String,x.type);x[0]=S>-1,x[1]=T<0||S<T,(S>-1||D(x,"default"))&&l.push(p)}}}const u=[o,l];return q(e)&&s.set(e,u),u}function ir(e){return e[0]!=="$"}function or(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function lr(e,t){return or(e)===or(t)}function ar(e,t){return M(t)?t.findIndex(n=>lr(n,e)):O(t)&&lr(t,e)?0:-1}const Mi=e=>e[0]==="_"||e==="$stable",Ms=e=>M(e)?e.map(Ne):[Ne(e)],ta=(e,t,n)=>{if(t._n)return t;const s=Ct((...r)=>Ms(t(...r)),n);return s._c=!1,s},Si=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Mi(r))continue;const i=e[r];if(O(i))t[r]=ta(r,i,s);else if(i!=null){const o=Ms(i);t[r]=()=>o}}},Ni=(e,t)=>{const n=Ms(t);e.slots.default=()=>n},na=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),dn(t,"_",n)):Si(t,e.slots={})}else e.slots={},t&&Ni(e,t);dn(e.slots,Mn,1)},sa=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=z;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(re(r,t),!n&&l===1&&delete r._):(i=!t.$stable,Si(t,r)),o=t}else t&&(Ni(e,t),o={default:1});if(i)for(const l in r)!Mi(l)&&o[l]==null&&delete r[l]};function ls(e,t,n,s,r=!1){if(M(e)){e.forEach((m,x)=>ls(m,t&&(M(t)?t[x]:t),n,s,r));return}if(Lt(s)&&!r)return;const i=s.shapeFlag&4?Sn(s.component)||s.component.proxy:s.el,o=r?null:i,{i:l,r:a}=e,u=t&&t.r,d=l.refs===z?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==a&&(te(u)?(d[u]=null,D(p,u)&&(p[u]=null)):ue(u)&&(u.value=null)),O(a))Ye(a,l,12,[o,d]);else{const m=te(a),x=ue(a);if(m||x){const S=()=>{if(e.f){const T=m?D(p,a)?p[a]:d[a]:a.value;r?M(T)&&gs(T,i):M(T)?T.includes(i)||T.push(i):m?(d[a]=[i],D(p,a)&&(p[a]=d[a])):(a.value=[i],e.k&&(d[e.k]=a.value))}else m?(d[a]=o,D(p,a)&&(p[a]=o)):x&&(a.value=o,e.k&&(d[e.k]=o))};o?(S.id=-1,fe(S,n)):S()}}}const fe=Al;function ra(e){return ia(e)}function ia(e,t){const n=Yn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:a,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:x=Ie,insertStaticContent:S}=e,T=(c,f,h,g=null,y=null,b=null,E=!1,_=null,w=!!f.dynamicChildren)=>{if(c===f)return;c&&!it(c,f)&&(g=Jt(c),Ae(c,y,b,!0),c=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:v,ref:I,shapeFlag:C}=f;switch(v){case An:H(c,f,h,g);break;case _e:U(c,f,h,g);break;case Hn:c==null&&Y(f,h,g,E);break;case de:P(c,f,h,g,y,b,E,_,w);break;default:C&1?G(c,f,h,g,y,b,E,_,w):C&6?J(c,f,h,g,y,b,E,_,w):(C&64||C&128)&&v.process(c,f,h,g,y,b,E,_,w,pt)}I!=null&&y&&ls(I,c&&c.ref,b,f||c,!f)},H=(c,f,h,g)=>{if(c==null)s(f.el=l(f.children),h,g);else{const y=f.el=c.el;f.children!==c.children&&u(y,f.children)}},U=(c,f,h,g)=>{c==null?s(f.el=a(f.children||""),h,g):f.el=c.el},Y=(c,f,h,g)=>{[c.el,c.anchor]=S(c.children,f,h,g,c.el,c.anchor)},X=({el:c,anchor:f},h,g)=>{let y;for(;c&&c!==f;)y=m(c),s(c,h,g),c=y;s(f,h,g)},N=({el:c,anchor:f})=>{let h;for(;c&&c!==f;)h=m(c),r(c),c=h;r(f)},G=(c,f,h,g,y,b,E,_,w)=>{E=E||f.type==="svg",c==null?be(f,h,g,y,b,E,_,w):Z(c,f,y,b,E,_,w)},be=(c,f,h,g,y,b,E,_)=>{let w,v;const{type:I,props:C,shapeFlag:A,transition:F,dirs:L}=c;if(w=c.el=o(c.type,b,C&&C.is,C),A&8?d(w,c.children):A&16&&$(c.children,w,null,g,y,b&&I!=="foreignObject",E,_),L&&Ge(c,null,g,"created"),we(w,c,c.scopeId,E,g),C){for(const j in C)j!=="value"&&!an(j)&&i(w,j,null,C[j],b,c.children,g,y,Oe);"value"in C&&i(w,"value",null,C.value),(v=C.onVnodeBeforeMount)&&Se(v,g,c)}L&&Ge(c,null,g,"beforeMount");const W=oa(y,F);W&&F.beforeEnter(w),s(w,f,h),((v=C&&C.onVnodeMounted)||W||L)&&fe(()=>{v&&Se(v,g,c),W&&F.enter(w),L&&Ge(c,null,g,"mounted")},y)},we=(c,f,h,g,y)=>{if(h&&x(c,h),g)for(let b=0;b<g.length;b++)x(c,g[b]);if(y){let b=y.subTree;if(f===b){const E=y.vnode;we(c,E,E.scopeId,E.slotScopeIds,y.parent)}}},$=(c,f,h,g,y,b,E,_,w=0)=>{for(let v=w;v<c.length;v++){const I=c[v]=_?ze(c[v]):Ne(c[v]);T(null,I,f,h,g,y,b,E,_)}},Z=(c,f,h,g,y,b,E)=>{const _=f.el=c.el;let{patchFlag:w,dynamicChildren:v,dirs:I}=f;w|=c.patchFlag&16;const C=c.props||z,A=f.props||z;let F;h&&et(h,!1),(F=A.onVnodeBeforeUpdate)&&Se(F,h,f,c),I&&Ge(f,c,h,"beforeUpdate"),h&&et(h,!0);const L=y&&f.type!=="foreignObject";if(v?K(c.dynamicChildren,v,_,h,g,L,b):E||V(c,f,_,null,h,g,L,b,!1),w>0){if(w&16)oe(_,f,C,A,h,g,y);else if(w&2&&C.class!==A.class&&i(_,"class",null,A.class,y),w&4&&i(_,"style",C.style,A.style,y),w&8){const W=f.dynamicProps;for(let j=0;j<W.length;j++){const ee=W[j],Ee=C[ee],mt=A[ee];(mt!==Ee||ee==="value")&&i(_,ee,Ee,mt,y,c.children,h,g,Oe)}}w&1&&c.children!==f.children&&d(_,f.children)}else!E&&v==null&&oe(_,f,C,A,h,g,y);((F=A.onVnodeUpdated)||I)&&fe(()=>{F&&Se(F,h,f,c),I&&Ge(f,c,h,"updated")},g)},K=(c,f,h,g,y,b,E)=>{for(let _=0;_<f.length;_++){const w=c[_],v=f[_],I=w.el&&(w.type===de||!it(w,v)||w.shapeFlag&70)?p(w.el):h;T(w,v,I,null,g,y,b,E,!0)}},oe=(c,f,h,g,y,b,E)=>{if(h!==g){if(h!==z)for(const _ in h)!an(_)&&!(_ in g)&&i(c,_,h[_],null,E,f.children,y,b,Oe);for(const _ in g){if(an(_))continue;const w=g[_],v=h[_];w!==v&&_!=="value"&&i(c,_,v,w,E,f.children,y,b,Oe)}"value"in g&&i(c,"value",h.value,g.value)}},P=(c,f,h,g,y,b,E,_,w)=>{const v=f.el=c?c.el:l(""),I=f.anchor=c?c.anchor:l("");let{patchFlag:C,dynamicChildren:A,slotScopeIds:F}=f;F&&(_=_?_.concat(F):F),c==null?(s(v,h,g),s(I,h,g),$(f.children,h,I,y,b,E,_,w)):C>0&&C&64&&A&&c.dynamicChildren?(K(c.dynamicChildren,A,h,y,b,E,_),(f.key!=null||y&&f===y.subTree)&&Fi(c,f,!0)):V(c,f,h,I,y,b,E,_,w)},J=(c,f,h,g,y,b,E,_,w)=>{f.slotScopeIds=_,c==null?f.shapeFlag&512?y.ctx.activate(f,h,g,E,w):pe(f,h,g,y,b,E,w):St(c,f,w)},pe=(c,f,h,g,y,b,E)=>{const _=c.component=ga(c,g,y);if(Pn(c)&&(_.ctx.renderer=pt),va(_),_.asyncDep){if(y&&y.registerDep(_,ne),!c.el){const w=_.subTree=se(_e);U(null,w,f,h)}return}ne(_,c,f,h,y,b,E)},St=(c,f,h)=>{const g=f.component=c.component;if(Cl(c,f,h))if(g.asyncDep&&!g.asyncResolved){Q(g,f,h);return}else g.next=f,vl(g.update),g.update();else f.el=c.el,g.vnode=f},ne=(c,f,h,g,y,b,E)=>{const _=()=>{if(c.isMounted){let{next:I,bu:C,u:A,parent:F,vnode:L}=c,W=I,j;et(c,!1),I?(I.el=L.el,Q(c,I,E)):I=L,C&&Ln(C),(j=I.props&&I.props.onVnodeBeforeUpdate)&&Se(j,F,I,L),et(c,!0);const ee=Dn(c),Ee=c.subTree;c.subTree=ee,T(Ee,ee,p(Ee.el),Jt(Ee),c,y,b),I.el=ee.el,W===null&&Tl(c,ee.el),A&&fe(A,y),(j=I.props&&I.props.onVnodeUpdated)&&fe(()=>Se(j,F,I,L),y)}else{let I;const{el:C,props:A}=f,{bm:F,m:L,parent:W}=c,j=Lt(f);if(et(c,!1),F&&Ln(F),!j&&(I=A&&A.onVnodeBeforeMount)&&Se(I,W,f),et(c,!0),C&&Rn){const ee=()=>{c.subTree=Dn(c),Rn(C,c.subTree,c,y,null)};j?f.type.__asyncLoader().then(()=>!c.isUnmounted&&ee()):ee()}else{const ee=c.subTree=Dn(c);T(null,ee,h,g,c,y,b),f.el=ee.el}if(L&&fe(L,y),!j&&(I=A&&A.onVnodeMounted)){const ee=f;fe(()=>Se(I,W,ee),y)}(f.shapeFlag&256||W&&Lt(W.vnode)&&W.vnode.shapeFlag&256)&&c.a&&fe(c.a,y),c.isMounted=!0,f=h=g=null}},w=c.effect=new _s(_,()=>Ps(v),c.scope),v=c.update=()=>w.run();v.id=c.uid,et(c,!0),v()},Q=(c,f,h)=>{f.component=c;const g=c.vnode.props;c.vnode=f,c.next=null,ea(c,f.props,g,h),sa(c,f.children,h),At(),Qs(),Mt()},V=(c,f,h,g,y,b,E,_,w=!1)=>{const v=c&&c.children,I=c?c.shapeFlag:0,C=f.children,{patchFlag:A,shapeFlag:F}=f;if(A>0){if(A&128){Xt(v,C,h,g,y,b,E,_,w);return}else if(A&256){Ze(v,C,h,g,y,b,E,_,w);return}}F&8?(I&16&&Oe(v,y,b),C!==v&&d(h,C)):I&16?F&16?Xt(v,C,h,g,y,b,E,_,w):Oe(v,y,b,!0):(I&8&&d(h,""),F&16&&$(C,h,g,y,b,E,_,w))},Ze=(c,f,h,g,y,b,E,_,w)=>{c=c||vt,f=f||vt;const v=c.length,I=f.length,C=Math.min(v,I);let A;for(A=0;A<C;A++){const F=f[A]=w?ze(f[A]):Ne(f[A]);T(c[A],F,h,null,y,b,E,_,w)}v>I?Oe(c,y,b,!0,!1,C):$(f,h,g,y,b,E,_,w,C)},Xt=(c,f,h,g,y,b,E,_,w)=>{let v=0;const I=f.length;let C=c.length-1,A=I-1;for(;v<=C&&v<=A;){const F=c[v],L=f[v]=w?ze(f[v]):Ne(f[v]);if(it(F,L))T(F,L,h,null,y,b,E,_,w);else break;v++}for(;v<=C&&v<=A;){const F=c[C],L=f[A]=w?ze(f[A]):Ne(f[A]);if(it(F,L))T(F,L,h,null,y,b,E,_,w);else break;C--,A--}if(v>C){if(v<=A){const F=A+1,L=F<I?f[F].el:g;for(;v<=A;)T(null,f[v]=w?ze(f[v]):Ne(f[v]),h,L,y,b,E,_,w),v++}}else if(v>A)for(;v<=C;)Ae(c[v],y,b,!0),v++;else{const F=v,L=v,W=new Map;for(v=L;v<=A;v++){const me=f[v]=w?ze(f[v]):Ne(f[v]);me.key!=null&&W.set(me.key,v)}let j,ee=0;const Ee=A-L+1;let mt=!1,ks=0;const Nt=new Array(Ee);for(v=0;v<Ee;v++)Nt[v]=0;for(v=F;v<=C;v++){const me=c[v];if(ee>=Ee){Ae(me,y,b,!0);continue}let Me;if(me.key!=null)Me=W.get(me.key);else for(j=L;j<=A;j++)if(Nt[j-L]===0&&it(me,f[j])){Me=j;break}Me===void 0?Ae(me,y,b,!0):(Nt[Me-L]=v+1,Me>=ks?ks=Me:mt=!0,T(me,f[Me],h,null,y,b,E,_,w),ee++)}const Hs=mt?la(Nt):vt;for(j=Hs.length-1,v=Ee-1;v>=0;v--){const me=L+v,Me=f[me],Us=me+1<I?f[me+1].el:g;Nt[v]===0?T(null,Me,h,Us,y,b,E,_,w):mt&&(j<0||v!==Hs[j]?Qe(Me,h,Us,2):j--)}}},Qe=(c,f,h,g,y=null)=>{const{el:b,type:E,transition:_,children:w,shapeFlag:v}=c;if(v&6){Qe(c.component.subTree,f,h,g);return}if(v&128){c.suspense.move(f,h,g);return}if(v&64){E.move(c,f,h,pt);return}if(E===de){s(b,f,h);for(let C=0;C<w.length;C++)Qe(w[C],f,h,g);s(c.anchor,f,h);return}if(E===Hn){X(c,f,h);return}if(g!==2&&v&1&&_)if(g===0)_.beforeEnter(b),s(b,f,h),fe(()=>_.enter(b),y);else{const{leave:C,delayLeave:A,afterLeave:F}=_,L=()=>s(b,f,h),W=()=>{C(b,()=>{L(),F&&F()})};A?A(b,L,W):W()}else s(b,f,h)},Ae=(c,f,h,g=!1,y=!1)=>{const{type:b,props:E,ref:_,children:w,dynamicChildren:v,shapeFlag:I,patchFlag:C,dirs:A}=c;if(_!=null&&ls(_,null,h,c,!0),I&256){f.ctx.deactivate(c);return}const F=I&1&&A,L=!Lt(c);let W;if(L&&(W=E&&E.onVnodeBeforeUnmount)&&Se(W,f,c),I&6)Yi(c.component,h,g);else{if(I&128){c.suspense.unmount(h,g);return}F&&Ge(c,null,f,"beforeUnmount"),I&64?c.type.remove(c,f,h,y,pt,g):v&&(b!==de||C>0&&C&64)?Oe(v,f,h,!1,!0):(b===de&&C&384||!y&&I&16)&&Oe(w,f,h),g&&Bs(c)}(L&&(W=E&&E.onVnodeUnmounted)||F)&&fe(()=>{W&&Se(W,f,c),F&&Ge(c,null,f,"unmounted")},h)},Bs=c=>{const{type:f,el:h,anchor:g,transition:y}=c;if(f===de){qi(h,g);return}if(f===Hn){N(c);return}const b=()=>{r(h),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(c.shapeFlag&1&&y&&!y.persisted){const{leave:E,delayLeave:_}=y,w=()=>E(h,b);_?_(c.el,b,w):w()}else b()},qi=(c,f)=>{let h;for(;c!==f;)h=m(c),r(c),c=h;r(f)},Yi=(c,f,h)=>{const{bum:g,scope:y,update:b,subTree:E,um:_}=c;g&&Ln(g),y.stop(),b&&(b.active=!1,Ae(E,c,f,h)),_&&fe(_,f),fe(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Oe=(c,f,h,g=!1,y=!1,b=0)=>{for(let E=b;E<c.length;E++)Ae(c[E],f,h,g,y)},Jt=c=>c.shapeFlag&6?Jt(c.component.subTree):c.shapeFlag&128?c.suspense.next():m(c.anchor||c.el),js=(c,f,h)=>{c==null?f._vnode&&Ae(f._vnode,null,null,!0):T(f._vnode||null,c,f,null,null,null,h),Qs(),ui(),f._vnode=c},pt={p:T,um:Ae,m:Qe,r:Bs,mt:pe,mc:$,pc:V,pbc:K,n:Jt,o:e};let Fn,Rn;return t&&([Fn,Rn]=t(pt)),{render:js,hydrate:Fn,createApp:Ql(js,Fn)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function oa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fi(e,t,n=!1){const s=e.children,r=t.children;if(M(s)&&M(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=ze(r[i]),l.el=o.el),n||Fi(o,l)),l.type===An&&(l.el=o.el)}}function la(e){const t=e.slice(),n=[0];let s,r,i,o,l;const a=e.length;for(s=0;s<a;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<u?i=l+1:o=l;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const aa=e=>e.__isTeleport,de=Symbol.for("v-fgt"),An=Symbol.for("v-txt"),_e=Symbol.for("v-cmt"),Hn=Symbol.for("v-stc"),jt=[];let Te=null;function ye(e=!1){jt.push(Te=e?null:[])}function ca(){jt.pop(),Te=jt[jt.length-1]||null}let Kt=1;function cr(e){Kt+=e}function Ri(e){return e.dynamicChildren=Kt>0?Te||vt:null,ca(),Kt>0&&Te&&Te.push(e),e}function kt(e,t,n,s,r,i){return Ri(ke(e,t,n,s,r,i,!0))}function dt(e,t,n,s,r){return Ri(se(e,t,n,s,r,!0))}function gn(e){return e?e.__v_isVNode===!0:!1}function it(e,t){return e.type===t.type&&e.key===t.key}const Mn="__vInternal",Oi=({key:e})=>e??null,cn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||ue(e)||O(e)?{i:ae,r:e,k:t,f:!!n}:e:null);function ke(e,t=null,n=null,s=0,r=null,i=e===de?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oi(t),ref:t&&cn(t),scopeId:hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ae};return l?(Ss(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=te(n)?8:16),Kt>0&&!o&&Te&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Te.push(a),a}const se=ua;function ua(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Pl)&&(e=_e),gn(e)){const l=Je(e,t,!0);return n&&Ss(l,n),Kt>0&&!i&&Te&&(l.shapeFlag&6?Te[Te.indexOf(e)]=l:Te.push(l)),l.patchFlag|=-2,l}if(Ea(e)&&(e=e.__vccOpts),t){t=fa(t);let{class:l,style:a}=t;l&&!te(l)&&(t.class=Re(l)),q(a)&&(ii(a)&&!M(a)&&(a=re({},a)),t.style=je(a))}const o=te(e)?1:Il(e)?128:aa(e)?64:q(e)?4:O(e)?2:0;return ke(e,t,n,s,r,o,i,!0)}function fa(e){return e?ii(e)||Mn in e?re({},e):e:null}function Je(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,l=t?ha(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Oi(l),ref:t&&t.ref?n&&r?M(r)?r.concat(cn(t)):[r,cn(t)]:cn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Je(e.ssContent),ssFallback:e.ssFallback&&Je(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function da(e=" ",t=0){return se(An,null,e,t)}function $i(e="",t=!1){return t?(ye(),dt(_e,null,e)):se(_e,null,e)}function Ne(e){return e==null||typeof e=="boolean"?se(_e):M(e)?se(de,null,e.slice()):typeof e=="object"?ze(e):se(An,null,String(e))}function ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Je(e)}function Ss(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Ss(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Mn in t)?t._ctx=ae:r===3&&ae&&(ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:ae},n=32):(t=String(t),s&64?(n=16,t=[da(t)]):n=8);e.children=t,e.shapeFlag|=n}function ha(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Re([t.class,s.class]));else if(r==="style")t.style=je([t.style,s.style]);else if(_n(r)){const i=t[r],o=s[r];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Se(e,t,n,s=null){ve(e,t,7,[n,s])}const pa=Ti();let ma=0;function ga(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||pa,i={uid:ma++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ko(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ai(s,r),emitsOptions:di(s,r),emit:null,emitted:null,propsDefaults:z,inheritAttrs:s.inheritAttrs,ctx:z,data:z,props:z,attrs:z,slots:z,refs:z,setupState:z,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=wl.bind(null,i),e.ce&&e.ce(i),i}let ie=null;const ya=()=>ie||ae;let Ns,yt,ur="__VUE_INSTANCE_SETTERS__";(yt=Yn()[ur])||(yt=Yn()[ur]=[]),yt.push(e=>ie=e),Ns=e=>{yt.length>1?yt.forEach(t=>t(e)):yt[0](e)};const Tt=e=>{Ns(e),e.scope.on()},ft=()=>{ie&&ie.scope.off(),Ns(null)};function Li(e){return e.vnode.shapeFlag&4}let zt=!1;function va(e,t=!1){zt=t;const{props:n,children:s}=e.vnode,r=Li(e);Gl(e,n,r,t),na(e,s);const i=r?_a(e,t):void 0;return zt=!1,i}function _a(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=oi(new Proxy(e.ctx,Kl));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?wa(e):null;Tt(e),At();const i=Ye(s,e,0,[e.props,r]);if(Mt(),ft(),Ur(i)){if(i.then(ft,ft),t)return i.then(o=>{fr(e,o,t)}).catch(o=>{Cn(o,e,0)});e.asyncDep=i}else fr(e,i,t)}else Di(e,t)}function fr(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=li(t)),Di(e,n)}let dr;function Di(e,t,n){const s=e.type;if(!e.render){if(!t&&dr&&!s.render){const r=s.template||As(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,u=re(re({isCustomElement:i,delimiters:l},o),a);s.render=dr(r,u)}}e.render=s.render||Ie}{Tt(e),At();try{zl(e)}finally{Mt(),ft()}}}function ba(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}}))}function wa(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return ba(e)},slots:e.slots,emit:e.emit,expose:t}}function Sn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(li(oi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function Ea(e){return O(e)&&"__vccOpts"in e}const Bi=(e,t)=>pl(e,t,zt);function ji(e,t,n){const s=arguments.length;return s===2?q(t)&&!M(t)?gn(t)?se(e,null,[t]):se(e,t):se(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&gn(n)&&(n=[n]),se(e,t,n))}const xa=Symbol.for("v-scx"),Ca=()=>Bt(xa),Ta="3.3.9",Pa="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,hr=ot&&ot.createElement("template"),Ia={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?ot.createElementNS(Pa,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{hr.innerHTML=s?`<svg>${e}</svg>`:e;const l=hr.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ve="transition",Ft="animation",qt=Symbol("_vtc"),Yt=(e,{slots:t})=>ji(Fl,Aa(e),t);Yt.displayName="Transition";const ki={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yt.props=re({},gi,ki);const tt=(e,t=[])=>{M(e)?e.forEach(n=>n(...t)):e&&e(...t)},pr=e=>e?M(e)?e.some(t=>t.length>1):e.length>1:!1;function Aa(e){const t={};for(const P in e)P in ki||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,S=Ma(r),T=S&&S[0],H=S&&S[1],{onBeforeEnter:U,onEnter:Y,onEnterCancelled:X,onLeave:N,onLeaveCancelled:G,onBeforeAppear:be=U,onAppear:we=Y,onAppearCancelled:$=X}=t,Z=(P,J,pe)=>{nt(P,J?d:l),nt(P,J?u:o),pe&&pe()},K=(P,J)=>{P._isLeaving=!1,nt(P,p),nt(P,x),nt(P,m),J&&J()},oe=P=>(J,pe)=>{const St=P?we:Y,ne=()=>Z(J,P,pe);tt(St,[J,ne]),mr(()=>{nt(J,P?a:i),We(J,P?d:l),pr(St)||gr(J,s,T,ne)})};return re(t,{onBeforeEnter(P){tt(U,[P]),We(P,i),We(P,o)},onBeforeAppear(P){tt(be,[P]),We(P,a),We(P,u)},onEnter:oe(!1),onAppear:oe(!0),onLeave(P,J){P._isLeaving=!0;const pe=()=>K(P,J);We(P,p),Fa(),We(P,m),mr(()=>{P._isLeaving&&(nt(P,p),We(P,x),pr(N)||gr(P,s,H,pe))}),tt(N,[P,pe])},onEnterCancelled(P){Z(P,!1),tt(X,[P])},onAppearCancelled(P){Z(P,!0),tt($,[P])},onLeaveCancelled(P){K(P),tt(G,[P])}})}function Ma(e){if(e==null)return null;if(q(e))return[Un(e.enter),Un(e.leave)];{const t=Un(e);return[t,t]}}function Un(e){return Fo(e)}function We(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[qt]||(e[qt]=new Set)).add(t)}function nt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[qt];n&&(n.delete(t),n.size||(e[qt]=void 0))}function mr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sa=0;function gr(e,t,n,s){const r=e._endId=++Sa,i=()=>{r===e._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:l,propCount:a}=Na(e,t);if(!o)return s();const u=o+"end";let d=0;const p=()=>{e.removeEventListener(u,m),i()},m=x=>{x.target===e&&++d>=a&&p()};setTimeout(()=>{d<a&&p()},l+1),e.addEventListener(u,m)}function Na(e,t){const n=window.getComputedStyle(e),s=S=>(n[S]||"").split(", "),r=s(`${Ve}Delay`),i=s(`${Ve}Duration`),o=yr(r,i),l=s(`${Ft}Delay`),a=s(`${Ft}Duration`),u=yr(l,a);let d=null,p=0,m=0;t===Ve?o>0&&(d=Ve,p=o,m=i.length):t===Ft?u>0&&(d=Ft,p=u,m=a.length):(p=Math.max(o,u),d=p>0?o>u?Ve:Ft:null,m=d?d===Ve?i.length:a.length:0);const x=d===Ve&&/\b(transform|all)(,|$)/.test(s(`${Ve}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:x}}function yr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>vr(n)+vr(e[s])))}function vr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Fa(){return document.body.offsetHeight}function Ra(e,t,n){const s=e[qt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Fs=Symbol("_vod"),Rs={beforeMount(e,{value:t},{transition:n}){e[Fs]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Rt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Rt(e,!0),s.enter(e)):s.leave(e,()=>{Rt(e,!1)}):Rt(e,t))},beforeUnmount(e,{value:t}){Rt(e,t)}};function Rt(e,t){e.style.display=t?e[Fs]:"none"}function Oa(e,t,n){const s=e.style,r=te(n);if(n&&!r){if(t&&!te(t))for(const i in t)n[i]==null&&as(s,i,"");for(const i in n)as(s,i,n[i])}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),Fs in e&&(s.display=i)}}const _r=/\s*!important$/;function as(e,t,n){if(M(n))n.forEach(s=>as(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=$a(e,t);_r.test(n)?e.setProperty(It(s),n.replace(_r,""),"important"):e[s]=n}}const br=["Webkit","Moz","ms"],Vn={};function $a(e,t){const n=Vn[t];if(n)return n;let s=Et(t);if(s!=="filter"&&s in e)return Vn[t]=s;s=Kr(s);for(let r=0;r<br.length;r++){const i=br[r]+s;if(i in e)return Vn[t]=i}return t}const wr="http://www.w3.org/1999/xlink";function La(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wr,t.slice(6,t.length)):e.setAttributeNS(wr,t,n);else{const i=Bo(t);n==null||i&&!zr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Da(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=zr(n):n==null&&u==="string"?(n="",a=!0):u==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Ba(e,t,n,s){e.addEventListener(t,n,s)}function ja(e,t,n,s){e.removeEventListener(t,n,s)}const Er=Symbol("_vei");function ka(e,t,n,s,r=null){const i=e[Er]||(e[Er]={}),o=i[t];if(s&&o)o.value=s;else{const[l,a]=Ha(t);if(s){const u=i[t]=Wa(s,r);Ba(e,l,u,a)}else o&&(ja(e,l,o,a),i[t]=void 0)}}const xr=/(?:Once|Passive|Capture)$/;function Ha(e){let t;if(xr.test(e)){t={};let s;for(;s=e.match(xr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let Wn=0;const Ua=Promise.resolve(),Va=()=>Wn||(Ua.then(()=>Wn=0),Wn=Date.now());function Wa(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ve(Ka(s,n.value),t,5,[s])};return n.value=e,n.attached=Va(),n}function Ka(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Cr=/^on[a-z]/,za=(e,t,n,s,r=!1,i,o,l,a)=>{t==="class"?Ra(e,s,r):t==="style"?Oa(e,n,s):_n(t)?ms(t)||ka(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qa(e,t,s,r))?Da(e,t,s,i,o,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),La(e,t,s,r))};function qa(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Cr.test(t)&&O(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Cr.test(t)&&te(n)?!1:t in e}const Ya=re({patchProp:za},Ia);let Tr;function Xa(){return Tr||(Tr=ra(Ya))}const Ja=(...e)=>{const t=Xa().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Za(s);if(!r)return;const i=t._component;!O(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Za(e){return te(e)?document.querySelector(e):e}const Qa="_root_3unp2_2",Ga={root:Qa},Nn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},ec={props:{active:Boolean,x:Number,y:Number},computed:{transform(){return this.scale!==void 0?`transform: translate(${this.x}px, ${this.y}px)`:`transform: translate(${this.x}px, ${this.y}px)`}}};function tc(e,t,n,s,r,i){return ye(),dt(Yt,{name:"fade"},{default:Ct(()=>[Is(ke("div",{class:Re(e.$style.root),style:je(i.transform)},[Wl(e.$slots,"default")],6),[[Rs,n.active]])]),_:3})}const nc={$style:Ga},Pr=Nn(ec,[["render",tc],["__cssModules",nc]]),sc="_root_qtf1r_2",rc="_rootTitle_qtf1r_13",ic={root:sc,rootTitle:rc},oc={inject:["setFocus","getSurface"],props:{meta:Object,isFocus:Boolean},computed:{polygonPath(){const e=this.meta.polygonPath;let t=0,n=e.length,s="M ";for(;t<n;)s+=`${e[t]} ${e[t+1]}`,t+=2,s+=t===n?" Z":" L ";return s},viewBox(){const e=this.meta.viewbox;return`${e.x} ${e.y} ${e.width} ${e.height}`},width(){return this.meta.viewbox.width},height(){return this.meta.viewbox.height},title(){var e,t;return((t=(e=this.meta)==null?void 0:e.source)==null?void 0:t.tag)||""}},methods:{}},lc=["focus"],ac=["width","height"],cc=["d"];function uc(e,t,n,s,r,i){return ye(),kt("div",{class:Re(e.$style.root),focus:n.isFocus},[n.meta.active?(ye(),kt(de,{key:0},[ke("div",{class:Re(e.$style.rootTitle)},jo(i.title),3),(ye(),kt("svg",{width:i.width,height:i.height,xmlns:"http://www.w3.org/2000/svg"},[ke("path",{fill:"none","stroke-width":"3",stroke:"blue",d:i.polygonPath},null,8,cc)],8,ac))],64)):$i("",!0)],10,lc)}const fc={$style:ic},Ir=Nn(oc,[["render",uc],["__cssModules",fc]]),dc="_root_s5oev_2",hc="_seg_s5oev_13",pc={root:dc,seg:hc},mc={props:{segments:Object},data(){return{useTransition:!1}},computed:{active(){return this.segments.active},transform(){if(this.active){const e=this.segments.segments,t=e[0]===e[2],n=this.useTransition?"transition: all .3s;":"";return t?`${n}transform: translate(${e[0]}px, ${e[1]}px)`:`${n}transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(0px, 0px)"},transformSeg(){if(this.active){const e=this.segments.segments;return e[0]===e[2]?`transform: scale(3, ${e[3]-e[1]})`:`transform: scale(${e[2]-e[0]}, 3)`}return"transform: scale(0, 0);"}},watch:{active(e){console.log(e),this.$nextTick(()=>{this.useTransition=e})}}};function gc(e,t,n,s,r,i){return ye(),dt(Yt,{name:"fade"},{default:Ct(()=>[Is(ke("div",{class:Re(e.$style.root),style:je(i.transform)},[ke("div",{class:Re(e.$style.seg),style:je(i.transformSeg)},null,6)],6),[[Rs,i.active]])]),_:1})}const yc={$style:pc},vc=Nn(mc,[["render",gc],["__cssModules",yc]]),_c="_root_14orw_2",bc="_rect_14orw_13",wc={root:_c,rect:bc},Ec={props:{meta:Object},computed:{active(){return this.meta.active},position(){if(this.active){const e=this.meta.rect;return`transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(-999px, 0px)"},dimension(){if(this.active){const e=this.meta.rect;return`transform: scale(${e[2]}, ${e[3]})`}return"transform: scale(0, 0)"}}};function xc(e,t,n,s,r,i){return ye(),dt(Yt,{name:"fade"},{default:Ct(()=>[Is(ke("div",{class:Re(e.$style.root),style:je(i.position)},[ke("div",{class:Re(e.$style.rect),style:je(i.dimension)},null,6)],6),[[Rs,i.active]])]),_:1})}const Cc={$style:wc},Tc=Nn(Ec,[["render",xc],["__cssModules",Cc]]),Pc={__name:"surface",setup(e){const n=Bt("getSurface")(),{highlight_elem:s,targets:r,highlight_seg:i,highlight_empty_slot:o}=n,l=Bi(()=>({position:"relative",left:0}));return(a,u)=>(ye(),kt("div",{style:je(l.value)},[(ye(!0),kt(de,null,Vl($e(r),d=>(ye(),dt(Pr,{x:d.position[0],y:d.position[1],active:!0},{default:Ct(()=>[se(Ir,{meta:d,isFocus:!0},null,8,["meta"])]),_:2},1032,["x","y"]))),256)),se(vc,{segments:$e(i)},null,8,["segments"]),se(Tc,{meta:$e(o)},null,8,["meta"]),$e(s).active?(ye(),dt(Pr,{key:0,x:$e(s).position[0],y:$e(s).position[1],active:$e(s).active},{default:Ct(()=>[se(Ir,{meta:$e(s),isFocus:!1},null,8,["meta"])]),_:1},8,["x","y","active"])):$i("",!0)],4))}};class Ic{constructor(){R(this,"targets",at([]));R(this,"highlight_elem",at({type:void 0,active:!1,rects:[],polygonPath:[],viewbox:[],source:null}));R(this,"highlight_seg",at({active:!1,segments:[]}));R(this,"highlight_empty_slot",at({active:!1,rect:[]}))}apply(t,n){this.ide=t,this.render=new Ac(this,n),this.render.init(),t.addEventListener("zoompan",s=>{s.detail.zoom&&(this.highlight_elem.active&&Object.assign(this.highlight_elem,{...this.resolveRects(this.highlight_elem.rects)}),this.targets.forEach(r=>{Object.assign(r,{...this.resolveRects(r.rects)})}))})}_targetExist(t){return!!this.targets.find(s=>Ar(s.source,t.source))}highlightElem(t){if(this._targetExist(t)){this.closeHighlightElem();return}Ar(this.highlight_elem.source,t.source)||Object.assign(this.highlight_elem,{...t,...this.resolveRects(t.rects),active:!0})}setFocus(t){if(!t){this.targets.length=0;return}this._targetExist(t)||(this.closeHighlightElem(),this.targets[0]={...t,...this.resolveRects(t.rects),active:!0})}closeHighlightElem(){this.highlight_elem.active&&Object.assign(this.highlight_elem,{active:!1,source:null})}resolveRects(t){const s=this.ide.scale;if(t.length===1){const{x:r,y:i,width:o,height:l}=t[0],a=[0,0,o*s,0,o*s,l*s,0,l*s];return{position:[r*s,i*s],polygonPath:a,viewbox:Mc(a)}}}highlightSeg(t,n){if(this.highlight_seg.active=t,t){const r=this.ide.scale;this.highlight_seg.segments[0]=n[0]*r,this.highlight_seg.segments[1]=n[1]*r,this.highlight_seg.segments[2]=n[2]*r,this.highlight_seg.segments[3]=n[3]*r}}highlightEmptySlot(t,n){if(this.highlight_empty_slot.active=t,t){const r=this.ide.scale;this.highlight_empty_slot.rect[0]=n[0]*r,this.highlight_empty_slot.rect[1]=n[1]*r,this.highlight_empty_slot.rect[2]=n[2]*r,this.highlight_empty_slot.rect[3]=n[3]*r}}closeAll(){this.closeHighlightElem(),this.highlightSeg(!1),this.highlightEmptySlot(!1)}}class Ac{constructor(t,n){this.surface=t,this.dom=n}init(){Ja(this.renderFn()).mount(this.dom)}renderFn(){const t=this.surface;return{inheritAttrs:!1,setup(){return Pi("getSurface",()=>t),()=>ji(Pc)}}}}function Ar(e,t){return B(e)===B(t)}function Mc(e){if(e.length===0)return{width:0,height:0,x:0,y:0};let t=1/0,n=1/0,s=-1/0,r=-1/0,i=0;for(;i<e.length;){const o=e[i],l=e[i+1];o<t&&(t=o),o>s&&(s=o),l<n&&(n=l),l>r&&(r=l),i+=2}return{width:Math.max(s-t,10),height:Math.max(r-n,10),x:t,y:n}}function yn(e,t){let n=`oneTripToPreview-${yn.uuid++}`,s;const r=new Promise(o=>{s=o}),i=o=>{const l=o.data;l.uuid===n&&(s(l.response),window.removeEventListener("message",i))};return window.addEventListener("message",i),e({uuid:n,...t}),r}yn.uuid=0;class Sc extends EventTarget{constructor(n){super();R(this,"initialZoom",1);R(this,"padding",20);R(this,"maxZoom",2);R(this,"minZoom",.5);R(this,"deviceWidth",0);R(this,"deviceHeight","auto");R(this,"position",{x:0,y:0});R(this,"scale",1);R(this,"_registedMethods",new Map);R(this,"postIframeMessage",null);R(this,"temp",{type:void 0,active:!1,positionFunc:void 0,popperPosition:[0,0],target:null});R(this,"status",{dragging:!1});this.previewer=new xo,this.previewer.setProject(n.project),this.surface=new Ic,this.getSourceByNodePath=n.getSourceByNodePath,this.preRegistMethods()}$mount(n){const s=Nc(),r=Fc(),i=Rc(),o=Oc();s.appendChild(r),s.appendChild(i),r.appendChild(o),this.domCache={viewport:s,viewcontent:r,groundAnchor:i,iframe:o};let l=!1;o.onload=()=>{console.log("onload!"),window.addEventListener("message",a=>{const u=a.data;if(!l&&u.type==="Event"&&u.name==="proxyReady"){const d=a.source,p=a.origin;this._init(),this.postIframeMessage=m=>{d.postMessage(m,p)},this.dispatchEvent(new CustomEvent("ready",{detail:{target:this.iframe}})),l=!0}})},n.appendChild(s),this.previewer.setIframe(o),this.previewer.load()}_init(){const n=o=>{console.log("resized!",this.simulator),this.domCache.viewcontent.style.height=`${o.scrollHeight}px`},r=(()=>{let o=[];return(l,a)=>{l==="wheel"&&o.length===3&&o.every(u=>u==="wheel")&&(console.log("onWheel"),this.onWheelInFrame(a)),o.unshift(l),o.length>3&&(o.length=3)}})().bind(this);window.addEventListener("message",o=>{const l=o.data;if(l.type==="Event")switch(l.name){case"wheel":case"scroll":r(l.name,l.payload.eventMeta);break;case"dragstart":this.dispatchEvent(new CustomEvent("frame:dragstart",{detail:l.payload}));break;case"mousemove":this.highlightNode(l.payload.elementInfo);break;case"dragover":this.dispatchEvent(new CustomEvent("frame:dragover",{detail:l.payload}));break;case"dragend":this.dispatchEvent(new CustomEvent("frame:dragend",{detail:l.payload}));break;case"hesitateWhenDragging":this.dispatchEvent(new CustomEvent("frame:hesitateWhenDragging",{detail:l.payload}));break;case"click":this._focusOnNode(l.payload);break;case"resizeObserver":n(l.payload);break}if(l.type==="Method"){const a=this._registedMethods.get(l.name);if(a){const u=l.uuid;a(d=>{o.source.postMessage({type:"Response",result:"success",uuid:u,response:d},o.origin)},d=>{o.source.postMessage({type:"Response",result:"failed",uuid:u,err:d},o.origin)},l.payload)}}});const i=this.domCache.viewport;i.addEventListener("mousemove",o=>{o.target===i&&this.surface.closeHighlightElem()}),i.addEventListener("wheel",this.onWheelInViewport.bind(this),{passive:!1}),this.surface.apply(this,this.domCache.groundAnchor)}preRegistMethods(){}highlightNode(n){const{target:s,rects:r}=n;if(s){const i=this.getSourceByNodePath(s);this.surface.highlightElem({source:i,rects:r})}else this.surface.closeHighlightElem()}closeHighlight(){this.surface.closeHighlightElem()}async highlightNodeByNodePath(n){const s=await this.getElementInfoByNodePath(n);this.highlightNode(s)}clearFocus(){this.surface.setFocus()}_focusOnNode(n){const{target:s,rects:r}=n.elementInfo;if(s){this.surface.closeHighlightElem();const i=this.getSourceByNodePath(s);this.surface.setFocus({source:i,rects:r})}else this.surface.setFocus()}_calculateToViewport(n,s){const r=this.scale,i=this.position;s[0]=n[0]*r+i.x,s[1]=n[1]*r+i.y}syncGroundAnchor(){const n=[0,0];this._calculateToViewport(n,n),this.domCache.groundAnchor.style.transform=`translate(${n[0]}px, ${n[1]}px)`}resolveEventOffsetToViewport(n){const{clientX:s,clientY:r}=n,i=this.domCache.viewcontent.getBoundingClientRect();return[s*this.scale+i.x,r*this.scale+i.y]}onWheelInViewport(n){const[s,r]=this.resolveEventOffset(n);n.preventDefault(),this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,r)}onWheelInFrame(n){const[s,r]=this.resolveEventOffsetToViewport(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,r)}_onWheel(n,s,r,i,o){n?(r=-r,this.zoomHandler(i,o,r)):this.panHandler(-s,-r)}resolveEventOffset(n){const{clientX:s,clientY:r}=n,{x:i,y:o}=this.domCache.viewport.getBoundingClientRect();return[s-i,r-o]}zoomHandler(n,s,r){if(this._zooming)return;this._zooming=!0;const i=this.scale;let o=i;const l=r>0?1.05:1/1.05;o*=l,o=Math.min(this.maxZoom,Math.max(this.minZoom,o));const{x:a,y:u}=this.position,d=o/i,p=n-(n-a)*d,m=s-(s-u)*d;this.scale=o,Object.assign(this.position,{x:p,y:m}),this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!0}})),this._zooming=!1}panHandler(n,s){this._panning||(this._panning=!0,this.position.x+=n,this.position.y+=s,this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!1}})),this._panning=!1)}_resetTransform(){const{x:n,y:s}=this.position,r=this.scale,i=`matrix(${r}, 0, 0, ${r}, ${n}, ${s})`;this.domCache.viewcontent.style[Co]=i,this.syncGroundAnchor()}_resolveEventOffsetInFrame(n){const{clientX:s,clientY:r}=n,{x:i,y:o}=this.position,l=this.scale,a=this.domCache.viewport.getBoundingClientRect();return[s*l+i+a.x,r*l+o+a.y]}doDrag(n,s,r){this.postIframeMessage({type:"Event",name:"startDragging"}),this.status.dragging=!0;const i=document.importNode(n);i.style.position="fixed",i.style["pointer-events"]="none",document.body.appendChild(i);const o=p=>{if(s.execute)return;s.execute=!0;const[m,x]=this._resolveEventOffsetInFrame(p.detail.eventMeta);i.style.left=`${m}px`,i.style.top=`${x}px`,s({elementInfo:p.detail.elementInfo,eventMeta:p.detail.eventMeta,inFrame:!0,notAllowed:p.detail.notAllowed},l)};function l(){s.execute=!1}const a=p=>{if(s.execute)return;s.execute=!0;const{clientX:m,clientY:x}=p;i.style.left=`${m}px`,i.style.top=`${x}px`,s({elementInfo:null,eventMeta:p,inFrame:!1},l)},u=async p=>{i.remove(),this.removeEventListener("frame:dragend",u),this.removeEventListener("frame:dragover",o),this.removeEventListener("frame:hesitateWhenDragging",d),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",u),r&&await r(),this.postIframeMessage({type:"Event",name:"stopDragging"})},d=p=>{this.surface.closeAll()};this.addEventListener("frame:dragend",u),this.addEventListener("frame:dragover",o),this.addEventListener("frame:hesitateWhenDragging",d),document.addEventListener("mousemove",a),document.addEventListener("mouseup",u)}setCursorInFrame(n){this.postIframeMessage({type:"Method",name:"setCursor",payload:{cursor:n}})}async getElementInfoByNodePath(n){const s=await yn(this.postIframeMessage,{type:"Method",name:"getElementInfoByNodePath",payload:{nodePath:n}});return console.log(s),s}async getElementsInfoByNodePath(n){return await yn(this.postIframeMessage,{type:"Method",name:"getElementsInfoByNodePath",payload:{nodePaths:n}})}startObserveRootElem(n){this.postIframeMessage({type:"Method",name:"startObserveRootNodeSize",payload:{selector:n}})}registMethod(n,s){const{isAsync:r,body:i}=s,o=r?async(l,a,...u)=>{if(!s.execute){o.execute=!0;try{const d=await i.call(this,...u);l(d)}catch(d){a(d)}finally{o.execute=!1}}}:async(l,a,...u)=>{if(!s.execute){o.execute=!0;try{const d=i.call(this,...u);l(d)}catch(d){a(d)}finally{o.execute=!1}}};this._registedMethods.set(n,o)}}function Nc(){return vn({tag:"div",style:{position:"relative",left:0,top:0,width:"100%",height:"100%","user-select":"none",overflow:"hidden",background:"rgba(0,0,0,0.1)"}})}function Fc(){return vn({tag:"div",style:{position:"absolute",top:0,left:0,transformOrigin:"top left",width:"100%",overflow:"hidden",background:"#fff",userSelect:"none"}})}function Rc(){return vn({tag:"div",style:{position:"absolute",left:0,top:0,width:0,height:0}})}function Oc(){return vn({tag:"iframe",style:{width:"100%",height:"100%",border:"none"},attributes:{scrolling:"no"}})}const Os={"index.html":{file:{contents:`<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
    </head>
    <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"><\/script>
    </body>
</html>`}},"package.json":{file:{contents:`{
    "name": "antd-demo",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },
    "devDependencies": {
        "@vitejs/plugin-react": "^4.2.0",
        "rollup-plugin-external-globals": "^0.9.1",
        "vite": "^5.0.4"
    },
    "dependencies": {
        "antd": "^5.11.5",
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    }
}
`}},src:{directory:{"App.jsx":{file:{contents:`import { useState } from 'react'
import './App.css'
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Button type="primary">Primary Button</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App`}},"Empty.jsx":{file:{contents:`import './empty.css';

export default function () {
    return (
        <div className="empty-slot" emptyslot="true"></div>
    )
}`}},"empty.css":{file:{contents:`.empty-slot{
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
}`}},"index.css":{file:{contents:`body {
    margin: 0;
    place-items: center;
    min-width: 320px;
    min-height: 300px;
}
button {
    cursor: inherit !important;
}
[ide-dragging='true'] {
    opacity: 0.5!important;
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
`}},"main.jsx":{file:{contents:`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './proxy.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`}},"proxy.js":{file:{contents:`(function () {
    
const status = {
    isDragging: false,
    mouseDownPosition: [],
    draggingElem: null,
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

function lockTarget(e) {
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
    while(p !== document.body) {
        if(p.hasAttribute('nodepath')) {
            if(skipFirstParent) {
                skipFirstParent = false;
                p = p.parentNode;
                continue;
            }
            callback(p)
            flag = true;
        }
        p = p.parentNode;
    }
    return flag;
}

function resolveEvent(e) {
    return pickKeys(e, [
        'ctrlKey',
        'clientX',
        'clientY',
        'deltaX',
        'deltaY',
    ])
}

window.addEventListener('wheel', (e) => {
    if(e.ctrlKey) { 
        e.preventDefault();
    } 
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
    e.preventDefault();
    e.stopPropagation();
    status.mouseDownPosition = [e.clientX, e.clientY];
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
                status.draggingElem = element;
                element.setAttribute('ide-dragging', true)
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

function expandContainerGap(elem) {
    if(elem.getAttribute('ide-iscontainer') === 'true'){
        elem.setAttribute('dropgap', true);
    }
}

function releaseContainerGap() {
    const elems = document.querySelectorAll(\`[dropgap]\`);
    Array.from(elems).forEach(el => {
        el.removeAttribute('dropgap')
    })
    hesitateWhenDragging(false);
}

function releaseDragging() {
    status.isDragging = false;
    if(status.draggingElem) {
        status.draggingElem.removeAttribute('ide-dragging')
    }
    status.draggingElem = null;
    releaseContainerGap();
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
    e.stopPropagation();
    const element = lockTarget(e);
    
    if(status.isDragging) {
        if(status.draggingElem && status.draggingElem.contains(element)) {
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
                status.isDragging = true;
                break;
            case 'stopDragging':
                releaseDragging();
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
    startObserveRootNodeSize(payload) { 
        const elem = document.querySelector(payload.selector);
        if(elem) {
            observer.observe(elem);
        }
    },
}

postMessageToIDE({
    type: 'Event',
    name: 'proxyReady',
    payload: {}
})
})();`}}}},"vite.config.js":{file:{contents:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import externalGlobals from "rollup-plugin-external-globals"; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["antd"],
      plugins: [
        externalGlobals({
          "antd": "antd",
        }),
      ],
    }
  }
})
`}}},$c="View",Lc=[{concept:"ViewElement",tag:"Flex",bindAttrs:[{concept:"BindAttribute",name:"gap",value:"middle"}],children:[{concept:"ViewElement",tag:"Button",innerText:"button1"},{concept:"ViewElement",tag:"Button",innerText:"button2",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}]},{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"link"}]}]}],Dc={concept:$c,elements:Lc};let Hi=class{constructor(){R(this,"tag","");R(this,"isContainer",!1)}};const Ht={ROW:"row",COLUMN:"column",FREE:"free",AUTO:"auto"};class Bc extends Hi{constructor(){super(...arguments);R(this,"isContainer",!0);R(this,"direction",Ht.ROW)}}class $s{constructor(){R(this,"parentNode",null)}getSiblings(){}getChildren(){}getChildIndex(t){}insertNodeBefore(t,n){}insertNodeAfter(t,n){}clone(){}deleteChild(t){}delete(){}addChild(t){}}let cs=class extends $s{constructor(n){super();R(this,"elements",[]);const s=Ui(this);n.elements&&(this.elements=n.elements.map(s))}get nodePath(){return"rootview"}getChildren(){return this.elements}getChildIndex(n){return this.elements.findIndex(s=>s===n)}insertNodeBefore(n,s){s.parentNode&&s.delete();const r=this.getChildIndex(n);r!==-1&&(this.elements.splice(r,0,s),s.parentNode=this)}insertNodeAfter(n,s){s.parentNode&&s.delete();const r=this.getChildIndex(n);r!==-1&&(this.elements.splice(r+1,0,s),s.parentNode=this)}addChild(n){n.parentNode&&n.delete(),this.elements.push(n),n.parentNode=this}deleteChild(n){const s=this.getChildIndex(n);s!==-1&&this.elements.splice(s,1)}toReactFCFile(){const n=new Set;let s="";this.elements.forEach(o=>{s+=o.toReactFCComponent(n)});let r="";return n.size>0&&(r="import { ",r+=Array.from(n).join(","),r+='} from "antd";'),`
import React from 'react';
import EmptySlot from './Empty.jsx'
${r}
function View() {
    return (
        <>
            ${s}
        </>
    )
}
export default View;
`}toVueTmplFile(){let n="";return this.elements.forEach(r=>{n+=r.toVueTmplComponent()}),`
<template>
    ${n}
</template>
        `}};class Pt extends $s{constructor(n){super();R(this,"tag","");R(this,"innerText","");R(this,"children",[]);R(this,"bindAttrs",[]);if(this.tag=n.tag,this.innerText=n.innerText,n.children){const s=Ui(this);this.children=n.children.map(s)}if(n.bindAttrs){const s=Hc(this);this.bindAttrs=n.bindAttrs.map(s)}}get nodePath(){const n=this.parentNode;let s;n instanceof Pt&&(s=n.children),n instanceof cs&&(s=n.elements);const r=s.findIndex(i=>i===this);return r===-1?null:`${n.nodePath}.${r}`}getChildren(){return this.children}getChildIndex(n){return this.children.findIndex(s=>s===n)}insertNodeBefore(n,s){s.parentNode&&s.delete();const r=this.getChildIndex(n);r!==-1&&(this.children.splice(r,0,s),s.parentNode=this)}insertNodeAfter(n,s){s.parentNode&&s.delete();const r=this.getChildIndex(n);r!==-1&&(this.children.splice(r+1,0,s),s.parentNode=this)}addChild(n){n.parentNode&&n.delete(),this.children.push(n),n.parentNode=this}toReactFCComponent(n){n.add(this.tag);let s=`<${this.tag} nodepath="${this.nodePath}" ide-iscontainer="${this.elementMeta.isContainer}" ${this.bindAttrs.map(r=>r.toReactFCComponent()).join(" ")}>`;return this.children&&(this.children.length===0&&this.elementMeta.isContainer&&(s+="<EmptySlot />"),this.children.forEach(r=>{s+=r.toReactFCComponent(n)})),this.innerText&&(s+=this.innerText),s+=`</${this.tag}>
`,s}toVueTmplComponent(){let n=`<${this.tag} nodepath="${this.nodePath}" ide-iscontainer="${this.elementMeta.isContainer}" ${this.bindAttrs.map(s=>s.toReactFCComponent()).join(" ")}>`;return this.children&&this.children.forEach(s=>{n+=s.toVueTmplComponent()}),this.innerText&&(n+=this.innerText),n+=`</${this.tag}>
`,n}getSiblings(){const n=this.parentNode;let s;n instanceof Pt&&(s=n.children),n instanceof cs&&(s=n.elements);const r=s.findIndex(i=>i===this);return{prev:s[r-1],after:s[r+1]}}deleteChild(n){const s=this.getChildIndex(n);s!==-1&&this.children.splice(s,1)}delete(){this.parentNode.deleteChild(this)}}class jc extends $s{constructor(n){super();R(this,"name","");R(this,"value","");this.name=n.name,this.value=n.value}toReactFCComponent(){return`${this.name}="${this.value}"`}toVueTmplComponent(){return`${this.name}="${this.value}"`}}function Ls(e){switch(e.tag){case"Button":return new Hi;case"Flex":return new Bc(e)}}function kc(e){return new cs(e)}function Ui(e){return t=>{const n=new Pt(t);return n.elementMeta=Ls(n),n.parentNode=e,n}}function Hc(e){return t=>{const n=new jc(t);return n.parentNode=e,n}}function ht(e,t){const n=t.split(".");n.shift();let s=e.elements[n.shift()];for(;n.length;){const r=n.shift();s=s.children[r]}return s}function Mr(e){return e*e}function Kn(e,t){return Mr(e[0]-t[0])+Mr(e[1]-t[1])}function Uc(e,t){const n=t.slice(0,2),s=t.slice(2,4),r=Kn(n,s);if(r===0)return Kn(e,n);let i=((e[0]-n[0])*(s[0]-n[0])+(e[1]-n[1])*(s[1]-n[1]))/r;return i=Math.max(0,Math.min(1,i)),Kn(e,[n[0]+i*(s[0]-n[0]),n[1]+i*(s[1]-n[1])])}function Vi(e){return[[e.left,e.top,e.right,e.top],[e.left,e.bottom,e.right,e.bottom]]}function Wi(e){return[[e.left,e.top,e.left,e.bottom],[e.right,e.top,e.right,e.bottom]]}function Ki(e,t){return e[0]+=t,e[2]+=t,e}function zi(e,t){return e[1]+=t,e[3]+=t,e}function Vc(e,t){return e[0]===e[2]?Ki(e,t):zi(e,t)}function Wc(e,t){var n;return(n=t.elemStyle)!=null&&n.inline?Wi(e):Vi(e)}function Kc(e){return[e.x,e.y,e.width,e.height]}const zc={[Ht.ROW]:{getSegs:Wi,shiftHighlighter:Ki},[Ht.COLUMN]:{getSegs:Vi,shiftHighlighter:zi},[Ht.AUTO]:{getSegs:Wc,shiftHighlighter:Vc}},un={PRE:"pre",AFTER:"after"};async function qc(e,t,n,s){const r=await e.getElementsInfoByNodePath(n),{getSegs:i,shiftHighlighter:o}=zc[s];let l=1/0,a,u,d;return n.forEach(p=>{r[p].rects.forEach(x=>{i(x,r[p]).forEach((T,H)=>{const U=Uc(t,T);U<l&&(l=U,a=T,u=p,d=H===0?un.PRE:un.AFTER)})})}),o(a,d===un.PRE?1.5:-1.5),{nearestSeg:a,nodepath:u,loc:d}}const Pe=kc(Dc);Os.src.directory["App.jsx"]={file:{contents:Pe.toReactFCFile()}};console.log(Os);const k=new Sc({project:Os,getSourceByNodePath(e){return ht(Pe,e)}});k.registMethod("getSubNodePath",{isAsync:!1,body(e){return ht(Pe,e).children.map(n=>n.nodePath)}});k.registMethod("getSiblingNodePath",{isAsync:!1,body(e){const t=ht(Pe,e),{prev:n,after:s}=t.getSiblings();return{prev:n&&n.nodePath,after:s&&s.nodePath}}});k.registMethod("getParentNodePath",{isAsync:!1,body(e){return ht(Pe,e).parentNode.nodePath}});k.addEventListener("ready",()=>{k.startObserveRootElem("#root")});k.$mount(document.querySelector("#app"));function Yc(){k.previewer.writeFile("src/App.jsx",Pe.toReactFCFile())}function Ds(e,t){k.clearFocus();const n={nodePath:"",loc:"",isEmptySlot:!1};k.doDrag(e,async(s,r)=>{var i,o,l,a;if(console.log((i=s.elementInfo)==null?void 0:i.target),!s.notAllowed&&s.inFrame){const u=[s.eventMeta.clientX,s.eventMeta.clientY];let d,p=Ht.AUTO;if(console.log(s),(o=s.elementInfo)!=null&&o.isEmptySlot){const x=s.elementInfo,S=Kc(x.rects[0]);k.surface.highlightSeg(!1),k.surface.highlightEmptySlot(!0,S),k.highlightNodeByNodePath(x.target),n.nodePath=x.target,n.isEmptySlot=!0,k.setCursorInFrame("copy"),r();return}let m;if((l=s.elementInfo)!=null&&l.target){const x=ht(Pe,s.elementInfo.target);if(console.log(x),x){let S=x;S.elementMeta.isContainer||(S=S.parentNode),(a=S==null?void 0:S.elementMeta)!=null&&a.direction&&(p=S.elementMeta.direction),d=S.getChildren().filter(T=>T!==t).map(T=>T.nodePath),m=S.nodePath}}else d=Pe.getChildren().map(x=>x.nodePath);if(d.length>0){console.log(d);const{nearestSeg:x,nodepath:S,loc:T}=await qc(k,u,d,p);k.surface.highlightSeg(!0,x),k.surface.highlightEmptySlot(!1),m?k.highlightNodeByNodePath(m):k.closeHighlight(),n.isEmptySlot=!1,n.nodePath=S,n.loc=T,k.setCursorInFrame("copy"),r();return}k.setCursorInFrame("grabbing")}n.nodePath="",n.loc="",k.surface.highlightSeg(!1),k.surface.highlightEmptySlot(!1),k.closeHighlight(),r()},()=>{if(n.nodePath){const s=ht(Pe,n.nodePath);s&&(n.isEmptySlot?s.addChild(t):(s.parentNode[n.loc===un.PRE?"insertNodeBefore":"insertNodeAfter"](s,t),console.log(Pe)),Yc())}k.surface.highlightSeg(!1),k.surface.highlightEmptySlot(!1),k.closeHighlight(),k.setCursorInFrame("auto")})}const Sr=document.getElementById("button");let Xc=0;Sr.addEventListener("mousedown",e=>{e.preventDefault(),e.stopPropagation();const t=new Pt({concept:"ViewElement",tag:"Button",innerText:"buttonX"+Xc++});t.elementMeta=Ls(t),Ds(Sr,t)});const Nr=document.getElementById("Flex");Nr.addEventListener("mousedown",e=>{e.preventDefault(),e.stopPropagation();const t=new Pt({concept:"ViewElement",tag:"Flex"});t.elementMeta=Ls(t),Ds(Nr,t)});k.addEventListener("frame:dragstart",e=>{const t=e.detail.elementInfo.target,n=ht(Pe,t),s=document.createElement("div");s.innerText=n.tag,Ds(s,n)});
