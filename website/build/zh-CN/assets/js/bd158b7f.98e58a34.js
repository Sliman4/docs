"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8139],{21472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=t(85893),r=t(11151),s=(t(74866),t(85162)),o=t(77229);const i={id:"quickstart-frontend",title:"Hello WebApp",sidebar_label:"\u2b50 Quickstart a WebApp"},l=void 0,c={id:"develop/integrate/quickstart-frontend",title:"Hello WebApp",description:"Most interactions with the NEAR ecosystem can be grouped in 2 categories:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/integrate/quickstart.md",sourceDirName:"2.develop/integrate",slug:"/develop/integrate/quickstart-frontend",permalink:"/zh-CN/develop/integrate/quickstart-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/integrate/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{id:"quickstart-frontend",title:"Hello WebApp",sidebar_label:"\u2b50 Quickstart a WebApp"},sidebar:"build",previous:{title:"What are Web3 Apps?",permalink:"/zh-CN/develop/web3-apps/whatareweb3apps"},next:{title:"Integrating Contracts",permalink:"/zh-CN/develop/integrate/frontend"}},d={},h=[{value:"Create NEAR App",id:"create-near-app",level:2},{value:"Landing Page",id:"landing-page",level:2},{value:"Under the Hood",id:"under-the-hood",level:3},{value:"Navigation Bar &amp; Login",id:"navigation-bar--login",level:3},{value:"Interacting with NEAR",id:"interacting-with-near",level:2},{value:"Under the Hood",id:"under-the-hood-1",level:3},{value:"Interacting with a Component",id:"interacting-with-a-component",level:2},{value:"Under the Hood",id:"under-the-hood-2",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Most interactions with the NEAR ecosystem can be grouped in 2 categories:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Interacting with a ",(0,a.jsx)(n.a,{href:"/develop/contracts/quickstart",children:"NEAR smart contract"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Interacting with a ",(0,a.jsx)(n.a,{href:"/bos/tutorial/quickstart",children:"NEAR component"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In this guide we will show you how to quickly spin-up an application where users can ",(0,a.jsx)(n.strong,{children:"login"})," using their wallets and interact with both ",(0,a.jsx)(n.strong,{children:"contracts"})," and ",(0,a.jsx)(n.strong,{children:"components"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Furthermore, the application readily integrates a ",(0,a.jsx)(n.code,{children:"Web3 wallet"}),", allowing people to use ",(0,a.jsx)(n.code,{children:"Metamask"})," to interact with multi-chain components."]}),"\n",(0,a.jsx)(n.admonition,{title:"Searching to integrate NEAR in your App?",type:"tip",children:(0,a.jsxs)(n.p,{children:["If you already have an application and want to integrate NEAR into it, we recommend you to first go through this guide and then check our documentation on ",(0,a.jsx)(n.a,{href:"/zh-CN/develop/integrate/frontend",children:"integrating NEAR to a frontend"})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"create-near-app",children:"Create NEAR App"}),"\n",(0,a.jsxs)(n.p,{children:["If you already have ",(0,a.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js"})," installed, simply run:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"  npx create-near-app@latest\n"})}),"\n",(0,a.jsx)(n.p,{children:"Use the interactive menu to set up:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"A Near Gateway (Web App)"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"NextJs + React"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"Using pnpm",type:"tip",children:(0,a.jsxs)(n.p,{children:["While you can use our app with any package manager, we recommend you to skip the installation step and manually install the dependencies using ",(0,a.jsx)(n.code,{children:"pnpm i"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["Once the folder is ready - and all dependencies installed - you can start the development server using ",(0,a.jsx)(n.code,{children:"pnpm"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm dev\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.code,{children:"http://localhost:3000"})," in your browser to view the dApp. Note that since the dApp uses NextJS the app might take longer to load the pages on first visit."]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:" The app is not starting? "}),(0,a.jsxs)(n.p,{children:["Make sure you are using ",(0,a.jsx)(n.strong,{children:"node >= v18"}),", you can easily switch versions using ",(0,a.jsx)(n.code,{children:"nvm use 18"})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"landing-page",children:"Landing Page"}),"\n",(0,a.jsx)(n.p,{children:"Once the app starts you will see the landing page, rendering a navigation bar that allows users to login using their NEAR wallet, and two pathways:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"img",src:t(27820).Z+"",width:"1916",height:"915"})," ",(0,a.jsx)(n.em,{children:"Landing page of Hello NEAR Gateway"})]}),"\n",(0,a.jsx)(n.p,{children:"Go ahead and sign in with your NEAR account. If you don't have one, you can create one on the fly."}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"under-the-hood",children:"Under the Hood"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.js"})," uses a template system, where each page is a React component."]}),"\n",(0,a.jsxs)(n.p,{children:["Our app's template is defined at ",(0,a.jsx)(n.code,{children:"./src/app/layout.js"}),". It does two things:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Initializes a ",(0,a.jsx)(n.a,{href:"/zh-CN/tools/wallet-selector",children:"wallet selector"}),", and stores it so other components can access it later."]}),"\n",(0,a.jsx)(n.li,{children:"Renders the navigation menu and the page's content."}),"\n"]}),"\n",(0,a.jsx)(o.Ey,{url:"https://github.com/near/create-near-app/blob/master/templates/frontend/next-app/src/app/layout.js",language:"jsx",start:"6",end:"21"}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"What it the wallet selector?"}),(0,a.jsxs)(n.p,{children:["The wallet selector is a component that allows users to select their preferred Near wallet to login. Our application implements a ",(0,a.jsx)(n.code,{children:"useInitWallet"})," hook, that initializes a wallet selector and stores it so other components can access it later."]})]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"navigation-bar--login",children:"Navigation Bar & Login"}),"\n",(0,a.jsxs)(n.p,{children:["The navigation bar implements buttons to ",(0,a.jsx)(n.code,{children:"login"})," and ",(0,a.jsx)(n.code,{children:"logout"})," users with their Near wallet."]}),"\n",(0,a.jsxs)(n.p,{children:["The code for the navigation bar can be found at ",(0,a.jsx)(n.code,{children:"./src/app/navigation.js"}),". The login and logout buttons are implemented by using the ",(0,a.jsx)(n.code,{children:"logIn"})," and ",(0,a.jsx)(n.code,{children:"logOut"})," methods from the wallet selector previously initialized:"]}),"\n",(0,a.jsx)(o.Ey,{url:"https://github.com/near/create-near-app/blob/master/templates/frontend/next-app/src/components/navigation.js",language:"jsx",start:"10",end:"22"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"interacting-with-near",children:"Interacting with NEAR"}),"\n",(0,a.jsxs)(n.p,{children:["Now that you understand how the landing page works, we can move to the ",(0,a.jsx)(n.code,{children:"Near Integration"})," page, which retrieves a greeting from the ",(0,a.jsx)(n.a,{href:"https://testnet.nearblocks.io/address/hello.near-examples.testnet",children:"hello.near-examples.testnet"})," contract."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"img",src:t(68021).Z+"",width:"1910",height:"912"})," ",(0,a.jsxs)(n.em,{children:["View of the ",(0,a.jsx)(n.code,{children:"Near Integration"})," page"]})]}),"\n",(0,a.jsx)(n.p,{children:"Login if you haven't done it yet and you will see a simple form that allows you to store a greeting in the smart contract."}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"under-the-hood-1",children:"Under the Hood"}),"\n",(0,a.jsxs)(n.p,{children:["Interactions with NEAR are done using the ",(0,a.jsx)(n.code,{children:"useWallet"})," hook to retrieve both the ",(0,a.jsx)(n.code,{children:"viewMethod"})," and ",(0,a.jsx)(n.code,{children:"callMethod"})," methods and the ",(0,a.jsx)(n.code,{children:"signedAccountId"})," property from the ",(0,a.jsx)(n.code,{children:"wallet selector"}),"."]}),"\n",(0,a.jsx)(o.Ey,{url:"https://github.com/near/create-near-app/blob/master/templates/frontend/next-app/src/app/hello-near/page.js",language:"jsx",start:"12",end:"32"}),"\n",(0,a.jsxs)(n.p,{children:["On load, the first ",(0,a.jsx)(n.code,{children:"useEffect"})," hook will call the contract's ",(0,a.jsx)(n.code,{children:"get_greeting"})," method and set the ",(0,a.jsx)(n.code,{children:"greeting"})," state to the result."]}),"\n",(0,a.jsxs)(n.p,{children:["If the user is logged in, the ",(0,a.jsx)(n.code,{children:"saveGreeting"})," method will call the contract's ",(0,a.jsx)(n.code,{children:"set_greeting"})," method and set the ",(0,a.jsx)(n.code,{children:"greeting"})," state to the result."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"interacting-with-a-component",children:"Interacting with a Component"}),"\n",(0,a.jsx)(n.p,{children:"Now let's take a look at the Components page. Go ahead and click on the card titled Web3 Components at the bottom on the page. Once you do you'll be taken to the screen below:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"img",src:t(96767).Z+"",width:"1916",height:"918"})," ",(0,a.jsx)(n.em,{children:"The Near Components Page"})]}),"\n",(0,a.jsx)(n.p,{children:"If you're following along, you should already be logged into your NEAR account. If you aren't, go ahead and do so now."}),"\n",(0,a.jsx)(n.p,{children:"You'll see that once you're logged in you are able to interact with the components that come included with the app."}),"\n",(0,a.jsx)(n.admonition,{title:"Ethereum Components",type:"info",children:(0,a.jsx)(n.p,{children:"To interact with the Ethereum components (a Lido) you will need to have Metamask, or other web3 compatible wallets"})}),"\n",(0,a.jsx)(n.admonition,{title:"Ethereum Mainnet",type:"warning",children:(0,a.jsxs)(n.p,{children:["While the component's code is stored in the ",(0,a.jsx)(n.strong,{children:"Near testnet"}),", the Lido component is connected to the ",(0,a.jsx)(n.strong,{children:"Ethereum mainnet"}),"."]})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"under-the-hood-2",children:"Under the Hood"}),"\n",(0,a.jsxs)(n.p,{children:["The source code (located in ",(0,a.jsx)(n.code,{children:"./src/hello-components/page.js"}),") shows us that the page is rendering components pulled from the SocialDB:"]}),"\n",(0,a.jsxs)(o.O2,{children:[(0,a.jsx)(s.Z,{value:"page.js",children:(0,a.jsx)(o.Ey,{url:"https://github.com/near/create-near-app/blob/master/templates/frontend/next-app/src/app/hello-components/page.js",start:"25",end:"34",language:"jsx"})}),(0,a.jsx)(s.Z,{value:"vm-components.js",children:(0,a.jsx)(o.Ey,{url:"https://github.com/near/create-near-app/blob/master/templates/frontend/next-app/src/components/vm-component.js",language:"jsx"})})]}),"\n",(0,a.jsxs)(n.p,{children:["Particularly, the ",(0,a.jsx)(n.code,{children:"Component"})," in the main page are wrappers around the ",(0,a.jsx)(n.code,{children:"Widget"})," component of the SocialVM."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,a.jsx)(n.p,{children:"That's it for our quickstart  tutorial. You have now seen a fully functional frontend that can talk with NEAR contracts and render Web3 components."}),"\n",(0,a.jsxs)(n.p,{children:["If you have any questions, do not hesitate in joining us on ",(0,a.jsx)(n.a,{href:"https://near.chat",children:"Discord"}),". We regularly host Office Hours, in which you can join our voice channel and ask questions."]}),"\n",(0,a.jsx)(n.p,{children:"Happy coding!"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),r=t(36905),s=t(12466),o=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,o.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function m(e){var n,t,r,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,m=u(e),j=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:m})})),x=j[0],f=j[1],v=g({queryString:c,groupId:h}),b=v[0],w=v[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),N=y[0],k=y[1],A=function(){var e=null!=b?b:N;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){A&&f(A)}),[A]),{selectedValue:x,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),w(e),k(e)}),[w,k,m]),tabValues:m}}var j=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function v(e){var n=e.className,t=e.block,a=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(c(n),o(r))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;t=null!=(s=l[o])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},s,{className:(0,r.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=s.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function w(e){var n=m(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(v,Object.assign({},e,n)),(0,f.jsx)(b,Object.assign({},e,n))]})}function y(e){var n=(0,j.Z)();return(0,f.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>d,O2:()=>l,SQ:()=>c});t(67294);var a=t(74866),r=t(85162),s=t(95665),o=t.n(s),i=t(85893);function l(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,s=t.end,o=t.fname;if(e.type===d)return d({url:a,start:r,end:s,language:n,fname:o});return e}(e,t)})),1==n.length?(0,i.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function d(e){var n=e.url,t=e.start,a=e.end,r=e.language,s=e.fname,l=n+"#";return t&&a&&(l+="L"+t+"-L"+a+"#"),(0,i.jsx)(o(),{language:r,fname:s,children:l})}},96767:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hello-near-components-a087b6faa600f1b4d58c5f1afaa40a9d.png"},68021:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hello-near-gateway-d58319dffd732fa79762a044d94ca39e.png"},27820:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hello-near-landing-page-2b5dd73c1781ad60fd87651a046d015e.png"}}]);