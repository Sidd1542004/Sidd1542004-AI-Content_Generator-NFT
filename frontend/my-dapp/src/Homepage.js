import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <h1>AI-Driven NFT Content Creation</h1>
        <p>
          Generate unique AI-powered content for NFTs, including stories, code,
          images, articles, and poems. Elevate your NFT creations with AI!
        </p>
        <Link to="/story-generator">
          <HeroButton>Start Creating</HeroButton>
        </Link>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <h2>Our AI Tools</h2>
        <FeaturesGrid>
          <FeatureLink to="/story-generator">
            <FeatureCard>
              <h3>📝 AI Story Writer</h3>
              <p>Create compelling NFT storylines.</p>
            </FeatureCard>
          </FeatureLink>

          <FeatureLink to="/code-generator">
            <FeatureCard>
              <h3>💻 AI Code Generator</h3>
              <p>Generate smart contract code for blockchain integration.</p>
            </FeatureCard>
          </FeatureLink>

          <FeatureLink to="/image-generator">
            <FeatureCard>
              <h3>🎨 AI Image Generator</h3>
              <p>Generate NFT artwork effortlessly.</p>
            </FeatureCard>
          </FeatureLink>

          <FeatureLink to="/article-generator">
            <FeatureCard>
              <h3>📰 AI Article Creator</h3>
              <p>Generate unique NFT-related articles.</p>
            </FeatureCard>
          </FeatureLink>

          <FeatureLink to="/poem-generator">
            <FeatureCard>
              <h3>✍ AI Poem Generator</h3>
              <p>Create poetic NFT descriptions.</p>
            </FeatureCard>
          </FeatureLink>
        </FeaturesGrid>
      </FeaturesSection>

      {/* How It Works */}
      <HowItWorksSection>
        <h2>How It Works</h2>
        <Steps>
          <Step>
            <h3>1️⃣ Select Content Type</h3>
            <p>Choose what kind of content you want to generate.</p>
          </Step>
          <Step>
            <h3>2️⃣ AI Generates Unique Content</h3>
            <p>Our AI creates a one-of-a-kind NFT asset.</p>
          </Step>
          <Step>
            <h3>3️⃣ Export & Mint</h3>
            <p>Download your content and mint it on your preferred blockchain.</p>
          </Step>
        </Steps>
      </HowItWorksSection>

      {/* Call To Action */}
      <CallToAction>
        <h2>Start Your AI-Powered NFT Journey Today!</h2>
        <ButtonContainer>
          <Link to="/story-generator">
            <HeroButton>Try Story Generator</HeroButton>
          </Link>
          <Link to="/article-generator">
            <HeroButton>Try Article Generator</HeroButton>
          </Link>
        </ButtonContainer>
      </CallToAction>
    </Container>
  );
};

export default HomePage;

/* Styled Components */
const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const HeroSection = styled.div`
  background: linear-gradient(to right, #4a90e2, #9013fe);
  color: white;
  padding: 60px 20px;
  border-radius: 10px;
`;

const HeroButton = styled.button`
  background: #ffcc00;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #e6b800;
    transform: scale(1.05);
  }
`;

const FeaturesSection = styled.div`
  margin-top: 50px;
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const FeatureCard = styled.div`
  background: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  width: 220px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #e0e0e0;
  }
`;

/* Link Wrapper for Feature Cards */
const FeatureLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const HowItWorksSection = styled.div`
  margin-top: 50px;
`;

const Steps = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Step = styled.div`
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
  width: 220px;
`;

const CallToAction = styled.div`
  margin-top: 50px;
  background: #673ab7;
  color: white;
  padding: 40px 20px;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;
