import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { FaPhone, FaHome, FaInfoCircle, FaBoxOpen, FaImage } from "react-icons/fa";

const MENU_ITEMS = [
  { name: "Home", path: "/walltales/home", icon: <FaHome /> },
  { name: "About", path: "/walltales/about", icon: <FaInfoCircle /> },
  { name: "Products", path: "/walltales/products", icon: <FaBoxOpen /> },
  { name: "Gallery", path: "/walltales/gallery", icon: <FaImage /> },
];

const Navbar = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [reappearingDelay, setReappearingDelay] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamburgerDelay, setHamburgerDelay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    if (location.pathname === path) return;

    setIsTransitioning(true);
    setIsMenuOpen(false);
    setHamburgerDelay(true);
    setTimeout(() => {
      navigate(path);
    }, 1500);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest("nav")) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setReappearingDelay(true);

        setTimeout(() => {
          setReappearingDelay(false);
          setHamburgerDelay(false);
        }, 1000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-[1500ms] ${isScrolled ? "h-20" : "h-24"
        } ${isTransitioning ? "h-screen bg-white" : "h-16 bg-white"} flex items-center px-6 shadow-md dark:bg-gray-900`}
    >
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-lg z-30" />
      )}

      {!isTransitioning && !hamburgerDelay && (
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18H10" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L16 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> </g></svg>

        </button>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-screen md:w-1/3 lg:w-1/5`}
      >
        <ul className="flex flex-col space-y-8 p-6 mt-12 items-center md:items-baseline">
          {MENU_ITEMS.map((item) => (
            <li key={item.name} className="flex items-center space-x-4">
              <button
                onClick={() => handleLinkClick(item.path)}
                className={`flex items-center py-3 px-4 text-lg text-center font-semibold rounded md:text-left uppercase ${location.pathname === item.path
                  ? "text-teal-700 tracking-wide"
                  : "text-gray-700 hover:text-teal-700 hover:tracking-widest duration-500"
                  }`}
              >
                <span className="mr-3 text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
          {/* "Get a Call" button only visible on mobile */}
          <li className="block lg:hidden">
            <Link
              to="/Contact"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-teal-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] hover:animate-none bg-[conic-gradient(from_90deg_at_50%_50%,#A0F4F1_0%,#0ca899_50%,#A0F4F1_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-1 font-medium text-teal-600 backdrop-blur-3xl hover:text-teal-800">
                <FaPhone className="mr-4 text-md -rotate-12" />
                Get a Call
              </span>
            </Link>
          </li>
        </ul>
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex justify-center absolute left-1/2 transform -translate-x-1/2">
        <Link to={"/walltales/home"}><img
          src={logo}
          alt="Walltales Logo"
          className={`transition-all duration-[1000ms] ${isTransitioning ? "h-12 md:h-24" : "h-10"
            }`}
        /></Link>
      </div>


      {/* "Get a Call" button for larger screens */}
      {!isTransitioning && !reappearingDelay && (
        <div className="hidden lg:flex absolute right-10 top-4">
          <Link
            to="/walltales/Contact"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-teal-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] hover:animate-none bg-[conic-gradient(from_90deg_at_50%_50%,#A0F4F1_0%,#0ca899_50%,#A0F4F1_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-1 font-medium text-teal-600 backdrop-blur-3xl hover:text-teal-800">
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
