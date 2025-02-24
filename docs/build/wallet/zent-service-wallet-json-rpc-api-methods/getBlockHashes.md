Returns an array of block hashes for a specified block range.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getBlockHashes",
    "params":{
        "firstBlockIndex":0,
        "blockCount":10
    }
}
```

### Request description:
```
    "firstBlockIndex": Starting height
    "blockCount": Number of blocks to process
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "blockHashes":[
      "7fb97...",
      ...
      "2ef06..."
    ]
  }
}
```

### Response description:
```
    "blockHashes": Array of strings, where each element is a block hash
```

