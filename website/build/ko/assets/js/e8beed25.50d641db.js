"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1339],{24874:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=n(85893),s=n(11151),a=n(77229);const i={id:"storage",title:"\uc0c1\ud0dc & \uc790\ub8cc\uad6c\uc870"},l=void 0,o={id:"develop/contracts/storage",title:"\uc0c1\ud0dc & \uc790\ub8cc\uad6c\uc870",description:"\uac01 \ucee8\ud2b8\ub799\ud2b8\uc5d0\ub294 \uace0\uc720\ud55c \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\uac00 \uc788\uc73c\uba70, \uc774\ub294 \ud574\ub2f9 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc758\ud574\uc11c\ub9cc \uc218\uc815 \uac00\ub2a5\ud558\uc9c0\ub9cc \ub204\uad6c\ub098 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/contracts/storage.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/storage",permalink:"/ko/develop/contracts/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/storage.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",frontMatter:{id:"storage",title:"\uc0c1\ud0dc & \uc790\ub8cc\uad6c\uc870"},sidebar:"build",previous:{title:"\ud658\uacbd",permalink:"/ko/develop/contracts/environment/"},next:{title:"\uc804\uc1a1 & Action",permalink:"/ko/develop/contracts/actions"}},c={},u=[{value:"\uc0c1\ud0dc\uc758 \uc815\uc758",id:"\uc0c1\ud0dc\uc758-\uc815\uc758",level:2},{value:"\uc790\ub8cc\uad6c\uc870",id:"\uc790\ub8cc\uad6c\uc870",level:2},{value:"Vector",id:"vector",level:3},{value:"Map",id:"map",level:3},{value:"\uc9d1\ud569",id:"\uc9d1\ud569",level:3},{value:"\ud2b8\ub9ac",id:"\ud2b8\ub9ac",level:3},{value:"Storage Cost",id:"storage-cost",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["\uac01 \ucee8\ud2b8\ub799\ud2b8\uc5d0\ub294 \uace0\uc720\ud55c \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\uac00 \uc788\uc73c\uba70, \uc774\ub294 ",(0,t.jsx)(r.strong,{children:"\ud574\ub2f9 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc758\ud574\uc11c\ub9cc \uc218\uc815 \uac00\ub2a5"}),"\ud558\uc9c0\ub9cc ",(0,t.jsx)(r.a,{href:"/ko/tools/near-cli#near-view-state-near-view-state",children:"\ub204\uad6c\ub098 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["\ucee8\ud2b8\ub799\ud2b8\ub294 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c ",(0,t.jsx)(r.code,{children:"\ud0a4-\uac12"})," \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub294 SDK\uc5d0 \uc758\ud55c ",(0,t.jsx)(r.a,{href:"/ko/develop/contracts/serialization",children:"\uc9c1\ub82c\ud654"}),"\ub97c \ud1b5\ud574 \ucd94\uc0c1\ud654\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.mdxAdmonitionTitle,{children:["\ucee8\ud2b8\ub799\ud2b8\ub294 \uc794\uace0\uc758 \uc77c\ubd80\ub97c \uc7a0\uadf8\ub294 \ubc29\uc2dd\uc73c\ub85c ",(0,t.jsx)(r.a,{href:"#storage-cost",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \uc9c0\ubd88"}),"\ud569\ub2c8\ub2e4. \ud604\uc7ac ",(0,t.jsx)(r.strong,{children:"100KB"}),"\ub97c \uc800\uc7a5\ud558\ub294 \ub370 ",(0,t.jsx)(r.strong,{children:"~1\u24c3"})," \ub9cc\ud07c\uc758 \ube44\uc6a9\uc774 \ub4ed\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"\uc0c1\ud0dc\uc758-\uc815\uc758",children:"\uc0c1\ud0dc\uc758 \uc815\uc758"}),"\n",(0,t.jsxs)(r.p,{children:["\ucee8\ud2b8\ub799\ud2b8\uc758 \uc0c1\ud0dc\ub294 ",(0,t.jsx)(r.a,{href:"/ko/develop/contracts/anatomy#defining-the-contract",children:"\ud575\uc2ec \ud074\ub798\uc2a4 \uc18d\uc131"}),"\uc5d0 \uc758\ud574 \uc815\uc758\ub418\uba70, \uc774\ub97c \ud1b5\ud574 \uc811\uadfc \uac00\ub2a5\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.p,{children:["\uc0c1\ud0dc\uc5d0\ub294 \uc0c1\uc218, \uae30\ubcf8 \uc790\ub8cc\ud615 \ubc0f \ubcf5\ud569 \uac1d\uccb4\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud655\uc2e4\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uae30\ubcf8 \uceec\ub809\uc158\ubcf4\ub2e4 ",(0,t.jsx)(r.a,{href:"#data-structures",children:"SDK \uceec\ub809\uc158"}),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. SDK \uceec\ub809\uc158\uc740 ",(0,t.jsx)(r.a,{href:"/ko/develop/contracts/serialization#borsh-state-serialization",children:"\uc9c1\ub82c\ud654\ub41c \ud0a4-\uac12 \uc2a4\ud1a0\ub9ac\uc9c0"}),"\uc5d0 \ucd5c\uc801\ud654\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(a.O2,{children:[(0,t.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,t.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"6",end:"12"})}),(0,t.jsx)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"14",end:"24"})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"\uc790\ub8cc\uad6c\uc870",children:"\uc790\ub8cc\uad6c\uc870"}),"\n",(0,t.jsxs)(r.p,{children:["NEAR SDK\ub294 \ud6a8\uc728\uc801\uc778 \ubc29\uc2dd\uc73c\ub85c \ub370\uc774\ud130 \uc800\uc7a5 \ubc29\uc2dd\uc744 \ub2e8\uc21c\ud654\ud558\uae30 \uc704\ud574 \uc790\ub8cc\uad6c\uc870(",(0,t.jsx)(r.a,{href:"#vector",children:"\ubca1\ud130"}),", ",(0,t.jsx)(r.a,{href:"#set",children:"\uc9d1\ud569"}),", ",(0,t.jsx)(r.a,{href:"#map",children:"\ub9f5"})," \ubc0f ",(0,t.jsx)(r.a,{href:"#tree",children:"\ud2b8\ub9ac"}),")\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsxs)(r.mdxAdmonitionTitle,{children:["\uc778\uc2a4\ud134\uc2a4\ud654 \ubaa8\ub4e0 \uad6c\uc870\ub294 ",(0,t.jsx)(r.a,{href:"/ko/develop/contracts/serialization#borsh-state-serialization",children:"\uc9c1\ub82c\ud654\ub41c \uc0c1\ud0dc"}),"\uc5d0\uc11c \uad6c\uc870\uc758 \ud0a4\ub97c \uc2dd\ubcc4\ud558\ub294 **\uace0\uc720\ud55c ",(0,t.jsx)(r.code,{children:"prefix"}),"**\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucd08\uae30\ud654\ud574\uc57c \ud569\ub2c8\ub2e4."]}),(0,t.jsxs)(a.O2,{children:[(0,t.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,t.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"8",end:"11"})}),(0,t.jsx)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"33",end:"38"})})]})]}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(r.h3,{id:"vector",children:"Vector"}),"\n",(0,t.jsxs)(r.p,{children:["Implements a ",(0,t.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Array_data_structure",children:"vector/array"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,t.jsxs)(a.O2,{children:[(0,t.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,t.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"25",end:"28"})}),(0,t.jsxs)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,t.jsx)(a.Ey,{fname:"vector.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/vector.rs",start:"12",end:"30"}),(0,t.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(r.h3,{id:"map",children:"Map"}),"\n",(0,t.jsxs)(r.p,{children:["Implements a ",(0,t.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Associative_array",children:"map/dictionary"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,t.jsxs)(a.O2,{children:[(0,t.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,t.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"33",end:"37"})}),(0,t.jsxs)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,t.jsx)(a.Ey,{fname:"map.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/map.rs",start:"9",end:"24"}),(0,t.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Nesting of Objects - Temporary Solution"}),(0,t.jsx)(r.p,{children:"In the JS SDK, you can store and retrieve elements from a nested map or object, but first you need to construct or deconstruct the structure from state. \uc774\ub294 \uac1c\uc120 \uc0ac\ud56d\uc774 SDK\uc5d0 \uad6c\ud604\ub420 \ub54c\uae4c\uc9c0 \uc2e4\ud589\ub418\ub294 \uc784\uc2dc \uc194\ub8e8\uc158\uc785\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uc774\ub97c \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc758 \uc608\uc785\ub2c8\ub2e4."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:'import { NearBindgen, call, view, near, UnorderedMap } from "near-sdk-js";\n\n@NearBindgen({})\nclass StatusMessage {\n  records: UnorderedMap;\n  constructor() {\n    this.records = new UnorderedMap("a");\n  }\n\n  @call({})\n  set_status({ message, prefix }: { message: string; prefix: string }) {\n    let account_id = near.signerAccountId();\n\n    const inner: any = this.records.get("b" + prefix);\n    const inner_map: UnorderedMap = inner\n      ? UnorderedMap.deserialize(inner)\n      : new UnorderedMap("b" + prefix);\n\n    inner_map.set(account_id, message);\n\n    this.records.set("b" + prefix, inner_map);\n  }\n\n  @view({})\n  get_status({ account_id, prefix }: { account_id: string; prefix: string }) {\n    const inner: any = this.records.get("b" + prefix);\n    const inner_map: UnorderedMap = inner\n      ? UnorderedMap.deserialize(inner)\n      : new UnorderedMap("b" + prefix);\n    return inner_map.get(account_id);\n  }\n}\n'})})]}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(r.h3,{id:"\uc9d1\ud569",children:"\uc9d1\ud569"}),"\n",(0,t.jsxs)(r.p,{children:["\ucee8\ud2b8\ub799\ud2b8 \ub0b4 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5\ub418\ub294 ",(0,t.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)",children:"\uc9d1\ud569"}),"\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub300\ud55c \uc815\ubcf4\ub294 Rust \ubc0f AS SDK\ub97c \ucc38\uc870\ud558\uc138\uc694."]}),"\n",(0,t.jsxs)(a.O2,{children:[(0,t.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,t.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"42",end:"46"})}),(0,t.jsxs)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,t.jsx)(a.Ey,{fname:"set.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/set.rs",start:"9",end:"16"}),(0,t.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(r.h3,{id:"\ud2b8\ub9ac",children:"\ud2b8\ub9ac"}),"\n",(0,t.jsxs)(r.p,{children:["\ub9f5\uc5d0 \uc21c\uc11c\ub97c \ubd80\uc5ec\ud55c \uc790\ub8cc\uad6c\uc870\uc785\ub2c8\ub2e4. \uae30\ubcf8 \uad6c\ud604\uc740 ",(0,t.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/AVL_tree",children:"AVL"}),"\uc744 \uae30\ubc18\uc73c\ub85c \ud569\ub2c8\ub2e4. You should use this structure when you need to: have a consistent order, or access the min/max keys."]}),"\n",(0,t.jsx)(a.O2,{children:(0,t.jsxs)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,t.jsx)(a.Ey,{fname:"tree.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/tree.rs",start:"9",end:"24"}),(0,t.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"storage-cost",children:"Storage Cost"}),"\n",(0,t.jsx)(r.p,{children:"Your contract needs to lock a portion of their balance proportional to the amount of data they stored in the blockchain. \uc774\ub294 \ub2e4\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\ub354 \ub9ce\uc740 \ub370\uc774\ud130\uac00 \ucd94\uac00\ub418\uc5b4 ",(0,t.jsx)(r.strong,{children:"\uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uc99d\uac00 \u2191"}),"\ud558\uba74, \ucee8\ud2b8\ub799\ud2b8 ",(0,t.jsx)(r.strong,{children:"\uc794\uace0\uac00 \uac10\uc18c \u2193"}),"\ud569\ub2c8\ub2e4 ."]}),"\n",(0,t.jsxs)(r.li,{children:["\ub370\uc774\ud130\uac00 \uc0ad\uc81c\ub418\uc5b4 ",(0,t.jsx)(r.strong,{children:"\uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uac10\uc18c \u2193"}),"\ud558\uba74, \ucee8\ud2b8\ub799\ud2b8 ",(0,t.jsx)(r.strong,{children:"\uc794\uace0\uac00 \uc99d\uac00 \u2191"}),"\ud569\ub2c8\ub2e4 ."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["\ud604\uc7ac ",(0,t.jsx)(r.strong,{children:"100kb"}),"\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ub370 \uc57d ",(0,t.jsx)(r.strong,{children:"1 \u24c3"}),"\uc758 \ube44\uc6a9\uc774 \ub4ed\ub2c8\ub2e4 ."]}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsxs)(r.mdxAdmonitionTitle,{children:["NEAR \uacc4\uc815 ID\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 base32\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc778\ucf54\ub529\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc808\uc57d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub4e4\uc740 \ucd5c\ub300 64\uc790 \uae38\uc774\uc758 ",(0,t.jsx)(r.code,{children:"[a-z.-_]"})," \ubb38\uc790\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0, \ud130\ubbf8\ub110 ",(0,t.jsx)(r.code,{children:"\\0"}),"\uacfc \ud568\uaed8 \ubb38\uc790\ub2f9 5\ube44\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc778\ucf54\ub529\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc6d0\ub798 (64 + 4) * 8 = 544 \ube44\ud2b8\uc5d0\uc11c 65 * 5 = 325 \ube44\ud2b8 \ud06c\uae30\ub85c \uc904\uc5b4\ub4ed\ub2c8\ub2e4. \uc774\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 40% \uc808\uac10\ud55c \uac83\uc785\ub2c8\ub2e4. :::"]}),(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsx)(r.p,{children:"\uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc704\ud55c NEAR\uac00 \uc5c6\ub294 \uc0c1\ud669\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\uac00 \uc0c1\ud0dc\uc5d0 \ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub824\uace0 \ud558\uba74 \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."})})]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.mdxAdmonitionTitle,{children:["\uc7a0\uc7ac\uc801\uc778 ",(0,t.jsx)(r.a,{href:"/ko/develop/contracts/security/storage",children:"\uc18c\uc561 \uc608\uae08 \uacf5\uaca9"}),"\uc5d0 \uc720\uc758\ud558\uc138\uc694."]})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>i});n(67294);var t=n(36905);const s={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,i),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>S});var t=n(67294),s=n(36905),a=n(12466),i=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function m(e){var r=e.queryString,n=void 0!==r&&r,s=e.groupId,a=(0,i.k6)(),l=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:s});return[(0,o._X)(l),(0,t.useCallback)((function(e){if(l){var r=new URLSearchParams(a.location.search);r.set(l,e),a.replace(Object.assign({},a.location,{search:r.toString()}))}}),[l,a])]}function x(e){var r,n,s,a,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,x=h(e),f=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:x})})),b=f[0],g=f[1],j=m({queryString:c,groupId:d}),v=j[0],y=j[1],S=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(r),s=n[0],a=n[1],[s,(0,t.useCallback)((function(e){r&&a.set(e)}),[r,a])]),w=S[0],k=S[1],E=function(){var e=null!=v?v:w;return p({value:e,tabValues:x})?e:null}();return(0,l.Z)((function(){E&&g(E)}),[E]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),k(e)}),[y,k,x]),tabValues:x}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function j(e){var r=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var r=e.currentTarget,n=o.indexOf(r),s=l[n].value;s!==t&&(c(r),i(s))},d=function(e){var r,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,s=o.indexOf(e.currentTarget)+1;n=null!=(t=o[s])?t:o[0];break;case"ArrowLeft":var a,i=o.indexOf(e.currentTarget)-1;n=null!=(a=o[i])?a:o[o.length-1]}null==(r=n)||r.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},r),children:l.map((function(e){var r=e.value,n=e.label,a=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},a,{className:(0,s.Z)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function v(e){var r=e.lazy,n=e.children,s=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=a.find((function(e){return e.props.value===s}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})}))})}function y(e){var r=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,Object.assign({},e,r)),(0,g.jsx)(v,Object.assign({},e,r))]})}function S(e){var r=(0,f.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(r))}},77229:(e,r,n)=>{n.d(r,{Ey:()=>u,O2:()=>o,SQ:()=>c});n(67294);var t=n(74866),s=n(85162),a=n(95665),i=n.n(a),l=n(85893);function o(e){var r=e.children;return Array.isArray(r)||(r=[r]),(0,l.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:r.map((function(e,r){return(0,l.jsx)(s.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var r=e.children,n=e.language;return Array.isArray(r)||(r=[r]),r=r.map((function(e){return function(e,r){var n=e.props,t=(n.children,n.url),s=n.start,a=n.end,i=n.fname;if(e.type===u)return u({url:t,start:s,end:a,language:r,fname:i});return e}(e,n)})),1==r.length?(0,l.jsx)(s.Z,{value:0,label:r[0].props.fname,children:r[0]}):(0,l.jsx)(t.Z,{className:"file-tabs",children:r.map((function(e,r){return(0,l.jsx)(s.Z,{value:r,label:e.props.fname,children:e})}))})}function u(e){var r=e.url,n=e.start,t=e.end,s=e.language,a=e.fname,o=r+"#";return n&&t&&(o+="L"+n+"-L"+t+"#"),(0,l.jsx)(i(),{language:s,fname:a,children:o})}}}]);