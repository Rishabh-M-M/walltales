import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.png";
import { Search } from "./Search.jsx";

const MENU_ITEMS = [
  { name: "Home", path: "./home" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        isScrolled ? "py-0" : "py-3"
      } bg-white shadow-md dark:bg-gray-900`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Walltales Logo" />
        </Link>

        {/* Centered Menu */}
        <ul className="hidden custom-md:flex space-x-8 font-medium">
          {MENU_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block py-2 px-3 rounded ${
                  location.pathname === item.path
                    ? "text-teal-700"
                    : "text-gray-700 hover:text-teal-700 dark:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Bar */}

        <div className="relative hidden custom-md:block">
          <Search />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg custom-md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
              aria-hidden="true"
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

        {/* Dropdown Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 right-4 w-56 bg-white border border-gray-200 rounded-lg shadow-lg custom-md:hidden dark:bg-gray-800 dark:border-gray-700 transition-opacity`}
        >
          <ul className="flex flex-col p-4 space-y-2">
            {MENU_ITEMS.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
