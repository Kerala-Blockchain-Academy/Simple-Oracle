import { Contract, WebSocketProvider, Wallet, ethers } from "ethers";
import Oracl from "./artifacts/contracts/OracleV2.sol/OracleV2.json" assert { type: "json" };
import Details from "./Details2.json" assert { type: "json"};

const abi=Oracl.abi;
const provider=new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT");
const wProvider = new WebSocketProvider("wss://eth-sepolia.g.alchemy.com/v2/0loLZZe_TDjy-9X1wy9MobmDvCaj23jT");
  const wallet1 = new Wallet(process.env.PRIVATE_KEY, wProvider);
  const wallet2 = new Wallet(process.env.PRIVATE_KEY, provider)

  export const instance = new Contract(Details.address, abi, wallet1);
  export const instance1=new Contract(Details.address,abi,wallet2);

