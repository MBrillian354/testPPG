import{r as l,a as T,u as $,A as P,b as D,j as e,M as E,L as d,E as I}from"./index-DkRdKdNm.js";const S=()=>{const[r,c]=l.useState({title:"",message:"",className:"",onConfirm:null}),[j,m]=l.useState(!1),[n,x]=l.useState(),{isLoading:t,error:u,sendRequest:o,setError:b}=T();$();const h=l.useContext(P).userTeachingGroupId,p=D().classId,N=p;l.useEffect(()=>{(async()=>{try{const a=await o(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//teachers/teaching-group/${h}`);x(a.teachers)}catch{}})()},[o]);const y=(s,a)=>{const i=async()=>{const w="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//classes/register-teacher",k=JSON.stringify({classId:p,teacherId:a});let f;try{f=await o(w,"POST",k,{"Content-Type":"application/json"}),c({title:"Berhasil!",message:f.message,onConfirm:null});const g=await o(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//teachers/teaching-group/${h}`);x(g.teachers)}catch(g){c({title:"Gagal!",message:g.message,className:"text-red-500",onConfirm:null})}};c({title:"Konfirmasi Pendaftaran",message:`Daftarkan tenaga pendidik ${s}?`,onConfirm:i}),m(!0)},C=s=>s==null?void 0:s.split(" ").map(a=>a[0]).join("").toUpperCase().slice(0,2),v=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{m(!1)},className:`${r.onConfirm?"btn-danger-outline":"button-primary mt-0 "} ${t?"opacity-50 cursor-not-allowed":""}`,disabled:t,children:t?e.jsx(d,{}):r.onConfirm?"Batal":"Tutup"}),r.onConfirm&&e.jsx("button",{onClick:r.onConfirm,className:`button-primary mt-0 ${t?"opacity-50 cursor-not-allowed":""}`,children:t?e.jsx(d,{}):"Ya"})]});return e.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Daftarkan Tenaga Pendidik ke Kelas"}),e.jsxs(E,{isOpen:j,onClose:()=>m(!1),title:r.title,footer:e.jsx(v,{}),children:[t&&e.jsx("div",{className:"flex justify-center mt-16 ",children:e.jsx(d,{size:32})}),e.jsx("div",{className:`${r.className}`,children:!t&&r.message})]}),u&&e.jsx("div",{className:"px-2",children:e.jsx(I,{error:u,onClear:()=>b(null)})}),(!n||t)&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(d,{size:32})}),n&&!t&&e.jsxs(e.Fragment,{children:[n.length===0&&e.jsx("div",{className:"bg-white rounded-md shadow-md p-6 border border-gray-200",children:e.jsx("p",{className:"text-gray-700 text-center",children:"DPD belum menyediakan daftar siswa. Hubungi pihak terkait"})}),n.length>0&&e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map(s=>{const a=s.classIds.some(i=>(i==null?void 0:i._id)===N);return e.jsx("div",{className:`p-4 border rounded-lg transition-all duration-300 ${a?"bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed":"bg-white border-gray-200 hover:ring-4 hover:ring-blue-200 hover:border-blue-500 hover:shadow-xl cursor-pointer"}`,onClick:a?void 0:()=>y(s.name,s.id),children:e.jsxs("div",{className:"flex justify-between items-center gap-2",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[s.image?e.jsx("img",{src:s!=null&&s.image?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//${s.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",alt:s.name,className:"w-10 h-10 rounded-full hidden md:block"}):e.jsx("div",{className:"w-10 h-10 rounded-full bg-green-200 text-green-500 hidden md:flex items-center justify-center font-medium",children:C(s.name)}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h2",{className:"text-lg font-medium",children:s.name}),e.jsx("h3",{className:"text-base font-normal",children:s.nid})]})]}),s.isProfileComplete===!1?e.jsx("span",{className:"text-sm font-medium text-red-500",children:"Lengkapi Profil!"}):a?e.jsx("span",{className:"text-sm font-base text-gray-500",children:"Terdaftar ✓"}):e.jsx("span",{className:"text-sm font-medium text-blue-500 hidden hover:block",children:"Register"})]})},s._id)})})]})]})})};export{S as default};
