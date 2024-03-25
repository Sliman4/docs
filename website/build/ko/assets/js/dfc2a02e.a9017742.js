"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4179],{22599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(85893),s=n(11151);const r={id:"checklist",title:"\u2705 \uccb4\ud06c\ub9ac\uc2a4\ud2b8"},o=void 0,c={id:"develop/contracts/security/checklist",title:"\u2705 \uccb4\ud06c\ub9ac\uc2a4\ud2b8",description:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/contracts/security/checklist.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/checklist",permalink:"/ko/develop/contracts/security/checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/checklist.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",frontMatter:{id:"checklist",title:"\u2705 \uccb4\ud06c\ub9ac\uc2a4\ud2b8"},sidebar:"build",previous:{title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c",permalink:"/ko/develop/contracts/crosscontract"},next:{title:"\uc9c1\ub82c\ud654\uc5d0 \ub300\ud55c \ucc38\uace0 \uc0ac\ud56d",permalink:"/ko/develop/contracts/serialization"}},l={},d=[{value:"\uad6c\uc870",id:"\uad6c\uc870",level:2},{value:"\ud658\uacbd",id:"\ud658\uacbd",level:2},{value:"\uc2a4\ud1a0\ub9ac\uc9c0",id:"\uc2a4\ud1a0\ub9ac\uc9c0",level:2},{value:"Action",id:"action",level:2},{value:"\ucf5c\ubc31",id:"\ucf5c\ubc31",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user."}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.mdxAdmonitionTitle,{children:["Check our ",(0,i.jsx)(t.a,{href:"/develop/contracts/security/welcome",children:"security articles"})," to understand how to improve the security of your contract. :::"]}),(0,i.jsx)(t.hr,{}),(0,i.jsx)(t.h2,{id:"\uad6c\uc870",children:"\uad6c\uc870"}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["All private methods are decorated as ",(0,i.jsx)(t.code,{children:"private"}),"."]}),"\n"]}),(0,i.jsx)(t.h2,{id:"\ud658\uacbd",children:"\ud658\uacbd"}),(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"predecessor"}),"\uc640 ",(0,i.jsx)(t.code,{children:"signer"}),"\ub294 \uc804\uccb4 \ucee8\ud2b8\ub799\ud2b8 \ub0b4\uc5d0\uc11c \uc62c\ubc14\ub974\uac8c \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n"]}),(0,i.jsx)(t.h2,{id:"\uc2a4\ud1a0\ub9ac\uc9c0",children:"\uc2a4\ud1a0\ub9ac\uc9c0"}),(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"\uc0c1\ud0dc\uac00 \ucd94\uac00\ub420 \ub54c\ub9c8\ub2e4 \uc774\ub97c \uac10\ub2f9\ud560 \uc218 \uc788\ub294 \ucda9\ubd84\ud55c \uc794\uace0\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.li,{children:"\ubaa8\ub4e0 \uceec\ub809\uc158 (\uc608: \ubca1\ud130, \ub9f5, \ud2b8\ub9ac \ub4f1)\uc5d0\ub294 \uace0\uc720\ud55c ID\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(t.li,{children:["\uc5b8\ub354\ud50c\ub85c\uc6b0 \ubc0f \uc624\ubc84\ud50c\ub85c\uc6b0\ub97c \uccb4\ud06c\ud558\uc138\uc694! Rust\uc5d0\uc11c\ub294 ",(0,i.jsx)(t.code,{children:"Cargo.toml"}),"\uc5d0 ",(0,i.jsx)(t.code,{children:"overflow-checks = true"})," \ud50c\ub798\uadf8\ub97c \ucd94\uac00\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n"]}),(0,i.jsx)(t.h2,{id:"action",children:"Action"}),(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:"\ub3c8\uc744 \ubcf4\ub0bc \ub54c, \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \ucda9\ub2f9\ud560 \ub9cc\ud07c \uc790\uae08\uc744 \ucda9\ubd84\ud788 \ub0a8\uaca8 \ub450\uc5c8\uc2b5\ub2e4."}),"\n",(0,i.jsxs)(t.li,{children:["\uc0ac\uc6a9\uc790\uc758 \uc790\uae08\uc744 \ucd94\uc801\ud558\ub294 \uacbd\uc6b0, \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc774\ub97c \ub2e4\uc2dc \ubcf4\ub0b4\uae30 \uc804\uc5d0 ",(0,i.jsx)(t.strong,{children:"\ube7c \ub450\uc5c8\uc2b5\ub2c8\ub2e4"}),"."]}),"\n"]}),(0,i.jsx)(t.h2,{id:"\ucf5c\ubc31",children:"\ucf5c\ubc31"}),(0,i.jsxs)(t.ol,{start:"8",children:["\n",(0,i.jsxs)(t.li,{children:["\ubaa8\ub4e0 \ube44\uacf5\uac1c \ucf5c\ubc31\uc740 ",(0,i.jsx)(t.code,{children:"private"}),"\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(t.li,{children:"\ubaa8\ub4e0 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc5d0\ub294 \uc624\ub958\ub97c \ud655\uc778\ud558\uace0 \ud544\uc694\ud55c \uacbd\uc6b0 \uc0c1\ud0dc\ub97c \ub864\ubc31\ud558\ub294 \ucf5c\ubc31\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(t.li,{children:["\ubaa8\ub4e0 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc5d0\ub294 \uc624\ub958\ub97c \ud655\uc778\ud558\uace0 \ud544\uc694\ud55c \uacbd\uc6b0 ",(0,i.jsx)(t.code,{children:"predecessor"}),"\uc5d0\uac8c \ub3c8\uc744 \ubc18\ud658\ud558\ub294 \ucf5c\ubc31\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(t.li,{children:"\ubaa8\ub4e0 \ucf5c\ubc31\uc5d0\ub294 \uc644\uc804\ud788 \uc2e4\ud589\ud558\uae30\uc5d0 \ucda9\ubd84\ud55c \uac00\uc2a4\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.li,{children:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uacfc \ucf5c\ubc31 \uc0ac\uc774\uc5d0 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc545\uc6a9 \uac00\ub2a5\ud55c \uc0c1\ud0dc\ub85c \ub0a8\uc544 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var i=n(67294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);