import{r as c,A as p,u as g,j as s,L as x}from"./index-CUVeWTx6.js";import{u as f}from"./http-hook-BiPXVO_k.js";import{I as m}from"./InfoCard-Clv7xmeM.js";const A=()=>{const[n,r]=c.useState(),{isLoading:u,error:j,sendRequest:i,clearError:C}=f(),o=c.useContext(p).userClassIds,h=g();c.useEffect(()=>{const e=async()=>{const d="https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/classes/get-by-ids",t=JSON.stringify({classIds:o});console.log("fetching classes this teacher enrolled..."),console.log(o);try{const a=await i(d,"POST",t,{"Content-Type":"application/json"});r(a),console.log("fetching classes complete..."),console.log(a)}catch{}};o.length===0?r({classes:[]}):e()},[i]);let l=0;return s.jsxs("div",{children:[!n&&u&&s.jsx("div",{className:"flex justify-center mt-16",children:s.jsx(x,{size:32})}),n&&s.jsxs("div",{className:"h-dvh",children:[s.jsxs("ul",{className:"mt-12 p-4 space-y-2",children:[s.jsx("h2",{className:"text-lg",children:"Absen Untuk Kelas:"}),n.classes.map(e=>{var t,a;if((a=(t=e==null?void 0:e.teachingGroupYearId)==null?void 0:t.academicYearId)==null?void 0:a.isActive)return l++,s.jsx("li",{onClick:()=>h(`/scan/class/${e._id}`),className:"border px-6 py-4 bg-white rounded-full active:ring-2 active:ring-blue-200 focus:bg-blue-200",children:e.name},e._id)})]}),l===0&&s.jsx(m,{className:"mx-4 mt-12",children:s.jsx("p",{children:"Belum terdaftar di kelas manapun!"})})]})]})};export{A as default};
