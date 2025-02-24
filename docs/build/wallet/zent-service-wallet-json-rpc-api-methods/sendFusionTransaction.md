Allows you to send a fusion transaction, by taking funds from selected addresses and transferring them to the destination address. If there aren't any outputs that can be optimized, sendFusionTransaction will return an error. You can use estimateFusion to check the outputs, available for the optimization

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"sendFusionTransaction",
    "params":{
      "threshold": 1000000,
      "anonymity": 3,
      "addresses":["Ze3Txm4gQZLGMo8yzTNcvUgC5eaG2j8iXYXqQzw9ZDezjnqxn17V9qEgSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJmzpute"],
      "destinationAddress": "Ze3Txm4gQZLGMo8yzTNcvUgC5eaG2j8iXYXqQzw9ZDezjnqxn17V9qEgSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJmzpute"  
    }
}
```

:::info[Optional]
The following fields are optional:
 - addresses
 - destinationAddress
:::

:::tip[Notes]
  - If container contains only 1 address, ***destinationAddress*** field can be left empty and the funds are going to be sent to this address.
  - If addresses field contains only 1 address, ***destinationAddress*** can be left empty and the funds are going to be sent to this address.
  - In the rest of the cases, ***destinationAddress*** field is mandatory and must contain an address.
:::

### Request description:
```
    "threshold": Value that determines which outputs will be optimized. Only the outputs, lesser than the threshold value, will be included into a fusion transaction.
    "anonymity": Privacy.
    "addresses": Array of strings, where each string is an address to take the funds from.   
    "destinationAddress": An address that the optimized funds will be sent to. Valid and existing in this container address.
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transactionHash":"ae57e..."
  }
}
```

### Response description:
```
    "transactionHash": Hash of the sent transaction.
```