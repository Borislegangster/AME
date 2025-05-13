import { Link } from "react-router-dom";
export function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Termes et Conditions
          </h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Les présentes conditions générales régissent l'utilisation de ce
              site web et des services fournis par AME Construction. En
              utilisant notre site, vous acceptez ces conditions dans leur
              intégralité.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">2. Services</h2>
            <p className="text-gray-600 mb-4">
              AME Construction fournit des services de construction, rénovation
              et conseil en architecture. Tous nos services sont soumis à des
              contrats spécifiques qui doivent être signés séparément.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">3. Responsabilités</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Nous nous engageons à fournir nos services avec le plus grand
                soin
              </li>
              <li>
                Le client s'engage à fournir des informations exactes et
                complètes
              </li>
              <li>
                Les délais et coûts sont estimatifs sauf mention contraire
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">
              4. Propriété Intellectuelle
            </h2>
            <p className="text-gray-600 mb-4">
              Tout le contenu présent sur ce site est la propriété exclusive
              d'AME Construction et est protégé par les lois sur la propriété
              intellectuelle.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">5. Confidentialité</h2>
            <p className="text-gray-600 mb-4">
              Nous nous engageons à protéger vos données personnelles. Pour plus
              d'informations, consultez notre{" "}
              <Link to="/privacy" className="text-[#3498db] hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>
          <div className="border-t border-gray-200 mt-8 pt-8">
            <p className="text-gray-600">
              Pour toute question concernant ces termes et conditions, veuillez
              nous contacter via notre{" "}
              <Link to="/contact" className="text-[#3498db] hover:underline">
                page de contact
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}