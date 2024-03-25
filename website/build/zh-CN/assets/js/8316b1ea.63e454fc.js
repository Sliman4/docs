"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2250],{6138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(85893),r=n(11151);const o={},s=void 0,c={id:"primitives/ft/web-app/attach-to-call",title:"attach-to-call",description:"Example response",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/ft/web-app/attach-to-call.md",sourceDirName:"7.primitives/ft/web-app",slug:"/primitives/ft/web-app/attach-to-call",permalink:"/zh-CN/primitives/ft/web-app/attach-to-call",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/ft/web-app/attach-to-call.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{}},i={},l=[];function p(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst TOKEN_CONTRACT_ADDRESS = "token.v2.ref-finance.near";\nconst wallet = new Wallet({ createAccessKeyFor: TOKEN_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'ft_transfer_call\',\n  args: {\n    receiver_id: "v2.ref-finance.near",\n    amount: "100000000000000000",\n    msg: "",\n  },\n  contractId: TOKEN_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: 1\n});\n'})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Example response"}),(0,a.jsx)("p",{children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:"'100000000000000000'\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["The ",(0,a.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var a=n(67294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);