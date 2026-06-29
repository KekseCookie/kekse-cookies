import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../config';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#FCFAF7] border-t border-chocolate/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="text-xs font-bold text-gold uppercase tracking-widest">Opinião de Quem Ama</p>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-chocolate">O que dizem sobre nossos cookies</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          <p className="text-sm md:text-base text-brown-light leading-relaxed">
            Nada nos traz mais alegria do que adoçar a rotina dos nossos clientes. Veja a opinião de quem já experimentou e se apaixonou.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-xl border border-beige/40 flex flex-col justify-between hover-gold-shadow transition-all duration-300 relative"
            >
              {/* Quote Mark Ornament */}
              <span className="absolute top-4 right-6 text-6xl text-gold/10 font-serif pointer-events-none select-none">“</span>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1 text-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                  ))}
                </div>

                <p className="text-sm text-chocolate leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 mt-6 border-t border-chocolate/5 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center font-bold text-chocolate font-serif text-sm">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-chocolate">{review.name}</h4>
                  <p className="text-[10px] text-brown-light uppercase tracking-wider font-semibold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
