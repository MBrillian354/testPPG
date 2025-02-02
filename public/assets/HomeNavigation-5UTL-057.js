import{c as o,j as a,N as r,r as i,A as l,G as d,U as h}from"./index-BclD7Oek.js";import{I as c}from"./iconify-RRlTYOA0.js";import{H as x,P as u,G as b,C as p,S as m}from"./Sidebar-VRssY7Pl.js";import"./ppgcikampek-CM1E7Efd.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=o("BookOpenText",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o("Notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]),j=()=>{const t=[{id:1,label:"Home",path:"/",icon:a.jsx(x,{size:24}),end:!0},{id:2,label:"Absen",path:"/scan",icon:a.jsx(c,{icon:"uil:qrcode-scan",width:"24",height:"24"})},{id:3,label:"Materi",path:"/materialProgress",icon:a.jsx(k,{size:24})}];return a.jsx("div",{className:"bg-white border-t border-gray-200 flex flex-grow justify-around items-center h-16 fixed bottom-0 w-full transition-all duration-300",children:t.map((e,s)=>a.jsx("button",{className:"basis-16",children:a.jsxs(r,{to:e.path,end:e.end,className:({isActive:n})=>`
                                        flex flex-col items-center hover:bg-gray-100 
                                        focus:outline-none focus:ring-primary-subtle 
                                        rounded-3xl pt-1 transition-all duration-300
                                        ${n?"bg-gray-100 text-primary":"text-gray-800"} 
                                    `,children:[e.icon,a.jsx("span",{className:"text-xs mt-1",children:e.label})]})},s))})},N=({children:t})=>{const e=i.useContext(l),s=[{link:`/dashboard/teachers/${e.userId}`,icon:a.jsx(d,{}),label:e.userName},{link:"/attendance/history/",icon:a.jsx(u,{}),label:"Kelas"},{link:"/journal",icon:a.jsx(y,{}),label:"Jurnal"},{link:"/dashboard/students",icon:a.jsx(h,{}),label:"Peserta Didik"},{link:"/performances",icon:a.jsx(b,{}),label:"Performa Kehadiran"},{link:"/dashboard/academic",icon:a.jsx(p,{}),label:"Tahun Ajaran"}];return a.jsxs(m,{linksList:s,children:[t,a.jsx(j,{})]})};export{N as default};
