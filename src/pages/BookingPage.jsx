import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, MapPin, Users, CreditCard, CheckCircle } from "lucide-react";
import BusSelector from "../components/booking/BusSelector";
import SeatSelector from "../components/booking/SeatSelector";
import PassengerForm from "../components/booking/PassengerForm";
import BookingSummary from "../components/booking/BookingSummary";
import TripDetailsStep from "../components/booking/TripDetails";
import { useBooking } from "../context/BookingContext";

const BookingPage = () => {
  const location = useLocation();
  const {  dispatch } = useBooking();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    from: location.state?.from || "",
    to: location.state?.to || "",
    date: location.state?.date || "",
    bus: null,
    seat: null,
    passengerDetails: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // Update booking context when form data changes
  useEffect(() => {
    dispatch({ type: "UPDATE_BOOKING", payload: formData });
  }, [formData, dispatch]);

  // Initialize form with location state if available
  useEffect(() => {
    if (location.state) {
      setFormData((prev) => ({
        ...prev,
        from: location.state.from || prev.from,
        to: location.state.to || prev.to,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePassengerChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      passengerDetails: {
        ...prev.passengerDetails,
        [name]: value,
      },
    }));
  };

  const handleBusSelect = (bus) => {
    setFormData((prev) => ({
      ...prev,
      bus,
      seat: null, // Reset seat when bus changes
    }));
  };

  const handleSeatSelect = (seat) => {
    setFormData((prev) => ({
      ...prev,
      seat,
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: method,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the booking here
    nextStep();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <TripDetailsStep
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
         case 2:
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#00205B] mb-4">
              Select Bus
            </h2>
            <BusSelector
              from={formData.from}
              to={formData.to}
              date={formData.date}
              selectedBus={formData.bus}
              onBusSelect={handleBusSelect}
            />
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="px-4 py-2 border border-[#00205B] text-[#00205B] rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.bus}
                className={`px-4 py-2 bg-[#00205B] text-white rounded-md hover:bg-[#00307A] transition-colors ${
                  !formData.bus ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Continue to Select Seat
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#00205B] mb-4">
              Select Your Seat
            </h2>
            <SeatSelector
              bus={formData.bus}
              selectedSeat={formData.seat}
              onSeatSelect={handleSeatSelect}
            />
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="px-4 py-2 border border-[#00205B] text-[#00205B] rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.seat}
                className={`px-4 py-2 bg-[#00205B] text-white rounded-md hover:bg-[#00307A] transition-colors ${
                  !formData.seat ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Continue to Passenger Details
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#00205B] mb-4">
              Passenger Details
            </h2>
            <PassengerForm
              passengerDetails={formData.passengerDetails}
              onChange={handlePassengerChange}
            />
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="px-4 py-2 border border-[#00205B] text-[#00205B] rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-[#00205B] text-white rounded-md hover:bg-[#00307A] transition-colors"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-[#00205B] mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your booking has been confirmed. A confirmation email has been
              sent to {formData.passengerDetails.email}.
            </p>
            <BookingSummary booking={formData} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#00205B] mb-4">
          Book Your Trip
        </h1>

        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center w-full">
            <div
              className={`flex flex-col items-center ${
                currentStep >= 1 ? "text-[#00205B]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                  currentStep >= 1 ? "bg-[#00205B] text-white" : "bg-gray-200"
                }`}
              >
                <MapPin size={16} />
              </div>
              <span className="text-xs">Trip Details</span>
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                currentStep >= 2 ? "bg-[#00205B]" : "bg-gray-200"
              }`}
            ></div>

            <div
              className={`flex flex-col items-center ${
                currentStep >= 2 ? "text-[#00205B]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                  currentStep >= 2 ? "bg-[#00205B] text-white" : "bg-gray-200"
                }`}
              >
                <Calendar size={16} />
              </div>
              <span className="text-xs">Select Bus</span>
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                currentStep >= 3 ? "bg-[#00205B]" : "bg-gray-200"
              }`}
            ></div>

            <div
              className={`flex flex-col items-center ${
                currentStep >= 3 ? "text-[#00205B]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                  currentStep >= 3 ? "bg-[#00205B] text-white" : "bg-gray-200"
                }`}
              >
                <Users size={16} />
              </div>
              <span className="text-xs">Select Seat</span>
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                currentStep >= 4 ? "bg-[#00205B]" : "bg-gray-200"
              }`}
            ></div>

            <div
              className={`flex flex-col items-center ${
                currentStep >= 4 ? "text-[#00205B]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                  currentStep >= 4 ? "bg-[#00205B] text-white" : "bg-gray-200"
                }`}
              >
                <Users size={16} />
              </div>
              <span className="text-xs">Passenger</span>
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                currentStep >= 5 ? "bg-[#00205B]" : "bg-gray-200"
              }`}
            ></div>

            <div
              className={`flex flex-col items-center ${
                currentStep >= 5 ? "text-[#00205B]" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                  currentStep >= 5 ? "bg-[#00205B] text-white" : "bg-gray-200"
                }`}
              >
                <CreditCard size={16} />
              </div>
              <span className="text-xs">Payment</span>
            </div>
          </div>

          <div className="md:hidden">
            <span className="text-sm font-medium">Step {currentStep} of 6</span>
          </div>
        </div>
      </div>

      {renderStepContent()}
    </div>
  );
};

export default BookingPage;
