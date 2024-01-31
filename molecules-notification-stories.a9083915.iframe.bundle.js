"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[9595],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@heroicons/react/solid/esm/XIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function XIcon(props,svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}))},"./src/molecules/notification.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>notification_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),XIcon=__webpack_require__("./node_modules/@heroicons/react/solid/esm/XIcon.js");const esm_CheckCircleIcon=react.forwardRef((function CheckCircleIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))}));const esm_XCircleIcon=react.forwardRef((function XCircleIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}))}));const esm_InformationCircleIcon=react.forwardRef((function InformationCircleIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}));var __jsx=react.createElement,Notification=function Notification(_ref){var title=_ref.title,text=_ref.text,type=_ref.type,onClose=_ref.onClose;return __jsx("div",{className:"pointer-events-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-4",role:"alert"},__jsx("div",{className:"flex items-start"},__jsx("div",{className:"flex-shrink-0"},"success"===type&&__jsx(esm_CheckCircleIcon,{className:"h-6 w-6 text-green-400"}),"error"===type&&__jsx(esm_XCircleIcon,{className:"h-6 w-6 text-red-400"}),"info"===type&&__jsx(esm_InformationCircleIcon,{className:"h-6 w-6 text-blue-400"})),__jsx("div",{className:"ml-3 w-0 flex-1 pt-0.5"},__jsx("p",{className:"text-sm font-medium text-gray-900"},title),__jsx("p",{className:"mt-1 text-sm text-gray-500"},text)),__jsx("div",{className:"ml-4 flex flex-shrink-0"},__jsx("button",{type:"button",className:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none",onClick:onClose},__jsx("span",{className:"sr-only"},"Close"),__jsx(XIcon.Z,{className:"h-5 w-5"})))))};Notification.displayName="Notification",Notification.defaultProps={title:"Title",type:"success",text:"text",className:"",onClose:function onClose(){}},Notification.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{title:{defaultValue:{value:"'Title'",computed:!1},required:!1},type:{defaultValue:{value:"'success'",computed:!1},required:!1},text:{defaultValue:{value:"'text'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},onClose:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const notification=Notification;var _Default$parameters,_Default$parameters2,notification_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const notification_stories={title:"Molecules/Notification",component:notification};var Template=function Template(args){return notification_stories_jsx(notification,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=notification.defaultProps,Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Notification {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})}}]);