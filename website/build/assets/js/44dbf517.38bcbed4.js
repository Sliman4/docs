"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7197],{44512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(85893),a=t(11151);const s={id:"integrations",title:"Integrations"},o=void 0,d={id:"data-availability/integrations",title:"Integrations",description:"We have some proof of concept works for integrating with roll-ups. We are working to prove the system's capabilities and provide a reference implementation for others to follow.",source:"@site/../docs/data-availability/integrations.md",sourceDirName:"data-availability",slug:"/data-availability/integrations",permalink:"/data-availability/integrations",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/data-availability/integrations.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1709813405,formattedLastUpdatedAt:"Mar 7, 2024",frontMatter:{id:"integrations",title:"Integrations"},sidebar:"data-availability",previous:{title:"RPC Client",permalink:"/data-availability/rpc"},next:{title:"Arbitrum Nitro",permalink:"/data-availability/arbitrum"}},r={},c=[{value:"Integrating your own roll-up",id:"integrating-your-own-roll-up",level:2},{value:"Getting started",id:"getting-started",level:3},{value:"If using your own contract",id:"if-using-your-own-contract",level:3},{value:"If the <code>da-rpc-sys</code> image isn&#39;t released yet",id:"if-the-da-rpc-sys-image-isnt-released-yet",level:3},{value:"If the light client image hasn&#39;t been released yet",id:"if-the-light-client-image-hasnt-been-released-yet",level:3},{value:"Deploying Optimism",id:"deploying-optimism",level:3},{value:"If deploying Optimism on arm64",id:"if-deploying-optimism-on-arm64",level:4},{value:"Deploying Polygon CDK",id:"deploying-polygon-cdk",level:3},{value:"Deploying Arbitrum Nitro",id:"deploying-arbitrum-nitro",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We have some proof of concept works for integrating with roll-ups. We are working to prove the system's capabilities and provide a reference implementation for others to follow."}),"\n",(0,i.jsx)(n.p,{children:"They are being actively developed, so they are in a state of flux."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/data-availability/arbitrum",children:"Arbitrum Nitro"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/data-availability/optimism",children:"Optimism"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/data-availability/cdk-integration",children:"Polygon CDK"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Due to protocol limitations, the maximum transaction size is 4 MB."})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"integrating-your-own-roll-up",children:"Integrating your own roll-up"}),"\n",(0,i.jsx)(n.p,{children:"The aim of NEAR DA is to be as modular as possible."}),"\n",(0,i.jsxs)(n.p,{children:["If implementing your own rollup, it should be fairly straightforward, assuming you can use ",(0,i.jsx)(n.code,{children:"da-rpc"})," or ",(0,i.jsx)(n.code,{children:"da-rpc-go"}),"(with some complexity here)."]}),"\n",(0,i.jsx)(n.p,{children:"All the implementations so far have been different, but the general rules have been:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["find where the sequencer normally posts batch data, for optimism it was the ",(0,i.jsx)(n.code,{children:"batcher"}),", for CDK it's the ",(0,i.jsx)(n.code,{children:"Sequence Sender"})," and plug the client in."]}),"\n",(0,i.jsxs)(n.li,{children:["find where the sequencer needs commitments posted, for optimism it was the ",(0,i.jsx)(n.code,{children:"proposer"}),", and CDK the ",(0,i.jsx)(n.code,{children:"synchronizer"}),". Hook the blob reads from the commitment there."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The complexity arises, depending on how pluggable the commitment data is in the contracts. If you can add a field, great! But these waters are mostly unchartered."}),"\n",(0,i.jsx)(n.p,{children:"If your roll-up does anything additional, feel free to hack, and we can try to reach the goal of NEAR DA being as modular as possible."}),"\n",(0,i.jsx)(n.h3,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(n.p,{children:"Makefiles are floating around, but here's a rundown of how to start with NEAR DA."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.p,{children:["Rust, go, ",(0,i.jsx)(n.code,{children:"cmake"})," & friends should be installed. Please look at ",(0,i.jsx)(n.code,{children:"flake.nix#nativeBuildInputs"})," for a list of required installation items.\nIf you use Nix, you're in luck! Just do ",(0,i.jsx)(n.code,{children:"direnv allow"}),", and you're good to go."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.near.org/tools/near-cli-rs",children:"Ensure you have setup"})," ",(0,i.jsx)(n.code,{children:"near-cli"}),".\nFor the Makefiles to work correctly, you need to have the ",(0,i.jsx)(n.code,{children:"near-cli-rs"})," version of NEAR-CLI.\nMake sure you setup some keys for your contract, the documentation above should help.\nYou can write these down, or query these from ",(0,i.jsx)(n.code,{children:"~/.near-credentials/**"})," later."]}),"\n",(0,i.jsx)(n.p,{children:"If you didn't clone with submodules, sync them:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"make submodules\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note, there are some semantic differences between ",(0,i.jsx)(n.code,{children:"near-cli-rs"})," and ",(0,i.jsx)(n.code,{children:"near-cli-js"}),". Notably, the keys generated with ",(0,i.jsx)(n.code,{children:"near-cli-js"})," used to have and ",(0,i.jsx)(n.code,{children:"account_id"})," key in the json object. But this is omitted in ",(0,i.jsx)(n.code,{children:"near-cli-rs"})," becuse it's already in the filename, but some applications require this object. So you may need to add it back in."]}),"\n",(0,i.jsx)(n.h3,{id:"if-using-your-own-contract",children:"If using your own contract"}),"\n",(0,i.jsx)(n.p,{children:"If you're using your own contract, you have to build the contract yourself. And make sure you set the keys."}),"\n",(0,i.jsx)(n.p,{children:"To build the contract:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make build-contracts\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The contract will now be in ",(0,i.jsx)(n.code,{children:"./target/wasm32-unknown-unknown/release/near_da_blob_store.wasm"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Now to deploy, once you've decided where to deploy to, and have permissions to deploy it.\nSet ",(0,i.jsx)(n.code,{children:"$NEAR_CONTRACT"})," to the address you want to deploy to, and sign with.\nFor advanced users, look at the command and adjust it as needed."]}),"\n",(0,i.jsx)(n.p,{children:"Next up:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make deploy-contracts\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Don't forget to update your ",(0,i.jsx)(n.code,{children:".env"})," file for ",(0,i.jsx)(n.code,{children:"DA_KEY"}),", ",(0,i.jsx)(n.code,{children:"DA_CONTRACT"})," and ",(0,i.jsx)(n.code,{children:"DA_ACCOUNT"})," for use later."]}),"\n",(0,i.jsxs)(n.h3,{id:"if-the-da-rpc-sys-image-isnt-released-yet",children:["If the ",(0,i.jsx)(n.code,{children:"da-rpc-sys"})," image isn't released yet"]}),"\n",(0,i.jsx)(n.p,{children:"We use an FFI library for any go applications that need it, until this is release you've gotta build it locally."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make da-rpc-docker\n"})}),"\n",(0,i.jsx)(n.p,{children:"This should tag an image that the integrations can use until we eventually publish the package."}),"\n",(0,i.jsxs)(n.p,{children:["Build the ",(0,i.jsx)(n.code,{children:"da-rpc-sys"})," FFI lib:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make da-rpc\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will ensure you install the prerequisites for local development and output the header files for the ",(0,i.jsx)(n.code,{children:"go"})," client."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make da-rpc-docker\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will build a docker image for you, which builds a ",(0,i.jsx)(n.code,{children:"cdylib"})," for use by the docker images.\nThese automagically require these in the dockerfile when you start the local networks."]}),"\n",(0,i.jsx)(n.h3,{id:"if-the-light-client-image-hasnt-been-released-yet",children:"If the light client image hasn't been released yet"}),"\n",(0,i.jsx)(n.p,{children:"As part of deploying the devnets, we also deploy the light client."}),"\n",(0,i.jsx)(n.p,{children:"To build this image, there's a makefile entry for it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make light-client-docker\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deploying-optimism",children:"Deploying Optimism"}),"\n",(0,i.jsxs)(n.p,{children:["Configure ",(0,i.jsx)(n.code,{children:"./op-stack/optimism/ops-bedrock/.env.example"}),".\nThis needs copying the without ",(0,i.jsx)(n.code,{children:".example"})," suffix, adding the keys, contract address, and signer from your NEAR wallet, and should work out of the box for you."]}),"\n",(0,i.jsx)(n.h4,{id:"if-deploying-optimism-on-arm64",children:"If deploying Optimism on arm64"}),"\n",(0,i.jsxs)(n.p,{children:["You can use a docker image to standardize the builds for ",(0,i.jsx)(n.code,{children:"da-rpc-sys"})," and genesis."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"da-rpc-sys-unix"}),"\nThis will copy the contents of ",(0,i.jsx)(n.code,{children:"da-rpc-sys-docker"})," generated libraries to the ",(0,i.jsx)(n.code,{children:"gopkg/da-rpc"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"op-devnet-genesis-docker"}),"\nThis will create a docker image to generate the genesis files"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"op-devnet-genesis"}),"\nThis will generate the genesis files in a docker container and push the files in ",(0,i.jsx)(n.code,{children:".devnet"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"make op-devnet-up"}),"\nThis should build the docker images and deploy a local devnet for you"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once up, observe the logs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make op-devnet-da-logs\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You should see ",(0,i.jsx)(n.code,{children:"got data from NEAR"})," and ",(0,i.jsx)(n.code,{children:"submitting to NEAR"})]}),"\n",(0,i.jsx)(n.p,{children:"Of course, to stop"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make op-devnet-down\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you just wanna get up and running and have already built the docker images using something like ",(0,i.jsx)(n.code,{children:"make bedrock images"}),", there is a ",(0,i.jsx)(n.code,{children:"docker-compose-testnet.yml"})," in ",(0,i.jsx)(n.code,{children:"ops-bedrock"})," you can play with."]}),"\n",(0,i.jsx)(n.h3,{id:"deploying-polygon-cdk",children:"Deploying Polygon CDK"}),"\n",(0,i.jsx)(n.p,{children:"First, we have to pull the docker image containing the contracts."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make cdk-images\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"why is this different to op-stack"})}),"?"]}),"\n",(0,i.jsxs)(n.p,{children:["When building the contracts in ",(0,i.jsx)(n.code,{children:"cdk-validium-contracts"}),", it does a little bit more than build contracts.\nIt creates a local eth devnet, deploys the various components (CDKValidiumDeployer & friends).\nThen, it generates genesis and posts it to L1 at some arbitrary block.\nThe block number that the L2 genesis gets posted to is ",(0,i.jsx)(n.strong,{children:"non-deterministic"}),".\nThis block is then fed into the ",(0,i.jsx)(n.code,{children:"genesis"})," config in ",(0,i.jsx)(n.code,{children:"cdk-validium-node/tests"}),".\nBecause of this, we want an out-of-the-box deployment, so using a pre-built docker image for this is incredibly convenient."]}),"\n",(0,i.jsxs)(n.p,{children:["It's fairly reasonable that, when scanning for the original genesis, we can just query a bunch of blocks between ",(0,i.jsx)(n.code,{children:"0..N"})," for the genesis data.\nHowever, this feature doesn't exist yet."]}),"\n",(0,i.jsxs)(n.p,{children:["Once the image is downloaded, or advanced users build the image and modify the genesis config for tests, we need to configure an env file again.\nThe envfile example is at ",(0,i.jsx)(n.code,{children:"./cdk-stack/cdk-validium-node/.env.example"}),", and should be updated with the respective variables as above."]}),"\n",(0,i.jsx)(n.p,{children:"Now we can do the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cdk-devnet-up\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will spawn the devnet and an explorer for each network at ",(0,i.jsx)(n.code,{children:"localhost:4000"}),"(L1) and ",(0,i.jsx)(n.code,{children:"localhost:4001"}),"(L2)."]}),"\n",(0,i.jsx)(n.p,{children:"Run a transaction, check out your contract on NEAR, and verify the commitment with the last 64 bytes of the transaction made to L1."}),"\n",(0,i.jsx)(n.p,{children:"You'll get some logs that look like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'time="2023-10-03T15:16:21Z" level=info msg="Submitting to NEARmaybeFrameData{0x7ff5b804adf0 64}candidate0xfF00000000000000000000000000000000000000namespace{0 99999}txLen1118"\n2023-10-03T15:16:21.583Z\tWARN\tsequencesender/sequencesender.go:129\tto 0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82, data: 438a53990000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb922660000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000233a121c7ad205b875b115c1af3bbbd8948e90afb83011435a7ae746212639654000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000651c2f3400000000000000000000000000000000000000000000000000000000000000005ee177aad2bb1f9862bf8585aafcc34ebe56de8997379cc7aa9dc8b9c68d7359000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000651c303600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040b5614110c679e3d124ca2b7fca6acdd6eb539c1c02899df54667af1ffc7123247f5aa2475d57f8a5b2b3d3368ee8760cffeb72b11783779a86abb83ac09c8d59\t{"pid": 7, "version": ""}\ngithub.com/0xPolygon/cdk-validium-node/sequencesender.(*SequenceSender).tryToSendSequence\n\t/src/sequencesender/sequencesender.go:129\ngithub.com/0xPolygon/cdk-validium-node/sequencesender.(*SequenceSender).Start\n\t/src/sequencesender/sequencesender.go:69\n2023-10-03T15:16:21.584Z\tDEBUG\tetherman/etherman.go:1136\tEstimating gas for tx. From: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, To: 0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82, Value: <nil>, Data: 438a53990000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb922660000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000233a121c7ad205b875b115c1af3bbbd8948e90afb83011435a7ae746212639654000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000651c2f3400000000000000000000000000000000000000000000000000000000000000005ee177aad2bb1f9862bf8585aafcc34ebe56de8997379cc7aa9dc8b9c68d7359000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000651c303600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040b5614110c679e3d124ca2b7fca6acdd6eb539c1c02899df54667af1ffc7123247f5aa2475d57f8a5b2b3d3368ee8760cffeb72b11783779a86abb83ac09c8d59\t{"pid": 7, "version": ""}\n2023-10-03T15:16:21.586Z\tDEBUG\tethtxmanager/ethtxmanager.go:89\tApplying gasOffset: 80000. Final Gas: 246755, Owner: sequencer\t{"pid": 7, "version": ""}\n2023-10-03T15:16:21.587Z\tDEBUG\tetherman/etherman.go:1111\tgasPrice chose: 8\t{"pid": 7, "version": ""}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For this transaction, the blob commitment was ",(0,i.jsx)(n.code,{children:"7f5aa2475d57f8a5b2b3d3368ee8760cffeb72b11783779a86abb83ac09c8d59"})]}),"\n",(0,i.jsxs)(n.p,{children:["And if I check the CDKValidium contract ",(0,i.jsx)(n.code,{children:"0x0dcd1bf9a1b36ce34237eeafef220932846bcd82"}),", the root was at the end of the calldata."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"0x438a53990000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb922660000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000233a121c7ad205b875b115c1af3bbbd8948e90afb83011435a7ae746212639654000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000651c2f3400000000000000000000000000000000000000000000000000000000000000005ee177aad2bb1f9862bf8585aafcc34ebe56de8997379cc7aa9dc8b9c68d7359000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000651c303600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040b5614110c679e3d124ca2b7fca6acdd6eb539c1c02899df54667af1ffc7123247f5aa2475d57f8a5b2b3d3368ee8760cffeb72b11783779a86abb83ac09c8d59"})}),"\n",(0,i.jsx)(n.h3,{id:"deploying-arbitrum-nitro",children:"Deploying Arbitrum Nitro"}),"\n",(0,i.jsxs)(n.p,{children:["Build ",(0,i.jsx)(n.code,{children:"daserver/datool"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"make target/bin/daserver && make target/bin/datool\n"})}),"\n",(0,i.jsx)(n.p,{children:"Deploy your DA contract as above"}),"\n",(0,i.jsxs)(n.p,{children:["Update ",(0,i.jsx)(n.code,{children:"daserver"})," config to introduce new configuration fields:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:' "near-aggregator": {\n      "enable": true,\n      "key": "ed25519:insert_here",\n      "account": "helloworld.testnet",\n      "contract": "your_deployed_da_contract.testnet",\n      "storage": {\n        "enable": true,\n        "data-dir": "config/near-storage"\n      }\n    },\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'target/bin/datool client rpc store  --url http://localhost:7876 --message "Hello world" --signing-key config/daserverkeys/ecdsa\n'})}),"\n",(0,i.jsx)(n.p,{children:"Take the hash, check the output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"target/bin/datool client rest getbyhash --url http://localhost:7877 --data-hash 0xea7c19deb86746af7e65c131e5040dbd5dcce8ecb3ca326ca467752e72915185\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);