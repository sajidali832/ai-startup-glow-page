import { useEffect, useRef } from 'react';

interface SocialBarAdProps {
  className?: string;
}

const SocialBarAd = ({ className = "" }: SocialBarAdProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script element for social bar ad
    const adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = '//pl26843425.profitableratecpm.com/0b/38/ae/0b38aefbbb8a5169d00dbc9f4364331d.js';

    // Append script to the ad container
    if (adRef.current) {
      adRef.current.appendChild(adScript);
    }

    return () => {
      // Cleanup script when component unmounts
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={`flex justify-center items-center cursor-pointer hover:opacity-90 transition-opacity ${className}`}>
      <div ref={adRef} className="social-bar-ad-container w-full"></div>
    </div>
  );
};

export default SocialBarAd;