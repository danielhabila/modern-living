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
import Footer from "./components/Footer";
import ItemDetails from "./pages/ItemDetails";
import Admin from "./pages/Admin";
import WallArt from "./pages/WallArt";
import Lighting from "./pages/Lighting";
import Success from "./pages/Success";
import ErrorPage from "./pages/ErrorPage";
import { CartProvider } from "./state/CartContext.jsx";

function App() {
  const location = useLocation();
  return (
    <div id="container">
      <div id="main-content">
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="furniture" element={<Furniture />} />
            <Route path="furniture/:id" element={<ItemDetails />} />
            <Route path="art" element={<WallArt />} />
            <Route path="art/:id" element={<ItemDetails />} />
            <Route path="lighting" element={<Lighting />} />
            <Route path="lighting/:id" element={<ItemDetails />} />
            <Route path="success" element={<Success />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CartProvider>
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
