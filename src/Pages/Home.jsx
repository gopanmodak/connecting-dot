import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import rightArrow from "../assets/guidance_down-arrow.svg";
import heroBanner from "../assets/heroBanner.png";
import bannerImages from "../assets/bannerImage.png";
import Hero from "../Components/Hero";
import LearnWhy from "../Components/LearnWhy ";
import WhatWeOffer from "../Components/WhatWeOffer";
import SkillSetSection from "../Components/SkillSetSection";
import StackSection from "../Components/StackSection";
import TestimonialSection from "../Components/TestimonialSection";
import ContactSection from "../Components/ContactSection";
import FullSection from "../Components/FullSection";

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
        <section className="px-6 md:px-10 pt-16 md:pt-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="space-y-6 max-w-2xl text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Think Ahead<span className="text-[#54E3FF]">!</span>
                </h1>

                <p className="text-gray-300">
                  We are a global software consulting, development and
                  outsourcing agency. Hire top talents to build your next big
                  dream.
                </p>

                <div className="flex justify-center lg:justify-start items-center text-[#D421FF] gap-2">
                  <FaCalendarAlt />
                  <p>Let's Discuss</p>
                </div>
              </div>

              <div className="hidden lg:block">
                <img src={rightArrow} alt="arrow" className="w-24" />
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-[#004653] p-4 rounded-lg text-center md:text-left">
                One app to subscribe to unlimited gym access
              </div>
              <div className="bg-[#004653] p-4 rounded-lg text-center md:text-left">
                Calendar scheduling without internet using SMS
              </div>
              <div className="bg-[#004653] p-4 rounded-lg text-center md:text-left">
                Using technology to build thousands of entrepreneurs
              </div>
            </div>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroBanner}
                alt="Hero"
                className="w-full h-75 md:h-75 object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-r from-red-600/80 via-purple-700/70 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
                <h1 className="text-xl md:text-3xl font-bold max-w-md">
                  MVP Partnership with Fitmate to Revolutionize Gym Access For
                  Fitness Enthusiasts across Australia
                </h1>

                <button className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition w-fit">
                  Read Case Study
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 px-6 md:px-10 bg-linear-to-br from-[#1a001f] via-[#120018] to-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-1 bg-gray-400"></div>
                <p className="text-sm tracking-widest text-gray-400">
                  Empowering innovation
                </p>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                We Turn Your Good Ideas Into{" "}
                <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Great Products!
                </span>
              </h1>

              <div className="mt-10 bg-gray-900 p-4 rounded-xl shadow-xl">
                <img
                  src={bannerImages}
                  alt="banner"
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div>
              {/* Button Right Aligned */}
              <div className="flex justify-end mb-6">
                <button className="border border-purple-500 text-purple-400 px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition">
                  Read Case Study
                </button>
              </div>

              <p className="text-gray-400 mb-6">
                Ontik Technology has been empowering excellence through
                innovation since 2016.
              </p>

              <p className="text-gray-400 mb-10">
                We're not just a tech consultancy; we're mentors nurturing the
                leaders of tomorrow.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <Stat number="8+" label="Years Experience" />
                <Stat number="350+" label="Projects Done" />
                <Stat number="150+" label="Satisfied Clients" />
                <Stat number="100+" label="Team Members" />
              </div>
            </div>
          </div>
        </section>

        <Hero />
        <LearnWhy />
        <WhatWeOffer />
        <SkillSetSection />
        <StackSection />
        <TestimonialSection />
        <ContactSection />
        <FullSection />
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
