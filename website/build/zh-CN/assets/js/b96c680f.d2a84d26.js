"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8304],{60150:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=s(85893),t=s(11151),i=s(42352);const o={id:"overlay-trigger",title:"OverlayTrigger",sidebar_label:"OverlayTrigger"},a=void 0,l={id:"bos/components/overlay-trigger",title:"OverlayTrigger",description:"The OverlayTrigger is used to display a message or icon when the mouse is over a DOM element. Common use cases could be like a popover or a tooltip.",source:"@site/../docs/bos/components/overlayTrigger.md",sourceDirName:"bos/components",slug:"/bos/components/overlay-trigger",permalink:"/zh-CN/bos/components/overlay-trigger",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/components/overlayTrigger.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"2023\u5e7412\u67089\u65e5",frontMatter:{id:"overlay-trigger",title:"OverlayTrigger",sidebar_label:"OverlayTrigger"},sidebar:"integrate",previous:{title:"Markdown",permalink:"/zh-CN/bos/components/markdown"},next:{title:"InfiniteScroll",permalink:"/zh-CN/bos/components/infinite-scroll"}},d={},h=[{value:"Example",id:"example",level:3}];function c(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"OverlayTrigger"})," is used to display a message or icon when the mouse is over a DOM element. Common use cases could be like a popover or a tooltip."]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(i.W,{id:"1",height:"200px",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'State.init({\n  show: false,\n});\n\nconst handleOnMouseEnter = () => {\n  State.update({ show: true });\n};\nconst handleOnMouseLeave = () => {\n  State.update({ show: false });\n};\n\nconst overlay = (\n  <div\n    className=\'border m-3 p-3 rounded-4 bg-white shadow\'\n    style={{ maxWidth: "24em", zIndex: 1070 }}\n    onMouseEnter={handleOnMouseEnter}\n    onMouseLeave={handleOnMouseLeave}\n  >\n    This is the overlay Message\n  </div>\n);\n\nreturn (\n  <OverlayTrigger\n    show={state.show}\n    trigger={["hover", "focus"]}\n    delay={{ show: 250, hide: 300 }}\n    placement=\'auto\'\n    overlay={overlay}\n  >\n    <span\n      className=\'d-inline-flex\'\n      style={{ backgroundColor: "gray", borderRadius: "10px", padding: "10px" }}\n      onMouseEnter={handleOnMouseEnter}\n      onMouseLeave={handleOnMouseLeave}\n    >\n      Place Mouse Over Me\n    </span>\n  </OverlayTrigger>\n);\n'})})}),"\n",(0,r.jsx)(n.p,{children:"The OverlayTrigger component has several props that allow you to customize its behavior:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Prop"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"show"})}),(0,r.jsx)(n.td,{children:"A boolean value that determines whether the overlay is currently visible or not."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"trigger"})}),(0,r.jsxs)(n.td,{children:["An array of events that trigger the display of the overlay. In this example, the ",(0,r.jsx)(n.code,{children:"trigger"})," prop is set to ",(0,r.jsx)(n.code,{children:'["hover", "focus"]'}),", which means that the overlay will be displayed when the user hovers over or focuses on the element."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"delay"})}),(0,r.jsxs)(n.td,{children:["An object that specifies the delay before the overlay is displayed or hidden. In this example, the ",(0,r.jsx)(n.code,{children:"delay"})," prop is set to ",(0,r.jsx)(n.code,{children:"{ show: 250, hide: 300 }"}),", which means that the overlay will be displayed after a 250-millisecond delay and hidden after a 300-millisecond delay."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"placement"})}),(0,r.jsxs)(n.td,{children:["A string that specifies the position of the overlay relative to the trigger element. In this example, the ",(0,r.jsx)(n.code,{children:"placement"})," prop is set to ",(0,r.jsx)(n.code,{children:'"auto"'}),", which means that the position will be automatically determined based on available space."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"overlay"})}),(0,r.jsxs)(n.td,{children:["The content that will be displayed in the overlay. In this example, the ",(0,r.jsx)(n.code,{children:"overlay"})," prop is set to a ",(0,r.jsx)(n.code,{children:"<div>"}),' element containing the message "This is the overlay message."']})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},42352:(e,n,s)=>{s.d(n,{W:()=>a});var r=s(67294),t=s(16729),i=s(91262),o=s(85893);function a(e){var n=e.children,a=e.id,l=void 0===a?1:a,d=e.height,h=void 0===d?"160px":d;return(0,o.jsx)(i.Z,{fallback:(0,o.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(u){}var i=s(58613),a=i.Widget,d=i.useInitNear,c=s(2302).ZP,p=(0,r.useState)(e),v=p[0],g=p[1],x=d().initNear,m=(0,t.O)().selector;return(0,r.useEffect)((function(){x&&m&&x({networkId:"mainnet",selector:m})}),[x,m]),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{class:"monaco",children:(0,o.jsx)(c,{height:h,value:v,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return g(e)}})}),(0,o.jsxs)("div",{class:"code_iframe",children:[(0,o.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,o.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,o.jsx)("hr",{class:"preview-border"}),(0,o.jsx)("div",{class:"bootstrap-scope",children:(0,o.jsx)("div",{class:"vm-widget",children:(0,o.jsx)(a,{code:v},l)})})]})]})}})}}}]);