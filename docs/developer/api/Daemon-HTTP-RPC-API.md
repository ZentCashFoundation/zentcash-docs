---
title: Daemon HTTP RPC API
---

The daemon HTTP RPC is a HTTP server which provides additional information regarding network and daemon connections.

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
http://localhost:21698
```

### Configuration and Instantiation

To start the Daemon JSON RPC API server at `http://localhost:21698`, run:

`Zentd --rpc-bind-port=21698`

To make the server accessible from another computer, use the `--rpc-bind-ip 0.0.0.0` switch.

`Zentd --rpc-bind-ip=0.0.0.0 --rpc-bind-port=21698`

To enable block explorer API access (like for `getblocks`, `gettransactionpool`, etc.), use the `--enable-blockexplorer` switch.

`Zentd --enable-blockexplorer`

The above given switches can be combined to achieve remote access with block explorer methods as shown below.

`Zentd --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=21698`

This would make the RPC server accessible at

`http://<your ip address>:21698`

and, locally at

`http://localhost:21698`


To make a HTTP RPC request to your Daemon RPC you should use a GET request that looks like this:

`http://<service address>:<service port>`

| Parameter           | Description                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| `<service address>` | IP of Daemon RPC, if it is located on local machine it is either 127.0.0.1 or localhost                  |
| `<service port>`    | Daemon RPC port, by default it is bound to 21698 port, but it can be manually bound to any port you want |

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

## getheight

`getheight()` returns the height of the daemon and the network

No Input.

**Output**

| Argument       | Description            | Format |
| -------------- | ---------------------- | ------ |
| height         | Current daemon height  | int    |
| network_height | Current Network height | int    |
| status         | Status of request      | string |

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```shell
curl http://localhost:21698/getheight
```

<!--NodeJS-->
```js
daemon.getHeight().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $zentd->getHeight();
echo $response;
```

<!--Python-->
```py
response = zentd.get_height()
print(response)
```

<!--Go-->
```go
response := daemon.Height()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output

```json
{
    "height":614214,
    "network_height":614218,
    "status":"OK"
}
```

## getinfo


`getinfo()` returns information related to the network and daemon connection

No Input.

**Output**

| Argument                   | Description                                    | Format |
| -------------------------- | ---------------------------------------------- | ------ |
| alt_blocks_count           | the number of blocks on alternative (split) chains since the start of the daemon | int    |
| difficulty                 | difficulty of the top block                    | int    |
| grey_peerlist_size         | list of peers that were alive but not any more (offline) | int    |
| hashrate                   | estimated network hashrate for given block (top block if general chain info) = difficulty / 30s (block time target)                        | int    |
| height                     | daemon height. index of the last locally stored block. different from network_height when syncing the network, or when just found a block. | int    |
| incoming_connections_count | Number of peers connected to and pulling from this daemon node.   | int    |
| last_known_block_index     | ?                                              | int    |
| major_version              | blockchain major version. such as hash algorithm change   | int    |
| minor_version              | blockchain minor version. for example, difficulty algo adjustment. rarely used. | int    |
| network_height             | blockchain length reported by peers. the longest value given by any connected peer.  | int    |
| outgoing_connections_count | number of outgoing connections from the daemon | int    |
| start_time                 | the time when this daemon was started. epoch time in seconds | int    |
| status                     | Status of request                              | string |
| supported_height           | the height of the blockchain for supported fork. if forked after this block height, this version does not support it | int    |
| synced                     | sync status. does the height of this node match the height of the network? | bool   |
| testnet                    | whether the daemon is on testnet or not        | bool   |
| tx_count                   | Total number of non-coinbase transaction in the chain.  | int    |
| tx_pool_size               | Number of transactions that have been broadcast but not included in a block. | int    |
| upgrade_heights            | pre-determined fork heights. blockchain heights where it forked. | array  |
| version                    | version of the daemon software                  | string |
| white_peerlist_size        | list of online peers                           | int    |


<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```shell
curl http://localhost:21698/getinfo
```

<!--NodeJS-->
```js
daemon.getInfo().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $zentd->getInfo();
echo $response;
```

<!--Python-->
```py
response = zentd.get_info()
print(response)
```

<!--Go-->
```go
response := daemon.Info()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output

