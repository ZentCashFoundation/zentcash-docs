Returns information about the current unconfirmed transaction pool or for a specified addresses.

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getUnconfirmedTransactionHashes",
    "params":{
        "addresses":["Ze...."]
    }
}
```

### Request description:
```
    "addresses": Array of strings, where each string is a valid address.
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transactionHashes":[
      "55a23..."
    ]
  }
}
```

### Response description:
```
    "transactionHashes": Array of strings, where each string is a hash of an unconfirmed transaction
```

