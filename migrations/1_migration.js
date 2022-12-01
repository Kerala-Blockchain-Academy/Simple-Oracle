const Migrations = artifacts.require("OracleV1");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};