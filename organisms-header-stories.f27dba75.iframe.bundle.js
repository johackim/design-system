"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[149],{"./src/atoms/button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _loading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/loading.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=({secondary,children,onClick,className,loading,...rest})=>{const primaryClassName=`inline-flex rounded-md items-center justify-center px-5 py-2 border border-transparent text-white !bg-gray-600 hover:!bg-gray-700 dark:!bg-gray-700 dark:hover:!bg-gray-600 dark:hover:text-white dark:text-gray-300 focus:outline-none ${className}`,secondaryClassName=`inline-flex rounded-md items-center justify-center px-5 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white dark:hover:border-white focus:outline-none ${className}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",onClick,className:`${secondary?secondaryClassName:primaryClassName} ${loading?"disabled:opacity-75 !cursor-not-allowed":""}`,disabled:loading,...rest,children:loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_loading__WEBPACK_IMPORTED_MODULE_1__.Z,{text:"Loading...",className:secondary?"":"text-white"}):children})};Button.displayName="Button",Button.defaultProps={onClick:()=>{},secondary:!1,children:"Button",loading:!1,className:""},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},secondary:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"'Button'",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Button},"./src/atoms/link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Link=({href,children,className,active,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href,className:`${active?"text-gray-900 dark:text-white":"text-gray-700 dark:text-gray-300"} hover:text-gray-900 dark:hover:text-white ${className}`.trim(),...rest,children});Link.displayName="Link",Link.defaultProps={href:"/",children:"Link",className:"",active:!1},Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{href:{defaultValue:{value:"'/'",computed:!1},required:!1},children:{defaultValue:{value:"'Link'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},active:{defaultValue:{value:"false",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Link},"./src/atoms/loading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=({text,size,className,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:`text-gray-700 dark:text-gray-300 inline-flex align-middle items-center ${{base:"text-base",sm:"text-sm",md:"text-xl",xl:"text-3xl"}[size]} ${className}`,"data-test":"loading",...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{className:`mr-1 ${{base:"w-4 h-4",sm:"w-4 h-4",md:"w-6 h-6",xl:"w-8 h-8"}[size]}`,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{cx:"50",cy:"50",fill:"none",className:"stroke-current",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})})}),text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:text})]});Loading.displayName="Loading",Loading.defaultProps={text:"Loading...",className:"",size:"base"},Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{text:{defaultValue:{value:"'Loading...'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'base'",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Loading},"./src/organisms/header.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_atoms_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/link.js"),_atoms_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/atoms/button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Header=({title,description,logo,fixed,size,children,className})=>{const[isOpen,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickOutside=e=>{ref.current?.contains(e.target)||setOpen(!1)};return document.addEventListener("click",handleClickOutside,!0),()=>document.removeEventListener("click",handleClickOutside,!0)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("header",{ref,className:`flex shadow-md inset-x-0 h-16 items-center z-20 text-gray-700 dark:bg-gray-900 dark:text-gray-300 bg-white ${fixed?"fixed top-0":""} ${className}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:`container m-auto flex items-center justify-between flex-wrap px-4 ${{md:"md:max-w-screen-md",lg:"lg:max-w-screen-lg",xl:"md:max-w-screen-xl"}[size]}`,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:"/",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"flex items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:logo,alt:"logo",className:"rounded-full w-12",width:"48",height:"48"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"ml-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"font-bold leading-none",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"text-sm leading-none",children:description})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"hidden md:grid grid-flow-col gap-4 items-center",children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"md:hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{type:"button","aria-label":"menu",onClick:()=>setOpen(!isOpen),className:"bg-white dark:bg-transparent dark:hover:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 dark:hover:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none",children:isOpen?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:`${isOpen?"block":"hidden"} md:hidden z-20 mb-4 border-b dark:border-gray-800 fixed inset-x-0 ${fixed?"top-16":""}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"space-y-1 bg-white dark:bg-gray-900",children:children.filter((({props})=>void 0!==props?.href)).map((({props})=>props.onClick?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_button__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:props.onClick,children:props.children},props.children):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:props.href,className:"dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 text-base font-medium",children:props.children},props.children)))})})]})};Header.defaultProps={title:"Title",fixed:!1,size:"lg",description:"Description",logo:"https://svgur.com/i/csw.svg",className:""},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{defaultValue:{value:"'Title'",computed:!1},required:!1},fixed:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},required:!1},description:{defaultValue:{value:"'Description'",computed:!1},required:!1},logo:{defaultValue:{value:"'https://svgur.com/i/csw.svg'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Header},"./src/organisms/header.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithButton:()=>WithButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _header__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/organisms/header.js"),_atoms_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/link.js"),_atoms_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/atoms/button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Organisms/Header",component:_header__WEBPACK_IMPORTED_MODULE_0__.Z,argTypes:{size:{options:["md","lg","xl"],control:{type:"radio"}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_header__WEBPACK_IMPORTED_MODULE_0__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={..._header__WEBPACK_IMPORTED_MODULE_0__.Z.defaultProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:"/1",children:"Link 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:"/2",children:"Link 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:"/3",children:"Link 3"})]};const WithButton=Template.bind({});WithButton.args={...Default.args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:"/1",children:"Link 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:"/2",children:"Link 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_link__WEBPACK_IMPORTED_MODULE_1__.Z,{href:"/3",children:"Link 3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_atoms_button__WEBPACK_IMPORTED_MODULE_2__.Z,{children:"Button"})]};const __namedExportsOrder=["Default","WithButton"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => /*#__PURE__*/_jsx(Header, {\n  ...args\n})",...Default.parameters?.docs?.source}}},WithButton.parameters={...WithButton.parameters,docs:{...WithButton.parameters?.docs,source:{originalSource:"args => /*#__PURE__*/_jsx(Header, {\n  ...args\n})",...WithButton.parameters?.docs?.source}}}}}]);