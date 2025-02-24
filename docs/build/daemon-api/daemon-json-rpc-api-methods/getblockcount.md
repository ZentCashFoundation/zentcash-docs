Returns the total number of blocks in the blockchain (the height of the top block plus one).

**URL:** http://127.0.0.1:21698/json_rpc

### Request:
```
{
  "jsonrpc": "2.0",
  "method": "getblockcount",
  "params": {
  }
}
```

### Request description:
```
  
```

### Response:
```
{
    "jsonrpc":"2.0",
    "result":{
        "status":"OK",
        "count":2787871
    }
}
```

### Response description:
```
  "status": Status of the call
  "count": The total number of blocks in the blockchain, equivalent to the top block's height plus one
```

