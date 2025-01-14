import{_ as N,r as f,q as j,j as s,u as T,A as k,a as R,L as I}from"./index-CUVeWTx6.js";import{u as O}from"./http-hook-BiPXVO_k.js";import{S as C}from"./SequentialAnimation-BQQ2C5H-.js";import{I as D}from"./iconify-aVymPgft.js";import{S as M}from"./StudentInitial-CD4ASj-n.js";import{c as $}from"./createLucideIcon-HjXMmH3n.js";import{I as P}from"./InfoCard-Clv7xmeM.js";import"./proxy-G5p5AvPC.js";import"./iconify-icon-C1YYA-Pd.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=$("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=$("SquareCheck",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);class l{constructor(e,t,a,i,r){this._legacyCanvasSize=l.DEFAULT_CANVAS_SIZE,this._preferredCamera="environment",this._maxScansPerSecond=25,this._lastScanTimestamp=-1,this._destroyed=this._flashOn=this._paused=this._active=!1,this.$video=e,this.$canvas=document.createElement("canvas"),a&&typeof a=="object"?this._onDecode=t:(console.warn(a||i||r?"You're using a deprecated version of the QrScanner constructor which will be removed in the future":"Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),this._legacyOnDecode=t),t=typeof a=="object"?a:{},this._onDecodeError=t.onDecodeError||(typeof a=="function"?a:this._onDecodeError),this._calculateScanRegion=t.calculateScanRegion||(typeof i=="function"?i:this._calculateScanRegion),this._preferredCamera=t.preferredCamera||r||this._preferredCamera,this._legacyCanvasSize=typeof a=="number"?a:typeof i=="number"?i:this._legacyCanvasSize,this._maxScansPerSecond=t.maxScansPerSecond||this._maxScansPerSecond,this._onPlay=this._onPlay.bind(this),this._onLoadedMetaData=this._onLoadedMetaData.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this._updateOverlay=this._updateOverlay.bind(this),e.disablePictureInPicture=!0,e.playsInline=!0,e.muted=!0;let c=!1;if(e.hidden&&(e.hidden=!1,c=!0),document.body.contains(e)||(document.body.appendChild(e),c=!0),a=e.parentElement,t.highlightScanRegion||t.highlightCodeOutline){if(i=!!t.overlay,this.$overlay=t.overlay||document.createElement("div"),r=this.$overlay.style,r.position="absolute",r.display="none",r.pointerEvents="none",this.$overlay.classList.add("scan-region-highlight"),!i&&t.highlightScanRegion){this.$overlay.innerHTML='<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';try{this.$overlay.firstElementChild.animate({transform:["scale(.98)","scale(1.01)"]},{duration:400,iterations:1/0,direction:"alternate",easing:"ease-in-out"})}catch{}a.insertBefore(this.$overlay,this.$video.nextSibling)}t.highlightCodeOutline&&(this.$overlay.insertAdjacentHTML("beforeend",'<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'),this.$codeOutlineHighlight=this.$overlay.lastElementChild)}this._scanRegion=this._calculateScanRegion(e),requestAnimationFrame(()=>{let h=window.getComputedStyle(e);h.display==="none"&&(e.style.setProperty("display","block","important"),c=!0),h.visibility!=="visible"&&(e.style.setProperty("visibility","visible","important"),c=!0),c&&(console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."),e.style.opacity="0",e.style.width="0",e.style.height="0",this.$overlay&&this.$overlay.parentElement&&this.$overlay.parentElement.removeChild(this.$overlay),delete this.$overlay,delete this.$codeOutlineHighlight),this.$overlay&&this._updateOverlay()}),e.addEventListener("play",this._onPlay),e.addEventListener("loadedmetadata",this._onLoadedMetaData),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._updateOverlay),this._qrEnginePromise=l.createQrEngine()}static set WORKER_PATH(e){console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.")}static async hasCamera(){try{return!!(await l.listCameras(!1)).length}catch{return!1}}static async listCameras(e=!1){if(!navigator.mediaDevices)return[];let t=async()=>(await navigator.mediaDevices.enumerateDevices()).filter(i=>i.kind==="videoinput"),a;try{e&&(await t()).every(i=>!i.label)&&(a=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0}))}catch{}try{return(await t()).map((i,r)=>({id:i.deviceId,label:i.label||(r===0?"Default Camera":`Camera ${r+1}`)}))}finally{a&&(console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"),l._stopVideoStream(a))}}async hasFlash(){let e;try{if(this.$video.srcObject){if(!(this.$video.srcObject instanceof MediaStream))return!1;e=this.$video.srcObject}else e=(await this._getCameraStream()).stream;return"torch"in e.getVideoTracks()[0].getSettings()}catch{return!1}finally{e&&e!==this.$video.srcObject&&(console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"),l._stopVideoStream(e))}}isFlashOn(){return this._flashOn}async toggleFlash(){this._flashOn?await this.turnFlashOff():await this.turnFlashOn()}async turnFlashOn(){if(!this._flashOn&&!this._destroyed&&(this._flashOn=!0,this._active&&!this._paused))try{if(!await this.hasFlash())throw"No flash available";await this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:!0}]})}catch(e){throw this._flashOn=!1,e}}async turnFlashOff(){this._flashOn&&(this._flashOn=!1,await this._restartVideoStream())}destroy(){this.$video.removeEventListener("loadedmetadata",this._onLoadedMetaData),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._updateOverlay),this._destroyed=!0,this._flashOn=!1,this.stop(),l._postWorkerMessage(this._qrEnginePromise,"close")}async start(){if(this._destroyed)throw Error("The QR scanner can not be started as it had been destroyed.");if((!this._active||this._paused)&&(window.location.protocol!=="https:"&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,!document.hidden))if(this._paused=!1,this.$video.srcObject)await this.$video.play();else try{let{stream:e,facingMode:t}=await this._getCameraStream();!this._active||this._paused?l._stopVideoStream(e):(this._setVideoMirror(t),this.$video.srcObject=e,await this.$video.play(),this._flashOn&&(this._flashOn=!1,this.turnFlashOn().catch(()=>{})))}catch(e){if(!this._paused)throw this._active=!1,e}}stop(){this.pause(),this._active=!1}async pause(e=!1){if(this._paused=!0,!this._active)return!0;this.$video.pause(),this.$overlay&&(this.$overlay.style.display="none");let t=()=>{this.$video.srcObject instanceof MediaStream&&(l._stopVideoStream(this.$video.srcObject),this.$video.srcObject=null)};return e?(t(),!0):(await new Promise(a=>setTimeout(a,300)),this._paused?(t(),!0):!1)}async setCamera(e){e!==this._preferredCamera&&(this._preferredCamera=e,await this._restartVideoStream())}static async scanImage(e,t,a,i,r=!1,c=!1){let h,u=!1;t&&("scanRegion"in t||"qrEngine"in t||"canvas"in t||"disallowCanvasResizing"in t||"alsoTryWithoutScanRegion"in t||"returnDetailedScanResult"in t)?(h=t.scanRegion,a=t.qrEngine,i=t.canvas,r=t.disallowCanvasResizing||!1,c=t.alsoTryWithoutScanRegion||!1,u=!0):console.warn(t||a||i||r||c?"You're using a deprecated api for scanImage which will be removed in the future.":"Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),t=!!a;try{let x,m;[a,x]=await Promise.all([a||l.createQrEngine(),l._loadImage(e)]),[i,m]=l._drawToCanvas(x,h,i,r);let g;if(a instanceof Worker){let n=a;t||l._postWorkerMessageSync(n,"inversionMode","both"),g=await new Promise((o,y)=>{let w,p,_,v=-1;p=S=>{S.data.id===v&&(n.removeEventListener("message",p),n.removeEventListener("error",_),clearTimeout(w),S.data.data!==null?o({data:S.data.data,cornerPoints:l._convertPoints(S.data.cornerPoints,h)}):y(l.NO_QR_CODE_FOUND))},_=S=>{n.removeEventListener("message",p),n.removeEventListener("error",_),clearTimeout(w),y("Scanner error: "+(S?S.message||S:"Unknown Error"))},n.addEventListener("message",p),n.addEventListener("error",_),w=setTimeout(()=>_("timeout"),1e4);let b=m.getImageData(0,0,i.width,i.height);v=l._postWorkerMessageSync(n,"decode",b,[b.data.buffer])})}else g=await Promise.race([new Promise((n,o)=>window.setTimeout(()=>o("Scanner error: timeout"),1e4)),(async()=>{try{var[n]=await a.detect(i);if(!n)throw l.NO_QR_CODE_FOUND;return{data:n.rawValue,cornerPoints:l._convertPoints(n.cornerPoints,h)}}catch(o){if(n=o.message||o,/not implemented|service unavailable/.test(n))return l._disableBarcodeDetector=!0,l.scanImage(e,{scanRegion:h,canvas:i,disallowCanvasResizing:r,alsoTryWithoutScanRegion:c});throw`Scanner error: ${n}`}})()]);return u?g:g.data}catch(x){if(!h||!c)throw x;let m=await l.scanImage(e,{qrEngine:a,canvas:i,disallowCanvasResizing:r});return u?m:m.data}finally{t||l._postWorkerMessage(a,"close")}}setGrayscaleWeights(e,t,a,i=!0){l._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:e,green:t,blue:a,useIntegerApproximation:i})}setInversionMode(e){l._postWorkerMessage(this._qrEnginePromise,"inversionMode",e)}static async createQrEngine(e){if(e&&console.warn("Specifying a worker path is not required and not supported anymore."),e=()=>N(()=>import("./qr-scanner-worker.min-D85Z9gVD.js"),[]).then(a=>a.createWorker()),!(!l._disableBarcodeDetector&&"BarcodeDetector"in window&&BarcodeDetector.getSupportedFormats&&(await BarcodeDetector.getSupportedFormats()).includes("qr_code")))return e();let t=navigator.userAgentData;return t&&t.brands.some(({brand:a})=>/Chromium/i.test(a))&&/mac ?OS/i.test(t.platform)&&await t.getHighEntropyValues(["architecture","platformVersion"]).then(({architecture:a,platformVersion:i})=>/arm/i.test(a||"arm")&&13<=parseInt(i||"13")).catch(()=>!0)?e():new BarcodeDetector({formats:["qr_code"]})}_onPlay(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay(),this.$overlay&&(this.$overlay.style.display=""),this._scanFrame()}_onLoadedMetaData(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_calculateScanRegion(e){let t=Math.round(.6666666666666666*Math.min(e.videoWidth,e.videoHeight));return{x:Math.round((e.videoWidth-t)/2),y:Math.round((e.videoHeight-t)/2),width:t,height:t,downScaledWidth:this._legacyCanvasSize,downScaledHeight:this._legacyCanvasSize}}_updateOverlay(){requestAnimationFrame(()=>{if(this.$overlay){var e=this.$video,t=e.videoWidth,a=e.videoHeight,i=e.offsetWidth,r=e.offsetHeight,c=e.offsetLeft,h=e.offsetTop,u=window.getComputedStyle(e),x=u.objectFit,m=t/a,g=i/r;switch(x){case"none":var n=t,o=a;break;case"fill":n=i,o=r;break;default:(x==="cover"?m>g:m<g)?(o=r,n=o*m):(n=i,o=n/m),x==="scale-down"&&(n=Math.min(n,t),o=Math.min(o,a))}var[y,w]=u.objectPosition.split(" ").map((_,v)=>{const b=parseFloat(_);return _.endsWith("%")?(v?r-o:i-n)*b/100:b});u=this._scanRegion.width||t,g=this._scanRegion.height||a,x=this._scanRegion.x||0;var p=this._scanRegion.y||0;m=this.$overlay.style,m.width=`${u/t*n}px`,m.height=`${g/a*o}px`,m.top=`${h+w+p/a*o}px`,a=/scaleX\(-1\)/.test(e.style.transform),m.left=`${c+(a?i-y-n:y)+(a?t-x-u:x)/t*n}px`,m.transform=e.style.transform}})}static _convertPoints(e,t){if(!t)return e;let a=t.x||0,i=t.y||0,r=t.width&&t.downScaledWidth?t.width/t.downScaledWidth:1;t=t.height&&t.downScaledHeight?t.height/t.downScaledHeight:1;for(let c of e)c.x=c.x*r+a,c.y=c.y*t+i;return e}_scanFrame(){!this._active||this.$video.paused||this.$video.ended||("requestVideoFrameCallback"in this.$video?this.$video.requestVideoFrameCallback.bind(this.$video):requestAnimationFrame)(async()=>{if(!(1>=this.$video.readyState)){var e=Date.now()-this._lastScanTimestamp,t=1e3/this._maxScansPerSecond;e<t&&await new Promise(i=>setTimeout(i,t-e)),this._lastScanTimestamp=Date.now();try{var a=await l.scanImage(this.$video,{scanRegion:this._scanRegion,qrEngine:this._qrEnginePromise,canvas:this.$canvas})}catch(i){if(!this._active)return;this._onDecodeError(i)}!l._disableBarcodeDetector||await this._qrEnginePromise instanceof Worker||(this._qrEnginePromise=l.createQrEngine()),a?(this._onDecode?this._onDecode(a):this._legacyOnDecode&&this._legacyOnDecode(a.data),this.$codeOutlineHighlight&&(clearTimeout(this._codeOutlineHighlightRemovalTimeout),this._codeOutlineHighlightRemovalTimeout=void 0,this.$codeOutlineHighlight.setAttribute("viewBox",`${this._scanRegion.x||0} ${this._scanRegion.y||0} ${this._scanRegion.width||this.$video.videoWidth} ${this._scanRegion.height||this.$video.videoHeight}`),this.$codeOutlineHighlight.firstElementChild.setAttribute("points",a.cornerPoints.map(({x:i,y:r})=>`${i},${r}`).join(" ")),this.$codeOutlineHighlight.style.display="")):this.$codeOutlineHighlight&&!this._codeOutlineHighlightRemovalTimeout&&(this._codeOutlineHighlightRemovalTimeout=setTimeout(()=>this.$codeOutlineHighlight.style.display="none",100))}this._scanFrame()})}_onDecodeError(e){e!==l.NO_QR_CODE_FOUND&&console.log(e)}async _getCameraStream(){if(!navigator.mediaDevices)throw"Camera not found.";let e=/^(environment|user)$/.test(this._preferredCamera)?"facingMode":"deviceId",t=[{width:{min:1024}},{width:{min:768}},{}],a=t.map(i=>Object.assign({},i,{[e]:{exact:this._preferredCamera}}));for(let i of[...a,...t])try{let r=await navigator.mediaDevices.getUserMedia({video:i,audio:!1}),c=this._getFacingMode(r)||(i.facingMode?this._preferredCamera:this._preferredCamera==="environment"?"user":"environment");return{stream:r,facingMode:c}}catch{}throw"Camera not found."}async _restartVideoStream(){let e=this._paused;await this.pause(!0)&&!e&&this._active&&await this.start()}static _stopVideoStream(e){for(let t of e.getTracks())t.stop(),e.removeTrack(t)}_setVideoMirror(e){this.$video.style.transform="scaleX("+(e==="user"?-1:1)+")"}_getFacingMode(e){return(e=e.getVideoTracks()[0])?/rear|back|environment/i.test(e.label)?"environment":/front|user|face/i.test(e.label)?"user":null:null}static _drawToCanvas(e,t,a,i=!1){a=a||document.createElement("canvas");let r=t&&t.x?t.x:0,c=t&&t.y?t.y:0,h=t&&t.width?t.width:e.videoWidth||e.width,u=t&&t.height?t.height:e.videoHeight||e.height;return i||(i=t&&t.downScaledWidth?t.downScaledWidth:h,t=t&&t.downScaledHeight?t.downScaledHeight:u,a.width!==i&&(a.width=i),a.height!==t&&(a.height=t)),t=a.getContext("2d",{alpha:!1}),t.imageSmoothingEnabled=!1,t.drawImage(e,r,c,h,u,0,0,a.width,a.height),[a,t]}static async _loadImage(e){if(e instanceof Image)return await l._awaitImageLoad(e),e;if(e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement||e instanceof SVGImageElement||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas||"ImageBitmap"in window&&e instanceof ImageBitmap)return e;if(e instanceof File||e instanceof Blob||e instanceof URL||typeof e=="string"){let t=new Image;t.src=e instanceof File||e instanceof Blob?URL.createObjectURL(e):e.toString();try{return await l._awaitImageLoad(t),t}finally{(e instanceof File||e instanceof Blob)&&URL.revokeObjectURL(t.src)}}else throw"Unsupported image type."}static async _awaitImageLoad(e){e.complete&&e.naturalWidth!==0||await new Promise((t,a)=>{let i=r=>{e.removeEventListener("load",i),e.removeEventListener("error",i),r instanceof ErrorEvent?a("Image load error"):t()};e.addEventListener("load",i),e.addEventListener("error",i)})}static async _postWorkerMessage(e,t,a,i){return l._postWorkerMessageSync(await e,t,a,i)}static _postWorkerMessageSync(e,t,a,i){if(!(e instanceof Worker))return-1;let r=l._workerMessageId++;return e.postMessage({id:r,type:t,data:a},i),r}}l.DEFAULT_CANVAS_SIZE=400;l.NO_QR_CODE_FOUND="No QR code found";l._disableBarcodeDetector=!1;l._workerMessageId=0;const H="/assets/store-scanner-beep-90395-hQk9Q5dh.mp3",F=()=>{const d=f.useRef(null),e=f.useRef(null),[t,a]=f.useState(!1),[i,r]=f.useState(null),[c,h]=f.useState(!1),{state:u,dispatch:x}=f.useContext(j),[m,g]=f.useState(0);f.useEffect(()=>{let p;return(async()=>{if(d.current){p=new l(d.current,async v=>{c||await w(v.data)},{returnDetailedScanResult:!0});try{await p.start(),a(!0)}catch(v){console.error("Camera access denied or unavailable:",v)}}else console.error("Video element not found")})(),()=>{p==null||p.destroy(),a(!1)}},[c]),f.useEffect(()=>{g(c?100:0)},[c]);const n=p=>{const _=new Date,v=_.getHours(),b=_.getMinutes(),[S,E]=p.split(":").map(Number);return v>S||v===S&&b>E?"Terlambat":(v<S||v===S&&b<E,"Hadir")},o=p=>{x({type:"SET_STATUS",payload:p})};let y;const w=async p=>{h(!0);const _=u.studentList.some(v=>v.studentId.nis===p);r(_?{nis:p,status:n(u.classStartTime),name:u.studentList.find(v=>v.studentId.nis===p).studentId.name}:"Kode QR tidak dikenali!"),e.current&&e.current.play(),y={id:p,newStatus:n(u.classStartTime),timestamp:Date.now()},o(y),console.log(y),e.current&&await new Promise(v=>{e.current.onended=v}),setTimeout(()=>{h(!1)},50)};return s.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full p-4",children:[s.jsxs("div",{className:"relative w-72 h-72 border-2 border-gray-700 shadow-md rounded-md overflow-hidden",children:[c===!0?s.jsx("div",{className:" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:s.jsx(C,{variant:typeof i=="string"?6:2,children:i&&s.jsx("div",{className:"flex-col text-center",children:typeof i=="string"?s.jsx("p",{className:"text-red-500 font-semibold text-base",children:i}):s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"text-gray-700 text-lg",children:i.name}),s.jsx("p",{className:"text-gray-700 text-lg",children:i.nis}),s.jsx("p",{className:"text-green-500 font-bold text-2xl",children:i.status})]})})})}):s.jsx("video",{ref:d,className:"absolute inset-0 w-full h-full object-cover",playsInline:!0}),s.jsxs("div",{className:"absolute inset-[8.25%] w-5/6 h-5/6 pointer-events-none",children:[s.jsx("div",{className:"absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white"}),s.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white"})]})]}),s.jsx("audio",{ref:e,src:H,preload:"auto"})]})},W=()=>{const[d,e]=f.useState(new Date);f.useEffect(()=>{const r=setInterval(()=>{e(new Date)},1e3);return()=>{clearInterval(r)}},[]);const t=r=>r.toLocaleDateString("id-ID",{day:"2-digit",timeZone:"Asia/Jakarta"}),a=r=>r.toLocaleDateString("id-ID",{month:"long",year:"numeric",timeZone:"Asia/Jakarta"}),i=r=>r.toLocaleTimeString("id-ID",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:"Asia/Jakarta"});return s.jsxs("div",{className:"flex items-center",children:[s.jsx("span",{className:"font-semibold text-2xl mr-3",children:t(d)}),s.jsxs("span",{className:"mr-2",children:[a(d),","]}),s.jsxs("span",{className:"",children:[i(d)," WIB"]})]})},V=()=>{const{state:d,dispatch:e}=f.useContext(j);return s.jsxs("div",{className:"border-2 border-primary rounded-full p-2 text-medium text-primary",children:[d.studentList.filter(t=>t.status==="Hadir").length,"/",d.studentList.length]})},q=()=>s.jsxs("div",{className:"card-basic mx-0 rounded-2xl mb-0 justify-between items-center",children:[s.jsx(W,{}),s.jsx(V,{})]}),z=()=>{const{state:d,dispatch:e}=f.useContext(j),t=f.useRef(d.studentList),{isLoading:a,error:i,sendRequest:r}=O(),c=async n=>{try{const o="http://192.168.1.13:5000/api/attendances/",y=JSON.stringify({updates:n});console.log(y);const w=await r(o,"PATCH",y,{"Content-Type":"application/json"});console.log("Successfully updated statuses:",w)}catch(o){console.error("Error updating statuses:",o)}};f.useEffect(()=>{const n=[];d.studentList.forEach((o,y)=>{const w=t.current[y];w&&(w.status!==o.status||w.attributes!==o.attributes||w.notes!==o.notes)&&n.push({attendanceId:o._id,status:o.status,attributes:o.attributes,notes:o.notes,timestamp:o.timestamp})}),n.length>0&&c(n),t.current=d.studentList},[d.studentList]);const h=(n,o,y=Date.now())=>{e({type:"SET_STATUS",payload:{id:n,newStatus:o,timestamp:y}})},u=n=>{e({type:"TOGGLE_SELECTED",payload:{id:n}})},x=()=>{e({type:"TOGGLE_SELECT_ALL"})},m=(n,o=Date.now())=>{e({type:"APPLY_BULK_STATUS",payload:{newStatus:n,timestamp:o}})},g=n=>{switch(n){case"Hadir":return"bg-blue-500/50";case"Terlambat":return"bg-yellow-500/50";case"Sakit":return"bg-violet-500/50";case"Izin":return"bg-orange-500/50";default:return"bg-red-500/50"}};return s.jsxs("div",{className:"p-4 space-y-4 bg-white rounded-2xl",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("h1",{className:"text-lg font-medium",children:"Daftar Hadir"}),d.studentList.length!==0&&(a?s.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[s.jsx(A,{size:24,className:"animate-spin"}),s.jsx("span",{className:"text-xs text-gray-600",children:"Menyimpan otomatis..."})]}):i?s.jsx(D,{icon:"mdi:cloud-alert-outline",width:"24",height:"24"}):s.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[s.jsx(D,{icon:"ci:cloud-check",width:"24",height:"24"}),s.jsx("span",{className:"text-xs text-gray-600",children:"Perubahan tersimpan"})]}))]}),d.studentList.length!==0&&d.isTeachingGroupYearActivated===!0?s.jsxs("div",{className:"inline-flex items-center",children:[s.jsxs("label",{className:"flex items-center cursor-pointer relative",htmlFor:"check-2",children:[s.jsx("input",{type:"checkbox",checked:d.selectAll,onChange:x,className:"peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary",id:"check-2"}),s.jsx("span",{className:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:s.jsx(L,{})})]}),s.jsx("label",{className:"cursor-pointer ml-2 text-sm",htmlFor:"check-2",children:"Pilih Semua"})]}):s.jsx("div",{className:"italic text-gray-500 mt-2",children:"Daftar hadir kosong"}),s.jsx("div",{className:"flex flex-col",children:d.isTeachingGroupYearActivated===!0&&d.studentList.map(n=>s.jsxs("div",{className:`p-4 pr-0 mx-[-1rem] min-h-20 flex items-center gap-4 border-b ${g(n.status)} transition-all duration-500`,children:[s.jsxs("label",{className:"flex items-center cursor-pointer relative",htmlFor:n.studentId.nis,children:[s.jsx("input",{type:"checkbox",checked:!!n.isSelected,onChange:()=>u(n.studentId.nis),className:"peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary",id:n.studentId.nis,disabled:n.status==="Hadir"||n.status==="Terlambat"}),s.jsx("span",{className:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:s.jsx(L,{})})]}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex gap-2 items-center",children:[n.studentId.image?s.jsx("img",{src:`http://192.168.1.13:5000/api/${n.studentId.image}`,alt:"Profile",className:"rounded-full size-10 shrink-0"}):s.jsx(M,{studentName:n.studentId.name,clsName:"size-10 rounded-full bg-blue-200 text-blue-500 flex items-center justify-center font-medium"}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("div",{className:"uppercase",children:n.studentId.name}),s.jsx("div",{className:"text-xs text-gray-800",children:n.studentId.nis})]})]}),s.jsx("div",{className:"space-x-2",children:s.jsxs("select",{value:n.status||"",onChange:o=>h(n.studentId.nis,o.target.value),className:"mt-2 border p-1 rounded-full active:ring-2 active:ring-blue-300",disabled:n.status==="Hadir"||n.status==="Terlambat",children:[s.jsx("option",{value:null,children:"Tanpa Keterangan"}),s.jsx("option",{value:"Hadir",disabled:!0,children:"Hadir"}),s.jsx("option",{value:"Terlambat",disabled:!0,children:"Terlambat"}),s.jsx("option",{value:"Sakit",children:"Sakit"}),s.jsx("option",{value:"Izin",children:"Izin"})]})})]})]},n.studentId.nis))}),d.isTeachingGroupYearActivated===!0&&d.studentList.length!==0&&s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:()=>m("Sakit"),className:"btn-mobile-secondary-outline",disabled:d.studentList.filter(n=>n.isSelected===!0).length===0,children:"Sakit"}),s.jsx("button",{onClick:()=>m("Izin"),className:"btn-mobile-danger-outline",disabled:d.studentList.filter(n=>n.isSelected===!0).length===0,children:"Izin"})]})})]})},ee=()=>{const{error:d,sendRequest:e,setError:t}=O(),[a,i]=f.useState(!0),{state:r,dispatch:c,fetchAttendanceData:h}=f.useContext(j),u=T(),m=f.useContext(k).userClassIds,g=R().classId;f.useEffect(()=>{i(!0);let o;g?(o=new Date().toLocaleDateString("en-CA"),h(g,o,c)):u("/scan/select-class"),i(!1)},[m,g]);const n=async()=>{if(i(!0),r.studentList.length===0){const o="http://192.168.1.13:5000/api/attendances/create-new-attendances",y=JSON.stringify({classId:g});try{await e(o,"POST",y,{"Content-Type":"application/json"});const w=new Date().toLocaleDateString("en-CA");await h(g,w,c),u(`/scan/class/${g}`,{replace:!0})}catch(w){console.error(w)}}i(!1)};return console.log(r),s.jsxs("div",{className:"flex flex-col pb-24",children:[s.jsx(C,{variant:2,children:s.jsx(q,{})}),a&&s.jsx("div",{className:"flex justify-center mt-16 ",children:s.jsx(I,{size:32})}),!a&&s.jsxs(C,{variant:2,children:[r.studentList.length===0&&!a&&s.jsxs("div",{className:"card-basic m-4 justify-between items-center flex flex-col gap-2",children:[s.jsx("button",{onClick:()=>n(),className:"btn-mobile-primary rounded-full w-full",disabled:r.isTeachingGroupYearActivated===!1,children:"Buat daftar hadir hari ini"}),r.isTeachingGroupYearActivated===!1?s.jsx("span",{className:"text-danger",children:"Tahun ajaran belum aktif, hubungi Kelompok Ajar!"}):""]}),r.studentList.length!==0&&!a&&s.jsxs(s.Fragment,{children:[r.isTeachingGroupYearActivated===!0&&s.jsx("div",{className:"card-basic m-4",children:s.jsx(F,{})}),r.isTeachingGroupYearActivated===!1?s.jsx(P,{className:"mx-4 my-12",children:s.jsx("p",{children:"Tahun ajaran belum aktif, hubungi Kelompok Ajar!"})}):""]}),s.jsx(z,{})]})]})};export{ee as default};
