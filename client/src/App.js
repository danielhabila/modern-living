import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Furniture from "./pages/Furniture";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Details2 from "./pages/Details2";

function App() {
  return (
    <div id="container">
      <Router>
        <Navbar />
        <div id="main-content">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"furniture"} element={<Furniture />} />
            <Route path={"details"} element={<Details />} />
            <Route path={"details2"} element={<Details2 />} />

            <Route path={"/productpage"} element={<ProductPage />} />
            {/* <Route path={"/lighting"} element={<Lighting />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
