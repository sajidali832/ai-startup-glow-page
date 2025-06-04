import { useState, useEffect } from 'react';
import InterstitialAd from './InterstitialAd';

const StickyBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showInterstitialAd, setShowInterstitialAd] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleAccessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInterstitialAd(true);
  };

  const handleAdComplete = () => {
    localStorage.setItem('courseAccessed', 'true');
    localStorage.setItem('courseAccessTime', Date.now().toString());
    
    // Redirect to the course
    window.open('https://drive.google.com/file/d/1jWn0sOP5bREXUH3G8lpyJhVEvn2D573V/view?usp=drivesdk', '_blank');
    setShowInterstitialAd(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up px-4 w-full max-w-sm md:max-w-none md:w-auto">
        <button
          onClick={handleAccessClick}
          className="bg-gradient-to-r from-ai-green to-ai-cyan text-white font-bold px-4 md:px-8 py-3 md:py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow flex items-center justify-center space-x-2 md:space-x-3 w-full md:w-auto"
        >
          <span className="text-sm md:text-lg">🎉 Get FREE Access</span>
          <div className="bg-ai-orange text-ai-navy px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
            FREE
          </div>
        </button>
      </div>
      
      {/* Interstitial Ad */}
      <InterstitialAd 
        isOpen={showInterstitialAd}
        onClose={() => setShowInterstitialAd(false)}
        onComplete={handleAdComplete}
      />
    </>
  );
};

export default StickyBuyButton;