import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BuildingIcon, HomeIcon, WrenchIcon, Pencil, HardHat, Ruler, PaintBucket, Hammer } from 'lucide-react';
const services = [{
  category: 'Construction',
  icon: <BuildingIcon className="w-12 h-12" />,
  services: [{
    title: 'Construction neuve',
    description: 'Réalisation complète de bâtiments résidentiels et commerciaux',
    icon: <HomeIcon className="w-6 h-6" />,
    image: '/assets/s1.jpeg'
  }, {
    title: 'Gros oeuvre',
    description: 'Fondations, structures, maçonnerie',
    icon: <HardHat className="w-6 h-6" />,
    image: '/assets/s2.jpeg'
  }, {
    title: 'Second oeuvre',
    description: 'Aménagements intérieurs et finitions',
    icon: <Hammer className="w-6 h-6" />,
    image: '/assets/serv1.jfif'
  }]
}, {
  category: 'Rénovation',
  icon: <WrenchIcon className="w-12 h-12" />,
  services: [{
    title: 'Renovation complete',
    description: 'Transformation et modernisation de bâtiments existants',
    icon: <PaintBucket className="w-6 h-6" />,
    image: '/assets/serv2.jfif'
  }, {
    title: 'Rehabilitation',
    description: 'Mise aux normes et restauration',
    icon: <Hammer className="w-6 h-6" />,
    image: '/assets/s3.jpeg'
  }]
  }, {
    category: 'Études et Conception',
    icon: <Pencil className="w-12 h-12" />,
    services: [{
      title: 'Conception architecturale',
      description: 'Plans et designs personnalisés',
      icon: <Ruler className="w-6 h-6" />,
      image: '/assets/s4.jpeg'
    }, {
      title: 'Etudes techniques',
      description: 'Études de faisabilité et diagnostics',
      icon: <Pencil className="w-6 h-6" />,
      image: '/assets/s5.jpeg'
    }]
  }];
export function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="Nos Services de Construction" description="Découvrez notre gamme complète de services en construction, rénovation et architecture. Des solutions professionnelles adaptées à tous vos projets." image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1" />
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Nos Prestations de Services
          </h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Découvrez notre gamme complète de prestations dans le domaine de la
            construction et de la rénovation
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {services.map((category, index) => <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-[#3498db] mr-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl text-[#0a1e37] font-bold">{category.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => <div key={serviceIndex} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition">
                    <div className="aspect-video relative">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#3498db] text-white flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl text-[#0a1e37] font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <Link to={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className="text-[#3498db] hover:text-blue-600 font-medium inline-flex items-center">
                        En savoir plus
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>
        {/* CTA Section */}
        <div className="mt-16 bg-[#0a1e37] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Besoin d'un service sur mesure ?
          </h2>
          <p className="mb-6">
            Notre équipe est à votre disposition pour étudier vos besoins
            spécifiques et vous proposer une solution adaptée.
          </p>
          <Link to="/contact" className="bg-[#3498db] hover:bg-[#ffffff] hover:text-[#0a1e37] text-white px-8 py-3 rounded inline-block transition">
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  );
}