import{r as o,b as N,d as v,u as S,j as e,L as m,M as T,E as $,D}from"./index-Baf2cdGO.js";const w=()=>{const[a,h]=o.useState({title:"",message:"",onConfirm:null}),[f,r]=o.useState(!1),{isLoading:s,error:i,sendRequest:l,setError:g}=N(),[x,E]=o.useState(!1),[t,b]=o.useState(),d=v().teachingGroupId,j=S();o.useEffect(()=>{(async()=>{try{const n=await l(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/teaching-groupes/${d}`);b(n.teachingGroup),console.log(n),console.log(n.teachingGroup)}catch{}})()},[l]);const y=async c=>{const n=`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/teaching-groupes/${d}`,u=JSON.stringify({name:c.name,address:c.address});console.log(u);let p;try{p=await l(n,"PATCH",u,{"Content-Type":"application/json"})}catch{}h({title:"Berhasil!",message:p.message,onConfirm:null}),r(!0)},C=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{r(!1),!i&&j(-1)},className:`${a.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:a.onConfirm?"Batal":"Tutup"}),a.onConfirm&&e.jsx("button",{onClick:a.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[!t&&s&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(m,{size:32})}),e.jsxs(T,{isOpen:f,onClose:()=>r(!1),title:a.title,footer:e.jsx(C,{}),children:[s&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(m,{size:32})}),!s&&a.message]}),e.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${x?"opacity-0":"opacity-100"}`,children:[i&&e.jsx($,{error:i,onClear:()=>g(null)}),e.jsx(D,{title:"Update Data Kelompok",subtitle:"Sistem Absensi Digital",fields:[{name:"name",label:"Nama Kelompok",placeholder:"Nama Lengkap",type:"text",required:!0,value:(t==null?void 0:t.name)||""},{name:"address",label:"Alamat",type:"textarea",required:!0,value:(t==null?void 0:t.address)||""}],onSubmit:y,disabled:s,reset:!1,footer:!1,button:e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?e.jsx(m,{children:"Processing..."}):"Update"})})})]})]})};export{w as default};
