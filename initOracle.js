const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const signProvider = new HDWalletProvider(process.env.SEED, `https://goerli.infura.io/v3/433dbe41c8664d74a0a191d9e655f643`);
const web3Sign = new Web3(signProvider);
let { abi } = require('./artifacts/contracts/OracleV1.sol/OracleV1.json');
let { deployer, address } = require('./Details1.json');
MyContractSign = new web3Sign.eth.Contract(abi, address);
AccountAddress = deployer;
ContractAddress = address;

// a delay functon
const timer = ms => new Promise(res => setTimeout(res, ms))

initOracle();

async function initOracle() {
    while(true) {
        let temp = "27 Celcius"
        console.log("Read Data from truth point, temprature is:", temp)
        await MyContractSign.methods.setTempData(temp)
        .send({ from: AccountAddress, gasLimit: "927000" })
        console.log("Updated on chain oracle contract")
        await timer(30000);
    }
}