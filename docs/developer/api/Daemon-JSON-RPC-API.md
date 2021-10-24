---
title: Daemon JSON RPC API
---

The daemon JSON RPC is a HTTP server which provides JSON 2.0 RPC interface for interacting with a daemon and a block explorer.

Currently we support the following official client bindings:

* [NodeJS](https://www.npmjs.com/package/zentcash-rpc)
* [PHP](https://github.com/ZentCashFoundation/zentcash-rpc-php)
* [Python](https://github.com/ZentCashFoundation/zentcash-rpc-python)
* [Go](https://github.com/ZentCashFoundation/zentcash-rpc-go)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--NodeJS-->
```
npm i zentcash-rpc
```

<!--PHP-->
```
composer require ZentCashFoundation/zentcash-rpc-php
```

<!--Python-->
```
pip3 install zentcash
```

<!--Go-->
```
go get github.com/ZentCashFoundation/zentcash-rpc-go
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Interacting with the API

### API endpoint example

```
http://localhost:21698/json_rpc
```

### Configuration and Instantiation

To start the Daemon JSON RPC API server at `http://localhost:21698/json_rpc`, run:

`Zentd --rpc-bind-port=21698`

To make the server accessible from another computer, use the `--rpc-bind-ip 0.0.0.0` switch.

`Zentd --rpc-bind-ip=0.0.0.0 --rpc-bind-port=21698`

To enable block explorer API access (like for `getblocks`, `gettransactionpool`, etc.), use the `--enable-blockexplorer` switch.

`Zentd --enable-blockexplorer`

The above given switches can be combined to achieve remote access with block explorer methods as shown below.

`Zentd --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=21698`

This would make the RPC server accessible at

`http://<your ip address>:21698/json_rpc`

and, locally at

`http://localhost:21698/json_rpc`


To make a JSON RPC request to your Daemon RPC you should use a GET request that looks like this:

`http://<service address>:<service port>/json_rpc`

Parameter            | Description
-------------------- | ------------------------------------------------------------
`<service address>`  | IP of Daemon RPC, if it is located on local machine it is either 127.0.0.1 or localhost
`<service port>`     | Daemon RPC port, by default it is bound to 21698 port, but it can be manually bound to any port you want

<!--DOCUSAURUS_CODE_TABS-->

<!--NodeJS-->
```js
const Zentd = require('zentcash-rpc').Zentd

const daemon = new Zentd({
  host: '0.0.0.0', // ip address or hostname of the Zentd host
  port: 21698, // what port is the RPC server running on
  timeout: 2000, // request timeout
  ssl: false // whether we need to connect using SSL/TLS
})
```

<!--PHP-->
```php
<?php
use ZentCash\Zentd;

$config = [
    'rpcHost' => 'http://localhost',
    'rpcPort' => 21698,
];

$zentd = new Zentd($config);
```

<!--Python-->
```py
from zentcash import Zentd

rpc_host = 'localhost'
rpc_port = 21698
zentd = Zentd(rpc_host, rpc_port)
```

<!--Go-->
```go
import (
    "fmt"
    trpc "github.com/ZentCashFoundation/zentcash-rpc-go"
)

rpcHost := "localhost"
rpcPort := 21698

daemon := trpc.Zentd{
    URL: rpcHost,
    Port: rpcPort}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## getblockcount

`getblockcount()` method returns the current chain height.

No Input.

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
count            | Current chain height | int
status           | Status of request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0", "method":"getblockcount", "params":{}}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockCount().then((blockCount) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $zentd->getBlockCount();
echo $response;
```

<!--Python-->
```py
response = zentd.get_block_count()
print(response)
```

<!--Go-->
```go
response := daemon.GetBlockCount()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->


#### Expected Output

```json
{
    "jsonrpc":"2.0",
    "result":{
        "count":123457,
        "status":"OK"
    }
}
```

## getblockhash

`getblockhash()` method returns block hash for a given height off by one.

**Input**

Argument        | Mandatory     | Description           | Format
--------------- | ------------- | --------------------- | ------
height          | Yes           | The height of the block whose previous hash is to be retrieved. | int

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
result           | Hash of previous block | int

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"on_getblockhash","params":[123456]}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockHash({
  height: 123456
}).then((blockHash) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$height = 123456;
$response = $zentd->getBlockHash($height);
echo $response;
```

<!--Python-->
```py
height = 123456
response = zentd.get_block_hash(height)
print(response)
```

<!--Go-->
```go
height := 123456
response := daemon.GetBlockHash(height)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":"1d20902..."
}
```

## getblocktemplate

`getblocktemplate(reserve_size, addr)` method returns blocktemplate with an empty "hole" for nonce.

**Input**

Argument | Mandatory | Description | Format
-------- | -------- | ------------- | -----
reserve_size | Yes | Size of the reserve to be specified | int
wallet_address | Yes | Valid Zent Cash Wallet address | String

**Output**

Argument | Description | Format
-------- | ---------- | ------
blocktempate_blob | Blocktemplate with empty "hole" for nonce | string
difficulty | Difficulty of the network | int
height | Chain height of the network | int
reserved_offset | Offset reserved | int
status | Status of the network | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getblocktemplate","params":{"reserve_size":200,"wallet_address":"Zexxxx..."}}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockTemplate({
  reserveSize: 200,
  walletAddress: 'Ze3iyuhaF8S3FxWgX3nqXodakwxqNzzgXgz4xGezWHPfRt3CsFDeV7EccVykYByuVeTnxTbwUh4CeBM21ftZKMn82QHzRSDe9'
}).then((blockTemplate) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$reserveSize = 200;
$address = 'Zexxxx...';
$response = $zentd->getBlockTemplate($reserveSize, $address);
echo $response;
```

<!--Python-->
```py
reserve_size = 200
wallet_address = 'Zexxxx...'

response = zentd.get_block_template(reserve_size, wallet_address)
print(response)
```

<!--Go-->
```go
reserveSize := 200
walletAddress := "Zexxxx..."

response := daemon.GetBlockTemplate(reserveSize, walletAddress)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
	"jsonrpc": "2.0",
	"result": {
		"blocktemplate_blob": "1d2090...",
		"difficulty": 16508342,
		"height": 123456,
		"reserved_offset": 395,
		"status": "OK"
	}
}
```

## submitblock

`submitblock(block_blob)` method submits mined block.

**Input**

Argument | Mandatory | Description | Format
-------- | -------- | ------------- | -----
block_blob | Yes | Block blob of the mined block | string

**Output**

Argument         | Description          | Format
---------------- | -------------------- | ------
status           | Status of request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"submitblock","params":["0100f...."]}' https://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.submitBlock({
  blockBlob: '...'
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$blockBlob = '0100f...';
$response = $zentd->submitBlock($blockBlob);
echo $response;
```

<!--Python-->
```py
block_blob = '0100f...'
response = zentd.submit_block(block_blob)
print(response)
```

<!--Go-->
```go
blockBlob := "0100f..."
response := daemon.SubmitBlock(blockBlob)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
	"jsonrpc": "2.0",
	"result": {
		"status" : "OK"
	}
}
```

## getlastblockheader

`getlastblockheader` method returns the block header of the last block.

No Input

**Output**

Argument | Description | Format
------- | ---------- | --------
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the last block | int
hash | hash of the last block | string
height | height of the last block | int
major_version | - | int
minor_version | - | int
nonce | - | int
num_txs | Number of transactions in the block | int
orphan_status | whether the last block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | the time at which the block is occured on chain since Unix epoch | int
status | status of the request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getlastblockheader","params":{}}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getLastBlockHeader().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $zentd->getLastBlockHeader();
echo $response;
```

<!--Python-->
```py
response = zentd.get_last_block_header()
print(response)
```

<!--Go-->
```go
response := daemon.GetLastBlockHeader()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block_header":{
            "block_size":20298,
            "depth":0,
            "difficulty":34594435,
            "hash":"dc7be1...",
            "height":1372718,
            "major_version":5,
            "minor_version":0,
            "nonce":2053323799,
            "num_txes":3,
            "orphan_status":false,
            "prev_hash":"97a877...",
            "reward":180144,
            "timestamp":1633793105
        },
        "status":"OK"
    }
}
```

## getblockheaderbyhash

`getblockheaderbyhash()` returns block header by given block hash

**Input**

Argument | Mandatory | Description | Format
-------- | ---------- | ----------- | -----
hash | Yes   | Hash of the block | string

**Output**

Argument | Description | Format
------- | ---------- | --------
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the requested block | int
hash | hash of the requested block | string
height | height of the requested block | int
major_version | - | int
minor_version | - | int
nonce | - | int
num_txs | Number of transactions in the block | int
orphan_status | whether the requested block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | the time at which the block is occured on chain since Unix epoch | int
status | status of the request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getblockheaderbyhash","params":{"hash":"dc7be..."}}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockHeaderByHash({
  hash: 'dc7be19d5d304453ec909fd947e7c7818b3044bb53623bffd18f6bf4af84590e'
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$hash = 'dc7be...';
$response = $zentd->getBlockHeaderByHash($hash);
echo $response;
```

