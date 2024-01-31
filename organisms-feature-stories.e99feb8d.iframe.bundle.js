"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[5410],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/organisms/feature.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>feature_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js");const esm_BeakerIcon=react.forwardRef((function BeakerIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}))}));var heading=__webpack_require__("./src/atoms/heading.js"),__jsx=react.createElement,Feature=function Feature(_ref){var title=_ref.title,description=_ref.description,image=_ref.image,icon=_ref.icon,reverse=_ref.reverse,className=_ref.className;return __jsx("div",{className:"lg:mx-auto lg:max-w-7xl lg:px-4 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 ".concat(className)},__jsx("div",{className:"px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 ".concat(reverse?"order-last":"")},__jsx("div",null,__jsx("div",null,__jsx("span",{className:"h-12 w-12 rounded-md flex items-center justify-center bg-gray-600"},icon)),__jsx("div",{className:"mt-6"},__jsx(heading.Z,null,title),__jsx("p",{className:"mt-4 text-lg text-gray-500"},description)))),__jsx("div",{className:"mt-12 sm:mt-16 lg:mt-0 flex items-center"},__jsx("div",{className:"px-4 lg:px-0"},__jsx("img",{alt:"feature",className:"rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 w-auto",src:image,style:{boxShadow:"0 0px 12px rgb(0 0 0 / 20%)"}}))))};Feature.displayName="Feature",Feature.defaultProps={title:"Feature",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus, quod",image:"https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",icon:__jsx(esm_BeakerIcon,{className:"h-6 w-6 text-white"}),reverse:!1},Feature.__docgenInfo={description:"",methods:[],displayName:"Feature",props:{title:{defaultValue:{value:"'Feature'",computed:!1},required:!1},description:{defaultValue:{value:"'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore natus, quod'",computed:!1},required:!1},image:{defaultValue:{value:"'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'",computed:!1},required:!1},icon:{defaultValue:{value:'<BeakerIcon className="h-6 w-6 text-white" />',computed:!1},required:!1},reverse:{defaultValue:{value:"false",computed:!1},required:!1}}};const feature=Feature;var _Default$parameters,_Default$parameters2,feature_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const feature_stories={title:"Organisms/Feature",component:feature};var Template=function Template(args){return feature_stories_jsx(feature,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=feature.defaultProps,Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Feature {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/atoms/heading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/react/index.js").createElement,Heading=function Heading(_ref){var children=_ref.children,size=_ref.size,className=_ref.className;return{h1:__jsx("h1",{className:"font-semibold text-gray-700 dark:text-gray-300 my-4 text-4xl ".concat(className)},children),h2:__jsx("h2",{className:"font-semibold text-gray-700 dark:text-gray-300 my-4 text-3xl ".concat(className)},children),h3:__jsx("h3",{className:"font-semibold text-gray-700 dark:text-gray-300 my-4 text-xl ".concat(className)},children),h4:__jsx("h4",{className:"font-semibold text-gray-700 dark:text-gray-300 my-4 text-sm ".concat(className)},children),h5:__jsx("h5",{className:"font-semibold text-gray-700 dark:text-gray-300 my-4 text-xs ".concat(className)},children)}[size]};Heading.defaultProps={size:"h2"};const __WEBPACK_DEFAULT_EXPORT__=Heading}}]);