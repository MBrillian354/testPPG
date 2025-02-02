import{b as j,r,A as N,d as y,j as e,L as v,e as m,E as w,N as x,P}from"./index-Baf2cdGO.js";import{I as i}from"./iconify-D6qTasCE.js";const I=()=>{const{isLoading:p,sendRequest:n}=j(),[o,u]=r.useState([]),[s,g]=r.useState(null),[f,b]=r.useState(),d=r.useContext(N),l=y().teacherId,h=t=>new Date(t).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Jakarta"});return r.useEffect(()=>{(async()=>{const c=d.userRole!=="teacher"?`http://103.127.133.63:5000/api/teachers/${l}`:`http://103.127.133.63:5000/api/teachers/user/${d.userId}`;try{const a=await n(c);console.log(a.teacher),b(a.teacher.isProfileComplete),u([{label:"NID",value:a.teacher.nid,icon:e.jsx(i,{icon:"icon-park-outline:id-card-h",width:"24",height:"24"})},{label:"Nomor HP",value:a.teacher.phone,icon:e.jsx(i,{icon:"tabler:phone",width:"24",height:"24"})},{label:"Tanggal Lahir",value:h(a.teacher.dateOfBirth),icon:e.jsx(i,{icon:"material-symbols:date-range-outline",width:"24",height:"24"})},{label:"Jenis Kelamin",value:a.teacher.gender?a.teacher.gender==="male"?"Laki-laki":"Perempuan":"",icon:e.jsx(i,{icon:"tabler:gender-bigender",width:"24",height:"24"})},{label:"Domisili",value:a.teacher.address,icon:e.jsx(i,{icon:"ph:map-pin-bold",width:"24",height:"24"})},{label:"Posisi",value:a.teacher.position?a.teacher.position==="teacher"?"Guru":"Asisten":"",icon:e.jsx(i,{icon:"material-symbols:category-outline-rounded",width:"24",height:"24"})},{label:"Mulai Masa Tugas",value:h(a.teacher.positionStartDate),icon:e.jsx(i,{icon:"lucide:briefcase",width:"24",height:"24"})}]),g({name:a.teacher.name,nid:a.teacher.nid,image:a.teacher.image,branch:a.teacher.userId.teachingGroupId.branchId.name,teachingGroup:a.teacher.userId.teachingGroupId.name})}catch{}})()},[n]),e.jsxs("div",{className:"min-h-screen bg-gray-50 p-4 md:p-8 pb-24",children:[p&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(v,{size:32})}),o.length>0&&s&&e.jsxs(e.Fragment,{children:[!f&&e.jsx(m,{to:`/dashboard/teachers/${l}/update`,children:e.jsx(w,{error:"Profile belum lengkap! Lengkapi",onClear:()=>setError(null)})}),e.jsx("h1",{className:"text-2xl font-medium mb-6 text-gray-700",children:"Biodata Tenaga Pendidik"}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 md:gap-8",children:[e.jsxs("div",{className:"card-basic border mx-0 py-12 flex flex-col items-center flex-1 basis-96 min-w-80 md:max-w-96",children:[e.jsx("img",{src:s!=null&&s.image?`http://103.127.133.63:5000/api/${s.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",alt:"Profile",className:"mt-2 rounded-md size-48 md:size-64 shrink-0"}),e.jsx("h2",{className:"mt-4 text-lg font-normal",children:s.name}),e.jsx("p",{className:"mt-2 text-gray-600",children:s.nid}),e.jsxs("div",{className:"mt-4 flex flex-col md:flex-row gap-2 text-center",children:[e.jsx(x,{to:"",className:"badge-primary",children:s.branch}),e.jsx(x,{to:"",className:"badge-primary",children:s.teachingGroup})]})]}),e.jsxs("div",{className:"card-basic p-8 flex flex-col border mx-0 flex-1 justify-start",children:[e.jsx("h2",{className:"text-lg mb-8",children:"Profile Tenaga Pendidik"}),e.jsx("ul",{className:"space-y-6",children:o.map((t,c)=>e.jsxs("li",{className:"flex items-center gap-2 mb-2",children:[t.icon&&e.jsx("div",{className:"text-primary",children:t.icon}),e.jsxs("span",{className:"font-semibold",children:[t.label,":"]}),e.jsx("span",{className:"font-medium text-gray-700",children:t.value})]},c))}),e.jsx(m,{to:`/dashboard/teachers/${l}/update`,className:"place-self-end",children:e.jsxs("button",{className:"button-primary pl-[11px] mt-6 md:mt-0",children:[e.jsx(P,{className:"w-4 h-4 mr-2"}),"Edit Profile"]})})]})]})]})]})};export{I as default};