<!--Python-->
```py
hash = 'dc7be...'
response = zentd.get_block_header_by_hash(hash)
print(response)
```

<!--Go-->
```go
hash := "dc7be..."
response := daemon.GetBlockHeaderByHash(hash)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block_header":{
            "block_size":20298,
            "depth":313,
            "difficulty":34594435,
            "hash":"dc7be19...",
            "height":1372718,
            "major_version":5,
            "minor_version":0,
            "nonce":2053323799,
            "num_txes":3,
            "orphan_status":false,
            "prev_hash":"97a8775...",
            "reward":180144,
            "timestamp":1633793105
        },
    "status":"OK"
    }
}
```

## getblockheaderbyheight

`getblockheaderbyheight()` method returns block header by given block height

**Input**

Argument | Mandatory | Description | Format
------ | ----------- | ----------- | -----
height | Yes   | Height of the block | int

**Output**

Argument | Description | Format
------- | ---------- | --------
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the requested block | int
hash | hash of the requested block | string
height | height of the requested block | int
major_version | - | int
minor_version | - | int
nonce | - | int
num_txs | Number of transactions in the block | int
orphan_status | whether the requested block was an orphan or not | bool
prev_hash | hash of the previous block | string
reward | reward of the block | str
timestamp | the time at which the block is occured on chain since Unix epoch | int
status | status of the request | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getblockheaderbyheight","params":{"height":123456}}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlockHeaderByHeight({
  height: 123456
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$height = 123456;
$response = $zentd->getBlockHeaderByHeight($height);
echo $response;
```

<!--Python-->
```py
height = 123456
response = zentd.get_block_header_by_height(height)
print(response)
```

<!--Go-->
```go
height := 123456
response := daemon.GetBlockHeaderByHeight(height)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block_header":{
            "block_size":3998,
            "depth":1249639,
            "difficulty":16508342,
            "hash":"1d2090...",
            "height":123456,
            "major_version":4,
            "minor_version":0,
            "nonce":8388609,
            "num_txes":2,
            "orphan_status":false,
            "prev_hash":"fb98c86...",
            "reward":323705,
            "timestamp":1558207930
        },
    "status":"OK"
    }
}
```

## getcurrencyid

`getcurrencyid()` method returns unique currency identifier.

No Input

**Output**

Argument | Description | Format
-------- | ----------- | ------
currency_id_blob | unique currency identifier | string

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"getcurrencyid","params":{}}' http://localhost:21698/json_rpc
```


