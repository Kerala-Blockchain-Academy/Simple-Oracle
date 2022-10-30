require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'goril',
  networks: {
    ganache: {
      url: 'http://localhost:8545'
    },
    geth: {
      url: 'http://localhost:8546'
    },
    goril: {
      url: `https://goerli.infura.io/v3/433dbe41c8664d74a0a191d9e655f643`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
    }
  },
  solidity: "0.8.17",
};
