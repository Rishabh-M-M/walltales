import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductPage = ({ categories, initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || categories[0].name);

  const handleTabClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const selectedCategoryData = categories.find(
    (category) => category.name === selectedCategory
  );

  const SelectedCategoryComponent = selectedCategoryData?.component;

  return (
    <div className="w-full min-h-screen flex flex-col">
      <AnimatePresence mode="wait">
        {selectedCategory && (
          <motion.div
            className="flex flex-col flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            key={selectedCategory}
          >
            {selectedCategoryData && (
              <motion.div
                className="relative w-full"
                style={{ aspectRatio: "16/9" }}
                layoutId={selectedCategoryData.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={selectedCategoryData.image}
                  alt={selectedCategoryData.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            )}
            {/* Dropdown for Small Screens */}
            <div className="block md:hidden p-4 bg-gray-100 shadow-sm">
              <select
                className="w-full py-2 px-4 border border-teal-700 rounded-xl text-teal-700 bg-white"
                value={selectedCategory}
                onChange={(e) => handleTabClick(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Tabs for Larger Screens */}
            <div className="hidden md:flex justify-center items-center space-x-4 p-4 bg-gray-100 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`py-2 px-4 rounded-md ${category.name === selectedCategory
                    ? "bg-teal-700 text-white rounded-xl shadow-md"
                    : "bg-white text-teal-700 border border-teal-700 rounded-xl"
                    }`}
                  onClick={() => handleTabClick(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="p-4 md:p-8 flex-1 overflow-y-auto">
              {SelectedCategoryComponent && <SelectedCategoryComponent />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
