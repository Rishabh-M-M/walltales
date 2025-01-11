import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Nopage from "./pages/Nopage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="walltales/home" element={<Home />} />
        <Route path="walltales/" element={<Home />} />
        <Route path="walltales/about" element={<About />} />
        <Route path="walltales/products" element={<Products />} />
        <Route path="walltales/gallery" element={<Gallery />} />
        <Route path="walltales/blog" element={<Blog />} />
        <Route path="walltales/testimonials" element={<Testimonials />} />
        <Route path="walltales/contact" element={<Contact />} />
        <Route path="walltales/FAQ" element={<FAQ />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
