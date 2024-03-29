// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestRBT is ERC20 {
    constructor() ERC20("TestRBT", "TRBT") {
        _mint(msg.sender, 10000000000000000000000000);
    }
}
