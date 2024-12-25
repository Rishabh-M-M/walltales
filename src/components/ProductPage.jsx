import React, { useState } from "react";

const ProductsPage = () => {
  // Sample categories and products
  const categories = [
    "Wallpaper",
    "Tile Stickers",
    "Floor Tiles",
    "Wall Decors",
  ];
  const products = [
    {
      id: 1,
      category: "Wallpaper",
      name: "Floral Wallpaper",
      price: 25,
      popularity: 4,
      color: "Blue",
      description: "Elegant floral patterns.",
      images: ["image1.jpg"],
    },
    {
      id: 2,
      category: "Tile Stickers",
      name: "Modern Tile Stickers",
      price: 15,
      popularity: 5,
      color: "Green",
      description: "Peel-and-stick modern tiles.",
      images: ["image2.jpg"],
    },
    // Add more products as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filters, setFilters] = useState({
    color: "",
    price: "all",
    popularity: "all",
  });

  // Filtered products
  const filteredProducts = products.filter((product) => {
    return (
      product.category === selectedCategory &&
      (filters.color === "" || product.color === filters.color) &&
      (filters.price === "all" ||
        (filters.price === "low" ? product.price <= 20 : product.price > 20)) &&
      (filters.popularity === "all" ||
        product.popularity === Number(filters.popularity))
    );
  });

  return (
    <div className="p-6">
      <h2 className="text-xl w-full px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 bg-white text-center mx-auto py-12">
        Our Products
      </h2>
      {/* Categories */}
      <div className="flex gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 rounded ${selectedCategory === category ? "bg-teal-600 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Filters</h3>
        <div className="flex gap-4">
          <select
            className="border px-3 py-2 rounded"
            onChange={(e) => setFilters({ ...filters, color: e.target.value })}
          >
            <option value="">Color</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
          <select
            className="border px-3 py-2 rounded"
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          >
            <option value="all">Price</option>
            <option value="low">Under $20</option>
            <option value="high">Over $20</option>
          </select>
          <select
            className="border px-3 py-2 rounded"
            onChange={(e) =>
              setFilters({ ...filters, popularity: e.target.value })
            }
          >
            <option value="all">Popularity</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
          </select>
        </div>
      </div>

      {/* Product Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-teal-600 font-bold mt-2">${product.price}</p>
            <button className="mt-4 w-full py-2 bg-teal-600 text-white rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
