import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { portfolioContent } from "./content/portfolioContent";

function App() {
  const [language, setLanguage] = useState("en");

  const content = useMemo(() => portfolioContent[language], [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <BrowserRouter>
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        content={content}
      />
      <Routes>
        <Route path="/" element={<Home content={content} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;