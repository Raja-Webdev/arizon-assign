# E-Commerce Shopping Cart

A modern, responsive e-commerce application built with React, featuring product listings, cart functionality, and smooth navigation.

## Features

- Browse products from FakeStoreAPI
- Add/remove items from cart
- View cart with item quantities and total price
- Responsive design for all screen sizes
- Clean, modern UI with Tailwind CSS
- Error handling for API failures

## Technologies Used

- React.js
- React Router
- Context API (State Management)
- Tailwind CSS
- Axios (API calls)
- React Icons
- React Spinners

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-shopping-cart.git
   cd ecommerce-shopping-cart
   

2. Install dependencies:

   npm install
    # or
    yarn install

3. Start the development server:

    npm start
    # or
    yarn start

4. Open your browser at:

    http://localhost:5173


### API Usage
The application fetches product data from:   

    https://fakestoreapi.com/products

### Folder Structure

/src
|-- /components
|   |-- CartItem.jsx       # Individual cart item component
|   |-- EmptyCart.jsx      # Empty cart state component
|   |-- Header.jsx         # Navigation header
|   |-- Loader.jsx         # Loading spinner
|   |-- ProductItem.jsx    # Product card component
|-- /context
|   |-- ProductContext.js  # Global state management
|-- /pages
|   |-- Cart.jsx           # Cart page
|   |-- Home.jsx           # Home page
|   |-- NotFound.jsx       # 404 page
|   |-- Products.jsx       # Products listing page
|-- App.js                 # Main app with routes
|-- index.js               # Entry point



## Implementation Details
Routing: Implemented with React Router for seamless navigation between Home, Products, and Cart pages

State Management: Used Context API to manage global state (products and cart items)

UI Components: Created reusable components (ProductItem, CartItem, Header, etc.)

Responsive Design: Ensured the application works well on all screen sizes

Error Handling: Implemented error states and retry mechanism for API failures

### Assumptions
API Reliability: Assumed the FakeStoreAPI would be generally available and return consistent data

User Flow: Designed for a simple shopping flow (browse → add to cart → checkout)

Checkout Process: Simplified checkout to just an alert as it wasn't the focus of this assignment

Product Data: Assumed all products would have consistent data structure from the API

Performance: Didn't implement advanced optimizations like lazy loading or pagination due to the small dataset

Authentication: Didn't implement user authentication as it wasn't required

Browser Support: Targeted modern browsers with ES6+ support

## Future Improvements
Implement a proper checkout process with payment integration

Add user authentication and account management

Implement product search and filtering

Add product categories and more detailed product pages

Improve loading states with skeletons

Add persistent cart using localStorage

Implement proper error boundaries

Add unit and integration tests

# Happy Shopping! 🛍️
Built with ❤️ by [RajaXCoder]