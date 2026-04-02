import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Hero from "../Components/Hero";
import LearnWhy from "../Components/LearnWhy ";
import WhatWeOffer from "../Components/WhatWeOffer";
import SkillSetSection from "../Components/SkillSetSection";
import StackSection from "../Components/StackSection";
import TestimonialSection from "../Components/TestimonialSection";
import Slider from "../Components/Slider";
import FeaturedProducts from "../Components/FeaturedProducts";
import ShopCollection from "../Components/ShopCollection";


const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_0%,#54E3FF,transparent_40%),radial-gradient(circle_at_80%_0%,#D421FF,transparent_40%)]"
      ></div>

      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/90 to-black"></div>

      <div className="relative z-10">
        {/* HERO TOP */}
       

       <Slider />

      

        <Hero />
        <FeaturedProducts />
        <ShopCollection />
        <LearnWhy />
        <WhatWeOffer />
        <SkillSetSection />
        <StackSection />
        <TestimonialSection />
        
      </div>
    </div>
  );
};

/* Updated Stat Component */
const Stat = ({ number, label }) => {
  const value = number.replace("+", "");

  const highlightPlus = number === "8+" || number === "150+";

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold">
        {value}
        {number.includes("+") && (
          <span className={highlightPlus ? "text-cyan-400" : ""}>+</span>
        )}
      </h2>
      <p className="text-gray-400 text-sm mt-2">{label}</p>
    </div>
  );
};

export default Home;
