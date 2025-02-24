"use strict";(self.webpackChunkzentcash_docs=self.webpackChunkzentcash_docs||[]).push([[864],{974:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"build/wallet/zent-service-wallet-json-rpc-api-methods/getTransactionHashes","title":"getTransactionHashes","description":"Returns an array of block and transaction hashes. A transaction consists of transfers. A transfer is an amount-address pair. There could be several transfers in a single transaction.","source":"@site/docs/build/wallet/zent-service-wallet-json-rpc-api-methods/getTransactionHashes.md","sourceDirName":"build/wallet/zent-service-wallet-json-rpc-api-methods","slug":"/build/wallet/zent-service-wallet-json-rpc-api-methods/getTransactionHashes","permalink":"/docs/build/wallet/zent-service-wallet-json-rpc-api-methods/getTransactionHashes","draft":false,"unlisted":false,"editUrl":"https://github.com/ZentCashFoundation/zentcash-docs/tree/main/docs/build/wallet/zent-service-wallet-json-rpc-api-methods/getTransactionHashes.md","tags":[],"version":"current","frontMatter":{},"sidebar":"buildSidebar","previous":{"title":"getTransaction","permalink":"/docs/build/wallet/zent-service-wallet-json-rpc-api-methods/getTransaction"},"next":{"title":"getTransactions","permalink":"/docs/build/wallet/zent-service-wallet-json-rpc-api-methods/getTransactions"}}');var r=s(4848),a=s(8453);const i={},o=void 0,c={},d=[{value:"Request:",id:"request",level:3},{value:"Request description:",id:"request-description",level:3},{value:"Response:",id:"response",level:3},{value:"Response description:",id:"response-description",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Returns an array of block and transaction hashes. A transaction consists of transfers. A transfer is an amount-address pair. There could be several transfers in a single transaction."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL:"})," ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:21699/json_rpc",children:"http://127.0.0.1:21699/json_rpc"})]}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\r\n    "jsonrpc":"2.0",\r\n    "id":1,\r\n    "password":"password",\r\n    "method":"getTransactionHashes",\r\n    "params":{\r\n      "addresses":["Ze3Txm4gQZLGMo8yzTNcvUgC5eaG2j8iXYXqQzw9ZDezjnqxn17V9qEgSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJmzpute"],\r\n      "firstBlockIndex": 2000000,\r\n      "blockCount": 10000000,\r\n      "paymentId": "00000000000000000000000000577269746520446f63756d656e746174696f6e" \r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{title:"Optional",type:"info",children:[(0,r.jsx)(n.p,{children:"The following fields are optional:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"addresses"}),"\n",(0,r.jsx)(n.li,{children:"paymentId"}),"\n"]})]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Only one of these parameters (",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"blockHash"})})," or ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"firstBlockIndex"})}),") is allowed."]})}),"\n",(0,r.jsx)(n.admonition,{title:"Notes",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"paymentId"})})," parameter is set, getTransactionHashes method returns transaction hashes of transactions that contain specified payment ID in the given block range."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"addresses"})})," parameter is set, getTransactionHashes method returns transaction hashes of transactions that contain transfer from at least one of specified addresses."]}),"\n",(0,r.jsx)(n.li,{children:"If both above mentioned parameters are set, getTransactionHashes method returns transaction hashes of transactions that contain both specified payment ID and transfer from at least one of specified addresses."}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"request-description",children:"Request description:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    "addresses": Array of strings, where each string is an address to take the funds from.\r\n    "blockHash": Hash of the starting block.\r\n    "firstBlockIndex": Starting height.\r\n    "blockCount": Number of blocks to return transaction hashes from.\r\n    "paymentId": Payment ID.\n'})}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\r\n  "id":1,\r\n  "jsonrpc":"2.0",\r\n  "result":{\r\n    "items":[\r\n      {\r\n        "blockHash":"f0d8c...",\r\n        "transactionHashes":["529ea..."]\r\n      },\r\n      {\r\n        "blockHash":"4a1ae...",\r\n        "transactionHashes":["2e709..."]\r\n      }\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"response-description",children:"Response description:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      "blockHash": Hash of the block which contains transaction hashes.\r\n      "transactionHashes": Array of strings, where each string is a transaction hash.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(6540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);