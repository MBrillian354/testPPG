import{d as x,r as o,b as u,A as d,u as f,j as e,L as g}from"./index-Baf2cdGO.js";import{l as h}from"./ppgcikampek-CM1E7Efd.js";const b=()=>{const t=x().token,[r,l]=o.useState(""),{isLoading:c,error:a,sendRequest:n,setError:p}=u(),i=o.useContext(d),m=f();return console.log(t),o.useEffect(()=>{(async()=>{try{const s=await n(`http://localhost:5000/api/users/verify-email/${t}`);console.log(s),l(s.message)}catch(s){console.log(s)}})()},[n,t]),e.jsxs("div",{className:"card-basic mx-auto mt-36 w-96 h-64 flex flex-col gap-4 justify-center items-center",children:[c&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(g,{size:32})}),r||a&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:h,alt:"logo",className:"size-24 self-center mb-4"}),e.jsx("h1",{className:`text-2xl font-bold self-center ${a&&"text-red-500"} `,children:r||a}),e.jsxs("p",{onClick:()=>m("/"),className:"text-gray-600 hover:text-blue-500 hover:cursor-pointer hover:underline",children:["Kembali ke ",i.token?"Dashboard":"Login"]})]})]})};export{b as default};
