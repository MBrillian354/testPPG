import{j as a,N as r,r as i,A as l}from"./index-D_ufnm_m.js";import{I as c}from"./iconify-pGgCZ9Hv.js";import{H as d,P as u,C as m,G as x,S as h,a as b}from"./Sidebar-CULHuemD.js";import{c as t}from"./createLucideIcon-BhK4CwgT.js";import{G as p}from"./graduation-cap-DDKN8GMo.js";import{U as g}from"./users-wJEeiZq3.js";import"./iconify-icon-C1YYA-Pd.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t("Album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]),k=()=>{const s=[{id:1,label:"Home",path:"/",icon:a.jsx(d,{size:24}),end:!0},{id:2,label:"Absen",path:"/scan",icon:a.jsx(c,{icon:"uil:qrcode-scan",width:"24",height:"24"})},{id:3,label:"Isi Jurnal",path:"/journal",icon:a.jsx(f,{size:24})}];return a.jsx("div",{className:"bg-white border-t border-gray-200 flex flex-grow justify-around items-center h-16 fixed bottom-0 w-full transition-all duration-300",children:s.map((e,o)=>a.jsx("button",{className:"basis-16",children:a.jsxs(r,{to:e.path,end:e.end,className:({isActive:n})=>`
                                        flex flex-col items-center hover:bg-gray-100 
                                        focus:outline-none focus:ring-primary-subtle 
                                        rounded-3xl pt-1 transition-all duration-300
                                        ${n?"bg-gray-100 text-primary":"text-gray-800"} 
                                    `,children:[e.icon,a.jsx("span",{className:"text-xs mt-1",children:e.label})]})},o))})},H=({children:s})=>{const e=i.useContext(l);console.log(e.userId),console.log(e.currentTeachingGroupYear||"no active year"),console.log(e.userClassIds||"no classes");const o=[{link:`/dashboard/teachers/${e.userId}`,icon:a.jsx(p,{}),label:e.userName},{link:"/attendance/history/",icon:a.jsx(u,{}),label:"Kelas"},{link:"/journal-history",icon:a.jsx(j,{}),label:"Riwayat Jurnal"},{link:"/dashboard/students",icon:a.jsx(g,{}),label:"Peserta Didik"},{link:"/dashboard/academic",icon:a.jsx(m,{}),label:"Akademik"},{link:"/performances",icon:a.jsx(x,{}),label:"KPI Peserta Didik"},{link:`/profile/${e.userId}`,icon:a.jsx(h,{}),label:"Pengaturan"}];return a.jsxs(b,{linksList:o,children:[s,a.jsx(k,{})]})};export{H as default};
