import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, HomeIcon, FileTextIcon, WrenchIcon, HelpCircleIcon, PhoneIcon, MailIcon, ExternalLinkIcon, ArrowRightIcon } from "lucide-react";
export function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const helpCategories = [{
    icon: <HomeIcon className="w-6 h-6" />,
    title: "Services de Construction",
    description: "Tout sur nos services de construction et rénovation",
    topics: ["Types de projets de construction", "Processus de construction", "Estimation des coûts", "Planning et délais"]
  }, {
    icon: <FileTextIcon className="w-6 h-6" />,
    title: "Documentation",
    description: "Guides et documents importants",
    topics: ["Documents requis", "Permis de construire", "Normes de sécurité", "Certifications"]
  }, {
    icon: <WrenchIcon className="w-6 h-6" />,
    title: "Support Technique",
    description: "Assistance technique et dépannage",
    topics: ["Maintenance", "Réparations", "Garanties", "Interventions d'urgence"]
  }];
  const quickLinks = ["Comment démarrer un projet ?", "Obtenir un devis", "Suivi de projet", "Garanties et assurances", "Paiements et facturation", "Réclamations"];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <HelpCircleIcon className="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-6">Centre d'Aide</h1>
          <div className="max-w-2xl mx-auto relative">
            <input type="text" placeholder="Rechercher dans l'aide..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-6 py-4 rounded-lg text-gray-900 pr-12" />
            <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {helpCategories.map((category, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#3498db] mb-4">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold mb-3 text-[#0a1e37]">{category.title}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.topics.map((topic, topicIndex) => <li key={topicIndex} className="flex items-center text-gray-600 hover:text-[#3498db]">
                    <ArrowRightIcon className="w-4 h-4 mr-2" />
                    <a href="#" className="text-sm">
                      {topic}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>
        {/* Quick Links Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#0a1e37]">Liens Rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => <a key={index} href="#" className="flex items-center text-gray-600 hover:text-[#3498db] hover:bg-blue-50 p-3 rounded-lg transition">
                <ExternalLinkIcon className="w-5 h-5 mr-2" />
                {link}
              </a>)}
          </div>
        </div>
        {/* Contact Support */}
        <div className="bg-[#0a1e37] text-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Besoin d'aide supplémentaire ?
              </h2>
              <p className="mb-6">
                Notre équipe de support est disponible pour vous aider.
                N'hésitez pas à nous contacter.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-3" />
                  <span>+237 695 674 827</span>
                </div>
                <div className="flex items-center">
                  <MailIcon className="w-5 h-5 mr-3" />
                  <span>support@ame.com</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/contact" className="bg-[#3498db] hover:bg-white hover:text-[#0a1e37] text-white px-8 py-3 rounded transition inline-flex items-center">
                Contactez-nous
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}