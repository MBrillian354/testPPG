import{c as o,j as a,N as n,r as i,A as l}from"./index-Baf2cdGO.js";import{I as d}from"./iconify-D6qTasCE.js";import{H as h,P as c,G as x,C as u,S as p}from"./Sidebar-CjBCXs-h.js";import{G as m}from"./graduation-cap-PYNrTnY0.js";import{U as b}from"./users-DnmAnK8h.js";import"./ppgcikampek-CM1E7Efd.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=o("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o("Notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]),j=()=>{const t=[{id:1,label:"Home",path:"/",icon:a.jsx(h,{size:24}),end:!0},{id:2,label:"Absen",path:"/scan",icon:a.jsx(d,{icon:"uil:qrcode-scan",width:"24",height:"24"})},{id:3,label:"Materi",path:"/materialProgress",icon:a.jsx(k,{size:24})}];return a.jsx("div",{className:"bg-white border-t border-gray-200 flex flex-grow justify-around items-center h-16 fixed bottom-0 w-full transition-all duration-300",children:t.map((e,s)=>a.jsx("button",{className:"basis-16",children:a.jsxs(n,{to:e.path,end:e.end,className:({isActive:r})=>`
                                        flex flex-col items-center hover:bg-gray-100 
                                        focus:outline-none focus:ring-primary-subtle 
                                        rounded-3xl pt-1 transition-all duration-300
                                        ${r?"bg-gray-100 text-primary":"text-gray-800"} 
                                    `,children:[e.icon,a.jsx("span",{className:"text-xs mt-1",children:e.label})]})},s))})},C=({children:t})=>{const e=i.useContext(l),s=[{link:`/dashboard/teachers/${e.userId}`,icon:a.jsx(m,{}),label:e.userName},{link:"/attendance/history/",icon:a.jsx(c,{}),label:"Kelas"},{link:"/journal",icon:a.jsx(y,{}),label:"Jurnal"},{link:"/dashboard/students",icon:a.jsx(b,{}),label:"Peserta Didik"},{link:"/performances",icon:a.jsx(x,{}),label:"Performa Kehadiran"},{link:"/dashboard/academic",icon:a.jsx(u,{}),label:"Tahun Ajaran"}];return a.jsxs(p,{linksList:s,children:[t,a.jsx(j,{})]})};export{C as default};
