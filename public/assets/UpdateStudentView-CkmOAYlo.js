import{r,a as L,b as $,u as k,j as e,M as w,L as f,E as I,D as O}from"./index-DkRdKdNm.js";import{F as P}from"./FileUpload-BExI4oWS.js";import{I as T}from"./iconify-DOAsy9-i.js";const S=()=>{const[n,h]=r.useState({title:"",message:"",onConfirm:null}),[g,o]=r.useState(!1),{isLoading:t,error:d,sendRequest:m,setError:b}=L(),[x,q]=r.useState(!1),[a,j]=r.useState(),[y,N]=r.useState(),c=r.useRef(),p=$().studentId,v=k();r.useEffect(()=>{(async()=>{try{const l=await m(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//students/${p}`);j(l.student);const s=new Date(l.student.dateOfBirth);N(s.toISOString().split("T")[0])}catch{}})()},[m,p]);const C=async i=>{const l=`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//students/${p}`,s=new FormData;s.append("name",i.name),s.append("dateOfBirth",i.dateOfBirth),s.append("gender",i.gender),s.append("parentName",i.parentName),s.append("address",i.address),c.current.files[0]&&s.append("image",c.current.files[0]);let u;try{u=await m(l,"PATCH",s)}catch{}h({title:"Berhasil!",message:u.message,onConfirm:null}),o(!0)},D=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{o(!1),!d&&v(-1)},className:`${n.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:n.onConfirm?"Batal":"Tutup"}),n.onConfirm&&e.jsx("button",{onClick:n.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[e.jsxs(w,{isOpen:g,onClose:()=>o(!1),title:n.title,footer:e.jsx(D,{}),children:[t&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(f,{size:32})}),!t&&n.message]}),d&&e.jsx(I,{error:d,onClear:()=>b(null)}),e.jsx("div",{className:`pb-24 transition-opacity duration-300 ${x?"opacity-0":"opacity-100"}`,children:e.jsx(O,{customDescription:e.jsx("div",{className:"relative",children:e.jsx("div",{className:"",children:e.jsx(P,{ref:c,accept:".jpg,.jpeg,.png",buttonLabel:e.jsx(T,{icon:"jam:upload",width:"24",height:"24"}),buttonClassName:`${t&&"hidden"} border border-gray-600 bg-gray-50 size-9 rounded-full absolute offset bottom-2 right-2 translate-x-1/2 translate-y-1/2`,imgClassName:`${t&&"animate-pulse"} mt-2 rounded-md size-32 md:size-48 shrink-0`,defaultImageSrc:a!=null&&a.image?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api//${a.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"})})}),subtitle:"Update Profile Peserta Didik",fields:[{name:"name",label:"Nama Lengkap",placeholder:"Nama Lengkap",type:"text",required:!0,disabled:t,value:(a==null?void 0:a.name)||""},{name:"dateOfBirth",label:"Tanggal Lahir",placeholder:"Desa",type:"date",required:!0,disabled:t,value:y||""},{name:"gender",label:"Jenis Kelamin",type:"select",required:!0,disabled:t,value:(a==null?void 0:a.gender)||"",options:[{label:"Laki-Laki",value:"male"},{label:"Perempuan",value:"female"}]},{name:"parentName",label:"Nama Orang Tua",type:"text",required:!0,disabled:t,value:(a==null?void 0:a.parentName)||""},{name:"address",label:"Alamat",type:"textarea",required:!0,disabled:t,value:(a==null?void 0:a.address)||""}],onSubmit:C,disabled:t,reset:!1,footer:!1,button:e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${t?"opacity-50 cursor-not-allowed":""}`,disabled:t,children:t?e.jsx(f,{children:"Processing..."}):"Update"})})})})]})};export{S as default};
