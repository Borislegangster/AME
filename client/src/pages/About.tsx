import { Link } from "react-router-dom";
import { SEO } from '../components/SEO';
import { AwardIcon, BuildingIcon, UsersIcon, TrendingUpIcon, HeartHandshakeIcon } from "lucide-react";
export function About() {
  const values = [{
    icon: <AwardIcon className="w-8 h-8" />,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet que nous entreprenons."
  }, {
    icon: <HeartHandshakeIcon className="w-8 h-8" />,
    title: "Confiance",
    description: "Nous construisons des relations durables basées sur la confiance."
  }, {
    icon: <TrendingUpIcon className="w-8 h-8" />,
    title: "Innovation",
    description: "Nous adoptons les dernières technologies et méthodes de construction."
  }];
  const team = [{
    name: "Boris Tatou",
    role: "Directeur Général",
    image: "/assets/photo.jpg"
  }, {
    name: "Boris Tatou",
    role: "Architecte en Chef",
    image: "/assets/photo.jpg"
  }, {
    name: "Boris Tatou",
    role: "Chef de Projet",
    image: "/assets/photo.jpg"
  }];
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="À Propos" description="Découvrez l'histoire d'AME Construction, notre expertise et nos valeurs. Plus de 20 ans d'excellence dans la construction et l'architecture." image="https://images.unsplash.com/photo-1560250097-0b93528c311a" />
      {/* Hero Section */}
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            À Propos de Nous
          </h1>
          <p className="text-center max-w-2xl mx-auto">
            Plus de 20 ans d'excellence dans la construction et l'architecture
          </p>
        </div>
      </div>
      {/* Company Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="border-l-4 border-[#3498db] pl-4 mb-4">
              <span className="text-[#3498db] font-semibold">
                Notre Histoire
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-[#0a1e37]">
              Une Histoire de Passion et d'Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              Depuis notre création en 2000, AME Construction s'est imposée
              comme un leader dans le secteur de la construction. Notre
              engagement envers l'excellence et l'innovation nous a permis de
              réaliser des projets exceptionnels qui ont marqué le paysage
              urbain.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="flex items-center">
                <BuildingIcon className="w-10 h-10 text-[#3498db] mr-4" />
                <div>
                  <h4 className="font-bold text-xl text-[#0a1e37]">850+</h4>
                  <p className="text-gray-600">Projets Réalisés</p>
                </div>
              </div>
              <div className="flex items-center">
                <UsersIcon className="w-10 h-10 text-[#3498db] mr-4" />
                <div>
                  <h4 className="font-bold text-xl text-[#0a1e37]">220+</h4>
                  <p className="text-gray-600">Employés</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-6 py-3 rounded inline-block transition">
              Contactez-nous
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/ap1.jfif" alt="Construction site" className="w-full h-64 object-cover rounded-lg" />
            <img src="/assets/ap2.jfif" alt="Building project" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </div>
      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1e37]">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-[#3498db]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0a1e37]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>)}
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1e37]">Notre Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-[#0a1e37]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>)}
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-[#0a1e37] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et
            découvrir comment nous pouvons vous aider à le réaliser.
          </p>
          <Link to="/contact" className="bg-[#3498db] hover:bg-white hover:text-[#0a1e37] text-white px-8 py-3 rounded inline-block transition">
            Obtenir un Devis
          </Link>
        </div>
      </div>
    </div>
  );
}