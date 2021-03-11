!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.stacksEditor=t():e.stacksEditor=t()}(self,(function(){return(()=>{"use strict";var e,t,n={},r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e](t,t.exports,i),t.exports}i.m=n,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>e+".bundle.js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="stacksEditor:",i.l=(n,r,a,o)=>{if(e[n])e[n].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={143:0};i.f.j=(t,n)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,i)=>{r=e[t]=[n,i]}));n.push(r[2]=a);var o=i.p+i.u(t),s=new Error;i.l(o,(n=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{for(var r,a,[o,s,l]=n,c=0,d=[];c<o.length;c++)a=o[c],i.o(e,a)&&e[a]&&d.push(e[a][0]),e[a]=0;for(r in s)i.o(s,r)&&(i.m[r]=s[r]);for(l&&l(i),t&&t(n);d.length;)d.shift()()},n=self.webpackChunkstacksEditor=self.webpackChunkstacksEditor||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a={};i.r(a),i.d(a,{ExampleLinkPreviewProvider:()=>d});var o=function(){function e(t){this.dom=document.createElement("div"),this.dom.classList.add("ws-normal","ow-normal");var n=t.attrs.data;this.state=e.getSnippetArgs(n),this.dom.innerHTML='\n<div class="s-link-preview" data-language="'+this.state.language+'"\n     data-hide="'+this.state.hide.toString()+'"\n     data-console="'+this.state.console.toString()+'"\n     data-babel="'+this.state.babel.toString()+'">\n    <div class="s-link-preview--header ai-center py4">\n        <div class="s-link-preview--title fs-body1 fl1">Code snippet</div>\n        <div>\n            <button class="s-btn s-btn__muted fc-success s-btn__icon s-btn__xs grid--cell js-not-implemented" title="Run code snippet">\n                <span class="icon-bg iconPlay"></span>\n            </button>\n            <button class="s-btn s-btn__muted s-btn__icon s-btn__xs grid--cell js-not-implemented" title="Expand snippet">\n                <span class="icon-bg iconShare"></span>\n            </button>\n        </div>\n    </div>\n    <div id="content-dom"></div>\n</div>\n        ',this.contentDOM=this.dom.querySelector("#content-dom"),this.dom.querySelectorAll(".js-not-implemented").forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),alert("Sorry, this doesn't work yet :)")}))}))}return e.prototype.stopEvent=function(){return!0},e.getSnippetArgs=function(e){var t=/(.+?) hide: (true|false) console: (true|false) babel: (true|false)/.exec(e);return{language:t[1]||"js",hide:"true"===t[2],console:"true"===t[3],babel:"true"===t[4]}},e}();function s(e,t,n,r){var i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(60!==e.src.charCodeAt(i)||i+2>=a)return!1;if(33!==e.src.charCodeAt(i+1))return!1;var o=e.src.slice(i,a),s=/^<!-- begin snippet: (.+?) -->/.exec(o);if(!(null==s?void 0:s.length))return!1;if(r)return!0;var l=e.lineMax,c=e.parentType;e.parentType="stack_snippet";for(var d=t+1,u=/<!-- end snippet -->/,p=d;d<n;){for(;d<n;d++)if(i=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],(o=e.src.slice(i,a)).length&&(p=d),u.test(o)){o.length&&d++;break}d++}e.lineMax=p;var f=e.push("stack_snippet_open","",1);return f.map=[t,0],f.attrSet("data",s[1]),e.md.block.tokenize(e,t+1,p),f.map[1]=n,f=e.push("stack_snippet_close","",-1),e.line=n+1,e.lineMax=l,e.parentType=c,!0}var l,c={markdownParser:{tokens:{stack_snippet:{block:"stack_snippet",getAttrs:function(e){return{content:e.content,data:e.attrGet("data")}}}},plugins:[function(e){e.block.ruler.before("html_block","stack_snippets",s)}]},markdownSerializers:{stack_snippet:function(e,t){e.renderContent(t),e.ensureNewLine()}},menuEntries:[],nodeViews:{stack_snippet:function(e){return new o(e)}},plugins:[],schema:{nodes:{stack_snippet:{content:"code_block*",attrs:{content:{default:""},data:{default:""}},marks:"",group:"block",inline:!1,selectable:!0,isolating:!0}}}},d={domainTest:/^https?:\/\/(www\.)?(example\.com)|(example\.org)/i,renderer:function(e){var t=null;if(e.includes("example.com")){var n=(new Date).toString();t='\n            <div class="s-link-preview js-onebox">\n                <div class="s-link-preview--header">\n                    <div>\n                        <a href="'+e+'" target="_blank" class="s-link-preview--title">Example link preview</a>\n                        <div class="s-link-preview--details">Not really a real link preview, but it acts like one!</div>\n                    </div>\n                </div>\n                <div class="s-link-preview--body">\n                    <strong>This is a link preview, yo.</strong><br><br>We can run arbitrary JS in here, so here\'s the current date:<br><em>'+n+"</em>\n                </div>\n            </div>"}return(5e3,new Promise((function(e){setTimeout((function(){return e()}),Math.max(5e3,2e3))}))).then((function(){var e=document.createElement("div");return e.innerHTML=t,e}))}};return l=function(){var e,t;null===(e=document.querySelector("#js-toggle-dark"))||void 0===e||e.addEventListener("change",(function(e){e.preventDefault(),e.stopPropagation(),document.body.classList.toggle("theme-dark")})),null===(t=document.querySelector("#js-toggle-readonly"))||void 0===t||t.addEventListener("change",(function(e){e.preventDefault(),e.stopPropagation();var t=window.editorInstance;t.readonly?t.enable():t.disable()}));var n=document.querySelector("#content-div"),r=document.querySelector("#content"),a=n.classList.contains("js-tables-enabled");n.classList.contains("js-images-disabled"),Promise.all([i.e(869),i.e(624),i.e(662)]).then(i.bind(i,2662)).then((function(e){var t=new(0,e.StacksEditor)(n,r.value,{defaultView:+localStorage.getItem("defaultEditor")||0,editorHelpLink:"#TODO",commonmarkOptions:{},parserFeatures:{tables:a,tagLinks:{allowNonAscii:!1,allowMetaTags:!0,renderer:function(e,t){return{link:"#"+e,linkTitle:"Show questions tagged '"+e+"'",additionalClasses:t?["s-tag__muted"]:[]}}}},richTextOptions:{linkPreviewProviders:[d]},externalPlugins:[c]});window.editorInstance=t})),n.addEventListener("StacksEditor:view-change",(function(e){var t;t=e.detail.editorType,localStorage.setItem("defaultEditor",t.toString())}))},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",l):l(),a})()}));