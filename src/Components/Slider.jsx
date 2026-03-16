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
    <div className="relative w-full mt-6 h-[620px] md:h-[520px] overflow-hidden">

      {/* Background */}
      <img
        src={slides[current].image}
        alt=""
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full max-w-7xl mx-auto px-4 md:px-8 text-white gap-10">

        {/* OTT BOXES */}
        <div className="space-y-6 w-full md:w-auto">

          {/* OTT CARDS */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">

            <div className="flex items-center gap-2 bg-red-900/40 border border-red-500 rounded-xl px-3 py-3 md:px-6 md:py-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
                className="w-6 md:w-8"
                alt=""
              />
              <h2 className="text-sm md:text-xl font-semibold">NETFLIX</h2>
            </div>

            <div className="flex items-center gap-2 bg-red-900/40 border border-red-500 rounded-xl px-3 py-3 md:px-6 md:py-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
                className="w-6 md:w-8"
                alt=""
              />
              <h2 className="text-sm md:text-xl font-semibold">Prime</h2>
            </div>

            <div className="flex items-center gap-2 bg-red-900/40 border border-red-500 rounded-xl px-3 py-3 md:px-6 md:py-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
                className="w-6 md:w-8"
                alt=""
              />
              <h2 className="text-green-400 text-sm md:text-xl font-semibold">
                Spotify
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-red-900/40 border border-red-500 rounded-xl px-3 py-3 md:px-6 md:py-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                className="w-6 md:w-8"
                alt=""
              />
              <h2 className="text-sm md:text-xl font-semibold">Premium</h2>
            </div>
          </div>

          {/* FEATURES */}
          <div className="flex justify-center md:justify-start gap-6 md:gap-10 text-center pt-4">

            <div>
              <div className="text-xl md:text-3xl mb-1">✔</div>
              <p className="text-xs md:text-sm">Authentic</p>
            </div>

            <div>
              <div className="text-xl md:text-3xl mb-1">⚡</div>
              <p className="text-xs md:text-sm">Fast Delivery</p>
            </div>

            <div>
              <div className="text-xl md:text-3xl mb-1">👨‍💻</div>
              <p className="text-xs md:text-sm">Support</p>
            </div>

          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="text-center md:text-right max-w-md">

          <h3 className="text-sm md:text-xl mb-2">
            {slides[current].title}
          </h3>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            {slides[current].heading}
          </h1>

          <p className="text-sm md:text-lg mb-4 md:mb-6">
            {slides[current].subtitle}
          </p>

          <button className="bg-red-600 px-6 py-2 md:px-10 md:py-3 rounded-full text-sm md:text-lg hover:bg-red-700 transition">
            Shop Now
          </button>

        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 bg-white/20 px-2 py-1 md:px-3 md:py-2 rounded"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-white/20 px-2 py-1 md:px-3 md:py-2 rounded"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;