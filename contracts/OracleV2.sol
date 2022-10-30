// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

contract OracleV2 {
    string public tempData;

    event TempDataRequest();

    function requestTempData() public {
        emit TempDataRequest();
    }

    function updateTempData(string memory _tempData) public {
        tempData = _tempData;
    }
}