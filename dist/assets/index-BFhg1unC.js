const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CzjS-a1Y.js","assets/ui-Bk9tGWuW.js","assets/vendor-C-oB3Ezu.js","assets/useStudyGroups-DqL2X0QF.js","assets/firebase-isbCQqyt.js","assets/Login-DoOf2Gdw.js","assets/Register-C5DUcKjE.js","assets/StudyDetail-Cp9zltE8.js","assets/ApplicationService-BrnaWWbc.js","assets/Button-UGImeYYt.js","assets/CreateStudy-C4HuwPci.js","assets/ErrorMessage-DeiWMH7q.js","assets/Dashboard-oAmlpcjl.js"])))=>i.map(i=>d[i]);
import{j as e,P as U,L as C,U as w,a as z}from"./ui-Bk9tGWuW.js";import{a as k,r as o,N,u as V,L as v,B as W,R as B,b as E,c as F}from"./vendor-C-oB3Ezu.js";import{i as Y,g as G,a as K,o as M,c as H,s as q,d as D,b as X,e as Z,f as $}from"./firebase-isbCQqyt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();var _={},I=k;_.createRoot=I.createRoot,_.hydrateRoot=I.hydrateRoot;const J="modulepreload",Q=function(u){return"/"+u},O={},f=function(r,i,c){let t=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(i.map(d=>{if(d=Q(d),d in O)return;O[d]=!0;const p=d.endsWith(".css"),R=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${R}`))return;const a=document.createElement("link");if(a.rel=p?"stylesheet":J,p||(a.as="script"),a.crossOrigin="",a.href=d,l&&a.setAttribute("nonce",l),document.head.appendChild(a),p)return new Promise((m,g)=>{a.addEventListener("load",m),a.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return t.then(n=>{for(const l of n||[])l.status==="rejected"&&s(l.reason);return r().catch(s)})},ee={apiKey:"AIzaSyAGzT0ffrSwnJhBRpYxLv6kd5ubL299Vvo",authDomain:"study-group-v2.firebaseapp.com",projectId:"study-group-v2",storageBucket:"study-group-v2.firebasestorage.app",messagingSenderId:"487587122611",appId:"1:487587122611:web:ee4bc7375a203e973f8fc6",measurementId:"G-PB01CK0TFH"},L=Y(ee),x=G(L),b=K(L),Ee={STUDY_LIMIT_EXCEEDED:"STUDY_LIMIT_EXCEEDED",UNAUTHORIZED:"UNAUTHORIZED",NOT_FOUND:"NOT_FOUND",NETWORK_ERROR:"NETWORK_ERROR",ALREADY_APPLIED:"ALREADY_APPLIED",INVALID_INPUT:"INVALID_INPUT",PERMISSION_DENIED:"PERMISSION_DENIED",FORBIDDEN:"FORBIDDEN",UNKNOWN_ERROR:"UNKNOWN_ERROR"},fe={PENDING:"pending",APPROVED:"approved",REJECTED:"rejected",OPEN:"open",CLOSED:"closed"},ge=["프로그래밍","어학","디자인","취업","기타"],he=5,te={USER:"user"},ve=6,xe=100,A=o.createContext(),S="users",T=()=>o.useContext(A),re=({children:u})=>{const[r,i]=o.useState(null),[c,t]=o.useState(null),[s,n]=o.useState(!0);o.useEffect(()=>M(x,async m=>{if(m){const g=D(b,S,m.uid),h=await $(g);h.exists()&&t(h.data()),i(m)}else i(null),t(null);n(!1)}),[]);const l=o.useCallback(async(a,m,g)=>{const h=await H(x,a,m),j=h.user,y={uid:j.uid,email:a,displayName:g,role:te.USER,createdAt:new Date().toISOString()};return await q(D(b,S,j.uid),y),t(y),h},[]),d=o.useCallback((a,m)=>X(x,a,m),[]),p=o.useCallback(()=>Z(x),[]),R=o.useMemo(()=>({currentUser:r,userData:c,signup:l,login:d,logout:p}),[r,c,l,d,p]);return e.jsx(A.Provider,{value:R,children:!s&&u})},P=({children:u,requiredRole:r})=>{const{currentUser:i,userData:c}=T();return i?r&&(c==null?void 0:c.role)!==r?e.jsx(N,{to:"/",replace:!0}):u:e.jsx(N,{to:"/login",replace:!0})},se=()=>{const{currentUser:u,userData:r,logout:i}=T(),c=V(),t=async()=>{try{await i(),c("/login")}catch(s){console.error("Logout error:",s)}};return e.jsxs("nav",{className:"navbar",children:[e.jsxs("div",{className:"container nav-container",children:[e.jsx(v,{to:"/",className:"nav-logo",children:"Wit.me"}),e.jsx("div",{className:"nav-links",children:u?e.jsxs(e.Fragment,{children:[(r==null?void 0:r.role)==="organizer"&&e.jsxs(v,{to:"/create",className:"nav-link",children:[e.jsx(U,{size:18}),e.jsx("span",{children:"스터디 생성"})]}),e.jsxs(v,{to:"/dashboard",className:"nav-link",children:[e.jsx(C,{size:18}),e.jsx("span",{children:"대시보드"})]}),e.jsxs("div",{className:"nav-user",children:[e.jsx(w,{size:18}),e.jsx("span",{children:(r==null?void 0:r.displayName)||u.email})]}),e.jsx("button",{onClick:t,className:"nav-link nav-btn-logout",children:e.jsx(z,{size:18})})]}):e.jsxs(e.Fragment,{children:[e.jsx(v,{to:"/login",className:"nav-link",children:"로그인"}),e.jsx(v,{to:"/register",className:"btn btn-primary nav-btn-register",children:"회원가입"})]})})]}),e.jsx("style",{jsx:"true",children:`
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
      `})]})},ne=o.lazy(()=>f(()=>import("./Home-CzjS-a1Y.js"),__vite__mapDeps([0,1,2,3,4]))),oe=o.lazy(()=>f(()=>import("./Login-DoOf2Gdw.js"),__vite__mapDeps([5,1,2,4]))),ae=o.lazy(()=>f(()=>import("./Register-C5DUcKjE.js"),__vite__mapDeps([6,1,2,4]))),ie=o.lazy(()=>f(()=>import("./StudyDetail-Cp9zltE8.js"),__vite__mapDeps([7,1,2,3,4,8,9]))),ce=o.lazy(()=>f(()=>import("./CreateStudy-C4HuwPci.js"),__vite__mapDeps([10,1,2,3,4,9,11]))),le=o.lazy(()=>f(()=>import("./Dashboard-oAmlpcjl.js"),__vite__mapDeps([12,1,2,3,4,8,9,11])));function de(){return e.jsx(W,{children:e.jsx(re,{children:e.jsxs("div",{className:"app",children:[e.jsx(se,{}),e.jsx("main",{children:e.jsx(o.Suspense,{fallback:e.jsx("div",{className:"loading-state",children:"로딩 중..."}),children:e.jsxs(B,{children:[e.jsx(E,{path:"/",element:e.jsx(ne,{})}),e.jsx(E,{path:"/login",element:e.jsx(oe,{})}),e.jsx(E,{path:"/register",element:e.jsx(ae,{})}),e.jsx(E,{path:"/study/:id",element:e.jsx(ie,{})}),e.jsx(E,{path:"/create",element:e.jsx(P,{requiredRole:"organizer",children:e.jsx(ce,{})})}),e.jsx(E,{path:"/dashboard",element:e.jsx(P,{children:e.jsx(le,{})})})]})})})]})})})}_.createRoot(document.getElementById("root")).render(e.jsx(F.StrictMode,{children:e.jsx(de,{})}));export{xe as D,Ee as E,ve as M,ge as S,he as a,fe as b,b as d,T as u};
