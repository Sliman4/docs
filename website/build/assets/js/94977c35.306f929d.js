"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1037],{84812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(85893),a=t(11151),c=t(74866),s=t(85162);const o={id:"actions",title:"Transfers & Actions"},i=void 0,l={id:"develop/contracts/actions",title:"Transfers & Actions",description:"Smart contracts can perform specific Actions such as transferring NEAR, or calling other contracts.",source:"@site/../docs/2.develop/contracts/actions.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/actions",permalink:"/develop/contracts/actions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/actions.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1711375194,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"actions",title:"Transfers & Actions"},sidebar:"build",previous:{title:"State & Data Structures",permalink:"/develop/contracts/storage"},next:{title:"Cross-Contract Calls",permalink:"/develop/contracts/crosscontract"}},u={},d=[{value:"Transfer NEAR \u24c3",id:"transfer-near-\u24dd",level:2},{value:"Function Call",id:"function-call",level:2},{value:"Create a Sub Account",id:"create-a-sub-account",level:2},{value:"Creating Other Accounts",id:"creating-other-accounts",level:4},{value:"Deploy a Contract",id:"deploy-a-contract",level:2},{value:"Add Keys",id:"add-keys",level:2},{value:"Delete Account",id:"delete-account",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Smart contracts can perform specific ",(0,r.jsx)(n.code,{children:"Actions"})," such as transferring NEAR, or calling other contracts."]}),"\n",(0,r.jsxs)(n.p,{children:["An important property of ",(0,r.jsx)(n.code,{children:"Actions"})," is that they can be batched together when acting on the same contract. ",(0,r.jsx)(n.strong,{children:"Batched actions"})," act as a unit: they execute in the same ",(0,r.jsx)(n.a,{href:"/concepts/protocol/transactions#receipt-receipt",children:"receipt"}),", and if ",(0,r.jsx)(n.strong,{children:"any fails"}),", then they ",(0,r.jsx)(n.strong,{children:"all get reverted"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Actions"})," can be batched only when they act on the ",(0,r.jsx)(n.strong,{children:"same contract"}),". You can batch calling two methods on a contract,\nbut ",(0,r.jsx)(n.strong,{children:"cannot"})," call two methods on different contracts."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"transfer-near-\u24dd",children:"Transfer NEAR \u24c3"}),"\n",(0,r.jsxs)(n.p,{children:["You can send $NEAR from your contract to any other account on the network. The Gas cost for transferring $NEAR is fixed and is based on the protocol's genesis config. Currently, it costs ",(0,r.jsx)(n.code,{children:"~0.45 TGas"}),"."]}),"\n",(0,r.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { NearBindgen, NearPromise, call } from 'near-sdk-js'\nimport { AccountId } from 'near-sdk-js/lib/types'\n\n@NearBindgen({})\nclass Contract{\n  @call({})\n  transfer({ to, amount }: { to: AccountId, amount: bigint }) {\n    NearPromise.new(to).transfer(amount);\n  }\n}\n"})})}),(0,r.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, AccountId, Promise, Balance};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\n#[near_bindgen]\nimpl Contract {\n  pub fn transfer(&self, to: AccountId, amount: Balance){\n    Promise::new(to).transfer(amount);\n  }\n}\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The only case where a transfer will fail is if the receiver account does ",(0,r.jsx)(n.strong,{children:"not"})," exist."]})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Remember that your balance is used to cover for the contract's storage. When sending money, make sure you always leave enough to cover for future storage needs."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"function-call",children:"Function Call"}),"\n",(0,r.jsxs)(n.p,{children:["Your smart contract can call methods in another contract. In the snippet bellow we call a method\nin a deployed ",(0,r.jsx)(n.a,{href:"/develop/contracts/quickstart",children:"Hello NEAR"})," contract, and check if everything went\nright in the callback."]}),"\n",(0,r.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { NearBindgen, near, call, bytes, NearPromise } from \'near-sdk-js\'\nimport { AccountId } from \'near-sdk-js/lib/types\'\n\nconst HELLO_NEAR: AccountId = "hello-nearverse.testnet";\nconst NO_DEPOSIT: bigint = BigInt(0);\nconst CALL_GAS: bigint = BigInt("10000000000000");\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  call_method({}): NearPromise {\n    const args = bytes(JSON.stringify({ message: "howdy" }))\n\n    return NearPromise.new(HELLO_NEAR)\n    .functionCall("set_greeting", args, NO_DEPOSIT, CALL_GAS)\n    .then(\n      NearPromise.new(near.currentAccountId())\n      .functionCall("callback", bytes(JSON.stringify({})), NO_DEPOSIT, CALL_GAS)\n    )\n    .asReturn()\n  }\n\n  @call({privateFunction: true})\n  callback({}): boolean {\n    let result, success;\n  \n    try{ result = near.promiseResult(0); success = true }\n    catch{ result = undefined; success = false }\n  \n    if (success) {\n      near.log(`Success!`)\n      return true\n    } else {\n      near.log("Promise failed...")\n      return false\n    }\n  }\n}\n'})})}),(0,r.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, log, Promise, Gas, PromiseError};\nuse serde_json::json;\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst HELLO_NEAR: &str = "hello-nearverse.testnet";\nconst NO_DEPOSIT: u128 = 0;\nconst CALL_GAS: Gas = Gas(5_000_000_000_000);\n\n#[near_bindgen]\nimpl Contract {\n  pub fn call_method(&self){\n    let args = json!({ "message": "howdy".to_string() })\n              .to_string().into_bytes().to_vec();\n\n    Promise::new(HELLO_NEAR.parse().unwrap())\n    .function_call("set_greeting".to_string(), args, NO_DEPOSIT, CALL_GAS)\n    .then(\n      Promise::new(env::current_account_id())\n      .function_call("callback".to_string(), Vec::new(), NO_DEPOSIT, CALL_GAS)\n    );\n  }\n\n  pub fn callback(&self, #[callback_result] result: Result<(), PromiseError>){\n    if result.is_err(){\n        log!("Something went wrong")\n    }else{\n        log!("Message changed")\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["The snippet showed above is a low level way of calling other methods. We recommend make calls to other contracts as explained in the ",(0,r.jsx)(n.a,{href:"/develop/contracts/crosscontract",children:"Cross-contract Calls section"}),"."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-a-sub-account",children:"Create a Sub Account"}),"\n",(0,r.jsxs)(n.p,{children:["Your contract can create direct sub accounts of itself, for example, ",(0,r.jsx)(n.code,{children:"user.near"})," can create ",(0,r.jsx)(n.code,{children:"sub.user.near"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Accounts do ",(0,r.jsx)(n.strong,{children:"NOT"})," have control over their sub-accounts, since they have their own keys."]}),"\n",(0,r.jsxs)(n.p,{children:["Sub-accounts are simply useful for organizing your accounts (e.g. ",(0,r.jsx)(n.code,{children:"dao.project.near"}),", ",(0,r.jsx)(n.code,{children:"token.project.near"}),")."]}),"\n",(0,r.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({payableFunction:true})\n  create({prefix}:{prefix: String}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n  }\n}\n"})})}),(0,r.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n                          \nconst MIN_STORAGE: Balance = 1_000_000_000_000_000_000_000; //0.001\u24c3\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create(&self, prefix: String){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE);\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Notice that in the snippet we are transferring some money to the new account for storage"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["When you create an account from within a contract, it has no keys by default. If you don't explicitly ",(0,r.jsx)(n.a,{href:"#add-keys",children:"add keys"})," to it or ",(0,r.jsx)(n.a,{href:"#deploy-a-contract",children:"deploy a contract"})," on creation then it will be ",(0,r.jsx)(n.a,{href:"/concepts/protocol/access-keys#locked-accounts",children:"locked"}),"."]})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h4,{id:"creating-other-accounts",children:"Creating Other Accounts"}),"\n",(0,r.jsx)(n.p,{children:"Accounts can only create immediate sub-accounts of themselves."}),"\n",(0,r.jsxs)(n.p,{children:["If your contract wants to create a ",(0,r.jsx)(n.code,{children:".mainnet"})," or ",(0,r.jsx)(n.code,{children:".testnet"})," account, then it needs to ",(0,r.jsx)(n.a,{href:"#function-call",children:"call"}),"\nthe ",(0,r.jsx)(n.code,{children:"create_account"})," method of ",(0,r.jsx)(n.code,{children:"near"})," or ",(0,r.jsx)(n.code,{children:"testnet"})," root contracts."]}),"\n",(0,r.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { NearBindgen, near, call, bytes, NearPromise } from \'near-sdk-js\'\n\nconst MIN_STORAGE: bigint = BigInt("1820000000000000000000"); //0.00182\u24c3\nconst CALL_GAS: bigint = BigInt("28000000000000");\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_account({account_id, public_key}:{account_id: String, public_key: String}) {\n    const args = bytes(JSON.stringify({ \n      "new_account_id": account_id,\n      "new_public_key": public_key \n    }))\n\n    NearPromise.new("testnet")\n    .functionCall("create_account", args, MIN_STORAGE, CALL_GAS);\n  }\n}\n'})})}),(0,r.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, Promise, Gas, Balance };\nuse serde_json::json;\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst CALL_GAS: Gas = Gas(28_000_000_000_000);\nconst MIN_STORAGE: Balance = 1_820_000_000_000_000_000_000; //0.00182\u24c3\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_account(&self, account_id: String, public_key: String){\n    let args = json!({\n                "new_account_id": account_id,\n                "new_public_key": public_key,\n              }).to_string().into_bytes().to_vec();\n\n    // Use "near" to create mainnet accounts\n    Promise::new("testnet".parse().unwrap())\n    .function_call("create_account".to_string(), args, MIN_STORAGE, CALL_GAS);\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"deploy-a-contract",children:"Deploy a Contract"}),"\n",(0,r.jsx)(n.p,{children:"When creating an account you can also batch the action of deploying a contract to it. Note that for this, you will need to pre-load the byte-code you want to deploy in your contract."}),"\n",(0,r.jsx)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,r.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst MIN_STORAGE: Balance = 1_100_000_000_000_000_000_000_000; //1.1\u24c3\nconst HELLO_CODE: &[u8] = include_bytes!("./hello.wasm");\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_hello(&self, prefix: String){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE)\n    .deploy_contract(HELLO_CODE.to_vec());\n  }\n}\n'})})})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If an account with a contract deployed does ",(0,r.jsx)(n.strong,{children:"not"})," have any access keys, this is known as a locked contract. When the account is locked, it cannot sign transactions therefore, actions can ",(0,r.jsx)(n.strong,{children:"only"})," be performed from ",(0,r.jsx)(n.strong,{children:"within"})," the contract code."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"add-keys",children:"Add Keys"}),"\n",(0,r.jsxs)(n.p,{children:["When you use actions to create a new account, the created account does not have any ",(0,r.jsx)(n.a,{href:"/concepts/protocol/access-keys",children:"access keys"}),", meaning that it ",(0,r.jsx)(n.strong,{children:"cannot sign transactions"})," (e.g. to update its contract, delete itself, transfer money)."]}),"\n",(0,r.jsx)(n.p,{children:"There are two options for adding keys to the account:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"add_access_key"}),": adds a key that can only call specific methods on a specified contract."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"add_full_access_key"}),": adds a key that has full access to the account."]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\nimport { PublicKey } from 'near-sdk-js/lib/types'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_hello({prefix, public_key}:{prefix: String, public_key: PublicKey}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n    .addFullAccessKey(public_key)\n  }\n}\n"})})}),(0,r.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance, PublicKey};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n\nconst MIN_STORAGE: Balance = 1_100_000_000_000_000_000_000_000; //1.1\u24c3\nconst HELLO_CODE: &[u8] = include_bytes!("./hello.wasm");\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_hello(&self, prefix: String, public_key: PublicKey){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE)\n    .deploy_contract(HELLO_CODE.to_vec())\n    .add_full_access_key(public_key);\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:'Notice that what you actually add is a "public key". Whoever holds its private counterpart, i.e. the private-key, will be able to use the newly access key.'}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If an account with a contract deployed does ",(0,r.jsx)(n.strong,{children:"not"})," have any access keys, this is known as a locked contract. When the account is locked, it cannot sign transactions therefore, actions can ",(0,r.jsx)(n.strong,{children:"only"})," be performed from ",(0,r.jsx)(n.strong,{children:"within"})," the contract code."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"delete-account",children:"Delete Account"}),"\n",(0,r.jsxs)(n.p,{children:["There are two scenarios in which you can use the ",(0,r.jsx)(n.code,{children:"delete_account"})," action:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["As the ",(0,r.jsx)(n.strong,{children:"last"})," action in a chain of batched actions."]}),"\n",(0,r.jsx)(n.li,{children:"To make your smart contract delete its own account."}),"\n"]}),"\n",(0,r.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { NearBindgen, near, call, NearPromise } from 'near-sdk-js'\nimport { AccountId } from 'near-sdk-js/lib/types'\n\nconst MIN_STORAGE: bigint = BigInt(\"1000000000000000000000\") // 0.001\u24c3\n\n@NearBindgen({})\nclass Contract {\n  @call({})\n  create_delete({prefix, beneficiary}:{prefix: String, beneficiary: AccountId}) {\n    const account_id = `${prefix}.${near.currentAccountId()}`\n\n    NearPromise.new(account_id)\n    .createAccount()\n    .transfer(MIN_STORAGE)\n    .deleteAccount(beneficiary)\n  }\n\n  @call({})\n  self_delete({beneficiary}:{beneficiary: AccountId}) {\n    NearPromise.new(near.currentAccountId())\n    .deleteAccount(beneficiary)\n  }\n}\n"})})}),(0,r.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::{near_bindgen, env, Promise, Balance, AccountId};\n\n#[near_bindgen]\n#[derive(Default, BorshDeserialize, BorshSerialize)]\npub struct Contract { }\n                          \nconst MIN_STORAGE: Balance = 1_000_000_000_000_000_000_000; //0.001\u24c3\n\n#[near_bindgen]\nimpl Contract {\n  pub fn create_delete(&self, prefix: String, beneficiary: AccountId){\n    let account_id = prefix + "." + &env::current_account_id().to_string();\n    Promise::new(account_id.parse().unwrap())\n    .create_account()\n    .transfer(MIN_STORAGE)\n    .delete_account(beneficiary);\n  }\n\n  pub fn self_delete(beneficiary: AccountId){\n    Promise::new(env::current_account_id())\n    .delete_account(beneficiary);\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{title:"Token Loss",type:"warning",children:(0,r.jsxs)(n.p,{children:["If the beneficiary account does not exist the funds will be ",(0,r.jsx)(n.a,{href:"/concepts/basics/token-loss",children:(0,r.jsx)(n.strong,{children:"dispersed among validators"})}),"."]})}),"\n",(0,r.jsx)(n.admonition,{title:"Token Loss",type:"warning",children:(0,r.jsxs)(n.p,{children:["Do ",(0,r.jsx)(n.strong,{children:"not"})," use ",(0,r.jsx)(n.code,{children:"delete"})," to try fund a new account. Since the account doesn't exist the tokens will be lost."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var c=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,c.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(67294),a=t(36905),c=t(12466),s=t(16550),o=t(20469),i=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,c=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(c.location.search);n.set(o,e),c.replace(Object.assign({},c.location,{search:n.toString()}))}}),[o,c])]}function g(e){var n,t,a,c,s=e.defaultValue,i=e.queryString,l=void 0!==i&&i,d=e.groupId,g=h(e),_=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:g})})),b=_[0],m=_[1],x=f({queryString:l,groupId:d}),j=x[0],y=x[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],c=t[1],[a,(0,r.useCallback)((function(e){n&&c.set(e)}),[n,c])]),N=v[0],k=v[1],w=function(){var e=null!=j?j:N;return p({value:e,tabValues:g})?e:null}();return(0,o.Z)((function(){w&&m(w)}),[w]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);m(e),y(e),k(e)}),[y,k,g]),tabValues:g}}var _=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function x(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,i=[],l=(0,c.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(l(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;t=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var c,s=i.indexOf(e.currentTarget)-1;t=null!=(c=i[s])?c:i[i.length-1]}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,c=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},c,{className:(0,a.Z)("tabs__item",b.tabItem,null==c?void 0:c.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=c.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:c.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=g(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(x,Object.assign({},e,n)),(0,m.jsx)(j,Object.assign({},e,n))]})}function v(e){var n=(0,_.Z)();return(0,m.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const a={},c=r.createContext(a);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);