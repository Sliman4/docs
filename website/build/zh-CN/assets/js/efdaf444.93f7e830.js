"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7424],{9481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(85893),r=n(11151),i=(n(74866),n(85162),n(71183),n(46610));const s={id:"storage",title:"State",sidebar_label:"State (Storage)",hide_table_of_contents:!0},o=void 0,l={id:"build/smart-contracts/anatomy/storage",title:"State",description:"NEAR accounts store data for their contracts. The storage starts empty until a contract is deployed and the state is initialized. The contract's code and state are independent: updating the code does not erase the state.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/storage.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/storage",permalink:"/zh-CN/build/smart-contracts/anatomy/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/storage.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"storage",title:"State",sidebar_label:"State (Storage)",hide_table_of_contents:!0},sidebar:"build",previous:{title:"External Interface",permalink:"/zh-CN/build/smart-contracts/anatomy/functions"},next:{title:"SDK Types",permalink:"/zh-CN/build/smart-contracts/anatomy/types"}},c={},u=[];function d(e){const t={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["NEAR accounts store data for their contracts. The storage starts ",(0,a.jsx)(t.strong,{children:"empty"})," until a contract is deployed and the state is initialized. The contract's code and state are independent: updating the code does not erase the state."]}),"\n",(0,a.jsxs)(i.z8,{languages:"js,rust",children:[(0,a.jsx)(i.gO,{highlights:'{"js": "3-6,10-11"}',fname:"auction",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"### Defining the State\nThe attributes of the `class` marked as the contract define the data that will be stored.\n\nThe contract can store all native types (e.g. `number`, `string`, `Array`, `Map`) as well as complex objects.\n\nFor example, our Auction contract stores when the auction ends, and an object representing the highest bid.\n\n**Note:** The SDK also provides [collections](./collections.md) to efficiently store collections of data.\n"})})}),(0,a.jsx)(i.gO,{highlights:'{"rust": "6-9,14,15"}',fname:"auction",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"### Defining the State\nThe attributes of the `struct` marked as the contract define the data that will be stored.\n\nThe contract can store all native types (e.g. `u8`, `string`, `HashMap`, `Vector`) as well as complex objects.\n\nFor example, our Auction contract stores when the auction ends, and an object representing the highest bid.\n\n**Note:** The structures that will be saved need a special macro, that tells the SDK to store them [serialized in Borsh](./serialization.md).\n\n**Note:** The SDK also provides [collections](./collections.md) to efficiently store collections of data.\n"})})}),(0,a.jsx)(i.gO,{highlights:'{"rust": "4"}',fname:"auction",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"#### [*] Note\nThe `structs` that will be persisted need to be marked with a macro, so the SDK knows to [serialize them in Borsh](./serialization.md) before writing them to the state.\n"})})}),(0,a.jsx)(i.gO,{highlights:'{"js":"", "rust": ""}',fname:"auction",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"#### [!] Important\nContracts pay for their storage by locking part of their balance.\n\nIt currently costs ~**1\u24c3** to store **100KB** of data.\n"})})}),(0,a.jsx)(i.gO,{highlights:'{"js": "", "rust": ""}',fname:"auction",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"### Initializing the State\nAfter the contract is deployed, its state is empty and needs to be initialized with\nsome initial values.\n\nThere are two ways to initialize a state:\n  1. By creating an initialization function\n  2. By setting default values\n"})})}),(0,a.jsx)(i.gO,{highlights:'{"js": "8,13-17"}',fname:"auction",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"### I. Initialization Functions\nAn option to initialize the state is to create an `initialization` function, which needs to be called before executing any other function.\n\nIn our Auction example, the contract has an initialization function that sets when the auction ends. Note the `@initialization` decorator, and the forced initialization on `NearBindgen`.\n\n**Note:** It is a good practice to mark initialization functions as private. We will cover function types in the [functions section](./functions.md).\n"})})}),(0,a.jsx)(i.gO,{highlights:'{"js": "10-11"}',fname:"auction",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"#### [!] Important\nIn TS/JS you still **must** set default values for the attributes, so the SDK can infer their types.\n"})})}),(0,a.jsx)(i.gO,{highlights:'{"rust": "12,22-30"}',fname:"auction",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"### I. Initialization Functions\nAn option to initialize the state is to create an `initialization` function, which needs to be called before executing any other function.\n\nIn our Auction example, the contract has an initialization function that sets when the auction ends. The contract derives the `PanicOnDefault`, which forces the user to call the init method denoted by the `#[init]` macro.\n\n**Note:** It is a good practice to mark initialization functions as private. We will cover function types in the [functions section](./functions.md).\n"})})}),(0,a.jsx)(i.gO,{highlights:'{"js": "5"}',fname:"hello",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'### II. Default State\nAnother option to initialize the state is to set default values for the attributes of the class.\n\nSuch is the case for our "Hello World" contract, which stores a `greeting` with the default value `"Hello"`.\n\nThe first time the contract is called (somebody executes `get_greeting` or `set_greeting`), the default values will be stored in the state, and the state will be considered initialized.\n\n**Note:** The state can only be initialized once.\n'})})}),(0,a.jsx)(i.gO,{highlights:'{"rust": "10-16"}',fname:"hello",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'### II. Default State\nAnother option to initialize the state is to create a `Default` version of our contract\'s `struct`.\n\nFor example, our "Hello World" contract has a default state with a `greeting` set to `"Hello"`.\n\nThe first time the contract executes, the `Default` will be stored in the state, and the state will be considered initialized.\n\n**Note:** The state can only be initialized once.\n'})})}),(0,a.jsx)(i.gO,{highlights:'{"js": "", "rust":""}',fname:"hello",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"### Lifecycle of the State\nWhen a function is called, the contract's state is loaded from the storage and put into memory.\n\nThe state is actually [stored serialized](./serialization.md), and the SDK takes a bit of time to deserialize it before the method can access it.\n\nWhen the method finishes executing successfully, all the changes to the state are serialized, and saved back to the storage.\n"})})}),(0,a.jsx)(i.gO,{highlights:'{"js": "", "rust":""}',fname:"hello",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"### State and Code\nIn NEAR, the contract's code and contract's storage are **independent**.\n\nUpdating the code of a contract does **not erase** the state, and can indeed lead to unexpected behavior or errors.\n\nMake sure to read the [updating a contract](../release/upgrade.md) if you run into issues.\n"})})}),(0,a.jsx)(i.$B,{language:"js",fname:"auction",url:"https://github.com/near-examples/auction-examples/blob/main/contract-ts/src/contract.ts",start:"2",end:"51"}),(0,a.jsx)(i.$B,{language:"js",fname:"hello",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/src/contract.ts",start:"2",end:"18"}),(0,a.jsx)(i.$B,{language:"rust",fname:"auction",url:"https://github.com/near-examples/auction-examples/blob/main/contract-rs/src/lib.rs",start:"2",end:"68"}),(0,a.jsx)(i.$B,{language:"rust",fname:"hello",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"2",end:"32"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),i=n(12466),s=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,s.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function m(e){var t,n,r,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=h(e),p=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:m})})),b=p[0],v=p[1],x=g({queryString:c,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),S=w[0],k=w[1],I=function(){var e=null!=j?j:S;return f({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){I&&v(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var p=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),s(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;n=null!=(i=l[s])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,r.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=i.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(j,Object.assign({},t,e))]})}function w(e){var t=(0,p.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},46610:(e,t,n)=>{n.d(t,{gO:()=>m,z8:()=>g,$B:()=>p,rV:()=>b,rC:()=>v,h7:()=>f});var a=n(98906),r=n(67294),i=n(1841),s=n.n(i),o=n(71183),l=n(74866),c=n(85162),u=n(85893);const d=function(e){var t=e.props,n=t.blocks,a=t.files,i=t.languages,s=t.language,o=t.setLanguage,d=(0,r.useState)(n[0].highlight),h=d[0],g=d[1],m=(0,r.useState)(0),p=m[0],x=m[1],j=(0,r.useState)(n[0].fname),y=j[0],w=j[1],S=function(e){x(e),g(n[e].highlight),w(n[e].fname)};return(0,r.useEffect)((function(){var e=document.querySelector('div[fname="'+y+'"] .theme-code-block-highlighted-line'),t=document.querySelector('div[fname="'+y+'"] .prism-code');if(e){var n=e.offsetTop-t.clientHeight/2;t.scrollTo({top:n,behavior:"smooth"})}}),[y,h]),(0,r.useEffect)((function(){S(0);var e=document.querySelector(".navbar"),t=document.getElementById("files");t.style.top=e.clientHeight+"px";var a=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+s).forEach((function(t){return t.style.maxHeight="calc(100vh - "+e.clientHeight+"px - "+a.clientHeight+"px)"}));var r=document.getElementById("block0").getBoundingClientRect().top,i=document.getElementById("block"+(n.length-1)).getBoundingClientRect().bottom,o=Math.abs(i-r),l=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,c=document.getElementById("block"+(n.length-1)).getBoundingClientRect().top;document.getElementById("extra-padding").style.height=t.clientHeight-Math.abs(c-i)-e.clientHeight+"px";var u=function(){for(var t=window.scrollY-l+e.clientHeight,a=window.scrollY?t/o:0,r=0,i=0,s=0;s<n.length;s++){if(r=i,i+=document.getElementById("block"+s).clientHeight/o,a>r&&a<i){S(s);break}}};return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[n,a,s]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"row code-explain",children:[(0,u.jsxs)("div",{className:"col-blocks col",id:"codeblocks",children:[(0,u.jsx)(l.Z,{className:"file-tabs",selectedValue:s,selectValue:function(e){return o(e)},children:i.map((function(e){return(0,u.jsx)(c.Z,{value:e,label:f[e]})}))}),n.map((function(e,t){return(0,u.jsx)(b,{selected:p===t,index:t,text:e.text,type:e.type,activateFn:S})})),(0,u.jsx)("div",{id:"extra-padding",style:{width:"100%"}})]}),(0,u.jsx)("div",{className:"col-files col",children:(0,u.jsx)("div",{id:"files",style:{position:"sticky"},children:(0,u.jsx)(l.Z,{className:"file-tabs",selectedValue:y||n[0].fname,selectValue:function(e){return w(e)},children:a.map((function(e){return(0,u.jsx)(c.Z,{value:e.fname,children:(0,u.jsx)(v,Object.assign({},e,{lineNumber:h}))})}))})})})]})})};const h=function(e){var t=e.props,n=t.blocks,a=t.files,i=t.languages,s=t.language,o=t.setLanguage,d=(0,r.useState)(n[0].highlight),h=d[0],g=d[1],m=(0,r.useState)(0),p=m[0],x=m[1],j=(0,r.useState)(n[0].fname),y=j[0],w=j[1],S=function(e){x(e),g(n[e].highlight),w(n[e].fname)};return(0,r.useEffect)((function(){var e=document.querySelector('div[fname="'+y+'"] .theme-code-block-highlighted-line'),t=document.querySelector('div[fname="'+y+'"] .prism-code');e&&t.scrollTo({top:e.offsetTop,behavior:"smooth"})}),[y,h]),(0,r.useEffect)((function(){S(0);var e=document.querySelector(".navbar"),t=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+s).forEach((function(e){return e.style.maxHeight="calc(33vh - "+t.clientHeight+"px)"}));var a=document.getElementById("block0").getBoundingClientRect().top,r=document.getElementById("block"+(n.length-1)).getBoundingClientRect().bottom,i=Math.abs(r-a),o=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,l=function(){for(var t=window.scrollY-o+e.clientHeight,a=document.getElementById("files"),r=window.scrollY?t/(i+a.clientHeight):0,s=0,l=0,c=0;c<n.length;c++){if(s=l,l+=document.getElementById("block"+c).clientHeight/i,r>s&&r<l){S(c);break}}};return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}}),[n,a,s]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"code-explain",style:{position:"relative"},children:[(0,u.jsxs)("div",{id:"codeblocks",children:[(0,u.jsx)(l.Z,{className:"file-tabs",selectedValue:s,selectValue:function(e){return o(e)},children:i.map((function(e){return(0,u.jsx)(c.Z,{value:e,label:f[e]})}))}),n.map((function(e,t){return(0,u.jsx)(b,{selected:p===t,index:t,text:e.text,type:e.type,activateFn:S})}))]}),(0,u.jsx)("div",{id:"files",style:{height:"33vh",position:"sticky",bottom:0,backgroundColor:"var(--ifm-background-color)"},children:(0,u.jsx)(l.Z,{className:"file-tabs",selectedValue:y||n[0].fname,selectValue:function(e){return w(e)},children:a.map((function(e){return(0,u.jsx)(c.Z,{value:e.fname,children:(0,u.jsx)(v,Object.assign({},e,{lineNumber:h}))})}))})})]})})};var f={rust:"\ud83e\udd80 RS",js:"\ud83c\udf10 JS",ts:"\ud83c\udf10 TS"};function g(e){var t=e.children,n=e.languages;n=n.split(",");var i=(0,r.useState)(n[0]),s=i[0],o=i[1],l=(0,r.useState)([]),c=l[0],g=l[1],m=(0,r.useState)([]),p=m[0],b=m[1],v=(0,r.useState)(!0),x=v[0],j=v[1];if(!n.every((function(e){return e in f})))throw new Error("languages must be one of ['rust', 'js', 'ts']");var y=function(e){localStorage.setItem("docusaurus.tab.code-tabs",e),o(e)};return(0,r.useEffect)((function(){var e=localStorage.getItem("docusaurus.tab.code-tabs");e&&n.includes(e)&&o(e),j(window.innerWidth>768)}),[]),(0,r.useEffect)((function(){for(var e,n=[],r=[],i=(0,a.Z)(t);!(e=i()).done;){var o=e.value;if(o.props.highlights){var l=JSON.parse(o.props.highlights);l&&s in l&&n.push({text:o.props.children,highlight:l[s],fname:o.props.fname,type:o.props.type})}s===o.props.language&&r.push(Object.assign({},o.props))}g(n),b(r)}),[s]),c.length&&p.length?x?(0,u.jsx)(d,{props:{blocks:c,files:p,languages:n,language:s,setLanguage:y}}):(0,u.jsx)(h,{props:{blocks:c,files:p,languages:n,language:s,setLanguage:y}}):"Loading..."}function m(e){return e.children}function p(e){return e.children}function b(e){var t=e.selected,n=e.text,a=e.index,r=e.activateFn,i=e.type;if(console.log("TYPE",i),i)return(0,u.jsx)("div",{id:"block"+a,children:n});var s=t?"block-selected":"";return(0,u.jsx)("div",{className:"block "+s+" padding--sm",id:"block"+a,onClick:function(){return r(a)},children:n},a)}function v(e){var t=e.url,n=e.start,a=e.end,r=e.language,i=e.fname,l=e.lineNumber,c=e.children;return t?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{fname:i,children:(0,u.jsx)(o.Ey,{url:t,start:n,end:a,language:r,fname:i,metastring:"{"+l+"}"})})}):(0,u.jsx)("div",{fname:i,children:(0,u.jsx)(s(),{language:r,metastring:"{"+l+"}",children:c.props.children.props.children})})}},71183:(e,t,n)=>{n.d(t,{O2:()=>g,Ey:()=>p,SQ:()=>m});var a=n(67294),r=n(74866),i=n(85162),s=n(74165),o=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,o.Z)((0,s.Z)().mark((function e(t,n,a){var r,i,o,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):o.length,o=o.slice(n,a),l=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,i=e.language,s=e.fname,o=e.metastring,l=(0,a.useState)("Loading..."),h=l[0],f=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],i=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+i+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,r);a.then((function(e){return f(e)}))})),(0,u.jsxs)("div",{fname:s,children:[(0,u.jsx)(c(),{language:i,metastring:o+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function g(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,i=n.end,s=n.fname;if(e.type===p)return p({url:a,start:r,end:i,language:t,fname:s});return e}(e,n)})),1==t.length?(0,u.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))})}function p(e){var t=e.url,n=e.start,a=e.end,r=e.language,i=e.fname,s=e.metastring;return h({url:t,start:n,end:a,language:r,fname:i,metastring:s})}}}]);