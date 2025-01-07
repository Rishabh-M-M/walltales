import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Catalogue from "./assets/location.png";
import { Link } from "react-router-dom";

export function AppleCardsCarouselDemo() {
  const data = [
    {
      title: "Peel and Stick Tiles",
      src: Catalogue,
      content: <p>Stunning.</p>,
    },
    {
      title: "Wall Tile Stickers",
      src: Catalogue,
      content: <p>Experience the best.</p>,
    },
    {
      title: "Floor Tile Stickers",
      src: Catalogue,
      content: <p>Woah!!!</p>,
    },
    {
      title: "Mosaic Tiles",
      src: Catalogue,
      content: <p>The vibrance is unmatched.</p>,
    },
    {
      title: "Accent Wall",
      src: Catalogue,
      content: <p>Step into our store.</p>,
    },
    {
      title: "Decore Plate",
      src: Catalogue,
      content: <p>Explore this.</p>,
    },
    {
      title: "Wallpapers",
      src: Catalogue,
      content: <p>Cool Product here.</p>,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-4">
      <div className="text-center">
        <h2 className="text-xl px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 dark:text-white max-w-4xl text-center mx-auto pt-12 pb-4">
          Our Categories
        </h2>
        <div className="text-center">
          <Link
            to="/gallery"
            className="text-teal-600 hover:text-teal-900 font-semibold text-lg transition duration-200 mx-auto py-2"
          >
            Browse our Collection &rarr;
          </Link>
        </div>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
