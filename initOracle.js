const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
let { abi } = require('./artifacts/contracts/OracleV1.sol/OracleV1.json');
let { deployer, address } = require('./Details1.json');
MyContract = new web3.eth.Contract(abi, address);
AccountAddress = deployer;

// a delay functon
const timer = ms => new Promise(res => setTimeout(res, ms))

initOracle();

async function initOracle() {
    while(true) {
        let temp = "27 Celcius"
        console.log("Read Data from truth point, temprature is:", temp)
        MyContract.methods.setTempData(temp)
        .send({ from: AccountAddress, gasLimit: "927000" })
        console.log("Updated on chain oracle contract")
        await timer(30000);
    }
}