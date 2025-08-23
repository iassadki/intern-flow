import Header from '@/components/layout/Header';
import { User, Mail, Phone, MapPin, Calendar, Briefcase } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="bg-white min-h-screen p-6">
      <Header />
      <h1 className="text-4xl font-bold text-gray-800 mt-15 mb-6 p-3">Profil</h1>
      
      <div className="bg-white rounded-lg p-3 animate-fadeInFromTop">
        <div className="max-w-7xl mx-auto px-8">
          {/* Photo et infos principales */}
          <div className="bg-rose-50 rounded-2xl shadow-sm p-8 mb-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-700 text-white">
                <User size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Ilias Assadki</h2>
                <p className="text-lg text-gray-600 mb-1">Stagiaire Développeur Web</p>
                <p className="text-sm text-gray-500">Stage de fin d&apos;études</p>
              </div>
            </div>
          </div>

          {/* Informations détaillées */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informations personnelles */}
            <div className="bg-rose-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User size={20} />
                Informations personnelles
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">ilias.assadki@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="text-gray-900">+33 6 12 34 56 78</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Localisation</p>
                    <p className="text-gray-900">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations de stage */}
            <div className="bg-rose-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase size={20} />
                Informations de stage
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Période de stage</p>
                    <p className="text-gray-900">Mars 2024 - Août 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Entreprise</p>
                    <p className="text-gray-900">TechCorp Solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Tuteur de stage</p>
                    <p className="text-gray-900">Marie Dubois</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-rose-50 rounded-2xl shadow-sm p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">À propos</h3>
            <p className="text-gray-700 leading-relaxed">
              Étudiant en informatique passionné par le développement web, actuellement en stage 
              de fin d&apos;études. Je travaille principalement avec React, Next.js et TypeScript. 
              Mon objectif est d&apos;acquérir une expérience pratique dans le développement 
              d&apos;applications web modernes et d&apos;apprendre les bonnes pratiques du secteur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
