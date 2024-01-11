"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[728],{96661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=n(85893),a=n(11151);const c={id:"smartcontract",title:"Smart Contract"},o=void 0,r={id:"concepts/basics/accounts/smartcontract",title:"Smart Contract",description:"Smart contracts are pieces of executable code stored in the account's state that have their own storage, and perform transactions in the account's name.",source:"@site/../docs/1.concepts/basics/accounts/smartcontract.md",sourceDirName:"1.concepts/basics/accounts",slug:"/concepts/basics/accounts/smartcontract",permalink:"/ko/concepts/basics/accounts/smartcontract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/accounts/smartcontract.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1675255683,formattedLastUpdatedAt:"2023\ub144 2\uc6d4 1\uc77c",frontMatter:{id:"smartcontract",title:"Smart Contract"},sidebar:"concepts",previous:{title:"Access Keys",permalink:"/ko/concepts/basics/accounts/access-keys"},next:{title:"State",permalink:"/ko/concepts/basics/accounts/state"}},i={},l=[{value:"Why Smart Contracts Matter",id:"why-smart-contracts-matter",level:2},{value:"Developing Contracts in NEAR",id:"developing-contracts-in-near",level:2},{value:"Advantages of NEAR Contracts",id:"advantages-of-near-contracts",level:2},{value:"1. Simple to Build",id:"1-simple-to-build",level:3},{value:"2. Simple to Maintain",id:"2-simple-to-maintain",level:3},{value:"3. Some Methods are Free to Call",id:"3-some-methods-are-free-to-call",level:3}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Smart contracts are pieces of ",(0,s.jsx)(t.strong,{children:"executable code"})," stored in the ",(0,s.jsx)(t.a,{href:"/ko/concepts/basics/accounts/state",children:"account's state"})," that have their own storage, and ",(0,s.jsx)(t.strong,{children:"perform transactions"})," in the account's name."]}),"\n",(0,s.jsx)(t.p,{children:"They are written in Javascript or Rust, and then compiled and deployed to an account so everyone can interact with them through their public methods."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"why-smart-contracts-matter",children:"Why Smart Contracts Matter"}),"\n",(0,s.jsxs)(t.p,{children:["Smart contracts enable to create ",(0,s.jsx)(t.strong,{children:"fully decentralized applications"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In fact, smart contracts enabled to create a multitude of ",(0,s.jsx)(t.a,{href:"https://awesomenear.com",children:"awesome apps"})," such as:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Decentralized Autonomous Organizations, where users create and vote proposals."}),"\n",(0,s.jsx)(t.li,{children:"Art Marketplaces, where users create and commercialize digital art pieces."}),"\n",(0,s.jsx)(t.li,{children:"Decentralized exchanges, where users can trade different currencies."}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"developing-contracts-in-near",children:"Developing Contracts in NEAR"}),"\n",(0,s.jsxs)(t.p,{children:["Developers can choose between using ",(0,s.jsx)(t.a,{href:"/ko/sdk/js/introduction",children:"Javascript"})," or ",(0,s.jsx)(t.a,{href:"/ko/sdk/rust/introduction",children:"Rust"})," to write smart contracts in NEAR."]}),"\n",(0,s.jsx)(t.p,{children:"Indistinctly from the language chosen, the NEAR SDK will help you to compile the contract into WebAssembly, from which point it can be deployed and executed on the NEAR platform."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["See how simple it is to build a contract in NEAR with our ",(0,s.jsx)(t.a,{href:"/ko/develop/quickstart-guide",children:(0,s.jsx)(t.strong,{children:"Quickstart Guide"})}),". You will spin-up your first dApp in a matter of seconds."]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"advantages-of-near-contracts",children:"Advantages of NEAR Contracts"}),"\n",(0,s.jsx)(t.h3,{id:"1-simple-to-build",children:"1. Simple to Build"}),"\n",(0,s.jsxs)(t.p,{children:["Thanks to our unique ",(0,s.jsx)(t.a,{href:"/ko/sdk/js/introduction",children:"Javascript SDK"})," and our ",(0,s.jsx)(t.a,{href:"/ko/develop/welcome",children:"vast documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"2-simple-to-maintain",children:"2. Simple to Maintain"}),"\n",(0,s.jsxs)(t.p,{children:["Since the contract's code is separated from ",(0,s.jsx)(t.a,{href:"/ko/concepts/basics/accounts/state",children:"its storage"}),", contracts of ",(0,s.jsx)(t.a,{href:"/ko/concepts/basics/accounts/access-keys#locked-accounts",children:"non-locked"})," account can ",(0,s.jsx)(t.strong,{children:"be updated"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"3-some-methods-are-free-to-call",children:"3. Some Methods are Free to Call"}),"\n",(0,s.jsxs)(t.p,{children:["Public methods that perform only read operations can be ",(0,s.jsx)(t.strong,{children:"called for free"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const a={},c=s.createContext(a);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);