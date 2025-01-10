import React from "react";

const Wallpapers = () => {
    const products = [
        "Product 1",
        "Product 2",
        "Product 3",
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Wallpapers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="border rounded-md p-4 shadow-md hover:shadow-lg"
                    >
                        <p>{product}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wallpapers;
