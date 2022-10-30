const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const signProvider = new HDWalletProvider(process.env.SEED, `wss://goerli.infura.io/ws/v3/433dbe41c8664d74a0a191d9e655f643`);
const web3Sign = new Web3(signProvider);
const web3Listen = new Web3('wss://goerli.infura.io/ws/v3/433dbe41c8664d74a0a191d9e655f643');

let { abi } = require('./artifacts/contracts/OracleV2.sol/OracleV2.json');
let { deployer, address } = require('./Details2.json');
MyContractSign = new web3Sign.eth.Contract(abi, address);
MyContractListen = new web3Listen.eth.Contract(abi, address);
AccountAddress = deployer;
ContractAddress = address;

// a delay functon
const timer = ms => new Promise(res => setTimeout(res, ms))

eventOracleV2();

async function eventOracleV1() {
    MyContractListen.events.TempDataRequest()
        .on("data", async (result) => {
            console.log("Event recived")
            let temp = "27 Celcius"
            console.log("Read Data from truth point, temprature is:", temp)
            await MyContractSign.methods.updateTempData(temp)
            .send({ from: AccountAddress, gasLimit: "927000" })
            console.log("Updated on chain oracle contract")
        })
}

async function eventOracleV2() {
    var options = {
        reconnect: {
                auto: true,
                delay: 5000, // ms
                maxAttempts: 5,
                onTimeout: false
        },
        address: ContractAddress,
        topics: []
        };
        
        var subscription = web3Listen.eth.subscribe('logs', options, function(error, result){
            if (!error) console.log('got result');
            else console.log(error);
        }).on("data", async function(log){
            console.log("Event recived")
            let temp = "28 Celcius"
            console.log("Read Data from truth point, temprature is:", temp)
            await MyContractSign.methods.updateTempData(temp)
            .send({ from: AccountAddress, gasLimit: "927000" })
            console.log("Updated on chain oracle contract")
        })
}