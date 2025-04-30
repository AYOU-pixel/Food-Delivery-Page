import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { memo } from 'react';

interface PromotionCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

const PromotionCard = memo(({ title, description, image, color }: PromotionCardProps) => {
  return (
    <div 
      className={`rounded-2xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl ${color} h-full`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="p-6 md:p-8 flex flex-col justify-center md:w-3/5">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm md:text-base opacity-90 mb-4">{description}</p>
          <Button 
            variant="outline" 
            className="self-start bg-white hover:bg-white/90 text-dark-charcoal border-0 shadow flex items-center gap-2 transition-transform hover:-translate-y-0.5"
            aria-label={`Claim offer: ${title}`}
          >
            Order Now <ArrowRight size={16} />
          </Button>
        </div>
        <div className="md:w-2/5 relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-40 md:h-full object-cover"
            loading="lazy"
            onError={(e) => (e.target as HTMLImageElement).src = '/fallback-image.jpg'}
          />
        </div>
      </div>
    </div>
  );
});

PromotionCard.displayName = 'PromotionCard';

const PromotionsSection = () => {
  const PROMOTIONS = [
    {
      title: "Save 20% on Your First Order",
      description: "Use code WELCOME20 at checkout to redeem this special offer for new customers!",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "bg-gradient-to-r from-tomato-red to-tomato-red/80 text-white"
    },
    {
      title: "Free Delivery on Orders Over $25",
      description: "Skip the delivery fee and save money on your favorite meals with our special deal.",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "bg-gradient-to-r from-fresh-green to-fresh-green/80 text-white"
    }
  ];

  return (
    <section 
      id="offers" 
      className="section py-16 bg-gradient-to-b from-white via-gray-50 to-white"
      aria-labelledby="promotions-heading"
    >
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-tomato-red font-medium mb-2 block">Limited Time Deals</span>
          <h2 id="promotions-heading" className="text-3xl md:text-4xl font-bold">
            Special Offers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROMOTIONS.map((promo, index) => (
            <PromotionCard key={index} {...promo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PromotionsSection);
