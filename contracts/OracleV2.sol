// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

contract OracleV2 {
    string public priceData;

    event PriceDataRequest();

    function requestPriceData() public {
        emit PriceDataRequest();
    }

    function updatePriceData(string memory _priceData) public {
        priceData = _priceData;
    }
}