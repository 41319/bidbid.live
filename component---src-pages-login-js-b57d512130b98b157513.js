"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[875],{9756:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,{Z:function(){return n}})},7073:function(e,t,a){var n=a(9756),r=a(7294),l=a(1930),o=a(6289),c=["children"];t.Z=function(e){var t=e.children,a=(0,n.Z)(e,c),i=r.useContext(l.b);return a=Object.assign({margin:{left:"0",right:"0",top:"small",bottom:"0"},width:{max:["xxsmall","xsmall","small"].includes(i)?"100%":"80%"},gap:"small"},a),r.createElement(o.x,a,t)}},2432:function(e,t,a){var n=a(9756),r=a(7294),l=a(1686),o=a(7073),c=["onClick","disabled","message"];t.Z=function(e){var t=e.onClick,a=e.disabled,i=e.message,s=(0,n.Z)(e,c),u=(0,r.useState)(!1),m=u[0],f=u[1];return r.createElement(o.Z,null,r.createElement(l.z,Object.assign({},s,{primary:!0,onClick:function(){var e=t&&t();e&&e.then&&(f(!0),e.then((function(e){return f(!1)})))},disabled:a||m})),r.createElement(o.Z,{margin:"0",justify:"center"},i))}},8351:function(e,t,a){var n=a(7294),r=a(3966),l=a(4278),o=a(7073),c=a(2432);t.Z=function(){var e=(0,n.useState)({}),t=e[0],a=e[1],i=(0,n.useState)(""),s=i[0],u=i[1];return n.createElement(o.Z,{margin:"0"},"Name:",n.createElement(r.o,{value:t.fullname,onChange:function(e){a(Object.assign({},t,{fullName:e.target.value}))},placeholder:"Name"}),"Email:",n.createElement(r.o,{value:t.email,onChange:function(e){a(Object.assign({},t,{username:e.target.value,email:e.target.value}))},placeholder:"email"}),"Password:",n.createElement(r.o,{value:t.password,onChange:function(e){a(Object.assign({},t,{password:e.target.value}))},type:"password",placeholder:"Password"}),n.createElement(o.Z,{direction:"row"},n.createElement(c.Z,{label:"Create Account",primary:!0,message:s,onClick:function(){if(t.fullName&&t.email&&t.password){if(!(t.password.split("").length<8))return(0,l.o1)(t).then((function(e){u("Account Created. Please verify your email"),u(typeof e)})).catch((function(e){u(e.message)}));u("Password should be at least 8 characters")}}})))}},4041:function(e,t,a){var n=a(7294),r=a(3966),l=a(3277),o=a(2432),c=a(4278),i=a(2842),s=a(7073);t.Z=function(){var e=(0,n.useState)({}),t=e[0],a=e[1],u=(0,n.useState)(""),m=u[0],f=u[1];return n.createElement(s.Z,{margin:"0",direction:"column"},n.createElement(s.Z,null,"Email:",n.createElement(r.o,{value:t.email,onChange:function(e){a(Object.assign({},t,{username:e.target.value,email:e.target.value}))},placeholder:"email"})),n.createElement(s.Z,null,"Password:",n.createElement(r.o,{value:t.password,onChange:function(e){a(Object.assign({},t,{password:e.target.value}))},type:"password",placeholder:"password"})),n.createElement(s.Z,null,n.createElement(l.e,{href:"/reset"}," Reset Password ")),n.createElement(s.Z,{direction:"row"},n.createElement(o.Z,{message:m,label:"Login",primary:!0,onClick:function(){return t.email&&t.password?(0,c.Ib)(t.email,t.password).then((function(e){return(0,i.f0)("/")})).catch((function(e){return f(e.message)})):f("Please fill up username/password")}})))}},4124:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(6354),l=a(9638);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){return n.createElement(l.x,o({viewBox:"0 0 24 24",a11yTitle:"Facebook"},e),n.createElement("path",{fill:"#3B5998",fillRule:"evenodd",d:"M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"}))},i=a(2842),s=a(4041),u=a(8351),m=a(4278),f=a(7073),g=a(2432),d=function(){var e=(0,i.Wz)(),t=(0,n.useState)({}),a=(t[0],t[1],(0,n.useState)(""));a[0],a[1];return n.createElement(f.Z,{margin:"0"},n.createElement(r.X,{level:3}," Login"),n.createElement(s.Z,null),n.createElement(f.Z,{gap:"small",direction:"row",wrap:!0},n.createElement(g.Z,{onClick:function(){return(0,m.WD)((function(e){(0,i.f0)("/")}),"public_profile,email")},icon:n.createElement(c,null),label:"Login with Facebook",primary:!0}),e&&e.seller&&n.createElement(g.Z,{onClick:function(){return(0,m.WD)((function(e){(0,i.f0)("/")}),"public_profile,email,pages_show_list,pages_read_engagement,pages_manage_posts")},icon:n.createElement(c,null),label:"Login with Facebook as Seller",primary:!0})),n.createElement(r.X,{level:4},"Or Create An Account"),n.createElement(u.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-login-js-b57d512130b98b157513.js.map