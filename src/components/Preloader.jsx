import React from "react";
import logo from "@/assets/logo.png";

const Preloader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center transform transition-transform duration-700 ${isLoading ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <img
        src={logo}
        alt="Walltales Logo"
        className={`h-16 transition-transform duration-700 ${isLoading ? "translate-y-0" : "translate-y-[-50vh]"
          }`}
      />
    </div>
  );
};

export default Preloader;
