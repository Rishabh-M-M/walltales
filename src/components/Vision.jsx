import React from "react";
import { motion } from "framer-motion";

const MotivationAndVision = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-teal-600 py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={sectionVariants}
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        Our Motivation and Vision
                    </h2>
                    <p className="text-teal-100 max-w-3xl mx-auto mb-8">
                        At Walltales, we are driven by the passion to transform ordinary
                        walls into extraordinary spaces. Our vision is to inspire creativity
                        and provide everyone with access to easy, stylish, and durable
                        design solutions that reflect their unique personality.
                    </p>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delayChildren: 0.3, staggerChildren: 0.2 }}
                >
                    {/* Motivation */}
                    <motion.div
                        className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105 text-teal-900"
                        variants={sectionVariants}
                    >
                        <h3 className="text-xl font-semibold mb-3">Our Motivation</h3>
                        <p>
                            We believe in empowering individuals to bring their spaces to
                            life. From DIY enthusiasts to professional designers, our mission
                            is to make creativity accessible to all by offering high-quality,
                            affordable, and user-friendly solutions.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105 text-teal-900"
                        variants={sectionVariants}
                    >
                        <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                        <p>
                            Our vision is to lead the way in innovative wall design solutions,
                            creating products that not only enhance spaces but also align with
                            sustainability and simplicity. We aim to inspire change one wall
                            at a time.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default MotivationAndVision;
