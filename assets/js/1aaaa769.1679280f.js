"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"WireGuard Tunnel",sidebar_position:3},s="WireGuard Tunnel via PiVPN",i={unversionedId:"community-guides/vpn-setup",id:"community-guides/vpn-setup",title:"WireGuard Tunnel",description:"Guide by Johnny EBD",source:"@site/docs/community-guides/vpn-setup.md",sourceDirName:"community-guides",slug:"/community-guides/vpn-setup",permalink:"/docs/community-guides/vpn-setup",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/community-guides/vpn-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"WireGuard Tunnel",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"System & Monitoring",permalink:"/docs/community-guides/system-monitoring-setup"},next:{title:"OpenSSH Server",permalink:"/docs/community-guides/openssh-setup"}},l={},u=[{value:"<strong>Part 1 - Update your OS</strong>",id:"part-1---update-your-os",level:3},{value:"<strong>Part 2 \u2013 Install PiVPN</strong>",id:"part-2--install-pivpn",level:3},{value:"<strong>Part 3 \u2013 Creating your first WireGuard Profile on your Host</strong>",id:"part-3--creating-your-first-wireguard-profile-on-your-host",level:3},{value:"<strong>Part 4 \u2013 Generating a QR Code for your WireGuard Profile</strong>",id:"part-4--generating-a-qr-code-for-your-wireguard-profile",level:3},{value:"<strong>Part 5 \u2013 Last few important steps</strong>",id:"part-5--last-few-important-steps",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wireguard-tunnel-via-pivpn"},"WireGuard Tunnel via PiVPN"),(0,o.kt)("p",null,"Guide by ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/moonmclaren"},"Johnny EBD"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/w4MEqOr.png",alt:null})),(0,o.kt)("p",null,"This tutorial will show you how to install your own personal VPN into your network using PiVPN as a wrapper for WireGuard. Why would you want to do this?"),(0,o.kt)("p",null,"There are a couple of advantages to using the WireGuard VPN on your server over OpenVPN."),(0,o.kt)("p",null,"WireGuard is much faster at making connections than OpenVPN, it can complete a connection within a tenth of a second."),(0,o.kt)("p",null,"The codebase for WireGuard is also drastically smaller then OpenVPN\u2019s. This allows the software to be more secure thanks to the smaller attack surface and bugs being able to be dealt with easier."),(0,o.kt)("p",null,"None of this would be possible of course without the PiVPN project which you can find at ",(0,o.kt)("a",{parentName:"p",href:"https://pivpn.io"},"https://pivpn.io"),". This project is maintained to be a simple and easy solution for getting OpenVPN or WireGuard VPN services running on a Linux based host."),(0,o.kt)("h3",{id:"part-1---update-your-os"},(0,o.kt)("strong",{parentName:"h3"},"Part 1 - Update your OS")),(0,o.kt)("p",null,"First things first, let\u2019s get everything updated. Run this command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"sudo apt update && sudo apt upgrade -y"))),(0,o.kt)("p",null,"This will take a few minutes to complete."),(0,o.kt)("h3",{id:"part-2--install-pivpn"},(0,o.kt)("strong",{parentName:"h3"},"Part 2 \u2013 Install PiVPN")),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"curl -L https://install.pivpn.io | bash"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/htMUznt.png",alt:null})),(0,o.kt)("p",null,"This will start the PiVPN installation wizard (you will get an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"OS not tested yet"))," prompt, just ignore it)."),(0,o.kt)("p",null,"First step is to set a static IP on your PiVPN server. Click ",(0,o.kt)("strong",{parentName:"p"},"OK"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/9O19kDb.png",alt:null})),(0,o.kt)("p",null,"Setting a static IP address basically means that we want PiVPN to run on an IP address that will never change. This is because we will be setting up a firewall rule that allows traffic to flow through to the PiVPN."),(0,o.kt)("p",null,"You can achieve an IP address that never changes by manually setting an IP address that is outside of your DHCP lease pool range, or by telling DHCP that the IP address assigned to your PiVPN server should never change (this is called a DHCP reservation)."),(0,o.kt)("p",null,"For this tutorial, we will set a static IP address, so we will choose ",(0,o.kt)("strong",{parentName:"p"},"No")," on this next screen."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/1Q0Bleg.png",alt:null})),(0,o.kt)("p",null,"To set a static IP address for the WireGuard software the installation script will want to use your default settings."),(0,o.kt)("p",null,"If the default IP address and gateway are correct to you, then you can safely select the ",(0,o.kt)("strong",{parentName:"p"},"Yes")," option by pressing the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/lNIzvaj.png",alt:null})),(0,o.kt)("p",null,"The script might detect that we aren't running it's intended OS and will display this next message. Nothing to see here, you can just safely keep going."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZRzXftS.png",alt:null})),(0,o.kt)("p",null,"You will be warned that you can potentially run into IP conflicts when using this method."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/aKrzXqQ.png",alt:null})),(0,o.kt)("p",null,"The way around that is to use DHCP reservation. However, most routers should be smart enough to stop this from being a problem.\nPress the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key to continue."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/szR8ZLC.png",alt:null})),(0,o.kt)("p",null,"This screen will tell you that you need to specify a local user to store the WireGuard configuration files.\nContinue to the next screen by pressing the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/uTqkgV3.png",alt:null})),(0,o.kt)("p",null,"You can now select from a list of available users.\nUse the ",(0,o.kt)("strong",{parentName:"p"},"ARROW")," keys to highlight the user then the ",(0,o.kt)("strong",{parentName:"p"},"SPACEBAR")," to select it.\nOnce you are happy with the user you have selected, press the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/RejGpCM.png",alt:null})),(0,o.kt)("p",null,"Finally, we can select the VPN software and as we want to install WireGuard to our Host, you can press the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key to continue. By default the PiVPN script selects WireGuard, which is also the most adjusted to our use case."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/f1H7kgr.png",alt:null})),(0,o.kt)("p",null,"This screen will allow you to change the port that WireGuard uses on your Host.\nIt is recommended to keep it the same unless you have a particular reason to change the port.\nPress the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key to confirm the specified port."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/uF8O7MS.png",alt:null})),(0,o.kt)("p",null,"This screen just confirms the port that you set your WireGuard VPN Host to use.\nPlease note that to be able to access your WireGuard VPN from outside of your home network, you will need to IPv4 forward the port mentioned here in your router and the port type is ",(0,o.kt)("strong",{parentName:"p"},"UDP"),". Don't worry about the UFW rules as these will be written by the script for you.\nConfirm that the port is still correct, then press the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key to proceed."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/JALBi4N.png",alt:null})),(0,o.kt)("p",null,"We can now specify the DNS provider that we want to use for our VPN clients.\nFor our tutorial, we chose to use the ",(0,o.kt)("strong",{parentName:"p"},"Cloudflare")," one as it is relatively speedy, and they purge their logs every 24 hours.\nUse the ",(0,o.kt)("strong",{parentName:"p"},"ARROW")," keys to navigate through this menu. Once you have found the DNS provider you want to use, press the ",(0,o.kt)("strong",{parentName:"p"},"SPACEBAR")," key.\nIf you are happy with your selection, press the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key to confirm it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/erWeZnL.png",alt:null})),(0,o.kt)("p",null,"You can specify two different ways you want to access your WireGuard VPN.\nUsing your public IP address is the easiest option. However, this should only be used if you have a static IP address. The other option is to use a domain name.\nFor this guide, we will be sticking with using our public IP address.\nOnce you have the option you want selected, press the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key to proceed."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/EUSr4kh.png",alt:null})),(0,o.kt)("p",null,"The PiVPN script will now generate the server keys that WireGuard requires.\nAll you need to do here is press the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key again."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/96iIqJU.png",alt:null})),(0,o.kt)("p",null,"This screen will give you a quick rundown about unattended-upgrades and why you should enable them.\nGo to the next step by pressing the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/QjVOVjl.png",alt:null})),(0,o.kt)("p",null,"You can now enable the unattended-upgrades by selecting the ",(0,o.kt)("strong",{parentName:"p"},"Yes")," option.\nWe highly recommend that you enable these to ensure your Host will download security fixes regulary.\nNot enabling this will potentially leave your WireGuard VPN vulnerable to attacks.\nOnce you have the option you want selected, press the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key to confirm it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/eQcgX1e.png",alt:null})),(0,o.kt)("p",null,"You have now successfully installed the WireGuard VPN software to your Host.\nThis screen will let you know that you still need to create profiles for the users, which we will cover in the next section.\nPress the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key to continue to the last few steps."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Lst2zXs.png",alt:null})),(0,o.kt)("p",null,"You will be asked whether you want to restart your Host before continuing.\nWe recommend that you choose the ",(0,o.kt)("strong",{parentName:"p"},"Yes")," option.\nOnce you have selected to reboot, press the ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," key twice to restart."),(0,o.kt)("h3",{id:"part-3--creating-your-first-wireguard-profile-on-your-host"},(0,o.kt)("strong",{parentName:"h3"},"Part 3 \u2013 Creating your first WireGuard Profile on your Host")),(0,o.kt)("p",null,"Now that we have successfully installed the WireGuard software to our Host, we can create a profile for it."),(0,o.kt)("p",null,"To be able to create this profile, we will be making use of the PiVPN script again by running the following command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"sudo pivpn add"))),(0,o.kt)("p",null,"All you need to do is type in a name for the profile that you are creating. We chose our Host's name just to keep it simple and easy to understand."),(0,o.kt)("p",null,"Once you have created a profile, it will be stored within the directory specified in the output."),(0,o.kt)("p",null,"If you followed the previous steps and used your ",(0,o.kt)("strong",{parentName:"p"},"Host")," username, you will be able to find the config file within the ",(0,o.kt)("strong",{parentName:"p"},"/home/Host/configs")," directory."),(0,o.kt)("p",null,"You can use the config file within here to set up your WireGuard clients. However, there is another method which we will go into in the next section."),(0,o.kt)("h3",{id:"part-4--generating-a-qr-code-for-your-wireguard-profile"},(0,o.kt)("strong",{parentName:"h3"},"Part 4 \u2013 Generating a QR Code for your WireGuard Profile")),(0,o.kt)("p",null,"In this section, we will show you how to generate a QR code for the WireGuard profile we generated on our Host."),(0,o.kt)("p",null,"You will be able to scan this QR code using your device. This saves you from having to copy the config file from your device."),(0,o.kt)("p",null,"Luckily for us, the PiVPN software comes with a QR code generator that we can use."),(0,o.kt)("p",null,"To generate a QR code for your profile, you will need to start by running the following command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"pivpn -qr PROFILENAME"))),(0,o.kt)("p",null,"Make sure you replace ",(0,o.kt)("strong",{parentName:"p"},"PROFILENAME")," with the name you set in the previous section. In our case, this will be ",(0,o.kt)("strong",{parentName:"p"},"Host"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/0CTCkQp.png",alt:null})),(0,o.kt)("p",null,"You can then scan the generated QR code using your iOS or Android devices by adding a tunnel and create from QR code."),(0,o.kt)("p",null,"You can find the WireGuard app on both the Google Play Store and the Apple App Store."),(0,o.kt)("p",null,"When scanning the QR code, you will be asked to enter a name for the profile."),(0,o.kt)("h3",{id:"part-5--last-few-important-steps"},(0,o.kt)("strong",{parentName:"h3"},"Part 5 \u2013 Last few important steps")),(0,o.kt)("p",null,"At this point, you should now have a WireGuard VPN successfully running on your Host while being able to SSH into it remotely from virtually anywhere in the world."),(0,o.kt)("p",null,"It is recommended to use Termius as it can store the SSH generated keys safely along with your biometric scans in the same encrypted chip, even in its free to use format."),(0,o.kt)("p",null,"Last few steps will be to run the debugging wizard, which will fix any settings issues, with:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"pivpn -d"))),(0,o.kt)("p",null,"You can also check your UFW and WireGuard status with:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"sudo systemctl status wg-quick@wg0.service"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"sudo ufw status verbose"))),(0,o.kt)("p",null,"... just to make sure everything is working properly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If so you should delete/disable your router's IPv4 SSH open/forwarding rule as you no longer need it and leaving it open just exposes your system to a security risk.")),(0,o.kt)("p",null,"Well\u2026 Not quite done yet. Because you wouldn\u2019t want to skip backups right? ",(0,o.kt)("strong",{parentName:"p"},"RIGHT?!?")," Run this command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"pivpn -bk"))),(0,o.kt)("p",null,"This will create a backup TGZ file that contains your PiVPN configs and user profiles. The backup file is created in ",(0,o.kt)("strong",{parentName:"p"},"/home/Host/pivpnbackup"),".\nDownload that file with WinSCP and save it in a secure location \u2013 you\u2019ll also want to be sure to make a new backup anytime you make significant changes to your PiVPN configuration."),(0,o.kt)("p",null,"If for some reason you need to revert this whole process, the PiVPN script has got you covered once more with the following uninstall command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"pivpn -u"))),(0,o.kt)("p",null,"That's it, hope you enjoyed yet another Luksoverse tutorial."))}c.isMDXComponent=!0}}]);