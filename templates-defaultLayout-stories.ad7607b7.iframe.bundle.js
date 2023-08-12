"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[2315],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/templates/defaultLayout.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centered:()=>Centered,Default:()=>Default,default:()=>defaultLayout_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),layout_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./styles/layout.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(layout_module.Z,options);layout_module.Z&&layout_module.Z.locals&&layout_module.Z.locals;var header=__webpack_require__("./src/organisms/header.js"),footer=__webpack_require__("./src/organisms/footer.js"),__jsx=react.createElement,DefaultLayout=function DefaultLayout(_ref){var title=_ref.title,description=_ref.description,children=_ref.children,logo=_ref.logo,links=_ref.links,backgroundImage=_ref.backgroundImage,className=_ref.className;return __jsx(react.Fragment,null,__jsx(header.Z,{className:"".concat(backgroundImage&&"!bg-gray-900/50"),title,description,logo,fixed:!0},links),__jsx("main",{className},children),__jsx(footer.Z,null))};DefaultLayout.defaultProps={backgroundImage:!1,title:"Title",logo:"https://svgur.com/i/csw.svg",description:"Description",links:[]},DefaultLayout.__docgenInfo={description:"",methods:[],displayName:"DefaultLayout",props:{backgroundImage:{defaultValue:{value:"false",computed:!1},required:!1},title:{defaultValue:{value:"'Title'",computed:!1},required:!1},logo:{defaultValue:{value:"'https://svgur.com/i/csw.svg'",computed:!1},required:!1},description:{defaultValue:{value:"'Description'",computed:!1},required:!1},links:{defaultValue:{value:"[]",computed:!1},required:!1}}};const defaultLayout=DefaultLayout;var _Default$parameters,_Default$parameters2,_Centered$parameters,_Centered$parameters2,defaultLayout_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const defaultLayout_stories={title:"Templates/DefaultLayout",component:defaultLayout,decorators:[function(Story){return defaultLayout_stories_jsx("div",{id:"storybook"},Story())}]};var Template=function Template(args){return defaultLayout_stories_jsx(defaultLayout,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=_objectSpread(_objectSpread({},defaultLayout.defaultProps),{},{children:defaultLayout_stories_jsx("section",{className:"pt-20 px-4 container mx-auto lg:max-w-screen-lg text-gray-700 dark:text-gray-300"},"Hello world")});var Centered=Template.bind({});Centered.args=_objectSpread(_objectSpread({},defaultLayout.defaultProps),{},{className:"flex flex-col justify-center",children:defaultLayout_stories_jsx("section",{className:"pt-20 px-4 container mx-auto lg:max-w-screen-lg text-center text-gray-700 dark:text-gray-300"},"Centered Message")}),Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <DefaultLayout {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Centered.parameters=_objectSpread(_objectSpread({},Centered.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Centered$parameters=Centered.parameters)||void 0===_Centered$parameters?void 0:_Centered$parameters.docs),{},{source:_objectSpread({originalSource:"args => <DefaultLayout {...args} />"},null===(_Centered$parameters2=Centered.parameters)||void 0===_Centered$parameters2||null===(_Centered$parameters2=_Centered$parameters2.docs)||void 0===_Centered$parameters2?void 0:_Centered$parameters2.source)})})},"./src/atoms/button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_loading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/loading.js"),_excluded=["secondary","children","onClick","className","disabled","loading"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,style=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("inline-flex items-center justify-center px-5 py-2 rounded-md disabled:cursor-not-allowed disabled:opacity-75",{variants:{secondary:{false:"!bg-gray-600 text-white hover:text-white hover:!bg-gray-700 disabled:hover:bg-gray-600 disabled:dark:hover:!bg-gray-700 dark:!bg-gray-700 dark:hover:!bg-gray-600",true:"border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 disabled:hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-white"}},defaultVariants:{secondary:!1}}),Button=function Button(_ref){var secondary=_ref.secondary,children=_ref.children,onClick=_ref.onClick,className=_ref.className,disabled=_ref.disabled,loading=_ref.loading,rest=(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx("button",(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({type:"button",onClick,className:style({className,secondary}),disabled:disabled||loading},rest),loading?__jsx(_loading__WEBPACK_IMPORTED_MODULE_1__.Z,{text:"Loading...",className:secondary?"":"text-white"}):children)};Button.displayName="Button",Button.style=style,Button.defaultProps={onClick:function onClick(){},secondary:!1,children:"Button",loading:!1,className:""},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},secondary:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"'Button'",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Button},"./src/atoms/link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_excluded=["href","children","active","as","className","secondary"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,style=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",{variants:{active:{true:"text-gray-900 dark:text-white"}},defaultVariants:{active:!1}}),Link=function Link(_ref){var href=_ref.href,children=_ref.children,active=_ref.active,as=_ref.as,className=_ref.className,_ref$secondary=_ref.secondary,secondary=void 0!==_ref$secondary&&_ref$secondary,props=(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({href,className:style({className:"".concat(as?as.style({secondary}):""," ").concat(className).trim(),active})},props),children)};Link.displayName="Link",Link.style=style,Link.defaultProps={href:"/",children:"Link",className:"",active:!1},Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{secondary:{defaultValue:{value:"false",computed:!1},required:!1},href:{defaultValue:{value:"'/'",computed:!1},required:!1},children:{defaultValue:{value:"'Link'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},active:{defaultValue:{value:"false",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Link},"./src/atoms/loading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["text","size","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Loading=function Loading(_ref){var text=_ref.text,size=_ref.size,className=_ref.className,rest=(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_design_system_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:"text-gray-700 dark:text-gray-300 inline-flex align-middle items-center ".concat({base:"text-base",sm:"text-sm",md:"text-xl",xl:"text-3xl"}[size]," ").concat(className),"data-test":"loading"},rest),__jsx("svg",{className:"mr-1 ".concat({base:"w-4 h-4",sm:"w-4 h-4",md:"w-6 h-6",xl:"w-8 h-8"}[size]),viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},__jsx("circle",{cx:"50",cy:"50",fill:"none",className:"stroke-current",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138"},__jsx("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"}))),text&&__jsx("span",null,text))};Loading.displayName="Loading",Loading.defaultProps={text:"Loading...",className:"",size:"base"},Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{text:{defaultValue:{value:"'Loading...'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'base'",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Loading},"./src/organisms/footer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/react/index.js").createElement,Footer=function Footer(_ref){var startYear=_ref.startYear,date=_ref.date,copyleft=_ref.copyleft,children=_ref.children;return __jsx("footer",{className:"container m-auto px-4 py-8 flex items-center justify-between flex-wrap lg:max-w-screen-lg text-gray-700 dark:text-gray-300"},__jsx("div",null,__jsx("span",{className:"".concat(copyleft?"inline-block transform rotate-180":"")},"©"),__jsx("span",{className:"ml-2"},startYear&&"".concat(startYear,"-"),date||(new Date).getFullYear())),__jsx("nav",{className:"grid grid-flow-col gap-2 items-center"},children))};Footer.displayName="Footer",Footer.defaultProps={links:[],startYear:"",children:"",copyleft:!1},Footer.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{links:{defaultValue:{value:"[]",computed:!1},required:!1},startYear:{defaultValue:{value:"''",computed:!1},required:!1},children:{defaultValue:{value:"''",computed:!1},required:!1},copyleft:{defaultValue:{value:"false",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Footer},"./src/organisms/header.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_atoms_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/link.js"),_atoms_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/atoms/button.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Header=function Header(_ref){var title=_ref.title,description=_ref.description,logo=_ref.logo,fixed=_ref.fixed,size=_ref.size,children=_ref.children,className=_ref.className,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState[0],setOpen=_useState[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var handleClickOutside=function handleClickOutside(e){var _ref$current;null!==(_ref$current=ref.current)&&void 0!==_ref$current&&_ref$current.contains(e.target)||setOpen(!1)};return document.addEventListener("click",handleClickOutside,!0),function(){return document.removeEventListener("click",handleClickOutside,!0)}}),[]),__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("header",{ref,className:"flex shadow-md inset-x-0 h-16 items-center z-20 text-gray-700 dark:bg-gray-900 dark:text-gray-300 bg-white ".concat(fixed?"fixed top-0":""," ").concat(className)},__jsx("div",{className:"container m-auto flex items-center justify-between flex-wrap px-4 ".concat({md:"md:max-w-screen-md",lg:"lg:max-w-screen-lg",xl:"md:max-w-screen-xl"}[size])},__jsx(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:"/"},__jsx("div",{className:"flex items-center"},__jsx("img",{src:logo,alt:"logo",className:"rounded-full w-12",width:"48",height:"48"}),__jsx("div",{className:"ml-2"},__jsx("div",{className:"font-bold leading-none"},title),__jsx("div",{className:"text-sm leading-none"},description)))),__jsx("div",{className:"hidden md:grid grid-flow-col gap-4 items-center"},children),__jsx("div",{className:"md:hidden"},__jsx("button",{type:"button","aria-label":"menu",onClick:function onClick(){return setOpen(!isOpen)},className:"bg-white dark:bg-transparent dark:hover:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 dark:hover:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none"},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},__jsx("path",isOpen?{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})))))),__jsx("div",{className:"".concat(isOpen?"block":"hidden"," md:hidden z-20 mb-4 border-b dark:border-gray-800 fixed inset-x-0 ").concat(fixed?"top-16":"")},__jsx("div",{className:"space-y-1 bg-white dark:bg-gray-900"},children.filter((function(_ref2){var props=_ref2.props;return void 0!==(null==props?void 0:props.href)})).map((function(_ref3){var props=_ref3.props;return props.onClick?__jsx(_atoms_button__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:props.onClick,key:props.children},props.children):__jsx(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:props.href,key:props.children,className:"dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 text-base font-medium"},props.children)})))))};Header.defaultProps={title:"Title",fixed:!1,size:"lg",description:"Description",logo:"https://svgur.com/i/csw.svg",className:"",children:[]},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{defaultValue:{value:"'Title'",computed:!1},required:!1},fixed:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},required:!1},description:{defaultValue:{value:"'Description'",computed:!1},required:!1},logo:{defaultValue:{value:"'https://svgur.com/i/csw.svg'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},children:{defaultValue:{value:"[]",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Header},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./styles/layout.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"body {\n\n    display: block !important\n}\n\n#__next, #storybook {\n\n    display: flex;\n\n    height: 100vh;\n\n    flex-direction: column;\n\n    justify-content: space-between\n}\n\n#__next main, #storybook main {\n\n    flex: 1 1 0%\n}\n","",{version:3,sources:["webpack://./styles/layout.module.css"],names:[],mappings:"AACI;;IAAA;AAAa;;AAIb;;IAAA,aAA6C;;IAA7C,aAA6C;;IAA7C,sBAA6C;;IAA7C;AAA6C;;AAI7C;;IAAA;AAAa",sourcesContent:[":global(body) {\n    @apply !block;\n}\n\n:global(#__next), :global(#storybook) {\n    @apply h-screen flex flex-col justify-between;\n}\n\n:global(#__next) main, :global(#storybook) main {\n    @apply flex-1;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);