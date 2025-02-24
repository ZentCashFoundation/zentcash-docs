Returns the mnemonic seed for the given deterministic address. A mnemonic seed is a list of words which can be used to recover a wallet.

**URL:** http://127.0.0.1:21699/json_rpc

:::info

The first wallet address that is generated when the container is created is the deterministic address. Only one wallet from a multi-wallet container can be deterministic. If a non-deterministic address is given, the RPC response will be an error with the message: "Keys not deterministic."

:::

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"getMnemonicSeed",
    "params":{
        "address":"Ze...."
    }
}
```

### Request description:
```
    "address": Valid deterministic address that exists in this container.
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "mnemonicSeed":"afar abducts saucepan umpire..."
  }
}
```

### Response description:
```
    "mnemonicSeed": Mnemonic seed
```

