import React, { useContext, useState } from "react";
import products from "../../public/products .json";
import { ShoppingCart, StarIcon, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../Contex/CartContext";

const parsePriceRange = (range) => {
  const numbers = range.match(/\d+/g);
  if (!numbers) return [0, 0];
  // Remove commas if present and convert to numbers
  return numbers.map(n => Number(n.replace(/,/g, ''))); 
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const [minPrice, maxPrice] = parsePriceRange(product.priceRange);
    let priceMatch = true;

    if (selectedPrice === "0-300") {
      priceMatch = minPrice <= 300;
    } else if (selectedPrice === "300-600") {
      priceMatch = minPrice >= 300 && maxPrice <= 600;
    } else if (selectedPrice === "600+") {
      priceMatch = maxPrice > 600;
    }
    return categoryMatch && priceMatch;
  });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedPrice(null);
  };

  return (
    <div className="bg-linear-to-r from-black via-[#140018] to-[#2a003a] text-white py-10 md:py-20 px-4 md:px-16 flex flex-col md:flex-row gap-10">
      
      {/* Sidebar - Mobile-e width full thakbe */}
      <div className="w-full md:w-64 p-4 rounded-lg h-fit bg-[#1a0024] md:bg-transparent">
        <h2 className="font-bold mb-5 text-lg flex gap-3 items-center pb-2 border-b border-gray-700 md:border-none">
          <Filter className="h-5 w-5 text-purple-400" /> Filters
        </h2>
        
        <h2 className="font-bold mb-3 text-md text-gray-300 uppercase tracking-wider">Categories</h2>
        <ul className="flex flex-wrap md:flex-col gap-3 md:space-y-2 mb-8 cursor-pointer">
          {["All", "OTT", "Music", "Software"].map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 md:px-0 md:py-0 rounded-full md:rounded-none border md:border-none text-sm transition-all ${
                selectedCategory === cat
                  ? "text-white font-bold border-white md:border-b-2 md:w-fit"
                  : "text-gray-500 border-gray-700 hover:text-white"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>

        <h2 className="font-bold mb-3 text-md text-gray-300 uppercase tracking-wider">Price Range</h2>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
          {[
            { label: "0 - 300", value: "0-300" },
            { label: "300 - 600", value: "300-600" },
            { label: "600+", value: "600+" },
          ].map((range) => (
            <label
              key={range.value}
              className="flex items-center justify-between gap-2 cursor-pointer bg-black/20 p-2 rounded md:bg-transparent md:p-0"
            >
              <span className="text-sm text-gray-400">{range.label}</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm border-gray-600"
                checked={selectedPrice === range.value}
                onChange={() => setSelectedPrice(range.value)}
              />
            </label>
          ))}
        </div>

        <button
          onClick={resetFilters}
          className="btn btn-xs btn-link mt-6 text-red-400 normal-case p-0"
        >
          Clear All Filters
        </button>
      </div>

      {/* Products Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card bg-[#1a0024] border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group"
              >
                <figure className="relative h-64 md:h-80">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </figure>
                
                <div className="p-5 space-y-3">
                  <h2 className="font-bold text-lg leading-tight h-12 overflow-hidden">
                    {product.title}
                  </h2>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="text-[#FF9500] fill-[#FF9500] w-3 h-3" />
                      ))}
                    </div>
                    <span className="text-md font-bold text-gray-400">{product.rating}</span>
                  </div>

                  <p className="text-xl font-extrabold text-white">
                    {product.priceRange}
                  </p>

                  <div className="flex items-center gap-3 p-2">
                    <Link to={`/product/${product.id}`}className="flex-1 bg-black text-white font-bold p-2 border border-gray-700 rounded-lg hover:bg-red-200 transition-colors text-sm">
                      Choose Option
                    </Link>
                    <div onClick={() => addToCart(product, 1)}
className="p-2 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer">
                      <ShoppingCart size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-black/20 rounded-2xl border border-dashed border-gray-700">
              <p className="text-gray-500">No products found in this range.</p>
              <button onClick={resetFilters} className="text-purple-400 underline mt-2">Try resetting filters</button>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all font-semibold">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;