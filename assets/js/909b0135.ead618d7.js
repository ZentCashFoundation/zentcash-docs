"use strict";(self.webpackChunkzentcash_docs=self.webpackChunkzentcash_docs||[]).push([[9336],{2956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"build/local-testnet","title":"Local Testnet","description":"Setting up a testnet using just one PC is very easy, and lets you test things out with very minimal setup.","source":"@site/docs/build/local-testnet.md","sourceDirName":"build","slug":"/build/local-testnet","permalink":"/docs/build/local-testnet","draft":false,"unlisted":false,"editUrl":"https://github.com/ZentCashFoundation/zentcash-docs/tree/main/docs/build/local-testnet.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Local Testnet","sidebar_position":8},"sidebar":"buildSidebar","previous":{"title":"Running a Node on a Pi","permalink":"/docs/build/running-zentd-on-pi"}}');var d=t(4848),i=t(8453);const s={title:"Local Testnet",sidebar_position:8},r="Local Testnet",a={},c=[{value:"Disabling outside peers",id:"disabling-outside-peers",level:2},{value:"Clearing checkpoints",id:"clearing-checkpoints",level:2},{value:"Data directories",id:"data-directories",level:2},{value:"Launching daemons",id:"launching-daemons",level:2},{value:"Daemon 1",id:"daemon-1",level:3},{value:"Daemon 2",id:"daemon-2",level:3},{value:"Daemon 3",id:"daemon-3",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"local-testnet",children:"Local Testnet"})}),"\n",(0,d.jsx)(n.p,{children:"Setting up a testnet using just one PC is very easy, and lets you test things out with very minimal setup."}),"\n",(0,d.jsx)(n.h1,{id:"setup",children:"Setup"}),"\n",(0,d.jsx)(n.h2,{id:"disabling-outside-peers",children:"Disabling outside peers"}),"\n",(0,d.jsx)(n.p,{children:"First, we need to disable incoming peers, so they don't interfere with our testnet. This step is not mandatory, but it's likely you'll get other daemons connected to you (or you will connect to the seed nodes), messing up your testnet."}),"\n",(0,d.jsxs)(n.p,{children:["You can block the p2p port of your daemon with ",(0,d.jsx)(n.code,{children:"ufw"}),", or another firewall program."]}),"\n",(0,d.jsx)(n.p,{children:"We need to apply this to each daemon p2p port we launch."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo ufw enable\nsudo ufw deny 10000;\nsudo ufw deny 10001;\nsudo ufw deny 10002;\n"})}),"\n",(0,d.jsx)(n.p,{children:"Once you're done, and want to re-enable, either disable ufw, or run"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"sudo ufw disable\nsudo ufw allow 10000;\nsudo ufw allow 10001;\nsudo ufw allow 10002;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"clearing-checkpoints",children:"Clearing checkpoints"}),"\n",(0,d.jsxs)(n.p,{children:["If you're wanting to mine any blocks, you'll want to empty the checkpoints file. Open up ",(0,d.jsx)(n.code,{children:"src/config/CryptoNoteCheckpoints"}),", and empty the checkpoints there. Recompile."]}),"\n",(0,d.jsx)(n.h2,{id:"data-directories",children:"Data directories"}),"\n",(0,d.jsx)(n.p,{children:"First, we need three new folders to be the location for the blockchains for each daemon."}),"\n",(0,d.jsxs)(n.p,{children:["In this example, I'm simply going to use the folder ",(0,d.jsx)(n.code,{children:"a"}),", ",(0,d.jsx)(n.code,{children:"b"}),", and ",(0,d.jsx)(n.code,{children:"c"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["On linux: ",(0,d.jsx)(n.code,{children:"mkdir a b c"}),", to make the folders."]}),"\n",(0,d.jsx)(n.h1,{id:"running",children:"Running"}),"\n",(0,d.jsx)(n.h2,{id:"launching-daemons",children:"Launching daemons"}),"\n",(0,d.jsx)(n.p,{children:"Next we need to launch three daemons. Each need to have a different p2p port, different rpc port, and different data directory, to not conflict."}),"\n",(0,d.jsxs)(n.p,{children:["In the below commands, replace ",(0,d.jsx)(n.code,{children:"Zentd"})," with the name of your daemon executable, if you are a Zent Cash fork."]}),"\n",(0,d.jsx)(n.h3,{id:"daemon-1",children:"Daemon 1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"./Zentd --data-dir a --add-exclusive-node 127.0.0.1:10001 --add-exclusive-node 127.0.0.1:10002 --p2p-bind-port 10000 --rpc-bind-port 20000\n"})}),"\n",(0,d.jsx)(n.h3,{id:"daemon-2",children:"Daemon 2"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"./Zentd --data-dir b --add-exclusive-node 127.0.0.1:10000 --add-exclusive-node 127.0.0.1:10002 --p2p-bind-port 10001 --rpc-bind-port 20001\n"})}),"\n",(0,d.jsx)(n.h3,{id:"daemon-3",children:"Daemon 3"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"./Zentd --data-dir c --add-exclusive-node 127.0.0.1:10000 --add-exclusive-node 127.0.0.1:10001 --p2p-bind-port 10002 --rpc-bind-port 20002\n"})}),"\n",(0,d.jsx)(n.p,{children:"And you're done! The three daemons should connect to each other."}),"\n",(0,d.jsx)(n.p,{children:"Start up a miner, and test stuff out. Remember to use the rpc port you started one of your daemons on with your wallet/miner."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const d={},i=o.createContext(d);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);