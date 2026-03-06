import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="mt-12">
      <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[2px] bg-cyan-400"></div>
            <p className="text-lg font-bold tracking-widest uppercase text-gray-400">
              Contact Us
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-linear-to-r from-[#44D7FD] via-[#B249F8] to-[#FF4694] bg-clip-text text-transparent">
              Let’s Build Something <br className="hidden md:block" /> Great Together
            </span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a message 
            and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email Us</h3>
                <p className="text-gray-400">hello@connectingdots.com</p>
                <p className="text-gray-400">support@connectingdots.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800">
                <Phone className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                <p className="text-gray-400">+880 1234 567 890</p>
                <p className="text-gray-400">Mon - Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-gray-900 rounded-2xl border border-gray-800">
                <MapPin className="text-pink-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                <p className="text-gray-400">123 Tech Tower, Gulshan</p>
                <p className="text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-2 bg-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-gray-400 uppercase">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-cyan-400 transition-all text-lg"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-gray-400 uppercase">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-purple-400 transition-all text-lg"
                />
              </div>

              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-pink-400 transition-all text-lg"
                />
              </div>

              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="bg-transparent border-b border-gray-700 py-3 outline-none focus:border-white transition-all text-lg resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-12 py-4 rounded-full bg-gradient-to-r from-[#44D7FD] via-[#B249F8] to-[#FF4694] font-bold text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;