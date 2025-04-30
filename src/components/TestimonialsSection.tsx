import { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  location?: string;
}

const TestimonialCard = ({ 
  text, 
  name, 
  role, 
  avatar, 
  rating,
  location = "New York"
}: TestimonialProps) => (
  <Card className="group h-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
    <CardContent className="p-6 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="text-rose-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
        <Quote size={24} />
      </div>
      
      {/* Rating */}
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
            aria-hidden="true"
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 italic flex-grow">
        "{text}"
      </p>
      
      {/* User Info */}
      <div className="flex items-center mt-auto">
        <img 
          src={avatar} 
          alt={name} 
          className="rounded-full w-12 h-12 object-cover mr-4 shadow-sm" 
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold text-gray-900 group-hover:text-rose-500 transition-colors">
            {name}
          </h4>
          <div className="flex items-center text-sm text-gray-500">
            <span>{role}</span>
            <span className="mx-1">•</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  
  const testimonials = [
    {
      text: "The food is always hot and fresh when it arrives. I love the variety of restaurants available on this platform!",
      name: "Sarah Johnson",
      role: "Regular Customer",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
      location: "New York"
    },
    {
      text: "I've tried many delivery services, but this one has the best selection and fastest delivery times by far!",
      name: "Michael Chen",
      role: "Foodie Enthusiast",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      location: "San Francisco"
    },
    {
      text: "The app is so easy to use. I can order my favorite meals with just a few taps and track everything in real-time.",
      name: "Emily Rodriguez",
      role: "Busy Professional",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      location: "Chicago"
    },
    {
      text: "Customer service is exceptional. They quickly resolved an issue with my order and even gave me a discount code.",
      name: "David Wilson",
      role: "First-time User",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4,
      location: "Los Angeles"
    }
  ];

  // Calculate display settings based on screen size
  const getDisplayCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };
  
  const displayCount = getDisplayCount();
  const totalSlides = Math.ceil(testimonials.length / displayCount);
  const visibleTestimonials = testimonials.slice(
    currentIndex * displayCount, 
    currentIndex * displayCount + displayCount
  );
  
  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(totalSlides - 1, prev + 1));
  };
  
  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    
    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }
    
    setIsDragging(false);
    setStartX(0);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="testimonials">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 font-medium mb-3">
            Customer Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from our valued customers about their experience with our food delivery service.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${(currentIndex * 100) / displayCount}%)`,
              width: `${(100 / displayCount) * testimonials.length}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`px-2 ${displayCount === 1 ? 'w-full' : displayCount === 2 ? 'w-1/2' : 'w-1/3'}`}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center mt-10 space-x-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="rounded-full w-10 h-10 bg-white hover:bg-gray-50 border-gray-200 shadow-sm"
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={18} className="text-gray-600" />
          </Button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-rose-500 w-4' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleNext}
            disabled={currentIndex >= totalSlides - 1}
            className="rounded-full w-10 h-10 bg-white hover:bg-gray-50 border-gray-200 shadow-sm"
            aria-label="Next testimonials"
          >
            <ArrowRight size={18} className="text-gray-600" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;