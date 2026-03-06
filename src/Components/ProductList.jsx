import React from "react";
import ProductCard from "./ProductCard";


const ProductList = () => {
  const products = [ /* Upore dewa apnar JSON data ekhane thakbe */ ];

  return (
    <div className="bg-black p-10 min-h-screen">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">
        Featured Products
      </h2>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;