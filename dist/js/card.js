!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){Nova.booting(function(e,t){e.component("nova-sendgrid-card",r(2))})},function(e,t,r){var n=r(8)(r(9),r(11),!1,function(e){r(3)},"data-v-0960f9a4",null);e.exports=n.exports},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(6)("2b6b8ad9",n,!0,{})},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".nova-sendgrid-card-title[data-v-0960f9a4]{color:#489be8}.nova-sendgrid-card-title .nova-sendgrid-card-title-logo[data-v-0960f9a4]{width:1.8rem;margin-right:.2rem;display:inline;vertical-align:middle}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(o).concat([i]).join("\n")}var a;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=r(7),o={},a=n&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,c=function(){},f=null,d="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var r=e[t],n=o[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(v(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(v(r.parts[i]));o[r.id]={id:r.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,r,n=document.querySelector("style["+d+'~="'+e.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(m){var i=l++;n=s||(s=h()),t=_.bind(null,n,i,!1),r=_.bind(null,n,i,!0)}else n=h(),t=function(e,t){var r=t.css,n=t.media,i=t.sourceMap;n&&e.setAttribute("media",n);f.ssrId&&e.setAttribute(d,t.id);i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,t,r,n){u=r,f=n||{};var a=i(e,t);return p(a),function(t){for(var r=[],n=0;n<a.length;n++){var s=a[n];(l=o[s.id]).refs--,r.push(l)}t?p(a=i(e,t)):a=[];for(n=0;n<r.length;n++){var l;if(0===(l=r[n]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete o[l.id]}}}};var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e,t){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=o[0],s={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}},function(e,t){e.exports=function(e,t,r,n,i,o){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var u,c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):n&&(u=n),u){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=u,c.render=function(e,t){return u.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:s,options:c}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10),i=r.n(n);t.default={props:["card"],data:function(){return{count:null}},mounted:function(){var e=this;Nova.request().get("/nova-vendor/nicolasbeauvais/nova-sendgrid-card/").then(function(t){var r=t.data;e.count=r.count})},computed:{formattedCount:function(){var e=i()(this.count);return e.value()>1e3?e.format("(0.00a)"):this.count}}}},function(e,t,r){var n,i;void 0===(i="function"==typeof(n=function(){var e,t,r,n,i,o={},a={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},l={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function u(e,t){this._input=e,this._value=t}return(e=function(r){var n,i,a,s;if(e.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"==typeof r)if(l.zeroFormat&&r===l.zeroFormat)n=0;else if(l.nullFormat&&r===l.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(i in o)if((s="function"==typeof o[i].regexps.unformat?o[i].regexps.unformat():o[i].regexps.unformat)&&r.match(s)){a=o[i].unformat;break}n=(a=a||e._.stringToNumber)(r)}else n=Number(r)||null;return new u(r,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof u},e._=t={numberToFormat:function(t,r,n){var i,o,s,l,u,c,f,d,m=a[e.options.currentLocale],p=!1,h=!1,v="",b="",g=!1;if(t=t||0,s=Math.abs(t),e._.includes(r,"(")?(p=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(c=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(o=!!(o=r.match(/a(k|m|b|t)?/))&&o[1],e._.includes(r," a")&&(v=" "),r=r.replace(new RegExp(v+"a[kmbt]?"),""),s>=1e12&&!o||"t"===o?(v+=m.abbreviations.trillion,t/=1e12):s<1e12&&s>=1e9&&!o||"b"===o?(v+=m.abbreviations.billion,t/=1e9):s<1e9&&s>=1e6&&!o||"m"===o?(v+=m.abbreviations.million,t/=1e6):(s<1e6&&s>=1e3&&!o||"k"===o)&&(v+=m.abbreviations.thousand,t/=1e3)),e._.includes(r,"[.]")&&(h=!0,r=r.replace("[.]",".")),l=t.toString().split(".")[0],u=r.split(".")[1],f=r.indexOf(","),i=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),b=e._.toFixed(t,u[0].length+u[1].length,n,u[1].length)):b=e._.toFixed(t,u.length,n),l=b.split(".")[0],b=e._.includes(b,".")?m.delimiters.decimal+b.split(".")[1]:"",h&&0===Number(b.slice(1))&&(b="")):l=e._.toFixed(t,0,n),v&&!o&&Number(l)>=1e3&&v!==m.abbreviations.trillion)switch(l=String(Number(l)/1e3),v){case m.abbreviations.thousand:v=m.abbreviations.million;break;case m.abbreviations.million:v=m.abbreviations.billion;break;case m.abbreviations.billion:v=m.abbreviations.trillion}if(e._.includes(l,"-")&&(l=l.slice(1),g=!0),l.length<i)for(var _=i-l.length;_>0;_--)l="0"+l;return f>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(l=""),d=l+b+(v||""),p?d=(p&&g?"(":"")+d+(p&&g?")":""):c>=0?d=0===c?(g?"-":"+")+d:d+(g?"-":"+"):g&&(d="-"+d),d},stringToNumber:function(e){var t,r,n,i=a[l.currentLocale],o=e,s={thousand:3,million:6,billion:9,trillion:12};if(l.zeroFormat&&e===l.zeroFormat)r=0;else if(l.nullFormat&&e===l.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,".")),s)if(n=new RegExp("[^a-zA-Z]"+i.abbreviations[t]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),o.match(n)){r*=Math.pow(10,s[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),i=n.length>>>0,o=0;if(3===arguments.length)r=arguments[2];else{for(;o<i&&!(o in n);)o++;if(o>=i)throw new TypeError("Reduce of empty array with no initial value");r=n[o++]}for(;o<i;o++)o in n&&(r=t(r,n[o],o,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(e,r){var n=t.multiplier(r);return e>n?e:n},1)},toFixed:function(e,t,r,n){var i,o,a,s,l=e.toString().split("."),u=t-(n||0);return i=2===l.length?Math.min(Math.max(l[1].length,u),t):u,a=Math.pow(10,i),s=(r(e+"e+"+i)/a).toFixed(i),n>t-i&&(o=new RegExp("\\.?0{1,"+(n-(t-i))+"}$"),s=s.replace(o,"")),s}},e.options=l,e.formats=o,e.locales=a,e.locale=function(e){return e&&(l.currentLocale=e.toLowerCase()),l.currentLocale},e.localeData=function(e){if(!e)return a[l.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in s)l[e]=s[e]},e.zeroFormat=function(e){l.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){l.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){l.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,i,o,a,s,l,u,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{u=e.localeData(r)}catch(t){u=e.localeData(e.locale())}return o=u.currency.symbol,s=u.abbreviations,n=u.delimiters.decimal,i="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,(null===(c=t.match(/^[^\d]+/))||(t=t.substr(1),c[0]===o))&&((null===(c=t.match(/[^\d]+$/))||(t=t.slice(0,-1),c[0]===s.thousand||c[0]===s.million||c[0]===s.billion||c[0]===s.trillion))&&(l=new RegExp(i+"{2}"),!t.match(/[^\d.,]/g)&&(!((a=t.split(n)).length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(l):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(l)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(l)&&!!a[1].match(/^\d+$/)))))},e.fn=u.prototype={clone:function(){return e(this)},format:function(t,r){var n,i,a,s=this._value,u=t||l.defaultFormat;if(r=r||Math.round,0===s&&null!==l.zeroFormat)i=l.zeroFormat;else if(null===s&&null!==l.nullFormat)i=l.nullFormat;else{for(n in o)if(u.match(o[n].regexps.format)){a=o[n].format;break}i=(a=a||e._.numberToFormat)(s,u,r)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],function(e,t,n,i){return e+Math.round(r*t)},0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],function(e,t,n,i){return e-Math.round(r*t)},Math.round(this._value*r))/r,this},multiply:function(e){return this._value=t.reduce([this._value,e],function(e,r,n,i){var o=t.correctionFactor(e,r);return Math.round(e*o)*Math.round(r*o)/Math.round(o*o)},1),this},divide:function(e){return this._value=t.reduce([this._value,e],function(e,r,n,i){var o=t.correctionFactor(e,r);return Math.round(e*o)/Math.round(r*o)}),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var i,o=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"BPS"),i=i.join("")):i=i+o+"BPS",i},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},i="("+(i=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter(function(e){return r.suffixes.indexOf(e)<0})).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(i)},format:function(t,i,o){var a,s,l,u=e._.includes(i,"ib")?n:r,c=e._.includes(i," b")||e._.includes(i," ib")?" ":"";for(i=i.replace(/\s?i?b/,""),a=0;a<=u.suffixes.length;a++)if(s=Math.pow(u.base,a),l=Math.pow(u.base,a+1),null===t||0===t||t>=s&&t<l){c+=u.suffixes[a],s>0&&(t/=s);break}return e._.numberToFormat(t,i,o)+c},unformat:function(t){var i,o,a=e._.stringToNumber(t);if(a){for(i=r.suffixes.length-1;i>=0;i--){if(e._.includes(t,r.suffixes[i])){o=Math.pow(r.base,i);break}if(e._.includes(t,n.suffixes[i])){o=Math.pow(n.base,i);break}}a*=o||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var i,o,a=e.locales[e.options.currentLocale],s={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),i=e._.numberToFormat(t,r,n),t>=0?(s.before=s.before.replace(/[\-\(]/,""),s.after=s.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(s.before,"-")&&!e._.includes(s.before,"(")&&(s.before="-"+s.before),o=0;o<s.before.length;o++)switch(s.before[o]){case"$":i=e._.insert(i,a.currency.symbol,o);break;case" ":i=e._.insert(i," ",o+a.currency.symbol.length-1)}for(o=s.after.length-1;o>=0;o--)switch(s.after[o]){case"$":i=o===s.after.length-1?i+a.currency.symbol:e._.insert(i,a.currency.symbol,-(s.after.length-(1+o)));break;case" ":i=o===s.after.length-1?i+" ":e._.insert(i," ",-(s.after.length-(1+o)+a.currency.symbol.length-1))}return i}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var i=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(i[0]),r,n)+"e"+i[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),i=Number(r[1]);return i=e._.includes(t,"e-")?i*=-1:i,e._.reduce([n,Math.pow(10,i)],function(t,r,n,i){var o=e._.correctionFactor(t,r);return t*o*(r*o)/(o*o)},1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var i=e.locales[e.options.currentLocale],o=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),o+=i.ordinal(t),e._.numberToFormat(t,r,n)+o}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var i,o=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"%"),i=i.join("")):i=i+o+"%",i},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),i=Math.floor((e-60*n*60)/60),o=Math.round(e-60*n*60-60*i);return n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e})?n.call(t,r,t,e):n)||(e.exports=i)},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card relative metric px-6 py-4 relative card-panel"},[r("div",{staticClass:"flex mb-4"},[r("h3",{staticClass:"text-lg font-bold nova-sendgrid-card-title"},[r("svg",{staticClass:"nova-sendgrid-card-title-logo",attrs:{viewBox:"0 0 185 173.7"}},[r("g",[r("rect",{staticClass:"st0",attrs:{id:"_x39_9E1F4",x:"71.2",y:"108.1",width:"42.4",height:"42.4"}}),e._v(" "),r("rect",{staticClass:"st0",attrs:{id:"_x39_9E1F4_1_",x:"28.8",y:"65.6",width:"42.4",height:"42.4"}}),e._v(" "),r("rect",{staticClass:"st1",attrs:{id:"_x30_09DD9",x:"71.2",y:"65.6",width:"42.4",height:"42.4"}}),e._v(" "),r("rect",{staticClass:"st2",attrs:{id:"_x30_0B3E3_1_",x:"71.2",y:"23.2",width:"42.4",height:"42.4"}}),e._v(" "),r("rect",{staticClass:"st3",attrs:{id:"_x31_a82e2",x:"28.8",y:"108.1",width:"42.4",height:"42.4"}}),e._v(" "),r("rect",{staticClass:"st2",attrs:{id:"_x30_0B3E3",x:"113.6",y:"65.6",width:"42.4",height:"42.4"}}),e._v(" "),r("rect",{staticClass:"st3",attrs:{id:"_x31_a82e2_1_",x:"113.6",y:"23.2",width:"42.4",height:"42.4"}})])]),e._v("\n      Sendgrid\n    ")])]),e._v(" "),r("p",{staticClass:"flex items-center text-4xl mb-4"},[e._v("\n    "+e._s(e.formattedCount)+"\n  ")]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex items-center"},[t("p",{staticClass:"text-80 font-bold"},[t("span",[this._v("Total recipients")])])])}]}}]);