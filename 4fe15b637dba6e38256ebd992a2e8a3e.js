!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){var r=n(1),o=n(1),i=n(5);i.default&&(i=i.default);var a=n(28);a.default&&(a=a.default),o.render(r.createElement(i,{sections:[{title:"Get-Started",url:"get-started",pages:[{title:"Installation",url:"get-started/installation"},{title:"Running",url:"get-started/running"},{title:"Project Overview",url:"get-started/overview"}]},{title:"Guides",url:"guides",pages:[{title:"asdf",url:"guides/asdf"}]},{title:"Developing",url:"developing",pages:[{title:"developing/01_Adding_a_Route",url:"developing/01_Adding_a_Route"}]},{title:"Deployment",url:"deployment",pages:[]},{title:"Examples",url:"examples",pages:[{title:"Heroku Deploy",url:"examples/Heroku_Deployment"},{title:"IIS",url:"examples/IIS"}]},{title:"Generators",url:"generators",pages:[{title:"App",url:"generators/app"},{title:"Route",url:"generators/route"},{title:"Service",url:"generators/service"},{title:"Component",url:"generators/component"},{title:"Controller",url:"generators/controller"},{title:"Decorator",url:"generators/decorator"},{title:"Directive",url:"generators/directive"},{title:"Endpoint",url:"generators/endpoint"},{title:"Filter",url:"generators/filter"},{title:"Heroku",url:"generators/heroku"},{title:"Openshift",url:"generators/openshift"}]},{title:"Other",url:"/",pages:[]}],pageUrl:"/"}),document.getElementById("components/navigation/navigation.jsx")),o.render(r.createElement(a,{sections:[{title:"Get-Started",url:"get-started",pages:[{title:"Installation",url:"get-started/installation"},{title:"Running",url:"get-started/running"},{title:"Project Overview",url:"get-started/overview"}]},{title:"Guides",url:"guides",pages:[{title:"asdf",url:"guides/asdf"}]},{title:"Developing",url:"developing",pages:[{title:"developing/01_Adding_a_Route",url:"developing/01_Adding_a_Route"}]},{title:"Deployment",url:"deployment",pages:[]},{title:"Examples",url:"examples",pages:[{title:"Heroku Deploy",url:"examples/Heroku_Deployment"},{title:"IIS",url:"examples/IIS"}]},{title:"Generators",url:"generators",pages:[{title:"App",url:"generators/app"},{title:"Route",url:"generators/route"},{title:"Service",url:"generators/service"},{title:"Component",url:"generators/component"},{title:"Controller",url:"generators/controller"},{title:"Decorator",url:"generators/decorator"},{title:"Directive",url:"generators/directive"},{title:"Endpoint",url:"generators/endpoint"},{title:"Filter",url:"generators/filter"},{title:"Heroku",url:"generators/heroku"},{title:"Openshift",url:"generators/openshift"}]},{title:"Other",url:"/",pages:[]}]}),document.getElementById("components/sidebar-mobile/sidebar-mobile.jsx"))},function(e,t,n){(function(t){!function(t,r){e.exports=r(n(3),n(4))}(this,function(e,n){function r(e){var t=e.nodeName,n=e.attributes;e.attributes={},t.defaultProps&&_(e.attributes,t.defaultProps),n&&_(e.attributes,n),n=e.attributes,e.children&&!e.children.length&&(e.children=void 0),e.children&&(n.children=e.children)}function o(e,t){var n,r,o;if(t){for(o in t)if(n=W.test(o))break;if(n){r=e.attributes={};for(o in t)t.hasOwnProperty(o)&&(r[W.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}}function i(e,t,r){var o=t&&t._preactCompatRendered;o&&o.parentNode!==t&&(o=null),o||(o=t.children[0]);for(var i=t.childNodes.length;i--;)t.childNodes[i]!==o&&t.removeChild(t.childNodes[i]);var a=n.render(e,t,o);return t&&(t._preactCompatRendered=a),"function"==typeof r&&r(),a&&a._component||a.base}function a(e,t,r,o){var a=n.h(F,{context:e.context},t),l=i(a,r);return o&&o(l),l}function l(e){var t=e._preactCompatRendered;return!(!t||t.parentNode!==e)&&(n.render(n.h($),e,t),!0)}function u(e){return d.bind(null,e)}function c(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?c(r):r&&"object"==typeof r&&!m(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=d(r.type||r.nodeName,r.props||r.attributes,r.children))}}function s(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function f(e){return N({displayName:e.displayName||e.name,render:function(t,n,r){return e(t,r)}})}function p(e){var t=e[Q];return t?t===!0?e:t:(t=f(e),Object.defineProperty(t,Q,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,Q,{configurable:!0,value:t}),t)}function d(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return c(e,2),h(n.h.apply(void 0,e))}function h(e){e.preactCompatNormalized=!0,b(e),s(e.nodeName)&&(e.nodeName=p(e.nodeName));var t=e.attributes.ref,n=t&&typeof t;return!X||"string"!==n&&"number"!==n||(e.attributes.ref=y(t,X)),g(e),e}function v(e,t){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];if(!m(e))return e;var i=e.attributes||e.props,a=n.h(e.nodeName||e.type,i,e.children||i&&i.children);return h(n.cloneElement.apply(void 0,[a,t].concat(r)))}function m(e){return e&&(e instanceof z||e.$$typeof===L)}function y(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function g(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onchange){t=t.toLowerCase();var i="input"===t&&/^che|rad/i.test(n.type)?"onclick":"oninput",a=r[i]||i;n[a]||(n[a]=O([n[r[i]],n[r.onchange]]),delete n[r.onchange])}}}function b(e){var t=e.attributes;if(t){var n=t.className||t.class;n&&(t.className=n)}}function _(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function x(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function w(){}function N(e){function t(e,t){C(this),M.call(this,e,t,G),P.call(this,e,t)}return e=_({constructor:t},e),e.mixins&&E(e,k(e.mixins)),e.statics&&_(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),w.prototype=M.prototype,t.prototype=_(new w,e),t.displayName=e.displayName||"Component",t}function k(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function E(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=e[n]?t[n].concat(e[n]):t[n];"getDefaultProps"===n||"getInitialState"===n||"getChildContext"===n?e[n]=O(r,j):e[n]=O(r)}}function C(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||B.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function S(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function O(e,t){return function(){for(var n,r=arguments,o=this,i=0;i<e.length;i++){var a=S(o,e[i],r);t?n=t(n,a):"undefined"!=typeof a&&(n=a)}return n}}function j(e,t){if(null!=t){if("object"!=typeof t)throw new Error("Expected return value to be an object or null.");e||(e={});for(var n in t)if(t.hasOwnProperty(n)){if(e.hasOwnProperty(n))throw new Error('Duplicate key "'+n+'" found when merging return value.');e[n]=t[n]}}return e}function P(e,t){T.call(this,e,t),this.componentWillReceiveProps=O([T,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=O([T,A,this.render||"render",D])}function T(e,t){var n=this;if(e){var r=e.children;if(r&&Array.isArray(r)&&1===r.length&&(e.children=r[0],e.children&&"object"==typeof e.children&&(e.children.length=1,e.children[0]=e.children)),V){var o="function"==typeof this?this:this.constructor,i=this.propTypes||o.propTypes;if(i)for(var a in i)if(i.hasOwnProperty(a)&&"function"==typeof i[a]){var l=n.displayName||o.name,u=i[a](e,a,l,"prop");u&&console.error(new Error(u.message||u))}}}}function A(e){X=this}function D(){X===this&&(X=null)}function M(e,t,r){n.Component.call(this,e,t),this.getInitialState&&(this.state=this.getInitialState()),this.refs={},this._refProxies={},r!==G&&P.call(this,e,t)}function I(e,t){M.call(this,e,t)}e="default"in e?e.default:e;var R="15.1.0",U="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),L="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,B={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},W=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/,G={},V="undefined"==typeof t||!t.env||"production"!==t.env.NODE_ENV,$=function(){return null},z=n.h("").constructor;z.prototype.$$typeof=L,z.prototype.preactCompatUpgraded=!1,z.prototype.preactCompatNormalized=!1,Object.defineProperty(z.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(z.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var H=n.options.event;n.options.event=function(e){return e.persist=Object,H&&(e=H(e)),e};var q=n.options.vnode;n.options.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,n=e.attributes;n||(n=e.attributes={}),"function"==typeof t?(t[Q]===!0||t.prototype&&"isReactComponent"in t.prototype)&&(e.preactCompatNormalized||h(e),r(e)):n&&("string"==typeof e.nodeName&&n.defaultValue&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),o(e,n))}q&&q(e)};var F=function(){};F.prototype.getChildContext=function(){return this.props.context},F.prototype.render=function(e){return e.children[0]};for(var X,Y=[],Z={map:function(e,t,n){return null==e?null:(e=Z.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t))},forEach:function(e,t,n){return null==e?null:(e=Z.toArray(e),n&&n!==e&&(t=t.bind(n)),void e.forEach(t))},count:function(e){return e&&e.length||0},only:function(e){if(e=Z.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return Array.isArray&&Array.isArray(e)?e:Y.concat(e)}},J={},K=U.length;K--;)J[U[K]]=u(U[K]);var Q="undefined"!=typeof Symbol?Symbol.for("__preactCompatWrapper"):"__preactCompatWrapper",ee=function(e){return e&&e.base||e};M.prototype=new n.Component,_(M.prototype,{constructor:M,isReactComponent:{},replaceState:function(e,t){var n=this;this.setState(e,t);for(var r in this.state)r in e||delete n.state[r]},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),I.prototype=new M({},{},G),I.prototype.shouldComponentUpdate=function(e,t){return x(this.props,e)||x(this.state,t)};var te={version:R,DOM:J,PropTypes:e,Children:Z,render:i,createClass:N,createFactory:u,createElement:d,cloneElement:v,isValidElement:m,findDOMNode:ee,unmountComponentAtNode:l,Component:M,PureComponent:I,unstable_renderSubtreeIntoContainer:a};return te})}).call(t,n(2))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){v&&d&&(v=!1,d.length?h=d.concat(h):m=-1,h.length&&l())}function l(){if(!v){var e=o(a);v=!0;for(var t=h.length;t;){for(d=h,h=[];++m<t;)d&&d[m].run();m=-1,t=h.length}d=null,v=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,f,p=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],v=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||v||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){var r,o,i;!function(n,a){o=[t,e],r=a,i="function"==typeof r?r.apply(t,o):r,!(void 0!==i&&(e.exports=i))}(this,function(e,t){"use strict";function n(e){var t=e&&(w&&e[w]||e[N]);if("function"==typeof t)return t}function r(e){function t(t,n,r,o,i,a){if(o=o||k,a=a||r,null==n[r]){var l=_[i];return t?new Error("Required "+l+" `"+a+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i,a)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o,i){var a=t[n],l=v(a);if(l!==e){var u=_[o],c=m(a);return new Error("Invalid "+u+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return r(t)}function i(){return r(x.thatReturns(null))}function a(e){function t(t,n,r,o,i){var a=t[n];if(!Array.isArray(a)){var l=_[o],u=v(a);return new Error("Invalid "+l+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var c=0;c<a.length;c++){var s=e(a,c,r,o,i+"["+c+"]");if(s instanceof Error)return s}return null}return r(t)}function l(){function e(e,t,n,r,o){if(!b.isValidElement(e[t])){var i=_[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a single ReactElement."))}return null}return r(e)}function u(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=_[o],l=e.name||k,u=y(t[n]);return new Error("Invalid "+a+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("instance of `"+l+"`."))}return null}return r(t)}function c(e){function t(t,n,r,o,i){for(var a=t[n],l=0;l<e.length;l++)if(a===e[l])return null;var u=_[o],c=JSON.stringify(e);return new Error("Invalid "+u+" `"+i+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+c+"."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOf, expected an instance of array.")})}function s(e){function t(t,n,r,o,i){var a=t[n],l=v(a);if("object"!==l){var u=_[o];return new Error("Invalid "+u+" `"+i+"` of type "+("`"+l+"` supplied to `"+r+"`, expected an object."))}for(var c in a)if(a.hasOwnProperty(c)){var s=e(a,c,r,o,i+"."+c);if(s instanceof Error)return s}return null}return r(t)}function f(e){function t(t,n,r,o,i){for(var a=0;a<e.length;a++){var l=e[a];if(null==l(t,n,r,o,i))return null}var u=_[o];return new Error("Invalid "+u+" `"+i+"` supplied to "+("`"+r+"`."))}return r(Array.isArray(e)?t:function(){return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")})}function p(){function e(e,t,n,r,o){if(!h(e[t])){var i=_[r];return new Error("Invalid "+i+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function d(e){function t(t,n,r,o,i){var a=t[n],l=v(a);if("object"!==l){var u=_[o];return new Error("Invalid "+u+" `"+i+"` of type `"+l+"` "+("supplied to `"+r+"`, expected `object`."))}for(var c in e){var s=e[c];if(s){var f=s(a,c,r,o,i+"."+c);if(f)return f}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||b.isValidElement(e))return!0;var t=n(e);if(!t)return!1;var r,o=t.call(e);if(t!==e.entries){for(;!(r=o.next()).done;)if(!h(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function y(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var g="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,b={};b.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===g};var _={prop:"prop",context:"context",childContext:"child context"},x={thatReturns:function(e){return function(){return e}}},w="function"==typeof Symbol&&Symbol.iterator,N="@@iterator",k="<<anonymous>>",E={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:l(),instanceOf:u,node:p(),objectOf:s,oneOf:c,oneOfType:f,shape:d};t.exports=E})},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var r,o,i,a,l=[];for(a=arguments.length;a-- >2;)W.push(arguments[a]);for(n&&n.children&&(W.length||W.push(n.children),delete n.children);W.length;)if((o=W.pop())instanceof Array)for(a=o.length;a--;)W.push(o[a]);else null!=o&&o!==!1&&("number"!=typeof o&&o!==!0||(o=String(o)),i="string"==typeof o,i&&r?l[l.length-1]+=o:(l.push(o),r=i));var u=new t(e,n||void 0,l);return B.vnode&&B.vnode(u),u}function r(e,t){if(t)for(var n in t)e[n]=t[n];return e}function o(e){return r({},e)}function i(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function a(e){return"function"==typeof e}function l(e){return"string"==typeof e}function u(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function c(e,t){return n(e.nodeName,r(o(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e,t,n){var r=t.split(".");return function(t){for(var o=t&&t.target||this,a={},u=a,c=l(n)?i(t,n):o.nodeName?o.type.match(/^che|rad/)?o.checked:o.value:t,s=0;s<r.length-1;s++)u=u[r[s]]||(u[r[s]]=!s&&e.state[r[s]]||{});u[r[s]]=c,e.setState(a)}}function f(e){!e._dirty&&(e._dirty=!0)&&1==Y.push(e)&&(B.debounceRendering||z)(p)}function p(){var e,t=Y;for(Y=[];e=t.pop();)e._dirty&&M(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(y(e),t||H)}function v(e,t){return l(t)?e instanceof Text:l(t.nodeName)?m(e,t.nodeName):a(t.nodeName)?e._componentConstructor===t.nodeName||d(t):void 0}function m(e,t){return e.normalizedNodeName===t||V(e.nodeName)===V(t)}function y(e){var t=o(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function g(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n,r,o){if("className"===t&&(t="class"),"class"===t&&r&&"object"==typeof r&&(r=u(r)),"key"===t);else if("class"!==t||o)if("style"===t){if((!r||l(r)||l(n))&&(e.style.cssText=r||""),r&&"object"==typeof r){if(!l(n))for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"!=typeof r[i]||F[i]?r[i]:r[i]+"px"}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html);else if("o"==t[0]&&"n"==t[1]){var c=e._listeners||(e._listeners={});t=V(t.substring(2)),r?c[t]||e.addEventListener(t,x,!!X[t]):c[t]&&e.removeEventListener(t,x,!!X[t]),c[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)_(e,t,null==r?"":r),null!=r&&r!==!1||e.removeAttribute(t);else{var s=o&&t.match(/^xlink\:?(.+)/);null==r||r===!1?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",V(s[1])):e.removeAttribute(t):"object"==typeof r||a(r)||(s?e.setAttributeNS("http://www.w3.org/1999/xlink",V(s[1]),r):e.setAttribute(t,r))}else e.className=r||""}function _(e,t,n){try{e[t]=n}catch(e){}}function x(e){return this._listeners[e.type](B.event&&B.event(e)||e)}function w(e){if(g(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||V(e.nodeName);(Z[t]||(Z[t]=[])).push(e)}}function N(e,t){var n=V(e),r=Z[n]&&Z[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function k(){for(var e;e=J.pop();)B.afterMount&&B.afterMount(e),e.componentDidMount&&e.componentDidMount()}function E(e,t,n,r,o,i){K++||(Q=o instanceof SVGElement);var a=C(e,t,n,r);return o&&a.parentNode!==o&&o.appendChild(a),--K||i||k(),a}function C(e,t,n,r){for(var o=t&&t.attributes;d(t);)t=h(t,n);if(null==t&&(t=""),l(t)){if(e){if(e instanceof Text&&e.parentNode)return e.nodeValue!=t&&(e.nodeValue=t),e;j(e)}return document.createTextNode(t)}if(a(t.nodeName))return I(e,t,n,r);var i=e,u=t.nodeName,c=Q,s=t.children;if(l(u)||(u=String(u)),Q="svg"===u||"foreignObject"!==u&&Q,e){if(!m(e,u)){for(i=N(u,Q);e.firstChild;)i.appendChild(e.firstChild);j(e)}}else i=N(u,Q);s&&1===s.length&&"string"==typeof s[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue!=s[0]&&(i.firstChild.nodeValue=s[0]):(s&&s.length||i.firstChild)&&S(i,s,n,r);var f=i[q];if(!f){i[q]=f={};for(var p=i.attributes,v=p.length;v--;)f[p[v].name]=p[v].value}return P(i,t.attributes,f),o&&"function"==typeof o.ref&&(f.ref=o.ref)(i),Q=c,i}function S(e,t,n,r){var o,i,l,u,c=e.childNodes,s=[],f={},p=0,d=0,h=c.length,m=0,y=t&&t.length;if(h)for(var g=0;g<h;g++){var b=c[g],_=y?(i=b._component)?i.__key:(i=b[q])?i.key:null:null;_||0===_?(p++,f[_]=b):s[m++]=b}if(y)for(var g=0;g<y;g++){l=t[g],u=null;var _=l.key;if(null!=_)p&&_ in f&&(u=f[_],f[_]=void 0,p--);else if(!u&&d<m){for(o=d;o<m;o++)if(i=s[o],i&&v(i,l)){u=i,s[o]=void 0,o===m-1&&m--,o===d&&d++;break}!u&&d<m&&a(l.nodeName)&&r&&(u=s[d],s[d++]=void 0)}u=C(u,l,n,r),u&&u!==e&&u!==c[g]&&e.insertBefore(u,c[g]||null)}if(p)for(var g in f)f[g]&&j(f[g]);d<m&&O(s)}function O(e,t){for(var n=e.length;n--;)e[n]&&j(e[n],t)}function j(e,t){var n=e._component;n?R(n,!t):(e[q]&&e[q].ref&&e[q].ref(null),t||w(e),e.childNodes&&e.childNodes.length&&O(e.childNodes,t))}function P(e,t,n){for(var r in n)t&&r in t||null==n[r]||b(e,r,n[r],n[r]=void 0,Q);if(t)for(var o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||b(e,o,n[o],n[o]=t[o],Q)}function T(e){var t=e.constructor.name,n=ee[t];n?n.push(e):ee[t]=[e]}function A(e,t,n){var r=new e(t,n),o=ee[e.name];if(U.call(r,t,n),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function D(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&B.syncComponentUpdates===!1&&e.base?f(e):M(e,1,o)),e.__ref&&e.__ref(e))}function M(e,t,n,i){if(!e._disable){var l,u,c,s,f=e.props,p=e.state,v=e.context,m=e.prevProps||f,g=e.prevState||p,b=e.prevContext||v,_=e.base,x=e.nextBase,w=_||x,N=e._component;if(_&&(e.props=m,e.state=g,e.context=b,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,v)===!1?l=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,v),e.props=f,e.state=p,e.context=v),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!l){for(e.render&&(u=e.render(f,p,v)),e.getChildContext&&(v=r(o(v),e.getChildContext()));d(u);)u=h(u,v);var C,S,O=u&&u.nodeName;if(a(O)){c=N;var P=y(u);c&&c.constructor===O?D(c,P,1,v):(C=c,c=A(O,P,v),c.nextBase=c.nextBase||x,c._parentComponent=e,e._component=c,D(c,P,0,v),M(c,1,n,!0)),S=c.base}else s=w,C=N,C&&(s=e._component=null),(w||1===t)&&(s&&(s._component=null),S=E(s,u,v,n||!_,w&&w.parentNode,!0));if(w&&S!==w&&c!==N){var T=w.parentNode;T&&S!==T&&(T.replaceChild(S,w),C||(w._component=null,j(w)))}if(C&&R(C,S!==w),e.base=S,S&&!i){for(var I=e,U=e;U=U._parentComponent;)(I=U).base=S;S._component=I,S._componentConstructor=I.constructor}}!_||n?J.unshift(e):l||(e.componentDidUpdate&&e.componentDidUpdate(m,g,b),B.afterUpdate&&B.afterUpdate(e));var L,W=e._renderCallbacks;if(W)for(;L=W.pop();)L.call(e);K||i||k()}}function I(e,t,n,r){for(var o=e&&e._component,i=e,a=o&&e._componentConstructor===t.nodeName,l=a,u=y(t);o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;return o&&l&&(!r||o._component)?(D(o,u,3,n,r),e=o.base):(o&&!a&&(R(o,!0),e=i=null),o=A(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e,i=null),D(o,u,1,n,r),e=o.base,i&&e!==i&&(i._component=null,j(i))),e}function R(e,t){B.beforeUnmount&&B.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?R(r,t):n&&(n[q]&&n[q].ref&&n[q].ref(null),e.nextBase=n,t&&(g(n),T(e)),O(n.childNodes,!t)),e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function U(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function L(e,t,n){return E(n,e,{},!1,t)}var B={},W=[],G={},V=function(e){return G[e]||(G[e]=e.toLowerCase())},$="undefined"!=typeof Promise&&Promise.resolve(),z=$?function(e){$.then(e)}:setTimeout,H={},q="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",F={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},X={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Y=[],Z={},J=[],K=0,Q=!1,ee={};r(U.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=s(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){M(this,2)},render:function(){}}),e.h=n,e.cloneElement=c,e.Component=U,e.render=L,e.rerender=p,e.options=B})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(6),f=r(s),p=n(25),d=r(p),h=n(26),v=r(h),m=[{title:"Getting Started",url:"get-started"},{title:"Guides",url:"guides",children:[{title:"Getting Started",url:"get-started"},{title:"Developing",url:"developing"},{title:"Deployment",url:"deployment"},{title:"Examples",url:"examples"}]},{title:"Generators",url:"generators"},{title:"Donate",url:"https://opencollective.com/angular-fullstack"}],y=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this;this.props.pageUrl;return c.default.createElement("header",{className:"navigation"},c.default.createElement(d.default,{className:"navigation__inner"},c.default.createElement("div",{className:"navigation__mobile",onClick:this._toggleSidebar},c.default.createElement("i",{className:"icon-menu"})),c.default.createElement(f.default,{className:"navigation__logo",to:"/"},c.default.createElement(v.default,{light:!0}),c.default.createElement("span",{className:"logo-text"},"Angular Full-Stack")),c.default.createElement("nav",{className:"navigation__links"},m.map(function(t){var n=e._isActive(t),r=n?"navigation__link--active":"";return c.default.createElement(f.default,{key:"navigation__link-"+t.title,className:"navigation__link "+r,to:"/"+t.url},t.title)})),c.default.createElement("div",{className:"navigation__search"},c.default.createElement("input",{type:"text",className:"navigation__search-input",placeholder:"Search documentation…",onBlur:this._toggleSearch.bind(this)}),c.default.createElement("button",{className:"navigation__search-icon icon-magnifying-glass",onClick:this._toggleSearch.bind(this)}),c.default.createElement("button",{className:"navigation__search-icon icon-cross",onClick:this._toggleSearch.bind(this)}))),m.filter(function(t){return e._isActive(t)&&t.children}).map(function(t){return c.default.createElement("div",{className:"navigation__bottom",key:t.title},c.default.createElement(d.default,{className:"navigation__inner"},t.children.map(function(t){var n=e._isActive(t)?"navigation__child--active":"";return c.default.createElement(f.default,{key:"navigation__child-"+t.title,className:"navigation__child "+n,to:"/"+t.url},t.title)})))}))}},{key:"componentDidMount",value:function(){var e=this;"undefined"!=typeof window&&(window.docsearch({apiKey:"fac401d1a5f68bc41f01fb6261661490",indexName:"webpack-js-org",inputSelector:".navigation__search-input"}),window.addEventListener("keyup",function(t){9===t.which&&t.target.classList.contains("navigation__search-input")&&e._openSearch()}))}},{key:"_isActive",value:function(e){var t=this.props.pageUrl,n=void 0===t?"":t;return e.children?e.children.some(function(e){return n.includes(e.url+"/")}):n.includes(e.url+"/")}},{key:"_toggleSidebar",value:function(e){var t=document.querySelector(".sidebar-mobile"),n="sidebar-mobile--visible";t.classList.toggle(n)}},{key:"_toggleSearch",value:function(){var e=document.querySelector(".navigation"),t=document.querySelector(".navigation__search-input"),n=e.classList.toggle("navigation--search-mode");n===!0&&t.focus()}},{key:"_openSearch",value:function(){var e=document.querySelector(".navigation");e.classList.add("navigation--search-mode")}}]),t}(c.default.Component);t.default=y},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),l=r(a),u=n(7),c=r(u),s=function(e){var t=e.to,n=o(e,["to"]);return(0,c.default)(t,"http")||(0,c.default)(t,"//")?l.default.createElement("a",i({href:t,target:"_blank"},n)):l.default.createElement("a",i({href:t},n))};t.default=s},function(e,t,n){function r(e,t,n){return e=l(e),n=null==n?0:o(a(n),0,e.length),t=i(t),e.slice(n,n+t.length)==t}var o=n(8),i=n(9),a=n(20),l=n(24);e.exports=r},function(e,t){function n(e,t,n){return e===e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}e.exports=n},function(e,t,n){function r(e){
if("string"==typeof e)return e;if(a(e))return i(e,r)+"";if(l(e))return s?s.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}var o=n(10),i=n(13),a=n(14),l=n(15),u=1/0,c=o?o.prototype:void 0,s=c?c.toString:void 0;e.exports=r},function(e,t,n){var r=n(11),o=r.Symbol;e.exports=o},function(e,t,n){var r=n(12),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){return"symbol"==typeof e||i(e)&&o(e)==a}var o=n(16),i=n(19),a="[object Symbol]";e.exports=r},function(e,t,n){function r(e){return null==e?void 0===e?u:l:c&&c in Object(e)?i(e):a(e)}var o=n(10),i=n(17),a=n(18),l="[object Null]",u="[object Undefined]",c=o?o.toStringTag:void 0;e.exports=r},function(e,t,n){function r(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=l.call(e);return r&&(t?e[u]=n:delete e[u]),o}var o=n(10),i=Object.prototype,a=i.hasOwnProperty,l=i.toString,u=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){function r(e){var t=o(e),n=t%1;return t===t?n?t-n:t:0}var o=n(21);e.exports=r},function(e,t,n){function r(e){if(!e)return 0===e?e:0;if(e=o(e),e===i||e===-i){var t=e<0?-1:1;return t*a}return e===e?e:0}var o=n(22),i=1/0,a=1.7976931348623157e308;e.exports=r},function(e,t,n){function r(e){if("number"==typeof e)return e;if(i(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=c.test(e);return n||s.test(e)?f(e.slice(2),n?2:8):u.test(e)?a:+e}var o=n(23),i=n(15),a=NaN,l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;e.exports=r},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){function r(e){return null==e?"":o(e)}var o=n(9);e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.className,n=void 0===t?"":t;return i.default.createElement("div",{className:"container "+n},e.children)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(27),l=r(a);t.default=function(){return i.default.createElement("img",{className:"logo",src:l.default})}},function(e,t,n){e.exports=n.p+"44c8aeaa24cb28d0a5c6a45de449fd7d.svg"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),s=n(6),f=r(s),p={},d={},h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleBodyClick=n._handleBodyClick.bind(n),n}return a(t,e),l(t,[{key:"render",value:function(){var e=this;return c.default.createElement("nav",{className:"sidebar-mobile",ref:function(t){return e.container=t},onTouchStart:this._handleTouchStart.bind(this),onTouchMove:this._handleTouchMove.bind(this),onTouchEnd:this._handleTouchEnd.bind(this)},c.default.createElement("div",{className:"sidebar-mobile__toggle",onTouchStart:this._handleTouchStart.bind(this),onTouchMove:this._handleOpenerTouchMove.bind(this),onTouchEnd:this._handleTouchEnd.bind(this)}),c.default.createElement("div",{className:"sidebar-mobile__content"},c.default.createElement("i",{className:"sidebar-mobile__close icon-cross",onClick:this._close.bind(this)}),this._getSections()))}},{key:"componentDidMount",value:function(){"undefined"!=typeof window&&(window.addEventListener("click",this._handleBodyClick),window.addEventListener("touchstart",this._handleBodyClick))}},{key:"componentWillUnmount",value:function(){"undefined"!=typeof window&&(window.removeEventListener("click",this._handleBodyClick),window.removeEventListener("touchstart",this._handleBodyClick))}},{key:"_getSections",value:function(){var e=this,t="";return"undefined"!=typeof window&&(t=window.location.pathname),this.props.sections.map(function(n){var r=t===n.url||t.includes("/"+n.url),o="/"+n.url;return c.default.createElement("div",{className:"sidebar-mobile__section "+(r?"sidebar-mobile__section--active":""),key:o},c.default.createElement(f.default,{className:"sidebar-mobile__section-header",key:o,to:o,onClick:e._close.bind(e)},c.default.createElement("h3",null,n.title)),e._getPages(n.pages))})}},{key:"_getPages",value:function(e){var t=this,n="";return"undefined"!=typeof window&&(n=window.location.pathname),e.map(function(e){var r="/"+e.url,o=n===r||n.includes(r+"/");return c.default.createElement(f.default,{key:r,className:"sidebar-mobile__page "+(o?"sidebar-mobile__page--active":""),to:r,onClick:t._close.bind(t)},e.title)})}},{key:"_handleBodyClick",value:function(e){e.target.classList.contains("icon-menu")||this.container.contains(e.target)||this._close()}},{key:"_close",value:function(){this.container.classList.remove("sidebar-mobile--visible")}},{key:"_open",value:function(){this.container.classList.add("sidebar-mobile--visible")}},{key:"_handleTouchStart",value:function(e){p.x=e.touches[0].pageX,p.y=e.touches[0].pageY,this.container.classList.add("no-delay")}},{key:"_handleTouchMove",value:function(e){var t=p.x-e.touches[0].pageX,n=p.y-e.touches[0].pageY,r=Math.abs(n/t);t>0&&r<.8&&(e.preventDefault(),this.container.style.transform="translateX(-"+t+"px)",d.x=e.touches[0].pageX,d.y=e.touches[0].pageY)}},{key:"_handleOpenerTouchMove",value:function(e){var t=e.touches[0].pageX-p.x,n=p.y-e.touches[0].pageY,r=Math.abs(n/t);t>0&&t<295&&r<.8&&(e.preventDefault(),this.container.style.transform="translateX(calc(-100% + "+t+"px))",d.x=e.touches[0].pageX,d.y=e.touches[0].pageY)}},{key:"_handleTouchEnd",value:function(e){this.container.classList.remove("no-delay"),this.container.style.transform="",p.x-d.x>100?this._close():d.x-p.x>100&&this._open()}}]),t}(c.default.Component);t.default=h}])});