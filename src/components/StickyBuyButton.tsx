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
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 max-w-xs">
        <button
          onClick={handleAccessClick}
          className="bg-gradient-to-r from-ai-green to-ai-cyan text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 w-full"
        >
          <span className="text-sm">🎉 FREE Access</span>
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