```json
{
    "height": 1375539,
    "difficulty": 31570253,
    "tx_count": 354142,
    "tx_pool_size": 0,
    "alt_blocks_count": 0,
    "outgoing_connections_count": 6,
    "incoming_connections_count": 2,
    "white_peerlist_size": 13,
    "grey_peerlist_size": 189,
    "last_known_block_index": 1375537,
    "network_height": 1375539,
    "upgrade_heights": [
      0,
      1,
      2,
      3,
      11000,
      150000,
      450000,
      800000,
      1000000,
      1300000,
      1400000,
      1600000,
      1800000,
      2000000,
      2200000,
      2400000,
      2600000,
      2800000,
      3000000
    ],
    "supported_height": 1400000,
    "hashrate": 526170,
    "synced": true,
    "major_version": 5,
    "minor_version": 0,
    "version": "1.26.0",
    "status": "OK",
    "start_time": 1633954817
}
```

## gettransactions

`gettransactions()` method returns list of missed transactions.
"Missed transactions" are invalid transactions in the sense that they do not exist in the blockchain.
Input should include the transaction hashes to check. Try figuring that out.
This method is likely to go away in near future.

No Input

**Output**

| Argument   | Description                                | Format |
| ---------- | ------------------------------------------ | ------ |
| missed_tx  | array of missed transactions               | array  |
| status     | Status of request                          | string |
| txs_as_hex | array of hex values of missed transactions | array  |

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```shell
curl http://localhost:21698/gettransactions
```

<!--NodeJS-->
```js
daemon.getTransactions({
  hashes: [
    '6f2dba2529a7e03376e34b61a50d48219bba576f022b87411553b5dc0a08df7b',
    'b2e83c70159e7d0267ec887d02dad27c76c8f44e96628f0d03c0a8013c4c6920'
  ]
}).then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $zentd->getTransactions();
echo $response;
```

<!--Python-->
```py
response = zentd.get_transactions()
print(response)
```

<!--Go-->
```go
Not Implemented
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output

```json
{
    "missed_tx":[],
    "status":"OK",
    "txs_as_hex":[]
}
```

## getpeers

`getpeers()` method returns the list of peers connected to the daemon

No Input.

**Output**

| Argument | Description                        | Format |
| -------- | ---------------------------------- | ------ |
| peers    | array of peers (peer_ip:peer_port) | array  |
| status   | Status of request                  | string |

<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```shell
curl http://localhost:21698/getpeers
```

<!--NodeJS-->
```js
daemon.getPeers().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $zentd->getPeers();
echo $response;
```

<!--Python-->
```py
response = zentd.get_peers()
print(response)
```

<!--Go-->
```go
response := daemon.Peers()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output

```json
{
    "peers":[
        "95.216.206.136:21688",
        "95.216.169.11:21688",
        "95.216.207.172:21688",
        "95.216.191.56:21688",
        "65.21.176.77:21688",
        "135.181.149.197:21688",
        .....
    ],
    "status":"OK"
}
```

## feeinfo

`feeinfo()` method returns information about the fee set for the remote node.

No Input.

**Output**

| Argument | Description                      | Format |
| -------- | -------------------------------- | ------ |
| address  | address to which the fee is paid | string |
| amount   | fee amount                       | int    |
| status   | Status of fees for the node      | string |


<!--DOCUSAURUS_CODE_TABS-->

<!--Shell-->
```shell
curl http://localhost:21698/feeinfo
```

<!--NodeJS-->
```js
daemon.feeInfo().then((result) => {
  // do something
}).catch((error) => {
  // do something
})
```

<!--PHP-->
```php
<?php
$response = $zentd->getFeeInfo();
echo $response;
```

<!--Python-->
```py
response = zentd.get_fee_info()
print(response)
```

<!--Go-->
```go
response := daemon.Fee()
fmt.Println(response)
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Expected Output

```json
{
    "address": "Ze4tc4mTG137cG3i5oa8yLAW4iZvPoRVsEx5dGRhiEcoEWEVCBvc4hB6fcDyqE2FoWPpLWnGGswq19yqsFi1bhDd1XnDmtD6T",
    "amount": 100,
    "status": "OK"
}
```

## License

[![Creative Commons License](../../assets/cc-by-sa.png)](https://creativecommons.org/licenses/by-sa/3.0/)

The content in this document was originally written by the [Bytecoin (BCN) Developers](https://bytecoin.org/). It is licensed under the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). The source material can be found at the [Bytecoin Wiki](https://github.com/bcndev/bytecoin).

Also of note, Zent Cash Developers have altered and adapted the content to suit our implementation of the API. This was done independently of the Bytecoin development team. They neither endorse or acknowledge our changes. Feel free to adopt or change our content as per the [CC BY SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/) requirements.

