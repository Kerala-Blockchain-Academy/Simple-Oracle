import "dotenv/config";
import axios from "axios";
import {instance,instance1} from "./app1.js";
eventOracleV1();

async function eventOracleV1() {
    console.log("Listening...");
    instance.on("PriceDataRequest", async(event) => {
        console.log("Event recived")
                let data1 = await axios.get(" https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
                let usd = JSON.stringify(data1.data.USD);
                console.log("Read Data from truth point, USD rate is:", usd)
                
                
                await instance1.updatePriceData(usd);
                
                console.log("Updated on chain oracle contract")
    })
}
