"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[122],{79180:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var t=i(85893),a=i(11151),r=i(74866),s=i(85162),o=i(42352);const l={id:"notifications",title:"Social Notifications"},c=void 0,u={id:"bos/api/notifications",title:"Social Notifications",description:"NEAR allows applications to send notifications to their users. Notifications is implemented as a particular case of indexed actions.",source:"@site/../docs/bos/api/notifications.md",sourceDirName:"bos/api",slug:"/bos/api/notifications",permalink:"/zh-CN/bos/api/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/notifications.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1704817578,formattedLastUpdatedAt:"2024\u5e741\u67089\u65e5",frontMatter:{id:"notifications",title:"Social Notifications"},sidebar:"integrate",previous:{title:"Social Indexer",permalink:"/zh-CN/bos/api/indexing"},next:{title:"Fetch",permalink:"/zh-CN/bos/api/fetch"}},d={},h=[{value:"Sending Notifications",id:"sending-notifications",level:2},{value:"Example",id:"example",level:4},{value:"Notification Types",id:"notification-types",level:2},{value:"Parsing Notifications",id:"parsing-notifications",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["NEAR allows applications to send notifications to their users. Notifications is implemented as a particular case of ",(0,t.jsx)(n.a,{href:"/bos/api/indexing",children:"indexed actions"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"sending-notifications",children:"Sending Notifications"}),"\n",(0,t.jsxs)(n.p,{children:["Sending a notification is as simple as including the ",(0,t.jsx)(n.code,{children:"notify"})," action for the indexer, with a ",(0,t.jsx)(n.code,{children:"key"})," and a ",(0,t.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"key"})," tells ",(0,t.jsx)(n.strong,{children:"which account"})," to notify."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"value"})," includes the ",(0,t.jsx)(n.a,{href:"#notification-types",children:"notification type"})," and the item being notified of."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Social.set({\n  index: {\n    notify: {\n      key: "mob.near",\n      value: {\n        type: "like",\n        item: {\n          type: "social",\n          path: "mob.near/post/main",\n          blockHeight: 102169725\n        }\n      }\n    }\n  }\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the account executing the code is notifying ",(0,t.jsx)(n.code,{children:"mob.near"})," that they liked their social post created at the block height ",(0,t.jsx)(n.code,{children:"102169725"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"notification-types",children:"Notification Types"}),"\n",(0,t.jsx)(n.p,{children:"Since notifications are indexed actions, anyone can create their own kind of notification."}),"\n",(0,t.jsx)(n.p,{children:"While there is no standard for notifications, we recommend using the following types:"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(s.Z,{value:"Custom",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Social.set({\n  index: JSON.stringify({\n    notify: {\n      key: "mob.near",\n      value: {\n        type: "custom",\n        message: "A message in the notification",\n        widget: "The widget to open when clicking on the notification",\n        params: { parameters: "to pass to the widget", ... },\n      },\n    }\n  })\n});\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": currently, only near.org implements custom notifications"]})]}),(0,t.jsxs)(s.Z,{value:"Like",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Social.set({\n  index: JSON.stringify({\n    notify: {\n      key: "mob.near",\n      value: {\n        type: "like",\n        item: {\n          type: "social",\n          path: "mob.near/post/main",\n          blockHeight: 102169725\n        }\n      }\n    }\n  })\n})\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reference"}),": ",(0,t.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/LikeButton&tab=source",children:"LikeButton"})]})]}),(0,t.jsxs)(s.Z,{value:"Comment",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Social.set({\n  index: JSON.stringify({\n    notify: {\n      key: "nearhacks.near",\n      value: {\n        type: "comment",\n        item: {\n          type: "social",\n          path: "nearhacks.near/post/main",\n          blockHeight: 102224773\n        }\n      }\n    }\n  })\n})\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reference"}),": ",(0,t.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/Comments.Compose&tab=source",children:"CommentButton"})]})]}),(0,t.jsxs)(s.Z,{value:"Follow",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Social.set({\n  index: JSON.stringify({\n    notify: {\n      key: "mob.near",\n      value: {\n        type: "follow",\n      }\n    }\n  })\n})\n'})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reference"}),": ",(0,t.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/FollowButton&tab=source",children:"FollowButton"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["There is no standard for notifications, but you can contribute to create one ",(0,t.jsx)(n.a,{href:"https://github.com/NearSocial/standards/pull/19/files",children:"in this public discussion"}),"."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parsing-notifications",children:"Parsing Notifications"}),"\n",(0,t.jsx)(n.p,{children:"In order to get all notifications for an user, we make a call to the Social indexer."}),"\n",(0,t.jsx)(o.W,{id:"1",height:"190px",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'  return Social.index(\n    "notify",\n    "mob.near",\n    {\n      limit: 10,\n      order: "desc",\n      subscribe: true,\n    }\n  );\n'})})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Please notice that anyone can create a notification for the user, and thus some form of filtering might be needed."})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can also check how the ",(0,t.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/NotificationsPage&tab=source",children:"Notifications Page"})," is implemented."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,n,i)=>{i.d(n,{Z:()=>s});i(67294);var t=i(36905);const a={tabItem:"tabItem_Ymn6"};var r=i(85893);function s(e){var n=e.children,i=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:i,children:n})}},74866:(e,n,i)=>{i.d(n,{Z:()=>w});var t=i(67294),a=i(36905),r=i(12466),s=i(16550),o=i(20469),l=i(91980),c=i(67392),u=i(50012);function d(e){var n,i;return null!=(n=null==(i=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:i.filter(Boolean))?n:[]}function h(e){var n=e.values,i=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(i);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,i])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,i=void 0!==n&&n,a=e.groupId,r=(0,s.k6)(),o=function(e){var n=e.queryString,i=void 0!==n&&n,t=e.groupId;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:i,groupId:a});return[(0,l._X)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function m(e){var n,i,a,r,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=h(e),g=(0,t.useState)((function(){return function(e){var n,i=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!f({value:i,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+i+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return i}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),x=g[0],v=g[1],b=p({queryString:c,groupId:d}),j=b[0],y=b[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),i=(0,u.Nk)(n),a=i[0],r=i[1],[a,(0,t.useCallback)((function(e){n&&r.set(e)}),[n,r])]),N=w[0],k=w[1],S=function(){var e=null!=j?j:N;return f({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){S&&v(S)}),[S]),{selectedValue:x,selectValue:(0,t.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),k(e)}),[y,k,m]),tabValues:m}}var g=i(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(85893);function b(e){var n=e.className,i=e.block,t=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,r.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,i=l.indexOf(n),a=o[i].value;a!==t&&(c(n),s(a))},d=function(e){var n,i=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;i=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var r,s=l.indexOf(e.currentTarget)-1;i=null!=(r=l[s])?r:l[l.length-1]}null==(n=i)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},n),children:o.map((function(e){var n=e.value,i=e.label,r=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},r,{className:(0,a.Z)("tabs__item",x.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===n}),children:null!=i?i:n}),n)}))})}function j(e){var n=e.lazy,i=e.children,a=e.selectedValue,r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){var s=r.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(b,Object.assign({},e,n)),(0,v.jsx)(j,Object.assign({},e,n))]})}function w(e){var n=(0,g.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},42352:(e,n,i)=>{i.d(n,{W:()=>o});var t=i(67294),a=i(16729),r=i(91262),s=i(85893);function o(e){var n=e.children,o=e.id,l=void 0===o?1:o,c=e.height,u=void 0===c?"160px":c;return(0,s.jsx)(r.Z,{fallback:(0,s.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(x){}var r=i(58613),o=r.Widget,c=r.useInitNear,d=i(2302).ZP,h=(0,t.useState)(e),f=h[0],p=h[1],m=c().initNear,g=(0,a.O)().selector;return(0,t.useEffect)((function(){m&&g&&m({networkId:"mainnet",selector:g})}),[m,g]),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{class:"monaco",children:(0,s.jsx)(d,{height:u,value:f,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return p(e)}})}),(0,s.jsxs)("div",{class:"code_iframe",children:[(0,s.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,s.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,s.jsx)("hr",{class:"preview-border"}),(0,s.jsx)("div",{class:"bootstrap-scope",children:(0,s.jsx)("div",{class:"vm-widget",children:(0,s.jsx)(o,{code:f},l)})})]})]})}})}}}]);