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
    setIsMenuOpen(false); // Close the menu during page transition
    setTimeout(() => {
      navigate(path);
    }, 1500); // Transition time
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

        setTimeout(() => {
          setReappearingDelay(false);
        }, 1000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-[1500ms] ${isScrolled ? "h-16" : "h-20"
        } ${isTransitioning ? "h-screen bg-white" : "h-16 bg-white"} flex items-center px-6 shadow-md dark:bg-gray-900`}
    >
      {/* Hamburger Menu */}
      {!isTransitioning && (
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-2/3 md:w-1/3`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {MENU_ITEMS.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleLinkClick(item.path)}
                className={`block py-2 px-3 rounded text-left font-bold uppercase ${location.pathname === item.path
                    ? "text-teal-700 underline underline-offset-4"
                    : "text-gray-700 hover:text-teal-700"
                  }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Centered Logo */}
      <div className="flex-1 flex justify-center">
        <img
          src={logo}
          alt="Walltales Logo"
          className={`transition-all duration-[1000ms] ${isTransitioning ? "h-24" : "h-8"}`}
        />
      </div>

      {/* Get a Call Button */}
      {!isTransitioning && !reappearingDelay && (
        <div className="relative">
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
    </nav>
  );
};

export default Navbar;
