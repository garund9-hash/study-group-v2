import{j as a,e as W,m as X,S as Q}from"./ui-Bk9tGWuW.js";import{u as Z,r as x}from"./vendor-C-oB3Ezu.js";import{E as T,u as ee,S as G,a as w}from"./index-BFhg1unC.js";import{A as O,b as te,S as ne,h as P}from"./useStudyGroups-DqL2X0QF.js";import{B as j}from"./Button-UGImeYYt.js";import{E as se}from"./ErrorMessage-DeiWMH7q.js";import"./firebase-isbCQqyt.js";/**
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
 */var D;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(D||(D={}));var K;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(K||(K={}));var H;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(H||(H={}));var U;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(U||(U={}));var A;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(A||(A={}));var F;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(F||(F={}));/**
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
 */class y extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class B extends y{constructor(n,t){super(n),this.response=t}}/**
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
 */const re="https://generativelanguage.googleapis.com",ie="v1",ae="0.2.1",oe="genai-js";var g;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(g||(g={}));class N{constructor(n,t,s,r){this.model=n,this.task=t,this.apiKey=s,this.stream=r}toString(){let n=`${re}/${ie}/${this.model}:${this.task}`;return this.stream&&(n+="?alt=sse"),n}}function ce(){return`${oe}/${ae}`}async function R(e,n,t){let s;try{if(s=await fetch(e.toString(),Object.assign(Object.assign({},de(t)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":ce(),"x-goog-api-key":e.apiKey},body:n})),!s.ok){let r="";try{const i=await s.json();r=i.error.message,i.error.details&&(r+=` ${JSON.stringify(i.error.details)}`)}catch{}throw new Error(`[${s.status} ${s.statusText}] ${r}`)}}catch(r){const i=new y(`Error fetching from ${e.toString()}: ${r.message}`);throw i.stack=r.stack,i}return s}function de(e){const n={};if((e==null?void 0:e.timeout)>=0){const t=new AbortController,s=t.signal;setTimeout(()=>t.abort(),e.timeout),n.signal=s}return n}/**
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
 */function L(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),$(e.candidates[0]))throw new B(`${v(e)}`,e);return le(e)}else if(e.promptFeedback)throw new B(`Text not available. ${v(e)}`,e);return""},e}function le(e){var n,t,s,r;return!((r=(s=(t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0?void 0:t.parts)===null||s===void 0?void 0:s[0])===null||r===void 0)&&r.text?e.candidates[0].content.parts[0].text:""}const ue=[A.RECITATION,A.SAFETY];function $(e){return!!e.finishReason&&ue.includes(e.finishReason)}function v(e){var n,t,s;let r="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)r+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(r+=` due to ${e.promptFeedback.blockReason}`),!((t=e.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(r+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];$(i)&&(r+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(r+=`: ${i.finishMessage}`))}return r}function C(e){return this instanceof C?(this.v=e,this):new C(e)}function he(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=t.apply(e,n||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(l){s[l]&&(r[l]=function(h){return new Promise(function(f,I){i.push([l,h,f,I])>1||o(l,h)})})}function o(l,h){try{d(s[l](h))}catch(f){_(i[0][3],f)}}function d(l){l.value instanceof C?Promise.resolve(l.value.v).then(u,E):_(i[0][2],l)}function u(l){o("next",l)}function E(l){o("throw",l)}function _(l,h){l(h),i.shift(),i.length&&o(i[0][0],i[0][1])}}/**
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
 */const Y=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function me(e){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=ge(n),[s,r]=t.tee();return{stream:pe(s),response:fe(r)}}async function fe(e){const n=[],t=e.getReader();for(;;){const{done:s,value:r}=await t.read();if(s)return L(Ee(n));n.push(r)}}function pe(e){return he(this,arguments,function*(){const t=e.getReader();for(;;){const{value:s,done:r}=yield C(t.read());if(r)break;yield yield C(L(s))}})}function ge(e){const n=e.getReader();return new ReadableStream({start(s){let r="";return i();function i(){return n.read().then(({value:c,done:o})=>{if(o){if(r.trim()){s.error(new y("Failed to parse stream"));return}s.close();return}r+=c;let d=r.match(Y),u;for(;d;){try{u=JSON.parse(d[1])}catch{s.error(new y(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(u),r=r.substring(d[0].length),d=r.match(Y)}return i()})}}})}function Ee(e){const n=e[e.length-1],t={promptFeedback:n==null?void 0:n.promptFeedback};for(const s of e)if(s.candidates)for(const r of s.candidates){const i=r.index;if(t.candidates||(t.candidates=[]),t.candidates[i]||(t.candidates[i]={index:r.index}),t.candidates[i].citationMetadata=r.citationMetadata,t.candidates[i].finishReason=r.finishReason,t.candidates[i].finishMessage=r.finishMessage,t.candidates[i].safetyRatings=r.safetyRatings,r.content&&r.content.parts){t.candidates[i].content||(t.candidates[i].content={role:r.content.role||"user",parts:[{text:""}]});for(const c of r.content.parts)c.text&&(t.candidates[i].content.parts[0].text+=c.text)}}return t}/**
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
 */async function q(e,n,t,s){const r=new N(n,g.STREAM_GENERATE_CONTENT,e,!0),i=await R(r,JSON.stringify(t),s);return me(i)}async function z(e,n,t,s){const r=new N(n,g.GENERATE_CONTENT,e,!1),c=await(await R(r,JSON.stringify(t),s)).json();return{response:L(c)}}/**
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
 */function S(e,n){let t=[];if(typeof e=="string")t=[{text:e}];else for(const s of e)typeof s=="string"?t.push({text:s}):t.push(s);return{role:n,parts:t}}function M(e){return e.contents?e:{contents:[S(e,"user")]}}function _e(e){return typeof e=="string"||Array.isArray(e)?{content:S(e,"user")}:e}/**
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
 */const k="SILENT_ERROR";class Se{constructor(n,t,s,r){this.model=t,this.params=s,this.requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,s!=null&&s.history&&(this._history=s.history.map(i=>{if(!i.role)throw new Error("Missing role for history item: "+JSON.stringify(i));return S(i.parts,i.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var t,s;await this._sendPromise;const r=S(n,"user"),i={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,contents:[...this._history,r]};let c;return this._sendPromise=this._sendPromise.then(()=>z(this._apiKey,this.model,i,this.requestOptions)).then(o=>{var d;if(o.response.candidates&&o.response.candidates.length>0){this._history.push(r);const u=Object.assign({parts:[],role:"model"},(d=o.response.candidates)===null||d===void 0?void 0:d[0].content);this._history.push(u)}else{const u=v(o.response);u&&console.warn(`sendMessage() was unsuccessful. ${u}. Inspect response object for details.`)}c=o}),await this._sendPromise,c}async sendMessageStream(n){var t,s;await this._sendPromise;const r=S(n,"user"),i={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,contents:[...this._history,r]},c=q(this._apiKey,this.model,i,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>c).catch(o=>{throw new Error(k)}).then(o=>o.response).then(o=>{if(o.candidates&&o.candidates.length>0){this._history.push(r);const d=Object.assign({},o.candidates[0].content);d.role||(d.role="model"),this._history.push(d)}else{const d=v(o);d&&console.warn(`sendMessageStream() was unsuccessful. ${d}. Inspect response object for details.`)}}).catch(o=>{o.message!==k&&console.error(o)}),c}}/**
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
 */async function ye(e,n,t,s){const r=new N(n,g.COUNT_TOKENS,e,!1);return(await R(r,JSON.stringify(Object.assign(Object.assign({},t),{model:n})),s)).json()}/**
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
 */async function Ce(e,n,t,s){const r=new N(n,g.EMBED_CONTENT,e,!1);return(await R(r,JSON.stringify(t),s)).json()}async function Ne(e,n,t,s){const r=new N(n,g.BATCH_EMBED_CONTENTS,e,!1),i=t.requests.map(o=>Object.assign(Object.assign({},o),{model:n}));return(await R(r,JSON.stringify({requests:i}),s)).json()}/**
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
 */class Re{constructor(n,t,s){this.apiKey=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.requestOptions=s||{}}async generateContent(n){const t=M(n);return z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}async generateContentStream(n){const t=M(n);return q(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}startChat(n){return new Se(this.apiKey,this.model,n,this.requestOptions)}async countTokens(n){const t=M(n);return ye(this.apiKey,this.model,t)}async embedContent(n){const t=_e(n);return Ce(this.apiKey,this.model,t)}async batchEmbedContents(n){return Ne(this.apiKey,this.model,n,this.requestOptions)}}/**
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
 */class xe{constructor(n){this.apiKey=n}getGenerativeModel(n,t){if(!n.model)throw new y("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Re(this.apiKey,n,t)}}const Oe=new xe("AIzaSyA1QiJDplhGt2rfIDMhaBm6_u0Avjfk0Co"),Ae=(e="gemini-1.5-flash")=>Oe.getGenerativeModel({model:e});class ve{static sanitizeForPrompt(n){return n.replace(/[<>]/g,"").replace(/\bignore\b.{0,50}\binstruction/gi,"[filtered]").substring(0,500)}static async enhanceStudyDescription(n,t){try{if(!t||t.trim().length===0)throw new O(T.INVALID_INPUT,"설명을 먼저 입력해주세요.");const s=Ae(),r=this.buildEnhancementPrompt(n,t),o=(await(await s.generateContent(r)).response).text().trim();if(!o)throw new O(T.UNKNOWN_ERROR,"AI 응답이 비어있습니다.");return o}catch(s){throw s instanceof O?s:new O(T.UNKNOWN_ERROR,"AI 설명 개선에 실패했습니다.",s)}}static buildEnhancementPrompt(n,t){const s=this.sanitizeForPrompt(n),r=this.sanitizeForPrompt(t);return`당신은 스터디 홍보 전문가입니다. 다음 스터디 설명을 더 매력적이고 구체적으로 개선해주세요.
결과는 마크다운 형식을 사용하지 말고 순수 텍스트로만 제공해주세요.

스터디 제목: ${s}
현재 설명: ${r}`}}const Ie={initial:{opacity:0,y:20},animate:{opacity:1,y:0}},Pe=()=>{const{currentUser:e,userData:n}=ee(),t=Z(),{canCreate:s,remainingSlots:r,loading:i}=te(e==null?void 0:e.uid),[c,o]=x.useState({title:"",category:G[0],maxParticipants:5,description:""}),[d,u]=x.useState(!1),[E,_]=x.useState(!1),[l,h]=x.useState("");if(i)return a.jsx("div",{className:"loading-state",children:"권한 확인 중..."});const f=m=>{const{name:p,value:b}=m.target;o(V=>({...V,[p]:b}))},I=async()=>{h(""),_(!0);try{const m=await ve.enhanceStudyDescription(c.title,c.description);o(p=>({...p,description:m}))}catch(m){const{message:p}=P(m);h(p)}finally{_(!1)}},J=async m=>{m.preventDefault(),h(""),u(!0);try{await ne.createStudyGroup(c,e.uid,n.displayName),t("/")}catch(p){const{message:b}=P(p);h(b)}finally{u(!1)}};return s?a.jsxs("div",{className:"container create-study-page",children:[a.jsxs(X.div,{className:"form-container",...Ie,children:[a.jsxs("div",{className:"form-header",children:[a.jsx("h1",{children:"새로운 스터디 생성"}),a.jsx("p",{children:"당신의 지식을 나누고 함께 성장할 멤버를 모집하세요."}),a.jsxs("div",{className:"count-badge",children:[w-r," / ",w," 운영 중"]})]}),a.jsx(se,{message:l}),a.jsxs("form",{onSubmit:J,className:"study-form",children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"input-group flex-2",children:[a.jsx("label",{children:"스터디 제목"}),a.jsx("input",{type:"text",name:"title",className:"input-field",value:c.title,onChange:f,required:!0,maxLength:100,placeholder:"예: 리액트 마스터 클래스"})]}),a.jsxs("div",{className:"input-group flex-1",children:[a.jsx("label",{children:"카테고리"}),a.jsx("select",{name:"category",className:"input-field",value:c.category,onChange:f,children:G.map(m=>a.jsx("option",{value:m,children:m},m))})]}),a.jsxs("div",{className:"input-group flex-1",children:[a.jsx("label",{children:"최대 인원"}),a.jsx("input",{type:"number",name:"maxParticipants",className:"input-field",value:c.maxParticipants,onChange:f,min:"2",max:"50",required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsxs("div",{className:"label-row",children:[a.jsx("label",{children:"스터디 상세 설명"}),a.jsx("button",{type:"button",className:"ai-btn",onClick:I,disabled:E,children:E?"AI 분석 중...":a.jsxs(a.Fragment,{children:[a.jsx(Q,{size:14})," AI 설명 개선"]})})]}),a.jsx("textarea",{name:"description",className:"input-field textarea-field",value:c.description,onChange:f,required:!0,rows:"8",maxLength:2e3,placeholder:"스터디의 목적, 진행 방식, 시간, 장소 등을 자세히 적어주세요."})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx(j,{variant:"outline",onClick:()=>t(-1),children:"취소"}),a.jsx(j,{variant:"primary",type:"submit",disabled:d,children:d?"생성 중...":"스터디 생성하기"})]})]})]}),a.jsx("style",{jsx:"true",children:`
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
      `})]}):a.jsx("div",{className:"container create-study-page",children:a.jsxs("div",{className:"limit-reached",children:[a.jsx(W,{size:48,color:"#dc2626"}),a.jsx("h1",{children:"스터디 생성 한도 초과"}),a.jsxs("p",{children:["모임장은 최대 ",w,"개의 스터디만 운영할 수 있습니다. 기존 스터디를 종료한 후 다시 시도해주세요."]}),a.jsx(j,{variant:"outline",onClick:()=>t("/"),children:"홈으로 돌아가기"})]})})};export{Pe as default};
