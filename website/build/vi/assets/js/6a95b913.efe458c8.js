"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8490],{94403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(85893),a=n(11151),s=(n(74866),n(85162),n(71183),n(1841),n(46610));const l={id:"types",title:"SDK Types",hide_table_of_contents:!0},i=void 0,o={id:"build/smart-contracts/anatomy/types",title:"SDK Types",description:"Lets discuss which types smart contracts use to input and output data, as well as how such data is stored and handled in the contract's code.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/types.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/types",permalink:"/vi/build/smart-contracts/anatomy/types",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/types.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"types",title:"SDK Types",hide_table_of_contents:!0},sidebar:"build",previous:{title:"State (Storage)",permalink:"/vi/build/smart-contracts/anatomy/storage"},next:{title:"Data Structures",permalink:"/vi/build/smart-contracts/anatomy/collections"}},c={},u=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Lets discuss which types smart contracts use to input and output data, as well as how such data is stored and handled in the contract's code."}),"\n",(0,r.jsxs)(s.z8,{languages:"js,rust",children:[(0,r.jsx)(s.gO,{highlights:'{"js":"5,8,13"}',fname:"hello-near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Native Types\nSmart contracts can receive, store and return data using JS native types:\n- `string`\n- `number`\n- `boolean`\n- `Array`\n- `Map`\n- `Object`\n- `BigInt`\n"})})}),(0,r.jsx)(s.gO,{highlights:'{"rust":"6,13,22,27"}',fname:"hello-near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Native Types\nSmart contracts can receive, store and return data using the following Rust types:\n- `string`\n- `i8-i32/u8-u32`\n- **`u64/128`**: It is preferable to use SDK types `U64` and `U128`\n- `bool`\n- `HashMap`\n- `Vector`\n"})})}),(0,r.jsx)(s.gO,{highlights:'{"rust": "1,15,22,64"}',fname:"auction",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"#### `U64/U128`\nSmart contracts can store `u64` and `u128`, but these types need to be converted to `string` for input/output\n\nTo simplify development, the SDK provides the `U64` and `U128` types which are automatically casted to `u64/u128` when stored, and to `string` when used as input/output\n"})})}),(0,r.jsx)(s.gO,{highlights:'{"js":"3-6", "rust": "6-9"}',fname:"auction",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Complex Objects\nSmart contracts can store and return complex objects\n\n**Note:** Objects will always be received and returned as JSON\n"})})}),(0,r.jsx)(s.gO,{highlights:'{"rust": "4"}',fname:"auction",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"#### Serializers\nObjects that will be used as input or output need to be serializable to JSON, add the `#[near(serializer=json)]` macro\n\nObjects that will be stored in the contract's state need to be serializable to Borsh, add the `#[near(serializer=borsh)]` macro\n"})})}),(0,r.jsx)(s.gO,{highlights:'{"js": "5,11,47"}',fname:"auction",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Handling Tokens\n`$NEAR` tokens are represented using `BigInt` in JS, and they are always represented in `yoctonear`\n\n**Note:** 1 NEAR = 10^24 yoctoNEAR\n"})})}),(0,r.jsx)(s.gO,{highlights:'{"rust": ""}',fname:"auction",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Handling Tokens\n`$NEAR` tokens are handled through the `NearToken` struct, which exposes methods to represent the value in `yoctonear`, `milinear` and `near`\n\n**Note:** 1 NEAR = 10^24 yoctonear\n"})})}),(0,r.jsx)(s.gO,{highlights:'{"js": "4", "rust": "7"}',fname:"auction",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"### Account\nThe SDK exposes a special type to handle NEAR Accounts, which automatically checks if the account address is valid\n"})})}),(0,r.jsx)(s.$B,{language:"js",fname:"hello-near",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/src/contract.ts",start:"2",end:"18"}),(0,r.jsx)(s.$B,{language:"rust",fname:"hello-near",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"2",end:"32"}),(0,r.jsx)(s.$B,{language:"js",fname:"auction",url:"https://github.com/near-examples/auction-examples/blob/main/contract-ts/src/contract.ts",start:"2",end:"51"}),(0,r.jsx)(s.$B,{language:"rust",fname:"auction",url:"https://github.com/near-examples/auction-examples/blob/main/contract-rs/src/lib.rs",start:"2",end:"68"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),s=n(12466),l=n(16550),i=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function p(e){var t,n,a,s,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,p=h(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),b=f[0],v=f[1],x=m({queryString:c,groupId:d}),y=x[0],j=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),S=w[0],k=w[1],E=function(){var e=null!=y?y:S;return g({value:e,tabValues:p})?e:null}();return(0,i.Z)((function(){E&&v(E)}),[E]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),j(e),k(e)}),[j,k,p]),tabValues:p}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(c(t),l(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;n=null!=(s=o[l])?s:o[o.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function j(e){var t=p(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,Object.assign({},t,e)),(0,v.jsx)(y,Object.assign({},t,e))]})}function w(e){var t=(0,f.Z)();return(0,v.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},46610:(e,t,n)=>{n.d(t,{gO:()=>p,z8:()=>m,$B:()=>f,rV:()=>b,rC:()=>v,h7:()=>g});var r=n(98906),a=n(67294),s=n(1841),l=n.n(s),i=n(71183),o=n(74866),c=n(85162),u=n(85893);const d=function(e){var t=e.props,n=t.blocks,r=t.files,s=t.languages,l=t.language,i=t.setLanguage,d=(0,a.useState)(n[0].highlight),h=d[0],m=d[1],p=(0,a.useState)(0),f=p[0],x=p[1],y=(0,a.useState)(n[0].fname),j=y[0],w=y[1],S=function(e){x(e),m(n[e].highlight),w(n[e].fname)};return(0,a.useEffect)((function(){var e=document.querySelector('div[fname="'+j+'"] .theme-code-block-highlighted-line'),t=document.querySelector('div[fname="'+j+'"] .prism-code');if(e){var n=e.offsetTop-t.clientHeight/2;t.scrollTo({top:n,behavior:"smooth"})}}),[j,h]),(0,a.useEffect)((function(){S(0);var e=document.querySelector(".navbar"),t=document.getElementById("files");t.style.top=e.clientHeight+"px";var r=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+l).forEach((function(t){return t.style.maxHeight="calc(100vh - "+e.clientHeight+"px - "+r.clientHeight+"px)"}));var a=document.getElementById("block0").getBoundingClientRect().top,s=document.getElementById("block"+(n.length-1)).getBoundingClientRect().bottom,i=Math.abs(s-a),o=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,c=document.getElementById("block"+(n.length-1)).getBoundingClientRect().top;document.getElementById("extra-padding").style.height=t.clientHeight-Math.abs(c-s)-e.clientHeight+"px";var u=function(){for(var t=window.scrollY-o+e.clientHeight,r=window.scrollY?t/i:0,a=0,s=0,l=0;l<n.length;l++){if(a=s,s+=document.getElementById("block"+l).clientHeight/i,r>a&&r<s){S(l);break}}};return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[n,r,l]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"row code-explain",children:[(0,u.jsxs)("div",{className:"col-blocks col",id:"codeblocks",children:[(0,u.jsx)(o.Z,{className:"file-tabs",selectedValue:l,selectValue:function(e){return i(e)},children:s.map((function(e){return(0,u.jsx)(c.Z,{value:e,label:g[e]})}))}),n.map((function(e,t){return(0,u.jsx)(b,{selected:f===t,index:t,text:e.text,type:e.type,activateFn:S})})),(0,u.jsx)("div",{id:"extra-padding",style:{width:"100%"}})]}),(0,u.jsx)("div",{className:"col-files col",children:(0,u.jsx)("div",{id:"files",style:{position:"sticky"},children:(0,u.jsx)(o.Z,{className:"file-tabs",selectedValue:j||n[0].fname,selectValue:function(e){return w(e)},children:r.map((function(e){return(0,u.jsx)(c.Z,{value:e.fname,children:(0,u.jsx)(v,Object.assign({},e,{lineNumber:h}))})}))})})})]})})};const h=function(e){var t=e.props,n=t.blocks,r=t.files,s=t.languages,l=t.language,i=t.setLanguage,d=(0,a.useState)(n[0].highlight),h=d[0],m=d[1],p=(0,a.useState)(0),f=p[0],x=p[1],y=(0,a.useState)(n[0].fname),j=y[0],w=y[1],S=function(e){x(e),m(n[e].highlight),w(n[e].fname)};return(0,a.useEffect)((function(){var e=document.querySelector('div[fname="'+j+'"] .theme-code-block-highlighted-line'),t=document.querySelector('div[fname="'+j+'"] .prism-code');e&&t.scrollTo({top:e.offsetTop,behavior:"smooth"})}),[j,h]),(0,a.useEffect)((function(){S(0);var e=document.querySelector(".navbar"),t=document.querySelector(".file-tabs");document.querySelectorAll(".language-"+l).forEach((function(e){return e.style.maxHeight="calc(33vh - "+t.clientHeight+"px)"}));var r=document.getElementById("block0").getBoundingClientRect().top,a=document.getElementById("block"+(n.length-1)).getBoundingClientRect().bottom,s=Math.abs(a-r),i=document.getElementById("codeblocks").getBoundingClientRect().top+window.scrollY,o=function(){for(var t=window.scrollY-i+e.clientHeight,r=document.getElementById("files"),a=window.scrollY?t/(s+r.clientHeight):0,l=0,o=0,c=0;c<n.length;c++){if(l=o,o+=document.getElementById("block"+c).clientHeight/s,a>l&&a<o){S(c);break}}};return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[n,r,l]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"code-explain",style:{position:"relative"},children:[(0,u.jsxs)("div",{id:"codeblocks",children:[(0,u.jsx)(o.Z,{className:"file-tabs",selectedValue:l,selectValue:function(e){return i(e)},children:s.map((function(e){return(0,u.jsx)(c.Z,{value:e,label:g[e]})}))}),n.map((function(e,t){return(0,u.jsx)(b,{selected:f===t,index:t,text:e.text,type:e.type,activateFn:S})}))]}),(0,u.jsx)("div",{id:"files",style:{height:"33vh",position:"sticky",bottom:0,backgroundColor:"var(--ifm-background-color)"},children:(0,u.jsx)(o.Z,{className:"file-tabs",selectedValue:j||n[0].fname,selectValue:function(e){return w(e)},children:r.map((function(e){return(0,u.jsx)(c.Z,{value:e.fname,children:(0,u.jsx)(v,Object.assign({},e,{lineNumber:h}))})}))})})]})})};var g={rust:"\ud83e\udd80 RS",js:"\ud83c\udf10 JS",ts:"\ud83c\udf10 TS"};function m(e){var t=e.children,n=e.languages;n=n.split(",");var s=(0,a.useState)(n[0]),l=s[0],i=s[1],o=(0,a.useState)([]),c=o[0],m=o[1],p=(0,a.useState)([]),f=p[0],b=p[1],v=(0,a.useState)(!0),x=v[0],y=v[1];if(!n.every((function(e){return e in g})))throw new Error("languages must be one of ['rust', 'js', 'ts']");var j=function(e){localStorage.setItem("docusaurus.tab.code-tabs",e),i(e)};return(0,a.useEffect)((function(){var e=localStorage.getItem("docusaurus.tab.code-tabs");e&&n.includes(e)&&i(e),y(window.innerWidth>768)}),[]),(0,a.useEffect)((function(){for(var e,n=[],a=[],s=(0,r.Z)(t);!(e=s()).done;){var i=e.value;if(i.props.highlights){var o=JSON.parse(i.props.highlights);o&&l in o&&n.push({text:i.props.children,highlight:o[l],fname:i.props.fname,type:i.props.type})}l===i.props.language&&a.push(Object.assign({},i.props))}m(n),b(a)}),[l]),c.length&&f.length?x?(0,u.jsx)(d,{props:{blocks:c,files:f,languages:n,language:l,setLanguage:j}}):(0,u.jsx)(h,{props:{blocks:c,files:f,languages:n,language:l,setLanguage:j}}):"Loading..."}function p(e){return e.children}function f(e){return e.children}function b(e){var t=e.selected,n=e.text,r=e.index,a=e.activateFn,s=e.type;if(console.log("TYPE",s),s)return(0,u.jsx)("div",{id:"block"+r,children:n});var l=t?"block-selected":"";return(0,u.jsx)("div",{className:"block "+l+" padding--sm",id:"block"+r,onClick:function(){return a(r)},children:n},r)}function v(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,o=e.lineNumber,c=e.children;return t?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{fname:s,children:(0,u.jsx)(i.Ey,{url:t,start:n,end:r,language:a,fname:s,metastring:"{"+o+"}"})})}):(0,u.jsx)("div",{fname:s,children:(0,u.jsx)(l(),{language:a,metastring:"{"+o+"}",children:c.props.children.props.children})})}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>f,SQ:()=>p});var r=n(67294),a=n(74866),s=n(85162),l=n(74165),i=n(15861),o=n(1841),c=n.n(o),u=n(85893);function d(){return(d=(0,i.Z)((0,l.Z)().mark((function e(t,n,r){var a,s,i,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):i.length,i=i.slice(n,r),o=i.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,s=e.language,l=e.fname,i=e.metastring,o=(0,r.useState)("Loading..."),h=o[0],g=o[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return g(e)}))})),(0,u.jsxs)("div",{fname:l,children:[(0,u.jsx)(c(),{language:s,metastring:i+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var g={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:g[e.props.value],children:e})}))})}function p(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,l=n.fname;if(e.type===f)return f({url:r,start:a,end:s,language:t,fname:l});return e}(e,n)})),1==t.length?(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function f(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,l=e.metastring;return h({url:t,start:n,end:r,language:a,fname:s,metastring:l})}}}]);