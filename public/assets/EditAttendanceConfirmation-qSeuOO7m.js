import{r as d,u as m,a as c,j as t,L as u}from"./index-CBFEDf3H.js";import{u as p}from"./http-hook-p1xhn-Qx.js";import{D as f}from"./DynamicForm-DnFPMFU5.js";import{E as b}from"./ErrorCard-DyotIidg.js";import"./iconify-icon-C1YYA-Pd.js";const v=()=>{const[e,x]=d.useState(!1),{isLoading:a,error:s,sendRequest:g}=p(),n=m(),i=c().attendanceId,r=[{name:"editReason",label:"Alasan Mengubah Data?",placeholder:"Karena lupa mengabsen...",type:"text",required:!0}],o=async l=>{console.log("submitting..."),JSON.stringify({name:l.name}),n(`/attendance/history/class/edit/${i}`)};return t.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[s&&t.jsx(b,{error:s,onClear:()=>setError(null)}),t.jsx("div",{className:`pb-24 transition-opacity duration-300 ${e?"opacity-0":"opacity-100"}`,children:t.jsx(f,{subtitle:"Konfirmasi Ubah Data",fields:r,onSubmit:o,disabled:a,reset:!1,footer:!1,button:t.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:t.jsx("button",{type:"submit",className:`button-primary ${a?"opacity-50 cursor-not-allowed":""}`,disabled:a,children:a?t.jsx(u,{children:"Processing..."}):"Ya"})})})})]})};export{v as default};
