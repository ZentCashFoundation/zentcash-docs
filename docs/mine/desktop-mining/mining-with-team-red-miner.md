---
title: Mining with Team Red Miner
sidebar_position: 3
---

## Downloading and Installing for Windows or Linux

Team Red Miner can be downloaded from the [GitHub page.](https://github.com/todxx/teamredminer/releases)

## Team Red Miner Setup and Configuration

1. Unzip the file and extract the files into a new folder (Make sure your anti-virus doesn't delete the files)
2. Edit the batch file named "start_ztc_chukwa.bat".
3. Find and change the following lines:

```
   -a [algorithm]
   -o [pool address]
   -u [wallet address]
```

  - Instead of `[algorithm]`, simply type trtl_chukwa.
  - In place of `[pool address]`, you'll need to choose a pool to mine towards. You can learn more about them [here](../pools). 
  - Instead of `[wallet address]`, simply paste your Zent Cash wallet's address.
    - If you don't have one yet, you can find out how to create a wallet here

#### Example start_ztc_chukwa.bat
``` 
set GPU_MAX_ALLOC_PERCENT=100
set GPU_SINGLE_ALLOC_PERCENT=100
set GPU_MAX_HEAP_SIZE=100
set GPU_USE_SYNC_OBJECTS=1

teamredminer.exe -a trtl_chukwa -o stratum+tcp://ztcpool.sytes.net:10105 -u Ze4artgLD3pXn4YY1m4HREYsG5ZPE5dew5kxmuY6WtRa3tdAhnGgbqD6dtmX6wkidnX9uRgdtQsf1bvYoFhZjsvp1fUWd9Pqh -p x --fan_control
```    

4. Save the file.

5. Start Team Red Miner.
  * `start_ztc_chukwa.bat` for Windows.
  * `./start_ztc_chukwa.sh` for Linux.

That's it! You should be mining away now!

## Troubleshooting
Most issues are usually because of out-of-date GPU drivers, if the miner doesnt work or cannot detect your GPU, try updating to the latest drivers!

* Older GPU cards in Linux - Sometimes with older AMD cards the miners will not detect the GPU. You can try reinstalling the drivers with `sudo ./amdgpu-pro-install --opencl=legacy -y`  
