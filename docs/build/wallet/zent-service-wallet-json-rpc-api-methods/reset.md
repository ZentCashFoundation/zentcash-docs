Allows you to re-sync your wallet.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"reset",
    "params":{
        "scanHeight":1000000
    }
}
```

### Request description:
```
    "scanHeight": The height to begin scanning for transactions at. This can greatly speed up wallet syncing time.
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{}
}
```

### Response description:
```

```

