const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-ai-navy to-ai-blue/20 py-16 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Course Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-gradient">
              AI Startup Mastery
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The complete course to build and scale your AI startup company in 2025. 
              From idea validation to funding and growth strategies.
            </p>
            <div className="flex space-x-4">
              <div className="bg-ai-green/20 text-ai-green px-3 py-1 rounded-full text-xs font-semibold">
                🏆 #1 AI Course
              </div>
              <div className="bg-ai-blue/20 text-ai-cyan px-3 py-1 rounded-full text-xs font-semibold">
                🇵🇰 Pakistani Made
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Course Features</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✅ 15+ Hours of Content</li>
              <li>✅ 105 Video Lessons</li>
              <li>✅ Downloadable Resources</li>
              <li>✅ Private Community</li>
              <li>✅ Lifetime Access</li>
              <li>✅ Mobile Friendly</li>
            </ul>
          </div>
          
          {/* Contact & Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support & Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>support@aistartup.pk</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <span>24/7 Chat Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span>30-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {[
              { icon: "📘", label: "Facebook" },
              { icon: "📸", label: "Instagram" }, 
              { icon: "🐦", label: "Twitter" },
              { icon: "💼", label: "LinkedIn" },
              { icon: "📺", label: "YouTube" }
            ].map((social, index) => (
              <button 
                key={index}
                className="text-2xl hover:scale-110 transition-transform duration-200"
                title={social.label}
              >
                {social.icon}
              </button>
            ))}
          </div>
          
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>© 2025 AI Startup Mastery Course. Made with ❤️ in Pakistan</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2">
              <a href="#" className="hover:text-ai-cyan transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-ai-cyan transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-ai-cyan transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="mt-12 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your AI Empire? 🚀
            </h3>
            <p className="text-gray-300 mb-6">
              Join 12,000+ Pakistani entrepreneurs who are already building the future with AI
            </p>
            <button className="bg-gradient-to-r from-ai-green to-ai-cyan text-white font-bold text-lg px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your AI Journey Today - PKR 539
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;