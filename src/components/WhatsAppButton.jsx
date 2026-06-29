import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../config';

export default function WhatsAppButton() {
  const handleClick = () => {
    const cleanPhone = WHATSAPP_NUMBER.replace(/\D/g, '');
    const message = encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre os cookies da Kekse.");
    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-30 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center cursor-pointer group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-out text-xs font-bold uppercase tracking-wider whitespace-nowrap">
        Dúvidas? Fale Conosco
      </span>
    </button>
  );
}
