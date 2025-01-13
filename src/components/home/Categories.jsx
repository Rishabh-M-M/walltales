
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import PAST from "@/assets/Product Category/Artboard 1-100.jpg";
import WTS from "@/assets/Product Category/Artboard 14-100.jpg";
import FTS from "@/assets/Product Category/Artboard 15-100.jpg";
import MT from "@/assets/Product Category/Artboard 16-100.jpg";
import AW from "@/assets/Product Category/Artboard 17-100.jpg";
import DP from "@/assets/Product Category/Artboard 18-100.jpg";
import WP from "@/assets/Product Category/Artboard 19-100.jpg";
import PAST2 from "@/assets/Product Category/1x/Artboard 1-100.jpg";
import WTS2 from "@/assets/Product Category/1x/Artboard 14-100.jpg";
import FTS2 from "@/assets/Product Category/1x/Artboard 15-100.jpg";
import MT2 from "@/assets/Product Category/1x/Artboard 16-100.jpg";
import AW2 from "@/assets/Product Category/1x/Artboard 17-100.jpg";
import DP2 from "@/assets/Product Category/1x/Artboard 18-100.jpg";
import WP2 from "@/assets/Product Category/1x/Artboard 19-100.jpg";
import { Link } from "react-router-dom";

export function AppleCardsCarouselDemo() {
  const data = [
    {
      title: "Peel and Stick Tiles",
      src: PAST,
      content: <p>Experience the transformative power of Walltales Peel and Stick Tiles, the effortless solution for enhancing your home's aesthetic. Our innovative tiles are designed for effortless application, requiring no messy grout or complicated installation. Simply peel and stick to instantly revitalize any surface, from kitchen backsplashes and feature walls to furniture accents and decorative elements.
        Explore a captivating array of colors, patterns, and textures, catering to every design preference and style.Whether you yearn for the timeless elegance of marble, the rustic charm of brick, or the contemporary allure of metallics, Walltales offers an extensive palette to suit your unique vision.
        Our high - quality peel - and - stick tiles are crafted with durability and longevity in mind.They are resistant to moisture, heat, and everyday wear and tear, ensuring long - lasting beauty and functionality.Moreover, they are easily removable and repositionable, allowing for effortless design adjustments and hassle - free maintenance.
        With Walltales, unleash your creativity and transform your home into a reflection of your personal style.Discover the joy of effortless elegance and elevate your living spaces with our stunning peel - and - stick tiles.</p>,
    },
    {
      title: "Wall Tile Stickers",
      src: WTS,
      content: <p>Transform your walls into captivating works of art with Wall Tile Stickers, the budget - friendly solution for achieving a high - end look.Featuring stunningly realistic tile designs, these peel - and - stick wonders offer a convenient and affordable way to enhance any space.
        Our innovative stickers are designed for effortless application, requiring no messy grout or complicated installation.Simply peel and stick to instantly revitalize your walls, creating a personalized and stylish ambiance.Whether you desire the timeless elegance of marble, the rustic charm of brick, or the contemporary allure of metallics, our extensive collection offers a design for every taste and style.
        Wall Tile Stickers are not only budget - friendly but also incredibly versatile.They are perfect for renters and homeowners alike, providing a hassle - free way to refresh your decor without the commitment of traditional tiling.Moreover, they are easily removable and repositionable, allowing for effortless design adjustments and hassle - free maintenance.
        Experience the joy of effortless elegance and elevate your living spaces with Wall Tile Stickers.Discover the transformative power of these peel - and - stick wonders and unleash your creativity to design walls that reflect your unique personality and style.</p>,
    },
    {
      title: "Floor Tile Stickers",
      src: FTS,
      content: <p>Transform your floors with effortless elegance using Floor Tile Stickers, the durable and stylish solution for instant floor revitalization.Designed with practicality and aesthetics in mind, these anti - skid peel - and - stick wonders offer a quick and affordable way to update any room in your home.
        Available in a captivating range of classic and contemporary designs, our Floor Tile Stickers cater to diverse styles and preferences.From timeless marble and elegant wood to modern geometric patterns and vibrant abstracts, you'll find the perfect design to complement your existing decor.
        Experience the convenience of effortless installation.Simply peel and stick our durable stickers to instantly refresh your floors, transforming worn - out surfaces into stylish and inviting spaces.Our anti - skid technology provides exceptional safety and peace of mind, making them ideal for high - traffic areas such as kitchens, bathrooms, and entryways.
        Floor Tile Stickers offer a long - lasting and affordable alternative to costly floor renovations.They are a perfect solution for both renters and homeowners, allowing for easy design changes and hassle - free maintenance.
        Discover the transformative power of Floor Tile Stickers and elevate your home's aesthetic with effortless style.</p>,
    },
    {
      title: "Mosaic Tiles",
      src: MT,
      content: <p>Experience the enduring allure of mosaic artistry with Walltales, a premier brand of mosaic tiles.Our collection showcases a diverse range of designs, colors, and textures, each meticulously crafted to infuse spaces with unparalleled elegance and sophistication.
        Walltales mosaic tiles are not merely decorative elements; they are expressions of artistic vision.Each piece is a testament to the skill and dedication of our artisans, who transform raw materials into captivating works of art.Our commitment to quality shines through in every tile, ensuring that your chosen masterpiece will stand the test of time.
        Designed for both residential and commercial applications, our mosaic tiles are thoughtfully engineered for ease of installation.The convenient net backing facilitates swift and seamless application, while the pre - grouted design minimizes the need for extensive grouting work, saving you time and effort.Furthermore, our tiles are renowned for their exceptional durability and resistance to stains, moisture, and everyday wear and tear, ensuring minimal maintenance and long - lasting beauty.
        Whether you envision a breathtaking kitchen backsplash, a captivating bathroom accent wall, or a mesmerizing feature wall in any room, Walltales mosaic tiles offer endless possibilities.From classic and timeless designs to contemporary and avant - garde interpretations, our collection caters to diverse aesthetic preferences.Let your imagination soar as you explore the transformative power of Walltales mosaic tiles and create spaces that truly reflect your unique style and personality.</p>,
    },
    {
      title: "Accent Wall",
      src: AW,
      content: <p>Elevate your interior design with Walltales, a premium brand of peel and stick tiles. Our innovative tiles offer a captivating solution for creating stunning accent walls that effortlessly express your unique style.
        Our peel and stick technology makes installation a breeze. No messy adhesives or professional help needed! Simply peel and stick to instantly transform any wall surface.
        With a vast array of designs, colors, and textures, Walltales offers unparalleled customization options. From classic marble and timeless subway tiles to bold geometric patterns and contemporary metallic finishes, you'll find the perfect tiles to match any aesthetic.
        Transform a blank wall into a captivating focal point with Walltales. Our team of design experts is ready to assist you in selecting the perfect tiles and creating a personalized accent wall that reflects your individual style and enhances the beauty of your space.
        Discover the ease and elegance of peel and stick tiles with Walltales. Visit our website or contact us today for a free consultation and let us help you bring your design vision to life.</p>,
    },
    {
      title: "Decore Plate",
      src: DP,
      content: <p>Explore this.</p>,
    },
    {
      title: "Wallpapers",
      src: WP,
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
            to="walltales/gallery"
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
