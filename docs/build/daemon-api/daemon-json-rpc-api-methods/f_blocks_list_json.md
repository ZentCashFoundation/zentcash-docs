Returns information on the last 30 blocks from height.

**URL:** http://127.0.0.1:21698/json_rpc

### Request:
```
{
  "jsonrpc": "2.0",
  "method": "f_blocks_list_json",
  "params": {
    "height":2787871
  }
}
```

### Request description:
```
  "height": Height of the last block to be included in the result.
```

### Response:
```
{
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "blocks": [ 
      {
        "cumul_size": 11764,
        "difficulty": 10671729,
        "hash": "1334d8fa4ce4c78dd0cbb04a8a4ec760b1bd07c323c53b23dacbe591a40c0a82",
        "height": 2787842,
        "timestamp": 1739570315,
        "tx_count": 3
      },
      ...
      ...
      {
        "cumul_size": 423,
        "difficulty": 10543414,
        "hash": "2b5f4de6e55ade557af425fe9df4322b1d3141e760188b7af7afcddafe4efea5",
        "height": 2787841,
        "timestamp": 1739570222,
        "tx_count": 1
      }
    ]
  }
}
```

### Response description:
```
  "status": Status of the call
  "blocks": Array		
    "cumul_size": Size of the block
    "difficulty": Difficulty of the block
    "hash": Hash of the block	
    "height": Height of the block	
    "timestamp": The time at which the block is occured on the chain since Unix epoch	
    "tx_count": Number of transactions in the block
```

