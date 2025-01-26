import{c as i}from"./createLucideIcon-BEmubaHH.js";import{r,S as b,A as g,j as e,N as d}from"./index-CP-NX24X.js";import{l as k}from"./ppgcikampek-CM1E7Efd.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=i("CalendarCog",[["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"11kmuh"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=i("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=i("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=i("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]),O=({linksList:o,children:c})=>{const[m,p]=r.useState(null),s=r.useContext(b),l=r.useContext(g),h=()=>{s.toggle()},x=a=>{p(n=>n===a?null:a)};return e.jsxs("div",{className:"relative h-screen md:h-dvh md:flex",children:[s.isSidebarOpen&&e.jsx("div",{className:"fixed inset-0 bg-black/20 md:hidden z-20",onClick:h}),e.jsxs("div",{className:`
                    fixed md:relative
                    h-full
                    bg-white text-gray-800 border-gray-200 
                    transition-all duration-300 ease-in-out
                    z-30 opacity-0 md:opacity-100
                    ${s.isSidebarOpen?"w-64 translate-x-0 opacity-100":"w-16 -translate-x-full md:translate-x-0"}
                `,children:[e.jsxs("div",{className:"m-2 mb-6 flex items-center justify-start gap-2 border-gray-200",children:[e.jsx("img",{src:k,className:"font-normal size-12"}),e.jsx("span",{className:`shrink-0 text-2xl font-semibold text-primary ${s.isSidebarOpen?"block":"hidden"}`,children:"PPG Cikampek"})]}),e.jsx("nav",{className:`mt-4 ${s.isSidebarOpen?"min-w-64":""}`,children:e.jsx("ul",{className:"mt-4 space-}y-2",children:o.map((a,n)=>e.jsxs("li",{className:"relative",children:[e.jsxs(d,{to:a.link?a.link:null,end:a.end,onClick:()=>{a.subOptions?x(a.label):s.isSidebarOpen&&!window.matchMedia("(min-width: 768px)").matches&&s.toggle()},className:({isActive:t})=>`
                                        flex items-center px-4 py-3 
                                        hover:bg-gray-100 
                                        focus:outline-none focus:ring-primary-subtle
                                        ${t&&a.link?"bg-gray-100 text-primary font-medium":"text-gray-800"} 
                                        ${s.isSidebarOpen?"justify-start":"justify-center"}
                                    `,children:[a.icon,e.jsx("span",{className:`shrink-0 ml-3 text-clip ${s.isSidebarOpen?"block":"hidden"}`,children:a.label})]}),a.subOptions&&e.jsx("ul",{className:" ml-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ",style:{maxHeight:m===a.label?`${a.subOptions.length*48}px`:"0px"},children:a.subOptions.map((t,y)=>e.jsx("li",{children:e.jsxs(d,{to:t.link,className:({isActive:u})=>` flex items-center px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:ring-primary-subtle ${u?"bg-gray-100 text-primary font-medium":"text-gray-800"} `,children:[t.icon,e.jsx("span",{className:`shrink-0 ml-3 text-clip ${s.isSidebarOpen?"block":"hidden"}`,children:t.label})]})},y))})]},n))})}),l.userRole==="teacher"&&e.jsx("div",{className:"flex items-center justify-end p-4",children:e.jsxs("button",{onClick:l.logout,className:"btn-primary-outline flex items-center p-2",children:[e.jsx(f,{size:18,strokeWidth:2.5}),e.jsx("span",{className:"ml-2",children:"Logout"})]})})]}),e.jsx("div",{className:"flex-1",children:c})]})};export{M as C,S as G,w as H,f as L,C as P,O as S};
