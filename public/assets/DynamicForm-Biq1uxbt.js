import{R as U,w as Fr,r as ir,j as V}from"./index-CUVeWTx6.js";import{i as Ar}from"./iconify-icon-C1YYA-Pd.js";var ge=e=>e.type==="checkbox",te=e=>e instanceof Date,j=e=>e==null;const ar=e=>typeof e=="object";var p=e=>!j(e)&&!Array.isArray(e)&&ar(e)&&!te(e),Vr=e=>p(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,Dr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,pr=(e,s)=>e.has(Dr(s)),Sr=e=>{const s=e.constructor&&e.constructor.prototype;return p(s)&&s.hasOwnProperty("isPrototypeOf")},Ce=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function W(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ce&&(e instanceof Blob||e instanceof FileList))&&(r||p(e)))if(s=r?[]:{},!r&&!Sr(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=W(e[n]));else return e;return s}var Fe=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,f=(e,s,r)=>{if(!s||!p(e))return r;const n=Fe(s.split(/[,[\].]+?/)).reduce((u,l)=>j(u)?u:u[l],e);return D(n)||n===e?D(e[s])?r:e[s]:n},K=e=>typeof e=="boolean",Pe=e=>/^\w*$/.test(e),nr=e=>Fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,r)=>{let n=-1;const u=Pe(s)?[s]:nr(s),l=u.length,y=l-1;for(;++n<l;){const v=u[n];let L=r;if(n!==y){const M=e[v];L=p(M)||Array.isArray(M)?M:isNaN(+u[n+1])?{}:[]}if(v==="__proto__")return;e[v]=L,e=e[v]}return e};const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};U.createContext(null);var kr=(e,s,r,n=!0)=>{const u={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const y=l;return s._proxyFormState[y]!==z.all&&(s._proxyFormState[y]=!n||z.all),e[y]}});return u},T=e=>p(e)&&!Object.keys(e).length,Er=(e,s,r,n)=>{r(e);const{name:u,...l}=e;return T(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(y=>s[y]===z.all)},be=e=>Array.isArray(e)?e:[e];function Nr(e){const s=U.useRef(e);s.current=e,U.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var J=e=>typeof e=="string",Or=(e,s,r,n,u)=>J(e)?(n&&s.watch.add(e),f(r,e,u)):Array.isArray(e)?e.map(l=>(n&&s.watch.add(l),f(r,l))):(n&&(s.watchAll=!0),r),Cr=(e,s,r,n,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:u||!0}}:{},ze=e=>({isOnSubmit:!e||e===z.onSubmit,isOnBlur:e===z.onBlur,isOnChange:e===z.onChange,isOnAll:e===z.all,isOnTouch:e===z.onTouched}),Ke=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const ye=(e,s,r,n)=>{for(const u of r||Object.keys(e)){const l=f(e,u);if(l){const{_f:y,...v}=l;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],u)&&!n)return!0;if(y.ref&&s(y.ref,y.name)&&!n)return!0;if(ye(v,s))break}else if(p(v)&&ye(v,s))break}}};var Pr=(e,s,r)=>{const n=be(f(e,r));return A(n,"root",s[r]),A(e,r,n),e},Ie=e=>e.type==="file",X=e=>typeof e=="function",xe=e=>{if(!Ce)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},_e=e=>J(e),je=e=>e.type==="radio",me=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Ge={value:!0,isValid:!0};var lr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?Ge:{value:e[0].value,isValid:!0}:Ge:Je}return Je};const Qe={isValid:!1,value:null};var ur=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Qe):Qe;function Xe(e,s,r="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||K(e)&&!e)return{type:r,message:_e(e)?e:"",ref:s}}var ne=e=>p(e)&&!me(e)?e:{value:e,message:""},Ze=async(e,s,r,n,u)=>{const{ref:l,refs:y,required:v,maxLength:L,minLength:M,min:F,max:x,pattern:se,validate:q,name:P,valueAsNumber:le,mount:R,disabled:g}=e._f,b=f(s,P);if(!R||g)return{};const Y=y?y[0]:l,G=m=>{n&&Y.reportValidity&&(Y.setCustomValidity(K(m)?"":m||""),Y.reportValidity())},S={},ie=je(l),he=ge(l),ee=ie||he,ae=(le||Ie(l))&&D(l.value)&&D(b)||xe(l)&&l.value===""||b===""||Array.isArray(b)&&!b.length,B=Cr.bind(null,P,r,S),ve=(m,w,k,C=Q.maxLength,H=Q.minLength)=>{const $=m?w:k;S[P]={type:m?C:H,message:$,ref:l,...B(m?C:H,$)}};if(u?!Array.isArray(b)||!b.length:v&&(!ee&&(ae||j(b))||K(b)&&!b||he&&!lr(y).isValid||ie&&!ur(y).isValid)){const{value:m,message:w}=_e(v)?{value:!!v,message:v}:ne(v);if(m&&(S[P]={type:Q.required,message:w,ref:Y,...B(Q.required,w)},!r))return G(w),S}if(!ae&&(!j(F)||!j(x))){let m,w;const k=ne(x),C=ne(F);if(!j(b)&&!isNaN(b)){const H=l.valueAsNumber||b&&+b;j(k.value)||(m=H>k.value),j(C.value)||(w=H<C.value)}else{const H=l.valueAsDate||new Date(b),$=ce=>new Date(new Date().toDateString()+" "+ce),ue=l.type=="time",oe=l.type=="week";J(k.value)&&b&&(m=ue?$(b)>$(k.value):oe?b>k.value:H>new Date(k.value)),J(C.value)&&b&&(w=ue?$(b)<$(C.value):oe?b<C.value:H<new Date(C.value))}if((m||w)&&(ve(!!m,k.message,C.message,Q.max,Q.min),!r))return G(S[P].message),S}if((L||M)&&!ae&&(J(b)||u&&Array.isArray(b))){const m=ne(L),w=ne(M),k=!j(m.value)&&b.length>+m.value,C=!j(w.value)&&b.length<+w.value;if((k||C)&&(ve(k,m.message,w.message),!r))return G(S[P].message),S}if(se&&!ae&&J(b)){const{value:m,message:w}=ne(se);if(me(m)&&!b.match(m)&&(S[P]={type:Q.pattern,message:w,ref:l,...B(Q.pattern,w)},!r))return G(w),S}if(q){if(X(q)){const m=await q(b,s),w=Xe(m,Y);if(w&&(S[P]={...w,...B(Q.validate,w.message)},!r))return G(w.message),S}else if(p(q)){let m={};for(const w in q){if(!T(m)&&!r)break;const k=Xe(await q[w](b,s),Y,w);k&&(m={...k,...B(w,k.message)},G(k.message),r&&(S[P]=m))}if(!T(m)&&(S[P]={ref:Y,...m},!r))return S}}return G(!0),S};function Ir(e,s){const r=s.slice(0,-1).length;let n=0;for(;n<r;)e=D(e)?n++:e[s[n++]];return e}function jr(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function E(e,s){const r=Array.isArray(s)?s:Pe(s)?[s]:nr(s),n=r.length===1?e:Ir(e,r),u=r.length-1,l=r[u];return n&&delete n[l],u!==0&&(p(n)&&T(n)||Array.isArray(n)&&jr(n))&&E(e,r.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}},Oe=e=>j(e)||!ar(e);function Z(e,s){if(Oe(e)||Oe(s))return e===s;if(te(e)&&te(s))return e.getTime()===s.getTime();const r=Object.keys(e),n=Object.keys(s);if(r.length!==n.length)return!1;for(const u of r){const l=e[u];if(!n.includes(u))return!1;if(u!=="ref"){const y=s[u];if(te(l)&&te(y)||p(l)&&p(y)||Array.isArray(l)&&Array.isArray(y)?!Z(l,y):l!==y)return!1}}return!0}var or=e=>e.type==="select-multiple",Tr=e=>je(e)||ge(e),Ee=e=>xe(e)&&e.isConnected,cr=e=>{for(const s in e)if(X(e[s]))return!0;return!1};function we(e,s={}){const r=Array.isArray(e);if(p(e)||r)for(const n in e)Array.isArray(e[n])||p(e[n])&&!cr(e[n])?(s[n]=Array.isArray(e[n])?[]:{},we(e[n],s[n])):j(e[n])||(s[n]=!0);return s}function dr(e,s,r){const n=Array.isArray(e);if(p(e)||n)for(const u in e)Array.isArray(e[u])||p(e[u])&&!cr(e[u])?D(s)||Oe(r[u])?r[u]=Array.isArray(e[u])?we(e[u],[]):{...we(e[u])}:dr(e[u],j(s)?{}:s[u],r[u]):r[u]=!Z(e[u],s[u]);return r}var de=(e,s)=>dr(e,s,we(s)),fr=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:n})=>D(e)?e:s?e===""?NaN:e&&+e:r&&J(e)?new Date(e):n?n(e):e;function Ne(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Ie(s)?s.files:je(s)?ur(e.refs).value:or(s)?[...s.selectedOptions].map(({value:r})=>r):ge(s)?lr(e.refs).value:fr(D(s.value)?e.ref.value:s.value,e)}var Lr=(e,s,r,n)=>{const u={};for(const l of e){const y=f(s,l);y&&A(u,l,y._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:n}},fe=e=>D(e)?e:me(e)?e.source:p(e)?me(e.value)?e.value.source:e.value:e;const er="AsyncFunction";var Rr=e=>(!e||!e.validate)&&!!(X(e.validate)&&e.validate.constructor.name===er||p(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===er)),Ur=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function rr(e,s,r){const n=f(e,r);if(n||Pe(r))return{error:n,name:r};const u=r.split(".");for(;u.length;){const l=u.join("."),y=f(s,l),v=f(e,l);if(y&&!Array.isArray(y)&&r!==l)return{name:r};if(v&&v.type)return{name:l,error:v};u.pop()}return{name:r}}var Mr=(e,s,r,n,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?n.isOnBlur:u.isOnBlur)?!e:(r?n.isOnChange:u.isOnChange)?e:!0,qr=(e,s)=>!Fe(f(e,s)).length&&E(e,s);const Br={mode:z.onSubmit,reValidateMode:z.onChange,shouldFocusError:!0};function $r(e={}){let s={...Br,...e},r={submitCount:0,isDirty:!1,isLoading:X(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},u=p(s.defaultValues)||p(s.values)?W(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:W(u),y={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,M=0;const F={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:ke(),array:ke(),state:ke()},se=ze(s.mode),q=ze(s.reValidateMode),P=s.criteriaMode===z.all,le=t=>i=>{clearTimeout(M),M=setTimeout(t,i)},R=async t=>{if(!e.disabled&&(F.isValid||t)){const i=s.resolver?T((await ee()).errors):await B(n,!0);i!==r.isValid&&x.state.next({isValid:i})}},g=(t,i)=>{!e.disabled&&(F.isValidating||F.validatingFields)&&((t||Array.from(v.mount)).forEach(a=>{a&&(i?A(r.validatingFields,a,i):E(r.validatingFields,a))}),x.state.next({validatingFields:r.validatingFields,isValidating:!T(r.validatingFields)}))},b=(t,i=[],a,d,c=!0,o=!0)=>{if(d&&a&&!e.disabled){if(y.action=!0,o&&Array.isArray(f(n,t))){const h=a(f(n,t),d.argA,d.argB);c&&A(n,t,h)}if(o&&Array.isArray(f(r.errors,t))){const h=a(f(r.errors,t),d.argA,d.argB);c&&A(r.errors,t,h),qr(r.errors,t)}if(F.touchedFields&&o&&Array.isArray(f(r.touchedFields,t))){const h=a(f(r.touchedFields,t),d.argA,d.argB);c&&A(r.touchedFields,t,h)}F.dirtyFields&&(r.dirtyFields=de(u,l)),x.state.next({name:t,isDirty:m(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else A(l,t,i)},Y=(t,i)=>{A(r.errors,t,i),x.state.next({errors:r.errors})},G=t=>{r.errors=t,x.state.next({errors:r.errors,isValid:!1})},S=(t,i,a,d)=>{const c=f(n,t);if(c){const o=f(l,t,D(a)?f(u,t):a);D(o)||d&&d.defaultChecked||i?A(l,t,i?o:Ne(c._f)):C(t,o),y.mount&&R()}},ie=(t,i,a,d,c)=>{let o=!1,h=!1;const _={name:t};if(!e.disabled){const N=!!(f(n,t)&&f(n,t)._f&&f(n,t)._f.disabled);if(!a||d){F.isDirty&&(h=r.isDirty,r.isDirty=_.isDirty=m(),o=h!==_.isDirty);const O=N||Z(f(u,t),i);h=!!(!N&&f(r.dirtyFields,t)),O||N?E(r.dirtyFields,t):A(r.dirtyFields,t,!0),_.dirtyFields=r.dirtyFields,o=o||F.dirtyFields&&h!==!O}if(a){const O=f(r.touchedFields,t);O||(A(r.touchedFields,t,a),_.touchedFields=r.touchedFields,o=o||F.touchedFields&&O!==a)}o&&c&&x.state.next(_)}return o?_:{}},he=(t,i,a,d)=>{const c=f(r.errors,t),o=F.isValid&&K(i)&&r.isValid!==i;if(e.delayError&&a?(L=le(()=>Y(t,a)),L(e.delayError)):(clearTimeout(M),L=null,a?A(r.errors,t,a):E(r.errors,t)),(a?!Z(c,a):c)||!T(d)||o){const h={...d,...o&&K(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...h},x.state.next(h)}},ee=async t=>{g(t,!0);const i=await s.resolver(l,s.context,Lr(t||v.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return g(t),i},ae=async t=>{const{errors:i}=await ee(t);if(t)for(const a of t){const d=f(i,a);d?A(r.errors,a,d):E(r.errors,a)}else r.errors=i;return i},B=async(t,i,a={valid:!0})=>{for(const d in t){const c=t[d];if(c){const{_f:o,...h}=c;if(o){const _=v.array.has(o.name),N=c._f&&Rr(c._f);N&&F.validatingFields&&g([d],!0);const O=await Ze(c,l,P,s.shouldUseNativeValidation&&!i,_);if(N&&F.validatingFields&&g([d]),O[o.name]&&(a.valid=!1,i))break;!i&&(f(O,o.name)?_?Pr(r.errors,O,o.name):A(r.errors,o.name,O[o.name]):E(r.errors,o.name))}!T(h)&&await B(h,i,a)}}return a.valid},ve=()=>{for(const t of v.unMount){const i=f(n,t);i&&(i._f.refs?i._f.refs.every(a=>!Ee(a)):!Ee(i._f.ref))&&Ve(t)}v.unMount=new Set},m=(t,i)=>!e.disabled&&(t&&i&&A(l,t,i),!Z(Te(),u)),w=(t,i,a)=>Or(t,v,{...y.mount?l:D(i)?u:J(t)?{[t]:i}:i},a,i),k=t=>Fe(f(y.mount?l:u,t,e.shouldUnregister?f(u,t,[]):[])),C=(t,i,a={})=>{const d=f(n,t);let c=i;if(d){const o=d._f;o&&(!o.disabled&&A(l,t,fr(i,o)),c=xe(o.ref)&&j(i)?"":i,or(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?ge(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(_=>_===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Ie(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||x.values.next({name:t,values:{...l}})))}(a.shouldDirty||a.shouldTouch)&&ie(t,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ce(t)},H=(t,i,a)=>{for(const d in i){const c=i[d],o=`${t}.${d}`,h=f(n,o);(v.array.has(t)||p(c)||h&&!h._f)&&!te(c)?H(o,c,a):C(o,c,a)}},$=(t,i,a={})=>{const d=f(n,t),c=v.array.has(t),o=W(i);A(l,t,o),c?(x.array.next({name:t,values:{...l}}),(F.isDirty||F.dirtyFields)&&a.shouldDirty&&x.state.next({name:t,dirtyFields:de(u,l),isDirty:m(t,o)})):d&&!d._f&&!j(o)?H(t,o,a):C(t,o,a),Ke(t,v)&&x.state.next({...r}),x.values.next({name:y.mount?t:void 0,values:{...l}})},ue=async t=>{y.mount=!0;const i=t.target;let a=i.name,d=!0;const c=f(n,a),o=()=>i.type?Ne(c._f):Vr(t),h=_=>{d=Number.isNaN(_)||te(_)&&isNaN(_.getTime())||Z(_,f(l,a,_))};if(c){let _,N;const O=o(),re=t.type===He.BLUR||t.type===He.FOCUS_OUT,xr=!Ur(c._f)&&!s.resolver&&!f(r.errors,a)&&!c._f.deps||Mr(re,f(r.touchedFields,a),r.isSubmitted,q,se),pe=Ke(a,v,re);A(l,a,O),re?(c._f.onBlur&&c._f.onBlur(t),L&&L(0)):c._f.onChange&&c._f.onChange(t);const Se=ie(a,O,re,!1),mr=!T(Se)||pe;if(!re&&x.values.next({name:a,type:t.type,values:{...l}}),xr)return F.isValid&&(e.mode==="onBlur"?re&&R():R()),mr&&x.state.next({name:a,...pe?{}:Se});if(!re&&pe&&x.state.next({...r}),s.resolver){const{errors:We}=await ee([a]);if(h(O),d){const wr=rr(r.errors,n,a),Ye=rr(We,n,wr.name||a);_=Ye.error,a=Ye.name,N=T(We)}}else g([a],!0),_=(await Ze(c,l,P,s.shouldUseNativeValidation))[a],g([a]),h(O),d&&(_?N=!1:F.isValid&&(N=await B(n,!0)));d&&(c._f.deps&&ce(c._f.deps),he(a,N,_,Se))}},oe=(t,i)=>{if(f(r.errors,i)&&t.focus)return t.focus(),1},ce=async(t,i={})=>{let a,d;const c=be(t);if(s.resolver){const o=await ae(D(t)?t:c);a=T(o),d=t?!c.some(h=>f(o,h)):a}else t?(d=(await Promise.all(c.map(async o=>{const h=f(n,o);return await B(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!d&&!r.isValid)&&R()):d=a=await B(n);return x.state.next({...!J(t)||F.isValid&&a!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:a}:{},errors:r.errors}),i.shouldFocus&&!d&&ye(n,oe,t?c:v.mount),d},Te=t=>{const i={...y.mount?l:u};return D(t)?i:J(t)?f(i,t):t.map(a=>f(i,a))},Le=(t,i)=>({invalid:!!f((i||r).errors,t),isDirty:!!f((i||r).dirtyFields,t),error:f((i||r).errors,t),isValidating:!!f(r.validatingFields,t),isTouched:!!f((i||r).touchedFields,t)}),hr=t=>{t&&be(t).forEach(i=>E(r.errors,i)),x.state.next({errors:t?r.errors:{}})},Re=(t,i,a)=>{const d=(f(n,t,{_f:{}})._f||{}).ref,c=f(r.errors,t)||{},{ref:o,message:h,type:_,...N}=c;A(r.errors,t,{...N,...i,ref:d}),x.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&d&&d.focus&&d.focus()},vr=(t,i)=>X(t)?x.values.subscribe({next:a=>t(w(void 0,i),a)}):w(t,i,!0),Ve=(t,i={})=>{for(const a of t?be(t):v.mount)v.mount.delete(a),v.array.delete(a),i.keepValue||(E(n,a),E(l,a)),!i.keepError&&E(r.errors,a),!i.keepDirty&&E(r.dirtyFields,a),!i.keepTouched&&E(r.touchedFields,a),!i.keepIsValidating&&E(r.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&E(u,a);x.values.next({values:{...l}}),x.state.next({...r,...i.keepDirty?{isDirty:m()}:{}}),!i.keepIsValid&&R()},Ue=({disabled:t,name:i,field:a,fields:d,value:c})=>{if(K(t)&&y.mount||t){const o=t?void 0:D(c)?Ne(a?a._f:f(d,i)._f):c;A(l,i,o),ie(i,o,!1,!1,!0)}},De=(t,i={})=>{let a=f(n,t);const d=K(i.disabled)||K(e.disabled);return A(n,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...i}}),v.mount.add(t),a?Ue({field:a,disabled:K(i.disabled)?i.disabled:e.disabled,name:t,value:i.value}):S(t,!0,i.value),{...d?{disabled:i.disabled||e.disabled}:{},...s.progressive?{required:!!i.required,min:fe(i.min),max:fe(i.max),minLength:fe(i.minLength),maxLength:fe(i.maxLength),pattern:fe(i.pattern)}:{},name:t,onChange:ue,onBlur:ue,ref:c=>{if(c){De(t,i),a=f(n,t);const o=D(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Tr(o),_=a._f.refs||[];if(h?_.find(N=>N===o):o===a._f.ref)return;A(n,t,{_f:{...a._f,...h?{refs:[..._.filter(Ee),o,...Array.isArray(f(u,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),S(t,!1,void 0,o)}else a=f(n,t,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(pr(v.array,t)&&y.action)&&v.unMount.add(t)}}},Me=()=>s.shouldFocusError&&ye(n,oe,v.mount),br=t=>{K(t)&&(x.state.next({disabled:t}),ye(n,(i,a)=>{const d=f(n,a);d&&(i.disabled=d._f.disabled||t,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||t}))},0,!1))},qe=(t,i)=>async a=>{let d;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let c=W(l);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:h}=await ee();r.errors=o,c=h}else await B(n);if(E(r.errors,"root"),T(r.errors)){x.state.next({errors:{}});try{await t(c,a)}catch(o){d=o}}else i&&await i({...r.errors},a),Me(),setTimeout(Me);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:T(r.errors)&&!d,submitCount:r.submitCount+1,errors:r.errors}),d)throw d},_r=(t,i={})=>{f(n,t)&&(D(i.defaultValue)?$(t,W(f(u,t))):($(t,i.defaultValue),A(u,t,W(i.defaultValue))),i.keepTouched||E(r.touchedFields,t),i.keepDirty||(E(r.dirtyFields,t),r.isDirty=i.defaultValue?m(t,W(f(u,t))):m()),i.keepError||(E(r.errors,t),F.isValid&&R()),x.state.next({...r}))},Be=(t,i={})=>{const a=t?W(t):u,d=W(a),c=T(t),o=c?u:d;if(i.keepDefaultValues||(u=a),!i.keepValues){if(i.keepDirtyValues){const h=new Set([...v.mount,...Object.keys(de(u,l))]);for(const _ of Array.from(h))f(r.dirtyFields,_)?A(o,_,f(l,_)):$(_,f(o,_))}else{if(Ce&&D(t))for(const h of v.mount){const _=f(n,h);if(_&&_._f){const N=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(xe(N)){const O=N.closest("form");if(O){O.reset();break}}}}n={}}l=e.shouldUnregister?i.keepDefaultValues?W(u):{}:W(o),x.array.next({values:{...o}}),x.values.next({values:{...o}})}v={mount:i.keepDirtyValues?v.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!F.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,x.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:c?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!Z(t,u)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&l?de(u,l):r.dirtyFields:i.keepDefaultValues&&t?de(u,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},$e=(t,i)=>Be(X(t)?t(l):t,i);return{control:{register:De,unregister:Ve,getFieldState:Le,handleSubmit:qe,setError:Re,_executeSchema:ee,_getWatch:w,_getDirty:m,_updateValid:R,_removeUnmounted:ve,_updateFieldArray:b,_updateDisabledField:Ue,_getFieldArray:k,_reset:Be,_resetDefaultValues:()=>X(s.defaultValues)&&s.defaultValues().then(t=>{$e(t,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:br,_subjects:x,_proxyFormState:F,_setErrors:G,get _fields(){return n},get _formValues(){return l},get _state(){return y},set _state(t){y=t},get _defaultValues(){return u},get _names(){return v},set _names(t){v=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ce,register:De,handleSubmit:qe,watch:vr,setValue:$,getValues:Te,reset:$e,resetField:_r,clearErrors:hr,unregister:Ve,setError:Re,setFocus:(t,i={})=>{const a=f(n,t),d=a&&a._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Le}}function Wr(e={}){const s=U.useRef(),r=U.useRef(),[n,u]=U.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:X(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...$r(e),formState:n});const l=s.current.control;return l._options=e,Nr({subject:l._subjects.state,next:y=>{Er(y,l._proxyFormState,l._updateFormState)&&u({...l._formState})}}),U.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),U.useEffect(()=>{if(l._proxyFormState.isDirty){const y=l._getDirty();y!==n.isDirty&&l._subjects.state.next({isDirty:y})}},[l,n.isDirty]),U.useEffect(()=>{e.values&&!Z(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,u(y=>({...y}))):l._resetDefaultValues()},[e.values,l]),U.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),U.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),U.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),U.useEffect(()=>{s.current&&(s.current.watch=s.current.watch.bind({}))},[n]),s.current.formState=kr(n,l),s.current}const Yr=Fr(Ar);var Hr=Object.create,Ae=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Kr=Object.getOwnPropertyNames,Jr=Object.getPrototypeOf,Gr=Object.prototype.hasOwnProperty,Qr=(e,s)=>{for(var r in s)Ae(e,r,{get:s[r],enumerable:!0})},yr=(e,s,r,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let u of Kr(s))!Gr.call(e,u)&&u!==r&&Ae(e,u,{get:()=>s[u],enumerable:!(n=zr(s,u))||n.enumerable});return e},Xr=(e,s,r)=>(r=e!=null?Hr(Jr(e)):{},yr(!e||!e.__esModule?Ae(r,"default",{value:e,enumerable:!0}):r,e)),Zr=e=>yr(Ae({},"__esModule",{value:!0}),e),gr={};Qr(gr,{Icon:()=>et,_api:()=>I._api,addAPIProvider:()=>I.addAPIProvider,addCollection:()=>I.addCollection,addIcon:()=>I.addIcon,appendCustomStyle:()=>I.appendCustomStyle,buildIcon:()=>I.buildIcon,calculateSize:()=>I.calculateSize,disableCache:()=>I.disableCache,enableCache:()=>I.enableCache,getIcon:()=>I.getIcon,iconExists:()=>I.iconExists,iconLoaded:()=>I.iconLoaded,listIcons:()=>I.listIcons,loadIcon:()=>I.loadIcon,loadIcons:()=>I.loadIcons});var tr=Zr(gr),sr=Xr(ir),I=Yr,et=sr.default.forwardRef((e,s)=>{const r={...e,ref:s};return typeof e.icon=="object"&&(r.icon=JSON.stringify(e.icon)),e.inline||delete r.inline,e.className&&(r.class=e.className),sr.default.createElement("iconify-icon",r)});const nt=({logo:e,title:s,subtitle:r,fields:n,onSubmit:u,button:l,customDescription:y,labels:v=!0,footer:L=!0,helpButton:M})=>{const{register:F,handleSubmit:x,formState:{errors:se}}=Wr(),[q,P]=ir.useState(!1),le=g=>{u&&u(g)},R=new Date().getFullYear();return V.jsxs("div",{className:"card-basic items-stretch flex-col m-2",children:[V.jsxs("div",{className:`flex flex-col p-2 justify-center items-center ${e&&"mt-6"||""}`,children:[e&&V.jsx("img",{src:e,alt:"logo",className:"size-24 self-center"}),s&&V.jsx("h2",{className:"text-2xl mt-4 font-medium text-center",children:s}),r&&V.jsx("h3",{className:"text-lg mt-1 font-normal text-center",children:r}),y&&V.jsx("h4",{className:"mt-1 font-normal text-center",children:y})]}),V.jsxs("form",{onSubmit:x(le),className:"",children:[n&&n.map(g=>V.jsxs("div",{className:"mt-6",children:[v&&g.label&&V.jsx("label",{className:"block text-gray-700 pb-1",children:g.label}),g.type==="textarea"?V.jsx("textarea",{defaultValue:g.value||"",...F(g.name,{required:g.required}),disabled:g.disabled,className:`w-full p-2 mb-1 border rounded-[4px] shadow-sm hover:ring-1 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${g.disabled?"bg-gray-200":""}`}):g.type==="checkbox"?V.jsxs("div",{className:"flex items-center space-x-2",children:[V.jsx("input",{type:"checkbox",defaultChecked:g.value||!1,...F(g.name),disabled:g.disabled,className:`rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-secondary ${g.disabled?"bg-gray-200 cursor-not-allowed":""}`}),V.jsx("span",{children:g.label})]}):g.type==="select"?V.jsx("select",{defaultValue:g.value||"",...F(g.name,{required:g.required}),disabled:g.disabled,className:`w-full p-2 border rounded-md shadow-sm hover:ring-secondary-subtle focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 ${g.disabled?"bg-gray-200":""}`,children:g.options.map((b,Y)=>V.jsx("option",{value:b.value,disabled:b.disabled,children:b.label},Y))}):g.type==="year"?V.jsx("input",{type:"number",defaultValue:g.value||"",placeholder:g.placeholder||"YYYY",...F(g.name,{required:g.required,validate:b=>b>=2020&&b<=R||"Enter a valid year"}),disabled:g.disabled,min:"1900",max:R,step:"1",className:`w-full p-2 mb-1 border rounded-[4px] shadow-sm hover:ring-1 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${g.disabled?"bg-gray-200 cursor-not-allowed":""}`}):V.jsxs("div",{className:"relative",children:[V.jsx("input",{type:g.type==="password"&&q?"text":g.type,defaultValue:g.value||"",placeholder:g.placeholder||"",...F(g.name,{required:g.required}),disabled:g.disabled,className:`w-full p-2 mb-1 border rounded-[4px] shadow-sm hover:ring-1 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${g.disabled?"bg-gray-200 cursor-not-allowed":""}`}),g.type==="password"&&V.jsx("button",{type:"button",onClick:()=>P(!q),className:"absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5",children:q?V.jsx(tr.Icon,{icon:"eva:eye-off-outline",width:"24",height:"24",className:"text-gray-400 hover:text-black transition-all duration-200"}):V.jsx(tr.Icon,{icon:"eva:eye-outline",width:"24",height:"24",className:"text-gray-400 hover:text-black transition-all duration-200"})})]}),se[g.name]&&V.jsxs("span",{className:"text-danger text-sm",children:[g.label," is required"]})]},g.name)),M,l,L&&V.jsx("div",{className:"border-t-[0.5px] text-xs font-light text-center p-4 mt-6",children:V.jsxs("p",{children:["©PPG Karawang All Right Reserved ",R]})})]})]})};export{nt as D,tr as i};
