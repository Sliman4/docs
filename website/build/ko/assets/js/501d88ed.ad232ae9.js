"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6163],{38616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(85893),o=t(11151);const a={id:"bos-gateway",title:"Gateways"},s=void 0,r={id:"bos/tutorial/bos-gateway",title:"Gateways",description:"The Components you create are stored in the NEAR blockchain. To read and execute their code you will need a Gateway.",source:"@site/../docs/bos/tutorial/gateway.md",sourceDirName:"bos/tutorial",slug:"/bos/tutorial/bos-gateway",permalink:"/ko/bos/tutorial/bos-gateway",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/tutorial/gateway.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1704817578,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 9\uc77c",frontMatter:{id:"bos-gateway",title:"Gateways"},sidebar:"integrate",previous:{title:"Overview",permalink:"/ko/bos/overview"},next:{title:"Components",permalink:"/ko/bos/components"}},l={},c=[{value:"Building a Gateway",id:"building-a-gateway",level:2},{value:"Deploying Gateway in Vercel",id:"deploying-gateway-in-vercel",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/ko/bos/components",children:(0,i.jsx)(n.code,{children:"Components"})})," you create are stored in the NEAR blockchain. To read and execute their code you will need a ",(0,i.jsx)(n.code,{children:"Gateway"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"Gateway"})," is nothing but a ",(0,i.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.js"})," application with the added ability of retrieving components from the blockchain and rendering their code."]}),"\n",(0,i.jsxs)(n.p,{children:["This allow you to create the frontend of your application combining classic ",(0,i.jsx)(n.code,{children:"Next"})," components with ",(0,i.jsx)(n.code,{children:"Web3"})," components that interact with your desired blockchain."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"building-a-gateway",children:"Building a Gateway"}),"\n",(0,i.jsxs)(n.p,{children:["Building your own ",(0,i.jsx)(n.code,{children:"Gateway"})," is as simple as cloning the ",(0,i.jsx)(n.a,{href:"https://github.com/near-examples/bos-gateway",children:"example repository"}),", and running it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Clone gateway\ngit clone git@github.com:near-examples/bos-gateway.git\n\n# Install dependencies\ncd bos-gateway\nnpm install\n\n# Run the gateway\nnpm run dev\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Configure the Gateway",type:"tip",children:(0,i.jsxs)(n.p,{children:["Make sure to change the ",(0,i.jsx)(n.code,{children:"src/data/bos-components.ts"})," file"]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"deploying-gateway-in-vercel",children:"Deploying Gateway in Vercel"}),"\n",(0,i.jsxs)(n.p,{children:["Launching your own NEAR gateway instance is a quick and simple process. In this example we'll be using ",(0,i.jsx)(n.a,{href:"https://vercel.com",children:"Vercel"})," to build and deploy a new NEAR gateway, but you can also use other platforms."]}),"\n",(0,i.jsx)(n.p,{children:"Just follow these easy steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Clone the ",(0,i.jsx)(n.a,{href:"https://github.com/near-examples/bos-gateway",children:(0,i.jsx)(n.code,{children:"near/bos-gateway"})})," repository"]}),"\n",(0,i.jsxs)(n.li,{children:["Sign up on ",(0,i.jsx)(n.a,{href:"https://vercel.com/",children:"Vercel"})," and import the cloned repository"]}),"\n",(0,i.jsxs)(n.li,{children:["Setup the project:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Any team name"}),"\n",(0,i.jsxs)(n.li,{children:["Build command: ",(0,i.jsx)(n.code,{children:"npm run build"})]}),"\n",(0,i.jsxs)(n.li,{children:["Output directory: ",(0,i.jsx)(n.code,{children:"dist"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Press ",(0,i.jsx)("kbd",{children:"Deploy"})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.a,{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnear%2Fnear-discovery-alpha&build-command=npm%20run%20build&install-command=npm%20install&output-directory=dist",children:"on this link"})," to try it out."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"vercel setup",src:t(16138).Z+"",width:"948",height:"560"})}),"\n",(0,i.jsx)(n.p,{children:"Now just wait a few minutes for Vercel to build the website and enjoy your NEAR gateway!"}),"\n",(0,i.jsx)(n.admonition,{title:"Customization",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you want to host the gateway on a specific domain you can configure it on Vercel."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you want to change the home page component, modify ",(0,i.jsx)(n.code,{children:"src/data/widgets.js"})," in your fork to point at different components."]}),"\n"]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},16138:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/vercel-gateway-736ac35fc129ea7ef7921e6265f1b9d8.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);