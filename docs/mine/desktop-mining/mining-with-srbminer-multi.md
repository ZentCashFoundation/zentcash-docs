---
title: Mining with SRBMiner-Multi
sidebar_position: 4
---

## Downloading and Installing for Windows or Linux

SRBMiner can be downloaded from the [GitHub page.](https://github.com/doktor83/SRBMiner-Multi/releases)

## SRBMiner Setup and Configuration

1. Unzip the file and extract the files into a new folder (Make sure your anti-virus doesn't delete the files)
2. Edit the batch file named "start-mining-zentcash.bat".
3. Find and change the following lines:

```
   --algorithm [algorithm]
   --pool [pool address]
   --wallet [wallet address]
```

  - Instead of `[algorithm]`, simply type argon2id_chukwa.
  - In place of `[pool address]`, you'll need to choose a pool to mine towards. You can learn more about them [here](../pools). 
  - Instead of `[wallet address]`, simply paste your Zent Cash wallet's address.
    - If you don't have one yet, you can find out how to create a wallet here

#### Example start-mining-zentcash.bat
```
setx GPU_MAX_HEAP_SIZE 100
setx GPU_MAX_USE_SYNC_OBJECTS 1
setx GPU_SINGLE_ALLOC_PERCENT 100
setx GPU_MAX_ALLOC_PERCENT 100
setx GPU_MAX_SINGLE_ALLOC_PERCENT 100

@echo off
cd %~dp0
cls

SRBMiner-MULTI.exe  --algorithm argon2id_chukwa --pool ztcpool.sytes.net:10105 --wallet Ze4artgLD3pXn4YY1m4HREYsG5ZPE5dew5kxmuY6WtRa3tdAhnGgbqD6dtmX6wkidnX9uRgdtQsf1bvYoFhZjsvp1fUWd9Pqh
pause
```

4. Save the file.

5. Start SRBMiner MULTI.
  *  `start-mining-zentcash.bat` for Windows.
  *  `./start-mining-zentcash.sh` for Linux.

![SRBMiner-MULTI-Mining-Working](@site/static/img/mine/srbminer-multi-mining.png)
  
That's it! You should be mining away now!

## Troubleshooting
Most issues are usually because of out-of-date GPU drivers, if the miner doesnt work or cannot detect your GPU, try updating to the latest drivers!

* Older GPU cards in Linux - Sometimes with older AMD cards the miners will not detect the GPU. You can try reinstalling the drivers with `sudo ./amdgpu-pro-install --opencl=legacy -y`  
