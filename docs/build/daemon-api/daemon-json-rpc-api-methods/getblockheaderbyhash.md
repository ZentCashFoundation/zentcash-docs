Retrieves the block header information for a given block hash.

**URL:** http://127.0.0.1:21698/json_rpc

### Request:
```
{
  "jsonrpc": "2.0",
  "method": "getblockheaderbyhash",
  "params": {
    "hash": "96337ae6187cf738de72debf70f9a6df05cd8989aa84e31cc1a00739973d98ac"
  }
}
```

### Request description:
```
  "hash": The hash of the block for which the header information is being requested.
```

### Response:
```
{
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "block_header": {
      "major_version": 6,
      "minor_version": 0,
      "timestamp": 1739575009,
      "prev_hash": "6089cb1151ba3a75abf9e7fdd21d56d023f04367731ca7db0534eb2cb2332edf",
      "nonce": 2147977269,
      "orphan_status": false,
      "height": 2787872,
      "depth": 12,
      "hash": "96337ae6187cf738de72debf70f9a6df05cd8989aa84e31cc1a00739973d98ac",
      "difficulty": 4844672,
      "reward": 90870,
      "num_txes": 1,
      "block_size": 389
    }
  }
}
```

### Response description:
```
  "status": Status of the call
  "major_version": Major version of the block
  "minor_version": Minor version of the block
  "timestamp": Timestamp of the block creation
  "prev_hash": Hash of the previous block in the chain
  "nonce": Nonce used for generating the block to meet the network difficulty
  "orphan_status": Indicates if the block is an orphan (true) or a normal block (false)
  "height": Height of the block in the blockchain
  "depth": Depth of the block in the blockchain. Depth 0 indicates the most recent block
  "hash": Hash of the block
  "difficulty": Network difficulty target that the block met
  "reward": Total mining reward of the block including transaction fees (if applicable)
  "num_txes": Number of transactions in the block
  "block_size": Size of the block 
```

