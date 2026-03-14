function GC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function QC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yw={exports:{}},yc={},Xw={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),YC=Symbol.for("react.portal"),XC=Symbol.for("react.fragment"),JC=Symbol.for("react.strict_mode"),ZC=Symbol.for("react.profiler"),eR=Symbol.for("react.provider"),tR=Symbol.for("react.context"),nR=Symbol.for("react.forward_ref"),rR=Symbol.for("react.suspense"),iR=Symbol.for("react.memo"),sR=Symbol.for("react.lazy"),zy=Symbol.iterator;function oR(t){return t===null||typeof t!="object"?null:(t=zy&&t[zy]||t["@@iterator"],typeof t=="function"?t:null)}var Jw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zw=Object.assign,eE={};function Os(t,e,n){this.props=t,this.context=e,this.refs=eE,this.updater=n||Jw}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tE(){}tE.prototype=Os.prototype;function fp(t,e,n){this.props=t,this.context=e,this.refs=eE,this.updater=n||Jw}var pp=fp.prototype=new tE;pp.constructor=fp;Zw(pp,Os.prototype);pp.isPureReactComponent=!0;var $y=Array.isArray,nE=Object.prototype.hasOwnProperty,mp={current:null},rE={key:!0,ref:!0,__self:!0,__source:!0};function iE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nE.call(e,r)&&!rE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Da,type:t,key:s,ref:o,props:i,_owner:mp.current}}function aR(t,e){return{$$typeof:Da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Da}function lR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wy=/\/+/g;function Nh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lR(""+t.key):e.toString(36)}function Ql(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Da:case YC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Nh(o,0):r,$y(i)?(n="",t!=null&&(n=t.replace(Wy,"$&/")+"/"),Ql(i,e,n,"",function(c){return c})):i!=null&&(gp(i)&&(i=aR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$y(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Nh(s,a);o+=Ql(s,e,n,u,i)}else if(u=oR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Nh(s,a++),o+=Ql(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tl(t,e,n){if(t==null)return t;var r=[],i=0;return Ql(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},Yl={transition:null},cR={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:mp};function sE(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Tl,forEach:function(t,e,n){Tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tl(t,function(){e++}),e},toArray:function(t){return Tl(t,function(e){return e})||[]},only:function(t){if(!gp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Os;ee.Fragment=XC;ee.Profiler=ZC;ee.PureComponent=fp;ee.StrictMode=JC;ee.Suspense=rR;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cR;ee.act=sE;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)nE.call(e,u)&&!rE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Da,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:tR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eR,_context:t},t.Consumer=t};ee.createElement=iE;ee.createFactory=function(t){var e=iE.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:nR,render:t}};ee.isValidElement=gp;ee.lazy=function(t){return{$$typeof:sR,_payload:{_status:-1,_result:t},_init:uR}};ee.memo=function(t,e){return{$$typeof:iR,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};ee.unstable_act=sE;ee.useCallback=function(t,e){return vt.current.useCallback(t,e)};ee.useContext=function(t){return vt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return vt.current.useEffect(t,e)};ee.useId=function(){return vt.current.useId()};ee.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return vt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};ee.useRef=function(t){return vt.current.useRef(t)};ee.useState=function(t){return vt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return vt.current.useTransition()};ee.version="18.3.1";Xw.exports=ee;var b=Xw.exports;const oE=QC(b),hR=GC({__proto__:null,default:oE},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dR=b,fR=Symbol.for("react.element"),pR=Symbol.for("react.fragment"),mR=Object.prototype.hasOwnProperty,gR=dR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yR={key:!0,ref:!0,__self:!0,__source:!0};function aE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mR.call(e,r)&&!yR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fR,type:t,key:s,ref:o,props:i,_owner:gR.current}}yc.Fragment=pR;yc.jsx=aE;yc.jsxs=aE;Yw.exports=yc;var A=Yw.exports,xd={},lE={exports:{}},Mt={},uE={exports:{}},cE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var _e=X-1>>>1,ue=z[_e];if(0<i(ue,G))z[_e]=G,z[X]=ue,X=_e;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var _e=0,ue=z.length,Re=ue>>>1;_e<Re;){var vn=2*(_e+1)-1,_n=z[vn],wn=vn+1,En=z[wn];if(0>i(_n,X))wn<ue&&0>i(En,_n)?(z[_e]=En,z[wn]=X,_e=wn):(z[_e]=_n,z[vn]=X,_e=vn);else if(wn<ue&&0>i(En,X))z[_e]=En,z[wn]=X,_e=wn;else break e}}return G}function i(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,g=!1,T=!1,E=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=z)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function N(z){if(E=!1,I(z),!T)if(n(u)!==null)T=!0,Vi(O);else{var G=n(c);G!==null&&de(N,G.startTime-z)}}function O(z,G){T=!1,E&&(E=!1,v(y),y=-1),g=!0;var X=p;try{for(I(G),f=n(u);f!==null&&(!(f.expirationTime>G)||z&&!k());){var _e=f.callback;if(typeof _e=="function"){f.callback=null,p=f.priorityLevel;var ue=_e(f.expirationTime<=G);G=t.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(u)&&r(u),I(G)}else r(u);f=n(u)}if(f!==null)var Re=!0;else{var vn=n(c);vn!==null&&de(N,vn.startTime-G),Re=!1}return Re}finally{f=null,p=X,g=!1}}var L=!1,P=null,y=-1,S=5,R=-1;function k(){return!(t.unstable_now()-R<S)}function D(){if(P!==null){var z=t.unstable_now();R=z;var G=!0;try{G=P(!0,z)}finally{G?x():(L=!1,P=null)}}else L=!1}var x;if(typeof _=="function")x=function(){_(D)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Yn=ft.port2;ft.port1.onmessage=D,x=function(){Yn.postMessage(null)}}else x=function(){C(D,0)};function Vi(z){P=z,L||(L=!0,x())}function de(z,G){y=C(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){T||g||(T=!0,Vi(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var G=3;break;default:G=p}var X=p;p=G;try{return z()}finally{p=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=p;p=z;try{return G()}finally{p=X}},t.unstable_scheduleCallback=function(z,G,X){var _e=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?_e+X:_e):X=_e,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=X+ue,z={id:h++,callback:G,priorityLevel:z,startTime:X,expirationTime:ue,sortIndex:-1},X>_e?(z.sortIndex=X,e(c,z),n(u)===null&&z===n(c)&&(E?(v(y),y=-1):E=!0,de(N,X-_e))):(z.sortIndex=ue,e(u,z),T||g||(T=!0,Vi(O))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var G=p;return function(){var X=p;p=G;try{return z.apply(this,arguments)}finally{p=X}}}})(cE);uE.exports=cE;var vR=uE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _R=b,Vt=vR;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hE=new Set,Yo={};function Ci(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Yo[t]=e,t=0;t<e.length;t++)hE.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kd=Object.prototype.hasOwnProperty,wR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hy={},Ky={};function ER(t){return kd.call(Ky,t)?!0:kd.call(Hy,t)?!1:wR.test(t)?Ky[t]=!0:(Hy[t]=!0,!1)}function TR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IR(t,e,n,r){if(e===null||typeof e>"u"||TR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var yp=/[\-:]([a-z])/g;function vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yp,vp);Xe[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yp,vp);Xe[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yp,vp);Xe[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function _p(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IR(e,n,i,r)&&(n=null),r||i===null?ER(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=_R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Il=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Nd=Symbol.for("react.profiler"),dE=Symbol.for("react.provider"),fE=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),Dd=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),pE=Symbol.for("react.offscreen"),qy=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=qy&&t[qy]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,bh;function vo(t){if(bh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bh=e&&e[1]||""}return`
`+bh+t}var Dh=!1;function Vh(t,e){if(!t||Dh)return"";Dh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Dh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function SR(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=Vh(t.type,!1),t;case 11:return t=Vh(t.type.render,!1),t;case 1:return t=Vh(t.type,!0),t;default:return""}}function Vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wi:return"Fragment";case $i:return"Portal";case Nd:return"Profiler";case wp:return"StrictMode";case bd:return"Suspense";case Dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fE:return(t.displayName||"Context")+".Consumer";case dE:return(t._context.displayName||"Context")+".Provider";case Ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tp:return e=t.displayName||null,e!==null?e:Vd(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return Vd(t(e))}catch{}}return null}function AR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PR(t){var e=mE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=PR(t))}function gE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Od(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yE(t,e){e=e.checked,e!=null&&_p(t,"checked",e,!1)}function Md(t,e){yE(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ld(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ld(t,e,n){(e!=="number"||wu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function as(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(_o(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function vE(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _E(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_E(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Al,wE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CR=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){CR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function EE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function TE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=EE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RR=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ud(t,e){if(e){if(RR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function Ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $d=null,ls=null,us=null;function Jy(t){if(t=Ma(t)){if(typeof $d!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Tc(e),$d(t.stateNode,t.type,e))}}function IE(t){ls?us?us.push(t):us=[t]:ls=t}function SE(){if(ls){var t=ls,e=us;if(us=ls=null,Jy(t),e)for(t=0;t<e.length;t++)Jy(e[t])}}function AE(t,e){return t(e)}function PE(){}var Oh=!1;function CE(t,e,n){if(Oh)return t(e,n);Oh=!0;try{return AE(t,e,n)}finally{Oh=!1,(ls!==null||us!==null)&&(PE(),SE())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var r=Tc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Wd=!1;if(Fn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Wd=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Wd=!1}function xR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var bo=!1,Eu=null,Tu=!1,Hd=null,kR={onError:function(t){bo=!0,Eu=t}};function NR(t,e,n,r,i,s,o,a,u){bo=!1,Eu=null,xR.apply(kR,arguments)}function bR(t,e,n,r,i,s,o,a,u){if(NR.apply(this,arguments),bo){if(bo){var c=Eu;bo=!1,Eu=null}else throw Error(U(198));Tu||(Tu=!0,Hd=c)}}function Ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function RE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zy(t){if(Ri(t)!==t)throw Error(U(188))}function DR(t){var e=t.alternate;if(!e){if(e=Ri(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zy(i),t;if(s===r)return Zy(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function xE(t){return t=DR(t),t!==null?kE(t):null}function kE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kE(t);if(e!==null)return e;t=t.sibling}return null}var NE=Vt.unstable_scheduleCallback,ev=Vt.unstable_cancelCallback,VR=Vt.unstable_shouldYield,OR=Vt.unstable_requestPaint,Ne=Vt.unstable_now,MR=Vt.unstable_getCurrentPriorityLevel,Sp=Vt.unstable_ImmediatePriority,bE=Vt.unstable_UserBlockingPriority,Iu=Vt.unstable_NormalPriority,LR=Vt.unstable_LowPriority,DE=Vt.unstable_IdlePriority,vc=null,un=null;function FR(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(vc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:BR,jR=Math.log,UR=Math.LN2;function BR(t){return t>>>=0,t===0?32:31-(jR(t)/UR|0)|0}var Pl=64,Cl=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Su(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=wo(a):(s&=o,s!==0&&(r=wo(s)))}else o=n&~i,o!==0?r=wo(o):s!==0&&(r=wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function zR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $R(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=zR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Kd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function VE(){var t=Pl;return Pl<<=1,!(Pl&4194240)&&(Pl=64),t}function Mh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function WR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ap(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function OE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ME,Pp,LE,FE,jE,qd=!1,Rl=[],yr=null,vr=null,_r=null,Zo=new Map,ea=new Map,sr=[],HR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tv(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ma(e),e!==null&&Pp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function KR(t,e,n,r,i){switch(e){case"focusin":return yr=uo(yr,t,e,n,r,i),!0;case"dragenter":return vr=uo(vr,t,e,n,r,i),!0;case"mouseover":return _r=uo(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zo.set(s,uo(Zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ea.set(s,uo(ea.get(s)||null,t,e,n,r,i)),!0}return!1}function UE(t){var e=si(t.target);if(e!==null){var n=Ri(e);if(n!==null){if(e=n.tag,e===13){if(e=RE(n),e!==null){t.blockedOn=e,jE(t.priority,function(){LE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zd=r,n.target.dispatchEvent(r),zd=null}else return e=Ma(n),e!==null&&Pp(e),t.blockedOn=n,!1;e.shift()}return!0}function nv(t,e,n){Xl(t)&&n.delete(e)}function qR(){qd=!1,yr!==null&&Xl(yr)&&(yr=null),vr!==null&&Xl(vr)&&(vr=null),_r!==null&&Xl(_r)&&(_r=null),Zo.forEach(nv),ea.forEach(nv)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,qd||(qd=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,qR)))}function ta(t){function e(i){return co(i,t)}if(0<Rl.length){co(Rl[0],t);for(var n=1;n<Rl.length;n++){var r=Rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&co(yr,t),vr!==null&&co(vr,t),_r!==null&&co(_r,t),Zo.forEach(e),ea.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)UE(n),n.blockedOn===null&&sr.shift()}var cs=qn.ReactCurrentBatchConfig,Au=!0;function GR(t,e,n,r){var i=ae,s=cs.transition;cs.transition=null;try{ae=1,Cp(t,e,n,r)}finally{ae=i,cs.transition=s}}function QR(t,e,n,r){var i=ae,s=cs.transition;cs.transition=null;try{ae=4,Cp(t,e,n,r)}finally{ae=i,cs.transition=s}}function Cp(t,e,n,r){if(Au){var i=Gd(t,e,n,r);if(i===null)Kh(t,e,r,Pu,n),tv(t,r);else if(KR(i,t,e,n,r))r.stopPropagation();else if(tv(t,r),e&4&&-1<HR.indexOf(t)){for(;i!==null;){var s=Ma(i);if(s!==null&&ME(s),s=Gd(t,e,n,r),s===null&&Kh(t,e,r,Pu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kh(t,e,r,null,n)}}var Pu=null;function Gd(t,e,n,r){if(Pu=null,t=Ip(r),t=si(t),t!==null)if(e=Ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=RE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pu=t,null}function BE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MR()){case Sp:return 1;case bE:return 4;case Iu:case LR:return 16;case DE:return 536870912;default:return 16}default:return 16}}var fr=null,Rp=null,Jl=null;function zE(){if(Jl)return Jl;var t,e=Rp,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Jl=i.slice(t,1<r?1-r:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function rv(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:rv,this.isPropagationStopped=rv,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xp=Lt(Ms),Oa=Ie({},Ms,{view:0,detail:0}),YR=Lt(Oa),Lh,Fh,ho,_c=Ie({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Lh=t.screenX-ho.screenX,Fh=t.screenY-ho.screenY):Fh=Lh=0,ho=t),Lh)},movementY:function(t){return"movementY"in t?t.movementY:Fh}}),iv=Lt(_c),XR=Ie({},_c,{dataTransfer:0}),JR=Lt(XR),ZR=Ie({},Oa,{relatedTarget:0}),jh=Lt(ZR),e1=Ie({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),t1=Lt(e1),n1=Ie({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r1=Lt(n1),i1=Ie({},Ms,{data:0}),sv=Lt(i1),s1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a1[t])?!!e[t]:!1}function kp(){return l1}var u1=Ie({},Oa,{key:function(t){if(t.key){var e=s1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kp,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c1=Lt(u1),h1=Ie({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ov=Lt(h1),d1=Ie({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kp}),f1=Lt(d1),p1=Ie({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=Lt(p1),g1=Ie({},_c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y1=Lt(g1),v1=[9,13,27,32],Np=Fn&&"CompositionEvent"in window,Do=null;Fn&&"documentMode"in document&&(Do=document.documentMode);var _1=Fn&&"TextEvent"in window&&!Do,$E=Fn&&(!Np||Do&&8<Do&&11>=Do),av=" ",lv=!1;function WE(t,e){switch(t){case"keyup":return v1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function HE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hi=!1;function w1(t,e){switch(t){case"compositionend":return HE(e);case"keypress":return e.which!==32?null:(lv=!0,av);case"textInput":return t=e.data,t===av&&lv?null:t;default:return null}}function E1(t,e){if(Hi)return t==="compositionend"||!Np&&WE(t,e)?(t=zE(),Jl=Rp=fr=null,Hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $E&&e.locale!=="ko"?null:e.data;default:return null}}var T1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T1[t.type]:e==="textarea"}function KE(t,e,n,r){IE(r),e=Cu(e,"onChange"),0<e.length&&(n=new xp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vo=null,na=null;function I1(t){rT(t,0)}function wc(t){var e=Gi(t);if(gE(e))return t}function S1(t,e){if(t==="change")return e}var qE=!1;if(Fn){var Uh;if(Fn){var Bh="oninput"in document;if(!Bh){var cv=document.createElement("div");cv.setAttribute("oninput","return;"),Bh=typeof cv.oninput=="function"}Uh=Bh}else Uh=!1;qE=Uh&&(!document.documentMode||9<document.documentMode)}function hv(){Vo&&(Vo.detachEvent("onpropertychange",GE),na=Vo=null)}function GE(t){if(t.propertyName==="value"&&wc(na)){var e=[];KE(e,na,t,Ip(t)),CE(I1,e)}}function A1(t,e,n){t==="focusin"?(hv(),Vo=e,na=n,Vo.attachEvent("onpropertychange",GE)):t==="focusout"&&hv()}function P1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wc(na)}function C1(t,e){if(t==="click")return wc(e)}function R1(t,e){if(t==="input"||t==="change")return wc(e)}function x1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:x1;function ra(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kd.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function dv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fv(t,e){var n=dv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dv(n)}}function QE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?QE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function YE(){for(var t=window,e=wu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wu(t.document)}return e}function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k1(t){var e=YE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&QE(n.ownerDocument.documentElement,n)){if(r!==null&&bp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fv(n,s);var o=fv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var N1=Fn&&"documentMode"in document&&11>=document.documentMode,Ki=null,Qd=null,Oo=null,Yd=!1;function pv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yd||Ki==null||Ki!==wu(r)||(r=Ki,"selectionStart"in r&&bp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&ra(Oo,r)||(Oo=r,r=Cu(Qd,"onSelect"),0<r.length&&(e=new xp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ki)))}function kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},zh={},XE={};Fn&&(XE=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function Ec(t){if(zh[t])return zh[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in XE)return zh[t]=e[n];return t}var JE=Ec("animationend"),ZE=Ec("animationiteration"),eT=Ec("animationstart"),tT=Ec("transitionend"),nT=new Map,mv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){nT.set(t,e),Ci(e,[t])}for(var $h=0;$h<mv.length;$h++){var Wh=mv[$h],b1=Wh.toLowerCase(),D1=Wh[0].toUpperCase()+Wh.slice(1);Fr(b1,"on"+D1)}Fr(JE,"onAnimationEnd");Fr(ZE,"onAnimationIteration");Fr(eT,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(tT,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function gv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bR(r,e,void 0,t),t.currentTarget=null}function rT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;gv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;gv(i,a,c),s=u}}}if(Tu)throw t=Hd,Tu=!1,Hd=null,t}function pe(t,e){var n=e[tf];n===void 0&&(n=e[tf]=new Set);var r=t+"__bubble";n.has(r)||(iT(e,t,2,!1),n.add(r))}function Hh(t,e,n){var r=0;e&&(r|=4),iT(n,t,r,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[Nl]){t[Nl]=!0,hE.forEach(function(n){n!=="selectionchange"&&(V1.has(n)||Hh(n,!1,t),Hh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,Hh("selectionchange",!1,e))}}function iT(t,e,n,r){switch(BE(e)){case 1:var i=GR;break;case 4:i=QR;break;default:i=Cp}n=i.bind(null,e,n,t),i=void 0,!Wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=si(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}CE(function(){var c=s,h=Ip(n),f=[];e:{var p=nT.get(t);if(p!==void 0){var g=xp,T=t;switch(t){case"keypress":if(Zl(n)===0)break e;case"keydown":case"keyup":g=c1;break;case"focusin":T="focus",g=jh;break;case"focusout":T="blur",g=jh;break;case"beforeblur":case"afterblur":g=jh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=iv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=JR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=f1;break;case JE:case ZE:case eT:g=t1;break;case tT:g=m1;break;case"scroll":g=YR;break;case"wheel":g=y1;break;case"copy":case"cut":case"paste":g=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ov}var E=(e&4)!==0,C=!E&&t==="scroll",v=E?p!==null?p+"Capture":null:p;E=[];for(var _=c,I;_!==null;){I=_;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,v!==null&&(N=Jo(_,v),N!=null&&E.push(sa(_,N,I)))),C)break;_=_.return}0<E.length&&(p=new g(p,T,null,n,h),f.push({event:p,listeners:E}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==zd&&(T=n.relatedTarget||n.fromElement)&&(si(T)||T[jn]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(T=n.relatedTarget||n.toElement,g=c,T=T?si(T):null,T!==null&&(C=Ri(T),T!==C||T.tag!==5&&T.tag!==6)&&(T=null)):(g=null,T=c),g!==T)){if(E=iv,N="onMouseLeave",v="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(E=ov,N="onPointerLeave",v="onPointerEnter",_="pointer"),C=g==null?p:Gi(g),I=T==null?p:Gi(T),p=new E(N,_+"leave",g,n,h),p.target=C,p.relatedTarget=I,N=null,si(h)===c&&(E=new E(v,_+"enter",T,n,h),E.target=I,E.relatedTarget=C,N=E),C=N,g&&T)t:{for(E=g,v=T,_=0,I=E;I;I=ji(I))_++;for(I=0,N=v;N;N=ji(N))I++;for(;0<_-I;)E=ji(E),_--;for(;0<I-_;)v=ji(v),I--;for(;_--;){if(E===v||v!==null&&E===v.alternate)break t;E=ji(E),v=ji(v)}E=null}else E=null;g!==null&&yv(f,p,g,E,!1),T!==null&&C!==null&&yv(f,C,T,E,!0)}}e:{if(p=c?Gi(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var O=S1;else if(uv(p))if(qE)O=R1;else{O=P1;var L=A1}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=C1);if(O&&(O=O(t,c))){KE(f,O,n,h);break e}L&&L(t,p,c),t==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&Ld(p,"number",p.value)}switch(L=c?Gi(c):window,t){case"focusin":(uv(L)||L.contentEditable==="true")&&(Ki=L,Qd=c,Oo=null);break;case"focusout":Oo=Qd=Ki=null;break;case"mousedown":Yd=!0;break;case"contextmenu":case"mouseup":case"dragend":Yd=!1,pv(f,n,h);break;case"selectionchange":if(N1)break;case"keydown":case"keyup":pv(f,n,h)}var P;if(Np)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hi?WE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&($E&&n.locale!=="ko"&&(Hi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Hi&&(P=zE()):(fr=h,Rp="value"in fr?fr.value:fr.textContent,Hi=!0)),L=Cu(c,y),0<L.length&&(y=new sv(y,t,null,n,h),f.push({event:y,listeners:L}),P?y.data=P:(P=HE(n),P!==null&&(y.data=P)))),(P=_1?w1(t,n):E1(t,n))&&(c=Cu(c,"onBeforeInput"),0<c.length&&(h=new sv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=P))}rT(f,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Jo(t,n),s!=null&&r.unshift(sa(t,s,i)),s=Jo(t,e),s!=null&&r.push(sa(t,s,i))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Jo(n,s),u!=null&&o.unshift(sa(n,u,a))):i||(u=Jo(n,s),u!=null&&o.push(sa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var O1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function vv(t){return(typeof t=="string"?t:""+t).replace(O1,`
`).replace(M1,"")}function bl(t,e,n){if(e=vv(e),vv(t)!==e&&n)throw Error(U(425))}function Ru(){}var Xd=null,Jd=null;function Zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ef=typeof setTimeout=="function"?setTimeout:void 0,L1=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(t){return _v.resolve(null).then(t).catch(j1)}:ef;function j1(t){setTimeout(function(){throw t})}function qh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),an="__reactFiber$"+Ls,oa="__reactProps$"+Ls,jn="__reactContainer$"+Ls,tf="__reactEvents$"+Ls,U1="__reactListeners$"+Ls,B1="__reactHandles$"+Ls;function si(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wv(t);t!==null;){if(n=t[an])return n;t=wv(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[an]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Tc(t){return t[oa]||null}var nf=[],Qi=-1;function jr(t){return{current:t}}function ge(t){0>Qi||(t.current=nf[Qi],nf[Qi]=null,Qi--)}function he(t,e){Qi++,nf[Qi]=t.current,t.current=e}var Nr={},ht=jr(Nr),It=jr(!1),mi=Nr;function vs(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function xu(){ge(It),ge(ht)}function Ev(t,e,n){if(ht.current!==Nr)throw Error(U(168));he(ht,e),he(It,n)}function sT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,AR(t)||"Unknown",i));return Ie({},n,r)}function ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,mi=ht.current,he(ht,t),he(It,It.current),!0}function Tv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=sT(t,e,mi),r.__reactInternalMemoizedMergedChildContext=t,ge(It),ge(ht),he(ht,t)):ge(It),he(It,n)}var An=null,Ic=!1,Gh=!1;function oT(t){An===null?An=[t]:An.push(t)}function z1(t){Ic=!0,oT(t)}function Ur(){if(!Gh&&An!==null){Gh=!0;var t=0,e=ae;try{var n=An;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,Ic=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),NE(Sp,Ur),i}finally{ae=e,Gh=!1}}return null}var Yi=[],Xi=0,Nu=null,bu=0,Ut=[],Bt=0,gi=null,Pn=1,Cn="";function Zr(t,e){Yi[Xi++]=bu,Yi[Xi++]=Nu,Nu=t,bu=e}function aT(t,e,n){Ut[Bt++]=Pn,Ut[Bt++]=Cn,Ut[Bt++]=gi,gi=t;var r=Pn;t=Cn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-Jt(e)+i|n<<i|r,Cn=s+t}else Pn=1<<s|n<<i|r,Cn=t}function Dp(t){t.return!==null&&(Zr(t,1),aT(t,1,0))}function Vp(t){for(;t===Nu;)Nu=Yi[--Xi],Yi[Xi]=null,bu=Yi[--Xi],Yi[Xi]=null;for(;t===gi;)gi=Ut[--Bt],Ut[Bt]=null,Cn=Ut[--Bt],Ut[Bt]=null,Pn=Ut[--Bt],Ut[Bt]=null}var Nt=null,xt=null,ve=!1,Xt=null;function lT(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Iv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,xt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gi!==null?{id:Pn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,xt=null,!0):!1;default:return!1}}function rf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sf(t){if(ve){var e=xt;if(e){var n=e;if(!Iv(t,e)){if(rf(t))throw Error(U(418));e=wr(n.nextSibling);var r=Nt;e&&Iv(t,e)?lT(r,n):(t.flags=t.flags&-4097|2,ve=!1,Nt=t)}}else{if(rf(t))throw Error(U(418));t.flags=t.flags&-4097|2,ve=!1,Nt=t}}}function Sv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Dl(t){if(t!==Nt)return!1;if(!ve)return Sv(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zd(t.type,t.memoizedProps)),e&&(e=xt)){if(rf(t))throw uT(),Error(U(418));for(;e;)lT(t,e),e=wr(e.nextSibling)}if(Sv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=Nt?wr(t.stateNode.nextSibling):null;return!0}function uT(){for(var t=xt;t;)t=wr(t.nextSibling)}function _s(){xt=Nt=null,ve=!1}function Op(t){Xt===null?Xt=[t]:Xt.push(t)}var $1=qn.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Vl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Av(t){var e=t._init;return e(t._payload)}function cT(t){function e(v,_){if(t){var I=v.deletions;I===null?(v.deletions=[_],v.flags|=16):I.push(_)}}function n(v,_){if(!t)return null;for(;_!==null;)e(v,_),_=_.sibling;return null}function r(v,_){for(v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function i(v,_){return v=Sr(v,_),v.index=0,v.sibling=null,v}function s(v,_,I){return v.index=I,t?(I=v.alternate,I!==null?(I=I.index,I<_?(v.flags|=2,_):I):(v.flags|=2,_)):(v.flags|=1048576,_)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,_,I,N){return _===null||_.tag!==6?(_=td(I,v.mode,N),_.return=v,_):(_=i(_,I),_.return=v,_)}function u(v,_,I,N){var O=I.type;return O===Wi?h(v,_,I.props.children,N,I.key):_!==null&&(_.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===rr&&Av(O)===_.type)?(N=i(_,I.props),N.ref=fo(v,_,I),N.return=v,N):(N=ou(I.type,I.key,I.props,null,v.mode,N),N.ref=fo(v,_,I),N.return=v,N)}function c(v,_,I,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=nd(I,v.mode,N),_.return=v,_):(_=i(_,I.children||[]),_.return=v,_)}function h(v,_,I,N,O){return _===null||_.tag!==7?(_=di(I,v.mode,N,O),_.return=v,_):(_=i(_,I),_.return=v,_)}function f(v,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return _=td(""+_,v.mode,I),_.return=v,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Il:return I=ou(_.type,_.key,_.props,null,v.mode,I),I.ref=fo(v,null,_),I.return=v,I;case $i:return _=nd(_,v.mode,I),_.return=v,_;case rr:var N=_._init;return f(v,N(_._payload),I)}if(_o(_)||ao(_))return _=di(_,v.mode,I,null),_.return=v,_;Vl(v,_)}return null}function p(v,_,I,N){var O=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return O!==null?null:a(v,_,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Il:return I.key===O?u(v,_,I,N):null;case $i:return I.key===O?c(v,_,I,N):null;case rr:return O=I._init,p(v,_,O(I._payload),N)}if(_o(I)||ao(I))return O!==null?null:h(v,_,I,N,null);Vl(v,I)}return null}function g(v,_,I,N,O){if(typeof N=="string"&&N!==""||typeof N=="number")return v=v.get(I)||null,a(_,v,""+N,O);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Il:return v=v.get(N.key===null?I:N.key)||null,u(_,v,N,O);case $i:return v=v.get(N.key===null?I:N.key)||null,c(_,v,N,O);case rr:var L=N._init;return g(v,_,I,L(N._payload),O)}if(_o(N)||ao(N))return v=v.get(I)||null,h(_,v,N,O,null);Vl(_,N)}return null}function T(v,_,I,N){for(var O=null,L=null,P=_,y=_=0,S=null;P!==null&&y<I.length;y++){P.index>y?(S=P,P=null):S=P.sibling;var R=p(v,P,I[y],N);if(R===null){P===null&&(P=S);break}t&&P&&R.alternate===null&&e(v,P),_=s(R,_,y),L===null?O=R:L.sibling=R,L=R,P=S}if(y===I.length)return n(v,P),ve&&Zr(v,y),O;if(P===null){for(;y<I.length;y++)P=f(v,I[y],N),P!==null&&(_=s(P,_,y),L===null?O=P:L.sibling=P,L=P);return ve&&Zr(v,y),O}for(P=r(v,P);y<I.length;y++)S=g(P,v,y,I[y],N),S!==null&&(t&&S.alternate!==null&&P.delete(S.key===null?y:S.key),_=s(S,_,y),L===null?O=S:L.sibling=S,L=S);return t&&P.forEach(function(k){return e(v,k)}),ve&&Zr(v,y),O}function E(v,_,I,N){var O=ao(I);if(typeof O!="function")throw Error(U(150));if(I=O.call(I),I==null)throw Error(U(151));for(var L=O=null,P=_,y=_=0,S=null,R=I.next();P!==null&&!R.done;y++,R=I.next()){P.index>y?(S=P,P=null):S=P.sibling;var k=p(v,P,R.value,N);if(k===null){P===null&&(P=S);break}t&&P&&k.alternate===null&&e(v,P),_=s(k,_,y),L===null?O=k:L.sibling=k,L=k,P=S}if(R.done)return n(v,P),ve&&Zr(v,y),O;if(P===null){for(;!R.done;y++,R=I.next())R=f(v,R.value,N),R!==null&&(_=s(R,_,y),L===null?O=R:L.sibling=R,L=R);return ve&&Zr(v,y),O}for(P=r(v,P);!R.done;y++,R=I.next())R=g(P,v,y,R.value,N),R!==null&&(t&&R.alternate!==null&&P.delete(R.key===null?y:R.key),_=s(R,_,y),L===null?O=R:L.sibling=R,L=R);return t&&P.forEach(function(D){return e(v,D)}),ve&&Zr(v,y),O}function C(v,_,I,N){if(typeof I=="object"&&I!==null&&I.type===Wi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Il:e:{for(var O=I.key,L=_;L!==null;){if(L.key===O){if(O=I.type,O===Wi){if(L.tag===7){n(v,L.sibling),_=i(L,I.props.children),_.return=v,v=_;break e}}else if(L.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===rr&&Av(O)===L.type){n(v,L.sibling),_=i(L,I.props),_.ref=fo(v,L,I),_.return=v,v=_;break e}n(v,L);break}else e(v,L);L=L.sibling}I.type===Wi?(_=di(I.props.children,v.mode,N,I.key),_.return=v,v=_):(N=ou(I.type,I.key,I.props,null,v.mode,N),N.ref=fo(v,_,I),N.return=v,v=N)}return o(v);case $i:e:{for(L=I.key;_!==null;){if(_.key===L)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){n(v,_.sibling),_=i(_,I.children||[]),_.return=v,v=_;break e}else{n(v,_);break}else e(v,_);_=_.sibling}_=nd(I,v.mode,N),_.return=v,v=_}return o(v);case rr:return L=I._init,C(v,_,L(I._payload),N)}if(_o(I))return T(v,_,I,N);if(ao(I))return E(v,_,I,N);Vl(v,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,_!==null&&_.tag===6?(n(v,_.sibling),_=i(_,I),_.return=v,v=_):(n(v,_),_=td(I,v.mode,N),_.return=v,v=_),o(v)):n(v,_)}return C}var ws=cT(!0),hT=cT(!1),Du=jr(null),Vu=null,Ji=null,Mp=null;function Lp(){Mp=Ji=Vu=null}function Fp(t){var e=Du.current;ge(Du),t._currentValue=e}function of(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){Vu=t,Mp=Ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Wt(t){var e=t._currentValue;if(Mp!==t)if(t={context:t,memoizedValue:e,next:null},Ji===null){if(Vu===null)throw Error(U(308));Ji=t,Vu.dependencies={lanes:0,firstContext:t}}else Ji=Ji.next=t;return e}var oi=null;function jp(t){oi===null?oi=[t]:oi.push(t)}function dT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,jp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function eu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ap(t,n)}}function Pv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ou(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,E=a;switch(p=e,g=n,E.tag){case 1:if(T=E.payload,typeof T=="function"){f=T.call(g,f,p);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=E.payload,p=typeof T=="function"?T.call(g,f,p):T,p==null)break e;f=Ie({},f,p);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,u=f):h=h.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vi|=o,t.lanes=o,t.memoizedState=f}}function Cv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var La={},cn=jr(La),aa=jr(La),la=jr(La);function ai(t){if(t===La)throw Error(U(174));return t}function Bp(t,e){switch(he(la,e),he(aa,t),he(cn,La),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jd(e,t)}ge(cn),he(cn,e)}function Es(){ge(cn),ge(aa),ge(la)}function pT(t){ai(la.current);var e=ai(cn.current),n=jd(e,t.type);e!==n&&(he(aa,t),he(cn,n))}function zp(t){aa.current===t&&(ge(cn),ge(aa))}var we=jr(0);function Mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qh=[];function $p(){for(var t=0;t<Qh.length;t++)Qh[t]._workInProgressVersionPrimary=null;Qh.length=0}var tu=qn.ReactCurrentDispatcher,Yh=qn.ReactCurrentBatchConfig,yi=0,Te=null,Me=null,ze=null,Lu=!1,Mo=!1,ua=0,W1=0;function nt(){throw Error(U(321))}function Wp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Hp(t,e,n,r,i,s){if(yi=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tu.current=t===null||t.memoizedState===null?G1:Q1,t=n(r,i),Mo){s=0;do{if(Mo=!1,ua=0,25<=s)throw Error(U(301));s+=1,ze=Me=null,e.updateQueue=null,tu.current=Y1,t=n(r,i)}while(Mo)}if(tu.current=Fu,e=Me!==null&&Me.next!==null,yi=0,ze=Me=Te=null,Lu=!1,e)throw Error(U(300));return t}function Kp(){var t=ua!==0;return ua=0,t}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Te.memoizedState=ze=t:ze=ze.next=t,ze}function Ht(){if(Me===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=ze===null?Te.memoizedState:ze.next;if(e!==null)ze=e,Me=t;else{if(t===null)throw Error(U(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},ze===null?Te.memoizedState=ze=t:ze=ze.next=t}return ze}function ca(t,e){return typeof e=="function"?e(t):e}function Xh(t){var e=Ht(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((yi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Te.lanes|=h,vi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,tn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jh(t){var e=Ht(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function mT(){}function gT(t,e){var n=Te,r=Ht(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,qp(_T.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,ha(9,vT.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(U(349));yi&30||yT(n,e,i)}return i}function yT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vT(t,e,n,r){e.value=n,e.getSnapshot=r,wT(e)&&ET(t)}function _T(t,e,n){return n(function(){wT(e)&&ET(t)})}function wT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function ET(t){var e=Un(t,1);e!==null&&Zt(e,t,1,-1)}function Rv(t){var e=on();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=q1.bind(null,Te,t),[e.memoizedState,t]}function ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function TT(){return Ht().memoizedState}function nu(t,e,n,r){var i=on();Te.flags|=t,i.memoizedState=ha(1|e,n,void 0,r===void 0?null:r)}function Sc(t,e,n,r){var i=Ht();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&Wp(r,o.deps)){i.memoizedState=ha(e,n,s,r);return}}Te.flags|=t,i.memoizedState=ha(1|e,n,s,r)}function xv(t,e){return nu(8390656,8,t,e)}function qp(t,e){return Sc(2048,8,t,e)}function IT(t,e){return Sc(4,2,t,e)}function ST(t,e){return Sc(4,4,t,e)}function AT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function PT(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4,4,AT.bind(null,e,t),n)}function Gp(){}function CT(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function RT(t,e){var n=Ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xT(t,e,n){return yi&21?(tn(n,e)||(n=VE(),Te.lanes|=n,vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function H1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Yh.transition;Yh.transition={};try{t(!1),e()}finally{ae=n,Yh.transition=r}}function kT(){return Ht().memoizedState}function K1(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},NT(t))bT(e,n);else if(n=dT(t,e,n,r),n!==null){var i=yt();Zt(n,t,r,i),DT(n,e,r)}}function q1(t,e,n){var r=Ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(NT(t))bT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var u=e.interleaved;u===null?(i.next=i,jp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=dT(t,e,i,r),n!==null&&(i=yt(),Zt(n,t,r,i),DT(n,e,r))}}function NT(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function bT(t,e){Mo=Lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function DT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ap(t,n)}}var Fu={readContext:Wt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},G1={readContext:Wt,useCallback:function(t,e){return on().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:xv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nu(4194308,4,AT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nu(4194308,4,t,e)},useInsertionEffect:function(t,e){return nu(4,2,t,e)},useMemo:function(t,e){var n=on();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=on();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=K1.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=on();return t={current:t},e.memoizedState=t},useState:Rv,useDebugValue:Gp,useDeferredValue:function(t){return on().memoizedState=t},useTransition:function(){var t=Rv(!1),e=t[0];return t=H1.bind(null,t[1]),on().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=on();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),$e===null)throw Error(U(349));yi&30||yT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xv(_T.bind(null,r,s,t),[t]),r.flags|=2048,ha(9,vT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=on(),e=$e.identifierPrefix;if(ve){var n=Cn,r=Pn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Q1={readContext:Wt,useCallback:CT,useContext:Wt,useEffect:qp,useImperativeHandle:PT,useInsertionEffect:IT,useLayoutEffect:ST,useMemo:RT,useReducer:Xh,useRef:TT,useState:function(){return Xh(ca)},useDebugValue:Gp,useDeferredValue:function(t){var e=Ht();return xT(e,Me.memoizedState,t)},useTransition:function(){var t=Xh(ca)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:mT,useSyncExternalStore:gT,useId:kT,unstable_isNewReconciler:!1},Y1={readContext:Wt,useCallback:CT,useContext:Wt,useEffect:qp,useImperativeHandle:PT,useInsertionEffect:IT,useLayoutEffect:ST,useMemo:RT,useReducer:Jh,useRef:TT,useState:function(){return Jh(ca)},useDebugValue:Gp,useDeferredValue:function(t){var e=Ht();return Me===null?e.memoizedState=t:xT(e,Me.memoizedState,t)},useTransition:function(){var t=Jh(ca)[0],e=Ht().memoizedState;return[t,e]},useMutableSource:mT,useSyncExternalStore:gT,useId:kT,unstable_isNewReconciler:!1};function Qt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function af(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ac={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Ir(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(Zt(e,t,i,r),eu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Ir(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(Zt(e,t,i,r),eu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=Ir(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(Zt(e,t,r,n),eu(e,t,r))}};function kv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,r)||!ra(i,s):!0}function VT(t,e,n){var r=!1,i=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=St(e)?mi:ht.current,r=e.contextTypes,s=(r=r!=null)?vs(t,i):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ac,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ac.enqueueReplaceState(e,e.state,null)}function lf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Up(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=St(e)?mi:ht.current,i.context=vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(af(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ac.enqueueReplaceState(i,i.state,null),Ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",r=e;do n+=SR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var X1=typeof WeakMap=="function"?WeakMap:Map;function OT(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uu||(Uu=!0,_f=r),uf(t,e)},n}function MT(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uf(t,e),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new X1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hx.bind(null,t,e,n),e.then(t,t))}function Dv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var J1=qn.ReactCurrentOwner,Tt=!1;function gt(t,e,n,r){e.child=t===null?hT(e,null,n,r):ws(e,t.child,n,r)}function Ov(t,e,n,r,i){n=n.render;var s=e.ref;return hs(e,i),r=Hp(t,e,n,r,s,i),n=Kp(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(ve&&n&&Dp(e),e.flags|=1,gt(t,e,r,i),e.child)}function Mv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,LT(t,e,s,r,i)):(t=ou(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=Sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function LT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ra(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return cf(t,e,n,r,i)}function FT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(es,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(es,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(es,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(es,Ct),Ct|=r;return gt(t,e,i,n),e.child}function jT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cf(t,e,n,r,i){var s=St(n)?mi:ht.current;return s=vs(e,s),hs(e,i),n=Hp(t,e,n,r,s,i),r=Kp(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(ve&&r&&Dp(e),e.flags|=1,gt(t,e,n,i),e.child)}function Lv(t,e,n,r,i){if(St(n)){var s=!0;ku(e)}else s=!1;if(hs(e,i),e.stateNode===null)ru(t,e),VT(e,n,r),lf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wt(c):(c=St(n)?mi:ht.current,c=vs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Nv(e,o,r,c),ir=!1;var p=e.memoizedState;o.state=p,Ou(e,r,o,i),u=e.memoizedState,a!==r||p!==u||It.current||ir?(typeof h=="function"&&(af(e,n,h,r),u=e.memoizedState),(a=ir||kv(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,fT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Qt(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Wt(u):(u=St(n)?mi:ht.current,u=vs(e,u));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Nv(e,o,r,u),ir=!1,p=e.memoizedState,o.state=p,Ou(e,r,o,i);var T=e.memoizedState;a!==f||p!==T||It.current||ir?(typeof g=="function"&&(af(e,n,g,r),T=e.memoizedState),(c=ir||kv(e,n,c,r,p,T,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return hf(t,e,n,r,s,i)}function hf(t,e,n,r,i,s){jT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tv(e,n,!1),Bn(t,e,s);r=e.stateNode,J1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&Tv(e,n,!0),e.child}function UT(t){var e=t.stateNode;e.pendingContext?Ev(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ev(t,e.context,!1),Bp(t,e.containerInfo)}function Fv(t,e,n,r,i){return _s(),Op(i),e.flags|=256,gt(t,e,n,r),e.child}var df={dehydrated:null,treeContext:null,retryLane:0};function ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function BT(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(we,i&1),t===null)return sf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rc(o,r,0,null),t=di(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ff(n),e.memoizedState=df,t):Qp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Z1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Sr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=di(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=df,r}return s=t.child,t=s.sibling,r=Sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qp(t,e){return e=Rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ol(t,e,n,r){return r!==null&&Op(r),ws(e,t.child,null,n),t=Qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Z1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zh(Error(U(422))),Ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rc({mode:"visible",children:r.children},i,0,null),s=di(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ws(e,t.child,null,o),e.child.memoizedState=ff(o),e.memoizedState=df,s);if(!(e.mode&1))return Ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Zh(s,r,void 0),Ol(t,e,o,r)}if(a=(o&t.childLanes)!==0,Tt||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),Zt(r,t,i,-1))}return tm(),r=Zh(Error(U(421))),Ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xt=wr(i.nextSibling),Nt=e,ve=!0,Xt=null,t!==null&&(Ut[Bt++]=Pn,Ut[Bt++]=Cn,Ut[Bt++]=gi,Pn=t.id,Cn=t.overflow,gi=e),e=Qp(e,r.children),e.flags|=4096,e)}function jv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),of(t.return,e,n)}function ed(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jv(t,n,e);else if(t.tag===19)jv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ed(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ed(e,!0,n,null,s);break;case"together":ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ru(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ex(t,e,n){switch(e.tag){case 3:UT(e),_s();break;case 5:pT(e);break;case 1:St(e.type)&&ku(e);break;case 4:Bp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Du,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?BT(t,e,n):(he(we,we.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,FT(t,e,n)}return Bn(t,e,n)}var $T,pf,WT,HT;$T=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pf=function(){};WT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(cn.current);var s=null;switch(n){case"input":i=Od(t,i),r=Od(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Fd(t,i),r=Fd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ru)}Ud(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};HT=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tx(t,e,n){var r=e.pendingProps;switch(Vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return St(e.type)&&xu(),rt(e),null;case 3:return r=e.stateNode,Es(),ge(It),ge(ht),$p(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(Tf(Xt),Xt=null))),pf(t,e),rt(e),null;case 5:zp(e);var i=ai(la.current);if(n=e.type,t!==null&&e.stateNode!=null)WT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return rt(e),null}if(t=ai(cn.current),Dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[an]=e,r[oa]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Eo.length;i++)pe(Eo[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Gy(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Yy(r,s),pe("invalid",r)}Ud(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&bl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bl(r.textContent,a,t),i=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Sl(r),Qy(r,s,!0);break;case"textarea":Sl(r),Xy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ru)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_E(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[an]=e,t[oa]=r,$T(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bd(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Eo.length;i++)pe(Eo[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Gy(t,r),i=Od(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Yy(t,r),i=Fd(t,r),pe("invalid",t);break;default:i=r}Ud(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?TE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xo(t,u):typeof u=="number"&&Xo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&_p(t,s,u,o))}switch(n){case"input":Sl(t),Qy(t,r,!1);break;case"textarea":Sl(t),Xy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?as(t,!!r.multiple,s,!1):r.defaultValue!=null&&as(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ru)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)HT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ai(la.current),ai(cn.current),Dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[an]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=e,e.stateNode=r}return rt(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&xt!==null&&e.mode&1&&!(e.flags&128))uT(),_s(),e.flags|=98560,s=!1;else if(s=Dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[an]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else Xt!==null&&(Tf(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Le===0&&(Le=3):tm())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Es(),pf(t,e),t===null&&ia(e.stateNode.containerInfo),rt(e),null;case 10:return Fp(e.type._context),rt(e),null;case 17:return St(e.type)&&xu(),rt(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)po(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mu(t),o!==null){for(e.flags|=128,po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Is&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304)}else{if(!r)if(t=Mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return rt(e),null}else 2*Ne()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=we.current,he(we,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return em(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function nx(t,e){switch(Vp(e),e.tag){case 1:return St(e.type)&&xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),ge(It),ge(ht),$p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zp(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return Es(),null;case 10:return Fp(e.type._context),null;case 22:case 23:return em(),null;case 24:return null;default:return null}}var Ml=!1,at=!1,rx=typeof WeakSet=="function"?WeakSet:Set,W=null;function Zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function mf(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Uv=!1;function ix(t,e){if(Xd=Au,t=YE(),bp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jd={focusedElem:t,selectionRange:n},Au=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var E=T.memoizedProps,C=T.memoizedState,v=e.stateNode,_=v.getSnapshotBeforeUpdate(e.elementType===e.type?E:Qt(e.type,E),C);v.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(N){Ce(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return T=Uv,Uv=!1,T}function Lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mf(e,n,s)}i=i.next}while(i!==r)}}function Pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function KT(t){var e=t.alternate;e!==null&&(t.alternate=null,KT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[an],delete e[oa],delete e[tf],delete e[U1],delete e[B1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qT(t){return t.tag===5||t.tag===3||t.tag===4}function Bv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ru));else if(r!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}function vf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vf(t,e,n),t=t.sibling;t!==null;)vf(t,e,n),t=t.sibling}var He=null,Yt=!1;function er(t,e,n){for(n=n.child;n!==null;)GT(t,e,n),n=n.sibling}function GT(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(vc,n)}catch{}switch(n.tag){case 5:at||Zi(n,e);case 6:var r=He,i=Yt;He=null,er(t,e,n),He=r,Yt=i,He!==null&&(Yt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Yt?(t=He,n=n.stateNode,t.nodeType===8?qh(t.parentNode,n):t.nodeType===1&&qh(t,n),ta(t)):qh(He,n.stateNode));break;case 4:r=He,i=Yt,He=n.stateNode.containerInfo,Yt=!0,er(t,e,n),He=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mf(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!at&&(Zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,er(t,e,n),at=r):er(t,e,n);break;default:er(t,e,n)}}function zv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rx),e.forEach(function(r){var i=fx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Yt=!1;break e;case 3:He=a.stateNode.containerInfo,Yt=!0;break e;case 4:He=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(He===null)throw Error(U(160));GT(s,o,i),He=null,Yt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)QT(e,t),e=e.sibling}function QT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(e,t),sn(t),r&4){try{Lo(3,t,t.return),Pc(3,t)}catch(E){Ce(t,t.return,E)}try{Lo(5,t,t.return)}catch(E){Ce(t,t.return,E)}}break;case 1:qt(e,t),sn(t),r&512&&n!==null&&Zi(n,n.return);break;case 5:if(qt(e,t),sn(t),r&512&&n!==null&&Zi(n,n.return),t.flags&32){var i=t.stateNode;try{Xo(i,"")}catch(E){Ce(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yE(i,s),Bd(a,o);var c=Bd(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?TE(i,f):h==="dangerouslySetInnerHTML"?wE(i,f):h==="children"?Xo(i,f):_p(i,h,f,c)}switch(a){case"input":Md(i,s);break;case"textarea":vE(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?as(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?as(i,!!s.multiple,s.defaultValue,!0):as(i,!!s.multiple,s.multiple?[]:"",!1))}i[oa]=s}catch(E){Ce(t,t.return,E)}}break;case 6:if(qt(e,t),sn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){Ce(t,t.return,E)}}break;case 3:if(qt(e,t),sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(E){Ce(t,t.return,E)}break;case 4:qt(e,t),sn(t);break;case 13:qt(e,t),sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jp=Ne())),r&4&&zv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||h,qt(e,t),at=c):qt(e,t),sn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(f=W=h;W!==null;){switch(p=W,g=p.child,p.tag){case 0:case 11:case 14:case 15:Lo(4,p,p.return);break;case 1:Zi(p,p.return);var T=p.stateNode;if(typeof T.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(E){Ce(r,n,E)}}break;case 5:Zi(p,p.return);break;case 22:if(p.memoizedState!==null){Wv(f);continue}}g!==null?(g.return=p,W=g):Wv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=EE("display",o))}catch(E){Ce(t,t.return,E)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){Ce(t,t.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qt(e,t),sn(t),r&4&&zv(t);break;case 21:break;default:qt(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xo(i,""),r.flags&=-33);var s=Bv(t);vf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bv(t);yf(t,a,o);break;default:throw Error(U(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sx(t,e,n){W=t,YT(t)}function YT(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ml;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||at;a=Ml;var c=at;if(Ml=o,(at=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Hv(i):u!==null?(u.return=o,W=u):Hv(i);for(;s!==null;)W=s,YT(s),s=s.sibling;W=i,Ml=a,at=c}$v(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):$v(t)}}function $v(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Pc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ta(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}at||e.flags&512&&gf(e)}catch(p){Ce(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Wv(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Hv(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pc(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{gf(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{gf(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var ox=Math.ceil,ju=qn.ReactCurrentDispatcher,Yp=qn.ReactCurrentOwner,$t=qn.ReactCurrentBatchConfig,ie=0,$e=null,Ve=null,Qe=0,Ct=0,es=jr(0),Le=0,da=null,vi=0,Cc=0,Xp=0,Fo=null,wt=null,Jp=0,Is=1/0,Sn=null,Uu=!1,_f=null,Tr=null,Ll=!1,pr=null,Bu=0,jo=0,wf=null,iu=-1,su=0;function yt(){return ie&6?Ne():iu!==-1?iu:iu=Ne()}function Ir(t){return t.mode&1?ie&2&&Qe!==0?Qe&-Qe:$1.transition!==null?(su===0&&(su=VE()),su):(t=ae,t!==0||(t=window.event,t=t===void 0?16:BE(t.type)),t):1}function Zt(t,e,n,r){if(50<jo)throw jo=0,wf=null,Error(U(185));Va(t,n,r),(!(ie&2)||t!==$e)&&(t===$e&&(!(ie&2)&&(Cc|=n),Le===4&&or(t,Qe)),At(t,r),n===1&&ie===0&&!(e.mode&1)&&(Is=Ne()+500,Ic&&Ur()))}function At(t,e){var n=t.callbackNode;$R(t,e);var r=Su(t,t===$e?Qe:0);if(r===0)n!==null&&ev(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ev(n),e===1)t.tag===0?z1(Kv.bind(null,t)):oT(Kv.bind(null,t)),F1(function(){!(ie&6)&&Ur()}),n=null;else{switch(OE(r)){case 1:n=Sp;break;case 4:n=bE;break;case 16:n=Iu;break;case 536870912:n=DE;break;default:n=Iu}n=iI(n,XT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function XT(t,e){if(iu=-1,su=0,ie&6)throw Error(U(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var r=Su(t,t===$e?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=zu(t,r);else{e=r;var i=ie;ie|=2;var s=ZT();($e!==t||Qe!==e)&&(Sn=null,Is=Ne()+500,hi(t,e));do try{ux();break}catch(a){JT(t,a)}while(!0);Lp(),ju.current=s,ie=i,Ve!==null?e=0:($e=null,Qe=0,e=Le)}if(e!==0){if(e===2&&(i=Kd(t),i!==0&&(r=i,e=Ef(t,i))),e===1)throw n=da,hi(t,0),or(t,r),At(t,Ne()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!ax(i)&&(e=zu(t,r),e===2&&(s=Kd(t),s!==0&&(r=s,e=Ef(t,s))),e===1))throw n=da,hi(t,0),or(t,r),At(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:ei(t,wt,Sn);break;case 3:if(or(t,r),(r&130023424)===r&&(e=Jp+500-Ne(),10<e)){if(Su(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ef(ei.bind(null,t,wt,Sn),e);break}ei(t,wt,Sn);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ox(r/1960))-r,10<r){t.timeoutHandle=ef(ei.bind(null,t,wt,Sn),r);break}ei(t,wt,Sn);break;case 5:ei(t,wt,Sn);break;default:throw Error(U(329))}}}return At(t,Ne()),t.callbackNode===n?XT.bind(null,t):null}function Ef(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(hi(t,e).flags|=256),t=zu(t,e),t!==2&&(e=wt,wt=n,e!==null&&Tf(e)),t}function Tf(t){wt===null?wt=t:wt.push.apply(wt,t)}function ax(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Xp,e&=~Cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Kv(t){if(ie&6)throw Error(U(327));ds();var e=Su(t,0);if(!(e&1))return At(t,Ne()),null;var n=zu(t,e);if(t.tag!==0&&n===2){var r=Kd(t);r!==0&&(e=r,n=Ef(t,r))}if(n===1)throw n=da,hi(t,0),or(t,e),At(t,Ne()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ei(t,wt,Sn),At(t,Ne()),null}function Zp(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Is=Ne()+500,Ic&&Ur())}}function _i(t){pr!==null&&pr.tag===0&&!(ie&6)&&ds();var e=ie;ie|=1;var n=$t.transition,r=ae;try{if($t.transition=null,ae=1,t)return t()}finally{ae=r,$t.transition=n,ie=e,!(ie&6)&&Ur()}}function em(){Ct=es.current,ge(es)}function hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L1(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Vp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xu();break;case 3:Es(),ge(It),ge(ht),$p();break;case 5:zp(r);break;case 4:Es();break;case 13:ge(we);break;case 19:ge(we);break;case 10:Fp(r.type._context);break;case 22:case 23:em()}n=n.return}if($e=t,Ve=t=Sr(t.current,null),Qe=Ct=e,Le=0,da=null,Xp=Cc=vi=0,wt=Fo=null,oi!==null){for(e=0;e<oi.length;e++)if(n=oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}oi=null}return t}function JT(t,e){do{var n=Ve;try{if(Lp(),tu.current=Fu,Lu){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lu=!1}if(yi=0,ze=Me=Te=null,Mo=!1,ua=0,Yp.current=null,n===null||n.return===null){Le=1,da=e,Ve=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Qe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Dv(o);if(g!==null){g.flags&=-257,Vv(g,o,a,s,e),g.mode&1&&bv(s,c,e),e=g,u=c;var T=e.updateQueue;if(T===null){var E=new Set;E.add(u),e.updateQueue=E}else T.add(u);break e}else{if(!(e&1)){bv(s,c,e),tm();break e}u=Error(U(426))}}else if(ve&&a.mode&1){var C=Dv(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Vv(C,o,a,s,e),Op(Ts(u,a));break e}}s=u=Ts(u,a),Le!==4&&(Le=2),Fo===null?Fo=[s]:Fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=OT(s,u,e);Pv(s,v);break e;case 1:a=u;var _=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Tr===null||!Tr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=MT(s,a,e);Pv(s,N);break e}}s=s.return}while(s!==null)}tI(n)}catch(O){e=O,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function ZT(){var t=ju.current;return ju.current=Fu,t===null?Fu:t}function tm(){(Le===0||Le===3||Le===2)&&(Le=4),$e===null||!(vi&268435455)&&!(Cc&268435455)||or($e,Qe)}function zu(t,e){var n=ie;ie|=2;var r=ZT();($e!==t||Qe!==e)&&(Sn=null,hi(t,e));do try{lx();break}catch(i){JT(t,i)}while(!0);if(Lp(),ie=n,ju.current=r,Ve!==null)throw Error(U(261));return $e=null,Qe=0,Le}function lx(){for(;Ve!==null;)eI(Ve)}function ux(){for(;Ve!==null&&!VR();)eI(Ve)}function eI(t){var e=rI(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?tI(t):Ve=e,Yp.current=null}function tI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nx(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ve=null;return}}else if(n=tx(n,e,Ct),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Le===0&&(Le=5)}function ei(t,e,n){var r=ae,i=$t.transition;try{$t.transition=null,ae=1,cx(t,e,n,r)}finally{$t.transition=i,ae=r}return null}function cx(t,e,n,r){do ds();while(pr!==null);if(ie&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(WR(t,s),t===$e&&(Ve=$e=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ll||(Ll=!0,iI(Iu,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=ae;ae=1;var a=ie;ie|=4,Yp.current=null,ix(t,n),QT(n,t),k1(Jd),Au=!!Xd,Jd=Xd=null,t.current=n,sx(n),OR(),ie=a,ae=o,$t.transition=s}else t.current=n;if(Ll&&(Ll=!1,pr=t,Bu=i),s=t.pendingLanes,s===0&&(Tr=null),FR(n.stateNode),At(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uu)throw Uu=!1,t=_f,_f=null,t;return Bu&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===wf?jo++:(jo=0,wf=t):jo=0,Ur(),null}function ds(){if(pr!==null){var t=OE(Bu),e=$t.transition,n=ae;try{if($t.transition=null,ae=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,Bu=0,ie&6)throw Error(U(331));var i=ie;for(ie|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:Lo(8,h,s)}var f=h.child;if(f!==null)f.return=h,W=f;else for(;W!==null;){h=W;var p=h.sibling,g=h.return;if(KT(h),h===c){W=null;break}if(p!==null){p.return=g,W=p;break}W=g}}}var T=s.alternate;if(T!==null){var E=T.child;if(E!==null){T.child=null;do{var C=E.sibling;E.sibling=null,E=C}while(E!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,W=v;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=_;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pc(9,a)}}catch(O){Ce(a,a.return,O)}if(a===o){W=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,W=N;break e}W=a.return}}if(ie=i,Ur(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(vc,t)}catch{}r=!0}return r}finally{ae=n,$t.transition=e}}return!1}function qv(t,e,n){e=Ts(n,e),e=OT(t,e,1),t=Er(t,e,1),e=yt(),t!==null&&(Va(t,1,e),At(t,e))}function Ce(t,e,n){if(t.tag===3)qv(t,t,n);else for(;e!==null;){if(e.tag===3){qv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){t=Ts(n,t),t=MT(e,t,1),e=Er(e,t,1),t=yt(),e!==null&&(Va(e,1,t),At(e,t));break}}e=e.return}}function hx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Qe&n)===n&&(Le===4||Le===3&&(Qe&130023424)===Qe&&500>Ne()-Jp?hi(t,0):Xp|=n),At(t,e)}function nI(t,e){e===0&&(t.mode&1?(e=Cl,Cl<<=1,!(Cl&130023424)&&(Cl=4194304)):e=1);var n=yt();t=Un(t,e),t!==null&&(Va(t,e,n),At(t,n))}function dx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nI(t,n)}function fx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),nI(t,n)}var rI;rI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,ex(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,ve&&e.flags&1048576&&aT(e,bu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ru(t,e),t=e.pendingProps;var i=vs(e,ht.current);hs(e,n),i=Hp(null,e,r,t,i,n);var s=Kp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Up(e),i.updater=Ac,e.stateNode=i,i._reactInternals=e,lf(e,r,t,n),e=hf(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Dp(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ru(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mx(r),t=Qt(r,t),i){case 0:e=cf(null,e,r,t,n);break e;case 1:e=Lv(null,e,r,t,n);break e;case 11:e=Ov(null,e,r,t,n);break e;case 14:e=Mv(null,e,r,Qt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),cf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Lv(t,e,r,i,n);case 3:e:{if(UT(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,fT(t,e),Ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ts(Error(U(423)),e),e=Fv(t,e,r,n,i);break e}else if(r!==i){i=Ts(Error(U(424)),e),e=Fv(t,e,r,n,i);break e}else for(xt=wr(e.stateNode.containerInfo.firstChild),Nt=e,ve=!0,Xt=null,n=hT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){e=Bn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return pT(e),t===null&&sf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zd(r,i)?o=null:s!==null&&Zd(r,s)&&(e.flags|=32),jT(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&sf(e),null;case 13:return BT(t,e,n);case 4:return Bp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ws(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Ov(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Du,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!It.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),of(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),of(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hs(e,n),i=Wt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),Mv(t,e,r,i,n);case 15:return LT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),ru(t,e),e.tag=1,St(r)?(t=!0,ku(e)):t=!1,hs(e,n),VT(e,r,i),lf(e,r,i,n),hf(null,e,r,!0,t,n);case 19:return zT(t,e,n);case 22:return FT(t,e,n)}throw Error(U(156,e.tag))};function iI(t,e){return NE(t,e)}function px(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new px(t,e,n,r)}function nm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mx(t){if(typeof t=="function")return nm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ep)return 11;if(t===Tp)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ou(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wi:return di(n.children,i,s,e);case wp:o=8,i|=8;break;case Nd:return t=zt(12,n,e,i|2),t.elementType=Nd,t.lanes=s,t;case bd:return t=zt(13,n,e,i),t.elementType=bd,t.lanes=s,t;case Dd:return t=zt(19,n,e,i),t.elementType=Dd,t.lanes=s,t;case pE:return Rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dE:o=10;break e;case fE:o=9;break e;case Ep:o=11;break e;case Tp:o=14;break e;case rr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function di(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function Rc(t,e,n,r){return t=zt(22,t,r,e),t.elementType=pE,t.lanes=n,t.stateNode={isHidden:!1},t}function td(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function nd(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mh(0),this.expirationTimes=Mh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rm(t,e,n,r,i,s,o,a,u){return t=new gx(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Up(s),t}function yx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sI(t){if(!t)return Nr;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(St(n))return sT(t,n,e)}return e}function oI(t,e,n,r,i,s,o,a,u){return t=rm(n,r,!0,t,i,s,o,a,u),t.context=sI(null),n=t.current,r=yt(),i=Ir(n),s=bn(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,Va(t,i,r),At(t,r),t}function xc(t,e,n,r){var i=e.current,s=yt(),o=Ir(i);return n=sI(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(Zt(t,i,o,s),eu(t,i,o)),o}function $u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function im(t,e){Gv(t,e),(t=t.alternate)&&Gv(t,e)}function vx(){return null}var aI=typeof reportError=="function"?reportError:function(t){console.error(t)};function sm(t){this._internalRoot=t}kc.prototype.render=sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));xc(t,e,null,null)};kc.prototype.unmount=sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_i(function(){xc(null,t,null,null)}),e[jn]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=FE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&UE(t)}};function om(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qv(){}function _x(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=$u(o);s.call(c)}}var o=oI(e,r,t,0,null,!1,!1,"",Qv);return t._reactRootContainer=o,t[jn]=o.current,ia(t.nodeType===8?t.parentNode:t),_i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=$u(u);a.call(c)}}var u=rm(t,0,!1,null,null,!1,!1,"",Qv);return t._reactRootContainer=u,t[jn]=u.current,ia(t.nodeType===8?t.parentNode:t),_i(function(){xc(e,u,n,r)}),u}function bc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=$u(o);a.call(u)}}xc(e,o,t,i)}else o=_x(n,e,t,i,r);return $u(o)}ME=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(Ap(e,n|1),At(e,Ne()),!(ie&6)&&(Is=Ne()+500,Ur()))}break;case 13:_i(function(){var r=Un(t,1);if(r!==null){var i=yt();Zt(r,t,1,i)}}),im(t,1)}};Pp=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=yt();Zt(e,t,134217728,n)}im(t,134217728)}};LE=function(t){if(t.tag===13){var e=Ir(t),n=Un(t,e);if(n!==null){var r=yt();Zt(n,t,e,r)}im(t,e)}};FE=function(){return ae};jE=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};$d=function(t,e,n){switch(e){case"input":if(Md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Tc(r);if(!i)throw Error(U(90));gE(r),Md(r,i)}}}break;case"textarea":vE(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};AE=Zp;PE=_i;var wx={usingClientEntryPoint:!1,Events:[Ma,Gi,Tc,IE,SE,Zp]},mo={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ex={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xE(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||vx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{vc=Fl.inject(Ex),un=Fl}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wx;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!om(e))throw Error(U(200));return yx(t,e,null,n)};Mt.createRoot=function(t,e){if(!om(t))throw Error(U(299));var n=!1,r="",i=aI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rm(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,ia(t.nodeType===8?t.parentNode:t),new sm(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=xE(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return _i(t)};Mt.hydrate=function(t,e,n){if(!Nc(e))throw Error(U(200));return bc(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!om(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=aI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=oI(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kc(e)};Mt.render=function(t,e,n){if(!Nc(e))throw Error(U(200));return bc(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(U(40));return t._reactRootContainer?(_i(function(){bc(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Zp;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return bc(t,e,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function lI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lI)}catch(t){console.error(t)}}lI(),lE.exports=Mt;var Tx=lE.exports,Yv=Tx;xd.createRoot=Yv.createRoot,xd.hydrateRoot=Yv.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fa.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const Xv="popstate";function Ix(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return If("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wu(i)}return Ax(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function am(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Sx(){return Math.random().toString(36).substr(2,8)}function Jv(t,e){return{usr:t.state,key:t.key,idx:e}}function If(t,e,n,r){return n===void 0&&(n=null),fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fs(e):e,{state:n,key:e&&e.key||r||Sx()})}function Wu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ax(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=mr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(fa({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=mr.Pop;let C=h(),v=C==null?null:C-c;c=C,u&&u({action:a,location:E.location,delta:v})}function p(C,v){a=mr.Push;let _=If(E.location,C,v);c=h()+1;let I=Jv(_,c),N=E.createHref(_);try{o.pushState(I,"",N)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(N)}s&&u&&u({action:a,location:E.location,delta:1})}function g(C,v){a=mr.Replace;let _=If(E.location,C,v);c=h();let I=Jv(_,c),N=E.createHref(_);o.replaceState(I,"",N),s&&u&&u({action:a,location:E.location,delta:0})}function T(C){let v=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof C=="string"?C:Wu(C);return _=_.replace(/ $/,"%20"),be(v,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,v)}let E={get action(){return a},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Xv,f),u=C,()=>{i.removeEventListener(Xv,f),u=null}},createHref(C){return e(i,C)},createURL:T,encodeLocation(C){let v=T(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:g,go(C){return o.go(C)}};return E}var Zv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zv||(Zv={}));function Px(t,e,n){return n===void 0&&(n="/"),Cx(t,e,n)}function Cx(t,e,n,r){let i=typeof e=="string"?Fs(e):e,s=lm(i.pathname||"/",n);if(s==null)return null;let o=uI(t);Rx(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=Ux(s);a=Lx(o[u],c)}return a}function uI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ar([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),uI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ox(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of cI(s.path))i(s,o,u)}),e}function cI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=cI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function Rx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Mx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xx=/^:[\w-]+$/,kx=3,Nx=2,bx=1,Dx=10,Vx=-2,e_=t=>t==="*";function Ox(t,e){let n=t.split("/"),r=n.length;return n.some(e_)&&(r+=Vx),e&&(r+=Nx),n.filter(i=>!e_(i)).reduce((i,s)=>i+(xx.test(s)?kx:s===""?bx:Dx),r)}function Mx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Lx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=Fx({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ar([s,f.pathname]),pathnameBase:Hx(Ar([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ar([s,f.pathnameBase]))}return o}function Fx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:g}=h;if(p==="*"){let E=a[f]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const T=a[f];return g&&!T?c[p]=void 0:c[p]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function jx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),am(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ux(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return am(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zx=t=>Bx.test(t);function $x(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Fs(t):t,s;if(n)if(zx(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),am(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=t_(n.substring(1),"/"):s=t_(n,e)}else s=e;return{pathname:s,search:Kx(r),hash:qx(i)}}function t_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function um(t,e){let n=Wx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function cm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Fs(t):(i=fa({},t),be(!i.pathname||!i.pathname.includes("?"),rd("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),rd("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),rd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=$x(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Ar=t=>t.join("/").replace(/\/\/+/g,"/"),Hx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Kx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Gx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hI=["post","put","patch","delete"];new Set(hI);const Qx=["get",...hI];new Set(Qx);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}const hm=b.createContext(null),Yx=b.createContext(null),Br=b.createContext(null),Dc=b.createContext(null),Gn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),dI=b.createContext(null);function Xx(t,e){let{relative:n}=e===void 0?{}:e;js()||be(!1);let{basename:r,navigator:i}=b.useContext(Br),{hash:s,pathname:o,search:a}=pI(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ar([r,o])),i.createHref({pathname:u,search:a,hash:s})}function js(){return b.useContext(Dc)!=null}function Fa(){return js()||be(!1),b.useContext(Dc).location}function fI(t){b.useContext(Br).static||b.useLayoutEffect(t)}function zr(){let{isDataRoute:t}=b.useContext(Gn);return t?hk():Jx()}function Jx(){js()||be(!1);let t=b.useContext(hm),{basename:e,future:n,navigator:r}=b.useContext(Br),{matches:i}=b.useContext(Gn),{pathname:s}=Fa(),o=JSON.stringify(um(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return fI(()=>{a.current=!0}),b.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=cm(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ar([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function Zx(){let{matches:t}=b.useContext(Gn),e=t[t.length-1];return e?e.params:{}}function pI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Br),{matches:i}=b.useContext(Gn),{pathname:s}=Fa(),o=JSON.stringify(um(i,r.v7_relativeSplatPath));return b.useMemo(()=>cm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function ek(t,e){return tk(t,e)}function tk(t,e,n,r){js()||be(!1);let{navigator:i}=b.useContext(Br),{matches:s}=b.useContext(Gn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Fa(),h;if(e){var f;let C=typeof e=="string"?Fs(e):e;u==="/"||(f=C.pathname)!=null&&f.startsWith(u)||be(!1),h=C}else h=c;let p=h.pathname||"/",g=p;if(u!=="/"){let C=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(C.length).join("/")}let T=Px(t,{pathname:g}),E=ok(T&&T.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Ar([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Ar([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&E?b.createElement(Dc.Provider,{value:{location:pa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:mr.Pop}},E):E}function nk(){let t=ck(),e=Gx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const rk=b.createElement(nk,null);class ik extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Gn.Provider,{value:this.props.routeContext},b.createElement(dI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sk(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(hm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Gn.Provider,{value:e},r)}function ok(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||be(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:g}=n,T=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let g,T=!1,E=null,C=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,E=f.route.errorElement||rk,u&&(c<0&&p===0?(dk("route-fallback"),T=!0,C=null):c===p&&(T=!0,C=f.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,p+1)),_=()=>{let I;return g?I=E:T?I=C:f.route.Component?I=b.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=h,b.createElement(sk,{match:f,routeContext:{outlet:h,matches:v,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(ik,{location:n.location,revalidation:n.revalidation,component:E,error:g,children:_(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):_()},null)}var mI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(mI||{}),gI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gI||{});function ak(t){let e=b.useContext(hm);return e||be(!1),e}function lk(t){let e=b.useContext(Yx);return e||be(!1),e}function uk(t){let e=b.useContext(Gn);return e||be(!1),e}function yI(t){let e=uk(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function ck(){var t;let e=b.useContext(dI),n=lk(),r=yI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function hk(){let{router:t}=ak(mI.UseNavigateStable),e=yI(gI.UseNavigateStable),n=b.useRef(!1);return fI(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pa({fromRouteId:e},s)))},[t,e])}const n_={};function dk(t,e,n){n_[t]||(n_[t]=!0)}function fk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function r_(t){let{to:e,replace:n,state:r,relative:i}=t;js()||be(!1);let{future:s,static:o}=b.useContext(Br),{matches:a}=b.useContext(Gn),{pathname:u}=Fa(),c=zr(),h=cm(e,um(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return b.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function ti(t){be(!1)}function pk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1,future:a}=t;js()&&be(!1);let u=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:o,future:pa({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Fs(r));let{pathname:h="/",search:f="",hash:p="",state:g=null,key:T="default"}=r,E=b.useMemo(()=>{let C=lm(h,u);return C==null?null:{location:{pathname:C,search:f,hash:p,state:g,key:T},navigationType:i}},[u,h,f,p,g,T,i]);return E==null?null:b.createElement(Br.Provider,{value:c},b.createElement(Dc.Provider,{children:n,value:E}))}function mk(t){let{children:e,location:n}=t;return ek(Sf(e),n)}new Promise(()=>{});function Sf(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Sf(r.props.children,s));return}r.type!==ti&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Sf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Af(){return Af=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Af.apply(this,arguments)}function gk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vk(t,e){return t.button===0&&(!e||e==="_self")&&!yk(t)}const _k=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wk="6";try{window.__reactRouterVersion=wk}catch{}const Ek="startTransition",i_=hR[Ek];function Tk(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=Ix({window:i,v5Compat:!0}));let o=s.current,[a,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=b.useCallback(f=>{c&&i_?i_(()=>u(f)):u(f)},[u,c]);return b.useLayoutEffect(()=>o.listen(h),[o,h]),b.useEffect(()=>fk(r),[r]),b.createElement(pk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Ik=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ar=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=e,p=gk(e,_k),{basename:g}=b.useContext(Br),T,E=!1;if(typeof c=="string"&&Sk.test(c)&&(T=c,Ik))try{let I=new URL(window.location.href),N=c.startsWith("//")?new URL(I.protocol+c):new URL(c),O=lm(N.pathname,g);N.origin===I.origin&&O!=null?c=O+N.search+N.hash:E=!0}catch{}let C=Xx(c,{relative:i}),v=Ak(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:f});function _(I){r&&r(I),I.defaultPrevented||v(I)}return b.createElement("a",Af({},p,{href:T||C,onClick:E||s?r:_,ref:n,target:u}))});var s_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(s_||(s_={}));var o_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(o_||(o_={}));function Ak(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=zr(),c=Fa(),h=pI(t,{relative:o});return b.useCallback(f=>{if(vk(f,n)){f.preventDefault();let p=r!==void 0?r:Wu(c)===Wu(h);u(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}var a_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Pk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_I={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Ck;const p=s<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ck extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rk=function(t){const e=vI(t);return _I.encodeByteArray(e,!0)},Hu=function(t){return Rk(t).replace(/\./g,"")},wI=function(t){try{return _I.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=()=>xk().__FIREBASE_DEFAULTS__,Nk=()=>{if(typeof process>"u"||typeof a_>"u")return;const t=a_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wI(t[1]);return e&&JSON.parse(e)},Vc=()=>{try{return kk()||Nk()||bk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EI=t=>{var e,n;return(n=(e=Vc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dk=t=>{const e=EI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},TI=()=>{var t;return(t=Vc())===null||t===void 0?void 0:t.config},II=t=>{var e;return(e=Vc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hu(JSON.stringify(n)),Hu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function Lk(){var t;const e=(t=Vc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bk(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zk(){return!Lk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $k(){try{return typeof indexedDB=="object"}catch{return!1}}function Wk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hk,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qn(i,a,r)}}function Kk(t,e){return t.replace(qk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qk=/\{\$([^}]+)}/g;function Gk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ku(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(l_(s)&&l_(o)){if(!Ku(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function l_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function To(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Qk(t,e){const n=new Yk(t,e);return n.subscribe.bind(n)}class Yk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=id),i.error===void 0&&(i.error=id),i.complete===void 0&&(i.complete=id);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function id(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class wi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eN(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zk(t){return t===ni?void 0:t}function eN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const nN={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},rN=ne.INFO,iN={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},sN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dm{constructor(e){this.name=e,this._logLevel=rN,this._logHandler=sN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const oN=(t,e)=>e.some(n=>t instanceof n);let u_,c_;function aN(){return u_||(u_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lN(){return c_||(c_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SI=new WeakMap,Pf=new WeakMap,AI=new WeakMap,sd=new WeakMap,fm=new WeakMap;function uN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&SI.set(n,t)}).catch(()=>{}),fm.set(e,t),e}function cN(t){if(Pf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pf.set(t,e)}let Cf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hN(t){Cf=t(Cf)}function dN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(od(this),e,...n);return AI.set(r,e.sort?e.sort():[e]),Pr(r)}:lN().includes(t)?function(...e){return t.apply(od(this),e),Pr(SI.get(this))}:function(...e){return Pr(t.apply(od(this),e))}}function fN(t){return typeof t=="function"?dN(t):(t instanceof IDBTransaction&&cN(t),oN(t,aN())?new Proxy(t,Cf):t)}function Pr(t){if(t instanceof IDBRequest)return uN(t);if(sd.has(t))return sd.get(t);const e=fN(t);return e!==t&&(sd.set(t,e),fm.set(e,t)),e}const od=t=>fm.get(t);function pN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Pr(o.result),u.oldVersion,u.newVersion,Pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const mN=["get","getKey","getAll","getAllKeys","count"],gN=["put","add","delete","clear"],ad=new Map;function h_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ad.get(e))return ad.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return ad.set(e,s),s}hN(t=>({...t,get:(e,n,r)=>h_(e,n)||t.get(e,n,r),has:(e,n)=>!!h_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rf="@firebase/app",d_="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new dm("@firebase/app"),_N="@firebase/app-compat",wN="@firebase/analytics-compat",EN="@firebase/analytics",TN="@firebase/app-check-compat",IN="@firebase/app-check",SN="@firebase/auth",AN="@firebase/auth-compat",PN="@firebase/database",CN="@firebase/data-connect",RN="@firebase/database-compat",xN="@firebase/functions",kN="@firebase/functions-compat",NN="@firebase/installations",bN="@firebase/installations-compat",DN="@firebase/messaging",VN="@firebase/messaging-compat",ON="@firebase/performance",MN="@firebase/performance-compat",LN="@firebase/remote-config",FN="@firebase/remote-config-compat",jN="@firebase/storage",UN="@firebase/storage-compat",BN="@firebase/firestore",zN="@firebase/vertexai-preview",$N="@firebase/firestore-compat",WN="firebase",HN="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="[DEFAULT]",KN={[Rf]:"fire-core",[_N]:"fire-core-compat",[EN]:"fire-analytics",[wN]:"fire-analytics-compat",[IN]:"fire-app-check",[TN]:"fire-app-check-compat",[SN]:"fire-auth",[AN]:"fire-auth-compat",[PN]:"fire-rtdb",[CN]:"fire-data-connect",[RN]:"fire-rtdb-compat",[xN]:"fire-fn",[kN]:"fire-fn-compat",[NN]:"fire-iid",[bN]:"fire-iid-compat",[DN]:"fire-fcm",[VN]:"fire-fcm-compat",[ON]:"fire-perf",[MN]:"fire-perf-compat",[LN]:"fire-rc",[FN]:"fire-rc-compat",[jN]:"fire-gcs",[UN]:"fire-gcs-compat",[BN]:"fire-fst",[$N]:"fire-fst-compat",[zN]:"fire-vertex","fire-js":"fire-js",[WN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map,qN=new Map,kf=new Map;function f_(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(kf.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;kf.set(e,t);for(const n of qu.values())f_(n,t);for(const n of qN.values())f_(n,t);return!0}function pm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new ja("app","Firebase",GN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=HN;function PI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=TI()),!n)throw Cr.create("no-options");const s=qu.get(i);if(s){if(Ku(n,s.options)&&Ku(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new tN(i);for(const u of kf.values())o.addComponent(u);const a=new QN(n,r,o);return qu.set(i,a),a}function CI(t=xf){const e=qu.get(t);if(!e&&t===xf&&TI())return PI();if(!e)throw Cr.create("no-app",{appName:t});return e}function Rr(t,e,n){var r;let i=(r=KN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(a.join(" "));return}Ss(new wi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN="firebase-heartbeat-database",XN=1,ma="firebase-heartbeat-store";let ld=null;function RI(){return ld||(ld=pN(YN,XN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),ld}async function JN(t){try{const n=(await RI()).transaction(ma),r=await n.objectStore(ma).get(xI(t));return await n.done,r}catch(e){if(e instanceof Qn)zn.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function p_(t,e){try{const r=(await RI()).transaction(ma,"readwrite");await r.objectStore(ma).put(e,xI(t)),await r.done}catch(n){if(n instanceof Qn)zn.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function xI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=1024,eb=30*24*60*60*1e3;class tb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=m_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=eb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=m_(),{heartbeatsToSend:r,unsentEntries:i}=nb(this._heartbeatsCache.heartbeats),s=Hu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return zn.warn(n),""}}}function m_(){return new Date().toISOString().substring(0,10)}function nb(t,e=ZN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),g_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),g_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $k()?Wk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return p_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function g_(t){return Hu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){Ss(new wi("platform-logger",e=>new yN(e),"PRIVATE")),Ss(new wi("heartbeat",e=>new tb(e),"PRIVATE")),Rr(Rf,d_,t),Rr(Rf,d_,"esm2017"),Rr("fire-js","")}ib("");var sb="firebase",ob="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr(sb,ob,"app");function mm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ab=kI,NI=new ja("auth","Firebase",kI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new dm("@firebase/auth");function lb(t,...e){Gu.logLevel<=ne.WARN&&Gu.warn(`Auth (${Us}): ${t}`,...e)}function au(t,...e){Gu.logLevel<=ne.ERROR&&Gu.error(`Auth (${Us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw gm(t,...e)}function hn(t,...e){return gm(t,...e)}function bI(t,e,n){const r=Object.assign(Object.assign({},ab()),{[e]:n});return new ja("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return bI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NI.create(t,...e)}function Q(t,e,...n){if(!t)throw gm(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw au(e),new Error(e)}function $n(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ub(){return y_()==="http:"||y_()==="https:"}function y_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ub()||jk()||"connection"in navigator)?navigator.onLine:!0}function hb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=Mk()||Uk()}get(){return cb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new Ba(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wr(t,e,n,r,i={}){return VI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ua(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Fk()||(c.referrerPolicy="no-referrer"),DI.fetch()(OI(t,t.config.apiHost,n,a),c)})}async function VI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},db),e);try{const i=new mb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw jl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw jl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw jl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw jl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bI(t,h,c);nn(t,h)}}catch(i){if(i instanceof Qn)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function za(t,e,n,r,i={}){const s=await Wr(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function OI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ym(t.config,i):`${t.config.apiScheme}://${i}`}function pb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),fb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}function v_(t){return t!==void 0&&t.enterprise!==void 0}class gb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yb(t,e){return Wr(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e){return Wr(t,"POST","/v1/accounts:delete",e)}async function MI(t,e){return Wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _b(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=vm(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Uo(ud(i.auth_time)),issuedAtTime:Uo(ud(i.iat)),expirationTime:Uo(ud(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ud(t){return Number(t)*1e3}function vm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return au("JWT malformed, contained fewer than 3 sections"),null;try{const i=wI(n);return i?JSON.parse(i):(au("Failed to decode base64 JWT payload"),null)}catch(i){return au("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function __(t){const e=vm(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&wb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uo(this.lastLoginAt),this.creationTime=Uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ga(t,MI(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?LI(s.providerUserInfo):[],a=Ib(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Tb(t){const e=je(t);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ib(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function LI(t){return t.map(e=>{var{providerId:n}=e,r=mm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e){const n=await VI(t,{},async()=>{const r=Ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=OI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",DI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ab(t,e){return Wr(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):__(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=__(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fs;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Eb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ga(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _b(this,e)}reload(){return Tb(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await ga(this,vb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:N,isAnonymous:O,providerData:L,stsTokenManager:P}=n;Q(I&&P,e,"internal-error");const y=fs.fromJSON(this.name,P);Q(typeof I=="string",e,"internal-error"),tr(f,e.name),tr(p,e.name),Q(typeof N=="boolean",e,"internal-error"),Q(typeof O=="boolean",e,"internal-error"),tr(g,e.name),tr(T,e.name),tr(E,e.name),tr(C,e.name),tr(v,e.name),tr(_,e.name);const S=new xn({uid:I,auth:e,email:p,emailVerified:N,displayName:f,isAnonymous:O,photoURL:T,phoneNumber:g,tenantId:E,stsTokenManager:y,createdAt:v,lastLoginAt:_});return L&&Array.isArray(L)&&(S.providerData=L.map(R=>Object.assign({},R))),C&&(S._redirectEventId=C),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new fs;i.updateFromServerResponse(n);const s=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?LI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new fs;a.updateFromIdToken(r);const u=new xn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new Map;function kn(t){$n(t instanceof Function,"Expected a class definition");let e=w_.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FI.type="NONE";const E_=FI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=lu(this.userKey,i.apiKey,s),this.fullPersistenceKey=lu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(kn(E_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(E_);const o=lu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=xn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ps(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ps(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WI(e))return"Blackberry";if(HI(e))return"Webos";if(UI(e))return"Safari";if((e.includes("chrome/")||BI(e))&&!e.includes("edge/"))return"Chrome";if($I(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jI(t=dt()){return/firefox\//i.test(t)}function UI(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BI(t=dt()){return/crios\//i.test(t)}function zI(t=dt()){return/iemobile/i.test(t)}function $I(t=dt()){return/android/i.test(t)}function WI(t=dt()){return/blackberry/i.test(t)}function HI(t=dt()){return/webos/i.test(t)}function _m(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pb(t=dt()){var e;return _m(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cb(){return Bk()&&document.documentMode===10}function KI(t=dt()){return _m(t)||$I(t)||HI(t)||WI(t)||/windows phone/i.test(t)||zI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e=[]){let n;switch(t){case"Browser":n=T_(dt());break;case"Worker":n=`${T_(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e={}){return Wr(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=6;class Nb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new I_(this),this.idTokenSubscription=new I_(this),this.beforeStateQueue=new Rb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await MI(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(Dn(this));const n=e?je(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xb(this),n=new Nb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ja("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ab(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xi(t){return je(t)}class I_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qk(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Db(t){Oc=t}function GI(t){return Oc.loadJS(t)}function Vb(){return Oc.recaptchaEnterpriseScript}function Ob(){return Oc.gapiScript}function Mb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Lb="recaptcha-enterprise",Fb="NO_RECAPTCHA";class jb{constructor(e){this.type=Lb,this.auth=xi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;v_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Fb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&v_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Vb();u.length!==0&&(u+=a),GI(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function S_(t,e,n,r=!1){const i=new jb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Df(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await S_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await S_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t,e){const n=pm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ku(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function Bb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zb(t,e,n){const r=xi(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=QI(e),{host:o,port:a}=$b(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Wb()}function QI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $b(t){const e=QI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:A_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:A_(o)}}}function A_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function Hb(t,e){return Wr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e){return za(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function Gb(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends wm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Df(e,n,"signInWithPassword",Kb);case"emailLink":return qb(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Df(e,r,"signUpPassword",Hb);case"emailLink":return Gb(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e){return za(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="http://localhost";class Ei extends wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:Qb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ua(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xb(t){const e=To(Io(t)).link,n=e?To(Io(e)).deep_link_id:null,r=To(Io(t)).deep_link_id;return(r?To(Io(r)).link:null)||r||n||e||t}class Em{constructor(e){var n,r,i,s,o,a;const u=To(Io(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Yb((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Xb(e);try{return new Em(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Em.parseLink(n);return Q(r,"argument-error"),ya._fromEmailAndCode(e,r.code,r.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends YI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends $a{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends $a{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends $a{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(t,e){return za(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xn._fromIdTokenResponse(e,r,i),o=P_(r);return new Ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=P_(r);return new Ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function P_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends Qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yu(e,n,r,i)}}function XI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yu._fromErrorAndOperation(t,s,e,r):s})}async function Zb(t,e,n=!1){const r=await ga(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(Dn(r));const i="reauthenticate";try{const s=await ga(t,XI(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=vm(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e,n=!1){if(ln(t.app))return Promise.reject(Dn(t));const r="signIn",i=await XI(t,r,e),s=await Ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function tD(t,e){return JI(xi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t){const e=xi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nD(t,e,n){if(ln(t.app))return Promise.reject(Dn(t));const r=xi(t),o=await Df(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ZI(t),u}),a=await Ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function rD(t,e,n){return ln(t.app)?Promise.reject(Dn(t)):tD(je(t),Bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZI(t),r})}function iD(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function sD(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function oD(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function aD(t){return je(t).signOut()}const Xu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xu,"1"),this.storage.removeItem(Xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=1e3,uD=10;class tS extends eS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=KI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Cb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tS.type="LOCAL";const cD=tS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS extends eS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nS.type="SESSION";const rS=nS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await hD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Tm("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function fD(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function pD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gD(){return iS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="firebaseLocalStorageDb",yD=1,Ju="firebaseLocalStorage",oS="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lc(t,e){return t.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function vD(){const t=indexedDB.deleteDatabase(sS);return new Wa(t).toPromise()}function Vf(){const t=indexedDB.open(sS,yD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ju,{keyPath:oS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ju)?e(r):(r.close(),await vD(),e(await Vf()))})})}async function C_(t,e,n){const r=Lc(t,!0).put({[oS]:e,value:n});return new Wa(r).toPromise()}async function _D(t,e){const n=Lc(t,!1).get(e),r=await new Wa(n).toPromise();return r===void 0?null:r.value}function R_(t,e){const n=Lc(t,!0).delete(e);return new Wa(n).toPromise()}const wD=800,ED=3;class aS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ED)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(gD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pD(),!this.activeServiceWorker)return;this.sender=new dD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vf();return await C_(e,Xu,"1"),await R_(e,Xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>C_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_D(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>R_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lc(i,!1).getAll();return new Wa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aS.type="LOCAL";const TD=aS;new Ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t,e){return e?kn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SD(t){return JI(t.auth,new Im(t),t.bypassAuthState)}function AD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),eD(n,new Im(t),t.bypassAuthState)}async function PD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Zb(n,new Im(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SD;case"linkViaPopup":case"linkViaRedirect":return PD;case"reauthViaPopup":case"reauthViaRedirect":return AD;default:nn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=new Ba(2e3,1e4);class ts extends lS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Tm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CD.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD="pendingRedirect",uu=new Map;class xD extends lS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=uu.get(this.auth._key());if(!e){try{const r=await kD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}uu.set(this.auth._key(),e)}return this.bypassAuthState||uu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kD(t,e){const n=DD(e),r=bD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ND(t,e){uu.set(t._key(),e)}function bD(t){return kn(t._redirectPersistence)}function DD(t){return lu(RD,t.config.apiKey,t.name)}async function VD(t,e,n=!1){if(ln(t.app))return Promise.reject(Dn(t));const r=xi(t),i=ID(r,e),o=await new xD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=10*60*1e3;class MD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OD&&this.cachedEventUids.clear(),this.cachedEventUids.has(x_(e))}saveEventToCache(e){this.cachedEventUids.add(x_(e)),this.lastProcessedEventTime=Date.now()}}function x_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FD(t,e={}){return Wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UD=/^https?/;async function BD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FD(t);for(const n of e)try{if(zD(n))return}catch{}nn(t,"unauthorized-domain")}function zD(t){const e=Nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UD.test(n))return!1;if(jD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new Ba(3e4,6e4);function k_(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WD(t){return new Promise((e,n)=>{var r,i,s;function o(){k_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{k_(),n(hn(t,"network-request-failed"))},timeout:$D.get()})}if(!((i=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dn().gapi)===null||s===void 0)&&s.load)o();else{const a=Mb("iframefcb");return dn()[a]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},GI(`${Ob()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw cu=null,e})}let cu=null;function HD(t){return cu=cu||WD(t),cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=new Ba(5e3,15e3),qD="__/auth/iframe",GD="emulator/auth/iframe",QD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XD(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ym(e,GD):`https://${t.config.authDomain}/${qD}`,r={apiKey:e.apiKey,appName:t.name,v:Us},i=YD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ua(r).slice(1)}`}async function JD(t){const e=await HD(t),n=dn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:XD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),a=dn().setTimeout(()=>{s(o)},KD.get());function u(){dn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eV=500,tV=600,nV="_blank",rV="http://localhost";class N_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iV(t,e,n,r=eV,i=tV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},ZD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=dt().toLowerCase();n&&(a=BI(c)?nV:n),jI(c)&&(e=e||rV,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[g,T])=>`${p}${g}=${T},`,"");if(Pb(c)&&a!=="_self")return sV(e||"",a),new N_(null);const f=window.open(e||"",a,h);Q(f,t,"popup-blocked");try{f.focus()}catch{}return new N_(f)}function sV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV="__/auth/handler",aV="emulator/auth/handler",lV=encodeURIComponent("fac");async function b_(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Us,eventId:i};if(e instanceof YI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof $a){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${lV}=${encodeURIComponent(u)}`:"";return`${uV(t)}?${Ua(a).slice(1)}${c}`}function uV({config:t}){return t.emulator?ym(t,aV):`https://${t.authDomain}/${oV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="webStorageSupport";class cV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rS,this._completeRedirectFn=VD,this._overrideRedirectResult=ND}async _openPopup(e,n,r,i){var s;$n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await b_(e,n,r,Nf(),i);return iV(e,o,Tm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await b_(e,n,r,Nf(),i);return fD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JD(e),r=new MD(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cd,{type:cd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[cd];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return KI()||UI()||_m()}}const hV=cV;var D_="@firebase/auth",V_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pV(t){Ss(new wi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qI(t)},c=new bb(r,i,s,u);return Bb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ss(new wi("auth-internal",e=>{const n=xi(e.getProvider("auth").getImmediate());return(r=>new dV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rr(D_,V_,fV(t)),Rr(D_,V_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=5*60,gV=II("authIdTokenMaxAge")||mV;let O_=null;const yV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gV)return;const i=n==null?void 0:n.token;O_!==i&&(O_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vV(t=CI()){const e=pm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ub(t,{popupRedirectResolver:hV,persistence:[TD,cD,rS]}),r=II("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yV(s.toString());sD(n,o,()=>o(n.currentUser)),iD(n,a=>o(a))}}const i=EI("auth");return i&&zb(n,`http://${i}`),n}function _V(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Db({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_V().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pV("Browser");var M_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi,cS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,y){function S(){}S.prototype=y.prototype,P.D=y.prototype,P.prototype=new S,P.prototype.constructor=P,P.C=function(R,k,D){for(var x=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)x[ft-2]=arguments[ft];return y.prototype[k].apply(R,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(P,y,S){S||(S=0);var R=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)R[k]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(k=0;16>k;++k)R[k]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=P.g[0],S=P.g[1],k=P.g[2];var D=P.g[3],x=y+(D^S&(k^D))+R[0]+3614090360&4294967295;y=S+(x<<7&4294967295|x>>>25),x=D+(k^y&(S^k))+R[1]+3905402710&4294967295,D=y+(x<<12&4294967295|x>>>20),x=k+(S^D&(y^S))+R[2]+606105819&4294967295,k=D+(x<<17&4294967295|x>>>15),x=S+(y^k&(D^y))+R[3]+3250441966&4294967295,S=k+(x<<22&4294967295|x>>>10),x=y+(D^S&(k^D))+R[4]+4118548399&4294967295,y=S+(x<<7&4294967295|x>>>25),x=D+(k^y&(S^k))+R[5]+1200080426&4294967295,D=y+(x<<12&4294967295|x>>>20),x=k+(S^D&(y^S))+R[6]+2821735955&4294967295,k=D+(x<<17&4294967295|x>>>15),x=S+(y^k&(D^y))+R[7]+4249261313&4294967295,S=k+(x<<22&4294967295|x>>>10),x=y+(D^S&(k^D))+R[8]+1770035416&4294967295,y=S+(x<<7&4294967295|x>>>25),x=D+(k^y&(S^k))+R[9]+2336552879&4294967295,D=y+(x<<12&4294967295|x>>>20),x=k+(S^D&(y^S))+R[10]+4294925233&4294967295,k=D+(x<<17&4294967295|x>>>15),x=S+(y^k&(D^y))+R[11]+2304563134&4294967295,S=k+(x<<22&4294967295|x>>>10),x=y+(D^S&(k^D))+R[12]+1804603682&4294967295,y=S+(x<<7&4294967295|x>>>25),x=D+(k^y&(S^k))+R[13]+4254626195&4294967295,D=y+(x<<12&4294967295|x>>>20),x=k+(S^D&(y^S))+R[14]+2792965006&4294967295,k=D+(x<<17&4294967295|x>>>15),x=S+(y^k&(D^y))+R[15]+1236535329&4294967295,S=k+(x<<22&4294967295|x>>>10),x=y+(k^D&(S^k))+R[1]+4129170786&4294967295,y=S+(x<<5&4294967295|x>>>27),x=D+(S^k&(y^S))+R[6]+3225465664&4294967295,D=y+(x<<9&4294967295|x>>>23),x=k+(y^S&(D^y))+R[11]+643717713&4294967295,k=D+(x<<14&4294967295|x>>>18),x=S+(D^y&(k^D))+R[0]+3921069994&4294967295,S=k+(x<<20&4294967295|x>>>12),x=y+(k^D&(S^k))+R[5]+3593408605&4294967295,y=S+(x<<5&4294967295|x>>>27),x=D+(S^k&(y^S))+R[10]+38016083&4294967295,D=y+(x<<9&4294967295|x>>>23),x=k+(y^S&(D^y))+R[15]+3634488961&4294967295,k=D+(x<<14&4294967295|x>>>18),x=S+(D^y&(k^D))+R[4]+3889429448&4294967295,S=k+(x<<20&4294967295|x>>>12),x=y+(k^D&(S^k))+R[9]+568446438&4294967295,y=S+(x<<5&4294967295|x>>>27),x=D+(S^k&(y^S))+R[14]+3275163606&4294967295,D=y+(x<<9&4294967295|x>>>23),x=k+(y^S&(D^y))+R[3]+4107603335&4294967295,k=D+(x<<14&4294967295|x>>>18),x=S+(D^y&(k^D))+R[8]+1163531501&4294967295,S=k+(x<<20&4294967295|x>>>12),x=y+(k^D&(S^k))+R[13]+2850285829&4294967295,y=S+(x<<5&4294967295|x>>>27),x=D+(S^k&(y^S))+R[2]+4243563512&4294967295,D=y+(x<<9&4294967295|x>>>23),x=k+(y^S&(D^y))+R[7]+1735328473&4294967295,k=D+(x<<14&4294967295|x>>>18),x=S+(D^y&(k^D))+R[12]+2368359562&4294967295,S=k+(x<<20&4294967295|x>>>12),x=y+(S^k^D)+R[5]+4294588738&4294967295,y=S+(x<<4&4294967295|x>>>28),x=D+(y^S^k)+R[8]+2272392833&4294967295,D=y+(x<<11&4294967295|x>>>21),x=k+(D^y^S)+R[11]+1839030562&4294967295,k=D+(x<<16&4294967295|x>>>16),x=S+(k^D^y)+R[14]+4259657740&4294967295,S=k+(x<<23&4294967295|x>>>9),x=y+(S^k^D)+R[1]+2763975236&4294967295,y=S+(x<<4&4294967295|x>>>28),x=D+(y^S^k)+R[4]+1272893353&4294967295,D=y+(x<<11&4294967295|x>>>21),x=k+(D^y^S)+R[7]+4139469664&4294967295,k=D+(x<<16&4294967295|x>>>16),x=S+(k^D^y)+R[10]+3200236656&4294967295,S=k+(x<<23&4294967295|x>>>9),x=y+(S^k^D)+R[13]+681279174&4294967295,y=S+(x<<4&4294967295|x>>>28),x=D+(y^S^k)+R[0]+3936430074&4294967295,D=y+(x<<11&4294967295|x>>>21),x=k+(D^y^S)+R[3]+3572445317&4294967295,k=D+(x<<16&4294967295|x>>>16),x=S+(k^D^y)+R[6]+76029189&4294967295,S=k+(x<<23&4294967295|x>>>9),x=y+(S^k^D)+R[9]+3654602809&4294967295,y=S+(x<<4&4294967295|x>>>28),x=D+(y^S^k)+R[12]+3873151461&4294967295,D=y+(x<<11&4294967295|x>>>21),x=k+(D^y^S)+R[15]+530742520&4294967295,k=D+(x<<16&4294967295|x>>>16),x=S+(k^D^y)+R[2]+3299628645&4294967295,S=k+(x<<23&4294967295|x>>>9),x=y+(k^(S|~D))+R[0]+4096336452&4294967295,y=S+(x<<6&4294967295|x>>>26),x=D+(S^(y|~k))+R[7]+1126891415&4294967295,D=y+(x<<10&4294967295|x>>>22),x=k+(y^(D|~S))+R[14]+2878612391&4294967295,k=D+(x<<15&4294967295|x>>>17),x=S+(D^(k|~y))+R[5]+4237533241&4294967295,S=k+(x<<21&4294967295|x>>>11),x=y+(k^(S|~D))+R[12]+1700485571&4294967295,y=S+(x<<6&4294967295|x>>>26),x=D+(S^(y|~k))+R[3]+2399980690&4294967295,D=y+(x<<10&4294967295|x>>>22),x=k+(y^(D|~S))+R[10]+4293915773&4294967295,k=D+(x<<15&4294967295|x>>>17),x=S+(D^(k|~y))+R[1]+2240044497&4294967295,S=k+(x<<21&4294967295|x>>>11),x=y+(k^(S|~D))+R[8]+1873313359&4294967295,y=S+(x<<6&4294967295|x>>>26),x=D+(S^(y|~k))+R[15]+4264355552&4294967295,D=y+(x<<10&4294967295|x>>>22),x=k+(y^(D|~S))+R[6]+2734768916&4294967295,k=D+(x<<15&4294967295|x>>>17),x=S+(D^(k|~y))+R[13]+1309151649&4294967295,S=k+(x<<21&4294967295|x>>>11),x=y+(k^(S|~D))+R[4]+4149444226&4294967295,y=S+(x<<6&4294967295|x>>>26),x=D+(S^(y|~k))+R[11]+3174756917&4294967295,D=y+(x<<10&4294967295|x>>>22),x=k+(y^(D|~S))+R[2]+718787259&4294967295,k=D+(x<<15&4294967295|x>>>17),x=S+(D^(k|~y))+R[9]+3951481745&4294967295,P.g[0]=P.g[0]+y&4294967295,P.g[1]=P.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,P.g[2]=P.g[2]+k&4294967295,P.g[3]=P.g[3]+D&4294967295}r.prototype.u=function(P,y){y===void 0&&(y=P.length);for(var S=y-this.blockSize,R=this.B,k=this.h,D=0;D<y;){if(k==0)for(;D<=S;)i(this,P,D),D+=this.blockSize;if(typeof P=="string"){for(;D<y;)if(R[k++]=P.charCodeAt(D++),k==this.blockSize){i(this,R),k=0;break}}else for(;D<y;)if(R[k++]=P[D++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var y=1;y<P.length-8;++y)P[y]=0;var S=8*this.o;for(y=P.length-8;y<P.length;++y)P[y]=S&255,S/=256;for(this.u(P),P=Array(16),y=S=0;4>y;++y)for(var R=0;32>R;R+=8)P[S++]=this.g[y]>>>R&255;return P};function s(P,y){var S=a;return Object.prototype.hasOwnProperty.call(S,P)?S[P]:S[P]=y(P)}function o(P,y){this.h=y;for(var S=[],R=!0,k=P.length-1;0<=k;k--){var D=P[k]|0;R&&D==y||(S[k]=D,R=!1)}this.g=S}var a={};function u(P){return-128<=P&&128>P?s(P,function(y){return new o([y|0],0>y?-1:0)}):new o([P|0],0>P?-1:0)}function c(P){if(isNaN(P)||!isFinite(P))return f;if(0>P)return C(c(-P));for(var y=[],S=1,R=0;P>=S;R++)y[R]=P/S|0,S*=4294967296;return new o(y,0)}function h(P,y){if(P.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P.charAt(0)=="-")return C(h(P.substring(1),y));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),R=f,k=0;k<P.length;k+=8){var D=Math.min(8,P.length-k),x=parseInt(P.substring(k,k+D),y);8>D?(D=c(Math.pow(y,D)),R=R.j(D).add(c(x))):(R=R.j(S),R=R.add(c(x)))}return R}var f=u(0),p=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(E(this))return-C(this).m();for(var P=0,y=1,S=0;S<this.g.length;S++){var R=this.i(S);P+=(0<=R?R:4294967296+R)*y,y*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(T(this))return"0";if(E(this))return"-"+C(this).toString(P);for(var y=c(Math.pow(P,6)),S=this,R="";;){var k=N(S,y).g;S=v(S,k.j(y));var D=((0<S.g.length?S.g[0]:S.h)>>>0).toString(P);if(S=k,T(S))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function T(P){if(P.h!=0)return!1;for(var y=0;y<P.g.length;y++)if(P.g[y]!=0)return!1;return!0}function E(P){return P.h==-1}t.l=function(P){return P=v(this,P),E(P)?-1:T(P)?0:1};function C(P){for(var y=P.g.length,S=[],R=0;R<y;R++)S[R]=~P.g[R];return new o(S,~P.h).add(p)}t.abs=function(){return E(this)?C(this):this},t.add=function(P){for(var y=Math.max(this.g.length,P.g.length),S=[],R=0,k=0;k<=y;k++){var D=R+(this.i(k)&65535)+(P.i(k)&65535),x=(D>>>16)+(this.i(k)>>>16)+(P.i(k)>>>16);R=x>>>16,D&=65535,x&=65535,S[k]=x<<16|D}return new o(S,S[S.length-1]&-2147483648?-1:0)};function v(P,y){return P.add(C(y))}t.j=function(P){if(T(this)||T(P))return f;if(E(this))return E(P)?C(this).j(C(P)):C(C(this).j(P));if(E(P))return C(this.j(C(P)));if(0>this.l(g)&&0>P.l(g))return c(this.m()*P.m());for(var y=this.g.length+P.g.length,S=[],R=0;R<2*y;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<P.g.length;k++){var D=this.i(R)>>>16,x=this.i(R)&65535,ft=P.i(k)>>>16,Yn=P.i(k)&65535;S[2*R+2*k]+=x*Yn,_(S,2*R+2*k),S[2*R+2*k+1]+=D*Yn,_(S,2*R+2*k+1),S[2*R+2*k+1]+=x*ft,_(S,2*R+2*k+1),S[2*R+2*k+2]+=D*ft,_(S,2*R+2*k+2)}for(R=0;R<y;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=y;R<2*y;R++)S[R]=0;return new o(S,0)};function _(P,y){for(;(P[y]&65535)!=P[y];)P[y+1]+=P[y]>>>16,P[y]&=65535,y++}function I(P,y){this.g=P,this.h=y}function N(P,y){if(T(y))throw Error("division by zero");if(T(P))return new I(f,f);if(E(P))return y=N(C(P),y),new I(C(y.g),C(y.h));if(E(y))return y=N(P,C(y)),new I(C(y.g),y.h);if(30<P.g.length){if(E(P)||E(y))throw Error("slowDivide_ only works with positive integers.");for(var S=p,R=y;0>=R.l(P);)S=O(S),R=O(R);var k=L(S,1),D=L(R,1);for(R=L(R,2),S=L(S,2);!T(R);){var x=D.add(R);0>=x.l(P)&&(k=k.add(S),D=x),R=L(R,1),S=L(S,1)}return y=v(P,k.j(y)),new I(k,y)}for(k=f;0<=P.l(y);){for(S=Math.max(1,Math.floor(P.m()/y.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=c(S),x=D.j(y);E(x)||0<x.l(P);)S-=R,D=c(S),x=D.j(y);T(D)&&(D=p),k=k.add(D),P=v(P,x)}return new I(k,P)}t.A=function(P){return N(this,P).h},t.and=function(P){for(var y=Math.max(this.g.length,P.g.length),S=[],R=0;R<y;R++)S[R]=this.i(R)&P.i(R);return new o(S,this.h&P.h)},t.or=function(P){for(var y=Math.max(this.g.length,P.g.length),S=[],R=0;R<y;R++)S[R]=this.i(R)|P.i(R);return new o(S,this.h|P.h)},t.xor=function(P){for(var y=Math.max(this.g.length,P.g.length),S=[],R=0;R<y;R++)S[R]=this.i(R)^P.i(R);return new o(S,this.h^P.h)};function O(P){for(var y=P.g.length+1,S=[],R=0;R<y;R++)S[R]=P.i(R)<<1|P.i(R-1)>>>31;return new o(S,P.h)}function L(P,y){var S=y>>5;y%=32;for(var R=P.g.length-S,k=[],D=0;D<R;D++)k[D]=0<y?P.i(D+S)>>>y|P.i(D+S+1)<<32-y:P.i(D+S);return new o(k,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,fi=o}).apply(typeof M_<"u"?M_:typeof self<"u"?self:typeof window<"u"?window:{});var Ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hS,So,dS,hu,Of,fS,pS,mS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ul=="object"&&Ul];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var V=l[w];if(!(V in m))break e;m=m[V]}l=l[l.length-1],w=m[l],d=d(w),d!=w&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,w=!1,V={next:function(){if(!w&&m<l.length){var M=m++;return{value:d(M,l[M]),done:!1}}return w=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,w),l.apply(d,V)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function T(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(w,V,M){for(var B=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)B[ce-2]=arguments[ce];return d.prototype[V].apply(w,B)}}function E(l){const d=l.length;if(0<d){const m=Array(d);for(let w=0;w<d;w++)m[w]=l[w];return m}return[]}function C(l,d){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(u(w)){const V=l.length||0,M=w.length||0;l.length=V+M;for(let B=0;B<M;B++)l[V+B]=w[B]}else l.push(w)}}class v{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var O=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function L(l,d,m){for(const w in l)d.call(m,l[w],w,l)}function P(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function y(l){const d={};for(const m in l)d[m]=l[m];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let m,w;for(let V=1;V<arguments.length;V++){w=arguments[V];for(m in w)l[m]=w[m];for(let M=0;M<S.length;M++)m=S[M],Object.prototype.hasOwnProperty.call(w,m)&&(l[m]=w[m])}}function k(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function D(l){a.setTimeout(()=>{throw l},0)}function x(){var l=G;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ft{constructor(){this.h=this.g=null}add(d,m){const w=Yn.get();w.set(d,m),this.h?this.h.next=w:this.g=w,this.h=w}}var Yn=new v(()=>new Vi,l=>l.reset());class Vi{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let de,z=!1,G=new ft,X=()=>{const l=a.Promise.resolve(void 0);de=()=>{l.then(_e)}};var _e=()=>{for(var l;l=x();){try{l.h.call(l.g)}catch(m){D(m)}var d=Yn;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}z=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function _n(l,d){if(Re.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(O){e:{try{N(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:wn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&_n.aa.h.call(this)}}T(_n,Re);var wn={2:"touch",3:"pen",4:"mouse"};_n.prototype.h=function(){_n.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),yC=0;function vC(l,d,m,w,V){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!w,this.ha=V,this.key=++yC,this.da=this.fa=!1}function il(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function sl(l){this.src=l,this.g={},this.h=0}sl.prototype.add=function(l,d,m,w,V){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var B=uh(l,d,w,V);return-1<B?(d=l[B],m||(d.fa=!1)):(d=new vC(d,this.src,M,!!w,V),d.fa=m,l.push(d)),d};function lh(l,d){var m=d.type;if(m in l.g){var w=l.g[m],V=Array.prototype.indexOf.call(w,d,void 0),M;(M=0<=V)&&Array.prototype.splice.call(w,V,1),M&&(il(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function uh(l,d,m,w){for(var V=0;V<l.length;++V){var M=l[V];if(!M.da&&M.listener==d&&M.capture==!!m&&M.ha==w)return V}return-1}var ch="closure_lm_"+(1e6*Math.random()|0),hh={};function $g(l,d,m,w,V){if(Array.isArray(d)){for(var M=0;M<d.length;M++)$g(l,d[M],m,w,V);return null}return m=Kg(m),l&&l[En]?l.K(d,m,c(w)?!!w.capture:!1,V):_C(l,d,m,!1,w,V)}function _C(l,d,m,w,V,M){if(!d)throw Error("Invalid event type");var B=c(V)?!!V.capture:!!V,ce=fh(l);if(ce||(l[ch]=ce=new sl(l)),m=ce.add(d,m,w,B,M),m.proxy)return m;if(w=wC(),m.proxy=w,w.src=l,w.listener=m,l.addEventListener)vn||(V=B),V===void 0&&(V=!1),l.addEventListener(d.toString(),w,V);else if(l.attachEvent)l.attachEvent(Hg(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function wC(){function l(m){return d.call(l.src,l.listener,m)}const d=EC;return l}function Wg(l,d,m,w,V){if(Array.isArray(d))for(var M=0;M<d.length;M++)Wg(l,d[M],m,w,V);else w=c(w)?!!w.capture:!!w,m=Kg(m),l&&l[En]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],m=uh(M,m,w,V),-1<m&&(il(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=fh(l))&&(d=l.g[d.toString()],l=-1,d&&(l=uh(d,m,w,V)),(m=-1<l?d[l]:null)&&dh(m))}function dh(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[En])lh(d.i,l);else{var m=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(m,w,l.capture):d.detachEvent?d.detachEvent(Hg(m),w):d.addListener&&d.removeListener&&d.removeListener(w),(m=fh(d))?(lh(m,l),m.h==0&&(m.src=null,d[ch]=null)):il(l)}}}function Hg(l){return l in hh?hh[l]:hh[l]="on"+l}function EC(l,d){if(l.da)l=!0;else{d=new _n(d,this);var m=l.listener,w=l.ha||l.src;l.fa&&dh(l),l=m.call(w,d)}return l}function fh(l){return l=l[ch],l instanceof sl?l:null}var ph="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kg(l){return typeof l=="function"?l:(l[ph]||(l[ph]=function(d){return l.handleEvent(d)}),l[ph])}function Ze(){ue.call(this),this.i=new sl(this),this.M=this,this.F=null}T(Ze,ue),Ze.prototype[En]=!0,Ze.prototype.removeEventListener=function(l,d,m,w){Wg(this,l,d,m,w)};function pt(l,d){var m,w=l.F;if(w)for(m=[];w;w=w.F)m.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new Re(d,l);else if(d instanceof Re)d.target=d.target||l;else{var V=d;d=new Re(w,l),R(d,V)}if(V=!0,m)for(var M=m.length-1;0<=M;M--){var B=d.g=m[M];V=ol(B,w,!0,d)&&V}if(B=d.g=l,V=ol(B,w,!0,d)&&V,V=ol(B,w,!1,d)&&V,m)for(M=0;M<m.length;M++)B=d.g=m[M],V=ol(B,w,!1,d)&&V}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],w=0;w<m.length;w++)il(m[w]);delete l.g[d],l.h--}}this.F=null},Ze.prototype.K=function(l,d,m,w){return this.i.add(String(l),d,!1,m,w)},Ze.prototype.L=function(l,d,m,w){return this.i.add(String(l),d,!0,m,w)};function ol(l,d,m,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,M=0;M<d.length;++M){var B=d[M];if(B&&!B.da&&B.capture==m){var ce=B.listener,We=B.ha||B.src;B.fa&&lh(l.i,B),V=ce.call(We,w)!==!1&&V}}return V&&!w.defaultPrevented}function qg(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Gg(l){l.g=qg(()=>{l.g=null,l.i&&(l.i=!1,Gg(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class TC extends ue{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Gg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gs(l){ue.call(this),this.h=l,this.g={}}T(Gs,ue);var Qg=[];function Yg(l){L(l.g,function(d,m){this.g.hasOwnProperty(m)&&dh(d)},l),l.g={}}Gs.prototype.N=function(){Gs.aa.N.call(this),Yg(this)},Gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mh=a.JSON.stringify,IC=a.JSON.parse,SC=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function gh(){}gh.prototype.h=null;function Xg(l){return l.h||(l.h=l.i())}function Jg(){}var Qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yh(){Re.call(this,"d")}T(yh,Re);function vh(){Re.call(this,"c")}T(vh,Re);var Gr={},Zg=null;function al(){return Zg=Zg||new Ze}Gr.La="serverreachability";function ey(l){Re.call(this,Gr.La,l)}T(ey,Re);function Ys(l){const d=al();pt(d,new ey(d))}Gr.STAT_EVENT="statevent";function ty(l,d){Re.call(this,Gr.STAT_EVENT,l),this.stat=d}T(ty,Re);function mt(l){const d=al();pt(d,new ty(d,l))}Gr.Ma="timingevent";function ny(l,d){Re.call(this,Gr.Ma,l),this.size=d}T(ny,Re);function Xs(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Js(){this.g=!0}Js.prototype.xa=function(){this.g=!1};function AC(l,d,m,w,V,M){l.info(function(){if(l.g)if(M)for(var B="",ce=M.split("&"),We=0;We<ce.length;We++){var se=ce[We].split("=");if(1<se.length){var et=se[0];se=se[1];var tt=et.split("_");B=2<=tt.length&&tt[1]=="type"?B+(et+"="+se+"&"):B+(et+"=redacted&")}}else B=null;else B=M;return"XMLHTTP REQ ("+w+") [attempt "+V+"]: "+d+`
`+m+`
`+B})}function PC(l,d,m,w,V,M,B){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+V+"]: "+d+`
`+m+`
`+M+" "+B})}function Oi(l,d,m,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+RC(l,m)+(w?" "+w:"")})}function CC(l,d){l.info(function(){return"TIMEOUT: "+d})}Js.prototype.info=function(){};function RC(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var w=m[l];if(!(2>w.length)){var V=w[1];if(Array.isArray(V)&&!(1>V.length)){var M=V[0];if(M!="noop"&&M!="stop"&&M!="close")for(var B=1;B<V.length;B++)V[B]=""}}}}return mh(m)}catch{return d}}var ll={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ry={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_h;function ul(){}T(ul,gh),ul.prototype.g=function(){return new XMLHttpRequest},ul.prototype.i=function(){return{}},_h=new ul;function Xn(l,d,m,w){this.j=l,this.i=d,this.l=m,this.R=w||1,this.U=new Gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new iy}function iy(){this.i=null,this.g="",this.h=!1}var sy={},wh={};function Eh(l,d,m){l.L=1,l.v=fl(Tn(d)),l.m=m,l.P=!0,oy(l,null)}function oy(l,d){l.F=Date.now(),cl(l),l.A=Tn(l.v);var m=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),wy(m.i,"t",w),l.C=0,m=l.j.J,l.h=new iy,l.g=Fy(l.j,m?d:null,!l.m),0<l.O&&(l.M=new TC(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,w=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(Qg[0]=V.toString()),V=Qg);for(var M=0;M<V.length;M++){var B=$g(m,V[M],w||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Ys(),AC(l.i,l.u,l.A,l.l,l.R,l.m)}Xn.prototype.ca=function(l){l=l.target;const d=this.M;d&&In(l)==3?d.j():this.Y(l)},Xn.prototype.Y=function(l){try{if(l==this.g)e:{const tt=In(this.g);var d=this.g.Ba();const Fi=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||Cy(this.g)))){this.J||tt!=4||d==7||(d==8||0>=Fi?Ys(3):Ys(2)),Th(this);var m=this.g.Z();this.X=m;t:if(ay(this)){var w=Cy(this.g);l="";var V=w.length,M=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),Zs(this);var B="";break t}this.h.i=new a.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(M&&d==V-1)});w.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=m==200,PC(this.i,this.u,this.A,this.l,this.R,tt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,We=this.g;if((ce=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ce)){var se=ce;break t}}se=null}if(m=se)Oi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ih(this,m);else{this.o=!1,this.s=3,mt(12),Qr(this),Zs(this);break e}}if(this.P){m=!0;let Kt;for(;!this.J&&this.C<B.length;)if(Kt=xC(this,B),Kt==wh){tt==4&&(this.s=4,mt(14),m=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==sy){this.s=4,mt(15),Oi(this.i,this.l,B,"[Invalid Chunk]"),m=!1;break}else Oi(this.i,this.l,Kt,null),Ih(this,Kt);if(ay(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||B.length!=0||this.h.h||(this.s=1,mt(16),m=!1),this.o=this.o&&m,!m)Oi(this.i,this.l,B,"[Invalid Chunked Response]"),Qr(this),Zs(this);else if(0<B.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),xh(et),et.M=!0,mt(11))}}else Oi(this.i,this.l,B,null),Ih(this,B);tt==4&&Qr(this),this.o&&!this.J&&(tt==4?Vy(this.j,this):(this.o=!1,cl(this)))}else KC(this.g),m==400&&0<B.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Qr(this),Zs(this)}}}catch{}finally{}};function ay(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function xC(l,d){var m=l.C,w=d.indexOf(`
`,m);return w==-1?wh:(m=Number(d.substring(m,w)),isNaN(m)?sy:(w+=1,w+m>d.length?wh:(d=d.slice(w,w+m),l.C=w+m,d)))}Xn.prototype.cancel=function(){this.J=!0,Qr(this)};function cl(l){l.S=Date.now()+l.I,ly(l,l.I)}function ly(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Xs(p(l.ba,l),d)}function Th(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Xn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(CC(this.i,this.A),this.L!=2&&(Ys(),mt(17)),Qr(this),this.s=2,Zs(this)):ly(this,this.S-l)};function Zs(l){l.j.G==0||l.J||Vy(l.j,l)}function Qr(l){Th(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Yg(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Ih(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||Sh(m.h,l))){if(!l.K&&Sh(m.h,l)&&m.G==3){try{var w=m.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var V=w;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)_l(m),yl(m);else break e;Rh(m),mt(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=Xs(p(m.Za,m),6e3));if(1>=hy(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Xr(m,11)}else if((l.K||m.g==l)&&_l(m),!_(d))for(V=m.Da.g.parse(d),d=0;d<V.length;d++){let se=V[d];if(m.T=se[0],se=se[1],m.G==2)if(se[0]=="c"){m.K=se[1],m.ia=se[2];const et=se[3];et!=null&&(m.la=et,m.j.info("VER="+m.la));const tt=se[4];tt!=null&&(m.Aa=tt,m.j.info("SVER="+m.Aa));const Fi=se[5];Fi!=null&&typeof Fi=="number"&&0<Fi&&(w=1.5*Fi,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Kt=l.g;if(Kt){const El=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(El){var M=w.h;M.g||El.indexOf("spdy")==-1&&El.indexOf("quic")==-1&&El.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Ah(M,M.h),M.h=null))}if(w.D){const kh=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;kh&&(w.ya=kh,fe(w.I,w.D,kh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var B=l;if(w.qa=Ly(w,w.J?w.ia:null,w.W),B.K){dy(w.h,B);var ce=B,We=w.L;We&&(ce.I=We),ce.B&&(Th(ce),cl(ce)),w.g=B}else by(w);0<m.i.length&&vl(m)}else se[0]!="stop"&&se[0]!="close"||Xr(m,7);else m.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Xr(m,7):Ch(m):se[0]!="noop"&&m.l&&m.l.ta(se),m.v=0)}}Ys(4)}catch{}}var kC=class{constructor(l,d){this.g=l,this.map=d}};function uy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function hy(l){return l.h?1:l.g?l.g.size:0}function Sh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Ah(l,d){l.g?l.g.add(d):l.h=d}function dy(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}uy.prototype.cancel=function(){if(this.i=fy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function fy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return E(l.i)}function NC(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,w=0;w<m;w++)d.push(l[w]);return d}d=[],m=0;for(w in l)d[m++]=l[w];return d}function bC(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const w in l)d[m++]=w;return d}}}function py(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=bC(l),w=NC(l),V=w.length,M=0;M<V;M++)d.call(void 0,w[M],m&&m[M],l)}var my=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DC(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var w=l[m].indexOf("="),V=null;if(0<=w){var M=l[m].substring(0,w);V=l[m].substring(w+1)}else M=l[m];d(M,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Yr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Yr){this.h=l.h,hl(this,l.j),this.o=l.o,this.g=l.g,dl(this,l.s),this.l=l.l;var d=l.i,m=new no;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),gy(this,m),this.m=l.m}else l&&(d=String(l).match(my))?(this.h=!1,hl(this,d[1]||"",!0),this.o=eo(d[2]||""),this.g=eo(d[3]||"",!0),dl(this,d[4]),this.l=eo(d[5]||"",!0),gy(this,d[6]||"",!0),this.m=eo(d[7]||"")):(this.h=!1,this.i=new no(null,this.h))}Yr.prototype.toString=function(){var l=[],d=this.j;d&&l.push(to(d,yy,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(to(d,yy,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(to(m,m.charAt(0)=="/"?MC:OC,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",to(m,FC)),l.join("")};function Tn(l){return new Yr(l)}function hl(l,d,m){l.j=m?eo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function dl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function gy(l,d,m){d instanceof no?(l.i=d,jC(l.i,l.h)):(m||(d=to(d,LC)),l.i=new no(d,l.h))}function fe(l,d,m){l.i.set(d,m)}function fl(l){return fe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function eo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function to(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,VC),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function VC(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var yy=/[#\/\?@]/g,OC=/[#\?:]/g,MC=/[#\?]/g,LC=/[#\?@]/g,FC=/#/g;function no(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Jn(l){l.g||(l.g=new Map,l.h=0,l.i&&DC(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=no.prototype,t.add=function(l,d){Jn(this),this.i=null,l=Mi(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function vy(l,d){Jn(l),d=Mi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function _y(l,d){return Jn(l),d=Mi(l,d),l.g.has(d)}t.forEach=function(l,d){Jn(this),this.g.forEach(function(m,w){m.forEach(function(V){l.call(d,V,w,this)},this)},this)},t.na=function(){Jn(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let w=0;w<d.length;w++){const V=l[w];for(let M=0;M<V.length;M++)m.push(d[w])}return m},t.V=function(l){Jn(this);let d=[];if(typeof l=="string")_y(this,l)&&(d=d.concat(this.g.get(Mi(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return Jn(this),this.i=null,l=Mi(this,l),_y(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function wy(l,d,m){vy(l,d),0<m.length&&(l.i=null,l.g.set(Mi(l,d),E(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var w=d[m];const M=encodeURIComponent(String(w)),B=this.V(w);for(w=0;w<B.length;w++){var V=M;B[w]!==""&&(V+="="+encodeURIComponent(String(B[w]))),l.push(V)}}return this.i=l.join("&")};function Mi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function jC(l,d){d&&!l.j&&(Jn(l),l.i=null,l.g.forEach(function(m,w){var V=w.toLowerCase();w!=V&&(vy(this,w),wy(this,V,m))},l)),l.j=d}function UC(l,d){const m=new Js;if(a.Image){const w=new Image;w.onload=g(Zn,m,"TestLoadImage: loaded",!0,d,w),w.onerror=g(Zn,m,"TestLoadImage: error",!1,d,w),w.onabort=g(Zn,m,"TestLoadImage: abort",!1,d,w),w.ontimeout=g(Zn,m,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function BC(l,d){const m=new Js,w=new AbortController,V=setTimeout(()=>{w.abort(),Zn(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(M=>{clearTimeout(V),M.ok?Zn(m,"TestPingServer: ok",!0,d):Zn(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),Zn(m,"TestPingServer: error",!1,d)})}function Zn(l,d,m,w,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),w(m)}catch{}}function zC(){this.g=new SC}function $C(l,d,m){const w=m||"";try{py(l,function(V,M){let B=V;c(V)&&(B=mh(V)),d.push(w+M+"="+encodeURIComponent(B))})}catch(V){throw d.push(w+"type="+encodeURIComponent("_badmap")),V}}function pl(l){this.l=l.Ub||null,this.j=l.eb||!1}T(pl,gh),pl.prototype.g=function(){return new ml(this.l,this.j)},pl.prototype.i=function(l){return function(){return l}}({});function ml(l,d){Ze.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ml,Ze),t=ml.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,io(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ey(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ey(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?ro(this):io(this),this.readyState==3&&Ey(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ro(this))},t.Qa=function(l){this.g&&(this.response=l,ro(this))},t.ga=function(){this.g&&ro(this)};function ro(l){l.readyState=4,l.l=null,l.j=null,l.v=null,io(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function io(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Ty(l){let d="";return L(l,function(m,w){d+=w,d+=":",d+=m,d+=`\r
`}),d}function Ph(l,d,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=Ty(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):fe(l,d,m))}function Ae(l){Ze.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ae,Ze);var WC=/^https?$/i,HC=["POST","PUT"];t=Ae.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_h.g(),this.v=this.o?Xg(this.o):Xg(_h),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){Iy(this,M);return}if(l=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var V in w)m.set(V,w[V]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const M of w.keys())m.set(M,w.get(M));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(HC,d,void 0))||w||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,B]of m)this.g.setRequestHeader(M,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Py(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){Iy(this,M)}};function Iy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Sy(l),gl(l)}function Sy(l){l.A||(l.A=!0,pt(l,"complete"),pt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pt(this,"complete"),pt(this,"abort"),gl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gl(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ay(this):this.bb())},t.bb=function(){Ay(this)};function Ay(l){if(l.h&&typeof o<"u"&&(!l.v[1]||In(l)!=4||l.Z()!=2)){if(l.u&&In(l)==4)qg(l.Ea,0,l);else if(pt(l,"readystatechange"),In(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var w;if(w=B===0){var V=String(l.D).match(my)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),w=!WC.test(V?V.toLowerCase():"")}m=w}if(m)pt(l,"complete"),pt(l,"success");else{l.m=6;try{var M=2<In(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Sy(l)}}finally{gl(l)}}}}function gl(l,d){if(l.g){Py(l);const m=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||pt(l,"ready");try{m.onreadystatechange=w}catch{}}}function Py(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function In(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),IC(d)}};function Cy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function KC(l){const d={};l=(l.g&&2<=In(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(_(l[w]))continue;var m=k(l[w]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=d[V]||[];d[V]=M,M.push(m)}P(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function so(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function Ry(l){this.Aa=0,this.i=[],this.j=new Js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=so("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=so("baseRetryDelayMs",5e3,l),this.cb=so("retryDelaySeedMs",1e4,l),this.Wa=so("forwardChannelMaxRetries",2,l),this.wa=so("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new uy(l&&l.concurrentRequestLimit),this.Da=new zC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ry.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,w){mt(0),this.W=l,this.H=d||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=Ly(this,null,this.W),vl(this)};function Ch(l){if(xy(l),l.G==3){var d=l.U++,m=Tn(l.I);if(fe(m,"SID",l.K),fe(m,"RID",d),fe(m,"TYPE","terminate"),oo(l,m),d=new Xn(l,l.j,d),d.L=2,d.v=fl(Tn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Fy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),cl(d)}My(l)}function yl(l){l.g&&(xh(l),l.g.cancel(),l.g=null)}function xy(l){yl(l),l.u&&(a.clearTimeout(l.u),l.u=null),_l(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function vl(l){if(!cy(l.h)&&!l.s){l.s=!0;var d=l.Ga;de||X(),z||(de(),z=!0),G.add(d,l),l.B=0}}function qC(l,d){return hy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Xs(p(l.Ga,l,d),Oy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new Xn(this,this.j,l);let M=this.o;if(this.S&&(M?(M=y(M),R(M,this.S)):M=this.S),this.m!==null||this.O||(V.H=M,M=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Ny(this,V,d),m=Tn(this.I),fe(m,"RID",l),fe(m,"CVER",22),this.D&&fe(m,"X-HTTP-Session-Id",this.D),oo(this,m),M&&(this.O?d="headers="+encodeURIComponent(String(Ty(M)))+"&"+d:this.m&&Ph(m,this.m,M)),Ah(this.h,V),this.Ua&&fe(m,"TYPE","init"),this.P?(fe(m,"$req",d),fe(m,"SID","null"),V.T=!0,Eh(V,m,null)):Eh(V,m,d),this.G=2}}else this.G==3&&(l?ky(this,l):this.i.length==0||cy(this.h)||ky(this))};function ky(l,d){var m;d?m=d.l:m=l.U++;const w=Tn(l.I);fe(w,"SID",l.K),fe(w,"RID",m),fe(w,"AID",l.T),oo(l,w),l.m&&l.o&&Ph(w,l.m,l.o),m=new Xn(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Ny(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ah(l.h,m),Eh(m,w,d)}function oo(l,d){l.H&&L(l.H,function(m,w){fe(d,w,m)}),l.l&&py({},function(m,w){fe(d,w,m)})}function Ny(l,d,m){m=Math.min(l.i.length,m);var w=l.l?p(l.l.Na,l.l,l):null;e:{var V=l.i;let M=-1;for(;;){const B=["count="+m];M==-1?0<m?(M=V[0].g,B.push("ofs="+M)):M=0:B.push("ofs="+M);let ce=!0;for(let We=0;We<m;We++){let se=V[We].g;const et=V[We].map;if(se-=M,0>se)M=Math.max(0,V[We].g-100),ce=!1;else try{$C(et,B,"req"+se+"_")}catch{w&&w(et)}}if(ce){w=B.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,w}function by(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;de||X(),z||(de(),z=!0),G.add(d,l),l.v=0}}function Rh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Xs(p(l.Fa,l),Oy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Dy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Xs(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),yl(this),Dy(this))};function xh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Dy(l){l.g=new Xn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Tn(l.qa);fe(d,"RID","rpc"),fe(d,"SID",l.K),fe(d,"AID",l.T),fe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&fe(d,"TO",l.ja),fe(d,"TYPE","xmlhttp"),oo(l,d),l.m&&l.o&&Ph(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=fl(Tn(d)),m.m=null,m.P=!0,oy(m,l)}t.Za=function(){this.C!=null&&(this.C=null,yl(this),Rh(this),mt(19))};function _l(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Vy(l,d){var m=null;if(l.g==d){_l(l),xh(l),l.g=null;var w=2}else if(Sh(l.h,d))m=d.D,dy(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var V=l.B;w=al(),pt(w,new ny(w,m)),vl(l)}else by(l);else if(V=d.s,V==3||V==0&&0<d.X||!(w==1&&qC(l,d)||w==2&&Rh(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),V){case 1:Xr(l,5);break;case 4:Xr(l,10);break;case 3:Xr(l,6);break;default:Xr(l,2)}}}function Oy(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function Xr(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),w=l.Xa;const V=!w;w=new Yr(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||hl(w,"https"),fl(w),V?UC(w.toString(),m):BC(w.toString(),m)}else mt(2);l.G=0,l.l&&l.l.sa(d),My(l),xy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function My(l){if(l.G=0,l.ka=[],l.l){const d=fy(l.h);(d.length!=0||l.i.length!=0)&&(C(l.ka,d),C(l.ka,l.i),l.h.i.length=0,E(l.i),l.i.length=0),l.l.ra()}}function Ly(l,d,m){var w=m instanceof Yr?Tn(m):new Yr(m);if(w.g!="")d&&(w.g=d+"."+w.g),dl(w,w.s);else{var V=a.location;w=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var M=new Yr(null);w&&hl(M,w),d&&(M.g=d),V&&dl(M,V),m&&(M.l=m),w=M}return m=l.D,d=l.ya,m&&d&&fe(w,m,d),fe(w,"VER",l.la),oo(l,w),w}function Fy(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ae(new pl({eb:m})):new Ae(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jy(){}t=jy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function wl(){}wl.prototype.g=function(l,d){return new Pt(l,d)};function Pt(l,d){Ze.call(this),this.g=new Ry(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!_(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Li(this)}T(Pt,Ze),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Ch(this.g)},Pt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=mh(l),l=m);d.i.push(new kC(d.Ya++,l)),d.G==3&&vl(d)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Ch(this.g),delete this.g,Pt.aa.N.call(this)};function Uy(l){yh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T(Uy,yh);function By(){vh.call(this),this.status=1}T(By,vh);function Li(l){this.g=l}T(Li,jy),Li.prototype.ua=function(){pt(this.g,"a")},Li.prototype.ta=function(l){pt(this.g,new Uy(l))},Li.prototype.sa=function(l){pt(this.g,new By)},Li.prototype.ra=function(){pt(this.g,"b")},wl.prototype.createWebChannel=wl.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,mS=function(){return new wl},pS=function(){return al()},fS=Gr,Of={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ll.NO_ERROR=0,ll.TIMEOUT=8,ll.HTTP_ERROR=6,hu=ll,ry.COMPLETE="complete",dS=ry,Jg.EventType=Qs,Qs.OPEN="a",Qs.CLOSE="b",Qs.ERROR="c",Qs.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,So=Jg,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,hS=Ae}).apply(typeof Ul<"u"?Ul:typeof self<"u"?self:typeof window<"u"?window:{});const L_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ot=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new dm("@firebase/firestore");function go(){return Ii.logLevel}function H(t,...e){if(Ii.logLevel<=ne.DEBUG){const n=e.map(Sm);Ii.debug(`Firestore (${zs}): ${t}`,...n)}}function Wn(t,...e){if(Ii.logLevel<=ne.ERROR){const n=e.map(Sm);Ii.error(`Firestore (${zs}): ${t}`,...n)}}function As(t,...e){if(Ii.logLevel<=ne.WARN){const n=e.map(Sm);Ii.warn(`Firestore (${zs}): ${t}`,...n)}}function Sm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function le(t,e){t||Y()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class EV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TV{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new gS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new ot(e)}}class IV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new IV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new AV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Fe(0,0))}static max(){return new J(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return va.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof va?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends va{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const RV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends va{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return RV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}function xV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new br(i,K.empty(),e)}function kV(t){return new br(t.readTime,t.key,-1)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(J.min(),K.empty(),-1)}static max(){return new br(J.max(),K.empty(),-1)}}function NV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==bV)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function VV(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ka(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Am.oe=-1;function Fc(t){return t==null}function Zu(t){return t===0&&1/t==-1/0}function OV(t){return typeof t=="number"&&Number.isInteger(t)&&!Zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bl(this.root,e,this.comparator,!0)}}class Bl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new j_(this.data.getIterator())}getIteratorFrom(e){return new j_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class j_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _S("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const MV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(le(!!t),typeof t=="string"){let e=0;const n=MV.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Si(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cm(t){const e=t.mapValue.fields.__previous_value__;return Pm(e)?Cm(e):e}function _a(t){const e=Dr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class wa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl={mapValue:{}};function Ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pm(t)?4:jV(t)?9007199254740991:FV(t)?10:11:Y()}function yn(t,e){if(t===e)return!0;const n=Ai(t);if(n!==Ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _a(t).isEqual(_a(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Dr(i.timestampValue),a=Dr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Si(i.bytesValue).isEqual(Si(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),a=ke(s.doubleValue);return o===a?Zu(o)===Zu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(F_(o)!==F_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!yn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function Ea(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=Ai(t),r=Ai(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return U_(t.timestampValue,e.timestampValue);case 4:return U_(_a(t),_a(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Si(s),u=Si(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=oe(a[c],u[c]);if(h!==0)return h}return oe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=oe(ke(s.latitude),ke(o.latitude));return a!==0?a:oe(ke(s.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return B_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=p.value)===null||u===void 0?void 0:u.arrayValue,E=oe(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return E!==0?E:B_(g,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===zl.mapValue&&o===zl.mapValue)return 0;if(s===zl.mapValue)return 1;if(o===zl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=oe(u[f],h[f]);if(p!==0)return p;const g=Cs(a[u[f]],c[h[f]]);if(g!==0)return g}return oe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Y()}}function U_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Dr(t),r=Dr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function B_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Cs(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Rs(t){return Mf(t)}function Mf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Si(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mf(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function z_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lf(t){return!!t&&"integerValue"in t}function Rm(t){return!!t&&"arrayValue"in t}function $_(t){return!!t&&"nullValue"in t}function W_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function du(t){return!!t&&"mapValue"in t}function FV(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jV(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bo(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Bo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];du(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et(Bo(this.value))}}function wS(t){const e=[];return ki(t.fields,(n,r)=>{const i=new Ge([n]);if(du(r)){const s=wS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,J.min(),J.min(),J.min(),Et.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,J.min(),J.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,J.min(),J.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.position=e,this.inclusive=n}}function H_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function K_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n="asc"){this.field=e,this.dir=n}}function UV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{}class Oe extends ES{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zV(e,n,r):n==="array-contains"?new HV(e,r):n==="in"?new KV(e,r):n==="not-in"?new qV(e,r):n==="array-contains-any"?new GV(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $V(e,r):new WV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cs(n,this.value)):n!==null&&Ai(this.value)===Ai(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends ES{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return TS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function TS(t){return t.op==="and"}function IS(t){return BV(t)&&TS(t)}function BV(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Ff(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(IS(t))return t.filters.map(e=>Ff(e)).join(",");{const e=t.filters.map(n=>Ff(n)).join(",");return`${t.op}(${e})`}}function SS(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&yn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&SS(o,i.filters[a]),!0):!1}(t,e):void Y()}function AS(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Rs(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(AS).join(" ,")+"}"}(t):"Filter"}class zV extends Oe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class $V extends Oe{constructor(e,n){super(e,"in",n),this.keys=PS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WV extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=PS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class HV extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rm(n)&&Ea(n.arrayValue,this.value)}}class KV extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ea(this.value.arrayValue,n)}}class qV extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ea(this.value.arrayValue,n)}}class GV extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function q_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new QV(t,e,n,r,i,s,o)}function xm(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ff(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Rs(r)).join(",")),e.ue=n}return e.ue}function km(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!SS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!K_(t.startAt,e.startAt)&&K_(t.endAt,e.endAt)}function jf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function YV(t,e,n,r,i,s,o,a){return new $s(t,e,n,r,i,s,o,a)}function jc(t){return new $s(t)}function G_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CS(t){return t.collectionGroup!==null}function zo(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ta(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new Ta(Ge.keyField(),r))}return e.ce}function fn(t){const e=Z(t);return e.le||(e.le=XV(e,zo(t))),e.le}function XV(t,e){if(t.limitType==="F")return q_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ta(i.field,s)});const n=t.endAt?new ec(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ec(t.startAt.position,t.startAt.inclusive):null;return q_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Uf(t,e){const n=t.filters.concat([e]);return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bf(t,e,n){return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return km(fn(t),fn(e))&&t.limitType===e.limitType}function RS(t){return`${xm(fn(t))}|lt:${t.limitType}`}function Ui(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>AS(i)).join(", ")}]`),Fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Rs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Rs(i)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Bc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=H_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,zo(r),i)||r.endAt&&!function(o,a,u){const c=H_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,zo(r),i))}(t,e)}function JV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xS(t){return(e,n)=>{let r=!1;for(const i of zo(t)){const s=ZV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZV(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Cs(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=new Se(K.comparator);function Hn(){return eO}const kS=new Se(K.comparator);function Ao(...t){let e=kS;for(const n of t)e=e.insert(n.key,n);return e}function NS(t){let e=kS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function li(){return $o()}function bS(){return $o()}function $o(){return new Ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const tO=new Se(K.comparator),nO=new Ye(K.comparator);function te(...t){let e=nO;for(const n of t)e=e.add(n);return e}const rO=new Ye(oe);function iO(){return rO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function DS(t){return{integerValue:""+t}}function sO(t,e){return OV(e)?DS(e):Nm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this._=void 0}}function oO(t,e,n){return t instanceof tc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pm(s)&&(s=Cm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ia?OS(t,e):t instanceof Sa?MS(t,e):function(i,s){const o=VS(i,s),a=Q_(o)+Q_(i.Pe);return Lf(o)&&Lf(i.Pe)?DS(a):Nm(i.serializer,a)}(t,e)}function aO(t,e,n){return t instanceof Ia?OS(t,e):t instanceof Sa?MS(t,e):n}function VS(t,e){return t instanceof nc?function(r){return Lf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class tc extends zc{}class Ia extends zc{constructor(e){super(),this.elements=e}}function OS(t,e){const n=LS(e);for(const r of t.elements)n.some(i=>yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Sa extends zc{constructor(e){super(),this.elements=e}}function MS(t,e){let n=LS(e);for(const r of t.elements)n=n.filter(i=>!yn(i,r));return{arrayValue:{values:n}}}class nc extends zc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Q_(t){return ke(t.integerValue||t.doubleValue)}function LS(t){return Rm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ia&&i instanceof Ia||r instanceof Sa&&i instanceof Sa?Ps(r.elements,i.elements,yn):r instanceof nc&&i instanceof nc?yn(r.Pe,i.Pe):r instanceof tc&&i instanceof tc}(t.transform,e.transform)}class uO{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $c{}function FS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new US(t.key,en.none()):new qa(t.key,t.data,en.none());{const n=t.data,r=Et.empty();let i=new Ye(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hr(t.key,r,new kt(i.toArray()),en.none())}}function cO(t,e,n){t instanceof qa?function(i,s,o){const a=i.value.clone(),u=X_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(i,s,o){if(!fu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=X_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(jS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wo(t,e,n,r){return t instanceof qa?function(s,o,a,u){if(!fu(s.precondition,o))return a;const c=s.value.clone(),h=J_(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(s,o,a,u){if(!fu(s.precondition,o))return a;const c=J_(s.fieldTransforms,u,o),h=o.data;return h.setAll(jS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return fu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function hO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VS(r.transform,i||null);s!=null&&(n===null&&(n=Et.empty()),n.set(r.field,s))}return n||null}function Y_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ps(r,i,(s,o)=>lO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qa extends $c{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends $c{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function X_(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,aO(o,a,n[i]))}return r}function J_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,oO(s,o,e))}return r}class US extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dO extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=FS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,r)=>Y_(n,r))&&Ps(this.baseMutations,e.baseMutations,(n,r)=>Y_(n,r))}}class bm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=function(){return tO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new bm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,re;function gO(t){switch(t){default:return Y();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function BS(t){if(t===void 0)return Wn("GRPC error has no .code"),F.UNKNOWN;switch(t){case De.OK:return F.OK;case De.CANCELLED:return F.CANCELLED;case De.UNKNOWN:return F.UNKNOWN;case De.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case De.INTERNAL:return F.INTERNAL;case De.UNAVAILABLE:return F.UNAVAILABLE;case De.UNAUTHENTICATED:return F.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case De.NOT_FOUND:return F.NOT_FOUND;case De.ALREADY_EXISTS:return F.ALREADY_EXISTS;case De.PERMISSION_DENIED:return F.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case De.ABORTED:return F.ABORTED;case De.OUT_OF_RANGE:return F.OUT_OF_RANGE;case De.UNIMPLEMENTED:return F.UNIMPLEMENTED;case De.DATA_LOSS:return F.DATA_LOSS;default:return Y()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=new fi([4294967295,4294967295],0);function Z_(t){const e=yO().encode(t),n=new cS;return n.update(e),new Uint8Array(n.digest())}function e0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fi([n,r],0),new fi([i,s],0)]}class Dm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Po(`Invalid padding: ${n}`);if(r<0)throw new Po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Po(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=fi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(fi.fromNumber(r)));return i.compare(vO)===1&&(i=new fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Z_(e),[r,i]=e0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Z_(e),[r,i]=e0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wc(J.min(),i,new Se(oe),Hn(),te())}}class Ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ga(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class zS{constructor(e,n){this.targetId=e,this.me=n}}class $S{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class t0{constructor(){this.fe=0,this.ge=r0(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ga(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=r0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _O{constructor(e){this.Le=e,this.Be=new Map,this.ke=Hn(),this.qe=n0(),this.Qe=new Se(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(jf(s))if(r===0){const o=new K(s.path);this.Ue(n,o,lt.newNoDocument(o,J.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Si(r).toUint8Array()}catch(u){if(u instanceof _S)return As("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Dm(o,i,s)}catch(u){return As(u instanceof Po?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&jf(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,lt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Wc(e,n,this.Qe,this.ke,r);return this.ke=Hn(),this.qe=n0(),this.Qe=new Se(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new t0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new t0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function n0(){return new Se(K.comparator)}function r0(){return new Se(K.comparator)}const wO={asc:"ASCENDING",desc:"DESCENDING"},EO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TO={and:"AND",or:"OR"};class IO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zf(t,e){return t.useProto3Json||Fc(e)?e:{value:e}}function rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SO(t,e){return rc(t,e.toTimestamp())}function pn(t){return le(!!t),J.fromTimestamp(function(n){const r=Dr(n);return new Fe(r.seconds,r.nanos)}(t))}function Vm(t,e){return $f(t,e).canonicalString()}function $f(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HS(t){const e=me.fromString(t);return le(YS(e)),e}function Wf(t,e){return Vm(t.databaseId,e.path)}function hd(t,e){const n=HS(e);if(n.get(1)!==t.databaseId.projectId)throw new $(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(qS(n))}function KS(t,e){return Vm(t.databaseId,e)}function AO(t){const e=HS(t);return e.length===4?me.emptyPath():qS(e)}function Hf(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qS(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function i0(t,e,n){return{name:Wf(t,e),fields:n.value.mapValue.fields}}function PO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(le(h===void 0||typeof h=="string"),Je.fromBase64String(h||"")):(le(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Je.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?F.UNKNOWN:BS(c.code);return new $(h,c.message||"")}(o);n=new $S(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hd(t,r.document.name),s=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):J.min(),a=new Et({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new pu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hd(t,r.document),s=r.readTime?pn(r.readTime):J.min(),o=lt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hd(t,r.document),s=r.removedTargetIds||[];n=new pu([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new mO(i,s),a=r.targetId;n=new zS(a,o)}}return n}function CO(t,e){let n;if(e instanceof qa)n={update:i0(t,e.key,e.value)};else if(e instanceof US)n={delete:Wf(t,e.key)};else if(e instanceof Hr)n={update:i0(t,e.key,e.data),updateMask:MO(e.fieldMask)};else{if(!(e instanceof dO))return Y();n={verify:Wf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof tc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:SO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function RO(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?pn(i.updateTime):pn(s);return o.isEqual(J.min())&&(o=pn(s)),new uO(o,i.transformResults||[])}(n,e))):[]}function xO(t,e){return{documents:[KS(t,e.path)]}}function kO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=KS(t,i);const s=function(c){if(c.length!==0)return QS(rn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Bi(p.field),direction:DO(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=zf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function NO(t){let e=AO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=GS(f);return p instanceof rn&&IS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(T){return new Ta(zi(T.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Fc(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,g=f.values||[];return new ec(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new ec(g,p)}(n.endAt)),YV(e,i,o,s,a,"F",u,c)}function bO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zi(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zi(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zi(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zi(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(zi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>GS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function DO(t){return wO[t]}function VO(t){return EO[t]}function OO(t){return TO[t]}function Bi(t){return{fieldPath:t.canonicalString()}}function zi(t){return Ge.fromServerFormat(t.fieldPath)}function QS(t){return t instanceof Oe?function(n){if(n.op==="=="){if(W_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NAN"}};if($_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(W_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NAN"}};if($_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(n.field),op:VO(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>QS(i));return r.length===1?r[0]:{compositeFilter:{op:OO(n.op),filters:r}}}(t):Y()}function MO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.ct=e}}function FO(t){const e=NO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(){this.un=new UO}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(br.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class UO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new xs(0)}static kn(){return new xs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Wo(r.mutation,i,kt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ao();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Hn();const o=$o(),a=function(){return $o()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Hr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Wo(h.mutation,c,h.mutation.getFieldMask(),Fe.now())):o.set(c.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new zO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=$o();let i=new Se((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||kt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||te()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=bS();h.forEach(p=>{if(!s.has(p)){const g=FS(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(li());let a=-1,u=s;return o.next(c=>j.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(h=>({batchId:a,changes:NS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(f,p){return new $s(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,lt.newInvalidDocument(h)))});let a=Ao();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Wo(h.mutation,c,kt.empty(),Fe.now()),Bc(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:FO(i.bundledQuery),readTime:pn(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this.overlays=new Se(K.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=li();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=li(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=li(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=li(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pO(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.Tr=new Ye(Be.Er),this.dr=new Ye(Be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Be(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new me([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new me([])),r=new Be(n,e),i=new Be(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ye(Be.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Be(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(oe);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Be(new K(s),0);let a=new Ye(oe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Be(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.Mr=e,this.docs=function(){return new Se(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Hn();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||NV(kV(h),r)<=0||(i.has(h.key)||Bc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QO(this)}getSize(e){return j.resolve(this.size)}}class QO extends BO{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.persistence=e,this.Nr=new Ws(n=>xm(n),km),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Om,this.targetCount=0,this.kr=xs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Am(0),this.Kr=!1,this.Kr=!0,this.$r=new KO,this.referenceDelegate=e(this),this.Ur=new YO(this),this.indexManager=new jO,this.remoteDocumentCache=function(i){return new GO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new LO(n),this.Gr=new WO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new qO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new JO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class JO extends DV{constructor(e){super(),this.currentSequenceNumber=e}}class Mm{constructor(e){this.persistence=e,this.Jr=new Om,this.Yr=null}static Zr(e){return new Mm(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zk()?8:VV(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ZO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(go()<=ne.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(go()<=ne.DEBUG&&H("QueryEngine","Query:",Ui(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(go()<=ne.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):j.resolve())}Yi(e,n){if(G_(n))return j.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bf(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Bf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return G_(n)||i.isEqual(J.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(go()<=ne.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ui(n)),this.rs(e,o,n,xV(i,-1)).next(a=>a))})}ts(e,n){let r=new Ye(xS(e));return n.forEach((i,s)=>{Bc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return go()<=ne.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ui(n)),this.Ji.getDocumentsMatchingQuery(e,n,br.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Se(oe),this._s=new Ws(s=>xm(s),km),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $O(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function n2(t,e,n,r){return new t2(t,e,n,r)}async function XS(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function r2(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let g=j.resolve();return p.forEach(T=>{g=g.next(()=>h.getEntry(u,T)).next(E=>{const C=c.docVersions.get(T);le(C!==null),E.version.compareTo(C)<0&&(f.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),h.addEntry(E)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function JS(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function i2(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Je.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(E,C,v){return E.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(s,g))});let u=Hn(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(s2(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(J.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function s2(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Hn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function o2(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function a2(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Kf(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ka(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function s0(t,e,n){const r=Z(t);let i=J.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=Z(u),p=f._s.get(h);return p!==void 0?j.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,fn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:te())).next(a=>(l2(r,JV(e),a),{documents:a,Ts:s})))}function l2(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class o0{constructor(){this.activeTargetIds=iO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u2{constructor(){this.so=new o0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new o0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l=null;function dd(){return $l===null?$l=function(){return 268435456+Math.round(2147483648*Math.random())}():$l++,"0x"+$l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class f2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=dd(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw As("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=h2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=dd();return new Promise((o,a)=>{const u=new hS;u.setWithCredentials(!0),u.listenOnce(dS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hu.NO_ERROR:const h=u.getResponseJson();H(it,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case hu.TIMEOUT:H(it,`RPC '${e}' ${s} timed out`),a(new $(F.DEADLINE_EXCEEDED,"Request time out"));break;case hu.HTTP_ERROR:const f=u.getStatus();if(H(it,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const T=function(C){const v=C.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(v)>=0?v:F.UNKNOWN}(g.status);a(new $(T,g.message))}else a(new $(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new $(F.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(it,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(it,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=dd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mS(),a=pS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(it,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let p=!1,g=!1;const T=new d2({Io:C=>{g?H(it,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(H(it,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),H(it,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},To:()=>f.close()}),E=(C,v,_)=>{C.listen(v,I=>{try{_(I)}catch(N){setTimeout(()=>{throw N},0)}})};return E(f,So.EventType.OPEN,()=>{g||(H(it,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),E(f,So.EventType.CLOSE,()=>{g||(g=!0,H(it,`RPC '${e}' stream ${i} transport closed`),T.So())}),E(f,So.EventType.ERROR,C=>{g||(g=!0,As(it,`RPC '${e}' stream ${i} transport errored:`,C),T.So(new $(F.UNAVAILABLE,"The operation could not be completed")))}),E(f,So.EventType.MESSAGE,C=>{var v;if(!g){const _=C.data[0];le(!!_);const I=_,N=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(N){H(it,`RPC '${e}' stream ${i} received error:`,N);const O=N.status;let L=function(S){const R=De[S];if(R!==void 0)return BS(R)}(O),P=N.message;L===void 0&&(L=F.INTERNAL,P="Unknown error status: "+O+" with message "+N.message),g=!0,T.So(new $(L,P)),f.close()}else H(it,`RPC '${e}' stream ${i} received:`,_),T.bo(_)}}),E(a,fS.STAT_EVENT,C=>{C.stat===Of.PROXY?H(it,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Of.NOPROXY&&H(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return new IO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ZS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p2 extends eA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=PO(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?pn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Hf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=jf(u)?{documents:xO(s,u)}:{query:kO(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=WS(s,o.resumeToken);const c=zf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=rc(s,o.snapshotVersion.toTimestamp());const c=zf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=bO(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Hf(this.serializer),n.removeTarget=e,this.a_(n)}}class m2 extends eA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=RO(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Hf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CO(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,$f(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,$f(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class y2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ni(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await Qa(c),c.q_.set("Unknown"),c.L_.delete(4),await Kc(c)}(this))})}),this.q_=new y2(r,i)}}async function Kc(t){if(Ni(t))for(const e of t.B_)await e(!0)}async function Qa(t){for(const e of t.B_)await e(!1)}function tA(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Bm(n)?Um(n):Hs(n).r_()&&jm(n,e))}function Fm(t,e){const n=Z(t),r=Hs(n);n.N_.delete(e),r.r_()&&nA(n,e),n.N_.size===0&&(r.r_()?r.o_():Ni(n)&&n.q_.set("Unknown"))}function jm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hs(t).A_(e)}function nA(t,e){t.Q_.xe(e),Hs(t).R_(e)}function Um(t){t.Q_=new _O({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Hs(t).start(),t.q_.v_()}function Bm(t){return Ni(t)&&!Hs(t).n_()&&t.N_.size>0}function Ni(t){return Z(t).L_.size===0}function rA(t){t.Q_=void 0}async function _2(t){t.q_.set("Online")}async function w2(t){t.N_.forEach((e,n)=>{jm(t,e)})}async function E2(t,e){rA(t),Bm(t)?(t.q_.M_(e),Um(t)):t.q_.set("Unknown")}async function T2(t,e,n){if(t.q_.set("Online"),e instanceof $S&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ic(t,r)}else if(e instanceof pu?t.Q_.Ke(e):e instanceof zS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await JS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Je.EMPTY_BYTE_STRING,h.snapshotVersion)),nA(s,u);const f=new gr(h.target,u,c,h.sequenceNumber);jm(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await ic(t,r)}}async function ic(t,e,n){if(!Ka(e))throw e;t.L_.add(1),await Qa(t),t.q_.set("Offline"),n||(n=()=>JS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Kc(t)})}function iA(t,e){return e().catch(n=>ic(t,n,e))}async function qc(t){const e=Z(t),n=Vr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;I2(e);)try{const i=await o2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,S2(e,i)}catch(i){await ic(e,i)}sA(e)&&oA(e)}function I2(t){return Ni(t)&&t.O_.length<10}function S2(t,e){t.O_.push(e);const n=Vr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function sA(t){return Ni(t)&&!Vr(t).n_()&&t.O_.length>0}function oA(t){Vr(t).start()}async function A2(t){Vr(t).p_()}async function P2(t){const e=Vr(t);for(const n of t.O_)e.m_(n.mutations)}async function C2(t,e,n){const r=t.O_.shift(),i=bm.from(r,e,n);await iA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qc(t)}async function R2(t,e){e&&Vr(t).V_&&await async function(r,i){if(function(o){return gO(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();Vr(r).s_(),await iA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qc(r)}}(t,e),sA(t)&&oA(t)}async function l0(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ni(n);n.L_.add(3),await Qa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Kc(n)}async function x2(t,e){const n=Z(t);e?(n.L_.delete(2),await Kc(n)):e||(n.L_.add(2),await Qa(n),n.q_.set("Unknown"))}function Hs(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new p2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:_2.bind(null,t),Ro:w2.bind(null,t),mo:E2.bind(null,t),d_:T2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Bm(t)?Um(t):t.q_.set("Unknown")):(await t.K_.stop(),rA(t))})),t.K_}function Vr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new m2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:A2.bind(null,t),mo:R2.bind(null,t),f_:P2.bind(null,t),g_:C2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await qc(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new zm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $m(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),Ka(t))return new $(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.W_=new Se(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ks(e,n,gs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class N2{constructor(){this.queries=c0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=c0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new $(F.ABORTED,"Firestore shutting down"))}}function c0(){return new Ws(t=>RS(t),Uc)}async function Wm(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new k2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=$m(o,`Initialization of query '${Ui(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Km(n)}async function Hm(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function b2(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Km(n)}function D2(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Km(t){t.Y_.forEach(e=>{e.next()})}var qf,h0;(h0=qf||(qf={})).ea="default",h0.Cache="cache";class qm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.key=e}}class lA{constructor(e){this.key=e}}class V2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=xS(e),this.Ra=new gs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new u0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=Bc(this.query,f)?f:null,T=!!p&&this.mutatedKeys.has(p.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;p&&g?p.data.isEqual(g.data)?T!==E&&(r.track({type:3,doc:g}),C=!0):this.ga(p,g)||(r.track({type:2,doc:g}),C=!0,(u&&this.Aa(g,u)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),C=!0):p&&!g&&(r.track({type:1,doc:p}),C=!0,(u||c)&&(a=!0)),C&&(g?(o=o.add(g),s=E?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,T){const E=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return E(g)-E(T)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ks(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new u0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new lA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new aA(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ks.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class O2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class M2{constructor(e){this.key=e,this.va=!1}}class L2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ws(a=>RS(a),Uc),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(K.comparator),this.Na=new Map,this.La=new Om,this.Ba={},this.ka=new Map,this.qa=xs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function F2(t,e,n=!0){const r=pA(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await uA(r,e,n,!0),i}async function j2(t,e){const n=pA(t);await uA(n,e,!0,!1)}async function uA(t,e,n,r){const i=await a2(t.localStore,fn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await U2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tA(t.remoteStore,i),a}async function U2(t,e,n,r,i){t.Ka=(f,p,g)=>async function(E,C,v,_){let I=C.view.ma(v);I.ns&&(I=await s0(E.localStore,C.query,!1).then(({documents:P})=>C.view.ma(P,I)));const N=_&&_.targetChanges.get(C.targetId),O=_&&_.targetMismatches.get(C.targetId)!=null,L=C.view.applyChanges(I,E.isPrimaryClient,N,O);return f0(E,C.targetId,L.wa),L.snapshot}(t,f,p,g);const s=await s0(t.localStore,e,!0),o=new V2(e,s.Ts),a=o.ma(s.documents),u=Ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);f0(t,n,c.wa);const h=new O2(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function B2(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Uc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Kf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Fm(r.remoteStore,i.targetId),Gf(r,i.targetId)}).catch(Ha)):(Gf(r,i.targetId),await Kf(r.localStore,i.targetId,!0))}async function z2(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Fm(n.remoteStore,r.targetId))}async function $2(t,e,n){const r=Y2(t);try{const i=await function(o,a){const u=Z(o),c=Fe.now(),h=a.reduce((g,T)=>g.add(T.key),te());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let T=Hn(),E=te();return u.cs.getEntries(g,h).next(C=>{T=C,T.forEach((v,_)=>{_.isValidDocument()||(E=E.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,T)).next(C=>{f=C;const v=[];for(const _ of a){const I=hO(_,f.get(_.key).overlayedDocument);I!=null&&v.push(new Hr(_.key,I,wS(I.value.mapValue),en.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,v,a)}).next(C=>{p=C;const v=C.applyToLocalDocumentSet(f,E);return u.documentOverlayCache.saveOverlays(g,C.batchId,v)})}).then(()=>({batchId:p.batchId,changes:NS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Se(oe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ya(r,i.changes),await qc(r.remoteStore)}catch(i){const s=$m(i,"Failed to persist write");n.reject(s)}}async function cA(t,e){const n=Z(t);try{const r=await i2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?le(o.va):i.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await Ya(n,r,e)}catch(r){await Ha(r)}}function d0(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=Z(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&Km(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function W2(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Se(K.comparator);o=o.insert(s,lt.newNoDocument(s,J.min()));const a=te().add(s),u=new Wc(J.min(),new Map,new Se(oe),o,a);await cA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Gm(r)}else await Kf(r.localStore,e,!1).then(()=>Gf(r,e,n)).catch(Ha)}async function H2(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await r2(n.localStore,e);dA(n,r,null),hA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ya(n,i)}catch(i){await Ha(i)}}async function K2(t,e,n){const r=Z(t);try{const i=await function(o,a){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(le(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);dA(r,e,n),hA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ya(r,i)}catch(i){await Ha(i)}}function hA(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function dA(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Gf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||fA(t,r)})}function fA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Fm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Gm(t))}function f0(t,e,n){for(const r of n)r instanceof aA?(t.La.addReference(r.key,e),q2(t,r)):r instanceof lA?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||fA(t,r.key)):Y()}function q2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Gm(t))}function Gm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(me.fromString(e)),r=t.qa.next();t.Na.set(r,new M2(n)),t.Oa=t.Oa.insert(n,r),tA(t.remoteStore,new gr(fn(jc(n.path)),r,"TargetPurposeLimboResolution",Am.oe))}}async function Ya(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Lm.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=Z(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,p=>j.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>j.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!Ka(f))throw f;H("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),T=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(p,E)}}}(r.localStore,s))}async function G2(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await XS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new $(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ya(n,r.hs)}}function Q2(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function pA(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Q2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W2.bind(null,e),e.Ca.d_=b2.bind(null,e.eventManager),e.Ca.$a=D2.bind(null,e.eventManager),e}function Y2(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=K2.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return n2(this.persistence,new e2,e.initialUser,this.serializer)}Ga(e){return new XO(Mm.Zr,this.serializer)}Wa(e){return new u2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class Qf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>d0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G2.bind(null,this.syncEngine),await x2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new N2}()}createDatastore(e){const n=Hc(e.databaseInfo.databaseId),r=function(s){return new f2(s)}(e.databaseInfo);return function(s,o,a,u){return new g2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new v2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>d0(this.syncEngine,n,0),function(){return a0.D()?new a0:new c2}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new L2(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Qa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Qf.provider={build:()=>new Qf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=yS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$m(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pd(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function p0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await J2(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>l0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>l0(e.remoteStore,i)),t._onlineComponents=e}async function J2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await pd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;As("Error using user provided cache. Falling back to memory cache: "+n),await pd(t,new sc)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await pd(t,new sc);return t._offlineComponents}async function mA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await p0(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await p0(t,new Qf))),t._onlineComponents}function Z2(t){return mA(t).then(e=>e.syncEngine)}async function oc(t){const e=await mA(t),n=e.eventManager;return n.onListen=F2.bind(null,e.syncEngine),n.onUnlisten=B2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=j2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=z2.bind(null,e.syncEngine),n}function eM(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Qm({next:p=>{h.Za(),o.enqueueAndForget(()=>Hm(s,f));const g=p.docs.has(a);!g&&p.fromCache?c.reject(new $(F.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&u&&u.source==="server"?c.reject(new $(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new qm(jc(a.path),h,{includeMetadataChanges:!0,_a:!0});return Wm(s,f)}(await oc(t),t.asyncQueue,e,n,r)),r.promise}function tM(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Qm({next:p=>{h.Za(),o.enqueueAndForget(()=>Hm(s,f)),p.fromCache&&u.source==="server"?c.reject(new $(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new qm(a,h,{includeMetadataChanges:!0,_a:!0});return Wm(s,f)}(await oc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t,e,n){if(!n)throw new $(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nM(t,e,n,r){if(e===!0&&r===!0)throw new $(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function g0(t){if(!K.isDocumentKey(t))throw new $(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function y0(t){if(K.isDocumentKey(t))throw new $(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new $(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new v0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new v0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wV;switch(r.type){case"firstParty":return new SV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=m0.get(n);r&&(H("ComponentProvider","Removing Datastore"),m0.delete(n),r.terminate())}(this),Promise.resolve()}}function rM(t,e,n,r={}){var i;const s=(t=bt(t,Qc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ot.MOCK_USER;else{a=Ok(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ot(c)}t._authCredentials=new EV(new gS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kr(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class xr extends Kr{constructor(e,n,r){super(e,n,jc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new K(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function Nn(t,e,...n){if(t=je(t),yA("collection","path",e),t instanceof Qc){const r=me.fromString(e,...n);return y0(r),new xr(t,null,r)}{if(!(t instanceof ct||t instanceof xr))throw new $(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return y0(r),new xr(t.firestore,null,r)}}function Aa(t,e,...n){if(t=je(t),arguments.length===1&&(e=yS.newId()),yA("doc","path",e),t instanceof Qc){const r=me.fromString(e,...n);return g0(r),new ct(t,null,new K(r))}{if(!(t instanceof ct||t instanceof xr))throw new $(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return g0(r),new ct(t.firestore,t instanceof xr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ZS(this,"async_queue_retry"),this.Vu=()=>{const r=fd();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=fd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Vn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ka(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=zm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function w0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Or extends Qc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new _0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _0(e),this._firestoreClient=void 0,await e}}}function iM(t,e){const n=typeof t=="object"?t:CI(),r=typeof t=="string"?t:"(default)",i=pm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Dk("firestore");s&&rM(i,...s)}return i}function Yc(t){if(t._terminated)throw new $(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||sM(t),t._firestoreClient}function sM(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new LV(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,gA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new X2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ns(Je.fromBase64String(e))}catch(n){throw new $(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ns(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=/^__.*__$/;class aM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new qa(e,this.data,n,this.fieldTransforms)}}class vA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _A(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Zm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Zm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ac(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_A(this.Cu)&&oM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class lM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hc(e)}Qu(e,n,r,i=!1){return new Zm({Cu:e,methodName:n,qu:r,path:Ge.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jc(t){const e=t._freezeSettings(),n=Hc(t._databaseId);return new lM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wA(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);eg("Data must be an object, but it was:",o,r);const a=EA(r,o);let u,c;if(s.merge)u=new kt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Yf(e,f,n);if(!o.contains(p))throw new $(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);IA(h,p)||h.push(p)}u=new kt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new aM(new Et(a),u,c)}class Zc extends Ym{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zc}}function uM(t,e,n,r){const i=t.Qu(1,e,n);eg("Data must be an object, but it was:",i,r);const s=[],o=Et.empty();ki(r,(u,c)=>{const h=tg(e,u,n);c=je(c);const f=i.Nu(h);if(c instanceof Zc)s.push(h);else{const p=Xa(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new kt(s);return new vA(o,a,i.fieldTransforms)}function cM(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Yf(e,r,n)],u=[i];if(s.length%2!=0)throw new $(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Yf(e,s[p])),u.push(s[p+1]);const c=[],h=Et.empty();for(let p=a.length-1;p>=0;--p)if(!IA(c,a[p])){const g=a[p];let T=u[p];T=je(T);const E=o.Nu(g);if(T instanceof Zc)c.push(g);else{const C=Xa(T,E);C!=null&&(c.push(g),h.set(g,C))}}const f=new kt(c);return new vA(h,f,o.fieldTransforms)}function hM(t,e,n,r=!1){return Xa(n,t.Qu(r?4:3,e))}function Xa(t,e){if(TA(t=je(t)))return eg("Unsupported field value:",e,t),EA(t,e);if(t instanceof Ym)return function(r,i){if(!_A(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Xa(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:rc(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rc(i.serializer,s)}}if(r instanceof Xm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ns)return{bytesValue:WS(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Vm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Jm)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Nm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Gc(r)}`)}(t,e)}function EA(t,e){const n={};return vS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Xa(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function TA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Xm||t instanceof Ns||t instanceof ct||t instanceof Ym||t instanceof Jm)}function eg(t,e,n){if(!TA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Yf(t,e,n){if((e=je(e))instanceof Xc)return e._internalPath;if(typeof e=="string")return tg(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const dM=new RegExp("[~\\*/\\[\\]]");function tg(t,e,n){if(e.search(dM)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xc(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(F.INVALID_ARGUMENT,a+t+u)}function IA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fM extends SA{data(){return super.data()}}function eh(t,e){return typeof e=="string"?tg(t,e):e instanceof Xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ng{}class PA extends ng{}function ui(t,e,...n){let r=[];e instanceof ng&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof rg).length,a=s.filter(u=>u instanceof th).length;if(o>1||o>0&&a>0)throw new $(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class th extends PA{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new th(e,n,r)}_apply(e){const n=this._parse(e);return CA(e._query,n),new Kr(e.firestore,e.converter,Uf(e._query,n))}_parse(e){const n=Jc(e.firestore);return function(s,o,a,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){T0(f,h);const g=[];for(const T of f)g.push(E0(u,s,T));p={arrayValue:{values:g}}}else p=E0(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||T0(f,h),p=hM(a,o,f,h==="in"||h==="not-in");return Oe.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function dr(t,e,n){const r=e,i=eh("where",t);return th._create(i,r,n)}class rg extends ng{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)CA(o,u),o=Uf(o,u)}(e._query,n),new Kr(e.firestore,e.converter,Uf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ig extends PA{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ig(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ta(s,o)}(e._query,this._field,this._direction);return new Kr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new $s(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function pM(t,e="asc"){const n=e,r=eh("orderBy",t);return ig._create(r,n)}function E0(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new $(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!CS(e)&&n.indexOf("/")!==-1)throw new $(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!K.isDocumentKey(r))throw new $(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return z_(t,new K(r))}if(n instanceof ct)return z_(t,n._key);throw new $(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(n)}.`)}function T0(t,e){if(!Array.isArray(t)||t.length===0)throw new $(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mM{convertValue(e,n="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ke(o.doubleValue));return new Jm(s)}convertGeoPoint(e){return new Xm(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_a(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);le(YS(r));const i=new wa(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xA extends SA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(eh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mu extends xA{data(e={}){return super.data(e)}}class kA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Co(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mu(this._firestore,this._userDataWriter,r.key,r,new Co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Co(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Co(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:gM(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){t=bt(t,ct);const e=bt(t.firestore,Or);return eM(Yc(e),t._key).then(n=>DA(e,t,n))}class sg extends mM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function og(t){t=bt(t,Kr);const e=bt(t.firestore,Or),n=Yc(e),r=new sg(e);return AA(t._query),tM(n,t._query).then(i=>new kA(e,r,t,i))}function yM(t,e,n){t=bt(t,ct);const r=bt(t.firestore,Or),i=RA(t.converter,e);return ag(r,[wA(Jc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,en.none())])}function vM(t,e,n,...r){t=bt(t,ct);const i=bt(t.firestore,Or),s=Jc(i);let o;return o=typeof(e=je(e))=="string"||e instanceof Xc?cM(s,"updateDoc",t._key,e,n,r):uM(s,"updateDoc",t._key,e),ag(i,[o.toMutation(t._key,en.exists(!0))])}function bA(t,e){const n=bt(t.firestore,Or),r=Aa(t),i=RA(t.converter,e);return ag(n,[wA(Jc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function gu(t,...e){var n,r,i;t=je(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||w0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(w0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof ct)c=bt(t.firestore,Or),h=jc(t._key.path),u={next:f=>{e[o]&&e[o](DA(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=bt(t,Kr);c=bt(f.firestore,Or),h=f._query;const p=new sg(c);u={next:g=>{e[o]&&e[o](new kA(c,p,f,g))},error:e[o+1],complete:e[o+2]},AA(t._query)}return function(p,g,T,E){const C=new Qm(E),v=new qm(g,C,T);return p.asyncQueue.enqueueAndForget(async()=>Wm(await oc(p),v)),()=>{C.Za(),p.asyncQueue.enqueueAndForget(async()=>Hm(await oc(p),v))}}(Yc(c),h,a,u)}function ag(t,e){return function(r,i){const s=new Vn;return r.asyncQueue.enqueueAndForget(async()=>$2(await Z2(r),i,s)),s.promise}(Yc(t),e)}function DA(t,e,n){const r=n.docs.get(e._key),i=new sg(t);return new xA(t,i,e._key,r,new Co(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){zs=i})(Us),Ss(new wi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Or(new TV(r.getProvider("auth-internal")),new PV(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wa(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Rr(L_,"4.7.3",e),Rr(L_,"4.7.3","esm2017")})();const _M={apiKey:"AIzaSyAGzT0ffrSwnJhBRpYxLv6kd5ubL299Vvo",authDomain:"study-group-v2.firebaseapp.com",projectId:"study-group-v2",storageBucket:"study-group-v2.firebasestorage.app",messagingSenderId:"487587122611",appId:"1:487587122611:web:ee4bc7375a203e973f8fc6",measurementId:"G-PB01CK0TFH"},VA=PI(_M),Wl=vV(VA),Rt=iM(VA),OA=b.createContext(),bi=()=>b.useContext(OA),wM=({children:t})=>{const[e,n]=b.useState(null),[r,i]=b.useState(null),[s,o]=b.useState(!0);b.useEffect(()=>oD(Wl,async p=>{if(p){const g=Aa(Rt,"users",p.uid),T=await NA(g);T.exists()&&i(T.data()),n(p)}else n(null),i(null);o(!1)}),[]);const h={currentUser:e,userData:r,signup:async(f,p,g,T="user")=>{const E=await nD(Wl,f,p),C=E.user,v={uid:C.uid,email:f,displayName:g,role:T,createdAt:new Date().toISOString()};return await yM(Aa(Rt,"users",C.uid),v),i(v),E},login:(f,p)=>rD(Wl,f,p),logout:()=>aD(Wl)};return A.jsx(OA.Provider,{value:h,children:!s&&t})},I0=({children:t,requiredRole:e})=>{const{currentUser:n,userData:r}=bi();return n?e&&(r==null?void 0:r.role)!==e?A.jsx(r_,{to:"/",replace:!0}):t:A.jsx(r_,{to:"/login",replace:!0})};/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ue=(t,e)=>{const n=b.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...c},h)=>b.createElement("svg",{ref:h,...EM,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${TM(t)}`,a].join(" "),...c},[...e.map(([f,p])=>b.createElement(f,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=Ue("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=Ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=Ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=Ue("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=Ue("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=Ue("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=Ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=Ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=Ue("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=Ue("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=Ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=Ue("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=Ue("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=Ue("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=Ue("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=Ue("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=Ue("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=Ue("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),MM=()=>{const{currentUser:t,userData:e,logout:n}=bi(),r=zr(),i=async()=>{try{await n(),r("/login")}catch(s){console.error("Logout error:",s)}};return A.jsxs("nav",{className:"navbar",children:[A.jsxs("div",{className:"container nav-container",children:[A.jsx(ar,{to:"/",className:"nav-logo",children:"Wit.me"}),A.jsx("div",{className:"nav-links",children:t?A.jsxs(A.Fragment,{children:[(e==null?void 0:e.role)==="organizer"&&A.jsxs(ar,{to:"/create",className:"nav-link",children:[A.jsx(DM,{size:18}),A.jsx("span",{children:"스터디 생성"})]}),A.jsxs(ar,{to:"/dashboard",className:"nav-link",children:[A.jsx(kM,{size:18}),A.jsx("span",{children:"대시보드"})]}),A.jsxs("div",{className:"nav-user",children:[A.jsx(LA,{size:18}),A.jsx("span",{children:(e==null?void 0:e.displayName)||t.email})]}),A.jsx("button",{onClick:i,className:"nav-link nav-btn-logout",children:A.jsx(NM,{size:18})})]}):A.jsxs(A.Fragment,{children:[A.jsx(ar,{to:"/login",className:"nav-link",children:"로그인"}),A.jsx(ar,{to:"/register",className:"btn btn-primary nav-btn-register",children:"회원가입"})]})})]}),A.jsx("style",{jsx:"true",children:`
        .navbar {
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .nav-link:hover {
          color: var(--accent-primary);
        }
        .nav-user {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--accent-primary);
          font-weight: 600;
        }
        .nav-btn-logout {
          color: #e74c3c;
        }
        .nav-btn-register {
          padding: 0.5rem 1.25rem;
        }
      `})]})},lg=b.createContext({});function ug(t){const e=b.useRef(null);return e.current===null&&(e.current=t()),e.current}const nh=b.createContext(null),cg=b.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class LM extends b.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function FM({children:t,isPresent:e}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=b.useContext(cg);return b.useInsertionEffect(()=>{const{width:o,height:a,top:u,left:c}=i.current;if(e||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const h=document.createElement("style");return s&&(h.nonce=s),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(h)}},[e]),A.jsx(LM,{isPresent:e,childRef:r,sizeRef:i,children:b.cloneElement(t,{ref:r})})}const jM=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=ug(UM),u=b.useId(),c=b.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),h=b.useMemo(()=>({id:u,initial:e,isPresent:n,custom:i,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return b.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),b.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(t=A.jsx(FM,{isPresent:n,children:t})),A.jsx(nh.Provider,{value:h,children:t})};function UM(){return new Map}function jA(t=!0){const e=b.useContext(nh);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,s=b.useId();b.useEffect(()=>{t&&i(s)},[t]);const o=b.useCallback(()=>t&&r&&r(s),[s,r,t]);return!n&&r?[!1,o]:[!0]}const Hl=t=>t.key||"";function C0(t){const e=[];return b.Children.forEach(t,n=>{b.isValidElement(n)&&e.push(n)}),e}const hg=typeof window<"u",UA=hg?b.useLayoutEffect:b.useEffect,BM=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,u]=jA(o),c=b.useMemo(()=>C0(t),[t]),h=o&&!a?[]:c.map(Hl),f=b.useRef(!0),p=b.useRef(c),g=ug(()=>new Map),[T,E]=b.useState(c),[C,v]=b.useState(c);UA(()=>{f.current=!1,p.current=c;for(let N=0;N<C.length;N++){const O=Hl(C[N]);h.includes(O)?g.delete(O):g.get(O)!==!0&&g.set(O,!1)}},[C,h.length,h.join("-")]);const _=[];if(c!==T){let N=[...c];for(let O=0;O<C.length;O++){const L=C[O],P=Hl(L);h.includes(P)||(N.splice(O,0,L),_.push(L))}s==="wait"&&_.length&&(N=_),v(C0(N)),E(c);return}const{forceRender:I}=b.useContext(lg);return A.jsx(A.Fragment,{children:C.map(N=>{const O=Hl(N),L=o&&!a?!1:c===C||h.includes(O),P=()=>{if(g.has(O))g.set(O,!0);else return;let y=!0;g.forEach(S=>{S||(y=!1)}),y&&(I==null||I(),v(p.current),o&&(u==null||u()),r&&r())};return A.jsx(jM,{isPresent:L,initial:!f.current||n?void 0:!1,custom:L?void 0:e,presenceAffectsLayout:i,mode:s,onExitComplete:L?void 0:P,children:N},O)})})},Dt=t=>t;let BA=Dt;function dg(t){let e;return()=>(e===void 0&&(e=t()),e)}const bs=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},On=t=>t*1e3,Mn=t=>t/1e3,zM={useManualTiming:!1};function $M(t){let e=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(u.schedule(c),t()),c(o)}const u={schedule:(c,h=!1,f=!1)=>{const g=f&&r?e:n;return h&&s.add(c),g.has(c)||g.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[e,n]=[n,e],e.forEach(a),e.clear(),r=!1,i&&(i=!1,u.process(c))}};return u}const Kl=["read","resolveKeyframes","update","preRender","render","postRender"],WM=40;function zA(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Kl.reduce((v,_)=>(v[_]=$M(s),v),{}),{read:a,resolveKeyframes:u,update:c,preRender:h,render:f,postRender:p}=o,g=()=>{const v=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(v-i.timestamp,WM),1),i.timestamp=v,i.isProcessing=!0,a.process(i),u.process(i),c.process(i),h.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(g))},T=()=>{n=!0,r=!0,i.isProcessing||t(g)};return{schedule:Kl.reduce((v,_)=>{const I=o[_];return v[_]=(N,O=!1,L=!1)=>(n||T(),I.schedule(N,O,L)),v},{}),cancel:v=>{for(let _=0;_<Kl.length;_++)o[Kl[_]].cancel(v)},state:i,steps:o}}const{schedule:ye,cancel:Mr,state:Ke,steps:md}=zA(typeof requestAnimationFrame<"u"?requestAnimationFrame:Dt,!0),$A=b.createContext({strict:!1}),R0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ds={};for(const t in R0)Ds[t]={isEnabled:e=>R0[t].some(n=>!!e[n])};function HM(t){for(const e in t)Ds[e]={...Ds[e],...t[e]}}const KM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function lc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||KM.has(t)}let WA=t=>!lc(t);function qM(t){t&&(WA=e=>e.startsWith("on")?!lc(e):t(e))}try{qM(require("@emotion/is-prop-valid").default)}catch{}function GM(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(WA(i)||n===!0&&lc(i)||!e&&!lc(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function QM(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}const rh=b.createContext({});function Pa(t){return typeof t=="string"||Array.isArray(t)}function ih(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const fg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],pg=["initial",...fg];function sh(t){return ih(t.animate)||pg.some(e=>Pa(t[e]))}function HA(t){return!!(sh(t)||t.variants)}function YM(t,e){if(sh(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Pa(n)?n:void 0,animate:Pa(r)?r:void 0}}return t.inherit!==!1?e:{}}function XM(t){const{initial:e,animate:n}=YM(t,b.useContext(rh));return b.useMemo(()=>({initial:e,animate:n}),[x0(e),x0(n)])}function x0(t){return Array.isArray(t)?t.join(" "):t}const JM=Symbol.for("motionComponentSymbol");function ns(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function ZM(t,e,n){return b.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):ns(n)&&(n.current=r))},[e])}const mg=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),eL="framerAppearId",KA="data-"+mg(eL),{schedule:gg}=zA(queueMicrotask,!1),qA=b.createContext({});function tL(t,e,n,r,i){var s,o;const{visualElement:a}=b.useContext(rh),u=b.useContext($A),c=b.useContext(nh),h=b.useContext(cg).reducedMotion,f=b.useRef(null);r=r||u.renderer,!f.current&&r&&(f.current=r(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:h}));const p=f.current,g=b.useContext(qA);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&nL(f.current,n,i,g);const T=b.useRef(!1);b.useInsertionEffect(()=>{p&&T.current&&p.update(n,c)});const E=n[KA],C=b.useRef(!!E&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,E))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,E)));return UA(()=>{p&&(T.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),gg.render(p.render),C.current&&p.animationState&&p.animationState.animateChanges())}),b.useEffect(()=>{p&&(!C.current&&p.animationState&&p.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var v;(v=window.MotionHandoffMarkAsComplete)===null||v===void 0||v.call(window,E)}),C.current=!1))}),p}function nL(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:u,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:GA(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&ns(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:u,layoutRoot:c})}function GA(t){if(t)return t.options.allowProjection!==!1?t.projection:GA(t.parent)}function rL({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){var s,o;t&&HM(t);function a(c,h){let f;const p={...b.useContext(cg),...c,layoutId:iL(c)},{isStatic:g}=p,T=XM(c),E=r(c,g);if(!g&&hg){sL();const C=oL(p);f=C.MeasureLayout,T.visualElement=tL(i,E,p,e,C.ProjectionNode)}return A.jsxs(rh.Provider,{value:T,children:[f&&T.visualElement?A.jsx(f,{visualElement:T.visualElement,...p}):null,n(i,c,ZM(E,T.visualElement,h),E,g,T.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const u=b.forwardRef(a);return u[JM]=i,u}function iL({layoutId:t}){const e=b.useContext(lg).id;return e&&t!==void 0?e+"-"+t:t}function sL(t,e){b.useContext($A).strict}function oL(t){const{drag:e,layout:n}=Ds;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const aL=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function yg(t){return typeof t!="string"||t.includes("-")?!1:!!(aL.indexOf(t)>-1||/[A-Z]/u.test(t))}function k0(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function vg(t,e,n,r){if(typeof e=="function"){const[i,s]=k0(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=k0(r);e=e(n!==void 0?n:t.custom,i,s)}return e}const Xf=t=>Array.isArray(t),lL=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),uL=t=>Xf(t)?t[t.length-1]||0:t,ut=t=>!!(t&&t.getVelocity);function yu(t){const e=ut(t)?t.get():t;return lL(e)?e.toValue():e}function cL({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},r,i,s){const o={latestValues:hL(r,i,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const QA=t=>(e,n)=>{const r=b.useContext(rh),i=b.useContext(nh),s=()=>cL(t,e,r,i);return n?s():ug(s)};function hL(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=yu(s[p]);let{initial:o,animate:a}=t;const u=sh(t),c=HA(t);e&&c&&!u&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let h=n?n.initial===!1:!1;h=h||o===!1;const f=h?a:o;if(f&&typeof f!="boolean"&&!ih(f)){const p=Array.isArray(f)?f:[f];for(let g=0;g<p.length;g++){const T=vg(t,p[g]);if(T){const{transitionEnd:E,transition:C,...v}=T;for(const _ in v){let I=v[_];if(Array.isArray(I)){const N=h?I.length-1:0;I=I[N]}I!==null&&(i[_]=I)}for(const _ in E)i[_]=E[_]}}}return i}const Ks=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Di=new Set(Ks),YA=t=>e=>typeof e=="string"&&e.startsWith(t),XA=YA("--"),dL=YA("var(--"),_g=t=>dL(t)?fL.test(t.split("/*")[0].trim()):!1,fL=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,JA=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Kn=(t,e,n)=>n>e?e:n<t?t:n,qs={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ca={...qs,transform:t=>Kn(0,1,t)},ql={...qs,default:1},Ja=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),nr=Ja("deg"),mn=Ja("%"),q=Ja("px"),pL=Ja("vh"),mL=Ja("vw"),N0={...mn,parse:t=>mn.parse(t)/100,transform:t=>mn.transform(t*100)},gL={borderWidth:q,borderTopWidth:q,borderRightWidth:q,borderBottomWidth:q,borderLeftWidth:q,borderRadius:q,radius:q,borderTopLeftRadius:q,borderTopRightRadius:q,borderBottomRightRadius:q,borderBottomLeftRadius:q,width:q,maxWidth:q,height:q,maxHeight:q,top:q,right:q,bottom:q,left:q,padding:q,paddingTop:q,paddingRight:q,paddingBottom:q,paddingLeft:q,margin:q,marginTop:q,marginRight:q,marginBottom:q,marginLeft:q,backgroundPositionX:q,backgroundPositionY:q},yL={rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:ql,scaleX:ql,scaleY:ql,scaleZ:ql,skew:nr,skewX:nr,skewY:nr,distance:q,translateX:q,translateY:q,translateZ:q,x:q,y:q,z:q,perspective:q,transformPerspective:q,opacity:Ca,originX:N0,originY:N0,originZ:q},b0={...qs,transform:Math.round},wg={...gL,...yL,zIndex:b0,size:q,fillOpacity:Ca,strokeOpacity:Ca,numOctaves:b0},vL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_L=Ks.length;function wL(t,e,n){let r="",i=!0;for(let s=0;s<_L;s++){const o=Ks[s],a=t[o];if(a===void 0)continue;let u=!0;if(typeof a=="number"?u=a===(o.startsWith("scale")?1:0):u=parseFloat(a)===0,!u||n){const c=JA(a,wg[o]);if(!u){i=!1;const h=vL[o]||o;r+=`${h}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function Eg(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,a=!1;for(const u in e){const c=e[u];if(Di.has(u)){o=!0;continue}else if(XA(u)){i[u]=c;continue}else{const h=JA(c,wg[u]);u.startsWith("origin")?(a=!0,s[u]=h):r[u]=h}}if(e.transform||(o||n?r.transform=wL(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:u="50%",originY:c="50%",originZ:h=0}=s;r.transformOrigin=`${u} ${c} ${h}`}}const EL={offset:"stroke-dashoffset",array:"stroke-dasharray"},TL={offset:"strokeDashoffset",array:"strokeDasharray"};function IL(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?EL:TL;t[s.offset]=q.transform(-r);const o=q.transform(e),a=q.transform(n);t[s.array]=`${o} ${a}`}function D0(t,e,n){return typeof t=="string"?t:q.transform(e+n*t)}function SL(t,e,n){const r=D0(e,t.x,t.width),i=D0(n,t.y,t.height);return`${r} ${i}`}function Tg(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:u=0,...c},h,f){if(Eg(t,c,f),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:g,dimensions:T}=t;p.transform&&(T&&(g.transform=p.transform),delete p.transform),T&&(i!==void 0||s!==void 0||g.transform)&&(g.transformOrigin=SL(T,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&IL(p,o,a,u,!1)}const Ig=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),ZA=()=>({...Ig(),attrs:{}}),Sg=t=>typeof t=="string"&&t.toLowerCase()==="svg";function eP(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const tP=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function nP(t,e,n,r){eP(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(tP.has(i)?i:mg(i),e.attrs[i])}const uc={};function AL(t){Object.assign(uc,t)}function rP(t,{layout:e,layoutId:n}){return Di.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!uc[t]||t==="opacity")}function Ag(t,e,n){var r;const{style:i}=t,s={};for(const o in i)(ut(i[o])||e.style&&ut(e.style[o])||rP(o,t)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function iP(t,e,n){const r=Ag(t,e,n);for(const i in t)if(ut(t[i])||ut(e[i])){const s=Ks.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}function PL(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const V0=["x","y","width","height","cx","cy","r"],CL={useVisualState:QA({scrapeMotionValuesFromProps:iP,createRenderState:ZA,onUpdate:({props:t,prevProps:e,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in i)if(Di.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<V0.length;a++){const u=V0[a];t[u]!==e[u]&&(o=!0)}o&&ye.read(()=>{PL(n,r),ye.render(()=>{Tg(r,i,Sg(n.tagName),t.transformTemplate),nP(n,r)})})}})},RL={useVisualState:QA({scrapeMotionValuesFromProps:Ag,createRenderState:Ig})};function sP(t,e,n){for(const r in e)!ut(e[r])&&!rP(r,n)&&(t[r]=e[r])}function xL({transformTemplate:t},e){return b.useMemo(()=>{const n=Ig();return Eg(n,e,t),Object.assign({},n.vars,n.style)},[e])}function kL(t,e){const n=t.style||{},r={};return sP(r,n,t),Object.assign(r,xL(t,e)),r}function NL(t,e){const n={},r=kL(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}function bL(t,e,n,r){const i=b.useMemo(()=>{const s=ZA();return Tg(s,e,Sg(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};sP(s,t.style,t),i.style={...s,...i.style}}return i}function DL(t=!1){return(n,r,i,{latestValues:s},o)=>{const u=(yg(n)?bL:NL)(r,s,o,n),c=GM(r,typeof n=="string",t),h=n!==b.Fragment?{...c,...u,ref:i}:{},{children:f}=r,p=b.useMemo(()=>ut(f)?f.get():f,[f]);return b.createElement(n,{...h,children:p})}}function VL(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...yg(r)?CL:RL,preloadedFeatures:t,useRender:DL(i),createVisualElement:e,Component:r};return rL(o)}}function oP(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function oh(t,e,n){const r=t.getProps();return vg(r,e,n!==void 0?n:r.custom,t)}const OL=dg(()=>window.ScrollTimeline!==void 0);class ML{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e,n){const r=this.animations.map(i=>{if(OL()&&i.attachTimeline)return i.attachTimeline(e);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class LL extends ML{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Pg(t,e){return t?t[e]||t.default||t:void 0}const Jf=2e4;function aP(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<Jf;)e+=n,r=t.next(e);return e>=Jf?1/0:e}function Cg(t){return typeof t=="function"}function O0(t,e){t.timeline=e,t.onfinish=null}const Rg=t=>Array.isArray(t)&&typeof t[0]=="number",FL={linearEasing:void 0};function jL(t,e){const n=dg(t);return()=>{var r;return(r=FL[e])!==null&&r!==void 0?r:n()}}const cc=jL(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),lP=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let s=0;s<i;s++)r+=t(bs(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function uP(t){return!!(typeof t=="function"&&cc()||!t||typeof t=="string"&&(t in Zf||cc())||Rg(t)||Array.isArray(t)&&t.every(uP))}const Ro=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,Zf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ro([0,.65,.55,1]),circOut:Ro([.55,0,1,.45]),backIn:Ro([.31,.01,.66,-.59]),backOut:Ro([.33,1.53,.69,.99])};function cP(t,e){if(t)return typeof t=="function"&&cc()?lP(t,e):Rg(t)?Ro(t):Array.isArray(t)?t.map(n=>cP(n,e)||Zf.easeOut):Zf[t]}const Gt={x:!1,y:!1};function hP(){return Gt.x||Gt.y}function UL(t,e,n){var r;if(t instanceof Element)return[t];if(typeof t=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function dP(t,e){const n=UL(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function M0(t){return e=>{e.pointerType==="touch"||hP()||t(e)}}function BL(t,e,n={}){const[r,i,s]=dP(t,n),o=M0(a=>{const{target:u}=a,c=e(a);if(typeof c!="function"||!u)return;const h=M0(f=>{c(f),u.removeEventListener("pointerleave",h)});u.addEventListener("pointerleave",h,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const fP=(t,e)=>e?t===e?!0:fP(t,e.parentElement):!1,xg=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,zL=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function $L(t){return zL.has(t.tagName)||t.tabIndex!==-1}const xo=new WeakSet;function L0(t){return e=>{e.key==="Enter"&&t(e)}}function gd(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const WL=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=L0(()=>{if(xo.has(n))return;gd(n,"down");const i=L0(()=>{gd(n,"up")}),s=()=>gd(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function F0(t){return xg(t)&&!hP()}function HL(t,e,n={}){const[r,i,s]=dP(t,n),o=a=>{const u=a.currentTarget;if(!F0(a)||xo.has(u))return;xo.add(u);const c=e(a),h=(g,T)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!F0(g)||!xo.has(u))&&(xo.delete(u),typeof c=="function"&&c(g,{success:T}))},f=g=>{h(g,n.useGlobalTarget||fP(u,g.target))},p=g=>{h(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{!$L(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",c=>WL(c,i),i)}),s}function KL(t){return t==="x"||t==="y"?Gt[t]?null:(Gt[t]=!0,()=>{Gt[t]=!1}):Gt.x||Gt.y?null:(Gt.x=Gt.y=!0,()=>{Gt.x=Gt.y=!1})}const pP=new Set(["width","height","top","left","right","bottom",...Ks]);let vu;function qL(){vu=void 0}const gn={now:()=>(vu===void 0&&gn.set(Ke.isProcessing||zM.useManualTiming?Ke.timestamp:performance.now()),vu),set:t=>{vu=t,queueMicrotask(qL)}};function kg(t,e){t.indexOf(e)===-1&&t.push(e)}function Ng(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class bg{constructor(){this.subscriptions=[]}add(e){return kg(this.subscriptions,e),()=>Ng(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function mP(t,e){return e?t*(1e3/e):0}const j0=30,GL=t=>!isNaN(parseFloat(t));class QL{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=gn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=gn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=GL(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new bg);const r=this.events[e].add(n);return e==="change"?()=>{r(),ye.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=gn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>j0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,j0);return mP(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ra(t,e){return new QL(t,e)}function YL(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ra(n))}function XL(t,e){const n=oh(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=uL(s[o]);YL(t,o,a)}}function JL(t){return!!(ut(t)&&t.add)}function ep(t,e){const n=t.getValue("willChange");if(JL(n))return n.add(e)}function gP(t){return t.props[KA]}const yP=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,ZL=1e-7,eF=12;function tF(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=yP(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>ZL&&++a<eF);return o}function Za(t,e,n,r){if(t===e&&n===r)return Dt;const i=s=>tF(s,0,1,t,n);return s=>s===0||s===1?s:yP(i(s),e,r)}const vP=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,_P=t=>e=>1-t(1-e),wP=Za(.33,1.53,.69,.99),Dg=_P(wP),EP=vP(Dg),TP=t=>(t*=2)<1?.5*Dg(t):.5*(2-Math.pow(2,-10*(t-1))),Vg=t=>1-Math.sin(Math.acos(t)),IP=_P(Vg),SP=vP(Vg),AP=t=>/^0[^.\s]+$/u.test(t);function nF(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||AP(t):!0}const Ho=t=>Math.round(t*1e5)/1e5,Og=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rF(t){return t==null}const iF=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mg=(t,e)=>n=>!!(typeof n=="string"&&iF.test(n)&&n.startsWith(t)||e&&!rF(n)&&Object.prototype.hasOwnProperty.call(n,e)),PP=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(Og);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},sF=t=>Kn(0,255,t),yd={...qs,transform:t=>Math.round(sF(t))},ci={test:Mg("rgb","red"),parse:PP("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+yd.transform(t)+", "+yd.transform(e)+", "+yd.transform(n)+", "+Ho(Ca.transform(r))+")"};function oF(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const tp={test:Mg("#"),parse:oF,transform:ci.transform},rs={test:Mg("hsl","hue"),parse:PP("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+mn.transform(Ho(e))+", "+mn.transform(Ho(n))+", "+Ho(Ca.transform(r))+")"},st={test:t=>ci.test(t)||tp.test(t)||rs.test(t),parse:t=>ci.test(t)?ci.parse(t):rs.test(t)?rs.parse(t):tp.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ci.transform(t):rs.transform(t)},aF=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lF(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Og))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(aF))===null||n===void 0?void 0:n.length)||0)>0}const CP="number",RP="color",uF="var",cF="var(",U0="${}",hF=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xa(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(hF,u=>(st.test(u)?(r.color.push(s),i.push(RP),n.push(st.parse(u))):u.startsWith(cF)?(r.var.push(s),i.push(uF),n.push(u)):(r.number.push(s),i.push(CP),n.push(parseFloat(u))),++s,U0)).split(U0);return{values:n,split:a,indexes:r,types:i}}function xP(t){return xa(t).values}function kP(t){const{split:e,types:n}=xa(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const a=n[o];a===CP?s+=Ho(i[o]):a===RP?s+=st.transform(i[o]):s+=i[o]}return s}}const dF=t=>typeof t=="number"?0:t;function fF(t){const e=xP(t);return kP(t)(e.map(dF))}const Lr={test:lF,parse:xP,createTransformer:kP,getAnimatableNone:fF},pF=new Set(["brightness","contrast","saturate","opacity"]);function mF(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Og)||[];if(!r)return t;const i=n.replace(r,"");let s=pF.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const gF=/\b([a-z-]*)\(.*?\)/gu,np={...Lr,getAnimatableNone:t=>{const e=t.match(gF);return e?e.map(mF).join(" "):t}},yF={...wg,color:st,backgroundColor:st,outlineColor:st,fill:st,stroke:st,borderColor:st,borderTopColor:st,borderRightColor:st,borderBottomColor:st,borderLeftColor:st,filter:np,WebkitFilter:np},Lg=t=>yF[t];function NP(t,e){let n=Lg(t);return n!==np&&(n=Lr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const vF=new Set(["auto","none","0"]);function _F(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!vF.has(s)&&xa(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=NP(n,i)}const B0=t=>t===qs||t===q,z0=(t,e)=>parseFloat(t.split(", ")[e]),$0=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return z0(i[1],e);{const s=r.match(/^matrix\((.+)\)$/u);return s?z0(s[1],t):0}},wF=new Set(["x","y","z"]),EF=Ks.filter(t=>!wF.has(t));function TF(t){const e=[];return EF.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Vs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:$0(4,13),y:$0(5,14)};Vs.translateX=Vs.x;Vs.translateY=Vs.y;const pi=new Set;let rp=!1,ip=!1;function bP(){if(ip){const t=Array.from(pi).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=TF(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ip=!1,rp=!1,pi.forEach(t=>t.complete()),pi.clear()}function DP(){pi.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ip=!0)})}function IF(){DP(),bP()}class Fg{constructor(e,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(pi.add(this),rp||(rp=!0,ye.read(DP),ye.resolveKeyframes(bP))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(r&&n){const u=r.readValue(n,a);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=a),i&&o===void 0&&i.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),pi.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,pi.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const VP=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),SF=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function AF(t){const e=SF.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function OP(t,e,n=1){const[r,i]=AF(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return VP(o)?parseFloat(o):o}return _g(i)?OP(i,e,n+1):i}const MP=t=>e=>e.test(t),PF={test:t=>t==="auto",parse:t=>t},LP=[qs,q,mn,nr,mL,pL,PF],W0=t=>LP.find(MP(t));class FP extends Fg{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let c=e[u];if(typeof c=="string"&&(c=c.trim(),_g(c))){const h=OP(c,n.current);h!==void 0&&(e[u]=h),u===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!pP.has(r)||e.length!==2)return;const[i,s]=e,o=W0(i),a=W0(s);if(o!==a)if(B0(o)&&B0(a))for(let u=0;u<e.length;u++){const c=e[u];typeof c=="string"&&(e[u]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)nF(e[i])&&r.push(i);r.length&&_F(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vs[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var e;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Vs[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([u,c])=>{n.getValue(u).set(c)}),this.resolveNoneKeyframes()}}const H0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Lr.test(t)||t==="0")&&!t.startsWith("url("));function CF(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function RF(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=H0(i,e),a=H0(s,e);return!o||!a?!1:CF(t)||(n==="spring"||Cg(n))&&r}const xF=t=>t!==null;function ah(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(xF),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const kF=40;class jP{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=gn.now(),this.options={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>kF?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&IF(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=gn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:u,isGenerator:c}=this.options;if(!c&&!RF(e,r,i,s))if(o)this.options.duration=0;else{u&&u(ah(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const h=this.initPlayback(e,n);h!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...h},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Ee=(t,e,n)=>t+(e-t)*n;function vd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function NF({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,u=2*n-a;i=vd(u,a,t+1/3),s=vd(u,a,t),o=vd(u,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function hc(t,e){return n=>n>0?e:t}const _d=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},bF=[tp,ci,rs],DF=t=>bF.find(e=>e.test(t));function K0(t){const e=DF(t);if(!e)return!1;let n=e.parse(t);return e===rs&&(n=NF(n)),n}const q0=(t,e)=>{const n=K0(t),r=K0(e);if(!n||!r)return hc(t,e);const i={...n};return s=>(i.red=_d(n.red,r.red,s),i.green=_d(n.green,r.green,s),i.blue=_d(n.blue,r.blue,s),i.alpha=Ee(n.alpha,r.alpha,s),ci.transform(i))},VF=(t,e)=>n=>e(t(n)),el=(...t)=>t.reduce(VF),sp=new Set(["none","hidden"]);function OF(t,e){return sp.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function MF(t,e){return n=>Ee(t,e,n)}function jg(t){return typeof t=="number"?MF:typeof t=="string"?_g(t)?hc:st.test(t)?q0:jF:Array.isArray(t)?UP:typeof t=="object"?st.test(t)?q0:LF:hc}function UP(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>jg(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function LF(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=jg(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function FF(t,e){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][i[o]],u=(n=t.values[a])!==null&&n!==void 0?n:0;r[s]=u,i[o]++}return r}const jF=(t,e)=>{const n=Lr.createTransformer(e),r=xa(t),i=xa(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?sp.has(t)&&!i.values.length||sp.has(e)&&!r.values.length?OF(t,e):el(UP(FF(r,i),i.values),n):hc(t,e)};function BP(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Ee(t,e,n):jg(t)(t,e)}const UF=5;function zP(t,e,n){const r=Math.max(e-UF,0);return mP(n-t(r),e-r)}const Pe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},wd=.001;function BF({duration:t=Pe.duration,bounce:e=Pe.bounce,velocity:n=Pe.velocity,mass:r=Pe.mass}){let i,s,o=1-e;o=Kn(Pe.minDamping,Pe.maxDamping,o),t=Kn(Pe.minDuration,Pe.maxDuration,Mn(t)),o<1?(i=c=>{const h=c*o,f=h*t,p=h-n,g=op(c,o),T=Math.exp(-f);return wd-p/g*T},s=c=>{const f=c*o*t,p=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*t,T=Math.exp(-f),E=op(Math.pow(c,2),o);return(-i(c)+wd>0?-1:1)*((p-g)*T)/E}):(i=c=>{const h=Math.exp(-c*t),f=(c-n)*t+1;return-wd+h*f},s=c=>{const h=Math.exp(-c*t),f=(n-c)*(t*t);return h*f});const a=5/t,u=$F(i,s,a);if(t=On(t),isNaN(u))return{stiffness:Pe.stiffness,damping:Pe.damping,duration:t};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const zF=12;function $F(t,e,n){let r=n;for(let i=1;i<zF;i++)r=r-t(r)/e(r);return r}function op(t,e){return t*Math.sqrt(1-e*e)}const WF=["duration","bounce"],HF=["stiffness","damping","mass"];function G0(t,e){return e.some(n=>t[n]!==void 0)}function KF(t){let e={velocity:Pe.velocity,stiffness:Pe.stiffness,damping:Pe.damping,mass:Pe.mass,isResolvedFromDuration:!1,...t};if(!G0(t,HF)&&G0(t,WF))if(t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Kn(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:Pe.mass,stiffness:i,damping:s}}else{const n=BF(t);e={...e,...n,mass:Pe.mass},e.isResolvedFromDuration=!0}return e}function $P(t=Pe.visualDuration,e=Pe.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:u,damping:c,mass:h,duration:f,velocity:p,isResolvedFromDuration:g}=KF({...n,velocity:-Mn(n.velocity||0)}),T=p||0,E=c/(2*Math.sqrt(u*h)),C=o-s,v=Mn(Math.sqrt(u/h)),_=Math.abs(C)<5;r||(r=_?Pe.restSpeed.granular:Pe.restSpeed.default),i||(i=_?Pe.restDelta.granular:Pe.restDelta.default);let I;if(E<1){const O=op(v,E);I=L=>{const P=Math.exp(-E*v*L);return o-P*((T+E*v*C)/O*Math.sin(O*L)+C*Math.cos(O*L))}}else if(E===1)I=O=>o-Math.exp(-v*O)*(C+(T+v*C)*O);else{const O=v*Math.sqrt(E*E-1);I=L=>{const P=Math.exp(-E*v*L),y=Math.min(O*L,300);return o-P*((T+E*v*C)*Math.sinh(y)+O*C*Math.cosh(y))/O}}const N={calculatedDuration:g&&f||null,next:O=>{const L=I(O);if(g)a.done=O>=f;else{let P=0;E<1&&(P=O===0?On(T):zP(I,O,L));const y=Math.abs(P)<=r,S=Math.abs(o-L)<=i;a.done=y&&S}return a.value=a.done?o:L,a},toString:()=>{const O=Math.min(aP(N),Jf),L=lP(P=>N.next(O*P).value,O,30);return O+"ms "+L}};return N}function Q0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:u,restDelta:c=.5,restSpeed:h}){const f=t[0],p={done:!1,value:f},g=y=>a!==void 0&&y<a||u!==void 0&&y>u,T=y=>a===void 0?u:u===void 0||Math.abs(a-y)<Math.abs(u-y)?a:u;let E=n*e;const C=f+E,v=o===void 0?C:o(C);v!==C&&(E=v-f);const _=y=>-E*Math.exp(-y/r),I=y=>v+_(y),N=y=>{const S=_(y),R=I(y);p.done=Math.abs(S)<=c,p.value=p.done?v:R};let O,L;const P=y=>{g(p.value)&&(O=y,L=$P({keyframes:[p.value,T(p.value)],velocity:zP(I,y,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:h}))};return P(0),{calculatedDuration:null,next:y=>{let S=!1;return!L&&O===void 0&&(S=!0,N(y),P(y)),O!==void 0&&y>=O?L.next(y-O):(!S&&N(y),p)}}}const qF=Za(.42,0,1,1),GF=Za(0,0,.58,1),WP=Za(.42,0,.58,1),QF=t=>Array.isArray(t)&&typeof t[0]!="number",YF={linear:Dt,easeIn:qF,easeInOut:WP,easeOut:GF,circIn:Vg,circInOut:SP,circOut:IP,backIn:Dg,backInOut:EP,backOut:wP,anticipate:TP},Y0=t=>{if(Rg(t)){BA(t.length===4);const[e,n,r,i]=t;return Za(e,n,r,i)}else if(typeof t=="string")return YF[t];return t};function XF(t,e,n){const r=[],i=n||BP,s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const u=Array.isArray(e)?e[o]||Dt:e;a=el(u,a)}r.push(a)}return r}function JF(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(BA(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=XF(e,r,i),u=a.length,c=h=>{if(o&&h<t[0])return e[0];let f=0;if(u>1)for(;f<t.length-2&&!(h<t[f+1]);f++);const p=bs(t[f],t[f+1],h);return a[f](p)};return n?h=>c(Kn(t[0],t[s-1],h)):c}function ZF(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=bs(0,e,r);t.push(Ee(n,1,i))}}function ej(t){const e=[0];return ZF(e,t.length-1),e}function tj(t,e){return t.map(n=>n*e)}function nj(t,e){return t.map(()=>e||WP).splice(0,t.length-1)}function dc({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=QF(r)?r.map(Y0):Y0(r),s={done:!1,value:e[0]},o=tj(n&&n.length===e.length?n:ej(e),t),a=JF(o,e,{ease:Array.isArray(i)?i:nj(e,i)});return{calculatedDuration:t,next:u=>(s.value=a(u),s.done=u>=t,s)}}const rj=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ye.update(e,!0),stop:()=>Mr(e),now:()=>Ke.isProcessing?Ke.timestamp:gn.now()}},ij={decay:Q0,inertia:Q0,tween:dc,keyframes:dc,spring:$P},sj=t=>t/100;class Ug extends jP{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:u}=this.options;u&&u()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Fg,a=(u,c)=>this.onKeyframesResolved(u,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=Cg(n)?n:ij[n]||dc;let u,c;a!==dc&&typeof e[0]!="number"&&(u=el(sj,BP(e[0],e[1])),e=[0,100]);const h=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),h.calculatedDuration===null&&(h.calculatedDuration=aP(h));const{calculatedDuration:f}=h,p=f+i,g=p*(r+1)-i;return{generator:h,mirroredGenerator:c,mapPercentToKeyframes:u,calculatedDuration:f,resolvedDuration:p,totalDuration:g}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:r}=this;if(!r){const{keyframes:y}=this.options;return{done:!0,value:y[y.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:u,calculatedDuration:c,totalDuration:h,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:g,repeatType:T,repeatDelay:E,onUpdate:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-h/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const v=this.currentTime-p*(this.speed>=0?1:-1),_=this.speed>=0?v<0:v>h;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let I=this.currentTime,N=s;if(g){const y=Math.min(this.currentTime,h)/f;let S=Math.floor(y),R=y%1;!R&&y>=1&&(R=1),R===1&&S--,S=Math.min(S,g+1),!!(S%2)&&(T==="reverse"?(R=1-R,E&&(R-=E/f)):T==="mirror"&&(N=o)),I=Kn(0,1,R)*f}const O=_?{done:!1,value:u[0]}:N.next(I);a&&(O.value=a(O.value));let{done:L}=O;!_&&c!==null&&(L=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return P&&i!==void 0&&(O.value=ah(u,this.options,i)),C&&C(O.value),P&&this.finish(),O}get duration(){const{resolved:e}=this;return e?Mn(e.calculatedDuration):0}get time(){return Mn(this.currentTime)}set time(e){e=On(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Mn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=rj,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const oj=new Set(["opacity","clipPath","filter","transform"]);function aj(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:u}={}){const c={[e]:n};u&&(c.offset=u);const h=cP(a,i);return Array.isArray(h)&&(c.easing=h),t.animate(c,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const lj=dg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),fc=10,uj=2e4;function cj(t){return Cg(t.type)||t.type==="spring"||!uP(t.ease)}function hj(t,e){const n=new Ug({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:t[0]};const i=[];let s=0;for(;!r.done&&s<uj;)r=n.sample(s),i.push(r.value),s+=fc;return{times:void 0,keyframes:i,duration:s-fc,ease:"linear"}}const HP={anticipate:TP,backInOut:EP,circInOut:SP};function dj(t){return t in HP}class X0 extends jP{constructor(e){super(e);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new FP(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:u,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&cc()&&dj(s)&&(s=HP[s]),cj(this.options)){const{onComplete:f,onUpdate:p,motionValue:g,element:T,...E}=this.options,C=hj(e,E);e=C.keyframes,e.length===1&&(e[1]=e[0]),r=C.duration,i=C.times,s=C.ease,o="keyframes"}const h=aj(a.owner.current,u,e,{...this.options,duration:r,times:i,ease:s});return h.startTime=c??this.calcStartTime(),this.pendingTimeline?(O0(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:f}=this.options;a.set(ah(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:r,times:i,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Mn(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Mn(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=On(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Dt;const{animation:r}=n;O0(r,e)}return Dt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:h,onComplete:f,element:p,...g}=this.options,T=new Ug({...g,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),E=On(this.time);c.setWithVelocity(T.sample(E-fc).value,T.sample(E).value,fc)}const{onStop:u}=this.options;u&&u(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:c}=n.owner.getProps();return lj()&&r&&oj.has(r)&&!u&&!c&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const fj={type:"spring",stiffness:500,damping:25,restSpeed:10},pj=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),mj={type:"keyframes",duration:.8},gj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yj=(t,{keyframes:e})=>e.length>2?mj:Di.has(t)?t.startsWith("scale")?pj(e[1]):fj:gj;function vj({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:u,elapsed:c,...h}){return!!Object.keys(h).length}const Bg=(t,e,n,r={},i,s)=>o=>{const a=Pg(r,t)||{},u=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-On(u);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:p=>{e.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:i};vj(a)||(h={...h,...yj(t,h)}),h.duration&&(h.duration=On(h.duration)),h.repeatDelay&&(h.repeatDelay=On(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let f=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const p=ah(h.keyframes,a);if(p!==void 0)return ye.update(()=>{h.onUpdate(p),h.onComplete()}),new LL([])}return!s&&X0.supports(h)?new X0(h):new Ug(h)};function _j({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function KP(t,e,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...u}=e;r&&(o=r);const c=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const f in u){const p=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),g=u[f];if(g===void 0||h&&_j(h,f))continue;const T={delay:n,...Pg(o||{},f)};let E=!1;if(window.MotionHandoffAnimation){const v=gP(t);if(v){const _=window.MotionHandoffAnimation(v,f,ye);_!==null&&(T.startTime=_,E=!0)}}ep(t,f),p.start(Bg(f,p,g,t.shouldReduceMotion&&pP.has(f)?{type:!1}:T,t,E));const C=p.animation;C&&c.push(C)}return a&&Promise.all(c).then(()=>{ye.update(()=>{a&&XL(t,a)})}),c}function ap(t,e,n={}){var r;const i=oh(t,e,n.type==="exit"?(r=t.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(KP(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:h=0,staggerChildren:f,staggerDirection:p}=s;return wj(t,e,h+c,f,p,n)}:()=>Promise.resolve(),{when:u}=s;if(u){const[c,h]=u==="beforeChildren"?[o,a]:[a,o];return c().then(()=>h())}else return Promise.all([o(),a(n.delay)])}function wj(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,u=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(Ej).forEach((c,h)=>{c.notify("AnimationStart",e),o.push(ap(c,e,{...s,delay:n+u(h)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function Ej(t,e){return t.sortNodePosition(e)}function Tj(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>ap(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=ap(t,e,n);else{const i=typeof e=="function"?oh(t,e,n.custom):e;r=Promise.all(KP(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const Ij=pg.length;function qP(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?qP(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Ij;n++){const r=pg[n],i=t.props[r];(Pa(i)||i===!1)&&(e[r]=i)}return e}const Sj=[...fg].reverse(),Aj=fg.length;function Pj(t){return e=>Promise.all(e.map(({animation:n,options:r})=>Tj(t,n,r)))}function Cj(t){let e=Pj(t),n=J0(),r=!0;const i=u=>(c,h)=>{var f;const p=oh(t,h,u==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:g,transitionEnd:T,...E}=p;c={...c,...E,...T}}return c};function s(u){e=u(t)}function o(u){const{props:c}=t,h=qP(t.parent)||{},f=[],p=new Set;let g={},T=1/0;for(let C=0;C<Aj;C++){const v=Sj[C],_=n[v],I=c[v]!==void 0?c[v]:h[v],N=Pa(I),O=v===u?_.isActive:null;O===!1&&(T=C);let L=I===h[v]&&I!==c[v]&&N;if(L&&r&&t.manuallyAnimateOnMount&&(L=!1),_.protectedKeys={...g},!_.isActive&&O===null||!I&&!_.prevProp||ih(I)||typeof I=="boolean")continue;const P=Rj(_.prevProp,I);let y=P||v===u&&_.isActive&&!L&&N||C>T&&N,S=!1;const R=Array.isArray(I)?I:[I];let k=R.reduce(i(v),{});O===!1&&(k={});const{prevResolvedValues:D={}}=_,x={...D,...k},ft=de=>{y=!0,p.has(de)&&(S=!0,p.delete(de)),_.needsAnimating[de]=!0;const z=t.getValue(de);z&&(z.liveStyle=!1)};for(const de in x){const z=k[de],G=D[de];if(g.hasOwnProperty(de))continue;let X=!1;Xf(z)&&Xf(G)?X=!oP(z,G):X=z!==G,X?z!=null?ft(de):p.add(de):z!==void 0&&p.has(de)?ft(de):_.protectedKeys[de]=!0}_.prevProp=I,_.prevResolvedValues=k,_.isActive&&(g={...g,...k}),r&&t.blockInitialAnimation&&(y=!1),y&&(!(L&&P)||S)&&f.push(...R.map(de=>({animation:de,options:{type:v}})))}if(p.size){const C={};p.forEach(v=>{const _=t.getBaseTarget(v),I=t.getValue(v);I&&(I.liveStyle=!0),C[v]=_??null}),f.push({animation:C})}let E=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(f):Promise.resolve()}function a(u,c){var h;if(n[u].isActive===c)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(u,c)}),n[u].isActive=c;const f=o(u);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=J0(),r=!0}}}function Rj(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!oP(e,t):!1}function Jr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function J0(){return{animate:Jr(!0),whileInView:Jr(),whileHover:Jr(),whileTap:Jr(),whileDrag:Jr(),whileFocus:Jr(),exit:Jr()}}class qr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class xj extends qr{constructor(e){super(e),e.animationState||(e.animationState=Cj(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ih(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let kj=0;class Nj extends qr{constructor(){super(...arguments),this.id=kj++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const bj={animation:{Feature:xj},exit:{Feature:Nj}};function ka(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function tl(t){return{point:{x:t.pageX,y:t.pageY}}}const Dj=t=>e=>xg(e)&&t(e,tl(e));function Ko(t,e,n,r){return ka(t,e,Dj(n),r)}const Z0=(t,e)=>Math.abs(t-e);function Vj(t,e){const n=Z0(t.x,e.x),r=Z0(t.y,e.y);return Math.sqrt(n**2+r**2)}class GP{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Td(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=Vj(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:T}=f,{timestamp:E}=Ke;this.history.push({...T,timestamp:E});const{onStart:C,onMove:v}=this.handlers;p||(C&&C(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Ed(p,this.transformPagePoint),ye.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:T,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Td(f.type==="pointercancel"?this.lastMoveEventInfo:Ed(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,C),T&&T(f,C)},!xg(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=tl(e),a=Ed(o,this.transformPagePoint),{point:u}=a,{timestamp:c}=Ke;this.history=[{...u,timestamp:c}];const{onSessionStart:h}=n;h&&h(e,Td(a,this.history)),this.removeListeners=el(Ko(this.contextWindow,"pointermove",this.handlePointerMove),Ko(this.contextWindow,"pointerup",this.handlePointerUp),Ko(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Mr(this.updatePoint)}}function Ed(t,e){return e?{point:e(t.point)}:t}function ew(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Td({point:t},e){return{point:t,delta:ew(t,QP(e)),offset:ew(t,Oj(e)),velocity:Mj(e,.1)}}function Oj(t){return t[0]}function QP(t){return t[t.length-1]}function Mj(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=QP(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>On(e)));)n--;if(!r)return{x:0,y:0};const s=Mn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const YP=1e-4,Lj=1-YP,Fj=1+YP,XP=.01,jj=0-XP,Uj=0+XP;function Ot(t){return t.max-t.min}function Bj(t,e,n){return Math.abs(t-e)<=n}function tw(t,e,n,r=.5){t.origin=r,t.originPoint=Ee(e.min,e.max,t.origin),t.scale=Ot(n)/Ot(e),t.translate=Ee(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Lj&&t.scale<=Fj||isNaN(t.scale))&&(t.scale=1),(t.translate>=jj&&t.translate<=Uj||isNaN(t.translate))&&(t.translate=0)}function qo(t,e,n,r){tw(t.x,e.x,n.x,r?r.originX:void 0),tw(t.y,e.y,n.y,r?r.originY:void 0)}function nw(t,e,n){t.min=n.min+e.min,t.max=t.min+Ot(e)}function zj(t,e,n){nw(t.x,e.x,n.x),nw(t.y,e.y,n.y)}function rw(t,e,n){t.min=e.min-n.min,t.max=t.min+Ot(e)}function Go(t,e,n){rw(t.x,e.x,n.x),rw(t.y,e.y,n.y)}function $j(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Ee(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Ee(n,t,r.max):Math.min(t,n)),t}function iw(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Wj(t,{top:e,left:n,bottom:r,right:i}){return{x:iw(t.x,n,i),y:iw(t.y,e,r)}}function sw(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function Hj(t,e){return{x:sw(t.x,e.x),y:sw(t.y,e.y)}}function Kj(t,e){let n=.5;const r=Ot(t),i=Ot(e);return i>r?n=bs(e.min,e.max-r,t.min):r>i&&(n=bs(t.min,t.max-i,e.min)),Kn(0,1,n)}function qj(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const lp=.35;function Gj(t=lp){return t===!1?t=0:t===!0&&(t=lp),{x:ow(t,"left","right"),y:ow(t,"top","bottom")}}function ow(t,e,n){return{min:aw(t,e),max:aw(t,n)}}function aw(t,e){return typeof t=="number"?t:t[e]||0}const lw=()=>({translate:0,scale:1,origin:0,originPoint:0}),is=()=>({x:lw(),y:lw()}),uw=()=>({min:0,max:0}),xe=()=>({x:uw(),y:uw()});function jt(t){return[t("x"),t("y")]}function JP({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function Qj({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Yj(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Id(t){return t===void 0||t===1}function up({scale:t,scaleX:e,scaleY:n}){return!Id(t)||!Id(e)||!Id(n)}function ri(t){return up(t)||ZP(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function ZP(t){return cw(t.x)||cw(t.y)}function cw(t){return t&&t!=="0%"}function pc(t,e,n){const r=t-n,i=e*r;return n+i}function hw(t,e,n,r,i){return i!==void 0&&(t=pc(t,i,r)),pc(t,n,r)+e}function cp(t,e=0,n=1,r,i){t.min=hw(t.min,e,n,r,i),t.max=hw(t.max,e,n,r,i)}function eC(t,{x:e,y:n}){cp(t.x,e.translate,e.scale,e.originPoint),cp(t.y,n.translate,n.scale,n.originPoint)}const dw=.999999999999,fw=1.0000000000001;function Xj(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&os(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,eC(t,o)),r&&ri(s.latestValues)&&os(t,s.latestValues))}e.x<fw&&e.x>dw&&(e.x=1),e.y<fw&&e.y>dw&&(e.y=1)}function ss(t,e){t.min=t.min+e,t.max=t.max+e}function pw(t,e,n,r,i=.5){const s=Ee(t.min,t.max,i);cp(t,e,n,s,r)}function os(t,e){pw(t.x,e.x,e.scaleX,e.scale,e.originX),pw(t.y,e.y,e.scaleY,e.scale,e.originY)}function tC(t,e){return JP(Yj(t.getBoundingClientRect(),e))}function Jj(t,e,n){const r=tC(t,n),{scroll:i}=e;return i&&(ss(r.x,i.offset.x),ss(r.y,i.offset.y)),r}const nC=({current:t})=>t?t.ownerDocument.defaultView:null,Zj=new WeakMap;class eU{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=xe(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(tl(h).point)},s=(h,f)=>{const{drag:p,dragPropagation:g,onDragStart:T}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=KL(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jt(C=>{let v=this.getAxisMotionValue(C).get()||0;if(mn.test(v)){const{projection:_}=this.visualElement;if(_&&_.layout){const I=_.layout.layoutBox[C];I&&(v=Ot(I)*(parseFloat(v)/100))}}this.originPoint[C]=v}),T&&ye.postRender(()=>T(h,f)),ep(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},o=(h,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:T,onDrag:E}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:C}=f;if(g&&this.currentDirection===null){this.currentDirection=tU(C),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",f.point,C),this.updateAxis("y",f.point,C),this.visualElement.render(),E&&E(h,f)},a=(h,f)=>this.stop(h,f),u=()=>jt(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new GP(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:nC(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&ye.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!Gl(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=$j(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&ns(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Wj(i.layoutBox,n):this.constraints=!1,this.elastic=Gj(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&jt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=qj(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ns(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=Jj(r,i.root,this.visualElement.getTransformPagePoint());let o=Hj(i.layout.layoutBox,s);if(n){const a=n(Qj(o));this.hasMutatedConstraints=!!a,a&&(o=JP(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),u=this.constraints||{},c=jt(h=>{if(!Gl(h,n,this.currentDirection))return;let f=u&&u[h]||{};o&&(f={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,T={type:"inertia",velocity:r?e[h]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(h,T)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return ep(this.visualElement,e),r.start(Bg(e,r,0,n,this.visualElement,!1))}stopAnimation(){jt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){jt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){jt(n=>{const{drag:r}=this.getProps();if(!Gl(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Ee(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ns(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};jt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const u=a.get();i[o]=Kj({min:u,max:u},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),jt(o=>{if(!Gl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];a.set(Ee(u,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;Zj.set(this.visualElement,this);const e=this.visualElement.current,n=Ko(e,"pointerdown",u=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();ns(u)&&u.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ye.read(r);const o=ka(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(jt(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=u[h].translate,f.set(f.get()+u[h].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=lp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Gl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function tU(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class nU extends qr{constructor(e){super(e),this.removeGroupControls=Dt,this.removeListeners=Dt,this.controls=new eU(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Dt}unmount(){this.removeGroupControls(),this.removeListeners()}}const mw=t=>(e,n)=>{t&&ye.postRender(()=>t(e,n))};class rU extends qr{constructor(){super(...arguments),this.removePointerDownListener=Dt}onPointerDown(e){this.session=new GP(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nC(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:mw(e),onStart:mw(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ye.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Ko(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const _u={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function gw(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const yo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(q.test(t))t=parseFloat(t);else return t;const n=gw(t,e.target.x),r=gw(t,e.target.y);return`${n}% ${r}%`}},iU={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Lr.parse(t);if(i.length>5)return r;const s=Lr.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,u=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=u;const c=Ee(a,u,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class sU extends b.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;AL(oU),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),_u.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ye.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),gg.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function rC(t){const[e,n]=jA(),r=b.useContext(lg);return A.jsx(sU,{...t,layoutGroup:r,switchLayoutGroup:b.useContext(qA),isPresent:e,safeToRemove:n})}const oU={borderRadius:{...yo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yo,borderTopRightRadius:yo,borderBottomLeftRadius:yo,borderBottomRightRadius:yo,boxShadow:iU};function aU(t,e,n){const r=ut(t)?t:Ra(t);return r.start(Bg("",r,e,n)),r.animation}function lU(t){return t instanceof SVGElement&&t.tagName!=="svg"}const uU=(t,e)=>t.depth-e.depth;class cU{constructor(){this.children=[],this.isDirty=!1}add(e){kg(this.children,e),this.isDirty=!0}remove(e){Ng(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(uU),this.isDirty=!1,this.children.forEach(e)}}function hU(t,e){const n=gn.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Mr(r),t(s-e))};return ye.read(r,!0),()=>Mr(r)}const iC=["TopLeft","TopRight","BottomLeft","BottomRight"],dU=iC.length,yw=t=>typeof t=="string"?parseFloat(t):t,vw=t=>typeof t=="number"||q.test(t);function fU(t,e,n,r,i,s){i?(t.opacity=Ee(0,n.opacity!==void 0?n.opacity:1,pU(r)),t.opacityExit=Ee(e.opacity!==void 0?e.opacity:1,0,mU(r))):s&&(t.opacity=Ee(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<dU;o++){const a=`border${iC[o]}Radius`;let u=_w(e,a),c=_w(n,a);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||vw(u)===vw(c)?(t[a]=Math.max(Ee(yw(u),yw(c),r),0),(mn.test(c)||mn.test(u))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Ee(e.rotate||0,n.rotate||0,r))}function _w(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const pU=sC(0,.5,IP),mU=sC(.5,.95,Dt);function sC(t,e,n){return r=>r<t?0:r>e?1:n(bs(t,e,r))}function ww(t,e){t.min=e.min,t.max=e.max}function Ft(t,e){ww(t.x,e.x),ww(t.y,e.y)}function Ew(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Tw(t,e,n,r,i){return t-=e,t=pc(t,1/n,r),i!==void 0&&(t=pc(t,1/i,r)),t}function gU(t,e=0,n=1,r=.5,i,s=t,o=t){if(mn.test(e)&&(e=parseFloat(e),e=Ee(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Ee(s.min,s.max,r);t===s&&(a-=e),t.min=Tw(t.min,e,n,a,i),t.max=Tw(t.max,e,n,a,i)}function Iw(t,e,[n,r,i],s,o){gU(t,e[n],e[r],e[i],e.scale,s,o)}const yU=["x","scaleX","originX"],vU=["y","scaleY","originY"];function Sw(t,e,n,r){Iw(t.x,e,yU,n?n.x:void 0,r?r.x:void 0),Iw(t.y,e,vU,n?n.y:void 0,r?r.y:void 0)}function Aw(t){return t.translate===0&&t.scale===1}function oC(t){return Aw(t.x)&&Aw(t.y)}function Pw(t,e){return t.min===e.min&&t.max===e.max}function _U(t,e){return Pw(t.x,e.x)&&Pw(t.y,e.y)}function Cw(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function aC(t,e){return Cw(t.x,e.x)&&Cw(t.y,e.y)}function Rw(t){return Ot(t.x)/Ot(t.y)}function xw(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class wU{constructor(){this.members=[]}add(e){kg(this.members,e),e.scheduleRender()}remove(e){if(Ng(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function EU(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:h,rotateX:f,rotateY:p,skewX:g,skewY:T}=n;c&&(r=`perspective(${c}px) ${r}`),h&&(r+=`rotate(${h}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),g&&(r+=`skewX(${g}deg) `),T&&(r+=`skewY(${T}deg) `)}const a=t.x.scale*e.x,u=t.y.scale*e.y;return(a!==1||u!==1)&&(r+=`scale(${a}, ${u})`),r||"none"}const ii={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ko=typeof window<"u"&&window.MotionDebug!==void 0,Sd=["","X","Y","Z"],TU={visibility:"hidden"},kw=1e3;let IU=0;function Ad(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function lC(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=gP(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ye,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&lC(r)}function uC({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=IU++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ko&&(ii.totalNodes=ii.resolvedTargetDeltas=ii.recalculatedProjection=0),this.nodes.forEach(PU),this.nodes.forEach(NU),this.nodes.forEach(bU),this.nodes.forEach(CU),ko&&window.MotionDebug.record(ii)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new cU)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new bg),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const u=this.eventHandlers.get(o);u&&u.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=lU(o),this.instance=o;const{layoutId:u,layout:c,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||u)&&(this.isLayoutDirty=!0),t){let f;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=hU(p,250),_u.hasAnimatedSinceResize&&(_u.hasAnimatedSinceResize=!1,this.nodes.forEach(bw))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||h.getDefaultTransition()||LU,{onLayoutAnimationStart:C,onLayoutAnimationComplete:v}=h.getProps(),_=!this.targetLayout||!aC(this.targetLayout,T)||g,I=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||I||p&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,I);const N={...Pg(E,"layout"),onPlay:C,onComplete:v};(h.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N)}else p||bw(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Mr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(DU),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lC(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const f=this.path[h];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:u}=this.options;if(a===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Nw);return}this.isUpdating||this.nodes.forEach(xU),this.isUpdating=!1,this.nodes.forEach(kU),this.nodes.forEach(SU),this.nodes.forEach(AU),this.clearAllSnapshots();const a=gn.now();Ke.delta=Kn(0,1e3/60,a-Ke.timestamp),Ke.timestamp=a,Ke.isProcessing=!0,md.update.process(Ke),md.preRender.process(Ke),md.render.process(Ke),Ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,gg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(RU),this.sharedNodes.forEach(VU)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ye.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ye.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=xe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const u=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:u,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:u}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!oC(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;o&&(a||ri(this.latestValues)||h)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let u=this.removeElementScroll(a);return o&&(u=this.removeTransform(u)),FU(u),{animationId:this.root.animationId,measuredBox:a,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return xe();const u=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(jU))){const{scroll:h}=this.root;h&&(ss(u.x,h.offset.x),ss(u.y,h.offset.y))}return u}removeElementScroll(o){var a;const u=xe();if(Ft(u,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return u;for(let c=0;c<this.path.length;c++){const h=this.path[c],{scroll:f,options:p}=h;h!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Ft(u,o),ss(u.x,f.offset.x),ss(u.y,f.offset.y))}return u}applyTransform(o,a=!1){const u=xe();Ft(u,o);for(let c=0;c<this.path.length;c++){const h=this.path[c];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&os(u,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),ri(h.latestValues)&&os(u,h.latestValues)}return ri(this.latestValues)&&os(u,this.latestValues),u}removeTransform(o){const a=xe();Ft(a,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!ri(c.latestValues))continue;up(c.latestValues)&&c.updateSnapshot();const h=xe(),f=c.measurePageBox();Ft(h,f),Sw(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return ri(this.latestValues)&&Sw(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==u;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Ke.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xe(),this.relativeTargetOrigin=xe(),Go(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=xe(),this.targetWithTransforms=xe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),zj(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ft(this.target,this.layout.layoutBox),eC(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xe(),this.relativeTargetOrigin=xe(),Go(this.relativeTargetOrigin,this.target,g.target),Ft(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ko&&ii.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||up(this.parent.latestValues)||ZP(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),u=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ke.timestamp&&(c=!1),c)return;const{layout:h,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||f))return;Ft(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;Xj(this.layoutCorrected,this.treeScale,this.path,u),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=xe());const{target:T}=a;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ew(this.prevProjectionDelta.x,this.projectionDelta.x),Ew(this.prevProjectionDelta.y,this.projectionDelta.y)),qo(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==g||!xw(this.projectionDelta.x,this.prevProjectionDelta.x)||!xw(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T)),ko&&ii.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=is(),this.projectionDelta=is(),this.projectionDeltaWithTransform=is()}setAnimationOrigin(o,a=!1){const u=this.snapshot,c=u?u.latestValues:{},h={...this.latestValues},f=is();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=xe(),g=u?u.source:void 0,T=this.layout?this.layout.source:void 0,E=g!==T,C=this.getStack(),v=!C||C.members.length<=1,_=!!(E&&!v&&this.options.crossfade===!0&&!this.path.some(MU));this.animationProgress=0;let I;this.mixTargetDelta=N=>{const O=N/1e3;Dw(f.x,o.x,O),Dw(f.y,o.y,O),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Go(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),OU(this.relativeTarget,this.relativeTargetOrigin,p,O),I&&_U(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=xe()),Ft(I,this.relativeTarget)),E&&(this.animationValues=h,fU(h,c,this.latestValues,O,_,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Mr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ye.update(()=>{_u.hasAnimatedSinceResize=!0,this.currentAnimation=aU(0,kw,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(kw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:u,layout:c,latestValues:h}=o;if(!(!a||!u||!c)){if(this!==o&&this.layout&&c&&cC(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||xe();const f=Ot(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const p=Ot(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+p}Ft(a,u),os(a,h),qo(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new wU),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:u}=o;if((u.z||u.rotate||u.rotateX||u.rotateY||u.rotateZ||u.skewX||u.skewY)&&(a=!0),!a)return;const c={};u.z&&Ad("z",o,c,this.animationValues);for(let h=0;h<Sd.length;h++)Ad(`rotate${Sd[h]}`,o,c,this.animationValues),Ad(`skew${Sd[h]}`,o,c,this.animationValues);o.render();for(const h in c)o.setStaticValue(h,c[h]),this.animationValues&&(this.animationValues[h]=c[h]);o.scheduleRender()}getProjectionStyles(o){var a,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return TU;const c={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=yu(o==null?void 0:o.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=yu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!ri(this.latestValues)&&(E.transform=h?h({},""):"none",this.hasProjected=!1),E}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=EU(this.projectionDeltaWithTransform,this.treeScale,p),h&&(c.transform=h(p,c.transform));const{x:g,y:T}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${T.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const E in uc){if(p[E]===void 0)continue;const{correct:C,applyTo:v}=uc[E],_=c.transform==="none"?p[E]:C(p[E],f);if(v){const I=v.length;for(let N=0;N<I;N++)c[v[N]]=_}else c[E]=_}return this.options.layoutId&&(c.pointerEvents=f===this?yu(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Nw),this.root.sharedNodes.clear()}}}function SU(t){t.updateLayout()}function AU(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?jt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=Ot(p);p.min=r[f].min,p.max=p.min+g}):cC(s,n.layoutBox,r)&&jt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=Ot(r[f]);p.max=p.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+g)});const a=is();qo(a,r,n.layoutBox);const u=is();o?qo(u,t.applyTransform(i,!0),n.measuredBox):qo(u,r,n.layoutBox);const c=!oC(a);let h=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const T=xe();Go(T,n.layoutBox,p.layoutBox);const E=xe();Go(E,r,g.layoutBox),aC(T,E)||(h=!0),f.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=T,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:u,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function PU(t){ko&&ii.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function CU(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function RU(t){t.clearSnapshot()}function Nw(t){t.clearMeasurements()}function xU(t){t.isLayoutDirty=!1}function kU(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function bw(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function NU(t){t.resolveTargetDelta()}function bU(t){t.calcProjection()}function DU(t){t.resetSkewAndRotation()}function VU(t){t.removeLeadSnapshot()}function Dw(t,e,n){t.translate=Ee(e.translate,0,n),t.scale=Ee(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Vw(t,e,n,r){t.min=Ee(e.min,n.min,r),t.max=Ee(e.max,n.max,r)}function OU(t,e,n,r){Vw(t.x,e.x,n.x,r),Vw(t.y,e.y,n.y,r)}function MU(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const LU={duration:.45,ease:[.4,0,.1,1]},Ow=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Mw=Ow("applewebkit/")&&!Ow("chrome/")?Math.round:Dt;function Lw(t){t.min=Mw(t.min),t.max=Mw(t.max)}function FU(t){Lw(t.x),Lw(t.y)}function cC(t,e,n){return t==="position"||t==="preserve-aspect"&&!Bj(Rw(e),Rw(n),.2)}function jU(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const UU=uC({attachResizeListener:(t,e)=>ka(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Pd={current:void 0},hC=uC({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Pd.current){const t=new UU({});t.mount(window),t.setOptions({layoutScroll:!0}),Pd.current=t}return Pd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),BU={pan:{Feature:rU},drag:{Feature:nU,ProjectionNode:hC,MeasureLayout:rC}};function Fw(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&ye.postRender(()=>s(e,tl(e)))}class zU extends qr{mount(){const{current:e}=this.node;e&&(this.unmount=BL(e,n=>(Fw(this.node,n,"Start"),r=>Fw(this.node,r,"End"))))}unmount(){}}class $U extends qr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=el(ka(this.node.current,"focus",()=>this.onFocus()),ka(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function jw(t,e,n){const{props:r}=t;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&ye.postRender(()=>s(e,tl(e)))}class WU extends qr{mount(){const{current:e}=this.node;e&&(this.unmount=HL(e,n=>(jw(this.node,n,"Start"),(r,{success:i})=>jw(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const hp=new WeakMap,Cd=new WeakMap,HU=t=>{const e=hp.get(t.target);e&&e(t)},KU=t=>{t.forEach(HU)};function qU({root:t,...e}){const n=t||document;Cd.has(n)||Cd.set(n,{});const r=Cd.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(KU,{root:t,...e})),r[i]}function GU(t,e,n){const r=qU(e);return hp.set(t,n),r.observe(t),()=>{hp.delete(t),r.unobserve(t)}}const QU={some:0,all:1};class YU extends qr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:QU[i]},a=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=c?h:f;p&&p(u)};return GU(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(XU(e,n))&&this.startObserver()}unmount(){}}function XU({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const JU={inView:{Feature:YU},tap:{Feature:WU},focus:{Feature:$U},hover:{Feature:zU}},ZU={layout:{ProjectionNode:hC,MeasureLayout:rC}},dp={current:null},dC={current:!1};function e4(){if(dC.current=!0,!!hg)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>dp.current=t.matches;t.addListener(e),e()}else dp.current=!1}const t4=[...LP,st,Lr],n4=t=>t4.find(MP(t)),Uw=new WeakMap;function r4(t,e,n){for(const r in e){const i=e[r],s=n[r];if(ut(i))t.addValue(r,i);else if(ut(s))t.addValue(r,Ra(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,Ra(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const Bw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class i4{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Fg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=gn.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,ye.render(this.render,!1,!0))};const{latestValues:u,renderState:c,onUpdate:h}=o;this.onUpdate=h,this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=sh(n),this.isVariantNode=HA(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in p){const T=p[g];u[g]!==void 0&&ut(T)&&T.set(u[g],!1)}}mount(e){this.current=e,Uw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),dC.current||e4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:dp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Uw.delete(this.current),this.projection&&this.projection.unmount(),Mr(this.notifyUpdate),Mr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Di.has(e),i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ye.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ds){const n=Ds[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):xe()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Bw.length;r++){const i=Bw[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=r4(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Ra(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){var r;let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(VP(i)||AP(i))?i=parseFloat(i):!n4(i)&&Lr.test(n)&&(i=NP(e,n)),this.setBaseTarget(e,ut(i)?i.get():i)),ut(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=vg(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[e])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!ut(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new bg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class fC extends i4{constructor(){super(...arguments),this.KeyframeResolver=FP}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ut(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function s4(t){return window.getComputedStyle(t)}class o4 extends fC{constructor(){super(...arguments),this.type="html",this.renderInstance=eP}readValueFromInstance(e,n){if(Di.has(n)){const r=Lg(n);return r&&r.default||0}else{const r=s4(e),i=(XA(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return tC(e,n)}build(e,n,r){Eg(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return Ag(e,n,r)}}class a4 extends fC{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=xe}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Di.has(n)){const r=Lg(n);return r&&r.default||0}return n=tP.has(n)?n:mg(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return iP(e,n,r)}build(e,n,r){Tg(e,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,r,i){nP(e,n,r,i)}mount(e){this.isSVGTag=Sg(e.tagName),super.mount(e)}}const l4=(t,e)=>yg(t)?new a4(e):new o4(e,{allowProjection:t!==b.Fragment}),u4=VL({...bj,...JU,...BU,...ZU},l4),Ln=QM(u4),c4=()=>{const[t,e]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{const i=ui(Nn(Rt,"studyGroups"),pM("createdAt","desc"));return gu(i,o=>{const a=o.docs.map(u=>({id:u.id,...u.data()}));e(a),r(!1)})},[]),n?A.jsx("div",{className:"loading-state",children:"스터디를 불러오는 중..."}):A.jsxs("div",{className:"home-page",children:[A.jsx("header",{className:"hero",children:A.jsxs("div",{className:"container",children:[A.jsxs(Ln.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:["함께 배우고, 함께 성장하는 ",A.jsx("br",{}),A.jsx("span",{children:"Wit.me"})," 스터디 플랫폼"]}),A.jsx(Ln.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.8},children:"관심 있는 분야의 스터디를 찾거나 직접 만들어보세요."})]})}),A.jsxs("section",{className:"study-list container",children:[A.jsxs("div",{className:"section-header",children:[A.jsx("h2",{children:"최근 등록된 스터디"}),A.jsxs("div",{className:"filter-hint",children:["총 ",t.length,"개의 스터디"]})]}),t.length===0?A.jsx("div",{className:"empty-state",children:"아직 등록된 스터디가 없습니다. 첫 스터디의 주인공이 되어보세요!"}):A.jsx("div",{className:"study-grid",children:t.map((i,s)=>A.jsxs(Ln.div,{className:"study-card",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:s*.1,duration:.5},children:[A.jsx("div",{className:"study-tag",children:i.category}),A.jsx("h3",{className:"study-title",children:i.title}),A.jsxs("p",{className:"study-desc",children:[i.description.substring(0,100),"..."]}),A.jsxs("div",{className:"study-info",children:[A.jsxs("div",{className:"info-item",children:[A.jsx(FA,{size:16}),A.jsxs("span",{children:["정원 ",i.maxParticipants,"명"]})]}),A.jsxs("div",{className:"info-item",children:[A.jsx(MA,{size:16}),A.jsx("span",{children:new Date(i.createdAt).toLocaleDateString()})]})]}),A.jsxs(ar,{to:`/study/${i.id}`,className:"study-link",children:["상세보기 ",A.jsx(SM,{size:16})]})]},i.id))})]}),A.jsx("style",{jsx:"true",children:`
        .home-page {
          padding-bottom: 5rem;
        }
        .hero {
          background-color: var(--bg-secondary);
          padding: 6rem 0;
          text-align: center;
          margin-bottom: 4rem;
        }
        .hero h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .hero h1 span {
          color: var(--accent-primary);
          border-bottom: 3px solid var(--accent-primary);
        }
        .hero p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .section-header h2 {
          font-size: 2rem;
        }
        .filter-hint {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .study-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        .study-card {
          background-color: var(--bg-primary);
          padding: 2rem;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          transition: var(--transition-standard);
        }
        .study-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          border-color: var(--accent-primary);
        }
        .study-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-primary);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        .study-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .study-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .study-info {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f0f0f0;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .study-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--accent-primary);
          align-self: flex-start;
        }
        .loading-state, .empty-state {
          text-align: center;
          padding: 5rem;
          color: var(--text-secondary);
          font-size: 1.2rem;
        }
      `})]})},h4=()=>{const[t,e]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState(""),[o,a]=b.useState(!1),{login:u}=bi(),c=zr(),h=async f=>{f.preventDefault();try{s(""),a(!0),await u(t,n),c("/")}catch(p){s("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요."),console.error(p)}finally{a(!1)}};return A.jsxs("div",{className:"auth-page",children:[A.jsxs(Ln.div,{className:"auth-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},children:[A.jsx("h1",{className:"auth-title",children:"Welcome Back"}),A.jsx("p",{className:"auth-subtitle",children:"Wit.me에서 당신의 스터디 여정을 계속하세요."}),i&&A.jsx("div",{className:"auth-error",children:i}),A.jsxs("form",{onSubmit:h,children:[A.jsxs("div",{className:"input-group",children:[A.jsx("label",{className:"input-label",children:"이메일"}),A.jsx("input",{type:"email",className:"input-field",value:t,onChange:f=>e(f.target.value),required:!0,placeholder:"example@wit.me"})]}),A.jsxs("div",{className:"input-group",children:[A.jsx("label",{className:"input-label",children:"비밀번호"}),A.jsx("input",{type:"password",className:"input-field",value:n,onChange:f=>r(f.target.value),required:!0,placeholder:"••••••••"})]}),A.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:o,children:o?"로그인 중...":"로그인"})]}),A.jsxs("p",{className:"auth-footer",children:["계정이 없으신가요? ",A.jsx(ar,{to:"/register",children:"회원가입"})]})]}),A.jsx("style",{jsx:"true",children:`
        .auth-page {
          min-height: calc(100vh - 84px);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-secondary);
        }
        .auth-card {
          background-color: var(--bg-primary);
          padding: 3rem;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          width: 100%;
          max-width: 450px;
        }
        .auth-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .auth-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          font-size: 0.95rem;
        }
        .input-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }
        .btn-block {
          width: 100%;
          padding: 1rem;
          margin-top: 1rem;
          font-size: 1rem;
        }
        .auth-error {
          background-color: #fee2e2;
          color: #dc2626;
          padding: 0.75rem;
          border-radius: 4px;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .auth-footer {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .auth-footer a {
          color: var(--accent-primary);
          font-weight: 600;
          text-decoration: underline;
        }
      `})]})},d4=()=>{const[t,e]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState(""),[o,a]=b.useState("user"),[u,c]=b.useState(""),[h,f]=b.useState(!1),{signup:p}=bi(),g=zr(),T=async E=>{if(E.preventDefault(),n.length<6)return c("비밀번호는 최소 6자 이상이어야 합니다.");try{c(""),f(!0),await p(t,n,i,o),g("/")}catch(C){c("회원가입에 실패했습니다. 이미 사용 중인 이메일일 수 있습니다."),console.error(C)}finally{f(!1)}};return A.jsxs("div",{className:"auth-page",children:[A.jsxs(Ln.div,{className:"auth-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},children:[A.jsx("h1",{className:"auth-title",children:"Join Wit.me"}),A.jsx("p",{className:"auth-subtitle",children:"함께 성장하는 즐거움, 당신의 성장을 응원합니다."}),u&&A.jsx("div",{className:"auth-error",children:u}),A.jsxs("form",{onSubmit:T,children:[A.jsxs("div",{className:"input-group",children:[A.jsx("label",{className:"input-label",children:"이름"}),A.jsx("input",{type:"text",className:"input-field",value:i,onChange:E=>s(E.target.value),required:!0,placeholder:"홍길동"})]}),A.jsxs("div",{className:"input-group",children:[A.jsx("label",{className:"input-label",children:"이메일"}),A.jsx("input",{type:"email",className:"input-field",value:t,onChange:E=>e(E.target.value),required:!0,placeholder:"example@wit.me"})]}),A.jsxs("div",{className:"input-group",children:[A.jsx("label",{className:"input-label",children:"비밀번호 (6자 이상)"}),A.jsx("input",{type:"password",className:"input-field",value:n,onChange:E=>r(E.target.value),required:!0,placeholder:"••••••••"})]}),A.jsxs("div",{className:"input-group",children:[A.jsx("label",{className:"input-label",children:"가입 유형"}),A.jsxs("div",{className:"role-selector",children:[A.jsx("button",{type:"button",className:`role-btn ${o==="user"?"active":""}`,onClick:()=>a("user"),children:"일반 사용자"}),A.jsx("button",{type:"button",className:`role-btn ${o==="organizer"?"active":""}`,onClick:()=>a("organizer"),children:"모임장"})]})]}),A.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:h,children:h?"처리 중...":"회원가입"})]}),A.jsxs("p",{className:"auth-footer",children:["이미 계정이 있으신가요? ",A.jsx(ar,{to:"/login",children:"로그인"})]})]}),A.jsx("style",{jsx:"true",children:`
        .auth-page {
          min-height: calc(100vh - 84px);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-secondary);
          padding: 2rem;
        }
        .auth-card {
          background-color: var(--bg-primary);
          padding: 3rem;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          width: 100%;
          max-width: 450px;
        }
        .auth-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .auth-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          font-size: 0.95rem;
        }
        .input-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }
        .role-selector {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .role-btn {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        .role-btn.active {
          border-color: var(--accent-primary);
          background-color: var(--accent-primary);
          color: white;
        }
        .btn-block {
          width: 100%;
          padding: 1rem;
          margin-top: 1rem;
          font-size: 1rem;
        }
        .auth-error {
          background-color: #fee2e2;
          color: #dc2626;
          padding: 0.75rem;
          border-radius: 4px;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .auth-footer {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .auth-footer a {
          color: var(--accent-primary);
          font-weight: 600;
          text-decoration: underline;
        }
      `})]})},f4=()=>{const{id:t}=Zx(),{currentUser:e,userData:n}=bi(),r=zr(),[i,s]=b.useState(null),[o,a]=b.useState(!0),[u,c]=b.useState(!1),[h,f]=b.useState(!1);b.useEffect(()=>{(async()=>{const E=Aa(Rt,"studyGroups",t),C=await NA(E);if(C.exists()){if(s({id:C.id,...C.data()}),e){const v=ui(Nn(Rt,"applications"),dr("studyGroupId","==",t),dr("userId","==",e.uid)),_=await og(v);f(!_.empty)}}else r("/");a(!1)})()},[t,e,r]);const p=async()=>{if(!e)return r("/login");if(i.organizerId!==e.uid){c(!0);try{await bA(Nn(Rt,"applications"),{studyGroupId:t,studyTitle:i.title,userId:e.uid,userName:n.displayName,userEmail:e.email,status:"pending",appliedAt:new Date().toISOString()}),f(!0)}catch(T){console.error(T),alert("신청에 실패했습니다.")}finally{c(!1)}}};if(o)return A.jsx("div",{className:"loading-state",children:"로딩 중..."});if(!i)return null;const g=(e==null?void 0:e.uid)===i.organizerId;return A.jsxs("div",{className:"container study-detail-page",children:[A.jsxs("button",{onClick:()=>r(-1),className:"back-btn",children:[A.jsx(IM,{size:18})," 목록으로 돌아가기"]}),A.jsxs("div",{className:"detail-layout",children:[A.jsxs(Ln.div,{className:"detail-content",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},children:[A.jsxs("div",{className:"study-header",children:[A.jsx("span",{className:"category-tag",children:i.category}),A.jsx("h1",{children:i.title}),A.jsxs("div",{className:"meta-info",children:[A.jsxs("span",{className:"organizer-name",children:[A.jsx(LA,{size:16})," ",i.organizerName]}),A.jsxs("span",{className:"created-date",children:[A.jsx(MA,{size:16})," ",new Date(i.createdAt).toLocaleDateString()]})]})]}),A.jsxs("div",{className:"description-section",children:[A.jsx("h3",{children:"스터디 상세 소개"}),A.jsx("div",{className:"description-text",children:i.description.split(`
`).map((T,E)=>A.jsx("p",{children:T},E))})]})]}),A.jsx(Ln.div,{className:"detail-sidebar",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.2},children:A.jsxs("div",{className:"sidebar-card",children:[A.jsxs("div",{className:"sidebar-info-group",children:[A.jsx("label",{children:"모집 인원"}),A.jsxs("div",{className:"sidebar-val",children:[A.jsx(FA,{size:18})," ",i.maxParticipants,"명"]})]}),A.jsx("div",{className:"sidebar-divider"}),e?g?A.jsx("button",{onClick:()=>r("/dashboard"),className:"btn btn-outline btn-full",children:"참가자 관리하기"}):h?A.jsxs("div",{className:"applied-status",children:[A.jsx(AM,{size:24}),A.jsx("span",{children:"신청 완료되었습니다."}),A.jsx("p",{children:"모임장의 승인을 기다리고 있습니다."})]}):A.jsx("button",{onClick:p,className:"btn btn-primary btn-full btn-large",disabled:u,children:u?"신청 처리 중...":"스터디 참여 신청"}):A.jsx("button",{onClick:()=>r("/login"),className:"btn btn-primary btn-full btn-large",children:"로그인하고 신청하기"}),A.jsx("p",{className:"sidebar-hint",children:"* 승인 후에는 대시보드에서 상태를 확인하실 수 있습니다."})]})})]}),A.jsx("style",{jsx:"true",children:`
        .study-detail-page {
          padding: 3rem 0;
        }
        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 3rem;
        }
        .detail-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 4rem;
        }
        .study-header {
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 2rem;
        }
        .category-tag {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-secondary);
          margin-bottom: 1rem;
          display: block;
        }
        .study-header h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        .meta-info {
          display: flex;
          gap: 2rem;
          color: var(--text-secondary);
          font-size: 1rem;
        }
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .description-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--accent-primary);
        }
        .description-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: var(--text-primary);
        }
        .sidebar-card {
          background-color: var(--bg-primary);
          padding: 2.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          position: sticky;
          top: 150px;
        }
        .sidebar-info-group {
          margin-bottom: 1.5rem;
        }
        .sidebar-info-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .sidebar-val {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.25rem;
          font-weight: 600;
        }
        .sidebar-divider {
          height: 1px;
          background-color: var(--border-color);
          margin: 2rem 0;
        }
        .btn-full {
          width: 100%;
        }
        .btn-large {
          padding: 1rem;
          font-size: 1.1rem;
        }
        .applied-status {
          text-align: center;
          color: #10b981;
        }
        .applied-status span {
          display: block;
          font-weight: 700;
          margin: 1rem 0 0.5rem;
        }
        .applied-status p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .sidebar-hint {
          margin-top: 1.5rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .loading-state {
          text-align: center;
          padding: 10rem;
          font-size: 1.5rem;
          color: var(--text-secondary);
        }
        @media (max-width: 900px) {
          .detail-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .sidebar-card {
            position: static;
          }
        }
      `})]})};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zw;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(zw||(zw={}));var $w;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})($w||($w={}));var Ww;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(Ww||(Ww={}));var Hw;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(Hw||(Hw={}));var mc;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(mc||(mc={}));var Kw;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(Kw||(Kw={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class qw extends Na{constructor(e,n){super(e),this.response=n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4="https://generativelanguage.googleapis.com",m4="v1",g4="0.2.1",y4="genai-js";var Pi;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Pi||(Pi={}));class nl{constructor(e,n,r,i){this.model=e,this.task=n,this.apiKey=r,this.stream=i}toString(){let e=`${p4}/${m4}/${this.model}:${this.task}`;return this.stream&&(e+="?alt=sse"),e}}function v4(){return`${y4}/${g4}`}async function rl(t,e,n){let r;try{if(r=await fetch(t.toString(),Object.assign(Object.assign({},_4(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":v4(),"x-goog-api-key":t.apiKey},body:e})),!r.ok){let i="";try{const s=await r.json();i=s.error.message,s.error.details&&(i+=` ${JSON.stringify(s.error.details)}`)}catch{}throw new Error(`[${r.status} ${r.statusText}] ${i}`)}}catch(i){const s=new Na(`Error fetching from ${t.toString()}: ${i.message}`);throw s.stack=i.stack,s}return r}function _4(t){const e={};if((t==null?void 0:t.timeout)>=0){const n=new AbortController,r=n.signal;setTimeout(()=>n.abort(),t.timeout),e.signal=r}return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),pC(t.candidates[0]))throw new qw(`${gc(t)}`,t);return w4(t)}else if(t.promptFeedback)throw new qw(`Text not available. ${gc(t)}`,t);return""},t}function w4(t){var e,n,r,i;return!((i=(r=(n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0?void 0:n.parts)===null||r===void 0?void 0:r[0])===null||i===void 0)&&i.text?t.candidates[0].content.parts[0].text:""}const E4=[mc.RECITATION,mc.SAFETY];function pC(t){return!!t.finishReason&&E4.includes(t.finishReason)}function gc(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];pC(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function ba(t){return this instanceof ba?(this.v=t,this):new ba(t)}function T4(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(p){r[p]&&(i[p]=function(g){return new Promise(function(T,E){s.push([p,g,T,E])>1||a(p,g)})})}function a(p,g){try{u(r[p](g))}catch(T){f(s[0][3],T)}}function u(p){p.value instanceof ba?Promise.resolve(p.value.v).then(c,h):f(s[0][2],p)}function c(p){a("next",p)}function h(p){a("throw",p)}function f(p,g){p(g),s.shift(),s.length&&a(s[0][0],s[0][1])}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function I4(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=P4(e),[r,i]=n.tee();return{stream:A4(r),response:S4(i)}}async function S4(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return zg(C4(e));e.push(i)}}function A4(t){return T4(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield ba(n.read());if(i)break;yield yield ba(zg(r))}})}function P4(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:a})=>{if(a){if(i.trim()){r.error(new Na("Failed to parse stream"));return}r.close();return}i+=o;let u=i.match(Gw),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new Na(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(c),i=i.substring(u[0].length),u=i.match(Gw)}return s()})}}})}function C4(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t)if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[{text:""}]});for(const o of i.content.parts)o.text&&(n.candidates[s].content.parts[0].text+=o.text)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e,n,r){const i=new nl(e,Pi.STREAM_GENERATE_CONTENT,t,!0),s=await rl(i,JSON.stringify(n),r);return I4(s)}async function gC(t,e,n,r){const i=new nl(e,Pi.GENERATE_CONTENT,t,!1),o=await(await rl(i,JSON.stringify(n),r)).json();return{response:zg(o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t,e){let n=[];if(typeof t=="string")n=[{text:t}];else for(const r of t)typeof r=="string"?n.push({text:r}):n.push(r);return{role:e,parts:n}}function Rd(t){return t.contents?t:{contents:[Qo(t,"user")]}}function R4(t){return typeof t=="string"||Array.isArray(t)?{content:Qo(t,"user")}:t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="SILENT_ERROR";class x4{constructor(e,n,r,i){this.model=n,this.params=r,this.requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(this._history=r.history.map(s=>{if(!s.role)throw new Error("Missing role for history item: "+JSON.stringify(s));return Qo(s.parts,s.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var n,r;await this._sendPromise;const i=Qo(e,"user"),s={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,contents:[...this._history,i]};let o;return this._sendPromise=this._sendPromise.then(()=>gC(this._apiKey,this.model,s,this.requestOptions)).then(a=>{var u;if(a.response.candidates&&a.response.candidates.length>0){this._history.push(i);const c=Object.assign({parts:[],role:"model"},(u=a.response.candidates)===null||u===void 0?void 0:u[0].content);this._history.push(c)}else{const c=gc(a.response);c&&console.warn(`sendMessage() was unsuccessful. ${c}. Inspect response object for details.`)}o=a}),await this._sendPromise,o}async sendMessageStream(e){var n,r;await this._sendPromise;const i=Qo(e,"user"),s={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,contents:[...this._history,i]},o=mC(this._apiKey,this.model,s,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>o).catch(a=>{throw new Error(Qw)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){this._history.push(i);const u=Object.assign({},a.candidates[0].content);u.role||(u.role="model"),this._history.push(u)}else{const u=gc(a);u&&console.warn(`sendMessageStream() was unsuccessful. ${u}. Inspect response object for details.`)}}).catch(a=>{a.message!==Qw&&console.error(a)}),o}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k4(t,e,n,r){const i=new nl(e,Pi.COUNT_TOKENS,t,!1);return(await rl(i,JSON.stringify(Object.assign(Object.assign({},n),{model:e})),r)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N4(t,e,n,r){const i=new nl(e,Pi.EMBED_CONTENT,t,!1);return(await rl(i,JSON.stringify(n),r)).json()}async function b4(t,e,n,r){const i=new nl(e,Pi.BATCH_EMBED_CONTENTS,t,!1),s=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await rl(i,JSON.stringify({requests:s}),r)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(e,n,r){this.apiKey=e,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.requestOptions=r||{}}async generateContent(e){const n=Rd(e);return gC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}async generateContentStream(e){const n=Rd(e);return mC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}startChat(e){return new x4(this.apiKey,this.model,e,this.requestOptions)}async countTokens(e){const n=Rd(e);return k4(this.apiKey,this.model,n)}async embedContent(e){const n=R4(e);return N4(this.apiKey,this.model,n)}async batchEmbedContents(e){return b4(this.apiKey,this.model,e,this.requestOptions)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new Na("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new D4(this.apiKey,e,n)}}const O4=new V4("AIzaSyA1QiJDplhGt2rfIDMhaBm6_u0Avjfk0Co"),M4=(t="gemini-1.5-flash")=>O4.getGenerativeModel({model:t}),L4=()=>{const{currentUser:t,userData:e}=bi(),n=zr(),[r,i]=b.useState({title:"",category:"프로그래밍",maxParticipants:5,description:""}),[s,o]=b.useState(!1),[a,u]=b.useState(!1),[c,h]=b.useState(""),[f,p]=b.useState(0);b.useEffect(()=>{if(!t||(e==null?void 0:e.role)!=="organizer"){n("/");return}(async()=>{const v=ui(Nn(Rt,"studyGroups"),dr("organizerId","==",t.uid)),_=await og(v);p(_.size)})()},[t,e,n]);const g=C=>{const{name:v,value:_}=C.target;i(I=>({...I,[v]:_}))},T=async()=>{if(!r.description)return h("설명을 먼저 입력해주세요.");u(!0),h("");try{const C=M4(),v=`당신은 스터디 홍보 전문가입니다. 다음 스터디 설명을 더 매력적이고 구체적으로 개선해주세요. 
      결과는 마크다운 형식을 사용하지 말고 순수 텍스트로만 제공해주세요.
      
      스터디 제목: ${r.title}
      현재 설명: ${r.description}`,N=(await(await C.generateContent(v)).response).text();i(O=>({...O,description:N.trim()}))}catch(C){console.error(C),h("AI 설명 개선에 실패했습니다.")}finally{u(!1)}},E=async C=>{if(C.preventDefault(),f>=5)return h("최대 5개까지만 스터디를 생성할 수 있습니다.");o(!0);try{await bA(Nn(Rt,"studyGroups"),{...r,organizerId:t.uid,organizerName:e.displayName,createdAt:new Date().toISOString(),status:"open"}),n("/")}catch(v){console.error(v),h("스터디 생성에 실패했습니다.")}finally{o(!1)}};return f>=5?A.jsx("div",{className:"container create-study-page",children:A.jsxs("div",{className:"limit-reached",children:[A.jsx(S0,{size:48,color:"#dc2626"}),A.jsx("h1",{children:"스터디 생성 한도 초과"}),A.jsx("p",{children:"모임장은 최대 5개의 스터디만 운영할 수 있습니다. 기존 스터디를 종료한 후 다시 시도해주세요."}),A.jsx("button",{onClick:()=>n("/"),className:"btn btn-outline",children:"홈으로 돌아가기"})]})}):A.jsxs("div",{className:"container create-study-page",children:[A.jsxs(Ln.div,{className:"form-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[A.jsxs("div",{className:"form-header",children:[A.jsx("h1",{children:"새로운 스터디 생성"}),A.jsx("p",{children:"당신의 지식을 나누고 함께 성장할 멤버를 모집하세요."}),A.jsxs("div",{className:"count-badge",children:[f," / 5 운영 중"]})]}),c&&A.jsxs("div",{className:"error-message",children:[A.jsx(S0,{size:18})," ",c]}),A.jsxs("form",{onSubmit:E,className:"study-form",children:[A.jsxs("div",{className:"form-row",children:[A.jsxs("div",{className:"input-group flex-2",children:[A.jsx("label",{children:"스터디 제목"}),A.jsx("input",{type:"text",name:"title",className:"input-field",value:r.title,onChange:g,required:!0,placeholder:"예: 리액트 마스터 클래스"})]}),A.jsxs("div",{className:"input-group flex-1",children:[A.jsx("label",{children:"카테고리"}),A.jsxs("select",{name:"category",className:"input-field",value:r.category,onChange:g,children:[A.jsx("option",{value:"프로그래밍",children:"프로그래밍"}),A.jsx("option",{value:"어학",children:"어학"}),A.jsx("option",{value:"디자인",children:"디자인"}),A.jsx("option",{value:"취업",children:"취업"}),A.jsx("option",{value:"기타",children:"기타"})]})]}),A.jsxs("div",{className:"input-group flex-1",children:[A.jsx("label",{children:"최대 인원"}),A.jsx("input",{type:"number",name:"maxParticipants",className:"input-field",value:r.maxParticipants,onChange:g,min:"2",max:"50",required:!0})]})]}),A.jsxs("div",{className:"input-group",children:[A.jsxs("div",{className:"label-row",children:[A.jsx("label",{children:"스터디 상세 설명"}),A.jsx("button",{type:"button",className:"ai-btn",onClick:T,disabled:a,children:a?"AI 분석 중...":A.jsxs(A.Fragment,{children:[A.jsx(VM,{size:14})," AI 설명 개선"]})})]}),A.jsx("textarea",{name:"description",className:"input-field textarea-field",value:r.description,onChange:g,required:!0,rows:"8",placeholder:"스터디의 목적, 진행 방식, 시간, 장소 등을 자세히 적어주세요."})]}),A.jsxs("div",{className:"form-actions",children:[A.jsx("button",{type:"button",onClick:()=>n(-1),className:"btn btn-outline",children:"취소"}),A.jsx("button",{type:"submit",className:"btn btn-primary",disabled:s,children:s?"생성 중...":"스터디 생성하기"})]})]})]}),A.jsx("style",{jsx:"true",children:`
        .create-study-page {
          padding: 4rem 0;
          display: flex;
          justify-content: center;
        }
        .form-container {
          background-color: var(--bg-primary);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          width: 100%;
          max-width: 900px;
        }
        .form-header {
          margin-bottom: 3rem;
          position: relative;
        }
        .form-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .form-header p {
          color: var(--text-secondary);
        }
        .count-badge {
          position: absolute;
          top: 0;
          right: 0;
          background-color: var(--bg-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-primary);
        }
        .form-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .flex-1 { flex: 1; }
        .flex-2 { flex: 2; }
        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .ai-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: var(--accent-secondary);
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border: 1px solid var(--accent-secondary);
          border-radius: 4px;
        }
        .ai-btn:hover {
          background-color: rgba(230, 126, 34, 0.05);
        }
        .textarea-field {
          resize: vertical;
          min-height: 200px;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }
        .error-message {
          background-color: #fee2e2;
          color: #dc2626;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }
        .limit-reached {
          text-align: center;
          padding: 5rem;
          max-width: 500px;
        }
        .limit-reached h1 {
          margin: 1.5rem 0 1rem;
        }
        .limit-reached p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `})]})},F4=()=>{const{currentUser:t,userData:e}=bi(),n=zr(),[r,i]=b.useState([]),[s,o]=b.useState([]),[a,u]=b.useState(null),[c,h]=b.useState([]),[f,p]=b.useState(!0);b.useEffect(()=>{if(!t){n("/login");return}const E=ui(Nn(Rt,"studyGroups"),dr("organizerId","==",t.uid)),C=gu(E,I=>{i(I.docs.map(N=>({id:N.id,...N.data()})))}),v=ui(Nn(Rt,"applications"),dr("userId","==",t.uid)),_=gu(v,I=>{o(I.docs.map(N=>({id:N.id,...N.data()})))});return p(!1),()=>{C(),_()}},[t,n]),b.useEffect(()=>{if(!a){h([]);return}const E=ui(Nn(Rt,"applications"),dr("studyGroupId","==",a.id));return gu(E,v=>{h(v.docs.map(_=>({id:_.id,..._.data()})))})},[a]);const g=async(E,C)=>{try{await vM(Aa(Rt,"applications",E),{status:C})}catch(v){console.error(v),alert("상태 업데이트 실패")}},T=async E=>{const C=ui(Nn(Rt,"applications"),dr("studyGroupId","==",E.id),dr("status","==","approved")),_=(await og(C)).docs.map(S=>S.data());if(_.length===0)return alert("승인된 참가자가 없습니다.");const I=["Name","Email","Applied At"],N=_.map(S=>[S.userName,S.userEmail,new Date(S.appliedAt).toLocaleDateString()]),O=[I.join(","),...N.map(S=>S.join(","))].join(`
`),L=new Blob(["\uFEFF"+O],{type:"text/csv;charset=utf-8;"}),P=URL.createObjectURL(L),y=document.createElement("a");y.setAttribute("href",P),y.setAttribute("download",`witme_${E.title}_participants.csv`),y.style.visibility="hidden",document.body.appendChild(y),y.click(),document.body.removeChild(y)};return f?A.jsx("div",{className:"loading-state",children:"로딩 중..."}):A.jsxs("div",{className:"container dashboard-page",children:[A.jsxs("header",{className:"dashboard-header",children:[A.jsx("h1",{children:"나의 대시보드"}),A.jsxs("p",{children:[e==null?void 0:e.displayName," 님, 환영합니다."]})]}),A.jsxs("div",{className:"dashboard-grid",children:[A.jsxs("div",{className:"dashboard-section",children:[A.jsxs("div",{className:"section-title",children:[A.jsx(bM,{size:20}),A.jsx("h2",{children:"내가 운영하는 스터디"})]}),r.length===0?A.jsx("div",{className:"empty-panel",children:"운영 중인 스터디가 없습니다."}):A.jsx("div",{className:"card-list",children:r.map(E=>A.jsxs("div",{className:`manage-card ${(a==null?void 0:a.id)===E.id?"active":""}`,onClick:()=>u((a==null?void 0:a.id)===E.id?null:E),children:[A.jsxs("div",{className:"card-header",children:[A.jsx("h3",{children:E.title}),(a==null?void 0:a.id)===E.id?A.jsx(PM,{size:20}):A.jsx(CM,{size:20})]}),A.jsx(BM,{children:(a==null?void 0:a.id)===E.id&&A.jsxs(Ln.div,{className:"applicant-list",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},children:[A.jsx("div",{className:"applicant-actions",children:A.jsxs("button",{className:"btn btn-outline btn-sm",onClick:C=>{C.stopPropagation(),T(E)},children:[A.jsx(xM,{size:14})," 명단 다운로드 (CSV)"]})}),c.length===0?A.jsx("div",{className:"no-applicants",children:"신청자가 아직 없습니다."}):c.map(C=>A.jsxs("div",{className:"applicant-item",children:[A.jsxs("div",{className:"app-user-info",children:[A.jsx("span",{className:"app-name",children:C.userName}),A.jsx("span",{className:"app-email",children:C.userEmail})]}),A.jsx("div",{className:"app-status-actions",children:C.status==="pending"?A.jsxs(A.Fragment,{children:[A.jsx("button",{className:"status-btn approve",onClick:v=>{v.stopPropagation(),g(C.id,"approved")},children:A.jsx(A0,{size:18})}),A.jsx("button",{className:"status-btn reject",onClick:v=>{v.stopPropagation(),g(C.id,"rejected")},children:A.jsx(P0,{size:18})})]}):A.jsx("span",{className:`status-badge ${C.status}`,children:C.status==="approved"?"승인됨":"거절됨"})})]},C.id))]})})]},E.id))})]}),A.jsxs("div",{className:"dashboard-section",children:[A.jsxs("div",{className:"section-title",children:[A.jsx(OM,{size:20}),A.jsx("h2",{children:"나의 신청 현황"})]}),s.length===0?A.jsx("div",{className:"empty-panel",children:"신청한 스터디가 없습니다."}):A.jsx("div",{className:"card-list",children:s.map(E=>A.jsxs("div",{className:"app-card",children:[A.jsxs("div",{className:"app-card-content",children:[A.jsx("h4",{children:E.studyTitle}),A.jsxs("span",{className:"app-date",children:[new Date(E.appliedAt).toLocaleDateString()," 신청"]})]}),A.jsxs("div",{className:`status-tag ${E.status}`,children:[E.status==="pending"&&A.jsxs(A.Fragment,{children:[A.jsx(RM,{size:14})," 대기 중"]}),E.status==="approved"&&A.jsxs(A.Fragment,{children:[A.jsx(A0,{size:14})," 승인됨"]}),E.status==="rejected"&&A.jsxs(A.Fragment,{children:[A.jsx(P0,{size:14})," 거절됨"]})]})]},E.id))})]})]}),A.jsx("style",{jsx:"true",children:`
        .dashboard-page { padding: 4rem 0; }
        .dashboard-header { margin-bottom: 4rem; text-align: center; }
        .dashboard-header h1 { font-size: 3rem; margin-bottom: 0.5rem; }
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 3rem;
          align-items: start;
        }
        .section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--accent-primary);
        }
        .section-title h2 { font-size: 1.5rem; }
        .card-list { display: flex; flex-direction: column; gap: 1.5rem; }
        
        /* Manage Card Styles */
        .manage-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow: hidden;
          transition: var(--transition-snappy);
          cursor: pointer;
        }
        .manage-card.active { border-color: var(--accent-primary); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .card-header { padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; }
        .card-header h3 { font-size: 1.2rem; }
        
        .applicant-list { padding: 0 1.5rem 1.5rem; border-top: 1px solid #f0f0f0; }
        .applicant-actions { display: flex; justify-content: flex-end; padding: 1rem 0; }
        .btn-sm { padding: 0.4rem 0.8rem; font-size: 0.75rem; display: flex; align-items: center; gap: 0.4rem; }
        
        .applicant-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid #f9f9f9;
        }
        .app-user-info { display: flex; flex-direction: column; }
        .app-name { font-weight: 600; font-size: 0.95rem; }
        .app-email { font-size: 0.8rem; color: var(--text-secondary); }
        
        .status-btn { padding: 0.4rem; border-radius: 4px; border: 1px solid #eee; }
        .status-btn.approve:hover { background-color: #ecfdf5; color: #10b981; border-color: #10b981; }
        .status-btn.reject:hover { background-color: #fef2f2; color: #ef4444; border-color: #ef4444; }
        
        /* Application Card Styles */
        .app-card {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .app-card h4 { font-size: 1.1rem; margin-bottom: 0.25rem; }
        .app-date { font-size: 0.8rem; color: var(--text-secondary); }
        
        .status-tag, .status-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .status-tag.pending, .status-badge.pending { background-color: #fef3c7; color: #d97706; }
        .status-tag.approved, .status-badge.approved { background-color: #d1fae5; color: #059669; }
        .status-tag.rejected, .status-badge.rejected { background-color: #fee2e2; color: #dc2626; }
        
        .empty-panel, .no-applicants {
          padding: 3rem;
          text-align: center;
          background-color: var(--bg-secondary);
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .dashboard-grid { grid-template-columns: 1fr; }
        }
      `})]})};function j4(){return A.jsx(Tk,{children:A.jsx(wM,{children:A.jsxs("div",{className:"app",children:[A.jsx(MM,{}),A.jsx("main",{children:A.jsxs(mk,{children:[A.jsx(ti,{path:"/",element:A.jsx(c4,{})}),A.jsx(ti,{path:"/login",element:A.jsx(h4,{})}),A.jsx(ti,{path:"/register",element:A.jsx(d4,{})}),A.jsx(ti,{path:"/study/:id",element:A.jsx(f4,{})}),A.jsx(ti,{path:"/create",element:A.jsx(I0,{requiredRole:"organizer",children:A.jsx(L4,{})})}),A.jsx(ti,{path:"/dashboard",element:A.jsx(I0,{children:A.jsx(F4,{})})})]})})]})})})}xd.createRoot(document.getElementById("root")).render(A.jsx(oE.StrictMode,{children:A.jsx(j4,{})}));
