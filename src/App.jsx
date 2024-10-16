import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DetailPage from "./Components/DetailPage";
import Admin from "./Components/Admin";
import Projected from "./Components/Projected";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details/:name" element={<DetailPage/>} />
            <Route path="/admin" element={<Projected Component={Admin} />}/>
            <Route path="/login" element={<LoginPage/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
