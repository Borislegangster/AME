import React from "react";
export function NewsletterSection() {
  return (
    <section className="py-20 bg-white">
      {/* Formulaire d'inscription */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl text-[#0a1e37] font-bold">NewsLetter</h3>
            <p className="text-gray-600">
              Restez informé de nos dernières actualités et projets.
              Abonnez-vous à notre newsletter.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex" action="#">
              <input type="email" placeholder="Votre email" className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#3498db] w-full md:w-64" />
              <button className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-4 py-2 transition">
                Soumettre
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}