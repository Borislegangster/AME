import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon, MailIcon, FacebookIcon, TwitterIcon, YoutubeIcon, LinkedinIcon, PhoneCallIcon } from "lucide-react";
export function Footer() {
  return (
    /* Section Footer */
    <footer className="bg-[#0a1e37] text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="flex items-start mb-3">
              <MapPinIcon className="h-5 w-5 mr-3 mt-1 text-[#3498db]" />
              <p>Akwa-Douala Cameroun</p>
            </div>
            <div className="flex items-center mb-3">
              <PhoneIcon className="h-5 w-5 mr-3 text-[#3498db]" />
              <p>+237 695 674 827</p>
            </div>
            <div className="flex items-center mb-3">
              <MailIcon className="h-5 w-5 mr-3 text-[#3498db]" />
              <p>tatouboris78@gmail.com</p>
            </div>
          </div>
          {/* Service */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/construction" className="hover:text-[#3498db]">
                  Construction de bâtiment
                </Link>
              </li>
              <li>
                <Link to="/services/renovation" className="hover:text-[#3498db]">
                  Rénovation
                </Link>
              </li>
              <li>
                <Link to="/services/architecture" className="hover:text-[#3498db]">
                  Conception architecturale
                </Link>
              </li>
              <li>
                <Link to="/services/consultation" className="hover:text-[#3498db]">
                  Consultation professionnelle
                </Link>
              </li>
            </ul>
          </div>
          {/* Pages */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-[#3498db]">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#3498db]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#3498db]">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#3498db]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#3498db]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Reseaux Sociaux */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Réseaux Sociaux</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3498db]">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3498db]">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3498db]">
                <YoutubeIcon className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3498db]">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="https://wa.me/237695674827" target="_blank" rel="noopener noreferrer" className="hover:text-[#3498db]">
                <PhoneCallIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Down du footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} AME Construction. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-[#3498db]">
              Termes et conditions
            </Link>
            <Link to="/privacy" className="hover:text-[#3498db]">
              Politique de confidentialité
            </Link>
            <Link to="/cookies" className="hover:text-[#3498db]">
              Cookies
            </Link>
            <Link to="/help" className="hover:text-[#3498db]">
              Aide
            </Link>
            <Link to="/faq" className="hover:text-[#3498db]">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}