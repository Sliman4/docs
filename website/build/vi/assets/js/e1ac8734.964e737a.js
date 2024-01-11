"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1812],{83497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(85893),a=n(11151),i=(n(74866),n(85162),n(77229));const s={id:"quickstart-guide",title:"Hello NEAR \ud83d\udc4b",sidebar_label:"\u2b50 Quickstart"},l=void 0,o={id:"develop/quickstart-guide",title:"Hello NEAR \ud83d\udc4b",description:"Hi! Let us guide you in starting and interacting with your first decentralized app (dApp) in NEAR: Hello NEAR.",source:"@site/../docs/2.develop/quickstart.md",sourceDirName:"2.develop",slug:"/develop/quickstart-guide",permalink:"/vi/develop/quickstart-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/quickstart.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"9 thg 12, 2023",frontMatter:{id:"quickstart-guide",title:"Hello NEAR \ud83d\udc4b",sidebar_label:"\u2b50 Quickstart"}},c={},u=[{value:"Create NEAR App",id:"create-near-app",level:2},{value:"Interacting With Hello NEAR",id:"interacting-with-hello-near",level:2},{value:"Structure of a dApp",id:"structure-of-a-dapp",level:2},{value:"Contract",id:"contract",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Hi! Let us guide you in starting and interacting with your first decentralized app (dApp) in NEAR: Hello NEAR."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Hello NEAR"})," is a friendly dApp composed by two main components:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"A smart contract that stores and retrieves a greeting message"}),"\n",(0,r.jsx)(t.li,{children:"A simple web-based frontend that displays the greeting and enables to change it."}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"create-near-app",children:"Create NEAR App"}),"\n",(0,r.jsxs)(t.p,{children:["If you already have ",(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download",children:"Node.js"})," installed, simply run:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  npx create-near-app@latest\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Use the interactive menu to set up your first project folder, we recommend you to use ",(0,r.jsx)(t.code,{children:"javascript"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Once the folder is ready, check the README. It will show you how to ",(0,r.jsx)(t.strong,{children:"build"})," and ",(0,r.jsx)(t.strong,{children:"deploy"})," the smart contract, and ",(0,r.jsx)(t.strong,{children:"start"})," the frontend."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  npm run build\n  npm start\n"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(t.p,{children:"Test it online with Gitpod"})}),(0,r.jsx)(t.p,{children:"A new browser window will open automatically with the code, give it a minute and the frontend will pop-up (make sure the pop-up window is not blocked)."}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\ud83c\udf10 JavaScript"}),(0,r.jsx)(t.th,{children:"\ud83e\udd80 Rust"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/hello-near-js.git",children:"Open in Gitpod"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/near-examples/hello-near-rs.git",children:"Open in Gitpod"})})]})})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"interacting-with-hello-near",children:"Interacting With Hello NEAR"}),"\n",(0,r.jsx)(t.p,{children:"Once the app starts you will see the screen below. Now go ahead and sign in with your NEAR account. If you don't have one, you will be able to create one in the moment."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"img",src:n(39491).Z+"",width:"959",height:"540"}),"\n",(0,r.jsx)(t.em,{children:"Frontend of Hello NEAR"})]}),"\n",(0,r.jsx)(t.p,{children:"Once logged in, change the greeting and see how our Hello NEAR app greets you!"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"structure-of-a-dapp",children:"Structure of a dApp"}),"\n",(0,r.jsx)(t.p,{children:"Now that you understand what the dApp does, let us take a closer look to its structure:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The frontend code lives in the ",(0,r.jsx)(t.code,{children:"/frontend"})," folder."]}),"\n",(0,r.jsxs)(t.li,{children:["The smart contract code is in the ",(0,r.jsx)(t.code,{children:"/contract"})," folder."]}),"\n",(0,r.jsxs)(t.li,{children:["The compiled smart contract can be found in ",(0,r.jsx)(t.code,{children:"/out/main.wasm"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The account's name in which the contract was deployed is in ",(0,r.jsx)(t.code,{children:"/neardev/dev-account"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"contract",children:"Contract"}),"\n",(0,r.jsxs)(t.p,{children:["The contract presents 2 methods: ",(0,r.jsx)(t.code,{children:"set_greeting"})," and ",(0,r.jsx)(t.code,{children:"get_greeting"}),". The first one stores a ",(0,r.jsx)(t.code,{children:"String"})," in the contract's parameter ",(0,r.jsx)(t.code,{children:"message"}),", while the second one retrieves it. By default, the contract returns the message ",(0,r.jsx)(t.code,{children:'"Hello"'}),"."]}),"\n",(0,r.jsxs)(i.O2,{children:[(0,r.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-js/blob/master/contract/src/contract.ts",start:"3",end:"18"})}),(0,r.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/hello-near-rs/blob/main/contract/src/lib.rs",start:"9",end:"43"})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsxs)(t.p,{children:["When writing smart contracts it is very important to test all methods exhaustively. This\nproject has both ",(0,r.jsx)(t.strong,{children:"unit"})," and ",(0,r.jsx)(t.strong,{children:"integration"})," tests. Before digging in their code,\ngo ahead and execute them using the command ",(0,r.jsx)(t.code,{children:"npm run test"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"unit-test",children:"Unit test"}),"\n",(0,r.jsxs)(t.p,{children:["Unit tests check individual functions in the smart contract. They are written in the\nsame language than the smart contract. If your contract is in Rust you will find the tests at the bottom of\neach ",(0,r.jsx)(t.code,{children:".rs"})," file."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/hello-near-rs/blob/main/contract/src/lib.rs",start:"46",end:"58"})})}),"\n",(0,r.jsx)(t.h3,{id:"integration-test",children:"Integration test"}),"\n",(0,r.jsxs)(t.p,{children:["Integration tests can be written in both Javascript and Rust. They work by deploying the contract in a ",(0,r.jsx)(t.strong,{children:"sandbox"})," and executing methods on it.\nIn this way, integration tests simulate interactions from users in a realistic scenario.\nYou will find the integration tests for ",(0,r.jsx)(t.code,{children:"hello-near"})," in ",(0,r.jsx)(t.code,{children:"integration-tests/"}),"."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(i.Ey,{fname:"main.ava.ts",url:"https://github.com/near-examples/hello-near-js/blob/master/integration-tests/src/main.ava.ts",start:"32",end:"43"})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,r.jsx)(t.p,{children:"That's it for our first quickstart tutorial. You have now seen a fully functional contract with a minimal user interface and testing."}),"\n",(0,r.jsxs)(t.p,{children:["Go ahead and check other ",(0,r.jsx)(t.a,{href:"/tutorials/examples/guest-book",children:"examples"})," or proceed straight to the ",(0,r.jsx)(t.a,{href:"/vi/develop/contracts/anatomy",children:"Develop section"})," to know how to write your own contract."]}),"\n",(0,r.jsxs)(t.p,{children:["If you have any questions, do not hesitate in joining us on ",(0,r.jsx)(t.a,{href:"https://near.chat",children:"Discord"}),". We regularly host Office Hours, in which you can join our voice channel and ask questions."]}),"\n",(0,r.jsx)(t.p,{children:"Happy coding!"})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),i=n(12466),s=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,s.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function f(e){var t,n,a,i,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,f=h(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),v=m[0],j=m[1],x=g({queryString:c,groupId:d}),b=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=w[0],A=w[1],E=function(){var e=null!=b?b:k;return p({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){E&&j(E)}),[E]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),A(e)}),[y,A,f]),tabValues:f}}var m=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var i,s=o.indexOf(e.currentTarget)-1;n=null!=(i=o[s])?i:o[o.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(x,Object.assign({},e,t)),(0,j.jsx)(b,Object.assign({},e,t))]})}function w(e){var t=(0,m.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>u,O2:()=>o,SQ:()=>c});n(67294);var r=n(74866),a=n(85162),i=n(95665),s=n.n(i),l=n(85893);function o(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,l.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,l.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,i=n.end,s=n.fname;if(e.type===u)return u({url:r,start:a,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,l.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,l.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,l.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,n=e.start,r=e.end,a=e.language,i=e.fname,o=t+"#";return n&&r&&(o+="L"+n+"-L"+r+"#"),(0,l.jsx)(s(),{language:a,fname:i,children:o})}},39491:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hello-near-887a4eb29d41c071631cfe2fb9247bf1.png"}}]);