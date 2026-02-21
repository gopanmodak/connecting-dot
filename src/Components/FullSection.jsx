import React from "react";
import { FaArrowRightLong } from "react-icons/fa6"; 
import logo from "../assets/Logo (1).png";

const FullSection = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        
        {/* Left Side: Text and Talk Button */}
        <div>
          <h2 className="text-5xl font-bold mb-4">Work With Us</h2>
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-2xl font-bold">Let's Talk</span>
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-300">
              <FaArrowRightLong />
            </div>
          </div>
        </div>

        {/* Right Side: Logo and Newsletter */}
        <div className="w-full md:w-auto">
          <div className="mb-8">
            <img 
              src={logo} 
              alt="Connecting Dots" 
              className="h-12 object-contain mb-2" 
            />
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              Bridging Ideas, Building Success
            </p>
          </div>
          
          <p className="text-sm text-gray-400 mb-6">
            Subscribe to our newsletter for latest tech updates.
          </p>
          
          <div className="flex bg-white rounded-xl overflow-hidden p-1 max-w-md items-center shadow-xl">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="bg-transparent flex-1 px-4 py-3 text-black outline-none text-sm placeholder:text-gray-400" 
            />
            <button className="bg-linear-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FullSection;