import { Check } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const PricingSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        
        {/* Countdown Timer */}
        <div className="mb-16 animate-fade-in-up">
          <CountdownTimer />
        </div>
        
        {/* Pricing Card */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-pink rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
          
          <div className="relative glass-effect rounded-3xl p-8 md:p-12 text-center">
            
            {/* Free Badge */}
            <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-ai-green to-ai-cyan text-white px-4 py-2 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-lg shadow-lg animate-bounce">
                🎉 100% FREE
              </div>
            </div>
            
            <div className="pt-8 space-y-8">
              {/* Course Title */}
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white px-2">
                Build AI Startup Company in 2025
              </h2>
              
              {/* Free Pricing */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-xl md:text-3xl text-gray-400 line-through">PKR 899</span>
                  <span className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-ai-green to-ai-cyan bg-clip-text text-transparent">FREE</span>
                </div>
                <p className="text-ai-green font-semibold text-sm md:text-base px-2">🎉 Everything FREE for 3 Days! Share with others!</p>
              </div>
              
              {/* Features */}
              <div className="grid md:grid-cols-2 gap-3 md:gap-4 text-left max-w-2xl mx-auto px-2">
                {[
                  'Complete AI Startup Blueprint',
                  'Funding & Investment Strategies', 
                  'MVP Development Framework',
                  'Market Research Templates',
                  'Legal & Compliance Guide',
                  'Lifetime Access & Updates',
                  'Private Community Access',
                  '30-Day Money Back Guarantee'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 md:space-x-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-ai-green flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="space-y-4">
                <a 
                  href="https://drive.google.com/file/d/1jWn0sOP5bREXUH3G8lpyJhVEvn2D573V/view?usp=drivesdk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-ai-green to-ai-cyan text-white font-bold text-lg md:text-xl py-4 px-6 md:px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg animate-pulse-glow text-center"
                  onClick={() => localStorage.setItem('courseAccessed', 'true')}
                >
                  🎉 Get FREE Access Now - Download PDF!
                </a>
                
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
                  <span>🎉 100% Free</span>
                  <span>📱 Instant Access</span>
                  <span>📝 PDF Download</span>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-ai-cyan mb-4 font-semibold">Free for Everyone - Share with Others!</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <span>✅ Completely Free</span>
                  <span>✅ Instant Download</span>
                  <span>✅ No Registration Required</span>
                  <span>✅ Share with Friends</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;