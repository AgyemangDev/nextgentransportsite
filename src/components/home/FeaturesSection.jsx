import { MapPin, Clock, Shield, Star } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
    {
      icon: MapPin,
      title: "Campus-to-City Coverage",
      description: "We connect campuses with major towns and student hotspots nationwide.",
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "Timely departures and arrivals tailored to student schedules and lectures.",
    },
    {
      icon: Shield,
      title: "Student Safety First",
      description: "Trained drivers and secure routes ensure peace of mind for students and guardians.",
    },
    {
      icon: Star,
      title: "Student-Friendly Comfort",
      description: "Spacious seats, study-friendly lighting, and a relaxing ride—just for students.",
    },
  ];
  
const FeaturesSection = () => (
  <section className="py-12 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#00205B] mb-8">
        Why Choose NextGen Transport?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
