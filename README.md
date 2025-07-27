<<<<<<< HEAD
# TastyBites Restaurant Website

A modern, responsive restaurant website built with React.js, featuring online ordering, reservations, and a beautiful user interface.

## 🍽️ Features

### Core Features
- **Home Page**: Hero section with call-to-action buttons, featured dishes, and restaurant story
- **Menu Page**: Comprehensive menu with filtering, sorting, and cart functionality
- **About Page**: Restaurant story, mission, team profiles, and awards
- **Contact Page**: Contact form, reservation system, and location information
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)

### Technical Features
- **React.js**: Modern React with hooks and functional components
- **React Router**: Client-side routing for seamless navigation
- **Context API**: State management for cart, reservations, and menu data
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### Advanced Features
- **Online Ordering System**: Add items to cart, manage quantities, checkout
- **Reservation System**: Book tables with date/time selection and special requests
- **Menu Filtering**: Filter by category, price range, dietary preferences
- **Menu Sorting**: Sort by name, price (low to high, high to low)
- **Cart Management**: Persistent cart with quantity controls
- **Form Validation**: Client-side validation for all forms
- **Loading States**: Smooth loading animations and feedback

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd restaurant-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
restaurant-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation component with cart
│   │   ├── DishCard.js        # Individual dish display
│   │   └── Footer.js          # Footer with links and info
│   ├── context/
│   │   └── RestaurantContext.js # State management
│   ├── pages/
│   │   ├── Home.js            # Home page with hero and features
│   │   ├── Menu.js            # Menu with filtering and cart
│   │   ├── About.js           # About page with team and story
│   │   └── Contact.js         # Contact and reservation forms
│   ├── App.js                 # Main app component with routing
│   ├── index.js               # App entry point
│   └── index.css              # Global styles and Tailwind
├── tailwind.config.js         # Tailwind CSS configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Red (#dc2626) - Brand color for buttons and accents
- **Secondary**: Green (#16a34a) - Success states and positive actions
- **Accent**: Yellow (#eab308) - Highlights and special elements
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Playfair Display (serif) for elegant titles
- **Body**: Inter (sans-serif) for readable content
- **Font Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Consistent styling with hover effects
- **Cards**: Shadow-based elevation system
- **Forms**: Clean, accessible form design
- **Navigation**: Fixed header with mobile menu

## 🔧 Customization

### Adding New Menu Items
Edit the `menu` array in `src/context/RestaurantContext.js`:

```javascript
{
  id: 9,
  name: 'New Dish Name',
  category: 'Main',
  price: 24.99,
  description: 'Description of the dish',
  image: 'image-url',
  popular: false,
  spicy: false,
  vegetarian: true
}
```

### Modifying Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#your-color',
    // ... other shades
  }
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`
3. Update navigation in `src/components/Navbar.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly buttons and forms
- Optimized image loading
- Mobile-first cart interface

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 19.1.0
- **Routing**: React Router DOM 7.7.1
- **Styling**: Tailwind CSS 4.1.11
- **State Management**: React Context API
- **Build Tool**: Create React App
- **Package Manager**: npm

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email info@tastybites.com or create an issue in the repository.

## 🎯 Future Enhancements

- [ ] Payment gateway integration
- [ ] User authentication and accounts
- [ ] Order tracking system
- [ ] Customer reviews and ratings
- [ ] Blog section for recipes and news
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] PWA capabilities
- [ ] Real-time order updates
- [ ] Integration with delivery services

---

**Built with ❤️ for TastyBites Restaurant**
=======
# Restaurant-Website-TastyBites-
>>>>>>> bda19263f6857dab05902fb05d3de5c456c701b0
