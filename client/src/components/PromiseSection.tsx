import { useState } from "react";
import { PlayIcon } from "lucide-react";
import { YoutubeModal } from "./YoutubeModal";
export function PromiseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const youtubeChannelUrl = "https://youtube.com/@ameConstruction";
  return (
    <section className="py-20 bg-[#0a1e37] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Notre promesse</h2>
            <p className="mb-6">
              Chez AME, nous nous engageons à fournir des services de
              construction et de gestion de projets de la plus haute qualité.
              Notre équipe de professionnels qualifiés travaille avec précision
              et attention aux détails pour garantir que chaque projet soit
              livré à temps et dans le respect du budget. Nous utilisons des
              matériaux de qualité supérieure et des techniques de construction
              modernes pour créer des structures durables et esthétiques.
            </p>
            <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="bg-[#3498db] hover:bg-white hover:text-[#0a1e37] text-white px-6 py-3 rounded transition inline-block">
              En Savoir Plus
            </a>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 flex justify-center">
            <div className="relative w-full max-w-md aspect-video bg-gray-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{
              backgroundImage: `url('/assets/pro1.jpg')`
            }}></div>
              <button onClick={() => setIsModalOpen(true)} className="relative z-10 bg-white rounded-full p-4 hover:bg-gray-200 transition">
                <PlayIcon className="h-8 w-8 text-[#3498db]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <YoutubeModal videoId="YOUR_VIDEO_ID" // Replace with your actual YouTube video ID
    isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}