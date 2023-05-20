"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[7066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="Start here",c={unversionedId:"mainnet/complete-node-guide/blockchain-clients/start-here",id:"mainnet/complete-node-guide/blockchain-clients/start-here",title:"Start here",description:"This section of the node guide covers a range of topics that provide the foundational knowledge and practical skills you'll need to successfully establish and maintain your node in the blockchain network. It features the port, router, and firewall configurations, as well as the setups for the CLI and Docker containers in order to run the LUKSO blockchain.",source:"@site/docs/mainnet/complete-node-guide/6-blockchain-clients/00-start-here.md",sourceDirName:"mainnet/complete-node-guide/6-blockchain-clients",slug:"/mainnet/complete-node-guide/blockchain-clients/start-here",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/start-here",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/6-blockchain-clients/00-start-here.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"secure-auth",permalink:"/docs/mainnet/complete-node-guide/access-connection/secure-auth"},next:{title:"LUKSO Blockchain Setup Types",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/setup-types"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"start-here"},"Start here"),(0,r.kt)("p",null,"This section of the node guide covers a range of topics that provide the foundational knowledge and practical skills you'll need to successfully establish and maintain your node in the blockchain network. It features the port, router, and firewall configurations, as well as the setups for the CLI and Docker containers in order to run the LUKSO blockchain."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/setup-types"},"LUKSO Blockchain Setup Types")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/network-theory"},"Ethereum Network Theory")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"docs/mainnet/complete-node-guide/blockchain-clients/client-theory"},"Ethereum Client Theory")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/client-setups"},"Client Setups")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/network-ports"},"Open Network Ports")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/firewall-settings"},"Firewall Settings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/router-config"},"Router Configuration")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/cli-setup"},"LUKSO CLI Node Setup")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/validator-setup"},"LUKSO CLI Validator Setup")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/client-modification"},"Client Modification")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/peer-discovery"},"Peet Discovery")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/blockchain-clients/docker-setup"},"LUKSO Docker Setup"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Continue with Section 7: ",(0,r.kt)("a",{parentName:"strong",href:"/docs/mainnet/complete-node-guide/monitoring/start-here"},"Node Monitoring"))))}u.isMDXComponent=!0}}]);