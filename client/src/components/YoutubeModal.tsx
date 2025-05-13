import { XIcon } from "lucide-react";
interface YoutubeModalProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}
export function YoutubeModal({
  videoId,
  isOpen,
  onClose
}: YoutubeModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg">
        <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-gray-300">
          <XIcon size={24} />
        </button>
        <div className="aspect-video">
          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}