(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{269:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var c=t(1),r=t(9),a=(t(0),t(308)),o={id:"ecosystem-cycle",title:"single-spa-cycle",sidebar_label:"Cycle"},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[]},{value:"\u9009\u9879",id:"\u9009\u9879",children:[]}],l={rightToc:i},p="wrapper";function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)(p,Object(c.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"single-spa-cycle\u662f\u4e00\u4e2a\u8f85\u52a9\u5e93\uff0c\u901a\u8fc7",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"https://cycle.js.org/"}),"Cycle.js"),"\u5e2e\u52a9\u5b9e\u73b0",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa\u6ce8\u518c\u5e94\u7528\u7a0b\u5e8f"),Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"\u751f\u547d\u5468\u671f\u51fd\u6570")," \uff08bootstrap, mount and unmount\uff09\u3002\u67e5\u770b",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/pcmnac/single-spa-cycle"}),"single-spa-cycle github"),"\u3002"),Object(a.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save @pcmnac/single-spa-cycle\n")),Object(a.b)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),Object(a.b)("p",null,"\u5728\u60a8\u9879\u76ee\u4e2d\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u547d\u4ee4\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{className:"language-js"}),"\nimport {run} from '@cycle/run'\nimport {makeDOMDriver} from '@cycle/dom'\nimport singleSpaCycle from '@pcmnac/single-spa-cycle';\nimport rootComponent from './root.component.js';\n\nconst cycleLifecycles = singleSpaCycle({\n  run,\n  rootComponent,\n  drivers: { DOM: makeDOMDriver(document.getElementById('main-content'))}, // or { DOM: makeDOMDriver('#main-content')}\n});\n\nexport const bootstrap = cycleLifecycles.bootstrap;\nexport const mount = cycleLifecycles.mount;\nexport const unmount = cycleLifecycles.unmount;\n")),Object(a.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(a.b)("p",null,"\u8c03\u7528single-spa-cycle\u65f6\uff0c\u6240\u6709\u9009\u9879\u53ef\u4ee5\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"p"},"opts"),"\u53c2\u6570\u4f20\u9012\u7ed9",Object(a.b)("inlineCode",{parentName:"p"},"singleSpaCycle"),"\u3002\u4ee5\u4e0b\u9009\u9879\u53ef\u7528\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"run"),": (\u5fc5\u987b) Cycle.js\u542f\u52a8\u51fd\u6570\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"drivers"),": (\u5fc5\u987b) Cycle.js\u6839\u7ec4\u4ef6\u4f7f\u7528\u9a71\u52a8\u7a0b\u5e8f\uff08\u5305\u62ecDOM\u9a71\u52a8\u7a0b\u5e8f\uff09\u3002"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rootComponent"),": (\u5fc5\u987b) Cycle.js\u6700\u4e0a\u5c42\u7ec4\u4ef6\u4f1a\u88ab\u6e32\u67d3\u3002")))}s.isMDXComponent=!0},308:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return b}));var c=t(0),r=t.n(c),a=r.a.createContext({}),o=function(e){var n=r.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=o(e.components);return r.a.createElement(a.Provider,{value:n},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(c.forwardRef)((function(e,n){var t=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,l=function(e,n){var t={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&-1===n.indexOf(c)&&(t[c]=e[c]);return t}(e,["components","mdxType","originalType","parentName"]),s=o(t),b=c,m=s[i+"."+b]||s[b]||p[b]||a;return t?r.a.createElement(m,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(m,Object.assign({},{ref:n},l))}));function b(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var a=t.length,o=new Array(a);o[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[l]="string"==typeof e?e:c,o[1]=i;for(var b=2;b<a;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);