<!--NodeJS-->
```js
daemon.getCurrencyId().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $zentd->getCurrencyId();
echo $response;
```

<!--Python-->
```py
response = zentd.get_currency_id()
print(response)
```

<!--Go-->
```go
response := daemon.GetCurrencyID()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "currency_id_blob":"054a98b..."
    }
}
```

## getblocks

`getblocks()` method returns information on the last 30 blocks from height (inclusive)

**Input**

Argument        | Mandatory     | Description           | Format
--------------- | ------------- | --------------------- | ------
height          | Yes           | height of the last block to be included in the result. | int

**Output**

Argument |              | Description                           | Format
-------- | ------------ | -----------                           | ------
status   |              | status of the request                 | string
blocks   | **Array of** |                                       |
         | cumul_size   | size of the block                     | int
         | difficulty   | difficulty of the block               | int
         | hash         | hash of the block                     | string
         | height       | height of the block                   | int
         | timestamp    | the time at which the block is occured on the chain since Unix epoch | int
         | tx_count     | number of transactions in the block   | int


<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"f_blocks_list_json","params":{"height":500000}}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlocks({
  height: 500000
}).then((blocks) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$height = 500000;
$response = $zentd->getBlocks($height);
echo $response;
```

<!--Python-->
```py
height = 500000
response = zentd.get_blocks(height)
print(response)
```

<!--Go-->
```go
height := 500000
response := daemon.GetBlocks(height)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc": "2.0",
    "result": {
        "blocks":[
            {
                "cumul_size": 357,
                "difficulty": 8206188,
                "hash": "b3e975...",
                "height": 500000,
                "timestamp": 1580954386,
                "tx_count": 1
            }
        ],
        "status": "OK"
    }
}
```


## getblock

`getblock()` method returns information on a single block

**Input**

Argument        | Mandatory     | Description           | Format
--------------- | ------------- | --------------------- | ------
hash            | Yes           | hash of the block     | string

**Output**

Argument | Description | Format
------- | ---------- | --------
alreadyGeneratedCoins | total number of coins generated in the network upto that block | string
alreadyGeneratedTransactions | total number of transactions present in the network upto that block | int
baseReward | calculated reward | int
block_size | size of the block | int
depth | height away from the known top block | int
difficulty | difficulty of the requested block | int
effectiveSizeMedian | fixed constant for max size of block | int
hash | hash of the requested block | string
height | height of the requested block | int
major_version | - | int
minor_version | - | int
nonce | - | int
orphan_status | whether the requested block was an orphan or not | bool
penalty | penalty in block reward determined for deviation | float
prev_hash | hash of the previous block | string
reward | total reward of the block after removing penalty | str
sizeMedian | calculated median size from last 100 blocks | int
timestamp | the time at which the block is occured on chain since Unix epoch | int
totalFeeAmount | total fees for the transactions in the block | int
transactions | Array of transactions in the block | array
transactionsCumulativeSize | total sum of size of all transactions in the block | int
status | status of the request | string

Transaction Attributes:

Argument | Description | Format
------- | ---------- | --------
amount_out | output amount of the transaction | int
fee | fees for the transaction | int
hash | hash of the transaction | string
size | size of the transaction | int

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"f_block_json","params":{"hash":"83dd5..."}}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getBlock({
  hash: '83dd51cc4d4e443c973bf0db59e2c92ffef3bd30d9a351b0fd32763d86a3f320'
}).then((block) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$hash = '83dd5...';
$response = $zentd->getBlock($hash);
echo $response;
```

