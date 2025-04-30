import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Missing email",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate API call
    toast({
      title: "Subscribed successfully!",
      description: "You'll receive our weekly deals in your inbox.",
    });
    
    setEmail("");
  };
  
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-100 blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-100 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* App Download Section */}
          <div className="order-2 md:order-1 transform transition-all duration-500 hover:scale-105">
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg relative overflow-hidden group">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-100 rounded-full -ml-10 -mb-10 transition-transform duration-700 group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-8 h-8 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.514 0 10-4.486 10-10S17.514 2 12 2zm-1 17.93c-3.945-.494-7-3.858-7-7.93 0-4.072 3.055-7.437 7-7.93V21.93z"/>
                  </svg>
                  <h3 className="text-xl md:text-2xl font-bold">Get the FoodFind App</h3>
                </div>
                
                <p className="text-gray-600 mb-8">
                  Download our mobile app and never miss exclusive deals. Order food anytime, anywhere.
                </p>
                
                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#" className="flex items-center justify-center bg-rose-500 text-white py-3 px-6 rounded-xl hover:bg-rose-600 transition-colors shadow-md hover:shadow-lg">
                    <div className="mr-3">
                      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 0L2 11.4L6.66667 16L20 2.8V0H13.3333Z" fill="white"/>
                        <path d="M6.66667 16L13.3333 22.4H20V20L6.66667 6.8L2 11.4L6.66667 16Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-xs">GET IT ON</p>
                      <p className="text-sm font-semibold">Google Play</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center justify-center bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg">
                    <div className="mr-3">
                      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8055 12.7926C16.8251 10.8686 17.8255 9.12823 19.4478 8.13391C18.4539 6.71512 16.8251 5.84449 15.0386 5.78404C13.1343 5.58547 11.2104 6.88934 10.2361 6.88934C9.22619 6.88934 7.63779 5.80427 6.05896 5.84449C3.94009 5.92516 1.98362 7.12051 0.983665 9.00863C-1.14696 12.8732 0.429228 18.6939 2.49849 21.9548C3.52839 23.5542 4.7385 25.3781 6.34669 25.3178C7.91574 25.2568 8.53062 24.324 10.3952 24.324C12.2403 24.324 12.8161 25.3178 14.4634 25.2773C16.1694 25.2568 17.2188 23.6574 18.2096 22.0379C18.9638 20.8829 19.5397 19.6073 19.8858 18.2693C17.894 17.377 16.8055 15.1552 16.8055 12.7926Z" fill="white"/>
                        <path d="M13.8105 3.85151C14.6834 2.81155 15.1477 1.47851 15.1282 0.106445C13.7952 0.248128 12.5641 0.868139 11.6716 1.84246C10.7987 2.78242 10.3148 4.07608 10.3539 5.40912C11.687 5.4294 12.9572 4.85126 13.8105 3.85151Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-xs">Download on the</p>
                      <p className="text-sm font-semibold">App Store</p>
                    </div>
                  </a>
                </div>
                
                {/* App Preview */}
                <div className="flex items-center group">
                  <div className="border-4 border-white rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:rotate-1">
                    <img 
                      src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Mobile App Screenshot" 
                      className="w-24 md:w-32 h-auto object-cover"
                      loading="lazy"
                      width="300"
                      height="500"
                    />
                  </div>
                  
                  <div className="ml-4 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">4.8 / 5 stars</p>
                    <p className="text-xs text-gray-500">Over 10,000 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="order-1 md:order-2">
            <div className="max-w-md mx-auto p-6 md:p-8 bg-white rounded-3xl shadow-lg transform transition-all duration-500 hover:shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-500 mb-4">
                  <Mail size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay in the Loop</h2>
                <p className="text-gray-600">
                  Get exclusive offers and updates delivered directly to your inbox.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-500">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-6 text-base border-gray-200 focus:border-rose-500 focus:ring-rose-500 rounded-xl shadow-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Mail size={18} />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Subscribe Now
                </Button>
              </form>
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="font-medium text-center mb-4">Follow us for updates</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-rose-100 hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-rose-100 hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-rose-100 hover:text-rose-500 transition-all duration-300 transform hover:scale-110">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
