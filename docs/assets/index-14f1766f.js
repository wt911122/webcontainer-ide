var qo=Object.defineProperty;var Yo=(e,t,n)=>t in e?qo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var L=(e,t,n)=>(Yo(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Xo=("transform"in document.documentElement.style?"transform":void 0)||("-webkit-transform"in document.documentElement.style?"-webkit-transform":void 0)||("-moz-transform"in document.documentElement.style?"-moz-transform":void 0)||("-ms-transform"in document.documentElement.style?"-ms-transform":void 0)||("-o-transform"in document.documentElement.style?"-o-transform":void 0),hn=function(e={}){let t,n;const s=e.tag,r=document.createElement(s);if(s==="style")return r.type="text/css",r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText)),r;if(e.attributes)for(t in e.attributes)n=e.attributes[t],r.setAttribute(t,n);if(e.style)for(t in e.style)n=e.style[t],r.style[t]=n;if(e.data)for(t in e.data)n=e.data[t],r.dataset[t]=n;return e.className&&e.className.forEach(o=>{console.log(o),r.classList.add(o)}),e.textContent!==void 0&&(r.textContent=e.textContent),e.childNodes&&[].concat(e.childNodes).forEach(o=>{r.appendChild(o)}),r};function cs(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const q={},vt=[],Pe=()=>{},Jo=()=>!1,Zo=/^on[^a-z]/,pn=e=>Zo.test(e),us=e=>e.startsWith("onUpdate:"),re=Object.assign,fs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Qo=Object.prototype.hasOwnProperty,D=(e,t)=>Qo.call(e,t),M=Array.isArray,Et=e=>gn(e)==="[object Map]",Rr=e=>gn(e)==="[object Set]",R=e=>typeof e=="function",ee=e=>typeof e=="string",mn=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",$r=e=>(Y(e)||R(e))&&R(e.then)&&R(e.catch),Fr=Object.prototype.toString,gn=e=>Fr.call(e),Go=e=>gn(e).slice(8,-1),Dr=e=>gn(e)==="[object Object]",ds=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sn=cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ei=/-(\w)/g,xt=yn(e=>e.replace(ei,(t,n)=>n?n.toUpperCase():"")),ti=/\B([A-Z])/g,St=yn(e=>e.replace(ti,"-$1").toLowerCase()),Br=yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mn=yn(e=>e?`on${Br(e)}`:""),wt=(e,t)=>!Object.is(e,t),Nn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},on=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ni=e=>{const t=parseFloat(e);return isNaN(t)?e:t},si=e=>{const t=ee(e)?Number(e):NaN;return isNaN(t)?e:t};let Ls;const Kn=()=>Ls||(Ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ke(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ee(s)?li(s):ke(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(ee(e)||Y(e))return e}const ri=/;(?![^(]*\))/g,oi=/:([^]+)/,ii=/\/\*[^]*?\*\//g;function li(e){const t={};return e.replace(ii,"").split(ri).forEach(n=>{if(n){const s=n.split(oi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function $e(e){let t="";if(ee(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const s=$e(e[n]);s&&(t+=s+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ai="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ci=cs(ai);function Lr(e){return!!e||e===""}const ui=e=>ee(e)?e:e==null?"":M(e)||Y(e)&&(e.toString===Fr||!R(e.toString))?JSON.stringify(e,kr,2):String(e),kr=(e,t)=>t&&t.__v_isRef?kr(e,t.value):Et(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Rr(t)?{[`Set(${t.size})`]:[...t.values()]}:Y(t)&&!M(t)&&!Dr(t)?String(t):t;let Ce;class fi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function di(e,t=Ce){t&&t.active&&t.effects.push(e)}function hi(){return Ce}const hs=e=>{const t=new Set(e);return t.w=0,t.n=0,t},jr=e=>(e.w&Xe)>0,Hr=e=>(e.n&Xe)>0,pi=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Xe},mi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];jr(r)&&!Hr(r)?r.delete(e):t[n++]=r,r.w&=~Xe,r.n&=~Xe}t.length=n}},Wn=new WeakMap;let Rt=0,Xe=1;const Vn=30;let Te;const at=Symbol(""),zn=Symbol("");class ps{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,di(this,s)}run(){if(!this.active)return this.fn();let t=Te,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,qe=!0,Xe=1<<++Rt,Rt<=Vn?pi(this):ks(this),this.fn()}finally{Rt<=Vn&&mi(this),Xe=1<<--Rt,Te=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(ks(this),this.onStop&&this.onStop(),this.active=!1)}}function ks(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Ur=[];function Pt(){Ur.push(qe),qe=!1}function At(){const e=Ur.pop();qe=e===void 0?!0:e}function pe(e,t,n){if(qe&&Te){let s=Wn.get(e);s||Wn.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=hs()),Kr(r)}}function Kr(e,t){let n=!1;Rt<=Vn?Hr(e)||(e.n|=Xe,n=!jr(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Le(e,t,n,s,r,o){const i=Wn.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&M(e)){const a=Number(s);i.forEach((c,d)=>{(d==="length"||!mn(d)&&d>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":M(e)?ds(n)&&l.push(i.get("length")):(l.push(i.get(at)),Et(e)&&l.push(i.get(zn)));break;case"delete":M(e)||(l.push(i.get(at)),Et(e)&&l.push(i.get(zn)));break;case"set":Et(e)&&l.push(i.get(at));break}if(l.length===1)l[0]&&qn(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);qn(hs(a))}}function qn(e,t){const n=M(e)?e:[...e];for(const s of n)s.computed&&js(s);for(const s of n)s.computed||js(s)}function js(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const gi=cs("__proto__,__v_isRef,__isVue"),Wr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mn)),Hs=yi();function yi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=B(this);for(let o=0,i=this.length;o<i;o++)pe(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(B)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pt();const s=B(this)[t].apply(this,n);return At(),s}}),e}function vi(e){const t=B(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Vr{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,s){const r=this._isReadonly,o=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw"&&s===(r?o?Ni:Xr:o?Yr:qr).get(t))return t;const i=M(t);if(!r){if(i&&D(Hs,n))return Reflect.get(Hs,n,s);if(n==="hasOwnProperty")return vi}const l=Reflect.get(t,n,s);return(mn(n)?Wr.has(n):gi(n))||(r||pe(t,"get",n),o)?l:ue(l)?i&&ds(n)?l:l.value:Y(l)?r?Jr(l):it(l):l}}class zr extends Vr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(jt(o)&&ue(o)&&!ue(s))return!1;if(!this._shallow&&(!Yn(s)&&!jt(s)&&(o=B(o),s=B(s)),!M(t)&&ue(o)&&!ue(s)))return o.value=s,!0;const i=M(t)&&ds(n)?Number(n)<t.length:D(t,n),l=Reflect.set(t,n,s,r);return t===B(r)&&(i?wt(s,o)&&Le(t,"set",n,s):Le(t,"add",n,s)),l}deleteProperty(t,n){const s=D(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Le(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!mn(n)||!Wr.has(n))&&pe(t,"has",n),s}ownKeys(t){return pe(t,"iterate",M(t)?"length":at),Reflect.ownKeys(t)}}class Ei extends Vr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const bi=new zr,_i=new Ei,xi=new zr(!0),ms=e=>e,vn=e=>Reflect.getPrototypeOf(e);function Xt(e,t,n=!1,s=!1){e=e.__v_raw;const r=B(e),o=B(t);n||(wt(t,o)&&pe(r,"get",t),pe(r,"get",o));const{has:i}=vn(r),l=s?ms:n?Es:vs;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function Jt(e,t=!1){const n=this.__v_raw,s=B(n),r=B(e);return t||(wt(e,r)&&pe(s,"has",e),pe(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Zt(e,t=!1){return e=e.__v_raw,!t&&pe(B(e),"iterate",at),Reflect.get(e,"size",e)}function Us(e){e=B(e);const t=B(this);return vn(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function Ks(e,t){t=B(t);const n=B(this),{has:s,get:r}=vn(n);let o=s.call(n,e);o||(e=B(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?wt(t,i)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function Ws(e){const t=B(this),{has:n,get:s}=vn(t);let r=n.call(t,e);r||(e=B(e),r=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return r&&Le(t,"delete",e,void 0),o}function Vs(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function Qt(e,t){return function(s,r){const o=this,i=o.__v_raw,l=B(i),a=t?ms:e?Es:vs;return!e&&pe(l,"iterate",at),i.forEach((c,d)=>s.call(r,a(c),a(d),o))}}function Gt(e,t,n){return function(...s){const r=this.__v_raw,o=B(r),i=Et(o),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=r[e](...s),d=n?ms:t?Es:vs;return!t&&pe(o,"iterate",a?zn:at),{next(){const{value:h,done:y}=c.next();return y?{value:h,done:y}:{value:l?[d(h[0]),d(h[1])]:d(h),done:y}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wi(){const e={get(o){return Xt(this,o)},get size(){return Zt(this)},has:Jt,add:Us,set:Ks,delete:Ws,clear:Vs,forEach:Qt(!1,!1)},t={get(o){return Xt(this,o,!1,!0)},get size(){return Zt(this)},has:Jt,add:Us,set:Ks,delete:Ws,clear:Vs,forEach:Qt(!1,!0)},n={get(o){return Xt(this,o,!0)},get size(){return Zt(this,!0)},has(o){return Jt.call(this,o,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Qt(!0,!1)},s={get(o){return Xt(this,o,!0,!0)},get size(){return Zt(this,!0)},has(o){return Jt.call(this,o,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Qt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Gt(o,!1,!1),n[o]=Gt(o,!0,!1),t[o]=Gt(o,!1,!0),s[o]=Gt(o,!0,!0)}),[e,n,t,s]}const[Ci,Ti,Si,Pi]=wi();function gs(e,t){const n=t?e?Pi:Si:e?Ti:Ci;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(D(n,r)&&r in s?n:s,r,o)}const Ai={get:gs(!1,!1)},Ii={get:gs(!1,!0)},Mi={get:gs(!0,!1)},qr=new WeakMap,Yr=new WeakMap,Xr=new WeakMap,Ni=new WeakMap;function Oi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ri(e){return e.__v_skip||!Object.isExtensible(e)?0:Oi(Go(e))}function it(e){return jt(e)?e:ys(e,!1,bi,Ai,qr)}function $i(e){return ys(e,!1,xi,Ii,Yr)}function Jr(e){return ys(e,!0,_i,Mi,Xr)}function ys(e,t,n,s,r){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Ri(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function bt(e){return jt(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function jt(e){return!!(e&&e.__v_isReadonly)}function Yn(e){return!!(e&&e.__v_isShallow)}function Zr(e){return bt(e)||jt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Qr(e){return on(e,"__v_skip",!0),e}const vs=e=>Y(e)?it(e):e,Es=e=>Y(e)?Jr(e):e;function Fi(e){qe&&Te&&(e=B(e),Kr(e.dep||(e.dep=hs())))}function Di(e,t){e=B(e);const n=e.dep;n&&qn(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function De(e){return ue(e)?e.value:e}const Bi={get:(e,t,n)=>De(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ue(r)&&!ue(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Gr(e){return bt(e)?e:new Proxy(e,Bi)}class Li{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ps(t,()=>{this._dirty||(this._dirty=!0,Di(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=B(this);return Fi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ki(e,t,n=!1){let s,r;const o=R(e);return o?(s=e,r=Pe):(s=e.get,r=e.set),new Li(s,r,o||!r,n)}function Ye(e,t,n,s){let r;try{r=s?e(...s):e()}catch(o){En(o,t,n)}return r}function be(e,t,n,s){if(R(e)){const o=Ye(e,t,n,s);return o&&$r(o)&&o.catch(i=>{En(i,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(be(e[o],t,n,s));return r}function En(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,l=n;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,i,l)===!1)return}o=o.parent}const a=t.appContext.config.errorHandler;if(a){Ye(a,null,10,[e,i,l]);return}}ji(e,n,r,s)}function ji(e,t,n,s=!0){console.error(e)}let Ht=!1,Xn=!1;const le=[];let Re=0;const _t=[];let Be=null,st=0;const eo=Promise.resolve();let bs=null;function Hi(e){const t=bs||eo;return e?t.then(this?e.bind(this):e):t}function Ui(e){let t=Re+1,n=le.length;for(;t<n;){const s=t+n>>>1,r=le[s],o=Ut(r);o<e||o===e&&r.pre?t=s+1:n=s}return t}function _s(e){(!le.length||!le.includes(e,Ht&&e.allowRecurse?Re+1:Re))&&(e.id==null?le.push(e):le.splice(Ui(e.id),0,e),to())}function to(){!Ht&&!Xn&&(Xn=!0,bs=eo.then(so))}function Ki(e){const t=le.indexOf(e);t>Re&&le.splice(t,1)}function Wi(e){M(e)?_t.push(...e):(!Be||!Be.includes(e,e.allowRecurse?st+1:st))&&_t.push(e),to()}function zs(e,t=Ht?Re+1:0){for(;t<le.length;t++){const n=le[t];n&&n.pre&&(le.splice(t,1),t--,n())}}function no(e){if(_t.length){const t=[...new Set(_t)];if(_t.length=0,Be){Be.push(...t);return}for(Be=t,Be.sort((n,s)=>Ut(n)-Ut(s)),st=0;st<Be.length;st++)Be[st]();Be=null,st=0}}const Ut=e=>e.id==null?1/0:e.id,Vi=(e,t)=>{const n=Ut(e)-Ut(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function so(e){Xn=!1,Ht=!0,le.sort(Vi);const t=Pe;try{for(Re=0;Re<le.length;Re++){const n=le[Re];n&&n.active!==!1&&Ye(n,null,14)}}finally{Re=0,le.length=0,no(),Ht=!1,bs=null,(le.length||_t.length)&&so()}}function zi(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||q;let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:y}=s[d]||q;y&&(r=n.map(x=>ee(x)?x.trim():x)),h&&(r=n.map(ni))}let l,a=s[l=Mn(t)]||s[l=Mn(xt(t))];!a&&o&&(a=s[l=Mn(St(t))]),a&&be(a,e,6,r);const c=s[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,be(c,e,6,r)}}function ro(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!R(e)){const a=c=>{const d=ro(c,t,!0);d&&(l=!0,re(i,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(Y(e)&&s.set(e,null),null):(M(o)?o.forEach(a=>i[a]=null):re(i,o),Y(e)&&s.set(e,i),i)}function bn(e,t){return!e||!pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,St(t))||D(e,t))}let ae=null,oo=null;function ln(e){const t=ae;return ae=e,oo=e&&e.type.__scopeId||null,t}function Ct(e,t=ae,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&sr(-1);const o=ln(t);let i;try{i=e(...r)}finally{ln(o),s._d&&sr(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function On(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:l,attrs:a,emit:c,render:d,renderCache:h,data:y,setupState:x,ctx:O,inheritAttrs:T}=e;let k,j;const H=ln(e);try{if(n.shapeFlag&4){const I=r||s,J=I;k=Oe(d.call(J,I,h,o,x,y,O)),j=a}else{const I=t;k=Oe(I.length>1?I(o,{attrs:a,slots:l,emit:c}):I(o,null)),j=t.props?a:qi(a)}}catch(I){Lt.length=0,En(I,e,1),k=se(_e)}let K=k;if(j&&T!==!1){const I=Object.keys(j),{shapeFlag:J}=K;I.length&&J&7&&(i&&I.some(us)&&(j=Yi(j,i)),K=Je(K,j))}return n.dirs&&(K=Je(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),k=K,ln(H),k}const qi=e=>{let t;for(const n in e)(n==="class"||n==="style"||pn(n))&&((t||(t={}))[n]=e[n]);return t},Yi=(e,t)=>{const n={};for(const s in e)(!us(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Xi(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:a}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?qs(s,i,c):!!i;if(a&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const y=d[h];if(i[y]!==s[y]&&!bn(c,y))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?qs(s,i,c):!0:!!i;return!1}function qs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!bn(n,o))return!0}return!1}function Ji({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Zi=Symbol.for("v-ndc"),Qi=e=>e.__isSuspense;function Gi(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Wi(e)}const en={};function Rn(e,t,n){return io(e,t,n)}function io(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=q){var l;const a=hi()===((l=oe)==null?void 0:l.scope)?oe:null;let c,d=!1,h=!1;if(ue(e)?(c=()=>e.value,d=Yn(e)):bt(e)?(c=()=>e,s=!0):M(e)?(h=!0,d=e.some(I=>bt(I)||Yn(I)),c=()=>e.map(I=>{if(ue(I))return I.value;if(bt(I))return lt(I);if(R(I))return Ye(I,a,2)})):R(e)?t?c=()=>Ye(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return y&&y(),be(e,a,3,[x])}:c=Pe,t&&s){const I=c;c=()=>lt(I())}let y,x=I=>{y=H.onStop=()=>{Ye(I,a,4),y=H.onStop=void 0}},O;if(Wt)if(x=Pe,t?n&&be(t,a,3,[c(),h?[]:void 0,x]):c(),r==="sync"){const I=Xl();O=I.__watcherHandles||(I.__watcherHandles=[])}else return Pe;let T=h?new Array(e.length).fill(en):en;const k=()=>{if(H.active)if(t){const I=H.run();(s||d||(h?I.some((J,fe)=>wt(J,T[fe])):wt(I,T)))&&(y&&y(),be(t,a,3,[I,T===en?void 0:h&&T[0]===en?[]:T,x]),T=I)}else H.run()};k.allowRecurse=!!t;let j;r==="sync"?j=k:r==="post"?j=()=>de(k,a&&a.suspense):(k.pre=!0,a&&(k.id=a.uid),j=()=>_s(k));const H=new ps(c,j);t?n?k():T=H.run():r==="post"?de(H.run.bind(H),a&&a.suspense):H.run();const K=()=>{H.stop(),a&&a.scope&&fs(a.scope.effects,H)};return O&&O.push(K),K}function el(e,t,n){const s=this.proxy,r=ee(e)?e.includes(".")?lo(s,e):()=>s[e]:e.bind(s,s);let o;R(t)?o=t:(o=t.handler,n=t);const i=oe;Tt(this);const l=io(r,o.bind(s),n);return i?Tt(i):ct(),l}function lo(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function lt(e,t){if(!Y(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))lt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)lt(e[n],t);else if(Rr(e)||Et(e))e.forEach(n=>{lt(n,t)});else if(Dr(e))for(const n in e)lt(e[n],t);return e}function xs(e,t){const n=ae;if(n===null)return e;const s=Tn(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,l,a,c=q]=t[o];i&&(R(i)&&(i={mounted:i,updated:i}),i.deep&&lt(l),r.push({dir:i,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ge(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let a=l.dir[s];a&&(Pt(),be(a,n,8,[e.el,l,e,t]),At())}}const Ve=Symbol("_leaveCb"),tn=Symbol("_enterCb");function tl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ho(()=>{e.isMounted=!0}),po(()=>{e.isUnmounting=!0}),e}const ve=[Function,Array],ao={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ve,onEnter:ve,onAfterEnter:ve,onEnterCancelled:ve,onBeforeLeave:ve,onLeave:ve,onAfterLeave:ve,onLeaveCancelled:ve,onBeforeAppear:ve,onAppear:ve,onAfterAppear:ve,onAppearCancelled:ve},nl={name:"BaseTransition",props:ao,setup(e,{slots:t}){const n=Ul(),s=tl();let r;return()=>{const o=t.default&&uo(t.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(const T of o)if(T.type!==_e){i=T;break}}const l=B(e),{mode:a}=l;if(s.isLeaving)return $n(i);const c=Ys(i);if(!c)return $n(i);const d=Jn(c,l,s,n);Zn(c,d);const h=n.subTree,y=h&&Ys(h);let x=!1;const{getTransitionKey:O}=c.type;if(O){const T=O();r===void 0?r=T:T!==r&&(r=T,x=!0)}if(y&&y.type!==_e&&(!rt(c,y)||x)){const T=Jn(y,l,s,n);if(Zn(y,T),a==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},$n(i);a==="in-out"&&c.type!==_e&&(T.delayLeave=(k,j,H)=>{const K=co(s,y);K[String(y.key)]=y,k[Ve]=()=>{j(),k[Ve]=void 0,delete d.delayedLeave},d.delayedLeave=H})}return i}}},sl=nl;function co(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Jn(e,t,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:y,onAfterLeave:x,onLeaveCancelled:O,onBeforeAppear:T,onAppear:k,onAfterAppear:j,onAppearCancelled:H}=t,K=String(e.key),I=co(n,e),J=($,Z)=>{$&&be($,s,9,Z)},fe=($,Z)=>{const z=Z[1];J($,Z),M($)?$.every(ie=>ie.length<=1)&&z():$.length<=1&&z()},xe={mode:o,persisted:i,beforeEnter($){let Z=l;if(!n.isMounted)if(r)Z=T||l;else return;$[Ve]&&$[Ve](!0);const z=I[K];z&&rt(e,z)&&z.el[Ve]&&z.el[Ve](),J(Z,[$])},enter($){let Z=a,z=c,ie=d;if(!n.isMounted)if(r)Z=k||a,z=j||c,ie=H||d;else return;let S=!1;const X=$[tn]=ge=>{S||(S=!0,ge?J(ie,[$]):J(z,[$]),xe.delayedLeave&&xe.delayedLeave(),$[tn]=void 0)};Z?fe(Z,[$,X]):X()},leave($,Z){const z=String(e.key);if($[tn]&&$[tn](!0),n.isUnmounting)return Z();J(h,[$]);let ie=!1;const S=$[Ve]=X=>{ie||(ie=!0,Z(),X?J(O,[$]):J(x,[$]),$[Ve]=void 0,I[z]===e&&delete I[z])};I[z]=e,y?fe(y,[$,S]):S()},clone($){return Jn($,t,n,s)}};return xe}function $n(e){if(_n(e))return e=Je(e),e.children=null,e}function Ys(e){return _n(e)?e.children?e.children[0]:void 0:e}function Zn(e,t){e.shapeFlag&6&&e.component?Zn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function uo(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===he?(i.patchFlag&128&&r++,s=s.concat(uo(i.children,t,l))):(t||i.type!==_e)&&s.push(l!=null?Je(i,{key:l}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}const Ft=e=>!!e.type.__asyncLoader,_n=e=>e.type.__isKeepAlive;function rl(e,t){fo(e,"a",t)}function ol(e,t){fo(e,"da",t)}function fo(e,t,n=oe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(xn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)_n(r.parent.vnode)&&il(s,t,n,r),r=r.parent}}function il(e,t,n,s){const r=xn(t,e,s,!0);mo(()=>{fs(s[t],r)},n)}function xn(e,t,n=oe,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Pt(),Tt(n);const l=be(t,n,e,i);return ct(),At(),l});return s?r.unshift(o):r.push(o),o}}const He=e=>(t,n=oe)=>(!Wt||e==="sp")&&xn(e,(...s)=>t(...s),n),ll=He("bm"),ho=He("m"),al=He("bu"),cl=He("u"),po=He("bum"),mo=He("um"),ul=He("sp"),fl=He("rtg"),dl=He("rtc");function hl(e,t=oe){xn("ec",e,t)}function pl(e,t,n,s){let r;const o=n&&n[s];if(M(e)||ee(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o&&o[i])}else if(Y(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,o&&o[l]));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];r[l]=t(e[c],c,l,o&&o[l])}}else r=[];return n&&(n[s]=r),r}function ml(e,t,n={},s,r){if(ae.isCE||ae.parent&&Ft(ae.parent)&&ae.parent.isCE)return t!=="default"&&(n.name=t),se("slot",n,s&&s());let o=e[t];o&&o._c&&(o._d=!1),Ee();const i=o&&go(o(n)),l=ft(he,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function go(e){return e.some(t=>un(t)?!(t.type===_e||t.type===he&&!go(t.children)):!0)?e:null}const Qn=e=>e?Io(e)?Tn(e)||e.proxy:Qn(e.parent):null,Dt=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qn(e.parent),$root:e=>Qn(e.root),$emit:e=>e.emit,$options:e=>ws(e),$forceUpdate:e=>e.f||(e.f=()=>_s(e.update)),$nextTick:e=>e.n||(e.n=Hi.bind(e.proxy)),$watch:e=>el.bind(e)}),Fn=(e,t)=>e!==q&&!e.__isScriptSetup&&D(e,t),gl={get({_:e},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const x=i[t];if(x!==void 0)switch(x){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(Fn(s,t))return i[t]=1,s[t];if(r!==q&&D(r,t))return i[t]=2,r[t];if((c=e.propsOptions[0])&&D(c,t))return i[t]=3,o[t];if(n!==q&&D(n,t))return i[t]=4,n[t];Gn&&(i[t]=0)}}const d=Dt[t];let h,y;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==q&&D(n,t))return i[t]=4,n[t];if(y=a.config.globalProperties,D(y,t))return y[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return Fn(r,t)?(r[t]=n,!0):s!==q&&D(s,t)?(s[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==q&&D(e,i)||Fn(t,i)||(l=o[0])&&D(l,i)||D(s,i)||D(Dt,i)||D(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xs(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gn=!0;function yl(e){const t=ws(e),n=e.proxy,s=e.ctx;Gn=!1,t.beforeCreate&&Js(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:a,inject:c,created:d,beforeMount:h,mounted:y,beforeUpdate:x,updated:O,activated:T,deactivated:k,beforeDestroy:j,beforeUnmount:H,destroyed:K,unmounted:I,render:J,renderTracked:fe,renderTriggered:xe,errorCaptured:$,serverPrefetch:Z,expose:z,inheritAttrs:ie,components:S,directives:X,filters:ge}=t;if(c&&vl(c,s,null),i)for(const Q in i){const W=i[Q];R(W)&&(s[Q]=W.bind(n))}if(r){const Q=r.call(n,n);Y(Q)&&(e.data=it(Q))}if(Gn=!0,o)for(const Q in o){const W=o[Q],Ze=R(W)?W.bind(n,n):R(W.get)?W.get.bind(n,n):Pe,qt=!R(W)&&R(W.set)?W.set.bind(n):Pe,Qe=No({get:Ze,set:qt});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Ie=>Qe.value=Ie})}if(l)for(const Q in l)yo(l[Q],s,n,Q);if(a){const Q=R(a)?a.call(n):a;Reflect.ownKeys(Q).forEach(W=>{Eo(W,Q[W])})}d&&Js(d,e,"c");function te(Q,W){M(W)?W.forEach(Ze=>Q(Ze.bind(n))):W&&Q(W.bind(n))}if(te(ll,h),te(ho,y),te(al,x),te(cl,O),te(rl,T),te(ol,k),te(hl,$),te(dl,fe),te(fl,xe),te(po,H),te(mo,I),te(ul,Z),M(z))if(z.length){const Q=e.exposed||(e.exposed={});z.forEach(W=>{Object.defineProperty(Q,W,{get:()=>n[W],set:Ze=>n[W]=Ze})})}else e.exposed||(e.exposed={});J&&e.render===Pe&&(e.render=J),ie!=null&&(e.inheritAttrs=ie),S&&(e.components=S),X&&(e.directives=X)}function vl(e,t,n=Pe){M(e)&&(e=es(e));for(const s in e){const r=e[s];let o;Y(r)?"default"in r?o=Bt(r.from||s,r.default,!0):o=Bt(r.from||s):o=Bt(r),ue(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function Js(e,t,n){be(M(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function yo(e,t,n,s){const r=s.includes(".")?lo(n,s):()=>n[s];if(ee(e)){const o=t[e];R(o)&&Rn(r,o)}else if(R(e))Rn(r,e.bind(n));else if(Y(e))if(M(e))e.forEach(o=>yo(o,t,n,s));else{const o=R(e.handler)?e.handler.bind(n):t[e.handler];R(o)&&Rn(r,o,e)}}function ws(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(c=>an(a,c,i,!0)),an(a,t,i)),Y(t)&&o.set(t,a),a}function an(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&an(e,o,n,!0),r&&r.forEach(i=>an(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=El[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const El={data:Zs,props:Qs,emits:Qs,methods:$t,computed:$t,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:$t,directives:$t,watch:_l,provide:Zs,inject:bl};function Zs(e,t){return t?e?function(){return re(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function bl(e,t){return $t(es(e),es(t))}function es(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function $t(e,t){return e?re(Object.create(null),e,t):t}function Qs(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:re(Object.create(null),Xs(e),Xs(t??{})):t}function _l(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const s in t)n[s]=ce(e[s],t[s]);return n}function vo(){return{app:null,config:{isNativeTag:Jo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xl=0;function wl(e,t){return function(s,r=null){R(s)||(s=re({},s)),r!=null&&!Y(r)&&(r=null);const o=vo(),i=new WeakSet;let l=!1;const a=o.app={_uid:xl++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Jl,get config(){return o.config},set config(c){},use(c,...d){return i.has(c)||(c&&R(c.install)?(i.add(c),c.install(a,...d)):R(c)&&(i.add(c),c(a,...d))),a},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),a},component(c,d){return d?(o.components[c]=d,a):o.components[c]},directive(c,d){return d?(o.directives[c]=d,a):o.directives[c]},mount(c,d,h){if(!l){const y=se(s,r);return y.appContext=o,d&&t?t(y,c):e(y,c,h),l=!0,a._container=c,c.__vue_app__=a,Tn(y.component)||y.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return o.provides[c]=d,a},runWithContext(c){cn=a;try{return c()}finally{cn=null}}};return a}}let cn=null;function Eo(e,t){if(oe){let n=oe.provides;const s=oe.parent&&oe.parent.provides;s===n&&(n=oe.provides=Object.create(s)),n[e]=t}}function Bt(e,t,n=!1){const s=oe||ae;if(s||cn){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:cn._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&R(t)?t.call(s&&s.proxy):t}}function Cl(e,t,n,s=!1){const r={},o={};on(o,Cn,1),e.propsDefaults=Object.create(null),bo(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:$i(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Tl(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=B(r),[a]=e.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let y=d[h];if(bn(e.emitsOptions,y))continue;const x=t[y];if(a)if(D(o,y))x!==o[y]&&(o[y]=x,c=!0);else{const O=xt(y);r[O]=ts(a,l,O,x,e,!1)}else x!==o[y]&&(o[y]=x,c=!0)}}}else{bo(e,t,r,o)&&(c=!0);let d;for(const h in l)(!t||!D(t,h)&&((d=St(h))===h||!D(t,d)))&&(a?n&&(n[h]!==void 0||n[d]!==void 0)&&(r[h]=ts(a,l,h,void 0,e,!0)):delete r[h]);if(o!==l)for(const h in o)(!t||!D(t,h))&&(delete o[h],c=!0)}c&&Le(e,"set","$attrs")}function bo(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(sn(a))continue;const c=t[a];let d;r&&D(r,d=xt(a))?!o||!o.includes(d)?n[d]=c:(l||(l={}))[d]=c:bn(e.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,i=!0)}if(o){const a=B(n),c=l||q;for(let d=0;d<o.length;d++){const h=o[d];n[h]=ts(r,a,h,c[h],e,!D(c,h))}}return i}function ts(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=D(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&R(a)){const{propsDefaults:c}=r;n in c?s=c[n]:(Tt(r),s=c[n]=a.call(null,t),ct())}else s=a}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===St(n))&&(s=!0))}return s}function _o(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let a=!1;if(!R(e)){const d=h=>{a=!0;const[y,x]=_o(h,t,!0);re(i,y),x&&l.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!a)return Y(e)&&s.set(e,vt),vt;if(M(o))for(let d=0;d<o.length;d++){const h=xt(o[d]);Gs(h)&&(i[h]=q)}else if(o)for(const d in o){const h=xt(d);if(Gs(h)){const y=o[d],x=i[h]=M(y)||R(y)?{type:y}:re({},y);if(x){const O=nr(Boolean,x.type),T=nr(String,x.type);x[0]=O>-1,x[1]=T<0||O<T,(O>-1||D(x,"default"))&&l.push(h)}}}const c=[i,l];return Y(e)&&s.set(e,c),c}function Gs(e){return e[0]!=="$"}function er(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function tr(e,t){return er(e)===er(t)}function nr(e,t){return M(t)?t.findIndex(n=>tr(n,e)):R(t)&&tr(t,e)?0:-1}const xo=e=>e[0]==="_"||e==="$stable",Cs=e=>M(e)?e.map(Oe):[Oe(e)],Sl=(e,t,n)=>{if(t._n)return t;const s=Ct((...r)=>Cs(t(...r)),n);return s._c=!1,s},wo=(e,t,n)=>{const s=e._ctx;for(const r in e){if(xo(r))continue;const o=e[r];if(R(o))t[r]=Sl(r,o,s);else if(o!=null){const i=Cs(o);t[r]=()=>i}}},Co=(e,t)=>{const n=Cs(t);e.slots.default=()=>n},Pl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),on(t,"_",n)):wo(t,e.slots={})}else e.slots={},t&&Co(e,t);on(e.slots,Cn,1)},Al=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=q;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:(re(r,t),!n&&l===1&&delete r._):(o=!t.$stable,wo(t,r)),i=t}else t&&(Co(e,t),i={default:1});if(o)for(const l in r)!xo(l)&&i[l]==null&&delete r[l]};function ns(e,t,n,s,r=!1){if(M(e)){e.forEach((y,x)=>ns(y,t&&(M(t)?t[x]:t),n,s,r));return}if(Ft(s)&&!r)return;const o=s.shapeFlag&4?Tn(s.component)||s.component.proxy:s.el,i=r?null:o,{i:l,r:a}=e,c=t&&t.r,d=l.refs===q?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ee(c)?(d[c]=null,D(h,c)&&(h[c]=null)):ue(c)&&(c.value=null)),R(a))Ye(a,l,12,[i,d]);else{const y=ee(a),x=ue(a);if(y||x){const O=()=>{if(e.f){const T=y?D(h,a)?h[a]:d[a]:a.value;r?M(T)&&fs(T,o):M(T)?T.includes(o)||T.push(o):y?(d[a]=[o],D(h,a)&&(h[a]=d[a])):(a.value=[o],e.k&&(d[e.k]=a.value))}else y?(d[a]=i,D(h,a)&&(h[a]=i)):x&&(a.value=i,e.k&&(d[e.k]=i))};i?(O.id=-1,de(O,n)):O()}}}const de=Gi;function Il(e){return Ml(e)}function Ml(e,t){const n=Kn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:a,setText:c,setElementText:d,parentNode:h,nextSibling:y,setScopeId:x=Pe,insertStaticContent:O}=e,T=(u,f,p,m=null,g=null,b=null,w=!1,E=null,_=!!f.dynamicChildren)=>{if(u===f)return;u&&!rt(u,f)&&(m=Yt(u),Ie(u,g,b,!0),u=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:v,ref:P,shapeFlag:C}=f;switch(v){case wn:k(u,f,p,m);break;case _e:j(u,f,p,m);break;case Dn:u==null&&H(f,p,m,w);break;case he:S(u,f,p,m,g,b,w,E,_);break;default:C&1?J(u,f,p,m,g,b,w,E,_):C&6?X(u,f,p,m,g,b,w,E,_):(C&64||C&128)&&v.process(u,f,p,m,g,b,w,E,_,ht)}P!=null&&g&&ns(P,u&&u.ref,b,f||u,!f)},k=(u,f,p,m)=>{if(u==null)s(f.el=l(f.children),p,m);else{const g=f.el=u.el;f.children!==u.children&&c(g,f.children)}},j=(u,f,p,m)=>{u==null?s(f.el=a(f.children||""),p,m):f.el=u.el},H=(u,f,p,m)=>{[u.el,u.anchor]=O(u.children,f,p,m,u.el,u.anchor)},K=({el:u,anchor:f},p,m)=>{let g;for(;u&&u!==f;)g=y(u),s(u,p,m),u=g;s(f,p,m)},I=({el:u,anchor:f})=>{let p;for(;u&&u!==f;)p=y(u),r(u),u=p;r(f)},J=(u,f,p,m,g,b,w,E,_)=>{w=w||f.type==="svg",u==null?fe(f,p,m,g,b,w,E,_):Z(u,f,g,b,w,E,_)},fe=(u,f,p,m,g,b,w,E)=>{let _,v;const{type:P,props:C,shapeFlag:A,transition:N,dirs:F}=u;if(_=u.el=i(u.type,b,C&&C.is,C),A&8?d(_,u.children):A&16&&$(u.children,_,null,m,g,b&&P!=="foreignObject",w,E),F&&Ge(u,null,m,"created"),xe(_,u,u.scopeId,w,m),C){for(const U in C)U!=="value"&&!sn(U)&&o(_,U,null,C[U],b,u.children,m,g,Fe);"value"in C&&o(_,"value",null,C.value),(v=C.onVnodeBeforeMount)&&Ne(v,m,u)}F&&Ge(u,null,m,"beforeMount");const V=Nl(g,N);V&&N.beforeEnter(_),s(_,f,p),((v=C&&C.onVnodeMounted)||V||F)&&de(()=>{v&&Ne(v,m,u),V&&N.enter(_),F&&Ge(u,null,m,"mounted")},g)},xe=(u,f,p,m,g)=>{if(p&&x(u,p),m)for(let b=0;b<m.length;b++)x(u,m[b]);if(g){let b=g.subTree;if(f===b){const w=g.vnode;xe(u,w,w.scopeId,w.slotScopeIds,g.parent)}}},$=(u,f,p,m,g,b,w,E,_=0)=>{for(let v=_;v<u.length;v++){const P=u[v]=E?ze(u[v]):Oe(u[v]);T(null,P,f,p,m,g,b,w,E)}},Z=(u,f,p,m,g,b,w)=>{const E=f.el=u.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=f;_|=u.patchFlag&16;const C=u.props||q,A=f.props||q;let N;p&&et(p,!1),(N=A.onVnodeBeforeUpdate)&&Ne(N,p,f,u),P&&Ge(f,u,p,"beforeUpdate"),p&&et(p,!0);const F=g&&f.type!=="foreignObject";if(v?z(u.dynamicChildren,v,E,p,m,F,b):w||W(u,f,E,null,p,m,F,b,!1),_>0){if(_&16)ie(E,f,C,A,p,m,g);else if(_&2&&C.class!==A.class&&o(E,"class",null,A.class,g),_&4&&o(E,"style",C.style,A.style,g),_&8){const V=f.dynamicProps;for(let U=0;U<V.length;U++){const G=V[U],we=C[G],pt=A[G];(pt!==we||G==="value")&&o(E,G,we,pt,g,u.children,p,m,Fe)}}_&1&&u.children!==f.children&&d(E,f.children)}else!w&&v==null&&ie(E,f,C,A,p,m,g);((N=A.onVnodeUpdated)||P)&&de(()=>{N&&Ne(N,p,f,u),P&&Ge(f,u,p,"updated")},m)},z=(u,f,p,m,g,b,w)=>{for(let E=0;E<f.length;E++){const _=u[E],v=f[E],P=_.el&&(_.type===he||!rt(_,v)||_.shapeFlag&70)?h(_.el):p;T(_,v,P,null,m,g,b,w,!0)}},ie=(u,f,p,m,g,b,w)=>{if(p!==m){if(p!==q)for(const E in p)!sn(E)&&!(E in m)&&o(u,E,p[E],null,w,f.children,g,b,Fe);for(const E in m){if(sn(E))continue;const _=m[E],v=p[E];_!==v&&E!=="value"&&o(u,E,v,_,w,f.children,g,b,Fe)}"value"in m&&o(u,"value",p.value,m.value)}},S=(u,f,p,m,g,b,w,E,_)=>{const v=f.el=u?u.el:l(""),P=f.anchor=u?u.anchor:l("");let{patchFlag:C,dynamicChildren:A,slotScopeIds:N}=f;N&&(E=E?E.concat(N):N),u==null?(s(v,p,m),s(P,p,m),$(f.children,p,P,g,b,w,E,_)):C>0&&C&64&&A&&u.dynamicChildren?(z(u.dynamicChildren,A,p,g,b,w,E),(f.key!=null||g&&f===g.subTree)&&To(u,f,!0)):W(u,f,p,P,g,b,w,E,_)},X=(u,f,p,m,g,b,w,E,_)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?g.ctx.activate(f,p,m,w,_):ge(f,p,m,g,b,w,_):It(u,f,_)},ge=(u,f,p,m,g,b,w)=>{const E=u.component=Hl(u,m,g);if(_n(u)&&(E.ctx.renderer=ht),Kl(E),E.asyncDep){if(g&&g.registerDep(E,te),!u.el){const _=E.subTree=se(_e);j(null,_,f,p)}return}te(E,u,f,p,g,b,w)},It=(u,f,p)=>{const m=f.component=u.component;if(Xi(u,f,p))if(m.asyncDep&&!m.asyncResolved){Q(m,f,p);return}else m.next=f,Ki(m.update),m.update();else f.el=u.el,m.vnode=f},te=(u,f,p,m,g,b,w)=>{const E=()=>{if(u.isMounted){let{next:P,bu:C,u:A,parent:N,vnode:F}=u,V=P,U;et(u,!1),P?(P.el=F.el,Q(u,P,w)):P=F,C&&Nn(C),(U=P.props&&P.props.onVnodeBeforeUpdate)&&Ne(U,N,P,F),et(u,!0);const G=On(u),we=u.subTree;u.subTree=G,T(we,G,h(we.el),Yt(we),u,g,b),P.el=G.el,V===null&&Ji(u,G.el),A&&de(A,g),(U=P.props&&P.props.onVnodeUpdated)&&de(()=>Ne(U,N,P,F),g)}else{let P;const{el:C,props:A}=f,{bm:N,m:F,parent:V}=u,U=Ft(f);if(et(u,!1),N&&Nn(N),!U&&(P=A&&A.onVnodeBeforeMount)&&Ne(P,V,f),et(u,!0),C&&In){const G=()=>{u.subTree=On(u),In(C,u.subTree,u,g,null)};U?f.type.__asyncLoader().then(()=>!u.isUnmounted&&G()):G()}else{const G=u.subTree=On(u);T(null,G,p,m,u,g,b),f.el=G.el}if(F&&de(F,g),!U&&(P=A&&A.onVnodeMounted)){const G=f;de(()=>Ne(P,V,G),g)}(f.shapeFlag&256||V&&Ft(V.vnode)&&V.vnode.shapeFlag&256)&&u.a&&de(u.a,g),u.isMounted=!0,f=p=m=null}},_=u.effect=new ps(E,()=>_s(v),u.scope),v=u.update=()=>_.run();v.id=u.uid,et(u,!0),v()},Q=(u,f,p)=>{f.component=u;const m=u.vnode.props;u.vnode=f,u.next=null,Tl(u,f.props,m,p),Al(u,f.children,p),Pt(),zs(),At()},W=(u,f,p,m,g,b,w,E,_=!1)=>{const v=u&&u.children,P=u?u.shapeFlag:0,C=f.children,{patchFlag:A,shapeFlag:N}=f;if(A>0){if(A&128){qt(v,C,p,m,g,b,w,E,_);return}else if(A&256){Ze(v,C,p,m,g,b,w,E,_);return}}N&8?(P&16&&Fe(v,g,b),C!==v&&d(p,C)):P&16?N&16?qt(v,C,p,m,g,b,w,E,_):Fe(v,g,b,!0):(P&8&&d(p,""),N&16&&$(C,p,m,g,b,w,E,_))},Ze=(u,f,p,m,g,b,w,E,_)=>{u=u||vt,f=f||vt;const v=u.length,P=f.length,C=Math.min(v,P);let A;for(A=0;A<C;A++){const N=f[A]=_?ze(f[A]):Oe(f[A]);T(u[A],N,p,null,g,b,w,E,_)}v>P?Fe(u,g,b,!0,!1,C):$(f,p,m,g,b,w,E,_,C)},qt=(u,f,p,m,g,b,w,E,_)=>{let v=0;const P=f.length;let C=u.length-1,A=P-1;for(;v<=C&&v<=A;){const N=u[v],F=f[v]=_?ze(f[v]):Oe(f[v]);if(rt(N,F))T(N,F,p,null,g,b,w,E,_);else break;v++}for(;v<=C&&v<=A;){const N=u[C],F=f[A]=_?ze(f[A]):Oe(f[A]);if(rt(N,F))T(N,F,p,null,g,b,w,E,_);else break;C--,A--}if(v>C){if(v<=A){const N=A+1,F=N<P?f[N].el:m;for(;v<=A;)T(null,f[v]=_?ze(f[v]):Oe(f[v]),p,F,g,b,w,E,_),v++}}else if(v>A)for(;v<=C;)Ie(u[v],g,b,!0),v++;else{const N=v,F=v,V=new Map;for(v=F;v<=A;v++){const ye=f[v]=_?ze(f[v]):Oe(f[v]);ye.key!=null&&V.set(ye.key,v)}let U,G=0;const we=A-F+1;let pt=!1,Fs=0;const Mt=new Array(we);for(v=0;v<we;v++)Mt[v]=0;for(v=N;v<=C;v++){const ye=u[v];if(G>=we){Ie(ye,g,b,!0);continue}let Me;if(ye.key!=null)Me=V.get(ye.key);else for(U=F;U<=A;U++)if(Mt[U-F]===0&&rt(ye,f[U])){Me=U;break}Me===void 0?Ie(ye,g,b,!0):(Mt[Me-F]=v+1,Me>=Fs?Fs=Me:pt=!0,T(ye,f[Me],p,null,g,b,w,E,_),G++)}const Ds=pt?Ol(Mt):vt;for(U=Ds.length-1,v=we-1;v>=0;v--){const ye=F+v,Me=f[ye],Bs=ye+1<P?f[ye+1].el:m;Mt[v]===0?T(null,Me,p,Bs,g,b,w,E,_):pt&&(U<0||v!==Ds[U]?Qe(Me,p,Bs,2):U--)}}},Qe=(u,f,p,m,g=null)=>{const{el:b,type:w,transition:E,children:_,shapeFlag:v}=u;if(v&6){Qe(u.component.subTree,f,p,m);return}if(v&128){u.suspense.move(f,p,m);return}if(v&64){w.move(u,f,p,ht);return}if(w===he){s(b,f,p);for(let C=0;C<_.length;C++)Qe(_[C],f,p,m);s(u.anchor,f,p);return}if(w===Dn){K(u,f,p);return}if(m!==2&&v&1&&E)if(m===0)E.beforeEnter(b),s(b,f,p),de(()=>E.enter(b),g);else{const{leave:C,delayLeave:A,afterLeave:N}=E,F=()=>s(b,f,p),V=()=>{C(b,()=>{F(),N&&N()})};A?A(b,F,V):V()}else s(b,f,p)},Ie=(u,f,p,m=!1,g=!1)=>{const{type:b,props:w,ref:E,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:C,dirs:A}=u;if(E!=null&&ns(E,null,p,u,!0),P&256){f.ctx.deactivate(u);return}const N=P&1&&A,F=!Ft(u);let V;if(F&&(V=w&&w.onVnodeBeforeUnmount)&&Ne(V,f,u),P&6)zo(u.component,p,m);else{if(P&128){u.suspense.unmount(p,m);return}N&&Ge(u,null,f,"beforeUnmount"),P&64?u.type.remove(u,f,p,g,ht,m):v&&(b!==he||C>0&&C&64)?Fe(v,f,p,!1,!0):(b===he&&C&384||!g&&P&16)&&Fe(_,f,p),m&&Rs(u)}(F&&(V=w&&w.onVnodeUnmounted)||N)&&de(()=>{V&&Ne(V,f,u),N&&Ge(u,null,f,"unmounted")},p)},Rs=u=>{const{type:f,el:p,anchor:m,transition:g}=u;if(f===he){Vo(p,m);return}if(f===Dn){I(u);return}const b=()=>{r(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(u.shapeFlag&1&&g&&!g.persisted){const{leave:w,delayLeave:E}=g,_=()=>w(p,b);E?E(u.el,b,_):_()}else b()},Vo=(u,f)=>{let p;for(;u!==f;)p=y(u),r(u),u=p;r(f)},zo=(u,f,p)=>{const{bum:m,scope:g,update:b,subTree:w,um:E}=u;m&&Nn(m),g.stop(),b&&(b.active=!1,Ie(w,u,f,p)),E&&de(E,f),de(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Fe=(u,f,p,m=!1,g=!1,b=0)=>{for(let w=b;w<u.length;w++)Ie(u[w],f,p,m,g)},Yt=u=>u.shapeFlag&6?Yt(u.component.subTree):u.shapeFlag&128?u.suspense.next():y(u.anchor||u.el),$s=(u,f,p)=>{u==null?f._vnode&&Ie(f._vnode,null,null,!0):T(f._vnode||null,u,f,null,null,null,p),zs(),no(),f._vnode=u},ht={p:T,um:Ie,m:Qe,r:Rs,mt:ge,mc:$,pc:W,pbc:z,n:Yt,o:e};let An,In;return t&&([An,In]=t(ht)),{render:$s,hydrate:An,createApp:wl($s,An)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Nl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function To(e,t,n=!1){const s=e.children,r=t.children;if(M(s)&&M(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=ze(r[o]),l.el=i.el),n||To(i,l)),l.type===wn&&(l.el=i.el)}}function Ol(e){const t=e.slice(),n=[0];let s,r,o,i,l;const a=e.length;for(s=0;s<a;s++){const c=e[s];if(c!==0){if(r=n[n.length-1],e[r]<c){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<c?o=l+1:i=l;c<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const Rl=e=>e.__isTeleport,he=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),_e=Symbol.for("v-cmt"),Dn=Symbol.for("v-stc"),Lt=[];let Se=null;function Ee(e=!1){Lt.push(Se=e?null:[])}function $l(){Lt.pop(),Se=Lt[Lt.length-1]||null}let Kt=1;function sr(e){Kt+=e}function So(e){return e.dynamicChildren=Kt>0?Se||vt:null,$l(),Kt>0&&Se&&Se.push(e),e}function kt(e,t,n,s,r,o){return So(je(e,t,n,s,r,o,!0))}function ft(e,t,n,s,r){return So(se(e,t,n,s,r,!0))}function un(e){return e?e.__v_isVNode===!0:!1}function rt(e,t){return e.type===t.type&&e.key===t.key}const Cn="__vInternal",Po=({key:e})=>e??null,rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||ue(e)||R(e)?{i:ae,r:e,k:t,f:!!n}:e:null);function je(e,t=null,n=null,s=0,r=null,o=e===he?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Po(t),ref:t&&rn(t),scopeId:oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ae};return l?(Ts(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=ee(n)?8:16),Kt>0&&!i&&Se&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Se.push(a),a}const se=Fl;function Fl(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Zi)&&(e=_e),un(e)){const l=Je(e,t,!0);return n&&Ts(l,n),Kt>0&&!o&&Se&&(l.shapeFlag&6?Se[Se.indexOf(e)]=l:Se.push(l)),l.patchFlag|=-2,l}if(ql(e)&&(e=e.__vccOpts),t){t=Dl(t);let{class:l,style:a}=t;l&&!ee(l)&&(t.class=$e(l)),Y(a)&&(Zr(a)&&!M(a)&&(a=re({},a)),t.style=ke(a))}const i=ee(e)?1:Qi(e)?128:Rl(e)?64:Y(e)?4:R(e)?2:0;return je(e,t,n,s,r,i,o,!0)}function Dl(e){return e?Zr(e)||Cn in e?re({},e):e:null}function Je(e,t,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=e,l=t?Ll(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Po(l),ref:t&&t.ref?n&&r?M(r)?r.concat(rn(t)):[r,rn(t)]:rn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Je(e.ssContent),ssFallback:e.ssFallback&&Je(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Bl(e=" ",t=0){return se(wn,null,e,t)}function Ao(e="",t=!1){return t?(Ee(),ft(_e,null,e)):se(_e,null,e)}function Oe(e){return e==null||typeof e=="boolean"?se(_e):M(e)?se(he,null,e.slice()):typeof e=="object"?ze(e):se(wn,null,String(e))}function ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Je(e)}function Ts(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Ts(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Cn in t)?t._ctx=ae:r===3&&ae&&(ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:ae},n=32):(t=String(t),s&64?(n=16,t=[Bl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ll(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=$e([t.class,s.class]));else if(r==="style")t.style=ke([t.style,s.style]);else if(pn(r)){const o=t[r],i=s[r];i&&o!==i&&!(M(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function Ne(e,t,n,s=null){be(e,t,7,[n,s])}const kl=vo();let jl=0;function Hl(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||kl,o={uid:jl++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new fi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_o(s,r),emitsOptions:ro(s,r),emit:null,emitted:null,propsDefaults:q,inheritAttrs:s.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=zi.bind(null,o),e.ce&&e.ce(o),o}let oe=null;const Ul=()=>oe||ae;let Ss,mt,rr="__VUE_INSTANCE_SETTERS__";(mt=Kn()[rr])||(mt=Kn()[rr]=[]),mt.push(e=>oe=e),Ss=e=>{mt.length>1?mt.forEach(t=>t(e)):mt[0](e)};const Tt=e=>{Ss(e),e.scope.on()},ct=()=>{oe&&oe.scope.off(),Ss(null)};function Io(e){return e.vnode.shapeFlag&4}let Wt=!1;function Kl(e,t=!1){Wt=t;const{props:n,children:s}=e.vnode,r=Io(e);Cl(e,n,r,t),Pl(e,s);const o=r?Wl(e,t):void 0;return Wt=!1,o}function Wl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qr(new Proxy(e.ctx,gl));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?zl(e):null;Tt(e),Pt();const o=Ye(s,e,0,[e.props,r]);if(At(),ct(),$r(o)){if(o.then(ct,ct),t)return o.then(i=>{or(e,i,t)}).catch(i=>{En(i,e,0)});e.asyncDep=o}else or(e,o,t)}else Mo(e,t)}function or(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=Gr(t)),Mo(e,n)}let ir;function Mo(e,t,n){const s=e.type;if(!e.render){if(!t&&ir&&!s.render){const r=s.template||ws(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,c=re(re({isCustomElement:o,delimiters:l},i),a);s.render=ir(r,c)}}e.render=s.render||Pe}{Tt(e),Pt();try{yl(e)}finally{At(),ct()}}}function Vl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function zl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Vl(e)},slots:e.slots,emit:e.emit,expose:t}}function Tn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gr(Qr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function ql(e){return R(e)&&"__vccOpts"in e}const No=(e,t)=>ki(e,t,Wt);function Oo(e,t,n){const s=arguments.length;return s===2?Y(t)&&!M(t)?un(t)?se(e,null,[t]):se(e,t):se(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&un(n)&&(n=[n]),se(e,t,n))}const Yl=Symbol.for("v-scx"),Xl=()=>Bt(Yl),Jl="3.3.9",Zl="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,lr=ot&&ot.createElement("template"),Ql={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?ot.createElementNS(Zl,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{lr.innerHTML=s?`<svg>${e}</svg>`:e;const l=lr.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ke="transition",Nt="animation",Vt=Symbol("_vtc"),zt=(e,{slots:t})=>Oo(sl,Gl(e),t);zt.displayName="Transition";const Ro={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};zt.props=re({},ao,Ro);const tt=(e,t=[])=>{M(e)?e.forEach(n=>n(...t)):e&&e(...t)},ar=e=>e?M(e)?e.some(t=>t.length>1):e.length>1:!1;function Gl(e){const t={};for(const S in e)S in Ro||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=o,appearActiveClass:c=i,appearToClass:d=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,O=ea(r),T=O&&O[0],k=O&&O[1],{onBeforeEnter:j,onEnter:H,onEnterCancelled:K,onLeave:I,onLeaveCancelled:J,onBeforeAppear:fe=j,onAppear:xe=H,onAppearCancelled:$=K}=t,Z=(S,X,ge)=>{nt(S,X?d:l),nt(S,X?c:i),ge&&ge()},z=(S,X)=>{S._isLeaving=!1,nt(S,h),nt(S,x),nt(S,y),X&&X()},ie=S=>(X,ge)=>{const It=S?xe:H,te=()=>Z(X,S,ge);tt(It,[X,te]),cr(()=>{nt(X,S?a:o),We(X,S?d:l),ar(It)||ur(X,s,T,te)})};return re(t,{onBeforeEnter(S){tt(j,[S]),We(S,o),We(S,i)},onBeforeAppear(S){tt(fe,[S]),We(S,a),We(S,c)},onEnter:ie(!1),onAppear:ie(!0),onLeave(S,X){S._isLeaving=!0;const ge=()=>z(S,X);We(S,h),sa(),We(S,y),cr(()=>{S._isLeaving&&(nt(S,h),We(S,x),ar(I)||ur(S,s,k,ge))}),tt(I,[S,ge])},onEnterCancelled(S){Z(S,!1),tt(K,[S])},onAppearCancelled(S){Z(S,!0),tt($,[S])},onLeaveCancelled(S){z(S),tt(J,[S])}})}function ea(e){if(e==null)return null;if(Y(e))return[Bn(e.enter),Bn(e.leave)];{const t=Bn(e);return[t,t]}}function Bn(e){return si(e)}function We(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Vt]||(e[Vt]=new Set)).add(t)}function nt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Vt];n&&(n.delete(t),n.size||(e[Vt]=void 0))}function cr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ta=0;function ur(e,t,n,s){const r=e._endId=++ta,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:l,propCount:a}=na(e,t);if(!i)return s();const c=i+"end";let d=0;const h=()=>{e.removeEventListener(c,y),o()},y=x=>{x.target===e&&++d>=a&&h()};setTimeout(()=>{d<a&&h()},l+1),e.addEventListener(c,y)}function na(e,t){const n=window.getComputedStyle(e),s=O=>(n[O]||"").split(", "),r=s(`${Ke}Delay`),o=s(`${Ke}Duration`),i=fr(r,o),l=s(`${Nt}Delay`),a=s(`${Nt}Duration`),c=fr(l,a);let d=null,h=0,y=0;t===Ke?i>0&&(d=Ke,h=i,y=o.length):t===Nt?c>0&&(d=Nt,h=c,y=a.length):(h=Math.max(i,c),d=h>0?i>c?Ke:Nt:null,y=d?d===Ke?o.length:a.length:0);const x=d===Ke&&/\b(transform|all)(,|$)/.test(s(`${Ke}Property`).toString());return{type:d,timeout:h,propCount:y,hasTransform:x}}function fr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>dr(n)+dr(e[s])))}function dr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function sa(){return document.body.offsetHeight}function ra(e,t,n){const s=e[Vt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ps=Symbol("_vod"),As={beforeMount(e,{value:t},{transition:n}){e[Ps]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ot(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Ot(e,!0),s.enter(e)):s.leave(e,()=>{Ot(e,!1)}):Ot(e,t))},beforeUnmount(e,{value:t}){Ot(e,t)}};function Ot(e,t){e.style.display=t?e[Ps]:"none"}function oa(e,t,n){const s=e.style,r=ee(n);if(n&&!r){if(t&&!ee(t))for(const o in t)n[o]==null&&ss(s,o,"");for(const o in n)ss(s,o,n[o])}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),Ps in e&&(s.display=o)}}const hr=/\s*!important$/;function ss(e,t,n){if(M(n))n.forEach(s=>ss(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=ia(e,t);hr.test(n)?e.setProperty(St(s),n.replace(hr,""),"important"):e[s]=n}}const pr=["Webkit","Moz","ms"],Ln={};function ia(e,t){const n=Ln[t];if(n)return n;let s=xt(t);if(s!=="filter"&&s in e)return Ln[t]=s;s=Br(s);for(let r=0;r<pr.length;r++){const o=pr[r]+s;if(o in e)return Ln[t]=o}return t}const mr="http://www.w3.org/1999/xlink";function la(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(mr,t.slice(6,t.length)):e.setAttributeNS(mr,t,n);else{const o=ci(t);n==null||o&&!Lr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function aa(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const c=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Lr(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function ca(e,t,n,s){e.addEventListener(t,n,s)}function ua(e,t,n,s){e.removeEventListener(t,n,s)}const gr=Symbol("_vei");function fa(e,t,n,s,r=null){const o=e[gr]||(e[gr]={}),i=o[t];if(s&&i)i.value=s;else{const[l,a]=da(t);if(s){const c=o[t]=ma(s,r);ca(e,l,c,a)}else i&&(ua(e,l,i,a),o[t]=void 0)}}const yr=/(?:Once|Passive|Capture)$/;function da(e){let t;if(yr.test(e)){t={};let s;for(;s=e.match(yr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let kn=0;const ha=Promise.resolve(),pa=()=>kn||(ha.then(()=>kn=0),kn=Date.now());function ma(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;be(ga(s,n.value),t,5,[s])};return n.value=e,n.attached=pa(),n}function ga(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const vr=/^on[a-z]/,ya=(e,t,n,s,r=!1,o,i,l,a)=>{t==="class"?ra(e,s,r):t==="style"?oa(e,n,s):pn(t)?us(t)||fa(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):va(e,t,s,r))?aa(e,t,s,o,i,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),la(e,t,s,r))};function va(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&vr.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||vr.test(t)&&ee(n)?!1:t in e}const Ea=re({patchProp:ya},Ql);let Er;function ba(){return Er||(Er=Il(Ea))}const _a=(...e)=>{const t=ba().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=xa(s);if(!r)return;const o=t._component;!R(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function xa(e){return ee(e)?document.querySelector(e):e}const wa="_root_3unp2_2",Ca={root:wa},Sn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Ta={props:{active:Boolean,x:Number,y:Number},computed:{transform(){return this.scale!==void 0?`transform: translate(${this.x}px, ${this.y}px)`:`transform: translate(${this.x}px, ${this.y}px)`}}};function Sa(e,t,n,s,r,o){return Ee(),ft(zt,{name:"fade"},{default:Ct(()=>[xs(je("div",{class:$e(e.$style.root),style:ke(o.transform)},[ml(e.$slots,"default")],6),[[As,n.active]])]),_:3})}const Pa={$style:Ca},br=Sn(Ta,[["render",Sa],["__cssModules",Pa]]),Aa="_root_qtf1r_2",Ia="_rootTitle_qtf1r_13",Ma={root:Aa,rootTitle:Ia},Na={inject:["setFocus","getSurface"],props:{meta:Object,isFocus:Boolean},computed:{polygonPath(){const e=this.meta.polygonPath;let t=0,n=e.length,s="M ";for(;t<n;)s+=`${e[t]} ${e[t+1]}`,t+=2,s+=t===n?" Z":" L ";return s},viewBox(){const e=this.meta.viewbox;return`${e.x} ${e.y} ${e.width} ${e.height}`},width(){return this.meta.viewbox.width},height(){return this.meta.viewbox.height},title(){var e,t;return((t=(e=this.meta)==null?void 0:e.source)==null?void 0:t.tag)||""}},methods:{}},Oa=["focus"],Ra=["width","height"],$a=["d"];function Fa(e,t,n,s,r,o){return Ee(),kt("div",{class:$e(e.$style.root),focus:n.isFocus},[n.meta.active?(Ee(),kt(he,{key:0},[je("div",{class:$e(e.$style.rootTitle)},ui(o.title),3),(Ee(),kt("svg",{width:o.width,height:o.height,xmlns:"http://www.w3.org/2000/svg"},[je("path",{fill:"none","stroke-width":"3",stroke:"blue",d:o.polygonPath},null,8,$a)],8,Ra))],64)):Ao("",!0)],10,Oa)}const Da={$style:Ma},_r=Sn(Na,[["render",Fa],["__cssModules",Da]]),Ba="_root_s5oev_2",La="_seg_s5oev_13",ka={root:Ba,seg:La},ja={props:{segments:Object},data(){return{useTransition:!1}},computed:{active(){return this.segments.active},transform(){if(this.active){const e=this.segments.segments,t=e[0]===e[2],n=this.useTransition?"transition: all .3s;":"";return t?`${n}transform: translate(${e[0]}px, ${e[1]}px)`:`${n}transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(0px, 0px)"},transformSeg(){if(this.active){const e=this.segments.segments;return e[0]===e[2]?`transform: scale(3, ${e[3]-e[1]})`:`transform: scale(${e[2]-e[0]}, 3)`}return"transform: scale(0, 0);"}},watch:{active(e){console.log(e),this.$nextTick(()=>{this.useTransition=e})}}};function Ha(e,t,n,s,r,o){return Ee(),ft(zt,{name:"fade"},{default:Ct(()=>[xs(je("div",{class:$e(e.$style.root),style:ke(o.transform)},[je("div",{class:$e(e.$style.seg),style:ke(o.transformSeg)},null,6)],6),[[As,o.active]])]),_:1})}const Ua={$style:ka},Ka=Sn(ja,[["render",Ha],["__cssModules",Ua]]),Wa="_root_14orw_2",Va="_rect_14orw_13",za={root:Wa,rect:Va},qa={props:{meta:Object},computed:{active(){return this.meta.active},position(){if(this.active){const e=this.meta.rect;return`transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(-999px, 0px)"},dimension(){if(this.active){const e=this.meta.rect;return`transform: scale(${e[2]}, ${e[3]})`}return"transform: scale(0, 0)"}}};function Ya(e,t,n,s,r,o){return Ee(),ft(zt,{name:"fade"},{default:Ct(()=>[xs(je("div",{class:$e(e.$style.root),style:ke(o.position)},[je("div",{class:$e(e.$style.rect),style:ke(o.dimension)},null,6)],6),[[As,o.active]])]),_:1})}const Xa={$style:za},Ja=Sn(qa,[["render",Ya],["__cssModules",Xa]]),Za={__name:"surface",setup(e){const n=Bt("getSurface")(),{highlight_elem:s,targets:r,highlight_seg:o,highlight_empty_slot:i}=n,l=No(()=>({position:"relative",left:0}));return(a,c)=>(Ee(),kt("div",{style:ke(l.value)},[(Ee(!0),kt(he,null,pl(De(r),d=>(Ee(),ft(br,{x:d.position[0],y:d.position[1],active:!0},{default:Ct(()=>[se(_r,{meta:d,isFocus:!0},null,8,["meta"])]),_:2},1032,["x","y"]))),256)),se(Ka,{segments:De(o)},null,8,["segments"]),se(Ja,{meta:De(i)},null,8,["meta"]),De(s).active?(Ee(),ft(br,{key:0,x:De(s).position[0],y:De(s).position[1],active:De(s).active},{default:Ct(()=>[se(_r,{meta:De(s),isFocus:!1},null,8,["meta"])]),_:1},8,["x","y","active"])):Ao("",!0)],4))}};class Qa{constructor(){L(this,"targets",it([]));L(this,"highlight_elem",it({type:void 0,active:!1,rects:[],polygonPath:[],viewbox:[],source:null}));L(this,"highlight_seg",it({active:!1,segments:[]}));L(this,"highlight_empty_slot",it({active:!1,rect:[]}))}apply(t,n){this.ide=t,this.render=new Ga(this,n),this.render.init(),t.addEventListener("zoompan",s=>{s.detail.zoom&&(this.highlight_elem.active&&Object.assign(this.highlight_elem,{...this.resolveRects(this.highlight_elem.rects)}),this.targets.forEach(r=>{Object.assign(r,{...this.resolveRects(r.rects)})}))})}refresh(t){const n=[...this.targets,this.highlight_elem];t.forEach(s=>{const r=n.find(o=>nn(o.source,s.source));r&&Object.assign(r,this.resolveRects(s.rects))})}hasTarget(t){return this.targets.find(n=>nn(n.source,t))}_targetExist(t){return!!this.targets.find(s=>nn(s.source,t.source))}highlightElem(t){if(this._targetExist(t)){this.closeHighlightElem();return}nn(this.highlight_elem.source,t.source)||Object.assign(this.highlight_elem,{...t,...this.resolveRects(t.rects),active:!0})}getFocusNodes(){return this.targets.map(t=>B(t.source))}setFocus(t){if(!t){const s=this.targets.length;this.targets.splice(0,s);return}if(this._targetExist(t))return;this.closeHighlightElem();const n=this.targets.length;this.targets.splice(0,n,{...t,...this.resolveRects(t.rects),active:!0})}addFocus(t){this._targetExist(t)||this.targets.push({...t,...this.resolveRects(t.rects),active:!0})}closeHighlightElem(){this.highlight_elem.active&&Object.assign(this.highlight_elem,{active:!1,source:null})}resolveRects(t){const s=this.ide.scale;if(t.length===1){const{x:r,y:o,width:i,height:l}=t[0],a=[0,0,i*s,0,i*s,l*s,0,l*s];return{position:[r*s,o*s],polygonPath:a,viewbox:ec(a)}}}highlightSeg(t,n){if(this.highlight_seg.active=t,t){const r=this.ide.scale;this.highlight_seg.segments[0]=n[0]*r,this.highlight_seg.segments[1]=n[1]*r,this.highlight_seg.segments[2]=n[2]*r,this.highlight_seg.segments[3]=n[3]*r}}highlightEmptySlot(t,n){if(this.highlight_empty_slot.active=t,t){const r=this.ide.scale;this.highlight_empty_slot.rect[0]=n[0]*r,this.highlight_empty_slot.rect[1]=n[1]*r,this.highlight_empty_slot.rect[2]=n[2]*r,this.highlight_empty_slot.rect[3]=n[3]*r}}closeAll(){this.closeHighlightElem(),this.highlightSeg(!1),this.highlightEmptySlot(!1)}}class Ga{constructor(t,n){this.surface=t,this.dom=n}init(){_a(this.renderFn()).mount(this.dom)}renderFn(){const t=this.surface;return{inheritAttrs:!1,setup(){return Eo("getSurface",()=>t),()=>Oo(Za)}}}}function nn(e,t){return B(e)===B(t)}function ec(e){if(e.length===0)return{width:0,height:0,x:0,y:0};let t=1/0,n=1/0,s=-1/0,r=-1/0,o=0;for(;o<e.length;){const i=e[o],l=e[o+1];i<t&&(t=i),i>s&&(s=i),l<n&&(n=l),l>r&&(r=l),o+=2}return{width:Math.max(s-t,10),height:Math.max(r-n,10),x:t,y:n}}function fn(e,t){let n=`oneTripToPreview-${fn.uuid++}`,s;const r=new Promise(i=>{s=i}),o=i=>{const l=i.data;l.uuid===n&&(s(l.response),window.removeEventListener("message",o))};return window.addEventListener("message",o),e({uuid:n,...t}),r}fn.uuid=0;class tc extends EventTarget{constructor(n){super();L(this,"initialZoom",1);L(this,"padding",20);L(this,"maxZoom",2);L(this,"minZoom",.5);L(this,"deviceWidth",0);L(this,"deviceHeight","auto");L(this,"position",{x:0,y:0});L(this,"scale",1);L(this,"_registedMethods",new Map);L(this,"postIframeMessage",null);this.simulator=n.simulator,this.surface=new Qa,this.getSourceByNodePath=n.getSourceByNodePath,this.preRegistMethods()}$mount(n){const s=nc(),r=sc(),o=rc(),i=oc();s.appendChild(r),s.appendChild(o),r.appendChild(i),this.domCache={viewport:s,viewcontent:r,groundAnchor:o,iframe:i};let l=!1;n.appendChild(s),i.addEventListener("load",()=>{console.log("onload!"),window.addEventListener("message",a=>{const c=a.data;if(!l&&c.type==="Event"&&c.name==="proxyReady"){const d=a.source,h=a.origin;this._init(),this.postIframeMessage=y=>{d.postMessage(y,h)},this.dispatchEvent(new CustomEvent("ready",{detail:{target:this.iframe}})),l=!0}})}),r.style.height=`${s.getBoundingClientRect().height}px`,this.simulator.load(i)}_init(){const n=i=>{console.log("resized!",this.simulator),this.domCache.viewcontent.style.height=`${i.scrollHeight}px`},r=(()=>{let i=[];return(l,a)=>{l==="wheel"&&i.length===3&&i.every(c=>c==="wheel")&&(console.log("onWheel"),this.onWheelInFrame(a)),i.unshift(l),i.length>3&&(i.length=3)}})().bind(this);window.addEventListener("message",i=>{const l=i.data;if(l.type==="Event")switch(l.name){case"wheel":case"scroll":r(l.name,l.payload.eventMeta);break;case"dragstart":this.dispatchEvent(new CustomEvent("frame:dragstart",{detail:l.payload}));break;case"refreshBoundings":this.refreshBoundings(l.payload);break;case"mousemove":this.highlightNode(l.payload.elementInfo);break;case"dragover":this.dispatchEvent(new CustomEvent("frame:dragover",{detail:l.payload}));break;case"dragend":this.dispatchEvent(new CustomEvent("frame:dragend",{detail:l.payload}));break;case"hesitateWhenDragging":this.dispatchEvent(new CustomEvent("frame:hesitateWhenDragging",{detail:l.payload}));break;case"click":this._focusOnNode(l.payload);break;case"dblclick":this.dispatchEvent(new CustomEvent("frame:requestEditContent",{detail:l.payload}));break;case"contentchange":this.dispatchEvent(new CustomEvent("frame:contentChange",{detail:l.payload}));break;case"resizeObserver":n(l.payload);break}if(l.type==="Method"){const a=this._registedMethods.get(l.name);if(a){const c=l.uuid;a(d=>{i.source.postMessage({type:"Response",result:"success",uuid:c,response:d},i.origin)},d=>{i.source.postMessage({type:"Response",result:"failed",uuid:c,err:d},i.origin)},l.payload)}}});const o=this.domCache.viewport;o.addEventListener("mousemove",i=>{i.target===o&&this.surface.closeHighlightElem()}),o.addEventListener("wheel",this.onWheelInViewport.bind(this),{passive:!1}),this.surface.apply(this,this.domCache.groundAnchor)}preRegistMethods(){}refreshBoundings(n){const s=n.elementInfos;s.forEach(r=>{r.source=this.getSourceByNodePath(r.target)}),this.surface.refresh(s)}highlightNode(n){const{target:s,rects:r}=n;if(s){const o=this.getSourceByNodePath(s);this.surface.highlightElem({source:o,rects:r})}else this.surface.closeHighlightElem()}closeHighlight(){this.surface.closeHighlightElem()}async highlightNodeByNodePath(n){const s=await this.getElementInfoByNodePath(n);this.highlightNode(s)}clearFocus(){this.surface.setFocus()}_focusOnNode(n){const{target:s,rects:r}=n.elementInfo,{shiftKey:o}=n.eventMeta;if(s){this.surface.closeHighlightElem();const i=this.getSourceByNodePath(s);o?this.surface.addFocus({source:i,rects:r}):this.surface.setFocus({source:i,rects:r})}else this.surface.setFocus()}_calculateToViewport(n,s){const r=this.scale,o=this.position;s[0]=n[0]*r+o.x,s[1]=n[1]*r+o.y}syncGroundAnchor(){const n=[0,0];this._calculateToViewport(n,n),this.domCache.groundAnchor.style.transform=`translate(${n[0]}px, ${n[1]}px)`}resolveEventOffsetToViewport(n){const{clientX:s,clientY:r}=n,o=this.domCache.viewcontent.getBoundingClientRect();return[s*this.scale+o.x,r*this.scale+o.y]}onWheelInViewport(n){const[s,r]=this.resolveEventOffset(n);n.preventDefault(),this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,r)}onWheelInFrame(n){const[s,r]=this.resolveEventOffsetToViewport(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,r)}_onWheel(n,s,r,o,i){n?(r=-r,this.zoomHandler(o,i,r)):this.panHandler(-s,-r)}resolveEventOffset(n){const{clientX:s,clientY:r}=n,{x:o,y:i}=this.domCache.viewport.getBoundingClientRect();return[s-o,r-i]}zoomHandler(n,s,r){if(this._zooming)return;this._zooming=!0;const o=this.scale;let i=o;const l=r>0?1.05:1/1.05;i*=l,i=Math.min(this.maxZoom,Math.max(this.minZoom,i));const{x:a,y:c}=this.position,d=i/o,h=n-(n-a)*d,y=s-(s-c)*d;this.scale=i,Object.assign(this.position,{x:h,y}),this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!0}})),this._zooming=!1}panHandler(n,s){this._panning||(this._panning=!0,this.position.x+=n,this.position.y+=s,this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!1}})),this._panning=!1)}_resetTransform(){const{x:n,y:s}=this.position,r=this.scale,o=`matrix(${r}, 0, 0, ${r}, ${n}, ${s})`;this.domCache.viewcontent.style[Xo]=o,this.syncGroundAnchor()}_resolveEventOffsetInFrame(n){const{clientX:s,clientY:r}=n,{x:o,y:i}=this.position,l=this.scale,a=this.domCache.viewport.getBoundingClientRect();return[s*l+o+a.x,r*l+i+a.y]}async doDrag(n,s,r,o,i){this.postIframeMessage({type:"Event",name:"startDragging",payload:{nodePaths:s}});const l=document.importNode(n);l.style.position="fixed",l.style["pointer-events"]="none",document.body.appendChild(l),r&&await r();const a=x=>{if(o.execute)return;o.execute=!0;const[O,T]=this._resolveEventOffsetInFrame(x.detail.eventMeta);l.style.left=`${O}px`,l.style.top=`${T}px`,o({elementInfo:x.detail.elementInfo,eventMeta:x.detail.eventMeta,inFrame:!0,notAllowed:x.detail.notAllowed},c)};function c(){o.execute=!1}const d=x=>{if(o.execute)return;o.execute=!0;const{clientX:O,clientY:T}=x;l.style.left=`${O}px`,l.style.top=`${T}px`,o({elementInfo:null,eventMeta:x,inFrame:!1,notAllowed:!0},c)},h=async x=>{l.remove(),this.removeEventListener("frame:dragend",h),this.removeEventListener("frame:dragover",a),this.removeEventListener("frame:hesitateWhenDragging",y),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",h),i&&await i(),this.postIframeMessage({type:"Event",name:"stopDragging"})},y=x=>{this.surface.closeAll()};this.addEventListener("frame:dragend",h),this.addEventListener("frame:dragover",a),this.addEventListener("frame:hesitateWhenDragging",y),document.addEventListener("mousemove",d),document.addEventListener("mouseup",h)}doEditContent(n){this.postIframeMessage({type:"Method",name:"editContent",payload:{nodePath:n}})}setCursorInFrame(n){this.postIframeMessage({type:"Method",name:"setCursor",payload:{cursor:n}})}async getElementInfoByNodePath(n){return await fn(this.postIframeMessage,{type:"Method",name:"getElementInfoByNodePath",payload:{nodePath:n}})}async getElementsInfoByNodePath(n){return await fn(this.postIframeMessage,{type:"Method",name:"getElementsInfoByNodePath",payload:{nodePaths:n}})}startObserveRootElem(n){this.postIframeMessage({type:"Method",name:"startObserveRootNodeSize",payload:{selector:n}})}setElementsTemporaryStyle(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryStyle",payload:n})}setElementsTemporaryAttribute(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryAttribute",payload:n})}makeDraggingElemMove(n){this.postIframeMessage({type:"Event",name:"makeDraggingElemMove",payload:n})}registMethod(n,s){const{isAsync:r,body:o}=s,i=r?async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const d=await o.call(this,...c);l(d)}catch(d){a(d)}finally{i.execute=!1}}}:async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const d=o.call(this,...c);l(d)}catch(d){a(d)}finally{i.execute=!1}}};this._registedMethods.set(n,i)}}function nc(){return hn({tag:"div",style:{position:"relative",left:0,top:0,width:"100%",height:"100%","user-select":"none",overflow:"hidden",background:"rgba(0,0,0,0.1)"}})}function sc(){return hn({tag:"div",style:{position:"absolute",top:0,left:0,transformOrigin:"top left",width:"100%",overflow:"hidden",background:"#fff",userSelect:"none"}})}function rc(){return hn({tag:"div",style:{position:"absolute",left:0,top:0,width:0,height:0}})}function oc(){return hn({tag:"iframe",style:{width:"100%",height:"100%",border:"none"},attributes:{scrolling:"no"}})}const Pn={files:{"/index.html":{code:`<!DOCTYPE html>
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
`}},environment:"vanilla"},ic="View",lc=[{concept:"ViewElement",tag:"Flex",bindAttrs:[{concept:"BindAttribute",name:"gap",value:"middle"}],children:[{concept:"ViewElement",tag:"Button",innerText:"button1"},{concept:"ViewElement",tag:"Button",innerText:"button2",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}]},{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"link"}]}]},{concept:"ViewElement",tag:"AbsoluteLayout",children:[{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}],staticStyle:"left: 20px; top: 20px;"}]}],ac={concept:ic,elements:lc};let rs=class{constructor(t){L(this,"tag","");L(this,"isContainer",!1);L(this,"supportEditContent",!1);Object.assign(this,t)}};const ut={ROW:"row",COLUMN:"column",FREE:"free",AUTO:"auto"};class xr extends rs{constructor(n){super(n);L(this,"isContainer",!0);L(this,"isAbsolute",!1);L(this,"direction",ut.ROW);Object.assign(this,n)}}let wr=1;class Is{constructor(){L(this,"componentKey",0);L(this,"parentNode",null);this.componentKey=wr++}updateComponentKey(){this.componentKey=wr++}getSiblings(){}getChildren(){}getChildIndex(t){}insertNodeBefore(t,n){}insertNodeAfter(t,n){}clone(){}deleteChild(t){}delete(){}addChild(t){}}let os=class extends Is{constructor(n){super();L(this,"elements",[]);const s=$o(this);n.elements&&(this.elements=n.elements.map(s))}get nodePath(){return"rootview"}getChildren(){return this.elements}getChildIndex(n){return this.elements.findIndex(s=>s===n)}insertNodeBefore(n,s){s.parentNode&&s.delete();const r=this.getChildIndex(n);r!==-1&&(this.elements.splice(r,0,s),s.parentNode=this)}insertNodeAfter(n,s){s.parentNode&&s.delete();const r=this.getChildIndex(n);r!==-1&&(this.elements.splice(r+1,0,s),s.parentNode=this)}addChild(n){n.parentNode&&n.delete(),this.elements.push(n),n.parentNode=this}deleteChild(n){const s=this.getChildIndex(n);s!==-1&&this.elements.splice(s,1)}toReactFCFile(){const n=new Set;let s="";this.elements.forEach(i=>{s+=i.toReactFCComponent(n)});let r="";return n.size>0&&(r="import { ",r+=Array.from(n).join(","),r+='} from "antd";'),`
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
        `}};function dn(e){return e.split(";").map(n=>n.split(":")).reduce((n,s)=>{if(s.length===2){let[r,o]=s;r=r.trim().replace(/-./g,i=>i.toUpperCase()[1]),n[r]=o.trim()}return n},{})}function is(e){let t="";for(const[n,s]of Object.entries(e))t+=`${n}:${s};`;return t}function cc(e){const t=dn(e);try{return JSON.stringify(t)}catch{return""}}class dt extends Is{constructor(n){super();L(this,"tag","");L(this,"innerText","");L(this,"children",[]);L(this,"bindAttrs",[]);L(this,"staticStyle","");if(this.tag=n.tag,this.innerText=n.innerText,this.staticStyle=n.staticStyle||"",n.children){const s=$o(this);this.children=n.children.map(s)}if(n.bindAttrs){const s=pc(this);this.bindAttrs=n.bindAttrs.map(s)}}static accept(){return!0}get nodePath(){if(!this.parentNode)return;const n=this.parentNode;let s;n instanceof dt&&(s=n.children),n instanceof os&&(s=n.elements);const r=s.findIndex(o=>o===this);return r===-1?null:`${n.nodePath}.${r}`}getChildren(){return this.children}getChildIndex(n){return this.children.findIndex(s=>s===n)}insertNodeBefore(n,s){s.parentNode&&s.delete();const r=this.getChildIndex(n);r!==-1&&(this.children.splice(r,0,s),s.parentNode=this)}insertNodeAfter(n,s){s.parentNode&&s.delete();const r=this.getChildIndex(n);r!==-1&&(this.children.splice(r+1,0,s),s.parentNode=this)}addChild(n){n.parentNode&&n.delete(),this.children.push(n),n.parentNode=this}toReactFCComponent(n){n.add(this.tag);let s=`<${this.tag} key="${this.componentKey}" nodepath="${this.nodePath}" ide-iscontainer="${this.elementMeta.isContainer}" ${this.bindAttrs.map(r=>r.toReactFCComponent()).join(" ")}`;if(this.staticStyle.trim()){const r=cc(this.staticStyle.trim());r&&(s+=` style={${r}} `)}return s+=">",this.children&&(this.children.length===0&&this.elementMeta.isContainer&&(s+="<EmptySlot />"),this.children.forEach(r=>{s+=r.toReactFCComponent(n)})),this.innerText&&(s+=this.innerText),s+=`</${this.tag}>
`,s}toVueTmplComponent(){let n=`<${this.tag} nodepath="${this.nodePath}" ide-iscontainer="${this.elementMeta.isContainer}" ${this.bindAttrs.map(s=>s.toReactFCComponent()).join(" ")}>`;return this.children&&this.children.forEach(s=>{n+=s.toVueTmplComponent()}),this.innerText&&(n+=this.innerText),n+=`</${this.tag}>
`,n}getSiblings(){const n=this.parentNode;let s;n instanceof dt&&(s=n.children),n instanceof os&&(s=n.elements);const r=s.findIndex(o=>o===this);return{prev:s[r-1],after:s[r+1]}}deleteChild(n){const s=this.getChildIndex(n);s!==-1&&this.children.splice(s,1)}delete(){this.parentNode.deleteChild(this)}}class uc extends dt{static accept(t){return t.tag==="AbsoluteLayout"}toReactFCComponent(t){let n=`<div key="${this.componentKey}" nodepath="${this.nodePath}" className="absoluteLayout" ${this.bindAttrs.map(s=>s.toReactFCComponent()).join(" ")}>`;return this.children&&this.children.forEach(s=>{n+=s.toReactFCComponent(t)}),n+=`</div>
`,n}}class fc extends Is{constructor(n){super();L(this,"name","");L(this,"value","");this.name=n.name,this.value=n.value}toReactFCComponent(){return`${this.name}="${this.value}"`}toVueTmplComponent(){return`${this.name}="${this.value}"`}}function Ms(e){switch(e.tag){case"Button":return new rs({supportEditContent:!0});case"AbsoluteLayout":return new xr({isAbsolute:!0});case"Flex":return new xr;default:return new rs}}function dc(e){return new os(e)}const hc=[uc,dt];function $o(e){return t=>{const n=hc.find(r=>r.accept(t)),s=new n(t);return s.elementMeta=Ms(s),s.parentNode=e,s}}function pc(e){return t=>{const n=new fc(t);return n.parentNode=e,n}}function me(e,t){const n=t.split(".");n.shift();let s=e.elements[n.shift()];for(;n.length;){const r=n.shift();s=s.children[r]}return s}function Cr(e){return e*e}function jn(e,t){return Cr(e[0]-t[0])+Cr(e[1]-t[1])}function Tr(e,t){const n=t.slice(0,2),s=t.slice(2,4),r=jn(n,s);if(r===0)return jn(e,n);let o=((e[0]-n[0])*(s[0]-n[0])+(e[1]-n[1])*(s[1]-n[1]))/r;return o=Math.max(0,Math.min(1,o)),jn(e,[n[0]+o*(s[0]-n[0]),n[1]+o*(s[1]-n[1])])}function Fo(e){return[[e.left,e.top,e.right,e.top],[e.left,e.bottom,e.right,e.bottom]]}function Do(e){return[[e.left,e.top,e.left,e.bottom],[e.right,e.top,e.right,e.bottom]]}function Bo(e,t){return e[0]+=t,e[2]+=t,e}function Lo(e,t){return e[1]+=t,e[3]+=t,e}function mc(e,t){return e[0]===e[2]?Bo(e,t):Lo(e,t)}function gc(e,t){var n;return(n=t.elemStyle)!=null&&n.inline?Do(e):Fo(e)}function yc(e){return[e.x,e.y,e.width,e.height]}const Sr={[ut.ROW]:{getSegs:Do,shiftHighlighter:Bo},[ut.COLUMN]:{getSegs:Fo,shiftHighlighter:Lo},[ut.AUTO]:{getSegs:gc,shiftHighlighter:mc}},gt={PRE:"pre",AFTER:"after"};function vc(e,t){t.forEach(n=>{e.addChild(n)})}function Ec(e,t){let n=e;const s=e.parentNode,r=t.slice();for(;r.length;){const o=r.pop();s.insertNodeBefore(n,o),n=o}}function bc(e,t){let n=e;const s=e.parentNode,r=t.slice();for(;r.length;){const o=r.shift();s.insertNodeAfter(n,o),n=o}}function _c(e,t){const n={};return t.forEach(s=>{s in e&&delete e[s]}),n}function ko(e){var t,n;if((n=(t=e.parentNode)==null?void 0:t.elementMeta)!=null&&n.isAbsolute){const s=dn(e.staticStyle);_c(s,["left","right","top","bottom"]),e.staticStyle=is(s)}}function Ns(e){e.forEach(t=>{ko(t)})}async function xc(e,t,n,s,r){var y;const o=await e.getElementsInfoByNodePath(s);let{getSegs:i,shiftHighlighter:l}=Sr[r],a=1/0,c,d,h;if(s.forEach(x=>{o[x].rects.forEach(T=>{i(T,o[x]).forEach((j,H)=>{const K=Tr(n,j);K<a&&(a=K,c=j,d=x,h=H===0?gt.PRE:gt.AFTER)})})}),t){const x=t.nodePath,O=((y=t.parentNode.elementInfo)==null?void 0:y.direction)||ut.AUTO,{getSegs:T,shiftHighlighter:k}=Sr[O],j=await e.getElementInfoByNodePath(x),H=j.rects[0];T(H,j).forEach((I,J)=>{const fe=Tr(n,I);fe<a&&(a=fe,c=I,d=x,h=J===0?gt.PRE:gt.AFTER,l=k)})}return l(c,h===gt.PRE?1.5:-1.5),{nearestSeg:c,nodepath:d,loc:h}}const wc={dragover(e,t,n){t.nodePath="",t.loc="",e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()},drop(e,t,n,s){e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()}},Cc=e=>({dragover(t,n,s){const r=s.elementInfo,o=yc(r.rects[0]);t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!0,o),t.highlightNodeByNodePath(r.target),n.nodePath=r.target,t.setCursorInFrame("copy")},drop(t,n,s,r){const o=me(e,n.nodePath);o&&(Ns(s),vc(o,s)),t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!1),t.closeHighlight(),r()}});async function jo(e,t,n,s,r,o){const{nearestSeg:i,nodepath:l,loc:a}=await xc(e,t,s,r,o);e.surface.highlightSeg(!0,i),e.surface.highlightEmptySlot(!1),t?e.highlightNodeByNodePath(t.nodePath):e.closeHighlight(),n.nodePath=l,n.loc=a,e.setCursorInFrame("copy")}function Ho(e,t,n){t===gt.PRE?Ec(e,n):bc(e,n)}const Pr=e=>({async dragover(t,n,s){const r=[s.eventMeta.clientX,s.eventMeta.clientY],o=e.getChildren().map(i=>i.nodePath);o.length>0&&await jo(t,null,n,r,o,ut.AUTO)},drop(t,n,s,r){const o=me(e,n.nodePath);o&&(Ns(s),Ho(o,n.loc,s)),t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!1),t.closeHighlight(),r()}}),Tc=(e,t,n)=>({async dragover(s,r,o){var c;const i=[o.eventMeta.clientX,o.eventMeta.clientY],l=t.getChildren().filter(d=>!n.includes(d)).map(d=>d.nodePath),a=((c=t.elementMeta)==null?void 0:c.direction)||ut.AUTO;l.length>0&&await jo(s,t,r,i,l,a)},drop(s,r,o,i){const l=me(e,r.nodePath);l&&(Ns(o),Ho(l,r.loc,o)),s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight(),i()}}),Sc=(e,t,n)=>({async dragover(s,r,o){r.nodePath=t.nodePath,r.toCoord=[o.eventMeta.clientX,o.eventMeta.clientY],s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.highlightNodeByNodePath(t.nodePath)},async drop(s,r,o,i){const l=me(e,r.nodePath);if(l){const a=r.movingNodeInfos,d=(await s.getElementInfoByNodePath(r.nodePath)).rects[0];o.forEach(h=>{if(h.parentNode===l){const y=r.toCoord[0]-r.fromCoord[0],x=r.toCoord[1]-r.fromCoord[1],O=a[h.nodePath];if(O){const T=O.rects[0],k=Object.assign({...dn(h.staticStyle),left:`${T.x-d.x+y}px`,top:`${T.y-d.y+x}px`});h.staticStyle=is(k),h.updateComponentKey()}}else{ko(h);const y=Object.assign({...dn(h.staticStyle),left:`${r.toCoord[0]-d.x}px`,top:`${r.toCoord[1]-d.y}px`});l.addChild(h),h.staticStyle=is(y)}s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight()}),i()}}});function Pc(e,t,n){var s;if(e.notAllowed)return wc;if(e.inFrame){const r=e.elementInfo;if(r!=null&&r.isEmptySlot)return Cc(t);if(r!=null&&r.target){const o=me(t,r.target);if(o){const i=o.elementMeta.isContainer?o:o.parentNode;return i.elementMeta?(s=i==null?void 0:i.elementMeta)!=null&&s.isAbsolute?Sc(t,i):Tc(t,i,n):Pr(t)}}else return Pr(t)}}function Ac(e,t,n){return async(s,r,o)=>{const i=o.map(h=>h.nodePath);r.fromCoord=[n.clientX,n.clientY],r.fromNodePath=t.target,r.fromAbsolute=!0;const l=await s.getElementsInfoByNodePath(i);r.movingNodeInfos=l;const c=me(e,t.target).parentNode,d={nodePaths:[]};o.forEach(h=>{if(h.parentNode===c){const y=h.nodePath;d.nodePaths.push(y)}}),d.nodePaths.length>0&&s.makeDraggingElemMove(d)}}function Ic(e,t,n){var s;if(t!=null&&t.target){const r=me(e,t.target);if(r){const o=r.parentNode;if((s=o==null?void 0:o.elementMeta)!=null&&s.isAbsolute)return Ac(e,t,n)}}return null}class Mc extends EventTarget{constructor(t){super(),this.project=t}async load(t){this.iframe=t,await this.launch()}async launch(){this.dispatchEvent(new CustomEvent("simulator:ready"))}async updateProject(){}}const Nc="modulepreload",Oc=function(e){return"/webcontainer-ide/"+e},Ar={},Hn=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Oc(o),o in Ar)return;Ar[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let d=r.length-1;d>=0;d--){const h=r[d];if(h.href===o&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Nc,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var Rc=/(%?)(%([sdjo]))/g;function $c(e,t){switch(t){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;const n=JSON.stringify(e);return n==="{}"||n==="[]"||/^\[object .+?\]$/.test(n)?e:n}}}function ls(e,...t){if(t.length===0)return e;let n=0,s=e.replace(Rc,(r,o,i,l)=>{const a=t[n],c=$c(a,l);return o?r:(n++,c)});return n<t.length&&(s+=` ${t.slice(n).join(" ")}`),s=s.replace(/%{2,2}/g,"%"),s}var Fc=2;function Dc(e){if(!e.stack)return;const t=e.stack.split(`
`);t.splice(1,Fc),e.stack=t.join(`
`)}var Bc=class extends Error{constructor(e,...t){super(e),this.message=e,this.name="Invariant Violation",this.message=ls(e,...t),Dc(this)}},Uo=(e,t,...n)=>{if(!e)throw new Bc(t,...n)};Uo.as=(e,t,n,...s)=>{if(!t)throw e.prototype.name!=null?new e(ls(n,s)):e(ls(n,s))};var as=function(e,t){return as=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])},as(e,t)};function eu(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");as(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var yt=function(){return yt=Object.assign||function(t){for(var n,s=1,r=arguments.length;s<r;s++){n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},yt.apply(this,arguments)};function Lc(e,t,n,s){function r(o){return o instanceof n?o:new n(function(i){i(o)})}return new(n||(n=Promise))(function(o,i){function l(d){try{c(s.next(d))}catch(h){i(h)}}function a(d){try{c(s.throw(d))}catch(h){i(h)}}function c(d){d.done?o(d.value):r(d.value).then(l,a)}c((s=s.apply(e,t||[])).next())})}function kc(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},s,r,o,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(c){return function(d){return a([c,d])}}function a(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(o=c[0]&2?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(d){c=[6,d],r=0}finally{s=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function tu(e,t,n){if(n||arguments.length===2)for(var s=0,r=t.length,o;s<r;s++)(o||!(s in t))&&(o||(o=Array.prototype.slice.call(t,0,s)),o[s]=t[s]);return e.concat(o||Array.prototype.slice.call(t))}var jc=function(e){return"[sandpack-client]: ".concat(e)};function Un(e,t){return t===void 0&&(t="Value is nullish"),Uo(e!=null,jc(t)),e}var Hc='"dependencies" was not specified - provide either a package.json or a "dependencies" value',Ir='"entry" was not specified - provide either a package.json with the "main" field or an "entry" value';function Uc(e,t,n){return e===void 0&&(e={}),t===void 0&&(t={}),n===void 0&&(n="/index.js"),JSON.stringify({name:"sandpack-project",main:n,dependencies:e,devDependencies:t},null,2)}function nu(e,t,n,s){var r,o,i=qc(e),l=i["/package.json"];if(!l)return Un(t,Hc),Un(s,Ir),i["/package.json"]={code:Uc(t,n,s)},i;if(l){var a=JSON.parse(l.code);Un(!(!t&&!a.dependencies),Ir),t&&(a.dependencies=yt(yt({},(r=a.dependencies)!==null&&r!==void 0?r:{}),t??{})),n&&(a.devDependencies=yt(yt({},(o=a.devDependencies)!==null&&o!==void 0?o:{}),n??{})),s&&(a.main=s),i["/package.json"]={code:JSON.stringify(a,null,2)}}return i}function su(e){var t;if(e.title==="SyntaxError"){var n=e.title,s=e.path,r=e.message,o=e.line,i=e.column;return{title:n,path:s,message:r,line:o,column:i}}var l=Kc((t=e.payload)===null||t===void 0?void 0:t.frames);if(!l)return{message:e.message};var a=Vc(l),c=Wc(l),d=zc(l._originalFileName,e.message,c,a);return{message:d,title:e.title,path:l._originalFileName,line:l._originalLineNumber,column:l._originalColumnNumber}}function Kc(e){if(e)return e.find(function(t){return!!t._originalFileName})}function Wc(e){return e?" (".concat(e._originalLineNumber,":").concat(e._originalColumnNumber,")"):""}function Vc(e){var t=e._originalScriptCode[e._originalScriptCode.length-1],n=t.lineNumber.toString().length,s=2,r=3,o=s+n+r+e._originalColumnNumber;return e._originalScriptCode.reduce(function(i,l){var a=l.highlight?">":" ",c=l.lineNumber.toString().length===n?"".concat(l.lineNumber):" ".concat(l.lineNumber),d=l.highlight?`
`+" ".repeat(o)+"^":"";return i+`
`+a+" "+c+" | "+l.content+d},"")}function zc(e,t,n,s){return"".concat(e,": ").concat(t).concat(n,`
`).concat(s)}var qc=function(e){return typeof e=="string"?e.startsWith("/")?e:"/".concat(e):Array.isArray(e)?e.map(function(t){return t.startsWith("/")?t:"/".concat(t)}):typeof e=="object"&&e!==null?Object.entries(e).reduce(function(t,n){var s=n[0],r=n[1],o=s.startsWith("/")?s:"/".concat(s);return t[o]=r,t},{}):null},Mr;(function(e){e[e.None=0]="None",e[e.Error=10]="Error",e[e.Warning=20]="Warning",e[e.Info=30]="Info",e[e.Debug=40]="Debug"})(Mr||(Mr={}));function Yc(e,t,n){var s;return n===void 0&&(n={}),Lc(this,void 0,void 0,function(){var r,o,i;return kc(this,function(l){switch(l.label){case 0:switch(r=(s=t.template)!==null&&s!==void 0?s:"parcel",i=r,i){case"node":return[3,1];case"static":return[3,3]}return[3,5];case 1:return[4,Hn(()=>import("./index-e7c8ac88.js"),["assets/index-e7c8ac88.js","assets/base-80a1f760-a7ab5117.js","assets/consoleHook-cdbe54ab-169dbb7e.js"]).then(function(a){return a.SandpackNode})];case 2:return o=l.sent(),[3,7];case 3:return[4,Hn(()=>import("./index-ec7d9378-3d8d0af9.js"),["assets/index-ec7d9378-3d8d0af9.js","assets/consoleHook-cdbe54ab-169dbb7e.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackStatic})];case 4:return o=l.sent(),[3,7];case 5:return[4,Hn(()=>import("./index-1339511d.js"),["assets/index-1339511d.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackRuntime})];case 6:o=l.sent(),l.label=7;case 7:return[2,new o(e,t,n)]}})})}class Xc extends Mc{constructor(){super(...arguments);L(this,"options",{showOpenInCodeSandbox:!1,showErrorScreen:!1,showLoadingScreen:!0})}async launch(){const n=await Yc(this.iframe,this.project,this.options);this.client=n,console.log(n)}async updateProject(n,s){this.project.files["/"+n]={code:s},this.client.updateSandbox(this.project)}}console.log(Pn);const Ae=dc(ac);Pn.files["/src/App.jsx"]={code:Ae.toReactFCFile()};console.log(Pn);const Ko=new Xc(Pn),ne=new tc({simulator:Ko,getSourceByNodePath(e){return me(Ae,e)}});ne.registMethod("getSubNodePath",{isAsync:!1,body(e){return me(Ae,e).children.map(n=>n.nodePath)}});ne.registMethod("getSiblingNodePath",{isAsync:!1,body(e){const t=me(Ae,e),{prev:n,after:s}=t.getSiblings();return{prev:n&&n.nodePath,after:s&&s.nodePath}}});ne.registMethod("getParentNodePath",{isAsync:!1,body(e){return me(Ae,e).parentNode.nodePath}});ne.addEventListener("ready",()=>{ne.startObserveRootElem("#root")});ne.$mount(document.querySelector("#app"));function Wo(){const e=Ae.toReactFCFile();console.log(e),Ko.updateProject("src/App.jsx",e)}function Os(e,t,n){ne.clearFocus();const s={nodePath:"",loc:"",isEmptySlot:!1,fromAbsolute:!1,movingNodeInfos:[],fromCoord:[0,0],toCoord:[0,0],fromNodePath:null};let r=null;const o=t.map(i=>i.nodePath);ne.doDrag(e,o,async()=>{if(n){const{elementInfo:i,eventMeta:l}=n.detail,a=Ic(Ae,i,l);a&&await a(ne,s,t)}},async(i,l)=>{r=Pc(i,Ae,t),await r.dragover(ne,s,i),l()},async()=>{await r.drop(ne,s,t,()=>{Wo()}),ne.setCursorInFrame("auto")})}const Nr=document.getElementById("button");let Jc=0;Nr.addEventListener("mousedown",e=>{e.preventDefault(),e.stopPropagation();const t=new dt({concept:"ViewElement",tag:"Button",innerText:"buttonX"+Jc++});t.elementMeta=Ms(t),Os(Nr,[t])});const Or=document.getElementById("Flex");Or.addEventListener("mousedown",e=>{e.preventDefault(),e.stopPropagation();const t=new dt({concept:"ViewElement",tag:"Flex"});t.elementMeta=Ms(t),Os(Or,[t])});ne.addEventListener("frame:dragstart",e=>{const t=e.detail.elementInfo.target,n=me(Ae,t),s=ne.surface.hasTarget(n);let r=[n];s&&(r=ne.surface.getFocusNodes());const o=document.createElement("div");o.innerText=n.tag,Os(o,r,e)});ne.addEventListener("frame:requestEditContent",e=>{const t=e.detail.elementInfo.target;me(Ae,t).elementMeta.supportEditContent&&ne.doEditContent(t)});ne.addEventListener("frame:contentChange",e=>{const t=e.detail.elementInfo.target,n=me(Ae,t);if(n.elementMeta.supportEditContent){const s=e.detail.innerText;n.innerText=s,Wo()}});export{Mr as S,eu as _,Lc as a,kc as b,yt as c,jc as d,Uc as e,nu as f,tu as g,su as h,Uo as i,Un as n};
