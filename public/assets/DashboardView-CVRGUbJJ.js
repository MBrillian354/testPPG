import{b as m,r,A as h,j as a,L as j,E as f}from"./index-Baf2cdGO.js";const p=()=>{const{isLoading:d,error:n,sendRequest:o,setError:c}=m(),[l,i]=r.useState(),x=r.useContext(h);return r.useEffect(()=>{(async()=>{const e="http://103.127.133.63:5000/api/dashboard";try{const t=await o(e,"POST",JSON.stringify({}),{"Content-Type":"application/json",Authorization:"Bearer "+x.token});i(t.dashboardData),console.log(t.dashboardData)}catch{}})()},[o]),a.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:a.jsxs("main",{className:"max-w-6xl mx-auto",children:[a.jsx("div",{className:"flex justify-between items-center mb-6",children:a.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Dashboard"})}),d&&a.jsx("div",{className:"flex justify-center mt-16",children:a.jsx(j,{size:32})}),n&&a.jsx(f,{error:n,onClear:()=>c(null)}),!d&&l&&a.jsx("div",{className:"flex md:flex-row flex-wrap justify-start gap-8",children:Object.entries(l).map(([s,e])=>a.jsx("div",{className:"card-interactive rounded-md border-0 border-b-4 border-secondary md:p-8 hover:cursor-default m-0 flex flex-col md:gap-2 min-h-16 min-w-40 md:min-h-40 md:min-w-80 max-w-96 flex-grow",children:s!=="Kehadiran"?a.jsxs(a.Fragment,{children:[a.jsx("h1",{className:"text-lg md:text-3xl font-bold",children:e}),a.jsx("p",{className:"",children:s})]}):e>0?a.jsxs(a.Fragment,{children:[a.jsxs("h1",{className:"text-lg md:text-3xl font-bold",children:[e.toFixed(2),"%"]}),a.jsx("p",{className:"",children:s})]}):a.jsxs(a.Fragment,{children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Tidak ada data"}),a.jsx("p",{className:"",children:s})]})},s))})]})})};export{p as default};
