(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"9Emu":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("LXcg"),c=n("UEoS");t.default=function(){var e=Object(o.useState)({}),t=e[0],n=e[1];return Object(o.useEffect)((function(){Object(a.r)().then((function(e){var t=e.find((function(e){return e.get("name")==="User-"+a.f.User.current().id}));t&&Object(a.y)("RolePublicProfile",{limit:1,role:{f:"equalTo",t:"pointer",v:t.id,c:"_Role"}}).then((function(e){return e&&e[0]?n(e[0]):n({})}))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{buttonText:"Update Contact Details",heading:"Update Contact Details",mode:t.id?"update":"create",onClick:function(e,t){return"create"===e?Object(a.c)("RolePublicProfile",t):"update"===e?Object(a.B)("RolePublicProfile",t):void 0},model:t.id?t.toJSON():{},formConfig:{config:[{property:"name",headerText:"Name"},{property:"contactNumber",headerText:"Contact Number"},{property:"contactEmail",headerText:"Contact Email"}]}}))}}}]);
//# sourceMappingURL=component---src-pages-profile-js-6b5b4797c0bac551ae61.js.map