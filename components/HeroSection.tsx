export default function HeroSection() {
  const whatsappNumber = "5567996157950"; 
  const mensagem = "Olá! Acessei o site e gostaria de agendar um horário no Royal Studio.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

  return (
    <section className="relative bg-transparent overflow-hidden">
      
      {/* A Mágica do Brilho: 
        Adicionamos um elemento absoluto bem no centro que emite uma luz branca desfocada. 
        O -z-10 garante que ele fique atrás das letras.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[50%] h-[80%] bg-white/70 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
        
        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Realce a sua beleza com <span className="text-dourado-500">exclusividade</span>
        </h1>
        
        {/* Subtítulo com texto ligeiramente mais escuro (text-gray-700) para contrastar melhor com o brilho */}
        <p className="mt-4 text-lg sm:text-xl text-gray-700 font-medium max-w-2xl mb-10 leading-relaxed">
          Especialistas em extensão de cílios, design de sobrancelhas e alongamento de unhas. Sinta-se única e renovada em cada detalhe com um atendimento de excelência.
        </p>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dourado-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dourado-600 transition-all duration-300 shadow-lg hover:shadow-dourado-500/30 hover:-translate-y-1"
        >
          Agende seu Horário
        </a>
      </div>
    </section>
  );
}