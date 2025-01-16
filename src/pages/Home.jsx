import React from "react";
import { useState } from "react";
import { Hero } from "../components/home/Hero";
import WhyChooseUs from "../components/home/Choose";
import { InfiniteMovingCardsDemo } from "../components/home/Reviews";
import { AppleCardsCarouselDemo } from "../components/home/Categories";
import MySlider from "../components/home/VideoCarousel";
// import EmotionsSlider from "../components/home/GalleryPreview";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="mt-0 pt-8">
        <Hero />
        {/* <EmotionsSlider /> */}
        <WhyChooseUs />
        <AppleCardsCarouselDemo />
        {/* <FocusCardsDemo /> */}
        <InfiniteMovingCardsDemo />
        <MySlider />
      </main>
    </>
  );
}

export default Home;
