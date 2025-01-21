import React from "react";
import { ImagesSlider } from "../ui/images-slider.jsx";
import home1 from "@/assets/Home Page Banner/Artboard 9 copy 5-100.jpg";
import home2 from "@/assets/Home Page Banner/Artboard 9 copy 6-100.jpg";
import home3 from "@/assets/Home Page Banner/Artboard 9 copy 7-100.jpg";
import home4 from "@/assets/Home Page Banner/Artboard 9 copy 8-100.jpg";

export function Hero() {
  const images = [home1, home2, home3, home4];

  return (
    <ImagesSlider
      className="mx-auto"
      images={images} />
  );
}
