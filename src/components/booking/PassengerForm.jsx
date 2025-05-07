"use client";

import { User, Mail, Phone } from "lucide-react";

const PassengerForm = ({ passengerDetails, onChange, nextStep, prevStep }) => {
  const formIsValid =
    passengerDetails.name?.trim() &&
    passengerDetails.email?.trim() &&
    passengerDetails.phone?.trim();

  return (
    <div>
      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <div className="relative">
            <User
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              name="name"
              value={passengerDetails.name}
              onChange={onChange}
              placeholder="Enter your full name"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              name="email"
              value={passengerDetails.email}
              onChange={onChange}
              placeholder="Enter your email address"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
              required
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Your ticket will be sent to this email address
          </p>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <div className="relative">
            <Phone
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="tel"
              name="phone"
              value={passengerDetails.phone}
              onChange={onChange}
              placeholder="Enter your phone number"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
              required
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={() => nextStep()}
          disabled={!formIsValid}
          className={`px-4 py-2 rounded text-white transition-colors ${
            formIsValid
              ? "bg-[#00205B] hover:bg-[#001A4D]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PassengerForm;
