const Migrations = artifacts.require("OracleV2");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};