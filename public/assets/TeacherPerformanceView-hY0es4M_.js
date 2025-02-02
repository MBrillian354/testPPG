import{b as F,r as t,A as _,u as B,j as a,L as K}from"./index-BclD7Oek.js";import{r as Z,b as q,D as z,P as W,i as Q}from"./academicYearFormatter-DYavgDcV.js";import{T as U}from"./TeachingGroupAdminPerformanceCards-CXi2PNkC.js";import"./StudentReportView-DTBXnoGK.js";import"./ppgcikampek-CM1E7Efd.js";import"./arrow-down-to-line-D9vr6GQP.js";import"./StudentInitial-BUOKJrkB.js";import"./attendanceCount-EC2MUpAe.js";import"./index-B04DRbXT.js";import"./proxy-Y6K7WLgr.js";const ue=()=>{const{isLoading:h,error:X,sendRequest:m,setError:ee}=F(),[g,E]=t.useState(),[r,O]=t.useState(null),[S,D]=t.useState(),[f,C]=t.useState(null),[y,L]=t.useState(),[N,A]=t.useState(),[p,k]=t.useState(),[x,w]=t.useState(null),[j,I]=t.useState(null),[G,P]=t.useState(null),v=t.useContext(_);B();const $={attribute:"Perlengkapan Belajar",attitude:"Sikap",tidiness:"Kerapihan"},T=t.useCallback(async()=>{try{const e=await m("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears/?populate=teachingGroupYears");E(e.academicYears)}catch{}},[m]),Y=t.useCallback(async()=>{const e=d=>{const l=[];d.teachingGroupYears.forEach(n=>{n.classes.forEach(o=>{o.attendances.forEach(b=>{l.push(b.status)})})});const c=l.reduce((n,o)=>(n[o]=(n[o]||0)+1,n),{}),u=l.length;return Object.keys(c).map(n=>({status:n,count:c[n],percentage:Math.round(c[n]/u*100*100)/100})).sort((n,o)=>n.status.localeCompare(o.status))},s=d=>{const l={};return d.teachingGroupYears.forEach(c=>{c.classes.forEach(u=>{u.attendances.forEach(n=>{Object.entries(n.violations).forEach(([o,b])=>{b&&(l[o]=(l[o]||0)+1)})})})}),Object.entries(l).map(([c,u])=>({violation:c,count:u}))},i="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/attendances/reports/",V=JSON.stringify({academicYearId:r,branchId:v.userBranchId,teachingGroupId:v.userTeachingGroupId,classId:f,startDate:x?x.toISOString():null,endDate:j?j.toISOString():null});try{const d=await m(i,"POST",V,{"Content-Type":"application/json"});console.log(d);let l={};l.teachingGroupYears=d.teachingGroupYears.map(c=>(c.classes=c.classes.filter(u=>v.userClassIds.includes(u._id)),c)),A(null),L(l),A(e(l)),k(s(y))}catch{}},[m,r,f,x,j]);t.useEffect(()=>{Z("id-ID",Q),T(),Y(),P("Semua")},[T,Y]);const H=e=>{O(e),D([]),C(null),w(null),I(null),e!==""&&J()},J=async()=>{const e="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/classes/get-by-ids",s=JSON.stringify({classIds:v.userClassIds});console.log(s);try{const i=await m(e,"POST",s,{"Content-Type":"application/json"});D(i.classes),console.log(i.classes)}catch{}},M=e=>{C(e)},R=e=>{const[s,i]=e;s&&i&&P(s.toLocaleDateString("id-ID",{day:"2-digit",timeZone:"Asia/Jakarta"})+" - "+i.toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Jakarta"})),w(s),I(i)};return a.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:a.jsxs("main",{className:"max-w-6xl mx-auto",children:[(!g||h)&&a.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-dvh",children:a.jsx(K,{size:32})}),g&&a.jsxs("div",{className:"card-basic rounded-md flex-col gap-4",children:[a.jsx("div",{className:"flex justify-between"}),a.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-4",children:[a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsxs("div",{className:"flex flex-row gap-4 items-center",children:[a.jsxs("div",{className:"flex flex-col gap-[18px]",children:[a.jsx("div",{children:"Tahun Ajaran"}),a.jsx("div",{children:"Periode"}),a.jsx("div",{children:"Kelas"})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsxs("select",{value:r||"",onChange:e=>H(e.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",disabled:!1,children:[!r&&a.jsx("option",{value:"",children:"Pilih"}),g&&g.map((e,s)=>a.jsx("option",{value:e._id,children:q(e.name)},s))]}),a.jsx(z,{dateFormat:"dd/MM/yyyy",selected:x,onChange:R,startDate:x,endDate:j,locale:"id-ID",selectsRange:!0,isClearable:!0,withPortal:window.innerWidth<=768,className:`${r&&"pr-8"} border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300`,disabled:!r,placeholderText:`${r?"Masukkan Periode":"Pilih Tahun Ajaran"}`,onFocus:e=>e.target.readOnly=!0}),a.jsxs("select",{value:f||"",onChange:e=>M(e.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",children:[a.jsx("option",{value:"",children:"Semua"}),S&&S.map((e,s)=>a.jsx("option",{value:e._id,children:e.name},s))]})]})]}),a.jsxs("div",{className:"self-start flex flex-row gap-2",children:[a.jsx("div",{className:"flex flex-col gap-1",children:p&&!h&&r&&p.map(({violation:e},s)=>a.jsx("div",{className:"",children:$[e]||e},s))}),a.jsx("div",{className:"flex flex-col gap-1 ",children:p&&!h&&r&&p.map(({count:e},s)=>a.jsxs("div",{className:"font-bold",children:[": ",e," Temuan"]},s))})]})]}),N&&!h&&r&&a.jsx("div",{className:"",children:a.jsx(W,{attendanceData:N})})]})]}),p&&y&&!h&&r&&a.jsx(U,{data:y,violationData:p,initialView:"classes",month:G})]})})};export{ue as default};
