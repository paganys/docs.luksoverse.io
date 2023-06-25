"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[6890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={},r="Client Setups",s={unversionedId:"mainnet/complete-node-guide/blockchain-clients/client-setups",id:"mainnet/complete-node-guide/blockchain-clients/client-setups",title:"Client Setups",description:"To become a validator on an EVM PoS network, you must run a full node as a. This is because validators need the entire blockchain data and a real-time view of the network state to validate new blocks and transactions effectively. A light node would not have sufficient data for these operations. On top of that, you could run your validator as an archive node. Let's clarify the differences:",source:"@site/docs/mainnet/complete-node-guide/6-blockchain-clients/04-client-setups.md",sourceDirName:"mainnet/complete-node-guide/6-blockchain-clients",slug:"/mainnet/complete-node-guide/blockchain-clients/client-setups",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/client-setups",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/6-blockchain-clients/04-client-setups.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client Theory",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/client-theory"},next:{title:"Open Network Ports",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/network-ports"}},l={},c=[{value:"Full Node",id:"full-node",level:4},{value:"Archive Node",id:"archive-node",level:4},{value:"6.4.1 Supported Clients",id:"641-supported-clients",level:3},{value:"Geth",id:"geth",level:4},{value:"Erigon",id:"erigon",level:4},{value:"Prysm",id:"prysm",level:4},{value:"Lighthouse",id:"lighthouse",level:4},{value:"6.4.2 Storage Comparison",id:"642-storage-comparison",level:3},{value:"Size Differences",id:"size-differences",level:4},{value:"Expected Growth",id:"expected-growth",level:4},{value:"6.4.3 Client Diversity",id:"643-client-diversity",level:3},{value:"Ethereum&#39;s History",id:"ethereums-history",level:4}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-setups"},"Client Setups"),(0,i.kt)("p",null,"To become a validator on an EVM PoS network, you must run a full node as a. This is because validators need the entire blockchain data and a real-time view of the network state to validate new blocks and transactions effectively. A light node would not have sufficient data for these operations. On top of that, you could run your validator as an archive node. Let's clarify the differences:"),(0,i.kt)("h4",{id:"full-node"},"Full Node"),(0,i.kt)("p",null,"A full node downloads the entire blockchain and validates all blocks and transactions against the network's consensus rules. It stores the current state of the network, including account balances, contracts, storage, and other information. However, it does not keep all historical states. If you need to check the balance of an account at a specific block height in the past, a full node cannot provide this information directly."),(0,i.kt)("h4",{id:"archive-node"},"Archive Node"),(0,i.kt)("p",null,"An archive node is a type of full node. It downloads the entire blockchain and validates all blocks and transactions like a full node. However, in addition to the current state of the network, it also stores all historical states since the genesis block. Keeping the entire historical state makes an archive node much more storage extensive than a full node, but it allows you to query any historical state directly on the node."),(0,i.kt)("h3",{id:"641-supported-clients"},"6.4.1 Supported Clients"),(0,i.kt)("p",null,"As of version ",(0,i.kt)("inlineCode",{parentName:"p"},"0.6.0")," of the LUKSO CLI, the following clients are officially supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Execution Clients:")," Geth, Erigon"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Consensus Clients:")," Prysm, Lighthouse"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Validator Clients:")," Prysm")),(0,i.kt)("p",null,"You can find a list of all EVM Clients, their current development and status, plus supported operating at the ",(0,i.kt)("a",{parentName:"p",href:"https://clientdiversity.org/#clients"},"Client Diversity Webpage"),". The data is updated frequently and charts feature metrics that are fetched on a daily basis."),(0,i.kt)("h4",{id:"geth"},"Geth"),(0,i.kt)("p",null,"Geth is the most popular and widely used Ethereum client. It's written in the Go programming language. Geth can be used for various tasks, including creating smart contracts, transferring tokens, mining ether, and exploring block history. It's developed and maintained by the Ethereum Foundation."),(0,i.kt)("h4",{id:"erigon"},"Erigon"),(0,i.kt)("p",null,"Erigon is an Ethereum client that aims to offer a more efficient and faster alternative to Geth. It's written in Go and includes several optimizations to reduce the amount of data stored and improve processing speed. However, these optimizations can make Erigon more complex to maintain and update."),(0,i.kt)("h4",{id:"prysm"},"Prysm"),(0,i.kt)("p",null,"Prysm is written in Go and developed by Prysmatic Labs. Validators widely use it. Performance-wise, Prysm leverages optimized processes and data structures, offering a smooth experience for validators. The client had rigorous testing and auditing processes to ensure the client was secure against potential threats. It also comes with an excellent user-friendly terminal interface."),(0,i.kt)("h4",{id:"lighthouse"},"Lighthouse"),(0,i.kt)("p",null,"Lighthouse is written in Rust and developed by Sigma Prime. From a security perspective, Lighthouse leverages Rust's safety features and undergoes regular security audits to protect against potential vulnerabilities. Regarding efficiency, Lighthouse is designed to perform well even on low-spec hardware, making it accessible to a wide range of users with different skill levels."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Both consensus clients, Prysm and Lighthouse, are known to be highly secure and reliable.")),(0,i.kt)("h3",{id:"642-storage-comparison"},"6.4.2 Storage Comparison"),(0,i.kt)("p",null,"As ",(0,i.kt)("a",{parentName:"p",href:"https://www.quicknode.com/guides/infrastructure/node-setup/ethereum-full-node-vs-archive-node/"},"analyzed by QuickNode"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ledgerwatch/erigon"},"declared by Ledgerwatch"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://ycharts.com/indicators/ethereum_chain_full_sync_data_size"},"crawled by YCharts"),", the used storage of the clients for the Ethereum Blockchain as of March 2023 can be estimated around these numbers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"FULL NODE MODE\n--GETH...................................970 GB TOTAL\n--ERIGON.................................460 GB TOTAL\n\nARCHIVE NODE MODE\n--GETH..................................13.5 TB TOTAL\n--ERIGON.................................2.4 TB TOTAL\n")),(0,i.kt)("h4",{id:"size-differences"},"Size Differences"),(0,i.kt)("p",null,"Geth is the initial implementation of the EVM as a blockchain protocol. In comparison, Erigon is designed to be a more efficient execution client and achieves this efficiency through several optimizations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Database Schema"),": Erigon uses a more optimized database schema that reduces the amount of data that needs to be stored."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"State Trie Pruning"),": Erigon implements more aggressive state tree pruning, which removes more unnecessary data from the state trie."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data Compression"),": Erigon uses advanced data compression techniques to reduce the size of stored blockchain data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code Optimization"),": Erigon includes various code-level optimizations that make it run more efficiently, requiring less storage and processing power.")),(0,i.kt)("h4",{id:"expected-growth"},"Expected Growth"),(0,i.kt)("p",null,"The needed storage can be broken down into the following yearly growth based on an EVM network that gained significant exposure for almost a decade:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"GROWTH OF STORAGE IN FULL NODE MODE\n--GETH...................................10.5 GB/MONTH | 120 GB/YEAR\n--ERIGON....................................5 GB/MONTH |  60 GB/YEAR\n\nGROWTH OF STORAGE IN ARCHIVE NODE MODE\n--GETH....................................145 GB/MONTH | 1.8 TB/YEAR\n--ERIGON...................................26 GB/MONTH | 320 GB/YEAR\n")),(0,i.kt)("p",null,"Adjust your need for storage accordingly by asking yourself how long you can get by without maintenance on the node."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These are rough numbers for a different blockchain running the supported clients. These are only for estimation purposes and may slightly differ based on the used storage format.")),(0,i.kt)("h3",{id:"643-client-diversity"},"6.4.3 Client Diversity"),(0,i.kt)("p",null,"Client diversity refers to utilizing different software clients in a blockchain network developed by various teams and in other programming languages. Having a variety of clients in a blockchain network is critically important:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security and Resilience"),": Client diversity increases the robustness of the network. If there's a bug in one client, it doesn't bring down the entire network because other clients can continue to operate. This decentralization and redundancy is a fundamental aspect of blockchain security and resilience."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Decentralization and Governance"),": Client diversity promotes decentralization in the development and governance of the Ethereum network. It prevents any team or entity from having too much influence over the network's growth.")),(0,i.kt)("p",null,"Operators of validators and nodes should ensure that we can split our client usage evenly to the extent of officially supported clients and validators. You can find metrics about the diversity on Ethereum at the ",(0,i.kt)("a",{parentName:"p",href:"https://clientdiversity.org/#distribution"},"Client Diversity Webpage"),". The charts for consensus and execution clients are updated on a daily basis."),(0,i.kt)("h4",{id:"ethereums-history"},"Ethereum's History"),(0,i.kt)("p",null,"Ethereum client diversity has proven essential in maintaining the network's robustness during several incidents. One of the most notable incidents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shanghai DoS Attacks, 2016"),": During the Devcon2 conference, the Ethereum network was targeted by a series of denial-of-service attacks. The attacker exploited several vulnerabilities in the Ethereum protocol, which resulted in a slowdown of block propagation times and disrupted the network. The main client at the time, Geth, was particularly affected. However, the Parity client had a different implementation and wasn't affected similarly. Client diversity allowed the network to continue to operate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OpenEthereum Consensus Bug, 2020"),": There have been several instances where a bug in one client could have led to a network fork, but the diversity of clients prevented this from happening. In 2020, a bug in the OpenEthereum client led to some nodes getting stuck at a particular block, but because many nodes were running other clients, the network as a whole continued to function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prysm Client Incident, 2023"),": Prysm nodes were burdened by a flood of attestations about older, outdated transactions. This phenomenon led to excessive usage of system resources in an attempt to update the transaction record, causing slowdowns and system failures. It turned out to be due to an error in the transaction organization mechanism, causing the system to sort transactions using incorrect information. This error further exacerbated the strain on the system, complicating its ability to manage and update the transaction record effectively. During this time, Lighthouse was the only client not affected. However, the Ethereum network stalled for 25 minutes due to the majority being vulnerable and continued with tremendous workloads for several days.")))}u.isMDXComponent=!0}}]);