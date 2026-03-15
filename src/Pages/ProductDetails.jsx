import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../public/products .json";
import {
  StarIcon,
  Heart,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import { CartContext } from "../Contex/CartContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Reviews");
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <h2 className="text-center text-white py-20 bg-[#0f0117]">
        Product not found
      </h2>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.title} added to cart! 🛒`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Additional Info":
        return (
          <div className="text-gray-400 space-y-4 animate-in fade-in duration-500">
            <h3 className="text-white font-bold">Product Specifications</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Category: {product.category || "OTT Subscription"}</li>
              <li>Brand: {product.brand || "Unknown"}</li>
              <li>Delivery: Instant Delivery</li>
              <li>Region: Global / Bangladesh</li>
            </ul>
          </div>
        );
      case "Questions":
        return (
          <div className="text-gray-400 space-y-6 animate-in fade-in duration-500">
            <div className="bg-[#1a012a] p-4 rounded-lg border border-gray-800">
              <p className="text-white font-semibold">
                Q: How many devices can I use?
              </p>
              <p className="text-sm mt-2">
                A: This is a private screen, so you can use it on one device
                at a time.
              </p>
            </div>
            <div className="bg-[#1a012a] p-4 rounded-lg border border-gray-800">
              <p className="text-white font-semibold">
                Q: Is it a full month warranty?
              </p>
              <p className="text-sm mt-2">
                A: Yes, we provide a full 30-day replacement warranty.
              </p>
            </div>
          </div>
        );
      case "Reviews":
      default:
        return (
          <div className="space-y-12 animate-in fade-in duration-500">
            <h1 className="text-white text-3xl font-bold">Customer Reviews</h1>
            <div className="flex gap-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} size={14} fill="currentColor" />
                ))}
                <StarIcon size={14} className="text-gray-600" />
              </div>
              <span className="text-xs text-gray-500">11 Reviews</span>
            </div>
            <div className="space-y-10">
              {[1, 2].map((review) => (
                <div key={review} className="flex gap-5 border-t border-gray-900 pt-8">
                  <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden shrink-0">
                    <img
                      src={`https://i.pravatar.cc/150?u=${review}`}
                      alt="user"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-white">
                      {review === 1 ? "Sofia Harvetz" : "Nicolas Jensen"}
                    </h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      I bought it 3 weeks ago and now come back just to say
                      "Awesome Product". I really enjoy it.
                    </p>
                    <div className="flex gap-4 text-[10px] text-gray-500 mt-4">
                      <span>about 1 hour ago</span>
                      <button className="hover:text-white">Like</button>
                      <button className="hover:text-white flex items-center gap-1">
                        <MessageSquare size={10} /> Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#0f0117] text-gray-200 min-h-screen font-sans">
      {/* Breadcrumb */}
      <div className="text-[14px] text-gray-500 py-6 px-6 md:px-20 border-b border-gray-900">
        <Link to="/" className="hover:text-white">Home</Link> &nbsp; {'>'} &nbsp; 
        <Link to="/shop" className="hover:text-white">Shop</Link> &nbsp; {'>'} &nbsp; 
        {product.category} &nbsp; {'>'} &nbsp; 
        <span className="text-purple-400">{product.title}</span>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="relative group">
            <div className="bg-[#1a012a] rounded-2xl p-8 aspect-square flex flex-col items-center justify-center border border-gray-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-30">
                <span className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-sm">NEW</span>
                <span className="bg-[#00d084] text-white text-[10px] font-bold px-2 py-1 rounded-sm">-50%</span>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="absolute inset-0 bg-orange-600 blur-[100px] opacity-30"></div>
                <img src={product.image} alt="Logo" className="w-56 h-56 object-contain relative z-20 drop-shadow-2xl" />
              </div>
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10 transition"><ChevronLeft size={20}/></button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10 transition"><ChevronRight size={20}/></button>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} fill="currentColor" />)}
              <span className="text-gray-500 text-xs ml-2">11 Reviews</span>
            </div>

            <h1 className="text-4xl font-bold text-white tracking-tight">{product.title}</h1>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              {product.description || "Buy one or buy a few and make every space convenient."}
            </p>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">$199.00</span>
              <span className="text-xl text-gray-500 line-through">$400.00</span>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-900">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Duration</p>
              <button className="bg-[#611961] border border-purple-500/50 px-5 py-2.5 text-xs font-bold rounded-md shadow-[0_0_15px_rgba(126,34,206,0.2)]">
                1 Month Private Screen
              </button>
            </div>

            <div className="flex gap-4 pt-6">
              <div className="flex items-center bg-[#1a012a] border border-gray-800 rounded-md px-4">
                <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-2 text-gray-400 hover:text-white transition"><Minus size={16}/></button>
                <span className="w-10 text-center font-bold text-white">{quantity}</span>
                <button onClick={() => setQuantity(q => q+1)} className="p-2 text-gray-400 hover:text-white transition"><Plus size={16}/></button>
              </div>

              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-800 hover:bg-white/5 rounded-md text-sm font-semibold transition">
                <Heart size={18} /> Wishlist
              </button>
            </div>

            <button onClick={handleAddToCart} className="w-full bg-[#611961] hover:bg-[#7b1fa2] py-4 rounded-md font-bold text-white transition-all shadow-lg active:scale-[0.98]">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-24">
          <div className="flex gap-10 border-b border-gray-900 text-sm font-medium">
            {["Additional Info", "Questions", "Reviews"].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 relative transition-colors duration-300 ${activeTab === tab ? "text-cyan-400" : "text-gray-500 hover:text-gray-300"}`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                )}
              </button>
            ))}
          </div>

          <div className="py-12 min-h-[400px]">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;