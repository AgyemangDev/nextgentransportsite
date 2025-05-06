import { Link } from "react-router-dom";
import { MapPin, Clock, Shield, Star, ArrowRight } from "lucide-react";
import HeroSection from "../components/home/HeroSection";
import DestinationCard from "../components/home/DestinationCard";
import kumasiImage from "../assets/kumasi.jpg";
import AccraImage from "../assets/Accra.webp";
import TakoradiImage from "../assets/Takoradi.jpg";
import TamaleImage from "../assets/Tamale.jpg";

const HomePage = () => {
  const popularDestinations = [
    {
      id: 1,
      name: "Accra",
      image: AccraImage,
      price: "From GHC 50",
    },
    {
      id: 2,
      name: "Kumasi",
      image: kumasiImage,
      price: "From GHC 80",
    },
    {
      id: 3,
      name: "Takoradi",
      image: TakoradiImage,
      price: "From GHC 100",
    },
    {
      id: 4,
      name: "Tamale",
      image: TamaleImage,
      price: "From GHC 150",
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* Features Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#00205B] mb-8">
            Why Choose NextGen Transport?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00205B] text-white mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Nationwide Coverage
              </h3>
              <p className="text-gray-600 text-sm">
                We connect all major cities and towns across the country.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00205B] text-white mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Punctual Service</h3>
              <p className="text-gray-600 text-sm">
                Our buses depart and arrive on schedule, respecting your time.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00205B] text-white mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">
                Your safety is our priority with well-maintained vehicles and
                professional drivers.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00205B] text-white mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Comfort</h3>
              <p className="text-gray-600 text-sm">
                Enjoy comfortable seats and amenities for a pleasant journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#00205B] mb-8">
            Popular Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                name={destination.name}
                image={destination.image}
                price={destination.price}
              />
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

      {/* Testimonials */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#00205B] mb-8">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The online booking system is so convenient. I was able to
                select my seat and complete my booking in minutes!"
              </p>
              <div className="font-medium">- Sarah Johnson</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The bus was clean and comfortable. The driver was professional
                and we arrived on time. Highly recommended!"
              </p>
              <div className="font-medium">- Michael Osei</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "I travel weekly for business and NextGen Transport has become
                my go-to transportation service. Reliable and efficient!"
              </p>
              <div className="font-medium">- Abena Mensah</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-[#00205B] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Book Your Next Trip?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Experience comfortable, safe, and reliable transportation with
            NextGen Transport. Book your ticket now and enjoy a hassle-free
            journey.
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
    </div>
  );
};

export default HomePage;
