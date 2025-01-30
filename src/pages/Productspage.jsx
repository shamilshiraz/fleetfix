import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductGrid from '../Components/ProductGrid';
import Forklift from '../Components/Forklift';
import Truck from '../Components/Tuck';

function Productspage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('truck');

  return (
    <div className="mt-40">
      {/* Back Button & Dropdown Container */}
      <div className="flex justify-between items-center px-6 pt-10">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          ← Back
        </button>

        {/* Category Dropdown */}
        <select 
          className="bg-black text-white px-4 py-2 rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="truck">Truck</option>
          <option value="forklift">Forklift</option>
        </select>
      </div>

      {/* Conditional Rendering for Products */}
      {selectedCategory === 'truck' ? <>
      <Truck/>
        <ProductGrid />
        </> : <Forklift />}
    </div>
  );
}

export default Productspage;

