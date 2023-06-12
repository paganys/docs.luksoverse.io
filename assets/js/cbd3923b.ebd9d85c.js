"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[5880],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={},i="Grafana Dashboard",o={unversionedId:"mainnet/complete-node-guide/monitoring/grafana",id:"mainnet/complete-node-guide/monitoring/grafana",title:"Grafana Dashboard",description:"As the final step within the monitoring, we will set up a Grafana Dashboard to gather all metrics in one place.",source:"@site/docs/mainnet/complete-node-guide/7-monitoring/06-grafana.md",sourceDirName:"mainnet/complete-node-guide/7-monitoring",slug:"/mainnet/complete-node-guide/monitoring/grafana",permalink:"/docs/mainnet/complete-node-guide/monitoring/grafana",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/7-monitoring/06-grafana.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prometheus Setup",permalink:"/docs/mainnet/complete-node-guide/monitoring/prometheus"},next:{title:"Dashboard Setup",permalink:"/docs/mainnet/complete-node-guide/monitoring/dashboard"}},l={},p=[{value:"7.6.1 Creating a New User",id:"761-creating-a-new-user",level:3},{value:"7.6.2 Installation",id:"762-installation",level:3},{value:"7.6.3 Set Grafana Permissionsets",id:"763-set-grafana-permissionsets",level:3},{value:"7.6.4 Configuring the Service",id:"764-configuring-the-service",level:3},{value:"Grafana Logging",id:"grafana-logging",level:4},{value:"Process Ownership",id:"process-ownership",level:4},{value:"7.6.5 Start the Grafana Service",id:"765-start-the-grafana-service",level:3},{value:"7.6.6 Maintenance",id:"766-maintenance",level:3},{value:"Logging",id:"logging",level:4},{value:"Restarting",id:"restarting",level:4},{value:"Stopping",id:"stopping",level:4},{value:"7.6.7 Optional User Removal",id:"767-optional-user-removal",level:3},{value:"7.6.8 Optional Software Removal",id:"768-optional-software-removal",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grafana-dashboard"},"Grafana Dashboard"),(0,r.kt)("p",null,"As the final step within the monitoring, we will set up a Grafana Dashboard to gather all metrics in one place."),(0,r.kt)("h3",{id:"761-creating-a-new-user"},"7.6.1 Creating a New User"),(0,r.kt)("p",null,"As explained and done ",(0,r.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"previously"),", we will create a new user to run the Grafana service specifically. Running services as a system user with minimal privileges is a common security best practice."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--system"),": This flag indicates that a system user should be created. System users are used to run services and daemons rather than for people to log in with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--group"),": This flag instructs the user tool to create a new group with the same name as the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--no-create-home"),": By default, the user tool will create a home directory for each new user. This flag prevents that from happening, as we do not need different user directories if ye do not set the user up with a login. The option is typically used for users that are only meant to run a specific service and don't need a home directory. In this case, I'm naming the user ",(0,r.kt)("inlineCode",{parentName:"li"},"grafana-exporter-worker")," to differentiate the service, often using the exact name of the program written in underscores and the user account related to it. Feel free to create your own name, but remember that you must change future commands.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo adduser --system grafana-server-worker --group --no-create-home\n")),(0,r.kt)("p",null,"If you want to confirm that the user has been created, you can search for it within the password file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),", that houses all essential information for each user account. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"grep"),", a powerful command-line tool for global expression search within files or text, we can check if the user exists within the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'grep "grafana-server-worker" /etc/passwd\n')),(0,r.kt)("p",null,"The output should look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"prometheus-worker:x:117:123::/home/prometheus-worker:/usr/sbin/nologin\n")),(0,r.kt)("h3",{id:"762-installation"},"7.6.2 Installation"),(0,r.kt)("p",null,"Before downloading or installing anything, make sure you are in the home directory so everything is in one place:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,r.kt)("p",null,"First, we should download the GPG key for the Grafana repository and adds it to the list of trusted keys in apt to ensure that the packages you download from the Grafana repository are authentic. We will add the key to the system's shared keyring folder. We use ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," for getting or sending data using URL syntax and ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg")," to encrypt the key."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-fsS"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"f")," option tells curl to fail silently on server errors and hides regular progress outputs with ",(0,r.kt)("inlineCode",{parentName:"li"},"s"),". It is mainly done to enable scripts better to better deal with failed attempts as we are using a pipe."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-S"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"S")," option is used with the silent mode and will show an error message if it fails to cancel the pipe action."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-L"),": If the server reports that the requested page has moved to a different location, this option will make curl redo the request on the newly updated URL location of the key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pipe")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"|")," specifies a pipe that takes the output from the first command and uses it as input to the second command."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--dearmor"),": Converts the ASCII armored key from the left side of the pipe into a binary format GPG can use for the package list."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-o"),": Specifies where the output will be saved. In this case, it's writing to the trusted package list ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/apt/trusted.gpg.d"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://packages.grafana.com/gpg.key|sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/grafana.gpg\n")),(0,r.kt)("p",null,"You can verify the added key with the ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg")," command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--no-default-keyring"),": Tells GPG not to use the default keyring. By default, gpg uses the keyring stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.gnupg/pubring.gpg")," for GNU Packages of Ubuntu."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--keyring"),": This specifies the keyring file to use. Instead of using the default keyring, gpg will use the specified file. In our case, it's ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/share/keyrings/grafana-archive-keyring.gpg"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--list-keys"),": List the public keys in the specified keyring.")),(0,r.kt)("p",null,"Continue using this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gpg --no-default-keyring --keyring /etc/apt/trusted.gpg.d/grafana.gpg --list-keys\n")),(0,r.kt)("p",null,"You will find the entry of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Grafana Labs")," key similar to this one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/etc/apt/trusted.gpg.d/grafana.gpg\n----------------------------------\npub   rsa3072 2023-01-06 [SC] [expires: DATE]\n      0E22EB88E39E12277A7760AE9E439B102CF3C0C6\nuid           [ unknown] Grafana Labs <engineering@grafana.com>\nsub   rsa3072 2023-01-06 [E] [expires: DATE]\n")),(0,r.kt)("p",null,"We can then add the Grafana repository to your list of repositories, allowing apt to install packages using the previously installed ",(0,r.kt)("inlineCode",{parentName:"p"},"software-properties-common")," service that comes with the tool ",(0,r.kt)("inlineCode",{parentName:"p"},"add-apt-repository"),". It's the standard way to add additional repositories to your sources in Ubuntu and many other Debian-based systems."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"\n')),(0,r.kt)("p",null,"Press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," to continue fetching the packages. Afterward, we can update the package list and download the official ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," software. It will check the GPG key underneath."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n")),(0,r.kt)("p",null,"Now we can download the latest Grafana build:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install grafana\n")),(0,r.kt)("p",null,"Whenever you update your Ubuntu packages using APT, it will automatically fetch the latest Grafana updates."),(0,r.kt)("h3",{id:"763-set-grafana-permissionsets"},"7.6.3 Set Grafana Permissionsets"),(0,r.kt)("p",null,"Now we can change the owner of the software applications. Ownership changes are commonly done for security reasons. Giving root ownership to these binary files prevents non-root users or exporter workers from modifying or replacing these important executables, which could lead to unauthorized or unexpected behavior."),(0,r.kt)("p",null,"Like previously explained in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"Node Exporter")," section of the guide, we can set both, the user and group to the specified user of the service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R grafana-server-worker:grafana-server-worker /usr/sbin/grafana\n")),(0,r.kt)("p",null,"The same applies to the server itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R grafana-server-worker:grafana-server-worker /usr/sbin/grafana-server\n")),(0,r.kt)("p",null,"We do the same for all configuration folders that need to be loaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R grafana-server-worker:grafana-server-worker /etc/grafana\n")),(0,r.kt)("p",null,"Another permission is needed for the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R grafana-server-worker:grafana-server-worker /var/lib/grafana\n")),(0,r.kt)("p",null,"The same applies to the log files that are generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R grafana-server-worker:grafana-server-worker /var/log/grafana\n")),(0,r.kt)("p",null,"Not only do we need to change the owner this time, but we also need to change the access mode of the executable. We must allow the owner to read, write, and execute the file while the group and all other services can only read from it."),(0,r.kt)("p",null,"We can use the change mode tool ",(0,r.kt)("inlineCode",{parentName:"p"},"chmod")," as we already did within the ",(0,r.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"Node Exporter")," section of the guide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 755 /usr/sbin/grafana\n")),(0,r.kt)("p",null,"We do the same for the server again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 755 /usr/sbin/grafana-server\n")),(0,r.kt)("p",null,"The Grafana database also needs privileges:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 755 /var/lib/grafana\n")),(0,r.kt)("h3",{id:"764-configuring-the-service"},"7.6.4 Configuring the Service"),(0,r.kt)("p",null,"Within Ubuntu, the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")," directory is where system service unit files are stored and used to configure services to start automatically at boot. A service file is generally used to define how daemon processes should be started. In our case, we create the file with the exact name of the Prometheus service stored within the system directory to modify Prometheus' startup process."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Grafana's configuration data is already set within")," ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana-server.service")," ",(0,r.kt)("strong",{parentName:"p"},"after installation. However, we will add and edit some properties.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /lib/systemd/system/grafana-server.service\n")),(0,r.kt)("p",null,"The configuration file is split between multiple sections: ",(0,r.kt)("inlineCode",{parentName:"p"},"[Unit]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[Service]"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"[Install]"),". The unit section contains generic options that are not dependent on the type of service and provide documentation. The service and install section is where we will house our configuration properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": Provides a concise but meaningful explanation of the service used in the configuration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Documentation"),": Provides a URL where more information about the program can be found"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wants"),": Minor requirement for the startup to proceed safely. In our case, it indicates that the service should want an internet connection but continues even if it can not be established."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"After"),": Ensures that the service is started after the network has been set up."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EnvironmentFile"),": Specifies a file containing the service's environment variables. The environment variables are set before the service is started."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User"),": Specifies under which user the service will run. In this case, it will be ",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus-worker"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Group"),": - ",(0,r.kt)("strong",{parentName:"li"},"User"),": Specifies under which usergroup the service will run. In this case, it will be ",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus-worker"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": This option configures the process startup type for this service unit. The ",(0,r.kt)("inlineCode",{parentName:"li"},"simple")," value means the exec command configured will be the main process of the service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Restart"),": Configures whether the service shall be restarted when the service process exits, is killed, or a timeout is reached. The ",(0,r.kt)("inlineCode",{parentName:"li"},"on-failure")," value means the service will be restarted if the server instance crashes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WorkingDirectory"),": Sets the working directory for the executed process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RuntimeDirectory"),": Sets the runtime directory for the service, which is created before the service starts and removed when the service stops."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RuntimeDirectoryMode"),": This sets the file mode permissions for the runtime directory specified by ",(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeDirectory"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ExecStart"),": Specifies the command to run when the service starts. In this case, it's ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/prometheus")," as the program folder of Prometheus. In addition, there are several other options passed to the startup. It will load the configuration from ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/prometheus.yaml"),", it will store the database within ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/prometheus/"),", it will set the data storing expiring date to one month, it will set the directory containing the web console template files to ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/consoles"),", and last but not least, it will specify the folder of the console library files at ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/console_libraries"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LimitNOFILE"),": This setting controls the maximum number of file descriptors the service can open."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TimeoutStopSec"),": This setting specifies the maximum time the service should stop before being forcibly terminated by SIGKILL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LockPersonality"),": If set, the service's kernel personality setting, which determines the ABI used for system calls, will be locked to prevent changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MemoryDenyWriteExecute"),": This setting determines whether the service can create memory mappings that are both writable and executable. Disabling this can prevent certain types of exploits."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NoNewPrivileges"),": Prevent the Prometheus service and its children from gaining new service privileges independently."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PrivateDevices"),": If this is set, the service will not have access to any physical devices. The option increases the security of the service by preventing it from directly interacting with hardware or device drivers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PrivateTmp"),": Set to allow the service to generate a private ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp")," directory that other processes can't access."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProtectClock"),": The service cannot change the system clock if enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProtectControlGroups"),": If set, the service cannot modify the control group filesystem, preventing it from altering process resource limits and accounting settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProtectHome"),": If enabled, the service is prevented from accessing the user's home directories."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProtectHostname"),": The service cannot change the system's hostname if enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProtectKernelLogs"),": If enabled, the service cannot access or control the kernel log ring buffer, preventing it from reading sensitive kernel log entries or flooding the log."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProtectKernelModules"),": If enabled, the service cannot load or unload kernel modules, preventing it from altering the system's hardware capabilities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProtectKernelTunables"),": If enabled, the service cannot modify kernel variables, restricting its ability to alter the system's behavior."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProtectProc"),": This setting restricts the visibility of other processes in ",(0,r.kt)("inlineCode",{parentName:"li"},"/proc"),". The 'invisible' setting will hide all processes that the service's user doesn't own."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ProtectSystem"),": Protection rules to specify where the service can write files to the disk. If set to ",(0,r.kt)("inlineCode",{parentName:"li"},"full")," it will limit the areas of the file system that the Exporter can write outside of his regular application folder. This protection type works best as we are just using it for logging."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RemoveIPC"),": When enabled, Systemd will remove all SysV and POSIX IPC objects the user owns when the user fully logs out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RestrictAddressFamilies"),": This setting restricts the socket address families the service can use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RestrictNamespaces"),": If set, this limits the types of Linux namespaces the process can access. The option can be used to restrict the parts of the system the service can see."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RestrictRealtime"),": If set, the service cannot acquire real-time scheduling, which could be used to monopolize the CPU."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RestrictSUIDSGID"),": If enabled, the service cannot create or use SUID/SGID files, which can prevent privilege escalation exploits."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SystemCallArchitectures"),": This restricts the system calls the service can execute to a specific architecture."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UMask"),": This sets the default file creation permissions for the service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WantedBy"),": This option creates a small dependency and starts the service at boot time. If we input ",(0,r.kt)("inlineCode",{parentName:"li"},"multi-user.target"),", we can specify that the service will begin when the system is set up for multiple users. In our case, every exporter service will have its user, kinda fitting the description."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RestartSec"),": This option configures the time to sleep before restarting a service. The value ",(0,r.kt)("inlineCode",{parentName:"li"},"5")," means the service will wait for 5 seconds before it continues. It is a typical default value and a balance between trying to restart the service quickly after a failure and not renewing it so rapidly that you could exacerbate problems."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SyslogIdentifier"),": Sets the program name used when messages are logged to the system log."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PrivateUsers"),": This setting controls whether to run the service in its own user namespace. If set, all users and groups will be mapped to ",(0,r.kt)("inlineCode",{parentName:"li"},"nobody")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"nogroup"),", except for root. As Grafana is exposed, this should be activated.")),(0,r.kt)("h4",{id:"grafana-logging"},"Grafana Logging"),(0,r.kt)("p",null,"By default, the service will write journal logs into the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/journal/")," folder using the ",(0,r.kt)("inlineCode",{parentName:"p"},"journal")," service. But you can also configure it to use system logs written into the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," folder by the ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," process. Here is a quick rundown:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"journal"),": The logs are structured and include metadata about each log entry, making them easier to filter and analyze but harder to read our bugfix. The service includes default rate limiting and log rotation, which can help keep log sizes small. It also stores logs in a binary format, which can be more space-efficient and faster to process than text-based logs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"syslog"),": System logs are text-based logs, which are easier to read, bugfix, and process with traditional command-line tools. It also has a network protocol, so it could send logs to remote servers if thats something you need.")),(0,r.kt)("h4",{id:"process-ownership"},"Process Ownership"),(0,r.kt)("p",null,"Make sure you change the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," properties if you've previously changed the name, as it will fall back to ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," and could cause security risks."),(0,r.kt)("p",null,"We can modify the configuration file by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"RestartSec"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SyslogIdentifier"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"PrivateUsers")," properties at the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"[SERVICE]")," section."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please note that you do not have to copy and paste the file. Just edit User and Group, and add the 3 properties to the bottom of the Service section.")),(0,r.kt)("p",null,"Our final configuration file will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[Unit]\nDescription=Grafana instance\nDocumentation=http://docs.grafana.org\nWants=network-online.target\nAfter=network-online.target\nAfter=postgresql.service mariadb.service mysql.service influxdb.service\n\n[Service]\nEnvironmentFile=/etc/default/grafana-server\nUser=grafana-server-worker\nGroup=grafana-server-worker\nType=simple\nRestart=on-failure\nWorkingDirectory=/usr/share/grafana\nRuntimeDirectory=grafana\nRuntimeDirectoryMode=0750\nExecStart=/usr/share/grafana/bin/grafana server                                     \\\n                            --config=${CONF_FILE}                                   \\\n                            --pidfile=${PID_FILE_DIR}/grafana-server.pid            \\\n                            --packaging=deb                                         \\\n                            cfg:default.paths.logs=${LOG_DIR}                       \\\n                            cfg:default.paths.data=${DATA_DIR}                      \\\n                            cfg:default.paths.plugins=${PLUGINS_DIR}                \\\n                            cfg:default.paths.provisioning=${PROVISIONING_CFG_DIR}\n\nLimitNOFILE=10000\nTimeoutStopSec=20\nCapabilityBoundingSet=\nDeviceAllow=\nLockPersonality=true\nMemoryDenyWriteExecute=false\nNoNewPrivileges=true\nPrivateDevices=true\nPrivateTmp=true\nProtectClock=true\nProtectControlGroups=true\nProtectHome=true\nProtectHostname=true\nProtectKernelLogs=true\nProtectKernelModules=true\nProtectKernelTunables=true\nProtectProc=invisible\nProtectSystem=full\nRemoveIPC=true\nRestrictAddressFamilies=AF_INET AF_INET6 AF_UNIX\nRestrictNamespaces=true\nRestrictRealtime=true\nRestrictSUIDSGID=true\nSystemCallArchitectures=native\nUMask=0027\nRestartSec=5\nSyslogIdentifier=grafana-server\nPrivateUsers=true\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the Prometheus functions properly and provides the desired level of security. Verify that you do not use spaces between properties and their values.")),(0,r.kt)("h3",{id:"765-start-the-grafana-service"},"7.6.5 Start the Grafana Service"),(0,r.kt)("p",null,"First, we need to reload the system manager configuration. It is used when making changes to service configuration files or creating new service files, ensuring that the system's daemon is aware of the changes like before."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,r.kt)("p",null,"Afterwards, we can start the Grafana Server using the system control command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start grafana-server\n")),(0,r.kt)("p",null,"To enable the Grafana Server to start when the system boots, we can use the system control to create a symbolic link as we did before."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable grafana-server\n")),(0,r.kt)("p",null,"The output should look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Synchronizing state of grafana-server.service with SysV service script with /lib/systemd/systemd-sysv-install.\nExecuting: /lib/systemd/systemd-sysv-install enable grafana-server\nCreated symlink /etc/systemd/system/multi-user.target.wants/grafana-server.service \u2192 /lib/systemd/system/grafana-server.service.\n")),(0,r.kt)("p",null,"We can fetch the current status from the system control to check if Grafana Server is running and configured correctly. It will display whether it is active, enabled, or disabled and show any recent log entries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status grafana-server\n")),(0,r.kt)("p",null,"The output should look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25cf grafana-server.service - Grafana instance\n     Loaded: loaded (/lib/systemd/system/grafana-server.service; enabled; vendo>\n     Active: active (running) since [DATE] UTC; [TIME] ago\n       Docs: http://docs.grafana.org\n   Main PID: 84000 (grafana)\n      Tasks: 17 (limit: 38043)\n     Memory: 65.7M\n        CPU: 3.855s\n     CGroup: /system.slice/grafana-server.service\n             \u2514\u250084000 /usr/share/grafana/bin/grafana server --config=/etc/grafan>\n\n[DATE] [TIME] [USER] grafana[84000]: logger=modules t=2023-05-18T15:09:2>...\n...\n")),(0,r.kt)("h3",{id:"766-maintenance"},"7.6.6 Maintenance"),(0,r.kt)("p",null,"Proper maintenance ensures that all the components are working as intended, can be updated on the fly, and that software can be kept up-to-date and secure. It's also essential to identify and fix errors quickly."),(0,r.kt)("h4",{id:"logging"},"Logging"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"journal")," is your logging tool, you can access the full logs with the journal control tool."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f"),": Logging in follow mode displays the most recent journal entries and then updates in real-time as new entries are added."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u"),": In unit mode, it filters the log to show only entries for the specified system's service, this time ",(0,r.kt)("inlineCode",{parentName:"li"},"grafana-server"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -f -u grafana-server\n")),(0,r.kt)("h4",{id:"restarting"},"Restarting"),(0,r.kt)("p",null,"If you made any changes to configuration files, reload the system daemon:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,r.kt)("p",null,"Then, restart the service using the system control:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart grafana-server\n")),(0,r.kt)("h4",{id:"stopping"},"Stopping"),(0,r.kt)("p",null,"You can stop the service using the system control:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop grafana-server\n")),(0,r.kt)("h3",{id:"767-optional-user-removal"},"7.6.7 Optional User Removal"),(0,r.kt)("p",null,"If you ever want to remove the user or something went wrong, do the following steps:"),(0,r.kt)("p",null,"Change the owner of Grafana back to root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R root:root /usr/sbin/grafana\n")),(0,r.kt)("p",null,"The same applies to the server itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R root:root /usr/sbin/grafana-server\n")),(0,r.kt)("p",null,"We do the same for all configuration folders that need to be loaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R root:root /etc/grafana\n")),(0,r.kt)("p",null,"Another permission is needed for the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R root:root /var/lib/grafana\n")),(0,r.kt)("p",null,"The same applies to the log files that are generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R root:root /var/log/grafana\n")),(0,r.kt)("p",null,"Remove the user and all the files so there are no orphaned data blobs on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo deluser --remove-all-files grafana-server-worker\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo delgroup grafana-server-worker\n")),(0,r.kt)("p",null,"Afterward, you can redo the Grafana guide and either set up a new user or remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," properties from the configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"7.6.4"),". By default, the process will run as ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),". Also, go through every step in ",(0,r.kt)("inlineCode",{parentName:"p"},"7.6.5")," once again."),(0,r.kt)("h3",{id:"768-optional-software-removal"},"7.6.8 Optional Software Removal"),(0,r.kt)("p",null,"If you want to remove the Grafana software, stop the running service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop grafana-server\n")),(0,r.kt)("p",null,"Disable the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl disable grafana-server\n")),(0,r.kt)("p",null,"Remove the service file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm /etc/systemd/system/grafana-server.service\n")),(0,r.kt)("p",null,"Reload the system service daemon to get the service file change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,r.kt)("p",null,"Then continue deleting the configuration folders:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /etc/grafana\n")),(0,r.kt)("p",null,"Remove the Prometheus database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /var/lib/grafana\n")),(0,r.kt)("p",null,"Remove the server's log folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /var/log/grafana\n")),(0,r.kt)("p",null,"Remove the Promtool executable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /usr/sbin/grafana-server\n")),(0,r.kt)("p",null,"In the last step, remove the unlisted Prometheus executable itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /usr/sbin/grafana\n")))}u.isMDXComponent=!0}}]);