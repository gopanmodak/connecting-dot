import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://blog.chargebee.com/wp-content/uploads/2022/07/Chargebee-Subscription-Box-Industry-trends-opportunities-and-Market-Size.png",
  },
  {
    id: 2,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.UJDFAQgDk7iNiZE4UHj8QAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    image:
      "https://cdn.mos.cms.futurecdn.net/Nm2CdM6MZQHwwdUUqY6rdi-1920-80.jpg",
  },
];

export default function HeroSlider() {
  const [current,setCurrent] = useState(0);

  useEffect(()=>{
    const slider=setInterval(()=>{
      setCurrent((prev)=>(prev+1)%slides.length);
    },4000);

    return ()=>clearInterval(slider);
  },[]);

  return (
    <div className="relative w-full mt-6 h-[620px] md:h-[520px] overflow-hidden rounded-2xl">

      <img
        src={slides[current].image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"/>

      {/* Button right end */}
      <Link to="/topup" className="absolute right-4 md:right-14 top-10/12 -translate-y-1/2 z-20">
        <button className="bg-red-600 px-6 py-2 md:px-10 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-red-700 transition shadow-lg shadow-red-500/20">
          Top UP
        </button>
      </Link>

      {/* Left Arrow */}
      <button
        onClick={()=>setCurrent(current===0?slides.length-1:current-1)}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-2 rounded-full text-white"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={()=>setCurrent((current+1)%slides.length)}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-2 rounded-full text-white"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((slide,index)=>(
          <div
            key={slide.id}
            onClick={()=>setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              current===index ? "bg-white":"bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}