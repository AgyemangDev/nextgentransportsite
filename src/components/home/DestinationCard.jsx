import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const DestinationCard = ({ name, image, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={`${name} destination`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#00205B]">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{price}</p>
        <Link
          to="/booking"
          state={{ to: name }}
          className="inline-flex items-center text-sm font-medium text-[#00205B] hover:text-[#00307A]"
        >
          Book Now
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
