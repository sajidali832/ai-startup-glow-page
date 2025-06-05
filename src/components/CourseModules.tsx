import { CheckCircle } from 'lucide-react';

const CourseModules = () => {
  const modules = [
    {
      title: "AI Market Analysis & Opportunity Identification",
      description: "Discover untapped AI markets and validate your startup ideas"
    },
    {
      title: "Building Your AI MVP",
      description: "Step-by-step guide to creating your minimum viable AI product"
    },
    {
      title: "Fundraising for AI Startups",
      description: "Master the art of pitching to investors and securing funding"
    },
    {
      title: "Scaling & Growth Strategies",
      description: "Learn how to scale your AI startup from MVP to market leader"
    },
    {
      title: "Legal & Ethical Considerations",
      description: "Navigate AI regulations, data privacy, and ethical frameworks"
    },
    {
      title: "Launch & Marketing Your AI Startup",
      description: "Proven marketing strategies specific to AI startups"
    },
    {
      title: "Building Your AI Team",
      description: "Recruit, manage, and scale your AI development team"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-ai-navy to-ai-blue/30">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Complete <span className="text-gradient">AI Startup</span> Curriculum
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            7 comprehensive modules designed to take you from AI idea to profitable startup. 
            Each module includes practical exercises, real-world case studies, and actionable frameworks.
          </p>
        </div>
        
        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-6 hover-lift group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Module Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-ai-cyan to-ai-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <CheckCircle className="w-6 h-6 text-ai-green opacity-80" />
              </div>
              
              {/* Module Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ai-cyan transition-colors">
                {module.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {module.description}
              </p>
              
            </div>
          ))}
        </div>
        
        {/* Course Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { number: "Complete", label: "AI Startup Guide" },
            { number: "Free", label: "For 3 Days" },
            { number: "∞", label: "Lifetime Access" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-gradient">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;