import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Line & Label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-[2px] bg-white"></div>
          <p className="text-lg font-bold">
            What We Offer
          </p>
        </div>

        {/* Heading with Gradient */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
          <span className="bg-linear-to-r from-[#44D7FD] via-[#B249F8] to-[#FF4694] bg-clip-text text-transparent">
            Let’s Touch Base
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-4xl text-gray-300 text-lg mb-20 leading-relaxed">
          Ready to take the next step? Contact Ontik Technology today to discuss your project requirements and discover how we can provide tailored solutions to meet your needs. We are here to understand your unique challenges, offer expert advice, and empower your business for success.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          
          {/* Full Name */}
          <div className="flex flex-col gap-4">
            <label className="text-xl font-bold tracking-tight">Full Name</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-gray-600 pb-3 outline-none focus:border-white transition-all text-lg"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-4">
            <label className="text-xl font-bold tracking-tight">Email Address</label>
            <input 
              type="email" 
              className="bg-transparent border-b border-gray-600 pb-3 outline-none focus:border-white transition-all text-lg"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <label className="text-xl font-bold tracking-tight">Company</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-gray-600 pb-3 outline-none focus:border-white transition-all text-lg"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-4">
            <label className="text-xl font-bold tracking-tight">Phone Number</label>
            <input 
              type="tel" 
              className="bg-transparent border-b border-gray-600 pb-3 outline-none focus:border-white transition-all text-lg"
            />
          </div>

          {/* Briefly Describe Your Project */}
          <div className="flex flex-col gap-4 md:col-span-2 mt-4">
            <label className="text-xl font-bold tracking-tight">Briefly Describe Your Project</label>
            <input 
              type="text" 
              className="bg-transparent border-b border-gray-600 pb-3 outline-none focus:border-white transition-all text-lg w-full"
            />
          </div>

          {/* Image-e button nei, kintu submit handle korar jonno niche button add korte paren */}
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