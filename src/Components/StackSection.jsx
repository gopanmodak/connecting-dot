import React, { useState } from "react";
import {
  FaNodeJs, FaReact, FaVuejs, FaAngular, FaLaravel, FaPython, FaAws, 
  FaDocker, FaSwift, FaAndroid, FaApple, FaDatabase, FaJava
} from "react-icons/fa";
import { 
  SiDjango, SiFlask, SiDotnet, SiSpringboot, SiSvelte, SiGo, 
  SiFlutter, SiKotlin, SiTensorflow, SiPytorch, SiPandas, 
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiKubernetes, SiTerraform 
} from "react-icons/si";

const StackSection = () => {
  const [activeTab, setActiveTab] = useState("Web");

  const tabs = ["Web", "Mobile", "Data", "Enterprise", "Cloud", "Database"];

  const techData = {
    Web: [
      { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Vue JS", icon: <FaVuejs className="text-green-400" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500" /> },
      { name: "Django", icon: <SiDjango className="text-green-600" /> },
      { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
      { name: "Svelte", icon: <SiSvelte className="text-orange-500" /> },
      { name: "Go Lang", icon: <SiGo className="text-cyan-400" /> },
    ],
    Mobile: [
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      { name: "Swift", icon: <FaSwift className="text-orange-500" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
      { name: "Android", icon: <FaAndroid className="text-green-500" /> },
      { name: "iOS", icon: <FaApple className="text-gray-100" /> },
    ],
    Data: [
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
      { name: "Pandas", icon: <SiPandas className="text-blue-600" /> },
    ],
    Enterprise: [
      { name: "Java", icon: <FaJava className="text-red-400" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
      { name: ".Net Core", icon: <SiDotnet className="text-purple-500" /> },
      { name: "SAP", icon: <div className="font-bold text-blue-400">SAP</div> },
    ],
    Cloud: [
      { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "Terraform", icon: <SiTerraform className="text-purple-400" /> },
    ],
    Database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  };

  return (
    <section className="bg-linear-to-r from-black via-[#140018] to-[#2a003a] text-white py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Line */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-[2px] bg-white"></div>
          <p className="text-sm text-gray-400 tracking-widest uppercase">What We Offer</p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Choose Your Stack And We’ll Deliver
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 md:gap-8 mb-10 border-b border-gray-700 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm md:text-base transition-all duration-300 outline-none ${
                activeTab === tab
                  ? "text-white border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="transition-opacity duration-500">
          <h3 className="text-lg font-semibold mb-8 text-gray-200">
            {activeTab} Development Technologies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {techData[activeTab].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300 cursor-pointer group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StackSection;