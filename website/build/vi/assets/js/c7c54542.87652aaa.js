"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5258],{96801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(85893),r=n(11151),o=n(74866),s=n(85162);const i={id:"prototyping",sidebar_label:"Rapid Prototyping",title:"Upgrading Contracts: Rapid Prototyping"},c="Rapid Prototyping",l={id:"sdk/js/building/prototyping",title:"Upgrading Contracts: Rapid Prototyping",description:"When you change the interface of a contract and re-deploy it, you may see this error:",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/js/building/prototyping.md",sourceDirName:"sdk/js/building",slug:"/sdk/js/building/prototyping",permalink:"/vi/sdk/js/building/prototyping",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/building/prototyping.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"28 thg 2, 2024",frontMatter:{id:"prototyping",sidebar_label:"Rapid Prototyping",title:"Upgrading Contracts: Rapid Prototyping"},sidebar:"tools",previous:{title:"Basic Instructions",permalink:"/vi/sdk/js/building/basics"},next:{title:"Reproducible Builds",permalink:"/vi/sdk/js/building/reproducible-builds"}},u={},d=[{value:"Why does this happen?",id:"why-does-this-happen",level:3},{value:"How can you avoid such errors?",id:"how-can-you-avoid-such-errors",level:3},{value:"Rapid Prototyping: Delete Everything All The Time",id:"rapid-prototyping-delete-everything-all-the-time",level:2},{value:"1. Deploying on a new account each time",id:"1-deploying-on-a-new-account-each-time",level:3},{value:"2. Deleting &amp; Recreating Contract Account",id:"2-deleting--recreating-contract-account",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"rapid-prototyping",children:"Rapid Prototyping"}),"\n",(0,a.jsx)(t.p,{children:"When you change the interface of a contract and re-deploy it, you may see this error:"}),"\n",(0,a.jsx)(t.p,{children:"Cannot deserialize the contract state."}),"\n",(0,a.jsx)(t.h3,{id:"why-does-this-happen",children:"Why does this happen?"}),"\n",(0,a.jsx)(t.p,{children:"When your contract is executed, the NEAR Runtime reads the serialized state from disk and attempts to load it using current contract code. When your code changes but the serialized state stays the same, it can't figure out how to do this."}),"\n",(0,a.jsx)(t.h3,{id:"how-can-you-avoid-such-errors",children:"How can you avoid such errors?"}),"\n",(0,a.jsxs)(t.p,{children:["When you're still in the Research & Development phase, building a prototype and deploying it locally or on ",(0,a.jsx)(t.a,{href:"/vi/concepts/basics/networks",children:"testnet"}),", you can just delete all previous contract state when you make a breaking change. See below for a couple ways to do this."]}),"\n",(0,a.jsxs)(t.p,{children:["When you're ready to deploy a more stable contract, there are a couple of ",(0,a.jsx)(t.a,{href:"/vi/develop/upgrade#migrating-the-state",children:"production strategies"}),' that will help you update the contract state without deleting it all. And once your contract graduates from "trusted mode" (when maintainers control a ',(0,a.jsx)(t.a,{href:"/concepts/basics/accounts/access-keys",children:"Full Access key"}),") to community-governed mode (no more Full Access keys), you can set up your contract to ",(0,a.jsx)(t.a,{href:"/vi/develop/upgrade#programmatic-update",children:"upgrade itself"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"rapid-prototyping-delete-everything-all-the-time",children:"Rapid Prototyping: Delete Everything All The Time"}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to delete all account state:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Deploying on a new account each time"}),"\n",(0,a.jsx)(t.li,{children:"Deleting & recreating contract account"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For both cases, let's consider the following example."}),"\n",(0,a.jsxs)(t.p,{children:["Let's say you deploy ",(0,a.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/blob/263c9695ab7bb853ced12886c4b3f8663070d900/examples/src/status-message-collections.js#L10-L42",children:"a JS status message contract"})," contract to testnet, then call it with:"]}),"\n",(0,a.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call [contract] set_status \'{"message": "lol"}\' --accountId you.testnet\nnear view [contract] get_status \'{"account_id": "you.testnet"}\'\n'})})}),(0,a.jsx)(s.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-transaction [contract] set_status json-args '{\"message\": \"lol\"}' prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as you.testnet network-config testnet sign-with-keychain send\n\nnear contract call-function as-read-only [contract] get_status text-args '{\"account_id\": \"you.testnet\"}' network-config testnet now\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["This will return the message that you set with the call to ",(0,a.jsx)(t.code,{children:"set_status"}),", in this case ",(0,a.jsx)(t.code,{children:'"lol"'}),"."]}),"\n",(0,a.jsx)(t.p,{children:"At this point the contract is deployed and has some state."}),"\n",(0,a.jsxs)(t.p,{children:["Now let's say you change the contract to store two kinds of data for each account, a status message and a tagline. You can add to the contract code a ",(0,a.jsx)(t.code,{children:"LookupMap"})," for both status message and another one for the tagline, both indexed by the account ID."]}),"\n",(0,a.jsxs)(t.p,{children:["You build & deploy the contract again, thinking that maybe because the new ",(0,a.jsx)(t.code,{children:"taglines"})," LookupMap has the same prefix as the old ",(0,a.jsx)(t.code,{children:"records"})," LookupMap (the prefix is ",(0,a.jsx)(t.code,{children:"a"}),", set by ",(0,a.jsx)(t.code,{children:'new LookupMap("a"'}),"), the tagline for ",(0,a.jsx)(t.code,{children:"you.testnet"})," should be ",(0,a.jsx)(t.code,{children:'"lol"'}),". But when you ",(0,a.jsx)(t.code,{children:"near view"}),' the contract, you get the "Cannot deserialize" message. What to do?']}),"\n",(0,a.jsx)(t.h3,{id:"1-deploying-on-a-new-account-each-time",children:"1. Deploying on a new account each time"}),"\n",(0,a.jsxs)(t.p,{children:["When first getting started with a new project, the fastest way to deploy a contract is ",(0,a.jsx)(t.a,{href:"/vi/tools/near-cli#near-create-account",children:"creating an account"})," and ",(0,a.jsx)(t.a,{href:"/vi/tools/near-cli#near-deploy",children:"deploying the contract"})," into it using ",(0,a.jsx)(t.code,{children:"NEAR CLI"}),"."]}),"\n",(0,a.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"  near create-account <account-id> --useFaucet\n  near deploy <account-id> ./path/to/compiled.wasm\n"})})}),(0,a.jsx)(s.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near account create-account sponsor-by-faucet-service <my-new-dev-account>.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nnear contract deploy <my-new-dev-account>.testnet use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"This does a few things:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Creates a new testnet account pre-funded with 10N from the faucet"}),"\n",(0,a.jsxs)(t.li,{children:["Stores the private key for this account in the ",(0,a.jsx)(t.code,{children:"~/.near-credentials"})," folder"]}),"\n",(0,a.jsx)(t.li,{children:"Deploys your contract code to this account"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"2-deleting--recreating-contract-account",children:"2. Deleting & Recreating Contract Account"}),"\n",(0,a.jsx)(t.p,{children:"Another option to start from scratch is to delete the account and recreate it."}),"\n",(0,a.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"near-cli",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Delete sub-account"',children:"near delete <accountId> <beneficiaryId>\n"})})}),(0,a.jsx)(s.Z,{value:"near-cli-rs",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Delete sub-account"',children:"near account delete-account app-name.you.testnet beneficiary you.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["This sends all funds still on the ",(0,a.jsx)(t.code,{children:"<accountId>"})," account to ",(0,a.jsx)(t.code,{children:"<beneficiaryId>"})," and deletes the contract that had been deployed to it, including all contract state."]}),"\n",(0,a.jsx)(t.p,{children:"Now you create the sub-account and deploy to it again using the commands above, and it will have empty state like it did the first time you deployed it."})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),o=n(12466),s=n(16550),i=n(20469),c=n(91980),l=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,c._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function f(e){var t,n,r,o,s=e.defaultValue,c=e.queryString,l=void 0!==c&&c,d=e.groupId,f=h(e),y=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:f})})),m=y[0],b=y[1],v=g({queryString:l,groupId:d}),j=v[0],x=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=w[0],I=w[1],N=function(){var e=null!=j?j:k;return p({value:e,tabValues:f})?e:null}();return(0,i.Z)((function(){N&&b(N)}),[N]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),I(e)}),[x,I,f]),tabValues:f}}var y=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function v(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,i=e.tabValues,c=[],l=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==a&&(l(t),s(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var o,s=c.indexOf(e.currentTarget)-1;n=null!=(o=c[s])?o:c[c.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},o,{className:(0,r.Z)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function x(e){var t=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,Object.assign({},e,t)),(0,b.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,y.Z)();return(0,b.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(67294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);