import React, { useEffect, useState } from "react";
import {
  FaPaintRoller,
  FaWrench,
  FaTint,
  FaSun,
  FaBroom,
  FaPrint,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const [inView, setInView] = useState(false); // State to track if the section is in view

  const features = [
    {
      icon: <FaPaintRoller />,
      title: "Strong Adhesive Vinyl",
    },
    {
      icon: <FaWrench />,
      title: "Easy & Quick to Install",
    },
    {
      icon: <FaTint />,
      title: "Waterproof & Oil Proof",
    },
    {
      icon: <FaSun />,
      title: "Fadeproof & Stainproof",
    },
    {
      icon: <FaBroom />,
      title: "Easily Clean & Maintain",
    },
    {
      icon: <FaPrint />,
      title: "High Quality UV Print",
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
    <div className="px-4 text-center py-8 bg-teal-600 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          {/* Header Section */}
          <motion.div
            id="why-choose-us-section"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl px-2 md:text-4xl lg:text-4xl font-bold max-w-4xl text-center mx-auto pt-6 py-4 text-white">
              About Walltales
            </h2>
            <div className="mb-6">
              <Link
                to="/about"
                className="text-teal-200 hover:text-teal-100 font-semibold text-sm md:text-lg transition duration-200"
              >
                Explore More About Us &rarr;
              </Link>
            </div>
            <p className="text-white text-sm md:text-lg">
              At Walltales, we are committed to providing top-quality products
              that offer both style and durability. We believe that everyone
              should have access to affordable and easy DIY solutions, and our
              peel and stick tiles are just one example of our commitment to
              that mission.
            </p>
          </motion.div>

          {/* Features Grid with Scroll Animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 80,
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center text-white">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-md md:text-lg text-white">
                    {feature.title}
                  </h3>
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
