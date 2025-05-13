import { HomeIcon, UsersIcon, CheckCircleIcon, BuildingIcon } from "lucide-react";
export function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <HomeIcon className="h-10 w-10 text-[#3498db] mb-2" />
            <h3 className="text-3xl font-bold text-[#0a1e37]">159</h3>
            <p className="text-gray-600">Projets Terminés</p>
          </div>
          <div className="flex flex-col items-center">
            <UsersIcon className="h-10 w-10 text-[#3498db] mb-2" />
            <h3 className="text-3xl font-bold text-[#0a1e37]">485</h3>
            <p className="text-gray-600">Clients Satisfaits</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircleIcon className="h-10 w-10 text-[#3498db] mb-2" />
            <h3 className="text-3xl font-bold text-[#0a1e37]">769</h3>
            <p className="text-gray-600">Projets Réussis</p>
          </div>
          <div className="flex flex-col items-center">
            <BuildingIcon className="h-10 w-10 text-[#3498db] mb-2" />
            <h3 className="text-3xl font-bold text-[#0a1e37]">890</h3>
            <p className="text-gray-600">Mètres Carrés Construits</p>
          </div>
        </div>
      </div>
    </section>
  );
}