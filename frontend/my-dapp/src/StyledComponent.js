import styled from "styled-components";

export const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background: url('https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg') no-repeat center center/cover;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

/* Navigation Bar */
export const Navbar = styled.nav`
  background: #4a90e2;
  color: white;
  text-align: center;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

/* Main Container */
export const Container = styled.div`
  position: relative;
  margin-top: 50px;
  width: 80%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #333;
`;

/* Input Box */
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 10px;
  resize: none;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border: 2px solid #4facfe;
  }
`;

/* Button */
export const GenerateButton = styled.button`
  padding: 14px 24px;
  font-size: 16px;
  border: none;
  background: linear-gradient(135deg, #110c0b, #fafafa);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, #fafafa, #110c0b);
    transform: scale(1.07);
  }
`;

/* Article Container */
export const ArticleContainer = styled.div`
  margin-top: 20px;
  width: 95%;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  min-height: 300px;
  overflow-y: auto;
  text-align: left;
  max-width: 1200px;
`;

export const ArticleTitle = styled.h2`
  font-size: 22px;
  color: #333;
  margin-bottom: 12px;
`;

export const ArticleText = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.7;
  white-space: pre-line;
`;
