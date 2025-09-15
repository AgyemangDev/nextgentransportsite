import { FileText, Shield, Clock, AlertTriangle } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#00205B] mb-4">
          Terms and Conditions
        </h1>
        <p className="text-gray-600">Last updated: May 1, 2023</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex items-center mb-4">
          <FileText size={24} className="text-[#00205B] mr-3" />
          <h2 className="text-xl font-bold">Introduction</h2>
        </div>

        <p className="text-gray-700 mb-4">
          Welcome to NextGen Transport Services. These terms and conditions outline the rules
          and regulations for the use of our services.
        </p>

        <p className="text-gray-700 mb-4">
          By accessing this website and using our services, we assume you accept
          these terms and conditions in full. Do not continue to use
          NextGen Transport Services's services if you do not accept all of the terms and
          conditions stated on this page.
        </p>

        <p className="text-gray-700">
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and any or all Agreements:
          "Client", "You" and "Your" refers to you, the person accessing this
          website and accepting the Company's terms and conditions. "The
          Company", "Ourselves", "We", "Our" and "Us", refers to NextGen Transport Services.
          "Party", "Parties", or "Us", refers to both the Client and ourselves,
          or either the Client or ourselves.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex items-center mb-4">
          <Shield size={24} className="text-[#00205B] mr-3" />
          <h2 className="text-xl font-bold">Booking and Ticketing</h2>
        </div>

        <h3 className="font-semibold text-lg mb-2">2.1 Booking Confirmation</h3>
        <p className="text-gray-700 mb-4">
          A booking is confirmed only when you receive a booking confirmation
          email or SMS from NextGen Transport Services. The booking confirmation will include
          details such as the departure date, time, seat number, and pickup
          location.
        </p>

        <h3 className="font-semibold text-lg mb-2">2.2 Ticket Validity</h3>
        <p className="text-gray-700 mb-4">
          Tickets are valid only for the date, time, and route specified on the
          ticket. Tickets are non-transferable and must be presented at the time
          of boarding along with a valid identification document.
        </p>

        <h3 className="font-semibold text-lg mb-2">2.3 Fare Changes</h3>
        <p className="text-gray-700 mb-4">
          NextGen Transport Services reserves the right to change fares without prior notice.
          However, changes will not affect confirmed bookings for which payment
          has already been made.
        </p>

        <h3 className="font-semibold text-lg mb-2">2.4 Special Fares</h3>
        <p className="text-gray-700">
          Special fares may be available for children, students, and senior
          citizens. Eligibility criteria and documentation requirements for
          special fares will be specified at the time of booking.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex items-center mb-4">
          <Clock size={24} className="text-[#00205B] mr-3" />
          <h2 className="text-xl font-bold">Cancellations and Refunds</h2>
        </div>

        <h3 className="font-semibold text-lg mb-2">
          3.1 Cancellation by Customer
        </h3>
        <p className="text-gray-700 mb-4">
          Customers may cancel their booking subject to the following
          conditions:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>
            Cancellations made more than 48 hours before departure: Full refund
            minus a 5% service charge.
          </li>
          <li>
            Cancellations made between 24-48 hours before departure: 75% refund.
          </li>
          <li>
            Cancellations made between 12-24 hours before departure: 50% refund.
          </li>
          <li>
            Cancellations made less than 12 hours before departure: No refund.
          </li>
        </ul>

        <h3 className="font-semibold text-lg mb-2">
          3.2 Cancellation by NextGen Transport Services
        </h3>
        <p className="text-gray-700 mb-4">
          In the event that NextGen Transport Services cancels a service, customers will be
          offered either:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>A full refund of the ticket price; or</li>
          <li>
            Rebooking on the next available service at no additional cost; or
          </li>
          <li>A credit voucher valid for future travel.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2">3.3 Refund Processing</h3>
        <p className="text-gray-700">
          Refunds will be processed within 7-14 business days and will be made
          to the original payment method used for the booking.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex items-center mb-4">
          <AlertTriangle size={24} className="text-[#00205B] mr-3" />
          <h2 className="text-xl font-bold">Luggage and Personal Belongings</h2>
        </div>

        <h3 className="font-semibold text-lg mb-2">4.1 Luggage Allowance</h3>
        <p className="text-gray-700 mb-4">
          Each passenger is entitled to carry one piece of luggage not exceeding
          20kg and one piece of hand luggage not exceeding 5kg. Additional
          luggage may be carried subject to space availability and payment of
          applicable charges.
        </p>

        <h3 className="font-semibold text-lg mb-2">4.2 Prohibited Items</h3>
        <p className="text-gray-700 mb-4">
          The following items are prohibited from being carried on NextGen Transport Services
          buses:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>
            Dangerous goods, including flammable, explosive, or corrosive
            materials
          </li>
          <li>Illegal substances</li>
          <li>Firearms, weapons, or ammunition</li>
          <li>Live animals (except service animals)</li>
          <li>Items with strong or offensive odors</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2">
          4.3 Liability for Loss or Damage
        </h3>
        <p className="text-gray-700">
          NextGen Transport Services's liability for loss or damage to luggage is limited to
          GHC 500 per passenger. Passengers are advised not to carry valuable
          items, cash, or important documents in their checked luggage.
          NextGen Transport Services is not liable for the loss of or damage to hand luggage
          that remains in the passenger's custody.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Shield size={24} className="text-[#00205B] mr-3" />
          <h2 className="text-xl font-bold">General Provisions</h2>
        </div>

        <h3 className="font-semibold text-lg mb-2">5.1 Passenger Conduct</h3>
        <p className="text-gray-700 mb-4">
          Passengers are expected to conduct themselves in an orderly manner and
          to comply with the instructions of NextGen Transport Services staff. NextGen Transport Services
          reserves the right to refuse carriage to any passenger who is
          intoxicated, abusive, or whose conduct poses a risk to the safety or
          comfort of other passengers.
        </p>

        <h3 className="font-semibold text-lg mb-2">
          5.2 Changes to Terms and Conditions
        </h3>
        <p className="text-gray-700 mb-4">
          NextGen Transport Services reserves the right to modify these terms and conditions at
          any time. Changes will be effective immediately upon posting on the
          website. Continued use of NextGen Transport Services's services after any such
          changes constitutes acceptance of the new terms and conditions.
        </p>

        <h3 className="font-semibold text-lg mb-2">5.3 Governing Law</h3>
        <p className="text-gray-700 mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws of Ghana, and any disputes relating to these terms and
          conditions will be subject to the exclusive jurisdiction of the courts
          of Ghana.
        </p>

        <h3 className="font-semibold text-lg mb-2">5.4 Contact Information</h3>
        <p className="text-gray-700">
          For any questions or concerns regarding these terms and conditions,
          please contact us at:
        </p>
        <address className="not-italic text-gray-700 mt-2">
          NextGen Transport Services
          <br />
          KNUST Campus
          <br />
          Kumasi, Ghana
          <br />
          nextgentransportservice@gmail.com
          <br />
          Phone: +233 55 937 4829
        </address>
      </div>
    </div>
  );
};

export default TermsPage;
