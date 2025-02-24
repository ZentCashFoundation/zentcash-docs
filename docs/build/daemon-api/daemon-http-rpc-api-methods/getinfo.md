---
sidebar_position: 3
---
Returns information related to the network and daemon connection.

**URL:** http://127.0.0.1:21698/getinfo

### Request:
```

```

### Request description:
```
  
```

### Response:
```
{
  "height": 2789083,
  "difficulty": 10132268,
  "tx_count": 690470,
  "tx_pool_size": 0,
  "alt_blocks_count": 1,
  "outgoing_connections_count": 2,
  "incoming_connections_count": 5,
  "white_peerlist_size": 4,
  "grey_peerlist_size": 23,
  "last_known_block_index": 2789081,
  "network_height": 2789083,
  "upgrade_heights": [
    0,
    1,
    2,
    3,
    11000,
    150000,
    450000,
    800000,
    1000000,
    1300000,
    1400000,
    1600000,
    1800000,
    2000000,
    2200000,
    2400000,
    2600000,
    28000000,
    30000000
  ],
  "supported_height": 28000000,
  "hashrate": 168871,
  "synced": true,
  "major_version": 6,
  "minor_version": 0,
  "version": "1.28.4",
  "status": "OK",
  "start_time": 1739630536
}
```

### Response description:
```
  "height": Daemon height. index of the last locally stored block. different from network_height when syncing the network, or when just found a block.
  "difficulty": Difficulty of the top block
  "tx_count": Total number of non-coinbase transaction in the chain.
  "tx_pool_size": Number of transactions that have been broadcast but not included in a block.
  "alt_blocks_count": The number of blocks on alternative (split) chains since the start of the daemon
  "outgoing_connections_count": Number of outgoing connections from the daemon
  "incoming_connections_count": Number of peers connected to and pulling from this daemon node
  "white_peerlist_size": List of online peers
  "grey_peerlist_size": List of peers that were alive but not any more (offline)
  "last_known_block_index": Last known block index 
  "network_height": Blockchain length reported by peers. the longest value given by any connected peer
  "upgrade_heights": Pre-determined fork heights. blockchain heights where it forked
  "supported_height": The height of the blockchain for supported fork. if forked after this block height, this version does not support it
  "hashrate": estimated network hashrate for given block (top block if general chain info) = difficulty / 60s (block time target)
  "synced": Sync status. Does the height of this node match the height of the network?
  "major_version": Blockchain major version. such as hash algorithm change
  "minor_version": Blockchain minor version. for example, difficulty algo adjustment. rarely used
  "version": Version of the daemon software
  "status": Status of request
  "start_time": The time when this daemon was started
```