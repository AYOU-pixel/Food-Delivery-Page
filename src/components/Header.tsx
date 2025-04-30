import { useState, useEffect, useRef, memo } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Optimized scroll handler with requestAnimationFrame
  useEffect(() => {
    let animationFrameId;
    
    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Close menu when clicking outside using ref
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const NavLinks = ({ className }) => (
    <nav className={className}>
      {['Home', 'Restaurants', 'Offers'].map((item) => (
        <a 
          key={item} 
          href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
          className="font-medium hover:text-red-500 transition-colors"
          onClick={toggleMobileMenu}
        >
          {item}
        </a>
      ))}
    </nav>
  );

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <ShoppingBag size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold">FoodFind</span>
        </div>

        {/* Location selector (desktop) */}
        <div className="hidden md:flex items-center space-x-2 text-sm">
          <MapPin size={16} className="text-red-500" />
          <span>123 Main St, New York</span>
        </div>

        {/* Desktop Navigation */}
        <NavLinks className="hidden md:flex items-center space-x-8" />

        {/* Desktop Auth & Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-800 hover:text-red-500">
            Login / Sign Up
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white space-x-2">
            <ShoppingBag size={16} />
            <span>Cart (2)</span>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon"
            className="relative"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-haspopup="true"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div 
        ref={mobileMenuRef}
        className={`${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden fixed w-full bg-white shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin size={16} className="text-red-500" />
            <span>123 Main St, New York</span>
          </div>
          
          <NavLinks className="flex flex-col space-y-3" />
          
          <Button variant="outline" className="w-full justify-center">
            Login / Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);