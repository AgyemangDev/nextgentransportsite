import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Calendar, Users, CreditCard, CheckCircle } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import TripDetailsStep from "../components/booking/TripDetails";
import BusSelector from "../components/booking/BusSelector";
import SeatSelector from "../components/booking/SeatSelector";
import PassengerForm from "../components/booking/PassengerForm";
import PaymentStep from "../components/booking/PaymentStep";
import BookingConfirmation from "../components/booking/BookingConfirmation";
import BookingProgressBar from "../components/booking/BookingProgressBar";
import { BusProvider } from "../context/BusContext";
import { 
  updateFormData, 
  handleFormChange, 
  handlePassengerChange, 
  handleBusSelect, 
  handleSeatSelect, 
  handlePaymentMethodChange 
} from "../../utils/bookingUtils";

const BookingPage = () => {
  const location = useLocation();
  const { dispatch } = useBooking();
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
    paymentMethod: null,
  });

  // Update booking context when form data changes
  useEffect(() => {
    dispatch({ type: "UPDATE_BOOKING", payload: formData });
  }, [formData, dispatch]);

  // Initialize form with location state if available
  useEffect(() => {
    if (location.state) {
      updateFormData(location.state, setFormData);
    }
  }, [location.state]);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Map step number to component
  const stepComponents = {
    1: <TripDetailsStep
         formData={formData}
         handleChange={(e) => handleFormChange(e, setFormData)}
         nextStep={nextStep}
       />,
    2: <BusProvider from={formData.from} to={formData.to}>
    <BusSelector
      from={formData.from}
      to={formData.to}
      selectedBus={formData.bus}
      onBusSelect={(bus) => handleBusSelect(bus, setFormData)}
      nextStep={nextStep}
      prevStep={prevStep}
    />
  </BusProvider>,
3: <SeatSelector
bus={formData.bus}
selectedSeat={formData.seat}
onSeatSelect={(seat) => handleSeatSelect(seat, setFormData)}
nextStep={nextStep}
prevStep={prevStep}
/>,
    4: <PassengerForm
         passengerDetails={formData.passengerDetails}
         onChange={(e) => handlePassengerChange(e, setFormData)}
         nextStep={nextStep}
         prevStep={prevStep}
       />,
    5: <PaymentStep
         booking={formData}
         onPaymentMethodChange={(method) => handlePaymentMethodChange(method, setFormData)}
         nextStep={nextStep}
         prevStep={prevStep}
       />,
    6: <BookingConfirmation
         booking={formData}
       />
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#00205B] mb-4">
          Book Your Trip
        </h1>
        <BookingProgressBar currentStep={currentStep} />
      </div>

      {stepComponents[currentStep]}
    </div>
  );
};

export default BookingPage;