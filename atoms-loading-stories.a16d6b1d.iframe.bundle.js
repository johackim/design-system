/*! For license information please see atoms-loading-stories.a16d6b1d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[434],{"./src/atoms/loading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=({text,size,className,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:`text-gray-700 dark:text-gray-300 inline-flex align-middle items-center ${{base:"text-base",sm:"text-sm",md:"text-xl",xl:"text-3xl"}[size]} ${className}`,"data-test":"loading",...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{className:`mr-1 ${{base:"w-4 h-4",sm:"w-4 h-4",md:"w-6 h-6",xl:"w-8 h-8"}[size]}`,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{cx:"50",cy:"50",fill:"none",className:"stroke-current",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})})}),text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:text})]});Loading.displayName="Loading",Loading.defaultProps={text:"Loading...",className:"",size:"base"},Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{text:{defaultValue:{value:"'Loading...'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'base'",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Loading},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/atoms/loading.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _loading__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/atoms/loading.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Loading",component:_loading__WEBPACK_IMPORTED_MODULE_0__.Z},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_loading__WEBPACK_IMPORTED_MODULE_0__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args=_loading__WEBPACK_IMPORTED_MODULE_0__.Z.defaultProps;const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => /*#__PURE__*/_jsx(Loading, {\n  ...args\n})",...Default.parameters?.docs?.source}}}}}]);