import React, { useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import DishCard from '../components/DishCard';

const MobileFilterModal = ({ open, onClose, filters, updateFilters, categories, priceRanges, dietaryOptions, sortOptions }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 animate-fade-in">
      <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-primary-600 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4 text-center">Filter & Sort</h3>
        {/* Category Filter */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Category</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => updateFilters({ category })}
                className={`px-3 py-1 rounded-full border ${filters.category === category ? 'bg-primary-600 text-white border-primary-600' : 'bg-gray-100 text-gray-700 border-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* Price Range Filter */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Price Range</h4>
          <select
            value={filters.priceRange}
            onChange={e => updateFilters({ priceRange: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            {priceRanges.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        {/* Dietary Filter */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Dietary</h4>
          <select
            value={filters.dietary}
            onChange={e => updateFilters({ dietary: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            {dietaryOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        {/* Sort Options */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Sort By</h4>
          <select
            value={filters.sortBy}
            onChange={e => updateFilters({ sortBy: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => {
            updateFilters({ category: 'All', priceRange: 'All', dietary: 'All', sortBy: 'name' });
            onClose();
          }}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 mt-2"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  const { 
    getFilteredMenu, 
    filters, 
    updateFilters, 
    addToCart, 
    cart, 
    getCartTotal, 
    clearCart 
  } = useRestaurant();
  
  const [showCart, setShowCart] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const filteredDishes = getFilteredMenu();

  const categories = ['All', 'Starter', 'Main', 'Dessert'];
  const priceRanges = [
    { label: 'All Prices', value: 'All' },
    { label: 'Under $15', value: '0-15' },
    { label: '$15 - $25', value: '15-25' },
    { label: 'Over $25', value: '25-100' }
  ];
  const dietaryOptions = [
    { label: 'All', value: 'All' },
    { label: 'Vegetarian', value: 'Vegetarian' },
    { label: 'Spicy', value: 'Spicy' }
  ];
  const sortOptions = [
    { label: 'Name A-Z', value: 'name' },
    { label: 'Price Low to High', value: 'price-low' },
    { label: 'Price High to Low', value: 'price-high' }
  ];

  const handleAddToCart = (dish) => {
    addToCart(dish);
    setShowCart(true);
  };

  const handleCheckout = () => {
    alert('Thank you for your order! This is a demo - in a real app, you would be redirected to payment.');
    clearCart();
    setShowCart(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold font-serif text-center mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, each crafted with passion and the finest ingredients
          </p>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="block md:hidden container mx-auto px-6 mt-4 mb-2">
        <button
          className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 text-lg shadow-md"
          onClick={() => setShowMobileFilter(true)}
        >
          <span className="material-symbols-outlined text-xl">tune</span>
          Filter & Sort
        </button>
      </div>
      <MobileFilterModal
        open={showMobileFilter}
        onClose={() => setShowMobileFilter(false)}
        filters={filters}
        updateFilters={updateFilters}
        categories={categories}
        priceRanges={priceRanges}
        dietaryOptions={dietaryOptions}
        sortOptions={sortOptions}
      />

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-4 md:gap-8">
          {/* Filters Sidebar (hidden on mobile) */}
          <div className="hidden md:block md:col-span-1 mb-4 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filters.category === category}
                        onChange={(e) => updateFilters({ category: e.target.value })}
                        className="mr-2 text-primary-600"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <select
                  value={filters.priceRange}
                  onChange={(e) => updateFilters({ priceRange: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  {priceRanges.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dietary Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Dietary</h4>
                <select
                  value={filters.dietary}
                  onChange={(e) => updateFilters({ dietary: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  {dietaryOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Sort By</h4>
                <select
                  value={filters.sortBy}
                  onChange={(e) => updateFilters({ sortBy: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => updateFilters({ 
                  category: 'All', 
                  priceRange: 'All', 
                  dietary: 'All', 
                  sortBy: 'name' 
                })}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="md:col-span-3">
            {/* Results Count */}
            <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <p className="text-gray-600">
                Showing {filteredDishes.length} of {filteredDishes.length} items
              </p>
              <button
                onClick={() => setShowCart(!showCart)}
                className="lg:hidden bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <span className="material-symbols-outlined text-lg">shopping_cart</span>
                <span>Cart ({cart.length})</span>
              </button>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDishes.map((dish) => (
                <DishCard 
                  key={dish.id} 
                  dish={dish} 
                  onAddToCart={() => handleAddToCart(dish)}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredDishes.length === 0 && (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-gray-400 text-6xl mb-4 block">search_off</span>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No dishes found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more options.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Cart Drawer */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-6 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Your Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">${item.price} x {item.quantity}</p>
                      </div>
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-lg">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Desktop Cart Sidebar - Only show when cart has items */}
      {cart.length > 0 && (
        <div className="hidden lg:block fixed right-0 top-0 h-full w-80 bg-white shadow-lg border-l z-40">
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Your Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          const newQuantity = Math.max(0, item.quantity - 1);
                          if (newQuantity === 0) {
                            // Remove item logic would go here
                          }
                        }}
                        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => {
                          // Add item logic would go here
                        }}
                        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-xl">${getCartTotal().toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 mb-2"
              >
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;