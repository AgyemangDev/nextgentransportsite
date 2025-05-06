"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#00205B] mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Have questions or need assistance? We're here to help. Reach out to
          our team through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00205B] text-white mb-4">
            <Phone size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600 mb-2">
            Our customer service team is available 24/7
          </p>
          <a
            href="tel:+233123456789"
            className="text-[#00205B] font-medium hover:underline"
          >
            +233 123 456 789
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00205B] text-white mb-4">
            <Mail size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600 mb-2">
            Send us an email and we'll respond as soon as possible
          </p>
          <a
            href="mailto:info@transportgo.com"
            className="text-[#00205B] font-medium hover:underline"
          >
            info@transportgo.com
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00205B] text-white mb-4">
            <MapPin size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600 mb-2">Our main office is located at</p>
          <address className="not-italic text-[#00205B] font-medium">
            123 Transportation Road
            <br />
            Accra, Ghana
          </address>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-[#00205B] mb-6 flex items-center">
            <MessageSquare size={20} className="mr-2" />
            Send Us a Message
          </h2>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
              Thank you for your message! We'll get back to you as soon as
              possible.
            </div>
          ) : null}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00205B]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 bg-[#00205B] text-white rounded-md hover:bg-[#00307A] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00205B] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-[#00205B] mb-6">
            Our Locations
          </h2>

          <div className="aspect-w-16 aspect-h-9 mb-6">
            {/* In a real app, this would be a Google Map */}
            <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
              <MapPin size={32} className="text-gray-400" />
              <span className="ml-2 text-gray-500">
                Map would be displayed here
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Main Office - Accra</h3>
              <address className="not-italic text-gray-600">
                123 Transportation Road
                <br />
                Accra, Ghana
                <br />
                <span className="block mt-1">
                  Opening Hours: 8:00 AM - 8:00 PM (Mon-Sat)
                </span>
              </address>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Kumasi Branch</h3>
              <address className="not-italic text-gray-600">
                456 Travel Street
                <br />
                Kumasi, Ghana
                <br />
                <span className="block mt-1">
                  Opening Hours: 8:00 AM - 8:00 PM (Mon-Sat)
                </span>
              </address>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Takoradi Branch</h3>
              <address className="not-italic text-gray-600">
                789 Journey Avenue
                <br />
                Takoradi, Ghana
                <br />
                <span className="block mt-1">
                  Opening Hours: 8:00 AM - 8:00 PM (Mon-Sat)
                </span>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-[#00205B] text-white p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <p>Find quick answers to common questions about our services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              How do I book a ticket?
            </h3>
            <p className="text-blue-100">
              You can book a ticket online through our website, by calling our
              customer service, or by visiting any of our offices.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              What is your refund policy?
            </h3>
            <p className="text-blue-100">
              Tickets can be refunded up to 24 hours before departure with a 10%
              service charge. No refunds are available within 24 hours of
              departure.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              How much luggage can I bring?
            </h3>
            <p className="text-blue-100">
              Each passenger is allowed one large suitcase and one carry-on bag.
              Additional luggage may incur extra charges.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Do you offer group discounts?
            </h3>
            <p className="text-blue-100">
              Yes, we offer discounts for groups of 10 or more passengers
              traveling together. Please contact our customer service for
              details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
