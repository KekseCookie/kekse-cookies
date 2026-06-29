import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onCartClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-3xl md:text-4xl font-serif font-bold text-chocolate tracking-wide hover:opacity-90 transition-opacity"
        >
          Kekse<span className="text-gold">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-sm font-medium text-chocolate hover:text-gold transition-colors tracking-widest uppercase">Início</a>
          <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="text-sm font-medium text-chocolate hover:text-gold transition-colors tracking-widest uppercase">Sobre</a>
          <a href="#cardapio" onClick={(e) => handleNavClick(e, 'cardapio')} className="text-sm font-medium text-chocolate hover:text-gold transition-colors tracking-widest uppercase">Cardápio</a>
          <a href="#depoimentos" onClick={(e) => handleNavClick(e, 'depoimentos')} className="text-sm font-medium text-chocolate hover:text-gold transition-colors tracking-widest uppercase">Avaliações</a>
        </div>

        {/* Cart Icon & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onCartClick}
            className="relative p-2 text-chocolate hover:text-gold transition-colors focus:outline-none"
            aria-label="Ver Carrinho"
          >
            <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-chocolate hover:text-gold transition-colors focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream/95 backdrop-blur-md shadow-lg border-b border-chocolate/5 flex flex-col items-center py-6 space-y-4 animate-fade-in-up">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-base font-semibold text-chocolate hover:text-gold transition-colors">Início</a>
          <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')} className="text-base font-semibold text-chocolate hover:text-gold transition-colors">Sobre</a>
          <a href="#cardapio" onClick={(e) => handleNavClick(e, 'cardapio')} className="text-base font-semibold text-chocolate hover:text-gold transition-colors">Cardápio</a>
          <a href="#depoimentos" onClick={(e) => handleNavClick(e, 'depoimentos')} className="text-base font-semibold text-chocolate hover:text-gold transition-colors">Avaliações</a>
        </div>
      )}
    </nav>
  );
}
