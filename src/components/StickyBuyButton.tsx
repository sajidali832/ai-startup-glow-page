import { useState, useEffect } from 'react';

const StickyBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
      <button className="bg-gradient-to-r from-ai-green to-ai-cyan text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow flex items-center space-x-3">
        <span className="text-lg">🚀 Buy Now - PKR 539</span>
        <div className="bg-ai-orange text-ai-navy px-3 py-1 rounded-full text-sm font-bold">
          40% OFF
        </div>
      </button>
    </div>
  );
};

export default StickyBuyButton;