"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{7704:function(e,t,n){n.r(t);var r=n(2137),a=n(7757),c=n.n(a),s=n(7294),u=(n(944),n(4278)),i=n(6289),o=n(5796),l=function(e){var t=e.data,n=e.propkey;return s.createElement(i.x,null,n,": ",t[n])};t.default=function(){var e=(0,s.useState)([]),t=e[0],n=e[1],a=(0,s.useState)([]),f=a[0],m=a[1],b=(0,s.useState)([]),p=(b[0],b[1]),d=(0,s.useState)("");d[0],d[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.Cloud.run("getPrice",{symbol:"",exchange:"All"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setInterval((function(){e().then(n)}),5e3)}),[]),(0,s.useEffect)((function(){var e=t.length?t[0].data.map((function(e){return e.symbol})):[];p(e);var n=t.reduce((function(e,t){return t.data.filter((function(e){return e.symbol.includes("usdt")})).forEach((function(n){var r,a;e[n.symbol]?e[n.symbol]=Object.assign({},e[n.symbol],((r={})[t.exchange]=n.price,r)):e[n.symbol]=((a={})[t.exchange]=n.price,a)})),e}),{}),r=Object.keys(n).map((function(e){return Object.assign({symbol:e},n[e])})).filter((function(e){return e.binance&&e.bitmart})).map((function(e){return Object.assign({},e,{difference:(t=e.binance,n=e.bitmart,t===n?0:t<n?(n-t)/t*100:(t-n)/n*100)});var t,n})).filter((function(e){return 0!==e.difference&&e.symbol.includes("usdt")})).sort(function(e,t){void 0===t&&(t="desc");var n="asc"===t?1:-1;return function(t,r){var a="string"==typeof t[e]?t[e].toUpperCase():t[e],c="string"==typeof r[e]?r[e].toUpperCase():r[e];return a<c?-1*n:a>c?1*n:0}}("difference"));m(r)}),[t]),s.createElement(s.Fragment,null,s.createElement(o.a,{data:f},(function(e,t){return s.createElement(s.Fragment,null,s.createElement(i.x,{direction:"row"},s.createElement(i.x,{flex:{grow:1,shrink:1},basis:"0"},e.symbol),s.createElement(i.x,{flex:{grow:1,shrink:1},basis:"0"},s.createElement(l,{data:e,propkey:"bitmart"}),s.createElement(l,{data:e,propkey:"binance"}),s.createElement(l,{data:e,propkey:"huobi"})),s.createElement(i.x,{flex:{grow:1,shrink:1},basis:"0"}),s.createElement(i.x,{flex:{grow:1,shrink:1},basis:"0"},e.difference)))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b8099bc1a8adc240499a.js.map