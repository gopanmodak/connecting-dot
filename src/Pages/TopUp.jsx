import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

const TopUp = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCountry, setSelectedCountry] = useState({
    name: "Bangladesh",
    code: "+880",
    flag: "🇧🇩",
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const allCountriesData = [
      { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
      { name: "United States", code: "+1", flag: "🇺🇸" },
      { name: "India", code: "+91", flag: "🇮🇳" },
      { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
      { name: "Canada", code: "+1", flag: "🇨🇦" },
      { name: "Australia", code: "+61", flag: "🇦🇺" },
      { name: "Germany", code: "+49", flag: "🇩🇪" },
      { name: "Japan", code: "+81", flag: "🇯🇵" },
      { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
      { name: "UAE", code: "+971", flag: "🇦🇪" },
    ];

    setCountries(allCountriesData);
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.includes(searchTerm)
  );

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSearchTerm("");
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () =>
      document.removeEventListener("mousedown", closeDropdown);
  }, []);

  const handleStartTopUp = () => {
    if (!phoneNumber) {
      toast.error("Enter phone number");
      return;
    }

    toast.success(
      `Top-Up Success ${selectedCountry.code}${phoneNumber}`
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#140018] via-[#0e0014] to-black">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1560305527-51dc8ad5a8f8?w=1200"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT TEXT */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-pink-400 font-semibold mb-4 uppercase tracking-widest">
            Global Recharge
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            The Fastest Way <br />
            To Send Mobile <br />
            Top-Ups Worldwide
          </h1>

          <p className="text-white/70 mt-6 text-lg leading-8 max-w-xl">
            Send instant mobile top-ups to family and friends
            worldwide securely, quickly and effortlessly.
          </p>

          <button className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold shadow-xl hover:scale-105 transition">
            Explore Services
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full max-w-md lg:w-1/2">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Ready To Send A Top-Up?
            </h2>

            {/* Country Dropdown */}
            <div
              className="mb-5"
              ref={dropdownRef}
            >
              <label className="text-white/80 block mb-2">
                Select Country
              </label>

              <div className="relative">
                <div
                  onClick={() =>
                    setIsDropdownOpen(!isDropdownOpen)
                  }
                  className="bg-white rounded-xl p-4 cursor-pointer flex items-center justify-between"
                >
                  <div className="flex gap-3 items-center">
                    <span className="text-2xl">
                      {selectedCountry.flag}
                    </span>

                    <span className="font-semibold">
                      {selectedCountry.name}
                    </span>

                    <span className="text-gray-500">
                      {selectedCountry.code}
                    </span>
                  </div>

                  <span>⌄</span>
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-30 w-full bg-white mt-2 rounded-xl shadow-xl overflow-hidden">
                    <div className="p-3 border-b">
                      <input
                        value={searchTerm}
                        onChange={(e)=>
                          setSearchTerm(e.target.value)
                        }
                        placeholder="Search..."
                        className="w-full border rounded-lg p-2 outline-none"
                      />
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                      {filteredCountries.map((country)=>(
                        <div
                          key={country.name}
                          onClick={()=>handleCountrySelect(country)}
                          className="p-3 hover:bg-purple-50 cursor-pointer flex justify-between"
                        >
                          <span>
                            {country.flag} {country.name}
                          </span>

                          <span className="text-purple-600">
                            {country.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="text-white/80 block mb-2">
                Phone Number
              </label>

              <div className="flex bg-white rounded-xl overflow-hidden">
                <span className="bg-gray-100 px-4 flex items-center font-semibold">
                  {selectedCountry.code}
                </span>

                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e)=>
                    setPhoneNumber(e.target.value)
                  }
                  placeholder="1778345234"
                  className="flex-1 p-4 outline-none"
                />
              </div>
            </div>

            {/* Popular */}
            <div className="mb-8">
              <h3 className="text-white mb-4 font-semibold">
                Popular Countries
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() =>
                    handleCountrySelect({
                      name:"Bangladesh",
                      code:"+880",
                      flag:"🇧🇩",
                    })
                  }
                  className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-xl flex justify-between text-white"
                >
                  <span>🇧🇩 Bangladesh</span>
                  <span>+880</span>
                </button>

                <button
                  onClick={() =>
                    handleCountrySelect({
                      name:"United States",
                      code:"+1",
                      flag:"🇺🇸",
                    })
                  }
                  className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-xl flex justify-between text-white"
                >
                  <span>🇺🇸 United States</span>
                  <span>+1</span>
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleStartTopUp}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:scale-[1.02] transition"
            >
              Start Top-Up
            </button>

            <p className="text-center text-white/50 mt-4 text-sm">
              Fast & Secure Worldwide Top-Ups
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TopUp;