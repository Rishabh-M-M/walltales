import React, { useEffect, useState } from "react";
import logo from "@/assets/Artboard 8.png"; // Import the white version of the logo

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoaded) return null; // Hide preloader after loading

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-teal-600 z-50">
      <img
        src={logo}
        alt="Walltales Logo"
        className="w-24 h-24 animate-pulse"
      />
    </div>
  );
};

export default Preloader;
