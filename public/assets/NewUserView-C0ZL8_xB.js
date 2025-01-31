import{r as t,A as q,u as S,j as a,L as E}from"./index-CBFEDf3H.js";import{u as C}from"./http-hook-p1xhn-Qx.js";import{D as L}from"./DynamicForm-DnFPMFU5.js";import{E as O}from"./ErrorCard-DyotIidg.js";import{M as F}from"./ModalBottomClose-CrGWDDNY.js";import"./iconify-icon-C1YYA-Pd.js";const R=()=>{const[g,i]=t.useState(!1),[f,y]=t.useState(!1),[o,x]=t.useState(!0),[A,d]=t.useState(!1),{isLoading:n,error:p,sendRequest:l,setError:h}=C(),[c,j]=t.useState([]),[m,u]=t.useState(),w=t.useContext(q),N=S();t.useEffect(()=>{(async()=>{try{const s=await l("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/teaching-groupes");j(s.teachingGroups)}catch{}})()},[l]),t.useEffect(()=>{c&&u([{name:"name",label:"Nama Lengkap",placeholder:"Faisal Ahmad",type:"text",required:!0},{name:"email",label:"Email",placeholder:"contoh@email.com",type:"email",required:!0},{name:"password",label:"Password",placeholder:"min 8 karakter",type:"password",required:!0},{name:"teachingGroupName",label:"Kelompok",type:"select",required:!0,options:c.map(({name:e})=>({label:e,value:e}))},{name:"role",label:"Level Akun",type:"select",required:!0,options:[{label:"Admin",value:"admin"},{label:"Admin Kelompok",value:"teachingGroupAdmin"}]}])},[c]);const k=async e=>{const s="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/createUser",r=JSON.stringify(o?{name:e.name,email:e.email,password:e.password,role:e.role,teachingGroupName:e.teachingGroupName}:{name:e.name,email:e.email,password:e.password,role:"teacher",teachingGroupName:e.teachingGroupName,teacherDetails:{nid:e.nid}});let b;try{b=await l(s,"POST",r,{"Content-Type":"application/json",Authorization:"Bearer "+w.token}),y(b.message),i(!0)}catch{}},T=()=>{const e=m.filter(r=>r.name!=="nid"&&r.name!=="role"),s={name:"nid",label:"NID Guru",placeholder:"00001234",type:"text",required:!0};u([...e,s])},G=()=>{const e=m.filter(r=>r.name!=="nid"&&r.name!=="role"),s={name:"role",label:"Akun",type:"select",required:!0,options:[{label:"Admin",value:"admin"},{label:"Admin Kelompok",value:"teachingGroupAdmin"}]};e.push(s),u(e)},v=()=>{d(!0),h(null),setTimeout(()=>{x(e=>!e),o?T():G(),d(!1)},200)};return a.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[a.jsx(F,{isOpen:g,onClose:()=>i(!1),title:"Berhasil!",footer:a.jsx(a.Fragment,{children:a.jsx("button",{onClick:()=>{i(!1),N("/settings/users/")},className:"btn-danger-outline",children:"Tutup"})}),children:f}),a.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${A?"opacity-0":"opacity-100"}`,children:[a.jsx("div",{className:"px-2",children:p&&a.jsx(O,{error:p,onClear:()=>h(null)})}),a.jsx(L,{title:o?"Tambah Akun Admin":"Tambah Akun Guru",subtitle:"Sistem Absensi Digital",fields:m||[{name:"name",label:"Name",placeholder:"Nama Lengkap",type:"text",required:!0},{name:"email",label:"Email",placeholder:"Email",type:"email",required:!0},{name:"password",label:"Password",placeholder:"Password",type:"password",required:!0}],onSubmit:k,disabled:n,reset:!1,footer:!1,button:a.jsxs("div",{className:"flex flex-col justify-stretch mt-4",children:[a.jsx("button",{type:"submit",className:`button-primary ${n?"opacity-50 cursor-not-allowed":""}`,disabled:n,children:n?a.jsx(E,{children:"Processing..."}):"Tambah"}),a.jsx("button",{type:"button",onClick:v,className:"button-secondary",disabled:n,children:o?"Tambah Akun Guru":"Tambah Akun Admin"})]})})]})]})};export{R as default};
