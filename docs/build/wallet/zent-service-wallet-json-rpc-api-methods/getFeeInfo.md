Retrieves the fee and address to which the fee is paid for using the remote node you are connecting to. This fee will be automatically added to any transaction sent by sendTransaction or sendDelayedTransaction. Note that it does not apply to sendFusionTransaction.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getFeeInfo",
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
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "address": "Ze....",
    "amount": 5000
  }
}
```

### Response description:
```
    "address": The address of the node owner
    "amount": The fee that will be sent to the node owners address with each transaction
```

