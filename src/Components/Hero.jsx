import React from "react";
import Marquee from "react-fast-marquee";

import img1 from "../assets/image 1.png"
import img2 from "../assets/image 2.png"
import img3 from "../assets/image 3.png"
import img4 from "../assets/image 4.png"
import img5 from "../assets/image 5.png"
import img6 from "../assets/image 6.png"
import img7 from "../assets/image 7.png"
import img8 from "../assets/image 8.png"

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Connection
        </span>{" "}
        : Our Collaborative Success
      </h1>

 <Marquee speed={50} gradient={false} pauseOnHover={true} className="mt-14">
  {[img1, img2, img3, img4, img5, img6, img7, img8].map(
    (img, index) => (
      <img
        key={index}
        src={img}
        alt="partner logo"
        className="mx-10 h-12 object-contain"
      />
    )
  )}
</Marquee>

    </div>
  );
};

export default Hero;