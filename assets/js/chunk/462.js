"use strict";(self.webpackChunkconvergence_zeta=self.webpackChunkconvergence_zeta||[]).push([[462],{8072:function(e,t,s){s.d(t,{I:function(){return u}});var n=s(5893),o=s(7294),a=s(7134),r=s(1072),l=s(6288),c=s(9584),i=s(1029),d=s(2465),p=s(2729),f=s(253);const m=e=>{const{name:t,hash:s,to:a,icon:r,onClick:p,...m}=e,u=(0,o.useRef)(null);return(0,o.useEffect)((()=>{let e=0;const t=()=>{const t=u.current?.querySelector("[data-indicator]"),n=(0,c.pA)("[data-indicator-container]").querySelectorAll("[data-indicator]");let o=undefined;if(t&&(()=>{if((0,i.r)(`[data-anchor="${s}"]`)){const e=(0,c.pA)(`[data-anchor="${s}"]`).getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}return!1})()){for(const e of n)e!==t&&(0,l.IV)(e,"q1");o=t,(0,l.cn)(t,"q1")}if(window.scrollY<=e){const t=(0,c.pA)(`[data-anchor="${s}"]`)?.getBoundingClientRect();for(let s=0;s<n.length;s++)if(o&&n[s]===o){const o=n[s-1];if(o&&window.scrollY<=e&&t.top>150){for(const e of n)n[s]!==e&&(0,l.IV)(n[s],"q1");(0,l.cn)(o,"q1")}}}e=window.scrollY};return document.addEventListener("scroll",t),()=>{document.removeEventListener("scroll",t)}}),[s]),(0,n.jsx)("li",{ref:u,...m,children:(0,n.jsxs)(d.r,{"data-indicator":!0,to:a,hash:s,onClick:p,className:"pos-r g flex ai-b q1:bgc-m3 q1:co-bg dur-300 ho:co-m3 py-5 ho:fw-700 px-20",children:[(0,n.jsx)(f.a,{className:"bgc-m3 opa-0 g-ho:opa-10 dur-300"}),(0,n.jsx)("span",{className:"pos-r flex mr-10",children:(0,n.jsx)("i",{className:r})}),(0,n.jsx)("span",{className:"pos-r block",children:t})]})})},u=e=>{const{data:t,className:s="",...c}=e,{t:i}=(0,r.$G)(["client"]),d=(0,o.useRef)(null),u=(0,o.useRef)(null),h=()=>{if(d&&d.current){const e=d.current.parentNode.parentNode;(0,l.og)(e,"q2")}};return(0,o.useEffect)((()=>{const e=d.current.parentNode.parentNode,t=t=>{e.contains(t.target)||u.current.contains(t.target)||(0,l.IV)(e,"q2")};return window.addEventListener("click",t),()=>{window.removeEventListener("click",t)}}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{offsetTop:20,offsetBottom:90,className:"w-100p maxw-300 sm:pos-f-i sm:t-0-i sm:b-0-i sm:r-0-i sm:h-100p xs:w-100p xs:maxw-none flex fd-col z-30 sm:py-70 xs:pb-50 sm:trans-translateX-100p sm:opa-0 sm:dur-400 sm:q2:trans-translateX-0p sm:q2:opa-100 bfil-blur-20",children:(0,n.jsxs)(p.U,{color:"m3",className:`pos-r flex fd-col h-100p ml-20 sm:ml-0 flex fd-col ${s}`,...c,children:[(0,n.jsxs)("div",{ref:d,className:"flex ai-c co-bg bgc-m3 fs-24 mb-10",children:[(0,n.jsxs)("div",{className:"px-10 py-10 flex ai-b",children:[(0,n.jsx)("span",{className:"flex mr-10",children:(0,n.jsx)("i",{className:"fa-solid fa-list-ul"})}),(0,n.jsx)("h3",{className:"flex",children:i("client:menu.catalogue")})]}),(0,n.jsx)("div",{className:"flex flex-a ju-e h-100p",children:(0,n.jsx)("button",{type:"button",ref:u,"aria-label":`${i("client:menu.catalogue")}`,onClick:h,className:"hide sm:flex ju-c ai-c h-100p w-50",children:(0,n.jsxs)("span",{className:"pos-r pe-none block w-50p h-35p of-hide",children:[(0,n.jsx)("span",{className:"bdb-solid bdw-2 bdc-bg block dur-400 w-100p pos-a q2:trans-translateX-100p t-0p l-0"}),(0,n.jsx)("span",{className:"bdb-solid bdw-2 bdc-bg block dur-400 w-100p pos-a q2:trans-rotate-135 q2:opa-0 center-ay l-0"}),(0,n.jsx)("span",{className:"bdb-solid bdw-2 bdc-bg block dur-400 w-100p pos-a q2:-trans-translateX-100p b-0p l-0"}),(0,n.jsx)("span",{className:"bdb-solid bdw-2 bdc-bg block dur-400 w-100p pos-a q2:opa-100 center-ay l-0 q2:trans-rotate-135"}),(0,n.jsx)("span",{className:"bdb-solid bdw-2 bdc-bg block dur-400 w-100p pos-a q2:opa-100 center-ay l-0 q2:-trans-rotate-135"})]})})})]}),(0,n.jsxs)("nav",{className:"of-auto flex-a",children:[(0,n.jsx)(f.a,{className:"bgc-m3 opa-5 sm:hide"}),(0,n.jsx)("ul",{"data-indicator-container":!0,className:"sm:pb-30",children:t.map(((e,t)=>(0,n.jsx)(m,{onClick:h,...e},t)))})]})]})}),(0,n.jsx)("button",{type:"button",onClick:h,ref:u,"aria-label":`${i("client:menu.catalogue")}`,className:"hide sm:flex pos-f t-0 r-70 w-70 h-70 ju-c ai-c co-m3 fs-32 z-80 bgc-none",children:(0,n.jsx)("i",{className:"fa-solid fa-list-ul pe-none"})})]})};u.displayName="BlockIndicator"},3793:function(e,t,s){s.d(t,{e:function(){return c}});var n=s(5893),o=s(7294),a=s(6358),r=s(1504),l=s(7625);const c=e=>{const{tag:t="div",children:s,hash:c,...i}=e,d=t,p=(0,o.useRef)(null),{scroll:f,page:{exit:m}}=(0,l.et)(),u=(0,o.useCallback)((()=>{const e=(0,r.kt)(window.location.href);e&&setTimeout((()=>{const t=f;p.current&&(t.scrollTo={y:e,offsetY:0},a.ZP.to(window,t))}),m)}),[m,f]);return(0,o.useEffect)((()=>{u(p.current)}),[u]),(0,n.jsx)(d,{ref:p,"data-anchor":c,...i,children:s})};c.displayName="Anchor"},2368:function(e,t,s){s.d(t,{g:function(){return d}});var n=s(5893),o=s(7294),a=s(2729),r=s(253),l=s(7487),c=s(3793),i=s(2465);const d=(0,o.forwardRef)(((e,t)=>{const{title:s,icon:o,children:d,className:p="",color:f="m3",colorTitle:m="m3",id:u,tag:h="section",...x}=e,b=h;return(0,n.jsxs)(b,{ref:t,className:`pos-r ${p}`,...x,children:[u&&(0,n.jsx)(c.e,{id:u,hash:u,className:"pos-a -t-80"}),s&&(0,n.jsxs)("div",{className:"pos-r -mb-30 sm:-mb-20 xs:-mb-20",children:[u&&(0,n.jsx)(i.r,{"aria-label":s,hash:u,className:"pos-a w-100p h-100p t-0 l-0 z-10"}),(0,n.jsx)(l.D,{name:s,icon:o,hasLine:!1,color:m,"aria-hidden":"true","data-nosnippet":!0,className:"fs-50 fw-700 sm:fs-24 pl-20 pos-a z-5 w-100p h-100p t-0 l-0"}),(0,n.jsx)(l.D,{name:s,icon:o,hasLine:!1,color:m,className:"fs-50 fw-700 sm:fs-24 pl-20"})]}),(0,n.jsxs)(a.U,{color:f,className:"pos-r p-40 sm:p-20 bfil-blur-10 sm:pt-25",children:[(0,n.jsx)(r.a,{className:`bgc-${f} opa-5 block`}),(0,n.jsx)("div",{className:"pos-r",children:d})]})]})}));d.displayName="Block"},6174:function(e,t,s){s.d(t,{W:function(){return o}});var n=s(5893);const o=e=>{const{tag:t="div",className:s="",children:o,...a}=e,r=t;return(0,n.jsx)(r,{className:`w-100p maxw-90p sm:maxw-100p px-40 sm:px-20 box-content mx-a ${s}`,...a,children:o})};o.displayName="Container"},9430:function(e,t,s){s.d(t,{x:function(){return c},a:function(){return f}});var n=s(5893),o=s(7294),a=s(5935),r=s(4096),l=s(2465);const c=e=>{const{data:t,tag:s="p",...c}=e,i=t.match(/<\s*a[^>]*>(.*?)<\/a>/g),d=t.split(/<\s*a[^>]*>(.*?)<\/a>/g),p=[],f=[],m=[];if(i&&i.length>0)for(const n of i){const e=(0,a.ZP)(n);e&&e.props&&e.props.children&&e.props.href&&f.push(e.props.children),m.push({link:e.props.href,name:e.props.children,target:e.props.target?e.props.target:undefined})}for(const o of d)if(f&&f.includes(o)){let e=undefined,t=undefined,s=undefined;for(const n of m)n.name&&n.name===o&&(n.link.match((0,r.u)("url"))?t=n.link:e=n.link,s=n.target);p.push((0,n.jsx)(l.r,{to:e,href:t,target:s,rel:s?"external noopener noreferrer":undefined,className:"dur-200 fw-600 ho:co-m3 co-m1 bdb-solid bdw-1 bdc-m1 ho:bdc-m3",children:o}))}else p.push((0,a.ZP)(o));const u=s;return(0,n.jsx)(u,{...c,children:p.map(((e,t)=>(0,n.jsx)(o.Fragment,{children:e},t)))})};c.displayName="Text";var i=s(8976),d=s(2729),p=s(8317);const f=e=>{const{type:t="l",tag:s="p",className:o="",txt:a,icon:r="fa-solid fa-circle-info"}=e;return(0,n.jsx)(i.d,{tag:s,type:t,className:`flex ${o}`,children:(0,n.jsx)(p.C,{tag:"span",tiltAttrs:{max:2,scale:1,axis:"x"},children:(0,n.jsxs)(d.U,{color:"txt",tag:"span",className:"flex ai-b p-5",children:[r&&(0,n.jsx)("span",{className:"flex mr-10",children:(0,n.jsx)("i",{className:r})}),(0,n.jsx)(c,{tag:"span",data:a})]})})})};f.displayName="TextBlock"},4096:function(e,t,s){s.d(t,{u:function(){return n}});const n=e=>"email"===e?/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/:"tel"===e?/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/:"password"===e?/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/:"url"===e?/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/:"number"===e?/^\d+$/:"hashtag"===e?/^#[^ !@#$%^&*(),.?":{}|<>]*$/:/^\d+$/},7134:function(e,t,s){s.d(t,{Z:function(){return p}});var n=s(7294),o=s(5893),a=e=>!e.firstChild||e.firstChild.offsetParent===e,r=(e,t)=>{let s=e,n=0;a(t)||(n+=e.offsetTop-t.offsetTop,t=e.offsetParent,n+=-e.offsetTop);do{n+=s.offsetTop,s=s.offsetParent}while(s&&s!==t);return n},l=null;"undefined"!=typeof CSS&&CSS.supports&&(CSS.supports("position","sticky")?l="sticky":CSS.supports("position","-webkit-sticky")&&(l="-webkit-sticky"));var c=!1;try{const e=Object.defineProperty({},"passive",{get(){c={passive:!0}}}),t=()=>{};window.addEventListener("testPassive",t,e),window.removeEventListener("testPassive",t,e)}catch(f){}var i=e=>{const{el:t,onChange:s,unsubs:n,measure:o}=e;if(t===window){const e=()=>({top:0,left:0,height:window.innerHeight,width:window.innerWidth}),t=o(e()),a=()=>{Object.assign(t,o(e())),s()};return window.addEventListener("resize",a,c),n.push((()=>window.removeEventListener("resize",a))),t}{const e=o(t.getBoundingClientRect()),a=new ResizeObserver((()=>{Object.assign(e,o(t.getBoundingClientRect())),s()}));return a.observe(t),n.push((()=>a.disconnect())),e}},d=(e,t,s)=>{const{bottom:n,offsetBottom:o,offsetTop:d}=s,p=(e=>{let t=e;for(;t=t.parentElement;){const e=getComputedStyle(t,null).getPropertyValue("overflow-y");if(t===document.body)return window;if("auto"===e||"scroll"===e||"overlay"===e)return t}return window})(e);let f=!1;const m=()=>{f||requestAnimationFrame((()=>{const e=x();e!==k&&C(e),f=!1})),f=!0};let u=p===window?window.scrollY:p.scrollTop;const h=e=>{const{offsetTop:t,height:s}=w,{naturalTop:n}=j,{height:a}=y;return e+t+s>=n+a+v+o},x=()=>{const{height:e}=w,{height:t}=y;return t+d+o<=e?3:h(u)?1:2},b=p!==window&&a(p),w=i({el:p,onChange:m,unsubs:t,measure:({height:e,top:t})=>({height:e,offsetTop:b?t:0})}),g=(e=>{let t=e.parentElement;for(;t&&"contents"===getComputedStyle(t,null).getPropertyValue("display");)t=t.parentElement;return t||window})(e),N=g===window?{top:0,bottom:0}:(e=>{const t=getComputedStyle(e,null);return{top:parseInt(t.getPropertyValue("padding-top"),10),bottom:parseInt(t.getPropertyValue("padding-bottom"),10)}})(g),j=i({el:g,onChange:m,unsubs:t,measure:({height:e})=>({height:e-N.top-N.bottom,naturalTop:g===window?0:r(g,p)+N.top+w.offsetTop})}),y=i({el:e,onChange:m,unsubs:t,measure:({height:e})=>({height:e})});let v=0,k=x();const C=t=>{const s=k;if(k=t,2===s&&(v=-1),3===t)return e.style.position=l,void(n?e.style.bottom=`${o}px`:e.style.top=`${d}px`);const{height:a,offsetTop:r}=w,{height:c,naturalTop:i}=j,{height:p}=y;if(2===t)if(e.style.position="relative",v=0===s?Math.max(0,r+u-i+d):Math.max(0,r+u+a-(i+p+o)),n){const t=Math.max(0,c-p-v);e.style.bottom=`${t}px`}else e.style.top=`${v}px`;else e.style.position=l,1===t?n?e.style.bottom=`${o}px`:e.style.top=a-p-o+"px":n?e.style.bottom=a-p-o+"px":e.style.top=`${d}px`};C(k);const T=e=>{if(e===u)return;const t=e-u;if(u=e,3===k)return;const{offsetTop:s,height:n}=w,{naturalTop:a,height:r}=j,{height:l}=y;if(t>0)if(0===k){if(e+s+d>a){const t=Math.max(0,s+u-a+d);C(e+s+n<=a+l+t+o?2:1)}}else 2===k&&h(e)&&C(1);else if(1===k){if(s+e+n<a+r+o){const t=Math.max(0,s+u+n-(a+l+o));C(s+e+d>=a+t?2:0)}}else 2===k&&s+e+d<a+v&&C(0)},$=p===window?()=>T(window.scrollY):()=>T(p.scrollTop);p.addEventListener("scroll",$,c),p.addEventListener("mousewheel",$,c),t.push((()=>p.removeEventListener("scroll",$)),(()=>p.removeEventListener("mousewheel",$)))},p=e=>{const{offsetTop:t,offsetBottom:s,bottom:a,children:r,className:c,style:i}=e,p=(({offsetTop:e=0,offsetBottom:t=0,bottom:s=!1}={})=>{const[o,a]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(!o||!l)return;const n=[];return d(o,n,{offsetBottom:t,offsetTop:e,bottom:s}),()=>{n.forEach((e=>e()))}}),[o,t,e,s]),a})({offsetTop:t,offsetBottom:s,bottom:a});return(0,o.jsx)("div",{className:c,style:i,ref:p,children:r})}}}]);