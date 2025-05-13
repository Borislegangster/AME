import { useNavigate } from "react-router-dom";

export function ProjectShowcase() {

  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1e37]">
          Nos réalisations
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <img src="/assets/ex1.jpg" alt="Commercial center construction" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/3 bg-white p-8">
            <h3 className="text-2xl font-bold mb-4 text-[#0a1e37]">
              CENTRE COMMERCIALE DE LA PLACE EN
            </h3>
            <p className="text-gray-600 mb-6">
              Nous avons réalisé la construction complète de ce centre
              commercial moderne, comprenant 45 boutiques, un food court et un
              parking souterrain de 500 places. Le projet a été livré dans les
              délais et respecte les normes environnementales les plus strictes.
            </p>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Progression</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#3498db] h-2 rounded-full" style={{
                width: "80%"
              }}></div>
              </div>
            </div>
            <button onClick={() => navigate("/projects")} className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-5 py-2 rounded transition">
              En Savoir Plus
            </button>
          </div>
        </div>
        <div className="text-center mt-8">
          <button onClick={() => navigate("/projects")} className="border border-[#3498db] text-[#3498db] hover:bg-[#3498db] hover:text-white px-5 py-2 rounded transition">
            Voir autres réalisations
          </button>
        </div>
      </div>
    </section>
  );
}