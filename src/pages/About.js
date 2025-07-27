import React from 'react';
import aboutRestaurant from '../assets/AboutRestuarant.jpg';
import marioRossi from '../assets/MarioRossi.jpg';
import sarahJohnson from '../assets/SarahJohnson.jpg';
import tomChen from '../assets/TomChen.jpg';
import mariaGarcia from '../assets/MariaGarcia.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Chef Mario Rossi',
      position: 'Head Chef',
      image: marioRossi,
      bio: 'With over 15 years of culinary experience, Chef Mario brings his passion for authentic Italian cuisine to every dish.',
      specialties: ['Italian Cuisine', 'Pasta Making', 'Sauce Crafting']
    },
    {
      name: 'Sarah Johnson',
      position: 'Restaurant Manager',
      image: sarahJohnson,
      bio: 'Sarah ensures every guest receives exceptional service and a memorable dining experience.',
      specialties: ['Customer Service', 'Operations', 'Team Leadership']
    },
    {
      name: 'Tom Chen',
      position: 'Sous Chef',
      image: tomChen,
      bio: 'Tom specializes in Asian fusion cuisine and brings innovative techniques to our kitchen.',
      specialties: ['Asian Fusion', 'Sushi', 'Modern Techniques']
    },
    {
      name: 'Maria Garcia',
      position: 'Pastry Chef',
      image: mariaGarcia,
      bio: 'Maria creates stunning desserts that are both beautiful and delicious, using traditional French techniques.',
      specialties: ['French Pastries', 'Chocolate Work', 'Cake Decorating']
    }
  ];

  const awards = [
    { year: '2023', title: 'Best Fine Dining Restaurant', organization: 'City Food Awards' },
    { year: '2022', title: 'Chef of the Year', organization: 'Culinary Excellence Society' },
    { year: '2021', title: 'Most Innovative Menu', organization: 'Restaurant Industry Association' },
    { year: '2020', title: 'Best New Restaurant', organization: 'Local Business Awards' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: '#b0d4f8ff' }}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold font-serif mb-6 text-white drop-shadow-lg">About TastyBites</h1>
          <p className="text-xl max-w-3xl mx-auto text-white drop-shadow-lg">
            Discover the story behind our passion for exceptional dining and the team that makes it all possible
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, TastyBites began as a small family restaurant with a big dream: to serve exceptional food that brings people together. Our journey started in a cozy kitchen with recipes passed down through generations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a humble family venture has grown into one of the city's most beloved dining destinations. We've maintained our commitment to quality, authenticity, and warm hospitality while expanding our culinary horizons.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to honor those traditions while embracing modern culinary techniques, creating dishes that are both comforting and innovative. Every plate tells a story, and every meal is an opportunity to create lasting memories.
              </p>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={aboutRestaurant} 
                  alt="TastyBites Restaurant" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <p className="text-sm text-gray-600 font-medium">Est. 2020</p>
                    <p className="font-bold text-lg text-gray-800">Family Owned & Operated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to creating exceptional dining experiences through quality, innovation, and genuine hospitality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary-600 text-2xl">favorite</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source only the finest ingredients and maintain the highest standards in every dish we serve.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-secondary-600 text-2xl">groups</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in building strong relationships with our guests, suppliers, and local community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-accent-600 text-2xl">bolt</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new techniques and flavors while respecting traditional culinary foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented team of culinary professionals is dedicated to creating unforgettable dining experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx} 
                          className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Awards & Recognition</h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We're honored to have received recognition for our commitment to culinary excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary-200 mb-2">{award.year}</div>
                <h3 className="font-semibold mb-2">{award.title}</h3>
                <p className="text-primary-200 text-sm">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">Join Us for an Experience</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to taste the difference? Book your table today and experience the passion, creativity, and warmth that makes TastyBites special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Table
            </a>
            <a 
              href="/menu" 
              className="bg-white hover:bg-gray-100 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;