---
title: Zent Service Wallet JSON-RPC API
sidebar_position: 1
---

The Zent Cash RPC Wallet is a HTTP server which provides JSON 2.0 RPC interface for Zent Cash payment operations and address management.

## Interacting with the API

### Running
Make sure you are running a locally synced zentd or point to a remote daemon with `--daemon-address` option.

```
./Zent-service --daemon-address 127.0.0.1 --daemon-port 21698 --bind-address 127.0.0.1 --bind-port 21699 --rpc-password <password> --container-file <wallet-file> --container-password <password-wallet>
```

If you don't have a container yet you can generate it by adding `--generate-container`.

```
./Zent-service --daemon-address 127.0.0.1 --daemon-port 21698 --bind-address 127.0.0.1 --bind-port 21699 --rpc-password <password> --container-file <wallet-file> --container-password <password-wallet> --generate-container
```
All available methods are detailed in this *[guide](/docs/category/zent-service-wallet-json-rpc-api-methods)*.

### Example of a request to call the getAddresses method

```
curl -d '{"jsonrpc":"2.0","id":1,"password":"password","method":"getAddresses","params":{}}' http://localhost:21699/json_rpc
```