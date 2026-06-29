import React from 'react';
import { ChefHat, Leaf, Flame, Sparkles } from 'lucide-react';

export default function Features() {
  const benefits = [
    {
      icon: <Flame className="w-5 h-5" />,
      title: "Manteiga Noisette",
      description: "Tostamos a manteiga lentamente até dourar, liberando um aroma irresistível de avelãs tostadas e profundidade de sabor à massa."
    },
    {
      icon: <ChefHat className="w-5 h-5" />,
      title: "Marcas de Referência",
      description: "Trabalhamos exclusivamente com insumos de marcas líderes do mercado confeiteiro, garantindo um produto final de alto padrão."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Maturação de 24 horas",
      description: "Deixamos nossa massa descansar sob refrigeração controlada para que os sabores se fundam e a textura asse perfeitamente."
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Zero Conservantes",
      description: "Acreditamos na confeitaria honesta. Nossos cookies são feitos de forma 100% natural, livres de aditivos químicos ou essências artificiais."
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-bold text-gold uppercase tracking-widest">Diferenciais</p>
            <h2 className="text-4xl font-serif font-black text-chocolate leading-tight">Por que escolher a Kekse?</h2>
            <p className="text-brown-light leading-relaxed text-sm md:text-base">
              Nossos cookies unem receitas tradicionais com técnicas de alta confeitaria. Cada etapa, desde a pesagem dos ingredientes selecionados até o tempo de repouso da massa, é executada com absoluto cuidado e precisão.
            </p>
            <div className="pt-2">
              <div className="w-1/3 h-0.5 bg-gold"></div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-beige/40 hover:border-gold/30 hover:shadow-lg transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-chocolate font-serif">{benefit.title}</h3>
                <p className="text-xs text-brown-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
