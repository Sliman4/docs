"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9572],{51333:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=s(85893),c=s(11151);const o={id:"one-yocto",title:"Ensure it is the User (1y\u24c3)"},a=void 0,i={id:"develop/contracts/security/one-yocto",title:"Ensure it is the User (1y\u24c3)",description:"NEAR uses a system of Access Keys to simplify handling accounts. There are basically two type of keys: Full Access, that have full control over an account (i.e. can perform all actions), and Function Call, that only have permission to call a specified smart contract's method(s) that do not attach \u24c3 as a deposit.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.develop/contracts/security/one_yocto.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/one-yocto",permalink:"/vi/develop/contracts/security/one-yocto",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/one_yocto.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"one-yocto",title:"Ensure it is the User (1y\u24c3)"},sidebar:"build",previous:{title:"Cross-Contract Calls",permalink:"/vi/develop/contracts/security/callbacks"},next:{title:"Sybil Attacks",permalink:"/vi/develop/contracts/security/sybil"}},r={},l=[];function d(e){const t={a:"a",code:"code",em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["NEAR uses a system of ",(0,n.jsx)(t.a,{href:"../../../1.concepts/basics/accounts/access-keys.md",children:"Access Keys"})," to simplify handling accounts. There are basically two type of keys: ",(0,n.jsx)(t.code,{children:"Full Access"}),", that have full control over an account (i.e. can perform all ",(0,n.jsx)(t.a,{href:"/vi/develop/contracts/actions",children:"actions"}),"), and ",(0,n.jsx)(t.code,{children:"Function Call"}),", that only have permission to call a specified smart contract's method(s) that ",(0,n.jsx)(t.em,{children:"do not"})," attach \u24c3 as a deposit."]}),"\n",(0,n.jsxs)(t.p,{children:["When a user ",(0,n.jsx)(t.a,{href:"/vi/develop/integrate/frontend#user-sign-in",children:"signs in on a website"})," to interact with your contract, what actually happens is that a ",(0,n.jsx)(t.code,{children:"Function Call"})," key is created and stored in the website. Since the website has access to the ",(0,n.jsx)(t.code,{children:"Function Call"})," key, it can use it to call the authorized methods as it pleases. While this is very user friendly for most cases, it is important to be careful in scenarios involving transferring of valuable assets like ",(0,n.jsx)(t.a,{href:"/vi/develop/relevant-contracts/nft",children:"NFTs"})," or ",(0,n.jsx)(t.a,{href:"/vi/develop/relevant-contracts/ft",children:"FTs"}),". In such cases, you need to ensure that the person asking for the asset to be transfer is ",(0,n.jsx)(t.strong,{children:"actually the user"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["One direct and inexpensive way to ensure that the user is the one calling is by requiring to attach ",(0,n.jsx)(t.code,{children:"1 y\u24c3"}),". In this case, the user will be redirected to the wallet and be asked to accept the transaction. This is because, once again, only the ",(0,n.jsx)(t.code,{children:"Full Access"})," key can be used to send NEAR. Since the ",(0,n.jsx)(t.code,{children:"Full Access"})," key is only in the user's wallet, you can trust that a transaction with ",(0,n.jsx)(t.code,{children:"1 y\u24c3"})," was made by the user."]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>a});var n=s(67294);const c={},o=n.createContext(c);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);