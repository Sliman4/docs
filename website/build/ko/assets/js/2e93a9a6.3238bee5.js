"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9028],{4559:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var t=r(85893),a=r(11151),s=r(74866),l=r(85162),i=r(77229);const c={id:"basics",title:"\ubaa8\ub4c8, \uc790\ub8cc\ud615 \ubc0f \uad6c\uc870"},o=void 0,u={id:"develop/contracts/basics",title:"\ubaa8\ub4c8, \uc790\ub8cc\ud615 \ubc0f \uad6c\uc870",description:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \ub54c, \ub2e4\uc74c\uacfc \uac19\uc740 \uc77c\ubc18\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d \uac1c\ub150\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/contracts/basics.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/basics",permalink:"/ko/develop/contracts/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/basics.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\ub144 2\uc6d4 28\uc77c",frontMatter:{id:"basics",title:"\ubaa8\ub4c8, \uc790\ub8cc\ud615 \ubc0f \uad6c\uc870"},sidebar:"build",previous:{title:"Quickstart \u2728",permalink:"/ko/develop/contracts/quickstart"},next:{title:"\ucee8\ud2b8\ub799\ud2b8 \ud074\ub798\uc2a4",permalink:"/ko/develop/contracts/anatomy"}},d={},h=[{value:"\ubaa8\ub4c8",id:"\ubaa8\ub4c8",level:2},{value:"\uae30\ubcf8 \uc790\ub8cc\ud615",id:"\uae30\ubcf8-\uc790\ub8cc\ud615",level:2},{value:"SDK \uceec\ub809\uc158",id:"sdk-\uceec\ub809\uc158",level:2},{value:"Internal Structures",id:"internal-structures",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \ub54c, \ub2e4\uc74c\uacfc \uac19\uc740 \uc77c\ubc18\uc801\uc778 \ud504\ub85c\uadf8\ub798\ubc0d \uac1c\ub150\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#modules",children:"\ubaa8\ub4c8"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#data-types",children:"\uc790\ub8cc\ud615 & \uceec\ub809\uc158"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#classes--structures",children:"\ud074\ub798\uc2a4 & \uad6c\uc870"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\ubaa8\ub4c8",children:"\ubaa8\ub4c8"}),"\n",(0,t.jsx)(n.p,{children:"\ubaa8\ub4c8\uc740 \ucf54\ub4dc\ub97c \uad6c\uc131\ud558\uace0, \ub0a8\uc774 \ub9cc\ub4e0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc7ac\uc0ac\uc6a9\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uae30\ubcf8 \ubaa8\ub4c8\uc740 ",(0,t.jsx)(n.strong,{children:"NEAR SDK"}),"\ub85c, \uc774\ub97c \ud1b5\ud574 ",(0,t.jsx)(n.a,{href:"/ko/develop/contracts/environment/",children:"\uc2e4\ud589 \ud658\uacbd"}),"\uc5d0 \ub300\ud55c \uc561\uc138\uc2a4\ub97c \uc81c\uacf5\ud558\uace0 ",(0,t.jsx)(n.a,{href:"/ko/develop/contracts/crosscontract",children:"\ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c"}),"\ud558\uba70 ",(0,t.jsx)(n.a,{href:"/ko/develop/contracts/actions",children:"\ud1a0\ud070\uc744 \uc804\uc1a1"}),"\ud558\ub294 \ub4f1\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(i.O2,{children:[(0,t.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,t.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"1",end:"3"})}),(0,t.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"1",end:"6"})})]}),"\n",(0,t.jsx)(n.admonition,{title:"\uc678\ubd80 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc0ac\uc6a9",type:"info",children:(0,t.jsxs)(n.p,{children:["Rust\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"wasm32-unknown-unknown"}),"\ub97c \uc9c0\uc6d0\ud558\ub294 \uac70\uc758 \ubaa8\ub4e0 \uac83\ub4e4\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc640 \ud638\ud658\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ucef4\ud30c\uc77c\ub41c \ucee8\ud2b8\ub799\ud2b8 \ubc14\uc774\ub108\ub9ac\uc758 \ud06c\uae30\ub294 ~4.19MB\ub85c \uc81c\ud55c\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c, \uba87\uba87 \ub300\ud615 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ud638\ud658\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\uae30\ubcf8-\uc790\ub8cc\ud615",children:"\uae30\ubcf8 \uc790\ub8cc\ud615"}),"\n",(0,t.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8 \uc791\uc131 \uc2dc ",(0,t.jsx)(n.strong,{children:"\ubaa8\ub4e0"})," \uc5b8\uc5b4\uc758 ",(0,t.jsx)(n.strong,{children:"\uae30\ubcf8 \uc790\ub8cc\ud615"}),"\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,t.jsx)(l.Z,{value:"\ud83c\udf10 JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"number, bigint, string, [], {} ...\n"})})}),(0,t.jsx)(l.Z,{value:"\ud83e\udd80 Rust",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"u8, u16, u32, u64, u128, i8, i16, i32, i64, i128, Vec<T>, HashMap<K,V> ...\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,t.jsx)(n.strong,{children:"\uc778\ud130\ud398\uc774\uc2a4"}),"\uc5d0\uc11c\ub294 \ud56d\uc0c1 ",(0,t.jsx)(n.strong,{children:"\uae30\ubcf8 \uc790\ub8cc\ud615"}),"\uc744 \uc120\ud638\ud569\ub2c8\ub2e4. \uc720\uc77c\ud55c \uc608\uc678\ub294 ",(0,t.jsx)(n.code,{children:"52 \ubc14\uc774\ud2b8"}),"\ubcf4\ub2e4 \ud070 \uac12\uc774\ub77c\uc11c (\uc608: ",(0,t.jsx)(n.code,{children:"u64"})," \ubc0f ",(0,t.jsx)(n.code,{children:"u128"}),"), \ubb38\uc790\uc5f4\uacfc \uac19\uc740 \ub300\uc548\uc774 \ub354 \ub098\uc744 \uacbd\uc6b0\uc785\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\uc5b8\ub354\ud50c\ub85c\uc6b0"})," \ubc0f ",(0,t.jsx)(n.strong,{children:"\uc624\ubc84\ud50c\ub85c\uc6b0"})," \uc624\ub958\ub97c \ud56d\uc0c1 \ud655\uc778\ud558\uc138\uc694. Rust\uc758 \uacbd\uc6b0 ",(0,t.jsx)(n.code,{children:"Cargo"}),"\uc5d0 ",(0,t.jsx)(n.code,{children:"overflow-checks=true"}),"\ub97c \ucd94\uac00\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"sdk-\uceec\ub809\uc158",children:"SDK \uceec\ub809\uc158"}),"\n",(0,t.jsxs)(n.p,{children:["\uae30\ubcf8 \uc790\ub8cc\ud615 \uc678\uc5d0\ub3c4, NEAR SDK\ub294 \ubcf5\uc7a1\ud55c \ub370\uc774\ud130\ub97c \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\uc5d0 \uc800\uc7a5\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 ",(0,t.jsx)(n.code,{children:"Vector"}),"\uc640 ",(0,t.jsx)(n.code,{children:"UnorderedMap"})," \ub4f1\uc758 ",(0,t.jsx)(n.a,{href:"/ko/develop/contracts/storage",children:"\uceec\ub809\uc158"}),"\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(i.O2,{children:[(0,t.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,t.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"8",end:"11"})}),(0,t.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"33",end:"36"})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Always prefer ",(0,t.jsx)(n.strong,{children:"SDK collections"})," over native ones in the contract's ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/ko/develop/contracts/anatomy#defining-the-state",children:"attributes (state)"})}),"."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"internal-structures",children:"Internal Structures"}),"\n",(0,t.jsx)(n.p,{children:"You can define and instantiate complex objects through classes and structures."}),"\n",(0,t.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,t.jsx)(l.Z,{value:"\ud83c\udf10 JavaScript",children:(0,t.jsx)(i.Ey,{fname:"model.ts",language:"ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/model.ts",start:"3",end:"11"})}),(0,t.jsx)(l.Z,{value:"\ud83e\udd80 Rust",children:(0,t.jsx)(i.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/donation.rs",start:"11",end:"16"})})]}),"\n",(0,t.jsx)(n.p,{children:"\ud83e\udd80 Notice that the class is decorated with multiple macros:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BorshDeserialize"})," & ",(0,t.jsx)(n.code,{children:"BorshSerialize"})," allow the structure to be read and written into the contract's state"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Serialize"})," & ",(0,t.jsx)(n.code,{children:"Deserialize"})," allow the structure to be used as an input type and return type of the contract's methods."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you are curious on why the (de)serialization is needed read our ",(0,t.jsx)(n.a,{href:"/ko/develop/contracts/serialization",children:"serialization documentation"})]})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(67294),a=r(36905),s=r(12466),l=r(16550),i=r(20469),c=r(91980),o=r(67392),u=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,s=(0,l.k6)(),i=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,c._X)(i),(0,t.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function x(e){var n,r,a,s,l=e.defaultValue,c=e.queryString,o=void 0!==c&&c,d=e.groupId,x=h(e),v=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:x})})),f=v[0],b=v[1],j=m({queryString:o,groupId:d}),g=j[0],y=j[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(n),a=r[0],s=r[1],[a,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=k[0],S=k[1],I=function(){var e=null!=g?g:w;return p({value:e,tabValues:x})?e:null}();return(0,i.Z)((function(){I&&b(I)}),[I]),{selectedValue:f,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),S(e)}),[y,S,x]),tabValues:x}}var v=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function j(e){var n=e.className,r=e.block,t=e.selectedValue,l=e.selectValue,i=e.tabValues,c=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=c.indexOf(n),a=i[r].value;a!==t&&(o(n),l(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=c.indexOf(e.currentTarget)+1;r=null!=(t=c[a])?t:c[0];break;case"ArrowLeft":var s,l=c.indexOf(e.currentTarget)-1;r=null!=(s=c[l])?s:c[c.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:i.map((function(e){var n=e.value,r=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function g(e){var n=e.lazy,r=e.children,a=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===a}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=x(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(j,Object.assign({},e,n)),(0,b.jsx)(g,Object.assign({},e,n))]})}function k(e){var n=(0,v.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,r)=>{r.d(n,{Ey:()=>u,O2:()=>c,SQ:()=>o});r(67294);var t=r(74866),a=r(85162),s=r(95665),l=r.n(s),i=r(85893);function c(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var n=e.children,r=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var r=e.props,t=(r.children,r.url),a=r.start,s=r.end,l=r.fname;if(e.type===u)return u({url:t,start:a,end:s,language:n,fname:l});return e}(e,r)})),1==n.length?(0,i.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(t.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function u(e){var n=e.url,r=e.start,t=e.end,a=e.language,s=e.fname,c=n+"#";return r&&t&&(c+="L"+r+"-L"+t+"#"),(0,i.jsx)(l(),{language:a,fname:s,children:c})}}}]);