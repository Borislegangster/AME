import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const testimonials = [{
  quote: 'AME Construction a dépassé toutes nos attentes. Leur professionnalisme et leur attention aux détails ont rendu notre projet de construction parfait.',
  author: 'Guillaume Renaud',
  role: 'Directeur Financier',
  image: '/assets/person1.jpeg'
}, {
  quote: 'Une équipe exceptionnelle qui a su transformer notre vision en réalité. La qualité de leur travail est remarquable.',
  author: 'Sophie Martin',
  role: 'Architecte',
  image: '/assets/person2.jpeg'
}, {
  quote: 'Je recommande vivement AME Construction pour leur expertise et leur capacité à respecter les délais et les budgets.',
  author: 'Thomas Dubois',
  role: 'Promoteur Immobilier',
  image: '/assets/person3.jpeg'
}];
export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1e37]">
          Ce que disent nos clients
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 md:-translate-x-16">
            <button onClick={prevTestimonial} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition" aria-label="Témoignage précédent">
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 md:translate-x-16">
            <button onClick={nextTestimonial} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition" aria-label="Témoignage suivant">
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => <div key={index} className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : index < currentIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}>
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full object-cover" />
                  </div>
                  <blockquote className="text-xl italic text-gray-600 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="font-semibold text-[#0a1e37]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>)}
          </div>
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-[#3498db] w-4' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Aller au témoignage ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}