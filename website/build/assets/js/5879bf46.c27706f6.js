"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6577],{99759:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>r});var o=s(85893),t=s(11151);const c={id:"token-loss",title:"Avoiding Token Loss",sidebar_label:"Avoiding Token Loss"},i=void 0,a={id:"concepts/basics/token-loss",title:"Avoiding Token Loss",description:"Careful! Losing tokens means losing money!",source:"@site/../docs/1.concepts/basics/token-loss.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/token-loss",permalink:"/concepts/basics/token-loss",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/token-loss.md",tags:[],version:"current",lastUpdatedBy:"Damian Parrino",lastUpdatedAt:1702311741e3,frontMatter:{id:"token-loss",title:"Avoiding Token Loss",sidebar_label:"Avoiding Token Loss"},sidebar:"concepts",previous:{title:"Tokens",permalink:"/concepts/basics/tokens"},next:{title:"Storage Staking",permalink:"/concepts/storage/storage-staking"}},l={},r=[{value:"Improper key management",id:"improper-key-management",level:2},{value:"Loss of <code>FullAccess</code> key",id:"loss-of-fullaccess-key",level:3},{value:"Loss of <code>FunctionCall</code> access key",id:"loss-of-functioncall-access-key",level:3},{value:"Refunding deleted accounts",id:"refunding-deleted-accounts",level:2},{value:"Deleting account with non-existent beneficiary",id:"deleting-account-with-non-existent-beneficiary",level:3},{value:"Account with zero balance is garbage-collected, just before it receives refund",id:"account-with-zero-balance-is-garbage-collected-just-before-it-receives-refund",level:3},{value:"Failed function calls in batches",id:"failed-function-calls-in-batches",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Careful! Losing tokens means losing money!"})}),"\n",(0,o.jsx)(n.p,{children:"Token loss is possible under multiple scenarios. These scenarios can be grouped into a few related classes:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Improper key management"}),"\n",(0,o.jsx)(n.li,{children:"Refunding deleted accounts"}),"\n",(0,o.jsx)(n.li,{children:"Failed function calls in batches"}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"improper-key-management",children:"Improper key management"}),"\n",(0,o.jsx)(n.p,{children:"Improper key management may lead to token loss. Mitigating such scenarios may be done by issuing backup keys\nallowing for recovery of accounts whose keys have been lost or deleted."}),"\n",(0,o.jsxs)(n.h3,{id:"loss-of-fullaccess-key",children:["Loss of ",(0,o.jsx)(n.code,{children:"FullAccess"})," key"]}),"\n",(0,o.jsxs)(n.p,{children:["A user may lose their private key of a ",(0,o.jsx)(n.code,{children:"FullAccess"})," key pair for an account with no other keys.\nNo one will be able to recover the funds. Funds will remain locked in the account forever."]}),"\n",(0,o.jsxs)(n.h3,{id:"loss-of-functioncall-access-key",children:["Loss of ",(0,o.jsx)(n.code,{children:"FunctionCall"})," access key"]}),"\n",(0,o.jsxs)(n.p,{children:["An account may have its one and only ",(0,o.jsx)(n.code,{children:"FunctionCall"})," access key deleted.\nNo one will be able to recover the funds. Funds will remain locked in the account forever."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"refunding-deleted-accounts",children:"Refunding deleted accounts"}),"\n",(0,o.jsx)(n.p,{children:"When a refund receipt is issued for an account, if that account no longer exists, the funds will be dispersed among\nvalidators proportional to their stake in the current epoch."}),"\n",(0,o.jsx)(n.h3,{id:"deleting-account-with-non-existent-beneficiary",children:"Deleting account with non-existent beneficiary"}),"\n",(0,o.jsx)(n.p,{children:"When you delete an account, you must assign a beneficiary.\nOnce deleted, a transfer receipt is generated and sent to the beneficiary account.\nIf the beneficiary account does not exist, a refund receipt will be generated and sent back to the original account.\nSince the original account has already been deleted, the funds will be dispersed among validators."}),"\n",(0,o.jsx)(n.h3,{id:"account-with-zero-balance-is-garbage-collected-just-before-it-receives-refund",children:"Account with zero balance is garbage-collected, just before it receives refund"}),"\n",(0,o.jsxs)(n.p,{children:["If an account ",(0,o.jsx)(n.code,{children:"A"})," transfers all of its funds to another account ",(0,o.jsx)(n.code,{children:"B"})," and account ",(0,o.jsx)(n.code,{children:"B"})," does not exist,\na refund receipt will be generated for account ",(0,o.jsx)(n.code,{children:"A"}),". During the period of this round trip,\naccount ",(0,o.jsx)(n.code,{children:"A"})," is vulnerable to deletion by garbage collection activities on the network.\nIf account ",(0,o.jsx)(n.code,{children:"A"})," is deleted before the refund receipt arrives, the funds will be dispersed among validators."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"failed-function-calls-in-batches",children:"Failed function calls in batches"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"When designing a smart contract, you should always consider the asynchronous nature of NEAR Protocol."})}),"\n",(0,o.jsxs)(n.p,{children:["If a contract function ",(0,o.jsx)(n.code,{children:"f1"})," calls two (or more) other functions ",(0,o.jsx)(n.code,{children:"f2"})," and ",(0,o.jsx)(n.code,{children:"f3"}),", and at least one of these functions, ",(0,o.jsx)(n.code,{children:"f2"})," and ",(0,o.jsx)(n.code,{children:"f3"})," fails, then tokens will be refunded from the function that failed, but tokens will be appropriately credited to the function(s) which succeed."]}),"\n",(0,o.jsx)(n.p,{children:"The successful call's tokens may be considered lost depending on your use case if a single failure in the batch means the whole batch failed."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var o=s(67294);const t={},c=o.createContext(t);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);