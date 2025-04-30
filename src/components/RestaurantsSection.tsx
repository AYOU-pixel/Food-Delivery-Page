import { Star, Clock, ArrowRight, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  promotion?: string;
  distance?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RestaurantCard = ({ 
  name, 
  image, 
  cuisine, 
  rating, 
  deliveryTime, 
  deliveryFee, 
  promotion,
  distance = "1.2 km"
}: RestaurantCardProps) => (
  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
    <div className="relative aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        width={500}
        height={300}
      />
      {promotion && (
        <Badge className="absolute top-3 left-3 bg-rose-500 text-white font-medium px-3 py-1 rounded-full text-sm shadow-lg">
          {promotion}
        </Badge>
      )}
    </div>
    
    <CardContent className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg group-hover:text-rose-500 transition-colors">
          {name}
        </h3>
        <div className="flex items-center bg-rose-50 text-rose-600 px-2 py-1 rounded-md">
          <Star size={14} fill="#ef4444" className="mr-1" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-3 truncate">{cuisine}</p>
      
      <div className="flex flex-col space-y-2 text-sm">
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            <span>{distance}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-1 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-700">{deliveryFee}</span>
          <Button 
            variant="link" 
            className="text-rose-500 hover:text-rose-600 p-0 h-auto font-medium group-hover:underline"
          >
            View Menu
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const RestaurantsSection = () => {
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cuisine: "Italian • Pizza • Pasta",
      rating: 4.8,
      deliveryTime: "20-30 min",
      deliveryFee: "Free Delivery",
      promotion: "20% OFF",
      distance: "1.2 km"
    },
    {
      id: 2,
      name: "Burger Joint",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cuisine: "American • Burgers • Fries",
      rating: 4.5,
      deliveryTime: "15-25 min",
      deliveryFee: "$1.99 Delivery",
      distance: "2.5 km"
    },
    {
      id: 3,
      name: "Sushi World",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cuisine: "Japanese • Sushi • Bowls",
      rating: 4.9,
      deliveryTime: "25-40 min",
      deliveryFee: "$2.99 Delivery",
      promotion: "Free Item",
      distance: "3.1 km"
    },
    {
      id: 4,
      name: "Taco Fiesta",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cuisine: "Mexican • Tacos • Burritos",
      rating: 4.7,
      deliveryTime: "20-35 min",
      deliveryFee: "Free Delivery",
      distance: "1.8 km"
    }
  ];

  return (
    <section className="py-16 bg-white" id="restaurants">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="mb-6 md:mb-0">
            <span className="text-rose-500 font-medium inline-block px-3 py-1 rounded-full bg-rose-50 mb-2">
              Featured Restaurants
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Discover Local Eats
            </h2>
            <p className="text-gray-600 mt-2 max-w-md">
              Browse top-rated restaurants near you with exclusive deals and fast delivery.
            </p>
          </div>
          
          <Button 
            variant="outline" 
            className="group border-rose-200 hover:bg-rose-500 hover:text-white transition-colors px-6 py-6 md:py-3"
          >
            <span className="flex items-center">
              View All Restaurants
              <ArrowRight 
                size={18} 
                className="ml-2 transition-transform group-hover:translate-x-1" 
              />
            </span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard 
              key={restaurant.id} 
              {...restaurant}
              className="animate-in fade-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button 
            variant="outline" 
            className="group border-rose-200 hover:bg-rose-500 hover:text-white transition-colors flex items-center gap-2 mx-auto"
          >
            <span className="flex items-center">
              View All Restaurants
              <ArrowRight 
                size={16} 
                className="ml-2 transition-transform group-hover:translate-x-1" 
              />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;