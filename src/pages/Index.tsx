import HeroSection from '../components/HeroSection';
import PricingSection from '../components/PricingSection';
import CourseModules from '../components/CourseModules';

import StickyBuyButton from '../components/StickyBuyButton';
import Footer from '../components/Footer';
import SuccessMessage from '../components/SuccessMessage';

const Index = () => {
  return (
    <div className="min-h-screen bg-ai-navy">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Course Modules */}
      <CourseModules />
      
      
      {/* Footer */}
      <Footer />
      
      {/* Sticky Buy Button */}
      <StickyBuyButton />
      
      {/* Success Message */}
      <SuccessMessage />
    </div>
  );
};

export default Index;