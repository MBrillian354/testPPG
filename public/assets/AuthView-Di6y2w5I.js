import{r as p,a as N,A as v,u as I,j as s,E as C,D as E,L as G}from"./index-b338pBx7.js";import{l as P}from"./ppgcikampek-CM1E7Efd.js";const A=()=>{const[m,$]=p.useState(!1),{isLoading:o,error:n,sendRequest:i,setError:g}=N(),h=p.useContext(v),x=I(),y=[{name:"email",label:"Email",placeholder:"Email",type:"email",required:!0},{name:"password",label:"Password",placeholder:"Password",type:"password",required:!0}],b=async c=>{var d,u;const j="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/users/login",w=JSON.stringify({email:c.email,password:c.password});let e,l;try{e=await i(j,"POST",w,{"Content-Type":"application/json"});try{l=await i(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachingGroupYears/teachingGroup/${e.user.teachingGroupId.id}`)}catch{}let t;l&&(t=l.teachingGroupYears.find(a=>a.academicYearId.isActive));let r;if(e.user.role==="teacher")try{r=await i(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachers/user/${e.user.id}`),console.log(r)}catch(a){console.log(a)}console.log("logging IN"),console.log(e);const f=((d=r==null?void 0:r.teacher)==null?void 0:d.classIds.map(a=>a._id))||[];h.login(e.user.id,e.user.role,e.user.name,e.user.teachingGroupId.id,((u=t==null?void 0:t.academicYearId)==null?void 0:u.name)||null,f,e.token),console.log("logged IN")}catch(t){console.log(t)}};return s.jsx("div",{className:"m-auto max-w-md mt-16 md:mt-24",children:s.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${m?"opacity-0":"opacity-100"}`,children:[n&&s.jsx("div",{className:"px-2",children:s.jsx(C,{error:n,onClear:()=>g(null)})}),s.jsx(E,{logo:P,title:"PPG Cikampek",subtitle:"Sistem Absensi Digital",fields:y,onSubmit:b,disabled:o,labels:!1,button:s.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:s.jsx("button",{type:"submit",className:`button-primary ${o?"opacity-50 cursor-not-allowed":""}`,disabled:o,children:o?s.jsx(G,{children:"Processing..."}):"Login"})}),helpButton:s.jsx("div",{onClick:()=>x("/reset-password/reset"),className:"text-center mt-2",children:s.jsx("p",{className:"underline text-xs text-gray-600 active:text-primary hover:text-primary hover:cursor-pointer",children:"Reset Password"})})})]})})};export{A as default};
