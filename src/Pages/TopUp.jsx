import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

const TopUp = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Bangladesh',
    code: '+880',
    flag: '🇧🇩'
  });
  const [phoneNumber, setPhoneNumber] = useState('1778-345234');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Load all countries with their dialing codes
  useEffect(() => {
    // Comprehensive list of countries with dialing codes
    const allCountriesData = [
      { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
      { name: "Albania", code: "+355", flag: "🇦🇱" },
      { name: "Algeria", code: "+213", flag: "🇩🇿" },
      { name: "American Samoa", code: "+1684", flag: "🇦🇸" },
      { name: "Andorra", code: "+376", flag: "🇦🇩" },
      { name: "Angola", code: "+244", flag: "🇦🇴" },
      { name: "Anguilla", code: "+1264", flag: "🇦🇮" },
      { name: "Antigua and Barbuda", code: "+1268", flag: "🇦🇬" },
      { name: "Argentina", code: "+54", flag: "🇦🇷" },
      { name: "Armenia", code: "+374", flag: "🇦🇲" },
      { name: "Aruba", code: "+297", flag: "🇦🇼" },
      { name: "Australia", code: "+61", flag: "🇦🇺" },
      { name: "Austria", code: "+43", flag: "🇦🇹" },
      { name: "Azerbaijan", code: "+994", flag: "🇦🇿" },
      { name: "Bahamas", code: "+1242", flag: "🇧🇸" },
      { name: "Bahrain", code: "+973", flag: "🇧🇭" },
      { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
      { name: "Barbados", code: "+1246", flag: "🇧🇧" },
      { name: "Belarus", code: "+375", flag: "🇧🇾" },
      { name: "Belgium", code: "+32", flag: "🇧🇪" },
      { name: "Belize", code: "+501", flag: "🇧🇿" },
      { name: "Benin", code: "+229", flag: "🇧🇯" },
      { name: "Bermuda", code: "+1441", flag: "🇧🇲" },
      { name: "Bhutan", code: "+975", flag: "🇧🇹" },
      { name: "Bolivia", code: "+591", flag: "🇧🇴" },
      { name: "Bosnia and Herzegovina", code: "+387", flag: "🇧🇦" },
      { name: "Botswana", code: "+267", flag: "🇧🇼" },
      { name: "Brazil", code: "+55", flag: "🇧🇷" },
      { name: "British Indian Ocean Territory", code: "+246", flag: "🇮🇴" },
      { name: "Brunei", code: "+673", flag: "🇧🇳" },
      { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
      { name: "Burkina Faso", code: "+226", flag: "🇧🇫" },
      { name: "Burundi", code: "+257", flag: "🇧🇮" },
      { name: "Cambodia", code: "+855", flag: "🇰🇭" },
      { name: "Cameroon", code: "+237", flag: "🇨🇲" },
      { name: "Canada", code: "+1", flag: "🇨🇦" },
      { name: "Cape Verde", code: "+238", flag: "🇨🇻" },
      { name: "Cayman Islands", code: "+1345", flag: "🇰🇾" },
      { name: "Central African Republic", code: "+236", flag: "🇨🇫" },
      { name: "Chad", code: "+235", flag: "🇹🇩" },
      { name: "Chile", code: "+56", flag: "🇨🇱" },
      { name: "China", code: "+86", flag: "🇨🇳" },
      { name: "Christmas Island", code: "+61", flag: "🇨🇽" },
      { name: "Cocos (Keeling) Islands", code: "+61", flag: "🇨🇨" },
      { name: "Colombia", code: "+57", flag: "🇨🇴" },
      { name: "Comoros", code: "+269", flag: "🇰🇲" },
      { name: "Congo", code: "+242", flag: "🇨🇬" },
      { name: "Cook Islands", code: "+682", flag: "🇨🇰" },
      { name: "Costa Rica", code: "+506", flag: "🇨🇷" },
      { name: "Croatia", code: "+385", flag: "🇭🇷" },
      { name: "Cuba", code: "+53", flag: "🇨🇺" },
      { name: "Cyprus", code: "+357", flag: "🇨🇾" },
      { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
      { name: "Denmark", code: "+45", flag: "🇩🇰" },
      { name: "Djibouti", code: "+253", flag: "🇩🇯" },
      { name: "Dominica", code: "+1767", flag: "🇩🇲" },
      { name: "Dominican Republic", code: "+1849", flag: "🇩🇴" },
      { name: "Ecuador", code: "+593", flag: "🇪🇨" },
      { name: "Egypt", code: "+20", flag: "🇪🇬" },
      { name: "El Salvador", code: "+503", flag: "🇸🇻" },
      { name: "Equatorial Guinea", code: "+240", flag: "🇬🇶" },
      { name: "Eritrea", code: "+291", flag: "🇪🇷" },
      { name: "Estonia", code: "+372", flag: "🇪🇪" },
      { name: "Eswatini", code: "+268", flag: "🇸🇿" },
      { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
      { name: "Falkland Islands", code: "+500", flag: "🇫🇰" },
      { name: "Faroe Islands", code: "+298", flag: "🇫🇴" },
      { name: "Fiji", code: "+679", flag: "🇫🇯" },
      { name: "Finland", code: "+358", flag: "🇫🇮" },
      { name: "France", code: "+33", flag: "🇫🇷" },
      { name: "French Guiana", code: "+594", flag: "🇬🇫" },
      { name: "French Polynesia", code: "+689", flag: "🇵🇫" },
      { name: "Gabon", code: "+241", flag: "🇬🇦" },
      { name: "Gambia", code: "+220", flag: "🇬🇲" },
      { name: "Georgia", code: "+995", flag: "🇬🇪" },
      { name: "Germany", code: "+49", flag: "🇩🇪" },
      { name: "Ghana", code: "+233", flag: "🇬🇭" },
      { name: "Gibraltar", code: "+350", flag: "🇬🇮" },
      { name: "Greece", code: "+30", flag: "🇬🇷" },
      { name: "Greenland", code: "+299", flag: "🇬🇱" },
      { name: "Grenada", code: "+1473", flag: "🇬🇩" },
      { name: "Guadeloupe", code: "+590", flag: "🇬🇵" },
      { name: "Guam", code: "+1671", flag: "🇬🇺" },
      { name: "Guatemala", code: "+502", flag: "🇬🇹" },
      { name: "Guernsey", code: "+44", flag: "🇬🇬" },
      { name: "Guinea", code: "+224", flag: "🇬🇳" },
      { name: "Guinea-Bissau", code: "+245", flag: "🇬🇼" },
      { name: "Guyana", code: "+592", flag: "🇬🇾" },
      { name: "Haiti", code: "+509", flag: "🇭🇹" },
      { name: "Honduras", code: "+504", flag: "🇭🇳" },
      { name: "Hong Kong", code: "+852", flag: "🇭🇰" },
      { name: "Hungary", code: "+36", flag: "🇭🇺" },
      { name: "Iceland", code: "+354", flag: "🇮🇸" },
      { name: "India", code: "+91", flag: "🇮🇳" },
      { name: "Indonesia", code: "+62", flag: "🇮🇩" },
      { name: "Iran", code: "+98", flag: "🇮🇷" },
      { name: "Iraq", code: "+964", flag: "🇮🇶" },
      { name: "Ireland", code: "+353", flag: "🇮🇪" },
      { name: "Isle of Man", code: "+44", flag: "🇮🇲" },
      { name: "Israel", code: "+972", flag: "🇮🇱" },
      { name: "Italy", code: "+39", flag: "🇮🇹" },
      { name: "Jamaica", code: "+1876", flag: "🇯🇲" },
      { name: "Japan", code: "+81", flag: "🇯🇵" },
      { name: "Jersey", code: "+44", flag: "🇯🇪" },
      { name: "Jordan", code: "+962", flag: "🇯🇴" },
      { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
      { name: "Kenya", code: "+254", flag: "🇰🇪" },
      { name: "Kiribati", code: "+686", flag: "🇰🇮" },
      { name: "Kuwait", code: "+965", flag: "🇰🇼" },
      { name: "Kyrgyzstan", code: "+996", flag: "🇰🇬" },
      { name: "Laos", code: "+856", flag: "🇱🇦" },
      { name: "Latvia", code: "+371", flag: "🇱🇻" },
      { name: "Lebanon", code: "+961", flag: "🇱🇧" },
      { name: "Lesotho", code: "+266", flag: "🇱🇸" },
      { name: "Liberia", code: "+231", flag: "🇱🇷" },
      { name: "Libya", code: "+218", flag: "🇱🇾" },
      { name: "Liechtenstein", code: "+423", flag: "🇱🇮" },
      { name: "Lithuania", code: "+370", flag: "🇱🇹" },
      { name: "Luxembourg", code: "+352", flag: "🇱🇺" },
      { name: "Macau", code: "+853", flag: "🇲🇴" },
      { name: "Madagascar", code: "+261", flag: "🇲🇬" },
      { name: "Malawi", code: "+265", flag: "🇲🇼" },
      { name: "Malaysia", code: "+60", flag: "🇲🇾" },
      { name: "Maldives", code: "+960", flag: "🇲🇻" },
      { name: "Mali", code: "+223", flag: "🇲🇱" },
      { name: "Malta", code: "+356", flag: "🇲🇹" },
      { name: "Marshall Islands", code: "+692", flag: "🇲🇭" },
      { name: "Martinique", code: "+596", flag: "🇲🇶" },
      { name: "Mauritania", code: "+222", flag: "🇲🇷" },
      { name: "Mauritius", code: "+230", flag: "🇲🇺" },
      { name: "Mayotte", code: "+262", flag: "🇾🇹" },
      { name: "Mexico", code: "+52", flag: "🇲🇽" },
      { name: "Micronesia", code: "+691", flag: "🇫🇲" },
      { name: "Moldova", code: "+373", flag: "🇲🇩" },
      { name: "Monaco", code: "+377", flag: "🇲🇨" },
      { name: "Mongolia", code: "+976", flag: "🇲🇳" },
      { name: "Montenegro", code: "+382", flag: "🇲🇪" },
      { name: "Montserrat", code: "+1664", flag: "🇲🇸" },
      { name: "Morocco", code: "+212", flag: "🇲🇦" },
      { name: "Mozambique", code: "+258", flag: "🇲🇿" },
      { name: "Myanmar", code: "+95", flag: "🇲🇲" },
      { name: "Namibia", code: "+264", flag: "🇳🇦" },
      { name: "Nauru", code: "+674", flag: "🇳🇷" },
      { name: "Nepal", code: "+977", flag: "🇳🇵" },
      { name: "Netherlands", code: "+31", flag: "🇳🇱" },
      { name: "New Caledonia", code: "+687", flag: "🇳🇨" },
      { name: "New Zealand", code: "+64", flag: "🇳🇿" },
      { name: "Nicaragua", code: "+505", flag: "🇳🇮" },
      { name: "Niger", code: "+227", flag: "🇳🇪" },
      { name: "Nigeria", code: "+234", flag: "🇳🇬" },
      { name: "Niue", code: "+683", flag: "🇳🇺" },
      { name: "Norfolk Island", code: "+672", flag: "🇳🇫" },
      { name: "North Korea", code: "+850", flag: "🇰🇵" },
      { name: "North Macedonia", code: "+389", flag: "🇲🇰" },
      { name: "Norway", code: "+47", flag: "🇳🇴" },
      { name: "Oman", code: "+968", flag: "🇴🇲" },
      { name: "Pakistan", code: "+92", flag: "🇵🇰" },
      { name: "Palau", code: "+680", flag: "🇵🇼" },
      { name: "Palestine", code: "+970", flag: "🇵🇸" },
      { name: "Panama", code: "+507", flag: "🇵🇦" },
      { name: "Papua New Guinea", code: "+675", flag: "🇵🇬" },
      { name: "Paraguay", code: "+595", flag: "🇵🇾" },
      { name: "Peru", code: "+51", flag: "🇵🇪" },
      { name: "Philippines", code: "+63", flag: "🇵🇭" },
      { name: "Poland", code: "+48", flag: "🇵🇱" },
      { name: "Portugal", code: "+351", flag: "🇵🇹" },
      { name: "Puerto Rico", code: "+1939", flag: "🇵🇷" },
      { name: "Qatar", code: "+974", flag: "🇶🇦" },
      { name: "Réunion", code: "+262", flag: "🇷🇪" },
      { name: "Romania", code: "+40", flag: "🇷🇴" },
      { name: "Russia", code: "+7", flag: "🇷🇺" },
      { name: "Rwanda", code: "+250", flag: "🇷🇼" },
      { name: "Saint Barthélemy", code: "+590", flag: "🇧🇱" },
      { name: "Saint Helena", code: "+290", flag: "🇸🇭" },
      { name: "Saint Kitts and Nevis", code: "+1869", flag: "🇰🇳" },
      { name: "Saint Lucia", code: "+1758", flag: "🇱🇨" },
      { name: "Saint Martin", code: "+590", flag: "🇲🇫" },
      { name: "Saint Pierre and Miquelon", code: "+508", flag: "🇵🇲" },
      { name: "Saint Vincent and the Grenadines", code: "+1784", flag: "🇻🇨" },
      { name: "Samoa", code: "+685", flag: "🇼🇸" },
      { name: "San Marino", code: "+378", flag: "🇸🇲" },
      { name: "Sao Tome and Principe", code: "+239", flag: "🇸🇹" },
      { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
      { name: "Senegal", code: "+221", flag: "🇸🇳" },
      { name: "Serbia", code: "+381", flag: "🇷🇸" },
      { name: "Seychelles", code: "+248", flag: "🇸🇨" },
      { name: "Sierra Leone", code: "+232", flag: "🇸🇱" },
      { name: "Singapore", code: "+65", flag: "🇸🇬" },
      { name: "Sint Maarten", code: "+1721", flag: "🇸🇽" },
      { name: "Slovakia", code: "+421", flag: "🇸🇰" },
      { name: "Slovenia", code: "+386", flag: "🇸🇮" },
      { name: "Solomon Islands", code: "+677", flag: "🇸🇧" },
      { name: "Somalia", code: "+252", flag: "🇸🇴" },
      { name: "South Africa", code: "+27", flag: "🇿🇦" },
      { name: "South Korea", code: "+82", flag: "🇰🇷" },
      { name: "South Sudan", code: "+211", flag: "🇸🇸" },
      { name: "Spain", code: "+34", flag: "🇪🇸" },
      { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
      { name: "Sudan", code: "+249", flag: "🇸🇩" },
      { name: "Suriname", code: "+597", flag: "🇸🇷" },
      { name: "Svalbard and Jan Mayen", code: "+47", flag: "🇸🇯" },
      { name: "Sweden", code: "+46", flag: "🇸🇪" },
      { name: "Switzerland", code: "+41", flag: "🇨🇭" },
      { name: "Syria", code: "+963", flag: "🇸🇾" },
      { name: "Taiwan", code: "+886", flag: "🇹🇼" },
      { name: "Tajikistan", code: "+992", flag: "🇹🇯" },
      { name: "Tanzania", code: "+255", flag: "🇹🇿" },
      { name: "Thailand", code: "+66", flag: "🇹🇭" },
      { name: "Timor-Leste", code: "+670", flag: "🇹🇱" },
      { name: "Togo", code: "+228", flag: "🇹🇬" },
      { name: "Tokelau", code: "+690", flag: "🇹🇰" },
      { name: "Tonga", code: "+676", flag: "🇹🇴" },
      { name: "Trinidad and Tobago", code: "+1868", flag: "🇹🇹" },
      { name: "Tunisia", code: "+216", flag: "🇹🇳" },
      { name: "Turkey", code: "+90", flag: "🇹🇷" },
      { name: "Turkmenistan", code: "+993", flag: "🇹🇲" },
      { name: "Turks and Caicos Islands", code: "+1649", flag: "🇹🇨" },
      { name: "Tuvalu", code: "+688", flag: "🇹🇻" },
      { name: "Uganda", code: "+256", flag: "🇺🇬" },
      { name: "Ukraine", code: "+380", flag: "🇺🇦" },
      { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
      { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
      { name: "United States", code: "+1", flag: "🇺🇸" },
      { name: "Uruguay", code: "+598", flag: "🇺🇾" },
      { name: "Uzbekistan", code: "+998", flag: "🇺🇿" },
      { name: "Vanuatu", code: "+678", flag: "🇻🇺" },
      { name: "Vatican City", code: "+379", flag: "🇻🇦" },
      { name: "Venezuela", code: "+58", flag: "🇻🇪" },
      { name: "Vietnam", code: "+84", flag: "🇻🇳" },
      { name: "Wallis and Futuna", code: "+681", flag: "🇼🇫" },
      { name: "Western Sahara", code: "+212", flag: "🇪🇭" },
      { name: "Yemen", code: "+967", flag: "🇾🇪" },
      { name: "Zambia", code: "+260", flag: "🇿🇲" },
      { name: "Zimbabwe", code: "+263", flag: "🇿🇼" }
    ];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCountries(allCountriesData);
  }, []);

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSearchTerm('');
    setIsDropdownOpen(false);
  };

  // Handle click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStartTopUp = () => {
    const fullNumber = `${selectedCountry.code}${phoneNumber}`;
    toast.success(`Top - up Successful ${fullNumber} (${selectedCountry.name})`);
    // Implement actual top-up logic here
  };

  return (
    <div className="relative w-full min-h-screen bg-linear-to-br from-[#1a001f] via-[#120018] to-black">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1560305527-51dc8ad5a8f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmUlMjBjYWxsfGVufDB8fDB8fHww"
        alt="bg"
        className="w-full h-120 object-cover"
      />

      {/* Overlay Text */}
      <h1 className="absolute top-50 left-1/2 -translate-x-1/2 text-white text-2xl md:text-5xl font-semibold text-center px-4 max-w-2xl z-10 font-bold">
        The Fastest Way to Send Mobile Top-Ups Worldwide
      </h1>

      {/* Main Card */}
      <div className="relative z-10 py-30 mx-4 md:mx-auto max-w-md">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Ready To Send A Top-Up?
          </h2>

          {/* Country Selection Dropdown */}
          <div className="mb-4" ref={dropdownRef}>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Select Country
            </label>
            <div className="relative">
              {/* Selected Country Display */}
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between bg-white rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedCountry.flag}</span>
                  <span className="font-medium text-gray-800">{selectedCountry.name}</span>
                  <span className="text-gray-500">{selectedCountry.code}</span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-20 w-full mt-1 bg-white rounded-lg shadow-xl max-h-80 overflow-auto">
                  {/* Search Input */}
                  <div className="sticky top-0 bg-white p-2 border-b">
                    <input
                      type="text"
                      placeholder="Search country or code..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      autoFocus
                    />
                  </div>

                  {/* Country List */}
                  <div>
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <div
                          key={country.code + country.name}
                          onClick={() => handleCountrySelect(country)}
                          className={`flex items-center justify-between p-3 cursor-pointer hover:bg-purple-50 transition-colors ${
                            selectedCountry.code === country.code ? 'bg-purple-100' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{country.flag}</span>
                            <span className="text-gray-800">{country.name}</span>
                          </div>
                          <span className="text-purple-600 font-mono">{country.code}</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No countries found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Phone Number Input */}
          <div className="mb-6">
            <label className="block text-white/80 text-sm font-medium mb-2">
              Phone Number
            </label>
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <span className="bg-gray-100 px-3 py-3 text-gray-800 font-semibold border-r">
                {selectedCountry.code}
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
                className="flex-1 px-3 py-3 outline-none text-gray-800"
              />
            </div>
            <p className="text-white/50 text-xs mt-1">
              Example: {selectedCountry.code}1778-345234
            </p>
          </div>

          {/* Popular Countries Section */}
          <div className="mb-8">
            <h2 className="text-white font-semibold text-lg mb-3">Popular Countries</h2>
            <div className="space-y-3">
              <button
                onClick={() => handleCountrySelect({ name: "Bangladesh", code: "+880", flag: "🇧🇩" })}
                className="w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 bg-white/10 text-white hover:bg-white/20"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇧🇩</span>
                  <span className="font-medium">Bangladesh</span>
                </div>
                <span className="font-mono">+880</span>
              </button>
              <button
                onClick={() => handleCountrySelect({ name: "United States", code: "+1", flag: "🇺🇸" })}
                className="w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 bg-white/10 text-white hover:bg-white/20"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="font-medium">United States (USA)</span>
                </div>
                <span className="font-mono">+1</span>
              </button>
            </div>
          </div>

          {/* Start Top-Up Button */}
          <button
            onClick={handleStartTopUp}
            className="w-full bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95"
          >
            Start Top-Up
          </button>

          <p className="text-white/40 text-xs text-center mt-4">
            Fast & secure worldwide top-ups
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopUp;