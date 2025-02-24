---
title: Daemon HTTP-RPC API
sidebar_position: 1
---

The daemon HTTP RPC is a HTTP server which provides additional information regarding network and daemon connections.

## Interacting with the API

### Configuration and Instantiation

To start the Daemon JSON RPC API server at `http://localhost:21698`

```
Zentd --rpc-bind-port=21698
```

To make the server accessible from another computer, use the `--rpc-bind-ip 0.0.0.0` switch.

```
Zentd --rpc-bind-ip=0.0.0.0 --rpc-bind-port=21698
```

To enable block explorer API access (like for `getfee`, `getpeers`, etc.), use the `--enable-blockexplorer` switch.

```
Zentd --enable-blockexplorer
```

The above given switches can be combined to achieve remote access with block explorer methods as shown below.

```
Zentd --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=21698
```

All available methods are detailed in this *[guide](/docs/category/daemon-http-rpc-api-methods)*.