---
sidebar_position: 9
---
Broadcasts a raw transaction encoded in hexadecimal format to the network.

**URL:** http://127.0.0.1:21698/sendrawtransaction

### Request:
```
{
  "tx_as_hex": "00018ed1535b8b4862e.....368cdc5a86"
}
```

### Request description:
```
  "tx_as_hex": The transaction data as a hexadecimal string, ready for network broadcast
```

### Response:
```
{
  "status": "OK"
}
```

### Response description:
```
  "status": Status of the call
```