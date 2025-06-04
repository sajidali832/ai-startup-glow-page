import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 circuit-bg opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai-navy/80 via-ai-blue/60 to-ai-purple/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="text-gradient">BUILD AI STARTUP</span>
                <br />
                <span className="text-white">COMPANY IN</span>
                <br />
                <span className="text-ai-orange">2025</span>
              </h1>
              
              <div className="inline-block bg-gradient-to-r from-ai-orange to-ai-pink text-white px-6 py-3 rounded-full font-bold text-lg md:text-xl animate-pulse-glow">
                FULL COURSE
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Launch your AI-powered startup from scratch in 2025! 
              <span className="text-ai-cyan font-semibold"> Master AI entrepreneurship from idea to launch</span>
            </p>
            
            {/* Rating and Students */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/50 text-yellow-400'}`} />
                  ))}
                </div>
                <span className="text-white font-semibold">4.5/5</span>
              </div>
              
              <div className="text-ai-cyan font-semibold">
                📈 Over 12,000 students enrolled!
              </div>
            </div>
          </div>
          
          {/* Right Content - Course Poster */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan to-ai-purple rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-ai-blue to-ai-purple p-1 rounded-3xl">
                <img 
                  src="/lovable-uploads/78c037ee-1921-4209-9a93-d233ec90f456.png"
                  alt="AI Startup Course Poster"
                  className="w-full max-w-md rounded-2xl shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-ai-cyan/20 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-ai-purple/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-ai-pink/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;