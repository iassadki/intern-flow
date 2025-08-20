export default function Dashboard() {
  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord</h1>
      
      {/* Contenu du Dashboard */}
      <div className="bg-white rounded-lg p-6">
        <p className="text-gray-600">
          Bienvenue sur votre tableau de bord Intern Flow...
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
  );
}
