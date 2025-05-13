import { UserIcon, AwardIcon, PhoneIcon } from "lucide-react";
export function FeaturesSection() {
  return (
    /* Section de fidelisation */
    <section className="bg-[#3498db] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex p-6 hover:bg-blue-600 transition">
          <div className="mr-4">
            <div className="bg-white p-3 rounded-full">
              <UserIcon className="h-8 w-8 text-[#3498db]" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Qualité Professionnelle
            </h3>
            <p className="text-sm mb-4">
              Nos experts qualifiés s'engagent à fournir des services de
              construction de la plus haute qualité pour tous vos projets.
            </p>
            <a href="#" className="text-sm underline">
              En savoir plus
            </a>
          </div>
        </div>
        <div className="flex p-6 hover:bg-blue-600 transition">
          <div className="mr-4">
            <div className="bg-white p-3 rounded-full">
              <AwardIcon className="h-8 w-8 text-[#3498db]" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Travail De Qualité</h3>
            <p className="text-sm mb-4">
              Nous nous engageons à fournir un travail exceptionnel, en
              utilisant les meilleurs matériaux et techniques de construction.
            </p>
            <a href="#" className="text-sm underline">
              En savoir plus
            </a>
          </div>
        </div>
        <div className="flex p-6 hover:bg-blue-600 transition">
          <div className="mr-4">
            <div className="bg-white p-3 rounded-full">
              <PhoneIcon className="h-8 w-8 text-[#3498db]" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Assistance 24/7</h3>
            <p className="text-sm mb-4">
              Notre équipe est disponible à tout moment pour répondre à vos
              questions et résoudre vos problèmes rapidement.
            </p>
            <a href="#" className="text-sm underline">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}