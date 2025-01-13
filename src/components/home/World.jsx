import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { World } from "../ui/globe"; // Ensure this points to your globe.jsx file

export function GlobeDemo() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#1f8287", // Deep blue for the globe
        showAtmosphere: true,
        atmosphereColor: "#666666", // Bright blue for atmosphere
        atmosphereAltitude: 0.15,
        emissive: "#222222", // Subtle dark for emissive glow
        emissiveIntensity: 0.4,
        shininess: 1, // Slightly shinier globe
        polygonColor: "rgba(00,255, 00,1)", // Soft white polygons
        ambientLight: "#60A5FA", // Light blue ambient light
        directionalLeftLight: "#93C5FD", // Softer complementary light
        directionalTopLight: "#BFDBFE", // Brighter light for highlights
        pointLight: "#BFDBFE", // Bright point light
        arcTime: 1000,
        arcLength: 0.7,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.8,
    };

    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: "#60A5FA", // Light blue arc
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: "#3B82F6", // Bright blue arc
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: "#2563EB", // Deep blue arc
        },
        // Adding more teal arcs with different bright shades
        {
            order: 2,
            startLat: 22.6139,
            startLng: 76.209,
            endLat: 51.5074,
            endLng: -0.1278,
            arcAlt: 0.3,
            color: "#4ADE80", // Bright teal arc
        },
        {
            order: 2,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 48.8566,
            endLng: 2.3522,
            arcAlt: 0.4,
            color: "#34D399", // Vibrant teal arc
        },
        {
            order: 3,
            startLat: -23.5505,
            startLng: -46.6333,
            endLat: 40.7128,
            endLng: -74.0060,
            arcAlt: 0.6,
            color: "#2DD4BF", // Aqua teal arc
        },
        {
            order: 3,
            startLat: 20.6139,
            startLng: 78.209,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: "#14B8A6", // Light turquoise arc
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center py-20 h-screen dark:bg-black bg-white relative w-full">
            <div
                className="max-w-7xl mx-auto w-full relative overflow-hidden flex flex-col items-center"
                style={{ height: "700px" }} // Increased size
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h2 className="text-center text-2xl py-4 md:text-5xl font-bold text-black dark:text-white mb-4">
                        Explore Our Global Reach
                    </h2>
                    <p className="text-center text-lg md:text-xl font-normal text-neutral-700 dark:text-neutral-200 max-w-2xl mx-auto">
                        Trusted by customers worldwide, we deliver exceptional design to homes and businesses across the globe.
                    </p>
                </motion.div>
                <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-[rgba] z-40" />
                <div
                    className="absolute flex items-center justify-center w-full h-full my-28"
                    style={{ maxHeight: "600px", maxWidth: "1000px", minHeight: "300px", minWidth: "500px" }} // Larger globe
                >
                    <Suspense fallback={<div className="text-black">Loading globe...</div>}>
                        <World globeConfig={globeConfig} data={sampleArcs} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
