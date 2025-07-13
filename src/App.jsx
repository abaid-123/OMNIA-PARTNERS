import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Industries_home from "./pages/all_industries/Industry_home";
import IndustryRouter from "./pages/all_industries/IndustryRouter";
import IndustryPartsRouter from "./pages/all_industries/IndustryPartsRouter";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_industries" element={<Industries_home />} />
        <Route path="/all_industries/:slug" element={<IndustryRouter />} />
        <Route
          path="/all_industries/:industry/:slug"
          element={<IndustryPartsRouter />}
        />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
