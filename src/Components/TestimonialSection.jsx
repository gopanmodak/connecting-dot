import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Connecting Dots set up our full development team in just 2 weeks' time!",
      description: "Connecting Dots set up our full development team in just 2 weeks' time! It takes other agencies more than 5 times as long to do that. We're already on track to finish our development after just a few months! - Eli Muse, Founder and CEO of Chippit. Chippit is the top trending app in the Google Play in Australia.",
      name: "Eli Muse",
      role: "Founder & CEO, Chippit",
      image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with actual image
    },
    {
      quote: "The speed and quality of work exceeded our expectations every single day.",
      description: "Working with this team was a game-changer for our fintech startup. They understood our complex requirements and delivered a scalable architecture in record time. Highly recommended for any serious enterprise project.",
      name: "Sarah Jenkins",
      role: "CTO, PayFlow",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "Incredible attention to detail and a very proactive approach to problems.",
      description: "We needed a complete UI overhaul for our SaaS platform. Not only did they deliver a beautiful design, but the performance of the React application improved by 40%. They truly act as partners, not just vendors.",
      name: "Marcus Thorne",
      role: "Product Manager, CloudScale",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#0a000f] text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Line & Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-[1px] bg-gray-500"></div>
          <p className="text-sm text-gray-400 tracking-widest font-medium">
            What We Offer
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          What our <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Clients Think About Us</span>
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm transition-all duration-500">
          <div className="max-w-4xl">
            {/* Big Quote */}
            <h3 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
              "{testimonials[currentSlide].quote}"
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12 leading-relaxed italic">
              {testimonials[currentSlide].description}
            </p>

            {/* Profile Info */}
            <div className="flex items-center justify-between flex-wrap gap-8">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                />
                <div>
                  <h4 className="font-bold text-xl">{testimonials[currentSlide].name}</h4>
                  <p className="text-gray-500">{testimonials[currentSlide].role}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialSection;