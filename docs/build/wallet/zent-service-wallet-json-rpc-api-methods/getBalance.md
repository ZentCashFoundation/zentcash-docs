Returns a balance for a specified address.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getBalance",
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
    "availableBalance":10000,
    "lockedAmount":0
  }
}
```

### Response description:
```
    "availableBalance": Available balance of the specified address
    "lockedAmount": Locked amount of the specified address
```

