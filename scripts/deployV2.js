const fs = require("fs");

main = async () => {
  const OracleV2 = await ethers.getContractFactory("OracleV2");
  const oracleObj = await OracleV2.deploy();

  await oracleObj.deployed();

  console.log(
    `Deployed at ${oracleObj.address}`
  );

  let details = {
    deployer : oracleObj.signer.address,
    address : oracleObj.address
  };

  fs.writeFile('./Details2.json', JSON.stringify(details), (err) => {
    if (err) {
      return console.log(err);
    }
    return console.log('Deployment Details are saved in Details2.json.');
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});