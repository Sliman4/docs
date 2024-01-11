"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3533],{73382:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(85893),a=r(11151),u=r(74866),i=r(85162);const s={sidebar_position:3,sidebar_label:"Chunk"},l="Chunk Structure",o={id:"develop/lake/structures/chunk",title:"Chunk Structure",description:"Definition",source:"@site/../docs/2.develop/lake/structures/chunk.mdx",sourceDirName:"2.develop/lake/structures",slug:"/develop/lake/structures/chunk",permalink:"/vi/develop/lake/structures/chunk",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/lake/structures/chunk.mdx",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1693937988,formattedLastUpdatedAt:"5 thg 9, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Chunk"},sidebar:"indexers",previous:{title:"Block",permalink:"/vi/develop/lake/structures/block"},next:{title:"Shard",permalink:"/vi/develop/lake/structures/shard"}},c={},d=[{value:"Definition",id:"definition",level:2},{value:"<code>IndexerChunkView</code>",id:"indexerchunkview",level:2},{value:"<code>ChunkHeaderView</code>",id:"chunkheaderview",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"chunk-structure",children:[(0,t.jsx)(n.code,{children:"Chunk"})," Structure"]}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Chunk"})," of a ",(0,t.jsx)(n.a,{href:"/vi/develop/lake/structures/block",children:(0,t.jsx)(n.code,{children:"Block"})})," is a part of a ",(0,t.jsx)(n.a,{href:"/vi/develop/lake/structures/block",children:(0,t.jsx)(n.code,{children:"Block"})})," from a ",(0,t.jsx)(n.a,{href:"/vi/develop/lake/structures/shard",children:"Shard"}),". The collection of Chunks of the Block forms the NEAR Protocol ",(0,t.jsx)(n.a,{href:"/vi/develop/lake/structures/block",children:(0,t.jsx)(n.code,{children:"Block"})})]}),"\n",(0,t.jsx)(n.p,{children:"Chunk contains all the structures that make the Block:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/vi/develop/lake/structures/transaction",children:"Transactions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/vi/develop/lake/structures/receipt",children:"Receipts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#chunkheaderview",children:"ChunkHeader"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"indexerchunkview",children:(0,t.jsx)(n.code,{children:"IndexerChunkView"})}),"\n",(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(i.Z,{value:"rust",label:"Rust",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"links=1",children:"pub struct ChunkView {\n    pub author: AccountId,\n    pub header: ChunkHeaderView,\n    pub transactions: Vec<IndexerTransactionWithOutcome>,\n    pub receipts: Vec<ReceiptView>,\n}\n"})})}),(0,t.jsx)(i.Z,{value:"typescript",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"links=1",children:"export interface Chunk {\n  author: string;\n  header: ChunkHeader;\n  transactions: IndexerTransactionWithOutcome[];\n  receipts: Receipt[],\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"chunkheaderview",children:(0,t.jsx)(n.code,{children:"ChunkHeaderView"})}),"\n",(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(i.Z,{value:"rust",label:"value",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:"links=1",children:'pub struct ChunkHeaderView {\n    pub chunk_hash: CryptoHash,\n    pub prev_block_hash: CryptoHash,\n    pub outcome_root: CryptoHash,\n    pub prev_state_root: StateRoot,\n    pub encoded_merkle_root: CryptoHash,\n    pub encoded_length: u64,\n    pub height_created: BlockHeight,\n    pub height_included: BlockHeight,\n    pub shard_id: ShardId,\n    pub gas_used: Gas,\n    pub gas_limit: Gas,\n    /// TODO(2271): deprecated.\n    #[serde(with = "u128_dec_format")]\n    pub rent_paid: Balance,\n    /// TODO(2271): deprecated.\n    #[serde(with = "u128_dec_format")]\n    pub validator_reward: Balance,\n    #[serde(with = "u128_dec_format")]\n    pub balance_burnt: Balance,\n    pub outgoing_receipts_root: CryptoHash,\n    pub tx_root: CryptoHash,\n    pub validator_proposals: Vec<ValidatorStakeView>,\n    pub signature: Signature,\n}\n'})})}),(0,t.jsx)(i.Z,{value:"typescript",value:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"links=1",children:"export interface ChunkHeader {\n  balanceBurnt: number;\n  chunkHash: string;\n  encodedLength: number;\n  encodedMerkleRoot: string;\n  gasLimit: number;\n  gasUsed: number;\n  heightCreated: number;\n  heightIncluded: number;\n  outcomeRoot: string;\n  outgoingReceiptsRoot: string;\n  prevBlockHash: string;\n  prevStateRoot: string;\n  rentPaid: string;\n  shardId: number;\n  signature: string;\n  txRoot: string;\n  validatorProposals: ValidatorProposal[];\n  validatorReward: string;\n};\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var u=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),a=r(36905),u=r(12466),i=r(16550),s=r(20469),l=r(91980),o=r(67392),c=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,u=(0,i.k6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l._X)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(u.location.search);n.set(s,e),u.replace(Object.assign({},u.location,{search:n.toString()}))}}),[s,u])]}function b(e){var n,r,a,u,i=e.defaultValue,l=e.queryString,o=void 0!==l&&l,d=e.groupId,b=h(e),f=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:b})})),m=f[0],k=f[1],g=v({queryString:o,groupId:d}),x=g[0],j=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(n),a=r[0],u=r[1],[a,(0,t.useCallback)((function(e){n&&u.set(e)}),[n,u])]),_=w[0],C=w[1],y=function(){var e=null!=x?x:_;return p({value:e,tabValues:b})?e:null}();return(0,s.Z)((function(){y&&k(y)}),[y]),{selectedValue:m,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);k(e),j(e),C(e)}),[j,C,b]),tabValues:b}}var f=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(85893);function g(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],o=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=l.indexOf(n),a=s[r].value;a!==t&&(o(n),i(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var u,i=l.indexOf(e.currentTarget)-1;r=null!=(u=l[i])?u:l[l.length-1]}null==(n=r)||n.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,u=e.attributes;return(0,k.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.Z)("tabs__item",m.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function x(e){var n=e.lazy,r=e.children,a=e.selectedValue,u=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=u.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:u.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function j(e){var n=b(e);return(0,k.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,k.jsx)(g,Object.assign({},e,n)),(0,k.jsx)(x,Object.assign({},e,n))]})}function w(e){var n=(0,f.Z)();return(0,k.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(67294);const a={},u=t.createContext(a);function i(e){const n=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(u.Provider,{value:n},e.children)}}}]);