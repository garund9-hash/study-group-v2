import{j as e,m as b}from"./ui-Bk9tGWuW.js";import{r as a,u as f,L as y}from"./vendor-C-oB3Ezu.js";import{u as j,M as i}from"./index-BFhg1unC.js";import"./firebase-isbCQqyt.js";const v={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"}},E=()=>{const[n,d]=a.useState(""),[r,m]=a.useState(""),[o,p]=a.useState(""),[l,s]=a.useState(""),[c,u]=a.useState(!1),{signup:h}=j(),g=f(),x=async t=>{if(t.preventDefault(),r.length<i)return s(`비밀번호는 최소 ${i}자 이상이어야 합니다.`);try{s(""),u(!0),await h(n,r,o),g("/")}catch{s("회원가입에 실패했습니다. 이미 사용 중인 이메일일 수 있습니다.")}finally{u(!1)}};return e.jsxs("div",{className:"auth-page",children:[e.jsxs(b.div,{className:"auth-card",...v,children:[e.jsx("h1",{className:"auth-title",children:"Join Wit.me"}),e.jsx("p",{className:"auth-subtitle",children:"함께 성장하는 즐거움, 당신의 성장을 응원합니다."}),l&&e.jsx("div",{className:"auth-error",children:l}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"input-group",children:[e.jsx("label",{className:"input-label",children:"이름"}),e.jsx("input",{type:"text",className:"input-field",value:o,onChange:t=>p(t.target.value),required:!0,placeholder:"홍길동"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{className:"input-label",children:"이메일"}),e.jsx("input",{type:"email",className:"input-field",value:n,onChange:t=>d(t.target.value),required:!0,placeholder:"example@wit.me"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{className:"input-label",children:`비밀번호 (${i}자 이상)`}),e.jsx("input",{type:"password",className:"input-field",value:r,onChange:t=>m(t.target.value),required:!0,placeholder:"••••••••"})]}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:c,children:c?"처리 중...":"회원가입"})]}),e.jsxs("p",{className:"auth-footer",children:["이미 계정이 있으신가요? ",e.jsx(y,{to:"/login",children:"로그인"})]})]}),e.jsx("style",{jsx:"true",children:`
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
      `})]})};export{E as default};
