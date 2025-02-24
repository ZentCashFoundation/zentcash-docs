Returns an array of block and transaction hashes. A transaction consists of transfers. A transfer is an amount-address pair. There could be several transfers in a single transaction.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getTransactions",
    "params":{
        "addresses": ["Ze3Txm4gQZLGMo8yzTNcvUgC5eaG2j8iXYXqQzw9ZDezjnqxn17V9qEgSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJmzpute"],
        "firstBlockIndex":400000,
        "blockCount":10000000,
        "paymentId": "7fcd99c0ce5f0474265a2ceff9c1ddb48caacc7ade1516541e73b3aa38113bd0"
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
  - If paymentId parameter is set, getTransactions method returns transactions that contain specified payment ID in the given block range.
  - If addresses parameter is set, getTransactions method returns transactions that contain transfer from at least one of specified addresses.
  - If both above mentioned parameters are set, getTransactions method returns transactions that contain both specified payment ID and transfer from at least one of specified addresses.
:::

### Request description:
```
    "addresses": Array of strings, where each string is an address
    "blockHash": Hash of the starting block
    "firstBlockIndex": Starting height
    "blockCount": Number of blocks to return transaction hashes from integer
    "paymentId": Valid payment ID
```

### Response:
```
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "items": [
      {
        "blockHash": "2f0ea98d903530b68e1a79558e79d1586c008a0d9964d8b045e3b1d8b3d51739",
        "transactions": [
          {
            "amount": 80000,
            "blockIndex": 2797239,
            "extra": "0221007fcd99c0ce5f0474265a2ceff9c1ddb48caacc7ade1516541e73b3aa38113bd0015ceef3458534fb7df7163b43fd57d3f08f97f2e05678ce623affff56bfe87b44",
            "fee": 204,
            "isBase": false,
            "paymentId": "7fcd99c0ce5f0474265a2ceff9c1ddb48caacc7ade1516541e73b3aa38113bd0",
            "state": 0,
            "timestamp": 1740156456,
            "transactionHash": "6f82718b03375305bbb155675250ca03a7f7335519f1f8f4a49260d3202efb55",
            "transfers": [
              {
                "address": "Ze3Txm4gQZLGMo8yzTNcvUgC5eaG2j8iXYXqQzw9ZDezjnqxn17V9qEgSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJmzpute",
                "amount": 80000,
                "type": 0
              },
              {
                "address": "",
                "amount": -107030,
                "type": 0
              },
              {
                "address": "",
                "amount": 26826,
                "type": 0
              }
            ],
            "unlockTime": 0
          }
        ]
      }
    ]
  }
}
```

### Response description:
```
"items": Array.	
  "block_hash":	Hash of the block which contains a transaction.	
  "transactions": See below.
      "amount": Amount of the transaction.
      "blockIndex": Number of the block that contains a transaction.
      "extra": Hash of the transaction.
      "fee": Transaction fee.
      "isBase": Shows if the transaction is a CoinBase transaction or not.
      "paymentId": Payment ID of the transaction.
      "timestamp": Timestamp of the transaction.
      "transactionHash": Hash of the transaction.
      "transfers": Array of address (string), amount (int).
        "address": Address.
        "amount": Amount.
        "type": Type.
        "address": Address.
        "amount": Amount.
        "type": Type.
        "address": Address.
        "amount": Amount.
        "type": Type.
      "unlockTime": Height of the block when transaction is going to be available for spending.
```