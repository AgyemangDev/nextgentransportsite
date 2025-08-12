"use client";

import { useState, useEffect } from "react";
import { Clock, Users, Wifi, Coffee } from "lucide-react";
import { useBuses } from "../../context/BusContext";

const busImage = "https://a1carsrental.com/wp-content/uploads/45-seat-coach-bus-rental-accra-ghana-1c-7.jpg";

const BusSelector = ({ from, to, selectedBus, onBusSelect, nextStep, prevStep }) => {
  const { buses, loading } = useBuses();

  // Log loading state and buses data
  useEffect(() => {
    console.log("Loading state:", loading);
    console.log("Fetched buses:", buses);
  }, [loading, buses]);

  // If loading, show a spinner
  if (loading) {
    console.log("Fetching data...");
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00205B]"></div>
      </div>
    );
  }

  // If no buses are found
  if (buses.length === 0) {
    console.log("No buses available for this route.");
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">
          No buses available for the selected route and date.
        </p>
        <p className="mt-2">Please try a different date or route.</p>
      </div>
    );
  }

  // If buses are fetched and available
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-[#00205B] mb-4">
        Select Bus
      </h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2 border-b">
          <div className="text-sm text-gray-500">
            {buses.length} buses available
          </div>
          <div className="text-sm font-medium">
            {from} to {to} 
          </div>
        </div>
        {/* <p className="text-sm text-red-600 font-medium mb-4">
  Note: The first bus is fully booked. Bus B is now filling.
</p> */}

        {buses.map((bus) => {
  const totalSeats = bus.seats.length;
  const availableSeats = bus.seats.filter(seat => seat.status === "available").length;
  const bookedSeats = totalSeats - availableSeats;

  return (
    <div
      key={bus.id}
      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
        selectedBus?.id === bus.id
          ? "border-[#00205B] bg-blue-50"
          : "hover:border-gray-400"
      }`}
      onClick={() => onBusSelect(bus)}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="mb-3 md:mb-0">
          <h3 className="font-semibold text-lg">{bus.name}</h3>
          <div className="text-sm text-gray-500">{bus.type} Bus</div>
          <div className="text-sm font-semibold text-[#00205B] mt-1">
            📅 {new Date(bus.pickupDate).toDateString()} — 🕒 {bus.departureTime}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="text-center">
            <div className="font-medium">{bus.departureTime}</div>
            <div className="text-xs text-gray-500">Departure</div>
          </div>
        </div>

        <div className="mt-3 md:mt-0">
          <div className="font-bold text-lg text-[#00205B]">
            GHC {bus.price}
          </div>
          <div className="text-xs text-gray-500">per person</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
        <div className="flex items-center">
          <Clock size={16} className="mr-1" />
          <span>{bus.duration}</span>
        </div>
        <div className="flex items-center text-green-600 font-medium">
          <Users size={16} className="mr-1" />
          <span>{availableSeats} seats left</span>
        </div>
        <div className="flex items-center text-red-500 font-medium">
          <Users size={16} className="mr-1" />
          <span>{bookedSeats} booked</span>
        </div>
        <div className="flex items-center">
          <Wifi size={16} className="mr-1" />
          <span>Free WiFi</span>
        </div>
        <div className="flex items-center">
          <Coffee size={16} className="mr-1" />
          <span>Refreshments</span>
        </div>
      </div>
    </div>
  );
})}
      </div>
      
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 border border-[#00205B] text-[#00205B] rounded-md hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={!selectedBus}
          className={`px-4 py-2 bg-[#00205B] text-white rounded-md hover:bg-[#00307A] transition-colors ${
            !selectedBus ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Continue to Select Seat
        </button>
      </div>
    </div>
  );
};

export default BusSelector;
