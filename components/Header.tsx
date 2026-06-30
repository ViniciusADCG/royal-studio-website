'use client';
import { useState } from 'react';

export default function Header() {
  // Estado para controlar se o menu do telemóvel está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const whatsappNumber = "5567996157950"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar um horário.`;

  // Função para fechar o menu ao clicar num link
  const fecharMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logótipo */}
        <div className="flex-shrink-0">
          <span className="text-lg md:text-xl font-extrabold text-gray-900 tracking-tighter">
            Royal <span className="text-dourado-500">Studio</span>
          </span>
        </div>

        {/* Links de Navegação (Visíveis apenas no PC) */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-base font-semibold text-gray-800 hover:text-dourado-500 transition-colors">Início</a>
          <a href="#servicos" className="text-base font-semibold text-gray-800 hover:text-dourado-500 transition-colors">Serviços</a>
          <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-gray-800 hover:text-dourado-500 transition-colors">Catálogo</a>
          <a href="#sobre" className="text-base font-semibold text-gray-800 hover:text-dourado-500 transition-colors">Sobre Nós</a>
        </nav>

        {/* Agrupamos o Botão Agendar e o Ícone do Menu no telemóvel */}
        <div className="flex items-center space-x-3">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dourado-500 text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium hover:bg-dourado-600 transition-colors shadow-sm whitespace-nowrap"
          >
            Agendar
          </a>

          {/* Ícone do Menu Hambúrguer (Aparece apenas no telemóvel) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 p-1 focus:outline-none"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              // Ícone de "X" para fechar
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ícone de 3 riscas (Hambúrguer)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Suspenso do Telemóvel (Abre apenas se isMenuOpen for true) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-white border-b border-gray-100 shadow-lg pb-4 px-4 pt-2">
          <nav className="flex flex-col space-y-4">
            <a href="#inicio" onClick={fecharMenu} className="text-base font-medium text-gray-800 hover:text-dourado-500">Início</a>
            <a href="#servicos" onClick={fecharMenu} className="text-base font-medium text-gray-800 hover:text-dourado-500">Serviços</a>
            <a href="#sobre" onClick={fecharMenu} className="text-base font-medium text-gray-800 hover:text-dourado-500">Sobre Nós</a>
          </nav>
        </div>
      )}
    </header>
  );
}