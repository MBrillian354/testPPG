import{r as m,a as A,u as Y,j as e,M as D,L as N,f as y,E as T}from"./index-CQE6waEO.js";import{P as E}from"./plus-B9YC-ubx.js";import{C as G}from"./chevron-down-Bm9guId9.js";const b=i=>{const p=i.substring(0,4),t=i.substring(4);return`${p}/${parseInt(p)+1} ${t==="1"?"Ganjil":"Genap"}`},S=()=>{const[i,p]=m.useState({}),[t,o]=m.useState({title:"",message:"",onConfirm:null}),[C,r]=m.useState(!1),[c,x]=m.useState(),{isLoading:u,sendRequest:n,error:f}=A();Y(),m.useEffect(()=>{(async()=>{try{const s=await n("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears?populate=teachingGroupYears");x(s)}catch{}})()},[n]);const k=a=>{p(s=>({...s,[a]:!s[a]}))},w=(a,s)=>g=>{g.stopPropagation(),console.log(s);const h=async()=>{const j=`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears/activate/${s}`;try{const l=await n(j,"POST",null,{"Content-Type":"application/json"});o({title:"Berhasil!",message:l.message,onConfirm:null});const d=await n("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears?populate=teachingGroupYears");x(d)}catch{}};o({title:"Konfirmasi Aktivasi",message:`Aktivasi tahun ajaran ${b(a)}?`,onConfirm:h}),r(!0)},v=(a,s)=>{console.log(a);const g=async()=>{r(!1);const h=`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears/${s}`;console.log(h);const j=JSON.stringify({academicYearId:s});let l;try{l=await n(h,"DELETE",j,{"Content-Type":"application/json"}),o({title:"Berhasil!",message:l.message,onConfirm:null}),r(!0);const d=await n("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/academicYears?populate=teachingGroupYears");x(d)}catch(d){o({title:"Gagal!",message:d.message,onConfirm:null}),r(!0)}};o({title:"Konfirmasi Penghapusan",message:`Hapus Tahun Ajaran: ${b(a)}?`,onConfirm:g}),r(!0)},$=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>r(!1),className:`${t.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:t.onConfirm?"Batal":"Tutup"}),t.onConfirm&&e.jsx("button",{onClick:t.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs(D,{isOpen:C,onClose:()=>r(!1),title:t.title,footer:e.jsx($,{}),children:[u&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(N,{size:32})}),!u&&t.message]}),e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Daftar Tahun Ajaran"}),e.jsx(y,{to:"/settings/academic/new",children:e.jsxs("button",{className:"inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200",children:[e.jsx(E,{className:"w-4 h-4 mr-2"}),"Tambah"]})})]}),(!c||u)&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(N,{size:32})}),f&&e.jsx(T,{error:f}),c&&!u&&e.jsxs(e.Fragment,{children:[c.academicYears.length===0&&e.jsx("div",{className:"bg-white rounded-md shadow-md p-6 border border-gray-200",children:e.jsxs("p",{className:"text-gray-700 text-center",children:["Belum ada tahun ajaran. ",e.jsx(y,{to:"/settings/academic/new",className:"text-blue-500 hover:underline",children:"Buat baru"})]})}),c.academicYears.length>0&&e.jsx("div",{className:"flex flex-col items-stretch gap-4",children:c.academicYears.map(a=>e.jsxs("div",{className:`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300
                  ${a.isActive?"border-2 border-green-400 ring-2 ring-green-100":"border border-gray-200"}`,children:[e.jsxs("div",{onClick:()=>k(a._id),className:"cursor-pointer p-6 hover:bg-gray-50 transition-colors duration-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h2",{className:"text-xl font-medium text-gray-800",children:b(a.name)}),e.jsx(G,{className:`w-5 h-5 text-gray-500 transition-transform duration-200
                        ${i[a._id]?"transform rotate-180":""}`})]}),e.jsx("div",{className:"flex justify-between items-center text-gray-600",children:e.jsxs("span",{children:[a.teachingGroupYears.length," Kelompok terdaftar"]})}),a.isActive===!0?e.jsx("div",{className:"inline-block mt-2 px-2 py-1 text-sm text-green-600 bg-green-100 rounded",children:"Active"}):e.jsx("button",{className:"btn-primary-outline mt-2",onClick:w(a.name,a._id),children:"Aktifkan"})]}),e.jsx("div",{className:`overflow-hidden transition-all duration-300
                    ${i[a._id]?"max-h-96":"max-h-0"}`,children:e.jsxs("div",{className:"px-6 pb-6 bg-gray-50 border-t border-gray-200",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2 mt-4",children:"Kelompok terdaftar:"}),a.teachingGroupYears.length>0?e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"space-y-2",children:a.teachingGroupYears.map(s=>e.jsx("li",{className:"text-gray-700 bg-white p-3 rounded border border-gray-200 hover:border-gray-300 transition-colors duration-200",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{children:[s.teachingGroupId.name," "]}),e.jsx("div",{className:`p-1 border rounded-md border-gray-300 italic ${s.isActive?"text-green-400 border-green-400":"text-red-400 border-red-400"}`,children:s.isActive?"Aktif":"Nonaktif"})]})},s._id))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx("button",{onClick:()=>v(a.name,a.id),className:"px-2 italic text-gray-500 hover:underline hover:text-red-500 hover:cursor-pointer",children:"Hapus Tahun Ajaran"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-gray-400 italic",children:"Belum ada Kelompok yang mendaftarkan diri"}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx("button",{onClick:()=>v(a.name,a.id),className:"px-2 italic text-gray-500 hover:underline hover:text-red-500 hover:cursor-pointer",children:"Hapus Tahun Ajaran"})})]})]})})]},a._id))})]})]})})};export{S as default};
