---
sidebar_position: 9
---
Returns random decoy outputs for specified amounts.

**URL:** http://127.0.0.1:21698/getrandom_outs

### Request:
```
{
  "amounts": [10000, 100000000], 
  "outs_count": 10
}
```

### Request description:
```
  "amounts": List of amounts for which decoy outputs are requested. 
  "outs_count": Number of decoy outputs requested for each amount.
```

### Response:
```
  {
  "outs": [
    {
      "amount": 10000,
      "outs": [
        {
          "global_amount_index": 522246,
          "out_key": "1a634f34ec0496b5a14a0ae14d05143771547dcc3c310a4baf72585d3253e7f3"
        },
        ...
        {
          "global_amount_index": 522257,
          "out_key": "ad448e761d9554a0c7f100420402e956bbec9e3d2b5e9305f04776ec5bbd451f"
        }
      ]
    },
    {
      "amount": 100000000,
      "outs": [
        {
          "global_amount_index": 31,
          "out_key": "7cff5624484ec575dfe167d3c5e621314ee071d960bacc6b40154d71d5bca32b"
        },
        ...  
        {
          "global_amount_index": 2256,
          "out_key": "64c68042837d9288bd2ceb0cae8ceebefb78e99257c9985951c92f7ecdb58874"
        }
      ]
    }
  ],
  "status": "OK"
}
```

### Response description:
```
"outs": List of 'outs_for_amount' structures, each containing decoys for a specific amount
  "amount": The amount for which decoys are returned
  "outs":  List of 'outs_for_amount' structures, each containing decoys for a specific amount
     "global_amount_index": Height of the block in which the output was generated
     "out_key": Output hash    
"status": Status of the call
```