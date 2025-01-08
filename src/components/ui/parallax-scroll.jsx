import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";

// Fisher-Yates Shuffle Algorithm
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const ParallaxScroll = ({ images, className }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: typeof window !== "undefined" ? document.body : null, // Use main page scroll
  });

  const shuffledImages = shuffleArray(images); // Shuffle images

  // Increase the parallax speed by using larger ranges for translation
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -400]); // Increase range
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 400]); // Increase range
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -400]); // Increase range

  const third = Math.ceil(shuffledImages.length / 3);

  const firstPart = shuffledImages.slice(0, third);
  const secondPart = shuffledImages.slice(third, 2 * third);
  const thirdPart = shuffledImages.slice(2 * third);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center w-full py-20", // Ensures content integrates with the page layout
        className,
      )}
      ref={containerRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-8xl gap-10 px-10 mb-56">
        <div className="grid gap-10 grid-auto-rows">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <img
                src={el}
                className="w-full h-auto object-cover object-center rounded-lg"
                alt="thumbnail"
                onClick={() => handleImageClick(el)}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 grid-auto-rows">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="w-full h-auto object-cover object-center rounded-lg"
                alt="thumbnail"
                onClick={() => handleImageClick(el)}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 grid-auto-rows">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={el}
                className="w-full h-auto object-cover object-center rounded-lg"
                alt="thumbnail"
                onClick={() => handleImageClick(el)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          {/* Prevent closing when clicking inside the modal content */}
          <motion.div
            className="bg-white p-8 rounded-xl max-w-4xl w-full max-h-full overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Stop propagation to avoid closing
          >
            <img
              src={selectedImage}
              className="w-full h-full object-contain max-h-[90vh]" // Scaling for large images
              alt="full-image"
            />
            <button
              className="absolute text-sm top-4 right-4 text-white bg-black rounded-full p-2"
              onClick={closeModal}
            >
              <IconX />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};
