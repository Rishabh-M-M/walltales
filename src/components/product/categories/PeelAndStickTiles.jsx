import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Importing the close icon

const PeelAndStickTiles = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            name: "Peel and Stick Tile 1",
            images: [
                "path_to_image_1.jpg",
                "path_to_image_2.jpg",
                "path_to_image_3.jpg"
            ],
            dimensions: "12 x 12 inches",
            description: "A stylish peel and stick tile for easy installation."
        },
        {
            name: "Peel and Stick Tile 2",
            images: [
                "path_to_image_4.jpg",
                "path_to_image_5.jpg",
                "path_to_image_6.jpg"
            ],
            dimensions: "12 x 12 inches",
            description: "Durable and easy-to-maintain peel and stick tile."
        },
        {
            name: "Peel and Stick Tile 3",
            images: [
                "path_to_image_7.jpg",
                "path_to_image_8.jpg",
                "path_to_image_9.jpg"
            ],
            dimensions: "12 x 12 inches",
            description: "Modern design with long-lasting adhesive backing."
        },
    ];

    const handleCardClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Peel and Stick Tiles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="border rounded-md p-4 shadow-md hover:shadow-lg cursor-pointer"
                        onClick={() => handleCardClick(product)}
                    >
                        <img src={product.images[0]} alt={product.name} className="w-full h-40 object-cover mb-2" />
                        <p>{product.name}</p>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-md p-8 w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
                            <button onClick={handleCloseModal} className="text-2xl text-gray-600">
                                <FaTimes />
                            </button>
                        </div>
                        <div className="mb-4">
                            <div className="carousel">
                                {selectedProduct.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Product Image ${index + 1}`}
                                        className="w-full h-40 object-cover mb-2"
                                    />
                                ))}
                            </div>
                        </div>
                        <p><strong>Dimensions:</strong> {selectedProduct.dimensions}</p>
                        <p><strong>Description:</strong> {selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PeelAndStickTiles;
