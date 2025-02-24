import styled from "styled-components";

export const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  background: url('https://png.pngtree.com/background/20210710/original/pngtree-poetry-conference-background-picture-picture-image_1021790.jpg') no-repeat center center/cover;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

/* Navbar */
export const Navbar = styled.nav`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  text-align: center;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff416c;
  }
`;

/* Main Container */
export const Container = styled.div`
  position: relative;
  margin-top: 80px;
  width: 85%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 25px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #ff416c;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
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
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border: 2px solid #ff416c;
  }
`;

/* Button */
export const GenerateButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  background: linear-gradient(135deg, #ff416c, #ff9a9e);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, #ff1a53, #ff758c);
    transform: scale(1.07);
  }
`;

/* Poem Container */
export const PoemContainer = styled.div`
  margin-top: 20px;
  width: 90%;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  min-height: 250px;
  overflow-y: auto;
  text-align: left;
  max-width: 1200px;
`;

export const PoemTitle = styled.h2`
  font-size: 22px;
  color: #ff416c;
  margin-bottom: 12px;
  text-align: center;
`;

export const PoemText = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.8;
  white-space: pre-line;
`;
