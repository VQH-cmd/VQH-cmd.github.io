"use strict";(self.webpackChunkconvergence_zeta=self.webpackChunkconvergence_zeta||[]).push([[794],{9794:function(e,a,t){t.r(a),t.d(a,{"default":function(){return v}});var c=t(7294),l=t(1072),p=t(991),s=t(9038),n=t(4732),o=t(1137),r=t(1155),m=t(5499),d=t(6563),i=t(655),f=t(182),u=t(8993),x=t(763),b=t(9045),w=t(5134),E=function(){var e=(0,l.$G)(["app-qr"]).t,a=(0,p.et)().scroll,t=(0,c.useState)(null),s=t[0],E=t[1],g=(0,c.useState)(""),N=g[0],v=g[1],h=(0,c.useState)(!1),q=h[0],y=h[1],j=(0,o.Z)(N),k=(j[0],j[1]);j[2];return(0,c.useEffect)((function(){var e=new n.Z;s&&e.decodeFromImage(s).then((function(e){e&&e.data?v(e.data):v(!1)}))}),[s]),c.createElement(m.g,{id:"upload",icon:"fa-solid fa-upload",title:e("app-qr:title.upload")},c.createElement("div",{className:"flex ju-sb xs:fd-col"},c.createElement(d.d,{className:"pos-r flex-a mr-10 flex ai-c ju-c xs:mx-a xs:w-100p xs:maxw-300"},c.createElement("div",{className:"pos-r w-100p pb-100p bd-dashed bdw-3 dur-200 ".concat(!1===N?"bdc-m4":"bdc-txt")},c.createElement("div",{className:"pos-a w-100p h-100p flex p-10 t-0 l-0"},c.createElement("div",{className:"pos-r w-100p"},s?c.createElement(u.Ee,{ext:!0,src:s,className:"w-100p h-100p t-0 l-0 pos-a objf-cover"}):c.createElement("div",{className:"flex ju-c ai-c pos-a w-100p h-100p t-0 l-0 fs-100 sm:fs-72 co-txt"},c.createElement("i",{className:"fa-solid fa-image"})),c.createElement("input",{id:"bg",name:"bg",type:"file",accept:".gif,.jpg,.jpeg,.png,.svg",onChange:function(e){return function(e){var t=e.target.files[0],c=new FileReader;c&&t&&t.type.match("image.*")&&(c.readAsDataURL(t),c.onload=function(){E(c.result),(0,r.aI)({target:"#upload",scroll:a})})}(e)},className:"pos-a w-100p h-100p t-0 l-0 opa-0 cur-pointer"}))))),c.createElement("div",{className:"flex-a ml-10 flex fd-col ju-sb xs:mx-a xs:w-100p xs:mt-30"},c.createElement(d.d,{className:"pos-r flex flex-a"},c.createElement(x.U,{color:!1===N?"m4":"txt",className:"w-100p h-100p flex"},c.createElement("div",{className:"bdl-solid bdw-4 dur-200 w-100p ".concat(!1===N?"bdc-m4":"bdc-txt")},c.createElement(f.a,{className:"block opa-5 dur-200 ".concat(!1===N?"bgc-m4":"bgc-txt")}),c.createElement("textarea",{placeholder:e("app-qr:title.result"),value:!1===N?e("app-qr:error.noqr"):N,readOnly:!0,className:"pos-r w-100p h-100p bgc-none resize-none p-10 pco-txt popa-40 dur-200 ".concat(!1===N?"co-m4":"co-txt")})))),N&&c.createElement("div",{className:"flex mt-20 xs:ju-c"},c.createElement(i.u,{type:"button",tag:"button",color:"m3",icon:"fa-solid fa-copy",onClick:function(){k(),y(!0)},classNameContainer:"fw-700"},e("app-qr:title.copy")))),c.createElement(b.Jv,{color:"m3",label:e("app-qr:title.copy"),show:q,icon:"fa-solid fa-copy",handleClose:function(){return y(!1)},classNameModal:"w-100p h-a minw-290 maxw-50p maxh-70p sm:maxh-80p sm:maxw-80p flex ju-c",classNameModalInner:"w-100p"},c.createElement("div",{className:"w-100p flex fd-col flex-1 h-100p"},c.createElement("div",{className:"flex-1 of-auto p-20"},c.createElement("p",null,e("app-qr:message.copied01")," ",c.createElement("span",{className:"wb-ba fw-700 co-bg bgc-m3 px-5"},N)," ",e("app-qr:message.copied02")),c.createElement(w.Y,{color:"m3",className:"mt-20"}))))))};E.displayName="Page__AppQRDecodeUpload";var g=E,N=function(){var e=(0,l.$G)(["client","app","app-qr"]).t,a=(0,p.MN)({title:e("app-qr:title.decode")});return c.createElement(s.m,{title:e("app-qr:title.decode"),titleSEO:a,icon:"fa-solid fa-qrcode",breadcrumb:[{name:e("client:menu.app"),icon:"fa-solid fa-cubes",path:"/app"},{name:e("app:qr"),icon:"fa-solid fa-qrcode",path:"/app/qr"}],btn:{to:"/app/qr/gen",icon:"fa-solid fa-qrcode",name:e("app-qr:title.gen")},className:"maxw-800"},c.createElement(g,null))};N.displayName="Page__AppQRDecode";var v=N}}]);