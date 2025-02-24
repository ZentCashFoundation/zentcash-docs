Returns information on a single block.

**URL:** http://127.0.0.1:21698/json_rpc

### Request:
```
{
  "jsonrpc":"2.0",
  "method":"f_block_json",
  "params":{
    "hash":"1334d8fa4ce4c78dd0cbb04a8a4ec760b1bd07c323c53b23dacbe591a40c0a82"
  }
}
```

### Request description:
```
  "hash": Hash of the block
```

### Response:
```
{
 "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "block": {
      "major_version": 6,
      "minor_version": 0,
      "timestamp": 1739570315,
      "prev_hash": "2b5f4de6e55ade557af425fe9df4322b1d3141e760188b7af7afcddafe4efea5",
      "nonce": 3861268722,
      "orphan_status": false,
      "height": 2787842,
      "depth": 78,
      "hash": "1334d8fa4ce4c78dd0cbb04a8a4ec760b1bd07c323c53b23dacbe591a40c0a82",
      "difficulty": 10671729,
      "reward": 92075,
      "blockSize": 11764,
      "transactionsCumulativeSize": 11581,
      "alreadyGeneratedCoins": "559427396805",
      "alreadyGeneratedTransactions": 3478066,
      "sizeMedian": 304,
      "baseReward": 90872,
      "penalty": 0,
      "effectiveSizeMedian": 100000,
      "transactions": [
        {
          "hash": "ccf42efeb6078edce73df21e4f26756fd01fe2417c521b11230c1d205cd06036",
          "fee": 0,
          "amount_out": 92075,
          "size": 304
        },
        {
          "hash": "4e0dc33de14fc96ce97434ad2cf4103ddc2647e2a14af0de0c292cd8c5360d42",
          "fee": 384,
          "amount_out": 298384,
          "size": 3542
        },
        {
          "hash": "b377bf608463999aa13150907950b0dba9641fb67a139a260f5d3ed63478f2f3",
          "fee": 819,
          "amount_out": 998779,
          "size": 7735
        }
      ],
      "totalFeeAmount": 1203
    }
  }
}
```

### Response description:
```
  "status": Status of the call
  "block"
    "major_version": Major version of the block
    "minor_version": Minor version of the block
    "timestamp": Timestamp of the block creation
    "prev_hash": Hash of the previous block
    "nonce": Nonce used for generating the block to meet the network difficulty
    "orphan_status": Whether the requested block was an orphan or not
    "height": Height of the requested block
    "depth": Height away from the known top block
    "hash": Hash of the requested block
    "difficulty": Difficulty of the requested block
    "reward": Total reward of the block after removing penalty
    "blockSize": Size of the block
    "transactionsCumulativeSize": Total sum of size of all transactions in the block
    "alreadyGeneratedCoins": Total number of coins generated in the network upto that block
    "alreadyGeneratedTransactions": Total number of transactions present in the network upto that block
    "sizeMedian": Calculated median size from last 100 blocks
    "baseReward": Calculated reward
    "penalty": Penalty in block reward determined for deviation
    "effectiveSizeMedian": Fixed constant for max size of block
    "transactions": Array
      "hash": Hash of the transaction
      "fee": Fees for the transaction
      "amount_out": Output amount of the transaction
      "size": Size of the transaction  
```