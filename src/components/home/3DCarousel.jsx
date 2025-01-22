import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';

import img2 from "@/assets/Gallery/WT Gallery-02.jpg";
import img3 from "@/assets/Gallery/WT Gallery-03.jpg";
import img9 from "@/assets/Gallery/WT Gallery-09.jpg";
import img12 from "@/assets/Gallery/WT Gallery-12.jpg";
import img14 from "@/assets/Gallery/WT Gallery-14.jpg";
import img19 from "@/assets/Gallery/WT Gallery-19.jpg";
import img30 from "@/assets/Gallery/WT Gallery-30.jpg";
import img31 from "@/assets/Gallery/WT Gallery-31.jpg";
import img43 from "@/assets/Gallery/WT Gallery-43.jpg";
import img44 from "@/assets/Gallery/WT Gallery-44.jpg";
import img47 from "@/assets/Gallery/WT Gallery-47.jpg";

const My3DCarousel = () => {
    const [goToSlide, setGoToSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGoToSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const slides = [
        { key: '1', content: <img src={img2} alt="Gallery-02" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} /> },
        { key: '2', content: <img src={img3} alt="Gallery-03" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} /> },
        { key: '3', content: <img src={img9} alt="Gallery-09" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} /> },
        { key: '4', content: <img src={img12} alt="Gallery-12" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} /> },
        { key: '5', content: <img src={img14} alt="Gallery-14" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} /> },
        { key: '6', content: <img src={img19} alt="Gallery-19" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} /> },
        { key: '7', content: <img src={img30} alt="Gallery-30" style={{ width: '100%', height: '60vh', objectFit: 'cover' }} /> },
        { key: '8', content: <img src={img31} alt="Gallery-31" style={{ width: '100%', height: '60vh', objectFit: 'cover' }} /> },
        { key: '9', content: <img src={img43} alt="Gallery-43" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} /> },
        { key: '10', content: <img src={img44} alt="Gallery-44" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} /> },
        { key: '11', content: <img src={img47} alt="Gallery-47" style={{ width: '100%', height: '65vh', objectFit: 'cover' }} /> },
    ];

    return (
        <>
            <h2 className="text-xl m-auto px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 dark:text-white max-w-4xl text-center pt-24">
                Gallery
            </h2>

            <div style={{ width: '80%', height: '80vh', margin: '0 7% 0 13%', position: 'relative' }}>
                <button onClick={() => setGoToSlide((goToSlide - 1 + slides.length) % slides.length)} style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', zIndex: 2, fontSize: '2rem', cursor: 'pointer', background: 'none', border: 'none' }}>◀</button>
                <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    offsetRadius={2}
                    showNavigation={false}
                    animationConfig={config.slow}
                />
                <button onClick={() => setGoToSlide((goToSlide + 1) % slides.length)} style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', zIndex: 2, fontSize: '2rem', cursor: 'pointer', background: 'none', border: 'none' }}>▶</button>
                {/* <div style={{ margin: "2px 0", pposition: 'absolute', bottom: '4%', width: '100%', display: 'flex', justifyContent: 'center', gap: '15px' }}>
                    {slides.map((_, i) => (
                        <div key={i} onClick={() => setGoToSlide(i)} style={{ height: '10px', background: goToSlide === i ? '#333' : '#ccc', width: '10px', cursor: 'pointer' }}></div>
                    ))}
                </div> */}
            </div>
        </>
    );
};

export default My3DCarousel;
