import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Furniture from "./pages/Furniture";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div id="container">
      <Router>
        <Navbar />
        <div id="main-content">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"furniture"} element={<Furniture />} />
            <Route path={"ProductDetails"} element={<ProductDetails />} />

            {/* <Route path={"/lighting"} element={<Lighting />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
