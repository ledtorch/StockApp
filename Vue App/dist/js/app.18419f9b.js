(function(e){function t(t){for(var n,i,a=t[0],u=t[1],s=t[2],l=0,d=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},c=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8ebb83ad"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=i(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",s.name="ChunkLoadError",s.type=n,s.request=c,o[1](s)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/app/stockapp/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=s;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"36b5":function(e,t,o){},"45c0":function(e,t,o){"use strict";var n=o("36b5"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),o("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),o("router-view")],1)},c=[],i=(o("5c0b"),o("2877")),a={},u=Object(i["a"])(a,r,c,!1,null,null,null),s=u.exports,l=o("9483");Object(l["a"])("".concat("/app/stockapp/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("d3b7");var p=o("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("PriceApp",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h3",[e._v("Stock App")]),o("div",{staticClass:"inputBox"},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{placeholder:" Stock Price"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}}),o("button",{on:{click:e.clear}},[e._v("Clear")])]),o("div",[o("p",[e._v("Now: "+e._s(e.calculatedNow))]),o("p",[e._v("Brand: "+e._s(e.calculatedBrand))]),o("p",[e._v("Future: "+e._s(e.calculatedFuture))]),o("br"),o("p",[e._v("Symbol: "+e._s(e.dataFromIEXcloud.symbol))]),o("p",[e._v("Close Price: "+e._s(e.dataFromIEXcloud.close))]),o("p",[e._v("Date: "+e._s(e.dataFromIEXcloud.latestTime))]),o("p",[e._v("API: "+e._s(e.dataFromIEXcloud.change+"%"))])])])])},m=[],h=(o("b680"),{name:"PriceApp",props:{},data:function(){return{price:0,dataFromIEXcloud:[]}},methods:{clear:function(){this.price="0"}},computed:{calculatedNow:function(){return(.89*this.price).toFixed(2)+" ・ "+(.84*this.price).toFixed(2)+" ・ "+(.79*this.price).toFixed(2)},calculatedBrand:function(){return(.84*this.price).toFixed(2)+" ・ "+(.79*this.price).toFixed(2)+" ・ "+(.74*this.price).toFixed(2)},calculatedFuture:function(){return(.74*this.price).toFixed(2)+" ・ "+(.69*this.price).toFixed(2)+" ・ "+(.64*this.price).toFixed(2)}},created:function(){var e=this,t="https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6";fetch(t,{method:"GET"}).then((function(t){t.json().then((function(t){e.dataFromIEXcloud=t,console.log(t.symbol),console.log("responsed")}))})).catch((function(e){console.log(e),console.log("error")}))}}),b=h,g=(o("45c0"),Object(i["a"])(b,v,m,!1,null,"6382327c",null)),_=g.exports,w={name:"Home",components:{PriceApp:_}},y=w,x=Object(i["a"])(y,d,f,!1,null,null,null),k=x.exports;n["a"].use(p["a"]);var F=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],j=new p["a"]({routes:F}),P=j,O=o("2f62");n["a"].use(O["a"]);var A=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:P,store:A,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("9c0c"),r=o.n(n);r.a},"9c0c":function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.18419f9b.js.map