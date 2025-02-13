---
title: Mining with NinjaRig
sidebar_position: 5
---

## Downloading and Installing for Windows or Linux

NinjaRig can be downloaded from the [GitHub page](https://github.com/ZentCashFoundation/ninjarig/release).

## NinjaRig Setup and Configuration

1. Unzip the file and extract the files into a new folder (Make sure your anti-virus doesn't delete the files)
2. Open the `config.json` file with Notepad
3. Find and change the following lines:

```
   algo: "[algorithm]"
   url: "[pool address]"
   user: "[wallet address]"
   variant: "[variant]"
```

  - Instead of `[algorithm]`, simply type `chukwa`.
  - In place of `[pool address]`, you'll need to choose a pool to mine towards. You can learn more about them [here](../pools). 
  - Instead of `[wallet address]`, simply paste your Zent Cash wallet's address.
    - If you don't have one yet, you can find out how to create a wallet here.
  - Instead of `[variant]`, simply type `chukwa`.

#### Example config.json
```
{
    "algo": "chukwa",
    "api": {
        "port": 10000,
        "access-token": null,
        "id": null,
        "worker-id": null,
        "ipv6": false,
        "restricted": true
    },
    "autosave": true,
    "background": false,
    "colors": true,
    "cpu-threads": 8,
    "cpu-optimization": null,
    "cpu-affinity": null,
    "priority": null,
    "donate-level": 5,
    "log-file": null,
    "pools": [
        {
            "url": "stratum+tcp://ztcpool.sytes.net:10105",
            "user": "Ze4artgLD3pXn4YY1m4HREYsG5ZPE5dew5kxmuY6WtRa3tdAhnGgbqD6dtmX6wkidnX9uRgdtQsf1bvYoFhZjsvp1fUWd9Pqh",
            "pass": "x",
            "rig-id": null,
            "nicehash": false,
            "keepalive": false,
            "variant": "chukwa",
            "enabled": true,
            "tls": false,
            "tls-fingerprint": null
        }
    ],
    "print-time": 60,
    "retries": 5,
    "retry-pause": 5,
    "user-agent": null,
    "watch": true,
    "use-gpu": [
        "OPENCL",
        "CUDA"
    ],
    "gpu-intensity": [
        50.0
    ],
    "gpu-filter": [
        {
            "engine": "OPENCL",
            "filter": "AMD"
        },
        {
            "engine": "OPENCL",
            "filter": "Radeon"
        },
        {
            "engine": "OPENCL",
            "filter": "Advanced Micro Devices"
        }
    ]
}
```  

4. Save the file.

5. Start Binary.
  *  `ninjarig.exe` for Windows.
  *  `./ninjarig` for Linux.

![NinjaRig-Mining-Working](@site/static/img/mine/ninjarig-mining-working.png)  

That's it! You should be mining away now!