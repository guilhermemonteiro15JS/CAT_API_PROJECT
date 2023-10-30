import React from "react";
import "./App1.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Breeds from "../pages/Breeds";
import About from "../pages/About";

function App1() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Breeds" element={<Breeds />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App1;
