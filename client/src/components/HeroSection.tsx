import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
/* Donnees de slides */
const slides = [{
  image: "/assets/hero1.jpg",
  title: "Nous Construisons Votre Maison",
  subtitle: "Constructeur Professionnel"
}, {
  image: "/assets/hero2.jpg",
  title: "Excellence en Construction",
  subtitle: "Qualité et Innovation"
}, {
  image: "/assets/hero3.jpg",
  title: "Projets Architecturaux",
  subtitle: "Design Modern"
}];
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  return (
    /* Section Hero (Slide) */
    <section className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(10, 30, 55, 0.5), rgba(10, 30, 55, 0.5)), url('${slide.image}')`
      }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <p className="text-lg mb-2">{slide.subtitle}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {slide.title}
            </h1>
            <button onClick={() => navigate("/contact")} className="bg-[#3498db] text-white hover:bg-[#0a1e37] px-6 py-3 rounded transition">
              Obtenir un devis
            </button>
          </div>
        </div>)}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
        <button onClick={prevSlide} className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition">
          <ChevronLeftIcon size={24} />
        </button>
        <button onClick={nextSlide} className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition">
          <ChevronRightIcon size={24} />
        </button>
      </div>
    </section>
  );
}