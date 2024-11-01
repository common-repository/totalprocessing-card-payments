(()=>{"use strict";const t=window.React,e=window.wp.i18n,r=window.wc.wcBlocksRegistry,n=window.wp.htmlEntities;function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:S(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",y="executing",m="completed",v={};function g(){}function w(){}function b(){}var _={};f(_,u,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(I([])));x&&x!==r&&n.call(x,u)&&(_=x);var L=b.prototype=g.prototype=Object.create(_);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function r(i,a,c,u){var l=h(t[i],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,r,n){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?m:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(o(e)+" is not iterable")}return w.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},j(R.prototype),f(R.prototype,l,(function(){return this})),e.AsyncIterator=R,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new R(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),f(L,s,"Generator"),f(L,u,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=(0,window.wc.wcSettings.getSetting)("wc_tp_cardsv3_data",{}),l=(0,e.__)("Total Processing Card Payments & Gateway for WooCommerce","totalprocessing-card-payments-and-gateway-woocommerce"),s=(0,n.decodeEntities)(u.title)||l,f=function(){var t;return Object.entries(null!==(t=u.icons)&&void 0!==t?t:{}).map((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];return{id:o,src:i.src,alt:i.alt}}))},p=function(){return null==u.uuid?(Promise.resolve(jQuery.ajax({type:"post",dataType:"json",url:woocommerce_params.ajax_url,data:{action:"tpcpv3_requestOrderCheckoutId"}})).then((function(t){!0===t.success&&(jQuery("#tpcpv3_iframe_container").empty().html('<div class="dot-bricks"></div>'),jQuery("#tpcpv3_checkout_id").val(t.data.uuid),console.log("set the uuid to: "+t.data.uuid),jQuery("#tpcpv3_iframe_container").html('<iframe id="tpcpv3_cnpFrame" name="myCustomIframe" src="'+t.data.frameurl+"?v="+Date.now()+'" style="width: 100%; height:80px; border: none;"></iframe>'))})).catch((function(t){console.log(t)})),React.createElement("div",{id:"tpcpv3_cnpForm inline"},React.createElement("input",{id:"tpcpv3_checkout_id",type:"hidden",name:"tpcpv3_checkout_id",value:""}),React.createElement("div",{id:"tpcpv3_inline-loading"},React.createElement("div",{className:"dot-bricks"})),React.createElement("div",{id:"tpcpv3_iframe_container"}))):(console.log("pre:"+u.uuid),React.createElement("div",{id:"tpcpv3_cnpForm"},React.createElement("input",{id:"tpcpv3_checkout_id",type:"hidden",name:"tpcpv3_checkout_id",value:u.uuid}),React.createElement("div",{id:"tpcpv3_inline-loading"},React.createElement("div",{className:"dot-bricks"})),React.createElement("div",{id:"tpcpv3_iframe_container",style:{display:"none"}},React.createElement("iframe",{id:"tpcpv3_cnpFrame",name:"myCustomIframe",src:u.frameurl,style:{width:"100%",height:"80px",border:"none"}}))))},h=function(e){var r=e.eventRegistration,n=e.emitResponse,o=(e.onSubmit,r.onCheckoutSuccess);return r.onPaymentSetup,(0,t.useEffect)((function(){var t=o(function(){var t,e=(t=i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),wc_gateway_tp.finalOrderPaymentProcess(e),t.abrupt("return",!0);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))});return function(_x){return e.apply(this,arguments)}}());return function(){t()}}),[n.responseTypes.ERROR,n.responseTypes.SUCCESS,o]),React.createElement(p,null)},d=function(t){var e=t.components,r=e.PaymentMethodLabel,n=e.PaymentMethodIcons;return React.createElement("span",null,React.createElement(r,{text:s}),React.createElement(n,{icons:f(),align:"left"}))},y={name:"wc_tp_cardsv3",label:React.createElement(d,null),content:React.createElement(h,null),edit:React.createElement(h,null),canMakePayment:function(){return!0},ariaLabel:s,supports:{features:u.supports}};(0,r.registerPaymentMethod)(y)})();