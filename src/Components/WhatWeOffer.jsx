import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  "Dedicated Tech Team",
  "Team Augmentation",
  "Outsourced MVP Development",
  "Dedicated Tech Team",
  "Dedicated Tech Team",
];

const WhatWeOffer = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-0.5 bg-white"></div>
          <p className="text-sm text-gray-400 tracking-widest">
            What We Offer
          </p>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            We Help You Accelerate
          </span>
        </h2>

        <div className="space-y-10">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex items-center justify-between group">

                <div className="flex items-center gap-10">
                  <span className="text-gray-400 text-lg font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-purple-400 transition">
                    {service}
                  </h3>
                </div>

                <div className="w-12 h-12 border border-gray-500 rounded-full flex items-center justify-center group-hover:border-purple-500 transition">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </div>

              </div>

              <div className="mt-6 border-b border-gray-700"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;