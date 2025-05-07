import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import DestinationGrid from "../components/home/DestinationGrid";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import { popularDestinations } from "../assets/data/popularDestination";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DestinationGrid destinations={popularDestinations} />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
