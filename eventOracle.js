const Web3 = require('web3');
const instance1 = require("./app1")
const axios = require("axios");
const details = require("./Details2.json");
// const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

// const signProvider = new HDWalletProvider(process.env.SEED, `wss://goerli.infura.io/ws/v3/433dbe41c8664d74a0a191d9e655f643`);
// const web3Sign = new Web3(signProvider);
const web3Listen = new Web3('wss://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT');

let { abi } = require('./artifacts/contracts/OracleV2.sol/OracleV2.json');
let { deployer, address } = require('./Details2.json');
// MyContractSign = new web3Sign.eth.Contract(abi, address);
MyContractListen = new web3Listen.eth.Contract(abi, address);
// AccountAddress = deployer;
// ContractAddress = address;

// a delay functon
const timer = ms => new Promise(res => setTimeout(res, ms))

eventOracleV2();

async function eventOracleV1() {
    MyContractListen.events.PriceDataRequest()
        .on("data", async (result) => {
            console.log("Event recived")
            let data1 = await axios.get(" https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
            let usd = JSON.stringify(data1.data.USD);
            console.log("Read Data from truth point, USD rate is:", usd)
            let inst = await instance1.app1()
            await inst.updatePriceData(usd)
            
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
        event: ['PriceDataRequest'],
        address: details.address,
        topics: []
        };
        
        var subscription = web3Listen.eth.subscribe('logs', options, function(error, result){
            if (!error) console.log('got result');
            else console.log(error);
        }).on("data", async function(log){
            console.log("Event recived")
            let data1 = await axios.get(" https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
            let usd = JSON.stringify(data1.data.USD);
            console.log("Read Data from truth point, USD rate is:", usd)
            let inst = await instance1.app1()
            await inst.updatePriceData(usd)
            
            console.log("Updated on chain oracle contract")
        })
}