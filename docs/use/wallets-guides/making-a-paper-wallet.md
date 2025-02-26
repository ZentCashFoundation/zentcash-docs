---
title: Making a Paper Wallet
---

The main purpose of a paper wallet is to quickly create a wallet to start receiving funds.

**You will not be able to spend or send your funds to other people until you set up a CLI or GUI.**

You can view a guide on how to make a wallet [here](/docs/use/getting-started)

There are two options for a paper wallet.

## Making A Paper Wallet on an Internet-Connected Machine

Go to [this link](https://paperwallet.zent.cash/) and follow [these steps](#generating-the-wallet).

## Making a Paper Wallet on an Air-Gapped Machine

Go to [this GitHub repository](https://github.com/ZentCashFoundation/zentcash-paper-wallet/)(on a machine connected to the internet).

To use it, follow these steps:

**Windows**
  - Click on `Clone or Download`

  - Click on `Download ZIP`

  - Extract the `.zip` file to a directory of your choice (say, `C:/zentcash-paper-wallet`)

  - Copy/paste the files through a flash drive to your air-gapped machine.

  - Open the folder where you pasted the files, (say `C:/zentcash-paper-wallet`) and double click on `index.html`

  - Follow [these steps.](#generating-the-wallet)

**Linux**
  - Open the terminal

  -  Install git if it's not already installed (`apt-install git`)

  - Type, `git clone https://github.com/ZentCashFoundation/zentcash-paper-wallet.git` and press enter

  - Then enter `cd zentcash-paper-wallet`

  - After doing so, enter `index.html`

  - A page should open up in your browser

  - Follow [these steps.](#generating-the-wallet)

### Generating the Wallet

- Click on `Generate a Wallet`

- Mash your keyboard and start entering a bunch of random letters, numbers and signs in the field. Make sure you toggle on Caps Lock repeatedly! (Don't go too crazy - otherwise you might end up shutting down your PC!)

- After you're done mashing your keyboard, press `Generate Wallet`

- The letters and numbers in the green box, starting with `Ze`, is your public address. You can share it freely.

- Save the `Seed Phrase`, the 25 words in the red box, safely.  
**DO NOT SHARE IT WITH ANYONE**.  
**Anyone who has access to this can *access your funds* and has *complete control* over your wallet.**

- Save the `Spend Key` and the `View Key`, the two very long strings of (seemingly) random letters and numbers, safely.  
**DO NOT SHARE IT WITH ANYONE**.  
**Anyone who has access to this can *access your funds* and has *complete control* over your wallet.**
