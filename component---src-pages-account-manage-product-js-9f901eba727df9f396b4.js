(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{b3Vd:function(e,t,a){"use strict";a.r(t);var n=a("kD0k"),r=a.n(n),c=(a("ls82"),a("/S4K")),l=a("q1tI"),o=a.n(l),u=a("otPn"),i=a("P3Am"),s=a("463D"),m=a("ZmBq"),d=a("XDYV"),p=a("evJi"),f=a("ebn3"),b=function(e){var t=e.data,a=e.onConfigure,n=e.onDelete;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{columns:[{property:"name",header:o.a.createElement(d.a,null,"Name"),primary:!0},{property:"description",header:o.a.createElement(d.a,null,"Description")},{property:"startBid",header:o.a.createElement(d.a,null,"Start Bid")},{property:"instantClosePrice",header:o.a.createElement(d.a,null,"Instant Close Price")},{property:"Status",header:o.a.createElement(d.a,null,"Status")},{property:"available",header:o.a.createElement(d.a,null,"Display")},{property:"",header:o.a.createElement(d.a,null,"Action"),render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{onClick:function(){return a&&a(e)},style:{cursor:"pointer"}}),o.a.createElement(f.a,{onClick:function(){return n&&n(e)},style:{cursor:"pointer"}}))}}],data:t}))},E=a("ACV0"),h=a("omfP"),j=a("T1Te"),O=a("pngH"),g=a("yzbm"),v=a("LXcg"),C=function(e){var t=e.formModal,a=e.onModal,n=e.mode,r=void 0===n?"create":n,c=(e.onDelete,e.onUpdate,Object(l.useState)(t)),s=c[0],m=c[1],d=o.a.useState(!0),p=d[0],f=d[1],b=Object(l.useState)(null)[1],C=function(e,t){return{value:t[e],onChange:function(a){var n;return m(Object.assign({},t,((n={})[e]=a.target.value,n)))}}},k=Object(l.useCallback)((function(e){!function(e){new v.e.File(e.name,e).save().then((function(e){b(e.url()),m(Object.assign({},s,{photo:e,available:!!p}))}))}(e&&e[0])}),[s,p]),S=Object(g.a)({onDrop:k}),y=S.getRootProps,w=S.getInputProps,D=S.isDragActive;return o.a.createElement(u.a,null,"delete"===r&&o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{level:2},"Are you sure?"),s&&s.photo&&s.photo.url&&o.a.createElement(u.a,{height:"small",width:"small"},o.a.createElement(h.a,{fit:"cover",src:s.photo.url})),o.a.createElement(j.a,{label:"delete",onClick:function(){a&&a(r,Object.assign({},s,{available:!!p}))}})),["create","update"].includes(r)&&o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{level:3},"Upload Product"),o.a.createElement(i.a,Object.assign({placeholder:"Product Name"},C("name",s))),o.a.createElement(u.a,{direction:"row"},o.a.createElement("div",y(),o.a.createElement("input",w()),s&&s.photo&&s.photo.url&&o.a.createElement(u.a,{height:"small",width:"small"},o.a.createElement(h.a,{fit:"cover",src:s.photo.url})),D?o.a.createElement("p",null,"Drop the files here ..."):o.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"))),o.a.createElement(i.a,Object.assign({},C("startBid",s),{placeholder:"Start Bid"})),o.a.createElement(i.a,Object.assign({},C("instantClosePrice",s),{placeholder:"Instant Close"})),o.a.createElement(O.a,{checked:p,label:"Display On Store",onChange:function(e){f(e.target.checked)}}),o.a.createElement(j.a,{label:r,onClick:function(){return a&&a(r,Object.assign({},s,{available:!!p}))}})))},k=a("/Q2I"),S=a("zpb6");t.default=function(e){var t=e.id,a=v.e&&v.e.Object&&v.e.Object.extend("Store"),n=Object(l.useState)({}),m=n[0],d=n[1],p=Object(l.useState)(a&&new a)[0],f=Object(l.useState)({}),E=f[0],h=f[1],j=Object(l.useState)(!1),O=j[0],g=j[1],y=Object(l.useState)(null),w=y[0],D=y[1],I=Object(l.useState)([]),x=I[0],P=I[1],F=Object(l.useState)("create"),A=F[0],B=F[1];return Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.i)();case 2:a=e.sent,D(a.find((function(e){return e.id===t})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(l.useEffect)((function(){w&&(h({name:w.get("name")}),function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=P,e.next=3,Object(v.j)(w);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[w]),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{fill:!0,justify:"center",align:"center",alignContent:"center"},o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{fill:!0,gap:"small",direction:"row"},o.a.createElement(i.a,{plain:!1,placeholder:"choose a store name",value:E.name,onChange:function(e){h(Object.assign({},E,{objectId:p&&p.id,name:e.target.value}))}}),o.a.createElement(s.a,{onClick:function(){return g(!0)}},"Change Store Name"),o.a.createElement(s.a,{onClick:function(){B("create"),d({}),g(!0)}},"Add Product")),o.a.createElement(u.a,{fill:!0},o.a.createElement(b,{data:x?x.map((function(e){return e.toJSON()})):[],onConfigure:function(e){B("update"),d(e),g(!0)},onDelete:function(e){B("delete"),d(e),g(!0)}})))),O&&o.a.createElement(k.a,{onClose:function(){return g(!1)}},o.a.createElement(C,{mode:A,formModal:m,onModal:function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=["name","photo","startBid","instantClosePrice","objectId","available"],c=w.id,a=Object(S.cloneJSONKey)(a,n),"create"!==t){e.next=6;break}return e.next=6,Object(v.c)(a,w.id);case 6:if("update"!==t){e.next=9;break}return e.next=9,Object(v.s)(Object.assign({},a,{productId:a.objectId,storeId:c}));case 9:if("delete"!==t){e.next=12;break}return e.next=12,Object(v.f)({productId:a.objectId,storeId:c});case 12:setTimeout((function(){return Object(v.j)(w).then((function(e){P(e),g(!1)}))}),1e3);case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),onClose:function(){return g(!1)}})))}}}]);
//# sourceMappingURL=component---src-pages-account-manage-product-js-9f901eba727df9f396b4.js.map