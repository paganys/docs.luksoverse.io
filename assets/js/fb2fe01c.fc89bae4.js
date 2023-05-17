"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[427],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||c;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4130:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const c={},a="Check SSH Install",s={unversionedId:"mainnet/complete-node-guide/access-connection/ssh-check",id:"mainnet/complete-node-guide/access-connection/ssh-check",title:"Check SSH Install",description:"On my side, Im running MacOS and SSH is installed by default in MacOS Ventura on Version 9.0. We can check the version directly by calling the SSH software:",source:"@site/docs/mainnet/complete-node-guide/5-access-connection/01-ssh-check.md",sourceDirName:"mainnet/complete-node-guide/5-access-connection",slug:"/mainnet/complete-node-guide/access-connection/ssh-check",permalink:"/docs/mainnet/complete-node-guide/access-connection/ssh-check",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/5-access-connection/01-ssh-check.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Start here",permalink:"/docs/mainnet/complete-node-guide/access-connection/start-here"},next:{title:"ssh-config",permalink:"/docs/mainnet/complete-node-guide/access-connection/ssh-config"}},i={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-ssh-install"},"Check SSH Install"),(0,o.kt)("p",null,"On my side, Im running MacOS and SSH is installed by default in MacOS Ventura on Version ",(0,o.kt)("inlineCode",{parentName:"p"},"9.0"),". We can check the version directly by calling the SSH software:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": All following steps are performed a personal computer.")),(0,o.kt)("p",null,"Open the terminal to continue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ssh -V\n")),(0,o.kt)("p",null,"The Output should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"OpenSSH_9.0p1, LibreSSL 3.3.6\n")),(0,o.kt)("p",null,"If you are using another operating system or dont have SSH installed, please search on how to install the latest SSH version for your operating system accordingly. Wee need to run the SSH counterpart to establish a secure connection to our node."))}p.isMDXComponent=!0}}]);