import{c as j,r as n,b as L,d as I,u as S,j as e,L as d,M as $,E}from"./index-Baf2cdGO.js";import{m as x}from"./proxy-HtNcpCG-.js";import{A as b}from"./index-DkNG5lM_.js";import{C as z}from"./chevron-up-CjItRmBv.js";import{C as M}from"./chevron-down-CmzQzLAd.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=j("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=j("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),q=()=>{const[o,H]=n.useState({title:"",message:"",onConfirm:null}),[f,u]=n.useState(!1),[l,N]=n.useState(),[c,h]=n.useState([]),{isLoading:r,error:p,sendRequest:g}=L(),m=I().classId,y=S();n.useEffect(()=>{m&&(async()=>{const a=`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/attendances/class/${m}`;try{const s=await g(a);N(s)}catch{}})()},[m,g]);const C=t=>{h(a=>a.includes(t)?a.filter(s=>s!==t):[...a,t])},v=t=>{console.log("edit attendance",t),y(`/attendance/history/class/edit-confirmation/${t}`)},w=()=>{h([])},i=l==null?void 0:l.reduce((t,a)=>{const s=new Date(a.forDate).toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return t[s]=t[s]||[],t[s].push(a),t},{});console.log(l),console.log(i);const D=i?Object.keys(i).length:0,k=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{u(!1)},className:`${o.onConfirm?"btn-danger-outline":"button-primary mt-0 "} ${r?"opacity-50 cursor-not-allowed":""}`,disabled:r,children:r?e.jsx(d,{}):o.onConfirm?"Batal":"Tutup"}),o.onConfirm&&e.jsx("button",{onClick:o.onConfirm,className:`button-primary mt-0 ${r?"opacity-50 cursor-not-allowed":""}`,children:r?e.jsx(d,{}):"Ya"})]});return e.jsxs("div",{className:"p-4 space-y-4",children:[r&&!l&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(d,{size:32})}),e.jsxs($,{isOpen:f,onClose:()=>u(!1),title:o.title,footer:e.jsx(k,{}),children:[r&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(d,{size:32})}),!r&&o.message]}),p&&e.jsx(E,{error:p,onClear:()=>setError(null)}),c.length>1&&D>1&&e.jsxs(x.button,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"flex items-center gap-2 px-4 py-2 border border-gray-300 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors",onClick:w,children:[e.jsx(P,{size:16}),"Collapse All"]}),e.jsx(b,{children:i&&Object.entries(i).map(([t,a])=>e.jsxs(x.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"border shadow-sm rounded-full",children:[e.jsxs(x.button,{onClick:()=>C(t),className:`w-full px-3 py-2 flex justify-between items-center bg-blue-100 hover:bg-blue-200 transition-colors ${c.includes(t)?"rounded-t-md":"rounded-full"}`,children:[e.jsx("span",{className:"font-medium",children:t}),e.jsx("div",{className:"flex items-center gap-2",children:c.includes(t)?e.jsx(z,{size:16}):e.jsx(M,{size:16})})]}),e.jsx(b,{children:c.includes(t)&&e.jsx(x.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden bg-white",children:e.jsxs("table",{className:"w-full table-auto border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-white",children:[e.jsx("th",{className:"border-t border-gray-300 p-2 text-left text-xs text-gray-500",children:"Nama"}),e.jsx("th",{className:"border-t border-gray-300 p-2 text-left text-xs text-gray-500",children:"Status"}),e.jsx("th",{className:"border-t border-gray-300 p-2 text-left text-xs text-gray-500",children:"Waktu"}),e.jsx("th",{className:"border-t border-gray-300 p-2 text-left text-xs text-gray-500",children:"Temuan"}),e.jsx("th",{className:"border-t border-gray-300 text-left text-xs text-gray-500"})]})}),e.jsx("tbody",{children:a.map(s=>e.jsxs("tr",{onClick:()=>y(`/attendance/history/class/${l[0].classId}/${s._id}`),className:"bg-white hover:bg-gray-100",children:[e.jsx("td",{className:"border-t border-gray-300 p-2 text-xs",children:s.studentId.name}),e.jsx("td",{className:"border-t border-gray-300 p-2 text-xs",children:s.status}),e.jsx("td",{className:"border-t border-gray-300 p-2 text-xs",children:new Date(s.timestamp).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})}),e.jsx("td",{className:"border-t border-gray-300 p-2 text-xs",children:Object.values(s==null?void 0:s.violations).filter(A=>A===!0).length||"0"}),new Date().toLocaleDateString("en-CA")!==new Date(s.forDate).toLocaleDateString("en-CA")&&e.jsx("td",{className:"border-t border-gray-300 text-xs flex",children:e.jsx("button",{onClick:()=>v(s._id),className:"p-1 rounded-full active:bg-gray-200 text-blue-500 active:text-blue-700 transition duration-300",children:e.jsx(O,{size:16})})})]},s._id))})]})})})]},t))})]})};export{q as default};
