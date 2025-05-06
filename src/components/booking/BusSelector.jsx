"use client";

import { useState, useEffect } from "react";
import { Clock, Users, Wifi, Coffee } from "lucide-react";

const BusSelector = ({ from, to, date, selectedBus, onBusSelect }) => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // Simulating API call with setTimeout
    setLoading(true);
    setTimeout(() => {
      // Mock data for available buses
      const mockBuses = [
        {
          id: 1,
          name: "Express Deluxe",
          departureTime: "06:00 AM",
          arrivalTime: "10:30 AM",
          duration: "4h 30m",
          price: 80,
          availableSeats: 32,
          totalSeats: 53,
          amenities: ["wifi", "ac", "refreshment"],
          type: "Deluxe",
        },
        {
          id: 2,
          name: "Standard Coach",
          departureTime: "08:30 AM",
          arrivalTime: "01:15 PM",
          duration: "4h 45m",
          price: 60,
          availableSeats: 28,
          totalSeats: 53,
          amenities: ["ac"],
          type: "Standard",
        },
        {
          id: 3,
          name: "Premium Express",
          departureTime: "12:00 PM",
          arrivalTime: "04:15 PM",
          duration: "4h 15m",
          price: 100,
          availableSeats: 45,
          totalSeats: 53,
          amenities: ["wifi", "ac", "refreshment", "usb"],
          type: "Premium",
        },
      ];

      setBuses(mockBuses);
      setLoading(false);
    }, 1000);
  }, [from, to, date]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00205B]"></div>
      </div>
    );
  }

  if (buses.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">
          No buses available for the selected route and date.
        </p>
        <p className="mt-2">Please try a different date or route.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-2 border-b">
        <div className="text-sm text-gray-500">
          {buses.length} buses available
        </div>
        <div className="text-sm font-medium">
          {from} to {to} •{" "}
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>

      {buses.map((bus) => (
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
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="text-center">
                <div className="font-medium">{bus.departureTime}</div>
                <div className="text-xs text-gray-500">Departure</div>
              </div>

              <div className="hidden md:block text-gray-300">
                <span>—</span>
                <span className="mx-2 text-xs text-gray-500">
                  {bus.duration}
                </span>
                <span>→</span>
              </div>

              <div className="text-center">
                <div className="font-medium">{bus.arrivalTime}</div>
                <div className="text-xs text-gray-500">Arrival</div>
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
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>{bus.availableSeats} seats left</span>
            </div>
            {bus.amenities.includes("wifi") && (
              <div className="flex items-center">
                <Wifi size={16} className="mr-1" />
                <span>Free WiFi</span>
              </div>
            )}
            {bus.amenities.includes("refreshment") && (
              <div className="flex items-center">
                <Coffee size={16} className="mr-1" />
                <span>Refreshments</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusSelector;
