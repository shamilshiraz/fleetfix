import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
 

// Sample data structure
const CATEGORIES = [
  "Engine", "Transmission", "Brake", "Suspension", 
  "Electrical","Body", "Wheels and tyres",
  //  "Cooling system", "Fuel system", "Exhaust system","Steering","Air and Hydraulic"
];

const PRODUCTS = [
  { id: 1, name: "Pistons", category: "Engine", image: './piston.png' },
  { id: 2, name: "Cylinders", category: "Engine", image: './cylinder.png' },
  { id: 3, name: "Crankshafts", category: "Engine", image: './crankshaft.png' },
  { id: 4, name: "Camshafts", category: "Engine", image: './camshaft.png' },
  { id: 5, name: "Valves", category: "Engine", image: './valve.png' },
  { id: 6, name: "Gears", category: "Transmission", image: './transmission.png' },
  { id: 7, name: "Bearings", category: "Transmission", image: './bearing.png' },
  { id: 8, name: "Seals", category: "Transmission", image: './seal.png' },
  { id: 9, name: "Clutches", category: "Transmission", image: './clutch.png' },
  { id: 10, name: "Pads", category: "Brake", image: './pads.png' },
  { id: 11, name: "Rotors", category: "Brake", image: './rotors.png' },
  { id: 12, name: "Calipers", category: "Brake", image: './caliper.png' },
  { id: 13, name: "Brake shoes", category: "Brake", image: './shoes.png' },
  { id: 14, name: "Shocks", category: "Suspension", image: './shocks.png' },
  { id: 15, name: "Struts", category: "Suspension", image: './struts.png' },
  { id: 16, name: "Springs", category: "Suspension", image: './spring.png' },
  { id: 17, name: "Bushings", category: "Suspension", image: './bush.png' },
  { id: 18, name: "Batteries", category: "Electrical", image: './battery.png' },
  { id: 19, name: "Alternators", category: "Electrical", image: './electric.png' },
  { id: 20, name: "Starters", category: "Electrical", image: './starter.png' },
  { id: 21, name: "Fuses", category: "Electrical", image: './fuse.png' },
  { id: 22, name: "Bumpers", category: "Body", image: './bodyparts.png' },
  { id: 23, name: "Fenders", category: "Body", image: './fenders.png' },
  { id: 24, name: "Doors", category: "Body", image: './doors.png' },
  { id: 25, name: "Mirrors", category: "Body", image: './mirrors.png' },
  { id: 26, name: "Rims", category: "Wheels and tyres", image: './rims.png' },
  { id: 27, name: "Tires", category: "Wheels and tyres", image: './tyres.png' },
  { id: 28, name: "Hubs", category: "Wheels and tyres", image: './hubs.png' },
  { id: 29, name: "Bearings", category: "Wheels and tyres", image: './bearings.png' },




]

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
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset display count when category changes
  React.useEffect(() => {
    setDisplayCount(8);
  }, [selectedCategory]);

  return (
    <div 
    data-aos="fade-up"
    data-aos-duration="1600"
    className="container mx-auto px-4 py-8 font-beb">
      {/* Category Filter */}
      <div className="mb-8 flex justify-center">
  <div className="relative w-64">
    <select
      className="w-full p-2 border rounded-lg appearance-none bg-white pr-8 cursor-pointer text-center"
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
              <div className="text-sm text-gray-300 mb-1">{product.category}</div>
              <h3 className="text-2xl text-white line-clamp-2">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="text-center mt-8 space-x-4">
        {hasMore && (
          <button
            onClick={handleSeeMore}
            className="border border-black text-black bg-white px-6 py-2 hover:text-white  hover:bg-red-600 transition-colors"
          >
            See More 
          </button>
        )}
        {displayCount > 8 && (
          <button
            onClick={handleSeeLess}
            className="bg-gray-600 text-white px-6 py-2  hover:bg-red-600 transition-colors"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;