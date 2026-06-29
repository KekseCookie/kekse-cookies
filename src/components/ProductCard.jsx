import React from 'react';
import { Plus, Minus, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, quantity, onAdd, onRemove }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-beige/40 hover-gold-shadow transition-all duration-300 flex flex-col h-full group">
      
      {/* Product Image Container */}
      <div className="relative overflow-hidden aspect-square bg-[#FAF7F2]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Floating Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {product.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-[9px] font-bold bg-chocolate/90 text-cream px-2 py-1 rounded tracking-wider uppercase backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-chocolate font-serif">{product.name}</h3>
          <p className="text-xs text-brown-light leading-relaxed line-clamp-3 min-h-[54px]">
            {product.description}
          </p>
        </div>

        {/* Pricing Tiers (Tabular or clean bullet styling for premium feel) */}
        <div className="bg-[#FAF7F2] p-3 rounded-lg border border-beige/50">
          <p className="text-[10px] font-bold text-gold uppercase tracking-wider mb-1.5">Tabela de Preços</p>
          <div className="flex flex-col gap-1">
            {product.pricingText.map((tier, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs">
                <span className="text-brown-light">{tier.label}:</span>
                <span className="font-bold text-chocolate">
                  R$ {tier.price.toFixed(2).replace('.', ',')}
                  {tier.isEach ? ' cada' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button / Quantity Selector */}
        <div className="pt-2 mt-auto">
          {quantity === 0 ? (
            <button
              onClick={() => onAdd(product.id)}
              className="w-full py-3 bg-chocolate hover:bg-brown-light text-cream font-bold text-sm rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-sm hover:shadow btn-premium"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Adicionar ao Pedido</span>
            </button>
          ) : (
            <div className="flex items-center justify-between bg-chocolate text-cream rounded-lg overflow-hidden p-1 shadow-sm">
              <button
                onClick={() => onRemove(product.id)}
                className="p-2 hover:bg-white/10 rounded transition-colors focus:outline-none"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>
              
              <span className="font-bold text-sm select-none">
                {quantity} {quantity === 1 ? 'unidade' : 'unidades'}
              </span>

              <button
                onClick={() => onAdd(product.id)}
                className="p-2 hover:bg-white/10 rounded transition-colors focus:outline-none"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
