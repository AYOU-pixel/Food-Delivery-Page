
import { Pizza, Salad, Coffee, Vegan, UtensilsCrossed } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface CategoryProps {
  icon: React.ReactNode;
  name: string;
  count: number;
}

const CategoryCard = ({ icon, name, count }: CategoryProps) => (
  <Card className="category-card cursor-pointer transition-all duration-300 hover:scale-105 border border-gray-100">
    <div className="rounded-full bg-gray-50 p-4 mb-3">
      {icon}
    </div>
    <h3 className="font-medium text-center">{name}</h3>
    <span className="text-xs text-gray-400">{count} places</span>
  </Card>
);

const CategoriesSection = () => {
  const categories = [
    { icon: <Pizza className="text-tomato-red" size={24} />, name: "Pizza", count: 42 },
    { icon: <UtensilsCrossed className="text-tomato-red" size={24} />, name: "Burgers", count: 37 },
    { icon: <span className="text-tomato-red text-xl">🍣</span>, name: "Sushi", count: 24 },
    { icon: <Vegan className="text-fresh-green" size={24} />, name: "Vegan", count: 19 },
    { icon: <span className="text-warm-yellow text-xl">🍰</span>, name: "Desserts", count: 28 },
    { icon: <span className="text-tomato-red text-xl">🍜</span>, name: "Noodles", count: 18 },
    { icon: <Salad className="text-fresh-green" size={24} />, name: "Salads", count: 21 },
    { icon: <span className="text-warm-yellow text-xl">🌮</span>, name: "Mexican", count: 15 },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Food Categories</h2>
          <a href="#" className="text-tomato-red font-medium hover:underline">View All</a>
        </div>
        
        <div className="overflow-x-auto pb-6 -mx-4 px-4">
          <div className="grid grid-flow-col auto-cols-max md:grid-flow-row md:grid-cols-4 lg:grid-cols-8 gap-4 min-w-max md:min-w-0">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
