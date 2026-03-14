import{X as j,f as v,g as S,j as e,h as w,i as z,k,l as L,m as P,D as R,n as D}from"./ui-Bk9tGWuW.js";import{r as p,c as T}from"./vendor-C-oB3Ezu.js";import{b as g,u as F}from"./index-BFhg1unC.js";import{c as y,d as B,S as _,h as x}from"./useStudyGroups-DqL2X0QF.js";import{A as b}from"./ApplicationService-BrnaWWbc.js";import{B as $}from"./Button-UGImeYYt.js";import{E as O}from"./ErrorMessage-DeiWMH7q.js";import"./firebase-isbCQqyt.js";function V(s){const[c,n]=p.useState([]),[m,a]=p.useState(!0),[o,l]=p.useState(null);return p.useEffect(()=>{if(!s){n([]),a(!1);return}return a(!0),l(null),y.subscribeToUserApplications(s,r=>{n(r),a(!1)})},[s]),{applications:c,loading:m,error:o}}function G(s){const[c,n]=p.useState([]),[m,a]=p.useState(!0),[o,l]=p.useState(null);return p.useEffect(()=>{if(!s){n([]),a(!1);return}return a(!0),l(null),y.subscribeToStudyGroupApplications(s,r=>{n(r),a(!1)})},[s]),{applications:c,loading:m,error:o}}const M="witme_";function U(s,c){if(s.length===0)return!1;const n=["Name","Email","Applied At"],m=s.map(r=>[r.name,r.email,new Date(r.appliedAt).toLocaleDateString()]),a=[n.join(","),...m.map(r=>r.join(","))].join(`
`),o=new Blob(["\uFEFF"+a],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(o),d=document.createElement("a");d.setAttribute("href",l),d.setAttribute("download",`${M}${c}_participants.csv`),d.style.visibility="hidden",document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(l)}const f=T.memo(function({status:c,showIcon:n=!0,className:m=""}){const o={[g.PENDING]:{icon:S,label:"대기 중",cssClass:"pending"},[g.APPROVED]:{icon:v,label:"승인됨",cssClass:"approved"},[g.REJECTED]:{icon:j,label:"거절됨",cssClass:"rejected"}}[c];if(!o)return null;const l=o.icon;return e.jsxs("span",{className:`status-badge ${o.cssClass} ${m}`,children:[n&&e.jsx(l,{size:14}),o.label]})}),X={initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0}},Z=()=>{const{currentUser:s,userData:c}=F(),{studies:n}=B(s==null?void 0:s.uid),{applications:m}=V(s==null?void 0:s.uid),[a,o]=p.useState(null),{applications:l}=G(a==null?void 0:a.id),[d,r]=p.useState(!1),[N,h]=p.useState(""),A=async t=>{h(""),r(!0);try{await b.approveApplication(t,s.uid)}catch(i){const{message:u}=x(i);h(u)}finally{r(!1)}},C=async t=>{h(""),r(!0);try{await b.rejectApplication(t,s.uid)}catch(i){const{message:u}=x(i);h(u)}finally{r(!1)}},E=async t=>{if(h(""),t.organizerId!==(s==null?void 0:s.uid)){h("권한이 없습니다.");return}try{const i=await _.getParticipantListForExport(t.id);if(i.length===0){h("내보낼 승인된 참가자가 없습니다.");return}U(i,t.title)}catch(i){const{message:u}=x(i);h(u)}};return e.jsxs("div",{className:"container dashboard-page",children:[e.jsxs("header",{className:"dashboard-header",children:[e.jsx("h1",{children:"나의 대시보드"}),e.jsxs("p",{children:[c==null?void 0:c.displayName," 님, 환영합니다."]})]}),e.jsx("div",{style:{marginBottom:"2rem"},children:e.jsx(O,{message:N})}),e.jsxs("div",{className:"dashboard-grid",children:[e.jsxs("div",{className:"dashboard-section",children:[e.jsxs("div",{className:"section-title",children:[e.jsx(w,{size:20}),e.jsx("h2",{children:"내가 운영하는 스터디"})]}),n.length===0?e.jsx("div",{className:"empty-panel",children:"운영 중인 스터디가 없습니다."}):e.jsx("div",{className:"card-list",children:n.map(t=>e.jsxs("div",{className:`manage-card ${(a==null?void 0:a.id)===t.id?"active":""}`,onClick:()=>o((a==null?void 0:a.id)===t.id?null:t),children:[e.jsxs("div",{className:"card-header",children:[e.jsx("h3",{children:t.title}),(a==null?void 0:a.id)===t.id?e.jsx(z,{size:20}):e.jsx(k,{size:20})]}),e.jsx(L,{children:(a==null?void 0:a.id)===t.id&&e.jsxs(P.div,{className:"applicant-list",...X,children:[e.jsx("div",{className:"applicant-actions",children:e.jsxs($,{variant:"outline",size:"sm",onClick:i=>{i.stopPropagation(),E(t)},children:[e.jsx(R,{size:14})," 명단 다운로드 (CSV)"]})}),l.length===0?e.jsx("div",{className:"no-applicants",children:"신청자가 아직 없습니다."}):l.map(i=>e.jsxs("div",{className:"applicant-item",children:[e.jsxs("div",{className:"app-user-info",children:[e.jsx("span",{className:"app-name",children:i.userName}),e.jsx("span",{className:"app-email",children:i.userEmail})]}),e.jsx("div",{className:"app-status-actions",children:i.status==="pending"?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"status-btn approve",onClick:u=>{u.stopPropagation(),A(i.id)},disabled:d,children:e.jsx(v,{size:18})}),e.jsx("button",{className:"status-btn reject",onClick:u=>{u.stopPropagation(),C(i.id)},disabled:d,children:e.jsx(j,{size:18})})]}):e.jsx(f,{status:i.status})})]},i.id))]})})]},t.id))})]}),e.jsxs("div",{className:"dashboard-section",children:[e.jsxs("div",{className:"section-title",children:[e.jsx(D,{size:20}),e.jsx("h2",{children:"나의 신청 현황"})]}),m.length===0?e.jsx("div",{className:"empty-panel",children:"신청한 스터디가 없습니다."}):e.jsx("div",{className:"card-list",children:m.map(t=>e.jsxs("div",{className:"app-card",children:[e.jsxs("div",{className:"app-card-content",children:[e.jsx("h4",{children:t.studyTitle}),e.jsxs("span",{className:"app-date",children:[new Date(t.appliedAt).toLocaleDateString()," 신청"]})]}),e.jsx(f,{status:t.status})]},t.id))})]})]}),e.jsx("style",{jsx:"true",children:`
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
      `})]})};export{Z as default};
