import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Line & Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-[1px] bg-white"></div>
          <p className="text-sm text-gray-400 tracking-widest uppercase font-medium">
            What We Offer
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let’s Touch Base
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl text-gray-400 text-lg mb-16 leading-relaxed">
          Ready to take the next step? Contact Ontik Technology today to discuss your project requirements and discover how we can provide tailored solutions to meet your needs. We are here to understand your unique challenges, offer expert advice, and empower your business for success.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide">Full Name</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-purple-500 transition-colors"
              placeholder="Your Name"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide">Email Address</label>
            <input 
              type="email" 
              className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-purple-500 transition-colors"
              placeholder="Your Email"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide">Company</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-purple-500 transition-colors"
              placeholder="Your Company Name"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide">Phone Number</label>
            <input 
              type="tel" 
              className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-purple-500 transition-colors"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Message / Project Description */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-semibold tracking-wide">Briefly Describe Your Project</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-purple-500 transition-colors"
              placeholder="Tell us a bit about your project"
            />
          </div>

          {/* Gradient Button */}
          <div className="md:col-span-2 mt-8">
            <button 
              type="submit" 
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#2189bd] via-[#8e44ad] to-[#d633ff] font-bold text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20"
            >
              Get In Touch
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactSection;