"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1781],{83268:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=s(85893),o=s(11151);const i=s.p+"assets/images/paging-through-hashes-swing--pierced_staggg.near--pierced_stag-252ce502eb06766d1dc11a6c40a0b60c.jpg",r=s.p+"assets/images/guards-contract-permissions--connoisseur_dane.near--connoisseurdane-a696aec63e7ccccc1442b9fe3eb4c664.png",l={sidebar_position:2,sidebar_label:"Store multiple puzzles",title:"Store multiple crossword puzzles using a specialized collection in NEAR called a LookupMap"},c="Using collections",a={id:"tutorials/crosswords/beginner/collections",title:"Store multiple crossword puzzles using a specialized collection in NEAR called a LookupMap",description:"As mentioned in the previous chapter, the online Rust Book is a great reference for folks getting started with Rust, but there are concepts that differ when we're dealing with the blockchain. One of these differences is the use of collections.",source:"@site/../docs/3.tutorials/crosswords/02-beginner/01-collections.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/collections",permalink:"/zh-CN/tutorials/crosswords/beginner/collections",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/01-collections.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1661444350,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Store multiple puzzles",title:"Store multiple crossword puzzles using a specialized collection in NEAR called a LookupMap"},sidebar:"contracts",previous:{title:"Overview",permalink:"/zh-CN/tutorials/crosswords/beginner/overview"},next:{title:"Using structs and enums",permalink:"/zh-CN/tutorials/crosswords/beginner/structs-enums"}},h={},d=[{value:"LookupMap and UnorderedSet",id:"lookupmap-and-unorderedset",level:2},{value:"Collections have prefixes",id:"collections-have-prefixes",level:2},{value:"Permissions or permissionless?",id:"permissions-or-permissionless",level:2}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"using-collections",children:"Using collections"}),"\n",(0,n.jsxs)(t.p,{children:["As mentioned in the previous chapter, the ",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/stable/book",children:"online Rust Book"})," is a great reference for folks getting started with Rust, but there are concepts that differ when we're dealing with the blockchain. One of these differences is the use of collections."]}),"\n",(0,n.jsx)(t.p,{children:"The reference-level documentation of the Rust SDK explains this concept well:"}),"\n",(0,n.jsxs)(t.admonition,{title:"Motivation for specialized collections",type:"note",children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Collections that offer an alternative to standard containers from [Rust's] std::collections::* by ",(0,n.jsx)(t.strong,{children:"utilizing the underlying blockchain trie storage more efficiently"}),".",(0,n.jsx)("br",{}),"\nFor example, the following smart contract does not work with state efficiently, because ",(0,n.jsx)(t.strong,{children:"it will load the entire HashMap at the beginning of the contract call"}),", and will save it entirely at the end, in cases when there is state modification. ",(0,n.jsx)(t.strong,{children:"This is fine for small number of elements, but very inefficient for large numbers"}),"."]}),"\n"]}),(0,n.jsxs)(t.p,{children:["\u2014 ",(0,n.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/index.html",children:"NEAR SDK reference documentation"})]})]}),"\n",(0,n.jsxs)(t.p,{children:["In chapter 1, we set the crossword puzzle solution hash when we first deployed the contract and called the initialization method ",(0,n.jsx)(t.code,{children:"new"}),", passing it. This would only allow us to have only one puzzle, but let's allow for many."]}),"\n",(0,n.jsx)(t.p,{children:"At a high level, let's discuss what we'll want to add if our contract is to store multiple crossword puzzles. First, we'll have the concept of many puzzles where some of them will have different states (unfinished and finished) and we'll want to know which ones are unsolved in quick way. Another thing, which is a general rule of thumb when writing smart contracts, is to anticipate what might happen if it gets a lot of usage. What if we end up with 10,000 crossword puzzles? How might that affect how many data structures we use and which ones?"}),"\n",(0,n.jsx)(t.h2,{id:"lookupmap-and-unorderedset",children:"LookupMap and UnorderedSet"}),"\n",(0,n.jsx)(t.p,{children:"Let's try having two specialized NEAR collections:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.LookupMap.html",children:"LookupMap"})," which will store key-value pairs. (Solution hash \xbb Puzzle object)"]}),"\n",(0,n.jsxs)(t.li,{children:["An ",(0,n.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.UnorderedSet.html",children:"UnorderedSet"})," containing a set (list with no duplicates) of the solution hashes for puzzles which have not been solved yet."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["As you look at the list of specialized collections in the Rust SDK, you might notice some begin with ",(0,n.jsx)(t.code,{children:"Lookup"})," while others have ",(0,n.jsx)(t.code,{children:"Unordered"}),". As is written in the reference documentation, the ",(0,n.jsx)(t.code,{children:"Lookup"})," is non-iterable while the ",(0,n.jsx)(t.code,{children:"Unordered"})," collections are iterable. This means if you will need to loop through the list of contents of this data structure, you'll likely use an iterable data structure. If you'll only ever be adding and retrieving data by the key, and the key will always be known, it's more efficient to use a non-iterable collection."]}),"\n",(0,n.jsxs)(t.p,{children:["So why would we have two data structures here? Again, if we end up with a large number of puzzles, we might not be able to loop through all the puzzles, looking for ones that are unsolved. Because of the limit of gas execution per transaction, we must be conscious that there can be operations which will eventually exceed this limit. I suppose we could assume  that our ",(0,n.jsx)(t.code,{children:"UnorderedSet"})," of unsolved puzzles wouldn't contain tens of thousands of puzzles. That's one way to avoid running into limits, but we could also learn how to utilize ",(0,n.jsx)(t.strong,{children:"pagination"})," through an iterable collection like an ",(0,n.jsx)(t.code,{children:"UnorderedSet"})," which we'll get to later."]}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:i,alt:"Book showing pagination of hashes. Art created by pierced_staggg.near",width:"600"}),(0,n.jsxs)("figcaption",{children:["Think of our collection as having multiple pages of puzzle hashes.",(0,n.jsx)("br",{}),"Art by ",(0,n.jsx)("a",{href:"https://twitter.com/pierced_stag",target:"_blank",children:"pierced_staggg.near"})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.p,{children:["As we remember from the previous chapter, every smart contract has a primary struct containing the ",(0,n.jsx)(t.code,{children:"#[near_bindgen]"})," macro."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Naming the primary struct",type:"note",children:[(0,n.jsxs)(t.p,{children:["Note in the ",(0,n.jsx)(t.a,{href:"/zh-CN/tutorials/crosswords/basics/set-up-skeleton#start-writing-rust",children:"previous chapter"})," we named our primary struct ",(0,n.jsx)(t.code,{children:"Contract"}),", but in this chapter we'll call it ",(0,n.jsx)(t.code,{children:"Crossword."})]}),(0,n.jsxs)(t.p,{children:["The name of the struct doesn't matter and there's nothing special about naming it ",(0,n.jsx)(t.code,{children:"Contract"}),", though you might see that convention used in several smart contracts on NEAR. We've named it something different simply to illustrate that there's no magic behind the scenes. This ",(0,n.jsx)(t.em,{children:"does"})," mean, however, that our ",(0,n.jsx)(t.code,{children:"impl"})," block will also be ",(0,n.jsx)(t.code,{children:"Crossword"}),"."]})]}),"\n",(0,n.jsx)(t.p,{children:"Here's how our struct will look with the iterable and non-iterable NEAR collections:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/276217ad82c64c610148e998ec926942ba910a12/contract/src/lib.rs#L73-L79\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Above, we have the ",(0,n.jsx)(t.code,{children:"puzzles"})," and ",(0,n.jsx)(t.code,{children:"unsolved_puzzles"})," fields which are collections."]}),"\n",(0,n.jsxs)(t.p,{children:["We also have an ",(0,n.jsx)(t.code,{children:"owner_id"})," so we can exercise a common pattern in smart contract development: implementing a rudimentary permission system which can restrict access to certain functions. We'll expand on this thought in a moment."]}),"\n",(0,n.jsxs)(t.p,{children:["The snippet below shows the first method in the implementation of the ",(0,n.jsx)(t.code,{children:"Crossword"})," struct, where the ",(0,n.jsx)(t.code,{children:"new"})," function sets up these two specialized collections."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/276217ad82c64c610148e998ec926942ba910a12/contract/src/lib.rs#L81-L90\n"})}),"\n",(0,n.jsxs)(t.p,{children:["So during the initialization function (",(0,n.jsx)(t.code,{children:"new"}),") we're setting the ",(0,n.jsx)(t.code,{children:"owner_id"}),". For our purposes the owner will likely be the contract itself, but there can be several reasons to have it be a DAO or another user. Next, let's look at the ",(0,n.jsx)(t.code,{children:'b"c"'})," and ",(0,n.jsx)(t.code,{children:'b"u"'})," bits for the collection fields."]}),"\n",(0,n.jsx)(t.h2,{id:"collections-have-prefixes",children:"Collections have prefixes"}),"\n",(0,n.jsxs)(t.p,{children:["Above, the ",(0,n.jsx)(t.code,{children:"new"})," function is initializing the struct's fields by giving them a unique prefix. You can learn more about ",(0,n.jsx)(t.a,{href:"/sdk/rust/contract-structure/nesting#traditional-approach-for-unique-prefixes",children:"the prefixes here"}),", but know that these prefixes (",(0,n.jsx)(t.code,{children:"c"})," and ",(0,n.jsx)(t.code,{children:"u"}),") should be short and different."]}),"\n",(0,n.jsxs)(t.p,{children:["Let's take a peek at how we'll add a new crossword puzzle. Note that there will be a new struct here, ",(0,n.jsx)(t.code,{children:"Answer"}),", which we haven't defined yet. We'll also be introducing the concept of enums, like ",(0,n.jsx)(t.code,{children:"PuzzleStatus::Solved"})," and ",(0,n.jsx)(t.code,{children:"PuzzleStatus::Unsolved"}),". We'll be covering these in the next section."]}),"\n",(0,n.jsxs)(t.p,{children:["Unlike the previous chapter where there was only one crossword puzzle, we'll be inserting into our new collections, so let's create a ",(0,n.jsx)(t.code,{children:"new_puzzle"})," method."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/8ec941c82539e6eafa4971444e1da9e4819330d3/contract/src/lib.rs#L147-L163\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now we're set up to store multiple puzzles!"}),"\n",(0,n.jsx)(t.h2,{id:"permissions-or-permissionless",children:"Permissions or permissionless?"}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:r,alt:"Guards or bouncers in front of a futuristic club with the label of a NEAR smart contract. Art created by connoisseur_dane.near",width:"600"}),(0,n.jsxs)("figcaption",{children:["Guarding which accounts can enter the smart contract logic.",(0,n.jsx)("br",{}),"Art by ",(0,n.jsx)("a",{href:"https://twitter.com/connoisseurdane",target:"_blank",children:"connoisseur_dane.near"})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Is NEAR permissionless?"})}),"\n",(0,n.jsx)(t.p,{children:"Yes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"What did you mean by a permission system earlier, and what are the ways you can control permissions?"})}),"\n",(0,n.jsx)(t.p,{children:"There are two ways that permissions can be controlled:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"In the smart contract code itself"}),"\n",(0,n.jsx)(t.li,{children:"When using function-call access keys"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We'll get to the second topic in later in this chapter, but will focus on the first item."}),"\n",(0,n.jsxs)(t.p,{children:["As you can see in the previous snippet, the first thing that happens in the ",(0,n.jsx)(t.code,{children:"new_puzzle"})," method is a check. It looks to see if the predecessor (the person who most recently called this method, sometimes the same as the signer) is the same as the ",(0,n.jsx)(t.code,{children:"owner_id"})," that we set during the contract's initialization."]}),"\n",(0,n.jsxs)(t.p,{children:["If someone else is trying to call ",(0,n.jsx)(t.code,{children:"new_puzzle"}),", this check will fail and the smart contract will panic, going no further. This example is the simplest form of a permission. Much more complex system can exist for users. The SputnikDAO smart contracts, for instance, implement custom policies. It's up the smart contract developer to write their roles/policies and apply them to users. Sometimes an allow-list (or whitelist) is used."]}),"\n",(0,n.jsxs)(t.p,{children:["In short, ",(0,n.jsx)(t.strong,{children:"any account with a full-access key can call any method on a smart contract"}),", but that doesn't mean the smart contract will let them continue execution. It's up to the developer to protect their functions with guards like the one in ",(0,n.jsx)(t.code,{children:"new_puzzle"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Let's dive into structs and enums next."})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var n=s(67294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);