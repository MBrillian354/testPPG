import{c as k,r,b as P,u as M,A as O,j as e,E as z,M as H,L as y,T as N,e as v,y as V,F as q,P as K}from"./index-Baf2cdGO.js";import{U as R}from"./users-DnmAnK8h.js";import{C}from"./chevron-down-CmzQzLAd.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=k("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=k("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Z=()=>{const[x,u]=r.useState(),[w,D]=r.useState(""),[i,o]=r.useState({title:"",message:"",onConfirm:null}),[S,c]=r.useState(!1),[d,p]=r.useState([]),[g,A]=r.useState({admin:!0,teachingGroupAdmin:!0,teacher:!0,student:!0}),E=["admin","teachingGroupAdmin","teacher","student"],{isLoading:h,error:f,sendRequest:m,setError:G}=P(),U=M(),j=r.useContext(O);r.useEffect(()=>{(async()=>{try{const t=await m("http://103.127.133.63:5000/api/users/");u(t),console.log(t)}catch{}})()},[m]);const $=s=>{A(t=>({...t,[s]:!t[s]}))},b=s=>({admin:"bg-red-100 text-red-700",teachingGroupAdmin:"bg-orange-100 text-orange-700",teacher:"bg-violet-100 text-violet-700",student:"bg-blue-100 text-blue-700"})[s]||"bg-gray-100 text-gray-700",T=s=>s==null?void 0:s.split(" ").map(t=>t[0]).join("").toUpperCase().slice(0,2),I=s=>{o({title:"Peringatan!",message:"Hapus Pengguna?",onConfirm:async()=>{try{const a=await m(`http://103.127.133.63:5000/api/users/${s}`,"DELETE",null,{Authorization:"Bearer "+j.token});o({title:"Berhasil!",message:a.message,onConfirm:null}),u(n=>({...n,users:n.users.filter(l=>l._id!==s)}))}catch{}}}),c(!0)},B=()=>{if(d.length===0){o({title:"Error",message:"Please select at least one user.",onConfirm:null}),c(!0);return}o({title:"Konfirmasi",message:"Hapus semua user yang dipilih?",onConfirm:async()=>{const t="http://103.127.133.63:5000/api/users/bulk-delete",a=JSON.stringify({userIds:d});console.log(a);try{const n=await m(t,"DELETE",a,{"Content-Type":"application/json",Authorization:"Bearer "+j.token});o({title:"Berhasil!",message:n.message,onConfirm:null}),u(l=>({...l,users:l.users.filter(L=>!d.includes(L._id))})),p([])}catch{}}}),c(!0)},_=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{c(!1)},className:`${i.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:i.onConfirm?"Batal":"Tutup"}),i.onConfirm&&e.jsx("button",{onClick:i.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]}),F=({user:s})=>{const t=d.includes(s._id),a=()=>{p(n=>t?n.filter(l=>l!==s._id):[...n,s._id])};return e.jsxs("div",{className:"p-4 hover:bg-gray-50 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("input",{type:"checkbox",checked:t,onChange:a,className:"mr-2"}),s.image?e.jsx("img",{src:`http://103.127.133.63:5000/api/${s.image}`,alt:s.name,className:"w-10 h-10 rounded-full"}):e.jsx("div",{className:`w-10 h-10 rounded-full flex ${b(s.role)} items-center justify-center font-medium`,children:T(s.name)}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900",children:s.name}),e.jsx("span",{className:`hidden md:inline-block px-2.5 py-0.5 rounded-full text-xs font-medium h-6 ${b(s.role)}`,children:s.role==="teachingGroupAdmin"?"Admin Kelompok":s.role==="teacher"?"Guru":s.role==="student"?"Siswa":"Admin Daerah"})]}),e.jsx("p",{className:"text-sm text-gray-500 hidden md:block",children:s.email})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-sm text-gray-900 hidden md:block",children:s.teachingGroupId.branchId.name}),e.jsx("div",{className:"text-xs text-gray-500 hidden md:block",children:s.teachingGroupId.name})]}),e.jsx("div",{className:"p-1 hover:bg-gray-100 rounded",children:e.jsx(q,{buttons:[{icon:K,label:"Edit",onClick:()=>U(`/settings/users/${s._id}`)},{icon:N,label:"Delete",variant:"danger",onClick:()=>I(s._id)}]})})]})]})};return e.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[f&&e.jsx(z,{error:f,onClear:()=>G(null)}),e.jsxs(H,{isOpen:S,onClose:()=>c(!1),title:i.title,footer:e.jsx(_,{}),children:[h&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(y,{size:32})}),!h&&i.message]}),e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Daftar User"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:B,className:"button-danger disabled:hidden",disabled:d.length===0,children:[e.jsx(N,{className:"w-4 h-4 mr-2"}),"Hapus Akun"]}),e.jsx(v,{to:"/settings/users/new",children:e.jsxs("button",{className:"button-primary pl-[14px]",children:[e.jsx(V,{className:"w-4 h-4 mr-2"}),"Tambah Akun"]})}),e.jsx(v,{to:"/settings/users/bulk-create",children:e.jsxs("button",{className:"button-primary pl-[14px]",children:[e.jsx(R,{className:"w-4 h-4 mr-2"}),"Tambah Peserta Didik"]})})]})]}),h&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(y,{size:32})}),x&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-white p-4 rounded-md shadow-sm mb-6 flex items-center space-x-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(Y,{className:"w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"}),e.jsx("input",{type:"text",placeholder:"Search users...",className:"w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",value:w,onChange:s=>D(s.target.value)})]}),e.jsxs("button",{className:"px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50 flex items-center space-x-2",children:[e.jsx(J,{className:"w-4 h-4"}),e.jsx("span",{children:"Filters"}),e.jsx(C,{className:"w-4 h-4"})]})]}),e.jsx("div",{className:"bg-white rounded-md shadow-sm",children:E.map(s=>{const t=x.users.filter(a=>a.role===s);return e.jsxs("div",{className:"divide-y",children:[e.jsxs("div",{className:"bg-gray-100 px-4 py-2 font-semibold text-gray-700 cursor-pointer flex items-center justify-between",onClick:()=>$(s),children:[e.jsx("span",{children:s==="teachingGroupAdmin"?"Admin Kelompok":s==="teacher"?"Guru":s==="student"?"Siswa":"Admin"}),e.jsx(C,{className:`w-4 h-4 transform transition-transform ${g[s]?"":"-rotate-90"}`})]}),g[s]&&t.map(a=>e.jsx(F,{user:a},a._id))]},s)})})]})]})})};export{Z as default};
