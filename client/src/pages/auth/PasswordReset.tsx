import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
export function PasswordReset() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    setIsSubmitted(true);
  };
  if (!token) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Lien invalide
              </h2>
              <p className="mt-2 text-gray-600">
                Ce lien de réinitialisation est invalide ou a expiré.
              </p>
              <Link to="/forgot-password" className="mt-4 inline-block text-[#3498db] hover:text-blue-600">
                Demander un nouveau lien
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
          Réinitialiser votre mot de passe
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
          {!isSubmitted ? <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Nouveau mot de passe
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="password" name="password" type={showPassword ? 'text' : 'password'} required className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3498db] focus:border-[#3498db] sm:text-sm" value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
              })} />
                  <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-400" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirmer le mot de passe
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input id="confirm-password" name="confirm-password" type={showPassword ? 'text' : 'password'} required className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3498db] focus:border-[#3498db] sm:text-sm" value={formData.confirmPassword} onChange={e => setFormData({
                ...formData,
                confirmPassword: e.target.value
              })} />
                </div>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3498db] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3498db]">
                  Réinitialiser le mot de passe
                </button>
              </div>
            </form> : <div className="text-center">
              <div className="rounded-md bg-green-50 p-4 mb-4">
                <p className="text-sm font-medium text-green-800">
                  Votre mot de passe a été réinitialisé avec succès.
                </p>
              </div>
              <Link to="/login" className="text-[#3498db] hover:text-blue-600 text-sm font-medium">
                Se connecter avec votre nouveau mot de passe
              </Link>
            </div>}
        </div>
      </div>
    </div>
  );
}