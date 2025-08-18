import Header from '@/components/layout/Header';

export default function Dashboard() {
  return (
    <div className="flex-1">
      <Header />
      
      {/* Contenu du Dashboard */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Tableau de bord</h2>
          <p className="text-gray-600">
            Contenu du dashboard à venir...
          </p>
          
          {/* Vous pouvez ajouter ici vos widgets, statistiques, etc. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700">Widget 1</h3>
              <p className="text-gray-500 text-sm">Données à venir</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700">Widget 2</h3>
              <p className="text-gray-500 text-sm">Données à venir</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700">Widget 3</h3>
              <p className="text-gray-500 text-sm">Données à venir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
