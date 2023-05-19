"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[1098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={},r=void 0,l={unversionedId:"mainnet/complete-node-guide/blockchain-clients/client-modification",id:"mainnet/complete-node-guide/blockchain-clients/client-modification",title:"client-modification",description:"6.10 Client Modifications",source:"@site/docs/mainnet/complete-node-guide/6-blockchain-clients/10-client-modification.md",sourceDirName:"mainnet/complete-node-guide/6-blockchain-clients",slug:"/mainnet/complete-node-guide/blockchain-clients/client-modification",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/client-modification",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/6-blockchain-clients/10-client-modification.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"validator-setup",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/validator-setup"},next:{title:"LUKSO Docker Setup",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/docker-setup"}},s={},u=[{value:"6.10 Client Modifications",id:"610-client-modifications",level:2},{value:"6.10.1 Changing your Node&#39;s Name",id:"6101-changing-your-nodes-name",level:3},{value:"6.10.2 Setting the Graffiti",id:"6102-setting-the-graffiti",level:3},{value:"6.10.3 IP Settings",id:"6103-ip-settings",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"610-client-modifications"},"6.10 Client Modifications"),(0,a.kt)("p",null,"There is a whole suite of flags that can be added to the clients while starting the service. By using the flags ",(0,a.kt)("inlineCode",{parentName:"p"},"--geth-[COMMAND]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--prysm-[COMMAND]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--validator-[COMMAND]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--erigon-[COMMAND]"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"--lighthouse-[COMMAND]")," you can pass through any available flag of the underlying client."),(0,a.kt)("p",null,"Have a look at their specifications if you like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://geth.ethereum.org/docs/fundamentals/command-line-options"},"Geth Parameters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.prylabs.network/docs/prysm-usage/parameters"},"Prysm Parameters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lighthouse-book.sigmaprime.io/advanced-datadir.html"},"Lighthouse Parameters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ledgerwatch/erigon"},"Erigon Parameters"))),(0,a.kt)("h3",{id:"6101-changing-your-nodes-name"},"6.10.1 Changing your Node's Name"),(0,a.kt)("p",null,"You can change your node's name to change the appearence to other nodes in the network or on stats pages, it doesn't affect the node's operation or performance."),(0,a.kt)("p",null,"You can change your node's name, you can do so by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"passing down the ",(0,a.kt)("inlineCode",{parentName:"li"},"identity")," flag"),(0,a.kt)("li",{parentName:"ul"},"configuring your ",(0,a.kt)("inlineCode",{parentName:"li"},"toml")," files")),(0,a.kt)("p",null,"If you want to set a temporary name, just pass down the identity flag when starting up your execution client. For Geth, it will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'lukso start --geth-identity "<your-node-name>"\n')),(0,a.kt)("p",null,"For Erigon, it will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'lukso start --erigon-identity "<your-node-name>"\n')),(0,a.kt)("p",null,"If you want a permanant naming, even when restarting your node without passing the flag, go ahead and edit your ",(0,a.kt)("inlineCode",{parentName:"p"},"geth.toml")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"erigon.toml")," files within ",(0,a.kt)("inlineCode",{parentName:"p"},"/config/<network>/geth/")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/config/<network>/erigon/")," of the working directory."),(0,a.kt)("p",null,"Make sure to be in the node folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,a.kt)("p",null,"Navigate into your node's config folder of your network you want to set the name for. Make sure to adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"your-node-folder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<network>")," ",(0,a.kt)("inlineCode",{parentName:"p"},"your-execution-client")," properties with the actual folder names."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd <your-node-folder>/configs/<network>/<your-execution-client>\n")),(0,a.kt)("p",null,"Then open up the file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vim <your-execution-client>.toml\n")),(0,a.kt)("p",null,"When using Geth, seach for the ",(0,a.kt)("inlineCode",{parentName:"p"},"[Node]")," section and then add the Identity property right under it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'[Node]\nUserIdent = "<your-node-name>"\n')),(0,a.kt)("p",null,"If you are running on Erigon, enter the following line at the end of the config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'"identity" = "<your-node-name>"\n')),(0,a.kt)("p",null,"Make sure to adjust ",(0,a.kt)("inlineCode",{parentName:"p"},"<your-node-name>")," to your actual name. Also be careful when editing your config files. Make sure you are not deleting anything and that there are spaces in front and behind the ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," symbol."),(0,a.kt)("h3",{id:"6102-setting-the-graffiti"},"6.10.2 Setting the Graffiti"),(0,a.kt)("p",null,"The graffiti is a term that refers to a customizable field that validators can use when they propose a new block. This field allows validators to inscribe a short message up to 32 bytes into the metadata of the block. These messages are permanently stored on the blockchain and can be publicly viewed."),(0,a.kt)("p",null,"The ability to add graffiti to a block gives validators a unique way to mark their contributions to the network. The content of the graffiti can vary greatly. Some validators might use this space to include their validator's name or identifier, while others might use it for fun."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It's important to note, however, that the graffiti field should be used responsibly. Although it allows for freedom of expression, it's part of the Ethereum blockchain's permanent record, so the community generally encourages respectful and appropriate usage.")),(0,a.kt)("p",null,"There are two types of how to add graffitis to our validator:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"passing down the ",(0,a.kt)("inlineCode",{parentName:"li"},"graffiti")," flag"),(0,a.kt)("li",{parentName:"ul"},"configuring your ",(0,a.kt)("inlineCode",{parentName:"li"},"yaml")," files")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# Starting mainnet with graffiti\nlukso start --validator-graffiti "<your-graffiti>"\n\n# Starting testnet with graffiti\nlukso start --testnet --validator-graffiti "<your-graffiti>"\n')),(0,a.kt)("p",null,"In order to make it a permanent graffiti, you can edit the configuration file of the Validator. Make sure to be in the node folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,a.kt)("p",null,"Navigate into your node's config folder of your network you want to set the name for. Make sure to adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"your-node-folder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<network>")," ",(0,a.kt)("inlineCode",{parentName:"p"},"your-consensus-client")," properties with the actual folder names."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd <your-node-folder>/configs/<network>/<your-consensus-client>\n")),(0,a.kt)("p",null,"Then open up the file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vim validator.yaml\n")),(0,a.kt)("p",null,"Add the following line at the end of the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"graffiti: '<your-graffiti>'\n")),(0,a.kt)("p",null,"Make sure to adjust ",(0,a.kt)("inlineCode",{parentName:"p"},"<your-graffiti>")," to your actual graffiti. Also be careful when editing your config files. Make sure you are not deleting anything."),(0,a.kt)("h3",{id:"6103-ip-settings"},"6.10.3 IP Settings"),(0,a.kt)("p",null,"Usually, there seem to be issues with finding peers. Check if you have issues on your side:"),(0,a.kt)("p",null,"TODO:"),(0,a.kt)("p",null,"If you can not find enough inbound and outbound peers, continue with modifying your config files:"),(0,a.kt)("p",null,"TODO:"))}p.isMDXComponent=!0}}]);