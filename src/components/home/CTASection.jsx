import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-12 px-4 bg-[#00205B] text-white">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Book Your Next Trip?
      </h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Experience comfortable, safe, and reliable transportation with NextGen Transport. Book your ticket now and enjoy a hassle-free journey.
      </p>
      <Link
        to="/booking"
        className="inline-flex items-center px-6 py-3 bg-white text-[#00205B] rounded-md hover:bg-gray-100 transition-colors font-medium"
      >
        Book Your Ride Now
        <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  </section>
);

export default CTASection;
