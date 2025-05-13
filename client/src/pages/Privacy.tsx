import { Link } from "react-router-dom";
import { ShieldIcon, LockIcon, UserIcon, DatabaseIcon } from "lucide-react";
export function Privacy() {
  const sections = [{
    icon: <DatabaseIcon className="w-6 h-6" />,
    title: "Collecte des Données",
    content: "Nous collectons uniquement les données nécessaires pour fournir nos services, notamment :",
    items: ["Informations de contact (nom, email, téléphone)", "Données de projet (spécifications, plans, documents)", "Informations de paiement", "Communications avec notre équipe"]
  }, {
    icon: <LockIcon className="w-6 h-6" />,
    title: "Protection des Données",
    content: "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données :",
    items: ["Cryptage des données sensibles", "Accès restreint aux données personnelles", "Surveillance continue de la sécurité", "Mises à jour régulières des systèmes"]
  }, {
    icon: <UserIcon className="w-6 h-6" />,
    title: "Vos Droits",
    content: "Vous disposez de plusieurs droits concernant vos données personnelles :",
    items: ["Droit d'accès à vos données", "Droit de rectification", "Droit à l'effacement", "Droit à la portabilité des données"]
  }];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <ShieldIcon className="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold text-center">
            Politique de Confidentialité
          </h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Chez AME Construction, nous accordons une grande importance à la
              protection de vos données personnelles. Cette politique de
              confidentialité explique comment nous collectons, utilisons et
              protégeons vos informations lorsque vous utilisez nos services.
            </p>
            <p className="text-gray-600">
              En utilisant nos services, vous acceptez les pratiques décrites
              dans cette politique de confidentialité. Pour plus d'informations
              sur l'utilisation des cookies, consultez notre{" "}
              <Link to="/cookies" className="text-[#3498db] hover:underline">
                politique relative aux cookies
              </Link>
              .
            </p>
          </div>
          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#3498db] mr-4">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-[#0a1e37]">{section.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{section.content}</p>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3498db] mt-2 mr-3"></span>
                      <span className="text-gray-600">{item}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
          {/* Contact Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm mt-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">Nous Contacter</h2>
            <p className="text-gray-600 mb-6">
              Pour toute question concernant notre politique de confidentialité
              ou vos données personnelles, vous pouvez nous contacter :
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email : amengieneering@gmail.com</p>
              <p>Téléphone : +237 695 674 827</p>
              <p>Adresse : Akwa-Douala, Cameroun</p>
            </div>
            <div className="mt-6">
              <Link to="/contact" className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-6 py-3 rounded inline-block transition">
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}