"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[210],{6579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(85893),r=n(11151);const a={sidebar_label:"Token Transfer"},o="Token Transfer flow",i={id:"concepts/data-flow/token-transfer-flow",title:"Token Transfer flow",description:"In the previous article we saw an example of token transfer between accounts found in different shards. That example was simplified and missed a few steps in the process. That was intentional, to keep the article and the video short yet explanatory, in order to give you a bigger picture for understanding concepts.",source:"@site/../docs/1.concepts/data-flow/token-transfer-flow.md",sourceDirName:"1.concepts/data-flow",slug:"/concepts/data-flow/token-transfer-flow",permalink:"/concepts/data-flow/token-transfer-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/data-flow/token-transfer-flow.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Bokobza",lastUpdatedAt:1717616263e3,frontMatter:{sidebar_label:"Token Transfer"},sidebar:"concepts",previous:{title:"NEAR Data Flow",permalink:"/concepts/data-flow/near-data-flow"},next:{title:"Tokens",permalink:"/concepts/basics/tokens"}},c={},d=[{value:"Token transfer between accounts found in different shards",id:"token-transfer-between-accounts-found-in-different-shards",level:2},{value:"Token transfer between accounts found on the same shard",id:"token-transfer-between-accounts-found-on-the-same-shard",level:2}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"token-transfer-flow",children:"Token Transfer flow"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"/concepts/data-flow/near-data-flow",children:"previous article"})," we saw an example of token transfer between accounts found in different shards. That example was simplified and missed a few steps in the process. That was intentional, to keep the article and the video short yet explanatory, in order to give you a bigger picture for understanding concepts."]}),"\n",(0,s.jsx)(t.p,{children:"In this article we're going to have a look at the same data flow, but in detail and we will consider two additional scenarios:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Token transfer between accounts found in different shards"}),"\n",(0,s.jsx)(t.li,{children:"Token transfer between accounts found in the same shard"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You may be asking what was missing in the previous explanation. The short answer is: ",(0,s.jsx)(t.strong,{children:"Gas Refunds"})," or simply ",(0,s.jsx)(t.strong,{children:"Refunds"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you don't know what ",(0,s.jsx)(t.strong,{children:"Gas"})," is, please ",(0,s.jsx)(t.a,{href:"https://docs.near.org/concepts/protocol/gas",children:"first read the article about Gas"})," from our docs."]}),"\n",(0,s.jsxs)(t.p,{children:["As for ",(0,s.jsx)(t.em,{children:"Refunds"}),", here's a quote from the ",(0,s.jsx)(t.a,{href:"https://docs.near.org/concepts/protocol/gas",children:"Gas"})," article:"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Attach extra gas; get refunded!"}),"\n",(0,s.jsx)(t.p,{children:"..."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If you attach more gas than needed, you'll get refunded"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"..."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["From NEAR Protocol docs ",(0,s.jsx)(t.a,{href:"https://docs.near.org/concepts/protocol/gas#attach-extra-gas-get-refunded",children:"Gas. Attach extra gas; get refunded!"})]})}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"What refunds mean in terms of data flow",type:"note",children:(0,s.jsx)(t.p,{children:"It means that literally every Transaction includes a refund."})}),"\n",(0,s.jsx)(t.p,{children:"OK, this should be enough for introduction, now let's move on to examples."}),"\n",(0,s.jsx)(t.h2,{id:"token-transfer-between-accounts-found-in-different-shards",children:"Token transfer between accounts found in different shards"}),"\n",(0,s.jsxs)(t.p,{children:["Basically it is an extension of the example from the ",(0,s.jsx)(t.a,{href:"/concepts/data-flow/near-data-flow",children:"NEAR Data Flow"})," article."]}),"\n",(0,s.jsxs)(t.p,{children:["Assume we have two accounts ",(0,s.jsx)(t.strong,{children:"alice.near"})," and ",(0,s.jsx)(t.strong,{children:"bob.near"}),". They belong to different ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/shard",children:"Shards"}),". ",(0,s.jsx)(t.strong,{children:"alice.near"})," sends a few tokens to ",(0,s.jsx)(t.strong,{children:"bob.near"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/transaction",children:"Transaction"})," signed by ",(0,s.jsx)(t.strong,{children:"alice.near"})," is sent to the network. It is immediately executed, ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/execution-outcome",children:"ExecutionOutcome"})," is the output or result from converting the transaction into a ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/receipt",children:"Receipt"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Transaction execution",src:n(20123).Z+"",width:"1449",height:"700"})}),"\n",(0,s.jsxs)(t.p,{children:["During the above process ",(0,s.jsx)(t.strong,{children:"alice.near"}),", the sender, was charged a fee (gas). The ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/receipt",children:"Receipt"})," created as result of the ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/transaction",children:"Transaction"})," follows these rules:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["It will be executed not earlier than next ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/block",children:"Block"})]}),"\n",(0,s.jsxs)(t.li,{children:["It ",(0,s.jsx)(t.strong,{children:"must"})," be executed on the receiver's ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/shard",children:"Shard"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["So, in our case the receiver is ",(0,s.jsx)(t.strong,{children:"bob.near"})," and that account belongs to a different ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/shard",children:"Shard"})," that's why the ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/receipt",children:"Receipt"})," moves to the receiver's Shard and is put in the execution queue."]}),"\n",(0,s.jsx)(t.p,{children:"In our example the Receipt is executed in the very next Block."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"The Receipt is executed in the next Block",src:n(30938).Z+"",width:"1449",height:"700"})}),"\n",(0,s.jsxs)(t.p,{children:["Almost done. Remember the refund? So the ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/execution-outcome",children:"ExecutionOutcome"})," for the Receipt will be another Receipt that is refunding the Gas to the sender. ",(0,s.jsx)(t.strong,{children:"bob.near"})," has received tokens from ",(0,s.jsx)(t.strong,{children:"alice.near"}),". Now, ",(0,s.jsx)(t.strong,{children:"alice.near"})," becomes the receiver for a new (and last) Receipt (keep in mind the sender in this Receipt is always ",(0,s.jsx)(t.strong,{children:"system"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["Keep in mind rule #2: the Receipt must be executed on the receiver's Shard. So this Receipt moves to the Shard where ",(0,s.jsx)(t.strong,{children:"alice.near"})," belongs to. And it is the last execution in this process."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Complete scheme of Token transfer between the accounts from different Shards",src:n(50843).Z+"",width:"1449",height:"700"})}),"\n",(0,s.jsxs)(t.p,{children:["This is it. Tokens have been transferred from the account on one Shard to the account on a different Shard, and the initial sender, ",(0,s.jsx)(t.strong,{children:"alice.near"}),", received a refund of Gas."]}),"\n",(0,s.jsx)(t.h2,{id:"token-transfer-between-accounts-found-on-the-same-shard",children:"Token transfer between accounts found on the same shard"}),"\n",(0,s.jsxs)(t.p,{children:["Let's have a look at the example where both accounts are on the same ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/shard",children:"Shard"}),". The process is the same as in the previous example, except there are no Receipts moving from one Shard to another."]}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/transaction",children:"Transaction"})," signed by ",(0,s.jsx)(t.strong,{children:"alice.near"})," is sent to the network. It is immediately executed, ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/execution-outcome",children:"ExecutionOutcome"})," is the result of converting the transaction into a ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/receipt",children:"Receipt"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Transaction execution",src:n(20123).Z+"",width:"1449",height:"700"})}),"\n",(0,s.jsxs)(t.p,{children:["The Receipt is already on the receiver's Shard, so it is put in the execution queue of the next ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/block",children:"Block"}),". It is executed in the next Block, and the ",(0,s.jsx)(t.a,{href:"/build/data-infrastructure/lake-data-structures/execution-outcome",children:"ExecutionOutcome"})," result is a new Receipt with the refund to the initial sender, ",(0,s.jsx)(t.strong,{children:"alice.near"}),".\nThe Same rules apply to this Receipt, it is put into the execution queue and executed in the next Block."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Complete scheme of Token transfer between the account from the same Shards",src:n(5618).Z+"",width:"1337",height:"343"})}),"\n",(0,s.jsxs)(t.p,{children:["This is it. You may wonder why the process is overcomplicated for the same Shard case. The answer is: ",(0,s.jsx)(t.strong,{children:"the same rules are always applied"}),'. Also, this mechanism allows to build the NEAR Protocol data flow by only one set of rules, no matter how many Shards exist. Also, we avoid a lot of "ifs" and we don\'t have to keep in mind different corner cases because the process always follows the same rules.']})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50843:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/01-diff-shards-complete-7c9b12595c1f681421859628823805a8.png"},5618:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/02-same-shard-complete-44d6ccee87fc7acf076084cdb4c6d46e.png"},20123:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/03-tx-outcome-receipt-0fcb113623aa8f546f29cd413b47a7db.png"},30938:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/04-send-nears-flow-cf058d744907ef8dee67e22c03249add.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);