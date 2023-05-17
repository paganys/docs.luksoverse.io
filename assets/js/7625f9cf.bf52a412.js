"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,k=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return n?o.createElement(k,r(r({ref:t},u),{},{components:n})):o.createElement(k,r({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={},r="LUKSO CLI Node Setup",l={unversionedId:"mainnet/complete-node-guide/blockchain-clients/cli-setup",id:"mainnet/complete-node-guide/blockchain-clients/cli-setup",title:"LUKSO CLI Node Setup",description:"Now that we have prepared all ports, the firewall and the router, we can actually install the blockchain clients used to participate in the network intself using the LUKSO CLI.",source:"@site/docs/mainnet/complete-node-guide/6-blockchain-clients/08-cli-setup.md",sourceDirName:"mainnet/complete-node-guide/6-blockchain-clients",slug:"/mainnet/complete-node-guide/blockchain-clients/cli-setup",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/cli-setup",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/6-blockchain-clients/08-cli-setup.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Router Configuration",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/router-config"},next:{title:"LUKSO CLI Validator Setup",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/validator-setup"}},s={},c=[{value:"6.8.1 What is the LUKSO CLI",id:"681-what-is-the-lukso-cli",level:3},{value:"6.8.2 Installing the LUKSO CLI",id:"682-installing-the-lukso-cli",level:3},{value:"6.8.3 Creating the Working Directory",id:"683-creating-the-working-directory",level:3},{value:"6.8.4 Initialize the Node&#39;s Working Directory",id:"684-initialize-the-nodes-working-directory",level:3},{value:"What is a Bootnode?",id:"what-is-a-bootnode",level:4},{value:"Initial Folder Structure",id:"initial-folder-structure",level:4},{value:"6.8.5 Installing the Blockchain Clients",id:"685-installing-the-blockchain-clients",level:3},{value:"6.8.6 Starting and Stopping the Node",id:"686-starting-and-stopping-the-node",level:3},{value:"Custom Flags",id:"custom-flags",level:4},{value:"Setting the Graffiti",id:"setting-the-graffiti",level:4},{value:"Startup Folder Structure",id:"startup-folder-structure",level:4},{value:"6.8.7 Checking the Node&#39;s Status",id:"687-checking-the-nodes-status",level:3},{value:"JSON-RPC",id:"json-rpc",level:4},{value:"Attach Clients",id:"attach-clients",level:4}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lukso-cli-node-setup"},"LUKSO CLI Node Setup"),(0,a.kt)("p",null,"Now that we have prepared all ports, the firewall and the router, we can actually install the blockchain clients used to participate in the network intself using the LUKSO CLI."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you want to use LUKSO's official Docker Configurations, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/blockchain-clients/docker-setup"},"Docker Setup")," instead.")),(0,a.kt)("p",null,"Official Links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.lukso.tech/networks/mainnet/parameters"},"LUKSO Mainnet Parameters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.lukso.tech/networks/testnet/parameters"},"LUKSO Testnet Parameters"))),(0,a.kt)("h3",{id:"681-what-is-the-lukso-cli"},"6.8.1 What is the LUKSO CLI"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/tools-lukso-cli"},"LUKSO CLI")," is a command line tool to install, manage and set up validators of different clients for the LUKSO blockchain. It automatically supports all clients that are officially tested from the LUKSO team and provides simple and unified commands to interact with them."),(0,a.kt)("p",null,"You can control configurations to devnets, the testnet, and the mainnet in one working directory- depending on which one you want to synchronize and use. That said, the CLI is in no way limiting your capabilities of running the client manually- as all flags and configurations can be passed down to the services."),(0,a.kt)("p",null,"In the background, the blockchain clients run directly on the operating system, i.e., in the user directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/")," of the Ubuntu Server installation. The services are executed directly from the build and can be accessed via the terminal."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/blockchain-clients/docker-setup"},"Docker Setup")," guide if you want to run multiple networks simultaneously or need to have your application separated from the rest of service running on your node machine.")),(0,a.kt)("h3",{id:"682-installing-the-lukso-cli"},"6.8.2 Installing the LUKSO CLI"),(0,a.kt)("p",null,"Download and execute the LUKSO CLI installation script from the official URL. The CLI will be installed within the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/lukso")," directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo curl https://install.lukso.network | sh\n")),(0,a.kt)("h3",{id:"683-creating-the-working-directory"},"6.8.3 Creating the Working Directory"),(0,a.kt)("p",null,"Its recommended to create the node's working directory in the homepath:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,a.kt)("p",null,"Create a working directory for your node's data. This is where everything regarding your blockchain node will be stored. Make sure to choose a proper name for your node folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir <your-node-folder>\n")),(0,a.kt)("p",null,"Move into the working directory to initialize your node clients:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ./<your-node-folder>\n")),(0,a.kt)("h3",{id:"684-initialize-the-nodes-working-directory"},"6.8.4 Initialize the Node's Working Directory"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"CAUTION"),": Genesis files are not released yet. Any created node working directory before the geneis data release has to be re-initialized. If you dont want to run a testnet node before becoming a validator on mainnet, stop here and come back later when it's officially announced on ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/lukso_io?s=20"},"LUKSO's Twitter Account"),".")),(0,a.kt)("p",null,"If you're ready, we can continue initializing the working directory using the LUKSO CLI. It will download all dependencies and configuration files for all network types. It will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"cli-config.yaml")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," folder holding the genesis files, network properties as well as client-specific configurations for the bootnodes."),(0,a.kt)("h4",{id:"what-is-a-bootnode"},"What is a Bootnode?"),(0,a.kt)("p",null,"When a new node connects to the Ethereum network, it needs to know the IP addresses of other nodes on the network so that it can start communicating with them. However, it may not have any prior information about the network, making it difficult to establish these connections."),(0,a.kt)("p",null,"This is where the bootnode comes in. A bootnode is a publicly accessible node that has a fixed IP address and is always available to accept incoming connections from new nodes. When a new node connects to the bootnode, it sends a message requesting a list of IP addresses of other nodes on the network. The bootnode responds with a list of IP addresses of other nodes it knows about, which the new node can then use to establish connections. When the network is starting, LUKSO will initialize the first bootnode connections."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lukso init\n")),(0,a.kt)("h4",{id:"initial-folder-structure"},"Initial Folder Structure"),(0,a.kt)("p",null,"The folder structure after the initialization will look like this. For each network type there are separate configurations files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"lukso-node\n\u2502\n\u251c\u2500\u2500\u2500configs                                 // Configuration\n\u2502   \u2514\u2500\u2500\u2500[network_type]                      // Network's Config Data\n\u2502       \u251c\u2500\u2500\u2500shared\n|       |   \u251c\u2500\u2500\u2500genesis.json                // Genesis JSON Data\n|       |   \u251c\u2500\u2500\u2500genesis.ssz                 // Genesis Validator File\n|       |   \u2514\u2500\u2500\u2500config.yaml                 // Global Client Config\n\u2502       \u251c\u2500\u2500\u2500geth                            // Config for Geth Client\n\u2502       \u251c\u2500\u2500\u2500prysm                           // Config for Prysm Client\n\u2502       \u251c\u2500\u2500\u2500erigon                          // Config for Erigon Client\n\u2502       \u2514\u2500\u2500\u2500lighthouse                      // Config for Lighthouse Client\n|\n\u2514\u2500\u2500\u2500cli-config.yaml                         // Global CLI Configuration\n")),(0,a.kt)("h3",{id:"685-installing-the-blockchain-clients"},"6.8.5 Installing the Blockchain Clients"),(0,a.kt)("p",null,"Afterwards you can install the clients that you wish to run. They will install globally but are set as default clients within your working directories config."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you want to run your node with validators, make sure to choose the Prysm consensus client as we do not support other validator clients right now.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lukso install\n")),(0,a.kt)("p",null,"All clients will be installed within the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/")," folder."),(0,a.kt)("h3",{id:"686-starting-and-stopping-the-node"},"6.8.6 Starting and Stopping the Node"),(0,a.kt)("p",null,"The following command will spin up your execution and consensus client and connect to the mainnet by default, but you can input the testnet or devnet flag so it connects to one of the other networks as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Starting mainnet\nlukso start\n\n# Starting testnet\nlukso start --testnet\n\n# Stopping the running network\nlukso stop\n")),(0,a.kt)("h4",{id:"custom-flags"},"Custom Flags"),(0,a.kt)("p",null,"There is a whole suite of flags that can be added to the clients while starting the service. By using the flags ",(0,a.kt)("inlineCode",{parentName:"p"},"--geth-[COMMAND]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--prysm-[COMMAND]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--validator-[COMMAND]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--erigon-[COMMAND]"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"--lighthouse-[COMMAND]")," you can pass through any available flag of the underlying client."),(0,a.kt)("p",null,"Have a look at their specifications if you like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://geth.ethereum.org/docs/fundamentals/command-line-options"},"Geth Parameters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.prylabs.network/docs/prysm-usage/parameters"},"Prysm Parameters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lighthouse-book.sigmaprime.io/advanced-datadir.html"},"Lighthouse Parameters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ledgerwatch/erigon"},"Erigon Parameters"))),(0,a.kt)("h4",{id:"setting-the-graffiti"},"Setting the Graffiti"),(0,a.kt)("p",null,"Using custom flags, we can set up our Graffiti. The graffiti is a term that refers to a customizable field that validators can use when they propose a new block. This field allows validators to inscribe a short message up to 32 bytes into the metadata of the block. These messages are permanently stored on the blockchain and can be publicly viewed."),(0,a.kt)("p",null,"The ability to add graffiti to a block gives validators a unique way to mark their contributions to the network. The content of the graffiti can vary greatly. Some validators might use this space to include their validator's name or identifier, while others might use it for fun."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It's important to note, however, that the graffiti field should be used responsibly. Although it allows for freedom of expression, it's part of the Ethereum blockchain's permanent record, so the community generally encourages respectful and appropriate usage.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# Starting mainnet with graffiti\nlukso start --validator-graffiti "I\'m a graffiti!"\n\n# Starting testnet with graffiti\nlukso start --testnet --validator-graffiti "I\'m a graffiti!"\n')),(0,a.kt)("h4",{id:"startup-folder-structure"},"Startup Folder Structure"),(0,a.kt)("p",null,"After first starting the LUKSO CLI there will be new folders added to the node's working directory that stora all your blockchain dat for the corresponding network type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"lukso-node\n\u2502\n...\n|\n\u251c\u2500\u2500\u2500[network_type]-data                     // Network's Blockchain Data\n\u2502   \u251c\u2500\u2500\u2500consensus                           // Storage of used Consensus Client\n\u2502   \u251c\u2500\u2500\u2500execution                           // Storage of used Execution Client\n\u2502   \u2514\u2500\u2500\u2500validator                           // Storage of Validator Client\n|\n\u251c\u2500\u2500\u2500[network_type]-logs                     // Network's Logged Data\n|\n...\n")),(0,a.kt)("h3",{id:"687-checking-the-nodes-status"},"6.8.7 Checking the Node's Status"),(0,a.kt)("p",null,"There are multiple ways of checking the node's status. The LUKSO CLI already comes with a bunch of them to check which clients are running, and to look at the logs. These logs are then not only printed onto the screen, but can also be saved as log files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Check the status of all clients\nlukso status\n\n# Check the logs of the running mainnet execution client\nlukso logs execution\n\n# Check the logs of the running mainnet consensus client\nlukso logs consensus\n\n# Check the logs of the running testnet execution client\nlukso logs execution -- testnet\n\n# Check the logs of the running testnet consensus client\nlukso logs consensus -- testnet\n")),(0,a.kt)("p",null,"In addition to this, Geth and Erigon clients both provide their own default JSON-RPC interface that is enabled internally. Here, clients are listeneing for incoming JSON-RPC requests."),(0,a.kt)("h4",{id:"json-rpc"},"JSON-RPC"),(0,a.kt)("p",null,"JSON-RPC is a remote procedure call protocol encoded in JSON. It is a lightweight, language-independent data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON-RPC allows for notifications and for multiple calls to be sent to the server which may be answered out of order."),(0,a.kt)("p",null,"In the context of blockchain and Ethereum, JSON-RPC is used as a way for applications to interact with the blockchain network. It provides a way to invoke methods on an Ethereum node, allowing applications to do things like querying blockchain data, sending transactions, and interacting with smart contracts."),(0,a.kt)("p",null,"If you're running an Ethereum node on your computer, it will typically expose a JSON-RPC interface on port 8545. This interface can be used by other applications on your computer, or even on the internet (if appropriately configured), to interact with the Ethereum network."),(0,a.kt)("h4",{id:"attach-clients"},"Attach Clients"),(0,a.kt)("p",null,"We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"attach")," command to interact with a running execution instance. This will open up a JavaScript console where you can execute JavaScript commands and interact with the Ethereum blockchain via your own node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Geth interface\ngeth attach http://localhost:8545\n\n# Erigon interface\nerigon attach http://localhost:8545\n")),(0,a.kt)("p",null,"If you are listening to the port, you can check the clients:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Check current blocknumber\n> eth.blocknumber\n\n# Check if client is still syncing\n> eth.syncing\n\n# Output full function set\n> eth\n\n# Quick listening to port\n> exit\n")))}h.isMDXComponent=!0}}]);