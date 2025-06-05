import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface InterstitialAdProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
  adsViewed: number;
  requiredAds: number;
}

const InterstitialAd = ({ isOpen, onClose, onComplete, adsViewed, requiredAds }: InterstitialAdProps) => {
  const [showCloseButton, setShowCloseButton] = useState(false);
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Show close button after 5 seconds
      const timer = setTimeout(() => {
        setShowCloseButton(true);
      }, 5000);

      // Load the ad script
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.innerHTML = `
        atOptions = {
          'key' : '221cb822c978e0f9b51f9b5e3334fc90',
          'format' : 'iframe',
          'height' : 300,
          'width' : 160,
          'params' : {}
        };
      `;

      const adScript = document.createElement('script');
      adScript.type = 'text/javascript';
      adScript.src = '//www.highperformanceformat.com/221cb822c978e0f9b51f9b5e3334fc90/invoke.js';

      if (adRef.current) {
        adRef.current.appendChild(configScript);
        adRef.current.appendChild(adScript);
      }

      return () => {
        clearTimeout(timer);
        if (adRef.current) {
          adRef.current.innerHTML = '';
        }
      };
    } else {
      setShowCloseButton(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    if (adsViewed + 1 >= requiredAds) {
      // User has viewed enough ads, give access
      onComplete();
    } else {
      // Close current ad but don't give access yet
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-2xl p-6 max-w-lg w-full">
        {showCloseButton && (
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
        )}
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Please wait for the ad to complete
          </h3>
          <p className="text-gray-600">
            Your free course access will be available after viewing {requiredAds} ads
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Ad {adsViewed + 1} of {requiredAds}
          </p>
        </div>

        <div className="flex justify-center items-center min-h-[300px]">
          <div ref={adRef} className="interstitial-ad-container"></div>
        </div>

        {showCloseButton && (
          <div className="text-center mt-4">
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-ai-green to-ai-cyan text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300"
            >
              {adsViewed + 1 >= requiredAds ? 'Continue to Free Course' : `Continue (${adsViewed + 1}/${requiredAds})`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterstitialAd;