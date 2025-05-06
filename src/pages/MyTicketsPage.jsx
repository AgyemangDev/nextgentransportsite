"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Ticket, Search, AlertCircle } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import TicketCard from "../components/tickets/TicketCard";

const MyTicketsPage = () => {
  const { state, dispatch } = useBooking();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // all, upcoming, past
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts to ensure html2canvas works properly
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDeleteTicket = (ticketId) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      dispatch({ type: "DELETE_TICKET", payload: ticketId });
    }
  };

  const handleBookNewTicket = () => {
    navigate("/booking");
  };

  // Filter tickets based on search term and filter type
  const filteredTickets = state.tickets.filter((ticket) => {
    const matchesSearch =
      ticket.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.passengerDetails.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    if (filter === "all") return matchesSearch;

    const ticketDate = new Date(ticket.date);
    const today = new Date();

    if (filter === "upcoming" && ticketDate >= today) return matchesSearch;
    if (filter === "past" && ticketDate < today) return matchesSearch;

    return false;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#00205B] mb-2">
          My Tickets
        </h1>
        <p className="text-gray-600">View and manage your booked tickets</p>
      </div>

      {state.tickets.length > 0 ? (
        <>
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search by destination or passenger name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1 rounded-md text-sm ${
                    filter === "all"
                      ? "bg-[#00205B] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("upcoming")}
                  className={`px-3 py-1 rounded-md text-sm ${
                    filter === "upcoming"
                      ? "bg-[#00205B] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setFilter("past")}
                  className={`px-3 py-1 rounded-md text-sm ${
                    filter === "past"
                      ? "bg-[#00205B] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Past
                </button>
              </div>
            </div>
          </div>

          {filteredTickets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoaded &&
                filteredTickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onDelete={() => handleDeleteTicket(ticket.id)}
                  />
                ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Search size={48} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No tickets found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any tickets matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilter("all");
                }}
                className="inline-flex items-center px-4 py-2 border border-[#00205B] text-[#00205B] rounded-md hover:bg-blue-50"
              >
                Clear filters
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
            <Ticket size={64} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            No tickets yet
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            You haven't booked any tickets yet. Start your journey by booking a
            ticket now.
          </p>
          <button
            onClick={handleBookNewTicket}
            className="inline-flex items-center px-6 py-3 bg-[#00205B] text-white rounded-md hover:bg-[#00307A] transition-colors"
          >
            Book a Ticket
          </button>
        </div>
      )}

      {state.tickets.length > 0 && (
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
          <AlertCircle size={20} className="text-[#00205B] mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium text-[#00205B]">
              Important Information
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Please arrive at least 30 minutes before departure. Make sure to
              have your ticket and a valid ID with you when boarding.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTicketsPage;
