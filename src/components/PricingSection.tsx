import { Check } from 'lucide-react';
import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import BannerAd from './BannerAd';
import InterstitialAd from './InterstitialAd';

const PricingSection = () => {
  const [showInterstitialAd, setShowInterstitialAd] = useState(false);
  const [adsViewed, setAdsViewed] = useState(0);
  const requiredAds = 3;

  const handleAccessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInterstitialAd(true);
  };

  const handleAdClose = () => {
    setShowInterstitialAd(false);
    const newAdsViewed = adsViewed + 1;
    setAdsViewed(newAdsViewed);
    
    if (newAdsViewed < requiredAds) {
      // Show next ad after a short delay
      setTimeout(() => {
        setShowInterstitialAd(true);
      }, 1000);
    }
  };

  const handleAdComplete = () => {
    localStorage.setItem('courseAccessed', 'true');
    localStorage.setItem('courseAccessTime', Date.now().toString());
    
    // Redirect to the course
    window.open('https://drive.google.com/file/d/1jWn0sOP5bREXUH3G8lpyJhVEvn2D573V/view?usp=drivesdk', '_blank');
    setShowInterstitialAd(false);
    setAdsViewed(0); // Reset for next time
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        
        {/* Countdown Timer */}
        <div className="mb-16 animate-fade-in-up">
          <CountdownTimer />
        </div>
        
        {/* Banner Ad */}
        <div className="mb-8 animate-fade-in-up">
          <BannerAd className="my-6" />
        </div>
        
        {/* Pricing Card */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-pink rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
          
          <div className="relative glass-effect rounded-3xl p-8 md:p-12 text-center">
            
            {/* Free Badge */}
            <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-ai-green to-ai-cyan text-white px-4 py-2 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-lg shadow-lg animate-bounce">
                🎉 100% FREE
              </div>
            </div>
            
            <div className="pt-8 space-y-8">
              {/* Course Title */}
              <h2 className="text-xl md:text-4xl font-heading font-bold text-white px-2">
                Build AI Startup Company in 2025
              </h2>
              
              {/* Free Pricing */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-xl md:text-3xl text-gray-400 line-through">PKR 899</span>
                  <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-ai-green to-ai-cyan bg-clip-text text-transparent">FREE</span>
                </div>
                <p className="text-ai-green font-semibold text-sm md:text-base px-2">🎉 Everything FREE for 3 Days! Share with others!</p>
              </div>
              
              {/* Features */}
              <div className="grid md:grid-cols-2 gap-3 md:gap-4 text-left max-w-2xl mx-auto px-2">
                {[
                  'Complete AI Startup Blueprint',
                  'Funding & Investment Strategies', 
                  'MVP Development Framework',
                  'Market Research Templates',
                  'Legal & Compliance Guide',
                  'Lifetime Access & Updates',
                  'Private Community Access',
                  '30-Day Money Back Guarantee'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 md:space-x-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-ai-green flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="space-y-4">
                <button
                  onClick={handleAccessClick}
                  className="block w-full bg-gradient-to-r from-ai-green to-ai-cyan text-white font-bold text-lg md:text-xl py-4 px-6 md:px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg animate-pulse-glow text-center"
                >
                  🎉 Get FREE Access Now - Download PDF!
                </button>
                
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
                  <span>🎉 100% Free</span>
                  <span>📱 Instant Access</span>
                  <span>📝 PDF Download</span>
                </div>
              </div>
              
              {/* Creator Information */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="text-center">
                  <p className="text-gray-300 text-sm px-4">
                    "Quality over money - We believe in empowering people with knowledge. 
                    This course is our gift to aspiring entrepreneurs."
                  </p>
                </div>
                
                <p className="text-ai-cyan font-semibold">Free for Everyone - Share with Others!</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <span>✅ Completely Free</span>
                  <span>✅ Instant Download</span>
                  <span>✅ No Registration Required</span>
                  <span>✅ Share with Friends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Banner Ad */}
        <div className="mt-12 animate-fade-in-up">
          <BannerAd className="my-6" />
        </div>
      </div>
      
      {/* Interstitial Ad */}
      <InterstitialAd 
        isOpen={showInterstitialAd}
        onClose={handleAdClose}
        onComplete={handleAdComplete}
        adsViewed={adsViewed}
        requiredAds={requiredAds}
      />
    </section>
  );
};

export default PricingSection;