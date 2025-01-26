import{r as a,a as T,u as q,j as s,M as E,E as G,D as k,L as v}from"./index-DkRdKdNm.js";const O=()=>{const[u,o]=a.useState(!1),[p,d]=a.useState(!1),[m,D]=a.useState(!1),{isLoading:t,error:n,sendRequest:r,setError:h}=T(),[i,g]=a.useState([]),[b,y]=a.useState(),f=q();a.useEffect(()=>{(async()=>{try{const l=await r("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/teachingGroup");g(l.teachingGroups)}catch{}})()},[r]),a.useEffect(()=>{i&&y([{name:"name",label:"Name Lengkap",placeholder:"",type:"text",required:!0},{name:"email",label:"Email",placeholder:"contoh@gmail.com",type:"email",required:!0},{name:"nis",label:"Nomor Induk Siswa (NIS)",placeholder:"",type:"text",required:!0},{name:"password",label:"Password",placeholder:"",type:"password",required:!0},{name:"role",label:"Akun",type:"select",required:!0,options:[{label:"Peserta Didik",value:"student",disabled:!0}]},{name:"teachingGroupName",label:"Kelompok",type:"select",required:!0,options:i.map(({name:e})=>({label:e,value:e}))}])},[i]);const x=async e=>{const l="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/signup",w=JSON.stringify({name:e.name,email:e.email,password:e.password,role:e.role,teachingGroupName:e.teachingGroupName}),N="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/students/",S=JSON.stringify({name:e.name,email:e.email,nis:e.nis});let j,c;try{j=await r(l,"POST",w,{"Content-Type":"application/json"}),c=await r(N,"POST",S,{"Content-Type":"application/json"}),d(c.message),o(!0)}catch{}};return s.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[s.jsx(E,{isOpen:u,onClose:()=>o(!1),title:"Berhasil!",footer:s.jsx(s.Fragment,{children:s.jsx("button",{onClick:()=>{o(!1),f("/settings/users/")},className:"btn-danger-outline",children:"Tutup"})}),children:p}),n&&s.jsx(G,{error:n,onClear:()=>h(null)}),s.jsx("div",{className:`pb-24 transition-opacity duration-300 ${m?"opacity-0":"opacity-100"}`,children:s.jsx(k,{title:"Tambah Peserta Didik",subtitle:"Sistem Absensi Digital",fields:b||[{name:"name",label:"Name",placeholder:"Nama Lengkap",type:"text",required:!0},{name:"email",label:"Email",placeholder:"Email",type:"email",required:!0},{name:"password",label:"Password",placeholder:"Password",type:"password",required:!0}],onSubmit:x,disabled:t,reset:!1,footer:!1,button:s.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:s.jsx("button",{type:"submit",className:`button-primary ${t?"opacity-50 cursor-not-allowed":""}`,disabled:t,children:t?s.jsx(v,{children:"Processing..."}):"Tambah"})})})})]})};export{O as default};
