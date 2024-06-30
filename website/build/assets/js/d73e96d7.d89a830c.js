"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5405],{62523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=n(85893),s=n(11151),o=n(71183);const a={id:"core",title:"Transfers"},i=void 0,l={id:"tutorials/nfts/core",title:"Transfers",description:"In this tutorial you'll learn how to implement NFT transfers as defined in the core standards into your smart contract.",source:"@site/../docs/3.tutorials/nfts/4-core.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/core",permalink:"/tutorials/nfts/core",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/4-core.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1719787277e3,sidebarPosition:4,frontMatter:{id:"core",title:"Transfers"},sidebar:"tutorials",previous:{title:"Enumeration",permalink:"/tutorials/nfts/enumeration"},next:{title:"Events",permalink:"/tutorials/nfts/events"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Transfer function",id:"transfer-function",level:3},{value:"Internal helper functions",id:"internal-helper-functions",level:3},{value:"assert_one_yocto",id:"assert_one_yocto",level:4},{value:"internal_transfer",id:"internal_transfer",level:4},{value:"Transfer call function",id:"transfer-call-function",level:3},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Testing the new changes",id:"testing-changes",level:2},{value:"Testing the transfer function",id:"testing-the-transfer-function",level:3},{value:"Testing the transfer call function",id:"testing-the-transfer-call-function",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this tutorial you'll learn how to implement NFT transfers as defined in the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"core standards"})," into your smart contract."]}),"\n",(0,r.jsx)(t.p,{children:"We will define two methods for transferring NFTs:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"nft_transfer"}),": that transfers ownership of an NFT from one account to another"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"nft_transfer_call"}),': that transfers an NFT to a "receiver" and calls a method on the receiver\'s account']}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Why two transfer methods?",type:"tip",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"nft_transfer"})," is a simple transfer between two user, while ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," allows you to ",(0,r.jsx)(t.strong,{children:"attach an NFT to a function call"})]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["Up until this point, you've created a simple NFT smart contract that allows users to mint tokens and view information using the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration standards"}),". Today, you'll expand your smart contract to allow for users to not only mint tokens, but transfer them as well."]}),"\n",(0,r.jsxs)(t.p,{children:["As we did in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"minting tutorial"}),", let's break down the problem into multiple subtasks to make our lives easier. When a token is minted, information is stored in 3 places:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokens_per_owner"}),": set of tokens for each account."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokens_by_id"}),": maps a token ID to a ",(0,r.jsx)(t.code,{children:"Token"})," object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"token_metadata_by_id"}),": maps a token ID to its metadata."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Let's now consider the following scenario. If Benji owns token A and wants to transfer it to Mike as a birthday gift, what should happen? First of all, token A should be removed from Benji's set of tokens and added to Mike's set of tokens."}),"\n",(0,r.jsxs)(t.p,{children:["If that's the only logic you implement, you'll run into some problems. If you were to do a ",(0,r.jsx)(t.code,{children:"view"})," call to query for information about that token after it's been transferred to Mike, it would still say that Benji is the owner."]}),"\n",(0,r.jsxs)(t.p,{children:["This is because the contract is still mapping the token ID to the old ",(0,r.jsx)(t.code,{children:"Token"})," object that contains the ",(0,r.jsx)(t.code,{children:"owner_id"})," field set to Benji's account ID. You still have to change the ",(0,r.jsx)(t.code,{children:"tokens_by_id"})," data structure so that the token ID maps to a new ",(0,r.jsx)(t.code,{children:"Token"})," object which has Mike as the owner."]}),"\n",(0,r.jsx)(t.p,{children:"With that being said, the final process for when an owner transfers a token to a receiver should be the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Remove the token from the owner's set."}),"\n",(0,r.jsx)(t.li,{children:"Add the token to the receiver's set."}),"\n",(0,r.jsxs)(t.li,{children:["Map a token ID to a new ",(0,r.jsx)(t.code,{children:"Token"})," object containing the correct owner."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["You might be curious as to why we don't edit the ",(0,r.jsx)(t.code,{children:"token_metadata_by_id"})," field. This is because no matter who owns the token, the token ID will always map to the same metadata. The metadata should never change and so we can just leave it alone."]})}),"\n",(0,r.jsx)(t.p,{children:"At this point, you're ready to move on and make the necessary modifications to your smart contract."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),"\n",(0,r.jsxs)(t.p,{children:["Let's start our journey in the ",(0,r.jsx)(t.code,{children:"nft-contract-skeleton/src/nft_core.rs"})," file."]}),"\n",(0,r.jsx)(t.h3,{id:"transfer-function",children:"Transfer function"}),"\n",(0,r.jsxs)(t.p,{children:["You'll start by implementing the ",(0,r.jsx)(t.code,{children:"nft_transfer"})," logic. This function will transfer the specified ",(0,r.jsx)(t.code,{children:"token_id"})," to the ",(0,r.jsx)(t.code,{children:"receiver_id"})," with an optional ",(0,r.jsx)(t.code,{children:"memo"})," such as ",(0,r.jsx)(t.code,{children:'"Happy Birthday Mike!"'}),"."]}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"60",end:"80",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/nft_core.rs"}),"\n",(0,r.jsxs)(t.p,{children:["There are a couple things to notice here. Firstly, we've introduced a new function called ",(0,r.jsx)(t.code,{children:"assert_one_yocto()"}),", which ensures the user has attached exactly one yoctoNEAR to the call. This is a ",(0,r.jsx)(t.a,{href:"/build/smart-contracts/security/one-yocto",children:"security measure"})," to ensure that the user is signing the transaction with a ",(0,r.jsx)(t.a,{href:"/concepts/protocol/access-keys",children:"full access key"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Since the transfer function is potentially transferring very valuable assets, you'll want to make sure that whoever is calling the function has a full access key."}),"\n",(0,r.jsxs)(t.p,{children:["Secondly, we've introduced an ",(0,r.jsx)(t.code,{children:"internal_transfer"})," method. This will perform all the logic necessary to transfer an NFT."]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"internal-helper-functions",children:"Internal helper functions"}),"\n",(0,r.jsxs)(t.p,{children:["Let's quickly move over to the ",(0,r.jsx)(t.code,{children:"nft-contract/src/internal.rs"})," file so that you can implement the ",(0,r.jsx)(t.code,{children:"assert_one_yocto()"})," and ",(0,r.jsx)(t.code,{children:"internal_transfer"})," methods."]}),"\n",(0,r.jsxs)(t.p,{children:["Let's start with the easier one, ",(0,r.jsx)(t.code,{children:"assert_one_yocto()"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"assert_one_yocto",children:"assert_one_yocto"}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"14",end:"21",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/internal.rs"}),"\n",(0,r.jsx)(t.h4,{id:"internal_transfer",children:"internal_transfer"}),"\n",(0,r.jsxs)(t.p,{children:["It's now time to explore the ",(0,r.jsx)(t.code,{children:"internal_transfer"})," function which is the core of this tutorial. This function takes the following parameters:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"sender_id"}),": the account that's attempting to transfer the token."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"receiver_id"}),": the account that's receiving the token."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"token_id"}),": the token ID being transferred."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"memo"}),": an optional memo to include."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The first thing we have to do is to make sure that the sender is authorized to transfer the token. In this case, we just make sure that the sender is the owner of the token. We do that by getting the ",(0,r.jsx)(t.code,{children:"Token"})," object using the ",(0,r.jsx)(t.code,{children:"token_id"})," and making sure that the sender is equal to the token's ",(0,r.jsx)(t.code,{children:"owner_id"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Second, we remove the token ID from the sender's list and add the token ID to the receiver's list of tokens. Finally, we create a new ",(0,r.jsx)(t.code,{children:"Token"})," object with the receiver as the owner and remap the token ID to that newly created object."]}),"\n",(0,r.jsxs)(t.p,{children:["We want to create this function within the contract implementation (below the ",(0,r.jsx)(t.code,{children:"internal_add_token_to_owner"})," you created in the minting tutorial)."]}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"96",end:"132",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/internal.rs"}),"\n",(0,r.jsxs)(t.p,{children:["Now let's look at the function called ",(0,r.jsx)(t.code,{children:"internal_remove_token_from_owner"}),". That function implements the functionality for removing a token ID from an owner's set."]}),"\n",(0,r.jsxs)(t.p,{children:["In the remove function, we get the set of tokens for a given account ID and then remove the passed in token ID. If the account's set is empty after the removal, we simply remove the account from the ",(0,r.jsx)(t.code,{children:"tokens_per_owner"})," data structure."]}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"71",end:"94",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/internal.rs"}),"\n",(0,r.jsxs)(t.p,{children:["Your ",(0,r.jsx)(t.code,{children:"internal.rs"})," file should now have the following outline:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"internal.rs\n\u251c\u2500\u2500 hash_account_id\n\u251c\u2500\u2500 assert_one_yocto\n\u251c\u2500\u2500 refund_deposit\n\u2514\u2500\u2500 impl Contract\n    \u251c\u2500\u2500 internal_add_token_to_owner\n    \u251c\u2500\u2500 internal_remove_token_from_owner\n    \u2514\u2500\u2500 internal_transfer\n"})}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"transfer-call-function",children:"Transfer call function"}),"\n",(0,r.jsxs)(t.p,{children:["The idea behind the ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," function is to transfer an NFT to a receiver while calling a method on the receiver's contract all in the same transaction."]}),"\n",(0,r.jsxs)(t.p,{children:["This way, we can effectively ",(0,r.jsx)(t.strong,{children:"attach an NFT to a function call"}),"."]}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"82",end:"126",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/nft_core.rs"}),"\n",(0,r.jsxs)(t.p,{children:["The function will first assert that the caller attached exactly 1 yocto for security purposes. It will then transfer the NFT using ",(0,r.jsx)(t.code,{children:"internal_transfer"})," and start the cross contract call. It will call the method ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," on the ",(0,r.jsx)(t.code,{children:"receiver_id"}),"'s contract, and create a promise to call back ",(0,r.jsx)(t.code,{children:"nft_resolve_transfer"})," with the result. This is a very common workflow when dealing with ",(0,r.jsx)(t.a,{href:"/build/smart-contracts/anatomy/crosscontract",children:"cross contract calls"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["As dictated by the core standard, the function we are calling (",(0,r.jsx)(t.code,{children:"nft_on_transfer"}),") needs to return a boolean stating whether or not you should return the NFT to it's original owner."]}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"146",end:"201",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/nft_core.rs"}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," returned true or the called failed, you should send the token back to it's original owner. On the contrary, if false was returned, no extra logic is needed."]}),"\n",(0,r.jsxs)(t.p,{children:["As for the return value of our function ",(0,r.jsx)(t.code,{children:"nft_resolve_transfer"}),", the standard dictates that the function should return a boolean indicating whether or not the receiver successfully received the token or not."]}),"\n",(0,r.jsxs)(t.p,{children:["This means that if ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," returned true, you should return false. This is because if the token is being returned its original owner, the ",(0,r.jsx)(t.code,{children:"receiver_id"})," didn't successfully receive the token in the end. On the contrary, if ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," returned false, you should return true since we don't need to return the token and thus the ",(0,r.jsx)(t.code,{children:"receiver_id"})," successfully owns the token."]}),"\n",(0,r.jsx)(t.p,{children:"With that finished, you've now successfully added the necessary logic to allow users to transfer NFTs. It's now time to deploy and do some testing."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploying the contract"}),"\n",(0,r.jsx)(t.p,{children:"Using cargo-near, deploy the contract as you did in the previous tutorials:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cargo near deploy $NFT_CONTRACT_ID without-init-call network-config testnet sign-with-keychain send\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you haven't completed the previous tutorials and are just following along with this one, simply create an account and login with your CLI using ",(0,r.jsx)(t.code,{children:"near login"}),". You can then export an environment variable ",(0,r.jsx)(t.code,{children:"export NFT_CONTRACT_ID=YOUR_ACCOUNT_ID_HERE"}),"."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"testing-changes",children:"Testing the new changes"}),"\n",(0,r.jsxs)(t.p,{children:["Now that you've deployed a patch fix to the contract, it's time to move onto testing. Using the previous NFT contract where you had minted a token to yourself, you can test the ",(0,r.jsx)(t.code,{children:"nft_transfer"})," method. If you transfer the NFT, it should be removed from your account's collectibles displayed in the wallet. In addition, if you query any of the enumeration functions, it should show that you are no longer the owner."]}),"\n",(0,r.jsxs)(t.p,{children:["Let's test this out by transferring an NFT to the account ",(0,r.jsx)(t.code,{children:"benjiman.testnet"})," and seeing if the NFT is no longer owned by you."]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"testing-the-transfer-function",children:"Testing the transfer function"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["This means that the NFT won't be recoverable unless the account ",(0,r.jsx)(t.code,{children:"benjiman.testnet"})," transfers it back to you. If you don't want your NFT lost, make a new account and transfer the token to that account instead."]})}),"\n",(0,r.jsxs)(t.p,{children:["If you run the following command, it will transfer the token ",(0,r.jsx)(t.code,{children:'"token-1"'})," to the account ",(0,r.jsx)(t.code,{children:"benjiman.testnet"})," with the memo ",(0,r.jsx)(t.code,{children:'"Go Team :)"'}),". Take note that you're also attaching exactly 1 yoctoNEAR by using the ",(0,r.jsx)(t.code,{children:"--depositYocto"})," flag."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you used a different token ID in the previous tutorials, replace ",(0,r.jsx)(t.code,{children:"token-1"})," with your token ID."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near contract call-function as-transaction $NFT_CONTRACT_ID nft_transfer json-args \'{"receiver_id": "benjiman.testnet", "token_id": "token-1", "memo": "Go Team :)"}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'1 yoctoNEAR\' sign-as $NFT_CONTRACT_ID network-config testnet sign-with-legacy-keychain send\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If you now query for all the tokens owned by your account, that token should be missing. Similarly, if you query for the list of tokens owned by ",(0,r.jsx)(t.code,{children:"benjiman.testnet"}),", that account should now own your NFT."]}),"\n",(0,r.jsx)("hr",{class:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"testing-the-transfer-call-function",children:"Testing the transfer call function"}),"\n",(0,r.jsxs)(t.p,{children:["Now that you've tested the ",(0,r.jsx)(t.code,{children:"nft_transfer"})," function, it's time to test the ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," function. If you try to transfer an NFT to a receiver that does ",(0,r.jsx)(t.strong,{children:"not"})," implement the ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," function, the contract will panic and the NFT will ",(0,r.jsx)(t.strong,{children:"not"})," be transferred. Let's test this functionality below."]}),"\n",(0,r.jsx)(t.p,{children:"First mint a new NFT that will be used to test the transfer call functionality."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near contract call-function as-transaction $NFT_CONTRACT_ID nft_mint json-args \'{"token_id": "token-2", "metadata": {"title": "NFT Tutorial Token", "description": "Testing the transfer call function", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$NFT_CONTRACT_ID\'"}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'0.1 NEAR\' sign-as $NFT_CONTRACT_ID network-config testnet sign-with-legacy-keychain send\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now that you've minted the token, you can try to transfer the NFT to the account ",(0,r.jsx)(t.code,{children:"no-contract.testnet"})," which as the name suggests, doesn't have a contract. This means that the receiver doesn't implement the ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," function and the NFT should remain yours after the transaction is complete."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near contract call-function as-transaction $NFT_CONTRACT_ID nft_transfer_call json-args \'{"receiver_id": "no-contract.testnet", "token_id": "token-2", "msg": "foo"}\' prepaid-gas \'100.0 Tgas\' attached-deposit \'1 yoctoNEAR\' sign-as $NFT_CONTRACT_ID network-config testnet sign-with-legacy-keychain send\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If you query for your tokens, you should still have ",(0,r.jsx)(t.code,{children:"token-2"})," and at this point, you're finished!"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["In this tutorial, you learned how to expand an NFT contract past the minting functionality and you added ways for users to transfer NFTs. You ",(0,r.jsx)(t.a,{href:"#introduction",children:"broke down"})," the problem into smaller, more digestible subtasks and took that information and implemented both the ",(0,r.jsx)(t.a,{href:"#transfer-function",children:"NFT transfer"})," and ",(0,r.jsx)(t.a,{href:"#transfer-call-function",children:"NFT transfer call"})," functions. In addition, you deployed another ",(0,r.jsx)(t.a,{href:"#redeploying-contract",children:"patch fix"})," to your smart contract and ",(0,r.jsx)(t.a,{href:"#testing-changes",children:"tested"})," the transfer functionality."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/approvals",children:"next tutorial"}),", you'll learn about the approval management system and how you can approve others to transfer tokens on your behalf."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.77.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["near-cli-rs: ",(0,r.jsx)(t.code,{children:"0.11.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["cargo-near ",(0,r.jsx)(t.code,{children:"0.6.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Enumeration standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>a});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var o=n(85893);function a(e){var t=e.children,n=e.hidden,a=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),s=n(36905),o=n(12466),a=n(16550),i=n(20469),l=n(91980),c=n(67392),h=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,o=(0,a.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:s});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function p(e){var t,n,s,o,a=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,p=u(e),x=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:p})})),j=x[0],g=x[1],y=m({queryString:c,groupId:d}),v=y[0],b=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,h.Nk)(t),s=n[0],o=n[1],[s,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=w[0],_=w[1],T=function(){var e=null!=v?v:k;return f({value:e,tabValues:p})?e:null}();return(0,i.Z)((function(){T&&g(T)}),[T]),{selectedValue:j,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),b(e),_(e)}),[b,_,p]),tabValues:p}}var x=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function y(e){var t=e.className,n=e.block,r=e.selectedValue,a=e.selectValue,i=e.tabValues,l=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(c(t),a(s))},d=function(e){var t,n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var r,s=l.indexOf(e.currentTarget)+1;n=null!=(r=l[s])?r:l[0];break;case"ArrowLeft":var o,a=l.indexOf(e.currentTarget)-1;n=null!=(o=l[a])?o:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:h},o,{className:(0,s.Z)("tabs__item",j.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,s=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=o.find((function(e){return e.props.value===s}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function b(e){var t=p(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(y,Object.assign({},t,e)),(0,g.jsx)(v,Object.assign({},t,e))]})}function w(e){var t=(0,x.Z)();return(0,g.jsx)(b,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>x,SQ:()=>p});var r=n(67294),s=n(74866),o=n(85162),a=n(74165),i=n(15861),l=n(1841),c=n.n(l),h=n(85893);function d(){return(d=(0,i.Z)((0,a.Z)().mark((function e(t,n,r){var s,o,i,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o=localStorage.getItem(t+"-until"))&&o>Date.now())){e.next=5;break}s=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(t,s),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=s.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):i.length,i=i.slice(n,r),l=i.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var t=e.url,n=e.start,s=e.end,o=e.language,a=e.fname,i=e.metastring,l=(0,r.useState)("Loading..."),u=l[0],f=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),s=r[0],o=r[1];return r[2],"https://raw.githubusercontent.com/"+s+"/"+o+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,s);r.then((function(e){return f(e)}))})),(0,h.jsxs)("div",{fname:a,children:[(0,h.jsx)(c(),{language:o,metastring:i+" showLineNumbers",children:u}),(0,h.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,h.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,h.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,h.jsx)(o.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function p(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),s=n.start,o=n.end,a=n.fname;if(e.type===x)return x({url:r,start:s,end:o,language:t,fname:a});return e}(e,n)})),1==t.length?(0,h.jsx)(o.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,h.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,h.jsx)(o.Z,{value:t,label:e.props.fname,children:e})}))})}function x(e){var t=e.url,n=e.start,r=e.end,s=e.language,o=e.fname,a=e.metastring;return u({url:t,start:n,end:r,language:s,fname:o,metastring:a})}}}]);