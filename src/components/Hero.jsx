import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider.jsx";
import image3 from "./assets/catalogue/WallTales_Dealer Catlogue_compressed (2)_page-0001.jpg";
import image2 from "./assets/slide2.jpeg";
import image1 from "./assets/slide1.jpeg";
import { Quote } from "lucide-react";
export function Hero() {
  const images = [image1, image2, image3];
  return (
    <ImagesSlider className="h-[100vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-white z-100">
          <Quote />
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
