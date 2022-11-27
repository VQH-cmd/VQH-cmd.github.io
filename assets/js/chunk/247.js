"use strict";(self.webpackChunkconvergence_zeta=self.webpackChunkconvergence_zeta||[]).push([[247],{7681:function(e,t,n){n.d(t,{e:function(){return i}});var a=n(7294),r=n(6358),c=n(1504),o=n(395),l=function(){return l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},i=function(e){var t=e.tag,n=void 0===t?"div":t,i=e.children,f=e.hash,m=s(e,["tag","children","hash"]),p=n,u=(0,a.useRef)(null),d=(0,o.et)(),b=d.scroll,v=d.page.exit,y=(0,a.useCallback)((function(){var e=(0,c.kt)(window.location.href);e&&setTimeout((function(){var t=b;u.current&&(t.scrollTo={y:e,offsetY:0},r.ZP.to(window,t))}),v)}),[v,b]);return(0,a.useEffect)((function(){y(u.current)}),[y]),a.createElement(p,l({ref:u,"data-anchor":f},m),i)};i.displayName="Anchor"},5499:function(e,t,n){n.d(t,{g:function(){return m}});var a=n(7294),r=n(763),c=n(182),o=n(2254),l=n(7681),s=n(4277),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},m=function(e){var t=e.title,n=e.icon,m=e.children,p=e.className,u=void 0===p?"":p,d=e.color,b=void 0===d?"m3":d,v=e.colorTitle,y=void 0===v?"m3":v,h=e.id,O=f(e,["title","icon","children","className","color","colorTitle","id"]);return a.createElement("section",i({className:"pos-r ".concat(u)},O),h&&a.createElement(l.e,{id:h,hash:h,className:"pos-a -t-80"}),t&&a.createElement("div",{className:"pos-r -mb-30 sm:-mb-20 xs:-mb-20"},h&&a.createElement(s.r,{"aria-label":t,hash:h,className:"pos-a w-100p h-100p t-0 l-0 z-10"}),a.createElement(o.D,{name:t,icon:n,hasLine:!1,color:y,"aria-hidden":"true","data-nosnippet":!0,className:"fs-50 fw-700 sm:fs-24 pl-20 pos-a z-5 w-100p h-100p t-0 l-0"}),a.createElement(o.D,{name:t,icon:n,hasLine:!1,color:y,className:"fs-50 fw-700 sm:fs-24 pl-20"})),a.createElement(r.U,{color:b,className:"pos-r p-40 sm:p-20 bfil-blur-10 sm:pt-25"},a.createElement(c.a,{className:"bgc-".concat(b," opa-5 block")}),a.createElement("div",{className:"pos-r"},m)))};m.displayName="Block"},847:function(e,t,n){n.d(t,{W:function(){return o}});var a=n(7294),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},o=function(e){var t=e.tag,n=void 0===t?"div":t,o=e.className,l=void 0===o?"":o,s=e.children,i=c(e,["tag","className","children"]),f=n;return a.createElement(f,r({className:"w-100p maxw-90p sm:maxw-100p px-40 sm:px-20 box-content mx-a ".concat(l)},i),s)};o.displayName="Container"},247:function(e,t,n){n.r(t);var a=n(7294),r=n(9250),c=n(405),o=n(4478),l=n(2445),s=n(6563),i=n(655),f=n(2254),m=n(847),p=n(5499),u=function(){var e=(0,o.$)(["404"]).t,t=(0,r.s0)(),n=l.lz.global,u=n.title,d=n.separate,b=(0,a.useState)(30),v=b[0],y=b[1];return(0,a.useEffect)((function(){v>0?setTimeout((function(){return y(v-1)}),1e3):t(l.cp+"/")}),[t,v]),a.createElement("div",{className:"w-100p flex-a"},a.createElement(c.ql,null,a.createElement("title",null,"404".concat(d).concat(u))),a.createElement("div",{className:"flex mb-50"},a.createElement(m.W,null,a.createElement(f.D,{icon:"fa-solid fa-circle-exclamation",name:"404",color:"m4",className:"fs-50vw ls-5em tt-up co-m1 xs:fs-28 ff-1"}))),a.createElement("div",{className:"flex"},a.createElement(m.W,null,a.createElement(p.g,{color:"m4"},a.createElement(s.d,{tag:"p",className:"co-m4 fw-500"},e("404:content")),a.createElement("div",{className:"mt-20 flex"},a.createElement(i.u,{color:"m4",icon:"fa-solid fa-igloo",classNameContainer:"fs-24 fw-700"},e("404:btn")," ",a.createElement("span",{className:"fw-400 fs-16 opa-70"},"(",v,")")))))))};u.displayName="Page__404",t.default=u}}]);