<!--Python-->
```py
hash = '83dd5...'
response = zentd.get_block(hash)
print(response)
```

<!--Go-->
```go
hash := "83dd5..."
response := daemon.GetBlock(hash)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block":{
            "alreadyGeneratedCoins":"375902459079",
            "alreadyGeneratedTransactions":1726883,
            "baseReward":178383,
            "blockSize":35481,
            "depth":19,
            "difficulty":39618954,
            "effectiveSizeMedian":100000,
            "hash":"83dd5...",
            "height":561537,
            "major_version":5,
            "minor_version":0,
            "nonce":3451916274,
            "orphan_status":false,
            "penalty":0,
            "prev_hash":"be37a...",
            "reward":181914,
            "sizeMedian":307,
            "timestamp":1633818273,
            "totalFeeAmount":3531,
            "transactions":[
                {
                    "amount_out":3399628,
                    "fee":716,
                    "hash":"5ba00c5...",
                    "size":7013
                }
            ],
            "transactionsCumulativeSize":34809
        },
        "status":"OK"
    }
}
```

## gettransaction

`gettransaction()` method returns information on single transaction.

**Input**

Argument        | Mandatory     | Description                   | Format
--------------- | ------------- | ---------------------         | ------
hash            | Yes           | hash of the transaction       | string

