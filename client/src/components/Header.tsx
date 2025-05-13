import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { PhoneIcon, MailIcon, GlobeIcon, MenuIcon, XIcon } from "lucide-react";
export function Header() {
  /* Declaration de l'etat */
  const [isMenuOpen, setIsMenuOpen] = useState(false);// Initialisation
  const navigate = useNavigate(); // Navigation dynamique
  const location = useLocation(); // 
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    /* Section Header */
    <header className="w-full bg-[#0a1e37] relative z-50">
      {/* Topbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-white text-sm">
          <div className="hidden sm:flex items-center space-x-6">
          <Link to={"https://wa.me/237695674827"} target="_blanc">
              <div className="flex items-center space-x-2">
                <PhoneIcon size={16} />
                <span className="hover:text-[#3498db]">+237 695 674 827</span>
              </div>
            </Link>
            <Link to={"mailto:tatouboris78@gmail.com"}>
              <div className="flex items-center space-x-2">
                <MailIcon size={16} />
                <span className="hover:text-[#3498db]">tatouboris78@gmail.com</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-[#0a1e37] px-4 py-1 bg-white rounded hover:bg-[#3498db] hover:text-[#ffffff] transition">
              Se connecter
            </Link>
            <Link to="/register" className="text-white hover:text-[#3498db] transition">
              S'inscrire
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to={"#"}>
              <div className="flex items-center space-x-1">
                <GlobeIcon size={16} />
                <span className="hover:text-[#3498db]">Anglais</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <nav className="relative bg-[#0a1e37] border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center relative z-20">
              <div className="text-white font-bold text-2xl flex items-center">
                <img src="/assets/logo7.png" alt="" className="w-[190px]"/>
              </div>
            </Link>
            {/* Responsive */}
            <button className="md:hidden text-white relative z-40" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <XIcon size={32} className="hover:text-[#3498db]" /> : <MenuIcon size={32} className="hover:text-[#3498db]" />}
            </button>
            <div className={`${isMenuOpen ? "fixed inset-0 bg-[#0a1e37] z-30 flex flex-col pt-20" : "hidden"} md:relative md:flex md:bg-transparent md:pt-0`}>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0 overflow-y-auto">
                <Link to="/" className="text-white hover:text-[#3498db] py-2 md:py-0">
                  Accueil
                </Link>
                <Link to="/about" className="text-white hover:text-[#3498db] py-2 md:py-0">
                  À Propos
                </Link>
                <Link to="/services" className="text-white hover:text-[#3498db] py-2 md:py-0">
                  Services
                </Link>
                <Link to="/blog" className="text-white hover:text-[#3498db] py-2 md:py-0">
                  Blog
                </Link>
                <Link to="/projects" className="text-white hover:text-[#3498db] py-2 md:py-0">
                  Projets
                </Link>
                <Link to="/contact" className="text-white hover:text-[#3498db] py-2 md:py-0">
                  Contact
                </Link>
                <div className="md:hidden mt-8 border-t border-gray-700 pt-8">
                  <div className="space-y-4">
                    <Link to={"https://wa.me/237695674827"} target="_blanc">
                      <div className="flex items-center space-x-2">
                        <PhoneIcon size={16} color="#ffffff" />
                        <span className="text-[#ffffff] hover:text-[#3498db]">+237 695 674 827</span>
                      </div>
                    </Link>
                    <Link to={"mailto:tatouboris78@gmail.com"}>
                      <div className="flex items-center space-x-2">
                        <MailIcon size={16} color="#ffffff" />
                        <span className="text-[#ffffff] hover:text-[#3498db]">tatouboris78@gmail.com</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button onClick={() => navigate("/contact")} className="bg-white text-[#0a1e37] px-4 py-2 rounded hover:bg-[#3498db] hover:text-[#ffffff] transition">
                Obtenir un devis
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}