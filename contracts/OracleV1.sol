// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

contract OracleV1 {
    string public tempData;

    function setTempData(string memory _tempData) public {
        tempData = _tempData;
    }
}