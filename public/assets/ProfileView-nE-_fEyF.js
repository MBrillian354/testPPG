import{r as t,a as P,A as U,j as e,M as F,L as c,E as B,D as O,B as z}from"./index-DkRdKdNm.js";import{F as D}from"./FileUpload-BExI4oWS.js";const A=()=>{var g,j,b;const[r,n]=t.useState({title:"",message:"",onConfirm:null}),[y,i]=t.useState(!1),[u,N]=t.useState("");t.useState(""),t.useState(""),t.useState("");const[a,v]=t.useState(),[h,p]=t.useState(null);t.useState(!1),t.useState("");const[x,C]=t.useState(""),{isLoading:s,error:f,sendRequest:m,setError:E}=P(),d=t.useContext(U),w=t.useRef();t.useEffect(()=>{(async()=>{try{const l=await m(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//users/${d.userId}`);v(l.users),console.log(l)}catch{}})()},[m,d.userId]);const k=async()=>{const o=new FormData;o.append("image",h);try{const l=await m(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//users/image-upload/${d.userId}`,"POST",o);console.log(l),n({title:"Berhasil!",message:l.message,onConfirm:null}),i(!0),p(null)}catch(l){n({title:"Gagal!",message:l.message,onConfirm:null}),i(!0)}},S=o=>{N(o.target.value)},$=async()=>{if(!u){C(" Email tidak boleh kosong!");return}n({title:"Ubah Email?",message:"Pesan verifikasi akan dikirim ke email baru Anda.",onConfirm:async()=>{try{const l=await m("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//users/request-verify-email","POST",JSON.stringify({email:a.email,newEmail:u,isNewEmail:!0}),{"Content-Type":"application/json",Authorization:"Bearer "+d.token});n({title:"Berhasil!",message:l.message,onConfirm:null}),i(!0)}catch(l){n({title:"Gagal!",message:l.message,onConfirm:null}),i(!0)}}}),i(!0)},I=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{i(!1)},className:`${r.onConfirm?"btn-danger-outline":"button-primary mt-0 "} ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?e.jsx(c,{}):r.onConfirm?"Batal":"Tutup"}),r.onConfirm&&e.jsx("button",{onClick:r.onConfirm,className:`button-primary mt-0 ${s?"opacity-50 cursor-not-allowed":""}`,children:s?e.jsx(c,{}):"Ya"})]});return e.jsx("div",{className:"container mx-auto p-6 max-w-4xl",children:e.jsxs("div",{className:"card-basic flex flex-col items-stretch mb-12",children:[e.jsxs(F,{isOpen:y,onClose:()=>i(!1),title:r.title,footer:e.jsx(I,{}),children:[s&&e.jsx("div",{className:"flex justify-center",children:e.jsx(c,{size:32})}),!s&&r.message]}),f&&e.jsx(B,{error:f,onClear:()=>E(null)}),e.jsxs("div",{className:"flex flex-col items-stretch",children:[e.jsx("h1",{className:"text-2xl font-bold self-center mt-4",children:"Profile"}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-around py-2",children:[e.jsx(O,{customDescription:e.jsx("div",{className:"relative",children:e.jsx("div",{className:"",children:e.jsx(D,{ref:w,accept:".jpg,.jpeg,.png",buttonLabel:e.jsx(z.Icon,{icon:"jam:upload",width:"24",height:"24"}),buttonClassName:`${s&&"hidden"} border border-gray-600 bg-gray-50 size-9 rounded-full absolute offset bottom-7 right-7 md:bottom-9 md:right-9 translate-x-1/2 translate-y-1/2`,imgClassName:`${s&&"animate-pulse"} mt-2 rounded-full size-48 md:size-64 shrink-0`,defaultImageSrc:a!=null&&a.image?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//${a.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",onPick:p})})}),onSubmit:k,disabled:s,reset:!1,footer:!1,button:h&&e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?e.jsx(c,{children:"Processing..."}):"Simpan Gambar"})})}),e.jsxs("div",{className:"flex flex-col self-center",children:[s&&e.jsx("div",{className:"animate-pulse flex space-x-4 mb-6",children:e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-5 bg-slate-500 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-3 bg-slate-300 rounded col-span-2"}),e.jsx("div",{className:"h-3 bg-slate-300 rounded col-span-1"})]}),e.jsx("div",{className:"h-3 bg-slate-300 rounded"}),e.jsx("div",{className:"h-3 bg-slate-300 rounded"})]})]})}),!s&&a&&e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-xl font-medium text-gray-800",children:a.name}),e.jsx("p",{className:"text-gray-600",children:a.email}),e.jsxs("p",{className:"text-gray-600",children:["Desa ",(j=(g=a==null?void 0:a.teachingGroupId)==null?void 0:g.branchId)==null?void 0:j.name]}),e.jsxs("p",{className:"text-gray-600",children:["Kelompok ",((b=a==null?void 0:a.teachingGroupId)==null?void 0:b.name)||""]})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h2",{className:"text-base",children:"Ubah Email"}),e.jsxs("div",{className:"flex items-center justify-start",children:[e.jsx("input",{type:"email",value:u,onChange:S,placeholder:"Email Baru",className:"grow mr-2 p-2 my-1 border rounded-[4px] shadow-sm hover:ring-1 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 "}),e.jsx("button",{type:"button",className:`button-primary m-0 py-2 inline-block ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,onClick:$,children:s?e.jsx(c,{}):"Ubah"})]}),x&&e.jsx("p",{className:"text-red-500",children:x})]})]})]})]})]})})};export{A as default};
