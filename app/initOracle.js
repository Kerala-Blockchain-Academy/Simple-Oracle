// const Web3 = require('web3');
// const HDWalletProvider = require('@truffle/hdwallet-provider');
// import instance from "./app.js"
// const instance1 = require("./app")
// const axios = require("axios");
// require('dotenv').config();

// const signProvider = new HDWalletProvider(process.env.SEED, `https://goerli.infura.io/v3/433dbe41c8664d74a0a191d9e655f643`);
// const web3Sign = new Web3(signProvider);
// let { abi } = require('./artifacts/contracts/OracleV1.sol/OracleV1.json');
// let { deployer, address } = require('./Details1.json');
// MyContractSign = new web3Sign.eth.Contract(abi, address);
// AccountAddress = deployer;
// ContractAddress = address;

// a delay functon
// const timer = ms => new Promise(res => setTimeout(res, ms))

// initOracle();

// async function initOracle() {
//     while(true) {
//         let data1 = await axios.get(" https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
//         let  usd= JSON.stringify(data1.data.USD);
//         console.log("Read Data from truth point, USD rate is:", usd)
//         console.log(instance1);
//         let inst = await instance1.app()
//         let txnReceipt = await inst.setTempData(usd);
        
//        // console.log(txnReceipt);
//         console.log("Updated on chain oracle contract")
//     //    const data2 =  await MyContractSign.methods.priceData().call();
//     //    console.log("data is",data2);
//          await timer(30000);
//     }
// }
import "dotenv/config";
import axios from "axios";
import {abi,instance} from "./app.js";
const timer = ms => new Promise(res => setTimeout(res, ms));

initOracle();

async function initOracle(){
    while(true) {
        let data1 = await axios.get(" https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
        let  usd= JSON.stringify(data1.data.USD);
        console.log("Read Data from truth point, USD rate is:", usd)
        // console.log(instance);
        console.log(abi);
        // let inst = await instance1.app()
        let txnReceipt = await instance.setTempData(usd);
        
       console.log(txnReceipt);
        console.log("Updated on-chain oracle contract")
    //    const data2 =  await MyContractSign.methods.priceData().call();
    //    console.log("data is",data2);
         await timer(30000);
        }}