import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomePage from "./Homepage";
import StoryGenerator from "./story"; // Import Story Generator component
import ArticleGenerator from "./article"; // Import Article Generator component
import CodeGenerator from "./code";
import PoemGenerator from "./poem";
// Define a theme object (optional)
const theme = {
  colors: {
    primary: "#4a90e2",
    secondary: "#9013fe",
    background: "#f8f8f8",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story-generator" element={<StoryGenerator />} />
          <Route path="/article-generator" element={<ArticleGenerator />} />
          <Route path="/code-generator" element={<CodeGenerator />} />
          <Route path="/poem-generator" element={<PoemGenerator />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
