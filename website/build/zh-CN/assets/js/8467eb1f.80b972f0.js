"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3109],{35978:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=e(85893),c=e(11151);const o={},a=void 0,s={id:"primitives/nft/smart-contract/query",title:"query",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/nft/smart-contract/query.md",sourceDirName:"7.primitives/nft/smart-contract",slug:"/primitives/nft/smart-contract/query",permalink:"/zh-CN/primitives/nft/smart-contract/query",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/nft/smart-contract/query.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{}},i={},l=[];function u(t){const n={code:"code",pre:"pre",...(0,c.a)(),...t.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'// Validator interface, for cross-contract calls\n#[ext_contract(ext_nft_contract)]\ntrait ExternalNftContract {\n  fn nft_token(&self, token_id: TokenId) -> Promise;\n}\n\n// Implement the contract structure\n#[near_bindgen]\nimpl Contract {\n  pub fn nft_token(&self, token_id: TokenId) -> Promise {\n    let promise = ext_nft_contract::ext(self.nft_contract.clone())\n      .nft_token(token_id);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .nft_token_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn nft_token_callback(&self, #[callback_result] call_result: Result<Token, PromiseError>) -> Option<Token> {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting NFT contract");\n      return None;\n    }\n\n    // Return the token data\n    let token_data: Token = call_result.unwrap();\n    return Some(token_data);\n  }\n}\n'})})}function d(t={}){const{wrapper:n}={...(0,c.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>s,a:()=>a});var r=e(67294);const c={},o=r.createContext(c);function a(t){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:a(t.components),r.createElement(o.Provider,{value:n},t.children)}}}]);