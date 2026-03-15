import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://blog.chargebee.com/wp-content/uploads/2022/07/Chargebee-Subscription-Box-Industry-trends-opportunities-and-Market-Size.png",
    title: "All Your Favorite",
    heading: "SUBSCRIPTIONS",
    subtitle: "in One Place",
  },
  {
    id: 2,
    image: "https://tse1.mm.bing.net/th/id/OIP.UJDFAQgDk7iNiZE4UHj8QAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Buy Premium",
    heading: "OTT ACCOUNTS",
    subtitle: "Best Price",
  },
  {
    id: 3,
    image: "https://cdn.mos.cms.futurecdn.net/Nm2CdM6MZQHwwdUUqY6rdi-1920-80.jpg",
    title: "Unlimited",
    heading: "STREAMING",
    subtitle: "Entertainment",
  },
  {
    id: 4,
    image: "https://www.thetechedvocate.org/wp-content/uploads/2023/07/Best-streaming-services-660x400.webp",
    title: "Music & Movies",
    heading: "ALL ACCESS",
    subtitle: "One Platform",
  },
  {
    id: 5,
    image: "https://tse1.mm.bing.net/th/id/OIP.UUgPVPSFDStjLCUbFi6MWwHaE5?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Premium",
    heading: "MEMBERSHIP",
    subtitle: "Start Today",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full mt-10 h-[520px] overflow-hidden">

      {/* Background */}
      <img
        src={slides[current].image}
        alt=""
        className="absolute w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full max-w-7xl mx-auto px-8 text-white">

        {/* LEFT OTT BOXES */}
<div className="space-y-8">

  {/* OTT CARDS */}
  <div className="grid grid-cols-2 gap-6 max-w-xl">

    {/* Netflix */}
    <div className="flex items-center gap-3 bg-red-900/40 border border-red-500 rounded-xl px-6 py-4 hover:bg-red-800/40 transition">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
        className="w-8"
        alt=""
      />
      <h2 className="text-white text-xl font-semibold">NETFLIX</h2>
    </div>

    {/* Prime */}
    <div className="flex items-center gap-3 bg-red-900/40 border border-red-500 rounded-xl px-6 py-4 hover:bg-red-800/40 transition">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
        className="w-8"
        alt=""
      />
      <h2 className="text-white text-xl font-semibold">Prime Video</h2>
    </div>

    {/* Spotify */}
    <div className="flex items-center gap-3 bg-red-900/40 border border-red-500 rounded-xl px-6 py-4 hover:bg-red-800/40 transition">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
        className="w-8"
        alt=""
      />
      <h2 className="text-green-400 text-xl font-semibold">Spotify</h2>
    </div>

    {/* Youtube */}
    <div className="flex items-center gap-3 bg-red-900/40 border border-red-500 rounded-xl px-6 py-4 hover:bg-red-800/40 transition">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
        className="w-8"
        alt=""
      />
      <h2 className="text-white text-xl font-semibold">Premium</h2>
    </div>

  </div>


  {/* MORE TEXT */}
  <p className="text-gray-300 text-center">More......</p>


  {/* FEATURES */}
  <div className="flex gap-10 text-center">

    {/* Authentic */}
    <div className="text-white">
      <div className="text-3xl mb-2">✔</div>
      <p className="text-sm">100% Authentic</p>
    </div>

    {/* Delivery */}
    <div className="text-white">
      <div className="text-3xl mb-2">⚡</div>
      <p className="text-sm">Fast Delivery</p>
    </div>

    {/* Support */}
    <div className="text-white">
      <div className="text-3xl mb-2">👨‍💻</div>
      <p className="text-sm">Friendly Support</p>
    </div>

  </div>

</div>

        {/* RIGHT TEXT */}
        <div className="text-right max-w-lg">

          <h3 className="text-xl mb-2">
            {slides[current].title}
          </h3>

          <h1 className="text-6xl font-bold leading-tight">
            {slides[current].heading}
          </h1>

          <p className="text-lg mb-6">
            {slides[current].subtitle}
          </p>

          <button className="bg-red-600 px-10 py-3 rounded-full text-lg hover:bg-red-700 transition">
            Shop Now
          </button>

        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-2 rounded"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-2 rounded"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;