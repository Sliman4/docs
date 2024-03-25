"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9958],{58900:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=n(85893),s=n(11151),l=n(77229);const i={id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},d=void 0,a={id:"tutorials/nfts/skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",description:'\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 "Zero to Hero" \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubc1c\uacac\ud558\uace0 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 Rust \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/nfts/1-skeleton.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/skeleton",permalink:"/ko/tutorials/nfts/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",sidebarPosition:1,frontMatter:{id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},sidebar:"tutorials",previous:{title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",permalink:"/ko/tutorials/nfts/predeployed-contract"},next:{title:"\ubc1c\ud589",permalink:"/ko/tutorials/nfts/minting"}},c={},o=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ud30c\uc77c \uad6c\uc870",id:"\ud30c\uc77c-\uad6c\uc870",level:2},{value:"\uc18c\uc2a4 \ud30c\uc77c",id:"\uc18c\uc2a4-\ud30c\uc77c",level:3},{value:"<code>approval.rs</code>",id:"approvalrs",level:2},{value:"<code>enumeration.rs</code>",id:"enumerationrs",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>mint.rs</code>",id:"mintrs",level:2},{value:"<code>nft_core.rs</code>",id:"nft_corers",level:2},{value:"<code>royalty.rs</code>",id:"royaltyrs",level:2},{value:"\ubf08\ub300 \uad6c\ucd95",id:"\ubf08\ub300-\uad6c\ucd95",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function h(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 ",(0,t.jsx)(r.em,{children:'"Zero to Hero"'})," \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubc1c\uacac\ud558\uace0 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 Rust \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsxs)(r.mdxAdmonitionTitle,{children:["Rust\uac00 \ucc98\uc74c\uc774\uc2e0\uac00\uc694? Rust\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud558\uace0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc5d0 \ub6f0\uc5b4\ub4e4\uace0 \uc2f6\ub2e4\uba74 ",(0,t.jsx)(r.a,{href:"/develop/quickstart-guide",children:"\ube60\ub978 \uc2dc\uc791 \uac00\uc774\ub4dc"}),"\uac00 \uc2dc\uc791\ud558\uae30\uc5d0 \uc88b\uc740 \uacf3\uc785\ub2c8\ub2e4. :::"]}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),(0,t.jsx)(r.p,{children:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc \ubf08\ub300\uc640 \ud30c\uc77c \uad6c\uc870\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ubaa8\ub4e0 \ud568\uc218\uac00 \ubc30\uce58\ub41c \ubc29\ubc95\uacfc \ucc44\uc6cc\uc57c \ud558\ub294 \ub204\ub77d\ub41c Rust \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud30c\uc77c\uacfc \ud568\uc218\uac00 \ub2e4\ub8e8\uc5b4\uc9c0\uba74 \ubaa8\ud615 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uac70\uccd0 \ubaa8\ub4e0 \uac83\uc774 \uc62c\ubc14\ub974\uac8c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),(0,t.jsx)(r.h2,{id:"\ud30c\uc77c-\uad6c\uc870",children:"\ud30c\uc77c \uad6c\uc870"}),(0,t.jsxs)(r.p,{children:["\uc77c\ubc18 ",(0,t.jsx)(r.a,{href:"https://www.rust-lang.org/",children:"Rust"})," \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub530\ub77c \uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ud30c\uc77c \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"Cargo.toml"})," : \ucf54\ub4dc \uc758\uc874\uc131(dependency)\uc744 \uc815\uc758\ud558\uae30 \uc704\ud55c \ud30c\uc77c(",(0,t.jsx)(r.code,{children:"package.json"}),"\uacfc \uc720\uc0ac)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"src"})," : \ubaa8\ub4e0 Rust \uc18c\uc2a4 \ud30c\uc77c\uc774 \uc800\uc7a5\ub418\ub294 \ud3f4\ub354\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"target"})," : \ucef4\ud30c\uc77c\ub41c ",(0,t.jsx)(r.code,{children:"wasm"})," \ud30c\uc77c\uc774 \ucd9c\ub825\ub420 \ud3f4\ub354\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"build.sh"})," : \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud558\ub294 \ub354 \ud3b8\ub9ac\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \ucd94\uac00\ub41c \uc2a4\ud06c\ub9bd\ud2b8"]}),"\n"]}),(0,t.jsx)(r.h3,{id:"\uc18c\uc2a4-\ud30c\uc77c",children:"\uc18c\uc2a4 \ud30c\uc77c"}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\ud30c\uc77c"}),(0,t.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#approvalrs",children:"approval.rs"})}),(0,t.jsx)(r.td,{children:"\ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc758 \uc561\uc138\uc2a4 \ubc0f \uc804\uc1a1\uc744 \uc81c\uc5b4\ud558\ub294 \u200b\u200b\ub0b4\ubd80 \ud568\uc218\ub4e4\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#enumerationrs",children:"enumeration.rs"})}),(0,t.jsx)(r.td,{children:"NFT \ud1a0\ud070 \ubc0f \ud574\ub2f9 \uc18c\uc720\uc790\ub97c \ucffc\ub9ac\ud558\ub294 \ub0b4\ubd80 \uba54\uc11c\ub4dc\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#librs",children:"lib.rs"})}),(0,t.jsx)(r.td,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucd08\uae30\ud654 \ud568\uc218\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#metadatars",children:"metadata.rs"})}),(0,t.jsx)(r.td,{children:"\ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130 \uad6c\uc870\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#mintrs",children:"mint.rs"})}),(0,t.jsx)(r.td,{children:"\ud1a0\ud070 \ubc1c\ud589 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#nft_corers",children:"nft_core.rs"})}),(0,t.jsx)(r.td,{children:"\uc0ac\uc6a9\uc790 \uac04\uc5d0 NFT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \ub0b4\ubd80 \ud575\uc2ec \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"#royaltyrs",children:"royalty.rs"})}),(0,t.jsx)(r.td,{children:"\ub0b4\ubd80 \uc9c0\ubd88 \uad00\ub828 \ud568\uc218\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4."})]})]})]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"nft-contract\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 approval.rs\n    \u251c\u2500\u2500 enumeration.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u251c\u2500\u2500 mint.rs\n    \u251c\u2500\u2500 nft_core.rs\n    \u2514\u2500\u2500 royalty.rs\n"})}),(0,t.jsxs)(r.admonition,{type:"tip",children:[(0,t.jsxs)(r.mdxAdmonitionTitle,{children:[(0,t.jsx)(r.a,{href:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton",children:"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"}),"\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694. :::"]}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"approvalrs",children:(0,t.jsx)(r.code,{children:"approval.rs"})}),(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\uc774\ub97c \ud1b5\ud574 \uc0ac\ub78c\ub4e4\uc740 \ub2e4\ub978 \uacc4\uc815\uc744 NFT\ub97c \ub300\uc2e0 \uc804\uc1a1\ud560 \uc218 \uc788\uac8c\ub054 \uc2b9\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(r.p,{children:["\uc774 \ud30c\uc77c\uc5d0\ub294 \ud45c\uc900\uc758 ",(0,t.jsx)(r.a,{href:"https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html",children:"\uc2b9\uc778 \uad00\ub9ac"})," \ud655\uc7a5\uc744 \uc900\uc218\ud558\ub294 \ub0b4\ubd80 \ub85c\uc9c1\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uba54\uc11c\ub4dc \ubc0f \ud568\uc218\uc5d0 \ub300\ud55c \ubd84\uc11d\uc785\ub2c8\ub2e4."]}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_approve"})}),(0,t.jsx)(r.td,{children:"\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud560 \uacc4\uc815 ID\ub97c \uc2b9\uc778\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_is_approved"})}),(0,t.jsx)(r.td,{children:"\uc785\ub825 \uacc4\uc815\uc5d0 \ud1a0\ud070 ID\ub97c \uc2b9\uc778\ud560 \uc218 \uc788\ub294 \uc561\uc138\uc2a4 \uad8c\ud55c\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_revoke"})}),(0,t.jsx)(r.td,{children:"\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \ud2b9\uc815 \uacc4\uc815\uc744 \ucde8\uc18c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_revoke_all"})}),(0,t.jsx)(r.td,{children:"\uc0ac\uc6a9\uc790\ub97c \ub300\uc2e0\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \ubaa8\ub4e0 \uacc4\uc815\uc744 \ucde8\uc18c\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_on_approve"})}),(0,t.jsxs)(r.td,{children:["\uc774 \ucf5c\ubc31 \ud568\uc218\ub294 ",(0,t.jsx)(r.code,{children:"nft_approve"}),"\uc5d0 \uc758\ud574 \uc2dc\uc791\ub418\uc5b4, \uc678\ubd80 \ucee8\ud2b8\ub799\ud2b8\ub85c\uc758 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."]})]})]})]}),(0,t.jsx)(l.Ey,{language:"rust",start:"4",end:"33",url:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/approval.rs"}),(0,t.jsxs)(r.p,{children:["You'll learn more about these functions in the ",(0,t.jsx)(r.a,{href:"/tutorials/nfts/approvals",children:"approvals section"})," of the Zero to Hero series."]}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"enumerationrs",children:(0,t.jsx)(r.code,{children:"enumeration.rs"})}),(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["\uc774 \ud30c\uc77c\uc740 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ubcf4\ub294 \ub370 \ud544\uc694\ud55c \ub0b4\ubd80 \ud568\uc218\ub4e4\uc744 \uc81c\uacf5\ud558\uba70 \ud45c\uc900\uc758 ",(0,t.jsx)(r.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"\uc5f4\uac70(Enumeration)"})," \ud655\uc7a5\uc790\ub97c \ub530\ub985\ub2c8\ub2e4."]}),"\n"]}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_total_supply"})}),(0,t.jsx)(r.td,{children:"Returns the total amount of NFTs stored on the contract."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_tokens"})}),(0,t.jsx)(r.td,{children:"\uc18c\uc720\uc790\uc640 \uad00\uacc4\uc5c6\uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub41c \ud398\uc774\uc9c0\uac00 \ub9e4\uaca8\uc9c4 NFT \ubaa9\ub85d\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_supply_for_owner"})}),(0,t.jsx)(r.td,{children:"\uc8fc\uc5b4\uc9c4 \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c \ucd1d NFT \uc218\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_tokens_for_owner"})}),(0,t.jsx)(r.td,{children:"\uc9c0\uc815\ub41c \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c NFT \ubaa9\ub85d\uc744 \ud398\uc774\uc9c0 \ud615\ud0dc\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4."})]})]})]}),(0,t.jsx)(l.Ey,{language:"rust",start:"4",end:"44",url:"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/enumeration.rs"}),(0,t.jsxs)(r.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(r.a,{href:"/tutorials/nfts/enumeration",children:"\uc5f4\uac70 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"librs",children:(0,t.jsx)(r.code,{children:"lib.rs"})}),(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\uc774 \ud30c\uc77c\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc800\uc7a5\ud558\uace0 \ucd94\uc801\ud558\ub294 \uc815\ubcf4\ub97c \uac04\ub7b5\ud558\uac8c \uc124\uba85\ud569\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"new_default_meta"})}),(0,t.jsxs)(r.td,{children:["\uae30\ubcf8 ",(0,t.jsx)(r.code,{children:"metadata"}),"\ub97c \uc774\uc6a9\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud574, \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\uac12\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"new"})}),(0,t.jsxs)(r.td,{children:["\uc0ac\uc6a9\uc790\uac00 \uc81c\uacf5\ud55c ",(0,t.jsx)(r.code,{children:"metadata"}),"\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4."]})]})]})]}),(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsxs)(r.mdxAdmonitionTitle,{children:["\uae30\uc5b5\ud574 \ub450\uc138\uc694 \ucd08\uae30\ud654 \ud568\uc218(",(0,t.jsx)(r.code,{children:"new"}),", ",(0,t.jsx)(r.code,{children:"new_default_meta"}),") \ud55c \ubc88\ub9cc \ud638\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. :::"]}),(0,t.jsx)(l.Ey,{language:"rust",start:"45",end:"71",url:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/lib.rs"}),(0,t.jsxs)(r.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(r.a,{href:"/tutorials/nfts/minting",children:"\ubc1c\ud589 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"metadatars",children:(0,t.jsx)(r.code,{children:"metadata.rs"})}),(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["\uc774 \ud30c\uc77c\uc740 \ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc815\ubcf4\ub97c \ucd94\uc801\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub610\ud55c \ud45c\uc900 \uba54\ud0c0\ub370\uc774\ud130 \ud655\uc7a5\uc758 \uc77c\ubd80\uc778 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,t.jsx)(r.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"\uba54\ud0c0\ub370\uc774\ud130"}),"\ub97c \ubcf4\ub294 \uae30\ub2a5\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\uc774\ub984"}),(0,t.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"TokenMetadata"})}),(0,t.jsx)(r.td,{children:"This structure defines the metadata that can be stored for each token (title, description, media, etc.)."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Token"})}),(0,t.jsx)(r.td,{children:"\uc774 \uad6c\uc870\ub294 \uac01 \ud1a0\ud070\uc5d0 \ub300\ud55c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 \uc815\ubcf4\uac00 \uc800\uc7a5\ub420 \uac83\uc778\uc9c0\ub97c \uc124\uba85\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"JsonToken"})}),(0,t.jsx)(r.td,{children:"View \ud638\ucd9c\uc744 \ud1b5\ud574 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc870\ud68c\ud560 \ub54c, \ubc18\ud658\ub41c \uc815\ubcf4\ub294 \uc774 JSON \ud1a0\ud070\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_metadata"})}),(0,t.jsx)(r.td,{children:"\uc774 \ud568\uc218\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub0b4\ubd80 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})]}),(0,t.jsx)(l.Ey,{language:"rust",start:"10",end:"55",url:"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/metadata.rs"}),(0,t.jsxs)(r.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988 \ub0b4 ",(0,t.jsx)(r.a,{href:"/tutorials/nfts/minting",children:"\ubc1c\ud589 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\uc5d0 \ub300\ud574 \ub354 \ub9ce\uc774 \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"mintrs",children:(0,t.jsx)(r.code,{children:"mint.rs"})}),(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\ud1a0\ud070 \ubc1c\ud589 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_mint"})}),(0,t.jsx)(r.td,{children:"\uc774 \ud568\uc218\ub294 \ub300\uccb4 \ubd88\uac00\ub2a5 \ud1a0\ud070\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."})]})})]}),(0,t.jsx)(l.Ey,{language:"rust",start:"4",end:"16",url:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/mint.rs"}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"nft_corers",children:(0,t.jsx)(r.code,{children:"nft_core.rs"})}),(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\uc0ac\uc6a9\uc790 \uac04\uc5d0 NFT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \ud575\uc2ec \ub85c\uc9c1\uc785\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_transfer"})}),(0,t.jsx)(r.td,{children:"NFT\ub97c \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_transfer_call"})}),(0,t.jsxs)(r.td,{children:["NFT\uac00 ",(0,t.jsx)(r.code,{children:"nft_transfer_call"})," \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815\uc73c\ub85c \uc804\uc1a1\ub420 \ub54c \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc758\ud574 \ud638\ucd9c\ub429\ub2c8\ub2e4. \ud1a0\ud070\uc774 \ubcf4\ub0b8 \uc0ac\ub78c\uc5d0\uac8c \ub2e4\uc2dc \ubc18\ud658\ub418\uc5b4\uc57c \ud558\uba74 ",(0,t.jsx)(r.code,{children:"true"}),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_token"})}),(0,t.jsx)(r.td,{children:"\uc0ac\uc6a9\uc790\uac00 \ud2b9\uc815 NFT\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_on_transfer"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"nft_transfer_call"}),"\uc744 \uc2dc\uc791\ud558\uace0 NFT\ub97c \uc804\uc1a1\ud560 \ub54c \ud45c\uc900\uc5d0 \ub530\ub974\uba74 \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc788\ub294 \uba54\uc11c\ub4dc\ub3c4 \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc218\uc2e0\uc790\uac00 \ubc1c\uc2e0\uc790\uc5d0\uac8c NFT\ub97c \ubc18\ud658\ud574\uc57c \ud558\ub294 \uacbd\uc6b0(",(0,t.jsx)(r.code,{children:"nft_on_transfer"})," \uba54\uc11c\ub4dc\uc758 \ubc18\ud658 \uac12\uc5d0 \ub530\ub77c) \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ud574\ub2f9 \ub85c\uc9c1\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_resolve_transfer"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"nft_transfer_call"}),"\uc744 \uc2dc\uc791\ud558\uace0 NFT\ub97c \uc804\uc1a1\ud560 \ub54c\uc758 \ud45c\uc900\uc5d0 \ub530\ub974\uba74, \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc788\ub294 \uba54\uc11c\ub4dc\ub3c4 \ud638\ucd9c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc218\uc2e0\uc790\uac00 \ubc1c\uc2e0\uc790\uc5d0\uac8c NFT\ub97c \ubc18\ud658\ud574\uc57c \ud558\ub294 \uacbd\uc6b0(",(0,t.jsx)(r.code,{children:"nft_on_transfer"})," \uba54\uc11c\ub4dc\uc758 \ubc18\ud658 \uac12\uc5d0 \ub530\ub77c) \uc774 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ud574\ub2f9 \ub85c\uc9c1\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})]})]}),(0,t.jsx)(l.Ey,{language:"rust",start:"7",end:"56",url:"https://github.com/near-examples/nft-tutorial/blob/1.skeleton/nft-contract/src/nft_core.rs"}),(0,t.jsxs)(r.p,{children:["You'll learn more about these functions in the ",(0,t.jsx)(r.a,{href:"/tutorials/nfts/core",children:"core section"})," of the tutorial series."]}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"royaltyrs",children:(0,t.jsx)(r.code,{children:"royalty.rs"})}),(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\ub0b4\ubd80 \uc9c0\ubd88 \uad00\ub828 \uae30\ub2a5\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."}),"\n"]}),(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_payout"})}),(0,t.jsx)(r.td,{children:"\uc774 view \uba54\uc11c\ub4dc\ub294 \uc8fc\uc5b4\uc9c4 \ud1a0\ud070\uc5d0 \ub300\ud55c \uc9c0\ubd88\uae08\uc744 \uacc4\uc0b0\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"nft_transfer_payout"})}),(0,t.jsx)(r.td,{children:"\ud1a0\ud070\uc744 \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud558\uace0 \uc8fc\uc5b4\uc9c4 \uc794\uace0\uc5d0 \ub300\ud574 \uc9c0\ubd88\ud574\uc57c \ud558\ub294 \uc9c0\ubd88 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ub0b4\ubd80 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4."})]})]})]}),(0,t.jsx)(l.Ey,{language:"rust",start:"3",end:"17",url:"https://github.com/near-examples/nft-tutorial/tree/1.skeleton/nft-contract/src/royalty.rs"}),(0,t.jsxs)(r.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(r.a,{href:"/tutorials/nfts/royalty",children:"\ub85c\uc5f4\ud2f0 \uc139\uc158"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \ud568\uc218\ub4e4\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"\ubf08\ub300-\uad6c\ucd95",children:"\ubf08\ub300 \uad6c\ucd95"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\uc544\uc9c1 \uae30\ubcf8 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud130\ubbf8\ub110\uc744 \uc5f4\uace0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."}),"\n"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial/\n"})}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\ub2e4\uc74c\uc73c\ub85c ",(0,t.jsx)(r.code,{children:"1.skeleton"})," \ube0c\ub79c\uce58\ub85c \uc804\ud658\ud558\uace0, ",(0,t.jsx)(r.code,{children:"yarn"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ube4c\ub4dc\ud569\ub2c8\ub2e4."]}),"\n"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"cd nft-tutorial\ngit switch 1.skeleton\nyarn build\n"})}),(0,t.jsx)(r.p,{children:"\uc774 \uc18c\uc2a4\ub294 \ubf08\ub300\uc77c \ubfd0\uc774\ubbc0\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud55c \ub9ce\uc740 \uacbd\uace0\ub97c \ubc1b\uac8c \ub429\ub2c8\ub2e4."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"   Compiling nft_simple v0.1.0 (/Users/dparrino/near/nft-tutorial/nft-contract)\nwarning: unused imports: `LazyOption`, `LookupMap`, `UnorderedMap`, `UnorderedSet`\n --\x3e src/lib.rs:3:29\n  |\n3 | use near_sdk::collections::{LazyOption, LookupMap, UnorderedMap, UnorderedSet};\n  |                             ^^^^^^^^^^  ^^^^^^^^^  ^^^^^^^^^^^^  ^^^^^^^^^^^^\n  |\n  = note: `#[warn(unused_imports)]` on by default\n...\n...\n...\n...\n"})}),(0,t.jsx)(r.p,{children:"\uc774\ub7ec\ud55c \uacbd\uace0\uc5d0 \ub300\ud574 \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694. \uc544\uc9c1 \uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \ubf08\ub300 \uad6c\ucd95\ud558\ub294 \uac83\uc740 Rust \ud234\uccb4\uc778\uc774 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc774\uace0, \uc774\ub294 \ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc774 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uac1c\uc120\ub41c \ubc84\uc804\uc744 \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."}),(0,t.jsx)(r.hr,{}),(0,t.jsx)(r.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),(0,t.jsxs)(r.p,{children:["\uc774 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uacfc \ub2e4\uc591\ud55c \uc18c\uc2a4 \ud30c\uc77c\uc5d0 \ubaa8\ub4e0 \ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \ubc30\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(r.code,{children:"yarn"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc5c8\uace0, \ub2e4\uc74c ",(0,t.jsx)(r.a,{href:"/tutorials/nfts/minting",children:"\ubc1c\ud589 \ud29c\ud1a0\ub9ac\uc5bc"}),"\uc5d0\uc11c \uc774 \ubf08\ub300\ub97c \uad6c\uccb4\ud654\ud558\uae30 \uc2dc\uc791\ud560 \uac83\uc785\ub2c8\ub2e4."]}),(0,t.jsx)(r.admonition,{title:"\uc774 \ubb38\uc11c\uc758 \ubc84\uc804 \uad00\ub9ac \uc774 \uae00\uc744 \uc4f0\ub294 \uc2dc\uc810\uc5d0\uc11c \uc774 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4.",type:"note",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["rustc: ",(0,t.jsx)(r.code,{children:"1.75.0"})]}),"\n",(0,t.jsxs)(r.li,{children:["near-sdk-rs: ",(0,t.jsx)(r.code,{children:"4.1.1"})]}),"\n",(0,t.jsxs)(r.li,{children:["NFT standard: ",(0,t.jsx)(r.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,t.jsx)(r.code,{children:"1.1.0"})]}),"\n"]})})]})]})]})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>i});n(67294);var t=n(36905);const s={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,i),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>k});var t=n(67294),s=n(36905),l=n(12466),i=n(16550),d=n(20469),a=n(91980),c=n(67392),o=n(50012);function h(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function u(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return h(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function x(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function j(e){var r=e.queryString,n=void 0!==r&&r,s=e.groupId,l=(0,i.k6)(),d=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:s});return[(0,a._X)(d),(0,t.useCallback)((function(e){if(d){var r=new URLSearchParams(l.location.search);r.set(d,e),l.replace(Object.assign({},l.location,{search:r.toString()}))}}),[d,l])]}function f(e){var r,n,s,l,i=e.defaultValue,a=e.queryString,c=void 0!==a&&a,h=e.groupId,f=u(e),p=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:f})})),m=p[0],b=p[1],v=j({queryString:c,groupId:h}),g=v[0],y=v[1],k=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,o.Nk)(r),s=n[0],l=n[1],[s,(0,t.useCallback)((function(e){r&&l.set(e)}),[r,l])]),_=k[0],T=k[1],N=function(){var e=null!=g?g:_;return x({value:e,tabValues:f})?e:null}();return(0,d.Z)((function(){N&&b(N)}),[N]),{selectedValue:m,selectValue:(0,t.useCallback)((function(e){if(!x({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,f]),tabValues:f}}var p=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function v(e){var r=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,d=e.tabValues,a=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var r=e.currentTarget,n=a.indexOf(r),s=d[n].value;s!==t&&(c(r),i(s))},h=function(e){var r,n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var t,s=a.indexOf(e.currentTarget)+1;n=null!=(t=a[s])?t:a[0];break;case"ArrowLeft":var l,i=a.indexOf(e.currentTarget)-1;n=null!=(l=a[i])?l:a[a.length-1]}null==(r=n)||r.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:d.map((function(e){var r=e.value,n=e.label,l=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return a.push(e)},onKeyDown:h,onClick:o},l,{className:(0,s.Z)("tabs__item",m.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function g(e){var r=e.lazy,n=e.children,s=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=l.find((function(e){return e.props.value===s}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})}))})}function y(e){var r=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,Object.assign({},e,r)),(0,b.jsx)(g,Object.assign({},e,r))]})}function k(e){var r=(0,p.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(r))}},77229:(e,r,n)=>{n.d(r,{Ey:()=>o,O2:()=>a,SQ:()=>c});n(67294);var t=n(74866),s=n(85162),l=n(95665),i=n.n(l),d=n(85893);function a(e){var r=e.children;return Array.isArray(r)||(r=[r]),(0,d.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:r.map((function(e,r){return(0,d.jsx)(s.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var r=e.children,n=e.language;return Array.isArray(r)||(r=[r]),r=r.map((function(e){return function(e,r){var n=e.props,t=(n.children,n.url),s=n.start,l=n.end,i=n.fname;if(e.type===o)return o({url:t,start:s,end:l,language:r,fname:i});return e}(e,n)})),1==r.length?(0,d.jsx)(s.Z,{value:0,label:r[0].props.fname,children:r[0]}):(0,d.jsx)(t.Z,{className:"file-tabs",children:r.map((function(e,r){return(0,d.jsx)(s.Z,{value:r,label:e.props.fname,children:e})}))})}function o(e){var r=e.url,n=e.start,t=e.end,s=e.language,l=e.fname,a=r+"#";return n&&t&&(a+="L"+n+"-L"+t+"#"),(0,d.jsx)(i(),{language:s,fname:l,children:a})}}}]);