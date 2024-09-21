import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
