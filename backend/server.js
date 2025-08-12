const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes de base
app.get('/', (req, res) => {
  res.json({ 
    message: 'Intern Flow API est en cours d\'exécution !',
    version: '1.0.0',
    status: 'success'
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Routes API
app.get('/api/entreprises', (req, res) => {
  // TODO: Connecter à la base de données
  res.json([
    { id: 1, nom: 'Exemple Entreprise 1', ville: 'Paris' },
    { id: 2, nom: 'Exemple Entreprise 2', ville: 'Lyon' }
  ]);
});

app.get('/api/utilisateurs', (req, res) => {
  // TODO: Connecter à la base de données
  res.json([
    { id: 1, nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@email.com' },
    { id: 2, nom: 'Martin', prenom: 'Marie', email: 'marie.martin@email.com' }
  ]);
});

// Gestion des erreurs 404
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route non trouvée',
    path: req.originalUrl 
  });
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Erreur interne du serveur',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Une erreur est survenue'
  });
});

// Démarrage du serveur
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Serveur backend démarré sur le port ${PORT}`);
  console.log(`📡 API accessible sur http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
});
