import { FocusCards } from "@/components/ui/focus-cards";
import Catalogue1 from "./assets/catalogue/WallTales_Dealer Catlogue_compressed (2)_page-0018.jpg";
import Catalogue2 from "./assets/catalogue/WallTales_Dealer Catlogue_compressed (2)_page-0019.jpg";
import Catalogue3 from "./assets/catalogue/WallTales_Dealer Catlogue_compressed (2)_page-0020.jpg";
import Catalogue4 from "./assets/catalogue/WallTales_Dealer Catlogue_compressed (2)_page-0017.jpg";
import Catalogue5 from "./assets/catalogue/WallTales_Dealer Catlogue_compressed (2)_page-0016.jpg";
import Catalogue6 from "./assets/catalogue/WallTales_Dealer Catlogue_compressed (2)_page-0015.jpg";
import { Link } from "react-router-dom";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: Catalogue1,
    },
    {
      title: "Valley of life",
      src: Catalogue2,
    },
    {
      title: "some art",
      src: Catalogue3,
    },
    {
      title: "Camping is for pros",
      src: Catalogue4,
    },
    {
      title: "The road not taken",
      src: Catalogue5,
    },
    {
      title: "The First Rule",
      src: Catalogue6,
    },
  ];

  return (
    <>
      <h2 className="text-xl px-2 md:text-4xl lg:text-4xl font-bold text-neutral-900 dark:text-white max-w-4xl text-center mx-auto pt-12 pb-4">
        Catalogue
      </h2>
      <div className="mb-6 text-center">
        <Link
          to="/gallery"
          className="text-teal-600 hover:text-teal-900 font-semibold text-lg transition duration-200 mx-auto py-2"
        >
          Browse our Collection &rarr;
        </Link>
      </div>
      <FocusCards cards={cards} />
      <br />
    </>
  );
}
