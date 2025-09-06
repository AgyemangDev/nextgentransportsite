import BookingSummary from "./BookingSummary";
import { useState } from "react";
import axios from "axios";

const PaymentStep = ({ booking, nextStep, prevStep }) => {
  const [loading, setLoading] = useState(false);

  const verifyPayment = async (reference) => {
    try {
      const verifyRes = await axios.post("https://nextgenbackend-i9ck.onrender.com/api/payment/verify", {
        reference,
        bookingData: booking,
      });

      if (verifyRes.data.success) {
        alert("Payment successful and booking confirmed.");
        nextStep(); // Proceed to the next step
      } else {
        alert("Payment succeeded, but booking failed: " + verifyRes.data.message);
      }
    } catch (err) {
      console.error("Verification error:", err);
      alert("Something went wrong verifying the payment. Please contact support.");
    }
  };

  const handlePay = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        bus,
        seat,
        passengerDetails,
        from,
        to
      } = booking;

      // 1. Check if seat is available
      const response = await axios.post("https://nextgenbackend-i9ck.onrender.com/api/bus/check-seat", {
        busId: bus.id,
        seatId: seat.id,
      });

      if (!response.data.success) {
        alert(response.data.message || "Seat is no longer available.");
        setLoading(false);
        return;
      }

      // 2. Setup Paystack payment
      const reference = `NGT_${Date.now()}`;

// Calculate amount with 1.95% fee
const baseAmount = bus.price;
const fee = baseAmount * 0.0195;
const totalAmount = baseAmount + fee;

const handler = window.PaystackPop.setup({
  key: 'sk_live_5393653341c012340c2d58573e7c6f2894529728',
  email: passengerDetails.email,
  amount: Math.round(totalAmount * 100), // Paystack expects amount in pesewas
  currency: "GHS",
  reference: reference,
  metadata: {
    busId: bus.id,
    seatId: seat.id,
    seatNumber: seat.number,
    name: passengerDetails.name,
    email: passengerDetails.email,
    phone: passengerDetails.phone,
    from,
    to,
    departureTime: bus.departureTime,
  },
  callback: function (response) {
    verifyPayment(response.reference);
  },
  onClose: function () {
    alert("Transaction was not completed, window closed.");
  },
});


      handler.openIframe();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-[#00205B] mb-4">Make Payment</h2>

          <p className="text-gray-600 mb-4 text-sm">
            Click the button below to make payment. A secured browser window will open — input
            your Mobile Money number, bank card details, or use Apple Pay. Enter the OTP sent to you
            to proceed. After successful payment, click "I've completed Payment" to finalize.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Keep the confirmation email from <strong>NextGenTransport</strong> and payment receipt from <strong>Paystack</strong>. It will include your
            booking number, seat number, and trip information. 
          </p>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 border border-[#00205B] text-[#00205B] rounded-md hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={handlePay}
              disabled={loading}
              className={`px-4 py-2 bg-[#00205B] text-white rounded-md hover:bg-[#00307A] transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
{loading
  ? "Processing..."
  : `Pay ₵${(booking.bus?.price * 1.0195).toFixed(2)}`}
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

export default PaymentStep;
