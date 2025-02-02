import{c as T,r as i,w as S,j as e,b as L,u as A,A as D,d as E,L as z,I as H}from"./index-Baf2cdGO.js";import{b as F,e as G}from"./store-scanner-beep-90395-Ca-smzKY.js";import{S as k}from"./SequentialAnimation-DcSdbzVi.js";import{I as C}from"./iconify-D6qTasCE.js";import{S as P}from"./StudentInitial-Cz8IaymN.js";import{C as R}from"./chevron-up-CjItRmBv.js";import{C as K}from"./chevron-down-CmzQzLAd.js";import{A as M}from"./index-DkNG5lM_.js";import{m as O}from"./proxy-HtNcpCG-.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=T("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=T("SquareCheck",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),_=()=>{const a=i.useRef(null),l=i.useRef(null),[x,o]=i.useState(!1),[c,r]=i.useState(null),[d,b]=i.useState(!1),{state:h,dispatch:N}=i.useContext(S),[j,u]=i.useState(0);i.useEffect(()=>{let t;return(async()=>{if(a.current){t=new G(a.current,async n=>{d||await g(n.data)},{returnDetailedScanResult:!0});try{await t.start(),o(!0)}catch(n){console.error("Camera access denied or unavailable:",n)}}else console.error("Video element not found")})(),()=>{t==null||t.destroy(),o(!1)}},[d]),i.useEffect(()=>{u(d?100:0)},[d]);const y=t=>{const s=new Date,n=s.getHours(),m=s.getMinutes(),[w,I]=t.split(":").map(Number);return n>w||n===w&&m>I?"Terlambat":(n<w||n===w&&m<I,"Hadir")},p=t=>{N({type:"SET_STATUS",payload:t})};let f;const g=async t=>{b(!0);const s=h.studentList.some(n=>n.studentId.nis===t);r(s?{nis:t,status:y(h.classStartTime),name:h.studentList.find(n=>n.studentId.nis===t).studentId.name}:"Kode QR tidak dikenali!"),l.current&&l.current.play(),f={id:t,newStatus:y(h.classStartTime),timestamp:Date.now()},p(f),console.log(f),l.current&&await new Promise(n=>{l.current.onended=n}),setTimeout(()=>{b(!1)},1e3)};return e.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full p-4",children:[e.jsxs("div",{className:"relative w-72 h-72 border-2 border-gray-700 shadow-md rounded-md overflow-hidden",children:[d===!0?e.jsx("div",{className:" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:e.jsx(k,{variant:typeof c=="string"?6:2,children:c&&e.jsx("div",{className:"flex-col text-center",children:typeof c=="string"?e.jsx("p",{className:"text-red-500 font-semibold text-base",children:c}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-gray-700 text-lg",children:c.name}),e.jsx("p",{className:"text-gray-700 text-lg",children:c.nis}),e.jsx("p",{className:"text-green-500 font-bold text-2xl",children:c.status})]})})})}):e.jsx("video",{ref:a,className:"absolute inset-0 w-full h-full object-cover",playsInline:!0}),e.jsxs("div",{className:"absolute inset-[8.25%] w-5/6 h-5/6 pointer-events-none",children:[e.jsx("div",{className:"absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white"}),e.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white"}),e.jsx("div",{className:"absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white"})]})]}),e.jsx("audio",{ref:l,src:F,preload:"auto"})]})},$=()=>{const[a,l]=i.useState(new Date);i.useEffect(()=>{const r=setInterval(()=>{l(new Date)},1e3);return()=>{clearInterval(r)}},[]);const x=r=>r.toLocaleDateString("id-ID",{day:"2-digit",timeZone:"Asia/Jakarta"}),o=r=>r.toLocaleDateString("id-ID",{month:"long",year:"numeric",timeZone:"Asia/Jakarta"}),c=r=>r.toLocaleTimeString("id-ID",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:"Asia/Jakarta"});return e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold text-2xl mr-3",children:x(a)}),e.jsxs("span",{className:"mr-2",children:[o(a),","]}),e.jsxs("span",{className:"",children:[c(a)," WIB"]})]})},B=()=>{const{state:a,dispatch:l}=i.useContext(S);return e.jsxs("div",{className:"border-2 border-primary rounded-full p-2 text-medium text-primary",children:[a.studentList.filter(x=>x.status==="Hadir").length,"/",a.studentList.length]})},V=()=>e.jsxs("div",{className:"card-basic mx-4 mb-0 justify-between items-center",children:[e.jsx($,{}),e.jsx(B,{})]}),J=()=>{const{state:a,dispatch:l}=i.useContext(S),x=i.useRef(a.studentList),{isLoading:o,error:c,sendRequest:r}=L(),[d,b]=i.useState({}),h=async t=>{try{const s="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/attendances/",n=JSON.stringify({updates:t});console.log(n);const m=await r(s,"PATCH",n,{"Content-Type":"application/json"});console.log("Successfully updated statuses:",m)}catch(s){console.error("Error updating statuses:",s)}};i.useEffect(()=>{const t=[];a.studentList.forEach((s,n)=>{const m=x.current[n];m&&(m.status!==s.status||m.attributes!==s.attributes||m.violations!==s.violations||m.notes!==s.notes)&&t.push({attendanceId:s._id,status:s.status,attributes:s.attributes,violations:s.violations,notes:s.notes,timestamp:s.timestamp})}),t.length>0&&h(t),x.current=a.studentList},[a.studentList]);const N=(t,s,n=Date.now())=>{l({type:"SET_STATUS",payload:{id:t,newStatus:s,timestamp:n}})},j=(t,s)=>{l({type:"SET_VIOLATIONS",payload:{id:t,violationType:s}})},u=t=>{l({type:"TOGGLE_SELECTED",payload:{id:t}})},y=()=>{l({type:"TOGGLE_SELECT_ALL"})},p=(t,s=Date.now())=>{l({type:"APPLY_BULK_STATUS",payload:{newStatus:t,timestamp:s}})},f=t=>{switch(t){case"Hadir":return"bg-blue-500/50";case"Terlambat":return"bg-yellow-500/50";case"Sakit":return"bg-violet-500/50";case"Izin":return"bg-orange-500/50";default:return"bg-red-500/50"}},g=t=>{b(s=>({...s,[t]:!s[t]}))};return e.jsxs("div",{className:"card-basic mx-4 flex-col box-border",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h1",{className:"text-lg font-medium",children:"Daftar Hadir"}),a.studentList.length!==0&&(o?e.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[e.jsx(Y,{size:24,className:"animate-spin"}),e.jsx("span",{className:"text-xs text-gray-600",children:"Menyimpan otomatis..."})]}):c?e.jsx(C,{icon:"mdi:cloud-alert-outline",width:"24",height:"24"}):e.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[e.jsx(C,{icon:"ci:cloud-check",width:"24",height:"24"}),e.jsx("span",{className:"text-xs text-gray-600",children:"Perubahan tersimpan"})]}))]}),a.studentList.length!==0&&a.isTeachingGroupYearActivated===!0?e.jsxs("div",{className:"inline-flex items-center",children:[e.jsxs("label",{className:"flex items-center cursor-pointer relative",htmlFor:"check-2",children:[e.jsx("input",{type:"checkbox",checked:a.selectAll,onChange:y,className:"peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary",id:"check-2"}),e.jsx("span",{className:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:e.jsx(v,{})})]}),e.jsx("label",{className:"cursor-pointer ml-2 my-2 text-sm",htmlFor:"check-2",children:"Pilih Semua"})]}):e.jsx("div",{className:"italic text-gray-500 mt-2",children:"Daftar hadir kosong"}),e.jsx("div",{className:`flex flex-col ${a.studentList.length!==0&&a.isTeachingGroupYearActivated===!0?"mb-4":""} `,children:a.isTeachingGroupYearActivated===!0&&a.studentList.map(t=>e.jsxs("div",{className:`p-4 pr-0 mx-[-1rem] min-h-20 flex items-center gap-4 border-b ${f(t.status)} transition-all duration-500`,children:[e.jsxs("label",{className:"flex items-center cursor-pointer relative",htmlFor:t.studentId.nis,children:[e.jsx("input",{type:"checkbox",checked:!!t.isSelected,onChange:()=>u(t.studentId.nis),className:"peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary",id:t.studentId.nis,disabled:t.status==="Hadir"||t.status==="Terlambat"}),e.jsx("span",{className:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:e.jsx(v,{})})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex gap-2 items-center mb-2",children:[t.studentId.image?e.jsx("img",{src:`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/${t.studentId.image}`,alt:"Profile",className:"rounded-full size-10 shrink-0"}):e.jsx(P,{studentName:t.studentId.name,clsName:"size-10 rounded-full bg-blue-200 text-blue-500 flex items-center justify-center font-medium"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"uppercase",children:t.studentId.name}),e.jsx("div",{className:"text-xs text-gray-800",children:t.studentId.nis})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("select",{value:t.status||"",onChange:s=>N(t.studentId.nis,s.target.value),className:"border p-1 rounded-full active:ring-2 active:ring-blue-300 h-min",disabled:t.status==="Hadir"||t.status==="Terlambat",children:[e.jsx("option",{value:null,children:"Tanpa Keterangan"}),e.jsx("option",{value:"Hadir",disabled:!0,children:"Hadir"}),e.jsx("option",{value:"Terlambat",disabled:!0,children:"Terlambat"}),e.jsx("option",{value:"Sakit",children:"Sakit"}),e.jsx("option",{value:"Izin",children:"Izin"})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsxs("button",{type:"button",className:`border p-1 px-2 rounded-full active:ring-2 active:ring-blue-300 bg-white flex justify-between items-center ${(t.status==="Sakit"||t.status==="Izin"||t.status==="Tanpa Keterangan")&&"hidden"}`,onClick:()=>g(t.studentId.nis),children:["Temuan",d[t.studentId.nis]?e.jsx(R,{size:16}):e.jsx(K,{size:16})]}),e.jsx(M,{children:d[t.studentId.nis]&&e.jsx(O.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"backInOut"},children:e.jsx("div",{className:"mt-2 mr-4 rounded-md bg-white ring-1 ring-black ring-opacity-5",children:e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsxs("div",{className:"px-2 inline-flex items-center",children:[e.jsxs("label",{className:"flex items-center cursor-pointer p-2 relative",htmlFor:t.studentId.nis+"attribute",children:[e.jsx("input",{type:"checkbox",checked:!!t.violations.attribute,onChange:()=>j(t.studentId.nis,"Attribute"),className:"peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary",id:t.studentId.nis+"attribute",disabled:t.status==="Sakit"||t.status==="Izin"||t.status==="Tanpa Keterangan"}),e.jsx("span",{className:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:e.jsx(v,{})})]}),e.jsx("label",{className:"cursor-pointer text-sm",htmlFor:t.studentId.nis+"attribute",children:"Atribut"})]}),e.jsxs("div",{className:"px-2 inline-flex items-center",children:[e.jsxs("label",{className:"flex items-center cursor-pointer p-2 relative",htmlFor:t.studentId.nis+"attitude",children:[e.jsx("input",{type:"checkbox",checked:!!t.violations.attitude,onChange:()=>j(t.studentId.nis,"Attitude"),className:"peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary",id:t.studentId.nis+"attitude",disabled:t.status==="Sakit"||t.status==="Izin"||t.status==="Tanpa Keterangan"}),e.jsx("span",{className:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:e.jsx(v,{})})]}),e.jsx("label",{className:"cursor-pointer text-sm",htmlFor:t.studentId.nis+"attitude",children:"Sikap"})]}),e.jsxs("div",{className:"px-2 inline-flex items-center",children:[e.jsxs("label",{className:"flex items-center cursor-pointer p-2 relative",htmlFor:t.studentId.nis+"tidiness",children:[e.jsx("input",{type:"checkbox",checked:!!t.violations.tidiness,onChange:()=>j(t.studentId.nis,"tidiness"),className:"peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary",id:t.studentId.nis+"tidiness",disabled:t.status==="Sakit"||t.status==="Izin"||t.status==="Tanpa Keterangan"}),e.jsx("span",{className:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:e.jsx(v,{})})]}),e.jsx("label",{className:"cursor-pointer text-sm",htmlFor:t.studentId.nis+"tidiness",children:"Kerapihan"})]})]})})})})]})]})]})]},t.studentId.nis))}),a.isTeachingGroupYearActivated===!0&&a.studentList.length!==0&&e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>p("Sakit"),className:"btn-mobile-secondary-outline",disabled:a.studentList.filter(t=>t.isSelected===!0).length===0,children:"Sakit"}),e.jsx("button",{onClick:()=>p("Izin"),className:"btn-mobile-danger-outline",disabled:a.studentList.filter(t=>t.isSelected===!0).length===0,children:"Izin"})]})})]})},ae=()=>{const{error:a,sendRequest:l,setError:x}=L(),[o,c]=i.useState(!0),{state:r,dispatch:d,fetchAttendanceData:b}=i.useContext(S),h=A(),j=i.useContext(D).userClassIds,u=E().classId;i.useEffect(()=>{c(!0);let p;u?(p=new Date().toLocaleDateString("en-CA"),b(u,p,d)):h("/scan/select-class"),c(!1)},[j,u]);const y=async()=>{if(c(!0),r.studentList.length===0){const p="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/attendances/create-new-attendances",f=JSON.stringify({classId:u});try{await l(p,"POST",f,{"Content-Type":"application/json"});const g=new Date().toLocaleDateString("en-CA");await b(u,g,d),h(`/scan/class/${u}`,{replace:!0})}catch(g){console.error(g)}}c(!1)};return console.log(r),e.jsxs("div",{className:"flex flex-col pb-24",children:[e.jsx(k,{variant:2,children:e.jsx(V,{})}),o&&e.jsx("div",{className:"flex justify-center mt-16 ",children:e.jsx(z,{size:32})}),!o&&e.jsxs(k,{variant:2,children:[r.studentList.length===0&&!o&&e.jsxs("div",{className:"card-basic m-4 justify-between items-center flex flex-col gap-2",children:[e.jsx("button",{onClick:()=>y(),className:"btn-mobile-primary rounded-full w-full",disabled:r.isTeachingGroupYearActivated===!1,children:"Buat daftar hadir hari ini"}),r.isTeachingGroupYearActivated===!1?e.jsx("span",{className:"text-danger",children:"Tahun ajaran belum aktif, hubungi Kelompok!"}):""]}),r.studentList.length!==0&&!o&&e.jsxs(e.Fragment,{children:[r.isTeachingGroupYearActivated===!0&&e.jsx("div",{className:"card-basic m-4",children:e.jsx(_,{})}),r.isTeachingGroupYearActivated===!1?e.jsx(H,{className:"mx-4 my-12",children:e.jsx("p",{children:"Tahun ajaran belum aktif, hubungi Kelompok!"})}):""]}),e.jsx(J,{})]})]})};export{ae as default};
