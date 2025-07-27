import React from 'react';

const DishCard = ({ dish, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {dish.popular && (
            <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Popular
            </span>
          )}
          {dish.spicy && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Spicy
            </span>
          )}
          {dish.vegetarian && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Vegetarian
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-sm font-bold">
            ${dish.price}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {dish.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {dish.description}
        </p>
        
        <button
          onClick={() => onAddToCart(dish)}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default DishCard;