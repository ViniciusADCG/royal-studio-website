import React from 'react';

export default function CatalogoBanner() {
  return (
    <section className="w-full bg-white/70 backdrop-blur-md border border-white/50 py-16 flex justify-center items-center px-4 relative z-10">
      <div className="max-w-5xl w-full bg-white/60 backdrop-blur-md border border-[#c39a52]/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-sm">
        
        <div className="text-center md:text-left mb-6 md:mb-0 md:mr-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            Catálogo de Procedimentos 
          </h2>
          <p className="text-slate-600 max-w-xl text-sm md:text-base">
            Visualize nosso catálogo digital completo e descubra todas as técnicas, valores e procedimentos exclusivos que preparamos para realçar a sua beleza.
          </p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <a
            href="/catalogo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#c39a52] hover:bg-[#a68040] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto"
          >
            {/* Ícone de documento (SVG nativo, sem precisar instalar bibliotecas) */}
            <svg 
              className="w-5 h-5 mr-2 -ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Visualizar Catálogo
          </a>
        </div>

      </div>
    </section>
  );
}