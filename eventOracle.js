const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const axios = require("axios");

const signProvider = new HDWalletProvider(process.env.SEED, `wss://goerli.infura.io/ws/v3/433dbe41c8664d74a0a191d9e655f643`);
const web3Sign = new Web3(signProvider);
const web3Listen = new Web3('wss://goerli.infura.io/ws/v3/433dbe41c8664d74a0a191d9e655f643');
let MyContract= require('./build/contracts/OracleV2.json');
let MyContractAbi = MyContract.abi;
let MyContractAddr = MyContract.networks[5].address;
MyContractSign = new web3Sign.eth.Contract(MyContractAbi, MyContractAddr);
MyContractListen = new web3Listen.eth.Contract(MyContractAbi, MyContractAddr);
AccountAddress = "0x7b0c33284bA38A7401F97b9683242Cff1B3a2d84";


// a delay functon
const timer = ms => new Promise(res => setTimeout(res, ms))

eventOracleV1();

async function eventOracleV1() {
    MyContractListen.events.PriceDataRequest()
        .on("data", async (result) => {
            console.log("Event recived")
            let data1 = await axios.get(" https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
            let usd = JSON.stringify(data1.data.USD);
            console.log("Read Data from truth point, USD rate is:", usd)
            await MyContractSign.methods.updatePriceData(usd)
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
        event: ['PriceDataRequest'],
        address: MyContractAddr,
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
            await MyContractSign.methods.updatePriceData(usd)
            .send({ from: AccountAddress, gasLimit: "927000" })
            console.log("Updated on chain oracle contract")
        })
}