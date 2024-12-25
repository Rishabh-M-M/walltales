import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-teal-700 dark:bg-teal-900 items-center justify-center relative overflow-hidden py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          What Our Customers Say
        </h2>
        <p className="text-teal-200">Discover why people love our products!</p>
      </div>

      {/* Infinite Moving Cards */}
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="medium"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "These tiles completely transformed my kitchen! Easy to install and look amazing.",
    name: "Sophia W.",
    title: "Verified Customer",
    rating: 5,
  },
  {
    quote:
      "The quality of the print is outstanding, and the material is so durable. Highly recommend!",
    name: "James T.",
    title: "Interior Designer",
    rating: 4,
  },
  {
    quote:
      "Love how waterproof and stainproof they are. Perfect for my busy household.",
    name: "Emily R.",
    title: "Homeowner",
    rating: 4,
  },
  {
    quote:
      "I’ve tried other brands, but nothing matches the adhesive strength of these tiles.",
    name: "Liam K.",
    title: "DIY Enthusiast",
    rating: 5,
  },
  {
    quote:
      "Affordable, stylish, and easy to maintain. I’ll definitely buy more for other rooms.",
    name: "Ava P.",
    title: "Satisfied Customer",
    rating: 4,
  },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
}

// Update the InfiniteMovingCards component to include the StarRating feature:
InfiniteMovingCards.defaultProps = {
  renderCard: ({ quote, name, title, rating }) => (
    <div className="p-1 bg-teal-800 border border-teal-900 rounded-md shadow-md">
      <p className="text-white text-sm mb-2">"{quote}"</p>
      <div className="mt-4">
        <StarRating rating={rating} />
      </div>
      <p className="text-teal-200 text-xs mt-2">{name}</p>
      <p className="text-teal-400 text-xs">{title}</p>
    </div>
  ),
};
