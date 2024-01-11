"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5521],{12837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(85893),a=n(11151),s=n(74866),i=n(85162),o=n(77229);const l={id:"count-near",title:"Count on NEAR"},c=void 0,d={id:"tutorials/examples/count-near",title:"Count on NEAR",description:"Our counter example is a friendly decentralized app that stores a number and exposes methods to increment,",source:"@site/../docs/3.tutorials/examples/count-near.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/count-near",permalink:"/zh-CN/tutorials/examples/count-near",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/count-near.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"2023\u5e7412\u67089\u65e5",frontMatter:{id:"count-near",title:"Count on NEAR"},sidebar:"integrate",previous:{title:"Web Frontend",permalink:"/zh-CN/develop/integrate/frontend"},next:{title:"Donation",permalink:"/zh-CN/tutorials/examples/donation"}},u={},h=[{value:"Starting the Counter",id:"starting-the-counter",level:2},{value:"Interacting With the Counter",id:"interacting-with-the-counter",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Our counter example is a friendly decentralized app that stores a number and exposes methods to ",(0,r.jsx)(t.code,{children:"increment"}),",\n",(0,r.jsx)(t.code,{children:"decrement"}),", and ",(0,r.jsx)(t.code,{children:"reset"})," it."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(82193).Z+"",width:"935",height:"248"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"starting-the-counter",children:"Starting the Counter"}),"\n",(0,r.jsx)(t.p,{children:"You have two options to start the Counter:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Recommended:"})," use the app through Gitpod (a web-based interactive environment)"]}),"\n",(0,r.jsx)(t.li,{children:"Clone the project locally ."}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(i.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Gitpod"}),(0,r.jsx)(t.th,{children:"Clone locally"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/js-counter.git",children:(0,r.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,r.jsxs)(t.td,{children:["\ud83c\udf10 ",(0,r.jsx)(t.code,{children:"https://github.com/near-examples/js-counter.git"})]})]})})]})}),(0,r.jsx)(i.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Gitpod"}),(0,r.jsx)(t.th,{children:"Clone locally"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/rust-counter.git",children:(0,r.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,r.jsxs)(t.td,{children:["\ud83e\udd80 ",(0,r.jsx)(t.code,{children:"https://github.com/near-examples/rust-counter.git"})]})]})})]})})]}),"\n",(0,r.jsx)(t.p,{children:"If you choose Gitpod, a new browser window will open automatically with the code. Give it a minute, and the frontend will pop up (ensure the pop-up window is not blocked)."}),"\n",(0,r.jsxs)(t.p,{children:["If you are running the app locally, enter the directory where you cloned it and use ",(0,r.jsx)(t.code,{children:"yarn"})," to install dependencies, and ",(0,r.jsx)(t.code,{children:"yarn start"})," to start it."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd counter\nyarn\nyarn deploy\nyarn start\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Your contract will then be ",(0,r.jsx)(t.strong,{children:"compiled"})," and ",(0,r.jsx)(t.strong,{children:"deployed"})," to an ",(0,r.jsx)(t.strong,{children:"account"})," in the ",(0,r.jsx)(t.code,{children:"testnet"})," network. When done, a browser window should open."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"interacting-with-the-counter",children:"Interacting With the Counter"}),"\n",(0,r.jsxs)(t.p,{children:["Go ahead and login with your NEAR account. If you don't have one, you will be able to create one in the moment. Once logged in, use the ",(0,r.jsx)(t.code,{children:"+"})," and ",(0,r.jsx)(t.code,{children:"-"})," buttons to increase and decrease the counter. Then, use the Gameboy buttons to reset it and make the counter blink an eye!"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"img",src:n(12770).Z+"",width:"935",height:"526"}),"\n",(0,r.jsx)(t.em,{children:"Frontend of the Counter"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"structure-of-a-dapp",children:"Structure of a dApp"}),"\n",(0,r.jsx)(t.p,{children:"Now that you understand what the dApp does, let us take a closer look to its structure:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The frontend code lives in the ",(0,r.jsx)(t.code,{children:"/frontend"})," folder."]}),"\n",(0,r.jsxs)(t.li,{children:["The smart contract code is in the ",(0,r.jsx)(t.code,{children:"/contract"})," folder."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"contract",children:"Contract"}),"\n",(0,r.jsxs)(t.p,{children:["The contract presents 4 methods: ",(0,r.jsx)(t.code,{children:"get_num"}),", ",(0,r.jsx)(t.code,{children:"increment"}),", ",(0,r.jsx)(t.code,{children:"decrement"}),", and ",(0,r.jsx)(t.code,{children:"reset"}),". The method ",(0,r.jsx)(t.code,{children:"get_num"})," retrieves the current value, and the rest modify it."]}),"\n",(0,r.jsxs)(o.O2,{children:[(0,r.jsx)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(o.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/js-counter/blob/master/contract/src/contract.ts",start:"3",end:"29"})}),(0,r.jsx)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"5",end:"36"})})]}),"\n",(0,r.jsx)(t.h3,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsxs)(t.p,{children:["The frontend is composed by a single HTML file (",(0,r.jsx)(t.code,{children:"/index.html"}),"). This file defines the components displayed in the screen."]}),"\n",(0,r.jsxs)(t.p,{children:["The website's logic lives in ",(0,r.jsx)(t.code,{children:"/assets/js/index.js"}),", which communicates with the contract through ",(0,r.jsx)(t.code,{children:"/near-interface.js"}),". You will notice in ",(0,r.jsx)(t.code,{children:"/assets/js/index.js"})," the following code:"]}),"\n",(0,r.jsx)(o.O2,{children:(0,r.jsx)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/js-counter/blob/master/frontend/index.js",start:"10",end:"21"})})}),"\n",(0,r.jsxs)(t.p,{children:["It indicates our app, when it starts, to check if the user is already logged in and execute either ",(0,r.jsx)(t.code,{children:"signedInFlow()"})," or ",(0,r.jsx)(t.code,{children:"signedOutFlow()"}),"."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsxs)(t.p,{children:["When writing smart contracts it is very important to test all methods exhaustively. In this\nproject you have two types of tests: unit and integration. Before digging in them,\ngo ahead and perform the tests present in the dApp through the command ",(0,r.jsx)(t.code,{children:"yarn test"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"unit-test",children:"Unit test"}),"\n",(0,r.jsx)(t.p,{children:"Unit tests check individual functions in the smart contract. Right now only Rust implements unit testing."}),"\n",(0,r.jsx)(o.O2,{children:(0,r.jsx)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs",start:"48",end:"69"})})}),"\n",(0,r.jsx)(t.h3,{id:"integration-test",children:"Integration test"}),"\n",(0,r.jsxs)(t.p,{children:["Integration tests are generally written in javascript. They automatically deploy a new\ncontract and execute methods on it. In this way, integration tests simulate interactions\nfrom users in a realistic scenario. You will find the integration tests for the ",(0,r.jsx)(t.code,{children:"counter"}),"\nin ",(0,r.jsx)(t.code,{children:"tests/integration-tests"}),"."]}),"\n",(0,r.jsx)(o.O2,{children:(0,r.jsx)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(o.Ey,{fname:"main.test.js",url:"https://github.com/near-examples/js-counter/blob/master/integration-tests/src/main.ava.ts",start:"37",end:"61"})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,r.jsxs)(t.p,{children:["A nice way to learn is by trying to expand the contract. Modify it by adding a parameter to ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"}),",\nso the user can choose by how much to change the value. For this, you will need to use knowledge from the ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/anatomy",children:"anatomy"}),"\nand ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/storage",children:"storage"})," sections."]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),s=n(12466),i=n(16550),o=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function x(e){var t,n,a,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,x=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:x})})),j=g[0],f=g[1],v=m({queryString:c,groupId:u}),b=v[0],y=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),I=w[0],k=w[1],C=function(){var e=null!=b?b:I;return p({value:e,tabValues:x})?e:null}();return(0,o.Z)((function(){C&&f(C)}),[C]),{selectedValue:j,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),k(e)}),[y,k,x]),tabValues:x}}var g=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),i(a))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;n=null!=(s=l[i])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=x(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(v,Object.assign({},e,t)),(0,f.jsx)(b,Object.assign({},e,t))]})}function w(e){var t=(0,g.Z)();return(0,f.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>l,SQ:()=>c});n(67294);var r=n(74866),a=n(85162),s=n(95665),i=n.n(s),o=n(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,i=n.fname;if(e.type===d)return d({url:r,start:a,end:s,language:t,fname:i});return e}(e,n)})),1==t.length?(0,o.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,l=t+"#";return n&&r&&(l+="L"+n+"-L"+r+"#"),(0,o.jsx)(i(),{language:a,fname:s,children:l})}},82193:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/count-on-near-banner-2df2978ef988be400aafd5e0f99878be.png"},12770:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/count-on-near-4c3bca89fb498ba9e02547eeb320d02a.png"}}]);