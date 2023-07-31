"use strict";(self.webpackChunk_johackim_design_system=self.webpackChunk_johackim_design_system||[]).push([[417],{"./src/molecules/graph.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>graph_stories});var react=__webpack_require__("./node_modules/react/index.js"),react_force_graph=__webpack_require__("./node_modules/react-force-graph/dist/react-force-graph.mjs"),colors=__webpack_require__("./node_modules/tailwindcss/colors.js"),colors_default=__webpack_require__.n(colors),src=__webpack_require__("./node_modules/d3/src/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Graph=({nodes,links,width,height,colors})=>{const ref=(0,react.useRef)(),[displayWidth]=(0,react.useState)(width||window.innerWidth),[displayHeight]=(0,react.useState)(height||window.innerHeight);let hoverNode;(0,react.useEffect)((()=>{links.forEach((link=>{const a=nodes.find((node=>node.id===link.source)),b=nodes.find((node=>node.id===link.target));a&&(a.neighbors=[...a?.neighbors||[],b]),b&&(b.neighbors=[...b?.neighbors||[],a]),a&&(a.links=[...a?.links||[],link]),b&&(b.links=[...b?.links||[],link])}))}),[]),(0,react.useEffect)((()=>{ref.current&&(ref.current.d3Force("x",(0,src.RUJ)()),ref.current.d3Force("y",(0,src.Mrm)()),ref.current.d3Force("link").distance(70),ref.current.d3Force("center",null),ref.current.d3Force("charge").strength(-100),setTimeout((()=>ref.current.zoomToFit(200,20))))}),[]);const[highlightNodes,setHighlightNodes]=(0,react.useState)(new Set),[highlightLinks,setHighlightLinks]=(0,react.useState)(new Set),handleNodeHover=node=>{highlightNodes.clear(),highlightLinks.clear(),hoverNode=node,node&&(highlightNodes.add(node),(node.neighbors||[]).forEach((neighbor=>highlightNodes.add(neighbor))),(node.links||[]).forEach((link=>highlightLinks.add(link)))),setHighlightNodes(highlightNodes),setHighlightLinks(highlightLinks)},hexToRgb=(hex,opacity="0.2")=>{const[,r,g,b]=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return`rgba(${parseInt(r,16)}, ${parseInt(g,16)}, ${parseInt(b,16)}, ${opacity})`};return(0,jsx_runtime.jsx)(react_force_graph.f$,{ref,graphData:{links,nodes},width:displayWidth-1,height:displayHeight-1,style:{maxWidth:"100%",height:"auto"},nodeColor:node=>{if(hoverNode){if((hoverNode.neighbors||[]).map((({id})=>id)).includes(node.id))return colors.default;if(node!==hoverNode)return hexToRgb(colors.text)}return highlightNodes.has(node)?colors.selected:colors.default},linkColor:link=>highlightLinks.has(link)?colors.selected:colors.link,nodeCanvasObjectMode:()=>"after",onNodeHover:handleNodeHover,onNodeDrag:handleNodeHover,onNodeDragEnd:()=>{hoverNode=null,highlightNodes.clear(),highlightLinks.clear()},onZoom:({k})=>{const scale=2*k,scaledOpacity=Math.max((scale-1)/3.75,0),textColor=hexToRgb(colors.text,scaledOpacity);nodes.forEach((node=>{node.textColor=textColor}))},nodeCanvasObject:(node,ctx,globalScale)=>{const label=node.id,fontSize=12/globalScale;if(ctx.font=`${fontSize}px Sans-Serif`,ctx.textAlign="center",ctx.textBaseline="middle",ctx.fillStyle=node?.textColor||colors.text,ctx.transition="opacity .3s",hoverNode){const hoverNodeNeighbors=(hoverNode.neighbors||[]).map((({id})=>id));node===hoverNode||hoverNodeNeighbors.includes(node.id)||(ctx.fillStyle=hexToRgb(colors.text)),node===hoverNode&&(ctx.font=18/globalScale+"px Sans-Serif")}ctx.fillText(label,node.x,node.y+8)}})};Graph.displayName="Graph",Graph.defaultProps={links:[],nodes:[],colors:{selected:colors_default().cyan[500],default:colors_default().gray[500],text:colors_default().gray[800],link:colors_default().gray[50]}},Graph.__docgenInfo={description:"",methods:[],displayName:"Graph",props:{links:{defaultValue:{value:"[]",computed:!1},required:!1},nodes:{defaultValue:{value:"[]",computed:!1},required:!1},colors:{defaultValue:{value:"{\n    selected: tailwindColors.cyan['500'],\n    default: tailwindColors.gray['500'],\n    text: tailwindColors.gray['800'],\n    link: tailwindColors.gray['50'],\n}",computed:!1},required:!1}}};const graph=Graph,graph_stories={title:"Molecules/Graph",component:graph},Template=args=>(0,jsx_runtime.jsx)(graph,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={...graph.defaultProps,nodes:[{id:"Myriel"},{id:"Napoleon"},{id:"Mlle.Baptistine"},{id:"Mme.Magloire"},{id:"CountessdeLo"},{id:"Geborand"},{id:"Champtercier"},{id:"Cravatte"},{id:"Count"},{id:"OldMan"},{id:"Labarre"},{id:"Valjean"},{id:"Marguerite"},{id:"Mme.deR"},{id:"Isabeau"},{id:"Gervais"},{id:"Tholomyes"},{id:"Listolier"},{id:"Fameuil"},{id:"Blacheville"},{id:"Favourite"},{id:"Dahlia"},{id:"Zephine"},{id:"Fantine"},{id:"Mme.Thenardier"},{id:"Thenardier"},{id:"Cosette"},{id:"Javert"},{id:"Fauchelevent"},{id:"Bamatabois"},{id:"Perpetue"},{id:"Simplice"},{id:"Scaufflaire"},{id:"Woman1"},{id:"Judge"},{id:"Champmathieu"},{id:"Brevet"},{id:"Chenildieu"},{id:"Cochepaille"},{id:"Pontmercy"},{id:"Boulatruelle"},{id:"Eponine"},{id:"Anzelma"},{id:"Woman2"},{id:"MotherInnocent"},{id:"Gribier"},{id:"Jondrette"},{id:"Mme.Burgon"},{id:"Gavroche"},{id:"Gillenormand"},{id:"Magnon"},{id:"Mlle.Gillenormand"},{id:"Mme.Pontmercy"},{id:"Mlle.Vaubois"},{id:"Lt.Gillenormand"},{id:"Marius"},{id:"BaronessT"},{id:"Mabeuf"},{id:"Enjolras"},{id:"Combeferre"},{id:"Prouvaire"},{id:"Feuilly"},{id:"Courfeyrac"},{id:"Bahorel"},{id:"Bossuet"},{id:"Joly"},{id:"Grantaire"},{id:"MotherPlutarch"},{id:"Gueulemer"},{id:"Babet"},{id:"Claquesous"},{id:"Montparnasse"},{id:"Toussaint"},{id:"Child1"},{id:"Child2"},{id:"Brujon"},{id:"Mme.Hucheloup"}],links:[{source:"Napoleon",target:"Myriel"},{source:"Mlle.Baptistine",target:"Myriel"},{source:"Mme.Magloire",target:"Myriel"},{source:"Mme.Magloire",target:"Mlle.Baptistine"},{source:"CountessdeLo",target:"Myriel"},{source:"Geborand",target:"Myriel"},{source:"Champtercier",target:"Myriel"},{source:"Cravatte",target:"Myriel"},{source:"Count",target:"Myriel"},{source:"OldMan",target:"Myriel"},{source:"Valjean",target:"Labarre"},{source:"Valjean",target:"Mme.Magloire"},{source:"Valjean",target:"Mlle.Baptistine"},{source:"Valjean",target:"Myriel"},{source:"Marguerite",target:"Valjean"},{source:"Mme.deR",target:"Valjean"},{source:"Isabeau",target:"Valjean"},{source:"Gervais",target:"Valjean"},{source:"Listolier",target:"Tholomyes"},{source:"Fameuil",target:"Tholomyes"},{source:"Fameuil",target:"Listolier"},{source:"Blacheville",target:"Tholomyes"},{source:"Blacheville",target:"Listolier"},{source:"Blacheville",target:"Fameuil"},{source:"Favourite",target:"Tholomyes"},{source:"Favourite",target:"Listolier"},{source:"Favourite",target:"Fameuil"},{source:"Favourite",target:"Blacheville"},{source:"Dahlia",target:"Tholomyes"},{source:"Dahlia",target:"Listolier"},{source:"Dahlia",target:"Fameuil"},{source:"Dahlia",target:"Blacheville"},{source:"Dahlia",target:"Favourite"},{source:"Zephine",target:"Tholomyes"},{source:"Zephine",target:"Listolier"},{source:"Zephine",target:"Fameuil"},{source:"Zephine",target:"Blacheville"},{source:"Zephine",target:"Favourite"},{source:"Zephine",target:"Dahlia"},{source:"Fantine",target:"Tholomyes"},{source:"Fantine",target:"Listolier"},{source:"Fantine",target:"Fameuil"},{source:"Fantine",target:"Blacheville"},{source:"Fantine",target:"Favourite"},{source:"Fantine",target:"Dahlia"},{source:"Fantine",target:"Zephine"},{source:"Fantine",target:"Marguerite"},{source:"Fantine",target:"Valjean"},{source:"Mme.Thenardier",target:"Fantine"},{source:"Mme.Thenardier",target:"Valjean"},{source:"Thenardier",target:"Mme.Thenardier"},{source:"Thenardier",target:"Fantine"},{source:"Thenardier",target:"Valjean"},{source:"Cosette",target:"Mme.Thenardier"},{source:"Cosette",target:"Valjean"},{source:"Cosette",target:"Tholomyes"},{source:"Cosette",target:"Thenardier"},{source:"Javert",target:"Valjean"},{source:"Javert",target:"Fantine"},{source:"Javert",target:"Thenardier"},{source:"Javert",target:"Mme.Thenardier"},{source:"Javert",target:"Cosette"},{source:"Fauchelevent",target:"Valjean"},{source:"Fauchelevent",target:"Javert"},{source:"Bamatabois",target:"Fantine"},{source:"Bamatabois",target:"Javert"},{source:"Bamatabois",target:"Valjean"},{source:"Perpetue",target:"Fantine"},{source:"Simplice",target:"Perpetue"},{source:"Simplice",target:"Valjean"},{source:"Simplice",target:"Fantine"},{source:"Simplice",target:"Javert"},{source:"Scaufflaire",target:"Valjean"},{source:"Woman1",target:"Valjean"},{source:"Woman1",target:"Javert"},{source:"Judge",target:"Valjean"},{source:"Judge",target:"Bamatabois"},{source:"Champmathieu",target:"Valjean"},{source:"Champmathieu",target:"Judge"},{source:"Champmathieu",target:"Bamatabois"},{source:"Brevet",target:"Judge"},{source:"Brevet",target:"Champmathieu"},{source:"Brevet",target:"Valjean"},{source:"Brevet",target:"Bamatabois"},{source:"Chenildieu",target:"Judge"},{source:"Chenildieu",target:"Champmathieu"},{source:"Chenildieu",target:"Brevet"},{source:"Chenildieu",target:"Valjean"},{source:"Chenildieu",target:"Bamatabois"},{source:"Cochepaille",target:"Judge"},{source:"Cochepaille",target:"Champmathieu"},{source:"Cochepaille",target:"Brevet"},{source:"Cochepaille",target:"Chenildieu"},{source:"Cochepaille",target:"Valjean"},{source:"Cochepaille",target:"Bamatabois"},{source:"Pontmercy",target:"Thenardier"},{source:"Boulatruelle",target:"Thenardier"},{source:"Eponine",target:"Mme.Thenardier"},{source:"Eponine",target:"Thenardier"},{source:"Anzelma",target:"Eponine"},{source:"Anzelma",target:"Thenardier"},{source:"Anzelma",target:"Mme.Thenardier"},{source:"Woman2",target:"Valjean"},{source:"Woman2",target:"Cosette"},{source:"Woman2",target:"Javert"},{source:"MotherInnocent",target:"Fauchelevent"},{source:"MotherInnocent",target:"Valjean"},{source:"Gribier",target:"Fauchelevent"},{source:"Mme.Burgon",target:"Jondrette"},{source:"Gavroche",target:"Mme.Burgon"},{source:"Gavroche",target:"Thenardier"},{source:"Gavroche",target:"Javert"},{source:"Gavroche",target:"Valjean"},{source:"Gillenormand",target:"Cosette"},{source:"Gillenormand",target:"Valjean"},{source:"Magnon",target:"Gillenormand"},{source:"Magnon",target:"Mme.Thenardier"},{source:"Mlle.Gillenormand",target:"Gillenormand"},{source:"Mlle.Gillenormand",target:"Cosette"},{source:"Mlle.Gillenormand",target:"Valjean"},{source:"Mme.Pontmercy",target:"Mlle.Gillenormand"},{source:"Mme.Pontmercy",target:"Pontmercy"},{source:"Mlle.Vaubois",target:"Mlle.Gillenormand"},{source:"Lt.Gillenormand",target:"Mlle.Gillenormand"},{source:"Lt.Gillenormand",target:"Gillenormand"},{source:"Lt.Gillenormand",target:"Cosette"},{source:"Marius",target:"Mlle.Gillenormand"},{source:"Marius",target:"Gillenormand"},{source:"Marius",target:"Pontmercy"},{source:"Marius",target:"Lt.Gillenormand"},{source:"Marius",target:"Cosette"},{source:"Marius",target:"Valjean"},{source:"Marius",target:"Tholomyes"},{source:"Marius",target:"Thenardier"},{source:"Marius",target:"Eponine"},{source:"Marius",target:"Gavroche"},{source:"BaronessT",target:"Gillenormand"},{source:"BaronessT",target:"Marius"},{source:"Mabeuf",target:"Marius"},{source:"Mabeuf",target:"Eponine"},{source:"Mabeuf",target:"Gavroche"},{source:"Enjolras",target:"Marius"},{source:"Enjolras",target:"Gavroche"},{source:"Enjolras",target:"Javert"},{source:"Enjolras",target:"Mabeuf"},{source:"Enjolras",target:"Valjean"},{source:"Combeferre",target:"Enjolras"},{source:"Combeferre",target:"Marius"},{source:"Combeferre",target:"Gavroche"},{source:"Combeferre",target:"Mabeuf"},{source:"Prouvaire",target:"Gavroche"},{source:"Prouvaire",target:"Enjolras"},{source:"Prouvaire",target:"Combeferre"},{source:"Feuilly",target:"Gavroche"},{source:"Feuilly",target:"Enjolras"},{source:"Feuilly",target:"Prouvaire"},{source:"Feuilly",target:"Combeferre"},{source:"Feuilly",target:"Mabeuf"},{source:"Feuilly",target:"Marius"},{source:"Courfeyrac",target:"Marius"},{source:"Courfeyrac",target:"Enjolras"},{source:"Courfeyrac",target:"Combeferre"},{source:"Courfeyrac",target:"Gavroche"},{source:"Courfeyrac",target:"Mabeuf"},{source:"Courfeyrac",target:"Eponine"},{source:"Courfeyrac",target:"Feuilly"},{source:"Courfeyrac",target:"Prouvaire"},{source:"Bahorel",target:"Combeferre"},{source:"Bahorel",target:"Gavroche"},{source:"Bahorel",target:"Courfeyrac"},{source:"Bahorel",target:"Mabeuf"},{source:"Bahorel",target:"Enjolras"},{source:"Bahorel",target:"Feuilly"},{source:"Bahorel",target:"Prouvaire"},{source:"Bahorel",target:"Marius"},{source:"Bossuet",target:"Marius"},{source:"Bossuet",target:"Courfeyrac"},{source:"Bossuet",target:"Gavroche"},{source:"Bossuet",target:"Bahorel"},{source:"Bossuet",target:"Enjolras"},{source:"Bossuet",target:"Feuilly"},{source:"Bossuet",target:"Prouvaire"},{source:"Bossuet",target:"Combeferre"},{source:"Bossuet",target:"Mabeuf"},{source:"Bossuet",target:"Valjean"},{source:"Joly",target:"Bahorel"},{source:"Joly",target:"Bossuet"},{source:"Joly",target:"Gavroche"},{source:"Joly",target:"Courfeyrac"},{source:"Joly",target:"Enjolras"},{source:"Joly",target:"Feuilly"},{source:"Joly",target:"Prouvaire"},{source:"Joly",target:"Combeferre"},{source:"Joly",target:"Mabeuf"},{source:"Joly",target:"Marius"},{source:"Grantaire",target:"Bossuet"},{source:"Grantaire",target:"Enjolras"},{source:"Grantaire",target:"Combeferre"},{source:"Grantaire",target:"Courfeyrac"},{source:"Grantaire",target:"Joly"},{source:"Grantaire",target:"Gavroche"},{source:"Grantaire",target:"Bahorel"},{source:"Grantaire",target:"Feuilly"},{source:"Grantaire",target:"Prouvaire"},{source:"MotherPlutarch",target:"Mabeuf"},{source:"Gueulemer",target:"Thenardier"},{source:"Gueulemer",target:"Valjean"},{source:"Gueulemer",target:"Mme.Thenardier"},{source:"Gueulemer",target:"Javert"},{source:"Gueulemer",target:"Gavroche"},{source:"Gueulemer",target:"Eponine"},{source:"Babet",target:"Thenardier"},{source:"Babet",target:"Gueulemer"},{source:"Babet",target:"Valjean"},{source:"Babet",target:"Mme.Thenardier"},{source:"Babet",target:"Javert"},{source:"Babet",target:"Gavroche"},{source:"Babet",target:"Eponine"},{source:"Claquesous",target:"Thenardier"},{source:"Claquesous",target:"Babet"},{source:"Claquesous",target:"Gueulemer"},{source:"Claquesous",target:"Valjean"},{source:"Claquesous",target:"Mme.Thenardier"},{source:"Claquesous",target:"Javert"},{source:"Claquesous",target:"Eponine"},{source:"Claquesous",target:"Enjolras"},{source:"Montparnasse",target:"Javert"},{source:"Montparnasse",target:"Babet"},{source:"Montparnasse",target:"Gueulemer"},{source:"Montparnasse",target:"Claquesous"},{source:"Montparnasse",target:"Valjean"},{source:"Montparnasse",target:"Gavroche"},{source:"Montparnasse",target:"Eponine"},{source:"Montparnasse",target:"Thenardier"},{source:"Toussaint",target:"Cosette"},{source:"Toussaint",target:"Javert"},{source:"Toussaint",target:"Valjean"},{source:"Child1",target:"Gavroche"},{source:"Child2",target:"Gavroche"},{source:"Child2",target:"Child1"},{source:"Brujon",target:"Babet"},{source:"Brujon",target:"Gueulemer"},{source:"Brujon",target:"Thenardier"},{source:"Brujon",target:"Gavroche"},{source:"Brujon",target:"Eponine"},{source:"Brujon",target:"Claquesous"},{source:"Brujon",target:"Montparnasse"},{source:"Mme.Hucheloup",target:"Bossuet"},{source:"Mme.Hucheloup",target:"Joly"},{source:"Mme.Hucheloup",target:"Grantaire"},{source:"Mme.Hucheloup",target:"Bahorel"},{source:"Mme.Hucheloup",target:"Courfeyrac"},{source:"Mme.Hucheloup",target:"Gavroche"},{source:"Mme.Hucheloup",target:"Enjolras"}],colors:{...graph.defaultProps.colors,default:"#7B7D8C",link:"#CBD5E1",selected:"#7B6DD6"}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Graph {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);