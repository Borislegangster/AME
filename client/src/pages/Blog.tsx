import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from '../components/SEO';
import { HeartIcon, MessageCircleIcon, ShareIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
const blogPosts = [{
  id: "construction-trends-2023",
  title: "Les Tendances de la Construction en 2023",
  excerpt: "Découvrez les dernières innovations et tendances dans le secteur de la construction...",
  image: "/assets/ap1.jfif",
  date: "2023-06-15",
  author: "Boris Tatou",
  likes: 124,
  comments: 45
}, {
  id: "construction-trends-2023",
  title: "Les Tendances de la Construction en 2023",
  excerpt: "Découvrez les dernières innovations et tendances dans le secteur de la construction...",
  image: "/assets/ap2.jfif",
  date: "2023-06-15",
  author: "Boris Tatou",
  likes: 124,
  comments: 45
}, {
  id: "construction-trends-2023",
  title: "Les Tendances de la Construction en 2023",
  excerpt: "Découvrez les dernières innovations et tendances dans le secteur de la construction...",
  image: "/assets/img1.jfif",
  date: "2023-06-15",
  author: "Boris Tatou",
  likes: 124,
  comments: 45
}, {
  id: "construction-trends-2023",
  title: "Les Tendances de la Construction en 2023",
  excerpt: "Découvrez les dernières innovations et tendances dans le secteur de la construction...",
  image: "/assets/img2.jfif",
  date: "2023-06-15",
  author: "Boris Tatou",
  likes: 124,
  comments: 45
}, {
  id: "construction-trends-2023",
  title: "Les Tendances de la Construction en 2023",
  excerpt: "Découvrez les dernières innovations et tendances dans le secteur de la construction...",
  image: "/assets/img3.jfif",
  date: "2023-06-15",
  author: "Boris Tatou",
  likes: 124,
  comments: 45
}, {
  id: "construction-trends-2023",
  title: "Les Tendances de la Construction en 2023",
  excerpt: "Découvrez les dernières innovations et tendances dans le secteur de la construction...",
  image: "/assets/img4.jfif",
  date: "2023-06-15",
  author: "Boris Tatou",
  likes: 124,
  comments: 45
}
// Ajouter plus de blog
];
export function Blog() {
  const [showShare, setShowShare] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="Blog Construction et Rénovation" description="Découvrez nos articles sur les dernières tendances et innovations dans le domaine de la construction, rénovation et architecture. Conseils d'experts et actualités du secteur." image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5" />
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Notre Blog</h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Actualités, conseils et innovations dans le domaine de la
            construction
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Link to={`/blog/${post.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </Link>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}{" "}
                  • Par {post.author}
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold text-[#0a1e37] mb-2 hover:text-[#3498db]">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-[#3498db]">
                      <HeartIcon className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <Link to={`/blog/${post.id}#comments`} className="flex items-center space-x-1 text-gray-500 hover:text-[#3498db]">
                      <MessageCircleIcon className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </Link>
                  </div>
                  <div className="relative">
                    <button onClick={() => setShowShare(showShare === post.id ? null : post.id)} className="text-gray-500 hover:text-[#3498db]">
                      <ShareIcon className="w-5 h-5" />
                    </button>
                    {showShare === post.id && <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                          <FacebookIcon className="w-5 h-5 mr-3" />
                          Facebook
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                          <TwitterIcon className="w-5 h-5 mr-3" />
                          Twitter
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                          <LinkedinIcon className="w-5 h-5 mr-3" />
                          LinkedIn
                        </a>
                      </div>}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>
  );
}