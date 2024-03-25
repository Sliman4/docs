"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[333],{19162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(85893),r=a(11151),s=(a(74866),a(85162),a(77229));const l={id:"advanced-xcc",title:"Complex Cross Contract Call"},c=void 0,i={id:"tutorials/examples/advanced-xcc",title:"Complex Cross Contract Call",description:"This example presents 3 instances of complex cross-contract calls. Particularly, it shows:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/examples/advanced-xcc.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/advanced-xcc",permalink:"/zh-CN/tutorials/examples/advanced-xcc",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/advanced-xcc.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{id:"advanced-xcc",title:"Complex Cross Contract Call"},sidebar:"tutorials",previous:{title:"Factory",permalink:"/zh-CN/tutorials/examples/factory"},next:{title:"Self Upgrade & State Migration",permalink:"/zh-CN/tutorials/examples/update-contract-migrate-state"}},o={},u=[{value:"Batch Actions",id:"batch-actions",level:2},{value:"Getting the Last Response",id:"getting-the-last-response",level:4},{value:"Calling Multiple Contracts",id:"calling-multiple-contracts",level:2},{value:"Getting All Responses",id:"getting-all-responses",level:4},{value:"Multiple Calls - Same Result Type",id:"multiple-calls---same-result-type",level:2},{value:"Getting All Responses",id:"getting-all-responses-1",level:4}];function h(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This example presents 3 instances of complex cross-contract calls. Particularly, it shows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"How to batch multiple function calls to a same contract."}),"\n",(0,n.jsx)(t.li,{children:"How to call multiple contracts in parallel, each returning a different type."}),"\n",(0,n.jsx)(t.li,{children:"Different ways of handling the responses in the callback."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"batch-actions",children:"Batch Actions"}),"\n",(0,n.jsxs)(t.p,{children:["You can aggregate multiple actions directed towards one same contract into a batched transaction. Methods called this way are executed sequentially, with the added benefit that, if one fails then they ",(0,n.jsx)(t.strong,{children:"all get reverted"}),"."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs",start:"7",end:"19"})}),(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"67",end:"80"})})]}),"\n",(0,n.jsx)(t.h4,{id:"getting-the-last-response",children:"Getting the Last Response"}),"\n",(0,n.jsxs)(t.p,{children:["In this case, the callback has access to the value returned by the ",(0,n.jsx)(t.strong,{children:"last action"})," from the chain."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs",start:"21",end:"34"})}),(0,n.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,n.jsx)(s.Ey,{fname:"callback",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"82",end:"93"}),(0,n.jsx)(s.Ey,{fname:"promiseResult",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"127",end:"145"})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"calling-multiple-contracts",children:"Calling Multiple Contracts"}),"\n",(0,n.jsxs)(t.p,{children:["A contract can call multiple other contracts. This creates multiple transactions that execute all in parallel. If one of them fails the rest ",(0,n.jsx)(t.strong,{children:"ARE NOT REVERTED"}),"."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs",start:"18",end:"56"})}),(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"95",end:"111"})})]}),"\n",(0,n.jsx)(t.h4,{id:"getting-all-responses",children:"Getting All Responses"}),"\n",(0,n.jsxs)(t.p,{children:["In this case, the callback has access to an ",(0,n.jsx)(t.strong,{children:"array of responses"}),", which have either the value returned by each call, or an error message."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs",start:"58",end:"91"})}),(0,n.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,n.jsx)(s.Ey,{fname:"callback",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"113",end:"125"}),(0,n.jsx)(s.Ey,{fname:"promiseResult",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"127",end:"145"})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"multiple-calls---same-result-type",children:"Multiple Calls - Same Result Type"}),"\n",(0,n.jsxs)(t.p,{children:["This example is a particular case of the previous one (",(0,n.jsx)(t.a,{href:"#2-calling-multiple-contracts",children:"2. Calling Multiple Contracts"}),"). It simply showcases a different way to check the results by directly accessing the ",(0,n.jsx)(t.code,{children:"promise_result"})," array."]}),"\n",(0,n.jsx)(t.p,{children:"In this case, we call multiple contracts that will return the same type:"}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs",start:"18",end:"31"})}),(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"95",end:"111"})})]}),"\n",(0,n.jsx)(t.h4,{id:"getting-all-responses-1",children:"Getting All Responses"}),"\n",(0,n.jsxs)(t.p,{children:["In this case, the callback again has access to an ",(0,n.jsx)(t.strong,{children:"array of responses"}),", which we can iterate checking the results."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs",start:"33",end:"61"})}),(0,n.jsxs)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:[(0,n.jsx)(s.Ey,{fname:"callback",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"113",end:"125"}),(0,n.jsx)(s.Ey,{fname:"promiseResult",url:"https://github.com/garikbesson/cross-contract-hello-js/blob/batch_actions/contract/src/contract.ts",start:"127",end:"145"})]})]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var n=a(36905);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function l(e){var t=e.children,a=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),r=a(36905),s=a(12466),l=a(16550),c=a(20469),i=a(91980),o=a(67392),u=a(50012);function h(e){var t,a;return null!=(t=null==(a=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function d(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(a);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,s=(0,l.k6)(),c=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:r});return[(0,i._X)(c),(0,n.useCallback)((function(e){if(c){var t=new URLSearchParams(s.location.search);t.set(c,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[c,s])]}function m(e){var t,a,r,s,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,h=e.groupId,m=d(e),g=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:m})})),f=g[0],v=g[1],x=b({queryString:o,groupId:h}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),a=(0,u.Nk)(t),r=a[0],s=a[1],[r,(0,n.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],S=w[1],C=function(){var e=null!=j?j:k;return p({value:e,tabValues:m})?e:null}();return(0,c.Z)((function(){C&&v(C)}),[C]),{selectedValue:f,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),S(e)}),[y,S,m]),tabValues:m}}var g=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function x(e){var t=e.className,a=e.block,n=e.selectedValue,l=e.selectValue,c=e.tabValues,i=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,a=i.indexOf(t),r=c[a].value;r!==n&&(o(t),l(r))},h=function(e){var t,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var n,r=i.indexOf(e.currentTarget)+1;a=null!=(n=i[r])?n:i[0];break;case"ArrowLeft":var s,l=i.indexOf(e.currentTarget)-1;a=null!=(s=i[l])?s:i[i.length-1]}null==(t=a)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:c.map((function(e){var t=e.value,a=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return i.push(e)},onKeyDown:h,onClick:u},s,{className:(0,r.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===t}),children:null!=a?a:t}),t)}))})}function j(e){var t=e.lazy,a=e.children,r=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===r}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(x,Object.assign({},e,t)),(0,v.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,g.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(t))}},77229:(e,t,a)=>{a.d(t,{Ey:()=>u,O2:()=>i,SQ:()=>o});a(67294);var n=a(74866),r=a(85162),s=a(95665),l=a.n(s),c=a(85893);function i(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(n.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,n=(a.children,a.url),r=a.start,s=a.end,l=a.fname;if(e.type===u)return u({url:n,start:r,end:s,language:t,fname:l});return e}(e,a)})),1==t.length?(0,c.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(n.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,a=e.start,n=e.end,r=e.language,s=e.fname,i=t+"#";return a&&n&&(i+="L"+a+"-L"+n+"#"),(0,c.jsx)(l(),{language:r,fname:s,children:i})}}}]);