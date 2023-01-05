"use strict";(self.webpackChunkconvergence_zeta=self.webpackChunkconvergence_zeta||[]).push([[736],{704:function(e,t,a){a.d(t,{D:function(){return s}});var n=a(7294),r=a(7536),l=a(6563),o=a(7973),c=undefined&&undefined.__assign||function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},i=undefined&&undefined.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},s=function(e){var t=e.fields,a=e.children,s=e.onSubmit,m=e.data,f=e.isRender,u=void 0!==f&&f,d=i(e,["fields","children","onSubmit","data","isRender"]),p=(0,r.cI)(),h=p.register,v=p.handleSubmit,g=p.control,b=p.formState.errors;return n.createElement("form",c({action:"post",onSubmit:v((function(e){s&&s(e)}))},d),u&&t&&t.length>0&&n.createElement("div",{className:""},t.map((function(e,t){var a=e.id,r=e.label,i=e.type,s=e.rule,f=e.list,u=e.placeholder,d=e.icon,p=e.color,v=e.options,y=e.gID,w=m&&m.form&&m.form[t]&&m.form[t].value?m.form[t].value:null,E=s&&s.maxLength&&s.maxLength.value;return n.createElement(l.d,{key:t,className:0===t?"":"mt-20"},n.createElement("input",c({type:"hidden",value:r},h("form[".concat(t,"][label]")))),n.createElement("input",c({type:"hidden",value:a},h("form[".concat(t,"][id]")))),n.createElement("input",c({type:"hidden",value:i},h("form[".concat(t,"][type]")))),n.createElement("input",c({type:"hidden",value:d},h("form[".concat(t,"][icon]")))),n.createElement("input",c({type:"hidden",value:y},h("form[".concat(t,"][gID]")))),"text"===i||"email"===i||"tel"===i||"number"===i?n.createElement(o.yt,c({id:a,label:r,type:i,icon:d,error:b,name:"form[".concat(t,"][value]"),defaultValue:w,limit:E,color:p,placeholder:u},h("form[".concat(t,"][value]"),s))):n.createElement(n.Fragment,null),"select"===i&&n.createElement(o.ih,{id:a,label:r,icon:d,color:p,placeholder:u,name:"form[".concat(t,"][value]"),value:w,control:g,data:f,rules:s,error:b,options:v}),"date"===i&&n.createElement(o.v2,{id:a,label:r,icon:d,color:p,control:g,placeholder:u,name:"form[".concat(t,"][value]"),error:b,value:w,rules:s,options:v}),"radio"===i||"checkbox"===i?n.createElement(o.il,c({id:a,type:i,name:"form[".concat(t,"][value]"),error:b,value:w,data:f,color:p,label:r,icon:d},h("form[".concat(t,"][value]"),s))):n.createElement(n.Fragment,null),"textarea"===i&&n.createElement(o.B1,c({id:a,label:r,icon:d,name:"form[".concat(t,"][value]"),limit:E,color:p,error:b,defaultValue:w,placeholder:u},h("form[".concat(t,"][value]"),s))),"switch"===i&&n.createElement(o.j7,c({id:a,"aria-label":a,name:"form[".concat(t,"][value]"),color:p,error:b},h("form[".concat(t,"][value]"),s))))}))),a)};s.displayName="BlockForm"},7681:function(e,t,a){a.d(t,{e:function(){return s}});var n=a(7294),r=a(6358),l=a(1504),o=a(991),c=undefined&&undefined.__assign||function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},i=undefined&&undefined.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},s=function(e){var t=e.tag,a=void 0===t?"div":t,s=e.children,m=e.hash,f=i(e,["tag","children","hash"]),u=a,d=(0,n.useRef)(null),p=(0,o.et)(),h=p.scroll,v=p.page.exit,g=(0,n.useCallback)((function(){var e=(0,l.kt)(window.location.href);e&&setTimeout((function(){var t=h;d.current&&(t.scrollTo={y:e,offsetY:0},r.ZP.to(window,t))}),v)}),[v,h]);return(0,n.useEffect)((function(){g(d.current)}),[g]),n.createElement(u,c({ref:d,"data-anchor":m},f),s)};s.displayName="Anchor"},5499:function(e,t,a){a.d(t,{g:function(){return f}});var n=a(7294),r=a(763),l=a(182),o=a(2254),c=a(7681),i=a(4277),s=undefined&&undefined.__assign||function(){return s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},m=undefined&&undefined.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},f=(0,n.forwardRef)((function(e,t){var a=e.title,f=e.icon,u=e.children,d=e.className,p=void 0===d?"":d,h=e.color,v=void 0===h?"m3":h,g=e.colorTitle,b=void 0===g?"m3":g,y=e.id,w=e.tag,E=void 0===w?"section":w,x=m(e,["title","icon","children","className","color","colorTitle","id","tag"]),O=E;return n.createElement(O,s({ref:t,className:"pos-r ".concat(p)},x),y&&n.createElement(c.e,{id:y,hash:y,className:"pos-a -t-80"}),a&&n.createElement("div",{className:"pos-r -mb-30 sm:-mb-20 xs:-mb-20"},y&&n.createElement(i.r,{"aria-label":a,hash:y,className:"pos-a w-100p h-100p t-0 l-0 z-10"}),n.createElement(o.D,{name:a,icon:f,hasLine:!1,color:b,"aria-hidden":"true","data-nosnippet":!0,className:"fs-50 fw-700 sm:fs-24 pl-20 pos-a z-5 w-100p h-100p t-0 l-0"}),n.createElement(o.D,{name:a,icon:f,hasLine:!1,color:b,className:"fs-50 fw-700 sm:fs-24 pl-20"})),n.createElement(r.U,{color:v,className:"pos-r p-40 sm:p-20 bfil-blur-10 sm:pt-25"},n.createElement(l.a,{className:"bgc-".concat(v," opa-5 block")}),n.createElement("div",{className:"pos-r"},u)))}));f.displayName="Block"},847:function(e,t,a){a.d(t,{W:function(){return o}});var n=a(7294),r=undefined&&undefined.__assign||function(){return r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},l=undefined&&undefined.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},o=function(e){var t=e.tag,a=void 0===t?"div":t,o=e.className,c=void 0===o?"":o,i=e.children,s=l(e,["tag","className","children"]),m=a;return n.createElement(m,r({className:"w-100p maxw-90p sm:maxw-100p px-40 sm:px-20 box-content mx-a ".concat(c)},s),i)};o.displayName="Container"},7741:function(e,t,a){a.d(t,{u:function(){return n}});var n=function(e){return"email"===e?/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/:"tel"===e?/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/:"password"===e?/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/:"url"===e?/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/:"number"===e?/^\d+$/:"hashtag"===e?/^#[^ !@#$%^&*(),.?":{}|<>]*$/:null}},8736:function(e,t,a){a.r(t),a.d(t,{"default":function(){return C}});var n=a(7294),r=a(6546),l=a(1072),o=a(405),c=a(8808),i=a(2655),s=a(991),m=a(1155),f=a(7741),u=a(704),d=a(6563),p=a(655),h=undefined&&undefined.__assign||function(){return h=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},h.apply(this,arguments)},v=undefined&&undefined.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},g=function(e){var t=e.onRendered,a=e.onChecked,l=e.className,o=void 0===l?"":l,c=v(e,["onRendered","onChecked","className"]),m=(0,n.useId)(),f=(0,n.useState)(!1),u=f[0],d=f[1],p=(0,i.oR)().state.theme.name,g=(0,s.et)().page.enter;return(0,n.useEffect)((function(){if(!u){var e=p;"custom"!==p&&"system"!==p&&p||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark"),window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(e="light")),grecaptcha.ready((function(){t&&t(!0),d(!0),grecaptcha.render("recap-".concat(m),{sitekey:"6Lel3PIUAAAAAIj2RAVUA1I97RaIZVDI_ipD2sjU",theme:e,callback:function(e){e&&a&&(a(!0),setTimeout((function(){r.ScrollTrigger.refresh()}),g))},"expired-callback":function(){a&&(a(!1),setTimeout((function(){r.ScrollTrigger.refresh()}),g))}})}))}}),[t,a,m,u,p,g]),n.createElement("div",h({className:"pos-r w-100p h-80 of-hide ".concat(o)},c),n.createElement("div",{id:"recap-".concat(m),className:"pos-a w-100p h-100p t-0 l-0 flex ju-c"}))};g.displayName="Recap";var b=function(e){var t=e.data,a=e.onSubmit,r=e.recapChecked,o=e.onRecapChecked,c=(0,l.$G)(["components","form"]).t,i=(0,n.useState)(!1),s=i[0],m=i[1],h=[{id:"name",gID:"1721217668",label:c("form:label.name"),type:"text",list:!1,placeholder:"abcde",icon:"fa-solid fa-user",color:"txt",rule:{required:{value:!0,message:c("form:validation.required")},maxLength:{value:64,message:c("form:validation.limit")}}},{id:"email",gID:"1518889439",label:c("form:label.email"),type:"email",list:!1,placeholder:"abcde",icon:"fa-solid fa-envelope",color:"txt",rule:{required:{value:!0,message:c("form:validation.required")},pattern:{value:(0,f.u)("email"),message:c("form:validation.email")},maxLength:{value:254,message:c("form:validation.limit")}}},{id:"subject",gID:"1267399532",label:c("form:label.subject"),type:"text",list:!1,icon:"fa-solid fa-heading",color:"txt",rule:{required:{value:!0,message:c("form:validation.required")},maxLength:{value:100,message:c("form:validation.limit")}}},{id:"msg",gID:"1706350634",label:c("form:label.message"),type:"textarea",list:!1,placeholder:"abcde",icon:"fa-solid fa-file-lines",color:"txt",rule:{required:{value:!0,message:c("form:validation.required")},maxLength:{value:2e3,message:c("form:validation.limit")}}}];return n.createElement(u.D,{fields:h,data:t,isRender:s,onSubmit:function(e){return a(e)}},n.createElement(d.d,{className:"flex ju-c mt-20"},n.createElement(g,{onRendered:function(e){return m(!!e)},onChecked:function(e){return o(!!e)}})),r&&n.createElement(d.d,{className:"flex ju-c mt-20"},n.createElement(p.u,{tag:"button",type:"submit",iconSuffix:"fa-solid fa-angle-right",className:"fs-20 w-100p mx-a maxw-300",classNameContainer:"minh-60 fw-700"},c("form:button.check"))))},y=a(5935),w=function(e){var t=e.data,a=e.onSubmit,r=e.onReturn,o=(0,l.$G)(["form"]).t;return n.createElement("div",null,t.form&&t.form.length>0&&n.createElement("table",{className:"w-100p x:block"},n.createElement("tbody",{className:"xs:block"},t.form.map((function(e,t){var a=e.label,r=e.value,l=e.type,o=e.icon,c=r;return"select"===l&&(c=r.value),"checkbox"===l&&(c="",r.forEach((function(e,t){c+="".concat(0===t?"":", ").concat(e)}))),"textarea"===l&&(c="",r.split("\n").forEach((function(e){c+="".concat(e,"<br />")}))),n.createElement("tr",{key:t,className:"xs:block xs:py-15"},n.createElement("th",{className:"xs:block py-10 pr-20 ta-l va-top xs:py-0"},n.createElement(d.d,{tag:"p",className:"flex ai-b co-m3 fw-400"},n.createElement("span",{className:"flex mr-10"},n.createElement("i",{className:o})),n.createElement("span",{className:"flex"},a))),n.createElement("td",{className:"xs:block py-10 fw-500 xs:pb-0 xs:pt-5"},n.createElement(d.d,null,(0,y.ZP)(c))))})))),n.createElement("div",{className:"flex ju-c wrap mt-20"},n.createElement(d.d,{className:"m-10 flex-a maxw-200"},n.createElement(p.u,{tag:"button",type:"submit",icon:"fa-solid fa-angle-left",color:"m2",onClick:function(){return r(!0)},className:"w-100p",classNameContainer:"minh-60 fw-700"},o("form:button.back"))),n.createElement(d.d,{className:"m-10 flex-a maxw-200"},n.createElement(p.u,{tag:"button",type:"submit",iconSuffix:"fa-solid fa-paper-plane",color:"m3",onClick:function(){return a(t)},className:"w-100p",classNameContainer:"minh-60 fw-700"},o("form:button.send")))))},E=function(e){var t=e.data,a=(0,l.$G)(["form"]).t,r="",o="";if(t&&t.form)for(var c=0,i=t.form;c<i.length;c++){var s=i[c];"email"===s.id&&(r=s.value),"name"===s.id&&(o=s.value)}return n.createElement(n.Fragment,null,n.createElement(d.d,{tag:"p"},a("form:content.sent.0"),": ",n.createElement("span",{className:"co-m3 fw-600"},o)," ",a("form:content.sent.1")," !"),n.createElement(d.d,{tag:"p"},a("form:content.sent.2")),n.createElement(d.d,{tag:"p",className:"mt-30"},a("form:content.sent.3")),n.createElement(d.d,{tag:"p",className:"co-m3 fw-700"},r))},x=a(5499),O=a(182),N=a(1915),k=function(){var e=(0,l.$G)(["contact"]).t,t=[{name:"Messenger",url:"https://www.facebook.com/messages/t/100041009075540",icon:"fa-brands fa-facebook-messenger",svg:null},{name:"Zalo",url:"https://zalo.me/0934422767",icon:null,svg:n.createElement(N.Ts,{className:"w-40 h-a",classPath:"dur-200 fill-bg g-ho:fill-m1"})},{name:"Skype",url:"https://join.skype.com/invite/cdUOf2Ys4lLr",icon:"fa-brands fa-skype"},{name:"Chatwork",url:"https://www.chatwork.com/vqh-cmd",icon:null,svg:n.createElement(N.kh,{className:"w-40 h-a",classPath:"dur-200 fill-bg g-ho:fill-m1"})}];return n.createElement(x.g,{color:"txt",icon:"fa-solid fa-share-nodes",title:e("contact:title.social"),className:"mt-100 sm:mt-50 mx-a maxw-800"},n.createElement("div",{className:"flex wrap w-100p xs:ju-c"},t.map((function(e){var t=e.name,a=e.url,r=e.icon,l=e.svg;return n.createElement("div",{key:t,className:"m-5 g pos-r xs:m-10"},n.createElement(p.u,{href:a,target:"_blank",rel:"nofollow external noreferrer",icon:r,classNameContainer:"minw-100 minh-100 fs-40 xs:minw-80 xs:minh-80"},l),n.createElement("div",{className:"pos-a w-100p t-100p l-0 dur-200 opa-0 g-ho:opa-100 pe-none pt-10 -trans-translateY-20 g-ho:trans-translateY-0 sm:hide"},n.createElement(O.a,{className:"opa-5 block bgc-m1"}),n.createElement("p",{className:"px-10 py-5 lh-120r ta-c fw-700 co-m1 fs-14"},t)))}))))};k.displayName="PageContactSNS";var j=k,S=a(2254),P=a(7681),_=a(847),I=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1],f=(0,n.useState)(!1),u=f[0],d=f[1],p=(0,n.useState)(null),h=p[0],v=p[1],g=(0,n.useState)(!1),y=g[0],O=g[1],N=(0,l.$G)(),k=N.i18n,I=N.t,C=(0,s.et)().scroll,R=(0,i.oR)().state.theme.color,T=(0,c.M)({title:I("menu.contact")}),D=I("form:title.form"),A="fa-solid fa-file-lines";return u&&!t&&(D=I("form:title.check"),A="fa-solid fa-circle-check"),t&&(D=I("form:title.sent"),A="fa-solid fa-paper-plane"),n.createElement("section",{className:"pos-r w-100p flex flex-a"},n.createElement(P.e,{id:"s",className:"pos-a -t-80 w-100p"}),n.createElement(_.W,null,n.createElement(o.ql,null,n.createElement("title",null,T)),n.createElement(S.D,{icon:"fa-solid fa-envelope",name:I("menu.contact"),className:"fs-50vw ls-5em tt-up co-m1 xs:fs-28 ff-1"}),n.createElement(x.g,{color:"txt",icon:A,title:D,className:"mt-100 sm:mt-50 mx-a maxw-800"},t||u?n.createElement(n.Fragment,null):n.createElement(b,{data:h,onSubmit:function(e){v(e),d(!0),O(!1),(0,m.aI)({target:"#s",scroll:C}),setTimeout((function(){r.ScrollTrigger.refresh()}),400)},recapChecked:y,onRecapChecked:function(e){return O(e)}}),u&&!t&&n.createElement(w,{data:h,onSubmit:function(e){var t="";if(e&&e.form)for(var n=0;n<e.form.length;n++)t+="entry.".concat(e.form[n].gID,"=").concat(encodeURIComponent(e.form[n].value),"&");t+="entry.660464718=".concat(k.language,"&"),t+="entry.1210932632=".concat(encodeURIComponent(JSON.stringify(R)),"&");var r='<svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60"><path d="M92.8,23.1V12.6c0-2.9-.9-4.9-2.8-6s-5.5-1.6-10.8-1.6H38.7c-5.3,0-8.9,.5-10.8,1.6-.6,.3-1,.7-1.4,1.2,.2-.2,.4-.3,.7-.4,1.9-1.1,5.5-1.6,10.8-1.6h40.5c5.3,0,8.9,.5,10.8,1.6,1.9,1.1,2.8,3.1,2.8,6v10.1l-39.3,30.5v-11.2l-7.6-5.9h-6.5c-5.4,0-9-.5-10.8-1.6-1.9-1.1-2.8-3-2.8-6v-6.2H7.5l43.8,31.9h17.3l43.9-31.9h-19.7ZM40.4,13.3h39.6c-.1-.6-.6-1.1-1.3-1.1H39.3c-.7,0-1.3,.6-1.3,1.3v3.9c0,.6,.5,1.2,1.1,1.3v-4.1c0-.7,.5-1.3,1.3-1.3Zm-2.4,17.2c0,.6,.5,1.2,1.1,1.3v-4.1c0-.7,.6-1.3,1.3-1.3h39.6c-.1-.6-.6-1.1-1.3-1.1H39.3c-.7,0-1.3,.6-1.3,1.3v3.9Z" fill="'.concat(R.m1,'" /></svg>');r=(new DOMParser).parseFromString(r,"image/svg+xml"),r=(new XMLSerializer).serializeToString(r),r=window.btoa(r),t+="entry.2031932314=".concat(encodeURIComponent(r));var l="https://docs.google.com/forms/d/".concat("1H3-lAqsDOMft5cKchuOzG-TGOTDoRBakje2IehOYA4U","/formResponse?");fetch(l+t,{method:"GET",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),a(!0)},onReturn:function(e){d(!e),(0,m.aI)({target:"#s",scroll:C}),setTimeout((function(){r.ScrollTrigger.refresh()}),400)}}),t&&n.createElement(E,{data:h})),n.createElement(j,null)))};I.displayName="Page__Contact";var C=I}}]);