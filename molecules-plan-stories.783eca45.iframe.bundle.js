"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[2266],{"./src/molecules/plan.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_plan__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/molecules/plan.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Plan",component:_plan__WEBPACK_IMPORTED_MODULE_2__.Z,decorators:[function(Story){return __jsx("div",{className:"max-w-xs"},Story())}]};var Template=function Template(args){return __jsx(_plan__WEBPACK_IMPORTED_MODULE_2__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=_plan__WEBPACK_IMPORTED_MODULE_2__.Z.defaultProps,Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Plan {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/atoms/button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_loading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/loading.js"),_excluded=["secondary","children","onClick","className","disabled","loading"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,style=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("inline-flex items-center px-5 py-2 rounded-md disabled:cursor-not-allowed disabled:opacity-75",{variants:{secondary:{false:"!bg-gray-600 text-white hover:text-white hover:!bg-gray-700 disabled:hover:bg-gray-600 disabled:dark:hover:!bg-gray-700 dark:!bg-gray-700 dark:hover:!bg-gray-600",true:"border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 disabled:hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-white"}},defaultVariants:{secondary:!1}}),Button=function Button(_ref){var secondary=_ref.secondary,children=_ref.children,onClick=_ref.onClick,className=_ref.className,disabled=_ref.disabled,loading=_ref.loading,rest=(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx("button",(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({type:"button",onClick,className:style({className,secondary}),disabled:disabled||loading},rest),loading?__jsx(_loading__WEBPACK_IMPORTED_MODULE_1__.Z,{text:"Loading...",className:secondary?"":"text-white"}):children)};Button.displayName="Button",Button.style=style,Button.defaultProps={onClick:function onClick(){},secondary:!1,children:"Button",loading:!1,className:""},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},secondary:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"'Button'",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Button},"./src/atoms/loading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["text","size","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Loading=function Loading(_ref){var text=_ref.text,size=_ref.size,className=_ref.className,rest=(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:"text-gray-700 dark:text-gray-300 inline-flex align-middle items-center ".concat({base:"text-base",sm:"text-sm",md:"text-xl",xl:"text-3xl"}[size]," ").concat(className),"data-test":"loading"},rest),__jsx("svg",{className:"mr-1 ".concat({base:"w-4 h-4",sm:"w-4 h-4",md:"w-6 h-6",xl:"w-8 h-8"}[size]),viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},__jsx("circle",{cx:"50",cy:"50",fill:"none",className:"stroke-current",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138"},__jsx("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}))),text&&__jsx("span",null,text))};Loading.displayName="Loading",Loading.defaultProps={text:"Loading...",className:"",size:"base"},Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{text:{defaultValue:{value:"'Loading...'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'base'",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Loading},"./src/molecules/plan.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_design_system_design_system_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@heroicons/react/solid/esm/CheckIcon.js"),_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@heroicons/react/solid/esm/XIcon.js"),_atoms_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/atoms/button.js"),_excluded=["name","head","price","reduction","features","currency","mensual","spots","onClick","className","index"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,PricingPlan=function PricingPlan(_ref){var name=_ref.name,head=_ref.head,price=_ref.price,reduction=_ref.reduction,features=_ref.features,currency=_ref.currency,mensual=_ref.mensual,spots=_ref.spots,onClick=_ref.onClick,className=_ref.className,index=_ref.index,props=(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isLoading=_useState[0],setLoading=_useState[1],handleClick=function(){var _ref2=(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_home_runner_work_design_system_design_system_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(){return _home_runner_work_design_system_design_system_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return setLoading(!0),_context.next=3,onClick(props);case 3:setLoading(!1);case 4:case"end":return _context.stop()}}),_callee)})));return function handleClick(){return _ref2.apply(this,arguments)}}();return __jsx("div",{className:"border dark:border-gray-700 rounded w-full ".concat(className)},head&&__jsx("div",{className:"flex justify-center transform -translate-y-1/2 -mb-4"},__jsx("span",{className:"inline-flex rounded-full bg-gray-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white"},head)),__jsx("div",{className:"text-center my-4 p-4"},__jsx("h5",{className:"font-bold text-xl"},name)),__jsx("hr",{className:"mt-2 dark:border-gray-700"}),__jsx("div",{className:"my-4"},!!reduction&&__jsx("p",{className:"text-xs text-gray-500 text-center"},__jsx("span",{className:"line-through text-xl mr-2"},"".concat(price).concat(currency)),__jsx("span",null,"(".concat(function reductionPercentage(currentPrice){return Math.round((currentPrice-reduction-currentPrice)/currentPrice*100)}(price),"% de réduction)"))),__jsx("div",{className:"flex items-center justify-center"},__jsx("span",{className:"px-3 flex items-start text-6xl leading-none tracking-tight"},__jsx("span",{className:"font-extrabold"},price-reduction),__jsx("span",{className:"mt-2 dark:border-gray-700 text-4xl font-medium"},currency)),__jsx("span",{className:"text-xl leading-7 font-medium"},mensual?"/mois":"/an"))),spots&&__jsx("div",{className:"mx-6 -mt-2"},spots&&__jsx("p",{className:"flex flex-row-reverse text-xs"},"".concat(null==spots?void 0:spots.left," places restantes")),__jsx("div",{className:"w-full bg-gray-300 rounded-md"},__jsx("div",{className:"bg-gray-500 text-xs leading-none py-1 text-center font-bold text-white rounded-md",style:{width:"".concat(function percentage(left,total){return Math.min(left,total)/total*100}(null==spots?void 0:spots.left,null==spots?void 0:spots.total),"%")}}))),__jsx("hr",{className:"mt-2 dark:border-gray-700"}),__jsx("ul",{className:"px-4 py-2"},null==features?void 0:features.map((function(feature){var _feature$plans,_feature$plans2;return __jsx("li",{key:feature.name,className:"my-2 h-6 ".concat(null!==(_feature$plans=feature.plans)&&void 0!==_feature$plans&&_feature$plans.includes(index+1)?"":"text-gray-400")},null!==(_feature$plans2=feature.plans)&&void 0!==_feature$plans2&&_feature$plans2.includes(index+1)?__jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"w-5 mr-2 inline fill-current"}):__jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.Z,{className:"w-5 mr-2 inline fill-current"}),feature.name)}))),__jsx("hr",{className:"mb-2 dark:border-gray-700"}),__jsx("div",{className:"flex m-auto mb-2 dark:border-gray-700"},props.button?props.button:__jsx(_atoms_button__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleClick,className:"inline-block w-full mx-2"},isLoading?__jsx("span",{className:"inline"},"Chargement..."):__jsx("span",null,"S'abonner maintenant"))))};PricingPlan.displayName="PricingPlan",PricingPlan.defaultProps={price:10,currency:"€",name:"Plan name",features:[{name:"Feature 1"},{name:"Feature 2"},{name:"Feature 3"},{name:"Feature 4"},{name:"Feature 5"}],className:"",mensual:!1,reduction:0,onClick:function onClick(){}},PricingPlan.__docgenInfo={description:"",methods:[],displayName:"PricingPlan",props:{price:{defaultValue:{value:"10",computed:!1},required:!1},currency:{defaultValue:{value:"'€'",computed:!1},required:!1},name:{defaultValue:{value:"'Plan name'",computed:!1},required:!1},features:{defaultValue:{value:"[\n    { name: 'Feature 1' },\n    { name: 'Feature 2' },\n    { name: 'Feature 3' },\n    { name: 'Feature 4' },\n    { name: 'Feature 5' },\n]",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},mensual:{defaultValue:{value:"false",computed:!1},required:!1},reduction:{defaultValue:{value:"0",computed:!1},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=PricingPlan}}]);