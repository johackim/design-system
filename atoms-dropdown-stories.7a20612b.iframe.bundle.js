"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[8384],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/atoms/dropdown.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Dots:()=>Dots,Simple:()=>Simple,default:()=>dropdown_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");const esm_DotsVerticalIcon=react.forwardRef((function DotsVerticalIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"}))}));const esm_ChevronDownIcon=react.forwardRef((function ChevronDownIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));var atoms_button=__webpack_require__("./src/atoms/button.js"),_excluded=["children","label","className","simple","dots","isOpenDefault"],__jsx=react.createElement,Dropdown=function Dropdown(_ref){var children=_ref.children,label=_ref.label,className=_ref.className,simple=_ref.simple,dots=_ref.dots,isOpenDefault=_ref.isOpenDefault,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),ref=(0,react.useRef)(),_useState=(0,react.useState)(isOpenDefault),isOpen=_useState[0],setOpen=_useState[1],handleClickOutside=function handleClickOutside(e){var _ref$current;null!==(_ref$current=ref.current)&&void 0!==_ref$current&&_ref$current.contains(e.target)||setOpen(!1)};return(0,react.useEffect)((function(){return document.addEventListener("click",handleClickOutside,!0),function(){return document.removeEventListener("click",handleClickOutside,!0)}}),[]),__jsx("div",{ref,className:"relative inline-block text-left text-gray-700 dark:text-gray-300"},dots?__jsx("button",(0,esm_extends.Z)({type:"button",onClick:function onClick(){return setOpen(!isOpen)},className:"".concat(className," -m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600 focus:outline-none")},rest),__jsx(esm_DotsVerticalIcon,{className:"h-5 w-5"})):__jsx(atoms_button.Z,(0,esm_extends.Z)({onClick:function onClick(){return setOpen(!isOpen)},className:simple?"".concat(className," border-none !px-0 !py-0"):className},rest,{secondary:!0}),label,__jsx(esm_ChevronDownIcon,{className:"-mr-1 ml-2 h-4 w-4"})),children&&__jsx("div",{className:"".concat(!isOpen&&"hidden"," origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black dark:ring-gray-700 ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-800 focus:outline-none dark:bg-gray-900")},children))};Dropdown.displayName="Dropdown",Dropdown.defaultProps={className:"",children:"",isOpenDefault:!1,label:"Options"},Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},children:{defaultValue:{value:"''",computed:!1},required:!1},isOpenDefault:{defaultValue:{value:"false",computed:!1},required:!1},label:{defaultValue:{value:"'Options'",computed:!1},required:!1}}};const dropdown=Dropdown;var _Default$parameters,_Default$parameters2,_Simple$parameters,_Simple$parameters2,_Dots$parameters,_Dots$parameters2,dropdown_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const dropdown_stories={title:"Atoms/Dropdown",component:dropdown};var Template=function Template(args){return dropdown_stories_jsx("div",{className:"absolute right-5"},dropdown_stories_jsx(dropdown,args))};Template.displayName="Template";var Default=Template.bind({});Default.args=_objectSpread(_objectSpread({},dropdown.defaultProps),{},{children:dropdown_stories_jsx(react.Fragment,null,dropdown_stories_jsx("div",{className:"px-4 py-3"},dropdown_stories_jsx("p",{className:"text-sm"},"Signed in as"),dropdown_stories_jsx("p",{className:"text-sm font-medium truncate"},"tom@example.com")),dropdown_stories_jsx("div",{className:"py-1"},dropdown_stories_jsx("a",{href:"#!",className:"block px-4 py-2 text-sm dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-gray-300"},"Account settings"),dropdown_stories_jsx("a",{href:"#!",className:"block px-4 py-2 text-sm dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-gray-300"},"Support"),dropdown_stories_jsx("a",{href:"#!",className:"block px-4 py-2 text-sm dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-gray-300"},"License")),dropdown_stories_jsx("div",{className:"py-1"},dropdown_stories_jsx("button",{type:"button",className:"w-full text-left block px-4 py-2 text-sm dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover:text-gray-300"},"Sign out")))});var Simple=Template.bind({});Simple.args=_objectSpread(_objectSpread({},Default.args),{},{simple:!0});var Dots=Template.bind({});Dots.args=_objectSpread(_objectSpread({},Default.args),{},{dots:!0}),Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'args => <div className="absolute right-5">\n        <Dropdown {...args} />\n    </div>'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Simple.parameters=_objectSpread(_objectSpread({},Simple.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Simple$parameters=Simple.parameters)||void 0===_Simple$parameters?void 0:_Simple$parameters.docs),{},{source:_objectSpread({originalSource:'args => <div className="absolute right-5">\n        <Dropdown {...args} />\n    </div>'},null===(_Simple$parameters2=Simple.parameters)||void 0===_Simple$parameters2||null===(_Simple$parameters2=_Simple$parameters2.docs)||void 0===_Simple$parameters2?void 0:_Simple$parameters2.source)})}),Dots.parameters=_objectSpread(_objectSpread({},Dots.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Dots$parameters=Dots.parameters)||void 0===_Dots$parameters?void 0:_Dots$parameters.docs),{},{source:_objectSpread({originalSource:'args => <div className="absolute right-5">\n        <Dropdown {...args} />\n    </div>'},null===(_Dots$parameters2=Dots.parameters)||void 0===_Dots$parameters2||null===(_Dots$parameters2=_Dots$parameters2.docs)||void 0===_Dots$parameters2?void 0:_Dots$parameters2.source)})})},"./src/atoms/button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_loading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/loading.js"),_excluded=["secondary","children","onClick","className","disabled","loading"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,style=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("inline-flex items-center justify-center px-5 py-2 rounded-md disabled:cursor-not-allowed disabled:opacity-75",{variants:{secondary:{false:"!bg-gray-600 text-white hover:text-white hover:!bg-gray-700 disabled:hover:bg-gray-600 disabled:dark:hover:!bg-gray-700 dark:!bg-gray-700 dark:hover:!bg-gray-600",true:"border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 disabled:hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-white"}},defaultVariants:{secondary:!1}}),Button=function Button(_ref){var secondary=_ref.secondary,children=_ref.children,onClick=_ref.onClick,className=_ref.className,disabled=_ref.disabled,loading=_ref.loading,rest=(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx("button",(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({type:"button",onClick,className:style({className,secondary}),disabled:disabled||loading},rest),loading?__jsx(_loading__WEBPACK_IMPORTED_MODULE_1__.Z,{text:"Loading...",className:secondary?"":"text-white"}):children)};Button.displayName="Button",Button.style=style,Button.defaultProps={onClick:function onClick(){},secondary:!1,children:"Button",loading:!1,className:""},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},secondary:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"'Button'",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Button},"./src/atoms/loading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["text","size","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Loading=function Loading(_ref){var text=_ref.text,size=_ref.size,className=_ref.className,rest=(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:"text-gray-700 dark:text-gray-300 inline-flex align-middle items-center ".concat({base:"text-base",sm:"text-sm",md:"text-xl",xl:"text-3xl"}[size]," ").concat(className),"data-test":"loading"},rest),__jsx("svg",{className:"mr-1 ".concat({base:"w-4 h-4",sm:"w-4 h-4",md:"w-6 h-6",xl:"w-8 h-8"}[size]),viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},__jsx("circle",{cx:"50",cy:"50",fill:"none",className:"stroke-current",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138"},__jsx("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}))),text&&__jsx("span",null,text))};Loading.displayName="Loading",Loading.defaultProps={text:"Loading...",className:"",size:"base"},Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{text:{defaultValue:{value:"'Loading...'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'base'",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Loading},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);