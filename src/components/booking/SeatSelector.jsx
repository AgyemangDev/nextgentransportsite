"use client";

import { useState, useEffect } from "react";
import { Info } from "lucide-react";

const SeatSelector = ({ bus, selectedSeat, onSeatSelect }) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!bus) return;

    // In a real app, this would be an API call to get seat availability
    // Simulating API call with setTimeout
    setLoading(true);
    setTimeout(() => {
      // Generate seats based on bus configuration
      // For this example, we'll create a 53-seater bus with 24 double seats on each side and 5 at the back
 
      const mockSeats = [];

      // Generate seat data
      // 24 double seats on left (odd numbers)
      for (let i = 1; i <= 47; i += 2) {
        mockSeats.push({
          id: i,
          number: i,
          position: "left",
          status: Math.random() > 0.3 ? "available" : "booked",
        });
      }

      // 24 double seats on right (even numbers)
      for (let i = 2; i <= 48; i += 2) {
        mockSeats.push({
          id: i,
          number: i,
          position: "right",
          status: Math.random() > 0.3 ? "available" : "booked",
        });
      }

      // 5 seats at the back (49-53)
      for (let i = 49; i <= 53; i++) {
        mockSeats.push({
          id: i,
          number: i,
          position: "back",
          status: Math.random() > 0.3 ? "available" : "booked",
        });
      }

      setSeats(mockSeats);
      setLoading(false);
    }, 1000);
  }, [bus]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00205B]"></div>
      </div>
    );
  }

  if (!bus) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">Please select a bus first.</p>
      </div>
    );
  }

  const handleSeatClick = (seat) => {
    if (seat.status === "available") {
      onSeatSelect(seat);
    }
  };

  return (
    <div>
      <div className="mb-6 p-3 bg-gray-50 rounded-lg flex items-start gap-2">
        <Info size={20} className="text-[#00205B] mt-0.5" />
        <div>
          <p className="text-sm">
            Please select your preferred seat from the seat map below. Seats
            marked as green are available, and red seats are already booked.
          </p>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-center gap-4 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded-sm mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 rounded-sm mr-2"></div>
          <span>Booked</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#00205B] rounded-sm mr-2"></div>
          <span>Selected</span>
        </div>
      </div>

      <div className="relative bg-gray-100 p-6 rounded-lg">
        {/* Bus front */}
        <div className="w-1/2 h-12 mx-auto mb-8 flex items-center justify-center border-2 border-gray-400 rounded-t-3xl">
          <span className="text-sm font-medium">Driver</span>
        </div>

        {/* Seats container */}
        <div className="flex justify-between">
          {/* Left side seats */}
          <div className="grid grid-cols-2 gap-2">
            {seats
              .filter((seat) => seat.position === "left")
              .map((seat) => (
                <div
                  key={seat.id}
                  onClick={() => handleSeatClick(seat)}
                  className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer text-sm font-medium ${
                    selectedSeat?.id === seat.id
                      ? "bg-[#00205B] text-white"
                      : seat.status === "available"
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-red-500 text-white cursor-not-allowed"
                  }`}
                >
                  {seat.number}
                </div>
              ))}
          </div>

          {/* Aisle */}
          <div className="w-8"></div>

          {/* Right side seats */}
          <div className="grid grid-cols-2 gap-2">
            {seats
              .filter((seat) => seat.position === "right")
              .map((seat) => (
                <div
                  key={seat.id}
                  onClick={() => handleSeatClick(seat)}
                  className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer text-sm font-medium ${
                    selectedSeat?.id === seat.id
                      ? "bg-[#00205B] text-white"
                      : seat.status === "available"
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-red-500 text-white cursor-not-allowed"
                  }`}
                >
                  {seat.number}
                </div>
              ))}
          </div>
        </div>

        {/* Back seats */}
        <div className="mt-6 flex justify-center gap-2">
          {seats
            .filter((seat) => seat.position === "back")
            .map((seat) => (
              <div
                key={seat.id}
                onClick={() => handleSeatClick(seat)}
                className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer text-sm font-medium ${
                  selectedSeat?.id === seat.id
                    ? "bg-[#00205B] text-white"
                    : seat.status === "available"
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-red-500 text-white cursor-not-allowed"
                }`}
              >
                {seat.number}
              </div>
            ))}
        </div>
      </div>

      {selectedSeat && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="font-medium">Selected Seat: {selectedSeat.number}</p>
          <p className="text-sm text-gray-600">Price: GHC {bus.price}</p>
        </div>
      )}
    </div>
  );
};

export default SeatSelector;
