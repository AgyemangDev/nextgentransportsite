"use client";

import { useState, useRef } from "react";
import {
  Calendar,
  User,
  Download,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import html2canvas from "html2canvas";

const TicketCard = ({ ticket, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const ticketRef = useRef(null);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDownload = async () => {
    if (!ticketRef.current || isDownloading) return;

    try {
      setIsDownloading(true);

      // Create a simplified version of the ticket for download
      // This avoids issues with modern CSS color functions like oklch
      const ticketContainer = document.createElement("div");
      ticketContainer.style.width = "350px";
      ticketContainer.style.backgroundColor = "#ffffff";
      ticketContainer.style.borderRadius = "8px";
      ticketContainer.style.overflow = "hidden";
      ticketContainer.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
      ticketContainer.style.fontFamily = "Arial, sans-serif";
      ticketContainer.style.borderLeft = "4px solid #22c55e"; // Green for upcoming tickets

      if (new Date(ticket.date) < new Date()) {
        ticketContainer.style.borderLeft = "4px solid #9ca3af"; // Gray for past tickets
      }

      // Ticket header
      const header = document.createElement("div");
      header.style.backgroundColor = "#00205B";
      header.style.color = "white";
      header.style.padding = "16px";
      header.style.display = "flex";
      header.style.justifyContent = "space-between";

      const headerLeft = document.createElement("div");
      headerLeft.innerHTML = `
        <div style="font-size: 12px; opacity: 0.8;">Ticket ID: ${ticket.id.substring(
          0,
          8
        )}</div>
        <div style="font-weight: bold;">${
          ticket.bus?.name || "NextGen Bus"
        }</div>
      `;

      const headerRight = document.createElement("div");
      headerRight.style.textAlign = "right";
      headerRight.innerHTML = `
        <div style="font-size: 12px; opacity: 0.8;">${
          new Date(ticket.date) >= new Date() ? "Upcoming" : "Past"
        }</div>
        <div style="font-weight: bold;">Seat ${ticket.seat?.number}</div>
      `;

      header.appendChild(headerLeft);
      header.appendChild(headerRight);
      ticketContainer.appendChild(header);

      // Ticket body
      const body = document.createElement("div");
      body.style.padding = "16px";

      // Route
      const route = document.createElement("div");
      route.style.display = "flex";
      route.style.justifyContent = "space-between";
      route.style.alignItems = "center";
      route.style.marginBottom = "16px";
      route.innerHTML = `
        <div style="font-size: 18px; font-weight: bold;">${ticket.from}</div>
        <div style="font-size: 12px; color: #6b7280; padding: 0 8px;">to</div>
        <div style="font-size: 18px; font-weight: bold;">${ticket.to}</div>
      `;
      body.appendChild(route);

      // Date
      const formattedDate = new Date(ticket.date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      const dateInfo = document.createElement("div");
      dateInfo.style.marginBottom = "12px";
      dateInfo.innerHTML = `
        <div style="font-size: 14px;">${formattedDate}</div>
        <div style="font-size: 12px; color: #6b7280;">${ticket.bus?.departureTime} - ${ticket.bus?.arrivalTime}</div>
      `;
      body.appendChild(dateInfo);

      // Passenger
      const passenger = document.createElement("div");
      passenger.style.marginBottom = "12px";
      passenger.innerHTML = `
        <div style="font-size: 14px;">${ticket.passengerDetails.name}</div>
        <div style="font-size: 12px; color: #6b7280;">${ticket.passengerDetails.phone}</div>
        <div style="font-size: 12px; color: #6b7280;">${ticket.passengerDetails.email}</div>
      `;
      body.appendChild(passenger);

      // Price
      const price = document.createElement("div");
      price.style.marginTop = "16px";
      price.innerHTML = `
        <div style="font-size: 12px; color: #6b7280;">Price</div>
        <div style="font-weight: bold; color: #00205B;">GHC ${ticket.bus?.price}.00</div>
      `;
      body.appendChild(price);

      // Important info
      const info = document.createElement("div");
      info.style.marginTop = "16px";
      info.style.backgroundColor = "#f9fafb";
      info.style.padding = "12px";
      info.style.borderRadius = "6px";
      info.innerHTML = `
        <div style="font-size: 12px; color: #6b7280; margin-bottom: 4px;">Important Information</div>
        <div style="font-size: 14px;">Please arrive at least 30 minutes before departure. Present this ticket along with your ID at the boarding gate.</div>
      `;
      body.appendChild(info);

      ticketContainer.appendChild(body);

      // Footer with logo
      const footer = document.createElement("div");
      footer.style.backgroundColor = "#f9fafb";
      footer.style.padding = "12px";
      footer.style.borderTop = "1px solid #e5e7eb";
      footer.style.textAlign = "center";
      footer.innerHTML = `
        <div style="font-weight: bold; color: #00205B;">NextGen</div>
        <div style="font-size: 12px; color: #6b7280;">Your trusted transportation partner</div>
      `;
      ticketContainer.appendChild(footer);

      // Append to document temporarily (off-screen)
      ticketContainer.style.position = "absolute";
      ticketContainer.style.left = "-9999px";
      document.body.appendChild(ticketContainer);

      // Capture with html2canvas
      const canvas = await html2canvas(ticketContainer, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
      });

      // Remove the temporary element
      document.body.removeChild(ticketContainer);

      // Create a download link
      const image = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      const fileName = `NextGen-Ticket-${ticket.id.substring(0, 8)}.png`;

      downloadLink.href = image;
      downloadLink.download = fileName;
      downloadLink.click();
    } catch (error) {
      console.error("Error generating ticket image:", error);
      alert("Failed to download ticket. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Check if the ticket is for a future date
  const isUpcoming = new Date(ticket.date) >= new Date();

  // Format the date
  const formattedDate = new Date(ticket.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      id={`ticket-${ticket.id}`}
      ref={ticketRef}
      className={`bg-white rounded-lg shadow-sm overflow-hidden border-l-4 ${
        isUpcoming ? "border-green-500" : "border-gray-400"
      }`}
    >
      {/* Ticket header */}
      <div className="bg-[#00205B] text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div className="text-xs opacity-80">
              Ticket ID: {ticket.id.substring(0, 8)}
            </div>
            <div className="font-bold">{ticket.bus?.name || "NextGen Bus"}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs opacity-80">
            {isUpcoming ? "Upcoming" : "Past"}
          </div>
          <div className="font-bold">Seat {ticket.seat?.number}</div>
        </div>
      </div>

      {/* Ticket body */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-bold">{ticket.from}</div>
          <div className="text-xs text-gray-500 px-2">to</div>
          <div className="text-lg font-bold">{ticket.to}</div>
        </div>

        <div className="flex items-center mb-3">
          <Calendar size={16} className="text-[#00205B] mr-2" />
          <div>
            <div className="text-sm">{formattedDate}</div>
            <div className="text-xs text-gray-500">
              {ticket.bus?.departureTime} - {ticket.bus?.arrivalTime}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <User size={16} className="text-[#00205B] mr-2" />
          <div className="text-sm">{ticket.passengerDetails.name}</div>
        </div>

        {/* Expanded content */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-gray-500">Phone</div>
                <div>{ticket.passengerDetails.phone}</div>
              </div>
              <div>
                <div className="text-gray-500">Email</div>
                <div className="truncate">{ticket.passengerDetails.email}</div>
              </div>
              <div>
                <div className="text-gray-500">ID Type</div>
                <div>{ticket.passengerDetails.idType}</div>
              </div>
              <div>
                <div className="text-gray-500">ID Number</div>
                <div>{ticket.passengerDetails.idNumber}</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-gray-500 text-sm">Price</div>
              <div className="font-bold text-[#00205B]">
                GHC {ticket.bus?.price}.00
              </div>
            </div>

            <div className="mt-4 bg-gray-50 p-3 rounded-md">
              <div className="text-xs text-gray-500 mb-1">
                Important Information
              </div>
              <div className="text-sm">
                Please arrive at least 30 minutes before departure. Present this
                ticket along with your ID at the boarding gate.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Ticket footer */}
      <div className="bg-gray-50 p-3 flex justify-between items-center">
        <button
          onClick={toggleExpand}
          className="text-gray-600 text-sm flex items-center hover:text-[#00205B]"
        >
          {expanded ? (
            <>
              <ChevronUp size={16} className="mr-1" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown size={16} className="mr-1" /> Show Details
            </>
          )}
        </button>
        <div className="flex space-x-2">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`p-2 text-[#00205B] hover:bg-blue-50 rounded-full ${
              isDownloading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            title="Download Ticket"
          >
            {isDownloading ? (
              <div className="h-[18px] w-[18px] rounded-full border-2 border-t-transparent border-[#00205B] animate-spin"></div>
            ) : (
              <Download size={18} />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-2 text-red-500 hover:bg-red-50 rounded-full"
            title="Delete Ticket"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
