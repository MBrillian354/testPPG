import{r as n,b as v,d as S,u as T,j as e,M as A,L as p,E as k,D as E}from"./index-Baf2cdGO.js";const w=()=>{const[s,l]=n.useState({title:"",message:"",onConfirm:null}),[f,r]=n.useState(!1),{isLoading:a,error:c,sendRequest:o,setError:g}=v(),[x,I]=n.useState(!1),[t,h]=n.useState(),j=S().teachingGroupYearId,b=T();n.useEffect(()=>{(async()=>{try{const i=await o(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/${j}`);h(i.teachingGroupYear)}catch{}})()},[o]);const y=async m=>{console.log("Updating ... ");const i="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/activate",u=JSON.stringify({teachingGroupYearId:t._id,semesterTarget:m.semesterTarget});console.log(u);let d;try{d=await o(i,"PATCH",u,{"Content-Type":"application/json"})}catch(N){l({title:"Gagal!",message:N.message,onConfirm:null}),r(!0)}l({title:"Berhasil!",message:d.message,onConfirm:null}),r(!0)},C=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{r(!1),b(-1)},className:`${s.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:s.onConfirm?"Batal":"Tutup"}),s.onConfirm&&e.jsx("button",{onClick:s.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[e.jsxs(A,{isOpen:f,onClose:()=>r(!1),title:s.title,footer:e.jsx(C,{}),children:[a&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(p,{size:32})}),!a&&s.message]}),e.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${x?"opacity-0":"opacity-100"}`,children:[c&&e.jsx("div",{className:"px-2",children:e.jsx(k,{error:c,onClear:()=>g(null)})}),e.jsx(E,{title:"Aktifkan Tahun Ajaran",subtitle:t==null?void 0:t.name,fields:[{name:"name",label:"Nama Tahun Ajaran",type:"text",required:!1,disabled:!0,value:(t==null?void 0:t.name)||""},{name:"semesterTarget",label:"Target Pertemuan Selama 1 Semester",type:"number",required:!0,value:(t==null?void 0:t.semesterTarget)||""}],onSubmit:y,disabled:a,reset:!1,footer:!1,button:e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${a?"opacity-50 cursor-not-allowed":""}`,disabled:a,children:a?e.jsx(p,{children:"Processing..."}):"Aktifkan"})})})]})]})};export{w as default};
