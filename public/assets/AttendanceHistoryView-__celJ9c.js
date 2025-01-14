import{j as e,b as u,r as d,A as p,L as g}from"./index-CUVeWTx6.js";import{u as j}from"./http-hook-BiPXVO_k.js";import{I as m}from"./InfoCard-Clv7xmeM.js";import{L as f}from"./lock-gAUrXvtR.js";import{C as N,a as y}from"./clock-CCJQ3yTA.js";import{G as b}from"./graduation-cap-Bb73ml_6.js";import{U as v}from"./users-BKz1bFfR.js";import"./createLucideIcon-HjXMmH3n.js";const C=({data:t})=>{const l=s=>{const[n,a]=s.split(":");return new Date(0,0,0,n,a).toLocaleTimeString("id-ID",{hour:"numeric",minute:"numeric",hour12:!1})},c=s=>{const n=s.attendances,a=new Set;return n.forEach(r=>{a.add(r.forDate)}),a.size};let i=0;return e.jsx("div",{className:"p-4 bg-gray-50 min-h-screen",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.classes.map(s=>{var a,r;if((r=(a=s==null?void 0:s.teachingGroupYearId)==null?void 0:a.academicYearId)==null?void 0:r.isActive)return i++,e.jsxs("div",{className:"bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden",children:[e.jsx("div",{className:"p-4 border-b border-gray-100",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:s.name}),s.isLocked&&e.jsx("span",{className:"inline-flex items-center p-2 rounded-full text-xs font-medium bg-green-200 text-green-700",children:e.jsx(f,{size:16})})]})}),e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(N,{className:"w-4 h-4 mr-2"}),e.jsxs("span",{className:"text-sm",children:["Mulai Kelas ",l(s.startTime)]})]}),e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(b,{className:"w-4 h-4 mr-2"}),e.jsxs("span",{className:"text-sm",children:[s.teachers.length," Guru"]})]}),e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(v,{className:"w-4 h-4 mr-2"}),e.jsxs("span",{className:"text-sm",children:[s.students.length," Siswa"]})]}),e.jsxs("div",{className:"flex items-center text-gray-600",children:[e.jsx(y,{className:"w-4 h-4 mr-2"}),e.jsx("span",{className:"text-sm",children:`${c(s)} Pertemuan`})]})]}),e.jsx("div",{className:"p-4 border-t border-gray-100",children:e.jsx("div",{className:"flex gap-2",children:e.jsx(u,{to:`/dashboard/classes/${s._id}`,className:"grow",children:e.jsx("button",{className:"btn-mobile-primary-round w-full",children:"Detail Kelas"})})})})]},s._id)})}),i===0&&e.jsx(m,{className:"mx-4 mt-12",children:e.jsx("p",{children:"Belum terdaftar di kelas manapun!"})})]})})},Y=()=>{const[t,l]=d.useState(),{isLoading:c,error:i,sendRequest:s,clearError:n}=j(),r=d.useContext(p).userClassIds;return d.useEffect(()=>{(async()=>{const x="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/classes/get-by-ids",h=JSON.stringify({classIds:r});console.log("fetching classes this teacher enrolled...");try{const o=await s(x,"POST",h,{"Content-Type":"application/json"});l(o),console.log("fetching classes complete..."),console.log(o)}catch{}})()},[s]),e.jsxs("div",{children:[!t&&c&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(g,{size:32})}),i&&e.jsx(m,{className:"mx-4 mt-12",children:e.jsx("p",{children:"Belum terdaftar di kelas manapun!"})}),t&&e.jsx(C,{data:t})]})};export{Y as default};
