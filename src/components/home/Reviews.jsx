import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Customer1 from "/src/assets/Reviews/Artboard 1-100.jpg"
import Customer2 from "/src/assets/Reviews/Artboard 2-100.jpg"
import Customer3 from "/src/assets/Reviews/Artboard 3-100.jpg"
import Customer4 from "/src/assets/Reviews/Artboard 4-100.jpg"
import Customer5 from "/src/assets/Reviews/Artboard 5-100.jpg"
import Customer6 from "/src/assets/Reviews/Artboard 6-100.jpg"
import Customer7 from "/src/assets/Reviews/Artboard 7-100.jpg"
import Customer8 from "/src/assets/Reviews/Artboard 8-100.jpg"
import Customer9 from "/src/assets/Reviews/Artboard 9-100.jpg"
import Customer10 from "/src/assets/Reviews/Artboard 10-100.jpg"
import Customer11 from "/src/assets/Reviews/Artboard 11-100.jpg"
import Customer12 from "/src/assets/Reviews/Artboard 12-100.jpg"
import Customer13 from "/src/assets/Reviews/Artboard 13-100.jpg"
import Customer14 from "/src/assets/Reviews/Artboard 14-100.jpg"
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-full rounded-md flex flex-col antialiased bg-teal-700 dark:bg-teal-900 items-center justify-center relative overflow-hidden py-8">
      {/* Header Section */}
      <div className="text-center mb-8 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-white">
          What Our Customers Say
        </h2>
        <p className="text-teal-200 text-sm sm:text-base">
          Discover why people love our products!
        </p>
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
    name: "VIPIN-ALKA SONI",
    title: "Solution Consultant, Indore",
    quote: `
It’s always a good experience with WallTales.

They have the best technical team for assistance.

We and our clients had beautiful and satisfactory experience with installation.

We wish best luck to WallTales team and a very special thanks to TARUN for introducing new developments to us for our projects.

Stay shine.
Thanks
    `,
    // Example image path — match the actual file name in your folder
    image: Customer1,
  },
  {
    name: "PRASHANT GOYAL",
    title: "Architect",
    quote: `
Working with WallTales for their Mosaic Tiles was a breeze.

Their team is knowledgeable, efficient, and always a joy to work with.

We highly recommend them for any tile project.
    `,
    image: Customer2,
  },
  {
    name: "ASHOK GUPTA",
    title: "VK Enterprises, Bhopal",
    quote: `
WallTales has been a fantastic supplier.

Their Peel and Stick Tiles consistently impress our customers with their durability, vibrant colors, and unique designs. 

We've seen a significant increase in customer satisfaction since incorporating their products into our offerings.
    `,
    image: Customer3,
  },
  {
    name: "ASLAM KHAN",
    title: "Architect",
    quote: `
We've had a wonderful experience with WallTales Grout Mosaic Tiles.

Their products are of the highest quality, and their customer service is exceptional. 

We're confident in recommending them to others.
    `,
    image: Customer4,
  },
  {
    name: "RAJESH SHARMA",
    title: "Architect",
    quote: `
A special thanks to Tarun at WallTales for their outstanding assistance with the Peel & Stick Tiles. 

They were incredibly helpful and went the extra mile to ensure our project was a success.
    `,
    image: Customer5,
  },
  {
    name: "SANDEEP KALE",
    title: "Architect",
    quote: `
We're incredibly grateful for WallTales professionalism and dedication, especially with their Peel & Stick Tiles.

They consistently deliver high-quality work and provide exceptional customer service. 

We highly recommend them.
    `,
    image: Customer6,
  },
  {
    name: "MAHESH HARJANI",
    title: "Shree Ram Traders, Raipur",
    quote: `
We're thrilled to be a dealer for WallTales. 

Their products are truly unique and stand out from the competition. 

We consistently receive positive feedback from our customers about the quality and beauty of their grout mosaic tiles.
    `,
    image: Customer7,
  },
  {
    name: "PRABHJOT SINGH",
    title: "Architect",
    quote: `
We've had a wonderful experience with WallTales Grout Mosaic Tiles. 

Their products are of the highest quality, and their customer service is exceptional. 

We're confident in recommending them to others.
    `,
    image: Customer8,
  },
  {
    name: "RAJU PATEL",
    title: "Architect",
    quote: `
WallTales Peel & Stick Tiles are a game-changer.

The quality is exceptional, and the installation process was seamless. 

We're extremely satisfied with the results. 

Although at first it was just looking like a thick plastic material but after the installation it is giving the wall a 3D look.
    `,
    image: Customer9,
  },
  {
    name: "KAPIL PATIDAR",
    title: "Architect",
    quote: `
Based on the theme of the interior designer, it is a very good medium to express his imagination in the form of pictures. 

They consistently deliver high-quality work and provide exceptional customer service. 

We highly recommend them.
    `,
    image: Customer10,
  },
  {
    name: "NEHAL SHEIKH",
    title: "Meccain Interio, Varanasi",
    quote: `
Mosaico Wall is an excellent partner. 

They provide us with the tools and resources we need to succeed. 

We're confident in recommending their products to our clients, and we look forward to a long and successful partnership.
    `,
    image: Customer11,
  },
  {
    name: "LALIT CHAUDHARY",
    title: "Krishna Ceramics, Thane",
    quote: `
Partnering with WallTales has been a real game-changer for our business. 

Their Grout Mosaic & Peel & Stick Tiles are high-quality and in high demand. 

Their support team is incredibly helpful, and we appreciate their ongoing assistance with marketing and sales.
    `,
    image: Customer12,
  },
  {
    name: "SURVESH SHARMA",
    title: "Architect",
    quote: `
Turning my wall into a figment of my imagination.

Enter my wall decor collection, where imagination takes flight and walls become the canvas of dreams.
    `,
    image: Customer13,
  },
  {
    name: "HUSEN SHAKRUWALA",
    title: "Architect",
    quote: `
We were blown away by the beauty and durability of WallTales Mosaic Tiles.

They added a unique touch to our project and exceeded our expectations.
    `,
    image: Customer14,
  },
];
