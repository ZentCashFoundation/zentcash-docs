---
title: Restoring A Zent Cash Wallet From A Specific Block Height
---


If you find yourself waiting what seems like forever to sync your wallet and you've started syncing from 0, you can probably speed things up by utilizing the scan height feature of the wallet software. This will save you quite a bit of time during the syncing process. Below is a quick guide on how to use the scan height feature of the wallet software.

## Step 1: Find The Estimated Block Height When You Created Your Wallet

It's not necessary to scan blocks and transactions from before your wallet was created. The chances of there being funds in a wallet before it was created are infinitely small. As such, scanning from before the creation block only wastes time.

To find the height of the block look for the date on which you generated your wallet in the [explorer](https://explorer.zent.cash).

Once we locate the approximate height where our wallet was generated we can use it to synchronize our wallet in a much faster way *(Thanks to having a block height from which to start our wallet scan, our client no longer has to scan all the blockchain of your genesis block).*


## Step 2: Restoring Your Wallet Using A Specific Scan Height

This guide covers both the Zent Cash Wallet (GUI-based wallet) as well as Zentwallet (CLI-based wallet). 

### Zent Cash Wallet (GUI)

Begin by opening up the Zent Cash Wallet Application. Under the menu options, select **File** and then choose the **Restore** option.
    
![Restore-Zent-Cash-Wallet](https://i.imgur.com/NydFHP8.png)

Next, we have the option of restoring our wallet file from either our seed or our key file. In this example we will restore our wallet via our seed phrase.

![Restore-Zent-Cash-Wallet-Seed-Keys](https://i.imgur.com/ypbVKNZ.png?1)

You will be asked to either enter your seed or wallet keys. In this example we will use the seed phrase we wrote down from when we first created our wallet to begin our restoration process and also enter the scan height of `1367900` we discovered in Step #1.

![Restore-Zent-Cash-Wallet-Seed](https://i.imgur.com/UU1X8Fa.png)

The wallet software will show our Wallets address as a confirmation. If this address is wrong, simply go back and double-check that the seed/key file is correct. Simply click **Next** to continue.

![Restore-Zent-Cash-Wallet-Wallet-Address](https://i.imgur.com/eKRexHY.png)

You will be prompted for a new password to set for the wallet. Afterwards, simply click **Save Wallet As**

![Restore-Zent-Cash-Wallet-Password](https://i.imgur.com/CKrJujQ.png)

Congratulations, Our wallet is now restored! It will start scanning from the scan height that we entered. Be patient as it may still take some time to scan through the blocks and transactions depending on how long ago you created the wallet.

### Zentwallet (CLI)

*Note*: You can find more information on how to use Zentwallet via the [documentation](https://docs.zent.cash/guides/wallets/Using-Zentwallet).

For the purposes of this guide, we presume that you have a basic understanding of how to use a Zentwallet.
    
Begin by opening Zentwallet. You will be greeted by the following screen.

![zentwallet](https://i.imgur.com/WVaSbMy.png)

Since we wish to restore our wallet, we will select either option (3) or (4). 

In this example we will restore via our wallet seed, so we will enter option **3**. 

This will prompt us to enter our wallet's seed phrase.

![zentwallet-seed](https://i.imgur.com/t28M2NE.png)

Next, we are prompted to type in our starting blockheight. We will use the block height discovered from Step #1 above.

![zentwallet-block](https://i.imgur.com/q0AqzqH.png)

After a brief moment, Zentwallet will begin scanning from the block height that we provided.

![zentwallet-sync](https://i.imgur.com/7C4c4Lx.png)

Congratulations, Our wallet is now restored! It will start scanning from the scan height that we entered. Be patient as it may still take some time to scan through the blocks and transactions depending on how long ago you created the wallet.
