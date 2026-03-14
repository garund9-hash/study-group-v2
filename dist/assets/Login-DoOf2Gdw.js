import{j as e,m as h}from"./ui-Bk9tGWuW.js";import{r as a,u as x,L as g}from"./vendor-C-oB3Ezu.js";import{u as b}from"./index-BFhg1unC.js";import"./firebase-isbCQqyt.js";const f={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"}},k=()=>{const[r,c]=a.useState(""),[s,m]=a.useState(""),[i,n]=a.useState(""),[o,l]=a.useState(!1),{login:d}=b(),u=x(),p=async t=>{t.preventDefault();try{n(""),l(!0),await d(r,s),u("/")}catch{n("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.")}finally{l(!1)}};return e.jsxs("div",{className:"auth-page",children:[e.jsxs(h.div,{className:"auth-card",...f,children:[e.jsx("h1",{className:"auth-title",children:"Welcome Back"}),e.jsx("p",{className:"auth-subtitle",children:"Wit.me에서 당신의 스터디 여정을 계속하세요."}),i&&e.jsx("div",{className:"auth-error",children:i}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{className:"input-group",children:[e.jsx("label",{className:"input-label",children:"이메일"}),e.jsx("input",{type:"email",className:"input-field",value:r,onChange:t=>c(t.target.value),required:!0,placeholder:"example@wit.me"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{className:"input-label",children:"비밀번호"}),e.jsx("input",{type:"password",className:"input-field",value:s,onChange:t=>m(t.target.value),required:!0,placeholder:"••••••••"})]}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:o,children:o?"로그인 중...":"로그인"})]}),e.jsxs("p",{className:"auth-footer",children:["계정이 없으신가요? ",e.jsx(g,{to:"/register",children:"회원가입"})]})]}),e.jsx("style",{jsx:"true",children:`
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
      `})]})};export{k as default};
