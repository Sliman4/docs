"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1493],{99834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=t(85893),r=t(11151),i=(t(74866),t(85162),t(71183),t(1841)),s=t.n(i),l=t(46610);const c={id:"functions",title:"External Interface",hide_table_of_contents:!0},o=void 0,u={id:"build/smart-contracts/anatomy/functions",title:"External Interface",description:"Smart contracts expose functions so users can interact with them. There are different types of functions including read-only, private and payable.",source:"@site/../docs/2.build/2.smart-contracts/anatomy/functions.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/functions",permalink:"/ko/build/smart-contracts/anatomy/functions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/functions.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Bokobza",lastUpdatedAt:1717616263e3,frontMatter:{id:"functions",title:"External Interface",hide_table_of_contents:!0},sidebar:"build",previous:{title:"\uc0c1\ud0dc & \uc790\ub8cc\uad6c\uc870",permalink:"/ko/build/smart-contracts/anatomy/storage"},next:{title:"SDK Types",permalink:"/ko/build/smart-contracts/anatomy/types"}},d={},h=[{value:"Contract&#39;s Interface",id:"contracts-interface",level:3},{value:"Initialization Functions",id:"initialization-functions",level:3},{value:"<code>@initialize({ privateFunction: true })</code>",id:"initialize-privatefunction-true-",level:4},{value:"<code>#[init]</code>",id:"init",level:4},{value:"State Changing Functions",id:"state-changing-functions",level:3},{value:"<code>@call</code>",id:"call",level:4},{value:"<code>mut &amp;self</code>",id:"mut-self",level:4},{value:"Read-Only Functions",id:"read-only-functions",level:3},{value:"<code>@view</code>",id:"view",level:4},{value:"<code>&amp;self</code>",id:"self",level:4},{value:"Private Functions",id:"private-functions",level:3},{value:"<code>decorator({privateFunction: true})</code>",id:"decoratorprivatefunction-true",level:4},{value:"[#private]",id:"private",level:4},{value:"Payable Functions",id:"payable-functions",level:3},{value:"<code>@call({payableFunction: true})</code>",id:"callpayablefunction-true",level:4},{value:"[#payable]",id:"payable",level:4},{value:"Internal Functions",id:"internal-functions",level:3},{value:"Internal Functions",id:"internal-functions-1",level:3},{value:"Pure Functions",id:"pure-functions",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Smart contracts expose functions so users can interact with them. There are different types of functions including ",(0,a.jsx)(n.code,{children:"read-only"}),", ",(0,a.jsx)(n.code,{children:"private"})," and ",(0,a.jsx)(n.code,{children:"payable"}),"."]}),"\n",(0,a.jsxs)(l.z8,{languages:["js","rust"],children:[(0,a.jsxs)(l.gO,{highlights:{js:"14-17,20-39,42-44,47-49",rust:"22-30,33-58,60-62,64-66"},fname:"auction",children:[(0,a.jsx)(n.h3,{id:"contracts-interface",children:"Contract's Interface"}),(0,a.jsx)(n.p,{children:"All public functions in the contract are part of its interface. They can be called by anyone, and are the only way to interact with the contract."})]}),(0,a.jsxs)(l.gO,{highlights:{js:"13-17",rust:"22-30"},fname:"auction",children:[(0,a.jsx)(n.h3,{id:"initialization-functions",children:"Initialization Functions"}),(0,a.jsxs)(n.p,{children:["A contract can opt to have an initialization function. If present, this function must be called before any other to ",(0,a.jsx)(n.a,{href:"./storage.md",children:"initialize the contract"}),"."]})]}),(0,a.jsxs)(l.gO,{highlights:{js:"13"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"initialize-privatefunction-true-",children:(0,a.jsx)(n.code,{children:"@initialize({ privateFunction: true })"})}),(0,a.jsxs)(n.p,{children:["The initialization function is marked with the ",(0,a.jsx)(n.code,{children:"@initialize"})," decorator."]})]}),(0,a.jsxs)(l.gO,{highlights:{rust:"20"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"init",children:(0,a.jsx)(n.code,{children:"#[init]"})}),(0,a.jsxs)(n.p,{children:["Read-only functions are those that take an ",(0,a.jsx)(n.strong,{children:"immutable"})," reference to ",(0,a.jsx)(n.code,{children:"self"})," in Rust."]})]}),(0,a.jsxs)(l.gO,{highlights:{js:"14-17",rust:"33-58"},fname:"auction",children:[(0,a.jsx)(n.h3,{id:"state-changing-functions",children:"State Changing Functions"}),(0,a.jsxs)(n.p,{children:["The functions that modify the ",(0,a.jsx)(n.a,{href:"./storage.md",children:"state"})," or perform ",(0,a.jsx)(n.a,{href:"./actions.md",children:"actions"})," need to be called by a user with a NEAR account, since a transaction is required to execute them."]})]}),(0,a.jsxs)(l.gO,{highlights:{js:"19"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"call",children:(0,a.jsx)(n.code,{children:"@call"})}),(0,a.jsxs)(n.p,{children:["State changing functions are marked with the ",(0,a.jsx)(n.code,{children:"@call"})," decorator."]})]}),(0,a.jsxs)(l.gO,{highlights:{rust:"33"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"mut-self",children:(0,a.jsx)(n.code,{children:"mut &self"})}),(0,a.jsxs)(n.p,{children:["State changing functions are those that take a ",(0,a.jsx)(n.strong,{children:"mutable"})," reference to ",(0,a.jsx)(n.code,{children:"self"})," in Rust."]})]}),(0,a.jsx)(l.gO,{highlights:{js:"22,26",rust:"36,42"},fname:"auction",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," The SDK provides ",(0,a.jsx)(n.a,{href:"./environment.md",children:"contextual information"}),", such as which account is calling the function, or what time it is."]})}),(0,a.jsxs)(l.gO,{highlights:{js:"42-44,47-49",rust:"60-62,64-66"},fname:"auction",children:[(0,a.jsx)(n.h3,{id:"read-only-functions",children:"Read-Only Functions"}),(0,a.jsx)(n.p,{children:"Contract's functions can be read-only, meaning they don't modify the state. Calling them is free for everyone, and does not require to have a NEAR account."})]}),(0,a.jsxs)(l.gO,{highlights:{js:"41,46"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"view",children:(0,a.jsx)(n.code,{children:"@view"})}),(0,a.jsxs)(n.p,{children:["Read-only functions are marked with the ",(0,a.jsx)(n.code,{children:"@view"})," decorator in TS/JS."]})]}),(0,a.jsxs)(l.gO,{highlights:{rust:"60,64"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"self",children:(0,a.jsx)(n.code,{children:"&self"})}),(0,a.jsxs)(n.p,{children:["Read-only functions are those that take an ",(0,a.jsx)(n.strong,{children:"immutable"})," reference to ",(0,a.jsx)(n.code,{children:"self"})," in Rust."]})]}),(0,a.jsxs)(l.gO,{highlights:{js:"13",rust:"21"},fname:"auction",children:[(0,a.jsx)(n.h3,{id:"private-functions",children:"Private Functions"}),(0,a.jsxs)(n.p,{children:["Many times you will want to have functions that ",(0,a.jsx)(n.strong,{children:"are exposed"})," as part of the contract's interface, but ",(0,a.jsx)(n.strong,{children:"should not be called directly"})," by users."]}),(0,a.jsxs)(n.p,{children:["Besides initialization functions, ",(0,a.jsx)(n.a,{href:"./crosscontract.md",children:"callbacks from cross-contract calls"})," should always be ",(0,a.jsx)(n.code,{children:"private"}),"."]}),(0,a.jsxs)(n.p,{children:["These functions are marked as ",(0,a.jsx)(n.code,{children:"private"})," in the contract's code, and can only be called by the contract itself."]})]}),(0,a.jsxs)(l.gO,{highlights:{js:"13"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"decoratorprivatefunction-true",children:(0,a.jsx)(n.code,{children:"decorator({privateFunction: true})"})}),(0,a.jsxs)(n.p,{children:["Private functions are marked by setting ",(0,a.jsx)(n.code,{children:"privateFunction: true"})," in the ",(0,a.jsx)(n.code,{children:"@call"})," or ",(0,a.jsx)(n.code,{children:"@initialization"})," decorators."]})]}),(0,a.jsxs)(l.gO,{highlights:{rust:"21"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"private",children:"[#private]"}),(0,a.jsxs)(n.p,{children:["Private functions are marked using the ",(0,a.jsx)(n.code,{children:"#[private]"})," macro in Rust."]})]}),(0,a.jsxs)(l.gO,{highlights:{js:"19,25",rust:"32,41"},fname:"auction",children:[(0,a.jsx)(n.h3,{id:"payable-functions",children:"Payable Functions"}),(0,a.jsxs)(n.p,{children:["By default, functions will panic if the user attaches NEAR Tokens to the call. Functions that accept NEAR Tokens must be marked as ",(0,a.jsx)(n.code,{children:"payable"}),"."]}),(0,a.jsxs)(n.p,{children:["Within the function, the user will have access to the ",(0,a.jsx)(n.a,{href:"./environment.md",children:"attached deposit"}),"."]})]}),(0,a.jsxs)(l.gO,{highlights:{js:"19,25"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"callpayablefunction-true",children:(0,a.jsx)(n.code,{children:"@call({payableFunction: true})"})}),(0,a.jsxs)(n.p,{children:["Payable functions are marked by setting ",(0,a.jsx)(n.code,{children:"payableFunction: true"})," in the ",(0,a.jsx)(n.code,{children:"@call"})," decorator."]})]}),(0,a.jsxs)(l.gO,{highlights:{rust:"32,41"},fname:"auction",children:[(0,a.jsx)(n.h4,{id:"payable",children:"[#payable]"}),(0,a.jsxs)(n.p,{children:["Payable functions are marked using the ",(0,a.jsx)(n.code,{children:"#[payable]"})," macro in Rust."]})]}),(0,a.jsxs)(l.gO,{highlights:{js:"3-5"},fname:"example",children:[(0,a.jsx)(n.h3,{id:"internal-functions",children:"Internal Functions"}),(0,a.jsx)(n.p,{children:"All the functions we covered so far are part of the interface, meaning they can be called by an external actor."}),(0,a.jsxs)(n.p,{children:["However, contracts can also have private internal functions - such as helper or utility functions - that are ",(0,a.jsx)(n.strong,{children:"not exposed"})," to the outside world."]}),(0,a.jsxs)(n.p,{children:["To create internal private methods in a JS contract, simply omit the ",(0,a.jsx)(n.code,{children:"@view"})," and ",(0,a.jsx)(n.code,{children:"@call"})," decorators."]})]}),(0,a.jsxs)(l.gO,{highlights:{rust:"5-7"},fname:"example",children:[(0,a.jsx)(n.h3,{id:"internal-functions-1",children:"Internal Functions"}),(0,a.jsx)(n.p,{children:"All the functions we covered so far are part of the interface, meaning they can be called by an external actor."}),(0,a.jsxs)(n.p,{children:["However, contracts can also have private internal functions - such as helper or utility functions - that are ",(0,a.jsx)(n.strong,{children:"not exposed"})," to the outside world."]}),(0,a.jsxs)(n.p,{children:["To create internal private methods in a Rust contract, do not declare them as public (",(0,a.jsx)(n.code,{children:"pub fn"}),")."]})]}),(0,a.jsxs)(l.gO,{highlights:{rust:"9-11,13-15"},fname:"example",children:[(0,a.jsx)(n.h3,{id:"pure-functions",children:"Pure Functions"}),(0,a.jsx)(n.p,{children:"Pure functions are a special kind of function that do not require to access data from the state."}),(0,a.jsx)(n.p,{children:"They are useful to return hardcoded values on the contract."})]}),(0,a.jsx)(l.$B,{language:"js",fname:"auction",url:"https://github.com/near-examples/auction-examples/blob/main/contract-ts/src/contract.ts",start:"2",end:"51"}),(0,a.jsx)(l.$B,{language:"rust",fname:"auction",url:"https://github.com/near-examples/auction-examples/blob/main/contract-rs/src/lib.rs",start:"2",end:"68"}),(0,a.jsx)(s(),{language:"js",fname:"example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"@NearBindgen({})\nclass Contract {\n  helper_function(params... ){\n    // this function cannot be called from the outside\n  }\n\n  @view({})\n  interface_view(params...){\n    // this function can be called from outside\n  }\n\n  @call({privateFunction: true}){\n    // this function can be called from outside, but\n    // only by the contract's account\n  }\n}\n"})})}),(0,a.jsx)(s(),{language:"rust",fname:"example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rs",children:'const SOME_VALUE: u64 = 8;\n\n#[near]\nimpl MyContractStructure {\n  fn internal_helper(mut &self, params... ){\n    // this function cannot be called from the outside\n  }\n\n  pub fn public_log(/* Parameters here */) {\n      near_sdk::log!("inside log message");\n  }\n\n  pub fn return_static_u64() -> u64 {\n      SOME_VALUE\n  }\n}\n'})})})]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),i=t(12466),s=t(16550),l=t(20469),c=t(91980),o=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,s.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,c._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function m(e){var n,t,r,i,s=e.defaultValue,c=e.queryString,o=void 0!==c&&c,d=e.groupId,m=h(e),p=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:m})})),v=p[0],x=p[1],b=g({queryString:o,groupId:d}),j=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=w[0],S=w[1],E=function(){var e=null!=j?j:k;return f({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){E&&x(E)}),[E]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),S(e)}),[y,S,m]),tabValues:m}}var p=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function b(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,l=e.tabValues,c=[],o=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==a&&(o(n),s(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,s=c.indexOf(e.currentTarget)-1;t=null!=(i=c[s])?i:c[c.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},i,{className:(0,r.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,r=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(b,Object.assign({},n,e)),(0,x.jsx)(j,Object.assign({},n,e))]})}function w(e){var n=(0,p.Z)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},46610:(e,n,t)=>{t.d(n,{gO:()=>m,z8:()=>g,$B:()=>p,rV:()=>v,rC:()=>x,h7:()=>f});var a=t(98906),r=t(67294),i=t(1841),s=t.n(i),l=t(71183),c=t(74866),o=t(85162),u=t(85893);const d=function(e){var n=e.props,t=n.blocks,a=n.files,i=n.languages,s=n.language,l=n.setLanguage,d=(0,r.useState)(t[0].highlight),h=d[0],g=d[1],m=(0,r.useState)(0),p=m[0],b=m[1],j=(0,r.useState)(t[0].fname),y=j[0],w=j[1],k=function(e){b(e),g(t[e].highlight),w(t[e].fname)};return(0,r.useEffect)((function(){var e=document.querySelector('div[fname="'+y+'"] .theme-code-block-highlighted-line'),n=document.querySelector('div[fname="'+y+'"] .prism-code');if(e){var t=e.offsetTop-n.clientHeight/2;n.scrollTo({top:t,behavior:"smooth"})}}),[y,h]),(0,r.useEffect)((function(){k(0);var e=document.querySelector(".navbar"),n=document.getElementById("files");n.style.top=e.clientHeight+"px";var a=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+s).forEach((function(n){return n.style.maxHeight="calc(100vh - "+e.clientHeight+"px - "+a.clientHeight+"px)"}));var r=document.getElementById("block0").getBoundingClientRect().top,i=document.getElementById("block"+(t.length-1)).getBoundingClientRect().bottom,l=Math.abs(i-r),c=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,o=document.getElementById("block"+(t.length-1)).getBoundingClientRect().top;document.getElementById("extra-padding").style.height=n.clientHeight-Math.abs(o-i)-e.clientHeight+"px";var u=function(){for(var n=window.scrollY-c+e.clientHeight,a=window.scrollY?n/l:0,r=0,i=0,s=0;s<t.length;s++){if(r=i,i+=document.getElementById("block"+s).clientHeight/l,a>r&&a<i){k(s);break}}};return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[t,a,s]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"row code-explain",children:[(0,u.jsxs)("div",{className:"col-blocks col",id:"codeblocks",children:[(0,u.jsx)(c.Z,{className:"file-tabs",selectedValue:s,selectValue:function(e){return l(e)},children:i.map((function(e){return(0,u.jsx)(o.Z,{value:e,label:f[e]})}))}),t.map((function(e,n){return(0,u.jsx)(v,{selected:p===n,index:n,text:e.text,activateFn:k})})),(0,u.jsx)("div",{id:"extra-padding",style:{width:"100%"}})]}),(0,u.jsx)("div",{className:"col-files col",children:(0,u.jsx)("div",{id:"files",style:{position:"sticky"},children:(0,u.jsx)(c.Z,{className:"file-tabs",selectedValue:y||t[0].fname,selectValue:function(e){return w(e)},children:a.map((function(e){return(0,u.jsx)(o.Z,{value:e.fname,children:(0,u.jsx)(x,Object.assign({},e,{lineNumber:h}))})}))})})})]})})};const h=function(e){var n=e.props,t=n.blocks,a=n.files,i=n.languages,s=n.language,l=n.setLanguage,d=(0,r.useState)(t[0].highlight),h=d[0],g=d[1],m=(0,r.useState)(0),p=m[0],b=m[1],j=(0,r.useState)(t[0].fname),y=j[0],w=j[1],k=function(e){b(e),g(t[e].highlight),w(t[e].fname)};return(0,r.useEffect)((function(){var e=document.querySelector('div[fname="'+y+'"] .theme-code-block-highlighted-line'),n=document.querySelector('div[fname="'+y+'"] .prism-code');e&&n.scrollTo({top:e.offsetTop,behavior:"smooth"})}),[y,h]),(0,r.useEffect)((function(){k(0);var e=document.querySelector(".navbar"),n=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+s).forEach((function(e){return e.style.maxHeight="calc(33vh - "+n.clientHeight+"px)"}));var a=document.getElementById("block0").getBoundingClientRect().top,r=document.getElementById("block"+(t.length-1)).getBoundingClientRect().bottom,i=Math.abs(r-a),l=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,c=function(){for(var n=window.scrollY-l+e.clientHeight,a=document.getElementById("files"),r=window.scrollY?n/(i+a.clientHeight):0,s=0,c=0,o=0;o<t.length;o++){if(s=c,c+=document.getElementById("block"+o).clientHeight/i,r>s&&r<c){k(o);break}}};return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}}),[t,a,s]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"code-explain",style:{position:"relative"},children:[(0,u.jsxs)("div",{id:"codeblocks",children:[(0,u.jsx)(c.Z,{className:"file-tabs",selectedValue:s,selectValue:function(e){return l(e)},children:i.map((function(e){return(0,u.jsx)(o.Z,{value:e,label:f[e]})}))}),t.map((function(e,n){return(0,u.jsx)(v,{selected:p===n,index:n,text:e.text,activateFn:k})}))]}),(0,u.jsx)("div",{id:"files",style:{height:"33vh",position:"sticky",bottom:0,backgroundColor:"var(--ifm-background-color)"},children:(0,u.jsx)(c.Z,{className:"file-tabs",selectedValue:y||t[0].fname,selectValue:function(e){return w(e)},children:a.map((function(e){return(0,u.jsx)(o.Z,{value:e.fname,children:(0,u.jsx)(x,Object.assign({},e,{lineNumber:h}))})}))})})]})})};var f={rust:"\ud83e\udd80 RS",js:"\ud83c\udf10 JS",ts:"\ud83c\udf10 TS"};function g(e){var n=e.children,t=e.languages,i=(0,r.useState)(t[0]),s=i[0],l=i[1],c=(0,r.useState)([]),o=c[0],g=c[1],m=(0,r.useState)([]),p=m[0],v=m[1],x=(0,r.useState)(!0),b=x[0],j=x[1];if(!t.every((function(e){return e in f})))throw new Error("languages must be one of ['rust', 'js', 'ts']");var y=function(e){localStorage.setItem("docusaurus.tab.code-tabs",e),l(e)};return(0,r.useEffect)((function(){var e=localStorage.getItem("docusaurus.tab.code-tabs");e&&t.includes(e)&&l(e),j(window.innerWidth>768)}),[]),(0,r.useEffect)((function(){for(var e,t=[],r=[],i=(0,a.Z)(n);!(e=i()).done;){var l=e.value;l.props.highlights&&s in l.props.highlights&&t.push({text:l.props.children,highlight:l.props.highlights[s],fname:l.props.fname}),s===l.props.language&&r.push(Object.assign({},l.props))}g(t),v(r)}),[s]),o.length&&p.length?b?(0,u.jsx)(d,{props:{blocks:o,files:p,languages:t,language:s,setLanguage:y}}):(0,u.jsx)(h,{props:{blocks:o,files:p,languages:t,language:s,setLanguage:y}}):"Loading..."}function m(e){return e.children}function p(e){return e.children}function v(e){var n=e.selected,t=e.text,a=e.index,r=e.activateFn,i=n?"block-selected":"";return(0,u.jsx)("div",{className:"block "+i+" padding--sm",id:"block"+a,onClick:function(){return r(a)},children:t},a)}function x(e){var n=e.url,t=e.start,a=e.end,r=e.language,i=e.fname,c=e.lineNumber,o=e.children;return n?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{fname:i,children:(0,u.jsx)(l.Ey,{url:n,start:t,end:a,language:r,fname:i,metastring:"{"+c+"}"})})}):(0,u.jsx)("div",{fname:i,children:(0,u.jsx)(s(),{language:r,metastring:"{"+c+"}",children:o.props.children.props.children})})}},71183:(e,n,t)=>{t.d(n,{O2:()=>g,Ey:()=>p,SQ:()=>m});var a=t(67294),r=t(74866),i=t(85162),s=t(74165),l=t(15861),c=t(1841),o=t.n(c),u=t(85893);function d(){return(d=(0,l.Z)((0,s.Z)().mark((function e(n,t,a){var r,i,l,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(n+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(n,r),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=r.split("\n"),t=t?Number(t)-1:0,a=a?Number(a):l.length,l=l.slice(t,a),c=l.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(c)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,r=e.end,i=e.language,s=e.fname,l=e.metastring,c=(0,a.useState)("Loading..."),h=c[0],f=c[1];return(0,a.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],a=(n[1],new URL(t).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(n),a=function(e,n,t){return d.apply(this,arguments)}(e,t,r);a.then((function(e){return f(e)}))})),(0,u.jsxs)("div",{fname:s,children:[(0,u.jsx)(o(),{language:i,metastring:l+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function g(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(i.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,i=t.end,s=t.fname;if(e.type===p)return p({url:a,start:r,end:i,language:n,fname:s});return e}(e,t)})),1==n.length?(0,u.jsx)(i.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,u.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(i.Z,{value:n,label:e.props.fname,children:e})}))})}function p(e){var n=e.url,t=e.start,a=e.end,r=e.language,i=e.fname,s=e.metastring;return h({url:n,start:t,end:a,language:r,fname:i,metastring:s})}}}]);