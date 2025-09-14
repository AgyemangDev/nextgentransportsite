// PaymentStep.jsx
import BookingSummary from "./BookingSummary";
import { useState } from "react";
import axios from "axios";
import { calculateStorageDetails } from "../../../utils/calculateStorageTotal";

const PaymentStep = ({ booking, nextStep, prevStep }) => {
  const [loading, setLoading] = useState(false);

  // --- Calculate full total ---
  const busFare = booking.bus?.price || 0;
  const { total: storageTotal } = calculateStorageDetails(
    booking.storage?.quantities
  );
  const baseAmount = busFare + storageTotal;

  // ✅ Service Fee is 2%
  const serviceFee = baseAmount * 0.02;
  const grandTotal = baseAmount + serviceFee;

  const verifyPayment = async (reference) => {
    try {
      const verifyRes = await axios.post(
        "https://nextgenbackend-i9ck.onrender.com/api/payment/verify",
        {
          reference,
          bookingData: booking,
          amountPaid: grandTotal,
        }
      );

      if (verifyRes.data.success) {
        alert("Payment successful and booking confirmed.");
        nextStep();
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
      const { bus, seat, passengerDetails, from, to } = booking;

      // 1. Check if seat is available
      const response = await axios.post(
        "https://nextgenbackend-i9ck.onrender.com/api/bus/check-seat",
        { busId: bus.id, seatId: seat.id }
      );

      if (!response.data.success) {
        alert(response.data.message || "Seat is no longer available.");
        setLoading(false);
        return;
      }

      // 2. Setup Paystack
      const reference = `NGT_${Date.now()}`;

      const handler = window.PaystackPop.setup({
        key: "pk_test_xxxxxxxx", // ⚠️ use PUBLIC key, not secret key
        email: passengerDetails.email,
        amount: Math.round(grandTotal * 100), // Paystack expects pesewas
        currency: "GHS",
        reference,
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
          storage: booking.storage?.quantities || [],
        },
        callback: (response) => verifyPayment(response.reference),
        onClose: () => {
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
            Click the button below to make payment. A secured browser window will open — input your
            Mobile Money number, bank card details, or use Apple Pay. Enter the OTP sent to you to
            proceed. After successful payment, click "I've completed Payment" to finalize.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Keep the confirmation email from <strong>NextGenTransport</strong> and payment receipt
            from <strong>Paystack</strong>. It will include your booking number, seat number, and
            trip information.
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
              {loading ? "Processing..." : `Pay ₵${grandTotal.toFixed(2)}`}
            </button>
          </div>
        </div>
      </div>

      <div className="md:col-span-1">
        {/* ✅ Pass calculated totals to summary */}
        <BookingSummary booking={booking} busFare={busFare} storageTotal={storageTotal} serviceFee={serviceFee} grandTotal={grandTotal} />
      </div>
    </div>
  );
};

export default PaymentStep;
