"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{7704:function(e,t,n){n.r(t);var r=n(2137),a=n(7757),c=n.n(a),s=n(7294),i=(n(944),n(4278)),u=n(5796),o=n(6289);t.default=function(){var e=(0,s.useState)([]),t=e[0],n=e[1],a=(0,s.useState)([]),f=a[0],l=a[1],b=(0,s.useState)([]),m=(b[0],b[1]),p=(0,s.useState)("");p[0],p[1];return(0,s.useEffect)((function(){(function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.Cloud.run("getPrice",{symbol:"",exchange:"All"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then(n)}),[]),(0,s.useEffect)((function(){var e=t.length?t[0].data.map((function(e){return e.symbol})):[];m(e);var n=t.reduce((function(e,t){return t.data.forEach((function(n){var r,a;e[n.symbol]?e[n.symbol]=Object.assign({},e[n.symbol],((r={})[t.exchange]=n.price,r)):e[n.symbol]=((a={})[t.exchange]=n.price,a)})),e}),{}),r=Object.keys(n).map((function(e){return Object.assign({symbol:e},n[e])})).filter((function(e){return e.binance&&e.bitmart})).map((function(e){return Object.assign({},e,{difference:(t=e.binance,n=e.bitmart,t===n?0:t<n?(n-t)/t*100:(t-n)/n*100)});var t,n})).filter((function(e){return 0!==e.difference&&e.symbol.includes("USDT")})).sort(function(e,t){void 0===t&&(t="desc");var n="asc"===t?1:-1;return function(t,r){var a="string"==typeof t[e]?t[e].toUpperCase():t[e],c="string"==typeof r[e]?r[e].toUpperCase():r[e];return a<c?-1*n:a>c?1*n:0}}("difference"));l(r)}),[t]),s.createElement(s.Fragment,null,s.createElement("br",null),s.createElement(u.a,{data:f},(function(e){return s.createElement(o.x,{direction:"row"},s.createElement(o.x,{flex:{grow:1,shrink:1},basis:"0"},e.symbol),s.createElement(o.x,{flex:{grow:1,shrink:1},basis:"0"},e.bitmart),s.createElement(o.x,{flex:{grow:1,shrink:1},basis:"0"},e.binance),s.createElement(o.x,{flex:{grow:1,shrink:1},basis:"0"},e.difference))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-20df48f5e71343908285.js.map