import{r as t,A as _,u as B,j as a,L as F}from"./index-CBFEDf3H.js";import{r as K,D as Z,P as q,i as z}from"./PieChart-DaItlgFC.js";import{u as W}from"./http-hook-p1xhn-Qx.js";import{T as Q}from"./TeachingGroupAdminPerformanceCards-Ote3oUcD.js";import"./StudentReportView-DF5ebMI-.js";import"./ppgcikampek-CM1E7Efd.js";import"./arrow-down-to-line-CpaE_23y.js";import"./createLucideIcon-BukOYC3u.js";import"./StudentInitial-B1oFMShm.js";import"./attendanceCount-EC2MUpAe.js";import"./chevron-left-6QVRpj_g.js";import"./index-BiQfrBED.js";import"./proxy-CSa1sU4Y.js";const me=()=>{const{isLoading:p,error:U,sendRequest:m,setError:X}=W(),[x,E]=t.useState(),[r,O]=t.useState(null),[S,D]=t.useState(),[g,C]=t.useState(null),[y,Y]=t.useState(),[N,A]=t.useState(),[f,L]=t.useState(),[h,w]=t.useState(null),[j,I]=t.useState(null),[G,P]=t.useState(null),v=t.useContext(_);B();const $={attribute:"Perlengkapan Belajar",attitude:"Sikap",tidiness:"Kerapihan"},k=t.useCallback(async()=>{try{const e=await m("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears/?populate=teachingGroupYears");E(e.academicYears)}catch{}},[m]),T=t.useCallback(async()=>{const e=d=>{const c=[];d.teachingGroupYears.forEach(n=>{n.classes.forEach(o=>{o.attendances.forEach(b=>{c.push(b.status)})})});const l=c.reduce((n,o)=>(n[o]=(n[o]||0)+1,n),{}),u=c.length;return Object.keys(l).map(n=>({status:n,count:l[n],percentage:Math.round(l[n]/u*100)})).sort((n,o)=>n.status.localeCompare(o.status))},s=d=>{const c={};return d.teachingGroupYears.forEach(l=>{l.classes.forEach(u=>{u.attendances.forEach(n=>{Object.entries(n.violations).forEach(([o,b])=>{b&&(c[o]=(c[o]||0)+1)})})})}),Object.entries(c).map(([l,u])=>({violation:l,count:u}))},i="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/attendances/reports/",V=JSON.stringify({academicYearId:r,branchId:v.userBranchId,teachingGroupId:v.userTeachingGroupId,classId:g,startDate:h?h.toISOString():null,endDate:j?j.toISOString():null});try{const d=await m(i,"POST",V,{"Content-Type":"application/json"});console.log(d);let c={};c.teachingGroupYears=d.teachingGroupYears.map(l=>(l.classes=l.classes.filter(u=>v.userClassIds.includes(u._id)),l)),A(null),Y(c),A(e(c)),L(s(y))}catch{}},[m,r,g,h,j]);t.useEffect(()=>{K("id-ID",z),k(),T(),P("Semua")},[k,T]);const H=e=>{O(e),D([]),C(null),w(null),I(null),e!==""&&J()},J=async()=>{const e="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/classes/get-by-ids",s=JSON.stringify({classIds:v.userClassIds});console.log(s);try{const i=await m(e,"POST",s,{"Content-Type":"application/json"});D(i.classes),console.log(i.classes)}catch{}},M=e=>{C(e)},R=e=>{const[s,i]=e;s&&i&&P(s.toLocaleDateString("id-ID",{day:"2-digit",timeZone:"Asia/Jakarta"})+" - "+i.toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Jakarta"})),w(s),I(i)};return a.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:a.jsxs("main",{className:"max-w-6xl mx-auto",children:[(!x||p)&&a.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-dvh",children:a.jsx(F,{size:32})}),x&&a.jsxs("div",{className:"card-basic flex-col gap-4",children:[a.jsx("div",{className:"flex justify-between"}),a.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-4",children:[a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsxs("div",{className:"flex flex-row gap-4 items-center",children:[a.jsxs("div",{className:"flex flex-col gap-[18px]",children:[a.jsx("div",{children:"Tahun Ajaran"}),a.jsx("div",{children:"Periode"}),a.jsx("div",{children:"Kelas"})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsxs("select",{value:r||"",onChange:e=>H(e.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",disabled:!1,children:[!r&&a.jsx("option",{value:"",children:"Pilih"}),x&&x.map((e,s)=>a.jsx("option",{value:e._id,children:e.name},s))]}),a.jsx(Z,{dateFormat:"dd/MM/yyyy",selected:h,onChange:R,startDate:h,endDate:j,locale:"id-ID",selectsRange:!0,isClearable:!0,withPortal:window.innerWidth<=768,className:`${r&&"pr-8"} border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300`,disabled:!r,placeholderText:`${r?"Masukkan Periode":"Pilih Tahun Ajaran"}`,onFocus:e=>e.target.readOnly=!0}),a.jsxs("select",{value:g||"",onChange:e=>M(e.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",children:[a.jsx("option",{value:"",children:"Semua"}),S&&S.map((e,s)=>a.jsx("option",{value:e._id,children:e.name},s))]})]})]}),a.jsxs("div",{className:"self-start flex flex-row gap-2",children:[a.jsx("div",{className:"flex flex-col gap-1",children:f&&!p&&r&&f.map(({violation:e},s)=>a.jsx("div",{className:"",children:$[e]||e},s))}),a.jsx("div",{className:"flex flex-col gap-1 ",children:f&&!p&&r&&f.map(({count:e},s)=>a.jsxs("div",{className:"font-bold",children:[": ",e," Temuan"]},s))})]})]}),N&&!p&&r&&a.jsx("div",{className:"",children:a.jsx(q,{attendanceData:N})})]})]}),y&&!p&&r&&a.jsx(Q,{data:y,initialView:"classes",month:G})]})})};export{me as default};
