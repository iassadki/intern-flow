import Header from '@/components/layout/Header';
import Card from '@/components/ui/Card';
import { Pencil, List, User, Settings } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="bg-white min-h-screen p-6">
      <Header />
      <h1 className="text-4xl font-bold text-gray-800 mt-15 mb-6 p-3">Tableau de bord</h1>
      
      {/* Contenu du Dashboard */}
      <div className="bg-white rounded-lg p-3">
        {/* <p className="text-gray-600">
          Bienvenue sur votre tableau de bord Intern Flow...
        </p> */}
        
        {/* Vous pouvez ajouter ici vos widgets, statistiques, etc. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <Card
            icon={Pencil}
            title="Écrire un compte rendu"
            description="Écrire son compte rendu résumant sa journée"
            href="/write-report"
          />
          <Card
            icon={List}
            title="Voir la liste des comptes rendu"
            description="Voir la liste de ses comptes rendus journaliers"
            href="/reports-list"
          />
          <Card
            icon={Settings}
            title="Aller dans les paramètres"
            description="Gérer les paramètres de son compte"
            href="/settings"
          />
          <Card
            icon={User}
            title="Voir ou modifier son profil"
            description="Voir ou modifier son profil affiché à tout le monde"
            href="/profile"
          />
        </div>
      </div>
    </div>
  );
}
