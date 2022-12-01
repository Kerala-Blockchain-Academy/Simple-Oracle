// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "./OracleV2.sol";

contract CallOracle {
    OracleV2 internal OracleV2Obj;

    constructor(address OracleV2Addr) {
        OracleV2Obj = OracleV2(OracleV2Addr);
    }

    function requestUpdate() public {
        OracleV2Obj.requestPriceData();
    }

    function getPriceData() public view returns (string memory) {
        return OracleV2Obj.priceData();
    }
}