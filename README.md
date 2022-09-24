# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell

npm install --save-dev hardhat 
npx hardhat   


```

Edit hardhat.config.js

```javascript

module.exports = {
  solidity: "0.8.17",

  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/APIKEY",
      accounts: ["PRIVATE_KEY_FROM_METAMASK"]
    }
  }
};

```

Add some ETH in the Rinkeby network
https://rinkebyfaucet.com/


```shell
 
npx hardhat run scripts/deploy.js --network rinkeby

```
