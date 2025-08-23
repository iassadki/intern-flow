const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { pool, testConnection } = require('./config/database');
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

app.get('/api/health', async (req, res) => {
  const dbStatus = await testConnection();
  res.json({ 
    status: 'healthy',
    database: dbStatus ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Routes API
app.get('/api/entreprises', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ENTREPRISE ORDER BY nom');
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des entreprises:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des entreprises' });
  }
});

app.get('/api/utilisateurs', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, nom, prenom, email, ville, specialite FROM UTILISATEUR ORDER BY nom');
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

// Route pour les comptes rendus
app.get('/api/comptes-rendus', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM CR ORDER BY dateCreation DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des comptes rendus:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des comptes rendus' });
  }
});

// Route pour créer un compte rendu
app.post('/api/comptes-rendus', async (req, res) => {
  const { titre, contenu } = req.body;
  
  if (!titre || !contenu) {
    return res.status(400).json({ error: 'Titre et contenu requis' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO CR (titre, contenu, dateCreation, dateModif) VALUES ($1, $2, NOW(), NOW()) RETURNING *',
      [titre, contenu]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erreur lors de la création du compte rendu:', error);
    res.status(500).json({ error: 'Erreur lors de la création du compte rendu' });
  }
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
const startServer = async () => {
  // Test de la connexion à la base de données au démarrage
  const dbConnected = await testConnection();
  
  if (!dbConnected) {
    console.error('❌ Impossible de se connecter à la base de données');
    process.exit(1);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Serveur backend démarré sur le port ${PORT}`);
    console.log(`📡 API accessible sur http://localhost:${PORT}`);
    console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
    console.log(`📊 Base de données: Connectée`);
  });
};

startServer();
