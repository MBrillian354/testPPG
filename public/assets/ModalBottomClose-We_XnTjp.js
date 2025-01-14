import{r as i,j as e}from"./index-CUVeWTx6.js";const m=({isOpen:s,onClose:o,title:n,children:r,footer:l})=>{const[t,a]=i.useState(!1);i.useEffect(()=>(s?(a(!0),document.body.style.overflow="hidden"):(a(!1),document.body.style.overflow="unset"),()=>{document.body.style.overflow="unset"}),[s]);const d=()=>{a(!1),setTimeout(o,300)};return!s&&!t?null:e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",onClick:d,children:[e.jsx("div",{className:`
                    absolute inset-0 bg-black transition-opacity duration-300 ease-in-out
                    ${t?"opacity-50":"opacity-0"}
                `}),e.jsxs("div",{className:`
                    relative w-full max-w-md md:max-w-2xl mx-4 bg-white rounded-lg shadow-xl 
                    transform transition-all duration-300 ease-in-out
                    ${t?"translate-y-0 opacity-100":"translate-y-4 opacity-0"}
                `,onClick:c=>c.stopPropagation(),children:[e.jsx("div",{className:"p-4 border-b",children:e.jsx("h2",{className:"text-lg font-medium",children:n})}),e.jsx("div",{className:"p-4",children:r}),l&&e.jsx("div",{className:"flex justify-end p-4 border-t",children:l})]})]})};export{m as M};
