import React, { useEffect, useState } from "react";
import {
  FaGlobe,
  FaInfinity,
  FaThumbsUp,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const [inView, setInView] = useState(false); // State to track if the section is in view

  const features = [
    {
      icon: <FaGlobe />,
      title: "      Global Reach           ",
    },
    {
      icon: <FaInfinity />,
      title: "   Endless Possibilities   ",
    },
    {
      icon: <FaThumbsUp />,
      title: " Unparalleled Quality ",
    },
    {
      icon: <FaTools />,
      title: " Effortless Installation",
    },
  ];

  // Set up IntersectionObserver when the component mounts
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-choose-us-section");
      const rect = section.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInView) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-4 text-center py-8 pb-12 bg-teal-600 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          {/* Header Section */}
          <motion.div
            id="why-choose-us-section"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl px-2 md:text-4xl lg:text-4xl font-bold max-w-4xl text-center mx-auto pt-6 py-3 text-white">
              About Walltales
            </h2>
            <div className="mb-4">
              <Link
                to="/walltales/about"
                className="text-teal-200 hover:text-teal-100 font-semibold text-sm md:text-lg transition duration-200"
              >
                Explore More About Us &rarr;
              </Link>
            </div>
            <p className="text-white text-sm md:text-lg text-justify">
              Walltales is a leading provider of innovative and exquisite wall decor solutions. We are passionate about transforming spaces into personalized reflections of individual style and creativity. With a global presence and a loyal customer base spanning the globe, we offer a diverse range of products, from innovative peel-and-stick tiles, captivating accent walls to and exquisite mosaic and elegant wallpapers creations. At Walltales, we believe that exceptional design should be accessible to everyone. We prioritize quality craftsmanship, utilizing premium materials and employing cutting-edge techniques to ensure lasting beauty and performance.
            </p>
          </motion.div>

          {/* Features Grid with Scroll Animation */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-4 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 80,
                }}
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-teal-800 rounded-full flex items-center justify-center text-white">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>
                <div className="text-center">
                  <pre>
                    <h3 className="font-semibold text-md md:text-lg text-white">
                      {feature.title}
                    </h3>
                  </pre>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
