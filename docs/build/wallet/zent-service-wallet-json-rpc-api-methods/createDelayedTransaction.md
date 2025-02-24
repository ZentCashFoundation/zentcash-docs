Creates a delayed transaction. Such transactions are not sent into the network automatically and should be pushed using sendDelayedTransaction method.

**URL:** http://127.0.0.1:21699/json_rpc

### Request:
```
{
    "jsonrpc":"2.0",
    "id":1,
    "password":"password",
    "method":"createDelayedTransaction",
    "params":{
      "addresses":["Ze3Txm4gQZLGMo8yzTNcvUgC5eaG2j8iXYXqQzw9ZDezjnqxn17V9qEgSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJmzpute"],
      "transfers":[
        {
          "address":"Ze3sg8L4LDCa1wBgp4FuykGzhPbngcJmzSmu6acYLW4zjarjjvBVUEUMjbYmKYfsZ6hcSTEudjnAngYfS8dYvxG32w21U7khk",
          "amount":50000
        }
      ],
      "feePerByte": 1,
      "unlockTime": 60,
      "anonymity": 3,
      "paymentId": "00000000000000000000000000577269746520446f63756d656e746174696f6e",
      "changeAddress": "Ze3Txm4gQZLGMo8yzTNcvUgC5eaG2j8iXYXqQzw9ZDezjnqxn17V9qEgSxLYyxhjWDXp32VbtEsEdTPNSj4fM7rT1LJmzpute"  
    }
}
```

:::info[Optional]
The following fields are optional:
 - addresses
 - fee
 - feePerByte
 - unlockTime
 - extra
 - paymentId
 - changeAddress
:::

:::tip[Notes]
  - If container contains only 1 address, ***changeAddress*** field can be left empty and the change is going to be sent to this address.
  - If addresses field contains only 1 address, ***changeAddress*** can be left empty and the change is going to be sent to this address.
  - In the rest of the cases, ***changeAddress*** field is mandatory and must contain an address.
  - Outputs that were used for this transactions will be locked until the transaction is sent or cancelled.
:::

### Request description:
```
    "addresses": Array of strings, where each string is an address to take the funds from.
    "transfers": Array of objects, address: (string address), amount: (int amount).	
    "fee": Transaction fee. Should be given in atomic units. Leave blank to use the minimum fee possible.
    "feePerByte": Fee to pay per byte of the transaction. Should be given in atomic units. If given, should be greater than 1.953125, the minimum network fee per byte.	
    "unlockTime": The block height at which the transaction will be unlocked for spending.
    "anonymity": Privacy.
    "extra": String of variable length. Can contain A-Z, 0-9 characters.
    "paymentId": Payment ID.
    "changeAddress": Valid and existing address in this container.
```

### Response:
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":{
    "transactionHash":"ae57e...",
    "fee": 4500
  }
}
```

### Response description:
```
    "transactionHash": Hash of the sent transaction.
    "fee": The fee of the send transaction.
```