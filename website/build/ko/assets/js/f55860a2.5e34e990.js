"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6593],{89036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(85893),i=t(11151);const o={id:"events",title:"Events",sidebar_label:"Events"},r=void 0,a={id:"tutorials/nfts/js/events",title:"Events",description:"In this tutorial, you'll learn about the events standard and how to implement it in your smart contract.",source:"@site/../docs/3.tutorials/nfts/js/7-events.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/events",permalink:"/ko/tutorials/nfts/js/events",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/7-events.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1701811626,formattedLastUpdatedAt:"2023\ub144 12\uc6d4 5\uc77c",sidebarPosition:7,frontMatter:{id:"events",title:"Events",sidebar_label:"Events"},sidebar:"contracts",previous:{title:"Royalty",permalink:"/ko/tutorials/nfts/js/royalty"},next:{title:"Marketplace",permalink:"/ko/tutorials/nfts/js/marketplace"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding the use case",id:"understanding-the-use-case",level:2},{value:"The problem",id:"the-problem",level:3},{value:"The solution",id:"the-solution",level:3},{value:"Examples",id:"examples",level:3},{value:"Scenario A - simple mint",id:"scenario-a---simple-mint",level:4},{value:"Scenario B - batch mint",id:"scenario-b---batch-mint",level:4},{value:"Scenario C - transfer NFTs",id:"scenario-c---transfer-nfts",level:4},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Logging minted tokens",id:"logging-minted-tokens",level:3},{value:"Logging transfers",id:"logging-transfers",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization and minting",id:"initialization-and-minting",level:3},{value:"Transferring",id:"transferring",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In this tutorial, you'll learn about the ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events standard"})," and how to implement it in your smart contract."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The JS-SDK is currently in ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/near/near-sdk-js/releases/",children:(0,s.jsx)(n.code,{children:"Alpha"})})}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["To get started, either switch to the ",(0,s.jsx)(n.code,{children:"6.royalty"})," branch from our ",(0,s.jsx)(n.a,{href:"https://github.com/near-examples/nft-tutorial/",children:"GitHub repository"}),", or continue your work from the previous tutorials."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git checkout 6.royalty\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you wish to see the finished code for this ",(0,s.jsx)(n.em,{children:"Events"})," tutorial, you can find it on the ",(0,s.jsx)(n.code,{children:"7.events"})," branch."]})}),"\n",(0,s.jsx)(n.h2,{id:"understanding-the-use-case",children:"Understanding the use case"}),"\n",(0,s.jsxs)(n.p,{children:["Have you ever wondered how the wallet knows which NFTs you own and how it can display them in the ",(0,s.jsx)(n.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"}),"? Originally, an ",(0,s.jsx)(n.a,{href:"/tools/indexer-for-explorer",children:"indexer"})," was used and it listened for any functions starting with ",(0,s.jsx)(n.code,{children:"nft_"})," on your account. These contracts were then flagged on your account as likely NFT contracts."]}),"\n",(0,s.jsxs)(n.p,{children:["When you navigated to your collectibles tab, the wallet would then query all those contracts for the list of NFTs you owned using the ",(0,s.jsx)(n.code,{children:"nft_tokens_for_owner"})," function you saw in the ",(0,s.jsx)(n.a,{href:"/tutorials/nfts/js/enumeration",children:"enumeration tutorial"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"the-problem",children:"The problem"}),"\n",(0,s.jsx)(n.p,{children:"This method of flagging contracts was not reliable as each NFT-driven application might have its own way of minting or transferring NFTs. In addition, it's common for apps to transfer or mint many tokens at a time using batch functions."}),"\n",(0,s.jsx)(n.h3,{id:"the-solution",children:"The solution"}),"\n",(0,s.jsx)(n.p,{children:"A standard was introduced so that smart contracts could emit an event anytime NFTs were transferred, minted, or burnt. This event was in the form of a log. No matter how a contract implemented the functionality, an indexer could now listen for those standardized logs."}),"\n",(0,s.jsx)(n.p,{children:"As per the standard, you need to implement a logging functionality that gets fired when NFTs are transferred or minted. In this case, the contract doesn't support burning so you don't need to worry about that for now."}),"\n",(0,s.jsxs)(n.p,{children:["It's important to note the standard dictates that the log should begin with ",(0,s.jsx)(n.code,{children:'"EVENT_JSON:"'}),". The structure of your log should, however, always contain the 3 following things:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"standard"}),": the current name of the standard (e.g. nep171)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"version"}),": the version of the standard you're using (e.g. 1.0.0)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"event"}),": a list of events you're emitting."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The event interface differs based on whether you're recording transfers or mints. The interface for both events is outlined below."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Transfer events"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Optional"})," - ",(0,s.jsx)(n.strong,{children:"authorized_id"}),": the account approved to transfer on behalf of the owner."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"old_owner_id"}),": the old owner of the NFT."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"new_owner_id"}),": the new owner that the NFT is being transferred to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"token_ids"}),": a list of NFTs being transferred."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Optional"})," - ",(0,s.jsx)(n.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Minting events"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"owner_id"}),": the owner that the NFT is being minted to."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"token_ids"}),": a list of NFTs being transferred."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Optional"})," - ",(0,s.jsx)(n.strong,{children:"memo"}),": an optional message to include with the event."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"In order to solidify your understanding of the standard, let's walk through three scenarios and see what the logs should look like."}),"\n",(0,s.jsx)(n.h4,{id:"scenario-a---simple-mint",children:"Scenario A - simple mint"}),"\n",(0,s.jsxs)(n.p,{children:["In this scenario, Benji wants to mint an NFT to Mike with a token ID ",(0,s.jsx)(n.code,{children:'"team-token"'})," and he doesn't include a message. The log should look as follows."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token"]}\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"scenario-b---batch-mint",children:"Scenario B - batch mint"}),"\n",(0,s.jsxs)(n.p,{children:["In this scenario, Benji wants to perform a batch mint. He will mint an NFT to Mike, Damian, Josh, and Dorian. Dorian, however, will get two NFTs. Each token ID will be ",(0,s.jsx)(n.code,{children:'"team-token"'})," followed by an incrementing number. The log is as follows."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token0"]},\n    {"owner_id": "damian.testnet", "token_ids": ["team-token1"]},\n    {"owner_id": "josh.testnet", "token_ids": ["team-token2"]}\n    {"owner_id": "dorian.testnet", "token_ids": ["team-token3", "team-token4"]},\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"scenario-c---transfer-nfts",children:"Scenario C - transfer NFTs"}),"\n",(0,s.jsx)(n.p,{children:"In this scenario, Mike is transferring both his team tokens to Josh. The log should look as follows."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_transfer",\n  "data": [\n    {"old_owner_id": "mike.testnet", "new_owner_id": "josh.testnet", "token_ids": ["team-token", "team-token0"], "memo": "Go Team!"}\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,s.jsx)(n.p,{children:"At this point, you should have a good understanding of what the end goal should be so let's get to work!"}),"\n",(0,s.jsx)(n.h3,{id:"logging-minted-tokens",children:"Logging minted tokens"}),"\n",(0,s.jsxs)(n.p,{children:["Since the contract will only be minting tokens in one place, it's trivial where you should place the log. Open the ",(0,s.jsx)(n.code,{children:"nft-contract/src/mint.ts"})," file and navigate to the bottom of the file. This is where you'll construct the log for minting. Anytime someone successfully mints an NFT, it will now correctly emit a log."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// Construct the mint log as per the events standard.\nlet nftMintLog = {\n    // Standard name ("nep171").\n    standard: NFT_STANDARD_NAME,\n    // Version of the standard ("nft-1.0.0").\n    version: NFT_METADATA_SPEC,\n    // The data related with the event stored in a vector.\n    event: "nft_mint",\n    data: [\n        {\n            // Owner of the token.\n            owner_id: token.owner_id,\n            // Vector of token IDs that were minted.\n            token_ids: [tokenId],\n        }\n    ]\n}\n\n// Log the json.\nnear.log(`EVENT_JSON:${JSON.stringify(nftMintLog)}`);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/7.events/src/nft-contract/mint.ts#L7-L85\n"})}),"\n",(0,s.jsx)(n.h3,{id:"logging-transfers",children:"Logging transfers"}),"\n",(0,s.jsxs)(n.p,{children:["Let's open the ",(0,s.jsx)(n.code,{children:"nft-contract/src/internal.ts"})," file and navigate to the ",(0,s.jsx)(n.code,{children:"internalTransfer"})," function. This is the location where you'll build your transfer logs. Whenever an NFT is transferred, this function is called and so you'll correctly be logging the transfers."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// Construct the transfer log as per the events standard.\nlet nftTransferLog = {\n    // Standard name ("nep171").\n    standard: NFT_STANDARD_NAME,\n    // Version of the standard ("nft-1.0.0").\n    version: NFT_METADATA_SPEC,\n    // The data related with the event stored in a vector.\n    event: "nft_transfer",\n    data: [\n        {\n            // The optional authorized account ID to transfer the token on behalf of the old owner.\n            authorized_id: authorizedId,\n            // The old owner\'s account ID.\n            old_owner_id: token.owner_id,\n            // The account ID of the new owner of the token.\n            new_owner_id: receiverId,\n            // A vector containing the token IDs as strings.\n            token_ids: [tokenId],\n            // An optional memo to include.\n            memo,\n        }\n    ]\n}\n\n// Log the serialized json.\nnear.log(`EVENT_JSON:${JSON.stringify(nftTransferLog)}`);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/7.events/src/nft-contract/internal.ts#L113-L205\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This solution, unfortunately, has an edge case which will break things. If an NFT is transferred via the ",(0,s.jsx)(n.code,{children:"nft_transfer_call"})," function, there's a chance that the transfer will be reverted if the ",(0,s.jsx)(n.code,{children:"nft_on_transfer"})," function returns ",(0,s.jsx)(n.code,{children:"true"}),". Taking a look at the logic for ",(0,s.jsx)(n.code,{children:"nft_transfer_call"}),", you can see why this is a problem."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"nft_transfer_call"})," is invoked, it will:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Call ",(0,s.jsx)(n.code,{children:"internalTransfer"})," to perform the actual transfer logic."]}),"\n",(0,s.jsxs)(n.li,{children:["Initiate a cross-contract call and invoke the ",(0,s.jsx)(n.code,{children:"nft_on_transfer"})," function."]}),"\n",(0,s.jsxs)(n.li,{children:["Resolve the promise and perform logic in ",(0,s.jsx)(n.code,{children:"internalResolveTransfer"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This will either return true meaning the transfer went fine or it will revert the transfer and return false."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you only place the log in the ",(0,s.jsx)(n.code,{children:"internalTransfer"})," function, the log will be emitted and the indexer will think that the NFT was transferred. If the transfer is reverted during ",(0,s.jsx)(n.code,{children:"internalResolveTransfer"}),", however, that event should ",(0,s.jsx)(n.strong,{children:"also"})," be emitted. Anywhere that an NFT ",(0,s.jsx)(n.strong,{children:"could"})," be transferred, we should add logs. Replace the ",(0,s.jsx)(n.code,{children:"internalResolveTransfer"})," with the following code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/7.events/src/nft-contract/nft_core.ts#L138-L242\n"})}),"\n",(0,s.jsx)(n.p,{children:"With that finished, you've successfully implemented the events standard and it's time to start testing."}),"\n",(0,s.jsx)(n.h2,{id:"redeploying-contract",children:"Deploying the contract"}),"\n",(0,s.jsx)(n.p,{children:"For the purpose of readability and ease of development, instead of redeploying the contract to the same account, let's create a sub-account and deploy to that instead. You could have deployed to the same account as none of the changes you implemented in this tutorial would have caused errors."}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),"\n",(0,s.jsxs)(n.p,{children:["Run the following command to create a sub-account ",(0,s.jsx)(n.code,{children:"events"})," of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"near create-account events.$NFT_CONTRACT_ID --masterAccount $NFT_CONTRACT_ID --initialBalance 25\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export EVENTS_NFT_CONTRACT_ID=events.$NFT_CONTRACT_ID\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using the build script, build the deploy the contract as you did in the previous tutorials:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile build/nft.wasm --accountId $EVENTS_NFT_CONTRACT_ID\n"})}),"\n",(0,s.jsx)(n.h3,{id:"initialization-and-minting",children:"Initialization and minting"}),"\n",(0,s.jsx)(n.p,{children:"Since this is a new contract, you'll need to initialize and mint a token. Use the following command to initialize the contract:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"near call $EVENTS_NFT_CONTRACT_ID init '{\"owner_id\": \"'$EVENTS_NFT_CONTRACT_ID'\"}' --accountId $EVENTS_NFT_CONTRACT_ID\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, you'll need to mint a token. By running this command, you'll mint a token with a token ID ",(0,s.jsx)(n.code,{children:'"events-token"'})," and the receiver will be your new account. In addition, you're passing in a map with two accounts that will get perpetual royalties whenever your token is sold."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'near call $EVENTS_NFT_CONTRACT_ID nft_mint \'{"token_id": "events-token", "metadata": {"title": "Events Token", "description": "testing out the new events extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$EVENTS_NFT_CONTRACT_ID\'"}\' --accountId $EVENTS_NFT_CONTRACT_ID --amount 0.1\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can check to see if everything went through properly by looking at the output in your CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Doing account.functionCall()\nReceipts: F4oxNfv54cqwUwLUJ7h74H1iE66Y3H7QDfZMmGENwSxd, BJxKNFRuLDdbhbGeLA3UBSbL8UicU7oqHsWGink5WX7S\n\tLog [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_mint","data":[{"owner_id":"events.goteam.examples.testnet","token_ids":["events-token"]}]}\nTransaction Id 4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\n\'\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can see that the event was properly logged!"}),"\n",(0,s.jsx)(n.h3,{id:"transferring",children:"Transferring"}),"\n",(0,s.jsxs)(n.p,{children:["You can now test if your transfer log works as expected by sending ",(0,s.jsx)(n.code,{children:"benjiman.testnet"})," your NFT."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'near call $EVENTS_NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "events-token", "memo": "Go Team :)", "approval_id": 0}\' --accountId $EVENTS_NFT_CONTRACT_ID --depositYocto 1\n'})}),"\n",(0,s.jsx)(n.p,{children:"This should return an output similar to the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Doing account.functionCall()\nReceipts: EoqBxrpv9Dgb8KqK4FdeREawVVLWepEUR15KPNuZ4fGD, HZ4xQpbgc8EfU3PiV72LvfXb2f3dVC1n9aVTbQds9zfR\n\tLog [events.goteam.examples.testnet]: Memo: Go Team :)\n\tLog [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_transfer","data":[{"authorized_id":"events.goteam.examples.testnet","old_owner_id":"events.goteam.examples.testnet","new_owner_id":"benjiman.testnet","token_ids":["events-token"],"memo":"Go Team :)"}]}\nTransaction Id 4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\n\'\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Hurray! At this point, your NFT contract is fully complete and the events standard has been implemented."}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["Today you went through the ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events standard"})," and implemented the necessary logic in your smart contract. You created events for ",(0,s.jsx)(n.a,{href:"#logging-minted-tokens",children:"minting"})," and ",(0,s.jsx)(n.a,{href:"#logging-transfers",children:"transferring"})," NFTs. You then deployed and ",(0,s.jsx)(n.a,{href:"#initialization-and-minting",children:"tested"})," your changes by minting and transferring NFTs."]}),"\n",(0,s.jsx)(n.p,{children:"In the next tutorial, you'll look at the basics of a marketplace contract and how it was built."}),"\n",(0,s.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,s.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["near-cli: ",(0,s.jsx)(n.code,{children:"3.0.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["NFT standard: ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,s.jsx)(n.code,{children:"1.0.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Events standard: ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NEP297 extension"}),", version ",(0,s.jsx)(n.code,{children:"1.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);