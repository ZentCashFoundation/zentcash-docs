---
title: Using Zentwallet
sidebar_position: 1
---

## Screenshot

Here's a quick image of zentwallet in action:

![zentwallet](@site/static/img/use/wallets/zentwallet/zentwallet.png)

## Downloading

Binary distributions can be found [here](https://github.com/ZentCashFoundation/Zent/releases).

Select the appropriate file for the target platform (Windows, Mac, Linux).

## Installing

### Installing on Windows

Extract the *.zip* file (`ZentCash-...-windows.zip`).

### Installing on Mac

Extract the *.zip* file:

```bash
unzip ZentCash-...-mac.zip
```

### Installing on Linux

Extract the *.zip* file:

```bash
unzip ZentCash-...-linux.zip
```

## Synchronizing the Blockchain

Running `Zentd` will start the *Zentd* network daemon, which will connect to the network and begin downloading and verifying the Zent Cash blockchain.  

Because the blockchain is constantly growing, the file size always increases (the blockchain is currently over 35 GB), and *Zentd must verify every block*, which is both CPU and disk intensive. An SSD with at least this much free disk space is recommended, unless you plan to use [remote nodes](/docs/use/wallets-guides/using-remote-nodes). 

### Using Checkpoints

In **versions 1.14.7+** you can sync a fresh chain from block 0 much quicker by using checkpoints. Follow [this guide](/docs/use/using-checkpoints) to learn more.

### Windows

Run the `Zentd.exe` executable extracted from the Windows binary zip:

### Mac / Linux

Run the `Zentd` binary extracted from the `.zip` download:

```bash
./Zentd
```

## Using Zentwallet

With `Zentd` still running in the background or another terminal/shell/command prompt, open zentwallet:

#### Windows

Run the `zentwallet.exe` executable from the extracted folder.

#### Mac / Linux

```bash
./zentwallet
```

### Using Zentwallet commands

Zentwallet has a twin command system; a numerical shortcut for navigating the menu, and typed commands you can access directly.  The more you use Zentwallet the more typed commands you'll pick up.  This guide is written using the written commnand system. Feel free to use the numbers associated with the command.

### Creating a Wallet

To create a wallet, type `create` and press `enter`:

```
Welcome, please choose an option below:

 1	open                     Open a wallet already on your system
 2	create                   Create a new wallet
 3	seed_restore             Restore a wallet using a seed phrase of words
 4	key_restore              Restore a wallet using a view and spend key
 5	view_wallet              Import a view only wallet
 6	exit                     Exit the program

What would you like to do?: create
What would you like to call your new wallet?: ZTC
Give your new wallet a password: **************
Confirm your new password: **************
Welcome to your new wallet, here is your payment address:
Ze4oeRZVUFjHgKCuAUUGBZbsssH3pBBdMHpe8K68uqatYkUW1JxmBpiNsvbCFeRL8qRggiUmjGZ8UPtP23zqNM3p2vYydXz5t

Please copy your secret keys and mnemonic seed and store them in a secure location: 
Private spend key:
90259a5c9b1a755e4a54c57a92a3f1c2947989f06bfd67d71c06bee1bd0c2f0c

Private view key:
276a6d6f6750a8afe5f6e86c94d6456756c9900f498e939a07a4fbbb1f617b06

Mnemonic seed:
etched ultimate empty jargon talent directed knowledge mighty adhesive vastness wonders rural sipped cigar bagpipe ugly smidgen outbreak icing umpire shuffled jargon sash soil umpire

If you lose these your wallet cannot be recreated!


Your wallet is syncing with the network in the background.
Until this is completed new transactions might not show up.
Use the status command to check the progress.

 1	advanced                 List available advanced commands
 2	address                  Display your payment address
 3	balance                  Display how much ZTC you have
 4	backup                   Backup your private keys and/or seed
 5	exit                     Exit and save your wallet
 6	help                     List this help message
 7	transfer                 Send ZTC to someone

[ZTC ZTC]: 
```

### Opening a Wallet

To open an existing wallet; type `open` and press `enter`:

```

 1	open                     Open a wallet already on your system
 2	create                   Create a new wallet
 3	seed_restore             Restore a wallet using a seed phrase of words
 4	key_restore              Restore a wallet using a view and spend key
 5	view_wallet              Import a view only wallet
 6	exit                     Exit the program

What would you like to do?: 1
What is the name of the wallet you want to open?: ZTC
Enter password: ***********

Making initial contact with Zentd.
Please wait, this sometimes can take a long time...


Your wallet Ze4oeRZVUFjHgKCuAUUGBZbsssH3pBBdMHpe8K68uqatYkUW1JxmBpiNsvbCFeRL8qRggiUmjGZ8UPtP23zqNM3p2vYydXz5t has been successfully opened!

Your Zentd isn't fully synced yet!
Until you are fully synced, you won't be able to send transactions,
and your balance may be missing or incorrect!

Scanning through the blockchain to find any new transactions you received
whilst your wallet wasn't open.
Please wait, this may take some time.


Finished scanning blockchain!

 1	advanced                 List available advanced commands
 2	address                  Display your payment address
 3	balance                  Display how much ZTC you have
 4	backup                   Backup your private keys and/or seed
 5	exit                     Exit and save your wallet
 6	help                     List this help message
 7	transfer                 Send ZTC to someone

[ZTC ZTC]: 

```

### Viewing Wallet Address

To view a wallet's public address; at the menu, type `address` and press `enter`.

```
[ZTC ZTC]: address
Ze4oeRZVUFjHgKCuAUUGBZbsssH3pBBdMHpe8K68uqatYkUW1JxmBpiNsvbCFeRL8qRggiUmjGZ8UPtP23zqNM3p2vYydXz5t
[ZTC ZTC]:
```

### Exporting Keys

Each Zent Cash wallet is essentially, just a pair of keys (*View Key* and *Spend Key*) from which the public address is derived.
It is **very** important to export these keys and back them up somewhere that is safe and secure (meaning somewhere reliable/permanent that no one else can access).

In the event of a lost or corrupted wallet file, computer crash, etc., the *View Key* and *Spend Key* are the only way to restore a wallet and recover the funds it holds.

**DO NOT SHARE IT WITH ANYONE**. **Anyone who has these can *access your funds* and has *complete control* over your wallet.**

To print your keys; at the menu type `backup` and press `enter`.
The *View Key* and *Spend Key* will appear. Copy them and store them **safely and securely**.

```
[ZTC ZTC]: backup
Enter password: **********
Private spend key: 90259a5c9b1a755e4a54c57a92a3f1c2947989f06bfd67d71c06bee1bd0c2f0c
Private view key: 276a6d6f6750a8afe5f6e86c94d6456756c9900f498e939a07a4fbbb1f617b06
Mnemonic seed: etched ultimate empty jargon talent directed knowledge mighty adhesive vastness wonders rural sipped cigar bagpipe ugly smidgen outbreak icing umpire shuffled jargon sash soil umpire
[ZTC ZTC]:
```

### Viewing Wallet Balance

To view your wallet's balance; at the menu, type `balance` and press `enter`:

```
[ZTC ZTC]: balance
Available balance: 1000.00 ZTC
Locked (unconfirmed) balance: 100.00 ZTC
Total balance: 1100.00 ZTC
[ZTC ZTC]:
```

### Sending Zent Cash Transactions

To send Zent Cash; at the Zentwallet menu:

- Type: `transfer` and press `enter`

- Type/paste the address you want to send the ZTC to and press `enter`

- Type the amount of ZTC you want to send (like `100`) and press `enter`

- Press `enter` to use the default fee of 0.1 ZTC (or set it higher if you're sending a large amount of ZTC)

- Enter the payment ID if the recipient has provided one. Check the [payment ID section](#payment-id) if you're not sure when/how to use it

- If you make a mistake or need to stop the transaction, type `cancel` at any time

- Confirm that the details are correct and enter `y`. If something is amiss, enter `n` and follow the steps again

- Enter your password

Depending on the amount you transfer, you may need to wait a while for confirmation.  If you have had too many small incoming transactions, or the amount you wish to send is too large; either break up your transfer into several smaller amounts, or optimise your wallet.

Example:

![transfer](@site/static/img/use/wallets/zentwallet/transfer-simple.png)


#### Optimizing your Wallet

Fusion transactions take all your (small) incoming payments and combine them into bigger ones, allowing you to send huge sums at once!

To optimize your wallet, type `optimize` and press `enter`:
```
[ZTC ZTC]: optimize
Attempting to optimize your wallet to allow you to send large amounts at once. 
This may take a very long time!
Do you want to proceed? (Y/n): y
Running optimization round 1...
Full optimization completed!
[ZTC ZTC]: 
```

When it is completed, it will print out a green message `Full optimization completed!`

![optimize](@site/static/img/use/wallets/zentwallet/optimize-simple.png)

#### Payment ID

Because transactions on the Zent Cash blockchain are privatized, in some situations a payment ID is necessary for the recipient to be able to determine where the payment came from, for instance when depositing to an exchange or other service.

**You need it if you're sending ZTC to an exchange**.

To send a transaction with a payment ID, enter it when prompted to.

![p-id](@site/static/img/use/wallets/zentwallet/payment-id-simple.png)

Note that typically, the service/recipient will generate and provide the required payment ID.

### Exiting the Wallet

Wallets loaded into the *zentwallet* client must be synced with the blockchain in order to properly calculate balance, view transaction history, etc.

It is important to properly save the wallet data before exiting *zentwallet* so that the synchronized data is not lost.

To save a wallet's data and exit; at the menu, type `exit` and press `enter`:

```
[ZTC ZTC]: exit
Shutting down...
Saving wallet file...
Shutting down wallet interface...
Shutting down node connection...
Bye.
```

### Restoring your Wallet

#### Private Spend and View Keys

To restore a wallet using spend and view keys; at the menu type `key_restore` and press `enter`, then follow the prompts:

```
 1	open                     Open a wallet already on your system
 2	create                   Create a new wallet
 3	seed_restore             Restore a wallet using a seed phrase of words
 4	key_restore              Restore a wallet using a view and spend key
 5	view_wallet              Import a view only wallet
 6	exit                     Exit the program

What would you like to do?: key_restore
Enter your private spend key: 90259a5c9b1a755e4a54c57a92a3f1c2947989f06bfd67d71c06bee1bd0c2f0c
Enter your private view key: 276a6d6f6750a8afe5f6e86c94d6456756c9900f498e939a07a4fbbb1f617b06
What would you like to call your new wallet?: ZTC2
Give your new wallet a password: ***********
Confirm your new password: ***********
What height would you like to begin scanning your wallet from?

This can greatly speed up the initial wallet scanning process.

If you do not know the exact height, err on the side of caution so transactions do not get missed.

Hit enter for the sub-optimal default of zero: 748000

Making initial contact with Zentd.
Please wait, this sometimes can take a long time...


Your wallet Ze4oeRZVUFjHgKCuAUUGBZbsssH3pBBdMHpe8K68uqatYkUW1JxmBpiNsvbCFeRL8qRggiUmjGZ8UPtP23zqNM3p2vYydXz5t has been successfully imported!

Your Zentd isn't fully synced yet!
Until you are fully synced, you won't be able to send transactions,
and your balance may be missing or incorrect!

Scanning through the blockchain to find transactions that belong to you.
Please wait, this will take some time.


Finished scanning blockchain!

 1	advanced                 List available advanced commands
 2	address                  Display your payment address
 3	balance                  Display how much ZTC you have
 4	backup                   Backup your private keys and/or seed
 5	exit                     Exit and save your wallet
 6	help                     List this help message
 7	transfer                 Send ZTC to someone

[ZTC ZTC2]: 

```

#### 25 Word Mnemonic Seed

To restore a wallet using spend and view keys; at the menu type `seed_restore` and press `enter`, then follow the prompts:

```
 1	open                     Open a wallet already on your system
 2	create                   Create a new wallet
 3	seed_restore             Restore a wallet using a seed phrase of words
 4	key_restore              Restore a wallet using a view and spend key
 5	view_wallet              Import a view only wallet
 6	exit                     Exit the program

What would you like to do?: seed_restore
Enter your mnemonic phrase (25 words): etched ultimate empty jargon talent directed knowledge mighty adhesive vastness wonders rural sipped cigar bagpipe ugly smidgen outbreak icing umpire shuffled jargon sash soil umpire
What would you like to call your new wallet?: test
Give your new wallet a password: ****
Confirm your new password: ****

What height would you like to begin scanning your wallet from?

This can greatly speed up the initial wallet scanning process.

If you do not know the exact height, err on the side of caution so transactions do not get missed.

Hit enter for the sub-optimal default of zero: 1713000

Your wallet Ze4oeRZVUFjHgKCuAUUGBZbsssH3pBBdMHpe8K68uqatYkUW1JxmBpiNsvbCFeRL8qRggiUmjGZ8UPtP23zqNM3p2vYydXz5t has been successfully imported!

It looks like Zentd isn't open!

Ensure Zentd is open and has finished syncing. (It will often not respond when syncing)
If it's still not working, try restarting Zentd (or try a different remote node).
The daemon sometimes gets stuck.
Alternatively, perhaps Zentd can't communicate with any peers.

The wallet can't function fully until it can communicate with the network.

 1	try_again                Try to connect to the node again
 2	continue                 Continue to the wallet interface regardless
 3	swap_node                Specify a new daemon address/port to connect to
 4	exit                     Exit the program

What would you like to do?: 2

 1	advanced                 List available advanced commands
 2	address                  Display your payment address
 3	balance                  Display how much ZTC you have
 4	backup                   Backup your private keys and/or seed
 5	exit                     Exit and save your wallet
 6	help                     List this help message
 7	transfer                 Send ZTC to someone

[ZTC test]: 

```



### Other Commands

To see a list of additional commands not already covered; at the menu type `advanced` and press `enter`:

```
 1	advanced                 List available advanced commands
 2	address                  Display your payment address
 3	balance                  Display how much ZTC you have
 4	backup                   Backup your private keys and/or seed
 5	exit                     Exit and save your wallet
 6	help                     List this help message
 7	transfer                 Send ZTC to someone

[ZTC ZTC]: advanced

 8	ab_add                   Add a person to your address book
 9	ab_delete                Delete a person in your address book
 10	ab_list                  List everyone in your address book
 11	ab_send                  Send ZTC to someone in your address book
 12	change_password          Change your wallet password
 13	make_integrated_address  Make a combined address + payment ID
 14	incoming_transfers       Show incoming transfers
 15	list_transfers           Show all transfers
 16	optimize                 Optimize your wallet to send large amounts
 17	outgoing_transfers       Show outgoing transfers
 18	reset                    Recheck the chain from zero for transactions
 19	save                     Save your wallet state
 20	save_csv                 Save all wallet transactions to a CSV file
 21	send_all                 Send all your balance to someone
 22	status                   Display sync status and network hashrate
```

### Help

To see the main menu of commands; type `help` and press `enter`:

```
[ZTC ZTC]: help

 1	advanced                 List available advanced commands
 2	address                  Display your payment address
 3	balance                  Display how much ZTC you have
 4	backup                   Backup your private keys and/or seed
 5	exit                     Exit and save your wallet
 6	help                     List this help message
 7	transfer                 Send ZTC to someone

```