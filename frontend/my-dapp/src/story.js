import React, { useState } from "react";
import Web3 from "web3";
import "./styles/story.css";
import AiContent from "./AIContentNFT.json";
//import { Link } from "react-router-dom";
import {
  PageWrapper,
  Navbar,
  NavLink,
  Container,
  Title,
  InputBox,
  TextArea,
  GenerateButton,
  StoryContainer,
  StoryTitle,
  StoryText
} from "./StyledStory";

console.log("AIContentNFT JSON:", AiContent);

const CONTRACT_ABI = AiContent;
const CONTRACT_ADDRESS = "0xcBC59932902FCA201b0cBdC3B7d76703b5Fd0F0f"; // Deployed contract address on Sepolia

const StoryGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);

  const generateStory = async () => {
    if (!prompt) return alert("Please enter a story prompt.");

    setLoading(true);
    setStory("Generating story...");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDhULnNhPNUmgnqHltZktdnP_LYOllP1cc`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        }
      );

      const data = await response.json();
      const generatedStory =
        data.candidates[0]?.content?.parts[0]?.text || "Failed to generate story.";
      setStory(generatedStory);
      setStoryVisible(true);

      // Upload to IPFS & mint NFT
      const ipfsHash = await uploadToIPFS(generatedStory);
      if (ipfsHash) {
        await mintNFT(prompt, "Story", ipfsHash);
      }
    } catch (error) {
      console.error("Error:", error);
      setStory("Error generating story.");
    }
    setLoading(false);
  };

  const uploadToIPFS = async (storyText) => {
    const formData = new FormData();
    const blob = new Blob([storyText], { type: "text/plain" });
    formData.append("file", blob, "story.txt");

    try {
      const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
          pinata_api_key: "90b81923550bfb149ea9",
          pinata_secret_api_key:
            "9f235b3d1215543362fd22b6edeed8c39cd0c1b81419df85a37ad6f517184a89",
        },
        body: formData,
      });

      const data = await response.json();
      return data.IpfsHash;
    } catch (error) {
      console.error("IPFS Upload Error:", error);
      alert("Failed to upload story to IPFS.");
      return null;
    }
  };

  const mintNFT = async (title, contentType, ipfsHash) => {
    if (!window.ethereum) {
      return alert("MetaMask is not installed. Please install MetaMask.");
    }

    try {
      // Request account access
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const accounts = await web3.eth.getAccounts(); // Get connected MetaMask account
      const senderAddress = accounts[0]; // Use the first connected account

      console.log("Connected Wallet:", senderAddress);

      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

      const tx = await contract.methods.mintNFT(title, contentType, ipfsHash).send({
        from: senderAddress, // Use MetaMask connected account
        gas: 3000000,
      });

      console.log("NFT Minted:", tx);
      alert(`NFT Minted! View on IPFS: https://ipfs.io/ipfs/${ipfsHash}`);
    } catch (err) {
      console.error("Minting Error:", err);
      alert("Error minting NFT. Check console for details.");
    }
  };

  return (
    <PageWrapper>
      {/* Navbar */}
      <Navbar>
        <NavLink href="/">𝐇𝐨𝐦𝐞</NavLink>
      </Navbar>

      {/* Story Generator UI */}
      <Container>
        <Title>✨ AI Story Generator ✨</Title>
        <InputBox>
          <TextArea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a story idea..."
          ></TextArea>
          <GenerateButton onClick={generateStory} disabled={loading}>
            {loading ? "Generating..." : "Generate Story"}
          </GenerateButton>
        </InputBox>
      </Container>

      {/* Generated Story Section */}
      {storyVisible && (
        <StoryContainer>
          <StoryTitle>📖 Generated Story</StoryTitle>
          <StoryText>{story}</StoryText>
        </StoryContainer>
      )}
    </PageWrapper>
  );
};

export default StoryGenerator;
