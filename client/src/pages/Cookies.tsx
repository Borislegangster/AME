import { Link } from "react-router-dom";
import { SEO } from '../components/SEO';
import { CookieIcon, SettingsIcon, BarChartIcon, BellIcon } from "lucide-react";
export function Cookies() {
  const cookieTypes = [{
    icon: <SettingsIcon className="w-6 h-6" />,
    title: "Cookies Essentiels",
    description: "Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.",
    examples: ["Session utilisateur", "Sécurité", "Fonctionnalités de base"]
  }, {
    icon: <BarChartIcon className="w-6 h-6" />,
    title: "Cookies Analytiques",
    description: "Nous aident à comprendre comment les visiteurs interagissent avec le site.",
    examples: ["Statistiques de visite", "Pages populaires", "Temps passé sur le site"]
  }, {
    icon: <BellIcon className="w-6 h-6" />,
    title: "Cookies Marketing",
    description: "Utilisés pour le ciblage publicitaire et le marketing.",
    examples: ["Publicités personnalisées", "Préférences utilisateur", "Réseaux sociaux"]
  }];
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="Politique des Cookies" description="Consultez notre politique des cookies. Informations sur l'utilisation des cookies sur notre site." />
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <CookieIcon className="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold text-center">
            Politique des Cookies
          </h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Comment nous utilisons les cookies pour améliorer votre expérience
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">
              Qu'est-ce qu'un Cookie ?
            </h2>
            <p className="text-gray-600 mb-4">
              Un cookie est un petit fichier texte stocké sur votre ordinateur
              ou appareil mobile lorsque vous visitez un site web. Les cookies
              sont largement utilisés pour faire fonctionner les sites web ou
              les rendre plus efficaces, ainsi que pour fournir des informations
              aux propriétaires du site.
            </p>
            <p className="text-gray-600">
              Cette politique fait partie de notre{" "}
              <Link to="/privacy" className="text-[#3498db] hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          {/* Cookie Types */}
          <div className="grid gap-8 mb-8">
            {cookieTypes.map((type, index) => <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#3498db] mr-4">
                    {type.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-[#0a1e37]">{type.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Exemples :</h3>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => <li key={exampleIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3498db] mt-2 mr-3"></span>
                        <span className="text-gray-600">{example}</span>
                      </li>)}
                  </ul>
                </div>
              </div>)}
          </div>
          {/* Cookie Management */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">Gestion des Cookies</h2>
            <p className="text-gray-600 mb-6">
              Vous pouvez contrôler et/ou supprimer les cookies comme vous le
              souhaitez. Vous pouvez supprimer tous les cookies déjà présents
              sur votre ordinateur et paramétrer la plupart des navigateurs pour
              les bloquer.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-[#0a1e37]">
                Comment gérer vos cookies :
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Paramètres de votre navigateur web</li>
                <li>• Préférences de cookies sur notre site</li>
                <li>• Outils tiers de gestion des cookies</li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-6 py-3 rounded transition">
                Gérer mes préférences
              </button>
            </div>
          </div>
          {/* Contact Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm mt-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">Questions ?</h2>
            <p className="text-gray-600 mb-4">
              Si vous avez des questions concernant notre utilisation des
              cookies, n'hésitez pas à nous contacter.
            </p>
            <Link to="/contact" className="text-[#3498db] hover:underline">
              Contactez-nous →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}