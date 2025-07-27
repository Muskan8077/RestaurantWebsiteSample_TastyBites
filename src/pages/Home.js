import React from 'react';
import { Link } from 'react-router-dom';
import { useRestaurant } from '../context/RestaurantContext';
import aboutRestaurant from '../assets/AboutRestuarant.jpg';
const Home = () => {
  const { menu } = useRestaurant();
  const featuredDishes = menu.filter(dish => dish.popular).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">
            Welcome to <span className="text-primary-400">TastyBites</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience culinary excellence with our handcrafted dishes, made with the finest ingredients and served with passion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/menu" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Our Menu
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-gray-600">Fresh food prepared and served within 15 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Locally sourced, organic ingredients for the best taste</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for culinary excellence and innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Featured Dishes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular dishes, crafted with passion and served with love
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">${dish.price}</span>
                    <Link 
                      to="/menu" 
                      className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, TastyBites began as a small family restaurant with a big dream: to serve exceptional food that brings people together. Our journey started in a cozy kitchen with recipes passed down through generations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we continue to honor those traditions while embracing modern culinary techniques, creating dishes that are both comforting and innovative.
              </p>
              <Link 
                to="/about" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img 
                src={aboutRestaurant} 
                alt="Family Owned Restaurant" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience TastyBites?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Book your table today and discover why we're the talk of the town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Table
            </Link>
            <Link 
              to="/menu" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;