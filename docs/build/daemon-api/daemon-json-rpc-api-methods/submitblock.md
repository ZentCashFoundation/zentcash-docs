Adds new block to the blockchain. Request should contain one string with hex-encoded block blob.

**URL:** http://127.0.0.1:21698/json_rpc

### Request:
```
{
  "jsonrpc":"2.0",
  "method":"submitblock",
  "params":["0100f...."]
}
```

### Request description:
```
  "block_blob":	Block blob of the mined block	
```

### Response:
```
  {
    "jsonrpc": "2.0",
    "result": {
      "status" : "OK"
    }
  }
```

### Response description:
```
  "status": Status of the call.
```

