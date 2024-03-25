"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7384],{90532:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(85893),t=n(11151);const o={id:"validators",title:"\ubc38\ub9ac\ub370\uc774\ud130"},a=void 0,i={id:"concepts/basics/validators",title:"\ubc38\ub9ac\ub370\uc774\ud130",description:"NEAR \ub124\ud2b8\uc6cc\ud06c\ub294 \ud0c8\uc911\uc559\ud654\ub418\uc5b4 \uc788\uc5b4, \uc5ec\ub7ec \uc0ac\ub78c\uc774 \ud611\ub825\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c\ub97c \uc548\uc804\ud558\uac8c \uc720\uc9c0\ud569\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uadf8\ub7f0 \uc5ed\ud560\uc744 \ud558\ub294 \uc0ac\ub78c\ub4e4\uc744 \ubc38\ub9ac\ub370\uc774\ud130\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4 .",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/1.concepts/basics/validators.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/validators",permalink:"/ko/concepts/basics/validators",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/validators.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",frontMatter:{id:"validators",title:"\ubc38\ub9ac\ub370\uc774\ud130"},sidebar:"concepts",previous:{title:"\ub300\uccb4 \uc194\ub8e8\uc158",permalink:"/ko/concepts/storage/storage-solutions"},next:{title:"\ub124\ud2b8\uc6cc\ud06c",permalink:"/ko/concepts/basics/networks"}},c={},l=[{value:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548",id:"\ub124\ud2b8\uc6cc\ud06c-\ubcf4\uc548",level:3},{value:"\ubc38\ub9ac\ub370\uc774\ud130\uc758 \uacbd\uc81c\ud559",id:"\ubc38\ub9ac\ub370\uc774\ud130\uc758-\uacbd\uc81c\ud559",level:3},{value:"\ubc38\ub9ac\ub370\uc774\ud130 \uc778\ud2b8\ub85c",id:"\ubc38\ub9ac\ub370\uc774\ud130-\uc778\ud2b8\ub85c",level:2},{value:"Chunk-Only \ubc38\ub9ac\ub370\uc774\ud130",id:"chunk-only-\ubc38\ub9ac\ub370\uc774\ud130",level:2},{value:"\ubc38\ub9ac\ub370\uc774\ud130 \uc804\uc6a9 \ubb38\uc11c \uc0ac\uc774\ud2b8",id:"\ubc38\ub9ac\ub370\uc774\ud130-\uc804\uc6a9-\ubb38\uc11c-\uc0ac\uc774\ud2b8",level:2}];function d(e){const s={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["NEAR \ub124\ud2b8\uc6cc\ud06c\ub294 \ud0c8\uc911\uc559\ud654\ub418\uc5b4 \uc788\uc5b4, \uc5ec\ub7ec \uc0ac\ub78c\uc774 \ud611\ub825\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c\ub97c \uc548\uc804\ud558\uac8c \uc720\uc9c0\ud569\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uadf8\ub7f0 \uc5ed\ud560\uc744 \ud558\ub294 \uc0ac\ub78c\ub4e4\uc744 ",(0,r.jsx)(s.strong,{children:"\ubc38\ub9ac\ub370\uc774\ud130"}),"\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4 ."]}),"\n",(0,r.jsx)(s.p,{children:"\ub124\ud2b8\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc720\ud6a8\ud55c\uc9c0, \uc989 \uc544\ubb34\ub3c4 \ub3c8\uc744 \ud6d4\uce58\ub824 \ud558\uc9c0 \uc54a\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \ubc38\ub9ac\ub370\uc774\ud130\ub294 \ud2b9\uc815 \ud569\uc758 \uba54\ucee4\ub2c8\uc998\uc744 \ub530\ub985\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(s.p,{children:["\ud604\uc7ac \ube14\ub85d\uccb4\uc778\uc774 \uc62c\ubc14\ub974\uac8c \uc791\ub3d9\ud558\uace0 \uacf5\uaca9\uc5d0 \uc800\ud56d\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uba87 \uac00\uc9c0 \uc798 \uc54c\ub824\uc9c4 \ud569\uc758 \uba54\ucee4\ub2c8\uc998\uc774 \uc788\uc2b5\ub2c8\ub2e4. NEAR \ud504\ub85c\ud1a0\ucf5c\uc740 ",(0,r.jsx)(s.strong,{children:"Proof-of-Stake"})," \ubc84\uc804, \ud2b9\ud788 ",(0,r.jsx)(s.a,{href:"https://near.org/blog/thresholded-proof-of-stake/",children:"Thresholded Proof of Stake"})," \ubc84\uc804\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(s.p,{children:["\uc9c0\ubd84 \uc99d\uba85\uc5d0\uc11c \uc0ac\uc6a9\uc790\ub294 NEAR \ud1a0\ud070\uc744 \uc704\uc784\ud558\uc5ec \ud2b9\uc815 \ub124\ud2b8\uc6cc\ud06c \ubc38\ub9ac\ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc9c0\uc6d0\uc744 \ud569\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc138\uc2a4\ub97c ",(0,r.jsx)(s.strong,{children:"\uc2a4\ud14c\uc774\ud0b9"}),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. \ud575\uc2ec \uc544\uc774\ub514\uc5b4\ub294, \ucee4\ubba4\ub2c8\ud2f0\uc758 \uc2e0\ub8b0\ub97c \uc5bb\uc740 \ubc38\ub9ac\ub370\uc774\ud130\uc5d0 \ub9ce\uc740 \uc591\uc758 \ud1a0\ud070\uc744 \uc704\uc784\ud55c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(s.h3,{id:"\ub124\ud2b8\uc6cc\ud06c-\ubcf4\uc548",children:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548"}),"\n",(0,r.jsx)(s.p,{children:"\ubc38\ub9ac\ub370\uc774\ud130\uc5d0\ub294 \ub450 \uac00\uc9c0 \uc8fc\uc694 \uc784\ubb34\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \uac80\uc99d\ud558\uace0 \uc2e4\ud589\ud558\uc5ec \ube14\ub85d\uccb4\uc778\uc744 \ud615\uc131\ud558\ub294 \ube14\ub85d\uc5d0 \ubaa8\uc73c\ub294 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub4e4\uc758 \ub450 \ubc88\uc9f8 \uc784\ubb34\ub294 \ub2e4\ub978 \ubc38\ub9ac\ub370\uc774\ud130\ub97c \uac10\ub3c5\ud558\uc5ec, \uc544\ubb34\ub3c4 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ube14\ub85d\uc744 \uc0dd\uc131\ud558\uac70\ub098 \ub300\uccb4 \uccb4\uc778\uc744 \uc0dd\uc131(\uc608: \uc774\uc911 \uc9c0\ucd9c)\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub294 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:'\ubc38\ub9ac\ub370\uc774\ud130\uac00 \uc545\uc758\uc801\uc778 \ud589\ub3d9\uc744 \ud558\ub2e4 \uac78\ub9b4 \uacbd\uc6b0, \uadf8\ub4e4\uc740 "\uc2ac\ub798\uc2f1"\ub418\uc5b4 \uc9c0\ubd84(\uc758 \uc77c\ubd80)\uc774 \uc18c\uac01\ub420 \uac83\uc785\ub2c8\ub2e4.'}),"\n",(0,r.jsx)(s.p,{children:"NEAR \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uccb4\uc778\uc744 \uc870\uc791\ud558\ub824\ub294 \uc2dc\ub3c4\ub294, \uc545\uc758\uc801\uc778 \ud65c\ub3d9\uc774 \ub4dc\ub7ec\ub098\uc9c0 \uc54a\ub3c4\ub85d \ud55c \ubc88\uc5d0 \ub300\ubd80\ubd84\uc758 \ubc38\ub9ac\ub370\uc774\ud130\ub97c \uc81c\uc5b4\ud574\uc57c \ud568\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uacf5\uaca9\uc5d0 \uc2e4\ud328\ud558\uba74 \uc2a4\ud14c\uc774\ud0b9\ub41c \ud1a0\ud070\uc774 \uc0ad\uac10\ub420 \uc218 \uc788\uc73c\ubbc0\ub85c, \ubcf8\uc778\uc774 \uac00\uc9c4 \ub9c9\ub300\ud55c \uc790\ubcf8\uc744 \uc704\ud5d8\uc5d0 \ube60\ub728\ub824\uc57c \ud55c\ub2e4\ub294 \ub9ac\uc2a4\ud06c\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(s.h3,{id:"\ubc38\ub9ac\ub370\uc774\ud130\uc758-\uacbd\uc81c\ud559",children:"\ubc38\ub9ac\ub370\uc774\ud130\uc758 \uacbd\uc81c\ud559"}),"\n",(0,r.jsx)(s.p,{children:"\ub124\ud2b8\uc6cc\ud06c\ub97c \uc11c\ube44\uc2a4\ud558\ub294 \ub300\uac00\ub85c \ubc38\ub9ac\ub370\uc774\ud130\ub294 \ub9e4 \uc5d0\ud3ec\ud06c\ub9c8\ub2e4 \ubaa9\ud45c\ub41c \ub9cc\ud07c\uc758 NEAR\ub85c \ubcf4\uc0c1\uc744 \ubc1b\uc2b5\ub2c8\ub2e4. \ubaa9\ud45c \uac12\uc740 \uc5f0\uac04 \uae30\uc900\uc73c\ub85c \ucd1d \uacf5\uae09\ub7c9\uc758 4.5%\uac00 \ub418\ub3c4\ub85d \uacc4\uc0b0\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:"\uac01 \uc5d0\ud3ec\ud06c\uc5d0 \uc218\uc9d1\ub41c \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc(\ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \ub9ac\ubca0\uc774\ud2b8\ub85c \ud560\ub2f9\ub41c \ubd80\ubd84 \uc81c\uc678)\ub294 \uc2dc\uc2a4\ud15c\uc5d0 \uc758\ud574 \uc18c\uac01\ub429\ub2c8\ub2e4. \uc778\ud50c\ub808\uc774\uc158 \ubcf4\uc0c1\uc740 \uc218\uc9d1\ub418\uac70\ub098 \uc18c\uac01\ub41c \uc218\uc218\ub8cc\uc758 \uc218\uc5d0 \uad00\uacc4\uc5c6\uc774 \ub3d9\uc77c\ud55c \ube44\uc728\ub85c \ubc38\ub9ac\ub370\uc774\ud130\uc5d0\uac8c \uc9c0\uae09\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(s.h2,{id:"\ubc38\ub9ac\ub370\uc774\ud130-\uc778\ud2b8\ub85c",children:"\ubc38\ub9ac\ub370\uc774\ud130 \uc778\ud2b8\ub85c"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://pages.near.org/papers/the-official-near-white-paper/#economics",children:"Validators"})," are responsible for producing blocks and the security of the network."]}),"\n",(0,r.jsxs)(s.p,{children:["\ubc38\ub9ac\ub370\uc774\ud130\ub294 \ubaa8\ub4e0 \uc0e4\ub4dc\ub97c \uac80\uc99d\ud558\ubbc0\ub85c \uc774\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud574 \ub192\uc740 \uc694\uad6c \uc0ac\ud56d\uc774 \uc124\uc815\ub429\ub2c8\ub2e4(16GB RAM \ubc0f 1TB SSD \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uc788\ub294 8\ucf54\uc5b4 CPU). \ube14\ub85d \uc0dd\uc131 \ubc38\ub9ac\ub370\uc774\ud130 \ub178\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \ube44\uc6a9\uc740 \ud638\uc2a4\ud305 \uc2dc \uc6d4 $330\ub85c \ucd94\uc815\ub429\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.jsx)(s.a,{href:"https://near-nodes.io/validator/hardware",children:"\ud558\ub4dc\uc6e8\uc5b4 \ubc0f \ube44\uc6a9 \uacac\uc801 \ud398\uc774\uc9c0"}),"\ub97c \ucc38\uace0\ud558\uc138\uc694."]}),"\n",(0,r.jsx)(s.p,{children:"\ud604\uc7ac \ud65c\uc131 \ubc38\ub9ac\ub370\uc774\ud130\ub294 \uc775\uc2a4\ud50c\ub85c\ub7ec\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. The minimum seat price to become a block-producing validator is based on the 300th proposal. (If more than 300 proposals are submitted, the threshold will simply be the stake of the 300th proposal, provided that it\u2019s larger than the minimum threshold of 25,500 $NEAR.) \ube14\ub85d \uc0dd\uc131 \ubc38\ub9ac\ub370\uc774\ud130\uac00 \ub418\uae30 \uc704\ud55c \uac00\uaca9\uc740 \uc775\uc2a4\ud50c\ub85c\ub7ec\uc5d0\uc11c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ub429\ub2c8\ub2e4. \ud574\ub2f9 \uac00\uaca9\ubcf4\ub2e4 \ub192\uc740 \uc9c0\ubd84\uc744 \uac00\uc9c4 \ubc38\ub9ac\ub370\uc774\ud130 \ub178\ub4dc\ub294 \ud65c\uc131 \ubc38\ub9ac\ub370\uc774\ud130 \uc9d1\ud569\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)("blockquote",{className:"lesson",children:[(0,r.jsx)("strong",{children:"\ud2b9\uc815 \ubc38\ub9ac\ub370\uc774\ud130 \ub178\ub4dc\uac00 GPU \ucef4\ud4e8\ud305\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uac70\ub098, CPU\uc778 \uacbd\uc6b0 GPU \ucef4\ud4e8\ud305\uc744 \uc9c0\uc6d0\ud560 \uacc4\ud68d\uc774 \uc788\ub098\uc694?"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(s.p,{children:"\uc6b0\ub9ac\ub294 POS \uccb4\uc778\uc774\uae30 \ub54c\ubb38\uc5d0 GPU \uc9c0\uc6d0\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\uba70 \uac80\uc99d \uacfc\uc815\uc5d0 \uacc4\uc0b0 \ub2a5\ub825\uc774 \uac70\uc758 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)("a",{href:"https://github.com/near/wiki/blob/master/Archive/validators/about.md",children:"Validator Quickstart"})," \ubc0f ",(0,r.jsx)("a",{href:"https://github.com/near/wiki/blob/master/Archive/validators/faq.md",children:"Staking FA"}),"\uc5d0\uc11c \ud569\uc758 \uc804\ub7b5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),"\n",(0,r.jsx)(s.h2,{id:"chunk-only-\ubc38\ub9ac\ub370\uc774\ud130",children:"Chunk-Only \ubc38\ub9ac\ub370\uc774\ud130"}),"\n",(0,r.jsx)(s.p,{children:"Chunk-Only Producer\ub294 \ud558\ub4dc\uc6e8\uc5b4 \ubc0f \ud1a0\ud070 \uc694\uad6c \uc0ac\ud56d\uc774 \ub354 \ub0ae\uc740 \ubc38\ub9ac\ub370\uc774\ud130\uc785\ub2c8\ub2e4. \uc774 \uc0c8\ub85c\uc6b4 \uc5ed\ud560\uc740 \ub124\ud2b8\uc6cc\ud06c\uc758 \ubc38\ub9ac\ub370\uc774\ud130 \uc218\uac00 \uc99d\uac00\ud558\ub3c4\ub85d \ud560 \uac83\uc774\uace0, \uc774\ub97c \ud1b5\ud574 \ubcf4\uc0c1\uc744 \uc5bb\uc73c\uba70 NEAR \uc0dd\ud0dc\uacc4\ub97c \ubcf4\ud638\ud560 \uc218 \uc788\ub294 \uae30\ud68c\ub97c \ub354 \ub9ce\uc774 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://pages.near.org/papers/the-official-near-white-paper/#economics",children:"Chunk-Only Producers"})," are solely responsible for ",(0,r.jsx)(s.a,{href:"https://pages.near.org/papers/nightshade/#nightshade",children:"producing chunks"})," (parts of the block from a shard, see ",(0,r.jsx)(s.a,{href:"https://pages.near.org/papers/nightshade/",children:"Nightshade"})," for more detail) in one shard (a partition on the network). Because Chunk-Only Producers only need to validate one shard, they can run the validator node on a 8-Core CPU, with 16GB of RAM, and 500 GB SSD of storage."]}),"\n",(0,r.jsxs)(s.p,{children:["\ubc38\ub9ac\ub370\uc774\ud130\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c Chunk-Only Producer\ub294 \ucd5c\uc18c \uc5f0\uac04 4.5%\uc758 \ubcf4\uc0c1\uc744 \ubc1b\uc2b5\ub2c8\ub2e4. \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc788\ub294 \ud1a0\ud070\uc758 100% \ubbf8\ub9cc\uc774 \uc2a4\ud14c\uc774\ud0b9\ub41c \uacbd\uc6b0 Chunk-Only Producer\ub294 \ud6e8\uc52c \ub354 \ub9ce\uc740 \ubcf4\uc0c1\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Validator\uc758 \uacbd\uc81c\ud559\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 NEAR\uc758 ",(0,r.jsx)(s.a,{href:"https://near.org/blog/near-protocol-economics/",children:"Economics Explained"}),"\ub97c \ud655\uc778\ud558\uc2ed\uc2dc\uc624 ."]}),"\n",(0,r.jsx)(s.h2,{id:"\ubc38\ub9ac\ub370\uc774\ud130-\uc804\uc6a9-\ubb38\uc11c-\uc0ac\uc774\ud2b8",children:"\ubc38\ub9ac\ub370\uc774\ud130 \uc804\uc6a9 \ubb38\uc11c \uc0ac\uc774\ud2b8"}),"\n",(0,r.jsxs)(s.p,{children:["\ubc38\ub9ac\ub370\uc774\ud130 \ubc0f \ub178\ub4dc\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\ub824\uba74 ",(0,r.jsx)(s.a,{href:"https://near-nodes.io/",children:"\ubc38\ub9ac\ub370\uc774\ud130 \uc804\uc6a9 \ubb38\uc11c \uc0ac\uc774\ud2b8"}),"\ub97c \ubc29\ubb38\ud558\uc138\uc694 ."]}),"\n",(0,r.jsxs)("blockquote",{className:"lesson",children:[(0,r.jsx)("strong",{children:"\uac1c\ubc1c\uc790\uac00 \ucde8\uc57d\ud558\uac70\ub098 \uc545\uc758\uc801\uc778 dApp\uc744 \uc791\uc131\ud558\ub294 \uacbd\uc6b0 \ubc38\ub9ac\ub370\uc774\ud130\ub294 \uc554\ubb35\uc801\uc73c\ub85c \uc704\ud5d8\uc744 \uac10\uc218\ud574\uc57c \ud558\ub098\uc694?"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(s.p,{children:"\uc544\ub2c8\uc694. \uc6b0\ub9ac\ub294 \ud504\ub85c\ud1a0\ucf5c \uc218\uc900\uc5d0\uc11c \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ub300\ud55c \uc7a0\uc7ac\uc801 \uc190\uc0c1\uc744 \ubc29\uc9c0\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud568\uc218 \ud638\ucd9c\uc5d0 \uc804\ub2ec\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\uc758 \uc591\uc774\ub098 \ud568\uc218 \ud638\ucd9c \ud55c \ubc88\uc5d0 \uc218\ud589\ud560 \uc218 \uc788\ub294 \uacc4\uc0b0\uc758 \uc591 \ub4f1\uc744 \uc81c\ud55c\ud558\ub294 \ub9ce\uc740 \uc81c\ud55c \uc0ac\ud56d\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc989, \ub2e8\uacc4 \uac8c\uc774\ud2b8 \ub610\ub294 \uc2b9\uc778 \ud504\ub85c\uc138\uc2a4\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc790\ub294 \uc790\uc2e0\uc758 dApp\uc5d0 \ub300\ud574 \ucc45\uc784\uc744 \uc838\uc57c \ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ucde8\uc57d\uc810\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc790\uccb4\ub97c \uc190\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ud589\uc2a4\ub7fd\uac8c\ub3c4 NEAR\uc5d0\uc11c\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8\uac00 \ub9e4\uc6b0 \uc6d0\ud65c\ud558\ubbc0\ub85c, \ucde8\uc57d\uc810\uc774 \ubc1c\uacac\ub418\uc5c8\uc744 \ub54c \ub2e4\ub978 \ube14\ub85d\uccb4\uc778\uacfc\ub294 \ub2e4\ub974\uac8c \uacc4\uc815\uc5d0 \uc27d\uac8c \uc5c5\ub370\uc774\ud2b8/\ud328\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>a});var r=n(67294);const t={},o=r.createContext(t);function a(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);