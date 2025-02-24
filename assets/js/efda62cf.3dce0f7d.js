"use strict";(self.webpackChunkzentcash_docs=self.webpackChunkzentcash_docs||[]).push([[12],{9544:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"build/wallet/zent-service-wallet-json-rpc-api-methods/createAddress","title":"createAddress","description":"Creates an additional address in your wallet.","source":"@site/docs/build/wallet/zent-service-wallet-json-rpc-api-methods/createAddress.md","sourceDirName":"build/wallet/zent-service-wallet-json-rpc-api-methods","slug":"/build/wallet/zent-service-wallet-json-rpc-api-methods/createAddress","permalink":"/docs/build/wallet/zent-service-wallet-json-rpc-api-methods/createAddress","draft":false,"unlisted":false,"editUrl":"https://github.com/ZentCashFoundation/zentcash-docs/tree/main/docs/build/wallet/zent-service-wallet-json-rpc-api-methods/createAddress.md","tags":[],"version":"current","frontMatter":{},"sidebar":"buildSidebar","previous":{"title":"Zent Service Wallet JSON-RPC API Methods","permalink":"/docs/category/zent-service-wallet-json-rpc-api-methods"},"next":{"title":"createDelayedTransaction","permalink":"/docs/build/wallet/zent-service-wallet-json-rpc-api-methods/createDelayedTransaction"}}');var t=n(4848),i=n(8453);const d={},c=void 0,a={},l=[{value:"Request:",id:"request",level:3},{value:"Request description:",id:"request-description",level:3},{value:"Response:",id:"response",level:3},{value:"Response description:",id:"response-description",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Creates an additional address in your wallet."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"URL:"})," ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:21699/json_rpc",children:"http://127.0.0.1:21699/json_rpc"})]}),"\n",(0,t.jsx)(s.h3,{id:"request",children:"Request:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'{\r\n    "jsonrpc":"2.0",\r\n    "id":1,\r\n    "password":"password",\r\n    "method":"createAddress",\r\n    "params":{\r\n        "spendSecretKey": "159b...",\r\n        "spendPublicKey": "587b...",\r\n        "newAddress": true,\r\n        "scanHeight": 2500000\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"The following fields are optional:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"spendSecretKey"}),"\n",(0,t.jsx)(s.li,{children:"spendPublicKey"}),"\n",(0,t.jsx)(s.li,{children:"newAddress"}),"\n",(0,t.jsx)(s.li,{children:"scanHeight"}),"\n"]})]}),"\n",(0,t.jsx)(s.h3,{id:"request-description",children:"Request description:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'    "spendSecretKey": Private spend key. If spendSecretKey was specified, RPC Wallet creates spend address\r\n    "spendPublicKey": Public spend key. If spendPublicKey was specified, RPC Wallet creates view address\r\n    "newAddress": Is this a new address being created? If so, blocks before the creation timestamp will not be scanned. Defaults to true if neither keys are given, as it is guaranteed to be a new address.\r\n    "scanHeight": The height to begin scanning for transactions at. Only applies if a public/secret key is supplied. This can greatly speed up wallet syncing time. \n'})}),"\n",(0,t.jsx)(s.h3,{id:"response",children:"Response:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'{\r\n  "id":1,\r\n  "jsonrpc":"2.0",\r\n  "result":{\r\n    "address":"Ze3biEUBUC33Y1yQFsbsGne6Qon6mPXamEL65srZinuZ4d83rgsYTdegSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJrmCRBf"\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"response-description",children:"Response description:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'    "address": Address created\n'})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var r=n(6540);const t={},i=r.createContext(t);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);