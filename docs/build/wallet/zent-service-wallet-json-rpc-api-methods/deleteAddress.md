Deletes a specified address.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"deleteAddress",
    "params":{
        "address":"Ze...."
    }
}
```

### Request description:
```
    "address": An address to be deleted.
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

