import{j as e,m as i,b as n,C as d,A as c}from"./ui-Bk9tGWuW.js";import{c as l,L as m}from"./vendor-C-oB3Ezu.js";import{u as p}from"./useStudyGroups-DqL2X0QF.js";import{D as s}from"./index-BFhg1unC.js";import"./firebase-isbCQqyt.js";const x=l.memo(function({category:t,className:r=""}){return e.jsx("span",{className:`category-tag ${r}`,children:t})}),g={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8}},h={initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:.8}},y={initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1}},N=()=>{const{studies:a,loading:t}=p();return t?e.jsx("div",{className:"loading-state",children:"스터디를 불러오는 중..."}):e.jsxs("div",{className:"home-page",children:[e.jsx("header",{className:"hero",children:e.jsxs("div",{className:"container",children:[e.jsxs(i.h1,{...g,children:["함께 배우고, 함께 성장하는 ",e.jsx("br",{}),e.jsx("span",{children:"Wit.me"})," 스터디 플랫폼"]}),e.jsx(i.p,{...h,children:"관심 있는 분야의 스터디를 찾거나 직접 만들어보세요."})]})}),e.jsxs("section",{className:"study-list container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"최근 등록된 스터디"}),e.jsxs("div",{className:"filter-hint",children:["총 ",a.length,"개의 스터디"]})]}),a.length===0?e.jsx("div",{className:"empty-state",children:"아직 등록된 스터디가 없습니다. 첫 스터디의 주인공이 되어보세요!"}):e.jsx("div",{className:"study-grid",children:a.map((r,o)=>e.jsxs(i.div,{className:"study-card",...y,transition:{delay:o*.1,duration:.5},children:[e.jsx(x,{category:r.category,className:"study-tag"}),e.jsx("h3",{className:"study-title",children:r.title}),e.jsx("p",{className:"study-desc",children:r.description.length>s?`${r.description.substring(0,s)}...`:r.description}),e.jsxs("div",{className:"study-info",children:[e.jsxs("div",{className:"info-item",children:[e.jsx(n,{size:16}),e.jsxs("span",{children:["정원 ",r.maxParticipants,"명"]})]}),e.jsxs("div",{className:"info-item",children:[e.jsx(d,{size:16}),e.jsx("span",{children:new Date(r.createdAt).toLocaleDateString()})]})]}),e.jsxs(m,{to:`/study/${r.id}`,className:"study-link",children:["상세보기 ",e.jsx(c,{size:16})]})]},r.id))})]}),e.jsx("style",{jsx:"true",children:`
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
      `})]})};export{N as default};
