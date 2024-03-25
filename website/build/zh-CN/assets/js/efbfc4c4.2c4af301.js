"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9524],{19985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(85893),c=t(11151);const i={id:"transaction-execution",title:"Lifecycle of a Transaction"},a=void 0,r={id:"concepts/protocol/transaction-execution",title:"Lifecycle of a Transaction",description:"Transactions are constructed by users to express the intent of performing actions in the network. Once in the network, transactions are converted into Receipts, which are messages exchanged between network nodes.",source:"@site/../docs/1.concepts/protocol/transaction-execution.md",sourceDirName:"1.concepts/protocol",slug:"/concepts/protocol/transaction-execution",permalink:"/zh-CN/concepts/protocol/transaction-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/protocol/transaction-execution.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1711375194,formattedLastUpdatedAt:"2024\u5e743\u670825\u65e5",frontMatter:{id:"transaction-execution",title:"Lifecycle of a Transaction"},sidebar:"concepts",previous:{title:"Gas (Execution Fees)",permalink:"/zh-CN/concepts/protocol/gas"},next:{title:"NEAR Data Flow",permalink:"/zh-CN/concepts/data-flow/near-data-flow"}},o={},l=[{value:"Receipts &amp; Finality",id:"receipts--finality",level:2},{value:"Block #1: The Transaction Arrives",id:"block-1-the-transaction-arrives",level:4},{value:"Block #2: The Receipt is Processed",id:"block-2-the-receipt-is-processed",level:4},{value:"Block #3...: Function Calls",id:"block-3-function-calls",level:4},{value:"Final Block: Gas is Refunded",id:"final-block-gas-is-refunded",level:4},{value:"Transaction Status",id:"transaction-status",level:2},{value:"Example: Transaction with Transfer",id:"example-transaction-with-transfer",level:4},{value:"Example: Deploying a Contract",id:"example-deploying-a-contract",level:4},{value:"Example: Deploying a Contract Fails",id:"example-deploying-a-contract-fails",level:4},{value:"Example: Calling a Function",id:"example-calling-a-function",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Transactions"})," are constructed by users to express the intent of performing actions in the network. Once in the network, transactions are converted into ",(0,s.jsx)(n.code,{children:"Receipts"}),", which are messages exchanged between network nodes."]}),"\n",(0,s.jsx)(n.p,{children:"In this page we will explore the lifecycle of a transaction, from its creation to its final status."}),"\n",(0,s.jsx)(n.admonition,{title:"Recommended Reading",type:"tip",children:(0,s.jsxs)(n.p,{children:["To dig deeper into transaction routing we recommend to read the ",(0,s.jsx)(n.a,{href:"https://near.github.io/nearcore/architecture/how/tx_routing.html",children:"nearcore documentation"})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"receipts--finality",children:"Receipts & Finality"}),"\n",(0,s.jsxs)(n.p,{children:["Lets walk through the lifecycle of a complex transaction, and see how it is processed by the network using blocks as ",(0,s.jsx)(n.strong,{children:"time units"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"block-1-the-transaction-arrives",children:"Block #1: The Transaction Arrives"}),"\n",(0,s.jsxs)(n.p,{children:["After a transaction arrives, the network takes one block to validate it and transform it into a single ",(0,s.jsx)(n.code,{children:"Receipt"})," that contains all the ",(0,s.jsx)(n.a,{href:"/zh-CN/concepts/protocol/transaction-anatomy",children:"actions"})," to be executed."]}),"\n",(0,s.jsxs)(n.p,{children:["While creating the ",(0,s.jsx)(n.code,{children:"Receipt"}),", the ",(0,s.jsx)(n.code,{children:"signer"})," gets $NEAR deducted from its balance to ",(0,s.jsx)(n.strong,{children:"pay for the gas"})," and ",(0,s.jsx)(n.strong,{children:"any attached NEAR"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"signer"})," and ",(0,s.jsx)(n.code,{children:"receiver"})," coincide - e.g. the ",(0,s.jsx)(n.code,{children:"signer"})," is adding a Key - the ",(0,s.jsx)(n.code,{children:"Receipt"})," is immediately processed in this first block and the transaction is considered final."]}),"\n",(0,s.jsx)(n.h4,{id:"block-2-the-receipt-is-processed",children:"Block #2: The Receipt is Processed"}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"signer"})," and ",(0,s.jsx)(n.code,{children:"receiver"})," differs - e.g. the ",(0,s.jsx)(n.code,{children:"signer"})," transfers NEAR to the ",(0,s.jsx)(n.code,{children:"receiver"})," - the ",(0,s.jsx)(n.code,{children:"Receipt"})," is processed in a second block."]}),"\n",(0,s.jsxs)(n.p,{children:["During this process a ",(0,s.jsx)(n.code,{children:"FunctionCall"})," could span a ",(0,s.jsx)(n.strong,{children:"cross-contract calls"}),", creating one or multiple new ",(0,s.jsx)(n.code,{children:"Receipts"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"block-3-function-calls",children:"Block #3...: Function Calls"}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.code,{children:"Receipt"})," created from the function call take an additional block to be processed. Notice that, if those ",(0,s.jsx)(n.code,{children:"Receipts"})," are ",(0,s.jsx)(n.code,{children:"FunctionCall"})," they could spawn new ",(0,s.jsx)(n.code,{children:"Receipts"})," and so on."]}),"\n",(0,s.jsx)(n.h4,{id:"final-block-gas-is-refunded",children:"Final Block: Gas is Refunded"}),"\n",(0,s.jsxs)(n.p,{children:["A final ",(0,s.jsx)(n.code,{children:"Receipt"})," is processed in a new block, refunding any extra gas paid by the user."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["A transaction is considered ",(0,s.jsx)(n.strong,{children:"final"})," when all its receipts are processed."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Most transactions will just spawn a receipt to process the actions, and a receipt to refund the gas, being final in 1-3 blocks (~1-3 seconds):"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://testnet.nearblocks.io/txns/8MAvH96aMfDxPb3kVDrgj8nvJS7CAXP1GgtiivKAMGkF#execution",children:"One block"})," if the ",(0,s.jsx)(n.code,{children:"signer"})," and ",(0,s.jsx)(n.code,{children:"receiver"})," coincide - e.g. when adding a key"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://testnet.nearblocks.io/txns/B7gxJNxav1A9WhWvaNWYLrSTub1Mkfj3tAudoASVM5tG#",children:"Three blocks"})," if the ",(0,s.jsx)(n.code,{children:"signer"})," and ",(0,s.jsx)(n.code,{children:"receiver"})," differ, since the first block creates the ",(0,s.jsx)(n.code,{children:"Receipt"}),", and the last reimburses gas"]}),"\n"]}),(0,s.jsx)(n.p,{children:"Function calls might take longer, as they can spawn multiple receipts. Network congestion can also increase the time to process a receipt, and thus a transaction."})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"transaction-status",children:"Transaction Status"}),"\n",(0,s.jsxs)(n.p,{children:["As the ",(0,s.jsx)(n.code,{children:"Receipts"})," of a ",(0,s.jsx)(n.code,{children:"Transaction"})," are processed they get an status:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Success"}),": the actions on the receipt were executed successfully"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Failed"}),": an action on the receipt failed"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Unknown"}),": the receipt is not known by the network"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If an action in a ",(0,s.jsx)(n.code,{children:"Receipt"})," fails, all the actions in that ",(0,s.jsx)(n.code,{children:"Receipt"})," are rollback. Notice that we are talking about the ",(0,s.jsx)(n.code,{children:"Receipt"})," status, and not the ",(0,s.jsx)(n.code,{children:"Transaction"})," status."]}),"\n",(0,s.jsx)(n.p,{children:"The status of a transaction is determined by its first receipt, i.e. the one that contains all its actions. If any of the actions in the first receipt fail, the transaction would be mark as failed."}),"\n",(0,s.jsxs)(n.p,{children:["Notice that, it could happen that a transaction is marked as successful, but some of its receipt fails. This happens when a ",(0,s.jsx)(n.code,{children:"FunctionCall"})," successfully spawns a new receipt, but the consequent function call fails. In this case, the transaction is marked as successful because the original function call was successful."]}),"\n",(0,s.jsx)(n.p,{children:"See the examples below for more details."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:" Status Examples "}),(0,s.jsx)(n.h4,{id:"example-transaction-with-transfer",children:"Example: Transaction with Transfer"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bob.near"})," creates a transaction to transfer 10 NEAR to ",(0,s.jsx)(n.code,{children:"alice.near"})]}),"\n",(0,s.jsx)(n.li,{children:"The transaction is converted into a receipt"}),"\n",(0,s.jsxs)(n.li,{children:["The conversion fails because ",(0,s.jsx)(n.code,{children:"bob.near"})," does not have enough balance"]}),"\n",(0,s.jsx)(n.li,{children:"The transaction is marked as failed \u26d4"}),"\n"]}),(0,s.jsx)(n.h4,{id:"example-deploying-a-contract",children:"Example: Deploying a Contract"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bob.near"})," creates a transaction to:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["create the account ",(0,s.jsx)(n.code,{children:"contract.bob.near"})]}),"\n",(0,s.jsxs)(n.li,{children:["transfer 5 NEAR to ",(0,s.jsx)(n.code,{children:"contract.bob.near"})]}),"\n",(0,s.jsxs)(n.li,{children:["deploy a contract in ",(0,s.jsx)(n.code,{children:"contract.bob.near"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"The transaction is transformed into one receipt"}),"\n",(0,s.jsx)(n.li,{children:"The account is created, the money transfer and the contract deployed"}),"\n",(0,s.jsx)(n.li,{children:"The transaction is marked as successful \u2705"}),"\n"]}),(0,s.jsx)(n.h4,{id:"example-deploying-a-contract-fails",children:"Example: Deploying a Contract Fails"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bob.near"})," creates a transaction to:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["create the account ",(0,s.jsx)(n.code,{children:"contract.bob.near"})]}),"\n",(0,s.jsxs)(n.li,{children:["transfer 5 NEAR to ",(0,s.jsx)(n.code,{children:"contract.bob.near"})]}),"\n",(0,s.jsxs)(n.li,{children:["deploy a contract in ",(0,s.jsx)(n.code,{children:"contract.bob.near"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"The transaction is transformed into one receipt"}),"\n",(0,s.jsxs)(n.li,{children:["The account is created, but the transfer fails because ",(0,s.jsx)(n.code,{children:"bob.near"})," does not have enough balance"]}),"\n",(0,s.jsx)(n.li,{children:"The whole process is reverted (i.e. no account is created)"}),"\n",(0,s.jsx)(n.li,{children:"The transaction is marked as successful \u26d4"}),"\n"]}),(0,s.jsx)(n.h4,{id:"example-calling-a-function",children:"Example: Calling a Function"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bob.near"})," creates a transaction to call the function ",(0,s.jsx)(n.code,{children:"cross-call"})," in ",(0,s.jsx)(n.code,{children:"contract.near"})]}),"\n",(0,s.jsx)(n.li,{children:"The transaction is transformed into one receipt"}),"\n",(0,s.jsxs)(n.li,{children:["The function ",(0,s.jsx)(n.code,{children:"cross-call"})," creates a promise to call the function ",(0,s.jsx)(n.code,{children:"external-call"})," in ",(0,s.jsx)(n.code,{children:"external.near"})]}),"\n",(0,s.jsx)(n.li,{children:"The function finishes correctly and the transaction is marked as successful \u2705"}),"\n",(0,s.jsxs)(n.li,{children:["A new receipt is created to call the function ",(0,s.jsx)(n.code,{children:"external-call"})," in ",(0,s.jsx)(n.code,{children:"external.near"})]}),"\n",(0,s.jsxs)(n.li,{children:["The function ",(0,s.jsx)(n.code,{children:"external-call"})," fails"]}),"\n",(0,s.jsx)(n.li,{children:"The original transaction is still marked as successful \u2705 because the first receipt was successful"}),"\n"]})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can check the status of a transactions using the ",(0,s.jsx)(n.a,{href:"https://nearblocks.io/",children:"NearBlocks explorer"})]})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const c={},i=s.createContext(c);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);