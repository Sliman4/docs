"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8733],{70037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151),o=t(42352);const r={id:"widgets",title:"Widget"},d=void 0,c={id:"bos/components/widgets",title:"Widget",description:"The predefined component Widget allows you to include an existing component into your code, thus enabling to create complex applications by composing components.",source:"@site/../docs/bos/components/widget.md",sourceDirName:"bos/components",slug:"/bos/components/widgets",permalink:"/zh-CN/bos/components/widgets",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/components/widget.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"2023\u5e7412\u67089\u65e5",frontMatter:{id:"widgets",title:"Widget"},sidebar:"integrate",previous:{title:"Components",permalink:"/zh-CN/bos/components"},next:{title:"Image Uploader",permalink:"/zh-CN/bos/components/ipfs"}},a={},l=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The predefined component ",(0,s.jsx)(n.code,{children:"Widget"})," allows you to include an existing component into your code, thus enabling to create complex applications by composing components."]}),"\n",(0,s.jsx)(o.W,{id:"1",height:"220px",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const user = "gagdiez.near";\nconst props = { name: "Anna" };\n\nreturn (\n  <>\n    <div class="container ">\n\n      <h3> Composing Widgets </h3>\n      <p> Widgets can be composed </p>\n      <hr />\n\n      <Widget src={`${user}/widget/Greetings`} props={props} />\n    </div>\n  </>\n);\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},42352:(e,n,t)=>{t.d(n,{W:()=>d});var s=t(67294),i=t(16729),o=t(91262),r=t(85893);function d(e){var n=e.children,d=e.id,c=void 0===d?1:d,a=e.height,l=void 0===a?"160px":a;return(0,r.jsx)(o.Z,{fallback:(0,r.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(b){}var o=t(58613),d=o.Widget,a=o.useInitNear,p=t(2302).ZP,h=(0,s.useState)(e),g=h[0],m=h[1],u=a().initNear,x=(0,i.O)().selector;return(0,s.useEffect)((function(){u&&x&&u({networkId:"mainnet",selector:x})}),[u,x]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{class:"monaco",children:(0,r.jsx)(p,{height:l,value:g,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return m(e)}})}),(0,r.jsxs)("div",{class:"code_iframe",children:[(0,r.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,r.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,r.jsx)("hr",{class:"preview-border"}),(0,r.jsx)("div",{class:"bootstrap-scope",children:(0,r.jsx)("div",{class:"vm-widget",children:(0,r.jsx)(d,{code:g},c)})})]})]})}})}}}]);