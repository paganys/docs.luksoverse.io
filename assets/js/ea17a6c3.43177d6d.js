"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||a;return n?o.createElement(k,r(r({ref:t},m),{},{components:n})):o.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const a={},r=void 0,l={unversionedId:"mainnet/complete-node-guide/bios-installation/bios-setup",id:"mainnet/complete-node-guide/bios-installation/bios-setup",title:"bios-setup",description:"1.2 BIOS Setup",source:"@site/docs/mainnet/complete-node-guide/2-bios-installation/02-bios-setup.md",sourceDirName:"mainnet/complete-node-guide/2-bios-installation",slug:"/mainnet/complete-node-guide/bios-installation/bios-setup",permalink:"/docs/mainnet/complete-node-guide/bios-installation/bios-setup",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/2-bios-installation/02-bios-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"operating-system",permalink:"/docs/mainnet/complete-node-guide/bios-installation/operating-system"},next:{title:"ubuntu-config",permalink:"/docs/mainnet/complete-node-guide/bios-installation/ubuntu-config"}},p={},s=[{value:"1.2 BIOS Setup",id:"12-bios-setup",level:2},{value:"1.2.1 Enter BIOS",id:"121-enter-bios",level:3},{value:"1.2.2 Power Settings",id:"122-power-settings",level:3},{value:"1.2.3 CPU Settings",id:"123-cpu-settings",level:3},{value:"1.2.4 LED Settings",id:"124-led-settings",level:3},{value:"1.2.5 Boot Order",id:"125-boot-order",level:3},{value:"1.2.6 Operating System Startup",id:"126-operating-system-startup",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"12-bios-setup"},"1.2 BIOS Setup"),(0,i.kt)("p",null,"Understanding and adjusting the BIOS settings can greatly reduce your node's energy consumption. The right OS can enhance speed and processing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please note that your BIOS might have a other layout or settings regarding performance and energy consumption. This is completely normal and changes with the CPU you have installed on your device.")),(0,i.kt)("h3",{id:"121-enter-bios"},"1.2.1 Enter BIOS"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Connect your machine to power and attach a keyboard and monitor.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect your Bootbable USB device to the node"),(0,i.kt)("li",{parentName:"ol"},"Turn on the node using the power button"),(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"F2")," on your keyboard during boot to enter the BIOS setup")),(0,i.kt)("h3",{id:"122-power-settings"},"1.2.2 Power Settings"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ensure that NUC auto starts after power failure.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Power")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Secondary Power Settings")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"After Power Failure")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Power One")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Wake on LAN from S4/S5")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Power On - Normal Boot"))),(0,i.kt)("h3",{id:"123-cpu-settings"},"1.2.3 CPU Settings"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Adjust Cooling for fanless housing")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Cooling")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Fan Control Mode")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Fanless")),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Performance")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Processor")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Hyper-Threading")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Enabled")),(0,i.kt)("li",{parentName:"ol"},"Enable ",(0,i.kt)("inlineCode",{parentName:"li"},"Intel Turbo Boost Technlogy")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Active Processor Cores")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"All")),(0,i.kt)("li",{parentName:"ol"},"Enable ",(0,i.kt)("inlineCode",{parentName:"li"},"Real-Time Performance Tuning"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Adjust performance for the server's energy efficiency")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Power")),(0,i.kt)("li",{parentName:"ol"},"Enable ",(0,i.kt)("inlineCode",{parentName:"li"},"Max Performance Enabled")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Intel Dynamic Power Technology")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Energy Efficient Performance")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Package Power Limit 1 (Sustained)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"25")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Package Power Limit 2 (Burst Mode)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"25")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Package Power Time Window (Tau)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"0"))),(0,i.kt)("h3",{id:"124-led-settings"},"1.2.4 LED Settings"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Turn off status LED signatures for server use")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Power")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Secondary Power Settings")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"S0 Indicator Brightness (%)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Modern Standby Indicator Brightness (%)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"RGB LED")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Brightness (%)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"HDD LED")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Brightness (%)")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"0"))),(0,i.kt)("h3",{id:"125-boot-order"},"1.2.5 Boot Order"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Boot")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Boot Priority")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Boot Option #1")," to your USB device"),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Boot Option #2")," to your internal SSD")),(0,i.kt)("h3",{id:"126-operating-system-startup"},"1.2.6 Operating System Startup"),(0,i.kt)("p",null,"Now that we configured the BIOS correctly, we can exit and start up the node from the defined boot device."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"F10")," to save changes and exit BIOS"),(0,i.kt)("li",{parentName:"ol"},"Wait for the stick to boot up"),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Try or Install Ubuntu Server")),(0,i.kt)("li",{parentName:"ol"},"Let the installation setup run through")))}u.isMDXComponent=!0}}]);