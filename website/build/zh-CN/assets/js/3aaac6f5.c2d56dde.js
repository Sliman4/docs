"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2042],{2180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(85893),r=t(11151);const s={id:"indexers",title:"QueryAPI Indexing Example",sidebar_label:"Getting Started"},o=void 0,a={id:"bos/community/indexers",title:"QueryAPI Indexing Example",description:"With QueryAPI you can quickly create your own indexer by:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/bos/community/indexers.md",sourceDirName:"bos/community",slug:"/bos/community/indexers",permalink:"/zh-CN/bos/community/indexers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/community/indexers.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{id:"indexers",title:"QueryAPI Indexing Example",sidebar_label:"Getting Started"},sidebar:"build",previous:{title:"How it works",permalink:"/zh-CN/bos/queryapi/how-it-works"},next:{title:"Best Practices",permalink:"/zh-CN/bos/queryapi/best-practices"}},c={},d=[{value:"How it Works",id:"how-it-works",level:2},{value:"Creating an Indexer",id:"creating-an-indexer",level:2},{value:"Design Workflow",id:"design-workflow",level:3},{value:"<code>IndexingLogic.js</code>",id:"indexinglogicjs",level:3},{value:"<code>schema.sql</code>",id:"schemasql",level:3},{value:"<code>GraphiQL</code>",id:"graphiql",level:3},{value:"Publishing",id:"publishing",level:3},{value:"Start Block Options",id:"start-block-options",level:4},{value:"Performing Queries on the Public GraphQL API",id:"performing-queries-on-the-public-graphql-api",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"With QueryAPI you can quickly create your own indexer by:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Writing your own custom indexer function;"}),"\n",(0,i.jsx)(n.li,{children:"Specifying the schema for your own custom hosted database and write to it with your indexer function;"}),"\n",(0,i.jsx)(n.li,{children:"Retrieving that data through a GraphQL API."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can watch a complete video walkthrough of Query API ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58",children:"following this link"}),"."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers."}),(0,i.jsxs)(n.p,{children:["You can request access through ",(0,i.jsx)(n.a,{href:"http://bit.ly/near-queryapi-beta",children:"this link"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,i.jsx)(n.p,{children:"QueryAPI works by:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Writing the indexer name to the blockchain, registering its creation;"}),"\n",(0,i.jsx)(n.li,{children:"Creating the tables as specified in the schema to the GraphQL database, exposing a GraphQL endpoint to query the data;"}),"\n",(0,i.jsx)(n.li,{children:"Spinning up a cloud process that runs your indexer function, writing to the GraphQL database;"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can access the ",(0,i.jsx)(n.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App",children:"NEAR QueryAPI by following this link"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This should take you to a dashboard that looks like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"QueryAPI Dashboard",src:t(82165).Z+"",width:"1178",height:"664"})}),"\n",(0,i.jsx)(n.admonition,{title:"Video Walkthrough",type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," Watch the ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=109s",children:"QueryAPI widget introduction"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-indexer",children:"Creating an Indexer"}),"\n",(0,i.jsx)(n.p,{children:'Clicking on "Create New Indexer" will redirect you in-browser to a Component code editor that looks like this:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"QueryAPI Indexer Dashboard",src:t(6419).Z+"",width:"1166",height:"660"})}),"\n",(0,i.jsx)(n.p,{children:"This is the interface through which you can create a new Indexer. On here you can specify:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the filtering, transforming logic in ",(0,i.jsx)(n.code,{children:"indexingLogic.js"})]}),"\n",(0,i.jsxs)(n.li,{children:["the database schema in ",(0,i.jsx)(n.code,{children:"schema.sql"})]}),"\n",(0,i.jsxs)(n.li,{children:["the GraphQL queries in ",(0,i.jsx)(n.code,{children:"GraphiQL"})]}),"\n",(0,i.jsx)(n.li,{children:"the indexer name on Indexer Name"}),"\n",(0,i.jsx)(n.li,{children:"from which block to start indexing"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"design-workflow",children:"Design Workflow"}),"\n",(0,i.jsx)(n.p,{children:"To design and create your indexer, you can follow this recommended workflow:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.a,{href:"https://nearblocks.io",children:"nearblocks.io"}),", find transactions to smart contracts that you want to index"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Take the block ",(0,i.jsx)(n.code,{children:"height"})," and put it into the ",(0,i.jsx)(n.a,{href:"/zh-CN/bos/queryapi/index-functions#local-debug-mode",children:"Debug Mode filter"}),", open your browser's ",(0,i.jsx)(n.em,{children:"Developer Console"}),", and hit ",(0,i.jsx)("kbd",{children:"Play"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Inspect the block and write JavaScript code using ",(0,i.jsx)(n.a,{href:"/zh-CN/develop/lake/primitives",children:"NEAR Lake Primitives"})," to extract data from a ",(0,i.jsx)(n.code,{children:"block"})," object. (This JS code will be your ",(0,i.jsx)(n.a,{href:"#indexinglogicjs",children:(0,i.jsx)(n.code,{children:"IndexingLogic.js"})}),")"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," Use ",(0,i.jsx)(n.code,{children:"context.log"})," for debugging to ensure you are getting the right results"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add more blocks for debugging, or start following the blockchain to see how new blocks are handled"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create tables that you need to store the data using Postgres ",(0,i.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/sql-createtable.html",children:"CREATE table syntax"}),". (This SQL code will be your ",(0,i.jsx)(n.a,{href:"#schemasql",children:(0,i.jsx)(n.code,{children:"schema.sql"})}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Video Walkthrough",type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," Watch the ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=411s",children:"introduction to indexing functions"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"indexinglogicjs",children:(0,i.jsx)(n.code,{children:"IndexingLogic.js"})}),"\n",(0,i.jsx)(n.p,{children:"The indexer code editor is pre-populated with a template that looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { Block } from "@near-lake/primitives";\n/**\n * Note: We only support javascript at the moment. We will support Rust, Typescript in a further release.\n */\n\n/**\n * getBlock(block, context) applies your custom logic to a Block on Near and commits the data to a database.\n *\n * Learn more about indexers here:  https://docs.near.org/concepts/advanced/indexers\n *\n * @param {block} Block - A Near Protocol Block\n * @param {context} - A set of helper methods to retrieve and commit state\n */\nasync function getBlock(block: Block, context) {\n  // Add your code here\n  const h = block.header().height;\n  await context.set("height", h);\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This editor with this code shows the ",(0,i.jsx)(n.code,{children:"indexingLogic.js"})," file that is selected. This logic in particular will perform the filtering of blockchain transactions, transforming and saving the data you specify to a GraphQL database you define in ",(0,i.jsx)(n.code,{children:"schema.sql"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Saving data",type:"info",children:[(0,i.jsxs)(n.p,{children:["You will likely want to save the data you capture from your indexer to your defined tables in the GraphQL database. You can do this easily by using the ",(0,i.jsx)(n.a,{href:"/zh-CN/bos/queryapi/context-object#db",children:(0,i.jsx)(n.code,{children:"context.db"})})," object ",(0,i.jsx)(n.a,{href:"/zh-CN/bos/queryapi/context-object#insert",children:(0,i.jsx)(n.code,{children:"insert"})})," method.   For example, if you have a table called ",(0,i.jsx)(n.code,{children:"transactions"})," with columns ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"sender"}),", ",(0,i.jsx)(n.code,{children:"receiver"}),", ",(0,i.jsx)(n.code,{children:"amount"}),", ",(0,i.jsx)(n.code,{children:"block_height"}),", you can insert a mutation query for one new element in the table like this:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const tx = {\n    block_height: h,\n    sender: "senderId",\n    receiver: "receiverId",\n    amount: 100,\n};\n\nawait context.db.Transactions.insert(tx);\n'})})]}),"\n",(0,i.jsxs)(n.admonition,{title:"Using GraphQL mutations",type:"info",children:[(0,i.jsxs)(n.p,{children:["You can also insert elements using GraphQL mutation queries in your ",(0,i.jsx)(n.code,{children:"indexingLogic.js"})," file:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"await context.graphql(`\n  mutation MyMutation($transaction: some_table_insert_input!) {\n    insert_<ACCOUNT_NAME>_near_transactions_one(\n      object: $transaction\n    ) {\n      affected_rows\n    }\n  }\n`);\n"})}),(0,i.jsx)(n.p,{children:"Creating GraphQL queries within strings can be difficult, especially considering that the table names vary depending on your indexer name and account ID. An easier way to do this would be by visiting the GraphQL Playground site and creating the queries there."}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," watch the video on how to ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=1207s",children:"create queries in Playground"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"schemasql",children:(0,i.jsx)(n.code,{children:"schema.sql"})}),"\n",(0,i.jsx)(n.p,{children:"This tab in the editor will be pre-populated with a template that looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE "indexer_storage" (\n  "function_name" TEXT NOT NULL,\n  "key_name" TEXT NOT NULL,\n  "value" TEXT NOT NULL,\n  PRIMARY KEY ("function_name", "key_name")\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This is the database schema that will be used to store the data you specify in ",(0,i.jsx)(n.code,{children:"indexingLogic.js"}),". You can add more tables and columns to this schema as you see fit. They will be created as soon as you create the indexer."]}),"\n",(0,i.jsxs)(n.p,{children:["Creating this default table will allow you to use the ",(0,i.jsx)(n.a,{href:"/zh-CN/bos/queryapi/context-object#set",children:(0,i.jsx)(n.code,{children:"context.set"})})," helper method to write data. It takes two arguments: a key argument that accepts a string and a value argument,  which will be written to the ",(0,i.jsx)(n.code,{children:"key_name"})," and ",(0,i.jsx)(n.code,{children:"value"})," columns."]}),"\n",(0,i.jsx)(n.admonition,{title:"Note on schema migration",type:"caution",children:(0,i.jsxs)(n.p,{children:["You are able to update ",(0,i.jsx)(n.code,{children:"indexingLogic.js"})," after you have registered/created your indexer, but you are only allowed to specify ",(0,i.jsx)(n.code,{children:"schema.sql"})," once before you submit your indexer. If you want to update your schema, you will have to create a new indexer."]})}),"\n",(0,i.jsx)(n.h3,{id:"graphiql",children:(0,i.jsx)(n.code,{children:"GraphiQL"})}),"\n",(0,i.jsx)(n.p,{children:"The GraphiQL tab in the editor will allow you to view the returned data from your GraphQL endpoint. This is best verified after you have created the indexer."}),"\n",(0,i.jsx)(n.admonition,{title:"Video Walkthrough",type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," Watch how to ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=781s",children:"create mutations in GraphQL"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"publishing",children:"Publishing"}),"\n",(0,i.jsxs)(n.p,{children:["Clicking the ",(0,i.jsx)("kbd",{children:"Publish"})," button will open the following pop-up. From here, you can configure the Indexer name, start block, and contract filter."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Publishing QueryAPI Indexer",src:t(43901).Z+"",width:"1140",height:"998"})}),"\n",(0,i.jsx)(n.h4,{id:"start-block-options",children:"Start Block Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Start from latest block"}),": Start indexing from the tip of the network. The exact block height is not guaranteed. Useful for testing indexing for events happening in real-time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Continue from last processed block"}),": Update the configuration of the Indexer, and resume indexing from the last processed block. The block at which the configuration is updated is not guaranteed. Useful for fixing bugs encountered on specific blocks, adding additional logs, etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Start from block height"}),": Start indexing from the height specified, i.e., when the contract was deployed, or when a specific event occurs."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Continue from last processed block"})," is only available for existing indexers. Updating the contract filter is disabled for this option, as it will create a backlog of blocks for two different contracts."]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Start from latest block"})," and ",(0,i.jsx)(n.code,{children:"Start from block height"})," supersede the existing process. All queued blocks at the time of update will be cleared."]})}),"\n",(0,i.jsx)(n.h2,{id:"performing-queries-on-the-public-graphql-api",children:"Performing Queries on the Public GraphQL API"}),"\n",(0,i.jsx)(n.p,{children:"In this section, we will provide a brief overview of how to query from a component in NEAR."}),"\n",(0,i.jsxs)(n.p,{children:["It is helpful to create a helper method which will allow us to fetch from our GraphQL API. Let's call it",(0,i.jsx)(n.code,{children:"fetchGraphQL"}),". It takes three parameters:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"queriesDoc"}),": A string containing the queries you would like to execute."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"queryName"}),": The specific query you want to run."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"variables"}),": Any variables to pass in that your query supports, such as ",(0,i.jsx)(n.code,{children:"offset"})," and ",(0,i.jsx)(n.code,{children:"limit"})," for pagination."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function fetchGraphQL(queriesDoc, queryName, variables) {\n  return asyncFetch(\n    QUERY_API_ENDPOINT,\n    {\n      method: "POST",\n      headers: { "x-hasura-role": `<your_account_name>_near` },\n      body: JSON.stringify({\n        queries: queriesDoc,\n        variables: variables,\n        operationName: queryName,\n      }),\n    }\n  );\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To use the ",(0,i.jsx)(n.code,{children:"fetchGraphQL"})," function, first define a string of queries, e.g ",(0,i.jsx)(n.code,{children:"transactionQueriesDoc"})," containing your desired queries:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const transactionQueriesDoc = `query TransactionsQuery {\n  root_near_transactions {\n    id\n    sender\n    receiver\n    amount\n    block_height\n  }\n}\n...\nquery AnotherQuery {\n  root_near_accounts {\n    id\n  }\n}`;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, call the ",(0,i.jsx)(n.code,{children:"fetchGraphQL"})," function with the appropriate parameters and process the results. In this example, we fetch transaction data and update the application state:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'fetchGraphQL(transactionQueriesDoc, "TransactionsQuery", {})\n  .then((result) => {\n    if (result.status === 200) {\n      let data = result.body.data;\n      if (data) {\n        const transactions = data.root_near_transactions;\n        // Perform any necessary operations on the fetched data\n        ...\n        // Update state with the new transactions data\n        State.update({\n          transactions: transactions,\n        });\n      }\n    }\n  });\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We have just shown how to fetch data from the indexers that we have created from within NEAR. To view a more complex example, see this widget which fetches posts with proper pagination: ",(0,i.jsx)(n.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.Examples.Feed.Posts",children:"Posts Widget powered By QueryAPI"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Video Walkthrough",type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," Watch an ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=943s",children:"end-to-end example"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},43901:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/QAPIPublish-f20ca3033bea3ebbef099d1b4b41d897.png"},82165:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/QAPIScreen-f6f10f42dcef46ddf4c9e4fdb9c79eec.png"},6419:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/QAPIScreen2-95a2178fe9edc5df676ee6d3a1859942.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);