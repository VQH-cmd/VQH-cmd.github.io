"use strict";(self.webpackChunkconvergence_zeta=self.webpackChunkconvergence_zeta||[]).push([[736],{704:function(e,n,t){t.d(n,{D:function(){return i}});var a=t(5893),r=(t(7294),t(7536)),o=t(6563),s=t(7973),l=undefined&&undefined.__assign||function(){return l=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},l.apply(this,arguments)},c=undefined&&undefined.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},i=function(e){var n=e.fields,t=e.children,i=e.onSubmit,f=e.data,d=e.isRender,u=void 0!==d&&d,m=c(e,["fields","children","onSubmit","data","isRender"]),p=(0,r.cI)(),h=p.register,x=p.handleSubmit,g=p.control,v=p.formState.errors;return(0,a.jsxs)("form",l({action:"post",onSubmit:x((function(e){i&&i(e)}))},m,{children:[u&&n&&n.length>0&&(0,a.jsx)("div",l({className:""},{children:n.map((function(e,n){var t=e.id,r=e.label,c=e.type,i=e.rule,d=e.list,u=e.placeholder,m=e.icon,p=e.color,x=e.options,b=e.gID,j=f&&f.form&&f.form[n]&&f.form[n].value?f.form[n].value:undefined,y=i&&i.maxLength&&i.maxLength.value;return(0,a.jsxs)(o.d,l({className:0===n?"":"mt-20"},{children:[(0,a.jsx)("input",l({type:"hidden",value:r},h("form[".concat(n,"][label]")))),(0,a.jsx)("input",l({type:"hidden",value:t},h("form[".concat(n,"][id]")))),(0,a.jsx)("input",l({type:"hidden",value:c},h("form[".concat(n,"][type]")))),(0,a.jsx)("input",l({type:"hidden",value:m},h("form[".concat(n,"][icon]")))),(0,a.jsx)("input",l({type:"hidden",value:b},h("form[".concat(n,"][gID]")))),"text"===c||"email"===c||"tel"===c||"number"===c?(0,a.jsx)(s.yt,l({id:t,label:r,type:c,icon:m,error:v,defaultValue:j,limit:y,color:p,placeholder:u},h("form[".concat(n,"][value]"),i))):(0,a.jsx)(a.Fragment,{}),"select"===c&&(0,a.jsx)(s.ih,{id:t,label:r,icon:m,color:p,placeholder:u,name:"form[".concat(n,"][value]"),value:j,control:g,data:d,rules:i,error:v,options:x}),"date"===c&&(0,a.jsx)(s.v2,{id:t,label:r,icon:m,color:p,control:g,placeholder:u,name:"form[".concat(n,"][value]"),error:v,value:j,rules:i,options:x}),"radio"===c||"checkbox"===c?(0,a.jsx)(s.il,l({id:t,type:c,error:v,value:j,data:d,color:p,label:r,icon:m},h("form[".concat(n,"][value]"),i))):(0,a.jsx)(a.Fragment,{}),"textarea"===c&&(0,a.jsx)(s.B1,l({id:t,label:r,icon:m,limit:y,color:p,error:v,defaultValue:j,placeholder:u},h("form[".concat(n,"][value]"),i))),"switch"===c&&(0,a.jsx)(s.j7,l({id:t,"aria-label":t,color:p,error:v},h("form[".concat(n,"][value]"),i)))]}),n)}))})),t]}))};i.displayName="BlockForm"},7681:function(e,n,t){t.d(n,{e:function(){return f}});var a=t(5893),r=t(7294),o=t(6358),s=t(1504),l=t(991),c=undefined&&undefined.__assign||function(){return c=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},c.apply(this,arguments)},i=undefined&&undefined.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},f=function(e){var n=e.tag,t=void 0===n?"div":n,f=e.children,d=e.hash,u=i(e,["tag","children","hash"]),m=t,p=(0,r.useRef)(null),h=(0,l.et)(),x=h.scroll,g=h.page.exit,v=(0,r.useCallback)((function(){var e=(0,s.kt)(window.location.href);e&&setTimeout((function(){var n=x;p.current&&(n.scrollTo={y:e,offsetY:0},o.ZP.to(window,n))}),g)}),[g,x]);return(0,r.useEffect)((function(){v(p.current)}),[v]),(0,a.jsx)(m,c({ref:p,"data-anchor":d},u,{children:f}))};f.displayName="Anchor"},5499:function(e,n,t){t.d(n,{g:function(){return u}});var a=t(5893),r=t(7294),o=t(763),s=t(182),l=t(2254),c=t(7681),i=t(4277),f=undefined&&undefined.__assign||function(){return f=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},f.apply(this,arguments)},d=undefined&&undefined.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},u=(0,r.forwardRef)((function(e,n){var t=e.title,r=e.icon,u=e.children,m=e.className,p=void 0===m?"":m,h=e.color,x=void 0===h?"m3":h,g=e.colorTitle,v=void 0===g?"m3":g,b=e.id,j=e.tag,y=void 0===j?"section":j,w=d(e,["title","icon","children","className","color","colorTitle","id","tag"]),O=y;return(0,a.jsxs)(O,f({ref:n,className:"pos-r ".concat(p)},w,{children:[b&&(0,a.jsx)(c.e,{id:b,hash:b,className:"pos-a -t-80"}),t&&(0,a.jsxs)("div",f({className:"pos-r -mb-30 sm:-mb-20 xs:-mb-20"},{children:[b&&(0,a.jsx)(i.r,{"aria-label":t,hash:b,className:"pos-a w-100p h-100p t-0 l-0 z-10"}),(0,a.jsx)(l.D,{name:t,icon:r,hasLine:!1,color:v,"aria-hidden":"true","data-nosnippet":!0,className:"fs-50 fw-700 sm:fs-24 pl-20 pos-a z-5 w-100p h-100p t-0 l-0"}),(0,a.jsx)(l.D,{name:t,icon:r,hasLine:!1,color:v,className:"fs-50 fw-700 sm:fs-24 pl-20"})]})),(0,a.jsxs)(o.U,f({color:x,className:"pos-r p-40 sm:p-20 bfil-blur-10 sm:pt-25"},{children:[(0,a.jsx)(s.a,{className:"bgc-".concat(x," opa-5 block")}),(0,a.jsx)("div",f({className:"pos-r"},{children:u}))]}))]}))}));u.displayName="Block"},847:function(e,n,t){t.d(n,{W:function(){return s}});var a=t(5893),r=undefined&&undefined.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},r.apply(this,arguments)},o=undefined&&undefined.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},s=function(e){var n=e.tag,t=void 0===n?"div":n,s=e.className,l=void 0===s?"":s,c=e.children,i=o(e,["tag","className","children"]),f=t;return(0,a.jsx)(f,r({className:"w-100p maxw-90p sm:maxw-100p px-40 sm:px-20 box-content mx-a ".concat(l)},i,{children:c}))};s.displayName="Container"},7741:function(e,n,t){t.d(n,{u:function(){return a}});var a=function(e){return"email"===e?/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/:"tel"===e?/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/:"password"===e?/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/:"url"===e?/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/:"number"===e?/^\d+$/:"hashtag"===e?/^#[^ !@#$%^&*(),.?":{}|<>]*$/:/^\d+$/}},8736:function(e,n,t){t.r(n),t.d(n,{"default":function(){return L}});var a=t(5893),r=t(7294),o=t(6546),s=t(1072),l=t(405),c=t(8808),i=t(2655),f=t(991),d=t(1155),u=t(7741),m=t(704),p=t(6563),h=t(655),x=undefined&&undefined.__assign||function(){return x=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},x.apply(this,arguments)},g=undefined&&undefined.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},v=function(e){var n=e.onRendered,t=e.onChecked,s=e.className,l=void 0===s?"":s,c=g(e,["onRendered","onChecked","className"]),d=(0,r.useId)(),u=(0,r.useState)(!1),m=u[0],p=u[1],h=(0,i.oR)().state.theme.name,v=(0,f.et)().page.enter;return(0,r.useEffect)((function(){if(!m){var e=h;"custom"!==h&&"system"!==h&&h||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark"),window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(e="light")),grecaptcha.ready((function(){n&&n(!0),p(!0),grecaptcha.render("recap-".concat(d),{sitekey:"6Lel3PIUAAAAAIj2RAVUA1I97RaIZVDI_ipD2sjU",theme:e,callback:function(e){e&&t&&(t(!0),setTimeout((function(){o.ScrollTrigger.refresh()}),v))},"expired-callback":function(){t&&(t(!1),setTimeout((function(){o.ScrollTrigger.refresh()}),v))}})}))}}),[n,t,d,m,h,v]),(0,a.jsx)("div",x({className:"pos-r w-100p h-80 of-hide ".concat(l)},c,{children:(0,a.jsx)("div",{id:"recap-".concat(d),className:"pos-a w-100p h-100p t-0 l-0 flex ju-c"})}))};v.displayName="Recap";var b=undefined&&undefined.__assign||function(){return b=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},b.apply(this,arguments)},j=function(e){var n=e.data,t=e.onSubmit,o=e.recapChecked,l=e.onRecapChecked,c=(0,s.$G)(["components","form"]).t,i=(0,r.useState)(!1),f=i[0],d=i[1],x=[{id:"name",gID:"1721217668",label:c("form:label.name"),type:"text",list:!1,placeholder:"abcde",icon:"fa-solid fa-user",color:"txt",rule:{required:{value:!0,message:c("form:validation.required")},maxLength:{value:64,message:c("form:validation.limit")}}},{id:"email",gID:"1518889439",label:c("form:label.email"),type:"email",list:!1,placeholder:"abcde",icon:"fa-solid fa-envelope",color:"txt",rule:{required:{value:!0,message:c("form:validation.required")},pattern:{value:(0,u.u)("email"),message:c("form:validation.email")},maxLength:{value:254,message:c("form:validation.limit")}}},{id:"subject",gID:"1267399532",label:c("form:label.subject"),type:"text",list:!1,icon:"fa-solid fa-heading",color:"txt",rule:{required:{value:!0,message:c("form:validation.required")},maxLength:{value:100,message:c("form:validation.limit")}}},{id:"msg",gID:"1706350634",label:c("form:label.message"),type:"textarea",list:!1,placeholder:"abcde",icon:"fa-solid fa-file-lines",color:"txt",rule:{required:{value:!0,message:c("form:validation.required")},maxLength:{value:2e3,message:c("form:validation.limit")}}}];return(0,a.jsxs)(m.D,b({fields:x,data:n,isRender:f,onSubmit:function(e){return t(e)}},{children:[(0,a.jsx)(p.d,b({className:"flex ju-c mt-20"},{children:(0,a.jsx)(v,{onRendered:function(e){return d(!!e)},onChecked:function(e){return l(!!e)}})})),o&&(0,a.jsx)(p.d,b({className:"flex ju-c mt-20"},{children:(0,a.jsx)(h.u,b({tag:"button",type:"submit",iconSuffix:"fa-solid fa-angle-right",className:"fs-20 w-100p mx-a maxw-300",classNameContainer:"minh-60 fw-700"},{children:c("form:button.check")}))}))]}))},y=t(5935),w=undefined&&undefined.__assign||function(){return w=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},w.apply(this,arguments)},O=function(e){var n=e.data,t=e.onSubmit,r=e.onReturn,o=(0,s.$G)(["form"]).t;return(0,a.jsxs)("div",{children:[n.form&&n.form.length>0&&(0,a.jsx)("table",w({className:"w-100p x:block"},{children:(0,a.jsx)("tbody",w({className:"xs:block"},{children:n.form.map((function(e,n){var t=e.label,r=e.value,o=e.type,s=e.icon,l=r;return"select"===o&&(l=r.value),"checkbox"===o&&(l="",r.forEach((function(e,n){l+="".concat(0===n?"":", ").concat(e)}))),"textarea"===o&&(l="",r.split("\n").forEach((function(e){l+="".concat(e,"<br />")}))),(0,a.jsxs)("tr",w({className:"xs:block xs:py-15"},{children:[(0,a.jsx)("th",w({className:"xs:block py-10 pr-20 ta-l va-top xs:py-0"},{children:(0,a.jsxs)(p.d,w({tag:"p",className:"flex ai-b co-m3 fw-400"},{children:[(0,a.jsx)("span",w({className:"flex mr-10"},{children:(0,a.jsx)("i",{className:s})})),(0,a.jsx)("span",w({className:"flex"},{children:t}))]}))})),(0,a.jsx)("td",w({className:"xs:block py-10 fw-500 xs:pb-0 xs:pt-5"},{children:(0,a.jsx)(p.d,{children:(0,y.ZP)(l)})}))]}),n)}))}))})),(0,a.jsxs)("div",w({className:"flex ju-c wrap mt-20"},{children:[(0,a.jsx)(p.d,w({className:"m-10 flex-a maxw-200"},{children:(0,a.jsx)(h.u,w({tag:"button",type:"submit",icon:"fa-solid fa-angle-left",color:"m2",onClick:function(){return r(!0)},className:"w-100p",classNameContainer:"minh-60 fw-700"},{children:o("form:button.back")}))})),(0,a.jsx)(p.d,w({className:"m-10 flex-a maxw-200"},{children:(0,a.jsx)(h.u,w({tag:"button",type:"submit",iconSuffix:"fa-solid fa-paper-plane",color:"m3",onClick:function(){return t(n)},className:"w-100p",classNameContainer:"minh-60 fw-700"},{children:o("form:button.send")}))}))]}))]})},N=undefined&&undefined.__assign||function(){return N=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},N.apply(this,arguments)},k=function(e){var n=e.data,t=(0,s.$G)(["form"]).t,r="",o="";if(n&&n.form)for(var l=0,c=n.form;l<c.length;l++){var i=c[l];"email"===i.id&&(r=i.value),"name"===i.id&&(o=i.value)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(p.d,N({tag:"p"},{children:[t("form:content.sent.0"),": ",(0,a.jsx)("span",N({className:"co-m3 fw-600"},{children:o}))," ",t("form:content.sent.1")," !"]})),(0,a.jsx)(p.d,N({tag:"p"},{children:t("form:content.sent.2")})),(0,a.jsx)(p.d,N({tag:"p",className:"mt-30"},{children:t("form:content.sent.3")})),(0,a.jsx)(p.d,N({tag:"p",className:"co-m3 fw-700"},{children:r}))]})},S=t(5499),_=t(182),P=t(1915),I=undefined&&undefined.__assign||function(){return I=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},I.apply(this,arguments)},C=function(){var e=(0,s.$G)(["contact"]).t,n=[{name:"Messenger",url:"https://www.facebook.com/messages/t/100041009075540",icon:"fa-brands fa-facebook-messenger",svg:undefined},{name:"Zalo",url:"https://zalo.me/0934422767",icon:undefined,svg:(0,a.jsx)(P.Ts,{className:"w-40 h-a",classPath:"dur-200 fill-bg g-ho:fill-m1"})},{name:"Skype",url:"https://join.skype.com/invite/cdUOf2Ys4lLr",icon:"fa-brands fa-skype"},{name:"Chatwork",url:"https://www.chatwork.com/vqh-cmd",icon:undefined,svg:(0,a.jsx)(P.kh,{className:"w-40 h-a",classPath:"dur-200 fill-bg g-ho:fill-m1"})}];return(0,a.jsx)(S.g,I({color:"txt",icon:"fa-solid fa-share-nodes",title:e("contact:title.social"),className:"mt-100 sm:mt-50 mx-a maxw-800"},{children:(0,a.jsx)("div",I({className:"flex wrap w-100p xs:ju-c"},{children:n.map((function(e){var n=e.name,t=e.url,r=e.icon,o=e.svg;return(0,a.jsxs)("div",I({className:"m-5 g pos-r xs:m-10"},{children:[(0,a.jsx)(h.u,I({href:t,target:"_blank",rel:"nofollow external noreferrer",icon:r,classNameContainer:"minw-100 minh-100 fs-40 xs:minw-80 xs:minh-80"},{children:o})),(0,a.jsxs)("div",I({className:"pos-a w-100p t-100p l-0 dur-200 opa-0 g-ho:opa-100 pe-none pt-10 -trans-translateY-20 g-ho:trans-translateY-0 sm:hide"},{children:[(0,a.jsx)(_.a,{className:"opa-5 block bgc-m1"}),(0,a.jsx)("p",I({className:"px-10 py-5 lh-120r ta-c fw-700 co-m1 fs-14"},{children:n}))]}))]}),n)}))}))}))};C.displayName="PageContactSNS";var R=C,T=t(2254),D=t(7681),A=t(847),z=undefined&&undefined.__assign||function(){return z=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},z.apply(this,arguments)},Z=function(){var e=(0,r.useState)(!1),n=e[0],t=e[1],u=(0,r.useState)(!1),m=u[0],p=u[1],h=(0,r.useState)(null),x=h[0],g=h[1],v=(0,r.useState)(!1),b=v[0],y=v[1],w=(0,s.$G)(),N=w.i18n,_=w.t,P=(0,f.et)().scroll,I=(0,i.oR)().state.theme.color,C=(0,c.M)({title:_("menu.contact")}),Z=_("form:title.form"),L="fa-solid fa-file-lines";return m&&!n&&(Z=_("form:title.check"),L="fa-solid fa-circle-check"),n&&(Z=_("form:title.sent"),L="fa-solid fa-paper-plane"),(0,a.jsxs)("section",z({className:"pos-r w-100p flex flex-a"},{children:[(0,a.jsx)(D.e,{id:"s",className:"pos-a -t-80 w-100p"}),(0,a.jsxs)(A.W,{children:[(0,a.jsx)(l.ql,{children:(0,a.jsx)("title",{children:C})}),(0,a.jsx)(T.D,{icon:"fa-solid fa-envelope",name:_("menu.contact"),className:"fs-50vw ls-5em tt-up co-m1 xs:fs-28 ff-1"}),(0,a.jsxs)(S.g,z({color:"txt",icon:L,title:Z,className:"mt-100 sm:mt-50 mx-a maxw-800"},{children:[n||m?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(j,{data:x,onSubmit:function(e){g(e),p(!0),y(!1),(0,d.aI)({target:"#s",scroll:P}),setTimeout((function(){o.ScrollTrigger.refresh()}),400)},recapChecked:b,onRecapChecked:function(e){return y(e)}}),m&&!n&&(0,a.jsx)(O,{data:x,onSubmit:function(e){var n="";if(e&&e.form)for(var a=0;a<e.form.length;a++)n+="entry.".concat(e.form[a].gID,"=").concat(encodeURIComponent(e.form[a].value),"&");n+="entry.660464718=".concat(N.language,"&"),n+="entry.1210932632=".concat(encodeURIComponent(JSON.stringify(I)),"&");var r='<svg xmlns="http://www.w3.org/2000/svg" width="480" height="370" viewBox="0 0 480 370"><path d="m310,286l-60,84L0,20h120l190,266ZM444.29,50L480,0H150l35.71,50h258.57Zm-25,35l-104.29,146-104.29-146h208.57Zm-104.29,94.39l45.99-64.39h-91.98l45.99,64.39Z" fill="'.concat(I.m1,'" /></svg>');r=(new DOMParser).parseFromString(r,"image/svg+xml"),r=(new XMLSerializer).serializeToString(r),r=window.btoa(r),n+="entry.2031932314=".concat(encodeURIComponent(r));var o="https://docs.google.com/forms/d/".concat("1H3-lAqsDOMft5cKchuOzG-TGOTDoRBakje2IehOYA4U","/formResponse?");fetch(o+n,{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),t(!0)},onReturn:function(e){p(!e),(0,d.aI)({target:"#s",scroll:P}),setTimeout((function(){o.ScrollTrigger.refresh()}),400)}}),n&&(0,a.jsx)(k,{data:x})]})),(0,a.jsx)(R,{})]})]}))};Z.displayName="Page__Contact";var L=Z}}]);