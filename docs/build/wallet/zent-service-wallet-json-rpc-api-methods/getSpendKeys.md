Returns your spend keys.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getSpendKeys",
    "params":{
        "address":"Ze...."
    }
}
```

### Request description:
```
    "address": Valid address that exists in this container.
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "spendSecretKey":"xxxxx...",
    "spendPublicKey":"xxxxx..."
  }
}
```

### Response description:
```
    "spendSecretKey": Private spend key
    "spendPublicKey": Public spend key
```

