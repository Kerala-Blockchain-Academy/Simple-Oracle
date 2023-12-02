const hre = require("hardhat");
const fs = require("fs");

main = async () => {
  const oracleObj = await hre.ethers.deployContract("OracleV2");
  // const oracleObj = await OracleV1.deploy();

  await oracleObj.waitForDeployment();

  console.log(
    `${oracleObj.runner.address} deployed ${oracleObj.target}`
  );

  let details = {
    deployer : oracleObj.runner.address,
    address : oracleObj.target
  };

  fs.writeFile('./Details2.json', JSON.stringify(details), (err) => {
    if (err) {
      return console.log(err);
    }
    return console.log('Deployment Details are saved in Details1.json.');
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});