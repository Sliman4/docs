"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6588],{41688:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=s(85893),a=s(11151);const i={id:"gas-advanced",title:"Gas - Advanced"},o=void 0,r={id:"concepts/basics/transactions/gas-advanced",title:"Gas - Advanced",description:"Costs of complex actions",source:"@site/../docs/1.concepts/basics/transactions/gas-advanced.md",sourceDirName:"1.concepts/basics/transactions",slug:"/concepts/basics/transactions/gas-advanced",permalink:"/vi/concepts/basics/transactions/gas-advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/transactions/gas-advanced.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614,formattedLastUpdatedAt:"9 thg 12, 2023",frontMatter:{id:"gas-advanced",title:"Gas - Advanced"},sidebar:"concepts",previous:{title:"Gas",permalink:"/vi/concepts/basics/transactions/gas"},next:{title:"NEAR Data Flow",permalink:"/vi/concepts/data-flow/near-data-flow"}},c={},h=[{value:"Costs of complex actions",id:"costs-of-complex-actions",level:2},{value:"Deploying Contracts",id:"deploying-contracts",level:3},{value:"Function calls",id:"function-calls",level:3},{value:"Ballpark Comparisons to Ethereum",id:"ballpark-comparisons-to-ethereum",level:4},{value:"Estimating Gas Costs with Automated Tests",id:"accurate-estimates-with-automated-tests",level:4},{value:"Gas Cost Estimation in the SDK",id:"gas-cost-estimation-in-the-sdk",level:4},{value:"Pessimistic gas price inflation",id:"pessimistic-gas-price-inflation",level:2},{value:"What&#39;s the price of gas right now?",id:"whats-the-price-of-gas-right-now",level:2},{value:"Some closing thoughts from the whitepaper",id:"some-closing-thoughts-from-the-whitepaper",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"costs-of-complex-actions",children:"Costs of complex actions"}),"\n",(0,n.jsx)(t.p,{children:"Let's cover some more complex gas calculations: deploying contracts and function calls."}),"\n",(0,n.jsx)(t.h3,{id:"deploying-contracts",children:"Deploying Contracts"}),"\n",(0,n.jsx)(t.p,{children:"The basic action cost includes two different values for deploying contracts. Simplified, these are:"}),"\n",(0,n.jsx)(t.p,{children:"deploy_contract_cost: 184765750000,\ndeploy_contract_cost_per_byte: 64572944,"}),"\n",(0,n.jsxs)(t.p,{children:["These values can be queried by using the ",(0,n.jsx)(t.a,{href:"/api/rpc/protocol#protocol-config",children:(0,n.jsx)(t.code,{children:"protocol_config"})})," RPC endpoint."]}),"\n",(0,n.jsxs)(t.p,{children:["The first is a baseline cost, no matter the contract size. Keeping in mind that each need to be multiplied by two, for both ",(0,n.jsx)(t.code,{children:"send"})," and ",(0,n.jsx)(t.code,{children:"execute"})," costs, and will also require sending & executing a receipt, the gas units comes to:"]}),"\n",(0,n.jsx)(t.p,{children:"2 * 184765750000 +\n2 * contract_size_in_bytes * 64572944 +\n2 * 108059500000"}),"\n",(0,n.jsx)(t.p,{children:"(Divide the resulting number by 10\xb9\xb2 to get to TGas!)"}),"\n",(0,n.jsxs)(t.p,{children:["Note that this covers the cost of uploading and writing bytes to storage, but does ",(0,n.jsx)(t.strong,{children:"not"})," cover the cost of holding these bytes in storage. Long-term storage is compensated via storage staking, a recoverable cost-per-byte amount that will also be deducted from your account during contract deployment."]}),"\n",(0,n.jsxs)(t.p,{children:["Deploying a 16kb contract requires ",(0,n.jsx)(t.strong,{children:"2.65 TGas"})," (and thus 0.265mN at minimum gas price) for the transaction fee, while 1.5N will be locked up for storage staking."]}),"\n",(0,n.jsx)(t.h3,{id:"function-calls",children:"Function calls"}),"\n",(0,n.jsx)(t.p,{children:"Given the general-purpose nature of NEAR, function calls win the award for most complex gas calculations. A given function call will use a hard-to-predict amount of CPU, network, and IO, and the amount of each can even change based on the amount of data already stored in the contract!"}),"\n",(0,n.jsxs)(t.p,{children:["With this level of complexity, it's no longer useful to walk through an example, enumerating each (see ",(0,n.jsx)(t.code,{children:"ext_costs"})," under ",(0,n.jsx)(t.code,{children:"wasm_config"})," using the ",(0,n.jsx)(t.a,{href:"/api/rpc/protocol#protocol-config",children:(0,n.jsx)(t.code,{children:"protocol_config"})})," RPC endpoint) of the gas calculations as we go (you can research this yourself, ",(0,n.jsx)(t.a,{href:"https://github.com/near/nearcore/pull/3038",children:"if you want"}),"). Instead, let's approach this from two other angles: ballpark comparisons to Ethereum, and getting accurate estimates with automated tests."]}),"\n",(0,n.jsxs)("blockquote",{class:"lesson",children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"How much of the gas fee goes as a 30% reward to the smart contract account?"})}),(0,n.jsxs)(t.p,{children:["The NEAR Whitepaper mentions that ",(0,n.jsx)(t.a,{href:"https://near.org/papers/the-official-near-white-paper/",children:"30% of all gas fees"})," go to smart contract accounts on which the fees are expensed."]}),(0,n.jsx)(t.p,{children:"This amount can be calculated for function calls in two ways:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Summing all values in the gas profile"}),"\n",(0,n.jsxs)(t.li,{children:["Taking the total gas burnt for the transaction and subtract the static execution gas (which is equal to the amount of gas spent on sending the receipt(s)) from it. Both these numbers are available on the ",(0,n.jsx)(t.a,{href:"https://nearblocks.io/",children:"NEAR Explorer"})," overview page for a transaction."]}),"\n"]}),(0,n.jsx)(t.p,{children:"The second approach is shorter, and quite possibly easier to remember. So here's an example:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["An account calls the method ",(0,n.jsx)(t.code,{children:"submit"})," on ",(0,n.jsx)(t.code,{children:"aurora"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Converting the transaction to receipt burned a total of ~0.00024\u24c3"}),"\n",(0,n.jsx)(t.li,{children:"Executing the receipt burned a total of ~0.00376\u24c3"}),"\n"]}),"\n"]}),"\n"]}),(0,n.jsx)(t.p,{children:"The 30% reward for the smart contract owner (in this case aurora) would be: (0.00376\u24c3 - 0.00024\u24c3) * 0.3 = 0.001056\u24c3"}),(0,n.jsxs)(t.p,{children:["This transaction can also be found ",(0,n.jsx)(t.a,{href:"https://nearblocks.io/txns/GzRn9yhDaQ8f3ReJguCBGxdi4iJEeBguJ5MWufMcu1JP",children:"here"})," on NEAR Explorer, feel free to have a look around!"]}),(0,n.jsx)(t.p,{children:"For calls involving multiple contracts, calculating the reward for each contract with this method would not be possible with the data shown on NEAR Explorer (June 2022) as the explorer does not show the conversion cost for the second (and other) receipt(s)."})]}),"\n",(0,n.jsx)(t.h4,{id:"ballpark-comparisons-to-ethereum",children:"Ballpark Comparisons to Ethereum"}),"\n",(0,n.jsx)(t.p,{children:"Like NEAR, Ethereum uses gas units to model computational complexity of an operation. Unlike NEAR, rather than using a predictable gas price, Ethereum uses a dynamic, auction-based marketplace. This makes a comparison to Ethereum's gas prices a little tricky, but we'll do our best."}),"\n",(0,n.jsxs)(t.p,{children:["Etherscan gives a ",(0,n.jsx)(t.a,{href:"https://etherscan.io/chart/gasprice",children:"historic Ethereum gas price chart"}),'. These prices are given in "Gwei", or Gigawei, where a wei is the smallest possible amount of ETH, 10\u207b\xb9\u2078. From November 2017 through July 2020, average gas price was 21Gwei. Let\'s call this the "average" gas price. In July 2020, average gas price went up to 57Gwei. Let\'s use this as a "high" Ethereum gas fee.']}),"\n",(0,n.jsx)(t.p,{children:"Multiplying Ethereum's gas units by gas price usually results in an amount that's easy to show in milliETH (mE), the same way we've been converting NEAR's TGas to milliNEAR. Let's look at some common operations side-by-side, comparing ETH's gas units to NEAR's, as well as converting to both the above \"average\" & \"high\" gas prices."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation"}),(0,n.jsx)(t.th,{children:"ETH gas units"}),(0,n.jsx)(t.th,{children:"avg mE"}),(0,n.jsx)(t.th,{children:"high mE"}),(0,n.jsx)(t.th,{children:"NEAR TGas"}),(0,n.jsx)(t.th,{children:"mN"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Transfer native token (ETH or NEAR)"}),(0,n.jsx)(t.td,{children:"21k"}),(0,n.jsx)(t.td,{children:"0.441"}),(0,n.jsx)(t.td,{children:"1.197"}),(0,n.jsx)(t.td,{children:"0.45"}),(0,n.jsx)(t.td,{children:"0.045"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Deploy & initialize a ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/FT/pull/42",children:"fungible token"})," contract"]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/chadoh/erc20-test",children:"1.1M"})}),(0,n.jsx)(t.td,{children:"23.3"}),(0,n.jsx)(t.td,{children:"63.1"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://explorer.testnet.near.org/transactions/GsgH2KoxLZoL8eoutM2NkHe5tBPnRfyhcDMZaBEsC7Sm",children:"9"}),(0,n.jsx)("super",{children:"\u2020"})]}),(0,n.jsxs)(t.td,{children:["0.9 (plus 1.5\u24c3 in ",(0,n.jsx)(t.a,{href:"/concepts/storage/storage-staking",children:"storage staking"}),")"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Transfer a fungible token"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://ethereum.stackexchange.com/questions/71235/gas-limit-for-erc-20-tokens",children:"~45k"})}),(0,n.jsx)(t.td,{children:"0.945"}),(0,n.jsx)(t.td,{children:"2.565"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://explorer.testnet.near.org/transactions/5joKRvsmpEXzhVShsPDdV8z5EG9bGMWeuM9e9apLJhLe",children:"14"})}),(0,n.jsx)(t.td,{children:"1.4"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Setting an escrow for a fungible token"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/chadoh/erc20-test",children:"44k"})}),(0,n.jsx)(t.td,{children:"0.926"}),(0,n.jsx)(t.td,{children:"2.51"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://explorer.testnet.near.org/transactions/34pW67zsotFsD1DY8GktNhZT9yP5KHHeWAmhKaYvvma6",children:"8"})}),(0,n.jsx)(t.td,{children:"0.8"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Checking a balance for a fungible token"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"0"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("super",{children:"\u2020"})," Function calls require spinning up a VM and loading all compiled Wasm bytes into memory, hence the increased cost over base operations; this is ",(0,n.jsx)(t.a,{href:"https://github.com/near/nearcore/issues/3094",children:"being optimized"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"While some of these operations on their surface appear to only be about a 10x improvement over Ethereum, something else to note is that the total supply of NEAR is more than 1 billion, while total supply of Ethereum is more like 100 million. So as fraction of total supply, NEAR's gas fees are approximately another 10x lower than Ethereum's. Additionally, if the price of NEAR goes up significantly, then the minimum gas fee set by the network can be lowered."}),"\n",(0,n.jsxs)(t.p,{children:["You can expect the network to sit at the minimum gas price most of the time; learn more in the ",(0,n.jsx)(t.a,{href:"https://near.org/papers/economics-in-sharded-blockchain/#transaction-and-storage-fees",children:"Economics whitepaper"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"accurate-estimates-with-automated-tests",children:"Estimating Gas Costs with Automated Tests"}),"\n",(0,n.jsxs)(t.p,{children:["Gas unit expense for running smart contract functions can be accurately estimated by running these in ",(0,n.jsx)(t.code,{children:"testnet"}),". Generally, ",(0,n.jsx)(t.code,{children:"testnet"})," runs a higher version of the protocol than ",(0,n.jsx)(t.code,{children:"mainnet"}),". However, gas expense calculations do not change often making this is a good way to get a sense of how much gas a function will cost on ",(0,n.jsx)(t.code,{children:"mainnet"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To estimate gas costs, you can use the ",(0,n.jsx)(t.code,{children:"near-workspaces"})," ",(0,n.jsx)(t.a,{href:"https://github.com/near/workspaces-rs/tree/main/examples/src",children:"crate in Rust"})," or similarly named ",(0,n.jsx)(t.a,{href:"https://github.com/near/workspaces-js",children:"package in JavaScript"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You may extract the ",(0,n.jsx)(t.code,{children:"total_gas_burnt"})," field from the ",(0,n.jsx)(t.code,{children:"CallExecutionDetails"})," struct returned by the ",(0,n.jsx)(t.code,{children:"call"})," method. (",(0,n.jsx)(t.a,{href:"/vi/sdk/rust/testing/integration-tests#profiling-gas",children:"Read more"}),")"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'println!("Burnt gas (all): {}", res.total_gas_burnt);\n'})}),"\n",(0,n.jsxs)(t.p,{children:["In JS, you can calculate this value by adding ",(0,n.jsx)(t.code,{children:"result.receipts_outcome[0].outcome.gas_burnt"})," with the amount of gas units consumed for receipt execution in ",(0,n.jsx)(t.code,{children:"result.transaction_outcome.outcome.gas_burnt"}),"."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Gas Cost Estimation REST API",type:"info",children:[(0,n.jsxs)(t.p,{children:["You may obtain gas cost estimates for a given function call using ",(0,n.jsx)(t.code,{children:"api.gasbuddy.tech"}),". This API is experimental and may be removed in the future. One can obtain a gas cost estimate for a given function call by sending a POST request to ",(0,n.jsx)(t.code,{children:"https://api.gasbuddy.tech/profile"})," with the following JSON body:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "contract_id": "<your-contract-account-id>",\n  "method": "<your-contract-method-name>",\n  "args": {\n    "arg1": "value1",\n    "arg2": "value2"\n  }\n}\n'})})]}),"\n",(0,n.jsx)(t.h4,{id:"gas-cost-estimation-in-the-sdk",children:"Gas Cost Estimation in the SDK"}),"\n",(0,n.jsxs)(t.p,{children:["Our ",(0,n.jsx)(t.a,{href:"/vi/develop/contracts/environment/",children:"SDK environment"})," exposes the ",(0,n.jsx)(t.code,{children:"used gas"})," method, which lets you know how much gas was used so far."]}),"\n",(0,n.jsx)(t.p,{children:"You can benchmark how much gas a method (or a portion) uses by simply computing the difference in gas used between two points:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'function myMethod(){\n  // take gas usage\n  const used_gas_point_A = environment.used_gas()\n  \n  // --- some code goes here ---\n\n  const used_gas_point_B = environment.used_gas()\n\n  log("Used gas", used_gas_point_B - used_gas_point_A )\n}\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"pessimistic-gas-price-inflation",children:"Pessimistic gas price inflation"}),"\n",(0,n.jsxs)(t.p,{children:["A transactions may take several blocks before it completes. Due to dynamic gas price adjustments, later blocks may have a higher gas price than when the transaction was signed. To guarantee that the transaction can still finish, the amount of tokens reserved when starting a transaction is increased by the ",(0,n.jsx)(t.em,{children:"pessimistic-inflation rule"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The pessimistic inflation rule means that the gas has to be purchased at the highest theoretical gas price that the transaction could reach. The extra spending is only temporary, the difference between the pessimistic and actual price is refunded when the transaction finishes. This is the reason why in the explorer, virtually every transaction that spans more than one block contains a refund, even if all the gas has been spent."}),"\n",(0,n.jsx)(t.p,{children:"By how much is the price inflated? It depends on how many blocks a transaction may take. A simple transaction that only sends tokens from one account to another can take between 2-3 blocks."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"One block to subtract the money from the signer's account"}),"\n",(0,n.jsx)(t.li,{children:"One block to add it to the receivers account"}),"\n",(0,n.jsx)(t.li,{children:"Potentially another block if the receiver is on another shard and the receipt application gets delayed."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Therefore, the pessimistically inflated price is increased by 3% or calculated as ",(0,n.jsx)(t.code,{children:"gas_price"})," \u2a09 1.03. Every additional cross-shard communication adds another factor of 1.03."]}),"\n",(0,n.jsx)(t.p,{children:"For a function call, the maximum block delay is computed as the total gas attached divided by the minimum amount required to call another function. Therefore, the more gas you attach to a transaction, the higher your gas price. But again, the increased price is temporarily and will be refunded unless the network actually becomes that congested. Prices would have to go up by the maximum every block and your receipts would need to be very unlucky to have extra delays every time."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"whats-the-price-of-gas-right-now",children:"What's the price of gas right now?"}),"\n",(0,n.jsxs)(t.p,{children:["You can directly query the NEAR platform for the price of gas on a specific block using the RPC method ",(0,n.jsx)(t.code,{children:"gas_price"}),". This price may change depending on network load. The price is denominated in yoctoNEAR (10^-24 NEAR)"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Take any recent block hash from the blockchain using ",(0,n.jsx)(t.a,{href:"https://explorer.testnet.near.org/blocks",children:"NEAR Explorer"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["At time of writing, ",(0,n.jsx)(t.code,{children:"SqNPYxdgspCT3dXK93uVvYZh18yPmekirUaXpoXshHv"})," was the latest block hash"]})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Issue an RPC request for the price of gas on this block using the method ",(0,n.jsx)(t.code,{children:"gas_price"})," ",(0,n.jsx)(t.a,{href:"/api/rpc/gas#gas-price",children:"documented here"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 method=gas_price params:='[\"SqNPYxdgspCT3dXK93uVvYZh18yPmekirUaXpoXshHv\"]' id=dontcare\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Observe the results"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "id": "dontcare",\n  "jsonrpc": "2.0",\n  "result": {\n    "gas_price": "5000"\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The price of 1 unit of gas at this block was 5000 yoctoNEAR (10^-24 NEAR)."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"some-closing-thoughts-from-the-whitepaper",children:"Some closing thoughts from the whitepaper"}),"\n",(0,n.jsxs)("blockquote",{class:"info",children:[(0,n.jsx)(t.p,{children:"Fundamentally, the NEAR platform is a marketplace between willing participants.  On the supply side, operators of the validator nodes and other fundamental infrastructure need to be incentivized to provide these services which make up the \u201ccommunity cloud.\u201d  On the demand side, the developers and end-users of the platform who are paying for its use need to be able to do so in a way which is simple, clear and consistent so it helps them."}),(0,n.jsx)(t.p,{children:"A blockchain-based cloud provides several specific resources to the applications which run atop it:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Compute (CPU)"}),": This is the actual computer processing (and immediately available RAM) which run the code in a contract."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:'Bandwidth ("Network")'}),": This is the network traffic between participants and users, including messages which submit transactions and those which propagate blocks."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Storage"}),": Permanent data storage on the chain, typically expressed as a function of both storage space and time."]}),"\n"]}),(0,n.jsx)(t.p,{children:"Existing blockchains like Ethereum account for all of these in a single up front transaction fee which represents a separate accounting for each of them but ultimately charges developers or users for them only once in a single fee. This is a high volatility fee commonly denominated in \u201cgas\u201d."}),(0,n.jsx)(t.p,{children:"Developers prefer predictable pricing so they can budget and provide prices for their end users. The pricing for the above-mentioned resources on NEAR is an amount which is slowly adjusted based on system usage (and subject to the smoothing effect of resharding for extreme usage) rather than being fully auction-based. This means that a developer can more predictably know that the cost of running transactions or maintaining their storage."})]}),"\n",(0,n.jsxs)(t.p,{children:["To dig deeper into how and why gas works the way it does on NEAR, check out the ",(0,n.jsx)(t.a,{href:"https://near.org/papers/the-official-near-white-paper/#economics",children:"Economics"})," section of the main whitepaper and the ",(0,n.jsx)(t.a,{href:"https://near.org/papers/economics-in-sharded-blockchain/#transaction-and-storage-fees",children:"Transaction and Storage Fees"})," section of the economics whitepaper."]}),"\n",(0,n.jsx)(t.admonition,{title:"Got a question?",type:"tip",children:(0,n.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:" Ask it on StackOverflow! "})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var n=s(67294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);