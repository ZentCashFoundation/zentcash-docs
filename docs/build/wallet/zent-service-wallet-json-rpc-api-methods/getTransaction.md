Returns information about a particular transaction.

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getTransaction",
    "params":{
        "transactionHash":"55a23..."
    }
}
```

### Request description:
```
    "transactionHash": Hash of the requested transaction
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transaction":{
      "amount":5000,
      "blockIndex":456635,
      "extra":"0134b...",
      "fee":10,
      "isBase":false,
      "paymentId":"ac9c5...",
      "state":0,
      "timestamp":1526477499,
      "transactionHash":"55a23...",
      "transfers":[
        {"address":"Ze....","amount":5000,"type":0},
        {"address":"","amount":-10000,"type":0},
        {"address":"","amount":4990,"type":0}
      ],
      "unlockTime":0
    }
  }
}
```

### Response description:
```
    "transaction": See below
        "amount": Amount of the transaction
        "blockIndex": Number of the block that contains a transaction
        "extra": Hash of the transaction
        "fee": Transaction fee
        "isBase": Shows if the transaction is a CoinBase transaction or not
        "paymentId": Payment ID of the transaction (optional) (64char hex string)
        "timestamp": Timestamp of the transaction
        "transactionHash": Hash of the transaction 
        "transfers": Array of addresses (string), amount (int)
        "unlockTime": Height of the block when transaction is going to be available for spending	
```

