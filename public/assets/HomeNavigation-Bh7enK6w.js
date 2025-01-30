import{c as n,j as a,N as r,r as i,A as l}from"./index-CQE6waEO.js";import{I as c}from"./iconify-Ba938JRF.js";import{H as d,P as u,G as x,C as m,S as h}from"./Sidebar-BeN2J1BL.js";import{G as b}from"./graduation-cap-CNuFsUwz.js";import{U as p}from"./users-Dnm4oUs6.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=n("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]),f=()=>{const s=[{id:1,label:"Home",path:"/",icon:a.jsx(d,{size:24}),end:!0},{id:2,label:"Absen",path:"/scan",icon:a.jsx(c,{icon:"uil:qrcode-scan",width:"24",height:"24"})},{id:3,label:"Jurnal",path:"/journal",icon:a.jsx(j,{size:24})}];return a.jsx("div",{className:"bg-white border-t border-gray-200 flex flex-grow justify-around items-center h-16 fixed bottom-0 w-full transition-all duration-300",children:s.map((e,t)=>a.jsx("button",{className:"basis-16",children:a.jsxs(r,{to:e.path,end:e.end,className:({isActive:o})=>`
                                        flex flex-col items-center hover:bg-gray-100 
                                        focus:outline-none focus:ring-primary-subtle 
                                        rounded-3xl pt-1 transition-all duration-300
                                        ${o?"bg-gray-100 text-primary":"text-gray-800"} 
                                    `,children:[e.icon,a.jsx("span",{className:"text-xs mt-1",children:e.label})]})},t))})},H=({children:s})=>{const e=i.useContext(l),t=[{link:`/dashboard/teachers/${e.userId}`,icon:a.jsx(b,{}),label:e.userName},{link:"/attendance/history/",icon:a.jsx(u,{}),label:"Kelas"},{link:"/dashboard/students",icon:a.jsx(p,{}),label:"Peserta Didik"},{link:"/performances",icon:a.jsx(x,{}),label:"Performa Kehadiran"},{link:"/dashboard/academic",icon:a.jsx(m,{}),label:"Tahun Ajaran"}];return a.jsxs(h,{linksList:t,children:[s,a.jsx(f,{})]})};export{H as default};
