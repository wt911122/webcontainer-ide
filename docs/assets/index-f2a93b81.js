var Xo=Object.defineProperty;var Jo=(e,t,n)=>t in e?Xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>(Jo(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Zo=("transform"in document.documentElement.style?"transform":void 0)||("-webkit-transform"in document.documentElement.style?"-webkit-transform":void 0)||("-moz-transform"in document.documentElement.style?"-moz-transform":void 0)||("-ms-transform"in document.documentElement.style?"-ms-transform":void 0)||("-o-transform"in document.documentElement.style?"-o-transform":void 0),hn=function(e={}){let t,n;const s=e.tag,r=document.createElement(s);if(s==="style")return r.type="text/css",r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText)),r;if(e.attributes)for(t in e.attributes)n=e.attributes[t],r.setAttribute(t,n);if(e.style)for(t in e.style)n=e.style[t],r.style[t]=n;if(e.data)for(t in e.data)n=e.data[t],r.dataset[t]=n;return e.className&&e.className.forEach(o=>{console.log(o),r.classList.add(o)}),e.textContent!==void 0&&(r.textContent=e.textContent),e.childNodes&&[].concat(e.childNodes).forEach(o=>{r.appendChild(o)}),r};function cs(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const q={},yt=[],Se=()=>{},Qo=()=>!1,Go=/^on[^a-z]/,pn=e=>Go.test(e),us=e=>e.startsWith("onUpdate:"),se=Object.assign,fs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ei=Object.prototype.hasOwnProperty,L=(e,t)=>ei.call(e,t),N=Array.isArray,vt=e=>gn(e)==="[object Map]",$r=e=>gn(e)==="[object Set]",$=e=>typeof e=="function",ee=e=>typeof e=="string",mn=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",Dr=e=>(Y(e)||$(e))&&$(e.then)&&$(e.catch),Fr=Object.prototype.toString,gn=e=>Fr.call(e),ti=e=>gn(e).slice(8,-1),Lr=e=>gn(e)==="[object Object]",ds=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sn=cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ni=/-(\w)/g,_t=yn(e=>e.replace(ni,(t,n)=>n?n.toUpperCase():"")),si=/\B([A-Z])/g,Ct=yn(e=>e.replace(si,"-$1").toLowerCase()),Br=yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),On=yn(e=>e?`on${Br(e)}`:""),wt=(e,t)=>!Object.is(e,t),Rn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},on=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ri=e=>{const t=parseFloat(e);return isNaN(t)?e:t},oi=e=>{const t=ee(e)?Number(e):NaN;return isNaN(t)?e:t};let js;const Wn=()=>js||(js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Be(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ee(s)?ci(s):Be(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(ee(e)||Y(e))return e}const ii=/;(?![^(]*\))/g,li=/:([^]+)/,ai=/\/\*[^]*?\*\//g;function ci(e){const t={};return e.replace(ai,"").split(ii).forEach(n=>{if(n){const s=n.split(li);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Oe(e){let t="";if(ee(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const s=Oe(e[n]);s&&(t+=s+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ui="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fi=cs(ui);function kr(e){return!!e||e===""}const di=e=>ee(e)?e:e==null?"":N(e)||Y(e)&&(e.toString===Fr||!$(e.toString))?JSON.stringify(e,jr,2):String(e),jr=(e,t)=>t&&t.__v_isRef?jr(e,t.value):vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:$r(t)?{[`Set(${t.size})`]:[...t.values()]}:Y(t)&&!N(t)&&!Lr(t)?String(t):t;let xe;class hi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function pi(e,t=xe){t&&t.active&&t.effects.push(e)}function mi(){return xe}const hs=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Hr=e=>(e.w&Ye)>0,Ur=e=>(e.n&Ye)>0,gi=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ye},yi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Hr(r)&&!Ur(r)?r.delete(e):t[n++]=r,r.w&=~Ye,r.n&=~Ye}t.length=n}},zn=new WeakMap;let Ot=0,Ye=1;const qn=30;let Te;const ct=Symbol(""),Yn=Symbol("");class ps{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pi(this,s)}run(){if(!this.active)return this.fn();let t=Te,n=ze;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,ze=!0,Ye=1<<++Ot,Ot<=qn?gi(this):Hs(this),this.fn()}finally{Ot<=qn&&yi(this),Ye=1<<--Ot,Te=this.parent,ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(Hs(this),this.onStop&&this.onStop(),this.active=!1)}}function Hs(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ze=!0;const Kr=[];function St(){Kr.push(ze),ze=!1}function It(){const e=Kr.pop();ze=e===void 0?!0:e}function pe(e,t,n){if(ze&&Te){let s=zn.get(e);s||zn.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=hs()),Vr(r)}}function Vr(e,t){let n=!1;Ot<=qn?Ur(e)||(e.n|=Ye,n=!Hr(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Fe(e,t,n,s,r,o){const i=zn.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&N(e)){const a=Number(s);i.forEach((c,d)=>{(d==="length"||!mn(d)&&d>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":N(e)?ds(n)&&l.push(i.get("length")):(l.push(i.get(ct)),vt(e)&&l.push(i.get(Yn)));break;case"delete":N(e)||(l.push(i.get(ct)),vt(e)&&l.push(i.get(Yn)));break;case"set":vt(e)&&l.push(i.get(ct));break}if(l.length===1)l[0]&&Xn(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Xn(hs(a))}}function Xn(e,t){const n=N(e)?e:[...e];for(const s of n)s.computed&&Us(s);for(const s of n)s.computed||Us(s)}function Us(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const vi=cs("__proto__,__v_isRef,__isVue"),Wr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mn)),Ks=Ei();function Ei(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=B(this);for(let o=0,i=this.length;o<i;o++)pe(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(B)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const s=B(this)[t].apply(this,n);return It(),s}}),e}function bi(e){const t=B(this);return pe(t,"has",e),t.hasOwnProperty(e)}class zr{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,s){const r=this._isReadonly,o=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw"&&s===(r?o?Ri:Jr:o?Xr:Yr).get(t))return t;const i=N(t);if(!r){if(i&&L(Ks,n))return Reflect.get(Ks,n,s);if(n==="hasOwnProperty")return bi}const l=Reflect.get(t,n,s);return(mn(n)?Wr.has(n):vi(n))||(r||pe(t,"get",n),o)?l:ue(l)?i&&ds(n)?l:l.value:Y(l)?r?Zr(l):lt(l):l}}class qr extends zr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(kt(o)&&ue(o)&&!ue(s))return!1;if(!this._shallow&&(!Jn(s)&&!kt(s)&&(o=B(o),s=B(s)),!N(t)&&ue(o)&&!ue(s)))return o.value=s,!0;const i=N(t)&&ds(n)?Number(n)<t.length:L(t,n),l=Reflect.set(t,n,s,r);return t===B(r)&&(i?wt(s,o)&&Fe(t,"set",n,s):Fe(t,"add",n,s)),l}deleteProperty(t,n){const s=L(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Fe(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!mn(n)||!Wr.has(n))&&pe(t,"has",n),s}ownKeys(t){return pe(t,"iterate",N(t)?"length":ct),Reflect.ownKeys(t)}}class _i extends zr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const wi=new qr,xi=new _i,Ti=new qr(!0),ms=e=>e,vn=e=>Reflect.getPrototypeOf(e);function Xt(e,t,n=!1,s=!1){e=e.__v_raw;const r=B(e),o=B(t);n||(wt(t,o)&&pe(r,"get",t),pe(r,"get",o));const{has:i}=vn(r),l=s?ms:n?Es:vs;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function Jt(e,t=!1){const n=this.__v_raw,s=B(n),r=B(e);return t||(wt(e,r)&&pe(s,"has",e),pe(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Zt(e,t=!1){return e=e.__v_raw,!t&&pe(B(e),"iterate",ct),Reflect.get(e,"size",e)}function Vs(e){e=B(e);const t=B(this);return vn(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function Ws(e,t){t=B(t);const n=B(this),{has:s,get:r}=vn(n);let o=s.call(n,e);o||(e=B(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?wt(t,i)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function zs(e){const t=B(this),{has:n,get:s}=vn(t);let r=n.call(t,e);r||(e=B(e),r=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return r&&Fe(t,"delete",e,void 0),o}function qs(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function Qt(e,t){return function(s,r){const o=this,i=o.__v_raw,l=B(i),a=t?ms:e?Es:vs;return!e&&pe(l,"iterate",ct),i.forEach((c,d)=>s.call(r,a(c),a(d),o))}}function Gt(e,t,n){return function(...s){const r=this.__v_raw,o=B(r),i=vt(o),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=r[e](...s),d=n?ms:t?Es:vs;return!t&&pe(o,"iterate",a?Yn:ct),{next(){const{value:h,done:y}=c.next();return y?{value:h,done:y}:{value:l?[d(h[0]),d(h[1])]:d(h),done:y}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ci(){const e={get(o){return Xt(this,o)},get size(){return Zt(this)},has:Jt,add:Vs,set:Ws,delete:zs,clear:qs,forEach:Qt(!1,!1)},t={get(o){return Xt(this,o,!1,!0)},get size(){return Zt(this)},has:Jt,add:Vs,set:Ws,delete:zs,clear:qs,forEach:Qt(!1,!0)},n={get(o){return Xt(this,o,!0)},get size(){return Zt(this,!0)},has(o){return Jt.call(this,o,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Qt(!0,!1)},s={get(o){return Xt(this,o,!0,!0)},get size(){return Zt(this,!0)},has(o){return Jt.call(this,o,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Qt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Gt(o,!1,!1),n[o]=Gt(o,!0,!1),t[o]=Gt(o,!1,!0),s[o]=Gt(o,!0,!0)}),[e,n,t,s]}const[Si,Ii,Ai,Pi]=Ci();function gs(e,t){const n=t?e?Pi:Ai:e?Ii:Si;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(L(n,r)&&r in s?n:s,r,o)}const Ni={get:gs(!1,!1)},Mi={get:gs(!1,!0)},Oi={get:gs(!0,!1)},Yr=new WeakMap,Xr=new WeakMap,Jr=new WeakMap,Ri=new WeakMap;function $i(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Di(e){return e.__v_skip||!Object.isExtensible(e)?0:$i(ti(e))}function lt(e){return kt(e)?e:ys(e,!1,wi,Ni,Yr)}function Fi(e){return ys(e,!1,Ti,Mi,Xr)}function Zr(e){return ys(e,!0,xi,Oi,Jr)}function ys(e,t,n,s,r){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Di(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Et(e){return kt(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function kt(e){return!!(e&&e.__v_isReadonly)}function Jn(e){return!!(e&&e.__v_isShallow)}function Qr(e){return Et(e)||kt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Gr(e){return on(e,"__v_skip",!0),e}const vs=e=>Y(e)?lt(e):e,Es=e=>Y(e)?Zr(e):e;function Li(e){ze&&Te&&(e=B(e),Vr(e.dep||(e.dep=hs())))}function Bi(e,t){e=B(e);const n=e.dep;n&&Xn(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function $e(e){return ue(e)?e.value:e}const ki={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ue(r)&&!ue(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function eo(e){return Et(e)?e:new Proxy(e,ki)}class ji{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ps(t,()=>{this._dirty||(this._dirty=!0,Bi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=B(this);return Li(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Hi(e,t,n=!1){let s,r;const o=$(e);return o?(s=e,r=Se):(s=e.get,r=e.set),new ji(s,r,o||!r,n)}function qe(e,t,n,s){let r;try{r=s?e(...s):e()}catch(o){En(o,t,n)}return r}function Ee(e,t,n,s){if($(e)){const o=qe(e,t,n,s);return o&&Dr(o)&&o.catch(i=>{En(i,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(Ee(e[o],t,n,s));return r}function En(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,l=n;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,i,l)===!1)return}o=o.parent}const a=t.appContext.config.errorHandler;if(a){qe(a,null,10,[e,i,l]);return}}Ui(e,n,r,s)}function Ui(e,t,n,s=!0){console.error(e)}let jt=!1,Zn=!1;const ie=[];let Me=0;const bt=[];let De=null,rt=0;const to=Promise.resolve();let bs=null;function Ki(e){const t=bs||to;return e?t.then(this?e.bind(this):e):t}function Vi(e){let t=Me+1,n=ie.length;for(;t<n;){const s=t+n>>>1,r=ie[s],o=Ht(r);o<e||o===e&&r.pre?t=s+1:n=s}return t}function _s(e){(!ie.length||!ie.includes(e,jt&&e.allowRecurse?Me+1:Me))&&(e.id==null?ie.push(e):ie.splice(Vi(e.id),0,e),no())}function no(){!jt&&!Zn&&(Zn=!0,bs=to.then(ro))}function Wi(e){const t=ie.indexOf(e);t>Me&&ie.splice(t,1)}function zi(e){N(e)?bt.push(...e):(!De||!De.includes(e,e.allowRecurse?rt+1:rt))&&bt.push(e),no()}function Ys(e,t=jt?Me+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function so(e){if(bt.length){const t=[...new Set(bt)];if(bt.length=0,De){De.push(...t);return}for(De=t,De.sort((n,s)=>Ht(n)-Ht(s)),rt=0;rt<De.length;rt++)De[rt]();De=null,rt=0}}const Ht=e=>e.id==null?1/0:e.id,qi=(e,t)=>{const n=Ht(e)-Ht(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ro(e){Zn=!1,jt=!0,ie.sort(qi);const t=Se;try{for(Me=0;Me<ie.length;Me++){const n=ie[Me];n&&n.active!==!1&&qe(n,null,14)}}finally{Me=0,ie.length=0,so(),jt=!1,bs=null,(ie.length||bt.length)&&ro()}}function Yi(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||q;let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:y}=s[d]||q;y&&(r=n.map(w=>ee(w)?w.trim():w)),h&&(r=n.map(ri))}let l,a=s[l=On(t)]||s[l=On(_t(t))];!a&&o&&(a=s[l=On(Ct(t))]),a&&Ee(a,e,6,r);const c=s[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ee(c,e,6,r)}}function oo(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!$(e)){const a=c=>{const d=oo(c,t,!0);d&&(l=!0,se(i,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(Y(e)&&s.set(e,null),null):(N(o)?o.forEach(a=>i[a]=null):se(i,o),Y(e)&&s.set(e,i),i)}function bn(e,t){return!e||!pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),L(e,t[0].toLowerCase()+t.slice(1))||L(e,Ct(t))||L(e,t))}let le=null,io=null;function ln(e){const t=le;return le=e,io=e&&e.type.__scopeId||null,t}function xt(e,t=le,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&or(-1);const o=ln(t);let i;try{i=e(...r)}finally{ln(o),s._d&&or(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function $n(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:l,attrs:a,emit:c,render:d,renderCache:h,data:y,setupState:w,ctx:O,inheritAttrs:C}=e;let k,j;const H=ln(e);try{if(n.shapeFlag&4){const P=r||s,J=P;k=Ne(d.call(J,P,h,o,w,y,O)),j=a}else{const P=t;k=Ne(P.length>1?P(o,{attrs:a,slots:l,emit:c}):P(o,null)),j=t.props?a:Xi(a)}}catch(P){Lt.length=0,En(P,e,1),k=ne(be)}let K=k;if(j&&C!==!1){const P=Object.keys(j),{shapeFlag:J}=K;P.length&&J&7&&(i&&P.some(us)&&(j=Ji(j,i)),K=Xe(K,j))}return n.dirs&&(K=Xe(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),k=K,ln(H),k}const Xi=e=>{let t;for(const n in e)(n==="class"||n==="style"||pn(n))&&((t||(t={}))[n]=e[n]);return t},Ji=(e,t)=>{const n={};for(const s in e)(!us(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Zi(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:a}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Xs(s,i,c):!!i;if(a&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const y=d[h];if(i[y]!==s[y]&&!bn(c,y))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?Xs(s,i,c):!0:!!i;return!1}function Xs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!bn(n,o))return!0}return!1}function Qi({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Gi=Symbol.for("v-ndc"),el=e=>e.__isSuspense;function tl(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):zi(e)}const en={};function Dn(e,t,n){return lo(e,t,n)}function lo(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=q){var l;const a=mi()===((l=re)==null?void 0:l.scope)?re:null;let c,d=!1,h=!1;if(ue(e)?(c=()=>e.value,d=Jn(e)):Et(e)?(c=()=>e,s=!0):N(e)?(h=!0,d=e.some(P=>Et(P)||Jn(P)),c=()=>e.map(P=>{if(ue(P))return P.value;if(Et(P))return at(P);if($(P))return qe(P,a,2)})):$(e)?t?c=()=>qe(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return y&&y(),Ee(e,a,3,[w])}:c=Se,t&&s){const P=c;c=()=>at(P())}let y,w=P=>{y=H.onStop=()=>{qe(P,a,4),y=H.onStop=void 0}},O;if(Kt)if(w=Se,t?n&&Ee(t,a,3,[c(),h?[]:void 0,w]):c(),r==="sync"){const P=Zl();O=P.__watcherHandles||(P.__watcherHandles=[])}else return Se;let C=h?new Array(e.length).fill(en):en;const k=()=>{if(H.active)if(t){const P=H.run();(s||d||(h?P.some((J,fe)=>wt(J,C[fe])):wt(P,C)))&&(y&&y(),Ee(t,a,3,[P,C===en?void 0:h&&C[0]===en?[]:C,w]),C=P)}else H.run()};k.allowRecurse=!!t;let j;r==="sync"?j=k:r==="post"?j=()=>de(k,a&&a.suspense):(k.pre=!0,a&&(k.id=a.uid),j=()=>_s(k));const H=new ps(c,j);t?n?k():C=H.run():r==="post"?de(H.run.bind(H),a&&a.suspense):H.run();const K=()=>{H.stop(),a&&a.scope&&fs(a.scope.effects,H)};return O&&O.push(K),K}function nl(e,t,n){const s=this.proxy,r=ee(e)?e.includes(".")?ao(s,e):()=>s[e]:e.bind(s,s);let o;$(t)?o=t:(o=t.handler,n=t);const i=re;Tt(this);const l=lo(r,o.bind(s),n);return i?Tt(i):ut(),l}function ao(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function at(e,t){if(!Y(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))at(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)at(e[n],t);else if($r(e)||vt(e))e.forEach(n=>{at(n,t)});else if(Lr(e))for(const n in e)at(e[n],t);return e}function ws(e,t){const n=le;if(n===null)return e;const s=Cn(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,l,a,c=q]=t[o];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&at(l),r.push({dir:i,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function et(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let a=l.dir[s];a&&(St(),Ee(a,n,8,[e.el,l,e,t]),It())}}const Ve=Symbol("_leaveCb"),tn=Symbol("_enterCb");function sl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return po(()=>{e.isMounted=!0}),mo(()=>{e.isUnmounting=!0}),e}const ye=[Function,Array],co={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},rl={name:"BaseTransition",props:co,setup(e,{slots:t}){const n=Vl(),s=sl();let r;return()=>{const o=t.default&&fo(t.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(const C of o)if(C.type!==be){i=C;break}}const l=B(e),{mode:a}=l;if(s.isLeaving)return Fn(i);const c=Js(i);if(!c)return Fn(i);const d=Qn(c,l,s,n);Gn(c,d);const h=n.subTree,y=h&&Js(h);let w=!1;const{getTransitionKey:O}=c.type;if(O){const C=O();r===void 0?r=C:C!==r&&(r=C,w=!0)}if(y&&y.type!==be&&(!ot(c,y)||w)){const C=Qn(y,l,s,n);if(Gn(y,C),a==="out-in")return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Fn(i);a==="in-out"&&c.type!==be&&(C.delayLeave=(k,j,H)=>{const K=uo(s,y);K[String(y.key)]=y,k[Ve]=()=>{j(),k[Ve]=void 0,delete d.delayedLeave},d.delayedLeave=H})}return i}}},ol=rl;function uo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Qn(e,t,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:y,onAfterLeave:w,onLeaveCancelled:O,onBeforeAppear:C,onAppear:k,onAfterAppear:j,onAppearCancelled:H}=t,K=String(e.key),P=uo(n,e),J=(D,Z)=>{D&&Ee(D,s,9,Z)},fe=(D,Z)=>{const z=Z[1];J(D,Z),N(D)?D.every(oe=>oe.length<=1)&&z():D.length<=1&&z()},_e={mode:o,persisted:i,beforeEnter(D){let Z=l;if(!n.isMounted)if(r)Z=C||l;else return;D[Ve]&&D[Ve](!0);const z=P[K];z&&ot(e,z)&&z.el[Ve]&&z.el[Ve](),J(Z,[D])},enter(D){let Z=a,z=c,oe=d;if(!n.isMounted)if(r)Z=k||a,z=j||c,oe=H||d;else return;let S=!1;const X=D[tn]=me=>{S||(S=!0,me?J(oe,[D]):J(z,[D]),_e.delayedLeave&&_e.delayedLeave(),D[tn]=void 0)};Z?fe(Z,[D,X]):X()},leave(D,Z){const z=String(e.key);if(D[tn]&&D[tn](!0),n.isUnmounting)return Z();J(h,[D]);let oe=!1;const S=D[Ve]=X=>{oe||(oe=!0,Z(),X?J(O,[D]):J(w,[D]),D[Ve]=void 0,P[z]===e&&delete P[z])};P[z]=e,y?fe(y,[D,S]):S()},clone(D){return Qn(D,t,n,s)}};return _e}function Fn(e){if(_n(e))return e=Xe(e),e.children=null,e}function Js(e){return _n(e)?e.children?e.children[0]:void 0:e}function Gn(e,t){e.shapeFlag&6&&e.component?Gn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fo(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===he?(i.patchFlag&128&&r++,s=s.concat(fo(i.children,t,l))):(t||i.type!==be)&&s.push(l!=null?Xe(i,{key:l}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}const $t=e=>!!e.type.__asyncLoader,_n=e=>e.type.__isKeepAlive;function il(e,t){ho(e,"a",t)}function ll(e,t){ho(e,"da",t)}function ho(e,t,n=re){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(wn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)_n(r.parent.vnode)&&al(s,t,n,r),r=r.parent}}function al(e,t,n,s){const r=wn(t,e,s,!0);go(()=>{fs(s[t],r)},n)}function wn(e,t,n=re,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;St(),Tt(n);const l=Ee(t,n,e,i);return ut(),It(),l});return s?r.unshift(o):r.push(o),o}}const je=e=>(t,n=re)=>(!Kt||e==="sp")&&wn(e,(...s)=>t(...s),n),cl=je("bm"),po=je("m"),ul=je("bu"),fl=je("u"),mo=je("bum"),go=je("um"),dl=je("sp"),hl=je("rtg"),pl=je("rtc");function ml(e,t=re){wn("ec",e,t)}function gl(e,t,n,s){let r;const o=n&&n[s];if(N(e)||ee(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o&&o[i])}else if(Y(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,o&&o[l]));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];r[l]=t(e[c],c,l,o&&o[l])}}else r=[];return n&&(n[s]=r),r}function yl(e,t,n={},s,r){if(le.isCE||le.parent&&$t(le.parent)&&le.parent.isCE)return t!=="default"&&(n.name=t),ne("slot",n,s&&s());let o=e[t];o&&o._c&&(o._d=!1),ve();const i=o&&yo(o(n)),l=ft(he,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function yo(e){return e.some(t=>un(t)?!(t.type===be||t.type===he&&!yo(t.children)):!0)?e:null}const es=e=>e?No(e)?Cn(e)||e.proxy:es(e.parent):null,Dt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>es(e.parent),$root:e=>es(e.root),$emit:e=>e.emit,$options:e=>xs(e),$forceUpdate:e=>e.f||(e.f=()=>_s(e.update)),$nextTick:e=>e.n||(e.n=Ki.bind(e.proxy)),$watch:e=>nl.bind(e)}),Ln=(e,t)=>e!==q&&!e.__isScriptSetup&&L(e,t),vl={get({_:e},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const w=i[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(Ln(s,t))return i[t]=1,s[t];if(r!==q&&L(r,t))return i[t]=2,r[t];if((c=e.propsOptions[0])&&L(c,t))return i[t]=3,o[t];if(n!==q&&L(n,t))return i[t]=4,n[t];ts&&(i[t]=0)}}const d=Dt[t];let h,y;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==q&&L(n,t))return i[t]=4,n[t];if(y=a.config.globalProperties,L(y,t))return y[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return Ln(r,t)?(r[t]=n,!0):s!==q&&L(s,t)?(s[t]=n,!0):L(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==q&&L(e,i)||Ln(t,i)||(l=o[0])&&L(l,i)||L(s,i)||L(Dt,i)||L(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:L(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Zs(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ts=!0;function El(e){const t=xs(e),n=e.proxy,s=e.ctx;ts=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:a,inject:c,created:d,beforeMount:h,mounted:y,beforeUpdate:w,updated:O,activated:C,deactivated:k,beforeDestroy:j,beforeUnmount:H,destroyed:K,unmounted:P,render:J,renderTracked:fe,renderTriggered:_e,errorCaptured:D,serverPrefetch:Z,expose:z,inheritAttrs:oe,components:S,directives:X,filters:me}=t;if(c&&bl(c,s,null),i)for(const Q in i){const V=i[Q];$(V)&&(s[Q]=V.bind(n))}if(r){const Q=r.call(n,n);Y(Q)&&(e.data=lt(Q))}if(ts=!0,o)for(const Q in o){const V=o[Q],Qe=$(V)?V.bind(n,n):$(V.get)?V.get.bind(n,n):Se,qt=!$(V)&&$(V.set)?V.set.bind(n):Se,Ge=Oo({get:Qe,set:qt});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ie=>Ge.value=Ie})}if(l)for(const Q in l)vo(l[Q],s,n,Q);if(a){const Q=$(a)?a.call(n):a;Reflect.ownKeys(Q).forEach(V=>{bo(V,Q[V])})}d&&Qs(d,e,"c");function te(Q,V){N(V)?V.forEach(Qe=>Q(Qe.bind(n))):V&&Q(V.bind(n))}if(te(cl,h),te(po,y),te(ul,w),te(fl,O),te(il,C),te(ll,k),te(ml,D),te(pl,fe),te(hl,_e),te(mo,H),te(go,P),te(dl,Z),N(z))if(z.length){const Q=e.exposed||(e.exposed={});z.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:Qe=>n[V]=Qe})})}else e.exposed||(e.exposed={});J&&e.render===Se&&(e.render=J),oe!=null&&(e.inheritAttrs=oe),S&&(e.components=S),X&&(e.directives=X)}function bl(e,t,n=Se){N(e)&&(e=ns(e));for(const s in e){const r=e[s];let o;Y(r)?"default"in r?o=Ft(r.from||s,r.default,!0):o=Ft(r.from||s):o=Ft(r),ue(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function Qs(e,t,n){Ee(N(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function vo(e,t,n,s){const r=s.includes(".")?ao(n,s):()=>n[s];if(ee(e)){const o=t[e];$(o)&&Dn(r,o)}else if($(e))Dn(r,e.bind(n));else if(Y(e))if(N(e))e.forEach(o=>vo(o,t,n,s));else{const o=$(e.handler)?e.handler.bind(n):t[e.handler];$(o)&&Dn(r,o,e)}}function xs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(c=>an(a,c,i,!0)),an(a,t,i)),Y(t)&&o.set(t,a),a}function an(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&an(e,o,n,!0),r&&r.forEach(i=>an(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=_l[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const _l={data:Gs,props:er,emits:er,methods:Rt,computed:Rt,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:Rt,directives:Rt,watch:xl,provide:Gs,inject:wl};function Gs(e,t){return t?e?function(){return se($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function wl(e,t){return Rt(ns(e),ns(t))}function ns(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Rt(e,t){return e?se(Object.create(null),e,t):t}function er(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:se(Object.create(null),Zs(e),Zs(t??{})):t}function xl(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const s in t)n[s]=ae(e[s],t[s]);return n}function Eo(){return{app:null,config:{isNativeTag:Qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tl=0;function Cl(e,t){return function(s,r=null){$(s)||(s=se({},s)),r!=null&&!Y(r)&&(r=null);const o=Eo(),i=new WeakSet;let l=!1;const a=o.app={_uid:Tl++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Ql,get config(){return o.config},set config(c){},use(c,...d){return i.has(c)||(c&&$(c.install)?(i.add(c),c.install(a,...d)):$(c)&&(i.add(c),c(a,...d))),a},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),a},component(c,d){return d?(o.components[c]=d,a):o.components[c]},directive(c,d){return d?(o.directives[c]=d,a):o.directives[c]},mount(c,d,h){if(!l){const y=ne(s,r);return y.appContext=o,d&&t?t(y,c):e(y,c,h),l=!0,a._container=c,c.__vue_app__=a,Cn(y.component)||y.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return o.provides[c]=d,a},runWithContext(c){cn=a;try{return c()}finally{cn=null}}};return a}}let cn=null;function bo(e,t){if(re){let n=re.provides;const s=re.parent&&re.parent.provides;s===n&&(n=re.provides=Object.create(s)),n[e]=t}}function Ft(e,t,n=!1){const s=re||le;if(s||cn){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:cn._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&$(t)?t.call(s&&s.proxy):t}}function Sl(e,t,n,s=!1){const r={},o={};on(o,Tn,1),e.propsDefaults=Object.create(null),_o(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:Fi(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Il(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=B(r),[a]=e.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let y=d[h];if(bn(e.emitsOptions,y))continue;const w=t[y];if(a)if(L(o,y))w!==o[y]&&(o[y]=w,c=!0);else{const O=_t(y);r[O]=ss(a,l,O,w,e,!1)}else w!==o[y]&&(o[y]=w,c=!0)}}}else{_o(e,t,r,o)&&(c=!0);let d;for(const h in l)(!t||!L(t,h)&&((d=Ct(h))===h||!L(t,d)))&&(a?n&&(n[h]!==void 0||n[d]!==void 0)&&(r[h]=ss(a,l,h,void 0,e,!0)):delete r[h]);if(o!==l)for(const h in o)(!t||!L(t,h))&&(delete o[h],c=!0)}c&&Fe(e,"set","$attrs")}function _o(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(sn(a))continue;const c=t[a];let d;r&&L(r,d=_t(a))?!o||!o.includes(d)?n[d]=c:(l||(l={}))[d]=c:bn(e.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,i=!0)}if(o){const a=B(n),c=l||q;for(let d=0;d<o.length;d++){const h=o[d];n[h]=ss(r,a,h,c[h],e,!L(c,h))}}return i}function ss(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=L(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&$(a)){const{propsDefaults:c}=r;n in c?s=c[n]:(Tt(r),s=c[n]=a.call(null,t),ut())}else s=a}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===Ct(n))&&(s=!0))}return s}function wo(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let a=!1;if(!$(e)){const d=h=>{a=!0;const[y,w]=wo(h,t,!0);se(i,y),w&&l.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!a)return Y(e)&&s.set(e,yt),yt;if(N(o))for(let d=0;d<o.length;d++){const h=_t(o[d]);tr(h)&&(i[h]=q)}else if(o)for(const d in o){const h=_t(d);if(tr(h)){const y=o[d],w=i[h]=N(y)||$(y)?{type:y}:se({},y);if(w){const O=rr(Boolean,w.type),C=rr(String,w.type);w[0]=O>-1,w[1]=C<0||O<C,(O>-1||L(w,"default"))&&l.push(h)}}}const c=[i,l];return Y(e)&&s.set(e,c),c}function tr(e){return e[0]!=="$"}function nr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function sr(e,t){return nr(e)===nr(t)}function rr(e,t){return N(t)?t.findIndex(n=>sr(n,e)):$(t)&&sr(t,e)?0:-1}const xo=e=>e[0]==="_"||e==="$stable",Ts=e=>N(e)?e.map(Ne):[Ne(e)],Al=(e,t,n)=>{if(t._n)return t;const s=xt((...r)=>Ts(t(...r)),n);return s._c=!1,s},To=(e,t,n)=>{const s=e._ctx;for(const r in e){if(xo(r))continue;const o=e[r];if($(o))t[r]=Al(r,o,s);else if(o!=null){const i=Ts(o);t[r]=()=>i}}},Co=(e,t)=>{const n=Ts(t);e.slots.default=()=>n},Pl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),on(t,"_",n)):To(t,e.slots={})}else e.slots={},t&&Co(e,t);on(e.slots,Tn,1)},Nl=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=q;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:(se(r,t),!n&&l===1&&delete r._):(o=!t.$stable,To(t,r)),i=t}else t&&(Co(e,t),i={default:1});if(o)for(const l in r)!xo(l)&&i[l]==null&&delete r[l]};function rs(e,t,n,s,r=!1){if(N(e)){e.forEach((y,w)=>rs(y,t&&(N(t)?t[w]:t),n,s,r));return}if($t(s)&&!r)return;const o=s.shapeFlag&4?Cn(s.component)||s.component.proxy:s.el,i=r?null:o,{i:l,r:a}=e,c=t&&t.r,d=l.refs===q?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ee(c)?(d[c]=null,L(h,c)&&(h[c]=null)):ue(c)&&(c.value=null)),$(a))qe(a,l,12,[i,d]);else{const y=ee(a),w=ue(a);if(y||w){const O=()=>{if(e.f){const C=y?L(h,a)?h[a]:d[a]:a.value;r?N(C)&&fs(C,o):N(C)?C.includes(o)||C.push(o):y?(d[a]=[o],L(h,a)&&(h[a]=d[a])):(a.value=[o],e.k&&(d[e.k]=a.value))}else y?(d[a]=i,L(h,a)&&(h[a]=i)):w&&(a.value=i,e.k&&(d[e.k]=i))};i?(O.id=-1,de(O,n)):O()}}}const de=tl;function Ml(e){return Ol(e)}function Ol(e,t){const n=Wn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:a,setText:c,setElementText:d,parentNode:h,nextSibling:y,setScopeId:w=Se,insertStaticContent:O}=e,C=(u,f,p,m=null,g=null,b=null,x=!1,E=null,_=!!f.dynamicChildren)=>{if(u===f)return;u&&!ot(u,f)&&(m=Yt(u),Ie(u,g,b,!0),u=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:v,ref:I,shapeFlag:T}=f;switch(v){case xn:k(u,f,p,m);break;case be:j(u,f,p,m);break;case Bn:u==null&&H(f,p,m,x);break;case he:S(u,f,p,m,g,b,x,E,_);break;default:T&1?J(u,f,p,m,g,b,x,E,_):T&6?X(u,f,p,m,g,b,x,E,_):(T&64||T&128)&&v.process(u,f,p,m,g,b,x,E,_,dt)}I!=null&&g&&rs(I,u&&u.ref,b,f||u,!f)},k=(u,f,p,m)=>{if(u==null)s(f.el=l(f.children),p,m);else{const g=f.el=u.el;f.children!==u.children&&c(g,f.children)}},j=(u,f,p,m)=>{u==null?s(f.el=a(f.children||""),p,m):f.el=u.el},H=(u,f,p,m)=>{[u.el,u.anchor]=O(u.children,f,p,m,u.el,u.anchor)},K=({el:u,anchor:f},p,m)=>{let g;for(;u&&u!==f;)g=y(u),s(u,p,m),u=g;s(f,p,m)},P=({el:u,anchor:f})=>{let p;for(;u&&u!==f;)p=y(u),r(u),u=p;r(f)},J=(u,f,p,m,g,b,x,E,_)=>{x=x||f.type==="svg",u==null?fe(f,p,m,g,b,x,E,_):Z(u,f,g,b,x,E,_)},fe=(u,f,p,m,g,b,x,E)=>{let _,v;const{type:I,props:T,shapeFlag:A,transition:M,dirs:F}=u;if(_=u.el=i(u.type,b,T&&T.is,T),A&8?d(_,u.children):A&16&&D(u.children,_,null,m,g,b&&I!=="foreignObject",x,E),F&&et(u,null,m,"created"),_e(_,u,u.scopeId,x,m),T){for(const U in T)U!=="value"&&!sn(U)&&o(_,U,null,T[U],b,u.children,m,g,Re);"value"in T&&o(_,"value",null,T.value),(v=T.onVnodeBeforeMount)&&Pe(v,m,u)}F&&et(u,null,m,"beforeMount");const W=Rl(g,M);W&&M.beforeEnter(_),s(_,f,p),((v=T&&T.onVnodeMounted)||W||F)&&de(()=>{v&&Pe(v,m,u),W&&M.enter(_),F&&et(u,null,m,"mounted")},g)},_e=(u,f,p,m,g)=>{if(p&&w(u,p),m)for(let b=0;b<m.length;b++)w(u,m[b]);if(g){let b=g.subTree;if(f===b){const x=g.vnode;_e(u,x,x.scopeId,x.slotScopeIds,g.parent)}}},D=(u,f,p,m,g,b,x,E,_=0)=>{for(let v=_;v<u.length;v++){const I=u[v]=E?We(u[v]):Ne(u[v]);C(null,I,f,p,m,g,b,x,E)}},Z=(u,f,p,m,g,b,x)=>{const E=f.el=u.el;let{patchFlag:_,dynamicChildren:v,dirs:I}=f;_|=u.patchFlag&16;const T=u.props||q,A=f.props||q;let M;p&&tt(p,!1),(M=A.onVnodeBeforeUpdate)&&Pe(M,p,f,u),I&&et(f,u,p,"beforeUpdate"),p&&tt(p,!0);const F=g&&f.type!=="foreignObject";if(v?z(u.dynamicChildren,v,E,p,m,F,b):x||V(u,f,E,null,p,m,F,b,!1),_>0){if(_&16)oe(E,f,T,A,p,m,g);else if(_&2&&T.class!==A.class&&o(E,"class",null,A.class,g),_&4&&o(E,"style",T.style,A.style,g),_&8){const W=f.dynamicProps;for(let U=0;U<W.length;U++){const G=W[U],we=T[G],ht=A[G];(ht!==we||G==="value")&&o(E,G,we,ht,g,u.children,p,m,Re)}}_&1&&u.children!==f.children&&d(E,f.children)}else!x&&v==null&&oe(E,f,T,A,p,m,g);((M=A.onVnodeUpdated)||I)&&de(()=>{M&&Pe(M,p,f,u),I&&et(f,u,p,"updated")},m)},z=(u,f,p,m,g,b,x)=>{for(let E=0;E<f.length;E++){const _=u[E],v=f[E],I=_.el&&(_.type===he||!ot(_,v)||_.shapeFlag&70)?h(_.el):p;C(_,v,I,null,m,g,b,x,!0)}},oe=(u,f,p,m,g,b,x)=>{if(p!==m){if(p!==q)for(const E in p)!sn(E)&&!(E in m)&&o(u,E,p[E],null,x,f.children,g,b,Re);for(const E in m){if(sn(E))continue;const _=m[E],v=p[E];_!==v&&E!=="value"&&o(u,E,v,_,x,f.children,g,b,Re)}"value"in m&&o(u,"value",p.value,m.value)}},S=(u,f,p,m,g,b,x,E,_)=>{const v=f.el=u?u.el:l(""),I=f.anchor=u?u.anchor:l("");let{patchFlag:T,dynamicChildren:A,slotScopeIds:M}=f;M&&(E=E?E.concat(M):M),u==null?(s(v,p,m),s(I,p,m),D(f.children,p,I,g,b,x,E,_)):T>0&&T&64&&A&&u.dynamicChildren?(z(u.dynamicChildren,A,p,g,b,x,E),(f.key!=null||g&&f===g.subTree)&&So(u,f,!0)):V(u,f,p,I,g,b,x,E,_)},X=(u,f,p,m,g,b,x,E,_)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?g.ctx.activate(f,p,m,x,_):me(f,p,m,g,b,x,_):At(u,f,_)},me=(u,f,p,m,g,b,x)=>{const E=u.component=Kl(u,m,g);if(_n(u)&&(E.ctx.renderer=dt),Wl(E),E.asyncDep){if(g&&g.registerDep(E,te),!u.el){const _=E.subTree=ne(be);j(null,_,f,p)}return}te(E,u,f,p,g,b,x)},At=(u,f,p)=>{const m=f.component=u.component;if(Zi(u,f,p))if(m.asyncDep&&!m.asyncResolved){Q(m,f,p);return}else m.next=f,Wi(m.update),m.update();else f.el=u.el,m.vnode=f},te=(u,f,p,m,g,b,x)=>{const E=()=>{if(u.isMounted){let{next:I,bu:T,u:A,parent:M,vnode:F}=u,W=I,U;tt(u,!1),I?(I.el=F.el,Q(u,I,x)):I=F,T&&Rn(T),(U=I.props&&I.props.onVnodeBeforeUpdate)&&Pe(U,M,I,F),tt(u,!0);const G=$n(u),we=u.subTree;u.subTree=G,C(we,G,h(we.el),Yt(we),u,g,b),I.el=G.el,W===null&&Qi(u,G.el),A&&de(A,g),(U=I.props&&I.props.onVnodeUpdated)&&de(()=>Pe(U,M,I,F),g)}else{let I;const{el:T,props:A}=f,{bm:M,m:F,parent:W}=u,U=$t(f);if(tt(u,!1),M&&Rn(M),!U&&(I=A&&A.onVnodeBeforeMount)&&Pe(I,W,f),tt(u,!0),T&&Mn){const G=()=>{u.subTree=$n(u),Mn(T,u.subTree,u,g,null)};U?f.type.__asyncLoader().then(()=>!u.isUnmounted&&G()):G()}else{const G=u.subTree=$n(u);C(null,G,p,m,u,g,b),f.el=G.el}if(F&&de(F,g),!U&&(I=A&&A.onVnodeMounted)){const G=f;de(()=>Pe(I,W,G),g)}(f.shapeFlag&256||W&&$t(W.vnode)&&W.vnode.shapeFlag&256)&&u.a&&de(u.a,g),u.isMounted=!0,f=p=m=null}},_=u.effect=new ps(E,()=>_s(v),u.scope),v=u.update=()=>_.run();v.id=u.uid,tt(u,!0),v()},Q=(u,f,p)=>{f.component=u;const m=u.vnode.props;u.vnode=f,u.next=null,Il(u,f.props,m,p),Nl(u,f.children,p),St(),Ys(),It()},V=(u,f,p,m,g,b,x,E,_=!1)=>{const v=u&&u.children,I=u?u.shapeFlag:0,T=f.children,{patchFlag:A,shapeFlag:M}=f;if(A>0){if(A&128){qt(v,T,p,m,g,b,x,E,_);return}else if(A&256){Qe(v,T,p,m,g,b,x,E,_);return}}M&8?(I&16&&Re(v,g,b),T!==v&&d(p,T)):I&16?M&16?qt(v,T,p,m,g,b,x,E,_):Re(v,g,b,!0):(I&8&&d(p,""),M&16&&D(T,p,m,g,b,x,E,_))},Qe=(u,f,p,m,g,b,x,E,_)=>{u=u||yt,f=f||yt;const v=u.length,I=f.length,T=Math.min(v,I);let A;for(A=0;A<T;A++){const M=f[A]=_?We(f[A]):Ne(f[A]);C(u[A],M,p,null,g,b,x,E,_)}v>I?Re(u,g,b,!0,!1,T):D(f,p,m,g,b,x,E,_,T)},qt=(u,f,p,m,g,b,x,E,_)=>{let v=0;const I=f.length;let T=u.length-1,A=I-1;for(;v<=T&&v<=A;){const M=u[v],F=f[v]=_?We(f[v]):Ne(f[v]);if(ot(M,F))C(M,F,p,null,g,b,x,E,_);else break;v++}for(;v<=T&&v<=A;){const M=u[T],F=f[A]=_?We(f[A]):Ne(f[A]);if(ot(M,F))C(M,F,p,null,g,b,x,E,_);else break;T--,A--}if(v>T){if(v<=A){const M=A+1,F=M<I?f[M].el:m;for(;v<=A;)C(null,f[v]=_?We(f[v]):Ne(f[v]),p,F,g,b,x,E,_),v++}}else if(v>A)for(;v<=T;)Ie(u[v],g,b,!0),v++;else{const M=v,F=v,W=new Map;for(v=F;v<=A;v++){const ge=f[v]=_?We(f[v]):Ne(f[v]);ge.key!=null&&W.set(ge.key,v)}let U,G=0;const we=A-F+1;let ht=!1,Ls=0;const Pt=new Array(we);for(v=0;v<we;v++)Pt[v]=0;for(v=M;v<=T;v++){const ge=u[v];if(G>=we){Ie(ge,g,b,!0);continue}let Ae;if(ge.key!=null)Ae=W.get(ge.key);else for(U=F;U<=A;U++)if(Pt[U-F]===0&&ot(ge,f[U])){Ae=U;break}Ae===void 0?Ie(ge,g,b,!0):(Pt[Ae-F]=v+1,Ae>=Ls?Ls=Ae:ht=!0,C(ge,f[Ae],p,null,g,b,x,E,_),G++)}const Bs=ht?$l(Pt):yt;for(U=Bs.length-1,v=we-1;v>=0;v--){const ge=F+v,Ae=f[ge],ks=ge+1<I?f[ge+1].el:m;Pt[v]===0?C(null,Ae,p,ks,g,b,x,E,_):ht&&(U<0||v!==Bs[U]?Ge(Ae,p,ks,2):U--)}}},Ge=(u,f,p,m,g=null)=>{const{el:b,type:x,transition:E,children:_,shapeFlag:v}=u;if(v&6){Ge(u.component.subTree,f,p,m);return}if(v&128){u.suspense.move(f,p,m);return}if(v&64){x.move(u,f,p,dt);return}if(x===he){s(b,f,p);for(let T=0;T<_.length;T++)Ge(_[T],f,p,m);s(u.anchor,f,p);return}if(x===Bn){K(u,f,p);return}if(m!==2&&v&1&&E)if(m===0)E.beforeEnter(b),s(b,f,p),de(()=>E.enter(b),g);else{const{leave:T,delayLeave:A,afterLeave:M}=E,F=()=>s(b,f,p),W=()=>{T(b,()=>{F(),M&&M()})};A?A(b,F,W):W()}else s(b,f,p)},Ie=(u,f,p,m=!1,g=!1)=>{const{type:b,props:x,ref:E,children:_,dynamicChildren:v,shapeFlag:I,patchFlag:T,dirs:A}=u;if(E!=null&&rs(E,null,p,u,!0),I&256){f.ctx.deactivate(u);return}const M=I&1&&A,F=!$t(u);let W;if(F&&(W=x&&x.onVnodeBeforeUnmount)&&Pe(W,f,u),I&6)Yo(u.component,p,m);else{if(I&128){u.suspense.unmount(p,m);return}M&&et(u,null,f,"beforeUnmount"),I&64?u.type.remove(u,f,p,g,dt,m):v&&(b!==he||T>0&&T&64)?Re(v,f,p,!1,!0):(b===he&&T&384||!g&&I&16)&&Re(_,f,p),m&&Ds(u)}(F&&(W=x&&x.onVnodeUnmounted)||M)&&de(()=>{W&&Pe(W,f,u),M&&et(u,null,f,"unmounted")},p)},Ds=u=>{const{type:f,el:p,anchor:m,transition:g}=u;if(f===he){qo(p,m);return}if(f===Bn){P(u);return}const b=()=>{r(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(u.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:E}=g,_=()=>x(p,b);E?E(u.el,b,_):_()}else b()},qo=(u,f)=>{let p;for(;u!==f;)p=y(u),r(u),u=p;r(f)},Yo=(u,f,p)=>{const{bum:m,scope:g,update:b,subTree:x,um:E}=u;m&&Rn(m),g.stop(),b&&(b.active=!1,Ie(x,u,f,p)),E&&de(E,f),de(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Re=(u,f,p,m=!1,g=!1,b=0)=>{for(let x=b;x<u.length;x++)Ie(u[x],f,p,m,g)},Yt=u=>u.shapeFlag&6?Yt(u.component.subTree):u.shapeFlag&128?u.suspense.next():y(u.anchor||u.el),Fs=(u,f,p)=>{u==null?f._vnode&&Ie(f._vnode,null,null,!0):C(f._vnode||null,u,f,null,null,null,p),Ys(),so(),f._vnode=u},dt={p:C,um:Ie,m:Ge,r:Ds,mt:me,mc:D,pc:V,pbc:z,n:Yt,o:e};let Nn,Mn;return t&&([Nn,Mn]=t(dt)),{render:Fs,hydrate:Nn,createApp:Cl(Fs,Nn)}}function tt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function So(e,t,n=!1){const s=e.children,r=t.children;if(N(s)&&N(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=We(r[o]),l.el=i.el),n||So(i,l)),l.type===xn&&(l.el=i.el)}}function $l(e){const t=e.slice(),n=[0];let s,r,o,i,l;const a=e.length;for(s=0;s<a;s++){const c=e[s];if(c!==0){if(r=n[n.length-1],e[r]<c){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<c?o=l+1:i=l;c<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const Dl=e=>e.__isTeleport,he=Symbol.for("v-fgt"),xn=Symbol.for("v-txt"),be=Symbol.for("v-cmt"),Bn=Symbol.for("v-stc"),Lt=[];let Ce=null;function ve(e=!1){Lt.push(Ce=e?null:[])}function Fl(){Lt.pop(),Ce=Lt[Lt.length-1]||null}let Ut=1;function or(e){Ut+=e}function Io(e){return e.dynamicChildren=Ut>0?Ce||yt:null,Fl(),Ut>0&&Ce&&Ce.push(e),e}function Bt(e,t,n,s,r,o){return Io(ke(e,t,n,s,r,o,!0))}function ft(e,t,n,s,r){return Io(ne(e,t,n,s,r,!0))}function un(e){return e?e.__v_isVNode===!0:!1}function ot(e,t){return e.type===t.type&&e.key===t.key}const Tn="__vInternal",Ao=({key:e})=>e??null,rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||ue(e)||$(e)?{i:le,r:e,k:t,f:!!n}:e:null);function ke(e,t=null,n=null,s=0,r=null,o=e===he?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&rn(t),scopeId:io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:le};return l?(Cs(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=ee(n)?8:16),Ut>0&&!i&&Ce&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Ce.push(a),a}const ne=Ll;function Ll(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Gi)&&(e=be),un(e)){const l=Xe(e,t,!0);return n&&Cs(l,n),Ut>0&&!o&&Ce&&(l.shapeFlag&6?Ce[Ce.indexOf(e)]=l:Ce.push(l)),l.patchFlag|=-2,l}if(Xl(e)&&(e=e.__vccOpts),t){t=Bl(t);let{class:l,style:a}=t;l&&!ee(l)&&(t.class=Oe(l)),Y(a)&&(Qr(a)&&!N(a)&&(a=se({},a)),t.style=Be(a))}const i=ee(e)?1:el(e)?128:Dl(e)?64:Y(e)?4:$(e)?2:0;return ke(e,t,n,s,r,i,o,!0)}function Bl(e){return e?Qr(e)||Tn in e?se({},e):e:null}function Xe(e,t,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=e,l=t?jl(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ao(l),ref:t&&t.ref?n&&r?N(r)?r.concat(rn(t)):[r,rn(t)]:rn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function kl(e=" ",t=0){return ne(xn,null,e,t)}function Po(e="",t=!1){return t?(ve(),ft(be,null,e)):ne(be,null,e)}function Ne(e){return e==null||typeof e=="boolean"?ne(be):N(e)?ne(he,null,e.slice()):typeof e=="object"?We(e):ne(xn,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function Cs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Cs(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Tn in t)?t._ctx=le:r===3&&le&&(le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:le},n=32):(t=String(t),s&64?(n=16,t=[kl(t)]):n=8);e.children=t,e.shapeFlag|=n}function jl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Oe([t.class,s.class]));else if(r==="style")t.style=Be([t.style,s.style]);else if(pn(r)){const o=t[r],i=s[r];i&&o!==i&&!(N(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function Pe(e,t,n,s=null){Ee(e,t,7,[n,s])}const Hl=Eo();let Ul=0;function Kl(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Hl,o={uid:Ul++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new hi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wo(s,r),emitsOptions:oo(s,r),emit:null,emitted:null,propsDefaults:q,inheritAttrs:s.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Yi.bind(null,o),e.ce&&e.ce(o),o}let re=null;const Vl=()=>re||le;let Ss,pt,ir="__VUE_INSTANCE_SETTERS__";(pt=Wn()[ir])||(pt=Wn()[ir]=[]),pt.push(e=>re=e),Ss=e=>{pt.length>1?pt.forEach(t=>t(e)):pt[0](e)};const Tt=e=>{Ss(e),e.scope.on()},ut=()=>{re&&re.scope.off(),Ss(null)};function No(e){return e.vnode.shapeFlag&4}let Kt=!1;function Wl(e,t=!1){Kt=t;const{props:n,children:s}=e.vnode,r=No(e);Sl(e,n,r,t),Pl(e,s);const o=r?zl(e,t):void 0;return Kt=!1,o}function zl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Gr(new Proxy(e.ctx,vl));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?Yl(e):null;Tt(e),St();const o=qe(s,e,0,[e.props,r]);if(It(),ut(),Dr(o)){if(o.then(ut,ut),t)return o.then(i=>{lr(e,i,t)}).catch(i=>{En(i,e,0)});e.asyncDep=o}else lr(e,o,t)}else Mo(e,t)}function lr(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=eo(t)),Mo(e,n)}let ar;function Mo(e,t,n){const s=e.type;if(!e.render){if(!t&&ar&&!s.render){const r=s.template||xs(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,c=se(se({isCustomElement:o,delimiters:l},i),a);s.render=ar(r,c)}}e.render=s.render||Se}{Tt(e),St();try{El(e)}finally{It(),ut()}}}function ql(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function Yl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return ql(e)},slots:e.slots,emit:e.emit,expose:t}}function Cn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eo(Gr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function Xl(e){return $(e)&&"__vccOpts"in e}const Oo=(e,t)=>Hi(e,t,Kt);function Ro(e,t,n){const s=arguments.length;return s===2?Y(t)&&!N(t)?un(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&un(n)&&(n=[n]),ne(e,t,n))}const Jl=Symbol.for("v-scx"),Zl=()=>Ft(Jl),Ql="3.3.9",Gl="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,cr=it&&it.createElement("template"),ea={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?it.createElementNS(Gl,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{cr.innerHTML=s?`<svg>${e}</svg>`:e;const l=cr.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ue="transition",Nt="animation",Vt=Symbol("_vtc"),Wt=(e,{slots:t})=>Ro(ol,ta(e),t);Wt.displayName="Transition";const $o={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Wt.props=se({},co,$o);const nt=(e,t=[])=>{N(e)?e.forEach(n=>n(...t)):e&&e(...t)},ur=e=>e?N(e)?e.some(t=>t.length>1):e.length>1:!1;function ta(e){const t={};for(const S in e)S in $o||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=o,appearActiveClass:c=i,appearToClass:d=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,O=na(r),C=O&&O[0],k=O&&O[1],{onBeforeEnter:j,onEnter:H,onEnterCancelled:K,onLeave:P,onLeaveCancelled:J,onBeforeAppear:fe=j,onAppear:_e=H,onAppearCancelled:D=K}=t,Z=(S,X,me)=>{st(S,X?d:l),st(S,X?c:i),me&&me()},z=(S,X)=>{S._isLeaving=!1,st(S,h),st(S,w),st(S,y),X&&X()},oe=S=>(X,me)=>{const At=S?_e:H,te=()=>Z(X,S,me);nt(At,[X,te]),fr(()=>{st(X,S?a:o),Ke(X,S?d:l),ur(At)||dr(X,s,C,te)})};return se(t,{onBeforeEnter(S){nt(j,[S]),Ke(S,o),Ke(S,i)},onBeforeAppear(S){nt(fe,[S]),Ke(S,a),Ke(S,c)},onEnter:oe(!1),onAppear:oe(!0),onLeave(S,X){S._isLeaving=!0;const me=()=>z(S,X);Ke(S,h),oa(),Ke(S,y),fr(()=>{S._isLeaving&&(st(S,h),Ke(S,w),ur(P)||dr(S,s,k,me))}),nt(P,[S,me])},onEnterCancelled(S){Z(S,!1),nt(K,[S])},onAppearCancelled(S){Z(S,!0),nt(D,[S])},onLeaveCancelled(S){z(S),nt(J,[S])}})}function na(e){if(e==null)return null;if(Y(e))return[kn(e.enter),kn(e.leave)];{const t=kn(e);return[t,t]}}function kn(e){return oi(e)}function Ke(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Vt]||(e[Vt]=new Set)).add(t)}function st(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Vt];n&&(n.delete(t),n.size||(e[Vt]=void 0))}function fr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let sa=0;function dr(e,t,n,s){const r=e._endId=++sa,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:l,propCount:a}=ra(e,t);if(!i)return s();const c=i+"end";let d=0;const h=()=>{e.removeEventListener(c,y),o()},y=w=>{w.target===e&&++d>=a&&h()};setTimeout(()=>{d<a&&h()},l+1),e.addEventListener(c,y)}function ra(e,t){const n=window.getComputedStyle(e),s=O=>(n[O]||"").split(", "),r=s(`${Ue}Delay`),o=s(`${Ue}Duration`),i=hr(r,o),l=s(`${Nt}Delay`),a=s(`${Nt}Duration`),c=hr(l,a);let d=null,h=0,y=0;t===Ue?i>0&&(d=Ue,h=i,y=o.length):t===Nt?c>0&&(d=Nt,h=c,y=a.length):(h=Math.max(i,c),d=h>0?i>c?Ue:Nt:null,y=d?d===Ue?o.length:a.length:0);const w=d===Ue&&/\b(transform|all)(,|$)/.test(s(`${Ue}Property`).toString());return{type:d,timeout:h,propCount:y,hasTransform:w}}function hr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>pr(n)+pr(e[s])))}function pr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function oa(){return document.body.offsetHeight}function ia(e,t,n){const s=e[Vt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Is=Symbol("_vod"),As={beforeMount(e,{value:t},{transition:n}){e[Is]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Mt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Mt(e,!0),s.enter(e)):s.leave(e,()=>{Mt(e,!1)}):Mt(e,t))},beforeUnmount(e,{value:t}){Mt(e,t)}};function Mt(e,t){e.style.display=t?e[Is]:"none"}function la(e,t,n){const s=e.style,r=ee(n);if(n&&!r){if(t&&!ee(t))for(const o in t)n[o]==null&&os(s,o,"");for(const o in n)os(s,o,n[o])}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),Is in e&&(s.display=o)}}const mr=/\s*!important$/;function os(e,t,n){if(N(n))n.forEach(s=>os(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=aa(e,t);mr.test(n)?e.setProperty(Ct(s),n.replace(mr,""),"important"):e[s]=n}}const gr=["Webkit","Moz","ms"],jn={};function aa(e,t){const n=jn[t];if(n)return n;let s=_t(t);if(s!=="filter"&&s in e)return jn[t]=s;s=Br(s);for(let r=0;r<gr.length;r++){const o=gr[r]+s;if(o in e)return jn[t]=o}return t}const yr="http://www.w3.org/1999/xlink";function ca(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(yr,t.slice(6,t.length)):e.setAttributeNS(yr,t,n);else{const o=fi(t);n==null||o&&!kr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function ua(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const c=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=kr(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function fa(e,t,n,s){e.addEventListener(t,n,s)}function da(e,t,n,s){e.removeEventListener(t,n,s)}const vr=Symbol("_vei");function ha(e,t,n,s,r=null){const o=e[vr]||(e[vr]={}),i=o[t];if(s&&i)i.value=s;else{const[l,a]=pa(t);if(s){const c=o[t]=ya(s,r);fa(e,l,c,a)}else i&&(da(e,l,i,a),o[t]=void 0)}}const Er=/(?:Once|Passive|Capture)$/;function pa(e){let t;if(Er.test(e)){t={};let s;for(;s=e.match(Er);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let Hn=0;const ma=Promise.resolve(),ga=()=>Hn||(ma.then(()=>Hn=0),Hn=Date.now());function ya(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ee(va(s,n.value),t,5,[s])};return n.value=e,n.attached=ga(),n}function va(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const br=/^on[a-z]/,Ea=(e,t,n,s,r=!1,o,i,l,a)=>{t==="class"?ia(e,s,r):t==="style"?la(e,n,s):pn(t)?us(t)||ha(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ba(e,t,s,r))?ua(e,t,s,o,i,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ca(e,t,s,r))};function ba(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&br.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||br.test(t)&&ee(n)?!1:t in e}const _a=se({patchProp:Ea},ea);let _r;function wa(){return _r||(_r=Ml(_a))}const xa=(...e)=>{const t=wa().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Ta(s);if(!r)return;const o=t._component;!$(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Ta(e){return ee(e)?document.querySelector(e):e}const Ca="_root_3unp2_2",Sa={root:Ca},Sn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Ia={props:{active:Boolean,x:Number,y:Number},computed:{transform(){return this.scale!==void 0?`transform: translate(${this.x}px, ${this.y}px)`:`transform: translate(${this.x}px, ${this.y}px)`}}};function Aa(e,t,n,s,r,o){return ve(),ft(Wt,{name:"fade"},{default:xt(()=>[ws(ke("div",{class:Oe(e.$style.root),style:Be(o.transform)},[yl(e.$slots,"default")],6),[[As,n.active]])]),_:3})}const Pa={$style:Sa},wr=Sn(Ia,[["render",Aa],["__cssModules",Pa]]),Na="_root_qtf1r_2",Ma="_rootTitle_qtf1r_13",Oa={root:Na,rootTitle:Ma},Ra={inject:["setFocus","getSurface"],props:{meta:Object,isFocus:Boolean},computed:{polygonPath(){const e=this.meta.polygonPath;let t=0,n=e.length,s="M ";for(;t<n;)s+=`${e[t]} ${e[t+1]}`,t+=2,s+=t===n?" Z":" L ";return s},viewBox(){const e=this.meta.viewbox;return`${e.x} ${e.y} ${e.width} ${e.height}`},width(){return this.meta.viewbox.width},height(){return this.meta.viewbox.height},title(){var e,t;return((t=(e=this.meta)==null?void 0:e.source)==null?void 0:t.tag)||""}},methods:{}},$a=["focus"],Da=["width","height"],Fa=["d"];function La(e,t,n,s,r,o){return ve(),Bt("div",{class:Oe(e.$style.root),focus:n.isFocus},[n.meta.active?(ve(),Bt(he,{key:0},[ke("div",{class:Oe(e.$style.rootTitle)},di(o.title),3),(ve(),Bt("svg",{width:o.width,height:o.height,xmlns:"http://www.w3.org/2000/svg"},[ke("path",{fill:"none","stroke-width":"3",stroke:"blue",d:o.polygonPath},null,8,Fa)],8,Da))],64)):Po("",!0)],10,$a)}const Ba={$style:Oa},xr=Sn(Ra,[["render",La],["__cssModules",Ba]]),ka="_root_s5oev_2",ja="_seg_s5oev_13",Ha={root:ka,seg:ja},Ua={props:{segments:Object},data(){return{useTransition:!1}},computed:{active(){return this.segments.active},transform(){if(this.active){const e=this.segments.segments,t=e[0]===e[2],n=this.useTransition?"transition: all .3s;":"";return t?`${n}transform: translate(${e[0]}px, ${e[1]}px)`:`${n}transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(0px, 0px)"},transformSeg(){if(this.active){const e=this.segments.segments;return e[0]===e[2]?`transform: scale(3, ${e[3]-e[1]})`:`transform: scale(${e[2]-e[0]}, 3)`}return"transform: scale(0, 0);"}},watch:{active(e){console.log(e),this.$nextTick(()=>{this.useTransition=e})}}};function Ka(e,t,n,s,r,o){return ve(),ft(Wt,{name:"fade"},{default:xt(()=>[ws(ke("div",{class:Oe(e.$style.root),style:Be(o.transform)},[ke("div",{class:Oe(e.$style.seg),style:Be(o.transformSeg)},null,6)],6),[[As,o.active]])]),_:1})}const Va={$style:Ha},Wa=Sn(Ua,[["render",Ka],["__cssModules",Va]]),za="_root_14orw_2",qa="_rect_14orw_13",Ya={root:za,rect:qa},Xa={props:{meta:Object},computed:{active(){return this.meta.active},position(){if(this.active){const e=this.meta.rect;return`transform: translate(${e[0]}px, ${e[1]}px)`}return"transform: translate(-999px, 0px)"},dimension(){if(this.active){const e=this.meta.rect;return`transform: scale(${e[2]}, ${e[3]})`}return"transform: scale(0, 0)"}}};function Ja(e,t,n,s,r,o){return ve(),ft(Wt,{name:"fade"},{default:xt(()=>[ws(ke("div",{class:Oe(e.$style.root),style:Be(o.position)},[ke("div",{class:Oe(e.$style.rect),style:Be(o.dimension)},null,6)],6),[[As,o.active]])]),_:1})}const Za={$style:Ya},Qa=Sn(Xa,[["render",Ja],["__cssModules",Za]]),Ga={__name:"surface",setup(e){const n=Ft("getSurface")(),{highlight_elem:s,targets:r,highlight_seg:o,highlight_empty_slot:i}=n,l=Oo(()=>({position:"relative",left:0}));return(a,c)=>(ve(),Bt("div",{style:Be(l.value)},[(ve(!0),Bt(he,null,gl($e(r),d=>(ve(),ft(wr,{x:d.position[0],y:d.position[1],active:!0},{default:xt(()=>[ne(xr,{meta:d,isFocus:!0},null,8,["meta"])]),_:2},1032,["x","y"]))),256)),ne(Wa,{segments:$e(o)},null,8,["segments"]),ne(Qa,{meta:$e(i)},null,8,["meta"]),$e(s).active?(ve(),ft(wr,{key:0,x:$e(s).position[0],y:$e(s).position[1],active:$e(s).active},{default:xt(()=>[ne(xr,{meta:$e(s),isFocus:!1},null,8,["meta"])]),_:1},8,["x","y","active"])):Po("",!0)],4))}};class ec{constructor(){R(this,"targets",lt([]));R(this,"highlight_elem",lt({type:void 0,active:!1,rects:[],polygonPath:[],viewbox:[],source:null}));R(this,"highlight_seg",lt({active:!1,segments:[]}));R(this,"highlight_empty_slot",lt({active:!1,rect:[]}))}apply(t,n){this.ide=t,this.render=new tc(this,n),this.render.init(),t.addEventListener("zoompan",s=>{s.detail.zoom&&(this.highlight_elem.active&&Object.assign(this.highlight_elem,{...this.resolveRects(this.highlight_elem.rects)}),this.targets.forEach(r=>{Object.assign(r,{...this.resolveRects(r.rects)})}))})}refresh(t){const n=[...this.targets,this.highlight_elem];t.forEach(s=>{const r=n.find(o=>nn(o.source,s.source));r&&Object.assign(r,this.resolveRects(s.rects))})}hasTarget(t){return this.targets.find(n=>nn(n.source,t))}_targetExist(t){return!!this.targets.find(s=>nn(s.source,t.source))}highlightElem(t){if(this._targetExist(t)){this.closeHighlightElem();return}nn(this.highlight_elem.source,t.source)||Object.assign(this.highlight_elem,{...t,...this.resolveRects(t.rects),active:!0})}getFocusNodes(){return this.targets.map(t=>B(t.source))}setFocus(t){if(!t){const s=this.targets.length;this.targets.splice(0,s);return}if(this._targetExist(t))return;this.closeHighlightElem();const n=this.targets.length;this.targets.splice(0,n,{...t,...this.resolveRects(t.rects),active:!0})}addFocus(t){this._targetExist(t)||this.targets.push({...t,...this.resolveRects(t.rects),active:!0})}closeHighlightElem(){this.highlight_elem.active&&Object.assign(this.highlight_elem,{active:!1,source:null})}resolveRects(t){const s=this.ide.scale;if(t.length===1){const{x:r,y:o,width:i,height:l}=t[0],a=[0,0,i*s,0,i*s,l*s,0,l*s];return{position:[r*s,o*s],polygonPath:a,viewbox:nc(a)}}}highlightSeg(t,n){if(this.highlight_seg.active=t,t){const r=this.ide.scale;this.highlight_seg.segments[0]=n[0]*r,this.highlight_seg.segments[1]=n[1]*r,this.highlight_seg.segments[2]=n[2]*r,this.highlight_seg.segments[3]=n[3]*r}}highlightEmptySlot(t,n){if(this.highlight_empty_slot.active=t,t){const r=this.ide.scale;this.highlight_empty_slot.rect[0]=n[0]*r,this.highlight_empty_slot.rect[1]=n[1]*r,this.highlight_empty_slot.rect[2]=n[2]*r,this.highlight_empty_slot.rect[3]=n[3]*r}}closeAll(){this.closeHighlightElem(),this.highlightSeg(!1),this.highlightEmptySlot(!1)}}class tc{constructor(t,n){this.surface=t,this.dom=n}init(){xa(this.renderFn()).mount(this.dom)}renderFn(){const t=this.surface;return{inheritAttrs:!1,setup(){return bo("getSurface",()=>t),()=>Ro(Ga)}}}}function nn(e,t){return B(e)===B(t)}function nc(e){if(e.length===0)return{width:0,height:0,x:0,y:0};let t=1/0,n=1/0,s=-1/0,r=-1/0,o=0;for(;o<e.length;){const i=e[o],l=e[o+1];i<t&&(t=i),i>s&&(s=i),l<n&&(n=l),l>r&&(r=l),o+=2}return{width:Math.max(s-t,10),height:Math.max(r-n,10),x:t,y:n}}function fn(e,t){let n=`oneTripToPreview-${fn.uuid++}`,s;const r=new Promise(i=>{s=i}),o=i=>{const l=i.data;l.uuid===n&&(s(l.response),window.removeEventListener("message",o))};return window.addEventListener("message",o),e({uuid:n,...t}),r}fn.uuid=0;class sc extends EventTarget{constructor(n){super();R(this,"initialZoom",1);R(this,"padding",20);R(this,"maxZoom",2);R(this,"minZoom",.5);R(this,"deviceWidth",0);R(this,"deviceHeight","auto");R(this,"position",{x:0,y:0});R(this,"scale",1);R(this,"_registedMethods",new Map);R(this,"postIframeMessage",null);this.simulator=n.simulator,this.surface=new ec,this.getSourceByNodePath=n.getSourceByNodePath,this.preRegistMethods()}$mount(n){const s=rc(),r=oc(),o=ic(),i=lc();s.appendChild(r),s.appendChild(o),r.appendChild(i),this.domCache={viewport:s,viewcontent:r,groundAnchor:o,iframe:i};let l=!1;n.appendChild(s),i.addEventListener("load",()=>{console.log("onload!"),window.addEventListener("message",a=>{const c=a.data;if(!l&&c.type==="Event"&&c.name==="proxyReady"){const d=a.source,h=a.origin;this._init(),this.postIframeMessage=y=>{d.postMessage(y,h)},this.dispatchEvent(new CustomEvent("ready",{detail:{target:this.iframe}})),l=!0}})}),r.style.height=`${s.getBoundingClientRect().height}px`,this.simulator.load(i)}_init(){const n=i=>{console.log("resized!",this.simulator),this.domCache.viewcontent.style.height=`${i.scrollHeight}px`},r=(()=>{let i=[];return(l,a)=>{l==="wheel"&&i.length===3&&i.every(c=>c==="wheel")&&(console.log("onWheel"),this.onWheelInFrame(a)),i.unshift(l),i.length>3&&(i.length=3)}})().bind(this);window.addEventListener("message",i=>{const l=i.data;if(l.type==="Event")switch(l.name){case"wheel":case"scroll":r(l.name,l.payload.eventMeta);break;case"dragstart":this.dispatchEvent(new CustomEvent("frame:dragstart",{detail:l.payload}));break;case"refreshBoundings":this.refreshBoundings(l.payload);break;case"mousemove":this.highlightNode(l.payload.elementInfo);break;case"dragover":this.dispatchEvent(new CustomEvent("frame:dragover",{detail:l.payload}));break;case"dragend":this.dispatchEvent(new CustomEvent("frame:dragend",{detail:l.payload}));break;case"hesitateWhenDragging":this.dispatchEvent(new CustomEvent("frame:hesitateWhenDragging",{detail:l.payload}));break;case"click":this._focusOnNode(l.payload);break;case"dblclick":this.dispatchEvent(new CustomEvent("frame:requestEditContent",{detail:l.payload}));break;case"contentchange":this.dispatchEvent(new CustomEvent("frame:contentChange",{detail:l.payload}));break;case"resizeObserver":n(l.payload);break}if(l.type==="Method"){const a=this._registedMethods.get(l.name);if(a){const c=l.uuid;a(d=>{i.source.postMessage({type:"Response",result:"success",uuid:c,response:d},i.origin)},d=>{i.source.postMessage({type:"Response",result:"failed",uuid:c,err:d},i.origin)},l.payload)}}});const o=this.domCache.viewport;o.addEventListener("mousemove",i=>{i.target===o&&this.surface.closeHighlightElem()}),o.addEventListener("wheel",this.onWheelInViewport.bind(this),{passive:!1}),this.surface.apply(this,this.domCache.groundAnchor)}preRegistMethods(){}refreshBoundings(n){const s=n.elementInfos;s.forEach(r=>{r.source=this.getSourceByNodePath(r.target)}),this.surface.refresh(s)}highlightNode(n){const{target:s,rects:r}=n;if(s){const o=this.getSourceByNodePath(s);this.surface.highlightElem({source:o,rects:r})}else this.surface.closeHighlightElem()}closeHighlight(){this.surface.closeHighlightElem()}async highlightNodeByNodePath(n){const s=await this.getElementInfoByNodePath(n);this.highlightNode(s)}clearFocus(){this.surface.setFocus()}_focusOnNode(n){const{target:s,rects:r}=n.elementInfo,{shiftKey:o}=n.eventMeta;if(s){this.surface.closeHighlightElem();const i=this.getSourceByNodePath(s);o?this.surface.addFocus({source:i,rects:r}):this.surface.setFocus({source:i,rects:r})}else this.surface.setFocus()}_calculateToViewport(n,s){const r=this.scale,o=this.position;s[0]=n[0]*r+o.x,s[1]=n[1]*r+o.y}syncGroundAnchor(){const n=[0,0];this._calculateToViewport(n,n),this.domCache.groundAnchor.style.transform=`translate(${n[0]}px, ${n[1]}px)`}resolveEventOffsetToViewport(n){const{clientX:s,clientY:r}=n,o=this.domCache.viewcontent.getBoundingClientRect();return[s*this.scale+o.x,r*this.scale+o.y]}onWheelInViewport(n){const[s,r]=this.resolveEventOffset(n);n.preventDefault(),this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,r)}onWheelInFrame(n){const[s,r]=this.resolveEventOffsetToViewport(n);this._onWheel(n.ctrlKey,n.deltaX,n.deltaY,s,r)}_onWheel(n,s,r,o,i){n?(r=-r,this.zoomHandler(o,i,r)):this.panHandler(-s,-r)}resolveEventOffset(n){const{clientX:s,clientY:r}=n,{x:o,y:i}=this.domCache.viewport.getBoundingClientRect();return[s-o,r-i]}zoomHandler(n,s,r){if(this._zooming)return;this._zooming=!0;const o=this.scale;let i=o;const l=r>0?1.05:1/1.05;i*=l,i=Math.min(this.maxZoom,Math.max(this.minZoom,i));const{x:a,y:c}=this.position,d=i/o,h=n-(n-a)*d,y=s-(s-c)*d;this.scale=i,Object.assign(this.position,{x:h,y}),this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!0}})),this._zooming=!1}panHandler(n,s){this._panning||(this._panning=!0,this.position.x+=n,this.position.y+=s,this._resetTransform(),this.dispatchEvent(new CustomEvent("zoompan",{detail:{zoom:!1}})),this._panning=!1)}_resetTransform(){const{x:n,y:s}=this.position,r=this.scale,o=`matrix(${r}, 0, 0, ${r}, ${n}, ${s})`;this.domCache.viewcontent.style[Zo]=o,this.syncGroundAnchor()}_resolveEventOffsetInFrame(n){const{clientX:s,clientY:r}=n,{x:o,y:i}=this.position,l=this.scale,a=this.domCache.viewport.getBoundingClientRect();return[s*l+o+a.x,r*l+i+a.y]}async doDrag(n,s,r,o,i){this.postIframeMessage({type:"Event",name:"startDragging",payload:{nodePaths:s}});const l=document.importNode(n);l.style.position="fixed",l.style["pointer-events"]="none",document.body.appendChild(l),r&&await r();const a=w=>{if(o.execute)return;o.execute=!0;const[O,C]=this._resolveEventOffsetInFrame(w.detail.eventMeta);l.style.left=`${O}px`,l.style.top=`${C}px`,o({elementInfo:w.detail.elementInfo,eventMeta:w.detail.eventMeta,inFrame:!0,notAllowed:w.detail.notAllowed},c)};function c(){o.execute=!1}const d=w=>{if(o.execute)return;o.execute=!0;const{clientX:O,clientY:C}=w;l.style.left=`${O}px`,l.style.top=`${C}px`,o({elementInfo:null,eventMeta:w,inFrame:!1,notAllowed:!0},c)},h=async w=>{l.remove(),this.removeEventListener("frame:dragend",h),this.removeEventListener("frame:dragover",a),this.removeEventListener("frame:hesitateWhenDragging",y),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",h),i&&await i(),this.postIframeMessage({type:"Event",name:"stopDragging"})},y=w=>{this.surface.closeAll()};this.addEventListener("frame:dragend",h),this.addEventListener("frame:dragover",a),this.addEventListener("frame:hesitateWhenDragging",y),document.addEventListener("mousemove",d),document.addEventListener("mouseup",h)}doEditContent(n){this.postIframeMessage({type:"Method",name:"editContent",payload:{nodePath:n}})}setCursorInFrame(n){this.postIframeMessage({type:"Method",name:"setCursor",payload:{cursor:n}})}async getElementInfoByNodePath(n){return await fn(this.postIframeMessage,{type:"Method",name:"getElementInfoByNodePath",payload:{nodePath:n}})}async getElementsInfoByNodePath(n){return await fn(this.postIframeMessage,{type:"Method",name:"getElementsInfoByNodePath",payload:{nodePaths:n}})}startObserveRootElem(n){this.postIframeMessage({type:"Method",name:"startObserveRootNodeSize",payload:{selector:n}})}setElementsTemporaryStyle(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryStyle",payload:n})}setElementsTemporaryAttribute(n){this.postIframeMessage({type:"Method",name:"setElementsTemporaryAttribute",payload:n})}makeDraggingElemMove(n){this.postIframeMessage({type:"Event",name:"makeDraggingElemMove",payload:n})}registMethod(n,s){const{isAsync:r,body:o}=s,i=r?async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const d=await o.call(this,...c);l(d)}catch(d){a(d)}finally{i.execute=!1}}}:async(l,a,...c)=>{if(!s.execute){i.execute=!0;try{const d=o.call(this,...c);l(d)}catch(d){a(d)}finally{i.execute=!1}}};this._registedMethods.set(n,i)}}function rc(){return hn({tag:"div",style:{position:"relative",left:0,top:0,width:"100%",height:"100%","user-select":"none",overflow:"hidden",background:"rgba(0,0,0,0.1)"}})}function oc(){return hn({tag:"div",style:{position:"absolute",top:0,left:0,transformOrigin:"top left",width:"100%",overflow:"hidden",background:"#fff",userSelect:"none"}})}function ic(){return hn({tag:"div",style:{position:"absolute",left:0,top:0,width:0,height:0}})}function lc(){return hn({tag:"iframe",style:{width:"100%",height:"100%",border:"none"},attributes:{scrolling:"no"}})}const In={files:{"/index.html":{code:`<!DOCTYPE html>
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
`}},environment:"vanilla"},ac="View",cc=[{concept:"ViewElement",tag:"Flex",bindAttrs:[{concept:"BindAttribute",name:"gap",value:"middle"}],children:[{concept:"ViewElement",tag:"Button",innerText:"button1"},{concept:"ViewElement",tag:"Button",innerText:"button2",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}]},{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"link"}]}]},{concept:"ViewElement",tag:"AbsoluteLayout",children:[{concept:"ViewElement",tag:"Button",innerText:"button3",bindAttrs:[{concept:"BindAttribute",name:"type",value:"primary"}],staticStyle:"left: 20px; top: 20px;"}]}],uc={concept:ac,elements:cc};function Tr(e){return e*e}function Un(e,t){return Tr(e[0]-t[0])+Tr(e[1]-t[1])}function Cr(e,t){const n=t.slice(0,2),s=t.slice(2,4),r=Un(n,s);if(r===0)return Un(e,n);let o=((e[0]-n[0])*(s[0]-n[0])+(e[1]-n[1])*(s[1]-n[1]))/r;return o=Math.max(0,Math.min(1,o)),Un(e,[n[0]+o*(s[0]-n[0]),n[1]+o*(s[1]-n[1])])}function Do(e){return[[e.left,e.top,e.right,e.top],[e.left,e.bottom,e.right,e.bottom]]}function Fo(e){return[[e.left,e.top,e.left,e.bottom],[e.right,e.top,e.right,e.bottom]]}function Lo(e,t){return e[0]+=t,e[2]+=t,e}function Bo(e,t){return e[1]+=t,e[3]+=t,e}function fc(e,t){return e[0]===e[2]?Lo(e,t):Bo(e,t)}function dc(e,t){var n;return(n=t.elemStyle)!=null&&n.inline?Fo(e):Do(e)}function hc(e){return[e.x,e.y,e.width,e.height]}function dn(e=""){return e.split(";").map(n=>n.split(":")).reduce((n,s)=>{if(s.length===2){let[r,o]=s;r=r.trim().replace(/-./g,i=>i.toUpperCase()[1]),n[r]=o.trim()}return n},{})}function is(e={}){let t="";for(const[n,s]of Object.entries(e))t+=`${n}:${s};`;return t}function pc(e){const t=dn(e);try{return JSON.stringify(t)}catch{return""}}let Sr=1,ko=class{constructor(t){R(this,"componentKey",0);R(this,"parentNode",null);R(this,"tag","");R(this,"isContainer",!1);R(this,"supportEditContent",!1);this.source=t,this.tag=t.tag,this.componentKey=Sr++}static accept(){return!0}get staticStyle(){return this.source.staticStyle}set staticStyle(t){this.source.staticStyle=t}get innerText(){return this.source.innerText}set innerText(t){this.source.innerText=t}get nodePath(){if(!this.parentNode)return"rootview";const t=this.parentNode,s=t.elements.findIndex(r=>r===this);return s===-1?null:`${t.nodePath}.${s}`}updateComponentKey(){this.componentKey=Sr++}getSiblings(){}renderIDE(t){throw"renderIDE need implementation!"}};const Le={ROW:"row",COLUMN:"column",FREE:"free",AUTO:"auto"};class mc extends ko{constructor(n){super(n);R(this,"isRoot",!1);R(this,"isContainer",!0);R(this,"direction",Le.AUTO);R(this,"elements",[]);this.createSubElements(n)}createSubElements(n){throw"createSubElements need implementation!"}insertNodeBefore(n,s){const r=s.source;r.delete();const o=this.source.getViewElementIdx(n.source);o!==-1&&this.source.insertViewElementAt(r,o)}insertNodeAfter(n,s){const r=s.source;r.delete();const o=this.source.getViewElementIdx(n.source);o!==-1&&this.source.insertViewElementAt(r,o+1)}addChild(n){const s=n.source;s.delete(),this.source.addViewElement(s)}renderIDE(n){throw"renderIDE need implementation!"}}function Ze(e,t){const n=t.split(".");n.shift();let s=e.elements[n.shift()];for(;n.length;){const r=n.shift();s=s.elements[r]}return s}const Ir={[Le.ROW]:{getSegs:Fo,shiftHighlighter:Lo},[Le.COLUMN]:{getSegs:Do,shiftHighlighter:Bo},[Le.AUTO]:{getSegs:dc,shiftHighlighter:fc}},mt={PRE:"pre",AFTER:"after"};function gc(e,t){t.forEach(n=>{e.addChild(n)})}function yc(e,t){let n=e;const s=e.parentNode,r=t.slice();for(;r.length;){const o=r.pop();s.insertNodeBefore(n,o),n=o}}function vc(e,t){let n=e;const s=e.parentNode,r=t.slice();for(;r.length;){const o=r.shift();s.insertNodeAfter(n,o),n=o}}function Ec(e,t){const n={};return t.forEach(s=>{s in e&&delete e[s]}),n}function jo(e){var t;if((t=e.parentNode)!=null&&t.isAbsolute){const n=dn(e.staticStyle);Ec(n,["left","right","top","bottom"]),e.staticStyle=is(n)}}function Ps(e){e.forEach(t=>{jo(t)})}async function bc(e,t,n,s,r){var y;const o=await e.getElementsInfoByNodePath(s);let{getSegs:i,shiftHighlighter:l}=Ir[r],a=1/0,c,d,h;if(s.forEach(w=>{o[w].rects.forEach(C=>{i(C,o[w]).forEach((j,H)=>{const K=Cr(n,j);K<a&&(a=K,c=j,d=w,h=H===0?mt.PRE:mt.AFTER)})})}),t){const w=t.nodePath,O=((y=t.parentNode.elementInfo)==null?void 0:y.direction)||Le.AUTO,{getSegs:C,shiftHighlighter:k}=Ir[O],j=await e.getElementInfoByNodePath(w),H=j.rects[0];C(H,j).forEach((P,J)=>{const fe=Cr(n,P);fe<a&&(a=fe,c=P,d=w,h=J===0?mt.PRE:mt.AFTER,l=k)})}return l(c,h===mt.PRE?1.5:-1.5),{nearestSeg:c,nodepath:d,loc:h}}const _c={dragover(e,t,n){t.nodePath="",t.loc="",e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()},drop(e,t,n,s){e.surface.highlightSeg(!1),e.surface.highlightEmptySlot(!1),e.closeHighlight()}},wc=e=>({dragover(t,n,s){const r=s.elementInfo,o=hc(r.rects[0]);t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!0,o),t.highlightNodeByNodePath(r.target),n.nodePath=r.target,t.setCursorInFrame("copy")},drop(t,n,s,r){const o=Ze(e,n.nodePath);o&&(Ps(s),gc(o,s)),t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!1),t.closeHighlight(),r()}});async function Ho(e,t,n,s,r,o){const{nearestSeg:i,nodepath:l,loc:a}=await bc(e,t,s,r,o);e.surface.highlightSeg(!0,i),e.surface.highlightEmptySlot(!1),t?e.highlightNodeByNodePath(t.nodePath):e.closeHighlight(),n.nodePath=l,n.loc=a,e.setCursorInFrame("copy")}function Uo(e,t,n){t===mt.PRE?yc(e,n):vc(e,n)}const Ar=e=>({async dragover(t,n,s){const r=[s.eventMeta.clientX,s.eventMeta.clientY],o=e.elements.map(i=>i.nodePath);o.length>0&&await Ho(t,null,n,r,o,Le.AUTO)},drop(t,n,s,r){const o=Ze(e,n.nodePath);o&&(Ps(s),Uo(o,n.loc,s)),t.surface.highlightSeg(!1),t.surface.highlightEmptySlot(!1),t.closeHighlight(),r()}}),xc=(e,t,n)=>({async dragover(s,r,o){const i=[o.eventMeta.clientX,o.eventMeta.clientY],l=t.elements.filter(c=>!n.includes(c)).map(c=>c.nodePath),a=(t==null?void 0:t.direction)||Le.AUTO;l.length>0&&await Ho(s,t,r,i,l,a)},drop(s,r,o,i){const l=Ze(e,r.nodePath);l&&(Ps(o),Uo(l,r.loc,o)),s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight(),i()}}),Tc=(e,t,n)=>({async dragover(s,r,o){r.nodePath=t.nodePath,r.toCoord=[o.eventMeta.clientX,o.eventMeta.clientY],s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.highlightNodeByNodePath(t.nodePath)},async drop(s,r,o,i){const l=Ze(e,r.nodePath);if(l){const a=r.movingNodeInfos,d=(await s.getElementInfoByNodePath(r.nodePath)).rects[0];o.forEach(h=>{if(h.parentNode===l){const y=r.toCoord[0]-r.fromCoord[0],w=r.toCoord[1]-r.fromCoord[1],O=a[h.nodePath];if(O){const C=O.rects[0],k=Object.assign({...dn(h.staticStyle),left:`${C.x-d.x+y}px`,top:`${C.y-d.y+w}px`});h.staticStyle=is(k),h.updateComponentKey()}}else{jo(h);const y=Object.assign({...dn(h.staticStyle),left:`${r.toCoord[0]-d.x}px`,top:`${r.toCoord[1]-d.y}px`});l.addChild(h),h.staticStyle=is(y)}s.surface.highlightSeg(!1),s.surface.highlightEmptySlot(!1),s.closeHighlight()}),i()}}});function Cc(e,t,n){if(e.notAllowed)return _c;if(e.inFrame){const s=e.elementInfo;if(s!=null&&s.isEmptySlot)return wc(t);if(s!=null&&s.target){const r=Ze(t,s.target);if(r){const o=r.isContainer?r:r.parentNode;return o.isRoot?Ar(t):o!=null&&o.isAbsolute?Tc(t,o):xc(t,o,n)}}else return Ar(t)}}function Sc(e,t,n){return async(s,r,o)=>{const i=o.map(h=>h.nodePath);r.fromCoord=[n.clientX,n.clientY],r.fromNodePath=t.target,r.fromAbsolute=!0;const l=await s.getElementsInfoByNodePath(i);r.movingNodeInfos=l;const c=Ze(e,t.target).parentNode,d={nodePaths:[]};o.forEach(h=>{if(h.parentNode===c){const y=h.nodePath;d.nodePaths.push(y)}}),d.nodePaths.length>0&&s.makeDraggingElemMove(d)}}function Ic(e,t,n){if(t!=null&&t.target){const s=Ze(e,t.target);if(s){const r=s.parentNode;if(r!=null&&r.isAbsolute)return Sc(e,t,n)}}return null}class Ac extends EventTarget{constructor(t){super(),this.project=t}async load(t){this.iframe=t,await this.launch()}async launch(){this.dispatchEvent(new CustomEvent("simulator:ready"))}async updateProject(){}}const Pc="modulepreload",Nc=function(e){return"/webcontainer-ide/"+e},Pr={},Kn=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Nc(o),o in Pr)return;Pr[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let d=r.length-1;d>=0;d--){const h=r[d];if(h.href===o&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Pc,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var Mc=/(%?)(%([sdjo]))/g;function Oc(e,t){switch(t){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if(typeof e=="string")return e;const n=JSON.stringify(e);return n==="{}"||n==="[]"||/^\[object .+?\]$/.test(n)?e:n}}}function ls(e,...t){if(t.length===0)return e;let n=0,s=e.replace(Mc,(r,o,i,l)=>{const a=t[n],c=Oc(a,l);return o?r:(n++,c)});return n<t.length&&(s+=` ${t.slice(n).join(" ")}`),s=s.replace(/%{2,2}/g,"%"),s}var Rc=2;function $c(e){if(!e.stack)return;const t=e.stack.split(`
`);t.splice(1,Rc),e.stack=t.join(`
`)}var Dc=class extends Error{constructor(e,...t){super(e),this.message=e,this.name="Invariant Violation",this.message=ls(e,...t),$c(this)}},Ko=(e,t,...n)=>{if(!e)throw new Dc(t,...n)};Ko.as=(e,t,n,...s)=>{if(!t)throw e.prototype.name!=null?new e(ls(n,s)):e(ls(n,s))};var as=function(e,t){return as=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])},as(e,t)};function cu(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");as(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var gt=function(){return gt=Object.assign||function(t){for(var n,s=1,r=arguments.length;s<r;s++){n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},gt.apply(this,arguments)};function Fc(e,t,n,s){function r(o){return o instanceof n?o:new n(function(i){i(o)})}return new(n||(n=Promise))(function(o,i){function l(d){try{c(s.next(d))}catch(h){i(h)}}function a(d){try{c(s.throw(d))}catch(h){i(h)}}function c(d){d.done?o(d.value):r(d.value).then(l,a)}c((s=s.apply(e,t||[])).next())})}function Lc(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},s,r,o,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(c){return function(d){return a([c,d])}}function a(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(o=c[0]&2?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(d){c=[6,d],r=0}finally{s=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function uu(e,t,n){if(n||arguments.length===2)for(var s=0,r=t.length,o;s<r;s++)(o||!(s in t))&&(o||(o=Array.prototype.slice.call(t,0,s)),o[s]=t[s]);return e.concat(o||Array.prototype.slice.call(t))}var Bc=function(e){return"[sandpack-client]: ".concat(e)};function Vn(e,t){return t===void 0&&(t="Value is nullish"),Ko(e!=null,Bc(t)),e}var kc='"dependencies" was not specified - provide either a package.json or a "dependencies" value',Nr='"entry" was not specified - provide either a package.json with the "main" field or an "entry" value';function jc(e,t,n){return e===void 0&&(e={}),t===void 0&&(t={}),n===void 0&&(n="/index.js"),JSON.stringify({name:"sandpack-project",main:n,dependencies:e,devDependencies:t},null,2)}function fu(e,t,n,s){var r,o,i=Wc(e),l=i["/package.json"];if(!l)return Vn(t,kc),Vn(s,Nr),i["/package.json"]={code:jc(t,n,s)},i;if(l){var a=JSON.parse(l.code);Vn(!(!t&&!a.dependencies),Nr),t&&(a.dependencies=gt(gt({},(r=a.dependencies)!==null&&r!==void 0?r:{}),t??{})),n&&(a.devDependencies=gt(gt({},(o=a.devDependencies)!==null&&o!==void 0?o:{}),n??{})),s&&(a.main=s),i["/package.json"]={code:JSON.stringify(a,null,2)}}return i}function du(e){var t;if(e.title==="SyntaxError"){var n=e.title,s=e.path,r=e.message,o=e.line,i=e.column;return{title:n,path:s,message:r,line:o,column:i}}var l=Hc((t=e.payload)===null||t===void 0?void 0:t.frames);if(!l)return{message:e.message};var a=Kc(l),c=Uc(l),d=Vc(l._originalFileName,e.message,c,a);return{message:d,title:e.title,path:l._originalFileName,line:l._originalLineNumber,column:l._originalColumnNumber}}function Hc(e){if(e)return e.find(function(t){return!!t._originalFileName})}function Uc(e){return e?" (".concat(e._originalLineNumber,":").concat(e._originalColumnNumber,")"):""}function Kc(e){var t=e._originalScriptCode[e._originalScriptCode.length-1],n=t.lineNumber.toString().length,s=2,r=3,o=s+n+r+e._originalColumnNumber;return e._originalScriptCode.reduce(function(i,l){var a=l.highlight?">":" ",c=l.lineNumber.toString().length===n?"".concat(l.lineNumber):" ".concat(l.lineNumber),d=l.highlight?`
`+" ".repeat(o)+"^":"";return i+`
`+a+" "+c+" | "+l.content+d},"")}function Vc(e,t,n,s){return"".concat(e,": ").concat(t).concat(n,`
`).concat(s)}var Wc=function(e){return typeof e=="string"?e.startsWith("/")?e:"/".concat(e):Array.isArray(e)?e.map(function(t){return t.startsWith("/")?t:"/".concat(t)}):typeof e=="object"&&e!==null?Object.entries(e).reduce(function(t,n){var s=n[0],r=n[1],o=s.startsWith("/")?s:"/".concat(s);return t[o]=r,t},{}):null},Mr;(function(e){e[e.None=0]="None",e[e.Error=10]="Error",e[e.Warning=20]="Warning",e[e.Info=30]="Info",e[e.Debug=40]="Debug"})(Mr||(Mr={}));function zc(e,t,n){var s;return n===void 0&&(n={}),Fc(this,void 0,void 0,function(){var r,o,i;return Lc(this,function(l){switch(l.label){case 0:switch(r=(s=t.template)!==null&&s!==void 0?s:"parcel",i=r,i){case"node":return[3,1];case"static":return[3,3]}return[3,5];case 1:return[4,Kn(()=>import("./index-400d1016.js"),["assets/index-400d1016.js","assets/base-80a1f760-a7ab5117.js","assets/consoleHook-cdbe54ab-3974cf57.js"]).then(function(a){return a.SandpackNode})];case 2:return o=l.sent(),[3,7];case 3:return[4,Kn(()=>import("./index-ec7d9378-29792ab5.js"),["assets/index-ec7d9378-29792ab5.js","assets/consoleHook-cdbe54ab-3974cf57.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackStatic})];case 4:return o=l.sent(),[3,7];case 5:return[4,Kn(()=>import("./index-dd799735.js"),["assets/index-dd799735.js","assets/base-80a1f760-a7ab5117.js"]).then(function(a){return a.SandpackRuntime})];case 6:o=l.sent(),l.label=7;case 7:return[2,new o(e,t,n)]}})})}class qc extends Ac{constructor(){super(...arguments);R(this,"options",{showOpenInCodeSandbox:!1,showErrorScreen:!1,showLoadingScreen:!0})}async launch(){const n=await zc(this.iframe,this.project,this.options);this.client=n,console.log(n)}async updateProject(n,s){this.project.files["/"+n]={code:s},this.client.updateSandbox(this.project)}}class Yc{constructor(t){R(this,"_UILibModel",null);R(this,"source",null);R(this,"_makeRootUIElement",null);R(this,"_makeUIElement",null);this.source=t}useUI({makeRootUIElement:t,makeUIElement:n}){this._makeRootUIElement=t,this._makeUIElement=n}refresh(){this._UILibModel=this._makeRootUIElement(this.source)}genCode(){return this._UILibModel.renderIDE()}getRoot(){return this._UILibModel}genUIModel(t){return this._makeUIElement(t)}}class Ns{constructor(t){R(this,"concept","");this.concept=t.concept,this.tag=t.tag}}class Xc extends Ns{constructor(n){super(n);R(this,"elements",[]);n.elements&&(this.elements=n.elements.map(s=>{const r=new zt(s);return r.parentNode=this,r.parentKey="elements",r}))}addViewElement(n){n.delete(),this.elements.push(n),n.parentNode=this}insertViewElementAt(n,s){n.delete(),this.elements.splice(s,0,n),n.parentNode=this}removeViewElement(n){const s=this.elements.findIndex(r=>r===n);s!==-1&&(this.elements.splice(s,1),n.parentNode=void 0)}getViewElementIdx(n){return this.elements.findIndex(s=>s===n)}}class zt extends Ns{constructor(n){super(n);R(this,"tag");R(this,"staticStyle");R(this,"staticClass");R(this,"innerText");R(this,"bindAttrs",[]);R(this,"children",[]);this.tag=n.tag,this.staticStyle=n.staticStyle,this.staticClass=n.staticClass,this.innerText=n.innerText,n.children&&(this.children=n.children.map(s=>{const r=new zt(s);return r.parentNode=this,r.parentKey="children",r})),n.bindAttrs&&(this.bindAttrs=n.bindAttrs.map(s=>{const r=new Jc(s);return r.parentNode=this,r.parentKey="bindAttrs",r}))}addViewElement(n){n.delete(),this.children.push(n),n.parentNode=this}insertViewElementAt(n,s){n.delete(),this.children.splice(s,0,n),n.parentNode=this}removeViewElement(n){const s=this.children.findIndex(r=>r===n);s!==-1&&(this.children.splice(s,1),n.parentNode=void 0)}delete(){this.parentNode&&this.parentNode.removeViewElement(this)}getViewElementIdx(n){return this.children.findIndex(s=>s===n)}}class Jc extends Ns{constructor(n){super(n);R(this,"name","");R(this,"value","");this.name=n.name,this.value=n.value}}class Vo extends ko{renderIDE(t){t.add(this.tag);let n=`
    <${this.tag} 
        key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ${Os(this.source.bindAttrs)}
        ${Rs(this.source.staticStyle)}>`;return this.innerText&&(n+=this.innerText),n+=`</${this.tag}>
`,n}}class Ms extends mc{createSubElements(t){let n;t.concept==="View"&&(n=t.elements),t.concept==="ViewElement"&&(n=t.children),n&&(this.elements=n.map(ru(this)))}renderIDE(t){t.add(this.tag);let n=`
    <${this.tag} key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        ide-iscontainer="true"
        ${Os(this.source.bindAttrs)}
        ${Rs(this.source.staticStyle)}>`;return this.elements.length>0?this.elements.forEach(s=>{n+=s.renderIDE(t)}):n+="<EmptySlot />",n+=`</${this.tag}>
`,n}}const Zc=["Button"];class Qc extends Vo{constructor(){super(...arguments);R(this,"supportEditContent",!0)}static accept(n){return Zc.includes(n.tag)}}class Gc extends Ms{constructor(){super(...arguments);R(this,"isRoot",!0)}renderIDE(){const n=new Set;let s="";this.elements.forEach(i=>{s+=i.renderIDE(n)});let r="";return n.size>0&&(r="import { ",r+=Array.from(n).join(","),r+='} from "antd";'),`
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
`}}class eu extends Ms{static accept(t){return t.tag==="Flex"}constructor(t){super(t),this.direction=Le.ROW,t.bindAttrs.find(n=>n.name==="vertical"&&n.value==="true")&&(this.direction=Le.COLUMN)}}class tu extends Ms{constructor(){super(...arguments);R(this,"isAbsolute",!0)}static accept(n){return n.tag==="AbsoluteLayout"}renderIDE(n){let s=`
    <div key="${this.componentKey}" 
        nodepath="${this.nodePath}" 
        className="absoluteLayout" 
        ${Os(this.source.bindAttrs)}
        ${Rs(this.source.staticStyle)}>`;return this.elements.length>0&&this.elements.forEach(r=>{s+=r.renderIDE(n)}),s+=`</div>
`,s}}function Os(e){return e&&e.length>0?e.map(t=>`${t.name}="${t.value}"`).join(" "):""}function Rs(e){if(e&&e.trim()){const t=pc(e.trim());if(t)return` style={${t}} `}return""}const nu=[tu,eu,Qc,Vo];function An(e){const t=nu.find(n=>n.accept(e));return new t(e)}function su(e){return new Gc(e)}function ru(e){return t=>{const n=An(t);return n.parentNode=e,n}}console.log(In);const ou=new Xc(uc),Je=new Yc(ou);Je.useUI({makeUIElement:An,makeRootUIElement:su});Je.refresh();console.log(Je);In.files["/src/App.jsx"]={code:Je.genCode()};console.log(In);function Pn(e){return Ze(Je.getRoot(),e)}const Wo=new qc(In),ce=new sc({simulator:Wo,getSourceByNodePath(e){return Pn(e)}});ce.addEventListener("ready",()=>{ce.startObserveRootElem("#root")});ce.$mount(document.querySelector("#app"));function zo(){const e=Je.genCode();console.log(e),Wo.updateProject("src/App.jsx",e)}function $s(e,t,n){ce.clearFocus();const s={nodePath:"",loc:"",isEmptySlot:!1,fromAbsolute:!1,movingNodeInfos:[],fromCoord:[0,0],toCoord:[0,0],fromNodePath:null};let r=null;const o=t.map(l=>l.nodePath),i=Je.getRoot();ce.doDrag(e,o,async()=>{if(n){const{elementInfo:l,eventMeta:a}=n.detail,c=Ic(i,l,a);c&&await c(ce,s,t)}},async(l,a)=>{r=Cc(l,i,t),await r.dragover(ce,s,l),a()},async()=>{await r.drop(ce,s,t,()=>{Je.refresh(),zo()}),ce.setCursorInFrame("auto")})}const Or=document.getElementById("button");let iu=0;Or.addEventListener("mousedown",e=>{e.preventDefault(),e.stopPropagation();const t=new zt({concept:"ViewElement",tag:"Button",innerText:"buttonX"+iu++});$s(Or,[An(t)])});const Rr=document.getElementById("Flex");Rr.addEventListener("mousedown",e=>{e.preventDefault(),e.stopPropagation();const t=new zt({concept:"ViewElement",tag:"Flex"});$s(Rr,[An(t)])});ce.addEventListener("frame:dragstart",e=>{const t=e.detail.elementInfo.target,n=Pn(t),s=ce.surface.hasTarget(n);let r=[n];s&&(r=ce.surface.getFocusNodes());const o=document.createElement("div");o.innerText=n.tag,$s(o,r,e)});ce.addEventListener("frame:requestEditContent",e=>{const t=e.detail.elementInfo.target;Pn(t).supportEditContent&&ce.doEditContent(t)});ce.addEventListener("frame:contentChange",e=>{const t=e.detail.elementInfo.target,n=Pn(t);if(n.supportEditContent){const s=e.detail.innerText;n.innerText=s,zo()}});export{Mr as S,cu as _,Fc as a,Lc as b,gt as c,Bc as d,jc as e,fu as f,uu as g,du as h,Ko as i,Vn as n};
