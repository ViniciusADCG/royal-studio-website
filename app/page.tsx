import ServiceCard from "../components/ServiceCard";
import HeroSection from "../components/HeroSection";
import { ServiceData } from "../types/service";
import CatalogoBanner from '@/components/CatalogoBanner'; 
import LeadCapture from "../components/LeadCapture";

const studioServices: ServiceData[] = [
  {
    id: "extensao-cilios",
    title: "Extensão de Cílios",
    description: "Técnica personalizada para realçar o seu olhar com máximo conforto, isolamento perfeito e naturalidade.",
    duration: "1h ",
    imageUrl: "/ciliosaproximado.jpeg"
  },
  {
    id: "design-sobrancelha",
    title: "Design de Sobrancelha",
    description: "Alinhamento personalizado para o seu formato de rosto, disponível com ou sem a aplicação de henna.",
    duration: "1h",
    imageUrl: "/sobrancelha.jpeg"
  },
  {
    id: "alongamento-unhas",
    title: "Alongamento de Unhas",
    description: "Unhas impecáveis, resistentes e com acabamento fino e natural utilizando técnicas profissionais.",
    duration: "1h 30min",
    imageUrl: "/alongamentofoto.jpg"
  },
  {
    id: "Brow lamination",
    title: "Brow Lamination",
    description: "Tratamento que define e alinha as sobrancelhas, proporcionando um visual mais definido e duradouro.",
    duration: "1h 30min",
    imageUrl: "/brow.jpeg"
  },
  {
    id: "Lash Lifting",
    title: "Lash Lifting",
    description: "Tratamento que define e alinha os cílios, proporcionando um visual mais definido e duradouro.",
    duration: "1h ",
    imageUrl: "/lashli.jpeg"
  },
  {
    id: "curso-cilios-led",
    title: "Curso: Extensão de Cílios (LED UV)",
    description: "Domine o método avançado de secagem imediata. Treinamento completo tanto para iniciantes quanto para aperfeiçoamento de profissionais.",
    duration: "Sob consulta",
    imageUrl: "/curso.jpg"
  }
];

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen bg-transparent flex flex-col"> 
      
      {/* O Topo do Site */}
      <HeroSection />
      
        {/* Seção de Serviços */}
        <div id="servicos" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-md flex-grow border-y border-white/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-base text-dourado-600 font-semibold tracking-wide uppercase">
              Royal Studio
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nossos Serviços e Procedimentos
            </p>
          </div>

          {/* Grade responsiva (1 coluna no celular, 2 no tablet, 3 no PC) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studioServices.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))}
          </div>

        </div>
      </div>

      {/* ... Fechamento da Seção de Cards de Serviços ... */}
      
      <CatalogoBanner />

      {/* ... Abertura da Seção de Captura (Ganhe 10% de desconto) ... */}

      {/* Seção de Captura de Leads */}
      <LeadCapture/>

    </main>
  );
}