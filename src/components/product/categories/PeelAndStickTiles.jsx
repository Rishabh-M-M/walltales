import React from "react";

const PeelAndStickTiles = () => {
    const products = [
        "Peel and Stick Tile 1",
        "Peel and Stick Tile 2",
        "Peel and Stick Tile 3",
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Peel and Stick Tiles</h1>
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

export default PeelAndStickTiles;
