"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={title:"SSH Security",sidebar_position:5},r="SSH Security",l={unversionedId:"community-guides/ssh-security",id:"community-guides/ssh-security",title:"SSH Security",description:"Guide by Johnny EBD",source:"@site/docs/community-guides/ssh-security.md",sourceDirName:"community-guides",slug:"/community-guides/ssh-security",permalink:"/docs/community-guides/ssh-security",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/community-guides/ssh-security.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"SSH Security",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"OpenSSH Server",permalink:"/docs/community-guides/openssh-setup"},next:{title:"Node Troubleshoot",permalink:"/docs/community-guides/node-troubleshoot"}},s={},u=[{value:"2FA with Google Authenticator",id:"2fa-with-google-authenticator",level:2},{value:"Install and Configure Google Authenticator",id:"install-and-configure-google-authenticator",level:3},{value:"Configure SSH Daemon to Use Google Authenticator",id:"configure-ssh-daemon-to-use-google-authenticator",level:3},{value:"Password Authentication with 2FA",id:"password-authentication-with-2fa",level:4},{value:"Public Key Authentication with 2FA",id:"public-key-authentication-with-2fa",level:4},{value:"Block Unauthorised Access \ud83d\udee1\ufe0f",id:"block-unauthorised-access-\ufe0f",level:2},{value:"Fail2Ban",id:"fail2ban",level:3},{value:"How to unban an IP address",id:"how-to-unban-an-ip-address",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh-security"},"SSH Security"),(0,a.kt)("p",null,"Guide by ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/moonmclaren"},"Johnny EBD")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/xMIlKZo.jpg",alt:null})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Disclaimer")),"\nThis article is for informational purposes only and does not constitute professional advice. The author does not guarantee accuracy of the information in this article and the author is not responsible for any damages or losses incurred by following this article.")),(0,a.kt)("p",null,"This tutorial will show you how to set up an SSH two-factor authentication on your Ubuntu server using the well-known Google Authenticator, so you can continue to use your password and keys without worrying if they've been compromised or not."),(0,a.kt)("p",null,"You will also be shown how to stop malicious logins like brute-force attacks if, for some reason, your SSH port becomes exposed to the outside world, by banning IP addresses with the Fail2Ban service in place."),(0,a.kt)("h2",{id:"2fa-with-google-authenticator"},"2FA with Google Authenticator"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/99K7VRO.jpg",alt:null})),(0,a.kt)("p",null,"Two-factor authentication (2FA) requires two pieces of information in order to login. So you will also need to enter a time-based one-time password to log in to your SSH server. This one-time password is computed using the TOTP algorithm, which is an IETF standard, and it can help secure both password and keys access."),(0,a.kt)("h3",{id:"install-and-configure-google-authenticator"},"Install and Configure Google Authenticator"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOTE:"))," The open-source server software used in this guide is called libpam-google-authenticator, which is installed from the default Ubuntu repository. Google the company isn't involved in the authentication process in any way, shape or form. Both the server software and the mobile app don\u2019t need network access.")),(0,a.kt)("p",null,"Log into your Ubuntu server and run the following command to install Google Authenticator from the default Ubuntu package repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo apt install -y libpam-google-authenticator\n")),(0,a.kt)("p",null,"Then run the google-authenticator command to create a new secret key in your home directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"google-authenticator\n")),(0,a.kt)("p",null,"When asked ",(0,a.kt)("inlineCode",{parentName:"p"},"Do you want authentication tokens to be time-based?")," Answer ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,a.kt)("p",null,"Then you will see a QR code that you can scan using a TOTP app on your phone. There are a few recommended apps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Google Authenticator")," is the most well-known TOTP mobile app. You can install it via Google Play or Apple app store on your mobile phone. Please note that it isn\u2019t open-source."),(0,a.kt)("li",{parentName:"ul"},"If you don\u2019t trust Google, you can either use ",(0,a.kt)("strong",{parentName:"li"},"Authy"),", a popular choice, or ",(0,a.kt)("strong",{parentName:"li"},"FreeOTP"),", an open-source TOTP mobile app developed by Red Hat.")),(0,a.kt)("p",null,"Scan the QR code with your TOTP app on your mobile phone. Note that you need to enlarge the terminal window to scan the full QR code."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/AeUWvCV.png",alt:null})),(0,a.kt)("p",null,"The QR code represents the secret key, which is only known by your SSH server and your TOTP mobile app. Once the QR code is scanned, you can see a six-digit one-time password on your phone. By default, it changes every 30 seconds. You will need to enter this one-time password later in order to log in to Ubuntu server via SSH."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/8ZX8rM4.jpg",alt:null})),(0,a.kt)("p",null,"In the terminal window, you can see the secret key, verification code, and emergency scratch codes. It\u2019s recommended that you save this information in a safe physical place for later use."),(0,a.kt)("p",null,"Then you can enter ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," to answer all of the remaining questions. This will update your Google Authenticator configuration file, disable multiple uses of the same authentication token, increase the time window and enable rate-limiting to protect against brute-force login attempts."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/X4DeDHg.png",alt:null})),(0,a.kt)("h3",{id:"configure-ssh-daemon-to-use-google-authenticator"},"Configure SSH Daemon to Use Google Authenticator"),(0,a.kt)("h4",{id:"password-authentication-with-2fa"},"Password Authentication with 2FA"),(0,a.kt)("p",null,"Access the SSH server configuration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/ssh/sshd_config\n")),(0,a.kt)("p",null,"Find the following two parameters in the file, making sure both of them are set to ",(0,a.kt)("inlineCode",{parentName:"p"},"yes")," and activated by uncommenting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"KbdInteractiveAuthentication yes\n\nUsePAM yes\n")),(0,a.kt)("p",null,"PAM stands for pluggable authentication module. It provides an easy way to plug different authentication method into your Linux system. To enable Google Authenticator with SSH, PAM and Kbd Interactive Authentication must be enabled."),(0,a.kt)("p",null,"Save and close the file. Next, edit the PAM rule file for SSH daemon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/pam.d/sshd\n")),(0,a.kt)("p",null,"At the beginning of this file, you can see the following line, which enables password authentication when KbdInteractiveAuthentication is set to yes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@include common-auth\n")),(0,a.kt)("p",null,"To enable 2FA in SSH, add the following two lines right below it with spaces in between:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# two-factor authentication via Google Authenticator\nauth   required   pam_google_authenticator.so\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/r1rmGNd.png",alt:null})),(0,a.kt)("p",null,"Save and close the file. Then restart SSH daemon for the change to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo systemctl restart ssh\n")),(0,a.kt)("p",null,"From now on SSH daemon will require you to enter user password and a verification code (the one-time password generated by Google Authenticator)."),(0,a.kt)("h4",{id:"public-key-authentication-with-2fa"},"Public Key Authentication with 2FA"),(0,a.kt)("p",null,"If you use SSH keys to log into your SSH server, then follow the instructions below."),(0,a.kt)("p",null,"Open SSH server configuration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/ssh/sshd_config\n")),(0,a.kt)("p",null,"Next, add the following line at the end of this file. This tells SSH daemon that the user must pass both public key authentication and challenge-response authentication."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AuthenticationMethods publickey,keyboard-interactive\n")),(0,a.kt)("p",null,"Save and close the file. Then restart SSH daemon for the change to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo systemctl restart ssh\n")),(0,a.kt)("p",null,"From now on you need to use SSH keys and Google Authenticator verification code to login."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"KEY ASPECTS TO NOTE:"))),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Emergency Scratch Codes are your backup codes. If you lose your phone, you can enter one of five emergency scratch codes instead of a one-time password to complete the two-step verification. These codes are for one-time use only."),(0,a.kt)("li",{parentName:"ul"},"If you want to change the secret key, simply log into your server and run google-authenticator command again to update the ~/.google_authenticator file."),(0,a.kt)("li",{parentName:"ul"},"Since the one-time password is computed using the shared secret key and the current time, it\u2019s a good idea to check if the time synchronization on your Ubuntu server is active with ",(0,a.kt)("inlineCode",{parentName:"li"},"timedatectl")," (if not please run ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo systemctl start systemd-timesyncd.service"),"), although previously we have allowed a time skew of 4 minutes between the Ubuntu server and the mobile app."),(0,a.kt)("li",{parentName:"ul"},"Your Ubuntu server and the TOTP mobile app can use different time zones."))),(0,a.kt)("h2",{id:"block-unauthorised-access-\ufe0f"},"Block Unauthorised Access \ud83d\udee1\ufe0f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/hdprr44.jpg",alt:null})),(0,a.kt)("h3",{id:"fail2ban"},"Fail2Ban"),(0,a.kt)("p",null,"Fail2Ban is a free and open-source software that protects your SSH daemon (SSHD) from malicious logins like brute force attacks. It does this by monitoring server logs and detecting any suspicious activity."),(0,a.kt)("p",null,"The program detects an unreasonable number of failed attempts and automatically adds new entries to iptables that block the given IP. This IP (or host) is then banned/jailed for a specified time or indefinitely."),(0,a.kt)("p",null,"Therefore, installing this log-monitoring software is an excellent way to provide another layer to your server security. Still, it can only be one part of your overall server security plan."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/mWMfZNj.jpg",alt:null})),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"fail2ban")," to block IP addresses that exceed failed SSH login attempts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo apt-get install fail2ban -y\n")),(0,a.kt)("p",null,"Edit a config to monitor ssh logins."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/fail2ban/jail.local\n")),(0,a.kt)("p",null,"Copy below text to file and you can add unbanable IPs in the last line, like your clients, separated by a space between them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[sshd]\nenabled=true\nport=ssh\nfilter=sshd\nlogpath=/var/log/auth.log\nmaxretry=3\nfindtime=300\nbantime=28800\nignoreip=\n")),(0,a.kt)("p",null,"Close editor by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"X"),", then save. Restart ",(0,a.kt)("inlineCode",{parentName:"p"},"fail2ban")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo systemctl restart fail2ban\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZxQjm4K.jpg",alt:null})),(0,a.kt)("h4",{id:"how-to-unban-an-ip-address"},"How to unban an IP address"),(0,a.kt)("p",null,"After testing, you might want to unban the IP address you used. Make sure you have a banned IP with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo fail2ban-client status sshd\n")),(0,a.kt)("p",null,"You should see something like the following listed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Status for the jail: sshd\n\n|- Filter\n|  |- Currently failed:    0\n|  |- Total failed:    3\n|  `- File list:    /var/log/auth.log\n`- Actions\n|- Currently banned:    1\n|- Total banned:    1\n`- Banned IP list:    192.168.1.40\n")),(0,a.kt)("p",null,"To unban IP address 192.168.1.40, you\u2019d issue the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo fail2ban-client set sshd unbanip 192.168.1.40\n")),(0,a.kt)("p",null,"You should see the number ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," printed out because that\u2019s how many IP addresses you just unbanned."),(0,a.kt)("p",null,"You can also manually ban an IP with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell="},"sudo fail2ban-client set sshd banip 192.168.1.40\n")),(0,a.kt)("p",null,"That's it, your machine should be pretty resilient to hacking by now, even if passwords and keys get compromised."))}p.isMDXComponent=!0}}]);