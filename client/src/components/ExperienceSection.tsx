import { useNavigate } from "react-router-dom";

export function ExperienceSection() {

  const navigate = useNavigate(); // Navigation dynamique

  return (
    /* Section Experience */
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mb-8 md:mb-0">
            <div>
              <img src="/assets/ex1.jpg" alt="Construction worker" className="w-full h-40 object-cover" />
            </div>
            <div>
              <img src="/assets/ex2.jfif" alt="Building project" className="w-full h-40 object-cover" />
            </div>
            <div>
              <img src="/assets/ex3.jfif" alt="Construction site" className="w-full h-40 object-cover" />
            </div>
            <div>
              <img src="/assets/ex4.jfif" alt="Building exterior" className="w-full h-40 object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="border-l-4 border-[#3498db] pl-4 mb-4">
              <span className="text-[#3498db] font-semibold">
                Notre Histoire et Notre Expérience
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-[#0a1e37]">20 Ans D'expériences</h2>
            <p className="text-gray-600 mb-6">
              Depuis plus de deux décennies, notre entreprise s'est imposée
              comme un leader dans le secteur de la construction. Nous avons
              acquis une expertise inégalée dans la réalisation de projets de
              toutes tailles, des résidences privées aux grands complexes
              commerciaux.
            </p>
            <p className="text-gray-600 mb-8">
              Notre équipe de professionnels qualifiés s'engage à fournir des
              services de construction de la plus haute qualité, en respectant
              les délais et les budgets convenus.
            </p>
            <button onClick={() => navigate("/about")} className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-6 py-3 rounded transition">
              En Savoir Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}