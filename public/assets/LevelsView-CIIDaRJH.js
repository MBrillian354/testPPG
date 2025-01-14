import{r as c,u as $,j as e,b as D,L as u}from"./index-CUVeWTx6.js";import{u as L}from"./http-hook-BiPXVO_k.js";import{M as T}from"./ModalBottomClose-We_XnTjp.js";import{F as _}from"./FloatingMenu-EPyw5Und.js";import{E as B}from"./ErrorCard-IpMuaMVp.js";import{P as M}from"./plus-BUkQv9Tp.js";import{P as H}from"./pencil-BgN2SDpY.js";import{T as S}from"./trash-DzB1P7l8.js";import"./createLucideIcon-HjXMmH3n.js";const V=()=>{const[o,d]=c.useState({title:"",message:"",onConfirm:null}),[y,n]=c.useState(!1),[h,g]=c.useState(),[N,C]=c.useState({}),{isLoading:a,error:f,sendRequest:l,setError:b}=L(),j=$();c.useEffect(()=>{(async()=>{try{console.log("Fetching Levels...");const s=await l("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/?populate=true");g(s),console.log(s),console.log("Fetching Levels completed")}catch{}})()},[l,o]);const w=t=>{C(s=>({...s,[t]:!s[t]}))},E=(t,s)=>{console.log(s);const r=async()=>{n(!1);const m="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/";console.log(m);const p=JSON.stringify({branchId:s});let x;try{x=await l(m,"DELETE",p,{"Content-Type":"application/json"}),n(!0),d({title:"Berhasil!",message:x.message,onConfirm:null});const i=await l("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/?populate=true");g(i)}catch{}};d({title:"Konfirmasi Penghapusan",message:`Hapus PC: ${t}?`,onConfirm:r}),n(!0)},k=(t,s,r)=>{t.stopPropagation(),console.log(r);const m=async()=>{n(!1);const p="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/teaching-groupes";console.log(p);const x=JSON.stringify({teachingGroupId:r});let i;try{i=await l(p,"DELETE",x,{"Content-Type":"application/json"}),n(!0),d({title:"Berhasil!",message:i.message,onConfirm:null});const v=await l("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/?populate=true");g(v)}catch{}};d({title:"Konfirmasi Penghapusan",message:`Hapus PC: ${s}?`,onConfirm:m}),n(!0)},P=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{n(!1)},className:`${o.onConfirm?"btn-danger-outline":"button-primary mt-0 "} ${a?"opacity-50 cursor-not-allowed":""}`,disabled:a,children:a?e.jsx(u,{}):o.onConfirm?"Batal":"Tutup"}),o.onConfirm&&e.jsx("button",{onClick:o.onConfirm,className:`button-primary mt-0 ${a?"opacity-50 cursor-not-allowed":""}`,children:a?e.jsx(u,{}):"Ya"})]});return e.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex items-center justify-between mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Manajemen PC dan Kelompok Ajar"}),e.jsx(D,{to:"/settings/levels/new",children:e.jsxs("button",{className:"button-primary pl-[10px]",children:[e.jsx(M,{className:"w-4 h-4 mr-2"}),"Tambah"]})})]}),f&&e.jsx(B,{error:f,onClear:()=>b(null)}),e.jsxs(T,{isOpen:y,onClose:()=>n(!1),title:o.title,footer:e.jsx(P,{}),children:[a&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(u,{size:32})}),!a&&o.message]}),!h&&a&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(u,{size:32})}),h&&!a&&e.jsx("div",{className:"bg-white rounded-lg shadow divide-y",children:h.branches.map(t=>e.jsxs("div",{className:"p-4 hover:bg-gray-100 hover:cursor-pointer transition-all duration-200",children:[e.jsxs("div",{onClick:()=>w(t._id),className:"flex items-center space-x-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("h2",{className:"text-sm font-semibold text-gray-900",children:["PC ",t.name]}),e.jsxs("div",{className:"text-xs text-gray-500 border border-gray-500 rounded p-1",children:[t.teachingGroups.length," Kelompok Ajar"]})]}),e.jsx("div",{className:"flex items-center text-xs text-gray-500 mt-1",children:t.address})]}),e.jsx(_,{onClick:s=>s.stopPropagation(),buttons:[{icon:H,label:"Edit",onClick:()=>j(`/settings/levels/${t._id}`)},{icon:S,label:"Delete",variant:"danger",onClick:()=>E(t.name,t._id)}]})]}),N[t._id]&&e.jsx("div",{className:"mt-3 ml-12 space-y-2",children:t.teachingGroups.map(s=>e.jsxs("div",{className:"flex items-center justify-between py-2 px-3 bg-gray-50 rounded text-sm",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"font-medium text-gray-900",children:["Kelompok Ajar ",s.name]}),e.jsx("div",{className:"flex items-center text-xs text-gray-500 mt-1",children:s.address})]}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:()=>j(`/settings/levels/teaching-group/${s._id}`),className:"px-2 italic text-gray-500 hover:underline hover:text-blue-500 hover:cursor-pointer",children:"Edit"}),e.jsx("button",{onClick:r=>k(r,s.name,s._id),className:"px-2 italic text-gray-500 hover:underline hover:text-red-500 hover:cursor-pointer",children:"Hapus"})]})]},s._id))})]},t._id))})]})})};export{V as default};
