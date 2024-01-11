"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8874],{20891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var o=t(85893),i=t(11151);const s=t.p+"assets/images/logging-in-2fae41d7bd3bfaa9509e199426ef897e.png",r=t.p+"assets/images/chapter-2-explorer-transfer-620c7e86d643ecdf5f6a609731a6574a.jpg",a={sidebar_position:6,sidebar_label:"Access keys and login 2/2",title:"Implementing the login button"},l="Add the login functionality",c={id:"tutorials/crosswords/beginner/logging-in-implementation",title:"Implementing the login button",description:"Plan",source:"@site/../docs/3.tutorials/crosswords/02-beginner/06-logging-in-implementation.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/logging-in-implementation",permalink:"/zh-CN/tutorials/crosswords/beginner/logging-in-implementation",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/06-logging-in-implementation.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"2023\u5e7412\u67089\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Access keys and login 2/2",title:"Implementing the login button"},sidebar:"contracts",previous:{title:"Access keys and login 1/2",permalink:"/zh-CN/tutorials/crosswords/beginner/logging-in"},next:{title:"Overview",permalink:"/zh-CN/tutorials/crosswords/intermediate/overview"}},d={},h=[{value:"Plan",id:"plan",level:2},{value:"Adding the button",id:"adding-the-button",level:2},{value:"Call the contract function from JavaScript",id:"call-the-contract-function-from-javascript",level:2},{value:"Fetch the puzzle, finish up",id:"fetch-the-puzzle-finish-up",level:2},{value:"Run the React app",id:"run-the-react-app",level:2},{value:"For kicks",id:"for-kicks",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"add-the-login-functionality",children:"Add the login functionality"}),"\n",(0,o.jsx)(n.h2,{id:"plan",children:"Plan"}),"\n",(0,o.jsxs)(n.p,{children:["We're going to add a login button that uses ",(0,o.jsx)(n.code,{children:"near-api-js"})," to login with NEAR."]}),"\n",(0,o.jsx)(n.p,{children:"Below is the workflow of logging in:"}),"\n",(0,o.jsx)("img",{src:s,alt:"Three steps to logging in. 1. click the login button we will build. 2. It creates a private key in the browser local storage. 3. Redirected to NEAR Wallet where you sign, creating a new key"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"User clicks the login button"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"near-api-js"})," creates a private key in the browser"]}),"\n",(0,o.jsxs)(n.li,{children:["A redirect to NEAR Wallet occurs, passing the public key. NEAR Wallet (often) has a full-access key capable of the ",(0,o.jsx)(n.code,{children:"AddKey"})," action. The user follows a wizard, ultimately authorizing the creation of a new key."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"adding-the-button",children:"Adding the button"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"src"})," directory we'll look at:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"index.js"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"App.js"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"We won't go over every change, but instead point to the new logic."}),"\n",(0,o.jsxs)(n.p,{children:["First we set up a ",(0,o.jsx)(n.code,{children:"WalletConnection"})," object from our JavaScript library:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/1d64bf29c3376a18c71e5c5a075e29824d7a55f5/src/index.js#L12-L20\n"})}),"\n",(0,o.jsx)(n.p,{children:"It's then used in React:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const signIn = () => {\n  walletConnection.requestSignIn(\n    nearConfig.contractName,\n    '', // title. Optional, by the way\n    '', // successUrl. Optional, by the way\n    '', // failureUrl. Optional, by the way\n  );\n};\n\nconst signOut = () => {\n  walletConnection.signOut();\n  \u2026\n};\n\n\u2026\n\nreturn (\n  <div id=\"page\">\n    <h1>NEAR Crossword Puzzle</h1>\n    <div id=\"crossword-wrapper\">\n      <div id=\"login\">\n        { currentUser\n          ? <button onClick={signOut}>Log out</button>\n          : <button onClick={signIn}>Log in</button>\n        }\n      </div>\n      \u2026\n    </div>\n  </div>\n);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once logged in, that ",(0,o.jsx)(n.code,{children:"WalletConnection"})," object will be tied to the logged-in user, and they'll use that key to sign transactions and interact with the contract."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Transactions that redirect to NEAR Wallet",type:"info",children:[(0,o.jsx)(n.p,{children:"In our improved crossword puzzle, the function-call access key for the logged-in user will be signing a transaction to submit their solution."}),(0,o.jsx)(n.p,{children:"You may notice, however, that sometimes you'll be redirected to NEAR Wallet, and other times you aren't."}),(0,o.jsxs)(n.p,{children:["This goes back to an earlier rule we mentioned: function-call access keys cannot send NEAR. They cannot perform the ",(0,o.jsx)(n.code,{children:"Transfer"})," Action."]}),(0,o.jsx)(n.p,{children:"If a function call requires even 1 yoctoNEAR, NEAR Wallet (or any other wallet containing a full-access key) is required to sign the transaction."})]}),"\n",(0,o.jsx)(n.h2,{id:"call-the-contract-function-from-javascript",children:"Call the contract function from JavaScript"}),"\n",(0,o.jsxs)(n.p,{children:["The frontend code contains a check to see if the user has completed the crossword puzzle successfully. In there we'll add logic to call the ",(0,o.jsx)(n.code,{children:"submit_solution"})," function on the smart contract."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// Send the 5 NEAR prize to the logged-in winner\nlet functionCallResult = await walletConnection.account().functionCall({\n  contractId: nearConfig.contractName,\n  methodName: 'submit_solution',\n  args: {solution: seedPhrase, memo: \"Yay I won!\"},\n  gas: DEFAULT_FUNCTION_CALL_GAS, // optional param, by the way\n  attachedDeposit: 0,\n  walletMeta: '', // optional param, by the way\n  walletCallbackUrl: '' // optional param, by the way\n});\n\nif (functionCallResult && functionCallResult.transaction && functionCallResult.transaction.hash) {\n  // Display a link the NEAR Explorer\n  console.log('Transaction hash for explorer', functionCallResult.transaction.hash)\n}\n"})}),"\n",(0,o.jsxs)(n.admonition,{title:"try\u2026catch blocks",type:"tip",children:[(0,o.jsx)(n.p,{children:"It's not a bad idea to wrap these type of calls in try\u2026catch blocks to properly handle any errors that come from the blockchain."}),(0,o.jsx)(n.p,{children:"These errors can be quite helpful to the developer and the end user."})]}),"\n",(0,o.jsx)(n.h2,{id:"fetch-the-puzzle-finish-up",children:"Fetch the puzzle, finish up"}),"\n",(0,o.jsx)(n.p,{children:"In the previous chapter, the frontend had a hardcoded file containing information about the clues for a simple crossword puzzle. In this chapter, we've given the coordinates and details about the clues, but the frontend needs to fetch this information."}),"\n",(0,o.jsxs)(n.p,{children:["We're going to modify the logic surrounding our view-only call to ",(0,o.jsx)(n.code,{children:"get_unsolved_puzzles"})," on the contract. This method now returns the clue information, so we've implemented a function that puts it in the proper format for React to construct the crossword puzzle."]}),"\n",(0,o.jsxs)(n.p,{children:["This is a tutorial about Rust smart contract development, so we won't focus on the details of this, but know we've added the function ",(0,o.jsx)(n.code,{children:"mungeBlockchainCrossword"}),". This allows us to keep adding custom crossword puzzles and have the frontend be dynamic."]}),"\n",(0,o.jsx)(n.p,{children:"We'll also make other minor changes like adding a page for when there are no puzzles available, and adding a loading screen."}),"\n",(0,o.jsx)(n.h2,{id:"run-the-react-app",children:"Run the React app"}),"\n",(0,o.jsx)(n.p,{children:"If you've been following this guide closely, you'll likely just need to start the React app with:"}),"\n",(0,o.jsx)(n.p,{children:"env CONTRACT_NAME=crossword.friend.testnet npm run start"}),"\n",(0,o.jsx)(n.p,{children:"As a helpful reminder, below has the steps necessary to recreate the subaccount, build the contract, deploy the subaccount, and call methods on the contract:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# Go into the directory containing the Rust smart contract we\'ve been working on\ncd contract\n\n# Build (for Windows it\'s build.bat)\n./build.sh\n\n# Create fresh account if you wish, which is good practice\nnear delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n\n# Deploy\nnear deploy crossword.friend.testnet --wasmFile res/crossword_tutorial_chapter_2.wasm --initFunction new --initArgs \'{"owner_id": "crossword.friend.testnet"}\'\n# Add the crossword puzzle\nnear call crossword.friend.testnet new_puzzle \'{"solution_hash":"d1a5cf9ad1adefe0528f7d31866cf901e665745ff172b96892693769ad284010","answers":[{"num": 1,"start": {"x": 1,"y": 1},"direction": "Down","length": 5,"clue": "NFT market on NEAR that specializes in cards and comics."},{"num": 2,"start": {"x": 0,"y": 2},"direction": "Across","length": 13,"clue": "You can move assets between NEAR and different chains, including Ethereum, by visiting ______.app"},{"num": 3,"start": {"x": 9,"y": 1},"direction": "Down","length": 8,"clue": "NFT market on NEAR with art, physical items, tickets, and more."},{"num": 4,"start": {"x": 3,"y": 8},"direction": "Across","length": 9,"clue": "The smallest denomination of the native token on NEAR."},{"num": 5,"start": {"x": 5,"y": 8},"direction": "Down","length": 3,"clue": "You typically deploy a smart contract with the NEAR ___ tool."}]}\' --accountId crossword.friend.testnet\n  \n# Return to the project root and start the React app\ncd ..\nenv CONTRACT_NAME=crossword.friend.testnet npm run start\n'})}),"\n",(0,o.jsx)(n.h2,{id:"for-kicks",children:"For kicks"}),"\n",(0,o.jsx)(n.p,{children:"For fun, try interacting with the smart contract using the React frontend and the CLI. We can check the status of the puzzle using the CLI, solve the puzzle with the frontend, and check the status again."}),"\n",(0,o.jsx)(n.p,{children:"Before and after solving the puzzle, run this command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'    near view crossword.friend.testnet get_puzzle_status \'{"solution_hash": "d1a5cf9ad1adefe0528f7d31866cf901e665745ff172b96892693769ad284010"}\'\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This will return our enum ",(0,o.jsx)(n.code,{children:"PuzzleStatus"}),". Before solving the puzzle it should print:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"    'Unsolved'\n"})}),"\n",(0,o.jsx)(n.p,{children:"and after:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"    { Solved: { memo: 'Yay I won!' } }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After you solve the crossword puzzle you'll see a screen with a link to NEAR Explorer to look at the details of the transaction. Notice we have our ",(0,o.jsx)(n.code,{children:"Transfer"})," Action in there:"]}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{src:r,alt:"Screenshot from the NEAR Explorer highlighting a place in the transaction where 5 NEAR is sent to mike.testnet"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it for this chapter! As a reminder the full code is available at:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-2",children:"https://github.com/near-examples/crossword-tutorial-chapter-2"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);