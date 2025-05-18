import { useState } from "react";
import { Link } from "react-router-dom";
import { ClockIcon, CheckCircleIcon } from "lucide-react";
import { SEO } from '../components/SEO';

type ProjectStatus = "all" | "ongoing" | "completed";
type ProjectCategory = "Industriel" | "Commercial" | "Résidentiel" | "Institutionnel" | "Médical";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  status: "ongoing" | "completed";
  progress: number;
}

const projects: Project[] = [
  {
    id: "commercial-center",
    title: "Centre Commercial de la Place",
    description: "Un centre commercial moderne avec 45 boutiques et parking souterrain.",
    image: "/assets/ex3.jfif",
    category: "Commercial",
    status: "ongoing",
    progress: 50
  },
  {
    id: "residential-complex-1",
    title: "Complexe Résidentiel Les Jardins",
    description: "Ensemble résidentiel de 200 appartements avec espaces verts.",
    image: "/assets/ex4.jfif",
    category: "Résidentiel",
    status: "ongoing",
    progress: 70
  },
  {
    id: "residential-complex-2",
    title: "Complexe Résidentiel Les Jardins",
    description: "Ensemble résidentiel de 200 appartements avec espaces verts.",
    image: "/assets/ap1.jfif",
    category: "Institutionnel",
    status: "completed",
    progress: 100
  },
  {
    id: "medical-center",
    title: "Centre Médical Avancé",
    description: "Centre médical avec équipements de pointe.",
    image: "/assets/ap1.jfif",
    category: "Médical",
    status: "completed",
    progress: 100
  },
  {
    id: "industrial-plant",
    title: "Usine Industrielle Moderne",
    description: "Installation industrielle de 10,000 m².",
    image: "/assets/ap1.jfif",
    category: "Industriel",
    status: "completed",
    progress: 100
  },
  {
    id: "shopping-mall",
    title: "Galerie Marchande",
    description: "Centre commercial avec 100 boutiques.",
    image: "/assets/ap1.jfif",
    category: "Commercial",
    status: "completed",
    progress: 100
  }
];

export function Projects() {
  const [statusFilter, setStatusFilter] = useState<ProjectStatus>("all");
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory | "all">("all");
  
  const categories: ProjectCategory[] = ["Industriel", "Commercial", "Résidentiel", "Institutionnel", "Médical"];

  const filteredProjects = projects.filter(project => {
    const statusMatch = statusFilter === "all" || project.status === statusFilter;
    const categoryMatch = categoryFilter === "all" || project.category === categoryFilter;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="Nos Projets de Construction" description="Explorez nos réalisations en construction et rénovation. Des projets résidentiels et commerciaux qui témoignent de notre expertise et savoir-faire." image="https://images.unsplash.com/photo-1621275471769-e6aa44457232" />
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Nos Projets</h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Découvrez nos réalisations et projets en cours dans le domaine de la
            construction
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Filter By Category */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button 
            onClick={() => setCategoryFilter("all")} 
            className={`px-6 py-2 rounded-full ${categoryFilter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"} transition-colors`}
          >
            Toutes catégories
          </button>
          {categories.map(category => (
            <button 
              key={category} 
              onClick={() => setCategoryFilter(category)} 
              className={`px-6 py-2 rounded-full ${categoryFilter === category ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"} transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
      
        {/* Filter By Status */}
        <div className="flex justify-center space-x-4 mb-12">
          <button 
            onClick={() => setStatusFilter("all")} 
            className={`px-6 py-2 rounded-full ${statusFilter === "all" ? "bg-[#3498db] text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
          >
            Tous les projets
          </button>
          <button 
            onClick={() => setStatusFilter("ongoing")} 
            className={`px-6 py-2 rounded-full ${statusFilter === "ongoing" ? "bg-[#3498db] text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
          >
            En cours
          </button>
          <button 
            onClick={() => setStatusFilter("completed")} 
            className={`px-6 py-2 rounded-full ${statusFilter === "completed" ? "bg-[#3498db] text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
          >
            Terminés
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  {project.status === "ongoing" ? (
                    <div className="bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      En cours
                    </div>
                  ) : (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center">
                      <CheckCircleIcon className="w-4 h-4 mr-1" />
                      Terminé
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a1e37] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">Catégorie: {project.category}</p>
                {project.status === "ongoing" && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progression</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#3498db] h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                )}
                <span className="text-[#3498db] font-medium">
                  Voir les détails →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}