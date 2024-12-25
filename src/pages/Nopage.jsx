import React from 'react';
import { motion } from 'framer-motion'; // For animation

const Nopage = () => {
    return (
        <motion.main
            className="flex items-center justify-center h-screen bg-gradient-to-r from-teal-500 to-teal-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="text-center text-white">
                <h2 className="text-5xl font-bold mb-4">ERROR 404</h2>
                <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>

                {/* Go Back Link */}
                <a
                    href="/"
                    className="inline-block px-6 py-3 bg-white text-teal-900 font-semibold rounded-lg transition transform hover:scale-105 hover:text-teal-600"
                >
                    Go Back
                </a>
            </div>
        </motion.main>
    );
};

export default Nopage;
