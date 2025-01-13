import React from "react";
import { IoIosInfinite } from "react-icons/io";

const Infinity = () => {
    return (
        <div className="relative flex items-center justify-center overflow-hidden h-[70vh]">
            {/* Text in the background */}
            <h3 className="absolute text-gray-800 text-xl sm:text-6xl font-bold uppercase tracking-widest z-0 text-center">
                Endless <br />Possibilities
            </h3>
            {/* Infinity symbol */}
            <div className="relative z-10 text-[20rem] text-teal-600">
                <IoIosInfinite />
            </div>
        </div>
    );
};

export default Infinity;
