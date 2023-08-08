"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[7907],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/molecules/card.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>card_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),__jsx=react.createElement,Card=function Card(_ref){var children=_ref.children,className=_ref.className;return __jsx("div",{className:"px-4 py-5 bg-white dark:bg-gray-800 shadow rounded-lg sm:p-4 flex flex-col relative ".concat(className)},children)};Card.displayName="Card",Card.Name=function(_ref2){var children=_ref2.children,className=_ref2.className;return __jsx("dt",{className:"text-sm font-semibold dark:text-white ".concat(className)},children)},Card.Value=function(_ref3){var children=_ref3.children,className=_ref3.className;return __jsx("dd",{className:"text-sm text-gray-500 ".concat(className)},children)},Card.__docgenInfo={description:"",methods:[{name:"Name",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",type:null}],returns:null},{name:"Value",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",type:null}],returns:null}],displayName:"Card"};const card=Card;var _Default$parameters,_Default$parameters2,card_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const card_stories={title:"Molecules/Card",component:card,decorators:[function(Story){return card_stories_jsx("div",{className:"max-w-xs"},Story())}]};var Template=function Template(args){return card_stories_jsx(card,args,card_stories_jsx(card.Name,null,"name"),card_stories_jsx(card.Value,null,"value"))};Template.displayName="Template";var Default=Template.bind({});Default.args=card.defaultProps,Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Card {...args}>\n        <Card.Name>name</Card.Name>\n        <Card.Value>value</Card.Value>\n    </Card>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})}}]);