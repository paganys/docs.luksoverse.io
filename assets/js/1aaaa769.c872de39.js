"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[1381],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return n?o.createElement(m,i(i({ref:e},u),{},{components:n})):o.createElement(m,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1179:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={title:"WireGuard Tunnel",sidebar_position:3},i="WireGuard tunnel via PiVPN",s={unversionedId:"community-guides/vpn-setup",id:"community-guides/vpn-setup",title:"WireGuard Tunnel",description:"Guide by: Johnny EBD",source:"@site/docs/community-guides/vpn-setup.md",sourceDirName:"community-guides",slug:"/community-guides/vpn-setup",permalink:"/docs/community-guides/vpn-setup",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/community-guides/vpn-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"WireGuard Tunnel",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"System & Monitoring",permalink:"/docs/community-guides/system-monitoring-setup"},next:{title:"OpenSSH Server",permalink:"/docs/community-guides/openssh-setup"}},l={},p=[{value:"<strong>Part 1 - Update your OS</strong>",id:"part-1---update-your-os",level:3},{value:"<strong>Part 2 \u2013 Install PiVPN</strong>",id:"part-2--install-pivpn",level:3},{value:"<strong>Part 3 \u2013 Creating your first WireGuard Profile on your Host</strong>",id:"part-3--creating-your-first-wireguard-profile-on-your-host",level:3},{value:"<strong>Part 4 \u2013 Generating a QR Code for your WireGuard Profile</strong>",id:"part-4--generating-a-qr-code-for-your-wireguard-profile",level:3},{value:"<strong>Part 5 \u2013 Last few important steps</strong>",id:"part-5--last-few-important-steps",level:3},{value:"<strong>Set Static IP Address using nmcli command on Ubuntu 22.04</strong>",id:"set-static-ip-address-using-nmcli-command-on-ubuntu-2204",level:2},{value:"Step 1: Check device name",id:"step-1-check-device-name",level:4},{value:"Step 2: Create a Static connection",id:"step-2-create-a-static-connection",level:4},{value:"Step 3: Add DNS IP to static-ip",id:"step-3-add-dns-ip-to-static-ip",level:4},{value:"Step 4: Activate the Static connection",id:"step-4-activate-the-static-connection",level:4},{value:"Step 5: Verify the IP assignment to the selected device",id:"step-5-verify-the-ip-assignment-to-the-selected-device",level:4}],u={toc:p};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wireguard-tunnel-via-pivpn"},"WireGuard tunnel via PiVPN"),(0,r.kt)("p",null,"Guide by: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JohnnyEBD-LYX"},"Johnny EBD")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/w4MEqOr.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Disclaimer")),"\nThis article is for informational purposes only and does not constitute professional advice. The author does not guarantee accuracy of the information in this article and the author is not responsible for any damages or losses incurred by following this article.")),(0,r.kt)("p",null,"This tutorial will show you how to install your own personal VPN into your network using PiVPN as a wrapper for WireGuard. Why would you want to do this?"),(0,r.kt)("p",null,"There are a couple of advantages to using the WireGuard VPN on your server over OpenVPN."),(0,r.kt)("p",null,"WireGuard is much faster at making connections than OpenVPN, it can complete a connection within a tenth of a second."),(0,r.kt)("p",null,"The codebase for WireGuard is also drastically smaller then OpenVPN\u2019s. This allows the software to be more secure thanks to the smaller attack surface and bugs being able to be dealt with easier."),(0,r.kt)("p",null,"None of this would be possible of course without the PiVPN project which you can find at ",(0,r.kt)("a",{parentName:"p",href:"https://pivpn.io."},"https://pivpn.io.")," This project is maintained to be a simple and easy solution for getting OpenVPN or WireGuard VPN services running on a Linux based host."),(0,r.kt)("h3",{id:"part-1---update-your-os"},(0,r.kt)("strong",{parentName:"h3"},"Part 1 - Update your OS")),(0,r.kt)("p",null,"First things first, let\u2019s get everything updated. Run this command:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo apt update && sudo apt upgrade -y"))),(0,r.kt)("p",null,"This will take a few minutes to complete."),(0,r.kt)("h3",{id:"part-2--install-pivpn"},(0,r.kt)("strong",{parentName:"h3"},"Part 2 \u2013 Install PiVPN")),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"curl -L https://install.pivpn.io | bash"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/htMUznt.png",alt:null})),(0,r.kt)("p",null,"This will start the PiVPN installation wizard (you will get an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"OS not tested yet"))," prompt, just ignore it)."),(0,r.kt)("p",null,"First step is to set a static IP on your PiVPN server. Click ",(0,r.kt)("strong",{parentName:"p"},"OK"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/9O19kDb.png",alt:null})),(0,r.kt)("p",null,"Setting a static IP address basically means that we want PiVPN to run on an IP address that will never change. This is because we will be setting up a firewall rule that allows traffic to flow through to the PiVPN."),(0,r.kt)("p",null,"You can achieve an IP address that never changes by manually setting an IP address that is outside of your DHCP lease pool range, or by telling DHCP that the IP address assigned to your PiVPN server should never change (this is called a DHCP reservation)."),(0,r.kt)("p",null,"For this tutorial, we will set a static IP address, so we will choose ",(0,r.kt)("strong",{parentName:"p"},"No")," on this next screen."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1Q0Bleg.png",alt:null})),(0,r.kt)("p",null,"To set a static IP address for the WireGuard software the installation script will want to use your default settings."),(0,r.kt)("p",null,"If the default IP address and gateway are correct to you, then you can safely select the ",(0,r.kt)("strong",{parentName:"p"},"Yes")," option by pressing the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/lNIzvaj.png",alt:null})),(0,r.kt)("p",null,"The script might detect that we aren't running it's intended OS and will display this next message. You can just safely keep going and at the end of the tutorial this issue will be addressed by setting it up manually through the nmcli command."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZRzXftS.png",alt:null})),(0,r.kt)("p",null,"You will be warned that you can potentially run into IP conflicts when using this method."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/aKrzXqQ.png",alt:null})),(0,r.kt)("p",null,"The way around that is to use DHCP reservation. However, most routers should be smart enough to stop this from being a problem.\nPress the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key to continue."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/szR8ZLC.png",alt:null})),(0,r.kt)("p",null,"This screen will tell you that you need to specify a local user to store the WireGuard configuration files.\nContinue to the next screen by pressing the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/uTqkgV3.png",alt:null})),(0,r.kt)("p",null,"You can now select from a list of available users.\nUse the ",(0,r.kt)("strong",{parentName:"p"},"ARROW")," keys to highlight the user then the ",(0,r.kt)("strong",{parentName:"p"},"SPACEBAR")," to select it.\nOnce you are happy with the user you have selected, press the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/RejGpCM.png",alt:null})),(0,r.kt)("p",null,"Finally, we can select the VPN software and as we want to install WireGuard to our Host, you can press the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key to continue. By default the PiVPN script selects WireGuard, which is also the most adjusted to our use case."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/f1H7kgr.png",alt:null})),(0,r.kt)("p",null,"This screen will allow you to change the port that WireGuard uses on your Host.\nIt is recommended to keep it the same unless you have a particular reason to change the port.\nPress the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key to confirm the specified port."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/uF8O7MS.png",alt:null})),(0,r.kt)("p",null,"This screen just confirms the port that you set your WireGuard VPN Host to use.\nPlease note that to be able to access your WireGuard VPN from outside of your home network, you will need to IPv4 forward the port mentioned here in your router and the port type is ",(0,r.kt)("strong",{parentName:"p"},"UDP"),". Don't worry about the UFW rules as these will be written by the script for you.\nConfirm that the port is still correct, then press the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key to proceed."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/JALBi4N.png",alt:null})),(0,r.kt)("p",null,"We can now specify the DNS provider that we want to use for our VPN clients.\nFor our tutorial, we chose to use the ",(0,r.kt)("strong",{parentName:"p"},"Cloudflare")," one as it is relatively speedy, and they purge their logs every 24 hours.\nUse the ",(0,r.kt)("strong",{parentName:"p"},"ARROW")," keys to navigate through this menu. Once you have found the DNS provider you want to use, press the ",(0,r.kt)("strong",{parentName:"p"},"SPACEBAR")," key.\nIf you are happy with your selection, press the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key to confirm it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/erWeZnL.png",alt:null})),(0,r.kt)("p",null,"You can specify two different ways you want to access your WireGuard VPN.\nUsing your public IP address is the easiest option. However, this should only be used if you have a static IP address. The other option is to use a domain name.\nFor this guide, we will be sticking with using our public IP address.\nOnce you have the option you want selected, press the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key to proceed."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/EUSr4kh.png",alt:null})),(0,r.kt)("p",null,"The PiVPN script will now generate the server keys that WireGuard requires.\nAll you need to do here is press the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key again."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/96iIqJU.png",alt:null})),(0,r.kt)("p",null,"This screen will give you a quick rundown about unattended-upgrades and why you should enable them.\nGo to the next step by pressing the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/QjVOVjl.png",alt:null})),(0,r.kt)("p",null,"You can now enable the unattended-upgrades by selecting the ",(0,r.kt)("strong",{parentName:"p"},"Yes")," option.\nWe highly recommend that you enable these to ensure your Host will download security fixes regulary.\nNot enabling this will potentially leave your WireGuard VPN vulnerable to attacks.\nOnce you have the option you want selected, press the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key to confirm it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/eQcgX1e.png",alt:null})),(0,r.kt)("p",null,"You have now successfully installed the WireGuard VPN software to your Host.\nThis screen will let you know that you still need to create profiles for the users, which we will cover in the next section.\nPress the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key to continue to the last few steps."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Lst2zXs.png",alt:null})),(0,r.kt)("p",null,"You will be asked whether you want to restart your Host before continuing.\nWe recommend that you choose the ",(0,r.kt)("strong",{parentName:"p"},"Yes")," option.\nOnce you have selected to reboot, press the ",(0,r.kt)("strong",{parentName:"p"},"ENTER")," key twice to restart."),(0,r.kt)("h3",{id:"part-3--creating-your-first-wireguard-profile-on-your-host"},(0,r.kt)("strong",{parentName:"h3"},"Part 3 \u2013 Creating your first WireGuard Profile on your Host")),(0,r.kt)("p",null,"Now that we have successfully installed the WireGuard software to our Host, we can create a profile for it."),(0,r.kt)("p",null,"To be able to create this profile, we will be making use of the PiVPN script again by running the following command:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo pivpn add"))),(0,r.kt)("p",null,"All you need to do is type in a name for the profile that you are creating. We chose our Host's name just to keep it simple and easy to understand."),(0,r.kt)("p",null,"Once you have created a profile, it will be stored within the directory specified in the output."),(0,r.kt)("p",null,"If you followed the previous steps and used your ",(0,r.kt)("strong",{parentName:"p"},"Host")," username, you will be able to find the config file within the ",(0,r.kt)("strong",{parentName:"p"},"/home/Host/configs")," directory."),(0,r.kt)("p",null,"You can use the config file within here to set up your WireGuard clients. However, there is another method which we will go into in the next section."),(0,r.kt)("h3",{id:"part-4--generating-a-qr-code-for-your-wireguard-profile"},(0,r.kt)("strong",{parentName:"h3"},"Part 4 \u2013 Generating a QR Code for your WireGuard Profile")),(0,r.kt)("p",null,"In this section, we will show you how to generate a QR code for the WireGuard profile we generated on our Host."),(0,r.kt)("p",null,"You will be able to scan this QR code using your device. This saves you from having to copy the config file from your device."),(0,r.kt)("p",null,"Luckily for us, the PiVPN software comes with a QR code generator that we can use."),(0,r.kt)("p",null,"To generate a QR code for your profile, you will need to start by running the following command:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pivpn -qr PROFILENAME"))),(0,r.kt)("p",null,"Make sure you replace ",(0,r.kt)("strong",{parentName:"p"},"PROFILENAME")," with the name you set in the previous section. In our case, this will be ",(0,r.kt)("strong",{parentName:"p"},"Host"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/0CTCkQp.png",alt:null})),(0,r.kt)("p",null,"You can then scan the generated QR code using your iOS or Android devices by adding a tunnel and create from QR code."),(0,r.kt)("p",null,"You can find the WireGuard app on both the Google Play Store and the Apple App Store."),(0,r.kt)("p",null,"When scanning the QR code, you will be asked to enter a name for the profile."),(0,r.kt)("h3",{id:"part-5--last-few-important-steps"},(0,r.kt)("strong",{parentName:"h3"},"Part 5 \u2013 Last few important steps")),(0,r.kt)("p",null,"At this point, you should now have a WireGuard VPN successfully running on your Host while being able to SSH into it remotely from virtually anywhere in the world."),(0,r.kt)("p",null,"It is recommended to use Termius as it can store the SSH generated keys safely along with your biometric scans in the same encrypted chip, even in its free to use format."),(0,r.kt)("p",null,"Last few steps will be to run the debugging wizard, which will fix any settings issues, with:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pivpn -d"))),(0,r.kt)("p",null,"You can also check your UFW and WireGuard status with:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo systemctl status wg-quick@wg0.service"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo ufw status verbose"))),(0,r.kt)("p",null,"... just to make sure everything is working properly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If so you should delete/disable your router's IPv4 SSH open/forwarding rule as you no longer need it and leaving it open just exposes your system to a security risk.")),(0,r.kt)("p",null,"Well\u2026 Not quite done yet. Because you wouldn\u2019t want to skip backups right? ",(0,r.kt)("strong",{parentName:"p"},"RIGHT?!?")," Run this command:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pivpn -bk"))),(0,r.kt)("p",null,"This will create a backup TGZ file that contains your PiVPN configs and user profiles. The backup file is created in ",(0,r.kt)("strong",{parentName:"p"},"/home/Host/pivpnbackup"),".\nDownload that file with WinSCP and save it in a secure location \u2013 you\u2019ll also want to be sure to make a new backup anytime you make significant changes to your PiVPN configuration."),(0,r.kt)("p",null,"If for some reason you need to revert this whole process, the PiVPN script has got you covered once more with the following uninstall command:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pivpn -u"))),(0,r.kt)("h2",{id:"set-static-ip-address-using-nmcli-command-on-ubuntu-2204"},(0,r.kt)("strong",{parentName:"h2"},"Set Static IP Address using nmcli command on Ubuntu 22.04")),(0,r.kt)("p",null,"In the terminal, you can utilize the \u201cnmcli\u201d command to set up a Static IP Address on Ubuntu 22.04. The \u201cnmcli\u201d command enables Linux users to control the \u201cNetworkManager\u201d. It can be also used for printing the status of network device status, creating, modifying, deleting, activating, or deactivating network connections."),(0,r.kt)("p",null,"For setting up a Static IP Address using the \u201cnmcli\u201d command, follow the below-given step-by-step procedure."),(0,r.kt)("h4",{id:"step-1-check-device-name"},"Step 1: Check device name"),(0,r.kt)("p",null,"Firstly, press \u201cCTRL+ALT+T\u201d to open up the terminal and then run the following \u201cnmcli\u201d command to check the device name:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"nmcli connection show"))),(0,r.kt)("p",null,"The given output shows that our device name is \u201cenp0s3\u201d:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/V3bFz0S.png",alt:null})),(0,r.kt)("h4",{id:"step-2-create-a-static-connection"},"Step 2: Create a Static connection"),(0,r.kt)("p",null,"In the next step, we will create a new static connection named \u201cstatic ip\u201d for the \u201cenp0s3\u201d device:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo nmcli con add type ethernet con-name 'static-ip' ifname enp0s3 ipv4.method manual ipv4.addresses 192.168.1.102/24 gw4 192.168.1.1"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/2tTPTch.png",alt:null})),(0,r.kt)("h4",{id:"step-3-add-dns-ip-to-static-ip"},"Step 3: Add DNS IP to static-ip"),(0,r.kt)("p",null,"Then, execute the below-given command for adding the DNS IP to the \u201cstatic-ip\u201d connection:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo nmcli con mod static-ip ipv4.dns 192.168.1.1"))),(0,r.kt)("h4",{id:"step-4-activate-the-static-connection"},"Step 4: Activate the Static connection"),(0,r.kt)("p",null,"Make sure that the created \u201cstatic-ip\u201d connection is active and working on your Ubuntu 22.04:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"sudo nmcli con up id 'static-ip'"))),(0,r.kt)("p",null,"The below-given output indicates that our \u201cstatic-ip\u201d connection is successfully activated:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/qEo7Dwf.png",alt:null})),(0,r.kt)("h4",{id:"step-5-verify-the-ip-assignment-to-the-selected-device"},"Step 5: Verify the IP assignment to the selected device"),(0,r.kt)("p",null,"Now, execute the \u201cip\u201d command with the \u201ca\u201d option to validate the IP assigned to the \u201cenp0s3\u201d device:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ip a"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/3tuBto4.png",alt:null})),(0,r.kt)("p",null,"Lastly, verify the internet connectivity with the help of the following \u201cping\u201d command:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ping google.com"))),(0,r.kt)("p",null,"As you can see, the given output validates that the configured \u201cstatic-ip\u201d connection is working perfectly:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZYvx2N8.png",alt:null})),(0,r.kt)("p",null,"That's it, hope you enjoyed yet another Luksoverse tutorial."))}c.isMDXComponent=!0}}]);