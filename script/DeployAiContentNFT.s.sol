// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/AiContentNFT.sol";

contract DeployAIContentNFT is Script {
    function run() external {
        vm.startBroadcast(); // Start broadcasting transactions

        // Deploy the AIContentNFT contract
        AIContentNFT nftContract = new AIContentNFT();

        console.log("AIContentNFT deployed at:", address(nftContract));

        vm.stopBroadcast(); // Stop broadcasting
    }
}