**Output**

Argument | Description | Format
------- | ---------- | --------
block | details of the block in which transaction is present | json object
status | status of the request | string
tx | sub-transactions in the transaction | json object
txDetails | details of the transaction | json object

Block attributes:

Argument | Description | Format
------- | ---------- | --------
cumul_size | size of the block | int
difficulty | difficulty of the block | int
hash | hash of the block | string
height | height of the block | int
timestamp | the time at which the block is occured on chain since Unix epoch | int
tx_count | number of transactions in the block | int

Transaction Details attributes:

Argument | Description | Format
------- | ---------- | --------
amount_out | total amount present in the transaction | int
fee | total fees of the transaction | int
hash | hash of the transaction | string
mixin | mixin of the transaction | int
paymentId | payment Id of the transaction | string
size | total size of the transaction | int

Transaction attributes:

Argument | Description | Format
------- | ---------- | --------
extra | Transaction extra which can be any information in hex | string
unlock_time | delay in unlocking the amount | int
version | - | int
vin | array of input transactions | array
vout | array of output transactions | array

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"f_transaction_json","params":{"hash":"44d052..."}}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getTransaction({
  hash: '44d05243370fdef6de9bd9156229b33bdbd825d5c44165d9920bad6167562646'
}).then((transaction) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$hash = '44d05...';
$response = $zentd->getTransaction($hash);
echo $response;
```

<!--Python-->
```py
hash = '44d05...'
response = zentd.get_transaction(hash)
print(response)
```

<!--Go-->
```go
hash := "44d05..."
response := daemon.GetTransaction(hash)
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "block":{
            "cumul_size":35481,
            "difficulty":39618954,
            "hash":"83dd51...",
            "height":1373135,
            "timestamp":1633818273,
            "tx_count":5
        },
        "status":"OK",
        "tx":{
            "extra":"50580...",
            "unlock_time":1373145,
            "version":1,
            "vin":[
                {
                    "type":"ff",
                    "value":{
                        "height":1373135
                    }
                }
            ],
            "vout":[
                {
                    "amount": 4,
                    "target": {
                        "data": {
                          "key": "00fa36..."
                        },
                        "type": "02"
                    }
                }
            ]
        },
        "txDetails":{
            "amount_out":181914,
            "fee":0,
            "hash":"44d052...",
            "mixin":0,
            "paymentId":"",
            "size":307
        }
    }
}
```

## gettransactionpool

`gettransactionpool()` returns the list of transaction hashes present in mempool

No Input

**Output**

Argument | Description | Format
------- | ---------- | --------
status | status of the request | string
transactions | array of transactions in mempool | array

Transactions attributes:

Argument | Description | Format
------- | ---------- | --------
amount_out | output amount of the transaction | int
fee | fees for the transaction | int
hash | hash of the transaction | string
size | size of the transaction | int

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```sh
curl -d '{"jsonrpc":"2.0","method":"f_on_transactions_pool_json","params":{}}' http://localhost:21698/json_rpc
```

<!--NodeJS-->
```js
daemon.getTransactionPool().then((transactions) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $zentd->getTransactionPool();
echo $response;
```

<!--Python-->
```py
response = zentd.get_transaction_pool()
print(response)
```

<!--Go-->
```go
response := daemon.GetTransactionPool()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output:

```json
{
    "jsonrpc":"2.0",
    "result":{
        "status":"OK",
        "transactions":[
            {
                "amount_out":548854,
                "fee":435,
                "hash":"0f681...",
                "size":4187
            }
        ]
    }
}
```


## License

[![Creative Commons License](../../assets/cc-by-sa.png)](https://creativecommons.org/licenses/by-sa/3.0/)

The content in this document was originally written by the [Bytecoin (BCN) Developers](https://bytecoin.org/). It is licensed under the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). The source material can be found at the [Bytecoin Wiki](https://github.com/bcndev/bytecoin).

Also of note, Zent Cash Developers have altered and adapted the content to suit our implementation of the API. This was done independently of the Bytecoin development team. They neither endorse or acknowledge our changes. Feel free to adopt or change our content as per the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/) requirements.
