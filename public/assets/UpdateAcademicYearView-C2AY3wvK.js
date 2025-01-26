import{r as t,a as v,b as Y,u as A,j as e,M as S,L as f,E as T,D as $}from"./index-b338pBx7.js";const D=()=>{const[a,c]=t.useState({title:"",message:"",onConfirm:null}),[x,n]=t.useState(!1),{isLoading:s,error:o,sendRequest:r,setError:h}=v(),[j,E]=t.useState(!1),[l,g]=t.useState(),m=Y().academicYearId,b=A();t.useEffect(()=>{(async()=>{try{const i=await r(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears/${m}`);g(i.academicYear)}catch{}})()},[r]);const y=async d=>{console.log("Updating ... ");const i=`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears/${m}`,u=JSON.stringify({name:d.name});console.log(u);let p;try{p=await r(i,"PATCH",u,{"Content-Type":"application/json"})}catch(N){c({title:"Gagal!",message:N.message,onConfirm:null}),n(!0)}c({title:"Berhasil!",message:p.message,onConfirm:null}),n(!0)},C=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{n(!1),!o&&b(-1)},className:`${a.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:a.onConfirm?"Batal":"Tutup"}),a.onConfirm&&e.jsx("button",{onClick:a.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[e.jsxs(S,{isOpen:x,onClose:()=>n(!1),title:a.title,footer:e.jsx(C,{}),children:[s&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(f,{size:32})}),!s&&a.message]}),e.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${j?"opacity-0":"opacity-100"}`,children:[o&&e.jsx("div",{className:"px-2",children:e.jsx(T,{error:o,onClear:()=>h(null)})}),e.jsx($,{title:"Aktifkan Tahun Ajaran",subtitle:"Sistem Absensi Digital",fields:[{name:"name",label:"Nama Tahun Ajaran",type:"text",required:!1,value:(l==null?void 0:l.name)||""}],onSubmit:y,disabled:s,reset:!1,footer:!1,button:e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?e.jsx(f,{children:"Processing..."}):"Update"})})})]})]})};export{D as default};
