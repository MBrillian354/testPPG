import{r as n,b as S,d as N,u as T,j as t,M as I,L as b,E as k,D as E}from"./index-Baf2cdGO.js";const D=()=>{var c;const[l,p]=n.useState({title:"",message:"",onConfirm:null}),[f,o]=n.useState(!1),{isLoading:a,error:u,sendRequest:i,setError:x}=S(),[y,O]=n.useState(!1),[e,g]=n.useState(),h=N().attendanceId,v=T();n.useEffect(()=>{(async()=>{try{const s=await i(`http://103.127.133.63:5000/api/attendances/${h}`);g(s.attendance),console.log(s.attendance)}catch{}})()},[i]);const j=async r=>{console.log("Updating ... ");const s="http://103.127.133.63:5000/api/attendances/",m=JSON.stringify({updates:[{attendanceId:e.id,status:r.status,attributes:r.attributes,timestamp:Date.now()}]});console.log(m);let d;try{d=await i(s,"PATCH",m,{"Content-Type":"application/json"})}catch{}p({title:"Berhasil!",message:d.message,onConfirm:()=>v(-2)}),o(!0)},C=()=>t.jsx("div",{className:"flex gap-2 items-center",children:l.onConfirm&&t.jsx("button",{onClick:l.onConfirm,className:"button-primary mt-0 ",children:"Ok"})});return t.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[t.jsxs(I,{isOpen:f,onClose:()=>o(!1),title:l.title,footer:t.jsx(C,{}),children:[a&&t.jsx("div",{className:"flex justify-center mt-16",children:t.jsx(b,{size:32})}),!a&&l.message]}),u&&t.jsx(k,{error:u,onClear:()=>x(null)}),t.jsx("div",{className:`pb-24 transition-opacity duration-300 ${y?"opacity-0":"opacity-100"}`,children:t.jsx(E,{subtitle:"Edit Data Absen",fields:[{name:"name",label:"Nama Lengkap",type:"text",required:!1,disabled:!0,value:((c=e==null?void 0:e.studentId)==null?void 0:c.name)||""},{name:"statusOld",label:"Status Kehadiran (sebelumnya)",type:"text",required:!1,disabled:!0,value:(e==null?void 0:e.status)||""},{name:"attributesOld",label:"Atribut (sebelumnya)",type:"text",required:!1,disabled:!0,value:e!=null&&e.attributes?"Ya":"Tidak"},{name:"status",label:"Status Kehadiran (baru)",type:"select",required:!0,value:(e==null?void 0:e.status)||"",options:[{label:"Hadir",value:"Hadir"},{label:"Terlambat",value:"Terlambat"},{label:"Izin",value:"Izin"},{label:"Sakit",value:"Sakit"},{label:"Tanpa Keterangan",value:"Tanpa Keterangan"}]},{name:"attributes",label:"Atribut Lengkap? (baru)",type:"select",required:!0,value:(e==null?void 0:e.attributes)||"",options:[{label:"Ya",value:"true"},{label:"Tidak",value:"false"}]}],onSubmit:j,disabled:a,reset:!1,footer:!1,button:t.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:t.jsx("button",{type:"submit",className:`button-primary ${a?"opacity-50 cursor-not-allowed":""}`,disabled:a,children:a?t.jsx(b,{children:"Processing..."}):"Update"})})})})]})};export{D as default};
