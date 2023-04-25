/*! For license information please see organisms-hero-stories.1a1a7859.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[312],{"./src/organisms/hero.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>hero_stories,withBackgroundImage:()=>withBackgroundImage});__webpack_require__("./node_modules/react/index.js");var atoms_button=__webpack_require__("./src/atoms/button.js"),hero_module=__webpack_require__("./styles/hero.module.css"),hero_module_default=__webpack_require__.n(hero_module),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Hero=({children,preHead,headline,subHeadline,centered,backgroundImage})=>(0,jsx_runtime.jsx)("section",{className:`${centered?"h-screen":""} flex justify-center text-center items-center mx-auto ${backgroundImage?`before:content-[''] before:bg-[url('/background.jpg')] before:brightness-[.15] before:-z-10 before:absolute before:w-full before:h-full before:bg-cover before:bg-center ${hero_module_default().hero}`:""}`,children:(0,jsx_runtime.jsxs)("div",{className:"px-2 sm:px-0",children:[preHead&&(0,jsx_runtime.jsx)("h3",{className:"text-sm lg:text-lg my-4 "+(backgroundImage?"text-gray-300":"text-gray-500 dark:text-gray-400"),children:preHead}),headline&&(0,jsx_runtime.jsx)("h1",{className:"mx-auto text-3xl max-w-2xl tracking-tight leading-10 font-medium sm:text-5xl sm:leading-none md:text-6xl "+(backgroundImage?"text-gray-300":"text-gray-700 dark:text-gray-300"),children:headline}),subHeadline&&(0,jsx_runtime.jsx)("h2",{className:"max-w-md mx-auto text-base sm:text-lg md:text-xl md:max-w-3xl mt-2 "+(backgroundImage?"text-gray-300":"text-gray-500 dark:text-gray-400"),children:subHeadline}),(0,jsx_runtime.jsx)("div",{className:"mt-4 grid gap-2 sm:grid-flow-col sm:auto-cols-max sm:justify-center",children})]})});Hero.displayName="Hero",Hero.defaultProps={centered:!0,preHead:"",headline:"Headline",subHeadline:"Sub-headline",backgroundImage:!1,children:[(0,jsx_runtime.jsx)(atoms_button.Z,{href:"/",children:"Call To Action"}),(0,jsx_runtime.jsx)(atoms_button.Z,{href:"/",secondary:!0,children:"Secondary Action"})]},Hero.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{centered:{defaultValue:{value:"true",computed:!1},required:!1},preHead:{defaultValue:{value:"''",computed:!1},required:!1},headline:{defaultValue:{value:"'Headline'",computed:!1},required:!1},subHeadline:{defaultValue:{value:"'Sub-headline'",computed:!1},required:!1},backgroundImage:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:'[\n    <Button href="/">Call To Action</Button>,\n    <Button href="/" secondary>Secondary Action</Button>,\n]',computed:!1},required:!1}}};const hero=Hero,hero_stories={title:"Organisms/Hero",component:hero},Template=args=>(0,jsx_runtime.jsx)(hero,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args=hero.defaultProps;const withBackgroundImage=Template.bind({});withBackgroundImage.args={...hero.defaultProps,backgroundImage:!0,children:[(0,jsx_runtime.jsx)(atoms_button.Z,{href:"/",children:"Call To Action"}),(0,jsx_runtime.jsx)(atoms_button.Z,{href:"/more",className:"!text-gray-300 hover:!text-white hover:!border-white",secondary:!0,children:"Secondary Action"})]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Hero {...args} />",...Default.parameters?.docs?.source}}},withBackgroundImage.parameters={...withBackgroundImage.parameters,docs:{...withBackgroundImage.parameters?.docs,source:{originalSource:"args => <Hero {...args} />",...withBackgroundImage.parameters?.docs?.source}}};const __namedExportsOrder=["Default","withBackgroundImage"]},"./src/atoms/button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _loading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/loading.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=({secondary,children,onClick,className,disabled,loading,...rest})=>{const baseClassName=`inline-flex rounded-md items-center justify-center px-5 py-2 border focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 ${className}`,buttonClassName=secondary?`${baseClassName} border-gray-300 text-gray-700 hover:text-gray-900 disabled:hover:text-gray-700 disabled:hover:border-gray-300 hover:border-gray-400 dark:text-gray-300 dark:hover:text-white dark:hover:border-white`:`${baseClassName} border-transparent text-white !bg-gray-600 hover:!bg-gray-700 disabled:hover:!bg-gray-600 disabled:dark:hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white disabled:dark:hover:!text-gray-300 dark:text-gray-300`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",onClick,className:buttonClassName,disabled:disabled||loading,...rest,children:loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_loading__WEBPACK_IMPORTED_MODULE_1__.Z,{text:"Loading...",className:secondary?"":"text-white"}):children})};Button.displayName="Button",Button.defaultProps={onClick:()=>{},secondary:!1,children:"Button",loading:!1,className:""},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1},secondary:{defaultValue:{value:"false",computed:!1},required:!1},children:{defaultValue:{value:"'Button'",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Button},"./src/atoms/loading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loading=({text,size,className,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:`text-gray-700 dark:text-gray-300 inline-flex align-middle items-center ${{base:"text-base",sm:"text-sm",md:"text-xl",xl:"text-3xl"}[size]} ${className}`,"data-test":"loading",...rest,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{className:`mr-1 ${{base:"w-4 h-4",sm:"w-4 h-4",md:"w-6 h-6",xl:"w-8 h-8"}[size]}`,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{cx:"50",cy:"50",fill:"none",className:"stroke-current",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})})}),text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:text})]});Loading.displayName="Loading",Loading.defaultProps={text:"Loading...",className:"",size:"base"},Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{text:{defaultValue:{value:"'Loading...'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},size:{defaultValue:{value:"'base'",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Loading},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./styles/hero.module.css":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".hero-module__hero__1Po75::before {\n    content: '';\n    background: url('/background.jpg');\n    background-size: cover;\n    background-position: center;\n    height: 100%;\n    position: absolute;\n    filter: brightness(.15);\n    z-index: -10;\n}\n",""]),exports.locals={hero:"hero-module__hero__1Po75"},module.exports=exports},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./styles/hero.module.css":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[12].use[2]!./styles/hero.module.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}}}]);