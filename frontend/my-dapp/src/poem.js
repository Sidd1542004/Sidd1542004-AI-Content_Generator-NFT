import React, { useState } from "react";
import Web3 from "web3";
import AiContent from "./AIContentNFT.json";
import {
    PageWrapper,
    Navbar,
    NavLink,
    Container,
    Title,
    InputBox,
    TextArea,
    GenerateButton,
    PoemContainer,
    PoemTitle,
    PoemText
} from "./StyledPoem";

console.log("AIContentNFT JSON:", AiContent);

const CONTRACT_ABI = AiContent;
const CONTRACT_ADDRESS = "0xcBC59932902FCA201b0cBdC3B7d76703b5Fd0F0f"; // Deployed contract address on Sepolia

const PoemGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [poem, setPoem] = useState("");
  const [loading, setLoading] = useState(false);
  const [poemVisible, setPoemVisible] = useState(false);

  const generatePoem = async () => {
    if (!prompt) return alert("Please enter a topic.");

    setLoading(true);
    setPoem("⏳ Generating Poem... Please wait.");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDhULnNhPNUmgnqHltZktdnP_LYOllP1cc`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Generate a well-formatted Poem for: ${prompt}` }] }],
          }),
        }
      );

      const data = await response.json();
      let generatedPoem = data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠ No response from AI.";

      // Remove unwanted symbols (#, *, -)
      generatedPoem = generatedPoem.replace(/[#*\-]/g, "").trim();

      setPoem(generatedPoem);
      setPoemVisible(true);

      // Upload to IPFS & Mint NFT
      const ipfsHash = await uploadToIPFS(generatedPoem);
      if (ipfsHash) {
        await mintNFT(prompt, "Poem", ipfsHash);
      }
    } catch (error) {
      console.error("Error:", error);
      setPoem("❌ Failed to generate Poem.");
    }

    setLoading(false);
  };

  const uploadToIPFS = async (poemText) => {
    const formData = new FormData();
    const blob = new Blob([poemText], { type: "text/plain" });
    formData.append("file", blob, "Poem.txt");

    try {
      const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
          pinata_api_key: "90b81923550bfb149ea9",
          pinata_secret_api_key: "9f235b3d1215543362fd22b6edeed8c39cd0c1b81419df85a37ad6f517184a89",
        },
        body: formData,
      });

      const data = await response.json();
      return data.IpfsHash;
    } catch (error) {
      console.error("IPFS Upload Error:", error);
      alert("Failed to upload Poem to IPFS.");
      return null;
    }
  };

  const mintNFT = async (title, contentType, ipfsHash) => {
    if (!window.ethereum) {
      return alert("MetaMask is not installed. Please install MetaMask.");
    }

    try {
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
      alert(`🎉 NFT Minted! View on IPFS: https://ipfs.io/ipfs/${ipfsHash}`);
    } catch (err) {
      console.error("Minting Error:", err);
      alert("❌ Error minting NFT. Check console for details.");
    }
  };

  return (
    <PageWrapper>
      {/* Navbar */}
      <Navbar>
        <NavLink href="/">𝐇𝐨𝐦𝐞</NavLink>
      </Navbar>

      {/* Poem Generator UI */}
      <Container>
        <Title>🌸 AI Poem Generator 🌸</Title>
        <InputBox>
          <TextArea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a topic for your poem..."
          ></TextArea>
          <GenerateButton onClick={generatePoem} disabled={loading}>
            {loading ? "Generating..." : "Generate Poem"}
          </GenerateButton>
        </InputBox>
      </Container>

      {/* Generated Poem Section */}
      {poemVisible && (
        <PoemContainer>
          <PoemTitle>📜 Your AI-Generated Poem</PoemTitle>
          <PoemText>{poem}</PoemText>
        </PoemContainer>
      )}
    </PageWrapper>
  );
};

export default PoemGenerator;
