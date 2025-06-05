import { useEffect, useRef } from 'react';

interface BannerAdProps {
  className?: string;
}

const BannerAd = ({ className = "" }: BannerAdProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script element for banner ad
    const adScript = document.createElement('script');
    adScript.async = true;
    adScript.setAttribute('data-cfasync', 'false');
    adScript.src = '//pl26843440.profitableratecpm.com/c58e8b4e2234d91a115a9b3ddbbabb13/invoke.js';

    // Create container div
    const adContainer = document.createElement('div');
    adContainer.id = 'container-c58e8b4e2234d91a115a9b3ddbbabb13';

    // Append elements to the ad container
    if (adRef.current) {
      adRef.current.appendChild(adScript);
      adRef.current.appendChild(adContainer);
    }

    return () => {
      // Cleanup when component unmounts
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div ref={adRef} className="banner-ad-container"></div>
    </div>
  );
};

export default BannerAd;