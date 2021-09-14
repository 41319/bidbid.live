"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[633],{6750:function(e,t,n){n.d(t,{O:function(){return m}});var r=n(7294),a=n(3336),o=n(9409),i=n(6289),l=n(1686),c=n(8169),u=n(8681),s=n(8952),d=n(4192),f=(0,a.css)(["&:hover{"," "," ",";}"],(function(e){return e.theme.tab.hover.background&&(0,a.css)(["background:",";"],(0,s.ut)(e.theme.tab.hover.background,e.theme))}),(function(e){return e.theme.tab.hover.color&&(0,a.css)(["color:",";"],(0,s.ut)(e.theme.tab.hover.color,e.theme))}),(function(e){return e.theme.tab.hover.extend})),b=a.default.div.withConfig({displayName:"StyledTab",componentId:"sc-1nnwnsb-0"})([""," "," "," ",""],d.$G,(function(e){return!e.plain&&!e.disabled&&e.theme.tab.hover&&f}),(function(e){return e.disabled&&e.theme.tab.disabled}),(function(e){return e.theme.tab.extend}));function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}b.defaultProps={},Object.setPrototypeOf(b.defaultProps,o.l);var p=(0,r.forwardRef)((function(e,t){e.active;var n=e.disabled,d=e.children,f=e.icon,p=e.plain,m=e.title,h=e.onMouseOver,g=e.onMouseOut,y=e.reverse,x=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["active","disabled","children","icon","plain","title","onMouseOver","onMouseOut","reverse"]),C=(0,r.useContext)(u.R),E=C.active,O=C.activeIndex,w=C.onActivate,k=C.setActiveContent,P=C.setActiveTitle,T=(0,r.useContext)(a.ThemeContext)||o.l.theme,j=(0,r.useState)(void 0),S=j[0],A=j[1],I=(0,r.useState)(void 0),z=I[0],F=I[1],N=m,_={};(0,r.useEffect)((function(){E&&(k(d),P("string"==typeof m?m:O+1))}),[E,O,d,k,P,m]);if(E&&n&&console.warn("Warning: Tab props 'active' and 'disabled' have both been set to TRUE on the same Tab resulting in an interesting Tab state. Is this your intent?"),!p){if(N="string"!=typeof m?m:E?r.createElement(c.x,T.tab.active,m):n&&T.tab.disabled?r.createElement(c.x,T.tab.disabled,m):r.createElement(c.x,{color:S?T.tab.hover.color:T.tab.color},m),T.tab.border){var R=T.tab.border.color||T.global.control.border.color;E?R=T.tab.border.active.color||R:n&&T.tab.border.disabled?R=T.tab.border.disabled.color||R:S&&(R=T.tab.border.hover.color||R),R=(0,s.ut)(R,T),_.border={side:T.tab.border.side,size:T.tab.border.size,color:R}}_.background=E&&T.tab.active.background||T.tab.background,_.pad=T.tab.pad,_.margin=T.tab.margin}var D,M;f&&(M=f,D=E?r.cloneElement(M,v({},T.tab.active)):n?r.cloneElement(M,v({},T.tab.disabled)):r.cloneElement(M,{color:S?T.tab.hover.color:T.tab.color}));var K,Z=y?N:D,B=y?D:N;return Z&&B&&(K={direction:"row",align:"center",justify:"center",gap:"small"}),r.createElement(l.z,v({ref:t,plain:!0,role:"tab","aria-selected":E,"aria-expanded":E,disabled:n},x,{onClick:function(e){e&&e.preventDefault(),w()},onMouseOver:function(e){A(!0),h&&h(e)},onMouseOut:function(e){A(void 0),g&&g(e)},onFocus:function(){F(!0),h&&h()},onBlur:function(){F(void 0),g&&g()},style:z&&{zIndex:1}}),r.createElement(b,v({as:i.x,disabled:n,plain:p},K,_),Z,B))}));p.displayName="Tab",p.defaultProps={},Object.setPrototypeOf(p.defaultProps,o.l);var m=p},3551:function(e,t,n){n.d(t,{m:function(){return g}});var r,a=n(7294),o=n(3336),i=n(9409),l=n(6289),c=n(8681),u=n(4192),s=o.default.div.withConfig({displayName:"StyledTabs__StyledTabsHeader",componentId:"a4fwxl-0"})(["",";"],(function(e){return e.theme.tabs.header.extend}));s.defaultProps={},Object.setPrototypeOf(s.defaultProps,i.l);var d=((r={})[!0]="1 1",r[!1]="0 0",r.grow="1 0",r.shrink="0 1",r),f=(0,o.css)(["flex:",";"],(function(e){return d[e.flex]+(!0!==e.flex?" auto":"")})),b=o.default.div.withConfig({displayName:"StyledTabs__StyledTabPanel",componentId:"a4fwxl-1"})(["min-height:0;"," ",";"],(function(e){return e.flex&&f}),(function(e){return e.theme.tabs.panel.extend}));b.defaultProps={},Object.setPrototypeOf(b.defaultProps,i.l);var v=o.default.div.withConfig({displayName:"StyledTabs",componentId:"a4fwxl-2"})([""," ",";"],u.$G,(function(e){return e.theme.tabs.extend}));v.defaultProps={},Object.setPrototypeOf(v.defaultProps,i.l);var p=n(8952);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=(0,a.forwardRef)((function(e,t){var n=e.alignControls,r=e.children,u=e.flex,d=e.justify,f=void 0===d?"center":d,h=e.messages,g=void 0===h?{tabContents:"Tab Contents"}:h,y=e.responsive,x=void 0===y||y,C=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["alignControls","children","flex","justify","messages","responsive"]),E=(0,a.useContext)(o.ThemeContext)||i.l.theme,O=C.activeIndex,w=C.onActive,k=(0,a.useState)(C.activeIndex||0),P=k[0],T=k[1],j=(0,a.useState)(),S=j[0],A=j[1],I=(0,a.useState)(),z=I[0],F=I[1];P!==O&&void 0!==O&&T(O);delete C.activeIndex,delete C.onActive;var N=a.Children.map(r,(function(e,t){return a.createElement(c.R.Provider,{value:{activeIndex:P,active:P===t,onActivate:function(){return function(e){void 0===O&&T(e),w&&w(e)}(t)},setActiveContent:A,setActiveTitle:F}},e?a.cloneElement(e,{active:P===t}):e)})),_={};if(E.tabs.header&&E.tabs.header.border){var R=E.tabs.header.border.color||E.global.control.border.color;R=(0,p.ut)(R,E),_.border={side:E.tabs.header.border.side,size:E.tabs.header.border.size,style:E.tabs.header.border.style,color:R}}var D=(z||"")+" "+g.tabContents;return a.createElement(v,m({ref:t,as:l.x,role:"tablist",flex:u,responsive:x},C,{background:E.tabs.background}),a.createElement(s,m({as:l.x,direction:"row",justify:f,alignSelf:n,flex:!1,wrap:!0,background:E.tabs.header.background,gap:E.tabs.gap},_),N),a.createElement(b,{flex:u,"aria-label":D,role:"tabpanel"},S))}));h.displayName="Tabs";var g=h},8681:function(e,t,n){n.d(t,{R:function(){return r}});var r=n(7294).createContext({})},9268:function(e,t,n){n.d(t,{K:function(){return b}});var r=n(7294),a=n(5736),o=n(1085),i=n(3336),l=n(4192),c=n(9409),u=(0,i.css)(["outline:none;border:none;width:100%;-webkit-appearance:none;"]),s=i.default.textarea.withConfig({displayName:"StyledTextArea",componentId:"sc-17i3mwp-0"})([""," "," "," "," "," ",";"],l.hG,(function(e){return void 0!==e.resize&&("horizontal"===(t=e.resize)?"resize: horizontal;":"vertical"===t?"resize: vertical;":t?"resize: both;":"resize: none;");var t}),(function(e){return e.fillArg&&"height: 100%;"}),(function(e){return e.plain&&u}),(function(e){return e.disabled&&(0,l.Cv)(e.theme.textArea.disabled&&e.theme.textArea.disabled.opacity)}),(function(e){return e.theme.textArea&&e.theme.textArea.extend}));function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}s.defaultProps={},Object.setPrototypeOf(s.defaultProps,c.l);var f=(0,r.forwardRef)((function(e,t){var n=e.a11yTitle,i=e.fill,l=e.name,c=e.onBlur,u=e.onChange,f=e.onFocus,b=e.onKeyDown,v=e.value,p=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["a11yTitle","fill","name","onBlur","onChange","onFocus","onKeyDown","value"]),m=(0,r.useContext)(a.q).useFormInput(l,v),h=m[0],g=m[1],y=(0,r.useState)(),x=y[0],C=y[1];return r.createElement(o.N,{onEsc:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},onKeyDown:b},r.createElement(s,d({"aria-label":n,ref:t,name:l,fillArg:i,focus:x,value:h},p,{onFocus:function(e){C(!0),f&&f(e)},onBlur:function(e){C(!1),c&&c(e)},onChange:function(e){g(e.target.value),u&&u(e)}})))}));f.displayName="TextArea";var b=f},6386:function(e,t,n){var r=n(2137),a=n(7757),o=n.n(a),i=n(7294),l=n(6421),c=n(8263),u=n(7752),s=n(1930),d=n(8169),f=n(3277),b=n(6289),v=n(202),p=n(3551),m=n(6750),h=n(4278),g=n(5757);t.Z=function(e){var t=e.datasource,n=e.hideCRUDForm,a=e.suffix,y=void 0===a?"":a,x=e.objectClass,C=e.columns,E=e.fetchData,O=e.afterAction,w=(0,i.useState)({}),k=w[0],P=w[1],T=(0,i.useState)(!1),j=T[0],S=T[1],A=(0,i.useState)("read"),I=A[0],z=A[1],F=(0,i.useState)(t||[]),N=F[0],_=F[1],R=(0,i.useState)([]),D=R[0],M=R[1],K=(i.useContext(s.b),(0,i.useCallback)((0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=E,!e.t0){e.next=7;break}return e.t1=_,e.next=5,(0,h.rI)(E.action,E.params);case 5:e.t2=e.sent,e.t0=(0,e.t1)(e.t2);case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)}))),[E]));return(0,i.useEffect)((function(){t?_(t):K()}),[K,t]),(0,i.useEffect)((function(){var e=C.map((function(e){return{property:e.property,header:i.createElement(d.x,null," ",e.headerText),primary:e.primary,render:e.render}}));!n&&e.push({property:"objectId",header:i.createElement(f.e,{onClick:function(){P({}),z("create"),S(!0)}},"Add ",x),render:function(e){return i.createElement(i.Fragment,null,i.createElement(l.T,{onClick:function(){P(e),z("update"),S(!0)},style:{cursor:"pointer"}}),i.createElement(c.x,{onClick:function(){P(e),z("delete"),S(!0)},style:{cursor:"pointer"}}))}}),M(e)}),[n,C]),i.createElement(i.Fragment,null,i.createElement(b.x,null,N.length," ",x,i.createElement(v.w,{columns:D,data:N.map((function(e){return e.toJSON()}))})),j&&i.createElement(u.Z,{full:!0,onClose:function(){return S(!1)}},i.createElement(p.m,null,i.createElement(m.O,{title:"Information"},i.createElement(g.Z,{formConfig:{config:C},mode:I,model:k,onClick:function(e,t){(0,h.Sj)(x,t,e,y),setTimeout((function(){K(),S(!1),O&&O()}),1e3)}})))))}},504:function(e,t,n){n.r(t);var r=n(7294),a=(n(6386),n(8905)),o=n(6289),i=n(9268),l=n(1686),c=n(4278),u=n(2842);t.default=function(){var e=r.useContext(a.Z),t=(0,r.useState)({}),n=t[0],s=t[1];(0,r.useEffect)((function(){s(e&&e.config)}),[e]);return r.createElement(r.Fragment,null,e&&[{name:"Post Template",key:"templateConfig",description:"This is the template for your post. Set it up so it will be auto filled everytime you post to your social media"}].map((function(e,t){return r.createElement(o.x,{gap:"small",direction:"column"},e.name,e.description,r.createElement(i.K,{rows:"8",size:"xlarge",value:n&&n[e.key],onChange:function(t){var r;s(Object.assign({},n,((r={})[e.key]=t.target.value,r)))}}),r.createElement(l.z,{label:"Update",primary:!0,onClick:function(){var t;(0,c.rF)((t={},t[e.key]=n[e.key],t)).then((function(){return(0,u.f0)("/dashboard")}))}}))})))}}}]);
//# sourceMappingURL=component---src-pages-config-js-2dd6a2cdab08d92169b4.js.map