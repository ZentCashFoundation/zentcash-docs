---
title: Using Checkpoints to Sync Faster
---

**Note**: You can presently only use checkpoints with zentwallet; the command-line wallet.  

## Setup

- Proceed to [https://github.com/ZentCashFoundation/checkpoints/](https://github.com/ZentCashFoundation/checkpoints/)
- Right click one of the provided links and choose `Save link as...` to download checkpoints.csv.
- Place checkpoints.csv in the same folder as your daemon(Zentd) and wallet(zentwallet).
- You can get them both [from here](https://github.com/ZentCashFoundation/Zent/releases) if you don't have them already.
- Make sure you shut down any GUI wallets, or any other instances of Zentd.

## Usage

### Windows

- First, open a command prompt in the same directory as Zentd.
- This can easily be done by moving to the Zentd directory in Windows Explorer, then typing `cmd` in the search bar and hitting enter:
- Finally, type `Zentd.exe --load-checkpoints checkpoints.csv` in the command prompt.

### Linux, Mac

- First, open a command prompt in the same directory as Zentd.
- You can use the `cd` command to change to this directory. For example, `cd Downloads/ZentCash-v1.26.0`
- Alternatively, your file manager may provide the ability to open a terminal in your current directory. Navigate to the folder with Zentd in, and try right clicking, to see if you can open a terminal there:
- Finally, type `./Zentd --load-checkpoints checkpoints.csv` in the terminal.

## Expected Output

If you did the steps correctly, you should see something like this output.

```
2020-May-13 11:58:39.654478 INFO    Welcome to Zent v1.26.0.1310 ()
2020-May-13 11:58:39.654914 INFO    Module folder: Zentd
2020-May-13 11:58:39.655249 INFO    Loading Checkpoints for faster initial sync...
2020-May-13 11:58:40.854979 INFO    Loaded 435695 checkpoints from checkpoints.csv
```

- Zentd will then start syncing from checkpoints.

- If you are using zentwallet, then you can just wait for it to finish syncing, and open your wallet(leave the daemon open!).

- If you are using a GUI wallet, let it finish syncing, close it down by typing `exit` in the window, then open your GUI wallet.

## Common Errors

### Invalid checkpoint file format

```
2020-May-13 12:10:08.325056 INFO    Loading Checkpoints for faster initial sync...
2020-May-13 12:10:08.339667 ERROR   Invalid checkpoint file format
2020-May-13 12:10:08.341758 ERROR   Exception: Failed to load checkpoints
```

- If you see output like the above, the file you are opening is either not a .csv file, or hasn't been downloaded correctly.
- Ensure you downloaded the file by right clicking, and choosing `Save link as...`.
- If you incorrectly chose the wrong file, you can accidentally download a html page instead.
- When you open up the file, it should have lots of lines like this:

```
0,7c02559783a46e9401a1539cc90571f29b3f1cf231f5fea6b8fbbe09a16a4f29
1,869f7ee6fbf4a14334eb32e9b28849268301ae93bcd9538c57ac73f4cf3c1e7d
2,b551967e99b7916e566ea92ca249281b0dc6304aa0be3844625698f46282a323
```

- If you absolutely can't get it working, you can make a new text file, copy all the content from [here](https://raw.githubusercontent.com/ZentCashFoundation/checkpoints/master/checkpoints.csv) into it
- Then save as checkpoints.csv (Select the filetype as `All Files (*.*)` in Windows)

### Failed to load checkpoints

```
2020-May-13 12:14:57.544286 INFO    Loading Checkpoints for faster initial sync...
2020-May-13 12:14:57.544569 ERROR   Could not load checkpoints file: checkpoints.csv
2020-May-13 12:14:57.544823 ERROR   Exception: Failed to load checkpoints
```

- If you see output like the above, it means the file isn't present in the directory you are in.
- Make sure you have placed the `checkpoints.csv` file in the same directory as Zentd.

### Zentd.exe is not recognized / No such file or directory

```
C:\Users\anon>Zentd.exe --load-checkpoints checkpoints.csv
'Zentd.exe' is not recognized as an internal or external command,
operable program or batch file.
```

`bash: ./Zentd: No such file or directory`

- If you see output like one of the above, it means your terminal isn't in the same folder as the Zentd program.
- You can type `pwd` (or `dir` on Windows) to see what folder you are currently in.
- Try following the steps above to get into the right folder, then try again.
- If you type `ls`(or `dir` on Windows), you should see the Zentd program, if you are in the correct folder:

```
[ZentCash-v1.26.0] ls
Zentd  Zent-service zentwallet miner wallet-api wallet-upgrader cryptotest
```

### IO error

```
2020-May-13 11:58:40.857058 INFO    Opening DB in /home/anon/.Zent/DB
2020-May-13 11:58:40.858174 ERROR   DB Error. DB can't be opened in /home/anon/.Zent/DB. Error: IO error: While lock file: /home/anon/.Zent/DB/LOCK: Resource temporarily unavailable
2020-May-13 11:58:40.873692 ERROR   Exception: IO error
```

- If you see output like the above, something else has got the database open already.
- Make sure you have closed down any other Zentd's, GUI wallets, and walletd.
- Use a task manager to help you find any which might be running in the background, then try again.
