"use strict";(self.webpackChunkconvergence_zeta=self.webpackChunkconvergence_zeta||[]).push([[916],{1492:function(e,a,l){l.d(a,{D:function(){return r}});var s=l(5893),o=l(7294),t=l(7536),i=l(8976),n=l(5065);const r=e=>{const{fields:a,children:l,onSubmit:r,data:c,dataHidden:m,isRender:d=!1,...f}=e,{register:u,handleSubmit:p,control:x,formState:{errors:h},setValue:b}=(0,t.cI)();return(0,o.useEffect)((()=>{if(m&&a&&a.length){const e=a&&a.length?a.length:0;for(let a=0;a<m.length;a++)b(`form[${e+a}][label]`,m[a].label),b(`form[${e+a}][value]`,m[a].value),b(`form[${e+a}][id]`,m[a].id),b(`form[${e+a}][gID]`,m[a].gID),b(`form[${e+a}][icon]`,m[a].icon)}}),[m,a,b]),(0,s.jsxs)("form",{action:"post",onSubmit:p((e=>{r&&r(e)})),...f,children:[d&&a&&a.length>0&&(0,s.jsx)("div",{className:"",children:a.map(((e,a)=>{const{id:l,label:o,type:t,rule:r,list:m,placeholder:d,icon:f,color:p,options:b,gID:j}=e,g=c&&c.form&&c.form[a]&&c.form[a].value?c.form[a].value:undefined,v=r&&r.maxLength&&r.maxLength.value;return(0,s.jsxs)(i.d,{className:0===a?"":"mt-20",children:[(0,s.jsx)("input",{type:"hidden",value:o,...u(`form[${a}][label]`)}),(0,s.jsx)("input",{type:"hidden",value:l,...u(`form[${a}][id]`)}),(0,s.jsx)("input",{type:"hidden",value:t,...u(`form[${a}][type]`)}),(0,s.jsx)("input",{type:"hidden",value:f,...u(`form[${a}][icon]`)}),(0,s.jsx)("input",{type:"hidden",value:j,...u(`form[${a}][gID]`)}),"text"===t||"email"===t||"tel"===t||"number"===t?(0,s.jsx)(n.yt,{id:l,label:o,type:t,icon:f,error:h,defaultValue:g,limit:v,color:p,placeholder:d,...u(`form[${a}][value]`,r)}):(0,s.jsx)(s.Fragment,{}),"select"===t&&(0,s.jsx)(n.ih,{id:l,label:o,icon:f,color:p,placeholder:d,name:`form[${a}][value]`,value:g,control:x,data:m,rules:r,error:h,options:b}),"date"===t&&(0,s.jsx)(n.v2,{id:l,label:o,icon:f,color:p,control:x,placeholder:d,name:`form[${a}][value]`,error:h,value:g,rules:r,options:b}),"radio"===t||"checkbox"===t?(0,s.jsx)(n.il,{id:l,type:t,error:h,value:g,data:m,color:p,label:o,icon:f,...u(`form[${a}][value]`,r)}):(0,s.jsx)(s.Fragment,{}),"textarea"===t&&(0,s.jsx)(n.B1,{id:l,label:o,icon:f,limit:v,color:p,error:h,defaultValue:g,placeholder:d,...u(`form[${a}][value]`,r)}),"switch"===t&&(0,s.jsx)(n.j7,{id:l,"aria-label":l,color:p,error:h,...u(`form[${a}][value]`,r)})]},a)}))}),l]})};r.displayName="BlockForm"},3793:function(e,a,l){l.d(a,{e:function(){return r}});var s=l(5893),o=l(7294),t=l(6358),i=l(1504),n=l(7625);const r=e=>{const{tag:a="div",children:l,hash:r,...c}=e,m=a,d=(0,o.useRef)(null),{scroll:f,page:{exit:u}}=(0,n.et)(),p=(0,o.useCallback)((()=>{const e=(0,i.kt)(window.location.href);e&&setTimeout((()=>{const a=f;d.current&&(a.scrollTo={y:e,offsetY:0},t.ZP.to(window,a))}),u)}),[u,f]);return(0,o.useEffect)((()=>{p(d.current)}),[p]),(0,s.jsx)(m,{ref:d,"data-anchor":r,...c,children:l})};r.displayName="Anchor"},2368:function(e,a,l){l.d(a,{g:function(){return m}});var s=l(5893),o=l(7294),t=l(2729),i=l(253),n=l(7487),r=l(3793),c=l(2465);const m=(0,o.forwardRef)(((e,a)=>{const{title:l,icon:o,children:m,className:d="",color:f="m3",colorTitle:u="m3",id:p,tag:x="section",...h}=e,b=x;return(0,s.jsxs)(b,{ref:a,className:`pos-r ${d}`,...h,children:[p&&(0,s.jsx)(r.e,{id:p,hash:p,className:"pos-a -t-80"}),l&&(0,s.jsxs)("div",{className:"pos-r -mb-30 sm:-mb-20 xs:-mb-20",children:[p&&(0,s.jsx)(c.r,{"aria-label":l,hash:p,className:"pos-a w-100p h-100p t-0 l-0 z-10"}),(0,s.jsx)(n.D,{name:l,icon:o,hasLine:!1,color:u,"aria-hidden":"true","data-nosnippet":!0,className:"fs-50 fw-700 sm:fs-24 pl-20 pos-a z-5 w-100p h-100p t-0 l-0"}),(0,s.jsx)(n.D,{name:l,icon:o,hasLine:!1,color:u,className:"fs-50 fw-700 sm:fs-24 pl-20"})]}),(0,s.jsxs)(t.U,{color:f,className:"pos-r p-40 sm:p-20 bfil-blur-10 sm:pt-25",children:[(0,s.jsx)(i.a,{className:`bgc-${f} opa-5 block`}),(0,s.jsx)("div",{className:"pos-r",children:m})]})]})}));m.displayName="Block"},6174:function(e,a,l){l.d(a,{W:function(){return o}});var s=l(5893);const o=e=>{const{tag:a="div",className:l="",children:o,...t}=e,i=a;return(0,s.jsx)(i,{className:`w-100p maxw-90p sm:maxw-100p px-40 sm:px-20 box-content mx-a ${l}`,...t,children:o})};o.displayName="Container"},4096:function(e,a,l){l.d(a,{u:function(){return s}});const s=e=>"email"===e?/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/:"tel"===e?/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/:"password"===e?/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/:"url"===e?/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/:"number"===e?/^\d+$/:"hashtag"===e?/^#[^ !@#$%^&*(),.?":{}|<>]*$/:/^\d+$/},9916:function(e,a,l){l.r(a),l.d(a,{"default":function(){return z}});var s=l(5893),o=l(1072),t=l(405),i=l(8808),n=l(7487),r=l(6174),c=l(8976),m=l(2368);const d=()=>{const{t:e}=(0,o.$G)(["components"]),a=["m1","m2","m3","m4","txt","bg"],l="abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ";return(0,s.jsxs)(m.g,{icon:"fas fa-star",id:"basic",title:e("components:basic"),children:[(0,s.jsx)("div",{className:"flex wrap w-100p",children:a.map(((e,l)=>(0,s.jsx)(c.d,{className:`co-${e} flex-1 px-20 py-5 minh-40 flex ju-c ai-c fw-700 bgc-${a[a.length-1-l]}`,children:e},e)))}),(0,s.jsxs)("div",{className:"mt-30 co-txt",children:[(0,s.jsx)(c.d,{className:"fs-24",children:l}),(0,s.jsx)(c.d,{className:"fs-24 fw-500",children:l}),(0,s.jsx)(c.d,{className:"fs-24 fw-700",children:l}),(0,s.jsx)(c.d,{className:"fs-24 fw-900",children:l}),(0,s.jsx)(c.d,{className:"fs-32 mt-20 ff-1",children:l})]})]})};d.displayName="Page__ComponentsBasic";var f=d;const u=()=>{const{t:e}=(0,o.$G)(["components"]),a=["m1","m2","m3","m4","txt","bg"],l="abc def ghi";return(0,s.jsxs)(m.g,{icon:"fa-solid fa-heading",id:"title",title:e("components:heading"),className:"mt-100 sm:mt-50",children:[a.map((e=>(0,s.jsx)(n.D,{name:l,color:e,className:"fs-24 fw-700"},e))),(0,s.jsx)("div",{className:"mt-30",children:a.map((e=>(0,s.jsx)(n.D,{name:l,color:e,icon:"fa-solid fa-home",className:"fs-24 fw-700"},e)))}),(0,s.jsx)("div",{className:"mt-30",children:a.map((e=>(0,s.jsx)(n.D,{name:l,color:e,hasLine:!1,className:"fs-24 ff-1"},e)))}),(0,s.jsx)("div",{className:"mt-30",children:a.map((e=>(0,s.jsx)(n.D,{name:l,color:e,hasLine:!1,icon:"fa-solid fa-home",className:"fs-24 ff-1"},e)))})]})};u.displayName="Page__ComponentsTitle";var p=u,x=l(2729),h=l(8317);const b=()=>{const{t:e}=(0,o.$G)(["components"]),a=["m1","m2","m3","m4","txt","bg"],l="abc def";return(0,s.jsxs)(m.g,{icon:"fa-solid fa-wand-magic-sparkles",id:"effect",title:e("components:effect"),className:"mt-100 sm:mt-50",children:[(0,s.jsx)("div",{className:"flex wrap ju-c",children:a.map((e=>(0,s.jsx)(c.d,{className:"flex-1 ta-c m-5",children:(0,s.jsx)(x.U,{color:e,className:"w-100p px-20 py-10",children:l})},e)))}),(0,s.jsx)("div",{className:"flex wrap ju-c",children:a.map(((e,o)=>(0,s.jsx)(c.d,{className:"flex-1 flex ju-c ai-c m-5",children:(0,s.jsx)(h.C,{className:`w-100p ta-c px-20 py-10 bgc-${e} co-${a[a.length-1-o]}`,children:l})},e)))}),(0,s.jsx)("div",{className:"flex wrap ju-c",children:a.map((e=>(0,s.jsx)(c.d,{className:"flex-1 ta-c m-5",children:(0,s.jsx)(h.C,{className:"",children:(0,s.jsx)(x.U,{color:e,className:"w-100p px-20 py-10",children:l})})},e)))})]})};b.displayName="Page__ComponentsEffect";var j=b,g=l(5256);const v=()=>{const{t:e}=(0,o.$G)(["components"]),a=["m1","m2","m3","m4","txt","bg"],l="abcd";return(0,s.jsxs)(m.g,{icon:"fa-solid fa-land-mine-on",id:"btn",title:e("components:button"),className:"mt-100 sm:mt-50",children:[(0,s.jsx)("div",{className:"flex wrap",children:a.map((e=>(0,s.jsx)(g.u,{type:"button",tag:"button",color:e,colorContent:"bg"===e?"txt":"bg",className:"flex-1 m-5",children:l},e)))}),(0,s.jsx)("div",{className:"flex wrap mt-30",children:a.map((e=>(0,s.jsx)(g.u,{icon:"fa-solid fa-home",type:"button",tag:"button",color:e,colorContent:"bg"===e?"txt":"bg",className:"flex-1 m-5",children:l},e)))}),(0,s.jsx)("div",{className:"flex wrap mt-30",children:a.map((e=>(0,s.jsx)(g.u,{iconSuffix:"fa-solid fa-home",type:"button",tag:"button",color:e,colorContent:"bg"===e?"txt":"bg",className:"flex-1 m-5",children:l},e)))}),(0,s.jsx)("div",{className:"flex wrap mt-30",children:a.map((e=>(0,s.jsx)(g.u,{icon:"fa-solid fa-home",iconSuffix:"fa-solid fa-home",type:"button",tag:"button",color:e,colorContent:"bg"===e?"txt":"bg",className:"m-5 fs-32",children:l},e)))}),(0,s.jsx)("div",{className:"flex wrap mt-30",children:a.map((a=>(0,s.jsx)(g.u,{icon:"fa-solid fa-home",type:"button",tag:"button",color:a,colorContent:"bg"===a?"txt":"bg","aria-label":e("page.components.title.button"),className:"m-5",classNameContainer:"minh-50 minw-50"},a)))})]})};v.displayName="Page__ComponentsButton";var N=v,w=l(7294),y=l(4096),$=l(1492);const q=()=>{const{t:e}=(0,o.$G)(["components","form"]),[a,l]=(0,w.useState)(null),t=[{id:"name",label:e("form:label.field"),type:"text",list:!1,placeholder:"abcde",color:"m1",rule:{required:{value:!0,message:e("form:validation.required")},maxLength:{value:10,message:e("form:validation.limit")}}},{id:"email",label:e("form:label.email"),type:"email",list:!1,placeholder:"abcde",icon:"fa-solid fa-envelope",color:"m2",rule:{required:{value:!0,message:e("form:validation.required")},pattern:{value:(0,y.u)("email"),message:e("form:validation.email")},maxLength:{value:254,message:e("form:validation.limit")}}},{id:"date",label:e("form:label.date"),icon:"fa-solid fa-calendar-days",type:"date",list:!1,rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"item",label:e("form:label.select"),icon:"fa-solid fa-list-ul",type:"select",list:["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"],rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"item",label:e("form:label.select"),icon:"fa-solid fa-list",type:"select",list:["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"],options:{isMulti:!0},rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"msg",label:e("form:label.field"),type:"textarea",list:!1,placeholder:"abcde",icon:"fa-solid fa-file-lines",color:"m1",rule:{required:{value:!0,message:e("form:validation.required")},maxLength:{value:500,message:e("form:validation.limit")}}},{id:"radio",label:e("form:label.radio"),type:"radio",icon:"fa-solid fa-circle-dot",color:"m1",list:["r123","r456","r789","r000"],rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"checkmate",label:e("form:label.checkbox"),type:"checkbox",icon:"fa-solid fa-square-check",color:"m1",list:["c123","c456","c789","c000"],rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"nintendo-switch",label:e("form:label.switch"),type:"switch",icon:"fa-solid fa-toggle-on",color:"m3",list:!1,rule:{required:{value:!0,message:e("form:validation.required")}}}];return(0,s.jsxs)(m.g,{icon:"fa-solid fa-rectangle-list",id:"form",title:e("components:form"),className:"mt-100 sm:mt-50",children:[(0,s.jsx)($.D,{fields:t,onSubmit:e=>l(e),isRender:!0,className:"pos-r z-10",children:(0,s.jsx)("div",{className:"mt-10 flex ju-c",children:(0,s.jsx)(g.u,{tag:"button",type:"submit",icon:"fa-solid fa-paper-plane",color:"m3",classNameContainer:"fs-24",children:e("form:button.send")})})}),a&&(0,s.jsx)(c.d,{className:"mt-50 bdb-solid bdw-2 bdc-m3 pos-r z-5",children:(0,s.jsx)(x.U,{color:"m3",className:"p-10",children:(0,s.jsx)("pre",{className:"h-300 of-auto",children:JSON.stringify(a,null,2)})})})]})};q.displayName="Page__ComponentsForm";var C=q;const k=()=>{const{t:e}=(0,o.$G)(),a=(0,i.M)({title:e("menu.components")});return(0,s.jsxs)("div",{className:"w-100p",children:[(0,s.jsx)(t.ql,{children:(0,s.jsx)("title",{children:a})}),(0,s.jsx)("div",{className:"flex mb-100 sm:mb-50",children:(0,s.jsx)(r.W,{children:(0,s.jsx)(n.D,{icon:"fas fa-puzzle-piece",name:e("menu.components"),className:"fs-50vw ls-5em tt-up co-m1 xs:fs-28 ff-1"})})}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsxs)(r.W,{children:[(0,s.jsx)(f,{}),(0,s.jsx)(p,{}),(0,s.jsx)(j,{}),(0,s.jsx)(N,{}),(0,s.jsx)(C,{})]})})]})};k.displayName="Page__Components";var z=k}}]);