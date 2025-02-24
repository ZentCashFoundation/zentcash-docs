Creates an additional address in your wallet.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"createAddress",
    "params":{
        "spendSecretKey": "159b...",
        "spendPublicKey": "587b...",
        "newAddress": true,
        "scanHeight": 2500000
    }
}
```

:::info
The following fields are optional:
 - spendSecretKey
 - spendPublicKey
 - newAddress
 - scanHeight
:::

### Request description:
```
    "spendSecretKey": Private spend key. If spendSecretKey was specified, RPC Wallet creates spend address
    "spendPublicKey": Public spend key. If spendPublicKey was specified, RPC Wallet creates view address
    "newAddress": Is this a new address being created? If so, blocks before the creation timestamp will not be scanned. Defaults to true if neither keys are given, as it is guaranteed to be a new address.
    "scanHeight": The height to begin scanning for transactions at. Only applies if a public/secret key is supplied. This can greatly speed up wallet syncing time. 
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "address":"Ze3biEUBUC33Y1yQFsbsGne6Qon6mPXamEL65srZinuZ4d83rgsYTdegSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJrmCRBf"
  }
}
```

### Response description:
```
    "address": Address created
```