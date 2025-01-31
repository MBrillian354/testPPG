import{r as g,A as P,u as H,j as e,b as k,L as y}from"./index-CBFEDf3H.js";import{u as K}from"./http-hook-p1xhn-Qx.js";import{M as S}from"./ModalBottomClose-CrGWDDNY.js";import{E as O}from"./ErrorCard-DyotIidg.js";import{P as B}from"./plus-CgOwzzsp.js";import{T as _}from"./trash-DWz3AGdx.js";import{L as z}from"./lock-CzK2feI_.js";import{L as R}from"./lock-open-DyOJoJj1.js";import"./createLucideIcon-BukOYC3u.js";const Z=()=>{const[u,n]=g.useState({title:"",message:"",onConfirm:null}),[C,m]=g.useState(!1),[v,w]=g.useState(null),[h,x]=g.useState(),{isLoading:f,error:N,sendRequest:o,setError:T}=K(),c=g.useContext(P),b=H();g.useEffect(()=>{(async()=>{try{const s=await o(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/teachingGroup/${c.userTeachingGroupId}`);x(s),console.log(s)}catch{}})()},[o]);const j=a=>{const s=a.substring(0,4),t=a.substring(4);return`${s}/${parseInt(s)+1} ${t==="1"?"Ganjil":"Genap"}`},G=a=>{w(v===a?null:a)},Y=(a,s,t)=>d=>{if(d.stopPropagation(),console.log(a),console.log(t),t>0){const l=async()=>{console.log("Updating ... ");const p="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/activate",r=JSON.stringify({teachingGroupYearId:a,semesterTarget:20});console.log(r);let i;try{i=await o(p,"PATCH",r,{"Content-Type":"application/json"})}catch(L){n({title:"Gagal!",message:L.message,onConfirm:null}),m(!0)}n({title:"Berhasil!",message:i.message,onConfirm:null});const E=await o(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/teachingGroup/${c.userTeachingGroupId}`);x(E)};n({title:"Konfirmasi",message:`Aktifkan tahun ajaran ${j(s)}?`,onConfirm:l}),m(!0)}else b(`/settings/academic/${a}`)},$=(a,s,t)=>{a.stopPropagation();const d=async()=>{const l="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/deactivate",p=JSON.stringify({teachingGroupYearId:t});let r;try{r=await o(l,"PATCH",p,{"Content-Type":"application/json"}),n({title:"Berhasil!",message:r.message,onConfirm:null});const i=await o(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/teachingGroup/${c.userTeachingGroupId}`);x(i)}catch(i){n({title:"Gagal!",message:i.message,onConfirm:null})}};n({title:"Konfirmasi",message:`Nonaktifkan tahun ajaran ${j(s)}?`,onConfirm:d}),m(!0)},A=(a,s,t)=>{a.stopPropagation(),console.log(t);const d=async()=>{const l="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/",p=JSON.stringify({teachingGroupYearId:t});let r;try{r=await o(l,"DELETE",p,{"Content-Type":"application/json"}),n({title:"Berhasil!",message:r.message,onConfirm:null});const i=await o(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/teachingGroup/${c.userTeachingGroupId}`);x(i)}catch(i){n({title:"Gagal!",message:i.message,onConfirm:null})}};n({title:"Konfirmasi Penghapusan",message:`Hapus tahun ajaran ${j(s)}?`,onConfirm:d}),m(!0)},I=(a,s,t)=>{a.stopPropagation(),console.log(t);const d=async()=>{const l="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/classes/";console.log(l);const p=JSON.stringify({classId:t});let r;try{r=await o(l,"DELETE",p,{"Content-Type":"application/json"}),n({title:"Berhasil!",message:r.message,onConfirm:null});const i=await o(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/teachingGroup/${c.userTeachingGroupId}`);x(i)}catch(i){n({title:"Gagal!",message:i.message,onConfirm:null})}};n({title:"Konfirmasi Penghapusan",message:`Hapus Kelas: ${s}?`,onConfirm:d}),m(!0)},D=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>m(!1),className:`${u.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:u.onConfirm?"Batal":"Tutup"}),u.onConfirm&&e.jsx("button",{onClick:u.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:e.jsxs("main",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Daftar Tahun Ajaran Kelompok"}),c.userRole==="admin kelompok"&&e.jsx(k,{to:"/settings/academic/new",children:e.jsxs("button",{className:"button-primary pl-[8px]",children:[e.jsx(B,{className:"w-4 h-4 mr-1"}),"Tambah"]})})]}),e.jsxs(S,{isOpen:C,onClose:()=>m(!1),title:u.title,footer:e.jsx(D,{}),children:[f&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(y,{size:32})}),!f&&u.message]}),(!h||f)&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(y,{size:32})}),N&&e.jsx(O,{error:N,onClear:()=>T(null)}),h&&!f&&e.jsxs(e.Fragment,{children:[h.teachingGroupYears.length===0&&e.jsx("div",{className:"bg-white rounded-md shadow-md p-6 border border-gray-200",children:e.jsx("p",{className:"text-gray-700 text-center",children:"Belum ada tahun ajaran terdaftar."})}),h.teachingGroupYears.length>0&&e.jsx("div",{className:"flex flex-col items-stretch gap-4",children:h.teachingGroupYears.map(a=>e.jsxs("div",{className:`bg-white rounded-md shadow-md overflow-hidden transition-all duration-200
                  ${a.academicYearId.isActive===!0,""}`,children:[e.jsxs("div",{onClick:()=>G(a._id),className:"p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200",children:[e.jsxs("div",{className:"flex md:justify-between items-start md:flex-row flex-col md:items-center w-full",children:[e.jsxs("div",{className:"flex gap-2 flex-row flex-wrap",children:[e.jsx("h2",{className:"text-xl font-medium text-gray-800",children:j(a.academicYearId.name)}),e.jsxs("div",{className:"flex gap-2",children:[a.academicYearId.isActive&&e.jsxs("div",{className:"inline-block px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded",children:[a.academicYearId.isActive,"Semester Berjalan"]}),e.jsx("div",{className:`inline-block px-2 py-1 text-sm ${a.isActive?"text-green-600 bg-green-100":a.academicYearId.isActive?"text-red-600 bg-red-100":"text-gray-600 bg-gray-100"} rounded`,children:a.isActive?"Aktif":a.academicYearId.isActive?"Nonaktif":"Semester Lewat"})]})]}),a.academicYearId.isActive&&c.userRole==="admin kelompok"&&!a.isActive?e.jsxs("div",{className:"flex justify-between md:justify-end items-center w-full",children:[e.jsxs("div",{className:"flex gap-2 my-6 md:my-0",children:[e.jsx("div",{onClick:()=>b("/settings/academic/classes/new",{state:a.id}),className:"btn-primary-outline m-0 text-gray-700",children:"Tambah Kelas"}),e.jsx("div",{onClick:Y(a._id,a.name,a.semesterTarget),className:"btn-primary-outline m-0 text-gray-700",children:"Aktifkan"})]}),e.jsx("button",{onClick:s=>A(s,a.academicYearId.name,a._id),className:"p-3 rounded-full text-gray-400 hover:bg-gray-200 hover:text-red-500 transition",children:e.jsx(_,{size:20})})]}):c.userRole==="admin kelompok"&&a.isActive&&e.jsx("div",{onClick:s=>$(s,a.academicYearId.name,a._id),className:"btn-danger-outline m-0 text-gray-700 mt-4 md:mt-0",children:"Nonaktifkan"})]}),a.semesterTarget&&e.jsxs("div",{className:"mt-2 text-gray-700",children:["Target Pertemuan dalam Semester: ",a.semesterTarget]}),e.jsxs("div",{className:"mt-2 text-gray-700",children:["Jumlah Kelas: ",a.classes.length]})]}),e.jsx("div",{className:`overflow-hidden transition-all duration-300 ${v===a._id?"max-h-96":"max-h-0"}`,children:e.jsx("div",{className:"border-t",children:a.classes.length>0?e.jsx("ul",{className:"",children:a.classes.map(s=>e.jsxs("li",{className:"flex justify-start",children:[e.jsx(k,{to:`/dashboard/classes/${s.id}`,className:"grow",children:e.jsxs("div",{className:"flex justify-start items-center gap-2 p-4 border-t text-gray-700 border-gray-200 bg-white hover:bg-gray-100 hover:cursor-pointer",children:[e.jsx("div",{children:s.name}),a.academicYearId.isActive&&e.jsx("div",{className:`flex justify-center items-center p-1 border rounded-md border-gray-300 italic size-6 ${s.isLocked?"text-green-400 border-green-400":"text-red-400 border-red-400"}`,children:s.isLocked?e.jsx(z,{size:16}):e.jsx(R,{size:16})})]})}),c.userRole==="admin kelompok"&&a.academicYearId.isActive&&!a.isActive&&e.jsx("button",{onClick:t=>I(t,s.name,s.id),className:"border-t px-4 italic text-gray-500 hover:underline hover:text-red-500 hover:cursor-pointer",children:"Hapus Kelas"})]},s._id))}):e.jsxs("p",{className:"p-4 text-gray-500 italic",children:["Tidak ada riwayat kelas.",a.academicYearId.isActive&&e.jsx("span",{onClick:()=>b("/settings/academic/classes/new",{state:a.id}),className:"text-gray-800 hover:underline hover:cursor-pointer",children:"Tambah Kelas"})]})})})]},a._id))})]})]})})};export{Z as default};
