Counts the number of unspent outputs of the specified addresses and returns how many of those outputs can be optimized. This method is used to understand if a fusion transaction can be created. If fusionReadyCount returns a value = 0, then a fusion transaction cannot be created.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"estimateFusion",
    "params":{
      "threshold":1000000,
      "addresses":["Ze....","Ze...."]
    }
}
```

### Request description:
```
    "threshold": Value that determines which outputs will be optimized. Only the outputs, lesser than the threshold value, will be included into a fusion transaction
    "addresses": Array of strings, where each string is an address to take the funds from
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "fusionReadyCount":0,
    "totalOutputCount":8
  }
}
```

### Response description:
```
    "fusionReadyCount": Number of outputs that can be optimized
    "totalOutputCount": Total number of unspent outputs of the specified addresses
```

