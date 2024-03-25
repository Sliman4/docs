"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8634],{12200:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(85893),a=t(11151),u=t(74866),s=t(85162);const o={},i=void 0,l={id:"primitives/linkdrop/bos/get-key-pairs",title:"get-key-pairs",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/linkdrop/bos/get-key-pairs.md",sourceDirName:"7.primitives/linkdrop/bos",slug:"/primitives/linkdrop/bos/get-key-pairs",permalink:"/zh-CN/primitives/linkdrop/bos/get-key-pairs",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/bos/get-key-pairs.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{}},c={},d=[];function p(e){const r={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsx)(u.Z,{className:"file-tabs",children:(0,n.jsx)(s.Z,{value:"Keypom API",label:"Keypom API",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'const dropsNumber = "2";\nconst keysGeneratorUrl = "https://keypom.sctuts.com/keypair/";\n\nasyncFetch(keysGeneratorUrl + dropsNumber + "/rootEntrophy").then((res) => {\n  const keyPairs = JSON.parse(res.body);\n  const pubKeys = [];\n  const privKeys = [];\n\n  keyPairs.forEach((e) => {\n    pubKeys.push(e.pub);\n    privKeys.push(e.priv);\n  });\n\n  const obj = {\n    publicKeys: pubKeys,\n    privKeys: privKeys,\n  };\n\n  State.update(obj);\n});\n'})})})})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>s});t(67294);var n=t(36905);const a={tabItem:"tabItem_Ymn6"};var u=t(85893);function s(e){var r=e.children,t=e.hidden,s=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>w});var n=t(67294),a=t(36905),u=t(12466),s=t(16550),o=t(20469),i=t(91980),l=t(67392),c=t(50012);function d(e){var r,t;return null!=(r=null==(t=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}function p(e){var r=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(t);return function(e){var r=(0,l.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function f(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function v(e){var r=e.queryString,t=void 0!==r&&r,a=e.groupId,u=(0,s.k6)(),o=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((function(e){if(o){var r=new URLSearchParams(u.location.search);r.set(o,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[o,u])]}function b(e){var r,t,a,u,s=e.defaultValue,i=e.queryString,l=void 0!==i&&i,d=e.groupId,b=p(e),m=(0,n.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:b})})),h=m[0],y=m[1],g=v({queryString:l,groupId:d}),k=g[0],j=g[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(r),a=t[0],u=t[1],[a,(0,n.useCallback)((function(e){r&&u.set(e)}),[r,u])]),x=w[0],I=w[1],N=function(){var e=null!=k?k:x;return f({value:e,tabValues:b})?e:null}();return(0,o.Z)((function(){N&&y(N)}),[N]),{selectedValue:h,selectValue:(0,n.useCallback)((function(e){if(!f({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);y(e),j(e),I(e)}),[j,I,b]),tabValues:b}}var m=t(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(85893);function g(e){var r=e.className,t=e.block,n=e.selectedValue,s=e.selectValue,o=e.tabValues,i=[],l=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,t=i.indexOf(r),a=o[t].value;a!==n&&(l(r),s(a))},d=function(e){var r,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,a=i.indexOf(e.currentTarget)+1;t=null!=(n=i[a])?n:i[0];break;case"ArrowLeft":var u,s=i.indexOf(e.currentTarget)-1;t=null!=(u=i[s])?u:i[i.length-1]}null==(r=t)||r.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:o.map((function(e){var r=e.value,t=e.label,u=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.Z)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":n===r}),children:null!=t?t:r}),r)}))})}function k(e){var r=e.lazy,t=e.children,a=e.selectedValue,u=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var s=u.find((function(e){return e.props.value===a}));return s?(0,n.cloneElement)(s,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:u.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function j(e){var r=b(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",h.tabList),children:[(0,y.jsx)(g,Object.assign({},e,r)),(0,y.jsx)(k,Object.assign({},e,r))]})}function w(e){var r=(0,m.Z)();return(0,y.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var n=t(67294);const a={},u=n.createContext(a);function s(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);