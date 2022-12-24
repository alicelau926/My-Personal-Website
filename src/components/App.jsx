import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Projectpage from "./Projectpage";
import Aboutme from "./Aboutme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Projectpage />} />
          <Route path="about" element={<Aboutme />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;