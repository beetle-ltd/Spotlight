import{c as y,r as d,S as k,j as e,C as N,L as E,T,a as z,b as M,t as I,u as h}from"./index-VIKamo1-.js";import{A as g,G as $,l as A,S as b,F as B,c as O,V,B as _,u as v,a as w,b as q,D as G,d as F,e as R,f as H,n as U,T as W,P as K,g as Q,E as J,h as X,i as Y}from"./index-C9XAXjcm.js";import{B as u}from"./button-ki5fLZzo.js";/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=y("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),S=()=>{const t=d.useContext(k);if(t===void 0)throw new Error("useSearch must be used within a SearchProvider");return t},m=({activeTab:t,handleTabClick:r,children:a,tab:s})=>e.jsx(u,{variant:"ghost",className:`px-4 sm:px-4 md:px-7 rounded-full font-medium text-xs whitespace-nowrap
      ${t===s?"bg-gray-200":"text-gray-500"}`,onClick:()=>r(s),children:a});function te({products:t,categories:r}){const[a,s]=d.useState("ALL"),[c,n]=d.useState(""),{searchTerm:o}=S(),i=l=>{s(l)},x=l=>{n(l.target.value)},p=a==="ALL"?t:t.filter(l=>l.attachments[0].type===a),f=c===""?p:p.filter(l=>l.categories.includes(c)),L=o===""?f:f.filter(l=>l.name.includes(o==null?void 0:o.toLowerCase())||l.description.includes(o==null?void 0:o.toLowerCase())),D=()=>o?`No products found matching "${o}".`:a!=="ALL"?`No ${a.toLowerCase()} products found.`:c!==""?`No products found in the "${c}" category.`:"No products found matching your criteria.";return e.jsx("div",{className:"w-full min-h-[40dvh] mt-10 mx-auto pb-10 ",children:e.jsxs("div",{className:"mx-auto w-full md:w-[90%]",children:[e.jsx("div",{className:"w-[90%] mx-auto sm:w-full",children:e.jsxs("div",{className:"flex flex-col sm:flex-row w-full gap-y-4 sm:gap-y-0 sm:gap-x-4 mb-4 justify-between",children:[e.jsxs("div",{id:"tabs",className:"flex flex-wrap items-cente gap-x-5 md:gap-x-2 w-full md:w-auto",children:[e.jsx(m,{activeTab:a,handleTabClick:i,tab:"ALL",children:"All"}),e.jsx(m,{activeTab:a,handleTabClick:i,tab:g.PICTURE,children:"Photos"}),e.jsx(m,{activeTab:a,handleTabClick:i,tab:g.VIDEO,children:"Videos"})]}),e.jsx("div",{id:"categories",className:"w-full sm:w-auto",children:e.jsx(u,{className:"rounded-full hover:text-gray-800 w-full sm:w-auto",variant:"outline",children:e.jsxs("select",{className:"text-xs bg-transparent outline-none text-gray-500 hover:text-gray-800 w-full sm:max-w-[150px] cursor-pointer",onChange:x,children:[e.jsx("option",{value:"",children:"All Categories"}),r.map((l,P)=>e.jsx("option",{value:l,children:l},`${l}-${P}`))]})})})]})}),e.jsx($,{products:L,getNoResultsMessage:D})]})})}function se({logoImg:t,name:r}){const{setSearchTerm:a}=S(),[s,c]=d.useState(""),n=A.debounce(i=>{a(i)},300);d.useEffect(()=>(n(s),()=>{n.cancel()}),[s,n]);const o=i=>{c(i.target.value)};return e.jsx("div",{className:"fixed left-0 bg-white w-full z-20 py-5 border-b border-gray-100",children:e.jsx(N,{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(b,{logoImg:t,alt:"Shop logo",size:"sm"}),e.jsxs("div",{id:"search__bar",className:"w-[60%] md:max-w-[800px] flex items-center gap-x-5 mx-auto border hover:border-gray-400 rounded-full border-gray-300 py-3 px-4",children:[e.jsx("input",{type:"search",name:"search",id:"search__input",value:s,placeholder:`Search ${r} Stores`,className:"appearance-none bg-transparent w-full h-full outline-none text-xs",onChange:o}),e.jsx(ee,{className:"text-gray-300 hover:text-gray-400 cursor-pointer"})]}),e.jsx(E,{to:"/explore",children:e.jsxs(u,{className:"flex items-center gap-x-2 rounded-full p-3 sm:px-5 ",variant:"default",children:[e.jsx(B,{size:18,className:"cursor-pointer block mb-[0.5px]"}),e.jsx("p",{className:"hidden sm:block text-xs sm:text-sm",children:"Explore"})]})})]})})})}function j({children:t,text:r}){return e.jsxs(T,{children:[e.jsx(z,{children:e.jsx("div",{className:"flex text-center items-center text-[#555] gap-x-3 cursor-pointer",onClick:()=>{O(r)},children:t})}),e.jsx(M,{children:e.jsx("p",{children:"Click to copy"})})]})}function ae(t){return t?`https://wa.me/${t.replace(/\D/g,"")}`:"no-link"}function re({store:t}){const r=()=>{const a=ae(t.phoneNumber);if(a=="no-link"){I({description:"No Phone Number"});return}window.open(a,"_blank")};return e.jsxs("div",{className:"pt-32 sm:pt-40 mb-16 flex flex-col items-center justify-center",children:[e.jsx("div",{className:"flex justify-center items-center h-full pb-5 sm:pb-10",children:e.jsx(b,{logoImg:t.logo,alt:t.name,size:"lg"})}),e.jsxs("div",{className:"w-full md:max-w-[700px] text-center",children:[e.jsx("h1",{className:"text-3xl sm:text-4xl font-bold",children:t.name}),e.jsx(ne,{children:t.bio}),e.jsxs("div",{className:"py-1 sm:py-2 text-center flex flex-col justify-center items-center gap-y-5",children:[e.jsxs("div",{className:"flex gap-x-1 items-center",children:[t.phoneNumber&&e.jsx(j,{text:t.phoneNumber,children:e.jsx("p",{className:"text-xs text-gray-400",children:t.phoneNumber})}),t.phoneNumber&&t.email&&e.jsx(Z,{className:"mb-1 text-gray-400"}),e.jsx(j,{text:t.email,children:e.jsx("p",{className:"text-xs text-gray-400",children:t.email})})]}),e.jsxs("div",{className:"grid grid-cols-2 items-center w-full md:w-auto gap-x-2 md:gap-x-5",children:[e.jsxs(u,{className:"flex gap-x-2 items-center rounded-full  text-xs md:text-base",size:"lg",children:[e.jsx(V,{size:18}),"Get business card"]}),e.jsxs(u,{className:"flex gap-x-2 items-center rounded-full text-xs md:text-base",size:"lg",variant:"outline",onClick:r,children:[e.jsx(_,{size:18}),"Send a Message"]})]})]})]})]})}function ne({children:t}){return e.jsx("p",{className:"text-[#555] leading-7 text-xs sm:text-base pt-2 pb-1",children:t})}const ce=({store:t})=>e.jsxs("div",{children:[e.jsx(se,{logoImg:t.logo,name:t.name}),e.jsx(re,{store:t})]}),C=()=>{const{productId:t}=h(),{data:r,isLoading:a,error:s}=v({queryKey:["fetchProductByLinkId"],queryFn:()=>w.get(`/api/v1/stores/products/${t}`).then(c=>c.data),enabled:!!t});return{productData:r==null?void 0:r.data,isLoading:a,error:s}},oe=t=>{const r=a=>{const{productData:s,isLoading:c,error:n}=C();return c?e.jsx("div",{children:"Loading..."}):n?e.jsxs("div",{children:["Error: ",n.message]}):e.jsx(t,{...a,item:s,_item:s||a.fallbackData})};return r.displayName=`withProductData(${t.displayName||t.name})`,r};function le({shouldOpen:t}){const[r,a]=d.useState(!1),s=location.pathname,{storeName:c}=h(),{productData:n}=C();d.useEffect(()=>{t&&a(!0)},[t]),d.useEffect(()=>{(async()=>{r&&n&&await U(W.VIEWED,{storeUsername:s==="/explore"?n.store.username:c,productId:n.id,productName:n.name})})()},[r,s,n,c]);const o=q("(min-width: 768px)"),i=oe(K);return o?e.jsx(G,{open:r,onOpenChange:a,children:e.jsx(F,{className:"sm:max-w-[900px] p-0 overflow-hidden",children:e.jsx(i,{})})}):e.jsx(R,{open:r,onOpenChange:a,children:e.jsx(H,{children:e.jsx(i,{})})})}const ie=()=>e.jsx("div",{className:"flex items-center justify-center h-auto bg-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-lg md:text-xl font-base mb-8",children:"This store has no products"}),e.jsx("div",{className:"w-44 md:w-64 mx-auto",children:e.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-auto",children:[e.jsx("path",{fill:"#000000",d:`M50,10c22.1,0,40,17.9,40,40s-17.9,40-40,40S10,72.1,10,50S27.9,10,50,10z M50,14c-19.9,0-36,16.1-36,36\r
                s16.1,36,36,36s36-16.1,36-36S69.9,14,50,14z`}),e.jsx("path",{fill:"#000000",d:`M49.9,41.5c-4.7,0-8.5,3.8-8.5,8.5v20c0,4.7,3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5v-20\r
                C58.4,45.3,54.6,41.5,49.9,41.5z M49.9,45.5c2.5,0,4.5,2,4.5,4.5v20c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5v-20\r
                C45.4,47.5,47.4,45.5,49.9,45.5z`}),e.jsx("path",{fill:"#000000",d:"M50,32c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2s2-0.9,2-2v-3C52,32.9,51.1,32,50,32z"})]})})]})}),de=(t,r)=>v({queryKey:["fetchStore",t],queryFn:()=>w.get(`/api/v1/stores/search-username?name=${t}&data=true`).then(a=>{var s;return Q(t,(s=a.data.data)==null?void 0:s.categories),a.data.data}),retry:1,retryDelay:a=>Math.min(1e3*2**a,3e4),...r}),he=()=>{const{storeName:t,productId:r}=h(),a=!!r;d.useEffect(()=>{t&&localStorage.setItem("store_name",t)},[t]);const{data:s,isLoading:c,isError:n,error:o,refetch:i}=de(t),x=d.useMemo(()=>s!=null&&s.products?s.products.length===0?e.jsx(ie,{}):e.jsx(te,{products:s.products,categories:s.categories}):null,[s==null?void 0:s.products,s==null?void 0:s.categories]);return n?e.jsx(J,{error:o,onRetry:i}):c?e.jsx(X,{delay:50,timeout:15e3}):e.jsxs("div",{children:[a&&e.jsx(le,{shouldOpen:a}),e.jsx(N,{children:e.jsx(ce,{store:s})}),x,e.jsx(Y,{})]})};export{he as default};
