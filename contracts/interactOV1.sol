// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "./OracleV1.sol";

contract CallOracle {
    OracleV1 internal OracleV1Obj;

    constructor(address OracleV1Addr) {
        OracleV1Obj = OracleV1(OracleV1Addr);
    }

    function getPriceData() public view returns (string memory) {
        return OracleV1Obj.priceData();
    }
}
