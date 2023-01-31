"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3547],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="JVM/OS Configuration",s={unversionedId:"bestPractice/19JVMOS",id:"bestPractice/19JVMOS",title:"JVM/OS Configuration",description:"This section focuses on system (JVM/OS) related configuration.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05-bestPractice/19JVMOS.md",sourceDirName:"05-bestPractice",slug:"/bestPractice/19JVMOS",permalink:"/docs/4.x/bestPractice/19JVMOS",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/05-bestPractice/19JVMOS.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Access control",permalink:"/docs/4.x/bestPractice/18access"},next:{title:"Log configuration",permalink:"/docs/4.x/bestPractice/20log"}},l={},c=[{value:"1.JVM Options",id:"1jvm-options",level:2},{value:"2.Linux Kernel Parameters",id:"2linux-kernel-parameters",level:2}],m={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jvmos-configuration"},"JVM/OS Configuration"),(0,a.kt)("p",null,"This section focuses on system (JVM/OS) related configuration."),(0,a.kt)("h2",{id:"1jvm-options"},"1.JVM Options"),(0,a.kt)("p",null,"The latest release of JDK 1.8 is recommended. Prevent the JVM from adjusting the heap size for better performance by setting the same Xms and Xmx values. The production JVM configuration is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-server -Xms8g -Xmx8g -Xmn4g \n")),(0,a.kt)("p",null,"When the JVM is 8-byte aligned by default, it is recommended that the maximum heap memory not exceed 32 G. Otherwise, the pointer compression technology of the JVM will be affected and memory will be wasted."),(0,a.kt)("p",null,"If you don't care about the startup time of the RocketMQ Broker, a better option is to \"pre-touch\" the Java heap to ensure that every page will be allocated during JVM initialization. Those who don't care about startup time can enable it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-XX:+AlwaysPreTouch  \n")),(0,a.kt)("p",null,"Disabling bias locking may reduce JVM pauses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-XX:-UseBiasedLocking   \n")),(0,a.kt)("p",null,"Garbage collection, we recommend using the G1 collector that came with JDK 1.8:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-XX:+UseG1GC \n-XX:G1HeapRegionSize=16m   \n-XX:G1ReservePercent=25 \n-XX:InitiatingHeapOccupancyPercent=30\n")),(0,a.kt)("p",null,"These GC options may seem aggressive, but they proved to perform well in our production environment."),(0,a.kt)("p",null,"Also, don't set the value of -XX:MaxGCPauseMillis too small, or the JVM will use a small young generation to achieve this goal, which will result in very frequent minor GCS, so rolling GC log files are recommended:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-XX:+UseGCLogFileRotation   \n-XX:NumberOfGCLogFiles=5 \n-XX:GCLogFileSize=30m\n")),(0,a.kt)("p",null,"If writing to GC files increases the agent's latency, consider redirecting GC log files to the in-memory file system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-Xloggc:/dev/shm/mq_gc_%p.log123   \n")),(0,a.kt)("h2",{id:"2linux-kernel-parameters"},"2.Linux Kernel Parameters"),(0,a.kt)("p",null,"The os.sh script lists many kernel parameters in the bin folder, which can be changed slightly and then used for production purposes. Note the following parameters, for more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/sysctl/vm.txt"},"Documentation")," in /proc/sys/vm/* "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vm.extra_free_kbytes"),"  The VM is told to keep extra available memory between the threshold at which background reclamation (kswapd) starts and the threshold at which it is directly reclaimed (by allocating processes). RocketMQ uses this parameter to avoid long delays in memory allocation. (depending on the kernel version)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vm.min_free_kbytes"),"  If it is set below 1024 KB, it will subtly break the system, and the system is prone to deadlock under high load."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vm.max_map_count"),"  Limits the maximum number of memory mapped regions that a process can have. RocketMQ will load CommitLog and ConsumeQueue using MMAP, so it is recommended to set this parameter to a large value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vm.swappiness"),"  Defines how aggressively the kernel swaps memory pages. Higher values increase aggression, lower values decrease exchange volume. A value of 10 is recommended to avoid exchange delays."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File descriptor limits"),"  RocketMQ needs to open file descriptors for files (CommitLog and ConsumeQueue) and network connections. We recommend setting the file descriptor value to 655350."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Performance_Tuning_Guide/ch06s04s02.html"},"Disk scheduler"),"  RocketMQ recommends the use of an I/O deadline scheduler, which attempts to provide a guaranteed delay for requests.")))}u.isMDXComponent=!0}}]);