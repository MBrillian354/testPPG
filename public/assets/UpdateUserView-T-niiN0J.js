import{a as x,r as n,b as y,j as e,L as d,E as j,D as v}from"./index-DkRdKdNm.js";const N=()=>{const{isLoading:t,error:l,sendRequest:r,setError:u}=x(),[m,G]=n.useState(!1),[p,h]=n.useState([]),[a,b]=n.useState(),i=y().userId;n.useEffect(()=>{(async()=>{try{const s=await r(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/${i}`);b(s.users),console.log(s),console.log(s.users)}catch{}})(),(async()=>{try{const s=await r("https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/levels/branches/teaching-groupes/");h(s.teachingGroups)}catch{}})()},[r]);const f=async o=>{const c=`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/${i}`,s=JSON.stringify({name:o.name,role:o.role,teachingGroupId:o.teachingGroupId});console.log(s);try{const g=await r(c,"PATCH",s,{"Content-Type":"application/json"})}catch{}};return!a&&!t?e.jsx("div",{className:"m-4 flex justify-center",children:e.jsx("div",{className:"card-basic flex flex-col items-center",children:e.jsx("h2",{className:"font-semibold",children:"404 place not found!"})})}):e.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[!a&&t&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(d,{size:32})}),e.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${m?"opacity-0":"opacity-100"}`,children:[l&&e.jsx(j,{error:l,onClear:()=>u(null)}),!t&&a&&e.jsx(v,{title:a.role==="admin"?"Ubah Data Admin":a.role==="teachingGroupAdmin"?"Ubah Data Admin Kelompok":a.role==="teacher"?"Ubah Data Guru":"Ubah Data Peserta Didik",subtitle:"Sistem Absensi Digital",fields:[{name:"name",label:"Nama",placeholder:"Nama Lengkap",type:"text",required:!0,value:a.name},...a.role==="admin"?[{name:"role",label:"Jenis Akun",placeholder:"admin",type:"select",required:!0,value:a.role,options:[{label:"Admin",value:"admin"},{label:"Admin Kelompok",value:"teachingGroupAdmin"}]}]:[],{name:"teachingGroupId",label:"Kelompok",placeholder:"Kelompok",type:"select",required:!0,value:a.teachingGroupId.name,options:p.map(({name:o})=>({label:o,value:o}))}],onSubmit:f,disabled:t,reset:!1,footer:!1,button:e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${t?"opacity-50 cursor-not-allowed":""}`,disabled:t,children:t?e.jsx(d,{children:"Processing..."}):"Update"})})})]})]})};export{N as default};
