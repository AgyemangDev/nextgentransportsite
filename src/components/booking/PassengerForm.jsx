"use client";

import { User, Mail, Phone } from "lucide-react";

const PassengerForm = ({ passengerDetails, onChange }) => {
  return (
    <div>
      <div className="space-y-4">
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

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
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
    </div>
  );
};

export default PassengerForm;
