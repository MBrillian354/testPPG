import{r as s,a as f,u as g,j as e,M as y,E as N,D as S,L as T}from"./index-DkRdKdNm.js";const w=()=>{const[r,t]=s.useState(!1),[o,l]=s.useState(!1),[c,v]=s.useState(!1),{isLoading:a,error:n,sendRequest:d,setError:m}=f();s.useState();const u=g(),p=[{name:"name",label:"Tahun Ajaran",placeholder:"20241",type:"text",required:!0}],h=async x=>{const b="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears",j=JSON.stringify({name:x.name});let i;try{i=await d(b,"POST",j,{"Content-Type":"application/json"}),l(i.message),t(!0)}catch{}};return e.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[e.jsx(y,{isOpen:r,onClose:()=>t(!1),title:"Berhasil!",footer:e.jsx(e.Fragment,{children:e.jsx("button",{onClick:()=>{t(!1),u("/settings/academic/")},className:"btn-danger-outline",children:"Tutup"})}),children:o}),e.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${c?"opacity-0":"opacity-100"}`,children:[n&&e.jsx("div",{className:"px-2",children:e.jsx(N,{error:n,onClear:()=>m(null)})}),e.jsx(S,{title:"Tambah Tahun Ajaran",subtitle:"Sistem Absensi Digital",fields:p,onSubmit:h,disabled:a,reset:!1,footer:!1,button:e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${a?"opacity-50 cursor-not-allowed":""}`,disabled:a,children:a?e.jsx(T,{children:"Processing..."}):"Tambah"})})})]})]})};export{w as default};
