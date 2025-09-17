import Navbar from "../organisms/Navbar";
import HeroSection from "../organisms/HeroSection";
import FeatureSection from "../organisms/FeatureSection";
import HashtagSection from "../organisms/HashtagSection";
import TestimonialSection from "../organisms/TestimonialSection";
import CTASection from "../organisms/CTASection";
import FooterWithContact from "../organisms/FooterWithContact";

export default function LandingTemplate() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 min-h-screen">
        <Navbar />
        <HeroSection />
      </div>

      {/* Sections */}
      <FeatureSection />
      <HashtagSection />
      <TestimonialSection />
      <CTASection />
      <FooterWithContact />
    </div>
  );
}
