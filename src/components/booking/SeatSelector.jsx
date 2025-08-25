"use client";

import { useState, useEffect } from "react";
import { Info } from "lucide-react";

const SeatSelector = ({ bus, selectedSeat, onSeatSelect, nextStep, prevStep }) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  // Fire-and-forget ping to wake the backend
  fetch("https://nextgenbackend-i9ck.onrender.com", {
    method: "GET",
    cache: "no-store"
  }).catch(() => {
    // Ignore errors, since it's only a warm-up
  });
}, []);

useEffect(() => {
  if (!bus || !Array.isArray(bus.seats)) return;

  setLoading(true);

  try {
    const totalSeats = bus.seats.length;
    const rows = Math.floor((totalSeats - 4) / 3); // 2 left + 1 right per row
    const backStartIndex = rows * 3;
    const seatsCopy = [...bus.seats]; // Clone the seats array

    let left = [];
    let right = [];
    let back = [];

    // Assign seats row by row
    for (let i = 0; i < rows; i++) {
      const left1 = seatsCopy[i * 3];
      const left2 = seatsCopy[i * 3 + 1];
      const right1 = seatsCopy[i * 3 + 2];

      if (left1) left.push({ ...left1, position: "left" });
      if (left2) left.push({ ...left2, position: "left" });
      if (right1) right.push({ ...right1, position: "right" });
    }

    // Last 4 go to the back
    const backSeats = seatsCopy.slice(backStartIndex, backStartIndex + 4);
    back = backSeats.map((seat) => ({ ...seat, position: "back" }));

    setSeats([...left, ...right, ...back]);
  } catch (error) {
    console.error("Error processing seats:", error);
    setSeats([]);
  }

  setLoading(false);
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

  // Group seats by their position
  const leftSeats = seats.filter(seat => seat.position === "left");
  const rightSeats = seats.filter(seat => seat.position === "right");
  const backSeats = seats.filter(seat => seat.position === "back");

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

      {seats.length === 0 ? (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-center text-yellow-700">
            No seat information available for this bus. Please contact customer support.
          </p>
        </div>
      ) : (
        <div className="relative bg-gray-100 p-6 rounded-lg">
          {/* Bus front */}
          <div className="w-1/2 h-12 mx-auto mb-8 flex items-center justify-center border-2 border-gray-400 rounded-t-3xl">
            <span className="text-sm font-medium">Driver</span>
          </div>

          {/* Seats container */}
          <div className="flex justify-between">
            {/* Left side seats */}
          <div className={`grid ${bus.seats.length === 34 ? "grid-cols-2" : "grid-cols-2"} gap-2`}>
              {leftSeats.map((seat) => (
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
           <div className={`grid ${bus.seats.length === 34 ? "grid-cols-1" : "grid-cols-2"} gap-2`}>
              {rightSeats.map((seat) => (
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
          {backSeats.length > 0 && (
            <div className="mt-6 flex justify-center gap-2">
              {backSeats.map((seat) => (
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
          )}
        </div>
      )}

      {selectedSeat && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="font-medium">Selected Seat: {selectedSeat.number}</p>
          <p className="text-sm text-gray-600">Price: GHC {bus.price}</p>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={() => nextStep()}
          disabled={!selectedSeat}
          className={`px-4 py-2 rounded text-white ${
            selectedSeat ? "bg-[#00205B] hover:bg-[#001A47]" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SeatSelector;