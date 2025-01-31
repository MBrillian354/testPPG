import{j as e,b as d,r as o,A as p,L as g}from"./index-CBFEDf3H.js";import{u as j}from"./http-hook-p1xhn-Qx.js";import{I as m}from"./InfoCard-CftPNzxO.js";import{a as f}from"./attendanceCount-EC2MUpAe.js";import{L as N}from"./lock-CzK2feI_.js";import{C as b,a as y}from"./clock-Cn075oSk.js";import{G as v}from"./graduation-cap-CHibryFN.js";import{U as C}from"./users-BZmgMQSK.js";import"./createLucideIcon-BukOYC3u.js";const w=({data:r})=>{const n=s=>{const[a,t]=s.split(":");return new Date(0,0,0,a,t).toLocaleTimeString("id-ID",{hour:"numeric",minute:"numeric",hour12:!1})};let i=0;return e.jsx("div",{className:"p-4 bg-gray-50 min-h-screen",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16",children:r.classes.map(s=>{var t,l;const a=(l=(t=s==null?void 0:s.teachingGroupYearId)==null?void 0:t.academicYearId)==null?void 0:l.isActive;if(console.log(s),a)return i++,e.jsxs("div",{className:"bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden",children:[e.jsx("div",{className:"p-4 border-b border-gray-100",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:s.name}),s.isLocked&&e.jsx("span",{className:"inline-flex items-center p-2 rounded-full text-xs font-medium bg-green-200 text-green-700",children:e.jsx(N,{size:16})})]})}),e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(b,{className:"w-4 h-4 mr-2"}),e.jsxs("span",{className:"text-sm",children:["Mulai Kelas ",n(s.startTime)]})]}),e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(v,{className:"w-4 h-4 mr-2"}),e.jsxs("span",{className:"text-sm",children:[s.teachers.length," Guru"]})]}),e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(C,{className:"w-4 h-4 mr-2"}),e.jsxs("span",{className:"text-sm",children:[s.students.length," Siswa"]})]}),e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(y,{className:"w-4 h-4 mr-2"}),e.jsx("span",{className:"text-sm",children:`${f(s)} / ${s.teachingGroupYearId.semesterTarget} Pertemuan Terlaksana`})]})]}),e.jsx("div",{className:"p-4 border-t border-gray-100",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(d,{to:`/dashboard/classes/${s._id}`,className:"grow",children:e.jsx("button",{className:"btn-mobile-primary-round w-full",children:"Detail Kelas"})}),e.jsx(d,{to:`/attendance/history/class/${s._id}`,className:"grow",children:e.jsx("button",{className:"btn-mobile-primary-round w-full",children:"Riwayat Absensi"})})]})})]},s._id)})}),i===0&&e.jsx(m,{className:"mx-4 mt-12",children:e.jsx("p",{children:"Belum terdaftar di kelas manapun!"})})]})})},R=()=>{const[r,n]=o.useState(),{isLoading:i,error:s,sendRequest:a,clearError:t}=j(),x=o.useContext(p).userClassIds;return o.useEffect(()=>{(async()=>{const h="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/classes/get-by-ids",u=JSON.stringify({classIds:x});console.log("fetching classes this teacher enrolled...");try{const c=await a(h,"POST",u,{"Content-Type":"application/json"});n(c),console.log("fetching classes complete..."),console.log(c)}catch{}})()},[a]),e.jsxs("div",{children:[!r&&i&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(g,{size:32})}),s&&e.jsx(m,{className:"mx-4 mt-12",children:e.jsx("p",{children:"Belum terdaftar di kelas manapun!"})}),r&&e.jsx(w,{data:r})]})};export{R as default};
