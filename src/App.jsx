import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader"; // Import the Preloader
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Nopage from "./pages/Nopage";
import AccentWall from "./pages/products/AccentWall";
import DecorePlate from "./pages/products/DecorePlate";
import MosaicTiles from "./pages/products/MosaicTiles";
import PeelandStickFloorTiles from "./pages/products/PeelAndStickFloorTiles";
import PeelandStickTiles from "./pages/products/PeelAndStickTiles";
import Wallpapers from "./pages/products/Wallpapers";
import WallTileStickers from "./pages/products/WallTileStickers";

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <Preloader /> {/* Add the Preloader */}
      <BrowserRouter>
        <ScrollToTop /> {/* Ensure scrolling to top on route change */}
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="walltales/home" element={<Home />} />
          <Route path="walltales/" element={<Home />} />
          <Route path="walltales/about" element={<About />} />
          <Route path="walltales/products/accent-wall" element={<AccentWall />} />
          <Route path="walltales/products/peel-and-stick-tiles" element={<PeelandStickTiles />} />
          <Route path="walltales/products/peel-and-stick-floor-tiles" element={<PeelandStickFloorTiles />} />
          <Route path="walltales/products/wall-tile-stickers" element={<WallTileStickers />} />
          <Route path="walltales/products/mosaic-tiles" element={<MosaicTiles />} />
          <Route path="walltales/products/wallpapers" element={<Wallpapers />} />
          <Route path="walltales/products/decore-plate" element={<DecorePlate />} />
          <Route path="walltales/gallery" element={<Gallery />} />
          <Route path="walltales/blog" element={<Blog />} />
          <Route path="walltales/testimonials" element={<Testimonials />} />
          <Route path="walltales/contact" element={<Contact />} />
          <Route path="walltales/FAQ" element={<FAQ />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
