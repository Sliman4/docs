"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1398],{39527:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(85893),t=s(11151);const i={id:"best-practices",title:"Best Practices"},a="Best practices",c={id:"sdk/rust/best-practices",title:"Best Practices",description:"Enable overflow checks",source:"@site/../docs/sdk/rust/best-practices.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/best-practices",permalink:"/sdk/rust/best-practices",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/best-practices.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1711375194,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"best-practices",title:"Best Practices"},sidebar:"tools",previous:{title:"Unit Tests",permalink:"/sdk/rust/testing/unit-tests"},next:{title:"Reducing Contract Size",permalink:"/sdk/rust/contract-size"}},o={},l=[{value:"Enable overflow checks",id:"enable-overflow-checks",level:2},{value:"Use <code>require!</code> early",id:"use-require-early",level:2},{value:"Use <code>log!</code>",id:"use-log",level:2},{value:"Return <code>Promise</code>",id:"return-promise",level:2},{value:"Reuse crates from <code>near-sdk</code>",id:"reuse-crates-from-near-sdk",level:2},{value:"<code>std::panic!</code> vs <code>env::panic</code>",id:"stdpanic-vs-envpanic",level:2},{value:"Use workspaces",id:"use-workspaces",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"best-practices",children:"Best practices"}),"\n",(0,r.jsx)(n.h2,{id:"enable-overflow-checks",children:"Enable overflow checks"}),"\n",(0,r.jsxs)(n.p,{children:["It's usually helpful to panic on integer overflow. To enable it, add the following into your ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:"[profile.release]\noverflow-checks = true\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"use-require-early",children:["Use ",(0,r.jsx)(n.code,{children:"require!"})," early"]}),"\n",(0,r.jsxs)(n.p,{children:["Try to validate the input, context, state and access using ",(0,r.jsx)(n.code,{children:"require!"})," before taking any actions. The earlier you panic, the more ",(0,r.jsx)(n.a,{href:"https://docs.near.org/concepts/protocol/gas",children:"gas"})," you will save for the caller."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Contract {\n    pub fn set_fee(&mut self, new_fee: Fee) {\n        require!(env::predecessor_account_id() == self.owner_id, "Owner\'s method");\n        new_fee.assert_valid();\n        self.internal_set_fee(new_fee);\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": If you want debug information in the panic message or if you are using an SDK version before ",(0,r.jsx)(n.code,{children:"4.0.0-pre.2"}),",\nthe Rust ",(0,r.jsx)(n.code,{children:"assert!"})," macro can be used instead of ",(0,r.jsx)(n.code,{children:"require!"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Contract {\n    pub fn set_fee(&mut self, new_fee: Fee) {\n        assert_eq!(env::predecessor_account_id(), self.owner_id, "Owner\'s method");\n        new_fee.assert_valid();\n        self.internal_set_fee(new_fee);\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"use-log",children:["Use ",(0,r.jsx)(n.code,{children:"log!"})]}),"\n",(0,r.jsx)(n.p,{children:"Use logging for debugging and notifying user."}),"\n",(0,r.jsx)(n.p,{children:"When you need a formatted message, you can use the following macro:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'log!("Transferred {} tokens from {} to {}", amount, sender_id, receiver_id);\n'})}),"\n",(0,r.jsx)(n.p,{children:"It's equivalent to the following message:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'env::log_str(format!("Transferred {} tokens from {} to {}", amount, sender_id, receiver_id).as_ref());\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"return-promise",children:["Return ",(0,r.jsx)(n.code,{children:"Promise"})]}),"\n",(0,r.jsxs)(n.p,{children:["If your method makes a cross-contract call, you probably want to return the newly created ",(0,r.jsx)(n.code,{children:"Promise"}),".\nThis allows the caller (such as a near-cli or near-api-js call) to wait for the result of the promise instead of returning immediately.\nAdditionally, if the promise fails for some reason, returning it will let the caller know about the failure, as well as enabling NEAR Explorer and other tools to mark the whole transaction chain as failing.\nThis can prevent false-positives when the first or first few transactions in a chain succeed but a subsequent transaction fails."]}),"\n",(0,r.jsx)(n.p,{children:"E.g."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn withdraw_100(&mut self, receiver_id: AccountId) -> Promise {\n        Promise::new(receiver_id).transfer(100)\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"reuse-crates-from-near-sdk",children:["Reuse crates from ",(0,r.jsx)(n.code,{children:"near-sdk"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"near-sdk"})," re-exports the following crates:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"borsh"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"base64"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bs58"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"serde"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"serde_json"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Most common crates include ",(0,r.jsx)(n.code,{children:"borsh"})," which is needed for internal STATE serialization and\n",(0,r.jsx)(n.code,{children:"serde"})," for external JSON serialization."]}),"\n",(0,r.jsxs)(n.p,{children:["When marking structs with ",(0,r.jsx)(n.code,{children:"serde::Serialize"})," you need to use ",(0,r.jsx)(n.code,{children:'#[serde(crate = "near_sdk::serde")]'}),"\nto point serde to the correct base crate."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'/// Import `borsh` from `near_sdk` crate \nuse near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\n/// Import `serde` from `near_sdk` crate \nuse near_sdk::serde::{Serialize, Deserialize};\n\n/// Main contract structure serialized with Borsh\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub pair: Pair,\n}\n\n/// Implements both `serde` and `borsh` serialization.\n/// `serde` is typically useful when returning a struct in JSON format for a frontend.\n#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct Pair {\n    pub a: u32,\n    pub b: u32,\n}\n\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new(pair: Pair) -> Self {\n        Self {\n            pair,\n        }\n    }\n\n    pub fn get_pair(self) -> Pair {\n        self.pair\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"stdpanic-vs-envpanic",children:[(0,r.jsx)(n.code,{children:"std::panic!"})," vs ",(0,r.jsx)(n.code,{children:"env::panic"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"std::panic!"})," panics the current thread. It uses ",(0,r.jsx)(n.code,{children:"format!"})," internally, so it can take arguments.\nSDK sets up a panic hook, which converts the generated ",(0,r.jsx)(n.code,{children:"PanicInfo"})," from ",(0,r.jsx)(n.code,{children:"panic!"})," into a string and uses ",(0,r.jsx)(n.code,{children:"env::panic"})," internally to report it to Runtime.\nThis may provide extra debugging information such as the line number of the source code where the panic happened."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"env::panic"})," directly calls the host method to panic the contract.\nIt doesn't provide any other extra debugging information except for the passed message."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"use-workspaces",children:"Use workspaces"}),"\n",(0,r.jsxs)(n.p,{children:["Workspaces allow you to automate workflows and run tests for multiple contracts and cross-contract calls in a sandbox or testnet environment.\nRead more, ",(0,r.jsx)(n.a,{href:"https://github.com/near/workspaces-rs",children:"workspaces-rs"})," or ",(0,r.jsx)(n.a,{href:"https://github.com/near/workspaces-js",children:"workspaces-js"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var r=s(67294);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);