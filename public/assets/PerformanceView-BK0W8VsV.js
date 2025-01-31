import{r as d,A as W,u as Q,j as e,L as de}from"./index-CBFEDf3H.js";import{C as oe,A as me,p as ue,a as he,r as xe,D as pe,P as ge,i as fe}from"./PieChart-DaItlgFC.js";import{u as je}from"./http-hook-p1xhn-Qx.js";import{S as ve}from"./StudentReportView-DF5ebMI-.js";import{S as be}from"./StudentInitial-B1oFMShm.js";import{a as U}from"./attendanceCount-EC2MUpAe.js";import{C as Ne}from"./chevron-left-6QVRpj_g.js";import{A as Se}from"./index-BiQfrBED.js";import{m as k}from"./proxy-CSa1sU4Y.js";import"./ppgcikampek-CM1E7Efd.js";import"./arrow-down-to-line-CpaE_23y.js";import"./createLucideIcon-BukOYC3u.js";oe.register(me,ue,he);const P=(c,N=null,f=null)=>{const p=c.length,g=c.reduce((b,r)=>(b[r.status]=(b[r.status]||0)+1,b),{}),w=N?N*f:p,m=Object.entries(g).map(([b,r])=>({status:b,count:r,percentage:Math.round(r/w*100)})),j=["Hadir","Terlambat","Izin","Sakit","Tanpa Keterangan"];return m.sort((b,r)=>j.indexOf(b.status)-j.indexOf(r.status))},R=(c,N=null,f=null)=>{const p=P(c,N,f);return(()=>{const w=p.filter(r=>["Hadir","Terlambat"].includes(r.status)).reduce((r,l)=>({status:"Hadir",count:r.count+l.count,percentage:r.percentage+l.percentage}),{count:0,percentage:0}),m=p.filter(r=>["Izin","Sakit"].includes(r.status)).reduce((r,l)=>({status:"Tidak Hadir",count:r.count+l.count,percentage:r.percentage+l.percentage}),{count:0,percentage:0});let j=p.find(r=>r.status==="Tanpa Keterangan");return[w,m,j&&j.count>0?{status:"Tanpa Keterangan",count:j.count,percentage:j.percentage}:null].filter(Boolean).filter(r=>r.percentage>0)})()},ye=c=>({Hadir:"bg-emerald-100 text-emerald-800",Terlambat:"bg-amber-100 text-amber-800",Izin:"bg-blue-100 text-blue-800",Sakit:"bg-purple-100 text-purple-800","Tanpa Keterangan":"bg-red-100 text-red-800","Tidak Hadir":"bg-orange-100 text-orange-800"})[c]||"bg-gray-100 text-gray-800",G=({status:c,percentage:N})=>e.jsxs("span",{className:`px-2 py-1 rounded-full text-center ${ye(c)}`,children:[c," ",N,"%"]}),we=({data:c,initialView:N,month:f})=>{const[p,g]=d.useState(N),[w,m]=d.useState(null),[j,S]=d.useState(null),[b,r]=d.useState(null),[l,V]=d.useState(!1),[H,O]=d.useState(!1),B=d.useContext(W);Q();const y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},I={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},K=()=>{p==="students"?(g("classes"),r(null)):p==="classes"?(g("teachingGroups"),S(null)):p==="teachingGroups"?(g("branches"),m(null)):g("branches")},q=()=>{var u;const i={};return(u=c==null?void 0:c.teachingGroupYears)==null||u.forEach(h=>{const t=h.teachingGroupId.branchId._id;i[t]||(i[t]={name:h.teachingGroupId.branchId.name,attendances:[],uniqueStudents:new Set,semesterTarget:h.semesterTarget}),h.classes.forEach(a=>{i[t].attendances.push(...a.attendances),a.students.forEach(n=>i[t].uniqueStudents.add(n))})}),e.jsxs(k.div,{variants:y,initial:"hidden",animate:"visible",className:"flex flex-col items-stretch",children:[e.jsx("h2",{className:"mx-4 md:mx-8 text-xl font-bold",children:"Semua Desa"}),Object.entries(i).map(([h,t])=>e.jsxs(k.div,{variants:I,className:"card-interactive justify-between",onClick:()=>{m(h),g("teachingGroups")},children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("h3",{className:"text-lg font-medium",children:["Desa ",t.name]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Jumlah Siswa: ",t.uniqueStudents.size," siswa"]})]}),e.jsx("div",{className:"md:hidden flex flex-col md:flex-row gap-2 items-end md:items-end",children:R(t.attendances,l?t.semesterTarget:null,l?t.uniqueStudents.size:null).map((a,n)=>e.jsx(G,{...a},n))}),e.jsx("div",{className:"hidden md:flex flex-col md:flex-row items-end gap-2 md:items-center",children:P(t.attendances,l?t.semesterTarget:null,l?t.uniqueStudents.size:null).map((a,n)=>e.jsx(G,{...a},n))})]},h))]})},_=()=>{var t;const i=c.teachingGroupYears.find(a=>a.teachingGroupId.branchId._id===w),u=c.teachingGroupYears.filter(a=>a.teachingGroupId.branchId._id===w).map(a=>({id:a.teachingGroupId._id,name:a.teachingGroupId.name,attendances:a.classes.flatMap(n=>n.attendances),semesterTarget:a.semesterTarget,uniqueStudents:new Set(a.classes.flatMap(n=>n.students.map(x=>x))).size})),h=(t=c.teachingGroupYears.find(a=>a.teachingGroupId.branchId._id===w))==null?void 0:t.teachingGroupId.branchId.name;return e.jsxs(k.div,{variants:y,initial:"hidden",animate:"visible",className:"flex flex-col items-stretch",children:[e.jsx("div",{className:"mx-4 md:mx-8 flex flex-col",children:e.jsxs("h2",{className:"text-xl font-bold",children:["Desa ",h]})}),u.map(a=>e.jsxs(k.div,{variants:I,className:"card-interactive justify-between",onClick:()=>{S(a.id),g("classes")},children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("h3",{className:"text-lg font-medium",children:["Kelompok ",a.name]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Target Semester: ",i.semesterTarget," hari"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Jumlah Siswa: ",a.uniqueStudents," siswa"]})]}),e.jsx("div",{className:"md:hidden flex flex-col md:flex-row gap-2 items-end md:items-end",children:R(a.attendances,l?a.semesterTarget:null,l?a.uniqueStudents:null).map((n,x)=>e.jsx(G,{...n},x))}),e.jsx("div",{className:"hidden md:flex flex-col md:flex-row items-end gap-2 md:items-center",children:P(a.attendances,l?a.semesterTarget:null,l?a.uniqueStudents:null).map((n,x)=>e.jsx(G,{...n},x))})]},a.id))]})},E=()=>{var t;const i=c.teachingGroupYears.find(a=>a.teachingGroupId._id===j);if(!i)return null;const u=i.classes.map(a=>({id:a._id,name:a.name,branchName:i.teachingGroupId.branchId.name,teachingGroupName:i.teachingGroupId.name,attendances:a.attendances,teachers:a.teachers,uniqueStudents:new Set(a.students.map(n=>n)).size,semesterTarget:i.semesterTarget})),h=(t=c.teachingGroupYears.find(a=>a.teachingGroupId._id===j))==null?void 0:t.teachingGroupId.name;return e.jsxs(k.div,{variants:y,initial:"hidden",animate:"visible",className:"flex flex-col items-stretch",children:[e.jsxs("div",{className:"mx-4 md:mx-8  flex flex-col",children:[e.jsxs("h2",{className:"text-xl font-bold",children:["Kelompok ",h]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Target Semester: ",i.semesterTarget," hari"]})]}),u.map(a=>e.jsxs(k.div,{variants:I,className:"card-interactive justify-between",onClick:()=>{r(a.id),g("students")},children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h3",{className:"text-lg font-medium",children:a.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Jumlah Siswa: ",a.uniqueStudents," siswa"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Total Pertemuan: ",U(a)," hari"]})]}),e.jsx("div",{className:"md:hidden flex flex-col md:flex-row gap-2 items-end md:items-end",children:R(a.attendances,l?a.semesterTarget:null,l?a.uniqueStudents:null).map((n,x)=>e.jsx(G,{...n},x))}),e.jsx("div",{className:"hidden md:flex flex-col md:flex-row items-end gap-2 md:items-center",children:P(a.attendances,l?a.semesterTarget:null,l?a.uniqueStudents:null).map((n,x)=>e.jsx(G,{...n},x))})]},a.id))]})},$=()=>{const i=c.teachingGroupYears.find(t=>t.teachingGroupId._id===j),u=i==null?void 0:i.classes.find(t=>t._id===b);if(!u)return null;console.log(u);const h=u.attendances.reduce((t,a)=>{const n=a.studentId;return t.some(x=>x.id===n._id)||t.push({id:n._id,teachingGroupYearName:i.name,month:f,className:u.name,name:n.name,nis:n.nis,image:n.image,branchName:i.teachingGroupId.branchId.name,teachingGroupName:i.teachingGroupId.name,teachers:u.teachers,attendances:u.attendances.filter(x=>x.studentId._id===n._id),uniqueStudents:new Set(u.students.map(x=>x)).size,semesterTarget:i.semesterTarget}),t},[]);return e.jsxs(k.div,{variants:y,initial:"hidden",animate:"visible",className:"flex flex-col items-stretch",children:[e.jsxs("div",{className:"mx-4 md:mx-8  flex flex-col",children:[e.jsxs("h2",{className:"text-xl font-bold",children:["Kelompok ",u.name]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Target Semester: ",i.semesterTarget," hari"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Jumlah Siswa: ",h.uniqueStudents," siswa"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Total Pertemuan: ",U(u)," hari"]})]}),h.map(t=>e.jsx(k.div,{onClick:()=>O(H===t.id?null:t.id),variants:I,children:e.jsxs("div",{className:"card-basic hover:cursor-pointer hover:bg-gray-50 hover:ring-1 flex-col transition-all duration-200",children:[e.jsxs("div",{className:"flex md:justify-between md:flex-row flex-col justify-start items-start gap-4 ",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[t.image?e.jsx("img",{src:t!=null&&t.image?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/${t.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",alt:t.name,className:"size-14 rounded-full m-auto shrink-0"}):e.jsx(be,{studentName:t.name,clsName:"size-14 rounded-full bg-blue-200 text-blue-500 flex items-center justify-center font-medium m-auto shrink-0 grow-0"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h3",{className:"text-lg font-medium",children:t.name}),e.jsx("h4",{className:"",children:t.nis})]})]}),e.jsx("div",{className:"md:hidden flex flex-col md:flex-row gap-2 items-end md:items-end self-end",children:R(t.attendances,l?t.semesterTarget:null,l?t.uniqueStudents:null).map((a,n)=>e.jsx(G,{...a},n))}),e.jsx("div",{className:"hidden md:flex flex-col md:flex-row items-end gap-2 md:items-center",children:P(t.attendances,l?t.semesterTarget:null,l?t.uniqueStudents:null).map((a,n)=>e.jsx(G,{...a},n))})]}),B.userRole==="teacher"&&H===t.id&&e.jsx("div",{className:"mt-4",onClick:a=>a.stopPropagation(),children:e.jsx(k.div,{children:e.jsx(ve,{studentData:t,noCard:!0})})})]})},t.id))]})};return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsxs("div",{className:"md:mx-8 mt-8 flex justify-between items-center",children:[e.jsxs("button",{onClick:K,className:"flex items-center text-primary hover:text-primary/80 transition-colors disabled:text-gray-400",disabled:p==="branches",children:[e.jsx(Ne,{className:"w-4 h-4 mr-1"}),"Kembali"]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("p",{children:["Kalkulasi Berdasarkan: ",l?e.jsx("strong",{children:"Hari efektif"}):e.jsx("strong",{children:"Hari berjalan"})]}),e.jsx("button",{onClick:()=>V(!l),className:"text-primary px-4 py-2 rounded border border-primary hover:bg-primary hover:text-white transition",children:"Ubah"})]})]}),e.jsxs(Se,{mode:"wait",children:[p==="branches"&&q(),p==="teachingGroups"&&_(),p==="classes"&&E(),p==="students"&&$()]})]})},Pe=()=>{const{isLoading:c,error:N,sendRequest:f,setError:p}=je(),[g,w]=d.useState(),[m,j]=d.useState(null),[S,b]=d.useState(null),[r,l]=d.useState(null),[V,H]=d.useState(null),[O,B]=d.useState(),[y,I]=d.useState(null),[K,q]=d.useState(),[_,E]=d.useState(null),[$,i]=d.useState(),[u,h]=d.useState(null),[t,a]=d.useState(),[n,x]=d.useState(),[z,X]=d.useState();d.useContext(W),Q();const ee={attribute:"Perlengkapan Belajar",attitude:"Sikap",tidiness:"Kerapihan"},J=d.useCallback(async()=>{try{const s=await f("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears/?populate=teachingGroupYears");w(s.academicYears)}catch{}},[f]),F=d.useCallback(async()=>{const s=C=>{const Y=[];C.teachingGroupYears.forEach(v=>{v.classes.forEach(T=>{T.attendances.forEach(M=>{Y.push(M.status)})})});const A=Y.reduce((v,T)=>(v[T]=(v[T]||0)+1,v),{}),L=Y.length;return Object.keys(A).map(v=>({status:v,count:A[v],percentage:Math.round(A[v]/L*100)})).sort((v,T)=>v.status.localeCompare(T.status))},o=C=>{const Y={};return C.teachingGroupYears.forEach(A=>{A.classes.forEach(L=>{L.attendances.forEach(v=>{Object.entries(v.violations).forEach(([T,M])=>{M&&(Y[T]=(Y[T]||0)+1)})})})}),Object.entries(Y).map(([A,L])=>({violation:A,count:L}))},D="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/attendances/reports/",Z=JSON.stringify({academicYearId:m,branchId:y,teachingGroupId:_,classId:u,startDate:S?S.toISOString():null,endDate:r?r.toISOString():null});console.log(Z);try{const C=await f(D,"POST",Z,{"Content-Type":"application/json"});x(null),a(C),x(s(C)),X(o(C))}catch{}},[f,m,y,_,u,S,r]);d.useEffect(()=>{xe("id-ID",fe),J(),F()},[J,F]);const ae=s=>{j(s),B([]),I(null),q([]),E(null),i([]),h(null),s!==""&&se()},se=async()=>{console.log("fetching branches!");try{const s=await f("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/");B(s.branches)}catch{}},te=s=>{I(s),q([]),E(null),i([]),h(null),s!==""&&ne(s)},ne=async s=>{try{const o=await f(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/${s}?populate=true`);q(o.branch.teachingGroups)}catch{}},re=s=>{E(s),i([]),h(null),s!==""&&ie(s)},ie=async s=>{const o=`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/teaching-group/${s}/academic-year/${m}`;try{const D=await f(o);i(D.teachingGroupYear.classes)}catch{}},le=s=>{h(s)},ce=s=>{const[o,D]=s;o&&D&&H(o.toLocaleDateString("id-ID",{day:"2-digit",timeZone:"Asia/Jakarta"})+" - "+D.toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Jakarta"})),b(o),l(D)};return e.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:e.jsxs("main",{className:"max-w-6xl mx-auto",children:[(!g||c)&&e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-dvh",children:e.jsx(de,{size:32})}),g&&e.jsxs("div",{className:"card-basic flex-col gap-4",children:[e.jsx("div",{className:"flex justify-between",children:e.jsx("div",{className:"flex flex-col",children:e.jsx("h2",{className:"text-xl font-bold",children:"Daerah Cikampek"})})}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex flex-row gap-4 items-center",children:[e.jsxs("div",{className:"flex flex-col gap-[18px]",children:[e.jsx("div",{children:"Tahun Ajaran"}),e.jsx("div",{children:"Periode"}),e.jsx("div",{children:"Desa"}),e.jsx("div",{children:"Kelompok"}),e.jsx("div",{children:"Kelas"})]}),e.jsxs("div",{className:"flex flex-col gap-2 ",children:[e.jsxs("select",{value:m||"",onChange:s=>ae(s.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",disabled:!1,children:[!m&&e.jsx("option",{value:"",children:"Pilih"}),g&&g.map((s,o)=>e.jsx("option",{value:s._id,children:s.name},o))]}),e.jsx(pe,{dateFormat:"dd/MM/yyyy",selected:S,onChange:ce,startDate:S,endDate:r,locale:"id-ID",selectsRange:!0,isClearable:!0,withPortal:window.innerWidth<=768,className:`${m&&"pr-8"} border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300`,disabled:!m,placeholderText:`${m?"Masukkan Periode":"Pilih Tahun Ajaran"}`,onFocus:s=>s.target.readOnly=!0}),e.jsxs("select",{value:y||"",onChange:s=>te(s.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",disabled:!m,children:[e.jsx("option",{value:"",children:"Semua"}),O&&O.map((s,o)=>e.jsx("option",{value:s._id,children:s.name},o))]}),e.jsxs("select",{value:_||"",onChange:s=>re(s.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",disabled:!y,children:[e.jsx("option",{value:"",children:"Semua"}),K&&K.map((s,o)=>e.jsx("option",{value:s._id,children:s.name},o))]}),e.jsxs("select",{value:u||"",onChange:s=>le(s.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",disabled:!_,children:[e.jsx("option",{value:"",children:"Semua"}),$&&$.map((s,o)=>e.jsx("option",{value:s._id,children:s.name},o))]})]})]}),e.jsxs("div",{className:"self-start flex flex-row gap-2",children:[e.jsx("div",{className:"flex flex-col gap-1",children:z&&!c&&m&&z.map(({violation:s},o)=>e.jsx("div",{className:"",children:ee[s]||s},o))}),e.jsx("div",{className:"flex flex-col gap-1 ",children:z&&!c&&m&&z.map(({count:s},o)=>e.jsxs("div",{className:"font-bold",children:[": ",s," Temuan"]},o))})]})]}),n&&!c&&m&&e.jsx("div",{className:"",children:e.jsx(ge,{attendanceData:n})})]})]}),t&&!c&&m&&e.jsx(we,{data:t,initialView:"branches",month:V})]})})};export{Pe as default};
