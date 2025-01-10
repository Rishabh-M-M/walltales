import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider.jsx";
import home1 from "@/assets/Home_Banner_1.jpeg";
import { Quote } from "lucide-react";

export function Hero() {
  const images = [home1];

  return (
    <ImagesSlider
      className="mx-auto -mt-7"
      images={images}
    >
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
        className="z-50 flex flex-col justify-center items-center text-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl bg-clip-text text-transparent bg-white">
          <Quote />
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
