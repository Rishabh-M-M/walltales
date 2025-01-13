import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { FaPhone } from "react-icons/fa";

const MENU_ITEMS = [
  { name: "Home", path: "/walltales/home" },
  { name: "About", path: "/walltales/about" },
  { name: "Products", path: "/walltales/products" },
  { name: "Gallery", path: "/walltales/gallery" },
];

const Navbar = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [reappearingDelay, setReappearingDelay] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    if (location.pathname === path) return;

    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
    }, 1500); // Increased transition time
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setReappearingDelay(true);

        // Clear reappearingDelay after a brief delay
        setTimeout(() => {
          setReappearingDelay(false);
        }, 1000); // Adjust delay here as needed
      }, 2000); // Duration of transition reset
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-[1500ms] ${isScrolled ? "h-16" : "h-20"} ${isTransitioning ? "h-screen bg-white" : "h-16 bg-white"
        } flex justify-between items-center px-6 shadow-md dark:bg-gray-900`}
    >
      <div
        className={`transition-all duration-[5000ms] ${isTransitioning
          ? "absolute inset-0 flex justify-center items-center"
          : ""
          }`}
      >
        <img
          src={logo}
          alt="Walltales Logo"
          className={`transition-all duration-[1000ms] ${isTransitioning ? "h-24" : "h-8"
            }`}
        />
      </div>

      {/* Centered Menu */}
      {!isTransitioning && !reappearingDelay && (
        <ul className="hidden custom-md:flex space-x-16 font-medium text-lg">
          {MENU_ITEMS.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleLinkClick(item.path)}
                className={`block py-2 px-3 rounded transition-all duration-[1000ms] font-extrabold uppercase tracking-normal ${location.pathname === item.path
                  ? "text-teal-700 font-semibold underline underline-offset-4 tracking-widest"  // Active item in teal
                  : "text-gray-700 hover:text-teal-700 hover:tracking-widest dark:text-white"  // Inactive items are gray
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Get a Call Button */}
      {!isTransitioning && !reappearingDelay && (
        <div className="relative hidden custom-md:block">
          <Link
            to="/Contact"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-teal-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] hover:animate-none bg-[conic-gradient(from_90deg_at_50%_50%,#A0F4F1_0%,#0ca899_50%,#A0F4F1_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-1 text-md font-medium text-teal-600 backdrop-blur-3xl hover:text-teal-800">
              <FaPhone className="mr-4 text-md -rotate-12" />
              Get a Call
            </span>
          </Link>
        </div>
      )}

      {/* Hamburger for mobile */}
      {!isTransitioning && !reappearingDelay && (
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg custom-md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
