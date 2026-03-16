import React from "react";
import { ArrowRight, Crown, Lock, Smartphone } from "lucide-react";
import charge from "../assets/Paste image.png";
import logo from "../assets/Logo (1).png";

const ShopCollection = () => {
  return (
    <div className="bg-[#0a0510] min-h-screen px-4 md:px-8 py-10 text-white font-sans">

      <h2 className="text-xl md:text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 max-w-6xl mx-auto">
        Shop Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* 1️⃣ Crunchyroll Card */}
        <div
          className="relative group overflow-hidden rounded-3xl h-96 md:h-[500px] flex flex-col items-center justify-between p-6 md:p-8 border border-gray-800 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(234, 88, 12, 0.7), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1974&auto=format&fit=crop')`,
          }}
        >

          {/* Top Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl mb-4 flex items-center gap-2 border border-white/10">
              <div className="w-5 h-5 bg-purple-600 rounded-md flex items-center justify-center text-[9px] font-bold">
                CD
              </div>
              <img src={logo} alt="" className="h-8 md:h-10" />
            </div>

            <h1 className="text-2xl md:text-4xl font-black tracking-tighter italic uppercase text-white mb-1">
              CRUNCHYROLL
            </h1>

            <p className="tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs font-bold text-gray-300">
              PREMIUM
            </p>
          </div>

          {/* Center Shape */}
          <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 bg-orange-500 rounded-[40px] shadow-2xl shadow-orange-500/50 flex items-center justify-center p-4">
            <div className="w-full h-full border-8 md:border-[15px] border-white rounded-full relative">
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Bottom */}
          <div className="relative z-10 w-full">
            <h3 className="text-lg md:text-2xl font-bold mb-2 tracking-tight">
              Crunchyroll
            </h3>

            <button className="flex items-center gap-2 text-xs md:text-sm text-gray-300 hover:text-white transition-colors border-b-2 border-white p-1">
              See Pricing <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">

          {/* 2️⃣ Netflix + Prime */}
          <div
            className="relative rounded-3xl h-48 md:h-60 overflow-hidden border border-gray-800 p-5 md:p-6 flex flex-col justify-between bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3)), url('https://cdnuploads.aa.com.tr/uploads/Contents/2020/11/05/thumbs_b_c_1779da59e484caa12a8b61ed2f6e100a.jpg?v=180321')`,
            }}
          >
            <div className="relative z-10 flex justify-center items-center">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3">
                <p className="text-[9px] md:text-[10px] font-bold mb-1 uppercase tracking-wider text-blue-400">
                  Combo Plan
                </p>

                <ul className="space-y-1 text-[9px] md:text-[10px] text-gray-200">
                  <li className="flex items-center gap-1">
                    <Crown size={10} className="text-blue-400" /> Private
                    Profile
                  </li>

                  <li className="flex items-center gap-1">
                    <Lock size={10} className="text-blue-400" /> Pin lock
                  </li>

                  <li className="flex items-center gap-1">
                    <Smartphone size={10} className="text-blue-400" /> 2 Device
                    login
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-base md:text-xl font-bold">
                Netflix + Prime Video Combo
              </h3>

              <button className="flex items-center gap-2 text-xs md:text-sm text-gray-300 mt-1 hover:text-white border-b-2 border-white p-1">
                See Pricing <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* 3️⃣ Accessories */}
          <div className="relative rounded-3xl h-48 md:h-60 overflow-hidden border border-gray-200 bg-white group flex items-center justify-between p-6 md:p-8">

            {/* Text */}
            <div className="relative z-10 text-black max-w-[55%]">
              <h3 className="text-xl md:text-3xl font-bold mb-3 leading-tight">
                Accessories
              </h3>

              <button className="flex items-center gap-2 text-xs md:text-sm font-bold border-b-2 border-black pb-1 hover:gap-4 transition-all duration-300">
                Collection <ArrowRight size={16} />
              </button>
            </div>

            {/* Image */}
            <div className="absolute right-0 top-0 bottom-0 w-[45%] md:w-1/2 flex items-center justify-center p-2 md:p-4">
              <img
                src={charge}
                alt="Charger"
                className="w-[85%] md:w-full h-[85%] md:h-full object-contain object-right transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopCollection;