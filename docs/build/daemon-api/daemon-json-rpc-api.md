---
title: Daemon JSON-RPC API
sidebar_position: 3
---

The daemon JSON RPC is a HTTP server which provides JSON 2.0 RPC interface for interacting with a daemon and a block explorer.

### Configuration and Instantiation

To start the Daemon JSON RPC API server at `http://localhost:21698/json_rpc`.

```
Zentd --rpc-bind-port=21698
```

To make the server accessible from another computer, use the `--rpc-bind-ip 0.0.0.0` switch.

```
Zentd --rpc-bind-ip=0.0.0.0 --rpc-bind-port=21698
```

To enable block explorer API access (like for `getblocks`, `gettransactionpool`, etc.), use the `--enable-blockexplorer` switch.

``` 
Zentd --enable-blockexplorer
```

The above given switches can be combined to achieve remote access with block explorer methods as shown below.

```
Zentd --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=21698
```

All available methods are detailed in this *[guide](/docs/category/daemon-json-rpc-api-methods)*.

### Example of a request to call the getlastblockheader method

#### Request:
```
curl -d '{"jsonrpc":"2.0","id":1,"password":"password","method":"getlastblockheader","params":{}}' http://localhost:21699/json_rpc
```

#### Response:

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
      "depth": 0,
      "hash": "96337ae6187cf738de72debf70f9a6df05cd8989aa84e31cc1a00739973d98ac",
      "difficulty": 4844672,
      "reward": 90870,
      "num_txes": 1,
      "block_size": 389
    }
  }
}
```