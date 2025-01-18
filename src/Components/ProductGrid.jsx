import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { t } from 'i18next';



// Sample data structure
const CATEGORIES = [
  t('products.engine'), t('products.transmission'), t('products.brake'), t('products.suspension'), 
  t('products.electrical'),t('products.body'), t('products.wheels'),
  //  "Cooling system", "Fuel system", "Exhaust system","Steering","Air and Hydraulic"
];

const PRODUCTS = [
  { id: 1, name: t('grid.piston'), category: t('products.engine'), image: './piston.png' },
  { id: 2, name: t('grid.cylinder'), category: t('products.engine'), image: './cylinder.png' },
  { id: 3, name: t('grid.crankshaft'), category: t('products.engine'), image: './crankshaft.png' },
  { id: 4, name: t('grid.camshaft'), category: t('products.engine'), image: './camshaft.png' },
  { id: 5, name: t('grid.valve'), category: t('products.engine'), image: './valve.png' },
  { id: 6, name: t('grid.gear'), category: t('products.transmission'), image: './transmission.png' },
  { id: 7, name: t('grid.bearing'), category: t('products.transmission'), image: './bearing.png' },
  { id: 8, name: t('grid.seal'), category: t('products.transmission'), image: './seal.png' },
  { id: 9, name: t('grid.clutch'), category: t('products.transmission'), image: './clutch.png' },
  { id: 10, name: t('grid.pad'), category: t('products.brake'), image: './pads.png' },
  { id: 11, name: t('grid.rotor'), category: t('products.brake'), image: './rotors.png' },
  { id: 12, name: t('grid.caliper'), category: t('products.brake'), image: './caliper.png' },
  { id: 13, name: t('grid.brakeshoe'), category: t('products.brake'), image: './shoes.png' },
  { id: 14, name: t('grid.shock'), category: t('products.suspension'), image: './shocks.png' },
  { id: 15, name: t('grid.strut'), category: t('products.suspension'), image: './struts.png' },
  { id: 16, name: t('grid.spring'), category: t('products.suspension'), image: './spring.png' },
  { id: 17, name: t('grid.bushing'), category: t('products.suspension'), image: './bush.png' },
  { id: 18, name: t('grid.battery'), category: t('products.electrical'), image: './battery.png' },
  { id: 19, name: t('grid.alternator'), category: t('products.electrical'), image: './electric.png' },
  { id: 20, name: t('grid.starter'), category: t('products.electrical'), image: './starter.png' },
  { id: 21, name: t('grid.fuse'), category: t('products.electrical'), image: './fuse.png' },
  { id: 22, name: t('grid.bumper'), category: t('products.body'), image: '.t(bodyparts.png' },
  { id: 23, name: t('grid.fender'), category: t('products.body'), image: './fenders.png' },
  { id: 24, name: t('grid.door'), category: t('products.body'), image: './doors.png' },
  { id: 25, name: t('grid.mirror'), category: t('products.body'), image: './mirrors.png' },
  { id: 26, name: t('grid.rim'), category: t('products.wheels'), image: './rims.png' },
  { id: 27, name: t('grid.tire'), category: t('products.wheels'), image: './tyres.png' },
  { id: 28, name: t('grid.hub'), category: t('products.wheels'), image: './hubs.png' },
  { id: 29, name: t('grid.bearing_wheels'), category: t('products.wheels'), image: './bearings.png' },
];

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
    className="container mx-auto px-4 py-8 ">
      {/* Category Filter */}
      <div className="mb-8 flex justify-center">
  <div className="relative w-64">
    <select
      className="w-full p-2 border rounded-lg appearance-none bg-white pr-8 cursor-pointer text-center"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="All">{t('grid.all')}</option>
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