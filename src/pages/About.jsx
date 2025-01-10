import React from "react";
import { AnimatedTestimonialsDemo } from "../components/about/Team";
import { TimelineDemo } from "../components/about/History";
import { HeroHighlightDemo } from "../components/Quote";
import Features from "../components/about/Features";
import MotivationAndVision from "../components/about/Vision";

const About = () => {
  return (
    <>
      <main className="pt-24">
        <HeroHighlightDemo />
        <MotivationAndVision />
        <TimelineDemo />
        <AnimatedTestimonialsDemo />
        <Features />
      </main>
    </>
  );
};

export default About;
