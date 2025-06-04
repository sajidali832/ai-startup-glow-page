import { useEffect, useRef } from 'react';

interface BannerAdProps {
  className?: string;
}

const BannerAd = ({ className = "" }: BannerAdProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script elements
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

    // Append scripts to the ad container
    if (adRef.current) {
      adRef.current.appendChild(configScript);
      adRef.current.appendChild(adScript);
    }

    return () => {
      // Cleanup scripts when component unmounts
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