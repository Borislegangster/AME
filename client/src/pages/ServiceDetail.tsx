import { useParams, Link } from 'react-router-dom';
import { CheckCircleIcon, ClockIcon, PhoneIcon, HomeIcon, WrenchIcon, Ruler, PaintBucket, HardHat, Hammer, Pencil } from 'lucide-react';
// Mock data - In a real app, this would come from an API
const servicesData = {
  'construction-neuve': {
    category: 'Construction',
    title: 'Construction neuve',
    icon: <HomeIcon className="w-6 h-6" />,
    description: 'Réalisation complète de bâtiments résidentiels et commerciaux',
    image: '/assets/s1.jpeg',
    longDescription: "Notre service de construction neuve propose une solution complète pour la réalisation de votre projet, de la conception initiale à la livraison finale. Nous prenons en charge l'ensemble du processus de construction en respectant les normes les plus strictes.",
    features: ['Plans personnalisés', 'Matériaux de haute qualité', 'Respect des normes environnementales', 'Gestion de projet complète', 'Suivi régulier des travaux'],
    process: [{
      title: 'Étude et conception',
      description: 'Analyse de vos besoins et élaboration des plans'
    }, {
      title: 'Permis de construire',
      description: 'Gestion des démarches administratives'
    }, {
      title: 'Construction',
      description: 'Réalisation des travaux selon le planning établi'
    }, {
      title: 'Contrôle qualité',
      description: 'Vérifications et tests réguliers'
    }, {
      title: 'Livraison',
      description: 'Remise des clés et garanties'
    }],
    gallery: ['/assets/serv1.jfif', '/assets/serv2.jfif', '/assets/serv3.jpg'],
    faq: [{
      question: "Quelle est la durée moyenne d'une construction neuve ?",
      answer: 'La durée moyenne varie entre 8 et 12 mois selon la complexité du projet.'
    }, {
      question: 'Quelles garanties proposez-vous ?',
      answer: 'Nous offrons toutes les garanties légales : parfait achèvement, biennale et décennale.'
    }]
  },
  'gros-oeuvre': {
    category: 'Construction',
    title: 'Gros œuvre',
    icon: <HardHat className="w-6 h-6" />,
    description: 'Fondations, structures, maçonnerie',
    image: '/assets/s2.jpeg',
    longDescription: "Notre expertise en gros œuvre couvre tous les aspects structurels de la construction, des fondations jusqu'à la réalisation de la structure porteuse du bâtiment.",
    features: ['Fondations solides', 'Structure porteuse', 'Maçonnerie traditionnelle', 'Béton armé', 'Charpente'],
    process: [{
      title: 'Études préliminaires',
      description: 'Analyse du sol et calculs structurels'
    }, {
      title: 'Fondations',
      description: 'Mise en place des fondations adaptées'
    }, {
      title: 'Élévation',
      description: 'Construction des murs et structures'
    }, {
      title: 'Toiture',
      description: 'Réalisation de la charpente'
    }],
    gallery: ['/assets/serv1.jfif', '/assets/serv2.jfif', '/assets/serv3.jpg'],
    faq: [{
      question: 'Combien de temps dure la phase de gros œuvre ?',
      answer: 'La durée dépend de la taille du projet, généralement entre 3 et 6 mois.'
    }, {
      question: "Travaillez-vous avec des bureaux d'études ?",
      answer: "Oui, nous collaborons avec des bureaux d'études structures pour garantir la solidité des ouvrages."
    }]
  },
  'second-oeuvre': {
    category: 'Construction',
    title: 'Second œuvre',
    icon: <Hammer className="w-6 h-6" />,
    description: 'Aménagements intérieurs et finitions',
    image: '/assets/serv1.jfif',
    longDescription: "Notre service de second œuvre assure tous les travaux d'aménagement intérieur et de finition, permettant de rendre le bâtiment fonctionnel et confortable.",
    features: ['Plomberie et électricité', 'Isolation thermique et acoustique', 'Revêtements sols et murs', 'Menuiseries intérieures', 'Peinture et finitions'],
    process: [{
      title: 'Planification',
      description: 'Organisation des différents corps de métier'
    }, {
      title: 'Réseaux',
      description: 'Installation électrique et plomberie'
    }, {
      title: 'Aménagement',
      description: 'Pose des cloisons et revêtements'
    }, {
      title: 'Finitions',
      description: 'Peinture et dernières touches'
    }],
    gallery: ['/assets/serv1.jfif', '/assets/serv2.jfif', '/assets/serv3.jpg'],
    faq: [{
      question: 'Quels types de finitions proposez-vous ?',
      answer: 'Nous proposons une large gamme de finitions adaptées à vos besoins et votre budget.'
    }, {
      question: 'Combien de temps durent les travaux de second œuvre ?',
      answer: 'La durée varie selon la surface, généralement de 2 à 4 mois pour une maison.'
    }]
  },
  'renovation-complete': {
    category: 'Rénovation',
    title: 'Rénovation complète',
    icon: <PaintBucket className="w-6 h-6" />,
    description: 'Transformation et modernisation de bâtiments existants',
    image: '/assets/serv2.jfif',
    longDescription: 'Notre service de rénovation complète transforme votre espace existant en un lieu moderne et fonctionnel, tout en préservant son caractère unique.',
    features: ['Diagnostic complet', 'Optimisation des espaces', 'Mise aux normes', 'Amélioration énergétique', 'Modernisation des équipements'],
    process: [{
      title: 'Diagnostic',
      description: 'Évaluation complète du bâtiment'
    }, {
      title: 'Conception',
      description: 'Plans de rénovation détaillés'
    }, {
      title: 'Démolition',
      description: 'Retrait des éléments à remplacer'
    }, {
      title: 'Rénovation',
      description: 'Travaux de transformation'
    }],
    gallery: ['/assets/serv1.jfif', '/assets/serv2.jfif', '/assets/serv3.jpg'],
    faq: [{
      question: 'Puis-je habiter pendant les travaux ?',
      answer: "Cela dépend de l'ampleur des travaux, nous étudierons la situation avec vous."
    }, {
      question: 'Quelles sont les aides disponibles ?',
      answer: 'Plusieurs aides existent, notamment pour la rénovation énergétique.'
    }]
  },
  rehabilitation: {
    category: 'Rénovation',
    title: 'Réhabilitation',
    icon: <WrenchIcon className="w-6 h-6" />,
    description: 'Mise aux normes et restauration',
    image: '/assets/s3.jpeg',
    longDescription: 'Notre service de réhabilitation redonne vie aux bâtiments anciens tout en les adaptant aux normes et aux usages modernes.',
    features: ['Restauration patrimoniale', 'Mise aux normes de sécurité', 'Adaptation PMR', 'Rénovation énergétique', 'Préservation du caractère'],
    process: [{
      title: 'État des lieux',
      description: 'Diagnostic approfondi du bâtiment'
    }, {
      title: 'Études',
      description: 'Conception du projet de réhabilitation'
    }, {
      title: 'Autorisations',
      description: 'Obtention des permis nécessaires'
    }, {
      title: 'Réalisation',
      description: 'Exécution des travaux'
    }],
    gallery: ['/assets/serv1.jfif', '/assets/serv2.jfif', '/assets/serv3.jpg'],
    faq: [{
      question: 'Quelles sont les contraintes réglementaires ?',
      answer: 'Les contraintes varient selon le type de bâtiment et sa localisation.'
    }, {
      question: 'Combien de temps dure une réhabilitation ?',
      answer: 'Le délai dépend de la complexité, généralement de 6 à 18 mois.'
    }]
  },
  'conception-architecturale': {
    category: 'Études et Conception',
    title: 'Conception architecturale',
    icon: <Ruler className="w-6 h-6" />,
    description: 'Plans et designs personnalisés',
    image: '/assets/s4.jpeg',
    longDescription: 'Notre service de conception architecturale crée des designs uniques et fonctionnels qui répondent parfaitement à vos besoins et aspirations.',
    features: ['Designs personnalisés', 'Modélisation 3D', 'Études de faisabilité', 'Optimisation des espaces', 'Intégration environnementale'],
    process: [{
      title: 'Brief client',
      description: 'Analyse des besoins et souhaits'
    }, {
      title: 'Esquisses',
      description: 'Premières propositions de design'
    }, {
      title: 'Développement',
      description: 'Élaboration détaillée du projet'
    }, {
      title: 'Finalisation',
      description: 'Plans définitifs et visualisations'
    }],
    gallery: ['/assets/serv1.jfif', '/assets/serv2.jfif', '/assets/serv3.jpg'],
    faq: [{
      question: 'Combien de temps prend la conception ?',
      answer: 'La phase de conception dure généralement de 2 à 4 mois.'
    }, {
      question: 'Pouvez-vous modifier un projet existant ?',
      answer: 'Oui, nous pouvons adapter ou modifier des plans existants.'
    }]
  },
  'etudes-techniques': {
    category: 'Études et Conception',
    title: 'Études techniques',
    icon: <Pencil className="w-6 h-6" />,
    description: 'Études de faisabilité et diagnostics',
    image: '/assets/s5.jpeg',
    longDescription: "Notre service d'études techniques assure la faisabilité et la conformité technique de votre projet à travers des analyses approfondies.",
    features: ['Études structurelles', 'Analyses thermiques', 'Diagnostics techniques', 'Études de sol', 'Calculs réglementaires'],
    process: [{
      title: 'Collecte de données',
      description: 'Rassemblement des informations nécessaires'
    }, {
      title: 'Analyses',
      description: 'Études techniques détaillées'
    }, {
      title: 'Calculs',
      description: 'Dimensionnements et vérifications'
    }, {
      title: 'Rapports',
      description: 'Synthèse et recommandations'
    }],
    gallery: ['/assets/serv1.jfif', '/assets/serv2.jfif', '/assets/serv3.jpg'],
    faq: [{
      question: "Quels types d'études proposez-vous ?",
      answer: "Nous réalisons tous types d'études techniques du bâtiment."
    }, {
      question: 'Quel est le délai moyen pour une étude technique ?',
      answer: 'Le délai varie selon la complexité, généralement de 2 à 8 semaines.'
    }]
  }
};
export function ServiceDetail() {
  const {
    id
  } = useParams();
  const prestation = servicesData[id as keyof typeof servicesData];
  if (!prestation) {
    return <div>Service non trouvé</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#0a1e37] text-white py-32" style={{
      backgroundImage: `linear-gradient(rgba(10, 30, 55, 0.8), rgba(10, 30, 55, 0.8)), url(${prestation.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#3498db] flex items-center justify-center">
              {prestation.icon}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">
            {prestation.title}
          </h1>
          <p className="max-w-2xl mx-auto text-center text-lg">
            {prestation.description}
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl text-[#0a1e37] font-bold mb-4">Description détaillée</h2>
              <p className="text-gray-600">{prestation.longDescription}</p>
            </div>
            {/* Features */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl text-[#0a1e37] font-bold mb-6">Caractéristiques</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prestation.features.map((feature, index) => <div key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#3498db] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-[#0a1e37]">{feature}</p>
                  </div>)}
              </div>
            </div>
            {/* Process */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl text-[#0a1e37] font-bold mb-6">Notre processus</h2>
              <div className="space-y-8">
                {prestation.process.map((step, index) => <div key={index} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3498db] text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl text-[#0a1e37] font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
            {/* Gallery */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl text-[#0a1e37] font-bold mb-6">Galerie</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {prestation.gallery.map((image, index) => <img key={index} src={image} alt={`${prestation.title} ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />)}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Card */}
            <div className="bg-[#0a1e37] text-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Intéressé par ce service ?
              </h3>
              <p className="mb-6">
                Contactez-nous pour discuter de votre projet et obtenir un devis
                personnalisé.
              </p>
              <Link to="/contact" className="bg-[#3498db] hover:bg-white hover:text-[#0a1e37] text-white px-6 py-3 rounded transition block text-center">
                Demander un devis
              </Link>
            </div>
            {/* FAQ */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl text-[#0a1e37] font-bold mb-4">Questions fréquentes</h3>
              <div className="space-y-4">
                {prestation.faq.map((item, index) => <div key={index} className="border-b border-gray-200 pb-4">
                    <h4 className="font-semibold text-[#0a1e37] mb-2">{item.question}</h4>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>)}
              </div>
            </div>
            {/* Contact Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl text-[#0a1e37] font-bold mb-4">Contactez-nous</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-[#3498db] mr-3" />
                  <span>+237 695 674 827</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 text-[#3498db] mr-3" />
                  <span>Lun-Ven: 8h-18h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}