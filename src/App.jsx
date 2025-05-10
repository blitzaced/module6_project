import { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Mens Gel-Dedicate 8 Pickleball Shoes',
      price: '$64.95',
      description: 'Good stability and a flexible feel to keep your mind centered during the match.',
      styleClass: 'product-style-a',
    },
    {
      id: 2,
      name: 'Mens Game FlyteFoam Pickleball Shoes',
      price: '$72.85',
      description: 'A lightweight and flexible pickleball shoe versatile for all-court players.',
      styleClass: 'product-style-b',
    },
    {
      id: 3,
      name: 'Mens Jet Match Pickleball Shoes',
      price: '$145.57',
      description: 'Agility and extreme speed with maximum comfort and cushioning.',
      styleClass: 'product-style-c',
    },
  ]);

  return (
    <div className="app-container">
      <h1>Product Showcase</h1> 
      <ProductList products={products} />
    </div>
  );
}

export default App;
