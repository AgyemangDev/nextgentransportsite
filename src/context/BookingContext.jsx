"use client";

import { createContext, useContext, useReducer, useEffect } from "react";

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
    idType: "National ID",
    idNumber: "",
  },
  paymentMethod: "mobile_money",
  tickets: [],
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
        tickets: state.tickets, // Preserve tickets when resetting booking
      };
    case "ADD_TICKET":
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    case "DELETE_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket.id !== action.payload),
      };
    default:
      return state;
  }
};

// Provider component
export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  // Load tickets from localStorage on initialization
  useEffect(() => {
    const savedTickets = localStorage.getItem("transportgo-tickets");
    if (savedTickets) {
      const tickets = JSON.parse(savedTickets);
      dispatch({ type: "UPDATE_BOOKING", payload: { tickets } });
    }
  }, []);

  // Save tickets to localStorage when they change
  useEffect(() => {
    localStorage.setItem("transportgo-tickets", JSON.stringify(state.tickets));
  }, [state.tickets]);

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
