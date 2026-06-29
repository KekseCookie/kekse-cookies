import React from 'react';

export default function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-chocolate text-cream pt-16 pb-8 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand Info */}
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-3xl font-serif font-black text-cream">Kekse<span className="text-gold">.</span></h3>
          <p className="text-xs text-cream/70 leading-relaxed max-w-sm">
            Transformando pequenos momentos em grandes experiências através da alta confeitaria artesanal de cookies gourmet.
          </p>
          <div className="flex space-x-4 pt-2">
            <a 
              href="https://instagram.com/kekse.cookie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cream/70 hover:text-gold transition-colors text-xs font-bold uppercase tracking-wider"
            >
              @kekse.cookie
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gold uppercase tracking-widest">Navegação</h4>
          <ul className="space-y-2 text-xs text-cream/70">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-gold transition-colors">Início</a>
            </li>
            <li>
              <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="hover:text-gold transition-colors">Sobre</a>
            </li>
            <li>
              <a href="#cardapio" onClick={(e) => handleNavClick(e, 'cardapio')} className="hover:text-gold transition-colors">Cardápio</a>
            </li>
            <li>
              <a href="#depoimentos" onClick={(e) => handleNavClick(e, 'depoimentos')} className="hover:text-gold transition-colors">Avaliações</a>
            </li>
          </ul>
        </div>

        {/* Operating Hours */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gold uppercase tracking-widest">Funcionamento</h4>
          <div className="space-y-1 text-xs text-cream/70 leading-relaxed">
            <p><strong>Segunda a Sábado:</strong> 10h às 19h</p>
            <p><strong>Domingos e Feriados:</strong> Fechado</p>
            <p className="pt-2 text-gold italic text-[11px]">Pedidos via WhatsApp com agendamento</p>
          </div>
        </div>

      </div>

      {/* Copyright Notice */}
      <div className="max-w-7xl mx-auto px-6 border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-cream/50 space-y-4 sm:space-y-0">
        <p>© 2026 Kekse. Todos os direitos reservados.</p>
        <p className="flex items-center space-x-1">
          <span>Feito com</span>
          <span className="text-red-500">❤️</span>
          <span>para amantes de cookies.</span>
        </p>
      </div>
    </footer>
  );
}
