"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1321],{43503:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(85893),r=n(11151);const s={},a=void 0,c={id:"primitives/linkdrop/bos/create-ft-drop",title:"create-ft-drop",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/bos/create-ft-drop.md",sourceDirName:"7.primitives/linkdrop/bos",slug:"/primitives/linkdrop/bos/create-ft-drop",permalink:"/ko/primitives/linkdrop/bos/create-ft-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/bos/create-ft-drop.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",frontMatter:{}},i={},d=[];function p(t){const e={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'const keypomContract = "v2.keypom.near";\nconst ftContract = "ft.primitives.near";\nconst dropAmount = "10000000000000000000000";\n\nNear.call([\n  {\n    contractName: keypomContract,\n    methodName: "create_drop",\n    args: {\n      public_keys: state.publicKeys,\n      deposit_per_use: dropAmount,\n      ftData: {\n\t    \tcontractId: ftContract,\n\t    \tsenderId: accountId,\n\t    \t// This balance per use is balance of human readable FTs per use. \n\t    \tamount: "1"\n        // Alternatively, you could use absoluteAmount, which is dependant on the decimals value of the FT\n        // ex. if decimals of an ft = 8, then 1 FT token would be absoluteAmount = 100000000\n\t    },\n    },\n    deposit: "23000000000000000000000", // state.publicKeys.length * dropAmount + 3000000000000000000000,\n    gas: "100000000000000"\n  },\n]);\n'})})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var o=n(67294);const r={},s=o.createContext(r);function a(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);