import { MapPin, Clock, Shield, Star } from "lucide-react";
import FeatureCard from "./FeatureCard";
import transportImage from "../../assets/transport.jpg"; // adjust path as needed

const features = [
  {
    icon: MapPin,
    title: "Campus-to-City Coverage",
    description:
      "We connect campuses with major towns and student hotspots nationwide.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description:
      "Timely departures and arrivals tailored to student schedules and lectures.",
  },
  {
    icon: Shield,
    title: "Student Safety First",
    description:
      "Trained drivers and secure routes ensure peace of mind for students and guardians.",
  },
  {
    icon: Star,
    title: "Student-Friendly Comfort",
    description:
      "Spacious seats, study-friendly lighting, and a relaxing ride—just for students.",
  },
];

const FeaturesSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Image */}
      <div className="relative w-full h-full">
        <img
          src={transportImage}
          alt="NextGen Transport"
          className="w-full rounded-xl shadow-lg object-cover max-h-[500px]"
        />
      </div>

      {/* Right: Features */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#00205B] mb-8">
          Why Choose NextGen Transport?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
