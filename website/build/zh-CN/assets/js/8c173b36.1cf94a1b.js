"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2477],{15709:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>I,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var t=s(85893),i=s(11151);const o=s.p+"assets/images/boop-base64-encode-57f1146336e8a4514a80fb207a64c1e3.gif",r={sidebar_position:6,sidebar_label:"Base64 params, wrap up",title:"Using base64-encoded arguments when we create a new crossword puzzle"},a="Final modifications",c={id:"tutorials/crosswords/intermediate/base64vecu8",title:"Using base64-encoded arguments when we create a new crossword puzzle",description:"Let's modify our new_puzzle method a bit, and demonstrate how a smart contract author might use base64-encoded arguments.",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/base64vecu8",permalink:"/zh-CN/tutorials/crosswords/intermediate/base64vecu8",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1661444350,formattedLastUpdatedAt:"2022\u5e748\u670825\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Base64 params, wrap up",title:"Using base64-encoded arguments when we create a new crossword puzzle"},sidebar:"contracts",previous:{title:"Cross-contract calls, etc.",permalink:"/zh-CN/tutorials/crosswords/intermediate/cross-contract-calls"}},d={},g=[{value:"Wrapping up",id:"wrapping-up",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"final-modifications",children:"Final modifications"}),"\n","\n","\n",(0,t.jsxs)(n.p,{children:["Let's modify our ",(0,t.jsx)(n.code,{children:"new_puzzle"})," method a bit, and demonstrate how a smart contract author might use base64-encoded arguments."]}),"\n",(0,t.jsxs)(n.p,{children:["In the previous chapter we had a fairly long NEAR CLI command that called the ",(0,t.jsx)(n.code,{children:"new_puzzle"}),", providing it the parameters for all the clues. Having these lengthy parameters on the CLI might get cumbersome. There may be issues needing to escape single or double quotes, and each operating system may wish for a different format on the Terminal or Command Prompt."]}),"\n",(0,t.jsxs)(n.p,{children:["We're going to send all the arguments as a base64-encoded string, and make this a bit simpler. For this, we're going to use ",(0,t.jsxs)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/json_types/struct.Base64VecU8.html",children:[(0,t.jsx)(n.code,{children:"Base64VecU8"})," from the SDK"]}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:[(0,t.jsx)(n.code,{children:"Base64VecU8"})," is great for binary payloads"]}),(0,t.jsxs)(n.p,{children:["What we're doing makes sense, but it's worth noting that it's perhaps more common to use ",(0,t.jsx)(n.code,{children:"Base64VecU8"})," when sending binary parameters."]}),(0,t.jsxs)(n.p,{children:["Read more ",(0,t.jsx)(n.a,{href:"/sdk/rust/contract-interface/serialization-interface#base64vecu8",children:"about it here"}),"."]})]}),"\n",(0,t.jsx)(n.p,{children:"First we'll set up a struct for the arguments we're expecting:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs#L111-L117\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then we modify our ",(0,t.jsx)(n.code,{children:"new_puzzle"})," method like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs#L290-L297\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We can take our original arguments and base64 encode them, using whatever method you prefer. There are plenty of online tool, Terminal commands, and open source applications like ",(0,t.jsx)(n.a,{href:"https://boop.okat.best",children:"Boop"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We'll copy this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "answer_pk": "ed25519:7PkKPmVUXcupA5oU8d6TbgyMwzFe8tPV6eV1KGwgo9xg",\n  "dimensions": {\n   "x": 11,\n   "y": 10\n  },\n  "answers": [\n   {\n     "num": 1,\n     "start": {\n       "x": 0,\n       "y": 1\n     },\n     "direction": "Across",\n     "length": 12,\n     "clue": "NEAR transactions are more ______ instead of atomic."\n   },\n   {\n     "num": 2,\n     "start": {\n       "x": 6,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 7,\n     "clue": "In a smart contract, when performing an Action, you use this in Rust."\n   },\n   {\n     "num": 3,\n     "start": {\n       "x": 9,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 6,\n     "clue": "In docs.rs when you search for the near-sdk crate, these items a considered a what: collections, env, json_types."\n   },\n   {\n     "num": 4,\n     "start": {\n       "x": 1,\n       "y": 1\n     },\n     "direction": "Down",\n     "length": 10,\n     "clue": "A series of words that can deterministically generate a private key."\n   },\n   {\n     "num": 5,\n     "start": {\n       "x": 1,\n       "y": 3\n     },\n     "direction": "Across",\n     "length": 3,\n     "clue": "When doing high-level cross-contract calls, we import this that ends in _contract. When calling ourselves in a callback, it is convention to call it THIS_self."\n   },\n   {\n     "num": 6,\n     "start": {\n       "x": 0,\n       "y": 8\n     },\n     "direction": "Across",\n     "length": 8,\n     "clue": "Use this to determine the execution outcome of a cross-contract call or Action."\n   },\n   {\n     "num": 7,\n     "start": {\n       "x": 4,\n       "y": 6\n     },\n     "direction": "Across",\n     "length": 4,\n     "clue": "You chain this syntax onto a promise in order to schedule a callback afterward."\n   }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"and base64 encode it:"}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{src:o,alt:"Animated gif of parameters getting base64 encoded with the program Boop",width:"600"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"Now we can build and run the new crossword puzzle contract as we have before:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'./build.sh\n\nexport NEAR_ACCT=crossword.friend.testnet\nexport PARENT_ACCT=friend.testnet\nnear delete $NEAR_ACCT $PARENT_ACCT\nnear create-account $NEAR_ACCT --masterAccount $PARENT_ACCT\nnear deploy $NEAR_ACCT --wasmFile res/crossword_tutorial_chapter_3.wasm --initFunction new --initArgs \'{"owner_id": "\'$NEAR_ACCT\'", "creator_account": "testnet"}\'\nnear call $NEAR_ACCT new_puzzle \'{\n  "args": "ewogICJhbnN3ZXJfcGsiOiAiZWQyNTUxOTo3UGtLUG1WVVhjdXBBNW9VOGQ2VGJneU13ekZlOHRQVjZlVjFLR3dnbzl4ZyIsCiAgImRpbWVuc2lvbnMiOiB7CiAgICJ4IjogMTEsCiAgICJ5IjogMTAKICB9LAogICJhbnN3ZXJzIjogWwogICB7CiAgICAgIm51bSI6IDEsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAwLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkFjcm9zcyIsCiAgICAgImxlbmd0aCI6IDEyLAogICAgICJjbHVlIjogIk5FQVIgdHJhbnNhY3Rpb25zIGFyZSBtb3JlIF9fX19fXyBpbnN0ZWFkIG9mIGF0b21pYy4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogMiwKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDYsCiAgICAgICAieSI6IDAKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiRG93biIsCiAgICAgImxlbmd0aCI6IDcsCiAgICAgImNsdWUiOiAiSW4gYSBzbWFydCBjb250cmFjdCwgd2hlbiBwZXJmb3JtaW5nIGFuIEFjdGlvbiwgeW91IHVzZSB0aGlzIGluIFJ1c3QuIgogICB9LAogICB7CiAgICAgIm51bSI6IDMsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiA5LAogICAgICAgInkiOiAwCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiA2LAogICAgICJjbHVlIjogIkluIGRvY3MucnMgd2hlbiB5b3Ugc2VhcmNoIGZvciB0aGUgbmVhci1zZGsgY3JhdGUsIHRoZXNlIGl0ZW1zIGEgY29uc2lkZXJlZCBhIHdoYXQ6IGNvbGxlY3Rpb25zLCBlbnYsIGpzb25fdHlwZXMuIgogICB9LAogICB7CiAgICAgIm51bSI6IDQsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAxLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiAxMCwKICAgICAiY2x1ZSI6ICJBIHNlcmllcyBvZiB3b3JkcyB0aGF0IGNhbiBkZXRlcm1pbmlzdGljYWxseSBnZW5lcmF0ZSBhIHByaXZhdGUga2V5LiIKICAgfSwKICAgewogICAgICJudW0iOiA1LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMSwKICAgICAgICJ5IjogMwogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiAzLAogICAgICJjbHVlIjogIldoZW4gZG9pbmcgaGlnaC1sZXZlbCBjcm9zcy1jb250cmFjdCBjYWxscywgd2UgaW1wb3J0IHRoaXMgdGhhdCBlbmRzIGluIF9jb250cmFjdC4gV2hlbiBjYWxsaW5nIG91cnNlbHZlcyBpbiBhIGNhbGxiYWNrLCBpdCBpcyBjb252ZW50aW9uIHRvIGNhbGwgaXQgVEhJU19zZWxmLiIKICAgfSwKICAgewogICAgICJudW0iOiA2LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMCwKICAgICAgICJ5IjogOAogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiA4LAogICAgICJjbHVlIjogIlVzZSB0aGlzIHRvIGRldGVybWluZSB0aGUgZXhlY3V0aW9uIG91dGNvbWUgb2YgYSBjcm9zcy1jb250cmFjdCBjYWxsIG9yIEFjdGlvbi4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogNywKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDQsCiAgICAgICAieSI6IDYKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiQWNyb3NzIiwKICAgICAibGVuZ3RoIjogNCwKICAgICAiY2x1ZSI6ICJZb3UgY2hhaW4gdGhpcyBzeW50YXggb250byBhIHByb21pc2UgaW4gb3JkZXIgdG8gc2NoZWR1bGUgYSBjYWxsYmFjayBhZnRlcndhcmQuIgogICB9CiAgXQp9"\n}\' --accountId $NEAR_ACCT\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Back at the project root (not in the ",(0,t.jsx)(n.code,{children:"contract"})," directory) we can run our app and see the new crossword puzzle:"]}),"\n",(0,t.jsx)(n.p,{children:"CONTRACT_NAME=crossword.friend.testnet npm run start"}),"\n",(0,t.jsx)(n.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,t.jsx)(n.p,{children:"Once you understand cross-contract calls and callbacks and where the logic should go, you can build just about anything on NEAR."}),"\n",(0,t.jsxs)(n.p,{children:["This might be a good time for a reminder that this crossword puzzle, which checks permissions to methods based on a public key, is a bit unusual. It's more common to have simple collections or mappings for allowed users, or utilize the ",(0,t.jsx)(n.code,{children:"owner_id"})," field we set up. The account and access key system in NEAR is quite powerful, and hopefully this tutorial helps stretch the limits of what's possible, like the seamless onboarding we have with the crossword puzzle."]}),"\n",(0,t.jsx)(n.p,{children:"Again, the final code for this chapter:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-3",children:"https://github.com/near-examples/crossword-tutorial-chapter-3"})}),"\n",(0,t.jsx)(n.p,{children:"Happy hacking!"})]})}function I(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(67294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);