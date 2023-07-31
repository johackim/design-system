/*! For license information please see molecules-section-stories.94f76be2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[698],{"./src/molecules/section.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>section_stories});__webpack_require__("./node_modules/react/index.js");var atoms_text=__webpack_require__("./src/atoms/text.js"),heading=__webpack_require__("./src/atoms/heading.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Section=({children,className})=>(0,jsx_runtime.jsx)("section",{className:`container m-auto px-4 lg:max-w-screen-xl ${className}`,children});Section.displayName="Section",Section.Title=({children,className})=>(0,jsx_runtime.jsx)(heading.Z,{className,children}),Section.Description=({children,className})=>(0,jsx_runtime.jsx)(atoms_text.Z,{className:`text-xl leading-7 text-gray-500 ${className}`,children}),Section.Content=({children,className="mt-4"})=>(0,jsx_runtime.jsx)("div",{className,children}),Section.__docgenInfo={description:"",methods:[{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",type:null}],returns:null},{name:"Description",docblock:null,modifiers:["static"],params:[{name:"{ children, className }",type:null}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children, className = 'mt-4' }",type:null}],returns:null}],displayName:"Section"};const section=Section,section_stories={title:"Molecules/Section",component:section},Template=args=>(0,jsx_runtime.jsxs)(section,{...args,children:[(0,jsx_runtime.jsx)(section.Title,{children:"Section Title"}),(0,jsx_runtime.jsx)(section.Description,{children:"Section Description"}),(0,jsx_runtime.jsx)(section.Content,{children:"Section Content"})]});Template.displayName="Template";const Default=Template.bind({});Default.args=section.defaultProps,Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Section {...args}>\n        <Section.Title>Section Title</Section.Title>\n        <Section.Description>Section Description</Section.Description>\n        <Section.Content>Section Content</Section.Content>\n    </Section>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/atoms/heading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Heading=({children,size,className})=>({h1:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{className:`font-semibold text-gray-700 dark:text-gray-300 my-4 text-4xl ${className}`,children}),h2:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{className:`font-semibold text-gray-700 dark:text-gray-300 my-4 text-3xl ${className}`,children}),h3:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3",{className:`font-semibold text-gray-700 dark:text-gray-300 my-4 text-xl ${className}`,children}),h4:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4",{className:`font-semibold text-gray-700 dark:text-gray-300 my-4 text-sm ${className}`,children}),h5:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5",{className:`font-semibold text-gray-700 dark:text-gray-300 my-4 text-xs ${className}`,children})}[size]);Heading.defaultProps={size:"h2"};const __WEBPACK_DEFAULT_EXPORT__=Heading},"./src/atoms/text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=({children,className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:`text-gray-700 ${className}`,children});Text.displayName="Text",Text.defaultProps={className:""},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Text},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);