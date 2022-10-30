const fs = require("fs");

main = async () => {
  const OracleV1 = await ethers.getContractFactory("OracleV1");
  const oracleObj = await OracleV1.deploy();

  await oracleObj.deployed();

  console.log(
    `${oracleObj.signer.address} deployed ${oracleObj.address}`
  );

  let details = {
    deployer : oracleObj.signer.address,
    address : oracleObj.address
  };

  fs.writeFile('./Details1.json', JSON.stringify(details), (err) => {
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