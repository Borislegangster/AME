import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, ChevronDownIcon, ChevronUpIcon, HelpCircleIcon, BuildingIcon, WrenchIcon, ClockIcon, CreditCardIcon, ShieldIcon, ArrowRightIcon } from "lucide-react";
export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };
  const categories = [{
    id: "general",
    label: "Général",
    icon: <HelpCircleIcon className="w-5 h-5" />
  }, {
    id: "construction",
    label: "Construction",
    icon: <BuildingIcon className="w-5 h-5" />
  }, {
    id: "services",
    label: "Services",
    icon: <WrenchIcon className="w-5 h-5" />
  }, {
    id: "delais",
    label: "Délais",
    icon: <ClockIcon className="w-5 h-5" />
  }, {
    id: "payment",
    label: "Paiement",
    icon: <CreditCardIcon className="w-5 h-5" />
  }, {
    id: "garanties",
    label: "Garanties",
    icon: <ShieldIcon className="w-5 h-5" />
  }];
  const faqs = [{
    question: "Comment démarrer un projet de construction avec AME ?",
    answer: "Pour démarrer un projet avec AME, commencez par nous contacter via notre formulaire en ligne ou par téléphone. Nous organiserons une consultation initiale gratuite pour discuter de vos besoins et objectifs."
  }, {
    question: "Quels types de projets réalisez-vous ?",
    answer: "Nous réalisons une large gamme de projets incluant la construction résidentielle, commerciale et industrielle, ainsi que des travaux de rénovation et de réhabilitation."
  }, {
    question: "Combien de temps dure généralement un projet ?",
    answer: "La durée d'un projet varie en fonction de sa taille et de sa complexité. Un projet résidentiel standard peut prendre de 6 à 12 mois, tandis qu'un projet commercial peut s'étendre sur 12 à 24 mois."
  }, {
    question: "Quelles garanties offrez-vous ?",
    answer: "Nous offrons des garanties complètes sur tous nos travaux, incluant la garantie décennale et la garantie de parfait achèvement. Chaque projet est également couvert par notre assurance professionnelle."
  }];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Questions Fréquentes
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <input type="text" placeholder="Rechercher une question..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-6 py-4 rounded-lg text-gray-900 pr-12" />
            <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`flex items-center px-6 py-3 rounded-full transition ${activeCategory === category.id ? "bg-[#3498db] text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </button>)}
        </div>
        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => <div key={index} className="mb-4">
              <button onClick={() => toggleQuestion(index)} className="w-full bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition flex justify-between items-center">
                <span className="font-semibold text-left text-[#0a1e37]">{faq.question}</span>
                {openQuestions.includes(index) ? <ChevronUpIcon className="w-5 h-5 text-[#3498db]" /> : <ChevronDownIcon className="w-5 h-5 text-[#3498db]" />}
              </button>
              {openQuestions.includes(index) && <div className="bg-white px-6 py-4 rounded-b-lg shadow-sm border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
        {/* Contact Section */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#0a1e37]">
            Vous n'avez pas trouvé votre réponse ?
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour répondre à toutes vos questions.
          </p>
          <Link to="/contact" className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-8 py-3 rounded transition inline-flex items-center">
            Contactez-nous
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}