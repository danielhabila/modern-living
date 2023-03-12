import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Furniture from "./pages/Furniture";
import Home from "./pages/Home";
import Confirmation from "./pages/checkout/Checkout";
import Footer from "./components/Footer";
import ItemDetails from "./pages/ItemDetails";
import Admin from "./pages/Admin";
import WallArt from "./pages/WallArt";
import Lighting from "./pages/Lighting";

function App() {
  const location = useLocation();
  return (
    <div id="container">
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="furniture" element={<Furniture />} />
          <Route path="furniture/:id" element={<ItemDetails />} />
          <Route path="art" element={<WallArt />} />
          <Route path="art/:id" element={<ItemDetails />} />
          <Route path="lighting" element={<Lighting />} />
          <Route path="lighting/:id" element={<ItemDetails />} />
          <Route path="checkout" element={<Confirmation />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default function () {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
}
