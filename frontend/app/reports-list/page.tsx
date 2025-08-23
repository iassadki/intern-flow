"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import Header from "@/components/layout/Header";

// Typage pour un report
interface Report {
  id: number;
  titre: string; // ✅ Corrigé de 'title' à 'titre'
  datecreation: string; // ✅ Ajout dateCreation
  datemodif: string; // ✅ Ajout dateModif
  contenu: string;
}

export default function ReportsListPage() {
  const [reports, setReports] = useState<Report[]>([]);

  // Charger les rapports au montage du composant
  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await fetch("http://localhost:3001/api/reports-list");
        if (!res.ok) {
          throw new Error("Erreur lors du chargement des rapports");
        }
        const data: Report[] = await res.json();
        setReports(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchReports();
  }, []);

  return (
    <div className="bg-white min-h-screen p-6">
      <Header /> {/* tu peux supprimer si inutile */}
      <h1 className="text-4xl font-bold text-gray-800 mt-15 mb-6 p-3">Liste des comptes rendus</h1>

      <div className="bg-white rounded-lg p-3 animate-fadeInFromTop">
        <div className="max-w-7xl mx-auto px-8">
          {reports.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="bg-rose-50 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition animate-fadeInFromTop cursor-pointer"
                >
                  <div className="p-8">
                    {/* Icône */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-white mb-4">
                      <FileText size={20} />
                    </div>

                    {/* Date de création */}
                    <span className="text-sm font-bold text-primary mb-2 block">
                      Créé le : {new Date(report.datecreation).toLocaleDateString('fr-FR')}
                    </span>

                    {/* Date de modification */}
                    <span className="text-xs text-gray-500 mb-4 block">
                      Modifié le : {new Date(report.datemodif).toLocaleDateString('fr-FR')}
                    </span>

                    {/* Titre */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{report.titre}</h3>

                    {/* Contenu - style normal, pas gras */}
                    <p className="text-sm text-gray-600 mb-6">{report.contenu}</p>

                    {/* Boutons */}
                    <div className="w-full grid grid-cols-2 gap-4">
                      <button
                        onClick={() => alert(`Modifier : ${report.id}`)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => alert(`Supprimer : ${report.id}`)}
                        className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Aucun compte rendu trouvé.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}