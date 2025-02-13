---
title: Optimizing Mining on a RPi
sidebar_position: 2
---

### Notes

Looking for a more general SBC setup guide? Check out [this guide](mining-with-sbc).

## Overview

To maximize your hashrate, it is very important that you select a 64-bit OS image, a quality miner and the most current compiler that you can.

## OS Image
The 64-bit Ubuntu Server for Raspberry Pi3 is a good choice:

https://ubuntu.com/download/raspberry-pi

You will need to write this image to an SD card with a utility such as [Etcher](https://www.balena.io/etcher). Once your OS is written, insert your SD Card and boot your Pi.

Once you've got it booted, you'll be asked for a username and password. These are both `ubuntu`.

Once you've logged in, you'll be asked to change the password. For the current password, enter `ubuntu` again. Then, enter a new password, and confirm it.

## Get the Latest Compiler

You will need to edit your sources.list file and add the debian testing repository in order to install gcc-8 and g++-8 on your system:

```
sudo nano /etc/apt/sources.list
```
Add this line to the end of the file:

```
deb http://ftp.us.debian.org/debian testing main contrib non-free
```

Then save it with `Ctrl-x` and then the following:

```
sudo apt-get update
sudo apt-get install gcc-8 g++-8
```

## Download Compile, and Configure Your Miner

Now you need to install the required dependencies and the latest release of the xmrig miner and compile it with gcc-8.

```bash
sudo apt-get install git build-essential cmake libuv1-dev libmicrohttpd-dev libssl-dev
git clone https://github.com/xmrig/xmrig.git
cd xmrig
sudo mkdir build
cd build
sudo cmake .. -DCMAKE_C_COMPILER=gcc-8 -DCMAKE_CXX_COMPILER=g++-8
sudo make -j4
```

Compiling the miner could take several minutes to complete. When your miner is ready you need to create a configuration file with your Zent Cash settings. Navigate to your home directory and create a file named config-zentcash.json

```bash
cd ~
sudo nano config-zentcash.json
```

Populate your configuration file with something similar to the code below. Make sure that `url`, `user`, and `pass` are populated with the your own unique and proper values.

```json
{
    "api": {
        "id": null,
        "worker-id": null
    },
    "http": {
        "enabled": false,
        "host": "127.0.0.1",
        "port": 0,
        "access-token": null,
        "restricted": true
    },
    "autosave": true,
    "background": false,
    "colors": true,
    "title": true,
    "randomx": {
        "init": -1,
        "init-avx2": -1,
        "mode": "auto",
        "1gb-pages": false,
        "rdmsr": true,
        "wrmsr": true,
        "cache_qos": false,
        "numa": true,
        "scratchpad_prefetch_mode": 1
    },
    "cpu": {
        "enabled": true,
        "huge-pages": true,
        "huge-pages-jit": false,
        "hw-aes": null,
        "priority": null,
        "memory-pool": false,
        "yield": true,
        "asm": true,
        "argon2-impl": null,
        "argon2": [0, 1, 2, 3, 4, 5, 6, 7],
        "cn": [
            [1, 0],
            [1, 2],
            [1, 4],
            [1, 6],
            [1, 7]
        ],
        "cn-heavy": [
            [1, 0],
            [1, 2],
            [1, 4]
        ],
        "cn-lite": [
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [1, 6],
            [1, 7]
        ],
        "cn-pico": [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
            [2, 4],
            [2, 5],
            [2, 6],
            [2, 7]
        ],
        "cn/upx2": [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
            [2, 4],
            [2, 5],
            [2, 6],
            [2, 7]
        ],
        "ghostrider": [
            [8, 0],
            [8, 2],
            [8, 4],
            [8, 6]
        ],
        "rx": [0, 2, 4, 6],
        "rx/wow": [0, 1, 2, 3, 4, 5, 6, 7],
        "cn-lite/0": false,
        "cn/0": false,
        "rx/arq": "rx/wow"
    },
    "opencl": {
        "enabled": false,
        "cache": true,
        "loader": null,
        "platform": "AMD",
        "adl": true,
        "cn-lite/0": false,
        "cn/0": false
    },
    "cuda": {
        "enabled": false,
        "loader": null,
        "nvml": true,
        "cn-lite/0": false,
        "cn/0": false
    },
    "log-file": null,
    "donate-level": 1,
    "donate-over-proxy": 1,
    "pools": [
        {
            "algo": "argon2/chukwa",
            "coin": null,
            "url": "YOUR_POOL_URL_PLUS_PORT_GOES_HERE",
            "user": "YOUR_ZTC_ADDRESS_GOES_HERE",
            "pass": "YOUR_MINER_NAME_GOES_HERE",
            "rig-id": null,
            "nicehash": false,
            "keepalive": false,
            "enabled": true,
            "tls": false,
            "sni": false,
            "tls-fingerprint": null,
            "daemon": false,
            "socks5": null,
            "self-select": null,
            "submit-to-origin": false
        }
    ],
    "retries": 5,
    "retry-pause": 5,
    "print-time": 60,
    "health-print-time": 60,
    "dmi": true,
    "syslog": false,
    "tls": {
        "enabled": false,
        "protocols": null,
        "cert": null,
        "cert_key": null,
        "ciphers": null,
        "ciphersuites": null,
        "dhparam": null
    },
    "dns": {
        "ipv6": false,
        "ttl": 30
    },
    "user-agent": null,
    "verbose": 0,
    "watch": true,
    "pause-on-battery": false,
    "pause-on-active": false
}
```

Create a separate miner start script so that you can easily start the miner and invoke the proper cofiguration file with a single command. I like to name it "miner-zentcash.sh".

```
sudo nano miner-zentcash.sh
```

Place the following code into the miner-zentcash.sh file:

```bash
#!/bin/bash
sudo sysctl -w vm.nr_hugepages=8
~/xmrig/build/xmrig --config=config-zentcash.json
```

Make the file executable as a script:

```
sudo chmod +x miner-zentcash.sh
```

Now you can start the miner using the start script:

```
./miner-zentcash.sh
```

## Conclusion

Happy mining and make sure to support small pools and keep Zent Cash mining decentralized.


