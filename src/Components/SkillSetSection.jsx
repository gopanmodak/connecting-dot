import React from "react";

const skills = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Enterprise Resources Planning",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Enterprise Resources Planning",
];

const SkillSetSection = () => {
  return (
    <section className="bg-linear-to-r from-black via-[#140018] to-[#2a003a] text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Small Top Line */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-[2px] bg-white"></div>
          <p className="text-sm text-gray-400 tracking-widest">
            What We Offer
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-14">
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Find Resources Of Any SkillSet
          </span>
        </h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg py-6 text-center
              hover:border-purple-500 hover:bg-linear-to-r 
              hover:from-purple-600/20 hover:to-cyan-600/20
              transition duration-300 cursor-pointer"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillSetSection;