"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[6957],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"mainnet/complete-node-guide/monitoring/blackbox-exporter",id:"mainnet/complete-node-guide/monitoring/blackbox-exporter",title:"blackbox-exporter",description:"7.4 Blackbox Exporter Setup",source:"@site/docs/mainnet/complete-node-guide/7-monitoring/04-blackbox-exporter.md",sourceDirName:"mainnet/complete-node-guide/7-monitoring",slug:"/mainnet/complete-node-guide/monitoring/blackbox-exporter",permalink:"/docs/mainnet/complete-node-guide/monitoring/blackbox-exporter",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/7-monitoring/04-blackbox-exporter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"json-exporter",permalink:"/docs/mainnet/complete-node-guide/monitoring/json-exporter"},next:{title:"prometheus",permalink:"/docs/mainnet/complete-node-guide/monitoring/prometheus"}},s={},p=[{value:"7.4 Blackbox Exporter Setup",id:"74-blackbox-exporter-setup",level:2},{value:"7.4.1 Creating a new User",id:"741-creating-a-new-user",level:3},{value:"7.4.2 Installing the Blackbox Exporter",id:"742-installing-the-blackbox-exporter",level:3},{value:"Download Github Package",id:"download-github-package",level:4},{value:"Extract the Archive",id:"extract-the-archive",level:4},{value:"Copy the Service Binaries into the System&#39;s Path",id:"copy-the-service-binaries-into-the-systems-path",level:4},{value:"Set Blackbox Exporter Permissionsets",id:"set-blackbox-exporter-permissionsets",level:4},{value:"Cleaning up Install Files",id:"cleaning-up-install-files",level:4},{value:"7.4.3 Extend Network Capabilities",id:"743-extend-network-capabilities",level:3},{value:"7.4.4 Configuring External Datasets",id:"744-configuring-external-datasets",level:3},{value:"Probing Configuration",id:"probing-configuration",level:4},{value:"Ping and ICMP",id:"ping-and-icmp",level:4},{value:"7.4.5 Configuring the Service",id:"745-configuring-the-service",level:3},{value:"Blackbox Exporter Logging",id:"blackbox-exporter-logging",level:4},{value:"Process Ownership",id:"process-ownership",level:4},{value:"7.4.6 Start the Blackbox Exporter Service",id:"746-start-the-blackbox-exporter-service",level:3},{value:"7.4.7 Maintenace",id:"747-maintenace",level:3},{value:"Logging",id:"logging",level:4},{value:"Restarting",id:"restarting",level:4},{value:"Stopping",id:"stopping",level:4},{value:"7.4.8 Optional User Removal",id:"748-optional-user-removal",level:3},{value:"7.4.9 Optional Software Removal",id:"749-optional-software-removal",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"74-blackbox-exporter-setup"},"7.4 Blackbox Exporter Setup"),(0,a.kt)("p",null,"After installing the Node and JSON Exporters, we will move on with the last exporter service for Prometheus: the Blackbox Exporter, as it's common practice to install the exporters before the main service, as ",(0,a.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"explained before"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Blackbox Exporter probes endpoints over a series of protocols such as HTTP, HTTPS, DNS, TCP, and ICMP, and provides detailed metrics on the results. In our case, it's used to monitor the ping time between the node machine and two DNS servers. This information can be crucial in diagnosing network-related issues. If the ping time is too long or the connection fails altogether, it could indicate network problems affecting your node's performance or its ability to stay in sync with the rest of the blockchain network.")),(0,a.kt)("h3",{id:"741-creating-a-new-user"},"7.4.1 Creating a new User"),(0,a.kt)("p",null,"Like explained and done ",(0,a.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"previously"),", we will create a new user to specifically to run the Blackbox Exporter service. Running services as a system user with minimal privileges is a common security best practice."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--system"),": This flag indicates that a system user should be created. System users are used to run services and daemons, rather than for people to log in with."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--group"),": This flag instructs the user tool to to create a new group with the same name as the user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--no-create-home"),": By default, the user tool will create a home directory for each new user. This flag prevents that from happening, as we do not need different user directories if ye do not set the user up with an login. The option is typically used for users that are only meant to run a specific service and don't need a home directory. In this case, I'm naming the user ",(0,a.kt)("inlineCode",{parentName:"li"},"node-exporter-worker")," so we can differenciate the service, that is often using the exact name of the program written in underscores, and the user account related to it. Feel free to come up with your own name, but bare in mind that you will have to change future commands.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo adduser --system blackbox-exporter-worker --group --no-create-home\n")),(0,a.kt)("p",null,"Once we configured the exporter, the node will run the service as this user, by specifying the user in our system deamon service file."),(0,a.kt)("p",null,"If you want to confirm that the user has been created, you can search for it within the password file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),", that houses all essential information for each user account. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),", a powerful command-line tool fror global expression search within files or text, we can check if the user exists within the file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'grep "blackbox-exporter-worker" /etc/passwd\n')),(0,a.kt)("p",null,"The output should look similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"blackbox-exporter-worker:x:116:122::/home blackbox-exporter-worker:/usr/sbin/nologin\n")),(0,a.kt)("h3",{id:"742-installing-the-blackbox-exporter"},"7.4.2 Installing the Blackbox Exporter"),(0,a.kt)("p",null,"When it comes to the Installation of the Blackbox Exporter, we first have to get the latest version from the official ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/download/#blackbox_exporter"},"Prometheus Webpage"),". As of ",(0,a.kt)("inlineCode",{parentName:"p"},"May 2023"),", the only listed version is ",(0,a.kt)("inlineCode",{parentName:"p"},"0.23.0"),"."),(0,a.kt)("h4",{id:"download-github-package"},"Download Github Package"),(0,a.kt)("p",null,"Before downloading anything, make sure you are in the home directory so everything is in one place:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,a.kt)("p",null,"We can then continue to download this version using the previous installed ",(0,a.kt)("inlineCode",{parentName:"p"},"wget")," tool. In this case, we're downloading the service directly from GitHub. Make sure to update your version if there is a newer release."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget wget https://github.com/prometheus/blackbox_exporter/releases/download/v0.23.0/blackbox_exporter-0.23.0.linux-amd64.tar.gz\n")),(0,a.kt)("p",null,"The output should look similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[DATE] [TIME] (12.5 MB/s) - \u2018blackbox_exporter-0.23.0.linux-amd64.tar.gz\u2019 saved [10831812/10831812]\n\nFINISHED --[DATE] [TIME]--\nTotal wall clock time: 1.4s\nDownloaded: 1 files, 10M in 0.8s (12.5 MB/s)\n")),(0,a.kt)("h4",{id:"extract-the-archive"},"Extract the Archive"),(0,a.kt)("p",null,"After it has been downloaded, we can extract the tape archive using the related Ubuntu tool. We're going to extract (",(0,a.kt)("inlineCode",{parentName:"p"},"x"),") and compress (",(0,a.kt)("inlineCode",{parentName:"p"},"z"),") the archive into its previous packaged files (",(0,a.kt)("inlineCode",{parentName:"p"},"f"),") using verbose mode (",(0,a.kt)("inlineCode",{parentName:"p"},"v"),") to list all files being processed during the extraction and compression."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tar xzfv blackbox_exporter-0.23.0.linux-amd64.tar.gz\n")),(0,a.kt)("p",null,"The output should look similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"blackbox_exporter-0.23.0.linux-amd64/\nblackbox_exporter-0.23.0.linux-amd64/blackbox.yml\nblackbox_exporter-0.23.0.linux-amd64/LICENSE\nblackbox_exporter-0.23.0.linux-amd64/NOTICE\nblackbox_exporter-0.23.0.linux-amd64/blackbox_exporter\n")),(0,a.kt)("h4",{id:"copy-the-service-binaries-into-the-systems-path"},"Copy the Service Binaries into the System's Path"),(0,a.kt)("p",null,"After extraction we can copy the exporter binaries to the system's path so they show up as installed dependencies and can be properly used and linked within services."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cp blackbox_exporter-0.23.0.linux-amd64/blackbox_exporter /usr/local/bin/\n")),(0,a.kt)("h4",{id:"set-blackbox-exporter-permissionsets"},"Set Blackbox Exporter Permissionsets"),(0,a.kt)("p",null,"Now we can change the owner of the Blackbox Exporter service to the one that we created especially for this purpose:"),(0,a.kt)("p",null,"Like previously explained in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"Node Exporter")," section of the guide, we can set both, the user and group to the specified user of the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown blackbox-exporter-worker:blackbox-exporter-worker /usr/local/bin/blackbox_exporter\n")),(0,a.kt)("p",null,"Let's also make sure the user can execute the file by changing the permissions as described in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"Node Exporter")," section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 755 /usr/local/bin/blackbox_exporter\n")),(0,a.kt)("h4",{id:"cleaning-up-install-files"},"Cleaning up Install Files"),(0,a.kt)("p",null,"After we copied the executable file into the system's program path and gave it the appropriate user rights, we can remove the extracted folders."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf blackbox_exporter-0.23.0.linux-amd64\n")),(0,a.kt)("p",null,"The same applies to the tape archive, which we have previously downloaded:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm blackbox_exporter-0.23.0.linux-amd64.tar.gz\n")),(0,a.kt)("h3",{id:"743-extend-network-capabilities"},"7.4.3 Extend Network Capabilities"),(0,a.kt)("p",null,"Because the Blackbox Exporter will monitor the ping time between the node machine and DNS servers. This information can be crucial in diagnosing network-related issues. However, it will ping those lots of times, and service do have strict capabilities set by default"),(0,a.kt)("p",null,"We need to allow Blackbox Exporter to create raw network sockets, which are require for probing the network and providing metrics it's behavior and connectivity."),(0,a.kt)("p",null,"There is the capability settings tool ",(0,a.kt)("inlineCode",{parentName:"p"},"setcap")," on Ubuntu, which helps us doing this. It will take the following operators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cap_new_raw"),": The first operator specifies the capability you're setting. In our case ",(0,a.kt)("inlineCode",{parentName:"li"},"cap_net_raw")," is the network capability that allows the program to use network sockets in a way that could bypass the system's normal security checks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"+ep"),": We can extend the capability of an operator using a plus sign. In our case we're adding ",(0,a.kt)("inlineCode",{parentName:"li"},"e")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"p"),". By setting it to effective using ",(0,a.kt)("inlineCode",{parentName:"li"},"e")," it means that the capability is turned on immediately. We also permit using ",(0,a.kt)("inlineCode",{parentName:"li"},"p")," this new capability can be used directly."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"path"),": Afterwards we need to specify the path to the executable of the service itself.")),(0,a.kt)("p",null,"In our case, the final command looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo setcap cap_net_raw+ep /usr/local/bin/blackbox_exporter\n")),(0,a.kt)("h3",{id:"744-configuring-external-datasets"},"7.4.4 Configuring External Datasets"),(0,a.kt)("p",null,'After installation, we want to create a separate configuration file to defines a module that performs network probes. This can be used to monitor network connectivity by sending "ping" requests and waiting for replies.'),(0,a.kt)("p",null,"We will create our own folder for the applciation's configuration files within ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/blackbox_exporter/"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir /etc/blackbox_exporter/\n")),(0,a.kt)("p",null,"Now we can create a new config file within this folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo vim /etc/blackbox_exporter/blackbox.yaml\n")),(0,a.kt)("h4",{id:"probing-configuration"},"Probing Configuration"),(0,a.kt)("p",null,"Within the file, we can set our network configuration with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"modules"),": The main configuration section for defining different types of probes. Each module defines a specific type of probe that the Blackbox Exporter can perform."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"icmp"),": The name of the module being defined. In this case, it's set up to perform an ",(0,a.kt)("inlineCode",{parentName:"li"},"ICMP"),' probe. ICMP stands for Internet Control Message Protocol, and it\'s used primarily for network diagnostic and control purposes. The most common use of ICMP is the "ping" command, which sends an ICMP echo request to a specified network host and waits for a response.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"prober"),": Specifies the type of probe to be performed. In this case, it's set to icmp, which means this module will perform ICMP probes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"timeout"),": Specifies how long the prober should wait for a response before giving up. In our case, it's set to ",(0,a.kt)("inlineCode",{parentName:"li"},"10s"),", meaning the prober will wait for 10 seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"icmp"),": Contains additional configuration settings specific to ICMP probes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"preferred_ip_protocol"),": This field specifies the IP protocol that the ICMP prober should prefer to use when making its requests. In this case, it's set to ",(0,a.kt)("inlineCode",{parentName:"li"},"IPv4"),", which means the prober will prefer to use Internet Protocol version 4.")),(0,a.kt)("h4",{id:"ping-and-icmp"},"Ping and ICMP"),(0,a.kt)("p",null,'The configuration defines a module named "icmp" that performs ICMP probes using IPv4 and waits up to 10 seconds for a response. The Blackbox Exporter can take this configuration to set up ping requests and waiting for replies. Ping in this case, is a computer network diagnostic tool used to test whether a particular host is reachable across an IP network. It will measure round-trip time for packets sent from the origin host to a destination computer and back.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"modules:\n  icmp:\n    prober: icmp\n    timeout: 10s\n    icmp:\n      preferred_ip_protocol: ipv4\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the JSON Exporter functions properly and provides the desired level of security. Verify that you always use 2 spaces for each indentation and that the hyphen.")),(0,a.kt)("p",null,"Those properties will later on be used within the Grafana Dashboard to fetch the token prices and build metrics based on our validator service."),(0,a.kt)("p",null,"Save and exit the file. As a final step, we give the exporter worker permissions to the configuration folder and the config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R blackbox-exporter-worker:blackbox-exporter-worker /etc/blackbox_exporter/\n")),(0,a.kt)("p",null,"We can now continue the service configuration and link our external metrics there."),(0,a.kt)("h3",{id:"745-configuring-the-service"},"7.4.5 Configuring the Service"),(0,a.kt)("p",null,"After installation, we want to define how the Blackbox Exporter service should be run. Within Ubuntu, the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")," directory is where system service unit files are stored and used to configure services to start automatically at boot."),(0,a.kt)("p",null,"Here, we can create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"blackbox_exporter.service"),". A service file is generally used to define how a deamon processes should be started. In our case, we create the file with the exact name of the Blackbox Exporter service that also stored within the system directory, in order to modify the Blackbox Exporter's startup process. We can use Vim, as we did before on various other files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo vim /etc/systemd/system/blackbox_exporter.service\n")),(0,a.kt)("p",null,"The configuration file is split between multiple sections: ",(0,a.kt)("inlineCode",{parentName:"p"},"[Unit]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[Service]"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"[Install]"),". The unit contains generic options that are not dependent on the type of service and provide documentation. The service and install section is where we will house our configuration properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": Provides a concise but meaningful explanation of the service used in the configuration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Documentation"),": Provides a URL where more information to the program can be found"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"After"),": Ensures that the service is started after a specific service, in this case, that the network has been set up, as we will need a network connection for this exporter to succeed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User"),": Specifies under which user the service will run. In this case, it will be ",(0,a.kt)("inlineCode",{parentName:"li"},"blackbox-exporter-worker"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Group"),": Specifies under which user group the service will run. In this case, it will be ",(0,a.kt)("inlineCode",{parentName:"li"},"blackbox-exporter-worker"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type"),": This option configures the process start-up type for this service unit. The ",(0,a.kt)("inlineCode",{parentName:"li"},"simple")," value means the exec command configured will be the main process of the service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ExecStart"),": Specifies the command to run when the service starts. In this case, it's ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/blackbox_exporter")," as program folder of the Blackbox Exporter. It will also load the configuration file on startup"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restart"),": Configures whether the service shall be restarted when the service process exits, is killed, or a timeout is reached. The ",(0,a.kt)("inlineCode",{parentName:"li"},"always")," value means the service will be restarted regardless of whether it exited cleanly or not."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RestartSec"),": This option configures the time to sleep before restarting a service. The value ",(0,a.kt)("inlineCode",{parentName:"li"},"5")," means the service will wait for 5 seconds before it restarts. It is a common default value and a balance between trying to restart the service quickly after a failure and not restarting it so rapidly that you could exacerbate problems."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SyslogIdentifier"),": Sets the program name used when messages are logged to the system log."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"StandardOutput"),": Logfile where output from the Blackbox Exporter will be logged."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"StandardError"),": Logfile where errors from the Blackbox Exporter will be logged."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ProtectSystem"),": Protection rules to specify where the service can write files to the disk. If set to ",(0,a.kt)("inlineCode",{parentName:"li"},"full")," it will limit the areas of the file system that the Exporter can write outside of his regular application folder. This works best as we are just using it for logging."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NoNewPrivileges"),": Prevent the Blackbox Exporter service and its children from gaining new service privileges on its own."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PrivateTmp"),": Set to allow the service to generate a private ",(0,a.kt)("inlineCode",{parentName:"li"},"/tmp")," directory that other processes can't access."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WantedBy"),": This option creates a small dependency and makes the service get started at boot time. If we input ",(0,a.kt)("inlineCode",{parentName:"li"},"multi-user.target")," we can specify that the service will start when the system is set up for multiple users. In our case, every Exporter service will have its own user, kinda fitting the description.")),(0,a.kt)("h4",{id:"blackbox-exporter-logging"},"Blackbox Exporter Logging"),(0,a.kt)("p",null,"By default, the service will write journal logs into the ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/journal/")," folder using the ",(0,a.kt)("inlineCode",{parentName:"p"},"journal")," service. But you can also configure it to use system logs that are written into the ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," folder by the ",(0,a.kt)("inlineCode",{parentName:"p"},"syslog")," process. Here is a quick rundown:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"journal"),": The logs are structured and include metadata about each log entry, which can make them easier to filter and analyze, but harder to read our bugfix. The service includes rate limiting and log rotation by default, which can help keep log sizes small. It also stores logs in a binary format, which can be more space-efficient and faster to process than text-based logs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"syslog"),": System logs are text-based logs, which is easier to read, bugfix, and process with traditional command-line tools. It also has a network protocol, so it could send logs to remote servers, if thats something you need.")),(0,a.kt)("h4",{id:"process-ownership"},"Process Ownership"),(0,a.kt)("p",null,"Make sure that you change the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Group")," property if you've previously changed the name, as it will otherwise fall back to ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," and could cause security risks. This is our final configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[Unit]\nDescription=Blackbox Exporter\nDocumentation=https://github.com/prometheus/blackbox_exporter\nAfter=network.target\n\n[Service]\nUser=blackbox-exporter-worker\nGroup=blackbox-exporter-worker\nType=simple\nExecStart=/usr/local/bin/blackbox_exporter --config.file /etc/blackbox_exporter/blackbox.yaml\nRestart=always\nRestartSec=5\nSyslogIdentifier=blackbox_exporter\nStandardOutput=journal\nStandardError=journal\nProtectSystem=full\nNoNewPrivileges=true\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the Blackbox Exporter functions properly and provides the desired level of security. Verify that you do not use spaces between properties and their values.")),(0,a.kt)("h3",{id:"746-start-the-blackbox-exporter-service"},"7.4.6 Start the Blackbox Exporter Service"),(0,a.kt)("p",null,"First we need to reload the system manager configuration. It is used when making changes to service configuration files or create new service files, ensuring that systemd is aware of the changes like before."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,a.kt)("p",null,"Afterwards we can start the Blackbox Exporter service using the system control command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start blackbox_exporter\n")),(0,a.kt)("p",null,"To enable the Blackbox Exporter service to start automatically when the system boots we can use the system control to creates a symbolic link as we did before."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable blackbox_exporter\n")),(0,a.kt)("p",null,"The output should look similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Created symlink /etc/systemd/system/multi-user.target.wants/blackbox_exporter.service \u2192 /etc/systemd/system/blackbox_exporter.service.\n")),(0,a.kt)("p",null,"To check if the Blackbox Exporter service is running and configured properly, we can fetch the current status from the system control. It will display whether it is active, enabled, or disabled, and show any recent log entries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status blackbox_exporter\n")),(0,a.kt)("p",null,"The output should look similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u25cf blackbox_exporter.service - Blackbox Exporter\n     Loaded: loaded (/etc/systemd/system/blackbox_exporter.service; enabled; vendor preset: enabled)\n     Active: active (running) since [DATE] UTC; [TIME] ago\n       Docs: https://github.com/prometheus/blackbox_exporter\n   Main PID: 27272 (blackbox_export)\n      Tasks: 7 (limit: 38043)\n     Memory: 2.4M\n        CPU: 8ms\n     CGroup: /system.slice/blackbox_exporter.service\n             \u2514\u250027272 /usr/local/bin/blackbox_exporter --config.file /etc/blackbox_exporter/blackbox.>\n\n[DATE] [USER] systemd[1]: Started Blackbox Exporter.\n[DATE] [USER] blackbox_exporter[27272]: ts=2023-05-18T09:11:09.531Z caller=main.go:78 >...\n...\n")),(0,a.kt)("h3",{id:"747-maintenace"},"7.4.7 Maintenace"),(0,a.kt)("p",null,"Proper maintenance ensures that all the components are working as intended, can be updated on the fly and that software can be kept up-to-date and secure. Its also important identifying and fixing errors quickly."),(0,a.kt)("h4",{id:"logging"},"Logging"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"journal")," is your logging tool, you can access the full logs with the journal control tool"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-f"),": Logging in follow mode displays the most recent journal entries and then updates in real time as new entries are added."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-u"),": In unit mode, it filters the log to show only entries for the specified systemd service, this time ",(0,a.kt)("inlineCode",{parentName:"li"},"blackbox_exporter"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -f -u blackbox_exporter\n")),(0,a.kt)("h4",{id:"restarting"},"Restarting"),(0,a.kt)("p",null,"If you did any changes to configuration files, reload the system deamon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,a.kt)("p",null,"Then, restart the service using the system control:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart blackbox_exporter\n")),(0,a.kt)("h4",{id:"stopping"},"Stopping"),(0,a.kt)("p",null,"You can stop the service using the system control:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop blackbox_exporter\n")),(0,a.kt)("h3",{id:"748-optional-user-removal"},"7.4.8 Optional User Removal"),(0,a.kt)("p",null,"If you ever want to remove the user or something went wrong do the following steps:"),(0,a.kt)("p",null,"Change the owner back to root:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R root:root /etc/blackbox_exporter/\n")),(0,a.kt)("p",null,"Remove the user and all the files, so there are no orphant data blobs on your system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo deluser --remove-all-files blackbox-exporter-worker\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo delgroup blackbox-exporter-worker\n")),(0,a.kt)("p",null,"Afterwards, you can redo the Blackbox Exporter guide and either set up a new user or remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," property from the configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"7.4.5"),". By default, the process will run as ",(0,a.kt)("inlineCode",{parentName:"p"},"root"),". Also make sure to go through every step in ",(0,a.kt)("inlineCode",{parentName:"p"},"7.4.6")," once again."),(0,a.kt)("h3",{id:"749-optional-software-removal"},"7.4.9 Optional Software Removal"),(0,a.kt)("p",null,"If you want to remove the Blackbox Exporter tool, stop the running service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop blackbox_exporter\n")),(0,a.kt)("p",null,"Disable the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl disable blackbox_exporter\n")),(0,a.kt)("p",null,"Remove the service file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm /etc/systemd/system/blackbox_exporter.service\n")),(0,a.kt)("p",null,"Reload the system service deamon to get the service file change:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,a.kt)("p",null,"Then continue deleting the configuration file folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /etc/blackbox_exporter\n")),(0,a.kt)("p",null,"In the last step, remove the unlisted executable itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /usr/local/bin/blackbox_exporter\n")))}u.isMDXComponent=!0}}]);