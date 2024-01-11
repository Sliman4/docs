"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3736],{57766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(85893),s=t(11151);const i={id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},o=void 0,l={id:"tutorials/nfts/predeployed-contract",title:"Pre-deployed Contract",description:"Learn how to easily create your own non-fungible tokens without doing any software development by using a readily-available NFT smart contract.",source:"@site/../docs/3.tutorials/nfts/0-predeployed.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/predeployed-contract",permalink:"/zh-CN/tutorials/nfts/predeployed-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/0-predeployed.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1701811626,formattedLastUpdatedAt:"2023\u5e7412\u67085\u65e5",sidebarPosition:0,frontMatter:{id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},sidebar:"contracts",previous:{title:"Introduction",permalink:"/zh-CN/tutorials/nfts/introduction"},next:{title:"Contract Architecture",permalink:"/zh-CN/tutorials/nfts/skeleton"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using the NFT contract",id:"using-the-nft-contract",level:2},{value:"Setup",id:"setup",level:3},{value:"Minting your NFTs",id:"minting-your-nfts",level:3},{value:"Final remarks",id:"final-remarks",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Learn how to easily create your own non-fungible tokens without doing any software development by using a readily-available NFT smart contract."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To complete this tutorial successfully, you'll need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com/create",children:"A NEAR Wallet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/tools/near-cli#setup",children:"NEAR-CLI"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-nft-contract",children:"Using the NFT contract"}),"\n",(0,r.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Log in to your newly created account with ",(0,r.jsx)(n.code,{children:"near-cli"})," by running the following command in your terminal:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near login\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set an environment variable for your account ID to make it easy to copy and paste commands from this tutorial:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export NEARID=YOUR_ACCOUNT_NAME\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Be sure to replace ",(0,r.jsx)(n.code,{children:"YOUR_ACCOUNT_NAME"})," with the account name you just logged in with including the ",(0,r.jsx)(n.code,{children:".testnet"})," (or ",(0,r.jsx)(n.code,{children:".near"})," for ",(0,r.jsx)(n.code,{children:"mainnet"}),")."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Test that the environment variable is set correctly by running:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo $NEARID\n"})}),"\n",(0,r.jsx)(n.h3,{id:"minting-your-nfts",children:"Minting your NFTs"}),"\n",(0,r.jsxs)(n.p,{children:["NEAR has deployed an NFT contract to the account ",(0,r.jsx)(n.code,{children:"nft.examples.testnet"})," which allows users to freely mint tokens. Using this pre-deployed contract, let's mint our first token!"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Run this command in your terminal, however you ",(0,r.jsxs)(n.strong,{children:["must replace the ",(0,r.jsx)(n.code,{children:"token_id"})," value with an UNIQUE string"]}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call nft.examples.testnet nft_mint \'{"token_id": "TYPE_A_UNIQUE_VALUE_HERE", "receiver_id": "\'$NEARID\'", "metadata": { "title": "GO TEAM", "description": "The Team Goes", "media": "https://bafybeidl4hjbpdr6u6xvlrizwxbrfcyqurzvcnn5xoilmcqbxfbdwrmp5m.ipfs.dweb.link/", "copies": 1}}\' --accountId $NEARID --deposit 0.1\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can also replace the ",(0,r.jsx)(n.code,{children:"media"})," URL with a link to any image file hosted on your web server."]})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'Log [nft.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"nft-1.0.0","event":"nft_mint","data":[{"owner_id":"benjiman.testnet","token_ids":["TYPE_A_UNIQUE_VALUE_HERE"]}]}\nTransaction Id 8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/8RFWrQvAsm2grEsd1UTASKpfvHKrjtBdEyXu7WqGBPUr\n\'\'\n'})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To view tokens owned by an account you can call the NFT contract with the following ",(0,r.jsx)(n.code,{children:"near-cli"})," command:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view nft.examples.testnet nft_tokens_for_owner '{\"account_id\": \"'$NEARID'\"}'\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "token_id": "0",\n    "owner_id": "dev-xxxxxx-xxxxxxx",\n    "metadata": {\n      "title": "Some Art",\n      "description": "My NFT media",\n      "media": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Olympus_Mons_alt.jpg/1024px-Olympus_Mons_alt.jpg",\n      "media_hash": null,\n      "copies": 1,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {}\n  }\n]\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Congratulations! You just minted your first NFT token on the NEAR blockchain!"})})," \ud83c\udf89"]}),"\n",(0,r.jsxs)(n.p,{children:["\ud83d\udc49 Now try going to your ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"NEAR Wallet"}),' and view your NFT in the "Collectibles" tab. \ud83d\udc48']}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"final-remarks",children:"Final remarks"}),"\n",(0,r.jsx)(n.p,{children:"This basic example illustrates all the required steps to call an NFT smart contract on NEAR and start minting your own non-fungible tokens."}),"\n",(0,r.jsxs)(n.p,{children:["Now that you're familiar with the process, you can jump to ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/skeleton",children:"Contract Architecture"})," and learn more about the smart contract structure and how you can build your own NFT contract from the ground up."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Happy minting!"})})," \ud83e\ude99"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["near-cli: ",(0,r.jsx)(n.code,{children:"3.0.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["NFT standard: ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(n.code,{children:"1.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);