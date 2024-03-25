"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3999],{20017:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=a(85893),r=a(11151),s=a(74866),i=a(85162),o=a(77229);const l={id:"chain-signatures",title:"Cross-Chain Signatures"},u=void 0,c={id:"abstraction/chain-signatures",title:"Cross-Chain Signatures",description:"Chain Signatures unlock the ability for a single account to transact across multiple blockchain protocols, giving ownership of cross-chain accounts, data, and assets to one NEAR account.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/8.abstraction/chain-signatures.md",sourceDirName:"8.abstraction",slug:"/abstraction/chain-signatures",permalink:"/ko/abstraction/chain-signatures",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/8.abstraction/chain-signatures.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",frontMatter:{id:"chain-signatures",title:"Cross-Chain Signatures"},sidebar:"build",previous:{title:"FastAuth (Email Login)",permalink:"/ko/tools/fastauth-sdk"},next:{title:"Wallet Chain Key Rules",permalink:"/ko/abstraction/chain-signatures/wallet"}},d={},h=[{value:"Create the Payload",id:"create-the-payload",level:2},{value:"Request &amp; Reconstruct a Signature",id:"request--reconstruct-a-signature",level:2},{value:"Relaying the Signature",id:"relaying-the-signature",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Chain Signatures unlock the ability for a single account to transact across multiple blockchain protocols, giving ownership of cross-chain accounts, data, and assets to one NEAR account."}),"\n",(0,t.jsxs)(n.p,{children:["In this document we cover the steps necessary to sign a transaction for another chain, we recommend you to read our ",(0,t.jsx)(n.a,{href:"/ko/concepts/abstraction/chain-signatures",children:(0,t.jsx)(n.strong,{children:"overview of Chain Signatures"})})," before, as well as some of its ",(0,t.jsx)(n.a,{href:"/ko/concepts/abstraction/signatures/use-cases",children:(0,t.jsx)(n.strong,{children:"use cases"})}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["See our ",(0,t.jsx)(n.a,{href:"https://github.com/near-examples/near-multichain",children:"web-app example"})," and ",(0,t.jsx)(n.a,{href:"https://test.near.social/md1.testnet/widget/chainsig-sign-eth-tx",children:"component example"})," showing how a NEAR account can create an Ethereum testnet transaction."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"create-the-payload",children:"Create the Payload"}),"\n",(0,t.jsx)(n.p,{children:"The first step is to use Chain Signatures is to construct a payload (transaction, message, data, etc.) for the target blockchain platform. This variates depending on the target blockchain, but in general, it's a hash of the message or transaction to be signed."}),"\n",(0,t.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,t.jsx)(i.Z,{value:"\u039e Ethereum",children:(0,t.jsx)(o.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/ethereum.js",start:"18",end:"40"})}),(0,t.jsx)(i.Z,{value:"\u20bf Bitcoin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'console.log("Coming soon...")\n'})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"request--reconstruct-a-signature",children:"Request & Reconstruct a Signature"}),"\n",(0,t.jsxs)(n.p,{children:["Once a payload is created and ready to sign, a signature request is made by calling ",(0,t.jsx)(n.code,{children:"sign"})," on the ",(0,t.jsx)(n.a,{href:"/ko/concepts/abstraction/chain-signatures#2-signature-request",children:"MPC smart contract"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The method expects the ",(0,t.jsx)(n.code,{children:"payload"})," to be signed for the target blockchain, and a ",(0,t.jsx)(n.code,{children:"path"})," representing the account that should be used to sign the payload (learn more ",(0,t.jsx)(n.a,{href:"/ko/concepts/abstraction/chain-signatures#2-signature-request",children:"here"}),")."]}),"\n",(0,t.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,t.jsx)(i.Z,{value:"\u039e Ethereum",children:(0,t.jsx)(o.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/index.js",start:"49",end:"54"})}),(0,t.jsx)(i.Z,{value:"\u20bf Bitcoin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'console.log("Coming soon...")\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["The contract will take some time to respond, as it needs to wait for the ",(0,t.jsx)(n.a,{href:"/ko/concepts/abstraction/chain-signatures#3-mpc-signing-service",children:(0,t.jsx)(n.code,{children:"MPC signing service"})}),". Once finished, the result will not be the signature on itself, but the elements needed to reconstruct the signature."]}),"\n",(0,t.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,t.jsx)(i.Z,{value:"\u039e Ethereum",children:(0,t.jsx)(o.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/ethereum.js",start:"49",end:"57"})}),(0,t.jsx)(i.Z,{value:"\u20bf Bitcoin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'console.log("Coming soon...")\n'})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"relaying-the-signature",children:"Relaying the Signature"}),"\n",(0,t.jsx)(n.p,{children:"Once we have reconstructed the signature, we can relay it to the corresponding network. This will once again vary depending on the target blockchain."}),"\n",(0,t.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,t.jsx)(i.Z,{value:"\u039e Ethereum",children:(0,t.jsx)(o.Ey,{fname:"index.js",language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/ethereum.js",start:"43",end:"47"})}),(0,t.jsx)(i.Z,{value:"\u20bf Bitcoin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'console.log("Coming soon...")\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>i});a(67294);var t=a(36905);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function i(e){var n=e.children,a=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>w});var t=a(67294),r=a(36905),s=a(12466),i=a(16550),o=a(20469),l=a(91980),u=a(67392),c=a(50012);function d(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function h(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:r});return[(0,l._X)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function m(e){var n,a,r,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=h(e),f=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:m})})),b=f[0],v=f[1],j=p({queryString:u,groupId:d}),x=j[0],y=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,c.Nk)(n),r=a[0],s=a[1],[r,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],C=w[1],E=function(){var e=null!=x?x:k;return g({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){E&&v(E)}),[E]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!g({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),C(e)}),[y,C,m]),tabValues:m}}var f=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function j(e){var n=e.className,a=e.block,t=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,a=l.indexOf(n),r=o[a].value;r!==t&&(u(n),i(r))},d=function(e){var n,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,r=l.indexOf(e.currentTarget)+1;a=null!=(t=l[r])?t:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;a=null!=(s=l[i])?s:l[l.length-1]}null==(n=a)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:o.map((function(e){var n=e.value,a=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function x(e){var n=e.lazy,a=e.children,r=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(j,Object.assign({},e,n)),(0,v.jsx)(x,Object.assign({},e,n))]})}function w(e){var n=(0,f.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,a)=>{a.d(n,{Ey:()=>c,O2:()=>l,SQ:()=>u});a(67294);var t=a(74866),r=a(85162),s=a(95665),i=a.n(s),o=a(85893);function l(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,o.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,o.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var n=e.children,a=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var a=e.props,t=(a.children,a.url),r=a.start,s=a.end,i=a.fname;if(e.type===c)return c({url:t,start:r,end:s,language:n,fname:i});return e}(e,a)})),1==n.length?(0,o.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,o.jsx)(t.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,o.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function c(e){var n=e.url,a=e.start,t=e.end,r=e.language,s=e.fname,l=n+"#";return a&&t&&(l+="L"+a+"-L"+t+"#"),(0,o.jsx)(i(),{language:r,fname:s,children:l})}}}]);