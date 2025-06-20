// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  Corrected Context Path
import { LanguageProvider } from "./components/content/languageContext"; //  Fix this path if needed

//  Page Components
import Credibilitypage from "./components/content/credibility";
import HistoryPage from "./components/content/history";
import HomePage from "./components/content/home";
import WorkAreaPage from "./components/content/workandarea";
import CurrentProjects from "./components/content/currentrescent";
import PastProjects from "./components/content/pastProject";
import BoardOfGovernorsTable from "./components/content/BoardOfGovernor";
import ProfessionalSupport from "./components/content/proffessionalSupport";
import ContactFeedback from "./components/content/contactUs";
import Donation from "./components/content/donation";
import Gallery from "./components/content/gallery";

function App() {
  return (
    //  Wrap everything with LanguageProvider
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/credibility" element={<Credibilitypage />} />
          <Route path="/work-area" element={<WorkAreaPage />} />
          <Route path="/current-projects" element={<CurrentProjects />} />
          <Route path="/past-projects" element={<PastProjects />} />
          <Route path="/board-of-governors" element={<BoardOfGovernorsTable />} />
          <Route path="/professional-support" element={<ProfessionalSupport />} />
          <Route path="/contact" element={<ContactFeedback />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/photo-gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
