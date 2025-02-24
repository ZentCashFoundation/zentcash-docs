Returns information about the current RPC Wallet state: block count, known block count, last block hash and peer count.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getStatus",
    "params":{
      
    }
}
```

### Request description:
```

```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "blockCount":2791544,
    "knownBlockCount":2791543,
    "lastBlockHash":"0878d...",
    "peerCount":8
  }
}
```

### Response description:
```
    "blockCount": Node's known number of blocks
    "knownBlockCount": Maximum known number of blocks of all seeds that are connected to the node
    "lastBlockHash": Hash of the last known block
    "peerCount": Connected peers number
```

