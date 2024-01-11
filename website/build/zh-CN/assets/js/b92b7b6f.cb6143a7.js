"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3324],{76562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=a(85893),r=a(11151),l=(a(74866),a(85162),a(77229));const s={id:"advanced-xcc",title:"Complex Cross Contract Call"},c=void 0,i={id:"tutorials/examples/advanced-xcc",title:"Complex Cross Contract Call",description:"This example presents 3 instances of complex cross-contract calls. Particularly, it shows:",source:"@site/../docs/3.tutorials/examples/advanced-xcc.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/advanced-xcc",permalink:"/zh-CN/tutorials/examples/advanced-xcc",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/advanced-xcc.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"2023\u5e7412\u67089\u65e5",frontMatter:{id:"advanced-xcc",title:"Complex Cross Contract Call"},sidebar:"contracts",previous:{title:"Factory",permalink:"/zh-CN/tutorials/examples/factory"},next:{title:"Self Upgrade & State Migration",permalink:"/zh-CN/tutorials/examples/update-contract-migrate-state"}},u={},o=[{value:"Batch Actions",id:"batch-actions",level:2},{value:"Getting the Last Response",id:"getting-the-last-response",level:4},{value:"Calling Multiple Contracts",id:"calling-multiple-contracts",level:2},{value:"Getting All Responses",id:"getting-all-responses",level:4},{value:"Multiple Calls - Same Result Type",id:"multiple-calls---same-result-type",level:2},{value:"Getting All Responses",id:"getting-all-responses-1",level:4}];function d(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This example presents 3 instances of complex cross-contract calls. Particularly, it shows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"How to batch multiple method calls to a same contract."}),"\n",(0,n.jsx)(t.li,{children:"How to call multiple contracts in parallel, each returning a different type."}),"\n",(0,n.jsx)(t.li,{children:"Different ways of handling the responses in the callback."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"batch-actions",children:"Batch Actions"}),"\n",(0,n.jsxs)(t.p,{children:["You can aggregate multiple actions directed towards one same contract into a batched transaction.\nMethods called this way are executed sequentially, with the added benefit that, if one fails then\nthey ",(0,n.jsx)(t.strong,{children:"all get reverted"}),"."]}),"\n",(0,n.jsx)(l.O2,{children:(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs",start:"7",end:"19"})})}),"\n",(0,n.jsx)(t.h4,{id:"getting-the-last-response",children:"Getting the Last Response"}),"\n",(0,n.jsxs)(t.p,{children:["In this case, the callback has access to the value returned by the ",(0,n.jsx)(t.strong,{children:"last\naction"})," from the chain."]}),"\n",(0,n.jsx)(l.O2,{children:(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs",start:"21",end:"34"})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"calling-multiple-contracts",children:"Calling Multiple Contracts"}),"\n",(0,n.jsxs)(t.p,{children:["A contract can call multiple other contracts. This creates multiple transactions that execute\nall in parallel. If one of them fails the rest ",(0,n.jsx)(t.strong,{children:"ARE NOT REVERTED"}),"."]}),"\n",(0,n.jsx)(l.O2,{children:(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs",start:"18",end:"56"})})}),"\n",(0,n.jsx)(t.h4,{id:"getting-all-responses",children:"Getting All Responses"}),"\n",(0,n.jsxs)(t.p,{children:["In this case, the callback has access to an ",(0,n.jsx)(t.strong,{children:"array of responses"}),", which have either the\nvalue returned by each call, or an error message."]}),"\n",(0,n.jsx)(l.O2,{children:(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs",start:"58",end:"91"})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"multiple-calls---same-result-type",children:"Multiple Calls - Same Result Type"}),"\n",(0,n.jsxs)(t.p,{children:["This example is a particular case of the previous one (",(0,n.jsx)(t.a,{href:"#2-calling-multiple-contracts",children:"2. Calling Multiple Contracts"}),").\nIt simply showcases a different way to check the results by directly accessing the ",(0,n.jsx)(t.code,{children:"promise_result"})," array."]}),"\n",(0,n.jsx)(t.p,{children:"In this case, we call multiple contracts that will return the same type:"}),"\n",(0,n.jsx)(l.O2,{children:(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs",start:"18",end:"31"})})}),"\n",(0,n.jsx)(t.h4,{id:"getting-all-responses-1",children:"Getting All Responses"}),"\n",(0,n.jsxs)(t.p,{children:["In this case, the callback again has access to an ",(0,n.jsx)(t.strong,{children:"array of responses"}),", which we can iterate checking the\nresults."]}),"\n",(0,n.jsx)(l.O2,{children:(0,n.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs",start:"33",end:"61"})})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var n=a(36905);const r={tabItem:"tabItem_Ymn6"};var l=a(85893);function s(e){var t=e.children,a=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),r=a(36905),l=a(12466),s=a(16550),c=a(20469),i=a(91980),u=a(67392),o=a(50012);function d(e){var t,a;return null!=(t=null==(a=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function h(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,l=(0,s.k6)(),c=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:r});return[(0,i._X)(c),(0,n.useCallback)((function(e){if(c){var t=new URLSearchParams(l.location.search);t.set(c,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[c,l])]}function f(e){var t,a,r,l,s=e.defaultValue,i=e.queryString,u=void 0!==i&&i,d=e.groupId,f=h(e),v=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:f})})),g=v[0],b=v[1],x=m({queryString:u,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,o.Nk)(t),r=a[0],l=a[1],[r,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=w[0],k=w[1],I=function(){var e=null!=j?j:C;return p({value:e,tabValues:f})?e:null}();return(0,c.Z)((function(){I&&b(I)}),[I]),{selectedValue:g,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),k(e)}),[y,k,f]),tabValues:f}}var v=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function x(e){var t=e.className,a=e.block,n=e.selectedValue,s=e.selectValue,c=e.tabValues,i=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var t=e.currentTarget,a=i.indexOf(t),r=c[a].value;r!==n&&(u(t),s(r))},d=function(e){var t,a=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var n,r=i.indexOf(e.currentTarget)+1;a=null!=(n=i[r])?n:i[0];break;case"ArrowLeft":var l,s=i.indexOf(e.currentTarget)-1;a=null!=(l=i[s])?l:i[i.length-1]}null==(t=a)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:c.map((function(e){var t=e.value,a=e.label,l=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:o},l,{className:(0,r.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===t}),children:null!=a?a:t}),t)}))})}function j(e){var t=e.lazy,a=e.children,r=e.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var s=l.find((function(e){return e.props.value===r}));return s?(0,n.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(x,Object.assign({},e,t)),(0,b.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,v.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,a)=>{a.d(t,{Ey:()=>o,O2:()=>i,SQ:()=>u});a(67294);var n=a(74866),r=a(85162),l=a(95665),s=a.n(l),c=a(85893);function i(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(n.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,n=(a.children,a.url),r=a.start,l=a.end,s=a.fname;if(e.type===o)return o({url:n,start:r,end:l,language:t,fname:s});return e}(e,a)})),1==t.length?(0,c.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(n.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function o(e){var t=e.url,a=e.start,n=e.end,r=e.language,l=e.fname,i=t+"#";return a&&n&&(i+="L"+a+"-L"+n+"#"),(0,c.jsx)(s(),{language:r,fname:l,children:i})}}}]);