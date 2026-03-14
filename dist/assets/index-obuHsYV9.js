function mC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dw={exports:{}},xc={},fw={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),yC=Symbol.for("react.portal"),vC=Symbol.for("react.fragment"),_C=Symbol.for("react.strict_mode"),EC=Symbol.for("react.profiler"),wC=Symbol.for("react.provider"),TC=Symbol.for("react.context"),SC=Symbol.for("react.forward_ref"),IC=Symbol.for("react.suspense"),AC=Symbol.for("react.memo"),RC=Symbol.for("react.lazy"),nv=Symbol.iterator;function PC(t){return t===null||typeof t!="object"?null:(t=nv&&t[nv]||t["@@iterator"],typeof t=="function"?t:null)}var pw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mw=Object.assign,gw={};function qs(t,e,n){this.props=t,this.context=e,this.refs=gw,this.updater=n||pw}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yw(){}yw.prototype=qs.prototype;function Cp(t,e,n){this.props=t,this.context=e,this.refs=gw,this.updater=n||pw}var xp=Cp.prototype=new yw;xp.constructor=Cp;mw(xp,qs.prototype);xp.isPureReactComponent=!0;var rv=Array.isArray,vw=Object.prototype.hasOwnProperty,kp={current:null},_w={key:!0,ref:!0,__self:!0,__source:!0};function Ew(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vw.call(e,r)&&!_w.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ka,type:t,key:s,ref:o,props:i,_owner:kp.current}}function CC(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Np(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function xC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var iv=/\/+/g;function Wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xC(""+t.key):e.toString(36)}function au(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case yC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wh(o,0):r,rv(i)?(n="",t!=null&&(n=t.replace(iv,"$&/")+"/"),au(i,e,n,"",function(c){return c})):i!=null&&(Np(i)&&(i=CC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(iv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Wh(s,a);o+=au(s,e,n,l,i)}else if(l=PC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Wh(s,a++),o+=au(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vl(t,e,n){if(t==null)return t;var r=[],i=0;return au(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},lu={transition:null},NC={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:lu,ReactCurrentOwner:kp};function ww(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Vl,forEach:function(t,e,n){Vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vl(t,function(){e++}),e},toArray:function(t){return Vl(t,function(e){return e})||[]},only:function(t){if(!Np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=qs;ee.Fragment=vC;ee.Profiler=EC;ee.PureComponent=Cp;ee.StrictMode=_C;ee.Suspense=IC;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NC;ee.act=ww;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vw.call(e,l)&&!_w.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ka,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:TC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wC,_context:t},t.Consumer=t};ee.createElement=Ew;ee.createFactory=function(t){var e=Ew.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:SC,render:t}};ee.isValidElement=Np;ee.lazy=function(t){return{$$typeof:RC,_payload:{_status:-1,_result:t},_init:kC}};ee.memo=function(t,e){return{$$typeof:AC,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=lu.transition;lu.transition={};try{t()}finally{lu.transition=e}};ee.unstable_act=ww;ee.useCallback=function(t,e){return wt.current.useCallback(t,e)};ee.useContext=function(t){return wt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return wt.current.useEffect(t,e)};ee.useId=function(){return wt.current.useId()};ee.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return wt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};ee.useRef=function(t){return wt.current.useRef(t)};ee.useState=function(t){return wt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return wt.current.useTransition()};ee.version="18.3.1";fw.exports=ee;var N=fw.exports;const Tw=gC(N),DC=mC({__proto__:null,default:Tw},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bC=N,VC=Symbol.for("react.element"),OC=Symbol.for("react.fragment"),LC=Object.prototype.hasOwnProperty,MC=bC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FC={key:!0,ref:!0,__self:!0,__source:!0};function Sw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)LC.call(e,r)&&!FC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VC,type:t,key:s,ref:o,props:i,_owner:MC.current}}xc.Fragment=OC;xc.jsx=Sw;xc.jsxs=Sw;dw.exports=xc;var R=dw.exports,$d={},Iw={exports:{}},jt={},Aw={exports:{}},Rw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,q){var X=z.length;z.push(q);e:for(;0<X;){var we=X-1>>>1,ce=z[we];if(0<i(ce,q))z[we]=q,z[X]=ce,X=we;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],X=z.pop();if(X!==q){z[0]=X;e:for(var we=0,ce=z.length,ke=ce>>>1;we<ke;){var An=2*(we+1)-1,Rn=z[An],Pn=An+1,Cn=z[Pn];if(0>i(Rn,X))Pn<ce&&0>i(Cn,Rn)?(z[we]=Cn,z[Pn]=X,we=Pn):(z[we]=Rn,z[An]=X,we=An);else if(Pn<ce&&0>i(Cn,X))z[we]=Cn,z[Pn]=X,we=Pn;else break e}}return q}function i(z,q){var X=z.sortIndex-q.sortIndex;return X!==0?X:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,p=3,g=!1,w=!1,T=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=z)r(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function D(z){if(T=!1,S(z),!w)if(n(l)!==null)w=!0,Wi(O);else{var q=n(c);q!==null&&fe(D,q.startTime-z)}}function O(z,q){w=!1,T&&(T=!1,E(y),y=-1),g=!0;var X=p;try{for(S(q),f=n(l);f!==null&&(!(f.expirationTime>q)||z&&!k());){var we=f.callback;if(typeof we=="function"){f.callback=null,p=f.priorityLevel;var ce=we(f.expirationTime<=q);q=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&r(l),S(q)}else r(l);f=n(l)}if(f!==null)var ke=!0;else{var An=n(c);An!==null&&fe(D,An.startTime-q),ke=!1}return ke}finally{f=null,p=X,g=!1}}var M=!1,I=null,y=-1,A=5,C=-1;function k(){return!(t.unstable_now()-C<A)}function b(){if(I!==null){var z=t.unstable_now();C=z;var q=!0;try{q=I(!0,z)}finally{q?x():(M=!1,I=null)}}else M=!1}var x;if(typeof _=="function")x=function(){_(b)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,rr=gt.port2;gt.port1.onmessage=b,x=function(){rr.postMessage(null)}}else x=function(){P(b,0)};function Wi(z){I=z,M||(M=!0,x())}function fe(z,q){y=P(function(){z(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){w||g||(w=!0,Wi(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var X=p;p=q;try{return z()}finally{p=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=p;p=z;try{return q()}finally{p=X}},t.unstable_scheduleCallback=function(z,q,X){var we=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?we+X:we):X=we,z){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=X+ce,z={id:h++,callback:q,priorityLevel:z,startTime:X,expirationTime:ce,sortIndex:-1},X>we?(z.sortIndex=X,e(c,z),n(l)===null&&z===n(c)&&(T?(E(y),y=-1):T=!0,fe(D,X-we))):(z.sortIndex=ce,e(l,z),w||g||(w=!0,Wi(O))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var q=p;return function(){var X=p;p=q;try{return z.apply(this,arguments)}finally{p=X}}}})(Rw);Aw.exports=Rw;var jC=Aw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UC=N,Mt=jC;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pw=new Set,ua={};function Li(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ua[t]=e,t=0;t<e.length;t++)Pw.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wd=Object.prototype.hasOwnProperty,BC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sv={},ov={};function zC(t){return Wd.call(ov,t)?!0:Wd.call(sv,t)?!1:BC.test(t)?ov[t]=!0:(sv[t]=!0,!1)}function $C(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function WC(t,e,n,r){if(e===null||typeof e>"u"||$C(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dp=/[\-:]([a-z])/g;function bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dp,bp);et[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dp,bp);et[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dp,bp);et[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vp(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(WC(e,n,i,r)&&(n=null),r||i===null?zC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=UC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ol=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Op=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),Cw=Symbol.for("react.provider"),xw=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),Hd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),Mp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),kw=Symbol.for("react.offscreen"),av=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Kh;function No(t){if(Kh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kh=e&&e[1]||""}return`
`+Kh+t}var Hh=!1;function Gh(t,e){if(!t||Hh)return"";Hh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function KC(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=Gh(t.type,!1),t;case 11:return t=Gh(t.type.render,!1),t;case 1:return t=Gh(t.type,!0),t;default:return""}}function qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Kd:return"Profiler";case Op:return"StrictMode";case Hd:return"Suspense";case Gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xw:return(t.displayName||"Context")+".Consumer";case Cw:return(t._context.displayName||"Context")+".Provider";case Lp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mp:return e=t.displayName||null,e!==null?e:qd(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return qd(t(e))}catch{}}return null}function HC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qd(e);case 8:return e===Op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GC(t){var e=Nw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=GC(t))}function Dw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Nw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Nu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qd(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bw(t,e){e=e.checked,e!=null&&Vp(t,"checked",e,!1)}function Yd(t,e){bw(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xd(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xd(t,e,n){(e!=="number"||Nu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Do(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function Vw(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ow(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ow(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,Lw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qC=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(t){qC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wo[e]=Wo[t]})});function Mw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wo.hasOwnProperty(t)&&Wo[t]?(""+e).trim():e+"px"}function Fw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QC=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ef(t,e){if(e){if(QC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function tf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=null;function Fp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rf=null,_s=null,Es=null;function dv(t){if(t=qa(t)){if(typeof rf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Vc(e),rf(t.stateNode,t.type,e))}}function jw(t){_s?Es?Es.push(t):Es=[t]:_s=t}function Uw(){if(_s){var t=_s,e=Es;if(Es=_s=null,dv(t),e)for(t=0;t<e.length;t++)dv(e[t])}}function Bw(t,e){return t(e)}function zw(){}var qh=!1;function $w(t,e,n){if(qh)return t(e,n);qh=!0;try{return Bw(t,e,n)}finally{qh=!1,(_s!==null||Es!==null)&&(zw(),Uw())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var sf=!1;if(Kn)try{var To={};Object.defineProperty(To,"passive",{get:function(){sf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{sf=!1}function YC(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ko=!1,Du=null,bu=!1,of=null,XC={onError:function(t){Ko=!0,Du=t}};function JC(t,e,n,r,i,s,o,a,l){Ko=!1,Du=null,YC.apply(XC,arguments)}function ZC(t,e,n,r,i,s,o,a,l){if(JC.apply(this,arguments),Ko){if(Ko){var c=Du;Ko=!1,Du=null}else throw Error(U(198));bu||(bu=!0,of=c)}}function Mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ww(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fv(t){if(Mi(t)!==t)throw Error(U(188))}function e1(t){var e=t.alternate;if(!e){if(e=Mi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fv(i),t;if(s===r)return fv(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Kw(t){return t=e1(t),t!==null?Hw(t):null}function Hw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hw(t);if(e!==null)return e;t=t.sibling}return null}var Gw=Mt.unstable_scheduleCallback,pv=Mt.unstable_cancelCallback,t1=Mt.unstable_shouldYield,n1=Mt.unstable_requestPaint,be=Mt.unstable_now,r1=Mt.unstable_getCurrentPriorityLevel,jp=Mt.unstable_ImmediatePriority,qw=Mt.unstable_UserBlockingPriority,Vu=Mt.unstable_NormalPriority,i1=Mt.unstable_LowPriority,Qw=Mt.unstable_IdlePriority,kc=null,mn=null;function s1(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(kc,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:l1,o1=Math.log,a1=Math.LN2;function l1(t){return t>>>=0,t===0?32:31-(o1(t)/a1|0)|0}var Fl=64,jl=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bo(a):(s&=o,s!==0&&(r=bo(s)))}else o=n&~i,o!==0?r=bo(o):s!==0&&(r=bo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function u1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=u1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function af(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yw(){var t=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),t}function Qh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function h1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function Xw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jw,Bp,Zw,eT,tT,lf=!1,Ul=[],Rr=null,Pr=null,Cr=null,da=new Map,fa=new Map,pr=[],d1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mv(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function So(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qa(e),e!==null&&Bp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function f1(t,e,n,r,i){switch(e){case"focusin":return Rr=So(Rr,t,e,n,r,i),!0;case"dragenter":return Pr=So(Pr,t,e,n,r,i),!0;case"mouseover":return Cr=So(Cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return da.set(s,So(da.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fa.set(s,So(fa.get(s)||null,t,e,n,r,i)),!0}return!1}function nT(t){var e=fi(t.target);if(e!==null){var n=Mi(e);if(n!==null){if(e=n.tag,e===13){if(e=Ww(n),e!==null){t.blockedOn=e,tT(t.priority,function(){Zw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nf=r,n.target.dispatchEvent(r),nf=null}else return e=qa(n),e!==null&&Bp(e),t.blockedOn=n,!1;e.shift()}return!0}function gv(t,e,n){uu(t)&&n.delete(e)}function p1(){lf=!1,Rr!==null&&uu(Rr)&&(Rr=null),Pr!==null&&uu(Pr)&&(Pr=null),Cr!==null&&uu(Cr)&&(Cr=null),da.forEach(gv),fa.forEach(gv)}function Io(t,e){t.blockedOn===e&&(t.blockedOn=null,lf||(lf=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,p1)))}function pa(t){function e(i){return Io(i,t)}if(0<Ul.length){Io(Ul[0],t);for(var n=1;n<Ul.length;n++){var r=Ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rr!==null&&Io(Rr,t),Pr!==null&&Io(Pr,t),Cr!==null&&Io(Cr,t),da.forEach(e),fa.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)nT(n),n.blockedOn===null&&pr.shift()}var ws=er.ReactCurrentBatchConfig,Lu=!0;function m1(t,e,n,r){var i=le,s=ws.transition;ws.transition=null;try{le=1,zp(t,e,n,r)}finally{le=i,ws.transition=s}}function g1(t,e,n,r){var i=le,s=ws.transition;ws.transition=null;try{le=4,zp(t,e,n,r)}finally{le=i,ws.transition=s}}function zp(t,e,n,r){if(Lu){var i=uf(t,e,n,r);if(i===null)sd(t,e,r,Mu,n),mv(t,r);else if(f1(i,t,e,n,r))r.stopPropagation();else if(mv(t,r),e&4&&-1<d1.indexOf(t)){for(;i!==null;){var s=qa(i);if(s!==null&&Jw(s),s=uf(t,e,n,r),s===null&&sd(t,e,r,Mu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else sd(t,e,r,null,n)}}var Mu=null;function uf(t,e,n,r){if(Mu=null,t=Fp(r),t=fi(t),t!==null)if(e=Mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ww(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mu=t,null}function rT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r1()){case jp:return 1;case qw:return 4;case Vu:case i1:return 16;case Qw:return 536870912;default:return 16}default:return 16}}var wr=null,$p=null,cu=null;function iT(){if(cu)return cu;var t,e=$p,n=e.length,r,i="value"in wr?wr.value:wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cu=i.slice(t,1<r?1-r:void 0)}function hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function yv(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bl:yv,this.isPropagationStopped=yv,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wp=Ut(Qs),Ga=Ae({},Qs,{view:0,detail:0}),y1=Ut(Ga),Yh,Xh,Ao,Nc=Ae({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(Yh=t.screenX-Ao.screenX,Xh=t.screenY-Ao.screenY):Xh=Yh=0,Ao=t),Yh)},movementY:function(t){return"movementY"in t?t.movementY:Xh}}),vv=Ut(Nc),v1=Ae({},Nc,{dataTransfer:0}),_1=Ut(v1),E1=Ae({},Ga,{relatedTarget:0}),Jh=Ut(E1),w1=Ae({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),T1=Ut(w1),S1=Ae({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I1=Ut(S1),A1=Ae({},Qs,{data:0}),_v=Ut(A1),R1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C1[t])?!!e[t]:!1}function Kp(){return x1}var k1=Ae({},Ga,{key:function(t){if(t.key){var e=R1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kp,charCode:function(t){return t.type==="keypress"?hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N1=Ut(k1),D1=Ae({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ev=Ut(D1),b1=Ae({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kp}),V1=Ut(b1),O1=Ae({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=Ut(O1),M1=Ae({},Nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F1=Ut(M1),j1=[9,13,27,32],Hp=Kn&&"CompositionEvent"in window,Ho=null;Kn&&"documentMode"in document&&(Ho=document.documentMode);var U1=Kn&&"TextEvent"in window&&!Ho,sT=Kn&&(!Hp||Ho&&8<Ho&&11>=Ho),wv=" ",Tv=!1;function oT(t,e){switch(t){case"keyup":return j1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function B1(t,e){switch(t){case"compositionend":return aT(e);case"keypress":return e.which!==32?null:(Tv=!0,wv);case"textInput":return t=e.data,t===wv&&Tv?null:t;default:return null}}function z1(t,e){if(ns)return t==="compositionend"||!Hp&&oT(t,e)?(t=iT(),cu=$p=wr=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sT&&e.locale!=="ko"?null:e.data;default:return null}}var $1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$1[t.type]:e==="textarea"}function lT(t,e,n,r){jw(r),e=Fu(e,"onChange"),0<e.length&&(n=new Wp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Go=null,ma=null;function W1(t){_T(t,0)}function Dc(t){var e=ss(t);if(Dw(e))return t}function K1(t,e){if(t==="change")return e}var uT=!1;if(Kn){var Zh;if(Kn){var ed="oninput"in document;if(!ed){var Iv=document.createElement("div");Iv.setAttribute("oninput","return;"),ed=typeof Iv.oninput=="function"}Zh=ed}else Zh=!1;uT=Zh&&(!document.documentMode||9<document.documentMode)}function Av(){Go&&(Go.detachEvent("onpropertychange",cT),ma=Go=null)}function cT(t){if(t.propertyName==="value"&&Dc(ma)){var e=[];lT(e,ma,t,Fp(t)),$w(W1,e)}}function H1(t,e,n){t==="focusin"?(Av(),Go=e,ma=n,Go.attachEvent("onpropertychange",cT)):t==="focusout"&&Av()}function G1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dc(ma)}function q1(t,e){if(t==="click")return Dc(e)}function Q1(t,e){if(t==="input"||t==="change")return Dc(e)}function Y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:Y1;function ga(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wd.call(e,i)||!an(t[i],e[i]))return!1}return!0}function Rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pv(t,e){var n=Rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rv(n)}}function hT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dT(){for(var t=window,e=Nu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nu(t.document)}return e}function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function X1(t){var e=dT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hT(n.ownerDocument.documentElement,n)){if(r!==null&&Gp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pv(n,s);var o=Pv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var J1=Kn&&"documentMode"in document&&11>=document.documentMode,rs=null,cf=null,qo=null,hf=!1;function Cv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hf||rs==null||rs!==Nu(r)||(r=rs,"selectionStart"in r&&Gp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qo&&ga(qo,r)||(qo=r,r=Fu(cf,"onSelect"),0<r.length&&(e=new Wp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rs)))}function zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},td={},fT={};Kn&&(fT=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function bc(t){if(td[t])return td[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fT)return td[t]=e[n];return t}var pT=bc("animationend"),mT=bc("animationiteration"),gT=bc("animationstart"),yT=bc("transitionend"),vT=new Map,xv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){vT.set(t,e),Li(e,[t])}for(var nd=0;nd<xv.length;nd++){var rd=xv[nd],Z1=rd.toLowerCase(),ex=rd[0].toUpperCase()+rd.slice(1);Gr(Z1,"on"+ex)}Gr(pT,"onAnimationEnd");Gr(mT,"onAnimationIteration");Gr(gT,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(yT,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Li("onBeforeInput",["compositionend","keypress","textInput","paste"]);Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function kv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ZC(r,e,void 0,t),t.currentTarget=null}function _T(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;kv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;kv(i,a,c),s=l}}}if(bu)throw t=of,bu=!1,of=null,t}function me(t,e){var n=e[gf];n===void 0&&(n=e[gf]=new Set);var r=t+"__bubble";n.has(r)||(ET(e,t,2,!1),n.add(r))}function id(t,e,n){var r=0;e&&(r|=4),ET(n,t,r,e)}var $l="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[$l]){t[$l]=!0,Pw.forEach(function(n){n!=="selectionchange"&&(tx.has(n)||id(n,!1,t),id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$l]||(e[$l]=!0,id("selectionchange",!1,e))}}function ET(t,e,n,r){switch(rT(e)){case 1:var i=m1;break;case 4:i=g1;break;default:i=zp}n=i.bind(null,e,n,t),i=void 0,!sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$w(function(){var c=s,h=Fp(n),f=[];e:{var p=vT.get(t);if(p!==void 0){var g=Wp,w=t;switch(t){case"keypress":if(hu(n)===0)break e;case"keydown":case"keyup":g=N1;break;case"focusin":w="focus",g=Jh;break;case"focusout":w="blur",g=Jh;break;case"beforeblur":case"afterblur":g=Jh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=V1;break;case pT:case mT:case gT:g=T1;break;case yT:g=L1;break;case"scroll":g=y1;break;case"wheel":g=F1;break;case"copy":case"cut":case"paste":g=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ev}var T=(e&4)!==0,P=!T&&t==="scroll",E=T?p!==null?p+"Capture":null:p;T=[];for(var _=c,S;_!==null;){S=_;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,E!==null&&(D=ha(_,E),D!=null&&T.push(va(_,D,S)))),P)break;_=_.return}0<T.length&&(p=new g(p,w,null,n,h),f.push({event:p,listeners:T}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==nf&&(w=n.relatedTarget||n.fromElement)&&(fi(w)||w[Hn]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?fi(w):null,w!==null&&(P=Mi(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(T=vv,D="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(T=Ev,D="onPointerLeave",E="onPointerEnter",_="pointer"),P=g==null?p:ss(g),S=w==null?p:ss(w),p=new T(D,_+"leave",g,n,h),p.target=P,p.relatedTarget=S,D=null,fi(h)===c&&(T=new T(E,_+"enter",w,n,h),T.target=S,T.relatedTarget=P,D=T),P=D,g&&w)t:{for(T=g,E=w,_=0,S=T;S;S=Qi(S))_++;for(S=0,D=E;D;D=Qi(D))S++;for(;0<_-S;)T=Qi(T),_--;for(;0<S-_;)E=Qi(E),S--;for(;_--;){if(T===E||E!==null&&T===E.alternate)break t;T=Qi(T),E=Qi(E)}T=null}else T=null;g!==null&&Nv(f,p,g,T,!1),w!==null&&P!==null&&Nv(f,P,w,T,!0)}}e:{if(p=c?ss(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var O=K1;else if(Sv(p))if(uT)O=Q1;else{O=G1;var M=H1}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=q1);if(O&&(O=O(t,c))){lT(f,O,n,h);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&Xd(p,"number",p.value)}switch(M=c?ss(c):window,t){case"focusin":(Sv(M)||M.contentEditable==="true")&&(rs=M,cf=c,qo=null);break;case"focusout":qo=cf=rs=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Cv(f,n,h);break;case"selectionchange":if(J1)break;case"keydown":case"keyup":Cv(f,n,h)}var I;if(Hp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ns?oT(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(sT&&n.locale!=="ko"&&(ns||y!=="onCompositionStart"?y==="onCompositionEnd"&&ns&&(I=iT()):(wr=h,$p="value"in wr?wr.value:wr.textContent,ns=!0)),M=Fu(c,y),0<M.length&&(y=new _v(y,t,null,n,h),f.push({event:y,listeners:M}),I?y.data=I:(I=aT(n),I!==null&&(y.data=I)))),(I=U1?B1(t,n):z1(t,n))&&(c=Fu(c,"onBeforeInput"),0<c.length&&(h=new _v("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=I))}_T(f,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ha(t,n),s!=null&&r.unshift(va(t,s,i)),s=ha(t,e),s!=null&&r.push(va(t,s,i))),t=t.return}return r}function Qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ha(n,s),l!=null&&o.unshift(va(n,l,a))):i||(l=ha(n,s),l!=null&&o.push(va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nx=/\r\n?/g,rx=/\u0000|\uFFFD/g;function Dv(t){return(typeof t=="string"?t:""+t).replace(nx,`
`).replace(rx,"")}function Wl(t,e,n){if(e=Dv(e),Dv(t)!==e&&n)throw Error(U(425))}function ju(){}var df=null,ff=null;function pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mf=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,bv=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof bv<"u"?function(t){return bv.resolve(null).then(t).catch(ox)}:mf;function ox(t){setTimeout(function(){throw t})}function od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ys,_a="__reactProps$"+Ys,Hn="__reactContainer$"+Ys,gf="__reactEvents$"+Ys,ax="__reactListeners$"+Ys,lx="__reactHandles$"+Ys;function fi(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vv(t);t!==null;){if(n=t[fn])return n;t=Vv(t)}return e}t=n,n=t.parentNode}return null}function qa(t){return t=t[fn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Vc(t){return t[_a]||null}var yf=[],os=-1;function qr(t){return{current:t}}function ye(t){0>os||(t.current=yf[os],yf[os]=null,os--)}function de(t,e){os++,yf[os]=t.current,t.current=e}var Ur={},pt=qr(Ur),Rt=qr(!1),Ii=Ur;function ks(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function Uu(){ye(Rt),ye(pt)}function Ov(t,e,n){if(pt.current!==Ur)throw Error(U(168));de(pt,e),de(Rt,n)}function wT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,HC(t)||"Unknown",i));return Ae({},n,r)}function Bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Ii=pt.current,de(pt,t),de(Rt,Rt.current),!0}function Lv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=wT(t,e,Ii),r.__reactInternalMemoizedMergedChildContext=t,ye(Rt),ye(pt),de(pt,t)):ye(Rt),de(Rt,n)}var bn=null,Oc=!1,ad=!1;function TT(t){bn===null?bn=[t]:bn.push(t)}function ux(t){Oc=!0,TT(t)}function Qr(){if(!ad&&bn!==null){ad=!0;var t=0,e=le;try{var n=bn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,Oc=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),Gw(jp,Qr),i}finally{le=e,ad=!1}}return null}var as=[],ls=0,zu=null,$u=0,$t=[],Wt=0,Ai=null,Vn=1,On="";function ai(t,e){as[ls++]=$u,as[ls++]=zu,zu=t,$u=e}function ST(t,e,n){$t[Wt++]=Vn,$t[Wt++]=On,$t[Wt++]=Ai,Ai=t;var r=Vn;t=On;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vn=1<<32-rn(e)+i|n<<i|r,On=s+t}else Vn=1<<s|n<<i|r,On=t}function qp(t){t.return!==null&&(ai(t,1),ST(t,1,0))}function Qp(t){for(;t===zu;)zu=as[--ls],as[ls]=null,$u=as[--ls],as[ls]=null;for(;t===Ai;)Ai=$t[--Wt],$t[Wt]=null,On=$t[--Wt],$t[Wt]=null,Vn=$t[--Wt],$t[Wt]=null}var Vt=null,Dt=null,Ee=!1,tn=null;function IT(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vt=t,Dt=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ai!==null?{id:Vn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vt=t,Dt=null,!0):!1;default:return!1}}function vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _f(t){if(Ee){var e=Dt;if(e){var n=e;if(!Mv(t,e)){if(vf(t))throw Error(U(418));e=xr(n.nextSibling);var r=Vt;e&&Mv(t,e)?IT(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Vt=t)}}else{if(vf(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ee=!1,Vt=t}}}function Fv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function Kl(t){if(t!==Vt)return!1;if(!Ee)return Fv(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pf(t.type,t.memoizedProps)),e&&(e=Dt)){if(vf(t))throw AT(),Error(U(418));for(;e;)IT(t,e),e=xr(e.nextSibling)}if(Fv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Vt?xr(t.stateNode.nextSibling):null;return!0}function AT(){for(var t=Dt;t;)t=xr(t.nextSibling)}function Ns(){Dt=Vt=null,Ee=!1}function Yp(t){tn===null?tn=[t]:tn.push(t)}var cx=er.ReactCurrentBatchConfig;function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Hl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jv(t){var e=t._init;return e(t._payload)}function RT(t){function e(E,_){if(t){var S=E.deletions;S===null?(E.deletions=[_],E.flags|=16):S.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=br(E,_),E.index=0,E.sibling=null,E}function s(E,_,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<_?(E.flags|=2,_):S):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,_,S,D){return _===null||_.tag!==6?(_=pd(S,E.mode,D),_.return=E,_):(_=i(_,S),_.return=E,_)}function l(E,_,S,D){var O=S.type;return O===ts?h(E,_,S.props.children,D,S.key):_!==null&&(_.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===dr&&jv(O)===_.type)?(D=i(_,S.props),D.ref=Ro(E,_,S),D.return=E,D):(D=vu(S.type,S.key,S.props,null,E.mode,D),D.ref=Ro(E,_,S),D.return=E,D)}function c(E,_,S,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=md(S,E.mode,D),_.return=E,_):(_=i(_,S.children||[]),_.return=E,_)}function h(E,_,S,D,O){return _===null||_.tag!==7?(_=Ei(S,E.mode,D,O),_.return=E,_):(_=i(_,S),_.return=E,_)}function f(E,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=pd(""+_,E.mode,S),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ol:return S=vu(_.type,_.key,_.props,null,E.mode,S),S.ref=Ro(E,null,_),S.return=E,S;case es:return _=md(_,E.mode,S),_.return=E,_;case dr:var D=_._init;return f(E,D(_._payload),S)}if(Do(_)||wo(_))return _=Ei(_,E.mode,S,null),_.return=E,_;Hl(E,_)}return null}function p(E,_,S,D){var O=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:a(E,_,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ol:return S.key===O?l(E,_,S,D):null;case es:return S.key===O?c(E,_,S,D):null;case dr:return O=S._init,p(E,_,O(S._payload),D)}if(Do(S)||wo(S))return O!==null?null:h(E,_,S,D,null);Hl(E,S)}return null}function g(E,_,S,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(S)||null,a(_,E,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ol:return E=E.get(D.key===null?S:D.key)||null,l(_,E,D,O);case es:return E=E.get(D.key===null?S:D.key)||null,c(_,E,D,O);case dr:var M=D._init;return g(E,_,S,M(D._payload),O)}if(Do(D)||wo(D))return E=E.get(S)||null,h(_,E,D,O,null);Hl(_,D)}return null}function w(E,_,S,D){for(var O=null,M=null,I=_,y=_=0,A=null;I!==null&&y<S.length;y++){I.index>y?(A=I,I=null):A=I.sibling;var C=p(E,I,S[y],D);if(C===null){I===null&&(I=A);break}t&&I&&C.alternate===null&&e(E,I),_=s(C,_,y),M===null?O=C:M.sibling=C,M=C,I=A}if(y===S.length)return n(E,I),Ee&&ai(E,y),O;if(I===null){for(;y<S.length;y++)I=f(E,S[y],D),I!==null&&(_=s(I,_,y),M===null?O=I:M.sibling=I,M=I);return Ee&&ai(E,y),O}for(I=r(E,I);y<S.length;y++)A=g(I,E,y,S[y],D),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?y:A.key),_=s(A,_,y),M===null?O=A:M.sibling=A,M=A);return t&&I.forEach(function(k){return e(E,k)}),Ee&&ai(E,y),O}function T(E,_,S,D){var O=wo(S);if(typeof O!="function")throw Error(U(150));if(S=O.call(S),S==null)throw Error(U(151));for(var M=O=null,I=_,y=_=0,A=null,C=S.next();I!==null&&!C.done;y++,C=S.next()){I.index>y?(A=I,I=null):A=I.sibling;var k=p(E,I,C.value,D);if(k===null){I===null&&(I=A);break}t&&I&&k.alternate===null&&e(E,I),_=s(k,_,y),M===null?O=k:M.sibling=k,M=k,I=A}if(C.done)return n(E,I),Ee&&ai(E,y),O;if(I===null){for(;!C.done;y++,C=S.next())C=f(E,C.value,D),C!==null&&(_=s(C,_,y),M===null?O=C:M.sibling=C,M=C);return Ee&&ai(E,y),O}for(I=r(E,I);!C.done;y++,C=S.next())C=g(I,E,y,C.value,D),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?y:C.key),_=s(C,_,y),M===null?O=C:M.sibling=C,M=C);return t&&I.forEach(function(b){return e(E,b)}),Ee&&ai(E,y),O}function P(E,_,S,D){if(typeof S=="object"&&S!==null&&S.type===ts&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ol:e:{for(var O=S.key,M=_;M!==null;){if(M.key===O){if(O=S.type,O===ts){if(M.tag===7){n(E,M.sibling),_=i(M,S.props.children),_.return=E,E=_;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===dr&&jv(O)===M.type){n(E,M.sibling),_=i(M,S.props),_.ref=Ro(E,M,S),_.return=E,E=_;break e}n(E,M);break}else e(E,M);M=M.sibling}S.type===ts?(_=Ei(S.props.children,E.mode,D,S.key),_.return=E,E=_):(D=vu(S.type,S.key,S.props,null,E.mode,D),D.ref=Ro(E,_,S),D.return=E,E=D)}return o(E);case es:e:{for(M=S.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(E,_.sibling),_=i(_,S.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=md(S,E.mode,D),_.return=E,E=_}return o(E);case dr:return M=S._init,P(E,_,M(S._payload),D)}if(Do(S))return w(E,_,S,D);if(wo(S))return T(E,_,S,D);Hl(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,S),_.return=E,E=_):(n(E,_),_=pd(S,E.mode,D),_.return=E,E=_),o(E)):n(E,_)}return P}var Ds=RT(!0),PT=RT(!1),Wu=qr(null),Ku=null,us=null,Xp=null;function Jp(){Xp=us=Ku=null}function Zp(t){var e=Wu.current;ye(Wu),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){Ku=t,Xp=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Xp!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(Ku===null)throw Error(U(308));us=t,Ku.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var pi=null;function em(t){pi===null?pi=[t]:pi.push(t)}function CT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,em(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,em(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Up(t,n)}}function Uv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hu(t,e,n,r){var i=t.updateQueue;fr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,T=a;switch(p=e,g=n,T.tag){case 1:if(w=T.payload,typeof w=="function"){f=w.call(g,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=T.payload,p=typeof w=="function"?w.call(g,f,p):w,p==null)break e;f=Ae({},f,p);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pi|=o,t.lanes=o,t.memoizedState=f}}function Bv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Qa={},gn=qr(Qa),Ea=qr(Qa),wa=qr(Qa);function mi(t){if(t===Qa)throw Error(U(174));return t}function nm(t,e){switch(de(wa,e),de(Ea,t),de(gn,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zd(e,t)}ye(gn),de(gn,e)}function bs(){ye(gn),ye(Ea),ye(wa)}function kT(t){mi(wa.current);var e=mi(gn.current),n=Zd(e,t.type);e!==n&&(de(Ea,t),de(gn,n))}function rm(t){Ea.current===t&&(ye(gn),ye(Ea))}var Te=qr(0);function Gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ld=[];function im(){for(var t=0;t<ld.length;t++)ld[t]._workInProgressVersionPrimary=null;ld.length=0}var fu=er.ReactCurrentDispatcher,ud=er.ReactCurrentBatchConfig,Ri=0,Ie=null,Fe=null,We=null,qu=!1,Qo=!1,Ta=0,hx=0;function st(){throw Error(U(321))}function sm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function om(t,e,n,r,i,s){if(Ri=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fu.current=t===null||t.memoizedState===null?mx:gx,t=n(r,i),Qo){s=0;do{if(Qo=!1,Ta=0,25<=s)throw Error(U(301));s+=1,We=Fe=null,e.updateQueue=null,fu.current=yx,t=n(r,i)}while(Qo)}if(fu.current=Qu,e=Fe!==null&&Fe.next!==null,Ri=0,We=Fe=Ie=null,qu=!1,e)throw Error(U(300));return t}function am(){var t=Ta!==0;return Ta=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ie.memoizedState=We=t:We=We.next=t,We}function qt(){if(Fe===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=We===null?Ie.memoizedState:We.next;if(e!==null)We=e,Fe=t;else{if(t===null)throw Error(U(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Ie.memoizedState=We=t:We=We.next=t}return We}function Sa(t,e){return typeof e=="function"?e(t):e}function cd(t){var e=qt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ri&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ie.lanes|=h,Pi|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,an(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=qt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);an(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function NT(){}function DT(t,e){var n=Ie,r=qt(),i=e(),s=!an(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,lm(OT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Ia(9,VT.bind(null,n,r,i,e),void 0,null),He===null)throw Error(U(349));Ri&30||bT(n,e,i)}return i}function bT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function VT(t,e,n,r){e.value=n,e.getSnapshot=r,LT(e)&&MT(t)}function OT(t,e,n){return n(function(){LT(e)&&MT(t)})}function LT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function MT(t){var e=Gn(t,1);e!==null&&sn(e,t,1,-1)}function zv(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},e.queue=t,t=t.dispatch=px.bind(null,Ie,t),[e.memoizedState,t]}function Ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function FT(){return qt().memoizedState}function pu(t,e,n,r){var i=hn();Ie.flags|=t,i.memoizedState=Ia(1|e,n,void 0,r===void 0?null:r)}function Lc(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&sm(r,o.deps)){i.memoizedState=Ia(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Ia(1|e,n,s,r)}function $v(t,e){return pu(8390656,8,t,e)}function lm(t,e){return Lc(2048,8,t,e)}function jT(t,e){return Lc(4,2,t,e)}function UT(t,e){return Lc(4,4,t,e)}function BT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zT(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,BT.bind(null,e,t),n)}function um(){}function $T(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function WT(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function KT(t,e,n){return Ri&21?(an(n,e)||(n=Yw(),Ie.lanes|=n,Pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function dx(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=ud.transition;ud.transition={};try{t(!1),e()}finally{le=n,ud.transition=r}}function HT(){return qt().memoizedState}function fx(t,e,n){var r=Dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},GT(t))qT(e,n);else if(n=CT(t,e,n,r),n!==null){var i=Et();sn(n,t,r,i),QT(n,e,r)}}function px(t,e,n){var r=Dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(GT(t))qT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,an(a,o)){var l=e.interleaved;l===null?(i.next=i,em(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=CT(t,e,i,r),n!==null&&(i=Et(),sn(n,t,r,i),QT(n,e,r))}}function GT(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function qT(t,e){Qo=qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function QT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Up(t,n)}}var Qu={readContext:Gt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},mx={readContext:Gt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:$v,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pu(4194308,4,BT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return pu(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fx.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:zv,useDebugValue:um,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=zv(!1),e=t[0];return t=dx.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=hn();if(Ee){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),He===null)throw Error(U(349));Ri&30||bT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$v(OT.bind(null,r,s,t),[t]),r.flags|=2048,Ia(9,VT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=He.identifierPrefix;if(Ee){var n=On,r=Vn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gx={readContext:Gt,useCallback:$T,useContext:Gt,useEffect:lm,useImperativeHandle:zT,useInsertionEffect:jT,useLayoutEffect:UT,useMemo:WT,useReducer:cd,useRef:FT,useState:function(){return cd(Sa)},useDebugValue:um,useDeferredValue:function(t){var e=qt();return KT(e,Fe.memoizedState,t)},useTransition:function(){var t=cd(Sa)[0],e=qt().memoizedState;return[t,e]},useMutableSource:NT,useSyncExternalStore:DT,useId:HT,unstable_isNewReconciler:!1},yx={readContext:Gt,useCallback:$T,useContext:Gt,useEffect:lm,useImperativeHandle:zT,useInsertionEffect:jT,useLayoutEffect:UT,useMemo:WT,useReducer:hd,useRef:FT,useState:function(){return hd(Sa)},useDebugValue:um,useDeferredValue:function(t){var e=qt();return Fe===null?e.memoizedState=t:KT(e,Fe.memoizedState,t)},useTransition:function(){var t=hd(Sa)[0],e=qt().memoizedState;return[t,e]},useMutableSource:NT,useSyncExternalStore:DT,useId:HT,unstable_isNewReconciler:!1};function Jt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Dr(t),s=jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(sn(e,t,i,r),du(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Dr(t),s=jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(sn(e,t,i,r),du(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Dr(t),i=jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(sn(e,t,r,n),du(e,t,r))}};function Wv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,r)||!ga(i,s):!0}function YT(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=Pt(e)?Ii:pt.current,r=e.contextTypes,s=(r=r!=null)?ks(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function Tf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},tm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=Pt(e)?Ii:pt.current,i.context=ks(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Hu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",r=e;do n+=KC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function dd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function XT(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xu||(Xu=!0,bf=r),Sf(t,e)},n}function JT(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sf(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Dx.bind(null,t,e,n),e.then(t,t))}function Gv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var _x=er.ReactCurrentOwner,At=!1;function _t(t,e,n,r){e.child=t===null?PT(e,null,n,r):Ds(e,t.child,n,r)}function Qv(t,e,n,r,i){n=n.render;var s=e.ref;return Ts(e,i),r=om(t,e,n,r,s,i),n=am(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Ee&&n&&qp(e),e.flags|=1,_t(t,e,r,i),e.child)}function Yv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ym(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZT(t,e,s,r,i)):(t=vu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function ZT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ga(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,qn(t,e,i)}return If(t,e,n,r,i)}function eS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(hs,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(hs,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(hs,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(hs,kt),kt|=r;return _t(t,e,i,n),e.child}function tS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function If(t,e,n,r,i){var s=Pt(n)?Ii:pt.current;return s=ks(e,s),Ts(e,i),n=om(t,e,n,r,s,i),r=am(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Ee&&r&&qp(e),e.flags|=1,_t(t,e,n,i),e.child)}function Xv(t,e,n,r,i){if(Pt(n)){var s=!0;Bu(e)}else s=!1;if(Ts(e,i),e.stateNode===null)mu(t,e),YT(e,n,r),Tf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gt(c):(c=Pt(n)?Ii:pt.current,c=ks(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Kv(e,o,r,c),fr=!1;var p=e.memoizedState;o.state=p,Hu(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Rt.current||fr?(typeof h=="function"&&(wf(e,n,h,r),l=e.memoizedState),(a=fr||Wv(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,xT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jt(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gt(l):(l=Pt(n)?Ii:pt.current,l=ks(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Kv(e,o,r,l),fr=!1,p=e.memoizedState,o.state=p,Hu(e,r,o,i);var w=e.memoizedState;a!==f||p!==w||Rt.current||fr?(typeof g=="function"&&(wf(e,n,g,r),w=e.memoizedState),(c=fr||Wv(e,n,c,r,p,w,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Af(t,e,n,r,s,i)}function Af(t,e,n,r,i,s){tS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lv(e,n,!1),qn(t,e,s);r=e.stateNode,_x.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,a,s)):_t(t,e,a,s),e.memoizedState=r.state,i&&Lv(e,n,!0),e.child}function nS(t){var e=t.stateNode;e.pendingContext?Ov(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ov(t,e.context,!1),nm(t,e.containerInfo)}function Jv(t,e,n,r,i){return Ns(),Yp(i),e.flags|=256,_t(t,e,n,r),e.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function Pf(t){return{baseLanes:t,cachePool:null,transitions:null}}function rS(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Te,i&1),t===null)return _f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,r,0,null),t=Ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pf(n),e.memoizedState=Rf,t):cm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ex(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=br(a,s):(s=Ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rf,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cm(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gl(t,e,n,r){return r!==null&&Yp(r),Ds(e,t.child,null,n),t=cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ex(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=dd(Error(U(422))),Gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Uc({mode:"visible",children:r.children},i,0,null),s=Ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ds(e,t.child,null,o),e.child.memoizedState=Pf(o),e.memoizedState=Rf,s);if(!(e.mode&1))return Gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=dd(s,r,void 0),Gl(t,e,o,r)}if(a=(o&t.childLanes)!==0,At||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),sn(r,t,i,-1))}return gm(),r=dd(Error(U(421))),Gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Dt=xr(i.nextSibling),Vt=e,Ee=!0,tn=null,t!==null&&($t[Wt++]=Vn,$t[Wt++]=On,$t[Wt++]=Ai,Vn=t.id,On=t.overflow,Ai=e),e=cm(e,r.children),e.flags|=4096,e)}function Zv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ef(t.return,e,n)}function fd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(_t(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zv(t,n,e);else if(t.tag===19)Zv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),fd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}fd(e,!0,n,null,s);break;case"together":fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wx(t,e,n){switch(e.tag){case 3:nS(e),Ns();break;case 5:kT(e);break;case 1:Pt(e.type)&&Bu(e);break;case 4:nm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?rS(t,e,n):(de(Te,Te.current&1),t=qn(t,e,n),t!==null?t.sibling:null);de(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,eS(t,e,n)}return qn(t,e,n)}var sS,Cf,oS,aS;sS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cf=function(){};oS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mi(gn.current);var s=null;switch(n){case"input":i=Qd(t,i),r=Qd(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Jd(t,i),r=Jd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ju)}ef(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};aS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Po(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tx(t,e,n){var r=e.pendingProps;switch(Qp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return Pt(e.type)&&Uu(),ot(e),null;case 3:return r=e.stateNode,bs(),ye(Rt),ye(pt),im(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(Lf(tn),tn=null))),Cf(t,e),ot(e),null;case 5:rm(e);var i=mi(wa.current);if(n=e.type,t!==null&&e.stateNode!=null)oS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return ot(e),null}if(t=mi(gn.current),Kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[_a]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)me(Vo[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":lv(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":cv(r,s),me("invalid",r)}ef(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wl(r.textContent,a,t),i=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Ll(r),uv(r,s,!0);break;case"textarea":Ll(r),hv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ju)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ow(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[_a]=r,sS(t,e,!1,!1),e.stateNode=t;e:{switch(o=tf(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vo.length;i++)me(Vo[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":lv(t,r),i=Qd(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),me("invalid",t);break;case"textarea":cv(t,r),i=Jd(t,r),me("invalid",t);break;default:i=r}ef(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&me("scroll",t):l!=null&&Vp(t,s,l,o))}switch(n){case"input":Ll(t),uv(t,r,!1);break;case"textarea":Ll(t),hv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vs(t,!!r.multiple,s,!1):r.defaultValue!=null&&vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ju)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)aS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=mi(wa.current),mi(gn.current),Kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Vt,t!==null))switch(t.tag){case 3:Wl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return ot(e),null;case 13:if(ye(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Dt!==null&&e.mode&1&&!(e.flags&128))AT(),Ns(),e.flags|=98560,s=!1;else if(s=Kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[fn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else tn!==null&&(Lf(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?je===0&&(je=3):gm())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return bs(),Cf(t,e),t===null&&ya(e.stateNode.containerInfo),ot(e),null;case 10:return Zp(e.type._context),ot(e),null;case 17:return Pt(e.type)&&Uu(),ot(e),null;case 19:if(ye(Te),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Po(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gu(t),o!==null){for(e.flags|=128,Po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>Os&&(e.flags|=128,r=!0,Po(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return ot(e),null}else 2*be()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,r=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Te.current,de(Te,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return mm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Sx(t,e){switch(Qp(e),e.tag){case 1:return Pt(e.type)&&Uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),ye(Rt),ye(pt),im(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rm(e),null;case 13:if(ye(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Te),null;case 4:return bs(),null;case 10:return Zp(e.type._context),null;case 22:case 23:return mm(),null;case 24:return null;default:return null}}var ql=!1,ct=!1,Ix=typeof WeakSet=="function"?WeakSet:Set,W=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function xf(t,e,n){try{n()}catch(r){xe(t,e,r)}}var e_=!1;function Ax(t,e){if(df=Lu,t=dT(),Gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ff={focusedElem:t,selectionRange:n},Lu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var T=w.memoizedProps,P=w.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?T:Jt(e.type,T),P);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){xe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return w=e_,e_=!1,w}function Yo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xf(e,n,s)}i=i.next}while(i!==r)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lS(t){var e=t.alternate;e!==null&&(t.alternate=null,lS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[_a],delete e[gf],delete e[ax],delete e[lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uS(t){return t.tag===5||t.tag===3||t.tag===4}function t_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ju));else if(r!==4&&(t=t.child,t!==null))for(Nf(t,e,n),t=t.sibling;t!==null;)Nf(t,e,n),t=t.sibling}function Df(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}var qe=null,en=!1;function ar(t,e,n){for(n=n.child;n!==null;)cS(t,e,n),n=n.sibling}function cS(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(kc,n)}catch{}switch(n.tag){case 5:ct||cs(n,e);case 6:var r=qe,i=en;qe=null,ar(t,e,n),qe=r,en=i,qe!==null&&(en?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(en?(t=qe,n=n.stateNode,t.nodeType===8?od(t.parentNode,n):t.nodeType===1&&od(t,n),pa(t)):od(qe,n.stateNode));break;case 4:r=qe,i=en,qe=n.stateNode.containerInfo,en=!0,ar(t,e,n),qe=r,en=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xf(n,e,o),i=i.next}while(i!==r)}ar(t,e,n);break;case 1:if(!ct&&(cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,ar(t,e,n),ct=r):ar(t,e,n);break;default:ar(t,e,n)}}function n_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ix),e.forEach(function(r){var i=Vx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,en=!1;break e;case 3:qe=a.stateNode.containerInfo,en=!0;break e;case 4:qe=a.stateNode.containerInfo,en=!0;break e}a=a.return}if(qe===null)throw Error(U(160));cS(s,o,i),qe=null,en=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hS(e,t),e=e.sibling}function hS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),cn(t),r&4){try{Yo(3,t,t.return),Fc(3,t)}catch(T){xe(t,t.return,T)}try{Yo(5,t,t.return)}catch(T){xe(t,t.return,T)}}break;case 1:Yt(e,t),cn(t),r&512&&n!==null&&cs(n,n.return);break;case 5:if(Yt(e,t),cn(t),r&512&&n!==null&&cs(n,n.return),t.flags&32){var i=t.stateNode;try{ca(i,"")}catch(T){xe(t,t.return,T)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&bw(i,s),tf(a,o);var c=tf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?Fw(i,f):h==="dangerouslySetInnerHTML"?Lw(i,f):h==="children"?ca(i,f):Vp(i,h,f,c)}switch(a){case"input":Yd(i,s);break;case"textarea":Vw(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?vs(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?vs(i,!!s.multiple,s.defaultValue,!0):vs(i,!!s.multiple,s.multiple?[]:"",!1))}i[_a]=s}catch(T){xe(t,t.return,T)}}break;case 6:if(Yt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(T){xe(t,t.return,T)}}break;case 3:if(Yt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(T){xe(t,t.return,T)}break;case 4:Yt(e,t),cn(t);break;case 13:Yt(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fm=be())),r&4&&n_(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(c=ct)||h,Yt(e,t),ct=c):Yt(e,t),cn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(f=W=h;W!==null;){switch(p=W,g=p.child,p.tag){case 0:case 11:case 14:case 15:Yo(4,p,p.return);break;case 1:cs(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(T){xe(r,n,T)}}break;case 5:cs(p,p.return);break;case 22:if(p.memoizedState!==null){i_(f);continue}}g!==null?(g.return=p,W=g):i_(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mw("display",o))}catch(T){xe(t,t.return,T)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(T){xe(t,t.return,T)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yt(e,t),cn(t),r&4&&n_(t);break;case 21:break;default:Yt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uS(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ca(i,""),r.flags&=-33);var s=t_(t);Df(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=t_(t);Nf(t,a,o);break;default:throw Error(U(161))}}catch(l){xe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rx(t,e,n){W=t,dS(t)}function dS(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ql;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ct;a=ql;var c=ct;if(ql=o,(ct=l)&&!c)for(W=i;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?s_(i):l!==null?(l.return=o,W=l):s_(i);for(;s!==null;)W=s,dS(s),s=s.sibling;W=i,ql=a,ct=c}r_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):r_(t)}}function r_(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||Fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&pa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ct||e.flags&512&&kf(e)}catch(p){xe(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function i_(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function s_(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(l){xe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){xe(e,i,l)}}var s=e.return;try{kf(e)}catch(l){xe(e,s,l)}break;case 5:var o=e.return;try{kf(e)}catch(l){xe(e,o,l)}}}catch(l){xe(e,e.return,l)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var Px=Math.ceil,Yu=er.ReactCurrentDispatcher,hm=er.ReactCurrentOwner,Ht=er.ReactCurrentBatchConfig,ie=0,He=null,Le=null,Je=0,kt=0,hs=qr(0),je=0,Aa=null,Pi=0,jc=0,dm=0,Xo=null,St=null,fm=0,Os=1/0,Nn=null,Xu=!1,bf=null,Nr=null,Ql=!1,Tr=null,Ju=0,Jo=0,Vf=null,gu=-1,yu=0;function Et(){return ie&6?be():gu!==-1?gu:gu=be()}function Dr(t){return t.mode&1?ie&2&&Je!==0?Je&-Je:cx.transition!==null?(yu===0&&(yu=Yw()),yu):(t=le,t!==0||(t=window.event,t=t===void 0?16:rT(t.type)),t):1}function sn(t,e,n,r){if(50<Jo)throw Jo=0,Vf=null,Error(U(185));Ha(t,n,r),(!(ie&2)||t!==He)&&(t===He&&(!(ie&2)&&(jc|=n),je===4&&mr(t,Je)),Ct(t,r),n===1&&ie===0&&!(e.mode&1)&&(Os=be()+500,Oc&&Qr()))}function Ct(t,e){var n=t.callbackNode;c1(t,e);var r=Ou(t,t===He?Je:0);if(r===0)n!==null&&pv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pv(n),e===1)t.tag===0?ux(o_.bind(null,t)):TT(o_.bind(null,t)),sx(function(){!(ie&6)&&Qr()}),n=null;else{switch(Xw(r)){case 1:n=jp;break;case 4:n=qw;break;case 16:n=Vu;break;case 536870912:n=Qw;break;default:n=Vu}n=ES(n,fS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fS(t,e){if(gu=-1,yu=0,ie&6)throw Error(U(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var r=Ou(t,t===He?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zu(t,r);else{e=r;var i=ie;ie|=2;var s=mS();(He!==t||Je!==e)&&(Nn=null,Os=be()+500,_i(t,e));do try{kx();break}catch(a){pS(t,a)}while(!0);Jp(),Yu.current=s,ie=i,Le!==null?e=0:(He=null,Je=0,e=je)}if(e!==0){if(e===2&&(i=af(t),i!==0&&(r=i,e=Of(t,i))),e===1)throw n=Aa,_i(t,0),mr(t,r),Ct(t,be()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Cx(i)&&(e=Zu(t,r),e===2&&(s=af(t),s!==0&&(r=s,e=Of(t,s))),e===1))throw n=Aa,_i(t,0),mr(t,r),Ct(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:li(t,St,Nn);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=fm+500-be(),10<e)){if(Ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mf(li.bind(null,t,St,Nn),e);break}li(t,St,Nn);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Px(r/1960))-r,10<r){t.timeoutHandle=mf(li.bind(null,t,St,Nn),r);break}li(t,St,Nn);break;case 5:li(t,St,Nn);break;default:throw Error(U(329))}}}return Ct(t,be()),t.callbackNode===n?fS.bind(null,t):null}function Of(t,e){var n=Xo;return t.current.memoizedState.isDehydrated&&(_i(t,e).flags|=256),t=Zu(t,e),t!==2&&(e=St,St=n,e!==null&&Lf(e)),t}function Lf(t){St===null?St=t:St.push.apply(St,t)}function Cx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!an(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~dm,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function o_(t){if(ie&6)throw Error(U(327));Ss();var e=Ou(t,0);if(!(e&1))return Ct(t,be()),null;var n=Zu(t,e);if(t.tag!==0&&n===2){var r=af(t);r!==0&&(e=r,n=Of(t,r))}if(n===1)throw n=Aa,_i(t,0),mr(t,e),Ct(t,be()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,li(t,St,Nn),Ct(t,be()),null}function pm(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Os=be()+500,Oc&&Qr())}}function Ci(t){Tr!==null&&Tr.tag===0&&!(ie&6)&&Ss();var e=ie;ie|=1;var n=Ht.transition,r=le;try{if(Ht.transition=null,le=1,t)return t()}finally{le=r,Ht.transition=n,ie=e,!(ie&6)&&Qr()}}function mm(){kt=hs.current,ye(hs)}function _i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ix(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Qp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uu();break;case 3:bs(),ye(Rt),ye(pt),im();break;case 5:rm(r);break;case 4:bs();break;case 13:ye(Te);break;case 19:ye(Te);break;case 10:Zp(r.type._context);break;case 22:case 23:mm()}n=n.return}if(He=t,Le=t=br(t.current,null),Je=kt=e,je=0,Aa=null,dm=jc=Pi=0,St=Xo=null,pi!==null){for(e=0;e<pi.length;e++)if(n=pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pi=null}return t}function pS(t,e){do{var n=Le;try{if(Jp(),fu.current=Qu,qu){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qu=!1}if(Ri=0,We=Fe=Ie=null,Qo=!1,Ta=0,hm.current=null,n===null||n.return===null){je=1,Aa=e,Le=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Gv(o);if(g!==null){g.flags&=-257,qv(g,o,a,s,e),g.mode&1&&Hv(s,c,e),e=g,l=c;var w=e.updateQueue;if(w===null){var T=new Set;T.add(l),e.updateQueue=T}else w.add(l);break e}else{if(!(e&1)){Hv(s,c,e),gm();break e}l=Error(U(426))}}else if(Ee&&a.mode&1){var P=Gv(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),qv(P,o,a,s,e),Yp(Vs(l,a));break e}}s=l=Vs(l,a),je!==4&&(je=2),Xo===null?Xo=[s]:Xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=XT(s,l,e);Uv(s,E);break e;case 1:a=l;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Nr===null||!Nr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=JT(s,a,e);Uv(s,D);break e}}s=s.return}while(s!==null)}yS(n)}catch(O){e=O,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function mS(){var t=Yu.current;return Yu.current=Qu,t===null?Qu:t}function gm(){(je===0||je===3||je===2)&&(je=4),He===null||!(Pi&268435455)&&!(jc&268435455)||mr(He,Je)}function Zu(t,e){var n=ie;ie|=2;var r=mS();(He!==t||Je!==e)&&(Nn=null,_i(t,e));do try{xx();break}catch(i){pS(t,i)}while(!0);if(Jp(),ie=n,Yu.current=r,Le!==null)throw Error(U(261));return He=null,Je=0,je}function xx(){for(;Le!==null;)gS(Le)}function kx(){for(;Le!==null&&!t1();)gS(Le)}function gS(t){var e=_S(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?yS(t):Le=e,hm.current=null}function yS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sx(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Le=null;return}}else if(n=Tx(n,e,kt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);je===0&&(je=5)}function li(t,e,n){var r=le,i=Ht.transition;try{Ht.transition=null,le=1,Nx(t,e,n,r)}finally{Ht.transition=i,le=r}return null}function Nx(t,e,n,r){do Ss();while(Tr!==null);if(ie&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(h1(t,s),t===He&&(Le=He=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,ES(Vu,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=le;le=1;var a=ie;ie|=4,hm.current=null,Ax(t,n),hS(n,t),X1(ff),Lu=!!df,ff=df=null,t.current=n,Rx(n),n1(),ie=a,le=o,Ht.transition=s}else t.current=n;if(Ql&&(Ql=!1,Tr=t,Ju=i),s=t.pendingLanes,s===0&&(Nr=null),s1(n.stateNode),Ct(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xu)throw Xu=!1,t=bf,bf=null,t;return Ju&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===Vf?Jo++:(Jo=0,Vf=t):Jo=0,Qr(),null}function Ss(){if(Tr!==null){var t=Xw(Ju),e=Ht.transition,n=le;try{if(Ht.transition=null,le=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,Ju=0,ie&6)throw Error(U(331));var i=ie;for(ie|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:Yo(8,h,s)}var f=h.child;if(f!==null)f.return=h,W=f;else for(;W!==null;){h=W;var p=h.sibling,g=h.return;if(lS(h),h===c){W=null;break}if(p!==null){p.return=g,W=p;break}W=g}}}var w=s.alternate;if(w!==null){var T=w.child;if(T!==null){w.child=null;do{var P=T.sibling;T.sibling=null,T=P}while(T!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,W=E;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=_;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fc(9,a)}}catch(O){xe(a,a.return,O)}if(a===o){W=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,W=D;break e}W=a.return}}if(ie=i,Qr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(kc,t)}catch{}r=!0}return r}finally{le=n,Ht.transition=e}}return!1}function a_(t,e,n){e=Vs(n,e),e=XT(t,e,1),t=kr(t,e,1),e=Et(),t!==null&&(Ha(t,1,e),Ct(t,e))}function xe(t,e,n){if(t.tag===3)a_(t,t,n);else for(;e!==null;){if(e.tag===3){a_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=Vs(n,t),t=JT(e,t,1),e=kr(e,t,1),t=Et(),e!==null&&(Ha(e,1,t),Ct(e,t));break}}e=e.return}}function Dx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Je&n)===n&&(je===4||je===3&&(Je&130023424)===Je&&500>be()-fm?_i(t,0):dm|=n),Ct(t,e)}function vS(t,e){e===0&&(t.mode&1?(e=jl,jl<<=1,!(jl&130023424)&&(jl=4194304)):e=1);var n=Et();t=Gn(t,e),t!==null&&(Ha(t,e,n),Ct(t,n))}function bx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vS(t,n)}function Vx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),vS(t,n)}var _S;_S=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,wx(t,e,n);At=!!(t.flags&131072)}else At=!1,Ee&&e.flags&1048576&&ST(e,$u,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mu(t,e),t=e.pendingProps;var i=ks(e,pt.current);Ts(e,n),i=om(null,e,r,t,i,n);var s=am();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,Bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tm(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,Tf(e,r,t,n),e=Af(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&qp(e),_t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Lx(r),t=Jt(r,t),i){case 0:e=If(null,e,r,t,n);break e;case 1:e=Xv(null,e,r,t,n);break e;case 11:e=Qv(null,e,r,t,n);break e;case 14:e=Yv(null,e,r,Jt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),If(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Xv(t,e,r,i,n);case 3:e:{if(nS(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,xT(t,e),Hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vs(Error(U(423)),e),e=Jv(t,e,r,n,i);break e}else if(r!==i){i=Vs(Error(U(424)),e),e=Jv(t,e,r,n,i);break e}else for(Dt=xr(e.stateNode.containerInfo.firstChild),Vt=e,Ee=!0,tn=null,n=PT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),r===i){e=qn(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return kT(e),t===null&&_f(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pf(r,i)?o=null:s!==null&&pf(r,s)&&(e.flags|=32),tS(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&_f(e),null;case 13:return rS(t,e,n);case 4:return nm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ds(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Qv(t,e,r,i,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Wu,r._currentValue),r._currentValue=o,s!==null)if(an(s.value,o)){if(s.children===i.children&&!Rt.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=jn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ts(e,n),i=Gt(i),r=r(i),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),Yv(t,e,r,i,n);case 15:return ZT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),mu(t,e),e.tag=1,Pt(r)?(t=!0,Bu(e)):t=!1,Ts(e,n),YT(e,r,i),Tf(e,r,i,n),Af(null,e,r,!0,t,n);case 19:return iS(t,e,n);case 22:return eS(t,e,n)}throw Error(U(156,e.tag))};function ES(t,e){return Gw(t,e)}function Ox(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new Ox(t,e,n,r)}function ym(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lx(t){if(typeof t=="function")return ym(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lp)return 11;if(t===Mp)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ym(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return Ei(n.children,i,s,e);case Op:o=8,i|=8;break;case Kd:return t=Kt(12,n,e,i|2),t.elementType=Kd,t.lanes=s,t;case Hd:return t=Kt(13,n,e,i),t.elementType=Hd,t.lanes=s,t;case Gd:return t=Kt(19,n,e,i),t.elementType=Gd,t.lanes=s,t;case kw:return Uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cw:o=10;break e;case xw:o=9;break e;case Lp:o=11;break e;case Mp:o=14;break e;case dr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ei(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Uc(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=kw,t.lanes=n,t.stateNode={isHidden:!1},t}function pd(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function md(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Mx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qh(0),this.expirationTimes=Qh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vm(t,e,n,r,i,s,o,a,l){return t=new Mx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tm(s),t}function Fx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function wS(t){if(!t)return Ur;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Pt(n))return wT(t,n,e)}return e}function TS(t,e,n,r,i,s,o,a,l){return t=vm(n,r,!0,t,i,s,o,a,l),t.context=wS(null),n=t.current,r=Et(),i=Dr(n),s=jn(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,Ha(t,i,r),Ct(t,r),t}function Bc(t,e,n,r){var i=e.current,s=Et(),o=Dr(i);return n=wS(n),e.context===null?e.context=n:e.pendingContext=n,e=jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(sn(t,i,o,s),du(t,i,o)),o}function ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function l_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _m(t,e){l_(t,e),(t=t.alternate)&&l_(t,e)}function jx(){return null}var SS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Em(t){this._internalRoot=t}zc.prototype.render=Em.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Bc(t,e,null,null)};zc.prototype.unmount=Em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ci(function(){Bc(null,t,null,null)}),e[Hn]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=eT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&nT(t)}};function wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u_(){}function Ux(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ec(o);s.call(c)}}var o=TS(e,r,t,0,null,!1,!1,"",u_);return t._reactRootContainer=o,t[Hn]=o.current,ya(t.nodeType===8?t.parentNode:t),Ci(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ec(l);a.call(c)}}var l=vm(t,0,!1,null,null,!1,!1,"",u_);return t._reactRootContainer=l,t[Hn]=l.current,ya(t.nodeType===8?t.parentNode:t),Ci(function(){Bc(e,l,n,r)}),l}function Wc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ec(o);a.call(l)}}Bc(e,o,t,i)}else o=Ux(n,e,t,i,r);return ec(o)}Jw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(Up(e,n|1),Ct(e,be()),!(ie&6)&&(Os=be()+500,Qr()))}break;case 13:Ci(function(){var r=Gn(t,1);if(r!==null){var i=Et();sn(r,t,1,i)}}),_m(t,1)}};Bp=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=Et();sn(e,t,134217728,n)}_m(t,134217728)}};Zw=function(t){if(t.tag===13){var e=Dr(t),n=Gn(t,e);if(n!==null){var r=Et();sn(n,t,e,r)}_m(t,e)}};eT=function(){return le};tT=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};rf=function(t,e,n){switch(e){case"input":if(Yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vc(r);if(!i)throw Error(U(90));Dw(r),Yd(r,i)}}}break;case"textarea":Vw(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};Bw=pm;zw=Ci;var Bx={usingClientEntryPoint:!1,Events:[qa,ss,Vc,jw,Uw,pm]},Co={findFiberByHostInstance:fi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zx={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kw(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{kc=Yl.inject(zx),mn=Yl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wm(e))throw Error(U(200));return Fx(t,e,null,n)};jt.createRoot=function(t,e){if(!wm(t))throw Error(U(299));var n=!1,r="",i=SS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vm(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,ya(t.nodeType===8?t.parentNode:t),new Em(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Kw(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return Ci(t)};jt.hydrate=function(t,e,n){if(!$c(e))throw Error(U(200));return Wc(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!wm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=SS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=TS(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,ya(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zc(e)};jt.render=function(t,e,n){if(!$c(e))throw Error(U(200));return Wc(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!$c(t))throw Error(U(40));return t._reactRootContainer?(Ci(function(){Wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};jt.unstable_batchedUpdates=pm;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$c(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Wc(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function IS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IS)}catch(t){console.error(t)}}IS(),Iw.exports=jt;var $x=Iw.exports,c_=$x;$d.createRoot=c_.createRoot,$d.hydrateRoot=c_.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ra.apply(this,arguments)}var Sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Sr||(Sr={}));const h_="popstate";function Wx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Mf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tc(i)}return Hx(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Tm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kx(){return Math.random().toString(36).substr(2,8)}function d_(t,e){return{usr:t.state,key:t.key,idx:e}}function Mf(t,e,n,r){return n===void 0&&(n=null),Ra({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xs(e):e,{state:n,key:e&&e.key||r||Kx()})}function tc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Hx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Sr.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Ra({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Sr.Pop;let P=h(),E=P==null?null:P-c;c=P,l&&l({action:a,location:T.location,delta:E})}function p(P,E){a=Sr.Push;let _=Mf(T.location,P,E);c=h()+1;let S=d_(_,c),D=T.createHref(_);try{o.pushState(S,"",D)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(D)}s&&l&&l({action:a,location:T.location,delta:1})}function g(P,E){a=Sr.Replace;let _=Mf(T.location,P,E);c=h();let S=d_(_,c),D=T.createHref(_);o.replaceState(S,"",D),s&&l&&l({action:a,location:T.location,delta:0})}function w(P){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:tc(P);return _=_.replace(/ $/,"%20"),Ve(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let T={get action(){return a},get location(){return t(i,o)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(h_,f),l=P,()=>{i.removeEventListener(h_,f),l=null}},createHref(P){return e(i,P)},createURL:w,encodeLocation(P){let E=w(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:p,replace:g,go(P){return o.go(P)}};return T}var f_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(f_||(f_={}));function Gx(t,e,n){return n===void 0&&(n="/"),qx(t,e,n)}function qx(t,e,n,r){let i=typeof e=="string"?Xs(e):e,s=Sm(i.pathname||"/",n);if(s==null)return null;let o=AS(t);Qx(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=ak(s);a=ik(o[l],c)}return a}function AS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Vr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),AS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:nk(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of RS(s.path))i(s,o,l)}),e}function RS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=RS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Qx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Yx=/^:[\w-]+$/,Xx=3,Jx=2,Zx=1,ek=10,tk=-2,p_=t=>t==="*";function nk(t,e){let n=t.split("/"),r=n.length;return n.some(p_)&&(r+=tk),e&&(r+=Jx),n.filter(i=>!p_(i)).reduce((i,s)=>i+(Yx.test(s)?Xx:s===""?Zx:ek),r)}function rk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ik(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=sk({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Vr([s,f.pathname]),pathnameBase:dk(Vr([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Vr([s,f.pathnameBase]))}return o}function sk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ok(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:g}=h;if(p==="*"){let T=a[f]||"";o=s.slice(0,s.length-T.length).replace(/(.)\/+$/,"$1")}const w=a[f];return g&&!w?c[p]=void 0:c[p]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function ok(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Tm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ak(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const lk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uk=t=>lk.test(t);function ck(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xs(t):t,s;if(n)if(uk(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Tm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=m_(n.substring(1),"/"):s=m_(n,e)}else s=e;return{pathname:s,search:fk(r),hash:pk(i)}}function m_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function gd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Im(t,e){let n=hk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Am(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xs(t):(i=Ra({},t),Ve(!i.pathname||!i.pathname.includes("?"),gd("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),gd("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),gd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=ck(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Vr=t=>t.join("/").replace(/\/\/+/g,"/"),dk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const PS=["post","put","patch","delete"];new Set(PS);const gk=["get",...PS];new Set(gk);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pa.apply(this,arguments)}const Rm=N.createContext(null),yk=N.createContext(null),Yr=N.createContext(null),Kc=N.createContext(null),tr=N.createContext({outlet:null,matches:[],isDataRoute:!1}),CS=N.createContext(null);function vk(t,e){let{relative:n}=e===void 0?{}:e;Js()||Ve(!1);let{basename:r,navigator:i}=N.useContext(Yr),{hash:s,pathname:o,search:a}=kS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Vr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Js(){return N.useContext(Kc)!=null}function Ya(){return Js()||Ve(!1),N.useContext(Kc).location}function xS(t){N.useContext(Yr).static||N.useLayoutEffect(t)}function Fi(){let{isDataRoute:t}=N.useContext(tr);return t?Dk():_k()}function _k(){Js()||Ve(!1);let t=N.useContext(Rm),{basename:e,future:n,navigator:r}=N.useContext(Yr),{matches:i}=N.useContext(tr),{pathname:s}=Ya(),o=JSON.stringify(Im(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return xS(()=>{a.current=!0}),N.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Am(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Vr([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function Ek(){let{matches:t}=N.useContext(tr),e=t[t.length-1];return e?e.params:{}}function kS(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Yr),{matches:i}=N.useContext(tr),{pathname:s}=Ya(),o=JSON.stringify(Im(i,r.v7_relativeSplatPath));return N.useMemo(()=>Am(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function wk(t,e){return Tk(t,e)}function Tk(t,e,n,r){Js()||Ve(!1);let{navigator:i}=N.useContext(Yr),{matches:s}=N.useContext(tr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Ya(),h;if(e){var f;let P=typeof e=="string"?Xs(e):e;l==="/"||(f=P.pathname)!=null&&f.startsWith(l)||Ve(!1),h=P}else h=c;let p=h.pathname||"/",g=p;if(l!=="/"){let P=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(P.length).join("/")}let w=Gx(t,{pathname:g}),T=Pk(w&&w.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:Vr([l,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?l:Vr([l,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&T?N.createElement(Kc.Provider,{value:{location:Pa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Sr.Pop}},T):T}function Sk(){let t=Nk(),e=mk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const Ik=N.createElement(Sk,null);class Ak extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(tr.Provider,{value:this.props.routeContext},N.createElement(CS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rk(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(Rm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(tr.Provider,{value:e},r)}function Pk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Ve(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:g}=n,w=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||w){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let g,w=!1,T=null,P=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,T=f.route.errorElement||Ik,l&&(c<0&&p===0?(bk("route-fallback"),w=!0,P=null):c===p&&(w=!0,P=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,p+1)),_=()=>{let S;return g?S=T:w?S=P:f.route.Component?S=N.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=h,N.createElement(Rk,{match:f,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?N.createElement(Ak,{location:n.location,revalidation:n.revalidation,component:T,error:g,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var NS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(NS||{}),DS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(DS||{});function Ck(t){let e=N.useContext(Rm);return e||Ve(!1),e}function xk(t){let e=N.useContext(yk);return e||Ve(!1),e}function kk(t){let e=N.useContext(tr);return e||Ve(!1),e}function bS(t){let e=kk(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function Nk(){var t;let e=N.useContext(CS),n=xk(),r=bS();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Dk(){let{router:t}=Ck(NS.UseNavigateStable),e=bS(DS.UseNavigateStable),n=N.useRef(!1);return xS(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Pa({fromRouteId:e},s)))},[t,e])}const g_={};function bk(t,e,n){g_[t]||(g_[t]=!0)}function Vk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function y_(t){let{to:e,replace:n,state:r,relative:i}=t;Js()||Ve(!1);let{future:s,static:o}=N.useContext(Yr),{matches:a}=N.useContext(tr),{pathname:l}=Ya(),c=Fi(),h=Am(e,Im(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(h);return N.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function ui(t){Ve(!1)}function Ok(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Sr.Pop,navigator:s,static:o=!1,future:a}=t;Js()&&Ve(!1);let l=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:l,navigator:s,static:o,future:Pa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Xs(r));let{pathname:h="/",search:f="",hash:p="",state:g=null,key:w="default"}=r,T=N.useMemo(()=>{let P=Sm(h,l);return P==null?null:{location:{pathname:P,search:f,hash:p,state:g,key:w},navigationType:i}},[l,h,f,p,g,w,i]);return T==null?null:N.createElement(Yr.Provider,{value:c},N.createElement(Kc.Provider,{children:n,value:T}))}function Lk(t){let{children:e,location:n}=t;return wk(Ff(e),n)}new Promise(()=>{});function Ff(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Ff(r.props.children,s));return}r.type!==ui&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ff(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jf(){return jf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jf.apply(this,arguments)}function Mk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Fk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jk(t,e){return t.button===0&&(!e||e==="_self")&&!Fk(t)}const Uk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Bk="6";try{window.__reactRouterVersion=Bk}catch{}const zk="startTransition",v_=DC[zk];function $k(t){let{basename:e,children:n,future:r,window:i}=t,s=N.useRef();s.current==null&&(s.current=Wx({window:i,v5Compat:!0}));let o=s.current,[a,l]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=N.useCallback(f=>{c&&v_?v_(()=>l(f)):l(f)},[l,c]);return N.useLayoutEffect(()=>o.listen(h),[o,h]),N.useEffect(()=>Vk(r),[r]),N.createElement(Ok,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Wk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gr=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:f}=e,p=Mk(e,Uk),{basename:g}=N.useContext(Yr),w,T=!1;if(typeof c=="string"&&Kk.test(c)&&(w=c,Wk))try{let S=new URL(window.location.href),D=c.startsWith("//")?new URL(S.protocol+c):new URL(c),O=Sm(D.pathname,g);D.origin===S.origin&&O!=null?c=O+D.search+D.hash:T=!0}catch{}let P=vk(c,{relative:i}),E=Hk(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:f});function _(S){r&&r(S),S.defaultPrevented||E(S)}return N.createElement("a",jf({},p,{href:w||P,onClick:T||s?r:_,ref:n,target:l}))});var __;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(__||(__={}));var E_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(E_||(E_={}));function Hk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Fi(),c=Ya(),h=kS(t,{relative:o});return N.useCallback(f=>{if(jk(f,n)){f.preventDefault();let p=r!==void 0?r:tc(c)===tc(h);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}var w_={};/**
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
 */const VS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},OS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(VS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new qk;const p=s<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qk=function(t){const e=VS(t);return OS.encodeByteArray(e,!0)},nc=function(t){return Qk(t).replace(/\./g,"")},LS=function(t){try{return OS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xk=()=>Yk().__FIREBASE_DEFAULTS__,Jk=()=>{if(typeof process>"u"||typeof w_>"u")return;const t=w_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&LS(t[1]);return e&&JSON.parse(e)},Hc=()=>{try{return Xk()||Jk()||Zk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},MS=t=>{var e,n;return(n=(e=Hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eN=t=>{const e=MS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},FS=()=>{var t;return(t=Hc())===null||t===void 0?void 0:t.config},jS=t=>{var e;return(e=Hc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nc(JSON.stringify(n)),nc(JSON.stringify(o)),""].join(".")}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function iN(){var t;const e=(t=Hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lN(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uN(){return!iN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cN(){try{return typeof indexedDB=="object"}catch{return!1}}function hN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const dN="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dN,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xa.prototype.create)}}class Xa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nr(i,a,r)}}function fN(t,e){return t.replace(pN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pN=/\{\$([^}]+)}/g;function mN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(T_(s)&&T_(o)){if(!rc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function T_(t){return t!==null&&typeof t=="object"}/**
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
 */function Ja(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Lo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gN(t,e){const n=new yN(t,e);return n.subscribe.bind(n)}class yN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yd),i.error===void 0&&(i.error=yd),i.complete===void 0&&(i.complete=yd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yd(){}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class xi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ci="[DEFAULT]";/**
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
 */class _N{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wN(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:EN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EN(t){return t===ci?void 0:t}function wN(t){return t.instantiationMode==="EAGER"}/**
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
 */class TN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _N(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const SN={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},IN=ne.INFO,AN={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},RN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=AN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pm{constructor(e){this.name=e,this._logLevel=IN,this._logHandler=RN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const PN=(t,e)=>e.some(n=>t instanceof n);let S_,I_;function CN(){return S_||(S_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xN(){return I_||(I_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const US=new WeakMap,Uf=new WeakMap,BS=new WeakMap,vd=new WeakMap,Cm=new WeakMap;function kN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&US.set(n,t)}).catch(()=>{}),Cm.set(e,t),e}function NN(t){if(Uf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Uf.set(t,e)}let Bf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DN(t){Bf=t(Bf)}function bN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_d(this),e,...n);return BS.set(r,e.sort?e.sort():[e]),Or(r)}:xN().includes(t)?function(...e){return t.apply(_d(this),e),Or(US.get(this))}:function(...e){return Or(t.apply(_d(this),e))}}function VN(t){return typeof t=="function"?bN(t):(t instanceof IDBTransaction&&NN(t),PN(t,CN())?new Proxy(t,Bf):t)}function Or(t){if(t instanceof IDBRequest)return kN(t);if(vd.has(t))return vd.get(t);const e=VN(t);return e!==t&&(vd.set(t,e),Cm.set(e,t)),e}const _d=t=>Cm.get(t);function ON(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Or(o.result),l.oldVersion,l.newVersion,Or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const LN=["get","getKey","getAll","getAllKeys","count"],MN=["put","add","delete","clear"],Ed=new Map;function A_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ed.set(e,s),s}DN(t=>({...t,get:(e,n,r)=>A_(e,n)||t.get(e,n,r),has:(e,n)=>!!A_(e,n)||t.has(e,n)}));/**
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
 */class FN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zf="@firebase/app",R_="0.10.13";/**
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
 */const Qn=new Pm("@firebase/app"),UN="@firebase/app-compat",BN="@firebase/analytics-compat",zN="@firebase/analytics",$N="@firebase/app-check-compat",WN="@firebase/app-check",KN="@firebase/auth",HN="@firebase/auth-compat",GN="@firebase/database",qN="@firebase/data-connect",QN="@firebase/database-compat",YN="@firebase/functions",XN="@firebase/functions-compat",JN="@firebase/installations",ZN="@firebase/installations-compat",eD="@firebase/messaging",tD="@firebase/messaging-compat",nD="@firebase/performance",rD="@firebase/performance-compat",iD="@firebase/remote-config",sD="@firebase/remote-config-compat",oD="@firebase/storage",aD="@firebase/storage-compat",lD="@firebase/firestore",uD="@firebase/vertexai-preview",cD="@firebase/firestore-compat",hD="firebase",dD="10.14.1";/**
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
 */const $f="[DEFAULT]",fD={[zf]:"fire-core",[UN]:"fire-core-compat",[zN]:"fire-analytics",[BN]:"fire-analytics-compat",[WN]:"fire-app-check",[$N]:"fire-app-check-compat",[KN]:"fire-auth",[HN]:"fire-auth-compat",[GN]:"fire-rtdb",[qN]:"fire-data-connect",[QN]:"fire-rtdb-compat",[YN]:"fire-fn",[XN]:"fire-fn-compat",[JN]:"fire-iid",[ZN]:"fire-iid-compat",[eD]:"fire-fcm",[tD]:"fire-fcm-compat",[nD]:"fire-perf",[rD]:"fire-perf-compat",[iD]:"fire-rc",[sD]:"fire-rc-compat",[oD]:"fire-gcs",[aD]:"fire-gcs-compat",[lD]:"fire-fst",[cD]:"fire-fst-compat",[uD]:"fire-vertex","fire-js":"fire-js",[hD]:"fire-js-all"};/**
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
 */const ic=new Map,pD=new Map,Wf=new Map;function P_(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ls(t){const e=t.name;if(Wf.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Wf.set(e,t);for(const n of ic.values())P_(n,t);for(const n of pD.values())P_(n,t);return!0}function xm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
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
 */const mD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lr=new Xa("app","Firebase",mD);/**
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
 */class gD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=dD;function zS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$f,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Lr.create("bad-app-name",{appName:String(i)});if(n||(n=FS()),!n)throw Lr.create("no-options");const s=ic.get(i);if(s){if(rc(n,s.options)&&rc(r,s.config))return s;throw Lr.create("duplicate-app",{appName:i})}const o=new TN(i);for(const l of Wf.values())o.addComponent(l);const a=new gD(n,r,o);return ic.set(i,a),a}function $S(t=$f){const e=ic.get(t);if(!e&&t===$f&&FS())return zS();if(!e)throw Lr.create("no-app",{appName:t});return e}function Mr(t,e,n){var r;let i=(r=fD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(a.join(" "));return}Ls(new xi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yD="firebase-heartbeat-database",vD=1,Ca="firebase-heartbeat-store";let wd=null;function WS(){return wd||(wd=ON(yD,vD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ca)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),wd}async function _D(t){try{const n=(await WS()).transaction(Ca),r=await n.objectStore(Ca).get(KS(t));return await n.done,r}catch(e){if(e instanceof nr)Qn.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function C_(t,e){try{const r=(await WS()).transaction(Ca,"readwrite");await r.objectStore(Ca).put(e,KS(t)),await r.done}catch(n){if(n instanceof nr)Qn.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function KS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ED=1024,wD=30*24*60*60*1e3;class TD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ID(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=x_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=x_(),{heartbeatsToSend:r,unsentEntries:i}=SD(this._heartbeatsCache.heartbeats),s=nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qn.warn(n),""}}}function x_(){return new Date().toISOString().substring(0,10)}function SD(t,e=ED){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),k_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),k_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ID{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cN()?hN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _D(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return C_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return C_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function k_(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function AD(t){Ls(new xi("platform-logger",e=>new FN(e),"PRIVATE")),Ls(new xi("heartbeat",e=>new TD(e),"PRIVATE")),Mr(zf,R_,t),Mr(zf,R_,"esm2017"),Mr("fire-js","")}AD("");var RD="firebase",PD="10.14.1";/**
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
 */Mr(RD,PD,"app");function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function HS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CD=HS,GS=new Xa("auth","Firebase",HS());/**
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
 */const sc=new Pm("@firebase/auth");function xD(t,...e){sc.logLevel<=ne.WARN&&sc.warn(`Auth (${Zs}): ${t}`,...e)}function _u(t,...e){sc.logLevel<=ne.ERROR&&sc.error(`Auth (${Zs}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw Nm(t,...e)}function yn(t,...e){return Nm(t,...e)}function qS(t,e,n){const r=Object.assign(Object.assign({},CD()),{[e]:n});return new Xa("auth","Firebase",r).create(e,{appName:t.name})}function Un(t){return qS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return GS.create(t,...e)}function Q(t,e,...n){if(!t)throw Nm(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _u(e),new Error(e)}function Yn(t,e){t||Ln(e)}/**
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
 */function Kf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kD(){return N_()==="http:"||N_()==="https:"}function N_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ND(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kD()||oN()||"connection"in navigator)?navigator.onLine:!0}function DD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Za{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=rN()||aN()}get(){return ND()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dm(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class QS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VD=new Za(3e4,6e4);function Xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jr(t,e,n,r,i={}){return YS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ja(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return sN()||(c.referrerPolicy="no-referrer"),QS.fetch()(XS(t,t.config.apiHost,n,a),c)})}async function YS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bD),e);try{const i=new LD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw qS(t,h,c);ln(t,h)}}catch(i){if(i instanceof nr)throw i;ln(t,"network-request-failed",{message:String(i)})}}async function el(t,e,n,r,i={}){const s=await Jr(t,e,n,r,i);return"mfaPendingCredential"in s&&ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}function XS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Dm(t.config,i):`${t.config.apiScheme}://${i}`}function OD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),VD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}function D_(t){return t!==void 0&&t.enterprise!==void 0}class MD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return OD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function FD(t,e){return Jr(t,"GET","/v2/recaptchaConfig",Xr(t,e))}/**
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
 */async function jD(t,e){return Jr(t,"POST","/v1/accounts:delete",e)}async function JS(t,e){return Jr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UD(t,e=!1){const n=Be(t),r=await n.getIdToken(e),i=bm(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zo(Td(i.auth_time)),issuedAtTime:Zo(Td(i.iat)),expirationTime:Zo(Td(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Td(t){return Number(t)*1e3}function bm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _u("JWT malformed, contained fewer than 3 sections"),null;try{const i=LS(n);return i?JSON.parse(i):(_u("Failed to decode base64 JWT payload"),null)}catch(i){return _u("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function b_(t){const e=bm(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nr&&BD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zo(this.lastLoginAt),this.creationTime=Zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xa(t,JS(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZS(s.providerUserInfo):[],a=WD(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function $D(t){const e=Be(t);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZS(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function KD(t,e){const n=await YS(t,{},async()=>{const r=Ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=XS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HD(t,e){return Jr(t,"POST","/v2/accounts:revokeToken",Xr(t,e))}/**
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
 */class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):b_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=b_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Is;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function lr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xa(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UD(this,e)}reload(){return $D(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Un(this.auth));const e=await this.getIdToken();return await xa(this,jD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:D,isAnonymous:O,providerData:M,stsTokenManager:I}=n;Q(S&&I,e,"internal-error");const y=Is.fromJSON(this.name,I);Q(typeof S=="string",e,"internal-error"),lr(f,e.name),lr(p,e.name),Q(typeof D=="boolean",e,"internal-error"),Q(typeof O=="boolean",e,"internal-error"),lr(g,e.name),lr(w,e.name),lr(T,e.name),lr(P,e.name),lr(E,e.name),lr(_,e.name);const A=new Mn({uid:S,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:O,photoURL:w,phoneNumber:g,tenantId:T,stsTokenManager:y,createdAt:E,lastLoginAt:_});return M&&Array.isArray(M)&&(A.providerData=M.map(C=>Object.assign({},C))),P&&(A._redirectEventId=P),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Is;i.updateFromServerResponse(n);const s=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ZS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Is;a.updateFromIdToken(r);const l=new Mn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const V_=new Map;function Fn(t){Yn(t instanceof Function,"Expected a class definition");let e=V_.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,V_.set(t,e),e)}/**
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
 */class eI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eI.type="NONE";const O_=eI;/**
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
 */function Eu(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Eu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Eu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(Fn(O_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Fn(O_);const o=Eu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Mn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new As(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new As(s,e,r))}}/**
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
 */function L_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oI(e))return"Blackberry";if(aI(e))return"Webos";if(nI(e))return"Safari";if((e.includes("chrome/")||rI(e))&&!e.includes("edge/"))return"Chrome";if(sI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tI(t=mt()){return/firefox\//i.test(t)}function nI(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rI(t=mt()){return/crios\//i.test(t)}function iI(t=mt()){return/iemobile/i.test(t)}function sI(t=mt()){return/android/i.test(t)}function oI(t=mt()){return/blackberry/i.test(t)}function aI(t=mt()){return/webos/i.test(t)}function Vm(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GD(t=mt()){var e;return Vm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qD(){return lN()&&document.documentMode===10}function lI(t=mt()){return Vm(t)||sI(t)||aI(t)||oI(t)||/windows phone/i.test(t)||iI(t)}/**
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
 */function uI(t,e=[]){let n;switch(t){case"Browser":n=L_(mt());break;case"Worker":n=`${L_(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}/**
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
 */class QD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YD(t,e={}){return Jr(t,"GET","/v2/passwordPolicy",Xr(t,e))}/**
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
 */const XD=6;class JD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ZD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new M_(this),this.idTokenSubscription=new M_(this),this.beforeStateQueue=new QD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await JS(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Un(this));const n=e?Be(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YD(this),n=new JD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ji(t){return Be(t)}class M_{constructor(e){this.auth=e,this.observer=null,this.addObserver=gN(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eb(t){Gc=t}function cI(t){return Gc.loadJS(t)}function tb(){return Gc.recaptchaEnterpriseScript}function nb(){return Gc.gapiScript}function rb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ib="recaptcha-enterprise",sb="NO_RECAPTCHA";class ob{constructor(e){this.type=ib,this.auth=ji(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{FD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new MD(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;D_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(sb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&D_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tb();l.length!==0&&(l+=a),cI(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function F_(t,e,n,r=!1){const i=new ob(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await F_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await F_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function ab(t,e){const n=xm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(rc(s,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function lb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ub(t,e,n){const r=ji(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=hI(e),{host:o,port:a}=cb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),hb()}function hI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cb(t){const e=hI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:j_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:j_(o)}}}function j_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Om{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function db(t,e){return Jr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fb(t,e){return el(t,"POST","/v1/accounts:signInWithPassword",Xr(t,e))}/**
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
 */async function pb(t,e){return el(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}async function mb(t,e){return el(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}/**
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
 */class ka extends Om{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ka(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ka(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gf(e,n,"signInWithPassword",fb);case"emailLink":return pb(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gf(e,r,"signUpPassword",db);case"emailLink":return mb(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rs(t,e){return el(t,"POST","/v1/accounts:signInWithIdp",Xr(t,e))}/**
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
 */const gb="http://localhost";class ki extends Om{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ki(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:gb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ja(n)}return e}}/**
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
 */function yb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vb(t){const e=Oo(Lo(t)).link,n=e?Oo(Lo(e)).deep_link_id:null,r=Oo(Lo(t)).deep_link_id;return(r?Oo(Lo(r)).link:null)||r||n||e||t}class Lm{constructor(e){var n,r,i,s,o,a;const l=Oo(Lo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=yb((i=l.mode)!==null&&i!==void 0?i:null);Q(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vb(e);try{return new Lm(n)}catch{return null}}}/**
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
 */class eo{constructor(){this.providerId=eo.PROVIDER_ID}static credential(e,n){return ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lm.parseLink(n);return Q(r,"argument-error"),ka._fromEmailAndCode(e,r.code,r.tenantId)}}eo.PROVIDER_ID="password";eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tl extends dI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yr extends tl{constructor(){super("facebook.com")}static credential(e){return ki._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
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
 */class vr extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ki._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
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
 */class _r extends tl{constructor(){super("github.com")}static credential(e){return ki._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
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
 */class Er extends tl{constructor(){super("twitter.com")}static credential(e,n){return ki._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
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
 */async function _b(t,e){return el(t,"POST","/v1/accounts:signUp",Xr(t,e))}/**
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
 */class Ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mn._fromIdTokenResponse(e,r,i),o=U_(r);return new Ni({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=U_(r);return new Ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function U_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ac extends nr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ac(e,n,r,i)}}function fI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(t,s,e,r):s})}async function Eb(t,e,n=!1){const r=await xa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ni._forOperation(t,"link",r)}/**
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
 */async function wb(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(Un(r));const i="reauthenticate";try{const s=await xa(t,fI(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=bm(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),s}}/**
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
 */async function pI(t,e,n=!1){if(pn(t.app))return Promise.reject(Un(t));const r="signIn",i=await fI(t,r,e),s=await Ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Tb(t,e){return pI(ji(t),e)}/**
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
 */async function mI(t){const e=ji(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Sb(t,e,n){if(pn(t.app))return Promise.reject(Un(t));const r=ji(t),o=await Gf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_b).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mI(t),l}),a=await Ni._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Ib(t,e,n){return pn(t.app)?Promise.reject(Un(t)):Tb(Be(t),eo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mI(t),r})}function Ab(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function Rb(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function Pb(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function Cb(t){return Be(t).signOut()}const lc="__sak";/**
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
 */class gI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xb=1e3,kb=10;class yI extends gI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yI.type="LOCAL";const Nb=yI;/**
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
 */class vI extends gI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vI.type="SESSION";const _I=vI;/**
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
 */function Db(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Db(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
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
 */function Mm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Mm("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function Vb(t){vn().location.href=t}/**
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
 */function EI(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function Ob(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mb(){return EI()?self:null}/**
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
 */const wI="firebaseLocalStorageDb",Fb=1,uc="firebaseLocalStorage",TI="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qc(t,e){return t.transaction([uc],e?"readwrite":"readonly").objectStore(uc)}function jb(){const t=indexedDB.deleteDatabase(wI);return new nl(t).toPromise()}function qf(){const t=indexedDB.open(wI,Fb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uc,{keyPath:TI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uc)?e(r):(r.close(),await jb(),e(await qf()))})})}async function B_(t,e,n){const r=Qc(t,!0).put({[TI]:e,value:n});return new nl(r).toPromise()}async function Ub(t,e){const n=Qc(t,!1).get(e),r=await new nl(n).toPromise();return r===void 0?null:r.value}function z_(t,e){const n=Qc(t,!0).delete(e);return new nl(n).toPromise()}const Bb=800,zb=3;class SI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return EI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(Mb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ob(),!this.activeServiceWorker)return;this.sender=new bb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qf();return await B_(e,lc,"1"),await z_(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>B_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ub(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>z_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qc(i,!1).getAll();return new nl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}SI.type="LOCAL";const $b=SI;new Za(3e4,6e4);/**
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
 */function Wb(t,e){return e?Fn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fm extends Om{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kb(t){return pI(t.auth,new Fm(t),t.bypassAuthState)}function Hb(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),wb(n,new Fm(t),t.bypassAuthState)}async function Gb(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Eb(n,new Fm(t),t.bypassAuthState)}/**
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
 */class II{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kb;case"linkViaPopup":case"linkViaRedirect":return Gb;case"reauthViaPopup":case"reauthViaRedirect":return Hb;default:ln(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qb=new Za(2e3,1e4);class ds extends II{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Mm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qb.get())};e()}}ds.currentPopupAction=null;/**
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
 */const Qb="pendingRedirect",wu=new Map;class Yb extends II{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const r=await Xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xb(t,e){const n=eV(e),r=Zb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Jb(t,e){wu.set(t._key(),e)}function Zb(t){return Fn(t._redirectPersistence)}function eV(t){return Eu(Qb,t.config.apiKey,t.name)}async function tV(t,e,n=!1){if(pn(t.app))return Promise.reject(Un(t));const r=ji(t),i=Wb(r,e),o=await new Yb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nV=10*60*1e3;class rV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!AI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nV&&this.cachedEventUids.clear(),this.cachedEventUids.has($_(e))}saveEventToCache(e){this.cachedEventUids.add($_(e)),this.lastProcessedEventTime=Date.now()}}function $_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AI(t);default:return!1}}/**
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
 */async function sV(t,e={}){return Jr(t,"GET","/v1/projects",e)}/**
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
 */const oV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aV=/^https?/;async function lV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sV(t);for(const n of e)try{if(uV(n))return}catch{}ln(t,"unauthorized-domain")}function uV(t){const e=Kf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aV.test(n))return!1;if(oV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const cV=new Za(3e4,6e4);function W_(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hV(t){return new Promise((e,n)=>{var r,i,s;function o(){W_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{W_(),n(yn(t,"network-request-failed"))},timeout:cV.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const a=rb("iframefcb");return vn()[a]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},cI(`${nb()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tu=null,e})}let Tu=null;function dV(t){return Tu=Tu||hV(t),Tu}/**
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
 */const fV=new Za(5e3,15e3),pV="__/auth/iframe",mV="emulator/auth/iframe",gV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vV(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dm(e,mV):`https://${t.config.authDomain}/${pV}`,r={apiKey:e.apiKey,appName:t.name,v:Zs},i=yV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ja(r).slice(1)}`}async function _V(t){const e=await dV(t),n=vn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:vV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),a=vn().setTimeout(()=>{s(o)},fV.get());function l(){vn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const EV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wV=500,TV=600,SV="_blank",IV="http://localhost";class K_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AV(t,e,n,r=wV,i=TV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},EV),{width:r.toString(),height:i.toString(),top:s,left:o}),c=mt().toLowerCase();n&&(a=rI(c)?SV:n),tI(c)&&(e=e||IV,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(GD(c)&&a!=="_self")return RV(e||"",a),new K_(null);const f=window.open(e||"",a,h);Q(f,t,"popup-blocked");try{f.focus()}catch{}return new K_(f)}function RV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const PV="__/auth/handler",CV="emulator/auth/handler",xV=encodeURIComponent("fac");async function H_(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zs,eventId:i};if(e instanceof dI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof tl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${xV}=${encodeURIComponent(l)}`:"";return`${kV(t)}?${Ja(a).slice(1)}${c}`}function kV({config:t}){return t.emulator?Dm(t,CV):`https://${t.authDomain}/${PV}`}/**
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
 */const Sd="webStorageSupport";class NV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_I,this._completeRedirectFn=tV,this._overrideRedirectResult=Jb}async _openPopup(e,n,r,i){var s;Yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await H_(e,n,r,Kf(),i);return AV(e,o,Mm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await H_(e,n,r,Kf(),i);return Vb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _V(e),r=new rV(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sd,{type:Sd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sd];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lI()||nI()||Vm()}}const DV=NV;var G_="@firebase/auth",q_="1.7.9";/**
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
 */class bV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OV(t){Ls(new xi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uI(t)},c=new ZD(r,i,s,l);return lb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ls(new xi("auth-internal",e=>{const n=ji(e.getProvider("auth").getImmediate());return(r=>new bV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mr(G_,q_,VV(t)),Mr(G_,q_,"esm2017")}/**
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
 */const LV=5*60,MV=jS("authIdTokenMaxAge")||LV;let Q_=null;const FV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MV)return;const i=n==null?void 0:n.token;Q_!==i&&(Q_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jV(t=$S()){const e=xm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ab(t,{popupRedirectResolver:DV,persistence:[$b,Nb,_I]}),r=jS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=FV(s.toString());Rb(n,o,()=>o(n.currentUser)),Ab(n,a=>o(a))}}const i=MS("auth");return i&&ub(n,`http://${i}`),n}function UV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OV("Browser");var Y_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wi,RI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function A(){}A.prototype=y.prototype,I.D=y.prototype,I.prototype=new A,I.prototype.constructor=I,I.C=function(C,k,b){for(var x=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)x[gt-2]=arguments[gt];return y.prototype[k].apply(C,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,A){A||(A=0);var C=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)C[k]=y.charCodeAt(A++)|y.charCodeAt(A++)<<8|y.charCodeAt(A++)<<16|y.charCodeAt(A++)<<24;else for(k=0;16>k;++k)C[k]=y[A++]|y[A++]<<8|y[A++]<<16|y[A++]<<24;y=I.g[0],A=I.g[1],k=I.g[2];var b=I.g[3],x=y+(b^A&(k^b))+C[0]+3614090360&4294967295;y=A+(x<<7&4294967295|x>>>25),x=b+(k^y&(A^k))+C[1]+3905402710&4294967295,b=y+(x<<12&4294967295|x>>>20),x=k+(A^b&(y^A))+C[2]+606105819&4294967295,k=b+(x<<17&4294967295|x>>>15),x=A+(y^k&(b^y))+C[3]+3250441966&4294967295,A=k+(x<<22&4294967295|x>>>10),x=y+(b^A&(k^b))+C[4]+4118548399&4294967295,y=A+(x<<7&4294967295|x>>>25),x=b+(k^y&(A^k))+C[5]+1200080426&4294967295,b=y+(x<<12&4294967295|x>>>20),x=k+(A^b&(y^A))+C[6]+2821735955&4294967295,k=b+(x<<17&4294967295|x>>>15),x=A+(y^k&(b^y))+C[7]+4249261313&4294967295,A=k+(x<<22&4294967295|x>>>10),x=y+(b^A&(k^b))+C[8]+1770035416&4294967295,y=A+(x<<7&4294967295|x>>>25),x=b+(k^y&(A^k))+C[9]+2336552879&4294967295,b=y+(x<<12&4294967295|x>>>20),x=k+(A^b&(y^A))+C[10]+4294925233&4294967295,k=b+(x<<17&4294967295|x>>>15),x=A+(y^k&(b^y))+C[11]+2304563134&4294967295,A=k+(x<<22&4294967295|x>>>10),x=y+(b^A&(k^b))+C[12]+1804603682&4294967295,y=A+(x<<7&4294967295|x>>>25),x=b+(k^y&(A^k))+C[13]+4254626195&4294967295,b=y+(x<<12&4294967295|x>>>20),x=k+(A^b&(y^A))+C[14]+2792965006&4294967295,k=b+(x<<17&4294967295|x>>>15),x=A+(y^k&(b^y))+C[15]+1236535329&4294967295,A=k+(x<<22&4294967295|x>>>10),x=y+(k^b&(A^k))+C[1]+4129170786&4294967295,y=A+(x<<5&4294967295|x>>>27),x=b+(A^k&(y^A))+C[6]+3225465664&4294967295,b=y+(x<<9&4294967295|x>>>23),x=k+(y^A&(b^y))+C[11]+643717713&4294967295,k=b+(x<<14&4294967295|x>>>18),x=A+(b^y&(k^b))+C[0]+3921069994&4294967295,A=k+(x<<20&4294967295|x>>>12),x=y+(k^b&(A^k))+C[5]+3593408605&4294967295,y=A+(x<<5&4294967295|x>>>27),x=b+(A^k&(y^A))+C[10]+38016083&4294967295,b=y+(x<<9&4294967295|x>>>23),x=k+(y^A&(b^y))+C[15]+3634488961&4294967295,k=b+(x<<14&4294967295|x>>>18),x=A+(b^y&(k^b))+C[4]+3889429448&4294967295,A=k+(x<<20&4294967295|x>>>12),x=y+(k^b&(A^k))+C[9]+568446438&4294967295,y=A+(x<<5&4294967295|x>>>27),x=b+(A^k&(y^A))+C[14]+3275163606&4294967295,b=y+(x<<9&4294967295|x>>>23),x=k+(y^A&(b^y))+C[3]+4107603335&4294967295,k=b+(x<<14&4294967295|x>>>18),x=A+(b^y&(k^b))+C[8]+1163531501&4294967295,A=k+(x<<20&4294967295|x>>>12),x=y+(k^b&(A^k))+C[13]+2850285829&4294967295,y=A+(x<<5&4294967295|x>>>27),x=b+(A^k&(y^A))+C[2]+4243563512&4294967295,b=y+(x<<9&4294967295|x>>>23),x=k+(y^A&(b^y))+C[7]+1735328473&4294967295,k=b+(x<<14&4294967295|x>>>18),x=A+(b^y&(k^b))+C[12]+2368359562&4294967295,A=k+(x<<20&4294967295|x>>>12),x=y+(A^k^b)+C[5]+4294588738&4294967295,y=A+(x<<4&4294967295|x>>>28),x=b+(y^A^k)+C[8]+2272392833&4294967295,b=y+(x<<11&4294967295|x>>>21),x=k+(b^y^A)+C[11]+1839030562&4294967295,k=b+(x<<16&4294967295|x>>>16),x=A+(k^b^y)+C[14]+4259657740&4294967295,A=k+(x<<23&4294967295|x>>>9),x=y+(A^k^b)+C[1]+2763975236&4294967295,y=A+(x<<4&4294967295|x>>>28),x=b+(y^A^k)+C[4]+1272893353&4294967295,b=y+(x<<11&4294967295|x>>>21),x=k+(b^y^A)+C[7]+4139469664&4294967295,k=b+(x<<16&4294967295|x>>>16),x=A+(k^b^y)+C[10]+3200236656&4294967295,A=k+(x<<23&4294967295|x>>>9),x=y+(A^k^b)+C[13]+681279174&4294967295,y=A+(x<<4&4294967295|x>>>28),x=b+(y^A^k)+C[0]+3936430074&4294967295,b=y+(x<<11&4294967295|x>>>21),x=k+(b^y^A)+C[3]+3572445317&4294967295,k=b+(x<<16&4294967295|x>>>16),x=A+(k^b^y)+C[6]+76029189&4294967295,A=k+(x<<23&4294967295|x>>>9),x=y+(A^k^b)+C[9]+3654602809&4294967295,y=A+(x<<4&4294967295|x>>>28),x=b+(y^A^k)+C[12]+3873151461&4294967295,b=y+(x<<11&4294967295|x>>>21),x=k+(b^y^A)+C[15]+530742520&4294967295,k=b+(x<<16&4294967295|x>>>16),x=A+(k^b^y)+C[2]+3299628645&4294967295,A=k+(x<<23&4294967295|x>>>9),x=y+(k^(A|~b))+C[0]+4096336452&4294967295,y=A+(x<<6&4294967295|x>>>26),x=b+(A^(y|~k))+C[7]+1126891415&4294967295,b=y+(x<<10&4294967295|x>>>22),x=k+(y^(b|~A))+C[14]+2878612391&4294967295,k=b+(x<<15&4294967295|x>>>17),x=A+(b^(k|~y))+C[5]+4237533241&4294967295,A=k+(x<<21&4294967295|x>>>11),x=y+(k^(A|~b))+C[12]+1700485571&4294967295,y=A+(x<<6&4294967295|x>>>26),x=b+(A^(y|~k))+C[3]+2399980690&4294967295,b=y+(x<<10&4294967295|x>>>22),x=k+(y^(b|~A))+C[10]+4293915773&4294967295,k=b+(x<<15&4294967295|x>>>17),x=A+(b^(k|~y))+C[1]+2240044497&4294967295,A=k+(x<<21&4294967295|x>>>11),x=y+(k^(A|~b))+C[8]+1873313359&4294967295,y=A+(x<<6&4294967295|x>>>26),x=b+(A^(y|~k))+C[15]+4264355552&4294967295,b=y+(x<<10&4294967295|x>>>22),x=k+(y^(b|~A))+C[6]+2734768916&4294967295,k=b+(x<<15&4294967295|x>>>17),x=A+(b^(k|~y))+C[13]+1309151649&4294967295,A=k+(x<<21&4294967295|x>>>11),x=y+(k^(A|~b))+C[4]+4149444226&4294967295,y=A+(x<<6&4294967295|x>>>26),x=b+(A^(y|~k))+C[11]+3174756917&4294967295,b=y+(x<<10&4294967295|x>>>22),x=k+(y^(b|~A))+C[2]+718787259&4294967295,k=b+(x<<15&4294967295|x>>>17),x=A+(b^(k|~y))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var A=y-this.blockSize,C=this.B,k=this.h,b=0;b<y;){if(k==0)for(;b<=A;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<y;)if(C[k++]=I.charCodeAt(b++),k==this.blockSize){i(this,C),k=0;break}}else for(;b<y;)if(C[k++]=I[b++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var A=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=A&255,A/=256;for(this.u(I),I=Array(16),y=A=0;4>y;++y)for(var C=0;32>C;C+=8)I[A++]=this.g[y]>>>C&255;return I};function s(I,y){var A=a;return Object.prototype.hasOwnProperty.call(A,I)?A[I]:A[I]=y(I)}function o(I,y){this.h=y;for(var A=[],C=!0,k=I.length-1;0<=k;k--){var b=I[k]|0;C&&b==y||(A[k]=b,C=!1)}this.g=A}var a={};function l(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return P(c(-I));for(var y=[],A=1,C=0;I>=A;C++)y[C]=I/A|0,A*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return P(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(y,8)),C=f,k=0;k<I.length;k+=8){var b=Math.min(8,I.length-k),x=parseInt(I.substring(k,k+b),y);8>b?(b=c(Math.pow(y,b)),C=C.j(b).add(c(x))):(C=C.j(A),C=C.add(c(x)))}return C}var f=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(T(this))return-P(this).m();for(var I=0,y=1,A=0;A<this.g.length;A++){var C=this.i(A);I+=(0<=C?C:4294967296+C)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(w(this))return"0";if(T(this))return"-"+P(this).toString(I);for(var y=c(Math.pow(I,6)),A=this,C="";;){var k=D(A,y).g;A=E(A,k.j(y));var b=((0<A.g.length?A.g[0]:A.h)>>>0).toString(I);if(A=k,w(A))return b+C;for(;6>b.length;)b="0"+b;C=b+C}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function w(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function T(I){return I.h==-1}t.l=function(I){return I=E(this,I),T(I)?-1:w(I)?0:1};function P(I){for(var y=I.g.length,A=[],C=0;C<y;C++)A[C]=~I.g[C];return new o(A,~I.h).add(p)}t.abs=function(){return T(this)?P(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),A=[],C=0,k=0;k<=y;k++){var b=C+(this.i(k)&65535)+(I.i(k)&65535),x=(b>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);C=x>>>16,b&=65535,x&=65535,A[k]=x<<16|b}return new o(A,A[A.length-1]&-2147483648?-1:0)};function E(I,y){return I.add(P(y))}t.j=function(I){if(w(this)||w(I))return f;if(T(this))return T(I)?P(this).j(P(I)):P(P(this).j(I));if(T(I))return P(this.j(P(I)));if(0>this.l(g)&&0>I.l(g))return c(this.m()*I.m());for(var y=this.g.length+I.g.length,A=[],C=0;C<2*y;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<I.g.length;k++){var b=this.i(C)>>>16,x=this.i(C)&65535,gt=I.i(k)>>>16,rr=I.i(k)&65535;A[2*C+2*k]+=x*rr,_(A,2*C+2*k),A[2*C+2*k+1]+=b*rr,_(A,2*C+2*k+1),A[2*C+2*k+1]+=x*gt,_(A,2*C+2*k+1),A[2*C+2*k+2]+=b*gt,_(A,2*C+2*k+2)}for(C=0;C<y;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=y;C<2*y;C++)A[C]=0;return new o(A,0)};function _(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function S(I,y){this.g=I,this.h=y}function D(I,y){if(w(y))throw Error("division by zero");if(w(I))return new S(f,f);if(T(I))return y=D(P(I),y),new S(P(y.g),P(y.h));if(T(y))return y=D(I,P(y)),new S(P(y.g),y.h);if(30<I.g.length){if(T(I)||T(y))throw Error("slowDivide_ only works with positive integers.");for(var A=p,C=y;0>=C.l(I);)A=O(A),C=O(C);var k=M(A,1),b=M(C,1);for(C=M(C,2),A=M(A,2);!w(C);){var x=b.add(C);0>=x.l(I)&&(k=k.add(A),b=x),C=M(C,1),A=M(A,1)}return y=E(I,k.j(y)),new S(k,y)}for(k=f;0<=I.l(y);){for(A=Math.max(1,Math.floor(I.m()/y.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),b=c(A),x=b.j(y);T(x)||0<x.l(I);)A-=C,b=c(A),x=b.j(y);w(b)&&(b=p),k=k.add(b),I=E(I,x)}return new S(k,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),A=[],C=0;C<y;C++)A[C]=this.i(C)&I.i(C);return new o(A,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),A=[],C=0;C<y;C++)A[C]=this.i(C)|I.i(C);return new o(A,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),A=[],C=0;C<y;C++)A[C]=this.i(C)^I.i(C);return new o(A,this.h^I.h)};function O(I){for(var y=I.g.length+1,A=[],C=0;C<y;C++)A[C]=I.i(C)<<1|I.i(C-1)>>>31;return new o(A,I.h)}function M(I,y){var A=y>>5;y%=32;for(var C=I.g.length-A,k=[],b=0;b<C;b++)k[b]=0<y?I.i(b+A)>>>y|I.i(b+A+1)<<32-y:I.i(b+A);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,RI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,wi=o}).apply(typeof Y_<"u"?Y_:typeof self<"u"?self:typeof window<"u"?window:{});var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PI,Mo,CI,Su,Qf,xI,kI,NI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jl=="object"&&Jl];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var v=0;v<u.length-1;v++){var V=u[v];if(!(V in m))break e;m=m[V]}u=u[u.length-1],v=m[u],d=d(v),d!=v&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,v=!1,V={next:function(){if(!v&&m<u.length){var L=m++;return{value:d(L,u[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function f(u,d,m){if(!u)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,v),u.apply(d,V)}}return function(){return u.apply(d,arguments)}}function p(u,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),u.apply(this,v)}}function w(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(v,V,L){for(var B=Array(arguments.length-2),he=2;he<arguments.length;he++)B[he-2]=arguments[he];return d.prototype[V].apply(v,B)}}function T(u){const d=u.length;if(0<d){const m=Array(d);for(let v=0;v<d;v++)m[v]=u[v];return m}return[]}function P(u,d){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(l(v)){const V=u.length||0,L=v.length||0;u.length=V+L;for(let B=0;B<L;B++)u[V+B]=v[B]}else u.push(v)}}class E{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(u){return/^[\s\xa0]*$/.test(u)}function S(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var O=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function M(u,d,m){for(const v in u)d.call(m,u[v],v,u)}function I(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function y(u){const d={};for(const m in u)d[m]=u[m];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,d){let m,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(m in v)u[m]=v[m];for(let L=0;L<A.length;L++)m=A[L],Object.prototype.hasOwnProperty.call(v,m)&&(u[m]=v[m])}}function k(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function b(u){a.setTimeout(()=>{throw u},0)}function x(){var u=q;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class gt{constructor(){this.h=this.g=null}add(d,m){const v=rr.get();v.set(d,m),this.h?this.h.next=v:this.g=v,this.h=v}}var rr=new E(()=>new Wi,u=>u.reset());class Wi{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,z=!1,q=new gt,X=()=>{const u=a.Promise.resolve(void 0);fe=()=>{u.then(we)}};var we=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(m){b(m)}var d=rr;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}z=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var An=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return u}();function Rn(u,d){if(ke.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,v=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(O){e:{try{D(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Pn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Rn.aa.h.call(this)}}w(Rn,ke);var Pn={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),FP=0;function jP(u,d,m,v,V){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!v,this.ha=V,this.key=++FP,this.da=this.fa=!1}function gl(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function yl(u){this.src=u,this.g={},this.h=0}yl.prototype.add=function(u,d,m,v,V){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var B=Th(u,d,v,V);return-1<B?(d=u[B],m||(d.fa=!1)):(d=new jP(d,this.src,L,!!v,V),d.fa=m,u.push(d)),d};function wh(u,d){var m=d.type;if(m in u.g){var v=u.g[m],V=Array.prototype.indexOf.call(v,d,void 0),L;(L=0<=V)&&Array.prototype.splice.call(v,V,1),L&&(gl(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Th(u,d,m,v){for(var V=0;V<u.length;++V){var L=u[V];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==v)return V}return-1}var Sh="closure_lm_"+(1e6*Math.random()|0),Ih={};function ry(u,d,m,v,V){if(Array.isArray(d)){for(var L=0;L<d.length;L++)ry(u,d[L],m,v,V);return null}return m=oy(m),u&&u[Cn]?u.K(d,m,c(v)?!!v.capture:!1,V):UP(u,d,m,!1,v,V)}function UP(u,d,m,v,V,L){if(!d)throw Error("Invalid event type");var B=c(V)?!!V.capture:!!V,he=Rh(u);if(he||(u[Sh]=he=new yl(u)),m=he.add(d,m,v,B,L),m.proxy)return m;if(v=BP(),m.proxy=v,v.src=u,v.listener=m,u.addEventListener)An||(V=B),V===void 0&&(V=!1),u.addEventListener(d.toString(),v,V);else if(u.attachEvent)u.attachEvent(sy(d.toString()),v);else if(u.addListener&&u.removeListener)u.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function BP(){function u(m){return d.call(u.src,u.listener,m)}const d=zP;return u}function iy(u,d,m,v,V){if(Array.isArray(d))for(var L=0;L<d.length;L++)iy(u,d[L],m,v,V);else v=c(v)?!!v.capture:!!v,m=oy(m),u&&u[Cn]?(u=u.i,d=String(d).toString(),d in u.g&&(L=u.g[d],m=Th(L,m,v,V),-1<m&&(gl(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete u.g[d],u.h--)))):u&&(u=Rh(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Th(d,m,v,V)),(m=-1<u?d[u]:null)&&Ah(m))}function Ah(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[Cn])wh(d.i,u);else{var m=u.type,v=u.proxy;d.removeEventListener?d.removeEventListener(m,v,u.capture):d.detachEvent?d.detachEvent(sy(m),v):d.addListener&&d.removeListener&&d.removeListener(v),(m=Rh(d))?(wh(m,u),m.h==0&&(m.src=null,d[Sh]=null)):gl(u)}}}function sy(u){return u in Ih?Ih[u]:Ih[u]="on"+u}function zP(u,d){if(u.da)u=!0;else{d=new Rn(d,this);var m=u.listener,v=u.ha||u.src;u.fa&&Ah(u),u=m.call(v,d)}return u}function Rh(u){return u=u[Sh],u instanceof yl?u:null}var Ph="__closure_events_fn_"+(1e9*Math.random()>>>0);function oy(u){return typeof u=="function"?u:(u[Ph]||(u[Ph]=function(d){return u.handleEvent(d)}),u[Ph])}function nt(){ce.call(this),this.i=new yl(this),this.M=this,this.F=null}w(nt,ce),nt.prototype[Cn]=!0,nt.prototype.removeEventListener=function(u,d,m,v){iy(this,u,d,m,v)};function yt(u,d){var m,v=u.F;if(v)for(m=[];v;v=v.F)m.push(v);if(u=u.M,v=d.type||d,typeof d=="string")d=new ke(d,u);else if(d instanceof ke)d.target=d.target||u;else{var V=d;d=new ke(v,u),C(d,V)}if(V=!0,m)for(var L=m.length-1;0<=L;L--){var B=d.g=m[L];V=vl(B,v,!0,d)&&V}if(B=d.g=u,V=vl(B,v,!0,d)&&V,V=vl(B,v,!1,d)&&V,m)for(L=0;L<m.length;L++)B=d.g=m[L],V=vl(B,v,!1,d)&&V}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],v=0;v<m.length;v++)gl(m[v]);delete u.g[d],u.h--}}this.F=null},nt.prototype.K=function(u,d,m,v){return this.i.add(String(u),d,!1,m,v)},nt.prototype.L=function(u,d,m,v){return this.i.add(String(u),d,!0,m,v)};function vl(u,d,m,v){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,L=0;L<d.length;++L){var B=d[L];if(B&&!B.da&&B.capture==m){var he=B.listener,Ge=B.ha||B.src;B.fa&&wh(u.i,B),V=he.call(Ge,v)!==!1&&V}}return V&&!v.defaultPrevented}function ay(u,d,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function ly(u){u.g=ay(()=>{u.g=null,u.i&&(u.i=!1,ly(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class $P extends ce{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ly(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ao(u){ce.call(this),this.h=u,this.g={}}w(ao,ce);var uy=[];function cy(u){M(u.g,function(d,m){this.g.hasOwnProperty(m)&&Ah(d)},u),u.g={}}ao.prototype.N=function(){ao.aa.N.call(this),cy(this)},ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ch=a.JSON.stringify,WP=a.JSON.parse,KP=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function xh(){}xh.prototype.h=null;function hy(u){return u.h||(u.h=u.i())}function dy(){}var lo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kh(){ke.call(this,"d")}w(kh,ke);function Nh(){ke.call(this,"c")}w(Nh,ke);var ni={},fy=null;function _l(){return fy=fy||new nt}ni.La="serverreachability";function py(u){ke.call(this,ni.La,u)}w(py,ke);function uo(u){const d=_l();yt(d,new py(d))}ni.STAT_EVENT="statevent";function my(u,d){ke.call(this,ni.STAT_EVENT,u),this.stat=d}w(my,ke);function vt(u){const d=_l();yt(d,new my(d,u))}ni.Ma="timingevent";function gy(u,d){ke.call(this,ni.Ma,u),this.size=d}w(gy,ke);function co(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function ho(){this.g=!0}ho.prototype.xa=function(){this.g=!1};function HP(u,d,m,v,V,L){u.info(function(){if(u.g)if(L)for(var B="",he=L.split("&"),Ge=0;Ge<he.length;Ge++){var se=he[Ge].split("=");if(1<se.length){var rt=se[0];se=se[1];var it=rt.split("_");B=2<=it.length&&it[1]=="type"?B+(rt+"="+se+"&"):B+(rt+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+d+`
`+m+`
`+B})}function GP(u,d,m,v,V,L,B){u.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+d+`
`+m+`
`+L+" "+B})}function Ki(u,d,m,v){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+QP(u,m)+(v?" "+v:"")})}function qP(u,d){u.info(function(){return"TIMEOUT: "+d})}ho.prototype.info=function(){};function QP(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var v=m[u];if(!(2>v.length)){var V=v[1];if(Array.isArray(V)&&!(1>V.length)){var L=V[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<V.length;B++)V[B]=""}}}}return Ch(m)}catch{return d}}var El={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dh;function wl(){}w(wl,xh),wl.prototype.g=function(){return new XMLHttpRequest},wl.prototype.i=function(){return{}},Dh=new wl;function ir(u,d,m,v){this.j=u,this.i=d,this.l=m,this.R=v||1,this.U=new ao(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vy}function vy(){this.i=null,this.g="",this.h=!1}var _y={},bh={};function Vh(u,d,m){u.L=1,u.v=Al(xn(d)),u.m=m,u.P=!0,Ey(u,null)}function Ey(u,d){u.F=Date.now(),Tl(u),u.A=xn(u.v);var m=u.A,v=u.R;Array.isArray(v)||(v=[String(v)]),Vy(m.i,"t",v),u.C=0,m=u.j.J,u.h=new vy,u.g=Jy(u.j,m?d:null,!u.m),0<u.O&&(u.M=new $P(p(u.Y,u,u.g),u.O)),d=u.U,m=u.g,v=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(uy[0]=V.toString()),V=uy);for(var L=0;L<V.length;L++){var B=ry(m,V[L],v||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),uo(),HP(u.i,u.u,u.A,u.l,u.R,u.m)}ir.prototype.ca=function(u){u=u.target;const d=this.M;d&&kn(u)==3?d.j():this.Y(u)},ir.prototype.Y=function(u){try{if(u==this.g)e:{const it=kn(this.g);var d=this.g.Ba();const qi=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||By(this.g)))){this.J||it!=4||d==7||(d==8||0>=qi?uo(3):uo(2)),Oh(this);var m=this.g.Z();this.X=m;t:if(wy(this)){var v=By(this.g);u="";var V=v.length,L=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ri(this),fo(this);var B="";break t}this.h.i=new a.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,u+=this.h.i.decode(v[d],{stream:!(L&&d==V-1)});v.length=0,this.h.g+=u,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=m==200,GP(this.i,this.u,this.A,this.l,this.R,it,m),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Ge=this.g;if((he=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(he)){var se=he;break t}}se=null}if(m=se)Ki(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lh(this,m);else{this.o=!1,this.s=3,vt(12),ri(this),fo(this);break e}}if(this.P){m=!0;let Qt;for(;!this.J&&this.C<B.length;)if(Qt=YP(this,B),Qt==bh){it==4&&(this.s=4,vt(14),m=!1),Ki(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==_y){this.s=4,vt(15),Ki(this.i,this.l,B,"[Invalid Chunk]"),m=!1;break}else Ki(this.i,this.l,Qt,null),Lh(this,Qt);if(wy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||B.length!=0||this.h.h||(this.s=1,vt(16),m=!1),this.o=this.o&&m,!m)Ki(this.i,this.l,B,"[Invalid Chunked Response]"),ri(this),fo(this);else if(0<B.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),zh(rt),rt.M=!0,vt(11))}}else Ki(this.i,this.l,B,null),Lh(this,B);it==4&&ri(this),this.o&&!this.J&&(it==4?qy(this.j,this):(this.o=!1,Tl(this)))}else fC(this.g),m==400&&0<B.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ri(this),fo(this)}}}catch{}finally{}};function wy(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function YP(u,d){var m=u.C,v=d.indexOf(`
`,m);return v==-1?bh:(m=Number(d.substring(m,v)),isNaN(m)?_y:(v+=1,v+m>d.length?bh:(d=d.slice(v,v+m),u.C=v+m,d)))}ir.prototype.cancel=function(){this.J=!0,ri(this)};function Tl(u){u.S=Date.now()+u.I,Ty(u,u.I)}function Ty(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=co(p(u.ba,u),d)}function Oh(u){u.B&&(a.clearTimeout(u.B),u.B=null)}ir.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(qP(this.i,this.A),this.L!=2&&(uo(),vt(17)),ri(this),this.s=2,fo(this)):Ty(this,this.S-u)};function fo(u){u.j.G==0||u.J||qy(u.j,u)}function ri(u){Oh(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,cy(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function Lh(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||Mh(m.h,u))){if(!u.K&&Mh(m.h,u)&&m.G==3){try{var v=m.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Nl(m),xl(m);else break e;Bh(m),vt(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=co(p(m.Za,m),6e3));if(1>=Ay(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else si(m,11)}else if((u.K||m.g==u)&&Nl(m),!_(d))for(V=m.Da.g.parse(d),d=0;d<V.length;d++){let se=V[d];if(m.T=se[0],se=se[1],m.G==2)if(se[0]=="c"){m.K=se[1],m.ia=se[2];const rt=se[3];rt!=null&&(m.la=rt,m.j.info("VER="+m.la));const it=se[4];it!=null&&(m.Aa=it,m.j.info("SVER="+m.Aa));const qi=se[5];qi!=null&&typeof qi=="number"&&0<qi&&(v=1.5*qi,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const Qt=u.g;if(Qt){const bl=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bl){var L=v.h;L.g||bl.indexOf("spdy")==-1&&bl.indexOf("quic")==-1&&bl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Fh(L,L.h),L.h=null))}if(v.D){const $h=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;$h&&(v.ya=$h,pe(v.I,v.D,$h))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var B=u;if(v.qa=Xy(v,v.J?v.ia:null,v.W),B.K){Ry(v.h,B);var he=B,Ge=v.L;Ge&&(he.I=Ge),he.B&&(Oh(he),Tl(he)),v.g=B}else Hy(v);0<m.i.length&&kl(m)}else se[0]!="stop"&&se[0]!="close"||si(m,7);else m.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?si(m,7):Uh(m):se[0]!="noop"&&m.l&&m.l.ta(se),m.v=0)}}uo(4)}catch{}}var XP=class{constructor(u,d){this.g=u,this.map=d}};function Sy(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Iy(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ay(u){return u.h?1:u.g?u.g.size:0}function Mh(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function Fh(u,d){u.g?u.g.add(d):u.h=d}function Ry(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}Sy.prototype.cancel=function(){if(this.i=Py(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Py(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return T(u.i)}function JP(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,v=0;v<m;v++)d.push(u[v]);return d}d=[],m=0;for(v in u)d[m++]=u[v];return d}function ZP(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const v in u)d[m++]=v;return d}}}function Cy(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=ZP(u),v=JP(u),V=v.length,L=0;L<V;L++)d.call(void 0,v[L],m&&m[L],u)}var xy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eC(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var v=u[m].indexOf("="),V=null;if(0<=v){var L=u[m].substring(0,v);V=u[m].substring(v+1)}else L=u[m];d(L,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function ii(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ii){this.h=u.h,Sl(this,u.j),this.o=u.o,this.g=u.g,Il(this,u.s),this.l=u.l;var d=u.i,m=new go;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),ky(this,m),this.m=u.m}else u&&(d=String(u).match(xy))?(this.h=!1,Sl(this,d[1]||"",!0),this.o=po(d[2]||""),this.g=po(d[3]||"",!0),Il(this,d[4]),this.l=po(d[5]||"",!0),ky(this,d[6]||"",!0),this.m=po(d[7]||"")):(this.h=!1,this.i=new go(null,this.h))}ii.prototype.toString=function(){var u=[],d=this.j;d&&u.push(mo(d,Ny,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(mo(d,Ny,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(mo(m,m.charAt(0)=="/"?rC:nC,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",mo(m,sC)),u.join("")};function xn(u){return new ii(u)}function Sl(u,d,m){u.j=m?po(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Il(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function ky(u,d,m){d instanceof go?(u.i=d,oC(u.i,u.h)):(m||(d=mo(d,iC)),u.i=new go(d,u.h))}function pe(u,d,m){u.i.set(d,m)}function Al(u){return pe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function po(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function mo(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,tC),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function tC(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ny=/[#\/\?@]/g,nC=/[#\?:]/g,rC=/[#\?]/g,iC=/[#\?@]/g,sC=/#/g;function go(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function sr(u){u.g||(u.g=new Map,u.h=0,u.i&&eC(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=go.prototype,t.add=function(u,d){sr(this),this.i=null,u=Hi(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function Dy(u,d){sr(u),d=Hi(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function by(u,d){return sr(u),d=Hi(u,d),u.g.has(d)}t.forEach=function(u,d){sr(this),this.g.forEach(function(m,v){m.forEach(function(V){u.call(d,V,v,this)},this)},this)},t.na=function(){sr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let v=0;v<d.length;v++){const V=u[v];for(let L=0;L<V.length;L++)m.push(d[v])}return m},t.V=function(u){sr(this);let d=[];if(typeof u=="string")by(this,u)&&(d=d.concat(this.g.get(Hi(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return sr(this),this.i=null,u=Hi(this,u),by(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function Vy(u,d,m){Dy(u,d),0<m.length&&(u.i=null,u.g.set(Hi(u,d),T(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var v=d[m];const L=encodeURIComponent(String(v)),B=this.V(v);for(v=0;v<B.length;v++){var V=L;B[v]!==""&&(V+="="+encodeURIComponent(String(B[v]))),u.push(V)}}return this.i=u.join("&")};function Hi(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function oC(u,d){d&&!u.j&&(sr(u),u.i=null,u.g.forEach(function(m,v){var V=v.toLowerCase();v!=V&&(Dy(this,v),Vy(this,V,m))},u)),u.j=d}function aC(u,d){const m=new ho;if(a.Image){const v=new Image;v.onload=g(or,m,"TestLoadImage: loaded",!0,d,v),v.onerror=g(or,m,"TestLoadImage: error",!1,d,v),v.onabort=g(or,m,"TestLoadImage: abort",!1,d,v),v.ontimeout=g(or,m,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=u}else d(!1)}function lC(u,d){const m=new ho,v=new AbortController,V=setTimeout(()=>{v.abort(),or(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:v.signal}).then(L=>{clearTimeout(V),L.ok?or(m,"TestPingServer: ok",!0,d):or(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),or(m,"TestPingServer: error",!1,d)})}function or(u,d,m,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(m)}catch{}}function uC(){this.g=new KP}function cC(u,d,m){const v=m||"";try{Cy(u,function(V,L){let B=V;c(V)&&(B=Ch(V)),d.push(v+L+"="+encodeURIComponent(B))})}catch(V){throw d.push(v+"type="+encodeURIComponent("_badmap")),V}}function Rl(u){this.l=u.Ub||null,this.j=u.eb||!1}w(Rl,xh),Rl.prototype.g=function(){return new Pl(this.l,this.j)},Rl.prototype.i=function(u){return function(){return u}}({});function Pl(u,d){nt.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Pl,nt),t=Pl.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,vo(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,vo(this)),this.g&&(this.readyState=3,vo(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oy(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oy(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?yo(this):vo(this),this.readyState==3&&Oy(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,yo(this))},t.Qa=function(u){this.g&&(this.response=u,yo(this))},t.ga=function(){this.g&&yo(this)};function yo(u){u.readyState=4,u.l=null,u.j=null,u.v=null,vo(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function vo(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ly(u){let d="";return M(u,function(m,v){d+=v,d+=":",d+=m,d+=`\r
`}),d}function jh(u,d,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Ly(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):pe(u,d,m))}function Pe(u){nt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Pe,nt);var hC=/^https?$/i,dC=["POST","PUT"];t=Pe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dh.g(),this.v=this.o?hy(this.o):hy(Dh),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(L){My(this,L);return}if(u=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)m.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())m.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),V=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dC,d,void 0))||v||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of m)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uy(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){My(this,L)}};function My(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Fy(u),Cl(u)}function Fy(u){u.A||(u.A=!0,yt(u,"complete"),yt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,yt(this,"complete"),yt(this,"abort"),Cl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cl(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jy(this):this.bb())},t.bb=function(){jy(this)};function jy(u){if(u.h&&typeof o<"u"&&(!u.v[1]||kn(u)!=4||u.Z()!=2)){if(u.u&&kn(u)==4)ay(u.Ea,0,u);else if(yt(u,"readystatechange"),kn(u)==4){u.h=!1;try{const B=u.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var v;if(v=B===0){var V=String(u.D).match(xy)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),v=!hC.test(V?V.toLowerCase():"")}m=v}if(m)yt(u,"complete"),yt(u,"success");else{u.m=6;try{var L=2<kn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",Fy(u)}}finally{Cl(u)}}}}function Cl(u,d){if(u.g){Uy(u);const m=u.g,v=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||yt(u,"ready");try{m.onreadystatechange=v}catch{}}}function Uy(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function kn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),WP(d)}};function By(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function fC(u){const d={};u=(u.g&&2<=kn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<u.length;v++){if(_(u[v]))continue;var m=k(u[v]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[V]||[];d[V]=L,L.push(m)}I(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _o(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function zy(u){this.Aa=0,this.i=[],this.j=new ho,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_o("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_o("baseRetryDelayMs",5e3,u),this.cb=_o("retryDelaySeedMs",1e4,u),this.Wa=_o("forwardChannelMaxRetries",2,u),this.wa=_o("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Sy(u&&u.concurrentRequestLimit),this.Da=new uC,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zy.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,v){vt(0),this.W=u,this.H=d||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Xy(this,null,this.W),kl(this)};function Uh(u){if($y(u),u.G==3){var d=u.U++,m=xn(u.I);if(pe(m,"SID",u.K),pe(m,"RID",d),pe(m,"TYPE","terminate"),Eo(u,m),d=new ir(u,u.j,d),d.L=2,d.v=Al(xn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Jy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Tl(d)}Yy(u)}function xl(u){u.g&&(zh(u),u.g.cancel(),u.g=null)}function $y(u){xl(u),u.u&&(a.clearTimeout(u.u),u.u=null),Nl(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function kl(u){if(!Iy(u.h)&&!u.s){u.s=!0;var d=u.Ga;fe||X(),z||(fe(),z=!0),q.add(d,u),u.B=0}}function pC(u,d){return Ay(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=co(p(u.Ga,u,d),Qy(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new ir(this,this.j,u);let L=this.o;if(this.S&&(L?(L=y(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(V.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Ky(this,V,d),m=xn(this.I),pe(m,"RID",u),pe(m,"CVER",22),this.D&&pe(m,"X-HTTP-Session-Id",this.D),Eo(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(Ly(L)))+"&"+d:this.m&&jh(m,this.m,L)),Fh(this.h,V),this.Ua&&pe(m,"TYPE","init"),this.P?(pe(m,"$req",d),pe(m,"SID","null"),V.T=!0,Vh(V,m,null)):Vh(V,m,d),this.G=2}}else this.G==3&&(u?Wy(this,u):this.i.length==0||Iy(this.h)||Wy(this))};function Wy(u,d){var m;d?m=d.l:m=u.U++;const v=xn(u.I);pe(v,"SID",u.K),pe(v,"RID",m),pe(v,"AID",u.T),Eo(u,v),u.m&&u.o&&jh(v,u.m,u.o),m=new ir(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=Ky(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Fh(u.h,m),Vh(m,v,d)}function Eo(u,d){u.H&&M(u.H,function(m,v){pe(d,v,m)}),u.l&&Cy({},function(m,v){pe(d,v,m)})}function Ky(u,d,m){m=Math.min(u.i.length,m);var v=u.l?p(u.l.Na,u.l,u):null;e:{var V=u.i;let L=-1;for(;;){const B=["count="+m];L==-1?0<m?(L=V[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let he=!0;for(let Ge=0;Ge<m;Ge++){let se=V[Ge].g;const rt=V[Ge].map;if(se-=L,0>se)L=Math.max(0,V[Ge].g-100),he=!1;else try{cC(rt,B,"req"+se+"_")}catch{v&&v(rt)}}if(he){v=B.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,v}function Hy(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;fe||X(),z||(fe(),z=!0),q.add(d,u),u.v=0}}function Bh(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=co(p(u.Fa,u),Qy(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Gy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=co(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),xl(this),Gy(this))};function zh(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Gy(u){u.g=new ir(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=xn(u.qa);pe(d,"RID","rpc"),pe(d,"SID",u.K),pe(d,"AID",u.T),pe(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&pe(d,"TO",u.ja),pe(d,"TYPE","xmlhttp"),Eo(u,d),u.m&&u.o&&jh(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Al(xn(d)),m.m=null,m.P=!0,Ey(m,u)}t.Za=function(){this.C!=null&&(this.C=null,xl(this),Bh(this),vt(19))};function Nl(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function qy(u,d){var m=null;if(u.g==d){Nl(u),zh(u),u.g=null;var v=2}else if(Mh(u.h,d))m=d.D,Ry(u.h,d),v=1;else return;if(u.G!=0){if(d.o)if(v==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var V=u.B;v=_l(),yt(v,new gy(v,m)),kl(u)}else Hy(u);else if(V=d.s,V==3||V==0&&0<d.X||!(v==1&&pC(u,d)||v==2&&Bh(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),V){case 1:si(u,5);break;case 4:si(u,10);break;case 3:si(u,6);break;default:si(u,2)}}}function Qy(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function si(u,d){if(u.j.info("Error code "+d),d==2){var m=p(u.fb,u),v=u.Xa;const V=!v;v=new ii(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Sl(v,"https"),Al(v),V?aC(v.toString(),m):lC(v.toString(),m)}else vt(2);u.G=0,u.l&&u.l.sa(d),Yy(u),$y(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Yy(u){if(u.G=0,u.ka=[],u.l){const d=Py(u.h);(d.length!=0||u.i.length!=0)&&(P(u.ka,d),P(u.ka,u.i),u.h.i.length=0,T(u.i),u.i.length=0),u.l.ra()}}function Xy(u,d,m){var v=m instanceof ii?xn(m):new ii(m);if(v.g!="")d&&(v.g=d+"."+v.g),Il(v,v.s);else{var V=a.location;v=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var L=new ii(null);v&&Sl(L,v),d&&(L.g=d),V&&Il(L,V),m&&(L.l=m),v=L}return m=u.D,d=u.ya,m&&d&&pe(v,m,d),pe(v,"VER",u.la),Eo(u,v),v}function Jy(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Pe(new Rl({eb:m})):new Pe(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zy(){}t=Zy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Dl(){}Dl.prototype.g=function(u,d){return new xt(u,d)};function xt(u,d){nt.call(this),this.g=new zy(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!_(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Gi(this)}w(xt,nt),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Uh(this.g)},xt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Ch(u),u=m);d.i.push(new XP(d.Ya++,u)),d.G==3&&kl(d)},xt.prototype.N=function(){this.g.l=null,delete this.j,Uh(this.g),delete this.g,xt.aa.N.call(this)};function ev(u){kh.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}w(ev,kh);function tv(){Nh.call(this),this.status=1}w(tv,Nh);function Gi(u){this.g=u}w(Gi,Zy),Gi.prototype.ua=function(){yt(this.g,"a")},Gi.prototype.ta=function(u){yt(this.g,new ev(u))},Gi.prototype.sa=function(u){yt(this.g,new tv)},Gi.prototype.ra=function(){yt(this.g,"b")},Dl.prototype.createWebChannel=Dl.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,NI=function(){return new Dl},kI=function(){return _l()},xI=ni,Qf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},El.NO_ERROR=0,El.TIMEOUT=8,El.HTTP_ERROR=6,Su=El,yy.COMPLETE="complete",CI=yy,dy.EventType=lo,lo.OPEN="a",lo.CLOSE="b",lo.ERROR="c",lo.MESSAGE="d",nt.prototype.listen=nt.prototype.K,Mo=dy,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,PI=Pe}).apply(typeof Jl<"u"?Jl:typeof self<"u"?self:typeof window<"u"?window:{});const X_="@firebase/firestore";/**
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
 */let ut=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let to="10.14.0";/**
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
 */const Di=new Pm("@firebase/firestore");function xo(){return Di.logLevel}function K(t,...e){if(Di.logLevel<=ne.DEBUG){const n=e.map(jm);Di.debug(`Firestore (${to}): ${t}`,...n)}}function Xn(t,...e){if(Di.logLevel<=ne.ERROR){const n=e.map(jm);Di.error(`Firestore (${to}): ${t}`,...n)}}function Ms(t,...e){if(Di.logLevel<=ne.WARN){const n=e.map(jm);Di.warn(`Firestore (${to}): ${t}`,...n)}}function jm(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${to}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function ue(t,e){t||Y()}function Z(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class DI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class zV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $V{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new DI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new ut(e)}}class WV{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new HV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class bI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ue(0,0))}static max(){return new J(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Na{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Na?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Na{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const QV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Na{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return QV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ge.fromString(e))}static fromName(e){return new H(ge.fromString(e).popFirst(5))}static empty(){return new H(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ge(e.slice()))}}function YV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Br(i,H.empty(),e)}function XV(t){return new Br(t.readTime,t.key,-1)}class Br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Br(J.min(),H.empty(),-1)}static max(){return new Br(J.max(),H.empty(),-1)}}function JV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const ZV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==ZV)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function tO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function il(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Um{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Um.oe=-1;function Yc(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function nO(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function J_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zl(this.root,e,this.comparator,!0)}}class Zl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Z_(this.data.getIterator())}getIteratorFrom(e){return new Z_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Z_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class OI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new OI("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const rO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=rO.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bi(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function Bm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zm(t){const e=t.mapValue.fields.__previous_value__;return Bm(e)?zm(e):e}function Da(t){const e=zr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class iO{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ba{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ba("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ba&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const eu={mapValue:{}};function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bm(t)?4:oO(t)?9007199254740991:sO(t)?10:11:Y()}function In(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Da(t).isEqual(Da(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=zr(i.timestampValue),a=zr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return bi(i.bytesValue).isEqual(bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),a=De(s.doubleValue);return o===a?cc(o)===cc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(J_(o)!==J_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!In(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function Va(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=Vi(t),r=Vi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=De(s.integerValue||s.doubleValue),l=De(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return e0(t.timestampValue,e.timestampValue);case 4:return e0(Da(t),Da(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=bi(s),l=bi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=oe(a[c],l[c]);if(h!==0)return h}return oe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=oe(De(s.latitude),De(o.latitude));return a!==0?a:oe(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return t0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,T=oe(((c=g==null?void 0:g.values)===null||c===void 0?void 0:c.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return T!==0?T:t0(g,w)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===eu.mapValue&&o===eu.mapValue)return 0;if(s===eu.mapValue)return 1;if(o===eu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=oe(l[f],h[f]);if(p!==0)return p;const g=js(a[l[f]],c[h[f]]);if(g!==0)return g}return oe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Y()}}function e0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=zr(t),r=zr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function t0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=js(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Us(t){return Yf(t)}function Yf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Yf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Yf(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function n0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xf(t){return!!t&&"integerValue"in t}function $m(t){return!!t&&"arrayValue"in t}function r0(t){return!!t&&"nullValue"in t}function i0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Iu(t){return!!t&&"mapValue"in t}function sO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ea(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(ea(this.value))}}function LI(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new Xe([n]);if(Iu(r)){const s=LI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
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
 */class ht{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,J.min(),J.min(),J.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new ht(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ht(e,2,n,J.min(),J.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,J.min(),J.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hc{constructor(e,n){this.position=e,this.inclusive=n}}function s0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function o0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function aO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class MI{}class Me extends MI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uO(e,n,r):n==="array-contains"?new dO(e,r):n==="in"?new fO(e,r):n==="not-in"?new pO(e,r):n==="array-contains-any"?new mO(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cO(e,r):new hO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(js(n,this.value)):n!==null&&Vi(this.value)===Vi(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends MI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return FI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function FI(t){return t.op==="and"}function jI(t){return lO(t)&&FI(t)}function lO(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Jf(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(jI(t))return t.filters.map(e=>Jf(e)).join(",");{const e=t.filters.map(n=>Jf(n)).join(",");return`${t.op}(${e})`}}function UI(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof un?function(r,i){return i instanceof un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&UI(o,i.filters[a]),!0):!1}(t,e):void Y()}function BI(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(BI).join(" ,")+"}"}(t):"Filter"}class uO extends Me{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class cO extends Me{constructor(e,n){super(e,"in",n),this.keys=zI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hO extends Me{constructor(e,n){super(e,"not-in",n),this.keys=zI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class dO extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $m(n)&&Va(n.arrayValue,this.value)}}class fO extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Va(this.value.arrayValue,n)}}class pO extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Va(this.value.arrayValue,n)}}class mO extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$m(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Va(this.value.arrayValue,r))}}/**
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
 */class gO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function a0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gO(t,e,n,r,i,s,o)}function Wm(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Jf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),e.ue=n}return e.ue}function Km(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!UI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!o0(t.startAt,e.startAt)&&o0(t.endAt,e.endAt)}function Zf(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class no{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yO(t,e,n,r,i,s,o,a){return new no(t,e,n,r,i,s,o,a)}function Xc(t){return new no(t)}function l0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $I(t){return t.collectionGroup!==null}function ta(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ze(Xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Oa(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new Oa(Xe.keyField(),r))}return e.ce}function _n(t){const e=Z(t);return e.le||(e.le=vO(e,ta(t))),e.le}function vO(t,e){if(t.limitType==="F")return a0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oa(i.field,s)});const n=t.endAt?new hc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hc(t.startAt.position,t.startAt.inclusive):null;return a0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ep(t,e){const n=t.filters.concat([e]);return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tp(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jc(t,e){return Km(_n(t),_n(e))&&t.limitType===e.limitType}function WI(t){return`${Wm(_n(t))}|lt:${t.limitType}`}function Yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>BI(i)).join(", ")}]`),Yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Us(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Us(i)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function Zc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ta(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=s0(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ta(r),i)||r.endAt&&!function(o,a,l){const c=s0(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ta(r),i))}(t,e)}function _O(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function KI(t){return(e,n)=>{let r=!1;for(const i of ta(t)){const s=EO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EO(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?js(l,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class ro{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VI(this.inner)}size(){return this.innerSize}}/**
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
 */const wO=new Re(H.comparator);function Jn(){return wO}const HI=new Re(H.comparator);function Fo(...t){let e=HI;for(const n of t)e=e.insert(n.key,n);return e}function GI(t){let e=HI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gi(){return na()}function qI(){return na()}function na(){return new ro(t=>t.toString(),(t,e)=>t.isEqual(e))}const TO=new Re(H.comparator),SO=new Ze(H.comparator);function te(...t){let e=SO;for(const n of t)e=e.add(n);return e}const IO=new Ze(oe);function AO(){return IO}/**
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
 */function Hm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function QI(t){return{integerValue:""+t}}function RO(t,e){return nO(e)?QI(e):Hm(t,e)}/**
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
 */class eh{constructor(){this._=void 0}}function PO(t,e,n){return t instanceof dc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Bm(s)&&(s=zm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof La?XI(t,e):t instanceof Ma?JI(t,e):function(i,s){const o=YI(i,s),a=u0(o)+u0(i.Pe);return Xf(o)&&Xf(i.Pe)?QI(a):Hm(i.serializer,a)}(t,e)}function CO(t,e,n){return t instanceof La?XI(t,e):t instanceof Ma?JI(t,e):n}function YI(t,e){return t instanceof fc?function(r){return Xf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class dc extends eh{}class La extends eh{constructor(e){super(),this.elements=e}}function XI(t,e){const n=ZI(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ma extends eh{constructor(e){super(),this.elements=e}}function JI(t,e){let n=ZI(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class fc extends eh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function u0(t){return De(t.integerValue||t.doubleValue)}function ZI(t){return $m(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof La&&i instanceof La||r instanceof Ma&&i instanceof Ma?Fs(r.elements,i.elements,In):r instanceof fc&&i instanceof fc?In(r.Pe,i.Pe):r instanceof dc&&i instanceof dc}(t.transform,e.transform)}class kO{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Au(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function eA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nA(t.key,on.none()):new sl(t.key,t.data,on.none());{const n=t.data,r=It.empty();let i=new Ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zr(t.key,r,new bt(i.toArray()),on.none())}}function NO(t,e,n){t instanceof sl?function(i,s,o){const a=i.value.clone(),l=h0(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(i,s,o){if(!Au(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=h0(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(tA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ra(t,e,n,r){return t instanceof sl?function(s,o,a,l){if(!Au(s.precondition,o))return a;const c=s.value.clone(),h=d0(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zr?function(s,o,a,l){if(!Au(s.precondition,o))return a;const c=d0(s.fieldTransforms,l,o),h=o.data;return h.setAll(tA(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Au(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function DO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=YI(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function c0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fs(r,i,(s,o)=>xO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sl extends th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zr extends th{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h0(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CO(o,a,n[i]))}return r}function d0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,PO(s,o,e))}return r}class nA extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bO extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class VO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=eA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,r)=>c0(n,r))&&Fs(this.baseMutations,e.baseMutations,(n,r)=>c0(n,r))}}class Gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return TO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gm(e,n,r,i)}}/**
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
 */class OO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Oe,re;function MO(t){switch(t){default:return Y();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function rA(t){if(t===void 0)return Xn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Oe.OK:return F.OK;case Oe.CANCELLED:return F.CANCELLED;case Oe.UNKNOWN:return F.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return F.INTERNAL;case Oe.UNAVAILABLE:return F.UNAVAILABLE;case Oe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Oe.NOT_FOUND:return F.NOT_FOUND;case Oe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Oe.ABORTED:return F.ABORTED;case Oe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Oe.DATA_LOSS:return F.DATA_LOSS;default:return Y()}}(re=Oe||(Oe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function FO(){return new TextEncoder}/**
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
 */const jO=new wi([4294967295,4294967295],0);function f0(t){const e=FO().encode(t),n=new RI;return n.update(e),new Uint8Array(n.digest())}function p0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new wi([n,r],0),new wi([i,s],0)]}class qm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new jo(`Invalid padding: ${n}`);if(r<0)throw new jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new jo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=wi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(wi.fromNumber(r)));return i.compare(jO)===1&&(i=new wi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=f0(e),[r,i]=p0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=f0(e),[r,i]=p0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ol.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nh(J.min(),i,new Re(oe),Jn(),te())}}class ol{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ol(r,n,te(),te(),te())}}/**
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
 */class Ru{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class iA{constructor(e,n){this.targetId=e,this.me=n}}class sA{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class m0{constructor(){this.fe=0,this.ge=y0(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new ol(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=y0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class UO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Jn(),this.qe=g0(),this.Qe=new Re(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Zf(s))if(r===0){const o=new H(s.path);this.Ue(n,o,ht.newNoDocument(o,J.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=bi(r).toUint8Array()}catch(l){if(l instanceof OI)return Ms("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new qm(o,i,s)}catch(l){return Ms(l instanceof jo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Zf(a.target)){const l=new H(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ht.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new nh(e,n,this.Qe,this.ke,r);return this.ke=Jn(),this.qe=g0(),this.Qe=new Re(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new m0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new m0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function g0(){return new Re(H.comparator)}function y0(){return new Re(H.comparator)}const BO={asc:"ASCENDING",desc:"DESCENDING"},zO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$O={and:"AND",or:"OR"};class WO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function np(t,e){return t.useProto3Json||Yc(e)?e:{value:e}}function pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KO(t,e){return pc(t,e.toTimestamp())}function En(t){return ue(!!t),J.fromTimestamp(function(n){const r=zr(n);return new Ue(r.seconds,r.nanos)}(t))}function Qm(t,e){return rp(t,e).canonicalString()}function rp(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function aA(t){const e=ge.fromString(t);return ue(dA(e)),e}function ip(t,e){return Qm(t.databaseId,e.path)}function Id(t,e){const n=aA(e);if(n.get(1)!==t.databaseId.projectId)throw new $(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(uA(n))}function lA(t,e){return Qm(t.databaseId,e)}function HO(t){const e=aA(t);return e.length===4?ge.emptyPath():uA(e)}function sp(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uA(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function v0(t,e,n){return{name:ip(t,e),fields:n.value.mapValue.fields}}function GO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ue(h===void 0||typeof h=="string"),tt.fromBase64String(h||"")):(ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?F.UNKNOWN:rA(c.code);return new $(h,c.message||"")}(o);n=new sA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Id(t,r.document.name),s=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):J.min(),a=new It({mapValue:{fields:r.document.fields}}),l=ht.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Ru(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Id(t,r.document),s=r.readTime?En(r.readTime):J.min(),o=ht.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ru([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Id(t,r.document),s=r.removedTargetIds||[];n=new Ru([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new LO(i,s),a=r.targetId;n=new iA(a,o)}}return n}function qO(t,e){let n;if(e instanceof sl)n={update:v0(t,e.key,e.value)};else if(e instanceof nA)n={delete:ip(t,e.key)};else if(e instanceof Zr)n={update:v0(t,e.key,e.data),updateMask:rL(e.fieldMask)};else{if(!(e instanceof bO))return Y();n={verify:ip(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof dc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof La)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:KO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function QO(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?En(i.updateTime):En(s);return o.isEqual(J.min())&&(o=En(s)),new kO(o,i.transformResults||[])}(n,e))):[]}function YO(t,e){return{documents:[lA(t,e.path)]}}function XO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lA(t,i);const s=function(c){if(c.length!==0)return hA(un.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Xi(p.field),direction:eL(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=np(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function JO(t){let e=HO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=cA(f);return p instanceof un&&jI(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(w){return new Oa(Ji(w.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Yc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new hc(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new hc(g,p)}(n.endAt)),yO(e,i,o,s,a,"F",l,c)}function ZO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ji(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ji(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ji(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ji(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Ji(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>cA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function eL(t){return BO[t]}function tL(t){return zO[t]}function nL(t){return $O[t]}function Xi(t){return{fieldPath:t.canonicalString()}}function Ji(t){return Xe.fromServerFormat(t.fieldPath)}function hA(t){return t instanceof Me?function(n){if(n.op==="=="){if(i0(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NAN"}};if(r0(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(i0(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NAN"}};if(r0(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xi(n.field),op:tL(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(i=>hA(i));return r.length===1?r[0]:{compositeFilter:{op:nL(n.op),filters:r}}}(t):Y()}function rL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ir{constructor(e,n,r,i,s=J.min(),o=J.min(),a=tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iL{constructor(e){this.ct=e}}function sL(t){const e=JO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tp(e,e.limit,"L"):e}/**
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
 */class oL{constructor(){this.un=new aL}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Br.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class aL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(ge.comparator)).toArray()}}/**
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
 */class Bs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Bs(0)}static kn(){return new Bs(-1)}}/**
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
 */class lL{constructor(){this.changes=new ro(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class cL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ra(r.mutation,i,bt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Jn();const o=na(),a=function(){return na()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Zr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ra(h.mutation,c,h.mutation.getFieldMask(),Ue.now())):o.set(c.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new uL(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=na();let i=new Re((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||bt.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=qI();h.forEach(p=>{if(!s.has(p)){const g=eA(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$I(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(gi());let a=-1,l=s;return o.next(c=>j.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,te())).next(h=>({batchId:a,changes:GI(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fo();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,l=>{const c=function(f,p){return new no(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ht.newInvalidDocument(h)))});let a=Fo();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&ra(h.mutation,c,bt.empty(),Ue.now()),Zc(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class hL{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:En(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:sL(i.bundledQuery),readTime:En(i.readTime)}}(n)),j.resolve()}}/**
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
 */class dL{constructor(){this.overlays=new Re(H.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gi();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=gi(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=gi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=gi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OO(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class fL{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Ym{constructor(){this.Tr=new Ze($e.Er),this.dr=new Ze($e.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new $e(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ge([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ge([])),r=new $e(n,e),i=new $e(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
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
 */class pL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze($e.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(oe);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new $e(new H(s),0);let a=new Ze(oe);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new $e(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mL{constructor(e){this.Mr=e,this.docs=function(){return new Re(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jn();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||JV(XV(h),r)<=0||(i.has(h.key)||Zc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gL(this)}getSize(e){return j.resolve(this.size)}}class gL extends lL{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class yL{constructor(e){this.persistence=e,this.Nr=new ro(n=>Wm(n),Km),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ym,this.targetCount=0,this.kr=Bs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class vL{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Um(0),this.Kr=!1,this.Kr=!0,this.$r=new fL,this.referenceDelegate=e(this),this.Ur=new yL(this),this.indexManager=new oL,this.remoteDocumentCache=function(i){return new mL(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new iL(n),this.Gr=new hL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new pL(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new _L(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class _L extends eO{constructor(e){super(),this.currentSequenceNumber=e}}class Xm{constructor(e){this.persistence=e,this.Jr=new Ym,this.Yr=null}static Zr(e){return new Xm(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Jm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jm(e,n.fromCache,r,i)}}/**
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
 */class EL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wL{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return uN()?8:tO(mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new EL;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(xo()<=ne.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(xo()<=ne.DEBUG&&K("QueryEngine","Query:",Yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(xo()<=ne.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):j.resolve())}Yi(e,n){if(l0(n))return j.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=tp(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,tp(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return l0(n)||i.isEqual(J.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(xo()<=ne.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yi(n)),this.rs(e,o,n,YV(i,-1)).next(a=>a))})}ts(e,n){let r=new Ze(KI(e));return n.forEach((i,s)=>{Zc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return xo()<=ne.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Yi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Br.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class TL{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Re(oe),this._s=new ro(s=>Wm(s),Km),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cL(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function SL(t,e,n,r){return new TL(t,e,n,r)}async function fA(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function IL(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,p=f.keys();let g=j.resolve();return p.forEach(w=>{g=g.next(()=>h.getEntry(l,w)).next(T=>{const P=c.docVersions.get(w);ue(P!==null),T.version.compareTo(P)<0&&(f.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),h.addEntry(T)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pA(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function AL(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(tt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(T,P,E){return T.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(s,g))});let l=Jn(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(RL(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(J.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function RL(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function PL(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function CL(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function op(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!il(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function _0(t,e,n){const r=Z(t);let i=J.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=Z(l),p=f._s.get(h);return p!==void 0?j.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,_n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:te())).next(a=>(xL(r,_O(e),a),{documents:a,Ts:s})))}function xL(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class E0{constructor(){this.activeTargetIds=AO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kL{constructor(){this.so=new E0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new E0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NL{_o(e){}shutdown(){}}/**
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
 */class w0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tu=null;function Ad(){return tu===null?tu=function(){return 268435456+Math.round(2147483648*Math.random())}():tu++,"0x"+tu.toString(16)}/**
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
 */const DL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class bL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const at="WebChannelConnection";class VL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Ad(),l=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(K("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ms("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+to}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=DL[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Ad();return new Promise((o,a)=>{const l=new PI;l.setWithCredentials(!0),l.listenOnce(CI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Su.NO_ERROR:const h=l.getResponseJson();K(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Su.TIMEOUT:K(at,`RPC '${e}' ${s} timed out`),a(new $(F.DEADLINE_EXCEEDED,"Request time out"));break;case Su.HTTP_ERROR:const f=l.getStatus();if(K(at,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const w=function(P){const E=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(E)>=0?E:F.UNKNOWN}(g.status);a(new $(w,g.message))}else a(new $(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(F.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{K(at,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(at,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Ad(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NI(),a=kI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");K(at,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,g=!1;const w=new bL({Io:P=>{g?K(at,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(K(at,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),K(at,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},To:()=>f.close()}),T=(P,E,_)=>{P.listen(E,S=>{try{_(S)}catch(D){setTimeout(()=>{throw D},0)}})};return T(f,Mo.EventType.OPEN,()=>{g||(K(at,`RPC '${e}' stream ${i} transport opened.`),w.yo())}),T(f,Mo.EventType.CLOSE,()=>{g||(g=!0,K(at,`RPC '${e}' stream ${i} transport closed`),w.So())}),T(f,Mo.EventType.ERROR,P=>{g||(g=!0,Ms(at,`RPC '${e}' stream ${i} transport errored:`,P),w.So(new $(F.UNAVAILABLE,"The operation could not be completed")))}),T(f,Mo.EventType.MESSAGE,P=>{var E;if(!g){const _=P.data[0];ue(!!_);const S=_,D=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(D){K(at,`RPC '${e}' stream ${i} received error:`,D);const O=D.status;let M=function(A){const C=Oe[A];if(C!==void 0)return rA(C)}(O),I=D.message;M===void 0&&(M=F.INTERNAL,I="Unknown error status: "+O+" with message "+D.message),g=!0,w.So(new $(M,I)),f.close()}else K(at,`RPC '${e}' stream ${i} received:`,_),w.bo(_)}}),T(a,xI.STAT_EVENT,P=>{P.stat===Qf.PROXY?K(at,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Qf.NOPROXY&&K(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}function Rd(){return typeof document<"u"?document:null}/**
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
 */function rh(t){return new WO(t,!0)}/**
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
 */class mA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class gA{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new mA(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OL extends gA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=GO(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?En(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=sp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Zf(l)?{documents:YO(s,l)}:{query:XO(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=oA(s,o.resumeToken);const c=np(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=pc(s,o.snapshotVersion.toTimestamp());const c=np(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=ZO(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=sp(this.serializer),n.removeTarget=e,this.a_(n)}}class LL extends gA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=QO(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=sp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qO(this.serializer,r))};this.a_(n)}}/**
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
 */class ML extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,rp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,rp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class FL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Xn(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class jL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Bi(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Z(l);c.L_.add(4),await al(c),c.q_.set("Unknown"),c.L_.delete(4),await ih(c)}(this))})}),this.q_=new FL(r,i)}}async function ih(t){if(Bi(t))for(const e of t.B_)await e(!0)}async function al(t){for(const e of t.B_)await e(!1)}function yA(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ng(n)?tg(n):io(n).r_()&&eg(n,e))}function Zm(t,e){const n=Z(t),r=io(n);n.N_.delete(e),r.r_()&&vA(n,e),n.N_.size===0&&(r.r_()?r.o_():Bi(n)&&n.q_.set("Unknown"))}function eg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}io(t).A_(e)}function vA(t,e){t.Q_.xe(e),io(t).R_(e)}function tg(t){t.Q_=new UO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),io(t).start(),t.q_.v_()}function ng(t){return Bi(t)&&!io(t).n_()&&t.N_.size>0}function Bi(t){return Z(t).L_.size===0}function _A(t){t.Q_=void 0}async function UL(t){t.q_.set("Online")}async function BL(t){t.N_.forEach((e,n)=>{eg(t,e)})}async function zL(t,e){_A(t),ng(t)?(t.q_.M_(e),tg(t)):t.q_.set("Unknown")}async function $L(t,e,n){if(t.q_.set("Online"),e instanceof sA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await mc(t,r)}else if(e instanceof Ru?t.Q_.Ke(e):e instanceof iA?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await pA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(tt.EMPTY_BYTE_STRING,h.snapshotVersion)),vA(s,l);const f=new Ir(h.target,l,c,h.sequenceNumber);eg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await mc(t,r)}}async function mc(t,e,n){if(!il(e))throw e;t.L_.add(1),await al(t),t.q_.set("Offline"),n||(n=()=>pA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ih(t)})}function EA(t,e){return e().catch(n=>mc(t,n,e))}async function sh(t){const e=Z(t),n=$r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;WL(e);)try{const i=await PL(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,KL(e,i)}catch(i){await mc(e,i)}wA(e)&&TA(e)}function WL(t){return Bi(t)&&t.O_.length<10}function KL(t,e){t.O_.push(e);const n=$r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function wA(t){return Bi(t)&&!$r(t).n_()&&t.O_.length>0}function TA(t){$r(t).start()}async function HL(t){$r(t).p_()}async function GL(t){const e=$r(t);for(const n of t.O_)e.m_(n.mutations)}async function qL(t,e,n){const r=t.O_.shift(),i=Gm.from(r,e,n);await EA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sh(t)}async function QL(t,e){e&&$r(t).V_&&await async function(r,i){if(function(o){return MO(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();$r(r).s_(),await EA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sh(r)}}(t,e),wA(t)&&TA(t)}async function T0(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Bi(n);n.L_.add(3),await al(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ih(n)}async function YL(t,e){const n=Z(t);e?(n.L_.delete(2),await ih(n)):e||(n.L_.add(2),await al(n),n.q_.set("Unknown"))}function io(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new OL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:UL.bind(null,t),Ro:BL.bind(null,t),mo:zL.bind(null,t),d_:$L.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ng(t)?tg(t):t.q_.set("Unknown")):(await t.K_.stop(),_A(t))})),t.K_}function $r(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new LL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:HL.bind(null,t),mo:QL.bind(null,t),f_:GL.bind(null,t),g_:qL.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await sh(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class rg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new rg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ig(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),il(t))return new $(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Fo(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new Ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class S0{constructor(){this.W_=new Re(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zs{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zs(e,n,Ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class XL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class JL{constructor(){this.queries=I0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=I0(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new $(F.ABORTED,"Firestore shutting down"))}}function I0(){return new ro(t=>WI(t),Jc)}async function sg(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new XL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=ig(o,`Initialization of query '${Yi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&ag(n)}async function og(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZL(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&ag(n)}function eM(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function ag(t){t.Y_.forEach(e=>{e.next()})}var ap,A0;(A0=ap||(ap={})).ea="default",A0.Cache="cache";class lg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ap.Cache}}/**
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
 */class SA{constructor(e){this.key=e}}class IA{constructor(e){this.key=e}}class tM{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=KI(e),this.Ra=new Ps(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new S0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=Zc(this.query,f)?f:null,w=!!p&&this.mutatedKeys.has(p.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;p&&g?p.data.isEqual(g.data)?w!==T&&(r.track({type:3,doc:g}),P=!0):this.ga(p,g)||(r.track({type:2,doc:g}),P=!0,(l&&this.Aa(g,l)>0||c&&this.Aa(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),P=!0):p&&!g&&(r.track({type:1,doc:p}),P=!0,(l||c)&&(a=!0)),P&&(g?(o=o.add(g),s=T?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,w){const T=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return T(g)-T(w)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new zs(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new S0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new IA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new SA(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return zs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rM{constructor(e){this.key=e,this.va=!1}}class iM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ro(a=>WI(a),Jc),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(H.comparator),this.Na=new Map,this.La=new Ym,this.Ba={},this.ka=new Map,this.qa=Bs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sM(t,e,n=!0){const r=kA(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await AA(r,e,n,!0),i}async function oM(t,e){const n=kA(t);await AA(n,e,!0,!1)}async function AA(t,e,n,r){const i=await CL(t.localStore,_n(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await aM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&yA(t.remoteStore,i),a}async function aM(t,e,n,r,i){t.Ka=(f,p,g)=>async function(T,P,E,_){let S=P.view.ma(E);S.ns&&(S=await _0(T.localStore,P.query,!1).then(({documents:I})=>P.view.ma(I,S)));const D=_&&_.targetChanges.get(P.targetId),O=_&&_.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(S,T.isPrimaryClient,D,O);return P0(T,P.targetId,M.wa),M.snapshot}(t,f,p,g);const s=await _0(t.localStore,e,!0),o=new tM(e,s.Ts),a=o.ma(s.documents),l=ol.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);P0(t,n,c.wa);const h=new nM(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function lM(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Jc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await op(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zm(r.remoteStore,i.targetId),lp(r,i.targetId)}).catch(rl)):(lp(r,i.targetId),await op(r.localStore,i.targetId,!0))}async function uM(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zm(n.remoteStore,r.targetId))}async function cM(t,e,n){const r=yM(t);try{const i=await function(o,a){const l=Z(o),c=Ue.now(),h=a.reduce((g,w)=>g.add(w.key),te());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=Jn(),T=te();return l.cs.getEntries(g,h).next(P=>{w=P,w.forEach((E,_)=>{_.isValidDocument()||(T=T.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,w)).next(P=>{f=P;const E=[];for(const _ of a){const S=DO(_,f.get(_.key).overlayedDocument);S!=null&&E.push(new Zr(_.key,S,LI(S.value.mapValue),on.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,E,a)}).next(P=>{p=P;const E=P.applyToLocalDocumentSet(f,T);return l.documentOverlayCache.saveOverlays(g,P.batchId,E)})}).then(()=>({batchId:p.batchId,changes:GI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Re(oe)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ll(r,i.changes),await sh(r.remoteStore)}catch(i){const s=ig(i,"Failed to persist write");n.reject(s)}}async function RA(t,e){const n=Z(t);try{const r=await AL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ue(o.va):i.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await ll(n,r,e)}catch(r){await rl(r)}}function R0(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&ag(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hM(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Re(H.comparator);o=o.insert(s,ht.newNoDocument(s,J.min()));const a=te().add(s),l=new nh(J.min(),new Map,new Re(oe),o,a);await RA(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),ug(r)}else await op(r.localStore,e,!1).then(()=>lp(r,e,n)).catch(rl)}async function dM(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await IL(n.localStore,e);CA(n,r,null),PA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ll(n,i)}catch(i){await rl(i)}}async function fM(t,e,n){const r=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(ue(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);CA(r,e,n),PA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ll(r,i)}catch(i){await rl(i)}}function PA(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function CA(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function lp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||xA(t,r)})}function xA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Zm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ug(t))}function P0(t,e,n){for(const r of n)r instanceof SA?(t.La.addReference(r.key,e),pM(t,r)):r instanceof IA?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||xA(t,r.key)):Y()}function pM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),ug(t))}function ug(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new rM(n)),t.Oa=t.Oa.insert(n,r),yA(t.remoteStore,new Ir(_n(Xc(n.path)),r,"TargetPurposeLimboResolution",Um.oe))}}async function ll(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Jm.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=Z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,p=>j.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>j.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!il(f))throw f;K("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),w=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(w);h.os=h.os.insert(p,T)}}}(r.localStore,s))}async function mM(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await fA(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new $(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ll(n,r.hs)}}function gM(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function kA(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hM.bind(null,e),e.Ca.d_=ZL.bind(null,e.eventManager),e.Ca.$a=eM.bind(null,e.eventManager),e}function yM(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fM.bind(null,e),e}class gc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return SL(this.persistence,new wL,e.initialUser,this.serializer)}Ga(e){return new vL(Xm.Zr,this.serializer)}Wa(e){return new kL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gc.provider={build:()=>new gc};class up{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>R0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mM.bind(null,this.syncEngine),await YL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JL}()}createDatastore(e){const n=rh(e.databaseInfo.databaseId),r=function(s){return new VL(s)}(e.databaseInfo);return function(s,o,a,l){return new ML(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new jL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>R0(this.syncEngine,n,0),function(){return w0.D()?new w0:new NL}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new iM(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);K("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await al(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}up.provider={build:()=>new up};/**
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
 */class cg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class vM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=bI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ig(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pd(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function C0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _M(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>T0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>T0(e.remoteStore,i)),t._onlineComponents=e}async function _M(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ms("Error using user provided cache. Falling back to memory cache: "+n),await Pd(t,new gc)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Pd(t,new gc);return t._offlineComponents}async function NA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await C0(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await C0(t,new up))),t._onlineComponents}function EM(t){return NA(t).then(e=>e.syncEngine)}async function yc(t){const e=await NA(t),n=e.eventManager;return n.onListen=sM.bind(null,e.syncEngine),n.onUnlisten=lM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uM.bind(null,e.syncEngine),n}function wM(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new cg({next:p=>{h.Za(),o.enqueueAndForget(()=>og(s,f));const g=p.docs.has(a);!g&&p.fromCache?c.reject(new $(F.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?c.reject(new $(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new lg(Xc(a.path),h,{includeMetadataChanges:!0,_a:!0});return sg(s,f)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}function TM(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new cg({next:p=>{h.Za(),o.enqueueAndForget(()=>og(s,f)),p.fromCache&&l.source==="server"?c.reject(new $(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new lg(a,h,{includeMetadataChanges:!0,_a:!0});return sg(s,f)}(await yc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function DA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const x0=new Map;/**
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
 */function bA(t,e,n){if(!n)throw new $(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SM(t,e,n,r){if(e===!0&&r===!0)throw new $(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function k0(t){if(!H.isDocumentKey(t))throw new $(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function N0(t){if(H.isDocumentKey(t))throw new $(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oh(t);throw new $(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class D0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ah{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BV;switch(r.type){case"firstParty":return new KV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=x0.get(n);r&&(K("ComponentProvider","Removing Datastore"),x0.delete(n),r.terminate())}(this),Promise.resolve()}}function IM(t,e,n,r={}){var i;const s=(t=Ot(t,ah))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ut.MOCK_USER;else{a=nN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(c)}t._authCredentials=new zV(new DI(a,l))}}/**
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
 */class ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ei(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class Fr extends ei{constructor(e,n,r){super(e,n,Xc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new H(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function Nt(t,e,...n){if(t=Be(t),bA("collection","path",e),t instanceof ah){const r=ge.fromString(e,...n);return N0(r),new Fr(t,null,r)}{if(!(t instanceof ft||t instanceof Fr))throw new $(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return N0(r),new Fr(t.firestore,null,r)}}function $s(t,e,...n){if(t=Be(t),arguments.length===1&&(e=bI.newId()),bA("doc","path",e),t instanceof ah){const r=ge.fromString(e,...n);return k0(r),new ft(t,null,new H(r))}{if(!(t instanceof ft||t instanceof Fr))throw new $(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return k0(r),new ft(t.firestore,t instanceof Fr?t.converter:null,new H(r))}}/**
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
 */class b0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new mA(this,"async_queue_retry"),this.Vu=()=>{const r=Rd();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Rd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Rd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Bn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!il(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=rg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function V0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Wr extends ah{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new b0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b0(e),this._firestoreClient=void 0,await e}}}function AM(t,e){const n=typeof t=="object"?t:$S(),r=typeof t=="string"?t:"(default)",i=xm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eN("firestore");s&&IM(i,...s)}return i}function lh(t){if(t._terminated)throw new $(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||RM(t),t._firestoreClient}function RM(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new iO(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,DA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new vM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(tt.fromBase64String(e))}catch(n){throw new $(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ws(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class uh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hg{constructor(e){this._methodName=e}}/**
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
 */class dg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */class fg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const PM=/^__.*__$/;class CM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new sl(e,this.data,n,this.fieldTransforms)}}class VA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function OA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class pg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new pg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(OA(this.Cu)&&PM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class xM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rh(e)}Qu(e,n,r,i=!1){return new pg({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ch(t){const e=t._freezeSettings(),n=rh(t._databaseId);return new xM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LA(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);mg("Data must be an object, but it was:",o,r);const a=MA(r,o);let l,c;if(s.merge)l=new bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=cp(e,f,n);if(!o.contains(p))throw new $(F.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);jA(h,p)||h.push(p)}l=new bt(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new CM(new It(a),l,c)}class hh extends hg{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hh}}function kM(t,e,n,r){const i=t.Qu(1,e,n);mg("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Ui(r,(l,c)=>{const h=gg(e,l,n);c=Be(c);const f=i.Nu(h);if(c instanceof hh)s.push(h);else{const p=ul(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new bt(s);return new VA(o,a,i.fieldTransforms)}function NM(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[cp(e,r,n)],l=[i];if(s.length%2!=0)throw new $(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(cp(e,s[p])),l.push(s[p+1]);const c=[],h=It.empty();for(let p=a.length-1;p>=0;--p)if(!jA(c,a[p])){const g=a[p];let w=l[p];w=Be(w);const T=o.Nu(g);if(w instanceof hh)c.push(g);else{const P=ul(w,T);P!=null&&(c.push(g),h.set(g,P))}}const f=new bt(c);return new VA(h,f,o.fieldTransforms)}function DM(t,e,n,r=!1){return ul(n,t.Qu(r?4:3,e))}function ul(t,e){if(FA(t=Be(t)))return mg("Unsupported field value:",e,t),MA(t,e);if(t instanceof hg)return function(r,i){if(!OA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ul(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:pc(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pc(i.serializer,s)}}if(r instanceof dg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ws)return{bytesValue:oA(i.serializer,r._byteString)};if(r instanceof ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof fg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Hm(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${oh(r)}`)}(t,e)}function MA(t,e){const n={};return VI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=ul(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function FA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof dg||t instanceof Ws||t instanceof ft||t instanceof hg||t instanceof fg)}function mg(t,e,n){if(!FA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=oh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function cp(t,e,n){if((e=Be(e))instanceof uh)return e._internalPath;if(typeof e=="string")return gg(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const bM=new RegExp("[~\\*/\\[\\]]");function gg(t,e,n){if(e.search(bM)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uh(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(F.INVALID_ARGUMENT,a+t+l)}function jA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class UA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VM extends UA{data(){return super.data()}}function dh(t,e){return typeof e=="string"?gg(t,e):e instanceof uh?e._internalPath:e._delegate._internalPath}/**
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
 */function BA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yg{}class zA extends yg{}function nn(t,e,...n){let r=[];e instanceof yg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof vg).length,a=s.filter(l=>l instanceof fh).length;if(o>1||o>0&&a>0)throw new $(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class fh extends zA{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fh(e,n,r)}_apply(e){const n=this._parse(e);return $A(e._query,n),new ei(e.firestore,e.converter,ep(e._query,n))}_parse(e){const n=ch(e.firestore);return function(s,o,a,l,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){M0(f,h);const g=[];for(const w of f)g.push(L0(l,s,w));p={arrayValue:{values:g}}}else p=L0(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||M0(f,h),p=DM(a,o,f,h==="in"||h==="not-in");return Me.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Zt(t,e,n){const r=e,i=dh("where",t);return fh._create(i,r,n)}class vg extends yg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)$A(o,l),o=ep(o,l)}(e._query,n),new ei(e.firestore,e.converter,ep(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _g extends zA{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _g(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oa(s,o)}(e._query,this._field,this._direction);return new ei(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new no(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function O0(t,e="asc"){const n=e,r=dh("orderBy",t);return _g._create(r,n)}function L0(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new $(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$I(e)&&n.indexOf("/")!==-1)throw new $(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!H.isDocumentKey(r))throw new $(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return n0(t,new H(r))}if(n instanceof ft)return n0(t,n._key);throw new $(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`)}function M0(t,e){if(!Array.isArray(t)||t.length===0)throw new $(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $A(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class OM{convertValue(e,n="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>De(o.doubleValue));return new fg(s)}convertGeoPoint(e){return new dg(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Da(e));default:return null}}convertTimestamp(e){const n=zr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ue(dA(r));const i=new ba(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function WA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KA extends UA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Pu extends KA{data(e={}){return super.data(e)}}class HA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pu(this._firestore,this._userDataWriter,r.key,r,new Uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:LM(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function GA(t){t=Ot(t,ft);const e=Ot(t.firestore,Wr);return wM(lh(e),t._key).then(n=>YA(e,t,n))}class Eg extends OM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function yi(t){t=Ot(t,ei);const e=Ot(t.firestore,Wr),n=lh(e),r=new Eg(e);return BA(t._query),TM(n,t._query).then(i=>new HA(e,r,t,i))}function MM(t,e,n){t=Ot(t,ft);const r=Ot(t.firestore,Wr),i=WA(t.converter,e);return wg(r,[LA(ch(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,on.none())])}function qA(t,e,n,...r){t=Ot(t,ft);const i=Ot(t.firestore,Wr),s=ch(i);let o;return o=typeof(e=Be(e))=="string"||e instanceof uh?NM(s,"updateDoc",t._key,e,n,r):kM(s,"updateDoc",t._key,e),wg(i,[o.toMutation(t._key,on.exists(!0))])}function QA(t,e){const n=Ot(t.firestore,Wr),r=$s(t),i=WA(t.converter,e);return wg(n,[LA(ch(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function _c(t,...e){var n,r,i;t=Be(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||V0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(V0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof ft)c=Ot(t.firestore,Wr),h=Xc(t._key.path),l={next:f=>{e[o]&&e[o](YA(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Ot(t,ei);c=Ot(f.firestore,Wr),h=f._query;const p=new Eg(c);l={next:g=>{e[o]&&e[o](new HA(c,p,f,g))},error:e[o+1],complete:e[o+2]},BA(t._query)}return function(p,g,w,T){const P=new cg(T),E=new lg(g,P,w);return p.asyncQueue.enqueueAndForget(async()=>sg(await yc(p),E)),()=>{P.Za(),p.asyncQueue.enqueueAndForget(async()=>og(await yc(p),E))}}(lh(c),h,a,l)}function wg(t,e){return function(r,i){const s=new Bn;return r.asyncQueue.enqueueAndForget(async()=>cM(await EM(r),i,s)),s.promise}(lh(t),e)}function YA(t,e,n){const r=n.docs.get(e._key),i=new Eg(t);return new KA(t,i,e._key,r,new Uo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){to=i})(Zs),Ls(new xi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Wr(new $V(r.getProvider("auth-internal")),new GV(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ba(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Mr(X_,"4.7.3",e),Mr(X_,"4.7.3","esm2017")})();const FM={apiKey:"AIzaSyAGzT0ffrSwnJhBRpYxLv6kd5ubL299Vvo",authDomain:"study-group-v2.firebaseapp.com",projectId:"study-group-v2",storageBucket:"study-group-v2.firebasestorage.app",messagingSenderId:"487587122611",appId:"1:487587122611:web:ee4bc7375a203e973f8fc6",measurementId:"G-PB01CK0TFH"},XA=zS(FM),nu=jV(XA),Ke=AM(XA),ae={STUDY_LIMIT_EXCEEDED:"STUDY_LIMIT_EXCEEDED",UNAUTHORIZED:"UNAUTHORIZED",NOT_FOUND:"NOT_FOUND",NETWORK_ERROR:"NETWORK_ERROR",ALREADY_APPLIED:"ALREADY_APPLIED",INVALID_INPUT:"INVALID_INPUT",PERMISSION_DENIED:"PERMISSION_DENIED",UNKNOWN_ERROR:"UNKNOWN_ERROR"},wn={PENDING:"pending",APPROVED:"approved",REJECTED:"rejected",OPEN:"open",CLOSED:"closed"},F0=["프로그래밍","어학","디자인","취업","기타"],Ar=5,Zi={USER:"user",ORGANIZER:"organizer"},Cd=6,j0=100,JA=N.createContext(),U0="users",zi=()=>N.useContext(JA),jM=({children:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(null),[s,o]=N.useState(!0);N.useEffect(()=>Pb(nu,async p=>{if(p){const g=$s(Ke,U0,p.uid),w=await GA(g);w.exists()&&i(w.data()),n(p)}else n(null),i(null);o(!1)}),[]);const h={currentUser:e,userData:r,signup:async(f,p,g,w=Zi.USER)=>{const T=await Sb(nu,f,p),P=T.user,E={uid:P.uid,email:f,displayName:g,role:w,createdAt:new Date().toISOString()};return await MM($s(Ke,U0,P.uid),E),i(E),T},login:(f,p)=>Ib(nu,f,p),logout:()=>Cb(nu)};return R.jsx(JA.Provider,{value:h,children:!s&&t})},B0=({children:t,requiredRole:e})=>{const{currentUser:n,userData:r}=zi();return n?e&&(r==null?void 0:r.role)!==e?R.jsx(y_,{to:"/",replace:!0}):t:R.jsx(y_,{to:"/login",replace:!0})};/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ze=(t,e)=>{const n=N.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},h)=>N.createElement("svg",{ref:h,...UM,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${BM(t)}`,a].join(" "),...c},[...e.map(([f,p])=>N.createElement(f,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=ze("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=ze("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=ze("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=ze("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=ze("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=ze("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=ze("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=ze("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=ze("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=ze("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=ze("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=ze("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=ze("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=ze("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=ze("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=ze("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),t2=()=>{const{currentUser:t,userData:e,logout:n}=zi(),r=Fi(),i=async()=>{try{await n(),r("/login")}catch(s){console.error("Logout error:",s)}};return R.jsxs("nav",{className:"navbar",children:[R.jsxs("div",{className:"container nav-container",children:[R.jsx(gr,{to:"/",className:"nav-logo",children:"Wit.me"}),R.jsx("div",{className:"nav-links",children:t?R.jsxs(R.Fragment,{children:[(e==null?void 0:e.role)==="organizer"&&R.jsxs(gr,{to:"/create",className:"nav-link",children:[R.jsx(JM,{size:18}),R.jsx("span",{children:"스터디 생성"})]}),R.jsxs(gr,{to:"/dashboard",className:"nav-link",children:[R.jsx(QM,{size:18}),R.jsx("span",{children:"대시보드"})]}),R.jsxs("div",{className:"nav-user",children:[R.jsx(nR,{size:18}),R.jsx("span",{children:(e==null?void 0:e.displayName)||t.email})]}),R.jsx("button",{onClick:i,className:"nav-link nav-btn-logout",children:R.jsx(YM,{size:18})})]}):R.jsxs(R.Fragment,{children:[R.jsx(gr,{to:"/login",className:"nav-link",children:"로그인"}),R.jsx(gr,{to:"/register",className:"btn btn-primary nav-btn-register",children:"회원가입"})]})})]}),R.jsx("style",{jsx:"true",children:`
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
      `})]})},ur="studyGroups";class Dn{static async getAllStudyGroups(){try{const e=nn(Nt(Ke,ur),O0("createdAt","desc"));return(await yi(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(e){throw console.error("Error fetching all study groups:",e),e}}static subscribeToAllStudyGroups(e){const n=nn(Nt(Ke,ur),O0("createdAt","desc"));return _c(n,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));e(i)})}static async getStudyGroupById(e){try{const n=$s(Ke,ur,e),r=await GA(n);if(!r.exists())throw new Error("NOT_FOUND");return{id:r.id,...r.data()}}catch(n){throw console.error("Error fetching study group:",n),n}}static async getStudyGroupsByOrganizer(e){try{const n=nn(Nt(Ke,ur),Zt("organizerId","==",e));return(await yi(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){throw console.error("Error fetching organizer study groups:",n),n}}static subscribeToOrganizerStudyGroups(e,n){const r=nn(Nt(Ke,ur),Zt("organizerId","==",e));return _c(r,i=>{const s=i.docs.map(o=>({id:o.id,...o.data()}));n(s)})}static async getOrganizerStudyCount(e){try{const n=nn(Nt(Ke,ur),Zt("organizerId","==",e));return(await yi(n)).size}catch(n){throw console.error("Error getting study count:",n),n}}static async createStudyGroup(e){try{const n=new Date().toISOString();return{id:(await QA(Nt(Ke,ur),{...e,createdAt:n,status:wn.OPEN})).id,...e,createdAt:n,status:wn.OPEN}}catch(n){throw console.error("Error creating study group:",n),n}}static async updateStudyGroup(e,n){try{const r=$s(Ke,ur,e);return await qA(r,n),{id:e,...n}}catch(r){throw console.error("Error updating study group:",r),r}}}const cr="applications";class dn{static async getApplicationsByStudyGroup(e){try{const n=nn(Nt(Ke,cr),Zt("studyGroupId","==",e));return(await yi(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){throw console.error("Error fetching study group applications:",n),n}}static subscribeToStudyGroupApplications(e,n){const r=nn(Nt(Ke,cr),Zt("studyGroupId","==",e));return _c(r,i=>{const s=i.docs.map(o=>({id:o.id,...o.data()}));n(s)})}static async getApplicationsByUser(e){try{const n=nn(Nt(Ke,cr),Zt("userId","==",e));return(await yi(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){throw console.error("Error fetching user applications:",n),n}}static subscribeToUserApplications(e,n){const r=nn(Nt(Ke,cr),Zt("userId","==",e));return _c(r,i=>{const s=i.docs.map(o=>({id:o.id,...o.data()}));n(s)})}static async hasUserApplied(e,n){try{const r=nn(Nt(Ke,cr),Zt("userId","==",e),Zt("studyGroupId","==",n));return!(await yi(r)).empty}catch(r){throw console.error("Error checking application status:",r),r}}static async createApplication(e){try{const n=new Date().toISOString();return{id:(await QA(Nt(Ke,cr),{...e,status:wn.PENDING,appliedAt:n})).id,...e,status:wn.PENDING,appliedAt:n}}catch(n){throw console.error("Error creating application:",n),n}}static async updateApplicationStatus(e,n){try{const r=$s(Ke,cr,e);return await qA(r,{status:n}),{id:e,status:n}}catch(r){throw console.error("Error updating application status:",r),r}}static async getApprovedParticipants(e){try{const n=nn(Nt(Ke,cr),Zt("studyGroupId","==",e),Zt("status","==",wn.APPROVED));return(await yi(n)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){throw console.error("Error fetching approved participants:",n),n}}}class _e extends Error{constructor(e,n,r=null){super(n),this.code=e,this.originalError=r}}const n2={"auth/user-not-found":{code:ae.NOT_FOUND,message:"사용자를 찾을 수 없습니다."},"auth/wrong-password":{code:ae.UNAUTHORIZED,message:"잘못된 비밀번호입니다."},"auth/email-already-in-use":{code:ae.INVALID_INPUT,message:"이미 사용 중인 이메일입니다."},"auth/permission-denied":{code:ae.PERMISSION_DENIED,message:"권한이 없습니다."}};function Cs(t){var e,n,r;return console.error("Service Error:",t),t instanceof _e?{code:t.code,message:t.message}:(e=t.code)!=null&&e.startsWith("auth/")?n2[t.code]||{code:ae.UNKNOWN_ERROR,message:"인증 오류가 발생했습니다."}:t.code==="permission-denied"?{code:ae.PERMISSION_DENIED,message:"접근 권한이 없습니다."}:t.message.includes("NOT_FOUND")?{code:ae.NOT_FOUND,message:"요청한 리소스를 찾을 수 없습니다."}:(n=t.message)!=null&&n.includes("network")||(r=t.code)!=null&&r.includes("NETWORK")?{code:ae.NETWORK_ERROR,message:"네트워크 오류가 발생했습니다."}:{code:ae.UNKNOWN_ERROR,message:t.message||"알 수 없는 오류가 발생했습니다."}}class ph{static async createStudyGroup(e,n,r,i=null){try{if(await Dn.getOrganizerStudyCount(n)>=Ar)throw new _e(ae.STUDY_LIMIT_EXCEEDED,"최대 5개까지만 스터디를 생성할 수 있습니다.");const o=i||e.description,a={title:e.title,category:e.category,description:o,maxParticipants:e.maxParticipants,organizerId:n,organizerName:r};return await Dn.createStudyGroup(a)}catch(s){throw s instanceof _e?s:new _e(ae.UNKNOWN_ERROR,"스터디 생성에 실패했습니다.",s)}}static async getStudyGroup(e){try{return await Dn.getStudyGroupById(e)}catch(n){throw n.message==="NOT_FOUND"?new _e(ae.NOT_FOUND,"스터디를 찾을 수 없습니다."):new _e(ae.UNKNOWN_ERROR,"스터디 조회에 실패했습니다.",n)}}static async getAllStudyGroups(){try{return await Dn.getAllStudyGroups()}catch(e){throw new _e(ae.UNKNOWN_ERROR,"스터디 목록 조회에 실패했습니다.",e)}}static async getOrganizerStudiesWithCount(e){try{const n=await Dn.getStudyGroupsByOrganizer(e),r=n.length;return{studies:n,count:r,canCreateMore:r<Ar,remainingSlots:Ar-r}}catch(n){throw new _e(ae.UNKNOWN_ERROR,"스터디 조회에 실패했습니다.",n)}}static async canOrganizerCreateStudy(e){try{return await Dn.getOrganizerStudyCount(e)<Ar}catch(n){throw new _e(ae.UNKNOWN_ERROR,"권한 확인에 실패했습니다.",n)}}static async updateStudyGroup(e,n){try{return await Dn.updateStudyGroup(e,n)}catch(r){throw new _e(ae.UNKNOWN_ERROR,"스터디 업데이트에 실패했습니다.",r)}}static async getParticipantListForExport(e){try{return(await dn.getApprovedParticipants(e)).map(r=>({name:r.userName,email:r.userEmail,appliedAt:r.appliedAt}))}catch(n){throw new _e(ae.UNKNOWN_ERROR,"참가자 목록 조회에 실패했습니다.",n)}}}function r2(){const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,s]=N.useState(null);return N.useEffect(()=>(r(!0),s(null),Dn.subscribeToAllStudyGroups(a=>{e(a),r(!1)})),[]),{studies:t,loading:n,error:i}}function i2(t){const[e,n]=N.useState([]),[r,i]=N.useState(0),[s,o]=N.useState(!0),[a,l]=N.useState(null);return N.useEffect(()=>{if(!t){n([]),i(0),o(!1);return}return o(!0),l(null),Dn.subscribeToOrganizerStudyGroups(t,h=>{n(h),i(h.length),o(!1)})},[t]),{studies:e,count:r,loading:s,error:a}}function s2(t){const[e,n]=N.useState(null),[r,i]=N.useState(!0),[s,o]=N.useState(null);return N.useEffect(()=>{if(!t){i(!1);return}(async()=>{i(!0),o(null);try{const l=await ph.getStudyGroup(t);n(l)}catch(l){o(l)}finally{i(!1)}})()},[t]),{study:e,loading:r,error:s}}function o2(t){const[e,n]=N.useState(!0),[r,i]=N.useState(Ar),[s,o]=N.useState(!0),[a,l]=N.useState(null);return N.useEffect(()=>{if(!t){o(!1);return}o(!0),l(null),ph.getOrganizerStudiesWithCount(t).then(c=>{n(c.canCreateMore),i(c.remainingSlots),o(!1)}).catch(c=>{l(c),o(!1)})},[t]),{canCreate:e,remainingSlots:r,loading:s,error:a}}const Tg=N.createContext({});function Sg(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}const mh=N.createContext(null),Ig=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class a2 extends N.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function l2({children:t,isPresent:e}){const n=N.useId(),r=N.useRef(null),i=N.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=N.useContext(Ig);return N.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=i.current;if(e||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const h=document.createElement("style");return s&&(h.nonce=s),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(h)}},[e]),R.jsx(a2,{isPresent:e,childRef:r,sizeRef:i,children:N.cloneElement(t,{ref:r})})}const u2=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=Sg(c2),l=N.useId(),c=N.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),h=N.useMemo(()=>({id:l,initial:e,isPresent:n,custom:i,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return N.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),N.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(t=R.jsx(l2,{isPresent:n,children:t})),R.jsx(mh.Provider,{value:h,children:t})};function c2(){return new Map}function sR(t=!0){const e=N.useContext(mh);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,s=N.useId();N.useEffect(()=>{t&&i(s)},[t]);const o=N.useCallback(()=>t&&r&&r(s),[s,r,t]);return!n&&r?[!1,o]:[!0]}const ru=t=>t.key||"";function z0(t){const e=[];return N.Children.forEach(t,n=>{N.isValidElement(n)&&e.push(n)}),e}const Ag=typeof window<"u",oR=Ag?N.useLayoutEffect:N.useEffect,h2=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=sR(o),c=N.useMemo(()=>z0(t),[t]),h=o&&!a?[]:c.map(ru),f=N.useRef(!0),p=N.useRef(c),g=Sg(()=>new Map),[w,T]=N.useState(c),[P,E]=N.useState(c);oR(()=>{f.current=!1,p.current=c;for(let D=0;D<P.length;D++){const O=ru(P[D]);h.includes(O)?g.delete(O):g.get(O)!==!0&&g.set(O,!1)}},[P,h.length,h.join("-")]);const _=[];if(c!==w){let D=[...c];for(let O=0;O<P.length;O++){const M=P[O],I=ru(M);h.includes(I)||(D.splice(O,0,M),_.push(M))}s==="wait"&&_.length&&(D=_),E(z0(D)),T(c);return}const{forceRender:S}=N.useContext(Tg);return R.jsx(R.Fragment,{children:P.map(D=>{const O=ru(D),M=o&&!a?!1:c===P||h.includes(O),I=()=>{if(g.has(O))g.set(O,!0);else return;let y=!0;g.forEach(A=>{A||(y=!1)}),y&&(S==null||S(),E(p.current),o&&(l==null||l()),r&&r())};return R.jsx(u2,{isPresent:M,initial:!f.current||n?void 0:!1,custom:M?void 0:e,presenceAffectsLayout:i,mode:s,onExitComplete:M?void 0:I,children:D},O)})})},Lt=t=>t;let aR=Lt;function Rg(t){let e;return()=>(e===void 0&&(e=t()),e)}const Ks=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},zn=t=>t*1e3,$n=t=>t/1e3,d2={useManualTiming:!1};function f2(t){let e=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,h=!1,f=!1)=>{const g=f&&r?e:n;return h&&s.add(c),g.has(c)||g.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[e,n]=[n,e],e.forEach(a),e.clear(),r=!1,i&&(i=!1,l.process(c))}};return l}const iu=["read","resolveKeyframes","update","preRender","render","postRender"],p2=40;function lR(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=iu.reduce((E,_)=>(E[_]=f2(s),E),{}),{read:a,resolveKeyframes:l,update:c,preRender:h,render:f,postRender:p}=o,g=()=>{const E=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(E-i.timestamp,p2),1),i.timestamp=E,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),h.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(g))},w=()=>{n=!0,r=!0,i.isProcessing||t(g)};return{schedule:iu.reduce((E,_)=>{const S=o[_];return E[_]=(D,O=!1,M=!1)=>(n||w(),S.schedule(D,O,M)),E},{}),cancel:E=>{for(let _=0;_<iu.length;_++)o[iu[_]].cancel(E)},state:i,steps:o}}const{schedule:ve,cancel:Kr,state:Qe,steps:xd}=lR(typeof requestAnimationFrame<"u"?requestAnimationFrame:Lt,!0),uR=N.createContext({strict:!1}),$0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Hs={};for(const t in $0)Hs[t]={isEnabled:e=>$0[t].some(n=>!!e[n])};function m2(t){for(const e in t)Hs[e]={...Hs[e],...t[e]}}const g2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ec(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||g2.has(t)}let cR=t=>!Ec(t);function y2(t){t&&(cR=e=>e.startsWith("on")?!Ec(e):t(e))}try{y2(require("@emotion/is-prop-valid").default)}catch{}function v2(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(cR(i)||n===!0&&Ec(i)||!e&&!Ec(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function _2(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}const gh=N.createContext({});function Fa(t){return typeof t=="string"||Array.isArray(t)}function yh(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Pg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cg=["initial",...Pg];function vh(t){return yh(t.animate)||Cg.some(e=>Fa(t[e]))}function hR(t){return!!(vh(t)||t.variants)}function E2(t,e){if(vh(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Fa(n)?n:void 0,animate:Fa(r)?r:void 0}}return t.inherit!==!1?e:{}}function w2(t){const{initial:e,animate:n}=E2(t,N.useContext(gh));return N.useMemo(()=>({initial:e,animate:n}),[W0(e),W0(n)])}function W0(t){return Array.isArray(t)?t.join(" "):t}const T2=Symbol.for("motionComponentSymbol");function fs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function S2(t,e,n){return N.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):fs(n)&&(n.current=r))},[e])}const xg=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),I2="framerAppearId",dR="data-"+xg(I2),{schedule:kg}=lR(queueMicrotask,!1),fR=N.createContext({});function A2(t,e,n,r,i){var s,o;const{visualElement:a}=N.useContext(gh),l=N.useContext(uR),c=N.useContext(mh),h=N.useContext(Ig).reducedMotion,f=N.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:h}));const p=f.current,g=N.useContext(fR);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&R2(f.current,n,i,g);const w=N.useRef(!1);N.useInsertionEffect(()=>{p&&w.current&&p.update(n,c)});const T=n[dR],P=N.useRef(!!T&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,T))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,T)));return oR(()=>{p&&(w.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),kg.render(p.render),P.current&&p.animationState&&p.animationState.animateChanges())}),N.useEffect(()=>{p&&(!P.current&&p.animationState&&p.animationState.animateChanges(),P.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)===null||E===void 0||E.call(window,T)}),P.current=!1))}),p}function R2(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:pR(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&fs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function pR(t){if(t)return t.options.allowProjection!==!1?t.projection:pR(t.parent)}function P2({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){var s,o;t&&m2(t);function a(c,h){let f;const p={...N.useContext(Ig),...c,layoutId:C2(c)},{isStatic:g}=p,w=w2(c),T=r(c,g);if(!g&&Ag){x2();const P=k2(p);f=P.MeasureLayout,w.visualElement=A2(i,T,p,e,P.ProjectionNode)}return R.jsxs(gh.Provider,{value:w,children:[f&&w.visualElement?R.jsx(f,{visualElement:w.visualElement,...p}):null,n(i,c,S2(T,w.visualElement,h),T,g,w.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const l=N.forwardRef(a);return l[T2]=i,l}function C2({layoutId:t}){const e=N.useContext(Tg).id;return e&&t!==void 0?e+"-"+t:t}function x2(t,e){N.useContext(uR).strict}function k2(t){const{drag:e,layout:n}=Hs;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const N2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ng(t){return typeof t!="string"||t.includes("-")?!1:!!(N2.indexOf(t)>-1||/[A-Z]/u.test(t))}function K0(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function Dg(t,e,n,r){if(typeof e=="function"){const[i,s]=K0(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=K0(r);e=e(n!==void 0?n:t.custom,i,s)}return e}const hp=t=>Array.isArray(t),D2=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),b2=t=>hp(t)?t[t.length-1]||0:t,dt=t=>!!(t&&t.getVelocity);function Cu(t){const e=dt(t)?t.get():t;return D2(e)?e.toValue():e}function V2({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},r,i,s){const o={latestValues:O2(r,i,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const mR=t=>(e,n)=>{const r=N.useContext(gh),i=N.useContext(mh),s=()=>V2(t,e,r,i);return n?s():Sg(s)};function O2(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=Cu(s[p]);let{initial:o,animate:a}=t;const l=vh(t),c=hR(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let h=n?n.initial===!1:!1;h=h||o===!1;const f=h?a:o;if(f&&typeof f!="boolean"&&!yh(f)){const p=Array.isArray(f)?f:[f];for(let g=0;g<p.length;g++){const w=Dg(t,p[g]);if(w){const{transitionEnd:T,transition:P,...E}=w;for(const _ in E){let S=E[_];if(Array.isArray(S)){const D=h?S.length-1:0;S=S[D]}S!==null&&(i[_]=S)}for(const _ in T)i[_]=T[_]}}}return i}const so=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],$i=new Set(so),gR=t=>e=>typeof e=="string"&&e.startsWith(t),yR=gR("--"),L2=gR("var(--"),bg=t=>L2(t)?M2.test(t.split("/*")[0].trim()):!1,M2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,vR=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Zn=(t,e,n)=>n>e?e:n<t?t:n,oo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ja={...oo,transform:t=>Zn(0,1,t)},su={...oo,default:1},cl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),hr=cl("deg"),Tn=cl("%"),G=cl("px"),F2=cl("vh"),j2=cl("vw"),H0={...Tn,parse:t=>Tn.parse(t)/100,transform:t=>Tn.transform(t*100)},U2={borderWidth:G,borderTopWidth:G,borderRightWidth:G,borderBottomWidth:G,borderLeftWidth:G,borderRadius:G,radius:G,borderTopLeftRadius:G,borderTopRightRadius:G,borderBottomRightRadius:G,borderBottomLeftRadius:G,width:G,maxWidth:G,height:G,maxHeight:G,top:G,right:G,bottom:G,left:G,padding:G,paddingTop:G,paddingRight:G,paddingBottom:G,paddingLeft:G,margin:G,marginTop:G,marginRight:G,marginBottom:G,marginLeft:G,backgroundPositionX:G,backgroundPositionY:G},B2={rotate:hr,rotateX:hr,rotateY:hr,rotateZ:hr,scale:su,scaleX:su,scaleY:su,scaleZ:su,skew:hr,skewX:hr,skewY:hr,distance:G,translateX:G,translateY:G,translateZ:G,x:G,y:G,z:G,perspective:G,transformPerspective:G,opacity:ja,originX:H0,originY:H0,originZ:G},G0={...oo,transform:Math.round},Vg={...U2,...B2,zIndex:G0,size:G,fillOpacity:ja,strokeOpacity:ja,numOctaves:G0},z2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$2=so.length;function W2(t,e,n){let r="",i=!0;for(let s=0;s<$2;s++){const o=so[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=vR(a,Vg[o]);if(!l){i=!1;const h=z2[o]||o;r+=`${h}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function Og(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if($i.has(l)){o=!0;continue}else if(yR(l)){i[l]=c;continue}else{const h=vR(c,Vg[l]);l.startsWith("origin")?(a=!0,s[l]=h):r[l]=h}}if(e.transform||(o||n?r.transform=W2(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:h=0}=s;r.transformOrigin=`${l} ${c} ${h}`}}const K2={offset:"stroke-dashoffset",array:"stroke-dasharray"},H2={offset:"strokeDashoffset",array:"strokeDasharray"};function G2(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?K2:H2;t[s.offset]=G.transform(-r);const o=G.transform(e),a=G.transform(n);t[s.array]=`${o} ${a}`}function q0(t,e,n){return typeof t=="string"?t:G.transform(e+n*t)}function q2(t,e,n){const r=q0(e,t.x,t.width),i=q0(n,t.y,t.height);return`${r} ${i}`}function Lg(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},h,f){if(Og(t,c,f),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:g,dimensions:w}=t;p.transform&&(w&&(g.transform=p.transform),delete p.transform),w&&(i!==void 0||s!==void 0||g.transform)&&(g.transformOrigin=q2(w,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&G2(p,o,a,l,!1)}const Mg=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),_R=()=>({...Mg(),attrs:{}}),Fg=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ER(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const wR=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function TR(t,e,n,r){ER(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(wR.has(i)?i:xg(i),e.attrs[i])}const wc={};function Q2(t){Object.assign(wc,t)}function SR(t,{layout:e,layoutId:n}){return $i.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!wc[t]||t==="opacity")}function jg(t,e,n){var r;const{style:i}=t,s={};for(const o in i)(dt(i[o])||e.style&&dt(e.style[o])||SR(o,t)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function IR(t,e,n){const r=jg(t,e,n);for(const i in t)if(dt(t[i])||dt(e[i])){const s=so.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}function Y2(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Q0=["x","y","width","height","cx","cy","r"],X2={useVisualState:mR({scrapeMotionValuesFromProps:IR,createRenderState:_R,onUpdate:({props:t,prevProps:e,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in i)if($i.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<Q0.length;a++){const l=Q0[a];t[l]!==e[l]&&(o=!0)}o&&ve.read(()=>{Y2(n,r),ve.render(()=>{Lg(r,i,Fg(n.tagName),t.transformTemplate),TR(n,r)})})}})},J2={useVisualState:mR({scrapeMotionValuesFromProps:jg,createRenderState:Mg})};function AR(t,e,n){for(const r in e)!dt(e[r])&&!SR(r,n)&&(t[r]=e[r])}function Z2({transformTemplate:t},e){return N.useMemo(()=>{const n=Mg();return Og(n,e,t),Object.assign({},n.vars,n.style)},[e])}function eF(t,e){const n=t.style||{},r={};return AR(r,n,t),Object.assign(r,Z2(t,e)),r}function tF(t,e){const n={},r=eF(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}function nF(t,e,n,r){const i=N.useMemo(()=>{const s=_R();return Lg(s,e,Fg(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};AR(s,t.style,t),i.style={...s,...i.style}}return i}function rF(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Ng(n)?nF:tF)(r,s,o,n),c=v2(r,typeof n=="string",t),h=n!==N.Fragment?{...c,...l,ref:i}:{},{children:f}=r,p=N.useMemo(()=>dt(f)?f.get():f,[f]);return N.createElement(n,{...h,children:p})}}function iF(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Ng(r)?X2:J2,preloadedFeatures:t,useRender:rF(i),createVisualElement:e,Component:r};return P2(o)}}function RR(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function _h(t,e,n){const r=t.getProps();return Dg(r,e,n!==void 0?n:r.custom,t)}const sF=Rg(()=>window.ScrollTimeline!==void 0);class oF{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e,n){const r=this.animations.map(i=>{if(sF()&&i.attachTimeline)return i.attachTimeline(e);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class aF extends oF{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Ug(t,e){return t?t[e]||t.default||t:void 0}const dp=2e4;function PR(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<dp;)e+=n,r=t.next(e);return e>=dp?1/0:e}function Bg(t){return typeof t=="function"}function Y0(t,e){t.timeline=e,t.onfinish=null}const zg=t=>Array.isArray(t)&&typeof t[0]=="number",lF={linearEasing:void 0};function uF(t,e){const n=Rg(t);return()=>{var r;return(r=lF[e])!==null&&r!==void 0?r:n()}}const Tc=uF(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),CR=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let s=0;s<i;s++)r+=t(Ks(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function xR(t){return!!(typeof t=="function"&&Tc()||!t||typeof t=="string"&&(t in fp||Tc())||zg(t)||Array.isArray(t)&&t.every(xR))}const Bo=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,fp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bo([0,.65,.55,1]),circOut:Bo([.55,0,1,.45]),backIn:Bo([.31,.01,.66,-.59]),backOut:Bo([.33,1.53,.69,.99])};function kR(t,e){if(t)return typeof t=="function"&&Tc()?CR(t,e):zg(t)?Bo(t):Array.isArray(t)?t.map(n=>kR(n,e)||fp.easeOut):fp[t]}const Xt={x:!1,y:!1};function NR(){return Xt.x||Xt.y}function cF(t,e,n){var r;if(t instanceof Element)return[t];if(typeof t=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function DR(t,e){const n=cF(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function X0(t){return e=>{e.pointerType==="touch"||NR()||t(e)}}function hF(t,e,n={}){const[r,i,s]=DR(t,n),o=X0(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const h=X0(f=>{c(f),l.removeEventListener("pointerleave",h)});l.addEventListener("pointerleave",h,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const bR=(t,e)=>e?t===e?!0:bR(t,e.parentElement):!1,$g=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,dF=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function fF(t){return dF.has(t.tagName)||t.tabIndex!==-1}const zo=new WeakSet;function J0(t){return e=>{e.key==="Enter"&&t(e)}}function kd(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const pF=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=J0(()=>{if(zo.has(n))return;kd(n,"down");const i=J0(()=>{kd(n,"up")}),s=()=>kd(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function Z0(t){return $g(t)&&!NR()}function mF(t,e,n={}){const[r,i,s]=DR(t,n),o=a=>{const l=a.currentTarget;if(!Z0(a)||zo.has(l))return;zo.add(l);const c=e(a),h=(g,w)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!Z0(g)||!zo.has(l))&&(zo.delete(l),typeof c=="function"&&c(g,{success:w}))},f=g=>{h(g,n.useGlobalTarget||bR(l,g.target))},p=g=>{h(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{!fF(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",c=>pF(c,i),i)}),s}function gF(t){return t==="x"||t==="y"?Xt[t]?null:(Xt[t]=!0,()=>{Xt[t]=!1}):Xt.x||Xt.y?null:(Xt.x=Xt.y=!0,()=>{Xt.x=Xt.y=!1})}const VR=new Set(["width","height","top","left","right","bottom",...so]);let xu;function yF(){xu=void 0}const Sn={now:()=>(xu===void 0&&Sn.set(Qe.isProcessing||d2.useManualTiming?Qe.timestamp:performance.now()),xu),set:t=>{xu=t,queueMicrotask(yF)}};function Wg(t,e){t.indexOf(e)===-1&&t.push(e)}function Kg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Hg{constructor(){this.subscriptions=[]}add(e){return Wg(this.subscriptions,e),()=>Kg(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function OR(t,e){return e?t*(1e3/e):0}const eE=30,vF=t=>!isNaN(parseFloat(t));class _F{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Sn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Sn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=vF(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Hg);const r=this.events[e].add(n);return e==="change"?()=>{r(),ve.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Sn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>eE)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,eE);return OR(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ua(t,e){return new _F(t,e)}function EF(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ua(n))}function wF(t,e){const n=_h(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=b2(s[o]);EF(t,o,a)}}function TF(t){return!!(dt(t)&&t.add)}function pp(t,e){const n=t.getValue("willChange");if(TF(n))return n.add(e)}function LR(t){return t.props[dR]}const MR=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,SF=1e-7,IF=12;function AF(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=MR(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>SF&&++a<IF);return o}function hl(t,e,n,r){if(t===e&&n===r)return Lt;const i=s=>AF(s,0,1,t,n);return s=>s===0||s===1?s:MR(i(s),e,r)}const FR=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,jR=t=>e=>1-t(1-e),UR=hl(.33,1.53,.69,.99),Gg=jR(UR),BR=FR(Gg),zR=t=>(t*=2)<1?.5*Gg(t):.5*(2-Math.pow(2,-10*(t-1))),qg=t=>1-Math.sin(Math.acos(t)),$R=jR(qg),WR=FR(qg),KR=t=>/^0[^.\s]+$/u.test(t);function RF(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||KR(t):!0}const ia=t=>Math.round(t*1e5)/1e5,Qg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function PF(t){return t==null}const CF=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yg=(t,e)=>n=>!!(typeof n=="string"&&CF.test(n)&&n.startsWith(t)||e&&!PF(n)&&Object.prototype.hasOwnProperty.call(n,e)),HR=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(Qg);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},xF=t=>Zn(0,255,t),Nd={...oo,transform:t=>Math.round(xF(t))},vi={test:Yg("rgb","red"),parse:HR("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Nd.transform(t)+", "+Nd.transform(e)+", "+Nd.transform(n)+", "+ia(ja.transform(r))+")"};function kF(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const mp={test:Yg("#"),parse:kF,transform:vi.transform},ps={test:Yg("hsl","hue"),parse:HR("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Tn.transform(ia(e))+", "+Tn.transform(ia(n))+", "+ia(ja.transform(r))+")"},lt={test:t=>vi.test(t)||mp.test(t)||ps.test(t),parse:t=>vi.test(t)?vi.parse(t):ps.test(t)?ps.parse(t):mp.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?vi.transform(t):ps.transform(t)},NF=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function DF(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Qg))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(NF))===null||n===void 0?void 0:n.length)||0)>0}const GR="number",qR="color",bF="var",VF="var(",tE="${}",OF=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ba(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(OF,l=>(lt.test(l)?(r.color.push(s),i.push(qR),n.push(lt.parse(l))):l.startsWith(VF)?(r.var.push(s),i.push(bF),n.push(l)):(r.number.push(s),i.push(GR),n.push(parseFloat(l))),++s,tE)).split(tE);return{values:n,split:a,indexes:r,types:i}}function QR(t){return Ba(t).values}function YR(t){const{split:e,types:n}=Ba(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const a=n[o];a===GR?s+=ia(i[o]):a===qR?s+=lt.transform(i[o]):s+=i[o]}return s}}const LF=t=>typeof t=="number"?0:t;function MF(t){const e=QR(t);return YR(t)(e.map(LF))}const Hr={test:DF,parse:QR,createTransformer:YR,getAnimatableNone:MF},FF=new Set(["brightness","contrast","saturate","opacity"]);function jF(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Qg)||[];if(!r)return t;const i=n.replace(r,"");let s=FF.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const UF=/\b([a-z-]*)\(.*?\)/gu,gp={...Hr,getAnimatableNone:t=>{const e=t.match(UF);return e?e.map(jF).join(" "):t}},BF={...Vg,color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,filter:gp,WebkitFilter:gp},Xg=t=>BF[t];function XR(t,e){let n=Xg(t);return n!==gp&&(n=Hr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const zF=new Set(["auto","none","0"]);function $F(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!zF.has(s)&&Ba(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=XR(n,i)}const nE=t=>t===oo||t===G,rE=(t,e)=>parseFloat(t.split(", ")[e]),iE=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return rE(i[1],e);{const s=r.match(/^matrix\((.+)\)$/u);return s?rE(s[1],t):0}},WF=new Set(["x","y","z"]),KF=so.filter(t=>!WF.has(t));function HF(t){const e=[];return KF.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Gs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:iE(4,13),y:iE(5,14)};Gs.translateX=Gs.x;Gs.translateY=Gs.y;const Ti=new Set;let yp=!1,vp=!1;function JR(){if(vp){const t=Array.from(Ti).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=HF(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}vp=!1,yp=!1,Ti.forEach(t=>t.complete()),Ti.clear()}function ZR(){Ti.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(vp=!0)})}function GF(){ZR(),JR()}class Jg{constructor(e,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ti.add(this),yp||(yp=!0,ve.read(ZR),ve.resolveKeyframes(JR))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),i&&o===void 0&&i.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ti.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ti.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const eP=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),qF=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function QF(t){const e=qF.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function tP(t,e,n=1){const[r,i]=QF(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return eP(o)?parseFloat(o):o}return bg(i)?tP(i,e,n+1):i}const nP=t=>e=>e.test(t),YF={test:t=>t==="auto",parse:t=>t},rP=[oo,G,Tn,hr,j2,F2,YF],sE=t=>rP.find(nP(t));class iP extends Jg{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),bg(c))){const h=tP(c,n.current);h!==void 0&&(e[l]=h),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!VR.has(r)||e.length!==2)return;const[i,s]=e,o=sE(i),a=sE(s);if(o!==a)if(nE(o)&&nE(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)RF(e[i])&&r.push(i);r.length&&$F(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Gs[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var e;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Gs[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const oE=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Hr.test(t)||t==="0")&&!t.startsWith("url("));function XF(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function JF(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=oE(i,e),a=oE(s,e);return!o||!a?!1:XF(t)||(n==="spring"||Bg(n))&&r}const ZF=t=>t!==null;function Eh(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(ZF),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const ej=40;class sP{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Sn.now(),this.options={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ej?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&GF(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Sn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!JF(e,r,i,s))if(o)this.options.duration=0;else{l&&l(Eh(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const h=this.initPlayback(e,n);h!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...h},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Se=(t,e,n)=>t+(e-t)*n;function Dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function tj({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Dd(l,a,t+1/3),s=Dd(l,a,t),o=Dd(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Sc(t,e){return n=>n>0?e:t}const bd=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},nj=[mp,vi,ps],rj=t=>nj.find(e=>e.test(t));function aE(t){const e=rj(t);if(!e)return!1;let n=e.parse(t);return e===ps&&(n=tj(n)),n}const lE=(t,e)=>{const n=aE(t),r=aE(e);if(!n||!r)return Sc(t,e);const i={...n};return s=>(i.red=bd(n.red,r.red,s),i.green=bd(n.green,r.green,s),i.blue=bd(n.blue,r.blue,s),i.alpha=Se(n.alpha,r.alpha,s),vi.transform(i))},ij=(t,e)=>n=>e(t(n)),dl=(...t)=>t.reduce(ij),_p=new Set(["none","hidden"]);function sj(t,e){return _p.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function oj(t,e){return n=>Se(t,e,n)}function Zg(t){return typeof t=="number"?oj:typeof t=="string"?bg(t)?Sc:lt.test(t)?lE:uj:Array.isArray(t)?oP:typeof t=="object"?lt.test(t)?lE:aj:Sc}function oP(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>Zg(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function aj(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=Zg(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function lj(t,e){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][i[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const uj=(t,e)=>{const n=Hr.createTransformer(e),r=Ba(t),i=Ba(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?_p.has(t)&&!i.values.length||_p.has(e)&&!r.values.length?sj(t,e):dl(oP(lj(r,i),i.values),n):Sc(t,e)};function aP(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Se(t,e,n):Zg(t)(t,e)}const cj=5;function lP(t,e,n){const r=Math.max(e-cj,0);return OR(n-t(r),e-r)}const Ce={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vd=.001;function hj({duration:t=Ce.duration,bounce:e=Ce.bounce,velocity:n=Ce.velocity,mass:r=Ce.mass}){let i,s,o=1-e;o=Zn(Ce.minDamping,Ce.maxDamping,o),t=Zn(Ce.minDuration,Ce.maxDuration,$n(t)),o<1?(i=c=>{const h=c*o,f=h*t,p=h-n,g=Ep(c,o),w=Math.exp(-f);return Vd-p/g*w},s=c=>{const f=c*o*t,p=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*t,w=Math.exp(-f),T=Ep(Math.pow(c,2),o);return(-i(c)+Vd>0?-1:1)*((p-g)*w)/T}):(i=c=>{const h=Math.exp(-c*t),f=(c-n)*t+1;return-Vd+h*f},s=c=>{const h=Math.exp(-c*t),f=(n-c)*(t*t);return h*f});const a=5/t,l=fj(i,s,a);if(t=zn(t),isNaN(l))return{stiffness:Ce.stiffness,damping:Ce.damping,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const dj=12;function fj(t,e,n){let r=n;for(let i=1;i<dj;i++)r=r-t(r)/e(r);return r}function Ep(t,e){return t*Math.sqrt(1-e*e)}const pj=["duration","bounce"],mj=["stiffness","damping","mass"];function uE(t,e){return e.some(n=>t[n]!==void 0)}function gj(t){let e={velocity:Ce.velocity,stiffness:Ce.stiffness,damping:Ce.damping,mass:Ce.mass,isResolvedFromDuration:!1,...t};if(!uE(t,mj)&&uE(t,pj))if(t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Zn(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:Ce.mass,stiffness:i,damping:s}}else{const n=hj(t);e={...e,...n,mass:Ce.mass},e.isResolvedFromDuration=!0}return e}function uP(t=Ce.visualDuration,e=Ce.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:h,duration:f,velocity:p,isResolvedFromDuration:g}=gj({...n,velocity:-$n(n.velocity||0)}),w=p||0,T=c/(2*Math.sqrt(l*h)),P=o-s,E=$n(Math.sqrt(l/h)),_=Math.abs(P)<5;r||(r=_?Ce.restSpeed.granular:Ce.restSpeed.default),i||(i=_?Ce.restDelta.granular:Ce.restDelta.default);let S;if(T<1){const O=Ep(E,T);S=M=>{const I=Math.exp(-T*E*M);return o-I*((w+T*E*P)/O*Math.sin(O*M)+P*Math.cos(O*M))}}else if(T===1)S=O=>o-Math.exp(-E*O)*(P+(w+E*P)*O);else{const O=E*Math.sqrt(T*T-1);S=M=>{const I=Math.exp(-T*E*M),y=Math.min(O*M,300);return o-I*((w+T*E*P)*Math.sinh(y)+O*P*Math.cosh(y))/O}}const D={calculatedDuration:g&&f||null,next:O=>{const M=S(O);if(g)a.done=O>=f;else{let I=0;T<1&&(I=O===0?zn(w):lP(S,O,M));const y=Math.abs(I)<=r,A=Math.abs(o-M)<=i;a.done=y&&A}return a.value=a.done?o:M,a},toString:()=>{const O=Math.min(PR(D),dp),M=CR(I=>D.next(O*I).value,O,30);return O+"ms "+M}};return D}function cE({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:h}){const f=t[0],p={done:!1,value:f},g=y=>a!==void 0&&y<a||l!==void 0&&y>l,w=y=>a===void 0?l:l===void 0||Math.abs(a-y)<Math.abs(l-y)?a:l;let T=n*e;const P=f+T,E=o===void 0?P:o(P);E!==P&&(T=E-f);const _=y=>-T*Math.exp(-y/r),S=y=>E+_(y),D=y=>{const A=_(y),C=S(y);p.done=Math.abs(A)<=c,p.value=p.done?E:C};let O,M;const I=y=>{g(p.value)&&(O=y,M=uP({keyframes:[p.value,w(p.value)],velocity:lP(S,y,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:h}))};return I(0),{calculatedDuration:null,next:y=>{let A=!1;return!M&&O===void 0&&(A=!0,D(y),I(y)),O!==void 0&&y>=O?M.next(y-O):(!A&&D(y),p)}}}const yj=hl(.42,0,1,1),vj=hl(0,0,.58,1),cP=hl(.42,0,.58,1),_j=t=>Array.isArray(t)&&typeof t[0]!="number",Ej={linear:Lt,easeIn:yj,easeInOut:cP,easeOut:vj,circIn:qg,circInOut:WR,circOut:$R,backIn:Gg,backInOut:BR,backOut:UR,anticipate:zR},hE=t=>{if(zg(t)){aR(t.length===4);const[e,n,r,i]=t;return hl(e,n,r,i)}else if(typeof t=="string")return Ej[t];return t};function wj(t,e,n){const r=[],i=n||aP,s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Lt:e;a=dl(l,a)}r.push(a)}return r}function Tj(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(aR(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=wj(e,r,i),l=a.length,c=h=>{if(o&&h<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(h<t[f+1]);f++);const p=Ks(t[f],t[f+1],h);return a[f](p)};return n?h=>c(Zn(t[0],t[s-1],h)):c}function Sj(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=Ks(0,e,r);t.push(Se(n,1,i))}}function Ij(t){const e=[0];return Sj(e,t.length-1),e}function Aj(t,e){return t.map(n=>n*e)}function Rj(t,e){return t.map(()=>e||cP).splice(0,t.length-1)}function Ic({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=_j(r)?r.map(hE):hE(r),s={done:!1,value:e[0]},o=Aj(n&&n.length===e.length?n:Ij(e),t),a=Tj(o,e,{ease:Array.isArray(i)?i:Rj(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const Pj=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ve.update(e,!0),stop:()=>Kr(e),now:()=>Qe.isProcessing?Qe.timestamp:Sn.now()}},Cj={decay:cE,inertia:cE,tween:Ic,keyframes:Ic,spring:uP},xj=t=>t/100;class ey extends sP{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Jg,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=Bg(n)?n:Cj[n]||Ic;let l,c;a!==Ic&&typeof e[0]!="number"&&(l=dl(xj,aP(e[0],e[1])),e=[0,100]);const h=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),h.calculatedDuration===null&&(h.calculatedDuration=PR(h));const{calculatedDuration:f}=h,p=f+i,g=p*(r+1)-i;return{generator:h,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:g}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:r}=this;if(!r){const{keyframes:y}=this.options;return{done:!0,value:y[y.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:h,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:g,repeatType:w,repeatDelay:T,onUpdate:P}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-h/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const E=this.currentTime-p*(this.speed>=0?1:-1),_=this.speed>=0?E<0:E>h;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let S=this.currentTime,D=s;if(g){const y=Math.min(this.currentTime,h)/f;let A=Math.floor(y),C=y%1;!C&&y>=1&&(C=1),C===1&&A--,A=Math.min(A,g+1),!!(A%2)&&(w==="reverse"?(C=1-C,T&&(C-=T/f)):w==="mirror"&&(D=o)),S=Zn(0,1,C)*f}const O=_?{done:!1,value:l[0]}:D.next(S);a&&(O.value=a(O.value));let{done:M}=O;!_&&c!==null&&(M=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return I&&i!==void 0&&(O.value=Eh(l,this.options,i)),P&&P(O.value),I&&this.finish(),O}get duration(){const{resolved:e}=this;return e?$n(e.calculatedDuration):0}get time(){return $n(this.currentTime)}set time(e){e=zn(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=$n(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=Pj,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const kj=new Set(["opacity","clipPath","filter","transform"]);function Nj(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const h=kR(a,i);return Array.isArray(h)&&(c.easing=h),t.animate(c,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const Dj=Rg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ac=10,bj=2e4;function Vj(t){return Bg(t.type)||t.type==="spring"||!xR(t.ease)}function Oj(t,e){const n=new ey({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:t[0]};const i=[];let s=0;for(;!r.done&&s<bj;)r=n.sample(s),i.push(r.value),s+=Ac;return{times:void 0,keyframes:i,duration:s-Ac,ease:"linear"}}const hP={anticipate:zR,backInOut:BR,circInOut:WR};function Lj(t){return t in hP}class dE extends sP{constructor(e){super(e);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new iP(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Tc()&&Lj(s)&&(s=hP[s]),Vj(this.options)){const{onComplete:f,onUpdate:p,motionValue:g,element:w,...T}=this.options,P=Oj(e,T);e=P.keyframes,e.length===1&&(e[1]=e[0]),r=P.duration,i=P.times,s=P.ease,o="keyframes"}const h=Nj(a.owner.current,l,e,{...this.options,duration:r,times:i,ease:s});return h.startTime=c??this.calcStartTime(),this.pendingTimeline?(Y0(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:f}=this.options;a.set(Eh(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:r,times:i,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return $n(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return $n(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=zn(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Lt;const{animation:r}=n;Y0(r,e)}return Lt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:h,onComplete:f,element:p,...g}=this.options,w=new ey({...g,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),T=zn(this.time);c.setWithVelocity(w.sample(T-Ac).value,w.sample(T).value,Ac)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return Dj()&&r&&kj.has(r)&&!l&&!c&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const Mj={type:"spring",stiffness:500,damping:25,restSpeed:10},Fj=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),jj={type:"keyframes",duration:.8},Uj={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Bj=(t,{keyframes:e})=>e.length>2?jj:$i.has(t)?t.startsWith("scale")?Fj(e[1]):Mj:Uj;function zj({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...h}){return!!Object.keys(h).length}const ty=(t,e,n,r={},i,s)=>o=>{const a=Ug(r,t)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-zn(l);let h={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:p=>{e.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:i};zj(a)||(h={...h,...Bj(t,h)}),h.duration&&(h.duration=zn(h.duration)),h.repeatDelay&&(h.repeatDelay=zn(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let f=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const p=Eh(h.keyframes,a);if(p!==void 0)return ve.update(()=>{h.onUpdate(p),h.onComplete()}),new aF([])}return!s&&dE.supports(h)?new dE(h):new ey(h)};function $j({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function dP(t,e,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;r&&(o=r);const c=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const f in l){const p=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),g=l[f];if(g===void 0||h&&$j(h,f))continue;const w={delay:n,...Ug(o||{},f)};let T=!1;if(window.MotionHandoffAnimation){const E=LR(t);if(E){const _=window.MotionHandoffAnimation(E,f,ve);_!==null&&(w.startTime=_,T=!0)}}pp(t,f),p.start(ty(f,p,g,t.shouldReduceMotion&&VR.has(f)?{type:!1}:w,t,T));const P=p.animation;P&&c.push(P)}return a&&Promise.all(c).then(()=>{ve.update(()=>{a&&wF(t,a)})}),c}function wp(t,e,n={}){var r;const i=_h(t,e,n.type==="exit"?(r=t.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(dP(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:h=0,staggerChildren:f,staggerDirection:p}=s;return Wj(t,e,h+c,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,h]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>h())}else return Promise.all([o(),a(n.delay)])}function Wj(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(Kj).forEach((c,h)=>{c.notify("AnimationStart",e),o.push(wp(c,e,{...s,delay:n+l(h)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function Kj(t,e){return t.sortNodePosition(e)}function Hj(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>wp(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=wp(t,e,n);else{const i=typeof e=="function"?_h(t,e,n.custom):e;r=Promise.all(dP(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const Gj=Cg.length;function fP(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?fP(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Gj;n++){const r=Cg[n],i=t.props[r];(Fa(i)||i===!1)&&(e[r]=i)}return e}const qj=[...Pg].reverse(),Qj=Pg.length;function Yj(t){return e=>Promise.all(e.map(({animation:n,options:r})=>Hj(t,n,r)))}function Xj(t){let e=Yj(t),n=fE(),r=!0;const i=l=>(c,h)=>{var f;const p=_h(t,h,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:g,transitionEnd:w,...T}=p;c={...c,...T,...w}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,h=fP(t.parent)||{},f=[],p=new Set;let g={},w=1/0;for(let P=0;P<Qj;P++){const E=qj[P],_=n[E],S=c[E]!==void 0?c[E]:h[E],D=Fa(S),O=E===l?_.isActive:null;O===!1&&(w=P);let M=S===h[E]&&S!==c[E]&&D;if(M&&r&&t.manuallyAnimateOnMount&&(M=!1),_.protectedKeys={...g},!_.isActive&&O===null||!S&&!_.prevProp||yh(S)||typeof S=="boolean")continue;const I=Jj(_.prevProp,S);let y=I||E===l&&_.isActive&&!M&&D||P>w&&D,A=!1;const C=Array.isArray(S)?S:[S];let k=C.reduce(i(E),{});O===!1&&(k={});const{prevResolvedValues:b={}}=_,x={...b,...k},gt=fe=>{y=!0,p.has(fe)&&(A=!0,p.delete(fe)),_.needsAnimating[fe]=!0;const z=t.getValue(fe);z&&(z.liveStyle=!1)};for(const fe in x){const z=k[fe],q=b[fe];if(g.hasOwnProperty(fe))continue;let X=!1;hp(z)&&hp(q)?X=!RR(z,q):X=z!==q,X?z!=null?gt(fe):p.add(fe):z!==void 0&&p.has(fe)?gt(fe):_.protectedKeys[fe]=!0}_.prevProp=S,_.prevResolvedValues=k,_.isActive&&(g={...g,...k}),r&&t.blockInitialAnimation&&(y=!1),y&&(!(M&&I)||A)&&f.push(...C.map(fe=>({animation:fe,options:{type:E}})))}if(p.size){const P={};p.forEach(E=>{const _=t.getBaseTarget(E),S=t.getValue(E);S&&(S.liveStyle=!0),P[E]=_??null}),f.push({animation:P})}let T=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(f):Promise.resolve()}function a(l,c){var h;if(n[l].isActive===c)return Promise.resolve();(h=t.variantChildren)===null||h===void 0||h.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=fE(),r=!0}}}function Jj(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!RR(e,t):!1}function oi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fE(){return{animate:oi(!0),whileInView:oi(),whileHover:oi(),whileTap:oi(),whileDrag:oi(),whileFocus:oi(),exit:oi()}}class ti{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Zj extends ti{constructor(e){super(e),e.animationState||(e.animationState=Xj(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();yh(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let eU=0;class tU extends ti{constructor(){super(...arguments),this.id=eU++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const nU={animation:{Feature:Zj},exit:{Feature:tU}};function za(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function fl(t){return{point:{x:t.pageX,y:t.pageY}}}const rU=t=>e=>$g(e)&&t(e,fl(e));function sa(t,e,n,r){return za(t,e,rU(n),r)}const pE=(t,e)=>Math.abs(t-e);function iU(t,e){const n=pE(t.x,e.x),r=pE(t.y,e.y);return Math.sqrt(n**2+r**2)}class pP{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Ld(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=iU(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:w}=f,{timestamp:T}=Qe;this.history.push({...w,timestamp:T});const{onStart:P,onMove:E}=this.handlers;p||(P&&P(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Od(p,this.transformPagePoint),ve.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:w,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const P=Ld(f.type==="pointercancel"?this.lastMoveEventInfo:Od(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,P),w&&w(f,P)},!$g(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=fl(e),a=Od(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Qe;this.history=[{...l,timestamp:c}];const{onSessionStart:h}=n;h&&h(e,Ld(a,this.history)),this.removeListeners=dl(sa(this.contextWindow,"pointermove",this.handlePointerMove),sa(this.contextWindow,"pointerup",this.handlePointerUp),sa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Kr(this.updatePoint)}}function Od(t,e){return e?{point:e(t.point)}:t}function mE(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Ld({point:t},e){return{point:t,delta:mE(t,mP(e)),offset:mE(t,sU(e)),velocity:oU(e,.1)}}function sU(t){return t[0]}function mP(t){return t[t.length-1]}function oU(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=mP(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>zn(e)));)n--;if(!r)return{x:0,y:0};const s=$n(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const gP=1e-4,aU=1-gP,lU=1+gP,yP=.01,uU=0-yP,cU=0+yP;function Ft(t){return t.max-t.min}function hU(t,e,n){return Math.abs(t-e)<=n}function gE(t,e,n,r=.5){t.origin=r,t.originPoint=Se(e.min,e.max,t.origin),t.scale=Ft(n)/Ft(e),t.translate=Se(n.min,n.max,t.origin)-t.originPoint,(t.scale>=aU&&t.scale<=lU||isNaN(t.scale))&&(t.scale=1),(t.translate>=uU&&t.translate<=cU||isNaN(t.translate))&&(t.translate=0)}function oa(t,e,n,r){gE(t.x,e.x,n.x,r?r.originX:void 0),gE(t.y,e.y,n.y,r?r.originY:void 0)}function yE(t,e,n){t.min=n.min+e.min,t.max=t.min+Ft(e)}function dU(t,e,n){yE(t.x,e.x,n.x),yE(t.y,e.y,n.y)}function vE(t,e,n){t.min=e.min-n.min,t.max=t.min+Ft(e)}function aa(t,e,n){vE(t.x,e.x,n.x),vE(t.y,e.y,n.y)}function fU(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Se(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Se(n,t,r.max):Math.min(t,n)),t}function _E(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function pU(t,{top:e,left:n,bottom:r,right:i}){return{x:_E(t.x,n,i),y:_E(t.y,e,r)}}function EE(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function mU(t,e){return{x:EE(t.x,e.x),y:EE(t.y,e.y)}}function gU(t,e){let n=.5;const r=Ft(t),i=Ft(e);return i>r?n=Ks(e.min,e.max-r,t.min):r>i&&(n=Ks(t.min,t.max-i,e.min)),Zn(0,1,n)}function yU(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Tp=.35;function vU(t=Tp){return t===!1?t=0:t===!0&&(t=Tp),{x:wE(t,"left","right"),y:wE(t,"top","bottom")}}function wE(t,e,n){return{min:TE(t,e),max:TE(t,n)}}function TE(t,e){return typeof t=="number"?t:t[e]||0}const SE=()=>({translate:0,scale:1,origin:0,originPoint:0}),ms=()=>({x:SE(),y:SE()}),IE=()=>({min:0,max:0}),Ne=()=>({x:IE(),y:IE()});function zt(t){return[t("x"),t("y")]}function vP({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function _U({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function EU(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Md(t){return t===void 0||t===1}function Sp({scale:t,scaleX:e,scaleY:n}){return!Md(t)||!Md(e)||!Md(n)}function hi(t){return Sp(t)||_P(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function _P(t){return AE(t.x)||AE(t.y)}function AE(t){return t&&t!=="0%"}function Rc(t,e,n){const r=t-n,i=e*r;return n+i}function RE(t,e,n,r,i){return i!==void 0&&(t=Rc(t,i,r)),Rc(t,n,r)+e}function Ip(t,e=0,n=1,r,i){t.min=RE(t.min,e,n,r,i),t.max=RE(t.max,e,n,r,i)}function EP(t,{x:e,y:n}){Ip(t.x,e.translate,e.scale,e.originPoint),Ip(t.y,n.translate,n.scale,n.originPoint)}const PE=.999999999999,CE=1.0000000000001;function wU(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ys(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,EP(t,o)),r&&hi(s.latestValues)&&ys(t,s.latestValues))}e.x<CE&&e.x>PE&&(e.x=1),e.y<CE&&e.y>PE&&(e.y=1)}function gs(t,e){t.min=t.min+e,t.max=t.max+e}function xE(t,e,n,r,i=.5){const s=Se(t.min,t.max,i);Ip(t,e,n,s,r)}function ys(t,e){xE(t.x,e.x,e.scaleX,e.scale,e.originX),xE(t.y,e.y,e.scaleY,e.scale,e.originY)}function wP(t,e){return vP(EU(t.getBoundingClientRect(),e))}function TU(t,e,n){const r=wP(t,n),{scroll:i}=e;return i&&(gs(r.x,i.offset.x),gs(r.y,i.offset.y)),r}const TP=({current:t})=>t?t.ownerDocument.defaultView:null,SU=new WeakMap;class IU{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ne(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(fl(h).point)},s=(h,f)=>{const{drag:p,dragPropagation:g,onDragStart:w}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=gF(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zt(P=>{let E=this.getAxisMotionValue(P).get()||0;if(Tn.test(E)){const{projection:_}=this.visualElement;if(_&&_.layout){const S=_.layout.layoutBox[P];S&&(E=Ft(S)*(parseFloat(E)/100))}}this.originPoint[P]=E}),w&&ve.postRender(()=>w(h,f)),pp(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},o=(h,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:w,onDrag:T}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:P}=f;if(g&&this.currentDirection===null){this.currentDirection=AU(P),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",f.point,P),this.updateAxis("y",f.point,P),this.visualElement.render(),T&&T(h,f)},a=(h,f)=>this.stop(h,f),l=()=>zt(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new pP(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:TP(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&ve.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!ou(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=fU(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&fs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=pU(i.layoutBox,n):this.constraints=!1,this.elastic=vU(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&zt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=yU(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!fs(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=TU(r,i.root,this.visualElement.getTransformPagePoint());let o=mU(i.layout.layoutBox,s);if(n){const a=n(_U(o));this.hasMutatedConstraints=!!a,a&&(o=vP(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=zt(h=>{if(!ou(h,n,this.currentDirection))return;let f=l&&l[h]||{};o&&(f={min:0,max:0});const p=i?200:1e6,g=i?40:1e7,w={type:"inertia",velocity:r?e[h]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(h,w)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return pp(this.visualElement,e),r.start(ty(e,r,0,n,this.visualElement,!1))}stopAnimation(){zt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){zt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){zt(n=>{const{drag:r}=this.getProps();if(!ou(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Se(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!fs(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};zt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=gU({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),zt(o=>{if(!ou(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Se(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;SU.set(this.visualElement,this);const e=this.visualElement.current,n=sa(e,"pointerdown",l=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();fs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),ve.read(r);const o=za(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(zt(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=l[h].translate,f.set(f.get()+l[h].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Tp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ou(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function AU(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class RU extends ti{constructor(e){super(e),this.removeGroupControls=Lt,this.removeListeners=Lt,this.controls=new IU(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Lt}unmount(){this.removeGroupControls(),this.removeListeners()}}const kE=t=>(e,n)=>{t&&ve.postRender(()=>t(e,n))};class PU extends ti{constructor(){super(...arguments),this.removePointerDownListener=Lt}onPointerDown(e){this.session=new pP(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:TP(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:kE(e),onStart:kE(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ve.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=sa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ku={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function NE(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const ko={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(G.test(t))t=parseFloat(t);else return t;const n=NE(t,e.target.x),r=NE(t,e.target.y);return`${n}% ${r}%`}},CU={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Hr.parse(t);if(i.length>5)return r;const s=Hr.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=Se(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class xU extends N.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;Q2(kU),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ku.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ve.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),kg.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function SP(t){const[e,n]=sR(),r=N.useContext(Tg);return R.jsx(xU,{...t,layoutGroup:r,switchLayoutGroup:N.useContext(fR),isPresent:e,safeToRemove:n})}const kU={borderRadius:{...ko,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ko,borderTopRightRadius:ko,borderBottomLeftRadius:ko,borderBottomRightRadius:ko,boxShadow:CU};function NU(t,e,n){const r=dt(t)?t:Ua(t);return r.start(ty("",r,e,n)),r.animation}function DU(t){return t instanceof SVGElement&&t.tagName!=="svg"}const bU=(t,e)=>t.depth-e.depth;class VU{constructor(){this.children=[],this.isDirty=!1}add(e){Wg(this.children,e),this.isDirty=!0}remove(e){Kg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(bU),this.isDirty=!1,this.children.forEach(e)}}function OU(t,e){const n=Sn.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Kr(r),t(s-e))};return ve.read(r,!0),()=>Kr(r)}const IP=["TopLeft","TopRight","BottomLeft","BottomRight"],LU=IP.length,DE=t=>typeof t=="string"?parseFloat(t):t,bE=t=>typeof t=="number"||G.test(t);function MU(t,e,n,r,i,s){i?(t.opacity=Se(0,n.opacity!==void 0?n.opacity:1,FU(r)),t.opacityExit=Se(e.opacity!==void 0?e.opacity:1,0,jU(r))):s&&(t.opacity=Se(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<LU;o++){const a=`border${IP[o]}Radius`;let l=VE(e,a),c=VE(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||bE(l)===bE(c)?(t[a]=Math.max(Se(DE(l),DE(c),r),0),(Tn.test(c)||Tn.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Se(e.rotate||0,n.rotate||0,r))}function VE(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const FU=AP(0,.5,$R),jU=AP(.5,.95,Lt);function AP(t,e,n){return r=>r<t?0:r>e?1:n(Ks(t,e,r))}function OE(t,e){t.min=e.min,t.max=e.max}function Bt(t,e){OE(t.x,e.x),OE(t.y,e.y)}function LE(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function ME(t,e,n,r,i){return t-=e,t=Rc(t,1/n,r),i!==void 0&&(t=Rc(t,1/i,r)),t}function UU(t,e=0,n=1,r=.5,i,s=t,o=t){if(Tn.test(e)&&(e=parseFloat(e),e=Se(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Se(s.min,s.max,r);t===s&&(a-=e),t.min=ME(t.min,e,n,a,i),t.max=ME(t.max,e,n,a,i)}function FE(t,e,[n,r,i],s,o){UU(t,e[n],e[r],e[i],e.scale,s,o)}const BU=["x","scaleX","originX"],zU=["y","scaleY","originY"];function jE(t,e,n,r){FE(t.x,e,BU,n?n.x:void 0,r?r.x:void 0),FE(t.y,e,zU,n?n.y:void 0,r?r.y:void 0)}function UE(t){return t.translate===0&&t.scale===1}function RP(t){return UE(t.x)&&UE(t.y)}function BE(t,e){return t.min===e.min&&t.max===e.max}function $U(t,e){return BE(t.x,e.x)&&BE(t.y,e.y)}function zE(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function PP(t,e){return zE(t.x,e.x)&&zE(t.y,e.y)}function $E(t){return Ft(t.x)/Ft(t.y)}function WE(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class WU{constructor(){this.members=[]}add(e){Wg(this.members,e),e.scheduleRender()}remove(e){if(Kg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function KU(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:h,rotateX:f,rotateY:p,skewX:g,skewY:w}=n;c&&(r=`perspective(${c}px) ${r}`),h&&(r+=`rotate(${h}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),g&&(r+=`skewX(${g}deg) `),w&&(r+=`skewY(${w}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const di={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},$o=typeof window<"u"&&window.MotionDebug!==void 0,Fd=["","X","Y","Z"],HU={visibility:"hidden"},KE=1e3;let GU=0;function jd(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function CP(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=LR(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ve,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&CP(r)}function xP({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=GU++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,$o&&(di.totalNodes=di.resolvedTargetDeltas=di.recalculatedProjection=0),this.nodes.forEach(YU),this.nodes.forEach(t4),this.nodes.forEach(n4),this.nodes.forEach(XU),$o&&window.MotionDebug.record(di)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new VU)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Hg),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=DU(o),this.instance=o;const{layoutId:l,layout:c,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=OU(p,250),ku.hasAnimatedSinceResize&&(ku.hasAnimatedSinceResize=!1,this.nodes.forEach(GE))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||h.getDefaultTransition()||a4,{onLayoutAnimationStart:P,onLayoutAnimationComplete:E}=h.getProps(),_=!this.targetLayout||!PP(this.targetLayout,w)||g,S=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||S||p&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,S);const D={...Ug(T,"layout"),onPlay:P,onComplete:E};(h.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D)}else p||GE(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Kr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(r4),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&CP(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const f=this.path[h];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(HE);return}this.isUpdating||this.nodes.forEach(ZU),this.isUpdating=!1,this.nodes.forEach(e4),this.nodes.forEach(qU),this.nodes.forEach(QU),this.clearAllSnapshots();const a=Sn.now();Qe.delta=Zn(0,1e3/60,a-Qe.timestamp),Qe.timestamp=a,Qe.isProcessing=!0,xd.update.process(Qe),xd.preRender.process(Qe),xd.render.process(Qe),Qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,kg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(JU),this.sharedNodes.forEach(i4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ne(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!RP(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;o&&(a||hi(this.latestValues)||h)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),l4(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Ne();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(u4))){const{scroll:h}=this.root;h&&(gs(l.x,h.offset.x),gs(l.y,h.offset.y))}return l}removeElementScroll(o){var a;const l=Ne();if(Bt(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const h=this.path[c],{scroll:f,options:p}=h;h!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Bt(l,o),gs(l.x,f.offset.x),gs(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=Ne();Bt(l,o);for(let c=0;c<this.path.length;c++){const h=this.path[c];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&ys(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),hi(h.latestValues)&&ys(l,h.latestValues)}return hi(this.latestValues)&&ys(l,this.latestValues),l}removeTransform(o){const a=Ne();Bt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!hi(c.latestValues))continue;Sp(c.latestValues)&&c.updateSnapshot();const h=Ne(),f=c.measurePageBox();Bt(h,f),jE(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return hi(this.latestValues)&&jE(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Qe.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ne(),this.relativeTargetOrigin=Ne(),aa(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ne(),this.targetWithTransforms=Ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),dU(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Bt(this.target,this.layout.layoutBox),EP(this.target,this.targetDelta)):Bt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ne(),this.relativeTargetOrigin=Ne(),aa(this.relativeTargetOrigin,this.target,g.target),Bt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}$o&&di.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Sp(this.parent.latestValues)||_P(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Qe.timestamp&&(c=!1),c)return;const{layout:h,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||f))return;Bt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;wU(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Ne());const{target:w}=a;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(LE(this.prevProjectionDelta.x,this.projectionDelta.x),LE(this.prevProjectionDelta.y,this.projectionDelta.y)),oa(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==g||!WE(this.projectionDelta.x,this.prevProjectionDelta.x)||!WE(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),$o&&di.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ms(),this.projectionDelta=ms(),this.projectionDeltaWithTransform=ms()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},h={...this.latestValues},f=ms();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Ne(),g=l?l.source:void 0,w=this.layout?this.layout.source:void 0,T=g!==w,P=this.getStack(),E=!P||P.members.length<=1,_=!!(T&&!E&&this.options.crossfade===!0&&!this.path.some(o4));this.animationProgress=0;let S;this.mixTargetDelta=D=>{const O=D/1e3;qE(f.x,o.x,O),qE(f.y,o.y,O),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(aa(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),s4(this.relativeTarget,this.relativeTargetOrigin,p,O),S&&$U(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=Ne()),Bt(S,this.relativeTarget)),T&&(this.animationValues=h,MU(h,c,this.latestValues,O,_,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Kr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ve.update(()=>{ku.hasAnimatedSinceResize=!0,this.currentAnimation=NU(0,KE,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(KE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:h}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&kP(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ne();const f=Ft(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=Ft(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}Bt(a,l),ys(a,h),oa(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new WU),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&jd("z",o,c,this.animationValues);for(let h=0;h<Fd.length;h++)jd(`rotate${Fd[h]}`,o,c,this.animationValues),jd(`skew${Fd[h]}`,o,c,this.animationValues);o.render();for(const h in c)o.setStaticValue(h,c[h]),this.animationValues&&(this.animationValues[h]=c[h]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return HU;const c={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Cu(o==null?void 0:o.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=Cu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!hi(this.latestValues)&&(T.transform=h?h({},""):"none",this.hasProjected=!1),T}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=KU(this.projectionDeltaWithTransform,this.treeScale,p),h&&(c.transform=h(p,c.transform));const{x:g,y:w}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${w.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const T in wc){if(p[T]===void 0)continue;const{correct:P,applyTo:E}=wc[T],_=c.transform==="none"?p[T]:P(p[T],f);if(E){const S=E.length;for(let D=0;D<S;D++)c[E[D]]=_}else c[T]=_}return this.options.layoutId&&(c.pointerEvents=f===this?Cu(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(HE),this.root.sharedNodes.clear()}}}function qU(t){t.updateLayout()}function QU(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?zt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=Ft(p);p.min=r[f].min,p.max=p.min+g}):kP(s,n.layoutBox,r)&&zt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=Ft(r[f]);p.max=p.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+g)});const a=ms();oa(a,r,n.layoutBox);const l=ms();o?oa(l,t.applyTransform(i,!0),n.measuredBox):oa(l,r,n.layoutBox);const c=!RP(a);let h=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const w=Ne();aa(w,n.layoutBox,p.layoutBox);const T=Ne();aa(T,r,g.layoutBox),PP(w,T)||(h=!0),f.options.layoutRoot&&(t.relativeTarget=T,t.relativeTargetOrigin=w,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function YU(t){$o&&di.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function XU(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function JU(t){t.clearSnapshot()}function HE(t){t.clearMeasurements()}function ZU(t){t.isLayoutDirty=!1}function e4(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function GE(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function t4(t){t.resolveTargetDelta()}function n4(t){t.calcProjection()}function r4(t){t.resetSkewAndRotation()}function i4(t){t.removeLeadSnapshot()}function qE(t,e,n){t.translate=Se(e.translate,0,n),t.scale=Se(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function QE(t,e,n,r){t.min=Se(e.min,n.min,r),t.max=Se(e.max,n.max,r)}function s4(t,e,n,r){QE(t.x,e.x,n.x,r),QE(t.y,e.y,n.y,r)}function o4(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const a4={duration:.45,ease:[.4,0,.1,1]},YE=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),XE=YE("applewebkit/")&&!YE("chrome/")?Math.round:Lt;function JE(t){t.min=XE(t.min),t.max=XE(t.max)}function l4(t){JE(t.x),JE(t.y)}function kP(t,e,n){return t==="position"||t==="preserve-aspect"&&!hU($E(e),$E(n),.2)}function u4(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const c4=xP({attachResizeListener:(t,e)=>za(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ud={current:void 0},NP=xP({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ud.current){const t=new c4({});t.mount(window),t.setOptions({layoutScroll:!0}),Ud.current=t}return Ud.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),h4={pan:{Feature:PU},drag:{Feature:RU,ProjectionNode:NP,MeasureLayout:SP}};function ZE(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&ve.postRender(()=>s(e,fl(e)))}class d4 extends ti{mount(){const{current:e}=this.node;e&&(this.unmount=hF(e,n=>(ZE(this.node,n,"Start"),r=>ZE(this.node,r,"End"))))}unmount(){}}class f4 extends ti{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=dl(za(this.node.current,"focus",()=>this.onFocus()),za(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ew(t,e,n){const{props:r}=t;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&ve.postRender(()=>s(e,fl(e)))}class p4 extends ti{mount(){const{current:e}=this.node;e&&(this.unmount=mF(e,n=>(ew(this.node,n,"Start"),(r,{success:i})=>ew(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ap=new WeakMap,Bd=new WeakMap,m4=t=>{const e=Ap.get(t.target);e&&e(t)},g4=t=>{t.forEach(m4)};function y4({root:t,...e}){const n=t||document;Bd.has(n)||Bd.set(n,{});const r=Bd.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(g4,{root:t,...e})),r[i]}function v4(t,e,n){const r=y4(e);return Ap.set(t,n),r.observe(t),()=>{Ap.delete(t),r.unobserve(t)}}const _4={some:0,all:1};class E4 extends ti{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:_4[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=c?h:f;p&&p(l)};return v4(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(w4(e,n))&&this.startObserver()}unmount(){}}function w4({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const T4={inView:{Feature:E4},tap:{Feature:p4},focus:{Feature:f4},hover:{Feature:d4}},S4={layout:{ProjectionNode:NP,MeasureLayout:SP}},Rp={current:null},DP={current:!1};function I4(){if(DP.current=!0,!!Ag)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Rp.current=t.matches;t.addListener(e),e()}else Rp.current=!1}const A4=[...rP,lt,Hr],R4=t=>A4.find(nP(t)),tw=new WeakMap;function P4(t,e,n){for(const r in e){const i=e[r],s=n[r];if(dt(i))t.addValue(r,i);else if(dt(s))t.addValue(r,Ua(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,Ua(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const nw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class C4{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Jg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=Sn.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,ve.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:h}=o;this.onUpdate=h,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=vh(n),this.isVariantNode=hR(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in p){const w=p[g];l[g]!==void 0&&dt(w)&&w.set(l[g],!1)}}mount(e){this.current=e,tw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),DP.current||I4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Rp.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){tw.delete(this.current),this.projection&&this.projection.unmount(),Kr(this.notifyUpdate),Kr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=$i.has(e),i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ve.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Hs){const n=Hs[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ne()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<nw.length;r++){const i=nw[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=P4(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Ua(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){var r;let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(eP(i)||KR(i))?i=parseFloat(i):!R4(i)&&Hr.test(n)&&(i=XR(e,n)),this.setBaseTarget(e,dt(i)?i.get():i)),dt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Dg(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[e])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!dt(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Hg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class bP extends C4{constructor(){super(...arguments),this.KeyframeResolver=iP}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;dt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function x4(t){return window.getComputedStyle(t)}class k4 extends bP{constructor(){super(...arguments),this.type="html",this.renderInstance=ER}readValueFromInstance(e,n){if($i.has(n)){const r=Xg(n);return r&&r.default||0}else{const r=x4(e),i=(yR(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return wP(e,n)}build(e,n,r){Og(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return jg(e,n,r)}}class N4 extends bP{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ne}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if($i.has(n)){const r=Xg(n);return r&&r.default||0}return n=wR.has(n)?n:xg(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return IR(e,n,r)}build(e,n,r){Lg(e,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,r,i){TR(e,n,r,i)}mount(e){this.isSVGTag=Fg(e.tagName),super.mount(e)}}const D4=(t,e)=>Ng(t)?new N4(e):new k4(e,{allowProjection:t!==N.Fragment}),b4=iF({...nU,...T4,...h4,...S4},D4),Wn=_2(b4);function V4({category:t,className:e=""}){return R.jsx("span",{className:`category-tag ${e}`,children:t})}const O4=()=>{const{studies:t,loading:e}=r2();return e?R.jsx("div",{className:"loading-state",children:"스터디를 불러오는 중..."}):R.jsxs("div",{className:"home-page",children:[R.jsx("header",{className:"hero",children:R.jsxs("div",{className:"container",children:[R.jsxs(Wn.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:["함께 배우고, 함께 성장하는 ",R.jsx("br",{}),R.jsx("span",{children:"Wit.me"})," 스터디 플랫폼"]}),R.jsx(Wn.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.8},children:"관심 있는 분야의 스터디를 찾거나 직접 만들어보세요."})]})}),R.jsxs("section",{className:"study-list container",children:[R.jsxs("div",{className:"section-header",children:[R.jsx("h2",{children:"최근 등록된 스터디"}),R.jsxs("div",{className:"filter-hint",children:["총 ",t.length,"개의 스터디"]})]}),t.length===0?R.jsx("div",{className:"empty-state",children:"아직 등록된 스터디가 없습니다. 첫 스터디의 주인공이 되어보세요!"}):R.jsx("div",{className:"study-grid",children:t.map((n,r)=>R.jsxs(Wn.div,{className:"study-card",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:r*.1,duration:.5},children:[R.jsx(V4,{category:n.category,className:"study-tag"}),R.jsx("h3",{className:"study-title",children:n.title}),R.jsx("p",{className:"study-desc",children:n.description.length>j0?`${n.description.substring(0,j0)}...`:n.description}),R.jsxs("div",{className:"study-info",children:[R.jsxs("div",{className:"info-item",children:[R.jsx(rR,{size:16}),R.jsxs("span",{children:["정원 ",n.maxParticipants,"명"]})]}),R.jsxs("div",{className:"info-item",children:[R.jsx(eR,{size:16}),R.jsx("span",{children:new Date(n.createdAt).toLocaleDateString()})]})]}),R.jsxs(gr,{to:`/study/${n.id}`,className:"study-link",children:["상세보기 ",R.jsx($M,{size:16})]})]},n.id))})]}),R.jsx("style",{jsx:"true",children:`
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
      `})]})},L4=()=>{const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,s]=N.useState(""),[o,a]=N.useState(!1),{login:l}=zi(),c=Fi(),h=async f=>{f.preventDefault();try{s(""),a(!0),await l(t,n),c("/")}catch(p){s("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요."),console.error(p)}finally{a(!1)}};return R.jsxs("div",{className:"auth-page",children:[R.jsxs(Wn.div,{className:"auth-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},children:[R.jsx("h1",{className:"auth-title",children:"Welcome Back"}),R.jsx("p",{className:"auth-subtitle",children:"Wit.me에서 당신의 스터디 여정을 계속하세요."}),i&&R.jsx("div",{className:"auth-error",children:i}),R.jsxs("form",{onSubmit:h,children:[R.jsxs("div",{className:"input-group",children:[R.jsx("label",{className:"input-label",children:"이메일"}),R.jsx("input",{type:"email",className:"input-field",value:t,onChange:f=>e(f.target.value),required:!0,placeholder:"example@wit.me"})]}),R.jsxs("div",{className:"input-group",children:[R.jsx("label",{className:"input-label",children:"비밀번호"}),R.jsx("input",{type:"password",className:"input-field",value:n,onChange:f=>r(f.target.value),required:!0,placeholder:"••••••••"})]}),R.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:o,children:o?"로그인 중...":"로그인"})]}),R.jsxs("p",{className:"auth-footer",children:["계정이 없으신가요? ",R.jsx(gr,{to:"/register",children:"회원가입"})]})]}),R.jsx("style",{jsx:"true",children:`
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
      `})]})},M4=()=>{const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,s]=N.useState(""),[o,a]=N.useState(Zi.USER),[l,c]=N.useState(""),[h,f]=N.useState(!1),{signup:p}=zi(),g=Fi(),w=async T=>{if(T.preventDefault(),n.length<Cd)return c(`비밀번호는 최소 ${Cd}자 이상이어야 합니다.`);try{c(""),f(!0),await p(t,n,i,o),g("/")}catch(P){c("회원가입에 실패했습니다. 이미 사용 중인 이메일일 수 있습니다."),console.error(P)}finally{f(!1)}};return R.jsxs("div",{className:"auth-page",children:[R.jsxs(Wn.div,{className:"auth-card",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},children:[R.jsx("h1",{className:"auth-title",children:"Join Wit.me"}),R.jsx("p",{className:"auth-subtitle",children:"함께 성장하는 즐거움, 당신의 성장을 응원합니다."}),l&&R.jsx("div",{className:"auth-error",children:l}),R.jsxs("form",{onSubmit:w,children:[R.jsxs("div",{className:"input-group",children:[R.jsx("label",{className:"input-label",children:"이름"}),R.jsx("input",{type:"text",className:"input-field",value:i,onChange:T=>s(T.target.value),required:!0,placeholder:"홍길동"})]}),R.jsxs("div",{className:"input-group",children:[R.jsx("label",{className:"input-label",children:"이메일"}),R.jsx("input",{type:"email",className:"input-field",value:t,onChange:T=>e(T.target.value),required:!0,placeholder:"example@wit.me"})]}),R.jsxs("div",{className:"input-group",children:[R.jsx("label",{className:"input-label",children:`비밀번호 (${Cd}자 이상)`}),R.jsx("input",{type:"password",className:"input-field",value:n,onChange:T=>r(T.target.value),required:!0,placeholder:"••••••••"})]}),R.jsxs("div",{className:"input-group",children:[R.jsx("label",{className:"input-label",children:"가입 유형"}),R.jsxs("div",{className:"role-selector",children:[R.jsx("button",{type:"button",className:`role-btn ${o===Zi.USER?"active":""}`,onClick:()=>a(Zi.USER),children:"일반 사용자"}),R.jsx("button",{type:"button",className:`role-btn ${o===Zi.ORGANIZER?"active":""}`,onClick:()=>a(Zi.ORGANIZER),children:"모임장"})]})]}),R.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:h,children:h?"처리 중...":"회원가입"})]}),R.jsxs("p",{className:"auth-footer",children:["이미 계정이 있으신가요? ",R.jsx(gr,{to:"/login",children:"로그인"})]})]}),R.jsx("style",{jsx:"true",children:`
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
      `})]})};class Pp{static async applyToStudyGroup(e,n,r,i){try{if(await dn.hasUserApplied(n,e.id))throw new _e(ae.ALREADY_APPLIED,"이미 신청한 스터디입니다.");if(e.organizerId===n)throw new _e(ae.PERMISSION_DENIED,"자신이 운영하는 스터디에는 신청할 수 없습니다.");const o={studyGroupId:e.id,studyTitle:e.title,userId:n,userName:r,userEmail:i};return await dn.createApplication(o)}catch(s){throw s instanceof _e?s:new _e(ae.UNKNOWN_ERROR,"신청에 실패했습니다.",s)}}static async getUserApplications(e){try{return await dn.getApplicationsByUser(e)}catch(n){throw new _e(ae.UNKNOWN_ERROR,"신청 내역 조회에 실패했습니다.",n)}}static async getStudyGroupApplications(e){try{return await dn.getApplicationsByStudyGroup(e)}catch(n){throw new _e(ae.UNKNOWN_ERROR,"신청자 목록 조회에 실패했습니다.",n)}}static async approveApplication(e){try{return await dn.updateApplicationStatus(e,wn.APPROVED)}catch(n){throw new _e(ae.UNKNOWN_ERROR,"승인에 실패했습니다.",n)}}static async rejectApplication(e){try{return await dn.updateApplicationStatus(e,wn.REJECTED)}catch(n){throw new _e(ae.UNKNOWN_ERROR,"거절에 실패했습니다.",n)}}static async hasApplied(e,n){try{return await dn.hasUserApplied(e,n)}catch(r){throw new _e(ae.UNKNOWN_ERROR,"신청 상태 확인에 실패했습니다.",r)}}}function Si({variant:t="primary",size:e="md",fullWidth:n=!1,disabled:r=!1,children:i,className:s="",...o}){const a="btn",l=`btn-${t}`,c=e!=="md"?`btn-${e}`:"",p=[a,l,c,n?"btn-full":"",r?"btn-disabled":"",s].filter(Boolean).join(" ");return R.jsx("button",{className:p,disabled:r,...o,children:i})}const F4=()=>{const{id:t}=Ek(),{currentUser:e,userData:n}=zi(),r=Fi(),{study:i,loading:s}=s2(t),[o,a]=N.useState(!1),[l,c]=N.useState(!1),[h,f]=N.useState(""),p=async()=>{if(!e)return r("/login");a(!0),f("");try{await Pp.applyToStudyGroup(i,e.uid,n.displayName,e.email),c(!0)}catch(T){const{message:P}=Cs(T);f(P)}finally{a(!1)}};if(s)return R.jsx("div",{className:"loading-state",children:"로딩 중..."});if(!i)return null;const g=(e==null?void 0:e.uid)===i.organizerId,w=()=>e?g?R.jsx(Si,{variant:"outline",fullWidth:!0,onClick:()=>r("/dashboard"),children:"참가자 관리하기"}):l?R.jsxs("div",{className:"applied-status",children:[R.jsx(WM,{size:24}),R.jsx("span",{children:"신청 완료되었습니다."}),R.jsx("p",{children:"모임장의 승인을 기다리고 있습니다."})]}):R.jsx(Si,{variant:"primary",fullWidth:!0,size:"lg",onClick:p,disabled:o,children:o?"신청 처리 중...":"스터디 참여 신청"}):R.jsx(Si,{variant:"primary",fullWidth:!0,size:"lg",onClick:()=>r("/login"),children:"로그인하고 신청하기"});return R.jsxs("div",{className:"container study-detail-page",children:[R.jsxs("button",{onClick:()=>r(-1),className:"back-btn",children:[R.jsx(zM,{size:18})," 목록으로 돌아가기"]}),R.jsxs("div",{className:"detail-layout",children:[R.jsxs(Wn.div,{className:"detail-content",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},children:[R.jsxs("div",{className:"study-header",children:[R.jsx("span",{className:"category-tag",children:i.category}),R.jsx("h1",{children:i.title}),R.jsxs("div",{className:"meta-info",children:[R.jsxs("span",{className:"organizer-name",children:[R.jsx(nR,{size:16})," ",i.organizerName]}),R.jsxs("span",{className:"created-date",children:[R.jsx(eR,{size:16})," ",new Date(i.createdAt).toLocaleDateString()]})]})]}),R.jsxs("div",{className:"description-section",children:[R.jsx("h3",{children:"스터디 상세 소개"}),R.jsx("div",{className:"description-text",children:i.description.split(`
`).map((T,P)=>R.jsx("p",{children:T},P))})]})]}),R.jsx(Wn.div,{className:"detail-sidebar",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.2},children:R.jsxs("div",{className:"sidebar-card",children:[R.jsxs("div",{className:"sidebar-info-group",children:[R.jsx("label",{children:"모집 인원"}),R.jsxs("div",{className:"sidebar-val",children:[R.jsx(rR,{size:18})," ",i.maxParticipants,"명"]})]}),R.jsx("div",{className:"sidebar-divider"}),h&&R.jsx("div",{style:{marginBottom:"1rem"},className:"error-message",children:h}),w(),R.jsx("p",{className:"sidebar-hint",children:"* 승인 후에는 대시보드에서 상태를 확인하실 수 있습니다."})]})})]}),R.jsx("style",{jsx:"true",children:`
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
 */var rw;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(rw||(rw={}));var iw;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(iw||(iw={}));var sw;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(sw||(sw={}));var ow;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(ow||(ow={}));var Pc;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(Pc||(Pc={}));var aw;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(aw||(aw={}));/**
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
 */class $a extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class lw extends $a{constructor(e,n){super(e),this.response=n}}/**
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
 */const j4="https://generativelanguage.googleapis.com",U4="v1",B4="0.2.1",z4="genai-js";var Oi;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Oi||(Oi={}));class pl{constructor(e,n,r,i){this.model=e,this.task=n,this.apiKey=r,this.stream=i}toString(){let e=`${j4}/${U4}/${this.model}:${this.task}`;return this.stream&&(e+="?alt=sse"),e}}function $4(){return`${z4}/${B4}`}async function ml(t,e,n){let r;try{if(r=await fetch(t.toString(),Object.assign(Object.assign({},W4(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":$4(),"x-goog-api-key":t.apiKey},body:e})),!r.ok){let i="";try{const s=await r.json();i=s.error.message,s.error.details&&(i+=` ${JSON.stringify(s.error.details)}`)}catch{}throw new Error(`[${r.status} ${r.statusText}] ${i}`)}}catch(i){const s=new $a(`Error fetching from ${t.toString()}: ${i.message}`);throw s.stack=i.stack,s}return r}function W4(t){const e={};if((t==null?void 0:t.timeout)>=0){const n=new AbortController,r=n.signal;setTimeout(()=>n.abort(),t.timeout),e.signal=r}return e}/**
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
 */function ny(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),VP(t.candidates[0]))throw new lw(`${Cc(t)}`,t);return K4(t)}else if(t.promptFeedback)throw new lw(`Text not available. ${Cc(t)}`,t);return""},t}function K4(t){var e,n,r,i;return!((i=(r=(n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0?void 0:n.parts)===null||r===void 0?void 0:r[0])===null||i===void 0)&&i.text?t.candidates[0].content.parts[0].text:""}const H4=[Pc.RECITATION,Pc.SAFETY];function VP(t){return!!t.finishReason&&H4.includes(t.finishReason)}function Cc(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];VP(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function Wa(t){return this instanceof Wa?(this.v=t,this):new Wa(t)}function G4(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(p){r[p]&&(i[p]=function(g){return new Promise(function(w,T){s.push([p,g,w,T])>1||a(p,g)})})}function a(p,g){try{l(r[p](g))}catch(w){f(s[0][3],w)}}function l(p){p.value instanceof Wa?Promise.resolve(p.value.v).then(c,h):f(s[0][2],p)}function c(p){a("next",p)}function h(p){a("throw",p)}function f(p,g){p(g),s.shift(),s.length&&a(s[0][0],s[0][1])}}/**
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
 */const uw=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function q4(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=X4(e),[r,i]=n.tee();return{stream:Y4(r),response:Q4(i)}}async function Q4(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return ny(J4(e));e.push(i)}}function Y4(t){return G4(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield Wa(n.read());if(i)break;yield yield Wa(ny(r))}})}function X4(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:a})=>{if(a){if(i.trim()){r.error(new $a("Failed to parse stream"));return}r.close();return}i+=o;let l=i.match(uw),c;for(;l;){try{c=JSON.parse(l[1])}catch{r.error(new $a(`Error parsing JSON response: "${l[1]}"`));return}r.enqueue(c),i=i.substring(l[0].length),l=i.match(uw)}return s()})}}})}function J4(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t)if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[{text:""}]});for(const o of i.content.parts)o.text&&(n.candidates[s].content.parts[0].text+=o.text)}}return n}/**
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
 */async function OP(t,e,n,r){const i=new pl(e,Oi.STREAM_GENERATE_CONTENT,t,!0),s=await ml(i,JSON.stringify(n),r);return q4(s)}async function LP(t,e,n,r){const i=new pl(e,Oi.GENERATE_CONTENT,t,!1),o=await(await ml(i,JSON.stringify(n),r)).json();return{response:ny(o)}}/**
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
 */function la(t,e){let n=[];if(typeof t=="string")n=[{text:t}];else for(const r of t)typeof r=="string"?n.push({text:r}):n.push(r);return{role:e,parts:n}}function zd(t){return t.contents?t:{contents:[la(t,"user")]}}function Z4(t){return typeof t=="string"||Array.isArray(t)?{content:la(t,"user")}:t}/**
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
 */const cw="SILENT_ERROR";class eB{constructor(e,n,r,i){this.model=n,this.params=r,this.requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(this._history=r.history.map(s=>{if(!s.role)throw new Error("Missing role for history item: "+JSON.stringify(s));return la(s.parts,s.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var n,r;await this._sendPromise;const i=la(e,"user"),s={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,contents:[...this._history,i]};let o;return this._sendPromise=this._sendPromise.then(()=>LP(this._apiKey,this.model,s,this.requestOptions)).then(a=>{var l;if(a.response.candidates&&a.response.candidates.length>0){this._history.push(i);const c=Object.assign({parts:[],role:"model"},(l=a.response.candidates)===null||l===void 0?void 0:l[0].content);this._history.push(c)}else{const c=Cc(a.response);c&&console.warn(`sendMessage() was unsuccessful. ${c}. Inspect response object for details.`)}o=a}),await this._sendPromise,o}async sendMessageStream(e){var n,r;await this._sendPromise;const i=la(e,"user"),s={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(r=this.params)===null||r===void 0?void 0:r.generationConfig,contents:[...this._history,i]},o=OP(this._apiKey,this.model,s,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>o).catch(a=>{throw new Error(cw)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){this._history.push(i);const l=Object.assign({},a.candidates[0].content);l.role||(l.role="model"),this._history.push(l)}else{const l=Cc(a);l&&console.warn(`sendMessageStream() was unsuccessful. ${l}. Inspect response object for details.`)}}).catch(a=>{a.message!==cw&&console.error(a)}),o}}/**
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
 */async function tB(t,e,n,r){const i=new pl(e,Oi.COUNT_TOKENS,t,!1);return(await ml(i,JSON.stringify(Object.assign(Object.assign({},n),{model:e})),r)).json()}/**
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
 */async function nB(t,e,n,r){const i=new pl(e,Oi.EMBED_CONTENT,t,!1);return(await ml(i,JSON.stringify(n),r)).json()}async function rB(t,e,n,r){const i=new pl(e,Oi.BATCH_EMBED_CONTENTS,t,!1),s=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await ml(i,JSON.stringify({requests:s}),r)).json()}/**
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
 */class iB{constructor(e,n,r){this.apiKey=e,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.requestOptions=r||{}}async generateContent(e){const n=zd(e);return LP(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}async generateContentStream(e){const n=zd(e);return OP(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}startChat(e){return new eB(this.apiKey,this.model,e,this.requestOptions)}async countTokens(e){const n=zd(e);return tB(this.apiKey,this.model,n)}async embedContent(e){const n=Z4(e);return nB(this.apiKey,this.model,n)}async batchEmbedContents(e){return rB(this.apiKey,this.model,e,this.requestOptions)}}/**
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
 */class sB{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new $a("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new iB(this.apiKey,e,n)}}const oB=new sB("AIzaSyA1QiJDplhGt2rfIDMhaBm6_u0Avjfk0Co"),aB=(t="gemini-1.5-flash")=>oB.getGenerativeModel({model:t});class lB{static async enhanceStudyDescription(e,n){try{if(!n||n.trim().length===0)throw new _e(ae.INVALID_INPUT,"설명을 먼저 입력해주세요.");const r=aB(),i=this.buildEnhancementPrompt(e,n),a=(await(await r.generateContent(i)).response).text().trim();if(!a)throw new _e(ae.UNKNOWN_ERROR,"AI 응답이 비어있습니다.");return a}catch(r){throw r instanceof _e?r:(console.error("AI Enhancement Error:",r),new _e(ae.UNKNOWN_ERROR,"AI 설명 개선에 실패했습니다.",r))}}static buildEnhancementPrompt(e,n){return`당신은 스터디 홍보 전문가입니다. 다음 스터디 설명을 더 매력적이고 구체적으로 개선해주세요.
결과는 마크다운 형식을 사용하지 말고 순수 텍스트로만 제공해주세요.

스터디 제목: ${e}
현재 설명: ${n}`}}function MP({message:t,className:e=""}){return t?R.jsxs("div",{className:`error-message ${e}`,children:[R.jsx(ZA,{size:18}),t]}):null}const uB=()=>{const{currentUser:t,userData:e}=zi(),n=Fi(),{canCreate:r,remainingSlots:i,loading:s}=o2(t==null?void 0:t.uid),[o,a]=N.useState({title:"",category:F0[0],maxParticipants:5,description:""}),[l,c]=N.useState(!1),[h,f]=N.useState(!1),[p,g]=N.useState("");if(s)return R.jsx("div",{className:"loading-state",children:"권한 확인 중..."});const w=E=>{const{name:_,value:S}=E.target;a(D=>({...D,[_]:S}))},T=async()=>{g(""),f(!0);try{const E=await lB.enhanceStudyDescription(o.title,o.description);a(_=>({..._,description:E}))}catch(E){const{message:_}=Cs(E);g(_)}finally{f(!1)}},P=async E=>{E.preventDefault(),g(""),c(!0);try{await ph.createStudyGroup(o,t.uid,e.displayName),n("/")}catch(_){const{message:S}=Cs(_);g(S)}finally{c(!1)}};return r?R.jsxs("div",{className:"container create-study-page",children:[R.jsxs(Wn.div,{className:"form-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[R.jsxs("div",{className:"form-header",children:[R.jsx("h1",{children:"새로운 스터디 생성"}),R.jsx("p",{children:"당신의 지식을 나누고 함께 성장할 멤버를 모집하세요."}),R.jsxs("div",{className:"count-badge",children:[Ar-i," / ",Ar," 운영 중"]})]}),R.jsx(MP,{message:p}),R.jsxs("form",{onSubmit:P,className:"study-form",children:[R.jsxs("div",{className:"form-row",children:[R.jsxs("div",{className:"input-group flex-2",children:[R.jsx("label",{children:"스터디 제목"}),R.jsx("input",{type:"text",name:"title",className:"input-field",value:o.title,onChange:w,required:!0,placeholder:"예: 리액트 마스터 클래스"})]}),R.jsxs("div",{className:"input-group flex-1",children:[R.jsx("label",{children:"카테고리"}),R.jsx("select",{name:"category",className:"input-field",value:o.category,onChange:w,children:F0.map(E=>R.jsx("option",{value:E,children:E},E))})]}),R.jsxs("div",{className:"input-group flex-1",children:[R.jsx("label",{children:"최대 인원"}),R.jsx("input",{type:"number",name:"maxParticipants",className:"input-field",value:o.maxParticipants,onChange:w,min:"2",max:"50",required:!0})]})]}),R.jsxs("div",{className:"input-group",children:[R.jsxs("div",{className:"label-row",children:[R.jsx("label",{children:"스터디 상세 설명"}),R.jsx("button",{type:"button",className:"ai-btn",onClick:T,disabled:h,children:h?"AI 분석 중...":R.jsxs(R.Fragment,{children:[R.jsx(ZM,{size:14})," AI 설명 개선"]})})]}),R.jsx("textarea",{name:"description",className:"input-field textarea-field",value:o.description,onChange:w,required:!0,rows:"8",placeholder:"스터디의 목적, 진행 방식, 시간, 장소 등을 자세히 적어주세요."})]}),R.jsxs("div",{className:"form-actions",children:[R.jsx(Si,{variant:"outline",onClick:()=>n(-1),children:"취소"}),R.jsx(Si,{variant:"primary",type:"submit",disabled:l,children:l?"생성 중...":"스터디 생성하기"})]})]})]}),R.jsx("style",{jsx:"true",children:`
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
      `})]}):R.jsx("div",{className:"container create-study-page",children:R.jsxs("div",{className:"limit-reached",children:[R.jsx(ZA,{size:48,color:"#dc2626"}),R.jsx("h1",{children:"스터디 생성 한도 초과"}),R.jsxs("p",{children:["모임장은 최대 ",Ar,"개의 스터디만 운영할 수 있습니다. 기존 스터디를 종료한 후 다시 시도해주세요."]}),R.jsx(Si,{variant:"outline",onClick:()=>n("/"),children:"홈으로 돌아가기"})]})})};function cB(t){const[e,n]=N.useState([]),[r,i]=N.useState(!0),[s,o]=N.useState(null);return N.useEffect(()=>{if(!t){n([]),i(!1);return}return i(!0),o(null),dn.subscribeToUserApplications(t,l=>{n(l),i(!1)})},[t]),{applications:e,loading:r,error:s}}function hB(t){const[e,n]=N.useState([]),[r,i]=N.useState(!0),[s,o]=N.useState(null);return N.useEffect(()=>{if(!t){n([]),i(!1);return}return i(!0),o(null),dn.subscribeToStudyGroupApplications(t,l=>{n(l),i(!1)})},[t]),{applications:e,loading:r,error:s}}const dB="witme_";function fB(t,e){if(t.length===0)return!1;const n=["Name","Email","Applied At"],r=t.map(l=>[l.name,l.email,new Date(l.appliedAt).toLocaleDateString()]),i=[n.join(","),...r.map(l=>l.join(","))].join(`
`),s=new Blob(["\uFEFF"+i],{type:"text/csv;charset=utf-8;"}),o=URL.createObjectURL(s),a=document.createElement("a");a.setAttribute("href",o),a.setAttribute("download",`${dB}${e}_participants.csv`),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a)}function hw({status:t,showIcon:e=!0,className:n=""}){const i={[wn.PENDING]:{icon:GM,label:"대기 중",cssClass:"pending"},[wn.APPROVED]:{icon:tR,label:"승인됨",cssClass:"approved"},[wn.REJECTED]:{icon:iR,label:"거절됨",cssClass:"rejected"}}[t];if(!i)return null;const s=i.icon;return R.jsxs("span",{className:`status-badge ${i.cssClass} ${n}`,children:[e&&R.jsx(s,{size:14}),i.label]})}const pB=()=>{const{currentUser:t,userData:e}=zi();useNavigate();const{studies:n}=i2(t==null?void 0:t.uid),{applications:r}=cB(t==null?void 0:t.uid),[i,s]=N.useState(null),{applications:o}=hB(i==null?void 0:i.id),[a,l]=N.useState(!1),[c,h]=N.useState(""),f=async w=>{h(""),l(!0);try{await Pp.approveApplication(w)}catch(T){const{message:P}=Cs(T);h(P)}finally{l(!1)}},p=async w=>{h(""),l(!0);try{await Pp.rejectApplication(w)}catch(T){const{message:P}=Cs(T);h(P)}finally{l(!1)}},g=async w=>{h("");try{const T=await ph.getParticipantListForExport(w.id);if(T.length===0){h("내보낼 승인된 참가자가 없습니다.");return}fB(T,w.title)}catch(T){const{message:P}=Cs(T);h(P)}};return R.jsxs("div",{className:"container dashboard-page",children:[R.jsxs("header",{className:"dashboard-header",children:[R.jsx("h1",{children:"나의 대시보드"}),R.jsxs("p",{children:[e==null?void 0:e.displayName," 님, 환영합니다."]})]}),R.jsx("div",{style:{marginBottom:"2rem"},children:R.jsx(MP,{message:c})}),R.jsxs("div",{className:"dashboard-grid",children:[R.jsxs("div",{className:"dashboard-section",children:[R.jsxs("div",{className:"section-title",children:[R.jsx(XM,{size:20}),R.jsx("h2",{children:"내가 운영하는 스터디"})]}),n.length===0?R.jsx("div",{className:"empty-panel",children:"운영 중인 스터디가 없습니다."}):R.jsx("div",{className:"card-list",children:n.map(w=>R.jsxs("div",{className:`manage-card ${(i==null?void 0:i.id)===w.id?"active":""}`,onClick:()=>s((i==null?void 0:i.id)===w.id?null:w),children:[R.jsxs("div",{className:"card-header",children:[R.jsx("h3",{children:w.title}),(i==null?void 0:i.id)===w.id?R.jsx(KM,{size:20}):R.jsx(HM,{size:20})]}),R.jsx(h2,{children:(i==null?void 0:i.id)===w.id&&R.jsxs(Wn.div,{className:"applicant-list",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},children:[R.jsx("div",{className:"applicant-actions",children:R.jsxs(Si,{variant:"outline",size:"sm",onClick:T=>{T.stopPropagation(),g(w)},children:[R.jsx(qM,{size:14})," 명단 다운로드 (CSV)"]})}),o.length===0?R.jsx("div",{className:"no-applicants",children:"신청자가 아직 없습니다."}):o.map(T=>R.jsxs("div",{className:"applicant-item",children:[R.jsxs("div",{className:"app-user-info",children:[R.jsx("span",{className:"app-name",children:T.userName}),R.jsx("span",{className:"app-email",children:T.userEmail})]}),R.jsx("div",{className:"app-status-actions",children:T.status==="pending"?R.jsxs(R.Fragment,{children:[R.jsx("button",{className:"status-btn approve",onClick:P=>{P.stopPropagation(),f(T.id)},disabled:a,children:R.jsx(tR,{size:18})}),R.jsx("button",{className:"status-btn reject",onClick:P=>{P.stopPropagation(),p(T.id)},disabled:a,children:R.jsx(iR,{size:18})})]}):R.jsx(hw,{status:T.status})})]},T.id))]})})]},w.id))})]}),R.jsxs("div",{className:"dashboard-section",children:[R.jsxs("div",{className:"section-title",children:[R.jsx(e2,{size:20}),R.jsx("h2",{children:"나의 신청 현황"})]}),r.length===0?R.jsx("div",{className:"empty-panel",children:"신청한 스터디가 없습니다."}):R.jsx("div",{className:"card-list",children:r.map(w=>R.jsxs("div",{className:"app-card",children:[R.jsxs("div",{className:"app-card-content",children:[R.jsx("h4",{children:w.studyTitle}),R.jsxs("span",{className:"app-date",children:[new Date(w.appliedAt).toLocaleDateString()," 신청"]})]}),R.jsx(hw,{status:w.status})]},w.id))})]})]}),R.jsx("style",{jsx:"true",children:`
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
      `})]})};function mB(){return R.jsx($k,{children:R.jsx(jM,{children:R.jsxs("div",{className:"app",children:[R.jsx(t2,{}),R.jsx("main",{children:R.jsxs(Lk,{children:[R.jsx(ui,{path:"/",element:R.jsx(O4,{})}),R.jsx(ui,{path:"/login",element:R.jsx(L4,{})}),R.jsx(ui,{path:"/register",element:R.jsx(M4,{})}),R.jsx(ui,{path:"/study/:id",element:R.jsx(F4,{})}),R.jsx(ui,{path:"/create",element:R.jsx(B0,{requiredRole:"organizer",children:R.jsx(uB,{})})}),R.jsx(ui,{path:"/dashboard",element:R.jsx(B0,{children:R.jsx(pB,{})})})]})})]})})})}$d.createRoot(document.getElementById("root")).render(R.jsx(Tw.StrictMode,{children:R.jsx(mB,{})}));
