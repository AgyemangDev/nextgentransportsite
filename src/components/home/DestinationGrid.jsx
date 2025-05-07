import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DestinationCard from "./DestinationCard";

const DestinationGrid = ({ destinations }) => (
  <section className="py-12 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#00205B] mb-8">
        Popular Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} {...destination} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/booking"
          className="inline-flex items-center px-6 py-3 bg-[#00205B] text-white rounded-md hover:bg-[#00307A] transition-colors"
        >
          View All Destinations
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  </section>
);

export default DestinationGrid;
