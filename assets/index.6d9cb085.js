const lu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};lu();function Yi(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const su="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ou=Yi(su);function To(t){return!!t||t===""}function Gi(t){if(tt(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=Ft(r)?uu(r):Gi(r);if(a)for(const i in a)e[i]=a[i]}return e}else{if(Ft(t))return t;if(Pt(t))return t}}const cu=/;(?![^(]*\))/g,du=/:(.+)/;function uu(t){const e={};return t.split(cu).forEach(n=>{if(n){const r=n.split(du);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $e(t){let e="";if(Ft(t))e=t;else if(tt(t))for(let n=0;n<t.length;n++){const r=$e(t[n]);r&&(e+=r+" ")}else if(Pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ut=t=>t==null?"":tt(t)||Pt(t)&&(t.toString===Jo||!et(t.toString))?JSON.stringify(t,Yo,2):String(t),Yo=(t,e)=>e&&e.__v_isRef?Yo(t,e.value):kn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Wo(e)?{[`Set(${e.size})`]:[...e.values()]}:Pt(e)&&!tt(e)&&!Ko(e)?String(e):e,vt={},Sn=[],Ce=()=>{},gu=()=>!1,fu=/^on[^a-z]/,fa=t=>fu.test(t),Wi=t=>t.startsWith("onUpdate:"),_t=Object.assign,Go=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pu=Object.prototype.hasOwnProperty,ot=(t,e)=>pu.call(t,e),tt=Array.isArray,kn=t=>pa(t)==="[object Map]",Wo=t=>pa(t)==="[object Set]",et=t=>typeof t=="function",Ft=t=>typeof t=="string",zi=t=>typeof t=="symbol",Pt=t=>t!==null&&typeof t=="object",zo=t=>Pt(t)&&et(t.then)&&et(t.catch),Jo=Object.prototype.toString,pa=t=>Jo.call(t),Au=t=>pa(t).slice(8,-1),Ko=t=>pa(t)==="[object Object]",Ji=t=>Ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ur=Yi(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mu=/-(\w)/g,he=Aa(t=>t.replace(mu,(e,n)=>n?n.toUpperCase():"")),hu=/\B([A-Z])/g,Hn=Aa(t=>t.replace(hu,"-$1").toLowerCase()),ma=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),qa=Aa(t=>t?`on${ma(t)}`:""),lr=(t,e)=>!Object.is(t,e),Tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Zr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ge;const Sr=[];class Zo{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ge&&(this.parent=ge,this.index=(ge.scopes||(ge.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Sr.push(this),ge=this)}off(){this.active&&(Sr.pop(),ge=Sr[Sr.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Xo(t){return new Zo(t)}function vu(t,e){e=e||ge,e&&e.active&&e.effects.push(t)}function bu(){return ge}function yu(t){ge&&ge.cleanups.push(t)}const Ki=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_o=t=>(t.w&Ge)>0,$o=t=>(t.n&Ge)>0,Iu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ge},wu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];_o(a)&&!$o(a)?a.delete(t):e[n++]=a,a.w&=~Ge,a.n&=~Ge}e.length=n}},_a=new WeakMap;let zn=0,Ge=1;const $a=30,Tn=[];let rn;const an=Symbol(""),ti=Symbol("");class Zi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],vu(this,r)}run(){if(!this.active)return this.fn();if(!Tn.includes(this))try{return Tn.push(rn=this),Cu(),Ge=1<<++zn,zn<=$a?Iu(this):Yl(this),this.fn()}finally{zn<=$a&&wu(this),Ge=1<<--zn,un(),Tn.pop();const e=Tn.length;rn=e>0?Tn[e-1]:void 0}}stop(){this.active&&(Yl(this),this.onStop&&this.onStop(),this.active=!1)}}function Yl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let On=!0;const Xi=[];function Ln(){Xi.push(On),On=!1}function Cu(){Xi.push(On),On=!0}function un(){const t=Xi.pop();On=t===void 0?!0:t}function $t(t,e,n){if(!tc())return;let r=_a.get(t);r||_a.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Ki()),ec(a)}function tc(){return On&&rn!==void 0}function ec(t,e){let n=!1;zn<=$a?$o(t)||(t.n|=Ge,n=!_o(t)):n=!t.has(rn),n&&(t.add(rn),rn.deps.push(t))}function Ee(t,e,n,r,a,i){const l=_a.get(t);if(!l)return;let s=[];if(e==="clear")s=[...l.values()];else if(n==="length"&&tt(t))l.forEach((o,c)=>{(c==="length"||c>=r)&&s.push(o)});else switch(n!==void 0&&s.push(l.get(n)),e){case"add":tt(t)?Ji(n)&&s.push(l.get("length")):(s.push(l.get(an)),kn(t)&&s.push(l.get(ti)));break;case"delete":tt(t)||(s.push(l.get(an)),kn(t)&&s.push(l.get(ti)));break;case"set":kn(t)&&s.push(l.get(an));break}if(s.length===1)s[0]&&ei(s[0]);else{const o=[];for(const c of s)c&&o.push(...c);ei(Ki(o))}}function ei(t,e){for(const n of tt(t)?t:[...t])(n!==rn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Eu=Yi("__proto__,__v_isRef,__isVue"),nc=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(zi)),Su=_i(),ku=_i(!1,!0),Bu=_i(!0),Gl=Ou();function Ou(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=dt(this);for(let i=0,l=this.length;i<l;i++)$t(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(dt)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ln();const r=dt(this)[e].apply(this,n);return un(),r}}),t}function _i(t=!1,e=!1){return function(r,a,i){if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_raw"&&i===(t?e?Yu:sc:e?lc:ic).get(r))return r;const l=tt(r);if(!t&&l&&ot(Gl,a))return Reflect.get(Gl,a,i);const s=Reflect.get(r,a,i);return(zi(a)?nc.has(a):Eu(a))||(t||$t(r,"get",a),e)?s:xt(s)?!l||!Ji(a)?s.value:s:Pt(s)?t?oc(s):gn(s):s}}const Pu=rc(),xu=rc(!0);function rc(t=!1){return function(n,r,a,i){let l=n[r];if(!t&&(a=dt(a),l=dt(l),!tt(n)&&xt(l)&&!xt(a)))return l.value=a,!0;const s=tt(n)&&Ji(r)?Number(r)<n.length:ot(n,r),o=Reflect.set(n,r,a,i);return n===dt(i)&&(s?lr(a,l)&&Ee(n,"set",r,a):Ee(n,"add",r,a)),o}}function Qu(t,e){const n=ot(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ee(t,"delete",e,void 0),r}function Nu(t,e){const n=Reflect.has(t,e);return(!zi(e)||!nc.has(e))&&$t(t,"has",e),n}function Vu(t){return $t(t,"iterate",tt(t)?"length":an),Reflect.ownKeys(t)}const ac={get:Su,set:Pu,deleteProperty:Qu,has:Nu,ownKeys:Vu},Ru={get:Bu,set(t,e){return!0},deleteProperty(t,e){return!0}},qu=_t({},ac,{get:ku,set:xu}),$i=t=>Pt(t)?gn(t):t,tl=t=>Pt(t)?oc(t):t,el=t=>t,ha=t=>Reflect.getPrototypeOf(t);function kr(t,e,n=!1,r=!1){t=t.__v_raw;const a=dt(t),i=dt(e);e!==i&&!n&&$t(a,"get",e),!n&&$t(a,"get",i);const{has:l}=ha(a),s=r?el:n?tl:$i;if(l.call(a,e))return s(t.get(e));if(l.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function Br(t,e=!1){const n=this.__v_raw,r=dt(n),a=dt(t);return t!==a&&!e&&$t(r,"has",t),!e&&$t(r,"has",a),t===a?n.has(t):n.has(t)||n.has(a)}function Or(t,e=!1){return t=t.__v_raw,!e&&$t(dt(t),"iterate",an),Reflect.get(t,"size",t)}function Wl(t){t=dt(t);const e=dt(this);return ha(e).has.call(e,t)||(e.add(t),Ee(e,"add",t,t)),this}function zl(t,e){e=dt(e);const n=dt(this),{has:r,get:a}=ha(n);let i=r.call(n,t);i||(t=dt(t),i=r.call(n,t));const l=a.call(n,t);return n.set(t,e),i?lr(e,l)&&Ee(n,"set",t,e):Ee(n,"add",t,e),this}function Jl(t){const e=dt(this),{has:n,get:r}=ha(e);let a=n.call(e,t);a||(t=dt(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Ee(e,"delete",t,void 0),i}function Kl(){const t=dt(this),e=t.size!==0,n=t.clear();return e&&Ee(t,"clear",void 0,void 0),n}function Pr(t,e){return function(r,a){const i=this,l=i.__v_raw,s=dt(l),o=e?el:t?tl:$i;return!t&&$t(s,"iterate",an),l.forEach((c,u)=>r.call(a,o(c),o(u),i))}}function xr(t,e,n){return function(...r){const a=this.__v_raw,i=dt(a),l=kn(i),s=t==="entries"||t===Symbol.iterator&&l,o=t==="keys"&&l,c=a[t](...r),u=n?el:e?tl:$i;return!e&&$t(i,"iterate",o?ti:an),{next(){const{value:g,done:p}=c.next();return p?{value:g,done:p}:{value:s?[u(g[0]),u(g[1])]:u(g),done:p}},[Symbol.iterator](){return this}}}}function Ne(t){return function(...e){return t==="delete"?!1:this}}function Mu(){const t={get(i){return kr(this,i)},get size(){return Or(this)},has:Br,add:Wl,set:zl,delete:Jl,clear:Kl,forEach:Pr(!1,!1)},e={get(i){return kr(this,i,!1,!0)},get size(){return Or(this)},has:Br,add:Wl,set:zl,delete:Jl,clear:Kl,forEach:Pr(!1,!0)},n={get(i){return kr(this,i,!0)},get size(){return Or(this,!0)},has(i){return Br.call(this,i,!0)},add:Ne("add"),set:Ne("set"),delete:Ne("delete"),clear:Ne("clear"),forEach:Pr(!0,!1)},r={get(i){return kr(this,i,!0,!0)},get size(){return Or(this,!0)},has(i){return Br.call(this,i,!0)},add:Ne("add"),set:Ne("set"),delete:Ne("delete"),clear:Ne("clear"),forEach:Pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xr(i,!1,!1),n[i]=xr(i,!0,!1),e[i]=xr(i,!1,!0),r[i]=xr(i,!0,!0)}),[t,n,e,r]}const[ju,Hu,Lu,Fu]=Mu();function nl(t,e){const n=e?t?Fu:Lu:t?Hu:ju;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(ot(n,a)&&a in r?n:r,a,i)}const Du={get:nl(!1,!1)},Uu={get:nl(!1,!0)},Tu={get:nl(!0,!1)},ic=new WeakMap,lc=new WeakMap,sc=new WeakMap,Yu=new WeakMap;function Gu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wu(t){return t.__v_skip||!Object.isExtensible(t)?0:Gu(Au(t))}function gn(t){return t&&t.__v_isReadonly?t:rl(t,!1,ac,Du,ic)}function zu(t){return rl(t,!1,qu,Uu,lc)}function oc(t){return rl(t,!0,Ru,Tu,sc)}function rl(t,e,n,r,a){if(!Pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const l=Wu(t);if(l===0)return t;const s=new Proxy(t,l===2?r:n);return a.set(t,s),s}function De(t){return cc(t)?De(t.__v_raw):!!(t&&t.__v_isReactive)}function cc(t){return!!(t&&t.__v_isReadonly)}function dc(t){return De(t)||cc(t)}function dt(t){const e=t&&t.__v_raw;return e?dt(e):t}function Pn(t){return Zr(t,"__v_skip",!0),t}function uc(t){tc()&&(t=dt(t),t.dep||(t.dep=Ki()),ec(t.dep))}function gc(t,e){t=dt(t),t.dep&&ei(t.dep)}const Zl=t=>Pt(t)?gn(t):t;function xt(t){return Boolean(t&&t.__v_isRef===!0)}function gt(t){return fc(t,!1)}function Ju(t){return fc(t,!0)}class Ku{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:dt(e),this._value=n?e:Zl(e)}get value(){return uc(this),this._value}set value(e){e=this._shallow?e:dt(e),lr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Zl(e),gc(this))}}function fc(t,e){return xt(t)?t:new Ku(t,e)}function At(t){return xt(t)?t.value:t}const Zu={get:(t,e,n)=>At(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return xt(a)&&!xt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function pc(t){return De(t)?t:new Proxy(t,Zu)}function Xu(t){const e=tt(t)?new Array(t.length):{};for(const n in t)e[n]=$u(t,n);return e}class _u{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function $u(t,e){const n=t[e];return xt(n)?n:new _u(t,e)}class tg{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Zi(e,()=>{this._dirty||(this._dirty=!0,gc(this))}),this.__v_isReadonly=r}get value(){const e=dt(this);return uc(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Z(t,e){let n,r;const a=et(t);return a?(n=t,r=Ce):(n=t.get,r=t.set),new tg(n,r,a||!r)}Promise.resolve();function eg(t,e,...n){const r=t.vnode.props||vt;let a=n;const i=e.startsWith("update:"),l=i&&e.slice(7);if(l&&l in r){const u=`${l==="modelValue"?"model":l}Modifiers`,{number:g,trim:p}=r[u]||vt;p?a=n.map(I=>I.trim()):g&&(a=n.map(Xa))}let s,o=r[s=qa(e)]||r[s=qa(he(e))];!o&&i&&(o=r[s=qa(Hn(e))]),o&&ve(o,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,ve(c,t,6,a)}}function Ac(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let l={},s=!1;if(!et(t)){const o=c=>{const u=Ac(c,e,!0);u&&(s=!0,_t(l,u))};!n&&e.mixins.length&&e.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!i&&!s?(r.set(t,null),null):(tt(i)?i.forEach(o=>l[o]=null):_t(l,i),r.set(t,l),l)}function al(t,e){return!t||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(t,e[0].toLowerCase()+e.slice(1))||ot(t,Hn(e))||ot(t,e))}let re=null,va=null;function Xr(t){const e=re;return re=t,va=t&&t.type.__scopeId||null,e}function ng(t){va=t}function rg(){va=null}function ag(t,e=re,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&is(-1);const i=Xr(e),l=t(...a);return Xr(i),r._d&&is(1),l};return r._n=!0,r._c=!0,r._d=!0,r}function Ma(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[l],slots:s,attrs:o,emit:c,render:u,renderCache:g,data:p,setupState:I,ctx:E,inheritAttrs:S}=t;let w,A;const v=Xr(t);try{if(n.shapeFlag&4){const y=a||r;w=fe(u.call(y,y,g,i,I,p,E)),A=o}else{const y=e;w=fe(y.length>1?y(i,{attrs:o,slots:s,emit:c}):y(i,null)),A=e.props?o:ig(o)}}catch(y){Zn.length=0,wa(y,t,1),w=Ct(on)}let k=w;if(A&&S!==!1){const y=Object.keys(A),{shapeFlag:x}=k;y.length&&x&7&&(l&&y.some(Wi)&&(A=lg(A,l)),k=or(k,A))}return n.dirs&&(k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),w=k,Xr(v),w}const ig=t=>{let e;for(const n in t)(n==="class"||n==="style"||fa(n))&&((e||(e={}))[n]=t[n]);return e},lg=(t,e)=>{const n={};for(const r in t)(!Wi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sg(t,e,n){const{props:r,children:a,component:i}=t,{props:l,children:s,patchFlag:o}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return r?Xl(r,l,c):!!l;if(o&8){const u=e.dynamicProps;for(let g=0;g<u.length;g++){const p=u[g];if(l[p]!==r[p]&&!al(c,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===l?!1:r?l?Xl(r,l,c):!0:!!l;return!1}function Xl(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!al(n,i))return!0}return!1}function og({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cg=t=>t.__isSuspense;function dg(t,e){e&&e.pendingBranch?tt(t)?e.effects.push(...t):e.effects.push(t):lf(t)}function Yr(t,e){if(Nt){let n=Nt.provides;const r=Nt.parent&&Nt.parent.provides;r===n&&(n=Nt.provides=Object.create(r)),n[t]=e}}function se(t,e,n=!1){const r=Nt||re;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&et(e)?e.call(r.proxy):e}}function vr(t){return et(t)?{setup:t,name:t.name}:t}const ni=t=>!!t.type.__asyncLoader,mc=t=>t.type.__isKeepAlive;function ug(t,e){hc(t,"a",e)}function gg(t,e){hc(t,"da",e)}function hc(t,e,n=Nt){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}t()});if(ba(e,r,n),n){let a=n.parent;for(;a&&a.parent;)mc(a.parent.vnode)&&fg(r,e,n,a),a=a.parent}}function fg(t,e,n,r){const a=ba(e,t,r,!0);ya(()=>{Go(r[e],a)},n)}function ba(t,e,n=Nt,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...l)=>{if(n.isUnmounted)return;Ln(),Nn(n);const s=ve(e,n,t,l);return sn(),un(),s});return r?a.unshift(i):a.push(i),i}}const Oe=t=>(e,n=Nt)=>(!ci||t==="sp")&&ba(t,e,n),pg=Oe("bm"),il=Oe("m"),Ag=Oe("bu"),mg=Oe("u"),hg=Oe("bum"),ya=Oe("um"),vg=Oe("sp"),bg=Oe("rtg"),yg=Oe("rtc");function Ig(t,e=Nt){ba("ec",t,e)}let ri=!0;function wg(t){const e=bc(t),n=t.proxy,r=t.ctx;ri=!1,e.beforeCreate&&_l(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:l,watch:s,provide:o,inject:c,created:u,beforeMount:g,mounted:p,beforeUpdate:I,updated:E,activated:S,deactivated:w,beforeDestroy:A,beforeUnmount:v,destroyed:k,unmounted:y,render:x,renderTracked:P,renderTriggered:N,errorCaptured:L,serverPrefetch:G,expose:nt,inheritAttrs:J,components:X,directives:st,filters:_}=e;if(c&&Cg(c,r,null,t.appContext.config.unwrapInjectedRef),l)for(const it in l){const rt=l[it];et(rt)&&(r[it]=rt.bind(n))}if(a){const it=a.call(n,n);Pt(it)&&(t.data=gn(it))}if(ri=!0,i)for(const it in i){const rt=i[it],Dt=et(rt)?rt.bind(n,n):et(rt.get)?rt.get.bind(n,n):Ce,Tt=!et(rt)&&et(rt.set)?rt.set.bind(n):Ce,Mt=Z({get:Dt,set:Tt});Object.defineProperty(r,it,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Ot=>Mt.value=Ot})}if(s)for(const it in s)vc(s[it],r,n,it);if(o){const it=et(o)?o.call(n):o;Reflect.ownKeys(it).forEach(rt=>{Yr(rt,it[rt])})}u&&_l(u,t,"c");function lt(it,rt){tt(rt)?rt.forEach(Dt=>it(Dt.bind(n))):rt&&it(rt.bind(n))}if(lt(pg,g),lt(il,p),lt(Ag,I),lt(mg,E),lt(ug,S),lt(gg,w),lt(Ig,L),lt(yg,P),lt(bg,N),lt(hg,v),lt(ya,y),lt(vg,G),tt(nt))if(nt.length){const it=t.exposed||(t.exposed={});nt.forEach(rt=>{Object.defineProperty(it,rt,{get:()=>n[rt],set:Dt=>n[rt]=Dt})})}else t.exposed||(t.exposed={});x&&t.render===Ce&&(t.render=x),J!=null&&(t.inheritAttrs=J),X&&(t.components=X),st&&(t.directives=st)}function Cg(t,e,n=Ce,r=!1){tt(t)&&(t=ai(t));for(const a in t){const i=t[a];let l;Pt(i)?"default"in i?l=se(i.from||a,i.default,!0):l=se(i.from||a):l=se(i),xt(l)&&r?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:s=>l.value=s}):e[a]=l}}function _l(t,e,n){ve(tt(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function vc(t,e,n,r){const a=r.includes(".")?Lc(n,r):()=>n[r];if(Ft(t)){const i=e[t];et(i)&&Te(a,i)}else if(et(t))Te(a,t.bind(n));else if(Pt(t))if(tt(t))t.forEach(i=>vc(i,e,n,r));else{const i=et(t.handler)?t.handler.bind(n):e[t.handler];et(i)&&Te(a,i,t)}}function bc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:l}}=t.appContext,s=i.get(e);let o;return s?o=s:!a.length&&!n&&!r?o=e:(o={},a.length&&a.forEach(c=>_r(o,c,l,!0)),_r(o,e,l)),i.set(e,o),o}function _r(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&_r(t,i,n,!0),a&&a.forEach(l=>_r(t,l,n,!0));for(const l in e)if(!(r&&l==="expose")){const s=Eg[l]||n&&n[l];t[l]=s?s(t[l],e[l]):e[l]}return t}const Eg={data:$l,props:Xe,emits:Xe,methods:Xe,computed:Xe,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Xe,directives:Xe,watch:kg,provide:$l,inject:Sg};function $l(t,e){return e?t?function(){return _t(et(t)?t.call(this,this):t,et(e)?e.call(this,this):e)}:e:t}function Sg(t,e){return Xe(ai(t),ai(e))}function ai(t){if(tt(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Xe(t,e){return t?_t(_t(Object.create(null),t),e):e}function kg(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const r in e)n[r]=Yt(t[r],e[r]);return n}function Bg(t,e,n,r=!1){const a={},i={};Zr(i,Ia,1),t.propsDefaults=Object.create(null),yc(t,e,a,i);for(const l in t.propsOptions[0])l in a||(a[l]=void 0);n?t.props=r?a:zu(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Og(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:l}}=t,s=dt(a),[o]=t.propsOptions;let c=!1;if((r||l>0)&&!(l&16)){if(l&8){const u=t.vnode.dynamicProps;for(let g=0;g<u.length;g++){let p=u[g];const I=e[p];if(o)if(ot(i,p))I!==i[p]&&(i[p]=I,c=!0);else{const E=he(p);a[E]=ii(o,s,E,I,t,!1)}else I!==i[p]&&(i[p]=I,c=!0)}}}else{yc(t,e,a,i)&&(c=!0);let u;for(const g in s)(!e||!ot(e,g)&&((u=Hn(g))===g||!ot(e,u)))&&(o?n&&(n[g]!==void 0||n[u]!==void 0)&&(a[g]=ii(o,s,g,void 0,t,!0)):delete a[g]);if(i!==s)for(const g in i)(!e||!ot(e,g))&&(delete i[g],c=!0)}c&&Ee(t,"set","$attrs")}function yc(t,e,n,r){const[a,i]=t.propsOptions;let l=!1,s;if(e)for(let o in e){if(Ur(o))continue;const c=e[o];let u;a&&ot(a,u=he(o))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:al(t.emitsOptions,o)||c!==r[o]&&(r[o]=c,l=!0)}if(i){const o=dt(n),c=s||vt;for(let u=0;u<i.length;u++){const g=i[u];n[g]=ii(a,o,g,c[g],t,!ot(c,g))}}return l}function ii(t,e,n,r,a,i){const l=t[n];if(l!=null){const s=ot(l,"default");if(s&&r===void 0){const o=l.default;if(l.type!==Function&&et(o)){const{propsDefaults:c}=a;n in c?r=c[n]:(Nn(a),r=c[n]=o.call(null,e),sn())}else r=o}l[0]&&(i&&!s?r=!1:l[1]&&(r===""||r===Hn(n))&&(r=!0))}return r}function Ic(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,l={},s=[];let o=!1;if(!et(t)){const u=g=>{o=!0;const[p,I]=Ic(g,e,!0);_t(l,p),I&&s.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!o)return r.set(t,Sn),Sn;if(tt(i))for(let u=0;u<i.length;u++){const g=he(i[u]);ts(g)&&(l[g]=vt)}else if(i)for(const u in i){const g=he(u);if(ts(g)){const p=i[u],I=l[g]=tt(p)||et(p)?{type:p}:p;if(I){const E=rs(Boolean,I.type),S=rs(String,I.type);I[0]=E>-1,I[1]=S<0||E<S,(E>-1||ot(I,"default"))&&s.push(g)}}}const c=[l,s];return r.set(t,c),c}function ts(t){return t[0]!=="$"}function es(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ns(t,e){return es(t)===es(e)}function rs(t,e){return tt(e)?e.findIndex(n=>ns(n,t)):et(e)&&ns(e,t)?0:-1}const wc=t=>t[0]==="_"||t==="$stable",ll=t=>tt(t)?t.map(fe):[fe(t)],Pg=(t,e,n)=>{const r=ag((...a)=>ll(e(...a)),n);return r._c=!1,r},Cc=(t,e,n)=>{const r=t._ctx;for(const a in t){if(wc(a))continue;const i=t[a];if(et(i))e[a]=Pg(a,i,r);else if(i!=null){const l=ll(i);e[a]=()=>l}}},Ec=(t,e)=>{const n=ll(e);t.slots.default=()=>n},xg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=dt(e),Zr(e,"_",n)):Cc(e,t.slots={})}else t.slots={},e&&Ec(t,e);Zr(t.slots,Ia,1)},Qg=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,l=vt;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(_t(a,e),!n&&s===1&&delete a._):(i=!e.$stable,Cc(e,a)),l=e}else e&&(Ec(t,e),l={default:1});if(i)for(const s in a)!wc(s)&&!(s in l)&&delete a[s]};function Ng(t,e){const n=re;if(n===null)return t;const r=n.proxy,a=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[l,s,o,c=vt]=e[i];et(l)&&(l={mounted:l,updated:l}),l.deep&&tn(s),a.push({dir:l,instance:r,value:s,oldValue:void 0,arg:o,modifiers:c})}return t}function Ze(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let l=0;l<a.length;l++){const s=a[l];i&&(s.oldValue=i[l].value);let o=s.dir[r];o&&(Ln(),ve(o,n,8,[t.el,s,t,e]),un())}}function Sc(){return{app:null,config:{isNativeTag:gu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vg=0;function Rg(t,e){return function(r,a=null){a!=null&&!Pt(a)&&(a=null);const i=Sc(),l=new Set;let s=!1;const o=i.app={_uid:Vg++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:of,get config(){return i.config},set config(c){},use(c,...u){return l.has(c)||(c&&et(c.install)?(l.add(c),c.install(o,...u)):et(c)&&(l.add(c),c(o,...u))),o},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),o},component(c,u){return u?(i.components[c]=u,o):i.components[c]},directive(c,u){return u?(i.directives[c]=u,o):i.directives[c]},mount(c,u,g){if(!s){const p=Ct(r,a);return p.appContext=i,u&&e?e(p,c):t(p,c,g),s=!0,o._container=c,c.__vue_app__=o,dl(p.component)||p.component.proxy}},unmount(){s&&(t(null,o._container),delete o._container.__vue_app__)},provide(c,u){return i.provides[c]=u,o}};return o}}const Wt=dg;function qg(t){return Mg(t)}function Mg(t,e){const{insert:n,remove:r,patchProp:a,createElement:i,createText:l,createComment:s,setText:o,setElementText:c,parentNode:u,nextSibling:g,setScopeId:p=Ce,cloneNode:I,insertStaticContent:E}=t,S=(d,f,m,C=null,B=null,V=null,H=!1,R=null,q=!!f.dynamicChildren)=>{if(d===f)return;d&&!Yn(d,f)&&(C=Q(d),Ot(d,B,V,!0),d=null),f.patchFlag===-2&&(q=!1,f.dynamicChildren=null);const{type:b,ref:O,shapeFlag:D}=f;switch(b){case sr:w(d,f,m,C);break;case on:A(d,f,m,C);break;case ja:d==null&&v(f,m,C,H);break;case jt:X(d,f,m,C,B,V,H,R,q);break;default:D&1?x(d,f,m,C,B,V,H,R,q):D&6?st(d,f,m,C,B,V,H,R,q):(D&64||D&128)&&b.process(d,f,m,C,B,V,H,R,q,M)}O!=null&&B&&li(O,d&&d.ref,V,f||d,!f)},w=(d,f,m,C)=>{if(d==null)n(f.el=l(f.children),m,C);else{const B=f.el=d.el;f.children!==d.children&&o(B,f.children)}},A=(d,f,m,C)=>{d==null?n(f.el=s(f.children||""),m,C):f.el=d.el},v=(d,f,m,C)=>{[d.el,d.anchor]=E(d.children,f,m,C)},k=({el:d,anchor:f},m,C)=>{let B;for(;d&&d!==f;)B=g(d),n(d,m,C),d=B;n(f,m,C)},y=({el:d,anchor:f})=>{let m;for(;d&&d!==f;)m=g(d),r(d),d=m;r(f)},x=(d,f,m,C,B,V,H,R,q)=>{H=H||f.type==="svg",d==null?P(f,m,C,B,V,H,R,q):G(d,f,B,V,H,R,q)},P=(d,f,m,C,B,V,H,R)=>{let q,b;const{type:O,props:D,shapeFlag:U,transition:K,patchFlag:at,dirs:ct}=d;if(d.el&&I!==void 0&&at===-1)q=d.el=I(d.el);else{if(q=d.el=i(d.type,V,D&&D.is,D),U&8?c(q,d.children):U&16&&L(d.children,q,null,C,B,V&&O!=="foreignObject",H,R),ct&&Ze(d,null,C,"created"),D){for(const bt in D)bt!=="value"&&!Ur(bt)&&a(q,bt,null,D[bt],V,d.children,C,B,Et);"value"in D&&a(q,"value",null,D.value),(b=D.onVnodeBeforeMount)&&de(b,C,d)}N(q,d,d.scopeId,H,C)}ct&&Ze(d,null,C,"beforeMount");const ft=(!B||B&&!B.pendingBranch)&&K&&!K.persisted;ft&&K.beforeEnter(q),n(q,f,m),((b=D&&D.onVnodeMounted)||ft||ct)&&Wt(()=>{b&&de(b,C,d),ft&&K.enter(q),ct&&Ze(d,null,C,"mounted")},B)},N=(d,f,m,C,B)=>{if(m&&p(d,m),C)for(let V=0;V<C.length;V++)p(d,C[V]);if(B){let V=B.subTree;if(f===V){const H=B.vnode;N(d,H,H.scopeId,H.slotScopeIds,B.parent)}}},L=(d,f,m,C,B,V,H,R,q=0)=>{for(let b=q;b<d.length;b++){const O=d[b]=R?He(d[b]):fe(d[b]);S(null,O,f,m,C,B,V,H,R)}},G=(d,f,m,C,B,V,H)=>{const R=f.el=d.el;let{patchFlag:q,dynamicChildren:b,dirs:O}=f;q|=d.patchFlag&16;const D=d.props||vt,U=f.props||vt;let K;(K=U.onVnodeBeforeUpdate)&&de(K,m,f,d),O&&Ze(f,d,m,"beforeUpdate");const at=B&&f.type!=="foreignObject";if(b?nt(d.dynamicChildren,b,R,m,C,at,V):H||rt(d,f,R,null,m,C,at,V,!1),q>0){if(q&16)J(R,f,D,U,m,C,B);else if(q&2&&D.class!==U.class&&a(R,"class",null,U.class,B),q&4&&a(R,"style",D.style,U.style,B),q&8){const ct=f.dynamicProps;for(let ft=0;ft<ct.length;ft++){const bt=ct[ft],ae=D[bt],fn=U[bt];(fn!==ae||bt==="value")&&a(R,bt,ae,fn,B,d.children,m,C,Et)}}q&1&&d.children!==f.children&&c(R,f.children)}else!H&&b==null&&J(R,f,D,U,m,C,B);((K=U.onVnodeUpdated)||O)&&Wt(()=>{K&&de(K,m,f,d),O&&Ze(f,d,m,"updated")},C)},nt=(d,f,m,C,B,V,H)=>{for(let R=0;R<f.length;R++){const q=d[R],b=f[R],O=q.el&&(q.type===jt||!Yn(q,b)||q.shapeFlag&70)?u(q.el):m;S(q,b,O,null,C,B,V,H,!0)}},J=(d,f,m,C,B,V,H)=>{if(m!==C){for(const R in C){if(Ur(R))continue;const q=C[R],b=m[R];q!==b&&R!=="value"&&a(d,R,b,q,H,f.children,B,V,Et)}if(m!==vt)for(const R in m)!Ur(R)&&!(R in C)&&a(d,R,m[R],null,H,f.children,B,V,Et);"value"in C&&a(d,"value",m.value,C.value)}},X=(d,f,m,C,B,V,H,R,q)=>{const b=f.el=d?d.el:l(""),O=f.anchor=d?d.anchor:l("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:K}=f;K&&(R=R?R.concat(K):K),d==null?(n(b,m,C),n(O,m,C),L(f.children,m,O,B,V,H,R,q)):D>0&&D&64&&U&&d.dynamicChildren?(nt(d.dynamicChildren,U,m,B,V,H,R),(f.key!=null||B&&f===B.subTree)&&kc(d,f,!0)):rt(d,f,m,O,B,V,H,R,q)},st=(d,f,m,C,B,V,H,R,q)=>{f.slotScopeIds=R,d==null?f.shapeFlag&512?B.ctx.activate(f,m,C,H,q):_(f,m,C,B,V,H,q):ut(d,f,q)},_=(d,f,m,C,B,V,H)=>{const R=d.component=Jg(d,C,B);if(mc(d)&&(R.ctx.renderer=M),Kg(R),R.asyncDep){if(B&&B.registerDep(R,lt),!d.el){const q=R.subTree=Ct(on);A(null,q,f,m)}return}lt(R,d,f,m,B,V,H)},ut=(d,f,m)=>{const C=f.component=d.component;if(sg(d,f,m))if(C.asyncDep&&!C.asyncResolved){it(C,f,m);return}else C.next=f,rf(C.update),C.update();else f.component=d.component,f.el=d.el,C.vnode=f},lt=(d,f,m,C,B,V,H)=>{const R=()=>{if(d.isMounted){let{next:O,bu:D,u:U,parent:K,vnode:at}=d,ct=O,ft;q.allowRecurse=!1,O?(O.el=at.el,it(d,O,H)):O=at,D&&Tr(D),(ft=O.props&&O.props.onVnodeBeforeUpdate)&&de(ft,K,O,at),q.allowRecurse=!0;const bt=Ma(d),ae=d.subTree;d.subTree=bt,S(ae,bt,u(ae.el),Q(ae),d,B,V),O.el=bt.el,ct===null&&og(d,bt.el),U&&Wt(U,B),(ft=O.props&&O.props.onVnodeUpdated)&&Wt(()=>de(ft,K,O,at),B)}else{let O;const{el:D,props:U}=f,{bm:K,m:at,parent:ct}=d,ft=ni(f);if(q.allowRecurse=!1,K&&Tr(K),!ft&&(O=U&&U.onVnodeBeforeMount)&&de(O,ct,f),q.allowRecurse=!0,D&&h){const bt=()=>{d.subTree=Ma(d),h(D,d.subTree,d,B,null)};ft?f.type.__asyncLoader().then(()=>!d.isUnmounted&&bt()):bt()}else{const bt=d.subTree=Ma(d);S(null,bt,m,C,d,B,V),f.el=bt.el}if(at&&Wt(at,B),!ft&&(O=U&&U.onVnodeMounted)){const bt=f;Wt(()=>de(O,ct,bt),B)}f.shapeFlag&256&&d.a&&Wt(d.a,B),d.isMounted=!0,f=m=C=null}},q=new Zi(R,()=>Vc(d.update),d.scope),b=d.update=q.run.bind(q);b.id=d.uid,q.allowRecurse=b.allowRecurse=!0,b()},it=(d,f,m)=>{f.component=d;const C=d.vnode.props;d.vnode=f,d.next=null,Og(d,f.props,C,m),Qg(d,f.children,m),Ln(),fl(void 0,d.update),un()},rt=(d,f,m,C,B,V,H,R,q=!1)=>{const b=d&&d.children,O=d?d.shapeFlag:0,D=f.children,{patchFlag:U,shapeFlag:K}=f;if(U>0){if(U&128){Tt(b,D,m,C,B,V,H,R,q);return}else if(U&256){Dt(b,D,m,C,B,V,H,R,q);return}}K&8?(O&16&&Et(b,B,V),D!==b&&c(m,D)):O&16?K&16?Tt(b,D,m,C,B,V,H,R,q):Et(b,B,V,!0):(O&8&&c(m,""),K&16&&L(D,m,C,B,V,H,R,q))},Dt=(d,f,m,C,B,V,H,R,q)=>{d=d||Sn,f=f||Sn;const b=d.length,O=f.length,D=Math.min(b,O);let U;for(U=0;U<D;U++){const K=f[U]=q?He(f[U]):fe(f[U]);S(d[U],K,m,null,B,V,H,R,q)}b>O?Et(d,B,V,!0,!1,D):L(f,m,C,B,V,H,R,q,D)},Tt=(d,f,m,C,B,V,H,R,q)=>{let b=0;const O=f.length;let D=d.length-1,U=O-1;for(;b<=D&&b<=U;){const K=d[b],at=f[b]=q?He(f[b]):fe(f[b]);if(Yn(K,at))S(K,at,m,null,B,V,H,R,q);else break;b++}for(;b<=D&&b<=U;){const K=d[D],at=f[U]=q?He(f[U]):fe(f[U]);if(Yn(K,at))S(K,at,m,null,B,V,H,R,q);else break;D--,U--}if(b>D){if(b<=U){const K=U+1,at=K<O?f[K].el:C;for(;b<=U;)S(null,f[b]=q?He(f[b]):fe(f[b]),m,at,B,V,H,R,q),b++}}else if(b>U)for(;b<=D;)Ot(d[b],B,V,!0),b++;else{const K=b,at=b,ct=new Map;for(b=at;b<=U;b++){const Zt=f[b]=q?He(f[b]):fe(f[b]);Zt.key!=null&&ct.set(Zt.key,b)}let ft,bt=0;const ae=U-at+1;let fn=!1,Dl=0;const Un=new Array(ae);for(b=0;b<ae;b++)Un[b]=0;for(b=K;b<=D;b++){const Zt=d[b];if(bt>=ae){Ot(Zt,B,V,!0);continue}let ce;if(Zt.key!=null)ce=ct.get(Zt.key);else for(ft=at;ft<=U;ft++)if(Un[ft-at]===0&&Yn(Zt,f[ft])){ce=ft;break}ce===void 0?Ot(Zt,B,V,!0):(Un[ce-at]=b+1,ce>=Dl?Dl=ce:fn=!0,S(Zt,f[ce],m,null,B,V,H,R,q),bt++)}const Ul=fn?jg(Un):Sn;for(ft=Ul.length-1,b=ae-1;b>=0;b--){const Zt=at+b,ce=f[Zt],Tl=Zt+1<O?f[Zt+1].el:C;Un[b]===0?S(null,ce,m,Tl,B,V,H,R,q):fn&&(ft<0||b!==Ul[ft]?Mt(ce,m,Tl,2):ft--)}}},Mt=(d,f,m,C,B=null)=>{const{el:V,type:H,transition:R,children:q,shapeFlag:b}=d;if(b&6){Mt(d.component.subTree,f,m,C);return}if(b&128){d.suspense.move(f,m,C);return}if(b&64){H.move(d,f,m,M);return}if(H===jt){n(V,f,m);for(let D=0;D<q.length;D++)Mt(q[D],f,m,C);n(d.anchor,f,m);return}if(H===ja){k(d,f,m);return}if(C!==2&&b&1&&R)if(C===0)R.beforeEnter(V),n(V,f,m),Wt(()=>R.enter(V),B);else{const{leave:D,delayLeave:U,afterLeave:K}=R,at=()=>n(V,f,m),ct=()=>{D(V,()=>{at(),K&&K()})};U?U(V,at,ct):ct()}else n(V,f,m)},Ot=(d,f,m,C=!1,B=!1)=>{const{type:V,props:H,ref:R,children:q,dynamicChildren:b,shapeFlag:O,patchFlag:D,dirs:U}=d;if(R!=null&&li(R,null,m,d,!0),O&256){f.ctx.deactivate(d);return}const K=O&1&&U,at=!ni(d);let ct;if(at&&(ct=H&&H.onVnodeBeforeUnmount)&&de(ct,f,d),O&6)Qe(d.component,m,C);else{if(O&128){d.suspense.unmount(m,C);return}K&&Ze(d,null,f,"beforeUnmount"),O&64?d.type.remove(d,f,m,B,M,C):b&&(V!==jt||D>0&&D&64)?Et(b,f,m,!1,!0):(V===jt&&D&384||!B&&O&16)&&Et(q,f,m),C&&Jt(d)}(at&&(ct=H&&H.onVnodeUnmounted)||K)&&Wt(()=>{ct&&de(ct,f,d),K&&Ze(d,null,f,"unmounted")},m)},Jt=d=>{const{type:f,el:m,anchor:C,transition:B}=d;if(f===jt){Kt(m,C);return}if(f===ja){y(d);return}const V=()=>{r(m),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(d.shapeFlag&1&&B&&!B.persisted){const{leave:H,delayLeave:R}=B,q=()=>H(m,V);R?R(d.el,V,q):q()}else V()},Kt=(d,f)=>{let m;for(;d!==f;)m=g(d),r(d),d=m;r(f)},Qe=(d,f,m)=>{const{bum:C,scope:B,update:V,subTree:H,um:R}=d;C&&Tr(C),B.stop(),V&&(V.active=!1,Ot(H,d,f,m)),R&&Wt(R,f),Wt(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Et=(d,f,m,C=!1,B=!1,V=0)=>{for(let H=V;H<d.length;H++)Ot(d[H],f,m,C,B)},Q=d=>d.shapeFlag&6?Q(d.component.subTree):d.shapeFlag&128?d.suspense.next():g(d.anchor||d.el),F=(d,f,m)=>{d==null?f._vnode&&Ot(f._vnode,null,null,!0):S(f._vnode||null,d,f,null,null,null,m),Mc(),f._vnode=d},M={p:S,um:Ot,m:Mt,r:Jt,mt:_,mc:L,pc:rt,pbc:nt,n:Q,o:t};let z,h;return e&&([z,h]=e(M)),{render:F,hydrate:z,createApp:Rg(F,z)}}function li(t,e,n,r,a=!1){if(tt(t)){t.forEach((p,I)=>li(p,e&&(tt(e)?e[I]:e),n,r,a));return}if(ni(r)&&!a)return;const i=r.shapeFlag&4?dl(r.component)||r.component.proxy:r.el,l=a?null:i,{i:s,r:o}=t,c=e&&e.r,u=s.refs===vt?s.refs={}:s.refs,g=s.setupState;if(c!=null&&c!==o&&(Ft(c)?(u[c]=null,ot(g,c)&&(g[c]=null)):xt(c)&&(c.value=null)),Ft(o)){const p=()=>{u[o]=l,ot(g,o)&&(g[o]=l)};l?(p.id=-1,Wt(p,n)):p()}else if(xt(o)){const p=()=>{o.value=l};l?(p.id=-1,Wt(p,n)):p()}else et(o)&&Ue(o,s,12,[l,u])}function de(t,e,n,r=null){ve(t,e,7,[n,r])}function kc(t,e,n=!1){const r=t.children,a=e.children;if(tt(r)&&tt(a))for(let i=0;i<r.length;i++){const l=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=He(a[i]),s.el=l.el),n||kc(l,s))}}function jg(t){const e=t.slice(),n=[0];let r,a,i,l,s;const o=t.length;for(r=0;r<o;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,l=n.length-1;i<l;)s=i+l>>1,t[n[s]]<c?i=s+1:l=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=e[l];return n}const Hg=t=>t.__isTeleport,Bc="components";function sl(t,e){return Fg(Bc,t,!0,e)||t}const Lg=Symbol();function Fg(t,e,n=!0,r=!1){const a=re||Nt;if(a){const i=a.type;if(t===Bc){const s=$g(i);if(s&&(s===e||s===he(e)||s===ma(he(e))))return i}const l=as(a[t]||i[t],e)||as(a.appContext[t],e);return!l&&r?i:l}}function as(t,e){return t&&(t[e]||t[he(e)]||t[ma(he(e))])}const jt=Symbol(void 0),sr=Symbol(void 0),on=Symbol(void 0),ja=Symbol(void 0),Zn=[];let ln=null;function ht(t=!1){Zn.push(ln=t?null:[])}function Dg(){Zn.pop(),ln=Zn[Zn.length-1]||null}let $r=1;function is(t){$r+=t}function Oc(t){return t.dynamicChildren=$r>0?ln||Sn:null,Dg(),$r>0&&ln&&ln.push(t),t}function yt(t,e,n,r,a,i){return Oc(j(t,e,n,r,a,i,!0))}function ol(t,e,n,r,a){return Oc(Ct(t,e,n,r,a,!0))}function si(t){return t?t.__v_isVNode===!0:!1}function Yn(t,e){return t.type===e.type&&t.key===e.key}const Ia="__vInternal",Pc=({key:t})=>t!=null?t:null,Gr=({ref:t})=>t!=null?Ft(t)||xt(t)||et(t)?{i:re,r:t}:t:null;function j(t,e=null,n=null,r=0,a=null,i=t===jt?0:1,l=!1,s=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pc(e),ref:e&&Gr(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(cl(o,n),i&128&&t.normalize(o)):n&&(o.shapeFlag|=Ft(n)?8:16),$r>0&&!l&&ln&&(o.patchFlag>0||i&6)&&o.patchFlag!==32&&ln.push(o),o}const Ct=Ug;function Ug(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===Lg)&&(t=on),si(t)){const s=or(t,e,!0);return n&&cl(s,n),s}if(tf(t)&&(t=t.__vccOpts),e){e=Tg(e);let{class:s,style:o}=e;s&&!Ft(s)&&(e.class=$e(s)),Pt(o)&&(dc(o)&&!tt(o)&&(o=_t({},o)),e.style=Gi(o))}const l=Ft(t)?1:cg(t)?128:Hg(t)?64:Pt(t)?4:et(t)?2:0;return j(t,e,n,r,a,l,i,!0)}function Tg(t){return t?dc(t)||Ia in t?_t({},t):t:null}function or(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:l}=t,s=e?Yg(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Pc(s),ref:e&&e.ref?n&&a?tt(a)?a.concat(Gr(e)):[a,Gr(e)]:Gr(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==jt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&or(t.ssContent),ssFallback:t.ssFallback&&or(t.ssFallback),el:t.el,anchor:t.anchor}}function xn(t=" ",e=0){return Ct(sr,null,t,e)}function ne(t="",e=!1){return e?(ht(),ol(on,null,t)):Ct(on,null,t)}function fe(t){return t==null||typeof t=="boolean"?Ct(on):tt(t)?Ct(jt,null,t.slice()):typeof t=="object"?He(t):Ct(sr,null,String(t))}function He(t){return t.el===null||t.memo?t:or(t)}function cl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(tt(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),cl(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Ia in e)?e._ctx=re:a===3&&re&&(re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else et(e)?(e={default:e,_ctx:re},n=32):(e=String(e),r&64?(n=16,e=[xn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yg(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=$e([e.class,r.class]));else if(a==="style")e.style=Gi([e.style,r.style]);else if(fa(a)){const i=e[a],l=r[a];i!==l&&(e[a]=i?[].concat(i,l):l)}else a!==""&&(e[a]=r[a])}return e}function Xn(t,e,n,r){let a;const i=n&&n[r];if(tt(t)||Ft(t)){a=new Array(t.length);for(let l=0,s=t.length;l<s;l++)a[l]=e(t[l],l,void 0,i&&i[l])}else if(typeof t=="number"){a=new Array(t);for(let l=0;l<t;l++)a[l]=e(l+1,l,void 0,i&&i[l])}else if(Pt(t))if(t[Symbol.iterator])a=Array.from(t,(l,s)=>e(l,s,void 0,i&&i[s]));else{const l=Object.keys(t);a=new Array(l.length);for(let s=0,o=l.length;s<o;s++){const c=l[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const oi=t=>t?xc(t)?dl(t)||t.proxy:oi(t.parent):null,ta=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>oi(t.parent),$root:t=>oi(t.root),$emit:t=>t.emit,$options:t=>bc(t),$forceUpdate:t=>()=>Vc(t.update),$nextTick:t=>gl.bind(t.proxy),$watch:t=>sf.bind(t)}),Gg={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:l,type:s,appContext:o}=t;let c;if(e[0]!=="$"){const I=l[e];if(I!==void 0)switch(I){case 0:return r[e];case 1:return a[e];case 3:return n[e];case 2:return i[e]}else{if(r!==vt&&ot(r,e))return l[e]=0,r[e];if(a!==vt&&ot(a,e))return l[e]=1,a[e];if((c=t.propsOptions[0])&&ot(c,e))return l[e]=2,i[e];if(n!==vt&&ot(n,e))return l[e]=3,n[e];ri&&(l[e]=4)}}const u=ta[e];let g,p;if(u)return e==="$attrs"&&$t(t,"get",e),u(t);if((g=s.__cssModules)&&(g=g[e]))return g;if(n!==vt&&ot(n,e))return l[e]=3,n[e];if(p=o.config.globalProperties,ot(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;if(a!==vt&&ot(a,e))a[e]=n;else if(r!==vt&&ot(r,e))r[e]=n;else if(ot(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},l){let s;return n[l]!==void 0||t!==vt&&ot(t,l)||e!==vt&&ot(e,l)||(s=i[0])&&ot(s,l)||ot(r,l)||ot(ta,l)||ot(a.config.globalProperties,l)}},Wg=Sc();let zg=0;function Jg(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Wg,i={uid:zg++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,update:null,scope:new Zo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ic(r,a),emitsOptions:Ac(r,a),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:r.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=eg.bind(null,i),t.ce&&t.ce(i),i}let Nt=null;const Qn=()=>Nt||re,Nn=t=>{Nt=t,t.scope.on()},sn=()=>{Nt&&Nt.scope.off(),Nt=null};function xc(t){return t.vnode.shapeFlag&4}let ci=!1;function Kg(t,e=!1){ci=e;const{props:n,children:r}=t.vnode,a=xc(t);Bg(t,n,a,e),xg(t,r);const i=a?Zg(t,e):void 0;return ci=!1,i}function Zg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pn(new Proxy(t.ctx,Gg));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?_g(t):null;Nn(t),Ln();const i=Ue(r,t,0,[t.props,a]);if(un(),sn(),zo(i)){if(i.then(sn,sn),e)return i.then(l=>{ls(t,l)}).catch(l=>{wa(l,t,0)});t.asyncDep=i}else ls(t,i)}else Qc(t)}function ls(t,e,n){et(e)?t.render=e:Pt(e)&&(t.setupState=pc(e)),Qc(t)}function Qc(t,e,n){const r=t.type;t.render||(t.render=r.render||Ce),Nn(t),Ln(),wg(t),un(),sn()}function Xg(t){return new Proxy(t.attrs,{get(e,n){return $t(t,"get","$attrs"),e[n]}})}function _g(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Xg(t))},slots:t.slots,emit:t.emit,expose:e}}function dl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pc(Pn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ta)return ta[n](t)}}))}function $g(t){return et(t)&&t.displayName||t.name}function tf(t){return et(t)&&"__vccOpts"in t}function Ue(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){wa(i,e,n)}return a}function ve(t,e,n,r){if(et(t)){const i=Ue(t,e,n,r);return i&&zo(i)&&i.catch(l=>{wa(l,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(ve(t[i],e,n,r));return a}function wa(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const l=e.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,l,s)===!1)return}i=i.parent}const o=e.appContext.config.errorHandler;if(o){Ue(o,null,10,[t,l,s]);return}}ef(t,n,a,r)}function ef(t,e,n,r=!0){console.error(t)}let ea=!1,di=!1;const Xt=[];let Ie=0;const _n=[];let Jn=null,hn=0;const $n=[];let Me=null,vn=0;const Nc=Promise.resolve();let ul=null,ui=null;function gl(t){const e=ul||Nc;return t?e.then(this?t.bind(this):t):e}function nf(t){let e=Ie+1,n=Xt.length;for(;e<n;){const r=e+n>>>1;cr(Xt[r])<t?e=r+1:n=r}return e}function Vc(t){(!Xt.length||!Xt.includes(t,ea&&t.allowRecurse?Ie+1:Ie))&&t!==ui&&(t.id==null?Xt.push(t):Xt.splice(nf(t.id),0,t),Rc())}function Rc(){!ea&&!di&&(di=!0,ul=Nc.then(jc))}function rf(t){const e=Xt.indexOf(t);e>Ie&&Xt.splice(e,1)}function qc(t,e,n,r){tt(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Rc()}function af(t){qc(t,Jn,_n,hn)}function lf(t){qc(t,Me,$n,vn)}function fl(t,e=null){if(_n.length){for(ui=e,Jn=[...new Set(_n)],_n.length=0,hn=0;hn<Jn.length;hn++)Jn[hn]();Jn=null,hn=0,ui=null,fl(t,e)}}function Mc(t){if($n.length){const e=[...new Set($n)];if($n.length=0,Me){Me.push(...e);return}for(Me=e,Me.sort((n,r)=>cr(n)-cr(r)),vn=0;vn<Me.length;vn++)Me[vn]();Me=null,vn=0}}const cr=t=>t.id==null?1/0:t.id;function jc(t){di=!1,ea=!0,fl(t),Xt.sort((n,r)=>cr(n)-cr(r));const e=Ce;try{for(Ie=0;Ie<Xt.length;Ie++){const n=Xt[Ie];n&&n.active!==!1&&Ue(n,null,14)}}finally{Ie=0,Xt.length=0,Mc(),ea=!1,ul=null,(Xt.length||_n.length||$n.length)&&jc(t)}}const ss={};function Te(t,e,n){return Hc(t,e,n)}function Hc(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:l}=vt){const s=Nt;let o,c=!1,u=!1;if(xt(t)?(o=()=>t.value,c=!!t._shallow):De(t)?(o=()=>t,r=!0):tt(t)?(u=!0,c=t.some(De),o=()=>t.map(A=>{if(xt(A))return A.value;if(De(A))return tn(A);if(et(A))return Ue(A,s,2)})):et(t)?e?o=()=>Ue(t,s,2):o=()=>{if(!(s&&s.isUnmounted))return g&&g(),ve(t,s,3,[p])}:o=Ce,e&&r){const A=o;o=()=>tn(A())}let g,p=A=>{g=w.onStop=()=>{Ue(A,s,4)}},I=u?[]:ss;const E=()=>{if(!!w.active)if(e){const A=w.run();(r||c||(u?A.some((v,k)=>lr(v,I[k])):lr(A,I)))&&(g&&g(),ve(e,s,3,[A,I===ss?void 0:I,p]),I=A)}else w.run()};E.allowRecurse=!!e;let S;a==="sync"?S=E:a==="post"?S=()=>Wt(E,s&&s.suspense):S=()=>{!s||s.isMounted?af(E):E()};const w=new Zi(o,S);return e?n?E():I=w.run():a==="post"?Wt(w.run.bind(w),s&&s.suspense):w.run(),()=>{w.stop(),s&&s.scope&&Go(s.scope.effects,w)}}function sf(t,e,n){const r=this.proxy,a=Ft(t)?t.includes(".")?Lc(r,t):()=>r[t]:t.bind(r,r);let i;et(e)?i=e:(i=e.handler,n=e);const l=Nt;Nn(this);const s=Hc(a,i.bind(r),n);return l?Nn(l):sn(),s}function Lc(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function tn(t,e){if(!Pt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xt(t))tn(t.value,e);else if(tt(t))for(let n=0;n<t.length;n++)tn(t[n],e);else if(Wo(t)||kn(t))t.forEach(n=>{tn(n,e)});else if(Ko(t))for(const n in t)tn(t[n],e);return t}function me(t,e,n){const r=arguments.length;return r===2?Pt(e)&&!tt(e)?si(e)?Ct(t,null,[e]):Ct(t,e):Ct(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&si(n)&&(n=[n]),Ct(t,e,n))}const of="3.2.13",cf="http://www.w3.org/2000/svg",pn=typeof document!="undefined"?document:null,os=new Map,df={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?pn.createElementNS(cf,t):pn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const a=n?n.previousSibling:e.lastChild;let i=os.get(t);if(!i){const l=pn.createElement("template");if(l.innerHTML=r?`<svg>${t}</svg>`:t,i=l.content,r){const s=i.firstChild;for(;s.firstChild;)i.appendChild(s.firstChild);i.removeChild(s)}os.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function gf(t,e,n){const r=t.style,a=r.display;if(!n)t.removeAttribute("style");else if(Ft(n))e!==n&&(r.cssText=n);else{for(const i in n)gi(r,i,n[i]);if(e&&!Ft(e))for(const i in e)n[i]==null&&gi(r,i,"")}"_vod"in t&&(r.display=a)}const cs=/\s*!important$/;function gi(t,e,n){if(tt(n))n.forEach(r=>gi(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=ff(t,e);cs.test(n)?t.setProperty(Hn(r),n.replace(cs,""),"important"):t[r]=n}}const ds=["Webkit","Moz","ms"],Ha={};function ff(t,e){const n=Ha[e];if(n)return n;let r=he(e);if(r!=="filter"&&r in t)return Ha[e]=r;r=ma(r);for(let a=0;a<ds.length;a++){const i=ds[a]+r;if(i in t)return Ha[e]=i}return e}const us="http://www.w3.org/1999/xlink";function pf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(us,e.slice(6,e.length)):t.setAttributeNS(us,e,n);else{const i=ou(e);n==null||i&&!To(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Af(t,e,n,r,a,i,l){if(e==="innerHTML"||e==="textContent"){r&&l(r,a,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const s=n==null?"":n;t.value!==s&&(t.value=s),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const s=typeof t[e];if(s==="boolean"){t[e]=To(n);return}else if(n==null&&s==="string"){t[e]="",t.removeAttribute(e);return}else if(s==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let na=Date.now,Fc=!1;if(typeof window!="undefined"){na()>document.createEvent("Event").timeStamp&&(na=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Fc=!!(t&&Number(t[1])<=53)}let fi=0;const mf=Promise.resolve(),hf=()=>{fi=0},vf=()=>fi||(mf.then(hf),fi=na());function bn(t,e,n,r){t.addEventListener(e,n,r)}function bf(t,e,n,r){t.removeEventListener(e,n,r)}function yf(t,e,n,r,a=null){const i=t._vei||(t._vei={}),l=i[e];if(r&&l)l.value=r;else{const[s,o]=If(e);if(r){const c=i[e]=wf(r,a);bn(t,s,c,o)}else l&&(bf(t,s,l,o),i[e]=void 0)}}const gs=/(?:Once|Passive|Capture)$/;function If(t){let e;if(gs.test(t)){e={};let n;for(;n=t.match(gs);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Hn(t.slice(2)),e]}function wf(t,e){const n=r=>{const a=r.timeStamp||na();(Fc||a>=n.attached-1)&&ve(Cf(r,n.value),e,5,[r])};return n.value=t,n.attached=vf(),n}function Cf(t,e){if(tt(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r(a))}else return e}const fs=/^on[a-z]/,Ef=(t,e,n,r,a=!1,i,l,s,o)=>{e==="class"?uf(t,r,a):e==="style"?gf(t,n,r):fa(e)?Wi(e)||yf(t,e,n,r,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sf(t,e,r,a))?Af(t,e,r,i,l,s,o):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pf(t,e,r,a))};function Sf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&fs.test(e)&&et(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fs.test(e)&&Ft(n)?!1:e in t}const ps=t=>{const e=t.props["onUpdate:modelValue"];return tt(e)?n=>Tr(e,n):e};function kf(t){t.target.composing=!0}function As(t){const e=t.target;e.composing&&(e.composing=!1,Bf(e,"input"))}function Bf(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Of={created(t,{modifiers:{lazy:e,trim:n,number:r}},a){t._assign=ps(a);const i=r||a.props&&a.props.type==="number";bn(t,e?"change":"input",l=>{if(l.target.composing)return;let s=t.value;n?s=s.trim():i&&(s=Xa(s)),t._assign(s)}),n&&bn(t,"change",()=>{t.value=t.value.trim()}),e||(bn(t,"compositionstart",kf),bn(t,"compositionend",As),bn(t,"change",As))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:a}},i){if(t._assign=ps(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(a||t.type==="number")&&Xa(t.value)===e))return;const l=e==null?"":e;t.value!==l&&(t.value=l)}},Pf=["ctrl","shift","alt","meta"],xf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pf.some(n=>t[`${n}Key`]&&!e.includes(n))},Dc=(t,e)=>(n,...r)=>{for(let a=0;a<e.length;a++){const i=xf[e[a]];if(i&&i(n,e))return}return t(n,...r)},Qf=_t({patchProp:Ef},df);let ms;function Nf(){return ms||(ms=qg(Qf))}const Vf=(...t)=>{const e=Nf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Rf(r);if(!a)return;const i=e._component;!et(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const l=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),l},e};function Rf(t){return Ft(t)?document.querySelector(t):t}var Uc="./assets/logo-white.3fa6436f.png",qf=!1;function Mf(){return Tc().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Tc(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const jf=typeof Proxy=="function",Hf="devtools-plugin:setup",Lf="plugin:settings:set";let An,pi;function Ff(){var t;return An!==void 0||(typeof window!="undefined"&&window.performance?(An=!0,pi=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(An=!0,pi=global.perf_hooks.performance):An=!1),An}function Df(){return Ff()?pi.now():Date.now()}class Uf{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const l in e.settings){const s=e.settings[l];r[l]=s.defaultValue}const a=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const l=localStorage.getItem(a),s=JSON.parse(l);Object.assign(i,s)}catch{}this.fallbacks={getSettings(){return i},setSettings(l){try{localStorage.setItem(a,JSON.stringify(l))}catch{}i=l},now(){return Df()}},n&&n.on(Lf,(l,s)=>{l===this.plugin.id&&this.fallbacks.setSettings(s)}),this.proxiedOn=new Proxy({},{get:(l,s)=>this.target?this.target.on[s]:(...o)=>{this.onQueue.push({method:s,args:o})}}),this.proxiedTarget=new Proxy({},{get:(l,s)=>this.target?this.target[s]:s==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(s)?(...o)=>(this.targetQueue.push({method:s,args:o,resolve:()=>{}}),this.fallbacks[s](...o)):(...o)=>new Promise(c=>{this.targetQueue.push({method:s,args:o,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Tf(t,e){const n=t,r=Tc(),a=Mf(),i=jf&&n.enableEarlyProxy;if(a&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))a.emit(Hf,t,e);else{const l=i?new Uf(n,a):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:l}),l&&e(l.proxiedTarget)}}/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Yc;const Ca=t=>Yc=t,Gc=Symbol();function Ai(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var tr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(tr||(tr={}));function Yf(){const t=Xo(!0),e=t.run(()=>gt({}));let n=[],r=[];const a=Pn({install(i){Ca(a),a._a=i,i.provide(Gc,a),i.config.globalProperties.$pinia=a,r.forEach(l=>n.push(l)),r=[]},use(i){return!this._a&&!qf?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return a}const Wc=()=>{};function hs(t,e,n,r=Wc){t.push(e);const a=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&bu()&&yu(a),a}function mn(t,...e){t.slice().forEach(n=>{n(...e)})}function mi(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],a=t[n];Ai(a)&&Ai(r)&&t.hasOwnProperty(n)&&!xt(r)&&!De(r)?t[n]=mi(a,r):t[n]=r}return t}const Gf=Symbol();function Wf(t){return!Ai(t)||!t.hasOwnProperty(Gf)}const{assign:je}=Object;function zf(t){return!!(xt(t)&&t.effect)}function Jf(t,e,n,r){const{state:a,actions:i,getters:l}=e,s=n.state.value[t];let o;function c(){s||(n.state.value[t]=a?a():{});const u=Xu(n.state.value[t]);return je(u,i,Object.keys(l||{}).reduce((g,p)=>(g[p]=Pn(Z(()=>{Ca(n);const I=n._s.get(t);return l[p].call(I,I)})),g),{}))}return o=zc(t,c,e,n,r,!0),o}function zc(t,e,n={},r,a,i){let l;const s=je({actions:{}},n),o={deep:!0};let c,u,g=Pn([]),p=Pn([]),I;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),gt({});let S;function w(N){let L;c=u=!1,typeof N=="function"?(N(r.state.value[t]),L={type:tr.patchFunction,storeId:t,events:I}):(mi(r.state.value[t],N),L={type:tr.patchObject,payload:N,storeId:t,events:I});const G=S=Symbol();gl().then(()=>{S===G&&(c=!0)}),u=!0,mn(g,L,r.state.value[t])}const A=i?function(){const{state:L}=n,G=L?L():{};this.$patch(nt=>{je(nt,G)})}:Wc;function v(){l.stop(),g=[],p=[],r._s.delete(t)}function k(N,L){return function(){Ca(r);const G=Array.from(arguments),nt=[],J=[];function X(ut){nt.push(ut)}function st(ut){J.push(ut)}mn(p,{args:G,name:N,store:x,after:X,onError:st});let _;try{_=L.apply(this&&this.$id===t?this:x,G)}catch(ut){throw mn(J,ut),ut}return _ instanceof Promise?_.then(ut=>(mn(nt,ut),ut)).catch(ut=>(mn(J,ut),Promise.reject(ut))):(mn(nt,_),_)}}const y={_p:r,$id:t,$onAction:hs.bind(null,p),$patch:w,$reset:A,$subscribe(N,L={}){const G=hs(g,N,L.detached,()=>nt()),nt=l.run(()=>Te(()=>r.state.value[t],J=>{(L.flush==="sync"?u:c)&&N({storeId:t,type:tr.direct,events:I},J)},je({},o,L)));return G},$dispose:v},x=gn(y);r._s.set(t,x);const P=r._e.run(()=>(l=Xo(),l.run(()=>e())));for(const N in P){const L=P[N];if(xt(L)&&!zf(L)||De(L))i||(E&&Wf(L)&&(xt(L)?L.value=E[N]:mi(L,E[N])),r.state.value[t][N]=L);else if(typeof L=="function"){const G=k(N,L);P[N]=G,s.actions[N]=L}}return je(x,P),je(dt(x),P),Object.defineProperty(x,"$state",{get:()=>r.state.value[t],set:N=>{w(L=>{je(L,N)})}}),r._p.forEach(N=>{je(x,l.run(()=>N({store:x,app:r._a,pinia:r,options:s})))}),E&&i&&n.hydrate&&n.hydrate(x.$state,E),c=!0,u=!0,x}function te(t,e,n){let r,a;const i=typeof e=="function";typeof t=="string"?(r=t,a=i?n:e):(a=t,r=t.id);function l(s,o){const c=Qn();return s=s||c&&se(Gc,null),s&&Ca(s),s=Yc,s._s.has(r)||(i?zc(r,e,a,s):Jf(r,a,s)),s._s.get(r)}return l.$id=r,l}const pl=te("storage",()=>{const t="Ism20230906_Web",e=function(){let o={local:{},session:{}},c=p=>!!(p&&typeof p=="object"&&!Array.isArray(p)),u=localStorage.getItem(t),g=sessionStorage.getItem(t);if(u){let p=JSON.parse(u);c(p)&&(o.local=p)}if(g){let p=JSON.parse(g);c(p)&&(o.session=p)}return o}(),n=gt(e.local),r=gt(e.session);return{localStorageInfos:n,setLocalStorageData:(o="",c)=>{if(o){n.value[o]=c;let u=JSON.stringify(n.value);localStorage.setItem(t,u)}},removeLocalStorage:()=>{n.value={},localStorage.removeItem(t)},sessionStorageInfos:r,setSessionStorageData:(o="",c)=>{if(o){r.value[o]=c;let u=JSON.stringify(r.value);sessionStorage.setItem(t,u)}},removeSessionStorage:()=>{r.value={},sessionStorage.removeItem(t)}}}),br=te("globle",()=>{class t{constructor(){this.isTest=!1,this.pathName="",this.hostDomain=""}getPathName(){var u;let s="",c=(u=pl().localStorageInfos)==null?void 0:u.pathName;c&&(s=c),this.pathName=s}getHostDomain(){return this.isTest?this.hostDomain="192.168.123.20"+this.pathName:this.hostDomain=window.location.host+this.pathName}}const e=new t;e.getPathName(),e.getHostDomain();const n=gt({pathName:e.pathName,serverURL:e.hostDomain,token:"",adminId:"",pagesPermit:"",language:"en"}),r=gt({imgs:{folder:"imgs",path:e.hostDomain+"/imgs"},files:{folder:"files",path:e.hostDomain+"/files"},getUrl:(l="",s="")=>{let o="";return l=="imgs"&&(o=r.value.imgs.path),l=="files"&&(o=r.value.files.path),console.log(`http://${o}/${s}`),`http://${o}/${s}`}});return{globleInfos:n,debug:l=>{window.location.href.search("debug=d8g")>0&&console.log(l)},fileFolderPath:r,changingUrlSetting:()=>{e.getPathName(),e.getHostDomain(),n.value.pathName=e.pathName,n.value.serverURL=e.hostDomain}}}),Al=te("headquarters",()=>{const t=gt({});return{headquartersInfos:t,setHeadquartersInfos:(r={})=>{t.value=r},toPublicWeb:(r="")=>{var c,u,g,p;let a=((c=t.value)==null?void 0:c.Instagram)||"",i=((u=t.value)==null?void 0:u.Skype)||"",l=((g=t.value)==null?void 0:g.Line)||"",s=((p=t.value)==null?void 0:p.Youtube)||"",o=I=>window.open(I);if(r=="Instagram"&&a)return o(a);if(r=="Skype"&&i)return o(i);if(r=="Line"&&l)return o(l);if(r=="Youtube"&&s)return o(s)}}}),ml=te("categories",()=>{const t=gt([]),e=(o=[])=>{t.value=o},n=()=>{let o=t.value.reduce((c,u)=>{let{visibility:g}=u;return g=="1"&&c.push(u),c},[]);return o.sort(function(c,u){return(c==null?void 0:c.sort)-(u==null?void 0:u.sort)}),o},a=gt((()=>{let o,c=sessionStorage.getItem("CategoriesStoreActive_cid");return c&&(o=JSON.parse(c)),o||""})()),i=o=>{let c=o||"";sessionStorage.setItem("CategoriesStoreActive_cid",JSON.stringify(c)),a.value=c},l=()=>({zh_title:"\u5168\u90E8",en_title:"All",c_id:"",sort:0,isClicked:!a.value});return{categoriesInfos:t,setCategoriesInfos:e,getProductCategoriesList:n,active_cid:a,setActive_cid:i,getAllButtonInfo:l,initialButtonList:()=>{let o=l(),c=t.value.reduce((u,g)=>{let{c_id:p}=g,I=a.value==p;return u.push({...g,isClicked:I}),u},[o]);return c.sort(function(u,g){return(u==null?void 0:u.sort)-(g==null?void 0:g.sort)}),c}}}),Jc=te("header",()=>{const t=gt([{title:"Home",id:"#"},{title:"About ISM",id:"About"},{title:"Product",id:"Product",subList:[]},{title:"News",id:"News"},{title:"Service Center",id:"ServiceCenter"},{title:"Contact",id:"Contact"}]),e=gt("#"),n=gt({scrollY:0,theFixedPosition:64}),r=()=>n.value.scrollY>n.value.theFixedPosition;return{linkList:t,activedHeader_id:e,scrollInfo:n,setIsFixed:r,setScrollY:i=>{let l=r(),o=document.getElementById("TheFixedDiv").offsetHeight,c=i.offsetTop-o;l||(c-=o),n.value.scrollY=c}}});/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const yn=typeof window!="undefined";function Kf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pt=Object.assign;function La(t,e){const n={};for(const r in e){const a=e[r];n[r]=oe(a)?a.map(t):t(a)}return n}const er=()=>{},oe=Array.isArray,Zf=/\/$/,Xf=t=>t.replace(Zf,"");function Fa(t,e,n="/"){let r,a={},i="",l="";const s=e.indexOf("#");let o=e.indexOf("?");return s<o&&s>=0&&(o=-1),o>-1&&(r=e.slice(0,o),i=e.slice(o+1,s>-1?s:e.length),a=t(i)),s>-1&&(r=r||e.slice(0,s),l=e.slice(s,e.length)),r=ep(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+l,path:r,query:a,hash:l}}function _f(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vs(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $f(t,e,n){const r=e.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Vn(e.matched[r],n.matched[a])&&Kc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tp(t[n],e[n]))return!1;return!0}function tp(t,e){return oe(t)?bs(t,e):oe(e)?bs(e,t):t===e}function bs(t,e){return oe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ep(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,l,s;for(l=0;l<r.length;l++)if(s=r[l],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var dr;(function(t){t.pop="pop",t.push="push"})(dr||(dr={}));var nr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(nr||(nr={}));function np(t){if(!t)if(yn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xf(t)}const rp=/^[^#]+#/;function ap(t,e){return t.replace(rp,"#")+e}function ip(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ea=()=>({left:window.pageXOffset,top:window.pageYOffset});function lp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;e=ip(a,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ys(t,e){return(history.state?history.state.position-e:-1)+t}const hi=new Map;function sp(t,e){hi.set(t,e)}function op(t){const e=hi.get(t);return hi.delete(t),e}let cp=()=>location.protocol+"//"+location.host;function Zc(t,e){const{pathname:n,search:r,hash:a}=e,i=t.indexOf("#");if(i>-1){let s=a.includes(t.slice(i))?t.slice(i).length:1,o=a.slice(s);return o[0]!=="/"&&(o="/"+o),vs(o,"")}return vs(n,t)+r+a}function dp(t,e,n,r){let a=[],i=[],l=null;const s=({state:p})=>{const I=Zc(t,location),E=n.value,S=e.value;let w=0;if(p){if(n.value=I,e.value=p,l&&l===E){l=null;return}w=S?p.position-S.position:0}else r(I);a.forEach(A=>{A(n.value,E,{delta:w,type:dr.pop,direction:w?w>0?nr.forward:nr.back:nr.unknown})})};function o(){l=n.value}function c(p){a.push(p);const I=()=>{const E=a.indexOf(p);E>-1&&a.splice(E,1)};return i.push(I),I}function u(){const{history:p}=window;!p.state||p.replaceState(pt({},p.state,{scroll:Ea()}),"")}function g(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:o,listen:c,destroy:g}}function Is(t,e,n,r=!1,a=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:a?Ea():null}}function up(t){const{history:e,location:n}=window,r={value:Zc(t,n)},a={value:e.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(o,c,u){const g=t.indexOf("#"),p=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+o:cp()+t+o;try{e[u?"replaceState":"pushState"](c,"",p),a.value=c}catch(I){console.error(I),n[u?"replace":"assign"](p)}}function l(o,c){const u=pt({},e.state,Is(a.value.back,o,a.value.forward,!0),c,{position:a.value.position});i(o,u,!0),r.value=o}function s(o,c){const u=pt({},a.value,e.state,{forward:o,scroll:Ea()});i(u.current,u,!0);const g=pt({},Is(r.value,o,null),{position:u.position+1},c);i(o,g,!1),r.value=o}return{location:r,state:a,push:s,replace:l}}function gp(t){t=np(t);const e=up(t),n=dp(t,e.state,e.location,e.replace);function r(i,l=!0){l||n.pauseListeners(),history.go(i)}const a=pt({location:"",base:t,go:r,createHref:ap.bind(null,t)},e,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>e.state.value}),a}function fp(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),gp(t)}function pp(t){return typeof t=="string"||t&&typeof t=="object"}function Xc(t){return typeof t=="string"||typeof t=="symbol"}const Ve={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_c=Symbol("");var ws;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ws||(ws={}));function Rn(t,e){return pt(new Error,{type:t,[_c]:!0},e)}function be(t,e){return t instanceof Error&&_c in t&&(e==null||!!(t.type&e))}const Cs="[^/]+?",Ap={sensitive:!1,strict:!1,start:!0,end:!0},mp=/[.+*?^${}()[\]/\\]/g;function hp(t,e){const n=pt({},Ap,e),r=[];let a=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let g=0;g<c.length;g++){const p=c[g];let I=40+(n.sensitive?.25:0);if(p.type===0)g||(a+="/"),a+=p.value.replace(mp,"\\$&"),I+=40;else if(p.type===1){const{value:E,repeatable:S,optional:w,regexp:A}=p;i.push({name:E,repeatable:S,optional:w});const v=A||Cs;if(v!==Cs){I+=10;try{new RegExp(`(${v})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${E}" (${v}): `+y.message)}}let k=S?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;g||(k=w&&c.length<2?`(?:/${k})`:"/"+k),w&&(k+="?"),a+=k,I+=20,w&&(I+=-8),S&&(I+=-20),v===".*"&&(I+=-50)}u.push(I)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const l=new RegExp(a,n.sensitive?"":"i");function s(c){const u=c.match(l),g={};if(!u)return null;for(let p=1;p<u.length;p++){const I=u[p]||"",E=i[p-1];g[E.name]=I&&E.repeatable?I.split("/"):I}return g}function o(c){let u="",g=!1;for(const p of t){(!g||!u.endsWith("/"))&&(u+="/"),g=!1;for(const I of p)if(I.type===0)u+=I.value;else if(I.type===1){const{value:E,repeatable:S,optional:w}=I,A=E in c?c[E]:"";if(oe(A)&&!S)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const v=oe(A)?A.join("/"):A;if(!v)if(w)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):g=!0);else throw new Error(`Missing required param "${E}"`);u+=v}}return u||"/"}return{re:l,score:r,keys:i,parse:s,stringify:o}}function vp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function bp(t,e){let n=0;const r=t.score,a=e.score;for(;n<r.length&&n<a.length;){const i=vp(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Es(r))return 1;if(Es(a))return-1}return a.length-r.length}function Es(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yp={type:0,value:""},Ip=/[a-zA-Z0-9_]/;function wp(t){if(!t)return[[]];if(t==="/")return[[yp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${c}": ${I}`)}let n=0,r=n;const a=[];let i;function l(){i&&a.push(i),i=[]}let s=0,o,c="",u="";function g(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=o}for(;s<t.length;){if(o=t[s++],o==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:o==="/"?(c&&g(),l()):o===":"?(g(),n=1):p();break;case 4:p(),n=r;break;case 1:o==="("?n=2:Ip.test(o)?p():(g(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&s--);break;case 2:o===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+o:n=3:u+=o;break;case 3:g(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&s--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),g(),l(),a}function Cp(t,e,n){const r=hp(wp(t.path),n),a=pt(r,{record:t,parent:e,children:[],alias:[]});return e&&!a.record.aliasOf==!e.record.aliasOf&&e.children.push(a),a}function Ep(t,e){const n=[],r=new Map;e=Bs({strict:!1,end:!0,sensitive:!1},e);function a(u){return r.get(u)}function i(u,g,p){const I=!p,E=Sp(u);E.aliasOf=p&&p.record;const S=Bs(e,u),w=[E];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of k)w.push(pt({},E,{components:p?p.record.components:E.components,path:y,aliasOf:p?p.record:E}))}let A,v;for(const k of w){const{path:y}=k;if(g&&y[0]!=="/"){const x=g.record.path,P=x[x.length-1]==="/"?"":"/";k.path=g.record.path+(y&&P+y)}if(A=Cp(k,g,S),p?p.alias.push(A):(v=v||A,v!==A&&v.alias.push(A),I&&u.name&&!ks(A)&&l(u.name)),E.children){const x=E.children;for(let P=0;P<x.length;P++)i(x[P],A,p&&p.children[P])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&o(A)}return v?()=>{l(v)}:er}function l(u){if(Xc(u)){const g=r.get(u);g&&(r.delete(u),n.splice(n.indexOf(g),1),g.children.forEach(l),g.alias.forEach(l))}else{const g=n.indexOf(u);g>-1&&(n.splice(g,1),u.record.name&&r.delete(u.record.name),u.children.forEach(l),u.alias.forEach(l))}}function s(){return n}function o(u){let g=0;for(;g<n.length&&bp(u,n[g])>=0&&(u.record.path!==n[g].record.path||!$c(u,n[g]));)g++;n.splice(g,0,u),u.record.name&&!ks(u)&&r.set(u.record.name,u)}function c(u,g){let p,I={},E,S;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Rn(1,{location:u});S=p.record.name,I=pt(Ss(g.params,p.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&Ss(u.params,p.keys.map(v=>v.name))),E=p.stringify(I)}else if("path"in u)E=u.path,p=n.find(v=>v.re.test(E)),p&&(I=p.parse(E),S=p.record.name);else{if(p=g.name?r.get(g.name):n.find(v=>v.re.test(g.path)),!p)throw Rn(1,{location:u,currentLocation:g});S=p.record.name,I=pt({},g.params,u.params),E=p.stringify(I)}const w=[];let A=p;for(;A;)w.unshift(A.record),A=A.parent;return{name:S,path:E,params:I,matched:w,meta:Bp(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:l,getRoutes:s,getRecordMatcher:a}}function Ss(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:kp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function kp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ks(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Bp(t){return t.reduce((e,n)=>pt(e,n.meta),{})}function Bs(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $c(t,e){return e.children.some(n=>n===t||$c(t,n))}const td=/#/g,Op=/&/g,Pp=/\//g,xp=/=/g,Qp=/\?/g,ed=/\+/g,Np=/%5B/g,Vp=/%5D/g,nd=/%5E/g,Rp=/%60/g,rd=/%7B/g,qp=/%7C/g,ad=/%7D/g,Mp=/%20/g;function hl(t){return encodeURI(""+t).replace(qp,"|").replace(Np,"[").replace(Vp,"]")}function jp(t){return hl(t).replace(rd,"{").replace(ad,"}").replace(nd,"^")}function vi(t){return hl(t).replace(ed,"%2B").replace(Mp,"+").replace(td,"%23").replace(Op,"%26").replace(Rp,"`").replace(rd,"{").replace(ad,"}").replace(nd,"^")}function Hp(t){return vi(t).replace(xp,"%3D")}function Lp(t){return hl(t).replace(td,"%23").replace(Qp,"%3F")}function Fp(t){return t==null?"":Lp(t).replace(Pp,"%2F")}function ra(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Dp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(ed," "),l=i.indexOf("="),s=ra(l<0?i:i.slice(0,l)),o=l<0?null:ra(i.slice(l+1));if(s in e){let c=e[s];oe(c)||(c=e[s]=[c]),c.push(o)}else e[s]=o}return e}function Os(t){let e="";for(let n in t){const r=t[n];if(n=Hp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(oe(r)?r.map(i=>i&&vi(i)):[r&&vi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Up(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=oe(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return e}const Tp=Symbol(""),Ps=Symbol(""),Sa=Symbol(""),id=Symbol(""),bi=Symbol("");function Gn(){let t=[];function e(r){return t.push(r),()=>{const a=t.indexOf(r);a>-1&&t.splice(a,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Le(t,e,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((l,s)=>{const o=g=>{g===!1?s(Rn(4,{from:n,to:e})):g instanceof Error?s(g):pp(g)?s(Rn(2,{from:e,to:g})):(i&&r.enterCallbacks[a]===i&&typeof g=="function"&&i.push(g),l())},c=t.call(r&&r.instances[a],e,n,o);let u=Promise.resolve(c);t.length<3&&(u=u.then(o)),u.catch(g=>s(g))})}function Da(t,e,n,r){const a=[];for(const i of t)for(const l in i.components){let s=i.components[l];if(!(e!=="beforeRouteEnter"&&!i.instances[l]))if(Yp(s)){const c=(s.__vccOpts||s)[e];c&&a.push(Le(c,n,r,i,l))}else{let o=s();a.push(()=>o.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const u=Kf(c)?c.default:c;i.components[l]=u;const p=(u.__vccOpts||u)[e];return p&&Le(p,n,r,i,l)()}))}}return a}function Yp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xs(t){const e=se(Sa),n=se(id),r=Z(()=>e.resolve(At(t.to))),a=Z(()=>{const{matched:o}=r.value,{length:c}=o,u=o[c-1],g=n.matched;if(!u||!g.length)return-1;const p=g.findIndex(Vn.bind(null,u));if(p>-1)return p;const I=Qs(o[c-2]);return c>1&&Qs(u)===I&&g[g.length-1].path!==I?g.findIndex(Vn.bind(null,o[c-2])):p}),i=Z(()=>a.value>-1&&Jp(n.params,r.value.params)),l=Z(()=>a.value>-1&&a.value===n.matched.length-1&&Kc(n.params,r.value.params));function s(o={}){return zp(o)?e[At(t.replace)?"replace":"push"](At(t.to)).catch(er):Promise.resolve()}return{route:r,href:Z(()=>r.value.href),isActive:i,isExactActive:l,navigate:s}}const Gp=vr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xs,setup(t,{slots:e}){const n=gn(xs(t)),{options:r}=se(Sa),a=Z(()=>({[Ns(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ns(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:me("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Wp=Gp;function zp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jp(t,e){for(const n in e){const r=e[n],a=t[n];if(typeof r=="string"){if(r!==a)return!1}else if(!oe(a)||a.length!==r.length||r.some((i,l)=>i!==a[l]))return!1}return!0}function Qs(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ns=(t,e,n)=>t!=null?t:e!=null?e:n,Kp=vr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=se(bi),a=Z(()=>t.route||r.value),i=se(Ps,0),l=Z(()=>{let c=At(i);const{matched:u}=a.value;let g;for(;(g=u[c])&&!g.components;)c++;return c}),s=Z(()=>a.value.matched[l.value]);Yr(Ps,Z(()=>l.value+1)),Yr(Tp,s),Yr(bi,a);const o=gt();return Te(()=>[o.value,s.value,t.name],([c,u,g],[p,I,E])=>{u&&(u.instances[g]=c,I&&I!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=I.leaveGuards),u.updateGuards.size||(u.updateGuards=I.updateGuards))),c&&u&&(!I||!Vn(u,I)||!p)&&(u.enterCallbacks[g]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=a.value,u=t.name,g=s.value,p=g&&g.components[u];if(!p)return Vs(n.default,{Component:p,route:c});const I=g.props[u],E=I?I===!0?c.params:typeof I=="function"?I(c):I:null,w=me(p,pt({},E,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(g.instances[u]=null)},ref:o}));return Vs(n.default,{Component:w,route:c})||w}}});function Vs(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Zp=Kp;function Xp(t){const e=Ep(t.routes,t),n=t.parseQuery||Dp,r=t.stringifyQuery||Os,a=t.history,i=Gn(),l=Gn(),s=Gn(),o=Ju(Ve);let c=Ve;yn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=La.bind(null,Q=>""+Q),g=La.bind(null,Fp),p=La.bind(null,ra);function I(Q,F){let M,z;return Xc(Q)?(M=e.getRecordMatcher(Q),z=F):z=Q,e.addRoute(z,M)}function E(Q){const F=e.getRecordMatcher(Q);F&&e.removeRoute(F)}function S(){return e.getRoutes().map(Q=>Q.record)}function w(Q){return!!e.getRecordMatcher(Q)}function A(Q,F){if(F=pt({},F||o.value),typeof Q=="string"){const m=Fa(n,Q,F.path),C=e.resolve({path:m.path},F),B=a.createHref(m.fullPath);return pt(m,C,{params:p(C.params),hash:ra(m.hash),redirectedFrom:void 0,href:B})}let M;if("path"in Q)M=pt({},Q,{path:Fa(n,Q.path,F.path).path});else{const m=pt({},Q.params);for(const C in m)m[C]==null&&delete m[C];M=pt({},Q,{params:g(m)}),F.params=g(F.params)}const z=e.resolve(M,F),h=Q.hash||"";z.params=u(p(z.params));const d=_f(r,pt({},Q,{hash:jp(h),path:z.path})),f=a.createHref(d);return pt({fullPath:d,hash:h,query:r===Os?Up(Q.query):Q.query||{}},z,{redirectedFrom:void 0,href:f})}function v(Q){return typeof Q=="string"?Fa(n,Q,o.value.path):pt({},Q)}function k(Q,F){if(c!==Q)return Rn(8,{from:F,to:Q})}function y(Q){return N(Q)}function x(Q){return y(pt(v(Q),{replace:!0}))}function P(Q){const F=Q.matched[Q.matched.length-1];if(F&&F.redirect){const{redirect:M}=F;let z=typeof M=="function"?M(Q):M;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=v(z):{path:z},z.params={}),pt({query:Q.query,hash:Q.hash,params:"path"in z?{}:Q.params},z)}}function N(Q,F){const M=c=A(Q),z=o.value,h=Q.state,d=Q.force,f=Q.replace===!0,m=P(M);if(m)return N(pt(v(m),{state:typeof m=="object"?pt({},h,m.state):h,force:d,replace:f}),F||M);const C=M;C.redirectedFrom=F;let B;return!d&&$f(r,z,M)&&(B=Rn(16,{to:C,from:z}),Mt(z,z,!0,!1)),(B?Promise.resolve(B):nt(C,z)).catch(V=>be(V)?be(V,2)?V:Tt(V):rt(V,C,z)).then(V=>{if(V){if(be(V,2))return N(pt({replace:f},v(V.to),{state:typeof V.to=="object"?pt({},h,V.to.state):h,force:d}),F||C)}else V=X(C,z,!0,f,h);return J(C,z,V),V})}function L(Q,F){const M=k(Q,F);return M?Promise.reject(M):Promise.resolve()}function G(Q){const F=Kt.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(Q):Q()}function nt(Q,F){let M;const[z,h,d]=_p(Q,F);M=Da(z.reverse(),"beforeRouteLeave",Q,F);for(const m of z)m.leaveGuards.forEach(C=>{M.push(Le(C,Q,F))});const f=L.bind(null,Q,F);return M.push(f),Et(M).then(()=>{M=[];for(const m of i.list())M.push(Le(m,Q,F));return M.push(f),Et(M)}).then(()=>{M=Da(h,"beforeRouteUpdate",Q,F);for(const m of h)m.updateGuards.forEach(C=>{M.push(Le(C,Q,F))});return M.push(f),Et(M)}).then(()=>{M=[];for(const m of Q.matched)if(m.beforeEnter&&!F.matched.includes(m))if(oe(m.beforeEnter))for(const C of m.beforeEnter)M.push(Le(C,Q,F));else M.push(Le(m.beforeEnter,Q,F));return M.push(f),Et(M)}).then(()=>(Q.matched.forEach(m=>m.enterCallbacks={}),M=Da(d,"beforeRouteEnter",Q,F),M.push(f),Et(M))).then(()=>{M=[];for(const m of l.list())M.push(Le(m,Q,F));return M.push(f),Et(M)}).catch(m=>be(m,8)?m:Promise.reject(m))}function J(Q,F,M){for(const z of s.list())G(()=>z(Q,F,M))}function X(Q,F,M,z,h){const d=k(Q,F);if(d)return d;const f=F===Ve,m=yn?history.state:{};M&&(z||f?a.replace(Q.fullPath,pt({scroll:f&&m&&m.scroll},h)):a.push(Q.fullPath,h)),o.value=Q,Mt(Q,F,M,f),Tt()}let st;function _(){st||(st=a.listen((Q,F,M)=>{if(!Qe.listening)return;const z=A(Q),h=P(z);if(h){N(pt(h,{replace:!0}),z).catch(er);return}c=z;const d=o.value;yn&&sp(ys(d.fullPath,M.delta),Ea()),nt(z,d).catch(f=>be(f,12)?f:be(f,2)?(N(f.to,z).then(m=>{be(m,20)&&!M.delta&&M.type===dr.pop&&a.go(-1,!1)}).catch(er),Promise.reject()):(M.delta&&a.go(-M.delta,!1),rt(f,z,d))).then(f=>{f=f||X(z,d,!1),f&&(M.delta&&!be(f,8)?a.go(-M.delta,!1):M.type===dr.pop&&be(f,20)&&a.go(-1,!1)),J(z,d,f)}).catch(er)}))}let ut=Gn(),lt=Gn(),it;function rt(Q,F,M){Tt(Q);const z=lt.list();return z.length?z.forEach(h=>h(Q,F,M)):console.error(Q),Promise.reject(Q)}function Dt(){return it&&o.value!==Ve?Promise.resolve():new Promise((Q,F)=>{ut.add([Q,F])})}function Tt(Q){return it||(it=!Q,_(),ut.list().forEach(([F,M])=>Q?M(Q):F()),ut.reset()),Q}function Mt(Q,F,M,z){const{scrollBehavior:h}=t;if(!yn||!h)return Promise.resolve();const d=!M&&op(ys(Q.fullPath,0))||(z||!M)&&history.state&&history.state.scroll||null;return gl().then(()=>h(Q,F,d)).then(f=>f&&lp(f)).catch(f=>rt(f,Q,F))}const Ot=Q=>a.go(Q);let Jt;const Kt=new Set,Qe={currentRoute:o,listening:!0,addRoute:I,removeRoute:E,hasRoute:w,getRoutes:S,resolve:A,options:t,push:y,replace:x,go:Ot,back:()=>Ot(-1),forward:()=>Ot(1),beforeEach:i.add,beforeResolve:l.add,afterEach:s.add,onError:lt.add,isReady:Dt,install(Q){const F=this;Q.component("RouterLink",Wp),Q.component("RouterView",Zp),Q.config.globalProperties.$router=F,Object.defineProperty(Q.config.globalProperties,"$route",{enumerable:!0,get:()=>At(o)}),yn&&!Jt&&o.value===Ve&&(Jt=!0,y(a.location).catch(h=>{}));const M={};for(const h in Ve)M[h]=Z(()=>o.value[h]);Q.provide(Sa,F),Q.provide(id,gn(M)),Q.provide(bi,o);const z=Q.unmount;Kt.add(Q),Q.unmount=function(){Kt.delete(Q),Kt.size<1&&(c=Ve,st&&st(),st=null,o.value=Ve,Jt=!1,it=!1),z()}}};function Et(Q){return Q.reduce((F,M)=>F.then(()=>G(M)),Promise.resolve())}return Qe}function _p(t,e){const n=[],r=[],a=[],i=Math.max(e.matched.length,t.matched.length);for(let l=0;l<i;l++){const s=e.matched[l];s&&(t.matched.find(c=>Vn(c,s))?r.push(s):n.push(s));const o=t.matched[l];o&&(e.matched.find(c=>Vn(c,o))||a.push(o))}return[n,r,a]}function ld(){return se(Sa)}/*!
  * @intlify/shared v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const $p=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Pe=t=>$p?Symbol(t):t,tA=(t,e,n)=>eA({l:t,k:e,s:n}),eA=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Vt=t=>typeof t=="number"&&isFinite(t),nA=t=>vl(t)==="[object Date]",qn=t=>vl(t)==="[object RegExp]",ka=t=>$(t)&&Object.keys(t).length===0;function rA(t,e){typeof console!="undefined"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const qt=Object.assign;let Rs;const In=()=>Rs||(Rs=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function qs(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const aA=Object.prototype.hasOwnProperty;function sd(t,e){return aA.call(t,e)}const Bt=Array.isArray,Rt=t=>typeof t=="function",Y=t=>typeof t=="string",mt=t=>typeof t=="boolean",Lt=t=>t!==null&&typeof t=="object",od=Object.prototype.toString,vl=t=>od.call(t),$=t=>vl(t)==="[object Object]",iA=t=>t==null?"":Bt(t)||$(t)&&t.toString===od?JSON.stringify(t,null,2):String(t);function bl(){const t=new Map;return{events:t,on(n,r){const a=t.get(n);a&&a.push(r)||t.set(n,[r])},off(n,r){const a=t.get(n);a&&a.splice(a.indexOf(r)>>>0,1)},emit(n,r){(t.get(n)||[]).slice().map(a=>a(r)),(t.get("*")||[]).slice().map(a=>a(n,r))}}}/*!
  * @intlify/message-resolver v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const lA=Object.prototype.hasOwnProperty;function sA(t,e){return lA.call(t,e)}const Wr=t=>t!==null&&typeof t=="object",Ke=[];Ke[0]={w:[0],i:[3,0],["["]:[4],o:[7]};Ke[1]={w:[1],["."]:[2],["["]:[4],o:[7]};Ke[2]={w:[2],i:[3,0],[0]:[3,0]};Ke[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};Ke[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};Ke[5]={["'"]:[4,0],o:8,l:[5,0]};Ke[6]={['"']:[4,0],o:8,l:[6,0]};const oA=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function cA(t){return oA.test(t)}function dA(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function uA(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function gA(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:cA(e)?dA(e):"*"+e}function fA(t){const e=[];let n=-1,r=0,a=0,i,l,s,o,c,u,g;const p=[];p[0]=()=>{l===void 0?l=s:l+=s},p[1]=()=>{l!==void 0&&(e.push(l),l=void 0)},p[2]=()=>{p[0](),a++},p[3]=()=>{if(a>0)a--,r=4,p[0]();else{if(a=0,l===void 0||(l=gA(l),l===!1))return!1;p[1]()}};function I(){const E=t[n+1];if(r===5&&E==="'"||r===6&&E==='"')return n++,s="\\"+E,p[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&I())){if(o=uA(i),g=Ke[r],c=g[o]||g.l||8,c===8||(r=c[0],c[1]!==void 0&&(u=p[c[1]],u&&(s=i,u()===!1))))return;if(r===7)return e}}const Ms=new Map;function aa(t,e){if(!Wr(t))return null;let n=Ms.get(e);if(n||(n=fA(e),n&&Ms.set(e,n)),!n)return null;const r=n.length;let a=t,i=0;for(;i<r;){const l=a[n[i]];if(l===void 0)return null;a=l,i++}return a}function yi(t){if(!Wr(t))return t;for(const e in t)if(!!sA(t,e))if(!e.includes("."))Wr(t[e])&&yi(t[e]);else{const n=e.split("."),r=n.length-1;let a=t;for(let i=0;i<r;i++)n[i]in a||(a[n[i]]={}),a=a[n[i]];a[n[r]]=t[e],delete t[e],Wr(a[n[r]])&&yi(a[n[r]])}return t}/*!
  * @intlify/runtime v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const pA=t=>t,AA=t=>"",mA="text",hA=t=>t.length===0?"":t.join(""),vA=iA;function js(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function bA(t){const e=Vt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Vt(t.named.count)||Vt(t.named.n))?Vt(t.named.count)?t.named.count:Vt(t.named.n)?t.named.n:e:e}function yA(t,e){e.count||(e.count=t),e.n||(e.n=t)}function IA(t={}){const e=t.locale,n=bA(t),r=Lt(t.pluralRules)&&Y(e)&&Rt(t.pluralRules[e])?t.pluralRules[e]:js,a=Lt(t.pluralRules)&&Y(e)&&Rt(t.pluralRules[e])?js:void 0,i=w=>w[r(n,w.length,a)],l=t.list||[],s=w=>l[w],o=t.named||{};Vt(t.pluralIndex)&&yA(n,o);const c=w=>o[w];function u(w){const A=Rt(t.messages)?t.messages(w):Lt(t.messages)?t.messages[w]:!1;return A||(t.parent?t.parent.message(w):AA)}const g=w=>t.modifiers?t.modifiers[w]:pA,p=$(t.processor)&&Rt(t.processor.normalize)?t.processor.normalize:hA,I=$(t.processor)&&Rt(t.processor.interpolate)?t.processor.interpolate:vA,E=$(t.processor)&&Y(t.processor.type)?t.processor.type:mA,S={list:s,named:c,plural:i,linked:(w,A)=>{const v=u(w)(S);return Y(A)?g(A)(v):v},message:u,type:E,interpolate:I,normalize:p};return S}/*!
  * @intlify/message-compiler v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */function Ba(t,e,n={}){const{domain:r,messages:a,args:i}=n,l=t,s=new SyntaxError(String(l));return s.code=t,e&&(s.location=e),s.domain=r,s}function wA(t){throw t}function CA(t,e,n){return{line:t,column:e,offset:n}}function Ii(t,e,n){const r={start:t,end:e};return n!=null&&(r.source=n),r}const ye=" ",EA="\r",Gt=`
`,SA=String.fromCharCode(8232),kA=String.fromCharCode(8233);function BA(t){const e=t;let n=0,r=1,a=1,i=0;const l=N=>e[N]===EA&&e[N+1]===Gt,s=N=>e[N]===Gt,o=N=>e[N]===kA,c=N=>e[N]===SA,u=N=>l(N)||s(N)||o(N)||c(N),g=()=>n,p=()=>r,I=()=>a,E=()=>i,S=N=>l(N)||o(N)||c(N)?Gt:e[N],w=()=>S(n),A=()=>S(n+i);function v(){return i=0,u(n)&&(r++,a=0),l(n)&&n++,n++,a++,e[n]}function k(){return l(n+i)&&i++,i++,e[n+i]}function y(){n=0,r=1,a=1,i=0}function x(N=0){i=N}function P(){const N=n+i;for(;N!==n;)v();i=0}return{index:g,line:p,column:I,peekOffset:E,charAt:S,currentChar:w,currentPeek:A,next:v,peek:k,reset:y,resetPeek:x,skipToPeek:P}}const Re=void 0,Hs="'",OA="tokenizer";function PA(t,e={}){const n=e.location!==!1,r=BA(t),a=()=>r.index(),i=()=>CA(r.line(),r.column(),r.index()),l=i(),s=a(),o={currentType:14,offset:s,startLoc:l,endLoc:l,lastType:14,lastOffset:s,lastStartLoc:l,lastEndLoc:l,braceNest:0,inLinked:!1,text:""},c=()=>o,{onError:u}=e;function g(h,d,f,...m){const C=c();if(d.column+=f,d.offset+=f,u){const B=Ii(C.startLoc,d),V=Ba(h,B,{domain:OA,args:m});u(V)}}function p(h,d,f){h.endLoc=i(),h.currentType=d;const m={type:d};return n&&(m.loc=Ii(h.startLoc,h.endLoc)),f!=null&&(m.value=f),m}const I=h=>p(h,14);function E(h,d){return h.currentChar()===d?(h.next(),d):(g(0,i(),0,d),"")}function S(h){let d="";for(;h.currentPeek()===ye||h.currentPeek()===Gt;)d+=h.currentPeek(),h.peek();return d}function w(h){const d=S(h);return h.skipToPeek(),d}function A(h){if(h===Re)return!1;const d=h.charCodeAt(0);return d>=97&&d<=122||d>=65&&d<=90||d===95}function v(h){if(h===Re)return!1;const d=h.charCodeAt(0);return d>=48&&d<=57}function k(h,d){const{currentType:f}=d;if(f!==2)return!1;S(h);const m=A(h.currentPeek());return h.resetPeek(),m}function y(h,d){const{currentType:f}=d;if(f!==2)return!1;S(h);const m=h.currentPeek()==="-"?h.peek():h.currentPeek(),C=v(m);return h.resetPeek(),C}function x(h,d){const{currentType:f}=d;if(f!==2)return!1;S(h);const m=h.currentPeek()===Hs;return h.resetPeek(),m}function P(h,d){const{currentType:f}=d;if(f!==8)return!1;S(h);const m=h.currentPeek()===".";return h.resetPeek(),m}function N(h,d){const{currentType:f}=d;if(f!==9)return!1;S(h);const m=A(h.currentPeek());return h.resetPeek(),m}function L(h,d){const{currentType:f}=d;if(!(f===8||f===12))return!1;S(h);const m=h.currentPeek()===":";return h.resetPeek(),m}function G(h,d){const{currentType:f}=d;if(f!==10)return!1;const m=()=>{const B=h.currentPeek();return B==="{"?A(h.peek()):B==="@"||B==="%"||B==="|"||B===":"||B==="."||B===ye||!B?!1:B===Gt?(h.peek(),m()):A(B)},C=m();return h.resetPeek(),C}function nt(h){S(h);const d=h.currentPeek()==="|";return h.resetPeek(),d}function J(h,d=!0){const f=(C=!1,B="",V=!1)=>{const H=h.currentPeek();return H==="{"?B==="%"?!1:C:H==="@"||!H?B==="%"?!0:C:H==="%"?(h.peek(),f(C,"%",!0)):H==="|"?B==="%"||V?!0:!(B===ye||B===Gt):H===ye?(h.peek(),f(!0,ye,V)):H===Gt?(h.peek(),f(!0,Gt,V)):!0},m=f();return d&&h.resetPeek(),m}function X(h,d){const f=h.currentChar();return f===Re?Re:d(f)?(h.next(),f):null}function st(h){return X(h,f=>{const m=f.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36})}function _(h){return X(h,f=>{const m=f.charCodeAt(0);return m>=48&&m<=57})}function ut(h){return X(h,f=>{const m=f.charCodeAt(0);return m>=48&&m<=57||m>=65&&m<=70||m>=97&&m<=102})}function lt(h){let d="",f="";for(;d=_(h);)f+=d;return f}function it(h){let d="";for(;;){const f=h.currentChar();if(f==="{"||f==="}"||f==="@"||f==="|"||!f)break;if(f==="%")if(J(h))d+=f,h.next();else break;else if(f===ye||f===Gt)if(J(h))d+=f,h.next();else{if(nt(h))break;d+=f,h.next()}else d+=f,h.next()}return d}function rt(h){w(h);let d="",f="";for(;d=st(h);)f+=d;return h.currentChar()===Re&&g(6,i(),0),f}function Dt(h){w(h);let d="";return h.currentChar()==="-"?(h.next(),d+=`-${lt(h)}`):d+=lt(h),h.currentChar()===Re&&g(6,i(),0),d}function Tt(h){w(h),E(h,"'");let d="",f="";const m=B=>B!==Hs&&B!==Gt;for(;d=X(h,m);)d==="\\"?f+=Mt(h):f+=d;const C=h.currentChar();return C===Gt||C===Re?(g(2,i(),0),C===Gt&&(h.next(),E(h,"'")),f):(E(h,"'"),f)}function Mt(h){const d=h.currentChar();switch(d){case"\\":case"'":return h.next(),`\\${d}`;case"u":return Ot(h,d,4);case"U":return Ot(h,d,6);default:return g(3,i(),0,d),""}}function Ot(h,d,f){E(h,d);let m="";for(let C=0;C<f;C++){const B=ut(h);if(!B){g(4,i(),0,`\\${d}${m}${h.currentChar()}`);break}m+=B}return`\\${d}${m}`}function Jt(h){w(h);let d="",f="";const m=C=>C!=="{"&&C!=="}"&&C!==ye&&C!==Gt;for(;d=X(h,m);)f+=d;return f}function Kt(h){let d="",f="";for(;d=st(h);)f+=d;return f}function Qe(h){const d=(f=!1,m)=>{const C=h.currentChar();return C==="{"||C==="%"||C==="@"||C==="|"||!C||C===ye?m:C===Gt?(m+=C,h.next(),d(f,m)):(m+=C,h.next(),d(!0,m))};return d(!1,"")}function Et(h){w(h);const d=E(h,"|");return w(h),d}function Q(h,d){let f=null;switch(h.currentChar()){case"{":return d.braceNest>=1&&g(8,i(),0),h.next(),f=p(d,2,"{"),w(h),d.braceNest++,f;case"}":return d.braceNest>0&&d.currentType===2&&g(7,i(),0),h.next(),f=p(d,3,"}"),d.braceNest--,d.braceNest>0&&w(h),d.inLinked&&d.braceNest===0&&(d.inLinked=!1),f;case"@":return d.braceNest>0&&g(6,i(),0),f=F(h,d)||I(d),d.braceNest=0,f;default:let C=!0,B=!0,V=!0;if(nt(h))return d.braceNest>0&&g(6,i(),0),f=p(d,1,Et(h)),d.braceNest=0,d.inLinked=!1,f;if(d.braceNest>0&&(d.currentType===5||d.currentType===6||d.currentType===7))return g(6,i(),0),d.braceNest=0,M(h,d);if(C=k(h,d))return f=p(d,5,rt(h)),w(h),f;if(B=y(h,d))return f=p(d,6,Dt(h)),w(h),f;if(V=x(h,d))return f=p(d,7,Tt(h)),w(h),f;if(!C&&!B&&!V)return f=p(d,13,Jt(h)),g(1,i(),0,f.value),w(h),f;break}return f}function F(h,d){const{currentType:f}=d;let m=null;const C=h.currentChar();switch((f===8||f===9||f===12||f===10)&&(C===Gt||C===ye)&&g(9,i(),0),C){case"@":return h.next(),m=p(d,8,"@"),d.inLinked=!0,m;case".":return w(h),h.next(),p(d,9,".");case":":return w(h),h.next(),p(d,10,":");default:return nt(h)?(m=p(d,1,Et(h)),d.braceNest=0,d.inLinked=!1,m):P(h,d)||L(h,d)?(w(h),F(h,d)):N(h,d)?(w(h),p(d,12,Kt(h))):G(h,d)?(w(h),C==="{"?Q(h,d)||m:p(d,11,Qe(h))):(f===8&&g(9,i(),0),d.braceNest=0,d.inLinked=!1,M(h,d))}}function M(h,d){let f={type:14};if(d.braceNest>0)return Q(h,d)||I(d);if(d.inLinked)return F(h,d)||I(d);const m=h.currentChar();switch(m){case"{":return Q(h,d)||I(d);case"}":return g(5,i(),0),h.next(),p(d,3,"}");case"@":return F(h,d)||I(d);default:if(nt(h))return f=p(d,1,Et(h)),d.braceNest=0,d.inLinked=!1,f;if(J(h))return p(d,0,it(h));if(m==="%")return h.next(),p(d,4,"%");break}return f}function z(){const{currentType:h,offset:d,startLoc:f,endLoc:m}=o;return o.lastType=h,o.lastOffset=d,o.lastStartLoc=f,o.lastEndLoc=m,o.offset=a(),o.startLoc=i(),r.currentChar()===Re?p(o,14):M(r,o)}return{nextToken:z,currentOffset:a,currentPosition:i,context:c}}const xA="parser",QA=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function NA(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"\uFFFD"}}}function VA(t={}){const e=t.location!==!1,{onError:n}=t;function r(A,v,k,y,...x){const P=A.currentPosition();if(P.offset+=y,P.column+=y,n){const N=Ii(k,P),L=Ba(v,N,{domain:xA,args:x});n(L)}}function a(A,v,k){const y={type:A,start:v,end:v};return e&&(y.loc={start:k,end:k}),y}function i(A,v,k,y){A.end=v,y&&(A.type=y),e&&A.loc&&(A.loc.end=k)}function l(A,v){const k=A.context(),y=a(3,k.offset,k.startLoc);return y.value=v,i(y,A.currentOffset(),A.currentPosition()),y}function s(A,v){const k=A.context(),{lastOffset:y,lastStartLoc:x}=k,P=a(5,y,x);return P.index=parseInt(v,10),A.nextToken(),i(P,A.currentOffset(),A.currentPosition()),P}function o(A,v){const k=A.context(),{lastOffset:y,lastStartLoc:x}=k,P=a(4,y,x);return P.key=v,A.nextToken(),i(P,A.currentOffset(),A.currentPosition()),P}function c(A,v){const k=A.context(),{lastOffset:y,lastStartLoc:x}=k,P=a(9,y,x);return P.value=v.replace(QA,NA),A.nextToken(),i(P,A.currentOffset(),A.currentPosition()),P}function u(A){const v=A.nextToken(),k=A.context(),{lastOffset:y,lastStartLoc:x}=k,P=a(8,y,x);return v.type!==12?(r(A,11,k.lastStartLoc,0),P.value="",i(P,y,x),{nextConsumeToken:v,node:P}):(v.value==null&&r(A,13,k.lastStartLoc,0,ue(v)),P.value=v.value||"",i(P,A.currentOffset(),A.currentPosition()),{node:P})}function g(A,v){const k=A.context(),y=a(7,k.offset,k.startLoc);return y.value=v,i(y,A.currentOffset(),A.currentPosition()),y}function p(A){const v=A.context(),k=a(6,v.offset,v.startLoc);let y=A.nextToken();if(y.type===9){const x=u(A);k.modifier=x.node,y=x.nextConsumeToken||A.nextToken()}switch(y.type!==10&&r(A,13,v.lastStartLoc,0,ue(y)),y=A.nextToken(),y.type===2&&(y=A.nextToken()),y.type){case 11:y.value==null&&r(A,13,v.lastStartLoc,0,ue(y)),k.key=g(A,y.value||"");break;case 5:y.value==null&&r(A,13,v.lastStartLoc,0,ue(y)),k.key=o(A,y.value||"");break;case 6:y.value==null&&r(A,13,v.lastStartLoc,0,ue(y)),k.key=s(A,y.value||"");break;case 7:y.value==null&&r(A,13,v.lastStartLoc,0,ue(y)),k.key=c(A,y.value||"");break;default:r(A,12,v.lastStartLoc,0);const x=A.context(),P=a(7,x.offset,x.startLoc);return P.value="",i(P,x.offset,x.startLoc),k.key=P,i(k,x.offset,x.startLoc),{nextConsumeToken:y,node:k}}return i(k,A.currentOffset(),A.currentPosition()),{node:k}}function I(A){const v=A.context(),k=v.currentType===1?A.currentOffset():v.offset,y=v.currentType===1?v.endLoc:v.startLoc,x=a(2,k,y);x.items=[];let P=null;do{const G=P||A.nextToken();switch(P=null,G.type){case 0:G.value==null&&r(A,13,v.lastStartLoc,0,ue(G)),x.items.push(l(A,G.value||""));break;case 6:G.value==null&&r(A,13,v.lastStartLoc,0,ue(G)),x.items.push(s(A,G.value||""));break;case 5:G.value==null&&r(A,13,v.lastStartLoc,0,ue(G)),x.items.push(o(A,G.value||""));break;case 7:G.value==null&&r(A,13,v.lastStartLoc,0,ue(G)),x.items.push(c(A,G.value||""));break;case 8:const nt=p(A);x.items.push(nt.node),P=nt.nextConsumeToken||null;break}}while(v.currentType!==14&&v.currentType!==1);const N=v.currentType===1?v.lastOffset:A.currentOffset(),L=v.currentType===1?v.lastEndLoc:A.currentPosition();return i(x,N,L),x}function E(A,v,k,y){const x=A.context();let P=y.items.length===0;const N=a(1,v,k);N.cases=[],N.cases.push(y);do{const L=I(A);P||(P=L.items.length===0),N.cases.push(L)}while(x.currentType!==14);return P&&r(A,10,k,0),i(N,A.currentOffset(),A.currentPosition()),N}function S(A){const v=A.context(),{offset:k,startLoc:y}=v,x=I(A);return v.currentType===14?x:E(A,k,y,x)}function w(A){const v=PA(A,qt({},t)),k=v.context(),y=a(0,k.offset,k.startLoc);return e&&y.loc&&(y.loc.source=A),y.body=S(v),k.currentType!==14&&r(v,13,k.lastStartLoc,0,A[k.offset]||""),i(y,v.currentOffset(),v.currentPosition()),y}return{parse:w}}function ue(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"\u2026":e}function RA(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Ls(t,e){for(let n=0;n<t.length;n++)yl(t[n],e)}function yl(t,e){switch(t.type){case 1:Ls(t.cases,e),e.helper("plural");break;case 2:Ls(t.items,e);break;case 6:yl(t.key,e),e.helper("linked");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function qA(t,e={}){const n=RA(t);n.helper("normalize"),t.body&&yl(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function MA(t,e){const{sourceMap:n,filename:r,breakLineCode:a,needIndent:i}=e,l={source:t.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:a,needIndent:i,indentLevel:0},s=()=>l;function o(S,w){l.code+=S}function c(S,w=!0){const A=w?a:"";o(i?A+"  ".repeat(S):A)}function u(S=!0){const w=++l.indentLevel;S&&c(w)}function g(S=!0){const w=--l.indentLevel;S&&c(w)}function p(){c(l.indentLevel)}return{context:s,push:o,indent:u,deindent:g,newline:p,helper:S=>`_${S}`,needIndent:()=>l.needIndent}}function jA(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Mn(t,e.key),e.modifier&&(t.push(", "),Mn(t,e.modifier)),t.push(")")}function HA(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const a=e.items.length;for(let i=0;i<a&&(Mn(t,e.items[i]),i!==a-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function LA(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const a=e.cases.length;for(let i=0;i<a&&(Mn(t,e.cases[i]),i!==a-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function FA(t,e){e.body?Mn(t,e.body):t.push("null")}function Mn(t,e){const{helper:n}=t;switch(e.type){case 0:FA(t,e);break;case 1:LA(t,e);break;case 2:HA(t,e);break;case 6:jA(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const DA=(t,e={})=>{const n=Y(e.mode)?e.mode:"normal",r=Y(e.filename)?e.filename:"message.intl",a=!!e.sourceMap,i=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,l=e.needIndent?e.needIndent:n!=="arrow",s=t.helpers||[],o=MA(t,{mode:n,filename:r,sourceMap:a,breakLineCode:i,needIndent:l});o.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(l),s.length>0&&(o.push(`const { ${s.map(g=>`${g}: _${g}`).join(", ")} } = ctx`),o.newline()),o.push("return "),Mn(o,t),o.deindent(l),o.push("}");const{code:c,map:u}=o.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function UA(t,e={}){const n=qt({},e),a=VA(n).parse(t);return qA(a,n),DA(a,n)}/*!
  * @intlify/devtools-if v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const cd={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * @intlify/core-base v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */let ur=null;function TA(t){ur=t}function YA(t,e,n){ur&&ur.emit(cd.I18nInit,{timestamp:Date.now(),i18n:t,version:e,meta:n})}const GA=WA(cd.FunctionTranslate);function WA(t){return e=>ur&&ur.emit(t,e)}const zA="9.1.9",Oa=-1,Fs="";function JA(){return{upper:t=>Y(t)?t.toUpperCase():t,lower:t=>Y(t)?t.toLowerCase():t,capitalize:t=>Y(t)?`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`:t}}let dd;function KA(t){dd=t}let ud=null;const Ds=t=>{ud=t},ZA=()=>ud;let Us=0;function XA(t={}){const e=Y(t.version)?t.version:zA,n=Y(t.locale)?t.locale:"en-US",r=Bt(t.fallbackLocale)||$(t.fallbackLocale)||Y(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:n,a=$(t.messages)?t.messages:{[n]:{}},i=$(t.datetimeFormats)?t.datetimeFormats:{[n]:{}},l=$(t.numberFormats)?t.numberFormats:{[n]:{}},s=qt({},t.modifiers||{},JA()),o=t.pluralRules||{},c=Rt(t.missing)?t.missing:null,u=mt(t.missingWarn)||qn(t.missingWarn)?t.missingWarn:!0,g=mt(t.fallbackWarn)||qn(t.fallbackWarn)?t.fallbackWarn:!0,p=!!t.fallbackFormat,I=!!t.unresolving,E=Rt(t.postTranslation)?t.postTranslation:null,S=$(t.processor)?t.processor:null,w=mt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,A=!!t.escapeParameter,v=Rt(t.messageCompiler)?t.messageCompiler:dd,k=Rt(t.onWarn)?t.onWarn:rA,y=t,x=Lt(y.__datetimeFormatters)?y.__datetimeFormatters:new Map,P=Lt(y.__numberFormatters)?y.__numberFormatters:new Map,N=Lt(y.__meta)?y.__meta:{};Us++;const L={version:e,cid:Us,locale:n,fallbackLocale:r,messages:a,datetimeFormats:i,numberFormats:l,modifiers:s,pluralRules:o,missing:c,missingWarn:u,fallbackWarn:g,fallbackFormat:p,unresolving:I,postTranslation:E,processor:S,warnHtmlMessage:w,escapeParameter:A,messageCompiler:v,onWarn:k,__datetimeFormatters:x,__numberFormatters:P,__meta:N};return __INTLIFY_PROD_DEVTOOLS__&&YA(L,e,N),L}function Il(t,e,n,r,a){const{missing:i,onWarn:l}=t;if(i!==null){const s=i(t,n,e,a);return Y(s)?s:e}else return e}function yr(t,e,n){const r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let a=r.__localeChainCache.get(n);if(!a){a=[];let i=[n];for(;Bt(i);)i=Ts(a,i,e);const l=Bt(e)?e:$(e)?e.default?e.default:null:e;i=Y(l)?[l]:l,Bt(i)&&Ts(a,i,!1),r.__localeChainCache.set(n,a)}return a}function Ts(t,e,n){let r=!0;for(let a=0;a<e.length&&mt(r);a++){const i=e[a];Y(i)&&(r=_A(t,e[a],n))}return r}function _A(t,e,n){let r;const a=e.split("-");do{const i=a.join("-");r=$A(t,i,n),a.splice(-1,1)}while(a.length&&r===!0);return r}function $A(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const a=e.replace(/!/g,"");t.push(a),(Bt(n)||$(n))&&n[a]&&(r=n[a])}return r}function Wn(t,e,n){const r=t;r.__localeChainCache=new Map,yr(t,n,e)}const t1=t=>t;let Ys=Object.create(null);function e1(t,e={}){{const r=(e.onCacheKey||t1)(t),a=Ys[r];if(a)return a;let i=!1;const l=e.onError||wA;e.onError=c=>{i=!0,l(c)};const{code:s}=UA(t,e),o=new Function(`return ${s}`)();return i?o:Ys[r]=o}}function wn(t){return Ba(t,null,void 0)}const Gs=()=>"",pe=t=>Rt(t);function Ws(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:a,fallbackLocale:i,messages:l}=t,[s,o]=wi(...e),c=mt(o.missingWarn)?o.missingWarn:t.missingWarn,u=mt(o.fallbackWarn)?o.fallbackWarn:t.fallbackWarn,g=mt(o.escapeParameter)?o.escapeParameter:t.escapeParameter,p=!!o.resolvedMessage,I=Y(o.default)||mt(o.default)?mt(o.default)?s:o.default:n?s:"",E=n||I!=="",S=Y(o.locale)?o.locale:t.locale;g&&n1(o);let[w,A,v]=p?[s,S,l[S]||{}]:r1(t,s,S,i,u,c),k=s;if(!p&&!(Y(w)||pe(w))&&E&&(w=I,k=w),!p&&(!(Y(w)||pe(w))||!Y(A)))return a?Oa:s;let y=!1;const x=()=>{y=!0},P=pe(w)?w:gd(t,s,A,w,k,x);if(y)return w;const N=l1(t,A,v,o),L=IA(N),G=a1(t,P,L),nt=r?r(G):G;if(__INTLIFY_PROD_DEVTOOLS__){const J={timestamp:Date.now(),key:Y(s)?s:pe(w)?w.key:"",locale:A||(pe(w)?w.locale:""),format:Y(w)?w:pe(w)?w.source:"",message:nt};J.meta=qt({},t.__meta,ZA()||{}),GA(J)}return nt}function n1(t){Bt(t.list)?t.list=t.list.map(e=>Y(e)?qs(e):e):Lt(t.named)&&Object.keys(t.named).forEach(e=>{Y(t.named[e])&&(t.named[e]=qs(t.named[e]))})}function r1(t,e,n,r,a,i){const{messages:l,onWarn:s}=t,o=yr(t,r,n);let c={},u,g=null;const p="translate";for(let I=0;I<o.length&&(u=o[I],c=l[u]||{},(g=aa(c,e))===null&&(g=c[e]),!(Y(g)||Rt(g)));I++){const E=Il(t,e,u,i,p);E!==e&&(g=E)}return[g,u,c]}function gd(t,e,n,r,a,i){const{messageCompiler:l,warnHtmlMessage:s}=t;if(pe(r)){const c=r;return c.locale=c.locale||n,c.key=c.key||e,c}const o=l(r,i1(t,n,a,r,s,i));return o.locale=n,o.key=e,o.source=r,o}function a1(t,e,n){return e(n)}function wi(...t){const[e,n,r]=t,a={};if(!Y(e)&&!Vt(e)&&!pe(e))throw wn(14);const i=Vt(e)?String(e):(pe(e),e);return Vt(n)?a.plural=n:Y(n)?a.default=n:$(n)&&!ka(n)?a.named=n:Bt(n)&&(a.list=n),Vt(r)?a.plural=r:Y(r)?a.default=r:$(r)&&qt(a,r),[i,a]}function i1(t,e,n,r,a,i){return{warnHtmlMessage:a,onError:l=>{throw i&&i(l),l},onCacheKey:l=>tA(e,n,l)}}function l1(t,e,n,r){const{modifiers:a,pluralRules:i}=t,s={locale:e,modifiers:a,pluralRules:i,messages:o=>{const c=aa(n,o);if(Y(c)){let u=!1;const p=gd(t,o,e,c,o,()=>{u=!0});return u?Gs:p}else return pe(c)?c:Gs}};return t.processor&&(s.processor=t.processor),r.list&&(s.list=r.list),r.named&&(s.named=r.named),Vt(r.plural)&&(s.pluralIndex=r.plural),s}function zs(t,...e){const{datetimeFormats:n,unresolving:r,fallbackLocale:a,onWarn:i}=t,{__datetimeFormatters:l}=t,[s,o,c,u]=Ci(...e),g=mt(c.missingWarn)?c.missingWarn:t.missingWarn;mt(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn;const p=!!c.part,I=Y(c.locale)?c.locale:t.locale,E=yr(t,a,I);if(!Y(s)||s==="")return new Intl.DateTimeFormat(I).format(o);let S={},w,A=null;const v="datetime format";for(let x=0;x<E.length&&(w=E[x],S=n[w]||{},A=S[s],!$(A));x++)Il(t,s,w,g,v);if(!$(A)||!Y(w))return r?Oa:s;let k=`${w}__${s}`;ka(u)||(k=`${k}__${JSON.stringify(u)}`);let y=l.get(k);return y||(y=new Intl.DateTimeFormat(w,qt({},A,u)),l.set(k,y)),p?y.formatToParts(o):y.format(o)}function Ci(...t){const[e,n,r,a]=t;let i={},l={},s;if(Y(e)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(e))throw wn(16);s=new Date(e);try{s.toISOString()}catch{throw wn(16)}}else if(nA(e)){if(isNaN(e.getTime()))throw wn(15);s=e}else if(Vt(e))s=e;else throw wn(14);return Y(n)?i.key=n:$(n)&&(i=n),Y(r)?i.locale=r:$(r)&&(l=r),$(a)&&(l=a),[i.key||"",s,i,l]}function Js(t,e,n){const r=t;for(const a in n){const i=`${e}__${a}`;!r.__datetimeFormatters.has(i)||r.__datetimeFormatters.delete(i)}}function Ks(t,...e){const{numberFormats:n,unresolving:r,fallbackLocale:a,onWarn:i}=t,{__numberFormatters:l}=t,[s,o,c,u]=Ei(...e),g=mt(c.missingWarn)?c.missingWarn:t.missingWarn;mt(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn;const p=!!c.part,I=Y(c.locale)?c.locale:t.locale,E=yr(t,a,I);if(!Y(s)||s==="")return new Intl.NumberFormat(I).format(o);let S={},w,A=null;const v="number format";for(let x=0;x<E.length&&(w=E[x],S=n[w]||{},A=S[s],!$(A));x++)Il(t,s,w,g,v);if(!$(A)||!Y(w))return r?Oa:s;let k=`${w}__${s}`;ka(u)||(k=`${k}__${JSON.stringify(u)}`);let y=l.get(k);return y||(y=new Intl.NumberFormat(w,qt({},A,u)),l.set(k,y)),p?y.formatToParts(o):y.format(o)}function Ei(...t){const[e,n,r,a]=t;let i={},l={};if(!Vt(e))throw wn(14);const s=e;return Y(n)?i.key=n:$(n)&&(i=n),Y(r)?i.locale=r:$(r)&&(l=r),$(a)&&(l=a),[i.key||"",s,i,l]}function Zs(t,e,n){const r=t;for(const a in n){const i=`${e}__${a}`;!r.__numberFormatters.has(i)||r.__numberFormatters.delete(i)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(In().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * @intlify/vue-devtools v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const Ua={["vue-devtools-plugin-vue-i18n"]:"Vue I18n devtools",["vue-i18n-resource-inspector"]:"I18n Resources",["vue-i18n-timeline"]:"Vue I18n"},s1={["vue-i18n-resource-inspector"]:"Search for scopes ..."},o1={["vue-i18n-timeline"]:16764185};/*!
  * vue-i18n v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const c1="9.1.9";function d1(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(In().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(In().__VUE_I18N_LEGACY_API__=!0),typeof __VUE_I18N_PROD_DEVTOOLS__!="boolean"&&(In().__VUE_I18N_PROD_DEVTOOLS__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(In().__INTLIFY_PROD_DEVTOOLS__=!1)}function Ht(t,...e){return Ba(t,null,void 0)}const Ta="__INTLIFY_META__",Si=Pe("__transrateVNode"),ki=Pe("__datetimeParts"),Bi=Pe("__numberParts"),ia=Pe("__enableEmitter"),Xs=Pe("__disableEmitter"),fd=Pe("__setPluralRules");Pe("__intlifyMeta");const pd=Pe("__injectWithOption");let _s=0;function $s(t){return(e,n,r,a)=>t(n,r,Qn()||void 0,a)}function wl(t,e){const{messages:n,__i18n:r}=e,a=$(n)?n:Bt(r)?{}:{[t]:{}};if(Bt(r)&&r.forEach(({locale:i,resource:l})=>{i?(a[i]=a[i]||{},la(l,a[i])):la(l,a)}),e.flatJson)for(const i in a)sd(a,i)&&yi(a[i]);return a}const Qr=t=>!Lt(t)||Bt(t);function la(t,e){if(Qr(t)||Qr(e))throw Ht(20);for(const n in t)sd(t,n)&&(Qr(t[n])||Qr(e[n])?e[n]=t[n]:la(t[n],e[n]))}const u1=()=>{const t=Qn();return t&&t.type[Ta]?{[Ta]:t.type[Ta]}:null};function Cl(t={}){const{__root:e}=t,n=e===void 0;let r=mt(t.inheritLocale)?t.inheritLocale:!0;const a=gt(e&&r?e.locale.value:Y(t.locale)?t.locale:"en-US"),i=gt(e&&r?e.fallbackLocale.value:Y(t.fallbackLocale)||Bt(t.fallbackLocale)||$(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),l=gt(wl(a.value,t)),s=gt($(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),o=gt($(t.numberFormats)?t.numberFormats:{[a.value]:{}});let c=e?e.missingWarn:mt(t.missingWarn)||qn(t.missingWarn)?t.missingWarn:!0,u=e?e.fallbackWarn:mt(t.fallbackWarn)||qn(t.fallbackWarn)?t.fallbackWarn:!0,g=e?e.fallbackRoot:mt(t.fallbackRoot)?t.fallbackRoot:!0,p=!!t.fallbackFormat,I=Rt(t.missing)?t.missing:null,E=Rt(t.missing)?$s(t.missing):null,S=Rt(t.postTranslation)?t.postTranslation:null,w=mt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,A=!!t.escapeParameter;const v=e?e.modifiers:$(t.modifiers)?t.modifiers:{};let k=t.pluralRules||e&&e.pluralRules,y;function x(){return XA({version:c1,locale:a.value,fallbackLocale:i.value,messages:l.value,datetimeFormats:s.value,numberFormats:o.value,modifiers:v,pluralRules:k,missing:E===null?void 0:E,missingWarn:c,fallbackWarn:u,fallbackFormat:p,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:w,escapeParameter:A,__datetimeFormatters:$(y)?y.__datetimeFormatters:void 0,__numberFormatters:$(y)?y.__numberFormatters:void 0,__v_emitter:$(y)?y.__v_emitter:void 0,__meta:{framework:"vue"}})}y=x(),Wn(y,a.value,i.value);function P(){return[a.value,i.value,l.value,s.value,o.value]}const N=Z({get:()=>a.value,set:b=>{a.value=b,y.locale=a.value}}),L=Z({get:()=>i.value,set:b=>{i.value=b,y.fallbackLocale=i.value,Wn(y,a.value,b)}}),G=Z(()=>l.value),nt=Z(()=>s.value),J=Z(()=>o.value);function X(){return Rt(S)?S:null}function st(b){S=b,y.postTranslation=b}function _(){return I}function ut(b){b!==null&&(E=$s(b)),I=b,y.missing=E}function lt(b,O,D,U,K,at){P();let ct;if(__INTLIFY_PROD_DEVTOOLS__)try{Ds(u1()),ct=b(y)}finally{Ds(null)}else ct=b(y);if(Vt(ct)&&ct===Oa){const[ft,bt]=O();return e&&g?U(e):K(ft)}else{if(at(ct))return ct;throw Ht(14)}}function it(...b){return lt(O=>Ws(O,...b),()=>wi(...b),"translate",O=>O.t(...b),O=>O,O=>Y(O))}function rt(...b){const[O,D,U]=b;if(U&&!Lt(U))throw Ht(15);return it(O,D,qt({resolvedMessage:!0},U||{}))}function Dt(...b){return lt(O=>zs(O,...b),()=>Ci(...b),"datetime format",O=>O.d(...b),()=>Fs,O=>Y(O))}function Tt(...b){return lt(O=>Ks(O,...b),()=>Ei(...b),"number format",O=>O.n(...b),()=>Fs,O=>Y(O))}function Mt(b){return b.map(O=>Y(O)?Ct(sr,null,O,0):O)}const Jt={normalize:Mt,interpolate:b=>b,type:"vnode"};function Kt(...b){return lt(O=>{let D;const U=O;try{U.processor=Jt,D=Ws(U,...b)}finally{U.processor=null}return D},()=>wi(...b),"translate",O=>O[Si](...b),O=>[Ct(sr,null,O,0)],O=>Bt(O))}function Qe(...b){return lt(O=>Ks(O,...b),()=>Ei(...b),"number format",O=>O[Bi](...b),()=>[],O=>Y(O)||Bt(O))}function Et(...b){return lt(O=>zs(O,...b),()=>Ci(...b),"datetime format",O=>O[ki](...b),()=>[],O=>Y(O)||Bt(O))}function Q(b){k=b,y.pluralRules=k}function F(b,O){const D=Y(O)?O:a.value,U=h(D);return aa(U,b)!==null}function M(b){let O=null;const D=yr(y,i.value,a.value);for(let U=0;U<D.length;U++){const K=l.value[D[U]]||{},at=aa(K,b);if(at!=null){O=at;break}}return O}function z(b){const O=M(b);return O!=null?O:e?e.tm(b)||{}:{}}function h(b){return l.value[b]||{}}function d(b,O){l.value[b]=O,y.messages=l.value}function f(b,O){l.value[b]=l.value[b]||{},la(O,l.value[b]),y.messages=l.value}function m(b){return s.value[b]||{}}function C(b,O){s.value[b]=O,y.datetimeFormats=s.value,Js(y,b,O)}function B(b,O){s.value[b]=qt(s.value[b]||{},O),y.datetimeFormats=s.value,Js(y,b,O)}function V(b){return o.value[b]||{}}function H(b,O){o.value[b]=O,y.numberFormats=o.value,Zs(y,b,O)}function R(b,O){o.value[b]=qt(o.value[b]||{},O),y.numberFormats=o.value,Zs(y,b,O)}return _s++,e&&(Te(e.locale,b=>{r&&(a.value=b,y.locale=b,Wn(y,a.value,i.value))}),Te(e.fallbackLocale,b=>{r&&(i.value=b,y.fallbackLocale=b,Wn(y,a.value,i.value))})),{id:_s,locale:N,fallbackLocale:L,get inheritLocale(){return r},set inheritLocale(b){r=b,b&&e&&(a.value=e.locale.value,i.value=e.fallbackLocale.value,Wn(y,a.value,i.value))},get availableLocales(){return Object.keys(l.value).sort()},messages:G,datetimeFormats:nt,numberFormats:J,get modifiers(){return v},get pluralRules(){return k||{}},get isGlobal(){return n},get missingWarn(){return c},set missingWarn(b){c=b,y.missingWarn=c},get fallbackWarn(){return u},set fallbackWarn(b){u=b,y.fallbackWarn=u},get fallbackRoot(){return g},set fallbackRoot(b){g=b},get fallbackFormat(){return p},set fallbackFormat(b){p=b,y.fallbackFormat=p},get warnHtmlMessage(){return w},set warnHtmlMessage(b){w=b,y.warnHtmlMessage=b},get escapeParameter(){return A},set escapeParameter(b){A=b,y.escapeParameter=b},t:it,rt,d:Dt,n:Tt,te:F,tm:z,getLocaleMessage:h,setLocaleMessage:d,mergeLocaleMessage:f,getDateTimeFormat:m,setDateTimeFormat:C,mergeDateTimeFormat:B,getNumberFormat:V,setNumberFormat:H,mergeNumberFormat:R,getPostTranslationHandler:X,setPostTranslationHandler:st,getMissingHandler:_,setMissingHandler:ut,[Si]:Kt,[Bi]:Qe,[ki]:Et,[fd]:Q,[pd]:t.__injectWithOption}}function g1(t){const e=Y(t.locale)?t.locale:"en-US",n=Y(t.fallbackLocale)||Bt(t.fallbackLocale)||$(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=Rt(t.missing)?t.missing:void 0,a=mt(t.silentTranslationWarn)||qn(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,i=mt(t.silentFallbackWarn)||qn(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,l=mt(t.fallbackRoot)?t.fallbackRoot:!0,s=!!t.formatFallbackMessages,o=$(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=Rt(t.postTranslation)?t.postTranslation:void 0,g=Y(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,p=!!t.escapeParameterHtml,I=mt(t.sync)?t.sync:!0;let E=t.messages;if($(t.sharedMessages)){const x=t.sharedMessages;E=Object.keys(x).reduce((N,L)=>{const G=N[L]||(N[L]={});return qt(G,x[L]),N},E||{})}const{__i18n:S,__root:w,__injectWithOption:A}=t,v=t.datetimeFormats,k=t.numberFormats,y=t.flatJson;return{locale:e,fallbackLocale:n,messages:E,flatJson:y,datetimeFormats:v,numberFormats:k,missing:r,missingWarn:a,fallbackWarn:i,fallbackRoot:l,fallbackFormat:s,modifiers:o,pluralRules:c,postTranslation:u,warnHtmlMessage:g,escapeParameter:p,inheritLocale:I,__i18n:S,__root:w,__injectWithOption:A}}function Oi(t={}){const e=Cl(g1(t)),n={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(r){},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return mt(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=mt(r)?!r:r},get silentFallbackWarn(){return mt(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=mt(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(r){},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){const[a,i,l]=r,s={};let o=null,c=null;if(!Y(a))throw Ht(15);const u=a;return Y(i)?s.locale=i:Bt(i)?o=i:$(i)&&(c=i),Bt(l)?o=l:$(l)&&(c=l),e.t(u,o||c||{},s)},rt(...r){return e.rt(...r)},tc(...r){const[a,i,l]=r,s={plural:1};let o=null,c=null;if(!Y(a))throw Ht(15);const u=a;return Y(i)?s.locale=i:Vt(i)?s.plural=i:Bt(i)?o=i:$(i)&&(c=i),Y(l)?s.locale=l:Bt(l)?o=l:$(l)&&(c=l),e.t(u,o||c||{},s)},te(r,a){return e.te(r,a)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,a){e.setLocaleMessage(r,a)},mergeLocaleMessage(r,a){e.mergeLocaleMessage(r,a)},d(...r){return e.d(...r)},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,a){e.setDateTimeFormat(r,a)},mergeDateTimeFormat(r,a){e.mergeDateTimeFormat(r,a)},n(...r){return e.n(...r)},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,a){e.setNumberFormat(r,a)},mergeNumberFormat(r,a){e.mergeNumberFormat(r,a)},getChoiceIndex(r,a){return-1},__onComponentInstanceCreated(r){const{componentInstanceCreatedListener:a}=t;a&&a(r,n)}};return n}const El={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}},to={name:"i18n-t",props:qt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Vt(t)||!isNaN(t)}},El),setup(t,e){const{slots:n,attrs:r}=e,a=t.i18n||Pa({useScope:t.scope,__useComponent:!0}),i=Object.keys(n).filter(l=>l!=="_");return()=>{const l={};t.locale&&(l.locale=t.locale),t.plural!==void 0&&(l.plural=Y(t.plural)?+t.plural:t.plural);const s=f1(e,i),o=a[Si](t.keypath,s,l),c=qt({},r);return Y(t.tag)||Lt(t.tag)?me(t.tag,c,o):me(jt,c,o)}}};function f1({slots:t},e){return e.length===1&&e[0]==="default"?t.default?t.default():[]:e.reduce((n,r)=>{const a=t[r];return a&&(n[r]=a()),n},{})}function Ad(t,e,n,r){const{slots:a,attrs:i}=e;return()=>{const l={part:!0};let s={};t.locale&&(l.locale=t.locale),Y(t.format)?l.key=t.format:Lt(t.format)&&(Y(t.format.key)&&(l.key=t.format.key),s=Object.keys(t.format).reduce((g,p)=>n.includes(p)?qt({},g,{[p]:t.format[p]}):g,{}));const o=r(t.value,l,s);let c=[l.key];Bt(o)?c=o.map((g,p)=>{const I=a[g.type];return I?I({[g.type]:g.value,index:p,parts:o}):[g.value]}):Y(o)&&(c=[o]);const u=qt({},i);return Y(t.tag)||Lt(t.tag)?me(t.tag,u,c):me(jt,u,c)}}const p1=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],eo={name:"i18n-n",props:qt({value:{type:Number,required:!0},format:{type:[String,Object]}},El),setup(t,e){const n=t.i18n||Pa({useScope:"parent",__useComponent:!0});return Ad(t,e,p1,(...r)=>n[Bi](...r))}},A1=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],no={name:"i18n-d",props:qt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},El),setup(t,e){const n=t.i18n||Pa({useScope:"parent",__useComponent:!0});return Ad(t,e,A1,(...r)=>n[ki](...r))}};function m1(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function h1(t){const e=(n,{instance:r,value:a,modifiers:i})=>{if(!r||!r.$)throw Ht(22);const l=m1(t,r.$),s=v1(a);n.textContent=l.t(...b1(s))};return{beforeMount:e,beforeUpdate:e}}function v1(t){if(Y(t))return{path:t};if($(t)){if(!("path"in t))throw Ht(19,"path");return t}else throw Ht(20)}function b1(t){const{path:e,locale:n,args:r,choice:a,plural:i}=t,l={},s=r||{};return Y(n)&&(l.locale=n),Vt(a)&&(l.plural=a),Vt(i)&&(l.plural=i),[e,s,l]}function y1(t,e,...n){const r=$(n[0])?n[0]:{},a=!!r.useI18nComponentName;(mt(r.globalInstall)?r.globalInstall:!0)&&(t.component(a?"i18n":to.name,to),t.component(eo.name,eo),t.component(no.name,no)),t.directive("t",h1(e))}const md="vue-i18n: composer properties";let Pi;async function I1(t,e){return new Promise((n,r)=>{try{Tf({id:"vue-devtools-plugin-vue-i18n",label:Ua["vue-devtools-plugin-vue-i18n"],packageName:"vue-i18n",homepage:"https://vue-i18n.intlify.dev",logo:"https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",componentStateTypes:[md],app:t},a=>{Pi=a,a.on.visitComponentTree(({componentInstance:i,treeNode:l})=>{w1(i,l,e)}),a.on.inspectComponent(({componentInstance:i,instanceData:l})=>{i.vnode.el.__VUE_I18N__&&l&&(e.mode==="legacy"?i.vnode.el.__VUE_I18N__!==e.global.__composer&&ro(l,i.vnode.el.__VUE_I18N__):ro(l,i.vnode.el.__VUE_I18N__))}),a.addInspector({id:"vue-i18n-resource-inspector",label:Ua["vue-i18n-resource-inspector"],icon:"language",treeFilterPlaceholder:s1["vue-i18n-resource-inspector"]}),a.on.getInspectorTree(i=>{i.app===t&&i.inspectorId==="vue-i18n-resource-inspector"&&B1(i,e)}),a.on.getInspectorState(i=>{i.app===t&&i.inspectorId==="vue-i18n-resource-inspector"&&O1(i,e)}),a.on.editInspectorState(i=>{i.app===t&&i.inspectorId==="vue-i18n-resource-inspector"&&x1(i,e)}),a.addTimelineLayer({id:"vue-i18n-timeline",label:Ua["vue-i18n-timeline"],color:o1["vue-i18n-timeline"]}),n(!0)})}catch(a){console.error(a),r(!1)}})}function w1(t,e,n){const r=n.mode==="composition"?n.global:n.global.__composer;if(t&&t.vnode.el.__VUE_I18N__&&t.vnode.el.__VUE_I18N__!==r){const i={label:`i18n (${t.type.name||t.type.displayName||t.type.__file} Scope)`,textColor:0,backgroundColor:16764185};e.tags.push(i)}}function ro(t,e){const n=md;t.state.push({type:n,key:"locale",editable:!0,value:e.locale.value}),t.state.push({type:n,key:"availableLocales",editable:!1,value:e.availableLocales}),t.state.push({type:n,key:"fallbackLocale",editable:!0,value:e.fallbackLocale.value}),t.state.push({type:n,key:"inheritLocale",editable:!0,value:e.inheritLocale}),t.state.push({type:n,key:"messages",editable:!1,value:Sl(e.messages.value)}),t.state.push({type:n,key:"datetimeFormats",editable:!1,value:e.datetimeFormats.value}),t.state.push({type:n,key:"numberFormats",editable:!1,value:e.numberFormats.value})}function Sl(t){const e={};return Object.keys(t).forEach(n=>{const r=t[n];Rt(r)&&"source"in r?e[n]=k1(r):Lt(r)?e[n]=Sl(r):e[n]=r}),e}const C1={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function E1(t){return t.replace(/[<>"&]/g,S1)}function S1(t){return C1[t]||t}function k1(t){const e=t.source?`("${E1(t.source)}")`:"(?)";return{_custom:{type:"function",display:`<span>\u0192</span> ${e}`}}}function B1(t,e){t.rootNodes.push({id:"global",label:"Global Scope"});const n=e.mode==="composition"?e.global:e.global.__composer;for(const[r,a]of e.__instances){const i=e.mode==="composition"?a:a.__composer;if(n===i)continue;const l=r.type.name||r.type.displayName||r.type.__file;t.rootNodes.push({id:i.id.toString(),label:`${l} Scope`})}}function hd(t,e){if(t==="global")return e.mode==="composition"?e.global:e.global.__composer;{const n=Array.from(e.__instances.values()).find(r=>r.id.toString()===t);return n?e.mode==="composition"?n:n.__composer:null}}function O1(t,e){const n=hd(t.nodeId,e);n&&(t.state=P1(n))}function P1(t){const e={},n="Locale related info",r=[{type:n,key:"locale",editable:!0,value:t.locale.value},{type:n,key:"fallbackLocale",editable:!0,value:t.fallbackLocale.value},{type:n,key:"availableLocales",editable:!1,value:t.availableLocales},{type:n,key:"inheritLocale",editable:!0,value:t.inheritLocale}];e[n]=r;const a="Locale messages info",i=[{type:a,key:"messages",editable:!1,value:Sl(t.messages.value)}];e[a]=i;const l="Datetime formats info",s=[{type:l,key:"datetimeFormats",editable:!1,value:t.datetimeFormats.value}];e[l]=s;const o="Datetime formats info",c=[{type:o,key:"numberFormats",editable:!1,value:t.numberFormats.value}];return e[o]=c,e}function gr(t,e){if(Pi){let n;e&&"groupId"in e&&(n=e.groupId,delete e.groupId),Pi.addTimelineEvent({layerId:"vue-i18n-timeline",event:{title:t,groupId:n,time:Date.now(),meta:{},data:e||{},logType:t==="compile-error"?"error":t==="fallback"||t==="missing"?"warning":"default"}})}}function x1(t,e){const n=hd(t.nodeId,e);if(n){const[r]=t.path;r==="locale"&&Y(t.state.value)?n.locale.value=t.state.value:r==="fallbackLocale"&&(Y(t.state.value)||Bt(t.state.value)||Lt(t.state.value))?n.fallbackLocale.value=t.state.value:r==="inheritLocale"&&mt(t.state.value)&&(n.inheritLocale=t.state.value)}}function Q1(t,e,n){return{beforeCreate(){const r=Qn();if(!r)throw Ht(22);const a=this.$options;if(a.i18n){const i=a.i18n;a.__i18n&&(i.__i18n=a.__i18n),i.__root=e,this===this.$root?this.$i18n=ao(t,i):(i.__injectWithOption=!0,this.$i18n=Oi(i))}else a.__i18n?this===this.$root?this.$i18n=ao(t,a):this.$i18n=Oi({__i18n:a.__i18n,__injectWithOption:!0,__root:e}):this.$i18n=t;t.__onComponentInstanceCreated(this.$i18n),n.__setInstance(r,this.$i18n),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,l)=>this.$i18n.te(i,l),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i)},mounted(){if(__VUE_I18N_PROD_DEVTOOLS__){this.$el.__VUE_I18N__=this.$i18n.__composer;const r=this.__v_emitter=bl(),a=this.$i18n;a.__enableEmitter&&a.__enableEmitter(r),r.on("*",gr)}},beforeUnmount(){const r=Qn();if(!r)throw Ht(22);if(__VUE_I18N_PROD_DEVTOOLS__){this.__v_emitter&&(this.__v_emitter.off("*",gr),delete this.__v_emitter);const a=this.$i18n;a.__disableEmitter&&a.__disableEmitter(),delete this.$el.__VUE_I18N__}delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(r),delete this.$i18n}}}function ao(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[fd](e.pluralizationRules||t.pluralizationRules);const n=wl(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}function N1(t={}){const e=__VUE_I18N_LEGACY_API__&&mt(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=!!t.globalInjection,r=new Map,a=__VUE_I18N_LEGACY_API__&&e?Oi(t):Cl(t),i=Pe(""),l={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(s,...o){if(__VUE_I18N_PROD_DEVTOOLS__&&(s.__VUE_I18N__=l),s.__VUE_I18N_SYMBOL__=i,s.provide(s.__VUE_I18N_SYMBOL__,l),!e&&n&&j1(s,l.global),__VUE_I18N_FULL_INSTALL__&&y1(s,l,...o),__VUE_I18N_LEGACY_API__&&e&&s.mixin(Q1(a,a.__composer,l)),__VUE_I18N_PROD_DEVTOOLS__){if(!await I1(s,l))throw Ht(21);const u=bl();if(e){const g=a;g.__enableEmitter&&g.__enableEmitter(u)}else{const g=a;g[ia]&&g[ia](u)}u.on("*",gr)}},get global(){return a},__instances:r,__getInstance(s){return r.get(s)||null},__setInstance(s,o){r.set(s,o)},__deleteInstance(s){r.delete(s)}};return l}function Pa(t={}){const e=Qn();if(e==null)throw Ht(16);if(!e.appContext.app.__VUE_I18N_SYMBOL__)throw Ht(17);const n=se(e.appContext.app.__VUE_I18N_SYMBOL__);if(!n)throw Ht(22);const r=n.mode==="composition"?n.global:n.global.__composer,a=ka(t)?"__i18n"in e.type?"local":"global":t.useScope?t.useScope:"local";if(a==="global"){let s=Lt(t.messages)?t.messages:{};"__i18nGlobal"in e.type&&(s=wl(r.locale.value,{messages:s,__i18n:e.type.__i18nGlobal}));const o=Object.keys(s);if(o.length&&o.forEach(c=>{r.mergeLocaleMessage(c,s[c])}),Lt(t.datetimeFormats)){const c=Object.keys(t.datetimeFormats);c.length&&c.forEach(u=>{r.mergeDateTimeFormat(u,t.datetimeFormats[u])})}if(Lt(t.numberFormats)){const c=Object.keys(t.numberFormats);c.length&&c.forEach(u=>{r.mergeNumberFormat(u,t.numberFormats[u])})}return r}if(a==="parent"){let s=V1(n,e,t.__useComponent);return s==null&&(s=r),s}if(n.mode==="legacy")throw Ht(18);const i=n;let l=i.__getInstance(e);if(l==null){const s=e.type,o=qt({},t);s.__i18n&&(o.__i18n=s.__i18n),r&&(o.__root=r),l=Cl(o),R1(i,e,l),i.__setInstance(e,l)}return l}function V1(t,e,n=!1){let r=null;const a=e.root;let i=e.parent;for(;i!=null;){const l=t;if(t.mode==="composition")r=l.__getInstance(i);else{const s=l.__getInstance(i);s!=null&&(r=s.__composer),n&&r&&!r[pd]&&(r=null)}if(r!=null||a===i)break;i=i.parent}return r}function R1(t,e,n){let r=null;il(()=>{if(__VUE_I18N_PROD_DEVTOOLS__&&!0&&e.vnode.el){e.vnode.el.__VUE_I18N__=n,r=bl();const a=n;a[ia]&&a[ia](r),r.on("*",gr)}},e),ya(()=>{if(__VUE_I18N_PROD_DEVTOOLS__&&!0&&e.vnode.el&&e.vnode.el.__VUE_I18N__){r&&r.off("*",gr);const a=n;a[Xs]&&a[Xs](),delete e.vnode.el.__VUE_I18N__}t.__deleteInstance(e)},e)}const q1=["locale","fallbackLocale","availableLocales"],M1=["t","rt","d","n","tm"];function j1(t,e){const n=Object.create(null);q1.forEach(r=>{const a=Object.getOwnPropertyDescriptor(e,r);if(!a)throw Ht(22);const i=xt(a.value)?{get(){return a.value.value},set(l){a.value.value=l}}:{get(){return a.get&&a.get()}};Object.defineProperty(n,r,i)}),t.config.globalProperties.$i18n=n,M1.forEach(r=>{const a=Object.getOwnPropertyDescriptor(e,r);if(!a||!a.value)throw Ht(22);Object.defineProperty(t.config.globalProperties,`$${r}`,a)})}KA(e1);d1();if(__INTLIFY_PROD_DEVTOOLS__){const t=In();t.__INTLIFY__=!0,TA(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}var kl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n};const Fn=t=>(ng("data-v-529fae55"),t=t(),rg(),t),H1={class:"w-full"},L1={class:"w-full bg-blue-background mainPaddingX h-16 flex items-center md:hidden"},F1={class:"w-full flex gap-4"},D1=["href"],U1={class:"hover:text-white"},T1=Fn(()=>j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[j("path",{fill:"currentColor",d:"M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4Zm0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428c-.048-1.066-.06-1.405-.06-4.122c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772a4.897 4.897 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2Z"})],-1)),Y1=[T1],G1=Fn(()=>j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[j("path",{fill:"currentColor",d:"M18 6c2.07 2.04 2.85 4.89 2.36 7.55c.41.72.64 1.56.64 2.45a5 5 0 0 1-5 5c-.89 0-1.73-.23-2.45-.64c-2.66.49-5.51-.29-7.55-2.36c-2.07-2.04-2.85-4.89-2.36-7.55C3.23 9.73 3 8.89 3 8a5 5 0 0 1 5-5c.89 0 1.73.23 2.45.64c2.66-.49 5.51.29 7.55 2.36m-5.96 11.16c2.87 0 4.3-1.38 4.3-3.24c0-1.19-.56-2.46-2.73-2.95l-1.99-.44c-.76-.17-1.62-.4-1.62-1.11c0-.72.6-1.22 1.7-1.22c2.23 0 2.02 1.53 3.13 1.53c.58 0 1.08-.34 1.08-.93c0-1.37-2.19-2.4-4.05-2.4c-2.01 0-4.16.86-4.16 3.14c0 1.1.39 2.27 2.55 2.81l2.69.68c.81.2 1.01.65 1.01 1.07c0 .68-.68 1.35-1.91 1.35c-2.41 0-2.08-1.85-3.37-1.85c-.58 0-1 .4-1 .97c0 1.11 1.33 2.59 4.37 2.59Z"})],-1)),W1=[G1],z1=Fn(()=>j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[j("path",{fill:"currentColor",d:"M19.365 9.863a.631.631 0 0 1 0 1.261H17.61v1.125h1.755a.63.63 0 1 1 0 1.259h-2.386a.631.631 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63h2.386a.63.63 0 0 1-.003 1.26H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 0 1-.631.627a.618.618 0 0 1-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-1.257 0V8.108a.627.627 0 0 1 .624-.628c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63c.345 0 .63.285.63.63v4.771zm-5.741 0a.632.632 0 0 1-.631.629a.631.631 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63c.346 0 .628.285.628.63v4.771zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.285-.63.63-.63c.348 0 .63.285.63.63v4.141h1.756a.63.63 0 0 1 0 1.259M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608c.391.082.923.258 1.058.59c.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645c1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"})],-1)),J1=[z1],K1=Fn(()=>j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"24",viewBox:"0 20 60 20"},[j("path",{fill:"none",d:"M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"}),j("path",{fill:"currentColor",d:"M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"})],-1)),Z1=[K1],X1=Fn(()=>j("div",null,null,-1)),_1={class:"flex items-end gap-2"},$1={class:"flex gap-2 text-xl font-bold"},tm={class:"lg:hidden"},em={class:"flex gap-6 text-xl tracking-tighter"},nm=["onClick"],rm={class:"p-6 flex justify-center"},am={class:"grid grid-cols-1 gap-2 text-xl"},im=xn(" > "),lm=["onClick"],sm={key:0,class:"pl-4 pt-4 grid grid-cols-1 gap-1"},om=["onClick"],cm=Fn(()=>j("p",null,"*",-1)),dm={setup(t){const e=Pa(),n=ld(),r=br(),a=Al(),i=ml(),l=r.globleInfos,s=Jc(),o=J=>{l.language=J,e.locale.value=J},c=Z(()=>a.headquartersInfos),u=Z(()=>r.globleInfos.language),g=Z(()=>{var J;return((J=c.value)==null?void 0:J.Email)||""}),p=Z(()=>{var J;return((J=c.value)==null?void 0:J.Tel)||""}),I=Z(()=>{var X,st;return((X=c.value)==null?void 0:X.CountryIso3)=="TWN"&&u.value=="zh"?"\u5468\u4E00\u81F3\u5468\u4E94 8:00-17:00":((st=c.value)==null?void 0:st.OfficeHour)||""}),E=Z(()=>{var J,X,st,_,ut,lt,it,rt,Dt,Tt,Mt,Ot,Jt,Kt;return{Twitter:((J=c.value)==null?void 0:J.Twitter)||"",Twitter_Visibility:((X=c.value)==null?void 0:X.Twitter_Visibility)||"1",Facebook:((st=c.value)==null?void 0:st.Facebook)||"",Facebook_Visibility:((_=c.value)==null?void 0:_.Facebook_Visibility)||"1",Instagram:((ut=c.value)==null?void 0:ut.Instagram)||"",Instagram_Visibility:((lt=c.value)==null?void 0:lt.Instagram_Visibility)||"1",Linkedin:((it=c.value)==null?void 0:it.Linkedin)||"",Linkedin_Visibility:((rt=c.value)==null?void 0:rt.Linkedin_Visibility)||"1",Skype:((Dt=c.value)==null?void 0:Dt.Skype)||"",Skype_Visibility:((Tt=c.value)==null?void 0:Tt.Skype_Visibility)||"1",Line:((Mt=c.value)==null?void 0:Mt.Line)||"",Line_Visibility:((Ot=c.value)==null?void 0:Ot.Line_Visibility)||"1",Youtube:((Jt=c.value)==null?void 0:Jt.Youtube)||"",Youtube_Visibility:((Kt=c.value)==null?void 0:Kt.Youtube_Visibility)||"1"}}),S=(J="")=>a.toPublicWeb(J),w=Z(()=>`${u.value}_title`),A=Z(()=>s.activedHeader_id),v=Z(()=>{let J=JSON.parse(JSON.stringify(s.linkList)),X=J.findIndex(st=>st==null?void 0:st.subList);return X>0&&(J[X].subList=i.getProductCategoriesList()),J}),k=()=>{document.documentElement.style.overflow="hidden",document.body.scroll="no"},y=()=>{document.documentElement.style.overflow="auto",document.body.scroll="yes"},x=gt(!1),P=()=>{x.value?y():k(),x.value=!x.value},N=Z(()=>s.setIsFixed()),L=async J=>{if(x.value=!1,y(),await n.push("/"),s.activedHeader_id=J,J=="#")window.scroll({top:0,left:0,behavior:"smooth"});else{const X=document.getElementById(J);X&&(s.setScrollY(X),window.scroll({top:s.scrollInfo.scrollY,left:0,behavior:"smooth"}))}},G=()=>s.scrollInfo.scrollY=window.scrollY;il(()=>{window.addEventListener("scroll",G)}),ya(()=>{window.removeEventListener("scroll",G)});const nt=async J=>{x.value=!1,y(),s.activedHeader_id="Product",i.setActive_cid(J==null?void 0:J.c_id),await n.push("/product_categories"),window.scroll({top:0,left:0,behavior:"smooth"})};return(J,X)=>{const st=sl("font-awesome-icon");return ht(),yt("nav",H1,[j("div",L1,[j("div",F1,[j("p",null,[j("a",{href:`mailto:${At(g)}`},[Ct(st,{icon:"fa-envelope",class:"text-yellow-basic"}),j("span",U1,Ut(At(g)),1)],8,D1)]),j("p",null,[Ct(st,{icon:"fa-phone",class:"text-yellow-basic"}),xn(" "+Ut(At(p)),1)]),j("p",null,[Ct(st,{icon:"fa-clock",class:"text-yellow-basic"}),xn(" "+Ut(At(I)),1)]),At(E).Instagram_Visibility=="1"?(ht(),yt("p",{key:0,class:"cursor-pointer hover:text-yellow-basic",onClick:X[0]||(X[0]=_=>S("Instagram"))},Y1)):ne("",!0),At(E).Skype_Visibility=="1"?(ht(),yt("p",{key:1,class:"cursor-pointer hover:text-yellow-basic",onClick:X[1]||(X[1]=_=>S("Skype"))},W1)):ne("",!0),At(E).Line_Visibility=="1"?(ht(),yt("p",{key:2,class:"cursor-pointer hover:text-yellow-basic",onClick:X[2]||(X[2]=_=>S("Line"))},J1)):ne("",!0),At(E).Youtube_Visibility=="1"?(ht(),yt("p",{key:3,class:"cursor-pointer hover:text-yellow-basic",onClick:X[3]||(X[3]=_=>S("Youtube"))},Z1)):ne("",!0)]),X1]),j("div",{id:"TheFixedDiv",class:$e(["bg-blue-menu mainPaddingX w-full h-20 flex items-center justify-between",[At(N)?"fixed top-0 left-0 ZindexMax":""]])},[j("div",_1,[j("img",{src:Uc,alt:"",class:"cursor-pointer",onClick:X[4]||(X[4]=_=>L("#"))}),j("div",$1,[j("p",{class:"px-1 cursor-pointer rounded-full hover:bg-gray-200 hover:bg-opacity-20",onClick:X[5]||(X[5]=_=>o("en"))},"En"),j("p",{class:"px-1 cursor-pointer rounded-full hover:bg-gray-200 hover:bg-opacity-20",onClick:X[6]||(X[6]=_=>o("zh"))},"\u4E2D")])]),j("div",tm,[j("ul",em,[(ht(!0),yt(jt,null,Xn(At(v),(_,ut)=>(ht(),yt("li",{key:"linkList"+ut,class:$e(["flex items-center",[(_==null?void 0:_.id)==At(A)?"title":"animated-title cursor-pointer hover:text-yellow-basic"]])},[j("a",{onClick:lt=>L(_.id)},Ut(J.$t(`LinkList.${_.id}`)),9,nm)],2))),128))])]),j("div",{class:"hidden lg:block cursor-pointer text-white text-opacity-70 hover:text-opacity-100",onClick:P},[Ct(st,{icon:"fa-bars",size:"2xl"})])],2),x.value?(ht(),yt("div",{key:0,class:$e(["TheMenuDiv w-full fixed left-0 md:top-20 bg-gray-200 text-black overflow-hidden hidden lg:block",[At(N)?"top-20":"top-36"]])},[j("div",rm,[j("ul",am,[(ht(!0),yt(jt,null,Xn(At(v),(_,ut)=>(ht(),yt("li",{key:"linkList"+ut},[j("p",{class:$e(["font-extrabold cursor-pointer",[(_==null?void 0:_.id)==At(A)?"text-blue-600":"hover:text-blue-600"]])},[im,j("a",{onClick:lt=>L(_.id)},Ut(J.$t(`LinkList.${_.id}`)),9,lm)],2),_!=null&&_.subList?(ht(),yt("ul",sm,[(ht(!0),yt(jt,null,Xn(_.subList,(lt,it)=>(ht(),yt("li",{key:"subList"+it,class:"flex cursor-pointer hover:text-blue-600",onClick:Dc(rt=>nt(lt),["stop"])},[cm,j("p",null,Ut(lt[At(w)]),1)],8,om))),128))])):ne("",!0)]))),128))])])],2)):ne("",!0)])}}};var um=kl(dm,[["__scopeId","data-v-529fae55"]]);const gm={class:"Section mainPaddingX py-5 bg-blue-footer"},fm={class:"flex justify-around mb-5 sm:block"},pm=j("img",{src:Uc,alt:"",class:"sm:m-auto"},null,-1),Am={class:"text-lg sm:text-center"},mm={class:"sm:text-center"},hm={class:"sm:my-5"},vm={class:"text-xl mb-2 text-center sm:hidden"},bm={class:"flex sm:justify-center sm:gap-5"},ym=j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24"},[j("path",{fill:"currentColor",d:"M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4Zm0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428c-.048-1.066-.06-1.405-.06-4.122c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772a4.897 4.897 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2Z"})],-1),Im=[ym],wm=j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24"},[j("path",{fill:"currentColor",d:"M18 6c2.07 2.04 2.85 4.89 2.36 7.55c.41.72.64 1.56.64 2.45a5 5 0 0 1-5 5c-.89 0-1.73-.23-2.45-.64c-2.66.49-5.51-.29-7.55-2.36c-2.07-2.04-2.85-4.89-2.36-7.55C3.23 9.73 3 8.89 3 8a5 5 0 0 1 5-5c.89 0 1.73.23 2.45.64c2.66-.49 5.51.29 7.55 2.36m-5.96 11.16c2.87 0 4.3-1.38 4.3-3.24c0-1.19-.56-2.46-2.73-2.95l-1.99-.44c-.76-.17-1.62-.4-1.62-1.11c0-.72.6-1.22 1.7-1.22c2.23 0 2.02 1.53 3.13 1.53c.58 0 1.08-.34 1.08-.93c0-1.37-2.19-2.4-4.05-2.4c-2.01 0-4.16.86-4.16 3.14c0 1.1.39 2.27 2.55 2.81l2.69.68c.81.2 1.01.65 1.01 1.07c0 .68-.68 1.35-1.91 1.35c-2.41 0-2.08-1.85-3.37-1.85c-.58 0-1 .4-1 .97c0 1.11 1.33 2.59 4.37 2.59Z"})],-1),Cm=[wm],Em=j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24"},[j("path",{fill:"currentColor",d:"M19.365 9.863a.631.631 0 0 1 0 1.261H17.61v1.125h1.755a.63.63 0 1 1 0 1.259h-2.386a.631.631 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63h2.386a.63.63 0 0 1-.003 1.26H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 0 1-.631.627a.618.618 0 0 1-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-1.257 0V8.108a.627.627 0 0 1 .624-.628c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63c.345 0 .63.285.63.63v4.771zm-5.741 0a.632.632 0 0 1-.631.629a.631.631 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63c.346 0 .628.285.628.63v4.771zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.285-.63.63-.63c.348 0 .63.285.63.63v4.141h1.756a.63.63 0 0 1 0 1.259M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608c.391.082.923.258 1.058.59c.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645c1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"})],-1),Sm=[Em],km=j("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"48",viewBox:"2 7 60 48"},[j("path",{fill:"none",d:"M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"}),j("path",{fill:"currentColor",d:"M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"})],-1),Bm=[km],Om={class:"lg:hidden"},Pm={class:"text-xl"},xm={class:"pl-2"},Qm=["onClick"],Nm={class:"md:hidden"},Vm={class:"text-xl mb-2"},Rm={class:"pl-2"},qm=["onClick"],Mm=j("div",{class:"text-center"},[j("span",null," Copyright\xA92023 ISM."),j("span",{class:"sm:hidden"},"All Rights Reserved.")],-1),jm={setup(t){const e=ld(),n=Al(),r=ml(),a=Jc(),i=br(),l=Z(()=>i.globleInfos.language),s=Z(()=>n.headquartersInfos),o=(S="")=>n.toPublicWeb(S),c=Z(()=>{var S,w,A,v,k,y,x,P,N,L,G,nt,J,X;return{Twitter:((S=s.value)==null?void 0:S.Twitter)||"",Twitter_Visibility:((w=s.value)==null?void 0:w.Twitter_Visibility)||"1",Facebook:((A=s.value)==null?void 0:A.Facebook)||"",Facebook_Visibility:((v=s.value)==null?void 0:v.Facebook_Visibility)||"1",Instagram:((k=s.value)==null?void 0:k.Instagram)||"",Instagram_Visibility:((y=s.value)==null?void 0:y.Instagram_Visibility)||"1",Linkedin:((x=s.value)==null?void 0:x.Linkedin)||"",Linkedin_Visibility:((P=s.value)==null?void 0:P.Linkedin_Visibility)||"1",Skype:((N=s.value)==null?void 0:N.Skype)||"",Skype_Visibility:((L=s.value)==null?void 0:L.Skype_Visibility)||"1",Line:((G=s.value)==null?void 0:G.Line)||"",Line_Visibility:((nt=s.value)==null?void 0:nt.Line_Visibility)||"1",Youtube:((J=s.value)==null?void 0:J.Youtube)||"",Youtube_Visibility:((X=s.value)==null?void 0:X.Youtube_Visibility)||"1"}}),u=gt([{title:"Home",id:"#"},{title:"About ISM",id:"About"},{title:"News",id:"News"},{title:"Partner",id:"Partner"},{title:"Service Center",id:"ServiceCenter"}]),g=async S=>{if(await e.push("/"),a.activedHeader_id=S,S=="#")window.scroll({top:0,left:0,behavior:"smooth"});else{const w=document.getElementById(S);w&&(a.setScrollY(w),window.scroll({top:a.scrollInfo.scrollY,left:0,behavior:"smooth"}))}},p=Z(()=>`${l.value}_title`),I=Z(()=>r.getProductCategoriesList()),E=async S=>{a.activedHeader_id="Product",r.setActive_cid(S==null?void 0:S.c_id),await e.push("/product_categories"),window.scroll({top:0,left:0,behavior:"smooth"})};return(S,w)=>{const A=sl("font-awesome-icon");return ht(),yt("div",gm,[j("div",fm,[j("div",null,[pm,j("p",Am,[j("strong",null,Ut(S.$t("Footer.CompanyFirstName")),1)]),j("p",mm,Ut(S.$t("Footer.CompanySecondName")),1)]),j("div",hm,[j("h3",vm,[j("strong",null,Ut(S.$t("Footer.SocialMedia")),1)]),j("div",bm,[At(c).Instagram_Visibility=="1"?(ht(),yt("p",{key:0,class:"cursor-pointer hover:text-yellow-basic",onClick:w[0]||(w[0]=v=>o("Instagram"))},Im)):ne("",!0),At(c).Skype_Visibility=="1"?(ht(),yt("p",{key:1,class:"cursor-pointer hover:text-yellow-basic",onClick:w[1]||(w[1]=v=>o("Skype"))},Cm)):ne("",!0),At(c).Line_Visibility=="1"?(ht(),yt("p",{key:2,class:"cursor-pointer hover:text-yellow-basic",onClick:w[2]||(w[2]=v=>o("Line"))},Sm)):ne("",!0),At(c).Youtube_Visibility=="1"?(ht(),yt("p",{key:3,class:"cursor-pointer hover:text-yellow-basic",onClick:w[3]||(w[3]=v=>o("Youtube"))},Bm)):ne("",!0)])]),j("div",Om,[j("h3",Pm,[j("strong",null,Ut(S.$t("Footer.Links")),1)]),j("ul",xm,[(ht(!0),yt(jt,null,Xn(u.value,(v,k)=>(ht(),yt("li",{key:"linkList"+k,class:"flex items-center gap-2 cursor-pointer hover:text-yellow-basic"},[Ct(A,{icon:"fa-chevron-right",size:"sm"}),j("a",{onClick:y=>g(v.id)},Ut(S.$t(`LinkList.${v.id}`)),9,Qm)]))),128))])]),j("div",Nm,[j("h3",Vm,[j("strong",null,Ut(S.$t("Footer.Product")),1)]),j("ul",Rm,[(ht(!0),yt(jt,null,Xn(At(I),(v,k)=>(ht(),yt("li",{key:"productCategoriesList"+k,class:"flex items-center gap-2 cursor-pointer hover:text-yellow-basic",onClick:y=>E(v)},[Ct(A,{icon:"fa-chevron-right",size:"sm"}),xn(Ut(v[At(p)]),1)],8,qm))),128))])])]),Mm])}}},xa=te("popup",()=>{const t=gt({isPopup:!1,key:"",data:null});function e(i="",l=null,s=!0){t.value.key=i,t.value.data=l,t.value.isPopup=s}function n(){t.value.key="",t.value.data=null,t.value.isPopup=!1}return{popupInfos:t,popupFunction:e,$reset:n,setUrlRouter:()=>{window.location.href.search("setUrlRouter=true")>0&&e("setUrlRouter")},reSetUrlRouter:()=>{if(window.location.href.search("reSetUrlRouter=true")>0)try{localStorage.removeItem("IsmWebUrlRouter"),alert("Reset localStorage successfully")}catch{alert("Reset localStorage failed")}}}}),vd=te("routerSetting",()=>{const t="setUrlRouter=true",e="reSetUrlRouter=true",n=()=>{window.location.href.search(t)>0&&xa().popupFunction("setUrlRouter")},r=()=>{if(window.location.href.search(e)>0)try{pl().setLocalStorageData("pathName",""),br().changingUrlSetting(),a(),alert("Reset localStorage successfully")}catch{alert("Reset localStorage failed")}},a=()=>{let l=window.location.href.split("?"),s=l[1];if(!s)return location.reload();let c=s.split("&").filter(p=>p!=t&&p!=e);if(c.length==0)return window.location.href=l[0],location.reload();let u=c.join("&"),g=l[0]+"?"+u;window.location.href=g,location.reload()};return{setUrlRouter:n,reSetUrlRouter:r,clearUrlRourer:a}}),Hm={class:"bg-gray-800 rounded-md"},Lm=j("h2",{class:"popupTitle"},[j("strong",null,"\u8A2D\u5B9A\u5F8C\u7AEF\u8DEF\u5F91\u4F4D\u7F6E")],-1),Fm=j("hr",{class:"popupHr"},null,-1),Dm={class:"popupContent"},Um={class:"flex gap-2"},Tm={class:"w-10/12"},Ym=j("p",null,"\u5F8C\u7AEF\u8DEF\u5F91",-1),Gm={class:"text-right"},Wm={setup(t){const e=br(),n=xa(),r=vd(),a=Z(()=>e.globleInfos.pathName),i=gt({url:a.value}),l=()=>{if(i.value.url)try{pl().setLocalStorageData("pathName",i.value.url),e.changingUrlSetting(),r.clearUrlRourer(),alert("Set localStorage successfully"),s()}catch{alert("Set localStorage failed")}},s=()=>n.$reset();return(o,c)=>(ht(),yt("div",Hm,[Lm,Fm,j("div",Dm,[j("div",Um,[j("div",Tm,[Ym,Ng(j("input",{type:"text",class:"input rounded-md w-full text-black","onUpdate:modelValue":c[0]||(c[0]=u=>i.value.url=u)},null,512),[[Of,i.value.url]])])]),j("div",Gm,[j("button",{class:"bg-gray-600 hover:bg-gray-500 py-1 px-2 rounded mr-2",onClick:s},Ut(o.$t("GENERAL.close")),1),j("button",{class:"bg-blue-600 hover:bg-blue-500 py-1 px-2 rounded",onClick:l},Ut(o.$t("GENERAL.save")),1)])])]))}};const zm={class:"Popup w-full h-full"},Jm={class:"popupSection relative"},Km=["onClick"],Zm={setup(t){const e=xa(),n=Z(()=>e.popupInfos.key),r=gt(!1),a=()=>{},i=()=>r.value&&e.$reset();return(l,s)=>(ht(),yt("aside",zm,[j("div",{class:"pt-5 w-full h-full flex justify-center bg-gray-700 bg-opacity-80 overflow-scroll",onClick:i},[j("div",Jm,[j("div",{class:"popupComponent",onClick:Dc(a,["stop"]),"data-aos":"fade-down"},[At(n)=="setUrlRouter"?(ht(),ol(Wm,{key:0})):ne("",!0)],8,Km)])])]))}};var Xm=kl(Zm,[["__scopeId","data-v-4b065528"]]);const _m=te("news",()=>{const t=gt([]);return{newsInfos:t,setNewsInfos:(n=[])=>{t.value=n}}}),$m=te("products",()=>{const t=gt([]),e=(i=[])=>{t.value=i||[]},r=gt((()=>{let i={},l=sessionStorage.getItem("ProductInfo");return l&&(i=JSON.parse(l)),i||{}})());return{productsInfos:t,setProductsInfos:e,productInfo:r,setProductInfo:i=>{let l=i||{};r.value=l,sessionStorage.setItem("ProductInfo",JSON.stringify(l))}}}),t2=te("serviceCenter",()=>{const t=gt([]);return{serviceCenterInfos:t,setServiceCenterInfos:(n=[])=>{t.value=n}}}),e2=te("banner",()=>{const t=gt([]);return{bannerInfos:t,setBannerInfos:(n=[])=>{t.value=n}}}),n2=te("partners",()=>{const t=gt([]);return{partnersInfos:t,setPartnersInfos:(n=[])=>{t.value=n}}}),r2=te("about",()=>{const t=gt([]);return{aboutInfos:t,setAboutInfos:(n=[])=>{t.value=n}}});var a2={categories:[{c_id:"5",zh_title:"\u7E2B\u7D09\u6A5F\u99AC\u9054\u7CFB\u5217",en_title:"Motor Series",sort:"1",visibility:"1",seo_keywords:"",seo_descript:"",seo_title:"",img:"",created_at:"2023-07-24 15:14:32",updated_at:"2023-08-28 08:51:46"},{c_id:"6",zh_title:"\u8E0F\u677F\u7D44\u7CFB\u5217",en_title:"Standing Operation Pedal",sort:"2",visibility:"1",seo_keywords:"",seo_descript:"",seo_title:"",img:"",created_at:"2023-07-24 15:14:32",updated_at:"0000-00-00 00:00:00"},{c_id:"7",zh_title:"\u6578\u64DA\u64F7\u53D6\u76D2\u7CFB\u5217",en_title:"Data Capture Box",sort:"3",visibility:"1",seo_keywords:"",seo_descript:"",seo_title:"",img:"",created_at:"2023-07-24 15:14:32",updated_at:"2023-08-28 08:52:18"},{c_id:"8",zh_title:"\u7E2B\u7D09\u6A5F\u9031\u908A\u914D\u4EF6",en_title:"Sewing Machine Accessories",sort:"4",visibility:"1",seo_keywords:"",seo_descript:"",seo_title:"",img:"",created_at:"2023-07-24 15:14:32",updated_at:"2023-08-28 08:52:36"},{c_id:"9",zh_title:"\u5176\u4ED6\u914D(\u96F6)\u4EF6",en_title:"Others",sort:"5",visibility:"1",seo_keywords:"",seo_descript:"",seo_title:"",img:"",created_at:"2023-07-24 15:14:32",updated_at:"0000-00-00 00:00:00"}],news:[{Ns_ID:"1",Ns_Title_zh:"2022 \u53C3\u5C55\u6D3B\u52D5",Ns_Content_zh:`<p>\u65E5\u672C\u570B\u969B\u670D\u88DD\u7E2B\u88FD\u8A2D\u5099\u53CA\u7D21\u7E54\u5DE5\u696D\u5C55\u89BD\u6703 2022 (JIAM 2022 OSAKA)</p>\r
<table border="0" width="100%" cellspacing="0">\r
<tbody>\r
<tr></tr>\r
<tr>\r
<td style="width: 12.3521%;" valign="top" width="88"><strong>\u5C55\u6703\u65E5\u671F:</strong></td>\r
<td style="width: 90.0431%;" colspan="3">2022.11. 30 &ndash; 2022.12.03 \u70BA\u671F4\u5929<br>\r
<table border="0" width="100%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td style="width: 17.5878%;" width="80">11/30-11/02</td>\r
<td style="width: 82.3838%;">10:00 ~ 17:00</td>\r
</tr>\r
<tr>\r
<td style="width: 17.5878%;">12/03</td>\r
<td style="width: 82.3838%;">10:00 ~ 16:00</td>\r
</tr>\r
</tbody>\r
</table>\r
</td>\r
</tr>\r
<tr>\r
<td style="width: 12.3521%;" valign="top"><strong>\u5C55\u6703\u5730\u9EDE\uFF1A</strong></td>\r
<td style="width: 90.0431%;" colspan="3">\u5927\u962A\u570B\u969B\u6703\u5C55\u4E2D\u5FC3 INTEX OSAKA<br>(\u5927\u962A\u5E02\u4F4F\u4E4B\u6C5F\u5340\u5357\u6E2F\u53171-5-102\uFF0C\u90F5\u7DE8\uFF1A559-0034 )</td>\r
</tr>\r
<tr>\r
<td style="width: 12.3521%;" valign="top"><strong>\u4E3B\u8FA6\u55AE\u4F4D:</strong></td>\r
<td style="width: 90.0431%;" colspan="3">\u4E00\u822C\u793E\u5718\u6CD5\u4EBA\u65E5\u672C\u7E2B\u88FD\u6A5F\u68B0\u5DE5\u696D\u6703</td>\r
</tr>\r
<tr>\r
<td style="width: 12.3521%;" valign="middle"><strong>\u5B98\u65B9\u7DB2\u9801\uFF1A</strong></td>\r
<td style="width: 90.0431%;" colspan="3"><a href="http://jiam-show.com/cn" target="_blank" rel="noopener">http://jiam-show.com/cn</a></td>\r
</tr>\r
<tr>\r
<td style="width: 12.3521%;" valign="middle"><strong>ISM \u6524\u4F4D\uFF1A</strong></td>\r
<td style="width: 87.6479%;" valign="middle" width="139">HALL :4,STAND:4-C101</td>\r
</tr>\r
</tbody>\r
</table>`,Ns_Title_en:"2022 Exhibition",Ns_Content_en:`<p>Japan Int'l Apparel Machinery &amp; Textile Industry Trade Show 2022 (JIAM 2022 OSAKA)</p>\r
<table style="height: 207.687px;" border="0" width="100%" cellspacing="0">\r
<tbody>\r
<tr style="height: 95.7344px;">\r
<td style="width: 43.6451%; height: 95.7344px;" valign="top" width="88"><strong>EXHIBIT DATE:</strong></td>\r
<td style="width: 112.642%; height: 95.7344px;" colspan="3">4 days, from November 30 &ndash; December 03, 2022\r
<table border="0" width="100%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td style="width: 24.1582%;" width="80">11/30-11/02</td>\r
<td style="width: 75.7938%;">10:00 ~ 17:00</td>\r
</tr>\r
<tr>\r
<td style="width: 24.1582%;">12/03</td>\r
<td style="width: 75.7938%;">10:00 ~ 16:00</td>\r
</tr>\r
</tbody>\r
</table>\r
</td>\r
</tr>\r
<tr style="height: 44.7812px;">\r
<td style="width: 43.6451%; height: 44.7812px;" valign="top"><strong>VENUE\uFF1A</strong></td>\r
<td style="width: 112.642%; height: 44.7812px;" colspan="3">INTEX OSAKA<br>(1-5-102 Nanko-kita, Suminoe-ku, Osaka 559-0034, Japan )</td>\r
</tr>\r
<tr style="height: 22.3906px;">\r
<td style="width: 43.6451%; height: 22.3906px;" valign="top"><strong>ORGANIZERS:</strong></td>\r
<td style="width: 112.642%; height: 22.3906px;" colspan="3">Janpan Sewing Machinery Manfacturers Association</td>\r
</tr>\r
<tr style="height: 22.3906px;">\r
<td style="width: 43.6451%; height: 22.3906px;" valign="middle"><strong>WebSite\uFF1A</strong></td>\r
<td style="width: 112.642%; height: 22.3906px;" colspan="3"><a href="http://jiam-show.com/en" target="_blank" rel="noopener">http://jiam-show.com/en</a></td>\r
</tr>\r
<tr style="height: 22.3906px;">\r
<td style="width: 43.6451%; height: 22.3906px;" valign="middle"><strong>ISM Stand\uFF1A</strong></td>\r
<td style="width: 56.3549%; height: 22.3906px;" valign="middle" width="139">HALL :4,STAND:4-C101</td>\r
</tr>\r
</tbody>\r
</table>`,Ns_Sort:"1",Ns_Visible:"1",Ns_Pic:null,created_at:"2023-05-24 11:59:36",updated_at:"2023-08-28 15:35:52"}],banner:[{BI_ID:"1",BI_Title_zh:"",BI_Content_zh:"",BI_Title_en:"",BI_Content_en:"",BI_Sort:"1",BI_Visible:"1",BI_Pic:"Banner_64ec49cea74d7.jpg",created_at:"2023-08-10 16:22:54",updated_at:"2023-08-28 15:27:39"},{BI_ID:"2",BI_Title_zh:"\u516C\u53F8\u6B77\u53F2",BI_Content_zh:`<p class="style6" style="text-align: center;">2008\u5E74\u3002<br>\u9664\u6301\u7E8C\u7ACB\u57FA\u65BC\u5DE5\u696D\u7528\u91DD\u8ECA(\u7E2B\u7D09\u6A5F)\u99AC\u9054\u5916\uFF0C</p>\r
<p class="style6" style="text-align: center;">\u5C07\u958B\u767C\u4F3A\u670D\u99AC\u9054\u61C9\u7528\u65BC\u5176\u5B83\u9818\u57DF\uFF0C\u8207\u66F4\u5EE3\u5927\u4E4B\u5BA2\u6236\u5171\u5B58\u5171\u69AE\u3002</p>\r
<p class="style6" style="text-align: center;">&nbsp;</p>\r
<p class="style6" style="text-align: center;">2007\u5E74\u3002<br>\u63A8\u51FA\u4E4B\u65B0\u4E00\u4EE3\u4F3A\u670D\u99AC\u9054\u53CA\u63A7\u5236\u5668\uFF0C\u5176\u9020\u578B\u985B\u8986\u50B3\u7D71\u5DE5\u696D\u7528\u4E4B\u6B64\u985E\u7522\u54C1\u7684\u5446\u677F\u9020\u578B\uFF0C</p>\r
<p class="style6" style="text-align: center;">\u4EE4\u4F7F\u7528\u8005\u6709\u8033\u76EE\u4E00\u65B0\u7684\u611F\u89BA\u3002\u4EA6\u671F\u5F85\u4F7F\u7528\u8005\u6709\u66F4\u6109\u6085\u7684\u5FC3\u60C5\uFF0C</p>\r
<p class="style6" style="text-align: center;">\u4EAB\u53D7\u672C\u516C\u53F8\u7522\u54C1\u63D0\u4F9B\u4E4B\u670D\u52D9\u3002\u4E14\u56E0\u8F15\u5DE7\u4E4B\u99AC\u9054\u8A2D\u8A08\uFF0C\u53EF\u6709\u5404\u7A2E\u4E0D\u540C\u7684\u5B89\u88DD\u8207\u904B\u7528\u3002</p>`,BI_Title_en:"Company History",BI_Content_en:`<p style="text-align: center;">2000, we used stator technology, completed the smallest Servo Motor,</p>\r
<p style="text-align: center;">developing the trend of built-in motors of the next generation.</p>\r
<p style="text-align: center;"><br>1999, our company net worth broke all time high,</p>\r
<p style="text-align: center;">we became the world's largest manufacturer of industrial sewing machine motor.</p>`,BI_Sort:"2",BI_Visible:"1",BI_Pic:"Banner_64ec4a77f2b7b.jpg",created_at:"2023-08-11 15:49:35",updated_at:"2023-09-14 14:06:56"}],products:[{p_id:"1",c_id:"5",title:"SV-870",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u7BC0\u80FD\u4F3A\u670D\u99AC\u9054</strong></p>\r
<p><strong>1. \u7D93\u6FDF/\u4F4E\u6210\u672C\u4F3A\u670D\u99AC\u9054\u3002<br>2. \u8F15\u91CF\u5316\u8A2D\u8A08\uFF0C\u63A7\u5236\u7BB1\u6700\u5C0F\u5316\u3002<br>3. \u76F8\u5BB9\u6027\u9AD8\uFF0C\u53EF\u642D\u914D\u5404\u578B\u91DD\u8ECA\u3002</strong></p>`,en_content:`<p><strong>Energy Saving Servo Motor for&nbsp;Industrial Sewing Machine</strong></p>\r
<p><strong>1. Economy/Low cost servo motor<br>2. Control box size minimized &amp; weight reduced.<br>3. Compatible for Direct drive and belt type For sewing machine.</strong></p>`,zh_spec:`<table border="1" width="85%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td valign="top" width="32%">\r
<p><span class="p12-2">\u898F\u683C</span></p>\r
</td>\r
<td align="center" valign="middle" width="34%">\r
<p><span class="p12-2">SV-870</span></p>\r
</td>\r
<td align="center" valign="middle" width="34%"><span class="p12-2">SV-870 D.D</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u8F38\u5165\u96FB\u58D3</span></td>\r
<td align="center" valign="middle"><span class="p12-2">1&psi;, AC 200~240V</span></td>\r
<td align="center" valign="middle"><span class="p12-2">1&psi;, AC 200~240V</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">LED \u96FB\u6E90\u8F38\u51FA(DC12V)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u99AC\u9054\u9078\u9805</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Belt type motor</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Direct drive motor</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u99AC\u9054\u984D\u5B9A\u529F\u7387</span></td>\r
<td align="center" valign="middle"><span class="p12-2">450/550/ 650W</span></td>\r
<td align="center" valign="middle"><span class="p12-2">450/500/550/ 650W</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u99AC\u9054\u984D\u5B9A\u8F49\u901F</span></td>\r
<td align="center" valign="middle"><span class="p12-2">3500/5000 rpm</span></td>\r
<td align="center" valign="middle"><span class="p12-2">4200/6000/7000 rpm</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u4E0A/\u4E0B\u505C\u91DD\u63A7\u5236</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u6700\u9AD8\u8F49\u901F\u8A2D\u5B9A</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u6162\u901F\u555F\u52D5</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u5207\u7DDA\u5F8C\u53CD\u8F49</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u4E00\u767C\u8457\u91DD\u529F\u80FD (\u5FEB\u901F\u5B9A\u4F4D\u505C)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u8A3A\u65B7\u6A21\u5F0F (\u6AA2\u67E5\u8F38\u51FA/\u8F38\u5165\u72C0\u614B)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u6545\u969C\u932F\u8AA4\u8A18\u9304 (\u524D6\u6B21)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u9023\u7D50\u7ACB\u5F0F\u8E0F\u677F (PK-71, PK-81)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u9023\u7D50\u9078\u91DD\u76D2(C-12)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
<td align="center" valign="middle"><span class="p12-2">v</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u8F38\u5165\u63A5\u9EDE\u6578(\u53EF\u4F9D\u9700\u6C42\u8A2D\u5B9A)</span></td>\r
<td class="p12-2" align="center" valign="middle">5</td>\r
<td align="center" valign="middle"><span class="p12-2">5</span></td>\r
</tr>\r
<tr>\r
<td valign="top"><span class="p12-2">\u8F38\u51FA\u63A5\u9EDE\u6578 (\u53EF\u4F9D\u9700\u6C42\u8A2D\u5B9A)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">4</span></td>\r
<td align="center" valign="middle"><span class="p12-2">4</span></td>\r
</tr>\r
</tbody>\r
</table>\r
<p>&nbsp;</p>`,en_spec:`<table border="1" width="85%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td valign="top" width="54%">\r
<p>SPECIFICATION \u898F\u683C</p>\r
</td>\r
<td align="center" valign="middle" width="23%">\r
<p>SV-870</p>\r
</td>\r
<td align="center" valign="middle" width="23%">SV-870 D.D</td>\r
</tr>\r
<tr>\r
<td valign="top">Input Power Voltage</td>\r
<td align="center" valign="middle">1&psi;, AC 200~240V</td>\r
<td align="center" valign="middle">1&psi;, AC 200~240V</td>\r
</tr>\r
<tr>\r
<td valign="top">External LED Output(DC12V)</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">Motor Type</td>\r
<td align="center" valign="middle">Belt type motor</td>\r
<td align="center" valign="middle">Direct drive motor</td>\r
</tr>\r
<tr>\r
<td valign="top">Motor Rated Output Power</td>\r
<td align="center" valign="middle">450/550/ 650W</td>\r
<td align="center" valign="middle">450/500/550/ 650W</td>\r
</tr>\r
<tr>\r
<td valign="top">Motor Rated Speed</td>\r
<td align="center" valign="middle">3500/5000 rpm</td>\r
<td align="center" valign="middle">4200/6000/7000 rpm</td>\r
</tr>\r
<tr>\r
<td valign="top">Needle Up/Down</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">Max. Speed Setting</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">Soft Start</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">Reverse After Thread Trimming</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">One Shot Positioning (Fast Positioning)</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">Diagnostic Mode (Inspect I/O Condition)</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">ERROR History Mode (Record Previous 6 Times)</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">Connect Standing Operation Pedals (PK-71, PK-81)</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">Connect External Operation Panel(C12)</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">Input Ports No.(Accroding to requirements)</td>\r
<td align="center" valign="middle">5</td>\r
<td align="center" valign="middle">5</td>\r
</tr>\r
<tr>\r
<td valign="top">Output Ports No. (Accroding to requirements)</td>\r
<td align="center" valign="middle">4</td>\r
<td align="center" valign="middle">4</td>\r
</tr>\r
</tbody>\r
</table>`,sort:"3",visibility:"1",new:"0",hot:"0",recommend:"1",pic1:"Products_64d5e1e998fdf.jpg",pic2:"",pic3:"",file1:"Products_64ebecb4a60a6.pdf",created_at:"2023-07-24 15:12:20",updated_at:"2023-08-28 09:13:37"},{p_id:"2",c_id:"5",title:"CF-55",zh_content:`<h1><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u7BC0\u80FD\u4F3A\u670D\u99AC\u9054</strong></h1>\r
<ul>\r
<li>1. \u9069\u7528\u5404\u7A2E\u5DE5\u696D\u91DD\u8ECA\u76F4\u9A45\u5F0F\u99AC\u9054\u3002</li>\r
<li>2. \u9AD8\u6548\u80FD\uFF0C\u4F4E\u8017\u96FB\u3002</li>\r
<li>3. \u5B89\u88DD\u7C21\u6613\uFF0C\u53EF\u642D\u914D\u5404\u578B\u91DD\u8ECA\u3002</li>\r
<li>4. \u64CD\u4F5C\u53CB\u5584\u53EF\u5916\u63A5\u63A7\u5236\u9762\u677F\u3002</li>\r
<li>5. \u81EA\u52D5\u62AC\u58D3\u8173\u3002</li>\r
<li>6. \u4E8C\u4F4D\u5143\u6578\u4F4D\u986F\u793A\uFF0C\u63D0\u4F9B\u591A\u9805\u53C3\u6578\u8A2D\u5B9A\u3002</li>\r
<li>7. \u53EF\u7528ISM\u4F3A\u670D\u99AC\u9054\u9A45\u52D5\u3002</li>\r
</ul>`,en_content:`<h1><strong>Energy Saving Servo Motor&nbsp;Industrial Sewing Machine</strong></h1>\r
<ul>\r
<li>1. Compatibe for Direct drive Motor.</li>\r
<li>2. Easy Installaton.</li>\r
<li>3. Air Consuption Saving.</li>\r
<li>4. Knife saving by sensor control.</li>\r
<li>5. User friendly with external panel.</li>\r
<li>6. Auto foot lifter.</li>\r
<li>7. ISM Servo Motor drive</li>\r
</ul>`,zh_spec:`<table align="center" border="1" cellpadding="0" cellspacing="0" style="width:74%">\r
	<tbody>\r
		<tr>\r
			<td colspan="5" style="vertical-align:middle">\u898F\u683C\u8868</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">&nbsp;</td>\r
			<td colspan="3" style="vertical-align:middle">\u6A5F\u578B</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\u898F\u683C</td>\r
			<td style="vertical-align:middle">CF-55-2</td>\r
			<td style="vertical-align:middle">CF-55-3</td>\r
			<td style="vertical-align:middle">CF-55-4</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\u8F38\u5165\u96FB\u58D3</td>\r
			<td colspan="3" style="vertical-align:middle">1&psi;: AC200~240V</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\u99AC\u9054\u984D\u5B9A\u51FA\u529B</td>\r
			<td colspan="3" style="vertical-align:middle">550W</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\u99AC\u9054\u984D\u5B9A\u8F49\u901F</td>\r
			<td style="vertical-align:middle">5000RPM</td>\r
			<td style="vertical-align:middle">3500RPM</td>\r
			<td style="vertical-align:middle">3500RPM</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\r
			<p>ELED\u96FB\u6E90\u8F38\u51FA(DC12V,AV Power)</p>\r
			</td>\r
			<td colspan="3" style="vertical-align:middle">Y</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\u8A3A\u65B7\u6A21\u5F0F(\u6AA2\u67E5\u8F38\u51FA / \u6AA2\u67E5\u8F38\u5165)</td>\r
			<td colspan="3" style="vertical-align:middle">Y</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\u9023\u7D50\u7ACB\u5F0F\u8E0F\u677F(PK-71,PK-81)</td>\r
			<td colspan="3" style="vertical-align:middle">Y (\u9078\u914D)</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\u9023\u7D50\u9078\u91DD\u76D2(C-21)</td>\r
			<td colspan="3" style="vertical-align:middle">Y (\u9078\u914D)</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\u8F38\u5165\u63A5\u9EDE\u6578(\u53EF\u4F9D\u9700\u6C42\u8A2D\u5B9A)</td>\r
			<td style="vertical-align:middle">2</td>\r
			<td style="vertical-align:middle">3</td>\r
			<td style="vertical-align:middle">4</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\u8F38\u51FA\u63A5\u9EDE\u6578(\u53EF\u4F9D\u9700\u6C42\u8A2D\u5B9A)</td>\r
			<td style="vertical-align:middle">2</td>\r
			<td style="vertical-align:middle">3</td>\r
			<td style="vertical-align:middle">4</td>\r
		</tr>\r
	</tbody>\r
</table>\r
`,en_spec:`<table align="center" border="1" cellpadding="0" cellspacing="0" style="width:74%">\r
	<tbody>\r
		<tr>\r
			<td colspan="5" style="vertical-align:middle">SPECIFICATION</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">&nbsp;</td>\r
			<td colspan="3" style="vertical-align:middle">Model</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">FUNCTION</td>\r
			<td style="vertical-align:middle">CF-55-2</td>\r
			<td style="vertical-align:middle">CF-55-3</td>\r
			<td style="vertical-align:middle">CF-55-4</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">Input Voltage Range</td>\r
			<td colspan="3" style="vertical-align:middle">1&psi;: AC200~240V</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">Motor Output Power</td>\r
			<td colspan="3" style="vertical-align:middle">550W</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">Motor Rated Speed</td>\r
			<td style="vertical-align:middle">5000RPM</td>\r
			<td style="vertical-align:middle">3500RPM</td>\r
			<td style="vertical-align:middle">3500RPM</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">\r
			<p>External LED Output (DC12V,AC Power)</p>\r
			</td>\r
			<td colspan="3" style="vertical-align:middle">Y</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">Diagnostic Mode</td>\r
			<td colspan="3" style="vertical-align:middle">Y</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">Connect Standing Operation Pedals (PK-71,PK-81)</td>\r
			<td colspan="3" style="vertical-align:middle">Y (Option)</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">Connect External Operation Panel (C-21)</td>\r
			<td colspan="3" style="vertical-align:middle">Y (Option)</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">Input Ports No.</td>\r
			<td style="vertical-align:middle">2</td>\r
			<td style="vertical-align:middle">3</td>\r
			<td style="vertical-align:middle">4</td>\r
		</tr>\r
		<tr>\r
			<td style="vertical-align:middle">Output Ports No.</td>\r
			<td style="vertical-align:middle">2</td>\r
			<td style="vertical-align:middle">3</td>\r
			<td style="vertical-align:middle">4</td>\r
		</tr>\r
	</tbody>\r
</table>\r
`,sort:"1",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64d5dcde0dae9.jpg",pic2:"",pic3:"",file1:"Products_64ebec67161ce.pdf",created_at:"2023-07-24 15:12:20",updated_at:"2023-08-28 09:01:56"},{p_id:"5",c_id:"7",title:"C-28 Series",zh_content:`<p><strong>\u6578\u64DA\u64F7\u53D6\u50B3\u8F38\u76D2</strong></p>\r
<p>1.\u7522\u7DDA\u7BA1\u7406<br>2.\u5373\u6642\u751F\u7522\u9032\u5EA6<br>3.\u751F\u7522\u7D71\u8A08<br>4.\u8A2D\u5099\u7BA1\u7406<br>5.\u8A2D\u5099\u6574\u5408</p>`,en_content:`<p><strong>DATA CAPTURE BOX</strong></p>\r
<p>1. Production Line Management.<br>2. Real Time Display.<br>3. Production Statistics.<br>4. Equipment Management.<br>5. Equipment Integration.</p>`,zh_spec:`<p><img src="data:image/jpeg;base64,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"></p>\r
<p>&nbsp;</p>\r
<p><img src="data:image/jpeg;base64,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"></p>`,en_spec:`<p><img src="data:image/jpeg;base64,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"></p>\r
<p>&nbsp;</p>\r
<p>&nbsp;</p>\r
<p><img src="data:image/jpeg;base64,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"></p>`,sort:"15",visibility:"1",new:"1",hot:"1",recommend:"1",pic1:"Products_64d5e269e3124.jpg",pic2:"",pic3:"",file1:"Products_64ebec72f2cc5.pdf",created_at:"2023-08-10 14:12:27",updated_at:"2023-08-29 15:01:11"},{p_id:"6",c_id:"5",title:"CB",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u7BC0\u80FD\u4F3A\u670D\u99AC\u9054</strong></p>\r
<p><strong>1. \u8F15\u9B06\u53D6\u4EE3\u50B3\u7D71\u96E2\u5408\u5668\u99AC\u9054\u3002<br>2. \u9AD8\u6548\u80FD\uFF0C\u4F4E\u8017\u96FB\u3002<br>3. \u7C21\u6613\u64CD\u4F5C\u76F8\u5BB9\u6027\u9AD8\uFF0C\u53EF\u642D\u914D\u5404\u578B\u91DD\u8ECA\u3002<br>4. \u9AD4\u7A4D\u5C0F\uFF0C\u8F15\u91CD\u91CF\u3002<br>5. \u99AC\u9054\u904E\u96FB\u6D41\u4FDD\u8B77\u8207\u96FB\u6E90\u9AD8\u4F4E\u58D3\u9694\u96E2\uFF0C\u64CD\u4F5C\u4E0A\u66F4\u5B89\u5168\u3002<br>6. \u4E8C\u4F4D\u5143\u6578\u4F4D\u986F\u793A\uFF0C\u63D0\u4F9B\u591A\u9805\u53C3\u6578\u8A2D\u5B9A\u3002<br>7. \u53EF\u9078\u914D\u540C\u6B69\u5668\uFF0C\u63D0\u4F9B\u5B9A\u91DD\u6A21\u5F0F\u3002</strong></p>`,en_content:`<p><strong>Energy Saving Servo Motor&nbsp;Industrial Sewing Machine</strong></p>\r
<p><strong>1. Simple upgrade form clutch motor.<br>2. High efficency.<br>3. Easy operation.<br>4. Smaller size, and lighter weight.<br>5. High/Low voltage isolation for safer operation.<br>6. 2 Digital Display provides flexible function control.<br>7. Synchronizer can be used for needle positioning.</strong></p>`,zh_spec:`<table border="1" width="77%" cellspacing="0" cellpadding="0" align="center">\r
<tbody>\r
<tr>\r
<td colspan="8" align="center" valign="middle">\r
<pre><span class="p12-2">\u898F\u683C\u8868</span></pre>\r
</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="center" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>\r
<td colspan="5" align="center" valign="middle" bgcolor="#FFFFFF"><span class="p12-2">\u6A5F\u578B</span></td>\r
</tr>\r
<tr>\r
<td colspan="2" align="center" valign="middle"><span class="p12-2">\u898F\u683C</span></td>\r
<td align="center" valign="middle" width="17%"><span class="p12-2">CB-45</span></td>\r
<td align="center" valign="middle" width="17%"><span class="p12-2">CB-55</span></td>\r
<td align="center" valign="middle" width="17%"><span class="p12-2">CB-65</span></td>\r
<td align="center" valign="middle" width="17%"><span class="p12-2">CB-70</span></td>\r
<td align="center" valign="middle" width="16%"><span class="p12-2">CB-75</span></td>\r
</tr>\r
<tr>\r
<td rowspan="2" align="left" valign="middle" width="5%"><span class="p12-2">\u8F38\u5165\u96FB\u58D3</span></td>\r
<td class="p12-2" align="left" valign="middle" width="11%">\u55AE\u96FB\u58D3</td>\r
<td colspan="5" align="center" valign="middle"><span class="p12-2">1&psi;: AC200~240V</span></td>\r
</tr>\r
<tr>\r
<td class="p12-2" align="left" valign="middle">\u96D9\u96FB\u58D3</td>\r
<td colspan="5" align="center" valign="middle"><span class="p12-2">1&psi;: AC100~120V / AC200~240V</span></td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle"><span class="p12-2">\u99AC\u9054\u984D\u5B9A\u51FA\u529B</span></td>\r
<td align="center" valign="middle"><span class="p12-2">450W</span></td>\r
<td align="center" valign="middle"><span class="p12-2">550W</span></td>\r
<td align="center" valign="middle"><span class="p12-2">600W</span></td>\r
<td align="center" valign="middle"><span class="p12-2">700W</span></td>\r
<td align="center" valign="middle"><span class="p12-2">750W</span></td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle"><span class="p12-2">\u99AC\u9054\u984D\u5B9A\u8F49\u901F</span></td>\r
<td align="center" valign="middle"><span class="p12-2">5000RPM</span></td>\r
<td align="center" valign="middle"><span class="p12-2">4000RPM</span></td>\r
<td align="center" valign="middle"><span class="p12-2">3000RPM</span></td>\r
<td align="center" valign="middle"><span class="p12-2">4000RPM</span></td>\r
<td align="center" valign="middle"><span class="p12-2">3500RPM</span></td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle"><span class="p12-2">\u4E0A/\u4E0B\u505C\u91DD\u63A7\u5236</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle"><span class="p12-2">\u6700\u9AD8\u901F\u8A2D\u5B9A</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle"><span class="p12-2">\u6B63\u53CD\u8F49\u63A7\u5236</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle"><span class="p12-2">\u6162\u901F\u555F\u52D5</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle"><span class="p12-2">\u52A0\u901F\u66F2\u7DDA</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle"><span class="p12-2">\u6E1B\u901F\u66F2\u7DDA</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
</tbody>\r
</table>`,en_spec:`<table border="1" width="75%" cellspacing="0" cellpadding="0" align="center">\r
<tbody>\r
<tr>\r
<td colspan="8" align="center" valign="middle">SPECIFICATION</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="center" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>\r
<td colspan="5" align="center" valign="middle" bgcolor="#FFFFFF">Model</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="center" valign="middle">FUNCTION</td>\r
<td align="center" valign="middle" width="14%">CB-45</td>\r
<td align="center" valign="middle" width="15%">CB-55</td>\r
<td align="center" valign="middle" width="15%">CB-65</td>\r
<td align="center" valign="middle" width="15%">CB-70</td>\r
<td align="center" valign="middle" width="15%">CB-75</td>\r
</tr>\r
<tr>\r
<td rowspan="2" align="left" valign="middle" width="13%">Input Voltage Range</td>\r
<td align="left" valign="middle">Singel Voltage</td>\r
<td colspan="5" align="center" valign="middle">1&psi;, AC200~240V</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="13%">Dual Voltage</td>\r
<td colspan="5" align="center" valign="middle">1&psi;, AC100~120V / AC200~240V</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle">Motor Output Power</td>\r
<td align="center" valign="middle">450W</td>\r
<td align="center" valign="middle">550W</td>\r
<td align="center" valign="middle">600W</td>\r
<td align="center" valign="middle">700W</td>\r
<td align="center" valign="middle">750W</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle">Motor Rated Speed</td>\r
<td align="center" valign="middle">5000RPM</td>\r
<td align="center" valign="middle">4000RPM</td>\r
<td align="center" valign="middle">3000RPM</td>\r
<td align="center" valign="middle">4000RPM</td>\r
<td align="center" valign="middle">3500RPM</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle">Needle up/down positioning</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle">Max. Speed control</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle">Motor Rotating Direction Control</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle">Soft start</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle">Acclerating slope</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td colspan="2" align="left" valign="middle">Decelerating slope</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
</tbody>\r
</table>`,sort:"2",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ebf2fdbb924.jpg",pic2:"",pic3:"",file1:"Products_64ebf2fdbbb03.pdf",created_at:"2023-08-28 09:05:14",updated_at:"2023-08-28 09:06:05"},{p_id:"7",c_id:"5",title:"SV-860",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u4F3A\u670D\u99AC\u9054</strong></p>\r
<p><strong>1. \u7D93\u6FDF/\u4F4E\u6210\u672C\u4F3A\u670D\u99AC\u9054\u3002<br>2. \u8F15\u91CF\u5316\u8A2D\u8A08\uFF0C\u63A7\u5236\u7BB1\u6700\u5C0F\u5316\u3002<br>3. \u76F8\u5BB9\u6027\u9AD8\uFF0C\u53EF\u642D\u914D\u5404\u578B\u91DD\u8ECA\u3002</strong></p>`,en_content:`<p><strong>Servo Motor for&nbsp;Industrial Sewing Machine</strong></p>\r
<p><strong>1. Economy/Low cost servo motor<br>2. Control box size minimized &amp; weight reduced.<br>3. Compatible with many type of sewing machine.</strong></p>`,zh_spec:`<table class="p12-2" border="1" width="85%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td valign="top" width="55%">\r
<p>\u6A5F\u80FD</p>\r
</td>\r
<td align="center" valign="middle" width="22%">\r
<p>SV-860A</p>\r
</td>\r
<td align="center" valign="middle" width="23%">\r
<p>SV-860E</p>\r
</td>\r
</tr>\r
<tr>\r
<td valign="top">1.\u8F38\u5165\u96FB\u58D3</td>\r
<td colspan="2" align="center" valign="middle">1&psi;, AC 200~240V</td>\r
</tr>\r
<tr>\r
<td valign="top">2.\u99AC\u9054\u984D\u5B9A\u51FA\u529B</td>\r
<td colspan="2" align="center" valign="middle">350W ~ 650W</td>\r
</tr>\r
<tr>\r
<td valign="top">3.\u99AC\u9054\u984D\u5B9A\u8F49\u901F</td>\r
<td colspan="2" align="center" valign="middle">3500~8500 rpm</td>\r
</tr>\r
<tr>\r
<td valign="top">4. LED\u96FB\u6E90\u8F38\u51FA(DC12V)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">5.\u4E0A/\u4E0B\u505C\u91DD\u63A7\u5236</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">6.\u6700\u9AD8\u901F\u8A2D\u5B9A</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">7.\u6162\u901F\u555F\u52D5</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">8.\u5207\u7DDA\u5F8C\u53CD\u8F49</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">9.\u4E00\u767C\u8457\u91DD\u529F\u80FD (\u5FEB\u901F\u5B9A\u4F4D\u505C)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">10.\u8A3A\u65B7\u6A21\u5F0F (\u6AA2\u67E5\u8F38\u51FA/\u8F38\u5165\u72C0\u614B)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">11.\u6545\u969C\u932F\u8AA4\u8A18\u9304 (\u524D 6 \u6B21)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">12.\u9023\u7D50\u7ACB\u5F0F\u8E0F\u677F (PK-71, PK-81)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">13.\u9023\u7D50\u9078\u91DD\u76D2(C18)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">14.\u9023\u7D50\u96FB\u5B50\u624B\u8F2A</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">15.\u5167\u5EFA\u7A7F\u900F\u5F0F\u611F\u61C9\u5668\u96FB\u8DEF</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">None</td>\r
</tr>\r
<tr>\r
<td valign="top">16.\u8F38\u5165\u63A5\u9EDE\u6578(\u53EF\u4F9D\u9700\u6C42\u8A2D\u5B9A)</td>\r
<td align="center" valign="middle">5</td>\r
<td align="center" valign="middle">5</td>\r
</tr>\r
<tr>\r
<td valign="top">17.\u8F38\u51FA\u63A5\u9EDE\u6578(\u53EF\u4F9D\u9700\u6C42\u8A2D\u5B9A)</td>\r
<td align="center" valign="middle">5</td>\r
<td align="center" valign="middle">4</td>\r
</tr>\r
<tr>\r
<td valign="top">1)\u6C23\u52D5\u7528, DC24V / 100mA</td>\r
<td align="center" valign="middle">5</td>\r
<td align="center" valign="middle">3</td>\r
</tr>\r
<tr>\r
<td valign="top">2)\u96FB\u78C1\u7528, DC24V / 9A / 100ms</td>\r
<td align="center" valign="middle">5</td>\r
<td align="center" valign="middle">1</td>\r
</tr>\r
</tbody>\r
</table>`,en_spec:`<table border="1" width="85%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td valign="top" width="55%">\r
<p>SPECIFICATION \u898F\u683C</p>\r
</td>\r
<td align="center" valign="middle" width="24%">\r
<p>SV-860A</p>\r
</td>\r
<td align="center" valign="middle">\r
<p>SV-860E</p>\r
</td>\r
</tr>\r
<tr>\r
<td valign="top">1.Input Power Voltage</td>\r
<td colspan="2" align="center" valign="middle">1&psi;, AC 200~240V</td>\r
</tr>\r
<tr>\r
<td valign="top">2.Motor Rated Output Power</td>\r
<td colspan="2" align="center" valign="middle">350W ~ 650W</td>\r
</tr>\r
<tr>\r
<td valign="top">3.Motor Rated Speed</td>\r
<td colspan="2" align="center" valign="middle">3500~7000 rpm</td>\r
</tr>\r
<tr>\r
<td valign="top">4.External LED Output(DC12V)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">5.Needle Up/Down</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">6.Max. Speed Setting</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">7.Soft Start</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">8.Reverse After Thread Trimming</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">9.One Shot Positioning (Fast Positioning)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">10.Diagnostic Mode (Inspect I/O Condition)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">11.ERROR History Mode (Record Previous 6 Times)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">12.Connect Standing Operation Pedals (PK-71, PK-81)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">13.Connect External Operation Panel(C18)</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">14.Connect Manual Pulse Generator</td>\r
<td colspan="2" align="center" valign="middle">v</td>\r
</tr>\r
<tr>\r
<td valign="top">15.Built-in transmissive sensor circuit</td>\r
<td align="center" valign="middle">v</td>\r
<td align="center" valign="middle">None</td>\r
</tr>\r
<tr>\r
<td valign="top">16.Input Ports No.(Accroding to requirements)</td>\r
<td align="center" valign="middle">5</td>\r
<td align="center" valign="middle">5</td>\r
</tr>\r
<tr>\r
<td valign="top">17.Output Ports No. (Accroding to requirements)</td>\r
<td align="center" valign="middle">5</td>\r
<td align="center" valign="middle">4</td>\r
</tr>\r
<tr>\r
<td valign="top">1)For Cylinder, DC24V / 100mA</td>\r
<td align="center" valign="middle">5</td>\r
<td align="center" valign="middle">3</td>\r
</tr>\r
<tr>\r
<td valign="top">2)For Solenoid, DC24V / 9A / 100ms</td>\r
<td align="center" valign="middle">5</td>\r
<td align="center" valign="middle">1</td>\r
</tr>\r
</tbody>\r
</table>`,sort:"4",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ebf4292cf18.jpg",pic2:"",pic3:"",file1:"Products_64ebf4292d102.pdf",created_at:"2023-08-28 09:10:15",updated_at:"2023-08-28 09:11:05"},{p_id:"8",c_id:"5",title:"SV-71S/72",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u7BC0\u80FD\u4F3A\u670D\u99AC\u9054</strong></p>\r
<p><strong>1. \u8F15\u9B06\u53D6\u4EE3\u50B3\u7D71\u96E2\u5408\u5668\u99AC\u9054\u3002<br>2. \u9AD8\u6548\u80FD\uFF0C\u4F4E\u8017\u96FB\u3002<br>3. \u7C21\u6613\u64CD\u4F5C\u76F8\u5BB9\u6027\u9AD8\uFF0C\u53EF\u642D\u914D\u5404\u578B\u91DD\u8ECA\u3002<br>4. \u9AD4\u7A4D\u5C0F\uFF0C\u8F15\u91CD\u91CF\u3002<br>5. \u99AC\u9054\u904E\u96FB\u6D41\u4FDD\u8B77\u8207\u96FB\u6E90\u9AD8\u4F4E\u58D3\u9694\u96E2\uFF0C\u64CD\u4F5C\u4E0A\u66F4\u5B89\u5168\u3002<br>6. \u4E8C\u4F4D\u5143\u6578\u4F4D\u986F\u793A\uFF0C\u63D0\u4F9B\u591A\u9805\u53C3\u6578\u8A2D\u5B9A\u3002<br>7. \u53EF\u9078\u914D\u540C\u6B69\u5668\uFF0C\u63D0\u4F9B\u5B9A\u91DD\u6A21\u5F0F\u3002</strong></p>`,en_content:`<p><strong>Energy Saving Servo Motor for&nbsp;Industrial Sewing Machine</strong></p>\r
<p><strong>1. Simple upgrade form clutch motor.<br>2. High efficency.<br>3. Easy operation.<br>4. Smaller size, and lighter weight.<br>5. High/Low voltage isolation for safer operation.<br>6. 2 Digital Display provides flexible function control.<br>7. Synchronizer can be used for needle positioning.</strong></p>`,zh_spec:`<table border="1" width="77%" cellspacing="0" cellpadding="0" align="center">\r
<tbody>\r
<tr>\r
<td colspan="6" align="center" valign="middle"><span class="p12-2">\u898F\u683C\u8868SPECIFICATION</span></td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>\r
<td colspan="4" align="center" valign="middle" bgcolor="#FFFFFF"><span class="p12-2">\u578B\u865FModel</span></td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" bgcolor="#FFFFFF" width="24%"><span class="p12-2">\u898F\u683C</span></td>\r
<td align="center" valign="middle" bgcolor="#FFFFFF"><span class="p12-2">71S</span></td>\r
<td align="center" valign="middle" bgcolor="#FFFFFF"><span class="p12-2">71S D.D</span></td>\r
<td align="center" valign="middle" bgcolor="#FFFFFF"><span class="p12-2">72</span></td>\r
<td align="center" valign="middle" bgcolor="#FFFFFF"><span class="p12-2">72 D.D</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u8F38\u5165\u96FB\u58D3</span></td>\r
<td align="center" valign="middle" width="19%">\r
<p><span class="p12-2">1&psi;: 110V &plusmn; 10%</span></p>\r
<p><span class="p12-2">1&psi;: 220V &plusmn; 10%</span></p>\r
</td>\r
<td align="center" valign="middle" width="19%">\r
<p><span class="p12-2">1&psi;: 110V &plusmn; 10%</span></p>\r
<p><span class="p12-2">1&psi;: 220V &plusmn; 10%</span></p>\r
</td>\r
<td align="center" valign="middle" width="19%"><span class="p12-2">1&psi;: 220V &plusmn; 10%</span></td>\r
<td align="center" valign="middle" width="19%"><span class="p12-2">1&psi;: 220V &plusmn; 10%</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u99AC\u9054\u9078\u9805</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Belt type</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Direct drive</span></td>\r
<td align="center" valign="middle"><span class="p12-2">450/550/600W</span></td>\r
<td align="center" valign="middle"><span class="p12-2">450/550/600W</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u76AE\u5E36\u8F2A\u5C3A\u5BF8</span></td>\r
<td align="center" valign="middle"><span class="p12-2">75/90/100mm</span></td>\r
<td align="center" valign="middle"><span class="p12-2">-</span></td>\r
<td align="center" valign="middle"><span class="p12-2">75/90/100mm</span></td>\r
<td align="center" valign="middle"><span class="p12-2">-</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u6B63\u53CD\u8F49\u63A7\u5236</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u4E0A/\u4E0B\u505C\u91DD\u63A7\u5236</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y(#)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y(#)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u6700\u9AD8\u901F\u8A2D\u5B9A</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u6162\u901F\u555F\u52D5</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u52A0\u901F\u66F2\u7DDA</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u6E1B\u901F\u66F2\u7DDA</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\r
<p><span class="p12-2">\u9023\u7D50\u7ACB\u5F0F\u8E0F\u677F(PK-81)</span></p>\r
</td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u9023\u7D50\u901F\u5EA6\u65CB\u9215\u958B\u95DC</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u5438\u98A8\u529F\u80FD</span></td>\r
<td align="center" valign="middle"><span class="p12-2">-</span></td>\r
<td align="center" valign="middle"><span class="p12-2">-</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u62AC\u58D3\u8173\u529F\u80FD</span></td>\r
<td align="center" valign="middle"><span class="p12-2">-</span></td>\r
<td align="center" valign="middle"><span class="p12-2">-</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u6DE8\u91CD</span></td>\r
<td align="center" valign="middle"><span class="p12-2">4.5KG</span></td>\r
<td align="center" valign="middle"><span class="p12-2">4.0KG</span></td>\r
<td align="center" valign="middle"><span class="p12-2">4.5KG</span></td>\r
<td align="center" valign="middle"><span class="p12-2">4.0KG</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u5C3A\u5BF8</span></td>\r
<td align="center" valign="middle"><span class="p12-2">26*40*30CM</span></td>\r
<td align="center" valign="middle"><span class="p12-2">26*40*30CM</span></td>\r
<td align="center" valign="middle"><span class="p12-2">26*40*30CM</span></td>\r
<td align="center" valign="middle"><span class="p12-2">26*40*30CM</span></td>\r
</tr>\r
</tbody>\r
</table>`,en_spec:`<table border="1" width="77%" cellspacing="0" cellpadding="0" align="center">\r
<tbody>\r
<tr>\r
<td colspan="6" align="center" valign="middle">SPECIFICATION</td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">&nbsp;</td>\r
<td colspan="4" align="center" valign="middle" bgcolor="#FFFFFF">Model</td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" bgcolor="#FFFFFF" width="43%">FUNCTION</td>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">71S</td>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">71S D.D</td>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">72</td>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">72 D.D</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Input Voltage Range</td>\r
<td align="center" valign="middle" width="30%">\r
<p>1&psi;: 110V &plusmn; 10%</p>\r
<p>1&psi;: 220V &plusmn; 10%</p>\r
</td>\r
<td align="center" valign="middle" width="30%">\r
<p>1&psi;: 110V &plusmn; 10%</p>\r
<p>1&psi;: 220V &plusmn; 10%</p>\r
</td>\r
<td align="center" valign="middle" width="30%">1&psi;: 220V &plusmn; 10%</td>\r
<td align="center" valign="middle" width="27%">1&psi;: 220V &plusmn; 10%</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Motor Type</td>\r
<td align="center" valign="middle">Belt type</td>\r
<td align="center" valign="middle">Direct drive</td>\r
<td align="center" valign="middle">450/550/600W</td>\r
<td align="center" valign="middle">450/550/600W</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Pulley Size Range</td>\r
<td align="center" valign="middle">75/90/100mm</td>\r
<td align="center" valign="middle">-</td>\r
<td align="center" valign="middle">75/90/100mm</td>\r
<td align="center" valign="middle">-</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Motor rotating direction control</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Needle up/down positioning</td>\r
<td align="center" valign="middle">Y(#)</td>\r
<td align="center" valign="middle">Y(#)</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Max. Speed control</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Soft start</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Acclerating slope</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Decelerating slope</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\r
<p>Connect Standing Operation Pedals(PK-81)</p>\r
</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Connect Speed control switch</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Air Suction</td>\r
<td align="center" valign="middle">-</td>\r
<td align="center" valign="middle">-</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Presser Foot Lifter</td>\r
<td align="center" valign="middle">-</td>\r
<td align="center" valign="middle">-</td>\r
<td align="center" valign="middle">Y</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Net Weights</td>\r
<td align="center" valign="middle">4.5KG</td>\r
<td align="center" valign="middle">4.0KG</td>\r
<td align="center" valign="middle">4.5KG</td>\r
<td align="center" valign="middle">4.0KG</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Dimension</td>\r
<td align="center" valign="middle">26*40*30CM</td>\r
<td align="center" valign="middle">26*40*30CM</td>\r
<td align="center" valign="middle">26*40*30CM</td>\r
<td align="center" valign="middle">26*40*30CM</td>\r
</tr>\r
</tbody>\r
</table>`,sort:"5",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ebf53e3cb48.jpg",pic2:"",pic3:"",file1:"Products_64ebf53e3cd2d.pdf",created_at:"2023-08-28 09:15:07",updated_at:"2023-08-28 09:15:42"},{p_id:"9",c_id:"5",title:"SV-82",zh_content:`<p><strong>\u5DE5\u696D\u7528\u91DD\u8ECA\u4F3A\u670D\u99AC\u9054</strong></p>\r
<p><strong>1. \u9069\u7528\u65BC\u62F7\u514B\u91DD\u8ECA\u3002<br>2. \u53EF\u642D\u914D\u5404\u578B\u91DD\u8ECA\u3002</strong></p>`,en_content:`<p><strong>Servo Motor for&nbsp;Industrial Sewing Machine</strong></p>\r
<p><strong>1.&nbsp;<span class="p12-2">Suitable for overlock sewing machine.</span><span class="p12-2"><br>2. Compatible with many type of sewing machine.</span></strong></p>`,zh_spec:`<table class="p12-2" border="1" width="75%" cellspacing="0" cellpadding="0" align="center">\r
<tbody>\r
<tr>\r
<td colspan="3" align="center" valign="middle">SV-82 \u898F\u683C</td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">\u6A5F\u80FD</td>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">\u503C</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u8F38\u5165\u96FB\u58D3</td>\r
<td align="center" valign="middle">1&psi;: 220V &plusmn; 10%</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u99AC\u9054\u51FA\u529B</td>\r
<td align="center" valign="middle">350/650W</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u99AC\u9054\u8F49\u901F</td>\r
<td align="center" valign="middle">7000/3500 RPM</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u76AE\u5E36\u8F2A\u5C3A\u5BF8\u7BC4\u570D</td>\r
<td align="center" valign="middle">65-85mm</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">LED\u7167\u660E\u96FB\u6E90(DC12V)</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u91DD\u4E0A\u4E0B\u505C\u5B9A\u4F4D</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u6700\u9AD8\u901F\u8A2D\u5B9A</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u6162\u901F\u555F\u52D5</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u76EE\u6A19\u91DD\u5B9A\u4F4D</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u5207\u7DDA\u5F8C\u53CD\u8F49</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u4E00\u767C\u8457\u91DD\u529F\u80FD(\u5FEB\u901F\u5B9A\u4F4D)</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">FET \u904E\u8F09\u4FDD\u8B77</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u8A08\u4EF6\u529F\u80FD</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u8A3A\u65B7\u6A21\u5F0F \u6AA2\u67E5\u8F38\u51FA/\u5165\u72C0\u614B</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u932F\u8AA4\u7D00\u9304\u67E5\u8A62(\u8A18\u9304\u6700\u8FD16\u6B21)</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u5E03\u7AEF\u6AA2\u51FA\u63A5\u9EDE\u6578</td>\r
<td align="center" valign="middle">2</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u8F38\u5165\u63A5\u9EDE\u6578(\u53EF\u4F9D\u5BA2\u6236\u9700\u6C42)</td>\r
<td align="center" valign="middle">8</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" height="60">\r
<p>\u8F38\u51FA\u63A5\u9EDE\u6578(\u53EF\u4F9D\u5BA2\u6236\u9700\u6C42)</p>\r
<p>\u53EA\u80FD\u63A8\u52D5Cylinder. DC24V. \u6BCF\u7D44100mA.</p>\r
</td>\r
<td align="center" valign="middle">5</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\u7ACB\u5F0F\u4E09\u8E0F\u677F(PK70/PK71)</td>\r
<td align="center" valign="middle">Option</td>\r
</tr>\r
</tbody>\r
</table>\r
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="data:image/jpeg;base64,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"></p>`,en_spec:`<table border="1" width="75%" cellspacing="0" cellpadding="0" align="center">\r
<tbody>\r
<tr>\r
<td colspan="3" align="center" valign="middle">SPECIFICATION</td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">FUNCTION</td>\r
<td valign="middle" bgcolor="#FFFFFF">Value</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Input Voltage Range</td>\r
<td align="center" valign="middle">1&psi;: 220V &plusmn; 10%</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Motor Output Power</td>\r
<td align="center" valign="middle">350/650W</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Motor Rated Speed</td>\r
<td align="center" valign="middle">7000/3500 RPM</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Pulley Size Range</td>\r
<td align="center" valign="middle">65-85mm</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">External LED Socket(DC12V)</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Needle Up/Down Positioning</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Max. Speed Adjustment</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Soft Start</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Target sitiching</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Reverse After Thread Trimming</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">One Shot Position(Fast positioning)</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">FET Over Current Protection</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Material Counter Function</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Diagnostic Mode to Inspect I/O Condition</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Error History Mode(Record Previous 6 times)</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Edge Sensor Port</td>\r
<td align="center" valign="middle">2</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Input Port(By customers requirement)</td>\r
<td align="center" valign="middle">8</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">\r
<p>Output Port(By customers requirement)</p>\r
<p>For cylinder only. DC24V/100mA for each cylinder.</p>\r
</td>\r
<td align="center" valign="middle">5</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Standing Operation Pedals(PK70/PK71)</td>\r
<td align="center" valign="middle">Option</td>\r
</tr>\r
</tbody>\r
</table>\r
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="data:image/jpeg;base64,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"></p>`,sort:"6",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ebf7be0d5a9.jpg",pic2:"",pic3:"",file1:"Products_64ebf7be0d7f0.pdf",created_at:"2023-08-28 09:25:48",updated_at:"2023-08-28 09:26:22"},{p_id:"10",c_id:"5",title:"SV-81",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u4F3A\u670D\u99AC\u9054</strong></p>\r
<p><strong>1. \u7D93\u6FDF/\u4F4E\u6210\u672C\u4F3A\u670D\u99AC\u9054\u3002<br>2. \u8F15\u91CF\u5316\u8A2D\u8A08\uFF0C\u63A7\u5236\u7BB1\u6700\u5C0F\u5316\u3002<br>3. \u76F8\u5BB9\u6027\u9AD8\uFF0C\u9069\u7528\u65BC\u5404\u578B\u91DD\u8ECA\u3002</strong></p>`,en_content:`<p><strong>Servo Motor for&nbsp;Industrial Sewing Machine</strong></p>\r
<p><strong>1. Economy/Low cost servo motor<br>2. Control box size minimized &amp; weight reduced.<br>3. Compatible with many type of sewing machine.</strong></p>`,zh_spec:`<table border="1" width="75%" cellspacing="0" cellpadding="0" align="center">\r
<tbody>\r
<tr>\r
<td colspan="3" align="center" valign="middle"><span class="p12-2">SV-81\u898F\u683C</span></td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" bgcolor="#FFFFFF"><span class="p12-2">\u6A5F\u80FD</span></td>\r
<td class="p12-2" align="center" valign="middle" bgcolor="#FFFFFF">\u503C</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u8F38\u5165\u96FB\u58D3</span></td>\r
<td align="center" valign="middle"><span class="p12-2">1&psi;: 220V &plusmn; 10%</span></td>\r
</tr>\r
<tr>\r
<td class="p12-2" align="left" valign="middle">\u99AC\u9054\u51FA\u529B</td>\r
<td align="center" valign="middle"><span class="p12-2">350~650W</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u99AC\u9054\u8F49\u901F</span></td>\r
<td align="center" valign="middle"><span class="p12-2">3500~7000 RPM</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">LED\u7167\u660E\u96FB\u6E90 (DC12V)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td class="p12-2" align="left" valign="middle">\u4E0A/\u4E0B\u505C\u91DD</td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u6700\u9AD8\u901F\u8A2D\u5B9A</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td class="p12-2" align="left" valign="middle">\u6162\u901F\u555F\u52D5</td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u4E00\u8457\u767C\u91DD\u529F\u80FD (\u5FEB\u901F\u5B9A\u4F4D\u505C)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">FET\u904E\u8F09\u4FDD\u8B77</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td class="p12-2" align="left" valign="middle">\u8F38\u5165\u63A5\u9EDE\u6578</td>\r
<td align="center" valign="middle"><span class="p12-2">4</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u8F38\u51FA\u63A5\u9EDE\u6578</span></td>\r
<td align="center" valign="middle"><span class="p12-2">3</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle"><span class="p12-2">\u7ACB\u5F0F\u4E09\u8E0F\u677F (PK-71)</span></td>\r
<td align="center" valign="middle"><span class="p12-2">Option</span></td>\r
</tr>\r
</tbody>\r
</table>`,en_spec:`<table border="1" width="75%" cellspacing="0" cellpadding="0" align="center">\r
<tbody>\r
<tr>\r
<td colspan="3" align="center" valign="middle">SPECIFICATION</td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" bgcolor="#FFFFFF">FUNCTION</td>\r
<td valign="middle" bgcolor="#FFFFFF">Value</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Input Voltage Range</td>\r
<td align="center" valign="middle">1&psi;: 220V &plusmn; 10%</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Motor Output Power</td>\r
<td align="center" valign="middle">350~650W</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Motor Rated Speed</td>\r
<td align="center" valign="middle">3500~7000 RPM</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">External LED Socket (DC12V)</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Needle Up/Down Positioning</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Max. Speed Adjustment</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Soft Start</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">One Shot Position (Fast Positioning)</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">FET Over Current Protection</td>\r
<td align="center" valign="middle">Y</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Edge Sensor Port</td>\r
<td align="center" valign="middle">2</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Input Port</td>\r
<td align="center" valign="middle">4</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Output Port</td>\r
<td align="center" valign="middle">3</td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle">Standing Operation 3 Pedals (PK-71)</td>\r
<td align="center" valign="middle">Option</td>\r
</tr>\r
</tbody>\r
</table>`,sort:"7",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ebf84f594c1.jpg",pic2:"",pic3:"",file1:"Products_64ebf84f596bd.pdf",created_at:"2023-08-28 09:27:48",updated_at:"2023-08-28 09:28:47"},{p_id:"11",c_id:"5",title:"SV-250",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u4F3A\u670D\u99AC\u9054</strong></p>\r
<p><strong>1. \u5168\u529F\u80FD\u578B\uFF0C\u53EF\u642D\u914D\u5404\u578B\u91DD\u8ECA\u3002<br>2. \u51FA\u529B\u8DB3\uFF0C\u53CD\u61C9\u5FEB\uFF0C\u7701\u96FB\u4F73\u3002<br>3. I/O \u9EDE\u6578\u591A\uFF0C\u53EF\u9023\u7D50\u5404\u7A2E\u9031\u908A\u3002<br>4. \u63A7\u5236\u7BB1\u5C0F\u578B\u5316\uFF0C\u91CD\u91CF\u8B8A\u8F15(\u7121\u8B8A\u58D3\u5668)\u3002<br>5. \u76F8\u540C\u63A7\u5236\u7BB1\u53EF\u63A7\u5236SV-250\uFF0CSV-260 \u5169\u7A2E\u99AC\u9054\u3002<br>6. \u900F\u904E\u76AE\u5E36\u8F2A\u91CF\u6E2C\u53EF\u76F4\u63A5\u63A7\u5236\u91DD\u8ECA\u901F\u5EA6\u3002<br>7. \u8A3A\u65B7\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u6AA2\u67E5\u8F38\u51FA/\u8F38\u5165\u72C0\u614B\u3002<br>8. \u92B7\u552E\u5BE6\u7E3E\u591A\uFF0C\u54C1\u8CEA\u7A69\u5B9A\uFF0C\u5BA2\u6236\u80AF\u5B9A\u3002</strong></p>`,en_content:`<p><strong>Servo Motor for&nbsp;Industrial Sewing Machine</strong></p>\r
<p><strong>1. Universal type, compatible with any type of sewing machine.<br>2. Powerful, quick response, save energy.<br>3. Multiple I/O connection available.<br>4. Control box size minimized &amp; weight reduced.(W/O Transformer).<br>5. SM-250, SM-260 can be controlled by the same control box.<br>6. Control the sewing machine speed directly by measuring pulley size.<br>7. Diagnostic mode available to inspect the I/O status.<br>8. Popular, High Quality, Customer Approved.</strong></p>`,zh_spec:`<table border="1" width="75%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td colspan="2" align="center" valign="middle" height="24"><span class="p12-2">SV-250 \u898F\u683C</span></td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" width="387" height="24"><span class="p12-2">\u6A5F\u80FD</span></td>\r
<td class="p12-2" align="center" valign="middle" width="150" height="24">\u503C</td>\r
</tr>\r
<tr>\r
<td class="p12-2" align="left" valign="middle" width="387" height="24">\u8F38\u5165\u96FB\u58D3</td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">1&psi;: 110V &plusmn; 10%<br>1&psi;: 220V &plusmn; 10%<br>3&psi;: 220V &plusmn; 10%</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u99AC\u9054\u51FA\u529B</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">550W</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u99AC\u9054\u8F49\u901F</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">3000 RPM</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u76AE\u5E36\u8F2A\u5C3A\u5BF8\u7BC4\u570D</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">65-140mm</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u91DD\u4E0A\u4E0B\u505C\u5B9A\u4F4D</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u6700\u5927\u901F\u5EA6\u8ABF\u6574</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u6162\u901F\u8D77\u52D5</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u5207\u7DDA/\u64A5\u7DDA</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u63D0\u58D3\u8173</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u88DC\u91DD</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u5B9A\u6A19\u8ECA\u7E2B</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u81EA\u52D5\u5012\u7E2B</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u5207\u7DDA\u5F8C\u53CD\u8F49</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u6A21\u7D44/\u6676\u9AD4 \u4FDD\u8B77</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u8A08\u4EF6</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u5E03\u7AEF\u6AA2\u51FA \u57E0\u6578</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">2</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u8F38\u5165/\u8F38\u51FA \u57E0\u6578</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">18/ 8+1</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u63A5\u7ACB\u5F0F3\u8E0F\u677F</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Option</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u63A5\u7ACB\u5F0F\u55AE\u8E0F\u677F</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Option</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u63A5\u5916\u90E8\u9078\u91DD\u76D2</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Option</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u8A3A\u65B7\u6A21\u5F0F ( \u6AA2\u67E5\u8F38\u5165/\u8F38\u51FA\u72C0\u614B)</span></td>\r
<td valign="middle" width="150" height="27"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u986F\u793A\u932F\u8AA4\u6B77\u53F2\u6A21\u5F0F (\u8A18\u9304\u524D6\u6B21)</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u6BDB\u91CD</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">18.9Kg</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">\u5305\u88DD\u5C3A\u5BF8Packing Dimensions</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">489L*426W*320H</span></td>\r
</tr>\r
</tbody>\r
</table>\r
<p><span style="color: rgb(53, 152, 219);"><strong>C-200 \u9078\u91DD\u76D2</strong> (optional)</span></p>\r
<p><img src="data:image/jpeg;base64,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"></p>\r
<p><img src="data:image/jpeg;base64,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"></p>`,en_spec:`<table border="1" width="75%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td colspan="2" align="center" valign="middle" height="24"><span class="p12-2">SPECIFICATION</span></td>\r
</tr>\r
<tr>\r
<td align="center" valign="middle" width="387" height="24"><span class="p12-2">FUNCTION</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Value</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Input Voltage Ranges</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">1&psi;: 110V &plusmn; 10%<br>1&psi;: 220V &plusmn; 10%<br>3&psi;: 220V &plusmn; 10%</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Motor Output Power</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">550W</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Motor Rated Speed</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">3000 RPM</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Pulley Size Range</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">65-140mm</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Needle Up/Down Positioning</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Max. Speed Adjustment</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Soft Star</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Trimmer/Wiper</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Pressure Foot Lifting</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Inching</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Target Stitching</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Automatic Back-tacking</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Reverse after Thread Trimming</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Module/ Transistor Protection</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Material Counter</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Edge Sensor Input Ports No.</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">2</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">I/O Ports No.</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">18/ 8+1</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">With Standing Operation 3 Pedals</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Option</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">With Standing Operation 1 Pedal</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Option</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">With External Control Panel</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Option</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Diagnostic Mode (Inspect I/O Conditions)</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Display ERROR History Mode ( Record Previous 6 Times)</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">Y</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Gross Weights</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">18.9Kg</span></td>\r
</tr>\r
<tr>\r
<td align="left" valign="middle" width="387" height="24"><span class="p12-2">Packing Dimensions</span></td>\r
<td valign="middle" width="150" height="24"><span class="p12-2">489L*426W*320H</span></td>\r
</tr>\r
</tbody>\r
</table>\r
<p><span style="color: rgb(53, 152, 219);"><strong>C-200 Control Box</strong> (optional)</span></p>\r
<p><span style="color: rgb(53, 152, 219);"><img src="data:image/jpeg;base64,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"></span></p>\r
<p><img src="data:image/jpeg;base64,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"></p>`,sort:"8",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ebf960527b9.jpg",pic2:"",pic3:"",file1:"Products_64ebf960529bc.pdf",created_at:"2023-08-28 09:32:31",updated_at:"2023-08-28 09:54:26"},{p_id:"12",c_id:"5",title:"NS \u7CFB\u5217",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u96E2\u5408\u5668\u99AC\u9054</strong></p>\r
<p><strong>1. \u53D6\u5F97CE. CSA. UL \u7B49\u5B89\u898F\u8A8D\u8A3C\u3002<br>2. \u51FA\u5EE0\u524D\u5168\u6578\u7D93\u5B8C\u6574\u6E2C\u8A66\u8207\u54C1\u7BA1 \u78BA\u4FDD\u7522\u54C1\u54C1\u8CEA\u3002<br>3. \u632F\u52D5\u5C0F\uFF0C\u566A\u97F3\u4F4E\uFF0C\u51FA\u529B\u8DB3\uFF0C\u6EAB\u6607\u5C11\u3002<br>4. \u96E2\u5408\u5668\u8207\u715E\u8ECA\u8EDF\u6728\u6750\u6599\u512A\u7570\uFF0C\u78E8\u8017\u58FD\u547D\u9577\u3002<br>5. \u9023\u687F \u5E95\u5EA7 \u715E\u8ECA \u7B49\u90E8\u4F4D\u8ABF\u6574\u7C21\u6613\u3002</strong></p>`,en_content:`<p><strong>Clutch Motor for&nbsp;Industrial Sewing Machine</strong></p>\r
<p><strong>1. Total quality control after production to meet the highest standard.<br>2. Low vibration and noise, maximum output and low raise in temperature.<br>3. High quality clutch and cork for longer endurance.<br>4. Lever, Slide base and brake easily adjustable.</strong></p>`,zh_spec:`<p style="text-align: center;"><strong>\u55AE\u76F8\u96E2\u5408\u5668\u99AC\u9054\u898F\u683C\u8868</strong></p>\r
<table class="style9" border="1" width="100%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td width="143" height="35">\u578B\u865F</td>\r
<td>\r
<p align="center">NS-212</p>\r
</td>\r
<td>\r
<p align="center">NS-214</p>\r
</td>\r
<td>\r
<p align="center">NS-312</p>\r
</td>\r
<td>\r
<p align="center">NS-314</p>\r
</td>\r
<td>\r
<p align="center">NS-412</p>\r
</td>\r
<td>\r
<p align="center">NS-414</p>\r
</td>\r
<td>\r
<p align="center">NS-512</p>\r
</td>\r
<td>\r
<p align="center">NS-514</p>\r
</td>\r
<td>\r
<p align="center">NS-612</p>\r
</td>\r
<td>\r
<p align="center">NS-614</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\u984D\u5B9A\u8F38\u51FA (Watt)</td>\r
<td colspan="2" height="35">\r
<p align="center">200 ( \u2252 1/4hp)</p>\r
</td>\r
<td colspan="2" height="35">\r
<p align="center">250 ( \u2252 1/3hp)</p>\r
</td>\r
<td colspan="2" height="35">400 ( \u2252 1/2hp)</td>\r
<td colspan="2" height="35">\r
<p align="center">500 ( \u2252 5/8hp)</p>\r
</td>\r
<td colspan="2" height="35">600 ( \u2252 3/4hp)</td>\r
</tr>\r
<tr>\r
<td height="35">\u6975\u6578</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u984D\u5B9A\u96FB\u6D41(A) \u96FB\u58D3200V</p>\r
</td>\r
<td>\r
<p align="center">3.80/3.61</p>\r
</td>\r
<td>\r
<p align="center">3.25/3.75</p>\r
</td>\r
<td>\r
<p align="center">3.61/3.50</p>\r
</td>\r
<td>\r
<p align="center">4.06/3.37</p>\r
</td>\r
<td>\r
<p align="center">4.96/5.42</p>\r
</td>\r
<td>\r
<p align="center">5.20/5.96</p>\r
</td>\r
<td>\r
<p align="center">NA / NA</p>\r
</td>\r
<td>\r
<p align="center">NA / NA</p>\r
</td>\r
<td>\r
<p align="center">7.87/4.05</p>\r
</td>\r
<td>\r
<p align="center">7.57/ NA</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u984D\u5B9A\u96FB\u6D41(A)<br>\u96FB\u58D3 380V</p>\r
</td>\r
<td>\r
<p align="center">1.95/NA</p>\r
</td>\r
<td>\r
<p align="center">1.55/1.97</p>\r
</td>\r
<td>\r
<p align="center">1.76/</p>\r
</td>\r
<td>\r
<p align="center">1.98/1.74</p>\r
</td>\r
<td>\r
<p align="center">2.71/2.75</p>\r
</td>\r
<td>\r
<p align="center">2.68/2.99</p>\r
</td>\r
<td>\r
<p align="center">3.45/ NA</p>\r
</td>\r
<td>\r
<p align="center">3.46/ NA</p>\r
</td>\r
<td>\r
<p align="center">3.62/4.29</p>\r
</td>\r
<td>\r
<p align="center">3.75/4.32</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u8F49\u901FRpm(50/60Hz)</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u6DE8\u91CD(Kg)</p>\r
</td>\r
<td>\r
<p align="center">17.84</p>\r
</td>\r
<td>\r
<p align="center">17.84</p>\r
</td>\r
<td>\r
<p align="center">19.12</p>\r
</td>\r
<td>\r
<p align="center">19.12</p>\r
</td>\r
<td>\r
<p align="center">20.66</p>\r
</td>\r
<td>\r
<p align="center">20.66</p>\r
</td>\r
<td>\r
<p align="center">22.00</p>\r
</td>\r
<td>\r
<p align="center">22.00</p>\r
</td>\r
<td>\r
<p align="center">22.50</p>\r
</td>\r
<td>\r
<p align="center">22.50</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u6BDB\u91CD(Kg)</p>\r
</td>\r
<td>\r
<p align="center">18.99</p>\r
</td>\r
<td>\r
<p align="center">18.99</p>\r
</td>\r
<td>\r
<p align="center">20.27</p>\r
</td>\r
<td>\r
<p align="center">20.27</p>\r
</td>\r
<td>\r
<p align="center">21.84</p>\r
</td>\r
<td>\r
<p align="center">21.84</p>\r
</td>\r
<td>\r
<p align="center">23.15</p>\r
</td>\r
<td>\r
<p align="center">23.15</p>\r
</td>\r
<td>\r
<p align="center">23.65</p>\r
</td>\r
<td>\r
<p align="center">23.65</p>\r
</td>\r
</tr>\r
</tbody>\r
</table>\r
<p style="text-align: center;"><strong>\u4E09\u76F8\u96E2\u5408\u5668\u99AC\u9054\u898F\u683C\u8868</strong></p>\r
<table class="style9" border="1" width="100%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td width="143" height="35">\r
<p>\u578B\u865F</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-232</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-234</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-332</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-334</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-432</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-434</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-532</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-534</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-632</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-634</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u984D\u5B9A\u8F38\u51FA (Watt)</p>\r
</td>\r
<td colspan="2" align="middle" height="35">\r
<p align="center">200 ( \u2252 1/4hp)</p>\r
</td>\r
<td colspan="2" align="middle" height="35">\r
<p align="center">250 ( \u2252 1/3hp)</p>\r
</td>\r
<td colspan="2" align="middle" height="35">400 ( \u2252 1/2hp)</td>\r
<td colspan="2" align="middle" height="35">\r
<p align="center">500 ( \u2252 5/8hp)</p>\r
</td>\r
<td colspan="2" align="middle" height="35">600 ( \u2252 3/4hp)</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u6975\u6578</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u984D\u5B9A\u96FB\u6D41(A) \u96FB\u58D3200V</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">NA /NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">NA / NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.49/1.67</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.42/1.63</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.69/1.75</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.92/2.19</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">NA / NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">NA / NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2.27/2.63</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2.67/ NA</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u984D\u5B9A\u96FB\u6D41(A)<br>\u96FB\u58D3 380V</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.99/NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.77/ NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.86/0.93</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.81/0.95</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.97/1.00</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.82/1.28</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.27/ NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.44/ NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.66/ NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.57/ NA</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u8F49\u6578Rpm(50/60Hz)</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u6DE8\u91CD(Kg)</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.07</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.07</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.05</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.05</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.23</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.23</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.32</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.32</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.51</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.51</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>\u6BDB\u91CD(Kg)</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.72</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.72</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">20.24</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">20.24</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.41</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.41</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.50</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.50</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.69</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.69</p>\r
</td>\r
</tr>\r
</tbody>\r
</table>`,en_spec:`<p style="text-align: center;"><strong>1</strong>&nbsp;&Phi;<strong>&nbsp;Clutch Motor Specification</strong></p>\r
<table class="style9" border="1" width="100%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td width="143" height="35">Model No.</td>\r
<td>\r
<p align="center">NS-212</p>\r
</td>\r
<td>\r
<p align="center">NS-214</p>\r
</td>\r
<td>\r
<p align="center">NS-312</p>\r
</td>\r
<td>\r
<p align="center">NS-314</p>\r
</td>\r
<td>\r
<p align="center">NS-412</p>\r
</td>\r
<td>\r
<p align="center">NS-414</p>\r
</td>\r
<td>\r
<p align="center">NS-512</p>\r
</td>\r
<td>\r
<p align="center">NS-514</p>\r
</td>\r
<td>\r
<p align="center">NS-612</p>\r
</td>\r
<td>\r
<p align="center">NS-614</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">Rated Output (Watt)</td>\r
<td colspan="2" height="35">\r
<p align="center">200 ( \u2252 1/4hp)</p>\r
</td>\r
<td colspan="2" height="35">\r
<p align="center">250 ( \u2252 1/3hp)</p>\r
</td>\r
<td colspan="2" height="35">400 ( \u2252 1/2hp)</td>\r
<td colspan="2" height="35">\r
<p align="center">500 ( \u2252 5/8hp)</p>\r
</td>\r
<td colspan="2" height="35">600 ( \u2252 3/4hp)</td>\r
</tr>\r
<tr>\r
<td height="35">Poles No.</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
<td height="35">\r
<p align="center">2</p>\r
</td>\r
<td height="35">\r
<p align="center">4</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>Rated Current(A) Power200V</p>\r
</td>\r
<td>\r
<p align="center">3.80/3.61</p>\r
</td>\r
<td>\r
<p align="center">3.25/3.75</p>\r
</td>\r
<td>\r
<p align="center">3.61/3.50</p>\r
</td>\r
<td>\r
<p align="center">4.06/3.37</p>\r
</td>\r
<td>\r
<p align="center">4.96/5.42</p>\r
</td>\r
<td>\r
<p align="center">5.20/5.96</p>\r
</td>\r
<td>\r
<p align="center">NA / NA</p>\r
</td>\r
<td>\r
<p align="center">NA / NA</p>\r
</td>\r
<td>\r
<p align="center">7.87/4.05</p>\r
</td>\r
<td>\r
<p align="center">7.57/ NA</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>Rated Current(A)<br>Power 380V</p>\r
</td>\r
<td>\r
<p align="center">1.95/NA</p>\r
</td>\r
<td>\r
<p align="center">1.55/1.97</p>\r
</td>\r
<td>\r
<p align="center">1.76/</p>\r
</td>\r
<td>\r
<p align="center">1.98/1.74</p>\r
</td>\r
<td>\r
<p align="center">2.71/2.75</p>\r
</td>\r
<td>\r
<p align="center">2.68/2.99</p>\r
</td>\r
<td>\r
<p align="center">3.45/ NA</p>\r
</td>\r
<td>\r
<p align="center">3.46/ NA</p>\r
</td>\r
<td>\r
<p align="center">3.62/4.29</p>\r
</td>\r
<td>\r
<p align="center">3.75/4.32</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>Rpm(50/60Hz)</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
<td>\r
<p align="center">2860/3450</p>\r
</td>\r
<td>\r
<p align="center">1425/1720</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>N.W.(Kg)</p>\r
</td>\r
<td>\r
<p align="center">17.84</p>\r
</td>\r
<td>\r
<p align="center">17.84</p>\r
</td>\r
<td>\r
<p align="center">19.12</p>\r
</td>\r
<td>\r
<p align="center">19.12</p>\r
</td>\r
<td>\r
<p align="center">20.66</p>\r
</td>\r
<td>\r
<p align="center">20.66</p>\r
</td>\r
<td>\r
<p align="center">22.00</p>\r
</td>\r
<td>\r
<p align="center">22.00</p>\r
</td>\r
<td>\r
<p align="center">22.50</p>\r
</td>\r
<td>\r
<p align="center">22.50</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>G..W.(Kg)</p>\r
</td>\r
<td>\r
<p align="center">18.99</p>\r
</td>\r
<td>\r
<p align="center">18.99</p>\r
</td>\r
<td>\r
<p align="center">20.27</p>\r
</td>\r
<td>\r
<p align="center">20.27</p>\r
</td>\r
<td>\r
<p align="center">21.84</p>\r
</td>\r
<td>\r
<p align="center">21.84</p>\r
</td>\r
<td>\r
<p align="center">23.15</p>\r
</td>\r
<td>\r
<p align="center">23.15</p>\r
</td>\r
<td>\r
<p align="center">23.65</p>\r
</td>\r
<td>\r
<p align="center">23.65</p>\r
</td>\r
</tr>\r
</tbody>\r
</table>\r
<p style="text-align: center;"><strong>3</strong>&nbsp;&Phi;<strong>&nbsp;Clutch Motor Specification</strong></p>\r
<table class="style9" border="1" width="100%" cellspacing="0" cellpadding="0">\r
<tbody>\r
<tr>\r
<td width="143" height="35">\r
<p>Model No.</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-232</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-234</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-332</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-334</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-432</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-434</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-532</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-534</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-632</p>\r
</td>\r
<td align="middle" width="54" height="35">\r
<p align="center">NS-634</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>Rated Output (Watt)</p>\r
</td>\r
<td colspan="2" align="middle" height="35">\r
<p align="center">200 ( \u2252 1/4hp)</p>\r
</td>\r
<td colspan="2" align="middle" height="35">\r
<p align="center">250 ( \u2252 1/3hp)</p>\r
</td>\r
<td colspan="2" align="middle" height="35">400 ( \u2252 1/2hp)</td>\r
<td colspan="2" align="middle" height="35">\r
<p align="center">500 ( \u2252 5/8hp)</p>\r
</td>\r
<td colspan="2" align="middle" height="35">600 ( \u2252 3/4hp)</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>Poles No.</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">4</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>Rated Current(A) Power200V</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">NA /NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">NA / NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.49/1.67</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.42/1.63</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.69/1.75</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.92/2.19</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">NA / NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">NA / NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2.27/2.63</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2.67/ NA</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>Rated Current(A)<br>Power 380V</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.99/NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.77/ NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.86/0.93</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.81/0.95</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.97/1.00</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">0.82/1.28</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.27/ NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.44/ NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.66/ NA</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1.57/ NA</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>Rpm(50/60Hz)</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">2860/3450</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">1425/1720</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>N.W.(Kg)</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.07</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.07</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.05</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.05</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.23</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.23</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.32</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.32</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.51</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">21.51</p>\r
</td>\r
</tr>\r
<tr>\r
<td height="35">\r
<p>G..W.(Kg)</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.72</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">19.72</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">20.24</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">20.24</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.41</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.41</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.50</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.50</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.69</p>\r
</td>\r
<td align="middle" height="35">\r
<p align="center">22.69</p>\r
</td>\r
</tr>\r
</tbody>\r
</table>`,sort:"9",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ec03cea3db4.jpg",pic2:"",pic3:"",file1:"Products_64ec03cea3fa7.pdf",created_at:"2023-08-28 10:16:34",updated_at:"2023-08-28 10:17:50"},{p_id:"13",c_id:"5",title:"CR \u7CFB\u5217",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u611F\u61C9\u99AC\u9054</strong></p>\r
<p>1. \u51FA\u5EE0\u524D\u5168\u6578\u7D93\u5B8C\u6574\u6E2C\u8A66\u8207\u54C1\u7BA1 \u78BA\u4FDD\u7522\u54C1\u54C1\u8CEA\u3002<br>2. \u632F\u52D5\u5C0F\uFF0C\u566A\u97F3\u4F4E\uFF0C\u51FA\u529B\u8DB3\uFF0C\u6EAB\u6607\u5C11\u3002<br>3. \u9023\u687F\uFF0C\u5E95\u5EA7\uFF0C \u7B49\u90E8\u4F4D\u8ABF\u6574\u7C21\u6613\u3002<br>4. \u904B\u4F5C\u5982\u4E00\u822C\u611F\u61C9\u99AC\u9054\u53EF\u61C9\u7528\u65BC\u5176\u4ED6\u5834\u5408\u3002</p>`,en_content:`<p><strong>Clutch Motor for&nbsp;Industrial Sewing Machine</strong></p>\r
<p>1. Total quality control after production to meet the highest standard.<br>2. Low vibration and noise, maximum output and low raise in temperature.<br>3. Lever, Slide base and brake easily adjustable.<br>4. Applicable for other demand.</p>`,zh_spec:`<p style="text-align: center;">\u55AE\u76F8 220 50Hz</p>\r
<table class="p12-2" border="2" width="476" cellspacing="1" cellpadding="1" align="center">\r
<tbody>\r
<tr>\r
<td>\u578B\u865F</td>\r
<td>CRS-2504</td>\r
<td>CRS-4004</td>\r
</tr>\r
<tr>\r
<td>\u99AC\u9054\u51FA\u529B</td>\r
<td>250W</td>\r
<td>400W</td>\r
</tr>\r
<tr>\r
<td>\u99AC\u9054\u8F49\u901F</td>\r
<td>1450</td>\r
<td>1450</td>\r
</tr>\r
<tr>\r
<td>\u6975\u6578</td>\r
<td>4</td>\r
<td>4</td>\r
</tr>\r
</tbody>\r
</table>\r
<p style="text-align: center;">&nbsp;</p>\r
<p style="text-align: center;">\u4E09\u76F8 220V 50Hz</p>\r
<table class="p12-2" border="2" width="478" cellspacing="1" cellpadding="1" align="center">\r
<tbody>\r
<tr>\r
<td>\u578B\u865F</td>\r
<td>CRT-2504</td>\r
<td>CRT-4004</td>\r
</tr>\r
<tr>\r
<td>\u99AC\u9054\u51FA\u529B</td>\r
<td>250W</td>\r
<td>400W</td>\r
</tr>\r
<tr>\r
<td>\u99AC\u9054\u8F49\u6578</td>\r
<td>1450</td>\r
<td>1450</td>\r
</tr>\r
<tr>\r
<td>\u6975\u6578</td>\r
<td>4</td>\r
<td>4</td>\r
</tr>\r
</tbody>\r
</table>\r
<p style="text-align: center;">&nbsp;</p>`,en_spec:`<p style="text-align: center;">Single Phase 220 50Hz</p>\r
<table class="p12-2" border="2" width="476" cellspacing="1" cellpadding="1" align="center">\r
<tbody>\r
<tr>\r
<td>Model</td>\r
<td>CRS-2504</td>\r
<td>CRS-4004</td>\r
</tr>\r
<tr>\r
<td>Power</td>\r
<td>250W</td>\r
<td>400W</td>\r
</tr>\r
<tr>\r
<td>Rpm</td>\r
<td>1450</td>\r
<td>1450</td>\r
</tr>\r
<tr>\r
<td>Poles</td>\r
<td>4</td>\r
<td>4</td>\r
</tr>\r
</tbody>\r
</table>\r
<p>&nbsp;</p>\r
<p style="text-align: center;">Three Phases 220V 50Hz</p>\r
<table class="p12-2" border="2" width="478" cellspacing="1" cellpadding="1" align="center">\r
<tbody>\r
<tr>\r
<td>Model</td>\r
<td>CRT-2504</td>\r
<td>CRT-4004</td>\r
</tr>\r
<tr>\r
<td>Power</td>\r
<td>250W</td>\r
<td>400W</td>\r
</tr>\r
<tr>\r
<td>Rpm</td>\r
<td>1450</td>\r
<td>1450</td>\r
</tr>\r
<tr>\r
<td>Poles</td>\r
<td>4</td>\r
<td>4</td>\r
</tr>\r
</tbody>\r
</table>`,sort:"10",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ec05783cd4b.jpg",pic2:"",pic3:"",file1:"Products_64ec05783cf2f.pdf",created_at:"2023-08-28 10:21:57",updated_at:"2023-08-28 10:24:56"},{p_id:"14",c_id:"6",title:"PK-70/PK71",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u7ACB\u5F0F\u8E0F\u677F\u7D44</strong></p>\r
<p>1. \u4E09\u500B\u8E0F\u677F\u64CD\u63A7\u901F\u5EA6\u3001\u5207\u7DDA\u3001\u62AC\u62BC\u8173\u3002<br>2. \u4EE5\u4F4E\u901F\u5230\u9AD8\u901F\u7684\u63A7\u5236\u5341\u5206\u5E73\u6ED1\u3002<br>\u9069\u7528\u6A5F\u7A2E:<br>\u25A0 PK70 \u53EF\u9069\u7528\u65BC JUKI SC Series &amp; ISM SV Series<br>\u25A0 PK71 \u53EF\u9069\u7528\u65BC ISM SV Series</p>`,en_content:`<p><strong>Standing Operation Pedal for&nbsp;Industrial Sewing Machine</strong></p>\r
<p>Three Pedal for speed, Trimmer and foot lifter.<br>Smoothly speed changes from low to high.<br>Suitable Model:<br>\u25A0 PK70 suitable for JUKI SC Series &amp; ISM SV Series<br>\u25A0 PK71 suitable for ISM SV Series</p>`,zh_spec:"",en_spec:"",sort:"11",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ec0613c29ed.jpg",pic2:"",pic3:"",file1:"",created_at:"2023-08-28 10:27:07",updated_at:"2023-08-28 10:31:01"},{p_id:"15",c_id:"6",title:"PK-73",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u7ACB\u5F0F\u8E0F\u677F\u7D44</strong></p>\r
<p>\u6EFF\u8DB3\u7AD9\u7ACB\u64CD\u4F5C\u8981\u6C42\uFF0C\u63D0\u9AD8\u7E2B\u88FD\u6548\u7387\u3002<br>\u56DB\u500B\u8E0F\u677F\u64CD\u63A7\u4F4E\u901F\u3001\u9AD8\u901F\u3001\u5207\u7DDA\u3001\u62AC\u62BC\u8173\u3002<br>\u7368\u7ACB\u4F4E\u901F\u8E0F\u677F\uFF0C\u4F7F\u7E2B\u88FD\u904E\u7A0B\u66F4\u52A0\u7C21\u55AE\u8207\u7CBE\u6E96\u3002<br>\u53EF\u9069\u7528\u65BC JUKI SC Series and ISM SV Series</p>`,en_content:`<p><strong>Standing Operation Pedal for&nbsp;Industrial Sewing Machine</strong></p>\r
<p>Meet standing operation requirements, impr sewing efficiency.<br>4 Pedal for low speed,high speed, Trimmer and foot lifter.<br>Independent low-speed sewing pedal make inching sewing easy and accurate when sewing thick materials.<br>Suitable for JUKI SC Series and ISM SV Series</p>`,zh_spec:"",en_spec:"",sort:"12",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ec0746d8f4d.jpg",pic2:"",pic3:"",file1:"Products_64ec0746dca06.pdf",created_at:"2023-08-28 10:32:05",updated_at:"2023-08-28 10:38:13"},{p_id:"16",c_id:"6",title:"PK-80/PK-81",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u7ACB\u5F0F\u8E0F\u677F\u7D44</strong></p>\r
<p>1. \u4E00\u500B\u8E0F\u677F\u64CD\u63A7\u901F\u5EA6\u3001\u5207\u7DDA\u3001\u62AC\u62BC\u8173\u3002<br>2. \u4EE5\u4F4E\u901F\u5230\u9AD8\u901F\u7684\u63A7\u5236\u5341\u5206\u5E73\u6ED1\u3002<br>\u9069\u7528\u65BC\u6240\u6709\u6A5F\u7A2E\u3002</p>\r
<p><br><br></p>`,en_content:`<p><strong>Standing Operation Pedal for&nbsp;Industrial Sewing Machine</strong></p>\r
<p>One Pedal for speed, Trimmer and foot lifter.<br>Smoothly speed changes from low to high.<br>Suitable for all models.</p>`,zh_spec:"",en_spec:"",sort:"13",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ec09441f790.jpg",pic2:"",pic3:"",file1:"Products_64ec09441f95c.pdf",created_at:"2023-08-28 10:40:51",updated_at:"2023-08-28 10:41:08"},{p_id:"17",c_id:"6",title:"PK-100 Series",zh_content:`<p><strong>\u5DE5\u696D\u91DD\u8ECA\u7528\u7ACB\u5F0F\u8E0F\u677F\u7D44</strong></p>\r
<p>\u6297\u75B2\u52DE\u8E0F\u677F\u3002<br>\u4E0D\u542B\u5851\u5316\u5291\u3002<br>\u66F4\u5B89\u5168\u3002<br>\u9069\u7528\u65BC\u6240\u6709\u6A5F\u7A2E\u3002</p>`,en_content:`<p><strong>Standing Operation Pedal for&nbsp;Industrial Sewing Machine</strong></p>\r
<p>Anti-fatiqure Pedal.<br>Plasticizer-free.<br>More Safety.<br>Suitable for all models.</p>`,zh_spec:"",en_spec:"",sort:"14",visibility:"1",new:"0",hot:"0",recommend:"0",pic1:"Products_64ec0a4693361.jpg",pic2:"",pic3:"",file1:"Products_64ec0a469355e.pdf",created_at:"2023-08-28 10:42:16",updated_at:"2023-08-28 10:45:26"}],service_centers:[{ID:"1",Country_id:"225",Continent:"AS",SubContinent:"EAS",CountryIso3:"TWN",CountryName_en:"Taiwan",CountryName_zh:"\u53F0\u7063",CompanyName:"Yong Huei Hsing Electric Industries Corp.",CompanyMajor:"1",Tel:"+886-4-2311-1551",Address:"No. 55, Yonghui Rd, Xitun District, Taichung City, 407",ContactPerson:"",Email:"service@yhhism.com",Mobile:"",Fax:"+886-4-2311-9383",OfficeHour:"Mon-Fri 8AM-5PM (GMP+8)",Twitter:"",Twitter_Visibility:"0",Facebook:"",Facebook_Visibility:"0",Instagram:"https://www.instagram.com/ism.tw/",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"0",Skype:"",Skype_Visibility:"0",Line:"",Line_Visibility:"0",Youtube:"https://www.youtube.com/channel/UCqzFBnHU5lkisaEMODKLGAA",Youtube_Visibility:"1",Image:null,visibility:"1",created_at:"2023-07-24 15:14:00",updated_at:"2023-09-14 15:46:37"},{ID:"5",Country_id:"20",Continent:"AS",SubContinent:"SAS",CountryIso3:"BGD",CountryName_en:"Bangladesh",CountryName_zh:"\u5B5F\u52A0\u62C9",CompanyName:"Juki Bangladesh Limited",CompanyMajor:"0",Tel:"+88-01973376516",Address:"39,Kemal Ataturk Avenue,Banani,Dhaka-1213,Bangladesh",ContactPerson:"Mr. Kadir",Email:"",Mobile:"",Fax:"",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:"20210311165411.jpg",visibility:"1",created_at:"2023-07-24 15:14:00",updated_at:"2023-08-31 16:02:47"},{ID:"7",Country_id:"20",Continent:"AS",SubContinent:"SAS",CountryIso3:"BGD",CountryName_en:"Bangladesh",CountryName_zh:"\u5B5F\u52A0\u62C9",CompanyName:"GramBangla Systems Ltd.",CompanyMajor:"0",Tel:"+88-02-9027809",Address:"Grameen Bank Bhaban (Level 14) Mirpur-2, Dhaka-1216 Bangladesh",ContactPerson:"",Email:"",Mobile:"+88-02-9027810",Fax:"+88-02-9027807",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"www.grambanglasystems.com",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:null,visibility:"1",created_at:"2023-07-24 15:14:00",updated_at:"2023-09-05 10:54:28"},{ID:"8",Country_id:"20",Continent:"AS",SubContinent:"SAS",CountryIso3:"BGD",CountryName_en:"Bangladesh",CountryName_zh:"\u5B5F\u52A0\u62C9",CompanyName:"HE TECHNOLOGY",CompanyMajor:"0",Tel:"018 20-51 39 93",Address:"44,Rabindra Swarini,Sector #7,Uttara,Dhaka-1230 Bangladesh",ContactPerson:"",Email:"",Mobile:"",Fax:"",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:null,visibility:"1",created_at:"2023-07-24 15:14:00",updated_at:"2023-08-31 16:02:53"},{ID:"9",Country_id:"49",Continent:"AM",SubContinent:"SAM",CountryIso3:"COL",CountryName_en:"Colombia",CountryName_zh:"\u54E5\u502B\u6BD4\u4E9E",CompanyName:"MING HING SPECIALTY SEWING CENTER",CompanyMajor:"0",Tel:"+855-92996883",Address:"108D Street:109KA Sangkat,Kabab,Khan Posen,Chey Phnom Penh,Cambodia",ContactPerson:"Mr. Wang Xiao Ming",Email:"wxmdl888@163.com",Mobile:"",Fax:"",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:"20210317093838.jpg",visibility:"1",created_at:"2023-07-24 15:14:00",updated_at:"2023-08-31 16:03:11"},{ID:"10",Country_id:"104",Continent:"AS",SubContinent:"SAS",CountryIso3:"IND",CountryName_en:"India",CountryName_zh:"\u5370\u5EA6",CompanyName:"Active Engineering Associates",CompanyMajor:"0",Tel:"0421 4291132",Address:"71-E,Sri Towers,Opp. To Valarmathi Super Market,Municipal Office Road,Tirupur-641 604",ContactPerson:"Mr. V Siva Kumar",Email:"tpr@aea.co.in",Mobile:"",Fax:"",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:null,visibility:"1",created_at:"2023-08-09 14:43:04",updated_at:"2023-08-31 16:03:14"},{ID:"11",Country_id:"104",Continent:"AS",SubContinent:"SAS",CountryIso3:"IND",CountryName_en:"India",CountryName_zh:"\u5370\u5EA6",CompanyName:"Mothercare in Machineries",CompanyMajor:"0",Tel:"0421-2483423",Address:"12/14,Sasthri Nagar 3rd Street,Angeripalayam Main Road,Tirupur-641 602",ContactPerson:"Mr. G. Sidheeshwaran",Email:"mcare@dataone.in",Mobile:"",Fax:"",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:null,visibility:"0",created_at:"2023-08-09 14:46:50",updated_at:"2023-08-31 16:03:43"},{ID:"12",Country_id:"100",Continent:"AS",SubContinent:"SEA",CountryIso3:"IDN",CountryName_en:"Indonesia",CountryName_zh:"\u5370\u5EA6\u5C3C\u897F\u4E9E",CompanyName:"Jea Yeu Enterprise Co. Ltd.",CompanyMajor:"0",Tel:"021-55733399",Address:"Ruko Gajah Mada No.2071,Cyber Park Lippo,Karawaci,Tangerang",ContactPerson:"Jason Lin",Email:"jeayeu1105@gmail.com",Mobile:"",Fax:"",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:null,visibility:"0",created_at:"2023-08-09 15:16:40",updated_at:"2023-08-31 16:03:17"},{ID:"14",Country_id:"145",Continent:"AS",SubContinent:"SEA",CountryIso3:"MMR",CountryName_en:"Myanmar",CountryName_zh:"\u7DEC\u7538",CompanyName:"Yousein International Co. Ltd.",CompanyMajor:"0",Tel:"0925-015-3368",Address:"NO.300,1st Floor,40th Street(Upper Block),Kyauktada T/S,Yangon",ContactPerson:"Mr. Yang",Email:"yousein@hotmail.com",Mobile:"",Fax:"",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:null,visibility:"1",created_at:"2023-08-09 15:19:36",updated_at:"2023-08-31 16:03:19"},{ID:"15",Country_id:"129",Continent:"AS",SubContinent:"SAS",CountryIso3:"LKA",CountryName_en:"Sri Lanka",CountryName_zh:"\u65AF\u91CC\u862D\u5361",CompanyName:"J.K. Agencies (Pvt) Ltd.",CompanyMajor:"0",Tel:"2344648-9",Address:"No.34,Hunupitiya Road,Colombo-02,Sri Lanka",ContactPerson:"Mr. Samantha Pushpakumara",Email:"",Mobile:"2459374-5",Fax:"",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:null,visibility:"1",created_at:"2023-08-09 15:20:22",updated_at:"2023-09-05 11:31:23"},{ID:"17",Country_id:"238",Continent:"AS",SubContinent:"SEA",CountryIso3:"VNM",CountryName_en:"Vietnam",CountryName_zh:"\u8D8A\u5357",CompanyName:"VN CS INTERNATIONAL",CompanyMajor:"0",Tel:"+84-8-2237-7771",Address:"CONG TY TNHH THUONG MAI DICH VU VN CS SO 97/31 KHU PHO 1,DUONG TA17,PHOUNG THOI AN,QUAN 12,THANH PHO HOCHIMINH,VIETNAM",ContactPerson:"Mr. Bai Wen Jie",Email:"bwj1975@hotmail.com",Mobile:"+84-12-0453-1005",Fax:"",OfficeHour:"",Twitter:"",Twitter_Visibility:"1",Facebook:"",Facebook_Visibility:"1",Instagram:"",Instagram_Visibility:"1",Linkedin:"",Linkedin_Visibility:"1",Skype:"",Skype_Visibility:"1",Line:"",Line_Visibility:"1",Youtube:"",Youtube_Visibility:"1",Image:null,visibility:"1",created_at:"2023-08-09 15:25:01",updated_at:"2023-08-31 16:03:26"}],partners:[{Pa_ID:"3",Pa_Title:"Juki",sort:"1",visibility:"1",Pa_Pic:"Pa_64ec38a8c62e6.png",created_at:"2023-08-28 13:38:41",updated_at:"2023-08-28 14:03:26"},{Pa_ID:"4",Pa_Title:"Siruba",sort:"2",visibility:"1",Pa_Pic:"Pa_64ec38bd9d4c9.png",created_at:"2023-08-28 14:03:41",updated_at:"2023-08-28 14:03:41"}],about:[{At_ID:"1",At_Subject_en:"Innovation | Progressive | Harmonious",At_Subject_zh:"\u5275\u65B0 | \u9032\u53D6 | \u548C\u8AE7",At_Subtopic_en:"Quality First",At_Subtopic_zh:"\u54C1\u8CEA\u7B2C\u4E00",At_Message_en:"ISM will satisfy our customers' needs with high quality, on-time delivery and fast service.",At_Message_zh:"ISM \u4EE5\u9AD8\u54C1\u8CEA\u3001\u6E96\u6642\u4EA4\u8CA8\u548C\u5FEB\u6377\u670D\u52D9 \u6EFF\u8DB3\u5BA2\u6236\u7684\u9700\u6C42\u3002",At_Sort:"1",At_Visible:"1",At_Youtube:"https://www.youtube.com/watch?v=pznU1vulsvY",At_Title01_en:"Motor",At_Title01_zh:"\u99AC\u9054",At_Intro01_en:"Servo Motor | Clutch Motor | Induction Motor : OEM / ODM.",At_Intro01_zh:"\u4F3A\u670D\u99AC\u9054 | \u96E2\u5408\u99AC\u9054 | \u611F\u61C9\u99AC\u9054 : \u4EE3\u5DE5 / \u88FD\u9020",At_Title02_en:"Control box",At_Title02_zh:"\u63A7\u5236\u7BB1",At_Intro02_en:"Sewing Machine Controller Box OEM/ODM.",At_Intro02_zh:"\u7E2B\u7D09\u6A5F\u63A7\u5236\u7BB1 : \u4EE3\u5DE5 / \u88FD\u9020",At_Title03_en:"Standing Operation Pedal",At_Title03_zh:"\u7AD9\u7ACB\u5F0F\u8E0F\u677F",At_Intro03_en:"Standing Operation Pedal OEM/ODM.",At_Intro03_zh:"\u7AD9\u7ACB\u5F0F\u8E0F\u677F : \u4EE3\u5DE5 / \u88FD\u9020",At_Title04_en:"IoT-Data Capture Box",At_Title04_zh:"IoT-\u6578\u64DA\u76D2",At_Intro04_en:"The first step to becoming a smart factory.",At_Intro04_zh:"\u6210\u70BA\u667A\u6167\u5DE5\u5EE0\u7684\u7B2C\u4E00\u6B65",created_at:"2023-09-05 14:22:39",updated_at:"2023-09-14 14:02:50"}]};const i2={class:"Body w-full font-mono tracking-wide text-gray-200"},l2={class:"Main w-full"},s2={setup(t){const e=vd(),n=xa(),r=br(),a=_m(),i=$m(),l=ml(),s=t2(),o=Al(),c=e2(),u=n2(),g=r2();Z(()=>r.globleInfos.serverURL);const p=Z(()=>n.popupInfos.isPopup);return e.setUrlRouter(),e.reSetUrlRouter(),(()=>{let E=a2,S=v=>Array.isArray(v)?v:[];a.setNewsInfos(S(E==null?void 0:E.news)),i.setProductsInfos(S(E==null?void 0:E.products)),l.setCategoriesInfos(S(E==null?void 0:E.categories)),c.setBannerInfos(S(E==null?void 0:E.banner)),u.setPartnersInfos(S(E==null?void 0:E.partners)),g.setAboutInfos(S(E==null?void 0:E.about));let w=S(E==null?void 0:E.service_centers);s.setServiceCenterInfos(w);let A=w.find(v=>v.CompanyMajor=="1")||{};o.setHeadquartersInfos(A)})(),n.setUrlRouter(),n.reSetUrlRouter(),(E,S)=>{const w=sl("router-view");return ht(),yt(jt,null,[xn(Ut(E.aa)+" ",1),j("body",i2,[At(p)?(ht(),ol(Xm,{key:0})):ne("",!0),Ct(um,{class:"Header"}),j("main",l2,[Ct(w)]),Ct(jm)])],64)}}};var o2=kl(s2,[["__scopeId","data-v-0dff47dc"]]);const c2="modulepreload",io={},d2="./",Ya=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${d2}${r}`,r in io)return;io[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":c2,a||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),a)return new Promise((s,o)=>{l.addEventListener("load",s),l.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},bd=Xp({history:fp(),routes:[{path:"/",component:()=>Ya(()=>import("./Home.b07e3e0e.js"),["assets/Home.b07e3e0e.js","assets/Home.4bb72098.css"])},{path:"/product_categories",component:()=>Ya(()=>import("./ProductCategories.6b977296.js"),["assets/ProductCategories.6b977296.js","assets/ProductCategories.cafb2761.css"])},{path:"/product_info",component:()=>Ya(()=>import("./ProductInfo.67138266.js"),["assets/ProductInfo.67138266.js","assets/ProductInfo.5c1b9fe0.css"])}]}),u2={GENERAL:{Submit:"Submit",save:"Save",close:"Close"},LinkList:{"#":"Home",About:"About ISM",Product:"Product",News:"News",ServiceCenter:"Service Center",Contact:"Contact",Partner:"Partner"},Product:{All:"All",New:"New",Hot:"Hot",Recommend:"Recommend"},ServiceCenter:{All:"All",Africa:"Africa",Americas:"Americas",Asia:"Asia",Europe:"Europe",Oceania:"Oceania"},Contact:{Name:"Name",Email:"Email",Subject:"Subject",Message:"Message",Address:"Address",TEL:"TEL"},ProductInfo:{ProductDetail:"Product Detail"},Footer:{SocialMedia:"Social Media",Links:"Links",Product:"Product",CompanyFirstName:"Yong Huei Hsing",CompanySecondName:"Electric Industries Corp."}},g2={GENERAL:{Submit:"\u78BA\u8A8D",save:"\u5132\u5B58",close:"\u95DC\u9589"},LinkList:{"#":"\u9996\u9801",About:"\u95DC\u65BC\u6211\u5011",Product:"\u7522\u54C1",News:"\u6700\u65B0\u6D88\u606F",ServiceCenter:"\u670D\u52D9\u64DA\u9EDE",Contact:"\u806F\u7D61\u6211\u5011",Partner:"\u5408\u4F5C\u5925\u4F34"},Product:{All:"\u5168\u90E8",New:"\u6700\u65B0",Hot:"\u53D7\u6B61\u8FCE",Recommend:"\u63A8\u85A6"},ServiceCenter:{All:"\u5168\u90E8",Africa:"\u975E\u6D32",Americas:"\u7F8E\u6D32",Asia:"\u4E9E\u6D32",Europe:"\u6B50\u6D32",Oceania:"\u5927\u6D0B\u6D32"},Contact:{Name:"\u59D3\u540D",Email:"\u4FE1\u7BB1",Subject:"\u6A19\u984C",Message:"\u5167\u5BB9",Address:"\u5730\u5740",TEL:"\u96FB\u8A71"},ProductInfo:{ProductDetail:"\u7522\u54C1\u898F\u683C"},Footer:{SocialMedia:"\u793E\u7FA4\u5A92\u9AD4",Links:"\u9023\u7D50",Product:"\u7522\u54C1",CompanyFirstName:"\u6C38\u8F1D\u8208",CompanySecondName:"\u96FB\u6A5F\u5DE5\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8"}};let f2={en:u2,zh:g2};const p2=localStorage.getItem("language")||"en",A2=N1({locale:p2,messages:f2});var Fe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},yd="Expected a function",lo=0/0,m2="[object Symbol]",h2=/^\s+|\s+$/g,v2=/^[-+]0x[0-9a-f]+$/i,b2=/^0b[01]+$/i,y2=/^0o[0-7]+$/i,I2=parseInt,w2=typeof Fe=="object"&&Fe&&Fe.Object===Object&&Fe,C2=typeof self=="object"&&self&&self.Object===Object&&self,E2=w2||C2||Function("return this")(),S2=Object.prototype,k2=S2.toString,B2=Math.max,O2=Math.min,Ga=function(){return E2.Date.now()};function P2(t,e,n){var r,a,i,l,s,o,c=0,u=!1,g=!1,p=!0;if(typeof t!="function")throw new TypeError(yd);e=so(e)||0,sa(n)&&(u=!!n.leading,g="maxWait"in n,i=g?B2(so(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p);function I(P){var N=r,L=a;return r=a=void 0,c=P,l=t.apply(L,N),l}function E(P){return c=P,s=setTimeout(A,e),u?I(P):l}function S(P){var N=P-o,L=P-c,G=e-N;return g?O2(G,i-L):G}function w(P){var N=P-o,L=P-c;return o===void 0||N>=e||N<0||g&&L>=i}function A(){var P=Ga();if(w(P))return v(P);s=setTimeout(A,S(P))}function v(P){return s=void 0,p&&r?I(P):(r=a=void 0,l)}function k(){s!==void 0&&clearTimeout(s),c=0,r=o=a=s=void 0}function y(){return s===void 0?l:v(Ga())}function x(){var P=Ga(),N=w(P);if(r=arguments,a=this,o=P,N){if(s===void 0)return E(o);if(g)return s=setTimeout(A,e),I(o)}return s===void 0&&(s=setTimeout(A,e)),l}return x.cancel=k,x.flush=y,x}function x2(t,e,n){var r=!0,a=!0;if(typeof t!="function")throw new TypeError(yd);return sa(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),P2(t,e,{leading:r,maxWait:e,trailing:a})}function sa(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Q2(t){return!!t&&typeof t=="object"}function N2(t){return typeof t=="symbol"||Q2(t)&&k2.call(t)==m2}function so(t){if(typeof t=="number")return t;if(N2(t))return lo;if(sa(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=sa(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(h2,"");var n=b2.test(t);return n||y2.test(t)?I2(t.slice(2),n?2:8):v2.test(t)?lo:+t}var V2=x2,R2="Expected a function",oo=0/0,q2="[object Symbol]",M2=/^\s+|\s+$/g,j2=/^[-+]0x[0-9a-f]+$/i,H2=/^0b[01]+$/i,L2=/^0o[0-7]+$/i,F2=parseInt,D2=typeof Fe=="object"&&Fe&&Fe.Object===Object&&Fe,U2=typeof self=="object"&&self&&self.Object===Object&&self,T2=D2||U2||Function("return this")(),Y2=Object.prototype,G2=Y2.toString,W2=Math.max,z2=Math.min,Wa=function(){return T2.Date.now()};function J2(t,e,n){var r,a,i,l,s,o,c=0,u=!1,g=!1,p=!0;if(typeof t!="function")throw new TypeError(R2);e=co(e)||0,xi(n)&&(u=!!n.leading,g="maxWait"in n,i=g?W2(co(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p);function I(P){var N=r,L=a;return r=a=void 0,c=P,l=t.apply(L,N),l}function E(P){return c=P,s=setTimeout(A,e),u?I(P):l}function S(P){var N=P-o,L=P-c,G=e-N;return g?z2(G,i-L):G}function w(P){var N=P-o,L=P-c;return o===void 0||N>=e||N<0||g&&L>=i}function A(){var P=Wa();if(w(P))return v(P);s=setTimeout(A,S(P))}function v(P){return s=void 0,p&&r?I(P):(r=a=void 0,l)}function k(){s!==void 0&&clearTimeout(s),c=0,r=o=a=s=void 0}function y(){return s===void 0?l:v(Wa())}function x(){var P=Wa(),N=w(P);if(r=arguments,a=this,o=P,N){if(s===void 0)return E(o);if(g)return s=setTimeout(A,e),I(o)}return s===void 0&&(s=setTimeout(A,e)),l}return x.cancel=k,x.flush=y,x}function xi(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function K2(t){return!!t&&typeof t=="object"}function Z2(t){return typeof t=="symbol"||K2(t)&&G2.call(t)==q2}function co(t){if(typeof t=="number")return t;if(Z2(t))return oo;if(xi(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=xi(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(M2,"");var n=H2.test(t);return n||L2.test(t)?F2(t.slice(2),n?2:8):j2.test(t)?oo:+t}var uo=J2,Id=function(){};function wd(t){var e=void 0,n=void 0,r=void 0;for(e=0;e<t.length;e+=1)if(n=t[e],n.dataset&&n.dataset.aos||(r=n.children&&wd(n.children),r))return!0;return!1}function X2(t){!t||t.forEach(function(e){var n=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes),a=n.concat(r);if(wd(a))return Id()})}function Cd(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function _2(){return!!Cd()}function $2(t,e){var n=window.document,r=Cd(),a=new r(X2);Id=e,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var go={isSupported:_2,ready:$2},t0=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e0=function(){function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),n0=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r0=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a0=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i0=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l0=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function fo(){return navigator.userAgent||navigator.vendor||window.opera||""}var s0=function(){function t(){t0(this,t)}return e0(t,[{key:"phone",value:function(){var n=fo();return!!(r0.test(n)||a0.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=fo();return!!(i0.test(n)||l0.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),zr=new s0,o0=function(e,n){return n&&n.forEach(function(r){return e.classList.add(r)})},c0=function(e,n){return n&&n.forEach(function(r){return e.classList.remove(r)})},Nr=function(e,n){var r=void 0;return zr.ie11()?(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,!0,!0,{detail:n})):r=new CustomEvent(e,{detail:n}),document.dispatchEvent(r)},d0=function(e,n){var r=e.options,a=e.position,i=e.node;e.data;var l=function(){!e.animated||(c0(i,r.animatedClassNames),Nr("aos:out",i),e.options.id&&Nr("aos:in:"+e.options.id,i),e.animated=!1)},s=function(){e.animated||(o0(i,r.animatedClassNames),Nr("aos:in",i),e.options.id&&Nr("aos:in:"+e.options.id,i),e.animated=!0)};r.mirror&&n>=a.out&&!r.once?l():n>=a.in?s():e.animated&&!r.once&&l()},po=function(e){return e.forEach(function(n,r){return d0(n,window.pageYOffset)})},Ed=function(e){for(var n=0,r=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)n+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),r+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:r,left:n}},Ye=function(t,e,n){var r=t.getAttribute("data-aos-"+e);if(typeof r!="undefined"){if(r==="true")return!0;if(r==="false")return!1}return r||n},u0=function(e,n,r){var a=window.innerHeight,i=Ye(e,"anchor"),l=Ye(e,"anchor-placement"),s=Number(Ye(e,"offset",l?0:n)),o=l||r,c=e;i&&document.querySelectorAll(i)&&(c=document.querySelectorAll(i)[0]);var u=Ed(c).top-a;switch(o){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=a/2;break;case"center-center":u+=a/2+c.offsetHeight/2;break;case"bottom-center":u+=a/2+c.offsetHeight;break;case"top-top":u+=a;break;case"bottom-top":u+=a+c.offsetHeight;break;case"center-top":u+=a+c.offsetHeight/2;break}return u+s},g0=function(e,n){var r=Ye(e,"anchor"),a=Ye(e,"offset",n),i=e;r&&document.querySelectorAll(r)&&(i=document.querySelectorAll(r)[0]);var l=Ed(i).top;return l+i.offsetHeight-a},f0=function(e,n){return e.forEach(function(r,a){var i=Ye(r.node,"mirror",n.mirror),l=Ye(r.node,"once",n.once),s=Ye(r.node,"id"),o=n.useClassNames&&r.node.getAttribute("data-aos"),c=[n.animatedClassName].concat(o?o.split(" "):[]).filter(function(u){return typeof u=="string"});n.initClassName&&r.node.classList.add(n.initClassName),r.position={in:u0(r.node,n.offset,n.anchorPlacement),out:i&&g0(r.node,n.offset)},r.options={once:l,mirror:i,animatedClassNames:c,id:s}}),e},Sd=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},we=[],Ao=!1,St={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},kd=function(){return document.all&&!window.atob},p0=function(){return we=f0(we,St),po(we),window.addEventListener("scroll",V2(function(){po(we,St.once)},St.throttleDelay)),we},_e=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(Ao=!0),Ao&&p0()},Bd=function(){if(we=Sd(),Pd(St.disable)||kd())return Od();_e()},Od=function(){we.forEach(function(e,n){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),St.initClassName&&e.node.classList.remove(St.initClassName),St.animatedClassName&&e.node.classList.remove(St.animatedClassName)})},Pd=function(e){return e===!0||e==="mobile"&&zr.mobile()||e==="phone"&&zr.phone()||e==="tablet"&&zr.tablet()||typeof e=="function"&&e()===!0},A0=function(e){return St=n0(St,e),we=Sd(),!St.disableMutationObserver&&!go.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),St.disableMutationObserver=!0),St.disableMutationObserver||go.ready("[data-aos]",Bd),Pd(St.disable)||kd()?Od():(document.querySelector("body").setAttribute("data-aos-easing",St.easing),document.querySelector("body").setAttribute("data-aos-duration",St.duration),document.querySelector("body").setAttribute("data-aos-delay",St.delay),["DOMContentLoaded","load"].indexOf(St.startEvent)===-1?document.addEventListener(St.startEvent,function(){_e(!0)}):window.addEventListener("load",function(){_e(!0)}),St.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&_e(!0),window.addEventListener("resize",uo(_e,St.debounceDelay,!0)),window.addEventListener("orientationchange",uo(_e,St.debounceDelay,!0)),we)},m0={init:A0,refresh:_e,refreshHard:Bd};function mo(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mo(Object(n),!0).forEach(function(r){Qt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mo(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oa(t){return oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oa(t)}function h0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ho(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v0(t,e,n){return e&&ho(t.prototype,e),n&&ho(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Qt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bl(t,e){return y0(t)||w0(t,e)||xd(t,e)||E0()}function Ir(t){return b0(t)||I0(t)||xd(t)||C0()}function b0(t){if(Array.isArray(t))return Qi(t)}function y0(t){if(Array.isArray(t))return t}function I0(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function w0(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,l,s;try{for(n=n.call(t);!(a=(l=n.next()).done)&&(r.push(l.value),!(e&&r.length===e));a=!0);}catch(o){i=!0,s=o}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function xd(t,e){if(!!t){if(typeof t=="string")return Qi(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qi(t,e)}}function Qi(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vo=function(){},Ol={},Qd={},Nd=null,Vd={mark:vo,measure:vo};try{typeof window!="undefined"&&(Ol=window),typeof document!="undefined"&&(Qd=document),typeof MutationObserver!="undefined"&&(Nd=MutationObserver),typeof performance!="undefined"&&(Vd=performance)}catch{}var S0=Ol.navigator||{},bo=S0.userAgent,yo=bo===void 0?"":bo,We=Ol,wt=Qd,Io=Nd,Vr=Vd;We.document;var xe=!!wt.documentElement&&!!wt.head&&typeof wt.addEventListener=="function"&&typeof wt.createElement=="function",Rd=~yo.indexOf("MSIE")||~yo.indexOf("Trident/"),Rr,qr,Mr,jr,Hr,Se="___FONT_AWESOME___",Ni=16,qd="fa",Md="svg-inline--fa",cn="data-fa-i2svg",Vi="data-fa-pseudo-element",k0="data-fa-pseudo-element-pending",Pl="data-prefix",xl="data-icon",wo="fontawesome-i2svg",B0="async",O0=["HTML","HEAD","STYLE","SCRIPT"],jd=function(){try{return!0}catch{return!1}}(),It="classic",kt="sharp",Ql=[It,kt];function wr(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[It]}})}var fr=wr((Rr={},Qt(Rr,It,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Qt(Rr,kt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Rr)),pr=wr((qr={},Qt(qr,It,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Qt(qr,kt,{solid:"fass",regular:"fasr",light:"fasl"}),qr)),Ar=wr((Mr={},Qt(Mr,It,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Qt(Mr,kt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Mr)),P0=wr((jr={},Qt(jr,It,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Qt(jr,kt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),jr)),x0=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Hd="fa-layers-text",Q0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,N0=wr((Hr={},Qt(Hr,It,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Qt(Hr,kt,{900:"fass",400:"fasr",300:"fasl"}),Hr)),Ld=[1,2,3,4,5,6,7,8,9,10],V0=Ld.concat([11,12,13,14,15,16,17,18,19,20]),R0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],en={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mr=new Set;Object.keys(pr[It]).map(mr.add.bind(mr));Object.keys(pr[kt]).map(mr.add.bind(mr));var q0=[].concat(Ql,Ir(mr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",en.GROUP,en.SWAP_OPACITY,en.PRIMARY,en.SECONDARY]).concat(Ld.map(function(t){return"".concat(t,"x")})).concat(V0.map(function(t){return"w-".concat(t)})),rr=We.FontAwesomeConfig||{};function M0(t){var e=wt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function j0(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(wt&&typeof wt.querySelector=="function"){var H0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];H0.forEach(function(t){var e=Bl(t,2),n=e[0],r=e[1],a=j0(M0(n));a!=null&&(rr[r]=a)})}var Fd={styleDefault:"solid",familyDefault:"classic",cssPrefix:qd,replacementClass:Md,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rr.familyPrefix&&(rr.cssPrefix=rr.familyPrefix);var jn=T(T({},Fd),rr);jn.autoReplaceSvg||(jn.observeMutations=!1);var W={};Object.keys(Fd).forEach(function(t){Object.defineProperty(W,t,{enumerable:!0,set:function(n){jn[t]=n,ar.forEach(function(r){return r(W)})},get:function(){return jn[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){jn.cssPrefix=e,ar.forEach(function(n){return n(W)})},get:function(){return jn.cssPrefix}});We.FontAwesomeConfig=W;var ar=[];function L0(t){return ar.push(t),function(){ar.splice(ar.indexOf(t),1)}}var qe=Ni,Ae={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function F0(t){if(!(!t||!xe)){var e=wt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=wt.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],l=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(r=i)}return wt.head.insertBefore(e,r),t}}var D0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hr(){for(var t=12,e="";t-- >0;)e+=D0[Math.random()*62|0];return e}function Dn(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Nl(t){return t.classList?Dn(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Dd(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function U0(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Dd(t[n]),'" ')},"").trim()}function Qa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Vl(t){return t.size!==Ae.size||t.x!==Ae.x||t.y!==Ae.y||t.rotate!==Ae.rotate||t.flipX||t.flipY}function T0(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),l="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(i," ").concat(l," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:o,path:c}}function Y0(t){var e=t.transform,n=t.width,r=n===void 0?Ni:n,a=t.height,i=a===void 0?Ni:a,l=t.startCentered,s=l===void 0?!1:l,o="";return s&&Rd?o+="translate(".concat(e.x/qe-r/2,"em, ").concat(e.y/qe-i/2,"em) "):s?o+="translate(calc(-50% + ".concat(e.x/qe,"em), calc(-50% + ").concat(e.y/qe,"em)) "):o+="translate(".concat(e.x/qe,"em, ").concat(e.y/qe,"em) "),o+="scale(".concat(e.size/qe*(e.flipX?-1:1),", ").concat(e.size/qe*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var G0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ud(){var t=qd,e=Md,n=W.cssPrefix,r=W.replacementClass,a=G0;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),l=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(l,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Co=!1;function za(){W.autoAddCss&&!Co&&(F0(Ud()),Co=!0)}var W0={mixout:function(){return{dom:{css:Ud,insertCss:za}}},hooks:function(){return{beforeDOMElementCreation:function(){za()},beforeI2svg:function(){za()}}}},ke=We||{};ke[Se]||(ke[Se]={});ke[Se].styles||(ke[Se].styles={});ke[Se].hooks||(ke[Se].hooks={});ke[Se].shims||(ke[Se].shims=[]);var le=ke[Se],Td=[],z0=function t(){wt.removeEventListener("DOMContentLoaded",t),ca=1,Td.map(function(e){return e()})},ca=!1;xe&&(ca=(wt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(wt.readyState),ca||wt.addEventListener("DOMContentLoaded",z0));function J0(t){!xe||(ca?setTimeout(t,0):Td.push(t))}function Cr(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Dd(t):"<".concat(e," ").concat(U0(r),">").concat(i.map(Cr).join(""),"</").concat(e,">")}function Eo(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var K0=function(e,n){return function(r,a,i,l){return e.call(n,r,a,i,l)}},Ja=function(e,n,r,a){var i=Object.keys(e),l=i.length,s=a!==void 0?K0(n,a):n,o,c,u;for(r===void 0?(o=1,u=e[i[0]]):(o=0,u=r);o<l;o++)c=i[o],u=s(u,e[c],c,e);return u};function Z0(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Ri(t){var e=Z0(t);return e.length===1?e[0].toString(16):null}function X0(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function So(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function qi(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=So(e);typeof le.hooks.addPack=="function"&&!a?le.hooks.addPack(t,So(e)):le.styles[t]=T(T({},le.styles[t]||{}),i),t==="fas"&&qi("fa",e)}var Lr,Fr,Dr,Cn=le.styles,_0=le.shims,$0=(Lr={},Qt(Lr,It,Object.values(Ar[It])),Qt(Lr,kt,Object.values(Ar[kt])),Lr),Rl=null,Yd={},Gd={},Wd={},zd={},Jd={},th=(Fr={},Qt(Fr,It,Object.keys(fr[It])),Qt(Fr,kt,Object.keys(fr[kt])),Fr);function eh(t){return~q0.indexOf(t)}function nh(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!eh(a)?a:null}var Kd=function(){var e=function(i){return Ja(Cn,function(l,s,o){return l[o]=Ja(s,i,{}),l},{})};Yd=e(function(a,i,l){if(i[3]&&(a[i[3]]=l),i[2]){var s=i[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){a[o.toString(16)]=l})}return a}),Gd=e(function(a,i,l){if(a[l]=l,i[2]){var s=i[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){a[o]=l})}return a}),Jd=e(function(a,i,l){var s=i[2];return a[l]=l,s.forEach(function(o){a[o]=l}),a});var n="far"in Cn||W.autoFetchSvg,r=Ja(_0,function(a,i){var l=i[0],s=i[1],o=i[2];return s==="far"&&!n&&(s="fas"),typeof l=="string"&&(a.names[l]={prefix:s,iconName:o}),typeof l=="number"&&(a.unicodes[l.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});Wd=r.names,zd=r.unicodes,Rl=Na(W.styleDefault,{family:W.familyDefault})};L0(function(t){Rl=Na(t.styleDefault,{family:W.familyDefault})});Kd();function ql(t,e){return(Yd[t]||{})[e]}function rh(t,e){return(Gd[t]||{})[e]}function nn(t,e){return(Jd[t]||{})[e]}function Zd(t){return Wd[t]||{prefix:null,iconName:null}}function ah(t){var e=zd[t],n=ql("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ze(){return Rl}var Ml=function(){return{prefix:null,iconName:null,rest:[]}};function Na(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?It:n,a=fr[r][t],i=pr[r][t]||pr[r][a],l=t in le.styles?t:null;return i||l||null}var ko=(Dr={},Qt(Dr,It,Object.keys(Ar[It])),Qt(Dr,kt,Object.keys(Ar[kt])),Dr);function Va(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},Qt(e,It,"".concat(W.cssPrefix,"-").concat(It)),Qt(e,kt,"".concat(W.cssPrefix,"-").concat(kt)),e),l=null,s=It;(t.includes(i[It])||t.some(function(c){return ko[It].includes(c)}))&&(s=It),(t.includes(i[kt])||t.some(function(c){return ko[kt].includes(c)}))&&(s=kt);var o=t.reduce(function(c,u){var g=nh(W.cssPrefix,u);if(Cn[u]?(u=$0[s].includes(u)?P0[s][u]:u,l=u,c.prefix=u):th[s].indexOf(u)>-1?(l=u,c.prefix=Na(u,{family:s})):g?c.iconName=g:u!==W.replacementClass&&u!==i[It]&&u!==i[kt]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var p=l==="fa"?Zd(c.iconName):{},I=nn(c.prefix,c.iconName);p.prefix&&(l=null),c.iconName=p.iconName||I||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Cn.far&&Cn.fas&&!W.autoFetchSvg&&(c.prefix="fas")}return c},Ml());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===kt&&(Cn.fass||W.autoFetchSvg)&&(o.prefix="fass",o.iconName=nn(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||l==="fa")&&(o.prefix=ze()||"fas"),o}var ih=function(){function t(){h0(this,t),this.definitions={}}return v0(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var l=a.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),l[s]),qi(s,l[s]);var o=Ar[It][s];o&&qi(o,l[s]),Kd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var l=a[i],s=l.prefix,o=l.iconName,c=l.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(g){typeof g=="string"&&(n[s][g]=c)}),n[s][o]=c}),n}}]),t}(),Bo=[],En={},Bn={},lh=Object.keys(Bn);function sh(t,e){var n=e.mixoutsTo;return Bo=t,En={},Object.keys(Bn).forEach(function(r){lh.indexOf(r)===-1&&delete Bn[r]}),Bo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(l){typeof a[l]=="function"&&(n[l]=a[l]),oa(a[l])==="object"&&Object.keys(a[l]).forEach(function(s){n[l]||(n[l]={}),n[l][s]=a[l][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(l){En[l]||(En[l]=[]),En[l].push(i[l])})}r.provides&&r.provides(Bn)}),n}function Mi(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=En[t]||[];return i.forEach(function(l){e=l.apply(null,[e].concat(r))}),e}function dn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=En[t]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Bn[t]?Bn[t].apply(null,e):void 0}function ji(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ze();if(!!e)return e=nn(n,e)||e,Eo(Xd.definitions,n,e)||Eo(le.styles,n,e)}var Xd=new ih,oh=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,dn("noAuto")},ch={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xe?(dn("beforeI2svg",e),Be("pseudoElements2svg",e),Be("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,J0(function(){uh({autoReplaceSvgRoot:n}),dn("watch",e)})}},dh={icon:function(e){if(e===null)return null;if(oa(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:nn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Na(e[0]);return{prefix:r,iconName:nn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(W.cssPrefix,"-"))>-1||e.match(x0))){var a=Va(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||ze(),iconName:nn(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=ze();return{prefix:i,iconName:nn(i,e)||e}}}},ee={noAuto:oh,config:W,dom:ch,parse:dh,library:Xd,findIconDefinition:ji,toHtml:Cr},uh=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?wt:n;(Object.keys(le.styles).length>0||W.autoFetchSvg)&&xe&&W.autoReplaceSvg&&ee.dom.i2svg({node:r})};function Ra(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Cr(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!xe){var r=wt.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function gh(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,l=t.transform;if(Vl(l)&&n.found&&!r.found){var s=n.width,o=n.height,c={x:s/o/2,y:.5};a.style=Qa(T(T({},i),{},{"transform-origin":"".concat(c.x+l.x/16,"em ").concat(c.y+l.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function fh(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,l=i===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:l}),children:r}]}]}function jl(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,l=t.transform,s=t.symbol,o=t.title,c=t.maskId,u=t.titleId,g=t.extra,p=t.watchable,I=p===void 0?!1:p,E=r.found?r:n,S=E.width,w=E.height,A=a==="fak",v=[W.replacementClass,i?"".concat(W.cssPrefix,"-").concat(i):""].filter(function(G){return g.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(g.classes).join(" "),k={children:[],attributes:T(T({},g.attributes),{},{"data-prefix":a,"data-icon":i,class:v,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(w)})},y=A&&!~g.classes.indexOf("fa-fw")?{width:"".concat(S/w*16*.0625,"em")}:{};I&&(k.attributes[cn]=""),o&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||hr())},children:[o]}),delete k.attributes.title);var x=T(T({},k),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:l,symbol:s,styles:T(T({},y),g.styles)}),P=r.found&&n.found?Be("generateAbstractMask",x)||{children:[],attributes:{}}:Be("generateAbstractIcon",x)||{children:[],attributes:{}},N=P.children,L=P.attributes;return x.children=N,x.attributes=L,s?fh(x):gh(x)}function Oo(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,l=t.extra,s=t.watchable,o=s===void 0?!1:s,c=T(T(T({},l.attributes),i?{title:i}:{}),{},{class:l.classes.join(" ")});o&&(c[cn]="");var u=T({},l.styles);Vl(a)&&(u.transform=Y0({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var g=Qa(u);g.length>0&&(c.style=g);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ph(t){var e=t.content,n=t.title,r=t.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qa(r.styles);i.length>0&&(a.style=i);var l=[];return l.push({tag:"span",attributes:a,children:[e]}),n&&l.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),l}var Ka=le.styles;function Hi(t){var e=t[0],n=t[1],r=t.slice(4),a=Bl(r,1),i=a[0],l=null;return Array.isArray(i)?l={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(en.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(en.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(en.PRIMARY),fill:"currentColor",d:i[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:l}}var Ah={found:!1,width:512,height:512};function mh(t,e){!jd&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Li(t,e){var n=e;return e==="fa"&&W.styleDefault!==null&&(e=ze()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Zd(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ka[e]&&Ka[e][t]){var l=Ka[e][t];return r(Hi(l))}mh(t,e),r(T(T({},Ah),{},{icon:W.showMissingIcons&&t?Be("missingIconAbstract")||{}:{}}))})}var Po=function(){},Fi=W.measurePerformance&&Vr&&Vr.mark&&Vr.measure?Vr:{mark:Po,measure:Po},Kn='FA "6.4.0"',hh=function(e){return Fi.mark("".concat(Kn," ").concat(e," begins")),function(){return _d(e)}},_d=function(e){Fi.mark("".concat(Kn," ").concat(e," ends")),Fi.measure("".concat(Kn," ").concat(e),"".concat(Kn," ").concat(e," begins"),"".concat(Kn," ").concat(e," ends"))},Hl={begin:hh,end:_d},Jr=function(){};function xo(t){var e=t.getAttribute?t.getAttribute(cn):null;return typeof e=="string"}function vh(t){var e=t.getAttribute?t.getAttribute(Pl):null,n=t.getAttribute?t.getAttribute(xl):null;return e&&n}function bh(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function yh(){if(W.autoReplaceSvg===!0)return Kr.replace;var t=Kr[W.autoReplaceSvg];return t||Kr.replace}function Ih(t){return wt.createElementNS("http://www.w3.org/2000/svg",t)}function wh(t){return wt.createElement(t)}function $d(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Ih:wh:n;if(typeof t=="string")return wt.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(l){a.setAttribute(l,t.attributes[l])});var i=t.children||[];return i.forEach(function(l){a.appendChild($d(l,{ceFn:r}))}),a}function Ch(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Kr={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore($d(a),n)}),n.getAttribute(cn)===null&&W.keepOriginalSource){var r=wt.createComment(Ch(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Nl(n).indexOf(W.replacementClass))return Kr.replace(e);var a=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,o){return o===W.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var l=r.map(function(s){return Cr(s)}).join(`
`);n.setAttribute(cn,""),n.innerHTML=l}};function Qo(t){t()}function tu(t,e){var n=typeof e=="function"?e:Jr;if(t.length===0)n();else{var r=Qo;W.mutateApproach===B0&&(r=We.requestAnimationFrame||Qo),r(function(){var a=yh(),i=Hl.begin("mutate");t.map(a),i(),n()})}}var Ll=!1;function eu(){Ll=!0}function Di(){Ll=!1}var da=null;function No(t){if(!!Io&&!!W.observeMutations){var e=t.treeCallback,n=e===void 0?Jr:e,r=t.nodeCallback,a=r===void 0?Jr:r,i=t.pseudoElementsCallback,l=i===void 0?Jr:i,s=t.observeMutationsRoot,o=s===void 0?wt:s;da=new Io(function(c){if(!Ll){var u=ze();Dn(c).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!xo(g.addedNodes[0])&&(W.searchPseudoElements&&l(g.target),n(g.target)),g.type==="attributes"&&g.target.parentNode&&W.searchPseudoElements&&l(g.target.parentNode),g.type==="attributes"&&xo(g.target)&&~R0.indexOf(g.attributeName))if(g.attributeName==="class"&&vh(g.target)){var p=Va(Nl(g.target)),I=p.prefix,E=p.iconName;g.target.setAttribute(Pl,I||u),E&&g.target.setAttribute(xl,E)}else bh(g.target)&&a(g.target)})}}),xe&&da.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Eh(){!da||da.disconnect()}function Sh(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),l=i[0],s=i.slice(1);return l&&s.length>0&&(r[l]=s.join(":").trim()),r},{})),n}function kh(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Va(Nl(t));return a.prefix||(a.prefix=ze()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=rh(a.prefix,t.innerText)||ql(a.prefix,Ri(t.innerText))),!a.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Bh(t){var e=Dn(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return W.autoA11y&&(n?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||hr()):(e["aria-hidden"]="true",e.focusable="false")),e}function Oh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ae,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=kh(t),r=n.iconName,a=n.prefix,i=n.rest,l=Bh(t),s=Mi("parseNodeAttributes",{},t),o=e.styleParser?Sh(t):[];return T({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Ae,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:l}},s)}var Ph=le.styles;function nu(t){var e=W.autoReplaceSvg==="nest"?Vo(t,{styleParser:!1}):Vo(t);return~e.extra.classes.indexOf(Hd)?Be("generateLayersText",t,e):Be("generateSvgReplacementMutation",t,e)}var Je=new Set;Ql.map(function(t){Je.add("fa-".concat(t))});Object.keys(fr[It]).map(Je.add.bind(Je));Object.keys(fr[kt]).map(Je.add.bind(Je));Je=Ir(Je);function Ro(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xe)return Promise.resolve();var n=wt.documentElement.classList,r=function(g){return n.add("".concat(wo,"-").concat(g))},a=function(g){return n.remove("".concat(wo,"-").concat(g))},i=W.autoFetchSvg?Je:Ql.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ph));i.includes("fa")||i.push("fa");var l=[".".concat(Hd,":not([").concat(cn,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(cn,"])")})).join(", ");if(l.length===0)return Promise.resolve();var s=[];try{s=Dn(t.querySelectorAll(l))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var o=Hl.begin("onTree"),c=s.reduce(function(u,g){try{var p=nu(g);p&&u.push(p)}catch(I){jd||I.name==="MissingIcon"&&console.error(I)}return u},[]);return new Promise(function(u,g){Promise.all(c).then(function(p){tu(p,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),o(),u()})}).catch(function(p){o(),g(p)})})}function xh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nu(t).then(function(n){n&&tu([n],e)})}function Qh(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ji(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ji(a||{})),t(r,T(T({},n),{},{mask:a}))}}var Nh=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ae:r,i=n.symbol,l=i===void 0?!1:i,s=n.mask,o=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,g=n.title,p=g===void 0?null:g,I=n.titleId,E=I===void 0?null:I,S=n.classes,w=S===void 0?[]:S,A=n.attributes,v=A===void 0?{}:A,k=n.styles,y=k===void 0?{}:k;if(!!e){var x=e.prefix,P=e.iconName,N=e.icon;return Ra(T({type:"icon"},e),function(){return dn("beforeDOMElementCreation",{iconDefinition:e,params:n}),W.autoA11y&&(p?v["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(E||hr()):(v["aria-hidden"]="true",v.focusable="false")),jl({icons:{main:Hi(N),mask:o?Hi(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:P,transform:T(T({},Ae),a),symbol:l,title:p,maskId:u,titleId:E,extra:{attributes:v,styles:y,classes:w}})})}},Vh={mixout:function(){return{icon:Qh(Nh)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ro,n.nodeCallback=xh,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?wt:r,i=n.callback,l=i===void 0?function(){}:i;return Ro(a,l)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,l=r.titleId,s=r.prefix,o=r.transform,c=r.symbol,u=r.mask,g=r.maskId,p=r.extra;return new Promise(function(I,E){Promise.all([Li(a,s),u.iconName?Li(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var w=Bl(S,2),A=w[0],v=w[1];I([n,jl({icons:{main:A,mask:v},prefix:s,iconName:a,transform:o,symbol:c,maskId:g,title:i,titleId:l,extra:p,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,l=n.transform,s=n.styles,o=Qa(s);o.length>0&&(a.style=o);var c;return Vl(l)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:l,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Rh={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ra({type:"layer"},function(){dn("beforeDOMElementCreation",{assembler:n,params:r});var l=[];return n(function(s){Array.isArray(s)?s.map(function(o){l=l.concat(o.abstract)}):l=l.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(Ir(i)).join(" ")},children:l}]})}}}},qh={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,l=r.classes,s=l===void 0?[]:l,o=r.attributes,c=o===void 0?{}:o,u=r.styles,g=u===void 0?{}:u;return Ra({type:"counter",content:n},function(){return dn("beforeDOMElementCreation",{content:n,params:r}),ph({content:n.toString(),title:i,extra:{attributes:c,styles:g,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(Ir(s))}})})}}}},Mh={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ae:a,l=r.title,s=l===void 0?null:l,o=r.classes,c=o===void 0?[]:o,u=r.attributes,g=u===void 0?{}:u,p=r.styles,I=p===void 0?{}:p;return Ra({type:"text",content:n},function(){return dn("beforeDOMElementCreation",{content:n,params:r}),Oo({content:n,transform:T(T({},Ae),i),title:s,extra:{attributes:g,styles:I,classes:["".concat(W.cssPrefix,"-layers-text")].concat(Ir(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,l=r.extra,s=null,o=null;if(Rd){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,o=u.height/c}return W.autoA11y&&!a&&(l.attributes["aria-hidden"]="true"),Promise.resolve([n,Oo({content:n.innerHTML,width:s,height:o,transform:i,title:a,extra:l,watchable:!0})])}}},jh=new RegExp('"',"ug"),qo=[1105920,1112319];function Hh(t){var e=t.replace(jh,""),n=X0(e,0),r=n>=qo[0]&&n<=qo[1],a=e.length===2?e[0]===e[1]:!1;return{value:Ri(a?e[0]:e),isSecondary:r||a}}function Mo(t,e){var n="".concat(k0).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Dn(t.children),l=i.filter(function(N){return N.getAttribute(Vi)===e})[0],s=We.getComputedStyle(t,e),o=s.getPropertyValue("font-family").match(Q0),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(l&&!o)return t.removeChild(l),r();if(o&&u!=="none"&&u!==""){var g=s.getPropertyValue("content"),p=~["Sharp"].indexOf(o[2])?kt:It,I=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?pr[p][o[2].toLowerCase()]:N0[p][c],E=Hh(g),S=E.value,w=E.isSecondary,A=o[0].startsWith("FontAwesome"),v=ql(I,S),k=v;if(A){var y=ah(S);y.iconName&&y.prefix&&(v=y.iconName,I=y.prefix)}if(v&&!w&&(!l||l.getAttribute(Pl)!==I||l.getAttribute(xl)!==k)){t.setAttribute(n,k),l&&t.removeChild(l);var x=Oh(),P=x.extra;P.attributes[Vi]=e,Li(v,I).then(function(N){var L=jl(T(T({},x),{},{icons:{main:N,mask:Ml()},prefix:I,iconName:k,extra:P,watchable:!0})),G=wt.createElement("svg");e==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=L.map(function(nt){return Cr(nt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Lh(t){return Promise.all([Mo(t,"::before"),Mo(t,"::after")])}function Fh(t){return t.parentNode!==document.head&&!~O0.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vi)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function jo(t){if(!!xe)return new Promise(function(e,n){var r=Dn(t.querySelectorAll("*")).filter(Fh).map(Lh),a=Hl.begin("searchPseudoElements");eu(),Promise.all(r).then(function(){a(),Di(),e()}).catch(function(){a(),Di(),n()})})}var Dh={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=jo,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?wt:r;W.searchPseudoElements&&jo(a)}}},Ho=!1,Uh={mixout:function(){return{dom:{unwatch:function(){eu(),Ho=!0}}}},hooks:function(){return{bootstrap:function(){No(Mi("mutationObserverCallbacks",{}))},noAuto:function(){Eh()},watch:function(n){var r=n.observeMutationsRoot;Ho?Di():No(Mi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Lo=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),l=i[0],s=i.slice(1).join("-");if(l&&s==="h")return r.flipX=!0,r;if(l&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(l){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Th={mixout:function(){return{parse:{transform:function(n){return Lo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Lo(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,l=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),g={transform:"".concat(o," ").concat(c," ").concat(u)},p={transform:"translate(".concat(l/2*-1," -256)")},I={outer:s,inner:g,path:p};return{tag:"g",attributes:T({},I.outer),children:[{tag:"g",attributes:T({},I.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),I.path)}]}]}}}},Za={x:0,y:0,width:"100%",height:"100%"};function Fo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Yh(t){return t.tag==="g"?t.children:[t]}var Gh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Va(a.split(" ").map(function(l){return l.trim()})):Ml();return i.prefix||(i.prefix=ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,l=n.mask,s=n.maskId,o=n.transform,c=i.width,u=i.icon,g=l.width,p=l.icon,I=T0({transform:o,containerWidth:g,iconWidth:c}),E={tag:"rect",attributes:T(T({},Za),{},{fill:"white"})},S=u.children?{children:u.children.map(Fo)}:{},w={tag:"g",attributes:T({},I.inner),children:[Fo(T({tag:u.tag,attributes:T(T({},u.attributes),I.path)},S))]},A={tag:"g",attributes:T({},I.outer),children:[w]},v="mask-".concat(s||hr()),k="clip-".concat(s||hr()),y={tag:"mask",attributes:T(T({},Za),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,A]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Yh(p)},y]};return r.push(x,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(v,")")},Za)}),{children:r,attributes:a}}}},Wh={provides:function(e){var n=!1;We.matchMedia&&(n=We.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var l=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},l),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},l),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},zh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Jh=[W0,Vh,Rh,qh,Mh,Dh,Uh,Th,Gh,Wh,zh];sh(Jh,{mixoutsTo:ee});ee.noAuto;var ru=ee.config,Kh=ee.library;ee.dom;var ua=ee.parse;ee.findIconDefinition;ee.toHtml;var Zh=ee.icon;ee.layer;var Xh=ee.text;ee.counter;function Do(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function ie(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Do(Object(n),!0).forEach(function(r){zt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Do(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ga(t){return ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ga(t)}function zt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _h(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function $h(t,e){if(t==null)return{};var n=_h(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Ui(t){return tv(t)||ev(t)||nv(t)||rv()}function tv(t){if(Array.isArray(t))return Ti(t)}function ev(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nv(t,e){if(!!t){if(typeof t=="string")return Ti(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ti(t,e)}}function Ti(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var av=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},au={exports:{}};(function(t){(function(e){var n=function(A,v,k){if(!c(v)||g(v)||p(v)||I(v)||o(v))return v;var y,x=0,P=0;if(u(v))for(y=[],P=v.length;x<P;x++)y.push(n(A,v[x],k));else{y={};for(var N in v)Object.prototype.hasOwnProperty.call(v,N)&&(y[A(N,k)]=n(A,v[N],k))}return y},r=function(A,v){v=v||{};var k=v.separator||"_",y=v.split||/(?=[A-Z])/;return A.split(y).join(k)},a=function(A){return E(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(v,k){return k?k.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},i=function(A){var v=a(A);return v.substr(0,1).toUpperCase()+v.substr(1)},l=function(A,v){return r(A,v).toLowerCase()},s=Object.prototype.toString,o=function(A){return typeof A=="function"},c=function(A){return A===Object(A)},u=function(A){return s.call(A)=="[object Array]"},g=function(A){return s.call(A)=="[object Date]"},p=function(A){return s.call(A)=="[object RegExp]"},I=function(A){return s.call(A)=="[object Boolean]"},E=function(A){return A=A-0,A===A},S=function(A,v){var k=v&&"process"in v?v.process:v;return typeof k!="function"?A:function(y,x){return k(y,A,x)}},w={camelize:a,decamelize:l,pascalize:i,depascalize:l,camelizeKeys:function(A,v){return n(S(a,v),A)},decamelizeKeys:function(A,v){return n(S(l,v),A,v)},pascalizeKeys:function(A,v){return n(S(i,v),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(av)})(au);var iv=au.exports,lv=["class","style"];function sv(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=iv.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function ov(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Fl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(o){return Fl(o)}),a=Object.keys(t.attributes||{}).reduce(function(o,c){var u=t.attributes[c];switch(c){case"class":o.class=ov(u);break;case"style":o.style=sv(u);break;default:o.attrs[c]=u}return o},{attrs:{},class:{},style:{}});n.class;var i=n.style,l=i===void 0?{}:i,s=$h(n,lv);return me(t.tag,ie(ie(ie({},e),{},{class:a.class,style:ie(ie({},a.style),l)},a.attrs),s),r)}var iu=!1;try{iu=!0}catch{}function cv(){if(!iu&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ir(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?zt({},t,e):{}}function dv(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},zt(e,"fa-".concat(t.size),t.size!==null),zt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),zt(e,"fa-pull-".concat(t.pull),t.pull!==null),zt(e,"fa-swap-opacity",t.swapOpacity),zt(e,"fa-bounce",t.bounce),zt(e,"fa-shake",t.shake),zt(e,"fa-beat",t.beat),zt(e,"fa-fade",t.fade),zt(e,"fa-beat-fade",t.beatFade),zt(e,"fa-flash",t.flash),zt(e,"fa-spin-pulse",t.spinPulse),zt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Uo(t){if(t&&ga(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ua.icon)return ua.icon(t);if(t===null)return null;if(ga(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var uv=vr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=Z(function(){return Uo(e.icon)}),i=Z(function(){return ir("classes",dv(e))}),l=Z(function(){return ir("transform",typeof e.transform=="string"?ua.transform(e.transform):e.transform)}),s=Z(function(){return ir("mask",Uo(e.mask))}),o=Z(function(){return Zh(a.value,ie(ie(ie(ie({},i.value),l.value),s.value),{},{symbol:e.symbol,title:e.title}))});Te(o,function(u){if(!u)return cv("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Z(function(){return o.value?Fl(o.value.abstract[0],{},r):null});return function(){return c.value}}});vr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,a=ru.familyPrefix,i=Z(function(){return["".concat(a,"-layers")].concat(Ui(e.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return me("div",{class:i.value},r.default?r.default():[])}}});vr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,a=ru.familyPrefix,i=Z(function(){return ir("classes",[].concat(Ui(e.counter?["".concat(a,"-layers-counter")]:[]),Ui(e.position?["".concat(a,"-layers-").concat(e.position)]:[])))}),l=Z(function(){return ir("transform",typeof e.transform=="string"?ua.transform(e.transform):e.transform)}),s=Z(function(){var c=Xh(e.value.toString(),ie(ie({},l.value),i.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),o=Z(function(){return Fl(s.value,{},r)});return function(){return o.value}}});var gv={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},fv={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},pv={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},Av={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},mv={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},hv={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},vv={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},bv={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},yv={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Iv={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},wv={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Cv={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Ev=Cv,Sv={prefix:"fas",iconName:"fax",icon:[512,512,[128224,128439],"f1ac","M128 64v96h64V64H386.7L416 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0H192c-35.3 0-64 28.7-64 64zM0 160V480c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zm480 32H128V480c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},kv={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Bv={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Ov={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"]};Kh.add(fv,Ev,gv,vv,hv,bv,kv,Bv,Iv,Av,wv,pv,Ov,Sv,yv,mv);m0.init();const Pv=Yf(),Er=Vf(o2);Er.component("font-awesome-icon",uv);Er.use(Pv);Er.use(bd);Er.use(A2);bd.isReady().then(()=>Er.mount("#app"));export{Gi as A,Al as B,Ng as C,Of as D,ya as E,jt as F,ne as G,kl as _,e2 as a,sl as b,Z as c,ht as d,yt as e,j as f,Ct as g,At as h,rg as i,r2 as j,Xn as k,t2 as l,xn as m,$e as n,il as o,ng as p,ld as q,gt as r,$m as s,Ut as t,br as u,ml as v,Te as w,Jc as x,_m as y,n2 as z};
