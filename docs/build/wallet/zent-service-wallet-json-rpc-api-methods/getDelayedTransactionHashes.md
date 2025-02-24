Returns hashes of delayed transactions.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getDelayedTransactionHashes",
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
    "transactionHashes":["b3e374..."]
  }
}
```

### Response description:
```
    "transactionHashes": Array of strings, where each string is a transaction hash
```

