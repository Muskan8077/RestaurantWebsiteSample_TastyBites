import React, { createContext, useContext, useReducer } from 'react';
import pizza from '../assets/Pizza.jpg';
import caesarSalad from '../assets/caesarSalad.jpg';
import chickenWings from '../assets/ChickenWings.jpg';
import grilledSalmon from '../assets/GrilledSalmon.jpg';
import burger from '../assets/Burger.jpg';
import chocolateLavaCake from '../assets/ChocolateLavaCake.jpg';
import tiramisu from '../assets/Tiramisu.jpg';
import pastaCarbonara from '../assets/PastaCarbonara.jpg';

const RestaurantContext = createContext();

const initialState = {
  menu: [
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'Main',
      price: 18.99,
      description: 'Fresh mozzarella, tomato sauce, and basil on our signature crust',
      image: pizza,
      popular: true,
      spicy: false,
      vegetarian: true
    },
    {
      id: 2,
      name: 'Caesar Salad',
      category: 'Starter',
      price: 12.99,
      description: 'Crisp romaine lettuce, parmesan cheese, croutons with caesar dressing',
      image: caesarSalad,
      popular: false,
      spicy: false,
      vegetarian: true
    },
    {
      id: 3,
      name: 'Spicy Chicken Wings',
      category: 'Starter',
      price: 14.99,
      description: 'Crispy wings tossed in our signature spicy sauce',
      image: chickenWings,
      popular: true,
      spicy: true,
      vegetarian: false
    },
    {
      id: 4,
      name: 'Grilled Salmon',
      category: 'Main',
      price: 28.99,
      description: 'Fresh Atlantic salmon with seasonal vegetables and lemon butter sauce',
      image: grilledSalmon,
      popular: false,
      spicy: false,
      vegetarian: false
    },
    {
      id: 5,
      name: 'Beef Burger',
      category: 'Main',
      price: 16.99,
      description: 'Angus beef patty with lettuce, tomato, cheese, and special sauce',
      image: burger,
      popular: true,
      spicy: false,
      vegetarian: false
    },
    {
      id: 6,
      name: 'Chocolate Lava Cake',
      category: 'Dessert',
      price: 8.99,
      description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
      image: chocolateLavaCake,
      popular: true,
      spicy: false,
      vegetarian: true
    },
    {
      id: 7,
      name: 'Tiramisu',
      category: 'Dessert',
      price: 9.99,
      description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
      image: tiramisu,
      popular: false,
      spicy: false,
      vegetarian: true
    },
    {
      id: 8,
      name: 'Pasta Carbonara',
      category: 'Main',
      price: 19.99,
      description: 'Spaghetti with eggs, cheese, pancetta, and black pepper',
      image: pastaCarbonara,
      popular: false,
      spicy: false,
      vegetarian: false
    }
  ],
  cart: [],
  reservations: [],
  filters: {
    category: 'All',
    priceRange: 'All',
    dietary: 'All',
    sortBy: 'name'
  }
};

const restaurantReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };

    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [...state.reservations, action.payload]
      };

    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };

    default:
      return state;
  }
};

export const RestaurantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addReservation = (reservation) => {
    dispatch({ type: 'ADD_RESERVATION', payload: reservation });
  };

  const updateFilters = (filters) => {
    dispatch({ type: 'UPDATE_FILTERS', payload: filters });
  };

  const getCartTotal = () => {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  };

  const getFilteredMenu = () => {
    let filtered = [...state.menu];

    // Category filter
    if (state.filters.category !== 'All') {
      filtered = filtered.filter(item => item.category === state.filters.category);
    }

    // Price range filter
    if (state.filters.priceRange !== 'All') {
      const [min, max] = state.filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(item => {
        if (max) {
          return item.price >= min && item.price <= max;
        }
        return item.price >= min;
      });
    }

    // Dietary filter
    if (state.filters.dietary === 'Vegetarian') {
      filtered = filtered.filter(item => item.vegetarian);
    } else if (state.filters.dietary === 'Spicy') {
      filtered = filtered.filter(item => item.spicy);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (state.filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addReservation,
    updateFilters,
    getCartTotal,
    getCartCount,
    getFilteredMenu
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
}; 