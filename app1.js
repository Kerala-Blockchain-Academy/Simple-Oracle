// import { Contract, JsonRpcProvider, Wallet } from "ethers";
// import details from "./Details1.json" assert { type: "json" };
// import OracleObj from "./artifacts/contracts/OracleV1.sol/OracleV1.json" assert { type: "json" };
const ethers = require("ethers");
const details = require("./Details2.json");
const OracleObj = require("./artifacts/contracts/OracleV2.sol/OracleV2.json");
async function app1() {
        let instance;
        const contract = details.address;
        const abi = OracleObj.abi;

        
            const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT");
            const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

            instance = new ethers.Contract(contract, abi, wallet);
        

        return instance
    }

module.exports = { app1 };