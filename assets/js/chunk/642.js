"use strict";(self.webpackChunkconvergence_zeta=self.webpackChunkconvergence_zeta||[]).push([[642],{704:function(e,n,a){a.d(n,{D:function(){return c}});var t=a(5893),r=(a(7294),a(7536)),o=a(6563),l=a(7973),i=undefined&&undefined.__assign||function(){return i=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},i.apply(this,arguments)},s=undefined&&undefined.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},c=function(e){var n=e.fields,a=e.children,c=e.onSubmit,d=e.data,f=e.isRender,m=void 0!==f&&f,u=s(e,["fields","children","onSubmit","data","isRender"]),p=(0,r.cI)(),h=p.register,x=p.handleSubmit,b=p.control,v=p.formState.errors;return(0,t.jsxs)("form",i({action:"post",onSubmit:x((function(e){c&&c(e)}))},u,{children:[m&&n&&n.length>0&&(0,t.jsx)("div",i({className:""},{children:n.map((function(e,n){var a=e.id,r=e.label,s=e.type,c=e.rule,f=e.list,m=e.placeholder,u=e.icon,p=e.color,x=e.options,j=e.gID,g=d&&d.form&&d.form[n]&&d.form[n].value?d.form[n].value:undefined,y=c&&c.maxLength&&c.maxLength.value;return(0,t.jsxs)(o.d,i({className:0===n?"":"mt-20"},{children:[(0,t.jsx)("input",i({type:"hidden",value:r},h("form[".concat(n,"][label]")))),(0,t.jsx)("input",i({type:"hidden",value:a},h("form[".concat(n,"][id]")))),(0,t.jsx)("input",i({type:"hidden",value:s},h("form[".concat(n,"][type]")))),(0,t.jsx)("input",i({type:"hidden",value:u},h("form[".concat(n,"][icon]")))),(0,t.jsx)("input",i({type:"hidden",value:j},h("form[".concat(n,"][gID]")))),"text"===s||"email"===s||"tel"===s||"number"===s?(0,t.jsx)(l.yt,i({id:a,label:r,type:s,icon:u,error:v,defaultValue:g,limit:y,color:p,placeholder:m},h("form[".concat(n,"][value]"),c))):(0,t.jsx)(t.Fragment,{}),"select"===s&&(0,t.jsx)(l.ih,{id:a,label:r,icon:u,color:p,placeholder:m,name:"form[".concat(n,"][value]"),value:g,control:b,data:f,rules:c,error:v,options:x}),"date"===s&&(0,t.jsx)(l.v2,{id:a,label:r,icon:u,color:p,control:b,placeholder:m,name:"form[".concat(n,"][value]"),error:v,value:g,rules:c,options:x}),"radio"===s||"checkbox"===s?(0,t.jsx)(l.il,i({id:a,type:s,error:v,value:g,data:f,color:p,label:r,icon:u},h("form[".concat(n,"][value]"),c))):(0,t.jsx)(t.Fragment,{}),"textarea"===s&&(0,t.jsx)(l.B1,i({id:a,label:r,icon:u,limit:y,color:p,error:v,defaultValue:g,placeholder:m},h("form[".concat(n,"][value]"),c))),"switch"===s&&(0,t.jsx)(l.j7,i({id:a,"aria-label":a,color:p,error:v},h("form[".concat(n,"][value]"),c)))]}),n)}))})),a]}))};c.displayName="BlockForm"},7681:function(e,n,a){a.d(n,{e:function(){return d}});var t=a(5893),r=a(7294),o=a(6358),l=a(1504),i=a(9259),s=undefined&&undefined.__assign||function(){return s=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},s.apply(this,arguments)},c=undefined&&undefined.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},d=function(e){var n=e.tag,a=void 0===n?"div":n,d=e.children,f=e.hash,m=c(e,["tag","children","hash"]),u=a,p=(0,r.useRef)(null),h=(0,i.et)(),x=h.scroll,b=h.page.exit,v=(0,r.useCallback)((function(){var e=(0,l.kt)(window.location.href);e&&setTimeout((function(){var n=x;p.current&&(n.scrollTo={y:e,offsetY:0},o.ZP.to(window,n))}),b)}),[b,x]);return(0,r.useEffect)((function(){v(p.current)}),[v]),(0,t.jsx)(u,s({ref:p,"data-anchor":f},m,{children:d}))};d.displayName="Anchor"},5499:function(e,n,a){a.d(n,{g:function(){return m}});var t=a(5893),r=a(7294),o=a(763),l=a(182),i=a(2254),s=a(7681),c=a(4277),d=undefined&&undefined.__assign||function(){return d=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},d.apply(this,arguments)},f=undefined&&undefined.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},m=(0,r.forwardRef)((function(e,n){var a=e.title,r=e.icon,m=e.children,u=e.className,p=void 0===u?"":u,h=e.color,x=void 0===h?"m3":h,b=e.colorTitle,v=void 0===b?"m3":b,j=e.id,g=e.tag,y=void 0===g?"section":g,N=f(e,["title","icon","children","className","color","colorTitle","id","tag"]),w=y;return(0,t.jsxs)(w,d({ref:n,className:"pos-r ".concat(p)},N,{children:[j&&(0,t.jsx)(s.e,{id:j,hash:j,className:"pos-a -t-80"}),a&&(0,t.jsxs)("div",d({className:"pos-r -mb-30 sm:-mb-20 xs:-mb-20"},{children:[j&&(0,t.jsx)(c.r,{"aria-label":a,hash:j,className:"pos-a w-100p h-100p t-0 l-0 z-10"}),(0,t.jsx)(i.D,{name:a,icon:r,hasLine:!1,color:v,"aria-hidden":"true","data-nosnippet":!0,className:"fs-50 fw-700 sm:fs-24 pl-20 pos-a z-5 w-100p h-100p t-0 l-0"}),(0,t.jsx)(i.D,{name:a,icon:r,hasLine:!1,color:v,className:"fs-50 fw-700 sm:fs-24 pl-20"})]})),(0,t.jsxs)(o.U,d({color:x,className:"pos-r p-40 sm:p-20 bfil-blur-10 sm:pt-25"},{children:[(0,t.jsx)(l.a,{className:"bgc-".concat(x," opa-5 block")}),(0,t.jsx)("div",d({className:"pos-r"},{children:m}))]}))]}))}));m.displayName="Block"},847:function(e,n,a){a.d(n,{W:function(){return l}});var t=a(5893),r=undefined&&undefined.__assign||function(){return r=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},r.apply(this,arguments)},o=undefined&&undefined.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},l=function(e){var n=e.tag,a=void 0===n?"div":n,l=e.className,i=void 0===l?"":l,s=e.children,c=o(e,["tag","className","children"]),d=a;return(0,t.jsx)(d,r({className:"w-100p maxw-90p sm:maxw-100p px-40 sm:px-20 box-content mx-a ".concat(i)},c,{children:s}))};l.displayName="Container"},7741:function(e,n,a){a.d(n,{u:function(){return t}});var t=function(e){return"email"===e?/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/:"tel"===e?/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/:"password"===e?/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/:"url"===e?/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/:"number"===e?/^\d+$/:"hashtag"===e?/^#[^ !@#$%^&*(),.?":{}|<>]*$/:/^\d+$/}},5642:function(e,n,a){a.r(n),a.d(n,{"default":function(){return L}});var t=a(5893),r=a(1072),o=a(405),l=a(8808),i=a(2254),s=a(847),c=a(6563),d=a(5499),f=undefined&&undefined.__assign||function(){return f=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},f.apply(this,arguments)},m=function(){var e=(0,r.$G)(["components"]).t,n=["m1","m2","m3","m4","txt","bg"],a="abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO PQRS TUV WXYZ";return(0,t.jsxs)(d.g,f({icon:"fas fa-star",id:"basic",title:e("components:basic")},{children:[(0,t.jsx)("div",f({className:"flex wrap w-100p"},{children:n.map((function(e,a){return(0,t.jsx)(c.d,f({className:"co-".concat(e," flex-1 px-20 py-5 minh-40 flex ju-c ai-c fw-700 bgc-").concat(n[n.length-1-a])},{children:e}),e)}))})),(0,t.jsxs)("div",f({className:"mt-30 co-txt"},{children:[(0,t.jsx)(c.d,f({className:"fs-24"},{children:a})),(0,t.jsx)(c.d,f({className:"fs-24 fw-500"},{children:a})),(0,t.jsx)(c.d,f({className:"fs-24 fw-700"},{children:a})),(0,t.jsx)(c.d,f({className:"fs-24 fw-900"},{children:a})),(0,t.jsx)(c.d,f({className:"fs-32 mt-20 ff-1"},{children:a}))]}))]}))};m.displayName="Page__ComponentsBasic";var u=m,p=undefined&&undefined.__assign||function(){return p=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},p.apply(this,arguments)},h=function(){var e=(0,r.$G)(["components"]).t,n=["m1","m2","m3","m4","txt","bg"],a="abc def ghi";return(0,t.jsxs)(d.g,p({icon:"fa-solid fa-heading",id:"title",title:e("components:heading"),className:"mt-100 sm:mt-50"},{children:[n.map((function(e){return(0,t.jsx)(i.D,{name:a,color:e,className:"fs-24 fw-700"},e)})),(0,t.jsx)("div",p({className:"mt-30"},{children:n.map((function(e){return(0,t.jsx)(i.D,{name:a,color:e,icon:"fa-solid fa-home",className:"fs-24 fw-700"},e)}))})),(0,t.jsx)("div",p({className:"mt-30"},{children:n.map((function(e){return(0,t.jsx)(i.D,{name:a,color:e,hasLine:!1,className:"fs-24 ff-1"},e)}))})),(0,t.jsx)("div",p({className:"mt-30"},{children:n.map((function(e){return(0,t.jsx)(i.D,{name:a,color:e,hasLine:!1,icon:"fa-solid fa-home",className:"fs-24 ff-1"},e)}))}))]}))};h.displayName="Page__ComponentsTitle";var x=h,b=a(763),v=a(3005),j=undefined&&undefined.__assign||function(){return j=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},j.apply(this,arguments)},g=function(){var e=(0,r.$G)(["components"]).t,n=["m1","m2","m3","m4","txt","bg"],a="abc def";return(0,t.jsxs)(d.g,j({icon:"fa-solid fa-wand-magic-sparkles",id:"effect",title:e("components:effect"),className:"mt-100 sm:mt-50"},{children:[(0,t.jsx)("div",j({className:"flex wrap ju-c"},{children:n.map((function(e){return(0,t.jsx)(c.d,j({className:"flex-1 ta-c m-5"},{children:(0,t.jsx)(b.U,j({color:e,className:"w-100p px-20 py-10"},{children:a}))}),e)}))})),(0,t.jsx)("div",j({className:"flex wrap ju-c"},{children:n.map((function(e,r){return(0,t.jsx)(c.d,j({className:"flex-1 flex ju-c ai-c m-5"},{children:(0,t.jsx)(v.C,j({className:"w-100p ta-c px-20 py-10 bgc-".concat(e," co-").concat(n[n.length-1-r])},{children:a}))}),e)}))})),(0,t.jsx)("div",j({className:"flex wrap ju-c"},{children:n.map((function(e){return(0,t.jsx)(c.d,j({className:"flex-1 ta-c m-5"},{children:(0,t.jsx)(v.C,j({className:""},{children:(0,t.jsx)(b.U,j({color:e,className:"w-100p px-20 py-10"},{children:a}))}))}),e)}))}))]}))};g.displayName="Page__ComponentsEffect";var y=g,N=a(655),w=undefined&&undefined.__assign||function(){return w=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},w.apply(this,arguments)},O=function(){var e=(0,r.$G)(["components"]).t,n=["m1","m2","m3","m4","txt","bg"],a="abcd";return(0,t.jsxs)(d.g,w({icon:"fa-solid fa-land-mine-on",id:"btn",title:e("components:button"),className:"mt-100 sm:mt-50"},{children:[(0,t.jsx)("div",w({className:"flex wrap"},{children:n.map((function(e){return(0,t.jsx)(N.u,w({type:"button",tag:"button",color:e,colorContent:"bg"===e?"txt":"bg",className:"flex-1 m-5"},{children:a}),e)}))})),(0,t.jsx)("div",w({className:"flex wrap mt-30"},{children:n.map((function(e){return(0,t.jsx)(N.u,w({icon:"fa-solid fa-home",type:"button",tag:"button",color:e,colorContent:"bg"===e?"txt":"bg",className:"flex-1 m-5"},{children:a}),e)}))})),(0,t.jsx)("div",w({className:"flex wrap mt-30"},{children:n.map((function(e){return(0,t.jsx)(N.u,w({iconSuffix:"fa-solid fa-home",type:"button",tag:"button",color:e,colorContent:"bg"===e?"txt":"bg",className:"flex-1 m-5"},{children:a}),e)}))})),(0,t.jsx)("div",w({className:"flex wrap mt-30"},{children:n.map((function(e){return(0,t.jsx)(N.u,w({icon:"fa-solid fa-home",iconSuffix:"fa-solid fa-home",type:"button",tag:"button",color:e,colorContent:"bg"===e?"txt":"bg",className:"m-5 fs-32"},{children:a}),e)}))})),(0,t.jsx)("div",w({className:"flex wrap mt-30"},{children:n.map((function(n){return(0,t.jsx)(N.u,{icon:"fa-solid fa-home",type:"button",tag:"button",color:n,colorContent:"bg"===n?"txt":"bg","aria-label":e("page.components.title.button"),className:"m-5",classNameContainer:"minh-50 minw-50"},n)}))}))]}))};O.displayName="Page__ComponentsButton";var _=O,P=a(7294),q=a(7741),C=a(704),S=undefined&&undefined.__assign||function(){return S=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},S.apply(this,arguments)},k=function(){var e=(0,r.$G)(["components","form"]).t,n=(0,P.useState)(null),a=n[0],o=n[1],l=[{id:"name",label:e("form:label.field"),type:"text",list:!1,placeholder:"abcde",color:"m1",rule:{required:{value:!0,message:e("form:validation.required")},maxLength:{value:10,message:e("form:validation.limit")}}},{id:"email",label:e("form:label.email"),type:"email",list:!1,placeholder:"abcde",icon:"fa-solid fa-envelope",color:"m2",rule:{required:{value:!0,message:e("form:validation.required")},pattern:{value:(0,q.u)("email"),message:e("form:validation.email")},maxLength:{value:254,message:e("form:validation.limit")}}},{id:"date",label:e("form:label.date"),icon:"fa-solid fa-calendar-days",type:"date",list:!1,rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"item",label:e("form:label.select"),icon:"fa-solid fa-list-ul",type:"select",list:["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"],rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"item",label:e("form:label.select"),icon:"fa-solid fa-list",type:"select",list:["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"],options:{isMulti:!0},rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"msg",label:e("form:label.field"),type:"textarea",list:!1,placeholder:"abcde",icon:"fa-solid fa-file-lines",color:"m1",rule:{required:{value:!0,message:e("form:validation.required")},maxLength:{value:500,message:e("form:validation.limit")}}},{id:"radio",label:e("form:label.radio"),type:"radio",icon:"fa-solid fa-circle-dot",color:"m1",list:["r123","r456","r789","r000"],rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"checkmate",label:e("form:label.checkbox"),type:"checkbox",icon:"fa-solid fa-square-check",color:"m1",list:["c123","c456","c789","c000"],rule:{required:{value:!0,message:e("form:validation.required")}}},{id:"nintendo-switch",label:e("form:label.switch"),type:"switch",icon:"fa-solid fa-toggle-on",color:"m3",list:!1,rule:{required:{value:!0,message:e("form:validation.required")}}}];return(0,t.jsxs)(d.g,S({icon:"fa-solid fa-rectangle-list",id:"form",title:e("components:form"),className:"mt-100 sm:mt-50"},{children:[(0,t.jsx)(C.D,S({fields:l,onSubmit:function(e){return o(e)},isRender:!0,className:"pos-r z-10"},{children:(0,t.jsx)("div",S({className:"mt-10 flex ju-c"},{children:(0,t.jsx)(N.u,S({tag:"button",type:"submit",icon:"fa-solid fa-paper-plane",color:"m3",classNameContainer:"fs-24"},{children:e("form:button.send")}))}))})),a&&(0,t.jsx)(c.d,S({className:"mt-50 bdb-solid bdw-2 bdc-m3 pos-r z-5"},{children:(0,t.jsx)(b.U,S({color:"m3",className:"p-10"},{children:(0,t.jsx)("pre",S({className:"h-300 of-auto"},{children:JSON.stringify(a,null,2)}))}))}))]}))};k.displayName="Page__ComponentsForm";var z=k,$=undefined&&undefined.__assign||function(){return $=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},$.apply(this,arguments)},D=function(){var e=(0,r.$G)().t,n=(0,l.M)({title:e("menu.components")});return(0,t.jsxs)("div",$({className:"w-100p"},{children:[(0,t.jsx)(o.ql,{children:(0,t.jsx)("title",{children:n})}),(0,t.jsx)("div",$({className:"flex mb-100 sm:mb-50"},{children:(0,t.jsx)(s.W,{children:(0,t.jsx)(i.D,{icon:"fas fa-puzzle-piece",name:e("menu.components"),className:"fs-50vw ls-5em tt-up co-m1 xs:fs-28 ff-1"})})})),(0,t.jsx)("div",$({className:"flex"},{children:(0,t.jsxs)(s.W,{children:[(0,t.jsx)(u,{}),(0,t.jsx)(x,{}),(0,t.jsx)(y,{}),(0,t.jsx)(_,{}),(0,t.jsx)(z,{})]})}))]}))};D.displayName="Page__Components";var L=D}}]);