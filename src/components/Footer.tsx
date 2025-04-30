import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full -ml-32 -mb-32 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-48 -mt-48 pointer-events-none"></div>
      
      <div className="container relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <span className="text-white text-xl font-bold">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-emerald-400 bg-clip-text text-transparent">
                FoodFind
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Connecting hungry customers with their favorite restaurants. Fast delivery, delicious food, happy customers.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-rose-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">123 Main Street, New York</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-rose-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-rose-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">support@foodfind.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-1 border-b border-gray-700 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Restaurants", "Special Offers", "How It Works", "Careers"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-rose-400 transition-all duration-200 flex items-center group"
                  >
                    <span className="mr-2 transition-transform duration-200 group-hover:translate-x-1">•</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-1 border-b border-gray-700 inline-block">Support</h3>
            <ul className="space-y-3">
              {["Help Center", "FAQ", "Contact Us", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-rose-400 transition-all duration-200 flex items-center group"
                  >
                    <span className="mr-2 transition-transform duration-200 group-hover:translate-x-1">•</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & App */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-1 border-b border-gray-700 inline-block">Get Our App</h3>
              <div className="space-y-4">
                <AppDownloadButton 
                  store="google-play" 
                  title="Google Play" 
                  subtitle="GET IT ON"
                />
                <AppDownloadButton 
                  store="app-store" 
                  title="App Store" 
                  subtitle="Download on the"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="text-gray-400 hover:text-rose-400 hover:scale-110 transition-all duration-200"
                    aria-label={`Follow us on ${social}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {/* Placeholder SVG paths - replace with actual icons */}
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm2 5h-1v1.5c0 .5-.1 1-.6 1s-.6-.3-.6-.8c0-.3 0-1.5 1.2-1.5h.4v-1h-1c-1.5 0-2.2 1-2.4 2H9v1h1.2c0 1.7 1 2.5 2.3 2.5h.9v-1h-.8c-.7 0-1-.2-1-.8v-.7h1v-.5h-.8V10h1.8v-.5z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FoodFind. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-gray-500 hover:text-rose-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-rose-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-gray-500 hover:text-rose-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="flex items-center">
            <Clock size={16} className="text-gray-500 mr-2" />
            <span className="text-sm text-gray-400">24/7 Support Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable App Download Button Component
const AppDownloadButton = ({ store, title, subtitle }) => (
  <Button 
    variant="outline" 
    className="group w-full bg-transparent border border-gray-700 hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 py-3 px-4 rounded-xl flex items-center"
  >
    <svg 
      className="mr-3 w-5 h-5 text-gray-300 group-hover:text-white transition-colors" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      {store === "google-play" ? (
        // Google Play Icon
        <path d="M3 18h5v-2H3v2zm0-5h7v-2H3v2zm0-7h10v2H3V6zm12 12h2v-2h-2v2zm0-5h2v-2h-2v2zm0-7v2h2V6h-2z" />
      ) : (
        // App Store Icon
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
      )}
    </svg>
    <div className="text-left">
      <p className="text-xs text-gray-400 group-hover:text-white transition-colors">{subtitle}</p>
      <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{title}</p>
    </div>
  </Button>
);

export default Footer;
