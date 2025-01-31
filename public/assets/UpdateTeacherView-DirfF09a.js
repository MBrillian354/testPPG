import{r as i,A as $,a as D,u as L,j as a,L as f}from"./index-CBFEDf3H.js";import{u as w}from"./http-hook-p1xhn-Qx.js";import{D as S}from"./DynamicForm-DnFPMFU5.js";import{E as O}from"./ErrorCard-DyotIidg.js";import{M as P}from"./ModalBottomClose-CrGWDDNY.js";import{F as q}from"./FileUpload-CSw2wAOH.js";import{I as A}from"./iconify-DvbYNbR5.js";import"./iconify-icon-C1YYA-Pd.js";const J=()=>{const[n,h]=i.useState({title:"",message:"",onConfirm:null}),[b,l]=i.useState(!1),{isLoading:s,error:p,sendRequest:m,setError:g}=w(),[x,B]=i.useState(!1),[e,y]=i.useState(),[j,v]=i.useState(),c=i.useRef(),u=i.useContext($),N=D().id,C=L();i.useEffect(()=>{(async()=>{const d=u.userRole!=="teacher"?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachers/${N}`:`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachers/user/${u.userId}`;try{const t=await m(d);y(t.teacher);const o=new Date(t.teacher.dateOfBirth);v(o.toISOString().split("T")[0])}catch{}})()},[m]);const k=async r=>{const d="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachers/",t=new FormData;t.append("name",r.name),t.append("phone",r.phone),t.append("dateOfBirth",r.dateOfBirth),t.append("gender",r.gender),t.append("address",r.address),t.append("position",r.position),t.append("parentName",r.parentName),t.append("userId",e.userId),t.append("teacherId",e.id),c.current.files[0]&&t.append("image",c.current.files[0]),console.log(r),console.log(t);let o;try{o=await m(d,"PATCH",t),console.log(o)}catch{}h({title:"Berhasil!",message:o.message,onConfirm:null}),l(!0)},I=()=>a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx("button",{onClick:()=>{l(!1),!p&&C(-1)},className:`${n.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:n.onConfirm?"Batal":"Tutup"}),n.onConfirm&&a.jsx("button",{onClick:n.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return a.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[a.jsxs(P,{isOpen:b,onClose:()=>l(!1),title:n.title,footer:a.jsx(I,{}),children:[s&&a.jsx("div",{className:"flex justify-center mt-16",children:a.jsx(f,{size:32})}),!s&&n.message]}),a.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${x?"opacity-0":"opacity-100"}`,children:[p&&a.jsx(O,{error:p,onClear:()=>g(null)}),a.jsx(S,{customDescription:a.jsx("div",{className:"relative",children:a.jsx("div",{className:"",children:a.jsx(q,{ref:c,accept:".jpg,.jpeg,.png",buttonLabel:a.jsx(A,{icon:"jam:upload",width:"24",height:"24"}),buttonClassName:`${s&&"hidden"} border border-gray-600 bg-gray-50 size-9 rounded-full absolute offset bottom-2 right-2 translate-x-1/2 translate-y-1/2`,imgClassName:`${s&&"animate-pulse"} mt-2 rounded-md size-32 md:size-48 shrink-0`,defaultImageSrc:e!=null&&e.image?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/${e.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"})})}),subtitle:"Update Profile Tenaga Pendidik",fields:[{name:"name",label:"Nama Lengkap",placeholder:"Nama Lengkap",type:"text",required:!0,disabled:s,value:(e==null?void 0:e.name)||""},{name:"phone",label:"Nomor WA Aktif",placeholder:"628123456789",type:"phone",required:!0,disabled:s,value:(e==null?void 0:e.phone)||""},{name:"position",label:"Posisi",placeholder:"Guru",type:"select",required:!0,disabled:s,value:(e==null?void 0:e.position)||"",options:[{label:"Guru",value:"teacher"},{label:"Asisten",value:"assistant"}]},{name:"dateOfBirth",label:"Tanggal Lahir",placeholder:"Desa",type:"date",required:!0,disabled:s,value:j||""},{name:"gender",label:"Jenis Kelamin",type:"select",required:!0,disabled:s,value:(e==null?void 0:e.gender)||"",options:[{label:"Laki-Laki",value:"male"},{label:"Perempuan",value:"female"}]},{name:"address",label:"Alamat",type:"textarea",required:!0,disabled:s,value:(e==null?void 0:e.address)||""}],onSubmit:k,disabled:s,reset:!1,footer:!1,button:a.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:a.jsx("button",{type:"submit",className:`button-primary ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?a.jsx(f,{children:"Processing..."}):"Update"})})})]})]})};export{J as default};
