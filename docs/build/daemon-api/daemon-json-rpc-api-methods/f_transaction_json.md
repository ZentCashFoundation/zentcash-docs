Returns information on single transaction.

**URL:** http://127.0.0.1:21698/json_rpc

### Request:
```
{
  "jsonrpc":"2.0",
  "method":"f_transaction_json",
  "params":{
    "hash":"ccf42efeb6078edce73df21e4f26756fd01fe2417c521b11230c1d205cd06036"
  }
}
```

### Request description:
```
  "hash": Hash of the transaction
```

### Response:
```
{
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "block": {
      "cumul_size": 11764,
      "difficulty": 10671729,
      "hash": "1334d8fa4ce4c78dd0cbb04a8a4ec760b1bd07c323c53b23dacbe591a40c0a82",
      "height": 2787842,
      "timestamp": 1739570315,
      "tx_count": 3
    },
    "tx": {
      "extra": "404a0934637f0000d74a0934637f0000d74a0934637f0000",
      "unlock_time": 2787852,
      "version": 1,
      "vin": [
        {
          "type": "ff",
          "value": {
            "height": 2787842
          }
        }
      ],
      "vout": [
        {
          "amount": 5,
          "target": {
            "data": {
              "key": "e76179eaef0dfa758304d8c1a9f41109a44bf6f18cd9c04f3ec5a91c1a3a6350"
            },
            "type": "02"
          }
        },
        {
          "amount": 70,
          "target": {
            "data": {
              "key": "ee01cfd4d91b8d7d0d1ea744ef438f270b427b6163c90990b48e98ee880cbac2"
            },
            "type": "02"
          }
        },
        {
          "amount": 2000,
          "target": {
            "data": {
              "key": "621af416c90c12db95dbc97711ff8ef9ee2714d77f835619d4e1cbc370ad653d"
            },
            "type": "02"
          }
        },
        {
          "amount": 90000,
          "target": {
            "data": {
              "key": "d5f00bb4cbced0d0e2347d822712b24defe4319db7b90aaec1ddbddf3bc9371b"
            },
            "type": "02"
          }
        }
      ]
    },
    "txDetails": {
      "hash": "ccf42efeb6078edce73df21e4f26756fd01fe2417c521b11230c1d205cd06036",
      "amount_out": 92075,
      "fee": 0,
      "mixin": 0,
      "paymentId": "",
      "size": 304
    }
  }
}
```

### Response description:
```
  "status": Status of the call
  "block": Details of the block in which transaction is present
    "cumul_size": Size of the block
    "difficulty": Difficulty of the block
    "hash": Hash of the block
    "height": Height of the block
    "timestamp": The time at which the block is occured on chain since Unix epoch
    "tx_count": Number of transactions in the block
  "tx": Sub-transactions in the transaction
    "extra": Transaction extra which can be any information in hex
    "unlock_time": Delay in unlocking the amount integer
    "version": Version
    "vin": Array of input transactions
    "vout": Array of output transactions
  "txDetails": Details of the transaction
     "hash": Hash of the transaction
     "amount_out": Total amount present in the transaction
     "fee": Total fees of the transaction
     "mixin": Mixin of the transaction
     "paymentId": Payment Id of the transaction
     "size": Total size of the transaction
```