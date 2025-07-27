import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRestaurant } from '../context/RestaurantContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useRestaurant();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 font-serif flex items-center gap-1">
              <span className="material-symbols-outlined align-middle text-gray-800 text-2xl" style={{fontVariationSettings: '"FILL" 1, "wght" 700', verticalAlign: 'middle', marginRight: '0.25rem'}}>restaurant</span>
              TastyBites
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Menu
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link to="/menu" className="relative">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">shopping_cart</span>
              </div>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;