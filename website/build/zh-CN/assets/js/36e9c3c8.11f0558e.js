"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4598],{37883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(85893),a=n(11151),s=(n(74866),n(85162),n(77229));const l={id:"hello-near",title:"Hello NEAR"},i=void 0,o={id:"tutorials/examples/hello-near",title:"Hello NEAR",description:"Hello NEAR! is a friendly decentralized App that stores a greeting message. It is one of the simplest smart contracts you can create in NEAR, and the perfect gateway to introduce yourself in the world of smart contracts.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/examples/hello-near.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/hello-near",permalink:"/zh-CN/tutorials/examples/hello-near",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/hello-near.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{id:"hello-near",title:"Hello NEAR"}},c={},d=[{value:"Starting Hello NEAR",id:"starting-hello-near",level:2},{value:"Gitpod",id:"gitpod",level:4},{value:"Create Near App (node)",id:"create-near-app-node",level:4},{value:"Interacting With Hello NEAR",id:"interacting-with-hello-near",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Hello NEAR!"})," is a friendly decentralized App that stores a greeting message. It is one of the simplest smart contracts you can create in NEAR, and the perfect gateway to introduce yourself in the world of smart contracts."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"img",src:n(99859).Z+"",width:"959",height:"204"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"starting-hello-near",children:"Starting Hello NEAR"}),"\n",(0,r.jsx)(t.p,{children:"You have two options to start Hello NEAR:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Recommended:"})," use the app through Gitpod (a web-based interactive environment)"]}),"\n",(0,r.jsxs)(t.li,{children:["Start the project locally by using ",(0,r.jsx)(t.code,{children:"create-near-app"}),", our node-based utility."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"gitpod",children:"Gitpod"}),"\n",(0,r.jsx)(t.p,{children:"Hello NEAR is available in gitpod. When selecting one, a new tab will open in your browser with a web-based IDE. Give it a minute to compile and deploy the contract, and then a frontend will pop-up for you to interact with the app (make sure the pop-up window is not blocked)."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\ud83c\udf10 JavaScript"}),(0,r.jsx)(t.th,{children:"\ud83e\udd80 Rust"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/hello-near-js.git",children:(0,r.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/hello-near-rust.git",children:(0,r.jsx)("img",{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"create-near-app-node",children:"Create Near App (node)"}),"\n",(0,r.jsxs)(t.p,{children:["Hello NEAR can be created locally with the help of ",(0,r.jsx)(t.code,{children:"create-near-app"}),". Follow the snippet bellow to create a local project."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx create-near-app@latest\n"})}),"\n",(0,r.jsx)(t.p,{children:"and follow the instructions that appear on the screen."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"interacting-with-hello-near",children:"Interacting With Hello NEAR"}),"\n",(0,r.jsx)(t.p,{children:"Go ahead and login with your NEAR account. If you don't have one, you will be able to create one in the moment. Once logged in, change the greeting and see how our Hello NEAR app greets you!"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"img",src:n(39491).Z+"",width:"959",height:"540"})," ",(0,r.jsx)(t.em,{children:"Frontend of Hello NEAR"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"structure-of-a-dapp",children:"Structure of a dApp"}),"\n",(0,r.jsx)(t.p,{children:"Now that you understand what the dApp does, let us take a closer look to its structure:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The frontend code lives in the ",(0,r.jsx)(t.code,{children:"/frontend"})," folder."]}),"\n",(0,r.jsxs)(t.li,{children:["The smart contract code is in the ",(0,r.jsx)(t.code,{children:"/contract"})," folder."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"contract",children:"Contract"}),"\n",(0,r.jsxs)(t.p,{children:["The contract presents 2 methods: ",(0,r.jsx)(t.code,{children:"set_greeting"})," and ",(0,r.jsx)(t.code,{children:"get_greeting"}),". The first one stores a ",(0,r.jsx)(t.code,{children:"string"})," in the contract's parameter ",(0,r.jsx)(t.code,{children:"greeting"}),", while the second one retrieves it. By default, the contract returns the message ",(0,r.jsx)(t.code,{children:'"Hello"'}),"."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/src/contract.ts",start:"4",end:"18"})}),(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"21",end:"33"})})]}),"\n",(0,r.jsx)(t.h3,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsxs)(t.p,{children:["The frontend is composed by a single HTML file (",(0,r.jsx)(t.code,{children:"/index.html"}),"). This file defines the components displayed in the screen."]}),"\n",(0,r.jsxs)(t.p,{children:["The website's logic lives in ",(0,r.jsx)(t.code,{children:"/assets/js/index.js"}),", which communicates with the contract through ",(0,r.jsx)(t.code,{children:"/near-interface.js"}),". You will notice in ",(0,r.jsx)(t.code,{children:"/assets/js/index.js"})," the following code:"]}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/index.js",start:"11",end:"21"})})}),"\n",(0,r.jsxs)(t.p,{children:["It indicates our app, when it starts, to check if the user is already logged in and execute either ",(0,r.jsx)(t.code,{children:"signedInFlow()"})," or ",(0,r.jsx)(t.code,{children:"signedOutFlow()"}),"."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsxs)(t.p,{children:["When writing smart contracts it is very important to test all methods exhaustively. In this project you have two types of tests: unit and integration. Before digging in them, go ahead and perform the tests present in the dApp through the command ",(0,r.jsx)(t.code,{children:"yarn test"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"unit-test",children:"Unit test"}),"\n",(0,r.jsx)(t.p,{children:"Unit tests check individual functions in the smart contract. Right now only rust implements unit testing."}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"43",end:"61"})})}),"\n",(0,r.jsx)(t.h3,{id:"integration-test",children:"Integration test"}),"\n",(0,r.jsxs)(t.p,{children:["Integration tests are generally written in javascript. They automatically deploy your contract and execute methods on it. In this way, integration tests simulate interactions from users in a realistic scenario. You will find the integration tests for ",(0,r.jsx)(t.code,{children:"hello-near"})," in ",(0,r.jsx)(t.code,{children:"integration-tests/"}),"."]}),"\n",(0,r.jsx)(s.O2,{children:(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(s.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/sandbox-ts/src/main.ava.ts",start:"33",end:"44"})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,r.jsxs)(t.p,{children:["A nice way to learn is by trying to expand the contract. Modify it so that you store one greeting message ",(0,r.jsx)(t.strong,{children:"per user"}),". For this, you will need to use knowledge from the ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/environment/",children:"environment"})," and ",(0,r.jsx)(t.a,{href:"/zh-CN/develop/contracts/storage",children:"storage"})," sections. You can also use the ",(0,r.jsx)(t.a,{href:"/zh-CN/tutorials/examples/guest-book",children:"guest book"})," example, since it does something similar."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),s=n(12466),l=n(16550),i=n(20469),o=n(91980),c=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function m(e){var t,n,a,s,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,u=e.groupId,m=h(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:m})})),x=f[0],v=f[1],j=g({queryString:c,groupId:u}),b=j[0],y=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),N=w[0],A=w[1],E=function(){var e=null!=b?b:N;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){E&&v(E)}),[E]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),A(e)}),[y,A,m]),tabValues:m}}var f=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function j(e){var t=e.className,n=e.block,r=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(c(t),l(a))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;n=null!=(s=o[l])?s:o[o.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(j,Object.assign({},e,t)),(0,v.jsx)(b,Object.assign({},e,t))]})}function w(e){var t=(0,f.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>o,SQ:()=>c});n(67294);var r=n(74866),a=n(85162),s=n(95665),l=n.n(s),i=n(85893);function o(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,i.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,i.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,l=n.fname;if(e.type===d)return d({url:r,start:a,end:s,language:t,fname:l});return e}(e,n)})),1==t.length?(0,i.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,i.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,i.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,o=t+"#";return n&&r&&(o+="L"+n+"-L"+r+"#"),(0,i.jsx)(l(),{language:a,fname:s,children:o})}},99859:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hello-near-banner-af016d03e81a65653c9230b95a05fe4a.png"},39491:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hello-near-887a4eb29d41c071631cfe2fb9247bf1.png"}}]);