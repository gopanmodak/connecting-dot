import React from "react";
import { Users, ShieldCheck, GitBranch, Settings } from "lucide-react";

const LearnWhy = () => {
  return (
    <section className="bg-linear-to-br from-[#1a001f] via-[#120018] to-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Small Line */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-0.5 bg-linear-to-r from-purple-500 to-cyan-400"></div>
          <p className="text-sm tracking-widest text-gray-400">
            Empowering innovation
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Learn Why
          </span>{" "}
          People Love Working With Us
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Flexibility */}
          <div className="space-y-4">
            <GitBranch className="w-10 h-10 text-purple-400" />
            <h3 className="text-xl font-semibold">Flexibility</h3>
            <p className="text-gray-400 leading-relaxed">
              We offer the flexibility to work within various engagement
              models, tailoring our approach to suit the specific needs of
              your organization.
            </p>
          </div>

          {/* People */}
          <div className="space-y-4">
            <Users className="w-10 h-10 text-pink-400" />
            <h3 className="text-xl font-semibold">People</h3>
            <p className="text-gray-400 leading-relaxed">
              We offer the flexibility to work within various engagement
              models, tailoring our approach to suit the specific needs of
              your organization.
            </p>
          </div>

          {/* Process */}
          <div className="space-y-4">
            <Settings className="w-10 h-10 text-cyan-400" />
            <h3 className="text-xl font-semibold">Process</h3>
            <p className="text-gray-400 leading-relaxed">
              We offer the flexibility to work within various engagement
              models, tailoring our approach to suit the specific needs of
              your organization.
            </p>
          </div>

          {/* Quality */}
          <div className="space-y-4">
            <ShieldCheck className="w-10 h-10 text-purple-400" />
            <h3 className="text-xl font-semibold">Quality</h3>
            <p className="text-gray-400 leading-relaxed">
              We offer the flexibility to work within various engagement
              models, tailoring our approach to suit the specific needs of
              your organization.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearnWhy;