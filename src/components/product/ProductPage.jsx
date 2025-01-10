import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi"; // Import close icon

// Images for categories (replace with your image paths)
import peelAndStickTilesImage from "@/assets/Products/Peel And Stick Tiles/PASTbanner.jpeg";
import wallTileStickersImage from "@/assets/Products/Wall Tile Stickers/WTSbanner.jpeg";
import floorTileStickersImage from "@/assets/Products/Floor Tile Stickers/FTSbanner.jpeg";
import mosaicTilesImage from "@/assets/Products/Mosaic Tiles/MTbanner.jpeg";
import accentWallImage from "@/assets/Products/Accent Wall/AWbanner.jpeg";
import decorPlateImage from "@/assets/Products/Decore Plate/DPbanner.jpeg";
import wallpapersImage from "@/assets/Products/Wallpapers/WPbanner.jpeg";

// Import category components
import PeelAndStickTiles from "./categories/PeelAndStickTiles";
import WallTileStickers from "./categories/WallTileStickers";
import FloorTileStickers from "./categories/FloorTileStickers";
import MosaicTiles from "./categories/MosaicTiles";
import AccentWall from "./categories/AccentWall";
import DecorPlate from "./categories/DecorPlate";
import Wallpapers from "./categories/Wallpapers";

const categories = [
  { name: "Peel and Stick Tiles", image: peelAndStickTilesImage, component: PeelAndStickTiles },
  { name: "Wall Tile Stickers", image: wallTileStickersImage, component: WallTileStickers },
  { name: "Floor Tile Stickers", image: floorTileStickersImage, component: FloorTileStickers },
  { name: "Mosaic Tiles", image: mosaicTilesImage, component: MosaicTiles },
  { name: "Accent Wall", image: accentWallImage, component: AccentWall },
  { name: "Decor Plate", image: decorPlateImage, component: DecorPlate },
  { name: "Wallpapers", image: wallpapersImage, component: Wallpapers },
];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleTabClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleCloseCategory = () => {
    setSelectedCategory(null);
  };

  const selectedCategoryData = categories.find(
    (category) => category.name === selectedCategory
  );

  const SelectedCategoryComponent = selectedCategoryData?.component;

  return (
    <div className="w-full h-screen flex flex-col">
      <AnimatePresence>
        {/* Show category cards when no category is selected */}
        {selectedCategory === null ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.name}
                className="cursor-pointer rounded-md shadow-md overflow-hidden relative group"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick(category.name)}
                layoutId={category.name} // Add layoutId for shared transition
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-lg font-bold">{category.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Transitioned Banner */}
            {selectedCategoryData && (
              <motion.div
                className="relative w-full overflow-hidden"
                style={{ height: "100vw" }}
                layoutId={selectedCategoryData.name} // Match layoutId for shared transition
              >
                <img
                  src={selectedCategoryData.image}
                  alt={selectedCategoryData.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Tabs for categories */}
            <div className="flex justify-center items-center space-x-4 p-4 bg-gray-100 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`py-2 px-4 rounded-md flex items-center justify-center space-x-2 ${category.name === selectedCategory
                    ? "bg-teal-700 text-white rounded-xl"
                    : "bg-white text-teal-700 border border-teal-700 rounded-xl"
                    }`}
                  onClick={() => handleTabClick(category.name)}
                >
                  <span>{category.name}</span>
                </button>
              ))}
              <button
                className="py-2 px-4 rounded-full bg-white text-teal-500 border border-teal-500 flex items-center"
                onClick={handleCloseCategory}
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Selected Category Component */}
            <div className="p-8 flex-1 overflow-y-none">
              {SelectedCategoryComponent && <SelectedCategoryComponent />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
