import { Calendar, MapPin, User, CreditCard } from "lucide-react";

const BookingSummary = ({ booking }) => {
  console.log(booking)
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-[#00205B] text-white p-4">
        <h3 className="font-bold text-lg">Booking Summary</h3>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-start">
          <MapPin size={18} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Route</div>
            <div className="font-medium">
              {booking.from} to {booking.to}
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <Calendar size={18} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Travel Date & Time</div>
           
            <div className="text-sm">
              {booking.bus?.departureTime}
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <User size={18} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Passenger</div>
            <div className="font-medium">{booking.passengerDetails.name}</div>
            <div className="text-sm">{booking.passengerDetails.email}</div>
            <div className="text-sm">{booking.passengerDetails.phone}</div>
            <div className="text-sm">Seat {booking.seat.number}</div>
          </div>
        </div>


<div className="border-t pt-4 mt-4">
  <div className="flex justify-between mb-2">
    <span>Bus Fare</span>
    <span>GHC {booking.bus?.price?.toFixed(2)}</span>
  </div>
  <div className="flex justify-between mb-2 text-sm text-gray-500">
    <span>Service Fee (1.95%)</span>
    <span>
      GHC {(booking.bus?.price * 0.0195).toFixed(2)}
    </span>
  </div>
  <div className="flex justify-between font-semibold mt-2">
    <span>Total</span>
    <span>
      GHC {(booking.bus?.price * 1.0195).toFixed(2)}
    </span>
  </div>
</div>

      </div>
    </div>
  );
};

export default BookingSummary;
