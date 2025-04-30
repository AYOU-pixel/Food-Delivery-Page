import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { memo, useRef } from 'react';

const HeroSection = () => {
  const searchInputRef = useRef(null);

  const StatCard = ({ value, label }) => (
    <div className="flex flex-col items-center space-y-1">
      <span className="text-2xl font-bold text-dark-charcoal">{value}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );

  const FloatingBadge = ({ children, positionClass }) => (
    <div className={`absolute ${positionClass} bg-white p-4 rounded-xl shadow-lg animate-fade-in`}>
      {children}
    </div>
  );

  return (
    <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center bg-gradient-to-r from-tomato-red/5 to-fresh-green/5 overflow-hidden">
      {/* Optimized background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-40 h-40 rounded-full bg-tomato-red/5 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-[20%] left-[10%] w-60 h-60 rounded-full bg-fresh-green/5 blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 pt-16 relative z-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Promo badge */}
          <span className="px-3 py-1 rounded-full bg-warm-yellow text-dark-charcoal text-sm font-medium inline-block">
            Free delivery on your first order
          </span>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Craving Something <span className="text-tomato-red">Delicious?</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl mt-4 text-gray-600">
            Order from top-rated restaurants near you and get your favorite meals delivered to your door.
          </p>

          {/* Search and CTA */}
          <div className="flex flex-col md:flex-row gap-3 w-full max-w-xl">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search for food or restaurant..."
                className="pl-10 py-6 rounded-xl border border-gray-200 focus:border-tomato-red transition-colors w-full"
                aria-label="Search for food or restaurant"
              />
            </div>
            <Button className="bg-tomato-red hover:bg-tomato-red/90 text-white py-6 px-8 transition-colors">
              Order Now
            </Button>
          </div>

          {/* Stats section */}
          <div className="flex items-center gap-8 pt-4">
            <StatCard value="200+" label="Restaurants" />
            <StatCard value="25k+" label="Active Users" />
            <StatCard value="15k+" label="Reviews" />
          </div>
        </div>

        {/* Right Column - Image Container */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="w-[450px] h-[450px] relative">
            <img
              src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Delicious Food Ready for Delivery"
              className="w-full h-full object-cover rounded-full shadow-2xl animate-fade-in"
              loading="lazy"
            />

            {/* Floating badges */}
            <FloatingBadge positionClass="-bottom-6 -left-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-warm-yellow/20 flex items-center justify-center">
                  <span className="text-warm-yellow text-xl">⭐</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Trusted by</p>
                  <p className="text-xs text-gray-500">25,000+ happy customers</p>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge positionClass="-top-6 -right-6">
              <div>
                <p className="text-sm font-bold">30 min</p>
                <p className="text-xs text-gray-500">Average delivery time</p>
              </div>
            </FloatingBadge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
