import React from "react";

const AccentWall = () => {
    const products = [
        { id: 1, name: "Modern Gray Tile", price: "$20", image: "/path/to/image1.jpg" },
        { id: 2, name: "Rustic Brick Tile", price: "$25", image: "/path/to/image2.jpg" },
        // Add more products as needed
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Accent Wall</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="product-card p-4 border rounded-md">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-gray-700">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccentWall;
