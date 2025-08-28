import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facilities";
import Extracurricular from "./pages/Extracurricular";
import Rules from "./pages/Rules";
import Messages from "./pages/Messages";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/extracurriculars" element={<Extracurricular />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/messages" element={<Messages />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}
