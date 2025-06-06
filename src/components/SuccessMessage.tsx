import { useState, useEffect } from 'react';
import { X, Share2 } from 'lucide-react';

const SuccessMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAlreadyAccessed, setShowAlreadyAccessed] = useState(false);

  useEffect(() => {
    const checkAccess = () => {
      const hasAccessed = localStorage.getItem('courseAccessed');
      const accessTime = localStorage.getItem('courseAccessTime');
      
      if (hasAccessed && accessTime) {
        // If user accessed before, show "already accessed" message
        const timeDiff = Date.now() - parseInt(accessTime);
        if (timeDiff > 5000) { // Show if accessed more than 5 seconds ago
          setShowAlreadyAccessed(true);
        } else {
          setIsVisible(true);
        }
      }
    };

    // Check when component mounts
    checkAccess();

    // Check when user returns to the page (focus event)
    const handleFocus = () => {
      checkAccess();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.removeItem('courseAccessed');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Free AI Startup Course!',
        text: '🎉 Get this amazing AI Startup course for FREE! Limited time offer for 3 days only.',
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(
        `🎉 Get this amazing AI Startup course for FREE! Limited time offer for 3 days only. ${window.location.href}`
      );
      alert('Link copied to clipboard! Share with your friends.');
    }
  };

  if (showAlreadyAccessed) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="relative bg-gradient-to-br from-ai-blue to-ai-purple p-1 rounded-3xl max-w-md w-full animate-scale-in">
          <div className="bg-ai-navy rounded-2xl p-6 text-center space-y-6">
            <button 
              onClick={() => setShowAlreadyAccessed(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="text-6xl">✅</div>
              <h2 className="text-2xl font-bold text-white">Already Accessed!</h2>
              <p className="text-ai-cyan">
                You have already accessed this FREE course. 
                Share it with others so they can benefit too!
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleShare}
                className="w-full bg-gradient-to-r from-ai-green to-ai-cyan text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Share2 className="w-5 h-5" />
                <span>Share with Friends - It's FREE!</span>
              </button>
              
              <p className="text-gray-400 text-sm">
                Help others learn AI entrepreneurship for free!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="relative bg-gradient-to-br from-ai-blue to-ai-purple p-1 rounded-3xl max-w-md w-full animate-scale-in">
        <div className="bg-ai-navy rounded-2xl p-6 text-center space-y-6">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-4">
            <div className="text-6xl animate-bounce">🎉</div>
            <h2 className="text-2xl font-bold text-white">Congratulations!</h2>
            <p className="text-ai-cyan">
              You now have FREE access to the complete AI Startup Course! 
              This is FREE for 3 days only.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleShare}
              className="w-full bg-gradient-to-r from-ai-green to-ai-cyan text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Share2 className="w-5 h-5" />
              <span>Share with Friends - It's FREE!</span>
            </button>
            
            <p className="text-gray-400 text-sm">
              Help others learn AI entrepreneurship for free!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;