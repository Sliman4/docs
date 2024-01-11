"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5480],{9183:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=s(85893),r=s(11151);const i=s.p+"assets/images/chapter-2-solve-2617d72e43b2f9ddfd70608944530268.gif",o=s.p+"assets/images/puzzle-piggy-bank--r3v.near--rev_rodrigueza-28a18e413cc78664b4c1f4943a743507.png",a={sidebar_position:1,sidebar_label:"Overview",title:"Highlights of some beginner topics covered."},c="Diving deeper",l={id:"tutorials/crosswords/beginner/overview",title:"Highlights of some beginner topics covered.",description:"In the last chapter we installed Rust and got up and running with a simple smart contract. The contract has a few issues, however, and isn't as powerful as we'd like it to be. For instance, we can only store one crossword puzzle in the smart contract, the frontend is  hardcoded, and we don't offer any incentives to the person who wins.",source:"@site/../docs/3.tutorials/crosswords/02-beginner/00-overview.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/overview",permalink:"/ko/tutorials/crosswords/beginner/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/00-overview.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1660048663,formattedLastUpdatedAt:"2022\ub144 8\uc6d4 9\uc77c",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview",title:"Highlights of some beginner topics covered."},sidebar:"contracts",previous:{title:"Add simple frontend",permalink:"/ko/tutorials/crosswords/basics/simple-frontend"},next:{title:"Store multiple puzzles",permalink:"/ko/tutorials/crosswords/beginner/collections"}},d={},h=[{value:"Completed project",id:"completed-project",level:2}];function p(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"diving-deeper",children:"Diving deeper"}),"\n",(0,n.jsx)(t.p,{children:"In the last chapter we installed Rust and got up and running with a simple smart contract. The contract has a few issues, however, and isn't as powerful as we'd like it to be. For instance, we can only store one crossword puzzle in the smart contract, the frontend is  hardcoded, and we don't offer any incentives to the person who wins."}),"\n",(0,n.jsx)(t.p,{children:"Let's give the smart contract the ability to store multiple crosswords and offer the winner a prize, paid in NEAR."}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:o,alt:"Man holding a book full of crossword puzzles, in his other hand he's holding a piggy bank. Art created by r3v.near"}),(0,n.jsxs)("figcaption",{class:"full-width",children:["Art by ",(0,n.jsx)("a",{href:"https://twitter.com/rev_rodrigueza",target:"_blank",children:"r3v.near"})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"In this chapter we'll:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Allow the contract to store multiple crossword puzzles"}),"\n",(0,n.jsx)(t.li,{children:"Store the positions of the clues in the contract"}),"\n",(0,n.jsx)(t.li,{children:"Allow users to log in with a NEAR account"}),"\n",(0,n.jsx)(t.li,{children:"Give a prize (in NEAR tokens) to the first person to solve the puzzle"}),"\n",(0,n.jsx)(t.li,{children:"Explore using Rust structs and enums"}),"\n",(0,n.jsx)(t.li,{children:"more\u2026"}),"\n"]}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{src:i,width:"600",alt:"A user fills in the last clue in a crossword puzzle and an overlay appears saying that a transaction is pending"}),(0,n.jsx)("figcaption",{children:"A user solves the crossword puzzle, interacts with the blockchain, and gets a prize"})]}),"\n",(0,n.jsx)(t.p,{children:"As we implement the list above, we'll learn key concepts about NEAR:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://nomicon.io/RuntimeSpec/Actions.html",children:"Actions"})}),"\n",(0,n.jsxs)(t.li,{children:["Full and function-call ",(0,n.jsx)(t.a,{href:"https://docs.near.org/concepts/basics/account#access-keys",children:"access keys"})]}),"\n",(0,n.jsxs)(t.li,{children:["NEAR's specialized ",(0,n.jsx)(t.a,{href:"https://docs.near.org/concepts/storage/data-storage#rust-collection-types",children:"Collections"})," that are generally preferable to, say, Rust's standard HashMap"]}),"\n",(0,n.jsx)(t.li,{children:"The flow of logging in to a decentralized app (dApp)"}),"\n",(0,n.jsx)(t.li,{children:"more\u2026"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Let's jump right in!"}),"\n",(0,n.jsx)(t.h2,{id:"completed-project",children:"Completed project"}),"\n",(0,n.jsx)(t.p,{children:"Here's the final code for this chapter:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-2",children:"https://github.com/near-examples/crossword-tutorial-chapter-2"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);