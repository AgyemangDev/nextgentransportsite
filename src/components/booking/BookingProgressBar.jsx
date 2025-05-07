import { MapPin, Calendar, Users, CreditCard, CheckCircle } from "lucide-react";

const BookingProgressBar = ({ currentStep }) => {
  const steps = [
    { icon: MapPin, label: "Trip Details" },
    { icon: Calendar, label: "Select Bus" },
    { icon: Users, label: "Select Seat" },
    { icon: Users, label: "Passenger" },
    { icon: CreditCard, label: "Payment" },
    { icon: CheckCircle, label: "Confirmation" }
  ];

  return (
    <>
      <div className="hidden md:flex items-center w-full">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <div key={index} className="flex items-center flex-1">
              <div
                className={`flex flex-col items-center ${
                  currentStep >= index + 1 ? "text-[#00205B]" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                    currentStep >= index + 1 ? "bg-[#00205B] text-white" : "bg-gray-200"
                  }`}
                >
                  <StepIcon size={16} />
                </div>
                <span className="text-xs">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    currentStep > index + 1 ? "bg-[#00205B]" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="md:hidden">
        <span className="text-sm font-medium">Step {currentStep} of {steps.length}</span>
      </div>
    </>
  );
};

export default BookingProgressBar;