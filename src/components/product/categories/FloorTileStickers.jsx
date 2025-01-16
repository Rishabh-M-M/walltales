import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Carousel navigation icons

// Images for Peel and Stick Styles
import style3_a from "@/assets/Products/Peel And Stick Tiles/STYLE 3/Peel & Stick_Wall Tiles_A_2.jpg";
import style3_b from "@/assets/Products/Peel And Stick Tiles/STYLE 3/Peel & Stick_Wall Tiles_B_2.jpg";
import style3_c from "@/assets/Products/Peel And Stick Tiles/STYLE 3/Peel & Stick_Wall Tiles_C_2.jpg";
import style3_d from "@/assets/Products/Peel And Stick Tiles/STYLE 3/Peel & Stick_Wall Tiles_D_2.jpg";

// Add more styles as needed
import style41_a from "@/assets/Products/Peel And Stick Tiles/STYLE 41/Amazon Product Photo_41A.jpg";
import style41_b from "@/assets/Products/Peel And Stick Tiles/STYLE 41/Amazon Product Photo_41B.jpg";
import style41_c from "@/assets/Products/Peel And Stick Tiles/STYLE 41/Amazon Product Photo_41C.jpg";
import style41_d from "@/assets/Products/Peel And Stick Tiles/STYLE 41/bathroom interior 41.jpg";

import style134_a from "@/assets/Products/Peel And Stick Tiles/STYLE 134/STYLE 134-01.jpg";
import style134_b from "@/assets/Products/Peel And Stick Tiles/STYLE 134/STYLE 134-02.jpg";
import style134_c from "@/assets/Products/Peel And Stick Tiles/STYLE 134/STYLE 134-03.jpg";
import style134_d from "@/assets/Products/Peel And Stick Tiles/STYLE 134/STYLE 134-04.jpg";

const FloorTileStickers = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const products = [
        {
            name: "3D Peel And Stick Olive Green Tiles",
            images: [style3_a, style3_b, style3_c, style3_d],
            dimensions: "10x10 inches",
            description: "Elegant olive-green tiles with a 3D peel-and-stick design for easy application.",
        },
        {
            name: "KitKat Teal Blue Tiles",
            images: [style41_a, style41_b, style41_c, style41_d],
            dimensions: "12x12 inches",
            description: "Vibrant teal-blue tiles in a KitKat pattern, perfect for adding a modern touch.",
        },
        {
            name: "Crayon Blue Long Hexagon Tiles",
            images: [style134_a, style134_b, style134_c, style134_d],
            dimensions: "8x12 inches",
            description: "Unique long hexagon tiles in a striking crayon blue color.",
        },
        {
            name: "Faux Mosaic Peel And Stick Wall Tile",
            images: [style3_a, style3_b, style3_c, style3_d],
            dimensions: "10x10 inches",
            description: "Peel-and-stick faux mosaic tiles designed for a timeless and elegant look.",
        },
        {
            name: "Green Scales Mosaic Tiles",
            images: [style41_a, style41_b, style41_c, style41_d],
            dimensions: "12x12 inches",
            description: "Beautiful green tiles resembling fish scales, ideal for bathrooms or kitchens.",
        },
        {
            name: "Classic Terrazzo Tiles",
            images: [style134_a, style134_b, style134_c, style134_d],
            dimensions: "10x10 inches",
            description: "Classic terrazzo tiles with a peel-and-stick design for quick and easy setup.",
        },
    ];

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : selectedProduct.images.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev < selectedProduct.images.length - 1 ? prev + 1 : 0));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Peel and Stick Tiles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="group relative border rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer hover:ring-4 hover:ring-teal-500"
                        onClick={() => handleCardClick(product)}
                    >
                        <div className="relative w-auto h-96 overflow-hidden">
                            {/* Current Image */}
                            <img
                                src={product.images[0]}
                                alt={`${product.name} Preview`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:translate-x-full"
                                onError={(e) => (e.target.src = "/fallback-image.jpg")}
                            />
                            {/* Next Image on Hover */}
                            <img
                                src={product.images[1] || product.images[0]} // Fallback to the first image if no second image exists
                                alt={`${product.name} Hover Preview`}
                                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                onError={(e) => (e.target.src = "/fallback-image.jpg")}
                            />
                        </div>
                        <p className="font-bold text-center my-4 tracking-wide uppercase">{product.name}</p>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-8 w-full max-w-md mx-4 relative">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
                            <button onClick={handleCloseModal} className="text-2xl text-gray-600">
                                <FaTimes />
                            </button>
                        </div>
                        <div className="relative mb-4">
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
                            >
                                <FaChevronLeft />
                            </button>
                            <img
                                src={selectedProduct.images[currentImageIndex]}
                                alt={`Product Image ${currentImageIndex + 1}`}
                                className="w-auto h-full max-h-96 object-cover"
                                onError={(e) => (e.target.src = "/fallback-image.jpg")}
                            />
                            <button
                                onClick={handleNextImage}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                        <p className="mt-4 text-sm">
                            <strong>Dimensions:</strong> {selectedProduct.dimensions}
                        </p>
                        <p className="mt-2 text-sm">
                            <strong>Description:</strong> {selectedProduct.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloorTileStickers;
