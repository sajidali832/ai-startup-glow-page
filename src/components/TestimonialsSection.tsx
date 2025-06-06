import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex M.",
      location: "Tech Hub",
      avatar: "👨🏻‍💼",
      review: "Excellent course! Helped me launch my AI chatbot startup. The practical frameworks are pure gold. Highly recommended!",
      rating: 5,
      business: "AI Chatbot Startup"
    },
    {
      name: "Jordan R.", 
      location: "Innovation City",
      avatar: "👨🏽‍💻",
      review: "The funding strategies module was game-changing. Now I understand exactly how to pitch to investors. Got my first round within 3 months!",
      rating: 5,
      business: "AI Healthcare Platform"
    },
    {
      name: "Taylor K.",
      location: "Silicon Valley", 
      avatar: "👨🏻‍🚀",
      review: "This course opened my eyes to global AI opportunities. My startup is now serving international clients with cutting-edge solutions.",
      rating: 5,
      business: "AI Analytics Startup"
    },
    {
      name: "Morgan T.",
      location: "Business District",
      avatar: "👨🏽‍💼", 
      review: "Practical advice that actually works. My AI startup got its first client within a month of completing the course. ROI was immediate!",
      rating: 5,
      business: "AI Automation Services"
    },
    {
      name: "Casey L.",
      location: "Metro Area",
      avatar: "👩🏽‍💻",
      review: "As an entrepreneur, this course gave me confidence to enter the AI space. The community support is incredible. Breaking barriers every day!",
      rating: 5,
      business: "AI EdTech Platform"
    },
    {
      name: "Riley D.",
      location: "Enterprise Zone",
      avatar: "👨🏻‍💻",
      review: "Best investment I made for my career. The ROI strategies and business models section helped me generate 6-figure revenue in first year!",
      rating: 5,
      business: "AI Agricultural Solutions"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Success Stories from <span className="text-gradient">Global Entrepreneurs</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who transformed their AI ideas into thriving businesses
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl p-4 hover-lift animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Review */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                "{testimonial.review}"
              </p>
              
              {/* Profile */}
              <div className="flex items-center space-x-4">
                <div className="text-3xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-ai-cyan text-sm">{testimonial.location}</p>
                  <p className="text-gray-400 text-xs">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Proof Stats */}
        <div className="text-center space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "12,000+", label: "Students Enrolled" },
              { number: "2,500+", label: "Startups Launched" },
              { number: "$50M+", label: "Total Funding Raised" },
              { number: "4.5★", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-white/10">
            <div className="bg-ai-green/20 text-ai-green px-4 py-2 rounded-full text-sm font-semibold">
              ✅ Verified Reviews
            </div>
            <div className="bg-ai-blue/20 text-ai-cyan px-4 py-2 rounded-full text-sm font-semibold">
              🏆 Top Rated Course
            </div>
            <div className="bg-ai-purple/20 text-ai-pink px-4 py-2 rounded-full text-sm font-semibold">
              🌍 Global Community
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;