"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7074],{31832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(85893),s=n(11151);const i={id:"skeleton",title:"Skeleton and Rust Architecture",sidebar_label:"Contract Architecture"},o=void 0,l={id:"tutorials/nfts/skeleton",title:"Skeleton and Rust Architecture",description:"In this article, you'll learn about the basic architecture behind the NFT contract that you'll develop while following this \"Zero to Hero\" series.",source:"@site/../docs/3.tutorials/nfts/1-skeleton.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/skeleton",permalink:"/ko/tutorials/nfts/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1674302473,formattedLastUpdatedAt:"2023\ub144 1\uc6d4 21\uc77c",sidebarPosition:1,frontMatter:{id:"skeleton",title:"Skeleton and Rust Architecture",sidebar_label:"Contract Architecture"},sidebar:"contracts",previous:{title:"Pre-deployed Contract",permalink:"/ko/tutorials/nfts/predeployed-contract"},next:{title:"Minting",permalink:"/ko/tutorials/nfts/minting"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Source files",id:"source-files",level:3},{value:"<code>approval.rs</code>",id:"approvalrs",level:2},{value:"<code>enumeration.rs</code>",id:"enumerationrs",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>mint.rs</code>",id:"mintrs",level:2},{value:"<code>nft_core.rs</code>",id:"nft_corers",level:2},{value:"<code>royalty.rs</code>",id:"royaltyrs",level:2},{value:"Building the skeleton",id:"building-the-skeleton",level:2},{value:"Conclusion",id:"conclusion",level:2}];function a(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["In this article, you'll learn about the basic architecture behind the NFT contract that you'll develop while following this ",(0,r.jsx)(t.em,{children:'"Zero to Hero"'})," series.\nYou'll discover the contract's layout and you'll see how the Rust files are structured in order to build a feature-complete smart contract."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"New to Rust?",type:"info",children:(0,r.jsxs)(t.p,{children:["If you are new to Rust and want to dive into smart contract development, our ",(0,r.jsx)(t.a,{href:"/develop/quickstart-guide",children:"Quick-start guide"})," is a great place to start."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"This tutorial presents the code skeleton for the NFT smart contract and its file structure.\nYou'll find how all the functions are laid out as well as the missing Rust code that needs to be filled in.\nOnce every file and function has been covered, you'll go through the process of building the mock-up contract to confirm that your Rust toolchain works as expected."}),"\n",(0,r.jsx)(t.h2,{id:"file-structure",children:"File structure"}),"\n",(0,r.jsxs)(t.p,{children:["Following a regular ",(0,r.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," project, the file structure for this smart contract has:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Cargo.toml"})," file to define the code dependencies (similar to ",(0,r.jsx)(t.code,{children:"package.json"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"src"})," folder where all the Rust source files are stored"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"target"})," folder where the compiled ",(0,r.jsx)(t.code,{children:"wasm"})," will output to"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"build.sh"})," script that has been added to provide a convenient way to compile the source code"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"source-files",children:"Source files"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"File"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#approvalrs",children:"approval.rs"})}),(0,r.jsx)(t.td,{children:"Has the functions that controls the access and transfers of non-fungible tokens."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#enumerationrs",children:"enumeration.rs"})}),(0,r.jsx)(t.td,{children:"Contains the methods to list NFT tokens and their owners."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#librs",children:"lib.rs"})}),(0,r.jsx)(t.td,{children:"Holds the smart contract initialization functions."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#metadatars",children:"metadata.rs"})}),(0,r.jsx)(t.td,{children:"Defines the token and metadata structure."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#mintrs",children:"mint.rs"})}),(0,r.jsx)(t.td,{children:"Contains token minting logic."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nft_corers",children:"nft_core.rs"})}),(0,r.jsx)(t.td,{children:"Core logic that allows you to transfer NFTs between users."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#royaltyrs",children:"royalty.rs"})}),(0,r.jsx)(t.td,{children:"Contains payout-related functions."})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"nft-contract\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 approval.rs\n    \u251c\u2500\u2500 enumeration.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u251c\u2500\u2500 mint.rs\n    \u251c\u2500\u2500 nft_core.rs\n    \u2514\u2500\u2500 royalty.rs\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Explore the code in our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/",children:"GitHub repository"}),"."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"approvalrs",children:(0,r.jsx)(t.code,{children:"approval.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This allows people to approve other accounts to transfer NFTs on their behalf."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This file contains the logic that complies with the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approvals management"})," extension. Here is a breakdown of the methods and their functions:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_approve"})}),(0,r.jsx)(t.td,{children:"Approves an account ID to transfer a token on your behalf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_is_approved"})}),(0,r.jsx)(t.td,{children:"Checks if the input account has access to approve the token ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_revoke"})}),(0,r.jsx)(t.td,{children:"Revokes a specific account from transferring the token on your behalf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_revoke_all"})}),(0,r.jsx)(t.td,{children:"Revokes all accounts from transferring the token on your behalf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_on_approve"})}),(0,r.jsxs)(t.td,{children:["This callback function, initiated during ",(0,r.jsx)(t.code,{children:"nft_approve"}),", is a cross contract call to an external contract."]})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/approval.rs#L4-L33\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/approvals",children:"approvals section"})," of the Zero to Hero series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"enumerationrs",children:(0,r.jsx)(t.code,{children:"enumeration.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This file provides the functions needed to view information about NFTs, and follows the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," extension."]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_total_supply"})}),(0,r.jsx)(t.td,{children:"Returns the total amount of NFTs stored on the contract"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_tokens"})}),(0,r.jsx)(t.td,{children:"Returns a paginated list of NFTs stored on the contract regardless of their owner."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_supply_for_owner"})}),(0,r.jsx)(t.td,{children:"Allows you view the total number of NFTs owned by any given user."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_tokens_for_owner"})}),(0,r.jsx)(t.td,{children:"Returns a paginated list of NFTs owned by any given user."})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/enumeration.rs#L4-L44\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/enumeration",children:"enumeration section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"librs",children:(0,r.jsx)(t.code,{children:"lib.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This file outlines what information the contract stores and keeps track of."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"new_default_meta"})}),(0,r.jsxs)(t.td,{children:["Initializes the contract with default ",(0,r.jsx)(t.code,{children:"metadata"})," so the user doesn't have to provide any input."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"new"})}),(0,r.jsxs)(t.td,{children:["Initializes the contract with the user-provided ",(0,r.jsx)(t.code,{children:"metadata"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.admonition,{title:"Keep in mind",type:"info",children:(0,r.jsxs)(t.p,{children:["The initialization functions (",(0,r.jsx)(t.code,{children:"new"}),", ",(0,r.jsx)(t.code,{children:"new_default_meta"}),") can only be called once."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/lib.rs#L45-L71\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"minting section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"metadatars",children:(0,r.jsx)(t.code,{children:"metadata.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This file is used to keep track of the information to be stored for tokens, and metadata.\nIn addition, you can define a function to view the contract's metadata which is part of the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"metadata"})," extension."]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"TokenMetadata"})}),(0,r.jsx)(t.td,{children:"This structure defines the metadata that can be stored for each token. (title, description, media, etc."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Token"})}),(0,r.jsx)(t.td,{children:"This structure outlines what information will be stored on the contract for each token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"JsonToken"})}),(0,r.jsx)(t.td,{children:"When querying information about NFTs through view calls, the return information is stored in this JSON token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_metadata"})}),(0,r.jsx)(t.td,{children:"This function allows users to query for the contact's internal metadata."})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/metadata.rs#L10-L55\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"minting section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"mintrs",children:(0,r.jsx)(t.code,{children:"mint.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Contains token minting logic."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_mint"})}),(0,r.jsx)(t.td,{children:"This function mints a non-fungible token."})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/mint.rs#L4-L16\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"nft_corers",children:(0,r.jsx)(t.code,{children:"nft_core.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Core logic that allows you to transfer NFTs between users."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer"})}),(0,r.jsx)(t.td,{children:"Transfers an NFT to a receiver ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer_call"})}),(0,r.jsxs)(t.td,{children:["Transfers an NFT to a receiver and calls a function on the receiver ID's contract. The function returns ",(0,r.jsx)(t.code,{children:"true"})," if the token was transferred from the sender's account."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_token"})}),(0,r.jsx)(t.td,{children:"Allows users to query for the information about a specific NFT."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_on_transfer"})}),(0,r.jsxs)(t.td,{children:["Called by other contracts when an NFT is transferred to your contract account via the ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," method. It returns ",(0,r.jsx)(t.code,{children:"true"})," if the token should be returned back to the sender."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_resolve_transfer"})}),(0,r.jsxs)(t.td,{children:["When you start the ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," and transfer an NFT, the standard also calls a method on the receiver's contract. If the receiver needs you to return the NFT to the sender (as per the return value of the ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," method), this function allows you to execute that logic."]})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/nft_core.rs#L7-L56\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"minting section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"royaltyrs",children:(0,r.jsx)(t.code,{children:"royalty.rs"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Contains payout-related functions."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_payout"})}),(0,r.jsx)(t.td,{children:"This view method calculates the payout for a given token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer_payout"})}),(0,r.jsx)(t.td,{children:"Transfers the token to the receiver ID and returns the payout object that should be paid for a given balance."})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/royalty.rs#L3-L17\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/royalty",children:"royalty section"})," of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"building-the-skeleton",children:"Building the skeleton"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If you haven't cloned the main repository yet, open a terminal and run:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial/\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Next, switch to the ",(0,r.jsx)(t.code,{children:"1.skeleton"})," branch and build the contract with ",(0,r.jsx)(t.code,{children:"yarn"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"cd nft-tutorial\ngit switch 1.skeleton\nyarn build\n"})}),"\n",(0,r.jsx)(t.p,{children:"Since this source is just a skeleton you'll get many warnings about unused code, such as:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"   Compiling nft_simple v0.1.0 (/Users/dparrino/near/nft-tutorial/nft-contract)\nwarning: unused imports: `LazyOption`, `LookupMap`, `UnorderedMap`, `UnorderedSet`\n --\x3e src/lib.rs:3:29\n  |\n3 | use near_sdk::collections::{LazyOption, LookupMap, UnorderedMap, UnorderedSet};\n  |                             ^^^^^^^^^^  ^^^^^^^^^  ^^^^^^^^^^^^  ^^^^^^^^^^^^\n  |\n  = note: `#[warn(unused_imports)]` on by default\n...\n...\n...\nwarning: constant is never used: `NO_DEPOSIT`\n --\x3e src/nft_core.rs:6:1\n  |\n6 | const NO_DEPOSIT: Balance = 0;\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: `nft_simple` (lib) generated 50 warnings\n    Finished release [optimized] target(s) in 22.58s\n\u2728  Done in 22.74s.\n"})}),"\n",(0,r.jsx)(t.p,{children:"Don't worry about these warnings, you're not going to deploy this contract yet.\nBuilding the skeleton is useful to validate that your Rust toolchain works properly and that you'll be able to compile improved versions of this NFT contract in the upcoming tutorials."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["You've seen the layout of this NFT smart contract, and how all the functions are laid out across the different source files.\nUsing ",(0,r.jsx)(t.code,{children:"yarn"}),", you've been able to compile the contract, and you'll start fleshing out this skeleton in the next ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"Minting tutorial"}),"."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.6.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["near-sdk-rs: ",(0,r.jsx)(t.code,{children:"4.0.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);