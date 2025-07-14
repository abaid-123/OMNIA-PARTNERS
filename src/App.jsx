import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Industries_home from "./pages/all_industries/Industry_home";
import IndustryRouter from "./pages/all_industries/IndustryRouter";
import IndustryPartsRouter from "./pages/all_industries/IndustryPartsRouter";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CapabilitiesHome from "./pages/AllCapabilities/CapabilitiesHome";
import CapabilityRouter from "./pages/AllCapabilities/CapabilityRouter";
import CapabilityPartsRouter from "./pages/CapabilityPartsRouter";

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
        <Route path="/all_capabilities" element={<CapabilitiesHome />} />
        <Route path="/all_capabilities/:slug" element={<CapabilityRouter />} />
        <Route
          path="/all_capabilities/:capability/:slug"
          element={<CapabilityPartsRouter />}
        />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;