---
title: Using Zent Cash Web Wallet
---

## Screenshot

Here's a quick image of Zent Cash Web Wallet in action:

![Zent Cash Web Wallet](../../assets/shell-ss.png)

## Using Zent Cash Web Wallet

Because Zent Cash Web Wallet is a web wallet, all you have to do is go to the [website](https://webwallet.zent.cash) to interact with your wallet

## Creating a Wallet/Signing Up

To create a wallet, go to the [signup page](https://webwallet.zent.cash/signup)  

Choose a username, and a strong, rememberable password to go along with it.  
If someone *gets access to this password*, they *get access to your funds on Zent Cash Web Wallet*!  

## Opening a Wallet/Logging In

To login to your wallet, go to the [login page](https://webwallet.zent.cash/login)

Enter the username and password you chose when signup up and press `LOGIN`: 

![shell-welcome](../../assets/shell-ss.png)

### Viewing Wallet Address

Your wallet's public address is available under `Wallet Info` next to `Address` on the home screen:

![shell-addr](../../assets/shell-addr.png)

To copy it to your clipboard, press the small icon next to it.

### Exporting Keys

Each Zent Cash wallet is essentially, just a pair of keys (*View Key* and *Spend Key*) from which the public address is derived.
It is **very** important to export these keys and back them up somewhere that is safe and secure (meaning somewhere reliable/permanent that no one else can access).

In the event of a lost or corrupted wallet file, computer crash, etc., the *View Key* and *Spend Key* are the only way to restore a wallet and recover the funds it holds.

**DO NOT SHARE IT WITH ANYONE**. **Anyone who has these can *access your funds* and has *complete control* over your wallet.**

To view your keys, click on the `Export Keys` button in the top left.

![export-button](../../assets/shell-out-bttn.png)

Confirm your password when prompted

Your Private Spend and View key will now be displayed:

![keys](../../assets/ss-keys.png)

### Viewing Wallet Balance

Your wallet's balance is available under `Wallet Info` next to `Available` on the home screen

![balance](../../assets/shell-balance.png)

### Sending Zent Cash Transactions

To send Zent Cash; under `Send Transaction` on the home screen:

- Enter the address to whom you want to send some ZTC to

- Enter the amount of ZTC you want to send

- Enter the payment ID if the recipient has provided one. Check the [payment ID section](#payment-id) if you're not sure when/how to use it

After that, click `SEND`

Verify that the amount and address are correct, and click `CONFIRM` to send; if something is amiss, press anywhere else to remove the dialogue.

*Know that there is a 106.60 ZTC fee charged by the web wallet*

Example:

![transfer](../../assets/ss-transfer.png)
![confirm](../../assets/ss-confirm.png)

#### Payment ID

Because transactions on the Zent Cash blockchain are privatized, in some situations a payment ID is necessary for the recipient to be able to determine where the payment came from, for instance when depositing to an exchange or other service.

**You need it if you're sending ZTC to an exchange**.

To send a transaction with a payment ID, enter it in the `Enter Payment Id...` field

![p-id](../../assets/ss-pid.png)

Note that typically, the service/recipient will generate and provide the required payment ID.

### Logging Out/Exiting the Wallet

To log out of Zent Cash Web Wallet, simply click on the `Logout` button on the top left on the home page

![logout](../../assets/ss-logout.png)

### Deleting your Account

To delete your account, click on the `Delete Account` button on the top right.

It confirm that you want to delete your account; [save your keys](#exporting-keys) before deleting your account so that you can access your ZTC again!  
To go ahead with deleting your account, press the `CONFIRM` button

![delete](../../assets/ss-delete.png)

After deleting, you will be redirected to the home page

### Recovering your Wallet

It is currently not possible to import your wallet in Zent Cash Web Wallet, and is not planned.