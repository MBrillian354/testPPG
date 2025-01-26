import{R,a as fe,r as S,A as me,b as ge,j as g,L as pe,c as V,E as Ee}from"./index-b338pBx7.js";import{I as k}from"./iconify-CWV_Rern.js";import{c as K}from"./createLucideIcon-CrQEAXE0.js";import{A as we}from"./arrow-down-to-line-Cmeru_C5.js";import{P as Ce}from"./pencil-C40nAcmr.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=K("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=K("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);var Re=Object.defineProperty,z=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,X=(u,a,o)=>a in u?Re(u,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):u[a]=o,B=(u,a)=>{for(var o in a||(a={}))W.call(a,o)&&X(u,o,a[o]);if(z)for(var o of z(a))Z.call(a,o)&&X(u,o,a[o]);return u},U=(u,a)=>{var o={};for(var h in u)W.call(u,h)&&a.indexOf(h)<0&&(o[h]=u[h]);if(u!=null&&z)for(var h of z(u))a.indexOf(h)<0&&Z.call(u,h)&&(o[h]=u[h]);return o};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var I;(u=>{const a=class E{constructor(e,s,t,n){if(this.version=e,this.errorCorrectionLevel=s,this.modules=[],this.isFunction=[],e<E.MIN_VERSION||e>E.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let r=[];for(let i=0;i<this.size;i++)r.push(!1);for(let i=0;i<this.size;i++)this.modules.push(r.slice()),this.isFunction.push(r.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(t);if(this.drawCodewords(c),n==-1){let i=1e9;for(let m=0;m<8;m++){this.applyMask(m),this.drawFormatBits(m);const l=this.getPenaltyScore();l<i&&(n=m,i=l),this.applyMask(m)}}d(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}static encodeText(e,s){const t=u.QrSegment.makeSegments(e);return E.encodeSegments(t,s)}static encodeBinary(e,s){const t=u.QrSegment.makeBytes(e);return E.encodeSegments([t],s)}static encodeSegments(e,s,t=1,n=40,r=-1,c=!0){if(!(E.MIN_VERSION<=t&&t<=n&&n<=E.MAX_VERSION)||r<-1||r>7)throw new RangeError("Invalid value");let i,m;for(i=t;;i++){const p=E.getNumDataCodewords(i,s)*8,N=M.getTotalBits(e,i);if(N<=p){m=N;break}if(i>=n)throw new RangeError("Data too long")}for(const p of[E.Ecc.MEDIUM,E.Ecc.QUARTILE,E.Ecc.HIGH])c&&m<=E.getNumDataCodewords(i,p)*8&&(s=p);let l=[];for(const p of e){o(p.mode.modeBits,4,l),o(p.numChars,p.mode.numCharCountBits(i),l);for(const N of p.getData())l.push(N)}d(l.length==m);const v=E.getNumDataCodewords(i,s)*8;d(l.length<=v),o(0,Math.min(4,v-l.length),l),o(0,(8-l.length%8)%8,l),d(l.length%8==0);for(let p=236;l.length<v;p^=253)o(p,8,l);let y=[];for(;y.length*8<l.length;)y.push(0);return l.forEach((p,N)=>y[N>>>3]|=p<<7-(N&7)),new E(i,s,y,r)}getModule(e,s){return 0<=e&&e<this.size&&0<=s&&s<this.size&&this.modules[s][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0),this.setFunctionModule(t,6,t%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),s=e.length;for(let t=0;t<s;t++)for(let n=0;n<s;n++)t==0&&n==0||t==0&&n==s-1||t==s-1&&n==0||this.drawAlignmentPattern(e[t],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const s=this.errorCorrectionLevel.formatBits<<3|e;let t=s;for(let r=0;r<10;r++)t=t<<1^(t>>>9)*1335;const n=(s<<10|t)^21522;d(n>>>15==0);for(let r=0;r<=5;r++)this.setFunctionModule(8,r,h(n,r));this.setFunctionModule(8,7,h(n,6)),this.setFunctionModule(8,8,h(n,7)),this.setFunctionModule(7,8,h(n,8));for(let r=9;r<15;r++)this.setFunctionModule(14-r,8,h(n,r));for(let r=0;r<8;r++)this.setFunctionModule(this.size-1-r,8,h(n,r));for(let r=8;r<15;r++)this.setFunctionModule(8,this.size-15+r,h(n,r));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;const s=this.version<<12|e;d(s>>>18==0);for(let t=0;t<18;t++){const n=h(s,t),r=this.size-11+t%3,c=Math.floor(t/3);this.setFunctionModule(r,c,n),this.setFunctionModule(c,r,n)}}drawFinderPattern(e,s){for(let t=-4;t<=4;t++)for(let n=-4;n<=4;n++){const r=Math.max(Math.abs(n),Math.abs(t)),c=e+n,i=s+t;0<=c&&c<this.size&&0<=i&&i<this.size&&this.setFunctionModule(c,i,r!=2&&r!=4)}}drawAlignmentPattern(e,s){for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,s+t,Math.max(Math.abs(n),Math.abs(t))!=1)}setFunctionModule(e,s,t){this.modules[s][e]=t,this.isFunction[s][e]=!0}addEccAndInterleave(e){const s=this.version,t=this.errorCorrectionLevel;if(e.length!=E.getNumDataCodewords(s,t))throw new RangeError("Invalid argument");const n=E.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][s],r=E.ECC_CODEWORDS_PER_BLOCK[t.ordinal][s],c=Math.floor(E.getNumRawDataModules(s)/8),i=n-c%n,m=Math.floor(c/n);let l=[];const v=E.reedSolomonComputeDivisor(r);for(let p=0,N=0;p<n;p++){let b=e.slice(N,N+m-r+(p<i?0:1));N+=b.length;const j=E.reedSolomonComputeRemainder(b,v);p<i&&b.push(0),l.push(b.concat(j))}let y=[];for(let p=0;p<l[0].length;p++)l.forEach((N,b)=>{(p!=m-r||b>=i)&&y.push(N[p])});return d(y.length==c),y}drawCodewords(e){if(e.length!=Math.floor(E.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let s=0;for(let t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(let n=0;n<this.size;n++)for(let r=0;r<2;r++){const c=t-r,m=(t+1&2)==0?this.size-1-n:n;!this.isFunction[m][c]&&s<e.length*8&&(this.modules[m][c]=h(e[s>>>3],7-(s&7)),s++)}}d(s==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let s=0;s<this.size;s++)for(let t=0;t<this.size;t++){let n;switch(e){case 0:n=(t+s)%2==0;break;case 1:n=s%2==0;break;case 2:n=t%3==0;break;case 3:n=(t+s)%3==0;break;case 4:n=(Math.floor(t/3)+Math.floor(s/2))%2==0;break;case 5:n=t*s%2+t*s%3==0;break;case 6:n=(t*s%2+t*s%3)%2==0;break;case 7:n=((t+s)%2+t*s%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[s][t]&&n&&(this.modules[s][t]=!this.modules[s][t])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let c=!1,i=0,m=[0,0,0,0,0,0,0];for(let l=0;l<this.size;l++)this.modules[r][l]==c?(i++,i==5?e+=E.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,m),c||(e+=this.finderPenaltyCountPatterns(m)*E.PENALTY_N3),c=this.modules[r][l],i=1);e+=this.finderPenaltyTerminateAndCount(c,i,m)*E.PENALTY_N3}for(let r=0;r<this.size;r++){let c=!1,i=0,m=[0,0,0,0,0,0,0];for(let l=0;l<this.size;l++)this.modules[l][r]==c?(i++,i==5?e+=E.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,m),c||(e+=this.finderPenaltyCountPatterns(m)*E.PENALTY_N3),c=this.modules[l][r],i=1);e+=this.finderPenaltyTerminateAndCount(c,i,m)*E.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let c=0;c<this.size-1;c++){const i=this.modules[r][c];i==this.modules[r][c+1]&&i==this.modules[r+1][c]&&i==this.modules[r+1][c+1]&&(e+=E.PENALTY_N2)}let s=0;for(const r of this.modules)s=r.reduce((c,i)=>c+(i?1:0),s);const t=this.size*this.size,n=Math.ceil(Math.abs(s*20-t*10)/t)-1;return d(0<=n&&n<=9),e+=n*E.PENALTY_N4,d(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,s=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let t=[6];for(let n=this.size-7;t.length<e;n-=s)t.splice(1,0,n);return t}}static getNumRawDataModules(e){if(e<E.MIN_VERSION||e>E.MAX_VERSION)throw new RangeError("Version number out of range");let s=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;s-=(25*t-10)*t-55,e>=7&&(s-=36)}return d(208<=s&&s<=29648),s}static getNumDataCodewords(e,s){return Math.floor(E.getNumRawDataModules(e)/8)-E.ECC_CODEWORDS_PER_BLOCK[s.ordinal][e]*E.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let s=[];for(let n=0;n<e-1;n++)s.push(0);s.push(1);let t=1;for(let n=0;n<e;n++){for(let r=0;r<s.length;r++)s[r]=E.reedSolomonMultiply(s[r],t),r+1<s.length&&(s[r]^=s[r+1]);t=E.reedSolomonMultiply(t,2)}return s}static reedSolomonComputeRemainder(e,s){let t=s.map(n=>0);for(const n of e){const r=n^t.shift();t.push(0),s.forEach((c,i)=>t[i]^=E.reedSolomonMultiply(c,r))}return t}static reedSolomonMultiply(e,s){if(e>>>8||s>>>8)throw new RangeError("Byte out of range");let t=0;for(let n=7;n>=0;n--)t=t<<1^(t>>>7)*285,t^=(s>>>n&1)*e;return d(t>>>8==0),t}finderPenaltyCountPatterns(e){const s=e[1];d(s<=this.size*3);const t=s>0&&e[2]==s&&e[3]==s*3&&e[4]==s&&e[5]==s;return(t&&e[0]>=s*4&&e[6]>=s?1:0)+(t&&e[6]>=s*4&&e[0]>=s?1:0)}finderPenaltyTerminateAndCount(e,s,t){return e&&(this.finderPenaltyAddHistory(s,t),s=0),s+=this.size,this.finderPenaltyAddHistory(s,t),this.finderPenaltyCountPatterns(t)}finderPenaltyAddHistory(e,s){s[0]==0&&(e+=this.size),s.pop(),s.unshift(e)}};a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],u.QrCode=a;function o(w,e,s){if(e<0||e>31||w>>>e)throw new RangeError("Value out of range");for(let t=e-1;t>=0;t--)s.push(w>>>t&1)}function h(w,e){return(w>>>e&1)!=0}function d(w){if(!w)throw new Error("Assertion error")}const f=class C{constructor(e,s,t){if(this.mode=e,this.numChars=s,this.bitData=t,s<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}static makeBytes(e){let s=[];for(const t of e)o(t,8,s);return new C(C.Mode.BYTE,e.length,s)}static makeNumeric(e){if(!C.isNumeric(e))throw new RangeError("String contains non-numeric characters");let s=[];for(let t=0;t<e.length;){const n=Math.min(e.length-t,3);o(parseInt(e.substring(t,t+n),10),n*3+1,s),t+=n}return new C(C.Mode.NUMERIC,e.length,s)}static makeAlphanumeric(e){if(!C.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let s=[],t;for(t=0;t+2<=e.length;t+=2){let n=C.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t))*45;n+=C.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),o(n,11,s)}return t<e.length&&o(C.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,s),new C(C.Mode.ALPHANUMERIC,e.length,s)}static makeSegments(e){return e==""?[]:C.isNumeric(e)?[C.makeNumeric(e)]:C.isAlphanumeric(e)?[C.makeAlphanumeric(e)]:[C.makeBytes(C.toUtf8ByteArray(e))]}static makeEci(e){let s=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)o(e,8,s);else if(e<16384)o(2,2,s),o(e,14,s);else if(e<1e6)o(6,3,s),o(e,21,s);else throw new RangeError("ECI assignment value out of range");return new C(C.Mode.ECI,0,s)}static isNumeric(e){return C.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return C.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,s){let t=0;for(const n of e){const r=n.mode.numCharCountBits(s);if(n.numChars>=1<<r)return 1/0;t+=4+r+n.bitData.length}return t}static toUtf8ByteArray(e){e=encodeURI(e);let s=[];for(let t=0;t<e.length;t++)e.charAt(t)!="%"?s.push(e.charCodeAt(t)):(s.push(parseInt(e.substring(t+1,t+3),16)),t+=2);return s}};f.NUMERIC_REGEX=/^[0-9]*$/,f.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,f.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let M=f;u.QrSegment=f})(I||(I={}));(u=>{(a=>{const o=class{constructor(d,f){this.ordinal=d,this.formatBits=f}};o.LOW=new o(0,1),o.MEDIUM=new o(1,0),o.QUARTILE=new o(2,3),o.HIGH=new o(3,2),a.Ecc=o})(u.QrCode||(u.QrCode={}))})(I||(I={}));(u=>{(a=>{const o=class{constructor(d,f){this.modeBits=d,this.numBitsCharCount=f}numCharCountBits(d){return this.numBitsCharCount[Math.floor((d+7)/17)]}};o.NUMERIC=new o(1,[10,12,14]),o.ALPHANUMERIC=new o(2,[9,11,13]),o.BYTE=new o(4,[8,16,16]),o.KANJI=new o(8,[8,10,12]),o.ECI=new o(7,[0,0,0]),a.Mode=o})(u.QrSegment||(u.QrSegment={}))})(I||(I={}));var L=I;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var ye={L:L.QrCode.Ecc.LOW,M:L.QrCode.Ecc.MEDIUM,Q:L.QrCode.Ecc.QUARTILE,H:L.QrCode.Ecc.HIGH},J=128,q="L",ee="#FFFFFF",te="#000000",se=!1,ne=1,ve=4,be=0,Ae=.1;function re(u,a=0){const o=[];return u.forEach(function(h,d){let f=null;h.forEach(function(M,w){if(!M&&f!==null){o.push(`M${f+a} ${d+a}h${w-f}v1H${f+a}z`),f=null;return}if(w===h.length-1){if(!M)return;f===null?o.push(`M${w+a},${d+a} h1v1H${w+a}z`):o.push(`M${f+a},${d+a} h${w+1-f}v1H${f+a}z`);return}M&&f===null&&(f=w)})}),o.join("")}function oe(u,a){return u.slice().map((o,h)=>h<a.y||h>=a.y+a.h?o:o.map((d,f)=>f<a.x||f>=a.x+a.w?d:!1))}function Pe(u,a,o,h){if(h==null)return null;const d=u.length+o*2,f=Math.floor(a*Ae),M=d/a,w=(h.width||f)*M,e=(h.height||f)*M,s=h.x==null?u.length/2-w/2:h.x*M,t=h.y==null?u.length/2-e/2:h.y*M,n=h.opacity==null?1:h.opacity;let r=null;if(h.excavate){let i=Math.floor(s),m=Math.floor(t),l=Math.ceil(w+s-i),v=Math.ceil(e+t-m);r={x:i,y:m,w:l,h:v}}const c=h.crossOrigin;return{x:s,y:t,h:e,w,excavation:r,opacity:n,crossOrigin:c}}function xe(u,a){return a!=null?Math.max(Math.floor(a),0):u?ve:be}function ie({value:u,level:a,minVersion:o,includeMargin:h,marginSize:d,imageSettings:f,size:M,boostLevel:w}){let e=R.useMemo(()=>{const i=(Array.isArray(u)?u:[u]).reduce((m,l)=>(m.push(...L.QrSegment.makeSegments(l)),m),[]);return L.QrCode.encodeSegments(i,ye[a],o,void 0,void 0,w)},[u,a,o,w]);const{cells:s,margin:t,numCells:n,calculatedImageSettings:r}=R.useMemo(()=>{let c=e.getModules();const i=xe(h,d),m=c.length+i*2,l=Pe(c,M,i,f);return{cells:c,margin:i,numCells:m,calculatedImageSettings:l}},[e,M,f,h,d]);return{qrcode:e,margin:t,cells:s,numCells:n,calculatedImageSettings:r}}var Ie=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),ae=R.forwardRef(function(a,o){const h=a,{value:d,size:f=J,level:M=q,bgColor:w=ee,fgColor:e=te,includeMargin:s=se,minVersion:t=ne,boostLevel:n,marginSize:r,imageSettings:c}=h,m=U(h,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:l}=m,v=U(m,["style"]),y=c==null?void 0:c.src,p=R.useRef(null),N=R.useRef(null),b=R.useCallback(x=>{p.current=x,typeof o=="function"?o(x):o&&(o.current=x)},[o]),[j,_]=R.useState(!1),{margin:O,cells:F,numCells:T,calculatedImageSettings:A}=ie({value:d,level:M,minVersion:t,boostLevel:n,includeMargin:s,marginSize:r,imageSettings:c,size:f});R.useEffect(()=>{if(p.current!=null){const x=p.current,P=x.getContext("2d");if(!P)return;let $=F;const D=N.current,H=A!=null&&D!==null&&D.complete&&D.naturalHeight!==0&&D.naturalWidth!==0;H&&A.excavation!=null&&($=oe(F,A.excavation));const G=window.devicePixelRatio||1;x.height=x.width=f*G;const Y=f/T*G;P.scale(Y,Y),P.fillStyle=w,P.fillRect(0,0,T,T),P.fillStyle=e,Ie?P.fill(new Path2D(re($,O))):F.forEach(function(ce,he){ce.forEach(function(ue,de){ue&&P.fillRect(de+O,he+O,1,1)})}),A&&(P.globalAlpha=A.opacity),H&&P.drawImage(D,A.x+O,A.y+O,A.w,A.h)}}),R.useEffect(()=>{_(!1)},[y]);const le=B({height:f,width:f},l);let Q=null;return y!=null&&(Q=R.createElement("img",{src:y,key:y,style:{display:"none"},onLoad:()=>{_(!0)},ref:N,crossOrigin:A==null?void 0:A.crossOrigin})),R.createElement(R.Fragment,null,R.createElement("canvas",B({style:le,height:f,width:f,ref:b,role:"img"},v)),Q)});ae.displayName="QRCodeCanvas";var Se=R.forwardRef(function(a,o){const h=a,{value:d,size:f=J,level:M=q,bgColor:w=ee,fgColor:e=te,includeMargin:s=se,minVersion:t=ne,boostLevel:n,title:r,marginSize:c,imageSettings:i}=h,m=U(h,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:l,cells:v,numCells:y,calculatedImageSettings:p}=ie({value:d,level:M,minVersion:t,boostLevel:n,includeMargin:s,marginSize:c,imageSettings:i,size:f});let N=v,b=null;i!=null&&p!=null&&(p.excavation!=null&&(N=oe(v,p.excavation)),b=R.createElement("image",{href:i.src,height:p.h,width:p.w,x:p.x+l,y:p.y+l,preserveAspectRatio:"none",opacity:p.opacity,crossOrigin:p.crossOrigin}));const j=re(N,l);return R.createElement("svg",B({height:f,width:f,viewBox:`0 0 ${y} ${y}`,ref:o,role:"img"},m),!!r&&R.createElement("title",null,r),R.createElement("path",{fill:w,d:`M0,0 h${y}v${y}H0z`,shapeRendering:"crispEdges"}),R.createElement("path",{fill:e,d:j,shapeRendering:"crispEdges"}),b)});Se.displayName="QRCodeSVG";const Te=()=>{const{isLoading:u,sendRequest:a}=fe(),[o,h]=S.useState([]),[d,f]=S.useState(null),[M,w]=S.useState(),[e,s]=S.useState(!1),t=S.useContext(me),n=ge().studentId,r=i=>new Date(i).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Jakarta"});S.useEffect(()=>{(async()=>{const m=n?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/students/${n}`:`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/students/user/${t.userId}`;try{const l=await a(m);w(l.student.isProfileComplete),h([{label:"NIS",value:l.student.nis,icon:g.jsx(k,{icon:"icon-park-outline:id-card-h",width:"24",height:"24"})},{label:"Tanggal Lahir",value:r(l.student.dateOfBirth),icon:g.jsx(k,{icon:"material-symbols:date-range-outline",width:"24",height:"24"})},{label:"Jenis Kelamin",value:l.student.gender==="male"?"Laki-laki":"Perempuan",icon:g.jsx(k,{icon:"tabler:gender-bigender",width:"24",height:"24"})},{label:"Nama Orang Tua",value:l.student.parentName,icon:g.jsx(k,{icon:"ri:parent-line",width:"24",height:"24"})},{label:"Alamat",value:l.student.address,icon:g.jsx(k,{icon:"ph:map-pin-bold",width:"24",height:"24"})}]),f({name:l.student.name,nis:l.student.nis,image:l.student.image,branch:l.student.userId.teachingGroupId.branchId.name,teachingGroup:l.student.userId.teachingGroupId.name})}catch{}})()},[a]);const c=()=>{const m=document.querySelector("canvas").toDataURL("image/png"),l=document.createElement("a"),v=d.name.replace(/\s+/g,"")+"_"+d.teachingGroup.replace(/\s+/g,"");l.href=m,l.download=`${v}_QRCode.png`,l.click()};return g.jsxs("div",{className:"min-h-screen bg-gray-50 p-4 md:p-8 pb-24",children:[u&&g.jsx("div",{className:"flex justify-center mt-16",children:g.jsx(pe,{size:32})}),!u&&o.length>0&&d&&g.jsxs(g.Fragment,{children:[!M&&g.jsx(V,{to:`/dashboard/students/${n}/update`,children:g.jsx(Ee,{error:"Profile belum lengkap! Lengkapi",onClear:()=>setError(null)})}),g.jsx("h1",{className:"text-2xl font-medium mb-6 text-gray-700",children:"Data Peserta Didik"}),g.jsxs("div",{className:"flex flex-col md:flex-row gap-8",children:[g.jsxs("div",{className:"card-basic border mx-0 py-12 flex flex-col items-center flex-1 basis-96 min-w-80 md:max-w-96",children:[g.jsxs("div",{className:"relative",children:[e?g.jsx(ae,{value:o.find(i=>i.label==="NIS").value,size:256,level:"H",className:"mt-2 rounded-md size-48 md:size-64 shrink-0"}):g.jsx("img",{src:d!=null&&d.image?`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/${d.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",alt:"Profile",className:"mt-2 rounded-md size-48 md:size-64 shrink-0"}),t.userRole!=="teacher"&&t.userRole!=="student"&&M&&g.jsxs(g.Fragment,{children:[g.jsx("button",{className:"absolute bottom-1 right-1 bg-white p-2 rounded-full border border-gray-300",onClick:()=>s(i=>!i),children:e?g.jsx(Ne,{className:"w-6 h-6"}):g.jsx(Me,{className:"w-6 h-6"})}),g.jsx("button",{className:"absolute bottom-1 right-14 bg-white p-2 rounded-full border border-gray-300",hidden:!e,onClick:c,children:g.jsx(we,{className:"w-6 h-6"})})]})]}),g.jsx("h2",{className:"mt-4 text-lg font-normal",children:d.name}),g.jsx("p",{className:"mt-2 text-gray-600",children:d.nis}),g.jsxs("div",{className:"mt-4 flex flex-col md:flex-row gap-2 text-center",children:[g.jsx("span",{className:"badge-primary",children:d.branch}),g.jsx("span",{className:"badge-primary",children:d.teachingGroup})]})]}),g.jsxs("div",{className:"card-basic p-8 flex flex-col border mx-0 flex-1 justify-between",children:[g.jsxs("ul",{className:"space-y-6",children:[g.jsx("h2",{className:"text-lg mb-8",children:"Profile Peserta Didik"}),o.map((i,m)=>g.jsxs("li",{className:"flex items-center gap-2 mb-2",children:[i.icon&&g.jsx("div",{className:"text-primary",children:i.icon}),g.jsxs("span",{className:"font-semibold",children:[i.label,":"]}),g.jsx("span",{className:"font-medium text-gray-700",children:i.value})]},m))]}),g.jsx(V,{to:`/dashboard/students/${n}/update`,className:"place-self-end",children:g.jsxs("button",{className:"button-primary pl-[11px] mt-0",children:[g.jsx(Ce,{className:"w-4 h-4 mr-2"}),"Edit Profile"]})})]})]})]})]})};export{Te as default};
