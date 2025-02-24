// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract AIContentNFT is ERC721, Ownable {
    using ECDSA for bytes32;

    uint256 private _tokenIds;
    mapping(bytes32 => bool) private _contentHashes;

    struct Content {
        string title;
        string contentType;
        string ipfsHash;
    }

    mapping(uint256 => Content) private _tokenContent;

    event NFTMinted(
        address owner,
        uint256 tokenId,
        string contentType,
        string ipfsHash
    );

    constructor() ERC721("AIContentNFT", "AINFT") Ownable(msg.sender) {}

    function mintNFT(
        string memory title,
        string memory contentType,
        string memory ipfsHash
    ) external {
        bytes32 contentHash = keccak256(
            abi.encode(title, contentType, ipfsHash)
        );
        require(!_contentHashes[contentHash], "Content already minted!");

        _tokenIds++;
        uint256 newTokenId = _tokenIds;

        _mint(msg.sender, newTokenId);
        _contentHashes[contentHash] = true;
        _tokenContent[newTokenId] = Content(title, contentType, ipfsHash);

        emit NFTMinted(msg.sender, newTokenId, contentType, ipfsHash);
    }

    function getContent(
        uint256 tokenId
    ) external view returns (string memory, string memory, string memory) {
        _requireOwned(tokenId); // OpenZeppelin v5.x fix
        Content memory content = _tokenContent[tokenId];
        return (content.title, content.contentType, content.ipfsHash);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        _requireOwned(tokenId); // OpenZeppelin v5.x fix
        return
            string(
                abi.encodePacked("ipfs://", _tokenContent[tokenId].ipfsHash)
            );
    }
}
