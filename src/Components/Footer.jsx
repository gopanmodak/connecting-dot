import React from "react";
import { FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 px-6 md:px-16 overflow-hidden">
      
      {/* Background Gradient Effect */}
      <div className="absolute bottom-0 left-0 w-full h-100 bg-linear-to-t from-[#2a003a] via-transparent to-transparent opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Footer Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          
          {/* Engagement Models */}
          <div>
            <h4 className="text-xl font-bold mb-8">Engagement Models</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">Dedicated Tech Team</li>
              <li className="hover:text-white cursor-pointer transition">Team Augmentation</li>
              <li className="hover:text-white cursor-pointer transition">Outsource MVP Development</li>
              <li className="hover:text-white cursor-pointer transition">Integrated Business Automation</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-8">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">Blog</li>
              <li className="hover:text-white cursor-pointer transition">Our Client</li>
              <li className="hover:text-white cursor-pointer transition">Our Process</li>
            </ul>
          </div>

          {/* Contact & About */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <p className="text-gray-400 text-sm hover:text-white cursor-pointer transition">info@connectingdots.com</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">About Company</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">About US</li>
                <li className="hover:text-white cursor-pointer transition">Leadership Team</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Part: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-800 gap-6">
          <p className="text-gray-500 text-sm font-medium">
            Copyright © ConnectingDots
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaYoutube />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;