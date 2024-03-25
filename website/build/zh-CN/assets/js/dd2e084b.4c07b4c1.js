"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8269],{59295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const a={id:"use-cases",title:"Use cases for Chain Signatures",sidebar_label:"Use cases"},o=void 0,r={id:"concepts/abstraction/signatures/use-cases",title:"Use cases for Chain Signatures",description:"Chain signatures enable you to implement multichain and cross-chain workflows in a simple way.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/1.concepts/abstraction/signatures/use-case.md",sourceDirName:"1.concepts/abstraction/signatures",slug:"/concepts/abstraction/signatures/use-cases",permalink:"/zh-CN/concepts/abstraction/signatures/use-cases",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/abstraction/signatures/use-case.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{id:"use-cases",title:"Use cases for Chain Signatures",sidebar_label:"Use cases"},sidebar:"concepts",previous:{title:"What are Chain Signatures?",permalink:"/zh-CN/concepts/abstraction/chain-signatures"},next:{title:"Data on the Blockchain",permalink:"/zh-CN/concepts/data-flow/data-storage"}},c={},l=[{value:"Trade Blockchain assets without transactions",id:"trade-blockchain-assets-without-transactions",level:2},{value:"Oauth-controlled Blockchain accounts",id:"oauth-controlled-blockchain-accounts",level:2},{value:"Cross-chain Zero-friction onboarding",id:"cross-chain-zero-friction-onboarding",level:2},{value:"DeFi on Bitcoin (and other non-smart contract chains).",id:"defi-on-bitcoin-and-other-non-smart-contract-chains",level:2},{value:"Using Chain Signatures",id:"using-chain-signatures",level:4},{value:"Decentralized Clients",id:"decentralized-clients",level:2},{value:"Communication with private NEAR Shards",id:"communication-with-private-near-shards",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Chain signatures enable you to implement multichain and cross-chain workflows in a simple way.\nTake a look at a few possible use cases:"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"trade-blockchain-assets-without-transactions",children:"Trade Blockchain assets without transactions"}),"\n",(0,s.jsx)(n.p,{children:"Trading assets across different blockchains usually require using a bridge that supports them, bringing longer settlement times as the trades are not atomic and require confirmation on both blockchains."}),"\n",(0,s.jsxs)(n.p,{children:["Using Chain signatures you have the ability to change the ownership of different blockchain accounts (e.g., Bitcoin and Ethereum) to trade assets across chains without doing on-chain transactions.\nThis way you can keep native tokens on their native blockchain (e.g., ",(0,s.jsx)(n.code,{children:"BTC"})," on Bitcoin, ",(0,s.jsx)(n.code,{children:"ETH"})," on Ethereum, ",(0,s.jsx)(n.code,{children:"ARB"})," on Arbitrum), and trade them without bridges.\nAs an added bonus, trades are atomic across chains, settlement takes just 2 seconds, and it supports any token on any chain."]}),"\n",(0,s.jsx)(n.p,{children:"For example, a basic trade flow could be:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Users create an account controlled by NEAR chain signatures"}),"\n",(0,s.jsx)(n.li,{children:"Users funds these accounts on the native blockchains (depositing)"}),"\n",(0,s.jsx)(n.li,{children:"Place orders by funding a new account for the total amount of the order"}),"\n",(0,s.jsx)(n.li,{children:"Another user accepts the order"}),"\n",(0,s.jsx)(n.li,{children:"Users swap control of the keys to fulfill the order"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"docs",src:t(76057).Z+"",width:"2464",height:"1140"})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["User A has ",(0,s.jsx)(n.code,{children:"ETH"})," on the Ethereum blockchain, and wants to buy native Bitcoin"]}),"\n",(0,s.jsx)(n.li,{children:"User B wants to sell Bitcoin for Ethereum"}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Steps"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["User B, using NEAR, creates and funds a new account on Bitcoin with 1 ",(0,s.jsx)(n.code,{children:"BTC"})]}),"\n",(0,s.jsx)(n.li,{children:"User B, using the spot marketplace smart contract, signs a transaction to create a limit order. This transfers control of the Bitcoin account to the smart contract"}),"\n",(0,s.jsxs)(n.li,{children:["User A creates a batch transaction with two steps","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Creating and funding a new Ethereum account with 10 ",(0,s.jsx)(n.code,{children:"ETH"})]}),"\n",(0,s.jsx)(n.li,{children:"Accepting the order and atomically swapping control of the accounts"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["User A takes ownership of the Bitcoin account with 1 ",(0,s.jsx)(n.code,{children:"BTC"}),", and User B takes ownership of the Ethereum account with 10 ",(0,s.jsx)(n.code,{children:"ETH"})]}),"\n",(0,s.jsxs)(n.li,{children:["User A and B can ",(0,s.jsx)(n.em,{children:'"withdraw"'})," their asset from the order by transferring the assets to their respective ",(0,s.jsx)(n.em,{children:'"main"'})," accounts"]}),"\n"]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"oauth-controlled-blockchain-accounts",children:"Oauth-controlled Blockchain accounts"}),"\n",(0,s.jsx)(n.p,{children:"On-boarding is a huge problem for decentralized applications. If you want widespread adoption you can't expect people to keep seed phrases safe in order to use an application."}),"\n",(0,s.jsx)(n.p,{children:"An attractive way of managing Web3 accounts is to use existing Web2 accounts to on-board users. This can be done in the following way:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Deploy a NEAR contract that allows the bearer of a user's ",(0,s.jsx)(n.a,{href:"https://jwt.io/",children:"JWT token"})," to sign a blockchain transaction (Ethereum, Polygon, Avalanche, and others)"]}),"\n",(0,s.jsx)(n.li,{children:"The user validates their identity with a third-party receiving a JWT Token"}),"\n",(0,s.jsx)(n.li,{children:"The user holding that token can interact with blockchain applications on Ethereum/Polygon/+++ via the NEAR contract for the duration of it's validity"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Any method of controlling a NEAR account can also be used to control a cross-chain account."}),"\n",(0,s.jsx)(n.admonition,{title:"About JWT tokens",type:"info",children:(0,s.jsx)(n.p,{children:"JSON Web Tokens are a standard RFC 7519 method for representing claims securely between two parties. They are used in this example to represent the claim that someone is the owner of an Oauth account."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"cross-chain-zero-friction-onboarding",children:"Cross-chain Zero-friction onboarding"}),"\n",(0,s.jsxs)(n.p,{children:["Using unique features of the NEAR account model, ",(0,s.jsx)(n.a,{href:"https://keypom.xyz/",children:"Keypom"})," provides zero-friction onboarding and transactions on NEAR. They are generally used for NFT drops, FT drops, and ticketing."]}),"\n",(0,s.jsx)(n.p,{children:"A generic Keypom user-flow could be:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The developer creates a restricted NEAR account"}),"\n",(0,s.jsxs)(n.li,{children:["The account is funded with ",(0,s.jsx)(n.code,{children:"NEAR"})]}),"\n",(0,s.jsx)(n.li,{children:"The user receives a key with limited control of the account"}),"\n",(0,s.jsx)(n.li,{children:"The user uses the funded account to call controlled endpoints on NEAR"}),"\n",(0,s.jsx)(n.li,{children:"The user returns the remaining funds to the developer and their account is unlocked"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["This allows easy on-boarding to decentralized apps. The accounts are initially restricted to prevent the user being able to simply withdraw the ",(0,s.jsx)(n.code,{children:"NEAR"})," from the account."]})}),"\n",(0,s.jsx)(n.h2,{id:"defi-on-bitcoin-and-other-non-smart-contract-chains",children:"DeFi on Bitcoin (and other non-smart contract chains)."}),"\n",(0,s.jsx)(n.p,{children:"Using chain signatures, smart contracts on NEAR can control externally-owned accounts on non-smart contract chains like Bitcoin, Dogecoin, Ripple, Bittensor, Cosmos Hub, etc. This enables developers to use NEAR as a smart contract \u201clayer\u201d for chains that do not support this functionality natively."}),"\n",(0,s.jsx)(n.p,{children:"For example, a developer can build a decentralized exchange for Bitcoin Ordinals, using a smart contract on NEAR to manage deposits (into Bitcoin addresses controlled by the contract) and to verify and execute swaps when two users agree to trade BTC for an Ordinal or BRC20 token."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Seller generates a deposit address on Bitcoin that is controlled by the marketplace smart contract on NEAR via chain signatures"}),"\n",(0,s.jsx)(n.li,{children:"Seller deposits a Bitcoin Ordinal to the deposit address"}),"\n",(0,s.jsx)(n.li,{children:"The Ordinal is listed for sale with a price and a pre-commitment signature from the seller"}),"\n",(0,s.jsx)(n.li,{children:"Buyer accepts the order, deposits USDC"}),"\n",(0,s.jsx)(n.li,{children:"The control of the Bitcoin Ordinal address is given to the buyer, USDC on NEAR is transferred to the seller"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"using-chain-signatures",children:"Using Chain Signatures"}),"\n",(0,s.jsx)(n.p,{children:"With Chain Signatures you can do the same but across many chains, for example Polygon:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The developer creates a restricted NEAR account with a key"}),"\n",(0,s.jsxs)(n.li,{children:["The account is funded with ",(0,s.jsx)(n.code,{children:"NEAR"})," and ",(0,s.jsx)(n.code,{children:"MATIC"})]}),"\n",(0,s.jsx)(n.li,{children:"The user receives a key with limited control of the account"}),"\n",(0,s.jsx)(n.li,{children:"The user uses the funded account to sign payloads calling controlled endpoints on Polygon"}),"\n",(0,s.jsx)(n.li,{children:"The user returns the remaining funds to the developer and their account is unlocked"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This allows developers to pay for users to use arbitrary contracts on arbitrary chains."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"decentralized-clients",children:"Decentralized Clients"}),"\n",(0,s.jsx)(n.p,{children:"A big problem in decentralized applications is that while the smart contracts are tamper-proof, the clients that access them generally are not. This allows practically complete control over any user account provided they are using the frontend assets that you serve. This has security, trust, and regulatory implications."}),"\n",(0,s.jsxs)(n.p,{children:["When smart contracts can sign payloads you can start using ",(0,s.jsx)(n.a,{href:"https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-introduction",children:"signed exchanges"})," (or polyfills) to require HTTP exchanges to be signed by a certain key. If it is not signed with this key the SSL certificate is considered invalid. This means that individual users cannot be served invalid frontends without it being generally observable and non repudiable."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"communication-with-private-near-shards",children:"Communication with private NEAR Shards"}),"\n",(0,s.jsxs)(n.p,{children:["Companies like ",(0,s.jsx)(n.a,{href:"https://www.calimero.network/",children:"Calimero"})," offer private NEAR shards. Currently, sending messages to and from these NEAR shards is troublesome. If each shard had the ability to sign their message queues, they could be securely sent from one shard to another. Thus you could communicate bidirectionally with any shard as easily as you can with a contract on your own shard."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"This could also simplify NEAR's sharding model, by treating each NEAR shard like one would a private shard."})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},76057:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/native-cross-chain-2454256fad26d63241b5d3caeb6d9e9a.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);