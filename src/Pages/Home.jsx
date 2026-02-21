import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
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
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_0%,#54E3FF,transparent_40%),radial-gradient(circle_at_80%_0%,#D421FF,transparent_40%)]"
      ></div>

      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/90 to-black"></div>

      <div className="relative z-10 text-white p-20">
        <div className="flex justify-between items-center ml-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl font-bold">
              Think Ahead<span className="text-[#54E3FF]">!</span>
            </h1>
            <p className="mt-4 text-lg max-w-3xl">
              We are a global software consulting, development and outsourcing
              agency. Hire top talents from Ontik Technology to build your next
              big dream.
            </p>
            <div className="flex  text-[#D421FF] justify-start items-center">
              <FaCalendarAlt className="mr-2" />{" "}
              <p className="">Let's Discuss</p>{" "}
            </div>
          </div>
          <div className="mr-10">
            <FaArrowDownLong className="text-[130px] animate-bounce rounded-full border-3 border-[#adbabd] p-2 " />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 max-w-7xl ml-10 mt-15">
          <div className="bg-[#004653] p-3 rounded-lg">
            <p>One app to subscribe to unlimited gyme access</p>
          </div>
          <div className="bg-[#004653] p-3 rounded-lg">
            {" "}
            <p>Calendar Scheduling without internet connectivity using sms</p>
          </div>
          <div className="bg-[#004653] p-3 rounded-lg">
            <p>Using Technology to build thousands of entrepreneurs.</p>
          </div>
        </div>

        <div className="mt-10 relative">
          <img
            src={heroBanner}
            alt=""
            className="w-full rounded-xl h-130  object-cover"
          />

          <div
            className="absolute inset-0 flex flex-col justify-center 
                  pl-16 text-whiterounded-xl"
          >
            <h1 className="text-3xl font-bold max-w-md">
              MVP Partnership with Fitmate to Revolutionize Gym Access For
              Fitness Enthusiasts across Australia
            </h1>

            <button className="btn btn-outline rounded-full mt-6 w-fit">
              Read Case Study
            </button>
          </div>
        </div>

        <div className="mt-20">
          <section className="bg-linear-to-br from-[#1a001f] via-[#0d001a] to-black text-white py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT CONTENT */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-1 bg-gray-400"></div>
                  <p className="text-sm tracking-widest text-gray-400">
                    Empowering innovation
                  </p>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  We Turn Your Good Ideas <br />
                  Into{" "}
                  <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Great Products!
                  </span>
                </h1>

                {/* Image Section */}
                <div className="relative mt-10">
                  <div className="bg-gray-900 p-4 rounded-xl shadow-2xl">
                    <img
                      src={bannerImages}
                      alt="Rocket Launch"
                      className="rounded-lg"
                    />
                  </div>

                  {/* Decorative Dots */}
                  <div className="absolute -left-8 top-10 grid grid-cols-5 gap-2 opacity-30">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-gray-500 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <div className="flex items-center justify-end space-x-4 mb-6">
                  <button className="border border-purple-500 text-purple-400 px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition mb-6 ">
                    Read Case Study
                  </button>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  Ontik Technology has been empowering excellence through
                  innovation since 2016, pushing boundaries, and solving complex
                  challenges in unique ways.
                </p>

                <p className="text-gray-400 mb-10 leading-relaxed">
                  We're not just a tech consultancy; we're mentors, nurturing
                  the leaders of tomorrow who will drive positive change in the
                  ever-evolving tech landscape.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold">
                      8<span className="text-[#D421FF]">+</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">
                      Years Experience
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">
                      350<span className="text-cyan-400">+</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">Project Done</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">
                      150<span className="text-[#D421FF]">+</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">
                      Satisfied Client <br /> From 20+ Country
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">
                      100<span className="text-cyan-400">+</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">Team Members</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Hero/>

        <LearnWhy/>
        <WhatWeOffer/>
        <SkillSetSection/>
        <StackSection/>
        <TestimonialSection/>
        <ContactSection/>
        <FullSection/>
      </div>
    </div>
  );
};

export default Home;
