export default function Footer() {
  return (
    <footer id="sobre" className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grade do Rodapé (1 coluna no telemóvel, 3 no PC) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tighter">
              <span className="text-dourado-600">Royal</span>Studio
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas em realçar a sua beleza natural com exclusividade e excelência em cada detalhe.
            </p>
          </div>

          {/* Coluna 2: Contactos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Atendimento e Localização
            </h4>
            <p className="text-gray-300 text-sm mb-2">📞 WhatsApp: (67) 99615-7950</p>
            <p className="text-gray-300 text-sm mb-2">📍 Rua Yokoama, 483 - Vila Palmira</p>
            <p className="text-gray-300 text-sm">⏰ Segunda a Sábado: 09h às 18h</p>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Siga-nos
            </h4>
            <a 
              href="https://www.instagram.com/studiogiovannaholsbach/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dourado-400 hover:text-dourado-300 text-sm font-medium transition-colors"
            >
              @studiogiovannaholsbach
            </a>
          </div>

        </div>

        {/* Direitos de Autor */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Royal Studio . Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-4 md:mt-0">
            Developed by Vinicius Araujo
          </p>
        </div>

      </div>
    </footer>
  );
}