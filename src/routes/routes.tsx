import * as React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Oracao from "../pages/Oracao";
import GenericLitany from "../pages/GenericLitany";
import GenericPrayer from "../pages/GenericPrayer";

function Paths() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oracao" element={<Oracao />} />
        <Route path="/litany" element={<GenericLitany />} />
        <Route path="/prayer" element={<GenericPrayer />} />
      </Routes>
    </>
  );
}

export default Paths;
