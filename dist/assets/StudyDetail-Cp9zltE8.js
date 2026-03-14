import{j as e,c as j,m as p,U as N,C as z,b as k,d as w}from"./ui-Bk9tGWuW.js";import{d as A,u as S,r as o}from"./vendor-C-oB3Ezu.js";import{u as C}from"./index-BFhg1unC.js";import{a as B,h as D}from"./useStudyGroups-DqL2X0QF.js";import{A as E}from"./ApplicationService-BrnaWWbc.js";import{B as n}from"./Button-UGImeYYt.js";import"./firebase-isbCQqyt.js";const I={initial:{opacity:0,x:-20},animate:{opacity:1,x:0}},L={initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.2}},T=()=>{const{id:g}=A(),{currentUser:r,userData:x}=C(),s=S(),{study:a,loading:u}=B(g),[l,d]=o.useState(!1),[h,f]=o.useState(!1),[c,m]=o.useState(""),y=async()=>{if(!r)return s("/login");d(!0),m("");try{await E.applyToStudyGroup(a,r.uid,x.displayName,r.email),f(!0)}catch(t){const{message:i}=D(t);m(i)}finally{d(!1)}};if(u)return e.jsx("div",{className:"loading-state",children:"로딩 중..."});if(!a)return null;const b=(r==null?void 0:r.uid)===a.organizerId,v=()=>r?b?e.jsx(n,{variant:"outline",fullWidth:!0,onClick:()=>s("/dashboard"),children:"참가자 관리하기"}):h?e.jsxs("div",{className:"applied-status",children:[e.jsx(w,{size:24}),e.jsx("span",{children:"신청 완료되었습니다."}),e.jsx("p",{children:"모임장의 승인을 기다리고 있습니다."})]}):e.jsx(n,{variant:"primary",fullWidth:!0,size:"lg",onClick:y,disabled:l,children:l?"신청 처리 중...":"스터디 참여 신청"}):e.jsx(n,{variant:"primary",fullWidth:!0,size:"lg",onClick:()=>s("/login"),children:"로그인하고 신청하기"});return e.jsxs("div",{className:"container study-detail-page",children:[e.jsxs("button",{onClick:()=>s(-1),className:"back-btn",children:[e.jsx(j,{size:18})," 목록으로 돌아가기"]}),e.jsxs("div",{className:"detail-layout",children:[e.jsxs(p.div,{className:"detail-content",...I,children:[e.jsxs("div",{className:"study-header",children:[e.jsx("span",{className:"category-tag",children:a.category}),e.jsx("h1",{children:a.title}),e.jsxs("div",{className:"meta-info",children:[e.jsxs("span",{className:"organizer-name",children:[e.jsx(N,{size:16})," ",a.organizerName]}),e.jsxs("span",{className:"created-date",children:[e.jsx(z,{size:16})," ",new Date(a.createdAt).toLocaleDateString()]})]})]}),e.jsxs("div",{className:"description-section",children:[e.jsx("h3",{children:"스터디 상세 소개"}),e.jsx("div",{className:"description-text",children:a.description.split(`
`).map((t,i)=>e.jsx("p",{children:t},i))})]})]}),e.jsx(p.div,{className:"detail-sidebar",...L,children:e.jsxs("div",{className:"sidebar-card",children:[e.jsxs("div",{className:"sidebar-info-group",children:[e.jsx("label",{children:"모집 인원"}),e.jsxs("div",{className:"sidebar-val",children:[e.jsx(k,{size:18})," ",a.maxParticipants,"명"]})]}),e.jsx("div",{className:"sidebar-divider"}),c&&e.jsx("div",{style:{marginBottom:"1rem"},className:"error-message",children:c}),v(),e.jsx("p",{className:"sidebar-hint",children:"* 승인 후에는 대시보드에서 상태를 확인하실 수 있습니다."})]})})]}),e.jsx("style",{jsx:"true",children:`
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
      `})]})};export{T as default};
