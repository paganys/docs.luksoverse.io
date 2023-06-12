"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[4238],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9327:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={},i="Router Configuration",l={unversionedId:"mainnet/complete-node-guide/blockchain-clients/router-config",id:"mainnet/complete-node-guide/blockchain-clients/router-config",title:"Router Configuration",description:"To allow external incoming communication into your home network, so they can be forwarded to your node machine with open ports, we also have to open these ports on your router, acting as a second firewall in this case.",source:"@site/docs/mainnet/complete-node-guide/6-blockchain-clients/07-router-config.md",sourceDirName:"mainnet/complete-node-guide/6-blockchain-clients",slug:"/mainnet/complete-node-guide/blockchain-clients/router-config",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/router-config",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/6-blockchain-clients/07-router-config.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Firewall Settings",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/firewall-settings"},next:{title:"LUKSO CLI Node Setup",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/cli-setup"}},s={},d=[{value:"6.7.1 Resolve the Node&#39;s IP Address",id:"671-resolve-the-nodes-ip-address",level:3},{value:"6.7.2 Resolve the Node&#39;s Hardware Address",id:"672-resolve-the-nodes-hardware-address",level:3},{value:"6.7.3 Log into your Router&#39;s Web Interface",id:"673-log-into-your-routers-web-interface",level:3},{value:"6.7.4 Navigate to Port Forwarding Settings",id:"674-navigate-to-port-forwarding-settings",level:3},{value:"4.7.5 Add a New Port Forwarding Rule",id:"475-add-a-new-port-forwarding-rule",level:3},{value:"6.7.6 Apply and Save",id:"676-apply-and-save",level:3}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"router-configuration"},"Router Configuration"),(0,o.kt)("p",null,"To allow external incoming communication into your home network, so they can be forwarded to your node machine with open ports, we also have to open these ports on your router, acting as a second firewall in this case."),(0,o.kt)("h3",{id:"671-resolve-the-nodes-ip-address"},"6.7.1 Resolve the Node's IP Address"),(0,o.kt)("p",null,"Resolve the nodes IP address again as we already did and explained in detail in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/router-config/start-here"},"router config")," section of the guide:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ip route show default\n")),(0,o.kt)("p",null,"The output will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"default via <GATEWAY_IP_ADDRESS> dev eno1 proto dhcp src <NODE_IP_ADDRESS> metric <ROUTING_WEIGHT>\n")),(0,o.kt)("p",null,"Alternatively, you can also send a request to the Google server and filter their response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ip route get 8.8.8.8 | awk '{print $7}'\n")),(0,o.kt)("h3",{id:"672-resolve-the-nodes-hardware-address"},"6.7.2 Resolve the Node's Hardware Address"),(0,o.kt)("p",null,"Now we can retrieve the information about the MAC addresses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ip link show\n")),(0,o.kt)("p",null,"The output will list all the network interfaces on the system. Look into the interface used to broadcast and send information to the outside world using an Ethernet connection. The entry you're looking for looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"<NETWORK_INFERFACE_NAME>: <BROADCAST,MULTICAST,UP,LOWER_UP> ...\n    link/ether <MAC_ADDRESS> brd <BROADCAST_ADDRESS>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Write down or remember both names so you can check them later on and identify your device for router settings.")),(0,o.kt)("h3",{id:"673-log-into-your-routers-web-interface"},"6.7.3 Log into your Router's Web Interface"),(0,o.kt)("p",null,"Open a web browser and enter the router's IP address or web address. You'll be prompted to enter your router's admin username and password. Check your router's documentation or label for the default credentials if you haven't changed them."),(0,o.kt)("h3",{id:"674-navigate-to-port-forwarding-settings"},"6.7.4 Navigate to Port Forwarding Settings"),(0,o.kt)("p",null,"In your router's web interface, navigate to the section related to port forwarding settings. This section might be named as ",(0,o.kt)("inlineCode",{parentName:"p"},"Port Forwarding"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Applications"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"Firewall"),". In more consumer-friendly machines like mine, it could be found in:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Internet")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Permit Access")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Port Sharing")),(0,o.kt)("h3",{id:"475-add-a-new-port-forwarding-rule"},"4.7.5 Add a New Port Forwarding Rule"),(0,o.kt)("p",null,"Usually, a button or link will be labeled ",(0,o.kt)("inlineCode",{parentName:"p"},"Add"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"New Rule"),", or something similar. Click on it to create a new port forwarding rule for a specific device."),(0,o.kt)("p",null,"You'll be prompted to enter the device's MAC address and the static IP address you gave your device before. You can select one of your currently connected devices in more modern firmware. Choose your node device."),(0,o.kt)("p",null,"On my end, I found the settings within:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Port Sharing")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Device for Sharing")),(0,o.kt)("p",null,"After clicking on the node's device name or clicking new rules, you should be able to set a new port access rule. There are the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Device Info/MAC Address/IP Address"),": These are the fields for device information. In more modern firmware, you can select the device. On older router devices, you have to manually input your device's MAC and static IP addresses you've read out before. The incoming traffic on the specified port will be forwarded to the device with this IP address. The MAC address is there for the IP always to be assigned statically."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Name/ID/Description"),": This is just a label identifying the rule. You can enter something like a short description of the above table so that you will associate it later. I chose ",(0,o.kt)("inlineCode",{parentName:"li"},"<client-name>-<2-word-description>-<port-number>")," as the naming convention to always know what the port is used for."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"External Port"),": This is the port number you want to open for incoming traffic. For Geth and Prysm, you might need to open ports such as ",(0,o.kt)("inlineCode",{parentName:"li"},"30303"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"13000"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"12000")," for blockchain clients."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Internal Port/Port to Device"),": This port number on your local machine will handle the incoming traffic. Usually, this will be the same as the external port. If you did not manually configure port forwarding, input the same as in the defined external port. If there is a second field for ",(0,o.kt)("inlineCode",{parentName:"li"},"through port")," for advanced redirects, input the same port number again. If they are equal, no additional ruleset will apply."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Protocol"),": This network protocol is used for incoming traffic. It could be TCP, UDP, or both. Make sure to match the protocol with the requirements of your blockchain clients. Some routers might not allow setting one rule for multiple protocols. If so, you must select one rule for each protocol of the same port number.")),(0,o.kt)("p",null,"On my router, I set the following rule packages for Geth and Prysm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"---------------------------------------------------------------------------------\n| DEVICE:               <node-device-name>                                      |\n| IPV4 ADDRESS:         <node-ip-address>                                       |\n| MAC ADDRESS:          <node-mac-address>                                      |\n| IPV6 INTERFACE ID:    <ipv6-interface-id>     (assigned automatically)        |\n---------------------------------------------------------------------------------\n| \u25a1 Permit independent port sharing for this device                             |\n---------------------------------------------------------------------------------\n| IPV4                                                                          |\n| \u25a1 Open this device completely for internet sharing via IPv4 (exposed host)    |\n---------------------------------------------------------------------------------\n| IPv6                                                                          |\n| Enable PING6                                                                  |\n| Open firewall for delegated IPv6 prefixes of this device                      |\n| Open this device completely for internet sharing via IPv6 (exposed host)      |\n---------------------------------------------------------------------------------\n\nSHARING RULES\n1 ---\n        -------------------------------------------------------------------------\n        | NAME:                         execution-data-30303                    |\n        | PROTOCOL:                     TCP                                     |\n        | PORT TO DEVICE:               30303   THROUGH PORT:       3030        |\n        | PORT REQUESTED EXTERNALLY:    30303                                   |\n        | (IPv4 only)                                                           |\n        -------------------------------------------------------------------------\n        | \u22a0 Enable sharing                                                      |\n        -------------------------------------------------------------------------\n        | IPV4 ADDRESS IN THE INTERNET: <internet-ip-address>                   |\n        | PORT ASSIGNED EXTERNALLY:     30303   THROUGH PORT:       3030        |\n        -------------------------------------------------------------------------\n2 ---\n        -------------------------------------------------------------------------\n        | NAME:                         beacon-sync-13000                       |\n        | PROTOCOL:                     TCP                                     |\n        | PORT TO DEVICE:               13000   THROUGH PORT:       13000       |\n        | PORT REQUESTED EXTERNALLY:    13000                                   |\n        | (IPv4 only)                                                           |\n        -------------------------------------------------------------------------\n        | \u22a0 Enable sharing                                                      |\n        -------------------------------------------------------------------------\n        | IPV4 ADDRESS IN THE INTERNET: <internet-ip-address>                   |\n        | PORT ASSIGNED EXTERNALLY:     13000   THROUGH PORT:       13000       |\n        -------------------------------------------------------------------------\n3 ---\n        -------------------------------------------------------------------------\n        | NAME:                         beacon-data-12000                       |\n        | PROTOCOL:                     UDP                                     |\n        | PORT TO DEVICE:               12000   THROUGH PORT:       12000       |\n        | PORT REQUESTED EXTERNALLY:    12000                                   |\n        | (IPv4 only)                                                           |\n        -------------------------------------------------------------------------\n        | \u22a0 Enable sharing                                                      |\n        -------------------------------------------------------------------------\n        | IPV4 ADDRESS IN THE INTERNET: <internet-ip-address>                   |\n        | PORT ASSIGNED EXTERNALLY:     12000   THROUGH PORT:       12000       |\n        -------------------------------------------------------------------------\n4 ---\n        -------------------------------------------------------------------------\n        | NAME:                         execution-discovery-30303               |\n        | PROTOCOL:                     UDP                                     |\n        | PORT TO DEVICE:               30303   THROUGH PORT:       3030        |\n        | PORT REQUESTED EXTERNALLY:    30303                                   |\n        | (IPv4 only)                                                           |\n        -------------------------------------------------------------------------\n        | \u22a0 Enable sharing                                                      |\n        -------------------------------------------------------------------------\n        | IPV4 ADDRESS IN THE INTERNET: <internet-ip-address>                   |\n        | PORT ASSIGNED EXTERNALLY:     30303   THROUGH PORT:       3030        |\n        -------------------------------------------------------------------------\n")),(0,o.kt)("h3",{id:"676-apply-and-save"},"6.7.6 Apply and Save"),(0,o.kt)("p",null,"Once you've filled out all fields, save the new rule. You will be asked to apply changes, which might take a few seconds until it takes effect."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Some routers may require a reboot to apply the changes.")),(0,o.kt)("p",null,"After the rules are applied, check back to your port sharing screen of the router. You should find a list with the newly added rules to verify your previous step. On my end, the list looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"PORT SHARING DEVICE SCREEN\n\n---------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n| DEVICE / NAME      | IP ADDRESS          | SHARING                           | PORT ASSIGNED EXTERNALLY IPV4 | PORT ASSIGNED EXTERNALLY IPC6 | INDIPENDENT PORT SHARING |\n|--------------------|---------------------|-----------------------------------|-------------------------------|-------------------------------|--------------------------|\n| <node-device-name> | <node-ip-address>   | active: execution-data-30303      | 30303                         |                               | \u25a1                        |\n|                    | <ipv6-interface-id> | active: beacon-sync-13000         | 13000                         |                               | 0 enabled                |\n|                    |                     | active: beacon-data-12000         | 12000                         |                               |                          |\n|                    |                     | active: execution-discovery-30303 | 30303                         |                               |                          |\n---------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\nPORT SHARING RULES SCREEN\n\n---------------------------------------------------------------------------------------------------------\n| STATUS | NAME                      | PROTOCOL | IP ADDRESS IN THE INTERNET | PORT ASSIGNED EXTERNALLY |\n|--------|---------------------------|----------|----------------------------|--------------------------|\n| active | execution-data-30303      | TCP      | <internet-ip-address>      | 30303                    |\n| active | beacon-sync-13000         | TCP      | <internet-ip-address>      | 13000                    |\n| active | beacon-data-12000         | UDP      | <internet-ip-address>      | 12000                    |\n| active | execution-discovery-30303 | UDP      | <internet-ip-address>      | 30303                    |\n---------------------------------------------------------------------------------------------------------\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After we have opened all required ports, we can set up and sync the blockchain clients.")))}u.isMDXComponent=!0}}]);