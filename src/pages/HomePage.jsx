import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import DestinationGrid from "../components/home/DestinationGrid";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import { popularDestinations } from "../assets/data/popularDestination";
import EmailSection from "../components/home/EmailSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DestinationGrid destinations={popularDestinations} />
      <TestimonialsSection />
      <CTASection />
      <EmailSection />
    </div>
  );
};

export default HomePage;
