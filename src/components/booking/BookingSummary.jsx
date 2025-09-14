import { Calendar, MapPin, User } from "lucide-react";
import { calculateStorageDetails } from "../../../utils/calculateStorageTotal";

const BookingSummary = ({
  booking = {},
  busFare = 0,
  storageTotal = 0,
  serviceFee = 0,
  grandTotal = 0,
}) => {
  // Defensive checks
  const passenger = booking.passengerDetails || {};
  const seat = booking.seat || {};
  const bus = booking.bus || {};

  // Storage breakdown
  const { breakdown } = calculateStorageDetails(booking.storage?.quantities || {});

  // Helper to format safely
  const formatCurrency = (val) =>
    typeof val === "number" && !isNaN(val) ? val.toFixed(2) : "0.00";

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#00205B] text-white p-4">
        <h3 className="font-bold text-lg">Booking Summary</h3>
      </div>

      <div className="p-4 space-y-4">
        {/* Route */}
        <div className="flex items-start">
          <MapPin size={18} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Route</div>
            <div className="font-medium">
              {booking.from || "N/A"} to {booking.to || "N/A"}
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start">
          <Calendar size={18} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Travel Date & Time</div>
            <div className="text-sm">{bus.departureTime || "N/A"}</div>
          </div>
        </div>

        {/* Passenger */}
        <div className="flex items-start">
          <User size={18} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Passenger</div>
            <div className="font-medium">{passenger.name || "N/A"}</div>
            <div className="text-sm">{passenger.email || "N/A"}</div>
            <div className="text-sm">{passenger.phone || "N/A"}</div>
            <div className="text-sm">Seat {seat.number || "N/A"}</div>
          </div>
        </div>

        {/* Costs */}
        <div className="border-t pt-4 mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Bus Fare</span>
            <span>GHC {formatCurrency(busFare)}</span>
          </div>

          {breakdown.length > 0 && (
            <div className="mt-3">
              <div className="text-sm text-gray-500 mb-1">Storage Items</div>
              {breakdown.map((item) => (
                <div key={item.name} className="flex justify-between text-sm">
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>GHC {formatCurrency(item.cost)}</span>
                </div>
              ))}
              <div className="flex justify-between font-medium mt-1">
                <span>Total Storage</span>
                <span>GHC {formatCurrency(storageTotal)}</span>
              </div>
            </div>
          )}

          <div className="flex justify-between text-sm text-gray-500">
            <span>Service Fee (1.5%)</span>
            <span>GHC {formatCurrency(serviceFee)}</span>
          </div>

          <div className="flex justify-between font-semibold border-t pt-2 mt-2">
            <span>Grand Total</span>
            <span>GHC {formatCurrency(grandTotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
