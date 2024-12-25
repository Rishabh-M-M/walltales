import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// Navbar pages:
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Nopage from "./pages/Nopage.jsx";
import Products from "./pages/Products.jsx";
import Gallery from "./pages/Gallery.jsx";
import Blog from "./pages/Blog.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating page load or resource fetching
    setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? <Preloader /> : null} {/* Display preloader while loading */}
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
