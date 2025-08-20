import Header from '@/components/layout/Header';

export default function ReportsListPage() {
  return (
    <div className="bg-white min-h-screen p-6">
      <Header />
      <h1 className="text-4xl font-bold text-gray-800 mt-15 mb-6 p-3">Liste de comptes rendus</h1>
      <div className="bg-white rounded-lg p-6">
        <p className="text-gray-600">Liste des comptes rendus existants...</p>
      </div>
    </div>
  );
}
