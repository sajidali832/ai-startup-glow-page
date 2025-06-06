import { useEffect, useRef } from 'react';

interface LargeDisplayAdProps {
  className?: string;
}

const LargeDisplayAd = ({ className = "" }: LargeDisplayAdProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script element for large display ad
    const adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = '//pl26838030.profitableratecpm.com/fb/41/6f/fb416f2df9ad29b5b23d1082a9b35500.js';

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
    <div className={`flex justify-center items-center ${className}`}>
      <div ref={adRef} className="large-display-ad w-full"></div>
    </div>
  );
};

export default LargeDisplayAd;