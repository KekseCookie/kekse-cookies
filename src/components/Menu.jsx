import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../config';

export default function Menu({ cart, onAdd, onRemove, onCartClick }) {
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <section id="cardapio" className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="text-xs font-bold text-gold uppercase tracking-widest">Cardápio Digital</p>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-chocolate">Nossos Cookies Artesanais</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          <p className="text-sm md:text-base text-brown-light leading-relaxed">
            Feitos diariamente com manteiga noisette tostada e ingredientes selecionados de marcas de referência. Explore nossos sabores exclusivos e aproveite nossos descontos progressivos por quantidade!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] || 0}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          ))}
        </div>

        {/* Sticky Mobile Float Cart Reminder */}
        {totalItems > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={onCartClick}
              className="px-8 py-4 bg-gold hover:bg-gold-dark text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-3 text-sm md:text-base cursor-pointer"
            >
              <span>🛒</span>
              <span>Ver meu pedido ({totalItems} {totalItems === 1 ? 'item' : 'itens'})</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
