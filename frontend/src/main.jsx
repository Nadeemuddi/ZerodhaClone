// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import HomePage from "./landing_page/home/HomePage";
// import Signup from "./landing_page/signup/Signup";
// import AboutPage from "./landing_page/about/AboutPage";
// import ProductPage from "./landing_page/product/ProductPage";
// import PricingPage from "./landing_page/pricing/PricingPage";
// import SupportPage from "./landing_page/support/SupportPage";
// import Footer from "./landing_page/Footer";
// import Navbar from "./landing_page/Navbar";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
