import React from 'react';
import { Sparkles, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#FCFAF7] border-y border-chocolate/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-xs font-bold text-gold uppercase tracking-widest">Nossa Essência</p>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-chocolate">A História por trás da Kekse</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          <p className="text-base md:text-lg text-brown-light leading-relaxed font-serif italic pt-2">
            "A Kekse nasceu com o propósito de criar cookies únicos, combinando técnicas artesanais, ingredientes selecionados e sabores marcantes."
          </p>
        </div>

        {/* Pillars / Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-[#FAF7F2] p-8 rounded-xl border border-beige/40 hover-gold-shadow transition-all duration-300 text-center space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
              <Sparkles className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-bold text-chocolate font-serif">Produção Artesanal</h3>
            <p className="text-sm text-brown-light leading-relaxed">
              Cada cookie é modelado à mão e assado em pequenas fornadas para garantir a qualidade ideal, o frescor incomparável e o carinho em cada detalhe.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#FAF7F2] p-8 rounded-xl border border-beige/40 hover-gold-shadow transition-all duration-300 text-center space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
              <Heart className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-bold text-chocolate font-serif">Textura Perfeita</h3>
            <p className="text-sm text-brown-light leading-relaxed">
              Desenvolvemos uma receita exclusiva que alcança o equilíbrio ideal: bordas levemente crocantes e um centro incrivelmente macio e úmido.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#FAF7F2] p-8 rounded-xl border border-beige/40 hover-gold-shadow transition-all duration-300 text-center space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
              <Award className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-bold text-chocolate font-serif">Ingredientes Premium</h3>
            <p className="text-sm text-brown-light leading-relaxed">
              Trabalhamos exclusivamente com ingredientes de altíssima qualidade: manteiga noisette, extrato natural de baunilha e chocolates finos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
