import { useState } from "react";
import { useParams } from "react-router-dom";
import { HeartIcon, MessageCircleIcon, ShareIcon, FacebookIcon, TwitterIcon, LinkedinIcon, SendIcon } from "lucide-react";
// Mock data - In a real app, this would come from an API
const blogPostData = {
  "construction-trends-2023": {
    title: "Les Tendances de la Construction en 2023",
    date: "2023-06-15",
    author: "Boris Tatou",
    image: "/assets/img3.jfif",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h2>Les nouvelles technologies dans la construction</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
    likes: 124,
    comments: [{
      id: 1,
      author: "Boris Tatou",
      date: "2023-06-16",
      content: "Article très intéressant, merci pour ces informations !",
      likes: 5
    }, {
      id: 2,
      author: "Boris Tatou",
      date: "2023-06-16",
      content: "Je partage totalement votre point de vue sur l'évolution du secteur.",
      likes: 3
    }]
  }
};
export function BlogPost() {
  const {
    id
  } = useParams();
  const post = blogPostData[id as keyof typeof blogPostData];
  const [isLiked, setIsLiked] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [comment, setComment] = useState("");
  if (!post) {
    return <div>Article non trouvé</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span>{new Date(post.date).toLocaleDateString("fr-FR")}</span>
              <span>•</span>
              <span>Par {post.author}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-lg mb-8" />
          {/* Article Content */}
          <article className="bg-white rounded-lg p-8 mb-8 shadow-sm prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{
            __html: post.content
          }} />
          </article>
          {/* Interaction Bar */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button onClick={() => setIsLiked(!isLiked)} className={`flex items-center space-x-2 ${isLiked ? "text-red-500" : "text-gray-500"} hover:text-red-500`}>
                  <HeartIcon className="w-6 h-6" fill={isLiked ? "currentColor" : "none"} />
                  <span>{post.likes + (isLiked ? 1 : 0)}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500">
                  <MessageCircleIcon className="w-6 h-6" />
                  <span>{post.comments.length}</span>
                </button>
              </div>
              <div className="relative">
                <button onClick={() => setShowShare(!showShare)} className="text-gray-500 hover:text-[#3498db]">
                  <ShareIcon className="w-6 h-6" />
                </button>
                {showShare && <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
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
          {/* Comments Section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-[#0a1e37]">
              Commentaires ({post.comments.length})
            </h2>
            {/* Comment Form */}
            <div className="mb-8">
              <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Ajouter un commentaire..." className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db]" rows={4} />
              <div className="flex justify-end mt-2">
                <button className="bg-[#3498db] hover:bg-blue-600 text-white px-6 py-2 rounded transition flex items-center">
                  <SendIcon className="w-4 h-4 mr-2" />
                  Envoyer
                </button>
              </div>
            </div>
            {/* Comments List */}
            <div className="space-y-6">
              {post.comments.map(comment => <div key={comment.id} className="border-b border-gray-100 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-[#0a1e37]">{comment.author}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(comment.date).toLocaleDateString("fr-FR")}
                      </p>
                    </div>
                    <button className="flex items-center text-gray-500 hover:text-red-500">
                      <HeartIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                  </div>
                  <p className="text-gray-600">{comment.content}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}