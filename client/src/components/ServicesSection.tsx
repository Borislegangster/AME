import { useNavigate } from "react-router-dom";

export function ServicesSection() {

  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1e37]">
          Nos prèstations de services
        </h2>
        <div className="flex flex-col md:flex-row mb-12">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src="/assets/serv1.jfif" alt="Construction worker" className="w-full h-64 object-cover" />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-semibold text-[#0a1e37] mb-4">
              Construction De Bâtiment
            </h3>
            <p className="text-gray-600 mb-6">
              Notre service de construction de bâtiment comprend la réalisation
              de projets résidentiels, commerciaux et industriels. Nous
              utilisons des matériaux de qualité supérieure et des techniques de
              construction modernes pour garantir des structures durables,
              respectueuses de l'environnement et adaptées à vos besoins.
            </p>
            <button onClick={() => navigate("/services")} className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-5 py-2 rounded transition">
              En savoir plus
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse mb-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src="/assets/serv2.jfif" alt="Architectural design" className="w-full h-64 object-cover" />
          </div>
          <div className="w-full md:w-2/3 md:pr-8">
            <h3 className="text-2xl font-semibold text-[#0a1e37] mb-4">
              Conception Architecturale
            </h3>
            <p className="text-gray-600 mb-6">
              Nous offrons des services de conception architecturale pour créer
              des plans architecturaux parfaits et fonctionnels. Notre équipe
              d'architectes expérimentés travaille en étroite collaboration avec
              vous pour transformer vos idées en projets architecturaux.
            </p>
            <button onClick={() => navigate("/services")} className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-5 py-2 rounded transition">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}