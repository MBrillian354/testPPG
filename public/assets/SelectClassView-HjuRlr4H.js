import{r as o,a as p,A as g,u as x,j as s,L as f}from"./index-b338pBx7.js";import{I as m}from"./InfoCard-C9Y3TtJT.js";const N=()=>{const[n,i]=o.useState(),{isLoading:u,error:j,sendRequest:l,clearError:C}=p(),c=o.useContext(g).userClassIds,h=x();o.useEffect(()=>{const e=async()=>{const d="http://192.168.137.1:5000/api/classes/get-by-ids",t=JSON.stringify({classIds:c});console.log("fetching classes this teacher enrolled..."),console.log(c);try{const a=await l(d,"POST",t,{"Content-Type":"application/json"});i(a),console.log("fetching classes complete..."),console.log(a)}catch{}};c.length===0?i({classes:[]}):e()},[l]);let r=0;return s.jsxs("div",{children:[!n&&u&&s.jsx("div",{className:"flex justify-center mt-16",children:s.jsx(f,{size:32})}),n&&s.jsxs("div",{className:"h-dvh",children:[s.jsxs("ul",{className:"mt-12 p-4 space-y-2",children:[s.jsx("h2",{className:"text-lg",children:"Absen Untuk Kelas:"}),n.classes.map(e=>{var t,a;if((a=(t=e==null?void 0:e.teachingGroupYearId)==null?void 0:t.academicYearId)==null?void 0:a.isActive)return r++,s.jsx("li",{onClick:()=>h(`/scan/class/${e._id}`),className:"border px-6 py-4 bg-white rounded-full active:ring-2 active:ring-blue-200 focus:bg-blue-200",children:e.name},e._id)})]}),r===0&&s.jsx(m,{className:"mx-4 mt-12",children:s.jsx("p",{children:"Belum terdaftar di kelas manapun!"})})]})]})};export{N as default};
