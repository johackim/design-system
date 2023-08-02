"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[1877],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/atoms/switch.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIcons:()=>WithIcons,default:()=>switch_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),__jsx=react.createElement,Switch=function Switch(_ref){var onClick=_ref.onClick,icons=_ref.icons,className=_ref.className;return __jsx("button",{type:"button","aria-label":"switch",onClick,className:"!bg-gray-200 dark:!bg-gray-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none ".concat(className)},2===icons.length?__jsx("span",{className:"dark:translate-x-5 translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0"},__jsx("span",{className:"dark:opacity-0 opacity-100 absolute inset-0 h-full w-full flex items-center justify-center"},icons[0]),__jsx("span",{className:"dark:opacity-100 opacity-0 absolute inset-0 h-full w-full flex items-center justify-center"},icons[1])):__jsx("span",{className:"dark:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0"}))};Switch.displayName="Switch",Switch.defaultProps={icons:[],className:"",onClick:function onClick(){}},Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{icons:{defaultValue:{value:"[]",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const atoms_switch=Switch;const esm_SunIcon=react.forwardRef((function SunIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}))}));const esm_MoonIcon=react.forwardRef((function MoonIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))}));var _Default$parameters,_Default$parameters2,_WithIcons$parameters,_WithIcons$parameters2,switch_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const switch_stories={title:"Atoms/Switch",component:atoms_switch};var Template=function Template(args){return switch_stories_jsx(atoms_switch,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=atoms_switch.defaultProps;var WithIcons=Template.bind({});WithIcons.args=_objectSpread(_objectSpread({},atoms_switch.defaultProps),{},{icons:[switch_stories_jsx(esm_SunIcon,{className:"bg-white h-3 w-3 text-gray-900"}),switch_stories_jsx(esm_MoonIcon,{className:"bg-white h-3 w-3 text-gray-900"})]}),Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Switch {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),WithIcons.parameters=_objectSpread(_objectSpread({},WithIcons.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIcons$parameters=WithIcons.parameters)||void 0===_WithIcons$parameters?void 0:_WithIcons$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Switch {...args} />"},null===(_WithIcons$parameters2=WithIcons.parameters)||void 0===_WithIcons$parameters2||null===(_WithIcons$parameters2=_WithIcons$parameters2.docs)||void 0===_WithIcons$parameters2?void 0:_WithIcons$parameters2.source)})})}}]);