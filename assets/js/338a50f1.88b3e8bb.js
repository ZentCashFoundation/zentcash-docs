"use strict";(self.webpackChunkzentcash_docs=self.webpackChunkzentcash_docs||[]).push([[7552],{6534:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"mine/sbc-mining/optimizing-rpi-zent-cash-mining","title":"Optimizing Mining on a RPi","description":"Notes","source":"@site/docs/mine/sbc-mining/optimizing-rpi-zent-cash-mining.md","sourceDirName":"mine/sbc-mining","slug":"/mine/sbc-mining/optimizing-rpi-zent-cash-mining","permalink":"/docs/mine/sbc-mining/optimizing-rpi-zent-cash-mining","draft":false,"unlisted":false,"editUrl":"https://github.com/ZentCashFoundation/zentcash-docs/tree/main/docs/mine/sbc-mining/optimizing-rpi-zent-cash-mining.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Optimizing Mining on a RPi","sidebar_position":2},"sidebar":"mineSidebar","previous":{"title":"Mining with a SBC","permalink":"/docs/mine/sbc-mining/mining-with-sbc"},"next":{"title":"Mobile Mining","permalink":"/docs/category/mobile-mining"}}');var t=r(4848),s=r(8453);const o={title:"Optimizing Mining on a RPi",sidebar_position:2},a=void 0,l={},c=[{value:"Notes",id:"notes",level:3},{value:"Overview",id:"overview",level:2},{value:"OS Image",id:"os-image",level:2},{value:"Get the Latest Compiler",id:"get-the-latest-compiler",level:2},{value:"Download Compile, and Configure Your Miner",id:"download-compile-and-configure-your-miner",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(e.p,{children:["Looking for a more general SBC setup guide? Check out ",(0,t.jsx)(e.a,{href:"mining-with-sbc",children:"this guide"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(e.p,{children:"To maximize your hashrate, it is very important that you select a 64-bit OS image, a quality miner and the most current compiler that you can."}),"\n",(0,t.jsx)(e.h2,{id:"os-image",children:"OS Image"}),"\n",(0,t.jsx)(e.p,{children:"The 64-bit Ubuntu Server for Raspberry Pi3 is a good choice:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://ubuntu.com/download/raspberry-pi",children:"https://ubuntu.com/download/raspberry-pi"})}),"\n",(0,t.jsxs)(e.p,{children:["You will need to write this image to an SD card with a utility such as ",(0,t.jsx)(e.a,{href:"https://www.balena.io/etcher",children:"Etcher"}),". Once your OS is written, insert your SD Card and boot your Pi."]}),"\n",(0,t.jsxs)(e.p,{children:["Once you've got it booted, you'll be asked for a username and password. These are both ",(0,t.jsx)(e.code,{children:"ubuntu"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Once you've logged in, you'll be asked to change the password. For the current password, enter ",(0,t.jsx)(e.code,{children:"ubuntu"})," again. Then, enter a new password, and confirm it."]}),"\n",(0,t.jsx)(e.h2,{id:"get-the-latest-compiler",children:"Get the Latest Compiler"}),"\n",(0,t.jsx)(e.p,{children:"You will need to edit your sources.list file and add the debian testing repository in order to install gcc-8 and g++-8 on your system:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"sudo nano /etc/apt/sources.list\n"})}),"\n",(0,t.jsx)(e.p,{children:"Add this line to the end of the file:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"deb http://ftp.us.debian.org/debian testing main contrib non-free\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Then save it with ",(0,t.jsx)(e.code,{children:"Ctrl-x"})," and then the following:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"sudo apt-get update\r\nsudo apt-get install gcc-8 g++-8\n"})}),"\n",(0,t.jsx)(e.h2,{id:"download-compile-and-configure-your-miner",children:"Download Compile, and Configure Your Miner"}),"\n",(0,t.jsx)(e.p,{children:"Now you need to install the required dependencies and the latest release of the xmrig miner and compile it with gcc-8."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo apt-get install git build-essential cmake libuv1-dev libmicrohttpd-dev libssl-dev\r\ngit clone https://github.com/xmrig/xmrig.git\r\ncd xmrig\r\nsudo mkdir build\r\ncd build\r\nsudo cmake .. -DCMAKE_C_COMPILER=gcc-8 -DCMAKE_CXX_COMPILER=g++-8\r\nsudo make -j4\n"})}),"\n",(0,t.jsx)(e.p,{children:"Compiling the miner could take several minutes to complete. When your miner is ready you need to create a configuration file with your Zent Cash settings. Navigate to your home directory and create a file named config-zentcash.json"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"cd ~\r\nsudo nano config-zentcash.json\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Populate your configuration file with something similar to the code below. Make sure that ",(0,t.jsx)(e.code,{children:"url"}),", ",(0,t.jsx)(e.code,{children:"user"}),", and ",(0,t.jsx)(e.code,{children:"pass"})," are populated with the your own unique and proper values."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\r\n    "api": {\r\n        "id": null,\r\n        "worker-id": null\r\n    },\r\n    "http": {\r\n        "enabled": false,\r\n        "host": "127.0.0.1",\r\n        "port": 0,\r\n        "access-token": null,\r\n        "restricted": true\r\n    },\r\n    "autosave": true,\r\n    "background": false,\r\n    "colors": true,\r\n    "title": true,\r\n    "randomx": {\r\n        "init": -1,\r\n        "init-avx2": -1,\r\n        "mode": "auto",\r\n        "1gb-pages": false,\r\n        "rdmsr": true,\r\n        "wrmsr": true,\r\n        "cache_qos": false,\r\n        "numa": true,\r\n        "scratchpad_prefetch_mode": 1\r\n    },\r\n    "cpu": {\r\n        "enabled": true,\r\n        "huge-pages": true,\r\n        "huge-pages-jit": false,\r\n        "hw-aes": null,\r\n        "priority": null,\r\n        "memory-pool": false,\r\n        "yield": true,\r\n        "asm": true,\r\n        "argon2-impl": null,\r\n        "argon2": [0, 1, 2, 3, 4, 5, 6, 7],\r\n        "cn": [\r\n            [1, 0],\r\n            [1, 2],\r\n            [1, 4],\r\n            [1, 6],\r\n            [1, 7]\r\n        ],\r\n        "cn-heavy": [\r\n            [1, 0],\r\n            [1, 2],\r\n            [1, 4]\r\n        ],\r\n        "cn-lite": [\r\n            [1, 0],\r\n            [1, 1],\r\n            [1, 2],\r\n            [1, 3],\r\n            [1, 4],\r\n            [1, 5],\r\n            [1, 6],\r\n            [1, 7]\r\n        ],\r\n        "cn-pico": [\r\n            [2, 0],\r\n            [2, 1],\r\n            [2, 2],\r\n            [2, 3],\r\n            [2, 4],\r\n            [2, 5],\r\n            [2, 6],\r\n            [2, 7]\r\n        ],\r\n        "cn/upx2": [\r\n            [2, 0],\r\n            [2, 1],\r\n            [2, 2],\r\n            [2, 3],\r\n            [2, 4],\r\n            [2, 5],\r\n            [2, 6],\r\n            [2, 7]\r\n        ],\r\n        "ghostrider": [\r\n            [8, 0],\r\n            [8, 2],\r\n            [8, 4],\r\n            [8, 6]\r\n        ],\r\n        "rx": [0, 2, 4, 6],\r\n        "rx/wow": [0, 1, 2, 3, 4, 5, 6, 7],\r\n        "cn-lite/0": false,\r\n        "cn/0": false,\r\n        "rx/arq": "rx/wow"\r\n    },\r\n    "opencl": {\r\n        "enabled": false,\r\n        "cache": true,\r\n        "loader": null,\r\n        "platform": "AMD",\r\n        "adl": true,\r\n        "cn-lite/0": false,\r\n        "cn/0": false\r\n    },\r\n    "cuda": {\r\n        "enabled": false,\r\n        "loader": null,\r\n        "nvml": true,\r\n        "cn-lite/0": false,\r\n        "cn/0": false\r\n    },\r\n    "log-file": null,\r\n    "donate-level": 1,\r\n    "donate-over-proxy": 1,\r\n    "pools": [\r\n        {\r\n            "algo": "argon2/chukwa",\r\n            "coin": null,\r\n            "url": "YOUR_POOL_URL_PLUS_PORT_GOES_HERE",\r\n            "user": "YOUR_ZTC_ADDRESS_GOES_HERE",\r\n            "pass": "YOUR_MINER_NAME_GOES_HERE",\r\n            "rig-id": null,\r\n            "nicehash": false,\r\n            "keepalive": false,\r\n            "enabled": true,\r\n            "tls": false,\r\n            "sni": false,\r\n            "tls-fingerprint": null,\r\n            "daemon": false,\r\n            "socks5": null,\r\n            "self-select": null,\r\n            "submit-to-origin": false\r\n        }\r\n    ],\r\n    "retries": 5,\r\n    "retry-pause": 5,\r\n    "print-time": 60,\r\n    "health-print-time": 60,\r\n    "dmi": true,\r\n    "syslog": false,\r\n    "tls": {\r\n        "enabled": false,\r\n        "protocols": null,\r\n        "cert": null,\r\n        "cert_key": null,\r\n        "ciphers": null,\r\n        "ciphersuites": null,\r\n        "dhparam": null\r\n    },\r\n    "dns": {\r\n        "ipv6": false,\r\n        "ttl": 30\r\n    },\r\n    "user-agent": null,\r\n    "verbose": 0,\r\n    "watch": true,\r\n    "pause-on-battery": false,\r\n    "pause-on-active": false\r\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:'Create a separate miner start script so that you can easily start the miner and invoke the proper cofiguration file with a single command. I like to name it "miner-zentcash.sh".'}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"sudo nano miner-zentcash.sh\n"})}),"\n",(0,t.jsx)(e.p,{children:"Place the following code into the miner-zentcash.sh file:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"#!/bin/bash\r\nsudo sysctl -w vm.nr_hugepages=8\r\n~/xmrig/build/xmrig --config=config-zentcash.json\n"})}),"\n",(0,t.jsx)(e.p,{children:"Make the file executable as a script:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"sudo chmod +x miner-zentcash.sh\n"})}),"\n",(0,t.jsx)(e.p,{children:"Now you can start the miner using the start script:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"./miner-zentcash.sh\n"})}),"\n",(0,t.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(e.p,{children:"Happy mining and make sure to support small pools and keep Zent Cash mining decentralized."})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var i=r(6540);const t={},s=i.createContext(t);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);