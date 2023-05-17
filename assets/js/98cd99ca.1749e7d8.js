"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[2584],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,s={unversionedId:"mainnet/complete-node-guide/monitoring/node-exporter",id:"mainnet/complete-node-guide/monitoring/node-exporter",title:"node-exporter",description:"7.2 Node Exporter Setup",source:"@site/docs/mainnet/complete-node-guide/7-monitoring/02-node-exporter.md",sourceDirName:"mainnet/complete-node-guide/7-monitoring",slug:"/mainnet/complete-node-guide/monitoring/node-exporter",permalink:"/docs/mainnet/complete-node-guide/monitoring/node-exporter",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/7-monitoring/02-node-exporter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"core-tools",permalink:"/docs/mainnet/complete-node-guide/monitoring/core-tools"},next:{title:"json-exporter",permalink:"/docs/mainnet/complete-node-guide/monitoring/json-exporter"}},l={},p=[{value:"7.2 Node Exporter Setup",id:"72-node-exporter-setup",level:2},{value:"7.2.1 Creating a new User",id:"721-creating-a-new-user",level:3},{value:"7.2.2 Installing the Node Exporter",id:"722-installing-the-node-exporter",level:3},{value:"Download Github Package",id:"download-github-package",level:4},{value:"Extract the Archive",id:"extract-the-archive",level:4},{value:"Copy the Service Binaries into the System&#39;s Path",id:"copy-the-service-binaries-into-the-systems-path",level:4},{value:"Set Node Exporter Permissionsets",id:"set-node-exporter-permissionsets",level:4},{value:"Cleaning up Install Files",id:"cleaning-up-install-files",level:4},{value:"7.2.3 Configuring the Service",id:"723-configuring-the-service",level:3},{value:"Logging",id:"logging",level:4},{value:"7.2.4 Start the Node Exporter Service",id:"724-start-the-node-exporter-service",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"72-node-exporter-setup"},"7.2 Node Exporter Setup"),(0,o.kt)("p",null,"We will start the monitoring by setting up the three Node Exporter services before we manage the core Prometheus connection to them. Here, everything will be set in place and load when we configure the Dashboard later on."),(0,o.kt)("p",null,"This has the following benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Problem Encapsulation"),": Installing exporters first, allows you to ensure that the necessary metrics are being exposed by the services you want to monitor. By installing and configuring exporters beforehand, you can verify that the metrics are accessible and correctly exposed. This helps in troubleshooting any potential issues with the exporters or the services themselves."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No Idle Rotation Problems"),": With the exporters already installed and configured, Prometheus can immediately start scraping the endpoints and collecting metrics. This ensures that you have data available for monitoring as soon as Prometheus is up and running, which excludes errors where configurations would need to be reloaded and updated.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Node Exporter allows you to measure various machine resources such as memory, disk I/O, CPU usage, network statistics, and more. This is crucial because these metrics give you a broad overview of your machine's performance and health, allowing you to monitor how your node is affecting your system's resources and catch any potential issues (like memory leaks or high CPU usage) before they cause problems. Running Node Exporter on every node of your network provides you with valuable insights and helps ensure the smooth operation of your blockchain applications.")),(0,o.kt)("h3",{id:"721-creating-a-new-user"},"7.2.1 Creating a new User"),(0,o.kt)("p",null,"In the context of setting up a Prometheus Node Exporter, we will create a system user specifically to run the Node Exporter service. Running services as a system user with minimal privileges is a common security best practice. It limits the potential damage if the service is somehow compromised. For example, the Node Exporter user won't be able to write to most directories on the system or execute commands as other users. We will use the system's own user creation tool:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--system"),": This flag indicates that a system user should be created. System users are used to run services and daemons, rather than for people to log in with."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--group"),": This flag instructs the user tool to to create a new group with the same name as the user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--no-create-home"),": By default, the user tool will create a home directory for each new user. This flag prevents that from happening, as we do not need different user directories if ye do not set the user up with an login. The option is typically used for users that are only meant to run a specific service and don't need a home directory. In this case, I'm naming the user ",(0,o.kt)("inlineCode",{parentName:"li"},"node-exporter-worker")," so we can differenciate the service, that is often using the exact name of the program written in underscores, and the user account related to it. Feel free to come up with your own name, but bare in mind that you will have to change future commands.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo adduser --system node-exporter-worker --group --no-create-home\n")),(0,o.kt)("p",null,"Once we configured the exporter, the node will run the service as this user, by specifying the user in our system deamon service file."),(0,o.kt)("p",null,"If you want to confirm that the user has been created, you can search for it within the password file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),", that houses all essential information for each user account. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"grep"),",\na powerful command-line tool fror global expression search within files or text, we can check if the user exists within the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'grep "node-exporter-worker" /etc/passwd\n')),(0,o.kt)("h3",{id:"722-installing-the-node-exporter"},"7.2.2 Installing the Node Exporter"),(0,o.kt)("p",null,"When it comes to the Installation of the Node Exporter, we first have to get the latest version from the official ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/download/#node_exporter"},"Prometheus Webpage"),". As of ",(0,o.kt)("inlineCode",{parentName:"p"},"May 2023"),", the only listed version is ",(0,o.kt)("inlineCode",{parentName:"p"},"1.5.0"),"."),(0,o.kt)("h4",{id:"download-github-package"},"Download Github Package"),(0,o.kt)("p",null,"Before downloading anything, make sure you are in the home directory so everything is in one place:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,o.kt)("p",null,"We can then continue to download this version using the previous installed ",(0,o.kt)("inlineCode",{parentName:"p"},"wget")," tool. In this case, we're downloading the service directly from GitHub. Make sure to update your version if there is a newer release."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz\n")),(0,o.kt)("h4",{id:"extract-the-archive"},"Extract the Archive"),(0,o.kt)("p",null,"After it has been downloaded, we can extract the tape archive using the related Ubuntu tool. We're going to extract (",(0,o.kt)("inlineCode",{parentName:"p"},"x"),") and compress (",(0,o.kt)("inlineCode",{parentName:"p"},"z"),") the archive into its previous packaged files (",(0,o.kt)("inlineCode",{parentName:"p"},"f"),") using verbose mode (",(0,o.kt)("inlineCode",{parentName:"p"},"v"),") to list all files being processed during the extraction and compression."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"tar xzfv node_exporter-1.5.0.linux-amd64.tar.gz\n")),(0,o.kt)("h4",{id:"copy-the-service-binaries-into-the-systems-path"},"Copy the Service Binaries into the System's Path"),(0,o.kt)("p",null,"After extraction we can copy the exporter binaries to the system's path so they show up as installed dependencies and can be properly used and linked within services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cp node_exporter-1.5.0.linux-amd64/node_exporter /usr/local/bin/\n")),(0,o.kt)("h4",{id:"set-node-exporter-permissionsets"},"Set Node Exporter Permissionsets"),(0,o.kt)("p",null,"Now we can change the owner of the node Exporter service to the one that we created especially for this purpose."),(0,o.kt)("p",null,"The change owner tool ",(0,o.kt)("inlineCode",{parentName:"p"},"chown")," on Ubuntu will take the following arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[owner]"),": Specifies the new owner of the file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},":","[group]"),": Specifies the group of the file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"path"),": The file or directory whose ownership will be changed.")),(0,o.kt)("p",null,"In our case, we are setting both the user owner and the group owner to the specified user ",(0,o.kt)("inlineCode",{parentName:"p"},"node-exporter-worker"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown node-exporter-worker:node-exporter-worker /usr/local/bin/node_exporter\n")),(0,o.kt)("h4",{id:"cleaning-up-install-files"},"Cleaning up Install Files"),(0,o.kt)("p",null,"After we copied the executable file into the system's program path and gave it the appropriate user rights, we can remove the extracted folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf node_exporter-1.5.0.linux-amd64\n")),(0,o.kt)("p",null,"The same applies to the tape archive, which we have previously downloaded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm node_exporter-1.5.0.linux-amd64.tar.gz\n")),(0,o.kt)("h3",{id:"723-configuring-the-service"},"7.2.3 Configuring the Service"),(0,o.kt)("p",null,"After installation, we want to define how the Node Exporter service should be run. Within Ubuntu, the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")," directory is where system service unit files are stored and used to configure services to start automatically at boot."),(0,o.kt)("p",null,"Here, we can create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"node_exporter.service"),". A service file is generally used to define how a deamon processes should be started. In our case, we create the file with the exact name of the Node Exporter service that also stored within the system directory, in order to modify the node Exporters startup process. We can use Vim, as we did before on various other files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo vim /etc/systemd/system/node_exporter.service\n")),(0,o.kt)("p",null,"The configuration file is split between multiple sections: ",(0,o.kt)("inlineCode",{parentName:"p"},"[Unit]"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"[Service]"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"[Install]"),". The unit contains generic options that are not dependent on the type of service and provide documentation. The service and install section is where we will house our configuration properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": Provides a concise but meaningful explanation of the service used in the configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Documentation"),": Provides a URL where more information to the program can be found"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"After"),": Ensures that the service is started after the network has been set up."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User"),": Specifies under which user the service will run. In this case, it will be ",(0,o.kt)("inlineCode",{parentName:"li"},"node-exporter-worker"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": This option configures the process start-up type for this service unit. The ",(0,o.kt)("inlineCode",{parentName:"li"},"simple")," value means the exec command configured will be the main process of the service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ExecStart"),": Specifies the command to run when the service starts. In this case, it's ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/node_exporter")," as program folder of the node Exporter."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restart"),": Configures whether the service shall be restarted when the service process exits, is killed, or a timeout is reached. The ",(0,o.kt)("inlineCode",{parentName:"li"},"always")," value means the service will be restarted regardless of whether it exited cleanly or not."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RestartSec"),": This option configures the time to sleep before restarting a service. The value ",(0,o.kt)("inlineCode",{parentName:"li"},"5")," means the service will wait for 5 seconds before it restarts. It is a common default value and a balance between trying to restart the service quickly after a failure and not restarting it so rapidly that you could exacerbate problems."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"StandardOutput"),": Logfile where output from the node Exporter will be logged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"StandardError"),": Logfile where errors from the node Exporter will be logged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SyslogIdentifier"),": Sets the program name used when messages are logged to the system log."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ProtectSystem"),": Protection rules to specify where the service can write files to the disk. If set to ",(0,o.kt)("inlineCode",{parentName:"li"},"full")," it will limit the areas of the file system that the Exporter can write outside of his regular application folder. This works best as we are just using it for logging."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NoNewPrivileges"),": Prevent the Node Exporter service and its children from gaining new service privileges on its own."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PrivateTmp"),": Set to allow the service to generate a private ",(0,o.kt)("inlineCode",{parentName:"li"},"/tmp")," directory that other processes can't access."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WantedBy"),": This option creates a small dependency and makes the service get started at boot time. If we input ",(0,o.kt)("inlineCode",{parentName:"li"},"multi-user.target")," we can specify that the service will start when the system is set up for multiple users. In our case, every Exporter service will have its own user, kinda fitting the description.")),(0,o.kt)("h4",{id:"logging"},"Logging"),(0,o.kt)("p",null,"By default, the service will write journal logs into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/journal/")," folder using the ",(0,o.kt)("inlineCode",{parentName:"p"},"journald")," service. But you can also configure it to use system logs that are written into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," folder by the ",(0,o.kt)("inlineCode",{parentName:"p"},"syslog")," process. Here is a quick rundown:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"journald"),": The logs are structured and include metadata about each log entry, which can make them easier to filter and analyze, but harder to read our bugfix. The service includes rate limiting and log rotation by default, which can help keep log sizes small. It also stores logs in a binary format, which can be more space-efficient and faster to process than text-based logs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"syslog"),": System logs are text-based logs, which is easier to read, bugfix, and process with traditional command-line tools. It also has a network protocol, so it could send logs to remote servers, if thats something you need.")),(0,o.kt)("p",null,"I will keep the default journald for now. Therefore, the content of the Node Exporter service configuration should look like the one below. Make sure that you change the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," property if you've previously changed the name. Feel free to make any adjustments that better suite your environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[Unit]\nDescription=Node Exporter\nDocumentation=https://github.com/prometheus/node_exporter\nAfter=network.target\n\n[Service]\nUser=node-exporter-worker\nType=simple\nExecStart=/usr/local/bin/node_exporter\nRestart=always\nRestartSec=5\nStandardOutput=journald\nStandardError=journald\nSyslogIdentifier=node_exporter\nProtectSystem=full\nNoNewPrivileges=true\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the Node Exporter functions properly and provides the desired level of security. Verify that you do not use spaces between properties and their values.")),(0,o.kt)("h3",{id:"724-start-the-node-exporter-service"},"7.2.4 Start the Node Exporter Service"),(0,o.kt)("p",null,"First we need to reload the system manager configuration. It is used when making changes to service configuration files or create new service files, ensuring that systemd is aware of the changes like before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,o.kt)("p",null,"Afterwards we can start the Node Exporter service using the system control command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start node_exporter\n")),(0,o.kt)("p",null,"To enable the Node Exporter service to start automatically when the system boots we can use the system control to creates a symbolic link as we did before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable node_exporter\n")),(0,o.kt)("p",null,"To check if the Node Exporter service is running and configured properly, we can fetch the current status from the system control. It will display whether it is active, enabled, or disabled, and show any recent log entries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status node_exporter\n")),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"TODO:\n")))}u.isMDXComponent=!0}}]);