import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#1a1625] text-white rounded-xl overflow-hidden shadow-lg w-72 border border-gray-800">
      {/* Image Section */}
      <div className="relative h-64">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover"
        />
        {/* Logo Overlay (Optional as per image) */}
        <div className="absolute top-2 left-2 bg-black/50 p-1 rounded">
          <span className="text-[10px] font-bold text-cyan-400">Connecting Dots</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 bg-[#251b33]">
        <h3 className="text-lg font-semibold mb-1 truncate">{product.title}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-orange-400 text-sm">
            {"★".repeat(Math.floor(product.rating))}
          </div>
          <span className="ml-2 text-xs text-gray-400">{product.rating.toFixed(1)}</span>
        </div>

        {/* Price */}
        <p className="text-sm font-bold mb-4">{product.priceRange}</p>

        {/* Footer Actions */}
        <div className="flex items-center justify-between">
          <button className="border border-white/40 hover:bg-white/10 px-6 py-2 rounded-full text-xs font-medium transition-all w-[80%]">
            Choose Option
          </button>
          <div className="p-2 cursor-pointer hover:bg-white/5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;