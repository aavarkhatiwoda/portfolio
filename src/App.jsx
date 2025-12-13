import './index.sass';
import "./App.sass";
import Introduction from "./Pages/Introduction/Introduction";
import Interests from "./Pages/Interests/Interests";
import Work from "./Pages/Work/Work";
import Projects from "./Pages/Projects/Projects";
import Leadership from "./Pages/Leadership/Leadership";
import Footer from "./Pages/Footer/Footer";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function Home() {
  return (
    <div className="app_toplevel">
      <div className="app_mainpage_nofooter">
        <Introduction />
        <Interests />
        <Work />
        <Projects />
        <Leadership />
      </div>
      <Footer />
    </div>
  );
}

function RouteToResume({ resume_name }) {
  React.useEffect(() => {
    window.location.replace(window.location.origin + "/" + resume_name);
  }, [resume_name]);
  return null;
}

function RouteToGitHub() {
  window.location.replace("https://github.com/aavarkhatiwoda");
}

function RouteToLinkedIn() {
  window.location.replace("https://www.linkedin.com/in/aavar");
}

function RouteToInstagram() {
  window.location.replace("https://www.instagram.com/aavarkhatiwada/");
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<RouteToResume resume_name="aavar_active_resume.pdf" />} />
        <Route exact path="/github" element={<RouteToGitHub />} />
        <Route exact path="/linkedin" element={<RouteToLinkedIn />} />
        <Route exact path="/instagram" element={<RouteToInstagram />} />
      </Routes>
    </Router>
  );
}
