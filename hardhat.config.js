require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/APIKEY",
      accounts: ["PRIVATE_KEY_FROM_METAMASK"]
    }
  }
};
