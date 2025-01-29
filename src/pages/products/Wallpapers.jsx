import React, { useState, useEffect } from "react";
import Rellax from "rellax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Banner Image
import WP_Banner from "@/assets/Products/Wallpapers/WPbanner.jpeg";

// Sample product images
import style3_a from "@/assets/Products/Peel And Stick Tiles/STYLE 3/Style 03-01.jpg";
import style3_b from "@/assets/Products/Peel And Stick Tiles/STYLE 3/Style 03-02.jpg";
import style3_c from "@/assets/Products/Peel And Stick Tiles/STYLE 3/Style 03-03.jpg";
import style3_d from "@/assets/Products/Peel And Stick Tiles/STYLE 3/Style 03-04.jpg";

import style41_a from "@/assets/Products/Peel And Stick Tiles/STYLE 41/Style 41-01.jpg";
import style41_b from "@/assets/Products/Peel And Stick Tiles/STYLE 41/Style 41-02.jpg";
import style41_c from "@/assets/Products/Peel And Stick Tiles/STYLE 41/Style 41-03.jpg";
import style41_d from "@/assets/Products/Peel And Stick Tiles/STYLE 41/Style 41-04.jpg";

import style134_a from "@/assets/Products/Peel And Stick Tiles/STYLE 134/STYLE 134-01.jpg";
import style134_b from "@/assets/Products/Peel And Stick Tiles/STYLE 134/STYLE 134-02.jpg";
import style134_c from "@/assets/Products/Peel And Stick Tiles/STYLE 134/STYLE 134-03.jpg";
import style134_d from "@/assets/Products/Peel And Stick Tiles/STYLE 134/STYLE 134-04.jpg";
// Custom arrow components for the modal slider
const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-gray-600 hover:text-black focus:outline-none"
    >
        <FaChevronLeft size={24} />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-gray-600 hover:text-black focus:outline-none"
    >
        <FaChevronRight size={24} />
    </button>
);

const Wallpapers = () => {
    // Initialize Rellax for parallax
    useEffect(() => {
        new Rellax(".rellax-banner", { speed: -2 });
    }, []);

    // Modal state
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Synchronize main & thumbnail sliders
    const [mainSlider, setMainSlider] = useState(null);
    const [thumbSlider, setThumbSlider] = useState(null);

    // Disable scrolling when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProduct]);

    // Product data
    const products = [
        {
            name: "3D Peel And Stick Olive Green Tiles",
            images: [style3_a, style3_b, style3_c, style3_d],
            dimensions: "10x10 inches",
            description:
                "Elegant olive-green tiles with a 3D peel-and-stick design for easy application.",
        },
        {
            name: "KitKat Teal Blue Tiles",
            images: [style41_a, style41_b, style41_c, style41_d],
            dimensions: "12x12 inches",
            description:
                "Vibrant teal-blue tiles in a KitKat pattern, perfect for adding a modern touch.",
        },
        {
            name: "Crayon Blue Long Hexagon Tiles",
            images: [style134_a, style134_b, style134_c, style134_d],
            dimensions: "8x12 inches",
            description: "Unique long hexagon tiles in a striking crayon blue color.",
        },
    ];

    // Modal slider settings
    const modalMainSliderSettings = {
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: thumbSlider,
        ref: (slider) => setMainSlider(slider),
    };

    const modalThumbSliderSettings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        focusOnSelect: true,
        asNavFor: mainSlider,
        ref: (slider) => setThumbSlider(slider),
    };

    return (
        <>
            {/* Banner without text */}
            <div className="relative w-full h-screen overflow-hidden">
                <img
                    src={WP_Banner}
                    alt="Wallpapers Banner"
                    className="w-full h-full mb-4 rellax-banner object-cover"
                />
                {/* Optional gradient overlay if desired */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" /> */}
            </div>

            {/* Main container with subtle gradient background */}
            <div className="bg-gradient-to-b from-zinc-50 to-white px-4 text-center relative z-30 pb-16">
                {/* Breadcrumb / Navigation */}
                <nav className="my-8 text-gray-500 text-lg md:text-xl">
                    <a href="/" className="hover:underline">
                        Walltales
                    </a>{" "}
                    / Products / <span className="text-gray-700">Wallpapers</span>
                </nav>

                {/* Responsive grid of products (4→3→2→1) */}
                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="
                group relative border rounded-xl overflow-hidden 
                shadow-md transition-all duration-300 
                cursor-pointer hover:shadow-2xl 
                hover:-translate-y-1 hover:scale-[1.02]
              "
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
                                {/* Default image */}
                                <img
                                    src={product.images[0]}
                                    alt={`${product.name} Preview`}
                                    className="w-full h-full object-cover 
                             transition-opacity duration-300 group-hover:opacity-80"
                                    onError={(e) => (e.target.src = "/fallback-image.jpg")}
                                />
                                {/* Hover image (if available) */}
                                {product.images[1] && (
                                    <img
                                        src={product.images[1]}
                                        alt={`${product.name} Hover Preview`}
                                        className="
                      absolute inset-0 w-full h-full object-cover 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300
                    "
                                        onError={(e) => (e.target.src = "/fallback-image.jpg")}
                                    />
                                )}
                            </div>
                            <p className="font-semibold text-base md:text-lg mt-4 mb-6 tracking-wide uppercase">
                                {product.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProduct && (
                    <div
                        className="
              fixed inset-0 flex items-center justify-center 
              bg-black bg-opacity-40 z-50
              transition-opacity duration-300
            "
                    >
                        {/* Click backdrop to close */}
                        <div
                            className="absolute inset-0 cursor-pointer"
                            onClick={() => setSelectedProduct(null)}
                        />
                        <div
                            className="
                relative z-10 bg-white rounded-xl shadow-2xl p-4
                w-full max-w-2xl mx-4
                transition-transform duration-300 scale-100
              "
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">{selectedProduct.name}</h2>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-2xl text-gray-600 hover:text-gray-800"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Main slider */}
                            <Slider {...modalMainSliderSettings} className="mb-4 relative">
                                {selectedProduct.images.map((image, i) => (
                                    <div key={i}>
                                        <div className="w-auto h-[40vh] md:h-[50vh] overflow-hidden">
                                            <img
                                                src={image}
                                                alt={`Product Image ${i + 1}`}
                                                className="w-auto h-full mx-auto object-cover"
                                                onError={(e) => (e.target.src = "/fallback-image.jpg")}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            {/* Thumbnail slider */}
                            <Slider
                                {...modalThumbSliderSettings}
                                className="py-4 rounded-2xl bg-zinc-100"
                            >
                                {selectedProduct.images.map((image, i) => (
                                    <div key={i}>
                                        <div className="w-auto h-16 md:h-20 overflow-hidden">
                                            <img
                                                src={image}
                                                alt={`Thumbnail ${i + 1}`}
                                                className="
                          w-auto h-full object-cover cursor-pointer
                          transition transform hover:scale-105
                        "
                                                onError={(e) => (e.target.src = "/fallback-image.jpg")}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            {/* Details */}
                            <p className="mt-4 text-sm md:text-base">
                                <strong>Dimensions:</strong> {selectedProduct.dimensions}
                            </p>
                            <p className="mt-2 text-sm md:text-base">
                                <strong>Description:</strong> {selectedProduct.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Wallpapers;
