"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9064],{56246:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(85893),o=r(11151),i=r(42352);const s={id:"markdown",title:"Markdown Viewer",sidebar_label:"Markdown"},a=void 0,d={id:"bos/components/markdown",title:"Markdown Viewer",description:"Markdown is a built-in component that enables to render Markdown. To use this feature, simply use the Markdown component:",source:"@site/../docs/bos/components/markdown.md",sourceDirName:"bos/components",slug:"/bos/components/markdown",permalink:"/vi/bos/components/markdown",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/components/markdown.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"9 thg 12, 2023",frontMatter:{id:"markdown",title:"Markdown Viewer",sidebar_label:"Markdown"},sidebar:"integrate",previous:{title:"Files",permalink:"/vi/bos/components/files"},next:{title:"OverlayTrigger",permalink:"/vi/bos/components/overlay-trigger"}},c={},l=[{value:"Example",id:"example",level:3},{value:"Markdown Editor",id:"markdown-editor",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Markdown"})," is a built-in component that enables to render Markdown. To use this feature, simply use the ",(0,t.jsx)(n.code,{children:"Markdown"})," component:"]}),"\n",(0,t.jsx)("hr",{class:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(i.W,{id:"1",height:"120px",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'return (\n  <>\n    {["Example **markdown** content", "Some _other_ example"].map((placement) => (\n      <div class="container border border-info pt-3  text-center">\n        <Markdown text={placement} />\n      </div>\n    ))}\n  </>\n);\n'})})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"markdown-editor",children:"Markdown Editor"}),"\n",(0,t.jsxs)(n.p,{children:["The user can input static text, as demonstrated above. However, for a more robust experience, checkout this component that also contains a ",(0,t.jsx)(n.a,{href:"https://near.social/#/mob.near/widget/MarkdownEditorIframeExample",children:"Markdown Editor"}),". Hit the ",(0,t.jsx)(n.code,{children:"View Source"})," Button to see how this editor was created."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/XJO8tEz.png",alt:""})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},42352:(e,n,r)=>{r.d(n,{W:()=>a});var t=r(67294),o=r(16729),i=r(91262),s=r(85893);function a(e){var n=e.children,a=e.id,d=void 0===a?1:a,c=e.height,l=void 0===c?"160px":c;return(0,s.jsx)(i.Z,{fallback:(0,s.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(k){}var i=r(58613),a=i.Widget,c=i.useInitNear,h=r(2302).ZP,p=(0,t.useState)(e),m=p[0],u=p[1],x=c().initNear,w=(0,o.O)().selector;return(0,t.useEffect)((function(){x&&w&&x({networkId:"mainnet",selector:w})}),[x,w]),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{class:"monaco",children:(0,s.jsx)(h,{height:l,value:m,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return u(e)}})}),(0,s.jsxs)("div",{class:"code_iframe",children:[(0,s.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,s.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,s.jsx)("hr",{class:"preview-border"}),(0,s.jsx)("div",{class:"bootstrap-scope",children:(0,s.jsx)("div",{class:"vm-widget",children:(0,s.jsx)(a,{code:m},d)})})]})]})}})}}}]);