import React from "react";
import { useState } from "react";
import { Hero } from "../components/home/Hero";
import WhyChooseUs from "../components/home/Choose";
import { InfiniteMovingCardsDemo } from "../components/home/Reviews";
import { AppleCardsCarouselDemo } from "../components/home/Categories";
import { GlobeDemo } from "../components/home/World";
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="mt-0 pt-8">
        <Hero />
        <WhyChooseUs />
        <AppleCardsCarouselDemo />
        {/* <FocusCardsDemo /> */}
        <InfiniteMovingCardsDemo />
        <GlobeDemo />
      </main>
    </>
  );
}

export default Home;
