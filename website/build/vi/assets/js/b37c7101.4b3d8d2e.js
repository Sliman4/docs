"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3602],{45599:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(85893),o=n(11151);const r={},i=void 0,c={id:"primitives/ft/bos/send",title:"send",description:"",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/7.primitives/ft/bos/send.md",sourceDirName:"7.primitives/ft/bos",slug:"/primitives/ft/bos/send",permalink:"/vi/primitives/ft/bos/send",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/ft/bos/send.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"28 thg 2, 2024",frontMatter:{}},a={},d=[];function u(t){const e={code:"code",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const tokenContract = "token.v2.ref-finance.near";\nNear.call(\n  tokenContract,\n  "ft_transfer",\n  {\n    receiver_id: "alice.near",\n    amount: "100000000000000000",\n  },\n  undefined,\n  1\n);\n'})})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>i});var s=n(67294);const o={},r=s.createContext(o);function i(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);