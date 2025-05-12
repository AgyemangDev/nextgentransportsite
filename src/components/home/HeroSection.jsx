"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ArrowRight, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking", { state: formData });
  };

  const locations = [
    // "Kumasi KNUST Campus",
    // "Obuasi KNUST Campus",
    "Accra - Circle",
    "Accra - Madina",
    "Tema",
     "Kumasi - Asafo",
    "Tarkwa",
    "Tamale",
  ];

  const destinationOptions = ["Kumasi KNUST Campus", "Obuasi KNUST Campus"];

  return (
    <section className="relative bg-[#00205B] text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Travel Comfortably Across Ghana
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              Book your bus tickets online and enjoy a seamless travel
              experience with NextGen Transport Services. Safe, reliable, and comfortable
              transportation.
            </p>
            <div className="hidden lg:block">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Shield size={20} />
                  </div>
                  <span>Safe Travel</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Clock size={20} />
                  </div>
                  <span>On-Time Departures</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-[#00205B] mb-4">
              Book Your Trip
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">From</label>
                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <select
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                    required
                  >
                    <option value="">Select departure location</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">To</label>
                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <select
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                    required
                  >
                    <option value="">Select destination</option>
                    {destinationOptions.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00205B] text-white py-2 px-4 rounded-md hover:bg-[#00307A] transition-colors flex items-center justify-center"
              >
                Search Available Buses
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
