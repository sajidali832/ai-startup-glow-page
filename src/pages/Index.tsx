import HeroSection from '../components/HeroSection';
import PricingSection from '../components/PricingSection';
import CourseModules from '../components/CourseModules';
import SocialBarAd from '../components/SocialBarAd';
import ContainerAd from '../components/ContainerAd';
import StickyBuyButton from '../components/StickyBuyButton';
import Footer from '../components/Footer';
import SuccessMessage from '../components/SuccessMessage';

const Index = () => {
  return (
    <div className="min-h-screen bg-ai-navy">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Social Bar Ad */}
      <SocialBarAd className="py-4" />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Course Modules */}
      <CourseModules />
      
      {/* Container Ad */}
      <ContainerAd className="py-4" />
      
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