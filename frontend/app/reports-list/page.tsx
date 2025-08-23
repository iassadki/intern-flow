import { Pencil, LucideIcon } from "lucide-react";
import Header from '@/components/layout/Header';
import GridCard from '@/components/ui/GridCard';

export default function ReportsListPage() {
  return (
    <div className="bg-white min-h-screen p-6">
      <Header />
      <h1 className="text-4xl font-bold text-gray-800 mt-15 mb-6 p-3">Liste de comptes rendus</h1>
      <div className="bg-white rounded-lg">
        <GridCard />
      </div>
    </div>
  );
}
