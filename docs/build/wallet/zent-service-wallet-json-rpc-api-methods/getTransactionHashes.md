Returns an array of block and transaction hashes. A transaction consists of transfers. A transfer is an amount-address pair. There could be several transfers in a single transaction.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getTransactionHashes",
    "params":{
      "addresses":["Ze3Txm4gQZLGMo8yzTNcvUgC5eaG2j8iXYXqQzw9ZDezjnqxn17V9qEgSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJmzpute"],
      "firstBlockIndex": 2000000,
      "blockCount": 10000000,
      "paymentId": "00000000000000000000000000577269746520446f63756d656e746174696f6e" 
    }
}
```

:::info[Optional]
The following fields are optional:
 - addresses
 - paymentId
:::

:::warning
 Only one of these parameters (***blockHash*** or ***firstBlockIndex***) is allowed.
:::

:::tip[Notes]
- If ***paymentId*** parameter is set, getTransactionHashes method returns transaction hashes of transactions that contain specified payment ID in the given block range.
- If ***addresses*** parameter is set, getTransactionHashes method returns transaction hashes of transactions that contain transfer from at least one of specified addresses.
- If both above mentioned parameters are set, getTransactionHashes method returns transaction hashes of transactions that contain both specified payment ID and transfer from at least one of specified addresses.
:::

### Request description:
```
    "addresses": Array of strings, where each string is an address to take the funds from.
    "blockHash": Hash of the starting block.
    "firstBlockIndex": Starting height.
    "blockCount": Number of blocks to return transaction hashes from.
    "paymentId": Payment ID.
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "items":[
      {
        "blockHash":"f0d8c...",
        "transactionHashes":["529ea..."]
      },
      {
        "blockHash":"4a1ae...",
        "transactionHashes":["2e709..."]
      }
    ]
  }
}
```

### Response description:
```
      "blockHash": Hash of the block which contains transaction hashes.
      "transactionHashes": Array of strings, where each string is a transaction hash.
```