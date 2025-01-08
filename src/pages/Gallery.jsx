import React from "react";
import { ParallaxScrollDemo } from "../components/Showcase";

const Gallery = () => {
  return (
    <main className="py-28">
      <h2 className="text-xl w-full px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 bg-white text-center mx-auto pt-14">
        Showcase
      </h2>
      <ParallaxScrollDemo />
    </main>
  );
};

export default Gallery;
