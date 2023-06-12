"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[9137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="Operating System",s={unversionedId:"mainnet/complete-node-guide/bios-installation/operating-system",id:"mainnet/complete-node-guide/bios-installation/operating-system",title:"Operating System",description:"Ubuntu 22.04.2 Server is the latest iteration of one of the world's most popular and widely-used Linux distributions. It's a proven, reliable platform designed to provide you with a secure, high-performance, and low-maintenance solution tailored to decentralized networks' demanding world.",source:"@site/docs/mainnet/complete-node-guide/2-bios-installation/01-operating-system.md",sourceDirName:"mainnet/complete-node-guide/2-bios-installation",slug:"/mainnet/complete-node-guide/bios-installation/operating-system",permalink:"/docs/mainnet/complete-node-guide/bios-installation/operating-system",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/2-bios-installation/01-operating-system.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Start here",permalink:"/docs/mainnet/complete-node-guide/bios-installation/start-here"},next:{title:"BIOS Setup",permalink:"/docs/mainnet/complete-node-guide/bios-installation/bios-setup"}},l={},u=[{value:"2.1.1 Ubuntu Node",id:"211-ubuntu-node",level:3},{value:"Server Version",id:"server-version",level:4},{value:"Long-Term Support",id:"long-term-support",level:4},{value:"2.1.2 Download and Preparation",id:"212-download-and-preparation",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operating-system"},"Operating System"),(0,a.kt)("p",null,"Ubuntu 22.04.2 Server is the latest iteration of one of the world's most popular and widely-used Linux distributions. It's a proven, reliable platform designed to provide you with a secure, high-performance, and low-maintenance solution tailored to decentralized networks' demanding world."),(0,a.kt)("h3",{id:"211-ubuntu-node"},"2.1.1 Ubuntu Node"),(0,a.kt)("p",null,"Ubuntu Server is renowned for its ease of use, flexibility, and robustness, making it an excellent choice for various server applications. An LTS version is particularly significant for those seeking a stable and reliable platform for their nodes."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Based on ",(0,a.kt)("a",{parentName:"em",href:"https://www.ethernodes.org/os"},"Ethernodes"),", more than 97% of EVM nodes run on Linux distributions.")),(0,a.kt)("h4",{id:"server-version"},"Server Version"),(0,a.kt)("p",null,"Choosing Ubuntu Server over Ubuntu Desktop for a blockchain node offers several advantages that make it a more suitable option for running server-oriented applications, such as nodes. Some of the key reasons for selecting Ubuntu Server include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Minimal resource usage"),": Ubuntu Server is designed without a graphical user interface (GUI) and has minimal pre-installed packages. This results in lower resource consumption (CPU, memory, and storage), which is essential for optimizing the performance of a blockchain node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Increased stability and reliability"),": The streamlined nature of Ubuntu Server, with fewer packages and no GUI, reduces the potential for software conflicts, crashes, and security vulnerabilities. Fewer packages lead to a more stable and reliable node environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Focus on server applications"),": Ubuntu Server is tailored explicitly for server applications, with pre-installed packages and tools designed to support server use cases. Packages designed for continuous operation make it an ideal platform for running blockchain nodes, often requiring server-grade performance, networking, and security features."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Regular updates and security patches"),": Ubuntu Server receives more frequent updates and security patches, ensuring your node remains secure and up-to-date with the latest software versions.")),(0,a.kt)("h4",{id:"long-term-support"},"Long-Term Support"),(0,a.kt)("p",null,"LTS refers to a software version that receives extended support regarding updates, bug fixes, and security patches. For Ubuntu Server, LTS releases are maintained for five years, whereas non-LTS releases are supported for only nine months. This extended support period is crucial for blockchain nodes, ensuring that your node remains secure, stable, and compatible with the ever-evolving blockchain ecosystem."),(0,a.kt)("p",null,"Selecting an LTS release, such as Ubuntu 22.04.2 Server, for your blockchain node offers several key advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stability"),": LTS releases prioritize stability and reliability, making them ideal for mission-critical applications like blockchain nodes, which require uninterrupted operation and minimal downtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security"),": With an LTS release, you can be assured of regular security updates and patches, safeguarding your node from potential vulnerabilities and threats."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lower maintenance overhead"),": The extended support period means you won't need to upgrade your node's OS as frequently, reducing the maintenance effort and associated downtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Wider compatibility"),": LTS releases are often better supported by third-party software and tools, ensuring seamless integration with various blockchain networks and applications.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"If you want to become a validator and have no other computer at home that can be flashed and used to safely generate your validator keys offline, head over to the ",(0,a.kt)("a",{parentName:"strong",href:"/docs/mainnet/validator-key-generation/"},"Key Generation")," section and continue to use your node for it. After you receive your validator keys, you can continue with this guide, effectively flashing your machine again."))),(0,a.kt)("h3",{id:"212-download-and-preparation"},"2.1.2 Download and Preparation"),(0,a.kt)("p",null,"After understanding operating system properties and considerations, download the official Ubuntu server version from ",(0,a.kt)("inlineCode",{parentName:"p"},"ubuntu.com/download/server"),". You need a USB device with at least 2GB that you can use to install the firmware on the node's storage disk."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download ",(0,a.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/server"},"Ubuntu 22.04.2 Server")),(0,a.kt)("li",{parentName:"ol"},"Create a Bootable USB Drive with the ISO file",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview"},"Rufus Guide for Ubuntu")),(0,a.kt)("li",{parentName:"ul"},"Linux: ",(0,a.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu#1-overview"},"Disk Creator Guide for Ubuntu")),(0,a.kt)("li",{parentName:"ul"},"MacOS: ",(0,a.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-macos#1-overview"},"Etcher Guide for Ubuntu")))),(0,a.kt)("li",{parentName:"ol"},"Disconnect the USB drive"),(0,a.kt)("li",{parentName:"ol"},"Connect the USB drive to your node")))}p.isMDXComponent=!0}}]);