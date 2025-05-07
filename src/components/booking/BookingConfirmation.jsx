import { CheckCircle } from "lucide-react";
import BookingSummary from "./BookingSummary";
import { useNavigate } from "react-router-dom";

const BookingConfirmation = ({ booking }) => {
  const navigate = useNavigate();
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-[#00205B] mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Your booking has been confirmed. A confirmation email has been
            sent to <strong>{booking.passengerDetails.email}</strong> or check <strong> your spam</strong> .
          </p>
          
          <div className="text-left mb-6 border p-4 rounded bg-gray-50">
            <h3 className="font-medium mb-2">Important Information:</h3>
            <ul className="text-sm space-y-2">
              <li>• Please arrive at the bus station at least 30 minutes before departure time.</li>
              <li>• Print out your booking email from NextGenTransport after booking. This is different from paystack payment receipt</li>
              <li>• In case of any changes, please contact customer support at least 3 hours before departure.</li>
            </ul>
          </div>
          
          <div className="flex justify-center gap-4">
            <button
             onClick={() => navigate("/")}
            className="px-4 py-2 bg-[#00205B] text-white rounded-md hover:bg-[#00307A] transition-colors">
              Return to Home
            </button>
          </div>
        </div>
      </div>
      
      <div className="md:col-span-1">
        <BookingSummary booking={booking} />
      </div>
    </div>
  );
};

export default BookingConfirmation;