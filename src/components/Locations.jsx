import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Catalogue from "./assets/location.png";

export function AppleCardsCarouselDemo() {
  const data = [
    {
      category: "Capital City",
      title: "Delhi",
      src: Catalogue,
      content: <p>Our flagship store in Delhi.</p>,
    },
    {
      category: "Financial Hub",
      title: "Mumbai",
      src: Catalogue,
      content: <p>Experience the best at our Mumbai store.</p>,
    },
    {
      category: "Tech City",
      title: "Bengaluru",
      src: Catalogue,
      content: <p>Visit us in the heart of Bengaluru.</p>,
    },
    {
      category: "Cultural Center",
      title: "Kolkata",
      src: Catalogue,
      content: <p>Find us in the vibrant city of Kolkata.</p>,
    },
    {
      category: "Pink City",
      title: "Jaipur",
      src: Catalogue,
      content: <p>Step into our store in Jaipur.</p>,
    },
    {
      category: "Himalayan Escape",
      title: "Leh",
      src: Catalogue,
      content: <p>Explore our Leh location.</p>,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-4">
      <h2 className="text-xl px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 dark:text-white max-w-4xl text-center mx-auto py-2">
        Explore Our Locations
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
