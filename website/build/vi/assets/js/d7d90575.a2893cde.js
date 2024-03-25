"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[647],{98401:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=t(85893),i=t(11151),c=t(77229);const a={id:"events",title:"Event",sidebar_label:"Event"},s=void 0,o={id:"tutorials/nfts/events",title:"Event",description:"In this tutorial, you'll learn about the events standard and how to implement it in your smart contract.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/7-events.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/events",permalink:"/vi/tutorials/nfts/events",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/7-events.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"28 thg 2, 2024",sidebarPosition:7,frontMatter:{id:"events",title:"Event",sidebar_label:"Event"},sidebar:"tutorials",previous:{title:"Royalty",permalink:"/vi/tutorials/nfts/royalty"},next:{title:"Marketplace",permalink:"/vi/tutorials/nfts/marketplace"}},l={},h=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"Hi\u1ec3u r\xf5 tr\u01b0\u1eddng h\u1ee3p s\u1eed d\u1ee5ng",id:"understanding-the-use-case",level:2},{value:"V\u1ea5n \u0111\u1ec1",id:"the-problem",level:3},{value:"Gi\u1ea3i ph\xe1p",id:"the-solution",level:3},{value:"C\xe1c v\xed d\u1ee5",id:"examples",level:3},{value:"T\xecnh hu\u1ed1ng A - mint \u0111\u01a1n gi\u1ea3n",id:"t\xecnh-hu\u1ed1ng-a---mint-\u0111\u01a1n-gi\u1ea3n",level:4},{value:"T\xecnh hu\u1ed1ng B- batch mint",id:"t\xecnh-hu\u1ed1ng-b--batch-mint",level:4},{value:"T\xecnh hu\u1ed1ng C - transfer c\xe1c NFT",id:"t\xecnh-hu\u1ed1ng-c---transfer-c\xe1c-nft",level:4},{value:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract",id:"modifications-to-the-contract",level:2},{value:"T\u1ea1o c\xe1c file event",id:"events-rs",level:3},{value:"Th\xeam c\xe1c module v\xe0 constant",id:"lib-rs",level:3},{value:"Log c\xe1c token \u0111\xe3 \u0111\u01b0\u1ee3c mint",id:"logging-minted-tokens",level:3},{value:"Log c\xe1c transfer",id:"logging-transfers",level:3},{value:"Deploy contract",id:"redeploying-contract",level:2},{value:"Deployment",id:"deployment",level:3},{value:"Kh\u1edfi t\u1ea1o v\xe0 mint",id:"initialization-and-minting",level:3},{value:"Transfer",id:"transferring",level:3},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["In this tutorial, you'll learn about the ",(0,r.jsx)(e.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events standard"})," and how to implement it in your smart contract."]}),"\n",(0,r.jsx)(e.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,r.jsxs)(e.p,{children:["\u0110\u1ec3 b\u1eaft \u0111\u1ea7u, h\xe3y chuy\u1ec3n sang branch ",(0,r.jsx)(e.code,{children:"6.approval"})," t\u1eeb ",(0,r.jsx)(e.a,{href:"https://github.com/near-examples/nft-tutorial/",children:"GitHub repository"})," c\u1ee7a ch\xfang t\xf4i, ho\u1eb7c ti\u1ebfp t\u1ee5c c\xf4ng vi\u1ec7c c\u1ee7a b\u1ea1n t\u1eeb c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"git checkout 6.royalty\n"})}),"\n",(0,r.jsxs)(e.admonition,{type:"tip",children:[(0,r.jsxs)(e.mdxAdmonitionTitle,{children:["If you wish to see the finished code for this ",(0,r.jsx)(e.em,{children:"Events"})," tutorial, you can find it on the ",(0,r.jsx)(e.code,{children:"7.events"})," branch. :::"]}),(0,r.jsx)(e.h2,{id:"understanding-the-use-case",children:"Hi\u1ec3u r\xf5 tr\u01b0\u1eddng h\u1ee3p s\u1eed d\u1ee5ng"}),(0,r.jsxs)(e.p,{children:["Have you ever wondered how the wallet knows which NFTs you own and how it can display them in the ",(0,r.jsx)(e.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"}),"? Originally, an ",(0,r.jsx)(e.a,{href:"/tools/indexer-for-explorer",children:"indexer"})," was used and it listened for any functions starting with ",(0,r.jsx)(e.code,{children:"nft_"})," on your account. Nh\u1eefng contract n\xe0y sau \u0111\xf3 \u0111\u01b0\u1ee3c g\u1eafn c\u1edd tr\xean account c\u1ee7a b\u1ea1n c\xf3 th\u1ec3 l\xe0 c\xe1c NFT contract."]}),(0,r.jsxs)(e.p,{children:["Khi b\u1ea1n chuy\u1ec3n \u0111\u1ebfn collectibles tab c\u1ee7a m\xecnh, wallet sau \u0111\xf3 s\u1ebd truy v\u1ea5n t\u1ea5t c\u1ea3 c\xe1c contract \u0111\xf3 \u0111\u1ec3 bi\u1ebft danh s\xe1ch NFT m\xe0 b\u1ea1n \u0111ang s\u1edf h\u1eefu b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng function ",(0,r.jsx)(e.code,{children:"nft_tokens_for_owner"})," m\xe0 b\u1ea1n \u0111\xe3 nh\xecn th\u1ea5y trong ",(0,r.jsx)(e.a,{href:"/docs/tutorials/contracts/nfts/enumeration",children:"h\u01b0\u1edbng d\u1eabn enumeration"}),"."]}),(0,r.jsx)(e.h3,{id:"the-problem",children:"V\u1ea5n \u0111\u1ec1"}),(0,r.jsx)(e.p,{children:"Ph\u01b0\u01a1ng ph\xe1p g\u1eafn c\u1edd c\xe1c contract n\xe0y kh\xf4ng \u0111\xe1ng tin c\u1eady v\xec m\u1ed7i \u1ee9ng d\u1ee5ng \u0111i\u1ec1u khi\u1ec3n NFT c\xf3 th\u1ec3 c\xf3 c\xe1ch mint ho\u1eb7c transfer NFT ri\xeang c\u1ee7a n\xf3. Ngo\xe0i ra, c\xe1c \u1ee9ng d\u1ee5ng th\u01b0\u1eddng transfer ho\u1eb7c mint nhi\u1ec1u token c\xf9ng m\u1ed9t l\xfac b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng c\xe1c batch function."}),(0,r.jsx)(e.h3,{id:"the-solution",children:"Gi\u1ea3i ph\xe1p"}),(0,r.jsx)(e.p,{children:"M\u1ed9t ti\xeau chu\u1ea9n \u0111\xe3 \u0111\u01b0\u1ee3c gi\u1edbi thi\u1ec7u \u0111\u1ec3 c\xe1c smart contract c\xf3 th\u1ec3 ph\xe1t ra m\u1ed9t event b\u1ea5t c\u1ee9 l\xfac n\xe0o c\xe1c NFT \u0111\u01b0\u1ee3c transfer, mint, hay burn. Event n\xe0y \u1edf d\u1ea1ng log. B\u1ea5t k\u1ec3 contract tri\u1ec3n khai function nh\u01b0 th\u1ebf n\xe0o, gi\u1edd \u0111\xe2y indexer c\xf3 th\u1ec3 l\u1eafng nghe c\xe1c log \u0111\u01b0\u1ee3c ti\xeau chu\u1ea9n h\xf3a \u0111\xf3."}),(0,r.jsx)(e.p,{children:"Theo ti\xeau chu\u1ea9n, b\u1ea1n c\u1ea7n tri\u1ec3n khai m\u1ed9t ch\u1ee9c n\u0103ng log k\xedch ho\u1ea1t khi c\xe1c NFT \u0111\u01b0\u1ee3c transfer ho\u1eb7c mint. Trong tr\u01b0\u1eddng h\u1ee3p n\xe0y, contract kh\xf4ng h\u1ed7 tr\u1ee3 burn v\xec th\u1ebf b\u1ea1n kh\xf4ng c\u1ea7n lo l\u1eafng v\u1ec1 n\xf3 b\xe2y gi\u1edd."}),(0,r.jsxs)(e.p,{children:["\u0110i\u1ec1u quan tr\u1ecdng c\u1ea7n l\u01b0u \xfd l\xe0 ti\xeau chu\u1ea9n quy \u0111\u1ecbnh r\u1eb1ng log ph\u1ea3i \u0111\u01b0\u1ee3c b\u1eaft \u0111\u1ea7u v\u1edbi ",(0,r.jsx)(e.code,{children:'"EVENT_JSON:"'}),". Tuy nhi\xean, c\u1ea5u tr\xfac log c\u1ee7a b\u1ea1n lu\xf4n ph\u1ea3i ch\u1ee9a 3 th\u1ee9 d\u01b0\u1edbi \u0111\xe2y:"]}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"standard"}),": t\xean hi\u1ec7n t\u1ea1i c\u1ee7a ti\xeau chu\u1ea9n (v\xed d\u1ee5 nep171)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"version"}),": phi\xean b\u1ea3n c\u1ee7a ti\xeau chu\u1ea9n b\u1ea1n \u0111ang s\u1eed d\u1ee5ng (v\xed d\u1ee5 1.0.0)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"event"}),": m\u1ed9t danh s\xe1ch c\xe1c event b\u1ea1n \u0111ang ph\xe1t ra."]}),"\n"]}),(0,r.jsx)(e.p,{children:"Event interface kh\xe1c nhau t\xf9y thu\u1ed9c v\xe0o vi\u1ec7c b\u1ea1n \u0111ang ghi l\u1ea1i c\xe1c transfer hay mint. Interface c\u1ee7a c\u1ea3 hai event \u0111\u01b0\u1ee3c ph\xe1c th\u1ea3o nh\u01b0 d\u01b0\u1edbi \u0111\xe2y."}),(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"C\xe1c transfer event"}),":"]}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"Optional"})," - ",(0,r.jsx)(e.strong,{children:"authorized_id"}),": account \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ea5p thu\u1eadn transfer thay cho ch\u1ee7 s\u1edf h\u1eefu."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"old_owner_id"}),": ch\u1ee7 s\u1edf h\u1eefu c\u0169 c\u1ee7a NFT."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"new_owner_id"}),": ch\u1ee7 s\u1edf h\u1eefu m\u1edbi m\xe0 NFT \u0111ang \u0111\u01b0\u1ee3c transfer t\u1edbi."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"token_ids"}),": danh d\xe1ch c\xe1c NFT \u0111ang \u0111\u01b0\u1ee3c transfer."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"Optional"})," - ",(0,r.jsx)(e.strong,{children:"memo"}),": m\u1ed9t t\xf9y ch\u1ecdn message \u0111\u1ec3 \u0111\u01b0a v\xe0o event."]}),"\n"]}),(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"C\xe1c mint event"}),":"]}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"new_owner_id"}),": ch\u1ee7 s\u1edf h\u1eefu m\u1edbi m\xe0 NFT \u0111ang \u0111\u01b0\u1ee3c mint t\u1edbi."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"token_ids"}),": danh d\xe1ch c\xe1c NFT \u0111ang \u0111\u01b0\u1ee3c transfer."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"Optional"})," - ",(0,r.jsx)(e.strong,{children:"memo"}),": m\u1ed9t t\xf9y ch\u1ecdn message \u0111\u1ec3 \u0111\u01b0a v\xe0o event."]}),"\n"]}),(0,r.jsx)(e.h3,{id:"examples",children:"C\xe1c v\xed d\u1ee5"}),(0,r.jsx)(e.p,{children:"\u0110\u1ec3 c\u1ee7ng c\u1ed1 s\u1ef1 hi\u1ec3u bi\u1ebft c\u1ee7a b\u1ea1n v\u1ec1 ti\xeau chu\u1ea9n n\xe0y, h\xe3y c\xf9ng \u0111i qua ba t\xecnh hu\u1ed1ng v\xe0 xem c\xe1c log s\u1ebd nh\u01b0 th\u1ebf n\xe0o."}),(0,r.jsx)(e.h4,{id:"t\xecnh-hu\u1ed1ng-a---mint-\u0111\u01a1n-gi\u1ea3n",children:"T\xecnh hu\u1ed1ng A - mint \u0111\u01a1n gi\u1ea3n"}),(0,r.jsxs)(e.p,{children:["Trong t\xecnh hu\u1ed1ng n\xe0y, Benji mu\u1ed1n mint m\u1ed9t NFT t\u1edbi Mike v\u1edbi m\u1ed9t token ID ",(0,r.jsx)(e.code,{children:'"team-token"'})," v\xe0 anh \u1ea5y kh\xf4ng g\u1eedi m\u1ed9t message n\xe0o. Log s\u1ebd nh\xecn gi\u1ed1ng nh\u01b0 sau."]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token"]}\n  ]\n}\n'})}),(0,r.jsx)(e.h4,{id:"t\xecnh-hu\u1ed1ng-b--batch-mint",children:"T\xecnh hu\u1ed1ng B- batch mint"}),(0,r.jsxs)(e.p,{children:["Trong t\xecnh hu\u1ed1ng n\xe0y, Benji mu\u1ed1n ti\u1ebfn h\xe0nh m\u1ed9t batch mint. Anh \u1ea5y s\u1ebd mint NFT t\u1edbi Mike, Damian, Josh, v\xe0 Dorian. Tuy nhi\xean, Dorian s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c hai NFT. M\u1ed7i token ID s\u1ebd l\xe0 ",(0,r.jsx)(e.code,{children:'"team-token"'})," theo sau b\u1edfi m\u1ed9t s\u1ed1 t\u0103ng d\u1ea7n. Log s\u1ebd nh\u01b0 sau."]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_mint",\n  "data": [\n    {"owner_id": "mike.testnet", "token_ids": ["team-token0"]},\n    {"owner_id": "damian.testnet", "token_ids": ["team-token1"]},\n    {"owner_id": "josh.testnet", "token_ids": ["team-token2"]}\n    {"owner_id": "dorian.testnet", "token_ids": ["team-token3", "team-token4"]},\n  ]\n}\n'})}),(0,r.jsx)(e.h4,{id:"t\xecnh-hu\u1ed1ng-c---transfer-c\xe1c-nft",children:"T\xecnh hu\u1ed1ng C - transfer c\xe1c NFT"}),(0,r.jsx)(e.p,{children:"Trong t\xecnh hu\u1ed1ng n\xe0y, Mike \u0111ang transfer c\u1ea3 hai token c\u1ee7a team anh \u1ea5y t\u1edbi Josh. Log s\u1ebd nh\xecn gi\u1ed1ng nh\u01b0 sau."}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'EVENT_JSON:{\n  "standard": "nep171",\n  "version": "1.0.0",\n  "event": "nft_transfer",\n  "data": [\n    {"old_owner_id": "mike.testnet", "new_owner_id": "josh.testnet", "token_ids": ["team-token", "team-token0"], "memo": "Go Team!"}\n  ]\n}\n'})}),(0,r.jsx)(e.h2,{id:"modifications-to-the-contract",children:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract"}),(0,r.jsxs)(e.p,{children:["\u1ede th\u1eddi \u0111i\u1ec3m n\xe0y, b\u1ea1n \u0111\xe3 hi\u1ec3u r\xf5 v\u1ec1 m\u1ee5c ti\xeau cu\u1ed1i c\xf9ng l\xe0 g\xec v\xec th\u1ebf h\xe3y b\u1eaft \u0111\u1ea7u l\xe0m vi\u1ec7c! M\u1edf repository v\xe0 t\u1ea1o m\u1ed9t file m\u1edbi trong th\u01b0 m\u1ee5c ",(0,r.jsx)(e.code,{children:"nft-contract/src"})," \u0111\u1eb7t t\xean cho n\xf3 l\xe0 ",(0,r.jsx)(e.code,{children:"events.rs"}),". \u0110\xe2y l\xe0 n\u01a1i c\xe1c c\u1ea5u tr\xfac log c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o."]}),(0,r.jsx)(e.h3,{id:"events-rs",children:"T\u1ea1o c\xe1c file event"}),(0,r.jsxs)(e.p,{children:["Copy ph\u1ea7n d\u01b0\u1edbi \u0111\xe2y v\xe0o file c\u1ee7a b\u1ea1n. C\xe1i n\xe0y s\u1ebd ph\xe1c th\u1ea3o c\xe1c c\u1ea5u tr\xfac cho ",(0,r.jsx)(e.code,{children:"EventLog"})," c\u1ee7a b\u1ea1n, ",(0,r.jsx)(e.code,{children:"NftMintLog"}),", v\xe0 ",(0,r.jsx)(e.code,{children:"NftTransferLog"}),". Ngo\xe0i ra, ch\xfang ta \u0111\xe3 th\xeam ",(0,r.jsx)(e.code,{children:"EVENT_JSON:"})," l\xe0 ti\u1ec1n t\u1ed1 b\u1ea5t c\u1ee9 khi n\xe0o b\u1ea1n ghi l\u1ea1i ",(0,r.jsx)(e.code,{children:"EventLog"}),"."]}),(0,r.jsx)(c.Ey,{language:"rust",start:"1",end:"79",url:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/events.rs"}),(0,r.jsxs)(e.p,{children:["This requires the ",(0,r.jsx)(e.code,{children:"serde_json"})," package which you can easily add to your ",(0,r.jsx)(e.code,{children:"nft-contract/Cargo.toml"})," file:"]}),(0,r.jsx)(c.Ey,{language:"rust",start:"1",end:"20",url:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/Cargo.toml"}),(0,r.jsx)(e.h3,{id:"lib-rs",children:"Th\xeam c\xe1c module v\xe0 constant"}),(0,r.jsxs)(e.p,{children:["B\xe2y gi\u1edd b\u1ea1n \u0111\xe3 t\u1ea1o m\u1ed9t file m\u1edbi, b\u1ea1n c\u1ea7n th\xeam module t\u1edbi file ",(0,r.jsx)(e.code,{children:"lib.rs"}),". Ngo\xe0i ra, b\u1ea1n c\xf3 th\u1ec3 \u0111\u1ecbnh ngh\u0129a hai constant cho ti\xeau chu\u1ea9n v\xe0 version s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong contract c\u1ee7a ch\xfang ta."]}),(0,r.jsx)(c.Ey,{language:"rust",start:"10",end:"30",url:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/lib.rs"}),(0,r.jsx)(e.h3,{id:"logging-minted-tokens",children:"Log c\xe1c token \u0111\xe3 \u0111\u01b0\u1ee3c mint"}),(0,r.jsxs)(e.p,{children:["B\xe2y gi\u1edd t\u1ea5t c\u1ea3 c\xe1c c\xf4ng c\u1ee5 \u0111\xe3 \u0111\u01b0\u1ee3c thi\u1ebft l\u1eadp s\u1eb5n, b\u1ea1n c\xf3 th\u1ec3 ti\u1ebfn h\xe0nh th\u1ef1c t\u1ebf ch\u1ee9c n\u0103ng log. V\xec contract ch\u1ec9 mint c\xe1c token \u1edf m\u1ed9t n\u01a1i, n\xean vi\u1ec7c b\u1ea1n \u0111\u1eb7t log \u1edf \u0111\xe2u l\xe0 kh\xf4ng quan tr\u1ecdng. M\u1edf file ",(0,r.jsx)(e.code,{children:"nft-contract/src/mint.rs"})," v\xe0 chuy\u1ec3n t\u1edbi ph\xeda cu\u1ed1i file. \u0110\xe2y l\xe0 n\u01a1i b\u1ea1n s\u1ebd x\xe2y d\u1ef1ng log \u0111\u1ec3 mint. B\xe2y gi\u1edd n\xf3 s\u1ebd ph\xe1t ra m\u1ed9t log ch\xednh x\xe1c, b\u1ea5t k\u1ef3 khi n\xe0o ai \u0111\xf3 mint th\xe0nh c\xf4ng m\u1ed9t NFT."]}),(0,r.jsx)(c.Ey,{language:"rust",start:"5",end:"80",url:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/mint.rs"}),(0,r.jsx)(e.h3,{id:"logging-transfers",children:"Log c\xe1c transfer"}),(0,r.jsxs)(e.p,{children:["H\xe3y m\u1edf file ",(0,r.jsx)(e.code,{children:"nft-contract/src/internal.rs"})," v\xe0 chuy\u1ec3n t\u1edbi ",(0,r.jsx)(e.code,{children:"internal_transfer"})," function. \u0110\xe2y l\xe0 n\u01a1i b\u1ea1n s\u1ebd x\xe2y d\u1ef1ng transfer log c\u1ee7a m\xecnh. B\u1ea5t k\u1ef3 khi n\xe0o m\u1ed9t NFT \u0111\u01b0\u1ee3c transfer, function n\xe0y s\u1ebd \u0111\u01b0\u1ee3c call v\xe0 v\xec th\u1ebf b\u1ea1n s\u1ebd log c\xe1c transfer m\u1ed9t c\xe1ch ch\xednh x\xe1c."]}),(0,r.jsx)(c.Ey,{language:"rust",start:"140",end:"239",url:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/internal.rs"}),(0,r.jsxs)(e.p,{children:["Th\u1eadt kh\xf4ng may, c\xf3 m\u1ed9t tr\u01b0\u1eddng h\u1ee3p s\u1ebd l\xe0m h\u1ecfng m\u1ecdi th\u1ee9 v\u1edbi gi\u1ea3i ph\xe1p n\xe0y. N\u1ebfu m\u1ed9t NFT \u0111\u01b0\u1ee3c transfer th\xf4ng qua function ",(0,r.jsx)(e.code,{children:"nft_transfer_call"}),", c\xf3 kh\u1ea3 n\u0103ng qu\xe1 tr\xecnh transfer s\u1ebd b\u1ecb revert n\u1ebfu ",(0,r.jsx)(e.code,{children:"nft_on_transfer"})," function tr\u1ea3 v\u1ec1 ",(0,r.jsx)(e.code,{children:"true"}),". Xem x\xe9t logic c\u1ee7a ",(0,r.jsx)(e.code,{children:"nft_transfer_call"}),", b\u1ea1n s\u1ebd th\u1ea5y t\u1ea1i sao \u0111\xe2y l\xe0 m\u1ed9t v\u1ea5n \u0111\u1ec1."]}),(0,r.jsxs)(e.p,{children:["Khi ",(0,r.jsx)(e.code,{children:"nft_transfer_call"})," \u0111\u01b0\u1ee3c g\u1ecdi, n\xf3 s\u1ebd:"]}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["G\u1ecdi ",(0,r.jsx)(e.code,{children:"internal_transfer"})," \u0111\u1ec3 ti\u1ebfn h\xe0nh logic transfer th\u1ef1c t\u1ebf."]}),"\n",(0,r.jsxs)(e.li,{children:["Kh\u1edfi t\u1ea1o m\u1ed9t cross-contract call v\xe0 g\u1ecdi function ",(0,r.jsx)(e.code,{children:"nft_on_transfer"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["Gi\u1ea3i quy\u1ebft promise v\xe0 th\u1ef1c hi\u1ec7n logic trong ",(0,r.jsx)(e.code,{children:"nft_resolve_transfer"}),".","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"N\u1ebfu n\xf3 tr\u1ea3 v\u1ec1 true ngh\u0129a l\xe0 qu\xe1 tr\xecnh transfer \u0111\xe3 di\u1ec5n ra t\u1ed1t \u0111\u1eb9p c\xf2n tr\u1ea3 v\u1ec1 false th\xec qu\xe1 tr\xecnh transfer s\u1ebd \u0111\u01b0\u1ee3c revert."}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsxs)(e.p,{children:["N\u1ebfu b\u1ea1n ch\u1ec9 \u0111\u1eb7t log v\xe0o function ",(0,r.jsx)(e.code,{children:"internal_transfer"}),", log s\u1ebd \u0111\u01b0\u1ee3c ph\xe1t ra v\xe0 indexer s\u1ebd ngh\u0129 r\u1eb1ng NFT \u0111\xe3 \u0111\u01b0\u1ee3c transfer. Tuy nhi\xean, n\u1ebfu qu\xe1 tr\xecnh transfer b\u1ecb revert trong ",(0,r.jsx)(e.code,{children:"nft_resolve_transfer"}),", th\xec event \u0111\xf3 ",(0,r.jsx)(e.strong,{children:"c\u0169ng"})," s\u1ebd \u0111\u01b0\u1ee3c ph\xe1t ra. B\u1ea5t c\u1ee9 n\u01a1i n\xe0o m\xe0 m\u1ed9t NFT ",(0,r.jsx)(e.strong,{children:"c\xf3 th\u1ec3"})," \u0111\u01b0\u1ee3c transfer, ch\xfang ta n\xean ghi v\xe0o log. Thay th\u1ebf ",(0,r.jsx)(e.code,{children:"nft_resolve_transfer"})," v\u1edbi \u0111o\u1ea1n code d\u01b0\u1edbi \u0111\xe2y."]}),(0,r.jsx)(c.Ey,{language:"rust",start:"182",end:"279",url:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/nft_core.rs"}),(0,r.jsxs)(e.p,{children:["Ngo\xe0i ra, b\u1ea1n c\u1ea7n th\xeam ",(0,r.jsx)(e.code,{children:"authorized_id"})," v\xe0 ",(0,r.jsx)(e.code,{children:"memo"})," v\xe0o c\xe1c tham s\u1ed1 cho ",(0,r.jsx)(e.code,{children:"nft_resolve_transfer"})," nh\u01b0 d\u01b0\u1edbi \u0111\xe2y."]}),(0,r.jsx)(c.Ey,{language:"rust",start:"47",end:"66",url:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/nft_core.rs"}),(0,r.jsxs)(e.p,{children:["The last step is to modify the ",(0,r.jsx)(e.code,{children:"nft_transfer_call"})," logic to include these new parameters:"]}),(0,r.jsx)(c.Ey,{language:"rust",start:"102",end:"159",url:"https://github.com/near-examples/nft-tutorial/blob/7.events/nft-contract/src/nft_core.rs"}),(0,r.jsx)(e.p,{children:"V\u1edbi vi\u1ec7c ho\xe0n th\xe0nh \u0111i\u1ec1u \u0111\xf3, b\u1ea1n \u0111\xe3 tri\u1ec3n khai th\xe0nh c\xf4ng ti\xeau chu\u1ea9n c\xe1c event v\xe0 b\xe2y gi\u1edd l\xe0 l\xfac \u0111\u1ec3 b\u1eaft \u0111\u1ea7u qu\xe1 tr\xecnh test."}),(0,r.jsx)(e.h2,{id:"redeploying-contract",children:"Deploy contract"}),(0,r.jsx)(e.p,{children:"For the purpose of readability and ease of development, instead of redeploying the contract to the same account, let's create an account and deploy to that instead. B\u1ea1n c\xf3 th\u1ec3 deploy c\xf9ng account v\xec kh\xf4ng c\xf3 thay \u0111\u1ed5i n\xe0o b\u1ea1n \u0111\xe3 tri\u1ec3n khai trong h\u01b0\u1edbng d\u1eabn n\xe0y g\xe2y ra l\u1ed7i."}),(0,r.jsx)(e.h3,{id:"deployment",children:"Deployment"}),(0,r.jsx)(e.p,{children:"Next, you'll deploy this contract to the network."}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"export EVENTS_NFT_CONTRACT_ID=<accountId>\nnear create-account $EVENTS_NFT_CONTRACT_ID --useFaucet\n"})}),(0,r.jsx)(e.p,{children:"S\u1eed d\u1ee5ng build script, deploy contract nh\u01b0 b\u1ea1n \u0111\xe3 l\xe0m \u1edf c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc:"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"yarn build && near deploy $EVENTS_NFT_CONTRACT_ID out/main.wasm\n"})}),(0,r.jsx)(e.h3,{id:"initialization-and-minting",children:"Kh\u1edfi t\u1ea1o v\xe0 mint"}),(0,r.jsx)(e.p,{children:"V\xec \u0111\xe2y l\xe0 m\u1ed9t contract m\u1edbi, b\u1ea1n s\u1ebd c\u1ea7n ph\u1ea3i kh\u1edfi t\u1ea1o v\xe0 mint m\u1ed9t token. S\u1eed d\u1ee5ng command d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 kh\u1edfi t\u1ea1o contract:"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"near call $EVENTS_NFT_CONTRACT_ID new_default_meta '{\"owner_id\": \"'$EVENTS_NFT_CONTRACT_ID'\"}' --accountId $EVENTS_NFT_CONTRACT_ID\n"})}),(0,r.jsxs)(e.p,{children:["Ti\u1ebfp theo, b\u1ea1n s\u1ebd c\u1ea7n mint m\u1ed9t token. B\u1eb1ng c\xe1ch ch\u1ea1y command n\xe0y, b\u1ea1n s\u1ebd mint m\u1ed9t token v\u1edbi token ID ",(0,r.jsx)(e.code,{children:'"events-token"'})," v\xe0 ng\u01b0\u1eddi nh\u1eadn s\u1ebd l\xe0 account m\u1edbi c\u1ee7a b\u1ea1n. Ngo\xe0i ra, b\u1ea1n \u0111ang truy\u1ec1n v\xe0o m\u1ed9t map v\u1edbi hai account s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c perpetual royalty b\u1ea5t c\u1ee9 khi n\xe0o token c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c b\xe1n."]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'near call $EVENTS_NFT_CONTRACT_ID nft_mint \'{"token_id": "events-token", "metadata": {"title": "Events Token", "description": "testing out the new events extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$EVENTS_NFT_CONTRACT_ID\'"}\' --accountId $EVENTS_NFT_CONTRACT_ID --amount 0.1\n'})}),(0,r.jsx)(e.p,{children:"B\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m tra xem m\u1ecdi th\u1ee9 c\xf3 di\u1ec5n ra \u0111\xfang kh\xf4ng b\u1eb1ng c\xe1ch xem output trong CLI c\u1ee7a m\xecnh:"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'Doing account.functionCall()\nReceipts: F4oxNfv54cqwUwLUJ7h74H1iE66Y3H7QDfZMmGENwSxd, BJxKNFRuLDdbhbGeLA3UBSbL8UicU7oqHsWGink5WX7S\n    Log [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_mint","data":[{"owner_id":"events.goteam.examples.testnet","token_ids":["events-token"]}]}\nTransaction Id 4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/4Wy2KQVTuAWQHw5jXcRAbrz7bNyZBoiPEvLcGougciyk\n\'\'\n'})}),(0,r.jsx)(e.p,{children:"B\u1ea1n c\xf3 th\u1ec3 th\u1ea5y r\u1eb1ng event \u0111\xe3 \u0111\u01b0\u1ee3c log m\u1ed9t c\xe1ch ch\xednh x\xe1c!"}),(0,r.jsx)(e.h3,{id:"transferring",children:"Transfer"}),(0,r.jsxs)(e.p,{children:["B\xe2y gi\u1edd b\u1ea1n c\xf3 th\u1ec3 test xem transfer log c\u1ee7a m\xecnh c\xf3 ho\u1ea1t \u0111\u1ed9ng nh\u01b0 mong \u0111\u1ee3i hay kh\xf4ng b\u1eb1ng c\xe1ch g\u1eedi NFT cho ",(0,r.jsx)(e.code,{children:"benjiman.testnet"}),"."]}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'near call $EVENTS_NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "events-token", "memo": "Go Team :)", "approval_id": 0}\' --accountId $EVENTS_NFT_CONTRACT_ID --depositYocto 1\n'})}),(0,r.jsx)(e.p,{children:"N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t output trong gi\u1ed1ng nh\u01b0 sau:"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'Doing account.functionCall()\nReceipts: EoqBxrpv9Dgb8KqK4FdeREawVVLWepEUR15KPNuZ4fGD, HZ4xQpbgc8EfU3PiV72LvfXb2f3dVC1n9aVTbQds9zfR\n    Log [events.goteam.examples.testnet]: Memo: Go Team :)\n    Log [events.goteam.examples.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_transfer","data":[{"authorized_id":"events.goteam.examples.testnet","old_owner_id":"events.goteam.examples.testnet","new_owner_id":"benjiman.testnet","token_ids":["events-token"],"memo":"Go Team :)"}]}\nTransaction Id 4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/4S1VrepKzA6HxvPj3cK12vaT7Dt4vxJRWESA1ym1xdvH\n\'\'\n'})}),(0,r.jsx)(e.p,{children:"Ch\xfac m\u1eebng! T\u1ea1i th\u1eddi \u0111i\u1ec3m n\xe0y, NFT contract c\u1ee7a b\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh \u0111\u1ea7y \u0111\u1ee7 v\xe0 c\xe1c ti\xeau chu\u1ea9n event \u0111\xe3 \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n."}),(0,r.jsx)(e.h2,{id:"t\u1ed5ng-k\u1ebft",children:"T\u1ed5ng k\u1ebft"}),(0,r.jsxs)(e.p,{children:["Today you went through the ",(0,r.jsx)(e.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events standard"})," and implemented the necessary logic in your smart contract. B\u1ea1n \u0111\xe3 t\u1ea1o c\xe1c event cho vi\u1ec7c ",(0,r.jsx)(e.a,{href:"#logging-minted-tokens",children:"mint"})," v\xe0 ",(0,r.jsx)(e.a,{href:"#logging-transfers",children:"transfer"})," c\xe1c NFT. Sau \u0111\xf3 b\u1ea1n \u0111\xe3 deploy v\xe0 ",(0,r.jsx)(e.a,{href:"#initialization-and-minting",children:"test"})," nh\u1eefng thay \u0111\u1ed5i c\u1ee7a m\xecnh b\u1eb1ng c\xe1ch mint v\xe0 transfer c\xe1c NFT."]}),(0,r.jsx)(e.p,{children:"Trong h\u01b0\u1edbng d\u1eabn ti\u1ebfp theo, b\u1ea1n s\u1ebd xem nh\u1eefng th\u1ee9 c\u01a1 b\u1ea3n c\u1ee7a m\u1ed9t marketplace contract v\xe0 c\xe1ch n\xf3 \u0111\u01b0\u1ee3c x\xe2y d\u1ef1ng."}),(0,r.jsxs)(e.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(e.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["near-cli: ",(0,r.jsx)(e.code,{children:"4.0.4"})]}),"\n",(0,r.jsxs)(e.li,{children:["NFT standard: ",(0,r.jsx)(e.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(e.code,{children:"1.1.0"})]}),"\n",(0,r.jsxs)(e.li,{children:["Events standard: ",(0,r.jsx)(e.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NEP297 extension"}),", version ",(0,r.jsx)(e.code,{children:"1.1.0"})]}),"\n"]})]})]})]})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},85162:(n,e,t)=>{t.d(e,{Z:()=>a});t(67294);var r=t(36905);const i={tabItem:"tabItem_Ymn6"};var c=t(85893);function a(n){var e=n.children,t=n.hidden,a=n.className;return(0,c.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:t,children:e})}},74866:(n,e,t)=>{t.d(e,{Z:()=>T});var r=t(67294),i=t(36905),c=t(12466),a=t(16550),s=t(20469),o=t(91980),l=t(67392),h=t(50012);function d(n){var e,t;return null!=(e=null==(t=r.Children.toArray(n).filter((function(n){return"\n"!==n})).map((function(n){if(!n||(0,r.isValidElement)(n)&&((e=n.props)&&"object"==typeof e&&"value"in e))return n;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?e:[]}function u(n){var e=n.values,t=n.children;return(0,r.useMemo)((function(){var n=null!=e?e:function(n){return d(n).map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}(t);return function(n){var e=(0,l.l)(n,(function(n,e){return n.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,t])}function g(n){var e=n.value;return n.tabValues.some((function(n){return n.value===e}))}function m(n){var e=n.queryString,t=void 0!==e&&e,i=n.groupId,c=(0,a.k6)(),s=function(n){var e=n.queryString,t=void 0!==e&&e,r=n.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:i});return[(0,o._X)(s),(0,r.useCallback)((function(n){if(s){var e=new URLSearchParams(c.location.search);e.set(s,n),c.replace(Object.assign({},c.location,{search:e.toString()}))}}),[s,c])]}function v(n){var e,t,i,c,a=n.defaultValue,o=n.queryString,l=void 0!==o&&o,d=n.groupId,v=u(n),f=(0,r.useState)((function(){return function(n){var e,t=n.defaultValue,r=n.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(e=r.find((function(n){return n.default})))?e:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:a,tabValues:v})})),p=f[0],x=f[1],b=m({queryString:l,groupId:d}),j=b[0],y=b[1],T=(e=function(n){return n?"docusaurus.tab."+n:null}({groupId:d}.groupId),t=(0,h.Nk)(e),i=t[0],c=t[1],[i,(0,r.useCallback)((function(n){e&&c.set(n)}),[e,c])]),_=T[0],k=T[1],N=function(){var n=null!=j?j:_;return g({value:n,tabValues:v})?n:null}();return(0,s.Z)((function(){N&&x(N)}),[N]),{selectedValue:p,selectValue:(0,r.useCallback)((function(n){if(!g({value:n,tabValues:v}))throw new Error("Can't select invalid tab value="+n);x(n),y(n),k(n)}),[y,k,v]),tabValues:v}}var f=t(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function b(n){var e=n.className,t=n.block,r=n.selectedValue,a=n.selectValue,s=n.tabValues,o=[],l=(0,c.o5)().blockElementScrollPositionUntilNextRender,h=function(n){var e=n.currentTarget,t=o.indexOf(e),i=s[t].value;i!==r&&(l(e),a(i))},d=function(n){var e,t=null;switch(n.key){case"Enter":h(n);break;case"ArrowRight":var r,i=o.indexOf(n.currentTarget)+1;t=null!=(r=o[i])?r:o[0];break;case"ArrowLeft":var c,a=o.indexOf(n.currentTarget)-1;t=null!=(c=o[a])?c:o[o.length-1]}null==(e=t)||e.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e),children:s.map((function(n){var e=n.value,t=n.label,c=n.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:function(n){return o.push(n)},onKeyDown:d,onClick:h},c,{className:(0,i.Z)("tabs__item",p.tabItem,null==c?void 0:c.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e)}))})}function j(n){var e=n.lazy,t=n.children,i=n.selectedValue,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){var a=c.find((function(n){return n.props.value===i}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:c.map((function(n,e){return(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==i})}))})}function y(n){var e=v(n);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",p.tabList),children:[(0,x.jsx)(b,Object.assign({},n,e)),(0,x.jsx)(j,Object.assign({},n,e))]})}function T(n){var e=(0,f.Z)();return(0,x.jsx)(y,Object.assign({},n,{children:d(n.children)}),String(e))}},77229:(n,e,t)=>{t.d(e,{Ey:()=>h,O2:()=>o,SQ:()=>l});t(67294);var r=t(74866),i=t(85162),c=t(95665),a=t.n(c),s=t(85893);function o(n){var e=n.children;return Array.isArray(e)||(e=[e]),(0,s.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:e.map((function(n,e){return(0,s.jsx)(i.Z,{value:n.props.value,label:n.props.value,children:n})}))})}function l(n){var e=n.children,t=n.language;return Array.isArray(e)||(e=[e]),e=e.map((function(n){return function(n,e){var t=n.props,r=(t.children,t.url),i=t.start,c=t.end,a=t.fname;if(n.type===h)return h({url:r,start:i,end:c,language:e,fname:a});return n}(n,t)})),1==e.length?(0,s.jsx)(i.Z,{value:0,label:e[0].props.fname,children:e[0]}):(0,s.jsx)(r.Z,{className:"file-tabs",children:e.map((function(n,e){return(0,s.jsx)(i.Z,{value:e,label:n.props.fname,children:n})}))})}function h(n){var e=n.url,t=n.start,r=n.end,i=n.language,c=n.fname,o=e+"#";return t&&r&&(o+="L"+t+"-L"+r+"#"),(0,s.jsx)(a(),{language:i,fname:c,children:o})}}}]);