import HeroSection from '../components/HeroSection';
import PricingSection from '../components/PricingSection';
import CourseModules from '../components/CourseModules';
import TestimonialsSection from '../components/TestimonialsSection';
import StickyBuyButton from '../components/StickyBuyButton';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-ai-navy">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Course Modules */}
      <CourseModules />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Sticky Buy Button */}
      <StickyBuyButton />
    </div>
  );
};

export default Index;