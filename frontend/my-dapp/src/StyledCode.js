import styled from "styled-components";

export const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background: linear-gradient(135deg, #183f65, #34495e);
  background: url('https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-a-programmer-with-lines-code-of-software-image_15746003.jpg') no-repeat center center/cover;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  color: white;
`;

/* Navbar */
export const Navbar = styled.nav`
  background: #1e3c72;
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
    color: #00f2fe;
  }
`;

/* Main Container */
export const Container = styled.div`
  position: relative;
  margin-top: 50px;
  width: 80%;
  max-width: 600px;
  background: #1f1f1f;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 12px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #00f2fe;
  margin-bottom: 10px;
`;

/* Input Box */
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  resize: none;
  outline: none;
`;

/* Button */
export const GenerateButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  background: #00f2fe;
  color: black;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #00c2c7;
    transform: scale(1.05);
  }
`;

/* Code Container */
export const CodeContainer = styled.div`
  margin-top: 20px;
  width: 95%;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  min-height: 300px;
  overflow-y: auto;
  text-align: left;
  max-width: 1200px;
`;

export const CodeTitle = styled.h2`
  font-size: 20px;
  color: #00f2fe;
  margin-bottom: 10px;
`;

export const CodeBlock = styled.pre`
  background: #272822;
  color: white;
  padding: 15px;
  border-radius: 8px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
