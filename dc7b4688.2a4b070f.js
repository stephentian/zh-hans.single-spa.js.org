(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{263:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return i}));var l=a(1),n=a(9),b=(a(0),a(302)),c={id:"separating-applications",title:"\u62c6\u5206\u5e94\u7528",sidebar_label:"\u62c6\u5206\u5e94\u7528"},s=[],r={rightToc:s},p="wrapper";function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)(p,Object(l.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u5728\u5927\u578b\u5fae\u670d\u52a1\u7cfb\u7edf\u4e2d\uff0c\u4f60\u7684single-spa\u57fa\u7840\u914d\u7f6e\u548c\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u90fd\u5e94\u8be5\u6709\u81ea\u5df1\u7684git\u4ed3\u5e93\u3002\u5982\u4f55\u5728JavaScript\u9879\u76ee\u4e2d\u5b9e\u73b0\u8fd9\u4e00\u70b9\u6682\u65e0\u5b9a\u8bba\uff0c\u56e0\u6b64\u4e0b\u9762\u5217\u51fa\u4e86\u4e00\u4e9b\u5efa\u8bae\u3002"),Object(b.b)("p",null,"\u7531\u4e8esingle-spa\u662f\u4e00\u4e2a\u6709\u52a9\u4e8e\u7ec4\u7ec7\u6269\u5c55\u7684\u6846\u67b6\uff0c\u56e0\u6b64\u4e86\u89e3\u5982\u4f55\u5c06\u5e94\u7528\u7a0b\u5e8f\u5f7c\u6b64\u5206\u79bb\u662f\u5f88\u91cd\u8981\u7684\uff0c\u8fd9\u6837\u5f00\u53d1\u4eba\u5458\u548c\u56e2\u961f\u5c31\u53ef\u4ee5\u5728\u4e0d\u76f8\u4e92\u5e72\u6270\u7684\u60c5\u51b5\u4e0b\u5f00\u53d1\u5b50\u5e94\u7528\u3002"),Object(b.b)("p",null,"\u5927\u591a\u6570\u7684\u5fae\u670d\u52a1\u4f53\u7cfb\u90fd\u9f13\u52b1\u72ec\u7acb\u7684\u4ee3\u7801\u4ed3\u5e93\u3001\u6784\u5efa\u548c\u90e8\u7f72\u3002\u867d\u7136 ",Object(b.b)("strong",{parentName:"p"},"single-spa\u4e0d\u80fd\u89e3\u51b3\u5982\u4f55\u6258\u7ba1\u3001\u6784\u5efa\u6216\u90e8\u7f72")," \u4ee3\u7801\u7684\u95ee\u9898\uff0c\u4f46\u662f\u8fd9\u4e9b\u95ee\u9898\u4e0e\u8bb8\u591asingle-spa\u7528\u6237\u76f8\u5173\uff0c\u56e0\u6b64\u8fd9\u91cc\u8ba8\u8bba\u4e86\u4e00\u4e9b\u7b56\u7565\u3002"),Object(b.b)("h4",{id:"\u9009\u62e9-1-\u4e00\u4e2a\u4ee3\u7801\u4ed3\u5e93-\u4e00\u4e2abuild\u5305"},"\u9009\u62e9 1: \u4e00\u4e2a\u4ee3\u7801\u4ed3\u5e93, \u4e00\u4e2abuild\u5305"),Object(b.b)("p",null,"\u4f7f\u7528single-spa\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u62e5\u6709\u4e00\u4e2a\u5305\u542b\u6240\u6709\u4ee3\u7801\u7684\u4ed3\u5e93\u3002\u901a\u5e38\uff0c\u60a8\u53ea\u6709\u4e00\u4e2apackage.json,\u4e00\u4e2a\u7684webpack\u914d\u7f6e\uff0c\u4ea7\u751f\u4e00\u4e2a\u5305\uff0c\u5b83\u5728\u4e00\u4e2ahtml\u6587\u4ef6\u4e2d\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"p"},"<script>"),"\u6807\u7b7e\u5f15\u7528\u3002"),Object(b.b)("p",null,"\u4f18\u52bf:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6700\u5bb9\u6613\u90e8\u7f72"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://danluu.com/monorepo/"}),"\u5355\u4e00\u7248\u672c\uff08monorepo\uff09\u63a7\u5236\u7684\u4f18\u70b9"))),Object(b.b)("p",null,"\u52a3\u52bf:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6bcf\u4e2a\u5355\u72ec\u7684\u9879\u76ee\u6765\u8bf4\uff0c\u4e00\u4e2aWebpack\u914d\u7f6e\u548cpackage.json\u610f\u5473\u7740\u7684\u7075\u6d3b\u6027\u548c\u81ea\u7531\u5ea6\u4e0d\u8db3\u3002"),Object(b.b)("li",{parentName:"ul"},"\u5f53\u4f60\u7684\u9879\u76ee\u8d8a\u6765\u8d8a\u5927\u65f6\uff0c\u6253\u5305\u901f\u5ea6\u8d8a\u6765\u8d8a\u6162\u3002"),Object(b.b)("li",{parentName:"ul"},"\u6784\u5efa\u548c\u90e8\u7f72\u90fd\u662f\u6346\u7ed1\u5728\u4e00\u8d77\u7684\uff0c\u8fd9\u8981\u6c42\u56fa\u5b9a\u7684\u53d1\u7248\u8ba1\u5212\uff0c\u800c\u4e0d\u80fd\u4e34\u65f6\u53d1\u5e03\u3002")),Object(b.b)("h4",{id:"\u9009\u62e9-2-npm\u5305"},"\u9009\u62e9 2: NPM\u5305"),Object(b.b)("p",null,"\u521b\u5efa\u4e00\u4e2a\u7236\u5e94\u7528\uff0cnpm\u5b89\u88c5\u6bcf\u4e2asingle-spa\u5e94\u7528\u3002\u6bcf\u4e2a\u5b50\u5e94\u7528\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u4ee3\u7801\u4ed3\u5e93\u4e2d\uff0c\u8d1f\u8d23\u6bcf\u6b21\u66f4\u65b0\u65f6\u53d1\u5e03\u4e00\u4e2a\u65b0\u7248\u672c\u3002\u5f53single-spa\u5e94\u7528\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u6839\u5e94\u7528\u7a0b\u5e8f\u5e94\u8be5\u91cd\u65b0\u5b89\u88c5\u3001\u91cd\u65b0\u6784\u5efa\u548c\u91cd\u65b0\u90e8\u7f72\u3002"),Object(b.b)("p",null,"\u901a\u5e38\uff0csingle-spa\u5e94\u7528\u5206\u522b\u4f7f\u7528babel\u6216\u8005webpack\u6765\u7f16\u8bd1\u3002"),Object(b.b)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528",Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"https://medium.com/netscape/thecase-for-monorepos-907c1361708a"}),"monorepo\u65b9\u6cd5"),"\uff0c\u8be5\u65b9\u6cd5\u5141\u8bb8\u5355\u72ec\u6784\u5efa\uff0c\u800c\u4e0d\u9700\u8981\u5355\u72ec\u7684\u4ee3\u7801\u4ed3\u5e93\u3002"),Object(b.b)("p",null,"\u4f18\u52bf:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"npm\u5b89\u88c5\u5bf9\u4e8e\u5f00\u53d1\u4e2d\u66f4\u719f\u6089\uff0c\u6613\u4e8e\u642d\u5efa\u3002"),Object(b.b)("li",{parentName:"ul"},"\u72ec\u7acb\u7684npm\u5305\u610f\u5473\u7740\uff0c\u6bcf\u4e2a\u5e94\u7528\u5728\u53d1\u5e03\u5230npm\u4ed3\u5e93\u4e4b\u524d\u53ef\u4ee5\u5206\u522b\u6253\u5305\u3002")),Object(b.b)("p",null,"\u52a3\u52bf:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u7236\u5e94\u7528\u5fc5\u987b\u91cd\u65b0\u5b89\u88c5\u5b50\u5e94\u7528\u6765\u91cd\u65b0\u6784\u5efa\u6216\u90e8\u7f72\u3002"),Object(b.b)("li",{parentName:"ul"},"\u4e2d\u7b49\u96be\u5ea6\u642d\u5efa\u3002")),Object(b.b)("h4",{id:"\u9009\u62e9-3-\u52a8\u6001\u52a0\u8f7d\u6a21\u5757"},"\u9009\u62e9 3: \u52a8\u6001\u52a0\u8f7d\u6a21\u5757"),Object(b.b)("p",null,"\u521b\u5efa\u4e00\u4e2a\u7236\u5e94\u7528\uff0c\u5141\u8bb8\u5b50\u5e94\u7528\u5355\u72ec\u90e8\u7f72\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u521b\u5efa\u4e00\u4e2amanifest\u6587\u4ef6\uff0c\u5f53\u5b50\u5e94\u7528\u90e8\u7f72\u66f4\u65b0\u65f6\uff0c\u5b83\u63a7\u5236\u5b50\u5e94\u7528\u7684\u201c\u4e0a\u7ebf\u201d\u7248\u672c\u53ca\u52a0\u8f7d\u7684JavaScript\u6587\u4ef6\u3002"),Object(b.b)("p",null,"\u6539\u53d8\u6bcf\u4e2a\u5b50\u5e94\u7528\u52a0\u8f7d\u7684JavaScript\u6587\u4ef6\u6709\u5f88\u591a\u7684\u65b9\u6cd5"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Web\u670d\u52a1\u5668\uff1a\u5728\u4f60\u7684web\u670d\u52a1\u5668\u4e3a\u6bcf\u4e2a\u5b50\u5e94\u7528\u7684\u6b63\u786e\u7248\u672c\u521b\u5efa\u4e00\u4e2a\u52a8\u6001\u811a\u672c\u3002"),Object(b.b)("li",{parentName:"ol"},"\u4f7f\u7528",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/"}),"\u6a21\u5757\u52a0\u8f7d")," \u4f8b\u5982 ",Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/systemjs/systemjs"}),"SystemJS")," \u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u901a\u8fc7\u52a8\u6001urls\u4e0b\u8f7d\u5e76\u6267\u884cJavaScript\u4ee3\u7801\u3002")),Object(b.b)("h4",{id:"\u5bf9\u6bd4"},"\u5bf9\u6bd4"),Object(b.b)("p",null,"<<<<<<< HEAD"),Object(b.b)("style",{dangerouslySetInnerHTML:{__html:"\n  .comparisonTable td {\n    width: 25%;\n  }\n  .comparisonTable .middle {\n    text-align: center;\n    vertical-align: middle;\n  }\n  .comparisonTable ul {\n    padding-left: 1em;\n  }\n"}}),Object(b.b)("table",{className:"comparisonTable"},Object(b.b)("caption",null,"\u524d\u7aef\u7cfb\u7edf\u67b6\u6784\u5bf9\u6bd4"),Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null),Object(b.b)("th",{scope:"col",className:"middle"},"Monorepo"),Object(b.b)("th",{scope:"col",className:"middle"},"NPM\u5305"),Object(b.b)("th",{scope:"col",className:"middle"},"\u52a8\u6001\u52a0\u8f7d\u6a21\u5757"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("th",{scope:"row"},"\u642d\u5efa\u96be\u5ea6"),Object(b.b)("td",{className:"middle"},"\u7b80\u5355"),Object(b.b)("td",{className:"middle"},"\u4e2d\u7b49"),Object(b.b)("td",{className:"middle"},"\u56f0\u96be")),Object(b.b)("tr",null,Object(b.b)("th",{scope:"row"},"\u4ee3\u7801\u662f\u5426\u72ec\u7acb"),Object(b.b)("td",{className:"middle"},Object(b.b)("span",{className:"sr-text"},"No")),Object(b.b)("td",{className:"middle"},Object(b.b)("span",{className:"sr-text"},"No")),Object(b.b)("td",{className:"middle"},Object(b.b)("span",{role:"img","aria-label":"Yes"},"\u2705"))),Object(b.b)("tr",null,Object(b.b)("th",{scope:"row"},"\u5206\u5f00\u6784\u5efa"),Object(b.b)("td",{className:"middle"},Object(b.b)("span",{className:"sr-text"},"No")),Object(b.b)("td",{className:"middle"},Object(b.b)("span",{role:"img","aria-label":"Yes"},"\u2705")),Object(b.b)("td",{className:"middle"},Object(b.b)("span",{role:"img","aria-label":"Yes"},"\u2705"))),Object(b.b)("tr",null,Object(b.b)("th",{scope:"row"},"\u5206\u522b\u90e8\u7f72"),Object(b.b)("td",{className:"middle"},Object(b.b)("span",{className:"sr-text"},"No")),Object(b.b)("td",{className:"middle"},Object(b.b)("span",{role:"img","aria-label":"Yes"},"\u2705")),Object(b.b)("td",{className:"middle"},Object(b.b)("span",{role:"img","aria-label":"Yes"},"\u2705"))),Object(b.b)("tr",null,Object(b.b)("th",null,"\u4f8b\u5b50"),Object(b.b)("td",null,Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("a",{href:"https://github.com/joeldenning/simple-single-spa-webpack-example"},"simple-webpack-example")),Object(b.b)("li",null,Object(b.b)("a",{href:"https://github.com/single-spa/single-spa-examples"},"single-spa-examples")))),Object(b.b)("td",null,Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("a",{href:"https://github.com/jualoppaz/single-spa-login-example-with-npm-packages"},"single-spa-login-example-with-npm-packages")))),Object(b.b)("td",null,Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("a",{href:"https://gitlab.com/TheMcMurder/single-spa-portal-example"},"SystemJS example"))))))),"======= |   | Separate code repositories possible | Independent CI builds | Separate deployments | Examples | | - | ----------------------------------- | --------------- | -------------------- | -------- | | Monorepo | :x: | :x: | :x: | \u2014 | | NPM Packages | :white_check_mark: | :white_check_mark: | :x: | [1](https://github.com/jualoppaz/single-spa-login-example-with-npm-packages) | | Module loading | :white_check_mark: | :white_check_mark: | :white_check_mark: | [1](https://github.com/react-microfrontends/) [2](https://github.com/vue-microfrontends/) [3](https://github.com/polyglot-microfrontends/) | >>>>>>> 23392092f75ac15539a5ecaeb00353737ef8ecaa")}i.isMDXComponent=!0},302:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o}));var l=a(0),n=a.n(l),b=n.a.createContext({}),c=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=c(e.components);return n.a.createElement(b.Provider,{value:t},e.children)};var r="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},i=Object(l.forwardRef)((function(e,t){var a=e.components,l=e.mdxType,b=e.originalType,s=e.parentName,r=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===t.indexOf(l)&&(a[l]=e[l]);return a}(e,["components","mdxType","originalType","parentName"]),i=c(a),o=l,m=i[s+"."+o]||i[o]||p[o]||b;return a?n.a.createElement(m,Object.assign({},{ref:t},r,{components:a})):n.a.createElement(m,Object.assign({},{ref:t},r))}));function o(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=a.length,c=new Array(b);c[0]=i;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[r]="string"==typeof e?e:l,c[1]=s;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"}}]);