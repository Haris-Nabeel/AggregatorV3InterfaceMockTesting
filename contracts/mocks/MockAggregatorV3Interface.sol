// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.7;

contract MockAggrigatorV3Interface {
    uint256 public updatedAt;
    int256 public price;
    uint256 public decimals;

    ///@dev a mock to get chainlink price
    function setPriceUpdate(int256 _price) external {
        price = _price;
        updatedAt = block.timestamp;
    }

    function setDecimals(uint256 _newDecimals) external {
        decimals = _newDecimals;
    }

    ///@dev a mock to get chainlink price
    function latestRoundData()
        external
        view
        returns (
            uint80,
            int256,
            uint256,
            uint256,
            uint80
        )
    {
        uint80 roundId = 1;
        uint80 answerInRound = 1;
        return (roundId, price, updatedAt, updatedAt, answerInRound);
    }
}
