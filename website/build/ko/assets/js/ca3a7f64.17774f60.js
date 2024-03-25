"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3322],{94914:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=c(85893),s=c(11151);const o={id:"account-id",title:"Address (Account ID)"},r=void 0,a={id:"concepts/protocol/account-id",title:"Address (Account ID)",description:"NEAR accounts are identified by a unique address, which take one of two forms:",source:"@site/../docs/1.concepts/protocol/account-id.md",sourceDirName:"1.concepts/protocol",slug:"/concepts/protocol/account-id",permalink:"/ko/concepts/protocol/account-id",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/protocol/account-id.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1711375194,formattedLastUpdatedAt:"2024\ub144 3\uc6d4 25\uc77c",frontMatter:{id:"account-id",title:"Address (Account ID)"},sidebar:"concepts",previous:{title:"Overview",permalink:"/ko/concepts/protocol/account-model"},next:{title:"Access Keys",permalink:"/ko/concepts/protocol/access-keys"}},i={},d=[{value:"Implicit Address",id:"implicit-address",level:2},{value:"Named Address",id:"named-address",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"NEAR accounts are identified by a unique address, which take one of two forms:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#implicit-address",children:(0,t.jsx)(n.strong,{children:"Implicit addresses"})}),", which are 64 characters long (e.g. ",(0,t.jsx)(n.code,{children:"fb9243ce..."}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#named-address",children:(0,t.jsx)(n.strong,{children:"Named addresses"})}),", which are simpler to remember and act as domains (e.g. ",(0,t.jsx)(n.code,{children:"alice.near"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Searching to create an account?",type:"tip",children:(0,t.jsxs)(n.p,{children:["You have multiple ways to create an account, you can ",(0,t.jsx)(n.a,{href:"https://near.org/",children:"sign-up using your email"}),", get a mobile wallet through ",(0,t.jsx)(n.a,{href:"https://web.telegram.org/k/#@herewalletbot",children:"telegram"}),", or create a ",(0,t.jsx)(n.a,{href:"https://app.mynearwallet.com",children:"web wallet"}),"."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"implicit-address",children:"Implicit Address"}),"\n",(0,t.jsxs)(n.p,{children:["Implicit accounts are denoted by a 64 character address, which corresponds to a unique public/private key-pair. Who controls the ",(0,t.jsx)(n.a,{href:"/ko/concepts/protocol/access-keys",children:"private key"})," of the implicit account controls the account."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The private key: ",(0,t.jsx)(n.code,{children:"ed25519:4x1xiJ6u3sZF3NgrwPUCnHqup2o..."})]}),"\n",(0,t.jsxs)(n.li,{children:["Corresponds to the public key: ",(0,t.jsx)(n.code,{children:"ed25519:CQLP1o1F3Jbdttek3GoRJYhzfT..."})]}),"\n",(0,t.jsxs)(n.li,{children:["And controls the account: ",(0,t.jsx)(n.code,{children:"a96ad3cb539b653e4b869bd7cf26590690e8971..."})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Implicit accounts always ",(0,t.jsx)(n.em,{children:"exist"}),", and thus do not need to be created. However, in order to use the account you will still need to fund it with NEAR tokens (or get somebody to pay the gas for your transaction)."]}),"\n",(0,t.jsxs)(c,{children:[(0,t.jsx)("summary",{children:" \ud83e\uddd1\u200d\ud83d\udcbb Technical: How to obtain a key-pair  "}),(0,t.jsxs)(n.p,{children:["The simplest way to obtain a public / private key that represents an account is using the ",(0,t.jsx)(n.a,{href:"../../4.tools/cli.md",children:"NEAR CLI"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near generate-key\n\n# Output\n# Seed phrase: lumber habit sausage used zebra brain border exist meat muscle river hidden\n# Key pair: {"publicKey":"ed25519:AQgnQSR1Mp3v7xrw7egJtu3ibNzoCGwUwnEehypip9od","secretKey":"ed25519:51qTiqybe8ycXwPznA8hz7GJJQ5hyZ45wh2rm5MBBjgZ5XqFjbjta1m41pq9zbRZfWGUGWYJqH4yVhSWoW6pYFkT"}\n# Implicit account: 8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8\n'})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"named-address",children:"Named Address"}),"\n",(0,t.jsxs)(n.p,{children:["In NEAR, users can register ",(0,t.jsx)(n.strong,{children:"named accounts"})," (e.g. ",(0,t.jsx)(n.code,{children:"bob.near"}),") which are simpler to share and remember."]}),"\n",(0,t.jsxs)(n.p,{children:["Another advantage of named accounts is that they can create ",(0,t.jsx)(n.strong,{children:"sub-accounts"})," of themselves, effectively working as domains:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://nearblocks.io/address/registrar",children:(0,t.jsx)(n.code,{children:"registrar"})})," account can create top-level accounts (e.g. ",(0,t.jsx)(n.code,{children:"near"}),", ",(0,t.jsx)(n.code,{children:"sweat"}),", ",(0,t.jsx)(n.code,{children:"kaiching"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"near"})," account can create sub-accounts such as ",(0,t.jsx)(n.code,{children:"bob.near"})," or ",(0,t.jsx)(n.code,{children:"alice.near"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bob.near"})," can create sub-accounts of itself, such as ",(0,t.jsx)(n.code,{children:"app.bob.near"})]}),"\n",(0,t.jsxs)(n.li,{children:["Accounts cannot create sub-accounts of other accounts","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"near"})," ",(0,t.jsx)(n.strong,{children:"cannot"})," create ",(0,t.jsx)(n.code,{children:"app.bob.near"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"account.near"})," ",(0,t.jsx)(n.strong,{children:"cannot"})," create ",(0,t.jsx)(n.code,{children:"sub.another-account.near"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Accounts have ",(0,t.jsx)(n.strong,{children:"no control"})," over their sub-account, they are different entities"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Anyone can create a ",(0,t.jsx)(n.code,{children:".near"})," or ",(0,t.jsx)(n.code,{children:".testnet"})," account, you just to call the ",(0,t.jsx)(n.code,{children:"create_account"})," method of the corresponding top-level account - ",(0,t.jsx)(n.code,{children:"tesnet"})," on testnet, and ",(0,t.jsx)(n.code,{children:"near"})," on mainnet."]}),"\n",(0,t.jsxs)(c,{children:[(0,t.jsx)("summary",{children:" \ud83e\uddd1\u200d\ud83d\udcbb Technical: How to create a named account  "}),(0,t.jsxs)(n.p,{children:["Named accounts are created by calling the ",(0,t.jsx)(n.code,{children:"create_account"})," method of the network's top-level account - ",(0,t.jsx)(n.code,{children:"tesnet"})," on testnet, and ",(0,t.jsx)(n.code,{children:"near"})," on mainnet."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call testnet create_account \'{"new_account_id": "new-acc.testnet", "new_public_key": "ed25519:<data>"}\' --deposit 0.00182 --accountId funding-account.testnet\n'})}),(0,t.jsxs)(n.p,{children:["We abstract this process in the ",(0,t.jsx)(n.a,{href:"../../4.tools/cli.md",children:"NEAR CLI"})," with the following command:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near create_account new-acc.testnet --useAccount funding-account.testnet --publicKey ed25519:<data>\n"})}),(0,t.jsx)(n.p,{children:"You can use the same command to create sub-accounts of an existing named account:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near create_account sub-acc.new-acc.testnet --useAccount new-acc.testnet\n"})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Accounts have ",(0,t.jsx)(n.strong,{children:"no control"})," over their sub-accounts, they are different entities. This means that ",(0,t.jsx)(n.code,{children:"near"})," cannot control ",(0,t.jsx)(n.code,{children:"bob.near"}),", and ",(0,t.jsx)(n.code,{children:"bob.near"})," cannot control ",(0,t.jsx)(n.code,{children:"sub.bob.near"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>a,a:()=>r});var t=c(67294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);