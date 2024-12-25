import React from "react";
import ProductsPage from "../components/ProductPage";
import { HeroHighlightDemo } from "../components/Quote";

const Products = () => {
  return (
    <>
      <main className="pt-24">
        <HeroHighlightDemo />
        <ProductsPage />
      </main>
    </>
  );
};

export default Products;
