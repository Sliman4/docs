"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2783],{72991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(85893),o=t(11151);const r={},a=void 0,i={id:"primitives/dex/bos/swap",title:"swap",description:"Example response",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/dex/bos/swap.md",sourceDirName:"7.primitives/dex/bos",slug:"/primitives/dex/bos/swap",permalink:"/zh-CN/primitives/dex/bos/swap",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dex/bos/swap.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{}},c={},d=[];function p(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const ammContract = "v2.ref-finance.near";\nconst result = Near.call(\n  ammContract,\n  "swap",\n  {\n    actions: [\n      {\n        pool_id: 79,\n        token_in: "token.v2.ref-finance.near",\n        token_out: "wrap.near",\n        amount_in: "100000000000000000",\n        min_amount_out: "1",\n      },\n    ],\n  },\n  300000000000000,\n  1\n);\n'})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Example response"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"5019606679394603179450"\n'})})]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(67294);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);