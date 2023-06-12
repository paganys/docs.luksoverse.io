"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[1266],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=o,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(f,r(r({ref:t},h),{},{components:a})):n.createElement(f,r({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={},r="Network Theory",s={unversionedId:"mainnet/complete-node-guide/blockchain-clients/network-theory",id:"mainnet/complete-node-guide/blockchain-clients/network-theory",title:"Network Theory",description:"Let's also clear up the blockchain network we will run with this setup and how the compensation works for providing the backend infrastructure. It's essential to know the basics of how we will participate.",source:"@site/docs/mainnet/complete-node-guide/6-blockchain-clients/02-network-theory.md",sourceDirName:"mainnet/complete-node-guide/6-blockchain-clients",slug:"/mainnet/complete-node-guide/blockchain-clients/network-theory",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/network-theory",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/6-blockchain-clients/02-network-theory.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LUKSO Blockchain Setup Types",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/setup-types"},next:{title:"Client Theory",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/client-theory"}},l={},c=[{value:"6.2.1 Proof of Stake",id:"621-proof-of-stake",level:3},{value:"6.2.2 Network Operations",id:"622-network-operations",level:3},{value:"6.2.3 Computation Measures",id:"623-computation-measures",level:3},{value:"6.2.4 Tokenomics",id:"624-tokenomics",level:3},{value:"6.2.5 Earnings &amp; Withdrawals",id:"625-earnings--withdrawals",level:3},{value:"6.2.6 Slashing",id:"626-slashing",level:3},{value:"6.2.7 Penalties",id:"627-penalties",level:3},{value:"Penalty Estimation",id:"penalty-estimation",level:4},{value:"6.2.8 Network Exits",id:"628-network-exits",level:3},{value:"6.2.9 Participation Rate",id:"629-participation-rate",level:3},{value:"6.2.10 Epochs",id:"6210-epochs",level:4},{value:"6.2.11 Slots",id:"6211-slots",level:4}],h={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-theory"},"Network Theory"),(0,o.kt)("p",null,"Let's also clear up the blockchain network we will run with this setup and how the compensation works for providing the backend infrastructure. It's essential to know the basics of how we will participate."),(0,o.kt)("h3",{id:"621-proof-of-stake"},"6.2.1 Proof of Stake"),(0,o.kt)("p",null,"PoS is a consensus mechanism many blockchain networks use to validate and add new transactions. Unlike Proof of Work on Bitcoin, which requires miners to solve complex mathematical problems to add new blocks to the blockchain, PoS relies on the amount of cryptocurrency a person holds and is willing to stake as collateral."),(0,o.kt)("p",null,"In a PoS blockchain, validators are chosen to create a new block based on their stake in the network. The more cryptocurrency a person holds, the chances of being selected as a validator increase. Once chosen, validators validate transactions and add them to the blockchain. For their service, validators are rewarded with transaction fees and potentially new coins."),(0,o.kt)("p",null,"One of the main advantages of PoS over PoW is its energy efficiency. While PoW requires massive computational resources and energy consumption, PoS achieves consensus with minimal energy use. The efficiency makes PoS more sustainable and environmentally friendly for blockchain networks."),(0,o.kt)("p",null,"Another advantage of PoS is the security it provides. Since validators have a significant investment in the network, they are incentivized to act honestly. If a validator tries to manipulate the system or validate fraudulent transactions, they risk losing their stake, making attacks on the network costly and, therefore, less likely."),(0,o.kt)("h3",{id:"622-network-operations"},"6.2.2 Network Operations"),(0,o.kt)("p",null,"The Ethereum Virtual Machine is a crucial part of the Ethereum ecosystem, and each full node running the Ethereum software has its instance of it. Every full node validates every transaction and smart contract execution independently. The EVM is isolated from the network, filesystem, and other processes of the node's computer system, which makes it a sandboxed environment for smart contract execution."),(0,o.kt)("p",null,"When a node receives a new block, it executes all transactions in its own EVM to validate the correctness of the transaction results and the final state of the block. Independent computation is a fundamental part of the Ethereum network's decentralized nature: every node independently verifies the validity of every block and every transaction."),(0,o.kt)("h3",{id:"623-computation-measures"},"6.2.3 Computation Measures"),(0,o.kt)("p",null,"Each operation in the EVM requires a certain amount of gas, which is paid for in the blockchain's coin. The cost of gas is a crucial part of Ethereum's incentive structure, deterring spam on the network and incentivizing miners to confirm transactions."),(0,o.kt)("p",null,"Since the ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"London Update"),", Ethereum has a predictable fee system with two parts: a base fee and a tip. The base fee is burned and adjusted up or down depending on network congestion. When the network is busy, the base fee increases, and when the network is less active, the base fee decreases. The tip also called the priority fee, is given to the miner as an incentive to include the transaction in the block."),(0,o.kt)("p",null,"Gas plays a crucial role in the execution of transactions. If a transaction or smart contract operation does not have enough gas, it runs out of gas and fails, but the gas used up to that point is not returned as the computation was finished up to this point."),(0,o.kt)("h3",{id:"624-tokenomics"},"6.2.4 Tokenomics"),(0,o.kt)("p",null,"A large portion of the transaction fee is burned, i.e., permanently removed from circulation. This burning mechanism effectively reduces the supply of Ether over time, which can exert upward pressure on the price, assuming demand remains constant or increases, making EVM PoS blockchain coins a semi-deflationary asset."),(0,o.kt)("p",null,"Therefore, validators only receive the block rewards and tips as fees."),(0,o.kt)("h3",{id:"625-earnings--withdrawals"},"6.2.5 Earnings & Withdrawals"),(0,o.kt)("p",null,"Regarding withdrawals and returns, there are specific wallet addresses to maintain: the withdrawal and the recipient address. They could be the same address, but different actions are bound to them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Staking Withdrawal Address"),": Staking withdrawals refer to withdrawing earned rewards or the initial staked amount (32 LYX) by validators participating in Proof-of-Stake. These withdrawals become possible after the Shapella upgrade & EIP-4895 are up and running on the according network. These staking withdrawals are automatically pushed to the withdrawal address set during the key generation process and are registered on-chain during the deposit. ",(0,o.kt)("strong",{parentName:"li"},"This address cannot be changed once the stake is deposited. You need to guarentee that you have control over the withdrawal address.")," If you want to update it at any time, you need to exit your validators to receive the funds on the (old) withdrawal address and then set up new validators with a new one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recipient Fee Address"),": The recipient fee address, e.g., transaction or gas fee address, differs from the staking withdrawal. The recipient fee address is associated with the validator when they perform validation duties, such as proposing and attesting to blocks. The recipient fee address is set during the start of the validator client on the node and can be changed upon restart. You need your node's wallet password after importing the validator keys to set or modify. The fees are paid by users who initiate transactions and smart contract executions on the EVM network. Validators collect the fees as an incentive for their work in maintaining the blockchain.")),(0,o.kt)("p",null,"Both addresses are regular Ethereum Addresses (EOAs) that can be generated in wallets like MetaMask or hardware wallets like Ledger. They could even be the same addresses, meaning you will receive both: withdrawals and fees at the same address."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please remember that your hardware wallet needs support for importing or using these accounts on regular dApps. Otherwise, you might not be able to manage these funds until the LUKSO network is supported. In the case of Ledger, they can easily be imported into MetaMask, which should do the trick for most of you. Keep in mind to send some minimal supported funds onto this hardware key, so it will show up again if it was restored from the seed alone.")),(0,o.kt)("p",null,"In conclusion, staking withdrawals refer to withdrawing rewards and staked amounts connected to the consensus mechanism. Conversely, the recipient fee address is where validators receive transaction fees for their validation work."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Typically, everything is included in the APY for staking rewards. But as expected, there are fluctuations for various factors such as network usage, the number of validators, and consensus changes.")),(0,o.kt)("h3",{id:"626-slashing"},"6.2.6 Slashing"),(0,o.kt)("p",null,"In the Proof of Stake consensus context, the slasher functionality is designed to discourage validators from behaving dishonestly or maliciously. If a validator behaves in a way that could compromise the network's integrity\u2014like trying to manipulate the transaction history or proposing conflicting blocks\u2014they can be slashed. When a validator gets slashed, a portion of its staked LYX or LYXt is removed, e,g. burned. Additionally, they are ejected from the validator set, losing their ability to participate in the consensus process and earn further rewards."),(0,o.kt)("p",null,"The slashing conditions include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Double Proposal"),": If a validator proposes two different blocks during the same time slot."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Surround Vote"),": If a validator makes attestations that surround each other, a later vote contradicts an earlier one in a way that isn't just an update.")),(0,o.kt)("p",null,"Without the slasher, slashed validators that have committed offenses might not be promptly removed from the validator set, which could theoretically affect network operation in certain situations. Running a slasher service can be resource-intensive. The slasher service needs to keep track of a significant amount of historical data to detect slashable offenses, which can require substantial storage space and processing power."),(0,o.kt)("h3",{id:"627-penalties"},"6.2.7 Penalties"),(0,o.kt)("p",null,"In Proof of Stake, validators can be penalized for being offline, which is technically different from losing stake due to slashing. Instead, it's considered inactivity leakage or an inactivity penalty. The same penalties for an offline validator are dynamically adjusted based on the total amount of offline validators and their offline duration."),(0,o.kt)("p",null,"This mechanism aims to incentivize validators to stay online and actively participate in the network's consensus process. Validators are expected to be online to propose and attest to blocks. If a validator is offline, they're not fulfilling their role, and so their balance slowly leaks over time."),(0,o.kt)("p",null,"The penalties for being offline are much less severe than the penalties for malicious behavior that would result in slashing. The inactivity penalty is proportional to the square of the time the validator has been offline, meaning the penalty accelerates the longer the validator is offline."),(0,o.kt)("p",null,"It's important to note that these penalties are only applied when the network isn't finalizing blocks from someone that hasn't been online. If the network is finalizing blocks, offline validators don't receive inactivity penalties but miss out on potential rewards."),(0,o.kt)("p",null,"The design intention is to ensure that validators have a strong incentive to remain online and participate in the consensus process, but without making the penalties so severe that minor issues could result in significant losses. This balance aims to encourage a secure and decentralized network."),(0,o.kt)("h4",{id:"penalty-estimation"},"Penalty Estimation"),(0,o.kt)("p",null,"The exact calculation of these penalties can be complex due to these variables, but here are rough estimates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"For being offline for 5 hours:    0.01 LYX/LYXt penalty\nFor being offline for 1 day:      0.10 LYX/LYXt penalty\nFor being offline for 7 days:     1.00 LYX/LYXt penalty\n")),(0,o.kt)("p",null,"Based on the ",(0,o.kt)("a",{parentName:"p",href:"https://alonmuroch-65570.medium.com/how-long-will-it-take-an-inactive-eth2-validator-to-get-ejected-a6ce8f98fd1c"},"panalty research"),", a validator will lose roughly 60% of their staked LYX after 18 days of inactivity, meaning ",(0,o.kt)("inlineCode",{parentName:"p"},"4096")," epochs. It takes around 3 weeks or roughly ",(0,o.kt)("inlineCode",{parentName:"p"},"4686")," epochs for the effective balance to fall to around 16 LYX, which will cause the validator to be ejected from the PoS protocol. An explanation of epochs can be found ",(0,o.kt)("a",{parentName:"p",href:"#6210-epochs"},"below"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Remember, these are rough estimates, and the penalties could differ based on the network conditions. If the network is not finalizing, e.g., over one-third of the network is offline, penalties can ramp up significantly.")),(0,o.kt)("h3",{id:"628-network-exits"},"6.2.8 Network Exits"),(0,o.kt)("p",null,"It will continue validating if your validator's balance goes below 32 ETH due to penalties or slashing events. However, dropping below 32 ETH is undesirable because it indicates that your validator is either underperforming or misbehaving."),(0,o.kt)("p",null,"Underperforming could be due to being offline frequently or having a poor network connection, causing your validator to miss attestations or block proposals. Misbehaving, on the other hand, could be due to double voting or other slashable offenses."),(0,o.kt)("p",null,"If your validator's balance falls significantly and remains consistently low, it could eventually be forcefully exited during the next validator registry update. This safeguard keeps the network healthy and ensures that only active and correctly-functioning validators are participating in consensus. The core feature is to ensure the overall health and stability of the network, as validators with very low balances might not have the same incentives to behave correctly."),(0,o.kt)("p",null,"Forceful exits will happen if your validator balance falls below 16 LYX/LYXt. Once a validator has been exited, it can no longer participate in consensus and earn rewards. When a validator is ejected, it is placed in a queue to be exited from the active set of consensus participants."),(0,o.kt)("h3",{id:"629-participation-rate"},"6.2.9 Participation Rate"),(0,o.kt)("p",null,"In Proof of Stake consensus, at least two-thirds of the validators must be online and actively participating for the chain to finalize blocks. Network stalls can occur for various reasons, such as network partitions or a significant number of other validators offline, or not participating effectively around the same time."),(0,o.kt)("h4",{id:"6210-epochs"},"6.2.10 Epochs"),(0,o.kt)("p",null,"An epoch in PoS is a fixed period during which slots occur. It is a larger time frame that helps to organize the work of validators who propose and attest to blocks. An epoch is comprised of 32 slots, which means an epoch lasts for about 6.4 minutes, given that each slot is about 12 seconds."),(0,o.kt)("p",null,"Epochs provide several key functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Validator Shuffling"),": At the start of each epoch, a random selection process determines which validators are active and assigns them to slots. This is done to ensure that the system remains decentralized and that no single validator can predict far in advance when they will be selected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Rewards and Penalties"),": At the end of each epoch, rewards and penalties are calculated for validators. Validators that correctly proposed and attested to blocks receive rewards, while those who behaved maliciously or were offline are penalized."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Finality"),": An epoch also plays a role in achieving finality. In simple terms, finality refers to the point at which a block cannot be changed or removed from the blockchain. The finality is achieved every epoch.")),(0,o.kt)("h4",{id:"6211-slots"},"6.2.11 Slots"),(0,o.kt)("p",null,"A slot in PoS, is a time period within an epoch that lasts for about 12 seconds. During a slot, a randomly chosen validator has the right to propose a new block to the blockchain."),(0,o.kt)("p",null,"The role of a slot includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Block Proposal"),": Each slot represents an opportunity for a validator to propose a new block. If the selected validator is online and behaves correctly, they will propose a block, which other validators will then attest to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Attestations"),": During each slot, validators who are not chosen to propose a block are expected to attest to the validity of the proposed block. These attestations are important for determining consensus and helping the network agree on the state of the blockchain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Missed Slots"),": If a chosen validator is offline or fails to propose a block during their slot, the slot is skipped, and no new block is added to the chain for that slot.")),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"justified")," slot is a block that has been voted on and is a candidate for finalization. Essentially, justifying a block is the step before finalizing it. A block is justified when it receives 2/3 of the voting weight from the active validators. Justified blocks can still be overwritten if a conflicting block receives more votes. However, once a justified block is ",(0,o.kt)("strong",{parentName:"p"},"finalized"),", meaning the network has reached consensus of the proposed block, it cannot be changed."))}d.isMDXComponent=!0}}]);