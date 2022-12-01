const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const axios = require('axios');

const signProvider = new HDWalletProvider(process.env.SEED, `https://goerli.infura.io/v3/433dbe41c8664d74a0a191d9e655f643`);
const web3Sign = new Web3(signProvider);
let MyContract = require('./build/contracts/OracleV1.json');
const MyContractabi = MyContract.abi;
const MyContractAddress = MyContract.networks[5].address;
MyContractSign = new web3Sign.eth.Contract(MyContractabi,MyContractAddress);
AccountAddress = "0x7b0c33284bA38A7401F97b9683242Cff1B3a2d84";


// a delay functon
const timer = ms => new Promise(res => setTimeout(res, ms))

initOracle();

async function initOracle() {
    while(true) {
        
        let data1 = await axios.get(" https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
        let  usd= JSON.stringify(data1.data.USD);
        console.log("Read Data from truth point, USD rate is:", usd)
        let txnReceipt = await MyContractSign.methods.setPriceData(usd)
        .send({ from: AccountAddress,
             gasLimit: "927000" });
       // console.log(txnReceipt);
        console.log("Updated on chain oracle contract")
       const data2 =  await MyContractSign.methods.priceData().call();
       console.log("data is",data2);
         await timer(30000);
    }
}