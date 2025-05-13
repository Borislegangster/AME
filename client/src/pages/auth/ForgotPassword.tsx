import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailIcon } from 'lucide-react';
export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    setIsSubmitted(true);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Link to="/" className="text-[#0a1e37] text-3xl font-bold inline-flex items-center">
            <span className="bg-[#3498db] p-1 mr-1">
              <span className="text-white">AME</span>
            </span>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-[#0a1e37] text-3xl font-bold text-gray-900">
          Mot de passe oublié
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Entrez votre adresse email pour réinitialiser votre mot de passe
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
          {!isSubmitted ? <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Adresse email
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3498db] focus:border-[#3498db] sm:text-sm" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3498db] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3498db]">
                  Envoyer les instructions
                </button>
              </div>
            </form> : <div className="text-center">
              <div className="rounded-md bg-green-50 p-4 mb-4">
                <p className="text-sm font-medium text-green-800">
                  Les instructions de réinitialisation ont été envoyées à votre
                  adresse email.
                </p>
              </div>
              <Link to="/login" className="text-[#3498db] hover:text-blue-600 text-sm font-medium">
                Retour à la connexion
              </Link>
            </div>}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Retourner à la{' '}
                  <Link to="/login" className="text-[#3498db] hover:text-blue-600 font-medium">
                    connexion
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}