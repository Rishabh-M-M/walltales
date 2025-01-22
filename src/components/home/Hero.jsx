import React, { useEffect } from "react";
import Slider from "react-slick";
import Rellax from "rellax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css"; // Custom styles

import home1 from "@/assets/Home Page Banner/Artboard 9 copy 5-100.jpg";
import home2 from "@/assets/Home Page Banner/Artboard 9 copy 6-100.jpg";
import home3 from "@/assets/Home Page Banner/Artboard 9 copy 7-100.jpg";
import home4 from "@/assets/Home Page Banner/Artboard 9 copy 8-100.jpg";

const images = [home1, home2, home3, home4];

export function Hero() {
  useEffect(() => {
    new Rellax(".rellax", {
      speed: -4,
      center: true,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    cssEase: "linear",
    dotsClass: "slick-dots slick-dots-custom",
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <div className="rellax parallax-bg" style={{ backgroundImage: `url(${image})` }}></div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slick-dots {
          position: absolute;
          bottom: 20px;
          width: 100%;
          text-align: center;
        }
        .slick-dots li {
          display: inline-block;
          margin: 0 5px;
        }
        .slick-dots li button {
          font-size: 0;
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .slick-dots li button::before {
          display: none;
        }
        .slick-dots li.slick-active button {
          background-color: rgba(255, 255, 255, 1);
        }
      `}</style>
    </div>
  );
}
