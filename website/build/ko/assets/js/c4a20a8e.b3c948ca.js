"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4687],{20973:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(85893),r=i(11151);const s={id:"indexers",title:"QueryAPI Indexing Example",sidebar_label:"Getting Started"},o=void 0,c={id:"bos/community/indexers",title:"QueryAPI Indexing Example",description:"QueryAPI\ub97c \ud1b5\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc790\uc2e0\ub9cc\uc758 \uc778\ub371\uc11c\ub97c \ube60\ub974\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/community/indexers.md",sourceDirName:"bos/community",slug:"/bos/community/indexers",permalink:"/ko/bos/community/indexers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/community/indexers.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",frontMatter:{id:"indexers",title:"QueryAPI Indexing Example",sidebar_label:"Getting Started"},sidebar:"build",previous:{title:"How it works",permalink:"/ko/bos/queryapi/how-it-works"},next:{title:"Best Practices",permalink:"/ko/bos/queryapi/best-practices"}},a={},d=[{value:"How it Works",id:"how-it-works",level:2},{value:"Creating an Indexer",id:"creating-an-indexer",level:2},{value:"Design Workflow",id:"design-workflow",level:3},{value:"<code>IndexingLogic.js</code>",id:"indexinglogicjs",level:3},{value:"<code>schema.sql</code>",id:"schemasql",level:3},{value:"<code>GraphiQL</code>",id:"graphiql",level:3},{value:"Publishing",id:"publishing",level:3},{value:"Start Block Options",id:"start-block-options",level:4},{value:"Performing Queries on the Public GraphQL API",id:"performing-queries-on-the-public-graphql-api",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"QueryAPI\ub97c \ud1b5\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \ubc29\uc2dd\uc73c\ub85c \uc790\uc2e0\ub9cc\uc758 \uc778\ub371\uc11c\ub97c \ube60\ub974\uac8c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ucee4\uc2a4\ud140 \uc778\ub371\uc11c \ud568\uc218\ub97c \uc791\uc131\ud558\uae30;"}),"\n",(0,t.jsx)(n.li,{children:"\ucee4\uc2a4\ud140 \ud638\uc2a4\ud305 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ub300\ud55c \uc2a4\ud0a4\ub9c8\ub97c \uc9c0\uc815\ud558\uace0 \uc778\ub371\uc11c \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc4f0\uae30;"}),"\n",(0,t.jsx)(n.li,{children:"GraphQL API\ub97c \ud1b5\ud574 \ub370\uc774\ud130 \ubc18\ud658\ud558\uae30;"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can watch a complete video walkthrough of Query API ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58",children:"following this link"}),"."]})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers."}),(0,t.jsxs)(n.p,{children:["You can request access through ",(0,t.jsx)(n.a,{href:"http://bit.ly/near-queryapi-beta",children:"this link"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,t.jsx)(n.p,{children:"QueryAPI works by:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\uc778\ub371\uc11c \uc774\ub984\uc744 \ube14\ub85d\uccb4\uc778\uc5d0 \uc4f0\uace0, \uc0dd\uc131\uc744 \ub4f1\ub85d\ud569\ub2c8\ub2e4;"}),"\n",(0,t.jsx)(n.li,{children:"GraphQL \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc2a4\ud0a4\ub9c8\uc5d0 \uc9c0\uc815\ub41c \ub300\ub85c \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud558\uace0, GraphQL \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ub178\ucd9c\uc2dc\ucf1c \ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud569\ub2c8\ub2e4;"}),"\n",(0,t.jsx)(n.li,{children:"\uc778\ub371\uc11c \ud568\uc218\ub97c \uc2e4\ud589\ud558\ub294 \ud074\ub77c\uc6b0\ub4dc \ud504\ub85c\uc138\uc2a4\ub97c \ub3cc\ub824, GraphQL \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc501\ub2c8\ub2e4;"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App",children:"\uc774 \ub9c1\ud06c\ub97c \ud1b5\ud574 NEAR QueryAPI"}),"\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uadf8\ub7ec\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \ub300\uc2dc\ubcf4\ub4dc\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"QueryAPI \ub300\uc2dc\ubcf4\ub4dc",src:i(82165).Z+"",width:"1178",height:"664"})}),"\n",(0,t.jsx)(n.admonition,{title:"Video Walkthrough",type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tip:"})," Watch the ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=109s",children:"QueryAPI widget introduction"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"creating-an-indexer",children:"Creating an Indexer"}),"\n",(0,t.jsx)(n.p,{children:'"Create New Indexer"\ub97c \ud074\ub9ad\ud558\uba74 \ube0c\ub77c\uc6b0\uc800\uac00 \ub2e4\uc74c\uacfc \uac19\uc740 \ucef4\ud3ec\ub10c\ud2b8 \ucf54\ub4dc \uc5d0\ub514\ud130\ub85c \ub9ac\ub514\ub809\uc158\ub429\ub2c8\ub2e4:'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"QueryAPI \uc778\ub371\uc11c \ub300\uc2dc\ubcf4\ub4dc",src:i(6419).Z+"",width:"1166",height:"660"})}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \uc0c8 \uc778\ub371\uc11c\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c \ub2e4\uc74c\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"indexingLogic.js"}),"\uc758 \ud544\ud130\ub9c1, \ubcc0\ud658 \ub85c\uc9c1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"schema.graphql"})," \ub0b4 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2a4\ud0a4\ub9c8"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GraphiQL"})," \ub0b4 GraphQL \ucffc\ub9ac"]}),"\n",(0,t.jsx)(n.li,{children:"Indexer Name\uc5d0 \uc788\ub294 \uc778\ub371\uc11c \uc774\ub984"}),"\n",(0,t.jsx)(n.li,{children:"from which block to start indexing"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"design-workflow",children:"Design Workflow"}),"\n",(0,t.jsx)(n.p,{children:"To design and create your indexer, you can follow this recommended workflow:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.a,{href:"https://nearblocks.io",children:"nearblocks.io"}),", find transactions to smart contracts that you want to index"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Take the block ",(0,t.jsx)(n.code,{children:"height"})," and put it into the ",(0,t.jsx)(n.a,{href:"/ko/bos/queryapi/index-functions#local-debug-mode",children:"Debug Mode filter"}),", open your browser's ",(0,t.jsx)(n.em,{children:"Developer Console"}),", and hit ",(0,t.jsx)("kbd",{children:"Play"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Inspect the block and write JavaScript code using ",(0,t.jsx)(n.a,{href:"/ko/develop/lake/primitives",children:"NEAR Lake Primitives"})," to extract data from a ",(0,t.jsx)(n.code,{children:"block"})," object. (This JS code will be your ",(0,t.jsx)(n.a,{href:"#indexinglogicjs",children:(0,t.jsx)(n.code,{children:"IndexingLogic.js"})}),")"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tip:"})," Use ",(0,t.jsx)(n.code,{children:"context.log"})," for debugging to ensure you are getting the right results"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add more blocks for debugging, or start following the blockchain to see how new blocks are handled"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create tables that you need to store the data using Postgres ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/sql-createtable.html",children:"CREATE table syntax"}),". (This SQL code will be your ",(0,t.jsx)(n.a,{href:"#schemasql",children:(0,t.jsx)(n.code,{children:"schema.sql"})}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Video Walkthrough",type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tip:"})," Watch the ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=411s",children:"introduction to indexing functions"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"indexinglogicjs",children:(0,t.jsx)(n.code,{children:"IndexingLogic.js"})}),"\n",(0,t.jsx)(n.p,{children:"\uc778\ub371\uc11c \ucf54\ub4dc \uc5d0\ub514\ud130\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ud15c\ud50c\ub9bf\uc73c\ub85c \ubbf8\ub9ac \ucc44\uc6cc\uc9d1\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { Block } from "@near-lake/primitives";\n/**\n * Note: We only support javascript at the moment. We will support Rust, Typescript in a further release.\n */\n\n/**\n * getBlock(block, context) applies your custom logic to a Block on Near and commits the data to a database.\n *\n * Learn more about indexers here:  https://docs.near.org/concepts/advanced/indexers\n *\n * @param {block} Block - A Near Protocol Block\n * @param {context} - A set of helper methods to retrieve and commit state\n */\nasync function getBlock(block: Block, context) {\n  // Add your code here\n  const h = block.header().height;\n  await context.set("height", h);\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \ucf54\ub4dc\ub97c \ud1b5\ud574 \uc5d0\ub514\ud130\ub294 \uc120\ud0dd\ub41c ",(0,t.jsx)(n.code,{children:"indexingLogic.js"})," \ud30c\uc77c\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4. \ud2b9\ud788 \uc774 \ub85c\uc9c1\uc740 \uc0ac\uc6a9\uc790\uac00 \uc9c0\uc815\ud55c \ub370\uc774\ud130\ub97c ",(0,t.jsx)(n.code,{children:"schema.sql"}),"\uc5d0 \uc815\uc758\ud55c GraphQL \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub85c \ubcc0\ud658\ud558\uace0 \uc800\uc7a5\ud558\ub294 \ube14\ub85d\uccb4\uc778 \ud2b8\ub79c\uc7ad\uc158\uc758 \ud544\ud130\ub9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.admonition,{title:"Saving data",type:"info",children:[(0,t.jsxs)(n.p,{children:["\uc778\ub371\uc11c\uc5d0\uc11c \ucea1\ucc98\ud55c \ub370\uc774\ud130\ub97c GraphQL \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uc815\uc758\ub41c \ud14c\uc774\ube14\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. You can do this easily by using the ",(0,t.jsx)(n.a,{href:"/ko/bos/queryapi/context-object#db",children:(0,t.jsx)(n.code,{children:"context.db"})})," object ",(0,t.jsx)(n.a,{href:"/ko/bos/queryapi/context-object#insert",children:(0,t.jsx)(n.code,{children:"insert"})})," method.   \uc608\ub97c \ub4e4\uc5b4, ",(0,t.jsx)(n.code,{children:"id"}),", ",(0,t.jsx)(n.code,{children:"sender"}),", ",(0,t.jsx)(n.code,{children:"receiver"}),", ",(0,t.jsx)(n.code,{children:"receiver"}),", ",(0,t.jsx)(n.code,{children:"amount"}),", ",(0,t.jsx)(n.code,{children:"block_height"}),"\uc758 \uc5f4\uc774 \uc788\ub294 ",(0,t.jsx)(n.code,{children:"transactions"}),"\ub77c\ub294 \ud14c\uc774\ube14\uc774 \uc788\ub294 \uacbd\uc6b0 \ud14c\uc774\ube14\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc0c8 \uc694\uc18c \ud558\ub098\uc5d0 \ub300\ud55c \ubcc0\ud658 \ucffc\ub9ac\ub97c \uc0bd\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const tx = {\n    block_height: h,\n    sender: "senderId",\n    receiver: "receiverId",\n    amount: 100,\n};\n\nawait context.db.Transactions.insert(tx);\n'})})]}),"\n",(0,t.jsxs)(n.admonition,{title:"Using GraphQL mutations",type:"info",children:[(0,t.jsxs)(n.p,{children:["You can also insert elements using GraphQL mutation queries in your ",(0,t.jsx)(n.code,{children:"indexingLogic.js"})," file:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"await context.graphql(`\n  mutation MyMutation($transaction: some_table_insert_input!) {\n    insert_<ACCOUNT_NAME>_near_transactions_one(\n      object: $transaction\n    ) {\n      affected_rows\n    }\n  }\n`);\n"})}),(0,t.jsx)(n.p,{children:"Creating GraphQL queries within strings can be difficult, especially considering that the table names vary depending on your indexer name and account ID. GraphQL Playground \uc0ac\uc774\ud2b8\ub97c \ubc29\ubb38\ud558\uc5ec \ucffc\ub9ac\ub97c \ub9cc\ub4dc\ub294 \uac83\uc774 \ub354 \uc26c\uc6b4 \ubc29\ubc95\uc785\ub2c8\ub2e4."}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tip:"})," watch the video on how to ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=1207s",children:"create queries in Playground"}),"."]}),"\n"]})]}),"\n",(0,t.jsx)(n.h3,{id:"schemasql",children:(0,t.jsx)(n.code,{children:"schema.sql"})}),"\n",(0,t.jsx)(n.p,{children:"\uc5d0\ub514\ud130\uc758 \uc774 \ud0ed\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \ud15c\ud50c\ub9bf\uc73c\ub85c \ubbf8\ub9ac \ucc44\uc6cc\uc9d1\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE "indexer_storage" (\n  "function_name" TEXT NOT NULL,\n  "key_name" TEXT NOT NULL,\n  "value" TEXT NOT NULL,\n  PRIMARY KEY ("function_name", "key_name")\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\ub294 ",(0,t.jsx)(n.code,{children:"indexingLogic.js"}),"\uc5d0\uc11c \uc9c0\uc815\ud55c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc2a4\ud0a4\ub9c8\uc785\ub2c8\ub2e4. \uc801\ud569\ud558\ub2e4\uace0 \ud310\ub2e8\ub418\ub294 \ub300\ub85c \uc774 \uc2a4\ud0a4\ub9c8\uc5d0 \ud14c\uc774\ube14\uacfc \uc5f4\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc778\ub371\uc11c\ub97c \uc791\uc131\ud558\ub294 \uc989\uc2dc \uc0dd\uc131\ub420 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["Creating this default table will allow you to use the ",(0,t.jsx)(n.a,{href:"/ko/bos/queryapi/context-object#set",children:(0,t.jsx)(n.code,{children:"context.set"})})," helper method to write data. It takes two arguments: a key argument that accepts a string and a value argument,  which will be written to the ",(0,t.jsx)(n.code,{children:"key_name"})," and ",(0,t.jsx)(n.code,{children:"value"})," columns."]}),"\n",(0,t.jsx)(n.admonition,{title:"Note on schema migration",type:"caution",children:(0,t.jsxs)(n.p,{children:["You are able to update ",(0,t.jsx)(n.code,{children:"indexingLogic.js"})," after you have registered/created your indexer, but you are only allowed to specify ",(0,t.jsx)(n.code,{children:"schema.sql"})," once before you submit your indexer. \uc2a4\ud0a4\ub9c8\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub824\uba74 \uc0c8 \uc778\ub371\uc11c\ub97c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(n.h3,{id:"graphiql",children:(0,t.jsx)(n.code,{children:"GraphiQL"})}),"\n",(0,t.jsx)(n.p,{children:"\uc5d0\ub514\ud130\uc758 GraphiQL \ud0ed\uc744 \uc0ac\uc6a9\ud558\uba74 GraphQL \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc5d0\uc11c \ubc18\ud658\ub41c \ub370\uc774\ud130\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc778\ub371\uc11c\ub97c \uc791\uc131\ud55c \ud6c4 \ud655\uc778\ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.admonition,{title:"Video Walkthrough",type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tip:"})," Watch how to ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=781s",children:"create mutations in GraphQL"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"publishing",children:"Publishing"}),"\n",(0,t.jsxs)(n.p,{children:["Clicking the ",(0,t.jsx)("kbd",{children:"Publish"})," button will open the following pop-up. From here, you can configure the Indexer name, start block, and contract filter."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Publishing QueryAPI Indexer",src:i(43901).Z+"",width:"1140",height:"998"})}),"\n",(0,t.jsx)(n.h4,{id:"start-block-options",children:"Start Block Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Start from latest block"}),": Start indexing from the tip of the network. The exact block height is not guaranteed. Useful for testing indexing for events happening in real-time."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Continue from last processed block"}),": Update the configuration of the Indexer, and resume indexing from the last processed block. The block at which the configuration is updated is not guaranteed. Useful for fixing bugs encountered on specific blocks, adding additional logs, etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Start from block height"}),": Start indexing from the height specified, i.e., when the contract was deployed, or when a specific event occurs."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Continue from last processed block"})," is only available for existing indexers. Updating the contract filter is disabled for this option, as it will create a backlog of blocks for two different contracts."]})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Start from latest block"})," and ",(0,t.jsx)(n.code,{children:"Start from block height"})," supersede the existing process. All queued blocks at the time of update will be cleared."]})}),"\n",(0,t.jsx)(n.h2,{id:"performing-queries-on-the-public-graphql-api",children:"Performing Queries on the Public GraphQL API"}),"\n",(0,t.jsx)(n.p,{children:"In this section, we will provide a brief overview of how to query from a component in NEAR."}),"\n",(0,t.jsxs)(n.p,{children:["GraphQL API\uc5d0\uc11c \uac00\uc838\uc62c \uc218 \uc788\ub294 \ud5ec\ud37c \uba54\uc18c\ub4dc\ub97c \ub9cc\ub4dc\ub294 \uac83\uc774 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub97c ",(0,t.jsx)(n.code,{children:"fetchGraphQL"}),"\uc774\ub77c\uace0 \ud569\uc2dc\ub2e4. \uc774\ub294 \uc138 \uac00\uc9c0 \ub9e4\uac1c\ubcc0\uc218\ub97c \ubc1b\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queryDoc"}),": \uc2e4\ud589\ud560 \ucffc\ub9ac\uac00 \ub4e4\uc5b4 \uc788\ub294 \ubb38\uc790\uc5f4\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queryName"}),": \uc2e4\ud589\ud560 \ud2b9\uc815 \ucffc\ub9ac\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filename"}),": \ud398\uc774\uc9c0 \ubc88\ud638\uc5d0 \ub300\ud55c ",(0,t.jsx)(n.code,{children:"offset"})," \ubc0f ",(0,t.jsx)(n.code,{children:"limit"}),"\uc640 \uac19\uc774 \ucffc\ub9ac\uac00 \uc9c0\uc6d0\ud558\ub294 \uc804\ub2ec\ud560 \ubcc0\uc218\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'function fetchGraphQL(queriesDoc, queryName, variables) {\n  return asyncFetch(\n    QUERY_API_ENDPOINT,\n    {\n      method: "POST",\n      headers: { "x-hasura-role": `<your_account_name>_near` },\n      body: JSON.stringify({\n        queries: queriesDoc,\n        variables: variables,\n        operationName: queryName,\n      }),\n    }\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"fetchGraphQL"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \uba3c\uc800 \uc6d0\ud558\ub294 \ucffc\ub9ac\ub97c \ud3ec\ud568\ud558\ub294 \uc77c\ub828\uc758 \ucffc\ub9ac(\uc608: ",(0,t.jsx)(n.code,{children:"transactionQueryDoc"}),")\ub97c \uc815\uc758\ud569\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const transactionQueriesDoc = `query TransactionsQuery {\n  root_near_transactions {\n    id\n    sender\n    receiver\n    amount\n    block_height\n  }\n}\n...\nquery AnotherQuery {\n  root_near_accounts {\n    id\n  }\n}`;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ub2e4\uc74c\uc73c\ub85c ",(0,t.jsx)(n.code,{children:"fetchGraphQL"})," \ud568\uc218\ub97c \uc801\uc808\ud55c \ud30c\ub77c\ubbf8\ud130\uc640 \ud568\uaed8 \ud638\ucd9c\ud558\uc5ec \uacb0\uacfc\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uc774 \uc608\uc5d0\uc11c\ub294 \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'fetchGraphQL(transactionQueriesDoc, "TransactionsQuery", {})\n  .then((result) => {\n    if (result.status === 200) {\n      let data = result.body.data;\n      if (data) {\n        const transactions = data.root_near_transactions;\n        // Perform any necessary operations on the fetched data\n        ...\n        // Update state with the new transactions data\n        State.update({\n          transactions: transactions,\n        });\n      }\n    }\n  });\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We have just shown how to fetch data from the indexers that we have created from within NEAR. To view a more complex example, see this widget which fetches posts with proper pagination: ",(0,t.jsx)(n.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.Examples.Feed.Posts",children:"Posts Widget powered By QueryAPI"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Video Walkthrough",type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tip:"})," Watch an ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=943s",children:"end-to-end example"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43901:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/QAPIPublish-f20ca3033bea3ebbef099d1b4b41d897.png"},82165:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/QAPIScreen-f6f10f42dcef46ddf4c9e4fdb9c79eec.png"},6419:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/QAPIScreen2-95a2178fe9edc5df676ee6d3a1859942.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>o});var t=i(67294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);