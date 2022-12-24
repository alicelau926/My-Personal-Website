import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Projectpage from "./Projectpage";
import Aboutme from "./Aboutme";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Projectpage />} />
          <Route path="about" element={<Aboutme />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;