Returns an array of your RPC Wallet's addresses.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getAddresses",
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
    "addresses":[
      "Ze....",
      "Ze...."
    ]
  }
}
```

### Response description:
```
    "addresses": Array of strings, where each string is an address
```

