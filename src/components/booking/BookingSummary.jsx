import { Calendar, MapPin, User } from "lucide-react";
import { calculateStorageDetails } from "../../../utils/calculateStorageTotal";

const BookingSummary = ({ booking, busFare, storageTotal, serviceFee, grandTotal }) => {
  // If props not passed, fallback (for safety)
  const { breakdown } = calculateStorageDetails(booking.storage?.quantities);

  return (
    <div className="border rounded-lg overflow-hidden">
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
              {booking.from} to {booking.to}
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start">
          <Calendar size={18} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Travel Date & Time</div>
            <div className="text-sm">{booking.bus?.departureTime}</div>
          </div>
        </div>

        {/* Passenger */}
        <div className="flex items-start">
          <User size={18} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Passenger</div>
            <div className="font-medium">{booking.passengerDetails.name}</div>
            <div className="text-sm">{booking.passengerDetails.email}</div>
            <div className="text-sm">{booking.passengerDetails.phone}</div>
            <div className="text-sm">Seat {booking.seat?.number}</div>
          </div>
        </div>

        {/* Costs */}
        <div className="border-t pt-4 mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Bus Fare</span>
            <span>GHC {busFare.toFixed(2)}</span>
          </div>

          {breakdown.length > 0 && (
            <div className="mt-3">
              <div className="text-sm text-gray-500 mb-1">Storage Items</div>
              {breakdown.map((item) => (
                <div key={item.name} className="flex justify-between text-sm">
                  <span>{item.name} × {item.qty}</span>
                  <span>GHC {item.cost.toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between font-medium mt-1">
                <span>Total Storage</span>
                <span>GHC {storageTotal.toFixed(2)}</span>
              </div>
            </div>
          )}

<div className="bg-gray-100 p-4 rounded-md mb-4 text-sm">
  <h3 className="font-semibold">Debug Booking Info</h3>
  <pre className="whitespace-pre-wrap">
    {JSON.stringify(booking, null, 2)}
  </pre>
</div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>Service Fee (1.5%)</span>
            <span>GHC {serviceFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-semibold border-t pt-2 mt-2">
            <span>Grand Total</span>
            <span>GHC {grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
