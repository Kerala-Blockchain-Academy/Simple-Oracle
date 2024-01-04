import { Contract, WebSocketProvider, Wallet, ethers } from "ethers";
import Oracl from "./artifacts/contracts/OracleV1.sol/OracleV1.json" assert { type: "json" };
import Details from "./Details1.json" assert { type: "json"};

export const abi=Oracl.abi;
const provider=new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT");

  
  const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

  export const instance = new Contract(Details.address, abi, wallet);
  
