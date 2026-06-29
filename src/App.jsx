import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [cart, setCart] = useState({
    traditional: 0,
    red_velvet: 0,
    nutella: 0
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart actions
  const handleAddToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1
    }));
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      const currentQty = prevCart[productId] || 0;
      if (currentQty <= 1) {
        const newCart = { ...prevCart };
        delete newCart[productId];
        return newCart;
      }
      return {
        ...prevCart,
        [productId]: currentQty - 1
      };
    });
  };

  const handleClearCart = () => {
    setCart({
      traditional: 0,
      red_velvet: 0,
      nutella: 0
    });
  };

  const totalCartItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="bg-[#FAF7F2] text-[#3D251E] font-sans">
      <Navbar 
        cartCount={totalCartItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <Hero />
      
      <About />
      
      <Features />
      
      <Menu 
        cart={cart}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Testimonials />
      
      <Footer />
      
      <WhatsAppButton />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />
    </div>
  );
}
