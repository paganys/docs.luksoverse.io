"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="JSON Exporter Setup",s={unversionedId:"mainnet/complete-node-guide/monitoring/json-exporter",id:"mainnet/complete-node-guide/monitoring/json-exporter",title:"JSON Exporter Setup",description:"After installing the JSON Exporter, we will move on with the second exporter service for Prometheus: the JSON Exporter, as it's common practice to install the exporters before the main service, as explained before.",source:"@site/docs/mainnet/complete-node-guide/7-monitoring/03-json-exporter.md",sourceDirName:"mainnet/complete-node-guide/7-monitoring",slug:"/mainnet/complete-node-guide/monitoring/json-exporter",permalink:"/docs/mainnet/complete-node-guide/monitoring/json-exporter",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/7-monitoring/03-json-exporter.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node Exporter Setup",permalink:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},next:{title:"Blackbox Exporter Setup",permalink:"/docs/mainnet/complete-node-guide/monitoring/blackbox-exporter"}},l={},p=[{value:"7.3.1 Creating a new User",id:"731-creating-a-new-user",level:3},{value:"7.3.2 Installing the Dependencies",id:"732-installing-the-dependencies",level:3},{value:"Download the Dependencies",id:"download-the-dependencies",level:4},{value:"Extract the Go Archive",id:"extract-the-go-archive",level:4},{value:"Copy the Service Binaries into the System&#39;s Path",id:"copy-the-service-binaries-into-the-systems-path",level:4},{value:"Creating Symbolic Link",id:"creating-symbolic-link",level:4},{value:"Check Go Version",id:"check-go-version",level:4},{value:"Cleanup Dependency Download",id:"cleanup-dependency-download",level:4},{value:"7.3.3 Installing the JSON Exporter",id:"733-installing-the-json-exporter",level:3},{value:"Download the Repository",id:"download-the-repository",level:4},{value:"Create the Build using the Makefile",id:"create-the-build-using-the-makefile",level:4},{value:"Copy the Service Binaries into the System&#39;s Path",id:"copy-the-service-binaries-into-the-systems-path-1",level:4},{value:"Set JSON Exporter Permissionsets",id:"set-json-exporter-permissionsets",level:4},{value:"Cleaning up Install Files",id:"cleaning-up-install-files",level:4},{value:"7.3.4 Configuring External Datasets",id:"734-configuring-external-datasets",level:3},{value:"7.3.5 Configuring the Service",id:"735-configuring-the-service",level:3},{value:"Logging",id:"logging",level:4},{value:"7.3.6 Start the JSON Exporter Service",id:"736-start-the-json-exporter-service",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"json-exporter-setup"},"JSON Exporter Setup"),(0,o.kt)("p",null,"After installing the JSON Exporter, we will move on with the second exporter service for Prometheus: the JSON Exporter, as it's common practice to install the exporters before the main service, as ",(0,o.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"explained before"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The JSON Exporterscrapes data from JSON endpoints and expose it as Prometheus. In our case, it's being used to scrape LUKSO price information from CoinGecko. This is important because it enables us to monitor LUKSO's market performance directly from your Prometheus and Grafana setup, providing a unified view of both your node's performance and the associated token's market performance. It saves time and provides convenience, eliminating the need to check this information on separate platforms.")),(0,o.kt)("h3",{id:"731-creating-a-new-user"},"7.3.1 Creating a new User"),(0,o.kt)("p",null,"Like explained and done ",(0,o.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"previously"),", we will create a new user to specifically to run the JSON Exporter service. Running services as a system user with minimal privileges is a common security best practice."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--system"),": This flag indicates that a system user should be created. System users are used to run services and daemons, rather than for people to log in with."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--group"),": This flag instructs the user tool to to create a new group with the same name as the user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--no-create-home"),": By default, the user tool will create a home directory for each new user. This flag prevents that from happening, as we do not need different user directories if ye do not set the user up with an login. The option is typically used for users that are only meant to run a specific service and don't need a home directory. In this case, I'm naming the user ",(0,o.kt)("inlineCode",{parentName:"li"},"node-exporter-worker")," so we can differenciate the service, that is often using the exact name of the program written in underscores, and the user account related to it. Feel free to come up with your own name, but bare in mind that you will have to change future commands.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo adduser --system json-exporter-worker --group --no-create-home\n")),(0,o.kt)("p",null,"Once we configured the exporter, the node will run the service as this user, by specifying the user in our system deamon service file."),(0,o.kt)("p",null,"If you want to confirm that the user has been created, you can search for it within the password file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),", that houses all essential information for each user account. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"grep"),",\na powerful command-line tool fror global expression search within files or text, we can check if the user exists within the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'grep "json-exporter-worker" /etc/passwd\n')),(0,o.kt)("h3",{id:"732-installing-the-dependencies"},"7.3.2 Installing the Dependencies"),(0,o.kt)("p",null,"For the JSON Exporter we will need the programming language Go, as the JSON Exporter is a tool written in the Go programming language, to produce the executable."),(0,o.kt)("p",null,"Particularly in the infrastructure and cloud-native spaces services are commonly downloaded as source code and require the user to compile them. This allows the tool to be used on any system that has the compiler, regardless of its OS or architecture. The JSON Exporter also does not have an official listing on the Prometheus page."),(0,o.kt)("h4",{id:"download-the-dependencies"},"Download the Dependencies"),(0,o.kt)("p",null,"Before downloading anything, make sure you are in the home directory so everything is in one place:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,o.kt)("p",null,"As first step we download Go from the official ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"Go Webpage"),". Make sure to look up and download the latest supported one and no archived version. In my case, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.20.4")," as of May 2023."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Always download the current version.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://go.dev/dl/go1.20.4.linux-arm64.tar.gz\n")),(0,o.kt)("h4",{id:"extract-the-go-archive"},"Extract the Go Archive"),(0,o.kt)("p",null,"After it has been downloaded, we can extract the tape archive using the related Ubuntu tool. We're going to extract (",(0,o.kt)("inlineCode",{parentName:"p"},"x"),") the archive into its previous packaged files (",(0,o.kt)("inlineCode",{parentName:"p"},"f"),") using verbose mode (",(0,o.kt)("inlineCode",{parentName:"p"},"v"),") to list all files being processed during the extraction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"tar xfv go1.20.4.linux-amd64.tar.gz\n")),(0,o.kt)("h4",{id:"copy-the-service-binaries-into-the-systems-path"},"Copy the Service Binaries into the System's Path"),(0,o.kt)("p",null,"After extraction we can copy the exporter binaries to the system's path so they show up as installed dependencies and can be properly used and linked within services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mv go /usr/local/go-1.20.4\n")),(0,o.kt)("h4",{id:"creating-symbolic-link"},"Creating Symbolic Link"),(0,o.kt)("p",null,"As we want to have Go noticed as the main go command when building the JSON Exporter application. We can do this by creating a symbolic link (-s) using the link tool ",(0,o.kt)("inlineCode",{parentName:"p"},"ln"),". We can specify that the binaries of version 1.20.4 are the ones that will be executed using the terminal. By using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag we force the command to remove any existing files, in case something was installed previously. This is especially best practice if you want to update go or build any newer software release."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ln -sf /usr/local/go-1.20.4/bin/go /usr/bin/go\n")),(0,o.kt)("h4",{id:"check-go-version"},"Check Go Version"),(0,o.kt)("p",null,"To verify that everything works as expected, start go using the version subcommand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,o.kt)("p",null,"The output should look similar to the one below. Versions could change based on when you did the installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"TODO:\n")),(0,o.kt)("h4",{id:"cleanup-dependency-download"},"Cleanup Dependency Download"),(0,o.kt)("p",null,"If everything works properly, we can remove the downloaded tape archive. Note that your file might have a different version naming."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm go1.20.4.linux-amd64.tar.gz\n")),(0,o.kt)("h3",{id:"733-installing-the-json-exporter"},"7.3.3 Installing the JSON Exporter"),(0,o.kt)("p",null,"Before downloading anything, make sure you are still in the home directory so everything is in one place:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,o.kt)("h4",{id:"download-the-repository"},"Download the Repository"),(0,o.kt)("p",null,"We can then continue to download this version using the previous installed ",(0,o.kt)("inlineCode",{parentName:"p"},"wget")," tool. In this case, we're downloading the service directly from GitHub. Make sure to update your version if there is a newer release."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/prometheus-community/json_exporter.git\n")),(0,o.kt)("p",null,"Move into the folder to build the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd json_exporter\n")),(0,o.kt)("h4",{id:"create-the-build-using-the-makefile"},"Create the Build using the Makefile"),(0,o.kt)("p",null,"Now lets build the applciation from it's source code. We use the previously downloaded tool ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," to trigger the repositories Makefile. Makefiles are essentially a list of rules and dependencies used to build a project. They specify the relationships among files in your program and provide commands to update them and build executable applications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make build\n")),(0,o.kt)("h4",{id:"copy-the-service-binaries-into-the-systems-path-1"},"Copy the Service Binaries into the System's Path"),(0,o.kt)("p",null,"After extraction we can copy the exporter binaries to the system's path so they show up as installed dependencies and can be properly used and linked within services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cp json_exporter /usr/local/bin/\n")),(0,o.kt)("h4",{id:"set-json-exporter-permissionsets"},"Set JSON Exporter Permissionsets"),(0,o.kt)("p",null,"Now we can change the owner of the JSON Exporter service to the one that we created especially for this purpose:"),(0,o.kt)("p",null,"Like previously explained in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"Node Exporter")," section of the guide, we can set both, the user and group to the specified user of the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown json-exporter-worker:json-exporter-worker /usr/local/bin/json_exporter/\n")),(0,o.kt)("h4",{id:"cleaning-up-install-files"},"Cleaning up Install Files"),(0,o.kt)("p",null,"Move back into the home directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,o.kt)("p",null,"After we copied the executable file into the system's program path and gave it the appropriate user rights, we can remove the original repository folder we've downloaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf json_exporter\n")),(0,o.kt)("h3",{id:"734-configuring-external-datasets"},"7.3.4 Configuring External Datasets"),(0,o.kt)("p",null,"After installation, we want to create a separate configuration file to fetch external information, in this case the LYX price. We will create our own folder for the applciation's configuration files within ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/json_exporter/"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir /etc/json_exporter/\n")),(0,o.kt)("p",null,"Afterwards, we can change the owner of the service to the specific exporter user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown json-exporter-worker:json-exporter-worker /etc/json_exporter/\n")),(0,o.kt)("p",null,"Now we can create a new config file within this folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo vim /etc/json_exporter/json_exporter.yaml\n")),(0,o.kt)("p",null,"Write the following properties into is file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'modules:\n  default:\n    metrics:\n    - name: lyx-in-eur\n      path: "{.lukso-token.eur}"\n      help: LUKSO (LYX) Price in EUR\n')),(0,o.kt)("p",null,"In case you want to change the currency to something else, this is how it would look like in ",(0,o.kt)("inlineCode",{parentName:"p"},"USD"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'modules:\n  default:\n    metrics:\n    - name: lyx-in-usd\n      path: "{.lukso-token.usd}"\n      help: LUKSO (LYX) Price in USD\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the JSON Exporter functions properly and provides the desired level of security. Verify that you always use 2 spaces for each indentation and that the hyphen.")),(0,o.kt)("p",null,"Those properties will later on be used within the Grafana Dashboard to fetch the token prices and build metrics based on our validator service."),(0,o.kt)("p",null,"Save and exit the file. As a final step, we give the exporter worker permissions to this file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown json-exporter-worker:json-exporter-worker /etc/json_exporter/json_exporter.yaml\n")),(0,o.kt)("p",null,"We can now continue the service configuration and link our external metrics there."),(0,o.kt)("h3",{id:"735-configuring-the-service"},"7.3.5 Configuring the Service"),(0,o.kt)("p",null,"After installation, we want to define how the JSON Exporter service should be run. Within Ubuntu, the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")," directory is where system service unit files are stored and used to configure services to start automatically at boot."),(0,o.kt)("p",null,"Here, we can create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"json_exporter.service"),". A service file is generally used to define how a deamon processes should be started. In our case, we create the file with the exact name of the JSON Exporter service that also stored within the system directory, in order to modify the JSON Exporter's startup process. We can use Vim, as we did before on various other files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo vim /etc/systemd/system/json_exporter.service\n")),(0,o.kt)("p",null,"The configuration file is split between multiple sections: ",(0,o.kt)("inlineCode",{parentName:"p"},"[Unit]"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"[Service]"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"[Install]"),". The unit contains generic options that are not dependent on the type of service and provide documentation. The service and install section is where we will house our configuration properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": Provides a concise but meaningful explanation of the service used in the configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Documentation"),": Provides a URL where more information to the program can be found"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"After"),": Ensures that the service is started after the network has been set up."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User"),": Specifies under which user the service will run. In this case, it will be ",(0,o.kt)("inlineCode",{parentName:"li"},"json-exporter-worker"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": This option configures the process start-up type for this service unit. The ",(0,o.kt)("inlineCode",{parentName:"li"},"simple")," value means the exec command configured will be the main process of the service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ExecStart"),": Specifies the command to run when the service starts. In this case, it's ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/json_exporter")," as program folder of the JSON Exporter. We will also start it with our previously set up external data config file by passing it through the service using the ",(0,o.kt)("inlineCode",{parentName:"li"},"--config.file")," flag."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restart"),": Configures whether the service shall be restarted when the service process exits, is killed, or a timeout is reached. The ",(0,o.kt)("inlineCode",{parentName:"li"},"always")," value means the service will be restarted regardless of whether it exited cleanly or not."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RestartSec"),": This option configures the time to sleep before restarting a service. The value ",(0,o.kt)("inlineCode",{parentName:"li"},"5")," means the service will wait for 5 seconds before it restarts. It is a common default value and a balance between trying to restart the service quickly after a failure and not restarting it so rapidly that you could exacerbate problems."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"StandardOutput"),": Logfile where output from the JSON Exporter will be logged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"StandardError"),": Logfile where errors from the JSON Exporter will be logged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SyslogIdentifier"),": Sets the program name used when messages are logged to the system log."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ProtectSystem"),": Protection rules to specify where the service can write files to the disk. If set to ",(0,o.kt)("inlineCode",{parentName:"li"},"full")," it will limit the areas of the file system that the Exporter can write outside of his regular application folder. This works best as we are just using it for logging."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NoNewPrivileges"),": Prevent the JSON Exporter service and its children from gaining new service privileges on its own."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PrivateTmp"),": Set to allow the service to generate a private ",(0,o.kt)("inlineCode",{parentName:"li"},"/tmp")," directory that other processes can't access."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"WantedBy"),": This option creates a small dependency and makes the service get started at boot time. If we input ",(0,o.kt)("inlineCode",{parentName:"li"},"multi-user.target")," we can specify that the service will start when the system is set up for multiple users. In our case, every Exporter service will have its own user, kinda fitting the description.")),(0,o.kt)("h4",{id:"logging"},"Logging"),(0,o.kt)("p",null,"By default, the service will write journal logs into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/journal/")," folder using the ",(0,o.kt)("inlineCode",{parentName:"p"},"journald")," service. But you can also configure it to use system logs that are written into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," folder by the ",(0,o.kt)("inlineCode",{parentName:"p"},"syslog")," process. You can find a full explanation within the ",(0,o.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"first exporter installation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[Unit]\nDescription=JSON Exporter\nDocumentation=https://github.com/prometheus-community/json_exporter\nAfter=network.target\n\n[Service]\nUser=json-exporter-worker\nType=simple\nExecStart=/usr/local/bin/json_exporter ----config.file /etc/json_exporter/json_exporter.yaml\nRestart=always\nRestartSec=5\nStandardOutput=journald\nStandardError=journald\nSyslogIdentifier=node_exporter\nProtectSystem=full\nNoNewPrivileges=true\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the JSON Exporter functions properly and provides the desired level of security. Verify that you do not use spaces between properties and their values.")),(0,o.kt)("h3",{id:"736-start-the-json-exporter-service"},"7.3.6 Start the JSON Exporter Service"),(0,o.kt)("p",null,"First we need to reload the system manager configuration. It is used when making changes to service configuration files or create new service files, ensuring that systemd is aware of the changes like before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,o.kt)("p",null,"Afterwards we can start the JSON Exporter service using the system control command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start json_exporter\n")),(0,o.kt)("p",null,"To enable the JSON Exporter service to start automatically when the system boots we can use the system control to creates a symbolic link as we did before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable json_exporter\n")),(0,o.kt)("p",null,"To check if the JSON Exporter service is running and configured properly, we can fetch the current status from the system control. It will display whether it is active, enabled, or disabled, and show any recent log entries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status json_exporter\n")),(0,o.kt)("p",null,"The output should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"TODO:\n")))}u.isMDXComponent=!0}}]);