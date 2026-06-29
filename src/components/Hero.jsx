import React from 'react';
import heroImg from '../assets/hero_cookies.jpg';

export default function Hero() {
  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const element = document.getElementById('cardapio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#F3EDE2] to-[#FAF7F2]">
      
      {/* Decorative Ornaments (Blurry blobs for premium feel) */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-chocolate/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-chocolate/5 border border-chocolate/10 text-chocolate text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
            <span>Confeitaria Gourmet</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-black text-chocolate leading-tight">
            Momentos doces, <br/>
            <span className="gold-text-gradient">cookies únicos.</span>
          </h1>

          <p className="text-base md:text-lg text-brown-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            Cookies artesanais feitos para transformar pequenos momentos em grandes experiências. Ingredientes selecionados, massa amanteigada e textura perfeita.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#cardapio"
              onClick={handleScrollToMenu}
              className="btn-premium px-8 py-4 bg-chocolate text-cream font-bold rounded-lg shadow-lg hover:bg-brown-light hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center"
            >
              Fazer Pedido
            </a>
            <a 
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent text-chocolate border border-chocolate/20 font-bold rounded-lg hover:bg-chocolate/5 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Nossa História
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center animate-fade-in-up animation-delay-200">
          <div className="relative group w-full max-w-lg">
            
            {/* Elegant framing border */}
            <div className="absolute -inset-4 rounded-2xl border border-gold/20 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            
            {/* Subtle shadow glow */}
            <div className="absolute inset-0 bg-chocolate/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            
            {/* The Image itself */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <img 
                src={heroImg} 
                alt="Cookies artesanais premium da Kekse" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 aspect-[4/3] lg:aspect-auto"
                loading="eager"
              />
            </div>
            
            {/* Floating Detail Badges */}
            <div className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-lg shadow-xl flex items-center space-x-2 border border-beige animate-bounce animation-delay-600">
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-[10px] text-brown-light uppercase tracking-widest font-bold">Forno Diário</p>
                <p className="text-xs text-chocolate font-bold">Sempre Fresquinhos</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-lg shadow-xl flex items-center space-x-2 border border-beige animate-bounce">
              <span className="text-2xl">🍫</span>
              <div>
                <p className="text-[10px] text-brown-light uppercase tracking-widest font-bold">Qualidade</p>
                <p className="text-xs text-chocolate font-bold">Marcas de Referência</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
