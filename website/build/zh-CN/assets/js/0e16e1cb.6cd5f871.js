"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3716],{85910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(85893),s=n(11151);const i={id:"marketplace",title:"Marketplace",sidebar_label:"Marketplace"},o=void 0,r={id:"tutorials/nfts/marketplace",title:"Marketplace",description:"In this tutorial, you'll learn the basics of an NFT marketplace contract where you can buy and sell non-fungible tokens for $NEAR. In the previous tutorials, you went through and created a fully fledged NFT contract that incorporates all the standards found in the NFT standard.",source:"@site/../docs/3.tutorials/nfts/8-marketplace.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/marketplace",permalink:"/zh-CN/tutorials/nfts/marketplace",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/8-marketplace.md",tags:[],version:"current",lastUpdatedBy:"dhsimpson",lastUpdatedAt:1690808042,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",sidebarPosition:8,frontMatter:{id:"marketplace",title:"Marketplace",sidebar_label:"Marketplace"},sidebar:"contracts",previous:{title:"Events",permalink:"/zh-CN/tutorials/nfts/events"},next:{title:"Lazy Minting, Collections, and More!",permalink:"/zh-CN/tutorials/nfts/series"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Understanding the contract",id:"understanding-the-contract",level:2},{value:"lib.rs",id:"lib-rs",level:2},{value:"Initialization function",id:"initialization-function",level:3},{value:"Storage management model",id:"storage-management-model",level:3},{value:"nft_callbacks.rs",id:"nft_callbacks-rs",level:2},{value:"Listing logic",id:"listing-logic",level:3},{value:"sale.rs",id:"sale-rs",level:2},{value:"Sale object",id:"sale-object",level:3},{value:"Removing sales",id:"removing-sales",level:3},{value:"Updating price",id:"updating-price",level:3},{value:"Purchasing NFTs",id:"purchasing-nfts",level:3},{value:"sale_view.rs",id:"sale_view-rs",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization and minting",id:"initialization-and-minting",level:3},{value:"Total supply",id:"total-supply",level:3},{value:"Total supply by owner",id:"total-supply-by-owner",level:3},{value:"Total supply by contract",id:"total-supply-by-contract",level:3},{value:"Query for listing information",id:"query-listing-information",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In this tutorial, you'll learn the basics of an NFT marketplace contract where you can buy and sell non-fungible tokens for $NEAR. In the previous tutorials, you went through and created a fully fledged NFT contract that incorporates all the standards found in the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken",children:"NFT standard"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Throughout this tutorial, you'll learn how a marketplace contract could work on NEAR. This is meant to be an example and there is no canonical implementation. Feel free to branch off and modify this contract to meet your specific needs."}),"\n",(0,a.jsxs)(t.p,{children:["Using the same repository as the previous tutorials, if you checkout the ",(0,a.jsx)(t.code,{children:"8.marketplace"})," branch, you should have the necessary files to complete the tutorial."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git checkout 8.marketplace\n"})}),"\n",(0,a.jsx)(t.h2,{id:"file-structure",children:"File structure"}),"\n",(0,a.jsxs)(t.p,{children:["The changes made include a new root level directory called ",(0,a.jsx)(t.code,{children:"market-contract"}),". This contains both the build script, dependencies as well as the actual contract code as outlined below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"market-contract\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 external.rs\n    \u251c\u2500\u2500 internal.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 nft_callbacks.rs\n    \u251c\u2500\u2500 sale.rs\n    \u2514\u2500\u2500 sale_views.rs\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Usually, when doing work on multiple smart contracts that all pertain to the same repository, it's a good idea to structure them in their own folders as done in this tutorial. To make your work easier when building the smart contracts, we've also modified the repository's ",(0,a.jsx)(t.code,{children:"package.json"})," file so that building both smart contracts can be easily done by running the following command."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn build\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will install the dependencies for both contracts and compile them to ",(0,a.jsx)(t.code,{children:"wasm"})," files that are stored in the following directory."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"nft-tutorial\n\u2514\u2500\u2500 out\n    \u251c\u2500\u2500 main.wasm\n    \u2514\u2500\u2500 market.wasm\n"})}),"\n",(0,a.jsx)(t.h2,{id:"understanding-the-contract",children:"Understanding the contract"}),"\n",(0,a.jsx)(t.p,{children:"At first, the contract can be quite overwhelming but if you strip away all the fluff and dig into the core functionalities, it's actually quite simple. This contract was designed for only one thing - to allow people to buy and sell NFTs for NEAR. This includes the support for paying royalties, updating the price of your sales, removing sales and paying for storage."}),"\n",(0,a.jsx)(t.p,{children:"Let's go through the files and take note of some of the important functions and what they do."}),"\n",(0,a.jsx)(t.h2,{id:"lib-rs",children:"lib.rs"}),"\n",(0,a.jsx)(t.p,{children:"This file outlines what information is stored on the contract as well as some other crucial functions that you'll learn about below."}),"\n",(0,a.jsx)(t.h3,{id:"initialization-function",children:"Initialization function"}),"\n",(0,a.jsxs)(t.p,{children:["The first function you'll look at is the initialization function. This takes an ",(0,a.jsx)(t.code,{children:"owner_id"})," as the only parameter and will default all the storage collections to their default values."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/lib.rs#L85-L105\n"})}),"\n",(0,a.jsx)(t.h3,{id:"storage-management-model",children:"Storage management model"}),"\n",(0,a.jsxs)(t.p,{children:["Next, let's talk about the storage management model chosen for this contract. On the NFT contract, users attached $NEAR to the calls that needed storage paid for. For example, if someone was minting an NFT, they would need to attach ",(0,a.jsx)(t.code,{children:"x"})," amount of NEAR to cover the cost of storing the data on the contract."]}),"\n",(0,a.jsx)(t.p,{children:"On this marketplace contract, however, the storage model is a bit different. Users will need to deposit $NEAR onto the marketplace to cover the storage costs. Whenever someone puts an NFT for sale, the marketplace needs to store that information which costs $NEAR. Users can either deposit as much NEAR as they want so that they never have to worry about storage again or they can deposit the minimum amount to cover 1 sale on an as-needed basis."}),"\n",(0,a.jsx)(t.p,{children:"You might be thinking about the scenario when a sale is purchased. What happens to the storage that is now being released on the contract? This is why we've introduced a storage withdrawal function. This allows users to withdraw any excess storage that is not being used. Let's go through some scenarios to understand the logic. The required storage for 1 sale is 0.01 NEAR on the marketplace contract."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Scenario A"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Benji wants to list his NFT on the marketplace but has never paid for storage."}),"\n",(0,a.jsxs)(t.li,{children:["He deposits exactly 0.01 NEAR using the ",(0,a.jsx)(t.code,{children:"storage_deposit"})," method. This will cover 1 sale."]}),"\n",(0,a.jsxs)(t.li,{children:["He lists his NFT on the marketplace and is now using up 1 out of his prepaid 1 sales and has no more storage left. If he were to call ",(0,a.jsx)(t.code,{children:"storage_withdraw"}),", nothing would happen."]}),"\n",(0,a.jsx)(t.li,{children:"Dorian loves his NFT and quickly purchases it before anybody else can. This means that Benji's sale has now been taken down (since it was purchased) and Benji is using up 0 out of his prepaid 1 sales. In other words, he has an excess of 1 sale or 0.01 NEAR."}),"\n",(0,a.jsxs)(t.li,{children:["Benji can now call ",(0,a.jsx)(t.code,{children:"storage_withdraw"})," and will be transferred his 0.01 NEAR back. On the contract's side, after withdrawing, he will have 0 sales paid for and will need to deposit storage before trying to list anymore NFTs."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Scenario B"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Dorian owns one hundred beautiful NFTs and knows that he wants to list all of them."}),"\n",(0,a.jsxs)(t.li,{children:["To avoid having to call ",(0,a.jsx)(t.code,{children:"storage_deposit"})," everytime he wants to list an NFT, he calls it once. Since Dorian is a baller, he attaches 10 NEAR which is enough to cover 1000 sales. He now has an excess of 9 NEAR or 900 sales."]}),"\n",(0,a.jsxs)(t.li,{children:["Dorian needs the 9 NEAR for something else but doesn't want to take down his 100 listings. Since he has an excess of 9 NEAR, he can easily withdraw and still have his 100 listings. After calling ",(0,a.jsx)(t.code,{children:"storage_withdraw"})," and being transferred 9 NEAR, he will have an excess of 0 sales."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"With this behavior in mind, the following two functions outline the logic."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/lib.rs#L110-L173\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In this contract, the storage required for each sale is 0.01 NEAR but you can query that information using the ",(0,a.jsx)(t.code,{children:"storage_minimum_balance"})," function. In addition, if you wanted to check how much storage a given account has paid, you can query the ",(0,a.jsx)(t.code,{children:"storage_balance_of"})," function."]}),"\n",(0,a.jsxs)(t.p,{children:["With that out of the way, it's time to move onto the ",(0,a.jsx)(t.code,{children:"nft_callbacks.rs"})," file where you'll look at how NFTs are put for sale."]}),"\n",(0,a.jsx)(t.h2,{id:"nft_callbacks-rs",children:"nft_callbacks.rs"}),"\n",(0,a.jsxs)(t.p,{children:["This file is responsible for the logic used to put NFTs for sale. If you remember from the ",(0,a.jsx)(t.a,{href:"/tutorials/nfts/approvals#marketplace-integrations",children:"marketplaces section"})," of the approvals tutorial, when users call ",(0,a.jsx)(t.code,{children:"nft_approve"})," and pass in a message, it will perform a cross-contract call to the ",(0,a.jsx)(t.code,{children:"receiver_id"}),"'s contract and call the method ",(0,a.jsx)(t.code,{children:"nft_on_approve"}),". This ",(0,a.jsx)(t.code,{children:"nft_callbacks.rs"})," file will implement that function."]}),"\n",(0,a.jsx)(t.h3,{id:"listing-logic",children:"Listing logic"}),"\n",(0,a.jsxs)(t.p,{children:["The first important thing to note is the ",(0,a.jsx)(t.code,{children:"SaleArgs"})," struct. This is what the market contract is expecting the message that the user passes into ",(0,a.jsx)(t.code,{children:"nft_approve"})," on the NFT contract to be. This outlines the sale price in yoctoNEAR for the NFT that is listed."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/nft_callbacks.rs#L5-L10\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Next, we'll look at the ",(0,a.jsx)(t.code,{children:"nft_on_approve"})," function which is called via a cross-contract call by the NFT contract. This will make sure that the signer has enough storage to cover adding another sale. It will then attempt to get the ",(0,a.jsx)(t.code,{children:"SaleArgs"})," from the message and create the listing."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/nft_callbacks.rs#L32-L134\n"})}),"\n",(0,a.jsx)(t.h2,{id:"sale-rs",children:"sale.rs"}),"\n",(0,a.jsxs)(t.p,{children:["Now that you're familiar with the process of both adding storage and listing NFTs on the marketplace, let's go through what you can do once a sale has been listed. The ",(0,a.jsx)(t.code,{children:"sale.rs"})," file outlines the functions for updating the price, removing, and purchasing NFTs."]}),"\n",(0,a.jsx)(t.h3,{id:"sale-object",children:"Sale object"}),"\n",(0,a.jsx)(t.p,{children:"It's important to understand what information the contract is storing for each sale object. Since the marketplace has many NFTs listed that come from different NFT contracts, simply storing the token ID would not be enough to distinguish between different NFTs. This is why you need to keep track of both the token ID and the contract by which the NFT came from. In addition, for each listing, the contract must keep track of the approval ID it was given to transfer the NFT. Finally, the owner and sale conditions are needed."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/sale.rs#L7-L18\n"})}),"\n",(0,a.jsx)(t.h3,{id:"removing-sales",children:"Removing sales"}),"\n",(0,a.jsxs)(t.p,{children:["In order to remove a listing, the owner must call the ",(0,a.jsx)(t.code,{children:"remove_sale"})," function and pass the NFT contract and token ID. Behind the scenes, this calls the ",(0,a.jsx)(t.code,{children:"internal_remove_sale"})," function which you can find in the ",(0,a.jsx)(t.code,{children:"internal.rs"})," file. This will assert one yoctoNEAR for security reasons."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/sale.rs#L23-L34\n"})}),"\n",(0,a.jsx)(t.h3,{id:"updating-price",children:"Updating price"}),"\n",(0,a.jsxs)(t.p,{children:["In order to update the list price of a token, the owner must call the ",(0,a.jsx)(t.code,{children:"update_price"})," function and pass in the contract, token ID, and desired price. This will get the sale object, change the sale conditions, and insert it back. For security reasons, this function will assert one yoctoNEAR."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/sale.rs#L36-L65\n"})}),"\n",(0,a.jsx)(t.h3,{id:"purchasing-nfts",children:"Purchasing NFTs"}),"\n",(0,a.jsxs)(t.p,{children:["For purchasing NFTs, you must call the ",(0,a.jsx)(t.code,{children:"offer"})," function. It takes an ",(0,a.jsx)(t.code,{children:"nft_contract_id"})," and ",(0,a.jsx)(t.code,{children:"token_id"})," as parameters. You must attach the correct amount of NEAR to the call in order to purchase. Behind the scenes, this will make sure your deposit is greater than the list price and call a private method ",(0,a.jsx)(t.code,{children:"process_purchase"})," which will perform a cross-contract call to the NFT contract to invoke the ",(0,a.jsx)(t.code,{children:"nft_transfer_payout"})," function. This will transfer the NFT using the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approval management"})," standard that you learned about and it will return the ",(0,a.jsx)(t.code,{children:"Payout"})," object which includes royalties."]}),"\n",(0,a.jsxs)(t.p,{children:["The marketplace will then call ",(0,a.jsx)(t.code,{children:"resolve_purchase"})," where it will check for malicious payout objects and then if everything went well, it will pay the correct accounts."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/sale.rs#L67-L99\n"})}),"\n",(0,a.jsx)(t.h2,{id:"sale_view-rs",children:"sale_view.rs"}),"\n",(0,a.jsxs)(t.p,{children:["The final file we'll go through is the ",(0,a.jsx)(t.code,{children:"sale_view.rs"})," file. This is where some of the enumeration methods are outlined. It allows users to query for important information regarding sales."]}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),"\n",(0,a.jsx)(t.p,{children:"Run the following command to create a sub-account marketplace of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near create-account marketplace.$NFT_CONTRACT_ID --masterAccount $NFT_CONTRACT_ID --initialBalance 25\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export MARKETPLACE_CONTRACT_ID=marketplace.$NFT_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.p,{children:"Using the build script, deploy the contract as you did in the previous tutorials:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near deploy --wasmFile out/market.wasm --accountId\n $MARKETPLACE_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.h3,{id:"initialization-and-minting",children:"Initialization and minting"}),"\n",(0,a.jsx)(t.p,{children:"Since this is a new contract, you'll need to initialize it. Use the following command to initialize the contract:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near call $MARKETPLACE_CONTRACT_ID new '{\"owner_id\": \"'$MARKETPLACE_CONTRACT_ID'\"}' --accountId $MARKETPLACE_CONTRACT_ID\n"})}),"\n",(0,a.jsx)(t.h3,{id:"total-supply",children:"Total supply"}),"\n",(0,a.jsxs)(t.p,{children:["To query for the total supply of NFTs listed on the marketplace, you can call the ",(0,a.jsx)(t.code,{children:"get_supply_sales"})," function. An example can be seen below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view $MARKETPLACE_CONTRACT_ID get_supply_sales\n"})}),"\n",(0,a.jsx)(t.h3,{id:"total-supply-by-owner",children:"Total supply by owner"}),"\n",(0,a.jsxs)(t.p,{children:["To query for the total supply of NFTs listed by a specific owner on the marketplace, you can call the ",(0,a.jsx)(t.code,{children:"get_supply_by_owner_id"})," function. An example can be seen below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_supply_by_owner_id \'{"account_id": "benji.testnet"}\'\n'})}),"\n",(0,a.jsx)(t.h3,{id:"total-supply-by-contract",children:"Total supply by contract"}),"\n",(0,a.jsxs)(t.p,{children:["To query for the total supply of NFTs that belong to a specific contract, you can call the ",(0,a.jsx)(t.code,{children:"get_supply_by_nft_contract_id"})," function. An example can be seen below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_supply_by_nft_contract_id \'{"nft_contract_id": "fayyr-nft.testnet"}\'\n'})}),"\n",(0,a.jsx)(t.h3,{id:"query-listing-information",children:"Query for listing information"}),"\n",(0,a.jsxs)(t.p,{children:["To query for important information for a specific listing, you can call the ",(0,a.jsx)(t.code,{children:"get_sale"})," function. This requires that you pass in the ",(0,a.jsx)(t.code,{children:"nft_contract_token"}),". This is essentially the unique identifier for sales on the market contract as explained earlier. It consists of the NFT contract followed by a ",(0,a.jsx)(t.code,{children:"DELIMITER"})," followed by the token ID. In this contract, the ",(0,a.jsx)(t.code,{children:"DELIMITER"})," is simply a period: ",(0,a.jsx)(t.code,{children:"."}),".  An example of this query can be seen below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_sale \'{"nft_contract_token": "fayyr-nft.testnet.token-42"}\'\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In addition, you can query for paginated information about the listings for a given owner by calling the ",(0,a.jsx)(t.code,{children:"get_sales_by_owner_id"})," function."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_sales_by_owner_id \'{"account_id": "benji.testnet", "from_index": "5", "limit": 10}\'\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Finally, you can query for paginated information about the listings that originate from a given NFT contract by calling the ",(0,a.jsx)(t.code,{children:"get_sales_by_nft_contract_id"})," function."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_sales_by_nft_contract_id \'{"nft_contract_id": "fayyr-nft.testnet", "from_index": "5", "limit": 10}\'\n'})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["In this tutorial, you learned about the basics of a marketplace contract and how it works. You went through the ",(0,a.jsx)(t.a,{href:"#lib-rs",children:"lib.rs"})," file and learned about the ",(0,a.jsx)(t.a,{href:"#initialization-function",children:"initialization function"})," in addition to the ",(0,a.jsx)(t.a,{href:"#storage-management-model",children:"storage management"})," model."]}),"\n",(0,a.jsxs)(t.p,{children:["You then went through the ",(0,a.jsx)(t.a,{href:"#nft_callbacks-rs",children:"nft_callbacks"})," file to understand how to ",(0,a.jsx)(t.a,{href:"#listing-logic",children:"list NFTs"}),". In addition, you went through some important functions needed for after you've listed an NFT. This includes ",(0,a.jsx)(t.a,{href:"#removing-sales",children:"removing sales"}),", ",(0,a.jsx)(t.a,{href:"#updating-price",children:"updating the price"}),", and ",(0,a.jsx)(t.a,{href:"#purchasing-nfts",children:"purchasing NFTs"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Finally, you went through the enumeration methods found in the ",(0,a.jsx)(t.a,{href:"#sale_view-rs",children:(0,a.jsx)(t.code,{children:"sale_view"})})," file. These allow you to query for important information found on the marketplace contract."]}),"\n",(0,a.jsxs)(t.p,{children:["You should now have a solid understanding of NFTs and marketplaces on NEAR. Feel free to branch off and expand on these contracts to create whatever cool applications you'd like. In the ",(0,a.jsx)(t.a,{href:"/zh-CN/tutorials/nfts/series",children:"next tutorial"}),", you'll learn how to take the existing NFT contract and optimize it to allow for:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Lazy Minting"}),"\n",(0,a.jsx)(t.li,{children:"Creating Collections"}),"\n",(0,a.jsx)(t.li,{children:"Allowlisting functionalities"}),"\n",(0,a.jsx)(t.li,{children:"Optimized Storage Models"}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["near-cli: ",(0,a.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,a.jsxs)(t.li,{children:["NFT standard: ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,a.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);