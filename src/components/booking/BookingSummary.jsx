import { Calendar, MapPin, User, CreditCard } from "lucide-react";

const BookingSummary = ({ booking }) => {
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
            <div className="font-medium">
              {new Date(booking.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="text-sm">
              {booking.bus?.departureTime} - {booking.bus?.arrivalTime}
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
          </div>
        </div>

        <div className="flex items-start">
          <CreditCard size={18} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Payment Method</div>
            <div className="font-medium">
              {booking.paymentMethod === "mobile_money"
                ? "Mobile Money"
                : "Credit Card"}
            </div>
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between mb-2">
            <span>Bus Fare</span>
            <span>GHC {booking.bus?.price}.00</span>
          </div>
          <div className="flex justify-between mb-2 text-sm text-gray-500">
            <span>Service Fee</span>
            <span>GHC 0.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>GHC {booking.bus?.price}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
