import { useEffect, useRef } from 'react';

interface AdsterraBannerAdProps {
  className?: string;
}

const AdsterraBannerAd = ({ className = "" }: AdsterraBannerAdProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script for atOptions
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.innerHTML = `
      atOptions = {
        'key' : '7965d13f7ddce3f3215db7aa59ada0fa',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;

    // Create script for invoke
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//www.highperformanceformat.com/7965d13f7ddce3f3215db7aa59ada0fa/invoke.js';

    // Append scripts to the ad container
    if (adRef.current) {
      adRef.current.appendChild(optionsScript);
      adRef.current.appendChild(invokeScript);
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
      <div ref={adRef} className="adsterra-banner-ad-container"></div>
    </div>
  );
};

export default AdsterraBannerAd;