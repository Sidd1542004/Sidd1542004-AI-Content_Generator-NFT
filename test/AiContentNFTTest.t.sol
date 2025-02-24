// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/AiContentNFT.sol";

contract AIContentNFTTest is Test {
    AIContentNFT nftContract;
    address owner = address(this); // The test contract acts as the deployer
    address user1 = address(0x123);
    address user2 = address(0x456);

    function setUp() public {
        nftContract = new AIContentNFT();
    }

    function testMintNFT() public {
        string memory title = "AI Artwork";
        string memory contentType = "image";
        string memory ipfsHash = "QmTestHash123";

        vm.prank(user1); // Simulate user1 calling mintNFT
        nftContract.mintNFT(title, contentType, ipfsHash);

        uint256 tokenId = 1; // First minted NFT should have tokenId = 1

        assertEq(
            nftContract.ownerOf(tokenId),
            user1,
            "User1 should own tokenId 1"
        );

        (
            string memory returnedTitle,
            string memory returnedType,
            string memory returnedHash
        ) = nftContract.getContent(tokenId);

        assertEq(returnedTitle, title, "Title should match");
        assertEq(returnedType, contentType, "Content type should match");
        assertEq(returnedHash, ipfsHash, "IPFS hash should match");

        string memory expectedURI = string(
            abi.encodePacked("ipfs://", ipfsHash)
        );
        assertEq(
            nftContract.tokenURI(tokenId),
            expectedURI,
            "TokenURI should match expected IPFS URL"
        );
    }

    function testDuplicateMintingShouldFail() public {
        string memory title = "Unique Content";
        string memory contentType = "text";
        string memory ipfsHash = "QmUniqueHash";

        vm.prank(user1);
        nftContract.mintNFT(title, contentType, ipfsHash);

        vm.expectRevert("Content already minted!");
        vm.prank(user2);
        nftContract.mintNFT(title, contentType, ipfsHash);
    }

    function testTokenURIIsPubliclyAccessible() public {
        string memory title = "Public Content";
        string memory contentType = "document";
        string memory ipfsHash = "QmPublicAccessHash";

        vm.prank(user1);
        nftContract.mintNFT(title, contentType, ipfsHash);

        uint256 tokenId = 1;

        // Expect no revert since tokenURI is public
        string memory uri = nftContract.tokenURI(tokenId);

        string memory expectedURI = string(
            abi.encodePacked("ipfs://", ipfsHash)
        );
        assertEq(uri, expectedURI, "TokenURI should match expected IPFS URL");
    }
}
