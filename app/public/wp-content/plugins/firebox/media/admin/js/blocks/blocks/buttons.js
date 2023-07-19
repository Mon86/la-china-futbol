/*! For license information please see buttons.js.LICENSE.txt */
(()=>{var e={814:(e,t,r)=>{var n;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var c=i.apply(null,r);c&&e.push(c)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):"object"===o(r.amdO)&&r.amdO?void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n):window.classNames=i}()},428:(e,t,r)=>{"use strict";var n=r(134);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},526:(e,t,r)=>{e.exports=r(428)()},134:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},927:(e,t,r)=>{var n;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=o(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var c=i.apply(null,r);c&&e.push(c)}}else if("object"===n)if(r.toString===Object.prototype.toString)for(var l in r)a.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):"object"===o(r.amdO)&&r.amdO?void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n):window.classNames=i}()},688:(e,t,r)=>{"use strict";var n=r(44);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},624:(e,t,r)=>{e.exports=r(688)()},44:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.amdO={},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const e=window.wp.i18n,t=window.wp.blocks;var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.desktop,r=void 0===t?"":t,n=e.tablet,o=void 0===n?"":n,a=e.mobile,i=void 0===a?"":a;return{desktop:r,tablet:o,mobile:i}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.desktopDefault,r=void 0===t?{top:"",right:"",bottom:"",left:""}:t,n=e.tabletDefault,o=void 0===n?{top:"",right:"",bottom:"",left:""}:n,a=e.mobileDefault,i=void 0===a?{top:"",right:"",bottom:"",left:""}:a,c=e.linked,l=void 0===c||c;return{desktop:r,tablet:o,mobile:i,linked:l}},i=r(526),c=r.n(i);const l=window.wp.compose;var u=r(814),s=r.n(u);const p=window.wp.blockEditor,f=window.wp.data,b=function(e){return"block-".concat(e)},m=window.wp.element;var d=[];var v,y=function(e){return!!e&&Object.values(e).some((function(e){return null!=e&&""!==e}))};function g(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E="desktop",j="tablet",_="mobile",R=(x(v={},E,""),x(v,j,991),x(v,_,575),v),S=function(e){if(!e)return"";var t=e.match(/[^{\}]+(?=})/gi)[0];return{selector:e.replace(t,"").replace("{","").replace("}","").trim(),style:t.trim()}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return[];var t=e.reduce((function(e,t){var r=S(t),n=e.find((function(e){return e.selector===r.selector}));return n?(n.styles.push(r.style),e):(e.push({selector:r.selector,styles:[r.style]}),e)}),[]);return t.map((function(e){return"".concat(e.selector," { ").concat(e.styles.join(" ")," }")}))},C=function(e){return k(k({},e),{},{rules:P(e.rules)})},B=function(t){var r=t.id,n=t.value,o=t.rule,a=t.unit,i=void 0===a?"":a,c=t.edgeCase,l=t.breakpoint,u=void 0===l?"desktop":l,s=t.oneline,p=void 0!==s&&s;if(null==n||""===n)return null;var f,b,m=o.includes("[BLOCK_ID]")?o.replace("[BLOCK_ID]",r):"".concat(o);if(function(e){return["box-shadow"].some((function(t){return e.includes(t)}))}(o))return["inset","outset"].includes(n.type)&&""!==n.color?(0,e.sprintf)(m,"".concat(n.left,"px ").concat(n.top,"px ").concat(n.width,"px ").concat(n.spread,"px ").concat("outset"===n.type?"":n.type," ").concat(n.color)):null;if(function(e){return["text-shadow"].some((function(t){return e.includes(t)}))}(o))return""!==n.hpos&&""!==n.vpos&&""!==n.blur&&""!==n.color?(0,e.sprintf)(m,"".concat(n.hpos,"px ").concat(n.vpos,"px ").concat(n.blur,"px ").concat(n.color)):null;if(function(e){return["padding","border-radius","margin","position-items"].some((function(t){return e.includes(t)}))&&!["padding-","margin-"].some((function(t){return e.includes(t)}))}(o)){var d=o.match(/margin|border-radius|padding|position-items/gi)[0];if("position-items"===d){var v=["top","right","bottom","left"].map((function(e){if(null!=n[e]&&""!==n[e]){var t="auto"===n[e]?"auto":"".concat(n[e]).concat(i);return"".concat(e,": ").concat(t,";")}})).join(" ");return v.trim()?(f=m,b=" ".concat(v," "),f.replace(/[^{\}]+(?=})/gi,b)):null}var g=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!e)return!1;if(y(e)||y(e[t])){var o=e[t]||e;if(["margin","padding"].includes(r)){if(4===Object.values(o).length&&1===new Set(Object.values(o)).size)return"".concat(o.top,"px");if(Object.values(o).every((function(e){return""!==e}))){if(o.top===o.bottom&&o.left===o.right)return"".concat(o.top||0,"px ").concat(o.left||0,"px");Object.values(o).map((function(e){return"".concat(e||0,"px")})).join(" ")}var a=[],i=["top","right","bottom","left"];return n?(i.forEach((function(e){a.push("".concat(o[e]||0,"px"))})),a.join(" ")):(i.forEach((function(e){""!==o[e]&&a.push(r+"-"+e+":"+o[e]+"px;")})),a)}if("border-radius"===r){if(4===Object.values(o).length&&1===new Set(Object.values(o)).size)return"".concat(o.top_left,"px");if(Object.values(o).every((function(e){return""!==e}))){if(o.top_left===o.bottom_right&&o.bottom_left===o.top_right)return"".concat(o.top_left||0,"px ").concat(o.bottom_left||0,"px");Object.values(o).map((function(e){return"".concat(e||0,"px")})).join(" ")}var c=[],l=["top_left","top_right","bottom_right","bottom_left"];return n?(l.forEach((function(e){c.push("".concat(o[e]||0,"px"))})),c.join(" ")):(l.forEach((function(e){""!==o[e]&&c.push("border-"+e.replace("_","-")+"-radius:"+o[e]+"px;")})),c)}}return!1}(n,null,d,p);if(!g)return null;if(g&&"string"==typeof g)return(0,e.sprintf)(m,g)||null;if(g&&"object"===O(g))return m=(m=(m=(m=m.replace("margin: ","")).replace("padding: ","")).replace("border-radius: ","")).replace("%s;","%s"),(0,e.sprintf)(m,g.join(""))||null}if(function(e){return!!e&&"object"===O(e)&&"url"in e&&"attachment"in e&&"repeat"in e}(n)){if(!n.url)return;var h="none"!==n.url?"url(".concat(n.url,")"):"none",w=["background-image: ".concat(h,";"),"background-repeat: ".concat(n.repeat,";"),"background-size: ".concat(n.size,";"),"background-position: ".concat(n.position,";"),"background-attachment: ".concat(n.attachment,";")].join(" ");return(0,e.sprintf)(m,w)}if(c){var k=c.find((function(e){return e.edge===n}));if(k)return""===k.value||k.skipInBreakpoints&&k.skipInBreakpoints.includes(u)?null:(i=k.unit||"",(0,e.sprintf)(m,"".concat(k.value).concat(i)))}return(0,e.sprintf)(m,"".concat(n).concat(i))},D=function e(t){return m.Children.toArray(t).map((function(t){return Array.isArray(t.props.children)?e(t.props.children):t})).reduce((function(e,t){return Array.isArray(t)?[].concat(g(e),g(t)):[].concat(g(e),[t])}),[]).filter((function(e){return e.type&&"Rule"===e.type.displayName}))},I=function(e){var t=e.id,r=e.children,n=e.getCSSRule,o=e.mapper,a=void 0===o?function(e){return e}:o,i=[{name:"desktop",media:"max",width:R.desktop,rules:[]},{name:"tablet",media:"max",width:R.tablet,rules:[]},{name:"mobile",media:"max",width:R.mobile,rules:[]},{name:"desktop-only",media:"min",width:R.tablet+1,rules:[]},{name:"tablet-only",media:"min",width:R.mobile+1,rules:[]}];return D(r).reduce((function(e,r){var o=r.props,a=o.value,i=o.rule,c=o.unit,l=o.edgeCase,u=o.breakpointLimit,s=o.oneline;if(null==a)return e;if("object"!==O(a)||!("desktop"in a)){var p=e.find((function(e){return"desktop"===e.name})),f=n({id:t,value:a,rule:i,unit:c,edgeCase:l,breakpoint:"desktop",oneline:s});return null!=f&&p.rules.push(f),e}return Object.keys(a).forEach((function(r){var o=e.find((function(e){var t=e.name;return u&&"mobile"!==r?"".concat(r,"-only")===t:t===r})),p=n({id:t,value:a[r],rule:i,unit:c,edgeCase:l,breakpoint:r,oneline:s});null!=p&&o&&o.rules.push(p)})),e}),i).map(a)},N=r(624),T=r.n(N),A={value:T().oneOfType([T().string,T().number,T().object]).isRequired,rule:T().string.isRequired,unit:T().oneOf(["","px","%","em","rem","vh","vw","pt","cm","mm"]),edgeCase:T().arrayOf(T().shape({edge:T().any.isRequired,value:T().oneOfType([T().string,T().number]).isRequired,skipInBreakpoints:T().array})),breakpointLimit:T().bool,oneline:T().bool},q=function(){return null};q.displayName="Rule",q.propTypes=A;const z=q,L=window.wp.components;function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const M=function(t){var r,n=t.setAttributes,o=t.attributeKey,a=t.attributes,i=t.label,c=t.breakpoint,l=t.positionsLabels,u=void 0===l?[]:l,s=t.positions,p=void 0===s?["top","right","bottom","left"]:s,f=a[o],b=p[0],m=p[1],d=p[2],v=p[3],y=null===(r=a[o])||void 0===r?void 0:r.linked;return React.createElement("div",{className:"wp-block-fpframework-control-spacing components-base-control"},React.createElement("p",{className:"wp-block-fpframework-control-spacing-label"},i),React.createElement("div",{className:"wp-block-fpframework-control-spacing-controls-wrap"},React.createElement("div",{className:"wp-block-fpframework-control-spacing-controls"},p.map((function(e,t){var r;return React.createElement("div",{key:t,className:"wp-block-fpframework-spacing-controls-item"},React.createElement(L.TextControl,{value:c?f[c][e]:f[e],type:"number",min:-200,max:200,step:1,onChange:function(t){return function(e,t){var r,a;if(c)return y?void n(F({},o,K(K({},f),{},F({},c,K(K({},f[c]),{},(r={},F(r,b,e),F(r,m,e),F(r,d,e),F(r,v,e),r)))))):void n(F({},o,K(K({},f),{},F({},c,K(K({},f[c]),{},F({},t,e))))));n(F({},o,K(K({},f),{},y?(F(a={},b,e),F(a,m,e),F(a,d,e),F(a,v,e),a):F({},t,e))))}(t,e)}}),React.createElement("p",{className:"label",dangerouslySetInnerHTML:{__html:null!==(r=u[e])&&void 0!==r?r:e}}))}))),React.createElement(L.Button,{isSecondary:!y,isPrimary:y,className:"components-toolbar__control",label:(0,e.__)("Link Values","fpf-framework"),icon:"admin-links",onClick:function(){n(F({},o,K(K({},f),{},{linked:!y})))}})))};function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const U=function(t){var r=t.label,n=t.disableAlpha,o=void 0!==n&&n,a=t.wrapperClass,i=void 0===a?"":a,c=t.value,l=t.help,u=void 0===l?"":l,s=t.defaultValue,p=void 0===s?"":s,b=t.onChange,d=V((0,m.useState)(!1),2),v=d[0],y=d[1],g=V((0,m.useState)(!1),2),h=g[0],w=g[1],k=(0,f.useSelect)((function(e){return e("core/block-editor").getSettings().colors}));return React.createElement("div",{className:"components-base-control"},React.createElement("div",{className:"wp-block-fpframework-color-selector-settings-container ".concat(i)},React.createElement("div",{className:"inner"},r&&React.createElement("span",{className:"wp-block-fpframework-color-selector-label"},r),React.createElement("div",{className:"actions"},c&&c!==p&&React.createElement(L.Tooltip,{text:(0,e.__)("Reset","fpf-framework")},React.createElement(L.Button,{className:"components-color-palette__clear",type:"button",onClick:function(){b(p)},isSmall:!0},React.createElement(L.Dashicon,{icon:"redo"}))),React.createElement("div",{className:"wp-block-fpframework-color-selector-color-click"},v&&React.createElement(m.Fragment,null,React.createElement(L.Popover,{position:"top left",className:"wp-block-fpframework-popover-color",onClose:function(){return y(!1)}},React.createElement(L.ColorPicker,{key:h,color:c,onChangeComplete:function(e){if(e.rgb&&1===e.rgb.a||o)b(e.hex);else{var t=e.rgb,r=t.r,n=t.g,a=t.b,i=t.a;b("rgba(".concat(r,", ").concat(n,", ").concat(a,", ").concat(i,")"))}},disableAlpha:!1}),k.length>0&&React.createElement("div",{className:"components-color-palette"},k.map((function(t){return React.createElement("div",{key:t.slug,className:"components-color-palette__item-wrapper"},React.createElement(L.Button,{type:"button",className:"components-color-palette__item ".concat(c===t.color?"is-active":""),onClick:function(){b(t.color),w((function(e){return!e}))},style:{backgroundColor:t.color,color:t.color},"aria-label":t.name?(0,e.sprintf)((0,e.__)("Color: %s"),name):(0,e.sprintf)((0,e.__)("Color hex code: %s"),t),"aria-pressed":t.color===c}),t.color===c&&React.createElement(L.Dashicon,{icon:"saved"}))}))),React.createElement("div",{className:"wp-block-fpframework-color-selector-popover-footer"},React.createElement(L.Button,{isSecondary:!0,isSmall:!0,disabled:!c,onClick:function(){return b(p)}},(0,e.__)("Clear","fpf-framework"))))),React.createElement(L.Tooltip,{text:(0,e.__)("Select Color","fpf-framework")},React.createElement(L.Button,{className:"wp-block-fpframework-color-selector-icon-indicator",onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},onClick:function(){y((function(e){return!e}))}},React.createElement(L.ColorIndicator,{className:"wp-block-fpframework-color-selector-indicator"+(""===c?" is-empty":""),colorValue:c})))))),u&&React.createElement("div",{className:"wp-block-fpframework-color-selector-help"},u)))};var Y=r(927),$=r.n(Y);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var X="SET_BREAKPOINT",Z={breakpoint:"desktop"};(0,f.registerStore)("fpframework-breakpoints",{reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===X?J(J({},e),{},{breakpoint:t.breakpoint}):e},actions:{onBreakpointSet:function(e){return{type:X,breakpoint:e}}},selectors:{getBreakpoint:function(e){return e.breakpoint}}});const ee=function(e){var t=e.children,r=e.childrenClass,n=void 0===r?"":r,o=e.wrapperClass,a=void 0===o?"":o,i=(0,f.useSelect)((function(e){return e("fpframework-breakpoints").getBreakpoint()})),c=(0,f.useDispatch)("fpframework-breakpoints").onBreakpointSet;return React.createElement("div",{className:"components-base-control wp-block-fpframework-responsive-control-wrap ".concat(a)},React.createElement("div",{className:"wp-block-fpframework-responsive-control-wrap-buttons"},[{value:"desktop",icon:"desktop"},{value:"tablet",icon:"tablet"},{value:"mobile",icon:"smartphone"}].map((function(e,t){return React.createElement("button",{key:t,onClick:function(){return c(e.value)},className:$()({"wp-block-fpframework-responsive-control-wrap-button":!0,active:e.value===i})},React.createElement("span",{className:"dashicons dashicons-".concat(e.icon)}))}))),React.createElement("div",{className:n},t(i)))},te=window.React;var re=["className","isPressed"];function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){ae(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ie=function(e){return(0,te.createElement)("path",e)},ce=function(e){var t=e.className,r=e.isPressed,n=oe(oe({},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,re)),{},{className:$()(t,{"is-pressed":r})||void 0,"aria-hidden":!0,focusable:!1});return(0,te.createElement)("svg",n)};const le=(0,te.createElement)(ce,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,te.createElement)(ie,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),ue=(0,te.createElement)(ce,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,te.createElement)(ie,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),se=(0,te.createElement)(ce,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,te.createElement)(ie,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"}));function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){be(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var me=[{icon:le,title:(0,e.__)("Hide on desktop","fpf-framework"),breakpoint:E,value:"fpframework-hidden-desktop"},{icon:ue,title:(0,e.__)("Hide on tablet","fpf-framework"),breakpoint:j,value:"fpframework-hidden-tablet"},{icon:se,title:(0,e.__)("Hide on mobile","fpf-framework"),breakpoint:_,value:"fpframework-hidden-mobile"}],de={values:T().shape({desktop:T().bool,tablet:T().bool,mobile:T().bool}),onChange:T().func.isRequired,label:T().string,isCollapsed:T().bool},ve=function(e){var t=e.values,r=void 0===t?o():t,n=e.onChange,a=e.label,i=void 0===a?"":a;return React.createElement(L.BaseControl,null,""!==i&&React.createElement("div",{className:"fpframework-gutenberg-m-b-10"},i),me.map((function(e){var t=!!r[e.breakpoint];return React.createElement(L.ToggleControl,{key:e.breakpoint,label:e.title,checked:t,onChange:function(){return n(fe(fe({},r),{},be({},e.breakpoint,!t)))}})})))};ve.propTypes=de;const ye=ve;var ge={value:T().string.isRequired,label:T().string,className:T().string,onUpdate:T().func.isRequired},he=function(t){var r=t.value,n=t.className,o=void 0===n?"":n,a=t.label,i=void 0===a?(0,e.__)("Orientation","fpf-framework"):a,c=t.onUpdate,l=function(e){c(e.target.closest(".wp-fpframework-flex-control-item").dataset.orientation)};return React.createElement("div",{className:"wp-fpframework-flex-control-wrapper".concat(o?" "+o:"")},React.createElement("div",{className:"control-title fpframework-gutenberg-m-b-5"},i),React.createElement("div",{className:"wp-fpframework-flex-control"},React.createElement(L.Button,{className:"wp-fpframework-flex-control-item".concat("row"===r?" active":""),"data-orientation":"row",onClick:l},React.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},React.createElement("path",{fill:"currentColor",d:"M14.3 6.7l-1.1 1.1 4 4H4v1.5h13.3l-4.1 4.4 1.1 1.1 5.8-6.3z"}))),React.createElement(L.Button,{className:"wp-fpframework-flex-control-item".concat("column"===r?" active":""),"data-orientation":"column",onClick:l},React.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},React.createElement("path",{fill:"currentColor",d:"M16.2 13.2l-4 4V4h-1.5v13.3l-4.5-4.1-1 1.1 6.2 5.8 5.8-5.8-1-1.1z"})))))};he.propTypes=ge;const we=he;function ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(r),!0).forEach((function(t){xe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ee={attributes:c().object.isRequired,setAttributes:c().func.isRequired},je=function(t){var r=t.attributes,n=t.setAttributes,o=r.backgroundColor,a=r.fullWidth,i=r.equalSizes,c=r.buttonsDirection,l=r.align,u=r.visibility,s=r.gap,f=r.inForm,b=r.formFieldWidth;return React.createElement(m.Fragment,null,React.createElement(p.InspectorControls,null,React.createElement(L.PanelBody,{title:(0,e.__)("Buttons","firebox"),initialOpen:!0},React.createElement(ee,null,(function(e){return React.createElement(p.AlignmentToolbar,{isCollapsed:!1,value:l[e],onChange:function(t){return n({align:Oe(Oe({},l),{},xe({},e,null!=t?t:""))})}})})),f&&React.createElement(SelectControl,{label:(0,e.__)("Form Field Width","firebox"),options:[{label:"0%",value:"0%"},{label:"5%",value:"5%"},{label:"10%",value:"10%"},{label:"20%",value:"20%"},{label:"25%",value:"25%"},{label:"30%",value:"30%"},{label:"33%",value:"33%"},{label:"40%",value:"40%"},{label:"50%",value:"50%"},{label:"60%",value:"60%"},{label:"66%",value:"66%"},{label:"70%",value:"70%"},{label:"75%",value:"75%"},{label:"80%",value:"80%"},{label:"90%",value:"90%"},{label:"95%",value:"95%"},{label:"100%",value:"100%"}],value:b,onChange:function(e){return n({formFieldWidth:e})}}),React.createElement(ee,null,(function(t){return React.createElement(m.Fragment,null,React.createElement(L.RangeControl,{label:(0,e.__)("Buttons Gap (px)","firebox"),min:0,max:100,value:s[t],allowReset:!0,onChange:function(e){n({gap:Oe(Oe({},s),{},xe({},t,null!=e?e:8))})}}))})),React.createElement(we,{label:(0,e.__)("Buttons Direction","firebox"),className:"components-base-control",value:c,onUpdate:function(e){return n({buttonsDirection:e})}}),React.createElement(ToggleControl,{label:(0,e.__)("Buttons Size","firebox"),checked:!!a,onChange:function(){return n({fullWidth:!a})},help:a?(0,e.__)("Fill container","firebox"):(0,e.__)("Hug contents","firebox")}),"row"===c&&a&&React.createElement(ToggleControl,{label:(0,e.__)("Equal button sizes","firebox"),checked:!!i,onChange:function(){return n({equalSizes:!i})},help:i?(0,e.__)("Buttons have equal sizes","firebox"):(0,e.__)("Buttons have unequal sizes","firebox")}),React.createElement(ee,null,(function(t){return React.createElement(M,{label:(0,e.__)("Margin (px)","firebox"),attributeKey:"margin",attributes:r,setAttributes:n,breakpoint:t})})),React.createElement(ee,null,(function(t){return React.createElement(M,{label:(0,e.__)("Padding (px)","firebox"),attributeKey:"padding",attributes:r,setAttributes:n,breakpoint:t})}))),React.createElement(L.PanelBody,{title:(0,e.__)("Colors","firebox"),initialOpen:!1},React.createElement(U,{label:(0,e.__)("Background Color","firebox"),value:o||"",onChange:function(e){return n({backgroundColor:e})}})),React.createElement(L.PanelBody,{title:(0,e.__)("Visibility Settings","firebox"),initialOpen:!1},React.createElement(ye,{values:u,onChange:function(e){return n({visibility:e})}}))))};je.propTypes=Ee;const _e=je;var Re={children:T().oneOfType([T().node,T().array]),id:T().string},Se=function(e){var t,r=e.id,n=void 0===r?"":r,o=e.children,a=I({id:n,children:o,getCSSRule:B,mapper:C});return function(e){return e.every((function(e){return 0===e.rules.length}))}(a)?null:React.createElement("style",{dangerouslySetInnerHTML:{__html:(t=a,t.reduce((function(e,t){if(!t.rules.length)return e;var r=t.rules.map((function(e){return e.trim()})).join("\n");return t.width?"tablet-only"===t.name?"".concat(e,"\n\n\t\t\t\t@media (min-width: ").concat(R.mobile+1,"px) and (max-width: ").concat(R.tablet,"px) {\n\t\t\t\t\t").concat(r,"\n\t\t\t\t}\n\t\t\t\t"):"".concat(e,"\n\n\t\t\t@media (").concat(t.media,"-width: ").concat(t.width,"px) {\n\t\t\t\t").concat(r,"\n\t\t\t}\n\t\t\t"):"".concat(e).concat(r,"\n")}),"").trim())}})};Se.propTypes=Re;const Pe=Se;var Ce={attributes:c().object.isRequired,children:c().node},Be=function(e){var t=e.attributes,r=e.children,n=t.uniqueId,o=t.padding,a=t.margin,i=t.backgroundColor,c=t.fullWidth,l=t.buttonsDirection,u=t.align,s=t.gap,p=t.inForm,f=t.formFieldWidth,m=b(n),d="column"==l&&c?100:"",v={desktop:"left"==u.desktop?"flex-start":"right"==u.desktop?"flex-end":"center"==u.desktop?"center":"",tablet:"left"==u.tablet?"flex-start":"right"==u.tablet?"flex-end":"center"==u.tablet?"center":"",mobile:"left"==u.mobile?"flex-start":"right"==u.mobile?"flex-end":"center"==u.mobile?"center":""};return React.createElement(Pe,{id:m},React.createElement(z,{value:s,rule:".wp-block-firebox-buttons.[BLOCK_ID] { gap: %s; }",unit:"px"}),p&&React.createElement(z,{value:f,rule:".wp-block-firebox-buttons.[BLOCK_ID] { --field-width: %s; }"}),React.createElement(z,{value:i||"",rule:".wp-block-firebox-buttons.[BLOCK_ID] { background-color: %s; }"}),React.createElement(z,{value:a,rule:".wp-block-firebox-buttons.[BLOCK_ID] { margin: %s; }",unit:"px"}),React.createElement(z,{value:o,rule:".wp-block-firebox-buttons.[BLOCK_ID] { padding: %s; }",unit:"px"}),"row"==l&&React.createElement(z,{value:u,rule:".wp-block-firebox-buttons.[BLOCK_ID] { justify-content: %s; }",unit:""}),"column"==l&&React.createElement(z,{value:v,rule:".wp-block-firebox-buttons.[BLOCK_ID] { align-items: %s; }",unit:""}),React.createElement(z,{value:l,rule:".wp-block-firebox-buttons.[BLOCK_ID] { flex-direction: %s; }",unit:""}),React.createElement(z,{value:d,rule:".wp-block-firebox-buttons.[BLOCK_ID] { width: %s; }",unit:"%"}),React.createElement(z,{value:d,rule:".wp-block-firebox-buttons.[BLOCK_ID] .wp-block-firebox-button { width: %s; }",unit:"%"}),React.createElement(z,{value:d,rule:".wp-block-firebox-buttons.[BLOCK_ID] .wp-block-firebox-button a { width: %s; }",unit:"%"}),r)};Be.propTypes=Ce;const De=Be;function Ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ne={className:c().string,attributes:c().object.isRequired,setAttributes:c().func.isRequired,clientId:c().string.isRequired,hasInnerBlocks:c().bool.isRequired},Te=function(e){var t,r=e.attributes,n=e.setAttributes,o=e.clientId,a=e.className,i=e.hasInnerBlocks,c=r.uniqueId,l=r.align,u=r.fullWidth,f=r.equalSizes,v=r.buttonsDirection,y=r.gap,g=r.inForm,h=r.formFieldWidth,w=l.desktop;!function(e){var t=e.attributes,r=e.setAttributes,n=e.clientId,o=t.uniqueId;(0,m.useEffect)((function(){if(!o){var e=n.substr(2,14);return d.includes(e)||d.push(e),void r({uniqueId:e})}o&&!d.includes(o)&&(d.includes(o)||d.push(o))}),[])}({attributes:r,setAttributes:n,clientId:o});var k=b(c),O=(0,p.useBlockProps)({id:o,className:s()((t={"wp-block":!0,"wp-block-firebox":!0},Ie(t,w,!0),Ie(t,"is-fullwidth",u),Ie(t,"buttons-direction-"+v,!0),t))}),x=(0,p.useInnerBlocksProps)({id:k,className:s()(a,k,{"wp-block-firebox-buttons":!0,"fpf-buttons-equal-sizes":f})},{allowedBlocks:["firebox/button"],templateLock:!1,template:[["firebox/button"]],__experimentalUIParts:{hasSelectedUI:!1},__experimentalMoverDirection:"horizontal",__experimentalDirectInsert:!0,__experimentalLayout:{},templateInsertUpdatesSelection:!0,renderAppender:i?void 0:function(){return React.createElement(p.InnerBlocks.ButtonBlockAppender,null)}});return React.createElement("div",O,React.createElement(De,{attributes:r},React.createElement(z,{value:y,rule:".wp-block-firebox-buttons.[BLOCK_ID] > .block-editor-inner-blocks > .block-editor-block-list__layout { gap: %s; }",unit:"px"}),g&&React.createElement(z,{value:h,rule:".wp-block-firebox-buttons#block-".concat(o," { --field-width: %s; }")})),React.createElement("div",x),React.createElement(_e,{attributes:r,setAttributes:n}))};Te.propTypes=Ne;var Ae=(0,f.withSelect)((function(e,t){var r=t.clientId,n=(0,e("core/block-editor").getBlock)(r);return{hasInnerBlocks:!(!n||!n.innerBlocks.length)}}));const qe=(0,l.compose)(Ae)(Te);var ze=function(e){if(e)return Object.keys(e).reduce((function(t,r){return e[r]?(t.push("fpframework-hidden-".concat(r)),t):t}),[]).join(" ")};(0,t.registerBlockType)("firebox/buttons",{apiVersion:2,title:(0,e.__)("Buttons","firebox"),category:"firebox",description:(0,e.__)("An advanced Buttons block.","firebox"),keywords:[(0,e.__)("button","firebox"),(0,e.__)("buttons","firebox")],supports:{anchor:!0},icon:function(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",viewBox:"0 0 48 48",className:"firebox-gutenberg-block-list-item"},React.createElement("rect",{fill:"transparent",x:"2",y:"18",width:"18",height:"12",rx:"1",stroke:"#2438E9",strokeWidth:"3"}),React.createElement("rect",{x:"28",y:"18",width:"18",height:"12",rx:"1",fill:"#2438E9",stroke:"#2438E9",strokeWidth:"3"}))},attributes:{uniqueId:{type:"string",default:""},inForm:{type:"boolean",default:!1},formFieldWidth:{type:"string",default:""},align:{type:"object",default:o({desktop:"flex-start",tablet:"",mobile:""})},backgroundColor:{type:"string"},padding:{type:"object",default:a()},margin:{type:"object",default:a()},buttonsDirection:{type:"string",default:"row"},fullWidth:{type:"boolean",default:!1},equalSizes:{type:"boolean",default:!1},visibility:{type:"object",default:o({desktop:!1,tablet:!1,mobile:!1})},gap:{type:"object",default:o({desktop:8,tablet:8,mobile:8})}},edit:qe,save:function(e){var t,r,n=e.attributes,o=e.className,a=n.uniqueId,i=n.fullWidth,c=n.equalSizes,l=n.buttonsDirection,u=n.visibility,f=b(a);return React.createElement("div",p.useBlockProps.save({id:f,className:s()(o,f,ze(u),(t={"wp-block-firebox":!0,"is-fullwidth":i,"fpf-buttons-equal-sizes":c},r="buttons-direction-"+l,!0,r in t?Object.defineProperty(t,r,{value:true,enumerable:!0,configurable:!0,writable:!0}):t[r]=true,t))}),React.createElement(De,{attributes:n}),React.createElement(p.InnerBlocks.Content,null))}})})(),(window.wp=window.wp||{})["blocks/buttons.js"]=n})();