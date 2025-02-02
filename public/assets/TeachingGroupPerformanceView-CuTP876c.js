import{r as h,O as ie,b as le,A as ce,u as de,j as a,L as ue}from"./index-Baf2cdGO.js";import{r as pe,D as he,P as me,i as ge}from"./PieChart-D98uJ5kO.js";import{T as fe}from"./TeachingGroupAdminPerformanceCards-Bnvo_-te.js";import"./StudentReportView-DZBEIBQW.js";import"./ppgcikampek-CM1E7Efd.js";import"./arrow-down-to-line-CL_hhDMY.js";import"./StudentInitial-Cz8IaymN.js";import"./attendanceCount-EC2MUpAe.js";import"./index-DkNG5lM_.js";import"./proxy-HtNcpCG-.js";var re={exports:{}};(function(R,se){(function(Y,X){R.exports=X(h)})(typeof self<"u"?self:ie,function(Y){return function(){var X={155:function(e){e.exports=Y}},oe={};function E(e){var t=oe[e];if(t!==void 0)return t.exports;var i=oe[e]={exports:{}};return X[e](i,i.exports,E),i.exports}E.d=function(e,t){for(var i in t)E.o(t,i)&&!E.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},E.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var z={};E.r(z),E.d(z,{useReactToPrint:function(){return Z}});var m=E(155);function g({level:e="error",messages:t,suppressErrors:i=!1}){i||(e==="error"?console.error(t):e==="warning"?console.warn(t):console.debug(t))}function W(e,t){if(t||!e){const i=document.getElementById("printWindow");i&&document.body.removeChild(i)}}function K(e){return e instanceof Error?e:new Error("Unknown Error")}function J(e,t){const{documentTitle:i,onAfterPrint:d,onPrintError:v,preserveAfterPrint:p,print:N,suppressErrors:f}=t;setTimeout(()=>{var y,x;if(e.contentWindow){let j=function(){d==null||d(),W(p)};if(e.contentWindow.focus(),N)N(e).then(j).catch(S=>{v?v("print",K(S)):g({messages:["An error was thrown by the specified `print` function"],suppressErrors:f})});else{if(e.contentWindow.print){const S=(x=(y=e.contentDocument)===null||y===void 0?void 0:y.title)!==null&&x!==void 0?x:"",C=e.ownerDocument.title;i&&(e.ownerDocument.title=i,e.contentDocument&&(e.contentDocument.title=i)),e.contentWindow.print(),i&&(e.ownerDocument.title=C,e.contentDocument&&(e.contentDocument.title=S))}else g({messages:["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."],suppressErrors:f});[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(S=>{var C,k;return((k=(C=navigator.userAgent)!==null&&C!==void 0?C:navigator.vendor)!==null&&k!==void 0?k:"opera"in window&&window.opera).match(S)})?setTimeout(j,500):j()}}else g({messages:["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/MatthewHerbst/react-to-print/issues/"],suppressErrors:f})},500)}function U(e){const t=[],i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null);let d=i.nextNode();for(;d;)t.push(d),d=i.nextNode();return t}function q(e,t,i){const d=U(e),v=U(t);if(d.length===v.length)for(let p=0;p<d.length;p++){const N=d[p],f=v[p],y=N.shadowRoot;if(y!==null){const x=f.attachShadow({mode:y.mode});x.innerHTML=y.innerHTML,q(y,x,i)}}else g({messages:["When cloning shadow root content, source and target elements have different size. `onBeforePrint` likely resolved too early.",e,t],suppressErrors:i})}const ee=`
    @page {
        /* Remove browser default header (title) and footer (url) */
        margin: 0;
    }
    @media print {
        body {
            /* Tell browsers to print background colors */
            color-adjust: exact; /* Firefox. This is an older version of "print-color-adjust" */
            print-color-adjust: exact; /* Firefox/Safari */
            -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */
        }
    }
`;function te(e,t,i,d){var v,p,N,f,y;const{contentNode:x,clonedContentNode:j,clonedImgNodes:S,clonedVideoNodes:C,numResourcesToLoad:k,originalCanvasNodes:F}=i,{bodyClass:B,fonts:$,ignoreGlobalStyles:_,pageStyle:V,nonce:T,suppressErrors:r,copyShadowRoots:l}=d;e.onload=null;const n=(v=e.contentDocument)!==null&&v!==void 0?v:(p=e.contentWindow)===null||p===void 0?void 0:p.document;if(n){const G=n.body.appendChild(j);l&&q(x,G,!!r),$&&(!((N=e.contentDocument)===null||N===void 0)&&N.fonts&&(!((f=e.contentWindow)===null||f===void 0)&&f.FontFace)?$.forEach(s=>{const o=new FontFace(s.family,s.source,{weight:s.weight,style:s.style});e.contentDocument.fonts.add(o),o.loaded.then(()=>{t(o)}).catch(A=>{t(o,["Failed loading the font:",o,"Load error:",K(A)])})}):($.forEach(s=>{t(s)}),g({messages:['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'],suppressErrors:r})));const Q=V??ee,u=n.createElement("style");T&&(u.setAttribute("nonce",T),n.head.setAttribute("nonce",T)),u.appendChild(n.createTextNode(Q)),n.head.appendChild(u),B&&n.body.classList.add(...B.split(" "));const I=n.querySelectorAll("canvas");for(let s=0;s<F.length;++s){const o=F[s],A=I[s];if(A===void 0){g({messages:["A canvas element could not be copied for printing, has it loaded? `onBeforePrint` likely resolved too early.",o],suppressErrors:r});continue}const c=A.getContext("2d");c&&c.drawImage(o,0,0)}for(let s=0;s<S.length;s++){const o=S[s],A=o.getAttribute("src");if(A){const c=new Image;c.onload=()=>{t(o)},c.onerror=(b,D,M,P,O)=>{t(o,["Error loading <img>",o,"Error",O])},c.src=A}else t(o,['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it.',o])}for(let s=0;s<C.length;s++){const o=C[s];o.preload="auto";const A=o.getAttribute("poster");if(A){const c=new Image;c.onload=()=>{t(o)},c.onerror=(b,D,M,P,O)=>{t(o,["Error loading video poster",A,"for video",o,"Error:",O])},c.src=A}else o.readyState>=2?t(o):o.src?(o.onloadeddata=()=>{t(o)},o.onerror=(c,b,D,M,P)=>{t(o,["Error loading video",o,"Error",P])},o.onstalled=()=>{t(o,["Loading video stalled, skipping",o])}):t(o,["Error loading video, `src` is empty",o])}const L="select",H=x.querySelectorAll(L),w=n.querySelectorAll(L);for(let s=0;s<H.length;s++)w[s].value=H[s].value;if(!_){const s=document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']");for(let o=0,A=s.length;o<A;++o){const c=s[o];if(c.tagName.toLowerCase()==="style"){const b=n.createElement(c.tagName),D=c.sheet;if(D){let M="";try{const P=D.cssRules.length;for(let O=0;O<P;++O)typeof D.cssRules[O].cssText=="string"&&(M+=`${D.cssRules[O].cssText}\r
`)}catch(P){g({messages:["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/MatthewHerbst/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",c,`Original error: ${K(P).message}`],level:"warning"})}b.setAttribute("id",`react-to-print-${o}`),T&&b.setAttribute("nonce",T),b.appendChild(n.createTextNode(M)),n.head.appendChild(b)}}else if(c.getAttribute("href"))if(c.hasAttribute("disabled"))g({messages:["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:",c],level:"warning"}),t(c);else{const b=n.createElement(c.tagName);for(let D=0,M=c.attributes.length;D<M;++D){const P=c.attributes[D];P&&b.setAttribute(P.nodeName,(y=P.nodeValue)!==null&&y!==void 0?y:"")}b.onload=()=>{t(b)},b.onerror=(D,M,P,O,ae)=>{t(b,["Failed to load",b,"Error:",ae])},T&&b.setAttribute("nonce",T),n.head.appendChild(b)}else g({messages:["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",c],level:"warning"}),t(c)}}}k===0&&J(e,d)}function ne(e,t,i,d){e.onload=()=>{te(e,t,i,d)},document.body.appendChild(e)}function Z(e){const{contentRef:t,fonts:i,ignoreGlobalStyles:d,onBeforePrint:v,onPrintError:p,preserveAfterPrint:N,suppressErrors:f}=e;return(0,m.useCallback)(x=>{W(N,!0);const j=function({contentRef:n,optionalContent:G,suppressErrors:Q}){return G&&(n&&g({level:"warning",messages:['"react-to-print" received a `contentRef` option and a optional-content param passed to its callback. The `contentRef` option will be ignored.']}),typeof G=="function")?G():n?n.current:void g({messages:['"react-to-print" did not receive a `contentRef` option or a optional-content param pass to its callback.'],suppressErrors:Q})}({contentRef:t,optionalContent:x,suppressErrors:f});if(!j)return void g({messages:["There is nothing to print"],suppressErrors:f});const S=j.cloneNode(!0),C=document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"),k=S.querySelectorAll("img"),F=S.querySelectorAll("video"),B=i?i.length:0,$=(d?0:C.length)+k.length+F.length+B,_=[],V=[],T=function(){const n=document.createElement("iframe");return n.width=`${document.documentElement.clientWidth}px`,n.height=`${document.documentElement.clientHeight}px`,n.style.position="absolute",n.style.top=`-${document.documentElement.clientHeight+100}px`,n.style.left=`-${document.documentElement.clientWidth+100}px`,n.id="printWindow",n.srcdoc="<!DOCTYPE html>",n}(),r=(n,G)=>{_.includes(n)?g({level:"debug",messages:["Tried to mark a resource that has already been handled",n],suppressErrors:f}):(G?(g({messages:['"react-to-print" was unable to load a resource but will continue attempting to print the page',...G],suppressErrors:f}),V.push(n)):_.push(n),_.length+V.length===$&&J(T,e))},l={contentNode:j,clonedContentNode:S,clonedImgNodes:k,clonedVideoNodes:F,numResourcesToLoad:$,originalCanvasNodes:j.querySelectorAll("canvas")};v?v().then(()=>{ne(T,r,l,e)}).catch(n=>{p==null||p("onBeforePrint",K(n))}):ne(T,r,l,e)},[e])}return z}()})})(re);var be=re.exports;const Ce=()=>{const{isLoading:R,error:se,sendRequest:Y,setError:X,setIsLoading:oe}=le(),[E,z]=h.useState(),[m,g]=h.useState(null),[W,K]=h.useState(),[J,U]=h.useState(),[q,ee]=h.useState(null),[te,ne]=h.useState(),[Z,e]=h.useState(),[t,i]=h.useState(),[d,v]=h.useState(null),[p,N]=h.useState(null),[f,y]=h.useState(null),x=h.useContext(ce);de();const j=h.useRef(null),S=be.useReactToPrint({contentRef:j,documentTitle:`Laporan_Performa_Kelompok_${W&&W.teachingGroupName}`}),C=()=>{j.current.querySelectorAll("canvas").forEach(l=>{(l.width===0||l.height===0)&&(l.width=300,l.height=150)}),setTimeout(()=>{S()},200)},k={attribute:"Perlengkapan Belajar",attitude:"Sikap",tidiness:"Kerapihan"},F=h.useCallback(async()=>{try{const r=await Y("http://103.127.133.63:5000/api/academicYears/?populate=teachingGroupYears");z(r.academicYears)}catch{}},[Y]),B=h.useCallback(async()=>{const r=u=>{const I=[];u.teachingGroupYears.forEach(w=>{w.classes.forEach(s=>{s.attendances.forEach(o=>{I.push(o.status)})})});const L=I.reduce((w,s)=>(w[s]=(w[s]||0)+1,w),{}),H=I.length;return Object.keys(L).map(w=>({status:w,count:L[w],percentage:Math.round(L[w]/H*100)})).sort((w,s)=>w.status.localeCompare(s.status))},l=u=>{const I={};return u.teachingGroupYears.forEach(L=>{L.classes.forEach(H=>{H.attendances.forEach(w=>{Object.entries(w.violations).forEach(([s,o])=>{o&&(I[s]=(I[s]||0)+1)})})})}),Object.entries(I).map(([L,H])=>({violation:L,count:H}))},n=u=>!u||!u.teachingGroupYears[0]||!u.teachingGroupYears[0].teachingGroupId||!u.teachingGroupYears[0].teachingGroupId.branchId?null:{branchName:u.teachingGroupYears[0].teachingGroupId.branchId.name,teachingGroupName:u.teachingGroupYears[0].teachingGroupId.name,semesterTarget:u.teachingGroupYears[0].semesterTarget},G="http://103.127.133.63:5000/api/attendances/reports/",Q=JSON.stringify({academicYearId:m,branchId:x.userBranchId,teachingGroupId:x.userTeachingGroupId,classId:q,startDate:d?d.toISOString():null,endDate:p?p.toISOString():null});try{const u=await Y(G,"POST",Q,{"Content-Type":"application/json"});K(n(u)),e(null),ne(u),e(r(u)),i(l(u))}catch{}},[Y,m,q,d,p]);h.useEffect(()=>{pe("id-ID",ge),F(),B()},[F,B]);const $=r=>{g(r),U([]),ee(null),v(null),N(null),r!==""&&_(r)},_=async r=>{const l=`http://103.127.133.63:5000/api/teachingGroupYears/teaching-group/${x.userTeachingGroupId}/academic-year/${r||m}`;try{const n=await Y(l);U(n.teachingGroupYear.classes)}catch{}},V=r=>{ee(r)},T=r=>{const[l,n]=r;l&&n&&y(l.toLocaleDateString("id-ID",{day:"2-digit",timeZone:"Asia/Jakarta"})+" - "+n.toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Jakarta"})),v(l),N(n)};return a.jsx("div",{children:a.jsx("div",{ref:j,className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:a.jsxs("main",{className:"max-w-6xl mx-auto",children:[(!E||R)&&a.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-dvh",children:a.jsx(ue,{size:32})}),E&&a.jsxs("div",{className:"card-basic rounded-md flex-col gap-4",children:[a.jsxs("div",{className:"flex justify-between",children:[W&&a.jsxs("div",{className:"flex flex-col",children:[a.jsxs("h2",{className:"text-xl font-bold",children:["Kelompok ",W.teachingGroupName]}),a.jsxs("p",{className:"text-sm text-gray-600",children:["Target Semester: ",W.semesterTarget," hari"]})]}),Z&&!R&&m&&a.jsx("button",{className:"button-primary m-0 self-center",onClick:()=>C(),children:"Print ke PDF"})]}),a.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-4",children:[a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsxs("div",{className:"flex flex-row gap-4 items-center",children:[a.jsxs("div",{className:"flex flex-col gap-[18px]",children:[a.jsx("div",{children:"Tahun Ajaran"}),a.jsx("div",{children:"Periode"}),a.jsx("div",{children:"Kelas"})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsxs("select",{value:m||"",onChange:r=>$(r.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",disabled:!1,children:[!m&&a.jsx("option",{value:"",children:"Pilih"}),E&&E.map((r,l)=>a.jsx("option",{value:r._id,children:r.name},l))]}),a.jsx(he,{dateFormat:"dd/MM/yyyy",selected:d,onChange:T,startDate:d,endDate:p,locale:"id-ID",selectsRange:!0,isClearable:!0,withPortal:window.innerWidth<=768,className:`${m&&"pr-8"} border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300`,disabled:!m,placeholderText:`${m?"Semua Periode":"Pilih Tahun Ajaran"}`,onFocus:r=>r.target.readOnly=!0}),a.jsxs("select",{value:q||"",onChange:r=>V(r.target.value),className:"border border-gray-400 px-2 py-1 rounded-full active:ring-2 active:ring-blue-300",children:[a.jsx("option",{value:"",children:"Semua"}),J&&J.map((r,l)=>a.jsx("option",{value:r._id,children:r.name},l))]})]})]}),a.jsxs("div",{className:"self-start flex flex-row gap-2",children:[a.jsx("div",{className:"flex flex-col gap-1",children:t&&!R&&m&&t.map(({violation:r},l)=>a.jsx("div",{className:"",children:k[r]||r},l))}),a.jsx("div",{className:"flex flex-col gap-1 ",children:t&&!R&&m&&t.map(({count:r},l)=>a.jsxs("div",{className:"font-bold",children:[": ",r," Temuan"]},l))})]})]}),Z&&!R&&m&&a.jsx("div",{className:"",children:a.jsx(me,{attendanceData:Z})})]})]}),te&&!R&&m&&a.jsx(fe,{data:te,initialView:"classes",month:f})]})})})};export{Ce as default};
