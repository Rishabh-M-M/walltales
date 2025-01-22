import React from "react";
import { useState } from "react";
import { Hero } from "../components/home/Hero";
import WhyChooseUs from "../components/home/Choose";
import { InfiniteMovingCardsDemo } from "../components/home/Reviews";
import { AppleCardsCarouselDemo } from "../components/home/Categories";
import MySlider from "../components/home/VideoCarousel";
import My3DCarousel from "../components/home/3DCarousel";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="mt-0 pt-7">
        <Hero />
        <WhyChooseUs />
        <AppleCardsCarouselDemo />
        {/* <FocusCardsDemo /> */}
        <InfiniteMovingCardsDemo />
        <My3DCarousel />
        <MySlider />
      </main>
    </>
  );
}

export default Home;
