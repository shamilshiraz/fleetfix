import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Sample data structure
const CATEGORIES = [
  "Electronics", "Clothing", "Home & Garden", "Books", 
  "Sports", "Beauty", "Toys", "Food", "Accessories"
];

const PRODUCTS = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: CATEGORIES[i % CATEGORIES.length],
  image: `/api/placeholder/400/300`
}));

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayCount, setDisplayCount] = useState(8);

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredProducts.length;

  const handleSeeMore = () => {
    setDisplayCount(prev => Math.min(prev + 8, filteredProducts.length));
  };

  const handleSeeLess = () => {
    setDisplayCount(8);
    // Scroll back to top of grid smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset display count when category changes
  React.useEffect(() => {
    setDisplayCount(8);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8 font-beb">
      {/* Category Filter */}
      <div className="mb-8">
        <div className="relative w-64">
          <select
            className="w-full p-2 border rounded-lg appearance-none bg-white pr-8 cursor-pointer"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {displayedProducts.map(product => (
          <div 
            key={product.id} 
            className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-red-600 text-center">
              <div className="text-sm text-gray-600 mb-1">{product.category}</div>
              <h3 className="font-medium text-white line-clamp-2">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="text-center mt-8 space-x-4">
        {hasMore && (
          <button
            onClick={handleSeeMore}
            className="border border-black text-black bg-white px-6 py-2  hover:bg-red-700 transition-colors"
          >
            See More 
          </button>
        )}
        {displayCount > 8 && (
          <button
            onClick={handleSeeLess}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;