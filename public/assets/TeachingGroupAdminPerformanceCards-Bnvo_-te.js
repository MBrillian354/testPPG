import{r as b,A as _,u as H,j as a,C as q}from"./index-Baf2cdGO.js";import{C as z,A,p as K,a as P}from"./PieChart-D98uJ5kO.js";import{S as R}from"./StudentReportView-DZBEIBQW.js";import{S as V}from"./StudentInitial-Cz8IaymN.js";import{a as k}from"./attendanceCount-EC2MUpAe.js";import{A as B}from"./index-DkNG5lM_.js";import{m as v}from"./proxy-HtNcpCG-.js";z.register(A,K,P);const S=(r,u=null,g=null)=>{const o=r.length,x=r.reduce((d,t)=>(d[t.status]=(d[t.status]||0)+1,d),{}),p=u?u*g:o,h=Object.entries(x).map(([d,t])=>({status:d,count:t,percentage:Math.round(t/p*100)})),s=["Hadir","Terlambat","Izin","Sakit","Tanpa Keterangan"];return h.sort((d,t)=>s.indexOf(d.status)-s.indexOf(t.status))},C=(r,u=null,g=null)=>{const o=S(r,u,g);return(()=>{const p=o.filter(t=>["Hadir","Terlambat"].includes(t.status)).reduce((t,m)=>({status:"Hadir",count:t.count+m.count,percentage:t.percentage+m.percentage}),{count:0,percentage:0}),h=o.filter(t=>["Izin","Sakit"].includes(t.status)).reduce((t,m)=>({status:"Tidak Hadir",count:t.count+m.count,percentage:t.percentage+m.percentage}),{count:0,percentage:0});let s=o.find(t=>t.status==="Tanpa Keterangan");return[p,h,s&&s.count>0?{status:"Tanpa Keterangan",count:s.count,percentage:s.percentage}:null].filter(Boolean).filter(t=>t.percentage>0)})()},E=r=>({Hadir:"bg-emerald-100 text-emerald-800",Terlambat:"bg-amber-100 text-amber-800",Izin:"bg-blue-100 text-blue-800",Sakit:"bg-purple-100 text-purple-800","Tanpa Keterangan":"bg-red-100 text-red-800","Tidak Hadir":"bg-orange-100 text-orange-800"})[r]||"bg-gray-100 text-gray-800",N=({status:r,percentage:u})=>a.jsxs("span",{className:`px-2 py-1 rounded-full text-center ${E(r)}`,children:[r," ",u,"%"]}),F=({data:r,initialView:u,month:g})=>{const[o,x]=b.useState(u),[p,h]=b.useState(null),[s,y]=b.useState(!1),[d,t]=b.useState(!1),m=b.useContext(_);H();const T={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},w={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},I=()=>{o==="students"?(x("classes"),h(null)):x("classes")},G=()=>{var f;const i=r.teachingGroupYears.find(e=>e.teachingGroupId._id===m.userTeachingGroupId);if(!i)return null;const c=i.classes.map(e=>({id:e._id,name:e.name,branchName:i.teachingGroupId.branchId.name,teachingGroupName:i.teachingGroupId.name,attendances:e.attendances,teachers:e.teachers,uniqueStudents:new Set(e.students.map(l=>l)).size,semesterTarget:i.semesterTarget}));return(f=r.teachingGroupYears.find(e=>e.teachingGroupId._id===m.userTeachingGroupId))==null||f.teachingGroupId.name,a.jsx(v.div,{variants:T,initial:"hidden",animate:"visible",className:"flex flex-col items-stretch",children:c.map(e=>a.jsxs(v.div,{variants:w,className:"card-basic rounded-md justify-between hover:cursor-pointer hover:bg-gray-50 hover:ring-1 transition-colors duration-200",onClick:()=>{h(e.id),x("students")},children:[a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("h3",{className:"text-lg font-medium",children:e.name}),a.jsxs("p",{className:"text-sm text-gray-600",children:["Jumlah Siswa: ",e.uniqueStudents," siswa"]}),a.jsxs("p",{className:"text-sm text-gray-600",children:["Total Pertemuan: ",k(e)," hari"]})]}),a.jsx("div",{className:"md:hidden flex flex-col md:flex-row gap-2 items-end md:items-end",children:C(e.attendances,s?e.semesterTarget:null,s?e.uniqueStudents:null).map((l,n)=>a.jsx(N,{...l},n))}),a.jsx("div",{className:"hidden md:flex flex-col md:flex-row items-end gap-2 md:items-center",children:S(e.attendances,s?e.semesterTarget:null,s?e.uniqueStudents:null).map((l,n)=>a.jsx(N,{...l},n))})]},e.id))})},D=()=>{const i=r.teachingGroupYears.find(e=>e.teachingGroupId._id===m.userTeachingGroupId),c=i==null?void 0:i.classes.find(e=>e._id===p);if(!c)return null;console.log(c);const f=c.attendances.reduce((e,l)=>{const n=l.studentId;return e.some(j=>j.id===n._id)||e.push({id:n._id,teachingGroupYearName:i.name,month:g,className:c.name,name:n.name,nis:n.nis,image:n.image,branchName:i.teachingGroupId.branchId.name,teachingGroupName:i.teachingGroupId.name,teachers:c.teachers,attendances:c.attendances.filter(j=>j.studentId._id===n._id),uniqueStudents:new Set(c.students.map(j=>j)).size,semesterTarget:i.semesterTarget}),e},[]);return a.jsxs(v.div,{variants:T,initial:"hidden",animate:"visible",className:"flex flex-col items-stretch",children:[a.jsxs("div",{className:"mx-4 md:mx-8  flex flex-col",children:[a.jsx("h2",{className:"text-xl font-bold",children:c.name}),a.jsxs("p",{className:"text-sm text-gray-600",children:["Jumlah Siswa: ",f.uniqueStudents," siswa"]}),a.jsxs("p",{className:"text-sm text-gray-600",children:["Total Pertemuan: ",k(c)," hari"]})]}),f.map(e=>a.jsxs(v.div,{onClick:()=>t(d===e.id?null:e.id),variants:w,children:[console.log(e),a.jsxs("div",{className:"card-basic rounded-md hover:cursor-pointer hover:bg-gray-50 hover:ring-1 hover:ring-primary flex-col transition-all duration-200",children:[a.jsxs("div",{className:"flex md:justify-between md:flex-row flex-col justify-start items-start gap-4 ",children:[a.jsxs("div",{className:"flex gap-3 items-center",children:[e.image?a.jsx("img",{src:e!=null&&e.image?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/${e.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",alt:e.name,className:"size-14 rounded-full m-auto shrink-0"}):a.jsx(V,{studentName:e.name,clsName:"size-14 rounded-full bg-blue-200 text-blue-500 flex items-center justify-center font-medium m-auto shrink-0 grow-0"}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("h3",{className:"text-lg font-medium",children:e.name}),a.jsx("h4",{className:"",children:e.nis})]})]}),a.jsx("div",{className:"md:hidden flex flex-col md:flex-row gap-2 items-end md:items-end self-end",children:C(e.attendances,s?e.semesterTarget:null,s?e.uniqueStudents:null).map((l,n)=>a.jsx(N,{...l},n))}),a.jsx("div",{className:"hidden md:flex flex-col md:flex-row items-end gap-2 md:items-center",children:S(e.attendances,s?e.semesterTarget:null,s?e.uniqueStudents:null).map((l,n)=>a.jsx(N,{...l},n))})]}),m.userRole==="teacher"&&d===e.id&&a.jsx("div",{className:"mt-4",onClick:l=>l.stopPropagation(),children:a.jsx(v.div,{children:a.jsx(R,{studentData:e,attendanceData:S(e.attendances),noCard:!0})})})]})]},e.id))]})};return a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsxs("div",{className:"md:mx-8 mt-8 flex justify-between items-center",children:[a.jsxs("button",{onClick:I,className:"flex items-center text-primary hover:text-primary/80 transition-colors disabled:text-gray-400",disabled:o==="classes",children:[a.jsx(q,{className:"w-4 h-4 mr-1"}),"Kembali"]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsxs("p",{children:["Kalkulasi Berdasarkan: ",s?a.jsx("strong",{children:"Hari efektif"}):a.jsx("strong",{children:"Hari berjalan"})]}),a.jsx("button",{onClick:()=>y(!s),className:"text-primary px-4 py-2 rounded border border-primary hover:bg-primary hover:text-white transition",children:"Ubah"})]})]}),a.jsxs(B,{mode:"wait",children:[o==="classes"&&G(),o==="students"&&D()]})]})};export{F as T};
