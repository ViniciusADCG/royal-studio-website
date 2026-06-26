import { ServiceData } from "../types/service";

interface ServiceCardProps {
  service: ServiceData;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Lembre-se de substituir pelo WhatsApp real (DDD 67 + Número)
  const whatsappNumber = "5567996157950"; 
  const mensagem = `Olá! Gostaria de agendar ou saber mais sobre o serviço de *${service.title}*.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

  return (
    // Adicionamos overflow-hidden para a imagem não sair fora das bordas arredondadas
    <div className="bg-white rounded-2xl shadow-lg border border-dourado-50 border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full overflow-hidden">
      
      {/* ÁREA DA IMAGEM (Só aparece se você colocar o link da foto nos dados) */}
      {service.imageUrl && (
        <div className="w-full h-64 sm:h-92 overflow-hidden bg-gray-100">
          <img 
            src={service.imageUrl} 
            alt={`Foto ilustrativa: ${service.title}`}
            // object-cover garante que a foto preencha o espaço sem amassar ou distorcer
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* ÁREA DO TEXTO E BOTÃO */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
          <span className="text-sm font-medium text-dourado-600">
            {service.duration || "Duração sob consulta"}
          </span>
          
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-dourado-600 text-white px-5 py-2.5 rounded-full hover:bg-dourado-700 transition-colors font-medium text-center shadow-lg"
          >
            Agendar
          </a>
        </div>
      </div>
    </div>
  );
}