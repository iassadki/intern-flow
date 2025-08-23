"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react"; // ✅ import manquant
import Header from "@/components/layout/Header";
import GridCard from "@/components/ui/GridCard";

// Typage pour un report
interface Report {
  id: number;
  title: string;
  date: string;
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {reports.map((report) => (
          <GridCard
            key={report.id}
            icon={FileText}
            title={report.title}
            date={report.date}
            contenu={report.contenu}
            onEdit={() => alert(`Modifier : ${report.title}`)}
            onDelete={() => alert(`Supprimer : ${report.title}`)}
          />
        ))}
      </div>
    </div>
  );
}