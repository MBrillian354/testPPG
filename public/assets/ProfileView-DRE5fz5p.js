import{r as i,a as H,A as K,j as e,M as W,L as m,E as Y,D as Q,J as u}from"./index-CQE6waEO.js";import{F as X}from"./FileUpload-feLv58N1.js";import{W as Z}from"./WarningCard-DUPPdVBu.js";const te=()=>{var C,P,E;const[l,n]=i.useState({title:"",message:"",onConfirm:null}),[S,o]=i.useState(!1),[p,$]=i.useState(""),[h,I]=i.useState(""),[g,O]=i.useState(""),[f,U]=i.useState(""),[a,B]=i.useState(),[x,y]=i.useState(null),[b,A]=i.useState(!1),[j,T]=i.useState(""),[w,z]=i.useState(""),{isLoading:s,error:v,sendRequest:c,setError:N}=H(),d=i.useContext(K),F=i.useRef();i.useEffect(()=>{(async()=>{try{const t=await c(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/${d.userId}`);B(t.users),console.log(t)}catch{}})()},[c,d.userId]);const V=async()=>{const r=new FormData;r.append("image",x);try{const t=await c(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/image-upload/${d.userId}`,"POST",r);console.log(t),n({title:"Berhasil!",message:t.message,onConfirm:null}),o(!0),y(null)}catch(t){n({title:"Gagal!",message:t.message,onConfirm:null}),o(!0)}},D=r=>{$(r.target.value)},G=r=>{I(r.target.value)},L=r=>{O(r.target.value)},M=r=>{U(r.target.value)},J=()=>{A(r=>!r)},k=()=>{n({title:"Verifikasi Email?",message:"Pesan verifikasi akan dikirim ke inbox Anda.",onConfirm:async()=>{try{const t=await c("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/request-verify-email","POST",JSON.stringify({email:a.email,newEmail:a.email,isNewEmail:!1}),{"Content-Type":"application/json",Authorization:"Bearer "+d.token});n({title:"Berhasil!",message:t.message,onConfirm:null}),o(!0)}catch(t){n({title:"Gagal!",message:t.message,onConfirm:null}),o(!0)}}}),o(!0)},R=async()=>{if(!p){z(" Email tidak boleh kosong!");return}n({title:"Ubah Email?",message:"Pesan verifikasi akan dikirim ke email baru Anda.",onConfirm:async()=>{try{const t=await c("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/request-verify-email","POST",JSON.stringify({email:a.email,newEmail:p,isNewEmail:!0}),{"Content-Type":"application/json",Authorization:"Bearer "+d.token});n({title:"Berhasil!",message:t.message,onConfirm:null}),o(!0)}catch(t){n({title:"Gagal!",message:t.message,onConfirm:null}),o(!0)}}}),o(!0)},q=async()=>{if(h!==g){T("Passwords tidak sama");return}n({title:"Ubah Password?",message:"Apakah anda yakin untuk mengubah password?",onConfirm:async()=>{try{const t=await c("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/change-password","POST",JSON.stringify({email:a.email,oldPassword:f,newPassword:h,confirmNewPassword:g}),{"Content-Type":"application/json",Authorization:"Bearer "+d.token});console.log(t)}catch{}}}),o(!0)},_=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{o(!1)},className:`${l.onConfirm?"btn-danger-outline":"button-primary mt-0 "} ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?e.jsx(m,{}):l.onConfirm?"Batal":"Tutup"}),l.onConfirm&&e.jsx("button",{onClick:l.onConfirm,className:`button-primary mt-0 ${s?"opacity-50 cursor-not-allowed":""}`,children:s?e.jsx(m,{}):"Ya"})]});return e.jsx("div",{className:"container mx-auto p-6 max-w-4xl",children:e.jsxs("div",{className:"card-basic flex flex-col items-stretch mb-12",children:[e.jsxs(W,{isOpen:S,onClose:()=>o(!1),title:l.title,footer:e.jsx(_,{}),children:[s&&e.jsx("div",{className:"flex justify-center",children:e.jsx(m,{size:32})}),!s&&l.message]}),!s&&a&&a.isEmailVerified!==!0&&e.jsx(Z,{onClick:k,className:"items-center justify-start hover:cursor-pointer hover:underline",warning:"Verifikasi email Anda agar dapat mengubah password!",onClear:()=>N(null)}),v&&e.jsx(Y,{error:v,onClear:()=>N(null)}),e.jsxs("div",{className:"flex flex-col items-stretch",children:[e.jsx("h1",{className:"text-2xl font-bold self-center mt-4",children:"Profile"}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-around py-2",children:[e.jsx(Q,{customDescription:e.jsx("div",{className:"relative",children:e.jsx("div",{className:"",children:e.jsx(X,{ref:F,accept:".jpg,.jpeg,.png",buttonLabel:e.jsx(u.Icon,{icon:"jam:upload",width:"24",height:"24"}),buttonClassName:`${s&&"hidden"} border border-gray-600 bg-gray-50 size-9 rounded-full absolute offset bottom-7 right-7 md:bottom-9 md:right-9 translate-x-1/2 translate-y-1/2`,imgClassName:`${s&&"animate-pulse"} mt-2 rounded-full size-48 md:size-64 shrink-0`,defaultImageSrc:a!=null&&a.image?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/${a.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",onPick:y})})}),onSubmit:V,disabled:s,reset:!1,footer:!1,button:x&&e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?e.jsx(m,{children:"Processing..."}):"Simpan Gambar"})})}),e.jsxs("div",{className:"flex flex-col self-center",children:[s&&e.jsx("div",{className:"animate-pulse flex space-x-4 mb-6",children:e.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[e.jsx("div",{className:"h-5 bg-slate-500 rounded"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"h-3 bg-slate-300 rounded col-span-2"}),e.jsx("div",{className:"h-3 bg-slate-300 rounded col-span-1"})]}),e.jsx("div",{className:"h-3 bg-slate-300 rounded"}),e.jsx("div",{className:"h-3 bg-slate-300 rounded"})]})]})}),!s&&a&&e.jsxs("div",{className:"mb-4",children:[e.jsx("h2",{className:"text-xl font-medium text-gray-800",children:a.name}),e.jsxs("div",{className:"text-gray-600 flex flex-wrap items-center mb-2 md:mb-0 md:gap-2",children:[a.email," ",a.isEmailVerified?e.jsx(u.Icon,{icon:"tdesign:verified",width:"18",height:"18",style:{color:"#06ff00"}}):e.jsxs("div",{onClick:k,className:"p-1 border rounded-md border-red-500 text-gray-500 active:text-primary hover:cursor-pointer italic flex items-center",children:["Belum verifikasi ",e.jsx(u.Icon,{icon:"ci:triangle-warning",width:"16",height:"16",style:{color:"#ff0000"}})]})]}),e.jsxs("p",{className:"text-gray-600",children:["Desa ",(P=(C=a==null?void 0:a.teachingGroupId)==null?void 0:C.branchId)==null?void 0:P.name]}),e.jsxs("p",{className:"text-gray-600",children:["Kelompok ",((E=a==null?void 0:a.teachingGroupId)==null?void 0:E.name)||""]})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h2",{className:"text-base",children:"Ubah Email"}),e.jsxs("div",{className:"flex items-center justify-start",children:[e.jsx("input",{type:"email",value:p,onChange:D,placeholder:"Email Baru",className:"grow mr-2 p-2 my-1 border rounded-[4px] shadow-sm hover:ring-1 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 "}),e.jsx("button",{type:"button",className:`button-primary m-0 py-2 inline-block ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,onClick:R,children:s?e.jsx(m,{}):"Ubah"})]}),w&&e.jsx("p",{className:"text-red-500",children:w})]}),!s&&a&&a.isEmailVerified&&e.jsxs("div",{className:"mb-4 flex flex-col",children:[e.jsx("h2",{className:"text-base",children:"Ubah Password"}),e.jsx("input",{type:"password",value:f,onChange:M,placeholder:"Password Lama",className:"p-2 my-1 border rounded-[4px] shadow-sm hover:ring-1 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 "}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:b?"text":"password",value:h,onChange:G,placeholder:"Password Baru",className:"p-2 my-1 border rounded-[4px] shadow-sm hover:ring-1 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 w-full"}),e.jsx("span",{onClick:J,className:"absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer",children:b?e.jsx(u.Icon,{icon:"eva:eye-outline",width:"24",height:"24",className:"text-gray-400 hover:text-black transition-all duration-200"}):e.jsx(u.Icon,{icon:"eva:eye-off-outline",width:"24",height:"24",className:"text-gray-400 hover:text-black transition-all duration-200"})})]}),e.jsx("input",{type:"password",value:g,onChange:L,placeholder:"Konfirmasi Password Baru",className:"p-2 my-1 border rounded-[4px] shadow-sm hover:ring-1 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 "}),j&&e.jsx("p",{className:"text-red-500",children:j}),e.jsx("button",{type:"button",className:`button-primary py-2 inline-block ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,onClick:q,children:s?e.jsx(m,{children:"Processing..."}):"Update"})]})]})]})]})]})})};export{te as default};
