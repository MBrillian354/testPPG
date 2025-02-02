import{r as i,b as D,A as I,d as $,u as L,j as a,M as S,L as f,D as M,E as O}from"./index-CtFlY6jk.js";import{F as P}from"./FileUpload-DDQpFQSR.js";import{I as T}from"./iconify-De8XxYzP.js";const R=()=>{const[r,g]=i.useState({title:"",message:"",onConfirm:null}),[b,l]=i.useState(!1),{isLoading:s,error:d,sendRequest:p,setError:u}=D(),[x,q]=i.useState(!1),[e,y]=i.useState(),[j,v]=i.useState(),c=i.useRef(),h=i.useContext(I),N=$().id,C=L();i.useEffect(()=>{(async()=>{const m=h.userRole!=="teacher"?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachers/${N}`:`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachers/user/${h.userId}`;try{const t=await p(m);y(t.teacher);const o=new Date(t.teacher.dateOfBirth);v(o.toISOString().split("T")[0])}catch{}})()},[p]);const k=async n=>{const m="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachers/",t=new FormData;if(t.append("name",n.name),t.append("phone",n.phone),t.append("dateOfBirth",n.dateOfBirth),t.append("gender",n.gender),t.append("address",n.address),t.append("position",n.position),t.append("parentName",n.parentName),t.append("userId",e.userId),t.append("teacherId",e.id),c.current.files[0])t.append("image",c.current.files[0]);else throw u("Tidak ada foto yang dipilih!"),new Error("Tidak ada foto yang dipilih!");console.log(n),console.log(t);let o;try{o=await p(m,"PATCH",t),console.log(o)}catch{}g({title:"Berhasil!",message:o.message,onConfirm:null}),l(!0)},w=()=>a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx("button",{onClick:()=>{l(!1),!d&&C(-1)},className:`${r.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:r.onConfirm?"Batal":"Tutup"}),r.onConfirm&&a.jsx("button",{onClick:r.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return a.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[a.jsxs(S,{isOpen:b,onClose:()=>l(!1),title:r.title,footer:a.jsx(w,{}),children:[s&&a.jsx("div",{className:"flex justify-center mt-16",children:a.jsx(f,{size:32})}),!s&&r.message]}),a.jsx("div",{className:`pb-24 transition-opacity duration-300 ${x?"opacity-0":"opacity-100"}`,children:a.jsx(M,{customDescription:a.jsx("div",{className:"relative",children:a.jsx("div",{className:"",children:a.jsx(P,{ref:c,accept:".jpg,.jpeg,.png",buttonLabel:a.jsx(T,{icon:"jam:upload",width:"24",height:"24"}),buttonClassName:`${s&&"hidden"} border border-gray-600 bg-gray-50 size-9 rounded-full absolute offset bottom-2 right-2 translate-x-1/2 translate-y-1/2`,imgClassName:`${s&&"animate-pulse"} mt-2 rounded-md size-32 md:size-48 shrink-0`,defaultImageSrc:e!=null&&e.image?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/${e.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"})})}),subtitle:"Update Profile Tenaga Pendidik",fields:[{name:"name",label:"Nama Lengkap",placeholder:"Nama Lengkap",type:"text",required:!0,disabled:s,value:(e==null?void 0:e.name)||""},{name:"phone",label:"Nomor WA Aktif",placeholder:"628123456789",type:"phone",required:!0,disabled:s,value:(e==null?void 0:e.phone)||""},{name:"position",label:"Posisi",placeholder:"Guru",type:"select",required:!0,disabled:s,value:(e==null?void 0:e.position)||"",options:[{label:"MT Desa",value:"branchTeacher"},{label:"MT Kelompok",value:"teachingGroupTeacher"},{label:"MT Setempat",value:"localTeacher"},{label:"Asisten",value:"assistant"}]},{name:"dateOfBirth",label:"Tanggal Lahir",placeholder:"Desa",type:"date",required:!0,disabled:s,value:j||""},{name:"gender",label:"Jenis Kelamin",type:"select",required:!0,disabled:s,value:(e==null?void 0:e.gender)||"",options:[{label:"Laki-Laki",value:"male"},{label:"Perempuan",value:"female"}]},{name:"address",label:"Alamat",type:"textarea",required:!0,disabled:s,value:(e==null?void 0:e.address)||""}],onSubmit:k,disabled:s,reset:!1,footer:!1,button:a.jsxs("div",{className:"flex flex-col justify-stretch mt-4",children:[a.jsx("button",{type:"submit",className:`button-primary ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?a.jsx(f,{children:"Processing..."}):"Update"}),d&&a.jsx(O,{error:d,onClear:()=>u(null)})]})})})]})};export{R as default};
