import{e as x,r as o,a as u,A as g,u as d,j as e,L as f,l as h}from"./index-CQE6waEO.js";const y=()=>{const t=x().token,[r,l]=o.useState(""),{isLoading:c,error:a,sendRequest:n,setError:j}=u(),i=o.useContext(g),m=d();return console.log(t),o.useEffect(()=>{(async()=>{try{const s=await n(`http://localhost:5000/api/users/verify-email/${t}`);console.log(s),l(s.message)}catch(s){console.log(s)}})()},[n,t]),e.jsxs("div",{className:"card-basic mx-auto mt-36 w-96 h-64 flex flex-col gap-4 justify-center items-center",children:[c&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(f,{size:32})}),r||a&&e.jsxs(e.Fragment,{children:[e.jsx("img",{src:h,alt:"logo",className:"size-24 self-center mb-4"}),e.jsx("h1",{className:`text-2xl font-bold self-center ${a&&"text-red-500"} `,children:r||a}),e.jsxs("p",{onClick:()=>m("/"),className:"text-gray-600 hover:text-blue-500 hover:cursor-pointer hover:underline",children:["Kembali ke ",i.token?"Dashboard":"Login"]})]})]})};export{y as default};
