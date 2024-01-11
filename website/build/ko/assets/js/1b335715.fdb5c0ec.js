"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9065],{38414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(85893),o=n(11151);const a={id:"near-lake",sidebar_label:"Lake Overview",title:"NEAR Lake Indexer"},s=void 0,i={id:"tools/near-lake",title:"NEAR Lake Indexer",description:"NEAR Lake is an indexer built on top of NEAR Indexer Framework to watch the network and store all the events as JSON files on AWS S3.",source:"@site/../docs/4.tools/near-lake.md",sourceDirName:"4.tools",slug:"/tools/near-lake",permalink:"/ko/tools/near-lake",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-lake.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1693607013,formattedLastUpdatedAt:"2023\ub144 9\uc6d4 1\uc77c",frontMatter:{id:"near-lake",sidebar_label:"Lake Overview",title:"NEAR Lake Indexer"},sidebar:"indexers",previous:{title:"Indexer for Explorer (Deprecated)",permalink:"/ko/tools/indexer-for-explorer"},next:{title:"Getting started",permalink:"/ko/tutorials/indexer/near-lake-state-changes-indexer"}},d={},c=[{value:"How it works",id:"how-it-works",level:3},{value:"Data structure",id:"data-structure",level:3},{value:"How to use it",id:"how-to-use-it",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["NEAR Lake is an indexer built on top of ",(0,r.jsx)(t.a,{href:"https://near-indexers.io/docs/projects/near-indexer-framework",children:"NEAR Indexer Framework"})," to watch the network and store all the ",(0,r.jsx)(t.a,{href:"/ko/tools/realtime",children:"events"})," as JSON files on AWS S3."]}),"\n",(0,r.jsx)(t.admonition,{title:"GitHub repo",type:"info",children:(0,r.jsxs)(t.p,{children:["You can find the Lake Indexer source code in ",(0,r.jsx)(t.a,{href:"https://github.com/near/near-lake-indexer/",children:"this GitHub repository"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://pagoda.co",children:"Pagoda Inc."})," runs NEAR Lake nodes to store the data in JSON format on AWS S3.\nThere is no need to run your own NEAR Lake unless you have specific reasons to do that."]})}),"\n",(0,r.jsx)(t.p,{children:"There are AWS S3 buckets created:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"near-lake-data-testnet"})," (",(0,r.jsx)(t.code,{children:"eu-central-1"})," region)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"near-lake-data-mainnet"})," (",(0,r.jsx)(t.code,{children:"eu-central-1"})," region)"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"All the buckets are set up the way the requester pays for the access. Anyone can read from these buckets by connecting to them with their own AWS credentials to be charged by Amazon."}),"\n",(0,r.jsx)(t.h3,{id:"data-structure",children:"Data structure"}),"\n",(0,r.jsx)(t.p,{children:"The data structure used by Lake Indexer is the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"    <block_height>/\n      block.json\n      shard_0.json\n      shard_1.json\n      ...\n      shard_N.json\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"<block_height>"})," is a 12-character-long ",(0,r.jsx)(t.a,{href:"https://doc.rust-lang.org/std/primitive.u64.html",children:(0,r.jsx)(t.code,{children:"u64"})}),' string with leading zeros (e.g "000042839521"). See ',(0,r.jsx)(t.a,{href:"https://github.com/near/near-lake/issues/23",children:"this issue for reasoning"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"block_json"})," contains JSON-serialized ",(0,r.jsx)(t.code,{children:"BlockView"})," struct. ",(0,r.jsx)(t.strong,{children:"NB!"})," this struct might change in the future, we will announce it"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"shard_N.json"})," where N is ",(0,r.jsx)(t.a,{href:"https://doc.rust-lang.org/std/primitive.u64.html",children:(0,r.jsx)(t.code,{children:"u64"})})," starting from ",(0,r.jsx)(t.code,{children:"0"}),". Represents the index number of the shard. In order to find out the expected number of shards in the block you can look in ",(0,r.jsx)(t.code,{children:"block.json"})," at ",(0,r.jsx)(t.code,{children:".header.chunks_included"})]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-use-it",children:"How to use it"}),"\n",(0,r.jsxs)(t.p,{children:["We have created the ",(0,r.jsx)(t.a,{href:"/concepts/advanced/near-lake-framework",children:"NEAR Lake Framework"})," to have a simple straightforward way to create an indexer on top of the data stored by NEAR Lake itself."]}),"\n",(0,r.jsx)(t.admonition,{title:"NEAR Lake Framework",type:"info",children:(0,r.jsxs)(t.p,{children:["You can check the NEAR Lake Framework release announcement on the ",(0,r.jsx)(t.a,{href:"https://gov.near.org/t/announcement-near-lake-framework-brand-new-word-in-indexer-building-approach/17668",children:"NEAR Governance Forum"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"We have prepared this video tutorial with a simple example to give you an overview and some practical ideas."}),"\n",(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GsF7I93K-EQ",title:"NEAR Lake Indexer",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);