var ue=t=>{throw TypeError(t)};var J=(t,e,s)=>e.has(t)||ue("Cannot "+s);var r=(t,e,s)=>(J(t,e,"read from private field"),s?s.call(t):e.get(t)),v=(t,e,s)=>e.has(t)?ue("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),d=(t,e,s,i)=>(J(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),x=(t,e,s)=>(J(t,e,"access private method"),s);import{k as Ce,p as de,m as E,s as K,n as q,o as je,q as Z,t as fe,v as Ie,w as we,x as Se,y as pe,z as ve,r as j,B as Ne,S as Te,j as a,b as Ee,A as Oe,F as De,L as Qe,f as ke}from"./index-CQE6waEO.js";import{S as Fe}from"./SequentialAnimation--7ZBrHTC.js";import{I as Ue}from"./InfoCard-BBAole_9.js";var C,o,$,R,k,L,D,T,z,_,B,F,U,Q,M,h,H,X,ee,te,se,re,ie,ae,ye,be,Pe=(be=class extends Ce{constructor(e,s){super();v(this,h);v(this,C);v(this,o);v(this,$);v(this,R);v(this,k);v(this,L);v(this,D);v(this,T);v(this,z);v(this,_);v(this,B);v(this,F);v(this,U);v(this,Q);v(this,M,new Set);this.options=s,d(this,C,e),d(this,T,null),d(this,D,de()),this.options.experimental_prefetchInRender||r(this,D).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,o).addObserver(this),me(r(this,o),this.options)?x(this,h,H).call(this):this.updateResult(),x(this,h,se).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ne(r(this,o),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ne(r(this,o),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,x(this,h,re).call(this),x(this,h,ie).call(this),r(this,o).removeObserver(this)}setOptions(e,s){const i=this.options,u=r(this,o);if(this.options=r(this,C).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof E(this.options.enabled,r(this,o))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");x(this,h,ae).call(this),r(this,o).setOptions(this.options),i._defaulted&&!K(this.options,i)&&r(this,C).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,o),observer:this});const c=this.hasListeners();c&&ge(r(this,o),u,this.options,i)&&x(this,h,H).call(this),this.updateResult(s),c&&(r(this,o)!==u||E(this.options.enabled,r(this,o))!==E(i.enabled,r(this,o))||q(this.options.staleTime,r(this,o))!==q(i.staleTime,r(this,o)))&&x(this,h,X).call(this);const n=x(this,h,ee).call(this);c&&(r(this,o)!==u||E(this.options.enabled,r(this,o))!==E(i.enabled,r(this,o))||n!==r(this,Q))&&x(this,h,te).call(this,n)}getOptimisticResult(e){const s=r(this,C).getQueryCache().build(r(this,C),e),i=this.createResult(s,e);return Le(this,i)&&(d(this,R,i),d(this,L,this.options),d(this,k,r(this,o).state)),i}getCurrentResult(){return r(this,R)}trackResult(e,s){const i={};return Object.keys(e).forEach(u=>{Object.defineProperty(i,u,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(u),s==null||s(u),e[u])})}),i}trackProp(e){r(this,M).add(e)}getCurrentQuery(){return r(this,o)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=r(this,C).defaultQueryOptions(e),i=r(this,C).getQueryCache().build(r(this,C),s);return i.fetch().then(()=>this.createResult(i,s))}fetch(e){return x(this,h,H).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,R)))}createResult(e,s){var le;const i=r(this,o),u=this.options,c=r(this,R),n=r(this,k),g=r(this,L),p=e!==i?e.state:r(this,$),{state:m}=e;let l={...m},S=!1,b;if(s._optimisticResults){const y=this.hasListeners(),P=!y&&me(e,s),A=y&&ge(e,i,s,u);(P||A)&&(l={...l,...Se(m.data,e.options)}),s._optimisticResults==="isRestoring"&&(l.fetchStatus="idle")}let{error:O,errorUpdatedAt:w,status:I}=l;if(s.select&&l.data!==void 0)if(c&&l.data===(n==null?void 0:n.data)&&s.select===r(this,z))b=r(this,_);else try{d(this,z,s.select),b=s.select(l.data),b=pe(c==null?void 0:c.data,b,s),d(this,_,b),d(this,T,null)}catch(y){d(this,T,y)}else b=l.data;if(s.placeholderData!==void 0&&b===void 0&&I==="pending"){let y;if(c!=null&&c.isPlaceholderData&&s.placeholderData===(g==null?void 0:g.placeholderData))y=c.data;else if(y=typeof s.placeholderData=="function"?s.placeholderData((le=r(this,B))==null?void 0:le.state.data,r(this,B)):s.placeholderData,s.select&&y!==void 0)try{y=s.select(y),d(this,T,null)}catch(P){d(this,T,P)}y!==void 0&&(I="success",b=pe(c==null?void 0:c.data,y,s),S=!0)}r(this,T)&&(O=r(this,T),b=r(this,_),w=Date.now(),I="error");const G=l.fetchStatus==="fetching",V=I==="pending",W=I==="error",ce=V&&G,he=b!==void 0,N={status:I,fetchStatus:l.fetchStatus,isPending:V,isSuccess:I==="success",isError:W,isInitialLoading:ce,isLoading:ce,data:b,dataUpdatedAt:l.dataUpdatedAt,error:O,errorUpdatedAt:w,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>p.dataUpdateCount||l.errorUpdateCount>p.errorUpdateCount,isFetching:G,isRefetching:G&&!V,isLoadingError:W&&!he,isPaused:l.fetchStatus==="paused",isPlaceholderData:S,isRefetchError:W&&he,isStale:oe(e,s),refetch:this.refetch,promise:r(this,D)};if(this.options.experimental_prefetchInRender){const y=Y=>{N.status==="error"?Y.reject(N.error):N.data!==void 0&&Y.resolve(N.data)},P=()=>{const Y=d(this,D,N.promise=de());y(Y)},A=r(this,D);switch(A.status){case"pending":e.queryHash===i.queryHash&&y(A);break;case"fulfilled":(N.status==="error"||N.data!==A.value)&&P();break;case"rejected":(N.status!=="error"||N.error!==A.reason)&&P();break}}return N}updateResult(e){const s=r(this,R),i=this.createResult(r(this,o),this.options);if(d(this,k,r(this,o).state),d(this,L,this.options),r(this,k).data!==void 0&&d(this,B,r(this,o)),K(i,s))return;d(this,R,i);const u={},c=()=>{if(!s)return!0;const{notifyOnChangeProps:n}=this.options,g=typeof n=="function"?n():n;if(g==="all"||!g&&!r(this,M).size)return!0;const f=new Set(g??r(this,M));return this.options.throwOnError&&f.add("error"),Object.keys(r(this,R)).some(p=>{const m=p;return r(this,R)[m]!==s[m]&&f.has(m)})};(e==null?void 0:e.listeners)!==!1&&c()&&(u.listeners=!0),x(this,h,ye).call(this,{...u,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&x(this,h,se).call(this)}},C=new WeakMap,o=new WeakMap,$=new WeakMap,R=new WeakMap,k=new WeakMap,L=new WeakMap,D=new WeakMap,T=new WeakMap,z=new WeakMap,_=new WeakMap,B=new WeakMap,F=new WeakMap,U=new WeakMap,Q=new WeakMap,M=new WeakMap,h=new WeakSet,H=function(e){x(this,h,ae).call(this);let s=r(this,o).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(je)),s},X=function(){x(this,h,re).call(this);const e=q(this.options.staleTime,r(this,o));if(Z||r(this,R).isStale||!fe(e))return;const i=Ie(r(this,R).dataUpdatedAt,e)+1;d(this,F,setTimeout(()=>{r(this,R).isStale||this.updateResult()},i))},ee=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,o)):this.options.refetchInterval)??!1},te=function(e){x(this,h,ie).call(this),d(this,Q,e),!(Z||E(this.options.enabled,r(this,o))===!1||!fe(r(this,Q))||r(this,Q)===0)&&d(this,U,setInterval(()=>{(this.options.refetchIntervalInBackground||we.isFocused())&&x(this,h,H).call(this)},r(this,Q)))},se=function(){x(this,h,X).call(this),x(this,h,te).call(this,x(this,h,ee).call(this))},re=function(){r(this,F)&&(clearTimeout(r(this,F)),d(this,F,void 0))},ie=function(){r(this,U)&&(clearInterval(r(this,U)),d(this,U,void 0))},ae=function(){const e=r(this,C).getQueryCache().build(r(this,C),this.options);if(e===r(this,o))return;const s=r(this,o);d(this,o,e),d(this,$,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},ye=function(e){ve.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(r(this,R))}),r(this,C).getQueryCache().notify({query:r(this,o),type:"observerResultsUpdated"})})},be);function Ae(t,e){return E(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function me(t,e){return Ae(t,e)||t.state.data!==void 0&&ne(t,e,e.refetchOnMount)}function ne(t,e,s){if(E(e.enabled,t)!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&oe(t,e)}return!1}function ge(t,e,s,i){return(t!==e||E(i.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&oe(t,s)}function oe(t,e){return E(e.enabled,t)!==!1&&t.isStaleByTime(q(e.staleTime,t))}function Le(t,e){return!K(t.getCurrentResult(),e)}var Re=j.createContext(!1),_e=()=>j.useContext(Re);Re.Provider;function Be(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var Me=j.createContext(Be()),Ge=()=>j.useContext(Me);function He(t,e){return typeof t=="function"?t(...e):!!t}function $e(){}var ze=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},Ye=t=>{j.useEffect(()=>{t.clearReset()},[t])},qe=({result:t,errorResetBoundary:e,throwOnError:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&He(s,[t.error,i]),Ve=t=>{t.suspense&&(t.staleTime===void 0&&(t.staleTime=1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},We=(t,e)=>t.isLoading&&t.isFetching&&!e,Je=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,xe=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function Ke(t,e,s){var m,l,S,b,O;const i=Ne(),u=_e(),c=Ge(),n=i.defaultQueryOptions(t);(l=(m=i.getDefaultOptions().queries)==null?void 0:m._experimental_beforeQuery)==null||l.call(m,n),n._optimisticResults=u?"isRestoring":"optimistic",Ve(n),ze(n,c),Ye(c);const g=!i.getQueryCache().get(n.queryHash),[f]=j.useState(()=>new e(i,n)),p=f.getOptimisticResult(n);if(j.useSyncExternalStore(j.useCallback(w=>{const I=u?()=>{}:f.subscribe(ve.batchCalls(w));return f.updateResult(),I},[f,u]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),j.useEffect(()=>{f.setOptions(n,{listeners:!1})},[n,f]),Je(n,p))throw xe(n,f,c);if(qe({result:p,errorResetBoundary:c,throwOnError:n.throwOnError,query:i.getQueryCache().get(n.queryHash)}))throw p.error;if((b=(S=i.getDefaultOptions().queries)==null?void 0:S._experimental_afterQuery)==null||b.call(S,n,p),n.experimental_prefetchInRender&&!Z&&We(p,u)){const w=g?xe(n,f,c):(O=i.getQueryCache().get(n.queryHash))==null?void 0:O.promise;w==null||w.catch($e).finally(()=>{f.updateResult()})}return n.notifyOnChangeProps?p:f.trackResult(p)}function Ze(t,e){return Ke(t,Pe)}const Xe=({user:t,isLoading:e})=>{var c,n,g,f,p;const s=j.useContext(Te),i=()=>{s.toggle()},u=m=>m==null?void 0:m.split(" ").map(l=>l[0]).join("").toUpperCase().slice(0,2);return a.jsx("div",{className:"bg-white mb-2 p-4 shadow-sm fixed top-0 w-full ",children:a.jsxs("div",{className:"flex items-center space-x-4",children:[!e&&(t!=null&&t.image)?a.jsx("img",{onClick:i,src:`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/${t.image}`,alt:t.name,className:"w-12 h-12 rounded-full  focus:bg-gray-200 hover:outline-none hover:ring-1 hover:ring-offset-1 hover:ring-gray-400"}):a.jsx("div",{onClick:i,className:`${e&&"animate-pulse"} w-12 h-12 rounded-full bg-green-200 text-green-500 flex items-center justify-center font-medium  focus:bg-gray-200 hover:outline-none hover:ring-1 hover:ring-offset-1 hover:ring-gray-400`,children:u(t==null?void 0:t.name)}),a.jsxs("div",{children:[e&&a.jsx("div",{className:"animate-pulse flex space-x-4",children:a.jsxs("div",{className:"flex-1 space-y-3 py-1 grow",children:[a.jsx("div",{className:"h-5 w-36 bg-slate-700 rounded"}),a.jsx("div",{className:"h-3 w-56 bg-slate-400 rounded"})]})}),!e&&a.jsxs(a.Fragment,{children:[a.jsx("h2",{className:"text-xl font-medium",children:t.name||"Unknown"}),a.jsxs("h3",{children:[((n=(c=t.userId)==null?void 0:c.teachingGroupId)==null?void 0:n.name)||"No TeachingGroup"," - ",((p=(f=(g=t.userId)==null?void 0:g.teachingGroupId)==null?void 0:f.branchId)==null?void 0:p.name)||"No Branch"]})]})]})]})})},et=({data:t})=>{var e,s;return a.jsxs("div",{className:"my-8",children:[a.jsx("h2",{className:"text-xl font-medium mb-2 ",children:t.name}),a.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[a.jsxs("div",{className:"bg-white p-4 rounded-md shadow",children:[a.jsx("h3",{className:"text-gray-500 text-sm",children:"Jumlah Peserta Didik"}),a.jsx("p",{className:"text-2xl font-bold",children:((e=t.students)==null?void 0:e.length)||"No Data"})]}),a.jsxs("div",{className:"bg-white p-4 rounded-md shadow",children:[a.jsx("h3",{className:"text-gray-500 text-sm",children:"Total Pertemuan"}),a.jsx("p",{className:"text-2xl font-bold",children:t.attendances&&((s=t.teachingGroupYearId)!=null&&s.semesterTarget)?`${Ee(t)}`:"No Data"})]})]})]})},tt=()=>{const[t,e]=j.useState(new Date);j.useEffect(()=>{const u=setInterval(()=>{e(new Date)},1e3);return()=>{clearInterval(u)}},[]);const s=u=>u.toLocaleDateString("id-ID",{weekday:"long",day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Jakarta"}),i=u=>u.toLocaleTimeString("id-ID",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:"Asia/Jakarta"});return a.jsxs("div",{className:"space-y-1 mb-2 text-gray-600",children:[a.jsx("div",{className:"font-normal",children:s(t)}),a.jsxs("div",{className:"",children:[i(t)," WIB"]})]})},ot=()=>{const t=j.useContext(Oe);j.useContext(De);const e=async()=>{var p,m,l,S,b,O,w,I;console.log("fetching profile...");const n=await fetch(`https://ppg-academic-system-9b62c1c7b604.herokuapp.com/api/teachers/user/${t.userId}`);if(!n.ok)throw new Error("Failed to fetch user data");const g=await n.json();console.log(g);const f=((p=g.teacher)==null?void 0:p.classIds.map(G=>G._id))||[];return t.setAttributes((b=(S=(l=(m=g.teacher)==null?void 0:m.userId)==null?void 0:l.teachingGroupId)==null?void 0:S.branchId)==null?void 0:b.id,(I=(w=(O=g.teacher)==null?void 0:O.userId)==null?void 0:w.teachingGroupId)==null?void 0:I.id,f),g.teacher},{data:s,isLoading:i,error:u}=Ze({queryKey:["teacherData"],queryFn:e,staleTime:1e3*60*5});let c=0;return console.log(c),a.jsxs("div",{className:"flex flex-col",children:[a.jsx("div",{children:a.jsx(Xe,{user:s,isLoading:i})}),!s&&i&&a.jsx("div",{className:"flex justify-center mt-44",children:a.jsx(Qe,{size:32})}),s&&!i&&a.jsx(Fe,{children:a.jsxs("div",{className:"mt-20 flex-1 p-4",children:[a.jsxs("div",{className:"mb-4 space-y-1",children:[a.jsx("h1",{className:"text-xl font-medium",children:"Tenaga Pendidik"}),a.jsx(tt,{})]}),a.jsxs("div",{className:"mb-4",children:[s.classIds.map((n,g)=>{var p,m;if((m=(p=n==null?void 0:n.teachingGroupYearId)==null?void 0:p.academicYearId)==null?void 0:m.isActive)return c++,a.jsx(et,{data:n},g)}),c===0&&a.jsxs(Ue,{children:[a.jsx("p",{children:"Belum terdaftar di kelas manapun."}),a.jsxs("p",{children:["Buat kelas baru di ",a.jsx(ke,{to:"/dashboard/academic",className:"active:text-blue-400 underline",children:"pengaturan akademik"})]})]})]})]})})]})};export{ot as default};
