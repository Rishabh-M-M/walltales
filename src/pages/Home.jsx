import React from "react";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { FocusCardsDemo } from "../components/Catalogue";
import WhyChooseUs from "../components/Choose";
import { InfiniteMovingCardsDemo } from "../components/Reviews";
import { AppleCardsCarouselDemo } from "../components/Locations";
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
      </main>
    </>
  );
}

export default Home;
