import React from "react";
import { useState } from "react";
import { Hero } from "../components/Hero";
import WhyChooseUs from "../components/Choose";
import { InfiniteMovingCardsDemo } from "../components/Reviews";
import { AppleCardsCarouselDemo } from "../components/Categories";
import { GlobeDemo } from "../components/World";
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="mt-0 pt-24">
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
