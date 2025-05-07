"use client";

import { createContext, useContext, useReducer } from "react";

// Create context
const BookingContext = createContext();

// Initial state
const initialState = {
  from: "",
  to: "",
  date: "",
  bus: null,
  seat: null,
  passengerDetails: {
    name: "",
    email: "",
    phone: "",
  },
};

// Reducer function
const bookingReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BOOKING":
      return {
        ...state,
        ...action.payload,
      };
    case "RESET_BOOKING":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Provider component
export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use the booking context
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
