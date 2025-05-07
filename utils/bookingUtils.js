// Update form data with location state
export const updateFormData = (locationState, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      from: locationState.from || prev.from,
      to: locationState.to || prev.to,
      date: locationState.date || prev.date,
    }));
  };
  
  // Handle general form field changes
  export const handleFormChange = (e, setFormData) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Handle passenger form field changes
  export const handlePassengerChange = (e, setFormData) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      passengerDetails: {
        ...prev.passengerDetails,
        [name]: value,
      },
    }));
  };
  
  // Handle bus selection
  export const handleBusSelect = (bus, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      bus, // the whole bus object
      seat: null, // reset seat when a new bus is selected
    }));
  };
  
  // Handle seat selection
  export const handleSeatSelect = (seat, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      seat,
    }));
  };
  
  // Handle payment method selection
  export const handlePaymentMethodChange = (method, setFormData) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: method,
    }));
  };
  
  // Process booking submission (stub for API call)
  export const submitBooking = async (bookingData) => {
    // In a real app, this would be an API call to a backend service
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock successful booking
        resolve({
          success: true,
          bookingId: `BK${Math.floor(Math.random() * 10000)}`,
          ...bookingData
        });
      }, 1500);
    });
  };