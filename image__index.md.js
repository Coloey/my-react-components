(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"8IMo":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=n("Zxc8"),o=n("dMo/"),u=l.a.memo((e=>{var t=e.demos,n=t["image-basic"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"image-\u56fe\u7247"},l.a.createElement(r["AnchorLink"],{to:"#image-\u56fe\u7247","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Image \u56fe\u7247"),l.a.createElement("p",null,"\u53ef\u9884\u89c8\u7684\u56fe\u7247"),l.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("p",null,"1.\u9700\u8981\u5c55\u793a\u56fe\u7247\u65f6\u4f7f\u7528"),l.a.createElement("p",null,"2.\u52a0\u8f7d\u5927\u56fe\u65f6\u663e\u793a loading \u6216\u52a0\u8f7d\u5931\u8d25\u65f6\u5bb9\u9519\u5904\u7406"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),l.a.createElement(c["default"],t["image-basic"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"src"),l.a.createElement("td",null,"\u56fe\u7247\u5730\u5740"),l.a.createElement("td",null,"string/string[]"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"preview"),l.a.createElement("td",null,"\u9884\u89c8\u53c2\u6570,\u4e3a false \u65f6\u7981\u7528"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"false")),l.a.createElement("tr",null,l.a.createElement("td",null,"loader"),l.a.createElement("td",null,"\u52a0\u8f7d\u8fc7\u7a0b\u5360\u4f4d"),l.a.createElement("td",null,"ReactNode/string"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"unloader"),l.a.createElement("td",null,"\u52a0\u8f7d\u5931\u8d25\u5360\u4f4d"),l.a.createElement("td",null,"ReactNode/string"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"loadImg"),l.a.createElement("td",null,"\u56fe\u7247\u52a0\u8f7d\u65b9\u6cd5\uff0c\u8fd4\u56de\u4e00\u4e2a Promise"),l.a.createElement("td",null,"(src:string) => Promise"),l.a.createElement("td",null,"imgPromise")),l.a.createElement("tr",null,l.a.createElement("td",null,"width"),l.a.createElement("td",null,"\u56fe\u7247\u5bbd\u5ea6"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"height"),l.a.createElement("td",null,"\u56fe\u7247\u9ad8\u5ea6"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:n})}},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},WpQk:function(e,t,n){},"dMo/":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("hKI/"),c=n.n(r);n("WpQk");function o(e,t){return s(e)||d(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){o=!0,l=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=o(r,2),i=u[0],m=u[1],d=Object(a["useState"])(!1),s=o(d,2),E=s[0],f=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E}}]);