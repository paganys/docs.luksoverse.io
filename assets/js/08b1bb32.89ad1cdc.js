"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,A=function(e,t){if(null==e)return{};var n,a,A={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}var r=a.createContext({}),s=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,A=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=A,p=d["".concat(r,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function m(e,t){var n=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:A,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),A=n(6010),o=n(5281),i=n(5999);const l="admonition_LlT9",r="admonitionHeading_tbUL",s="admonitionIcon_kALy",u="admonitionContent_S0QG";const c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){var t;const{mdxAdmonitionTitle:n,rest:A}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),A=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:A}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:A}}function p(e){const{children:t,type:n,title:i,icon:p}=m(e),h=function(e){var t;const n=null!=(t=d[e])?t:e;return c[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),c.info)}(n),g=null!=i?i:h.label,{iconComponent:f}=h,C=null!=p?p:a.createElement(f,null);return a.createElement("div",{className:(0,A.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert","alert--"+h.infimaClassName,l)},a.createElement("div",{className:r},a.createElement("span",{className:s},C),g),a.createElement("div",{className:u},t))}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),A=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,A.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),A=n(7294),o=n(6010),i=n(2389),l=n(7392),r=n(7094),s=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:p,groupId:h,className:g}=e,f=A.Children.map(e.children,(e=>{if((0,A.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),C=null!=p?p:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),E=(0,l.l)(C,((e,t)=>e.value===t.value));if(E.length>0)throw new Error('Docusaurus error: Duplicate values "'+E.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==k&&!C.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+C.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:Q}=(0,r.U)(),[I,v]=(0,A.useState)(k),b=[],{blockElementScrollPositionUntilNextRender:B}=(0,s.o5)();if(null!=h){const e=w[h];null!=e&&e!==I&&C.some((t=>t.value===e))&&v(e)}const y=e=>{const t=e.currentTarget,n=b.indexOf(t),a=C[n].value;a!==I&&(B(t),v(a),null!=h&&Q(h,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=b.indexOf(e.currentTarget)+1;n=null!=(a=b[t])?a:b[0];break}case"ArrowLeft":{var A;const t=b.indexOf(e.currentTarget)-1;n=null!=(A=b[t])?A:b[b.length-1];break}}null==(t=n)||t.focus()};return A.createElement("div",{className:(0,o.Z)("tabs-container",u)},A.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},C.map((e=>{let{value:t,label:n,attributes:i}=e;return A.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>b.push(e),onKeyDown:N,onFocus:y,onClick:y},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,A.cloneElement)(f.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):A.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,A.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function m(e){const t=(0,i.Z)();return A.createElement(d,(0,a.Z)({key:String(t)},e))}},4032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),A=(n(7294),n(3905));n(5488),n(5162),n(3612);const o={title:"Start here",sidebar_position:0},i=void 0,l={unversionedId:"the-guide/start-here",id:"the-guide/start-here",title:"Start here",description:"Before you begin",source:"@site/docs/the-guide/start-here.md",sourceDirName:"the-guide",slug:"/the-guide/start-here",permalink:"/docs/the-guide/start-here",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/the-guide/start-here.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Start here",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Part 1 - Setup Node Machine",permalink:"/docs/the-guide/node-machine"}},r={},s=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Start Now",id:"start-now",level:2},{value:"Codeblocks",id:"codeblocks",level:2},{value:"Terminal commands",id:"terminal-commands",level:3},{value:"Configuration files",id:"configuration-files",level:3},{value:"Example information",id:"example-information",level:3},{value:"User specific information",id:"user-specific-information",level:2},{value:"Guide Order",id:"guide-order",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,A.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,A.kt)("p",null,"Guide by ",(0,A.kt)("a",{parentName:"p",href:"https://github.com/KEEZ-RobG"},"RobG")),(0,A.kt)("p",null,"Running a validator node is a highly technical task and a long term commitment. It's a responsibility to your investment and to the network. The network's ",(0,A.kt)("strong",{parentName:"p"},"security and stability")," depends on properly maintained nodes and validator software running 24/7. You will need to:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Monitor you node continuously"),(0,A.kt)("li",{parentName:"ul"},"Be prepared to update your node whenever new client software is released"),(0,A.kt)("li",{parentName:"ul"},"Be ready to learn")),(0,A.kt)("h2",{id:"start-now"},"Start Now"),(0,A.kt)("p",null,"L16 test net is live. If you are planning to run a validator for mainnet, start practicing ASAP!"),(0,A.kt)("h2",{id:"codeblocks"},"Codeblocks"),(0,A.kt)("p",null,"You will see gray code blocks throughout the guide that allow you to easily copy and paste information."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre"},"example code block\n")),(0,A.kt)("p",null,"Hovering over the top right side of a code block reveals a copy icon, which allows you to copy the information without highlighting the text."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"copy-button",src:n(7421).Z,width:"611",height:"60"})),(0,A.kt)("p",null,"Codeblocks are used for"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"terminal commands"),(0,A.kt)("li",{parentName:"ul"},"configuration files"),(0,A.kt)("li",{parentName:"ul"},"examples")),(0,A.kt)("p",null,"Some codeblocks in this guide will have titles."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Code block title"',title:'"Code',block:!0,'title"':!0},"code block\n")),(0,A.kt)("p",null,"The following are examples of the types of codeblocks you will see in this guide."),(0,A.kt)("h3",{id:"terminal-commands"},"Terminal commands"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"no title"),": all blocks without a title are terminal commands. copy and paste them directly to the terminal prompt."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre"},"nano ~/.ssh/config\n")),(0,A.kt)("h3",{id:"configuration-files"},"Configuration files"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"filename"),": codeblock titles that contain filenames contain information to copy/paste into a file editor."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=~/.ssh/config",title:"~/.ssh/config"},"Host lukso\n  User <node-user>\n  HostName <node-ip>\n  Port <ssh-port>\n")),(0,A.kt)("h3",{id:"example-information"},"Example information"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"Example:")," some codeblocks will contain examples of what a file should look like."),(0,A.kt)("p",null,"This block is for a step that requires modifying a configuration file. It shows you what the file should look like after you make the modification. In this example, we are instructed to find the ",(0,A.kt)("inlineCode",{parentName:"p"},"wifi.powersave")," setting and change the value to ",(0,A.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-sh",metastring:"title=Example",title:"Example"},"[connection]\nwifi.powersave = 2\n")),(0,A.kt)("h2",{id:"user-specific-information"},"User specific information"),(0,A.kt)("p",null,"Username, router and node IP addresses, and SSH port will differ for each user. Commands that require this information will have placeholders that must be replaced with your specific information. "),(0,A.kt)("p",null,"This command needs the username and IP address of a node machine. The title will indicate the variables to replace."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Replace: <node-user>, and <node-ip>"',title:'"Replace:',"<node-user>,":!0,and:!0,'<node-ip>"':!0},"ssh <node-user>@<node-ip>\n")),(0,A.kt)("p",null,"You can copy/paste these commands and edit them in the terminal before pressing ",(0,A.kt)("inlineCode",{parentName:"p"},"enter"),". In this example, the username is ",(0,A.kt)("inlineCode",{parentName:"p"},"node")," and the ip address is ",(0,A.kt)("inlineCode",{parentName:"p"},"192.168.0.150")),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"user-specific",src:n(9297).Z,width:"1005",height:"150"})),(0,A.kt)("p",null,"The table below is a cheat sheet that identifies how to determine these variables and how they appear in the code blocks."),(0,A.kt)("table",null,(0,A.kt)("thead",{parentName:"table"},(0,A.kt)("tr",{parentName:"thead"},(0,A.kt)("th",{parentName:"tr",align:null},"Variable"),(0,A.kt)("th",{parentName:"tr",align:null},"How to determine"),(0,A.kt)("th",{parentName:"tr",align:null},"Name"))),(0,A.kt)("tbody",{parentName:"table"},(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"Node user name"),(0,A.kt)("td",{parentName:"tr",align:null},"chosen during server/desktop install"),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("inlineCode",{parentName:"td"},"<node-user>"))),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"Node IP address"),(0,A.kt)("td",{parentName:"tr",align:null},"execute the command ",(0,A.kt)("inlineCode",{parentName:"td"},"hostname -I")," in terminal"),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("inlineCode",{parentName:"td"},"<node-ip>"))),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"Router IP address"),(0,A.kt)("td",{parentName:"tr",align:null},"execute the command ",(0,A.kt)("inlineCode",{parentName:"td"},"ip route show default")),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("inlineCode",{parentName:"td"},"<router-ip>"))),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"SSH port"),(0,A.kt)("td",{parentName:"tr",align:null},"chosen in ",(0,A.kt)("a",{parentName:"td",href:"node-machine#22---change-ssh-port-number"},"Part 1 - 2.2")),(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("inlineCode",{parentName:"td"},"<ssh-port>"))))),(0,A.kt)("h2",{id:"guide-order"},"Guide Order"),(0,A.kt)("p",null,'When using this guide to setup a node from start to finish, use the "next" button at the bottom of the pages to ensure you complete all steps and in the correct order.'),(0,A.kt)("hr",null),(0,A.kt)("p",null,"References"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://github.com/lykhonis/lukso-node-guide#auto-start"},"Vlad's Guide")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://github.com/metanull-operator/eth2-ubuntu"},"Setup an Eth2 Mainnet Validator System on Ubuntu")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://discord.gg/enuHBXGS"},"ethstaker"))),(0,A.kt)("hr",null))}c.isMDXComponent=!0},7421:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/gif;base64,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"},9297:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/user-specific-e043f4a30ed3abb4f857e8feaae9a507.gif"}}]);