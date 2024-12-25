import React, { useEffect, useState } from 'react';
import { FaPaintRoller, FaWrench, FaTint, FaSun, FaBroom, FaPrint } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
    const [inView, setInView] = useState(false);  // State to track if the section is in view

    const features = [
        {
            icon: <FaPaintRoller />,
            title: "Strong Adhesive Vinyl",
            description: "Our premium adhesive vinyl ensures a firm bond to walls, providing long-lasting application without peeling or damage."
        },
        {
            icon: <FaWrench />,
            title: "Easy & Quick to Install",
            description: "With a user-friendly peel-and-stick design, our tiles are incredibly easy to install. No professional skills are required—simply peel, stick, and enjoy."
        },
        {
            icon: <FaTint />,
            title: "Waterproof & Oil Proof",
            description: "Our tiles are designed to be water and oil-resistant, making them perfect for use in kitchens, bathrooms, and other moisture-prone areas."
        },
        {
            icon: <FaSun />,
            title: "Fadeproof & Stainproof",
            description: "Exposure to sunlight and stains won’t affect the quality or appearance of our tiles, keeping your walls looking fresh and vibrant for years."
        },
        {
            icon: <FaBroom />,
            title: "Easily Clean & Maintain",
            description: "Our tiles are smooth and non-porous, making them resistant to dirt and grime. Cleaning is a breeze with just a damp cloth."
        },
        {
            icon: <FaPrint />,
            title: "High Quality UV Print",
            description: "Our advanced UV printing technology ensures that the colors are vibrant and rich, providing a sharp and long-lasting finish."
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
        <div className="max-w-7xl mx-auto px-4 text-center my-8">
            <div className="space-y-8">
                {/* Header Section */}
                <motion.div
                    id="why-choose-us-section"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 dark:text-white max-w-4xl text-center mx-auto pt-12 pb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-700">
                        At Walltales, we are committed to providing top-quality products that offer both style and durability.
                        Our peel-and-stick tiles are just one example of our commitment to easy, affordable, and high-quality DIY solutions.
                    </p>
                </motion.div>

                {/* Features Grid with Animations */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center space-y-4 p-6 bg-white shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5,
                                type: 'spring',
                                stiffness: 80,
                            }}
                        >
                            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white">
                                <span className="text-2xl">{feature.icon}</span>
                            </div>
                            <h3 className="font-semibold text-lg text-neutral-900">{feature.title}</h3>
                            <p className="text-gray-600 text-center">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Features;
