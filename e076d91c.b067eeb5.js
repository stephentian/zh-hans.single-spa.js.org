(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),i=n(9),r=(n(0),n(302)),o={id:"ecosystem-riot",title:"single-spa-riot",sidebar_label:"Riot"},p=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Options",id:"options",children:[]}],c={rightToc:p},s="wrapper";function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(s,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"single-spa-riot\u662f\u4e00\u4e2a\u5e2e\u52a9\u5b9e\u73b0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa\u6ce8\u518c\u5e94\u7528"),Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"\u751f\u547d\u5468\u671f\u51fd\u6570"),"(\u5f15\u5bfc\u3001\u6302\u8f7d\u548c\u5378\u8f7d)\u7684\u5de5\u5177\u5e93\uff0c\u53ef\u4e0e",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://riot.js.org/"}),"riot"),"\u4e00\u8d77\u4f7f\u7528\u3002 \u4ed3\u5e93\u5730\u5740\u89c1",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ariesjia/single-spa-riot"}),"single-spa-riot github"),"\u3002"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/single-spa-riot"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/single-spa-riot.svg",alt:"NPM"})))),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://travis-ci.com/ariesjia/single-spa-riot"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://travis-ci.com/ariesjia/single-spa-riot.svg?branch=master",alt:"Build Status"})))),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://bundlephobia.com/result?p=single-spa-riot"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://badgen.net/bundlephobia/minzip/single-spa-riot",alt:"minified"})))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-riot\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as Riot from 'riot';\nimport singleSpaRiot from 'single-spa-riot';\nimport App from './App.riot'\n\nconst riotLifecycles = singleSpaRiot({\n  rootComponent: Riot.component(App),\n  domElementGetter: () => document.getElementById('#app')\n});\n\nexport const bootstrap = riotLifecycles.bootstrap;\n\nexport const mount = riotLifecycles.mount;\n\nexport const unmount = riotLifecycles.unmount;\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"\u5728\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"p"},"singleSpaRiot(opts)"),"\u65b9\u6cd5\u65f6\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"opts")," \u53c2\u6570\u4f1a\u5c06\u6240\u6709\u9009\u9879\u4f20\u9012\u7ed9single-spa-riot\u3002\u9009\u9879\u5982\u4e0b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (\u5fc5\u586b) \u56de\u8c03\u51fd\u6570\uff0c\u8fd4\u56de\u6839\u7ec4\u4ef6\u6302\u8f7d\u7684\u5143\u7d20\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rootComponent"),": (\u9009\u586b\uff0c\u5c06\u4f1a\u66ff\u6362 ",Object(r.b)("inlineCode",{parentName:"li"},"appOptions.loadRootComponent"),") riot\u6839\u7ec4\u4ef6\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"loadRootComponent"),": (\u9009\u586b\uff0c\u5c06\u4f1a\u66ff\u6362 ",Object(r.b)("inlineCode",{parentName:"li"},"appOptions.rootComponent"),") \u4e00\u4e2a\u8fd4\u56de\u6839\u5143\u7d20\u7684Promise\u5bf9\u8c61\uff0c\u5b83\u5bf9\u4e8e\u5b9e\u73b0\u61d2\u52a0\u8f7d\u5f88\u6709\u5e2e\u52a9\u3002")))}l.isMDXComponent=!0},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),l=o(n),b=a,m=l[p+"."+b]||l[b]||s[b]||r;return n?i.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):i.a.createElement(m,Object.assign({},{ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=l;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);