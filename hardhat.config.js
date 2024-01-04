require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'sepolia',
  networks:{
    ganache: {
      url: 'http://localhost:8545'
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT",
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  paths: {
    artifacts: "./app/artifacts",
  },
  solidity: "0.8.19",
};
