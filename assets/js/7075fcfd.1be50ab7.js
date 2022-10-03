"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="Johnny's Node Guide",s={unversionedId:"Community Guides/1Johhny EBD Node Guide",id:"Community Guides/1Johhny EBD Node Guide",title:"Johnny's Node Guide",description:"Guide by Johnny EBD",source:"@site/docs/Community Guides/1Johhny EBD Node Guide.md",sourceDirName:"Community Guides",slug:"/Community Guides/1Johhny EBD Node Guide",permalink:"/docs/Community Guides/1Johhny EBD Node Guide",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/Community Guides/1Johhny EBD Node Guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Part 5 - Monitoring",permalink:"/docs/the-guide/monitoring"},next:{title:"System & Monitoring setup",permalink:"/docs/Community Guides/2System & monitoring setup"}},i={},u=[{value:"Pre-Requisites \ud83d\uddd2\ufe0f",id:"pre-requisites-\ufe0f",level:2},{value:"My Setup \ud83d\udcbb",id:"my-setup-",level:3},{value:"<strong>Auto Start</strong>",id:"auto-start",level:4},{value:"System Setup \u2699\ufe0f",id:"system-setup-\ufe0f",level:2},{value:"Update Manually and Install Dependencies",id:"update-manually-and-install-dependencies",level:3},{value:"Keep your System Up to Date Automatically",id:"keep-your-system-up-to-date-automatically",level:3},{value:"Disable Root Access",id:"disable-root-access",level:3},{value:"Configure Firewall",id:"configure-firewall",level:3},{value:"Secure Remote Access \ud83d\udd10",id:"secure-remote-access-",level:2},{value:"WireGuard tunnel via PiVPN",id:"wireguard-tunnel-via-pivpn",level:3},{value:"OpenSSH Server Setup",id:"openssh-server-setup",level:3},{value:"Hardening SSH Security \ud83d\udcaa",id:"hardening-ssh-security-",level:3},{value:"<strong>Improve SSH Connection</strong>",id:"improve-ssh-connection",level:4},{value:"Node Setup",id:"node-setup",level:2},{value:"Monitoring \ud83d\udd2d",id:"monitoring-",level:2},{value:"Prometheus",id:"prometheus",level:3},{value:"<strong>Configure</strong>",id:"configure",level:4},{value:"<strong>Configure Service</strong>",id:"configure-service",level:4},{value:"<strong>Prometheus update script</strong>",id:"prometheus-update-script",level:4},{value:"Grafana",id:"grafana",level:3},{value:"<strong>Configure Service</strong>",id:"configure-service-1",level:4},{value:"<strong>Configure Dashboard</strong>",id:"configure-dashboard",level:4},{value:"<strong>Data Source</strong>",id:"data-source",level:5},{value:"<strong>Install Dashboard</strong>",id:"install-dashboard",level:5},{value:"<strong>Enable Alerts</strong>",id:"enable-alerts",level:5},{value:"Node Exporter",id:"node-exporter",level:3},{value:"<strong>Configure Service</strong>",id:"configure-service-2",level:4},{value:"<strong>Node Exporter update script</strong>",id:"node-exporter-update-script",level:4},{value:"Json Exporter",id:"json-exporter",level:3},{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:4},{value:"<strong>Build and Install</strong>",id:"build-and-install",level:4},{value:"<strong>Configure</strong>",id:"configure-1",level:4},{value:"<strong>Configure Service</strong>",id:"configure-service-3",level:4},{value:"Ping",id:"ping",level:3},{value:"<strong>Configure</strong>",id:"configure-2",level:4},{value:"<strong>Configure Service</strong>",id:"configure-service-4",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"johnnys-node-guide"},"Johnny's Node Guide"),(0,r.kt)("p",null,"Guide by ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/moonmclaren"},"Johnny EBD")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Disclaimer")),"\nThis article (the guide) is for informational purposes only and does not constitute professional advice. The author does not guarantee accuracy of the information in this article and the author is not responsible for any damages or losses incurred by following this article. A full disclaimer can be found at the bottom of this page \u2014 please read it before continuing.")),(0,r.kt)("p",null,"This is a guide to setup a Lukso validator node in a home environment. It suggests the use of a dedicated machine to run a node with validation, separate from a personal client for remote access."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE")),"\nMost of the following steps require working in a terminal")),(0,r.kt)("h2",{id:"pre-requisites-\ufe0f"},"Pre-Requisites \ud83d\uddd2\ufe0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ubuntu.com/"},"Ubuntu")),(0,r.kt)("li",{parentName:"ul"},"Dedicated mini-PC")),(0,r.kt)("h3",{id:"my-setup-"},"My Setup \ud83d\udcbb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ubuntu 22.04.1 LTS"),(0,r.kt)("li",{parentName:"ul"},"Intel NUC 12 Pro core i7 1260p"),(0,r.kt)("li",{parentName:"ul"},"Kingston Fury Impact 32GB (16GBx2) DDR4 3200MHz"),(0,r.kt)("li",{parentName:"ul"},"Seagate Firecuda 530 Gen4 NVME 2TB with heatsink")),(0,r.kt)("h4",{id:"auto-start"},(0,r.kt)("strong",{parentName:"h4"},"Auto Start")),(0,r.kt)("p",null,"I had to manually change the BIOS settings to ensure that, if power gets reset, NUC always auto starts. A simple test is to unplug and plug power cord right back in."),(0,r.kt)("p",null,"For NUC I followed the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Press F2 during boot to enter BIOS setup"),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Power")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Secondary Power Settings")," menu"),(0,r.kt)("li",{parentName:"ol"},"Set the option for ",(0,r.kt)("inlineCode",{parentName:"li"},"After Power Failure")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Power On")),(0,r.kt)("li",{parentName:"ol"},"Press F10 to save changes and exit BIOS")),(0,r.kt)("h2",{id:"system-setup-\ufe0f"},"System Setup \u2699\ufe0f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE")),"\nThe following steps are performed directly on a node machine.")),(0,r.kt)("h3",{id:"update-manually-and-install-dependencies"},"Update Manually and Install Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo apt-get update\nsudo apt-get upgrade -y\nsudo apt dist-upgrade -y\nsudo apt-get autoremove\nsudo apt-get autoclean\nsudo apt-get install -y nano wget make curl git net-tools\n")),(0,r.kt)("h3",{id:"keep-your-system-up-to-date-automatically"},"Keep your System Up to Date Automatically"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo apt-get install unattended-upgrades\nsudo dpkg-reconfigure -plow unattended-upgrades\n")),(0,r.kt)("h3",{id:"disable-root-access"},"Disable Root Access"),(0,r.kt)("p",null,"Root access should not be used. Instead a user should be using ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," to perform privileged operations on a system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo passwd -l root\n")),(0,r.kt)("h3",{id:"configure-firewall"},"Configure Firewall"),(0,r.kt)("p",null,"By default deny all traffic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo ufw default deny incoming\nsudo ufw default allow outgoing\n")),(0,r.kt)("p",null,"Allow P2P ports for Lukso clients:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo ufw allow 30303/tcp\nsudo ufw allow 13000/tcp\nsudo ufw allow 12000/udp\nsudo ufw allow 30303/udp\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," make sure to open same ports on your home router")),(0,r.kt)("p",null,"Enable Firewall:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo ufw enable\n")),(0,r.kt)("p",null,"Verify firewall configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo ufw status\n")),(0,r.kt)("p",null,"It should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Status: active\n\nTo                         Action      From\n--                         ------      ----\n13000/tcp                  ALLOW       Anywhere\n12000/udp                  ALLOW       Anywhere\n30303/tcp                  ALLOW       Anywhere\n30303/udp                  ALLOW       Anywhere\n13000/tcp (v6)             ALLOW       Anywhere (v6)\n12000/udp (v6)             ALLOW       Anywhere (v6)\n30303/tcp (v6)             ALLOW       Anywhere (v6)\n30303/udp (v6)             ALLOW       Anywhere (v6)\n")),(0,r.kt)("h2",{id:"secure-remote-access-"},"Secure Remote Access \ud83d\udd10"),(0,r.kt)("h3",{id:"wireguard-tunnel-via-pivpn"},"WireGuard tunnel via PiVPN"),(0,r.kt)("p",null,"Please read ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/@JohnnyEBD/HyTqm4ejc"},"this")," dedicated guide with detailed steps on how to easily setup a VPN host using the PiVPN installation script."),(0,r.kt)("h3",{id:"openssh-server-setup"},"OpenSSH Server Setup"),(0,r.kt)("p",null,"Also refer to ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/@JohnnyEBD/HkXf-1SC9"},"this")," essential guide on how to setup and securely access your Ubuntu server with SSH service."),(0,r.kt)("h3",{id:"hardening-ssh-security-"},"Hardening SSH Security \ud83d\udcaa"),(0,r.kt)("p",null,"Optionally follow ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/@JohnnyEBD/HJAio-lzo"},"this")," guide to vastly improve the security of SSH service on your Ubuntu server by enabling 2FA and Fail2Ban."),(0,r.kt)("h4",{id:"improve-ssh-connection"},(0,r.kt)("strong",{parentName:"h4"},"Improve SSH Connection")),(0,r.kt)("p",null,"While setting up a system, SSH terminal may seem to be slow due to wifi power management settings on a node machine. To disable it, modify the config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/NetworkManager/conf.d/default-wifi-powersave-on.conf\n")),(0,r.kt)("p",null,"Config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[connection]\nwifi.powersave = 2\n")),(0,r.kt)("p",null,"Close editor by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"X"),", then save. Restart ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkManager")," service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo systemctl restart NetworkManager\n")),(0,r.kt)("h2",{id:"node-setup"},"Node Setup"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE")),"\nFollowing steps are performed on a personal machine.")),(0,r.kt)("p",null,"Access your remote node machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"ssh johnnyebd\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TBD AS LUKSO IS PREPARING FOR MAINNET LAUNCH")," \ud83d\udd25\ud83d\ude80\ud83c\udf11"),(0,r.kt)("p",null,"In the meantime follow developments and instructions for ",(0,r.kt)("a",{parentName:"p",href:"https://docs.lukso.tech/networks/l16-testnet"},"L16 beta"),"."),(0,r.kt)("h2",{id:"monitoring-"},"Monitoring \ud83d\udd2d"),(0,r.kt)("p",null,"Sets up a dashboard to monitor state of a node machine, node, and validators."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," Following steps are performed on personal machine.")),(0,r.kt)("p",null,"Access your remote node machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"ssh johnnyebd\n")),(0,r.kt)("h3",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,"Add user to collect node stats:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo adduser --system prometheus --group --no-create-home\n")),(0,r.kt)("p",null,"Identify latest version for ",(0,r.kt)("inlineCode",{parentName:"p"},"linux-amd64")," ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"here"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"2.38.0"),", and install prometheus with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"cd\nwget https://github.com/prometheus/prometheus/releases/download/v2.38.0/prometheus-2.38.0.linux-amd64.tar.gz\ntar xzvf prometheus-2.38.0.linux-amd64.tar.gz\ncd prometheus-2.38.0.linux-amd64\nsudo cp promtool /usr/local/bin/\nsudo cp prometheus /usr/local/bin/\nsudo chown root:root /usr/local/bin/promtool /usr/local/bin/prometheus\nsudo chmod 755 /usr/local/bin/promtool /usr/local/bin/prometheus\ncd\nrm prometheus-2.38.0.linux-amd64.tar.gz\nrm -rf prometheus-2.38.0.linux-amd64\n")),(0,r.kt)("h4",{id:"configure"},(0,r.kt)("strong",{parentName:"h4"},"Configure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo mkdir -p /etc/prometheus/console_libraries /etc/prometheus/consoles /etc/prometheus/files_sd /etc/prometheus/rules /etc/prometheus/rules.d\n")),(0,r.kt)("p",null,"Edit configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/prometheus/prometheus.yml\n")),(0,r.kt)("p",null,"Content of the configuration file should have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n  \nscrape_configs:\n  - job_name: 'prometheus'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['127.0.0.1:9090']\n  - job_name: 'beacon node'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['127.0.0.1:8080']\n  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['127.0.0.1:9100']\n  - job_name: 'validator'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['127.0.0.1:8081']\n  - job_name: 'ping_google'\n    metrics_path: /probe\n    params:\n      module: [icmp]\n    static_configs:\n      - targets:\n        - 8.8.8.8\n    relabel_configs:\n      - source_labels: [__address__]\n        target_label: __param_target\n      - source_labels: [__param_target]\n        target_label: instance\n      - target_label: __address__\n        replacement: 127.0.0.1:9115  # The blackbox exporter's real hostname:port.\n  - job_name: 'ping_cloudflare'\n    metrics_path: /probe\n    params:\n      module: [icmp]\n    static_configs:\n      - targets:\n        - 1.1.1.1\n    relabel_configs:\n      - source_labels: [__address__]\n        target_label: __param_target\n      - source_labels: [__param_target]\n        target_label: instance\n      - target_label: __address__\n        replacement: 127.0.0.1:9115  # The blackbox exporter's real hostname:port.\n  - job_name: json_exporter\n    static_configs:\n    - targets:\n      - 127.0.0.1:7979\n  - job_name: json\n    metrics_path: /probe\n    static_configs:\n    - targets:\n      - https://api.coingecko.com/api/v3/simple/price?ids=lukso-token&vs_currencies=usd\n    relabel_configs:\n    - source_labels: [__address__]\n      target_label: __param_target\n    - source_labels: [__param_target]\n      target_label: instance\n    - target_label: __address__\n      replacement: 127.0.0.1:7979\n")),(0,r.kt)("p",null,"Prepare data directory for prometheus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo chown -R prometheus:prometheus /etc/prometheus\nsudo mkdir /var/lib/prometheus\nsudo chown prometheus:prometheus /var/lib/prometheus\nsudo chmod 755 /var/lib/prometheus\n")),(0,r.kt)("p",null,"Open port to access to metrics. This is optional, only for external use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo ufw allow 9090/tcp\n")),(0,r.kt)("h4",{id:"configure-service"},(0,r.kt)("strong",{parentName:"h4"},"Configure Service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/systemd/system/prometheus.service\n")),(0,r.kt)("p",null,"The content of service configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Prometheus\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nRestart=always\nRestartSec=5\nExecStart=/usr/local/bin/prometheus \\\n    --config.file /etc/prometheus/prometheus.yml \\\n    --storage.tsdb.path /var/lib/prometheus/ \\\n    --storage.tsdb.retention.time=31d \\\n    --web.console.templates=/etc/prometheus/consoles \\\n    --web.console.libraries=/etc/prometheus/console_libraries\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Enable service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo systemctl daemon-reload\nsudo systemctl start prometheus\nsudo systemctl enable prometheus\n")),(0,r.kt)("h4",{id:"prometheus-update-script"},(0,r.kt)("strong",{parentName:"h4"},"Prometheus update script")),(0,r.kt)("p",null,"In order to easily update Prometheus you can run this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remyroy/ethstaker/blob/main/scripts/update-prometheus.py"},"script"),", courtesy of remyroy, for which you need to have one of python's latest version and you can check that with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"python3 --version\n")),(0,r.kt)("p",null,"If it's an older version than 3.10 or not installed at all you can run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo apt install python3.10 -y\n")),(0,r.kt)("p",null,"After that you can download the script and run it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"wget https://raw.githubusercontent.com/remyroy/ethstaker/main/scripts/update-prometheus.py\npython3 update-prometheus.py\n")),(0,r.kt)("p",null,"The script will check the current installed version and it will compare it with the latest stable release version on Github. If there is a new version available, it will prompt you to update it."),(0,r.kt)("h3",{id:"grafana"},"Grafana"),(0,r.kt)("p",null,"Install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},'cd\nsudo apt-get install -y apt-transport-https\nsudo apt-get install -y software-properties-common wget\nwget -qO- https://packages.grafana.com/gpg.key | sudo tee /etc/apt/trusted.gpg.d/grafana.asc\nsudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"\nsudo apt-get update\nsudo apt-get install grafana\n')),(0,r.kt)("h4",{id:"configure-service-1"},(0,r.kt)("strong",{parentName:"h4"},"Configure Service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /lib/systemd/system/grafana-server.service\n")),(0,r.kt)("p",null,"The content of service configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Grafana instance\nDocumentation=http://docs.grafana.org\nWants=network-online.target\nAfter=network-online.target\nAfter=postgresql.service mariadb.service mysql.service\n\n[Service]\nEnvironmentFile=/etc/default/grafana-server\nUser=grafana\nGroup=grafana\nType=simple\nRestart=on-failure\nWorkingDirectory=/usr/share/grafana\nRuntimeDirectory=grafana\nRuntimeDirectoryMode=0750\nExecStart=/usr/sbin/grafana-server \\\n                            --config=${CONF_FILE} \\\n                            --pidfile=${PID_FILE_DIR}/grafana-server.pid \\\n                            --packaging=deb \\\n                            cfg:default.paths.logs=${LOG_DIR} \\\n                            cfg:default.paths.data=${DATA_DIR} \\\n                            cfg:default.paths.plugins=${PLUGINS_DIR} \\\n                            cfg:default.paths.provisioning=${PROVISIONING_CFG_DIR}\n\n\nLimitNOFILE=10000\nTimeoutStopSec=20\nCapabilityBoundingSet=\nDeviceAllow=\nLockPersonality=true\nMemoryDenyWriteExecute=false\nNoNewPrivileges=true\nPrivateDevices=true\nPrivateTmp=true\nPrivateUsers=true\nProtectClock=true\nProtectControlGroups=true\nProtectHome=true\nProtectHostname=true\nProtectKernelLogs=true\nProtectKernelModules=true\nProtectKernelTunables=true\nProtectProc=invisible\nProtectSystem=full\nRemoveIPC=true\nRestrictAddressFamilies=AF_INET AF_INET6 AF_UNIX\nRestrictNamespaces=true\nRestrictRealtime=true\nRestrictSUIDSGID=true\nSystemCallArchitectures=native\nUMask=0027\n\n[Install]\nAlias=grafana.service\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Enable service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo systemctl daemon-reload\nsudo systemctl start grafana-server\nsudo systemctl enable grafana-server\n")),(0,r.kt)("p",null,"Open port to access metrics. This is optional and only for external use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo ufw allow 3000/tcp\n")),(0,r.kt)("h4",{id:"configure-dashboard"},(0,r.kt)("strong",{parentName:"h4"},"Configure Dashboard")),(0,r.kt)("p",null,"Login to grafana by navigating to webrowser ",(0,r.kt)("inlineCode",{parentName:"p"},"http://192.168.86.29:3000"),". Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.86.29")," with the IP of your node machine. This is same IP used to ssh."),(0,r.kt)("p",null,"Default credentials are username and password ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),". Set a new secure (long) password when prompted by grafana."),(0,r.kt)("h5",{id:"data-source"},(0,r.kt)("strong",{parentName:"h5"},"Data Source")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the left-hand menu, hover over the gear menu and click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Data Sources")),(0,r.kt)("li",{parentName:"ol"},"Then click on the Add Data Source button"),(0,r.kt)("li",{parentName:"ol"},"Hover over the Prometheus card on screen, then click on the Select button"),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:9090/"},"http://127.0.0.1:9090/")," into the URL field, then click Save & Test")),(0,r.kt)("h5",{id:"install-dashboard"},(0,r.kt)("strong",{parentName:"h5"},"Install Dashboard")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Hover over the plus symbol icon in the left-hand menu, then click on Import"),(0,r.kt)("li",{parentName:"ol"},"Copy and paste ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lykhonis/lukso-node-guide/blob/main/grafana/dashboard.json"},"the dashboard")," into the ",(0,r.kt)("inlineCode",{parentName:"li"},"Import via panel json")," text box on the screen"),(0,r.kt)("li",{parentName:"ol"},"Then click the Load button"),(0,r.kt)("li",{parentName:"ol"},"Then click the Import button")),(0,r.kt)("h5",{id:"enable-alerts"},(0,r.kt)("strong",{parentName:"h5"},"Enable Alerts")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the left-hand menu, hover over the alarm menue and click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Notification channels")),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"New channel")),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Type")," and ",(0,r.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/alerting/old-alerting/notifications/"},"configure"))),(0,r.kt)("p",null,"On lukso dashboard:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Scroll down on a dashboard to ",(0,r.kt)("inlineCode",{parentName:"li"},"Alerts")," section"),(0,r.kt)("li",{parentName:"ol"},"Select each alert and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit")),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"Alert")," tab, select notifications ",(0,r.kt)("inlineCode",{parentName:"li"},"send to")),(0,r.kt)("li",{parentName:"ol"},"Save and repeat for each alert")),(0,r.kt)("h3",{id:"node-exporter"},"Node Exporter"),(0,r.kt)("p",null,"Add user to monitors node stats:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo adduser --system node_exporter --group --no-create-home\n")),(0,r.kt)("p",null,"Install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"cd\nwget https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz\ntar xzvf node_exporter-1.3.1.linux-amd64.tar.gz\nsudo cp node_exporter-1.3.1.linux-amd64/node_exporter /usr/local/bin/\nsudo chown node_exporter:node_exporter /usr/local/bin/node_exporter\nrm node_exporter-1.3.1.linux-amd64.tar.gz\nrm -rf node_exporter-1.3.1.linux-amd64\n")),(0,r.kt)("h4",{id:"configure-service-2"},(0,r.kt)("strong",{parentName:"h4"},"Configure Service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/systemd/system/node_exporter.service\n")),(0,r.kt)("p",null,"The content of service configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Node Exporter\n\n[Service]\nType=simple\nRestart=always\nRestartSec=5\nUser=node_exporter\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Enable service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo systemctl daemon-reload\nsudo systemctl start node_exporter\nsudo systemctl enable node_exporter\n")),(0,r.kt)("h4",{id:"node-exporter-update-script"},(0,r.kt)("strong",{parentName:"h4"},"Node Exporter update script")),(0,r.kt)("p",null,"In order to easily update Node Exporter you can run this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remyroy/ethstaker/blob/main/scripts/update-node-exporter.py"},"script"),", courtesy of remyroy. Download and run it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"wget https://raw.githubusercontent.com/remyroy/ethstaker/main/scripts/update-node-exporter.py\npython3 update-node-exporter.py\n")),(0,r.kt)("p",null,"The script will check the current installed version and it will compare it with the latest stable release version on Github. If there is a new version available, it will prompt you to update it."),(0,r.kt)("h3",{id:"json-exporter"},"Json Exporter"),(0,r.kt)("h4",{id:"prerequisites"},(0,r.kt)("strong",{parentName:"h4"},"Prerequisites")),(0,r.kt)("p",null,"Check ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," version if installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"go version\n")),(0,r.kt)("p",null,"If it is less than ",(0,r.kt)("inlineCode",{parentName:"p"},"1.18.5")," please install following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"wget https://dl.google.com/go/go1.18.5.linux-amd64.tar.gz\nsudo tar -xvf go1.18.5.linux-amd64.tar.gz\nrm go1.18.5.linux-amd64.tar.gz\nsudo mv go /usr/local/go-1.18.5\nsudo ln -sf /usr/local/go-1.18.5/bin/go /usr/bin/go\ngo version\n")),(0,r.kt)("h4",{id:"build-and-install"},(0,r.kt)("strong",{parentName:"h4"},"Build and Install")),(0,r.kt)("p",null,"User:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo adduser --system json_exporter --group --no-create-home\n")),(0,r.kt)("p",null,"Install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"cd\ngit clone https://github.com/prometheus-community/json_exporter.git\ncd json_exporter\nsudo make build\nsudo cp json_exporter /usr/local/bin/\nsudo chown json_exporter:json_exporter /usr/local/bin/json_exporter\ncd\nrm -rf json_exporter\n")),(0,r.kt)("h4",{id:"configure-1"},(0,r.kt)("strong",{parentName:"h4"},"Configure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo mkdir /etc/json_exporter\nsudo chown json_exporter:json_exporter /etc/json_exporter\n")),(0,r.kt)("p",null,"Setup ",(0,r.kt)("inlineCode",{parentName:"p"},"LYX")," token price:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/json_exporter/json_exporter.yml\n")),(0,r.kt)("p",null,"The content of configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'modules:\n  default:\n    metrics:\n    - name: lyxusd\n      path: "{.lukso-token.usd}"\n      help: Lukso (LYX) price in USD\n')),(0,r.kt)("p",null,"Change ownership of configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo chown json_exporter:json_exporter /etc/json_exporter/json_exporter.yml\n")),(0,r.kt)("h4",{id:"configure-service-3"},(0,r.kt)("strong",{parentName:"h4"},"Configure Service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/systemd/system/json_exporter.service\n")),(0,r.kt)("p",null,"The content of service configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[Unit]\nDescription=JSON Exporter\n\n[Service]\nType=simple\nRestart=always\nRestartSec=5\nUser=json_exporter\nExecStart=/usr/local/bin/json_exporter --config.file /etc/json_exporter/json_exporter.yml\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Enable service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo systemctl daemon-reload\nsudo systemctl start json_exporter\nsudo systemctl enable json_exporter\n")),(0,r.kt)("h3",{id:"ping"},"Ping"),(0,r.kt)("p",null,"Pings google and cloudflare to track latency."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo adduser --system blackbox_exporter --group --no-create-home\n")),(0,r.kt)("p",null,"Install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"cd\nwget https://github.com/prometheus/blackbox_exporter/releases/download/v0.22.0/blackbox_exporter-0.22.0.linux-amd64.tar.gz\ntar xvzf blackbox_exporter-0.22.0.linux-amd64.tar.gz\nsudo cp blackbox_exporter-0.22.0.linux-amd64/blackbox_exporter /usr/local/bin/\nsudo chown blackbox_exporter:blackbox_exporter /usr/local/bin/blackbox_exporter\nsudo chmod 755 /usr/local/bin/blackbox_exporter\nrm blackbox_exporter-0.22.0.linux-amd64.tar.gz\nrm -rf blackbox_exporter-0.22.0.linux-amd64\n")),(0,r.kt)("p",null,"Enable ping permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo setcap cap_net_raw+ep /usr/local/bin/blackbox_exporter\n")),(0,r.kt)("h4",{id:"configure-2"},(0,r.kt)("strong",{parentName:"h4"},"Configure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo mkdir /etc/blackbox_exporter\nsudo chown blackbox_exporter:blackbox_exporter /etc/blackbox_exporter\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/blackbox_exporter/blackbox.yml\n")),(0,r.kt)("p",null,"The content of configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"modules:\n        icmp:\n                prober: icmp\n                timeout: 10s\n                icmp:\n                        preferred_ip_protocol: ipv4\n")),(0,r.kt)("p",null,"Change ownership of configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo chown blackbox_exporter:blackbox_exporter /etc/blackbox_exporter/blackbox.yml\n")),(0,r.kt)("h4",{id:"configure-service-4"},(0,r.kt)("strong",{parentName:"h4"},"Configure Service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo nano /etc/systemd/system/blackbox_exporter.service\n")),(0,r.kt)("p",null,"The content of service configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Blackbox Exporter\n\n[Service]\nType=simple\nRestart=always\nRestartSec=5\nUser=blackbox_exporter\nExecStart=/usr/local/bin/blackbox_exporter --config.file /etc/blackbox_exporter/blackbox.yml\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Enable service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell="},"sudo systemctl daemon-reload\nsudo systemctl start blackbox_exporter\nsudo systemctl enable blackbox_exporter\n")),(0,r.kt)("p",null,"Luksoverse wishes prosperous validation to everyone in hopes that this guide was complete and easy enough to follow. Any suggestions you might have please don't hesitate to reach out to any of us."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Full Disclaimer")),"\nThis article (the guide) is for informational purposes only and does not constitute professional advice. The author does not warrant or guarantee the accuracy, integrity, quality, completeness, currency, or validity of any information in this article. All information herein is provided \u201cas is\u201d without warranty of any kind and is subject to change at any time without notice. The author disclaims all express, implied, and statutory warranties of any kind, including warranties as to accuracy, timeliness, completeness, or fitness of the information in this article for any particular purpose. The author is not responsible for any direct, indirect, incidental, consequential or any other damages arising out of or in connection with the use of this article or in reliance on the information available on this article. This includes any personal injury, business interruption, loss of use, lost data, lost profits, or any other pecuniary loss, whether in an action of contract, negligence, or other misuse, even if the author has been informed of the possibility."),(0,r.kt)("h2",{parentName:"blockquote",id:"credits"},"Credits")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/metanull-operator/eth2-ubuntu"},"https://github.com/metanull-operator/eth2-ubuntu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lykhonis/lukso-node-guide"},"https://github.com/lykhonis/lukso-node-guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/remyroy/ethstaker"},"https://github.com/remyroy/ethstaker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SomerEsat/ethereum-staking-guides"},"https://github.com/SomerEsat/ethereum-staking-guides"))))}c.isMDXComponent=!0}}]);