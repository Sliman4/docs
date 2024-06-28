"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8716],{79389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var r=t(85893),o=t(11151),s=t(74866),a=t(85162),i=t(71183);const l={id:"blog-posts",title:"Blog Posts"},c=void 0,d={id:"tutorials/near-components/blog-posts",title:"Blog Posts",description:"The Blog post components enable your gateway to promote regular Near Social posts into fully fledged blog posts.",source:"@site/../docs/3.tutorials/near-components/blog-posts.md",sourceDirName:"3.tutorials/near-components",slug:"/tutorials/near-components/blog-posts",permalink:"/tutorials/near-components/blog-posts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/blog-posts.md",tags:[],version:"current",lastUpdatedBy:"Guille",lastUpdatedAt:1719586643e3,frontMatter:{id:"blog-posts",title:"Blog Posts"},sidebar:"tutorials",previous:{title:"Using IFrames",permalink:"/tutorials/near-components/using-iframes"},next:{title:"Push Notifications",permalink:"/tutorials/near-components/push-notifications"}},u={},g=[{value:"Setup",id:"setup",level:2},{value:"Blog feed URL",id:"blog-feed-url",level:3},{value:"Promoting posts",id:"promoting-posts",level:3},{value:"Blog post formatting",id:"blog-post-formatting",level:2},{value:"Header image",id:"header-image",level:4},{value:"Blog post title",id:"blog-post-title",level:4},{value:"Writing a blog post",id:"writing-a-blog-post",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The Blog post components enable your gateway to promote regular Near Social posts into fully fledged blog posts.\nIn this article you'll learn how to set up the required components so you can define a custom URL to show a clean feed of blog posts."}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.p,{children:["To set up the Blog post features on your ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-discovery/",children:(0,r.jsx)(n.code,{children:"near-discovery"})})," gateway:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add the ",(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/Blog.Feed",children:(0,r.jsx)(n.code,{children:"Blog.Feed"})})," and ",(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/BlogPostPage",children:(0,r.jsx)(n.code,{children:"BlogPostPage"})})," components"]}),"\n",(0,r.jsxs)(n.li,{children:["Add ",(0,r.jsx)(n.code,{children:"near/widget/Blog.Feed"})," and ",(0,r.jsx)(n.code,{children:"near/widget/BlogPostPage"})," to your configuration"]}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(a.Z,{value:"discovery",label:"near-discovery",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Edit your ",(0,r.jsx)(n.code,{children:"bos-components.ts"})," configuration file:"]}),"\n"]}),(0,r.jsx)(i.Ey,{fname:"bos-components.ts",language:"js",value:"near-discovery",url:"https://github.com/near/near-discovery/blob/c275ab7d70a6ee7baf3a88ace1c2e02f605da644/src/data/bos-components.ts",start:"160",end:"165"})]}),(0,r.jsxs)(a.Z,{value:"viewer",label:"nearsocial viewer",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Edit your ",(0,r.jsx)(n.code,{children:"widgets.js"})," configuration file:"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="src/data/widgets.js"',children:'const MainnetWidgets = {\n  blog: \'near/widget/Blog.Feed\',\n  blogPost: \'near/widget/BlogPostPage\',\n  image: "mob.near/widget/Image",\n  default: "mob.near/widget/Homepage",\n  viewSource: "mob.near/widget/WidgetSource",\n  widgetMetadataEditor: "mob.near/widget/WidgetMetadataEditor",\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"blog-feed-url",children:"Blog feed URL"}),"\n",(0,r.jsxs)(n.p,{children:["To set a custom URL such as ",(0,r.jsx)(n.code,{children:"/bosblog"})," for your Blog feed, and define which users will be shown on it, do the following changes on your ",(0,r.jsx)(n.code,{children:"near-discovery"})," gateway:"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(a.Z,{value:"discovery",label:"near-discovery",default:!0,children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a folder ",(0,r.jsx)(n.code,{children:"src/pages/<customURL>"})," for your desired custom path (e.g., ",(0,r.jsx)(n.code,{children:"/bosblog"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Add this ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-discovery/blob/c275ab7d70a6ee7baf3a88ace1c2e02f605da644/src/pages/bosblog/index.tsx",children:(0,r.jsx)(n.code,{children:"index.tsx"})})," file to ",(0,r.jsx)(n.code,{children:"src/pages/bosblog/"}),":"]}),"\n"]}),(0,r.jsx)(i.Ey,{fname:"index.tsx",language:"js",value:"near-discovery",url:"https://github.com/near/near-discovery/blob/c275ab7d70a6ee7baf3a88ace1c2e02f605da644/src/pages/bosblog/index.tsx",start:"1",end:"50"})]}),(0,r.jsxs)(a.Z,{value:"viewer",label:"nearsocial viewer",children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add this ",(0,r.jsx)(n.code,{children:"BlogPage.js"})," file to ",(0,r.jsx)(n.code,{children:"src/pages/"}),":"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="src/pages/BlogPage.js"',children:'import React, { useEffect, useState } from "react";\nimport { Widget } from "near-social-vm";\nimport { useParams } from "react-router-dom";\nimport { useQuery } from "../hooks/useQuery";\nimport { useHashRouterLegacy } from "../hooks/useHashRouterLegacy";\n\nexport default function BlogPage(props) {\n  useHashRouterLegacy();\n\n  const { widgetSrc } = useParams();\n  const query = useQuery();\n  const [widgetProps, setWidgetProps] = useState({});\n  const src = widgetSrc || props.widgets.default;\n  const contributors = [\'near\', \'jacksonthedev.near\'];\n\n  useEffect(() => {\n    setWidgetProps(\n      [...query.entries()].reduce((props, [key, value]) => {\n        props[key] = value;\n        return props;\n      }, {})\n    );\n  }, [query]);\n\n  if (widgetProps.accountId && widgetProps.blockHeight) {\n    return (\n    <div className="d-inline-block position-relative overflow-hidden">\n      <Widget src={props.widgets.blogPost} props={widgetProps} />{" "}\n    </div>\n    );\n  }\n\n  widgetProps.contributors = contributors;\n\n  return (\n    <div className="d-inline-block position-relative overflow-hidden">\n      <Widget src={props.widgets.blog} props={widgetProps} />{" "}\n    </div>\n  );\n}\n'})}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Update your ",(0,r.jsx)(n.code,{children:"App.js"})," router file, adding the new route to your custom path (e.g., ",(0,r.jsx)(n.code,{children:"/bosblog"}),"):"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="src/App.js"',children:'import BlogPage from "./pages/BlogPage";\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="src/App.js"',children:'            <Route path={"/signin"}>\n              <NavigationWrapper {...passProps} />\n              <SignInPage {...passProps} />\n            </Route>\n            <Route path={"/bosblog"}>\n              <NavigationWrapper {...passProps} />\n              <BlogPage {...passProps} />\n            </Route>\n'})})]})]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Edit the ",(0,r.jsx)(n.code,{children:"contributors"})," list, with the account(s) that you want to showcase on your blog feed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const contributors = ['near', 'jacksonthedev.near'];\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["That's all, your gateway setup is done and you're ready to show your blog feed.\nCheck the next sections if you want to learn more about the blog post ",(0,r.jsx)(n.a,{href:"#blog-post-formatting",children:"content formatting"})," and how to promote social messages into blog posts."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["In this code example, only promoted blog posts from users ",(0,r.jsx)(n.code,{children:"near"})," and ",(0,r.jsx)(n.code,{children:"jacksonthedev.near"})," will appear in the Blog feed when someone browses the ",(0,r.jsx)(n.code,{children:"/bosblog"})," URL."]})}),"\n",(0,r.jsx)(n.h3,{id:"promoting-posts",children:"Promoting posts"}),"\n",(0,r.jsxs)(n.p,{children:["If you're using ",(0,r.jsx)(n.code,{children:"near-discovery"})," you're all set, the ",(0,r.jsx)("kbd",{children:"Promote"})," menu is already available using the ",(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/v1.Posts.Feed",children:(0,r.jsx)(n.code,{children:"v1.Posts.Feed"})})," component."]}),"\n",(0,r.jsxs)(n.p,{children:["If you're using a different gateway or your own custom feed, and you want to allow users to promote social messages into blog posts, you can integrate this ",(0,r.jsx)(n.code,{children:"promoteToBlog"})," code snippet:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const { accountId, blockHeight, item } = props;\n\nconst promoteToBlog = () => {\n  if (state.loading) {\n    return;\n  }\n\n  if (!context.accountId && props.requestAuthentication) {\n    props.requestAuthentication();\n    return;\n  } else if (!context.accountId) {\n    return;\n  }\n\n  State.update({\n    loading: true,\n  });\n\n  const data = {\n    index: {\n      promote: JSON.stringify({\n        key: context.accountId,\n        value: {\n          operation: "add",\n          type: "blog",\n          post: item,\n          blockHeight,\n        },\n      }),\n    },\n  };\n\n  Social.set(data, {\n    onCommit: () => State.update({ loading: false }),\n    onCancel: () =>\n      State.update({\n        loading: false,\n      }),\n  });\n};\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/Posts.Menu&tab=source",children:(0,r.jsx)(n.code,{children:"Posts.Menu"})})," component for a complete implementation that includes a drop-down menu and a button to promote a blog post."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"blog-post-formatting",children:"Blog post formatting"}),"\n",(0,r.jsxs)(n.p,{children:["When writing blog posts, you can format the content using standard ",(0,r.jsx)(n.a,{href:"https://www.markdownguide.org/basic-syntax/",children:"Markdown syntax"}),".\nMarkdown is an easy-to-read, easy-to-write language for formatting plain text."]}),"\n",(0,r.jsx)(n.p,{children:"The only two special cases that you should keep in mind when writing a blog post are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the blog post's title"}),"\n",(0,r.jsx)(n.li,{children:"an optional header image"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"header-image",children:"Header image"}),"\n",(0,r.jsx)(n.p,{children:"To define an image for your blog post, just add a markdown image link at the top of your post:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"![header-image](https://example.com/image.png)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"blog-post-title",children:"Blog post title"}),"\n",(0,r.jsx)(n.p,{children:"To set the post's title, define it using a top heading tag:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"# This is the title of a demo blog post\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you're new to Markdown, you might want to check this page about ",(0,r.jsx)(n.a,{href:"https://www.markdownguide.org/basic-syntax/",children:"basic writing and formatting syntax"}),"."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"writing-a-blog-post",children:"Writing a blog post"}),"\n",(0,r.jsx)(n.p,{children:"Adding a new blog post is simple. To publish a new blog post, you only need to:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Write a regular Near Social message"}),"\n",(0,r.jsx)("img",{src:"/docs/bosblog/blog-promote1.png",width:"60%"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Repost the message and convert it to a Blog post"}),"\n",(0,r.jsxs)(n.p,{children:["Once the message has been posted, promoting it to a blog post is straight forward.\nJust click on the repost button, and select the ",(0,r.jsx)(n.code,{children:"Blog"})," option:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"blog post",src:t(75023).Z+"",width:"1066",height:"786"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["That's it, your blog post has been published, and you can find it under the ",(0,r.jsx)(n.code,{children:"Blog"})," tab in your ",(0,r.jsx)(n.a,{href:"https://dev.near.org/near/widget/ProfilePage?accountId=bucanero.near&tab=blog",children:"social profile"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"blog post",src:t(68159).Z+"",width:"2084",height:"1046"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can find the published blog post example in ",(0,r.jsx)(n.a,{href:"https://dev.near.org/near/widget/BlogPostPage?accountId=bucanero.near&blockHeight=117452680&returnLocation=/near/widget/ProfilePage?accountId=bucanero.near&tab=blog",children:"this link"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(36905);const o={tabItem:"tabItem_Ymn6"};var s=t(85893);function a(e){var n=e.children,t=e.hidden,a=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),o=t(36905),s=t(12466),a=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function g(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,o=e.groupId,s=(0,a.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:o});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function m(e){var n,t,o,s,a=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,m=g(e),f=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:m})})),b=f[0],x=f[1],j=h({queryString:c,groupId:u}),v=j[0],w=j[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),o=t[0],s=t[1],[o,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),P=y[0],k=y[1],I=function(){var e=null!=v?v:P;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){I&&x(I)}),[I]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),k(e)}),[w,k,m]),tabValues:m}}var f=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,a=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),o=i[t].value;o!==r&&(c(n),a(o))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,o=l.indexOf(e.currentTarget)+1;t=null!=(r=l[o])?r:l[0];break;case"ArrowLeft":var s,a=l.indexOf(e.currentTarget)-1;t=null!=(s=l[a])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,o.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,o=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=s.find((function(e){return e.props.value===o}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function w(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,Object.assign({},n,e)),(0,x.jsx)(v,Object.assign({},n,e))]})}function y(e){var n=(0,f.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:u(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>h,Ey:()=>f,SQ:()=>m});var r=t(67294),o=t(74866),s=t(85162),a=t(74165),i=t(15861),l=t(1841),c=t.n(l),d=t(85893);function u(){return(u=(0,i.Z)((0,a.Z)().mark((function e(n,t,r){var o,s,i,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}o=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:o=e.sent,localStorage.setItem(n,o),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=o.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):i.length,i=i.slice(t,r),l=i.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const g=function(e){var n=e.url,t=e.start,o=e.end,s=e.language,a=e.fname,i=e.metastring,l=(0,r.useState)("Loading..."),g=l[0],p=l[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),o=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+o+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return u.apply(this,arguments)}(e,t,o);r.then((function(e){return p(e)}))})),(0,d.jsxs)("div",{fname:a,children:[(0,d.jsx)(c(),{language:s,metastring:i+" showLineNumbers",children:g}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function h(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,d.jsx)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),o=t.start,s=t.end,a=t.fname;if(e.type===f)return f({url:r,start:o,end:s,language:n,fname:a});return e}(e,t)})),1==n.length?(0,d.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,d.jsx)(o.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,d.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function f(e){var n=e.url,t=e.start,r=e.end,o=e.language,s=e.fname,a=e.metastring;return g({url:n,start:t,end:r,language:o,fname:s,metastring:a})}},75023:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/blog-promote2-2a7079fa486b31d475710abd0a319c39.png"},68159:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/blog-promote3-ffce4582d397e081258bad0e03e7c6a2.png"}}]);