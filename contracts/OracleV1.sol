// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

contract OracleV1 {
    string public priceData;

    function setPriceData(string memory _priceData) public {
        priceData = _priceData;
    }
}