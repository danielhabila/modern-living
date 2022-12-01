import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          {/* <Route path={"dining"} element={<Dining />} />
          <Route path={"/art"} element={<Art />} />
          <Route path={"/lighting"} element={<Lighting />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
