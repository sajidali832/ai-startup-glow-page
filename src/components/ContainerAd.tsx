import { useEffect, useRef } from 'react';

interface ContainerAdProps {
  className?: string;
}

const ContainerAd = ({ className = "" }: ContainerAdProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script element for container ad
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
      <div ref={adRef} className="container-ad w-full"></div>
    </div>
  );
};

export default ContainerAd;