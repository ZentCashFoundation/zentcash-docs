Allows you to create a combined address, containing a standard address and a paymentId, to be used in sendTransaction or for supplying to a user, instead of using an address and paymentId as separate parameters. This is helpful to ensure users cannot forget to supply a payment Id.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"createIntegratedAddress",
    "params":{
        "paymentId":"7FE73BD90EF05DEA0B5C15FC78696619C50DD5F2BA628F2FD16A2E3445B1922A", 
        "address":"Ze...."
    }
}
```

### Request description:
```
    "paymentId": A valid paymentId (64char hex string)  
    "address": A valid address
```

### Response:
```
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "integratedAddress": "Ze...."
  }
}
```

### Response description:
```
    "integratedAddress": The created integrated address
```