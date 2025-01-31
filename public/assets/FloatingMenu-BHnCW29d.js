import{r as a,j as s}from"./index-CBFEDf3H.js";import{c as o}from"./createLucideIcon-BukOYC3u.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=o("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),j=({boxWidth:l,style:i,label:n,buttons:d,horizontalStyle:x=!0})=>{const[m,c]=a.useState(!1),t=a.useRef(null);a.useEffect(()=>{const e=r=>{t.current&&!t.current.contains(r.target)&&c(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const p=e=>{e.stopPropagation(),c(r=>!r)},u=e=>{e==null||e(),c(!1)};return s.jsxs("div",{className:"relative",ref:t,onClick:e=>e.stopPropagation(),children:[s.jsx("button",{className:i||"p-1 hover:bg-gray-100 rounded",onClick:p,children:n||(x?s.jsx(g,{className:"w-5 h-5 text-gray-500"}):s.jsx(y,{className:"w-5 h-5 text-gray-500"}))}),m&&s.jsx("div",{className:`absolute right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 ${l||"w-32"} z-20`,children:d.map((e,r)=>s.jsxs("button",{onClick:()=>u(e.onClick),className:`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2
                                ${e.variant==="danger"?"text-red-600":"text-gray-700"}`,children:[e.icon&&s.jsx(e.icon,{className:"w-4 h-4"}),e.label]},r))})]})};export{j as F};
