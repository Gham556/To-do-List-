(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(81),r=n.n(o),c=n(645),a=n.n(c)()(r());a.push([e.id,"* {\n    margin: 0px;\n    padding: 0px;\n}\n\n.header {\n    height: 10vh;\n    background: #1d4ed8;\n    font-size: 3rem;\n}\n\n.main {\n    padding: 50px;\n}\n\n.gridHeadings {\n    display: grid;\n    grid-template-columns: repeat(5, 20%);\n}\n\n.gridItems {\n    display: grid;\n    grid-template-columns: repeat(5, 15%);\n    gap: 5%;\n}\n\ninput {\n    max-width: 100%;\n}\n.listGrid  > div {\n    display: grid;\n    grid-template-columns: repeat(5, 15%);\n    gap: 5%;\n}\n\n#projectName {\n    font-size: 32px;\n    font-weight: 700;\n    border: none;\n    max-width: 20%;\n}\n\n.projectTabs {\n    display: flex;\n    gap: 10px;\n}\n\n.projectTabs > * {\n    border: solid #000;\n}",""]);const l=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(a[i]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&a[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],l=0;l<e.length;l++){var i=e[l],d=o.base?i[0]+o.base:i[0],s=c[d]||0,u="".concat(d," ").concat(s);c[d]=s+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=l,t.splice(l,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var l=n(c[a]);t[l].references--}for(var i=o(e,r),d=0;d<c.length;d++){var s=n(c[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}c=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),c=n(569),a=n.n(c),l=n(565),i=n.n(l),d=n(216),s=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,document.querySelector("#fillRow");const v=document.querySelectorAll(".input"),g=null!==localStorage.getItem("project")?[localStorage.getItem("project")]:[],h=[],y=document.querySelector(".listGrid"),S=document.querySelector(".gridItems");let x=0;const C=function(e,t,n,o,r){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=r};document.querySelector("#fillRow"),document.querySelectorAll(".input");const E=document.querySelector(".listGrid"),I=document.querySelector(".gridItems");let j=0;document.querySelector("#saveList");const b=document.querySelector(".projectName"),q=(document.querySelector("#newProject"),document.querySelector("#deleteButton"),localStorage.getItem("allProjects")),w=null!==q?q.split(","):[],L=function(){localStorage.getItem("project");const e=this.textContent;localStorage.setItem("loading",e);const t=localStorage.getItem(e);console.log(e),localStorage.setItem("project",t),location.reload()},T=(document.createElement("p"),document.querySelectorAll(".input"),document.querySelector("#fillRow")),M=(document.querySelector("select"),document.querySelector("form"),document.querySelector("#saveList")),P=document.querySelector("#newProject"),k=localStorage.getItem("allProjects"),A=null!==k?k.split(","):[],N=(document.querySelector(".header"),document.querySelector(".projectTabs")),O=document.querySelector(".projectName");T.addEventListener("click",(function(){for(let e of v)g.push(e.value),h.push(e.value)})),T.addEventListener("click",(()=>{const e=new C(h[0],h[1],h[2],h[3],h[4]);x+=1;const t=document.createElement("div");t.classList.add(`${x}`),y.appendChild(t);const n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div");for(y.insertBefore(t,S),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(c),t.appendChild(a),n.textContent=e.title,o.textContent=e.description,r.textContent=e.dueDate,c.textContent=e.priority,a.textContent=e.notes;h.length>0;)h.pop();console.log("works"),localStorage.setItem("project",g)})),window.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("project"),t=null!==e?e.split(","):[];for(;t.length>0;){j+=1;const e=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div");E.insertBefore(e,I),e.classList.add(`${j}`),e.appendChild(n),e.appendChild(o),e.appendChild(r),e.appendChild(c),e.appendChild(a),n.textContent=t.splice(0,1),o.textContent=t.splice(0,1),r.textContent=t.splice(0,1),c.textContent=t.splice(0,1),a.textContent=t.splice(0,1)}})),window.addEventListener("DOMContentLoaded",(function(){O.value=localStorage.getItem("loading");for(let e of A)if(e!==O.value){const t=document.createElement("h2");t.textContent=e===O.value?document:e,N.appendChild(t),t.addEventListener("click",L)}})),M.addEventListener("click",(function(){const e=b.value,t=localStorage.getItem("project");localStorage.setItem(e,t)})),P.addEventListener("click",(function(){const e=b.value,t=localStorage.getItem("project");localStorage.setItem(e,t),console.log(e),!0===w.includes(b.value)?alert("nameExists"):w.push(b.value),localStorage.setItem("allProjects",w),localStorage.removeItem("project"),location.reload()}))})()})();