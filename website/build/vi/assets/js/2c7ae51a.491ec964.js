"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9838],{9893:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=s(85893),a=s(11151);const r={sidebar_position:2,sidebar_label:"Set up Rust and a contract skeleton",title:"Set up Rust, get a NEAR testnet account, NEAR CLI, and get a basic smart contract skeleton ready"},o="Getting started",i={id:"tutorials/crosswords/basics/set-up-skeleton",title:"Set up Rust, get a NEAR testnet account, NEAR CLI, and get a basic smart contract skeleton ready",description:"In this tutorial we'll get a testnet account, use NEAR CLI to add a key to our computer's file system, and set up the basic skeleton of a Rust smart contract.",source:"@site/../docs/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/set-up-skeleton",permalink:"/vi/tutorials/crosswords/basics/set-up-skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1701811626,formattedLastUpdatedAt:"5 thg 12, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Set up Rust and a contract skeleton",title:"Set up Rust, get a NEAR testnet account, NEAR CLI, and get a basic smart contract skeleton ready"},sidebar:"contracts",previous:{title:"Crossword Game Overview",permalink:"/vi/tutorials/crosswords/basics/overview"},next:{title:"Add basic code, create a subaccount, and call methods",permalink:"/vi/tutorials/crosswords/basics/add-functions-call"}},l={},c=[{value:"Getting a testnet account",id:"getting-a-testnet-account",level:2},{value:"Creating a new key on your computer",id:"creating-a-new-key-on-your-computer",level:2},{value:"Setting up Rust",id:"setting-up-rust",level:2},{value:"Install Rust using <code>rustup</code>",id:"install-rust-using-rustup",level:3},{value:"Add Wasm toolchain",id:"add-wasm-toolchain",level:3},{value:"Start writing Rust!",id:"start-writing-rust",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial we'll get a testnet account, use NEAR CLI to add a key to our computer's file system, and set up the basic skeleton of a Rust smart contract."}),"\n",(0,n.jsx)(t.h2,{id:"getting-a-testnet-account",children:"Getting a testnet account"}),"\n",(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"NEAR Wallet for testnet"})," and register for a free account. For the purposes of this tutorial, you may skip the option to add two-factor authentication if you wish."]}),"\n",(0,n.jsx)(t.admonition,{title:"What just happened?",type:"note",children:(0,n.jsx)(t.p,{children:"When you created your NEAR testnet account, a private key was created and placed into your browser's local storage. You may inspect this using developer tools and see it."})}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-new-key-on-your-computer",children:"Creating a new key on your computer"}),"\n",(0,n.jsxs)(t.p,{children:["We'll want to use a command-line interface (CLI) tool to deploy a contract, but at the moment the private key only exists in the browser. Next we'll ",(0,n.jsx)(t.em,{children:"add a new key"})," to the testnet account and have this stored locally on our computer as a JSON file. (Yes, you can have multiple keys on your NEAR account, which is quite powerful!)"]}),"\n",(0,n.jsxs)(t.p,{children:["Let's install NEAR CLI. (Please ensure you ",(0,n.jsx)(t.a,{href:"https://nodejs.org/",children:"have NodeJS"})," > 12.)"]}),"\n",(0,n.jsx)(t.p,{children:"npm install -g near-cli"}),"\n",(0,n.jsx)(t.p,{children:"You may now run:"}),"\n",(0,n.jsx)(t.p,{children:"near"}),"\n",(0,n.jsxs)(t.p,{children:["to see various commands, which are covered ",(0,n.jsx)(t.a,{href:"https://docs.near.org/tools/near-cli",children:"in detail here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:'We\'ll start by "logging in" with this command:'}),"\n",(0,n.jsx)(t.p,{children:"near login"}),"\n",(0,n.jsxs)(t.p,{children:["This will bring you to NEAR Wallet again where you can confirm the creation of a ",(0,n.jsx)(t.strong,{children:"full-access"})," key. We'll get to full-access and function-call access keys later, just know that for powerful actions like \"deploy\" we'll need a full-access key. Follow the instructions from the login command to create a key on your hard drive. This will be located in your operating system's home directory in a folder called ",(0,n.jsx)(t.code,{children:".near-credentials"}),"."]}),"\n",(0,n.jsx)(t.admonition,{title:"How was a key added?",type:"note",children:(0,n.jsxs)(t.p,{children:["When you typed ",(0,n.jsx)(t.code,{children:"near login"}),', NEAR CLI generated a key pair: a private and public key. It kept the private key tucked away in a JSON file and sent the public key as a URL parameter to NEAR Wallet. The URL is long and contains other info instructing NEAR Wallet to "add a full access key" to the account. Our browser\'s local storage had a key (created when the account was made) that is able to do several things, including adding another key. It took the public key from the URL parameter, used it as an argument, and voil\xe0: the testnet account has an additional key!']})}),"\n",(0,n.jsxs)(t.p,{children:["You can see the keys associated with your account by running the following command, replacing ",(0,n.jsx)(t.code,{children:"friend.testnet"})," with your account name:"]}),"\n",(0,n.jsx)(t.p,{children:"near keys friend.testnet"}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-rust",children:"Setting up Rust"}),"\n",(0,n.jsxs)(t.p,{children:["You may have found the ",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/stable/book",children:"online Rust Book"}),", which is a great resource for getting started with Rust. However, there are key items that are different when it comes to blockchain development. Namely, that smart contracts are ",(0,n.jsx)(t.a,{href:"https://learning-rust.github.io/docs/cargo-crates-and-basic-project-structure/#crate",children:"technically libraries and not binaries"}),", but for now just know that we won't be using some commands commonly found in the Rust Book."]}),"\n",(0,n.jsx)(t.admonition,{title:"We won't be using",type:"caution",children:(0,n.jsx)(t.p,{children:"cargo run\nduring smart contract development."})}),"\n",(0,n.jsx)(t.p,{children:"Instead, we'll be iterating on our smart contract by building it and running tests."}),"\n",(0,n.jsxs)(t.h3,{id:"install-rust-using-rustup",children:["Install Rust using ",(0,n.jsx)(t.code,{children:"rustup"})]}),"\n",(0,n.jsxs)(t.p,{children:["Please see the directions from the ",(0,n.jsx)(t.a,{href:"https://rustup.rs/#",children:"Rustup site"}),". For OS X or Unix, you may use:"]}),"\n",(0,n.jsxs)(t.p,{children:["curl --proto '=https' --tlsv1.2 -sSf ",(0,n.jsx)(t.a,{href:"https://sh.rustup.rs",children:"https://sh.rustup.rs"})," | sh"]}),"\n",(0,n.jsxs)(t.p,{children:["(Taken from the ",(0,n.jsx)(t.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust installation guide"}),")"]}),"\n",(0,n.jsx)(t.h3,{id:"add-wasm-toolchain",children:"Add Wasm toolchain"}),"\n",(0,n.jsx)(t.p,{children:"Smart contracts compile to WebAssembly (Wasm) so we'll add the toolchain for Rust."}),"\n",(0,n.jsx)(t.p,{children:"rustup target add wasm32-unknown-unknown"}),"\n",(0,n.jsxs)(t.p,{children:["(More info on ",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/edition-guide/rust-2018/platform-and-target-support/webassembly-support.html",children:"targets and this toolchain here"}),".)"]}),"\n",(0,n.jsx)(t.h2,{id:"start-writing-rust",children:"Start writing Rust!"}),"\n",(0,n.jsxs)(t.p,{children:["There's a basic repository that's helpful to clone or download ",(0,n.jsx)(t.a,{href:"https://github.com/near/boilerplate-template-rs",children:"located here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The first thing we'll do is modify the manifest file at ",(0,n.jsx)(t.code,{children:"Cargo.toml"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:'[package]\n-  name = "rust-template"\n+  name = "my-crossword"\nversion = "0.1.0"\n- authors = ["Near Inc <hello@near.org>"]\n+ authors = ["NEAR Friend <friend@example.com>"]\nedition = "2018"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["By changing the ",(0,n.jsx)(t.code,{children:"name"})," here, we'll be changing the compiled Wasm file's name after running the build script. (",(0,n.jsx)(t.code,{children:"build.sh"})," for OS X and Linux, ",(0,n.jsx)(t.code,{children:"build.bat"})," for Windows.) After running the build script, we can expect to find our compiled Wasm smart contract in ",(0,n.jsx)(t.code,{children:"res/my_crossword.wasm"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Now let's look at our main file, in ",(0,n.jsx)(t.code,{children:"src/lib.rs"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near/boilerplate-template-rs/blob/f1edeead98a9ec12c3f6db311f62025305f57874/contract/src/lib.rs#L8-L44\n"})}),"\n",(0,n.jsx)(t.p,{children:"As you can see, this is a stub that's ready to be filled in. Let's pause and point out a few items:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Note the ",(0,n.jsxs)(t.a,{href:"/sdk/rust/contract-structure/near-bindgen",children:[(0,n.jsx)(t.strong,{children:"near_bindgen"})," macro"]})," is above the struct and the impl"]}),"\n",(0,n.jsxs)(t.li,{children:["Here the main struct is called ",(0,n.jsx)(t.code,{children:"Contract"}),", while in other examples it might be ",(0,n.jsx)(t.code,{children:"Counter"})," or something else. This is purely stylistic, but you may learn more from the link in the previous bullet."]}),"\n",(0,n.jsxs)(t.li,{children:["You may notice the word \"Borsh\" and wonder what that means. This is a binary serializer. Eventually, we'll want to save data as ones and zeroes to validators' hard drives, and do it efficiently. We use Borsh for this, as is explained ",(0,n.jsx)(t.a,{href:"https://borsh.io",children:"on this website"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Next, let's modify this contract little by little\u2026"})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(67294);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);