"use client";

import { useState } from "react";
import { CreditCard, Smartphone, AlertCircle } from "lucide-react";
import { useBooking } from "../../context/BookingContext";

const PaymentForm = ({ paymentMethod, onPaymentMethodChange, onSubmit }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    mobileNumber: "",
    mobileProvider: "MTN Mobile Money",
  });
  const [errors, setErrors] = useState({});

  // Initialize useBooking outside of conditional block
  const { state, dispatch } = useBooking();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (paymentMethod === "credit_card") {
      if (!formData.cardNumber)
        newErrors.cardNumber = "Card number is required";
      if (!formData.cardName)
        newErrors.cardName = "Cardholder name is required";
      if (!formData.expiryDate)
        newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv) newErrors.cvv = "CVV is required";
    } else if (paymentMethod === "mobile_money") {
      if (!formData.mobileNumber)
        newErrors.mobileNumber = "Mobile number is required";
      if (!formData.mobileProvider)
        newErrors.mobileProvider = "Mobile provider is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Generate a unique ticket ID
      const ticketId = `TKT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      // Add the ticket to the context
      dispatch({
        type: "ADD_TICKET",
        payload: {
          id: ticketId,
          from: state.from,
          to: state.to,
          date: state.date,
          bus: state.bus,
          seat: state.seat,
          passengerDetails: state.passengerDetails,
          paymentMethod: paymentMethod,
          purchaseDate: new Date().toISOString(),
        },
      });

      onSubmit(e);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => onPaymentMethodChange("mobile_money")}
            className={`flex-1 py-3 px-4 rounded-md border ${
              paymentMethod === "mobile_money"
                ? "border-[#00205B] bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            } flex items-center justify-center`}
          >
            <Smartphone size={20} className="mr-2" />
            <span>Mobile Money</span>
          </button>

          <button
            type="button"
            onClick={() => onPaymentMethodChange("credit_card")}
            className={`flex-1 py-3 px-4 rounded-md border ${
              paymentMethod === "credit_card"
                ? "border-[#00205B] bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            } flex items-center justify-center`}
          >
            <CreditCard size={20} className="mr-2" />
            <span>Credit Card</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {paymentMethod === "mobile_money" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile Money Provider
              </label>
              <select
                name="mobileProvider"
                value={formData.mobileProvider}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                required
              >
                <option value="MTN Mobile Money">MTN Mobile Money</option>
                <option value="Vodafone Cash">Vodafone Cash</option>
                <option value="AirtelTigo Money">AirtelTigo Money</option>
              </select>
              {errors.mobileProvider && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobileProvider}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Enter your mobile money number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                required
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobileNumber}
                </p>
              )}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-start">
              <AlertCircle size={18} className="text-yellow-500 mr-2 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-yellow-700">
                  Payment Instructions:
                </p>
                <p className="text-yellow-600">
                  After clicking "Pay Now", you will receive a prompt on your
                  mobile phone to authorize the payment. Please follow the
                  instructions to complete your transaction.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                required
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                required
              />
              {errors.cardName && (
                <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                  required
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.expiryDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                  required
                />
                {errors.cvv && (
                  <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-[#00205B] text-white py-3 px-4 rounded-md hover:bg-[#00307A] transition-colors font-medium"
          >
            Pay Now - GHC 80.00
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
