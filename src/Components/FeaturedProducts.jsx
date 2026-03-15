import React, { useContext, useRef } from "react";
import products from "../../public/products .json";
import { Link } from "react-router-dom";
import { CartContext } from "../Contex/CartContext";
import { toast } from "react-toastify";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const sliderRef = useRef();
  const { addToCart } = useContext(CartContext);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-10 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Featured Products
          </h2>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="bg-white text-black p-2 rounded-full"
            >
              <ArrowLeft/> 
            </button>
            <button
              onClick={scrollRight}
              className="bg-white text-black p-2 rounded-full"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide h-110"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-65 bg-[#2b0f2f] rounded-xl overflow-hidden shadow-lg relative"
            >
              {/* Link for image, title, rating, price */}
              <Link to={`/product/${product.id}`} className="block">
                <img
                  src={product.image}
                  className="h-64 w-full object-cover"
                  alt={product.title}
                />
                <div className="p-4 bg-[#251b33]">
                  <h3 className="text-lg font-semibold mb-1 truncate">
                    {product.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex text-orange-400 text-sm">
                      {"★".repeat(Math.floor(product.rating))}
                    </div>
                    <span className="ml-2 text-xs text-gray-400">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-sm font-bold">{product.priceRange}</p>
                </div>
              </Link>

              {/* Buttons: Choose Option + Cart */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button className="border border-white/40 hover:bg-white/10 px-6 py-2 rounded-full text-xs font-medium transition-all w-[80%]">
                  Choose Option
                </button>

                <div
                  className="p-2 cursor-pointer hover:bg-white/5 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation(); // stop Link navigation
                    addToCart(product);
                    toast.success(`${product.title} added to cart! 🛒`);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;