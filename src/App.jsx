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
import About from "./pages/About";
import ContactHome from "./components/AboutComponents/ContactComponent/ContactHome";
import LoginPage from "./components/LoginComponent/LoginPage";
import SignUpFunctionalities from "./components/LoginComponent/SignUpFunctionalities";
import ForgotPassword from "./components/LoginComponent/ForgotPassword ";
import ResetPassword from "./components/LoginComponent/ResetPassword";
import FeaturedInsightsHome from "./pages/AllInsights/FeaturedInsightshome";
import BlogHome from "./components/InsightsComponent/Blogs/BlogHome";
import BlogDetail from "./components/InsightsComponent/Blogs/BlogDetail"
import CaseStudies from "./components/InsightsComponent/CaseStudy/CaseStudies";

import WhitePaperHome from "./components/InsightsComponent/WhitePaper/WhitePaperHome";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* industries */}
        <Route path="/all_industries" element={<Industries_home />} />
        <Route path="/all_industries/:slug" element={<IndustryRouter />} />
        <Route
          path="/all_industries/:industry/:slug"
          element={<IndustryPartsRouter />}
        />
        {/* capabilities */}
        <Route path="/all_capabilities" element={<CapabilitiesHome />} />
        <Route path="/all_capabilities/:slug" element={<CapabilityRouter />} />
        <Route
          path="/all_capabilities/:capability/:slug"
          element={<CapabilityPartsRouter />}
        />
        {/* Insights */}

        <Route path="insights" element={<FeaturedInsightsHome />} />
        <Route path="insights/blogs" element={<BlogHome/>}/>
        <Route path="/insights/blogs/:id" element={<BlogDetail />} />
        <Route path="insights/case-studies" element={<CaseStudies/>}/>
        <Route path="/insights/case-studies/:id" element={<BlogDetail />} />
        <Route path="insights/white-paper" element={<WhitePaperHome/>}/>


        

        {/* about page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactHome />} />
        {/* login */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpFunctionalities />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

      </Routes>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
